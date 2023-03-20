/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {
  registrationNameDependencies,
  possibleRegistrationNames,
} from '../events/EventRegistry';

import {canUseDOM} from 'shared/ExecutionEnvironment';
import hasOwnProperty from 'shared/hasOwnProperty';
import {checkHtmlStringCoercion} from 'shared/CheckStringCoercion';

import {
  getValueForAttribute,
  getValueForAttributeOnCustomComponent,
  getValueForProperty,
  setValueForProperty,
  setValueForPropertyOnCustomComponent,
} from './DOMPropertyOperations';
import {
  initWrapperState as ReactDOMInputInitWrapperState,
  getHostProps as ReactDOMInputGetHostProps,
  postMountWrapper as ReactDOMInputPostMountWrapper,
  updateChecked as ReactDOMInputUpdateChecked,
  updateWrapper as ReactDOMInputUpdateWrapper,
  restoreControlledState as ReactDOMInputRestoreControlledState,
} from './ReactDOMInput';
import {
  postMountWrapper as ReactDOMOptionPostMountWrapper,
  validateProps as ReactDOMOptionValidateProps,
} from './ReactDOMOption';
import {
  initWrapperState as ReactDOMSelectInitWrapperState,
  getHostProps as ReactDOMSelectGetHostProps,
  postMountWrapper as ReactDOMSelectPostMountWrapper,
  restoreControlledState as ReactDOMSelectRestoreControlledState,
  postUpdateWrapper as ReactDOMSelectPostUpdateWrapper,
} from './ReactDOMSelect';
import {
  initWrapperState as ReactDOMTextareaInitWrapperState,
  getHostProps as ReactDOMTextareaGetHostProps,
  postMountWrapper as ReactDOMTextareaPostMountWrapper,
  updateWrapper as ReactDOMTextareaUpdateWrapper,
  restoreControlledState as ReactDOMTextareaRestoreControlledState,
} from './ReactDOMTextarea';
import {track} from './inputValueTracking';
import setInnerHTML from './setInnerHTML';
import setTextContent from './setTextContent';
import {
  createDangerousStringForStyles,
  setValueForStyles,
  validateShorthandPropertyCollisionInDev,
} from './CSSPropertyOperations';
import {HTML_NAMESPACE, getIntrinsicNamespace} from './DOMNamespaces';
import {getPropertyInfo} from '../shared/DOMProperty';
import assertValidProps from './assertValidProps';
import {DOCUMENT_NODE} from './HTMLNodeType';
import isCustomComponent from '../shared/isCustomComponent';
import possibleStandardNames from '../shared/possibleStandardNames';
import {validateProperties as validateARIAProperties} from '../shared/ReactDOMInvalidARIAHook';
import {validateProperties as validateInputProperties} from '../shared/ReactDOMNullInputValuePropHook';
import {validateProperties as validateUnknownProperties} from '../shared/ReactDOMUnknownPropertyHook';

import {
  enableTrustedTypesIntegration,
  enableCustomElementPropertySupport,
  enableClientRenderFallbackOnTextMismatch,
  enableHostSingletons,
  disableIEWorkarounds,
} from 'shared/ReactFeatureFlags';
import {
  mediaEventTypes,
  listenToNonDelegatedEvent,
} from '../events/DOMPluginEventSystem';

let didWarnInvalidHydration = false;
let didWarnScriptTags = false;

let warnedUnknownTags: {
  [key: string]: boolean,
};
let canDiffStyleForHydrationWarning;

if (__DEV__) {
  warnedUnknownTags = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: true,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: true,
  };

  // IE 11 parses & normalizes the style attribute as opposed to other
  // browsers. It adds spaces and sorts the properties in some
  // non-alphabetical order. Handling that would require sorting CSS
  // properties in the client & server versions or applying
  // `expectedStyle` to a temporary DOM node to read its `style` attribute
  // normalized. Since it only affects IE, we're skipping style warnings
  // in that browser completely in favor of doing all that work.
  // See https://github.com/facebook/react/issues/11807
  canDiffStyleForHydrationWarning =
    disableIEWorkarounds || (canUseDOM && !document.documentMode);
}

function validatePropertiesInDevelopment(type: string, props: any) {
  if (__DEV__) {
    validateARIAProperties(type, props);
    validateInputProperties(type, props);
    validateUnknownProperties(type, props, {
      registrationNameDependencies,
      possibleRegistrationNames,
    });
  }
}

function warnForPropDifference(
  propName: string,
  serverValue: mixed,
  clientValue: mixed,
) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    const normalizedClientValue =
      normalizeMarkupForTextOrAttribute(clientValue);
    const normalizedServerValue =
      normalizeMarkupForTextOrAttribute(serverValue);
    if (normalizedServerValue === normalizedClientValue) {
      return;
    }
    didWarnInvalidHydration = true;
    console.error(
      'Prop `%s` did not match. Server: %s Client: %s',
      propName,
      JSON.stringify(normalizedServerValue),
      JSON.stringify(normalizedClientValue),
    );
  }
}

