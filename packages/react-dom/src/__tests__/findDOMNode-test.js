/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMClient = require('react-dom/client');
const ReactTestUtils = require('react-dom/test-utils');
const act = require('internal-test-utils').act;
const StrictMode = React.StrictMode;

describe('findDOMNode', () => {
  it('findDOMNode should return null if passed null', () => {
    expect(ReactDOM.findDOMNode(null)).toBe(null);
  });

  it('findDOMNode should find dom element', () => {
    class MyNode extends React.Component {
      render() {
        return (
          <div>
            <span>Noise</span>
          </div>
        );
      }
    }

    const myNode = ReactTestUtils.renderIntoDocument(<MyNode />);
    const myDiv = ReactDOM.findDOMNode(myNode);
    const mySameDiv = ReactDOM.findDOMNode(myDiv);
    expect(myDiv.tagName).toBe('DIV');
    expect(mySameDiv).toBe(myDiv);
  });

  it('findDOMNode should find dom element after an update from null', async () => {
    function Bar({flag}) {
      if (flag) {
        return <span>A</span>;
      }
      return null;
    }
    class MyNode extends React.Component {
      render() {
        return <Bar flag={this.props.flag} />;
      }
    }

    const container = document.createElement('div');
    const root = ReactDOMClient.createRoot(container);

    const nodeRef = React.createRef();
    await act(async () => {
      root.render(<MyNode ref={nodeRef} />);
    });
    const nodeAfterInitialRender = nodeRef.current;
    const a = ReactDOM.findDOMNode(nodeAfterInitialRender);
    expect(a).toBe(null);

    await act(async () => {
      root.render(<MyNode flag={true} ref={nodeRef} />);
    });
    const nodeAfterUpdate = nodeRef.current;
    expect(nodeAfterInitialRender === nodeAfterUpdate).toBe(true);

    const b = ReactDOM.findDOMNode(nodeRef.current);
    expect(b.tagName).toBe('SPAN');
  });

  it('findDOMNode should reject random objects', () => {
    expect(function () {
      ReactDOM.findDOMNode({foo: 'bar'});
    }).toThrowError('Argument appears to not be a ReactComponent. Keys: foo');
  });

  it('findDOMNode should reject unmounted objects with render func', async () => {
    class Foo extends React.Component {
      render() {
        return <div />;
      }
    }

    const container = document.createElement('div');
    const root = ReactDOMClient.createRoot(container);
    const fooRef = React.createRef();
    await act(async () => {
      root.render(<Foo ref={fooRef} />);
    });
    const inst = fooRef.current;
    await act(async () => {
      root.unmount();
    });

    expect(() => ReactDOM.findDOMNode(inst)).toThrowError(
      'Unable to find node on an unmounted component.',
    );
  });

  it('findDOMNode should not throw an error when called within a component that is not mounted', () => {
    class Bar extends React.Component {
      UNSAFE_componentWillMount() {
        expect(ReactDOM.findDOMNode(this)).toBeNull();
      }

      render() {
        return <div />;
      }
    }
    expect(() => ReactTestUtils.renderIntoDocument(<Bar />)).not.toThrow();
  });

  it('findDOMNode should warn if used to find a host component inside StrictMode', () => {
    let parent = undefined;
    let child = undefined;

    class ContainsStrictModeChild extends React.Component {
      render() {
        return (
          <StrictMode>
            <div ref={n => (child = n)} />
          </StrictMode>
        );
      }
    }

    ReactTestUtils.renderIntoDocument(
      <ContainsStrictModeChild ref={n => (parent = n)} />,
    );

    let match;
    expect(() => (match = ReactDOM.findDOMNode(parent))).toErrorDev([
      'Warning: findDOMNode is deprecated in StrictMode. ' +
        'findDOMNode was passed an instance of ContainsStrictModeChild which renders StrictMode children. ' +
        'Instead, add a ref directly to the element you want to reference. ' +
        'Learn more about using refs safely here: ' +
        'https://reactjs.org/link/strict-mode-find-node' +
        '\n    in div (at **)' +
        '\n    in ContainsStrictModeChild (at **)',
    ]);
    expect(match).toBe(child);
  });

  it('findDOMNode should warn if passed a component that is inside StrictMode', () => {
    let parent = undefined;
    let child = undefined;

    class IsInStrictMode extends React.Component {
      render() {
        return <div ref={n => (child = n)} />;
      }
    }

    ReactTestUtils.renderIntoDocument(
      <StrictMode>
        <IsInStrictMode ref={n => (parent = n)} />
      </StrictMode>,
    );

    let match;
    expect(() => (match = ReactDOM.findDOMNode(parent))).toErrorDev([
      'Warning: findDOMNode is deprecated in StrictMode. ' +
        'findDOMNode was passed an instance of IsInStrictMode which is inside StrictMode. ' +
        'Instead, add a ref directly to the element you want to reference. ' +
        'Learn more about using refs safely here: ' +
        'https://reactjs.org/link/strict-mode-find-node' +
        '\n    in div (at **)' +
        '\n    in IsInStrictMode (at **)',
    ]);
    expect(match).toBe(child);
  });
});
