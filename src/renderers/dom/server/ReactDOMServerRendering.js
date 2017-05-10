/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMServerRendering
 */

'use strict';

var ReactControlledValuePropTypes = require('ReactControlledValuePropTypes');
var ReactElement = require('ReactElement');
var ReactMarkupChecksum = require('ReactMarkupChecksum');

var createOpenTagMarkup = require('createOpenTagMarkup');
var emptyObject = require('fbjs/lib/emptyObject');
var escapeTextContentForBrowser = require('escapeTextContentForBrowser');
var invariant = require('fbjs/lib/invariant');
var omittedCloseTags = require('omittedCloseTags');
var traverseAllChildren = require('traverseAllChildren');
var warning = require('fbjs/lib/warning');

if (__DEV__) {
  var { validateProperties: validateARIAProperties } = require('ReactDOMInvalidARIAHook');
  var { validateProperties: validateInputPropertes } = require('ReactDOMNullInputValuePropHook');
  var { validateProperties: validateUnknownPropertes } = require('ReactDOMUnknownPropertyHook');
  var validatePropertiesInDevelopment = function(type, props) {
    validateARIAProperties(type, props);
    validateInputPropertes(type, props);
    validateUnknownPropertes(type, props);
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultTextareaValue = false;

var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true,
};

function warnNoop(publicInstance: ReactComponent<any, any, any>, callerName: string) {
  if (__DEV__) {
    var constructor = publicInstance.constructor;
    warning(
      false,
      '%s(...): Can only update a mounting component. ' +
        'This usually means you called %s() outside componentWillMount() on the server. ' +
        'This is a no-op.\n\nPlease check the code for the %s component.',
      callerName,
      callerName,
      (constructor && (constructor.displayName || constructor.name)) || 'ReactClass'
    );
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function resolve(child, context) {
  if (Array.isArray(child)) {
    throw new Error('well that was unexpected');
  }
  while (ReactElement.isValidElement(child) && typeof child.type === 'function') {
    var Component = child.type;
    // TODO: Mask context
    var publicContext = context;

    var inst;
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function(publicInstance) {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function(publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function(publicInstance, partialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(partialState);
      },
    };

    if (shouldConstruct(Component)) {
      inst = new Component(child.props, publicContext, updater);
    } else {
      inst = Component(child.props, publicContext, updater);
      if (inst == null || inst.render == null) {
        child = inst;
        continue;
      }
    }

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (inst.componentWillMount) {
      inst.componentWillMount();
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            let partialState = typeof partial === 'function'
              ? partial.call(inst, nextState, child.props, publicContext)
              : partial;
            if (partialState) {
              if (dontMutate) {
                dontMutate = false;
                nextState = Object.assign({}, nextState, partialState);
              } else {
                Object.assign(nextState, partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    var childContext = inst.getChildContext && inst.getChildContext();
    if (childContext) {
      context = Object.assign({}, context, childContext);
    }
  }
  return { child, context };
}

function ReactDOMServerRenderer(element, makeStaticMarkup) {
  this.stack = [
    {
      children: [element],
      childIndex: 0,
      context: emptyObject,
      footer: '',
    },
  ];
  this.idCounter = 1;
  this.exhausted = false;
  this.makeStaticMarkup = makeStaticMarkup;
}

ReactDOMServerRenderer.prototype.read = function(bytes) {
  var out = '';
  while (out.length < bytes) {
    if (this.stack.length === 0) {
      this.exhausted = true;
      break;
    }
    var frame = this.stack[this.stack.length - 1];
    if (frame.childIndex >= frame.children.length) {
      out += frame.footer;
      this.stack.pop();
      continue;
    }
    var child = frame.children[frame.childIndex++];
    out += this.render(child, frame.context);
  }
  return out;
};

ReactDOMServerRenderer.prototype.render = function(child, context) {
  if (typeof child === 'string' || typeof child === 'number') {
    if (this.makeStaticMarkup) {
      return escapeTextContentForBrowser('' + child);
    }
    return (
      '<!-- react-text: ' + this.idCounter++ + ' -->' + escapeTextContentForBrowser('' + child) + '<!-- /react-text -->'
    );
  } else {
    ({ child, context } = resolve(child, context));
    if (child === null || child === false) {
      return '<!-- react-empty: ' + this.idCounter++ + ' -->';
    } else {
      return this.renderDOM(child, context);
    }
  }
};

ReactDOMServerRenderer.prototype.renderDOM = function(element, context) {
  var tag = element.type.toLowerCase();
  var props = element.props;
  if (tag === 'input') {
    if (__DEV__) {
      ReactControlledValuePropTypes.checkPropTypes(
        'input',
        props,
        () => '', //getCurrentFiberStackAddendum
      );

      if (
        props.checked !== undefined &&
        props.defaultChecked !== undefined &&
        !didWarnDefaultChecked
      ) {
        warning(
          false,
          '%s contains an input of type %s with both checked and defaultChecked props. ' +
            'Input elements must be either controlled or uncontrolled ' +
            '(specify either the checked prop, or the defaultChecked prop, but not ' +
            'both). Decide between using a controlled or uncontrolled input ' +
            'element and remove one of these props. More info: ' +
            'https://fb.me/react-controlled-components',
          'A component',
          props.type,
        );
        didWarnDefaultChecked = true;
      }
      if (
        props.value !== undefined &&
        props.defaultValue !== undefined &&
        !didWarnDefaultInputValue
      ) {
        warning(
          false,
          '%s contains an input of type %s with both value and defaultValue props. ' +
            'Input elements must be either controlled or uncontrolled ' +
            '(specify either the value prop, or the defaultValue prop, but not ' +
            'both). Decide between using a controlled or uncontrolled input ' +
            'element and remove one of these props. More info: ' +
            'https://fb.me/react-controlled-components',
          'A component',
          props.type,
        );
        didWarnDefaultInputValue = true;
      }
    }

    props = Object.assign(
      {
        type: undefined,
      },
      props,
      {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked,
      }
    );
  } else if (tag === 'textarea') {
    if (__DEV__) {
      ReactControlledValuePropTypes.checkPropTypes(
        'textarea',
        props,
        () => '', //getCurrentFiberStackAddendum
      );
      if (
        props.value !== undefined &&
        props.defaultValue !== undefined &&
        !didWarnDefaultTextareaValue
      ) {
        warning(
          false,
          'Textarea elements must be either controlled or uncontrolled ' +
            '(specify either the value prop, or the defaultValue prop, but not ' +
            'both). Decide between using a controlled or uncontrolled textarea ' +
            'and remove one of these props. More info: ' +
            'https://fb.me/react-controlled-components',
        );
        didWarnDefaultTextareaValue = true;
      }
    }

    var initialValue = props.value;
    if (initialValue == null) {
      var defaultValue = props.defaultValue;
      // TODO (yungsters): Remove support for children content in <textarea>.
      var children = props.children;
      if (children != null) {
        if (__DEV__) {
          warning(
            false,
            'Use the `defaultValue` or `value` props instead of setting ' +
              'children on <textarea>.',
          );
        }
        invariant(
          defaultValue == null,
          'If you supply `defaultValue` on a <textarea>, do not pass children.',
        );
        if (Array.isArray(children)) {
          invariant(
            children.length <= 1,
            '<textarea> can only have at most one child.',
          );
          children = children[0];
        }

        defaultValue = '' + children;
      }
      if (defaultValue == null) {
        defaultValue = '';
      }
      initialValue = defaultValue;
    }

    props = Object.assign({}, props, {
      value: undefined,
      children: '' + initialValue,
    });
  }

  if (__DEV__) {
    validatePropertiesInDevelopment(tag, props);
  }

  var out = createOpenTagMarkup(
    element.type,
    tag,
    props,
    this.makeStaticMarkup,
    this.stack.length === 1,
    this.idCounter++,
    null,
  );
  var footer = '';
  if (omittedCloseTags.hasOwnProperty(tag)) {
    out += '/>';
  } else {
    out += '>';
    footer = '</' + element.type + '>';
  }
  var children = [];
  var innerMarkup = getNonChildrenInnerMarkup(props);
  if (innerMarkup != null) {
    if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
      // text/html ignores the first character in these tags if it's a newline
      // Prefer to break application/xml over text/html (for now) by adding
      // a newline specifically to get eaten by the parser. (Alternately for
      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
      // \r is normalized out by HTMLTextAreaElement#value.)
      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
      // See: Parsing of "textarea" "listing" and "pre" elements
      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
      out += '\n';
    }
    out += innerMarkup;
  } else {
    traverseAllChildren(props.children, function(ctx, child, name) {
      if (child != null) {
        children.push(child);
      }
    });
  }
  this.stack.push({
    children,
    childIndex: 0,
    context: context,
    footer: footer,
  });
  return out;
};

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextContentForBrowser(content);
    }
  }
  return null;
}

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  invariant(ReactElement.isValidElement(element), 'renderToString(): You must pass a valid ReactElement.');
  var renderer = new ReactDOMServerRenderer(element, false);
  var markup = renderer.read(Infinity);
  markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
  return markup;
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  invariant(ReactElement.isValidElement(element), 'renderToStaticMarkup(): You must pass a valid ReactElement.');
  var renderer = new ReactDOMServerRenderer(element, true);
  var markup = renderer.read(Infinity);
  return markup;
}

var ReactDOMServerRendering = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
};

module.exports = ReactDOMServerRendering;
