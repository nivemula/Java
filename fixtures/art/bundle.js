/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(9);
	var VectorWidget = __webpack_require__(27);

	ReactDOM.render(React.createElement(VectorWidget, null), document.getElementById('container'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react.production.min.js');
	} else {
	  module.exports = __webpack_require__(3);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _assign = __webpack_require__(4);
	var warning = __webpack_require__(5);
	var emptyObject = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var emptyFunction = __webpack_require__(6);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */

	function warnNoop(publicInstance, callerName) {
	  {
	    var constructor = publicInstance.constructor;
	    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted(publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule canDefineProperty
	 */

	var canDefineProperty = false;
	{
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function get() {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	var canDefineProperty_1 = canDefineProperty;

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue_1;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	    if (canDefineProperty_1) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function get() {
	          warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue_1;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	var ReactBaseClasses = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent
	};

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler$1 = function twoArgumentPooler$1(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler$1 = function fourArgumentPooler$1(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? invariant(false, 'Trying to release an instance into a pool of a different type.') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler$1,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler$1
	};

	var PooledClass_1 = PooledClass;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 * 
	 */

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var ReactCurrentOwner_1 = ReactCurrentOwner;

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementSymbol
	 * 
	 */

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var ReactElementSymbol = REACT_ELEMENT_TYPE;

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function warnAboutAccessingKey() {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function warnAboutAccessingRef() {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: ReactElementSymbol,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty_1) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/react-api.html#createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== ReactElementSymbol) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/react-api.html#createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/react-api.html#cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner_1.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === ReactElementSymbol;
	};

	var ReactElement_1 = ReactElement;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	var getIteratorFn_1 = getIteratorFn;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	var KeyEscapeUtils_1 = KeyEscapeUtils;

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && (typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils_1.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === ReactElementSymbol) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn_1(children);
	    if (iteratorFn) {
	      {
	        // Warn about using Maps as children
	        if (iteratorFn === children.entries) {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner_1.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner_1.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = '\n\nCheck the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', mapsAsChildrenAddendum);
	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(children);
	      var step;
	      var ii = 0;
	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getComponentKey(child, ii++);
	        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.';
	        if (ReactCurrentOwner_1.current) {
	          var name = ReactCurrentOwner_1.current.getName();
	          if (name) {
	            addendum += '\n\nCheck the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = '' + children;
	      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	var traverseAllChildren_1 = traverseAllChildren;

	var twoArgumentPooler = PooledClass_1.twoArgumentPooler;
	var fourArgumentPooler = PooledClass_1.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass_1.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren_1(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass_1.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement_1.isValidElement(mappedChild)) {
	      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren_1(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren_1(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	var ReactChildren_1 = ReactChildren;

	var ReactComponent$1 = ReactBaseClasses.Component;

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'
	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function displayName(Constructor, _displayName) {
	    Constructor.displayName = _displayName;
	  },
	  mixins: function mixins(Constructor, _mixins) {
	    if (_mixins) {
	      for (var i = 0; i < _mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, _mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
	    {
	      validateTypeDef(Constructor, _childContextTypes, 'child context');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
	  },
	  contextTypes: function contextTypes(Constructor, _contextTypes) {
	    {
	      validateTypeDef(Constructor, _contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = _getDefaultProps;
	    }
	  },
	  propTypes: function propTypes(Constructor, _propTypes) {
	    {
	      validateTypeDef(Constructor, _propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
	  },
	  statics: function statics(Constructor, _statics) {
	    mixStaticSpecIntoComponent(Constructor, _statics);
	  },
	  autobind: function autobind() {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in true
	      warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', location, propName);
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    {
	      var typeofSpec = typeof spec === 'undefined' ? 'undefined' : _typeof(spec);
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      warning(isMixinValid, "%s: You're attempting to include a mixin that is either null " + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec);
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : void 0;
	  !!ReactElement_1.isValidElement(spec) ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && (typeof one === 'undefined' ? 'undefined' : _typeof(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : _typeof(two)) === 'object') ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance.\n\nSee %s', componentName);
	      } else if (!args.length) {
	        warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call.\n\nSee %s', componentName);
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {
	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function replaceState(newState, callback) {
	    this.updater.enqueueReplaceState(this, newState, callback, 'replaceState');
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted() {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function ReactClassComponent() {};
	_assign(ReactClassComponent.prototype, ReactComponent$1.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/react-api.html#createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      {
	        warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory');
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue_1;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : void 0;

	    {
	      warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component');
	      warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component');
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }
	};

	var ReactClass_1 = ReactClass;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule ReactPropTypesSecret
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          !(typeof typeSpecs[typeSpecName] === 'function') ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', location, typeSpecName) : void 0;
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	var checkPropTypes_1 = checkPropTypes;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTypeOfWork
	 * 
	 */

	var ReactTypeOfWork = {
	  IndeterminateComponent: 0, // Before we know whether it is functional or class
	  FunctionalComponent: 1,
	  ClassComponent: 2,
	  HostRoot: 3, // Root of a host tree. Could be nested inside another node.
	  HostPortal: 4, // A subtree. Could be an entry point to a different renderer.
	  HostComponent: 5,
	  HostText: 6,
	  CoroutineComponent: 7,
	  CoroutineHandlerPhase: 8,
	  YieldComponent: 9,
	  Fragment: 10
	};

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getComponentName
	 */

	function getComponentName(instanceOrFiber) {
	  if (typeof instanceOrFiber.getName === 'function') {
	    // Stack reconciler
	    var instance = instanceOrFiber;
	    return instance.getName();
	  }
	  if (typeof instanceOrFiber.tag === 'number') {
	    // Fiber reconciler
	    var fiber = instanceOrFiber;
	    var type = fiber.type;

	    if (typeof type === 'string') {
	      return type;
	    }
	    if (typeof type === 'function') {
	      return type.displayName || type.name;
	    }
	  }
	  return null;
	}

	var getComponentName_1 = getComponentName;

	var IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent = ReactTypeOfWork.ClassComponent;
	var HostComponent = ReactTypeOfWork.HostComponent;

	function describeComponentFrame$1(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case IndeterminateComponent:
	    case FunctionalComponent:
	    case ClassComponent:
	    case HostComponent:
	      var owner = fiber._debugOwner;
	      var source = fiber._debugSource;
	      var name = getComponentName_1(fiber);
	      var ownerName = null;
	      if (owner) {
	        ownerName = getComponentName_1(owner);
	      }
	      return describeComponentFrame$1(name, source, ownerName);
	    default:
	      return '';
	  }
	}

	// This function can only be called with a work-in-progress fiber and
	// only during begin or complete phase. Do not call it under any other
	// circumstances.
	function getStackAddendumByWorkInProgressFiber$2(workInProgress) {
	  var info = '';
	  var node = workInProgress;
	  do {
	    info += describeFiber(node);
	    // Otherwise this return pointer might point to the wrong tree:
	    node = node['return'];
	  } while (node);
	  return info;
	}

	var ReactFiberComponentTreeHook = {
	  getStackAddendumByWorkInProgressFiber: getStackAddendumByWorkInProgressFiber$2,
	  describeComponentFrame: describeComponentFrame$1
	};

	var getStackAddendumByWorkInProgressFiber$1 = ReactFiberComponentTreeHook.getStackAddendumByWorkInProgressFiber;
	var describeComponentFrame = ReactFiberComponentTreeHook.describeComponentFrame;

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function setItem(id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function getItem(id) {
	    return itemMap.get(id);
	  };
	  removeItem = function removeItem(id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function getItemIDs() {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function addRoot(id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function removeRoot(id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function getRootIDs() {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function getKeyFromID(id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function getIDFromKey(key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function setItem(id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function getItem(id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function removeItem(id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function getItemIDs() {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function addRoot(id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function removeRoot(id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function getRootIDs() {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function _getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName = void 0;

	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
	  return describeComponentFrame(name || '', element && element._source, ownerName || '');
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function onSetChildren(id, nextChildIDs) {
	    var item = getItem(id);
	    invariant(item, 'Item must have been set');
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
	      !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
	      !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function onMountComponent(id) {
	    var item = getItem(id);
	    invariant(item, 'Item must have been set');
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function onUpdateComponent(id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function onUnmountComponent(id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function purgeUnmountedComponents() {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function isMounted(id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
	    var info = '';
	    if (topElement) {
	      var name = _getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && getComponentName_1(owner));
	    }

	    var currentOwner = ReactCurrentOwner_1.current;
	    if (currentOwner) {
	      if (typeof currentOwner.tag === 'number') {
	        var workInProgress = currentOwner;
	        // Safe because if current owner exists, we are reconciling,
	        // and it is guaranteed to be the work-in-progress version.
	        info += getStackAddendumByWorkInProgressFiber$1(workInProgress);
	      } else if (typeof currentOwner._debugID === 'number') {
	        info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
	      }
	    }
	    return info;
	  },
	  getStackAddendumByID: function getStackAddendumByID(id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function getChildIDs(id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function getDisplayName(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return _getDisplayName(element);
	  },
	  getElement: function getElement(id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function getOwnerID(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function getParentID(id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function getSource(id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function getText(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function getUpdateCount(id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },

	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	var ReactComponentTreeHook_1 = ReactComponentTreeHook;

	var ReactDebugCurrentFrame$1 = {};

	{
	  var _require$1 = ReactComponentTreeHook_1,
	      getStackAddendumByID = _require$1.getStackAddendumByID,
	      getCurrentStackAddendum$1 = _require$1.getCurrentStackAddendum;

	  var _require2 = ReactFiberComponentTreeHook,
	      getStackAddendumByWorkInProgressFiber = _require2.getStackAddendumByWorkInProgressFiber;

	  // Component that is being worked on


	  ReactDebugCurrentFrame$1.current = null;

	  // Element that is being cloned or created
	  ReactDebugCurrentFrame$1.element = null;

	  ReactDebugCurrentFrame$1.getStackAddendum = function () {
	    var stack = null;
	    var current = ReactDebugCurrentFrame$1.current;
	    var element = ReactDebugCurrentFrame$1.element;
	    if (current !== null) {
	      if (typeof current === 'number') {
	        // DebugID from Stack.
	        var debugID = current;
	        stack = getStackAddendumByID(debugID);
	      } else if (typeof current.tag === 'number') {
	        // This is a Fiber.
	        // The stack will only be correct if this is a work in progress
	        // version and we're calling it during reconciliation.
	        var workInProgress = current;
	        stack = getStackAddendumByWorkInProgressFiber(workInProgress);
	      }
	    } else if (element !== null) {
	      stack = getCurrentStackAddendum$1(element);
	    }
	    return stack;
	  };
	}

	var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame$1;

	var getStackAddendum = ReactDebugCurrentFrame_1.getStackAddendum;

	function checkReactTypeSpec(typeSpecs, values, location, componentName) {
	  checkPropTypes_1(typeSpecs, values, location, componentName, getStackAddendum);
	}

	var checkReactTypeSpec_1 = checkReactTypeSpec;

	{
	  var warning$2 = warning;
	  var ReactDebugCurrentFrame = ReactDebugCurrentFrame_1;

	  var _require = ReactComponentTreeHook_1,
	      getCurrentStackAddendum = _require.getCurrentStackAddendum;
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner_1.current) {
	    var name = getComponentName_1(ReactCurrentOwner_1.current);
	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + getComponentName_1(element._owner) + '.';
	  }

	  warning$2(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getCurrentStackAddendum(element));
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement_1.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement_1.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn_1(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement_1.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;

	  // ReactNative `View.propTypes` have been deprecated in favor of `ViewPropTypes`.
	  // In their place a temporary getter has been added with a deprecated warning message.
	  // Avoid triggering that warning during validation using the temporary workaround,
	  // __propTypesSecretDontUseThesePlease.
	  // TODO (bvaughn) Revert this particular change any time after April 1 ReactNative tag.
	  var propTypes = _typeof(componentClass.__propTypesSecretDontUseThesePlease) === 'object' ? componentClass.__propTypesSecretDontUseThesePlease : componentClass.propTypes;

	  if (propTypes) {
	    checkReactTypeSpec_1(propTypes, element.props, 'prop', name);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    warning$2(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	  }
	}

	var ReactElementValidator$2 = {
	  createElement: function createElement(type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      var info = '';
	      if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(props);
	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      info += getCurrentStackAddendum();

	      warning$2(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof(type), info);
	    }

	    var element = ReactElement_1.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    {
	      ReactDebugCurrentFrame.element = element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    {
	      ReactDebugCurrentFrame.element = null;
	    }

	    return element;
	  },

	  createFactory: function createFactory(type) {
	    var validatedFactory = ReactElementValidator$2.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    {
	      if (canDefineProperty_1) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function get() {
	            warning$2(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function cloneElement(element, props, children) {
	    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
	    {
	      ReactDebugCurrentFrame.element = newElement;
	    }
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    {
	      ReactDebugCurrentFrame.element = null;
	    }
	    return newElement;
	  }
	};

	var ReactElementValidator_1 = ReactElementValidator$2;

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement_1.createFactory;
	{
	  var ReactElementValidator$1 = ReactElementValidator_1;
	  createDOMFactory = ReactElementValidator$1.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	var ReactDOMFactories_1 = ReactDOMFactories;

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes;

	{
	  // Keep in sync with production version below
	  ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However, we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    {
	      if (secret !== ReactPropTypesSecret_1 && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement_1.isValidElement(propValue)) {
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	        return null;
	      }
	    }

	    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement_1.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn_1(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	var ReactPropTypes_1 = ReactPropTypes;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	var ReactVersion = '16.0.0-alpha.6';

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/react-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
	  return children;
	}

	var onlyChild_1 = onlyChild;

	var createElement = ReactElement_1.createElement;
	var createFactory = ReactElement_1.createFactory;
	var cloneElement = ReactElement_1.cloneElement;

	{
	  var ReactElementValidator = ReactElementValidator_1;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var createMixin = function createMixin(mixin) {
	  return mixin;
	};

	{
	  var warnedForCreateMixin = false;

	  createMixin = function createMixin(mixin) {
	    warning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. You ' + 'can use this mixin directly instead.');
	    warnedForCreateMixin = true;
	    return mixin;
	  };
	}

	var React = {
	  // Modern

	  Children: {
	    map: ReactChildren_1.map,
	    forEach: ReactChildren_1.forEach,
	    count: ReactChildren_1.count,
	    toArray: ReactChildren_1.toArray,
	    only: onlyChild_1
	  },

	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement_1.isValidElement,

	  checkPropTypes: checkPropTypes_1,

	  // Classic

	  PropTypes: ReactPropTypes_1,
	  createClass: ReactClass_1.createClass,
	  createFactory: createFactory,
	  createMixin: createMixin,

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories_1,

	  version: ReactVersion
	};

	var React_1 = React;

	// `version` will be added here by the React module.
	var ReactUMDEntry = _assign({
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
	    ReactCurrentOwner: ReactCurrentOwner_1
	  }
	}, React_1);

	{
	  _assign(ReactUMDEntry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
	    // ReactComponentTreeHook should not be included in production.
	    ReactComponentTreeHook: ReactComponentTreeHook_1
	  });
	}

	var ReactUMDEntry_1 = ReactUMDEntry;

	module.exports = ReactUMDEntry_1;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react-dom.production.min.js');
	} else {
	  module.exports = __webpack_require__(10);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _assign=__webpack_require__(4);var invariant=__webpack_require__(8);var warning=__webpack_require__(5);var ExecutionEnvironment=__webpack_require__(11);var camelizeStyleName=__webpack_require__(12);var hyphenateStyleName=__webpack_require__(14);var memoizeStringOnly=__webpack_require__(16);var React=__webpack_require__(2);var performanceNow=__webpack_require__(17);var emptyFunction=__webpack_require__(6);var EventListener=__webpack_require__(19);var getUnboundedScrollPosition=__webpack_require__(20);var containsNode=__webpack_require__(21);var focusNode=__webpack_require__(24);var getActiveElement=__webpack_require__(25);var shallowEqual=__webpack_require__(26);var emptyObject=__webpack_require__(7);/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 *//**
	 * Injectable ordering of event plugins.
	 */var eventPluginOrder=null;/**
	 * Injectable mapping from names to event plugin modules.
	 */var namesToPlugins={};/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */function recomputePluginOrdering(){if(!eventPluginOrder){// Wait until an `eventPluginOrder` is injected.
	return;}for(var pluginName in namesToPlugins){var pluginModule=namesToPlugins[pluginName];var pluginIndex=eventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',pluginName):void 0;if(EventPluginRegistry.plugins[pluginIndex]){continue;}!pluginModule.extractEvents?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',pluginName):void 0;EventPluginRegistry.plugins[pluginIndex]=pluginModule;var publishedEvents=pluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],pluginModule,eventName)?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):void 0;}}}/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */function publishEventForPlugin(dispatchConfig,pluginModule,eventName){!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.',eventName):void 0;EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,pluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,pluginModule,eventName);return true;}return false;}/**
	 * Publishes a registration name that is used to identify dispatched events.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */function publishRegistrationName(registrationName,pluginModule,eventName){!!EventPluginRegistry.registrationNameModules[registrationName]?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.',registrationName):void 0;EventPluginRegistry.registrationNameModules[registrationName]=pluginModule;EventPluginRegistry.registrationNameDependencies[registrationName]=pluginModule.eventTypes[eventName].dependencies;{var lowerCasedName=registrationName.toLowerCase();EventPluginRegistry.possibleRegistrationNames[lowerCasedName]=registrationName;if(registrationName==='onDoubleClick'){EventPluginRegistry.possibleRegistrationNames.ondblclick=registrationName;}}}/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */var EventPluginRegistry={/**
	   * Ordered list of injected plugins.
	   */plugins:[],/**
	   * Mapping from event name to dispatch config
	   */eventNameDispatchConfigs:{},/**
	   * Mapping from registration name to plugin module
	   */registrationNameModules:{},/**
	   * Mapping from registration name to event name
	   */registrationNameDependencies:{},/**
	   * Mapping from lowercase registration names to the properly cased version,
	   * used to warn in the case of missing event handlers. Available
	   * only in true.
	   * @type {Object}
	   */possibleRegistrationNames:{},// Trust the developer to only use possibleRegistrationNames in true
	/**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */injectEventPluginOrder:function injectEventPluginOrder(injectedEventPluginOrder){!!eventPluginOrder?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.'):void 0;// Clone the ordering so it cannot be dynamically mutated.
	eventPluginOrder=Array.prototype.slice.call(injectedEventPluginOrder);recomputePluginOrdering();},/**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */injectEventPluginsByName:function injectEventPluginsByName(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var pluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==pluginModule){!!namesToPlugins[pluginName]?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',pluginName):void 0;namesToPlugins[pluginName]=pluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}}};var EventPluginRegistry_1=EventPluginRegistry;var caughtError=null;var _invokeGuardedCallback=function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){return error;}return null;};{/**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');var depth=0;_invokeGuardedCallback=function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){depth++;var thisDepth=depth;var funcArgs=Array.prototype.slice.call(arguments,3);var boundFunc=function boundFunc(){func.apply(context,funcArgs);};var fakeEventError=null;var onFakeEventError=function onFakeEventError(event){// Don't capture nested errors
	if(depth===thisDepth){fakeEventError=event.error;}};var evtType='react-'+(name?name:'invokeguardedcallback')+'-'+depth;window.addEventListener('error',onFakeEventError);fakeNode.addEventListener(evtType,boundFunc,false);var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);fakeNode.removeEventListener(evtType,boundFunc,false);window.removeEventListener('error',onFakeEventError);depth--;return fakeEventError;};}}var _rethrowCaughtError=function _rethrowCaughtError(){if(caughtError){var error=caughtError;caughtError=null;throw error;}};/**
	 * Call a function while guarding against errors that happens within it.
	 * Returns an error if it throws, otherwise null.
	 *
	 * @param {String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} context The context to use when calling the function
	 * @param {...*} args Arguments for function
	 */var ReactErrorUtils={injection:{injectErrorUtils:function injectErrorUtils(injectedErrorUtils){!(typeof injectedErrorUtils.invokeGuardedCallback==='function')?invariant(false,'Injected invokeGuardedCallback() must be a function.'):void 0;_invokeGuardedCallback=injectedErrorUtils.invokeGuardedCallback;}},invokeGuardedCallback:function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){return _invokeGuardedCallback.apply(this,arguments);},/**
	   * Same as invokeGuardedCallback, but instead of returning an error, it stores
	   * it in a global so it can be rethrown by `rethrowCaughtError` later.
	   *
	   * @param {String} name of the guard to use for logging or debugging
	   * @param {Function} func The function to invoke
	   * @param {*} context The context to use when calling the function
	   * @param {...*} args Arguments for function
	   */invokeGuardedCallbackAndCatchFirstError:function invokeGuardedCallbackAndCatchFirstError(name,func,context,a,b,c,d,e,f){var error=ReactErrorUtils.invokeGuardedCallback.apply(this,arguments);if(error!==null&&caughtError===null){caughtError=error;}},/**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */rethrowCaughtError:function rethrowCaughtError(){return _rethrowCaughtError.apply(this,arguments);}};var ReactErrorUtils_1=ReactErrorUtils;/**
	 * Injected dependencies:
	 *//**
	 * - `ComponentTree`: [required] Module that can convert between React instances
	 *   and actual node references.
	 */var ComponentTree;var injection={injectComponentTree:function injectComponentTree(Injected){ComponentTree=Injected;{warning(Injected&&Injected.getNodeFromInstance&&Injected.getInstanceFromNode,'EventPluginUtils.injection.injectComponentTree(...): Injected '+'module is missing getNodeFromInstance or getInstanceFromNode.');}}};function isEndish(topLevelType){return topLevelType==='topMouseUp'||topLevelType==='topTouchEnd'||topLevelType==='topTouchCancel';}function isMoveish(topLevelType){return topLevelType==='topMouseMove'||topLevelType==='topTouchMove';}function isStartish(topLevelType){return topLevelType==='topMouseDown'||topLevelType==='topTouchStart';}var validateEventDispatches;{validateEventDispatches=function validateEventDispatches(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;var listenersIsArr=Array.isArray(dispatchListeners);var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;var instancesIsArr=Array.isArray(dispatchInstances);var instancesLen=instancesIsArr?dispatchInstances.length:dispatchInstances?1:0;warning(instancesIsArr===listenersIsArr&&instancesLen===listenersLen,'EventPluginUtils: Invalid `event`.');};}/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {*} inst Internal component instance
	 */function executeDispatch(event,simulated,listener,inst){var type=event.type||'unknown-event';event.currentTarget=EventPluginUtils.getNodeFromInstance(inst);ReactErrorUtils_1.invokeGuardedCallbackAndCatchFirstError(type,listener,undefined,event);event.currentTarget=null;}/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;{validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
	executeDispatch(event,simulated,dispatchListeners[i],dispatchInstances[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchInstances);}event._dispatchListeners=null;event._dispatchInstances=null;}/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;{validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
	if(dispatchListeners[i](event,dispatchInstances[i])){return dispatchInstances[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchInstances)){return dispatchInstances;}}return null;}/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchInstances=null;event._dispatchListeners=null;return ret;}/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */function executeDirectDispatch(event){{validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchInstance=event._dispatchInstances;!!Array.isArray(dispatchListener)?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):void 0;event.currentTarget=dispatchListener?EventPluginUtils.getNodeFromInstance(dispatchInstance):null;var res=dispatchListener?dispatchListener(event):null;event.currentTarget=null;event._dispatchListeners=null;event._dispatchInstances=null;return res;}/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */function hasDispatches(event){return!!event._dispatchListeners;}/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,getFiberCurrentPropsFromNode:function getFiberCurrentPropsFromNode(node){return ComponentTree.getFiberCurrentPropsFromNode(node);},getInstanceFromNode:function getInstanceFromNode(node){return ComponentTree.getInstanceFromNode(node);},getNodeFromInstance:function getNodeFromInstance(node){return ComponentTree.getNodeFromInstance(node);},injection:injection};var EventPluginUtils_1=EventPluginUtils;/**
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */function accumulateInto(current,next){!(next!=null)?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):void 0;if(current==null){return next;}// Both are not empty. Warning: Never call x.concat(y) when you are not
	// certain that x is an Array (x could be a string with concat method).
	if(Array.isArray(current)){if(Array.isArray(next)){current.push.apply(current,next);return current;}current.push(next);return current;}if(Array.isArray(next)){// A bit too dangerous to mutate `next`.
	return[current].concat(next);}return[current,next];}var accumulateInto_1=accumulateInto;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 * 
	 *//**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 * @param {function} cb Callback invoked with each element or a collection.
	 * @param {?} [scope] Scope used as `this` in a callback.
	 */function forEachAccumulated(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}}var forEachAccumulated_1=forEachAccumulated;/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */var eventQueue=null;/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */var executeDispatchesAndRelease=function executeDispatchesAndRelease(event,simulated){if(event){EventPluginUtils_1.executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function executeDispatchesAndReleaseSimulated(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function executeDispatchesAndReleaseTopLevel(e){return executeDispatchesAndRelease(e,false);};function isInteractive(tag){return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';}function shouldPreventMouseEvent(name,type,props){switch(name){case'onClick':case'onClickCapture':case'onDoubleClick':case'onDoubleClickCapture':case'onMouseDown':case'onMouseDownCapture':case'onMouseMove':case'onMouseMoveCapture':case'onMouseUp':case'onMouseUpCapture':return!!(props.disabled&&isInteractive(type));default:return false;}}/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */var EventPluginHub={/**
	   * Methods for injecting dependencies.
	   */injection:{/**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */injectEventPluginOrder:EventPluginRegistry_1.injectEventPluginOrder,/**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */injectEventPluginsByName:EventPluginRegistry_1.injectEventPluginsByName},/**
	   * @param {object} inst The instance, which is the source of events.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */getListener:function getListener(inst,registrationName){var listener;// TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
	// live here; needs to be moved to a better place soon
	if(typeof inst.tag==='number'){var stateNode=inst.stateNode;if(!stateNode){// Work in progress (ex: onload events in incremental mode).
	return null;}var props=EventPluginUtils_1.getFiberCurrentPropsFromNode(stateNode);if(!props){// Work in progress.
	return null;}listener=props[registrationName];if(shouldPreventMouseEvent(registrationName,inst.type,props)){return null;}}else{var currentElement=inst._currentElement;if(typeof currentElement==='string'||typeof currentElement==='number'){// Text node, let it bubble through.
	return null;}if(!inst._rootNodeID){// If the instance is already unmounted, we have no listeners.
	return null;}var _props=currentElement.props;listener=_props[registrationName];if(shouldPreventMouseEvent(registrationName,currentElement.type,_props)){return null;}}!(!listener||typeof listener==='function')?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener==='undefined'?'undefined':_typeof(listener)):void 0;return listener;},/**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events;var plugins=EventPluginRegistry_1.plugins;for(var i=0;i<plugins.length;i++){// Not every plugin in the ordering may be loaded at runtime.
	var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto_1(events,extractedEvents);}}}return events;},/**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */enqueueEvents:function enqueueEvents(events){if(events){eventQueue=accumulateInto_1(eventQueue,events);}},/**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */processEventQueue:function processEventQueue(simulated){// Set `eventQueue` to null before processing it so that we can tell if more
	// events get enqueued while processing.
	var processingEventQueue=eventQueue;eventQueue=null;if(simulated){forEachAccumulated_1(processingEventQueue,executeDispatchesAndReleaseSimulated);}else{forEachAccumulated_1(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?invariant(false,'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.'):void 0;// This would be a good time to rethrow if any of the event handlers threw.
	ReactErrorUtils_1.rethrowCaughtError();}};var EventPluginHub_1=EventPluginHub;function runEventQueueInBatch(events){EventPluginHub_1.enqueueEvents(events);EventPluginHub_1.processEventQueue(false);}var ReactEventEmitterMixin={/**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   */handleTopLevel:function handleTopLevel(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events=EventPluginHub_1.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}};var ReactEventEmitterMixin_1=ReactEventEmitterMixin;/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;prefixes['ms'+styleProp]='MS'+eventName;prefixes['O'+styleProp]='o'+eventName.toLowerCase();return prefixes;}/**
	 * A list of event names to a configurable list of vendor prefixes.
	 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')};/**
	 * Event names that have already been detected and prefixed (if applicable).
	 */var prefixedEventNames={};/**
	 * Element to check for prefixes on.
	 */var style={};/**
	 * Bootstrap if a DOM exists.
	 */if(ExecutionEnvironment.canUseDOM){style=document.createElement('div').style;// On some platforms, in particular some releases of Android 4.x,
	// the un-prefixed "animation" and "transition" properties are defined on the
	// style object but the events that fire will still be prefixed, so we need
	// to check if the un-prefixed events are usable, and if not remove them from the map.
	if(!('AnimationEvent'in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;}// Same as above
	if(!('TransitionEvent'in window)){delete vendorPrefixes.transitionend.transition;}}/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return'';}var getVendorPrefixedEventName_1=getVendorPrefixedEventName;var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature=document.implementation&&document.implementation.hasFeature&&// always returns true in newer browsers as per the standard.
	// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	document.implementation.hasFeature('','')!==true;}/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener'in document)){return false;}var eventName='on'+eventNameSuffix;var isSupported=eventName in document;if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){// This is the only way to test support for the `wheel` event in IE9+.
	isSupported=document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}var isEventSupported_1=isEventSupported;/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */var alreadyListeningTo={};var reactTopListenersCounter=0;// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping={topAbort:'abort',topAnimationEnd:getVendorPrefixedEventName_1('animationend')||'animationend',topAnimationIteration:getVendorPrefixedEventName_1('animationiteration')||'animationiteration',topAnimationStart:getVendorPrefixedEventName_1('animationstart')||'animationstart',topBlur:'blur',topCancel:'cancel',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topClose:'close',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topToggle:'toggle',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topTransitionEnd:getVendorPrefixedEventName_1('transitionend')||'transitionend',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'};/**
	 * To ensure no conflicts with other potential React instances on the page
	 */var topListenersIDKey='_reactListenersID'+(''+Math.random()).slice(2);function getListeningForDocument(mountAt){// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	// directly.
	if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];}var ReactBrowserEventEmitter=_assign({},ReactEventEmitterMixin_1,{/**
	   * Injectable event backend
	   */ReactEventListener:null,injection:{/**
	     * @param {object} ReactEventListener
	     */injectReactEventListener:function injectReactEventListener(ReactEventListener){ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);ReactBrowserEventEmitter.ReactEventListener=ReactEventListener;}},/**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */setEnabled:function setEnabled(enabled){if(ReactBrowserEventEmitter.ReactEventListener){ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}},/**
	   * @return {boolean} True if callbacks are enabled.
	   */isEnabled:function isEnabled(){return!!(ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.isEnabled());},/**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */listenTo:function listenTo(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry_1.registrationNameDependencies[registrationName];for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency==='topWheel'){if(isEventSupported_1('wheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel','wheel',mountAt);}else if(isEventSupported_1('mousewheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel','mousewheel',mountAt);}else{// Firefox needs to capture a different mouse scroll event.
	// @see http://www.quirksmode.org/dom/events/tests/scroll.html
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel','DOMMouseScroll',mountAt);}}else if(dependency==='topScroll'){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topScroll','scroll',mountAt);}else if(dependency==='topFocus'||dependency==='topBlur'){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topFocus','focus',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topBlur','blur',mountAt);// to make sure blur and focus event listeners are only attached once
	isListening.topBlur=true;isListening.topFocus=true;}else if(dependency==='topCancel'){if(isEventSupported_1('cancel',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topCancel','cancel',mountAt);}isListening.topCancel=true;}else if(dependency==='topClose'){if(isEventSupported_1('close',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topClose','close',mountAt);}isListening.topClose=true;}else if(topEventMapping.hasOwnProperty(dependency)){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);}isListening[dependency]=true;}}},isListeningToAllDependencies:function isListeningToAllDependencies(registrationName,mountAt){var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry_1.registrationNameDependencies[registrationName];for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){return false;}}return true;},trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);}});var ReactBrowserEventEmitter_1=ReactBrowserEventEmitter;// Use to restore controlled state after a change event has fired.
	var fiberHostComponent=null;var ReactControlledComponentInjection={injectFiberControlledHostComponent:function injectFiberControlledHostComponent(hostComponentImpl){// The fiber implementation doesn't use dynamic dispatch so we need to
	// inject the implementation.
	fiberHostComponent=hostComponentImpl;}};var restoreTarget=null;var restoreQueue=null;function restoreStateOfTarget(target){// We perform this translation at the end of the event loop so that we
	// always receive the correct fiber here
	var internalInstance=EventPluginUtils_1.getInstanceFromNode(target);if(!internalInstance){// Unmounted
	return;}if(typeof internalInstance.tag==='number'){!(fiberHostComponent&&typeof fiberHostComponent.restoreControlledState==='function')?invariant(false,'Fiber needs to be injected to handle a fiber target for controlled events.'):void 0;var props=EventPluginUtils_1.getFiberCurrentPropsFromNode(internalInstance.stateNode);fiberHostComponent.restoreControlledState(internalInstance.stateNode,internalInstance.type,props);return;}!(typeof internalInstance.restoreControlledState==='function')?invariant(false,'The internal instance must be a React host component.'):void 0;// If it is not a Fiber, we can just use dynamic dispatch.
	internalInstance.restoreControlledState();}var ReactControlledComponent={injection:ReactControlledComponentInjection,enqueueStateRestore:function enqueueStateRestore(target){if(restoreTarget){if(restoreQueue){restoreQueue.push(target);}else{restoreQueue=[target];}}else{restoreTarget=target;}},restoreStateIfNeeded:function restoreStateIfNeeded(){if(!restoreTarget){return;}var target=restoreTarget;var queuedTargets=restoreQueue;restoreTarget=null;restoreQueue=null;restoreStateOfTarget(target);if(queuedTargets){for(var i=0;i<queuedTargets.length;i++){restoreStateOfTarget(queuedTargets[i]);}}}};var ReactControlledComponent_1=ReactControlledComponent;function checkMask(value,bitmask){return(value&bitmask)===bitmask;}var DOMPropertyInjection={/**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */MUST_USE_PROPERTY:0x1,HAS_BOOLEAN_VALUE:0x4,HAS_NUMERIC_VALUE:0x8,HAS_POSITIVE_NUMERIC_VALUE:0x10|0x8,HAS_OVERLOADED_BOOLEAN_VALUE:0x20,/**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */injectDOMPropertyConfig:function injectDOMPropertyConfig(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties){!!DOMProperty.properties.hasOwnProperty(propName)?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.',propName):void 0;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s',propName):void 0;{DOMProperty.getPossibleStandardName[lowerCased]=propName;}if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;{DOMProperty.getPossibleStandardName[attributeName]=propName;}}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMPropertyNames.hasOwnProperty(propName)){propertyInfo.propertyName=DOMPropertyNames[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}DOMProperty.properties[propName]=propertyInfo;}}};/* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';/* eslint-enable max-len *//**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid',ROOT_ATTRIBUTE_NAME:'data-reactroot',ATTRIBUTE_NAME_START_CHAR:ATTRIBUTE_NAME_START_CHAR,ATTRIBUTE_NAME_CHAR:ATTRIBUTE_NAME_START_CHAR+'\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',/**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */properties:{},/**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in true.
	   *
	   * autofocus is predefined, because adding it to the property whitelist
	   * causes unintended side effects.
	   *
	   * @type {Object}
	   */getPossibleStandardName:{autofocus:'autoFocus'},/**
	   * All of the isCustomAttribute() functions that have been injected.
	   */_isCustomAttributeFunctions:[],/**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */isCustomAttribute:function isCustomAttribute(attributeName){for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;},injection:DOMPropertyInjection};var DOMProperty_1=DOMProperty;/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponentFlags
	 */var ReactDOMComponentFlags={hasCachedChildNodes:1<<0};var ReactDOMComponentFlags_1=ReactDOMComponentFlags;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTypeOfWork
	 * 
	 */var ReactTypeOfWork={IndeterminateComponent:0,// Before we know whether it is functional or class
	FunctionalComponent:1,ClassComponent:2,HostRoot:3,// Root of a host tree. Could be nested inside another node.
	HostPortal:4,// A subtree. Could be an entry point to a different renderer.
	HostComponent:5,HostText:6,CoroutineComponent:7,CoroutineHandlerPhase:8,YieldComponent:9,Fragment:10};var HostComponent=ReactTypeOfWork.HostComponent;var HostText=ReactTypeOfWork.HostText;var ATTR_NAME=DOMProperty_1.ID_ATTRIBUTE_NAME;var Flags=ReactDOMComponentFlags_1;var randomKey=Math.random().toString(36).slice(2);var internalInstanceKey='__reactInternalInstance$'+randomKey;var internalEventHandlersKey='__reactEventHandlers$'+randomKey;/**
	 * Check if a given node should be cached.
	 */function shouldPrecacheNode(node,nodeID){return node.nodeType===1&&node.getAttribute(ATTR_NAME)===''+nodeID||node.nodeType===8&&node.nodeValue===' react-text: '+nodeID+' '||node.nodeType===8&&node.nodeValue===' react-empty: '+nodeID+' ';}/**
	 * Drill down (through composites and empty components) until we get a host or
	 * host text component.
	 *
	 * This is pretty polymorphic but unavoidable with the current structure we have
	 * for `_renderedChildren`.
	 */function getRenderedHostOrTextFromComponent(component){var rendered;while(rendered=component._renderedComponent){component=rendered;}return component;}/**
	 * Populate `_hostNode` on the rendered host/text component with the given
	 * DOM node. The passed `inst` can be a composite.
	 */function precacheNode(inst,node){var hostInst=getRenderedHostOrTextFromComponent(inst);hostInst._hostNode=node;node[internalInstanceKey]=hostInst;}function precacheFiberNode$1(hostInst,node){node[internalInstanceKey]=hostInst;}function uncacheNode(inst){var node=inst._hostNode;if(node){delete node[internalInstanceKey];inst._hostNode=null;}}/**
	 * Populate `_hostNode` on each child of `inst`, assuming that the children
	 * match up with the DOM (element) children of `node`.
	 *
	 * We cache entire levels at once to avoid an n^2 problem where we access the
	 * children of a node sequentially and have to walk from the start to our target
	 * node every time.
	 *
	 * Since we update `_renderedChildren` and the actual DOM at (slightly)
	 * different times, we could race here and see a newer `_renderedChildren` than
	 * the DOM nodes we see. To avoid this, ReactMultiChild calls
	 * `prepareToManageChildren` before we change `_renderedChildren`, at which
	 * time the container's child nodes are always cached (until it unmounts).
	 */function precacheChildNodes(inst,node){if(inst._flags&Flags.hasCachedChildNodes){return;}var children=inst._renderedChildren;var childNode=node.firstChild;outer:for(var name in children){if(!children.hasOwnProperty(name)){continue;}var childInst=children[name];var childID=getRenderedHostOrTextFromComponent(childInst)._domID;if(childID===0){// We're currently unmounting this child in ReactMultiChild; skip it.
	continue;}// We assume the child nodes are in the same order as the child instances.
	for(;childNode!==null;childNode=childNode.nextSibling){if(shouldPrecacheNode(childNode,childID)){precacheNode(childInst,childNode);continue outer;}}// We reached the end of the DOM children without finding an ID match.
	invariant(false,'Unable to find element with ID %s.',childID);}inst._flags|=Flags.hasCachedChildNodes;}/**
	 * Given a DOM node, return the closest ReactDOMComponent or
	 * ReactDOMTextComponent instance ancestor.
	 */function getClosestInstanceFromNode(node){if(node[internalInstanceKey]){return node[internalInstanceKey];}// Walk up the tree until we find an ancestor whose instance we have cached.
	var parents=[];while(!node[internalInstanceKey]){parents.push(node);if(node.parentNode){node=node.parentNode;}else{// Top of the tree. This node must not be part of a React tree (or is
	// unmounted, potentially).
	return null;}}var closest;var inst=node[internalInstanceKey];if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber, this will always be the deepest root.
	return inst;}for(;node&&(inst=node[internalInstanceKey]);node=parents.pop()){closest=inst;if(parents.length){precacheChildNodes(inst,node);}}return closest;}/**
	 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
	 * instance, or null if the node was not rendered by this React.
	 */function getInstanceFromNode(node){var inst=node[internalInstanceKey];if(inst){if(inst.tag===HostComponent||inst.tag===HostText){return inst;}else if(inst._hostNode===node){return inst;}else{return null;}}inst=getClosestInstanceFromNode(node);if(inst!=null&&inst._hostNode===node){return inst;}else{return null;}}/**
	 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
	 * DOM node.
	 */function getNodeFromInstance(inst){if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber this, is just the state node right now. We assume it will be
	// a host component or host text.
	return inst.stateNode;}// Without this first invariant, passing a non-DOM-component triggers the next
	// invariant for a missing parent, which is super confusing.
	!(inst._hostNode!==undefined)?invariant(false,'getNodeFromInstance: Invalid argument.'):void 0;if(inst._hostNode){return inst._hostNode;}// Walk up the tree until we find an ancestor whose DOM node we have cached.
	var parents=[];while(!inst._hostNode){parents.push(inst);!inst._hostParent?invariant(false,'React DOM tree root should always have a node reference.'):void 0;inst=inst._hostParent;}// Now parents contains each ancestor that does *not* have a cached native
	// node, and `inst` is the deepest ancestor that does.
	for(;parents.length;inst=parents.pop()){precacheChildNodes(inst,inst._hostNode);}return inst._hostNode;}function getFiberCurrentPropsFromNode(node){return node[internalEventHandlersKey]||null;}function updateFiberProps$1(node,props){node[internalEventHandlersKey]=props;}var ReactDOMComponentTree={getClosestInstanceFromNode:getClosestInstanceFromNode,getInstanceFromNode:getInstanceFromNode,getNodeFromInstance:getNodeFromInstance,precacheChildNodes:precacheChildNodes,precacheNode:precacheNode,uncacheNode:uncacheNode,precacheFiberNode:precacheFiberNode$1,getFiberCurrentPropsFromNode:getFiberCurrentPropsFromNode,updateFiberProps:updateFiberProps$1};var ReactDOMComponentTree_1=ReactDOMComponentTree;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFeatureFlags
	 * 
	 */var ReactFeatureFlags={// When true, call console.time() before and .timeEnd() after each top-level
	// render (both initial renders and updates). Useful when looking at prod-mode
	// timeline profiles in Chrome, for example.
	logTopLevelRenders:false,prepareNewChildrenBeforeUnmountInStack:true,disableNewFiberFeatures:false};var ReactFeatureFlags_1=ReactFeatureFlags;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */var ReactDOMFeatureFlags={fiberAsyncScheduling:false,useCreateElement:true,useFiber:true};var ReactDOMFeatureFlags_1=ReactDOMFeatureFlags;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 *//**
	 * CSS properties which accept numbers but are not in units of "px".
	 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
	fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */var prefixes=['Webkit','ms','Moz','O'];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});});/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */var shorthandPropertyExpansions={background:{backgroundAttachment:true,backgroundColor:true,backgroundImage:true,backgroundPositionX:true,backgroundPositionY:true,backgroundRepeat:true},backgroundPosition:{backgroundPositionX:true,backgroundPositionY:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true},outline:{outlineWidth:true,outlineStyle:true,outlineColor:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};var CSSProperty_1=CSSProperty;var isUnitlessNumber$1=CSSProperty_1.isUnitlessNumber;/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */function dangerousStyleValue(name,value,component){// Note that we've removed escapeTextForBrowser() calls here since the
	// whole string will be escaped when the attribute is injected into
	// the markup. If you provide unsafe user data here they can inject
	// arbitrary CSS which may be problematic (I couldn't repro this):
	// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	// This is not an XSS hole but instead a potential CSS injection issue
	// which has lead to a greater discussion about how we're going to
	// trust URLs moving forward. See #2115901
	var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return'';}if(typeof value==='number'&&value!==0&&!(isUnitlessNumber$1.hasOwnProperty(name)&&isUnitlessNumber$1[name])){return value+'px';// Presumes implicit 'px' suffix for unitless numbers
	}return(''+value).trim();}var dangerousStyleValue_1=dangerousStyleValue;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getComponentName
	 */function getComponentName(instanceOrFiber){if(typeof instanceOrFiber.getName==='function'){// Stack reconciler
	var instance=instanceOrFiber;return instance.getName();}if(typeof instanceOrFiber.tag==='number'){// Fiber reconciler
	var fiber=instanceOrFiber;var type=fiber.type;if(typeof type==='string'){return type;}if(typeof type==='function'){return type.displayName||type.name;}}return null;}var getComponentName_1=getComponentName;var IndeterminateComponent=ReactTypeOfWork.IndeterminateComponent;var FunctionalComponent=ReactTypeOfWork.FunctionalComponent;var ClassComponent=ReactTypeOfWork.ClassComponent;var HostComponent$1=ReactTypeOfWork.HostComponent;function describeComponentFrame(name,source,ownerName){return'\n    in '+(name||'Unknown')+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');}function describeFiber(fiber){switch(fiber.tag){case IndeterminateComponent:case FunctionalComponent:case ClassComponent:case HostComponent$1:var owner=fiber._debugOwner;var source=fiber._debugSource;var name=getComponentName_1(fiber);var ownerName=null;if(owner){ownerName=getComponentName_1(owner);}return describeComponentFrame(name,source,ownerName);default:return'';}}// This function can only be called with a work-in-progress fiber and
	// only during begin or complete phase. Do not call it under any other
	// circumstances.
	function getStackAddendumByWorkInProgressFiber$1(workInProgress){var info='';var node=workInProgress;do{info+=describeFiber(node);// Otherwise this return pointer might point to the wrong tree:
	node=node['return'];}while(node);return info;}var ReactFiberComponentTreeHook={getStackAddendumByWorkInProgressFiber:getStackAddendumByWorkInProgressFiber$1,describeComponentFrame:describeComponentFrame};{var getComponentName$1=getComponentName_1;var _require$1=ReactFiberComponentTreeHook,getStackAddendumByWorkInProgressFiber=_require$1.getStackAddendumByWorkInProgressFiber;}function getCurrentFiberOwnerName$2(){{var fiber=ReactDebugCurrentFiber.current;if(fiber===null){return null;}if(fiber._debugOwner!=null){return getComponentName$1(fiber._debugOwner);}}return null;}function getCurrentFiberStackAddendum(){{var fiber=ReactDebugCurrentFiber.current;if(fiber===null){return null;}// Safe because if current fiber exists, we are reconciling,
	// and it is guaranteed to be the work-in-progress version.
	return getStackAddendumByWorkInProgressFiber(fiber);}return null;}var ReactDebugCurrentFiber={current:null,phase:null,getCurrentFiberOwnerName:getCurrentFiberOwnerName$2,getCurrentFiberStackAddendum:getCurrentFiberStackAddendum};var ReactDebugCurrentFiber_1=ReactDebugCurrentFiber;{var _require=ReactDebugCurrentFiber_1,getCurrentFiberOwnerName$1=_require.getCurrentFiberOwnerName;}var processStyleName=memoizeStringOnly(function(styleName){return hyphenateStyleName(styleName);});var hasShorthandPropertyBug=false;if(ExecutionEnvironment.canUseDOM){var tempStyle=document.createElement('div').style;try{// IE8 throws "Invalid argument." if resetting shorthand style properties.
	tempStyle.font='';}catch(e){hasShorthandPropertyBug=true;}}{// 'msTransform' is correct, but the other prefixes should be capitalized
	var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;// style values shouldn't contain a semicolon
	var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnHyphenatedStyleName=function warnHyphenatedStyleName(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;warning(false,'Unsupported style property %s. Did you mean %s?%s',name,camelizeStyleName(name),checkRenderMessage(owner));};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',name,name.charAt(0).toUpperCase()+name.slice(1),checkRenderMessage(owner));};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value,owner){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;warning(false,"Style property values shouldn't contain a semicolon.%s "+'Try "%s: %s" instead.',checkRenderMessage(owner),name,value.replace(badStyleValueWithSemicolonPattern,''));};var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value,owner){if(warnedForNaNValue){return;}warnedForNaNValue=true;warning(false,'`NaN` is an invalid value for the `%s` css style property.%s',name,checkRenderMessage(owner));};var checkRenderMessage=function checkRenderMessage(owner){var ownerName;if(owner!=null){// Stack passes the owner manually all the way to CSSPropertyOperations.
	ownerName=getComponentName_1(owner);}else{// Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
	// It is only enabled in development and tracks host components too.
	ownerName=getCurrentFiberOwnerName$1();// TODO: also report the stack.
	}if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';};/**
	   * @param {string} name
	   * @param {*} value
	   * @param {ReactDOMComponent} component
	   */var warnValidStyle=function warnValidStyle(name,value,component){var owner;if(component){owner=component._currentElement._owner;}if(name.indexOf('-')>-1){warnHyphenatedStyleName(name,owner);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name,owner);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value,owner);}if(typeof value==='number'&&isNaN(value)){warnStyleValueIsNaN(name,value,owner);}};}/**
	 * Operations for dealing with CSS properties.
	 */var CSSPropertyOperations={/**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */createMarkupForStyles:function createMarkupForStyles(styles,component){var serialized='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];{warnValidStyle(styleName,styleValue,component);}if(styleValue!=null){serialized+=processStyleName(styleName)+':';serialized+=dangerousStyleValue_1(styleName,styleValue,component)+';';}}return serialized||null;},/**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */setValueForStyles:function setValueForStyles(node,styles,component){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}{warnValidStyle(styleName,styles[styleName],component);}var styleValue=dangerousStyleValue_1(styleName,styles[styleName],component);if(styleName==='float'){styleName='cssFloat';}if(styleValue){style[styleName]=styleValue;}else{var expansion=hasShorthandPropertyBug&&CSSProperty_1.shorthandPropertyExpansions[styleName];if(expansion){// Shorthand property that IE8 won't like unsetting, so unset each
	// component to placate it
	for(var individualStyleName in expansion){style[individualStyleName]='';}}else{style[styleName]='';}}}}};var CSSPropertyOperations_1=CSSPropertyOperations;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMNamespaces
	 */var DOMNamespaces={html:'http://www.w3.org/1999/xhtml',mathml:'http://www.w3.org/1998/Math/MathML',svg:'http://www.w3.org/2000/svg'};var DOMNamespaces_1=DOMNamespaces;var ReactInvalidSetStateWarningHook={};{var processingChildContext=false;var warnInvalidSetState=function warnInvalidSetState(){warning(!processingChildContext,'setState(...): Cannot call setState() inside getChildContext()');};ReactInvalidSetStateWarningHook={onBeginProcessingChildContext:function onBeginProcessingChildContext(){processingChildContext=true;},onEndProcessingChildContext:function onEndProcessingChildContext(){processingChildContext=false;},onSetState:function onSetState(){warnInvalidSetState();}};}var ReactInvalidSetStateWarningHook_1=ReactInvalidSetStateWarningHook;/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactHostOperationHistoryHook
	 * 
	 */// Trust the developer to only use this with a true check
	var ReactHostOperationHistoryHook=null;{var history=[];ReactHostOperationHistoryHook={onHostOperation:function onHostOperation(operation){history.push(operation);},clearHistory:function clearHistory(){if(ReactHostOperationHistoryHook._preventClearing){// Should only be used for tests.
	return;}history=[];},getHistory:function getHistory(){return history;}};}var ReactHostOperationHistoryHook_1=ReactHostOperationHistoryHook;var ReactInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var ReactComponentTreeHookRollupShim=ReactInternals.ReactComponentTreeHook;// Trust the developer to only use this with a true check
	var ReactDebugTool$1=null;{var hooks=[];var didHookThrowForEvent={};var callHook=function callHook(event,fn,context,arg1,arg2,arg3,arg4,arg5){try{fn.call(context,arg1,arg2,arg3,arg4,arg5);}catch(e){warning(didHookThrowForEvent[event],'Exception thrown by hook while handling %s: %s',event,e+'\n'+e.stack);didHookThrowForEvent[event]=true;}};var emitEvent=function emitEvent(event,arg1,arg2,arg3,arg4,arg5){for(var i=0;i<hooks.length;i++){var hook=hooks[i];var fn=hook[event];if(fn){callHook(event,fn,hook,arg1,arg2,arg3,arg4,arg5);}}};var _isProfiling=false;var flushHistory=[];var lifeCycleTimerStack=[];var currentFlushNesting=0;var currentFlushMeasurements=[];var currentFlushStartTime=0;var currentTimerDebugID=null;var currentTimerStartTime=0;var currentTimerNestedFlushDuration=0;var currentTimerType=null;var lifeCycleTimerHasWarned=false;var clearHistory=function clearHistory(){ReactComponentTreeHookRollupShim.purgeUnmountedComponents();ReactHostOperationHistoryHook_1.clearHistory();};var getTreeSnapshot=function getTreeSnapshot(registeredIDs){return registeredIDs.reduce(function(tree,id){var ownerID=ReactComponentTreeHookRollupShim.getOwnerID(id);var parentID=ReactComponentTreeHookRollupShim.getParentID(id);tree[id]={displayName:ReactComponentTreeHookRollupShim.getDisplayName(id),text:ReactComponentTreeHookRollupShim.getText(id),updateCount:ReactComponentTreeHookRollupShim.getUpdateCount(id),childIDs:ReactComponentTreeHookRollupShim.getChildIDs(id),// Text nodes don't have owners but this is close enough.
	ownerID:ownerID||parentID&&ReactComponentTreeHookRollupShim.getOwnerID(parentID)||0,parentID:parentID};return tree;},{});};var resetMeasurements=function resetMeasurements(){var previousStartTime=currentFlushStartTime;var previousMeasurements=currentFlushMeasurements;var previousOperations=ReactHostOperationHistoryHook_1.getHistory();if(currentFlushNesting===0){currentFlushStartTime=0;currentFlushMeasurements=[];clearHistory();return;}if(previousMeasurements.length||previousOperations.length){var registeredIDs=ReactComponentTreeHookRollupShim.getRegisteredIDs();flushHistory.push({duration:performanceNow()-previousStartTime,measurements:previousMeasurements||[],operations:previousOperations||[],treeSnapshot:getTreeSnapshot(registeredIDs)});}clearHistory();currentFlushStartTime=performanceNow();currentFlushMeasurements=[];};var checkDebugID=function checkDebugID(debugID){var allowRoot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(allowRoot&&debugID===0){return;}if(!debugID){warning(false,'ReactDebugTool: debugID may not be empty.');}};var beginLifeCycleTimer=function beginLifeCycleTimer(debugID,timerType){if(currentFlushNesting===0){return;}if(currentTimerType&&!lifeCycleTimerHasWarned){warning(false,'There is an internal error in the React performance measurement code.'+'\n\nDid not expect %s timer to start while %s timer is still in '+'progress for %s instance.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another');lifeCycleTimerHasWarned=true;}currentTimerStartTime=performanceNow();currentTimerNestedFlushDuration=0;currentTimerDebugID=debugID;currentTimerType=timerType;};var endLifeCycleTimer=function endLifeCycleTimer(debugID,timerType){if(currentFlushNesting===0){return;}if(currentTimerType!==timerType&&!lifeCycleTimerHasWarned){warning(false,'There is an internal error in the React performance measurement code. '+'We did not expect %s timer to stop while %s timer is still in '+'progress for %s instance. Please report this as a bug in React.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another');lifeCycleTimerHasWarned=true;}if(_isProfiling){currentFlushMeasurements.push({timerType:timerType,instanceID:debugID,duration:performanceNow()-currentTimerStartTime-currentTimerNestedFlushDuration});}currentTimerStartTime=0;currentTimerNestedFlushDuration=0;currentTimerDebugID=null;currentTimerType=null;};var pauseCurrentLifeCycleTimer=function pauseCurrentLifeCycleTimer(){var currentTimer={startTime:currentTimerStartTime,nestedFlushStartTime:performanceNow(),debugID:currentTimerDebugID,timerType:currentTimerType};lifeCycleTimerStack.push(currentTimer);currentTimerStartTime=0;currentTimerNestedFlushDuration=0;currentTimerDebugID=null;currentTimerType=null;};var resumeCurrentLifeCycleTimer=function resumeCurrentLifeCycleTimer(){var _lifeCycleTimerStack$=lifeCycleTimerStack.pop(),startTime=_lifeCycleTimerStack$.startTime,nestedFlushStartTime=_lifeCycleTimerStack$.nestedFlushStartTime,debugID=_lifeCycleTimerStack$.debugID,timerType=_lifeCycleTimerStack$.timerType;var nestedFlushDuration=performanceNow()-nestedFlushStartTime;currentTimerStartTime=startTime;currentTimerNestedFlushDuration+=nestedFlushDuration;currentTimerDebugID=debugID;currentTimerType=timerType;};var lastMarkTimeStamp=0;var canUsePerformanceMeasure=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';var shouldMark=function shouldMark(debugID){if(!_isProfiling||!canUsePerformanceMeasure){return false;}var element=ReactComponentTreeHookRollupShim.getElement(debugID);if(element==null||(typeof element==='undefined'?'undefined':_typeof(element))!=='object'){return false;}var isHostElement=typeof element.type==='string';if(isHostElement){return false;}return true;};var markBegin=function markBegin(debugID,markType){if(!shouldMark(debugID)){return;}var markName=debugID+'::'+markType;lastMarkTimeStamp=performanceNow();performance.mark(markName);};var markEnd=function markEnd(debugID,markType){if(!shouldMark(debugID)){return;}var markName=debugID+'::'+markType;var displayName=ReactComponentTreeHookRollupShim.getDisplayName(debugID)||'Unknown';// Chrome has an issue of dropping markers recorded too fast:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=640652
	// To work around this, we will not report very small measurements.
	// I determined the magic number by tweaking it back and forth.
	// 0.05ms was enough to prevent the issue, but I set it to 0.1ms to be safe.
	// When the bug is fixed, we can `measure()` unconditionally if we want to.
	var timeStamp=performanceNow();if(timeStamp-lastMarkTimeStamp>0.1){var measurementName=displayName+' ['+markType+']';performance.measure(measurementName,markName);}performance.clearMarks(markName);performance.clearMeasures(measurementName);};ReactDebugTool$1={addHook:function addHook(hook){hooks.push(hook);},removeHook:function removeHook(hook){for(var i=0;i<hooks.length;i++){if(hooks[i]===hook){hooks.splice(i,1);i--;}}},isProfiling:function isProfiling(){return _isProfiling;},beginProfiling:function beginProfiling(){if(_isProfiling){return;}_isProfiling=true;flushHistory.length=0;resetMeasurements();ReactDebugTool$1.addHook(ReactHostOperationHistoryHook_1);},endProfiling:function endProfiling(){if(!_isProfiling){return;}_isProfiling=false;resetMeasurements();ReactDebugTool$1.removeHook(ReactHostOperationHistoryHook_1);},getFlushHistory:function getFlushHistory(){return flushHistory;},onBeginFlush:function onBeginFlush(){currentFlushNesting++;resetMeasurements();pauseCurrentLifeCycleTimer();emitEvent('onBeginFlush');},onEndFlush:function onEndFlush(){resetMeasurements();currentFlushNesting--;resumeCurrentLifeCycleTimer();emitEvent('onEndFlush');},onBeginLifeCycleTimer:function onBeginLifeCycleTimer(debugID,timerType){checkDebugID(debugID);emitEvent('onBeginLifeCycleTimer',debugID,timerType);markBegin(debugID,timerType);beginLifeCycleTimer(debugID,timerType);},onEndLifeCycleTimer:function onEndLifeCycleTimer(debugID,timerType){checkDebugID(debugID);endLifeCycleTimer(debugID,timerType);markEnd(debugID,timerType);emitEvent('onEndLifeCycleTimer',debugID,timerType);},onBeginProcessingChildContext:function onBeginProcessingChildContext(){emitEvent('onBeginProcessingChildContext');},onEndProcessingChildContext:function onEndProcessingChildContext(){emitEvent('onEndProcessingChildContext');},onHostOperation:function onHostOperation(operation){checkDebugID(operation.instanceID);emitEvent('onHostOperation',operation);},onSetState:function onSetState(){emitEvent('onSetState');},onSetChildren:function onSetChildren(debugID,childDebugIDs){checkDebugID(debugID);childDebugIDs.forEach(checkDebugID);emitEvent('onSetChildren',debugID,childDebugIDs);},onBeforeMountComponent:function onBeforeMountComponent(debugID,element,parentDebugID){checkDebugID(debugID);checkDebugID(parentDebugID,true);emitEvent('onBeforeMountComponent',debugID,element,parentDebugID);markBegin(debugID,'mount');},onMountComponent:function onMountComponent(debugID){checkDebugID(debugID);markEnd(debugID,'mount');emitEvent('onMountComponent',debugID);},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){checkDebugID(debugID);emitEvent('onBeforeUpdateComponent',debugID,element);markBegin(debugID,'update');},onUpdateComponent:function onUpdateComponent(debugID){checkDebugID(debugID);markEnd(debugID,'update');emitEvent('onUpdateComponent',debugID);},onBeforeUnmountComponent:function onBeforeUnmountComponent(debugID){checkDebugID(debugID);emitEvent('onBeforeUnmountComponent',debugID);markBegin(debugID,'unmount');},onUnmountComponent:function onUnmountComponent(debugID){checkDebugID(debugID);markEnd(debugID,'unmount');emitEvent('onUnmountComponent',debugID);},onTestEvent:function onTestEvent(){emitEvent('onTestEvent');}};ReactDebugTool$1.addHook(ReactInvalidSetStateWarningHook_1);ReactDebugTool$1.addHook(ReactComponentTreeHookRollupShim);var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';if(/[?&]react_perf\b/.test(url)){ReactDebugTool$1.beginProfiling();}}var ReactDebugTool_1=ReactDebugTool$1;// Trust the developer to only use ReactInstrumentation with a true check
	var debugTool=null;{var ReactDebugTool=ReactDebugTool_1;debugTool=ReactDebugTool;}var ReactInstrumentation={debugTool:debugTool};/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Based on the escape-html library, which is used under the MIT License below:
	 *
	 * Copyright (c) 2012-2013 TJ Holowaychuk
	 * Copyright (c) 2015 Andreas Lubbe
	 * Copyright (c) 2015 Tiancheng "Timothy" Gu
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * 'Software'), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */// code copied and modified from escape-html
	/**
	 * Module variables.
	 * @private
	 */var matchHtmlRegExp=/["'&<>]/;/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */function escapeHtml(string){var str=''+string;var match=matchHtmlRegExp.exec(str);if(!match){return str;}var escape;var html='';var index=0;var lastIndex=0;for(index=match.index;index<str.length;index++){switch(str.charCodeAt(index)){case 34:// "
	escape='&quot;';break;case 38:// &
	escape='&amp;';break;case 39:// '
	escape='&#x27;';// modified from escape-html; used to be '&#39'
	break;case 60:// <
	escape='&lt;';break;case 62:// >
	escape='&gt;';break;default:continue;}if(lastIndex!==index){html+=str.substring(lastIndex,index);}lastIndex=index+1;html+=escape;}return lastIndex!==index?html+str.substring(lastIndex,index):html;}// end code copied and modified from escape-html
	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */function escapeTextContentForBrowser(text){if(typeof text==='boolean'||typeof text==='number'){// this shortcircuit helps perf for types that we know will never have
	// special characters, especially given that this function is used often
	// for numeric dom ids.
	return''+text;}return escapeHtml(text);}var escapeTextContentForBrowser_1=escapeTextContentForBrowser;/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */function quoteAttributeValueForBrowser(value){return'"'+escapeTextContentForBrowser_1(value)+'"';}var quoteAttributeValueForBrowser_1=quoteAttributeValueForBrowser;var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+DOMProperty_1.ATTRIBUTE_NAME_START_CHAR+']['+DOMProperty_1.ATTRIBUTE_NAME_CHAR+']*$');var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;warning(false,'Invalid attribute name: `%s`',attributeName);return false;}function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;}/**
	 * Operations for dealing with DOM properties.
	 */var DOMPropertyOperations={/**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */createMarkupForID:function createMarkupForID(id){return DOMProperty_1.ID_ATTRIBUTE_NAME+'='+quoteAttributeValueForBrowser_1(id);},setAttributeForID:function setAttributeForID(node,id){node.setAttribute(DOMProperty_1.ID_ATTRIBUTE_NAME,id);},createMarkupForRoot:function createMarkupForRoot(){return DOMProperty_1.ROOT_ATTRIBUTE_NAME+'=""';},setAttributeForRoot:function setAttributeForRoot(node){node.setAttribute(DOMProperty_1.ROOT_ATTRIBUTE_NAME,'');},/**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */createMarkupForProperty:function createMarkupForProperty(name,value){var propertyInfo=DOMProperty_1.properties.hasOwnProperty(name)?DOMProperty_1.properties[name]:null;if(propertyInfo){if(shouldIgnoreValue(propertyInfo,value)){return'';}var attributeName=propertyInfo.attributeName;if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){return attributeName+'=""';}return attributeName+'='+quoteAttributeValueForBrowser_1(value);}else if(DOMProperty_1.isCustomAttribute(name)){if(value==null){return'';}return name+'='+quoteAttributeValueForBrowser_1(value);}return null;},/**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */createMarkupForCustomAttribute:function createMarkupForCustomAttribute(name,value){if(!isAttributeNameSafe(name)||value==null){return'';}return name+'='+quoteAttributeValueForBrowser_1(value);},/**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */setValueForProperty:function setValueForProperty(node,name,value){var propertyInfo=DOMProperty_1.properties.hasOwnProperty(name)?DOMProperty_1.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){DOMPropertyOperations.deleteValueForProperty(node,name);return;}else if(propertyInfo.mustUseProperty){// Contrary to `setAttribute`, object properties are properly
	// `toString`ed by IE8/9.
	node[propertyInfo.propertyName]=value;}else{var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace;// `setAttribute` with objects becomes only `[object]` in IE8/9,
	// ('' + value) makes it output the correct toString()-value.
	if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else{node.setAttribute(attributeName,''+value);}}}else if(DOMProperty_1.isCustomAttribute(name)){DOMPropertyOperations.setValueForAttribute(node,name,value);return;}{var payload={};payload[name]=value;ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'update attribute',payload:payload});}},setValueForAttribute:function setValueForAttribute(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else{node.setAttribute(name,''+value);}{var payload={};payload[name]=value;ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'update attribute',payload:payload});}},/**
	   * Deletes an attributes from a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */deleteValueForAttribute:function deleteValueForAttribute(node,name){node.removeAttribute(name);{ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'remove attribute',payload:name});}},/**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */deleteValueForProperty:function deleteValueForProperty(node,name){var propertyInfo=DOMProperty_1.properties.hasOwnProperty(name)?DOMProperty_1.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseProperty){var propName=propertyInfo.propertyName;if(propertyInfo.hasBooleanValue){node[propName]=false;}else{node[propName]='';}}else{node.removeAttribute(propertyInfo.attributeName);}}else if(DOMProperty_1.isCustomAttribute(name)){node.removeAttribute(name);}{ReactInstrumentation.debugTool.onHostOperation({instanceID:ReactDOMComponentTree_1.getInstanceFromNode(node)._debugID,type:'remove attribute',payload:name});}}};var DOMPropertyOperations_1=DOMPropertyOperations;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule ReactPropTypesSecret
	 */var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';var ReactPropTypesSecret_1=ReactPropTypesSecret;var hasReadOnlyValue={button:true,checkbox:true,image:true,hidden:true,radio:true,reset:true,submit:true};var propTypes={value:function value(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function checked(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');},onChange:React.PropTypes.func};var loggedTypeFailures={};function getDeclarationErrorAddendum$1(ownerName){if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';}/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */var ReactControlledValuePropTypes={checkPropTypes:function checkPropTypes(tagName,props,ownerName){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error=propTypes[propName](props,propName,tagName,'prop',null,ReactPropTypesSecret_1);}if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
	// same error.
	loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum$1(ownerName);warning(false,'Failed form propType: %s%s',error.message,addendum);}}}};var ReactControlledValuePropTypes_1=ReactControlledValuePropTypes;var getCurrentFiberOwnerName$3=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function isControlled(props){var usesChecked=props.type==='checkbox'||props.type==='radio';return usesChecked?props.checked!=null:props.value!=null;}/**
	 * Implements an <input> host component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */var ReactDOMInput={getHostProps:function getHostProps(element,props){var node=element;var value=props.value;var checked=props.checked;var hostProps=_assign({// Make sure we set .type before any other properties (setting .value
	// before .type means .value is lost in IE11 and below)
	type:undefined,// Make sure we set .step before .value (setting .value before .step
	// means .value is rounded on mount, based upon step precision)
	step:undefined,// Make sure we set .min & .max before .value (to ensure proper order
	// in corner cases such as min or max deriving from value, e.g. Issue #7170)
	min:undefined,max:undefined},props,{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:node._wrapperState.initialValue,checked:checked!=null?checked:node._wrapperState.initialChecked});return hostProps;},mountWrapper:function mountWrapper(element,props){{ReactControlledValuePropTypes_1.checkPropTypes('input',props,getCurrentFiberOwnerName$3());if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){warning(false,'%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',getCurrentFiberOwnerName$3()||'A component',props.type);didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){warning(false,'%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',getCurrentFiberOwnerName$3()||'A component',props.type);didWarnValueDefaultValue=true;}}var defaultValue=props.defaultValue;var node=element;node._wrapperState={initialChecked:props.checked!=null?props.checked:props.defaultChecked,initialValue:props.value!=null?props.value:defaultValue,controlled:isControlled(props)};},updateWrapper:function updateWrapper(element,props){var node=element;{var controlled=isControlled(props);if(!node._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){warning(false,'%s is changing an uncontrolled input of type %s to be controlled. '+'Input elements should not switch from uncontrolled to controlled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',getCurrentFiberOwnerName$3()||'A component',props.type);didWarnUncontrolledToControlled=true;}if(node._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){warning(false,'%s is changing a controlled input of type %s to be uncontrolled. '+'Input elements should not switch from controlled to uncontrolled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',getCurrentFiberOwnerName$3()||'A component',props.type);didWarnControlledToUncontrolled=true;}}var checked=props.checked;if(checked!=null){DOMPropertyOperations_1.setValueForProperty(node,'checked',checked||false);}var value=props.value;if(value!=null){if(value===0&&node.value===''){node.value='0';// Note: IE9 reports a number inputs as 'text', so check props instead.
	}else if(props.type==='number'){// Simulate `input.valueAsNumber`. IE9 does not support it
	var valueAsNumber=parseFloat(node.value,10)||0;// eslint-disable-next-line
	if(value!=valueAsNumber){// Cast `value` to a string to ensure the value is set correctly. While
	// browsers typically do this as necessary, jsdom doesn't.
	node.value=''+value;}// eslint-disable-next-line
	}else if(value!=node.value){// Cast `value` to a string to ensure the value is set correctly. While
	// browsers typically do this as necessary, jsdom doesn't.
	node.value=''+value;}}else{if(props.value==null&&props.defaultValue!=null){// In Chrome, assigning defaultValue to certain input types triggers input validation.
	// For number inputs, the display value loses trailing decimal points. For email inputs,
	// Chrome raises "The specified value <x> is not a valid email address".
	//
	// Here we check to see if the defaultValue has actually changed, avoiding these problems
	// when the user is inputting text
	//
	// https://github.com/facebook/react/issues/7253
	if(node.defaultValue!==''+props.defaultValue){node.defaultValue=''+props.defaultValue;}}if(props.checked==null&&props.defaultChecked!=null){node.defaultChecked=!!props.defaultChecked;}}},postMountWrapper:function postMountWrapper(element,props){var node=element;// Detach value from defaultValue. We won't do anything if we're working on
	// submit or reset inputs as those values & defaultValues are linked. They
	// are not resetable nodes so this operation doesn't matter and actually
	// removes browser-default values (eg "Submit Query") when no value is
	// provided.
	switch(props.type){case'submit':case'reset':break;case'color':case'date':case'datetime':case'datetime-local':case'month':case'time':case'week':// This fixes the no-show issue on iOS Safari and Android Chrome:
	// https://github.com/facebook/react/issues/7233
	node.value='';node.value=node.defaultValue;break;default:node.value=node.value;break;}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
	// this is needed to work around a chrome bug where setting defaultChecked
	// will sometimes influence the value of checked (even after detachment).
	// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
	// We need to temporarily unset name to avoid disrupting radio button groups.
	var name=node.name;if(name!==''){node.name='';}node.defaultChecked=!node.defaultChecked;node.defaultChecked=!node.defaultChecked;if(name!==''){node.name=name;}},restoreControlledState:function restoreControlledState(element,props){var node=element;ReactDOMInput.updateWrapper(node,props);updateNamedCousins(node,props);}};function updateNamedCousins(rootNode,props){var name=props.name;if(props.type==='radio'&&name!=null){var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;}// If `rootNode.form` was non-null, then we could try `form.elements`,
	// but that sometimes behaves strangely in IE8. We could also try using
	// `form.getElementsByName`, but that will only return direct children
	// and won't include inputs that use the HTML5 `form=` attribute. Since
	// the input might not even be in a form. It might not even be in the
	// document. Let's just use the local `querySelectorAll` to ensure we don't
	// miss anything.
	var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;}// This will throw if radio buttons rendered by different copies of React
	// and the same name are rendered into the same form (same as #1939).
	// That's probably okay; we don't support it just as we don't support
	// mixing React radio buttons with non-React ones.
	var otherProps=ReactDOMComponentTree_1.getFiberCurrentPropsFromNode(otherNode);!otherProps?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'):void 0;// If this is a controlled radio button group, forcing the input that
	// was previously checked to update will cause it to be come re-checked
	// as appropriate.
	ReactDOMInput.updateWrapper(otherNode,otherProps);}}}var ReactDOMFiberInput=ReactDOMInput;function flattenChildren(children){var content='';// Flatten children and warn if they aren't strings or numbers;
	// invalid types are ignored.
	// We can silently skip them because invalid DOM nesting warning
	// catches these cases in Fiber.
	React.Children.forEach(children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}});return content;}/**
	 * Implements an <option> host component that warns when `selected` is set.
	 */var ReactDOMOption={mountWrapper:function mountWrapper(element,props){// TODO (yungsters): Remove support for `selected` in <option>.
	{warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.');}},postMountWrapper:function postMountWrapper(element,props){// value="" should make a value attribute (#6219)
	if(props.value!=null){element.setAttribute('value',props.value);}},getHostProps:function getHostProps(element,props){var hostProps=_assign({children:undefined},props);var content=flattenChildren(props.children);if(content){hostProps.children=content;}return hostProps;}};var ReactDOMFiberOption=ReactDOMOption;var getCurrentFiberOwnerName$4=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;var didWarnValueDefaultValue$1=false;function getDeclarationErrorAddendum$2(){var ownerName=getCurrentFiberOwnerName$4();if(ownerName){return'\n\nCheck the render method of `'+ownerName+'`.';}return'';}var valuePropNames=['value','defaultValue'];/**
	 * Validation function for `value` and `defaultValue`.
	 */function checkSelectPropTypes(props){ReactControlledValuePropTypes_1.checkPropTypes('select',props,getCurrentFiberOwnerName$4());for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}var isArray=Array.isArray(props[propName]);if(props.multiple&&!isArray){warning(false,'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum$2());}else if(!props.multiple&&isArray){warning(false,'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum$2());}}}function updateOptions(node,multiple,propValue){var options=node.options;if(multiple){var selectedValues=propValue;var selectedValue={};for(var i=0;i<selectedValues.length;i++){selectedValue[''+selectedValues[i]]=true;}for(var _i=0;_i<options.length;_i++){var selected=selectedValue.hasOwnProperty(options[_i].value);if(options[_i].selected!==selected){options[_i].selected=selected;}}}else{// Do not set `select.value` as exact behavior isn't consistent across all
	// browsers for all cases.
	var _selectedValue=''+propValue;for(var _i2=0;_i2<options.length;_i2++){if(options[_i2].value===_selectedValue){options[_i2].selected=true;return;}}if(options.length){options[0].selected=true;}}}/**
	 * Implements a <select> host component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */var ReactDOMSelect={getHostProps:function getHostProps(element,props){return _assign({},props,{value:undefined});},mountWrapper:function mountWrapper(element,props){var node=element;{checkSelectPropTypes(props);}var value=props.value;node._wrapperState={initialValue:value!=null?value:props.defaultValue,wasMultiple:!!props.multiple};if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue$1){warning(false,'Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components');didWarnValueDefaultValue$1=true;}node.multiple=!!props.multiple;if(value!=null){updateOptions(node,!!props.multiple,value);}else if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue);}},postUpdateWrapper:function postUpdateWrapper(element,props){var node=element;// After the initial mount, we control selected-ness manually so don't pass
	// this value down
	node._wrapperState.initialValue=undefined;var wasMultiple=node._wrapperState.wasMultiple;node._wrapperState.wasMultiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value);}else if(wasMultiple!==!!props.multiple){// For simplicity, reapply `defaultValue` if `multiple` is toggled.
	if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue);}else{// Revert the select back to its default unselected state.
	updateOptions(node,!!props.multiple,props.multiple?[]:'');}}},restoreControlledState:function restoreControlledState(element,props){var node=element;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value);}}};var ReactDOMFiberSelect=ReactDOMSelect;var getCurrentFiberOwnerName$5=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;var didWarnValDefaultVal=false;/**
	 * Implements a <textarea> host component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */var ReactDOMTextarea={getHostProps:function getHostProps(element,props){var node=element;!(props.dangerouslySetInnerHTML==null)?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):void 0;// Always set children to the same thing. In IE9, the selection range will
	// get reset if `textContent` is mutated.  We could add a check in setTextContent
	// to only set the value if/when the value differs from the node value (which would
	// completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
	// The value can be a boolean or object so that's why it's forced to be a string.
	var hostProps=_assign({},props,{value:undefined,defaultValue:undefined,children:''+node._wrapperState.initialValue});return hostProps;},mountWrapper:function mountWrapper(element,props){var node=element;{ReactControlledValuePropTypes_1.checkPropTypes('textarea',props,getCurrentFiberOwnerName$5());if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){warning(false,'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://fb.me/react-controlled-components');didWarnValDefaultVal=true;}}var value=props.value;var initialValue=value;// Only bother fetching default value if we're going to use it
	if(value==null){var defaultValue=props.defaultValue;// TODO (yungsters): Remove support for children content in <textarea>.
	var children=props.children;if(children!=null){{warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.');}!(defaultValue==null)?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):void 0;if(Array.isArray(children)){!(children.length<=1)?invariant(false,'<textarea> can only have at most one child.'):void 0;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}initialValue=defaultValue;}node._wrapperState={initialValue:''+initialValue};},updateWrapper:function updateWrapper(element,props){var node=element;var value=props.value;if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
	// browsers typically do this as necessary, jsdom doesn't.
	var newValue=''+value;// To avoid side effects (such as losing text selection), only set value if changed
	if(newValue!==node.value){node.value=newValue;}if(props.defaultValue==null){node.defaultValue=newValue;}}if(props.defaultValue!=null){node.defaultValue=props.defaultValue;}},postMountWrapper:function postMountWrapper(element,props){var node=element;// This is in postMount because we need access to the DOM node, which is not
	// available until after the component has mounted.
	var textContent=node.textContent;// Only set node.value if textContent is equal to the expected
	// initial value. In IE10/IE11 there is a bug where the placeholder attribute
	// will populate textContent as well.
	// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
	if(textContent===node._wrapperState.initialValue){node.value=textContent;}},restoreControlledState:function restoreControlledState(element,props){// DOM component is still mounted; update
	ReactDOMTextarea.updateWrapper(element,props);}};var ReactDOMFiberTextarea=ReactDOMTextarea;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createMicrosoftUnsafeLocalFunction
	 *//* globals MSApp *//**
	 * Create a function which has 'unsafe' privileges (required by windows8 apps)
	 */var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else{return func;}};var createMicrosoftUnsafeLocalFunction_1=createMicrosoftUnsafeLocalFunction;// SVG temp container for IE lacking innerHTML
	var reusableSVGContainer;/**
	 * Set the innerHTML property of a node
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */var setInnerHTML=createMicrosoftUnsafeLocalFunction_1(function(node,html){// IE does not have innerHTML for SVG nodes, so instead we inject the
	// new markup in a temp node and then move the child nodes across into
	// the target node
	if(node.namespaceURI===DOMNamespaces_1.svg&&!('innerHTML'in node)){reusableSVGContainer=reusableSVGContainer||document.createElement('div');reusableSVGContainer.innerHTML='<svg>'+html+'</svg>';var svgNode=reusableSVGContainer.firstChild;while(svgNode.firstChild){node.appendChild(svgNode.firstChild);}}else{node.innerHTML=html;}});var setInnerHTML_1=setInnerHTML;/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */var setTextContent=function setTextContent(node,text){if(text){var firstChild=node.firstChild;if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===3){firstChild.nodeValue=text;return;}}node.textContent=text;};if(ExecutionEnvironment.canUseDOM){if(!('textContent'in document.documentElement)){setTextContent=function setTextContent(node,text){if(node.nodeType===3){node.nodeValue=text;return;}setInnerHTML_1(node,escapeTextContentForBrowser_1(text));};}}var setTextContent_1=setTextContent;function isCheckable(elem){var type=elem.type;var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(type==='checkbox'||type==='radio');}function getTracker(inst){if(typeof inst.tag==='number'){inst=inst.stateNode;}return inst._wrapperState.valueTracker;}function attachTracker(inst,tracker){inst._wrapperState.valueTracker=tracker;}function detachTracker(inst){delete inst._wrapperState.valueTracker;}function getValueFromNode(node){var value;if(node){value=isCheckable(node)?''+node.checked:node.value;}return value;}function trackValueOnNode(node,inst){var valueField=isCheckable(node)?'checked':'value';var descriptor=Object.getOwnPropertyDescriptor(node.constructor.prototype,valueField);var currentValue=''+node[valueField];// if someone has already defined a value or Safari, then bail
	// and don't track value will cause over reporting of changes,
	// but it's better then a hard failure
	// (needed for certain tests that spyOn input values and Safari)
	if(node.hasOwnProperty(valueField)||typeof descriptor.get!=='function'||typeof descriptor.set!=='function'){return;}Object.defineProperty(node,valueField,{enumerable:descriptor.enumerable,configurable:true,get:function get(){return descriptor.get.call(this);},set:function set(value){currentValue=''+value;descriptor.set.call(this,value);}});var tracker={getValue:function getValue(){return currentValue;},setValue:function setValue(value){currentValue=''+value;},stopTracking:function stopTracking(){detachTracker(inst);delete node[valueField];}};return tracker;}var inputValueTracking={// exposed for testing
	_getTrackerFromNode:function _getTrackerFromNode(node){return getTracker(ReactDOMComponentTree_1.getInstanceFromNode(node));},trackNode:function trackNode(node){if(node._wrapperState.valueTracker){return;}node._wrapperState.valueTracker=trackValueOnNode(node,node);},track:function track(inst){if(getTracker(inst)){return;}var node=ReactDOMComponentTree_1.getNodeFromInstance(inst);attachTracker(inst,trackValueOnNode(node,inst));},updateValueIfChanged:function updateValueIfChanged(inst){if(!inst){return false;}var tracker=getTracker(inst);if(!tracker){if(typeof inst.tag==='number'){inputValueTracking.trackNode(inst.stateNode);}else{inputValueTracking.track(inst);}return true;}var lastValue=tracker.getValue();var nextValue=getValueFromNode(ReactDOMComponentTree_1.getNodeFromInstance(inst));if(nextValue!==lastValue){tracker.setValue(nextValue);return true;}return false;},stopTracking:function stopTracking(inst){var tracker=getTracker(inst);if(tracker){tracker.stopTracking();}}};var inputValueTracking_1=inputValueTracking;var warnedProperties={};var rARIA=new RegExp('^(aria)-['+DOMProperty_1.ATTRIBUTE_NAME_CHAR+']*$');{var _require$2=ReactComponentTreeHookRollupShim,getStackAddendumByID=_require$2.getStackAddendumByID;}function getStackAddendum(debugID){if(debugID!=null){// This can only happen on Stack
	return getStackAddendumByID(debugID);}else{// This can only happen on Fiber
	return ReactDebugCurrentFiber_1.getCurrentFiberStackAddendum();}}function validateProperty(tagName,name,debugID){if(warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){return true;}if(rARIA.test(name)){var lowerCasedName=name.toLowerCase();var standardName=DOMProperty_1.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty_1.getPossibleStandardName[lowerCasedName]:null;// If this is an aria-* attribute, but is not listed in the known DOM
	// DOM properties, then it is an invalid aria-* attribute.
	if(standardName==null){warnedProperties[name]=true;return false;}// aria-* attributes should be lowercase; suggest the lowercase version.
	if(name!==standardName){warning(false,'Unknown ARIA attribute %s. Did you mean %s?%s',name,standardName,getStackAddendum(debugID));warnedProperties[name]=true;return true;}}return true;}function warnInvalidARIAProps(type,props,debugID){var invalidProps=[];for(var key in props){var isValid=validateProperty(type,key,debugID);if(!isValid){invalidProps.push(key);}}var unknownPropString=invalidProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(invalidProps.length===1){warning(false,'Invalid aria prop %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,type,getStackAddendum(debugID));}else if(invalidProps.length>1){warning(false,'Invalid aria props %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,type,getStackAddendum(debugID));}}function validateProperties(type,props,debugID/* Stack only */){if(type.indexOf('-')>=0||props.is){return;}warnInvalidARIAProps(type,props,debugID);}var ReactDOMInvalidARIAHook$1={// Fiber
	validateProperties:validateProperties,// Stack
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element){if('development'!=='production'&&element!=null&&typeof element.type==='string'){validateProperties(element.type,element.props,debugID);}},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){if('development'!=='production'&&element!=null&&typeof element.type==='string'){validateProperties(element.type,element.props,debugID);}}};var ReactDOMInvalidARIAHook_1=ReactDOMInvalidARIAHook$1;{var _require$3=ReactComponentTreeHookRollupShim,getStackAddendumByID$1=_require$3.getStackAddendumByID;}var didWarnValueNull=false;function getStackAddendum$1(debugID){if(debugID!=null){// This can only happen on Stack
	return getStackAddendumByID$1(debugID);}else{// This can only happen on Fiber
	return ReactDebugCurrentFiber_1.getCurrentFiberStackAddendum();}}function validateProperties$1(type,props,debugID/* Stack only */){if(type!=='input'&&type!=='textarea'&&type!=='select'){return;}if(props!=null&&props.value===null&&!didWarnValueNull){warning(false,'`value` prop on `%s` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.%s',type,getStackAddendum$1(debugID));didWarnValueNull=true;}}var ReactDOMNullInputValuePropHook$1={// Fiber
	validateProperties:validateProperties$1,// Stack
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element){if('development'!=='production'&&element!=null&&typeof element.type==='string'){validateProperties$1(element.type,element.props,debugID);}},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){if('development'!=='production'&&element!=null&&typeof element.type==='string'){validateProperties$1(element.type,element.props,debugID);}}};var ReactDOMNullInputValuePropHook_1=ReactDOMNullInputValuePropHook$1;function getStackAddendum$2(debugID){if(debugID!=null){// This can only happen on Stack
	return ReactComponentTreeHookRollupShim.getStackAddendumByID(debugID);}else{// This can only happen on Fiber
	return ReactDebugCurrentFiber_1.getCurrentFiberStackAddendum();}}{var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true,autoFocus:true,defaultValue:true,defaultChecked:true,innerHTML:true,suppressContentEditableWarning:true,onFocusIn:true,onFocusOut:true};var warnedProperties$1={};var validateProperty$1=function validateProperty$1(tagName,name,debugID){if(DOMProperty_1.properties.hasOwnProperty(name)||DOMProperty_1.isCustomAttribute(name)){return true;}if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties$1.hasOwnProperty(name)&&warnedProperties$1[name]){return true;}if(EventPluginRegistry_1.registrationNameModules.hasOwnProperty(name)){return true;}warnedProperties$1[name]=true;var lowerCasedName=name.toLowerCase();// data-* attributes should be lowercase; suggest the lowercase version
	var standardName=DOMProperty_1.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty_1.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty_1.getPossibleStandardName[lowerCasedName]:null;var registrationName=EventPluginRegistry_1.possibleRegistrationNames.hasOwnProperty(lowerCasedName)?EventPluginRegistry_1.possibleRegistrationNames[lowerCasedName]:null;if(standardName!=null){warning(false,'Unknown DOM property %s. Did you mean %s?%s',name,standardName,getStackAddendum$2(debugID));return true;}else if(registrationName!=null){warning(false,'Unknown event handler property %s. Did you mean `%s`?%s',name,registrationName,getStackAddendum$2(debugID));return true;}else{// We were unable to guess which prop the user intended.
	// It is likely that the user was just blindly spreading/forwarding props
	// Components should be careful to only render valid props/attributes.
	// Warning will be invoked in warnUnknownProperties to allow grouping.
	return false;}};}var warnUnknownProperties=function warnUnknownProperties(type,props,debugID){var unknownProps=[];for(var key in props){var isValid=validateProperty$1(type,key,debugID);if(!isValid){unknownProps.push(key);}}var unknownPropString=unknownProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(unknownProps.length===1){warning(false,'Unknown prop %s on <%s> tag. Remove this prop from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,type,getStackAddendum$2(debugID));}else if(unknownProps.length>1){warning(false,'Unknown props %s on <%s> tag. Remove these props from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,type,getStackAddendum$2(debugID));}};function validateProperties$2(type,props,debugID/* Stack only */){if(type.indexOf('-')>=0||props.is){return;}warnUnknownProperties(type,props,debugID);}var ReactDOMUnknownPropertyHook$1={// Fiber
	validateProperties:validateProperties$2,// Stack
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element){if('development'!=='production'&&element!=null&&typeof element.type==='string'){validateProperties$2(element.type,element.props,debugID);}},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){if('development'!=='production'&&element!=null&&typeof element.type==='string'){validateProperties$2(element.type,element.props,debugID);}}};var ReactDOMUnknownPropertyHook_1=ReactDOMUnknownPropertyHook$1;var _extends=_assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var getCurrentFiberOwnerName=ReactDebugCurrentFiber_1.getCurrentFiberOwnerName;{var ReactDOMInvalidARIAHook=ReactDOMInvalidARIAHook_1;var ReactDOMNullInputValuePropHook=ReactDOMNullInputValuePropHook_1;var ReactDOMUnknownPropertyHook=ReactDOMUnknownPropertyHook_1;var validateARIAProperties=ReactDOMInvalidARIAHook.validateProperties;var validateInputPropertes=ReactDOMNullInputValuePropHook.validateProperties;var validateUnknownPropertes=ReactDOMUnknownPropertyHook.validateProperties;}var didWarnShadyDOM=false;var listenTo=ReactBrowserEventEmitter_1.listenTo;var registrationNameModules=EventPluginRegistry_1.registrationNameModules;var DANGEROUSLY_SET_INNER_HTML='dangerouslySetInnerHTML';var SUPPRESS_CONTENT_EDITABLE_WARNING='suppressContentEditableWarning';var CHILDREN='children';var STYLE='style';var HTML='__html';var HTML_NAMESPACE=DOMNamespaces_1.html;var SVG_NAMESPACE=DOMNamespaces_1.svg;var MATH_NAMESPACE=DOMNamespaces_1.mathml;// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
	var DOC_FRAGMENT_TYPE=11;function getDeclarationErrorAddendum(){{var ownerName=getCurrentFiberOwnerName();if(ownerName){// TODO: also report the stack.
	return'\n\nThis DOM node was rendered by `'+ownerName+'`.';}}return'';}function assertValidProps(tag,props){if(!props){return;}// Note the use of `==` which checks for null or undefined.
	if(voidElementTags[tag]){!(props.children==null&&props.dangerouslySetInnerHTML==null)?invariant(false,'%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s',tag,getDeclarationErrorAddendum()):void 0;}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):void 0;!(_typeof(props.dangerouslySetInnerHTML)==='object'&&HTML in props.dangerouslySetInnerHTML)?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'):void 0;}{warning(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.');warning(props.suppressContentEditableWarning||!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.');warning(props.onFocusIn==null&&props.onFocusOut==null,'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.');}!(props.style==null||_typeof(props.style)==='object')?invariant(false,'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s',getDeclarationErrorAddendum()):void 0;}{var validatePropertiesInDevelopment=function validatePropertiesInDevelopment(type,props){validateARIAProperties(type,props);validateInputPropertes(type,props);validateUnknownPropertes(type,props);};}function ensureListeningTo(rootContainerElement,registrationName){var isDocumentFragment=rootContainerElement.nodeType===DOC_FRAGMENT_TYPE;var doc=isDocumentFragment?rootContainerElement:rootContainerElement.ownerDocument;listenTo(registrationName,doc);}// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapClickOnNonInteractiveElement(node){// Mobile Safari does not fire properly bubble click events on
	// non-interactive elements, which means delegated click listeners do not
	// fire. The workaround for this bug involves attaching an empty click
	// listener on the target node.
	// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	// Just set it using the onclick property so that we don't have to manage any
	// bookkeeping for it. Not sure if we need to clear it when the listener is
	// removed.
	// TODO: Only do this for the relevant Safaris maybe?
	node.onclick=emptyFunction;}function trapBubbledEventsLocal(node,tag){// If a component renders to null or if another component fatals and causes
	// the state of the tree to be corrupted, `node` here can be null.
	// TODO: Make sure that we check isMounted before firing any of these events.
	// TODO: Inline these below since we're calling this from an equivalent
	// switch statement.
	switch(tag){case'iframe':case'object':ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad','load',node);break;case'video':case'audio':// Create listener for each media event
	for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){ReactBrowserEventEmitter_1.trapBubbledEvent(event,mediaEvents[event],node);}}break;case'source':ReactBrowserEventEmitter_1.trapBubbledEvent('topError','error',node);break;case'img':case'image':ReactBrowserEventEmitter_1.trapBubbledEvent('topError','error',node);ReactBrowserEventEmitter_1.trapBubbledEvent('topLoad','load',node);break;case'form':ReactBrowserEventEmitter_1.trapBubbledEvent('topReset','reset',node);ReactBrowserEventEmitter_1.trapBubbledEvent('topSubmit','submit',node);break;case'input':case'select':case'textarea':ReactBrowserEventEmitter_1.trapBubbledEvent('topInvalid','invalid',node);break;case'details':ReactBrowserEventEmitter_1.trapBubbledEvent('topToggle','toggle',node);break;}}// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special-case tags.
	var omittedCloseTags={area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true};// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.
	var voidElementTags=_extends({menuitem:true},omittedCloseTags);function isCustomComponent(tagName,props){return tagName.indexOf('-')>=0||props.is!=null;}function setInitialDOMProperties(domElement,rootContainerElement,nextProps,isCustomComponentTag){for(var propKey in nextProps){var nextProp=nextProps[propKey];if(!nextProps.hasOwnProperty(propKey)){continue;}if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
	// mutated. We have already warned for this in the past.
	Object.freeze(nextProp);}}// Relies on `updateStylesByID` not mutating `styleUpdates`.
	// TODO: call ReactInstrumentation.debugTool.onHostOperation in DEV.
	CSSPropertyOperations_1.setValueForStyles(domElement,nextProp);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML]:undefined;if(nextHtml!=null){setInnerHTML_1(domElement,nextHtml);}}else if(propKey===CHILDREN){if(typeof nextProp==='string'){setTextContent_1(domElement,nextProp);}else if(typeof nextProp==='number'){setTextContent_1(domElement,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING){// Noop
	}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){ensureListeningTo(rootContainerElement,propKey);}}else if(isCustomComponentTag){DOMPropertyOperations_1.setValueForAttribute(domElement,propKey,nextProp);}else if(DOMProperty_1.properties[propKey]||DOMProperty_1.isCustomAttribute(propKey)){// If we're updating to null or undefined, we should remove the property
	// from the DOM node instead of inadvertently setting to a string. This
	// brings us in line with the same behavior we have on initial render.
	if(nextProp!=null){DOMPropertyOperations_1.setValueForProperty(domElement,propKey,nextProp);}}}}function updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag){// TODO: Handle wasCustomComponentTag
	for(var i=0;i<updatePayload.length;i+=2){var propKey=updatePayload[i];var propValue=updatePayload[i+1];if(propKey===STYLE){// TODO: call ReactInstrumentation.debugTool.onHostOperation in DEV.
	CSSPropertyOperations_1.setValueForStyles(domElement,propValue);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){setInnerHTML_1(domElement,propValue);}else if(propKey===CHILDREN){setTextContent_1(domElement,propValue);}else if(isCustomComponentTag){if(propValue!=null){DOMPropertyOperations_1.setValueForAttribute(domElement,propKey,propValue);}else{DOMPropertyOperations_1.deleteValueForAttribute(domElement,propKey);}}else if(DOMProperty_1.properties[propKey]||DOMProperty_1.isCustomAttribute(propKey)){// If we're updating to null or undefined, we should remove the property
	// from the DOM node instead of inadvertently setting to a string. This
	// brings us in line with the same behavior we have on initial render.
	if(propValue!=null){DOMPropertyOperations_1.setValueForProperty(domElement,propKey,propValue);}else{DOMPropertyOperations_1.deleteValueForProperty(domElement,propKey);}}}}// Assumes there is no parent namespace.
	function getIntrinsicNamespace(type){switch(type){case'svg':return SVG_NAMESPACE;case'math':return MATH_NAMESPACE;default:return HTML_NAMESPACE;}}var ReactDOMFiberComponent={getChildNamespace:function getChildNamespace(parentNamespace,type){if(parentNamespace==null||parentNamespace===HTML_NAMESPACE){// No (or default) parent namespace: potential entry point.
	return getIntrinsicNamespace(type);}if(parentNamespace===SVG_NAMESPACE&&type==='foreignObject'){// We're leaving SVG.
	return HTML_NAMESPACE;}// By default, pass namespace below.
	return parentNamespace;},createElement:function createElement(type,props,rootContainerElement,parentNamespace){// We create tags in the namespace of their parent container, except HTML
	// tags get no namespace.
	var ownerDocument=rootContainerElement.ownerDocument;var domElement;var namespaceURI=parentNamespace;if(namespaceURI===HTML_NAMESPACE){namespaceURI=getIntrinsicNamespace(type);}if(namespaceURI===HTML_NAMESPACE){{warning(type===type.toLowerCase()||isCustomComponent(type,props),'<%s /> is using uppercase HTML. Always use lowercase HTML tags '+'in React.',type);}if(type==='script'){// Create the script via .innerHTML so its "parser-inserted" flag is
	// set to true and it does not execute
	var div=ownerDocument.createElement('div');div.innerHTML='<script><'+'/script>';// eslint-disable-line
	// This is guaranteed to yield a script element.
	var firstChild=div.firstChild;domElement=div.removeChild(firstChild);}else if(props.is){domElement=ownerDocument.createElement(type,props.is);}else{// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
	// See discussion in https://github.com/facebook/react/pull/6896
	// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
	domElement=ownerDocument.createElement(type);}}else{domElement=ownerDocument.createElementNS(namespaceURI,type);}return domElement;},setInitialProperties:function setInitialProperties(domElement,tag,rawProps,rootContainerElement){var isCustomComponentTag=isCustomComponent(tag,rawProps);{validatePropertiesInDevelopment(tag,rawProps);if(isCustomComponentTag&&!didWarnShadyDOM&&domElement.shadyRoot){warning(false,'%s is using shady DOM. Using shady DOM with React can '+'cause things to break subtly.',getCurrentFiberOwnerName()||'A component');didWarnShadyDOM=true;}}var props;switch(tag){case'audio':case'form':case'iframe':case'img':case'image':case'link':case'object':case'source':case'video':case'details':trapBubbledEventsLocal(domElement,tag);props=rawProps;break;case'input':ReactDOMFiberInput.mountWrapper(domElement,rawProps);props=ReactDOMFiberInput.getHostProps(domElement,rawProps);trapBubbledEventsLocal(domElement,tag);// For controlled components we always need to ensure we're listening
	// to onChange. Even if there is no listener.
	ensureListeningTo(rootContainerElement,'onChange');break;case'option':ReactDOMFiberOption.mountWrapper(domElement,rawProps);props=ReactDOMFiberOption.getHostProps(domElement,rawProps);break;case'select':ReactDOMFiberSelect.mountWrapper(domElement,rawProps);props=ReactDOMFiberSelect.getHostProps(domElement,rawProps);trapBubbledEventsLocal(domElement,tag);// For controlled components we always need to ensure we're listening
	// to onChange. Even if there is no listener.
	ensureListeningTo(rootContainerElement,'onChange');break;case'textarea':ReactDOMFiberTextarea.mountWrapper(domElement,rawProps);props=ReactDOMFiberTextarea.getHostProps(domElement,rawProps);trapBubbledEventsLocal(domElement,tag);// For controlled components we always need to ensure we're listening
	// to onChange. Even if there is no listener.
	ensureListeningTo(rootContainerElement,'onChange');break;default:props=rawProps;}assertValidProps(tag,props);setInitialDOMProperties(domElement,rootContainerElement,props,isCustomComponentTag);switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
	// up necessary since we never stop tracking anymore.
	inputValueTracking_1.trackNode(domElement);ReactDOMFiberInput.postMountWrapper(domElement,rawProps);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
	// up necessary since we never stop tracking anymore.
	inputValueTracking_1.trackNode(domElement);ReactDOMFiberTextarea.postMountWrapper(domElement,rawProps);break;case'option':ReactDOMFiberOption.postMountWrapper(domElement,rawProps);break;default:if(typeof props.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
	trapClickOnNonInteractiveElement(domElement);}break;}},// Calculate the diff between the two objects.
	diffProperties:function diffProperties(domElement,tag,lastRawProps,nextRawProps,rootContainerElement){{validatePropertiesInDevelopment(tag,nextRawProps);}var updatePayload=null;var lastProps;var nextProps;switch(tag){case'input':lastProps=ReactDOMFiberInput.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberInput.getHostProps(domElement,nextRawProps);updatePayload=[];break;case'option':lastProps=ReactDOMFiberOption.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberOption.getHostProps(domElement,nextRawProps);updatePayload=[];break;case'select':lastProps=ReactDOMFiberSelect.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberSelect.getHostProps(domElement,nextRawProps);updatePayload=[];break;case'textarea':lastProps=ReactDOMFiberTextarea.getHostProps(domElement,lastRawProps);nextProps=ReactDOMFiberTextarea.getHostProps(domElement,nextRawProps);updatePayload=[];break;default:lastProps=lastRawProps;nextProps=nextRawProps;if(typeof lastProps.onClick!=='function'&&typeof nextProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
	trapClickOnNonInteractiveElement(domElement);}break;}assertValidProps(tag,nextProps);var propKey;var styleName;var styleUpdates=null;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=lastProps[propKey];for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}}else if(propKey===DANGEROUSLY_SET_INNER_HTML||propKey===CHILDREN){// Noop. This is handled by the clear text mechanism.
	}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING){// Noop
	}else if(registrationNameModules.hasOwnProperty(propKey)){// This is a special case. If any listener updates we need to ensure
	// that the "current" fiber pointer gets updated so we need a commit
	// to update this element.
	if(!updatePayload){updatePayload=[];}}else{// For all other deleted properties we add it to the queue. We use
	// the whitelist in the commit phase instead.
	(updatePayload=updatePayload||[]).push(propKey,null);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
	// mutated. We have already warned for this in the past.
	Object.freeze(nextProp);}}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
	for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}// Update styles that changed since `lastProp`.
	for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]=nextProp[styleName];}}}else{// Relies on `updateStylesByID` not mutating `styleUpdates`.
	if(!styleUpdates){if(!updatePayload){updatePayload=[];}updatePayload.push(propKey,styleUpdates);}styleUpdates=nextProp;}}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML]:undefined;var lastHtml=lastProp?lastProp[HTML]:undefined;if(nextHtml!=null){if(lastHtml!==nextHtml){(updatePayload=updatePayload||[]).push(propKey,''+nextHtml);}}else{// TODO: It might be too late to clear this if we have children
	// inserted already.
	}}else if(propKey===CHILDREN){if(lastProp!==nextProp&&(typeof nextProp==='string'||typeof nextProp==='number')){(updatePayload=updatePayload||[]).push(propKey,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING){// Noop
	}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){// We eagerly listen to this even though we haven't committed yet.
	ensureListeningTo(rootContainerElement,propKey);}if(!updatePayload&&lastProp!==nextProp){// This is a special case. If any listener updates we need to ensure
	// that the "current" props pointer gets updated so we need a commit
	// to update this element.
	updatePayload=[];}}else{// For any other property we always add it to the queue and then we
	// filter it out using the whitelist during the commit.
	(updatePayload=updatePayload||[]).push(propKey,nextProp);}}if(styleUpdates){(updatePayload=updatePayload||[]).push(STYLE,styleUpdates);}return updatePayload;},// Apply the diff.
	updateProperties:function updateProperties(domElement,updatePayload,tag,lastRawProps,nextRawProps){var wasCustomComponentTag=isCustomComponent(tag,lastRawProps);var isCustomComponentTag=isCustomComponent(tag,nextRawProps);// Apply the diff.
	updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag);// TODO: Ensure that an update gets scheduled if any of the special props
	// changed.
	switch(tag){case'input':// Update the wrapper around inputs *after* updating props. This has to
	// happen after `updateDOMProperties`. Otherwise HTML5 input validations
	// raise warnings and prevent the new value from being assigned.
	ReactDOMFiberInput.updateWrapper(domElement,nextRawProps);break;case'textarea':ReactDOMFiberTextarea.updateWrapper(domElement,nextRawProps);break;case'select':// <select> value update needs to occur after <option> children
	// reconciliation
	ReactDOMFiberSelect.postUpdateWrapper(domElement,nextRawProps);break;}},restoreControlledState:function restoreControlledState(domElement,tag,props){switch(tag){case'input':ReactDOMFiberInput.restoreControlledState(domElement,props);return;case'textarea':ReactDOMFiberTextarea.restoreControlledState(domElement,props);return;case'select':ReactDOMFiberSelect.restoreControlledState(domElement,props);return;}}};var ReactDOMFiberComponent_1=ReactDOMFiberComponent;// This a built-in polyfill for requestIdleCallback. It works by scheduling
	// a requestAnimationFrame, store the time for the start of the frame, then
	// schedule a postMessage which gets scheduled after paint. Within the
	// postMessage handler do as much work as possible until time + frame rate.
	// By separating the idle call into a separate event tick we ensure that
	// layout, paint and other browser work is counted against the available time.
	// The frame rate is dynamically adjusted.
	// TODO: There's no way to cancel these, because Fiber doesn't atm.
	var rAF=void 0;var rIC=void 0;if(typeof requestAnimationFrame!=='function'){invariant(false,'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.');}else if(typeof requestIdleCallback!=='function'){// Wrap requestAnimationFrame and polyfill requestIdleCallback.
	var scheduledRAFCallback=null;var scheduledRICCallback=null;var isIdleScheduled=false;var isAnimationFrameScheduled=false;var frameDeadline=0;// We start out assuming that we run at 30fps but then the heuristic tracking
	// will adjust this value to a faster fps if we get more frequent animation
	// frames.
	var previousFrameTime=33;var activeFrameTime=33;var frameDeadlineObject={timeRemaining:(typeof performance==='undefined'?'undefined':_typeof(performance))==='object'&&typeof performance.now==='function'?function(){// We assume that if we have a performance timer that the rAF callback
	// gets a performance timer value. Not sure if this is always true.
	return frameDeadline-performance.now();}:function(){// As a fallback we use Date.now.
	return frameDeadline-Date.now();}};// We use the postMessage trick to defer idle work until after the repaint.
	var messageKey='__reactIdleCallback$'+Math.random().toString(36).slice(2);var idleTick=function idleTick(event){if(event.source!==window||event.data!==messageKey){return;}isIdleScheduled=false;var callback=scheduledRICCallback;scheduledRICCallback=null;if(callback){callback(frameDeadlineObject);}};// Assumes that we have addEventListener in this environment. Might need
	// something better for old IE.
	window.addEventListener('message',idleTick,false);var animationTick=function animationTick(rafTime){isAnimationFrameScheduled=false;var nextFrameTime=rafTime-frameDeadline+activeFrameTime;if(nextFrameTime<activeFrameTime&&previousFrameTime<activeFrameTime){if(nextFrameTime<8){// Defensive coding. We don't support higher frame rates than 120hz.
	// If we get lower than that, it is probably a bug.
	nextFrameTime=8;}// If one frame goes long, then the next one can be short to catch up.
	// If two frames are short in a row, then that's an indication that we
	// actually have a higher frame rate than what we're currently optimizing.
	// We adjust our heuristic dynamically accordingly. For example, if we're
	// running on 120hz display or 90hz VR display.
	// Take the max of the two in case one of them was an anomaly due to
	// missed frame deadlines.
	activeFrameTime=nextFrameTime<previousFrameTime?previousFrameTime:nextFrameTime;}else{previousFrameTime=nextFrameTime;}frameDeadline=rafTime+activeFrameTime;if(!isIdleScheduled){isIdleScheduled=true;window.postMessage(messageKey,'*');}var callback=scheduledRAFCallback;scheduledRAFCallback=null;if(callback){callback(rafTime);}};rAF=function rAF(callback){// This assumes that we only schedule one callback at a time because that's
	// how Fiber uses it.
	scheduledRAFCallback=callback;if(!isAnimationFrameScheduled){// If rIC didn't already schedule one, we need to schedule a frame.
	isAnimationFrameScheduled=true;requestAnimationFrame(animationTick);}return 0;};rIC=function rIC(callback){// This assumes that we only schedule one callback at a time because that's
	// how Fiber uses it.
	scheduledRICCallback=callback;if(!isAnimationFrameScheduled){// If rAF didn't already schedule one, we need to schedule a frame.
	// TODO: If this rAF doesn't materialize because the browser throttles, we
	// might want to still have setTimeout trigger rIC as a backup to ensure
	// that we keep performing work.
	isAnimationFrameScheduled=true;requestAnimationFrame(animationTick);}return 0;};}else{rAF=requestAnimationFrame;rIC=requestIdleCallback;}var rAF_1=rAF;var rIC_1=rIC;var ReactDOMFrameScheduling={rAF:rAF_1,rIC:rIC_1};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ARIADOMPropertyConfig
	 */var ARIADOMPropertyConfig={Properties:{// Global States and Properties
	'aria-current':0,// state
	'aria-details':0,'aria-disabled':0,// state
	'aria-hidden':0,// state
	'aria-invalid':0,// state
	'aria-keyshortcuts':0,'aria-label':0,'aria-roledescription':0,// Widget Attributes
	'aria-autocomplete':0,'aria-checked':0,'aria-expanded':0,'aria-haspopup':0,'aria-level':0,'aria-modal':0,'aria-multiline':0,'aria-multiselectable':0,'aria-orientation':0,'aria-placeholder':0,'aria-pressed':0,'aria-readonly':0,'aria-required':0,'aria-selected':0,'aria-sort':0,'aria-valuemax':0,'aria-valuemin':0,'aria-valuenow':0,'aria-valuetext':0,// Live Region Attributes
	'aria-atomic':0,'aria-busy':0,'aria-live':0,'aria-relevant':0,// Drag-and-Drop Attributes
	'aria-dropeffect':0,'aria-grabbed':0,// Relationship Attributes
	'aria-activedescendant':0,'aria-colcount':0,'aria-colindex':0,'aria-colspan':0,'aria-controls':0,'aria-describedby':0,'aria-errormessage':0,'aria-flowto':0,'aria-labelledby':0,'aria-owns':0,'aria-posinset':0,'aria-rowcount':0,'aria-rowindex':0,'aria-rowspan':0,'aria-setsize':0},DOMAttributeNames:{},DOMPropertyNames:{}};var ARIADOMPropertyConfig_1=ARIADOMPropertyConfig;var HostComponent$2=ReactTypeOfWork.HostComponent;function getParent(inst){if(inst._hostParent!==undefined){return inst._hostParent;}if(typeof inst.tag==='number'){do{inst=inst['return'];// TODO: If this is a HostRoot we might want to bail out.
	// That is depending on if we want nested subtrees (layers) to bubble
	// events to their parent. We could also go through parentNode on the
	// host node but that wouldn't work for React Native and doesn't let us
	// do the portal feature.
	}while(inst&&inst.tag!==HostComponent$2);if(inst){return inst;}}return null;}/**
	 * Return the lowest common ancestor of A and B, or null if they are in
	 * different trees.
	 */function getLowestCommonAncestor(instA,instB){var depthA=0;for(var tempA=instA;tempA;tempA=getParent(tempA)){depthA++;}var depthB=0;for(var tempB=instB;tempB;tempB=getParent(tempB)){depthB++;}// If A is deeper, crawl up.
	while(depthA-depthB>0){instA=getParent(instA);depthA--;}// If B is deeper, crawl up.
	while(depthB-depthA>0){instB=getParent(instB);depthB--;}// Walk in lockstep until we find a match.
	var depth=depthA;while(depth--){if(instA===instB||instA===instB.alternate){return instA;}instA=getParent(instA);instB=getParent(instB);}return null;}/**
	 * Return if A is an ancestor of B.
	 */function isAncestor(instA,instB){while(instB){if(instA===instB||instA===instB.alternate){return true;}instB=getParent(instB);}return false;}/**
	 * Return the parent instance of the passed-in instance.
	 */function getParentInstance(inst){return getParent(inst);}/**
	 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	 */function traverseTwoPhase(inst,fn,arg){var path=[];while(inst){path.push(inst);inst=getParent(inst);}var i;for(i=path.length;i-->0;){fn(path[i],'captured',arg);}for(i=0;i<path.length;i++){fn(path[i],'bubbled',arg);}}/**
	 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	 * should would receive a `mouseEnter` or `mouseLeave` event.
	 *
	 * Does not invoke the callback on the nearest common ancestor because nothing
	 * "entered" or "left" that element.
	 */function traverseEnterLeave(from,to,fn,argFrom,argTo){var common=from&&to?getLowestCommonAncestor(from,to):null;var pathFrom=[];while(from&&from!==common){pathFrom.push(from);from=getParent(from);}var pathTo=[];while(to&&to!==common){pathTo.push(to);to=getParent(to);}var i;for(i=0;i<pathFrom.length;i++){fn(pathFrom[i],'bubbled',argFrom);}for(i=pathTo.length;i-->0;){fn(pathTo[i],'captured',argTo);}}var ReactTreeTraversal={isAncestor:isAncestor,getLowestCommonAncestor:getLowestCommonAncestor,getParentInstance:getParentInstance,traverseTwoPhase:traverseTwoPhase,traverseEnterLeave:traverseEnterLeave};var getListener=EventPluginHub_1.getListener;/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */function listenerAtPhase(inst,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(inst,registrationName);}/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */function accumulateDirectionalDispatches(inst,phase,event){{warning(inst,'Dispatching inst must not be null');}var listener=listenerAtPhase(inst,event,phase);if(listener){event._dispatchListeners=accumulateInto_1(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto_1(event._dispatchInstances,inst);}}/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){ReactTreeTraversal.traverseTwoPhase(event._targetInst,accumulateDirectionalDispatches,event);}}/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){var targetInst=event._targetInst;var parentInst=targetInst?ReactTreeTraversal.getParentInstance(targetInst):null;ReactTreeTraversal.traverseTwoPhase(parentInst,accumulateDirectionalDispatches,event);}}/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */function accumulateDispatches(inst,ignoredDirection,event){if(inst&&event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(inst,registrationName);if(listener){event._dispatchListeners=accumulateInto_1(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto_1(event._dispatchInstances,inst);}}}/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event._targetInst,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated_1(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated_1(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,from,to){ReactTreeTraversal.traverseEnterLeave(from,to,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated_1(events,accumulateDirectDispatchesSingle);}/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing even a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};var EventPropagators_1=EventPropagators;/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else{return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function twoArgumentPooler(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else{return new Klass(a1,a2);}};var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else{return new Klass(a1,a2,a3);}};var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else{return new Klass(a1,a2,a3,a4);}};var standardReleaser=function standardReleaser(instance){var Klass=this;!(instance instanceof Klass)?invariant(false,'Trying to release an instance into a pool of a different type.'):void 0;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler;/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){// Casting as any so that flow ignores the actual implementation and trusts
	// it to match the type we declared
	var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler};var PooledClass_1=PooledClass;var contentKey=null;/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */function getTextContentAccessor(){if(!contentKey&&ExecutionEnvironment.canUseDOM){// Prefer textContent to innerText because many browsers support both but
	// SVG <text> elements don't support innerText even when <div> does.
	contentKey='textContent'in document.documentElement?'textContent':'innerText';}return contentKey;}var getTextContentAccessor_1=getTextContentAccessor;/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */function FallbackCompositionState(root){this._root=root;this._startText=this.getText();this._fallbackText=null;}_assign(FallbackCompositionState.prototype,{destructor:function destructor(){this._root=null;this._startText=null;this._fallbackText=null;},/**
	   * Get current text of input.
	   *
	   * @return {string}
	   */getText:function getText(){if('value'in this._root){return this._root.value;}return this._root[getTextContentAccessor_1()];},/**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */getData:function getData(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;this._fallbackText=endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass_1.addPoolingTo(FallbackCompositionState);var FallbackCompositionState_1=FallbackCompositionState;var didWarnForAddedNewProperty=false;var isProxySupported=typeof Proxy==='function';var shouldBeReleasedProperties=['dispatchConfig','_targetInst','nativeEvent','isDefaultPrevented','isPropagationStopped','_dispatchListeners','_dispatchInstances'];/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var EventInterface={type:null,target:null,// currentTarget is set when dispatching; no use in copying it here
	currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(event){return event.timeStamp||Date.now();},defaultPrevented:null,isTrusted:null};/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {*} targetInst Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @param {DOMEventTarget} nativeEventTarget Target node.
	 */function SyntheticEvent(dispatchConfig,targetInst,nativeEvent,nativeEventTarget){{// these have a getter/setter for warnings
	delete this.nativeEvent;delete this.preventDefault;delete this.stopPropagation;}this.dispatchConfig=dispatchConfig;this._targetInst=targetInst;this.nativeEvent=nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface){if(!Interface.hasOwnProperty(propName)){continue;}{delete this[propName];// this has a getter/setter for warnings
	}var normalize=Interface[propName];if(normalize){this[propName]=normalize(nativeEvent);}else{if(propName==='target'){this.target=nativeEventTarget;}else{this[propName]=nativeEvent[propName];}}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=emptyFunction.thatReturnsTrue;}else{this.isDefaultPrevented=emptyFunction.thatReturnsFalse;}this.isPropagationStopped=emptyFunction.thatReturnsFalse;return this;}_assign(SyntheticEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();}else if(typeof event.returnValue!=='unknown'){event.returnValue=false;}this.isDefaultPrevented=emptyFunction.thatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();}else if(typeof event.cancelBubble!=='unknown'){// The ChangeEventPlugin registers a "propertychange" event for
	// IE. This event does not support bubbling or cancelling, and
	// any references to cancelBubble throw "Member not found".  A
	// typeof check of "unknown" circumvents this issue (and is also
	// IE specific).
	event.cancelBubble=true;}this.isPropagationStopped=emptyFunction.thatReturnsTrue;},/**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */persist:function persist(){this.isPersistent=emptyFunction.thatReturnsTrue;},/**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */isPersistent:emptyFunction.thatReturnsFalse,/**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */destructor:function destructor(){var Interface=this.constructor.Interface;for(var propName in Interface){{Object.defineProperty(this,propName,getPooledWarningPropertyDefinition(propName,Interface[propName]));}}for(var i=0;i<shouldBeReleasedProperties.length;i++){this[shouldBeReleasedProperties[i]]=null;}{Object.defineProperty(this,'nativeEvent',getPooledWarningPropertyDefinition('nativeEvent',null));Object.defineProperty(this,'preventDefault',getPooledWarningPropertyDefinition('preventDefault',emptyFunction));Object.defineProperty(this,'stopPropagation',getPooledWarningPropertyDefinition('stopPropagation',emptyFunction));}}});SyntheticEvent.Interface=EventInterface;{if(isProxySupported){/*eslint-disable no-func-assign */SyntheticEvent=new Proxy(SyntheticEvent,{construct:function construct(target,args){return this.apply(target,Object.create(target.prototype),args);},apply:function apply(constructor,that,args){return new Proxy(constructor.apply(that,args),{set:function set(target,prop,value){if(prop!=='isPersistent'&&!target.constructor.Interface.hasOwnProperty(prop)&&shouldBeReleasedProperties.indexOf(prop)===-1){warning(didWarnForAddedNewProperty||target.isPersistent(),"This synthetic event is reused for performance reasons. If you're "+"seeing this, you're adding a new property in the synthetic event object. "+'The property is never released. See '+'https://fb.me/react-event-pooling for more information.');didWarnForAddedNewProperty=true;}target[prop]=value;return true;}});}});/*eslint-enable no-func-assign */}}/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */SyntheticEvent.augmentClass=function(Class,Interface){var Super=this;var E=function E(){};E.prototype=Super.prototype;var prototype=new E();_assign(prototype,Class.prototype);Class.prototype=prototype;Class.prototype.constructor=Class;Class.Interface=_assign({},Super.Interface,Interface);Class.augmentClass=Super.augmentClass;PooledClass_1.addPoolingTo(Class,PooledClass_1.fourArgumentPooler);};PooledClass_1.addPoolingTo(SyntheticEvent,PooledClass_1.fourArgumentPooler);var SyntheticEvent_1=SyntheticEvent;/**
	  * Helper to nullify syntheticEvent instance properties when destructing
	  *
	  * @param {object} SyntheticEvent
	  * @param {String} propName
	  * @return {object} defineProperty object
	  */function getPooledWarningPropertyDefinition(propName,getVal){var isFunction=typeof getVal==='function';return{configurable:true,set:set,get:get};function set(val){var action=isFunction?'setting the method':'setting the property';warn(action,'This is effectively a no-op');return val;}function get(){var action=isFunction?'accessing the method':'accessing the property';var result=isFunction?'This is a no-op function':'This is set to null';warn(action,result);return getVal;}function warn(action,result){var warningCondition=false;warning(warningCondition,"This synthetic event is reused for performance reasons. If you're seeing this, "+"you're %s `%s` on a released/nullified synthetic event. %s. "+'If you must keep the original synthetic event around, use event.persist(). '+'See https://fb.me/react-event-pooling for more information.',action,propName,result);}}/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */var CompositionEventInterface={data:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);var SyntheticCompositionEvent_1=SyntheticCompositionEvent;/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */var InputEventInterface={data:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticInputEvent,InputEventInterface);var SyntheticInputEvent_1=SyntheticInputEvent;var END_KEYCODES=[9,13,27,32];// Tab, Return, Esc, Space
	var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent'in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode'in document){documentMode=document.documentMode;}// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent'in window&&!documentMode&&!isPresto();// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */function isPresto(){var opera=window.opera;return(typeof opera==='undefined'?'undefined':_typeof(opera))==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);// Events and their corresponding property names.
	var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:'onBeforeInput',captured:'onBeforeInputCapture'},dependencies:['topCompositionEnd','topKeyPress','topTextInput','topPaste']},compositionEnd:{phasedRegistrationNames:{bubbled:'onCompositionEnd',captured:'onCompositionEndCapture'},dependencies:['topBlur','topCompositionEnd','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},compositionStart:{phasedRegistrationNames:{bubbled:'onCompositionStart',captured:'onCompositionStartCapture'},dependencies:['topBlur','topCompositionStart','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},compositionUpdate:{phasedRegistrationNames:{bubbled:'onCompositionUpdate',captured:'onCompositionUpdateCapture'},dependencies:['topBlur','topCompositionUpdate','topKeyDown','topKeyPress','topKeyUp','topMouseDown']}};// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress=false;/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */function isKeypressCommand(nativeEvent){return(nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
	!(nativeEvent.ctrlKey&&nativeEvent.altKey);}/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */function getCompositionEventType(topLevelType){switch(topLevelType){case'topCompositionStart':return eventTypes.compositionStart;case'topCompositionEnd':return eventTypes.compositionEnd;case'topCompositionUpdate':return eventTypes.compositionUpdate;}}/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType==='topKeyDown'&&nativeEvent.keyCode===START_KEYCODE;}/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case'topKeyUp':// Command keys insert or clear IME input.
	return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case'topKeyDown':// Expect IME keyCode on each keydown. If we get any other
	// code we must have exited earlier.
	return nativeEvent.keyCode!==START_KEYCODE;case'topKeyPress':case'topMouseDown':case'topBlur':// Events are not possible without cancelling IME.
	return true;default:return false;}}/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if((typeof detail==='undefined'?'undefined':_typeof(detail))==='object'&&'data'in detail){return detail.data;}return null;}// Track the current IME composition fallback object, if any.
	var currentComposition=null;/**
	 * @return {?object} A SyntheticCompositionEvent.
	 */function extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){// The current composition is stored statically and must not be
	// overwritten while composition continues.
	if(!currentComposition&&eventType===eventTypes.compositionStart){currentComposition=FallbackCompositionState_1.getPooled(nativeEventTarget);}else if(eventType===eventTypes.compositionEnd){if(currentComposition){fallbackData=currentComposition.getData();}}}var event=SyntheticCompositionEvent_1.getPooled(eventType,targetInst,nativeEvent,nativeEventTarget);if(fallbackData){// Inject data generated from fallback path into the synthetic event.
	// This matches the property of native CompositionEventInterface.
	event.data=fallbackData;}else{var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case'topCompositionEnd':return getDataFromCustomEvent(nativeEvent);case'topKeyPress':/**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case'topTextInput':// Record the characters to be added to the DOM.
	var chars=nativeEvent.data;// If it's a spacebar character, assume that we have already handled
	// it at the keypress level and bail immediately. Android Chrome
	// doesn't give us keycodes, so we need to blacklist it.
	if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default:// For other native event types, do nothing.
	return null;}}/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){// If we are currently composing (IME) and using a fallback to do so,
	// try to extract the composed characters from the fallback object.
	// If composition event is available, we extract a string only at
	// compositionevent, otherwise extract it at fallback events.
	if(currentComposition){if(topLevelType==='topCompositionEnd'||!canUseCompositionEvent&&isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState_1.release(currentComposition);currentComposition=null;return chars;}return null;}switch(topLevelType){case'topPaste':// If a paste event occurs after a keypress, throw out the input
	// chars. Paste events should not lead to BeforeInput events.
	return null;case'topKeyPress':/**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */if(nativeEvent.which&&!isKeypressCommand(nativeEvent)){return String.fromCharCode(nativeEvent.which);}return null;case'topCompositionEnd':return useFallbackCompositionData?null:nativeEvent.data;default:return null;}}/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @return {?object} A SyntheticInputEvent.
	 */function extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else{chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);}// If no characters are being inserted, no BeforeInput event should
	// be fired.
	if(!chars){return null;}var event=SyntheticInputEvent_1.getPooled(eventTypes.beforeInput,targetInst,nativeEvent,nativeEventTarget);event.data=chars;EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */var BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){return[extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget)];}};var BeforeInputEventPlugin_1=BeforeInputEventPlugin;// Used as a way to call batchedUpdates when we don't know if we're in a Fiber
	// or Stack context. Such as when we're dispatching events or if third party
	// libraries need to call batchedUpdates. Eventually, this API will go away when
	// everything is batched by default. We'll then have a similar API to opt-out of
	// scheduled work and instead do synchronous work.
	// Defaults
	var stackBatchedUpdates=function stackBatchedUpdates(fn,a,b,c,d,e){return fn(a,b,c,d,e);};var fiberBatchedUpdates=function fiberBatchedUpdates(fn,bookkeeping){return fn(bookkeeping);};function performFiberBatchedUpdates(fn,bookkeeping){// If we have Fiber loaded, we need to wrap this in a batching call so that
	// Fiber can apply its default priority for this call.
	return fiberBatchedUpdates(fn,bookkeeping);}function batchedUpdates(fn,bookkeeping){// We first perform work with the stack batching strategy, by passing our
	// indirection to it.
	return stackBatchedUpdates(performFiberBatchedUpdates,fn,bookkeeping);}var isNestingBatched=false;function batchedUpdatesWithControlledComponents(fn,bookkeeping){if(isNestingBatched){// If we are currently inside another batch, we need to wait until it
	// fully completes before restoring state. Therefore, we add the target to
	// a queue of work.
	return batchedUpdates(fn,bookkeeping);}isNestingBatched=true;try{return batchedUpdates(fn,bookkeeping);}finally{// Here we wait until all updates have propagated, which is important
	// when using controlled components within layers:
	// https://github.com/facebook/react/issues/1698
	// Then we restore state of any controlled component.
	isNestingBatched=false;ReactControlledComponent_1.restoreStateIfNeeded();}}var ReactGenericBatchingInjection={injectStackBatchedUpdates:function injectStackBatchedUpdates(_batchedUpdates){stackBatchedUpdates=_batchedUpdates;},injectFiberBatchedUpdates:function injectFiberBatchedUpdates(_batchedUpdates){fiberBatchedUpdates=_batchedUpdates;}};var ReactGenericBatching={batchedUpdates:batchedUpdatesWithControlledComponents,injection:ReactGenericBatchingInjection};var ReactGenericBatching_1=ReactGenericBatching;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 *//**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */function getEventTarget(nativeEvent){var target=nativeEvent.target||nativeEvent.srcElement||window;// Normalize SVG <use> element events #4963
	if(target.correspondingUseElement){target=target.correspondingUseElement;}// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	// @see http://www.quirksmode.org/js/events_properties.html
	return target.nodeType===3?target.parentNode:target;}var getEventTarget_1=getEventTarget;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 * 
	 *//**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */var supportedInputTypes={color:true,date:true,datetime:true,'datetime-local':true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();if(nodeName==='input'){return!!supportedInputTypes[elem.type];}if(nodeName==='textarea'){return true;}return false;}var isTextInputElement_1=isTextInputElement;var eventTypes$1={change:{phasedRegistrationNames:{bubbled:'onChange',captured:'onChangeCapture'},dependencies:['topBlur','topChange','topClick','topFocus','topInput','topKeyDown','topKeyUp','topSelectionChange']}};function createAndAccumulateChangeEvent(inst,nativeEvent,target){var event=SyntheticEvent_1.getPooled(eventTypes$1.change,inst,nativeEvent,target);event.type='change';// Flag this event loop as needing state restore.
	ReactControlledComponent_1.enqueueStateRestore(target);EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}/**
	 * For IE shims
	 */var activeElement=null;var activeElementInst=null;/**
	 * SECTION: handle `change` event
	 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}function manualDispatchChangeEvent(nativeEvent){var event=createAndAccumulateChangeEvent(activeElementInst,nativeEvent,getEventTarget_1(nativeEvent));// If change and propertychange bubbled, we'd just bind to it like all the
	// other events and have it go through ReactBrowserEventEmitter. Since it
	// doesn't, we manually listen for the events and so we have to enqueue and
	// process the abstract event manually.
	//
	// Batching is necessary here in order to ensure that all event handlers run
	// before the next rerender (including event handlers attached to ancestor
	// elements instead of directly on the input). Without this, controlled
	// components don't work properly in conjunction with event bubbling because
	// the component is rerendered and the value reverted before all the event
	// handlers can run. See https://github.com/facebook/react/issues/708.
	ReactGenericBatching_1.batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){EventPluginHub_1.enqueueEvents(event);EventPluginHub_1.processEventQueue(false);}function getInstIfValueChanged(targetInst){if(inputValueTracking_1.updateValueIfChanged(targetInst)){return targetInst;}}function getTargetInstForChangeEvent(topLevelType,targetInst){if(topLevelType==='topChange'){return targetInst;}}/**
	 * SECTION: handle `input` event
	 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){// IE9 claims to support the input event but fails to trigger it when
	// deleting text, so we ignore its input events.
	isInputEventSupported=isEventSupported_1('input')&&(!document.documentMode||document.documentMode>9);}/**
	 * (For IE <=9) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */function startWatchingForValueChange(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElement.attachEvent('onpropertychange',handlePropertyChange);}/**
	 * (For IE <=9) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */function stopWatchingForValueChange(){if(!activeElement){return;}activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement=null;activeElementInst=null;}/**
	 * (For IE <=9) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}if(getInstIfValueChanged(activeElementInst)){manualDispatchChangeEvent(nativeEvent);}}function handleEventsForInputEventPolyfill(topLevelType,target,targetInst){if(topLevelType==='topFocus'){// In IE9, propertychange fires for most input events but is buggy and
	// doesn't fire when text is deleted, but conveniently, selectionchange
	// appears to fire in all of the remaining cases so we catch those and
	// forward the event if the value has changed
	// In either case, we don't want to call the event handler if the value
	// is changed from JS so we redefine a setter for `.value` that updates
	// our activeElementValue variable, allowing us to ignore those changes
	//
	// stopWatching() should be a noop here but we call it just in case we
	// missed a blur event somehow.
	stopWatchingForValueChange();startWatchingForValueChange(target,targetInst);}else if(topLevelType==='topBlur'){stopWatchingForValueChange();}}// For IE8 and IE9.
	function getTargetInstForInputEventPolyfill(topLevelType,targetInst){if(topLevelType==='topSelectionChange'||topLevelType==='topKeyUp'||topLevelType==='topKeyDown'){// On the selectionchange event, the target is just document which isn't
	// helpful for us so just check activeElement instead.
	//
	// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	// propertychange on the first input event after setting `value` from a
	// script and fires only keydown, keypress, keyup. Catching keyup usually
	// gets it and catching keydown lets us fire an event for the first
	// keystroke if user does a key repeat (it'll be a little delayed: right
	// before the second keystroke). Other input methods (e.g., paste) seem to
	// fire selectionchange normally.
	return getInstIfValueChanged(activeElementInst);}}/**
	 * SECTION: handle `click` event
	 */function shouldUseClickEvent(elem){// Use the `click` event to detect changes to checkbox and radio inputs.
	// This approach works across all browsers, whereas `change` does not fire
	// until `blur` in IE8.
	var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetInstForClickEvent(topLevelType,targetInst){if(topLevelType==='topClick'){return getInstIfValueChanged(targetInst);}}function getTargetInstForInputOrChangeEvent(topLevelType,targetInst){if(topLevelType==='topInput'||topLevelType==='topChange'){return getInstIfValueChanged(targetInst);}}function handleControlledInputBlur(inst,node){// TODO: In IE, inst is occasionally null. Why?
	if(inst==null){return;}// Fiber and ReactDOM keep wrapper state in separate places
	var state=inst._wrapperState||node._wrapperState;if(!state||!state.controlled||node.type!=='number'){return;}// If controlled, assign the value attribute to the current value on blur
	var value=''+node.value;if(node.getAttribute('value')!==value){node.setAttribute('value',value);}}/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */var ChangeEventPlugin={eventTypes:eventTypes$1,_isInputEventSupported:isInputEventSupported,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var targetNode=targetInst?ReactDOMComponentTree_1.getNodeFromInstance(targetInst):window;var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){getTargetInstFunc=getTargetInstForChangeEvent;}else if(isTextInputElement_1(targetNode)){if(isInputEventSupported){getTargetInstFunc=getTargetInstForInputOrChangeEvent;}else{getTargetInstFunc=getTargetInstForInputEventPolyfill;handleEventFunc=handleEventsForInputEventPolyfill;}}else if(shouldUseClickEvent(targetNode)){getTargetInstFunc=getTargetInstForClickEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(topLevelType,targetInst);if(inst){var event=createAndAccumulateChangeEvent(inst,nativeEvent,nativeEventTarget);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,targetNode,targetInst);}// When blurring, set the value attribute for number inputs
	if(topLevelType==='topBlur'){handleControlledInputBlur(targetInst,targetNode);}}};var ChangeEventPlugin_1=ChangeEventPlugin;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMEventPluginOrder
	 *//**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */var DOMEventPluginOrder=['ResponderEventPlugin','SimpleEventPlugin','TapEventPlugin','EnterLeaveEventPlugin','ChangeEventPlugin','SelectEventPlugin','BeforeInputEventPlugin'];var DOMEventPluginOrder_1=DOMEventPluginOrder;/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var UIEventInterface={view:function view(event){if(event.view){return event.view;}var target=getEventTarget_1(event);if(target.window===target){// target is a window object
	return target;}var doc=target.ownerDocument;// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	if(doc){return doc.defaultView||doc.parentWindow;}else{return window;}},detail:function detail(event){return event.detail||0;}};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticUIEvent,UIEventInterface);var SyntheticUIEvent_1=SyntheticUIEvent;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 *//**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */var modifierKeyToProp={Alt:'altKey',Control:'ctrlKey',Meta:'metaKey',Shift:'shiftKey'};// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}var getEventModifierState_1=getEventModifierState;/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState_1,button:function button(event){// Webkit, Firefox, IE9+
	// which:  1 2 3
	// button: 0 1 2 (standard)
	var button=event.button;if('which'in event){return button;}// IE<9
	// which:  undefined
	// button: 0 0 0
	// button: 1 4 2 (onmouseup)
	return button===2?2:button===4?1:0;},buttons:null,relatedTarget:function relatedTarget(event){return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);}};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticMouseEvent,MouseEventInterface);var SyntheticMouseEvent_1=SyntheticMouseEvent;var eventTypes$2={mouseEnter:{registrationName:'onMouseEnter',dependencies:['topMouseOut','topMouseOver']},mouseLeave:{registrationName:'onMouseLeave',dependencies:['topMouseOut','topMouseOver']}};var EnterLeaveEventPlugin={eventTypes:eventTypes$2,/**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(topLevelType==='topMouseOver'&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!=='topMouseOut'&&topLevelType!=='topMouseOver'){// Must not be a mouse in or mouse out - ignoring.
	return null;}var win;if(nativeEventTarget.window===nativeEventTarget){// `nativeEventTarget` is probably a window object.
	win=nativeEventTarget;}else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else{win=window;}}var from;var to;if(topLevelType==='topMouseOut'){from=targetInst;var related=nativeEvent.relatedTarget||nativeEvent.toElement;to=related?ReactDOMComponentTree_1.getClosestInstanceFromNode(related):null;}else{// Moving to a node from outside the window.
	from=null;to=targetInst;}if(from===to){// Nothing pertains to our managed components.
	return null;}var fromNode=from==null?win:ReactDOMComponentTree_1.getNodeFromInstance(from);var toNode=to==null?win:ReactDOMComponentTree_1.getNodeFromInstance(to);var leave=SyntheticMouseEvent_1.getPooled(eventTypes$2.mouseLeave,from,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=fromNode;leave.relatedTarget=toNode;var enter=SyntheticMouseEvent_1.getPooled(eventTypes$2.mouseEnter,to,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=toNode;enter.relatedTarget=fromNode;EventPropagators_1.accumulateEnterLeaveDispatches(leave,enter,from,to);return[leave,enter];}};var EnterLeaveEventPlugin_1=EnterLeaveEventPlugin;var MUST_USE_PROPERTY=DOMProperty_1.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty_1.injection.HAS_BOOLEAN_VALUE;var HAS_NUMERIC_VALUE=DOMProperty_1.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty_1.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty_1.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(new RegExp('^(data|aria)-['+DOMProperty_1.ATTRIBUTE_NAME_CHAR+']*$')),Properties:{/**
	     * Standard Properties
	     */accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:HAS_BOOLEAN_VALUE,allowTransparency:0,alt:0,// specifies target context for links with `preload` type
	as:0,async:HAS_BOOLEAN_VALUE,autoComplete:0,// autoFocus is polyfilled/normalized by AutoFocusUtils
	// autoFocus: HAS_BOOLEAN_VALUE,
	autoPlay:HAS_BOOLEAN_VALUE,capture:HAS_BOOLEAN_VALUE,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,cite:0,classID:0,className:0,cols:HAS_POSITIVE_NUMERIC_VALUE,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:HAS_BOOLEAN_VALUE,coords:0,crossOrigin:0,data:0,// For `<object />` acts as `src`.
	dateTime:0,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,dir:0,disabled:HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:0,frameBorder:0,headers:0,height:0,hidden:HAS_BOOLEAN_VALUE,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:HAS_BOOLEAN_VALUE,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,// Caution; `option.selected` is not updated if `select.multiple` is
	// disabled with `removeAttribute`.
	multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:0,nonce:0,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:0,pattern:0,placeholder:0,playsInline:HAS_BOOLEAN_VALUE,poster:0,preload:0,profile:0,radioGroup:0,readOnly:HAS_BOOLEAN_VALUE,referrerPolicy:0,rel:0,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,role:0,rows:HAS_POSITIVE_NUMERIC_VALUE,rowSpan:HAS_NUMERIC_VALUE,sandbox:0,scope:0,scoped:HAS_BOOLEAN_VALUE,scrolling:0,seamless:HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:0,size:HAS_POSITIVE_NUMERIC_VALUE,sizes:0,// support for projecting regular DOM Elements via V1 named slots ( shadow dom )
	slot:0,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:HAS_NUMERIC_VALUE,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,// Setting .type throws on non-<input> tags
	type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,/**
	     * RDFa Properties
	     */about:0,datatype:0,inlist:0,prefix:0,// property is also supported for OpenGraph in meta tags.
	property:0,resource:0,'typeof':0,vocab:0,/**
	     * Non-standard Properties
	     */// autoCapitalize and autoCorrect are supported in Mobile Safari for
	// keyboard hints.
	autoCapitalize:0,autoCorrect:0,// autoSave allows WebKit/Blink to persist values of input fields on page reloads
	autoSave:0,// color is for Safari mask-icon link
	color:0,// itemProp, itemScope, itemType are for
	// Microdata support. See http://schema.org/docs/gs.html
	itemProp:0,itemScope:HAS_BOOLEAN_VALUE,itemType:0,// itemID and itemRef are for Microdata support as well but
	// only specified in the WHATWG spec document. See
	// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	itemID:0,itemRef:0,// results show looking glass icon and recent searches on input
	// search fields in WebKit/Blink
	results:0,// IE-only attribute that specifies security restrictions on an iframe
	// as an alternative to the sandbox attribute on IE<10
	security:0,// IE-only attribute that controls focus behavior
	unselectable:0},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{},DOMMutationMethods:{value:function value(node,_value){if(_value==null){return node.removeAttribute('value');}// Number inputs get special treatment due to some edge cases in
	// Chrome. Let everything else assign the value attribute as normal.
	// https://github.com/facebook/react/issues/7253#issuecomment-236074326
	if(node.type!=='number'||node.hasAttribute('value')===false){node.setAttribute('value',''+_value);}else if(node.validity&&!node.validity.badInput&&node.ownerDocument.activeElement!==node){// Don't assign an attribute if validation reports bad
	// input. Chrome will clear the value. Additionally, don't
	// operate on inputs that have focus, otherwise Chrome might
	// strip off trailing decimal places and cause the user's
	// cursor position to jump to the beginning of the input.
	//
	// In ReactDOMInput, we have an onBlur event that will trigger
	// this function again when focus is lost.
	node.setAttribute('value',''+_value);}}}};var HTMLDOMPropertyConfig_1=HTMLDOMPropertyConfig;var HostRoot=ReactTypeOfWork.HostRoot;/**
	 * Find the deepest React component completely containing the root of the
	 * passed-in instance (for use when entire React trees are nested within each
	 * other). If React trees are not nested, returns null.
	 */function findRootContainerNode(inst){// TODO: It may be a good idea to cache this to prevent unnecessary DOM
	// traversal, but caching is difficult to do correctly without using a
	// mutation observer to listen for all DOM changes.
	if(typeof inst.tag==='number'){while(inst['return']){inst=inst['return'];}if(inst.tag!==HostRoot){// This can happen if we're in a detached tree.
	return null;}return inst.stateNode.containerInfo;}else{while(inst._hostParent){inst=inst._hostParent;}var rootNode=ReactDOMComponentTree_1.getNodeFromInstance(inst);return rootNode.parentNode;}}// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType,nativeEvent,targetInst){this.topLevelType=topLevelType;this.nativeEvent=nativeEvent;this.targetInst=targetInst;this.ancestors=[];}_assign(TopLevelCallbackBookKeeping.prototype,{destructor:function destructor(){this.topLevelType=null;this.nativeEvent=null;this.targetInst=null;this.ancestors.length=0;}});PooledClass_1.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass_1.threeArgumentPooler);function handleTopLevelImpl(bookKeeping){var targetInst=bookKeeping.targetInst;// Loop through the hierarchy, in case there's any nested components.
	// It's important that we build the array of ancestors before calling any
	// event handlers, because event handlers can modify the DOM, leading to
	// inconsistencies with ReactMount's node cache. See #1105.
	var ancestor=targetInst;do{if(!ancestor){bookKeeping.ancestors.push(ancestor);break;}var root=findRootContainerNode(ancestor);if(!root){break;}bookKeeping.ancestors.push(ancestor);ancestor=ReactDOMComponentTree_1.getClosestInstanceFromNode(root);}while(ancestor);for(var i=0;i<bookKeeping.ancestors.length;i++){targetInst=bookKeeping.ancestors[i];ReactEventListener._handleTopLevel(bookKeeping.topLevelType,targetInst,bookKeeping.nativeEvent,getEventTarget_1(bookKeeping.nativeEvent));}}function scrollValueMonitor(cb){var scrollPosition=getUnboundedScrollPosition(window);cb(scrollPosition);}var ReactEventListener={_enabled:true,_handleTopLevel:null,setHandleTopLevel:function setHandleTopLevel(handleTopLevel){ReactEventListener._handleTopLevel=handleTopLevel;},setEnabled:function setEnabled(enabled){ReactEventListener._enabled=!!enabled;},isEnabled:function isEnabled(){return ReactEventListener._enabled;},/**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,element){if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},/**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} element Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,element){if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},monitorScrollValue:function monitorScrollValue(refresh){var callback=scrollValueMonitor.bind(null,refresh);EventListener.listen(window,'scroll',callback);},dispatchEvent:function dispatchEvent(topLevelType,nativeEvent){if(!ReactEventListener._enabled){return;}var nativeEventTarget=getEventTarget_1(nativeEvent);var targetInst=ReactDOMComponentTree_1.getClosestInstanceFromNode(nativeEventTarget);var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent,targetInst);try{// Event queue being processed in the same cycle allows
	// `preventDefault`.
	ReactGenericBatching_1.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally{TopLevelCallbackBookKeeping.release(bookKeeping);}}};var ReactEventListener_1=ReactEventListener;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */var NS={xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'};// We use attributes for everything SVG so let's avoid some duplication and run
	// code instead.
	// The following are all specified in the HTML config already so we exclude here.
	// - class (as className)
	// - color
	// - height
	// - id
	// - lang
	// - max
	// - media
	// - method
	// - min
	// - name
	// - style
	// - target
	// - type
	// - width
	var ATTRS={accentHeight:'accent-height',accumulate:0,additive:0,alignmentBaseline:'alignment-baseline',allowReorder:'allowReorder',alphabetic:0,amplitude:0,arabicForm:'arabic-form',ascent:0,attributeName:'attributeName',attributeType:'attributeType',autoReverse:'autoReverse',azimuth:0,baseFrequency:'baseFrequency',baseProfile:'baseProfile',baselineShift:'baseline-shift',bbox:0,begin:0,bias:0,by:0,calcMode:'calcMode',capHeight:'cap-height',clip:0,clipPath:'clip-path',clipRule:'clip-rule',clipPathUnits:'clipPathUnits',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorProfile:'color-profile',colorRendering:'color-rendering',contentScriptType:'contentScriptType',contentStyleType:'contentStyleType',cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:'diffuseConstant',direction:0,display:0,divisor:0,dominantBaseline:'dominant-baseline',dur:0,dx:0,dy:0,edgeMode:'edgeMode',elevation:0,enableBackground:'enable-background',end:0,exponent:0,externalResourcesRequired:'externalResourcesRequired',fill:0,fillOpacity:'fill-opacity',fillRule:'fill-rule',filter:0,filterRes:'filterRes',filterUnits:'filterUnits',floodColor:'flood-color',floodOpacity:'flood-opacity',focusable:0,fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',glyphRef:'glyphRef',gradientTransform:'gradientTransform',gradientUnits:'gradientUnits',hanging:0,horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',ideographic:0,imageRendering:'image-rendering','in':0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:'kernelMatrix',kernelUnitLength:'kernelUnitLength',kerning:0,keyPoints:'keyPoints',keySplines:'keySplines',keyTimes:'keyTimes',lengthAdjust:'lengthAdjust',letterSpacing:'letter-spacing',lightingColor:'lighting-color',limitingConeAngle:'limitingConeAngle',local:0,markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',markerHeight:'markerHeight',markerUnits:'markerUnits',markerWidth:'markerWidth',mask:0,maskContentUnits:'maskContentUnits',maskUnits:'maskUnits',mathematical:0,mode:0,numOctaves:'numOctaves',offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',panose1:'panose-1',pathLength:'pathLength',patternContentUnits:'patternContentUnits',patternTransform:'patternTransform',patternUnits:'patternUnits',pointerEvents:'pointer-events',points:0,pointsAtX:'pointsAtX',pointsAtY:'pointsAtY',pointsAtZ:'pointsAtZ',preserveAlpha:'preserveAlpha',preserveAspectRatio:'preserveAspectRatio',primitiveUnits:'primitiveUnits',r:0,radius:0,refX:'refX',refY:'refY',renderingIntent:'rendering-intent',repeatCount:'repeatCount',repeatDur:'repeatDur',requiredExtensions:'requiredExtensions',requiredFeatures:'requiredFeatures',restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:'shape-rendering',slope:0,spacing:0,specularConstant:'specularConstant',specularExponent:'specularExponent',speed:0,spreadMethod:'spreadMethod',startOffset:'startOffset',stdDeviation:'stdDeviation',stemh:0,stemv:0,stitchTiles:'stitchTiles',stopColor:'stop-color',stopOpacity:'stop-opacity',strikethroughPosition:'strikethrough-position',strikethroughThickness:'strikethrough-thickness',string:0,stroke:0,strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',surfaceScale:'surfaceScale',systemLanguage:'systemLanguage',tableValues:'tableValues',targetX:'targetX',targetY:'targetY',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',textLength:'textLength',to:0,transform:0,u1:0,u2:0,underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicode:0,unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',values:0,vectorEffect:'vector-effect',version:0,vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',viewBox:'viewBox',viewTarget:'viewTarget',visibility:0,widths:0,wordSpacing:'word-spacing',writingMode:'writing-mode',x:0,xHeight:'x-height',x1:0,x2:0,xChannelSelector:'xChannelSelector',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type',xmlBase:'xml:base',xmlns:0,xmlnsXlink:'xmlns:xlink',xmlLang:'xml:lang',xmlSpace:'xml:space',y:0,y1:0,y2:0,yChannelSelector:'yChannelSelector',z:0,zoomAndPan:'zoomAndPan'};var SVGDOMPropertyConfig={Properties:{},DOMAttributeNamespaces:{xlinkActuate:NS.xlink,xlinkArcrole:NS.xlink,xlinkHref:NS.xlink,xlinkRole:NS.xlink,xlinkShow:NS.xlink,xlinkTitle:NS.xlink,xlinkType:NS.xlink,xmlBase:NS.xml,xmlLang:NS.xml,xmlSpace:NS.xml},DOMAttributeNames:{}};Object.keys(ATTRS).forEach(function(key){SVGDOMPropertyConfig.Properties[key]=0;if(ATTRS[key]){SVGDOMPropertyConfig.DOMAttributeNames[key]=ATTRS[key];}});var SVGDOMPropertyConfig_1=SVGDOMPropertyConfig;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 *//**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;}/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}}/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===3){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return{node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}var getNodeForCharacterOffset_1=getNodeForCharacterOffset;/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */function isCollapsed(anchorNode,anchorOffset,focusNode$$1,focusOffset){return anchorNode===focusNode$$1&&anchorOffset===focusOffset;}/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */function getModernOffsets(node){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode$$1=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0);// In Firefox, range.startContainer and range.endContainer can be "anonymous
	// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	// divs do not seem to expose properties, triggering a "Permission denied
	// error" if any of its properties are accessed. The only seemingly possible
	// way to avoid erroring is to access a property that typically works for
	// non-anonymous divs and catch any error that may otherwise arise. See
	// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	try{/* eslint-disable no-unused-expressions */currentRange.startContainer.nodeType;currentRange.endContainer.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null;}// If the node and offset values are the same, the selection is collapsed.
	// `Selection.isCollapsed` is available natively, but IE sometimes gets
	// this value wrong.
	var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start+rangeLength;// Detect whether the selection is backward.
	var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode$$1,focusOffset);var isBackward=detectionRange.collapsed;return{start:isBackward?end:start,end:isBackward?start:end};}/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programmatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor_1()].length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length);// IE 11 uses modern selection, but doesn't support the extend method.
	// Flip backward selections, so we can set with a single range.
	if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset_1(node,start);var endMarker=getNodeForCharacterOffset_1(node,end);if(startMarker&&endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else{range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var ReactDOMSelection={/**
	   * @param {DOMElement} node
	   */getOffsets:getModernOffsets,/**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */setOffsets:setModernOffsets};var ReactDOMSelection_1=ReactDOMSelection;function isInDocument(node){return containsNode(document.documentElement,node);}/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */var ReactInputSelection={hasSelectionCapabilities:function hasSelectionCapabilities(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');},getSelectionInformation:function getSelectionInformation(){var focusedElem=getActiveElement();return{focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};},/**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */restoreSelection:function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}// Focusing a node can change the scroll position, which is undesirable
	var ancestors=[];var ancestor=priorFocusedElem;while(ancestor=ancestor.parentNode){if(ancestor.nodeType===1){ancestors.push({element:ancestor,left:ancestor.scrollLeft,top:ancestor.scrollTop});}}focusNode(priorFocusedElem);for(var i=0;i<ancestors.length;i++){var info=ancestors[i];info.element.scrollLeft=info.left;info.element.scrollTop=info.top;}}},/**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */getSelection:function getSelection(input){var selection;if('selectionStart'in input){// Modern browser with input or textarea.
	selection={start:input.selectionStart,end:input.selectionEnd};}else{// Content editable or old IE textarea.
	selection=ReactDOMSelection_1.getOffsets(input);}return selection||{start:0,end:0};},/**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */setSelection:function setSelection(input,offsets){var start=offsets.start;var end=offsets.end;if(end===undefined){end=start;}if('selectionStart'in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else{ReactDOMSelection_1.setOffsets(input,offsets);}}};var ReactInputSelection_1=ReactInputSelection;var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode'in document&&document.documentMode<=11;var eventTypes$3={select:{phasedRegistrationNames:{bubbled:'onSelect',captured:'onSelectCapture'},dependencies:['topBlur','topContextMenu','topFocus','topKeyDown','topKeyUp','topMouseDown','topMouseUp','topSelectionChange']}};var activeElement$1=null;var activeElementInst$1=null;var lastSelection=null;var mouseDown=false;// Track whether all listeners exists for this plugin. If none exist, we do
	// not extract events. See #3639.
	var isListeningToAllDependencies=ReactBrowserEventEmitter_1.isListeningToAllDependencies;/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */function getSelection(node){if('selectionStart'in node&&ReactInputSelection_1.hasSelectionCapabilities(node)){return{start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return{anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}}/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */function constructSelectEvent(nativeEvent,nativeEventTarget){// Ensure we have the right element, and that the user is not dragging a
	// selection (this matches native `select` event behavior). In HTML5, select
	// fires only on input and textarea thus if there's no focused element we
	// won't dispatch.
	if(mouseDown||activeElement$1==null||activeElement$1!==getActiveElement()){return null;}// Only fire when selection has actually changed.
	var currentSelection=getSelection(activeElement$1);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var syntheticEvent=SyntheticEvent_1.getPooled(eventTypes$3.select,activeElementInst$1,nativeEvent,nativeEventTarget);syntheticEvent.type='select';syntheticEvent.target=activeElement$1;EventPropagators_1.accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}return null;}/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */var SelectEventPlugin={eventTypes:eventTypes$3,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var doc=nativeEventTarget.window===nativeEventTarget?nativeEventTarget.document:nativeEventTarget.nodeType===9?nativeEventTarget:nativeEventTarget.ownerDocument;if(!doc||!isListeningToAllDependencies('onSelect',doc)){return null;}var targetNode=targetInst?ReactDOMComponentTree_1.getNodeFromInstance(targetInst):window;switch(topLevelType){// Track the input node that has focus.
	case'topFocus':if(isTextInputElement_1(targetNode)||targetNode.contentEditable==='true'){activeElement$1=targetNode;activeElementInst$1=targetInst;lastSelection=null;}break;case'topBlur':activeElement$1=null;activeElementInst$1=null;lastSelection=null;break;// Don't fire the event while the user is dragging. This matches the
	// semantics of the native select event.
	case'topMouseDown':mouseDown=true;break;case'topContextMenu':case'topMouseUp':mouseDown=false;return constructSelectEvent(nativeEvent,nativeEventTarget);// Chrome and IE fire non-standard event when selection is changed (and
	// sometimes when it hasn't). IE's event fires out of order with respect
	// to key and input events on deletion, so we discard it.
	//
	// Firefox doesn't support selectionchange, so check selection status
	// after each key entry. The selection changes after keydown and before
	// keyup, but we check on keydown as well in the case of holding down a
	// key, when multiple keydown events are fired but only one keyup is.
	// This is also our approach for IE handling, for the reason above.
	case'topSelectionChange':if(skipSelectionChangeEvent){break;}// falls through
	case'topKeyDown':case'topKeyUp':return constructSelectEvent(nativeEvent,nativeEventTarget);}return null;}};var SelectEventPlugin_1=SelectEventPlugin;/**
	 * @interface Event
	 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
	 */var AnimationEventInterface={animationName:null,elapsedTime:null,pseudoElement:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */function SyntheticAnimationEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticAnimationEvent,AnimationEventInterface);var SyntheticAnimationEvent_1=SyntheticAnimationEvent;/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */var ClipboardEventInterface={clipboardData:function clipboardData(event){return'clipboardData'in event?event.clipboardData:window.clipboardData;}};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);var SyntheticClipboardEvent_1=SyntheticClipboardEvent;/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var FocusEventInterface={relatedTarget:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticFocusEvent,FocusEventInterface);var SyntheticFocusEvent_1=SyntheticFocusEvent;/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 *//**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode'in nativeEvent){charCode=nativeEvent.charCode;// FF does not set `charCode` for the Enter-key, check against `keyCode`.
	if(charCode===0&&keyCode===13){charCode=13;}}else{// IE8 does not implement `charCode`, but `keyCode` has the correct value.
	charCode=keyCode;}// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	// Must not discard the (non-)printable Enter-key.
	if(charCode>=32||charCode===13){return charCode;}return 0;}var getEventCharCode_1=getEventCharCode;/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */var normalizeKey={Esc:'Escape',Spacebar:' ',Left:'ArrowLeft',Up:'ArrowUp',Right:'ArrowRight',Down:'ArrowDown',Del:'Delete',Win:'OS',Menu:'ContextMenu',Apps:'ContextMenu',Scroll:'ScrollLock',MozPrintableKey:'Unidentified'};/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */var translateToKey={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'};/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */function getEventKey(nativeEvent){if(nativeEvent.key){// Normalize inconsistent values reported by browsers due to
	// implementations of a working draft specification.
	// FireFox implements `key` but returns `MozPrintableKey` for all
	// printable characters (normalized to `Unidentified`), ignore it.
	var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}}// Browser does not implement `key`, polyfill as much of it as we can.
	if(nativeEvent.type==='keypress'){var charCode=getEventCharCode_1(nativeEvent);// The enter-key is technically both printable and non-printable and can
	// thus be captured by `keypress`, no other non-printable key should.
	return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){// While user keyboard layout determines the actual meaning of each
	// `keyCode` value, almost all function keys have a universal value.
	return translateToKey[nativeEvent.keyCode]||'Unidentified';}return'';}var getEventKey_1=getEventKey;/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var KeyboardEventInterface={key:getEventKey_1,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState_1,// Legacy Interface
	charCode:function charCode(event){// `charCode` is the result of a KeyPress event and represents the value of
	// the actual printable character.
	// KeyPress is deprecated, but its replacement is not yet final and not
	// implemented in any major browser. Only KeyPress has charCode.
	if(event.type==='keypress'){return getEventCharCode_1(event);}return 0;},keyCode:function keyCode(event){// `keyCode` is the result of a KeyDown/Up event and represents the value of
	// physical keyboard key.
	// The actual meaning of the value depends on the users' keyboard layout
	// which cannot be detected. Assuming that it is a US keyboard layout
	// provides a surprisingly accurate mapping for US and European users.
	// Due to this, it is left to the user to implement at this time.
	if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function which(event){// `which` is an alias for either `keyCode` or `charCode` depending on the
	// type of the event.
	if(event.type==='keypress'){return getEventCharCode_1(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);var SyntheticKeyboardEvent_1=SyntheticKeyboardEvent;/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var DragEventInterface={dataTransfer:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent_1.augmentClass(SyntheticDragEvent,DragEventInterface);var SyntheticDragEvent_1=SyntheticDragEvent;/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState_1};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent_1.augmentClass(SyntheticTouchEvent,TouchEventInterface);var SyntheticTouchEvent_1=SyntheticTouchEvent;/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
	 */var TransitionEventInterface={propertyName:null,elapsedTime:null,pseudoElement:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */function SyntheticTransitionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent_1.augmentClass(SyntheticTransitionEvent,TransitionEventInterface);var SyntheticTransitionEvent_1=SyntheticTransitionEvent;/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */var WheelEventInterface={deltaX:function deltaX(event){return'deltaX'in event?event.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	'wheelDeltaX'in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return'deltaY'in event?event.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	'wheelDeltaY'in event?-event.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	'wheelDelta'in event?-event.wheelDelta:0;},deltaZ:null,// Browsers without "deltaMode" is reporting in raw wheel delta where one
	// notch on the scroll is always +/- 120, roughly equivalent to pixels.
	// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	deltaMode:null};/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent_1.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent_1.augmentClass(SyntheticWheelEvent,WheelEventInterface);var SyntheticWheelEvent_1=SyntheticWheelEvent;/**
	 * Turns
	 * ['abort', ...]
	 * into
	 * eventTypes = {
	 *   'abort': {
	 *     phasedRegistrationNames: {
	 *       bubbled: 'onAbort',
	 *       captured: 'onAbortCapture',
	 *     },
	 *     dependencies: ['topAbort'],
	 *   },
	 *   ...
	 * };
	 * topLevelEventsToDispatchConfig = {
	 *   'topAbort': { sameConfig }
	 * };
	 */var eventTypes$4={};var topLevelEventsToDispatchConfig={};['abort','animationEnd','animationIteration','animationStart','blur','cancel','canPlay','canPlayThrough','click','close','contextMenu','copy','cut','doubleClick','drag','dragEnd','dragEnter','dragExit','dragLeave','dragOver','dragStart','drop','durationChange','emptied','encrypted','ended','error','focus','input','invalid','keyDown','keyPress','keyUp','load','loadedData','loadedMetadata','loadStart','mouseDown','mouseMove','mouseOut','mouseOver','mouseUp','paste','pause','play','playing','progress','rateChange','reset','scroll','seeked','seeking','stalled','submit','suspend','timeUpdate','toggle','touchCancel','touchEnd','touchMove','touchStart','transitionEnd','volumeChange','waiting','wheel'].forEach(function(event){var capitalizedEvent=event[0].toUpperCase()+event.slice(1);var onEvent='on'+capitalizedEvent;var topEvent='top'+capitalizedEvent;var type={phasedRegistrationNames:{bubbled:onEvent,captured:onEvent+'Capture'},dependencies:[topEvent]};eventTypes$4[event]=type;topLevelEventsToDispatchConfig[topEvent]=type;});var SimpleEventPlugin={eventTypes:eventTypes$4,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case'topAbort':case'topCancel':case'topCanPlay':case'topCanPlayThrough':case'topClose':case'topDurationChange':case'topEmptied':case'topEncrypted':case'topEnded':case'topError':case'topInput':case'topInvalid':case'topLoad':case'topLoadedData':case'topLoadedMetadata':case'topLoadStart':case'topPause':case'topPlay':case'topPlaying':case'topProgress':case'topRateChange':case'topReset':case'topSeeked':case'topSeeking':case'topStalled':case'topSubmit':case'topSuspend':case'topTimeUpdate':case'topToggle':case'topVolumeChange':case'topWaiting':// HTML Events
	// @see http://www.w3.org/TR/html5/index.html#events-0
	EventConstructor=SyntheticEvent_1;break;case'topKeyPress':// Firefox creates a keypress event for function keys too. This removes
	// the unwanted keypress events. Enter is however both printable and
	// non-printable. One would expect Tab to be as well (but it isn't).
	if(getEventCharCode_1(nativeEvent)===0){return null;}/* falls through */case'topKeyDown':case'topKeyUp':EventConstructor=SyntheticKeyboardEvent_1;break;case'topBlur':case'topFocus':EventConstructor=SyntheticFocusEvent_1;break;case'topClick':// Firefox creates a click event on right mouse clicks. This removes the
	// unwanted click events.
	if(nativeEvent.button===2){return null;}/* falls through */case'topDoubleClick':case'topMouseDown':case'topMouseMove':case'topMouseUp':// TODO: Disabled elements should not respond to mouse events
	/* falls through */case'topMouseOut':case'topMouseOver':case'topContextMenu':EventConstructor=SyntheticMouseEvent_1;break;case'topDrag':case'topDragEnd':case'topDragEnter':case'topDragExit':case'topDragLeave':case'topDragOver':case'topDragStart':case'topDrop':EventConstructor=SyntheticDragEvent_1;break;case'topTouchCancel':case'topTouchEnd':case'topTouchMove':case'topTouchStart':EventConstructor=SyntheticTouchEvent_1;break;case'topAnimationEnd':case'topAnimationIteration':case'topAnimationStart':EventConstructor=SyntheticAnimationEvent_1;break;case'topTransitionEnd':EventConstructor=SyntheticTransitionEvent_1;break;case'topScroll':EventConstructor=SyntheticUIEvent_1;break;case'topWheel':EventConstructor=SyntheticWheelEvent_1;break;case'topCopy':case'topCut':case'topPaste':EventConstructor=SyntheticClipboardEvent_1;break;}!EventConstructor?invariant(false,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):void 0;var event=EventConstructor.getPooled(dispatchConfig,targetInst,nativeEvent,nativeEventTarget);EventPropagators_1.accumulateTwoPhaseDispatches(event);return event;}};var SimpleEventPlugin_1=SimpleEventPlugin;var alreadyInjected=false;function inject(){if(alreadyInjected){// TODO: This is currently true because these injections are shared between
	// the client and the server package. They should be built independently
	// and not share any injection state. Then this problem will be solved.
	return;}alreadyInjected=true;ReactBrowserEventEmitter_1.injection.injectReactEventListener(ReactEventListener_1);/**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */EventPluginHub_1.injection.injectEventPluginOrder(DOMEventPluginOrder_1);EventPluginUtils_1.injection.injectComponentTree(ReactDOMComponentTree_1);/**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */EventPluginHub_1.injection.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin_1,EnterLeaveEventPlugin:EnterLeaveEventPlugin_1,ChangeEventPlugin:ChangeEventPlugin_1,SelectEventPlugin:SelectEventPlugin_1,BeforeInputEventPlugin:BeforeInputEventPlugin_1});DOMProperty_1.injection.injectDOMPropertyConfig(ARIADOMPropertyConfig_1);DOMProperty_1.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig_1);DOMProperty_1.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig_1);}var ReactDOMInjection={inject:inject};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTypeOfSideEffect
	 * 
	 */var ReactTypeOfSideEffect={NoEffect:0,// 0b0000000
	Placement:1,// 0b0000001
	Update:2,// 0b0000010
	PlacementAndUpdate:3,// 0b0000011
	Deletion:4,// 0b0000100
	ContentReset:8,// 0b0001000
	Callback:16,// 0b0010000
	Err:32,// 0b0100000
	Ref:64};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPriorityLevel
	 * 
	 */var ReactPriorityLevel={NoWork:0,// No work is pending.
	SynchronousPriority:1,// For controlled text inputs. Synchronous side-effects.
	TaskPriority:2,// Completes at the end of the current tick.
	AnimationPriority:3,// Needs to complete before the next frame.
	HighPriority:4,// Interaction that needs to complete pretty soon to feel responsive.
	LowPriority:5,// Data fetching, or result from updating stores.
	OffscreenPriority:6};var CallbackEffect=ReactTypeOfSideEffect.Callback;var NoWork=ReactPriorityLevel.NoWork;var SynchronousPriority=ReactPriorityLevel.SynchronousPriority;var TaskPriority=ReactPriorityLevel.TaskPriority;{var warning$3=warning;}// Callbacks are not validated until invocation
	// Singly linked-list of updates. When an update is scheduled, it is added to
	// the queue of the current fiber and the work-in-progress fiber. The two queues
	// are separate but they share a persistent structure.
	//
	// During reconciliation, updates are removed from the work-in-progress fiber,
	// but they remain on the current fiber. That ensures that if a work-in-progress
	// is aborted, the aborted updates are recovered by cloning from current.
	//
	// The work-in-progress queue is always a subset of the current queue.
	//
	// When the tree is committed, the work-in-progress becomes the current.
	function comparePriority(a,b){// When comparing update priorities, treat sync and Task work as equal.
	// TODO: Could we avoid the need for this by always coercing sync priority
	// to Task when scheduling an update?
	if((a===TaskPriority||a===SynchronousPriority)&&(b===TaskPriority||b===SynchronousPriority)){return 0;}if(a===NoWork&&b!==NoWork){return-255;}if(a!==NoWork&&b===NoWork){return 255;}return a-b;}// Ensures that a fiber has an update queue, creating a new one if needed.
	// Returns the new or existing queue.
	function ensureUpdateQueue(fiber){if(fiber.updateQueue!==null){// We already have an update queue.
	return fiber.updateQueue;}var queue=void 0;{queue={first:null,last:null,hasForceUpdate:false,callbackList:null,isProcessing:false};}fiber.updateQueue=queue;return queue;}// Clones an update queue from a source fiber onto its alternate.
	function cloneUpdateQueue(current,workInProgress){var currentQueue=current.updateQueue;if(currentQueue===null){// The source fiber does not have an update queue.
	workInProgress.updateQueue=null;return null;}// If the alternate already has a queue, reuse the previous object.
	var altQueue=workInProgress.updateQueue!==null?workInProgress.updateQueue:{};altQueue.first=currentQueue.first;altQueue.last=currentQueue.last;// These fields are invalid by the time we clone from current. Reset them.
	altQueue.hasForceUpdate=false;altQueue.callbackList=null;altQueue.isProcessing=false;workInProgress.updateQueue=altQueue;return altQueue;}var cloneUpdateQueue_1=cloneUpdateQueue;function cloneUpdate(update){return{priorityLevel:update.priorityLevel,partialState:update.partialState,callback:update.callback,isReplace:update.isReplace,isForced:update.isForced,isTopLevelUnmount:update.isTopLevelUnmount,next:null};}function insertUpdateIntoQueue(queue,update,insertAfter,insertBefore){if(insertAfter!==null){insertAfter.next=update;}else{// This is the first item in the queue.
	update.next=queue.first;queue.first=update;}if(insertBefore!==null){update.next=insertBefore;}else{// This is the last item in the queue.
	queue.last=update;}}// Returns the update after which the incoming update should be inserted into
	// the queue, or null if it should be inserted at beginning.
	function findInsertionPosition(queue,update){var priorityLevel=update.priorityLevel;var insertAfter=null;var insertBefore=null;if(queue.last!==null&&comparePriority(queue.last.priorityLevel,priorityLevel)<=0){// Fast path for the common case where the update should be inserted at
	// the end of the queue.
	insertAfter=queue.last;}else{insertBefore=queue.first;while(insertBefore!==null&&comparePriority(insertBefore.priorityLevel,priorityLevel)<=0){insertAfter=insertBefore;insertBefore=insertBefore.next;}}return insertAfter;}// The work-in-progress queue is a subset of the current queue (if it exists).
	// We need to insert the incoming update into both lists. However, it's possible
	// that the correct position in one list will be different from the position in
	// the other. Consider the following case:
	//
	//     Current:             3-5-6
	//     Work-in-progress:        6
	//
	// Then we receive an update with priority 4 and insert it into each list:
	//
	//     Current:             3-4-5-6
	//     Work-in-progress:        4-6
	//
	// In the current queue, the new update's `next` pointer points to the update
	// with priority 5. But in the work-in-progress queue, the pointer points to the
	// update with priority 6. Because these two queues share the same persistent
	// data structure, this won't do. (This can only happen when the incoming update
	// has higher priority than all the updates in the work-in-progress queue.)
	//
	// To solve this, in the case where the incoming update needs to be inserted
	// into two different positions, we'll make a clone of the update and insert
	// each copy into a separate queue. This forks the list while maintaining a
	// persistent structure, because the update that is added to the work-in-progress
	// is always added to the front of the list.
	//
	// However, if incoming update is inserted into the same position of both lists,
	// we shouldn't make a copy.
	//
	// If the update is cloned, it returns the cloned update.
	function insertUpdate(fiber,update){var queue1=ensureUpdateQueue(fiber);var queue2=fiber.alternate!==null?ensureUpdateQueue(fiber.alternate):null;// Warn if an update is scheduled from inside an updater function.
	{if(queue1.isProcessing||queue2!==null&&queue2.isProcessing){warning$3(false,'An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');}}// Find the insertion position in the first queue.
	var insertAfter1=findInsertionPosition(queue1,update);var insertBefore1=insertAfter1!==null?insertAfter1.next:queue1.first;if(queue2===null){// If there's no alternate queue, there's nothing else to do but insert.
	insertUpdateIntoQueue(queue1,update,insertAfter1,insertBefore1);return null;}// If there is an alternate queue, find the insertion position.
	var insertAfter2=findInsertionPosition(queue2,update);var insertBefore2=insertAfter2!==null?insertAfter2.next:queue2.first;// Now we can insert into the first queue. This must come after finding both
	// insertion positions because it mutates the list.
	insertUpdateIntoQueue(queue1,update,insertAfter1,insertBefore1);if(insertBefore1!==insertBefore2){// The insertion positions are different, so we need to clone the update and
	// insert the clone into the alternate queue.
	var update2=cloneUpdate(update);insertUpdateIntoQueue(queue2,update2,insertAfter2,insertBefore2);return update2;}else{// The insertion positions are the same, so when we inserted into the first
	// queue, it also inserted into the alternate. All we need to do is update
	// the alternate queue's `first` and `last` pointers, in case they
	// have changed.
	if(insertAfter2===null){queue2.first=update;}if(insertBefore2===null){queue2.last=null;}}return null;}function addUpdate(fiber,partialState,callback,priorityLevel){var update={priorityLevel:priorityLevel,partialState:partialState,callback:callback,isReplace:false,isForced:false,isTopLevelUnmount:false,next:null};insertUpdate(fiber,update);}var addUpdate_1=addUpdate;function addReplaceUpdate(fiber,state,callback,priorityLevel){var update={priorityLevel:priorityLevel,partialState:state,callback:callback,isReplace:true,isForced:false,isTopLevelUnmount:false,next:null};insertUpdate(fiber,update);}var addReplaceUpdate_1=addReplaceUpdate;function addForceUpdate(fiber,callback,priorityLevel){var update={priorityLevel:priorityLevel,partialState:null,callback:callback,isReplace:false,isForced:true,isTopLevelUnmount:false,next:null};insertUpdate(fiber,update);}var addForceUpdate_1=addForceUpdate;function getPendingPriority(queue){return queue.first!==null?queue.first.priorityLevel:NoWork;}var getPendingPriority_1=getPendingPriority;function addTopLevelUpdate$1(fiber,partialState,callback,priorityLevel){var isTopLevelUnmount=partialState.element===null;var update={priorityLevel:priorityLevel,partialState:partialState,callback:callback,isReplace:false,isForced:false,isTopLevelUnmount:isTopLevelUnmount,next:null};var update2=insertUpdate(fiber,update);if(isTopLevelUnmount){// Drop all updates that are lower-priority, so that the tree is not
	// remounted. We need to do this for both queues.
	var queue1=fiber.updateQueue;var queue2=fiber.alternate!==null?fiber.alternate.updateQueue:null;if(queue1!==null&&update.next!==null){update.next=null;queue1.last=update;}if(queue2!==null&&update2!==null&&update2.next!==null){update2.next=null;queue2.last=update;}}}var addTopLevelUpdate_1=addTopLevelUpdate$1;function getStateFromUpdate(update,instance,prevState,props){var partialState=update.partialState;if(typeof partialState==='function'){var updateFn=partialState;return updateFn.call(instance,prevState,props);}else{return partialState;}}function beginUpdateQueue(workInProgress,queue,instance,prevState,props,priorityLevel){{// Set this flag so we can warn if setState is called inside the update
	// function of another setState.
	queue.isProcessing=true;}queue.hasForceUpdate=false;// Applies updates with matching priority to the previous state to create
	// a new state object.
	var state=prevState;var dontMutatePrevState=true;var callbackList=null;var update=queue.first;while(update!==null&&comparePriority(update.priorityLevel,priorityLevel)<=0){// Remove each update from the queue right before it is processed. That way
	// if setState is called from inside an updater function, the new update
	// will be inserted in the correct position.
	queue.first=update.next;if(queue.first===null){queue.last=null;}var _partialState=void 0;if(update.isReplace){state=getStateFromUpdate(update,instance,state,props);dontMutatePrevState=true;}else{_partialState=getStateFromUpdate(update,instance,state,props);if(_partialState){if(dontMutatePrevState){state=_assign({},state,_partialState);}else{state=_assign(state,_partialState);}dontMutatePrevState=false;}}if(update.isForced){queue.hasForceUpdate=true;}// Second condition ignores top-level unmount callbacks if they are not the
	// last update in the queue, since a subsequent update will cause a remount.
	if(update.callback!==null&&!(update.isTopLevelUnmount&&update.next!==null)){callbackList=callbackList||[];callbackList.push(update.callback);workInProgress.effectTag|=CallbackEffect;}update=update.next;}queue.callbackList=callbackList;if(queue.first===null&&callbackList===null&&!queue.hasForceUpdate){// The queue is empty and there are no callbacks. We can reset it.
	workInProgress.updateQueue=null;}{queue.isProcessing=false;}return state;}var beginUpdateQueue_1=beginUpdateQueue;function commitCallbacks(finishedWork,queue,context){var callbackList=queue.callbackList;if(callbackList===null){return;}for(var i=0;i<callbackList.length;i++){var _callback=callbackList[i];!(typeof _callback==='function')?invariant(false,'Invalid argument passed as callback. Expected a function. Instead received: %s',_callback):void 0;_callback.call(context);}}var commitCallbacks_1=commitCallbacks;var ReactFiberUpdateQueue={cloneUpdateQueue:cloneUpdateQueue_1,addUpdate:addUpdate_1,addReplaceUpdate:addReplaceUpdate_1,addForceUpdate:addForceUpdate_1,getPendingPriority:getPendingPriority_1,addTopLevelUpdate:addTopLevelUpdate_1,beginUpdateQueue:beginUpdateQueue_1,commitCallbacks:commitCallbacks_1};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 *//**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	var ReactInstanceMap={/**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */remove:function remove(key){key._reactInternalInstance=undefined;},get:function get(key){return key._reactInternalInstance;},has:function has(key){return key._reactInternalInstance!==undefined;},set:function set(key,value){key._reactInternalInstance=value;}};var ReactInstanceMap_1=ReactInstanceMap;var ReactInternals$1=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;var ReactCurrentOwnerRollupShim=ReactInternals$1.ReactCurrentOwner;{var warning$4=warning;}var HostRoot$2=ReactTypeOfWork.HostRoot;var HostComponent$3=ReactTypeOfWork.HostComponent;var HostText$1=ReactTypeOfWork.HostText;var ClassComponent$2=ReactTypeOfWork.ClassComponent;var NoEffect=ReactTypeOfSideEffect.NoEffect;var Placement=ReactTypeOfSideEffect.Placement;var MOUNTING=1;var MOUNTED=2;var UNMOUNTED=3;function isFiberMountedImpl(fiber){var node=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
	// yet. If it is, then it will have a pending insertion effect on it.
	if((node.effectTag&Placement)!==NoEffect){return MOUNTING;}while(node['return']){node=node['return'];if((node.effectTag&Placement)!==NoEffect){return MOUNTING;}}}else{while(node['return']){node=node['return'];}}if(node.tag===HostRoot$2){// TODO: Check if this was a nested HostRoot when used with
	// renderContainerIntoSubtree.
	return MOUNTED;}// If we didn't hit the root, that means that we're in an disconnected tree
	// that has been unmounted.
	return UNMOUNTED;}var isFiberMounted$1=function isFiberMounted$1(fiber){return isFiberMountedImpl(fiber)===MOUNTED;};var isMounted=function isMounted(component){{var owner=ReactCurrentOwnerRollupShim.current;if(owner!==null&&owner.tag===ClassComponent$2){var ownerFiber=owner;var instance=ownerFiber.stateNode;warning$4(instance._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName_1(ownerFiber)||'A component');instance._warnedAboutRefsInRender=true;}}var fiber=ReactInstanceMap_1.get(component);if(!fiber){return false;}return isFiberMountedImpl(fiber)===MOUNTED;};function assertIsMounted(fiber){!(isFiberMountedImpl(fiber)===MOUNTED)?invariant(false,'Unable to find node on an unmounted component.'):void 0;}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
	var state=isFiberMountedImpl(fiber);!(state!==UNMOUNTED)?invariant(false,'Unable to find node on an unmounted component.'):void 0;if(state===MOUNTING){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
	// to see what path the root points to. On the way we may hit one of the
	// special cases and we'll deal with them.
	var a=fiber;var b=alternate;while(true){var parentA=a['return'];var parentB=parentA?parentA.alternate:null;if(!parentA||!parentB){// We're at the root.
	break;}// If both copies of the parent fiber point to the same child, we can
	// assume that the child is current. This happens when we bailout on low
	// priority: the bailed out fiber's child reuses the current child.
	if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
	assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
	assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
	// way this could possibly happen is if this was unmounted, if at all.
	invariant(false,'Unable to find node on an unmounted component.');}if(a['return']!==b['return']){// The return pointer of A and the return pointer of B point to different
	// fibers. We assume that return pointers never criss-cross, so A must
	// belong to the child set of A.return, and B must belong to the child
	// set of B.return.
	a=parentA;b=parentB;}else{// The return pointers pointer to the same fiber. We'll have to use the
	// default, slow path: scan the child sets of each parent alternate to see
	// which child belongs to which set.
	//
	// Search parent A's child set
	var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
	_child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}!didFindChild?invariant(false,'Child was not found in either parent set. This indicates a bug related to the return pointer.'):void 0;}}!(a.alternate===b)?invariant(false,'Return fibers should always be each others\' alternates.'):void 0;}// If the root is not a host container, we're in a disconnected tree. I.e.
	// unmounted.
	!(a.tag===HostRoot$2)?invariant(false,'Unable to find node on an unmounted component.'):void 0;if(a.stateNode.current===a){// We've determined that A is the current branch.
	return fiber;}// Otherwise B has to be current branch.
	return alternate;}var findCurrentFiberUsingSlowPath_1=findCurrentFiberUsingSlowPath;var findCurrentHostFiber$1=function findCurrentHostFiber$1(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
	var node=currentParent;while(true){if(node.tag===HostComponent$3||node.tag===HostText$1){return node;}else if(node.child){// TODO: If we hit a Portal, we're supposed to skip it.
	node.child['return']=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node['return']||node['return']===currentParent){return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
	// eslint-disable-next-line no-unreachable
	return null;};var ReactFiberTreeReflection={isFiberMounted:isFiberMounted$1,isMounted:isMounted,findCurrentFiberUsingSlowPath:findCurrentFiberUsingSlowPath_1,findCurrentHostFiber:findCurrentHostFiber$1};var valueStack=[];{var fiberStack=[];}var index=-1;var createCursor$1=function createCursor$1(defaultValue){return{current:defaultValue};};var isEmpty=function isEmpty(){return index===-1;};var pop$1=function pop$1(cursor,fiber){if(index<0){{warning(false,'Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){warning(false,'Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;};var push$1=function push$1(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;};var reset=function reset(){while(index>-1){valueStack[index]=null;{fiberStack[index]=null;}index--;}};var ReactFiberStack={createCursor:createCursor$1,isEmpty:isEmpty,pop:pop$1,push:push$1,reset:reset};var ReactCheckPropTypesRollupShim=React.checkPropTypes;var ReactDebugCurrentFrame$1={};{var _require$4=ReactComponentTreeHookRollupShim,getStackAddendumByID$2=_require$4.getStackAddendumByID,getCurrentStackAddendum=_require$4.getCurrentStackAddendum;var _require2=ReactFiberComponentTreeHook,getStackAddendumByWorkInProgressFiber$2=_require2.getStackAddendumByWorkInProgressFiber;// Component that is being worked on
	ReactDebugCurrentFrame$1.current=null;// Element that is being cloned or created
	ReactDebugCurrentFrame$1.element=null;ReactDebugCurrentFrame$1.getStackAddendum=function(){var stack=null;var current=ReactDebugCurrentFrame$1.current;var element=ReactDebugCurrentFrame$1.element;if(current!==null){if(typeof current==='number'){// DebugID from Stack.
	var debugID=current;stack=getStackAddendumByID$2(debugID);}else if(typeof current.tag==='number'){// This is a Fiber.
	// The stack will only be correct if this is a work in progress
	// version and we're calling it during reconciliation.
	var workInProgress=current;stack=getStackAddendumByWorkInProgressFiber$2(workInProgress);}}else if(element!==null){stack=getCurrentStackAddendum(element);}return stack;};}var ReactDebugCurrentFrame_1=ReactDebugCurrentFrame$1;var getStackAddendum$3=ReactDebugCurrentFrame_1.getStackAddendum;function checkReactTypeSpec$1(typeSpecs,values,location,componentName){ReactCheckPropTypesRollupShim(typeSpecs,values,location,componentName,getStackAddendum$3);}var checkReactTypeSpec_1=checkReactTypeSpec$1;// Trust the developer to only use this with a true check
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugFiberPerf
	 * 
	 */var ReactDebugFiberPerf=null;{var _require$6=ReactTypeOfWork,HostRoot$3=_require$6.HostRoot,HostComponent$4=_require$6.HostComponent,HostText$2=_require$6.HostText,HostPortal=_require$6.HostPortal,YieldComponent=_require$6.YieldComponent,Fragment=_require$6.Fragment;var getComponentName$4=getComponentName_1;// Prefix measurements so that it's possible to filter them.
	// Longer prefixes are hard to read in DevTools.
	var reactEmoji='\u269B';var warningEmoji='\u26D4';var supportsUserTiming=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';// Keep track of current fiber so that we know the path to unwind on pause.
	// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
	var currentFiber=null;// If we're in the middle of user code, which fiber and method is it?
	// Reusing `currentFiber` would be confusing for this because user code fiber
	// can change during commit phase too, but we don't need to unwind it (since
	// lifecycles in the commit phase don't resemble a tree).
	var currentPhase=null;var currentPhaseFiber=null;// Did lifecycle hook schedule an update? This is often a performance problem,
	// so we will keep track of it, and include it in the report.
	// Track commits caused by cascading updates.
	var isCommitting=false;var hasScheduledUpdateInCurrentCommit=false;var hasScheduledUpdateInCurrentPhase=false;var commitCountInCurrentWorkLoop=0;var effectCountInCurrentCommit=0;// During commits, we only show a measurement once per method name
	// to avoid stretch the commit phase with measurement overhead.
	var labelsInCurrentCommit=new Set();var formatMarkName=function formatMarkName(markName){return reactEmoji+' '+markName;};var formatLabel=function formatLabel(label,warning$$1){var prefix=warning$$1?warningEmoji+' ':reactEmoji+' ';var suffix=warning$$1?' Warning: '+warning$$1:'';return''+prefix+label+suffix;};var beginMark=function beginMark(markName){performance.mark(formatMarkName(markName));};var clearMark=function clearMark(markName){performance.clearMarks(formatMarkName(markName));};var endMark=function endMark(label,markName,warning$$1){var formattedMarkName=formatMarkName(markName);var formattedLabel=formatLabel(label,warning$$1);try{performance.measure(formattedLabel,formattedMarkName);}catch(err){}// If previous mark was missing for some reason, this will throw.
	// This could only happen if React crashed in an unexpected place earlier.
	// Don't pile on with more errors.
	// Clear marks immediately to avoid growing buffer.
	performance.clearMarks(formattedMarkName);performance.clearMeasures(formattedLabel);};var getFiberMarkName=function getFiberMarkName(label,debugID){return label+' (#'+debugID+')';};var getFiberLabel=function getFiberLabel(componentName,isMounted,phase){if(phase===null){// These are composite component total time measurements.
	return componentName+' ['+(isMounted?'update':'mount')+']';}else{// Composite component methods.
	return componentName+'.'+phase;}};var beginFiberMark=function beginFiberMark(fiber,phase){var componentName=getComponentName$4(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);if(isCommitting&&labelsInCurrentCommit.has(label)){// During the commit phase, we don't show duplicate labels because
	// there is a fixed overhead for every measurement, and we don't
	// want to stretch the commit phase beyond necessary.
	return false;}labelsInCurrentCommit.add(label);var markName=getFiberMarkName(label,debugID);beginMark(markName);return true;};var clearFiberMark=function clearFiberMark(fiber,phase){var componentName=getComponentName$4(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);clearMark(markName);};var endFiberMark=function endFiberMark(fiber,phase,warning$$1){var componentName=getComponentName$4(fiber)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);endMark(label,markName,warning$$1);};var shouldIgnoreFiber=function shouldIgnoreFiber(fiber){// Host components should be skipped in the timeline.
	// We could check typeof fiber.type, but does this work with RN?
	switch(fiber.tag){case HostRoot$3:case HostComponent$4:case HostText$2:case HostPortal:case YieldComponent:case Fragment:return true;default:return false;}};var clearPendingPhaseMeasurement=function clearPendingPhaseMeasurement(){if(currentPhase!==null&&currentPhaseFiber!==null){clearFiberMark(currentPhaseFiber,currentPhase);}currentPhaseFiber=null;currentPhase=null;hasScheduledUpdateInCurrentPhase=false;};var pauseTimers=function pauseTimers(){// Stops all currently active measurements so that they can be resumed
	// if we continue in a later deferred loop from the same unit of work.
	var fiber=currentFiber;while(fiber){if(fiber._debugIsCurrentlyTiming){endFiberMark(fiber,null,null);}fiber=fiber['return'];}};var resumeTimersRecursively=function resumeTimersRecursively(fiber){if(fiber['return']!==null){resumeTimersRecursively(fiber['return']);}if(fiber._debugIsCurrentlyTiming){beginFiberMark(fiber,null);}};var resumeTimers=function resumeTimers(){// Resumes all measurements that were active during the last deferred loop.
	if(currentFiber!==null){resumeTimersRecursively(currentFiber);}};ReactDebugFiberPerf={recordEffect:function recordEffect(){effectCountInCurrentCommit++;},recordScheduleUpdate:function recordScheduleUpdate(){if(isCommitting){hasScheduledUpdateInCurrentCommit=true;}if(currentPhase!==null&&currentPhase!=='componentWillMount'&&currentPhase!=='componentWillReceiveProps'){hasScheduledUpdateInCurrentPhase=true;}},startWorkTimer:function startWorkTimer(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, this is the fiber to unwind from.
	currentFiber=fiber;if(!beginFiberMark(fiber,null)){return;}fiber._debugIsCurrentlyTiming=true;},cancelWorkTimer:function cancelWorkTimer(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// Remember we shouldn't complete measurement for this fiber.
	// Otherwise flamechart will be deep even for small updates.
	fiber._debugIsCurrentlyTiming=false;clearFiberMark(fiber,null);},stopWorkTimer:function stopWorkTimer(fiber){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
	currentFiber=fiber['return'];if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;endFiberMark(fiber,null,null);},startPhaseTimer:function startPhaseTimer(fiber,phase){if(!supportsUserTiming){return;}clearPendingPhaseMeasurement();if(!beginFiberMark(fiber,phase)){return;}currentPhaseFiber=fiber;currentPhase=phase;},stopPhaseTimer:function stopPhaseTimer(){if(!supportsUserTiming){return;}if(currentPhase!==null&&currentPhaseFiber!==null){var warning$$1=hasScheduledUpdateInCurrentPhase?'Scheduled a cascading update':null;endFiberMark(currentPhaseFiber,currentPhase,warning$$1);}currentPhase=null;currentPhaseFiber=null;},startWorkLoopTimer:function startWorkLoopTimer(){if(!supportsUserTiming){return;}commitCountInCurrentWorkLoop=0;// This is top level call.
	// Any other measurements are performed within.
	beginMark('(React Tree Reconciliation)');// Resume any measurements that were in progress during the last loop.
	resumeTimers();},stopWorkLoopTimer:function stopWorkLoopTimer(){if(!supportsUserTiming){return;}var warning$$1=commitCountInCurrentWorkLoop>1?'There were cascading updates':null;commitCountInCurrentWorkLoop=0;// Pause any measurements until the next loop.
	pauseTimers();endMark('(React Tree Reconciliation)','(React Tree Reconciliation)',warning$$1);},startCommitTimer:function startCommitTimer(){if(!supportsUserTiming){return;}isCommitting=true;hasScheduledUpdateInCurrentCommit=false;labelsInCurrentCommit.clear();beginMark('(Committing Changes)');},stopCommitTimer:function stopCommitTimer(){if(!supportsUserTiming){return;}var warning$$1=null;if(hasScheduledUpdateInCurrentCommit){warning$$1='Lifecycle hook scheduled a cascading update';}else if(commitCountInCurrentWorkLoop>0){warning$$1='Caused by a cascading update in earlier commit';}hasScheduledUpdateInCurrentCommit=false;commitCountInCurrentWorkLoop++;isCommitting=false;labelsInCurrentCommit.clear();endMark('(Committing Changes)','(Committing Changes)',warning$$1);},startCommitHostEffectsTimer:function startCommitHostEffectsTimer(){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Committing Host Effects)');},stopCommitHostEffectsTimer:function stopCommitHostEffectsTimer(){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark('(Committing Host Effects: '+count+' Total)','(Committing Host Effects)',null);},startCommitLifeCyclesTimer:function startCommitLifeCyclesTimer(){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Calling Lifecycle Methods)');},stopCommitLifeCyclesTimer:function stopCommitLifeCyclesTimer(){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark('(Calling Lifecycle Methods: '+count+' Total)','(Calling Lifecycle Methods)',null);}};}var ReactDebugFiberPerf_1=ReactDebugFiberPerf;var _extends$1=_assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var isFiberMounted=ReactFiberTreeReflection.isFiberMounted;var ClassComponent$1=ReactTypeOfWork.ClassComponent;var HostRoot$1=ReactTypeOfWork.HostRoot;var createCursor=ReactFiberStack.createCursor;var pop=ReactFiberStack.pop;var push=ReactFiberStack.push;{var checkReactTypeSpec=checkReactTypeSpec_1;var ReactDebugCurrentFrame=ReactDebugCurrentFrame_1;var ReactDebugCurrentFiber$2=ReactDebugCurrentFiber_1;var _require4$2=ReactDebugFiberPerf_1,startPhaseTimer=_require4$2.startPhaseTimer,stopPhaseTimer=_require4$2.stopPhaseTimer;var warnedAboutMissingGetChildContext={};}// A cursor to the current merged context object on the stack.
	var contextStackCursor=createCursor(emptyObject);// A cursor to a boolean indicating whether the context has changed.
	var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
	// We use this to get access to the parent context after we have already
	// pushed the next context provider, and now need to merge their contexts.
	var previousContext=emptyObject;function getUnmaskedContext(workInProgress){var hasOwnContext=isContextProvider$1(workInProgress);if(hasOwnContext){// If the fiber is a context provider itself, when we read its context
	// we have already pushed its own child context on the stack. A context
	// provider should not "see" its own child context. Therefore we read the
	// previous (parent) context instead for a context provider.
	return previousContext;}return contextStackCursor.current;}var getUnmaskedContext_1=getUnmaskedContext;function cacheContext(workInProgress,unmaskedContext,maskedContext){var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}var cacheContext_1=cacheContext;var getMaskedContext=function getMaskedContext(workInProgress,unmaskedContext){var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyObject;}// Avoid recreating masked context unless unmasked context has changed.
	// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
	// This may trigger infinite loops if componentWillReceiveProps calls setState.
	var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentName_1(workInProgress)||'Unknown';ReactDebugCurrentFrame.current=workInProgress;checkReactTypeSpec(contextTypes,context,'context',name);ReactDebugCurrentFrame.current=null;}// Cache unmasked context so we can avoid recreating masked context unless necessary.
	// Context is created before the class component is instantiated so check for instance.
	if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;};var hasContextChanged=function hasContextChanged(){return didPerformWorkStackCursor.current;};function isContextConsumer(fiber){return fiber.tag===ClassComponent$1&&fiber.type.contextTypes!=null;}var isContextConsumer_1=isContextConsumer;function isContextProvider$1(fiber){return fiber.tag===ClassComponent$1&&fiber.type.childContextTypes!=null;}var isContextProvider_1=isContextProvider$1;function popContextProvider(fiber){if(!isContextProvider$1(fiber)){return;}pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}var popContextProvider_1=popContextProvider;var pushTopLevelContextObject=function pushTopLevelContextObject(fiber,context,didChange){!(contextStackCursor.cursor==null)?invariant(false,'Unexpected context found on stack'):void 0;push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);};function processChildContext$1(fiber,parentContext,isReconciling){var instance=fiber.stateNode;var childContextTypes=fiber.type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
	// It has only been added in Fiber to match the (unintentional) behavior in Stack.
	if(typeof instance.getChildContext!=='function'){{var componentName=getComponentName_1(fiber)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;warning(false,'%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext=void 0;{ReactDebugCurrentFiber$2.phase='getChildContext';startPhaseTimer(fiber,'getChildContext');childContext=instance.getChildContext();stopPhaseTimer();ReactDebugCurrentFiber$2.phase=null;}for(var contextKey in childContext){!(contextKey in childContextTypes)?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',getComponentName_1(fiber)||'Unknown',contextKey):void 0;}{var name=getComponentName_1(fiber)||'Unknown';// We can only provide accurate element stacks if we pass work-in-progress tree
	// during the begin or complete phase. However currently this function is also
	// called from unstable_renderSubtree legacy implementation. In this case it unsafe to
	// assume anything about the given fiber. We won't pass it down if we aren't sure.
	// TODO: remove this hack when we delete unstable_renderSubtree in Fiber.
	var workInProgress=isReconciling?fiber:null;ReactDebugCurrentFrame.current=workInProgress;checkReactTypeSpec(childContextTypes,childContext,'child context',name);ReactDebugCurrentFrame.current=null;}return _extends$1({},parentContext,childContext);}var processChildContext_1=processChildContext$1;var pushContextProvider=function pushContextProvider(workInProgress){if(!isContextProvider$1(workInProgress)){return false;}var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
	// If the instance does not exist yet, we will push null at first,
	// and replace it on the stack later when invalidating the context.
	var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyObject;// Remember the parent context so we can merge with it later.
	previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,false,workInProgress);return true;};var invalidateContextProvider=function invalidateContextProvider(workInProgress){var instance=workInProgress.stateNode;!instance?invariant(false,'Expected to have an instance by this point.'):void 0;// Merge parent and own context.
	var mergedContext=processChildContext$1(workInProgress,previousContext,true);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
	// It is important to unwind the context in the reverse order.
	pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
	push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,true,workInProgress);};var resetContext=function resetContext(){previousContext=emptyObject;contextStackCursor.current=emptyObject;didPerformWorkStackCursor.current=false;};var findCurrentUnmaskedContext$1=function findCurrentUnmaskedContext$1(fiber){// Currently this is only used with renderSubtreeIntoContainer; not sure if it
	// makes sense elsewhere
	!(isFiberMounted(fiber)&&fiber.tag===ClassComponent$1)?invariant(false,'Expected subtree parent to be a mounted class component'):void 0;var node=fiber;while(node.tag!==HostRoot$1){if(isContextProvider$1(node)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}var parent=node['return'];!parent?invariant(false,'Found unexpected detached subtree parent'):void 0;node=parent;}return node.stateNode.context;};var ReactFiberContext={getUnmaskedContext:getUnmaskedContext_1,cacheContext:cacheContext_1,getMaskedContext:getMaskedContext,hasContextChanged:hasContextChanged,isContextConsumer:isContextConsumer_1,isContextProvider:isContextProvider_1,popContextProvider:popContextProvider_1,pushTopLevelContextObject:pushTopLevelContextObject,processChildContext:processChildContext_1,pushContextProvider:pushContextProvider,invalidateContextProvider:invalidateContextProvider,resetContext:resetContext,findCurrentUnmaskedContext:findCurrentUnmaskedContext$1};var IndeterminateComponent$1=ReactTypeOfWork.IndeterminateComponent;var ClassComponent$3=ReactTypeOfWork.ClassComponent;var HostRoot$4=ReactTypeOfWork.HostRoot;var HostComponent$5=ReactTypeOfWork.HostComponent;var HostText$3=ReactTypeOfWork.HostText;var HostPortal$1=ReactTypeOfWork.HostPortal;var CoroutineComponent=ReactTypeOfWork.CoroutineComponent;var YieldComponent$1=ReactTypeOfWork.YieldComponent;var Fragment$1=ReactTypeOfWork.Fragment;var NoWork$1=ReactPriorityLevel.NoWork;var NoEffect$1=ReactTypeOfSideEffect.NoEffect;var cloneUpdateQueue$1=ReactFiberUpdateQueue.cloneUpdateQueue;{var getComponentName$5=getComponentName_1;}// A Fiber is work on a Component that needs to be done or was done. There can
	// be more than one per component.
	{var debugCounter=1;}// This is a constructor of a POJO instead of a constructor function for a few
	// reasons:
	// 1) Nobody should add any instance methods on this. Instance methods can be
	//    more difficult to predict when they get optimized and they are almost
	//    never inlined properly in static compilers.
	// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
	//    always know when it is a fiber.
	// 3) We can easily go from a createFiber call to calling a constructor if that
	//    is faster. The opposite is not true.
	// 4) We might want to experiment with using numeric keys since they are easier
	//    to optimize in a non-JIT environment.
	// 5) It should be easy to port this to a C struct and keep a C implementation
	//    compatible.
	var createFiber=function createFiber(tag,key){var fiber={// Instance
	tag:tag,key:key,type:null,stateNode:null,// Fiber
	'return':null,child:null,sibling:null,index:0,ref:null,pendingProps:null,memoizedProps:null,updateQueue:null,memoizedState:null,effectTag:NoEffect$1,nextEffect:null,firstEffect:null,lastEffect:null,pendingWorkPriority:NoWork$1,progressedPriority:NoWork$1,progressedChild:null,progressedFirstDeletion:null,progressedLastDeletion:null,alternate:null};{fiber._debugID=debugCounter++;fiber._debugSource=null;fiber._debugOwner=null;fiber._debugIsCurrentlyTiming=false;if(typeof Object.preventExtensions==='function'){Object.preventExtensions(fiber);}}return fiber;};function shouldConstruct(Component){return!!(Component.prototype&&Component.prototype.isReactComponent);}// This is used to create an alternate fiber to do work on.
	// TODO: Rename to createWorkInProgressFiber or something like that.
	var cloneFiber=function cloneFiber(fiber,priorityLevel){// We clone to get a work in progress. That means that this fiber is the
	// current. To make it safe to reuse that fiber later on as work in progress
	// we need to reset its work in progress flag now. We don't have an
	// opportunity to do this earlier since we don't traverse the tree when
	// the work in progress tree becomes the current tree.
	// fiber.progressedPriority = NoWork;
	// fiber.progressedChild = null;
	// We use a double buffering pooling technique because we know that we'll only
	// ever need at most two versions of a tree. We pool the "other" unused node
	// that we're free to reuse. This is lazily created to avoid allocating extra
	// objects for things that are never updated. It also allow us to reclaim the
	// extra memory if needed.
	var alt=fiber.alternate;if(alt!==null){// If we clone, then we do so from the "current" state. The current state
	// can't have any side-effects that are still valid so we reset just to be
	// sure.
	alt.effectTag=NoEffect$1;alt.nextEffect=null;alt.firstEffect=null;alt.lastEffect=null;}else{// This should not have an alternate already
	alt=createFiber(fiber.tag,fiber.key);alt.type=fiber.type;alt.progressedChild=fiber.progressedChild;alt.progressedPriority=fiber.progressedPriority;alt.alternate=fiber;fiber.alternate=alt;}alt.stateNode=fiber.stateNode;alt.child=fiber.child;alt.sibling=fiber.sibling;// This should always be overridden. TODO: null
	alt.index=fiber.index;// This should always be overridden.
	alt.ref=fiber.ref;// pendingProps is here for symmetry but is unnecessary in practice for now.
	// TODO: Pass in the new pendingProps as an argument maybe?
	alt.pendingProps=fiber.pendingProps;cloneUpdateQueue$1(fiber,alt);alt.pendingWorkPriority=priorityLevel;alt.memoizedProps=fiber.memoizedProps;alt.memoizedState=fiber.memoizedState;{alt._debugID=fiber._debugID;alt._debugSource=fiber._debugSource;alt._debugOwner=fiber._debugOwner;}return alt;};var createHostRootFiber$1=function createHostRootFiber$1(){var fiber=createFiber(HostRoot$4,null);return fiber;};var createFiberFromElement=function createFiberFromElement(element,priorityLevel){var owner=null;{owner=element._owner;}var fiber=createFiberFromElementType(element.type,element.key,owner);fiber.pendingProps=element.props;fiber.pendingWorkPriority=priorityLevel;{fiber._debugSource=element._source;fiber._debugOwner=element._owner;}return fiber;};var createFiberFromFragment=function createFiberFromFragment(elements,priorityLevel){// TODO: Consider supporting keyed fragments. Technically, we accidentally
	// support that in the existing React.
	var fiber=createFiber(Fragment$1,null);fiber.pendingProps=elements;fiber.pendingWorkPriority=priorityLevel;return fiber;};var createFiberFromText=function createFiberFromText(content,priorityLevel){var fiber=createFiber(HostText$3,null);fiber.pendingProps=content;fiber.pendingWorkPriority=priorityLevel;return fiber;};function createFiberFromElementType(type,key,debugOwner){var fiber=void 0;if(typeof type==='function'){fiber=shouldConstruct(type)?createFiber(ClassComponent$3,key):createFiber(IndeterminateComponent$1,key);fiber.type=type;}else if(typeof type==='string'){fiber=createFiber(HostComponent$5,key);fiber.type=type;}else if((typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type!==null&&typeof type.tag==='number'){// Currently assumed to be a continuation and therefore is a fiber already.
	// TODO: The yield system is currently broken for updates in some cases.
	// The reified yield stores a fiber, but we don't know which fiber that is;
	// the current or a workInProgress? When the continuation gets rendered here
	// we don't know if we can reuse that fiber or if we need to clone it.
	// There is probably a clever way to restructure this.
	fiber=type;}else{var info='';{if(type===undefined||(typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in.";}var ownerName=debugOwner?getComponentName$5(debugOwner):null;if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}}invariant(false,'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',type==null?type:typeof type==='undefined'?'undefined':_typeof(type),info);}return fiber;}var createFiberFromElementType_1=createFiberFromElementType;var createFiberFromCoroutine=function createFiberFromCoroutine(coroutine,priorityLevel){var fiber=createFiber(CoroutineComponent,coroutine.key);fiber.type=coroutine.handler;fiber.pendingProps=coroutine;fiber.pendingWorkPriority=priorityLevel;return fiber;};var createFiberFromYield=function createFiberFromYield(yieldNode,priorityLevel){var fiber=createFiber(YieldComponent$1,null);return fiber;};var createFiberFromPortal=function createFiberFromPortal(portal,priorityLevel){var fiber=createFiber(HostPortal$1,portal.key);fiber.pendingProps=portal.children||[];fiber.pendingWorkPriority=priorityLevel;fiber.stateNode={containerInfo:portal.containerInfo,implementation:portal.implementation};return fiber;};var ReactFiber={cloneFiber:cloneFiber,createHostRootFiber:createHostRootFiber$1,createFiberFromElement:createFiberFromElement,createFiberFromFragment:createFiberFromFragment,createFiberFromText:createFiberFromText,createFiberFromElementType:createFiberFromElementType_1,createFiberFromCoroutine:createFiberFromCoroutine,createFiberFromYield:createFiberFromYield,createFiberFromPortal:createFiberFromPortal};var createHostRootFiber=ReactFiber.createHostRootFiber;var createFiberRoot$1=function createFiberRoot$1(containerInfo){// Cyclic construction. This cheats the type system right now because
	// stateNode is any.
	var uninitializedFiber=createHostRootFiber();var root={current:uninitializedFiber,containerInfo:containerInfo,isScheduled:false,nextScheduledRoot:null,context:null,pendingContext:null};uninitializedFiber.stateNode=root;return root;};var ReactFiberRoot={createFiberRoot:createFiberRoot$1};var defaultShowDialog=function defaultShowDialog(){return true;};var showDialog=defaultShowDialog;function logCapturedError$1(capturedError){var logError=showDialog(capturedError);// Allow injected showDialog() to prevent default console.error logging.
	// This enables renderers like ReactNative to better manage redbox behavior.
	if(logError===false){return;}{var componentName=capturedError.componentName,componentStack=capturedError.componentStack,error=capturedError.error,errorBoundaryName=capturedError.errorBoundaryName,errorBoundaryFound=capturedError.errorBoundaryFound,willRetry=capturedError.willRetry;var message=error.message,name=error.name,stack=error.stack;var errorSummary=message?name+': '+message:name;var componentNameMessage=componentName?'React caught an error thrown by '+componentName+'.':'React caught an error thrown by one of your components.';// Error stack varies by browser, eg:
	// Chrome prepends the Error name and type.
	// Firefox, Safari, and IE don't indent the stack lines.
	// Format it in a consistent way for error logging.
	var formattedCallStack=stack.slice(0,errorSummary.length)===errorSummary?stack.slice(errorSummary.length):stack;formattedCallStack=formattedCallStack.trim().split('\n').map(function(line){return'\n    '+line.trim();}).join();var errorBoundaryMessage=void 0;// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
	if(errorBoundaryFound&&errorBoundaryName){if(willRetry){errorBoundaryMessage='React will try to recreate this component tree from scratch '+('using the error boundary you provided, '+errorBoundaryName+'.');}else{errorBoundaryMessage='This error was initially handled by the error boundary '+errorBoundaryName+'. '+'Recreating the tree from scratch failed so React will unmount the tree.';}}else{// TODO Link to unstable_handleError() documentation once it exists.
	errorBoundaryMessage='Consider adding an error boundary to your tree to customize error handling behavior.';}console.error(componentNameMessage+' You should fix this error in your code. '+errorBoundaryMessage+'\n\n'+(errorSummary+'\n\n')+('The error is located at: '+componentStack+'\n\n')+('The error was thrown at: '+formattedCallStack));}}var injection$1={/**
	   * Display custom dialog for lifecycle errors.
	   * Return false to prevent default behavior of logging to console.error.
	   */injectDialog:function injectDialog(fn){!(showDialog===defaultShowDialog)?invariant(false,'The custom dialog was already injected.'):void 0;!(typeof fn==='function')?invariant(false,'Injected showDialog() must be a function.'):void 0;showDialog=fn;}};var logCapturedError_1=logCapturedError$1;var ReactFiberErrorLogger={injection:injection$1,logCapturedError:logCapturedError_1};/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementSymbol
	 * 
	 */// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var ReactElementSymbol=REACT_ELEMENT_TYPE;/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCoroutine
	 * 
	 */// The Symbol used to tag the special React types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_COROUTINE_TYPE$1;var REACT_YIELD_TYPE$1;if(typeof Symbol==='function'&&Symbol['for']){REACT_COROUTINE_TYPE$1=Symbol['for']('react.coroutine');REACT_YIELD_TYPE$1=Symbol['for']('react.yield');}else{REACT_COROUTINE_TYPE$1=0xeac8;REACT_YIELD_TYPE$1=0xeac9;}var createCoroutine=function createCoroutine(children,handler,props){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var coroutine={// This tag allow us to uniquely identify this as a React Coroutine
	$$typeof:REACT_COROUTINE_TYPE$1,key:key==null?null:''+key,children:children,handler:handler,props:props};{// TODO: Add _store property for marking this as validated.
	if(Object.freeze){Object.freeze(coroutine.props);Object.freeze(coroutine);}}return coroutine;};var createYield=function createYield(value){var yieldNode={// This tag allow us to uniquely identify this as a React Yield
	$$typeof:REACT_YIELD_TYPE$1,value:value};{// TODO: Add _store property for marking this as validated.
	if(Object.freeze){Object.freeze(yieldNode);}}return yieldNode;};/**
	 * Verifies the object is a coroutine object.
	 */var isCoroutine=function isCoroutine(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_COROUTINE_TYPE$1;};/**
	 * Verifies the object is a yield object.
	 */var isYield=function isYield(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_YIELD_TYPE$1;};var REACT_YIELD_TYPE_1=REACT_YIELD_TYPE$1;var REACT_COROUTINE_TYPE_1=REACT_COROUTINE_TYPE$1;var ReactCoroutine={createCoroutine:createCoroutine,createYield:createYield,isCoroutine:isCoroutine,isYield:isYield,REACT_YIELD_TYPE:REACT_YIELD_TYPE_1,REACT_COROUTINE_TYPE:REACT_COROUTINE_TYPE_1};/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPortal
	 * 
	 */// The Symbol used to tag the special React types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_PORTAL_TYPE$1=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.portal')||0xeaca;var createPortal=function createPortal(children,containerInfo,// TODO: figure out the API for cross-renderer implementation.
	implementation){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;return{// This tag allow us to uniquely identify this as a React Portal
	$$typeof:REACT_PORTAL_TYPE$1,key:key==null?null:''+key,children:children,containerInfo:containerInfo,implementation:implementation};};/**
	 * Verifies the object is a portal object.
	 */var isPortal=function isPortal(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_PORTAL_TYPE$1;};var REACT_PORTAL_TYPE_1=REACT_PORTAL_TYPE$1;var ReactPortal={createPortal:createPortal,isPortal:isPortal,REACT_PORTAL_TYPE:REACT_PORTAL_TYPE_1};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 *//* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}var getIteratorFn_1=getIteratorFn;var REACT_COROUTINE_TYPE=ReactCoroutine.REACT_COROUTINE_TYPE;var REACT_YIELD_TYPE=ReactCoroutine.REACT_YIELD_TYPE;var REACT_PORTAL_TYPE=ReactPortal.REACT_PORTAL_TYPE;{var _require3$2=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$1=_require3$2.getCurrentFiberStackAddendum;var getComponentName$6=getComponentName_1;var warning$7=warning;var didWarnAboutMaps=false;}var cloneFiber$2=ReactFiber.cloneFiber;var createFiberFromElement$1=ReactFiber.createFiberFromElement;var createFiberFromFragment$1=ReactFiber.createFiberFromFragment;var createFiberFromText$1=ReactFiber.createFiberFromText;var createFiberFromCoroutine$1=ReactFiber.createFiberFromCoroutine;var createFiberFromYield$1=ReactFiber.createFiberFromYield;var createFiberFromPortal$1=ReactFiber.createFiberFromPortal;var isArray=Array.isArray;var FunctionalComponent$2=ReactTypeOfWork.FunctionalComponent;var ClassComponent$6=ReactTypeOfWork.ClassComponent;var HostText$5=ReactTypeOfWork.HostText;var HostPortal$4=ReactTypeOfWork.HostPortal;var CoroutineComponent$2=ReactTypeOfWork.CoroutineComponent;var YieldComponent$3=ReactTypeOfWork.YieldComponent;var Fragment$3=ReactTypeOfWork.Fragment;var NoEffect$3=ReactTypeOfSideEffect.NoEffect;var Placement$3=ReactTypeOfSideEffect.Placement;var Deletion$1=ReactTypeOfSideEffect.Deletion;function coerceRef(current,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'){if(element._owner){var owner=element._owner;var inst=void 0;if(owner){if(typeof owner.tag==='number'){var ownerFiber=owner;!(ownerFiber.tag===ClassComponent$6)?invariant(false,'Stateless function components cannot have refs.'):void 0;inst=ownerFiber.stateNode;}else{// Stack
	inst=owner.getPublicInstance();}}!inst?invariant(false,'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.',mixedRef):void 0;var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
	if(current!==null&&current.ref!==null&&current.ref._stringRef===stringRef){return current.ref;}var ref=function ref(value){var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;if(value===null){delete refs[stringRef];}else{refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){if(returnFiber.type!=='textarea'){var addendum='';{addendum=' If you meant to render a collection of children, use an array '+'instead.';var owner=ReactCurrentOwnerRollupShim.owner||returnFiber._debugOwner;if(owner&&typeof owner.tag==='number'){var name=getComponentName$6(owner);if(name){addendum+='\n\nCheck the render method of `'+name+'`.';}}}invariant(false,'Objects are not valid as a React child (found: %s).%s',Object.prototype.toString.call(newChild)==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':newChild,addendum);}}// This wrapper function exists because I expect to clone the code in each path
	// to be able to optimize each path individually by branching early. This needs
	// a compiler or we can do it manually. Helpers that don't need this branching
	// live outside of this function.
	function ChildReconciler(shouldClone,shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
	return;}if(!shouldClone){// When we're reconciling in place we have a work in progress copy. We
	// actually want the current copy. If there is no current copy, then we
	// don't need to track deletion side-effects.
	if(childToDelete.alternate===null){return;}childToDelete=childToDelete.alternate;}// Deletions are added in reversed order so we add it to the front.
	var last=returnFiber.progressedLastDeletion;if(last!==null){last.nextEffect=childToDelete;returnFiber.progressedLastDeletion=childToDelete;}else{returnFiber.progressedFirstDeletion=returnFiber.progressedLastDeletion=childToDelete;}childToDelete.nextEffect=null;childToDelete.effectTag=Deletion$1;}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
	return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
	// assuming that after the first child we've already added everything.
	var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
	// keys quickly. Implicit (null) keys get added to this set with their index
	var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else{existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,priority){// We currently set sibling to null and index to 0 here because it is easy
	// to forget to do before returning it. E.g. for the single child case.
	if(shouldClone){var clone=cloneFiber$2(fiber,priority);clone.index=0;clone.sibling=null;return clone;}else{// We override the pending priority even if it is higher, because if
	// we're reconciling at a lower priority that means that this was
	// down-prioritized.
	fiber.pendingWorkPriority=priority;fiber.effectTag=NoEffect$3;fiber.index=0;fiber.sibling=null;return fiber;}}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// Noop.
	return lastPlacedIndex;}var current=newFiber.alternate;if(current!==null){var oldIndex=current.index;if(oldIndex<lastPlacedIndex){// This is a move.
	newFiber.effectTag=Placement$3;return lastPlacedIndex;}else{// This item can stay in place.
	return oldIndex;}}else{// This is an insertion.
	newFiber.effectTag=Placement$3;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
	// placement for inserting new children.
	if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.effectTag=Placement$3;}return newFiber;}function updateTextNode(returnFiber,current,textContent,priority){if(current===null||current.tag!==HostText$5){// Insert
	var created=createFiberFromText$1(textContent,priority);created['return']=returnFiber;return created;}else{// Update
	var existing=useFiber(current,priority);existing.pendingProps=textContent;existing['return']=returnFiber;return existing;}}function updateElement(returnFiber,current,element,priority){if(current===null||current.type!==element.type){// Insert
	var created=createFiberFromElement$1(element,priority);created.ref=coerceRef(current,element);created['return']=returnFiber;return created;}else{// Move based on index
	var existing=useFiber(current,priority);existing.ref=coerceRef(current,element);existing.pendingProps=element.props;existing['return']=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}}function updateCoroutine(returnFiber,current,coroutine,priority){// TODO: Should this also compare handler to determine whether to reuse?
	if(current===null||current.tag!==CoroutineComponent$2){// Insert
	var created=createFiberFromCoroutine$1(coroutine,priority);created['return']=returnFiber;return created;}else{// Move based on index
	var existing=useFiber(current,priority);existing.pendingProps=coroutine;existing['return']=returnFiber;return existing;}}function updateYield(returnFiber,current,yieldNode,priority){if(current===null||current.tag!==YieldComponent$3){// Insert
	var created=createFiberFromYield$1(yieldNode,priority);created.type=yieldNode.value;created['return']=returnFiber;return created;}else{// Move based on index
	var existing=useFiber(current,priority);existing.type=yieldNode.value;existing['return']=returnFiber;return existing;}}function updatePortal(returnFiber,current,portal,priority){if(current===null||current.tag!==HostPortal$4||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){// Insert
	var created=createFiberFromPortal$1(portal,priority);created['return']=returnFiber;return created;}else{// Update
	var existing=useFiber(current,priority);existing.pendingProps=portal.children||[];existing['return']=returnFiber;return existing;}}function updateFragment(returnFiber,current,fragment,priority){if(current===null||current.tag!==Fragment$3){// Insert
	var created=createFiberFromFragment$1(fragment,priority);created['return']=returnFiber;return created;}else{// Update
	var existing=useFiber(current,priority);existing.pendingProps=fragment;existing['return']=returnFiber;return existing;}}function createChild(returnFiber,newChild,priority){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes doesn't have keys. If the previous node is implicitly keyed
	// we can continue to replace it without aborting even if it is not a text
	// node.
	var created=createFiberFromText$1(''+newChild,priority);created['return']=returnFiber;return created;}if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null){switch(newChild.$$typeof){case ReactElementSymbol:{var _created=createFiberFromElement$1(newChild,priority);_created.ref=coerceRef(null,newChild);_created['return']=returnFiber;return _created;}case REACT_COROUTINE_TYPE:{var _created2=createFiberFromCoroutine$1(newChild,priority);_created2['return']=returnFiber;return _created2;}case REACT_YIELD_TYPE:{var _created3=createFiberFromYield$1(newChild,priority);_created3.type=newChild.value;_created3['return']=returnFiber;return _created3;}case REACT_PORTAL_TYPE:{var _created4=createFiberFromPortal$1(newChild,priority);_created4['return']=returnFiber;return _created4;}}if(isArray(newChild)||getIteratorFn_1(newChild)){var _created5=createFiberFromFragment$1(newChild,priority);_created5['return']=returnFiber;return _created5;}throwOnInvalidObjectType(returnFiber,newChild);}return null;}function updateSlot(returnFiber,oldFiber,newChild,priority){// Update the fiber if the keys match, otherwise return null.
	var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes doesn't have keys. If the previous node is implicitly keyed
	// we can continue to replace it without aborting even if it is not a text
	// node.
	if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,priority);}if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null){switch(newChild.$$typeof){case ReactElementSymbol:{if(newChild.key===key){return updateElement(returnFiber,oldFiber,newChild,priority);}else{return null;}}case REACT_COROUTINE_TYPE:{if(newChild.key===key){return updateCoroutine(returnFiber,oldFiber,newChild,priority);}else{return null;}}case REACT_YIELD_TYPE:{// Yields doesn't have keys. If the previous node is implicitly keyed
	// we can continue to replace it without aborting even if it is not a
	// yield.
	if(key===null){return updateYield(returnFiber,oldFiber,newChild,priority);}else{return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,priority);}else{return null;}}}if(isArray(newChild)||getIteratorFn_1(newChild)){// Fragments doesn't have keys so if the previous key is implicit we can
	// update it.
	if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,priority);}throwOnInvalidObjectType(returnFiber,newChild);}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,priority){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes doesn't have keys, so we neither have to check the old nor
	// new node for the key. If both are text nodes, they match.
	var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,priority);}if((typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null){switch(newChild.$$typeof){case ReactElementSymbol:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateElement(returnFiber,_matchedFiber,newChild,priority);}case REACT_COROUTINE_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateCoroutine(returnFiber,_matchedFiber2,newChild,priority);}case REACT_YIELD_TYPE:{// Yields doesn't have keys, so we neither have to check the old nor
	// new node for the key. If both are yields, they match.
	var _matchedFiber3=existingChildren.get(newIdx)||null;return updateYield(returnFiber,_matchedFiber3,newChild,priority);}case REACT_PORTAL_TYPE:{var _matchedFiber4=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber4,newChild,priority);}}if(isArray(newChild)||getIteratorFn_1(newChild)){var _matchedFiber5=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber5,newChild,priority);}throwOnInvalidObjectType(returnFiber,newChild);}return null;}function warnOnDuplicateKey(child,knownKeys){{if((typeof child==='undefined'?'undefined':_typeof(child))!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case ReactElementSymbol:case REACT_COROUTINE_TYPE:case REACT_PORTAL_TYPE:var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}warning$7(false,'Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, '+'only the first child will be used.%s',key,getCurrentFiberStackAddendum$1());break;default:break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,priority){// This algorithm can't optimize by searching from boths ends since we
	// don't have backpointers on fibers. I'm trying to see how far we can get
	// with that model. If it ends up not being worth the tradeoffs, we can
	// add it later.
	// Even with a two ended optimization, we'd want to optimize for the case
	// where there are few changes and brute force the comparison instead of
	// going for the Map. It'd like to explore hitting that path first in
	// forward-only mode and only go for the Map once we notice that we need
	// lots of look ahead. This doesn't handle reversal as well as two ended
	// search but that's unusual. Besides, for the two ended optimization to
	// work on Iterables, we'd need to copy the whole set.
	// In this first iteration, we'll just live with hitting the bad case
	// (adding everything to a Map) in for every insert/move.
	// If you change this code, also update reconcileChildrenIterator() which
	// uses the same algorithm.
	{// First, validate keys.
	var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnDuplicateKey(child,knownKeys);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],priority);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
	// unfortunate because it triggers the slow path all the time. We need
	// a better way to communicate whether this was a miss or null,
	// boolean, undefined, etc.
	if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
	// need to delete the existing child.
	deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
	resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
	// I.e. if we had null values before, then we want to defer this
	// for each null value. However, we also don't want to call updateSlot
	// with the previous one.
	previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
	deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
	// since the rest will all be insertions.
	for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],priority);if(!_newFiber){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
	resultingFirstChild=_newFiber;}else{previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
	var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
	for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],priority);if(_newFiber2){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
	// current, that means that we reused the fiber. We need to delete
	// it from the child list so that we don't add it to the deletion
	// list.
	existingChildren['delete'](_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else{previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
	// to add them to the deletion list.
	existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,priority){// This is the same implementation as reconcileChildrenArray(),
	// but using the iterator instead.
	var iteratorFn=getIteratorFn_1(newChildrenIterable);!(typeof iteratorFn==='function')?invariant(false,'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'):void 0;{// Warn about using Maps as children
	if(typeof newChildrenIterable.entries==='function'){var possibleMap=newChildrenIterable;if(possibleMap.entries===iteratorFn){var mapsAsChildrenAddendum='';var owner=ReactCurrentOwnerRollupShim.owner||returnFiber._debugOwner;if(owner&&typeof owner.tag==='number'){var mapsAsChildrenOwnerName=getComponentName$6(owner);if(mapsAsChildrenOwnerName){mapsAsChildrenAddendum='\n\nCheck the render method of `'+mapsAsChildrenOwnerName+'`.';}}warning$7(didWarnAboutMaps,'Using Maps as children is unsupported and will likely yield '+'unexpected results. Convert it to a sequence/iterable of keyed '+'ReactElements instead.%s',mapsAsChildrenAddendum);didWarnAboutMaps=true;}}// First, validate keys.
	// We'll get a different iterator later for the main pass.
	var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnDuplicateKey(child,knownKeys);}}}var newChildren=iteratorFn.call(newChildrenIterable);!(newChildren!=null)?invariant(false,'An iterable object provided no iterator.'):void 0;var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,priority);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
	// unfortunate because it triggers the slow path all the time. We need
	// a better way to communicate whether this was a miss or null,
	// boolean, undefined, etc.
	if(!oldFiber){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
	// need to delete the existing child.
	deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
	resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
	// I.e. if we had null values before, then we want to defer this
	// for each null value. However, we also don't want to call updateSlot
	// with the previous one.
	previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
	deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
	// since the rest will all be insertions.
	for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,priority);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
	resultingFirstChild=_newFiber3;}else{previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
	var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
	for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,priority);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
	// current, that means that we reused the fiber. We need to delete
	// it from the child list so that we don't add it to the deletion
	// list.
	existingChildren['delete'](_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else{previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
	// to add them to the deletion list.
	existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,priority){// There's no need to check for keys on text nodes since we don't have a
	// way to define them.
	if(currentFirstChild!==null&&currentFirstChild.tag===HostText$5){// We already have an existing node so let's just update it and delete
	// the rest.
	deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,priority);existing.pendingProps=textContent;existing['return']=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
	// and delete the existing ones.
	deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText$1(textContent,priority);created['return']=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,priority){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
	// the first item in the list.
	if(child.key===key){if(child.type===element.type){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.ref=coerceRef(child,element);existing.pendingProps=element.props;existing['return']=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromElement$1(element,priority);created.ref=coerceRef(currentFirstChild,element);created['return']=returnFiber;return created;}function reconcileSingleCoroutine(returnFiber,currentFirstChild,coroutine,priority){var key=coroutine.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
	// the first item in the list.
	if(child.key===key){if(child.tag===CoroutineComponent$2){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.pendingProps=coroutine;existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromCoroutine$1(coroutine,priority);created['return']=returnFiber;return created;}function reconcileSingleYield(returnFiber,currentFirstChild,yieldNode,priority){// There's no need to check for keys on yields since they're stateless.
	var child=currentFirstChild;if(child!==null){if(child.tag===YieldComponent$3){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.type=yieldNode.value;existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);}}var created=createFiberFromYield$1(yieldNode,priority);created.type=yieldNode.value;created['return']=returnFiber;return created;}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,priority){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
	// the first item in the list.
	if(child.key===key){if(child.tag===HostPortal$4&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,priority);existing.pendingProps=portal.children||[];existing['return']=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal$1(portal,priority);created['return']=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
	// itself. They will be added to the side-effect list as we pass through the
	// children and the parent.
	function reconcileChildFibers(returnFiber,currentFirstChild,newChild,priority){// This function is not recursive.
	// If the top level item is an array, we treat it as a set of children,
	// not as a fragment. Nested arrays on the other hand will be treated as
	// fragment nodes. Recursion happens at the normal flow.
	var disableNewFiberFeatures=ReactFeatureFlags_1.disableNewFiberFeatures;// Handle object types
	var isObject=(typeof newChild==='undefined'?'undefined':_typeof(newChild))==='object'&&newChild!==null;if(isObject){// Support only the subset of return types that Stack supports. Treat
	// everything else as empty, but log a warning.
	if(disableNewFiberFeatures){switch(newChild.$$typeof){case ReactElementSymbol:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,priority));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,priority));}}else{switch(newChild.$$typeof){case ReactElementSymbol:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,priority));case REACT_COROUTINE_TYPE:return placeSingleChild(reconcileSingleCoroutine(returnFiber,currentFirstChild,newChild,priority));case REACT_YIELD_TYPE:return placeSingleChild(reconcileSingleYield(returnFiber,currentFirstChild,newChild,priority));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,priority));}}}if(disableNewFiberFeatures){// The new child is not an element. If it's not null or false,
	// and the return fiber is a composite component, throw an error.
	switch(returnFiber.tag){case ClassComponent$6:{{var instance=returnFiber.stateNode;if(instance.render._isMockFunction&&typeof newChild==='undefined'){// We allow auto-mocks to proceed as if they're
	// returning null.
	break;}}var Component=returnFiber.type;!(newChild===null||newChild===false)?invariant(false,'%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):void 0;break;}case FunctionalComponent$2:{// Composites accept elements, portals, null, or false
	var _Component=returnFiber.type;!(newChild===null||newChild===false)?invariant(false,'%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',_Component.displayName||_Component.name||'Component'):void 0;break;}}}if(typeof newChild==='string'||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,priority));}if(isArray(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,priority);}if(getIteratorFn_1(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,priority);}if(isObject){throwOnInvalidObjectType(returnFiber,newChild);}if(!disableNewFiberFeatures&&typeof newChild==='undefined'){// If the new child is undefined, and the return fiber is a composite
	// component, throw an error. If Fiber return types are disabled,
	// we already threw above.
	switch(returnFiber.tag){case ClassComponent$6:{{var _instance=returnFiber.stateNode;if(_instance.render._isMockFunction){// We allow auto-mocks to proceed as if they're returning null.
	break;}}}// Intentionally fall through to the next case, which handles both
	// functions and classes
	// eslint-disable-next-lined no-fallthrough
	case FunctionalComponent$2:{var _Component2=returnFiber.type;invariant(false,'%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.',_Component2.displayName||_Component2.name||'Component');}}}// Remaining cases are all treated as empty.
	return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers$1=ChildReconciler(true,true);var reconcileChildFibersInPlace$1=ChildReconciler(false,true);var mountChildFibersInPlace$1=ChildReconciler(false,false);var cloneChildFibers$1=function cloneChildFibers$1(current,workInProgress){if(!workInProgress.child){return;}if(current!==null&&workInProgress.child===current.child){// We use workInProgress.child since that lets Flow know that it can't be
	// null since we validated that already. However, as the line above suggests
	// they're actually the same thing.
	var currentChild=workInProgress.child;// TODO: This used to reset the pending priority. Not sure if that is needed.
	// workInProgress.pendingWorkPriority = current.pendingWorkPriority;
	// TODO: The below priority used to be set to NoWork which would've
	// dropped work. This is currently unobservable but will become
	// observable when the first sibling has lower priority work remaining
	// than the next sibling. At that point we should add tests that catches
	// this.
	var newChild=cloneFiber$2(currentChild,currentChild.pendingWorkPriority);workInProgress.child=newChild;newChild['return']=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=cloneFiber$2(currentChild,currentChild.pendingWorkPriority);newChild['return']=workInProgress;}newChild.sibling=null;}else{// If there is no alternate, then we don't need to clone the children.
	// If the children of the alternate fiber is a different set, then we don't
	// need to clone. We need to reset the return fiber though since we'll
	// traverse down into them.
	var child=workInProgress.child;while(child!==null){child['return']=workInProgress;child=child.sibling;}}};var ReactChildFiber={reconcileChildFibers:reconcileChildFibers$1,reconcileChildFibersInPlace:reconcileChildFibersInPlace$1,mountChildFibersInPlace:mountChildFibersInPlace$1,cloneChildFibers:cloneChildFibers$1};var Update$1=ReactTypeOfSideEffect.Update;var cacheContext$1=ReactFiberContext.cacheContext;var getMaskedContext$2=ReactFiberContext.getMaskedContext;var getUnmaskedContext$2=ReactFiberContext.getUnmaskedContext;var isContextConsumer$1=ReactFiberContext.isContextConsumer;var addUpdate$1=ReactFiberUpdateQueue.addUpdate;var addReplaceUpdate$1=ReactFiberUpdateQueue.addReplaceUpdate;var addForceUpdate$1=ReactFiberUpdateQueue.addForceUpdate;var beginUpdateQueue$2=ReactFiberUpdateQueue.beginUpdateQueue;var _require4$3=ReactFiberContext;var hasContextChanged$2=_require4$3.hasContextChanged;var isMounted$1=ReactFiberTreeReflection.isMounted;var isArray$1=Array.isArray;{var _require6$1=ReactDebugFiberPerf_1,startPhaseTimer$1=_require6$1.startPhaseTimer,stopPhaseTimer$1=_require6$1.stopPhaseTimer;var warning$8=warning;var warnOnInvalidCallback=function warnOnInvalidCallback(callback,callerName){warning$8(callback===null||typeof callback==='function','%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);};}var ReactFiberClassComponent=function ReactFiberClassComponent(scheduleUpdate,getPriorityContext,memoizeProps,memoizeState){// Class component state updater
	var updater={isMounted:isMounted$1,enqueueSetState:function enqueueSetState(instance,partialState,callback){var fiber=ReactInstanceMap_1.get(instance);var priorityLevel=getPriorityContext();callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'setState');}addUpdate$1(fiber,partialState,callback,priorityLevel);scheduleUpdate(fiber,priorityLevel);},enqueueReplaceState:function enqueueReplaceState(instance,state,callback){var fiber=ReactInstanceMap_1.get(instance);var priorityLevel=getPriorityContext();callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'replaceState');}addReplaceUpdate$1(fiber,state,callback,priorityLevel);scheduleUpdate(fiber,priorityLevel);},enqueueForceUpdate:function enqueueForceUpdate(instance,callback){var fiber=ReactInstanceMap_1.get(instance);var priorityLevel=getPriorityContext();callback=callback===undefined?null:callback;{warnOnInvalidCallback(callback,'forceUpdate');}addForceUpdate$1(fiber,callback,priorityLevel);scheduleUpdate(fiber,priorityLevel);}};function checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext){if(oldProps===null||workInProgress.updateQueue!==null&&workInProgress.updateQueue.hasForceUpdate){// If the workInProgress already has an Update effect, return true
	return true;}var instance=workInProgress.stateNode;if(typeof instance.shouldComponentUpdate==='function'){{startPhaseTimer$1(workInProgress,'shouldComponentUpdate');}var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,newContext);{stopPhaseTimer$1();}{warning$8(shouldUpdate!==undefined,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentName_1(workInProgress)||'Unknown');}return shouldUpdate;}var type=workInProgress.type;if(type.prototype&&type.prototype.isPureReactComponent){return!shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress){var instance=workInProgress.stateNode;{var name=getComponentName_1(workInProgress);var renderPresent=instance.render;warning$8(renderPresent,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);var noGetInitialStateOnES6=!instance.getInitialState||instance.getInitialState.isReactClassApproved||instance.state;warning$8(noGetInitialStateOnES6,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name);var noGetDefaultPropsOnES6=!instance.getDefaultProps||instance.getDefaultProps.isReactClassApproved;warning$8(noGetDefaultPropsOnES6,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name);var noInstancePropTypes=!instance.propTypes;warning$8(noInstancePropTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name);var noInstanceContextTypes=!instance.contextTypes;warning$8(noInstanceContextTypes,'contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name);var noComponentShouldUpdate=typeof instance.componentShouldUpdate!=='function';warning$8(noComponentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name);var noComponentDidUnmount=typeof instance.componentDidUnmount!=='function';warning$8(noComponentDidUnmount,'%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name);var noComponentWillRecieveProps=typeof instance.componentWillRecieveProps!=='function';warning$8(noComponentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name);var hasMutatedProps=instance.props!==workInProgress.pendingProps;warning$8(instance.props===undefined||!hasMutatedProps,'%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name);}var state=instance.state;if(state&&((typeof state==='undefined'?'undefined':_typeof(state))!=='object'||isArray$1(state))){invariant(false,'%s.state: must be set to an object or null',getComponentName_1(workInProgress));}if(typeof instance.getChildContext==='function'){!(_typeof(workInProgress.type.childContextTypes)==='object')?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',getComponentName_1(workInProgress)):void 0;}}function resetInputPointers(workInProgress,instance){instance.props=workInProgress.memoizedProps;instance.state=workInProgress.memoizedState;}function adoptClassInstance(workInProgress,instance){instance.updater=updater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
	ReactInstanceMap_1.set(instance,workInProgress);}function constructClassInstance(workInProgress){var ctor=workInProgress.type;var props=workInProgress.pendingProps;var unmaskedContext=getUnmaskedContext$2(workInProgress);var needsContext=isContextConsumer$1(workInProgress);var context=needsContext?getMaskedContext$2(workInProgress,unmaskedContext):emptyObject;var instance=new ctor(props,context);adoptClassInstance(workInProgress,instance);checkClassInstance(workInProgress);// Cache unmasked context so we can avoid recreating masked context unless necessary.
	// ReactFiberContext usually updates this cache but can't for newly-created instances.
	if(needsContext){cacheContext$1(workInProgress,unmaskedContext,context);}return instance;}// Invokes the mount life-cycles on a previously never rendered instance.
	function mountClassInstance(workInProgress,priorityLevel){var instance=workInProgress.stateNode;var state=instance.state||null;var props=workInProgress.pendingProps;!props?invariant(false,'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.'):void 0;var unmaskedContext=getUnmaskedContext$2(workInProgress);instance.props=props;instance.state=state;instance.refs=emptyObject;instance.context=getMaskedContext$2(workInProgress,unmaskedContext);if(typeof instance.componentWillMount==='function'){{startPhaseTimer$1(workInProgress,'componentWillMount');}instance.componentWillMount();{stopPhaseTimer$1();}// If we had additional state updates during this life-cycle, let's
	// process them now.
	var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){instance.state=beginUpdateQueue$2(workInProgress,updateQueue,instance,state,props,priorityLevel);}}if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update$1;}}// Called on a preexisting class instance. Returns false if a resumed render
	// could be reused.
	function resumeMountClassInstance(workInProgress,priorityLevel){var instance=workInProgress.stateNode;resetInputPointers(workInProgress,instance);var newState=workInProgress.memoizedState;var newProps=workInProgress.pendingProps;if(!newProps){// If there isn't any new props, then we'll reuse the memoized props.
	// This could be from already completed work.
	newProps=workInProgress.memoizedProps;!(newProps!=null)?invariant(false,'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}var newUnmaskedContext=getUnmaskedContext$2(workInProgress);var newContext=getMaskedContext$2(workInProgress,newUnmaskedContext);// TODO: Should we deal with a setState that happened after the last
	// componentWillMount and before this componentWillMount? Probably
	// unsupported anyway.
	if(!checkShouldComponentUpdate(workInProgress,workInProgress.memoizedProps,newProps,workInProgress.memoizedState,newState,newContext)){// Update the existing instance's state, props, and context pointers even
	// though we're bailing out.
	instance.props=newProps;instance.state=newState;instance.context=newContext;return false;}// If we didn't bail out we need to construct a new instance. We don't
	// want to reuse one that failed to fully mount.
	var newInstance=constructClassInstance(workInProgress);newInstance.props=newProps;newInstance.state=newState=newInstance.state||null;newInstance.context=newContext;if(typeof newInstance.componentWillMount==='function'){{startPhaseTimer$1(workInProgress,'componentWillMount');}newInstance.componentWillMount();{stopPhaseTimer$1();}}// If we had additional state updates, process them now.
	// They may be from componentWillMount() or from error boundary's setState()
	// during initial mounting.
	var newUpdateQueue=workInProgress.updateQueue;if(newUpdateQueue!==null){newInstance.state=beginUpdateQueue$2(workInProgress,newUpdateQueue,newInstance,newState,newProps,priorityLevel);}if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update$1;}return true;}// Invokes the update life-cycles and returns false if it shouldn't rerender.
	function updateClassInstance(current,workInProgress,priorityLevel){var instance=workInProgress.stateNode;resetInputPointers(workInProgress,instance);var oldProps=workInProgress.memoizedProps;var newProps=workInProgress.pendingProps;if(!newProps){// If there aren't any new props, then we'll reuse the memoized props.
	// This could be from already completed work.
	newProps=oldProps;!(newProps!=null)?invariant(false,'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}var oldContext=instance.context;var newUnmaskedContext=getUnmaskedContext$2(workInProgress);var newContext=getMaskedContext$2(workInProgress,newUnmaskedContext);// Note: During these life-cycles, instance.props/instance.state are what
	// ever the previously attempted to render - not the "current". However,
	// during componentDidUpdate we pass the "current" props.
	if(oldProps!==newProps||oldContext!==newContext){if(typeof instance.componentWillReceiveProps==='function'){{startPhaseTimer$1(workInProgress,'componentWillReceiveProps');}instance.componentWillReceiveProps(newProps,newContext);{stopPhaseTimer$1();}if(instance.state!==workInProgress.memoizedState){{warning$8(false,'%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName_1(workInProgress));}updater.enqueueReplaceState(instance,instance.state,null);}}}// Compute the next state using the memoized state and the update queue.
	var updateQueue=workInProgress.updateQueue;var oldState=workInProgress.memoizedState;// TODO: Previous state can be null.
	var newState=void 0;if(updateQueue!==null){newState=beginUpdateQueue$2(workInProgress,updateQueue,instance,oldState,newProps,priorityLevel);}else{newState=oldState;}if(oldProps===newProps&&oldState===newState&&!hasContextChanged$2()&&!(updateQueue!==null&&updateQueue.hasForceUpdate)){// If an update was already in progress, we should schedule an Update
	// effect even though we're bailing out, so that cWU/cDU are called.
	if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update$1;}}return false;}var shouldUpdate=checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext);if(shouldUpdate){if(typeof instance.componentWillUpdate==='function'){{startPhaseTimer$1(workInProgress,'componentWillUpdate');}instance.componentWillUpdate(newProps,newState,newContext);{stopPhaseTimer$1();}}if(typeof instance.componentDidUpdate==='function'){workInProgress.effectTag|=Update$1;}}else{// If an update was already in progress, we should schedule an Update
	// effect even though we're bailing out, so that cWU/cDU are called.
	if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update$1;}}// If shouldComponentUpdate returned false, we should still update the
	// memoized props/state to indicate that this work can be reused.
	memoizeProps(workInProgress,newProps);memoizeState(workInProgress,newState);}// Update the existing instance's state, props, and context pointers even
	// if shouldComponentUpdate returns false.
	instance.props=newProps;instance.state=newState;instance.context=newContext;return shouldUpdate;}return{adoptClassInstance:adoptClassInstance,constructClassInstance:constructClassInstance,mountClassInstance:mountClassInstance,resumeMountClassInstance:resumeMountClassInstance,updateClassInstance:updateClassInstance};};var mountChildFibersInPlace=ReactChildFiber.mountChildFibersInPlace;var reconcileChildFibers=ReactChildFiber.reconcileChildFibers;var reconcileChildFibersInPlace=ReactChildFiber.reconcileChildFibersInPlace;var cloneChildFibers=ReactChildFiber.cloneChildFibers;var beginUpdateQueue$1=ReactFiberUpdateQueue.beginUpdateQueue;var getMaskedContext$1=ReactFiberContext.getMaskedContext;var getUnmaskedContext$1=ReactFiberContext.getUnmaskedContext;var hasContextChanged$1=ReactFiberContext.hasContextChanged;var pushContextProvider$1=ReactFiberContext.pushContextProvider;var pushTopLevelContextObject$1=ReactFiberContext.pushTopLevelContextObject;var invalidateContextProvider$1=ReactFiberContext.invalidateContextProvider;var IndeterminateComponent$2=ReactTypeOfWork.IndeterminateComponent;var FunctionalComponent$1=ReactTypeOfWork.FunctionalComponent;var ClassComponent$5=ReactTypeOfWork.ClassComponent;var HostRoot$6=ReactTypeOfWork.HostRoot;var HostComponent$7=ReactTypeOfWork.HostComponent;var HostText$4=ReactTypeOfWork.HostText;var HostPortal$3=ReactTypeOfWork.HostPortal;var CoroutineComponent$1=ReactTypeOfWork.CoroutineComponent;var CoroutineHandlerPhase=ReactTypeOfWork.CoroutineHandlerPhase;var YieldComponent$2=ReactTypeOfWork.YieldComponent;var Fragment$2=ReactTypeOfWork.Fragment;var NoWork$3=ReactPriorityLevel.NoWork;var OffscreenPriority$1=ReactPriorityLevel.OffscreenPriority;var Placement$2=ReactTypeOfSideEffect.Placement;var ContentReset$1=ReactTypeOfSideEffect.ContentReset;var Err$1=ReactTypeOfSideEffect.Err;var Ref$1=ReactTypeOfSideEffect.Ref;{var ReactDebugCurrentFiber$4=ReactDebugCurrentFiber_1;var _require6=ReactDebugFiberPerf_1,cancelWorkTimer=_require6.cancelWorkTimer;var warning$6=warning;var warnedAboutStatelessRefs={};}var ReactFiberBeginWork=function ReactFiberBeginWork(config,hostContext,scheduleUpdate,getPriorityContext){var shouldSetTextContent=config.shouldSetTextContent,useSyncScheduling=config.useSyncScheduling,shouldDeprioritizeSubtree=config.shouldDeprioritizeSubtree;var pushHostContext=hostContext.pushHostContext,pushHostContainer=hostContext.pushHostContainer;var _ReactFiberClassCompo=ReactFiberClassComponent(scheduleUpdate,getPriorityContext,memoizeProps,memoizeState),adoptClassInstance=_ReactFiberClassCompo.adoptClassInstance,constructClassInstance=_ReactFiberClassCompo.constructClassInstance,mountClassInstance=_ReactFiberClassCompo.mountClassInstance,resumeMountClassInstance=_ReactFiberClassCompo.resumeMountClassInstance,updateClassInstance=_ReactFiberClassCompo.updateClassInstance;function markChildAsProgressed(current,workInProgress,priorityLevel){// We now have clones. Let's store them as the currently progressed work.
	workInProgress.progressedChild=workInProgress.child;workInProgress.progressedPriority=priorityLevel;if(current!==null){// We also store it on the current. When the alternate swaps in we can
	// continue from this point.
	current.progressedChild=workInProgress.progressedChild;current.progressedPriority=workInProgress.progressedPriority;}}function clearDeletions(workInProgress){workInProgress.progressedFirstDeletion=workInProgress.progressedLastDeletion=null;}function transferDeletions(workInProgress){// Any deletions get added first into the effect list.
	workInProgress.firstEffect=workInProgress.progressedFirstDeletion;workInProgress.lastEffect=workInProgress.progressedLastDeletion;}function reconcileChildren(current,workInProgress,nextChildren){var priorityLevel=workInProgress.pendingWorkPriority;reconcileChildrenAtPriority(current,workInProgress,nextChildren,priorityLevel);}function reconcileChildrenAtPriority(current,workInProgress,nextChildren,priorityLevel){// At this point any memoization is no longer valid since we'll have changed
	// the children.
	workInProgress.memoizedProps=null;if(current===null){// If this is a fresh new component that hasn't been rendered yet, we
	// won't update its child set by applying minimal side-effects. Instead,
	// we will add them all to the child before it gets rendered. That means
	// we can optimize this reconciliation pass by not tracking side-effects.
	workInProgress.child=mountChildFibersInPlace(workInProgress,workInProgress.child,nextChildren,priorityLevel);}else if(current.child===workInProgress.child){// If the current child is the same as the work in progress, it means that
	// we haven't yet started any work on these children. Therefore, we use
	// the clone algorithm to create a copy of all the current children.
	// If we had any progressed work already, that is invalid at this point so
	// let's throw it out.
	clearDeletions(workInProgress);workInProgress.child=reconcileChildFibers(workInProgress,workInProgress.child,nextChildren,priorityLevel);transferDeletions(workInProgress);}else{// If, on the other hand, it is already using a clone, that means we've
	// already begun some work on this tree and we can continue where we left
	// off by reconciling against the existing children.
	workInProgress.child=reconcileChildFibersInPlace(workInProgress,workInProgress.child,nextChildren,priorityLevel);transferDeletions(workInProgress);}markChildAsProgressed(current,workInProgress,priorityLevel);}function updateFragment(current,workInProgress){var nextChildren=workInProgress.pendingProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
	// we don't do the bailout and we have to reuse existing props instead.
	if(nextChildren===null){nextChildren=workInProgress.memoizedProps;}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress);}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);return workInProgress.child;}function markRef(current,workInProgress){var ref=workInProgress.ref;if(ref!==null&&(!current||current.ref!==ref)){// Schedule a Ref effect
	workInProgress.effectTag|=Ref$1;}}function updateFunctionalComponent(current,workInProgress){var fn=workInProgress.type;var nextProps=workInProgress.pendingProps;var memoizedProps=workInProgress.memoizedProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
	// we don't do the bailout and we have to reuse existing props instead.
	if(nextProps===null){nextProps=memoizedProps;}}else{if(nextProps===null||memoizedProps===nextProps){return bailoutOnAlreadyFinishedWork(current,workInProgress);}// TODO: Disable this before release, since it is not part of the public API
	// I use this for testing to compare the relative overhead of classes.
	if(typeof fn.shouldComponentUpdate==='function'&&!fn.shouldComponentUpdate(memoizedProps,nextProps)){// Memoize props even if shouldComponentUpdate returns false
	memoizeProps(workInProgress,nextProps);return bailoutOnAlreadyFinishedWork(current,workInProgress);}}var unmaskedContext=getUnmaskedContext$1(workInProgress);var context=getMaskedContext$1(workInProgress,unmaskedContext);var nextChildren;{ReactCurrentOwnerRollupShim.current=workInProgress;ReactDebugCurrentFiber$4.phase='render';nextChildren=fn(nextProps,context);ReactDebugCurrentFiber$4.phase=null;}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextProps);return workInProgress.child;}function updateClassComponent(current,workInProgress,priorityLevel){// Push context providers early to prevent context stack mismatches.
	// During mounting we don't know the child context yet as the instance doesn't exist.
	// We will invalidate the child context in finishClassComponent() right after rendering.
	var hasContext=pushContextProvider$1(workInProgress);var shouldUpdate=void 0;if(current===null){if(!workInProgress.stateNode){// In the initial pass we might need to construct the instance.
	constructClassInstance(workInProgress);mountClassInstance(workInProgress,priorityLevel);shouldUpdate=true;}else{// In a resume, we'll already have an instance we can reuse.
	shouldUpdate=resumeMountClassInstance(workInProgress,priorityLevel);}}else{shouldUpdate=updateClassInstance(current,workInProgress,priorityLevel);}return finishClassComponent(current,workInProgress,shouldUpdate,hasContext);}function finishClassComponent(current,workInProgress,shouldUpdate,hasContext){// Refs should update even if shouldComponentUpdate returns false
	markRef(current,workInProgress);if(!shouldUpdate){return bailoutOnAlreadyFinishedWork(current,workInProgress);}var instance=workInProgress.stateNode;// Rerender
	ReactCurrentOwnerRollupShim.current=workInProgress;var nextChildren=void 0;{ReactDebugCurrentFiber$4.phase='render';nextChildren=instance.render();ReactDebugCurrentFiber$4.phase=null;}reconcileChildren(current,workInProgress,nextChildren);// Memoize props and state using the values we just used to render.
	// TODO: Restructure so we never read values from the instance.
	memoizeState(workInProgress,instance.state);memoizeProps(workInProgress,instance.props);// The context might have changed so we need to recalculate it.
	if(hasContext){invalidateContextProvider$1(workInProgress);}return workInProgress.child;}function updateHostRoot(current,workInProgress,priorityLevel){var root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject$1(workInProgress,root.pendingContext,root.pendingContext!==root.context);}else if(root.context){// Should always be set
	pushTopLevelContextObject$1(workInProgress,root.context,false);}pushHostContainer(workInProgress,root.containerInfo);var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){var prevState=workInProgress.memoizedState;var state=beginUpdateQueue$1(workInProgress,updateQueue,null,prevState,null,priorityLevel);if(prevState===state){// If the state is the same as before, that's a bailout because we had
	// no work matching this priority.
	return bailoutOnAlreadyFinishedWork(current,workInProgress);}var element=state.element;reconcileChildren(current,workInProgress,element);memoizeState(workInProgress,state);return workInProgress.child;}// If there is no update queue, that's a bailout because the root has no props.
	return bailoutOnAlreadyFinishedWork(current,workInProgress);}function updateHostComponent(current,workInProgress){pushHostContext(workInProgress);var nextProps=workInProgress.pendingProps;var prevProps=current!==null?current.memoizedProps:null;var memoizedProps=workInProgress.memoizedProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
	// we don't do the bailout and we have to reuse existing props instead.
	if(nextProps===null){nextProps=memoizedProps;!(nextProps!==null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextProps===null||memoizedProps===nextProps){if(!useSyncScheduling&&shouldDeprioritizeSubtree(workInProgress.type,memoizedProps)&&workInProgress.pendingWorkPriority!==OffscreenPriority$1){// This subtree still has work, but it should be deprioritized so we need
	// to bail out and not do any work yet.
	// TODO: It would be better if this tree got its correct priority set
	// during scheduleUpdate instead because otherwise we'll start a higher
	// priority reconciliation first before we can get down here. However,
	// that is a bit tricky since workInProgress and current can have
	// different "hidden" settings.
	var child=workInProgress.progressedChild;while(child!==null){// To ensure that this subtree gets its priority reset, the children
	// need to be reset.
	child.pendingWorkPriority=OffscreenPriority$1;child=child.sibling;}return null;}return bailoutOnAlreadyFinishedWork(current,workInProgress);}var nextChildren=nextProps.children;var isDirectTextChild=shouldSetTextContent(nextProps);if(isDirectTextChild){// We special case a direct text child of a host node. This is a common
	// case. We won't handle it as a reified child. We will instead handle
	// this in the host environment that also have access to this prop. That
	// avoids allocating another HostText fiber and traversing it.
	nextChildren=null;}else if(prevProps&&shouldSetTextContent(prevProps)){// If we're switching from a direct text child to a normal child, or to
	// empty, we need to schedule the text content to be reset.
	workInProgress.effectTag|=ContentReset$1;}markRef(current,workInProgress);if(!useSyncScheduling&&shouldDeprioritizeSubtree(workInProgress.type,nextProps)&&workInProgress.pendingWorkPriority!==OffscreenPriority$1){// If this host component is hidden, we can bail out on the children.
	// We'll rerender the children later at the lower priority.
	// It is unfortunate that we have to do the reconciliation of these
	// children already since that will add them to the tree even though
	// they are not actually done yet. If this is a large set it is also
	// confusing that this takes time to do right now instead of later.
	if(workInProgress.progressedPriority===OffscreenPriority$1){// If we already made some progress on the offscreen priority before,
	// then we should continue from where we left off.
	workInProgress.child=workInProgress.progressedChild;}// Reconcile the children and stash them for later work.
	reconcileChildrenAtPriority(current,workInProgress,nextChildren,OffscreenPriority$1);memoizeProps(workInProgress,nextProps);workInProgress.child=current!==null?current.child:null;if(current===null){// If this doesn't have a current we won't track it for placement
	// effects. However, when we come back around to this we have already
	// inserted the parent which means that we'll infact need to make this a
	// placement.
	// TODO: There has to be a better solution to this problem.
	var _child=workInProgress.progressedChild;while(_child!==null){_child.effectTag=Placement$2;_child=_child.sibling;}}// Abort and don't process children yet.
	return null;}else{reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextProps);return workInProgress.child;}}function updateHostText(current,workInProgress){var nextProps=workInProgress.pendingProps;if(nextProps===null){nextProps=workInProgress.memoizedProps;}memoizeProps(workInProgress,nextProps);// Nothing to do here. This is terminal. We'll do the completion step
	// immediately after.
	return null;}function mountIndeterminateComponent(current,workInProgress,priorityLevel){!(current===null)?invariant(false,'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.'):void 0;var fn=workInProgress.type;var props=workInProgress.pendingProps;var unmaskedContext=getUnmaskedContext$1(workInProgress);var context=getMaskedContext$1(workInProgress,unmaskedContext);var value;{ReactCurrentOwnerRollupShim.current=workInProgress;value=fn(props,context);}if((typeof value==='undefined'?'undefined':_typeof(value))==='object'&&value!==null&&typeof value.render==='function'){// Proceed under the assumption that this is a class instance
	workInProgress.tag=ClassComponent$5;// Push context providers early to prevent context stack mismatches.
	// During mounting we don't know the child context yet as the instance doesn't exist.
	// We will invalidate the child context in finishClassComponent() right after rendering.
	var hasContext=pushContextProvider$1(workInProgress);adoptClassInstance(workInProgress,value);mountClassInstance(workInProgress,priorityLevel);return finishClassComponent(current,workInProgress,true,hasContext);}else{// Proceed under the assumption that this is a functional component
	workInProgress.tag=FunctionalComponent$1;{var Component=workInProgress.type;if(Component){warning$6(!Component.childContextTypes,'%s(...): childContextTypes cannot be defined on a functional component.',Component.displayName||Component.name||'Component');}if(workInProgress.ref!==null){var info='';var ownerName=ReactDebugCurrentFiber$4.getCurrentFiberOwnerName();if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}var warningKey=ownerName||workInProgress._debugID||'';var debugSource=workInProgress._debugSource;if(debugSource){warningKey=debugSource.fileName+':'+debugSource.lineNumber;}if(!warnedAboutStatelessRefs[warningKey]){warnedAboutStatelessRefs[warningKey]=true;warning$6(false,'Stateless function components cannot be given refs. '+'Attempts to access this ref will fail.%s%s',info,ReactDebugCurrentFiber$4.getCurrentFiberStackAddendum());}}}reconcileChildren(current,workInProgress,value);memoizeProps(workInProgress,props);return workInProgress.child;}}function updateCoroutineComponent(current,workInProgress){var nextCoroutine=workInProgress.pendingProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
	// we don't do the bailout and we have to reuse existing props instead.
	if(nextCoroutine===null){nextCoroutine=current&&current.memoizedProps;!(nextCoroutine!==null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextCoroutine===null||workInProgress.memoizedProps===nextCoroutine){nextCoroutine=workInProgress.memoizedProps;// TODO: When bailing out, we might need to return the stateNode instead
	// of the child. To check it for work.
	// return bailoutOnAlreadyFinishedWork(current, workInProgress);
	}var nextChildren=nextCoroutine.children;var priorityLevel=workInProgress.pendingWorkPriority;// The following is a fork of reconcileChildrenAtPriority but using
	// stateNode to store the child.
	// At this point any memoization is no longer valid since we'll have changed
	// the children.
	workInProgress.memoizedProps=null;if(current===null){workInProgress.stateNode=mountChildFibersInPlace(workInProgress,workInProgress.stateNode,nextChildren,priorityLevel);}else if(current.child===workInProgress.child){clearDeletions(workInProgress);workInProgress.stateNode=reconcileChildFibers(workInProgress,workInProgress.stateNode,nextChildren,priorityLevel);transferDeletions(workInProgress);}else{workInProgress.stateNode=reconcileChildFibersInPlace(workInProgress,workInProgress.stateNode,nextChildren,priorityLevel);transferDeletions(workInProgress);}memoizeProps(workInProgress,nextCoroutine);// This doesn't take arbitrary time so we could synchronously just begin
	// eagerly do the work of workInProgress.child as an optimization.
	return workInProgress.stateNode;}function updatePortalComponent(current,workInProgress){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);var priorityLevel=workInProgress.pendingWorkPriority;var nextChildren=workInProgress.pendingProps;if(hasContextChanged$1()){// Normally we can bail out on props equality but if context has changed
	// we don't do the bailout and we have to reuse existing props instead.
	if(nextChildren===null){nextChildren=current&&current.memoizedProps;!(nextChildren!=null)?invariant(false,'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.'):void 0;}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress);}if(current===null){// Portals are special because we don't append the children during mount
	// but at commit. Therefore we need to track insertions which the normal
	// flow doesn't do during mount. This doesn't happen at the root because
	// the root always starts with a "current" with a null child.
	// TODO: Consider unifying this with how the root works.
	workInProgress.child=reconcileChildFibersInPlace(workInProgress,workInProgress.child,nextChildren,priorityLevel);memoizeProps(workInProgress,nextChildren);markChildAsProgressed(current,workInProgress,priorityLevel);}else{reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);}return workInProgress.child;}/*
	  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
	    let child = firstChild;
	    do {
	      // Ensure that the first and last effect of the parent corresponds
	      // to the children's first and last effect.
	      if (!returnFiber.firstEffect) {
	        returnFiber.firstEffect = child.firstEffect;
	      }
	      if (child.lastEffect) {
	        if (returnFiber.lastEffect) {
	          returnFiber.lastEffect.nextEffect = child.firstEffect;
	        }
	        returnFiber.lastEffect = child.lastEffect;
	      }
	    } while (child = child.sibling);
	  }
	  */function bailoutOnAlreadyFinishedWork(current,workInProgress){{cancelWorkTimer(workInProgress);}var priorityLevel=workInProgress.pendingWorkPriority;// TODO: We should ideally be able to bail out early if the children have no
	// more work to do. However, since we don't have a separation of this
	// Fiber's priority and its children yet - we don't know without doing lots
	// of the same work we do anyway. Once we have that separation we can just
	// bail out here if the children has no more work at this priority level.
	// if (workInProgress.priorityOfChildren <= priorityLevel) {
	//   // If there are side-effects in these children that have not yet been
	//   // committed we need to ensure that they get properly transferred up.
	//   if (current && current.child !== workInProgress.child) {
	//     reuseChildrenEffects(workInProgress, child);
	//   }
	//   return null;
	// }
	if(current&&workInProgress.child===current.child){// If we had any progressed work already, that is invalid at this point so
	// let's throw it out.
	clearDeletions(workInProgress);}cloneChildFibers(current,workInProgress);markChildAsProgressed(current,workInProgress,priorityLevel);return workInProgress.child;}function bailoutOnLowPriority(current,workInProgress){{cancelWorkTimer(workInProgress);}// TODO: Handle HostComponent tags here as well and call pushHostContext()?
	// See PR 8590 discussion for context
	switch(workInProgress.tag){case ClassComponent$5:pushContextProvider$1(workInProgress);break;case HostPortal$3:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;}// TODO: What if this is currently in progress?
	// How can that happen? How is this not being cloned?
	return null;}function memoizeProps(workInProgress,nextProps){workInProgress.memoizedProps=nextProps;// Reset the pending props
	workInProgress.pendingProps=null;}function memoizeState(workInProgress,nextState){workInProgress.memoizedState=nextState;// Don't reset the updateQueue, in case there are pending updates. Resetting
	// is handled by beginUpdateQueue.
	}function beginWork(current,workInProgress,priorityLevel){if(workInProgress.pendingWorkPriority===NoWork$3||workInProgress.pendingWorkPriority>priorityLevel){return bailoutOnLowPriority(current,workInProgress);}{ReactDebugCurrentFiber$4.current=workInProgress;}// If we don't bail out, we're going be recomputing our children so we need
	// to drop our effect list.
	workInProgress.firstEffect=null;workInProgress.lastEffect=null;if(workInProgress.progressedPriority===priorityLevel){// If we have progressed work on this priority level already, we can
	// proceed this that as the child.
	workInProgress.child=workInProgress.progressedChild;}switch(workInProgress.tag){case IndeterminateComponent$2:return mountIndeterminateComponent(current,workInProgress,priorityLevel);case FunctionalComponent$1:return updateFunctionalComponent(current,workInProgress);case ClassComponent$5:return updateClassComponent(current,workInProgress,priorityLevel);case HostRoot$6:return updateHostRoot(current,workInProgress,priorityLevel);case HostComponent$7:return updateHostComponent(current,workInProgress);case HostText$4:return updateHostText(current,workInProgress);case CoroutineHandlerPhase:// This is a restart. Reset the tag to the initial phase.
	workInProgress.tag=CoroutineComponent$1;// Intentionally fall through since this is now the same.
	case CoroutineComponent$1:return updateCoroutineComponent(current,workInProgress);case YieldComponent$2:// A yield component is just a placeholder, we can just run through the
	// next one immediately.
	return null;case HostPortal$3:return updatePortalComponent(current,workInProgress);case Fragment$2:return updateFragment(current,workInProgress);default:invariant(false,'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');}}function beginFailedWork(current,workInProgress,priorityLevel){!(workInProgress.tag===ClassComponent$5||workInProgress.tag===HostRoot$6)?invariant(false,'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.'):void 0;// Add an error effect so we can handle the error during the commit phase
	workInProgress.effectTag|=Err$1;if(workInProgress.pendingWorkPriority===NoWork$3||workInProgress.pendingWorkPriority>priorityLevel){return bailoutOnLowPriority(current,workInProgress);}// If we don't bail out, we're going be recomputing our children so we need
	// to drop our effect list.
	workInProgress.firstEffect=null;workInProgress.lastEffect=null;// Unmount the current children as if the component rendered null
	var nextChildren=null;reconcileChildren(current,workInProgress,nextChildren);if(workInProgress.tag===ClassComponent$5){var instance=workInProgress.stateNode;workInProgress.memoizedProps=instance.props;workInProgress.memoizedState=instance.state;workInProgress.pendingProps=null;}return workInProgress.child;}return{beginWork:beginWork,beginFailedWork:beginFailedWork};};var reconcileChildFibers$2=ReactChildFiber.reconcileChildFibers;var popContextProvider$2=ReactFiberContext.popContextProvider;var IndeterminateComponent$3=ReactTypeOfWork.IndeterminateComponent;var FunctionalComponent$3=ReactTypeOfWork.FunctionalComponent;var ClassComponent$7=ReactTypeOfWork.ClassComponent;var HostRoot$7=ReactTypeOfWork.HostRoot;var HostComponent$8=ReactTypeOfWork.HostComponent;var HostText$6=ReactTypeOfWork.HostText;var HostPortal$5=ReactTypeOfWork.HostPortal;var CoroutineComponent$3=ReactTypeOfWork.CoroutineComponent;var CoroutineHandlerPhase$1=ReactTypeOfWork.CoroutineHandlerPhase;var YieldComponent$4=ReactTypeOfWork.YieldComponent;var Fragment$4=ReactTypeOfWork.Fragment;var Ref$2=ReactTypeOfSideEffect.Ref;var Update$2=ReactTypeOfSideEffect.Update;{var ReactDebugCurrentFiber$5=ReactDebugCurrentFiber_1;}var ReactFiberCompleteWork=function ReactFiberCompleteWork(config,hostContext){var createInstance=config.createInstance,createTextInstance=config.createTextInstance,appendInitialChild=config.appendInitialChild,finalizeInitialChildren=config.finalizeInitialChildren,prepareUpdate=config.prepareUpdate;var getRootHostContainer=hostContext.getRootHostContainer,popHostContext=hostContext.popHostContext,getHostContext=hostContext.getHostContext,popHostContainer=hostContext.popHostContainer;function markChildAsProgressed(current,workInProgress,priorityLevel){// We now have clones. Let's store them as the currently progressed work.
	workInProgress.progressedChild=workInProgress.child;workInProgress.progressedPriority=priorityLevel;if(current!==null){// We also store it on the current. When the alternate swaps in we can
	// continue from this point.
	current.progressedChild=workInProgress.progressedChild;current.progressedPriority=workInProgress.progressedPriority;}}function markUpdate(workInProgress){// Tag the fiber with an update effect. This turns a Placement into
	// an UpdateAndPlacement.
	workInProgress.effectTag|=Update$2;}function markRef(workInProgress){workInProgress.effectTag|=Ref$2;}function appendAllYields(yields,workInProgress){var node=workInProgress.stateNode;if(node){node['return']=workInProgress;}while(node!==null){if(node.tag===HostComponent$8||node.tag===HostText$6||node.tag===HostPortal$5){invariant(false,'A coroutine cannot have host component children.');}else if(node.tag===YieldComponent$4){yields.push(node.type);}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function moveCoroutineToHandlerPhase(current,workInProgress){var coroutine=workInProgress.memoizedProps;!coroutine?invariant(false,'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.'):void 0;// First step of the coroutine has completed. Now we need to do the second.
	// TODO: It would be nice to have a multi stage coroutine represented by a
	// single component, or at least tail call optimize nested ones. Currently
	// that requires additional fields that we don't want to add to the fiber.
	// So this requires nested handlers.
	// Note: This doesn't mutate the alternate node. I don't think it needs to
	// since this stage is reset for every pass.
	workInProgress.tag=CoroutineHandlerPhase$1;// Build up the yields.
	// TODO: Compare this to a generator or opaque helpers like Children.
	var yields=[];appendAllYields(yields,workInProgress);var fn=coroutine.handler;var props=coroutine.props;var nextChildren=fn(props,yields);var currentFirstChild=current!==null?current.child:null;// Inherit the priority of the returnFiber.
	var priority=workInProgress.pendingWorkPriority;workInProgress.child=reconcileChildFibers$2(workInProgress,currentFirstChild,nextChildren,priority);markChildAsProgressed(current,workInProgress,priority);return workInProgress.child;}function appendAllChildren(parent,workInProgress){// We only have the top Fiber that was created but we need recurse down its
	// children to find all the terminal nodes.
	var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent$8||node.tag===HostText$6){appendInitialChild(parent,node.stateNode);}else if(node.tag===HostPortal$5){// If we have a portal child, then we don't want to traverse
	// down its children. Instead, we'll get insertions from each child in
	// the portal directly.
	}else if(node.child!==null){node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node['return']===null||node['return']===workInProgress){return;}node=node['return'];}node=node.sibling;}}function completeWork(current,workInProgress){{ReactDebugCurrentFiber$5.current=workInProgress;}switch(workInProgress.tag){case FunctionalComponent$3:return null;case ClassComponent$7:{// We are leaving this subtree, so pop context if any.
	popContextProvider$2(workInProgress);return null;}case HostRoot$7:{// TODO: Pop the host container after #8607 lands.
	var fiberRoot=workInProgress.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null;}return null;}case HostComponent$8:{popHostContext(workInProgress);var rootContainerInstance=getRootHostContainer();var type=workInProgress.type;var newProps=workInProgress.memoizedProps;if(current!==null&&workInProgress.stateNode!=null){// If we have an alternate, that means this is an update and we need to
	// schedule a side-effect to do the updates.
	var oldProps=current.memoizedProps;// If we get updated because one of our children updated, we don't
	// have newProps so we'll have to reuse them.
	// TODO: Split the update API as separate for the props vs. children.
	// Even better would be if children weren't special cased at all tho.
	var instance=workInProgress.stateNode;var currentHostContext=getHostContext();var updatePayload=prepareUpdate(instance,type,oldProps,newProps,rootContainerInstance,currentHostContext);// TODO: Type this specific to this type of component.
	workInProgress.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
	// is a new ref we mark this as an update.
	if(updatePayload){markUpdate(workInProgress);}if(current.ref!==workInProgress.ref){markRef(workInProgress);}}else{if(!newProps){!(workInProgress.stateNode!==null)?invariant(false,'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'):void 0;// This can happen when we abort work.
	return null;}var _currentHostContext=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
	// "stack" as the parent. Then append children as we go in beginWork
	// or completeWork depending on we want to add then top->down or
	// bottom->up. Top->down is faster in IE11.
	var _instance=createInstance(type,newProps,rootContainerInstance,_currentHostContext,workInProgress);appendAllChildren(_instance,workInProgress);// Certain renderers require commit-time effects for initial mount.
	// (eg DOM renderer supports auto-focus for certain elements).
	// Make sure such renderers get scheduled for later work.
	if(finalizeInitialChildren(_instance,type,newProps,rootContainerInstance)){markUpdate(workInProgress);}workInProgress.stateNode=_instance;if(workInProgress.ref!==null){// If there is a ref on a host node we need to schedule a callback
	markRef(workInProgress);}}return null;}case HostText$6:{var newText=workInProgress.memoizedProps;if(current&&workInProgress.stateNode!=null){var oldText=current.memoizedProps;// If we have an alternate, that means this is an update and we need
	// to schedule a side-effect to do the updates.
	if(oldText!==newText){markUpdate(workInProgress);}}else{if(typeof newText!=='string'){!(workInProgress.stateNode!==null)?invariant(false,'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'):void 0;// This can happen when we abort work.
	return null;}var _rootContainerInstance=getRootHostContainer();var _currentHostContext2=getHostContext();var textInstance=createTextInstance(newText,_rootContainerInstance,_currentHostContext2,workInProgress);workInProgress.stateNode=textInstance;}return null;}case CoroutineComponent$3:return moveCoroutineToHandlerPhase(current,workInProgress);case CoroutineHandlerPhase$1:// Reset the tag to now be a first phase coroutine.
	workInProgress.tag=CoroutineComponent$3;return null;case YieldComponent$4:// Does nothing.
	return null;case Fragment$4:return null;case HostPortal$5:// TODO: Only mark this as an update if we have any pending callbacks.
	markUpdate(workInProgress);popHostContainer(workInProgress);return null;// Error cases
	case IndeterminateComponent$3:invariant(false,'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');// eslint-disable-next-line no-fallthrough
	default:invariant(false,'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');}}return{completeWork:completeWork};};var rendererID=null;var injectInternals$1=null;var onCommitRoot$1=null;var onCommitUnmount$1=null;if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&__REACT_DEVTOOLS_GLOBAL_HOOK__.supportsFiber){var inject$1=__REACT_DEVTOOLS_GLOBAL_HOOK__.inject,onCommitFiberRoot=__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot,onCommitFiberUnmount=__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberUnmount;injectInternals$1=function injectInternals$1(internals){warning(rendererID==null,'Cannot inject into DevTools twice.');rendererID=inject$1(internals);};onCommitRoot$1=function onCommitRoot$1(root){if(rendererID==null){return;}try{onCommitFiberRoot(rendererID,root);}catch(err){// Catch all errors because it is unsafe to throw in the commit phase.
	{warning(false,'React DevTools encountered an error: %s',err);}}};onCommitUnmount$1=function onCommitUnmount$1(fiber){if(rendererID==null){return;}try{onCommitFiberUnmount(rendererID,fiber);}catch(err){// Catch all errors because it is unsafe to throw in the commit phase.
	{warning(false,'React DevTools encountered an error: %s',err);}}};}var injectInternals_1=injectInternals$1;var onCommitRoot_1=onCommitRoot$1;var onCommitUnmount_1=onCommitUnmount$1;var ReactFiberDevToolsHook={injectInternals:injectInternals_1,onCommitRoot:onCommitRoot_1,onCommitUnmount:onCommitUnmount_1};var ClassComponent$8=ReactTypeOfWork.ClassComponent;var HostRoot$8=ReactTypeOfWork.HostRoot;var HostComponent$9=ReactTypeOfWork.HostComponent;var HostText$7=ReactTypeOfWork.HostText;var HostPortal$6=ReactTypeOfWork.HostPortal;var CoroutineComponent$4=ReactTypeOfWork.CoroutineComponent;var commitCallbacks$1=ReactFiberUpdateQueue.commitCallbacks;var onCommitUnmount=ReactFiberDevToolsHook.onCommitUnmount;var invokeGuardedCallback$2=ReactErrorUtils_1.invokeGuardedCallback;var Placement$4=ReactTypeOfSideEffect.Placement;var Update$3=ReactTypeOfSideEffect.Update;var Callback$1=ReactTypeOfSideEffect.Callback;var ContentReset$2=ReactTypeOfSideEffect.ContentReset;{var _require5$1=ReactDebugFiberPerf_1,startPhaseTimer$2=_require5$1.startPhaseTimer,stopPhaseTimer$2=_require5$1.stopPhaseTimer;}var ReactFiberCommitWork=function ReactFiberCommitWork(config,captureError){var commitMount=config.commitMount,commitUpdate=config.commitUpdate,resetTextContent=config.resetTextContent,commitTextUpdate=config.commitTextUpdate,appendChild=config.appendChild,insertBefore=config.insertBefore,removeChild=config.removeChild,getPublicInstance=config.getPublicInstance;{var callComponentWillUnmountWithTimerInDev=function callComponentWillUnmountWithTimerInDev(current,instance){startPhaseTimer$2(current,'componentWillUnmount');instance.componentWillUnmount();stopPhaseTimer$2();};}// Capture errors so they don't interrupt unmounting.
	function safelyCallComponentWillUnmount(current,instance){{var unmountError=invokeGuardedCallback$2(null,callComponentWillUnmountWithTimerInDev,null,current,instance);if(unmountError){captureError(current,unmountError);}}}function safelyDetachRef(current){var ref=current.ref;if(ref!==null){{var refError=invokeGuardedCallback$2(null,ref,null,null);if(refError!==null){captureError(current,refError);}}}}function getHostParent(fiber){var parent=fiber['return'];while(parent!==null){switch(parent.tag){case HostComponent$9:return parent.stateNode;case HostRoot$8:return parent.stateNode.containerInfo;case HostPortal$6:return parent.stateNode.containerInfo;}parent=parent['return'];}invariant(false,'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');}function getHostParentFiber(fiber){var parent=fiber['return'];while(parent!==null){if(isHostParent(parent)){return parent;}parent=parent['return'];}invariant(false,'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');}function isHostParent(fiber){return fiber.tag===HostComponent$9||fiber.tag===HostRoot$8||fiber.tag===HostPortal$6;}function getHostSibling(fiber){// We're going to search forward into the tree until we find a sibling host
	// node. Unfortunately, if multiple insertions are done in a row we have to
	// search past them. This leads to exponential search for the next sibling.
	var node=fiber;siblings:while(true){// If we didn't find anything, let's try the next sibling.
	while(node.sibling===null){if(node['return']===null||isHostParent(node['return'])){// If we pop out of the root or hit the parent the fiber we are the
	// last sibling.
	return null;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;while(node.tag!==HostComponent$9&&node.tag!==HostText$7){// If it is not host node and, we might have a host node inside it.
	// Try to search down until we find one.
	if(node.effectTag&Placement$4){// If we don't have a child, try the siblings instead.
	continue siblings;}// If we don't have a child, try the siblings instead.
	// We also skip portals because they are not part of this host tree.
	if(node.child===null||node.tag===HostPortal$6){continue siblings;}else{node.child['return']=node;node=node.child;}}// Check if this host node is stable or about to be placed.
	if(!(node.effectTag&Placement$4)){// Found it!
	return node.stateNode;}}}function commitPlacement(finishedWork){// Recursively insert all host nodes into the parent.
	var parentFiber=getHostParentFiber(finishedWork);var parent=void 0;switch(parentFiber.tag){case HostComponent$9:parent=parentFiber.stateNode;break;case HostRoot$8:parent=parentFiber.stateNode.containerInfo;break;case HostPortal$6:parent=parentFiber.stateNode.containerInfo;break;default:invariant(false,'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');}if(parentFiber.effectTag&ContentReset$2){// Reset the text content of the parent before doing any insertions
	resetTextContent(parent);// Clear ContentReset from the effect tag
	parentFiber.effectTag&=~ContentReset$2;}var before=getHostSibling(finishedWork);// We only have the top Fiber that was inserted but we need recurse down its
	// children to find all the terminal nodes.
	var node=finishedWork;while(true){if(node.tag===HostComponent$9||node.tag===HostText$7){if(before){insertBefore(parent,node.stateNode,before);}else{appendChild(parent,node.stateNode);}}else if(node.tag===HostPortal$6){// If the insertion itself is a portal, then we don't want to traverse
	// down its children. Instead, we'll get insertions from each child in
	// the portal directly.
	}else if(node.child!==null){node.child['return']=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node['return']===null||node['return']===finishedWork){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function commitNestedUnmounts(root){// While we're inside a removed host node we don't want to call
	// removeChild on the inner nodes because they're removed by the top
	// call anyway. We also want to call componentWillUnmount on all
	// composites before this host node is removed from the tree. Therefore
	var node=root;while(true){commitUnmount(node);// Visit children because they may contain more composite or host nodes.
	// Skip portals because commitUnmount() currently visits them recursively.
	if(node.child!==null&&node.tag!==HostPortal$6){node.child['return']=node;node=node.child;continue;}if(node===root){return;}while(node.sibling===null){if(node['return']===null||node['return']===root){return;}node=node['return'];}node.sibling['return']=node['return'];node=node.sibling;}}function unmountHostComponents(parent,current){// We only have the top Fiber that was inserted but we need recurse down its
	var node=current;while(true){if(node.tag===HostComponent$9||node.tag===HostText$7){commitNestedUnmounts(node);// After all the children have unmounted, it is now safe to remove the
	// node from the tree.
	removeChild(parent,node.stateNode);// Don't visit children because we already visited them.
	}else if(node.tag===HostPortal$6){// When we go into a portal, it becomes the parent to remove from.
	// We will reassign it back when we pop the portal on the way up.
	parent=node.stateNode.containerInfo;// Visit children because portals might contain host components.
	if(node.child!==null){node.child['return']=node;node=node.child;continue;}}else{commitUnmount(node);// Visit children because we may find more host components below.
	if(node.child!==null){node.child['return']=node;node=node.child;continue;}}if(node===current){return;}while(node.sibling===null){if(node['return']===null||node['return']===current){return;}node=node['return'];if(node.tag===HostPortal$6){// When we go out of the portal, we need to restore the parent.
	// Since we don't keep a stack of them, we will search for it.
	parent=getHostParent(node);}}node.sibling['return']=node['return'];node=node.sibling;}}function commitDeletion(current){// Recursively delete all host nodes from the parent.
	var parent=getHostParent(current);// Detach refs and call componentWillUnmount() on the whole subtree.
	unmountHostComponents(parent,current);// Cut off the return pointers to disconnect it from the tree. Ideally, we
	// should clear the child pointer of the parent alternate to let this
	// get GC:ed but we don't know which for sure which parent is the current
	// one so we'll settle for GC:ing the subtree of this child. This child
	// itself will be GC:ed when the parent updates the next time.
	current['return']=null;current.child=null;if(current.alternate){current.alternate.child=null;current.alternate['return']=null;}}// User-originating errors (lifecycles and refs) should not interrupt
	// deletion, so don't let them throw. Host-originating errors should
	// interrupt deletion, so it's okay
	function commitUnmount(current){if(typeof onCommitUnmount==='function'){onCommitUnmount(current);}switch(current.tag){case ClassComponent$8:{safelyDetachRef(current);var instance=current.stateNode;if(typeof instance.componentWillUnmount==='function'){safelyCallComponentWillUnmount(current,instance);}return;}case HostComponent$9:{safelyDetachRef(current);return;}case CoroutineComponent$4:{commitNestedUnmounts(current.stateNode);return;}case HostPortal$6:{// TODO: this is recursive.
	// We are also not using this parent because
	// the portal will get pushed immediately.
	var parent=getHostParent(current);unmountHostComponents(parent,current);return;}}}function commitWork(current,finishedWork){switch(finishedWork.tag){case ClassComponent$8:{return;}case HostComponent$9:{var instance=finishedWork.stateNode;if(instance!=null&&current!==null){// Commit the work prepared earlier.
	var newProps=finishedWork.memoizedProps;var oldProps=current.memoizedProps;var type=finishedWork.type;// TODO: Type the updateQueue to be specific to host components.
	var updatePayload=finishedWork.updateQueue;finishedWork.updateQueue=null;if(updatePayload!==null){commitUpdate(instance,updatePayload,type,oldProps,newProps,finishedWork);}}return;}case HostText$7:{!(finishedWork.stateNode!==null&&current!==null)?invariant(false,'This should only be done during updates. This error is likely caused by a bug in React. Please file an issue.'):void 0;var textInstance=finishedWork.stateNode;var newText=finishedWork.memoizedProps;var oldText=current.memoizedProps;commitTextUpdate(textInstance,oldText,newText);return;}case HostRoot$8:{return;}case HostPortal$6:{return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}}function commitLifeCycles(current,finishedWork){switch(finishedWork.tag){case ClassComponent$8:{var instance=finishedWork.stateNode;if(finishedWork.effectTag&Update$3){if(current===null){{startPhaseTimer$2(finishedWork,'componentDidMount');}instance.componentDidMount();{stopPhaseTimer$2();}}else{var prevProps=current.memoizedProps;var prevState=current.memoizedState;{startPhaseTimer$2(finishedWork,'componentDidUpdate');}instance.componentDidUpdate(prevProps,prevState);{stopPhaseTimer$2();}}}if(finishedWork.effectTag&Callback$1&&finishedWork.updateQueue!==null){commitCallbacks$1(finishedWork,finishedWork.updateQueue,instance);}return;}case HostRoot$8:{var updateQueue=finishedWork.updateQueue;if(updateQueue!==null){var _instance=finishedWork.child&&finishedWork.child.stateNode;commitCallbacks$1(finishedWork,updateQueue,_instance);}return;}case HostComponent$9:{var _instance2=finishedWork.stateNode;// Renderers may schedule work to be done after host components are mounted
	// (eg DOM renderer may schedule auto-focus for inputs and form controls).
	// These effects should only be committed when components are first mounted,
	// aka when there is no current/alternate.
	if(current===null&&finishedWork.effectTag&Update$3){var type=finishedWork.type;var props=finishedWork.memoizedProps;commitMount(_instance2,type,props,finishedWork);}return;}case HostText$7:{// We have no life-cycles associated with text.
	return;}case HostPortal$6:{// We have no life-cycles associated with portals.
	return;}default:{invariant(false,'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');}}}function commitAttachRef(finishedWork){var ref=finishedWork.ref;if(ref!==null){var instance=getPublicInstance(finishedWork.stateNode);ref(instance);}}function commitDetachRef(current){var currentRef=current.ref;if(currentRef!==null){currentRef(null);}}return{commitPlacement:commitPlacement,commitDeletion:commitDeletion,commitWork:commitWork,commitLifeCycles:commitLifeCycles,commitAttachRef:commitAttachRef,commitDetachRef:commitDetachRef};};var createCursor$2=ReactFiberStack.createCursor;var pop$2=ReactFiberStack.pop;var push$2=ReactFiberStack.push;var NO_CONTEXT={};var ReactFiberHostContext=function ReactFiberHostContext(config){var getChildHostContext=config.getChildHostContext,getRootHostContext=config.getRootHostContext;var contextStackCursor=createCursor$2(NO_CONTEXT);var contextFiberStackCursor=createCursor$2(NO_CONTEXT);var rootInstanceStackCursor=createCursor$2(NO_CONTEXT);function requiredContext(c){!(c!==NO_CONTEXT)?invariant(false,'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'):void 0;return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
	// This allows us to reset root when portals are popped.
	push$2(rootInstanceStackCursor,nextRootInstance,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Track the context and the Fiber that provided it.
	// This enables us to pop only Fibers that provide unique contexts.
	push$2(contextFiberStackCursor,fiber,fiber);push$2(contextStackCursor,nextRootContext,fiber);}function popHostContainer(fiber){pop$2(contextStackCursor,fiber);pop$2(contextFiberStackCursor,fiber);pop$2(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor.current);var nextContext=getChildHostContext(context,fiber.type,rootInstance);// Don't push this Fiber's context unless it's unique.
	if(context===nextContext){return;}// Track the context and the Fiber that provided it.
	// This enables us to pop only Fibers that provide unique contexts.
	push$2(contextFiberStackCursor,fiber,fiber);push$2(contextStackCursor,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
	// pushHostContext() only pushes Fibers that provide unique contexts.
	if(contextFiberStackCursor.current!==fiber){return;}pop$2(contextStackCursor,fiber);pop$2(contextFiberStackCursor,fiber);}function resetHostContainer(){contextStackCursor.current=NO_CONTEXT;rootInstanceStackCursor.current=NO_CONTEXT;}return{getHostContext:getHostContext,getRootHostContainer:getRootHostContainer,popHostContainer:popHostContainer,popHostContext:popHostContext,pushHostContainer:pushHostContainer,pushHostContext:pushHostContext,resetHostContainer:resetHostContainer};};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFiberInstrumentation
	 * 
	 */// This lets us hook into Fiber to debug what it's doing.
	// See https://github.com/facebook/react/pull/8033.
	// This is not part of the public API, not even for React DevTools.
	// You may only inject a debugTool if you work on React Fiber itself.
	var ReactFiberInstrumentation$2={debugTool:null};var ReactFiberInstrumentation_1=ReactFiberInstrumentation$2;var popContextProvider$1=ReactFiberContext.popContextProvider;var reset$1=ReactFiberStack.reset;var getStackAddendumByWorkInProgressFiber$3=ReactFiberComponentTreeHook.getStackAddendumByWorkInProgressFiber;var logCapturedError=ReactFiberErrorLogger.logCapturedError;var invokeGuardedCallback$1=ReactErrorUtils_1.invokeGuardedCallback;var cloneFiber$1=ReactFiber.cloneFiber;var onCommitRoot=ReactFiberDevToolsHook.onCommitRoot;var NoWork$2=ReactPriorityLevel.NoWork;var SynchronousPriority$1=ReactPriorityLevel.SynchronousPriority;var TaskPriority$1=ReactPriorityLevel.TaskPriority;var AnimationPriority=ReactPriorityLevel.AnimationPriority;var HighPriority=ReactPriorityLevel.HighPriority;var LowPriority=ReactPriorityLevel.LowPriority;var OffscreenPriority=ReactPriorityLevel.OffscreenPriority;var NoEffect$2=ReactTypeOfSideEffect.NoEffect;var Placement$1=ReactTypeOfSideEffect.Placement;var Update=ReactTypeOfSideEffect.Update;var PlacementAndUpdate=ReactTypeOfSideEffect.PlacementAndUpdate;var Deletion=ReactTypeOfSideEffect.Deletion;var ContentReset=ReactTypeOfSideEffect.ContentReset;var Callback=ReactTypeOfSideEffect.Callback;var Err=ReactTypeOfSideEffect.Err;var Ref=ReactTypeOfSideEffect.Ref;var HostRoot$5=ReactTypeOfWork.HostRoot;var HostComponent$6=ReactTypeOfWork.HostComponent;var HostPortal$2=ReactTypeOfWork.HostPortal;var ClassComponent$4=ReactTypeOfWork.ClassComponent;var getPendingPriority$1=ReactFiberUpdateQueue.getPendingPriority;var _require12=ReactFiberContext;var resetContext$1=_require12.resetContext;{var warning$5=warning;var ReactFiberInstrumentation$1=ReactFiberInstrumentation_1;var ReactDebugCurrentFiber$3=ReactDebugCurrentFiber_1;var _require13=ReactDebugFiberPerf_1,recordEffect=_require13.recordEffect,recordScheduleUpdate=_require13.recordScheduleUpdate,startWorkTimer=_require13.startWorkTimer,stopWorkTimer=_require13.stopWorkTimer,startWorkLoopTimer=_require13.startWorkLoopTimer,stopWorkLoopTimer=_require13.stopWorkLoopTimer,startCommitTimer=_require13.startCommitTimer,stopCommitTimer=_require13.stopCommitTimer,startCommitHostEffectsTimer=_require13.startCommitHostEffectsTimer,stopCommitHostEffectsTimer=_require13.stopCommitHostEffectsTimer,startCommitLifeCyclesTimer=_require13.startCommitLifeCyclesTimer,stopCommitLifeCyclesTimer=_require13.stopCommitLifeCyclesTimer;var warnAboutUpdateOnUnmounted=function warnAboutUpdateOnUnmounted(instance){var ctor=instance.constructor;warning$5(false,'Can only update a mounted or mounting component. This usually means '+'you called setState, replaceState, or forceUpdate on an unmounted '+'component. This is a no-op.\n\nPlease check the code for the '+'%s component.',ctor&&(ctor.displayName||ctor.name)||'ReactClass');};var warnAboutInvalidUpdates=function warnAboutInvalidUpdates(instance){switch(ReactDebugCurrentFiber$3.phase){case'getChildContext':warning$5(false,'setState(...): Cannot call setState() inside getChildContext()');break;case'render':warning$5(false,'Cannot update during an existing state transition (such as within '+"`render` or another component's constructor). Render methods should "+'be a pure function of props and state; constructor side-effects are '+'an anti-pattern, but can be moved to `componentWillMount`.');break;}};}var timeHeuristicForUnitOfWork=1;var ReactFiberScheduler=function ReactFiberScheduler(config){var hostContext=ReactFiberHostContext(config);var popHostContainer=hostContext.popHostContainer,popHostContext=hostContext.popHostContext,resetHostContainer=hostContext.resetHostContainer;var _ReactFiberBeginWork=ReactFiberBeginWork(config,hostContext,scheduleUpdate,getPriorityContext),beginWork=_ReactFiberBeginWork.beginWork,beginFailedWork=_ReactFiberBeginWork.beginFailedWork;var _ReactFiberCompleteWo=ReactFiberCompleteWork(config,hostContext),completeWork=_ReactFiberCompleteWo.completeWork;var _ReactFiberCommitWork=ReactFiberCommitWork(config,captureError),commitPlacement=_ReactFiberCommitWork.commitPlacement,commitDeletion=_ReactFiberCommitWork.commitDeletion,commitWork=_ReactFiberCommitWork.commitWork,commitLifeCycles=_ReactFiberCommitWork.commitLifeCycles,commitAttachRef=_ReactFiberCommitWork.commitAttachRef,commitDetachRef=_ReactFiberCommitWork.commitDetachRef;var hostScheduleAnimationCallback=config.scheduleAnimationCallback,hostScheduleDeferredCallback=config.scheduleDeferredCallback,useSyncScheduling=config.useSyncScheduling,prepareForCommit=config.prepareForCommit,resetAfterCommit=config.resetAfterCommit;// The priority level to use when scheduling an update.
	// TODO: Should we change this to an array? Might be less confusing.
	var priorityContext=useSyncScheduling?SynchronousPriority$1:LowPriority;// Keep track of this so we can reset the priority context if an error
	// is thrown during reconciliation.
	var priorityContextBeforeReconciliation=NoWork$2;// Keeps track of whether we're currently in a work loop.
	var isPerformingWork=false;// Keeps track of whether the current deadline has expired.
	var deadlineHasExpired=false;// Keeps track of whether we should should batch sync updates.
	var isBatchingUpdates=false;// The next work in progress fiber that we're currently working on.
	var nextUnitOfWork=null;var nextPriorityLevel=NoWork$2;// The next fiber with an effect that we're currently committing.
	var nextEffect=null;var pendingCommit=null;// Linked list of roots with scheduled work on them.
	var nextScheduledRoot=null;var lastScheduledRoot=null;// Keep track of which host environment callbacks are scheduled.
	var isAnimationCallbackScheduled=false;var isDeferredCallbackScheduled=false;// Keep track of which fibers have captured an error that need to be handled.
	// Work is removed from this collection after unstable_handleError is called.
	var capturedErrors=null;// Keep track of which fibers have failed during the current batch of work.
	// This is a different set than capturedErrors, because it is not reset until
	// the end of the batch. This is needed to propagate errors correctly if a
	// subtree fails more than once.
	var failedBoundaries=null;// Error boundaries that captured an error during the current commit.
	var commitPhaseBoundaries=null;var firstUncaughtError=null;var fatalError=null;var isCommitting=false;var isUnmounting=false;function scheduleAnimationCallback(callback){if(!isAnimationCallbackScheduled){isAnimationCallbackScheduled=true;hostScheduleAnimationCallback(callback);}}function scheduleDeferredCallback(callback){if(!isDeferredCallbackScheduled){isDeferredCallbackScheduled=true;hostScheduleDeferredCallback(callback);}}function resetContextStack(){// Reset the stack
	reset$1();// Reset the cursors
	resetContext$1();resetHostContainer();}// findNextUnitOfWork mutates the current priority context. It is reset after
	// after the workLoop exits, so never call findNextUnitOfWork from outside
	// the work loop.
	function findNextUnitOfWork(){// Clear out roots with no more work on them, or if they have uncaught errors
	while(nextScheduledRoot!==null&&nextScheduledRoot.current.pendingWorkPriority===NoWork$2){// Unschedule this root.
	nextScheduledRoot.isScheduled=false;// Read the next pointer now.
	// We need to clear it in case this root gets scheduled again later.
	var next=nextScheduledRoot.nextScheduledRoot;nextScheduledRoot.nextScheduledRoot=null;// Exit if we cleared all the roots and there's no work to do.
	if(nextScheduledRoot===lastScheduledRoot){nextScheduledRoot=null;lastScheduledRoot=null;nextPriorityLevel=NoWork$2;return null;}// Continue with the next root.
	// If there's no work on it, it will get unscheduled too.
	nextScheduledRoot=next;}var root=nextScheduledRoot;var highestPriorityRoot=null;var highestPriorityLevel=NoWork$2;while(root!==null){if(root.current.pendingWorkPriority!==NoWork$2&&(highestPriorityLevel===NoWork$2||highestPriorityLevel>root.current.pendingWorkPriority)){highestPriorityLevel=root.current.pendingWorkPriority;highestPriorityRoot=root;}// We didn't find anything to do in this root, so let's try the next one.
	root=root.nextScheduledRoot;}if(highestPriorityRoot!==null){nextPriorityLevel=highestPriorityLevel;priorityContext=nextPriorityLevel;// Before we start any new work, let's make sure that we have a fresh
	// stack to work from.
	// TODO: This call is buried a bit too deep. It would be nice to have
	// a single point which happens right before any new work and
	// unfortunately this is it.
	resetContextStack();return cloneFiber$1(highestPriorityRoot.current,highestPriorityLevel);}nextPriorityLevel=NoWork$2;return null;}function commitAllHostEffects(){while(nextEffect!==null){{ReactDebugCurrentFiber$3.current=nextEffect;recordEffect();}var effectTag=nextEffect.effectTag;if(effectTag&ContentReset){config.resetTextContent(nextEffect.stateNode);}if(effectTag&Ref){var current=nextEffect.alternate;if(current!==null){commitDetachRef(current);}}// The following switch statement is only concerned about placement,
	// updates, and deletions. To avoid needing to add a case for every
	// possible bitmap value, we remove the secondary effects from the
	// effect tag and switch on that value.
	var primaryEffectTag=effectTag&~(Callback|Err|ContentReset|Ref);switch(primaryEffectTag){case Placement$1:{commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is inserted, before
	// any life-cycles like componentDidMount gets called.
	// TODO: findDOMNode doesn't rely on this any more but isMounted
	// does and isMounted is deprecated anyway so we should be able
	// to kill this.
	nextEffect.effectTag&=~Placement$1;break;}case PlacementAndUpdate:{// Placement
	commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is inserted, before
	// any life-cycles like componentDidMount gets called.
	nextEffect.effectTag&=~Placement$1;// Update
	var _current=nextEffect.alternate;commitWork(_current,nextEffect);break;}case Update:{var _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break;}case Deletion:{isUnmounting=true;commitDeletion(nextEffect);isUnmounting=false;break;}}nextEffect=nextEffect.nextEffect;}{ReactDebugCurrentFiber$3.current=null;}}function commitAllLifeCycles(){while(nextEffect!==null){var effectTag=nextEffect.effectTag;// Use Task priority for lifecycle updates
	if(effectTag&(Update|Callback)){{recordEffect();}var current=nextEffect.alternate;commitLifeCycles(current,nextEffect);}if(effectTag&Ref){{recordEffect();}commitAttachRef(nextEffect);}if(effectTag&Err){{recordEffect();}commitErrorHandling(nextEffect);}var next=nextEffect.nextEffect;// Ensure that we clean these up so that we don't accidentally keep them.
	// I'm not actually sure this matters because we can't reset firstEffect
	// and lastEffect since they're on every node, not just the effectful
	// ones. So we have to clean everything as we reuse nodes anyway.
	nextEffect.nextEffect=null;// Ensure that we reset the effectTag here so that we can rely on effect
	// tags to reason about the current life-cycle.
	nextEffect=next;}}function commitAllWork(finishedWork){// We keep track of this so that captureError can collect any boundaries
	// that capture an error during the commit phase. The reason these aren't
	// local to this function is because errors that occur during cWU are
	// captured elsewhere, to prevent the unmount from being interrupted.
	isCommitting=true;{startCommitTimer();}pendingCommit=null;var root=finishedWork.stateNode;!(root.current!==finishedWork)?invariant(false,'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.'):void 0;// Reset this to null before calling lifecycles
	ReactCurrentOwnerRollupShim.current=null;// Updates that occur during the commit phase should have Task priority
	var previousPriorityContext=priorityContext;priorityContext=TaskPriority$1;var firstEffect=void 0;if(finishedWork.effectTag!==NoEffect$2){// A fiber's effect list consists only of its children, not itself. So if
	// the root has an effect, we need to add it to the end of the list. The
	// resulting list is the set that would belong to the root's parent, if
	// it had one; that is, all the effects in the tree including the root.
	if(finishedWork.lastEffect!==null){finishedWork.lastEffect.nextEffect=finishedWork;firstEffect=finishedWork.firstEffect;}else{firstEffect=finishedWork;}}else{// There is no effect on the root.
	firstEffect=finishedWork.firstEffect;}var commitInfo=prepareForCommit();// Commit all the side-effects within a tree. We'll do this in two passes.
	// The first pass performs all the host insertions, updates, deletions and
	// ref unmounts.
	nextEffect=firstEffect;{startCommitHostEffectsTimer();}while(nextEffect!==null){var _error=null;{_error=invokeGuardedCallback$1(null,commitAllHostEffects,null,finishedWork);}if(_error!==null){!(nextEffect!==null)?invariant(false,'Should have next effect. This error is likely caused by a bug in React. Please file an issue.'):void 0;captureError(nextEffect,_error);// Clean-up
	if(nextEffect!==null){nextEffect=nextEffect.nextEffect;}}}{stopCommitHostEffectsTimer();}resetAfterCommit(commitInfo);// The work-in-progress tree is now the current tree. This must come after
	// the first pass of the commit phase, so that the previous tree is still
	// current during componentWillUnmount, but before the second pass, so that
	// the finished work is current during componentDidMount/Update.
	root.current=finishedWork;// In the second pass we'll perform all life-cycles and ref callbacks.
	// Life-cycles happen as a separate pass so that all placements, updates,
	// and deletions in the entire tree have already been invoked.
	// This pass also triggers any renderer-specific initial effects.
	nextEffect=firstEffect;{startCommitLifeCyclesTimer();}while(nextEffect!==null){var _error2=null;{_error2=invokeGuardedCallback$1(null,commitAllLifeCycles,null,finishedWork);}if(_error2!==null){!(nextEffect!==null)?invariant(false,'Should have next effect. This error is likely caused by a bug in React. Please file an issue.'):void 0;captureError(nextEffect,_error2);if(nextEffect!==null){nextEffect=nextEffect.nextEffect;}}}isCommitting=false;{stopCommitLifeCyclesTimer();stopCommitTimer();}if(typeof onCommitRoot==='function'){onCommitRoot(finishedWork.stateNode);}if('development'!=='production'&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onCommitWork(finishedWork);}// If we caught any errors during this commit, schedule their boundaries
	// to update.
	if(commitPhaseBoundaries){commitPhaseBoundaries.forEach(scheduleErrorRecovery);commitPhaseBoundaries=null;}priorityContext=previousPriorityContext;}function resetWorkPriority(workInProgress){var newPriority=NoWork$2;// Check for pending update priority. This is usually null so it shouldn't
	// be a perf issue.
	var queue=workInProgress.updateQueue;var tag=workInProgress.tag;if(queue!==null&&(// TODO: Revisit once updateQueue is typed properly to distinguish between
	// update payloads for host components and update queues for composites
	tag===ClassComponent$4||tag===HostRoot$5)){newPriority=getPendingPriority$1(queue);}// TODO: Coroutines need to visit stateNode
	// progressedChild is going to be the child set with the highest priority.
	// Either it is the same as child, or it just bailed out because it choose
	// not to do the work.
	var child=workInProgress.progressedChild;while(child!==null){// Ensure that remaining work priority bubbles up.
	if(child.pendingWorkPriority!==NoWork$2&&(newPriority===NoWork$2||newPriority>child.pendingWorkPriority)){newPriority=child.pendingWorkPriority;}child=child.sibling;}workInProgress.pendingWorkPriority=newPriority;}function completeUnitOfWork(workInProgress){while(true){// The current, flushed, state of this fiber is the alternate.
	// Ideally nothing should rely on this, but relying on it here
	// means that we don't need an additional field on the work in
	// progress.
	var current=workInProgress.alternate;var next=completeWork(current,workInProgress);var returnFiber=workInProgress['return'];var siblingFiber=workInProgress.sibling;resetWorkPriority(workInProgress);if(next!==null){{stopWorkTimer(workInProgress);}if('development'!=='production'&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);}// If completing this work spawned new work, do that next. We'll come
	// back here again.
	return next;}if(returnFiber!==null){// Append all the effects of the subtree and this fiber onto the effect
	// list of the parent. The completion order of the children affects the
	// side-effect order.
	if(returnFiber.firstEffect===null){returnFiber.firstEffect=workInProgress.firstEffect;}if(workInProgress.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress.firstEffect;}returnFiber.lastEffect=workInProgress.lastEffect;}// If this fiber had side-effects, we append it AFTER the children's
	// side-effects. We can perform certain side-effects earlier if
	// needed, by doing multiple passes over the effect list. We don't want
	// to schedule our own side-effect on our own list because if end up
	// reusing children we'll schedule this effect onto itself since we're
	// at the end.
	if(workInProgress.effectTag!==NoEffect$2){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress;}else{returnFiber.firstEffect=workInProgress;}returnFiber.lastEffect=workInProgress;}}{stopWorkTimer(workInProgress);}if('development'!=='production'&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);}if(siblingFiber!==null){// If there is more work to do in this returnFiber, do that next.
	return siblingFiber;}else if(returnFiber!==null){// If there's no more work in this returnFiber. Complete the returnFiber.
	workInProgress=returnFiber;continue;}else{// We've reached the root. Unless we're current performing deferred
	// work, we should commit the completed work immediately. If we are
	// performing deferred work, returning null indicates to the caller
	// that we just completed the root so they can handle that case correctly.
	if(nextPriorityLevel<HighPriority){// Otherwise, we should commit immediately.
	commitAllWork(workInProgress);}else{pendingCommit=workInProgress;}return null;}}// Without this explicit null return Flow complains of invalid return type
	// TODO Remove the above while(true) loop
	// eslint-disable-next-line no-unreachable
	return null;}function performUnitOfWork(workInProgress){// The current, flushed, state of this fiber is the alternate.
	// Ideally nothing should rely on this, but relying on it here
	// means that we don't need an additional field on the work in
	// progress.
	var current=workInProgress.alternate;// See if beginning this work spawns more work.
	{startWorkTimer(workInProgress);}var next=beginWork(current,workInProgress,nextPriorityLevel);if('development'!=='production'&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);}if(next===null){// If this doesn't spawn new work, complete the current work.
	next=completeUnitOfWork(workInProgress);}ReactCurrentOwnerRollupShim.current=null;{ReactDebugCurrentFiber$3.current=null;}return next;}function performFailedUnitOfWork(workInProgress){// The current, flushed, state of this fiber is the alternate.
	// Ideally nothing should rely on this, but relying on it here
	// means that we don't need an additional field on the work in
	// progress.
	var current=workInProgress.alternate;// See if beginning this work spawns more work.
	{startWorkTimer(workInProgress);}var next=beginFailedWork(current,workInProgress,nextPriorityLevel);if('development'!=='production'&&ReactFiberInstrumentation$1.debugTool){ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);}if(next===null){// If this doesn't spawn new work, complete the current work.
	next=completeUnitOfWork(workInProgress);}ReactCurrentOwnerRollupShim.current=null;{ReactDebugCurrentFiber$3.current=null;}return next;}function performDeferredWork(deadline){// We pass the lowest deferred priority here because it acts as a minimum.
	// Higher priorities will also be performed.
	isDeferredCallbackScheduled=false;performWork(OffscreenPriority,deadline);}function performAnimationWork(){isAnimationCallbackScheduled=false;performWork(AnimationPriority,null);}function clearErrors(){if(nextUnitOfWork===null){nextUnitOfWork=findNextUnitOfWork();}// Keep performing work until there are no more errors
	while(capturedErrors!==null&&capturedErrors.size&&nextUnitOfWork!==null&&nextPriorityLevel!==NoWork$2&&nextPriorityLevel<=TaskPriority$1){if(hasCapturedError(nextUnitOfWork)){// Use a forked version of performUnitOfWork
	nextUnitOfWork=performFailedUnitOfWork(nextUnitOfWork);}else{nextUnitOfWork=performUnitOfWork(nextUnitOfWork);}if(nextUnitOfWork===null){// If performUnitOfWork returns null, that means we just committed
	// a root. Normally we'd need to clear any errors that were scheduled
	// during the commit phase. But we're already clearing errors, so
	// we can continue.
	nextUnitOfWork=findNextUnitOfWork();}}}function workLoop(priorityLevel,deadline){// Clear any errors.
	clearErrors();if(nextUnitOfWork===null){nextUnitOfWork=findNextUnitOfWork();}var hostRootTimeMarker=void 0;if(ReactFeatureFlags_1.logTopLevelRenders&&nextUnitOfWork!==null&&nextUnitOfWork.tag===HostRoot$5&&nextUnitOfWork.child!==null){var _componentName=getComponentName_1(nextUnitOfWork.child)||'';hostRootTimeMarker='React update: '+_componentName;console.time(hostRootTimeMarker);}// If there's a deadline, and we're not performing Task work, perform work
	// using this loop that checks the deadline on every iteration.
	if(deadline!==null&&priorityLevel>TaskPriority$1){// The deferred work loop will run until there's no time left in
	// the current frame.
	while(nextUnitOfWork!==null&&!deadlineHasExpired){if(deadline.timeRemaining()>timeHeuristicForUnitOfWork){nextUnitOfWork=performUnitOfWork(nextUnitOfWork);// In a deferred work batch, iff nextUnitOfWork returns null, we just
	// completed a root and a pendingCommit exists. Logically, we could
	// omit either of the checks in the following condition, but we need
	// both to satisfy Flow.
	if(nextUnitOfWork===null&&pendingCommit!==null){// If we have time, we should commit the work now.
	if(deadline.timeRemaining()>timeHeuristicForUnitOfWork){commitAllWork(pendingCommit);nextUnitOfWork=findNextUnitOfWork();// Clear any errors that were scheduled during the commit phase.
	clearErrors();}else{deadlineHasExpired=true;}// Otherwise the root will committed in the next frame.
	}}else{deadlineHasExpired=true;}}}else{// If there's no deadline, or if we're performing Task work, use this loop
	// that doesn't check how much time is remaining. It will keep running
	// until we run out of work at this priority level.
	while(nextUnitOfWork!==null&&nextPriorityLevel!==NoWork$2&&nextPriorityLevel<=priorityLevel){nextUnitOfWork=performUnitOfWork(nextUnitOfWork);if(nextUnitOfWork===null){nextUnitOfWork=findNextUnitOfWork();// performUnitOfWork returned null, which means we just committed a
	// root. Clear any errors that were scheduled during the commit phase.
	clearErrors();}}}if(hostRootTimeMarker){console.timeEnd(hostRootTimeMarker);}}function performWork(priorityLevel,deadline){{startWorkLoopTimer();}!!isPerformingWork?invariant(false,'performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.'):void 0;isPerformingWork=true;var isPerformingDeferredWork=!!deadline;// This outer loop exists so that we can restart the work loop after
	// catching an error. It also lets us flush Task work at the end of a
	// deferred batch.
	while(priorityLevel!==NoWork$2&&!fatalError){!(deadline!==null||priorityLevel<HighPriority)?invariant(false,'Cannot perform deferred work without a deadline. This error is likely caused by a bug in React. Please file an issue.'):void 0;// Before starting any work, check to see if there are any pending
	// commits from the previous frame.
	if(pendingCommit!==null&&!deadlineHasExpired){commitAllWork(pendingCommit);}// Nothing in performWork should be allowed to throw. All unsafe
	// operations must happen within workLoop, which is extracted to a
	// separate function so that it can be optimized by the JS engine.
	priorityContextBeforeReconciliation=priorityContext;var _error3=null;{_error3=invokeGuardedCallback$1(null,workLoop,null,priorityLevel,deadline);}// Reset the priority context to its value before reconcilation.
	priorityContext=priorityContextBeforeReconciliation;if(_error3!==null){// We caught an error during either the begin or complete phases.
	var failedWork=nextUnitOfWork;if(failedWork!==null){// "Capture" the error by finding the nearest boundary. If there is no
	// error boundary, the nearest host container acts as one. If
	// captureError returns null, the error was intentionally ignored.
	var maybeBoundary=captureError(failedWork,_error3);if(maybeBoundary!==null){var boundary=maybeBoundary;// Complete the boundary as if it rendered null. This will unmount
	// the failed tree.
	beginFailedWork(boundary.alternate,boundary,priorityLevel);// The next unit of work is now the boundary that captured the error.
	// Conceptually, we're unwinding the stack. We need to unwind the
	// context stack, too, from the failed work to the boundary that
	// captured the error.
	// TODO: If we set the memoized props in beginWork instead of
	// completeWork, rather than unwind the stack, we can just restart
	// from the root. Can't do that until then because without memoized
	// props, the nodes higher up in the tree will rerender unnecessarily.
	unwindContexts(failedWork,boundary);nextUnitOfWork=completeUnitOfWork(boundary);}// Continue performing work
	continue;}else if(fatalError===null){// There is no current unit of work. This is a worst-case scenario
	// and should only be possible if there's a bug in the renderer, e.g.
	// inside resetAfterCommit.
	fatalError=_error3;}}// Stop performing work
	priorityLevel=NoWork$2;// If have we more work, and we're in a deferred batch, check to see
	// if the deadline has expired.
	if(nextPriorityLevel!==NoWork$2&&isPerformingDeferredWork&&!deadlineHasExpired){// We have more time to do work.
	priorityLevel=nextPriorityLevel;continue;}// There might be work left. Depending on the priority, we should
	// either perform it now or schedule a callback to perform it later.
	switch(nextPriorityLevel){case SynchronousPriority$1:case TaskPriority$1:// Perform work immediately by switching the priority level
	// and continuing the loop.
	priorityLevel=nextPriorityLevel;break;case AnimationPriority:scheduleAnimationCallback(performAnimationWork);// Even though the next unit of work has animation priority, there
	// may still be deferred work left over as well. I think this is
	// only important for unit tests. In a real app, a deferred callback
	// would be scheduled during the next animation frame.
	scheduleDeferredCallback(performDeferredWork);break;case HighPriority:case LowPriority:case OffscreenPriority:scheduleDeferredCallback(performDeferredWork);break;}}var errorToThrow=fatalError||firstUncaughtError;// We're done performing work. Time to clean up.
	isPerformingWork=false;deadlineHasExpired=false;fatalError=null;firstUncaughtError=null;capturedErrors=null;failedBoundaries=null;{stopWorkLoopTimer();}// It's safe to throw any unhandled errors.
	if(errorToThrow!==null){throw errorToThrow;}}// Returns the boundary that captured the error, or null if the error is ignored
	function captureError(failedWork,error){// It is no longer valid because we exited the user code.
	ReactCurrentOwnerRollupShim.current=null;{ReactDebugCurrentFiber$3.current=null;ReactDebugCurrentFiber$3.phase=null;}// It is no longer valid because this unit of work failed.
	nextUnitOfWork=null;// Search for the nearest error boundary.
	var boundary=null;// Passed to logCapturedError()
	var errorBoundaryFound=false;var willRetry=false;var errorBoundaryName=null;// Host containers are a special case. If the failed work itself is a host
	// container, then it acts as its own boundary. In all other cases, we
	// ignore the work itself and only search through the parents.
	if(failedWork.tag===HostRoot$5){boundary=failedWork;if(isFailedBoundary(failedWork)){// If this root already failed, there must have been an error when
	// attempting to unmount it. This is a worst-case scenario and
	// should only be possible if there's a bug in the renderer.
	fatalError=error;}}else{var node=failedWork['return'];while(node!==null&&boundary===null){if(node.tag===ClassComponent$4){var instance=node.stateNode;if(typeof instance.unstable_handleError==='function'){errorBoundaryFound=true;errorBoundaryName=getComponentName_1(node);// Found an error boundary!
	boundary=node;willRetry=true;}}else if(node.tag===HostRoot$5){// Treat the root like a no-op error boundary.
	boundary=node;}if(isFailedBoundary(node)){// This boundary is already in a failed state.
	// If we're currently unmounting, that means this error was
	// thrown while unmounting a failed subtree. We should ignore
	// the error.
	if(isUnmounting){return null;}// If we're in the commit phase, we should check to see if
	// this boundary already captured an error during this commit.
	// This case exists because multiple errors can be thrown during
	// a single commit without interruption.
	if(commitPhaseBoundaries!==null&&(commitPhaseBoundaries.has(node)||node.alternate!==null&&commitPhaseBoundaries.has(node.alternate))){// If so, we should ignore this error.
	return null;}// The error should propagate to the next boundary -— we keep looking.
	boundary=null;willRetry=false;}node=node['return'];}}if(boundary!==null){// Add to the collection of failed boundaries. This lets us know that
	// subsequent errors in this subtree should propagate to the next boundary.
	if(failedBoundaries===null){failedBoundaries=new Set();}failedBoundaries.add(boundary);// This method is unsafe outside of the begin and complete phases.
	// We might be in the commit phase when an error is captured.
	// The risk is that the return path from this Fiber may not be accurate.
	// That risk is acceptable given the benefit of providing users more context.
	var _componentStack=getStackAddendumByWorkInProgressFiber$3(failedWork);var _componentName2=getComponentName_1(failedWork);// Add to the collection of captured errors. This is stored as a global
	// map of errors and their component stack location keyed by the boundaries
	// that capture them. We mostly use this Map as a Set; it's a Map only to
	// avoid adding a field to Fiber to store the error.
	if(capturedErrors===null){capturedErrors=new Map();}capturedErrors.set(boundary,{componentName:_componentName2,componentStack:_componentStack,error:error,errorBoundary:errorBoundaryFound?boundary.stateNode:null,errorBoundaryFound:errorBoundaryFound,errorBoundaryName:errorBoundaryName,willRetry:willRetry});// If we're in the commit phase, defer scheduling an update on the
	// boundary until after the commit is complete
	if(isCommitting){if(commitPhaseBoundaries===null){commitPhaseBoundaries=new Set();}commitPhaseBoundaries.add(boundary);}else{// Otherwise, schedule an update now.
	scheduleErrorRecovery(boundary);}return boundary;}else if(firstUncaughtError===null){// If no boundary is found, we'll need to throw the error
	firstUncaughtError=error;}return null;}function hasCapturedError(fiber){// TODO: capturedErrors should store the boundary instance, to avoid needing
	// to check the alternate.
	return capturedErrors!==null&&(capturedErrors.has(fiber)||fiber.alternate!==null&&capturedErrors.has(fiber.alternate));}function isFailedBoundary(fiber){// TODO: failedBoundaries should store the boundary instance, to avoid
	// needing to check the alternate.
	return failedBoundaries!==null&&(failedBoundaries.has(fiber)||fiber.alternate!==null&&failedBoundaries.has(fiber.alternate));}function commitErrorHandling(effectfulFiber){var capturedError=void 0;if(capturedErrors!==null){capturedError=capturedErrors.get(effectfulFiber);capturedErrors['delete'](effectfulFiber);if(capturedError==null){if(effectfulFiber.alternate!==null){effectfulFiber=effectfulFiber.alternate;capturedError=capturedErrors.get(effectfulFiber);capturedErrors['delete'](effectfulFiber);}}}!(capturedError!=null)?invariant(false,'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.'):void 0;var error=capturedError.error;try{logCapturedError(capturedError);}catch(e){// Prevent cycle if logCapturedError() throws.
	// A cycle may still occur if logCapturedError renders a component that throws.
	console.error(e);}switch(effectfulFiber.tag){case ClassComponent$4:var instance=effectfulFiber.stateNode;var info={componentStack:capturedError.componentStack};// Allow the boundary to handle the error, usually by scheduling
	// an update to itself
	instance.unstable_handleError(error,info);return;case HostRoot$5:if(firstUncaughtError===null){// If this is the host container, we treat it as a no-op error
	// boundary. We'll throw the first uncaught error once it's safe to
	// do so, at the end of the batch.
	firstUncaughtError=error;}return;default:invariant(false,'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');}}function unwindContexts(from,to){var node=from;while(node!==null&&node!==to&&node.alternate!==to){switch(node.tag){case ClassComponent$4:popContextProvider$1(node);break;case HostComponent$6:popHostContext(node);break;case HostRoot$5:popHostContainer(node);break;case HostPortal$2:popHostContainer(node);break;}{stopWorkTimer(node);}node=node['return'];}}function scheduleRoot(root,priorityLevel){if(priorityLevel===NoWork$2){return;}if(!root.isScheduled){root.isScheduled=true;if(lastScheduledRoot){// Schedule ourselves to the end.
	lastScheduledRoot.nextScheduledRoot=root;lastScheduledRoot=root;}else{// We're the only work scheduled.
	nextScheduledRoot=root;lastScheduledRoot=root;}}}function scheduleUpdate(fiber,priorityLevel){{recordScheduleUpdate();}if(priorityLevel<=nextPriorityLevel){// We must reset the current unit of work pointer so that we restart the
	// search from the root during the next tick, in case there is now higher
	// priority work somewhere earlier than before.
	nextUnitOfWork=null;}{if(fiber.tag===ClassComponent$4){var instance=fiber.stateNode;warnAboutInvalidUpdates(instance);}}var node=fiber;var shouldContinue=true;while(node!==null&&shouldContinue){// Walk the parent path to the root and update each node's priority. Once
	// we reach a node whose priority matches (and whose alternate's priority
	// matches) we can exit safely knowing that the rest of the path is correct.
	shouldContinue=false;if(node.pendingWorkPriority===NoWork$2||node.pendingWorkPriority>priorityLevel){// Priority did not match. Update and keep going.
	shouldContinue=true;node.pendingWorkPriority=priorityLevel;}if(node.alternate!==null){if(node.alternate.pendingWorkPriority===NoWork$2||node.alternate.pendingWorkPriority>priorityLevel){// Priority did not match. Update and keep going.
	shouldContinue=true;node.alternate.pendingWorkPriority=priorityLevel;}}if(node['return']===null){if(node.tag===HostRoot$5){var root=node.stateNode;scheduleRoot(root,priorityLevel);// Depending on the priority level, either perform work now or
	// schedule a callback to perform work later.
	switch(priorityLevel){case SynchronousPriority$1:performWork(SynchronousPriority$1,null);return;case TaskPriority$1:// TODO: If we're not already performing work, schedule a
	// deferred callback.
	return;case AnimationPriority:scheduleAnimationCallback(performAnimationWork);return;case HighPriority:case LowPriority:case OffscreenPriority:scheduleDeferredCallback(performDeferredWork);return;}}else{{if(fiber.tag===ClassComponent$4){warnAboutUpdateOnUnmounted(fiber.stateNode);}}return;}}node=node['return'];}}function getPriorityContext(){// If we're in a batch, or if we're already performing work, downgrade sync
	// priority to task priority
	if(priorityContext===SynchronousPriority$1&&(isPerformingWork||isBatchingUpdates)){return TaskPriority$1;}return priorityContext;}function scheduleErrorRecovery(fiber){scheduleUpdate(fiber,TaskPriority$1);}function performWithPriority(priorityLevel,fn){var previousPriorityContext=priorityContext;priorityContext=priorityLevel;try{fn();}finally{priorityContext=previousPriorityContext;}}function batchedUpdates(fn,a){var previousIsBatchingUpdates=isBatchingUpdates;isBatchingUpdates=true;try{return fn(a);}finally{isBatchingUpdates=previousIsBatchingUpdates;// If we're not already inside a batch, we need to flush any task work
	// that was created by the user-provided function.
	if(!isPerformingWork&&!isBatchingUpdates){performWork(TaskPriority$1,null);}}}function unbatchedUpdates(fn){var previousIsBatchingUpdates=isBatchingUpdates;isBatchingUpdates=false;try{return fn();}finally{isBatchingUpdates=previousIsBatchingUpdates;}}function syncUpdates(fn){var previousPriorityContext=priorityContext;priorityContext=SynchronousPriority$1;try{return fn();}finally{priorityContext=previousPriorityContext;}}function deferredUpdates(fn){var previousPriorityContext=priorityContext;priorityContext=LowPriority;try{return fn();}finally{priorityContext=previousPriorityContext;}}return{scheduleUpdate:scheduleUpdate,getPriorityContext:getPriorityContext,performWithPriority:performWithPriority,batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,syncUpdates:syncUpdates,deferredUpdates:deferredUpdates};};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getContextForSubtree
	 * 
	 */var getContextFiber=function getContextFiber(arg){invariant(false,'Missing injection for fiber getContextForSubtree');};function getContextForSubtree(parentComponent){if(!parentComponent){return emptyObject;}var instance=ReactInstanceMap_1.get(parentComponent);if(typeof instance.tag==='number'){return getContextFiber(instance);}else{return instance._processChildContext(instance._context);}}getContextForSubtree._injectFiber=function(fn){getContextFiber=fn;};var getContextForSubtree_1=getContextForSubtree;var addTopLevelUpdate=ReactFiberUpdateQueue.addTopLevelUpdate;var findCurrentUnmaskedContext=ReactFiberContext.findCurrentUnmaskedContext;var isContextProvider=ReactFiberContext.isContextProvider;var processChildContext=ReactFiberContext.processChildContext;var createFiberRoot=ReactFiberRoot.createFiberRoot;{var warning$2=warning;var ReactFiberInstrumentation=ReactFiberInstrumentation_1;var ReactDebugCurrentFiber$1=ReactDebugCurrentFiber_1;var getComponentName$3=getComponentName_1;}var findCurrentHostFiber=ReactFiberTreeReflection.findCurrentHostFiber;getContextForSubtree_1._injectFiber(function(fiber){var parentContext=findCurrentUnmaskedContext(fiber);return isContextProvider(fiber)?processChildContext(fiber,parentContext,false):parentContext;});var ReactFiberReconciler=function ReactFiberReconciler(config){var _ReactFiberScheduler=ReactFiberScheduler(config),scheduleUpdate=_ReactFiberScheduler.scheduleUpdate,getPriorityContext=_ReactFiberScheduler.getPriorityContext,performWithPriority=_ReactFiberScheduler.performWithPriority,batchedUpdates=_ReactFiberScheduler.batchedUpdates,unbatchedUpdates=_ReactFiberScheduler.unbatchedUpdates,syncUpdates=_ReactFiberScheduler.syncUpdates,deferredUpdates=_ReactFiberScheduler.deferredUpdates;function scheduleTopLevelUpdate(current,element,callback){{if(ReactDebugCurrentFiber$1.phase==='render'&&ReactDebugCurrentFiber$1.current!==null){warning$2(false,'Render methods should be a pure function of props and state; '+'triggering nested component updates from render is not allowed. '+'If necessary, trigger nested updates in componentDidUpdate.\n\n'+'Check the render method of %s.',getComponentName$3(ReactDebugCurrentFiber$1.current)||'Unknown');}}var priorityLevel=getPriorityContext();var nextState={element:element};callback=callback===undefined?null:callback;{warning$2(callback===null||typeof callback==='function','render(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callback);}addTopLevelUpdate(current,nextState,callback,priorityLevel);scheduleUpdate(current,priorityLevel);}return{createContainer:function createContainer(containerInfo){return createFiberRoot(containerInfo);},updateContainer:function updateContainer(element,container,parentComponent,callback){// TODO: If this is a nested container, this won't be the root.
	var current=container.current;{if(ReactFiberInstrumentation.debugTool){if(current.alternate===null){ReactFiberInstrumentation.debugTool.onMountContainer(container);}else if(element===null){ReactFiberInstrumentation.debugTool.onUnmountContainer(container);}else{ReactFiberInstrumentation.debugTool.onUpdateContainer(container);}}}var context=getContextForSubtree_1(parentComponent);if(container.context===null){container.context=context;}else{container.pendingContext=context;}scheduleTopLevelUpdate(current,element,callback);},performWithPriority:performWithPriority,batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,syncUpdates:syncUpdates,deferredUpdates:deferredUpdates,getPublicRootInstance:function getPublicRootInstance(container){var containerFiber=container.current;if(!containerFiber.child){return null;}return containerFiber.child.stateNode;},findHostInstance:function findHostInstance(fiber){var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}};};/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * 
	 */var findFiber=function findFiber(arg){invariant(false,'Missing injection for fiber findDOMNode');};var findStack=function findStack(arg){invariant(false,'Missing injection for stack findDOMNode');};var findDOMNode=function findDOMNode(componentOrElement){{var owner=ReactCurrentOwnerRollupShim.current;if(owner!==null){var isFiber=typeof owner.tag==='number';var warnedAboutRefsInRender=isFiber?owner.stateNode._warnedAboutRefsInRender:owner._warnedAboutRefsInRender;warning(warnedAboutRefsInRender,'%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName_1(owner)||'A component');if(isFiber){owner.stateNode._warnedAboutRefsInRender=true;}else{owner._warnedAboutRefsInRender=true;}}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===1){return componentOrElement;}var inst=ReactInstanceMap_1.get(componentOrElement);if(inst){if(typeof inst.tag==='number'){return findFiber(inst);}else{return findStack(inst);}}if(typeof componentOrElement.render==='function'){invariant(false,'Unable to find node on an unmounted component.');}else{invariant(false,'Element appears to be neither ReactComponent nor DOMNode. Keys: %s',Object.keys(componentOrElement));}};findDOMNode._injectFiber=function(fn){findFiber=fn;};findDOMNode._injectStack=function(fn){findStack=fn;};var findDOMNode_1=findDOMNode;var validateDOMNesting$1=emptyFunction;{var _require$11=ReactDebugCurrentFiber_1,getCurrentFiberStackAddendum$2=_require$11.getCurrentFiberStackAddendum;// This validation code was written based on the HTML5 parsing spec:
	// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	//
	// Note: this does not catch all invalid nesting, nor does it try to (as it's
	// not clear what practical benefit doing so provides); instead, we warn only
	// for cases where the parser will give a parse tree differing from what React
	// intended. For example, <b><div></div></b> is invalid but we don't warn
	// because it still parses correctly; we do warn for other cases like nested
	// <p> tags where the beginning of the second element implicitly closes the
	// first, causing a confusing mess.
	// https://html.spec.whatwg.org/multipage/syntax.html#special
	var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	// TODO: Distinguish by namespace here -- for <title>, including it here
	// errs on the side of fewer warnings
	'foreignObject','desc','title'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	var buttonScopeTags=inScopeTags.concat(['button']);// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};var updatedAncestorInfo$1=function updatedAncestorInfo$1(oldInfo,tag,instance){var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);var info={tag:tag,instance:instance};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;}// See rules for 'li', 'dd', 'dt' start tags in
	// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;};/**
	   * Returns whether
	   */var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){// First, let's check if we're in an unusual parsing mode...
	switch(parentTag){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	case'select':return tag==='option'||tag==='optgroup'||tag==='#text';case'optgroup':return tag==='option'||tag==='#text';// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	// but
	case'option':return tag==='#text';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	// No special behavior since these rules fall back to "in body" mode for
	// all except special table nodes which cause bad parsing behavior anyway.
	// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	case'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	case'tbody':case'thead':case'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	case'colgroup':return tag==='col'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	case'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	case'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	case'html':return tag==='head'||tag==='body';case'#document':return tag==='html';}// Probably in the "in body" parsing mode, so we outlaw only tag combos
	// where the parsing rules cause implicit opens or closes to be added.
	// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	switch(tag){case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case'rp':case'rt':return impliedEndTags.indexOf(parentTag)===-1;case'body':case'caption':case'col':case'colgroup':case'frame':case'head':case'html':case'tbody':case'td':case'tfoot':case'th':case'thead':case'tr':// These tags are only valid with a few parents that have special child
	// parsing rules -- if we're down here, then none of those matched and
	// so we allow it only if we don't know what the parent is, as all other
	// cases are invalid.
	return parentTag==null;}return true;};/**
	   * Returns whether
	   */var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){switch(tag){case'address':case'article':case'aside':case'blockquote':case'center':case'details':case'dialog':case'dir':case'div':case'dl':case'fieldset':case'figcaption':case'figure':case'footer':case'header':case'hgroup':case'main':case'menu':case'nav':case'ol':case'p':case'section':case'summary':case'ul':case'pre':case'listing':case'table':case'hr':case'xmp':case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return ancestorInfo.pTagInButtonScope;case'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case'li':return ancestorInfo.listItemTagAutoclosing;case'dd':case'dt':return ancestorInfo.dlItemTagAutoclosing;case'button':return ancestorInfo.buttonTagInScope;case'a':// Spec says something about storing a list of markers, but it sounds
	// equivalent to this check.
	return ancestorInfo.aTagInScope;case'nobr':return ancestorInfo.nobrTagInScope;}return null;};/**
	   * Given a ReactCompositeComponent instance, return a list of its recursive
	   * owners, starting at the root and ending with the instance itself.
	   */var findOwnerStack=function findOwnerStack(instance){if(!instance){return[];}var stack=[];do{stack.push(instance);}while(instance=instance._currentElement._owner);stack.reverse();return stack;};var getOwnerInfo=function getOwnerInfo(childInstance,childTag,ancestorInstance,ancestorTag,isParent){var childOwner=childInstance&&childInstance._currentElement._owner;var ancestorOwner=ancestorInstance&&ancestorInstance._currentElement._owner;var childOwners=findOwnerStack(childOwner);var ancestorOwners=findOwnerStack(ancestorOwner);var minStackLen=Math.min(childOwners.length,ancestorOwners.length);var i;var deepestCommon=-1;for(i=0;i<minStackLen;i++){if(childOwners[i]===ancestorOwners[i]){deepestCommon=i;}else{break;}}var UNKNOWN='(unknown)';var childOwnerNames=childOwners.slice(deepestCommon+1).map(function(inst){return getComponentName_1(inst)||UNKNOWN;});var ancestorOwnerNames=ancestorOwners.slice(deepestCommon+1).map(function(inst){return getComponentName_1(inst)||UNKNOWN;});var ownerInfo=[].concat(// If the parent and child instances have a common owner ancestor, start
	// with that -- otherwise we just start with the parent's owners.
	deepestCommon!==-1?getComponentName_1(childOwners[deepestCommon])||UNKNOWN:[],ancestorOwnerNames,ancestorTag,// If we're warning about an invalid (non-parent) ancestry, add '...'
	isParent?[]:['...'],childOwnerNames,childTag).join(' > ');return ownerInfo;};var didWarn={};validateDOMNesting$1=function validateDOMNesting$1(childTag,childText,childInstance,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;if(childText!=null){warning(childTag==null,'validateDOMNesting: when childText is passed, childTag should be null');childTag='#text';}var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var invalidParentOrAncestor=invalidParent||invalidAncestor;if(!invalidParentOrAncestor){return;}var ancestorInstance=invalidParentOrAncestor.instance;var ancestorTag=invalidParentOrAncestor.tag;var addendum;if(childInstance!=null){addendum=' See '+getOwnerInfo(childInstance,childTag,ancestorInstance,ancestorTag,!!invalidParent)+'.';}else{addendum=getCurrentFiberStackAddendum$2();}var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+addendum;if(didWarn[warnKey]){return;}didWarn[warnKey]=true;var tagDisplayName=childTag;var whitespaceInfo='';if(childTag==='#text'){if(/\S/.test(childText)){tagDisplayName='Text nodes';}else{tagDisplayName='Whitespace text nodes';whitespaceInfo=" Make sure you don't have any extra whitespace between tags on "+'each line of your source code.';}}else{tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';}warning(false,'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s',tagDisplayName,ancestorTag,whitespaceInfo,info,addendum);}else{warning(false,'validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>.%s',tagDisplayName,ancestorTag,addendum);}};validateDOMNesting$1.updatedAncestorInfo=updatedAncestorInfo$1;// For testing
	validateDOMNesting$1.isTagValidInContext=function(tag,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);};}var validateDOMNesting_1=validateDOMNesting$1;var isValidElement=React.isValidElement;var injectInternals=ReactFiberDevToolsHook.injectInternals;var createElement=ReactDOMFiberComponent_1.createElement;var getChildNamespace=ReactDOMFiberComponent_1.getChildNamespace;var setInitialProperties=ReactDOMFiberComponent_1.setInitialProperties;var diffProperties=ReactDOMFiberComponent_1.diffProperties;var updateProperties=ReactDOMFiberComponent_1.updateProperties;var precacheFiberNode=ReactDOMComponentTree_1.precacheFiberNode;var updateFiberProps=ReactDOMComponentTree_1.updateFiberProps;{var validateDOMNesting=validateDOMNesting_1;var updatedAncestorInfo=validateDOMNesting.updatedAncestorInfo;}var DOCUMENT_NODE=9;ReactDOMInjection.inject();ReactControlledComponent_1.injection.injectFiberControlledHostComponent(ReactDOMFiberComponent_1);findDOMNode_1._injectFiber(function(fiber){return DOMRenderer.findHostInstance(fiber);});var eventsEnabled=null;var selectionInformation=null;var ELEMENT_NODE_TYPE=1;var DOC_NODE_TYPE=9;var DOCUMENT_FRAGMENT_NODE_TYPE=11;/**
	 * True if the supplied DOM node is a valid node element.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM is a valid DOM node.
	 * @internal
	 */function isValidContainer(node){return!!(node&&(node.nodeType===ELEMENT_NODE_TYPE||node.nodeType===DOC_NODE_TYPE||node.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE));}function validateContainer(container){if(!isValidContainer(container)){throw new Error('Target container is not a DOM element.');}}function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOC_NODE_TYPE){return container.documentElement;}else{return container.firstChild;}}function shouldAutoFocusHostComponent(type,props){switch(type){case'button':case'input':case'select':case'textarea':return!!props.autoFocus;}return false;}var DOMRenderer=ReactFiberReconciler({getRootHostContext:function getRootHostContext(rootContainerInstance){var ownNamespace=rootContainerInstance.namespaceURI||null;var type=rootContainerInstance.tagName;var namespace=getChildNamespace(ownNamespace,type);{var isMountingIntoDocument=rootContainerInstance.ownerDocument.documentElement===rootContainerInstance;var validatedTag=isMountingIntoDocument?'#document':type.toLowerCase();var _ancestorInfo=updatedAncestorInfo(null,validatedTag,null);return{namespace:namespace,ancestorInfo:_ancestorInfo};}return namespace;},getChildHostContext:function getChildHostContext(parentHostContext,type){{var parentHostContextDev=parentHostContext;var _namespace=getChildNamespace(parentHostContextDev.namespace,type);var _ancestorInfo2=updatedAncestorInfo(parentHostContextDev.ancestorInfo,type,null);return{namespace:_namespace,ancestorInfo:_ancestorInfo2};}var parentNamespace=parentHostContext;return getChildNamespace(parentNamespace,type);},getPublicInstance:function getPublicInstance(instance){return instance;},prepareForCommit:function prepareForCommit(){eventsEnabled=ReactBrowserEventEmitter_1.isEnabled();selectionInformation=ReactInputSelection_1.getSelectionInformation();ReactBrowserEventEmitter_1.setEnabled(false);},resetAfterCommit:function resetAfterCommit(){ReactInputSelection_1.restoreSelection(selectionInformation);selectionInformation=null;ReactBrowserEventEmitter_1.setEnabled(eventsEnabled);eventsEnabled=null;},createInstance:function createInstance(type,props,rootContainerInstance,hostContext,internalInstanceHandle){var parentNamespace=void 0;{// TODO: take namespace into account when validating.
	var hostContextDev=hostContext;validateDOMNesting(type,null,null,hostContextDev.ancestorInfo);if(typeof props.children==='string'||typeof props.children==='number'){var string=''+props.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type,null);validateDOMNesting(null,string,null,ownAncestorInfo);}parentNamespace=hostContextDev.namespace;}var domElement=createElement(type,props,rootContainerInstance,parentNamespace);precacheFiberNode(internalInstanceHandle,domElement);updateFiberProps(domElement,props);return domElement;},appendInitialChild:function appendInitialChild(parentInstance,child){parentInstance.appendChild(child);},finalizeInitialChildren:function finalizeInitialChildren(domElement,type,props,rootContainerInstance){setInitialProperties(domElement,type,props,rootContainerInstance);return shouldAutoFocusHostComponent(type,props);},prepareUpdate:function prepareUpdate(domElement,type,oldProps,newProps,rootContainerInstance,hostContext){{var hostContextDev=hostContext;if(_typeof(newProps.children)!==_typeof(oldProps.children)&&(typeof newProps.children==='string'||typeof newProps.children==='number')){var string=''+newProps.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type,null);validateDOMNesting(null,string,null,ownAncestorInfo);}}return diffProperties(domElement,type,oldProps,newProps,rootContainerInstance);},commitMount:function commitMount(domElement,type,newProps,internalInstanceHandle){domElement.focus();},commitUpdate:function commitUpdate(domElement,updatePayload,type,oldProps,newProps,internalInstanceHandle){// Update the props handle so that we know which props are the ones with
	// with current event handlers.
	updateFiberProps(domElement,newProps);// Apply the diff to the DOM node.
	updateProperties(domElement,updatePayload,type,oldProps,newProps);},shouldSetTextContent:function shouldSetTextContent(props){return typeof props.children==='string'||typeof props.children==='number'||_typeof(props.dangerouslySetInnerHTML)==='object'&&props.dangerouslySetInnerHTML!==null&&typeof props.dangerouslySetInnerHTML.__html==='string';},resetTextContent:function resetTextContent(domElement){domElement.textContent='';},shouldDeprioritizeSubtree:function shouldDeprioritizeSubtree(type,props){return!!props.hidden;},createTextInstance:function createTextInstance(text,rootContainerInstance,hostContext,internalInstanceHandle){{var hostContextDev=hostContext;validateDOMNesting(null,text,null,hostContextDev.ancestorInfo);}var textNode=document.createTextNode(text);precacheFiberNode(internalInstanceHandle,textNode);return textNode;},commitTextUpdate:function commitTextUpdate(textInstance,oldText,newText){textInstance.nodeValue=newText;},appendChild:function appendChild(parentInstance,child){parentInstance.appendChild(child);},insertBefore:function insertBefore(parentInstance,child,beforeChild){parentInstance.insertBefore(child,beforeChild);},removeChild:function removeChild(parentInstance,child){parentInstance.removeChild(child);},scheduleAnimationCallback:ReactDOMFrameScheduling.rAF,scheduleDeferredCallback:ReactDOMFrameScheduling.rIC,useSyncScheduling:!ReactDOMFeatureFlags_1.fiberAsyncScheduling});ReactGenericBatching_1.injection.injectFiberBatchedUpdates(DOMRenderer.batchedUpdates);var warned=false;function warnAboutUnstableUse(){// Ignore this warning is the feature flag is turned on. E.g. for tests.
	warning(warned||ReactDOMFeatureFlags_1.useFiber,'You are using React DOM Fiber which is an experimental renderer. '+'It is likely to have bugs, breaking changes and is unsupported.');warned=true;}function renderSubtreeIntoContainer(parentComponent,children,containerNode,callback){validateContainer(containerNode);var container=containerNode.nodeType===DOCUMENT_NODE?containerNode.documentElement:containerNode;var root=container._reactRootContainer;if(!root){// First clear any existing content.
	while(container.lastChild){container.removeChild(container.lastChild);}var newRoot=DOMRenderer.createContainer(container);root=container._reactRootContainer=newRoot;// Initial mount should not be batched.
	DOMRenderer.unbatchedUpdates(function(){DOMRenderer.updateContainer(children,newRoot,parentComponent,callback);});}else{DOMRenderer.updateContainer(children,root,parentComponent,callback);}return DOMRenderer.getPublicRootInstance(root);}var ReactDOM={render:function render(element,container,callback){validateContainer(container);if(ReactFeatureFlags_1.disableNewFiberFeatures){// Top-level check occurs here instead of inside child reconciler because
	// because requirements vary between renderers. E.g. React Art
	// allows arrays.
	if(!isValidElement(element)){if(typeof element==='string'){invariant(false,'ReactDOM.render(): Invalid component element. Instead of passing a string like \'div\', pass React.createElement(\'div\') or <div />.');}else if(typeof element==='function'){invariant(false,'ReactDOM.render(): Invalid component element. Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.');}else if(element!=null&&typeof element.props!=='undefined'){// Check if it quacks like an element
	invariant(false,'ReactDOM.render(): Invalid component element. This may be caused by unintentionally loading two independent copies of React.');}else{invariant(false,'ReactDOM.render(): Invalid component element.');}}}{var isRootRenderedBySomeReact=!!container._reactRootContainer;var rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(rootEl&&ReactDOMComponentTree_1.getInstanceFromNode(rootEl));warning(!hasNonRootReactChild||isRootRenderedBySomeReact,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.');warning(!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.');}return renderSubtreeIntoContainer(null,element,container,callback);},unstable_renderSubtreeIntoContainer:function unstable_renderSubtreeIntoContainer(parentComponent,element,containerNode,callback){!(parentComponent!=null&&ReactInstanceMap_1.has(parentComponent))?invariant(false,'parentComponent must be a valid React Component'):void 0;return renderSubtreeIntoContainer(parentComponent,element,containerNode,callback);},unmountComponentAtNode:function unmountComponentAtNode(container){!isValidContainer(container)?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):void 0;warnAboutUnstableUse();if(container._reactRootContainer){{var rootEl=getReactRootElementInContainer(container);var renderedByDifferentReact=rootEl&&!ReactDOMComponentTree_1.getInstanceFromNode(rootEl);warning(!renderedByDifferentReact,"unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by another copy of React.');}// Unmount should not be batched.
	return DOMRenderer.unbatchedUpdates(function(){return renderSubtreeIntoContainer(null,null,container,function(){container._reactRootContainer=null;});});}},findDOMNode:findDOMNode_1,unstable_createPortal:function unstable_createPortal(children,container){var key=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;// TODO: pass ReactDOM portal implementation as third argument
	return ReactPortal.createPortal(children,container,null,key);},unstable_batchedUpdates:ReactGenericBatching_1.batchedUpdates,unstable_deferredUpdates:DOMRenderer.deferredUpdates};if(typeof injectInternals==='function'){injectInternals({findFiberByHostInstance:ReactDOMComponentTree_1.getClosestInstanceFromNode,findHostInstanceByFiber:DOMRenderer.findHostInstance});}var ReactDOMFiber=ReactDOM;module.exports=ReactDOMFiber;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(13);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(15);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(18);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(11);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @typechecks
	 */

	var emptyFunction = __webpack_require__(6);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */

	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable.Window && scrollable instanceof scrollable.Window) {
	    return {
	      x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
	      y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(22);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(23);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  var doc = object ? object.ownerDocument || object : document;
	  var defaultView = doc.defaultView || window;
	  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */

	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getActiveElement(doc) /*?DOMElement*/{
	  doc = doc || (typeof document !== 'undefined' ? document : undefined);
	  if (typeof doc === 'undefined') {
	    return null;
	  }
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	"use strict";

	var React = __webpack_require__(2);
	var ReactART = __webpack_require__(28);
	var Group = ReactART.Group;
	var Shape = ReactART.Shape;
	var Surface = ReactART.Surface;
	var Transform = ReactART.Transform;

	var MOUSE_UP_DRAG = 0.978;
	var MOUSE_DOWN_DRAG = 0.9;
	var MAX_VEL = 11;
	var CLICK_ACCEL = 3;
	var BASE_VEL = 0.15;

	/**
	 * An animated SVG component.
	 */
	var VectorWidget = React.createClass({
	  displayName: 'VectorWidget',

	  /**
	   * Initialize state members.
	   */
	  getInitialState: function getInitialState() {
	    return { degrees: 0, velocity: 0, drag: MOUSE_UP_DRAG };
	  },

	  /**
	   * When the component is mounted into the document - this is similar to a
	   * constructor, but invoked when the instance is actually mounted into the
	   * document. Here's, we'll just set up an animation loop that invokes our
	   * method. Binding of `this.onTick` is not needed because all React methods
	   * are automatically bound before being mounted.
	   */
	  componentDidMount: function componentDidMount() {
	    this._interval = window.setInterval(this.onTick, 20);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.clearInterval(this._interval);
	  },

	  onTick: function onTick() {
	    var nextDegrees = this.state.degrees + BASE_VEL + this.state.velocity;
	    var nextVelocity = this.state.velocity * this.state.drag;
	    this.setState({ degrees: nextDegrees, velocity: nextVelocity });
	  },

	  /**
	   * When mousing down, we increase the friction down the velocity.
	   */
	  handleMouseDown: function handleMouseDown() {
	    this.setState({ drag: MOUSE_DOWN_DRAG });
	  },

	  /**
	   * Cause the rotation to "spring".
	   */
	  handleMouseUp: function handleMouseUp() {
	    var nextVelocity = Math.min(this.state.velocity + CLICK_ACCEL, MAX_VEL);
	    this.setState({ velocity: nextVelocity, drag: MOUSE_UP_DRAG });
	  },

	  /**
	   * This is the "main" method for any component. The React API allows you to
	   * describe the structure of your UI component at *any* point in time.
	   */
	  render: function render() {
	    return React.createElement(
	      Surface,
	      {
	        width: 700,
	        height: 700,
	        style: { cursor: 'pointer' } },
	      this.renderGraphic(this.state.degrees)
	    );
	  },

	  /**
	   * Better SVG support for React coming soon.
	   */
	  renderGraphic: function renderGraphic(rotation) {

	    return React.createElement(
	      Group,
	      {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp },
	      React.createElement(
	        Group,
	        { x: 210, y: 135 },
	        React.createElement(Shape, { fill: 'rgba(0,0,0,0.1)', d: BORDER_PATH }),
	        React.createElement(Shape, { fill: '#7BC7BA', d: BG_PATH }),
	        React.createElement(Shape, { fill: '#DCDCDC', d: BAR_PATH }),
	        React.createElement(Shape, { fill: '#D97B76', d: RED_DOT_PATH }),
	        React.createElement(Shape, { fill: '#DBBB79', d: YELLOW_DOT_PATH }),
	        React.createElement(Shape, { fill: '#A6BD8A', d: GREEN_DOT_PATH }),
	        React.createElement(
	          Group,
	          { x: 55, y: 29 },
	          React.createElement(
	            Group,
	            { rotation: rotation, originX: 84, originY: 89 },
	            React.createElement(Shape, { fill: '#FFFFFF', d: CENTER_DOT_PATH }),
	            React.createElement(
	              Group,
	              null,
	              React.createElement(Shape, { d: RING_ONE_PATH, stroke: '#FFFFFF', strokeWidth: 8 }),
	              React.createElement(Shape, { d: RING_TWO_PATH, transform: RING_TWO_ROTATE, stroke: '#FFFFFF', strokeWidth: 8 }),
	              React.createElement(Shape, { d: RING_THREE_PATH, transform: RING_THREE_ROTATE, stroke: '#FFFFFF', strokeWidth: 8 })
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var BORDER_PATH = "M3.00191459,4 C1.34400294,4 0,5.34785514 0,7.00550479 L0,220.994495 C0,222.65439 1.34239483,224 3.00191459,224 L276.998085,224 C278.655997,224 280,222.652145 280,220.994495 L280,7.00550479 C280,5.34561033 278.657605,4 276.998085,4 L3.00191459,4 Z M3.00191459,4";
	var BG_PATH = "M3.00191459,1 C1.34400294,1 0,2.34785514 0,4.00550479 L0,217.994495 C0,219.65439 1.34239483,221 3.00191459,221 L276.998085,221 C278.655997,221 280,219.652145 280,217.994495 L280,4.00550479 C280,2.34561033 278.657605,1 276.998085,1 L3.00191459,1 Z M3.00191459,1";
	var BAR_PATH = "M3.00191459,0 C1.34400294,0 0,1.34559019 0,3.00878799 L0,21 C0,21 0,21 0,21 L280,21 C280,21 280,21 280,21 L280,3.00878799 C280,1.34708027 278.657605,0 276.998085,0 L3.00191459,0 Z M3.00191459,0";
	var RED_DOT_PATH = "M12.5,17 C16.0898511,17 19,14.0898511 19,10.5 C19,6.91014895 16.0898511,4 12.5,4 C8.91014895,4 6,6.91014895 6,10.5 C6,14.0898511 8.91014895,17 12.5,17 Z M12.5,17";
	var YELLOW_DOT_PATH = "M31.5,17 C35.0898511,17 38,14.0898511 38,10.5 C38,6.91014895 35.0898511,4 31.5,4 C27.9101489,4 25,6.91014895 25,10.5 C25,14.0898511 27.9101489,17 31.5,17 Z M31.5,17";
	var GREEN_DOT_PATH = "M50.5,17 C54.0898511,17 57,14.0898511 57,10.5 C57,6.91014895 54.0898511,4 50.5,4 C46.9101489,4 44,6.91014895 44,10.5 C44,14.0898511 46.9101489,17 50.5,17 Z M50.5,17";
	var CENTER_DOT_PATH = "M84,105 C92.8365564,105 100,97.8365564 100,89 C100,80.1634436 92.8365564,73 84,73 C75.1634436,73 68,80.1634436 68,89 C68,97.8365564 75.1634436,105 84,105 Z M84,105";
	var RING_ONE_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";
	var RING_TWO_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";
	var RING_THREE_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";
	var RING_TWO_ROTATE = new Transform().translate(84.000000, 89.000000).rotate(-240.000000).translate(-84.000000, -89.000000);
	var RING_THREE_ROTATE = new Transform().translate(84.000000, 89.000000).rotate(-300.000000).translate(-84.000000, -89.000000);

	module.exports = VectorWidget;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react-art.production.min.js');
	} else {
	  module.exports = __webpack_require__(29);
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var objectAssign = __webpack_require__(4);
	var current = __webpack_require__(30);
	var fastNoSideEffects = __webpack_require__(31);
	var transform$1 = __webpack_require__(41);
	var invariant = __webpack_require__(8);
	var emptyObject = __webpack_require__(7);
	var react = __webpack_require__(2);
	var warning = __webpack_require__(5);
	var shallowEqual = __webpack_require__(26);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTypeOfSideEffect
	 * 
	 */

	var ReactTypeOfSideEffect = {
	  NoEffect: 0, // 0b0000000
	  Placement: 1, // 0b0000001
	  Update: 2, // 0b0000010
	  PlacementAndUpdate: 3, // 0b0000011
	  Deletion: 4, // 0b0000100
	  ContentReset: 8, // 0b0001000
	  Callback: 16, // 0b0010000
	  Err: 32, // 0b0100000
	  Ref: 64 };

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPriorityLevel
	 * 
	 */

	var ReactPriorityLevel = {
	  NoWork: 0, // No work is pending.
	  SynchronousPriority: 1, // For controlled text inputs. Synchronous side-effects.
	  TaskPriority: 2, // Completes at the end of the current tick.
	  AnimationPriority: 3, // Needs to complete before the next frame.
	  HighPriority: 4, // Interaction that needs to complete pretty soon to feel responsive.
	  LowPriority: 5, // Data fetching, or result from updating stores.
	  OffscreenPriority: 6 };

	var CallbackEffect = ReactTypeOfSideEffect.Callback;

	var NoWork = ReactPriorityLevel.NoWork;
	var SynchronousPriority = ReactPriorityLevel.SynchronousPriority;
	var TaskPriority = ReactPriorityLevel.TaskPriority;

	{
	  var warning$2 = warning;
	}

	// Callbacks are not validated until invocation


	// Singly linked-list of updates. When an update is scheduled, it is added to
	// the queue of the current fiber and the work-in-progress fiber. The two queues
	// are separate but they share a persistent structure.
	//
	// During reconciliation, updates are removed from the work-in-progress fiber,
	// but they remain on the current fiber. That ensures that if a work-in-progress
	// is aborted, the aborted updates are recovered by cloning from current.
	//
	// The work-in-progress queue is always a subset of the current queue.
	//
	// When the tree is committed, the work-in-progress becomes the current.


	function comparePriority(a, b) {
	  // When comparing update priorities, treat sync and Task work as equal.
	  // TODO: Could we avoid the need for this by always coercing sync priority
	  // to Task when scheduling an update?
	  if ((a === TaskPriority || a === SynchronousPriority) && (b === TaskPriority || b === SynchronousPriority)) {
	    return 0;
	  }
	  if (a === NoWork && b !== NoWork) {
	    return -255;
	  }
	  if (a !== NoWork && b === NoWork) {
	    return 255;
	  }
	  return a - b;
	}

	// Ensures that a fiber has an update queue, creating a new one if needed.
	// Returns the new or existing queue.
	function ensureUpdateQueue(fiber) {
	  if (fiber.updateQueue !== null) {
	    // We already have an update queue.
	    return fiber.updateQueue;
	  }

	  var queue = void 0;
	  {
	    queue = {
	      first: null,
	      last: null,
	      hasForceUpdate: false,
	      callbackList: null,
	      isProcessing: false
	    };
	  }

	  fiber.updateQueue = queue;
	  return queue;
	}

	// Clones an update queue from a source fiber onto its alternate.
	function cloneUpdateQueue(current$$1, workInProgress) {
	  var currentQueue = current$$1.updateQueue;
	  if (currentQueue === null) {
	    // The source fiber does not have an update queue.
	    workInProgress.updateQueue = null;
	    return null;
	  }
	  // If the alternate already has a queue, reuse the previous object.
	  var altQueue = workInProgress.updateQueue !== null ? workInProgress.updateQueue : {};
	  altQueue.first = currentQueue.first;
	  altQueue.last = currentQueue.last;

	  // These fields are invalid by the time we clone from current. Reset them.
	  altQueue.hasForceUpdate = false;
	  altQueue.callbackList = null;
	  altQueue.isProcessing = false;

	  workInProgress.updateQueue = altQueue;

	  return altQueue;
	}
	var cloneUpdateQueue_1 = cloneUpdateQueue;

	function cloneUpdate(update) {
	  return {
	    priorityLevel: update.priorityLevel,
	    partialState: update.partialState,
	    callback: update.callback,
	    isReplace: update.isReplace,
	    isForced: update.isForced,
	    isTopLevelUnmount: update.isTopLevelUnmount,
	    next: null
	  };
	}

	function insertUpdateIntoQueue(queue, update, insertAfter, insertBefore) {
	  if (insertAfter !== null) {
	    insertAfter.next = update;
	  } else {
	    // This is the first item in the queue.
	    update.next = queue.first;
	    queue.first = update;
	  }

	  if (insertBefore !== null) {
	    update.next = insertBefore;
	  } else {
	    // This is the last item in the queue.
	    queue.last = update;
	  }
	}

	// Returns the update after which the incoming update should be inserted into
	// the queue, or null if it should be inserted at beginning.
	function findInsertionPosition(queue, update) {
	  var priorityLevel = update.priorityLevel;
	  var insertAfter = null;
	  var insertBefore = null;
	  if (queue.last !== null && comparePriority(queue.last.priorityLevel, priorityLevel) <= 0) {
	    // Fast path for the common case where the update should be inserted at
	    // the end of the queue.
	    insertAfter = queue.last;
	  } else {
	    insertBefore = queue.first;
	    while (insertBefore !== null && comparePriority(insertBefore.priorityLevel, priorityLevel) <= 0) {
	      insertAfter = insertBefore;
	      insertBefore = insertBefore.next;
	    }
	  }
	  return insertAfter;
	}

	// The work-in-progress queue is a subset of the current queue (if it exists).
	// We need to insert the incoming update into both lists. However, it's possible
	// that the correct position in one list will be different from the position in
	// the other. Consider the following case:
	//
	//     Current:             3-5-6
	//     Work-in-progress:        6
	//
	// Then we receive an update with priority 4 and insert it into each list:
	//
	//     Current:             3-4-5-6
	//     Work-in-progress:        4-6
	//
	// In the current queue, the new update's `next` pointer points to the update
	// with priority 5. But in the work-in-progress queue, the pointer points to the
	// update with priority 6. Because these two queues share the same persistent
	// data structure, this won't do. (This can only happen when the incoming update
	// has higher priority than all the updates in the work-in-progress queue.)
	//
	// To solve this, in the case where the incoming update needs to be inserted
	// into two different positions, we'll make a clone of the update and insert
	// each copy into a separate queue. This forks the list while maintaining a
	// persistent structure, because the update that is added to the work-in-progress
	// is always added to the front of the list.
	//
	// However, if incoming update is inserted into the same position of both lists,
	// we shouldn't make a copy.
	//
	// If the update is cloned, it returns the cloned update.
	function insertUpdate(fiber, update) {
	  var queue1 = ensureUpdateQueue(fiber);
	  var queue2 = fiber.alternate !== null ? ensureUpdateQueue(fiber.alternate) : null;

	  // Warn if an update is scheduled from inside an updater function.
	  {
	    if (queue1.isProcessing || queue2 !== null && queue2.isProcessing) {
	      warning$2(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
	    }
	  }

	  // Find the insertion position in the first queue.
	  var insertAfter1 = findInsertionPosition(queue1, update);
	  var insertBefore1 = insertAfter1 !== null ? insertAfter1.next : queue1.first;

	  if (queue2 === null) {
	    // If there's no alternate queue, there's nothing else to do but insert.
	    insertUpdateIntoQueue(queue1, update, insertAfter1, insertBefore1);
	    return null;
	  }

	  // If there is an alternate queue, find the insertion position.
	  var insertAfter2 = findInsertionPosition(queue2, update);
	  var insertBefore2 = insertAfter2 !== null ? insertAfter2.next : queue2.first;

	  // Now we can insert into the first queue. This must come after finding both
	  // insertion positions because it mutates the list.
	  insertUpdateIntoQueue(queue1, update, insertAfter1, insertBefore1);

	  if (insertBefore1 !== insertBefore2) {
	    // The insertion positions are different, so we need to clone the update and
	    // insert the clone into the alternate queue.
	    var update2 = cloneUpdate(update);
	    insertUpdateIntoQueue(queue2, update2, insertAfter2, insertBefore2);
	    return update2;
	  } else {
	    // The insertion positions are the same, so when we inserted into the first
	    // queue, it also inserted into the alternate. All we need to do is update
	    // the alternate queue's `first` and `last` pointers, in case they
	    // have changed.
	    if (insertAfter2 === null) {
	      queue2.first = update;
	    }
	    if (insertBefore2 === null) {
	      queue2.last = null;
	    }
	  }

	  return null;
	}

	function addUpdate(fiber, partialState, callback, priorityLevel) {
	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: partialState,
	    callback: callback,
	    isReplace: false,
	    isForced: false,
	    isTopLevelUnmount: false,
	    next: null
	  };
	  insertUpdate(fiber, update);
	}
	var addUpdate_1 = addUpdate;

	function addReplaceUpdate(fiber, state, callback, priorityLevel) {
	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: state,
	    callback: callback,
	    isReplace: true,
	    isForced: false,
	    isTopLevelUnmount: false,
	    next: null
	  };
	  insertUpdate(fiber, update);
	}
	var addReplaceUpdate_1 = addReplaceUpdate;

	function addForceUpdate(fiber, callback, priorityLevel) {
	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: null,
	    callback: callback,
	    isReplace: false,
	    isForced: true,
	    isTopLevelUnmount: false,
	    next: null
	  };
	  insertUpdate(fiber, update);
	}
	var addForceUpdate_1 = addForceUpdate;

	function getPendingPriority(queue) {
	  return queue.first !== null ? queue.first.priorityLevel : NoWork;
	}
	var getPendingPriority_1 = getPendingPriority;

	function addTopLevelUpdate$1(fiber, partialState, callback, priorityLevel) {
	  var isTopLevelUnmount = partialState.element === null;

	  var update = {
	    priorityLevel: priorityLevel,
	    partialState: partialState,
	    callback: callback,
	    isReplace: false,
	    isForced: false,
	    isTopLevelUnmount: isTopLevelUnmount,
	    next: null
	  };
	  var update2 = insertUpdate(fiber, update);

	  if (isTopLevelUnmount) {
	    // Drop all updates that are lower-priority, so that the tree is not
	    // remounted. We need to do this for both queues.
	    var queue1 = fiber.updateQueue;
	    var queue2 = fiber.alternate !== null ? fiber.alternate.updateQueue : null;

	    if (queue1 !== null && update.next !== null) {
	      update.next = null;
	      queue1.last = update;
	    }
	    if (queue2 !== null && update2 !== null && update2.next !== null) {
	      update2.next = null;
	      queue2.last = update;
	    }
	  }
	}
	var addTopLevelUpdate_1 = addTopLevelUpdate$1;

	function getStateFromUpdate(update, instance, prevState, props) {
	  var partialState = update.partialState;
	  if (typeof partialState === 'function') {
	    var updateFn = partialState;
	    return updateFn.call(instance, prevState, props);
	  } else {
	    return partialState;
	  }
	}

	function beginUpdateQueue(workInProgress, queue, instance, prevState, props, priorityLevel) {
	  {
	    // Set this flag so we can warn if setState is called inside the update
	    // function of another setState.
	    queue.isProcessing = true;
	  }

	  queue.hasForceUpdate = false;

	  // Applies updates with matching priority to the previous state to create
	  // a new state object.
	  var state = prevState;
	  var dontMutatePrevState = true;
	  var callbackList = null;
	  var update = queue.first;
	  while (update !== null && comparePriority(update.priorityLevel, priorityLevel) <= 0) {
	    // Remove each update from the queue right before it is processed. That way
	    // if setState is called from inside an updater function, the new update
	    // will be inserted in the correct position.
	    queue.first = update.next;
	    if (queue.first === null) {
	      queue.last = null;
	    }

	    var _partialState = void 0;
	    if (update.isReplace) {
	      state = getStateFromUpdate(update, instance, state, props);
	      dontMutatePrevState = true;
	    } else {
	      _partialState = getStateFromUpdate(update, instance, state, props);
	      if (_partialState) {
	        if (dontMutatePrevState) {
	          state = objectAssign({}, state, _partialState);
	        } else {
	          state = objectAssign(state, _partialState);
	        }
	        dontMutatePrevState = false;
	      }
	    }
	    if (update.isForced) {
	      queue.hasForceUpdate = true;
	    }
	    // Second condition ignores top-level unmount callbacks if they are not the
	    // last update in the queue, since a subsequent update will cause a remount.
	    if (update.callback !== null && !(update.isTopLevelUnmount && update.next !== null)) {
	      callbackList = callbackList || [];
	      callbackList.push(update.callback);
	      workInProgress.effectTag |= CallbackEffect;
	    }
	    update = update.next;
	  }

	  queue.callbackList = callbackList;

	  if (queue.first === null && callbackList === null && !queue.hasForceUpdate) {
	    // The queue is empty and there are no callbacks. We can reset it.
	    workInProgress.updateQueue = null;
	  }

	  {
	    queue.isProcessing = false;
	  }

	  return state;
	}
	var beginUpdateQueue_1 = beginUpdateQueue;

	function commitCallbacks(finishedWork, queue, context) {
	  var callbackList = queue.callbackList;
	  if (callbackList === null) {
	    return;
	  }
	  for (var i = 0; i < callbackList.length; i++) {
	    var _callback = callbackList[i];
	    !(typeof _callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', _callback) : void 0;
	    _callback.call(context);
	  }
	}
	var commitCallbacks_1 = commitCallbacks;

	var ReactFiberUpdateQueue = {
	  cloneUpdateQueue: cloneUpdateQueue_1,
	  addUpdate: addUpdate_1,
	  addReplaceUpdate: addReplaceUpdate_1,
	  addForceUpdate: addForceUpdate_1,
	  getPendingPriority: getPendingPriority_1,
	  addTopLevelUpdate: addTopLevelUpdate_1,
	  beginUpdateQueue: beginUpdateQueue_1,
	  commitCallbacks: commitCallbacks_1
	};

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getComponentName
	 */

	function getComponentName$1(instanceOrFiber) {
	  if (typeof instanceOrFiber.getName === 'function') {
	    // Stack reconciler
	    var instance = instanceOrFiber;
	    return instance.getName();
	  }
	  if (typeof instanceOrFiber.tag === 'number') {
	    // Fiber reconciler
	    var fiber = instanceOrFiber;
	    var type = fiber.type;

	    if (typeof type === 'string') {
	      return type;
	    }
	    if (typeof type === 'function') {
	      return type.displayName || type.name;
	    }
	  }
	  return null;
	}

	var getComponentName_1 = getComponentName$1;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();

	var ReactInstanceMap = {
	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function remove(key) {
	    key._reactInternalInstance = undefined;
	  },

	  get: function get(key) {
	    return key._reactInternalInstance;
	  },

	  has: function has(key) {
	    return key._reactInternalInstance !== undefined;
	  },

	  set: function set(key, value) {
	    key._reactInternalInstance = value;
	  }
	};

	var ReactInstanceMap_1 = ReactInstanceMap;

	var ReactInternals = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	var ReactCurrentOwnerRollupShim = ReactInternals.ReactCurrentOwner;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTypeOfWork
	 * 
	 */

	var ReactTypeOfWork = {
	  IndeterminateComponent: 0, // Before we know whether it is functional or class
	  FunctionalComponent: 1,
	  ClassComponent: 2,
	  HostRoot: 3, // Root of a host tree. Could be nested inside another node.
	  HostPortal: 4, // A subtree. Could be an entry point to a different renderer.
	  HostComponent: 5,
	  HostText: 6,
	  CoroutineComponent: 7,
	  CoroutineHandlerPhase: 8,
	  YieldComponent: 9,
	  Fragment: 10
	};

	{
	  var warning$4 = warning;
	}

	var HostRoot$1 = ReactTypeOfWork.HostRoot;
	var HostComponent = ReactTypeOfWork.HostComponent;
	var HostText = ReactTypeOfWork.HostText;
	var ClassComponent$1 = ReactTypeOfWork.ClassComponent;

	var NoEffect = ReactTypeOfSideEffect.NoEffect;
	var Placement = ReactTypeOfSideEffect.Placement;

	var MOUNTING = 1;
	var MOUNTED = 2;
	var UNMOUNTED = 3;

	function isFiberMountedImpl(fiber) {
	  var node = fiber;
	  if (!fiber.alternate) {
	    // If there is no alternate, this might be a new tree that isn't inserted
	    // yet. If it is, then it will have a pending insertion effect on it.
	    if ((node.effectTag & Placement) !== NoEffect) {
	      return MOUNTING;
	    }
	    while (node['return']) {
	      node = node['return'];
	      if ((node.effectTag & Placement) !== NoEffect) {
	        return MOUNTING;
	      }
	    }
	  } else {
	    while (node['return']) {
	      node = node['return'];
	    }
	  }
	  if (node.tag === HostRoot$1) {
	    // TODO: Check if this was a nested HostRoot when used with
	    // renderContainerIntoSubtree.
	    return MOUNTED;
	  }
	  // If we didn't hit the root, that means that we're in an disconnected tree
	  // that has been unmounted.
	  return UNMOUNTED;
	}
	var isFiberMounted$1 = function isFiberMounted$1(fiber) {
	  return isFiberMountedImpl(fiber) === MOUNTED;
	};

	var isMounted = function isMounted(component) {
	  {
	    var owner = ReactCurrentOwnerRollupShim.current;
	    if (owner !== null && owner.tag === ClassComponent$1) {
	      var ownerFiber = owner;
	      var instance = ownerFiber.stateNode;
	      warning$4(instance._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName_1(ownerFiber) || 'A component');
	      instance._warnedAboutRefsInRender = true;
	    }
	  }

	  var fiber = ReactInstanceMap_1.get(component);
	  if (!fiber) {
	    return false;
	  }
	  return isFiberMountedImpl(fiber) === MOUNTED;
	};

	function assertIsMounted(fiber) {
	  !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	}

	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    // If there is no alternate, then we only need to check if it is mounted.
	    var state = isFiberMountedImpl(fiber);
	    !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	    if (state === MOUNTING) {
	      return null;
	    }
	    return fiber;
	  }
	  // If we have two possible branches, we'll walk backwards up to the root
	  // to see what path the root points to. On the way we may hit one of the
	  // special cases and we'll deal with them.
	  var a = fiber;
	  var b = alternate;
	  while (true) {
	    var parentA = a['return'];
	    var parentB = parentA ? parentA.alternate : null;
	    if (!parentA || !parentB) {
	      // We're at the root.
	      break;
	    }

	    // If both copies of the parent fiber point to the same child, we can
	    // assume that the child is current. This happens when we bailout on low
	    // priority: the bailed out fiber's child reuses the current child.
	    if (parentA.child === parentB.child) {
	      var child = parentA.child;
	      while (child) {
	        if (child === a) {
	          // We've determined that A is the current branch.
	          assertIsMounted(parentA);
	          return fiber;
	        }
	        if (child === b) {
	          // We've determined that B is the current branch.
	          assertIsMounted(parentA);
	          return alternate;
	        }
	        child = child.sibling;
	      }
	      // We should never have an alternate for any mounting node. So the only
	      // way this could possibly happen is if this was unmounted, if at all.
	      invariant(false, 'Unable to find node on an unmounted component.');
	    }

	    if (a['return'] !== b['return']) {
	      // The return pointer of A and the return pointer of B point to different
	      // fibers. We assume that return pointers never criss-cross, so A must
	      // belong to the child set of A.return, and B must belong to the child
	      // set of B.return.
	      a = parentA;
	      b = parentB;
	    } else {
	      // The return pointers pointer to the same fiber. We'll have to use the
	      // default, slow path: scan the child sets of each parent alternate to see
	      // which child belongs to which set.
	      //
	      // Search parent A's child set
	      var didFindChild = false;
	      var _child = parentA.child;
	      while (_child) {
	        if (_child === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (_child === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        _child = _child.sibling;
	      }
	      if (!didFindChild) {
	        // Search parent B's child set
	        _child = parentB.child;
	        while (_child) {
	          if (_child === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (_child === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          _child = _child.sibling;
	        }
	        !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug related to the return pointer.') : void 0;
	      }
	    }

	    !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates.') : void 0;
	  }
	  // If the root is not a host container, we're in a disconnected tree. I.e.
	  // unmounted.
	  !(a.tag === HostRoot$1) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
	  if (a.stateNode.current === a) {
	    // We've determined that A is the current branch.
	    return fiber;
	  }
	  // Otherwise B has to be current branch.
	  return alternate;
	}
	var findCurrentFiberUsingSlowPath_1 = findCurrentFiberUsingSlowPath;

	var findCurrentHostFiber$1 = function findCurrentHostFiber$1(parent) {
	  var currentParent = findCurrentFiberUsingSlowPath(parent);
	  if (!currentParent) {
	    return null;
	  }

	  // Next we'll drill down this component to find the first HostComponent/Text.
	  var node = currentParent;
	  while (true) {
	    if (node.tag === HostComponent || node.tag === HostText) {
	      return node;
	    } else if (node.child) {
	      // TODO: If we hit a Portal, we're supposed to skip it.
	      node.child['return'] = node;
	      node = node.child;
	      continue;
	    }
	    if (node === currentParent) {
	      return null;
	    }
	    while (!node.sibling) {
	      if (!node['return'] || node['return'] === currentParent) {
	        return null;
	      }
	      node = node['return'];
	    }
	    node.sibling['return'] = node['return'];
	    node = node.sibling;
	  }
	  // Flow needs the return null here, but ESLint complains about it.
	  // eslint-disable-next-line no-unreachable
	  return null;
	};

	var ReactFiberTreeReflection = {
	  isFiberMounted: isFiberMounted$1,
	  isMounted: isMounted,
	  findCurrentFiberUsingSlowPath: findCurrentFiberUsingSlowPath_1,
	  findCurrentHostFiber: findCurrentHostFiber$1
	};

	var valueStack = [];

	{
	  var fiberStack = [];
	}

	var index = -1;

	var createCursor$1 = function createCursor$1(defaultValue) {
	  return {
	    current: defaultValue
	  };
	};

	var isEmpty = function isEmpty() {
	  return index === -1;
	};

	var pop$1 = function pop$1(cursor, fiber) {
	  if (index < 0) {
	    {
	      warning(false, 'Unexpected pop.');
	    }
	    return;
	  }

	  {
	    if (fiber !== fiberStack[index]) {
	      warning(false, 'Unexpected Fiber popped.');
	    }
	  }

	  cursor.current = valueStack[index];

	  valueStack[index] = null;

	  {
	    fiberStack[index] = null;
	  }

	  index--;
	};

	var push$1 = function push$1(cursor, value, fiber) {
	  index++;

	  valueStack[index] = cursor.current;

	  {
	    fiberStack[index] = fiber;
	  }

	  cursor.current = value;
	};

	var reset = function reset() {
	  while (index > -1) {
	    valueStack[index] = null;

	    {
	      fiberStack[index] = null;
	    }

	    index--;
	  }
	};

	var ReactFiberStack = {
	  createCursor: createCursor$1,
	  isEmpty: isEmpty,
	  pop: pop$1,
	  push: push$1,
	  reset: reset
	};

	var ReactCheckPropTypesRollupShim = react.checkPropTypes;

	var ReactInternals$1 = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	var ReactComponentTreeHookRollupShim = ReactInternals$1.ReactComponentTreeHook;

	var IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$2 = ReactTypeOfWork.ClassComponent;
	var HostComponent$1 = ReactTypeOfWork.HostComponent;

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case IndeterminateComponent:
	    case FunctionalComponent:
	    case ClassComponent$2:
	    case HostComponent$1:
	      var owner = fiber._debugOwner;
	      var source = fiber._debugSource;
	      var name = getComponentName_1(fiber);
	      var ownerName = null;
	      if (owner) {
	        ownerName = getComponentName_1(owner);
	      }
	      return describeComponentFrame(name, source, ownerName);
	    default:
	      return '';
	  }
	}

	// This function can only be called with a work-in-progress fiber and
	// only during begin or complete phase. Do not call it under any other
	// circumstances.
	function getStackAddendumByWorkInProgressFiber$1(workInProgress) {
	  var info = '';
	  var node = workInProgress;
	  do {
	    info += describeFiber(node);
	    // Otherwise this return pointer might point to the wrong tree:
	    node = node['return'];
	  } while (node);
	  return info;
	}

	var ReactFiberComponentTreeHook = {
	  getStackAddendumByWorkInProgressFiber: getStackAddendumByWorkInProgressFiber$1,
	  describeComponentFrame: describeComponentFrame
	};

	var ReactDebugCurrentFrame$1 = {};

	{
	  var _require = ReactComponentTreeHookRollupShim,
	      getStackAddendumByID = _require.getStackAddendumByID,
	      getCurrentStackAddendum = _require.getCurrentStackAddendum;

	  var _require2 = ReactFiberComponentTreeHook,
	      getStackAddendumByWorkInProgressFiber = _require2.getStackAddendumByWorkInProgressFiber;

	  // Component that is being worked on


	  ReactDebugCurrentFrame$1.current = null;

	  // Element that is being cloned or created
	  ReactDebugCurrentFrame$1.element = null;

	  ReactDebugCurrentFrame$1.getStackAddendum = function () {
	    var stack = null;
	    var current$$1 = ReactDebugCurrentFrame$1.current;
	    var element = ReactDebugCurrentFrame$1.element;
	    if (current$$1 !== null) {
	      if (typeof current$$1 === 'number') {
	        // DebugID from Stack.
	        var debugID = current$$1;
	        stack = getStackAddendumByID(debugID);
	      } else if (typeof current$$1.tag === 'number') {
	        // This is a Fiber.
	        // The stack will only be correct if this is a work in progress
	        // version and we're calling it during reconciliation.
	        var workInProgress = current$$1;
	        stack = getStackAddendumByWorkInProgressFiber(workInProgress);
	      }
	    } else if (element !== null) {
	      stack = getCurrentStackAddendum(element);
	    }
	    return stack;
	  };
	}

	var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame$1;

	var getStackAddendum = ReactDebugCurrentFrame_1.getStackAddendum;

	function checkReactTypeSpec$1(typeSpecs, values, location, componentName) {
	  ReactCheckPropTypesRollupShim(typeSpecs, values, location, componentName, getStackAddendum);
	}

	var checkReactTypeSpec_1 = checkReactTypeSpec$1;

	{
	  var getComponentName$3 = getComponentName_1;

	  var _require$2 = ReactFiberComponentTreeHook,
	      getStackAddendumByWorkInProgressFiber$2 = _require$2.getStackAddendumByWorkInProgressFiber;
	}

	function getCurrentFiberOwnerName() {
	  {
	    var fiber = ReactDebugCurrentFiber$2.current;
	    if (fiber === null) {
	      return null;
	    }
	    if (fiber._debugOwner != null) {
	      return getComponentName$3(fiber._debugOwner);
	    }
	  }
	  return null;
	}

	function getCurrentFiberStackAddendum() {
	  {
	    var fiber = ReactDebugCurrentFiber$2.current;
	    if (fiber === null) {
	      return null;
	    }
	    // Safe because if current fiber exists, we are reconciling,
	    // and it is guaranteed to be the work-in-progress version.
	    return getStackAddendumByWorkInProgressFiber$2(fiber);
	  }
	  return null;
	}

	var ReactDebugCurrentFiber$2 = {
	  current: null,
	  phase: null,

	  getCurrentFiberOwnerName: getCurrentFiberOwnerName,
	  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum
	};

	var ReactDebugCurrentFiber_1 = ReactDebugCurrentFiber$2;

	// Trust the developer to only use this with a true check
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugFiberPerf
	 * 
	 */

	var ReactDebugFiberPerf = null;

	{
	  var _require$3 = ReactTypeOfWork,
	      HostRoot$2 = _require$3.HostRoot,
	      HostComponent$2 = _require$3.HostComponent,
	      HostText$1 = _require$3.HostText,
	      HostPortal = _require$3.HostPortal,
	      YieldComponent = _require$3.YieldComponent,
	      Fragment = _require$3.Fragment;

	  var getComponentName$4 = getComponentName_1;

	  // Prefix measurements so that it's possible to filter them.
	  // Longer prefixes are hard to read in DevTools.
	  var reactEmoji = '\u269B';
	  var warningEmoji = '\u26D4';
	  var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

	  // Keep track of current fiber so that we know the path to unwind on pause.
	  // TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
	  var currentFiber = null;
	  // If we're in the middle of user code, which fiber and method is it?
	  // Reusing `currentFiber` would be confusing for this because user code fiber
	  // can change during commit phase too, but we don't need to unwind it (since
	  // lifecycles in the commit phase don't resemble a tree).
	  var currentPhase = null;
	  var currentPhaseFiber = null;
	  // Did lifecycle hook schedule an update? This is often a performance problem,
	  // so we will keep track of it, and include it in the report.
	  // Track commits caused by cascading updates.
	  var isCommitting = false;
	  var hasScheduledUpdateInCurrentCommit = false;
	  var hasScheduledUpdateInCurrentPhase = false;
	  var commitCountInCurrentWorkLoop = 0;
	  var effectCountInCurrentCommit = 0;
	  // During commits, we only show a measurement once per method name
	  // to avoid stretch the commit phase with measurement overhead.
	  var labelsInCurrentCommit = new Set();

	  var formatMarkName = function formatMarkName(markName) {
	    return reactEmoji + ' ' + markName;
	  };

	  var formatLabel = function formatLabel(label, warning$$1) {
	    var prefix = warning$$1 ? warningEmoji + ' ' : reactEmoji + ' ';
	    var suffix = warning$$1 ? ' Warning: ' + warning$$1 : '';
	    return '' + prefix + label + suffix;
	  };

	  var beginMark = function beginMark(markName) {
	    performance.mark(formatMarkName(markName));
	  };

	  var clearMark = function clearMark(markName) {
	    performance.clearMarks(formatMarkName(markName));
	  };

	  var endMark = function endMark(label, markName, warning$$1) {
	    var formattedMarkName = formatMarkName(markName);
	    var formattedLabel = formatLabel(label, warning$$1);
	    try {
	      performance.measure(formattedLabel, formattedMarkName);
	    } catch (err) {}
	    // If previous mark was missing for some reason, this will throw.
	    // This could only happen if React crashed in an unexpected place earlier.
	    // Don't pile on with more errors.

	    // Clear marks immediately to avoid growing buffer.
	    performance.clearMarks(formattedMarkName);
	    performance.clearMeasures(formattedLabel);
	  };

	  var getFiberMarkName = function getFiberMarkName(label, debugID) {
	    return label + ' (#' + debugID + ')';
	  };

	  var getFiberLabel = function getFiberLabel(componentName, isMounted, phase) {
	    if (phase === null) {
	      // These are composite component total time measurements.
	      return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
	    } else {
	      // Composite component methods.
	      return componentName + '.' + phase;
	    }
	  };

	  var beginFiberMark = function beginFiberMark(fiber, phase) {
	    var componentName = getComponentName$4(fiber) || 'Unknown';
	    var debugID = fiber._debugID;
	    var isMounted = fiber.alternate !== null;
	    var label = getFiberLabel(componentName, isMounted, phase);

	    if (isCommitting && labelsInCurrentCommit.has(label)) {
	      // During the commit phase, we don't show duplicate labels because
	      // there is a fixed overhead for every measurement, and we don't
	      // want to stretch the commit phase beyond necessary.
	      return false;
	    }
	    labelsInCurrentCommit.add(label);

	    var markName = getFiberMarkName(label, debugID);
	    beginMark(markName);
	    return true;
	  };

	  var clearFiberMark = function clearFiberMark(fiber, phase) {
	    var componentName = getComponentName$4(fiber) || 'Unknown';
	    var debugID = fiber._debugID;
	    var isMounted = fiber.alternate !== null;
	    var label = getFiberLabel(componentName, isMounted, phase);
	    var markName = getFiberMarkName(label, debugID);
	    clearMark(markName);
	  };

	  var endFiberMark = function endFiberMark(fiber, phase, warning$$1) {
	    var componentName = getComponentName$4(fiber) || 'Unknown';
	    var debugID = fiber._debugID;
	    var isMounted = fiber.alternate !== null;
	    var label = getFiberLabel(componentName, isMounted, phase);
	    var markName = getFiberMarkName(label, debugID);
	    endMark(label, markName, warning$$1);
	  };

	  var shouldIgnoreFiber = function shouldIgnoreFiber(fiber) {
	    // Host components should be skipped in the timeline.
	    // We could check typeof fiber.type, but does this work with RN?
	    switch (fiber.tag) {
	      case HostRoot$2:
	      case HostComponent$2:
	      case HostText$1:
	      case HostPortal:
	      case YieldComponent:
	      case Fragment:
	        return true;
	      default:
	        return false;
	    }
	  };

	  var clearPendingPhaseMeasurement = function clearPendingPhaseMeasurement() {
	    if (currentPhase !== null && currentPhaseFiber !== null) {
	      clearFiberMark(currentPhaseFiber, currentPhase);
	    }
	    currentPhaseFiber = null;
	    currentPhase = null;
	    hasScheduledUpdateInCurrentPhase = false;
	  };

	  var pauseTimers = function pauseTimers() {
	    // Stops all currently active measurements so that they can be resumed
	    // if we continue in a later deferred loop from the same unit of work.
	    var fiber = currentFiber;
	    while (fiber) {
	      if (fiber._debugIsCurrentlyTiming) {
	        endFiberMark(fiber, null, null);
	      }
	      fiber = fiber['return'];
	    }
	  };

	  var resumeTimersRecursively = function resumeTimersRecursively(fiber) {
	    if (fiber['return'] !== null) {
	      resumeTimersRecursively(fiber['return']);
	    }
	    if (fiber._debugIsCurrentlyTiming) {
	      beginFiberMark(fiber, null);
	    }
	  };

	  var resumeTimers = function resumeTimers() {
	    // Resumes all measurements that were active during the last deferred loop.
	    if (currentFiber !== null) {
	      resumeTimersRecursively(currentFiber);
	    }
	  };

	  ReactDebugFiberPerf = {
	    recordEffect: function recordEffect() {
	      effectCountInCurrentCommit++;
	    },
	    recordScheduleUpdate: function recordScheduleUpdate() {
	      if (isCommitting) {
	        hasScheduledUpdateInCurrentCommit = true;
	      }
	      if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
	        hasScheduledUpdateInCurrentPhase = true;
	      }
	    },
	    startWorkTimer: function startWorkTimer(fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // If we pause, this is the fiber to unwind from.
	      currentFiber = fiber;
	      if (!beginFiberMark(fiber, null)) {
	        return;
	      }
	      fiber._debugIsCurrentlyTiming = true;
	    },
	    cancelWorkTimer: function cancelWorkTimer(fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // Remember we shouldn't complete measurement for this fiber.
	      // Otherwise flamechart will be deep even for small updates.
	      fiber._debugIsCurrentlyTiming = false;
	      clearFiberMark(fiber, null);
	    },
	    stopWorkTimer: function stopWorkTimer(fiber) {
	      if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
	        return;
	      }
	      // If we pause, its parent is the fiber to unwind from.
	      currentFiber = fiber['return'];
	      if (!fiber._debugIsCurrentlyTiming) {
	        return;
	      }
	      fiber._debugIsCurrentlyTiming = false;
	      endFiberMark(fiber, null, null);
	    },
	    startPhaseTimer: function startPhaseTimer(fiber, phase) {
	      if (!supportsUserTiming) {
	        return;
	      }
	      clearPendingPhaseMeasurement();
	      if (!beginFiberMark(fiber, phase)) {
	        return;
	      }
	      currentPhaseFiber = fiber;
	      currentPhase = phase;
	    },
	    stopPhaseTimer: function stopPhaseTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      if (currentPhase !== null && currentPhaseFiber !== null) {
	        var warning$$1 = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
	        endFiberMark(currentPhaseFiber, currentPhase, warning$$1);
	      }
	      currentPhase = null;
	      currentPhaseFiber = null;
	    },
	    startWorkLoopTimer: function startWorkLoopTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      commitCountInCurrentWorkLoop = 0;
	      // This is top level call.
	      // Any other measurements are performed within.
	      beginMark('(React Tree Reconciliation)');
	      // Resume any measurements that were in progress during the last loop.
	      resumeTimers();
	    },
	    stopWorkLoopTimer: function stopWorkLoopTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      var warning$$1 = commitCountInCurrentWorkLoop > 1 ? 'There were cascading updates' : null;
	      commitCountInCurrentWorkLoop = 0;
	      // Pause any measurements until the next loop.
	      pauseTimers();
	      endMark('(React Tree Reconciliation)', '(React Tree Reconciliation)', warning$$1);
	    },
	    startCommitTimer: function startCommitTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      isCommitting = true;
	      hasScheduledUpdateInCurrentCommit = false;
	      labelsInCurrentCommit.clear();
	      beginMark('(Committing Changes)');
	    },
	    stopCommitTimer: function stopCommitTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }

	      var warning$$1 = null;
	      if (hasScheduledUpdateInCurrentCommit) {
	        warning$$1 = 'Lifecycle hook scheduled a cascading update';
	      } else if (commitCountInCurrentWorkLoop > 0) {
	        warning$$1 = 'Caused by a cascading update in earlier commit';
	      }
	      hasScheduledUpdateInCurrentCommit = false;
	      commitCountInCurrentWorkLoop++;
	      isCommitting = false;
	      labelsInCurrentCommit.clear();

	      endMark('(Committing Changes)', '(Committing Changes)', warning$$1);
	    },
	    startCommitHostEffectsTimer: function startCommitHostEffectsTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      effectCountInCurrentCommit = 0;
	      beginMark('(Committing Host Effects)');
	    },
	    stopCommitHostEffectsTimer: function stopCommitHostEffectsTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      var count = effectCountInCurrentCommit;
	      effectCountInCurrentCommit = 0;
	      endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
	    },
	    startCommitLifeCyclesTimer: function startCommitLifeCyclesTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      effectCountInCurrentCommit = 0;
	      beginMark('(Calling Lifecycle Methods)');
	    },
	    stopCommitLifeCyclesTimer: function stopCommitLifeCyclesTimer() {
	      if (!supportsUserTiming) {
	        return;
	      }
	      var count = effectCountInCurrentCommit;
	      effectCountInCurrentCommit = 0;
	      endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
	    }
	  };
	}

	var ReactDebugFiberPerf_1 = ReactDebugFiberPerf;

	var _extends$1 = objectAssign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var isFiberMounted = ReactFiberTreeReflection.isFiberMounted;

	var ClassComponent = ReactTypeOfWork.ClassComponent;
	var HostRoot = ReactTypeOfWork.HostRoot;

	var createCursor = ReactFiberStack.createCursor;
	var pop = ReactFiberStack.pop;
	var push = ReactFiberStack.push;

	{
	  var checkReactTypeSpec = checkReactTypeSpec_1;
	  var ReactDebugCurrentFrame = ReactDebugCurrentFrame_1;
	  var ReactDebugCurrentFiber$1 = ReactDebugCurrentFiber_1;

	  var _require4$2 = ReactDebugFiberPerf_1,
	      startPhaseTimer = _require4$2.startPhaseTimer,
	      stopPhaseTimer = _require4$2.stopPhaseTimer;

	  var warnedAboutMissingGetChildContext = {};
	}

	// A cursor to the current merged context object on the stack.
	var contextStackCursor = createCursor(emptyObject);
	// A cursor to a boolean indicating whether the context has changed.
	var didPerformWorkStackCursor = createCursor(false);
	// Keep track of the previous context object that was on the stack.
	// We use this to get access to the parent context after we have already
	// pushed the next context provider, and now need to merge their contexts.
	var previousContext = emptyObject;

	function getUnmaskedContext(workInProgress) {
	  var hasOwnContext = isContextProvider$1(workInProgress);
	  if (hasOwnContext) {
	    // If the fiber is a context provider itself, when we read its context
	    // we have already pushed its own child context on the stack. A context
	    // provider should not "see" its own child context. Therefore we read the
	    // previous (parent) context instead for a context provider.
	    return previousContext;
	  }
	  return contextStackCursor.current;
	}
	var getUnmaskedContext_1 = getUnmaskedContext;

	function cacheContext(workInProgress, unmaskedContext, maskedContext) {
	  var instance = workInProgress.stateNode;
	  instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
	  instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
	}
	var cacheContext_1 = cacheContext;

	var getMaskedContext = function getMaskedContext(workInProgress, unmaskedContext) {
	  var type = workInProgress.type;
	  var contextTypes = type.contextTypes;
	  if (!contextTypes) {
	    return emptyObject;
	  }

	  // Avoid recreating masked context unless unmasked context has changed.
	  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
	  // This may trigger infinite loops if componentWillReceiveProps calls setState.
	  var instance = workInProgress.stateNode;
	  if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
	    return instance.__reactInternalMemoizedMaskedChildContext;
	  }

	  var context = {};
	  for (var key in contextTypes) {
	    context[key] = unmaskedContext[key];
	  }

	  {
	    var name = getComponentName_1(workInProgress) || 'Unknown';
	    ReactDebugCurrentFrame.current = workInProgress;
	    checkReactTypeSpec(contextTypes, context, 'context', name);
	    ReactDebugCurrentFrame.current = null;
	  }

	  // Cache unmasked context so we can avoid recreating masked context unless necessary.
	  // Context is created before the class component is instantiated so check for instance.
	  if (instance) {
	    cacheContext(workInProgress, unmaskedContext, context);
	  }

	  return context;
	};

	var hasContextChanged = function hasContextChanged() {
	  return didPerformWorkStackCursor.current;
	};

	function isContextConsumer(fiber) {
	  return fiber.tag === ClassComponent && fiber.type.contextTypes != null;
	}
	var isContextConsumer_1 = isContextConsumer;

	function isContextProvider$1(fiber) {
	  return fiber.tag === ClassComponent && fiber.type.childContextTypes != null;
	}
	var isContextProvider_1 = isContextProvider$1;

	function popContextProvider(fiber) {
	  if (!isContextProvider$1(fiber)) {
	    return;
	  }

	  pop(didPerformWorkStackCursor, fiber);
	  pop(contextStackCursor, fiber);
	}
	var popContextProvider_1 = popContextProvider;

	var pushTopLevelContextObject = function pushTopLevelContextObject(fiber, context, didChange) {
	  !(contextStackCursor.cursor == null) ? invariant(false, 'Unexpected context found on stack') : void 0;

	  push(contextStackCursor, context, fiber);
	  push(didPerformWorkStackCursor, didChange, fiber);
	};

	function processChildContext$1(fiber, parentContext, isReconciling) {
	  var instance = fiber.stateNode;
	  var childContextTypes = fiber.type.childContextTypes;

	  // TODO (bvaughn) Replace this behavior with an invariant() in the future.
	  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
	  if (typeof instance.getChildContext !== 'function') {
	    {
	      var componentName = getComponentName_1(fiber) || 'Unknown';

	      if (!warnedAboutMissingGetChildContext[componentName]) {
	        warnedAboutMissingGetChildContext[componentName] = true;
	        warning(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
	      }
	    }
	    return parentContext;
	  }

	  var childContext = void 0;
	  {
	    ReactDebugCurrentFiber$1.phase = 'getChildContext';
	    startPhaseTimer(fiber, 'getChildContext');
	    childContext = instance.getChildContext();
	    stopPhaseTimer();
	    ReactDebugCurrentFiber$1.phase = null;
	  }
	  for (var contextKey in childContext) {
	    !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName_1(fiber) || 'Unknown', contextKey) : void 0;
	  }
	  {
	    var name = getComponentName_1(fiber) || 'Unknown';
	    // We can only provide accurate element stacks if we pass work-in-progress tree
	    // during the begin or complete phase. However currently this function is also
	    // called from unstable_renderSubtree legacy implementation. In this case it unsafe to
	    // assume anything about the given fiber. We won't pass it down if we aren't sure.
	    // TODO: remove this hack when we delete unstable_renderSubtree in Fiber.
	    var workInProgress = isReconciling ? fiber : null;
	    ReactDebugCurrentFrame.current = workInProgress;
	    checkReactTypeSpec(childContextTypes, childContext, 'child context', name);
	    ReactDebugCurrentFrame.current = null;
	  }

	  return _extends$1({}, parentContext, childContext);
	}
	var processChildContext_1 = processChildContext$1;

	var pushContextProvider = function pushContextProvider(workInProgress) {
	  if (!isContextProvider$1(workInProgress)) {
	    return false;
	  }

	  var instance = workInProgress.stateNode;
	  // We push the context as early as possible to ensure stack integrity.
	  // If the instance does not exist yet, we will push null at first,
	  // and replace it on the stack later when invalidating the context.
	  var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;

	  // Remember the parent context so we can merge with it later.
	  previousContext = contextStackCursor.current;
	  push(contextStackCursor, memoizedMergedChildContext, workInProgress);
	  push(didPerformWorkStackCursor, false, workInProgress);

	  return true;
	};

	var invalidateContextProvider = function invalidateContextProvider(workInProgress) {
	  var instance = workInProgress.stateNode;
	  !instance ? invariant(false, 'Expected to have an instance by this point.') : void 0;

	  // Merge parent and own context.
	  var mergedContext = processChildContext$1(workInProgress, previousContext, true);
	  instance.__reactInternalMemoizedMergedChildContext = mergedContext;

	  // Replace the old (or empty) context with the new one.
	  // It is important to unwind the context in the reverse order.
	  pop(didPerformWorkStackCursor, workInProgress);
	  pop(contextStackCursor, workInProgress);
	  // Now push the new context and mark that it has changed.
	  push(contextStackCursor, mergedContext, workInProgress);
	  push(didPerformWorkStackCursor, true, workInProgress);
	};

	var resetContext = function resetContext() {
	  previousContext = emptyObject;
	  contextStackCursor.current = emptyObject;
	  didPerformWorkStackCursor.current = false;
	};

	var findCurrentUnmaskedContext$1 = function findCurrentUnmaskedContext$1(fiber) {
	  // Currently this is only used with renderSubtreeIntoContainer; not sure if it
	  // makes sense elsewhere
	  !(isFiberMounted(fiber) && fiber.tag === ClassComponent) ? invariant(false, 'Expected subtree parent to be a mounted class component') : void 0;

	  var node = fiber;
	  while (node.tag !== HostRoot) {
	    if (isContextProvider$1(node)) {
	      return node.stateNode.__reactInternalMemoizedMergedChildContext;
	    }
	    var parent = node['return'];
	    !parent ? invariant(false, 'Found unexpected detached subtree parent') : void 0;
	    node = parent;
	  }
	  return node.stateNode.context;
	};

	var ReactFiberContext = {
	  getUnmaskedContext: getUnmaskedContext_1,
	  cacheContext: cacheContext_1,
	  getMaskedContext: getMaskedContext,
	  hasContextChanged: hasContextChanged,
	  isContextConsumer: isContextConsumer_1,
	  isContextProvider: isContextProvider_1,
	  popContextProvider: popContextProvider_1,
	  pushTopLevelContextObject: pushTopLevelContextObject,
	  processChildContext: processChildContext_1,
	  pushContextProvider: pushContextProvider,
	  invalidateContextProvider: invalidateContextProvider,
	  resetContext: resetContext,
	  findCurrentUnmaskedContext: findCurrentUnmaskedContext$1
	};

	var IndeterminateComponent$1 = ReactTypeOfWork.IndeterminateComponent;
	var ClassComponent$3 = ReactTypeOfWork.ClassComponent;
	var HostRoot$3 = ReactTypeOfWork.HostRoot;
	var HostComponent$3 = ReactTypeOfWork.HostComponent;
	var HostText$2 = ReactTypeOfWork.HostText;
	var HostPortal$1 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent = ReactTypeOfWork.CoroutineComponent;
	var YieldComponent$1 = ReactTypeOfWork.YieldComponent;
	var Fragment$1 = ReactTypeOfWork.Fragment;

	var NoWork$1 = ReactPriorityLevel.NoWork;

	var NoEffect$1 = ReactTypeOfSideEffect.NoEffect;

	var cloneUpdateQueue$1 = ReactFiberUpdateQueue.cloneUpdateQueue;

	{
	  var getComponentName$5 = getComponentName_1;
	}

	// A Fiber is work on a Component that needs to be done or was done. There can
	// be more than one per component.


	{
	  var debugCounter = 1;
	}

	// This is a constructor of a POJO instead of a constructor function for a few
	// reasons:
	// 1) Nobody should add any instance methods on this. Instance methods can be
	//    more difficult to predict when they get optimized and they are almost
	//    never inlined properly in static compilers.
	// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
	//    always know when it is a fiber.
	// 3) We can easily go from a createFiber call to calling a constructor if that
	//    is faster. The opposite is not true.
	// 4) We might want to experiment with using numeric keys since they are easier
	//    to optimize in a non-JIT environment.
	// 5) It should be easy to port this to a C struct and keep a C implementation
	//    compatible.
	var createFiber = function createFiber(tag, key) {
	  var fiber = {
	    // Instance

	    tag: tag,

	    key: key,

	    type: null,

	    stateNode: null,

	    // Fiber

	    'return': null,

	    child: null,
	    sibling: null,
	    index: 0,

	    ref: null,

	    pendingProps: null,
	    memoizedProps: null,
	    updateQueue: null,
	    memoizedState: null,

	    effectTag: NoEffect$1,
	    nextEffect: null,
	    firstEffect: null,
	    lastEffect: null,

	    pendingWorkPriority: NoWork$1,
	    progressedPriority: NoWork$1,
	    progressedChild: null,
	    progressedFirstDeletion: null,
	    progressedLastDeletion: null,

	    alternate: null
	  };

	  {
	    fiber._debugID = debugCounter++;
	    fiber._debugSource = null;
	    fiber._debugOwner = null;
	    fiber._debugIsCurrentlyTiming = false;
	    if (typeof Object.preventExtensions === 'function') {
	      Object.preventExtensions(fiber);
	    }
	  }

	  return fiber;
	};

	function shouldConstruct(Component) {
	  return !!(Component.prototype && Component.prototype.isReactComponent);
	}

	// This is used to create an alternate fiber to do work on.
	// TODO: Rename to createWorkInProgressFiber or something like that.
	var cloneFiber = function cloneFiber(fiber, priorityLevel) {
	  // We clone to get a work in progress. That means that this fiber is the
	  // current. To make it safe to reuse that fiber later on as work in progress
	  // we need to reset its work in progress flag now. We don't have an
	  // opportunity to do this earlier since we don't traverse the tree when
	  // the work in progress tree becomes the current tree.
	  // fiber.progressedPriority = NoWork;
	  // fiber.progressedChild = null;

	  // We use a double buffering pooling technique because we know that we'll only
	  // ever need at most two versions of a tree. We pool the "other" unused node
	  // that we're free to reuse. This is lazily created to avoid allocating extra
	  // objects for things that are never updated. It also allow us to reclaim the
	  // extra memory if needed.
	  var alt = fiber.alternate;
	  if (alt !== null) {
	    // If we clone, then we do so from the "current" state. The current state
	    // can't have any side-effects that are still valid so we reset just to be
	    // sure.
	    alt.effectTag = NoEffect$1;
	    alt.nextEffect = null;
	    alt.firstEffect = null;
	    alt.lastEffect = null;
	  } else {
	    // This should not have an alternate already
	    alt = createFiber(fiber.tag, fiber.key);
	    alt.type = fiber.type;

	    alt.progressedChild = fiber.progressedChild;
	    alt.progressedPriority = fiber.progressedPriority;

	    alt.alternate = fiber;
	    fiber.alternate = alt;
	  }

	  alt.stateNode = fiber.stateNode;
	  alt.child = fiber.child;
	  alt.sibling = fiber.sibling; // This should always be overridden. TODO: null
	  alt.index = fiber.index; // This should always be overridden.
	  alt.ref = fiber.ref;
	  // pendingProps is here for symmetry but is unnecessary in practice for now.
	  // TODO: Pass in the new pendingProps as an argument maybe?
	  alt.pendingProps = fiber.pendingProps;
	  cloneUpdateQueue$1(fiber, alt);
	  alt.pendingWorkPriority = priorityLevel;

	  alt.memoizedProps = fiber.memoizedProps;
	  alt.memoizedState = fiber.memoizedState;

	  {
	    alt._debugID = fiber._debugID;
	    alt._debugSource = fiber._debugSource;
	    alt._debugOwner = fiber._debugOwner;
	  }

	  return alt;
	};

	var createHostRootFiber$1 = function createHostRootFiber$1() {
	  var fiber = createFiber(HostRoot$3, null);
	  return fiber;
	};

	var createFiberFromElement = function createFiberFromElement(element, priorityLevel) {
	  var owner = null;
	  {
	    owner = element._owner;
	  }

	  var fiber = createFiberFromElementType(element.type, element.key, owner);
	  fiber.pendingProps = element.props;
	  fiber.pendingWorkPriority = priorityLevel;

	  {
	    fiber._debugSource = element._source;
	    fiber._debugOwner = element._owner;
	  }

	  return fiber;
	};

	var createFiberFromFragment = function createFiberFromFragment(elements, priorityLevel) {
	  // TODO: Consider supporting keyed fragments. Technically, we accidentally
	  // support that in the existing React.
	  var fiber = createFiber(Fragment$1, null);
	  fiber.pendingProps = elements;
	  fiber.pendingWorkPriority = priorityLevel;
	  return fiber;
	};

	var createFiberFromText = function createFiberFromText(content, priorityLevel) {
	  var fiber = createFiber(HostText$2, null);
	  fiber.pendingProps = content;
	  fiber.pendingWorkPriority = priorityLevel;
	  return fiber;
	};

	function createFiberFromElementType(type, key, debugOwner) {
	  var fiber = void 0;
	  if (typeof type === 'function') {
	    fiber = shouldConstruct(type) ? createFiber(ClassComponent$3, key) : createFiber(IndeterminateComponent$1, key);
	    fiber.type = type;
	  } else if (typeof type === 'string') {
	    fiber = createFiber(HostComponent$3, key);
	    fiber.type = type;
	  } else if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && typeof type.tag === 'number') {
	    // Currently assumed to be a continuation and therefore is a fiber already.
	    // TODO: The yield system is currently broken for updates in some cases.
	    // The reified yield stores a fiber, but we don't know which fiber that is;
	    // the current or a workInProgress? When the continuation gets rendered here
	    // we don't know if we can reuse that fiber or if we need to clone it.
	    // There is probably a clever way to restructure this.
	    fiber = type;
	  } else {
	    var info = '';
	    {
	      if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	      }
	      var ownerName = debugOwner ? getComponentName$5(debugOwner) : null;
	      if (ownerName) {
	        info += '\n\nCheck the render method of `' + ownerName + '`.';
	      }
	    }
	    invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof(type), info);
	  }
	  return fiber;
	}

	var createFiberFromElementType_1 = createFiberFromElementType;

	var createFiberFromCoroutine = function createFiberFromCoroutine(coroutine, priorityLevel) {
	  var fiber = createFiber(CoroutineComponent, coroutine.key);
	  fiber.type = coroutine.handler;
	  fiber.pendingProps = coroutine;
	  fiber.pendingWorkPriority = priorityLevel;
	  return fiber;
	};

	var createFiberFromYield = function createFiberFromYield(yieldNode, priorityLevel) {
	  var fiber = createFiber(YieldComponent$1, null);
	  return fiber;
	};

	var createFiberFromPortal = function createFiberFromPortal(portal, priorityLevel) {
	  var fiber = createFiber(HostPortal$1, portal.key);
	  fiber.pendingProps = portal.children || [];
	  fiber.pendingWorkPriority = priorityLevel;
	  fiber.stateNode = {
	    containerInfo: portal.containerInfo,
	    implementation: portal.implementation
	  };
	  return fiber;
	};

	var ReactFiber = {
	  cloneFiber: cloneFiber,
	  createHostRootFiber: createHostRootFiber$1,
	  createFiberFromElement: createFiberFromElement,
	  createFiberFromFragment: createFiberFromFragment,
	  createFiberFromText: createFiberFromText,
	  createFiberFromElementType: createFiberFromElementType_1,
	  createFiberFromCoroutine: createFiberFromCoroutine,
	  createFiberFromYield: createFiberFromYield,
	  createFiberFromPortal: createFiberFromPortal
	};

	var createHostRootFiber = ReactFiber.createHostRootFiber;

	var createFiberRoot$1 = function createFiberRoot$1(containerInfo) {
	  // Cyclic construction. This cheats the type system right now because
	  // stateNode is any.
	  var uninitializedFiber = createHostRootFiber();
	  var root = {
	    current: uninitializedFiber,
	    containerInfo: containerInfo,
	    isScheduled: false,
	    nextScheduledRoot: null,
	    context: null,
	    pendingContext: null
	  };
	  uninitializedFiber.stateNode = root;
	  return root;
	};

	var ReactFiberRoot = {
	  createFiberRoot: createFiberRoot$1
	};

	var defaultShowDialog = function defaultShowDialog() {
	  return true;
	};

	var showDialog = defaultShowDialog;

	function logCapturedError$1(capturedError) {
	  var logError = showDialog(capturedError);

	  // Allow injected showDialog() to prevent default console.error logging.
	  // This enables renderers like ReactNative to better manage redbox behavior.
	  if (logError === false) {
	    return;
	  }

	  {
	    var componentName = capturedError.componentName,
	        componentStack = capturedError.componentStack,
	        error = capturedError.error,
	        errorBoundaryName = capturedError.errorBoundaryName,
	        errorBoundaryFound = capturedError.errorBoundaryFound,
	        willRetry = capturedError.willRetry;
	    var message = error.message,
	        name = error.name,
	        stack = error.stack;

	    var errorSummary = message ? name + ': ' + message : name;

	    var componentNameMessage = componentName ? 'React caught an error thrown by ' + componentName + '.' : 'React caught an error thrown by one of your components.';

	    // Error stack varies by browser, eg:
	    // Chrome prepends the Error name and type.
	    // Firefox, Safari, and IE don't indent the stack lines.
	    // Format it in a consistent way for error logging.
	    var formattedCallStack = stack.slice(0, errorSummary.length) === errorSummary ? stack.slice(errorSummary.length) : stack;
	    formattedCallStack = formattedCallStack.trim().split('\n').map(function (line) {
	      return '\n    ' + line.trim();
	    }).join();

	    var errorBoundaryMessage = void 0;
	    // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
	    if (errorBoundaryFound && errorBoundaryName) {
	      if (willRetry) {
	        errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
	      } else {
	        errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '. ' + 'Recreating the tree from scratch failed so React will unmount the tree.';
	      }
	    } else {
	      // TODO Link to unstable_handleError() documentation once it exists.
	      errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.';
	    }

	    console.error(componentNameMessage + ' You should fix this error in your code. ' + errorBoundaryMessage + '\n\n' + (errorSummary + '\n\n') + ('The error is located at: ' + componentStack + '\n\n') + ('The error was thrown at: ' + formattedCallStack));
	  }
	}

	var injection = {
	  /**
	   * Display custom dialog for lifecycle errors.
	   * Return false to prevent default behavior of logging to console.error.
	   */
	  injectDialog: function injectDialog(fn) {
	    !(showDialog === defaultShowDialog) ? invariant(false, 'The custom dialog was already injected.') : void 0;
	    !(typeof fn === 'function') ? invariant(false, 'Injected showDialog() must be a function.') : void 0;
	    showDialog = fn;
	  }
	};

	var logCapturedError_1 = logCapturedError$1;

	var ReactFiberErrorLogger = {
	  injection: injection,
	  logCapturedError: logCapturedError_1
	};

	var caughtError = null;

	var invokeGuardedCallback$1 = function invokeGuardedCallback$1(name, func, context, a, b, c, d, e, f) {
	  var funcArgs = Array.prototype.slice.call(arguments, 3);
	  try {
	    func.apply(context, funcArgs);
	  } catch (error) {
	    return error;
	  }
	  return null;
	};

	{
	  /**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');
	    var depth = 0;

	    invokeGuardedCallback$1 = function invokeGuardedCallback$1(name, func, context, a, b, c, d, e, f) {
	      depth++;
	      var thisDepth = depth;
	      var funcArgs = Array.prototype.slice.call(arguments, 3);
	      var boundFunc = function boundFunc() {
	        func.apply(context, funcArgs);
	      };
	      var fakeEventError = null;
	      var onFakeEventError = function onFakeEventError(event) {
	        // Don't capture nested errors
	        if (depth === thisDepth) {
	          fakeEventError = event.error;
	        }
	      };
	      var evtType = 'react-' + (name ? name : 'invokeguardedcallback') + '-' + depth;
	      window.addEventListener('error', onFakeEventError);
	      fakeNode.addEventListener(evtType, boundFunc, false);
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);
	      fakeNode.removeEventListener(evtType, boundFunc, false);
	      window.removeEventListener('error', onFakeEventError);
	      depth--;
	      return fakeEventError;
	    };
	  }
	}

	var _rethrowCaughtError = function _rethrowCaughtError() {
	  if (caughtError) {
	    var error = caughtError;
	    caughtError = null;
	    throw error;
	  }
	};

	/**
	 * Call a function while guarding against errors that happens within it.
	 * Returns an error if it throws, otherwise null.
	 *
	 * @param {String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} context The context to use when calling the function
	 * @param {...*} args Arguments for function
	 */
	var ReactErrorUtils = {
	  injection: {
	    injectErrorUtils: function injectErrorUtils(injectedErrorUtils) {
	      !(typeof injectedErrorUtils.invokeGuardedCallback === 'function') ? invariant(false, 'Injected invokeGuardedCallback() must be a function.') : void 0;
	      invokeGuardedCallback$1 = injectedErrorUtils.invokeGuardedCallback;
	    }
	  },

	  invokeGuardedCallback: function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
	    return invokeGuardedCallback$1.apply(this, arguments);
	  },

	  /**
	   * Same as invokeGuardedCallback, but instead of returning an error, it stores
	   * it in a global so it can be rethrown by `rethrowCaughtError` later.
	   *
	   * @param {String} name of the guard to use for logging or debugging
	   * @param {Function} func The function to invoke
	   * @param {*} context The context to use when calling the function
	   * @param {...*} args Arguments for function
	   */
	  invokeGuardedCallbackAndCatchFirstError: function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
	    var error = ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
	    if (error !== null && caughtError === null) {
	      caughtError = error;
	    }
	  },

	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function rethrowCaughtError() {
	    return _rethrowCaughtError.apply(this, arguments);
	  }
	};

	var ReactErrorUtils_1 = ReactErrorUtils;

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementSymbol
	 * 
	 */

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var ReactElementSymbol = REACT_ELEMENT_TYPE;

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCoroutine
	 * 
	 */

	// The Symbol used to tag the special React types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_COROUTINE_TYPE$1;
	var REACT_YIELD_TYPE$1;
	if (typeof Symbol === 'function' && Symbol['for']) {
	  REACT_COROUTINE_TYPE$1 = Symbol['for']('react.coroutine');
	  REACT_YIELD_TYPE$1 = Symbol['for']('react.yield');
	} else {
	  REACT_COROUTINE_TYPE$1 = 0xeac8;
	  REACT_YIELD_TYPE$1 = 0xeac9;
	}

	var createCoroutine = function createCoroutine(children, handler, props) {
	  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var coroutine = {
	    // This tag allow us to uniquely identify this as a React Coroutine
	    $$typeof: REACT_COROUTINE_TYPE$1,
	    key: key == null ? null : '' + key,
	    children: children,
	    handler: handler,
	    props: props
	  };

	  {
	    // TODO: Add _store property for marking this as validated.
	    if (Object.freeze) {
	      Object.freeze(coroutine.props);
	      Object.freeze(coroutine);
	    }
	  }

	  return coroutine;
	};

	var createYield = function createYield(value) {
	  var yieldNode = {
	    // This tag allow us to uniquely identify this as a React Yield
	    $$typeof: REACT_YIELD_TYPE$1,
	    value: value
	  };

	  {
	    // TODO: Add _store property for marking this as validated.
	    if (Object.freeze) {
	      Object.freeze(yieldNode);
	    }
	  }

	  return yieldNode;
	};

	/**
	 * Verifies the object is a coroutine object.
	 */
	var isCoroutine = function isCoroutine(object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_COROUTINE_TYPE$1;
	};

	/**
	 * Verifies the object is a yield object.
	 */
	var isYield = function isYield(object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_YIELD_TYPE$1;
	};

	var REACT_YIELD_TYPE_1 = REACT_YIELD_TYPE$1;
	var REACT_COROUTINE_TYPE_1 = REACT_COROUTINE_TYPE$1;

	var ReactCoroutine = {
	  createCoroutine: createCoroutine,
	  createYield: createYield,
	  isCoroutine: isCoroutine,
	  isYield: isYield,
	  REACT_YIELD_TYPE: REACT_YIELD_TYPE_1,
	  REACT_COROUTINE_TYPE: REACT_COROUTINE_TYPE_1
	};

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPortal
	 * 
	 */

	// The Symbol used to tag the special React types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_PORTAL_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.portal') || 0xeaca;

	var createPortal = function createPortal(children, containerInfo,
	// TODO: figure out the API for cross-renderer implementation.
	implementation) {
	  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  return {
	    // This tag allow us to uniquely identify this as a React Portal
	    $$typeof: REACT_PORTAL_TYPE$1,
	    key: key == null ? null : '' + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	};

	/**
	 * Verifies the object is a portal object.
	 */
	var isPortal = function isPortal(object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_PORTAL_TYPE$1;
	};

	var REACT_PORTAL_TYPE_1 = REACT_PORTAL_TYPE$1;

	var ReactPortal = {
	  createPortal: createPortal,
	  isPortal: isPortal,
	  REACT_PORTAL_TYPE: REACT_PORTAL_TYPE_1
	};

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	var getIteratorFn_1 = getIteratorFn;

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFeatureFlags
	 * 
	 */

	var ReactFeatureFlags = {
	  // When true, call console.time() before and .timeEnd() after each top-level
	  // render (both initial renders and updates). Useful when looking at prod-mode
	  // timeline profiles in Chrome, for example.
	  logTopLevelRenders: false,
	  prepareNewChildrenBeforeUnmountInStack: true,
	  disableNewFiberFeatures: false
	};

	var ReactFeatureFlags_1 = ReactFeatureFlags;

	var REACT_COROUTINE_TYPE = ReactCoroutine.REACT_COROUTINE_TYPE;
	var REACT_YIELD_TYPE = ReactCoroutine.REACT_YIELD_TYPE;

	var REACT_PORTAL_TYPE = ReactPortal.REACT_PORTAL_TYPE;

	{
	  var _require3$1 = ReactDebugCurrentFiber_1,
	      getCurrentFiberStackAddendum$1 = _require3$1.getCurrentFiberStackAddendum;

	  var getComponentName$6 = getComponentName_1;
	  var warning$7 = warning;
	  var didWarnAboutMaps = false;
	}

	var cloneFiber$2 = ReactFiber.cloneFiber;
	var createFiberFromElement$1 = ReactFiber.createFiberFromElement;
	var createFiberFromFragment$1 = ReactFiber.createFiberFromFragment;
	var createFiberFromText$1 = ReactFiber.createFiberFromText;
	var createFiberFromCoroutine$1 = ReactFiber.createFiberFromCoroutine;
	var createFiberFromYield$1 = ReactFiber.createFiberFromYield;
	var createFiberFromPortal$1 = ReactFiber.createFiberFromPortal;

	var isArray = Array.isArray;

	var FunctionalComponent$2 = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$6 = ReactTypeOfWork.ClassComponent;
	var HostText$4 = ReactTypeOfWork.HostText;
	var HostPortal$4 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$2 = ReactTypeOfWork.CoroutineComponent;
	var YieldComponent$3 = ReactTypeOfWork.YieldComponent;
	var Fragment$3 = ReactTypeOfWork.Fragment;
	var NoEffect$3 = ReactTypeOfSideEffect.NoEffect;
	var Placement$3 = ReactTypeOfSideEffect.Placement;
	var Deletion$1 = ReactTypeOfSideEffect.Deletion;

	function coerceRef(current$$1, element) {
	  var mixedRef = element.ref;
	  if (mixedRef !== null && typeof mixedRef !== 'function') {
	    if (element._owner) {
	      var owner = element._owner;
	      var inst = void 0;
	      if (owner) {
	        if (typeof owner.tag === 'number') {
	          var ownerFiber = owner;
	          !(ownerFiber.tag === ClassComponent$6) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
	          inst = ownerFiber.stateNode;
	        } else {
	          // Stack
	          inst = owner.getPublicInstance();
	        }
	      }
	      !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
	      var stringRef = '' + mixedRef;
	      // Check if previous string ref matches new string ref
	      if (current$$1 !== null && current$$1.ref !== null && current$$1.ref._stringRef === stringRef) {
	        return current$$1.ref;
	      }
	      var ref = function ref(value) {
	        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	        if (value === null) {
	          delete refs[stringRef];
	        } else {
	          refs[stringRef] = value;
	        }
	      };
	      ref._stringRef = stringRef;
	      return ref;
	    }
	  }
	  return mixedRef;
	}

	function throwOnInvalidObjectType(returnFiber, newChild) {
	  if (returnFiber.type !== 'textarea') {
	    var addendum = '';
	    {
	      addendum = ' If you meant to render a collection of children, use an array ' + 'instead.';
	      var owner = ReactCurrentOwnerRollupShim.owner || returnFiber._debugOwner;
	      if (owner && typeof owner.tag === 'number') {
	        var name = getComponentName$6(owner);
	        if (name) {
	          addendum += '\n\nCheck the render method of `' + name + '`.';
	        }
	      }
	    }
	    invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
	  }
	}

	// This wrapper function exists because I expect to clone the code in each path
	// to be able to optimize each path individually by branching early. This needs
	// a compiler or we can do it manually. Helpers that don't need this branching
	// live outside of this function.
	function ChildReconciler(shouldClone, shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return;
	    }
	    if (!shouldClone) {
	      // When we're reconciling in place we have a work in progress copy. We
	      // actually want the current copy. If there is no current copy, then we
	      // don't need to track deletion side-effects.
	      if (childToDelete.alternate === null) {
	        return;
	      }
	      childToDelete = childToDelete.alternate;
	    }
	    // Deletions are added in reversed order so we add it to the front.
	    var last = returnFiber.progressedLastDeletion;
	    if (last !== null) {
	      last.nextEffect = childToDelete;
	      returnFiber.progressedLastDeletion = childToDelete;
	    } else {
	      returnFiber.progressedFirstDeletion = returnFiber.progressedLastDeletion = childToDelete;
	    }
	    childToDelete.nextEffect = null;
	    childToDelete.effectTag = Deletion$1;
	  }

	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return null;
	    }

	    // TODO: For the shouldClone case, this could be micro-optimized a bit by
	    // assuming that after the first child we've already added everything.
	    var childToDelete = currentFirstChild;
	    while (childToDelete !== null) {
	      deleteChild(returnFiber, childToDelete);
	      childToDelete = childToDelete.sibling;
	    }
	    return null;
	  }

	  function mapRemainingChildren(returnFiber, currentFirstChild) {
	    // Add the remaining children to a temporary map so that we can find them by
	    // keys quickly. Implicit (null) keys get added to this set with their index
	    var existingChildren = new Map();

	    var existingChild = currentFirstChild;
	    while (existingChild !== null) {
	      if (existingChild.key !== null) {
	        existingChildren.set(existingChild.key, existingChild);
	      } else {
	        existingChildren.set(existingChild.index, existingChild);
	      }
	      existingChild = existingChild.sibling;
	    }
	    return existingChildren;
	  }

	  function useFiber(fiber, priority) {
	    // We currently set sibling to null and index to 0 here because it is easy
	    // to forget to do before returning it. E.g. for the single child case.
	    if (shouldClone) {
	      var clone = cloneFiber$2(fiber, priority);
	      clone.index = 0;
	      clone.sibling = null;
	      return clone;
	    } else {
	      // We override the pending priority even if it is higher, because if
	      // we're reconciling at a lower priority that means that this was
	      // down-prioritized.
	      fiber.pendingWorkPriority = priority;
	      fiber.effectTag = NoEffect$3;
	      fiber.index = 0;
	      fiber.sibling = null;
	      return fiber;
	    }
	  }

	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects) {
	      // Noop.
	      return lastPlacedIndex;
	    }
	    var current$$1 = newFiber.alternate;
	    if (current$$1 !== null) {
	      var oldIndex = current$$1.index;
	      if (oldIndex < lastPlacedIndex) {
	        // This is a move.
	        newFiber.effectTag = Placement$3;
	        return lastPlacedIndex;
	      } else {
	        // This item can stay in place.
	        return oldIndex;
	      }
	    } else {
	      // This is an insertion.
	      newFiber.effectTag = Placement$3;
	      return lastPlacedIndex;
	    }
	  }

	  function placeSingleChild(newFiber) {
	    // This is simpler for the single child case. We only need to do a
	    // placement for inserting new children.
	    if (shouldTrackSideEffects && newFiber.alternate === null) {
	      newFiber.effectTag = Placement$3;
	    }
	    return newFiber;
	  }

	  function updateTextNode(returnFiber, current$$1, textContent, priority) {
	    if (current$$1 === null || current$$1.tag !== HostText$4) {
	      // Insert
	      var created = createFiberFromText$1(textContent, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current$$1, priority);
	      existing.pendingProps = textContent;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateElement(returnFiber, current$$1, element, priority) {
	    if (current$$1 === null || current$$1.type !== element.type) {
	      // Insert
	      var created = createFiberFromElement$1(element, priority);
	      created.ref = coerceRef(current$$1, element);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current$$1, priority);
	      existing.ref = coerceRef(current$$1, element);
	      existing.pendingProps = element.props;
	      existing['return'] = returnFiber;
	      {
	        existing._debugSource = element._source;
	        existing._debugOwner = element._owner;
	      }
	      return existing;
	    }
	  }

	  function updateCoroutine(returnFiber, current$$1, coroutine, priority) {
	    // TODO: Should this also compare handler to determine whether to reuse?
	    if (current$$1 === null || current$$1.tag !== CoroutineComponent$2) {
	      // Insert
	      var created = createFiberFromCoroutine$1(coroutine, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current$$1, priority);
	      existing.pendingProps = coroutine;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateYield(returnFiber, current$$1, yieldNode, priority) {
	    if (current$$1 === null || current$$1.tag !== YieldComponent$3) {
	      // Insert
	      var created = createFiberFromYield$1(yieldNode, priority);
	      created.type = yieldNode.value;
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Move based on index
	      var existing = useFiber(current$$1, priority);
	      existing.type = yieldNode.value;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updatePortal(returnFiber, current$$1, portal, priority) {
	    if (current$$1 === null || current$$1.tag !== HostPortal$4 || current$$1.stateNode.containerInfo !== portal.containerInfo || current$$1.stateNode.implementation !== portal.implementation) {
	      // Insert
	      var created = createFiberFromPortal$1(portal, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current$$1, priority);
	      existing.pendingProps = portal.children || [];
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function updateFragment(returnFiber, current$$1, fragment, priority) {
	    if (current$$1 === null || current$$1.tag !== Fragment$3) {
	      // Insert
	      var created = createFiberFromFragment$1(fragment, priority);
	      created['return'] = returnFiber;
	      return created;
	    } else {
	      // Update
	      var existing = useFiber(current$$1, priority);
	      existing.pendingProps = fragment;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	  }

	  function createChild(returnFiber, newChild, priority) {
	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes doesn't have keys. If the previous node is implicitly keyed
	      // we can continue to replace it without aborting even if it is not a text
	      // node.
	      var created = createFiberFromText$1('' + newChild, priority);
	      created['return'] = returnFiber;
	      return created;
	    }

	    if ((typeof newChild === 'undefined' ? 'undefined' : _typeof(newChild)) === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case ReactElementSymbol:
	          {
	            var _created = createFiberFromElement$1(newChild, priority);
	            _created.ref = coerceRef(null, newChild);
	            _created['return'] = returnFiber;
	            return _created;
	          }

	        case REACT_COROUTINE_TYPE:
	          {
	            var _created2 = createFiberFromCoroutine$1(newChild, priority);
	            _created2['return'] = returnFiber;
	            return _created2;
	          }

	        case REACT_YIELD_TYPE:
	          {
	            var _created3 = createFiberFromYield$1(newChild, priority);
	            _created3.type = newChild.value;
	            _created3['return'] = returnFiber;
	            return _created3;
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            var _created4 = createFiberFromPortal$1(newChild, priority);
	            _created4['return'] = returnFiber;
	            return _created4;
	          }
	      }

	      if (isArray(newChild) || getIteratorFn_1(newChild)) {
	        var _created5 = createFiberFromFragment$1(newChild, priority);
	        _created5['return'] = returnFiber;
	        return _created5;
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    return null;
	  }

	  function updateSlot(returnFiber, oldFiber, newChild, priority) {
	    // Update the fiber if the keys match, otherwise return null.

	    var key = oldFiber !== null ? oldFiber.key : null;

	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes doesn't have keys. If the previous node is implicitly keyed
	      // we can continue to replace it without aborting even if it is not a text
	      // node.
	      if (key !== null) {
	        return null;
	      }
	      return updateTextNode(returnFiber, oldFiber, '' + newChild, priority);
	    }

	    if ((typeof newChild === 'undefined' ? 'undefined' : _typeof(newChild)) === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case ReactElementSymbol:
	          {
	            if (newChild.key === key) {
	              return updateElement(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }

	        case REACT_COROUTINE_TYPE:
	          {
	            if (newChild.key === key) {
	              return updateCoroutine(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }

	        case REACT_YIELD_TYPE:
	          {
	            // Yields doesn't have keys. If the previous node is implicitly keyed
	            // we can continue to replace it without aborting even if it is not a
	            // yield.
	            if (key === null) {
	              return updateYield(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            if (newChild.key === key) {
	              return updatePortal(returnFiber, oldFiber, newChild, priority);
	            } else {
	              return null;
	            }
	          }
	      }

	      if (isArray(newChild) || getIteratorFn_1(newChild)) {
	        // Fragments doesn't have keys so if the previous key is implicit we can
	        // update it.
	        if (key !== null) {
	          return null;
	        }
	        return updateFragment(returnFiber, oldFiber, newChild, priority);
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    return null;
	  }

	  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, priority) {
	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      // Text nodes doesn't have keys, so we neither have to check the old nor
	      // new node for the key. If both are text nodes, they match.
	      var matchedFiber = existingChildren.get(newIdx) || null;
	      return updateTextNode(returnFiber, matchedFiber, '' + newChild, priority);
	    }

	    if ((typeof newChild === 'undefined' ? 'undefined' : _typeof(newChild)) === 'object' && newChild !== null) {
	      switch (newChild.$$typeof) {
	        case ReactElementSymbol:
	          {
	            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updateElement(returnFiber, _matchedFiber, newChild, priority);
	          }

	        case REACT_COROUTINE_TYPE:
	          {
	            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updateCoroutine(returnFiber, _matchedFiber2, newChild, priority);
	          }

	        case REACT_YIELD_TYPE:
	          {
	            // Yields doesn't have keys, so we neither have to check the old nor
	            // new node for the key. If both are yields, they match.
	            var _matchedFiber3 = existingChildren.get(newIdx) || null;
	            return updateYield(returnFiber, _matchedFiber3, newChild, priority);
	          }

	        case REACT_PORTAL_TYPE:
	          {
	            var _matchedFiber4 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
	            return updatePortal(returnFiber, _matchedFiber4, newChild, priority);
	          }
	      }

	      if (isArray(newChild) || getIteratorFn_1(newChild)) {
	        var _matchedFiber5 = existingChildren.get(newIdx) || null;
	        return updateFragment(returnFiber, _matchedFiber5, newChild, priority);
	      }

	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    return null;
	  }

	  function warnOnDuplicateKey(child, knownKeys) {
	    {
	      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child === null) {
	        return knownKeys;
	      }
	      switch (child.$$typeof) {
	        case ReactElementSymbol:
	        case REACT_COROUTINE_TYPE:
	        case REACT_PORTAL_TYPE:
	          var key = child.key;
	          if (typeof key !== 'string') {
	            break;
	          }
	          if (knownKeys === null) {
	            knownKeys = new Set();
	            knownKeys.add(key);
	            break;
	          }
	          if (!knownKeys.has(key)) {
	            knownKeys.add(key);
	            break;
	          }
	          warning$7(false, 'Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, ' + 'only the first child will be used.%s', key, getCurrentFiberStackAddendum$1());
	          break;
	        default:
	          break;
	      }
	    }
	    return knownKeys;
	  }

	  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, priority) {
	    // This algorithm can't optimize by searching from boths ends since we
	    // don't have backpointers on fibers. I'm trying to see how far we can get
	    // with that model. If it ends up not being worth the tradeoffs, we can
	    // add it later.

	    // Even with a two ended optimization, we'd want to optimize for the case
	    // where there are few changes and brute force the comparison instead of
	    // going for the Map. It'd like to explore hitting that path first in
	    // forward-only mode and only go for the Map once we notice that we need
	    // lots of look ahead. This doesn't handle reversal as well as two ended
	    // search but that's unusual. Besides, for the two ended optimization to
	    // work on Iterables, we'd need to copy the whole set.

	    // In this first iteration, we'll just live with hitting the bad case
	    // (adding everything to a Map) in for every insert/move.

	    // If you change this code, also update reconcileChildrenIterator() which
	    // uses the same algorithm.

	    {
	      // First, validate keys.
	      var knownKeys = null;
	      for (var i = 0; i < newChildren.length; i++) {
	        var child = newChildren[i];
	        knownKeys = warnOnDuplicateKey(child, knownKeys);
	      }
	    }

	    var resultingFirstChild = null;
	    var previousNewFiber = null;

	    var oldFiber = currentFirstChild;
	    var lastPlacedIndex = 0;
	    var newIdx = 0;
	    var nextOldFiber = null;
	    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
	      if (oldFiber.index > newIdx) {
	        nextOldFiber = oldFiber;
	        oldFiber = null;
	      } else {
	        nextOldFiber = oldFiber.sibling;
	      }
	      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], priority);
	      if (newFiber === null) {
	        // TODO: This breaks on empty slots like null children. That's
	        // unfortunate because it triggers the slow path all the time. We need
	        // a better way to communicate whether this was a miss or null,
	        // boolean, undefined, etc.
	        if (oldFiber === null) {
	          oldFiber = nextOldFiber;
	        }
	        break;
	      }
	      if (shouldTrackSideEffects) {
	        if (oldFiber && newFiber.alternate === null) {
	          // We matched the slot, but we didn't reuse the existing fiber, so we
	          // need to delete the existing child.
	          deleteChild(returnFiber, oldFiber);
	        }
	      }
	      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
	      if (previousNewFiber === null) {
	        // TODO: Move out of the loop. This only happens for the first run.
	        resultingFirstChild = newFiber;
	      } else {
	        // TODO: Defer siblings if we're not at the right index for this slot.
	        // I.e. if we had null values before, then we want to defer this
	        // for each null value. However, we also don't want to call updateSlot
	        // with the previous one.
	        previousNewFiber.sibling = newFiber;
	      }
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }

	    if (newIdx === newChildren.length) {
	      // We've reached the end of the new children. We can delete the rest.
	      deleteRemainingChildren(returnFiber, oldFiber);
	      return resultingFirstChild;
	    }

	    if (oldFiber === null) {
	      // If we don't have any more existing children we can choose a fast path
	      // since the rest will all be insertions.
	      for (; newIdx < newChildren.length; newIdx++) {
	        var _newFiber = createChild(returnFiber, newChildren[newIdx], priority);
	        if (!_newFiber) {
	          continue;
	        }
	        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          // TODO: Move out of the loop. This only happens for the first run.
	          resultingFirstChild = _newFiber;
	        } else {
	          previousNewFiber.sibling = _newFiber;
	        }
	        previousNewFiber = _newFiber;
	      }
	      return resultingFirstChild;
	    }

	    // Add all children to a key map for quick lookups.
	    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

	    // Keep scanning and use the map to restore deleted items as moves.
	    for (; newIdx < newChildren.length; newIdx++) {
	      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], priority);
	      if (_newFiber2) {
	        if (shouldTrackSideEffects) {
	          if (_newFiber2.alternate !== null) {
	            // The new fiber is a work in progress, but if there exists a
	            // current, that means that we reused the fiber. We need to delete
	            // it from the child list so that we don't add it to the deletion
	            // list.
	            existingChildren['delete'](_newFiber2.key === null ? newIdx : _newFiber2.key);
	          }
	        }
	        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          resultingFirstChild = _newFiber2;
	        } else {
	          previousNewFiber.sibling = _newFiber2;
	        }
	        previousNewFiber = _newFiber2;
	      }
	    }

	    if (shouldTrackSideEffects) {
	      // Any existing children that weren't consumed above were deleted. We need
	      // to add them to the deletion list.
	      existingChildren.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    }

	    return resultingFirstChild;
	  }

	  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, priority) {
	    // This is the same implementation as reconcileChildrenArray(),
	    // but using the iterator instead.

	    var iteratorFn = getIteratorFn_1(newChildrenIterable);
	    !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    {
	      // Warn about using Maps as children
	      if (typeof newChildrenIterable.entries === 'function') {
	        var possibleMap = newChildrenIterable;
	        if (possibleMap.entries === iteratorFn) {
	          var mapsAsChildrenAddendum = '';
	          var owner = ReactCurrentOwnerRollupShim.owner || returnFiber._debugOwner;
	          if (owner && typeof owner.tag === 'number') {
	            var mapsAsChildrenOwnerName = getComponentName$6(owner);
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = '\n\nCheck the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          warning$7(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', mapsAsChildrenAddendum);
	          didWarnAboutMaps = true;
	        }
	      }

	      // First, validate keys.
	      // We'll get a different iterator later for the main pass.
	      var _newChildren = iteratorFn.call(newChildrenIterable);
	      if (_newChildren) {
	        var knownKeys = null;
	        var _step = _newChildren.next();
	        for (; !_step.done; _step = _newChildren.next()) {
	          var child = _step.value;
	          knownKeys = warnOnDuplicateKey(child, knownKeys);
	        }
	      }
	    }

	    var newChildren = iteratorFn.call(newChildrenIterable);
	    !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;

	    var resultingFirstChild = null;
	    var previousNewFiber = null;

	    var oldFiber = currentFirstChild;
	    var lastPlacedIndex = 0;
	    var newIdx = 0;
	    var nextOldFiber = null;

	    var step = newChildren.next();
	    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
	      if (oldFiber.index > newIdx) {
	        nextOldFiber = oldFiber;
	        oldFiber = null;
	      } else {
	        nextOldFiber = oldFiber.sibling;
	      }
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, priority);
	      if (newFiber === null) {
	        // TODO: This breaks on empty slots like null children. That's
	        // unfortunate because it triggers the slow path all the time. We need
	        // a better way to communicate whether this was a miss or null,
	        // boolean, undefined, etc.
	        if (!oldFiber) {
	          oldFiber = nextOldFiber;
	        }
	        break;
	      }
	      if (shouldTrackSideEffects) {
	        if (oldFiber && newFiber.alternate === null) {
	          // We matched the slot, but we didn't reuse the existing fiber, so we
	          // need to delete the existing child.
	          deleteChild(returnFiber, oldFiber);
	        }
	      }
	      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
	      if (previousNewFiber === null) {
	        // TODO: Move out of the loop. This only happens for the first run.
	        resultingFirstChild = newFiber;
	      } else {
	        // TODO: Defer siblings if we're not at the right index for this slot.
	        // I.e. if we had null values before, then we want to defer this
	        // for each null value. However, we also don't want to call updateSlot
	        // with the previous one.
	        previousNewFiber.sibling = newFiber;
	      }
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }

	    if (step.done) {
	      // We've reached the end of the new children. We can delete the rest.
	      deleteRemainingChildren(returnFiber, oldFiber);
	      return resultingFirstChild;
	    }

	    if (oldFiber === null) {
	      // If we don't have any more existing children we can choose a fast path
	      // since the rest will all be insertions.
	      for (; !step.done; newIdx++, step = newChildren.next()) {
	        var _newFiber3 = createChild(returnFiber, step.value, priority);
	        if (_newFiber3 === null) {
	          continue;
	        }
	        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          // TODO: Move out of the loop. This only happens for the first run.
	          resultingFirstChild = _newFiber3;
	        } else {
	          previousNewFiber.sibling = _newFiber3;
	        }
	        previousNewFiber = _newFiber3;
	      }
	      return resultingFirstChild;
	    }

	    // Add all children to a key map for quick lookups.
	    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

	    // Keep scanning and use the map to restore deleted items as moves.
	    for (; !step.done; newIdx++, step = newChildren.next()) {
	      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, priority);
	      if (_newFiber4 !== null) {
	        if (shouldTrackSideEffects) {
	          if (_newFiber4.alternate !== null) {
	            // The new fiber is a work in progress, but if there exists a
	            // current, that means that we reused the fiber. We need to delete
	            // it from the child list so that we don't add it to the deletion
	            // list.
	            existingChildren['delete'](_newFiber4.key === null ? newIdx : _newFiber4.key);
	          }
	        }
	        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
	        if (previousNewFiber === null) {
	          resultingFirstChild = _newFiber4;
	        } else {
	          previousNewFiber.sibling = _newFiber4;
	        }
	        previousNewFiber = _newFiber4;
	      }
	    }

	    if (shouldTrackSideEffects) {
	      // Any existing children that weren't consumed above were deleted. We need
	      // to add them to the deletion list.
	      existingChildren.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    }

	    return resultingFirstChild;
	  }

	  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, priority) {
	    // There's no need to check for keys on text nodes since we don't have a
	    // way to define them.
	    if (currentFirstChild !== null && currentFirstChild.tag === HostText$4) {
	      // We already have an existing node so let's just update it and delete
	      // the rest.
	      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
	      var existing = useFiber(currentFirstChild, priority);
	      existing.pendingProps = textContent;
	      existing['return'] = returnFiber;
	      return existing;
	    }
	    // The existing first child is not a text node so we need to create one
	    // and delete the existing ones.
	    deleteRemainingChildren(returnFiber, currentFirstChild);
	    var created = createFiberFromText$1(textContent, priority);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleElement(returnFiber, currentFirstChild, element, priority) {
	    var key = element.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.type === element.type) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, priority);
	          existing.ref = coerceRef(child, element);
	          existing.pendingProps = element.props;
	          existing['return'] = returnFiber;
	          {
	            existing._debugSource = element._source;
	            existing._debugOwner = element._owner;
	          }
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromElement$1(element, priority);
	    created.ref = coerceRef(currentFirstChild, element);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleCoroutine(returnFiber, currentFirstChild, coroutine, priority) {
	    var key = coroutine.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === CoroutineComponent$2) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, priority);
	          existing.pendingProps = coroutine;
	          existing['return'] = returnFiber;
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromCoroutine$1(coroutine, priority);
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSingleYield(returnFiber, currentFirstChild, yieldNode, priority) {
	    // There's no need to check for keys on yields since they're stateless.
	    var child = currentFirstChild;
	    if (child !== null) {
	      if (child.tag === YieldComponent$3) {
	        deleteRemainingChildren(returnFiber, child.sibling);
	        var existing = useFiber(child, priority);
	        existing.type = yieldNode.value;
	        existing['return'] = returnFiber;
	        return existing;
	      } else {
	        deleteRemainingChildren(returnFiber, child);
	      }
	    }

	    var created = createFiberFromYield$1(yieldNode, priority);
	    created.type = yieldNode.value;
	    created['return'] = returnFiber;
	    return created;
	  }

	  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, priority) {
	    var key = portal.key;
	    var child = currentFirstChild;
	    while (child !== null) {
	      // TODO: If key === null and child.key === null, then this only applies to
	      // the first item in the list.
	      if (child.key === key) {
	        if (child.tag === HostPortal$4 && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
	          deleteRemainingChildren(returnFiber, child.sibling);
	          var existing = useFiber(child, priority);
	          existing.pendingProps = portal.children || [];
	          existing['return'] = returnFiber;
	          return existing;
	        } else {
	          deleteRemainingChildren(returnFiber, child);
	          break;
	        }
	      } else {
	        deleteChild(returnFiber, child);
	      }
	      child = child.sibling;
	    }

	    var created = createFiberFromPortal$1(portal, priority);
	    created['return'] = returnFiber;
	    return created;
	  }

	  // This API will tag the children with the side-effect of the reconciliation
	  // itself. They will be added to the side-effect list as we pass through the
	  // children and the parent.
	  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, priority) {
	    // This function is not recursive.
	    // If the top level item is an array, we treat it as a set of children,
	    // not as a fragment. Nested arrays on the other hand will be treated as
	    // fragment nodes. Recursion happens at the normal flow.

	    var disableNewFiberFeatures = ReactFeatureFlags_1.disableNewFiberFeatures;

	    // Handle object types
	    var isObject = (typeof newChild === 'undefined' ? 'undefined' : _typeof(newChild)) === 'object' && newChild !== null;
	    if (isObject) {
	      // Support only the subset of return types that Stack supports. Treat
	      // everything else as empty, but log a warning.
	      if (disableNewFiberFeatures) {
	        switch (newChild.$$typeof) {
	          case ReactElementSymbol:
	            return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, priority));

	          case REACT_PORTAL_TYPE:
	            return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, priority));
	        }
	      } else {
	        switch (newChild.$$typeof) {
	          case ReactElementSymbol:
	            return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, priority));

	          case REACT_COROUTINE_TYPE:
	            return placeSingleChild(reconcileSingleCoroutine(returnFiber, currentFirstChild, newChild, priority));

	          case REACT_YIELD_TYPE:
	            return placeSingleChild(reconcileSingleYield(returnFiber, currentFirstChild, newChild, priority));

	          case REACT_PORTAL_TYPE:
	            return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, priority));
	        }
	      }
	    }

	    if (disableNewFiberFeatures) {
	      // The new child is not an element. If it's not null or false,
	      // and the return fiber is a composite component, throw an error.
	      switch (returnFiber.tag) {
	        case ClassComponent$6:
	          {
	            {
	              var instance = returnFiber.stateNode;
	              if (instance.render._isMockFunction && typeof newChild === 'undefined') {
	                // We allow auto-mocks to proceed as if they're
	                // returning null.
	                break;
	              }
	            }
	            var Component = returnFiber.type;
	            !(newChild === null || newChild === false) ? invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
	            break;
	          }
	        case FunctionalComponent$2:
	          {
	            // Composites accept elements, portals, null, or false
	            var _Component = returnFiber.type;
	            !(newChild === null || newChild === false) ? invariant(false, '%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', _Component.displayName || _Component.name || 'Component') : void 0;
	            break;
	          }
	      }
	    }

	    if (typeof newChild === 'string' || typeof newChild === 'number') {
	      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, priority));
	    }

	    if (isArray(newChild)) {
	      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, priority);
	    }

	    if (getIteratorFn_1(newChild)) {
	      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, priority);
	    }

	    if (isObject) {
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }

	    if (!disableNewFiberFeatures && typeof newChild === 'undefined') {
	      // If the new child is undefined, and the return fiber is a composite
	      // component, throw an error. If Fiber return types are disabled,
	      // we already threw above.
	      switch (returnFiber.tag) {
	        case ClassComponent$6:
	          {
	            {
	              var _instance = returnFiber.stateNode;
	              if (_instance.render._isMockFunction) {
	                // We allow auto-mocks to proceed as if they're returning null.
	                break;
	              }
	            }
	          }
	        // Intentionally fall through to the next case, which handles both
	        // functions and classes
	        // eslint-disable-next-lined no-fallthrough
	        case FunctionalComponent$2:
	          {
	            var _Component2 = returnFiber.type;
	            invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', _Component2.displayName || _Component2.name || 'Component');
	          }
	      }
	    }

	    // Remaining cases are all treated as empty.
	    return deleteRemainingChildren(returnFiber, currentFirstChild);
	  }

	  return reconcileChildFibers;
	}

	var reconcileChildFibers$1 = ChildReconciler(true, true);

	var reconcileChildFibersInPlace$1 = ChildReconciler(false, true);

	var mountChildFibersInPlace$1 = ChildReconciler(false, false);

	var cloneChildFibers$1 = function cloneChildFibers$1(current$$1, workInProgress) {
	  if (!workInProgress.child) {
	    return;
	  }
	  if (current$$1 !== null && workInProgress.child === current$$1.child) {
	    // We use workInProgress.child since that lets Flow know that it can't be
	    // null since we validated that already. However, as the line above suggests
	    // they're actually the same thing.
	    var currentChild = workInProgress.child;
	    // TODO: This used to reset the pending priority. Not sure if that is needed.
	    // workInProgress.pendingWorkPriority = current.pendingWorkPriority;
	    // TODO: The below priority used to be set to NoWork which would've
	    // dropped work. This is currently unobservable but will become
	    // observable when the first sibling has lower priority work remaining
	    // than the next sibling. At that point we should add tests that catches
	    // this.
	    var newChild = cloneFiber$2(currentChild, currentChild.pendingWorkPriority);
	    workInProgress.child = newChild;

	    newChild['return'] = workInProgress;
	    while (currentChild.sibling !== null) {
	      currentChild = currentChild.sibling;
	      newChild = newChild.sibling = cloneFiber$2(currentChild, currentChild.pendingWorkPriority);
	      newChild['return'] = workInProgress;
	    }
	    newChild.sibling = null;
	  } else {
	    // If there is no alternate, then we don't need to clone the children.
	    // If the children of the alternate fiber is a different set, then we don't
	    // need to clone. We need to reset the return fiber though since we'll
	    // traverse down into them.
	    var child = workInProgress.child;
	    while (child !== null) {
	      child['return'] = workInProgress;
	      child = child.sibling;
	    }
	  }
	};

	var ReactChildFiber = {
	  reconcileChildFibers: reconcileChildFibers$1,
	  reconcileChildFibersInPlace: reconcileChildFibersInPlace$1,
	  mountChildFibersInPlace: mountChildFibersInPlace$1,
	  cloneChildFibers: cloneChildFibers$1
	};

	var Update$1 = ReactTypeOfSideEffect.Update;

	var cacheContext$1 = ReactFiberContext.cacheContext;
	var getMaskedContext$2 = ReactFiberContext.getMaskedContext;
	var getUnmaskedContext$2 = ReactFiberContext.getUnmaskedContext;
	var isContextConsumer$1 = ReactFiberContext.isContextConsumer;

	var addUpdate$1 = ReactFiberUpdateQueue.addUpdate;
	var addReplaceUpdate$1 = ReactFiberUpdateQueue.addReplaceUpdate;
	var addForceUpdate$1 = ReactFiberUpdateQueue.addForceUpdate;
	var beginUpdateQueue$2 = ReactFiberUpdateQueue.beginUpdateQueue;

	var _require4$3 = ReactFiberContext;
	var hasContextChanged$2 = _require4$3.hasContextChanged;

	var isMounted$1 = ReactFiberTreeReflection.isMounted;

	var isArray$1 = Array.isArray;

	{
	  var _require6$1 = ReactDebugFiberPerf_1,
	      startPhaseTimer$1 = _require6$1.startPhaseTimer,
	      stopPhaseTimer$1 = _require6$1.stopPhaseTimer;

	  var warning$8 = warning;
	  var warnOnInvalidCallback = function warnOnInvalidCallback(callback, callerName) {
	    warning$8(callback === null || typeof callback === 'function', '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
	  };
	}

	var ReactFiberClassComponent = function ReactFiberClassComponent(scheduleUpdate, getPriorityContext, memoizeProps, memoizeState) {
	  // Class component state updater
	  var updater = {
	    isMounted: isMounted$1,
	    enqueueSetState: function enqueueSetState(instance, partialState, callback) {
	      var fiber = ReactInstanceMap_1.get(instance);
	      var priorityLevel = getPriorityContext();
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'setState');
	      }
	      addUpdate$1(fiber, partialState, callback, priorityLevel);
	      scheduleUpdate(fiber, priorityLevel);
	    },
	    enqueueReplaceState: function enqueueReplaceState(instance, state, callback) {
	      var fiber = ReactInstanceMap_1.get(instance);
	      var priorityLevel = getPriorityContext();
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'replaceState');
	      }
	      addReplaceUpdate$1(fiber, state, callback, priorityLevel);
	      scheduleUpdate(fiber, priorityLevel);
	    },
	    enqueueForceUpdate: function enqueueForceUpdate(instance, callback) {
	      var fiber = ReactInstanceMap_1.get(instance);
	      var priorityLevel = getPriorityContext();
	      callback = callback === undefined ? null : callback;
	      {
	        warnOnInvalidCallback(callback, 'forceUpdate');
	      }
	      addForceUpdate$1(fiber, callback, priorityLevel);
	      scheduleUpdate(fiber, priorityLevel);
	    }
	  };

	  function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
	    if (oldProps === null || workInProgress.updateQueue !== null && workInProgress.updateQueue.hasForceUpdate) {
	      // If the workInProgress already has an Update effect, return true
	      return true;
	    }

	    var instance = workInProgress.stateNode;
	    if (typeof instance.shouldComponentUpdate === 'function') {
	      {
	        startPhaseTimer$1(workInProgress, 'shouldComponentUpdate');
	      }
	      var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
	      {
	        stopPhaseTimer$1();
	      }

	      {
	        warning$8(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName_1(workInProgress) || 'Unknown');
	      }

	      return shouldUpdate;
	    }

	    var type = workInProgress.type;
	    if (type.prototype && type.prototype.isPureReactComponent) {
	      return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
	    }

	    return true;
	  }

	  function checkClassInstance(workInProgress) {
	    var instance = workInProgress.stateNode;
	    {
	      var name = getComponentName_1(workInProgress);
	      var renderPresent = instance.render;
	      warning$8(renderPresent, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
	      var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
	      warning$8(noGetInitialStateOnES6, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
	      var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
	      warning$8(noGetDefaultPropsOnES6, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
	      var noInstancePropTypes = !instance.propTypes;
	      warning$8(noInstancePropTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
	      var noInstanceContextTypes = !instance.contextTypes;
	      warning$8(noInstanceContextTypes, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
	      var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
	      warning$8(noComponentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
	      var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
	      warning$8(noComponentDidUnmount, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
	      var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
	      warning$8(noComponentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
	      var hasMutatedProps = instance.props !== workInProgress.pendingProps;
	      warning$8(instance.props === undefined || !hasMutatedProps, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
	    }

	    var state = instance.state;
	    if (state && ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' || isArray$1(state))) {
	      invariant(false, '%s.state: must be set to an object or null', getComponentName_1(workInProgress));
	    }
	    if (typeof instance.getChildContext === 'function') {
	      !(_typeof(workInProgress.type.childContextTypes) === 'object') ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', getComponentName_1(workInProgress)) : void 0;
	    }
	  }

	  function resetInputPointers(workInProgress, instance) {
	    instance.props = workInProgress.memoizedProps;
	    instance.state = workInProgress.memoizedState;
	  }

	  function adoptClassInstance(workInProgress, instance) {
	    instance.updater = updater;
	    workInProgress.stateNode = instance;
	    // The instance needs access to the fiber so that it can schedule updates
	    ReactInstanceMap_1.set(instance, workInProgress);
	  }

	  function constructClassInstance(workInProgress) {
	    var ctor = workInProgress.type;
	    var props = workInProgress.pendingProps;
	    var unmaskedContext = getUnmaskedContext$2(workInProgress);
	    var needsContext = isContextConsumer$1(workInProgress);
	    var context = needsContext ? getMaskedContext$2(workInProgress, unmaskedContext) : emptyObject;
	    var instance = new ctor(props, context);
	    adoptClassInstance(workInProgress, instance);
	    checkClassInstance(workInProgress);

	    // Cache unmasked context so we can avoid recreating masked context unless necessary.
	    // ReactFiberContext usually updates this cache but can't for newly-created instances.
	    if (needsContext) {
	      cacheContext$1(workInProgress, unmaskedContext, context);
	    }

	    return instance;
	  }

	  // Invokes the mount life-cycles on a previously never rendered instance.
	  function mountClassInstance(workInProgress, priorityLevel) {
	    var instance = workInProgress.stateNode;
	    var state = instance.state || null;

	    var props = workInProgress.pendingProps;
	    !props ? invariant(false, 'There must be pending props for an initial mount. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    var unmaskedContext = getUnmaskedContext$2(workInProgress);

	    instance.props = props;
	    instance.state = state;
	    instance.refs = emptyObject;
	    instance.context = getMaskedContext$2(workInProgress, unmaskedContext);

	    if (typeof instance.componentWillMount === 'function') {
	      {
	        startPhaseTimer$1(workInProgress, 'componentWillMount');
	      }
	      instance.componentWillMount();
	      {
	        stopPhaseTimer$1();
	      }
	      // If we had additional state updates during this life-cycle, let's
	      // process them now.
	      var updateQueue = workInProgress.updateQueue;
	      if (updateQueue !== null) {
	        instance.state = beginUpdateQueue$2(workInProgress, updateQueue, instance, state, props, priorityLevel);
	      }
	    }
	    if (typeof instance.componentDidMount === 'function') {
	      workInProgress.effectTag |= Update$1;
	    }
	  }

	  // Called on a preexisting class instance. Returns false if a resumed render
	  // could be reused.
	  function resumeMountClassInstance(workInProgress, priorityLevel) {
	    var instance = workInProgress.stateNode;
	    resetInputPointers(workInProgress, instance);

	    var newState = workInProgress.memoizedState;
	    var newProps = workInProgress.pendingProps;
	    if (!newProps) {
	      // If there isn't any new props, then we'll reuse the memoized props.
	      // This could be from already completed work.
	      newProps = workInProgress.memoizedProps;
	      !(newProps != null) ? invariant(false, 'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    }
	    var newUnmaskedContext = getUnmaskedContext$2(workInProgress);
	    var newContext = getMaskedContext$2(workInProgress, newUnmaskedContext);

	    // TODO: Should we deal with a setState that happened after the last
	    // componentWillMount and before this componentWillMount? Probably
	    // unsupported anyway.

	    if (!checkShouldComponentUpdate(workInProgress, workInProgress.memoizedProps, newProps, workInProgress.memoizedState, newState, newContext)) {
	      // Update the existing instance's state, props, and context pointers even
	      // though we're bailing out.
	      instance.props = newProps;
	      instance.state = newState;
	      instance.context = newContext;
	      return false;
	    }

	    // If we didn't bail out we need to construct a new instance. We don't
	    // want to reuse one that failed to fully mount.
	    var newInstance = constructClassInstance(workInProgress);
	    newInstance.props = newProps;
	    newInstance.state = newState = newInstance.state || null;
	    newInstance.context = newContext;

	    if (typeof newInstance.componentWillMount === 'function') {
	      {
	        startPhaseTimer$1(workInProgress, 'componentWillMount');
	      }
	      newInstance.componentWillMount();
	      {
	        stopPhaseTimer$1();
	      }
	    }
	    // If we had additional state updates, process them now.
	    // They may be from componentWillMount() or from error boundary's setState()
	    // during initial mounting.
	    var newUpdateQueue = workInProgress.updateQueue;
	    if (newUpdateQueue !== null) {
	      newInstance.state = beginUpdateQueue$2(workInProgress, newUpdateQueue, newInstance, newState, newProps, priorityLevel);
	    }
	    if (typeof instance.componentDidMount === 'function') {
	      workInProgress.effectTag |= Update$1;
	    }
	    return true;
	  }

	  // Invokes the update life-cycles and returns false if it shouldn't rerender.
	  function updateClassInstance(current$$1, workInProgress, priorityLevel) {
	    var instance = workInProgress.stateNode;
	    resetInputPointers(workInProgress, instance);

	    var oldProps = workInProgress.memoizedProps;
	    var newProps = workInProgress.pendingProps;
	    if (!newProps) {
	      // If there aren't any new props, then we'll reuse the memoized props.
	      // This could be from already completed work.
	      newProps = oldProps;
	      !(newProps != null) ? invariant(false, 'There should always be pending or memoized props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    }
	    var oldContext = instance.context;
	    var newUnmaskedContext = getUnmaskedContext$2(workInProgress);
	    var newContext = getMaskedContext$2(workInProgress, newUnmaskedContext);

	    // Note: During these life-cycles, instance.props/instance.state are what
	    // ever the previously attempted to render - not the "current". However,
	    // during componentDidUpdate we pass the "current" props.

	    if (oldProps !== newProps || oldContext !== newContext) {
	      if (typeof instance.componentWillReceiveProps === 'function') {
	        {
	          startPhaseTimer$1(workInProgress, 'componentWillReceiveProps');
	        }
	        instance.componentWillReceiveProps(newProps, newContext);
	        {
	          stopPhaseTimer$1();
	        }

	        if (instance.state !== workInProgress.memoizedState) {
	          {
	            warning$8(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName_1(workInProgress));
	          }
	          updater.enqueueReplaceState(instance, instance.state, null);
	        }
	      }
	    }

	    // Compute the next state using the memoized state and the update queue.
	    var updateQueue = workInProgress.updateQueue;
	    var oldState = workInProgress.memoizedState;
	    // TODO: Previous state can be null.
	    var newState = void 0;
	    if (updateQueue !== null) {
	      newState = beginUpdateQueue$2(workInProgress, updateQueue, instance, oldState, newProps, priorityLevel);
	    } else {
	      newState = oldState;
	    }

	    if (oldProps === newProps && oldState === newState && !hasContextChanged$2() && !(updateQueue !== null && updateQueue.hasForceUpdate)) {
	      // If an update was already in progress, we should schedule an Update
	      // effect even though we're bailing out, so that cWU/cDU are called.
	      if (typeof instance.componentDidUpdate === 'function') {
	        if (oldProps !== current$$1.memoizedProps || oldState !== current$$1.memoizedState) {
	          workInProgress.effectTag |= Update$1;
	        }
	      }
	      return false;
	    }

	    var shouldUpdate = checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

	    if (shouldUpdate) {
	      if (typeof instance.componentWillUpdate === 'function') {
	        {
	          startPhaseTimer$1(workInProgress, 'componentWillUpdate');
	        }
	        instance.componentWillUpdate(newProps, newState, newContext);
	        {
	          stopPhaseTimer$1();
	        }
	      }
	      if (typeof instance.componentDidUpdate === 'function') {
	        workInProgress.effectTag |= Update$1;
	      }
	    } else {
	      // If an update was already in progress, we should schedule an Update
	      // effect even though we're bailing out, so that cWU/cDU are called.
	      if (typeof instance.componentDidUpdate === 'function') {
	        if (oldProps !== current$$1.memoizedProps || oldState !== current$$1.memoizedState) {
	          workInProgress.effectTag |= Update$1;
	        }
	      }

	      // If shouldComponentUpdate returned false, we should still update the
	      // memoized props/state to indicate that this work can be reused.
	      memoizeProps(workInProgress, newProps);
	      memoizeState(workInProgress, newState);
	    }

	    // Update the existing instance's state, props, and context pointers even
	    // if shouldComponentUpdate returns false.
	    instance.props = newProps;
	    instance.state = newState;
	    instance.context = newContext;

	    return shouldUpdate;
	  }

	  return {
	    adoptClassInstance: adoptClassInstance,
	    constructClassInstance: constructClassInstance,
	    mountClassInstance: mountClassInstance,
	    resumeMountClassInstance: resumeMountClassInstance,
	    updateClassInstance: updateClassInstance
	  };
	};

	var mountChildFibersInPlace = ReactChildFiber.mountChildFibersInPlace;
	var reconcileChildFibers = ReactChildFiber.reconcileChildFibers;
	var reconcileChildFibersInPlace = ReactChildFiber.reconcileChildFibersInPlace;
	var cloneChildFibers = ReactChildFiber.cloneChildFibers;

	var beginUpdateQueue$1 = ReactFiberUpdateQueue.beginUpdateQueue;

	var getMaskedContext$1 = ReactFiberContext.getMaskedContext;
	var getUnmaskedContext$1 = ReactFiberContext.getUnmaskedContext;
	var hasContextChanged$1 = ReactFiberContext.hasContextChanged;
	var pushContextProvider$1 = ReactFiberContext.pushContextProvider;
	var pushTopLevelContextObject$1 = ReactFiberContext.pushTopLevelContextObject;
	var invalidateContextProvider$1 = ReactFiberContext.invalidateContextProvider;

	var IndeterminateComponent$2 = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent$1 = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$5 = ReactTypeOfWork.ClassComponent;
	var HostRoot$5 = ReactTypeOfWork.HostRoot;
	var HostComponent$5 = ReactTypeOfWork.HostComponent;
	var HostText$3 = ReactTypeOfWork.HostText;
	var HostPortal$3 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$1 = ReactTypeOfWork.CoroutineComponent;
	var CoroutineHandlerPhase = ReactTypeOfWork.CoroutineHandlerPhase;
	var YieldComponent$2 = ReactTypeOfWork.YieldComponent;
	var Fragment$2 = ReactTypeOfWork.Fragment;

	var NoWork$3 = ReactPriorityLevel.NoWork;
	var OffscreenPriority$1 = ReactPriorityLevel.OffscreenPriority;

	var Placement$2 = ReactTypeOfSideEffect.Placement;
	var ContentReset$1 = ReactTypeOfSideEffect.ContentReset;
	var Err$1 = ReactTypeOfSideEffect.Err;
	var Ref$1 = ReactTypeOfSideEffect.Ref;

	{
	  var ReactDebugCurrentFiber$4 = ReactDebugCurrentFiber_1;

	  var _require6 = ReactDebugFiberPerf_1,
	      cancelWorkTimer = _require6.cancelWorkTimer;

	  var warning$6 = warning;

	  var warnedAboutStatelessRefs = {};
	}

	var ReactFiberBeginWork = function ReactFiberBeginWork(config, hostContext, scheduleUpdate, getPriorityContext) {
	  var shouldSetTextContent = config.shouldSetTextContent,
	      useSyncScheduling = config.useSyncScheduling,
	      shouldDeprioritizeSubtree = config.shouldDeprioritizeSubtree;
	  var pushHostContext = hostContext.pushHostContext,
	      pushHostContainer = hostContext.pushHostContainer;

	  var _ReactFiberClassCompo = ReactFiberClassComponent(scheduleUpdate, getPriorityContext, memoizeProps, memoizeState),
	      adoptClassInstance = _ReactFiberClassCompo.adoptClassInstance,
	      constructClassInstance = _ReactFiberClassCompo.constructClassInstance,
	      mountClassInstance = _ReactFiberClassCompo.mountClassInstance,
	      resumeMountClassInstance = _ReactFiberClassCompo.resumeMountClassInstance,
	      updateClassInstance = _ReactFiberClassCompo.updateClassInstance;

	  function markChildAsProgressed(current$$1, workInProgress, priorityLevel) {
	    // We now have clones. Let's store them as the currently progressed work.
	    workInProgress.progressedChild = workInProgress.child;
	    workInProgress.progressedPriority = priorityLevel;
	    if (current$$1 !== null) {
	      // We also store it on the current. When the alternate swaps in we can
	      // continue from this point.
	      current$$1.progressedChild = workInProgress.progressedChild;
	      current$$1.progressedPriority = workInProgress.progressedPriority;
	    }
	  }

	  function clearDeletions(workInProgress) {
	    workInProgress.progressedFirstDeletion = workInProgress.progressedLastDeletion = null;
	  }

	  function transferDeletions(workInProgress) {
	    // Any deletions get added first into the effect list.
	    workInProgress.firstEffect = workInProgress.progressedFirstDeletion;
	    workInProgress.lastEffect = workInProgress.progressedLastDeletion;
	  }

	  function reconcileChildren(current$$1, workInProgress, nextChildren) {
	    var priorityLevel = workInProgress.pendingWorkPriority;
	    reconcileChildrenAtPriority(current$$1, workInProgress, nextChildren, priorityLevel);
	  }

	  function reconcileChildrenAtPriority(current$$1, workInProgress, nextChildren, priorityLevel) {
	    // At this point any memoization is no longer valid since we'll have changed
	    // the children.
	    workInProgress.memoizedProps = null;
	    if (current$$1 === null) {
	      // If this is a fresh new component that hasn't been rendered yet, we
	      // won't update its child set by applying minimal side-effects. Instead,
	      // we will add them all to the child before it gets rendered. That means
	      // we can optimize this reconciliation pass by not tracking side-effects.
	      workInProgress.child = mountChildFibersInPlace(workInProgress, workInProgress.child, nextChildren, priorityLevel);
	    } else if (current$$1.child === workInProgress.child) {
	      // If the current child is the same as the work in progress, it means that
	      // we haven't yet started any work on these children. Therefore, we use
	      // the clone algorithm to create a copy of all the current children.

	      // If we had any progressed work already, that is invalid at this point so
	      // let's throw it out.
	      clearDeletions(workInProgress);

	      workInProgress.child = reconcileChildFibers(workInProgress, workInProgress.child, nextChildren, priorityLevel);

	      transferDeletions(workInProgress);
	    } else {
	      // If, on the other hand, it is already using a clone, that means we've
	      // already begun some work on this tree and we can continue where we left
	      // off by reconciling against the existing children.
	      workInProgress.child = reconcileChildFibersInPlace(workInProgress, workInProgress.child, nextChildren, priorityLevel);

	      transferDeletions(workInProgress);
	    }
	    markChildAsProgressed(current$$1, workInProgress, priorityLevel);
	  }

	  function updateFragment(current$$1, workInProgress) {
	    var nextChildren = workInProgress.pendingProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextChildren === null) {
	        nextChildren = workInProgress.memoizedProps;
	      }
	    } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
	      return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	    }
	    reconcileChildren(current$$1, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextChildren);
	    return workInProgress.child;
	  }

	  function markRef(current$$1, workInProgress) {
	    var ref = workInProgress.ref;
	    if (ref !== null && (!current$$1 || current$$1.ref !== ref)) {
	      // Schedule a Ref effect
	      workInProgress.effectTag |= Ref$1;
	    }
	  }

	  function updateFunctionalComponent(current$$1, workInProgress) {
	    var fn = workInProgress.type;
	    var nextProps = workInProgress.pendingProps;

	    var memoizedProps = workInProgress.memoizedProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextProps === null) {
	        nextProps = memoizedProps;
	      }
	    } else {
	      if (nextProps === null || memoizedProps === nextProps) {
	        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	      }
	      // TODO: Disable this before release, since it is not part of the public API
	      // I use this for testing to compare the relative overhead of classes.
	      if (typeof fn.shouldComponentUpdate === 'function' && !fn.shouldComponentUpdate(memoizedProps, nextProps)) {
	        // Memoize props even if shouldComponentUpdate returns false
	        memoizeProps(workInProgress, nextProps);
	        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	      }
	    }

	    var unmaskedContext = getUnmaskedContext$1(workInProgress);
	    var context = getMaskedContext$1(workInProgress, unmaskedContext);

	    var nextChildren;

	    {
	      ReactCurrentOwnerRollupShim.current = workInProgress;
	      ReactDebugCurrentFiber$4.phase = 'render';
	      nextChildren = fn(nextProps, context);
	      ReactDebugCurrentFiber$4.phase = null;
	    }
	    reconcileChildren(current$$1, workInProgress, nextChildren);
	    memoizeProps(workInProgress, nextProps);
	    return workInProgress.child;
	  }

	  function updateClassComponent(current$$1, workInProgress, priorityLevel) {
	    // Push context providers early to prevent context stack mismatches.
	    // During mounting we don't know the child context yet as the instance doesn't exist.
	    // We will invalidate the child context in finishClassComponent() right after rendering.
	    var hasContext = pushContextProvider$1(workInProgress);

	    var shouldUpdate = void 0;
	    if (current$$1 === null) {
	      if (!workInProgress.stateNode) {
	        // In the initial pass we might need to construct the instance.
	        constructClassInstance(workInProgress);
	        mountClassInstance(workInProgress, priorityLevel);
	        shouldUpdate = true;
	      } else {
	        // In a resume, we'll already have an instance we can reuse.
	        shouldUpdate = resumeMountClassInstance(workInProgress, priorityLevel);
	      }
	    } else {
	      shouldUpdate = updateClassInstance(current$$1, workInProgress, priorityLevel);
	    }
	    return finishClassComponent(current$$1, workInProgress, shouldUpdate, hasContext);
	  }

	  function finishClassComponent(current$$1, workInProgress, shouldUpdate, hasContext) {
	    // Refs should update even if shouldComponentUpdate returns false
	    markRef(current$$1, workInProgress);

	    if (!shouldUpdate) {
	      return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	    }

	    var instance = workInProgress.stateNode;

	    // Rerender
	    ReactCurrentOwnerRollupShim.current = workInProgress;
	    var nextChildren = void 0;
	    {
	      ReactDebugCurrentFiber$4.phase = 'render';
	      nextChildren = instance.render();
	      ReactDebugCurrentFiber$4.phase = null;
	    }
	    reconcileChildren(current$$1, workInProgress, nextChildren);
	    // Memoize props and state using the values we just used to render.
	    // TODO: Restructure so we never read values from the instance.
	    memoizeState(workInProgress, instance.state);
	    memoizeProps(workInProgress, instance.props);

	    // The context might have changed so we need to recalculate it.
	    if (hasContext) {
	      invalidateContextProvider$1(workInProgress);
	    }
	    return workInProgress.child;
	  }

	  function updateHostRoot(current$$1, workInProgress, priorityLevel) {
	    var root = workInProgress.stateNode;
	    if (root.pendingContext) {
	      pushTopLevelContextObject$1(workInProgress, root.pendingContext, root.pendingContext !== root.context);
	    } else if (root.context) {
	      // Should always be set
	      pushTopLevelContextObject$1(workInProgress, root.context, false);
	    }

	    pushHostContainer(workInProgress, root.containerInfo);

	    var updateQueue = workInProgress.updateQueue;
	    if (updateQueue !== null) {
	      var prevState = workInProgress.memoizedState;
	      var state = beginUpdateQueue$1(workInProgress, updateQueue, null, prevState, null, priorityLevel);
	      if (prevState === state) {
	        // If the state is the same as before, that's a bailout because we had
	        // no work matching this priority.
	        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	      }
	      var element = state.element;
	      reconcileChildren(current$$1, workInProgress, element);
	      memoizeState(workInProgress, state);
	      return workInProgress.child;
	    }
	    // If there is no update queue, that's a bailout because the root has no props.
	    return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	  }

	  function updateHostComponent(current$$1, workInProgress) {
	    pushHostContext(workInProgress);

	    var nextProps = workInProgress.pendingProps;
	    var prevProps = current$$1 !== null ? current$$1.memoizedProps : null;
	    var memoizedProps = workInProgress.memoizedProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextProps === null) {
	        nextProps = memoizedProps;
	        !(nextProps !== null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextProps === null || memoizedProps === nextProps) {
	      if (!useSyncScheduling && shouldDeprioritizeSubtree(workInProgress.type, memoizedProps) && workInProgress.pendingWorkPriority !== OffscreenPriority$1) {
	        // This subtree still has work, but it should be deprioritized so we need
	        // to bail out and not do any work yet.
	        // TODO: It would be better if this tree got its correct priority set
	        // during scheduleUpdate instead because otherwise we'll start a higher
	        // priority reconciliation first before we can get down here. However,
	        // that is a bit tricky since workInProgress and current can have
	        // different "hidden" settings.
	        var child = workInProgress.progressedChild;
	        while (child !== null) {
	          // To ensure that this subtree gets its priority reset, the children
	          // need to be reset.
	          child.pendingWorkPriority = OffscreenPriority$1;
	          child = child.sibling;
	        }
	        return null;
	      }
	      return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	    }

	    var nextChildren = nextProps.children;
	    var isDirectTextChild = shouldSetTextContent(nextProps);

	    if (isDirectTextChild) {
	      // We special case a direct text child of a host node. This is a common
	      // case. We won't handle it as a reified child. We will instead handle
	      // this in the host environment that also have access to this prop. That
	      // avoids allocating another HostText fiber and traversing it.
	      nextChildren = null;
	    } else if (prevProps && shouldSetTextContent(prevProps)) {
	      // If we're switching from a direct text child to a normal child, or to
	      // empty, we need to schedule the text content to be reset.
	      workInProgress.effectTag |= ContentReset$1;
	    }

	    markRef(current$$1, workInProgress);

	    if (!useSyncScheduling && shouldDeprioritizeSubtree(workInProgress.type, nextProps) && workInProgress.pendingWorkPriority !== OffscreenPriority$1) {
	      // If this host component is hidden, we can bail out on the children.
	      // We'll rerender the children later at the lower priority.

	      // It is unfortunate that we have to do the reconciliation of these
	      // children already since that will add them to the tree even though
	      // they are not actually done yet. If this is a large set it is also
	      // confusing that this takes time to do right now instead of later.

	      if (workInProgress.progressedPriority === OffscreenPriority$1) {
	        // If we already made some progress on the offscreen priority before,
	        // then we should continue from where we left off.
	        workInProgress.child = workInProgress.progressedChild;
	      }

	      // Reconcile the children and stash them for later work.
	      reconcileChildrenAtPriority(current$$1, workInProgress, nextChildren, OffscreenPriority$1);
	      memoizeProps(workInProgress, nextProps);
	      workInProgress.child = current$$1 !== null ? current$$1.child : null;

	      if (current$$1 === null) {
	        // If this doesn't have a current we won't track it for placement
	        // effects. However, when we come back around to this we have already
	        // inserted the parent which means that we'll infact need to make this a
	        // placement.
	        // TODO: There has to be a better solution to this problem.
	        var _child = workInProgress.progressedChild;
	        while (_child !== null) {
	          _child.effectTag = Placement$2;
	          _child = _child.sibling;
	        }
	      }

	      // Abort and don't process children yet.
	      return null;
	    } else {
	      reconcileChildren(current$$1, workInProgress, nextChildren);
	      memoizeProps(workInProgress, nextProps);
	      return workInProgress.child;
	    }
	  }

	  function updateHostText(current$$1, workInProgress) {
	    var nextProps = workInProgress.pendingProps;
	    if (nextProps === null) {
	      nextProps = workInProgress.memoizedProps;
	    }
	    memoizeProps(workInProgress, nextProps);
	    // Nothing to do here. This is terminal. We'll do the completion step
	    // immediately after.
	    return null;
	  }

	  function mountIndeterminateComponent(current$$1, workInProgress, priorityLevel) {
	    !(current$$1 === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    var fn = workInProgress.type;
	    var props = workInProgress.pendingProps;
	    var unmaskedContext = getUnmaskedContext$1(workInProgress);
	    var context = getMaskedContext$1(workInProgress, unmaskedContext);

	    var value;

	    {
	      ReactCurrentOwnerRollupShim.current = workInProgress;
	      value = fn(props, context);
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && typeof value.render === 'function') {
	      // Proceed under the assumption that this is a class instance
	      workInProgress.tag = ClassComponent$5;

	      // Push context providers early to prevent context stack mismatches.
	      // During mounting we don't know the child context yet as the instance doesn't exist.
	      // We will invalidate the child context in finishClassComponent() right after rendering.
	      var hasContext = pushContextProvider$1(workInProgress);
	      adoptClassInstance(workInProgress, value);
	      mountClassInstance(workInProgress, priorityLevel);
	      return finishClassComponent(current$$1, workInProgress, true, hasContext);
	    } else {
	      // Proceed under the assumption that this is a functional component
	      workInProgress.tag = FunctionalComponent$1;
	      {
	        var Component = workInProgress.type;

	        if (Component) {
	          warning$6(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component');
	        }
	        if (workInProgress.ref !== null) {
	          var info = '';
	          var ownerName = ReactDebugCurrentFiber$4.getCurrentFiberOwnerName();
	          if (ownerName) {
	            info += '\n\nCheck the render method of `' + ownerName + '`.';
	          }

	          var warningKey = ownerName || workInProgress._debugID || '';
	          var debugSource = workInProgress._debugSource;
	          if (debugSource) {
	            warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
	          }
	          if (!warnedAboutStatelessRefs[warningKey]) {
	            warnedAboutStatelessRefs[warningKey] = true;
	            warning$6(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber$4.getCurrentFiberStackAddendum());
	          }
	        }
	      }
	      reconcileChildren(current$$1, workInProgress, value);
	      memoizeProps(workInProgress, props);
	      return workInProgress.child;
	    }
	  }

	  function updateCoroutineComponent(current$$1, workInProgress) {
	    var nextCoroutine = workInProgress.pendingProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextCoroutine === null) {
	        nextCoroutine = current$$1 && current$$1.memoizedProps;
	        !(nextCoroutine !== null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextCoroutine === null || workInProgress.memoizedProps === nextCoroutine) {
	      nextCoroutine = workInProgress.memoizedProps;
	      // TODO: When bailing out, we might need to return the stateNode instead
	      // of the child. To check it for work.
	      // return bailoutOnAlreadyFinishedWork(current, workInProgress);
	    }

	    var nextChildren = nextCoroutine.children;
	    var priorityLevel = workInProgress.pendingWorkPriority;

	    // The following is a fork of reconcileChildrenAtPriority but using
	    // stateNode to store the child.

	    // At this point any memoization is no longer valid since we'll have changed
	    // the children.
	    workInProgress.memoizedProps = null;
	    if (current$$1 === null) {
	      workInProgress.stateNode = mountChildFibersInPlace(workInProgress, workInProgress.stateNode, nextChildren, priorityLevel);
	    } else if (current$$1.child === workInProgress.child) {
	      clearDeletions(workInProgress);

	      workInProgress.stateNode = reconcileChildFibers(workInProgress, workInProgress.stateNode, nextChildren, priorityLevel);

	      transferDeletions(workInProgress);
	    } else {
	      workInProgress.stateNode = reconcileChildFibersInPlace(workInProgress, workInProgress.stateNode, nextChildren, priorityLevel);

	      transferDeletions(workInProgress);
	    }

	    memoizeProps(workInProgress, nextCoroutine);
	    // This doesn't take arbitrary time so we could synchronously just begin
	    // eagerly do the work of workInProgress.child as an optimization.
	    return workInProgress.stateNode;
	  }

	  function updatePortalComponent(current$$1, workInProgress) {
	    pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	    var priorityLevel = workInProgress.pendingWorkPriority;
	    var nextChildren = workInProgress.pendingProps;
	    if (hasContextChanged$1()) {
	      // Normally we can bail out on props equality but if context has changed
	      // we don't do the bailout and we have to reuse existing props instead.
	      if (nextChildren === null) {
	        nextChildren = current$$1 && current$$1.memoizedProps;
	        !(nextChildren != null) ? invariant(false, 'We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	      }
	    } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
	      return bailoutOnAlreadyFinishedWork(current$$1, workInProgress);
	    }

	    if (current$$1 === null) {
	      // Portals are special because we don't append the children during mount
	      // but at commit. Therefore we need to track insertions which the normal
	      // flow doesn't do during mount. This doesn't happen at the root because
	      // the root always starts with a "current" with a null child.
	      // TODO: Consider unifying this with how the root works.
	      workInProgress.child = reconcileChildFibersInPlace(workInProgress, workInProgress.child, nextChildren, priorityLevel);
	      memoizeProps(workInProgress, nextChildren);
	      markChildAsProgressed(current$$1, workInProgress, priorityLevel);
	    } else {
	      reconcileChildren(current$$1, workInProgress, nextChildren);
	      memoizeProps(workInProgress, nextChildren);
	    }
	    return workInProgress.child;
	  }

	  /*
	  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
	    let child = firstChild;
	    do {
	      // Ensure that the first and last effect of the parent corresponds
	      // to the children's first and last effect.
	      if (!returnFiber.firstEffect) {
	        returnFiber.firstEffect = child.firstEffect;
	      }
	      if (child.lastEffect) {
	        if (returnFiber.lastEffect) {
	          returnFiber.lastEffect.nextEffect = child.firstEffect;
	        }
	        returnFiber.lastEffect = child.lastEffect;
	      }
	    } while (child = child.sibling);
	  }
	  */

	  function bailoutOnAlreadyFinishedWork(current$$1, workInProgress) {
	    {
	      cancelWorkTimer(workInProgress);
	    }

	    var priorityLevel = workInProgress.pendingWorkPriority;
	    // TODO: We should ideally be able to bail out early if the children have no
	    // more work to do. However, since we don't have a separation of this
	    // Fiber's priority and its children yet - we don't know without doing lots
	    // of the same work we do anyway. Once we have that separation we can just
	    // bail out here if the children has no more work at this priority level.
	    // if (workInProgress.priorityOfChildren <= priorityLevel) {
	    //   // If there are side-effects in these children that have not yet been
	    //   // committed we need to ensure that they get properly transferred up.
	    //   if (current && current.child !== workInProgress.child) {
	    //     reuseChildrenEffects(workInProgress, child);
	    //   }
	    //   return null;
	    // }

	    if (current$$1 && workInProgress.child === current$$1.child) {
	      // If we had any progressed work already, that is invalid at this point so
	      // let's throw it out.
	      clearDeletions(workInProgress);
	    }

	    cloneChildFibers(current$$1, workInProgress);
	    markChildAsProgressed(current$$1, workInProgress, priorityLevel);
	    return workInProgress.child;
	  }

	  function bailoutOnLowPriority(current$$1, workInProgress) {
	    {
	      cancelWorkTimer(workInProgress);
	    }

	    // TODO: Handle HostComponent tags here as well and call pushHostContext()?
	    // See PR 8590 discussion for context
	    switch (workInProgress.tag) {
	      case ClassComponent$5:
	        pushContextProvider$1(workInProgress);
	        break;
	      case HostPortal$3:
	        pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	        break;
	    }
	    // TODO: What if this is currently in progress?
	    // How can that happen? How is this not being cloned?
	    return null;
	  }

	  function memoizeProps(workInProgress, nextProps) {
	    workInProgress.memoizedProps = nextProps;
	    // Reset the pending props
	    workInProgress.pendingProps = null;
	  }

	  function memoizeState(workInProgress, nextState) {
	    workInProgress.memoizedState = nextState;
	    // Don't reset the updateQueue, in case there are pending updates. Resetting
	    // is handled by beginUpdateQueue.
	  }

	  function beginWork(current$$1, workInProgress, priorityLevel) {
	    if (workInProgress.pendingWorkPriority === NoWork$3 || workInProgress.pendingWorkPriority > priorityLevel) {
	      return bailoutOnLowPriority(current$$1, workInProgress);
	    }

	    {
	      ReactDebugCurrentFiber$4.current = workInProgress;
	    }

	    // If we don't bail out, we're going be recomputing our children so we need
	    // to drop our effect list.
	    workInProgress.firstEffect = null;
	    workInProgress.lastEffect = null;

	    if (workInProgress.progressedPriority === priorityLevel) {
	      // If we have progressed work on this priority level already, we can
	      // proceed this that as the child.
	      workInProgress.child = workInProgress.progressedChild;
	    }

	    switch (workInProgress.tag) {
	      case IndeterminateComponent$2:
	        return mountIndeterminateComponent(current$$1, workInProgress, priorityLevel);
	      case FunctionalComponent$1:
	        return updateFunctionalComponent(current$$1, workInProgress);
	      case ClassComponent$5:
	        return updateClassComponent(current$$1, workInProgress, priorityLevel);
	      case HostRoot$5:
	        return updateHostRoot(current$$1, workInProgress, priorityLevel);
	      case HostComponent$5:
	        return updateHostComponent(current$$1, workInProgress);
	      case HostText$3:
	        return updateHostText(current$$1, workInProgress);
	      case CoroutineHandlerPhase:
	        // This is a restart. Reset the tag to the initial phase.
	        workInProgress.tag = CoroutineComponent$1;
	      // Intentionally fall through since this is now the same.
	      case CoroutineComponent$1:
	        return updateCoroutineComponent(current$$1, workInProgress);
	      case YieldComponent$2:
	        // A yield component is just a placeholder, we can just run through the
	        // next one immediately.
	        return null;
	      case HostPortal$3:
	        return updatePortalComponent(current$$1, workInProgress);
	      case Fragment$2:
	        return updateFragment(current$$1, workInProgress);
	      default:
	        invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  function beginFailedWork(current$$1, workInProgress, priorityLevel) {
	    !(workInProgress.tag === ClassComponent$5 || workInProgress.tag === HostRoot$5) ? invariant(false, 'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    // Add an error effect so we can handle the error during the commit phase
	    workInProgress.effectTag |= Err$1;

	    if (workInProgress.pendingWorkPriority === NoWork$3 || workInProgress.pendingWorkPriority > priorityLevel) {
	      return bailoutOnLowPriority(current$$1, workInProgress);
	    }

	    // If we don't bail out, we're going be recomputing our children so we need
	    // to drop our effect list.
	    workInProgress.firstEffect = null;
	    workInProgress.lastEffect = null;

	    // Unmount the current children as if the component rendered null
	    var nextChildren = null;
	    reconcileChildren(current$$1, workInProgress, nextChildren);

	    if (workInProgress.tag === ClassComponent$5) {
	      var instance = workInProgress.stateNode;
	      workInProgress.memoizedProps = instance.props;
	      workInProgress.memoizedState = instance.state;
	      workInProgress.pendingProps = null;
	    }

	    return workInProgress.child;
	  }

	  return {
	    beginWork: beginWork,
	    beginFailedWork: beginFailedWork
	  };
	};

	var reconcileChildFibers$2 = ReactChildFiber.reconcileChildFibers;

	var popContextProvider$2 = ReactFiberContext.popContextProvider;

	var IndeterminateComponent$3 = ReactTypeOfWork.IndeterminateComponent;
	var FunctionalComponent$3 = ReactTypeOfWork.FunctionalComponent;
	var ClassComponent$7 = ReactTypeOfWork.ClassComponent;
	var HostRoot$6 = ReactTypeOfWork.HostRoot;
	var HostComponent$6 = ReactTypeOfWork.HostComponent;
	var HostText$5 = ReactTypeOfWork.HostText;
	var HostPortal$5 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$3 = ReactTypeOfWork.CoroutineComponent;
	var CoroutineHandlerPhase$1 = ReactTypeOfWork.CoroutineHandlerPhase;
	var YieldComponent$4 = ReactTypeOfWork.YieldComponent;
	var Fragment$4 = ReactTypeOfWork.Fragment;
	var Ref$2 = ReactTypeOfSideEffect.Ref;
	var Update$2 = ReactTypeOfSideEffect.Update;

	{
	  var ReactDebugCurrentFiber$5 = ReactDebugCurrentFiber_1;
	}

	var ReactFiberCompleteWork = function ReactFiberCompleteWork(config, hostContext) {
	  var createInstance = config.createInstance,
	      createTextInstance = config.createTextInstance,
	      appendInitialChild = config.appendInitialChild,
	      finalizeInitialChildren = config.finalizeInitialChildren,
	      prepareUpdate = config.prepareUpdate;
	  var getRootHostContainer = hostContext.getRootHostContainer,
	      popHostContext = hostContext.popHostContext,
	      getHostContext = hostContext.getHostContext,
	      popHostContainer = hostContext.popHostContainer;

	  function markChildAsProgressed(current$$1, workInProgress, priorityLevel) {
	    // We now have clones. Let's store them as the currently progressed work.
	    workInProgress.progressedChild = workInProgress.child;
	    workInProgress.progressedPriority = priorityLevel;
	    if (current$$1 !== null) {
	      // We also store it on the current. When the alternate swaps in we can
	      // continue from this point.
	      current$$1.progressedChild = workInProgress.progressedChild;
	      current$$1.progressedPriority = workInProgress.progressedPriority;
	    }
	  }

	  function markUpdate(workInProgress) {
	    // Tag the fiber with an update effect. This turns a Placement into
	    // an UpdateAndPlacement.
	    workInProgress.effectTag |= Update$2;
	  }

	  function markRef(workInProgress) {
	    workInProgress.effectTag |= Ref$2;
	  }

	  function appendAllYields(yields, workInProgress) {
	    var node = workInProgress.stateNode;
	    if (node) {
	      node['return'] = workInProgress;
	    }
	    while (node !== null) {
	      if (node.tag === HostComponent$6 || node.tag === HostText$5 || node.tag === HostPortal$5) {
	        invariant(false, 'A coroutine cannot have host component children.');
	      } else if (node.tag === YieldComponent$4) {
	        yields.push(node.type);
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === workInProgress) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function moveCoroutineToHandlerPhase(current$$1, workInProgress) {
	    var coroutine = workInProgress.memoizedProps;
	    !coroutine ? invariant(false, 'Should be resolved by now. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    // First step of the coroutine has completed. Now we need to do the second.
	    // TODO: It would be nice to have a multi stage coroutine represented by a
	    // single component, or at least tail call optimize nested ones. Currently
	    // that requires additional fields that we don't want to add to the fiber.
	    // So this requires nested handlers.
	    // Note: This doesn't mutate the alternate node. I don't think it needs to
	    // since this stage is reset for every pass.
	    workInProgress.tag = CoroutineHandlerPhase$1;

	    // Build up the yields.
	    // TODO: Compare this to a generator or opaque helpers like Children.
	    var yields = [];
	    appendAllYields(yields, workInProgress);
	    var fn = coroutine.handler;
	    var props = coroutine.props;
	    var nextChildren = fn(props, yields);

	    var currentFirstChild = current$$1 !== null ? current$$1.child : null;
	    // Inherit the priority of the returnFiber.
	    var priority = workInProgress.pendingWorkPriority;
	    workInProgress.child = reconcileChildFibers$2(workInProgress, currentFirstChild, nextChildren, priority);
	    markChildAsProgressed(current$$1, workInProgress, priority);
	    return workInProgress.child;
	  }

	  function appendAllChildren(parent, workInProgress) {
	    // We only have the top Fiber that was created but we need recurse down its
	    // children to find all the terminal nodes.
	    var node = workInProgress.child;
	    while (node !== null) {
	      if (node.tag === HostComponent$6 || node.tag === HostText$5) {
	        appendInitialChild(parent, node.stateNode);
	      } else if (node.tag === HostPortal$5) {
	        // If we have a portal child, then we don't want to traverse
	        // down its children. Instead, we'll get insertions from each child in
	        // the portal directly.
	      } else if (node.child !== null) {
	        node = node.child;
	        continue;
	      }
	      if (node === workInProgress) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === workInProgress) {
	          return;
	        }
	        node = node['return'];
	      }
	      node = node.sibling;
	    }
	  }

	  function completeWork(current$$1, workInProgress) {
	    {
	      ReactDebugCurrentFiber$5.current = workInProgress;
	    }

	    switch (workInProgress.tag) {
	      case FunctionalComponent$3:
	        return null;
	      case ClassComponent$7:
	        {
	          // We are leaving this subtree, so pop context if any.
	          popContextProvider$2(workInProgress);
	          return null;
	        }
	      case HostRoot$6:
	        {
	          // TODO: Pop the host container after #8607 lands.
	          var fiberRoot = workInProgress.stateNode;
	          if (fiberRoot.pendingContext) {
	            fiberRoot.context = fiberRoot.pendingContext;
	            fiberRoot.pendingContext = null;
	          }
	          return null;
	        }
	      case HostComponent$6:
	        {
	          popHostContext(workInProgress);
	          var rootContainerInstance = getRootHostContainer();
	          var type = workInProgress.type;
	          var newProps = workInProgress.memoizedProps;
	          if (current$$1 !== null && workInProgress.stateNode != null) {
	            // If we have an alternate, that means this is an update and we need to
	            // schedule a side-effect to do the updates.
	            var oldProps = current$$1.memoizedProps;
	            // If we get updated because one of our children updated, we don't
	            // have newProps so we'll have to reuse them.
	            // TODO: Split the update API as separate for the props vs. children.
	            // Even better would be if children weren't special cased at all tho.
	            var instance = workInProgress.stateNode;
	            var currentHostContext = getHostContext();
	            var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);

	            // TODO: Type this specific to this type of component.
	            workInProgress.updateQueue = updatePayload;
	            // If the update payload indicates that there is a change or if there
	            // is a new ref we mark this as an update.
	            if (updatePayload) {
	              markUpdate(workInProgress);
	            }
	            if (current$$1.ref !== workInProgress.ref) {
	              markRef(workInProgress);
	            }
	          } else {
	            if (!newProps) {
	              !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // This can happen when we abort work.
	              return null;
	            }

	            var _currentHostContext = getHostContext();
	            // TODO: Move createInstance to beginWork and keep it on a context
	            // "stack" as the parent. Then append children as we go in beginWork
	            // or completeWork depending on we want to add then top->down or
	            // bottom->up. Top->down is faster in IE11.
	            var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);

	            appendAllChildren(_instance, workInProgress);

	            // Certain renderers require commit-time effects for initial mount.
	            // (eg DOM renderer supports auto-focus for certain elements).
	            // Make sure such renderers get scheduled for later work.
	            if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance)) {
	              markUpdate(workInProgress);
	            }

	            workInProgress.stateNode = _instance;
	            if (workInProgress.ref !== null) {
	              // If there is a ref on a host node we need to schedule a callback
	              markRef(workInProgress);
	            }
	          }
	          return null;
	        }
	      case HostText$5:
	        {
	          var newText = workInProgress.memoizedProps;
	          if (current$$1 && workInProgress.stateNode != null) {
	            var oldText = current$$1.memoizedProps;
	            // If we have an alternate, that means this is an update and we need
	            // to schedule a side-effect to do the updates.
	            if (oldText !== newText) {
	              markUpdate(workInProgress);
	            }
	          } else {
	            if (typeof newText !== 'string') {
	              !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	              // This can happen when we abort work.
	              return null;
	            }
	            var _rootContainerInstance = getRootHostContainer();
	            var _currentHostContext2 = getHostContext();
	            var textInstance = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
	            workInProgress.stateNode = textInstance;
	          }
	          return null;
	        }
	      case CoroutineComponent$3:
	        return moveCoroutineToHandlerPhase(current$$1, workInProgress);
	      case CoroutineHandlerPhase$1:
	        // Reset the tag to now be a first phase coroutine.
	        workInProgress.tag = CoroutineComponent$3;
	        return null;
	      case YieldComponent$4:
	        // Does nothing.
	        return null;
	      case Fragment$4:
	        return null;
	      case HostPortal$5:
	        // TODO: Only mark this as an update if we have any pending callbacks.
	        markUpdate(workInProgress);
	        popHostContainer(workInProgress);
	        return null;

	      // Error cases
	      case IndeterminateComponent$3:
	        invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
	      // eslint-disable-next-line no-fallthrough
	      default:
	        invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  return {
	    completeWork: completeWork
	  };
	};

	var rendererID = null;
	var injectInternals = null;
	var onCommitRoot$1 = null;
	var onCommitUnmount$1 = null;
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && __REACT_DEVTOOLS_GLOBAL_HOOK__.supportsFiber) {
	  var inject = __REACT_DEVTOOLS_GLOBAL_HOOK__.inject,
	      onCommitFiberRoot = __REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot,
	      onCommitFiberUnmount = __REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberUnmount;

	  injectInternals = function injectInternals(internals) {
	    warning(rendererID == null, 'Cannot inject into DevTools twice.');
	    rendererID = inject(internals);
	  };

	  onCommitRoot$1 = function onCommitRoot$1(root) {
	    if (rendererID == null) {
	      return;
	    }
	    try {
	      onCommitFiberRoot(rendererID, root);
	    } catch (err) {
	      // Catch all errors because it is unsafe to throw in the commit phase.
	      {
	        warning(false, 'React DevTools encountered an error: %s', err);
	      }
	    }
	  };

	  onCommitUnmount$1 = function onCommitUnmount$1(fiber) {
	    if (rendererID == null) {
	      return;
	    }
	    try {
	      onCommitFiberUnmount(rendererID, fiber);
	    } catch (err) {
	      // Catch all errors because it is unsafe to throw in the commit phase.
	      {
	        warning(false, 'React DevTools encountered an error: %s', err);
	      }
	    }
	  };
	}

	var injectInternals_1 = injectInternals;
	var onCommitRoot_1 = onCommitRoot$1;
	var onCommitUnmount_1 = onCommitUnmount$1;

	var ReactFiberDevToolsHook = {
	  injectInternals: injectInternals_1,
	  onCommitRoot: onCommitRoot_1,
	  onCommitUnmount: onCommitUnmount_1
	};

	var ClassComponent$8 = ReactTypeOfWork.ClassComponent;
	var HostRoot$7 = ReactTypeOfWork.HostRoot;
	var HostComponent$7 = ReactTypeOfWork.HostComponent;
	var HostText$6 = ReactTypeOfWork.HostText;
	var HostPortal$6 = ReactTypeOfWork.HostPortal;
	var CoroutineComponent$4 = ReactTypeOfWork.CoroutineComponent;

	var commitCallbacks$1 = ReactFiberUpdateQueue.commitCallbacks;

	var onCommitUnmount = ReactFiberDevToolsHook.onCommitUnmount;

	var invokeGuardedCallback$2 = ReactErrorUtils_1.invokeGuardedCallback;

	var Placement$4 = ReactTypeOfSideEffect.Placement;
	var Update$3 = ReactTypeOfSideEffect.Update;
	var Callback$1 = ReactTypeOfSideEffect.Callback;
	var ContentReset$2 = ReactTypeOfSideEffect.ContentReset;

	{
	  var _require5$1 = ReactDebugFiberPerf_1,
	      startPhaseTimer$2 = _require5$1.startPhaseTimer,
	      stopPhaseTimer$2 = _require5$1.stopPhaseTimer;
	}

	var ReactFiberCommitWork = function ReactFiberCommitWork(config, captureError) {
	  var commitMount = config.commitMount,
	      commitUpdate = config.commitUpdate,
	      resetTextContent = config.resetTextContent,
	      commitTextUpdate = config.commitTextUpdate,
	      appendChild = config.appendChild,
	      insertBefore = config.insertBefore,
	      removeChild = config.removeChild,
	      getPublicInstance = config.getPublicInstance;

	  {
	    var callComponentWillUnmountWithTimerInDev = function callComponentWillUnmountWithTimerInDev(current$$1, instance) {
	      startPhaseTimer$2(current$$1, 'componentWillUnmount');
	      instance.componentWillUnmount();
	      stopPhaseTimer$2();
	    };
	  }

	  // Capture errors so they don't interrupt unmounting.
	  function safelyCallComponentWillUnmount(current$$1, instance) {
	    {
	      var unmountError = invokeGuardedCallback$2(null, callComponentWillUnmountWithTimerInDev, null, current$$1, instance);
	      if (unmountError) {
	        captureError(current$$1, unmountError);
	      }
	    }
	  }

	  function safelyDetachRef(current$$1) {
	    var ref = current$$1.ref;
	    if (ref !== null) {
	      {
	        var refError = invokeGuardedCallback$2(null, ref, null, null);
	        if (refError !== null) {
	          captureError(current$$1, refError);
	        }
	      }
	    }
	  }

	  function getHostParent(fiber) {
	    var parent = fiber['return'];
	    while (parent !== null) {
	      switch (parent.tag) {
	        case HostComponent$7:
	          return parent.stateNode;
	        case HostRoot$7:
	          return parent.stateNode.containerInfo;
	        case HostPortal$6:
	          return parent.stateNode.containerInfo;
	      }
	      parent = parent['return'];
	    }
	    invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
	  }

	  function getHostParentFiber(fiber) {
	    var parent = fiber['return'];
	    while (parent !== null) {
	      if (isHostParent(parent)) {
	        return parent;
	      }
	      parent = parent['return'];
	    }
	    invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
	  }

	  function isHostParent(fiber) {
	    return fiber.tag === HostComponent$7 || fiber.tag === HostRoot$7 || fiber.tag === HostPortal$6;
	  }

	  function getHostSibling(fiber) {
	    // We're going to search forward into the tree until we find a sibling host
	    // node. Unfortunately, if multiple insertions are done in a row we have to
	    // search past them. This leads to exponential search for the next sibling.
	    var node = fiber;
	    siblings: while (true) {
	      // If we didn't find anything, let's try the next sibling.
	      while (node.sibling === null) {
	        if (node['return'] === null || isHostParent(node['return'])) {
	          // If we pop out of the root or hit the parent the fiber we are the
	          // last sibling.
	          return null;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	      while (node.tag !== HostComponent$7 && node.tag !== HostText$6) {
	        // If it is not host node and, we might have a host node inside it.
	        // Try to search down until we find one.
	        if (node.effectTag & Placement$4) {
	          // If we don't have a child, try the siblings instead.
	          continue siblings;
	        }
	        // If we don't have a child, try the siblings instead.
	        // We also skip portals because they are not part of this host tree.
	        if (node.child === null || node.tag === HostPortal$6) {
	          continue siblings;
	        } else {
	          node.child['return'] = node;
	          node = node.child;
	        }
	      }
	      // Check if this host node is stable or about to be placed.
	      if (!(node.effectTag & Placement$4)) {
	        // Found it!
	        return node.stateNode;
	      }
	    }
	  }

	  function commitPlacement(finishedWork) {
	    // Recursively insert all host nodes into the parent.
	    var parentFiber = getHostParentFiber(finishedWork);
	    var parent = void 0;
	    switch (parentFiber.tag) {
	      case HostComponent$7:
	        parent = parentFiber.stateNode;
	        break;
	      case HostRoot$7:
	        parent = parentFiber.stateNode.containerInfo;
	        break;
	      case HostPortal$6:
	        parent = parentFiber.stateNode.containerInfo;
	        break;
	      default:
	        invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
	    }
	    if (parentFiber.effectTag & ContentReset$2) {
	      // Reset the text content of the parent before doing any insertions
	      resetTextContent(parent);
	      // Clear ContentReset from the effect tag
	      parentFiber.effectTag &= ~ContentReset$2;
	    }

	    var before = getHostSibling(finishedWork);
	    // We only have the top Fiber that was inserted but we need recurse down its
	    // children to find all the terminal nodes.
	    var node = finishedWork;
	    while (true) {
	      if (node.tag === HostComponent$7 || node.tag === HostText$6) {
	        if (before) {
	          insertBefore(parent, node.stateNode, before);
	        } else {
	          appendChild(parent, node.stateNode);
	        }
	      } else if (node.tag === HostPortal$6) {
	        // If the insertion itself is a portal, then we don't want to traverse
	        // down its children. Instead, we'll get insertions from each child in
	        // the portal directly.
	      } else if (node.child !== null) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === finishedWork) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === finishedWork) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function commitNestedUnmounts(root) {
	    // While we're inside a removed host node we don't want to call
	    // removeChild on the inner nodes because they're removed by the top
	    // call anyway. We also want to call componentWillUnmount on all
	    // composites before this host node is removed from the tree. Therefore
	    var node = root;
	    while (true) {
	      commitUnmount(node);
	      // Visit children because they may contain more composite or host nodes.
	      // Skip portals because commitUnmount() currently visits them recursively.
	      if (node.child !== null && node.tag !== HostPortal$6) {
	        node.child['return'] = node;
	        node = node.child;
	        continue;
	      }
	      if (node === root) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === root) {
	          return;
	        }
	        node = node['return'];
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function unmountHostComponents(parent, current$$1) {
	    // We only have the top Fiber that was inserted but we need recurse down its
	    var node = current$$1;
	    while (true) {
	      if (node.tag === HostComponent$7 || node.tag === HostText$6) {
	        commitNestedUnmounts(node);
	        // After all the children have unmounted, it is now safe to remove the
	        // node from the tree.
	        removeChild(parent, node.stateNode);
	        // Don't visit children because we already visited them.
	      } else if (node.tag === HostPortal$6) {
	        // When we go into a portal, it becomes the parent to remove from.
	        // We will reassign it back when we pop the portal on the way up.
	        parent = node.stateNode.containerInfo;
	        // Visit children because portals might contain host components.
	        if (node.child !== null) {
	          node.child['return'] = node;
	          node = node.child;
	          continue;
	        }
	      } else {
	        commitUnmount(node);
	        // Visit children because we may find more host components below.
	        if (node.child !== null) {
	          node.child['return'] = node;
	          node = node.child;
	          continue;
	        }
	      }
	      if (node === current$$1) {
	        return;
	      }
	      while (node.sibling === null) {
	        if (node['return'] === null || node['return'] === current$$1) {
	          return;
	        }
	        node = node['return'];
	        if (node.tag === HostPortal$6) {
	          // When we go out of the portal, we need to restore the parent.
	          // Since we don't keep a stack of them, we will search for it.
	          parent = getHostParent(node);
	        }
	      }
	      node.sibling['return'] = node['return'];
	      node = node.sibling;
	    }
	  }

	  function commitDeletion(current$$1) {
	    // Recursively delete all host nodes from the parent.
	    var parent = getHostParent(current$$1);
	    // Detach refs and call componentWillUnmount() on the whole subtree.
	    unmountHostComponents(parent, current$$1);

	    // Cut off the return pointers to disconnect it from the tree. Ideally, we
	    // should clear the child pointer of the parent alternate to let this
	    // get GC:ed but we don't know which for sure which parent is the current
	    // one so we'll settle for GC:ing the subtree of this child. This child
	    // itself will be GC:ed when the parent updates the next time.
	    current$$1['return'] = null;
	    current$$1.child = null;
	    if (current$$1.alternate) {
	      current$$1.alternate.child = null;
	      current$$1.alternate['return'] = null;
	    }
	  }

	  // User-originating errors (lifecycles and refs) should not interrupt
	  // deletion, so don't let them throw. Host-originating errors should
	  // interrupt deletion, so it's okay
	  function commitUnmount(current$$1) {
	    if (typeof onCommitUnmount === 'function') {
	      onCommitUnmount(current$$1);
	    }

	    switch (current$$1.tag) {
	      case ClassComponent$8:
	        {
	          safelyDetachRef(current$$1);
	          var instance = current$$1.stateNode;
	          if (typeof instance.componentWillUnmount === 'function') {
	            safelyCallComponentWillUnmount(current$$1, instance);
	          }
	          return;
	        }
	      case HostComponent$7:
	        {
	          safelyDetachRef(current$$1);
	          return;
	        }
	      case CoroutineComponent$4:
	        {
	          commitNestedUnmounts(current$$1.stateNode);
	          return;
	        }
	      case HostPortal$6:
	        {
	          // TODO: this is recursive.
	          // We are also not using this parent because
	          // the portal will get pushed immediately.
	          var parent = getHostParent(current$$1);
	          unmountHostComponents(parent, current$$1);
	          return;
	        }
	    }
	  }

	  function commitWork(current$$1, finishedWork) {
	    switch (finishedWork.tag) {
	      case ClassComponent$8:
	        {
	          return;
	        }
	      case HostComponent$7:
	        {
	          var instance = finishedWork.stateNode;
	          if (instance != null && current$$1 !== null) {
	            // Commit the work prepared earlier.
	            var newProps = finishedWork.memoizedProps;
	            var oldProps = current$$1.memoizedProps;
	            var type = finishedWork.type;
	            // TODO: Type the updateQueue to be specific to host components.
	            var updatePayload = finishedWork.updateQueue;
	            finishedWork.updateQueue = null;
	            if (updatePayload !== null) {
	              commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
	            }
	          }
	          return;
	        }
	      case HostText$6:
	        {
	          !(finishedWork.stateNode !== null && current$$1 !== null) ? invariant(false, 'This should only be done during updates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	          var textInstance = finishedWork.stateNode;
	          var newText = finishedWork.memoizedProps;
	          var oldText = current$$1.memoizedProps;
	          commitTextUpdate(textInstance, oldText, newText);
	          return;
	        }
	      case HostRoot$7:
	        {
	          return;
	        }
	      case HostPortal$6:
	        {
	          return;
	        }
	      default:
	        {
	          invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	        }
	    }
	  }

	  function commitLifeCycles(current$$1, finishedWork) {
	    switch (finishedWork.tag) {
	      case ClassComponent$8:
	        {
	          var instance = finishedWork.stateNode;
	          if (finishedWork.effectTag & Update$3) {
	            if (current$$1 === null) {
	              {
	                startPhaseTimer$2(finishedWork, 'componentDidMount');
	              }
	              instance.componentDidMount();
	              {
	                stopPhaseTimer$2();
	              }
	            } else {
	              var prevProps = current$$1.memoizedProps;
	              var prevState = current$$1.memoizedState;
	              {
	                startPhaseTimer$2(finishedWork, 'componentDidUpdate');
	              }
	              instance.componentDidUpdate(prevProps, prevState);
	              {
	                stopPhaseTimer$2();
	              }
	            }
	          }
	          if (finishedWork.effectTag & Callback$1 && finishedWork.updateQueue !== null) {
	            commitCallbacks$1(finishedWork, finishedWork.updateQueue, instance);
	          }
	          return;
	        }
	      case HostRoot$7:
	        {
	          var updateQueue = finishedWork.updateQueue;
	          if (updateQueue !== null) {
	            var _instance = finishedWork.child && finishedWork.child.stateNode;
	            commitCallbacks$1(finishedWork, updateQueue, _instance);
	          }
	          return;
	        }
	      case HostComponent$7:
	        {
	          var _instance2 = finishedWork.stateNode;

	          // Renderers may schedule work to be done after host components are mounted
	          // (eg DOM renderer may schedule auto-focus for inputs and form controls).
	          // These effects should only be committed when components are first mounted,
	          // aka when there is no current/alternate.
	          if (current$$1 === null && finishedWork.effectTag & Update$3) {
	            var type = finishedWork.type;
	            var props = finishedWork.memoizedProps;
	            commitMount(_instance2, type, props, finishedWork);
	          }

	          return;
	        }
	      case HostText$6:
	        {
	          // We have no life-cycles associated with text.
	          return;
	        }
	      case HostPortal$6:
	        {
	          // We have no life-cycles associated with portals.
	          return;
	        }
	      default:
	        {
	          invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
	        }
	    }
	  }

	  function commitAttachRef(finishedWork) {
	    var ref = finishedWork.ref;
	    if (ref !== null) {
	      var instance = getPublicInstance(finishedWork.stateNode);
	      ref(instance);
	    }
	  }

	  function commitDetachRef(current$$1) {
	    var currentRef = current$$1.ref;
	    if (currentRef !== null) {
	      currentRef(null);
	    }
	  }

	  return {
	    commitPlacement: commitPlacement,
	    commitDeletion: commitDeletion,
	    commitWork: commitWork,
	    commitLifeCycles: commitLifeCycles,
	    commitAttachRef: commitAttachRef,
	    commitDetachRef: commitDetachRef
	  };
	};

	var createCursor$2 = ReactFiberStack.createCursor;
	var pop$2 = ReactFiberStack.pop;
	var push$2 = ReactFiberStack.push;

	var NO_CONTEXT = {};

	var ReactFiberHostContext = function ReactFiberHostContext(config) {
	  var getChildHostContext = config.getChildHostContext,
	      getRootHostContext = config.getRootHostContext;

	  var contextStackCursor = createCursor$2(NO_CONTEXT);
	  var contextFiberStackCursor = createCursor$2(NO_CONTEXT);
	  var rootInstanceStackCursor = createCursor$2(NO_CONTEXT);

	  function requiredContext(c) {
	    !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    return c;
	  }

	  function getRootHostContainer() {
	    var rootInstance = requiredContext(rootInstanceStackCursor.current);
	    return rootInstance;
	  }

	  function pushHostContainer(fiber, nextRootInstance) {
	    // Push current root instance onto the stack;
	    // This allows us to reset root when portals are popped.
	    push$2(rootInstanceStackCursor, nextRootInstance, fiber);

	    var nextRootContext = getRootHostContext(nextRootInstance);

	    // Track the context and the Fiber that provided it.
	    // This enables us to pop only Fibers that provide unique contexts.
	    push$2(contextFiberStackCursor, fiber, fiber);
	    push$2(contextStackCursor, nextRootContext, fiber);
	  }

	  function popHostContainer(fiber) {
	    pop$2(contextStackCursor, fiber);
	    pop$2(contextFiberStackCursor, fiber);
	    pop$2(rootInstanceStackCursor, fiber);
	  }

	  function getHostContext() {
	    var context = requiredContext(contextStackCursor.current);
	    return context;
	  }

	  function pushHostContext(fiber) {
	    var rootInstance = requiredContext(rootInstanceStackCursor.current);
	    var context = requiredContext(contextStackCursor.current);
	    var nextContext = getChildHostContext(context, fiber.type, rootInstance);

	    // Don't push this Fiber's context unless it's unique.
	    if (context === nextContext) {
	      return;
	    }

	    // Track the context and the Fiber that provided it.
	    // This enables us to pop only Fibers that provide unique contexts.
	    push$2(contextFiberStackCursor, fiber, fiber);
	    push$2(contextStackCursor, nextContext, fiber);
	  }

	  function popHostContext(fiber) {
	    // Do not pop unless this Fiber provided the current context.
	    // pushHostContext() only pushes Fibers that provide unique contexts.
	    if (contextFiberStackCursor.current !== fiber) {
	      return;
	    }

	    pop$2(contextStackCursor, fiber);
	    pop$2(contextFiberStackCursor, fiber);
	  }

	  function resetHostContainer() {
	    contextStackCursor.current = NO_CONTEXT;
	    rootInstanceStackCursor.current = NO_CONTEXT;
	  }

	  return {
	    getHostContext: getHostContext,
	    getRootHostContainer: getRootHostContainer,
	    popHostContainer: popHostContainer,
	    popHostContext: popHostContext,
	    pushHostContainer: pushHostContainer,
	    pushHostContext: pushHostContext,
	    resetHostContainer: resetHostContainer
	  };
	};

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFiberInstrumentation
	 * 
	 */

	// This lets us hook into Fiber to debug what it's doing.
	// See https://github.com/facebook/react/pull/8033.
	// This is not part of the public API, not even for React DevTools.
	// You may only inject a debugTool if you work on React Fiber itself.

	var ReactFiberInstrumentation$2 = {
	  debugTool: null
	};

	var ReactFiberInstrumentation_1 = ReactFiberInstrumentation$2;

	var popContextProvider$1 = ReactFiberContext.popContextProvider;

	var reset$1 = ReactFiberStack.reset;

	var getStackAddendumByWorkInProgressFiber$3 = ReactFiberComponentTreeHook.getStackAddendumByWorkInProgressFiber;

	var logCapturedError = ReactFiberErrorLogger.logCapturedError;

	var invokeGuardedCallback = ReactErrorUtils_1.invokeGuardedCallback;

	var cloneFiber$1 = ReactFiber.cloneFiber;

	var onCommitRoot = ReactFiberDevToolsHook.onCommitRoot;

	var NoWork$2 = ReactPriorityLevel.NoWork;
	var SynchronousPriority$1 = ReactPriorityLevel.SynchronousPriority;
	var TaskPriority$1 = ReactPriorityLevel.TaskPriority;
	var AnimationPriority = ReactPriorityLevel.AnimationPriority;
	var HighPriority = ReactPriorityLevel.HighPriority;
	var LowPriority = ReactPriorityLevel.LowPriority;
	var OffscreenPriority = ReactPriorityLevel.OffscreenPriority;

	var NoEffect$2 = ReactTypeOfSideEffect.NoEffect;
	var Placement$1 = ReactTypeOfSideEffect.Placement;
	var Update = ReactTypeOfSideEffect.Update;
	var PlacementAndUpdate = ReactTypeOfSideEffect.PlacementAndUpdate;
	var Deletion = ReactTypeOfSideEffect.Deletion;
	var ContentReset = ReactTypeOfSideEffect.ContentReset;
	var Callback = ReactTypeOfSideEffect.Callback;
	var Err = ReactTypeOfSideEffect.Err;
	var Ref = ReactTypeOfSideEffect.Ref;

	var HostRoot$4 = ReactTypeOfWork.HostRoot;
	var HostComponent$4 = ReactTypeOfWork.HostComponent;
	var HostPortal$2 = ReactTypeOfWork.HostPortal;
	var ClassComponent$4 = ReactTypeOfWork.ClassComponent;

	var getPendingPriority$1 = ReactFiberUpdateQueue.getPendingPriority;

	var _require12 = ReactFiberContext;
	var resetContext$1 = _require12.resetContext;

	{
	  var warning$5 = warning;
	  var ReactFiberInstrumentation$1 = ReactFiberInstrumentation_1;
	  var ReactDebugCurrentFiber$3 = ReactDebugCurrentFiber_1;

	  var _require13 = ReactDebugFiberPerf_1,
	      recordEffect = _require13.recordEffect,
	      recordScheduleUpdate = _require13.recordScheduleUpdate,
	      startWorkTimer = _require13.startWorkTimer,
	      stopWorkTimer = _require13.stopWorkTimer,
	      startWorkLoopTimer = _require13.startWorkLoopTimer,
	      stopWorkLoopTimer = _require13.stopWorkLoopTimer,
	      startCommitTimer = _require13.startCommitTimer,
	      stopCommitTimer = _require13.stopCommitTimer,
	      startCommitHostEffectsTimer = _require13.startCommitHostEffectsTimer,
	      stopCommitHostEffectsTimer = _require13.stopCommitHostEffectsTimer,
	      startCommitLifeCyclesTimer = _require13.startCommitLifeCyclesTimer,
	      stopCommitLifeCyclesTimer = _require13.stopCommitLifeCyclesTimer;

	  var warnAboutUpdateOnUnmounted = function warnAboutUpdateOnUnmounted(instance) {
	    var ctor = instance.constructor;
	    warning$5(false, 'Can only update a mounted or mounting component. This usually means ' + 'you called setState, replaceState, or forceUpdate on an unmounted ' + 'component. This is a no-op.\n\nPlease check the code for the ' + '%s component.', ctor && (ctor.displayName || ctor.name) || 'ReactClass');
	  };

	  var warnAboutInvalidUpdates = function warnAboutInvalidUpdates(instance) {
	    switch (ReactDebugCurrentFiber$3.phase) {
	      case 'getChildContext':
	        warning$5(false, 'setState(...): Cannot call setState() inside getChildContext()');
	        break;
	      case 'render':
	        warning$5(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
	        break;
	    }
	  };
	}

	var timeHeuristicForUnitOfWork = 1;

	var ReactFiberScheduler = function ReactFiberScheduler(config) {
	  var hostContext = ReactFiberHostContext(config);
	  var popHostContainer = hostContext.popHostContainer,
	      popHostContext = hostContext.popHostContext,
	      resetHostContainer = hostContext.resetHostContainer;

	  var _ReactFiberBeginWork = ReactFiberBeginWork(config, hostContext, scheduleUpdate, getPriorityContext),
	      beginWork = _ReactFiberBeginWork.beginWork,
	      beginFailedWork = _ReactFiberBeginWork.beginFailedWork;

	  var _ReactFiberCompleteWo = ReactFiberCompleteWork(config, hostContext),
	      completeWork = _ReactFiberCompleteWo.completeWork;

	  var _ReactFiberCommitWork = ReactFiberCommitWork(config, captureError),
	      commitPlacement = _ReactFiberCommitWork.commitPlacement,
	      commitDeletion = _ReactFiberCommitWork.commitDeletion,
	      commitWork = _ReactFiberCommitWork.commitWork,
	      commitLifeCycles = _ReactFiberCommitWork.commitLifeCycles,
	      commitAttachRef = _ReactFiberCommitWork.commitAttachRef,
	      commitDetachRef = _ReactFiberCommitWork.commitDetachRef;

	  var hostScheduleAnimationCallback = config.scheduleAnimationCallback,
	      hostScheduleDeferredCallback = config.scheduleDeferredCallback,
	      useSyncScheduling = config.useSyncScheduling,
	      prepareForCommit = config.prepareForCommit,
	      resetAfterCommit = config.resetAfterCommit;

	  // The priority level to use when scheduling an update.
	  // TODO: Should we change this to an array? Might be less confusing.

	  var priorityContext = useSyncScheduling ? SynchronousPriority$1 : LowPriority;

	  // Keep track of this so we can reset the priority context if an error
	  // is thrown during reconciliation.
	  var priorityContextBeforeReconciliation = NoWork$2;

	  // Keeps track of whether we're currently in a work loop.
	  var isPerformingWork = false;

	  // Keeps track of whether the current deadline has expired.
	  var deadlineHasExpired = false;

	  // Keeps track of whether we should should batch sync updates.
	  var isBatchingUpdates = false;

	  // The next work in progress fiber that we're currently working on.
	  var nextUnitOfWork = null;
	  var nextPriorityLevel = NoWork$2;

	  // The next fiber with an effect that we're currently committing.
	  var nextEffect = null;

	  var pendingCommit = null;

	  // Linked list of roots with scheduled work on them.
	  var nextScheduledRoot = null;
	  var lastScheduledRoot = null;

	  // Keep track of which host environment callbacks are scheduled.
	  var isAnimationCallbackScheduled = false;
	  var isDeferredCallbackScheduled = false;

	  // Keep track of which fibers have captured an error that need to be handled.
	  // Work is removed from this collection after unstable_handleError is called.
	  var capturedErrors = null;
	  // Keep track of which fibers have failed during the current batch of work.
	  // This is a different set than capturedErrors, because it is not reset until
	  // the end of the batch. This is needed to propagate errors correctly if a
	  // subtree fails more than once.
	  var failedBoundaries = null;
	  // Error boundaries that captured an error during the current commit.
	  var commitPhaseBoundaries = null;
	  var firstUncaughtError = null;
	  var fatalError = null;

	  var isCommitting = false;
	  var isUnmounting = false;

	  function scheduleAnimationCallback(callback) {
	    if (!isAnimationCallbackScheduled) {
	      isAnimationCallbackScheduled = true;
	      hostScheduleAnimationCallback(callback);
	    }
	  }

	  function scheduleDeferredCallback(callback) {
	    if (!isDeferredCallbackScheduled) {
	      isDeferredCallbackScheduled = true;
	      hostScheduleDeferredCallback(callback);
	    }
	  }

	  function resetContextStack() {
	    // Reset the stack
	    reset$1();
	    // Reset the cursors
	    resetContext$1();
	    resetHostContainer();
	  }

	  // findNextUnitOfWork mutates the current priority context. It is reset after
	  // after the workLoop exits, so never call findNextUnitOfWork from outside
	  // the work loop.
	  function findNextUnitOfWork() {
	    // Clear out roots with no more work on them, or if they have uncaught errors
	    while (nextScheduledRoot !== null && nextScheduledRoot.current.pendingWorkPriority === NoWork$2) {
	      // Unschedule this root.
	      nextScheduledRoot.isScheduled = false;
	      // Read the next pointer now.
	      // We need to clear it in case this root gets scheduled again later.
	      var next = nextScheduledRoot.nextScheduledRoot;
	      nextScheduledRoot.nextScheduledRoot = null;
	      // Exit if we cleared all the roots and there's no work to do.
	      if (nextScheduledRoot === lastScheduledRoot) {
	        nextScheduledRoot = null;
	        lastScheduledRoot = null;
	        nextPriorityLevel = NoWork$2;
	        return null;
	      }
	      // Continue with the next root.
	      // If there's no work on it, it will get unscheduled too.
	      nextScheduledRoot = next;
	    }

	    var root = nextScheduledRoot;
	    var highestPriorityRoot = null;
	    var highestPriorityLevel = NoWork$2;
	    while (root !== null) {
	      if (root.current.pendingWorkPriority !== NoWork$2 && (highestPriorityLevel === NoWork$2 || highestPriorityLevel > root.current.pendingWorkPriority)) {
	        highestPriorityLevel = root.current.pendingWorkPriority;
	        highestPriorityRoot = root;
	      }
	      // We didn't find anything to do in this root, so let's try the next one.
	      root = root.nextScheduledRoot;
	    }
	    if (highestPriorityRoot !== null) {
	      nextPriorityLevel = highestPriorityLevel;
	      priorityContext = nextPriorityLevel;

	      // Before we start any new work, let's make sure that we have a fresh
	      // stack to work from.
	      // TODO: This call is buried a bit too deep. It would be nice to have
	      // a single point which happens right before any new work and
	      // unfortunately this is it.
	      resetContextStack();

	      return cloneFiber$1(highestPriorityRoot.current, highestPriorityLevel);
	    }

	    nextPriorityLevel = NoWork$2;
	    return null;
	  }

	  function commitAllHostEffects() {
	    while (nextEffect !== null) {
	      {
	        ReactDebugCurrentFiber$3.current = nextEffect;
	        recordEffect();
	      }

	      var effectTag = nextEffect.effectTag;
	      if (effectTag & ContentReset) {
	        config.resetTextContent(nextEffect.stateNode);
	      }

	      if (effectTag & Ref) {
	        var current$$1 = nextEffect.alternate;
	        if (current$$1 !== null) {
	          commitDetachRef(current$$1);
	        }
	      }

	      // The following switch statement is only concerned about placement,
	      // updates, and deletions. To avoid needing to add a case for every
	      // possible bitmap value, we remove the secondary effects from the
	      // effect tag and switch on that value.
	      var primaryEffectTag = effectTag & ~(Callback | Err | ContentReset | Ref);
	      switch (primaryEffectTag) {
	        case Placement$1:
	          {
	            commitPlacement(nextEffect);
	            // Clear the "placement" from effect tag so that we know that this is inserted, before
	            // any life-cycles like componentDidMount gets called.
	            // TODO: findDOMNode doesn't rely on this any more but isMounted
	            // does and isMounted is deprecated anyway so we should be able
	            // to kill this.
	            nextEffect.effectTag &= ~Placement$1;
	            break;
	          }
	        case PlacementAndUpdate:
	          {
	            // Placement
	            commitPlacement(nextEffect);
	            // Clear the "placement" from effect tag so that we know that this is inserted, before
	            // any life-cycles like componentDidMount gets called.
	            nextEffect.effectTag &= ~Placement$1;

	            // Update
	            var _current = nextEffect.alternate;
	            commitWork(_current, nextEffect);
	            break;
	          }
	        case Update:
	          {
	            var _current2 = nextEffect.alternate;
	            commitWork(_current2, nextEffect);
	            break;
	          }
	        case Deletion:
	          {
	            isUnmounting = true;
	            commitDeletion(nextEffect);
	            isUnmounting = false;
	            break;
	          }
	      }
	      nextEffect = nextEffect.nextEffect;
	    }

	    {
	      ReactDebugCurrentFiber$3.current = null;
	    }
	  }

	  function commitAllLifeCycles() {
	    while (nextEffect !== null) {
	      var effectTag = nextEffect.effectTag;

	      // Use Task priority for lifecycle updates
	      if (effectTag & (Update | Callback)) {
	        {
	          recordEffect();
	        }
	        var current$$1 = nextEffect.alternate;
	        commitLifeCycles(current$$1, nextEffect);
	      }

	      if (effectTag & Ref) {
	        {
	          recordEffect();
	        }
	        commitAttachRef(nextEffect);
	      }

	      if (effectTag & Err) {
	        {
	          recordEffect();
	        }
	        commitErrorHandling(nextEffect);
	      }

	      var next = nextEffect.nextEffect;
	      // Ensure that we clean these up so that we don't accidentally keep them.
	      // I'm not actually sure this matters because we can't reset firstEffect
	      // and lastEffect since they're on every node, not just the effectful
	      // ones. So we have to clean everything as we reuse nodes anyway.
	      nextEffect.nextEffect = null;
	      // Ensure that we reset the effectTag here so that we can rely on effect
	      // tags to reason about the current life-cycle.
	      nextEffect = next;
	    }
	  }

	  function commitAllWork(finishedWork) {
	    // We keep track of this so that captureError can collect any boundaries
	    // that capture an error during the commit phase. The reason these aren't
	    // local to this function is because errors that occur during cWU are
	    // captured elsewhere, to prevent the unmount from being interrupted.
	    isCommitting = true;
	    {
	      startCommitTimer();
	    }

	    pendingCommit = null;
	    var root = finishedWork.stateNode;
	    !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    // Reset this to null before calling lifecycles
	    ReactCurrentOwnerRollupShim.current = null;

	    // Updates that occur during the commit phase should have Task priority
	    var previousPriorityContext = priorityContext;
	    priorityContext = TaskPriority$1;

	    var firstEffect = void 0;
	    if (finishedWork.effectTag !== NoEffect$2) {
	      // A fiber's effect list consists only of its children, not itself. So if
	      // the root has an effect, we need to add it to the end of the list. The
	      // resulting list is the set that would belong to the root's parent, if
	      // it had one; that is, all the effects in the tree including the root.
	      if (finishedWork.lastEffect !== null) {
	        finishedWork.lastEffect.nextEffect = finishedWork;
	        firstEffect = finishedWork.firstEffect;
	      } else {
	        firstEffect = finishedWork;
	      }
	    } else {
	      // There is no effect on the root.
	      firstEffect = finishedWork.firstEffect;
	    }

	    var commitInfo = prepareForCommit();

	    // Commit all the side-effects within a tree. We'll do this in two passes.
	    // The first pass performs all the host insertions, updates, deletions and
	    // ref unmounts.
	    nextEffect = firstEffect;
	    {
	      startCommitHostEffectsTimer();
	    }
	    while (nextEffect !== null) {
	      var _error = null;
	      {
	        _error = invokeGuardedCallback(null, commitAllHostEffects, null, finishedWork);
	      }
	      if (_error !== null) {
	        !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	        captureError(nextEffect, _error);
	        // Clean-up
	        if (nextEffect !== null) {
	          nextEffect = nextEffect.nextEffect;
	        }
	      }
	    }
	    {
	      stopCommitHostEffectsTimer();
	    }

	    resetAfterCommit(commitInfo);

	    // The work-in-progress tree is now the current tree. This must come after
	    // the first pass of the commit phase, so that the previous tree is still
	    // current during componentWillUnmount, but before the second pass, so that
	    // the finished work is current during componentDidMount/Update.
	    root.current = finishedWork;

	    // In the second pass we'll perform all life-cycles and ref callbacks.
	    // Life-cycles happen as a separate pass so that all placements, updates,
	    // and deletions in the entire tree have already been invoked.
	    // This pass also triggers any renderer-specific initial effects.
	    nextEffect = firstEffect;
	    {
	      startCommitLifeCyclesTimer();
	    }
	    while (nextEffect !== null) {
	      var _error2 = null;
	      {
	        _error2 = invokeGuardedCallback(null, commitAllLifeCycles, null, finishedWork);
	      }
	      if (_error2 !== null) {
	        !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	        captureError(nextEffect, _error2);
	        if (nextEffect !== null) {
	          nextEffect = nextEffect.nextEffect;
	        }
	      }
	    }

	    isCommitting = false;
	    {
	      stopCommitLifeCyclesTimer();
	      stopCommitTimer();
	    }
	    if (typeof onCommitRoot === 'function') {
	      onCommitRoot(finishedWork.stateNode);
	    }
	    if ('development' !== 'production' && ReactFiberInstrumentation$1.debugTool) {
	      ReactFiberInstrumentation$1.debugTool.onCommitWork(finishedWork);
	    }

	    // If we caught any errors during this commit, schedule their boundaries
	    // to update.
	    if (commitPhaseBoundaries) {
	      commitPhaseBoundaries.forEach(scheduleErrorRecovery);
	      commitPhaseBoundaries = null;
	    }

	    priorityContext = previousPriorityContext;
	  }

	  function resetWorkPriority(workInProgress) {
	    var newPriority = NoWork$2;

	    // Check for pending update priority. This is usually null so it shouldn't
	    // be a perf issue.
	    var queue = workInProgress.updateQueue;
	    var tag = workInProgress.tag;
	    if (queue !== null && (
	    // TODO: Revisit once updateQueue is typed properly to distinguish between
	    // update payloads for host components and update queues for composites
	    tag === ClassComponent$4 || tag === HostRoot$4)) {
	      newPriority = getPendingPriority$1(queue);
	    }

	    // TODO: Coroutines need to visit stateNode

	    // progressedChild is going to be the child set with the highest priority.
	    // Either it is the same as child, or it just bailed out because it choose
	    // not to do the work.
	    var child = workInProgress.progressedChild;
	    while (child !== null) {
	      // Ensure that remaining work priority bubbles up.
	      if (child.pendingWorkPriority !== NoWork$2 && (newPriority === NoWork$2 || newPriority > child.pendingWorkPriority)) {
	        newPriority = child.pendingWorkPriority;
	      }
	      child = child.sibling;
	    }
	    workInProgress.pendingWorkPriority = newPriority;
	  }

	  function completeUnitOfWork(workInProgress) {
	    while (true) {
	      // The current, flushed, state of this fiber is the alternate.
	      // Ideally nothing should rely on this, but relying on it here
	      // means that we don't need an additional field on the work in
	      // progress.
	      var current$$1 = workInProgress.alternate;
	      var next = completeWork(current$$1, workInProgress);

	      var returnFiber = workInProgress['return'];
	      var siblingFiber = workInProgress.sibling;

	      resetWorkPriority(workInProgress);

	      if (next !== null) {
	        {
	          stopWorkTimer(workInProgress);
	        }
	        if ('development' !== 'production' && ReactFiberInstrumentation$1.debugTool) {
	          ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);
	        }
	        // If completing this work spawned new work, do that next. We'll come
	        // back here again.
	        return next;
	      }

	      if (returnFiber !== null) {
	        // Append all the effects of the subtree and this fiber onto the effect
	        // list of the parent. The completion order of the children affects the
	        // side-effect order.
	        if (returnFiber.firstEffect === null) {
	          returnFiber.firstEffect = workInProgress.firstEffect;
	        }
	        if (workInProgress.lastEffect !== null) {
	          if (returnFiber.lastEffect !== null) {
	            returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
	          }
	          returnFiber.lastEffect = workInProgress.lastEffect;
	        }

	        // If this fiber had side-effects, we append it AFTER the children's
	        // side-effects. We can perform certain side-effects earlier if
	        // needed, by doing multiple passes over the effect list. We don't want
	        // to schedule our own side-effect on our own list because if end up
	        // reusing children we'll schedule this effect onto itself since we're
	        // at the end.
	        if (workInProgress.effectTag !== NoEffect$2) {
	          if (returnFiber.lastEffect !== null) {
	            returnFiber.lastEffect.nextEffect = workInProgress;
	          } else {
	            returnFiber.firstEffect = workInProgress;
	          }
	          returnFiber.lastEffect = workInProgress;
	        }
	      }

	      {
	        stopWorkTimer(workInProgress);
	      }
	      if ('development' !== 'production' && ReactFiberInstrumentation$1.debugTool) {
	        ReactFiberInstrumentation$1.debugTool.onCompleteWork(workInProgress);
	      }

	      if (siblingFiber !== null) {
	        // If there is more work to do in this returnFiber, do that next.
	        return siblingFiber;
	      } else if (returnFiber !== null) {
	        // If there's no more work in this returnFiber. Complete the returnFiber.
	        workInProgress = returnFiber;
	        continue;
	      } else {
	        // We've reached the root. Unless we're current performing deferred
	        // work, we should commit the completed work immediately. If we are
	        // performing deferred work, returning null indicates to the caller
	        // that we just completed the root so they can handle that case correctly.
	        if (nextPriorityLevel < HighPriority) {
	          // Otherwise, we should commit immediately.
	          commitAllWork(workInProgress);
	        } else {
	          pendingCommit = workInProgress;
	        }
	        return null;
	      }
	    }

	    // Without this explicit null return Flow complains of invalid return type
	    // TODO Remove the above while(true) loop
	    // eslint-disable-next-line no-unreachable
	    return null;
	  }

	  function performUnitOfWork(workInProgress) {
	    // The current, flushed, state of this fiber is the alternate.
	    // Ideally nothing should rely on this, but relying on it here
	    // means that we don't need an additional field on the work in
	    // progress.
	    var current$$1 = workInProgress.alternate;

	    // See if beginning this work spawns more work.
	    {
	      startWorkTimer(workInProgress);
	    }
	    var next = beginWork(current$$1, workInProgress, nextPriorityLevel);
	    if ('development' !== 'production' && ReactFiberInstrumentation$1.debugTool) {
	      ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);
	    }

	    if (next === null) {
	      // If this doesn't spawn new work, complete the current work.
	      next = completeUnitOfWork(workInProgress);
	    }

	    ReactCurrentOwnerRollupShim.current = null;
	    {
	      ReactDebugCurrentFiber$3.current = null;
	    }

	    return next;
	  }

	  function performFailedUnitOfWork(workInProgress) {
	    // The current, flushed, state of this fiber is the alternate.
	    // Ideally nothing should rely on this, but relying on it here
	    // means that we don't need an additional field on the work in
	    // progress.
	    var current$$1 = workInProgress.alternate;

	    // See if beginning this work spawns more work.
	    {
	      startWorkTimer(workInProgress);
	    }
	    var next = beginFailedWork(current$$1, workInProgress, nextPriorityLevel);
	    if ('development' !== 'production' && ReactFiberInstrumentation$1.debugTool) {
	      ReactFiberInstrumentation$1.debugTool.onBeginWork(workInProgress);
	    }

	    if (next === null) {
	      // If this doesn't spawn new work, complete the current work.
	      next = completeUnitOfWork(workInProgress);
	    }

	    ReactCurrentOwnerRollupShim.current = null;
	    {
	      ReactDebugCurrentFiber$3.current = null;
	    }

	    return next;
	  }

	  function performDeferredWork(deadline) {
	    // We pass the lowest deferred priority here because it acts as a minimum.
	    // Higher priorities will also be performed.
	    isDeferredCallbackScheduled = false;
	    performWork(OffscreenPriority, deadline);
	  }

	  function performAnimationWork() {
	    isAnimationCallbackScheduled = false;
	    performWork(AnimationPriority, null);
	  }

	  function clearErrors() {
	    if (nextUnitOfWork === null) {
	      nextUnitOfWork = findNextUnitOfWork();
	    }
	    // Keep performing work until there are no more errors
	    while (capturedErrors !== null && capturedErrors.size && nextUnitOfWork !== null && nextPriorityLevel !== NoWork$2 && nextPriorityLevel <= TaskPriority$1) {
	      if (hasCapturedError(nextUnitOfWork)) {
	        // Use a forked version of performUnitOfWork
	        nextUnitOfWork = performFailedUnitOfWork(nextUnitOfWork);
	      } else {
	        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	      }
	      if (nextUnitOfWork === null) {
	        // If performUnitOfWork returns null, that means we just committed
	        // a root. Normally we'd need to clear any errors that were scheduled
	        // during the commit phase. But we're already clearing errors, so
	        // we can continue.
	        nextUnitOfWork = findNextUnitOfWork();
	      }
	    }
	  }

	  function workLoop(priorityLevel, deadline) {
	    // Clear any errors.
	    clearErrors();

	    if (nextUnitOfWork === null) {
	      nextUnitOfWork = findNextUnitOfWork();
	    }

	    var hostRootTimeMarker = void 0;
	    if (ReactFeatureFlags_1.logTopLevelRenders && nextUnitOfWork !== null && nextUnitOfWork.tag === HostRoot$4 && nextUnitOfWork.child !== null) {
	      var _componentName = getComponentName_1(nextUnitOfWork.child) || '';
	      hostRootTimeMarker = 'React update: ' + _componentName;
	      console.time(hostRootTimeMarker);
	    }

	    // If there's a deadline, and we're not performing Task work, perform work
	    // using this loop that checks the deadline on every iteration.
	    if (deadline !== null && priorityLevel > TaskPriority$1) {
	      // The deferred work loop will run until there's no time left in
	      // the current frame.
	      while (nextUnitOfWork !== null && !deadlineHasExpired) {
	        if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
	          nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	          // In a deferred work batch, iff nextUnitOfWork returns null, we just
	          // completed a root and a pendingCommit exists. Logically, we could
	          // omit either of the checks in the following condition, but we need
	          // both to satisfy Flow.
	          if (nextUnitOfWork === null && pendingCommit !== null) {
	            // If we have time, we should commit the work now.
	            if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
	              commitAllWork(pendingCommit);
	              nextUnitOfWork = findNextUnitOfWork();
	              // Clear any errors that were scheduled during the commit phase.
	              clearErrors();
	            } else {
	              deadlineHasExpired = true;
	            }
	            // Otherwise the root will committed in the next frame.
	          }
	        } else {
	          deadlineHasExpired = true;
	        }
	      }
	    } else {
	      // If there's no deadline, or if we're performing Task work, use this loop
	      // that doesn't check how much time is remaining. It will keep running
	      // until we run out of work at this priority level.
	      while (nextUnitOfWork !== null && nextPriorityLevel !== NoWork$2 && nextPriorityLevel <= priorityLevel) {
	        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
	        if (nextUnitOfWork === null) {
	          nextUnitOfWork = findNextUnitOfWork();
	          // performUnitOfWork returned null, which means we just committed a
	          // root. Clear any errors that were scheduled during the commit phase.
	          clearErrors();
	        }
	      }
	    }

	    if (hostRootTimeMarker) {
	      console.timeEnd(hostRootTimeMarker);
	    }
	  }

	  function performWork(priorityLevel, deadline) {
	    {
	      startWorkLoopTimer();
	    }

	    !!isPerformingWork ? invariant(false, 'performWork was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
	    isPerformingWork = true;
	    var isPerformingDeferredWork = !!deadline;

	    // This outer loop exists so that we can restart the work loop after
	    // catching an error. It also lets us flush Task work at the end of a
	    // deferred batch.
	    while (priorityLevel !== NoWork$2 && !fatalError) {
	      !(deadline !== null || priorityLevel < HighPriority) ? invariant(false, 'Cannot perform deferred work without a deadline. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	      // Before starting any work, check to see if there are any pending
	      // commits from the previous frame.
	      if (pendingCommit !== null && !deadlineHasExpired) {
	        commitAllWork(pendingCommit);
	      }

	      // Nothing in performWork should be allowed to throw. All unsafe
	      // operations must happen within workLoop, which is extracted to a
	      // separate function so that it can be optimized by the JS engine.
	      priorityContextBeforeReconciliation = priorityContext;
	      var _error3 = null;
	      {
	        _error3 = invokeGuardedCallback(null, workLoop, null, priorityLevel, deadline);
	      }
	      // Reset the priority context to its value before reconcilation.
	      priorityContext = priorityContextBeforeReconciliation;

	      if (_error3 !== null) {
	        // We caught an error during either the begin or complete phases.
	        var failedWork = nextUnitOfWork;

	        if (failedWork !== null) {
	          // "Capture" the error by finding the nearest boundary. If there is no
	          // error boundary, the nearest host container acts as one. If
	          // captureError returns null, the error was intentionally ignored.
	          var maybeBoundary = captureError(failedWork, _error3);
	          if (maybeBoundary !== null) {
	            var boundary = maybeBoundary;

	            // Complete the boundary as if it rendered null. This will unmount
	            // the failed tree.
	            beginFailedWork(boundary.alternate, boundary, priorityLevel);

	            // The next unit of work is now the boundary that captured the error.
	            // Conceptually, we're unwinding the stack. We need to unwind the
	            // context stack, too, from the failed work to the boundary that
	            // captured the error.
	            // TODO: If we set the memoized props in beginWork instead of
	            // completeWork, rather than unwind the stack, we can just restart
	            // from the root. Can't do that until then because without memoized
	            // props, the nodes higher up in the tree will rerender unnecessarily.
	            unwindContexts(failedWork, boundary);
	            nextUnitOfWork = completeUnitOfWork(boundary);
	          }
	          // Continue performing work
	          continue;
	        } else if (fatalError === null) {
	          // There is no current unit of work. This is a worst-case scenario
	          // and should only be possible if there's a bug in the renderer, e.g.
	          // inside resetAfterCommit.
	          fatalError = _error3;
	        }
	      }

	      // Stop performing work
	      priorityLevel = NoWork$2;

	      // If have we more work, and we're in a deferred batch, check to see
	      // if the deadline has expired.
	      if (nextPriorityLevel !== NoWork$2 && isPerformingDeferredWork && !deadlineHasExpired) {
	        // We have more time to do work.
	        priorityLevel = nextPriorityLevel;
	        continue;
	      }

	      // There might be work left. Depending on the priority, we should
	      // either perform it now or schedule a callback to perform it later.
	      switch (nextPriorityLevel) {
	        case SynchronousPriority$1:
	        case TaskPriority$1:
	          // Perform work immediately by switching the priority level
	          // and continuing the loop.
	          priorityLevel = nextPriorityLevel;
	          break;
	        case AnimationPriority:
	          scheduleAnimationCallback(performAnimationWork);
	          // Even though the next unit of work has animation priority, there
	          // may still be deferred work left over as well. I think this is
	          // only important for unit tests. In a real app, a deferred callback
	          // would be scheduled during the next animation frame.
	          scheduleDeferredCallback(performDeferredWork);
	          break;
	        case HighPriority:
	        case LowPriority:
	        case OffscreenPriority:
	          scheduleDeferredCallback(performDeferredWork);
	          break;
	      }
	    }

	    var errorToThrow = fatalError || firstUncaughtError;

	    // We're done performing work. Time to clean up.
	    isPerformingWork = false;
	    deadlineHasExpired = false;
	    fatalError = null;
	    firstUncaughtError = null;
	    capturedErrors = null;
	    failedBoundaries = null;
	    {
	      stopWorkLoopTimer();
	    }

	    // It's safe to throw any unhandled errors.
	    if (errorToThrow !== null) {
	      throw errorToThrow;
	    }
	  }

	  // Returns the boundary that captured the error, or null if the error is ignored
	  function captureError(failedWork, error) {
	    // It is no longer valid because we exited the user code.
	    ReactCurrentOwnerRollupShim.current = null;
	    {
	      ReactDebugCurrentFiber$3.current = null;
	      ReactDebugCurrentFiber$3.phase = null;
	    }
	    // It is no longer valid because this unit of work failed.
	    nextUnitOfWork = null;

	    // Search for the nearest error boundary.
	    var boundary = null;

	    // Passed to logCapturedError()
	    var errorBoundaryFound = false;
	    var willRetry = false;
	    var errorBoundaryName = null;

	    // Host containers are a special case. If the failed work itself is a host
	    // container, then it acts as its own boundary. In all other cases, we
	    // ignore the work itself and only search through the parents.
	    if (failedWork.tag === HostRoot$4) {
	      boundary = failedWork;

	      if (isFailedBoundary(failedWork)) {
	        // If this root already failed, there must have been an error when
	        // attempting to unmount it. This is a worst-case scenario and
	        // should only be possible if there's a bug in the renderer.
	        fatalError = error;
	      }
	    } else {
	      var node = failedWork['return'];
	      while (node !== null && boundary === null) {
	        if (node.tag === ClassComponent$4) {
	          var instance = node.stateNode;
	          if (typeof instance.unstable_handleError === 'function') {
	            errorBoundaryFound = true;
	            errorBoundaryName = getComponentName_1(node);

	            // Found an error boundary!
	            boundary = node;
	            willRetry = true;
	          }
	        } else if (node.tag === HostRoot$4) {
	          // Treat the root like a no-op error boundary.
	          boundary = node;
	        }

	        if (isFailedBoundary(node)) {
	          // This boundary is already in a failed state.

	          // If we're currently unmounting, that means this error was
	          // thrown while unmounting a failed subtree. We should ignore
	          // the error.
	          if (isUnmounting) {
	            return null;
	          }

	          // If we're in the commit phase, we should check to see if
	          // this boundary already captured an error during this commit.
	          // This case exists because multiple errors can be thrown during
	          // a single commit without interruption.
	          if (commitPhaseBoundaries !== null && (commitPhaseBoundaries.has(node) || node.alternate !== null && commitPhaseBoundaries.has(node.alternate))) {
	            // If so, we should ignore this error.
	            return null;
	          }

	          // The error should propagate to the next boundary -— we keep looking.
	          boundary = null;
	          willRetry = false;
	        }

	        node = node['return'];
	      }
	    }

	    if (boundary !== null) {
	      // Add to the collection of failed boundaries. This lets us know that
	      // subsequent errors in this subtree should propagate to the next boundary.
	      if (failedBoundaries === null) {
	        failedBoundaries = new Set();
	      }
	      failedBoundaries.add(boundary);

	      // This method is unsafe outside of the begin and complete phases.
	      // We might be in the commit phase when an error is captured.
	      // The risk is that the return path from this Fiber may not be accurate.
	      // That risk is acceptable given the benefit of providing users more context.
	      var _componentStack = getStackAddendumByWorkInProgressFiber$3(failedWork);
	      var _componentName2 = getComponentName_1(failedWork);

	      // Add to the collection of captured errors. This is stored as a global
	      // map of errors and their component stack location keyed by the boundaries
	      // that capture them. We mostly use this Map as a Set; it's a Map only to
	      // avoid adding a field to Fiber to store the error.
	      if (capturedErrors === null) {
	        capturedErrors = new Map();
	      }
	      capturedErrors.set(boundary, {
	        componentName: _componentName2,
	        componentStack: _componentStack,
	        error: error,
	        errorBoundary: errorBoundaryFound ? boundary.stateNode : null,
	        errorBoundaryFound: errorBoundaryFound,
	        errorBoundaryName: errorBoundaryName,
	        willRetry: willRetry
	      });

	      // If we're in the commit phase, defer scheduling an update on the
	      // boundary until after the commit is complete
	      if (isCommitting) {
	        if (commitPhaseBoundaries === null) {
	          commitPhaseBoundaries = new Set();
	        }
	        commitPhaseBoundaries.add(boundary);
	      } else {
	        // Otherwise, schedule an update now.
	        scheduleErrorRecovery(boundary);
	      }
	      return boundary;
	    } else if (firstUncaughtError === null) {
	      // If no boundary is found, we'll need to throw the error
	      firstUncaughtError = error;
	    }
	    return null;
	  }

	  function hasCapturedError(fiber) {
	    // TODO: capturedErrors should store the boundary instance, to avoid needing
	    // to check the alternate.
	    return capturedErrors !== null && (capturedErrors.has(fiber) || fiber.alternate !== null && capturedErrors.has(fiber.alternate));
	  }

	  function isFailedBoundary(fiber) {
	    // TODO: failedBoundaries should store the boundary instance, to avoid
	    // needing to check the alternate.
	    return failedBoundaries !== null && (failedBoundaries.has(fiber) || fiber.alternate !== null && failedBoundaries.has(fiber.alternate));
	  }

	  function commitErrorHandling(effectfulFiber) {
	    var capturedError = void 0;
	    if (capturedErrors !== null) {
	      capturedError = capturedErrors.get(effectfulFiber);
	      capturedErrors['delete'](effectfulFiber);
	      if (capturedError == null) {
	        if (effectfulFiber.alternate !== null) {
	          effectfulFiber = effectfulFiber.alternate;
	          capturedError = capturedErrors.get(effectfulFiber);
	          capturedErrors['delete'](effectfulFiber);
	        }
	      }
	    }

	    !(capturedError != null) ? invariant(false, 'No error for given unit of work. This error is likely caused by a bug in React. Please file an issue.') : void 0;

	    var error = capturedError.error;
	    try {
	      logCapturedError(capturedError);
	    } catch (e) {
	      // Prevent cycle if logCapturedError() throws.
	      // A cycle may still occur if logCapturedError renders a component that throws.
	      console.error(e);
	    }

	    switch (effectfulFiber.tag) {
	      case ClassComponent$4:
	        var instance = effectfulFiber.stateNode;

	        var info = {
	          componentStack: capturedError.componentStack
	        };

	        // Allow the boundary to handle the error, usually by scheduling
	        // an update to itself
	        instance.unstable_handleError(error, info);
	        return;
	      case HostRoot$4:
	        if (firstUncaughtError === null) {
	          // If this is the host container, we treat it as a no-op error
	          // boundary. We'll throw the first uncaught error once it's safe to
	          // do so, at the end of the batch.
	          firstUncaughtError = error;
	        }
	        return;
	      default:
	        invariant(false, 'Invalid type of work. This error is likely caused by a bug in React. Please file an issue.');
	    }
	  }

	  function unwindContexts(from, to) {
	    var node = from;
	    while (node !== null && node !== to && node.alternate !== to) {
	      switch (node.tag) {
	        case ClassComponent$4:
	          popContextProvider$1(node);
	          break;
	        case HostComponent$4:
	          popHostContext(node);
	          break;
	        case HostRoot$4:
	          popHostContainer(node);
	          break;
	        case HostPortal$2:
	          popHostContainer(node);
	          break;
	      }
	      {
	        stopWorkTimer(node);
	      }
	      node = node['return'];
	    }
	  }

	  function scheduleRoot(root, priorityLevel) {
	    if (priorityLevel === NoWork$2) {
	      return;
	    }

	    if (!root.isScheduled) {
	      root.isScheduled = true;
	      if (lastScheduledRoot) {
	        // Schedule ourselves to the end.
	        lastScheduledRoot.nextScheduledRoot = root;
	        lastScheduledRoot = root;
	      } else {
	        // We're the only work scheduled.
	        nextScheduledRoot = root;
	        lastScheduledRoot = root;
	      }
	    }
	  }

	  function scheduleUpdate(fiber, priorityLevel) {
	    {
	      recordScheduleUpdate();
	    }

	    if (priorityLevel <= nextPriorityLevel) {
	      // We must reset the current unit of work pointer so that we restart the
	      // search from the root during the next tick, in case there is now higher
	      // priority work somewhere earlier than before.
	      nextUnitOfWork = null;
	    }

	    {
	      if (fiber.tag === ClassComponent$4) {
	        var instance = fiber.stateNode;
	        warnAboutInvalidUpdates(instance);
	      }
	    }

	    var node = fiber;
	    var shouldContinue = true;
	    while (node !== null && shouldContinue) {
	      // Walk the parent path to the root and update each node's priority. Once
	      // we reach a node whose priority matches (and whose alternate's priority
	      // matches) we can exit safely knowing that the rest of the path is correct.
	      shouldContinue = false;
	      if (node.pendingWorkPriority === NoWork$2 || node.pendingWorkPriority > priorityLevel) {
	        // Priority did not match. Update and keep going.
	        shouldContinue = true;
	        node.pendingWorkPriority = priorityLevel;
	      }
	      if (node.alternate !== null) {
	        if (node.alternate.pendingWorkPriority === NoWork$2 || node.alternate.pendingWorkPriority > priorityLevel) {
	          // Priority did not match. Update and keep going.
	          shouldContinue = true;
	          node.alternate.pendingWorkPriority = priorityLevel;
	        }
	      }
	      if (node['return'] === null) {
	        if (node.tag === HostRoot$4) {
	          var root = node.stateNode;
	          scheduleRoot(root, priorityLevel);
	          // Depending on the priority level, either perform work now or
	          // schedule a callback to perform work later.
	          switch (priorityLevel) {
	            case SynchronousPriority$1:
	              performWork(SynchronousPriority$1, null);
	              return;
	            case TaskPriority$1:
	              // TODO: If we're not already performing work, schedule a
	              // deferred callback.
	              return;
	            case AnimationPriority:
	              scheduleAnimationCallback(performAnimationWork);
	              return;
	            case HighPriority:
	            case LowPriority:
	            case OffscreenPriority:
	              scheduleDeferredCallback(performDeferredWork);
	              return;
	          }
	        } else {
	          {
	            if (fiber.tag === ClassComponent$4) {
	              warnAboutUpdateOnUnmounted(fiber.stateNode);
	            }
	          }
	          return;
	        }
	      }
	      node = node['return'];
	    }
	  }

	  function getPriorityContext() {
	    // If we're in a batch, or if we're already performing work, downgrade sync
	    // priority to task priority
	    if (priorityContext === SynchronousPriority$1 && (isPerformingWork || isBatchingUpdates)) {
	      return TaskPriority$1;
	    }
	    return priorityContext;
	  }

	  function scheduleErrorRecovery(fiber) {
	    scheduleUpdate(fiber, TaskPriority$1);
	  }

	  function performWithPriority(priorityLevel, fn) {
	    var previousPriorityContext = priorityContext;
	    priorityContext = priorityLevel;
	    try {
	      fn();
	    } finally {
	      priorityContext = previousPriorityContext;
	    }
	  }

	  function batchedUpdates(fn, a) {
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    isBatchingUpdates = true;
	    try {
	      return fn(a);
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	      // If we're not already inside a batch, we need to flush any task work
	      // that was created by the user-provided function.
	      if (!isPerformingWork && !isBatchingUpdates) {
	        performWork(TaskPriority$1, null);
	      }
	    }
	  }

	  function unbatchedUpdates(fn) {
	    var previousIsBatchingUpdates = isBatchingUpdates;
	    isBatchingUpdates = false;
	    try {
	      return fn();
	    } finally {
	      isBatchingUpdates = previousIsBatchingUpdates;
	    }
	  }

	  function syncUpdates(fn) {
	    var previousPriorityContext = priorityContext;
	    priorityContext = SynchronousPriority$1;
	    try {
	      return fn();
	    } finally {
	      priorityContext = previousPriorityContext;
	    }
	  }

	  function deferredUpdates(fn) {
	    var previousPriorityContext = priorityContext;
	    priorityContext = LowPriority;
	    try {
	      return fn();
	    } finally {
	      priorityContext = previousPriorityContext;
	    }
	  }

	  return {
	    scheduleUpdate: scheduleUpdate,
	    getPriorityContext: getPriorityContext,
	    performWithPriority: performWithPriority,
	    batchedUpdates: batchedUpdates,
	    unbatchedUpdates: unbatchedUpdates,
	    syncUpdates: syncUpdates,
	    deferredUpdates: deferredUpdates
	  };
	};

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getContextForSubtree
	 * 
	 */

	var getContextFiber = function getContextFiber(arg) {
	  invariant(false, 'Missing injection for fiber getContextForSubtree');
	};

	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) {
	    return emptyObject;
	  }

	  var instance = ReactInstanceMap_1.get(parentComponent);
	  if (typeof instance.tag === 'number') {
	    return getContextFiber(instance);
	  } else {
	    return instance._processChildContext(instance._context);
	  }
	}

	getContextForSubtree._injectFiber = function (fn) {
	  getContextFiber = fn;
	};

	var getContextForSubtree_1 = getContextForSubtree;

	var addTopLevelUpdate = ReactFiberUpdateQueue.addTopLevelUpdate;

	var findCurrentUnmaskedContext = ReactFiberContext.findCurrentUnmaskedContext;
	var isContextProvider = ReactFiberContext.isContextProvider;
	var processChildContext = ReactFiberContext.processChildContext;

	var createFiberRoot = ReactFiberRoot.createFiberRoot;

	{
	  var warning$1 = warning;
	  var ReactFiberInstrumentation = ReactFiberInstrumentation_1;
	  var ReactDebugCurrentFiber = ReactDebugCurrentFiber_1;
	  var getComponentName = getComponentName_1;
	}

	var findCurrentHostFiber = ReactFiberTreeReflection.findCurrentHostFiber;

	getContextForSubtree_1._injectFiber(function (fiber) {
	  var parentContext = findCurrentUnmaskedContext(fiber);
	  return isContextProvider(fiber) ? processChildContext(fiber, parentContext, false) : parentContext;
	});

	var ReactFiberReconciler = function ReactFiberReconciler(config) {
	  var _ReactFiberScheduler = ReactFiberScheduler(config),
	      scheduleUpdate = _ReactFiberScheduler.scheduleUpdate,
	      getPriorityContext = _ReactFiberScheduler.getPriorityContext,
	      performWithPriority = _ReactFiberScheduler.performWithPriority,
	      batchedUpdates = _ReactFiberScheduler.batchedUpdates,
	      unbatchedUpdates = _ReactFiberScheduler.unbatchedUpdates,
	      syncUpdates = _ReactFiberScheduler.syncUpdates,
	      deferredUpdates = _ReactFiberScheduler.deferredUpdates;

	  function scheduleTopLevelUpdate(current$$1, element, callback) {
	    {
	      if (ReactDebugCurrentFiber.phase === 'render' && ReactDebugCurrentFiber.current !== null) {
	        warning$1(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(ReactDebugCurrentFiber.current) || 'Unknown');
	      }
	    }

	    var priorityLevel = getPriorityContext();
	    var nextState = { element: element };
	    callback = callback === undefined ? null : callback;
	    {
	      warning$1(callback === null || typeof callback === 'function', 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback);
	    }
	    addTopLevelUpdate(current$$1, nextState, callback, priorityLevel);
	    scheduleUpdate(current$$1, priorityLevel);
	  }

	  return {
	    createContainer: function createContainer(containerInfo) {
	      return createFiberRoot(containerInfo);
	    },
	    updateContainer: function updateContainer(element, container, parentComponent, callback) {
	      // TODO: If this is a nested container, this won't be the root.
	      var current$$1 = container.current;

	      {
	        if (ReactFiberInstrumentation.debugTool) {
	          if (current$$1.alternate === null) {
	            ReactFiberInstrumentation.debugTool.onMountContainer(container);
	          } else if (element === null) {
	            ReactFiberInstrumentation.debugTool.onUnmountContainer(container);
	          } else {
	            ReactFiberInstrumentation.debugTool.onUpdateContainer(container);
	          }
	        }
	      }

	      var context = getContextForSubtree_1(parentComponent);
	      if (container.context === null) {
	        container.context = context;
	      } else {
	        container.pendingContext = context;
	      }

	      scheduleTopLevelUpdate(current$$1, element, callback);
	    },

	    performWithPriority: performWithPriority,

	    batchedUpdates: batchedUpdates,

	    unbatchedUpdates: unbatchedUpdates,

	    syncUpdates: syncUpdates,

	    deferredUpdates: deferredUpdates,

	    getPublicRootInstance: function getPublicRootInstance(container) {
	      var containerFiber = container.current;
	      if (!containerFiber.child) {
	        return null;
	      }
	      return containerFiber.child.stateNode;
	    },
	    findHostInstance: function findHostInstance(fiber) {
	      var hostFiber = findCurrentHostFiber(fiber);
	      if (hostFiber === null) {
	        return null;
	      }
	      return hostFiber.stateNode;
	    }
	  };
	};

	// This a built-in polyfill for requestIdleCallback. It works by scheduling
	// a requestAnimationFrame, store the time for the start of the frame, then
	// schedule a postMessage which gets scheduled after paint. Within the
	// postMessage handler do as much work as possible until time + frame rate.
	// By separating the idle call into a separate event tick we ensure that
	// layout, paint and other browser work is counted against the available time.
	// The frame rate is dynamically adjusted.


	// TODO: There's no way to cancel these, because Fiber doesn't atm.
	var rAF = void 0;
	var rIC = void 0;
	if (typeof requestAnimationFrame !== 'function') {
	  invariant(false, 'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers.');
	} else if (typeof requestIdleCallback !== 'function') {
	  // Wrap requestAnimationFrame and polyfill requestIdleCallback.

	  var scheduledRAFCallback = null;
	  var scheduledRICCallback = null;

	  var isIdleScheduled = false;
	  var isAnimationFrameScheduled = false;

	  var frameDeadline = 0;
	  // We start out assuming that we run at 30fps but then the heuristic tracking
	  // will adjust this value to a faster fps if we get more frequent animation
	  // frames.
	  var previousFrameTime = 33;
	  var activeFrameTime = 33;

	  var frameDeadlineObject = {
	    timeRemaining: (typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) === 'object' && typeof performance.now === 'function' ? function () {
	      // We assume that if we have a performance timer that the rAF callback
	      // gets a performance timer value. Not sure if this is always true.
	      return frameDeadline - performance.now();
	    } : function () {
	      // As a fallback we use Date.now.
	      return frameDeadline - Date.now();
	    }
	  };

	  // We use the postMessage trick to defer idle work until after the repaint.
	  var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
	  var idleTick = function idleTick(event) {
	    if (event.source !== window || event.data !== messageKey) {
	      return;
	    }
	    isIdleScheduled = false;
	    var callback = scheduledRICCallback;
	    scheduledRICCallback = null;
	    if (callback) {
	      callback(frameDeadlineObject);
	    }
	  };
	  // Assumes that we have addEventListener in this environment. Might need
	  // something better for old IE.
	  window.addEventListener('message', idleTick, false);

	  var animationTick = function animationTick(rafTime) {
	    isAnimationFrameScheduled = false;
	    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
	    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
	      if (nextFrameTime < 8) {
	        // Defensive coding. We don't support higher frame rates than 120hz.
	        // If we get lower than that, it is probably a bug.
	        nextFrameTime = 8;
	      }
	      // If one frame goes long, then the next one can be short to catch up.
	      // If two frames are short in a row, then that's an indication that we
	      // actually have a higher frame rate than what we're currently optimizing.
	      // We adjust our heuristic dynamically accordingly. For example, if we're
	      // running on 120hz display or 90hz VR display.
	      // Take the max of the two in case one of them was an anomaly due to
	      // missed frame deadlines.
	      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
	    } else {
	      previousFrameTime = nextFrameTime;
	    }
	    frameDeadline = rafTime + activeFrameTime;
	    if (!isIdleScheduled) {
	      isIdleScheduled = true;
	      window.postMessage(messageKey, '*');
	    }
	    var callback = scheduledRAFCallback;
	    scheduledRAFCallback = null;
	    if (callback) {
	      callback(rafTime);
	    }
	  };

	  rAF = function rAF(callback) {
	    // This assumes that we only schedule one callback at a time because that's
	    // how Fiber uses it.
	    scheduledRAFCallback = callback;
	    if (!isAnimationFrameScheduled) {
	      // If rIC didn't already schedule one, we need to schedule a frame.
	      isAnimationFrameScheduled = true;
	      requestAnimationFrame(animationTick);
	    }
	    return 0;
	  };

	  rIC = function rIC(callback) {
	    // This assumes that we only schedule one callback at a time because that's
	    // how Fiber uses it.
	    scheduledRICCallback = callback;
	    if (!isAnimationFrameScheduled) {
	      // If rAF didn't already schedule one, we need to schedule a frame.
	      // TODO: If this rAF doesn't materialize because the browser throttles, we
	      // might want to still have setTimeout trigger rIC as a backup to ensure
	      // that we keep performing work.
	      isAnimationFrameScheduled = true;
	      requestAnimationFrame(animationTick);
	    }
	    return 0;
	  };
	} else {
	  rAF = requestAnimationFrame;
	  rIC = requestIdleCallback;
	}

	var rAF_1 = rAF;
	var rIC_1 = rIC;

	var ReactDOMFrameScheduling = {
	  rAF: rAF_1,
	  rIC: rIC_1
	};

	var _extends = objectAssign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	current.setCurrent(
	// Change to 'art/modes/dom' for easier debugging via SVG
	fastNoSideEffects);

	var Mode = current;

	var Component = react.Component;

	var pooledTransform = new transform$1();

	var EVENT_TYPES = {
	  onClick: 'click',
	  onMouseMove: 'mousemove',
	  onMouseOver: 'mouseover',
	  onMouseOut: 'mouseout',
	  onMouseUp: 'mouseup',
	  onMouseDown: 'mousedown'
	};

	var TYPES = {
	  CLIPPING_RECTANGLE: 'ClippingRectangle',
	  GROUP: 'Group',
	  SHAPE: 'Shape',
	  TEXT: 'Text'
	};

	var UPDATE_SIGNAL = {};

	/** Helper Methods */

	function addEventListeners(instance, type, listener) {
	  // We need to explicitly unregister before unmount.
	  // For this reason we need to track subscriptions.
	  if (!instance._listeners) {
	    instance._listeners = {};
	    instance._subscriptions = {};
	  }

	  instance._listeners[type] = listener;

	  if (listener) {
	    if (!instance._subscriptions[type]) {
	      instance._subscriptions[type] = instance.subscribe(type, createEventHandler(instance), instance);
	    }
	  } else {
	    if (instance._subscriptions[type]) {
	      instance._subscriptions[type]();
	      delete instance._subscriptions[type];
	    }
	  }
	}

	function childrenAsString(children) {
	  if (!children) {
	    return '';
	  } else if (typeof children === 'string') {
	    return children;
	  } else if (children.length) {
	    return children.join('');
	  } else {
	    return '';
	  }
	}

	function createEventHandler(instance) {
	  return function handleEvent(event) {
	    var listener = instance._listeners[event.type];

	    if (!listener) {
	      // Noop
	    } else if (typeof listener === 'function') {
	      listener.call(instance, event);
	    } else if (listener.handleEvent) {
	      listener.handleEvent(event);
	    }
	  };
	}

	function destroyEventListeners(instance) {
	  if (instance._subscriptions) {
	    for (var type in instance._subscriptions) {
	      instance._subscriptions[type]();
	    }
	  }

	  instance._subscriptions = null;
	  instance._listeners = null;
	}

	function getScaleX(props) {
	  if (props.scaleX != null) {
	    return props.scaleX;
	  } else if (props.scale != null) {
	    return props.scale;
	  } else {
	    return 1;
	  }
	}

	function getScaleY(props) {
	  if (props.scaleY != null) {
	    return props.scaleY;
	  } else if (props.scale != null) {
	    return props.scale;
	  } else {
	    return 1;
	  }
	}

	function isSameFont(oldFont, newFont) {
	  if (oldFont === newFont) {
	    return true;
	  } else if (typeof newFont === 'string' || typeof oldFont === 'string') {
	    return false;
	  } else {
	    return newFont.fontSize === oldFont.fontSize && newFont.fontStyle === oldFont.fontStyle && newFont.fontVariant === oldFont.fontVariant && newFont.fontWeight === oldFont.fontWeight && newFont.fontFamily === oldFont.fontFamily;
	  }
	}

	/** Render Methods */

	function applyClippingRectangleProps(instance, props) {
	  var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  applyNodeProps(instance, props, prevProps);

	  instance.width = props.width;
	  instance.height = props.height;
	}

	function applyGroupProps(instance, props) {
	  var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  applyNodeProps(instance, props, prevProps);

	  instance.width = props.width;
	  instance.height = props.height;
	}

	function applyNodeProps(instance, props) {
	  var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var scaleX = getScaleX(props);
	  var scaleY = getScaleY(props);

	  pooledTransform.transformTo(1, 0, 0, 1, 0, 0).move(props.x || 0, props.y || 0).rotate(props.rotation || 0, props.originX, props.originY).scale(scaleX, scaleY, props.originX, props.originY);

	  if (props.transform != null) {
	    pooledTransform.transform(props.transform);
	  }

	  if (instance.xx !== pooledTransform.xx || instance.yx !== pooledTransform.yx || instance.xy !== pooledTransform.xy || instance.yy !== pooledTransform.yy || instance.x !== pooledTransform.x || instance.y !== pooledTransform.y) {
	    instance.transformTo(pooledTransform);
	  }

	  if (props.cursor !== prevProps.cursor || props.title !== prevProps.title) {
	    instance.indicate(props.cursor, props.title);
	  }

	  if (instance.blend && props.opacity !== prevProps.opacity) {
	    instance.blend(props.opacity == null ? 1 : props.opacity);
	  }

	  if (props.visible !== prevProps.visible) {
	    if (props.visible == null || props.visible) {
	      instance.show();
	    } else {
	      instance.hide();
	    }
	  }

	  for (var type in EVENT_TYPES) {
	    addEventListeners(instance, EVENT_TYPES[type], props[type]);
	  }
	}

	function applyRenderableNodeProps(instance, props) {
	  var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  applyNodeProps(instance, props, prevProps);

	  if (prevProps.fill !== props.fill) {
	    if (props.fill && props.fill.applyFill) {
	      props.fill.applyFill(instance);
	    } else {
	      instance.fill(props.fill);
	    }
	  }
	  if (prevProps.stroke !== props.stroke || prevProps.strokeWidth !== props.strokeWidth || prevProps.strokeCap !== props.strokeCap || prevProps.strokeJoin !== props.strokeJoin ||
	  // TODO: Consider deep check of stokeDash; may benefit VML in IE.
	  prevProps.strokeDash !== props.strokeDash) {
	    instance.stroke(props.stroke, props.strokeWidth, props.strokeCap, props.strokeJoin, props.strokeDash);
	  }
	}

	function applyShapeProps(instance, props) {
	  var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  applyRenderableNodeProps(instance, props, prevProps);

	  var path = props.d || childrenAsString(props.children);

	  var prevDelta = instance._prevDelta;
	  var prevPath = instance._prevPath;

	  if (path !== prevPath || path.delta !== prevDelta || prevProps.height !== props.height || prevProps.width !== props.width) {
	    instance.draw(path, props.width, props.height);

	    instance._prevDelta = path.delta;
	    instance._prevPath = path;
	  }
	}

	function applyTextProps(instance, props) {
	  var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  applyRenderableNodeProps(instance, props, prevProps);

	  var string = props.children;

	  if (instance._currentString !== string || !isSameFont(props.font, prevProps.font) || props.alignment !== prevProps.alignment || props.path !== prevProps.path) {
	    instance.draw(string, props.font, props.alignment, props.path);

	    instance._currentString = string;
	  }
	}

	/** Declarative fill-type objects; API design not finalized */

	var slice = Array.prototype.slice;

	var LinearGradient = function () {
	  function LinearGradient(stops, x1, y1, x2, y2) {
	    _classCallCheck(this, LinearGradient);

	    this._args = slice.call(arguments);
	  }

	  LinearGradient.prototype.applyFill = function applyFill(node) {
	    node.fillLinear.apply(node, this._args);
	  };

	  return LinearGradient;
	}();

	var RadialGradient = function () {
	  function RadialGradient(stops, fx, fy, rx, ry, cx, cy) {
	    _classCallCheck(this, RadialGradient);

	    this._args = slice.call(arguments);
	  }

	  RadialGradient.prototype.applyFill = function applyFill(node) {
	    node.fillRadial.apply(node, this._args);
	  };

	  return RadialGradient;
	}();

	var Pattern = function () {
	  function Pattern(url, width, height, left, top) {
	    _classCallCheck(this, Pattern);

	    this._args = slice.call(arguments);
	  }

	  Pattern.prototype.applyFill = function applyFill(node) {
	    node.fillImage.apply(node, this._args);
	  };

	  return Pattern;
	}();

	/** React Components */

	var Surface = function (_Component) {
	  _inherits(Surface, _Component);

	  function Surface() {
	    _classCallCheck(this, Surface);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Surface.prototype.componentDidMount = function componentDidMount() {
	    var _props = this.props,
	        height = _props.height,
	        width = _props.width;

	    this._surface = Mode.Surface(+width, +height, this._tagRef);

	    this._mountNode = ARTRenderer.createContainer(this._surface);
	    ARTRenderer.updateContainer(this.props.children, this._mountNode, this);
	  };

	  Surface.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    var props = this.props;

	    if (props.height !== prevProps.height || props.width !== prevProps.width) {
	      this._surface.resize(+props.width, +props.height);
	    }

	    ARTRenderer.updateContainer(this.props.children, this._mountNode, this);

	    if (this._surface.render) {
	      this._surface.render();
	    }
	  };

	  Surface.prototype.componentWillUnmount = function componentWillUnmount() {
	    ARTRenderer.updateContainer(null, this._mountNode, this);
	  };

	  Surface.prototype.render = function render() {
	    var _this2 = this;

	    // This is going to be a placeholder because we don't know what it will
	    // actually resolve to because ART may render canvas, vml or svg tags here.
	    // We only allow a subset of properties since others might conflict with
	    // ART's properties.
	    var props = this.props;

	    // TODO: ART's Canvas Mode overrides surface title and cursor
	    var Tag = Mode.Surface.tagName;

	    return react.createElement(Tag, {
	      ref: function ref(_ref) {
	        return _this2._tagRef = _ref;
	      },
	      accessKey: props.accessKey,
	      className: props.className,
	      draggable: props.draggable,
	      role: props.role,
	      style: props.style,
	      tabIndex: props.tabIndex,
	      title: props.title
	    });
	  };

	  return Surface;
	}(Component);

	var Text = function (_React$Component) {
	  _inherits(Text, _React$Component);

	  function Text(props) {
	    _classCallCheck(this, Text);

	    // We allow reading these props. Ideally we could expose the Text node as
	    // ref directly.
	    var _this3 = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    ['height', 'width', 'x', 'y'].forEach(function (key) {
	      Object.defineProperty(_this3, key, {
	        get: function get() {
	          return this._text ? this._text[key] : undefined;
	        }
	      });
	    });
	    return _this3;
	  }

	  Text.prototype.render = function render() {
	    var _this4 = this;

	    // This means you can't have children that render into strings...
	    var T = TYPES.TEXT;
	    return react.createElement(T, _extends({}, this.props, { ref: function ref(t) {
	        return _this4._text = t;
	      } }), childrenAsString(this.props.children));
	  };

	  return Text;
	}(react.Component);

	/** ART Renderer */

	var ARTRenderer = ReactFiberReconciler({
	  appendChild: function appendChild(parentInstance, child) {
	    if (child.parentNode === parentInstance) {
	      child.eject();
	    }

	    child.inject(parentInstance);
	  },
	  appendInitialChild: function appendInitialChild(parentInstance, child) {
	    if (typeof child === 'string') {
	      // Noop for string children of Text (eg <Text>{'foo'}{'bar'}</Text>)
	      invariant(false, 'Text children should already be flattened.');
	      return;
	    }

	    child.inject(parentInstance);
	  },
	  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
	    // Noop
	  },
	  commitMount: function commitMount(instance, type, newProps) {
	    // Noop
	  },
	  commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
	    instance._applyProps(instance, newProps, oldProps);
	  },
	  createInstance: function createInstance(type, props, internalInstanceHandle) {
	    var instance = void 0;

	    switch (type) {
	      case TYPES.CLIPPING_RECTANGLE:
	        instance = Mode.ClippingRectangle();
	        instance._applyProps = applyClippingRectangleProps;
	        break;
	      case TYPES.GROUP:
	        instance = Mode.Group();
	        instance._applyProps = applyGroupProps;
	        break;
	      case TYPES.SHAPE:
	        instance = Mode.Shape();
	        instance._applyProps = applyShapeProps;
	        break;
	      case TYPES.TEXT:
	        instance = Mode.Text(props.children, props.font, props.alignment, props.path);
	        instance._applyProps = applyTextProps;
	        break;
	    }

	    !instance ? invariant(false, 'ReactART does not support the type "%s"', type) : void 0;

	    instance._applyProps(instance, props);

	    return instance;
	  },
	  createTextInstance: function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
	    return text;
	  },
	  finalizeInitialChildren: function finalizeInitialChildren(domElement, type, props) {
	    return false;
	  },
	  getPublicInstance: function getPublicInstance(instance) {
	    return instance;
	  },
	  insertBefore: function insertBefore(parentInstance, child, beforeChild) {
	    !(child !== beforeChild) ? invariant(false, 'ReactART: Can not insert node before itself') : void 0;

	    child.injectBefore(beforeChild);
	  },
	  prepareForCommit: function prepareForCommit() {
	    // Noop
	  },
	  prepareUpdate: function prepareUpdate(domElement, type, oldProps, newProps) {
	    return UPDATE_SIGNAL;
	  },
	  removeChild: function removeChild(parentInstance, child) {
	    destroyEventListeners(child);

	    child.eject();
	  },
	  resetAfterCommit: function resetAfterCommit() {
	    // Noop
	  },
	  resetTextContent: function resetTextContent(domElement) {
	    // Noop
	  },
	  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(type, props) {
	    return false;
	  },
	  getRootHostContext: function getRootHostContext() {
	    return emptyObject;
	  },
	  getChildHostContext: function getChildHostContext() {
	    return emptyObject;
	  },

	  scheduleAnimationCallback: ReactDOMFrameScheduling.rAF,

	  scheduleDeferredCallback: ReactDOMFrameScheduling.rIC,

	  shouldSetTextContent: function shouldSetTextContent(props) {
	    return typeof props.children === 'string' || typeof props.children === 'number';
	  },

	  useSyncScheduling: true
	});

	/** API */

	var ReactARTFiber = {
	  ClippingRectangle: TYPES.CLIPPING_RECTANGLE,
	  Group: TYPES.GROUP,
	  LinearGradient: LinearGradient,
	  Path: Mode.Path,
	  Pattern: Pattern,
	  RadialGradient: RadialGradient,
	  Shape: TYPES.SHAPE,
	  Surface: Surface,
	  Text: Text,
	  Transform: transform$1
	};

	module.exports = ReactARTFiber;

/***/ },
/* 30 */
/***/ function(module, exports) {

	function warning(){
		throw new Error('You must require a mode before requiring anything else.');
	}

	exports.Surface = warning;
	exports.Path = warning;
	exports.Shape = warning;
	exports.Group = warning;
	exports.ClippingRectangle = warning;
	exports.Text = warning;

	exports.setCurrent = function(mode){
		for (var key in mode){
			exports[key] = mode[key];
		}
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var hasCanvas = function(){

	  var canvas = document.createElement('canvas');
	  return canvas && !!canvas.getContext;

	};

	if (hasCanvas()) {
	  exports.Surface = __webpack_require__(32);
	  exports.Path = __webpack_require__(36);
	  exports.Shape = __webpack_require__(38);
	  exports.Group = __webpack_require__(44);
	  exports.ClippingRectangle = __webpack_require__(45);
	  exports.Text = __webpack_require__(46);
	} else {
	  exports.Surface = __webpack_require__(47);
	  exports.Path = __webpack_require__(49);
	  exports.Shape = __webpack_require__(50);
	  exports.Group = __webpack_require__(54);
	  exports.ClippingRectangle = __webpack_require__(55);
	  exports.Text = __webpack_require__(56);

	  var DOM = __webpack_require__(48);
	  if (typeof document !== 'undefined') DOM.init(document);
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Container = __webpack_require__(34);
	var Element = __webpack_require__(35);

	var fps = 1000 / 60, invalids = [], renderTimer, renderInvalids = function(){
		clearTimeout(renderTimer);
		renderTimer = null;
		var canvases = invalids;
		invalids = [];
		for (var i = 0, l = canvases.length; i < l; i++){
			var c = canvases[i];
			c._valid = true;
			c.render();
		}
	};

	var resolution = typeof window !== 'undefined' && window.devicePixelRatio || 1;

	var previousHit = null, previousHitSurface = null;

	var CanvasSurface = Class(Element, Container, {

		initialize: function(width, height, existingElement){
			var element = this.element = existingElement || document.createElement('canvas');
			var context = this.context = element.getContext('2d');
			this._valid = true;
			if (width != null && height != null) this.resize(width, height);

			element.addEventListener('mousemove', this, false);
			element.addEventListener('mouseout', this, false);
			element.addEventListener('mouseover', this, false);
			element.addEventListener('mouseup', this, false);
			element.addEventListener('mousedown', this, false);
			element.addEventListener('click', this, false);
		},

		handleEvent: function(event){
			if (event.clientX == null) return;
			var element = this.element,
				rect = element.getBoundingClientRect(),
				x = event.clientX - rect.left - element.clientLeft,
				y = event.clientY - rect.top - element.clientTop,
				hit = this.hitTest(x, y);

			if (hit !== previousHit){
				if (previousHit){
					previousHit.dispatch({
						type: 'mouseout',
						target: previousHit,
						relatedTarget: hit,
						sourceEvent: event
					});
				}
				if (hit){
					hit.dispatch({
						type: 'mouseover',
						target: hit,
						relatedTarget: previousHit,
						sourceEvent: event
					});
				}
				previousHit = hit;
				previousHitSurface = this;
				this.refreshCursor();
			}

			if (hit) hit.dispatch(event);
		},

		refreshCursor: function(){
			if (previousHitSurface !== this) return;
			var hit = previousHit, hitCursor = '', hitTooltip = '';
			while (hit){
				if (!hitCursor && hit._cursor){
					hitCursor = hit._cursor;
					if (hitTooltip) break;
				}
				if (!hitTooltip && hit._tooltip){
					hitTooltip = hit._tooltip;
					if (hitCursor) break;
				}
				hit = hit.parentNode;
			}
			// TODO: No way to set cursor/title on the surface
			this.element.style.cursor = hitCursor;
			this.element.title = hitTooltip;
		},

		resize: function(width, height){
			var element = this.element;
			element.setAttribute('width', width * resolution);
			element.setAttribute('height', height * resolution);
			element.style.width = width + 'px';
			element.style.height = height + 'px';
			this.width = width;
			this.height = height;
			return this;
		},

		invalidate: function(left, top, width, height){
			if (this._valid){
				this._valid = false;
				invalids.push(this);
				if (!renderTimer){
					if (window.mozRequestAnimationFrame){
						renderTimer = true;
						window.mozRequestAnimationFrame(renderInvalids);
					} else {
						renderTimer = setTimeout(renderInvalids, fps);
					}
				}
			}
			return this;
		},

		hitTest: function(x, y){
			if (x < 0 || y < 0 || x > this.width || y > this.height) return null;
			var node = this.lastChild;
			while (node){
				var hit = node.hitTest(x, y);
				if (hit) return hit;
				node = node.previousSibling;
			}
			return null;
		},

		render: function(){
			var node = this.firstChild, context = this.context;
			context.setTransform(resolution, 0, 0, resolution, 0, 0);
			context.clearRect(0, 0, this.width, this.height);
			while (node){
				node.renderTo(context, resolution, 0, 0, resolution, 0, 0);
				node = node.nextSibling;
			}
			this.refreshCursor();
		}

	});

	CanvasSurface.tagName = 'canvas';

	module.exports = CanvasSurface;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(mixins){
		var proto = {};
		for (var i = 0, l = arguments.length; i < l; i++){
			var mixin = arguments[i];
			if (typeof mixin == 'function') mixin = mixin.prototype;
			for (var key in mixin) proto[key] = mixin[key];
		}
		if (!proto.initialize) proto.initialize = function(){};
		proto.constructor = function(a,b,c,d,e,f,g,h){
			return new proto.initialize(a,b,c,d,e,f,g,h);
		};
		proto.constructor.prototype = proto.initialize.prototype = proto;
		return proto.constructor;
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);

	module.exports = Class({

		grab: function(){
			for (var i = 0; i < arguments.length; i++) arguments[i].inject(this);
			return this;
		},

		empty: function(){
			var node;
			while (node = this.firstChild) node.eject();
			return this;
		}

	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);

	function elementFrom(node){
		if (node.toElement) return node.toElement();
		if (node.getDOMNode) return node.getDOMNode();
		if (node.getNode) return node.getNode();
		return node;
	}

	module.exports = Class({

		// conventions

		toElement: function(){
			return this.element;
		},

		getDOMNode: function(){
			return this.toElement();
		},

		getNode: function(){
			return this.toElement();
		},

		// placement

		inject: function(container){
			(container.containerElement || elementFrom(container))
				.appendChild(this.element);
			return this;
		},

		injectBefore: function(sibling){
			var element = elementFrom(sibling);
			element.parentNode.insertBefore(this.element, element);
			return this;
		},

		eject: function(){
			var element = this.element, parent = element.parentNode;
			if (parent) parent.removeChild(element); // TODO: VML Nodes are dead after being ejected
			return this;
		},

		// events

		subscribe: function(type, fn, bind){
			if (typeof type != 'string'){ // listen type / fn with object
				var subscriptions = [];
				for (var t in type) subscriptions.push(this.subscribe(t, type[t]));
				return function(){ // unsubscribe
					for (var i = 0, l = subscriptions.length; i < l; i++)
						subscriptions[i]();
					return this;
				};
			} else { // listen to one
				if (!bind) bind = this;
				var bound;
				if (typeof fn === 'function'){
					bound = fn.bind ? fn.bind(bind)
						: function(){ return fn.apply(bind, arguments); };
				} else {
					bound = fn;
				}
				var element = this.element;
				if (element.addEventListener){
					element.addEventListener(type, bound, false);
					return function(){ // unsubscribe
						element.removeEventListener(type, bound, false);
						return this;
					};
				} else {
					element.attachEvent('on' + type, bound);
					return function(){ // unsubscribe
						element.detachEvent('on' + type, bound);
						return this;
					};
				}
			}
		}

	});


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Path = __webpack_require__(37);

	var CanvasPath = Class(Path, {

		initialize: function(path){
			this.reset();
			if (path instanceof CanvasPath){
				this.path = path.path.slice(0);
			} else if (path){
				if (path.applyToPath)
					path.applyToPath(this);
				else
					this.push(path);
			}
		},

		onReset: function(){
			this.path = [];
		},

		onMove: function(sx, sy, x, y){
			this.path.push(function(context){
				context.moveTo(x, y);
			});
		},

		onLine: function(sx, sy, x, y){
			this.path.push(function(context){
				context.lineTo(x, y);
			});
		},

		onBezierCurve: function(sx, sy, p1x, p1y, p2x, p2y, x, y){
			this.path.push(function(context){
				context.bezierCurveTo(p1x, p1y, p2x, p2y, x, y);
			});
		},

		_arcToBezier: Path.prototype.onArc,

		onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation){
			if (rx != ry || rotation) return this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
			this.path.push(function(context){
				context.arc(cx, cy, rx, sa, ea, ccw);
			});
		},

		onClose: function(){
			this.path.push(function(context){
				context.closePath();
			});
		},

		toCommands: function(){
			return this.path.slice(0);
		}

	});

	module.exports = CanvasPath;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);

	module.exports = Class({
		
		initialize: function(path){
			this.reset().push(path);
		},

		/* parser */
		
		push: function(){
			var p = Array.prototype.join.call(arguments, ' ')
				.match(/[a-df-z]|[\-+]?(?:[\d\.]e[\-+]?|[^\s\-+,a-z])+/ig);
			if (!p) return this;

			var last, cmd = p[0], i = 1;
			while (cmd){
				switch (cmd){
					case 'm': this.move(p[i++], p[i++]); break;
					case 'l': this.line(p[i++], p[i++]); break;
					case 'c': this.curve(p[i++], p[i++], p[i++], p[i++], p[i++], p[i++]); break;
					case 's': this.curve(p[i++], p[i++], null, null, p[i++], p[i++]); break;
					case 'q': this.curve(p[i++], p[i++], p[i++], p[i++]); break;
					case 't': this.curve(p[i++], p[i++]); break;
					case 'a': this.arc(p[i+5], p[i+6], p[i], p[i+1], p[i+3], !+p[i+4], p[i+2]); i += 7; break;
					case 'h': this.line(p[i++], 0); break;
					case 'v': this.line(0, p[i++]); break;

					case 'M': this.moveTo(p[i++], p[i++]); break;
					case 'L': this.lineTo(p[i++], p[i++]); break;
					case 'C': this.curveTo(p[i++], p[i++], p[i++], p[i++], p[i++], p[i++]); break;
					case 'S': this.curveTo(p[i++], p[i++], null, null, p[i++], p[i++]); break;
					case 'Q': this.curveTo(p[i++], p[i++], p[i++], p[i++]); break;
					case 'T': this.curveTo(p[i++], p[i++]); break;
					case 'A': this.arcTo(p[i+5], p[i+6], p[i], p[i+1], p[i+3], !+p[i+4], p[i+2]); i += 7; break;
					case 'H': this.lineTo(p[i++], this.penY); break;
					case 'V': this.lineTo(this.penX, p[i++]); break;
					
					case 'Z': case 'z': this.close(); break;
					default: cmd = last; i--; continue;
				}

				last = cmd;
				if (last == 'm') last = 'l';
				else if (last == 'M') last = 'L';
				cmd = p[i++];
			}
			return this;
		},

		/* utility methods */

		reset: function(){
			this.penX = this.penY = 0;
			this.penDownX = this.penDownY = null;
			this._pivotX = this._pivotY = 0;
			this.onReset();
			return this;
		},
		
		move: function(x,y){
			this.onMove(this.penX, this.penY, this._pivotX = this.penX += (+x), this._pivotY = this.penY += (+y));
			return this;
		},
		moveTo: function(x,y){
			this.onMove(this.penX, this.penY, this._pivotX = this.penX = (+x), this._pivotY = this.penY = (+y));
			return this;
		},

		line: function(x,y){
			return this.lineTo(this.penX + (+x), this.penY + (+y));
		},
		lineTo: function(x,y){
			if (this.penDownX == null){ this.penDownX = this.penX; this.penDownY = this.penY; }
			this.onLine(this.penX, this.penY, this._pivotX = this.penX = (+x), this._pivotY = this.penY = (+y));
			return this;
		},
		
		curve: function(c1x, c1y, c2x, c2y, ex, ey){
			var x = this.penX, y = this.penY;
			return this.curveTo(
				x + (+c1x), y + (+c1y),
				c2x == null ? null : x + (+c2x),
				c2y == null ? null : y + (+c2y),
				ex == null ? null : x + (+ex),
				ey == null ? null : y + (+ey)
			);
		},
		curveTo: function(c1x, c1y, c2x, c2y, ex, ey){
			var x = this.penX, y = this.penY;
			if (c2x == null){
				c2x = +c1x; c2y = +c1y;
				c1x = (x * 2) - (this._pivotX || 0); c1y = (y * 2) - (this._pivotY || 0);
			}
			if (ex == null){
				this._pivotX = +c1x; this._pivotY = +c1y;
				ex = +c2x; ey = +c2y;
				c2x = (ex + (+c1x) * 2) / 3; c2y = (ey + (+c1y) * 2) / 3;
				c1x = (x + (+c1x) * 2) / 3; c1y = (y + (+c1y) * 2) / 3;
			} else {
				this._pivotX = +c2x; this._pivotY = +c2y;
			}
			if (this.penDownX == null){ this.penDownX = x; this.penDownY = y; }
			this.onBezierCurve(x, y, +c1x, +c1y, +c2x, +c2y, this.penX = +ex, this.penY = +ey);
			return this;
		},
		
		arc: function(x, y, rx, ry, outer, counterClockwise, rotation){
			return this.arcTo(this.penX + (+x), this.penY + (+y), rx, ry, outer, counterClockwise, rotation);
		},
		arcTo: function(x, y, rx, ry, outer, counterClockwise, rotation){
			ry = Math.abs(+ry || +rx || (+y - this.penY));
			rx = Math.abs(+rx || (+x - this.penX));

			if (!rx || !ry || (x == this.penX && y == this.penY)) return this.lineTo(x, y);

			var tX = this.penX, tY = this.penY, clockwise = !+counterClockwise, large = !!+outer;

			var rad = rotation ? rotation * Math.PI / 180 : 0, cos = Math.cos(rad), sin = Math.sin(rad);
			x -= tX; y -= tY;
			
			// Ellipse Center
			var cx = cos * x / 2 + sin * y / 2,
				cy = -sin * x / 2 + cos * y / 2,
				rxry = rx * rx * ry * ry,
				rycx = ry * ry * cx * cx,
				rxcy = rx * rx * cy * cy,
				a = rxry - rxcy - rycx;

			if (a < 0){
				a = Math.sqrt(1 - a / rxry);
				rx *= a; ry *= a;
				cx = x / 2; cy = y / 2;
			} else {
				a = Math.sqrt(a / (rxcy + rycx));
				if (large == clockwise) a = -a;
				var cxd = -a * cy * rx / ry,
				    cyd =  a * cx * ry / rx;
				cx = cos * cxd - sin * cyd + x / 2;
				cy = sin * cxd + cos * cyd + y / 2;
			}

			// Rotation + Scale Transform
			var xx =  cos / rx, yx = sin / rx,
			    xy = -sin / ry, yy = cos / ry;

			// Start and End Angle
			var sa = Math.atan2(xy * -cx + yy * -cy, xx * -cx + yx * -cy),
			    ea = Math.atan2(xy * (x - cx) + yy * (y - cy), xx * (x - cx) + yx * (y - cy));

			cx += tX; cy += tY;
			x += tX; y += tY;

			// Circular Arc
			if (this.penDownX == null){ this.penDownX = this.penX; this.penDownY = this.penY; }
			this.onArc(
				tX, tY, this._pivotX = this.penX = x, this._pivotY = this.penY = y,
				cx, cy, rx, ry, sa, ea, !clockwise, rotation
			);
			return this;
		},

		counterArc: function(x, y, rx, ry, outer){
			return this.arc(x, y, rx, ry, outer, true);
		},
		counterArcTo: function(x, y, rx, ry, outer){
			return this.arcTo(x, y, rx, ry, outer, true);
		},

		close: function(){
			if (this.penDownX != null){
				this.onClose(this.penX, this.penY, this.penX = this.penDownX, this.penY = this.penDownY);
				this.penDownX = null;
			}
			return this;
		},

		/* overridable handlers */
		
		onReset: function(){
		},

		onMove: function(sx, sy, ex, ey){
		},

		onLine: function(sx, sy, ex, ey){
			this.onBezierCurve(sx, sy, sx, sy, ex, ey, ex, ey);
		},

		onBezierCurve: function(sx, sy, c1x, c1y, c2x, c2y, ex, ey){
			var gx = ex - sx, gy = ey - sy,
				g = gx * gx + gy * gy,
				v1, v2, cx, cy, u;

			cx = c1x - sx; cy = c1y - sy;
			u = cx * gx + cy * gy;

			if (u > g){
				cx -= gx;
				cy -= gy;
			} else if (u > 0 && g != 0){
				cx -= u/g * gx;
				cy -= u/g * gy;
			}

			v1 = cx * cx + cy * cy;

			cx = c2x - sx; cy = c2y - sy;
			u = cx * gx + cy * gy;

			if (u > g){
				cx -= gx;
				cy -= gy;
			} else if (u > 0 && g != 0){
				cx -= u/g * gx;
				cy -= u/g * gy;
			}

			v2 = cx * cx + cy * cy;

			if (v1 < 0.01 && v2 < 0.01){
				this.onLine(sx, sy, ex, ey);
				return;
			}

			// Avoid infinite recursion
			if (isNaN(v1) || isNaN(v2)){
				throw new Error('Bad input');
			}

			// Split curve
			var s1x =   (c1x + c2x) * 0.5,   s1y =   (c1y + c2y) * 0.5,
			    l1x =   (c1x + sx)  * 0.5,   l1y =   (c1y + sy)  * 0.5,
			    l2x =   (l1x + s1x) * 0.5,   l2y =   (l1y + s1y) * 0.5,
			    r2x =   (ex + c2x)  * 0.5,   r2y =   (ey + c2y)  * 0.5,
			    r1x =   (r2x + s1x) * 0.5,   r1y =   (r2y + s1y) * 0.5,
			    l2r1x = (l2x + r1x) * 0.5,   l2r1y = (l2y + r1y) * 0.5;

			// TODO: Manual stack if necessary. Currently recursive without tail optimization.
			this.onBezierCurve(sx, sy, l1x, l1y, l2x, l2y, l2r1x, l2r1y);
			this.onBezierCurve(l2r1x, l2r1y, r1x, r1y, r2x, r2y, ex, ey);
		},

		onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation){
			// Inverse Rotation + Scale Transform
			var rad = rotation ? rotation * Math.PI / 180 : 0, cos = Math.cos(rad), sin = Math.sin(rad),
				xx = cos * rx, yx = -sin * ry,
			    xy = sin * rx, yy =  cos * ry;

			// Bezier Curve Approximation
			var arc = ea - sa;
			if (arc < 0 && !ccw) arc += Math.PI * 2;
			else if (arc > 0 && ccw) arc -= Math.PI * 2;

			var n = Math.ceil(Math.abs(arc / (Math.PI / 2))),
			    step = arc / n,
			    k = (4 / 3) * Math.tan(step / 4);

			var x = Math.cos(sa), y = Math.sin(sa);

			for (var i = 0; i < n; i++){
				var cp1x = x - k * y, cp1y = y + k * x;

				sa += step;
				x = Math.cos(sa); y = Math.sin(sa);

				var cp2x = x + k * y, cp2y = y - k * x;

				this.onBezierCurve(
					sx, sy,
					cx + xx * cp1x + yx * cp1y, cy + xy * cp1x + yy * cp1y,
					cx + xx * cp2x + yx * cp2y, cy + xy * cp2x + yy * cp2y,
					(sx = (cx + xx * x + yx * y)), (sy = (cy + xy * x + yy * y))
				);
			}
		},

		onClose: function(sx, sy, ex, ey){
			this.onLine(sx, sy, ex, ey);
		}

	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Base = __webpack_require__(39);
	var Path = __webpack_require__(36);

	module.exports = Class(Base, {

		base_initialize: Base.prototype.initialize,

		initialize: function(path, width, height){
			this.base_initialize();
			this.width = width;
			this.height = height;
			if (path != null) this.draw(path);
		},

		draw: function(path, width, height){
			if (!(path instanceof Path)) path = new Path(path);
			this.path = path;
			this._commands = path.toCommands();
			if (width != null) this.width = width;
			if (height != null) this.height = height;
			return this.invalidate();
		},

		localHitTest: function(x, y){
			if (!this._fill) return null;
			if (this.width == null || this.height == null){
				var context = Base._genericContext, commands = this._commands;
				if (!commands) return null;
				context.beginPath();
				for (var i = 0, l = commands.length; i < l; i++)
					commands[i](context);
				return context.isPointInPath(x, y) ? this : null;
			}
			if (x > 0 && y > 0 && x < this.width && y < this.height){
				return this;
			}
			return null;
		},

		renderShapeTo: function(context){
			if (this._invisible || !this._commands || (!this._fill && !this._stroke)) {
				return null;
			}
			context.transform(this.xx, this.yx, this.xy, this.yy, this.x, this.y);
			var commands = this._commands,
			    fill = this._fill,
			    stroke = this._stroke,
			    dash = this._strokeDash;

			context.beginPath();

			if (dash) {
				if (context.setLineDash) {
					context.setLineDash(dash);
				} else {
					// TODO: Remove when FF supports setLineDash.
					context.mozDash = dash;
				}
				// TODO: Create fallback to other browsers.
			} else {
				if (context.setLineDash) {
					context.setLineDash([]);
				} else {
					context.mozDash = null;
				}
			}

			for (var i = 0, l = commands.length; i < l; i++)
				commands[i](context);

			if (fill){
				var m = this._fillTransform;
				if (m){
					context.save(); // TODO: Optimize away this by restoring the transform before stroking
					context.transform(m.xx, m.yx, m.xy, m.yy, m.x, m.y);
					context.fillStyle = fill;
					context.fill();
					context.restore();
				} else {
					context.fillStyle = fill;
					context.fill();
				}
			}
			if (stroke){
				context.strokeStyle = stroke;
				context.lineWidth = this._strokeWidth;
				context.lineCap = this._strokeCap;
				context.lineJoin = this._strokeJoin;
				context.stroke();
			}
		}

	});


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Color = __webpack_require__(40);
	var Transform = __webpack_require__(41);
	var Node = __webpack_require__(42);

	var genericCanvas = typeof document !== 'undefined' && document.createElement('canvas'),
	    genericContext = genericCanvas && genericCanvas.getContext && genericCanvas.getContext('2d');

	function recolorImage(img, color1, color2){
		// TODO: Fix this experimental implementation
		color1 = Color.detach(color1);
		color2 = Color.detach(color2);
		var canvas = document.createElement('canvas'),
			context = canvas.getContext('2d');
		canvas.width = img.width;
		canvas.height = img.height;
		context.fillStyle = color2[0];
		context.fillRect(0, 0, img.width, img.height);
		context.globalCompositeOperation = 'lighter';
		context.drawImage(img, 0, 0);
		return canvas;
	}

	var Base = Class(Node, {

		initialize: function(){
			this._fill = null;
			this._pendingFill = null;
			this._fillTransform = null;
			this._stroke = null;
			this._strokeCap = null;
			this._strokeDash = null;
			this._strokeJoin = null;
			this._strokeWidth = null;
		},

		/* styles */

		_addColors: function(gradient, stops){
			// Enumerate stops, assumes offsets are enumerated in order
			// TODO: Sort. Chrome doesn't always enumerate in expected order but requires stops to be specified in order.
			if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++)
				gradient.addColorStop(i / l, new Color(stops[i]).toString());
			else for (var offset in stops)
				gradient.addColorStop(offset, new Color(stops[offset]).toString());
			return gradient;
		},


		fill: function(color){
			if (arguments.length > 1) return this.fillLinear(arguments);
			if (this._pendingFill) this._pendingFill();
			this._fill = color ? new Color(color).toString() : null;
			return this.invalidate();
		},

		fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
			if (focusX == null) focusX = (this.left || 0) + (this.width || 0) * 0.5;
			if (focusY == null) focusY = (this.top || 0) + (this.height || 0) * 0.5;
			if (radiusY == null) radiusY = radiusX || (this.height * 0.5) || 0;
			if (radiusX == null) radiusX = (this.width || 0) * 0.5;
			if (centerX == null) centerX = focusX;
			if (centerY == null) centerY = focusY;

			centerX += centerX - focusX;
			centerY += centerY - focusY;

			if (radiusX === 0 || radiusX === '0') return this.fillLinear(stops);
			var ys = radiusY / radiusX;

			if (this._pendingFill) this._pendingFill();

			var gradient = genericContext.createRadialGradient(focusX, focusY / ys, 0, centerX, centerY / ys, radiusX * 2);

			// Double fill radius to simulate repeating gradient
			if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++){
				gradient.addColorStop(i / l / 2, new Color(stops[i]).toString());
				gradient.addColorStop(1 - i / l / 2, new Color(stops[i]).toString());
			} else for (var offset in stops){
				gradient.addColorStop(offset / 2, new Color(stops[offset]).toString());
				gradient.addColorStop(1- offset / 2, new Color(stops[offset]).toString());
			}

			this._fill = gradient;
			this._fillTransform = new Transform(1, 0, 0, ys);
			return this.invalidate();
		},

		fillLinear: function(stops, x1, y1, x2, y2){
			if (arguments.length < 5){
				var angle = ((x1 == null) ? 270 : x1) * Math.PI / 180;

				var x = Math.cos(angle), y = -Math.sin(angle),
					l = (Math.abs(x) + Math.abs(y)) / 2,
					w = this.width || 1, h = this.height || 1;

				x *= l; y *= l;

				x1 = 0.5 - x;
				x2 = 0.5 + x;
				y1 = 0.5 - y;
				y2 = 0.5 + y;
				this._fillTransform = new Transform(w, 0, 0, h);
			} else {
				this._fillTransform = null;
			}
			if (this._pendingFill) this._pendingFill();
			var gradient = genericContext.createLinearGradient(x1, y1, x2, y2);
			this._addColors(gradient, stops);
			this._fill = gradient;
			return this.invalidate();
		},

		fillImage: function(url, width, height, left, top, color1, color2){
			if (this._pendingFill) this._pendingFill();
			var img = url;
			if (!(img instanceof Image)){
				img = new Image();
				img.src = url;
			}
			if (img.width && img.height){
				return this._fillImage(img, width, height, left || 0, top || 0, color1, color2);
			}

			// Not yet loaded
			this._fill = null;
			var self = this,
				callback = function(){
					cancel();
					self._fillImage(img, width, height, left || 0, top || 0, color1, color2);
				},
				cancel = function(){
					img.removeEventListener('load', callback, false);
					self._pendingFill = null;
				};
			this._pendingFill = cancel;
			img.addEventListener('load', callback, false);
			return this;
		},

		_fillImage: function(img, width, height, left, top, color1, color2){
			var w = width ? width / img.width : 1,
				h = height ? height / img.height : 1;
			if (color1 != null) img = recolorImage(img, color1, color2);
			this._fill = genericContext.createPattern(img, 'repeat');
			this._fillTransform = new Transform(w, 0, 0, h, left || 0, top || 0);
			return this.invalidate();
		},

		stroke: function(color, width, cap, join, dash){
			this._stroke = color ? new Color(color).toString() : null;
			this._strokeWidth = (width != null) ? width : 1;
			this._strokeCap = (cap != null) ? cap : 'round';
			this._strokeJoin = (join != null) ? join : 'round';
			this._strokeDash = dash;
			return this.invalidate();
		},

		// Rendering

		element_renderTo: Node.prototype.renderTo,

		renderTo: function(context, xx, yx, xy, yy, x, y){
			var opacity = this._opacity;
			if (opacity == null || opacity >= 1){
				return this.renderLayerTo(context, xx, yx, xy, yy, x, y);
			}
			if (this._fill && this._stroke){
				return this.element_renderTo(context, xx, yx, xy, yy, x, y);
			}
			context.globalAlpha = opacity;
			var r = this.renderLayerTo(context, xx, yx, xy, yy, x, y);
			context.globalAlpha = 1;
			return r;
		},

		renderLayerTo: function(context, xx, yx, xy, yy, x, y){
			context.setTransform(xx, yx, xy, yy, x, y);
			this.renderShapeTo(context);
		}

	});

	Base._genericContext = genericContext;

	module.exports = Base;


/***/ },
/* 40 */
/***/ function(module, exports) {

	var colors = {
		maroon: '#800000', red: '#ff0000', orange: '#ffA500', yellow: '#ffff00', olive: '#808000',
		purple: '#800080', fuchsia: "#ff00ff", white: '#ffffff', lime: '#00ff00', green: '#008000',
		navy: '#000080', blue: '#0000ff', aqua: '#00ffff', teal: '#008080',
		black: '#000000', silver: '#c0c0c0', gray: '#808080'
	};

	var map = function(array, fn){
		var results = [];
		for (var i = 0, l = array.length; i < l; i++)
			results[i] = fn(array[i], i);
		return results;
	};

	var Color = function(color, type){
		
		if (color.isColor){
			
			this.red = color.red;
			this.green = color.green;
			this.blue = color.blue;
			this.alpha = color.alpha;

		} else {
			
			var namedColor = colors[color];
			if (namedColor){
				color = namedColor;
				type = 'hex';
			}

			switch (typeof color){
				case 'string': if (!type) type = (type = color.match(/^rgb|^hsb|^hsl/)) ? type[0] : 'hex'; break;
				case 'object': type = type || 'rgb'; color = color.toString(); break;
				case 'number': type = 'hex'; color = color.toString(16); break;
			}

			color = Color['parse' + type.toUpperCase()](color);
			this.red = color[0];
			this.green = color[1];
			this.blue = color[2];
			this.alpha = color[3];
		}
		
		this.isColor = true;

	};

	var limit = function(number, min, max){
		return Math.min(max, Math.max(min, number));
	};

	var listMatch = /([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,?\s*([-.\d]*\%?)/;
	var hexMatch = /^#?([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{0,2})$/i;

	Color.parseRGB = function(color){
		return map(color.match(listMatch).slice(1), function(bit, i){
			if (bit) bit = parseFloat(bit) * (bit[bit.length - 1] == '%' ? 2.55 : 1);
			return (i < 3) ? Math.round(((bit %= 256) < 0) ? bit + 256 : bit) : limit(((bit === '') ? 1 : Number(bit)), 0, 1);
		});
	};
		
	Color.parseHEX = function(color){
		if (color.length == 1) color = color + color + color;
		return map(color.match(hexMatch).slice(1), function(bit, i){
			if (i == 3) return (bit) ? parseInt(bit, 16) / 255 : 1;
			return parseInt((bit.length == 1) ? bit + bit : bit, 16);
		});
	};
		
	Color.parseHSB = function(color){
		var hsb = map(color.match(listMatch).slice(1), function(bit, i){
			if (bit) bit = parseFloat(bit);
			if (i === 0) return Math.round(((bit %= 360) < 0) ? (bit + 360) : bit);
			else if (i < 3) return limit(Math.round(bit), 0, 100);
			else return limit(((bit === '') ? 1 : Number(bit)), 0, 1);
		});
		
		var a = hsb[3];
		var br = Math.round(hsb[2] / 100 * 255);
		if (hsb[1] == 0) return [br, br, br, a];
			
		var hue = hsb[0];
		var f = hue % 60;
		var p = Math.round((hsb[2] * (100 - hsb[1])) / 10000 * 255);
		var q = Math.round((hsb[2] * (6000 - hsb[1] * f)) / 600000 * 255);
		var t = Math.round((hsb[2] * (6000 - hsb[1] * (60 - f))) / 600000 * 255);

		switch (Math.floor(hue / 60)){
			case 0: return [br, t, p, a];
			case 1: return [q, br, p, a];
			case 2: return [p, br, t, a];
			case 3: return [p, q, br, a];
			case 4: return [t, p, br, a];
			default: return [br, p, q, a];
		}
	};

	Color.parseHSL = function(color){
		var hsb = map(color.match(listMatch).slice(1), function(bit, i){
			if (bit) bit = parseFloat(bit);
			if (i === 0) return Math.round(((bit %= 360) < 0) ? (bit + 360) : bit);
			else if (i < 3) return limit(Math.round(bit), 0, 100);
			else return limit(((bit === '') ? 1 : Number(bit)), 0, 1);
		});

		var h = hsb[0] / 60;
		var s = hsb[1] / 100;
		var l = hsb[2] / 100;
		var a = hsb[3];
		
		var c = (1 - Math.abs(2 * l - 1)) * s;
		var x = c * (1 - Math.abs(h % 2 - 1));
		var m = l - c / 2;
		
		var p = Math.round((c + m) * 255);
		var q = Math.round((x + m) * 255);
		var t = Math.round((m) * 255);

		switch (Math.floor(h)){
			case 0: return [p, q, t, a];
			case 1: return [q, p, t, a];
			case 2: return [t, p, q, a];
			case 3: return [t, q, p, a];
			case 4: return [q, t, p, a];
			default: return [p, t, q, a];
		}
	};

	var toString = function(type, array){
		if (array[3] != 1) type += 'a';
		else array.pop();
		return type + '(' + array.join(', ') + ')';
	};

	Color.prototype = {

		toHSB: function(array){
			var red = this.red, green = this.green, blue = this.blue, alpha = this.alpha;

			var max = Math.max(red, green, blue), min = Math.min(red, green, blue), delta = max - min;
			var hue = 0, saturation = (delta != 0) ? delta / max : 0, brightness = max / 255;
			if (saturation){
				var rr = (max - red) / delta, gr = (max - green) / delta, br = (max - blue) / delta;
				hue = (red == max) ? br - gr : (green == max) ? 2 + rr - br : 4 + gr - rr;
				if ((hue /= 6) < 0) hue++;
			}

			var hsb = [Math.round(hue * 360), Math.round(saturation * 100), Math.round(brightness * 100), alpha];

			return (array) ? hsb : toString('hsb', hsb);
		},

		toHSL: function(array){
			var red = this.red, green = this.green, blue = this.blue, alpha = this.alpha;

			var max = Math.max(red, green, blue), min = Math.min(red, green, blue), delta = max - min;
			var hue = 0, saturation = (delta != 0) ? delta / (255 - Math.abs((max + min) - 255)) : 0, lightness = (max + min) / 512;
			if (saturation){
				var rr = (max - red) / delta, gr = (max - green) / delta, br = (max - blue) / delta;
				hue = (red == max) ? br - gr : (green == max) ? 2 + rr - br : 4 + gr - rr;
				if ((hue /= 6) < 0) hue++;
			}

			var hsl = [Math.round(hue * 360), Math.round(saturation * 100), Math.round(lightness * 100), alpha];

			return (array) ? hsl : toString('hsl', hsl);
		},

		toHEX: function(array){

			var a = this.alpha;
			var alpha = ((a = Math.round((a * 255)).toString(16)).length == 1) ? a + a : a;
			
			var hex = map([this.red, this.green, this.blue], function(bit){
				bit = bit.toString(16);
				return (bit.length == 1) ? '0' + bit : bit;
			});
			
			return (array) ? hex.concat(alpha) : '#' + hex.join('') + ((alpha == 'ff') ? '' : alpha);
		},
		
		toRGB: function(array){
			var rgb = [this.red, this.green, this.blue, this.alpha];
			return (array) ? rgb : toString('rgb', rgb);
		}

	};

	Color.prototype.toString = Color.prototype.toRGB;

	Color.hex = function(hex){
		return new Color(hex, 'hex');
	};

	if (this.hex == null) this.hex = Color.hex;

	Color.hsb = function(h, s, b, a){
		return new Color([h || 0, s || 0, b || 0, (a == null) ? 1 : a], 'hsb');
	};

	if (this.hsb == null) this.hsb = Color.hsb;

	Color.hsl = function(h, s, l, a){
		return new Color([h || 0, s || 0, l || 0, (a == null) ? 1 : a], 'hsl');
	};

	if (this.hsl == null) this.hsl = Color.hsl;

	Color.rgb = function(r, g, b, a){
		return new Color([r || 0, g || 0, b || 0, (a == null) ? 1 : a], 'rgb');
	};

	if (this.rgb == null) this.rgb = Color.rgb;

	Color.detach = function(color){
		color = new Color(color);
		return [Color.rgb(color.red, color.green, color.blue).toString(), color.alpha];
	};

	module.exports = Color;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);

	function Transform(xx, yx, xy, yy, x, y){
		if (xx && typeof xx == 'object'){
			yx = xx.yx; yy = xx.yy; y = xx.y;
			xy = xx.xy; x = xx.x; xx = xx.xx;
		}
		this.xx = xx == null ? 1 : xx;
		this.yx = yx || 0;
		this.xy = xy || 0;
		this.yy = yy == null ? 1 : yy;
		this.x = (x == null ? this.x : x) || 0;
		this.y = (y == null ? this.y : y) || 0;
		this._transform();
		return this;
	};

	module.exports = Class({

		initialize: Transform,

		_transform: function(){},

		xx: 1, yx: 0, x: 0,
		xy: 0, yy: 1, y: 0,

		transform: function(xx, yx, xy, yy, x, y){
			var m = this;
			if (xx && typeof xx == 'object'){
				yx = xx.yx; yy = xx.yy; y = xx.y;
				xy = xx.xy; x = xx.x; xx = xx.xx;
			}
			if (!x) x = 0;
			if (!y) y = 0;
			return this.transformTo(
				m.xx * xx + m.xy * yx,
				m.yx * xx + m.yy * yx,
				m.xx * xy + m.xy * yy,
				m.yx * xy + m.yy * yy,
				m.xx * x + m.xy * y + m.x,
				m.yx * x + m.yy * y + m.y
			);
		},

		transformTo: Transform,

		translate: function(x, y){
			return this.transform(1, 0, 0, 1, x, y);
		},

		move: function(x, y){
			this.x += x || 0;
			this.y += y || 0;
			this._transform();
			return this;
		},

		scale: function(x, y){
			if (y == null) y = x;
			return this.transform(x, 0, 0, y, 0, 0);
		},

		rotate: function(deg, x, y){
			if (x == null || y == null){
				x = (this.left || 0) + (this.width || 0) / 2;
				y = (this.top || 0) + (this.height || 0) / 2;
			}

			var rad = deg * Math.PI / 180, sin = Math.sin(rad), cos = Math.cos(rad);

			this.transform(1, 0, 0, 1, x, y);
			var m = this;

			return this.transformTo(
				cos * m.xx - sin * m.yx,
				sin * m.xx + cos * m.yx,
				cos * m.xy - sin * m.yy,
				sin * m.xy + cos * m.yy,
				m.x,
				m.y
			).transform(1, 0, 0, 1, -x, -y);
		},

		moveTo: function(x, y){
			var m = this;
			return this.transformTo(m.xx, m.yx, m.xy, m.yy, x, y);
		},

		rotateTo: function(deg, x, y){
			var m = this;
			var flip = m.yx / m.xx > m.yy / m.xy ? -1 : 1;
			if (m.xx < 0 ? m.xy >= 0 : m.xy < 0) flip = -flip;
			return this.rotate(deg - Math.atan2(flip * m.yx, flip * m.xx) * 180 / Math.PI, x, y);
		},

		scaleTo: function(x, y){
			// Normalize
			var m = this;

			var h = Math.sqrt(m.xx * m.xx + m.yx * m.yx);
			m.xx /= h; m.yx /= h;

			h = Math.sqrt(m.yy * m.yy + m.xy * m.xy);
			m.yy /= h; m.xy /= h;

			return this.scale(x, y);
		},

		resizeTo: function(width, height){
			var w = this.width, h = this.height;
			if (!w || !h) return this;
			return this.scaleTo(width / w, height / h);
		},

		/*
		inverse: function(){
			var a = this.xx, b = this.yx,
				c = this.xy, d = this.yy,
				e = this.x, f = this.y;
			if (a * d - b * c == 0) return null;
			return new Transform(
				d/(a * d-b * c), b/(b * c-a * d),
				c/(b * c-a * d), a/(a * d-b * c),
				(d * e-c * f)/(b * c-a * d), (b * e-a * f)/(a * d-b * c)
			);
		},
		*/

		inversePoint: function(x, y){
			var a = this.xx, b = this.yx,
				c = this.xy, d = this.yy,
				e = this.x, f = this.y;
			var det = b * c - a * d;
			if (det == 0) return null;
			return {
				x: (d * (e - x) + c * (y - f)) / det,
				y: (a * (f - y) + b * (x - e)) / det
			};
		},

		point: function(x, y){
			var m = this;
			return {
				x: m.xx * x + m.xy * y + m.x,
				y: m.yx * x + m.yy * y + m.y
			};
		}	

	});


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Transform = __webpack_require__(41);
	var Element = __webpack_require__(43);

	var CanvasNode = Class(Transform, Element, {
		
		invalidate: function(){
			if (this.parentNode) this.parentNode.invalidate();
			if (this._layer) this._layerCache = null;
			return this;
		},

		_place: function(){
			this.invalidate();
		},
		
		_transform: function(){
			this.invalidate();
		},
		
		blend: function(opacity){
			if (opacity >= 1 && this._layer) this._layer = null;
			this._opacity = opacity;
			if (this.parentNode) this.parentNode.invalidate();
			return this;
		},
		
		// visibility
		
		hide: function(){
			this._invisible = true;
			if (this.parentNode) this.parentNode.invalidate();
			return this;
		},
		
		show: function(){
			this._invisible = false;
			if (this.parentNode) this.parentNode.invalidate();
			return this;
		},
		
		// interaction
		
		indicate: function(cursor, tooltip){
			this._cursor = cursor;
			this._tooltip = tooltip;
			return this.invalidate();
		},

		hitTest: function(x, y){
			if (this._invisible) return null;
			var point = this.inversePoint(x, y);
			if (!point) return null;
			return this.localHitTest(point.x, point.y);
		},

		// rendering

		renderTo: function(context, xx, yx, xy, yy, x, y){
			var opacity = this._opacity;
			if (opacity == null || opacity >= 1){
				return this.renderLayerTo(context, xx, yx, xy, yy, x, y);
			}

			// Render to a compositing layer and cache it

			var layer = this._layer, canvas, isDirty = true,
				w = context.canvas.width, h = context.canvas.height;
			if (layer){
				layer.setTransform(1, 0, 0, 1, 0, 0);
				canvas = layer.canvas;
				if (canvas.width < w || canvas.height < h){
					canvas.width = w;
					canvas.height = h;
				} else {
					var c = this._layerCache;
					if (c && c.xx === xx && c.yx === yx && c.xy === xy
						&& c.yy === yy && c.x === x && c.y === y){
						isDirty = false;
					} else {
						layer.clearRect(0, 0, w, h);
					}
				}
			} else {
				canvas = document.createElement('canvas');
				canvas.width = w;
				canvas.height = h;
				this._layer = layer = canvas.getContext('2d');
			}

			if (isDirty){
				this.renderLayerTo(layer, xx, yx, xy, yy, x, y);
				this._layerCache = {
					xx: xx,
					yx: yx,
					xy: xy,
					yy: yy,
					x: x,
					y: y
				};
			}

			context.globalAlpha = opacity;
			context.setTransform(1, 0, 0, 1, 0, 0);
			context.drawImage(
				canvas,
				0, 0, w, h,
				0, 0, w, h
			);
			context.globalAlpha = 1;
		}

	});

	module.exports = CanvasNode;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);

	module.exports = Class({

		// placement

		_resetPlacement: function(){
			var container = this.parentNode;
			if (container){
				var previous = this.previousSibling, next = this.nextSibling;
				if (previous){
					previous.nextSibling = next;
				} else {
					container.firstChild = next;
				}
				if (next){
					next.previousSibling = previous;
				} else {
					container.lastChild = this.previousSibling;
				}
			}
			this.previousSibling = null;
			this.nextSibling = null;
			this.parentNode = null;
			return this;
		},

		inject: function(container){
			this._resetPlacement();
			var last = container.lastChild;
			if (last){
				last.nextSibling = this;
				this.previousSibling = last;
			} else {
				container.firstChild = this;
			}
			container.lastChild = this;
			this.parentNode = container;
			this._place();
			return this;
		},

		injectBefore: function(sibling){
			this._resetPlacement();
			var container = sibling.parentNode;
			if (!container) return this;
			var previous = sibling.previousSibling;
			if (previous){
				previous.nextSibling = this;
				this.previousSibling = previous;
			} else {
				container.firstChild = this;
			}
			sibling.previousSibling = this;
			this.nextSibling = sibling;
			this.parentNode = container;
			this._place();
			return this;
		},

		eject: function(){
			this._resetPlacement();
			this._place();
			return this;
		},

		_place: function(){},

		// events

		dispatch: function(event){
			var events = this._events,
				listeners = events && events[event.type];
			if (listeners){
				listeners = listeners.slice(0);
				for (var i = 0, l = listeners.length; i < l; i++){
					var fn = listeners[i], result;
					if (typeof fn == 'function')
						result = fn.call(this, event);
					else
						result = fn.handleEvent(event);
					if (result === false) event.preventDefault();
				}
			}
			if (this.parentNode && this.parentNode.dispatch){
				this.parentNode.dispatch(event);
			}
		},

		subscribe: function(type, fn, bind){
			if (typeof type != 'string'){ // listen type / fn with object
				var subscriptions = [];
				for (var t in type) subscriptions.push(this.subscribe(t, type[t]));
				return function(){ // unsubscribe
					for (var i = 0, l = subscriptions.length; i < l; i++)
						subscriptions[i]();
					return this;
				};
			} else { // listen to one
				var bound = typeof fn === 'function' ? fn.bind(bind || this) : fn,
					events = this._events || (this._events = {}),
					listeners = events[type] || (events[type] = []);
				listeners.push(bound);
				return function(){
					// unsubscribe
					for (var i = 0, l = listeners.length; i < l; i++){
						if (listeners[i] === bound){
							listeners.splice(i, 1);
							break;
						}
					}
				}
			}
		}

	});


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Container = __webpack_require__(34);
	var Node = __webpack_require__(42);

	module.exports = Class(Node, Container, {
		
		initialize: function(width, height){
			this.width = width;
			this.height = height;
		},

		localHitTest: function(x, y){
			var node = this.lastChild;
			while (node){
				var hit = node.hitTest(x, y);
				if (hit) return hit;
				node = node.previousSibling;
			}
			return null;
		},

		renderLayerTo: function(context, xx, yx, xy, yy, x, y){
			if (this._invisible) return;

			x = xx * this.x + xy * this.y + x;
			y = yx * this.x + yy * this.y + y;

			var t = xx;
			xx = t * this.xx + xy * this.yx;
			xy = t * this.xy + xy * this.yy;
			t = yx;
			yx = t * this.xx + yy * this.yx;
			yy = t * this.xy + yy * this.yy;

			var node = this.firstChild;
			while (node){
				node.renderTo(context, xx, yx, xy, yy, x, y);
				node = node.nextSibling;
			}
		}

	});


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Container = __webpack_require__(34);
	var Node = __webpack_require__(42);

	module.exports = Class(Node, Container, {

		initialize: function(width, height){
			this.width = width;
			this.height = height;
		},

		localHitTest: function(x, y) {
			var node = this.lastChild;
			while (node){
				var hit = node.hitTest(x, y);
				if (hit) return hit;
				node = node.previousSibling;
			}
			return null;
		},

		renderLayerTo: function(context, xx, yx, xy, yy, x, y) {
			context.setTransform(xx, yx, xy, yy, x, y);
			context.save();
			// Need beginPath to fix Firefox bug. See 3354054.
			context.beginPath();
			context.rect(this.x, this.y, this.width, this.height);
			context.clip();

			var node = this.firstChild;
			while(node) {
				node.renderTo(context, xx, yx, xy, yy, x, y);
				node = node.nextSibling;
			}
			context.restore();
		}
	});


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Base = __webpack_require__(39);

	var fontAnchors = { middle: 'center' };

	module.exports = Class(Base, {

		base_initialize: Base.prototype.initialize,

		initialize: function(text, font, alignment, path){
			this.base_initialize();
			this.draw.apply(this, arguments);
		},

		draw: function(text, font, alignment, path){
			var em;
			if (typeof font == 'string'){
				em = Number(/(\d+)/.exec(font)[0]);
			} else if (font){
				em = parseFloat(font.fontSize || font['font-size'] || '12');
				font = (font.fontStyle || font['font-style'] || '') + ' ' +
					(font.fontVariant || font['font-variant'] || '') + ' ' +
					(font.fontWeight || font['font-weight'] || '') + ' ' +
					em + 'px ' +
					(font.fontFamily || font['font-family'] || 'Arial');
			} else {
				font = this._font;
			}

			var lines = text && text.split(/\r?\n/);
			this._font = font;
			this._fontSize = em;
			this._text = lines;
			this._alignment = fontAnchors[alignment] || alignment || 'left';

			var context = Base._genericContext;

			context.font = this._font;
			context.textAlign = this._alignment;
			context.textBaseline = 'middle';

			lines = this._text;
			var l = lines.length, width = 0;
			for (var i = 0; i < l; i++){
				var w = context.measureText(lines[i]).width;
				if (w > width) width = w;
			}
			this.width = width;
			this.height = l ? l * 1.1 * em : 0;
			return this.invalidate();
		},

		// Interaction

		localHitTest: function(x, y){
			if (!this._fill) return null;
			if (x > 0 && y > 0 && x < this.width && y < this.height){
				return this;
			}
			return null;
		},

		// Rendering

		renderShapeTo: function(context){
			if (this._invisible || !this._text || (!this._fill && !this._stroke)) {
				return null;
			}
			context.transform(this.xx, this.yx, this.xy, this.yy, this.x, this.y);
			var fill = this._fill,
			    stroke = this._stroke,
			    text = this._text,
			    dash = this._strokeDash;

			context.font = this._font;
			context.textAlign = this._alignment;
			context.textBaseline = 'middle';

			var em = this._fontSize,
			    y = em / 2,
			    lineHeight = 1.1 * em,
			    lines = text,
			    l = lines.length;

			if (fill){
				context.fillStyle = fill;
				for (var i = 0; i < l; i++)
					context.fillText(lines[i], 0, y + i * lineHeight);
			}
			if (stroke){
				if (dash) {
					if (context.setLineDash) {
						context.setLineDash(dash);
					} else {
						// TODO: Remove when FF supports setLineDash.
						context.mozDash = dash;
					}
					// TODO: Create fallback to other browsers.
				} else {
					if (context.setLineDash) {
						context.setLineDash([]);
					} else {
						context.mozDash = null;
					}
				}

				context.strokeStyle = stroke;
				context.lineWidth = this._strokeWidth;
				context.lineCap = this._strokeCap;
				context.lineJoin = this._strokeJoin;
				for (i = 0; i < l; i++)
					context.strokeText(lines[i], 0, y + i * lineHeight);
			}
		}

	});


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Container = __webpack_require__(34);
	var Element = __webpack_require__(35);
	var DOM = __webpack_require__(48);

	var precision = 100;

	var VMLSurface = Class(Element, Container, {
		
		initialize: function VMLSurface(width, height, existingElement){
			this.element = existingElement || document.createElement('vml');
			this.containerElement = DOM.createElement('group');
			this.element.appendChild(this.containerElement);
			if (width != null && height != null) this.resize(width, height);
		},

		resize: function(width, height){
			this.width = width;
			this.height = height;
			
			var style = this.element.style;
			style.pixelWidth = width;
			style.pixelHeight = height;
			
			style = this.containerElement.style;
			style.width = width;
			style.height = height;
			
			var halfPixel = (0.5 * precision);
			
			this.containerElement.coordorigin = halfPixel + ',' + halfPixel;
			this.containerElement.coordsize = (width * precision) + ',' + (height * precision);

			return this;
		}
		
	});

	VMLSurface.tagName = 'av:vml';

	module.exports = VMLSurface;

/***/ },
/* 48 */
/***/ function(module, exports) {

	var VMLCSS = 'behavior:url(#default#VML);display:inline-block;position:absolute;left:0px;top:0px;';

	var styleSheet, styledTags = {}, styleTag = function(tag){
		if (styleSheet) styledTags[tag] = styleSheet.addRule('av\\:' + tag, VMLCSS);
	};

	exports.init = function(document){

		var namespaces;
		try { // IE9 workaround: sometimes it throws here
			namespaces = document.namespaces;
		} catch (e) {
		}
		if (!namespaces) return false;

		namespaces.add('av', 'urn:schemas-microsoft-com:vml');
		namespaces.add('ao', 'urn:schemas-microsoft-com:office:office');

		styleSheet = document.createStyleSheet();
		styleSheet.addRule('vml', 'display:inline-block;position:relative;overflow:hidden;');
	/*	styleTag('skew');
		styleTag('fill');
		styleTag('stroke');
		styleTag('path');
		styleTag('textpath');
		styleTag('group');*/

		styleTag('vml');

		return true;

	};

	exports.createElement = function(tag){
		if (!(tag in styledTags)) styleTag(tag);
		return document.createElement('av:' + tag);
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Path = __webpack_require__(37);

	var precision = 100;

	var round = Math.round;

	var VMLPath = Class(Path, {

		initialize: function(path){
			this.reset();
			if (path instanceof VMLPath){
				this.path = [Array.prototype.join.call(path.path, ' ')];
			} else if (path){
				if (path.applyToPath)
					path.applyToPath(this);
				else
					this.push(path);
			}
		},

		onReset: function(){
			this.path = [];
		},

		onMove: function(sx, sy, x, y){
			this.path.push('m', round(x * precision), round(y * precision));
		},

		onLine: function(sx, sy, x, y){
			this.path.push('l', round(x * precision), round(y * precision));
		},

		onBezierCurve: function(sx, sy, p1x, p1y, p2x, p2y, x, y){
			this.path.push('c',
				round(p1x * precision), round(p1y * precision),
				round(p2x * precision), round(p2y * precision),
				round(x * precision), round(y * precision)
			);
		},

		_arcToBezier: Path.prototype.onArc,

		onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation){
			if (rx != ry || rotation) return this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
			cx *= precision;
			cy *= precision;
			rx *= precision;
			this.path.push(ccw ? 'at' : 'wa',
				round(cx - rx), round(cy - rx),
				round(cx + rx), round(cy + rx),
				round(sx * precision), round(sy * precision),
				round(ex * precision), round(ey * precision)
			);
		},

		onClose: function(){
			this.path.push('x');
		},

		toVML: function(){
			return this.path.join(' ');
		}

	});

	VMLPath.prototype.toString = VMLPath.prototype.toVML;

	module.exports = VMLPath;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Base = __webpack_require__(51);
	var Path = __webpack_require__(49);
	var DOM = __webpack_require__(48);

	var precision = 100;

	module.exports = Class(Base, {

		base_initialize: Base.prototype.initialize,
		
		initialize: function(path, width, height){
			this.base_initialize('shape');

			var p = this.pathElement = DOM.createElement('path');
			p.gradientshapeok = true;
			this.element.appendChild(p);
			
			this.width = width;
			this.height = height;
			
			if (path != null) this.draw(path);
		},
		
		// SVG to VML
		
		draw: function(path, width, height){
			
			if (!(path instanceof Path)) path = new Path(path);
			this._vml = path.toVML();
			//this._size = path.measure();
			
			if (width != null) this.width = width;
			if (height != null) this.height = height;
			
			if (!this._boxCoords) this._transform();
			this._redraw(this._prefix, this._suffix);
			
			return this;
		},
		
		// radial gradient workaround

		_redraw: function(prefix, suffix){
			var vml = this._vml || '';

			this._prefix = prefix;
			this._suffix = suffix
			if (prefix){
				vml = [
					prefix, vml, suffix,
					// Don't stroke the path with the extra ellipse, redraw the stroked path separately
					'ns e', vml, 'nf'
				].join(' ');
			}

			this.element.path = vml + 'e';
		},

		fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
			var fill = this._createGradient('gradientradial', stops);
			if (focusX == null) focusX = (this.left || 0) + (this.width || 0) * 0.5;
			if (focusY == null) focusY = (this.top || 0) + (this.height || 0) * 0.5;
			if (radiusY == null) radiusY = radiusX || (this.height * 0.5) || 0;
			if (radiusX == null) radiusX = (this.width || 0) * 0.5;
			if (centerX == null) centerX = focusX;
			if (centerY == null) centerY = focusY;

			centerX += centerX - focusX;
			centerY += centerY - focusY;
			
			var cx = Math.round(centerX * precision),
				cy = Math.round(centerY * precision),

				rx = Math.round(radiusX * 2 * precision),
				ry = Math.round(radiusY * 2 * precision),

				arc = ['wa', cx - rx, cy - ry, cx + rx, cy + ry].join(' ');

			this._redraw(
				// Resolve rendering bug
				['m', cx, cy - ry, 'l', cx, cy - ry].join(' '),
				// Draw an ellipse around the path to force an elliptical gradient on any shape
				[
					'm', cx, cy - ry,
					arc, cx, cy - ry, cx, cy + ry, arc, cx, cy + ry, cx, cy - ry,
					arc, cx, cy - ry, cx, cy + ry, arc, cx, cy + ry, cx, cy - ry
				].join(' ')
			);

			this._boxCoords = { left: focusX - 2, top: focusY - 2, width: 4, height: 4 };
			
			fill.focusposition = '0.5,0.5';
			fill.focussize = '0 0';
			fill.focus = '50%';
			
			this._transform();
			
			return this;
		}

	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Transform = __webpack_require__(41);
	var Color = __webpack_require__(40);
	var Node = __webpack_require__(52);
	var DOM = __webpack_require__(48);

	var precision = 100;

	var defaultBox = { left: 0, top: 0, width: 500, height: 500 };

	module.exports = Class(Node, {

		element_initialize: Node.prototype.initialize,

		initialize: function(tag){
			this.element_initialize(tag);
			var element = this.element;
			
			var skew = this.skewElement = DOM.createElement('skew');
			skew.on = true;
			element.appendChild(skew);

			var fill = this.fillElement = DOM.createElement('fill');
			fill.on = false;
			element.appendChild(fill);
			
			var stroke = this.strokeElement = DOM.createElement('stroke');
			stroke.on = false;
			element.appendChild(stroke);
		},
		
		/* transform */
		
		_transform: function(){
			var container = this.parentNode;
			
			// Active Transformation Matrix
			var m = container ? new Transform(container._activeTransform).transform(this) : this;
			
			// Box in shape user space
			
			var box = this._boxCoords || this._size || defaultBox;
			
			var originX = box.left || 0,
				originY = box.top || 0,
				width = box.width || 1,
				height = box.height || 1;
					
			// Flipped
		    var flip = m.yx / m.xx > m.yy / m.xy;
			if (m.xx < 0 ? m.xy >= 0 : m.xy < 0) flip = !flip;
			flip = flip ? -1 : 1;
			
			m = new Transform().scale(flip, 1).transform(m);
			
			// Rotation is approximated based on the transform
			var rotation = Math.atan2(-m.xy, m.yy) * 180 / Math.PI;
			
			// Reverse the rotation, leaving the final transform in box space
			var rad = rotation * Math.PI / 180, sin = Math.sin(rad), cos = Math.cos(rad);
			
			var transform = new Transform(
				(m.xx * cos - m.xy * sin),
				(m.yx * cos - m.yy * sin) * flip,
				(m.xy * cos + m.xx * sin) * flip,
				(m.yy * cos + m.yx * sin)
			);

			var rotationTransform = new Transform().rotate(rotation, 0, 0);

			var shapeToBox = new Transform().rotate(-rotation, 0, 0).transform(m).moveTo(0,0);

			// Scale box after reversing rotation
			width *= Math.abs(shapeToBox.xx);
			height *= Math.abs(shapeToBox.yy);
			
			// Place box
			var left = m.x, top = m.y;
			
			// Compensate for offset by center origin rotation
			var vx = -width / 2, vy = -height / 2;
			var point = rotationTransform.point(vx, vy);
			left -= point.x - vx;
			top -= point.y - vy;
			
			// Adjust box position based on offset
			var rsm = new Transform(m).moveTo(0,0);
			point = rsm.point(originX, originY);
			left += point.x;
			top += point.y;
			
			if (flip < 0) left = -left - width;
			
			// Place transformation origin
			var point0 = rsm.point(-originX, -originY);
			var point1 = rotationTransform.point(width, height);
			var point2 = rotationTransform.point(width, 0);
			var point3 = rotationTransform.point(0, height);
			
			var minX = Math.min(0, point1.x, point2.x, point3.x),
			    maxX = Math.max(0, point1.x, point2.x, point3.x),
			    minY = Math.min(0, point1.y, point2.y, point3.y),
			    maxY = Math.max(0, point1.y, point2.y, point3.y);
			
			var transformOriginX = (point0.x - point1.x / 2) / (maxX - minX) * flip,
			    transformOriginY = (point0.y - point1.y / 2) / (maxY - minY);
			
			// Adjust the origin
			point = shapeToBox.point(originX, originY);
			originX = point.x;
			originY = point.y;
			
			// Scale stroke
			var strokeWidth = this._strokeWidth;
			if (strokeWidth){
				// Scale is the hypothenus between the two vectors
				// TODO: Use area calculation instead
				var vx = m.xx + m.xy, vy = m.yy + m.yx;
				strokeWidth *= Math.sqrt(vx * vx + vy * vy) / Math.sqrt(2);
			}
			
			// convert to multiplied precision space
			originX *= precision;
			originY *= precision;
			left *= precision;
			top *= precision;
			width *= precision;
			height *= precision;
			
			// Set box
			var element = this.element;
			element.coordorigin = originX + ',' + originY;
			element.coordsize = width + ',' + height;
			element.style.left = left + 'px';
			element.style.top = top + 'px';
			element.style.width = width;
			element.style.height = height;
			element.style.rotation = rotation.toFixed(8);
			element.style.flip = flip < 0 ? 'x' : '';
			
			// Set transform
			var skew = this.skewElement;
			skew.matrix = [transform.xx.toFixed(4), transform.xy.toFixed(4), transform.yx.toFixed(4), transform.yy.toFixed(4), 0, 0];
			skew.origin = transformOriginX + ',' + transformOriginY;

			// Set stroke
			this.strokeElement.weight = strokeWidth + 'px';
		},
		
		/* styles */

		_createGradient: function(style, stops){
			var fill = this.fillElement;

			// Temporarily eject the fill from the DOM
			this.element.removeChild(fill);

			fill.type = style;
			fill.method = 'none';
			fill.rotate = true;

			var colors = [], color1, color2;

			var addColor = function(offset, color){
				color = Color.detach(color);
				if (color1 == null) color1 = color2 = color;
				else color2 = color;
				colors.push(offset + ' ' + color[0]);
			};

			// Enumerate stops, assumes offsets are enumerated in order
			if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++) addColor(i / l, stops[i]);
			else for (var offset in stops) addColor(offset, stops[offset]);
			
			fill.color = color1[0];
			fill.color2 = color2[0];
			
			//if (fill.colors) fill.colors.value = colors; else
			fill.colors = colors;

			// Opacity order gets flipped when color stops are specified
			fill.opacity = color2[1];
			fill['ao:opacity2'] = color1[1];

			fill.on = true;
			this.element.appendChild(fill);
			return fill;
		},
		
		_setColor: function(type, color){
			var element = type == 'fill' ? this.fillElement : this.strokeElement;
			if (color == null){
				element.on = false;
			} else {
				color = Color.detach(color);
				element.color = color[0];
				element.opacity = color[1];
				element.on = true;
			}
		},
		
		fill: function(color){
			if (arguments.length > 1){
				this.fillLinear(arguments);
			} else {
				this._boxCoords = defaultBox;
				var fill = this.fillElement;
				fill.type = 'solid';
				fill.color2 = '';
				fill['ao:opacity2'] = '';
				if (fill.colors) fill.colors.value = '';
				this._setColor('fill', color);
			}
			return this;
		},

		fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
			var fill = this._createGradient('gradientradial', stops);
			if (focusX == null) focusX = this.left + this.width * 0.5;
			if (focusY == null) focusY = this.top + this.height * 0.5;
			if (radiusY == null) radiusY = radiusX || (this.height * 0.5);
			if (radiusX == null) radiusX = this.width * 0.5;
			if (centerX == null) centerX = focusX;
			if (centerY == null) centerY = focusY;
			
			centerX += centerX - focusX;
			centerY += centerY - focusY;
			
			var box = this._boxCoords = {
				left: centerX - radiusX * 2,
				top: centerY - radiusY * 2,
				width: radiusX * 4,
				height: radiusY * 4
			};
			focusX -= box.left;
			focusY -= box.top;
			focusX /= box.width;
			focusY /= box.height;

			fill.focussize = '0 0';
			fill.focusposition = focusX + ',' + focusY;
			fill.focus = '50%';
			
			this._transform();
			
			return this;
		},

		fillLinear: function(stops, x1, y1, x2, y2){
			var fill = this._createGradient('gradient', stops);
			fill.focus = '100%';
			if (arguments.length == 5){
				var w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
				this._boxCoords = {
					left: Math.min(x1, x2),
					top: Math.min(y1, y2),
					width: w < 1 ? h : w,
					height: h < 1 ? w : h
				};
				fill.angle = (360 + Math.atan2((x2 - x1) / h, (y2 - y1) / w) * 180 / Math.PI) % 360;
			} else {
				this._boxCoords = null;
				fill.angle = (x1 == null) ? 0 : (90 + x1) % 360;
			}
			this._transform();
			return this;
		},

		fillImage: function(url, width, height, left, top, color1, color2){
			var fill = this.fillElement;
			if (color1 != null){
				color1 = Color.detach(color1);
				if (color2 != null) color2 = Color.detach(color2);
				fill.type = 'pattern';
				fill.color = color1[0];
				fill.color2 = color2 == null ? color1[0] : color2[0];
				fill.opacity = color2 == null ? 0 : color2[1];
				fill['ao:opacity2'] = color1[1];
			} else {
				fill.type = 'tile';
				fill.color = '';
				fill.color2 = '';
				fill.opacity = 1;
				fill['ao:opacity2'] = 1;
			}
			if (fill.colors) fill.colors.value = '';
			fill.rotate = true;
			fill.src = url;
			
			fill.size = '1,1';
			fill.position = '0,0';
			fill.origin = '0,0';
			fill.aspect = 'ignore'; // ignore, atleast, atmost
			fill.on = true;

			if (!left) left = 0;
			if (!top) top = 0;
			this._boxCoords = width ? { left: left + 0.5, top: top + 0.5, width: width, height: height } : null;
			this._transform();
			return this;
		},

		/* stroke */
		
		stroke: function(color, width, cap, join){
			var stroke = this.strokeElement;
			this._strokeWidth = (width != null) ? width : 1;
			stroke.weight = (width != null) ? width + 'px' : 1;
			stroke.endcap = (cap != null) ? ((cap == 'butt') ? 'flat' : cap) : 'round';
			stroke.joinstyle = (join != null) ? join : 'round';

			this._setColor('stroke', color);
			return this;
		}

	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Transform = __webpack_require__(41);
	var Element = __webpack_require__(53);
	var DOM = __webpack_require__(48);

	module.exports = Class(Element, Transform, {

		initialize: function(tag){
			//this.uid = uniqueID();
			var element = this.element = DOM.createElement(tag);
			//element.setAttribute('id', 'e' + this.uid);
		},

		_place: function(){
			if (this.parentNode){
				this._transform();
			}
		},

		// visibility

		hide: function(){
			this.element.style.display = 'none';
			return this;
		},

		show: function(){
			this.element.style.display = '';
			return this;
		},

		// interaction

		indicate: function(cursor, tooltip){
			if (cursor) this.element.style.cursor = cursor;
			if (tooltip) this.element.title = tooltip;
			return this;
		}

	});


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Dummy = __webpack_require__(43);
	var Native = __webpack_require__(35);

	module.exports = Class(Dummy, Native, {

		dummy_inject: Dummy.prototype.inject,
		dummy_injectBefore: Dummy.prototype.injectBefore,
		dummy_eject: Dummy.prototype.eject,
		native_inject: Native.prototype.inject,
		native_injectBefore: Native.prototype.injectBefore,
		native_eject: Native.prototype.eject,

		inject: function(container){
			this.dummy_inject(container);
			this.native_inject(container);
			return this;
		},

		injectBefore: function(sibling){
			this.dummy_injectBefore(sibling);
			this.native_injectBefore(sibling);
			return this;
		},

		eject: function(){
			this.dummy_eject();
			this.native_eject();
			return this;
		}

	});


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Transform = __webpack_require__(41);
	var Container = __webpack_require__(34);
	var Node = __webpack_require__(52);

	module.exports = Class(Node, Container, {
		
		element_initialize: Node.prototype.initialize,
		
		initialize: function(width, height){
			this.element_initialize('group');
			this.width = width;
			this.height = height;
		},

		_transform: function(){
			var element = this.element;
			element.coordorigin = '0,0';
			element.coordsize = '1000,1000';
			element.style.left = 0;
			element.style.top = 0;
			element.style.width = 1000;
			element.style.height = 1000;
			element.style.rotation = 0;
			
			var container = this.parentNode;
			this._activeTransform = container ? new Transform(container._activeTransform).transform(this) : this;
			var node = this.firstChild;
			while (node){
				node._transform();
				node = node.nextSibling;
			}
		}

	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Transform = __webpack_require__(41);
	var Container = __webpack_require__(34);
	var Node = __webpack_require__(52);

	module.exports = Class(Node, Container, {

	  element_initialize: Node.prototype.initialize,

	  initialize: function(width, height){
	    this.element_initialize('clippingrectangle');
	    this.width = width;
	    this.height = height;
	  },

	  _transform: function(){
	    var element = this.element;
	    element.clip = true;
	    element.coordorigin = -this.x + ',' + (-1 * this.y);
	    element.coordsize = this.width + ',' + this.height;
	    // IE8 doesn't like clipBottom.  Don't ask me why.
	    // element.style.clipBottom = this.height + this.y;
	    element.style.clipLeft = this.x;
	    element.style.clipRight = this.width + this.x;
	    element.style.clipTop = this.y;
	    element.style.left = -this.x;
	    element.style.top = -this.y;
	    element.style.width = this.width + this.x;
	    element.style.height = this.height + this.y;
	    element.style.rotation = 0;

	    var container = this.parentNode;
	    this._activeTransform = container ? new Transform(container._activeTransform).transform(this) : this;
	    var node = this.firstChild;
	    while (node){
	      node._transform();
	      node = node.nextSibling;
	    }
	  }

	});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(33);
	var Base = __webpack_require__(51);
	var Path = __webpack_require__(49);
	var Surface = __webpack_require__(47);
	var Group = __webpack_require__(54);
	var DOM = __webpack_require__(48);

	var fontAnchors = { start: 'left', middle: 'center', end: 'right' };

	module.exports = Class(Base, {

		base_initialize: Base.prototype.initialize,

		initialize: function(text, font, alignment, path){
			this.base_initialize('shape');
			
			var p = this.pathElement = DOM.createElement('path');
			p.textpathok = true;
			this.element.appendChild(p);
			
			p = this.textPathElement = DOM.createElement("textpath");
			p.on = true;
			p.style['v-text-align'] = 'left';
			this.element.appendChild(p);
			
			this.draw.apply(this, arguments);
		},
		
		draw: function(text, font, alignment, path){
			var element = this.element,
			    textPath = this.textPathElement,
			    style = textPath.style;
			
			textPath.string = text;
			
			if (font){
				if (typeof font == 'string'){
					style.font = font;
				} else {
					for (var key in font){
						var ckey = key.camelCase ? key.camelCase() : key;
						if (ckey == 'fontFamily') style[ckey] = "'" + font[key] + "'";
						// NOT UNIVERSALLY SUPPORTED OPTIONS
						// else if (ckey == 'kerning') style['v-text-kern'] = !!font[key];
						// else if (ckey == 'rotateGlyphs') style['v-rotate-letters'] = !!font[key];
						// else if (ckey == 'letterSpacing') style['v-text-spacing'] = Number(font[key]) + '';
						else style[ckey] = font[key];
					}
				}
			}
			
			if (alignment) style['v-text-align'] = fontAnchors[alignment] || alignment;
			
			if (path){
				this.currentPath = path = new Path(path);
				this.element.path = path.toVML();
			} else if (!this.currentPath){
				var i = -1, offsetRows = '\n';
				while ((i = text.indexOf('\n', i + 1)) > -1) offsetRows += '\n';
				textPath.string = offsetRows + textPath.string;
				this.element.path = 'm0,0l1,0';
			}
			
			// Measuring the bounding box is currently necessary for gradients etc.
			
			// Clone element because the element is dead once it has been in the DOM
			element = element.cloneNode(true);
			style = element.style;
			
			// Reset coordinates while measuring
			element.coordorigin = '0,0';
			element.coordsize = '10000,10000';
			style.left = '0px';
			style.top = '0px';
			style.width = '10000px';
			style.height = '10000px';
			style.rotation = 0;
			element.removeChild(element.firstChild); // Remove skew
			
			// Inject the clone into the document
			
			var canvas = new Surface(1, 1),
			    group = new Group(), // Wrapping it in a group seems to alleviate some client rect weirdness
			    body = element.ownerDocument.body;
			
			canvas.inject(body);
			group.element.appendChild(element);
			group.inject(canvas);
			
			var ebb = element.getBoundingClientRect(),
			    cbb = canvas.toElement().getBoundingClientRect();
			
			canvas.eject();
			
			this.left = ebb.left - cbb.left;
			this.top = ebb.top - cbb.top;
			this.width = ebb.right - ebb.left;
			this.height = ebb.bottom - ebb.top;
			this.right = ebb.right - cbb.left;
			this.bottom = ebb.bottom - cbb.top;
			
			this._transform();

			//this._size = { left: this.left, top: this.top, width: this.width, height: this.height};
			return this;
		}

	});


/***/ }
/******/ ]);