function warnForExtraAttributes(attributeNames: Set<string>) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    const names = [];
    attributeNames.forEach(function (name) {
      names.push(name);
    });
    console.error('Extra attributes from the server: %s', names);
  }
}

function warnForInvalidEventListener(registrationName: string, listener: any) {
  if (__DEV__) {
    if (listener === false) {
      console.error(
        'Expected `%s` listener to be a function, instead got `false`.\n\n' +
          'If you used to conditionally omit it with %s={condition && value}, ' +
          'pass %s={condition ? value : undefined} instead.',
        registrationName,
        registrationName,
        registrationName,
      );
    } else {
      console.error(
        'Expected `%s` listener to be a function, instead got a value of `%s` type.',
        registrationName,
        typeof listener,
      );
    }
  }
}

// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
function normalizeHTML(parent: Element, html: string) {
  if (__DEV__) {
    // We could have created a separate document here to avoid
    // re-initializing custom elements if they exist. But this breaks
    // how <noscript> is being handled. So we use the same document.
    // See the discussion in https://github.com/facebook/react/pull/11157.
    const testElement =
      parent.namespaceURI === HTML_NAMESPACE
        ? parent.ownerDocument.createElement(parent.tagName)
        : parent.ownerDocument.createElementNS(
            (parent.namespaceURI: any),
            parent.tagName,
          );
    testElement.innerHTML = html;
    return testElement.innerHTML;
  }
}

// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
const NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
const NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;

function normalizeMarkupForTextOrAttribute(markup: mixed): string {
  if (__DEV__) {
    checkHtmlStringCoercion(markup);
  }
  const markupString = typeof markup === 'string' ? markup : '' + (markup: any);
  return markupString
    .replace(NORMALIZE_NEWLINES_REGEX, '\n')
    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
}

export function checkForUnmatchedText(
  serverText: string,
  clientText: string | number,
  isConcurrentMode: boolean,
  shouldWarnDev: boolean,
) {
  const normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
  const normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
  if (normalizedServerText === normalizedClientText) {
    return;
  }

  if (shouldWarnDev) {
    if (__DEV__) {
      if (!didWarnInvalidHydration) {
        didWarnInvalidHydration = true;
        console.error(
          'Text content did not match. Server: "%s" Client: "%s"',
          normalizedServerText,
          normalizedClientText,
        );
      }
    }
  }

  if (isConcurrentMode && enableClientRenderFallbackOnTextMismatch) {
    // In concurrent roots, we throw when there's a text mismatch and revert to
    // client rendering, up to the nearest Suspense boundary.
    throw new Error('Text content does not match server-rendered HTML.');
  }
}

export function getOwnerDocumentFromRootContainer(
  rootContainerElement: Element | Document | DocumentFragment,
): Document {
  return rootContainerElement.nodeType === DOCUMENT_NODE
    ? (rootContainerElement: any)
    : rootContainerElement.ownerDocument;
}

function noop() {}

export function trapClickOnNonInteractiveElement(node: HTMLElement) {
  // Mobile Safari does not fire properly bubble click events on
  // non-interactive elements, which means delegated click listeners do not
  // fire. The workaround for this bug involves attaching an empty click
  // listener on the target node.
  // https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
  // Just set it using the onclick property so that we don't have to manage any
  // bookkeeping for it. Not sure if we need to clear it when the listener is
  // removed.
  // TODO: Only do this for the relevant Safaris maybe?
  node.onclick = noop;
}

function setInitialDOMProperties(
  tag: string,
  domElement: Element,
  nextProps: Object,
  isCustomComponentTag: boolean,
): void {
  for (const propKey in nextProps) {
    if (!nextProps.hasOwnProperty(propKey)) {
      continue;
    }
    const nextProp = nextProps[propKey];
    switch (propKey) {
      case 'style': {
        if (__DEV__) {
          if (nextProp) {
            // Freeze the next style object so that we can assume it won't be
            // mutated. We have already warned for this in the past.
            Object.freeze(nextProp);
          }
        }
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        setValueForStyles(domElement, nextProp);
        break;
      }
      case 'dangerouslySetInnerHTML': {
        const nextHtml = nextProp ? nextProp.__html : undefined;
        if (nextHtml != null) {
          if (disableIEWorkarounds) {
            domElement.innerHTML = nextHtml;
          } else {
            setInnerHTML(domElement, nextHtml);
          }
        }
        break;
      }
      case 'children': {
        if (typeof nextProp === 'string') {
          // Avoid setting initial textContent when the text is empty. In IE11 setting
          // textContent on a <textarea> will cause the placeholder to not
          // show within the <textarea> until it has been focused and blurred again.
          // https://github.com/facebook/react/issues/6731#issuecomment-254874553
          const canSetTextContent =
            (!enableHostSingletons || tag !== 'body') &&
            (tag !== 'textarea' || nextProp !== '');
          if (canSetTextContent) {
            setTextContent(domElement, nextProp);
          }
        } else if (typeof nextProp === 'number') {
          const canSetTextContent = !enableHostSingletons || tag !== 'body';
          if (canSetTextContent) {
            setTextContent(domElement, '' + nextProp);
          }
        }
        break;
      }
      case 'onScroll': {
        if (nextProp != null) {
          if (__DEV__ && typeof nextProp !== 'function') {
            warnForInvalidEventListener(propKey, nextProp);
          }
          listenToNonDelegatedEvent('scroll', domElement);
        }
        break;
      }
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue': // Reserved
      case 'defaultChecked':
      case 'innerHTML': {
        // Noop
        break;
      }
      case 'autoFocus': {
        // We polyfill it separately on the client during commit.
        // We could have excluded it in the property list instead of
        // adding a special case here, but then it wouldn't be emitted
        // on server rendering (but we *do* want to emit it in SSR).
        break;
      }
      case 'innerText': // Properties
      case 'textContent':
        if (enableCustomElementPropertySupport) {
          break;
        }
      // eslint-disable-next-line no-fallthrough
      default: {
        if (registrationNameDependencies.hasOwnProperty(propKey)) {
          if (nextProp != null) {
            if (__DEV__ && typeof nextProp !== 'function') {
              warnForInvalidEventListener(propKey, nextProp);
            }
          }
        } else if (nextProp != null) {
          if (isCustomComponentTag) {
            setValueForPropertyOnCustomComponent(domElement, propKey, nextProp);
          } else {
            setValueForProperty(domElement, propKey, nextProp);
          }
        }
      }
    }
  }
}

