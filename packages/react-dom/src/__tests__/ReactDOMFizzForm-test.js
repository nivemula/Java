/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

import {insertNodesAndExecuteScripts} from '../test-utils/FizzTestUtils';

// Polyfills for test environment
global.ReadableStream =
  require('web-streams-polyfill/ponyfill/es6').ReadableStream;
global.TextEncoder = require('util').TextEncoder;

let act;
let container;
let React;
let ReactDOMServer;
let ReactDOMClient;
let useFormStatus;
let useOptimistic;
let useActionState;

describe('ReactDOMFizzForm', () => {
  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOMServer = require('react-dom/server.browser');
    ReactDOMClient = require('react-dom/client');
    useFormStatus = require('react-dom').useFormStatus;
    useOptimistic = require('react').useOptimistic;
    act = require('internal-test-utils').act;
    container = document.createElement('div');
    document.body.appendChild(container);
    if (__VARIANT__) {
      // Remove after API is deleted.
      useActionState = require('react-dom').useFormState;
    } else {
      useActionState = require('react').useActionState;
    }
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  function submit(submitter) {
    const form = submitter.form || submitter;
    if (!submitter.form) {
      submitter = undefined;
    }
    const submitEvent = new Event('submit', {bubbles: true, cancelable: true});
    submitEvent.submitter = submitter;
    const returnValue = form.dispatchEvent(submitEvent);
    if (!returnValue) {
      return;
    }
    const action =
      (submitter && submitter.getAttribute('formaction')) || form.action;
    if (!/\s*javascript:/i.test(action)) {
      throw new Error('Navigate to: ' + action);
    }
  }

  async function readIntoContainer(stream) {
    const reader = stream.getReader();
    let result = '';
    while (true) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      result += Buffer.from(value).toString('utf8');
    }
    const temp = document.createElement('div');
    temp.innerHTML = result;
    insertNodesAndExecuteScripts(temp, container, null);
  }

  // @gate enableFormActions
  it('should allow passing a function to form action during SSR', async () => {
    const ref = React.createRef();
    let foo;

    function action(formData) {
      foo = formData.get('foo');
    }
    function App() {
      return (
        <form action={action} ref={ref}>
          <input type="text" name="foo" defaultValue="bar" />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    submit(ref.current);

    expect(foo).toBe('bar');
  });

  // @gate enableFormActions
  it('should allow passing a function to an input/button formAction', async () => {
    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    let rootActionCalled = false;
    let savedTitle = null;
    let deletedTitle = null;

    function action(formData) {
      rootActionCalled = true;
    }

    function saveItem(formData) {
      savedTitle = formData.get('title');
    }

    function deleteItem(formData) {
      deletedTitle = formData.get('title');
    }

    function App() {
      return (
        <form action={action}>
          <input type="text" name="title" defaultValue="Hello" />
          <input
            type="submit"
            formAction={saveItem}
            value="Save"
            ref={inputRef}
          />
          <button formAction={deleteItem} ref={buttonRef}>
            Delete
          </button>
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    expect(savedTitle).toBe(null);
    expect(deletedTitle).toBe(null);

    submit(inputRef.current);
    expect(savedTitle).toBe('Hello');
    expect(deletedTitle).toBe(null);
    savedTitle = null;

    submit(buttonRef.current);
    expect(savedTitle).toBe(null);
    expect(deletedTitle).toBe('Hello');
    deletedTitle = null;

    expect(rootActionCalled).toBe(false);
  });

  // @gate enableFormActions || !__DEV__
  it('should warn when passing a function action during SSR and string during hydration', async () => {
    function action(formData) {}
    function App({isClient}) {
      return (
        <form action={isClient ? 'action' : action}>
          <input type="text" name="foo" defaultValue="bar" />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    await expect(async () => {
      await act(async () => {
        ReactDOMClient.hydrateRoot(container, <App isClient={true} />);
      });
    }).toErrorDev(
      'Prop `action` did not match. Server: "function" Client: "action"',
    );
  });

  // @gate enableFormActions || !__DEV__
  it('should ideally warn when passing a string during SSR and function during hydration', async () => {
    function action(formData) {}
    function App({isClient}) {
      return (
        <form action={isClient ? action : 'action'}>
          <input type="text" name="foo" defaultValue="bar" />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    // This should ideally warn because only the client provides a function that doesn't line up.
    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App isClient={true} />);
    });
  });

  // @gate enableFormActions || !__DEV__
  it('should reset form fields after you update away from hydrated function', async () => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    function action(formData) {}
    function App({isUpdate}) {
      return (
        <form
          action={isUpdate ? 'action' : action}
          ref={formRef}
          method={isUpdate ? 'POST' : null}>
          <input
            type="submit"
            formAction={isUpdate ? 'action' : action}
            ref={inputRef}
            formTarget={isUpdate ? 'elsewhere' : null}
          />
          <button
            formAction={isUpdate ? 'action' : action}
            ref={buttonRef}
            formEncType={isUpdate ? 'multipart/form-data' : null}
          />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    let root;
    await act(async () => {
      root = ReactDOMClient.hydrateRoot(container, <App />);
    });
    await act(async () => {
      root.render(<App isUpdate={true} />);
    });
    expect(formRef.current.getAttribute('action')).toBe('action');
    expect(formRef.current.hasAttribute('encType')).toBe(false);
    expect(formRef.current.getAttribute('method')).toBe('POST');
    expect(formRef.current.hasAttribute('target')).toBe(false);

    expect(inputRef.current.getAttribute('formAction')).toBe('action');
    expect(inputRef.current.hasAttribute('name')).toBe(false);
    expect(inputRef.current.hasAttribute('formEncType')).toBe(false);
    expect(inputRef.current.hasAttribute('formMethod')).toBe(false);
    expect(inputRef.current.getAttribute('formTarget')).toBe('elsewhere');

    expect(buttonRef.current.getAttribute('formAction')).toBe('action');
    expect(buttonRef.current.hasAttribute('name')).toBe(false);
    expect(buttonRef.current.getAttribute('formEncType')).toBe(
      'multipart/form-data',
    );
    expect(buttonRef.current.hasAttribute('formMethod')).toBe(false);
    expect(buttonRef.current.hasAttribute('formTarget')).toBe(false);
  });

  // @gate enableFormActions || !__DEV__
  it('should reset form fields after you remove a hydrated function', async () => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    function action(formData) {}
    function App({isUpdate}) {
      return (
        <form action={isUpdate ? undefined : action} ref={formRef}>
          <input
            type="submit"
            formAction={isUpdate ? undefined : action}
            ref={inputRef}
          />
          <button formAction={isUpdate ? undefined : action} ref={buttonRef} />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    let root;
    await act(async () => {
      root = ReactDOMClient.hydrateRoot(container, <App />);
    });
    await act(async () => {
      root.render(<App isUpdate={true} />);
    });
    expect(formRef.current.hasAttribute('action')).toBe(false);
    expect(formRef.current.hasAttribute('encType')).toBe(false);
    expect(formRef.current.hasAttribute('method')).toBe(false);
    expect(formRef.current.hasAttribute('target')).toBe(false);

    expect(inputRef.current.hasAttribute('formAction')).toBe(false);
    expect(inputRef.current.hasAttribute('name')).toBe(false);
    expect(inputRef.current.hasAttribute('formEncType')).toBe(false);
    expect(inputRef.current.hasAttribute('formMethod')).toBe(false);
    expect(inputRef.current.hasAttribute('formTarget')).toBe(false);

    expect(buttonRef.current.hasAttribute('formAction')).toBe(false);
    expect(buttonRef.current.hasAttribute('name')).toBe(false);
    expect(buttonRef.current.hasAttribute('formEncType')).toBe(false);
    expect(buttonRef.current.hasAttribute('formMethod')).toBe(false);
    expect(buttonRef.current.hasAttribute('formTarget')).toBe(false);
  });

  // @gate enableFormActions || !__DEV__
  it('should restore the form fields even if they were incorrectly set', async () => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    function action(formData) {}
    function App({isUpdate}) {
      return (
        <form
          action={isUpdate ? 'action' : action}
          ref={formRef}
          method="DELETE">
          <input
            type="submit"
            formAction={isUpdate ? 'action' : action}
            ref={inputRef}
            formTarget="elsewhere"
          />
          <button
            formAction={isUpdate ? 'action' : action}
            ref={buttonRef}
            formEncType="text/plain"
          />
        </form>
      );
    }

    // Specifying the extra form fields are a DEV error, but we expect it
    // to eventually still be patched up after an update.
    await expect(async () => {
      const stream = await ReactDOMServer.renderToReadableStream(<App />);
      await readIntoContainer(stream);
    }).toErrorDev([
      'Cannot specify a encType or method for a form that specifies a function as the action.',
      'Cannot specify a formTarget for a button that specifies a function as a formAction.',
    ]);
    let root;
    await expect(async () => {
      await act(async () => {
        root = ReactDOMClient.hydrateRoot(container, <App />);
      });
    }).toErrorDev(['Prop `formTarget` did not match.']);
    await act(async () => {
      root.render(<App isUpdate={true} />);
    });
    expect(formRef.current.getAttribute('action')).toBe('action');
    expect(formRef.current.hasAttribute('encType')).toBe(false);
    expect(formRef.current.getAttribute('method')).toBe('DELETE');
    expect(formRef.current.hasAttribute('target')).toBe(false);

    expect(inputRef.current.getAttribute('formAction')).toBe('action');
    expect(inputRef.current.hasAttribute('name')).toBe(false);
    expect(inputRef.current.hasAttribute('formEncType')).toBe(false);
    expect(inputRef.current.hasAttribute('formMethod')).toBe(false);
    expect(inputRef.current.getAttribute('formTarget')).toBe('elsewhere');

    expect(buttonRef.current.getAttribute('formAction')).toBe('action');
    expect(buttonRef.current.hasAttribute('name')).toBe(false);
    expect(buttonRef.current.getAttribute('formEncType')).toBe('text/plain');
    expect(buttonRef.current.hasAttribute('formMethod')).toBe(false);
    expect(buttonRef.current.hasAttribute('formTarget')).toBe(false);
  });

  // @gate enableFormActions
  // @gate enableAsyncActions
  it('useFormStatus is not pending during server render', async () => {
    function App() {
      const {pending} = useFormStatus();
      return 'Pending: ' + pending;
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    expect(container.textContent).toBe('Pending: false');

    await act(() => ReactDOMClient.hydrateRoot(container, <App />));
    expect(container.textContent).toBe('Pending: false');
  });

  // @gate enableFormActions
  it('should replay a form action after hydration', async () => {
    let foo;
    function action(formData) {
      foo = formData.get('foo');
    }
    function App() {
      return (
        <form action={action}>
          <input type="text" name="foo" defaultValue="bar" />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);

    // Dispatch an event before hydration
    submit(container.getElementsByTagName('form')[0]);

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    // It should've now been replayed
    expect(foo).toBe('bar');
  });

  // @gate enableFormActions
  it('should replay input/button formAction', async () => {
    let rootActionCalled = false;
    let savedTitle = null;
    let deletedTitle = null;

    function action(formData) {
      rootActionCalled = true;
    }

    function saveItem(formData) {
      savedTitle = formData.get('title');
    }

    function deleteItem(formData) {
      deletedTitle = formData.get('title');
    }

    function App() {
      return (
        <form action={action}>
          <input type="text" name="title" defaultValue="Hello" />
          <input type="submit" formAction={saveItem} value="Save" />
          <button formAction={deleteItem}>Delete</button>
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);

    submit(container.getElementsByTagName('input')[1]);
    submit(container.getElementsByTagName('button')[0]);

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    expect(savedTitle).toBe('Hello');
    expect(deletedTitle).toBe('Hello');
    expect(rootActionCalled).toBe(false);
  });

  // @gate enableAsyncActions
  it('useOptimistic returns passthrough value', async () => {
    function App() {
      const [optimisticState] = useOptimistic('hi');
      return optimisticState;
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    expect(container.textContent).toBe('hi');

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });
    expect(container.textContent).toBe('hi');
  });

  // @gate enableFormActions
  // @gate enableAsyncActions
  it('useActionState returns initial state', async () => {
    async function action(state) {
      return state;
    }

    function App() {
      const [state] = useActionState(action, 0);
      return state;
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);
    expect(container.textContent).toBe('0');

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });
    expect(container.textContent).toBe('0');
  });

  // @gate enableFormActions
  it('can provide a custom action on the server for actions', async () => {
    const ref = React.createRef();
    let foo;

    function action(formData) {
      foo = formData.get('foo');
    }
    action.$$FORM_ACTION = function (identifierPrefix) {
      const extraFields = new FormData();
      extraFields.append(identifierPrefix + 'hello', 'world');
      return {
        action: this.name,
        name: identifierPrefix,
        method: 'POST',
        encType: 'multipart/form-data',
        target: 'self',
        data: extraFields,
      };
    };
    function App() {
      return (
        <form action={action} ref={ref} method={null}>
          <input type="text" name="foo" defaultValue="bar" />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);

    const form = container.firstChild;
    expect(form.getAttribute('action')).toBe('action');
    expect(form.getAttribute('method')).toBe('POST');
    expect(form.getAttribute('enctype')).toBe('multipart/form-data');
    expect(form.getAttribute('target')).toBe('self');
    const formActionName = form.firstChild.getAttribute('name');
    expect(
      container
        .querySelector('input[name="' + formActionName + 'hello"]')
        .getAttribute('value'),
    ).toBe('world');

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    submit(ref.current);

    expect(foo).toBe('bar');
  });

  // @gate enableFormActions
  it('can provide a custom action on buttons the server for actions', async () => {
    const hiddenRef = React.createRef();
    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    let foo;

    function action(formData) {
      foo = formData.get('foo');
    }
    action.$$FORM_ACTION = function (identifierPrefix) {
      const extraFields = new FormData();
      extraFields.append(identifierPrefix + 'hello', 'world');
      return {
        action: this.name,
        name: identifierPrefix,
        method: 'POST',
        encType: 'multipart/form-data',
        target: 'self',
        data: extraFields,
      };
    };
    function App() {
      return (
        <form>
          <input type="hidden" name="foo" value="bar" ref={hiddenRef} />
          <input
            type="submit"
            formAction={action}
            method={null}
            ref={inputRef}
          />
          <button formAction={action} ref={buttonRef} target={null} />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);

    const input = container.getElementsByTagName('input')[1];
    const button = container.getElementsByTagName('button')[0];
    expect(input.getAttribute('formaction')).toBe('action');
    expect(input.getAttribute('formmethod')).toBe('POST');
    expect(input.getAttribute('formenctype')).toBe('multipart/form-data');
    expect(input.getAttribute('formtarget')).toBe('self');
    expect(button.getAttribute('formaction')).toBe('action');
    expect(button.getAttribute('formmethod')).toBe('POST');
    expect(button.getAttribute('formenctype')).toBe('multipart/form-data');
    expect(button.getAttribute('formtarget')).toBe('self');
    const inputName = input.getAttribute('name');
    const buttonName = button.getAttribute('name');
    expect(
      container
        .querySelector('input[name="' + inputName + 'hello"]')
        .getAttribute('value'),
    ).toBe('world');
    expect(
      container
        .querySelector('input[name="' + buttonName + 'hello"]')
        .getAttribute('value'),
    ).toBe('world');

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    expect(hiddenRef.current.name).toBe('foo');

    submit(inputRef.current);

    expect(foo).toBe('bar');

    foo = null;

    submit(buttonRef.current);

    expect(foo).toBe('bar');
  });

  // @gate enableFormActions
  it('can hydrate hidden fields in the beginning of a form', async () => {
    const hiddenRef = React.createRef();

    let invoked = false;
    function action(formData) {
      invoked = true;
    }
    action.$$FORM_ACTION = function (identifierPrefix) {
      const extraFields = new FormData();
      extraFields.append(identifierPrefix + 'hello', 'world');
      return {
        action: '',
        name: identifierPrefix,
        method: 'POST',
        encType: 'multipart/form-data',
        data: extraFields,
      };
    };
    function App() {
      return (
        <form action={action}>
          <input type="hidden" name="bar" defaultValue="baz" ref={hiddenRef} />
          <input type="text" name="foo" defaultValue="bar" />
        </form>
      );
    }

    const stream = await ReactDOMServer.renderToReadableStream(<App />);
    await readIntoContainer(stream);

    const barField = container.querySelector('[name=bar]');

    await act(async () => {
      ReactDOMClient.hydrateRoot(container, <App />);
    });

    expect(hiddenRef.current).toBe(barField);

    expect(hiddenRef.current.name).toBe('bar');
    expect(hiddenRef.current.value).toBe('baz');

    expect(container.querySelectorAll('[name=bar]').length).toBe(1);

    submit(hiddenRef.current.form);

    expect(invoked).toBe(true);
  });
});
