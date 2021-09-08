/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 */

import {enableLogger} from 'react-devtools-feature-flags';

export type LogEvent = {|
  +name: 'parseHookNames',
  +displayName: string | null,
  +numberOfHooks: number | null,
  +durationMs: number,
  +resolution: 'success' | 'error' | 'timeout',
|};

export type LogFunction = LogEvent => void;

let loggers = [];
export const logEvent: LogFunction =
  enableLogger === true
    ? function logEvent(event: LogEvent): void {
        loggers.forEach(log => {
          log(event);
        });
      }
    : function logEvent() {};

export const registerEventLogger =
  enableLogger === true
    ? function registerEventLogger(eventLogger: LogFunction): () => void {
        if (enableLogger) {
          loggers.push(eventLogger);
          return function unregisterEventLogger() {
            loggers = loggers.filter(logger => logger !== eventLogger);
          };
        }
        return () => {};
      }
    : function registerEventLogger() {};