function updateDOMProperties(
  domElement: Element,
  updatePayload: Array<any>,
  wasCustomComponentTag: boolean,
  isCustomComponentTag: boolean,
): void {
  // TODO: Handle wasCustomComponentTag
  for (let i = 0; i < updatePayload.length; i += 2) {
    const propKey = updatePayload[i];
    const propValue = updatePayload[i + 1];
    switch (propKey) {
      case 'style':
        setValueForStyles(domElement, propValue);
        break;
      case 'dangerouslySetInnerHTML':
        if (disableIEWorkarounds) {
          domElement.innerHTML = propValue;
        } else {
          setInnerHTML(domElement, propValue);
        }
        break;
      case 'children':
        setTextContent(domElement, propValue);
        break;
      default:
        if (isCustomComponentTag) {
          setValueForPropertyOnCustomComponent(domElement, propKey, propValue);
        } else {
          setValueForProperty(domElement, propKey, propValue);
        }
        break;
    }
  }
}

// creates a script element that won't execute
export function createPotentiallyInlineScriptElement(
  ownerDocument: Document,
): Element {
  // Create the script via .innerHTML so its "parser-inserted" flag is
  // set to true and it does not execute
  const div = ownerDocument.createElement('div');
  if (__DEV__) {
    if (enableTrustedTypesIntegration && !didWarnScriptTags) {
      console.error(
        'Encountered a script tag while rendering React component. ' +
          'Scripts inside React components are never executed when rendering ' +
          'on the client. Consider using template tag instead ' +
          '(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template).',
      );
      didWarnScriptTags = true;
    }
  }
  div.innerHTML = '<script><' + '/script>'; // eslint-disable-line
  // This is guaranteed to yield a script element.
  const firstChild = ((div.firstChild: any): HTMLScriptElement);
  const element = div.removeChild(firstChild);
  return element;
}

export function createSelectElement(
  props: Object,
  ownerDocument: Document,
): Element {
  let element;
  if (typeof props.is === 'string') {
    element = ownerDocument.createElement('select', {is: props.is});
  } else {
    // Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
    // See discussion in https://github.com/facebook/react/pull/6896
    // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
    element = ownerDocument.createElement('select');
  }
  if (props.multiple) {
    element.multiple = true;
  } else if (props.size) {
    // Setting a size greater than 1 causes a select to behave like `multiple=true`, where
    // it is possible that no option is selected.
    //
    // This is only necessary when a select in "single selection mode".
    element.size = props.size;
  }
  return element;
}

// Creates elements in the HTML namesapce
export function createHTMLElement(
  type: string,
  props: Object,
  ownerDocument: Document,
): Element {
  if (__DEV__) {
    switch (type) {
      case 'script':
      case 'select':
        console.error(
          'createHTMLElement was called with a "%s" type. This type has special creation logic in React and should use the create function implemented specifically for it. This is a bug in React.',
          type,
        );
        break;
      case 'svg':
      case 'math':
        console.error(
          'createHTMLElement was called with a "%s" type. This type must be created with Document.createElementNS which this method does not implement. This is a bug in React.',
          type,
        );
    }
  }

  let isCustomComponentTag;

  let element: Element;
  if (__DEV__) {
    isCustomComponentTag = isCustomComponent(type, props);
    // Should this check be gated by parent namespace? Not sure we want to
    // allow <SVG> or <mATH>.
    if (!isCustomComponentTag && type !== type.toLowerCase()) {
      console.error(
        '<%s /> is using incorrect casing. ' +
          'Use PascalCase for React components, ' +
          'or lowercase for HTML elements.',
        type,
      );
    }
  }

  if (typeof props.is === 'string') {
    element = ownerDocument.createElement(type, {is: props.is});
  } else {
    // Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
    // See discussion in https://github.com/facebook/react/pull/6896
    // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
    element = ownerDocument.createElement(type);
  }

  if (__DEV__) {
    if (
      !isCustomComponentTag &&
      // $FlowFixMe[method-unbinding]
      Object.prototype.toString.call(element) ===
        '[object HTMLUnknownElement]' &&
      !hasOwnProperty.call(warnedUnknownTags, type)
    ) {
      warnedUnknownTags[type] = true;
      console.error(
        'The tag <%s> is unrecognized in this browser. ' +
          'If you meant to render a React component, start its name with ' +
          'an uppercase letter.',
        type,
      );
    }
  }

  return element;
}

