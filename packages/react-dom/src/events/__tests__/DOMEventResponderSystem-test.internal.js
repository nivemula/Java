/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;
let ReactFeatureFlags;
let ReactDOM;
let ReactSymbols;

function createReactEventComponent(
  targetEventTypes,
  createInitialState,
  onBubbledTargetEvent,
  onCapturedTargetEvent,
  onRootEvent,
  onUnmount,
  onOwnershipChange,
  stopLocalPropagation,
) {
  const testEventResponder = {
    targetEventTypes,
    createInitialState,
    onBubbledTargetEvent,
    onCapturedTargetEvent,
    onRootEvent,
    onUnmount,
    onOwnershipChange,
    stopLocalPropagation: stopLocalPropagation || false,
  };

  return {
    $$typeof: Symbol.for('react.event_component'),
    displayName: 'TestEventComponent',
    props: null,
    responder: testEventResponder,
  };
}

function dispatchEvent(element, type) {
  const event = document.createEvent('Event');
  event.initEvent(type, true, true);
  element.dispatchEvent(event);
}

function dispatchClickEvent(element) {
  dispatchEvent(element, 'click');
}

function createReactEventTarget(type) {
  return {
    $$typeof: ReactSymbols.REACT_EVENT_TARGET_TYPE,
    displayName: 'TestEventTarget',
    type,
  };
}

