/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import React from 'react';
import type {ReactEventComponent} from 'shared/ReactTypes';

export type MeasureOnSuccessCallback = (
  x: number,
  y: number,
  width: number,
  height: number,
  pageX: number,
  pageY: number,
) => void;

export type MeasureInWindowOnSuccessCallback = (
  x: number,
  y: number,
  width: number,
  height: number,
) => void;

export type MeasureLayoutOnSuccessCallback = (
  left: number,
  top: number,
  width: number,
  height: number,
) => void;

type AttributeType =
  | true
  | $ReadOnly<{|
      diff?: <T>(arg1: T, arg2: T) => boolean,
      process?: (arg1: any) => any,
    |}>;

export type AttributeConfiguration<
  TProps = string,
  TStyleProps = string,
> = $ReadOnly<{
  [propName: TProps]: AttributeType,
  style: $ReadOnly<{
    [propName: TStyleProps]: AttributeType,
  }>,
}>;

export type ReactNativeBaseComponentViewConfig<
  TProps = string,
  TStyleProps = string,
> = $ReadOnly<{|
  baseModuleName?: string,
  bubblingEventTypes?: $ReadOnly<{
    [eventName: string]: $ReadOnly<{|
      phasedRegistrationNames: $ReadOnly<{|
        captured: string,
        bubbled: string,
      |}>,
    |}>,
  }>,
  Commands?: $ReadOnly<{
    [commandName: string]: number,
  }>,
  directEventTypes?: $ReadOnly<{
    [eventName: string]: $ReadOnly<{|
      registrationName: string,
    |}>,
  }>,
  NativeProps?: $ReadOnly<{
    [propName: string]: string,
  }>,
  uiViewClassName: string,
  validAttributes: AttributeConfiguration<TProps, TStyleProps>,
|}>;

export type ViewConfigGetter = () => ReactNativeBaseComponentViewConfig<>;

/**
 * Class only exists for its Flow type.
 */
class ReactNativeComponent<Props> extends React.Component<Props> {
  blur(): void {}
  focus(): void {}
  measure(callback: MeasureOnSuccessCallback): void {}
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void {}
  measureLayout(
    relativeToNativeNode: number | Object,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void,
  ): void {}
  setNativeProps(nativeProps: Object): void {}
}

/**
 * This type keeps ReactNativeFiberHostComponent and NativeMethodsMixin in sync.
 * It can also provide types for ReactNative applications that use NMM or refs.
 */
export type NativeMethodsMixinType = {
  blur(): void,
  focus(): void,
  measure(callback: MeasureOnSuccessCallback): void,
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void,
  measureLayout(
    relativeToNativeNode: number | Object,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail: () => void,
  ): void,
  setNativeProps(nativeProps: Object): void,
};

type SecretInternalsType = {
  NativeMethodsMixin: NativeMethodsMixinType,
  computeComponentStackForErrorReporting(tag: number): string,
  // TODO (bvaughn) Decide which additional types to expose here?
  // And how much information to fill in for the above types.
};

type SecretInternalsFabricType = {
  NativeMethodsMixin: NativeMethodsMixinType,
};

/**
 * Flat ReactNative renderer bundles are too big for Flow to parse efficiently.
 * Provide minimal Flow typing for the high-level RN API and call it a day.
 */
export type ReactNativeType = {
  NativeComponent: typeof ReactNativeComponent,
  findNodeHandle(componentOrHandle: any): ?number,
  setNativeProps(handle: any, nativeProps: Object): void,
  render(
    element: React$Element<any>,
    containerTag: any,
    callback: ?Function,
  ): any,
  unmountComponentAtNode(containerTag: number): any,
  unmountComponentAtNodeAndRemoveContainer(containerTag: number): any,
  unstable_batchedUpdates: any, // TODO (bvaughn) Add types

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsType,
};

export type ReactFabricType = {
  NativeComponent: typeof ReactNativeComponent,
  findNodeHandle(componentOrHandle: any): ?number,
  setNativeProps(handle: any, nativeProps: Object): void,
  render(
    element: React$Element<any>,
    containerTag: any,
    callback: ?Function,
  ): any,
  unmountComponentAtNode(containerTag: number): any,
  unstable_createEvent:
    | void
    | ((
        responder: ReactNativeEventResponder,
        displayName: string,
      ) => ReactEventComponent<ReactNativeEventResponder>),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsFabricType,
};

import type {EventPriority} from 'shared/ReactTypes';

export type TopLevelEventType =
  | 'topMouseDown'
  | 'topMouseMove'
  | 'topMouseUp'
  | 'topScroll'
  | 'topSelectionChange'
  | 'topTouchCancel'
  | 'topTouchEnd'
  | 'topTouchMove'
  | 'topTouchStart';

export type ReactNativeResponderEvent = {
  nativeEvent: mixed,
  target: mixed,
  type: TopLevelEventType,
};

export type ReactNativeEventResponder = {
  targetEventTypes?: Array<TopLevelEventType>,
  rootEventTypes?: Array<TopLevelEventType>,
  createInitialState?: (props: null | Object) => Object,
  onEvent?: (
    event: ReactNativeResponderEvent,
    context: ReactNativeResponderContext,
    props: null | Object,
    state: null | Object,
  ) => void,
  onEventCapture?: (
    event: ReactNativeResponderEvent,
    context: ReactNativeResponderContext,
    props: null | Object,
    state: null | Object,
  ) => void,
  onRootEvent?: (
    event: ReactNativeResponderEvent,
    context: ReactNativeResponderContext,
    props: null | Object,
    state: null | Object,
  ) => void,
  onMount?: (
    context: ReactNativeResponderContext,
    props: null | Object,
    state: null | Object,
  ) => void,
  onUnmount?: (
    context: ReactNativeResponderContext,
    props: null | Object,
    state: null | Object,
  ) => void,
  onOwnershipChange?: (
    context: ReactNativeResponderContext,
    props: null | Object,
    state: null | Object,
  ) => void,
};

export type ReactNativeResponderContext = {
  dispatchEvent: (
    eventObject: Object,
    listener: (Object) => void,
    eventPriority: EventPriority,
  ) => void,
  getTimeStamp: () => number,
  // TODO
  // isTargetWithinElement: (childTarget: mixed, parentTarget: mixed) => boolean,
  // isTargetWithinEventComponent: mixed => boolean,
  // isTargetWithinEventResponderScope: mixed => boolean,
  // isEventWithinTouchHitTarget: (event: ReactNativeResponderEvent) => boolean,
  // hasOwnership: () => boolean,
  // requestResponderOwnership: () => boolean,
  // requestGlobalOwnership: () => boolean,
  // releaseOwnership: () => boolean,
  // setTimeout: (func: () => void, timeout: number) => number,
  // clearTimeout: (timerId: number) => void,
  // getEventCurrentTarget(event: ReactNativeResponderEvent): Element,
};