export function createTextNode(
  text: string,
  rootContainerElement: Element | Document | DocumentFragment,
): Text {
  return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(
    text,
  );
}

export function setInitialProperties(
  domElement: Element,
  tag: string,
  rawProps: Object,
): void {
  const isCustomComponentTag = isCustomComponent(tag, rawProps);
  if (__DEV__) {
    validatePropertiesInDevelopment(tag, rawProps);
  }

  // TODO: Make sure that we check isMounted before firing any of these events.
  let props: Object;
  switch (tag) {
    case 'dialog':
      listenToNonDelegatedEvent('cancel', domElement);
      listenToNonDelegatedEvent('close', domElement);
      props = rawProps;
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the load event.
      listenToNonDelegatedEvent('load', domElement);
      props = rawProps;
      break;
    case 'video':
    case 'audio':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for all the media events.
      for (let i = 0; i < mediaEventTypes.length; i++) {
        listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
      }
      props = rawProps;
      break;
    case 'source':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the error event.
      listenToNonDelegatedEvent('error', domElement);
      props = rawProps;
      break;
    case 'img':
    case 'image':
    case 'link':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for error and load events.
      listenToNonDelegatedEvent('error', domElement);
      listenToNonDelegatedEvent('load', domElement);
      props = rawProps;
      break;
    case 'details':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the toggle event.
      listenToNonDelegatedEvent('toggle', domElement);
      props = rawProps;
      break;
    case 'input':
      ReactDOMInputInitWrapperState(domElement, rawProps);
      props = ReactDOMInputGetHostProps(domElement, rawProps);
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.
      listenToNonDelegatedEvent('invalid', domElement);
      break;
    case 'option':
      ReactDOMOptionValidateProps(domElement, rawProps);
      props = rawProps;
      break;
    case 'select':
      ReactDOMSelectInitWrapperState(domElement, rawProps);
      props = ReactDOMSelectGetHostProps(domElement, rawProps);
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.
      listenToNonDelegatedEvent('invalid', domElement);
      break;
    case 'textarea':
      ReactDOMTextareaInitWrapperState(domElement, rawProps);
      props = ReactDOMTextareaGetHostProps(domElement, rawProps);
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.
      listenToNonDelegatedEvent('invalid', domElement);
      break;
    default:
      props = rawProps;
  }

  assertValidProps(tag, props);

  setInitialDOMProperties(tag, domElement, props, isCustomComponentTag);

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track((domElement: any));
      ReactDOMInputPostMountWrapper(domElement, rawProps, false);
      break;
    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track((domElement: any));
      ReactDOMTextareaPostMountWrapper(domElement, rawProps);
      break;
    case 'option':
      ReactDOMOptionPostMountWrapper(domElement, rawProps);
      break;
    case 'select':
      ReactDOMSelectPostMountWrapper(domElement, rawProps);
      break;
    default:
      if (typeof props.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(((domElement: any): HTMLElement));
      }
      break;
  }
}

