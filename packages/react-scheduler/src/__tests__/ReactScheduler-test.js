/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let ReactScheduler;

describe('ReactScheduler', () => {
  beforeEach(() => {
    // TODO pull this into helper method, reduce repetition.
    // mock the browser APIs which are used in react-scheduler:
    // - requestAnimationFrame should pass the DOMHighResTimeStamp argument
    // - calling 'window.postMessage' should actually fire postmessage handlers
    global.requestAnimationFrame = function(cb) {
      return setTimeout(() => {
        cb(Date.now());
      });
    };
    const originalAddEventListener = global.addEventListener;
    let postMessageCallback;
    global.addEventListener = function(eventName, callback, useCapture) {
      if (eventName === 'message') {
        postMessageCallback = callback;
      } else {
        originalAddEventListener(eventName, callback, useCapture);
      }
    };
    global.postMessage = function(messageKey, targetOrigin) {
      const postMessageEvent = {source: window, data: messageKey};
      if (postMessageCallback) {
        postMessageCallback(postMessageEvent);
      }
    };
    jest.resetModules();
    ReactScheduler = require('react-scheduler');
  });

  it('rIC calls the callback within the frame when not blocked', () => {
    const {rIC} = ReactScheduler;
    const cb = jest.fn();
    rIC(cb);
    jest.runAllTimers();
    expect(cb.mock.calls.length).toBe(1);
    // should not have timed out and should include a timeRemaining method
    expect(cb.mock.calls[0][0].didTimeout).toBe(false);
    expect(typeof cb.mock.calls[0][0].timeRemaining()).toBe('number');
  });

  describe('with multiple callbacks', () => {
    it('flushes previous cb when new one is passed', () => {
      const {rIC} = ReactScheduler;
      const callbackLog = [];
      const callbackA = jest.fn(() => callbackLog.push('A'));
      const callbackB = jest.fn(() => callbackLog.push('B'));
      rIC(callbackA);
      // initially waits to call the callback
      expect(callbackLog).toEqual([]);
      // when second callback is passed, flushes first one
      rIC(callbackB);
      expect(callbackLog).toEqual(['A']);
      // after a delay, calls the latest callback passed
      jest.runAllTimers();
      expect(callbackLog).toEqual(['A', 'B']);
      // callbackA should not have timed out and should include a timeRemaining method
      expect(callbackA.mock.calls[0][0].didTimeout).toBe(false);
      expect(typeof callbackA.mock.calls[0][0].timeRemaining()).toBe('number');
      // callbackA should not have timed out and should include a timeRemaining method
      expect(callbackB.mock.calls[0][0].didTimeout).toBe(false);
      expect(typeof callbackB.mock.calls[0][0].timeRemaining()).toBe('number');
    });

    it('schedules callbacks in correct order when a callback uses rIC before its own logic', () => {
      const {rIC} = ReactScheduler;
      const callbackLog = [];
      const callbackA = jest.fn(() => {
        callbackLog.push('A');
        rIC(callbackC);
      });
      const callbackB = jest.fn(() => {
        callbackLog.push('B');
      });
      const callbackC = jest.fn(() => {
        callbackLog.push('C');
      });

      rIC(callbackA);
      // initially waits to call the callback
      expect(callbackLog.length).toBe(0);
      // when second callback is passed, flushes first one
      // callbackA scheduled callbackC, which flushes callbackB
      rIC(callbackB);
      expect(callbackLog).toEqual(['A', 'B']);
      // after a delay, calls the latest callback passed
      jest.runAllTimers();
      expect(callbackLog).toEqual(['A', 'B', 'C']);
    });

    it('schedules callbacks in correct order when callbacks have many nested rIC calls', () => {
      const {rIC} = ReactScheduler;
      const callbackLog = [];
      const callbackA = jest.fn(() => {
        callbackLog.push('A');
        rIC(callbackC);
        rIC(callbackD);
      });
      const callbackB = jest.fn(() => {
        callbackLog.push('B');
        rIC(callbackE);
        rIC(callbackF);
      });
      const callbackC = jest.fn(() => {
        callbackLog.push('C');
      });
      const callbackD = jest.fn(() => {
        callbackLog.push('D');
      });
      const callbackE = jest.fn(() => {
        callbackLog.push('E');
      });
      const callbackF = jest.fn(() => {
        callbackLog.push('F');
      });

      rIC(callbackA);
      // initially waits to call the callback
      expect(callbackLog.length).toBe(0);
      // when second callback is passed, flushes first one
      // callbackA scheduled callbackC, which flushes callbackB
      rIC(callbackB);
      expect(callbackLog).toEqual(['A', 'B', 'C', 'D', 'E']);
      // after a delay, calls the latest callback passed
      jest.runAllTimers();
      expect(callbackLog).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });

    it('allows each callback finish running before flushing others', () => {
      const {rIC} = ReactScheduler;
      const callbackLog = [];
      const callbackA = jest.fn(() => {
        // rIC should wait to flush any more until this callback finishes
        rIC(callbackC);
        callbackLog.push('A');
      });
      const callbackB = jest.fn(() => callbackLog.push('B'));
      const callbackC = jest.fn(() => callbackLog.push('C'));

      rIC(callbackA);
      // initially waits to call the callback
      expect(callbackLog.length).toBe(0);
      // when second callback is passed, flushes first one
      // callbackA scheduled callbackC, which flushes callbackB
      rIC(callbackB);
      expect(callbackLog).toEqual(['A', 'B']);
      // after a delay, calls the latest callback passed
      jest.runAllTimers();
      expect(callbackLog).toEqual(['A', 'B', 'C']);
    });

    it('schedules callbacks in correct order when they use rIC to schedule themselves', () => {
      const {rIC} = ReactScheduler;
      const callbackLog = [];
      let callbackAIterations = 0;
      const callbackA = jest.fn(() => {
        if (callbackAIterations < 1) {
          rIC(callbackA);
        }
        callbackLog.push('A' + callbackAIterations);
        callbackAIterations++;
      });
      const callbackB = jest.fn(() => callbackLog.push('B'));

      rIC(callbackA);
      // initially waits to call the callback
      expect(callbackLog.length).toBe(0);
      // when second callback is passed, flushes first one
      // callbackA scheduled callbackA again, which flushes callbackB
      rIC(callbackB);
      expect(callbackLog).toEqual(['A0', 'B']);
      // after a delay, calls the latest callback passed
      jest.runAllTimers();
      expect(callbackLog).toEqual(['A0', 'B', 'A1']);
    });

    describe('handling errors', () => {
      it('flushes scheduled callbacks even if one throws error', () => {
        const {rIC} = ReactScheduler;
        const callbackLog = [];
        const callbackA = jest.fn(() => {
          callbackLog.push('A');
          rIC(callbackC);
          throw new Error('dummy error A');
        });
        const callbackB = jest.fn(() => {
          callbackLog.push('B');
        });
        const callbackC = jest.fn(() => {
          callbackLog.push('C');
        });

        rIC(callbackA);
        // initially waits to call the callback
        expect(callbackLog.length).toBe(0);
        // when second callback is passed, flushes first one
        // callbackA scheduled callbackC, which flushes callbackB
        // even when callbackA throws an error, we successfully call callbackB
        rIC(callbackB);
        expect(callbackLog).toEqual(['A', 'B']);
        // after a delay, throws the error and calls the latest callback passed
        expect(() => jest.runAllTimers()).toThrowError('dummy error A');
        expect(callbackLog).toEqual(['A', 'B', 'C']);
      });
    });
  });

  describe('cIC', () => {
    it('cancels the scheduled callback', () => {
      const {rIC, cIC} = ReactScheduler;
      const cb = jest.fn();
      const callbackId = rIC(cb);
      expect(cb.mock.calls.length).toBe(0);
      cIC(callbackId);
      jest.runAllTimers();
      expect(cb.mock.calls.length).toBe(0);
    });

    // TODO: this test will be easier to implement once we support deferred
    /**
    it('when one callback cancels the next one', () => {
      const {rIC, cIC} = ReactScheduler;
      const cbA = jest.fn(() => {
        // How to get the callback id?
        cIC();
      });
      const cbB = jest.fn();
      rIC(cbA);
      expect(cbA.mock.calls.length).toBe(0);
      callbackBId = rIC(cbB);
      expect(cbA.mock.calls.length).toBe(1);
      expect(cbB.mock.calls.length).toBe(0);
      jest.runAllTimers();
      // B should not get called because A cancelled B
      expect(cbB.mock.calls.length).toBe(0);
    });
    */
  });

  // TODO: test 'now'
});