// This is a new feature in Fiber so I put it in its own test file. It could
// probably move to one of the other test files once it is official.
describe('DOMEventResponderSystem', () => {
  let container;

  beforeEach(() => {
    jest.resetModules();
    ReactFeatureFlags = require('shared/ReactFeatureFlags');
    ReactFeatureFlags.enableEventAPI = true;
    React = require('react');
    ReactDOM = require('react-dom');
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactSymbols = require('shared/ReactSymbols');
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('the event responder event listeners should fire on click event', () => {
    let eventResponderFiredCount = 0;
    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventResponderFiredCount++;
        eventLog.push({
          name: event.type,
          passive: event.passive,
          passiveSupported: event.passiveSupported,
          phase: 'bubble',
        });
      },
      (event, context, props) => {
        eventResponderFiredCount++;
        eventLog.push({
          name: event.type,
          passive: event.passive,
          passiveSupported: event.passiveSupported,
          phase: 'capture',
        });
      },
    );

    const Test = () => (
      <ClickEventComponent>
        <button ref={buttonRef}>Click me!</button>
      </ClickEventComponent>
    );

    ReactDOM.render(<Test />, container);
    expect(container.innerHTML).toBe('<button>Click me!</button>');

    // Clicking the button should trigger the event responder onEvent() twice
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    expect(eventResponderFiredCount).toBe(2);
    expect(eventLog.length).toBe(2);
    // JSDOM does not support passive events, so this will be false
    expect(eventLog).toEqual([
      {
        name: 'click',
        passive: false,
        passiveSupported: false,
        phase: 'capture',
      },
      {
        name: 'click',
        passive: false,
        passiveSupported: false,
        phase: 'bubble',
      },
    ]);

    // Unmounting the container and clicking should not increment anything
    ReactDOM.render(null, container);
    dispatchClickEvent(buttonElement);
    expect(eventResponderFiredCount).toBe(2);

    // Re-rendering the container and clicking should increase the counters again
    ReactDOM.render(<Test />, container);
    buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    expect(eventResponderFiredCount).toBe(4);
  });

  it('the event responder event listeners should fire on click event (passive events forced)', () => {
    // JSDOM does not support passive events, so this manually overrides the value to be true
    const checkPassiveEvents = require('react-dom/src/events/checkPassiveEvents');
    checkPassiveEvents.passiveBrowserEventsSupported = true;

    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventLog.push({
          name: event.type,
          passive: event.passive,
          passiveSupported: event.passiveSupported,
          phase: 'bubble',
        });
      },
      (event, context, props) => {
        eventLog.push({
          name: event.type,
          passive: event.passive,
          passiveSupported: event.passiveSupported,
          phase: 'capture',
        });
      },
    );

    const Test = () => (
      <ClickEventComponent>
        <button ref={buttonRef}>Click me!</button>
      </ClickEventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    expect(eventLog.length).toBe(2);
    expect(eventLog).toEqual([
      {
        name: 'click',
        passive: true,
        passiveSupported: true,
        phase: 'capture',
      },
      {
        name: 'click',
        passive: true,
        passiveSupported: true,
        phase: 'bubble',
      },
    ]);
  });

  it('nested event responders and their event listeners should fire multiple times', () => {
    let eventResponderFiredCount = 0;
    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventResponderFiredCount++;
        eventLog.push({
          name: event.type,
          passive: event.passive,
          passiveSupported: event.passiveSupported,
          phase: 'bubble',
        });
      },
      (event, context, props) => {
        eventResponderFiredCount++;
        eventLog.push({
          name: event.type,
          passive: event.passive,
          passiveSupported: event.passiveSupported,
          phase: 'capture',
        });
      },
    );

    const Test = () => (
      <ClickEventComponent>
        <ClickEventComponent>
          <button ref={buttonRef}>Click me!</button>
        </ClickEventComponent>
      </ClickEventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    expect(eventResponderFiredCount).toBe(4);
    expect(eventLog.length).toBe(4);
    // JSDOM does not support passive events, so this will be false
    expect(eventLog).toEqual([
      {
        name: 'click',
        passive: false,
        passiveSupported: false,
        phase: 'capture',
      },
      {
        name: 'click',
        passive: false,
        passiveSupported: false,
        phase: 'capture',
      },
      {
        name: 'click',
        passive: false,
        passiveSupported: false,
        phase: 'bubble',
      },
      {
        name: 'click',
        passive: false,
        passiveSupported: false,
        phase: 'bubble',
      },
    ]);
  });

  it('nested event responders and their event listeners should fire in the correct order', () => {
    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponentA = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventLog.push(`A [bubble]`);
      },
      (event, context, props) => {
        eventLog.push(`A [capture]`);
      },
    );

    const ClickEventComponentB = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventLog.push(`B [bubble]`);
      },
      (event, context, props) => {
        eventLog.push(`B [capture]`);
      },
    );

    const Test = () => (
      <ClickEventComponentA>
        <ClickEventComponentB>
          <button ref={buttonRef}>Click me!</button>
        </ClickEventComponentB>
      </ClickEventComponentA>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);

    expect(eventLog).toEqual([
      'A [capture]',
      'B [capture]',
      'B [bubble]',
      'A [bubble]',
    ]);
  });

  it('nested event responders should fire in the correct order without stopLocalPropagation', () => {
    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventLog.push(`${props.name} [bubble]`);
      },
      (event, context, props) => {
        eventLog.push(`${props.name} [capture]`);
      },
      undefined,
      undefined,
      undefined,
      false,
    );

    const Test = () => (
      <ClickEventComponent name="A">
        <ClickEventComponent name="B">
          <button ref={buttonRef}>Click me!</button>
        </ClickEventComponent>
      </ClickEventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);

    expect(eventLog).toEqual([
      'A [capture]',
      'B [capture]',
      'B [bubble]',
      'A [bubble]',
    ]);
  });

  it('nested event responders should fire in the correct order with stopLocalPropagation', () => {
    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        eventLog.push(`${props.name} [bubble]`);
      },
      (event, context, props) => {
        eventLog.push(`${props.name} [capture]`);
      },
      undefined,
      undefined,
      undefined,
      true,
    );

    const Test = () => (
      <ClickEventComponent name="A">
        <ClickEventComponent name="B">
          <button ref={buttonRef}>Click me!</button>
        </ClickEventComponent>
      </ClickEventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);

    expect(eventLog).toEqual(['A [capture]', 'B [bubble]']);
  });

  it('custom event dispatching for click -> magicClick works', () => {
    let eventLog = [];
    const buttonRef = React.createRef();

    const ClickEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        if (props.onMagicClick) {
          const syntheticEvent = {
            target: event.target,
            type: 'magicclick',
            phase: 'bubble',
          };
          context.dispatchEvent(syntheticEvent, props.onMagicClick, {
            discrete: true,
          });
        }
      },
      (event, context, props) => {
        if (props.onMagicClick) {
          const syntheticEvent = {
            target: event.target,
            type: 'magicclick',
            phase: 'capture',
          };
          context.dispatchEvent(syntheticEvent, props.onMagicClick, {
            discrete: true,
          });
        }
      },
    );

    function handleMagicEvent(e) {
      eventLog.push('magic event fired', e.type, e.phase);
    }

    const Test = () => (
      <ClickEventComponent onMagicClick={handleMagicEvent}>
        <button ref={buttonRef}>Click me!</button>
      </ClickEventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);

    expect(eventLog).toEqual([
      'magic event fired',
      'magicclick',
      'capture',
      'magic event fired',
      'magicclick',
      'bubble',
    ]);
  });

  it('async event dispatching works', () => {
    let eventLog = [];
    const buttonRef = React.createRef();

    function handleEvent(event, context, props, phase) {
      const pressEvent = {
        target: event.target,
        type: 'press',
        phase,
      };
      context.dispatchEvent(pressEvent, props.onPress, {discrete: true});

      context.setTimeout(() => {
        if (props.onLongPress) {
          const longPressEvent = {
            target: event.target,
            type: 'longpress',
            phase,
          };
          context.dispatchEvent(longPressEvent, props.onLongPress, {
            discrete: true,
          });
        }

        if (props.onLongPressChange) {
          const longPressChangeEvent = {
            target: event.target,
            type: 'longpresschange',
            phase,
          };
          context.dispatchEvent(longPressChangeEvent, props.onLongPressChange, {
            discrete: true,
          });
        }
      }, 500);
    }

    const LongPressEventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props) => {
        handleEvent(event, context, props, 'bubble');
      },
      (event, context, props) => {
        handleEvent(event, context, props, 'capture');
      },
    );

    function log(msg) {
      eventLog.push(msg);
    }

    const Test = () => (
      <LongPressEventComponent
        onPress={e => log('press ' + e.phase)}
        onLongPress={e => log('longpress ' + e.phase)}
        onLongPressChange={e => log('longpresschange ' + e.phase)}>
        <button ref={buttonRef}>Click me!</button>
      </LongPressEventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    jest.runAllTimers();

    expect(eventLog).toEqual([
      'press capture',
      'press bubble',
      'longpress capture',
      'longpresschange capture',
      'longpress bubble',
      'longpresschange bubble',
    ]);
  });

  it('the event responder onUnmount() function should fire', () => {
    let onUnmountFired = 0;

    const EventComponent = createReactEventComponent(
      [],
      undefined,
      undefined,
      undefined,
      (event, context, props, state) => {},
      () => {
        onUnmountFired++;
      },
    );

    const Test = () => (
      <EventComponent>
        <button />
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);
    ReactDOM.render(null, container);
    expect(onUnmountFired).toEqual(1);
  });

  it('the event responder onUnmount() function should fire with state', () => {
    let counter = 0;

    const EventComponent = createReactEventComponent(
      [],
      () => ({
        incrementAmount: 5,
      }),
      undefined,
      undefined,
      undefined,
      (context, props, state) => {
        counter += state.incrementAmount;
      },
    );

    const Test = () => (
      <EventComponent>
        <button />
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);
    ReactDOM.render(null, container);
    expect(counter).toEqual(5);
  });

  it('the event responder onOwnershipChange() function should fire', () => {
    let onOwnershipChangeFired = 0;
    let ownershipGained = false;
    const buttonRef = React.createRef();

    const EventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props, state) => {
        ownershipGained = context.requestOwnership();
      },
      undefined,
      undefined,
      undefined,
      () => {
        onOwnershipChangeFired++;
      },
    );

    const Test = () => (
      <EventComponent>
        <button ref={buttonRef} />
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);

    // Clicking the button should trigger the event responder onEvent()
    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    jest.runAllTimers();

    expect(ownershipGained).toEqual(true);
    expect(onOwnershipChangeFired).toEqual(1);
  });

  it('should be possible to get event targets', () => {
    let queryResult = null;
    const buttonRef = React.createRef();
    const divRef = React.createRef();
    const eventTargetType = Symbol.for('react.event_target.test');
    const EventTarget = createReactEventTarget(eventTargetType);

    const EventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props, state) => {
        queryResult = Array.from(
          context.getEventTargetsFromTarget(event.target),
        );
      },
    );

    const Test = () => (
      <EventComponent>
        <div ref={divRef}>
          <EventTarget foo={1} />
          <button ref={buttonRef}>
            <EventTarget foo={2} />
            Press me!
          </button>
        </div>
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);

    let buttonElement = buttonRef.current;
    let divElement = divRef.current;
    dispatchClickEvent(buttonElement);
    jest.runAllTimers();

    expect(queryResult).toEqual([
      {
        node: buttonElement,
        props: {
          foo: 2,
        },
      },
      {
        node: divElement,
        props: {
          foo: 1,
        },
      },
    ]);
  });

  it('should be possible to query event targets by type', () => {
    let queryResult = null;
    const buttonRef = React.createRef();
    const divRef = React.createRef();
    const eventTargetType = Symbol.for('react.event_target.test');
    const EventTarget = createReactEventTarget(eventTargetType);

    const eventTargetType2 = Symbol.for('react.event_target.test2');
    const EventTarget2 = createReactEventTarget(eventTargetType2);

    const EventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props, state) => {
        queryResult = context.getEventTargetsFromTarget(
          event.target,
          eventTargetType2,
        );
      },
    );

    const Test = () => (
      <EventComponent>
        <div ref={divRef}>
          <EventTarget2 foo={1} />
          <button ref={buttonRef}>
            <EventTarget foo={2} />
            Press me!
          </button>
        </div>
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);

    let buttonElement = buttonRef.current;
    let divElement = divRef.current;
    dispatchClickEvent(buttonElement);
    jest.runAllTimers();

    expect(queryResult).toEqual([
      {
        node: divElement,
        props: {
          foo: 1,
        },
      },
    ]);
  });

  it('should be possible to query event targets by key', () => {
    let queryResult = null;
    const buttonRef = React.createRef();
    const divRef = React.createRef();
    const eventTargetType = Symbol.for('react.event_target.test');
    const EventTarget = createReactEventTarget(eventTargetType);

    const EventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props, state) => {
        queryResult = context.getEventTargetsFromTarget(
          event.target,
          undefined,
          'a',
        );
      },
    );

    const Test = () => (
      <EventComponent>
        <div ref={divRef}>
          <EventTarget foo={1} />
          <button ref={buttonRef}>
            <EventTarget key="a" foo={2} />
            Press me!
          </button>
        </div>
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);

    let buttonElement = buttonRef.current;
    dispatchClickEvent(buttonElement);
    jest.runAllTimers();

    expect(queryResult).toEqual([
      {
        node: buttonElement,
        props: {
          foo: 2,
        },
      },
    ]);
  });

  it('should be possible to query event targets by type and key', () => {
    let queryResult = null;
    let queryResult2 = null;
    let queryResult3 = null;
    const buttonRef = React.createRef();
    const divRef = React.createRef();
    const eventTargetType = Symbol.for('react.event_target.test');
    const EventTarget = createReactEventTarget(eventTargetType);

    const eventTargetType2 = Symbol.for('react.event_target.test2');
    const EventTarget2 = createReactEventTarget(eventTargetType2);

    const EventComponent = createReactEventComponent(
      ['click'],
      undefined,
      (event, context, props, state) => {
        queryResult = context.getEventTargetsFromTarget(
          event.target,
          eventTargetType2,
          'a',
        );

        queryResult2 = context.getEventTargetsFromTarget(
          event.target,
          eventTargetType,
          'c',
        );

        // Should return an empty array as this doesn't exist
        queryResult3 = context.getEventTargetsFromTarget(
          event.target,
          eventTargetType,
          'd',
        );
      },
    );

    const Test = () => (
      <EventComponent>
        <div ref={divRef}>
          <EventTarget2 key="a" foo={1} />
          <EventTarget2 key="b" foo={2} />
          <button ref={buttonRef}>
            <EventTarget key="c" foo={3} />
            Press me!
          </button>
        </div>
      </EventComponent>
    );

    ReactDOM.render(<Test />, container);

    let buttonElement = buttonRef.current;
    let divElement = divRef.current;
    dispatchClickEvent(buttonElement);
    jest.runAllTimers();

    expect(queryResult).toEqual([
      {
        node: divElement,
        props: {
          foo: 1,
        },
      },
    ]);
    expect(queryResult2).toEqual([
      {
        node: buttonElement,
        props: {
          foo: 3,
        },
      },
    ]);
    expect(queryResult3).toEqual([]);
  });
});