// Calculate the diff between the two objects.
export function diffProperties(
  domElement: Element,
  tag: string,
  lastRawProps: Object,
  nextRawProps: Object,
): null | Array<mixed> {
  if (__DEV__) {
    validatePropertiesInDevelopment(tag, nextRawProps);
  }

  let updatePayload: null | Array<any> = null;

  let lastProps: Object;
  let nextProps: Object;
  switch (tag) {
    case 'input':
      lastProps = ReactDOMInputGetHostProps(domElement, lastRawProps);
      nextProps = ReactDOMInputGetHostProps(domElement, nextRawProps);
      updatePayload = [];
      break;
    case 'select':
      lastProps = ReactDOMSelectGetHostProps(domElement, lastRawProps);
      nextProps = ReactDOMSelectGetHostProps(domElement, nextRawProps);
      updatePayload = [];
      break;
    case 'textarea':
      lastProps = ReactDOMTextareaGetHostProps(domElement, lastRawProps);
      nextProps = ReactDOMTextareaGetHostProps(domElement, nextRawProps);
      updatePayload = [];
      break;
    default:
      lastProps = lastRawProps;
      nextProps = nextRawProps;
      if (
        typeof lastProps.onClick !== 'function' &&
        typeof nextProps.onClick === 'function'
      ) {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(((domElement: any): HTMLElement));
      }
      break;
  }

  assertValidProps(tag, nextProps);

  let propKey;
  let styleName;
  let styleUpdates = null;
  for (propKey in lastProps) {
    if (
      nextProps.hasOwnProperty(propKey) ||
      !lastProps.hasOwnProperty(propKey) ||
      lastProps[propKey] == null
    ) {
      continue;
    }
    switch (propKey) {
      case 'style': {
        const lastStyle = lastProps[propKey];
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            if (!styleUpdates) {
              styleUpdates = ({}: {[string]: $FlowFixMe});
            }
            styleUpdates[styleName] = '';
          }
        }
        break;
      }
      case 'dangerouslySetInnerHTML':
      case 'children': {
        // Noop. This is handled by the clear text mechanism.
        break;
      }
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue': // Reserved
      case 'defaultChecked':
      case 'innerHTML': {
        // Noop
        break;
      }
      case 'autoFocus': {
        // Noop. It doesn't work on updates anyway.
        break;
      }
      case 'innerText': // Properties
      case 'textContent':
        if (enableCustomElementPropertySupport) {
          break;
        }
      // eslint-disable-next-line no-fallthrough
      default: {
        if (registrationNameDependencies.hasOwnProperty(propKey)) {
          // This is a special case. If any listener updates we need to ensure
          // that the "current" fiber pointer gets updated so we need a commit
          // to update this element.
          if (!updatePayload) {
            updatePayload = [];
          }
        } else {
          // For all other deleted properties we add it to the queue. We use
          // the allowed property list in the commit phase instead.
          (updatePayload = updatePayload || []).push(propKey, null);
        }
      }
    }
  }
  for (propKey in nextProps) {
    const nextProp = nextProps[propKey];
    const lastProp = lastProps != null ? lastProps[propKey] : undefined;
    if (
      !nextProps.hasOwnProperty(propKey) ||
      nextProp === lastProp ||
      (nextProp == null && lastProp == null)
    ) {
      continue;
    }
    switch (propKey) {
      case 'style': {
        if (__DEV__) {
          if (nextProp) {
            // Freeze the next style object so that we can assume it won't be
            // mutated. We have already warned for this in the past.
            Object.freeze(nextProp);
          }
        }
        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (
              lastProp.hasOwnProperty(styleName) &&
              (!nextProp || !nextProp.hasOwnProperty(styleName))
            ) {
              if (!styleUpdates) {
                styleUpdates = ({}: {[string]: string});
              }
              styleUpdates[styleName] = '';
            }
          }
          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (
              nextProp.hasOwnProperty(styleName) &&
              lastProp[styleName] !== nextProp[styleName]
            ) {
              if (!styleUpdates) {
                styleUpdates = ({}: {[string]: $FlowFixMe});
              }
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          if (!styleUpdates) {
            if (!updatePayload) {
              updatePayload = [];
            }
            updatePayload.push(propKey, styleUpdates);
          }
          styleUpdates = nextProp;
        }
        break;
      }
      case 'dangerouslySetInnerHTML': {
        const nextHtml = nextProp ? nextProp.__html : undefined;
        const lastHtml = lastProp ? lastProp.__html : undefined;
        if (nextHtml != null) {
          if (lastHtml !== nextHtml) {
            (updatePayload = updatePayload || []).push(propKey, nextHtml);
          }
        } else {
          // TODO: It might be too late to clear this if we have children
          // inserted already.
        }
        break;
      }
      case 'children': {
        if (typeof nextProp === 'string' || typeof nextProp === 'number') {
          (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
        }
        break;
      }
      case 'onScroll': {
        if (nextProp != null) {
          // We eagerly listen to this even though we haven't committed yet.
          if (__DEV__ && typeof nextProp !== 'function') {
            warnForInvalidEventListener(propKey, nextProp);
          }
          listenToNonDelegatedEvent('scroll', domElement);
        }
        if (!updatePayload && lastProp !== nextProp) {
          // This is a special case. If any listener updates we need to ensure
          // that the "current" props pointer gets updated so we need a commit
          // to update this element.
          updatePayload = [];
        }
        break;
      }
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue': // Reserved
      case 'defaultChecked':
      case 'innerHTML': {
        // Noop
        break;
      }
      case 'autoFocus': {
        // Noop on updates
        break;
      }
      case 'innerText': // Properties
      case 'textContent':
        if (enableCustomElementPropertySupport) {
          break;
        }
      // eslint-disable-next-line no-fallthrough
      default: {
        if (registrationNameDependencies.hasOwnProperty(propKey)) {
          if (nextProp != null) {
            // We eagerly listen to this even though we haven't committed yet.
            if (__DEV__ && typeof nextProp !== 'function') {
              warnForInvalidEventListener(propKey, nextProp);
            }
          }
          if (!updatePayload && lastProp !== nextProp) {
            // This is a special case. If any listener updates we need to ensure
            // that the "current" props pointer gets updated so we need a commit
            // to update this element.
            updatePayload = [];
          }
        } else {
          // For any other property we always add it to the queue and then we
          // filter it out using the allowed property list during the commit.
          (updatePayload = updatePayload || []).push(propKey, nextProp);
        }
      }
    }
  }
  if (styleUpdates) {
    if (__DEV__) {
      validateShorthandPropertyCollisionInDev(styleUpdates, nextProps.style);
    }
    (updatePayload = updatePayload || []).push('style', styleUpdates);
  }
  return updatePayload;
}

