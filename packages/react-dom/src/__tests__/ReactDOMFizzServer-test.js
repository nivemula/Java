/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let JSDOM;
let Stream;
let Scheduler;
let React;
let ReactDOM;
let ReactDOMFizzServer;
let Suspense;
let textCache;
let document;
let writable;
let buffer = '';
let hasErrored = false;
let fatalError = undefined;

describe('ReactDOMFizzServer', () => {
  beforeEach(() => {
    jest.resetModules();
    JSDOM = require('jsdom').JSDOM;
    Scheduler = require('scheduler');
    React = require('react');
    ReactDOM = require('react-dom');
    if (__EXPERIMENTAL__) {
      ReactDOMFizzServer = require('react-dom/unstable-fizz');
    }
    Stream = require('stream');
    Suspense = React.Suspense;
    textCache = new Map();

    // Test Environment
    const jsdom = new JSDOM('<!DOCTYPE html><html><head></head><body>', {
      runScripts: 'dangerously',
    });
    document = jsdom.window.document;

    buffer = '';
    hasErrored = false;

    writable = new Stream.PassThrough();
    writable.setEncoding('utf8');
    writable.on('data', chunk => {
      buffer += chunk;
    });
    writable.on('error', error => {
      hasErrored = true;
      fatalError = error;
    });
  });

  async function act(callback) {
    await callback();
    // Await one turn around the event loop.
    // This assumes that we'll flush everything we have so far.
    await new Promise(resolve => {
      setImmediate(resolve);
    });
    if (hasErrored) {
      throw fatalError;
    }
    // JSDOM doesn't support stream HTML parser so we need to give it a proper fragment.
    // We also want to execute any scripts that are embedded.
    // We assume that we have now received a proper fragment of HTML.
    const bufferedContent = buffer;
    buffer = '';
    const fakeBody = document.createElement('body');
    fakeBody.innerHTML = bufferedContent;
    while (fakeBody.firstChild) {
      const node = fakeBody.firstChild;
      if (node.nodeName === 'SCRIPT') {
        const script = document.createElement('script');
        script.textContent = node.textContent;
        fakeBody.removeChild(node);
        document.body.appendChild(script);
      } else {
        document.body.appendChild(node);
      }
    }
  }

  function getVisibleChildren(element) {
    const children = [];
    let node = element.firstChild;
    while (node) {
      if (node.nodeType === 1) {
        if (node.tagName !== 'SCRIPT' && !node.hasAttribute('hidden')) {
          const props = {};
          const attributes = node.attributes;
          for (let i = 0; i < attributes.length; i++) {
            props[attributes[i].name] = attributes[i].value;
          }
          props.children = getVisibleChildren(node);
          children.push(React.createElement(node.tagName.toLowerCase(), props));
        }
      } else if (node.nodeType === 3) {
        children.push(node.data);
      }
      node = node.nextSibling;
    }
    return children.length === 0
      ? null
      : children.length === 1
      ? children[0]
      : children;
  }

  function resolveText(text) {
    const record = textCache.get(text);
    if (record === undefined) {
      const newRecord = {
        status: 'resolved',
        value: text,
      };
      textCache.set(text, newRecord);
    } else if (record.status === 'pending') {
      const thenable = record.value;
      record.status = 'resolved';
      record.value = text;
      thenable.pings.forEach(t => t());
    }
  }

  /*
  function rejectText(text, error) {
    const record = textCache.get(text);
    if (record === undefined) {
      const newRecord = {
        status: 'rejected',
        value: error,
      };
      textCache.set(text, newRecord);
    } else if (record.status === 'pending') {
      const thenable = record.value;
      record.status = 'rejected';
      record.value = error;
      thenable.pings.forEach(t => t());
    }
  }
  */

  function readText(text) {
    const record = textCache.get(text);
    if (record !== undefined) {
      switch (record.status) {
        case 'pending':
          throw record.value;
        case 'rejected':
          throw record.value;
        case 'resolved':
          return record.value;
      }
    } else {
      const thenable = {
        pings: [],
        then(resolve) {
          if (newRecord.status === 'pending') {
            thenable.pings.push(resolve);
          } else {
            Promise.resolve().then(() => resolve(newRecord.value));
          }
        },
      };

      const newRecord = {
        status: 'pending',
        value: thenable,
      };
      textCache.set(text, newRecord);

      throw thenable;
    }
  }

  function Text({text}) {
    return text;
  }

  function AsyncText({text}) {
    return readText(text);
  }

  // @gate experimental
  it('should asynchronously load the suspense boundary', async () => {
    await act(async () => {
      ReactDOMFizzServer.pipeToNodeWritable(
        <div>
          <Suspense fallback={<Text text="Loading..." />}>
            <AsyncText text="Hello World" />
          </Suspense>
        </div>,
        writable,
      );
    });
    expect(getVisibleChildren(document.body)).toEqual(<div>Loading...</div>);
    await act(async () => {
      resolveText('Hello World');
    });
    expect(getVisibleChildren(document.body)).toEqual(<div>Hello World</div>);
  });

  // @gate experimental
  it('waits for pending content to come in from the server and then hydrates it', async () => {
    const ref = React.createRef();

    function App() {
      return (
        <div>
          <Suspense fallback="Loading...">
            <h1 ref={ref}>
              <AsyncText text="Hello" />
            </h1>
          </Suspense>
        </div>
      );
    }

    await act(async () => {
      ReactDOMFizzServer.pipeToNodeWritable(
        // We currently have to wrap the server node in a container because
        // otherwise the Fizz nodes get deleted during hydration.
        <div id="container">
          <App />
        </div>,
        writable,
      );
    });

    // We're still showing a fallback.

    // Attempt to hydrate the content.
    const container = document.body.firstChild;
    const root = ReactDOM.createRoot(container, {hydrate: true});
    root.render(<App />);
    Scheduler.unstable_flushAll();

    // We're still loading because we're waiting for the server to stream more content.
    expect(getVisibleChildren(container)).toEqual(<div>Loading...</div>);

    // The server now updates the content in place in the fallback.
    await act(async () => {
      resolveText('Hello');
    });

    // The final HTML is now in place.
    expect(getVisibleChildren(container)).toEqual(
      <div>
        <h1>Hello</h1>
      </div>,
    );
    const h1 = container.getElementsByTagName('h1')[0];

    // But it is not yet hydrated.
    expect(ref.current).toBe(null);

    Scheduler.unstable_flushAll();

    // Now it's hydrated.
    expect(ref.current).toBe(h1);
  });
});
