/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

describe('forwardRef', () => {
  let React;
  let ReactNoop;

  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactNoop = require('react-noop-renderer');
  });

  it('should update refs when switching between children', () => {
    function FunctionalComponent({forwardedRef, setRefOnDiv}) {
      return (
        <section>
          <div ref={setRefOnDiv ? forwardedRef : null}>First</div>
          <span ref={setRefOnDiv ? null : forwardedRef}>Second</span>
        </section>
      );
    }

    const RefForwardingComponent = React.forwardRef((props, ref) => (
      <FunctionalComponent {...props} forwardedRef={ref} />
    ));

    const ref = React.createRef();

    ReactNoop.render(<RefForwardingComponent ref={ref} setRefOnDiv={true} />);
    ReactNoop.flush();
    expect(ref.current.type).toBe('div');

    ReactNoop.render(<RefForwardingComponent ref={ref} setRefOnDiv={false} />);
    ReactNoop.flush();
    expect(ref.current.type).toBe('span');
  });

  it('should support rendering null', () => {
    const RefForwardingComponent = React.forwardRef((props, ref) => null);

    const ref = React.createRef();

    ReactNoop.render(<RefForwardingComponent ref={ref} />);
    ReactNoop.flush();
    expect(ref.current).toBe(null);
  });

  it('should support rendering null for multiple children', () => {
    const RefForwardingComponent = React.forwardRef((props, ref) => null);

    const ref = React.createRef();

    ReactNoop.render(
      <div>
        <div />
        <RefForwardingComponent ref={ref} />
        <div />
      </div>,
    );
    ReactNoop.flush();
    expect(ref.current).toBe(null);
  });

  it('should warn if not provided a callback during creation', () => {
    expect(() => React.forwardRef(undefined)).toWarnDev(
      'forwardRef requires a render function but was given undefined.',
    );
    expect(() => React.forwardRef(null)).toWarnDev(
      'forwardRef requires a render function but was given null.',
    );
    expect(() => React.forwardRef('foo')).toWarnDev(
      'forwardRef requires a render function but was given string.',
    );
  });

  it('should warn if no render function is provided', () => {
    expect(React.forwardRef).toWarnDev(
      'forwardRef requires a render function but was given undefined.',
    );
  });

  it('should warn if the render function provided has propTypes or defaultProps attributes', () => {
    function renderWithPropTypes() {
      return null;
    }
    renderWithPropTypes.propTypes = {};

    function renderWithDefaultProps() {
      return null;
    }
    renderWithDefaultProps.defaultProps = {};

    expect(() => React.forwardRef(renderWithPropTypes)).toWarnDev(
      'forwardRef render functions do not support propTypes or defaultProps. ' +
        'Did you accidentally pass a React component?',
    );
    expect(() => React.forwardRef(renderWithDefaultProps)).toWarnDev(
      'forwardRef render functions do not support propTypes or defaultProps. ' +
        'Did you accidentally pass a React component?',
    );
  });
});