// Apply the diff.
export function updateProperties(
  domElement: Element,
  updatePayload: Array<any>,
  tag: string,
  lastRawProps: Object,
  nextRawProps: Object,
): void {
  // Update checked *before* name.
  // In the middle of an update, it is possible to have multiple checked.
  // When a checked radio tries to change name, browser makes another radio's checked false.
  if (
    tag === 'input' &&
    nextRawProps.type === 'radio' &&
    nextRawProps.name != null
  ) {
    ReactDOMInputUpdateChecked(domElement, nextRawProps);
  }

  const wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
  const isCustomComponentTag = isCustomComponent(tag, nextRawProps);
  // Apply the diff.
  updateDOMProperties(
    domElement,
    updatePayload,
    wasCustomComponentTag,
    isCustomComponentTag,
  );

  // TODO: Ensure that an update gets scheduled if any of the special props
  // changed.
  switch (tag) {
    case 'input':
      // Update the wrapper around inputs *after* updating props. This has to
      // happen after `updateDOMProperties`. Otherwise HTML5 input validations
      // raise warnings and prevent the new value from being assigned.
      ReactDOMInputUpdateWrapper(domElement, nextRawProps);
      break;
    case 'textarea':
      ReactDOMTextareaUpdateWrapper(domElement, nextRawProps);
      break;
    case 'select':
      // <select> value update needs to occur after <option> children
      // reconciliation
      ReactDOMSelectPostUpdateWrapper(domElement, nextRawProps);
      break;
  }
}

function getPossibleStandardName(propName: string): string | null {
  if (__DEV__) {
    const lowerCasedName = propName.toLowerCase();
    if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      return null;
    }
    return possibleStandardNames[lowerCasedName] || null;
  }
  return null;
}

function diffHydratedCustomComponent(
  domElement: Element,
  tag: string,
  rawProps: Object,
  parentNamespaceDev: string,
  extraAttributeNames: Set<string>,
) {
  for (const propKey in rawProps) {
    if (!rawProps.hasOwnProperty(propKey)) {
      continue;
    }
    const nextProp = rawProps[propKey];
    if (nextProp == null) {
      continue;
    }
    if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (typeof nextProp !== 'function') {
        warnForInvalidEventListener(propKey, nextProp);
      }
      continue;
    }
    if (rawProps.suppressHydrationWarning === true) {
      // Don't bother comparing. We're ignoring all these warnings.
      continue;
    }
    // Validate that the properties correspond to their expected values.
    let serverValue;
    switch (propKey) {
      case 'children': // Checked above already
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
        // Noop
        continue;
      case 'dangerouslySetInnerHTML':
        const serverHTML = domElement.innerHTML;
        const nextHtml = nextProp ? nextProp.__html : undefined;
        if (nextHtml != null) {
          const expectedHTML = normalizeHTML(domElement, nextHtml);
          if (expectedHTML !== serverHTML) {
            warnForPropDifference(propKey, serverHTML, expectedHTML);
          }
        }
        continue;
      case 'style':
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey);

        if (canDiffStyleForHydrationWarning) {
          const expectedStyle = createDangerousStringForStyles(nextProp);
          serverValue = domElement.getAttribute('style');
          if (expectedStyle !== serverValue) {
            warnForPropDifference(propKey, serverValue, expectedStyle);
          }
        }
        continue;
      case 'offsetParent':
      case 'offsetTop':
      case 'offsetLeft':
      case 'offsetWidth':
      case 'offsetHeight':
      case 'isContentEditable':
      case 'outerText':
      case 'outerHTML':
        if (enableCustomElementPropertySupport) {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propKey.toLowerCase());
          if (__DEV__) {
            console.error(
              'Assignment to read-only property will result in a no-op: `%s`',
              propKey,
            );
          }
          continue;
        }
      // eslint-disable-next-line no-fallthrough
      default: {
        let ownNamespaceDev = parentNamespaceDev;
        if (ownNamespaceDev === HTML_NAMESPACE) {
          ownNamespaceDev = getIntrinsicNamespace(tag);
        }
        if (ownNamespaceDev === HTML_NAMESPACE) {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propKey.toLowerCase());
        } else {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propKey);
        }
        serverValue = getValueForAttributeOnCustomComponent(
          domElement,
          propKey,
          nextProp,
        );
        if (nextProp !== serverValue) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      }
    }
  }
}

