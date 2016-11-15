/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFiberRoot
 * @flow
 */

'use strict';

import type { Fiber } from 'ReactFiber';
import type { UpdateQueue } from 'ReactFiberUpdateQueue';
import type { FiberRootErrorPhase } from 'ReactFiberRootErrorPhase';

const { createHostContainerFiber } = require('ReactFiber');
const { NoError } = require('ReactFiberRootErrorPhase');

export type FiberRoot = {
  // Any additional information from the host associated with this root.
  containerInfo: any,
  // The currently active root fiber. This is the mutable root of the tree.
  current: Fiber,
  // Determines if this root has already been added to the schedule for work.
  isScheduled: boolean,
  // When a root fails with an uncaught error, determines the phase of recovery.
  // Defaults to NoError
  errorPhase: FiberRootErrorPhase,
  // The work schedule is a linked list.
  nextScheduledRoot: ?FiberRoot,
  // Linked list of callbacks to call after updates are committed.
  callbackList: ?UpdateQueue,
};

exports.createFiberRoot = function(containerInfo : any) : FiberRoot {
  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  const uninitializedFiber = createHostContainerFiber();
  const root = {
    current: uninitializedFiber,
    containerInfo: containerInfo,
    isScheduled: false,
    errorPhase: NoError,
    nextScheduledRoot: null,
    callbackList: null,
  };
  uninitializedFiber.stateNode = root;
  return root;
};