function diffHydratedGenericElement(
  domElement: Element,
  tag: string,
  rawProps: Object,
  parentNamespaceDev: string,
  extraAttributeNames: Set<string>,
) {
  for (const propKey in rawProps) {
    if (!rawProps.hasOwnProperty(propKey)) {
      continue;
    }
    const nextProp = rawProps[propKey];
    if (nextProp == null) {
      continue;
    }
    if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (typeof nextProp !== 'function') {
        warnForInvalidEventListener(propKey, nextProp);
      }
      continue;
    }
    if (rawProps.suppressHydrationWarning === true) {
      // Don't bother comparing. We're ignoring all these warnings.
      continue;
    }
    // Validate that the properties correspond to their expected values.
    let serverValue;
    switch (propKey) {
      case 'children': // Checked above already
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'value': // Controlled attributes are not validated
      case 'checked': // TODO: Only ignore them on controlled tags.
      case 'selected':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
        // Noop
        continue;
      case 'dangerouslySetInnerHTML':
        const serverHTML = domElement.innerHTML;
        const nextHtml = nextProp ? nextProp.__html : undefined;
        if (nextHtml != null) {
          const expectedHTML = normalizeHTML(domElement, nextHtml);
          if (expectedHTML !== serverHTML) {
            warnForPropDifference(propKey, serverHTML, expectedHTML);
          }
        }
        continue;
      case 'style':
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey);

        if (canDiffStyleForHydrationWarning) {
          const expectedStyle = createDangerousStringForStyles(nextProp);
          serverValue = domElement.getAttribute('style');
          if (expectedStyle !== serverValue) {
            warnForPropDifference(propKey, serverValue, expectedStyle);
          }
        }
        continue;
      // eslint-disable-next-line no-fallthrough
      default:
        if (
          // shouldIgnoreAttribute
          // We have already filtered out null/undefined and reserved words.
          propKey.length > 2 &&
          (propKey[0] === 'o' || propKey[0] === 'O') &&
          (propKey[1] === 'n' || propKey[1] === 'N')
        ) {
          continue;
        }
        const propertyInfo = getPropertyInfo(propKey);
        let isMismatchDueToBadCasing = false;
        if (propertyInfo !== null) {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propertyInfo.attributeName);
          serverValue = getValueForProperty(
            domElement,
            propKey,
            nextProp,
            propertyInfo,
          );
        } else {
          let ownNamespaceDev = parentNamespaceDev;
          if (ownNamespaceDev === HTML_NAMESPACE) {
            ownNamespaceDev = getIntrinsicNamespace(tag);
          }
          if (ownNamespaceDev === HTML_NAMESPACE) {
            // $FlowFixMe - Should be inferred as not undefined.
            extraAttributeNames.delete(propKey.toLowerCase());
          } else {
            const standardName = getPossibleStandardName(propKey);
            if (standardName !== null && standardName !== propKey) {
              // If an SVG prop is supplied with bad casing, it will
              // be successfully parsed from HTML, but will produce a mismatch
              // (and would be incorrectly rendered on the client).
              // However, we already warn about bad casing elsewhere.
              // So we'll skip the misleading extra mismatch warning in this case.
              isMismatchDueToBadCasing = true;
              // $FlowFixMe - Should be inferred as not undefined.
              extraAttributeNames.delete(standardName);
            }
            // $FlowFixMe - Should be inferred as not undefined.
            extraAttributeNames.delete(propKey);
          }
          serverValue = getValueForAttribute(domElement, propKey, nextProp);
        }

        if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
    }
  }
}

export function diffHydratedProperties(
  domElement: Element,
  tag: string,
  rawProps: Object,
  isConcurrentMode: boolean,
  shouldWarnDev: boolean,
  parentNamespaceDev: string,
): null | Array<mixed> {
  if (__DEV__) {
    validatePropertiesInDevelopment(tag, rawProps);
  }

  // TODO: Make sure that we check isMounted before firing any of these events.
  switch (tag) {
    case 'dialog':
      listenToNonDelegatedEvent('cancel', domElement);
      listenToNonDelegatedEvent('close', domElement);
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the load event.
      listenToNonDelegatedEvent('load', domElement);
      break;
    case 'video':
    case 'audio':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for all the media events.
      for (let i = 0; i < mediaEventTypes.length; i++) {
        listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
      }
      break;
    case 'source':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the error event.
      listenToNonDelegatedEvent('error', domElement);
      break;
    case 'img':
    case 'image':
    case 'link':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for error and load events.
      listenToNonDelegatedEvent('error', domElement);
      listenToNonDelegatedEvent('load', domElement);
      break;
    case 'details':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the toggle event.
      listenToNonDelegatedEvent('toggle', domElement);
      break;
    case 'input':
      ReactDOMInputInitWrapperState(domElement, rawProps);
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.
      listenToNonDelegatedEvent('invalid', domElement);
      break;
    case 'option':
      ReactDOMOptionValidateProps(domElement, rawProps);
      break;
    case 'select':
      ReactDOMSelectInitWrapperState(domElement, rawProps);
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.
      listenToNonDelegatedEvent('invalid', domElement);
      break;
    case 'textarea':
      ReactDOMTextareaInitWrapperState(domElement, rawProps);
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.
      listenToNonDelegatedEvent('invalid', domElement);
      break;
  }

  if (rawProps.hasOwnProperty('onScroll')) {
    listenToNonDelegatedEvent('scroll', domElement);
  }

  assertValidProps(tag, rawProps);

  let updatePayload = null;

  const children = rawProps.children;
  // For text content children we compare against textContent. This
  // might match additional HTML that is hidden when we read it using
  // textContent. E.g. "foo" will match "f<span>oo</span>" but that still
  // satisfies our requirement. Our requirement is not to produce perfect
  // HTML and attributes. Ideally we should preserve structure but it's
  // ok not to if the visible content is still enough to indicate what
  // even listeners these nodes might be wired up to.
  // TODO: Warn if there is more than a single textNode as a child.
  // TODO: Should we use domElement.firstChild.nodeValue to compare?
  if (typeof children === 'string' || typeof children === 'number') {
    if (domElement.textContent !== '' + children) {
      if (rawProps.suppressHydrationWarning !== true) {
        checkForUnmatchedText(
          domElement.textContent,
          children,
          isConcurrentMode,
          shouldWarnDev,
        );
      }
      if (!isConcurrentMode) {
        updatePayload = ['children', children];
      }
    }
  }

  if (__DEV__ && shouldWarnDev) {
    const extraAttributeNames: Set<string> = new Set();
    const attributes = domElement.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const name = attributes[i].name.toLowerCase();
      switch (name) {
        // Controlled attributes are not validated
        // TODO: Only ignore them on controlled tags.
        case 'value':
          break;
        case 'checked':
          break;
        case 'selected':
          break;
        default:
          // Intentionally use the original name.
          // See discussion in https://github.com/facebook/react/pull/10676.
          extraAttributeNames.add(attributes[i].name);
      }
    }
    if (isCustomComponent(tag, rawProps)) {
      diffHydratedCustomComponent(
        domElement,
        tag,
        rawProps,
        parentNamespaceDev,
        extraAttributeNames,
      );
    } else {
      diffHydratedGenericElement(
        domElement,
        tag,
        rawProps,
        parentNamespaceDev,
        extraAttributeNames,
      );
    }
    if (
      // $FlowFixMe - Should be inferred as not undefined.
      extraAttributeNames.size > 0 &&
      rawProps.suppressHydrationWarning !== true
    ) {
      // $FlowFixMe - Should be inferred as not undefined.
      warnForExtraAttributes(extraAttributeNames);
    }
  }

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track((domElement: any));
      ReactDOMInputPostMountWrapper(domElement, rawProps, true);
      break;
    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track((domElement: any));
      ReactDOMTextareaPostMountWrapper(domElement, rawProps);
      break;
    case 'select':
    case 'option':
      // For input and textarea we current always set the value property at
      // post mount to force it to diverge from attributes. However, for
      // option and select we don't quite do the same thing and select
      // is not resilient to the DOM state changing so we don't do that here.
      // TODO: Consider not doing this for input and textarea.
      break;
    default:
      if (typeof rawProps.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(((domElement: any): HTMLElement));
      }
      break;
  }

  return updatePayload;
}

export function diffHydratedText(
  textNode: Text,
  text: string,
  isConcurrentMode: boolean,
): boolean {
  const isDifferent = textNode.nodeValue !== text;
  return isDifferent;
}

export function warnForDeletedHydratableElement(
  parentNode: Element | Document | DocumentFragment,
  child: Element,
) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    console.error(
      'Did not expect server HTML to contain a <%s> in <%s>.',
      child.nodeName.toLowerCase(),
      parentNode.nodeName.toLowerCase(),
    );
  }
}

export function warnForDeletedHydratableText(
  parentNode: Element | Document | DocumentFragment,
  child: Text,
) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    console.error(
      'Did not expect server HTML to contain the text node "%s" in <%s>.',
      child.nodeValue,
      parentNode.nodeName.toLowerCase(),
    );
  }
}

export function warnForInsertedHydratedElement(
  parentNode: Element | Document | DocumentFragment,
  tag: string,
  props: Object,
) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    console.error(
      'Expected server HTML to contain a matching <%s> in <%s>.',
      tag,
      parentNode.nodeName.toLowerCase(),
    );
  }
}

export function warnForInsertedHydratedText(
  parentNode: Element | Document | DocumentFragment,
  text: string,
) {
  if (__DEV__) {
    if (text === '') {
      // We expect to insert empty text nodes since they're not represented in
      // the HTML.
      // TODO: Remove this special case if we can just avoid inserting empty
      // text nodes.
      return;
    }
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    console.error(
      'Expected server HTML to contain a matching text node for "%s" in <%s>.',
      text,
      parentNode.nodeName.toLowerCase(),
    );
  }
}

export function restoreControlledState(
  domElement: Element,
  tag: string,
  props: Object,
): void {
  switch (tag) {
    case 'input':
      ReactDOMInputRestoreControlledState(domElement, props);
      return;
    case 'textarea':
      ReactDOMTextareaRestoreControlledState(domElement, props);
      return;
    case 'select':
      ReactDOMSelectRestoreControlledState(domElement, props);
      return;
  }
}
