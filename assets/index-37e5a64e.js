var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_001 = __commonJS({
  "assets/index-37e5a64e.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e2 = m2[i];
        if (typeof e2 !== "string" && !Array.isArray(e2)) {
          for (const k2 in e2) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d2 = Object.getOwnPropertyDescriptor(e2, k2);
              if (d2) {
                Object.defineProperty(n2, k2, d2.get ? d2 : {
                  enumerable: true,
                  get: () => e2[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node2 of mutation.addedNodes) {
            if (node2.tagName === "LINK" && node2.rel === "modulepreload")
              processPreload(node2);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntimeExports = {};
    var jsxRuntime = {
      get exports() {
        return jsxRuntimeExports;
      },
      set exports(v2) {
        jsxRuntimeExports = v2;
      }
    };
    var reactJsxRuntime_production_min = {};
    var reactExports = {};
    var react = {
      get exports() {
        return reactExports;
      },
      set exports(v2) {
        reactExports = v2;
      }
    };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
    function A$2(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z$2 && a[z$2] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b2) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b2, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b2, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (null != b2)
        for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
          J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (1 === g2)
        c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
          f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a && a.defaultProps)
        for (d2 in g2 = a.defaultProps, g2)
          void 0 === c2[d2] && (c2[d2] = g2[d2]);
      return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
    }
    function N$1(a, b2) {
      return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$2;
    }
    function escape$2(a) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b2[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b2) {
      return "object" === typeof a && null !== a && null != a.key ? escape$2("" + a.key) : b2.toString(36);
    }
    function R$1(a, b2, e2, d2, c2) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2)
        a = null;
      var h2 = false;
      if (null === a)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l$2:
              case n$2:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
          return a2;
        })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I$1(a))
        for (var g2 = 0; g2 < a.length; g2++) {
          k2 = a[g2];
          var f2 = d2 + Q$1(k2, g2);
          h2 += R$1(k2, b2, e2, f2, c2);
        }
      else if (f2 = A$2(a), "function" === typeof f2)
        for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
          k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
      else if ("object" === k2)
        throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S$1(a, b2, e2) {
      if (null == a)
        return a;
      var d2 = [], c2 = 0;
      R$1(a, d2, "", "", function(a2) {
        return b2.call(e2, a2, c2++);
      });
      return d2;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b2 = a._result;
        b2 = b2();
        b2.then(function(b3) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b3;
        }, function(b3) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b3;
        });
        -1 === a._status && (a._status = 0, a._result = b2);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
      S$1(a, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a) {
      var b2 = 0;
      S$1(a, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$1(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$3;
    react_production_min.Profiler = r$2;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$2;
    react_production_min.Suspense = w$1;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.cloneElement = function(a, b2, e2) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
      if (null != b2) {
        void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
        void 0 !== b2.key && (c2 = "" + b2.key);
        if (a.type && a.type.defaultProps)
          var g2 = a.type.defaultProps;
        for (f2 in b2)
          J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2)
        d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l$2, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t$1, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b2 = M$1.bind(null, a);
      b2.type = a;
      return b2;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v$2, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function(a) {
      return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b2) {
      return { $$typeof: x$1, type: a, compare: void 0 === b2 ? null : b2 };
    };
    react_production_min.startTransition = function(a) {
      var b2 = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b2;
      }
    };
    react_production_min.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    react_production_min.useCallback = function(a, b2) {
      return U$1.current.useCallback(a, b2);
    };
    react_production_min.useContext = function(a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b2) {
      return U$1.current.useEffect(a, b2);
    };
    react_production_min.useId = function() {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b2, e2) {
      return U$1.current.useImperativeHandle(a, b2, e2);
    };
    react_production_min.useInsertionEffect = function(a, b2) {
      return U$1.current.useInsertionEffect(a, b2);
    };
    react_production_min.useLayoutEffect = function(a, b2) {
      return U$1.current.useLayoutEffect(a, b2);
    };
    react_production_min.useMemo = function(a, b2) {
      return U$1.current.useMemo(a, b2);
    };
    react_production_min.useReducer = function(a, b2, e2) {
      return U$1.current.useReducer(a, b2, e2);
    };
    react_production_min.useRef = function(a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b2, e2) {
      return U$1.current.useSyncExternalStore(a, b2, e2);
    };
    react_production_min.useTransition = function() {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.2.0";
    (function(module2) {
      {
        module2.exports = react_production_min;
      }
    })(react);
    const React$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const React$2 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: React$1
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
    function q$1(c2, a, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a.key && (e2 = "" + a.key);
      void 0 !== a.ref && (h2 = a.ref);
      for (b2 in a)
        m$2.call(a, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a[b2]);
      if (c2 && c2.defaultProps)
        for (b2 in a = c2.defaultProps, a)
          void 0 === d2[b2] && (d2[b2] = a[b2]);
      return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
    }
    reactJsxRuntime_production_min.Fragment = l$1;
    reactJsxRuntime_production_min.jsx = q$1;
    reactJsxRuntime_production_min.jsxs = q$1;
    (function(module2) {
      {
        module2.exports = reactJsxRuntime_production_min;
      }
    })(jsxRuntime);
    const Fragment = jsxRuntimeExports.Fragment;
    const jsx = jsxRuntimeExports.jsx;
    const jsxs = jsxRuntimeExports.jsxs;
    function _extends$9() {
      _extends$9 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$9.apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose$2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key2, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key2 = sourceKeys[i];
        if (excluded.indexOf(key2) >= 0)
          continue;
        target[key2] = source[key2];
      }
      return target;
    }
    var reactIsExports = {};
    var reactIs$1 = {
      get exports() {
        return reactIsExports;
      },
      set exports(v2) {
        reactIsExports = v2;
      }
    };
    var reactIs_production_min = {};
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m$1 = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p$1 = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r$1 = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v$1 = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
    function z$1(a) {
      if ("object" === typeof a && null !== a) {
        var u2 = a.$$typeof;
        switch (u2) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m$1:
              case e:
              case g:
              case f:
              case p$1:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r$1:
                  case h:
                    return a;
                  default:
                    return u2;
                }
            }
          case d:
            return u2;
        }
      }
    }
    function A$1(a) {
      return z$1(a) === m$1;
    }
    reactIs_production_min.AsyncMode = l;
    reactIs_production_min.ConcurrentMode = m$1;
    reactIs_production_min.ContextConsumer = k;
    reactIs_production_min.ContextProvider = h;
    reactIs_production_min.Element = c;
    reactIs_production_min.ForwardRef = n;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t;
    reactIs_production_min.Memo = r$1;
    reactIs_production_min.Portal = d;
    reactIs_production_min.Profiler = g;
    reactIs_production_min.StrictMode = f;
    reactIs_production_min.Suspense = p$1;
    reactIs_production_min.isAsyncMode = function(a) {
      return A$1(a) || z$1(a) === l;
    };
    reactIs_production_min.isConcurrentMode = A$1;
    reactIs_production_min.isContextConsumer = function(a) {
      return z$1(a) === k;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return z$1(a) === h;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return z$1(a) === n;
    };
    reactIs_production_min.isFragment = function(a) {
      return z$1(a) === e;
    };
    reactIs_production_min.isLazy = function(a) {
      return z$1(a) === t;
    };
    reactIs_production_min.isMemo = function(a) {
      return z$1(a) === r$1;
    };
    reactIs_production_min.isPortal = function(a) {
      return z$1(a) === d;
    };
    reactIs_production_min.isProfiler = function(a) {
      return z$1(a) === g;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return z$1(a) === f;
    };
    reactIs_production_min.isSuspense = function(a) {
      return z$1(a) === p$1;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m$1 || a === g || a === f || a === p$1 || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r$1 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v$1);
    };
    reactIs_production_min.typeOf = z$1;
    (function(module2) {
      {
        module2.exports = reactIs_production_min;
      }
    })(reactIs$1);
    var reactIs = reactIsExports;
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols$1) {
          keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key2 = keys[i];
          if (!KNOWN_STATICS[key2] && !(blacklist && blacklist[key2]) && !(sourceStatics && sourceStatics[key2]) && !(targetStatics && targetStatics[key2])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key2);
            try {
              defineProperty(targetComponent, key2, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    var hoistNonReactStatics_cjs = hoistNonReactStatics;
    var isProduction = true;
    function warning$1(condition, message) {
      if (!isProduction) {
        if (condition) {
          return;
        }
        var text = "Warning: " + message;
        if (typeof console !== "undefined") {
          console.warn(text);
        }
        try {
          throw Error(text);
        } catch (x2) {
        }
      }
    }
    var propTypesExports = {};
    var propTypes = {
      get exports() {
        return propTypesExports;
      },
      set exports(v2) {
        propTypesExports = v2;
      }
    };
    var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    var factoryWithThrowingShims = function() {
      function shim2(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim2.isRequired = shim2;
      function getShim() {
        return shim2;
      }
      var ReactPropTypes = {
        array: shim2,
        bigint: shim2,
        bool: shim2,
        func: shim2,
        number: shim2,
        object: shim2,
        string: shim2,
        symbol: shim2,
        any: shim2,
        arrayOf: getShim,
        element: shim2,
        elementType: shim2,
        instanceOf: getShim,
        node: shim2,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    {
      propTypes.exports = factoryWithThrowingShims();
    }
    var getDisplayName$1 = {};
    Object.defineProperty(getDisplayName$1, "__esModule", {
      value: true
    });
    getDisplayName$1.default = getDisplayName;
    function getDisplayName(Component) {
      return Component.displayName || Component.name || (typeof Component === "string" && Component.length > 0 ? Component : "Unknown");
    }
    function _defineProperty$2(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    function _extends$8() {
      _extends$8 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$8.apply(this, arguments);
    }
    function _inheritsLoose$2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    function _assertThisInitialized$2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function createThemeProvider(context) {
      var ThemeProvider2 = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose$2(ThemeProvider3, _React$Component);
        function ThemeProvider3() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
          _defineProperty$2(_assertThisInitialized$2(_assertThisInitialized$2(_this)), "cachedTheme", void 0);
          _defineProperty$2(_assertThisInitialized$2(_assertThisInitialized$2(_this)), "lastOuterTheme", void 0);
          _defineProperty$2(_assertThisInitialized$2(_assertThisInitialized$2(_this)), "lastTheme", void 0);
          _defineProperty$2(_assertThisInitialized$2(_assertThisInitialized$2(_this)), "renderProvider", function(outerTheme) {
            var children = _this.props.children;
            return React$1.createElement(context.Provider, {
              value: _this.getTheme(outerTheme)
            }, children);
          });
          return _this;
        }
        var _proto = ThemeProvider3.prototype;
        _proto.getTheme = function getTheme(outerTheme) {
          if (this.props.theme !== this.lastTheme || outerTheme !== this.lastOuterTheme || !this.cachedTheme) {
            this.lastOuterTheme = outerTheme;
            this.lastTheme = this.props.theme;
            if (typeof this.lastTheme === "function") {
              var theme = this.props.theme;
              this.cachedTheme = theme(outerTheme);
            } else {
              var _theme = this.props.theme;
              this.cachedTheme = outerTheme ? _extends$8({}, outerTheme, _theme) : _theme;
            }
          }
          return this.cachedTheme;
        };
        _proto.render = function render() {
          var children = this.props.children;
          if (!children) {
            return null;
          }
          return React$1.createElement(context.Consumer, null, this.renderProvider);
        };
        return ThemeProvider3;
      }(React$1.Component);
      return ThemeProvider2;
    }
    function createWithTheme(context) {
      return function hoc(Component) {
        var withTheme = React$1.forwardRef(function(props, ref) {
          return React$1.createElement(context.Consumer, null, function(theme) {
            return React$1.createElement(Component, _extends$8({
              theme,
              ref
            }, props));
          });
        });
        hoistNonReactStatics_cjs(withTheme, Component);
        return withTheme;
      };
    }
    function createUseTheme(context) {
      var useTheme2 = function useTheme3() {
        var theme = React$1.useContext(context);
        return theme;
      };
      return useTheme2;
    }
    function createTheming(context) {
      return {
        context,
        withTheme: createWithTheme(context),
        useTheme: createUseTheme(context),
        ThemeProvider: createThemeProvider(context)
      };
    }
    var ThemeContext$3 = reactExports.createContext();
    createTheming(ThemeContext$3);
    var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$3(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$3(document)) === "object" && document.nodeType === 9;
    function _extends$7() {
      _extends$7 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$7.apply(this, arguments);
    }
    function _typeof$2(obj) {
      "@babel/helpers - typeof";
      return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof$2(obj);
    }
    function _toPrimitive$1(input, hint) {
      if (_typeof$2(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof$2(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey$1(arg) {
      var key2 = _toPrimitive$1(arg, "string");
      return _typeof$2(key2) === "symbol" ? key2 : String(key2);
    }
    function _defineProperties$1(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
      }
    }
    function _createClass$1(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties$1(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties$1(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _setPrototypeOf$1(o, p2) {
      _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf$1(o, p2);
    }
    function _inheritsLoose$1(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf$1(subClass, superClass);
    }
    function _assertThisInitialized$1(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key2, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key2 = sourceKeys[i];
        if (excluded.indexOf(key2) >= 0)
          continue;
        target[key2] = source[key2];
      }
      return target;
    }
    var plainObjectConstrurctor = {}.constructor;
    function cloneStyle(style2) {
      if (style2 == null || typeof style2 !== "object")
        return style2;
      if (Array.isArray(style2))
        return style2.map(cloneStyle);
      if (style2.constructor !== plainObjectConstrurctor)
        return style2;
      var newStyle = {};
      for (var name2 in style2) {
        newStyle[name2] = cloneStyle(style2[name2]);
      }
      return newStyle;
    }
    function createRule(name2, decl, options) {
      if (name2 === void 0) {
        name2 = "unnamed";
      }
      var jss = options.jss;
      var declCopy = cloneStyle(decl);
      var rule = jss.plugins.onCreateRule(name2, declCopy, options);
      if (rule)
        return rule;
      if (name2[0] === "@")
        ;
      return null;
    }
    var join = function join2(value, by) {
      var result2 = "";
      for (var i = 0; i < value.length; i++) {
        if (value[i] === "!important")
          break;
        if (result2)
          result2 += by;
        result2 += value[i];
      }
      return result2;
    };
    var toCssValue = function toCssValue2(value) {
      if (!Array.isArray(value))
        return value;
      var cssValue = "";
      if (Array.isArray(value[0])) {
        for (var i = 0; i < value.length; i++) {
          if (value[i] === "!important")
            break;
          if (cssValue)
            cssValue += ", ";
          cssValue += join(value[i], " ");
        }
      } else
        cssValue = join(value, ", ");
      if (value[value.length - 1] === "!important") {
        cssValue += " !important";
      }
      return cssValue;
    };
    function getWhitespaceSymbols(options) {
      if (options && options.format === false) {
        return {
          linebreak: "",
          space: ""
        };
      }
      return {
        linebreak: "\n",
        space: " "
      };
    }
    function indentStr(str, indent) {
      var result2 = "";
      for (var index2 = 0; index2 < indent; index2++) {
        result2 += "  ";
      }
      return result2 + str;
    }
    function toCss(selector, style2, options) {
      if (options === void 0) {
        options = {};
      }
      var result2 = "";
      if (!style2)
        return result2;
      var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
      var fallbacks = style2.fallbacks;
      if (options.format === false) {
        indent = -Infinity;
      }
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
      if (selector)
        indent++;
      if (fallbacks) {
        if (Array.isArray(fallbacks)) {
          for (var index2 = 0; index2 < fallbacks.length; index2++) {
            var fallback = fallbacks[index2];
            for (var prop in fallback) {
              var value = fallback[prop];
              if (value != null) {
                if (result2)
                  result2 += linebreak;
                result2 += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
              }
            }
          }
        } else {
          for (var _prop in fallbacks) {
            var _value = fallbacks[_prop];
            if (_value != null) {
              if (result2)
                result2 += linebreak;
              result2 += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
            }
          }
        }
      }
      for (var _prop2 in style2) {
        var _value2 = style2[_prop2];
        if (_value2 != null && _prop2 !== "fallbacks") {
          if (result2)
            result2 += linebreak;
          result2 += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
        }
      }
      if (!result2 && !options.allowEmpty)
        return result2;
      if (!selector)
        return result2;
      indent--;
      if (result2)
        result2 = "" + linebreak + result2 + linebreak;
      return indentStr("" + selector + space + "{" + result2, indent) + indentStr("}", indent);
    }
    var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
    var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
    var escape$1 = function(str) {
      return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
    };
    var BaseStyleRule = /* @__PURE__ */ function() {
      function BaseStyleRule2(key2, style2, options) {
        this.type = "style";
        this.isProcessed = false;
        var sheet = options.sheet, Renderer = options.Renderer;
        this.key = key2;
        this.options = options;
        this.style = style2;
        if (sheet)
          this.renderer = sheet.renderer;
        else if (Renderer)
          this.renderer = new Renderer();
      }
      var _proto = BaseStyleRule2.prototype;
      _proto.prop = function prop(name2, value, options) {
        if (value === void 0)
          return this.style[name2];
        var force = options ? options.force : false;
        if (!force && this.style[name2] === value)
          return this;
        var newValue = value;
        if (!options || options.process !== false) {
          newValue = this.options.jss.plugins.onChangeValue(value, name2, this);
        }
        var isEmpty2 = newValue == null || newValue === false;
        var isDefined = name2 in this.style;
        if (isEmpty2 && !isDefined && !force)
          return this;
        var remove = isEmpty2 && isDefined;
        if (remove)
          delete this.style[name2];
        else
          this.style[name2] = newValue;
        if (this.renderable && this.renderer) {
          if (remove)
            this.renderer.removeProperty(this.renderable, name2);
          else
            this.renderer.setProperty(this.renderable, name2, newValue);
          return this;
        }
        var sheet = this.options.sheet;
        if (sheet && sheet.attached)
          ;
        return this;
      };
      return BaseStyleRule2;
    }();
    var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
      _inheritsLoose$1(StyleRule2, _BaseStyleRule);
      function StyleRule2(key2, style2, options) {
        var _this;
        _this = _BaseStyleRule.call(this, key2, style2, options) || this;
        var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
        if (selector) {
          _this.selectorText = selector;
        } else if (scoped !== false) {
          _this.id = generateId(_assertThisInitialized$1(_assertThisInitialized$1(_this)), sheet);
          _this.selectorText = "." + escape$1(_this.id);
        }
        return _this;
      }
      var _proto2 = StyleRule2.prototype;
      _proto2.applyTo = function applyTo(renderable) {
        var renderer = this.renderer;
        if (renderer) {
          var json = this.toJSON();
          for (var prop in json) {
            renderer.setProperty(renderable, prop, json[prop]);
          }
        }
        return this;
      };
      _proto2.toJSON = function toJSON() {
        var json = {};
        for (var prop in this.style) {
          var value = this.style[prop];
          if (typeof value !== "object")
            json[prop] = value;
          else if (Array.isArray(value))
            json[prop] = toCssValue(value);
        }
        return json;
      };
      _proto2.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends$7({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.selectorText, this.style, opts);
      };
      _createClass$1(StyleRule2, [{
        key: "selector",
        set: function set(selector) {
          if (selector === this.selectorText)
            return;
          this.selectorText = selector;
          var renderer = this.renderer, renderable = this.renderable;
          if (!renderable || !renderer)
            return;
          var hasChanged = renderer.setSelector(renderable, selector);
          if (!hasChanged) {
            renderer.replaceRule(renderable, this);
          }
        },
        get: function get2() {
          return this.selectorText;
        }
      }]);
      return StyleRule2;
    }(BaseStyleRule);
    var pluginStyleRule = {
      onCreateRule: function onCreateRule(key2, style2, options) {
        if (key2[0] === "@" || options.parent && options.parent.type === "keyframes") {
          return null;
        }
        return new StyleRule(key2, style2, options);
      }
    };
    var defaultToStringOptions = {
      indent: 1,
      children: true
    };
    var atRegExp = /@([\w-]+)/;
    var ConditionalRule = /* @__PURE__ */ function() {
      function ConditionalRule2(key2, styles, options) {
        this.type = "conditional";
        this.isProcessed = false;
        this.key = key2;
        var atMatch = key2.match(atRegExp);
        this.at = atMatch ? atMatch[1] : "unknown";
        this.query = options.name || "@" + this.at;
        this.options = options;
        this.rules = new RuleList(_extends$7({}, options, {
          parent: this
        }));
        for (var name2 in styles) {
          this.rules.add(name2, styles[name2]);
        }
        this.rules.process();
      }
      var _proto = ConditionalRule2.prototype;
      _proto.getRule = function getRule(name2) {
        return this.rules.get(name2);
      };
      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      };
      _proto.addRule = function addRule(name2, style2, options) {
        var rule = this.rules.add(name2, style2, options);
        if (!rule)
          return null;
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      };
      _proto.replaceRule = function replaceRule(name2, style2, options) {
        var newRule = this.rules.replace(name2, style2, options);
        if (newRule)
          this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      };
      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions;
        }
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        if (options.indent == null)
          options.indent = defaultToStringOptions.indent;
        if (options.children == null)
          options.children = defaultToStringOptions.children;
        if (options.children === false) {
          return this.query + " {}";
        }
        var children = this.rules.toString(options);
        return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
      };
      return ConditionalRule2;
    }();
    var keyRegExp = /@container|@media|@supports\s+/;
    var pluginConditionalRule = {
      onCreateRule: function onCreateRule(key2, styles, options) {
        return keyRegExp.test(key2) ? new ConditionalRule(key2, styles, options) : null;
      }
    };
    var defaultToStringOptions$1 = {
      indent: 1,
      children: true
    };
    var nameRegExp = /@keyframes\s+([\w-]+)/;
    var KeyframesRule = /* @__PURE__ */ function() {
      function KeyframesRule2(key2, frames, options) {
        this.type = "keyframes";
        this.at = "@keyframes";
        this.isProcessed = false;
        var nameMatch = key2.match(nameRegExp);
        if (nameMatch && nameMatch[1]) {
          this.name = nameMatch[1];
        } else {
          this.name = "noname";
        }
        this.key = this.type + "-" + this.name;
        this.options = options;
        var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
        this.id = scoped === false ? this.name : escape$1(generateId(this, sheet));
        this.rules = new RuleList(_extends$7({}, options, {
          parent: this
        }));
        for (var name2 in frames) {
          this.rules.add(name2, frames[name2], _extends$7({}, options, {
            parent: this
          }));
        }
        this.rules.process();
      }
      var _proto = KeyframesRule2.prototype;
      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions$1;
        }
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        if (options.indent == null)
          options.indent = defaultToStringOptions$1.indent;
        if (options.children == null)
          options.children = defaultToStringOptions$1.children;
        if (options.children === false) {
          return this.at + " " + this.id + " {}";
        }
        var children = this.rules.toString(options);
        if (children)
          children = "" + linebreak + children + linebreak;
        return this.at + " " + this.id + " {" + children + "}";
      };
      return KeyframesRule2;
    }();
    var keyRegExp$1 = /@keyframes\s+/;
    var refRegExp$1 = /\$([\w-]+)/g;
    var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
      if (typeof val === "string") {
        return val.replace(refRegExp$1, function(match2, name2) {
          if (name2 in keyframes) {
            return keyframes[name2];
          }
          return match2;
        });
      }
      return val;
    };
    var replaceRef = function replaceRef2(style2, prop, keyframes) {
      var value = style2[prop];
      var refKeyframe = findReferencedKeyframe(value, keyframes);
      if (refKeyframe !== value) {
        style2[prop] = refKeyframe;
      }
    };
    var pluginKeyframesRule = {
      onCreateRule: function onCreateRule(key2, frames, options) {
        return typeof key2 === "string" && keyRegExp$1.test(key2) ? new KeyframesRule(key2, frames, options) : null;
      },
      // Animation name ref replacer.
      onProcessStyle: function onProcessStyle(style2, rule, sheet) {
        if (rule.type !== "style" || !sheet)
          return style2;
        if ("animation-name" in style2)
          replaceRef(style2, "animation-name", sheet.keyframes);
        if ("animation" in style2)
          replaceRef(style2, "animation", sheet.keyframes);
        return style2;
      },
      onChangeValue: function onChangeValue(val, prop, rule) {
        var sheet = rule.options.sheet;
        if (!sheet) {
          return val;
        }
        switch (prop) {
          case "animation":
            return findReferencedKeyframe(val, sheet.keyframes);
          case "animation-name":
            return findReferencedKeyframe(val, sheet.keyframes);
          default:
            return val;
        }
      }
    };
    var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
      _inheritsLoose$1(KeyframeRule2, _BaseStyleRule);
      function KeyframeRule2() {
        return _BaseStyleRule.apply(this, arguments) || this;
      }
      var _proto = KeyframeRule2.prototype;
      _proto.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends$7({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.key, this.style, opts);
      };
      return KeyframeRule2;
    }(BaseStyleRule);
    var pluginKeyframeRule = {
      onCreateRule: function onCreateRule(key2, style2, options) {
        if (options.parent && options.parent.type === "keyframes") {
          return new KeyframeRule(key2, style2, options);
        }
        return null;
      }
    };
    var FontFaceRule = /* @__PURE__ */ function() {
      function FontFaceRule2(key2, style2, options) {
        this.type = "font-face";
        this.at = "@font-face";
        this.isProcessed = false;
        this.key = key2;
        this.style = style2;
        this.options = options;
      }
      var _proto = FontFaceRule2.prototype;
      _proto.toString = function toString(options) {
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        if (Array.isArray(this.style)) {
          var str = "";
          for (var index2 = 0; index2 < this.style.length; index2++) {
            str += toCss(this.at, this.style[index2]);
            if (this.style[index2 + 1])
              str += linebreak;
          }
          return str;
        }
        return toCss(this.at, this.style, options);
      };
      return FontFaceRule2;
    }();
    var keyRegExp$2 = /@font-face/;
    var pluginFontFaceRule = {
      onCreateRule: function onCreateRule(key2, style2, options) {
        return keyRegExp$2.test(key2) ? new FontFaceRule(key2, style2, options) : null;
      }
    };
    var ViewportRule = /* @__PURE__ */ function() {
      function ViewportRule2(key2, style2, options) {
        this.type = "viewport";
        this.at = "@viewport";
        this.isProcessed = false;
        this.key = key2;
        this.style = style2;
        this.options = options;
      }
      var _proto = ViewportRule2.prototype;
      _proto.toString = function toString(options) {
        return toCss(this.key, this.style, options);
      };
      return ViewportRule2;
    }();
    var pluginViewportRule = {
      onCreateRule: function onCreateRule(key2, style2, options) {
        return key2 === "@viewport" || key2 === "@-ms-viewport" ? new ViewportRule(key2, style2, options) : null;
      }
    };
    var SimpleRule = /* @__PURE__ */ function() {
      function SimpleRule2(key2, value, options) {
        this.type = "simple";
        this.isProcessed = false;
        this.key = key2;
        this.value = value;
        this.options = options;
      }
      var _proto = SimpleRule2.prototype;
      _proto.toString = function toString(options) {
        if (Array.isArray(this.value)) {
          var str = "";
          for (var index2 = 0; index2 < this.value.length; index2++) {
            str += this.key + " " + this.value[index2] + ";";
            if (this.value[index2 + 1])
              str += "\n";
          }
          return str;
        }
        return this.key + " " + this.value + ";";
      };
      return SimpleRule2;
    }();
    var keysMap = {
      "@charset": true,
      "@import": true,
      "@namespace": true
    };
    var pluginSimpleRule = {
      onCreateRule: function onCreateRule(key2, value, options) {
        return key2 in keysMap ? new SimpleRule(key2, value, options) : null;
      }
    };
    var plugins$1 = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
    var defaultUpdateOptions = {
      process: true
    };
    var forceUpdateOptions = {
      force: true,
      process: true
      /**
       * Contains rules objects and allows adding/removing etc.
       * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
       */
    };
    var RuleList = /* @__PURE__ */ function() {
      function RuleList2(options) {
        this.map = {};
        this.raw = {};
        this.index = [];
        this.counter = 0;
        this.options = options;
        this.classes = options.classes;
        this.keyframes = options.keyframes;
      }
      var _proto = RuleList2.prototype;
      _proto.add = function add(name2, decl, ruleOptions) {
        var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
        var options = _extends$7({
          classes: this.classes,
          parent,
          sheet,
          jss,
          Renderer,
          generateId,
          scoped,
          name: name2,
          keyframes: this.keyframes,
          selector: void 0
        }, ruleOptions);
        var key2 = name2;
        if (name2 in this.raw) {
          key2 = name2 + "-d" + this.counter++;
        }
        this.raw[key2] = decl;
        if (key2 in this.classes) {
          options.selector = "." + escape$1(this.classes[key2]);
        }
        var rule = createRule(key2, decl, options);
        if (!rule)
          return null;
        this.register(rule);
        var index2 = options.index === void 0 ? this.index.length : options.index;
        this.index.splice(index2, 0, rule);
        return rule;
      };
      _proto.replace = function replace2(name2, decl, ruleOptions) {
        var oldRule = this.get(name2);
        var oldIndex = this.index.indexOf(oldRule);
        if (oldRule) {
          this.remove(oldRule);
        }
        var options = ruleOptions;
        if (oldIndex !== -1)
          options = _extends$7({}, ruleOptions, {
            index: oldIndex
          });
        return this.add(name2, decl, options);
      };
      _proto.get = function get2(nameOrSelector) {
        return this.map[nameOrSelector];
      };
      _proto.remove = function remove(rule) {
        this.unregister(rule);
        delete this.raw[rule.key];
        this.index.splice(this.index.indexOf(rule), 1);
      };
      _proto.indexOf = function indexOf(rule) {
        return this.index.indexOf(rule);
      };
      _proto.process = function process() {
        var plugins2 = this.options.jss.plugins;
        this.index.slice(0).forEach(plugins2.onProcessRule, plugins2);
      };
      _proto.register = function register(rule) {
        this.map[rule.key] = rule;
        if (rule instanceof StyleRule) {
          this.map[rule.selector] = rule;
          if (rule.id)
            this.classes[rule.key] = rule.id;
        } else if (rule instanceof KeyframesRule && this.keyframes) {
          this.keyframes[rule.name] = rule.id;
        }
      };
      _proto.unregister = function unregister(rule) {
        delete this.map[rule.key];
        if (rule instanceof StyleRule) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        } else if (rule instanceof KeyframesRule) {
          delete this.keyframes[rule.name];
        }
      };
      _proto.update = function update() {
        var name2;
        var data;
        var options;
        if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
          name2 = arguments.length <= 0 ? void 0 : arguments[0];
          data = arguments.length <= 1 ? void 0 : arguments[1];
          options = arguments.length <= 2 ? void 0 : arguments[2];
        } else {
          data = arguments.length <= 0 ? void 0 : arguments[0];
          options = arguments.length <= 1 ? void 0 : arguments[1];
          name2 = null;
        }
        if (name2) {
          this.updateOne(this.get(name2), data, options);
        } else {
          for (var index2 = 0; index2 < this.index.length; index2++) {
            this.updateOne(this.index[index2], data, options);
          }
        }
      };
      _proto.updateOne = function updateOne(rule, data, options) {
        if (options === void 0) {
          options = defaultUpdateOptions;
        }
        var _this$options2 = this.options, plugins2 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
        if (rule.rules instanceof RuleList2) {
          rule.rules.update(data, options);
          return;
        }
        var style2 = rule.style;
        plugins2.onUpdate(data, rule, sheet, options);
        if (options.process && style2 && style2 !== rule.style) {
          plugins2.onProcessStyle(rule.style, rule, sheet);
          for (var prop in rule.style) {
            var nextValue = rule.style[prop];
            var prevValue = style2[prop];
            if (nextValue !== prevValue) {
              rule.prop(prop, nextValue, forceUpdateOptions);
            }
          }
          for (var _prop in style2) {
            var _nextValue = rule.style[_prop];
            var _prevValue = style2[_prop];
            if (_nextValue == null && _nextValue !== _prevValue) {
              rule.prop(_prop, null, forceUpdateOptions);
            }
          }
        }
      };
      _proto.toString = function toString(options) {
        var str = "";
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        for (var index2 = 0; index2 < this.index.length; index2++) {
          var rule = this.index[index2];
          var css2 = rule.toString(options);
          if (!css2 && !link)
            continue;
          if (str)
            str += linebreak;
          str += css2;
        }
        return str;
      };
      return RuleList2;
    }();
    var StyleSheet$1 = /* @__PURE__ */ function() {
      function StyleSheet2(styles, options) {
        this.attached = false;
        this.deployed = false;
        this.classes = {};
        this.keyframes = {};
        this.options = _extends$7({}, options, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes
        });
        if (options.Renderer) {
          this.renderer = new options.Renderer(this);
        }
        this.rules = new RuleList(this.options);
        for (var name2 in styles) {
          this.rules.add(name2, styles[name2]);
        }
        this.rules.process();
      }
      var _proto = StyleSheet2.prototype;
      _proto.attach = function attach() {
        if (this.attached)
          return this;
        if (this.renderer)
          this.renderer.attach();
        this.attached = true;
        if (!this.deployed)
          this.deploy();
        return this;
      };
      _proto.detach = function detach() {
        if (!this.attached)
          return this;
        if (this.renderer)
          this.renderer.detach();
        this.attached = false;
        return this;
      };
      _proto.addRule = function addRule(name2, decl, options) {
        var queue = this.queue;
        if (this.attached && !queue)
          this.queue = [];
        var rule = this.rules.add(name2, decl, options);
        if (!rule)
          return null;
        this.options.jss.plugins.onProcessRule(rule);
        if (this.attached) {
          if (!this.deployed)
            return rule;
          if (queue)
            queue.push(rule);
          else {
            this.insertRule(rule);
            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = void 0;
            }
          }
          return rule;
        }
        this.deployed = false;
        return rule;
      };
      _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
        var oldRule = this.rules.get(nameOrSelector);
        if (!oldRule)
          return this.addRule(nameOrSelector, decl, options);
        var newRule = this.rules.replace(nameOrSelector, decl, options);
        if (newRule) {
          this.options.jss.plugins.onProcessRule(newRule);
        }
        if (this.attached) {
          if (!this.deployed)
            return newRule;
          if (this.renderer) {
            if (!newRule) {
              this.renderer.deleteRule(oldRule);
            } else if (oldRule.renderable) {
              this.renderer.replaceRule(oldRule.renderable, newRule);
            }
          }
          return newRule;
        }
        this.deployed = false;
        return newRule;
      };
      _proto.insertRule = function insertRule(rule) {
        if (this.renderer) {
          this.renderer.insertRule(rule);
        }
      };
      _proto.addRules = function addRules(styles, options) {
        var added = [];
        for (var name2 in styles) {
          var rule = this.addRule(name2, styles[name2], options);
          if (rule)
            added.push(rule);
        }
        return added;
      };
      _proto.getRule = function getRule(nameOrSelector) {
        return this.rules.get(nameOrSelector);
      };
      _proto.deleteRule = function deleteRule(name2) {
        var rule = typeof name2 === "object" ? name2 : this.rules.get(name2);
        if (!rule || // Style sheet was created without link: true and attached, in this case we
        // won't be able to remove the CSS rule from the DOM.
        this.attached && !rule.renderable) {
          return false;
        }
        this.rules.remove(rule);
        if (this.attached && rule.renderable && this.renderer) {
          return this.renderer.deleteRule(rule.renderable);
        }
        return true;
      };
      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      };
      _proto.deploy = function deploy() {
        if (this.renderer)
          this.renderer.deploy();
        this.deployed = true;
        return this;
      };
      _proto.update = function update() {
        var _this$rules;
        (_this$rules = this.rules).update.apply(_this$rules, arguments);
        return this;
      };
      _proto.updateOne = function updateOne(rule, data, options) {
        this.rules.updateOne(rule, data, options);
        return this;
      };
      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };
      return StyleSheet2;
    }();
    var PluginsRegistry = /* @__PURE__ */ function() {
      function PluginsRegistry2() {
        this.plugins = {
          internal: [],
          external: []
        };
        this.registry = {};
      }
      var _proto = PluginsRegistry2.prototype;
      _proto.onCreateRule = function onCreateRule(name2, decl, options) {
        for (var i = 0; i < this.registry.onCreateRule.length; i++) {
          var rule = this.registry.onCreateRule[i](name2, decl, options);
          if (rule)
            return rule;
        }
        return null;
      };
      _proto.onProcessRule = function onProcessRule2(rule) {
        if (rule.isProcessed)
          return;
        var sheet = rule.options.sheet;
        for (var i = 0; i < this.registry.onProcessRule.length; i++) {
          this.registry.onProcessRule[i](rule, sheet);
        }
        if (rule.style)
          this.onProcessStyle(rule.style, rule, sheet);
        rule.isProcessed = true;
      };
      _proto.onProcessStyle = function onProcessStyle(style2, rule, sheet) {
        for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
          rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
        }
      };
      _proto.onProcessSheet = function onProcessSheet(sheet) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
          this.registry.onProcessSheet[i](sheet);
        }
      };
      _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
        for (var i = 0; i < this.registry.onUpdate.length; i++) {
          this.registry.onUpdate[i](data, rule, sheet, options);
        }
      };
      _proto.onChangeValue = function onChangeValue(value, prop, rule) {
        var processedValue = value;
        for (var i = 0; i < this.registry.onChangeValue.length; i++) {
          processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
        }
        return processedValue;
      };
      _proto.use = function use(newPlugin, options) {
        if (options === void 0) {
          options = {
            queue: "external"
          };
        }
        var plugins2 = this.plugins[options.queue];
        if (plugins2.indexOf(newPlugin) !== -1) {
          return;
        }
        plugins2.push(newPlugin);
        this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
          for (var name2 in plugin) {
            if (name2 in registry) {
              registry[name2].push(plugin[name2]);
            }
          }
          return registry;
        }, {
          onCreateRule: [],
          onProcessRule: [],
          onProcessStyle: [],
          onProcessSheet: [],
          onChangeValue: [],
          onUpdate: []
        });
      };
      return PluginsRegistry2;
    }();
    var SheetsRegistry = /* @__PURE__ */ function() {
      function SheetsRegistry2() {
        this.registry = [];
      }
      var _proto = SheetsRegistry2.prototype;
      _proto.add = function add(sheet) {
        var registry = this.registry;
        var index2 = sheet.options.index;
        if (registry.indexOf(sheet) !== -1)
          return;
        if (registry.length === 0 || index2 >= this.index) {
          registry.push(sheet);
          return;
        }
        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index2) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      };
      _proto.reset = function reset() {
        this.registry = [];
      };
      _proto.remove = function remove(sheet) {
        var index2 = this.registry.indexOf(sheet);
        this.registry.splice(index2, 1);
      };
      _proto.toString = function toString(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose$1(_ref, ["attached"]);
        var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
        var css2 = "";
        for (var i = 0; i < this.registry.length; i++) {
          var sheet = this.registry[i];
          if (attached != null && sheet.attached !== attached) {
            continue;
          }
          if (css2)
            css2 += linebreak;
          css2 += sheet.toString(options);
        }
        return css2;
      };
      _createClass$1(SheetsRegistry2, [{
        key: "index",
        /**
         * Current highest index number.
         */
        get: function get2() {
          return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
        }
      }]);
      return SheetsRegistry2;
    }();
    var sheets = new SheetsRegistry();
    var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
    var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
    if (globalThis$1[ns] == null)
      globalThis$1[ns] = 0;
    var moduleId = globalThis$1[ns]++;
    var createGenerateId = function createGenerateId2(options) {
      if (options === void 0) {
        options = {};
      }
      var ruleCounter = 0;
      var generateId = function generateId2(rule, sheet) {
        ruleCounter += 1;
        var jssId = "";
        var prefix2 = "";
        if (sheet) {
          if (sheet.options.classNamePrefix) {
            prefix2 = sheet.options.classNamePrefix;
          }
          if (sheet.options.jss.id != null) {
            jssId = String(sheet.options.jss.id);
          }
        }
        if (options.minify) {
          return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
        }
        return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
      };
      return generateId;
    };
    var memoize$1 = function memoize2(fn) {
      var value;
      return function() {
        if (!value)
          value = fn();
        return value;
      };
    };
    var getPropertyValue = function getPropertyValue2(cssRule, prop) {
      try {
        if (cssRule.attributeStyleMap) {
          return cssRule.attributeStyleMap.get(prop);
        }
        return cssRule.style.getPropertyValue(prop);
      } catch (err) {
        return "";
      }
    };
    var setProperty = function setProperty2(cssRule, prop, value) {
      try {
        var cssValue = value;
        if (Array.isArray(value)) {
          cssValue = toCssValue(value);
        }
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.set(prop, cssValue);
        } else {
          var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
          var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
          cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
        }
      } catch (err) {
        return false;
      }
      return true;
    };
    var removeProperty = function removeProperty2(cssRule, prop) {
      try {
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.delete(prop);
        } else {
          cssRule.style.removeProperty(prop);
        }
      } catch (err) {
      }
    };
    var setSelector = function setSelector2(cssRule, selectorText) {
      cssRule.selectorText = selectorText;
      return cssRule.selectorText === selectorText;
    };
    var getHead = memoize$1(function() {
      return document.querySelector("head");
    });
    function findHigherSheet(registry, options) {
      for (var i = 0; i < registry.length; i++) {
        var sheet = registry[i];
        if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }
      return null;
    }
    function findHighestSheet(registry, options) {
      for (var i = registry.length - 1; i >= 0; i--) {
        var sheet = registry[i];
        if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }
      return null;
    }
    function findCommentNode(text) {
      var head = getHead();
      for (var i = 0; i < head.childNodes.length; i++) {
        var node2 = head.childNodes[i];
        if (node2.nodeType === 8 && node2.nodeValue.trim() === text) {
          return node2;
        }
      }
      return null;
    }
    function findPrevNode(options) {
      var registry = sheets.registry;
      if (registry.length > 0) {
        var sheet = findHigherSheet(registry, options);
        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element
          };
        }
        sheet = findHighestSheet(registry, options);
        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element.nextSibling
          };
        }
      }
      var insertionPoint = options.insertionPoint;
      if (insertionPoint && typeof insertionPoint === "string") {
        var comment2 = findCommentNode(insertionPoint);
        if (comment2) {
          return {
            parent: comment2.parentNode,
            node: comment2.nextSibling
          };
        }
      }
      return false;
    }
    function insertStyle(style2, options) {
      var insertionPoint = options.insertionPoint;
      var nextNode = findPrevNode(options);
      if (nextNode !== false && nextNode.parent) {
        nextNode.parent.insertBefore(style2, nextNode.node);
        return;
      }
      if (insertionPoint && typeof insertionPoint.nodeType === "number") {
        var insertionPointElement = insertionPoint;
        var parentNode = insertionPointElement.parentNode;
        if (parentNode)
          parentNode.insertBefore(style2, insertionPointElement.nextSibling);
        return;
      }
      getHead().appendChild(style2);
    }
    var getNonce = memoize$1(function() {
      var node2 = document.querySelector('meta[property="csp-nonce"]');
      return node2 ? node2.getAttribute("content") : null;
    });
    var _insertRule = function insertRule(container2, rule, index2) {
      try {
        if ("insertRule" in container2) {
          container2.insertRule(rule, index2);
        } else if ("appendRule" in container2) {
          container2.appendRule(rule);
        }
      } catch (err) {
        return false;
      }
      return container2.cssRules[index2];
    };
    var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container2, index2) {
      var maxIndex = container2.cssRules.length;
      if (index2 === void 0 || index2 > maxIndex) {
        return maxIndex;
      }
      return index2;
    };
    var createStyle = function createStyle2() {
      var el2 = document.createElement("style");
      el2.textContent = "\n";
      return el2;
    };
    var DomRenderer = /* @__PURE__ */ function() {
      function DomRenderer2(sheet) {
        this.getPropertyValue = getPropertyValue;
        this.setProperty = setProperty;
        this.removeProperty = removeProperty;
        this.setSelector = setSelector;
        this.hasInsertedRules = false;
        this.cssRules = [];
        if (sheet)
          sheets.add(sheet);
        this.sheet = sheet;
        var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
        this.element = element || createStyle();
        this.element.setAttribute("data-jss", "");
        if (media)
          this.element.setAttribute("media", media);
        if (meta)
          this.element.setAttribute("data-meta", meta);
        var nonce = getNonce();
        if (nonce)
          this.element.setAttribute("nonce", nonce);
      }
      var _proto = DomRenderer2.prototype;
      _proto.attach = function attach() {
        if (this.element.parentNode || !this.sheet)
          return;
        insertStyle(this.element, this.sheet.options);
        var deployed = Boolean(this.sheet && this.sheet.deployed);
        if (this.hasInsertedRules && deployed) {
          this.hasInsertedRules = false;
          this.deploy();
        }
      };
      _proto.detach = function detach() {
        if (!this.sheet)
          return;
        var parentNode = this.element.parentNode;
        if (parentNode)
          parentNode.removeChild(this.element);
        if (this.sheet.options.link) {
          this.cssRules = [];
          this.element.textContent = "\n";
        }
      };
      _proto.deploy = function deploy() {
        var sheet = this.sheet;
        if (!sheet)
          return;
        if (sheet.options.link) {
          this.insertRules(sheet.rules);
          return;
        }
        this.element.textContent = "\n" + sheet.toString() + "\n";
      };
      _proto.insertRules = function insertRules(rules, nativeParent) {
        for (var i = 0; i < rules.index.length; i++) {
          this.insertRule(rules.index[i], i, nativeParent);
        }
      };
      _proto.insertRule = function insertRule(rule, index2, nativeParent) {
        if (nativeParent === void 0) {
          nativeParent = this.element.sheet;
        }
        if (rule.rules) {
          var parent = rule;
          var latestNativeParent = nativeParent;
          if (rule.type === "conditional" || rule.type === "keyframes") {
            var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
            latestNativeParent = _insertRule(nativeParent, parent.toString({
              children: false
            }), _insertionIndex);
            if (latestNativeParent === false) {
              return false;
            }
            this.refCssRule(rule, _insertionIndex, latestNativeParent);
          }
          this.insertRules(parent.rules, latestNativeParent);
          return latestNativeParent;
        }
        var ruleStr = rule.toString();
        if (!ruleStr)
          return false;
        var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
        var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
        if (nativeRule === false) {
          return false;
        }
        this.hasInsertedRules = true;
        this.refCssRule(rule, insertionIndex, nativeRule);
        return nativeRule;
      };
      _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
        rule.renderable = cssRule;
        if (rule.options.parent instanceof StyleSheet$1) {
          this.cssRules.splice(index2, 0, cssRule);
        }
      };
      _proto.deleteRule = function deleteRule(cssRule) {
        var sheet = this.element.sheet;
        var index2 = this.indexOf(cssRule);
        if (index2 === -1)
          return false;
        sheet.deleteRule(index2);
        this.cssRules.splice(index2, 1);
        return true;
      };
      _proto.indexOf = function indexOf(cssRule) {
        return this.cssRules.indexOf(cssRule);
      };
      _proto.replaceRule = function replaceRule(cssRule, rule) {
        var index2 = this.indexOf(cssRule);
        if (index2 === -1)
          return false;
        this.element.sheet.deleteRule(index2);
        this.cssRules.splice(index2, 1);
        return this.insertRule(rule, index2);
      };
      _proto.getRules = function getRules2() {
        return this.element.sheet.cssRules;
      };
      return DomRenderer2;
    }();
    var instanceCounter = 0;
    var Jss = /* @__PURE__ */ function() {
      function Jss2(options) {
        this.id = instanceCounter++;
        this.version = "10.10.0";
        this.plugins = new PluginsRegistry();
        this.options = {
          id: {
            minify: false
          },
          createGenerateId,
          Renderer: isBrowser ? DomRenderer : null,
          plugins: []
        };
        this.generateId = createGenerateId({
          minify: false
        });
        for (var i = 0; i < plugins$1.length; i++) {
          this.plugins.use(plugins$1[i], {
            queue: "internal"
          });
        }
        this.setup(options);
      }
      var _proto = Jss2.prototype;
      _proto.setup = function setup(options) {
        if (options === void 0) {
          options = {};
        }
        if (options.createGenerateId) {
          this.options.createGenerateId = options.createGenerateId;
        }
        if (options.id) {
          this.options.id = _extends$7({}, this.options.id, options.id);
        }
        if (options.createGenerateId || options.id) {
          this.generateId = this.options.createGenerateId(this.options.id);
        }
        if (options.insertionPoint != null)
          this.options.insertionPoint = options.insertionPoint;
        if ("Renderer" in options) {
          this.options.Renderer = options.Renderer;
        }
        if (options.plugins)
          this.use.apply(this, options.plugins);
        return this;
      };
      _proto.createStyleSheet = function createStyleSheet2(styles, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, index2 = _options.index;
        if (typeof index2 !== "number") {
          index2 = sheets.index === 0 ? 0 : sheets.index + 1;
        }
        var sheet = new StyleSheet$1(styles, _extends$7({}, options, {
          jss: this,
          generateId: options.generateId || this.generateId,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index2
        }));
        this.plugins.onProcessSheet(sheet);
        return sheet;
      };
      _proto.removeStyleSheet = function removeStyleSheet(sheet) {
        sheet.detach();
        sheets.remove(sheet);
        return this;
      };
      _proto.createRule = function createRule$1(name2, style2, options) {
        if (style2 === void 0) {
          style2 = {};
        }
        if (options === void 0) {
          options = {};
        }
        if (typeof name2 === "object") {
          return this.createRule(void 0, name2, style2);
        }
        var ruleOptions = _extends$7({}, options, {
          name: name2,
          jss: this,
          Renderer: this.options.Renderer
        });
        if (!ruleOptions.generateId)
          ruleOptions.generateId = this.generateId;
        if (!ruleOptions.classes)
          ruleOptions.classes = {};
        if (!ruleOptions.keyframes)
          ruleOptions.keyframes = {};
        var rule = createRule(name2, style2, ruleOptions);
        if (rule)
          this.plugins.onProcessRule(rule);
        return rule;
      };
      _proto.use = function use() {
        var _this = this;
        for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
          plugins2[_key] = arguments[_key];
        }
        plugins2.forEach(function(plugin) {
          _this.plugins.use(plugin);
        });
        return this;
      };
      return Jss2;
    }();
    var createJss = function createJss2(options) {
      return new Jss(options);
    };
    var SheetsManager = /* @__PURE__ */ function() {
      function SheetsManager2() {
        this.length = 0;
        this.sheets = /* @__PURE__ */ new WeakMap();
      }
      var _proto = SheetsManager2.prototype;
      _proto.get = function get2(key2) {
        var entry = this.sheets.get(key2);
        return entry && entry.sheet;
      };
      _proto.add = function add(key2, sheet) {
        if (this.sheets.has(key2))
          return;
        this.length++;
        this.sheets.set(key2, {
          sheet,
          refs: 0
        });
      };
      _proto.manage = function manage(key2) {
        var entry = this.sheets.get(key2);
        if (entry) {
          if (entry.refs === 0) {
            entry.sheet.attach();
          }
          entry.refs++;
          return entry.sheet;
        }
        warning$1(false, "[JSS] SheetsManager: can't find sheet to manage");
        return void 0;
      };
      _proto.unmanage = function unmanage(key2) {
        var entry = this.sheets.get(key2);
        if (entry) {
          if (entry.refs > 0) {
            entry.refs--;
            if (entry.refs === 0)
              entry.sheet.detach();
          }
        } else {
          warning$1(false, "SheetsManager: can't find sheet to unmanage");
        }
      };
      _createClass$1(SheetsManager2, [{
        key: "size",
        get: function get2() {
          return this.length;
        }
      }]);
      return SheetsManager2;
    }();
    var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
    function getDynamicStyles(styles) {
      var to = null;
      for (var key2 in styles) {
        var value = styles[key2];
        var type = typeof value;
        if (type === "function") {
          if (!to)
            to = {};
          to[key2] = value;
        } else if (type === "object" && value !== null && !Array.isArray(value)) {
          var extracted = getDynamicStyles(value);
          if (extracted) {
            if (!to)
              to = {};
            to[key2] = extracted;
          }
        }
      }
      return to;
    }
    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */
    createJss();
    var now = Date.now();
    var fnValuesNs = "fnValues" + now;
    var fnRuleNs = "fnStyle" + ++now;
    var functionPlugin = function functionPlugin2() {
      return {
        onCreateRule: function onCreateRule(name2, decl, options) {
          if (typeof decl !== "function")
            return null;
          var rule = createRule(name2, {}, options);
          rule[fnRuleNs] = decl;
          return rule;
        },
        onProcessStyle: function onProcessStyle(style2, rule) {
          if (fnValuesNs in rule || fnRuleNs in rule)
            return style2;
          var fnValues = {};
          for (var prop in style2) {
            var value = style2[prop];
            if (typeof value !== "function")
              continue;
            delete style2[prop];
            fnValues[prop] = value;
          }
          rule[fnValuesNs] = fnValues;
          return style2;
        },
        onUpdate: function onUpdate(data, rule, sheet, options) {
          var styleRule = rule;
          var fnRule = styleRule[fnRuleNs];
          if (fnRule) {
            styleRule.style = fnRule(data) || {};
          }
          var fnValues = styleRule[fnValuesNs];
          if (fnValues) {
            for (var _prop in fnValues) {
              styleRule.prop(_prop, fnValues[_prop](data), options);
            }
          }
        }
      };
    };
    const functions = functionPlugin;
    function symbolObservablePonyfill(root2) {
      var result2;
      var Symbol2 = root2.Symbol;
      if (typeof Symbol2 === "function") {
        if (Symbol2.observable) {
          result2 = Symbol2.observable;
        } else {
          result2 = Symbol2("observable");
          Symbol2.observable = result2;
        }
      } else {
        result2 = "@@observable";
      }
      return result2;
    }
    var root$1;
    if (typeof self !== "undefined") {
      root$1 = self;
    } else if (typeof window !== "undefined") {
      root$1 = window;
    } else if (typeof global !== "undefined") {
      root$1 = global;
    } else if (typeof module !== "undefined") {
      root$1 = module;
    } else {
      root$1 = Function("return this")();
    }
    var result = symbolObservablePonyfill(root$1);
    var isObservable = function isObservable2(value) {
      return value && value[result] && value === value[result]();
    };
    var observablePlugin = function observablePlugin2(updateOptions) {
      return {
        onCreateRule: function onCreateRule(name2, decl, options) {
          if (!isObservable(decl))
            return null;
          var style$ = decl;
          var rule = createRule(name2, {}, options);
          style$.subscribe(function(style2) {
            for (var prop in style2) {
              rule.prop(prop, style2[prop], updateOptions);
            }
          });
          return rule;
        },
        onProcessRule: function onProcessRule2(rule) {
          if (rule && rule.type !== "style")
            return;
          var styleRule = rule;
          var style2 = styleRule.style;
          var _loop = function _loop2(prop2) {
            var value = style2[prop2];
            if (!isObservable(value))
              return "continue";
            delete style2[prop2];
            value.subscribe({
              next: function next2(nextValue) {
                styleRule.prop(prop2, nextValue, updateOptions);
              }
            });
          };
          for (var prop in style2) {
            var _ret = _loop(prop);
            if (_ret === "continue")
              continue;
          }
        }
      };
    };
    const observable = observablePlugin;
    var semiWithNl = /;\n/;
    var parse$1 = function parse2(cssText) {
      var style2 = {};
      var split = cssText.split(semiWithNl);
      for (var i = 0; i < split.length; i++) {
        var decl = (split[i] || "").trim();
        if (!decl)
          continue;
        var colonIndex = decl.indexOf(":");
        if (colonIndex === -1) {
          continue;
        }
        var prop = decl.substr(0, colonIndex).trim();
        var value = decl.substr(colonIndex + 1).trim();
        style2[prop] = value;
      }
      return style2;
    };
    var onProcessRule = function onProcessRule2(rule) {
      if (typeof rule.style === "string") {
        rule.style = parse$1(rule.style);
      }
    };
    function templatePlugin() {
      return {
        onProcessRule
      };
    }
    function _extends$6() {
      _extends$6 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$6.apply(this, arguments);
    }
    var at = "@global";
    var atPrefix = "@global ";
    var GlobalContainerRule = /* @__PURE__ */ function() {
      function GlobalContainerRule2(key2, styles, options) {
        this.type = "global";
        this.at = at;
        this.isProcessed = false;
        this.key = key2;
        this.options = options;
        this.rules = new RuleList(_extends$6({}, options, {
          parent: this
        }));
        for (var selector in styles) {
          this.rules.add(selector, styles[selector]);
        }
        this.rules.process();
      }
      var _proto = GlobalContainerRule2.prototype;
      _proto.getRule = function getRule(name2) {
        return this.rules.get(name2);
      };
      _proto.addRule = function addRule(name2, style2, options) {
        var rule = this.rules.add(name2, style2, options);
        if (rule)
          this.options.jss.plugins.onProcessRule(rule);
        return rule;
      };
      _proto.replaceRule = function replaceRule(name2, style2, options) {
        var newRule = this.rules.replace(name2, style2, options);
        if (newRule)
          this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      };
      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      };
      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };
      return GlobalContainerRule2;
    }();
    var GlobalPrefixedRule = /* @__PURE__ */ function() {
      function GlobalPrefixedRule2(key2, style2, options) {
        this.type = "global";
        this.at = at;
        this.isProcessed = false;
        this.key = key2;
        this.options = options;
        var selector = key2.substr(atPrefix.length);
        this.rule = options.jss.createRule(selector, style2, _extends$6({}, options, {
          parent: this
        }));
      }
      var _proto2 = GlobalPrefixedRule2.prototype;
      _proto2.toString = function toString(options) {
        return this.rule ? this.rule.toString(options) : "";
      };
      return GlobalPrefixedRule2;
    }();
    var separatorRegExp$1 = /\s*,\s*/g;
    function addScope(selector, scope) {
      var parts = selector.split(separatorRegExp$1);
      var scoped = "";
      for (var i = 0; i < parts.length; i++) {
        scoped += scope + " " + parts[i].trim();
        if (parts[i + 1])
          scoped += ", ";
      }
      return scoped;
    }
    function handleNestedGlobalContainerRule(rule, sheet) {
      var options = rule.options, style2 = rule.style;
      var rules = style2 ? style2[at] : null;
      if (!rules)
        return;
      for (var name2 in rules) {
        sheet.addRule(name2, rules[name2], _extends$6({}, options, {
          selector: addScope(name2, rule.selector)
        }));
      }
      delete style2[at];
    }
    function handlePrefixedGlobalRule(rule, sheet) {
      var options = rule.options, style2 = rule.style;
      for (var prop in style2) {
        if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
          continue;
        var selector = addScope(prop.substr(at.length), rule.selector);
        sheet.addRule(selector, style2[prop], _extends$6({}, options, {
          selector
        }));
        delete style2[prop];
      }
    }
    function jssGlobal() {
      function onCreateRule(name2, styles, options) {
        if (!name2)
          return null;
        if (name2 === at) {
          return new GlobalContainerRule(name2, styles, options);
        }
        if (name2[0] === "@" && name2.substr(0, atPrefix.length) === atPrefix) {
          return new GlobalPrefixedRule(name2, styles, options);
        }
        var parent = options.parent;
        if (parent) {
          if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
            options.scoped = false;
          }
        }
        if (!options.selector && options.scoped === false) {
          options.selector = name2;
        }
        return null;
      }
      function onProcessRule2(rule, sheet) {
        if (rule.type !== "style" || !sheet)
          return;
        handleNestedGlobalContainerRule(rule, sheet);
        handlePrefixedGlobalRule(rule, sheet);
      }
      return {
        onCreateRule,
        onProcessRule: onProcessRule2
      };
    }
    function _extends$5() {
      _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$5.apply(this, arguments);
    }
    var isObject = function isObject2(obj) {
      return obj && typeof obj === "object" && !Array.isArray(obj);
    };
    var valueNs = "extendCurrValue" + Date.now();
    function mergeExtend(style2, rule, sheet, newStyle) {
      var extendType = typeof style2.extend;
      if (extendType === "string") {
        if (!sheet)
          return;
        var refRule = sheet.getRule(style2.extend);
        if (!refRule)
          return;
        if (refRule === rule) {
          return;
        }
        var parent = refRule.options.parent;
        if (parent) {
          var originalStyle = parent.rules.raw[style2.extend];
          extend(originalStyle, rule, sheet, newStyle);
        }
        return;
      }
      if (Array.isArray(style2.extend)) {
        for (var index2 = 0; index2 < style2.extend.length; index2++) {
          var singleExtend = style2.extend[index2];
          var singleStyle = typeof singleExtend === "string" ? _extends$5({}, style2, {
            extend: singleExtend
          }) : style2.extend[index2];
          extend(singleStyle, rule, sheet, newStyle);
        }
        return;
      }
      for (var prop in style2.extend) {
        if (prop === "extend") {
          extend(style2.extend.extend, rule, sheet, newStyle);
          continue;
        }
        if (isObject(style2.extend[prop])) {
          if (!(prop in newStyle))
            newStyle[prop] = {};
          extend(style2.extend[prop], rule, sheet, newStyle[prop]);
          continue;
        }
        newStyle[prop] = style2.extend[prop];
      }
    }
    function mergeRest(style2, rule, sheet, newStyle) {
      for (var prop in style2) {
        if (prop === "extend")
          continue;
        if (isObject(newStyle[prop]) && isObject(style2[prop])) {
          extend(style2[prop], rule, sheet, newStyle[prop]);
          continue;
        }
        if (isObject(style2[prop])) {
          newStyle[prop] = extend(style2[prop], rule, sheet);
          continue;
        }
        newStyle[prop] = style2[prop];
      }
    }
    function extend(style2, rule, sheet, newStyle) {
      if (newStyle === void 0) {
        newStyle = {};
      }
      mergeExtend(style2, rule, sheet, newStyle);
      mergeRest(style2, rule, sheet, newStyle);
      return newStyle;
    }
    function jssExtend() {
      function onProcessStyle(style2, rule, sheet) {
        if ("extend" in style2)
          return extend(style2, rule, sheet);
        return style2;
      }
      function onChangeValue(value, prop, rule) {
        if (prop !== "extend")
          return value;
        if (value == null || value === false) {
          for (var key2 in rule[valueNs]) {
            rule.prop(key2, null);
          }
          rule[valueNs] = null;
          return null;
        }
        if (typeof value === "object") {
          for (var _key in value) {
            rule.prop(_key, value[_key]);
          }
          rule[valueNs] = value;
        }
        return null;
      }
      return {
        onProcessStyle,
        onChangeValue
      };
    }
    function _extends$4() {
      _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$4.apply(this, arguments);
    }
    var separatorRegExp = /\s*,\s*/g;
    var parentRegExp = /&/g;
    var refRegExp = /\$([\w-]+)/g;
    function jssNested() {
      function getReplaceRef(container2, sheet) {
        return function(match2, key2) {
          var rule = container2.getRule(key2) || sheet && sheet.getRule(key2);
          if (rule) {
            return rule.selector;
          }
          return key2;
        };
      }
      function replaceParentRefs(nestedProp, parentProp) {
        var parentSelectors = parentProp.split(separatorRegExp);
        var nestedSelectors = nestedProp.split(separatorRegExp);
        var result2 = "";
        for (var i = 0; i < parentSelectors.length; i++) {
          var parent = parentSelectors[i];
          for (var j = 0; j < nestedSelectors.length; j++) {
            var nested2 = nestedSelectors[j];
            if (result2)
              result2 += ", ";
            result2 += nested2.indexOf("&") !== -1 ? nested2.replace(parentRegExp, parent) : parent + " " + nested2;
          }
        }
        return result2;
      }
      function getOptions(rule, container2, prevOptions) {
        if (prevOptions)
          return _extends$4({}, prevOptions, {
            index: prevOptions.index + 1
          });
        var nestingLevel = rule.options.nestingLevel;
        nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
        var options = _extends$4({}, rule.options, {
          nestingLevel,
          index: container2.indexOf(rule) + 1
          // We don't need the parent name to be set options for chlid.
        });
        delete options.name;
        return options;
      }
      function onProcessStyle(style2, rule, sheet) {
        if (rule.type !== "style")
          return style2;
        var styleRule = rule;
        var container2 = styleRule.options.parent;
        var options;
        var replaceRef2;
        for (var prop in style2) {
          var isNested = prop.indexOf("&") !== -1;
          var isNestedConditional = prop[0] === "@";
          if (!isNested && !isNestedConditional)
            continue;
          options = getOptions(styleRule, container2, options);
          if (isNested) {
            var selector = replaceParentRefs(prop, styleRule.selector);
            if (!replaceRef2)
              replaceRef2 = getReplaceRef(container2, sheet);
            selector = selector.replace(refRegExp, replaceRef2);
            var name2 = styleRule.key + "-" + prop;
            if ("replaceRule" in container2) {
              container2.replaceRule(name2, style2[prop], _extends$4({}, options, {
                selector
              }));
            } else {
              container2.addRule(name2, style2[prop], _extends$4({}, options, {
                selector
              }));
            }
          } else if (isNestedConditional) {
            container2.addRule(prop, {}, options).addRule(styleRule.key, style2[prop], {
              selector: styleRule.selector
            });
          }
          delete style2[prop];
        }
        return style2;
      }
      return {
        onProcessStyle
      };
    }
    function registerClass(rule, className) {
      if (!className)
        return true;
      if (Array.isArray(className)) {
        for (var index2 = 0; index2 < className.length; index2++) {
          var isSetted = registerClass(rule, className[index2]);
          if (!isSetted)
            return false;
        }
        return true;
      }
      if (className.indexOf(" ") > -1) {
        return registerClass(rule, className.split(" "));
      }
      var parent = rule.options.parent;
      if (className[0] === "$") {
        var refRule = parent.getRule(className.substr(1));
        if (!refRule) {
          return false;
        }
        if (refRule === rule) {
          return false;
        }
        parent.classes[rule.key] += " " + parent.classes[refRule.key];
        return true;
      }
      parent.classes[rule.key] += " " + className;
      return true;
    }
    function jssCompose() {
      function onProcessStyle(style2, rule) {
        if (!("composes" in style2))
          return style2;
        registerClass(rule, style2.composes);
        delete style2.composes;
        return style2;
      }
      return {
        onProcessStyle
      };
    }
    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache$2 = {};
    function toHyphenLower(match2) {
      return "-" + match2.toLowerCase();
    }
    function hyphenateStyleName(name2) {
      if (cache$2.hasOwnProperty(name2)) {
        return cache$2[name2];
      }
      var hName = name2.replace(uppercasePattern, toHyphenLower);
      return cache$2[name2] = msPattern.test(hName) ? "-" + hName : hName;
    }
    function convertCase(style2) {
      var converted = {};
      for (var prop in style2) {
        var key2 = prop.indexOf("--") === 0 ? prop : hyphenateStyleName(prop);
        converted[key2] = style2[prop];
      }
      if (style2.fallbacks) {
        if (Array.isArray(style2.fallbacks))
          converted.fallbacks = style2.fallbacks.map(convertCase);
        else
          converted.fallbacks = convertCase(style2.fallbacks);
      }
      return converted;
    }
    function camelCase() {
      function onProcessStyle(style2) {
        if (Array.isArray(style2)) {
          for (var index2 = 0; index2 < style2.length; index2++) {
            style2[index2] = convertCase(style2[index2]);
          }
          return style2;
        }
        return convertCase(style2);
      }
      function onChangeValue(value, prop, rule) {
        if (prop.indexOf("--") === 0) {
          return value;
        }
        var hyphenatedProp = hyphenateStyleName(prop);
        if (prop === hyphenatedProp)
          return value;
        rule.prop(hyphenatedProp, value);
        return null;
      }
      return {
        onProcessStyle,
        onChangeValue
      };
    }
    var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
    var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
    var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
    var defaultUnits = {
      // Animation properties
      "animation-delay": ms,
      "animation-duration": ms,
      // Background properties
      "background-position": px,
      "background-position-x": px,
      "background-position-y": px,
      "background-size": px,
      // Border Properties
      border: px,
      "border-bottom": px,
      "border-bottom-left-radius": px,
      "border-bottom-right-radius": px,
      "border-bottom-width": px,
      "border-left": px,
      "border-left-width": px,
      "border-radius": px,
      "border-right": px,
      "border-right-width": px,
      "border-top": px,
      "border-top-left-radius": px,
      "border-top-right-radius": px,
      "border-top-width": px,
      "border-width": px,
      "border-block": px,
      "border-block-end": px,
      "border-block-end-width": px,
      "border-block-start": px,
      "border-block-start-width": px,
      "border-block-width": px,
      "border-inline": px,
      "border-inline-end": px,
      "border-inline-end-width": px,
      "border-inline-start": px,
      "border-inline-start-width": px,
      "border-inline-width": px,
      "border-start-start-radius": px,
      "border-start-end-radius": px,
      "border-end-start-radius": px,
      "border-end-end-radius": px,
      // Margin properties
      margin: px,
      "margin-bottom": px,
      "margin-left": px,
      "margin-right": px,
      "margin-top": px,
      "margin-block": px,
      "margin-block-end": px,
      "margin-block-start": px,
      "margin-inline": px,
      "margin-inline-end": px,
      "margin-inline-start": px,
      // Padding properties
      padding: px,
      "padding-bottom": px,
      "padding-left": px,
      "padding-right": px,
      "padding-top": px,
      "padding-block": px,
      "padding-block-end": px,
      "padding-block-start": px,
      "padding-inline": px,
      "padding-inline-end": px,
      "padding-inline-start": px,
      // Mask properties
      "mask-position-x": px,
      "mask-position-y": px,
      "mask-size": px,
      // Width and height properties
      height: px,
      width: px,
      "min-height": px,
      "max-height": px,
      "min-width": px,
      "max-width": px,
      // Position properties
      bottom: px,
      left: px,
      top: px,
      right: px,
      inset: px,
      "inset-block": px,
      "inset-block-end": px,
      "inset-block-start": px,
      "inset-inline": px,
      "inset-inline-end": px,
      "inset-inline-start": px,
      // Shadow properties
      "box-shadow": px,
      "text-shadow": px,
      // Column properties
      "column-gap": px,
      "column-rule": px,
      "column-rule-width": px,
      "column-width": px,
      // Font and text properties
      "font-size": px,
      "font-size-delta": px,
      "letter-spacing": px,
      "text-decoration-thickness": px,
      "text-indent": px,
      "text-stroke": px,
      "text-stroke-width": px,
      "word-spacing": px,
      // Motion properties
      motion: px,
      "motion-offset": px,
      // Outline properties
      outline: px,
      "outline-offset": px,
      "outline-width": px,
      // Perspective properties
      perspective: px,
      "perspective-origin-x": percent,
      "perspective-origin-y": percent,
      // Transform properties
      "transform-origin": percent,
      "transform-origin-x": percent,
      "transform-origin-y": percent,
      "transform-origin-z": percent,
      // Transition properties
      "transition-delay": ms,
      "transition-duration": ms,
      // Alignment properties
      "vertical-align": px,
      "flex-basis": px,
      // Some random properties
      "shape-margin": px,
      size: px,
      gap: px,
      // Grid properties
      grid: px,
      "grid-gap": px,
      "row-gap": px,
      "grid-row-gap": px,
      "grid-column-gap": px,
      "grid-template-rows": px,
      "grid-template-columns": px,
      "grid-auto-rows": px,
      "grid-auto-columns": px,
      // Not existing properties.
      // Used to avoid issues with jss-plugin-expand integration.
      "box-shadow-x": px,
      "box-shadow-y": px,
      "box-shadow-blur": px,
      "box-shadow-spread": px,
      "font-line-height": px,
      "text-shadow-x": px,
      "text-shadow-y": px,
      "text-shadow-blur": px
    };
    function addCamelCasedVersion(obj) {
      var regExp2 = /(-[a-z])/g;
      var replace2 = function replace3(str) {
        return str[1].toUpperCase();
      };
      var newObj = {};
      for (var key2 in obj) {
        newObj[key2] = obj[key2];
        newObj[key2.replace(regExp2, replace2)] = obj[key2];
      }
      return newObj;
    }
    var units = addCamelCasedVersion(defaultUnits);
    function iterate(prop, value, options) {
      if (value == null)
        return value;
      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
      } else if (typeof value === "object") {
        if (prop === "fallbacks") {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
        } else {
          for (var _innerProp in value) {
            value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
          }
        }
      } else if (typeof value === "number" && isNaN(value) === false) {
        var unit = options[prop] || units[prop];
        if (unit && !(value === 0 && unit === px)) {
          return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
        }
        return value.toString();
      }
      return value;
    }
    function defaultUnit(options) {
      if (options === void 0) {
        options = {};
      }
      var camelCasedOptions = addCamelCasedVersion(options);
      function onProcessStyle(style2, rule) {
        if (rule.type !== "style")
          return style2;
        for (var prop in style2) {
          style2[prop] = iterate(prop, style2[prop], camelCasedOptions);
        }
        return style2;
      }
      function onChangeValue(value, prop) {
        return iterate(prop, value, camelCasedOptions);
      }
      return {
        onProcessStyle,
        onChangeValue
      };
    }
    var propArray = {
      "background-size": true,
      "background-position": true,
      border: true,
      "border-bottom": true,
      "border-left": true,
      "border-top": true,
      "border-right": true,
      "border-radius": true,
      "border-image": true,
      "border-width": true,
      "border-style": true,
      "border-color": true,
      "box-shadow": true,
      flex: true,
      margin: true,
      padding: true,
      outline: true,
      "transform-origin": true,
      transform: true,
      transition: true
      /**
       * A scheme for converting arrays to regular styles inside of objects.
       * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
       */
    };
    var propArrayInObj = {
      position: true,
      // background-position
      size: true
      // background-size
      /**
       * A scheme for parsing and building correct styles from passed objects.
       */
    };
    var propObj = {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      background: {
        attachment: null,
        color: null,
        image: null,
        position: null,
        repeat: null
      },
      border: {
        width: null,
        style: null,
        color: null
      },
      "border-top": {
        width: null,
        style: null,
        color: null
      },
      "border-right": {
        width: null,
        style: null,
        color: null
      },
      "border-bottom": {
        width: null,
        style: null,
        color: null
      },
      "border-left": {
        width: null,
        style: null,
        color: null
      },
      outline: {
        width: null,
        style: null,
        color: null
      },
      "list-style": {
        type: null,
        position: null,
        image: null
      },
      transition: {
        property: null,
        duration: null,
        "timing-function": null,
        timingFunction: null,
        // Needed for avoiding comilation issues with jss-plugin-camel-case
        delay: null
      },
      animation: {
        name: null,
        duration: null,
        "timing-function": null,
        timingFunction: null,
        // Needed to avoid compilation issues with jss-plugin-camel-case
        delay: null,
        "iteration-count": null,
        iterationCount: null,
        // Needed to avoid compilation issues with jss-plugin-camel-case
        direction: null,
        "fill-mode": null,
        fillMode: null,
        // Needed to avoid compilation issues with jss-plugin-camel-case
        "play-state": null,
        playState: null
        // Needed to avoid compilation issues with jss-plugin-camel-case
      },
      "box-shadow": {
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: null,
        inset: null
      },
      "text-shadow": {
        x: 0,
        y: 0,
        blur: null,
        color: null
      }
      /**
       * A scheme for converting non-standart properties inside object.
       * For e.g.: include 'border-radius' property inside 'border' object.
       */
    };
    var customPropObj = {
      border: {
        radius: "border-radius",
        image: "border-image",
        width: "border-width",
        style: "border-style",
        color: "border-color"
      },
      "border-bottom": {
        width: "border-bottom-width",
        style: "border-bottom-style",
        color: "border-bottom-color"
      },
      "border-top": {
        width: "border-top-width",
        style: "border-top-style",
        color: "border-top-color"
      },
      "border-left": {
        width: "border-left-width",
        style: "border-left-style",
        color: "border-left-color"
      },
      "border-right": {
        width: "border-right-width",
        style: "border-right-style",
        color: "border-right-color"
      },
      background: {
        size: "background-size",
        image: "background-image"
      },
      font: {
        style: "font-style",
        variant: "font-variant",
        weight: "font-weight",
        stretch: "font-stretch",
        size: "font-size",
        family: "font-family",
        lineHeight: "line-height",
        // Needed to avoid compilation issues with jss-plugin-camel-case
        "line-height": "line-height"
      },
      flex: {
        grow: "flex-grow",
        basis: "flex-basis",
        direction: "flex-direction",
        wrap: "flex-wrap",
        flow: "flex-flow",
        shrink: "flex-shrink"
      },
      align: {
        self: "align-self",
        items: "align-items",
        content: "align-content"
      },
      grid: {
        "template-columns": "grid-template-columns",
        templateColumns: "grid-template-columns",
        "template-rows": "grid-template-rows",
        templateRows: "grid-template-rows",
        "template-areas": "grid-template-areas",
        templateAreas: "grid-template-areas",
        template: "grid-template",
        "auto-columns": "grid-auto-columns",
        autoColumns: "grid-auto-columns",
        "auto-rows": "grid-auto-rows",
        autoRows: "grid-auto-rows",
        "auto-flow": "grid-auto-flow",
        autoFlow: "grid-auto-flow",
        row: "grid-row",
        column: "grid-column",
        "row-start": "grid-row-start",
        rowStart: "grid-row-start",
        "row-end": "grid-row-end",
        rowEnd: "grid-row-end",
        "column-start": "grid-column-start",
        columnStart: "grid-column-start",
        "column-end": "grid-column-end",
        columnEnd: "grid-column-end",
        area: "grid-area",
        gap: "grid-gap",
        "row-gap": "grid-row-gap",
        rowGap: "grid-row-gap",
        "column-gap": "grid-column-gap",
        columnGap: "grid-column-gap"
      }
    };
    function mapValuesByProp(value, prop, rule) {
      return value.map(function(item) {
        return objectToArray(item, prop, rule, false, true);
      });
    }
    function processArray(value, prop, scheme, rule) {
      if (scheme[prop] == null)
        return value;
      if (value.length === 0)
        return [];
      if (Array.isArray(value[0]))
        return processArray(value[0], prop, scheme, rule);
      if (typeof value[0] === "object") {
        return mapValuesByProp(value, prop, rule);
      }
      return [value];
    }
    function objectToArray(value, prop, rule, isFallback, isInArray) {
      if (!(propObj[prop] || customPropObj[prop]))
        return [];
      var result2 = [];
      if (customPropObj[prop]) {
        value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
      }
      if (Object.keys(value).length) {
        for (var baseProp in propObj[prop]) {
          if (value[baseProp]) {
            if (Array.isArray(value[baseProp])) {
              result2.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(" "));
            } else
              result2.push(value[baseProp]);
            continue;
          }
          if (propObj[prop][baseProp] != null) {
            result2.push(propObj[prop][baseProp]);
          }
        }
      }
      if (!result2.length || isInArray)
        return result2;
      return [result2];
    }
    function customPropsToStyle(value, rule, customProps, isFallback) {
      for (var prop in customProps) {
        var propName = customProps[prop];
        if (typeof value[prop] !== "undefined" && (isFallback || !rule.prop(propName))) {
          var _styleDetector;
          var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName];
          if (isFallback)
            rule.style.fallbacks[propName] = appendedValue;
          else
            rule.style[propName] = appendedValue;
        }
        delete value[prop];
      }
      return value;
    }
    function styleDetector(style2, rule, isFallback) {
      for (var prop in style2) {
        var value = style2[prop];
        if (Array.isArray(value)) {
          if (!Array.isArray(value[0])) {
            if (prop === "fallbacks") {
              for (var index2 = 0; index2 < style2.fallbacks.length; index2++) {
                style2.fallbacks[index2] = styleDetector(style2.fallbacks[index2], rule, true);
              }
              continue;
            }
            style2[prop] = processArray(value, prop, propArray, rule);
            if (!style2[prop].length)
              delete style2[prop];
          }
        } else if (typeof value === "object") {
          if (prop === "fallbacks") {
            style2.fallbacks = styleDetector(style2.fallbacks, rule, true);
            continue;
          }
          style2[prop] = objectToArray(value, prop, rule, isFallback);
          if (!style2[prop].length)
            delete style2[prop];
        } else if (style2[prop] === "")
          delete style2[prop];
      }
      return style2;
    }
    function jssExpand() {
      function onProcessStyle(style2, rule) {
        if (!style2 || rule.type !== "style")
          return style2;
        if (Array.isArray(style2)) {
          for (var index2 = 0; index2 < style2.length; index2++) {
            style2[index2] = styleDetector(style2[index2], rule);
          }
          return style2;
        }
        return styleDetector(style2, rule);
      }
      return {
        onProcessStyle
      };
    }
    function _arrayLikeToArray$1(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$1(arr);
    }
    function _iterableToArray$1(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray$1(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray$1(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor)
        n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$1(o, minLen);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
    }
    var js = "";
    var css = "";
    var vendor = "";
    var browser = "";
    var isTouch = isBrowser && "ontouchstart" in document.documentElement;
    if (isBrowser) {
      var jsCssMap = {
        Moz: "-moz-",
        ms: "-ms-",
        O: "-o-",
        Webkit: "-webkit-"
      };
      var _document$createEleme = document.createElement("p"), style$2 = _document$createEleme.style;
      var testProp = "Transform";
      for (var key in jsCssMap) {
        if (key + testProp in style$2) {
          js = key;
          css = jsCssMap[key];
          break;
        }
      }
      if (js === "Webkit" && "msHyphens" in style$2) {
        js = "ms";
        css = jsCssMap.ms;
        browser = "edge";
      }
      if (js === "Webkit" && "-apple-trailing-word" in style$2) {
        vendor = "apple";
      }
    }
    var prefix$1 = {
      js,
      css,
      vendor,
      browser,
      isTouch
    };
    function supportedKeyframes(key2) {
      if (key2[1] === "-")
        return key2;
      if (prefix$1.js === "ms")
        return key2;
      return "@" + prefix$1.css + "keyframes" + key2.substr(10);
    }
    var appearence = {
      noPrefill: ["appearance"],
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "appearance")
          return false;
        if (prefix$1.js === "ms")
          return "-webkit-" + prop;
        return prefix$1.css + prop;
      }
    };
    var colorAdjust = {
      noPrefill: ["color-adjust"],
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "color-adjust")
          return false;
        if (prefix$1.js === "Webkit")
          return prefix$1.css + "print-" + prop;
        return prop;
      }
    };
    var regExp = /[-\s]+(.)?/g;
    function toUpper(match2, c2) {
      return c2 ? c2.toUpperCase() : "";
    }
    function camelize(str) {
      return str.replace(regExp, toUpper);
    }
    function pascalize(str) {
      return camelize("-" + str);
    }
    var mask = {
      noPrefill: ["mask"],
      supportedProperty: function supportedProperty2(prop, style2) {
        if (!/^mask/.test(prop))
          return false;
        if (prefix$1.js === "Webkit") {
          var longhand = "mask-image";
          if (camelize(longhand) in style2) {
            return prop;
          }
          if (prefix$1.js + pascalize(longhand) in style2) {
            return prefix$1.css + prop;
          }
        }
        return prop;
      }
    };
    var textOrientation = {
      noPrefill: ["text-orientation"],
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "text-orientation")
          return false;
        if (prefix$1.vendor === "apple" && !prefix$1.isTouch) {
          return prefix$1.css + prop;
        }
        return prop;
      }
    };
    var transform = {
      noPrefill: ["transform"],
      supportedProperty: function supportedProperty2(prop, style2, options) {
        if (prop !== "transform")
          return false;
        if (options.transform) {
          return prop;
        }
        return prefix$1.css + prop;
      }
    };
    var transition = {
      noPrefill: ["transition"],
      supportedProperty: function supportedProperty2(prop, style2, options) {
        if (prop !== "transition")
          return false;
        if (options.transition) {
          return prop;
        }
        return prefix$1.css + prop;
      }
    };
    var writingMode = {
      noPrefill: ["writing-mode"],
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "writing-mode")
          return false;
        if (prefix$1.js === "Webkit" || prefix$1.js === "ms" && prefix$1.browser !== "edge") {
          return prefix$1.css + prop;
        }
        return prop;
      }
    };
    var userSelect = {
      noPrefill: ["user-select"],
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "user-select")
          return false;
        if (prefix$1.js === "Moz" || prefix$1.js === "ms" || prefix$1.vendor === "apple") {
          return prefix$1.css + prop;
        }
        return prop;
      }
    };
    var breakPropsOld = {
      supportedProperty: function supportedProperty2(prop, style2) {
        if (!/^break-/.test(prop))
          return false;
        if (prefix$1.js === "Webkit") {
          var jsProp = "WebkitColumn" + pascalize(prop);
          return jsProp in style2 ? prefix$1.css + "column-" + prop : false;
        }
        if (prefix$1.js === "Moz") {
          var _jsProp = "page" + pascalize(prop);
          return _jsProp in style2 ? "page-" + prop : false;
        }
        return false;
      }
    };
    var inlineLogicalOld = {
      supportedProperty: function supportedProperty2(prop, style2) {
        if (!/^(border|margin|padding)-inline/.test(prop))
          return false;
        if (prefix$1.js === "Moz")
          return prop;
        var newProp = prop.replace("-inline", "");
        return prefix$1.js + pascalize(newProp) in style2 ? prefix$1.css + newProp : false;
      }
    };
    var unprefixed = {
      supportedProperty: function supportedProperty2(prop, style2) {
        return camelize(prop) in style2 ? prop : false;
      }
    };
    var prefixed = {
      supportedProperty: function supportedProperty2(prop, style2) {
        var pascalized = pascalize(prop);
        if (prop[0] === "-")
          return prop;
        if (prop[0] === "-" && prop[1] === "-")
          return prop;
        if (prefix$1.js + pascalized in style2)
          return prefix$1.css + prop;
        if (prefix$1.js !== "Webkit" && "Webkit" + pascalized in style2)
          return "-webkit-" + prop;
        return false;
      }
    };
    var scrollSnap = {
      supportedProperty: function supportedProperty2(prop) {
        if (prop.substring(0, 11) !== "scroll-snap")
          return false;
        if (prefix$1.js === "ms") {
          return "" + prefix$1.css + prop;
        }
        return prop;
      }
    };
    var overscrollBehavior = {
      supportedProperty: function supportedProperty2(prop) {
        if (prop !== "overscroll-behavior")
          return false;
        if (prefix$1.js === "ms") {
          return prefix$1.css + "scroll-chaining";
        }
        return prop;
      }
    };
    var propMap = {
      "flex-grow": "flex-positive",
      "flex-shrink": "flex-negative",
      "flex-basis": "flex-preferred-size",
      "justify-content": "flex-pack",
      order: "flex-order",
      "align-items": "flex-align",
      "align-content": "flex-line-pack"
      // 'align-self' is handled by 'align-self' plugin.
    };
    var flex2012 = {
      supportedProperty: function supportedProperty2(prop, style2) {
        var newProp = propMap[prop];
        if (!newProp)
          return false;
        return prefix$1.js + pascalize(newProp) in style2 ? prefix$1.css + newProp : false;
      }
    };
    var propMap$1 = {
      flex: "box-flex",
      "flex-grow": "box-flex",
      "flex-direction": ["box-orient", "box-direction"],
      order: "box-ordinal-group",
      "align-items": "box-align",
      "flex-flow": ["box-orient", "box-direction"],
      "justify-content": "box-pack"
    };
    var propKeys = Object.keys(propMap$1);
    var prefixCss = function prefixCss2(p2) {
      return prefix$1.css + p2;
    };
    var flex2009 = {
      supportedProperty: function supportedProperty2(prop, style2, _ref) {
        var multiple = _ref.multiple;
        if (propKeys.indexOf(prop) > -1) {
          var newProp = propMap$1[prop];
          if (!Array.isArray(newProp)) {
            return prefix$1.js + pascalize(newProp) in style2 ? prefix$1.css + newProp : false;
          }
          if (!multiple)
            return false;
          for (var i = 0; i < newProp.length; i++) {
            if (!(prefix$1.js + pascalize(newProp[0]) in style2)) {
              return false;
            }
          }
          return newProp.map(prefixCss);
        }
        return false;
      }
    };
    var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
    var propertyDetectors = plugins.filter(function(p2) {
      return p2.supportedProperty;
    }).map(function(p2) {
      return p2.supportedProperty;
    });
    var noPrefill = plugins.filter(function(p2) {
      return p2.noPrefill;
    }).reduce(function(a, p2) {
      a.push.apply(a, _toConsumableArray(p2.noPrefill));
      return a;
    }, []);
    var el$1;
    var cache = {};
    if (isBrowser) {
      el$1 = document.createElement("p");
      var computed = window.getComputedStyle(document.documentElement, "");
      for (var key$1 in computed) {
        if (!isNaN(key$1))
          cache[computed[key$1]] = computed[key$1];
      }
      noPrefill.forEach(function(x2) {
        return delete cache[x2];
      });
    }
    function supportedProperty(prop, options) {
      if (options === void 0) {
        options = {};
      }
      if (!el$1)
        return prop;
      if (cache[prop] != null) {
        return cache[prop];
      }
      if (prop === "transition" || prop === "transform") {
        options[prop] = prop in el$1.style;
      }
      for (var i = 0; i < propertyDetectors.length; i++) {
        cache[prop] = propertyDetectors[i](prop, el$1.style, options);
        if (cache[prop])
          break;
      }
      try {
        el$1.style[prop] = "";
      } catch (err) {
        return false;
      }
      return cache[prop];
    }
    var cache$1 = {};
    var transitionProperties = {
      transition: 1,
      "transition-property": 1,
      "-webkit-transition": 1,
      "-webkit-transition-property": 1
    };
    var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    var el$1$1;
    function prefixTransitionCallback(match2, p1, p2) {
      if (p1 === "var")
        return "var";
      if (p1 === "all")
        return "all";
      if (p2 === "all")
        return ", all";
      var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
      if (!prefixedValue)
        return p1 || p2;
      return prefixedValue;
    }
    if (isBrowser)
      el$1$1 = document.createElement("p");
    function supportedValue(property, value) {
      var prefixedValue = value;
      if (!el$1$1 || property === "content")
        return value;
      if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
        return prefixedValue;
      }
      var cacheKey = property + prefixedValue;
      if (cache$1[cacheKey] != null) {
        return cache$1[cacheKey];
      }
      try {
        el$1$1.style[property] = prefixedValue;
      } catch (err) {
        cache$1[cacheKey] = false;
        return false;
      }
      if (transitionProperties[property]) {
        prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
      } else if (el$1$1.style[property] === "") {
        prefixedValue = prefix$1.css + prefixedValue;
        if (prefixedValue === "-ms-flex")
          el$1$1.style[property] = "-ms-flexbox";
        el$1$1.style[property] = prefixedValue;
        if (el$1$1.style[property] === "") {
          cache$1[cacheKey] = false;
          return false;
        }
      }
      el$1$1.style[property] = "";
      cache$1[cacheKey] = prefixedValue;
      return cache$1[cacheKey];
    }
    function jssVendorPrefixer() {
      function onProcessRule2(rule) {
        if (rule.type === "keyframes") {
          var atRule = rule;
          atRule.at = supportedKeyframes(atRule.at);
        }
      }
      function prefixStyle(style2) {
        for (var prop in style2) {
          var value = style2[prop];
          if (prop === "fallbacks" && Array.isArray(value)) {
            style2[prop] = value.map(prefixStyle);
            continue;
          }
          var changeProp = false;
          var supportedProp = supportedProperty(prop);
          if (supportedProp && supportedProp !== prop)
            changeProp = true;
          var changeValue = false;
          var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
          if (supportedValue$1 && supportedValue$1 !== value)
            changeValue = true;
          if (changeProp || changeValue) {
            if (changeProp)
              delete style2[prop];
            style2[supportedProp || prop] = supportedValue$1 || value;
          }
        }
        return style2;
      }
      function onProcessStyle(style2, rule) {
        if (rule.type !== "style")
          return style2;
        return prefixStyle(style2);
      }
      function onChangeValue(value, prop) {
        return supportedValue(prop, toCssValue(value)) || value;
      }
      return {
        onProcessRule: onProcessRule2,
        onProcessStyle,
        onChangeValue
      };
    }
    function jssPropsSort() {
      var sort = function sort2(prop0, prop1) {
        if (prop0.length === prop1.length) {
          return prop0 > prop1 ? 1 : -1;
        }
        return prop0.length - prop1.length;
      };
      return {
        onProcessStyle: function onProcessStyle(style2, rule) {
          if (rule.type !== "style")
            return style2;
          var newStyle = {};
          var props = Object.keys(style2).sort(sort);
          for (var i = 0; i < props.length; i++) {
            newStyle[props[i]] = style2[props[i]];
          }
          return newStyle;
        }
      };
    }
    var create = function create2(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        plugins: [functions(), observable(options.observable), templatePlugin(), jssGlobal(), jssExtend(), jssNested(), jssCompose(), camelCase(), defaultUnit(options.defaultUnit), jssExpand(), jssVendorPrefixer(), jssPropsSort()]
      };
    };
    const preset = create;
    var index$1 = Number.MIN_SAFE_INTEGER || -1e9;
    var getSheetIndex = function getSheetIndex2() {
      return index$1++;
    };
    var JssContext = reactExports.createContext({
      classNamePrefix: "",
      disableStylesGeneration: false,
      isSSR: !isBrowser
    });
    var defaultManagers = /* @__PURE__ */ new Map();
    var getManager = function getManager2(context, managerId) {
      var managers = context.managers;
      if (managers) {
        if (!managers[managerId]) {
          managers[managerId] = new SheetsManager();
        }
        return managers[managerId];
      }
      var manager = defaultManagers.get(managerId);
      if (!manager) {
        manager = new SheetsManager();
        defaultManagers.set(managerId, manager);
      }
      return manager;
    };
    var manageSheet = function manageSheet2(options) {
      var sheet = options.sheet, context = options.context, index2 = options.index, theme = options.theme;
      if (!sheet) {
        return;
      }
      var manager = getManager(context, index2);
      manager.manage(theme);
      if (context.registry) {
        context.registry.add(sheet);
      }
    };
    var unmanageSheet = function unmanageSheet2(options) {
      if (!options.sheet) {
        return;
      }
      var manager = getManager(options.context, options.index);
      manager.unmanage(options.theme);
    };
    var defaultJss = createJss(preset());
    var sheetsMeta = /* @__PURE__ */ new WeakMap();
    var getMeta = function getMeta2(sheet) {
      return sheetsMeta.get(sheet);
    };
    var addMeta = function addMeta2(sheet, meta) {
      sheetsMeta.set(sheet, meta);
    };
    var getStyles = function getStyles2(options) {
      var styles = options.styles;
      if (typeof styles !== "function") {
        return styles;
      }
      return styles(options.theme);
    };
    function getSheetOptions(options, link) {
      var minify;
      if (options.context.id && options.context.id.minify != null) {
        minify = options.context.id.minify;
      }
      var classNamePrefix = options.context.classNamePrefix || "";
      if (options.name && !minify) {
        classNamePrefix += options.name.replace(/\s/g, "-") + "-";
      }
      var meta = "";
      if (options.name)
        meta = options.name + ", ";
      meta += typeof options.styles === "function" ? "Themed" : "Unthemed";
      return _extends$9({}, options.sheetOptions, {
        index: options.index,
        meta,
        classNamePrefix,
        link,
        generateId: options.sheetOptions && options.sheetOptions.generateId ? options.sheetOptions.generateId : options.context.generateId
      });
    }
    var createStyleSheet = function createStyleSheet2(options) {
      if (options.context.disableStylesGeneration) {
        return void 0;
      }
      var manager = getManager(options.context, options.index);
      var existingSheet = manager.get(options.theme);
      if (existingSheet) {
        return existingSheet;
      }
      var jss = options.context.jss || defaultJss;
      var styles = getStyles(options);
      var dynamicStyles = getDynamicStyles(styles);
      var sheet = jss.createStyleSheet(styles, getSheetOptions(options, dynamicStyles !== null));
      addMeta(sheet, {
        dynamicStyles,
        styles
      });
      manager.add(options.theme, sheet);
      return sheet;
    };
    var removeDynamicRules = function removeDynamicRules2(sheet, rules) {
      for (var key2 in rules) {
        sheet.deleteRule(rules[key2]);
      }
    };
    var updateDynamicRules = function updateDynamicRules2(data, sheet, rules) {
      for (var key2 in rules) {
        sheet.updateOne(rules[key2], data);
      }
    };
    var addDynamicRules = function addDynamicRules2(sheet, data) {
      var meta = getMeta(sheet);
      if (!meta) {
        return void 0;
      }
      var rules = {};
      for (var key2 in meta.dynamicStyles) {
        var initialRuleCount = sheet.rules.index.length;
        var originalRule = sheet.addRule(key2, meta.dynamicStyles[key2]);
        for (var i = initialRuleCount; i < sheet.rules.index.length; i++) {
          var rule = sheet.rules.index[i];
          sheet.updateOne(rule, data);
          rules[originalRule === rule ? key2 : rule.key] = rule;
        }
      }
      return rules;
    };
    var getSheetClasses = function getSheetClasses2(sheet, dynamicRules) {
      if (!dynamicRules) {
        return sheet.classes;
      }
      var meta = getMeta(sheet);
      if (!meta) {
        return sheet.classes;
      }
      var classes = {};
      for (var key2 in meta.styles) {
        classes[key2] = sheet.classes[key2];
        if (key2 in dynamicRules) {
          classes[key2] += " " + sheet.classes[dynamicRules[key2].key];
        }
      }
      return classes;
    };
    function getUseInsertionEffect(isSSR) {
      return isSSR ? reactExports.useEffect : React$1.useInsertionEffect || // React 18+ (https://github.com/reactwg/react-18/discussions/110)
      reactExports.useLayoutEffect;
    }
    var noTheme = {};
    var createUseStyles = function createUseStyles2(styles, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$index = _options.index, index2 = _options$index === void 0 ? getSheetIndex() : _options$index, theming = _options.theming, name2 = _options.name, sheetOptions = _objectWithoutPropertiesLoose$2(_options, ["index", "theming", "name"]);
      var ThemeContext$12 = theming && theming.context || ThemeContext$3;
      var useTheme2 = function useTheme3(theme) {
        if (typeof styles === "function") {
          return theme || reactExports.useContext(ThemeContext$12) || noTheme;
        }
        return noTheme;
      };
      var emptyObject = {};
      return function useStyles2(data) {
        var isFirstMount = reactExports.useRef(true);
        var context = reactExports.useContext(JssContext);
        var theme = useTheme2(data && data.theme);
        var _useMemo = reactExports.useMemo(function() {
          var newSheet = createStyleSheet({
            context,
            styles,
            name: name2,
            theme,
            index: index2,
            sheetOptions
          });
          if (newSheet && context.isSSR) {
            manageSheet({
              index: index2,
              context,
              sheet: newSheet,
              theme
            });
          }
          return [newSheet, newSheet ? addDynamicRules(newSheet, data) : null];
        }, [context, theme]), sheet = _useMemo[0], dynamicRules = _useMemo[1];
        getUseInsertionEffect(context.isSSR)(function() {
          if (sheet && dynamicRules && !isFirstMount.current) {
            updateDynamicRules(data, sheet, dynamicRules);
          }
        }, [data]);
        getUseInsertionEffect(context.isSSR)(function() {
          if (sheet) {
            manageSheet({
              index: index2,
              context,
              sheet,
              theme
            });
          }
          return function() {
            if (sheet) {
              unmanageSheet({
                index: index2,
                context,
                sheet,
                theme
              });
              if (dynamicRules) {
                removeDynamicRules(sheet, dynamicRules);
              }
            }
          };
        }, [sheet]);
        var classes = reactExports.useMemo(function() {
          return sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : emptyObject;
        }, [sheet, dynamicRules]);
        reactExports.useDebugValue(classes);
        reactExports.useDebugValue(theme === noTheme ? "No theme" : theme);
        reactExports.useEffect(function() {
          isFirstMount.current = false;
        });
        return classes;
      };
    };
    const useStyles$6 = createUseStyles({
      input: {
        border: "none",
        background: "none",
        outline: "none",
        boxSizing: "border-box",
        outlineStyle: "none",
        wordBreak: "break-all",
        padding: 0,
        width: "100%",
        color: "white",
        "&::placeholder": {
          opacity: 1
        },
        "&::-webkit-inner-spin-button,&::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0
        }
      }
    });
    const isNotEmpty = (value) => value !== null && value !== void 0;
    const isEmpty = (value) => !isNotEmpty(value);
    const isStringNotEmpty = (value) => (value ?? "").trim() !== "";
    const Input = ({ value = "", onChange, onFocus, onBlur }) => {
      const classes = useStyles$6();
      const inputRef = reactExports.useRef(null);
      const handleChange = (event) => {
        onChange(event.currentTarget.value, event);
      };
      const handleFocus = (event) => {
        onFocus == null ? void 0 : onFocus(event);
      };
      const handleBlur = (event) => {
        onBlur == null ? void 0 : onBlur(event);
      };
      reactExports.useEffect(() => {
        if (isNotEmpty(inputRef.current)) {
          inputRef.current.focus();
        }
        window.onload = () => {
          if (isNotEmpty(inputRef.current)) {
            inputRef.current.focus();
          }
        };
      }, []);
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          value,
          className: classes.input,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur
        }
      ) });
    };
    const getPreviousCommand = ({
      commandsHistory,
      currentCommandIndex,
      onSetCurrentCommandIndex
    }) => {
      if (isEmpty(currentCommandIndex) || isEmpty(commandsHistory)) {
        return;
      }
      if (commandsHistory.length === 1) {
        return commandsHistory[0];
      }
      if (currentCommandIndex > 0) {
        onSetCurrentCommandIndex(currentCommandIndex - 1);
      }
      return commandsHistory[currentCommandIndex - 1];
    };
    const getNextCommand = ({
      commandsHistory,
      currentCommandIndex,
      onSetCurrentCommandIndex
    }) => {
      if (isEmpty(currentCommandIndex) || isEmpty(commandsHistory)) {
        return;
      }
      if (currentCommandIndex + 1 <= commandsHistory.length) {
        onSetCurrentCommandIndex(currentCommandIndex + 1);
        return commandsHistory[currentCommandIndex + 1];
      }
      return;
    };
    const saveCommandToHistory = ({
      command,
      setCommandsHistory
    }) => {
      if (isEmpty(command)) {
        return;
      }
      setCommandsHistory((prevState) => isNotEmpty(prevState) ? [...prevState, command] : []);
    };
    const mediaDown = (breakpoint) => `@media (max-width: ${typeof breakpoint === "number" ? breakpoint : breakpoints[breakpoint] - 1}px)`;
    const colors = {
      WHITE: "#ffffff",
      GREEN: "#00ff00",
      PINK: "#ff0096",
      BLUE: "#00bbcc",
      DARK_BLUE: "#017c87"
    };
    const breakpoints = {
      xxs: 370,
      xs: 425,
      s: 600,
      m: 750,
      l: 1e3,
      xl: 1200,
      xxl: 1400,
      xxxl: 1630
    };
    const useStyles$5 = createUseStyles({
      root: {
        color: colors.WHITE,
        textAlign: "left",
        paddingBottom: 50
      },
      lineText: {
        marginLeft: 8,
        flexShrink: 0
      },
      currentText: {
        display: "flex"
      },
      welcome: {},
      preWhiteSpace: {}
    });
    const COMMANDS = ["help", "profile", "socials", "welcome", "clear"];
    function r(e2) {
      var t2, f2, n2 = "";
      if ("string" == typeof e2 || "number" == typeof e2)
        n2 += e2;
      else if ("object" == typeof e2)
        if (Array.isArray(e2))
          for (t2 = 0; t2 < e2.length; t2++)
            e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
        else
          for (t2 in e2)
            e2[t2] && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    function clsx() {
      for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
        (e2 = arguments[f2++]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
      return n2;
    }
    const Editor = ({
      welcomeMessage,
      prompt = ">>>",
      errorMessage = "command not found: ",
      defaultCommand,
      commands: commands2
    }) => {
      const classes = useStyles$5();
      const ref = reactExports.useRef(null);
      const [commandInput, setCommandInput] = reactExports.useState(defaultCommand);
      const [commandsHistory, setCommandsHistory] = reactExports.useState();
      const [currentCommandIndex, setCurrentCommandIndex] = reactExports.useState();
      const [bufferedContent, setBufferedContent] = reactExports.useState();
      const enterCommand = (text) => {
        const [command] = text.trim().split(" ");
        let output;
        if (command === "clear") {
          setBufferedContent(void 0);
          setCommandInput(void 0);
          return;
        }
        if (isNotEmpty(text)) {
          if (isNotEmpty(command) && COMMANDS.includes(command.toLowerCase()) && isNotEmpty(commands2)) {
            output = commands2[command.toLowerCase()].component;
          } else {
            output = isStringNotEmpty(command) ? `${errorMessage} ${command}` : void 0;
          }
        }
        setBufferedContent(
          /* @__PURE__ */ jsxs(Fragment, { children: [
            bufferedContent,
            /* @__PURE__ */ jsx("span", { children: prompt }),
            /* @__PURE__ */ jsx("span", { className: clsx(classes.lineText, classes.preWhiteSpace), children: commandInput }),
            output ? /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("br", {}),
              output
            ] }) : null,
            /* @__PURE__ */ jsx("br", {})
          ] })
        );
      };
      const handleKeyDownEvent = ({ key: key2 }) => {
        if (key2 === "Enter") {
          enterCommand(commandInput ?? "");
          saveCommandToHistory({ command: commandInput, setCommandsHistory });
          setCommandInput(void 0);
          return;
        }
        if (key2 === "ArrowUp") {
          setCommandInput(
            getPreviousCommand({
              commandsHistory,
              currentCommandIndex,
              onSetCurrentCommandIndex: setCurrentCommandIndex
            })
          );
        }
        if (key2 === "ArrowDown") {
          setCommandInput(
            getNextCommand({
              commandsHistory,
              currentCommandIndex,
              onSetCurrentCommandIndex: setCurrentCommandIndex
            })
          );
        }
      };
      reactExports.useEffect(() => {
        document.body.scrollTop = document.body.scrollHeight;
      }, [bufferedContent]);
      reactExports.useEffect(() => {
        if (isNotEmpty(defaultCommand)) {
          enterCommand(commandInput ?? "");
          saveCommandToHistory({ command: commandInput, setCommandsHistory });
          setCommandInput(void 0);
        }
      }, []);
      reactExports.useEffect(() => {
        document.addEventListener("keydown", handleKeyDownEvent);
        return () => {
          document.removeEventListener("keydown", handleKeyDownEvent);
        };
      });
      return /* @__PURE__ */ jsxs("div", { className: classes.root, ref, children: [
        /* @__PURE__ */ jsx("div", { className: classes.welcome, children: welcomeMessage }),
        bufferedContent,
        /* @__PURE__ */ jsxs("div", { className: classes.currentText, children: [
          prompt,
          /* @__PURE__ */ jsx("span", { className: classes.lineText, children: /* @__PURE__ */ jsx(Input, { value: commandInput, onChange: setCommandInput }) })
        ] })
      ] });
    };
    const useStyles$4 = createUseStyles({
      root: {},
      item: {
        display: "flex",
        gap: 10
      },
      command: {
        width: 100,
        color: colors.BLUE,
        flexShrink: 0
      },
      description: {
        display: "flex",
        gap: 10
      }
    });
    const Help = () => {
      const classes = useStyles$4();
      return /* @__PURE__ */ jsx("div", { className: classes.root, children: COMMANDS.map((command) => {
        const { desc } = commands[command];
        return /* @__PURE__ */ jsxs("div", { className: classes.item, children: [
          /* @__PURE__ */ jsx("div", { className: classes.command, children: command }),
          /* @__PURE__ */ jsxs("div", { className: classes.description, children: [
            "- ",
            /* @__PURE__ */ jsx("div", { children: desc })
          ] })
        ] }, command);
      }) });
    };
    const useStyles$3 = createUseStyles({
      version: {
        fontSize: 14
      }
    });
    function _typeof$1(o) {
      "@babel/helpers - typeof";
      return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof$1(o);
    }
    function toInteger(dirtyNumber) {
      if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
      }
      var number = Number(dirtyNumber);
      if (isNaN(number)) {
        return number;
      }
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
    function requiredArgs(required, args) {
      if (args.length < required) {
        throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
      }
    }
    function toDate(argument) {
      requiredArgs(1, arguments);
      var argStr = Object.prototype.toString.call(argument);
      if (argument instanceof Date || _typeof$1(argument) === "object" && argStr === "[object Date]") {
        return new Date(argument.getTime());
      } else if (typeof argument === "number" || argStr === "[object Number]") {
        return new Date(argument);
      } else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
          console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
          console.warn(new Error().stack);
        }
        return new Date(NaN);
      }
    }
    function addMilliseconds(dirtyDate, dirtyAmount) {
      requiredArgs(2, arguments);
      var timestamp = toDate(dirtyDate).getTime();
      var amount = toInteger(dirtyAmount);
      return new Date(timestamp + amount);
    }
    var defaultOptions$1 = {};
    function getDefaultOptions() {
      return defaultOptions$1;
    }
    function getTimezoneOffsetInMilliseconds(date) {
      var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      utcDate.setUTCFullYear(date.getFullYear());
      return date.getTime() - utcDate.getTime();
    }
    function compareAsc(dirtyDateLeft, dirtyDateRight) {
      requiredArgs(2, arguments);
      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var diff = dateLeft.getTime() - dateRight.getTime();
      if (diff < 0) {
        return -1;
      } else if (diff > 0) {
        return 1;
      } else {
        return diff;
      }
    }
    function isDate(value) {
      requiredArgs(1, arguments);
      return value instanceof Date || _typeof$1(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
    }
    function isValid(dirtyDate) {
      requiredArgs(1, arguments);
      if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
        return false;
      }
      var date = toDate(dirtyDate);
      return !isNaN(Number(date));
    }
    function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
      requiredArgs(2, arguments);
      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
      return yearDiff * 12 + monthDiff;
    }
    function endOfDay(dirtyDate) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      date.setHours(23, 59, 59, 999);
      return date;
    }
    function endOfMonth(dirtyDate) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(23, 59, 59, 999);
      return date;
    }
    function isLastDayOfMonth(dirtyDate) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      return endOfDay(date).getTime() === endOfMonth(date).getTime();
    }
    function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
      requiredArgs(2, arguments);
      var dateLeft = toDate(dirtyDateLeft);
      var dateRight = toDate(dirtyDateRight);
      var sign = compareAsc(dateLeft, dateRight);
      var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
      var result2;
      if (difference < 1) {
        result2 = 0;
      } else {
        if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
          dateLeft.setDate(30);
        }
        dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
        var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
        if (isLastDayOfMonth(toDate(dirtyDateLeft)) && difference === 1 && compareAsc(dirtyDateLeft, dateRight) === 1) {
          isLastMonthNotFull = false;
        }
        result2 = sign * (difference - Number(isLastMonthNotFull));
      }
      return result2 === 0 ? 0 : result2;
    }
    function subMilliseconds(dirtyDate, dirtyAmount) {
      requiredArgs(2, arguments);
      var amount = toInteger(dirtyAmount);
      return addMilliseconds(dirtyDate, -amount);
    }
    var MILLISECONDS_IN_DAY = 864e5;
    function getUTCDayOfYear(dirtyDate) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      var timestamp = date.getTime();
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
      var startOfYearTimestamp = date.getTime();
      var difference = timestamp - startOfYearTimestamp;
      return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
    }
    function startOfUTCISOWeek(dirtyDate) {
      requiredArgs(1, arguments);
      var weekStartsOn = 1;
      var date = toDate(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    function getUTCISOWeekYear(dirtyDate) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      var year = date.getUTCFullYear();
      var fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
      var fourthOfJanuaryOfThisYear = new Date(0);
      fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
    function startOfUTCISOWeekYear(dirtyDate) {
      requiredArgs(1, arguments);
      var year = getUTCISOWeekYear(dirtyDate);
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setUTCFullYear(year, 0, 4);
      fourthOfJanuary.setUTCHours(0, 0, 0, 0);
      var date = startOfUTCISOWeek(fourthOfJanuary);
      return date;
    }
    var MILLISECONDS_IN_WEEK$1 = 6048e5;
    function getUTCISOWeek(dirtyDate) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
    }
    function startOfUTCWeek(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      requiredArgs(1, arguments);
      var defaultOptions2 = getDefaultOptions();
      var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      }
      var date = toDate(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    function getUTCWeekYear(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      var year = date.getUTCFullYear();
      var defaultOptions2 = getDefaultOptions();
      var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      }
      var firstWeekOfNextYear = new Date(0);
      firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
      firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
      var firstWeekOfThisYear = new Date(0);
      firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
    function startOfUTCWeekYear(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      requiredArgs(1, arguments);
      var defaultOptions2 = getDefaultOptions();
      var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
      var year = getUTCWeekYear(dirtyDate, options);
      var firstWeek = new Date(0);
      firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeek.setUTCHours(0, 0, 0, 0);
      var date = startOfUTCWeek(firstWeek, options);
      return date;
    }
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCWeek(dirtyDate, options) {
      requiredArgs(1, arguments);
      var date = toDate(dirtyDate);
      var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    function addLeadingZeros(number, targetLength) {
      var sign = number < 0 ? "-" : "";
      var output = Math.abs(number).toString();
      while (output.length < targetLength) {
        output = "0" + output;
      }
      return sign + output;
    }
    var formatters$2 = {
      // Year
      y: function y2(date, token2) {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return addLeadingZeros(token2 === "yy" ? year % 100 : year, token2.length);
      },
      // Month
      M: function M2(date, token2) {
        var month = date.getUTCMonth();
        return token2 === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
      },
      // Day of the month
      d: function d2(date, token2) {
        return addLeadingZeros(date.getUTCDate(), token2.length);
      },
      // AM or PM
      a: function a(date, token2) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (token2) {
          case "a":
          case "aa":
            return dayPeriodEnumValue.toUpperCase();
          case "aaa":
            return dayPeriodEnumValue;
          case "aaaaa":
            return dayPeriodEnumValue[0];
          case "aaaa":
          default:
            return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
      },
      // Hour [1-12]
      h: function h2(date, token2) {
        return addLeadingZeros(date.getUTCHours() % 12 || 12, token2.length);
      },
      // Hour [0-23]
      H: function H2(date, token2) {
        return addLeadingZeros(date.getUTCHours(), token2.length);
      },
      // Minute
      m: function m2(date, token2) {
        return addLeadingZeros(date.getUTCMinutes(), token2.length);
      },
      // Second
      s: function s(date, token2) {
        return addLeadingZeros(date.getUTCSeconds(), token2.length);
      },
      // Fraction of second
      S: function S2(date, token2) {
        var numberOfDigits = token2.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return addLeadingZeros(fractionalSeconds, token2.length);
      }
    };
    const formatters$3 = formatters$2;
    var dayPeriodEnum = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    };
    var formatters = {
      // Era
      G: function G2(date, token2, localize2) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch (token2) {
          case "G":
          case "GG":
          case "GGG":
            return localize2.era(era, {
              width: "abbreviated"
            });
          case "GGGGG":
            return localize2.era(era, {
              width: "narrow"
            });
          case "GGGG":
          default:
            return localize2.era(era, {
              width: "wide"
            });
        }
      },
      // Year
      y: function y2(date, token2, localize2) {
        if (token2 === "yo") {
          var signedYear = date.getUTCFullYear();
          var year = signedYear > 0 ? signedYear : 1 - signedYear;
          return localize2.ordinalNumber(year, {
            unit: "year"
          });
        }
        return formatters$3.y(date, token2);
      },
      // Local week-numbering year
      Y: function Y2(date, token2, localize2, options) {
        var signedWeekYear = getUTCWeekYear(date, options);
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        if (token2 === "YY") {
          var twoDigitYear = weekYear % 100;
          return addLeadingZeros(twoDigitYear, 2);
        }
        if (token2 === "Yo") {
          return localize2.ordinalNumber(weekYear, {
            unit: "year"
          });
        }
        return addLeadingZeros(weekYear, token2.length);
      },
      // ISO week-numbering year
      R: function R2(date, token2) {
        var isoWeekYear = getUTCISOWeekYear(date);
        return addLeadingZeros(isoWeekYear, token2.length);
      },
      // Extended year. This is a single number designating the year of this calendar system.
      // The main difference between `y` and `u` localizers are B.C. years:
      // | Year | `y` | `u` |
      // |------|-----|-----|
      // | AC 1 |   1 |   1 |
      // | BC 1 |   1 |   0 |
      // | BC 2 |   2 |  -1 |
      // Also `yy` always returns the last two digits of a year,
      // while `uu` pads single digit years to 2 characters and returns other years unchanged.
      u: function u2(date, token2) {
        var year = date.getUTCFullYear();
        return addLeadingZeros(year, token2.length);
      },
      // Quarter
      Q: function Q2(date, token2, localize2) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token2) {
          case "Q":
            return String(quarter);
          case "QQ":
            return addLeadingZeros(quarter, 2);
          case "Qo":
            return localize2.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "QQQ":
            return localize2.quarter(quarter, {
              width: "abbreviated",
              context: "formatting"
            });
          case "QQQQQ":
            return localize2.quarter(quarter, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return localize2.quarter(quarter, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone quarter
      q: function q2(date, token2, localize2) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token2) {
          case "q":
            return String(quarter);
          case "qq":
            return addLeadingZeros(quarter, 2);
          case "qo":
            return localize2.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "qqq":
            return localize2.quarter(quarter, {
              width: "abbreviated",
              context: "standalone"
            });
          case "qqqqq":
            return localize2.quarter(quarter, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return localize2.quarter(quarter, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Month
      M: function M2(date, token2, localize2) {
        var month = date.getUTCMonth();
        switch (token2) {
          case "M":
          case "MM":
            return formatters$3.M(date, token2);
          case "Mo":
            return localize2.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "MMM":
            return localize2.month(month, {
              width: "abbreviated",
              context: "formatting"
            });
          case "MMMMM":
            return localize2.month(month, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return localize2.month(month, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone month
      L: function L2(date, token2, localize2) {
        var month = date.getUTCMonth();
        switch (token2) {
          case "L":
            return String(month + 1);
          case "LL":
            return addLeadingZeros(month + 1, 2);
          case "Lo":
            return localize2.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "LLL":
            return localize2.month(month, {
              width: "abbreviated",
              context: "standalone"
            });
          case "LLLLL":
            return localize2.month(month, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return localize2.month(month, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Local week of year
      w: function w2(date, token2, localize2, options) {
        var week = getUTCWeek(date, options);
        if (token2 === "wo") {
          return localize2.ordinalNumber(week, {
            unit: "week"
          });
        }
        return addLeadingZeros(week, token2.length);
      },
      // ISO week of year
      I: function I2(date, token2, localize2) {
        var isoWeek = getUTCISOWeek(date);
        if (token2 === "Io") {
          return localize2.ordinalNumber(isoWeek, {
            unit: "week"
          });
        }
        return addLeadingZeros(isoWeek, token2.length);
      },
      // Day of the month
      d: function d2(date, token2, localize2) {
        if (token2 === "do") {
          return localize2.ordinalNumber(date.getUTCDate(), {
            unit: "date"
          });
        }
        return formatters$3.d(date, token2);
      },
      // Day of year
      D: function D2(date, token2, localize2) {
        var dayOfYear = getUTCDayOfYear(date);
        if (token2 === "Do") {
          return localize2.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
          });
        }
        return addLeadingZeros(dayOfYear, token2.length);
      },
      // Day of week
      E: function E2(date, token2, localize2) {
        var dayOfWeek = date.getUTCDay();
        switch (token2) {
          case "E":
          case "EE":
          case "EEE":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "EEEEE":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "EEEE":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Local day of week
      e: function e2(date, token2, localize2, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token2) {
          case "e":
            return String(localDayOfWeek);
          case "ee":
            return addLeadingZeros(localDayOfWeek, 2);
          case "eo":
            return localize2.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "eee":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "eeeee":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "eeee":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone local day of week
      c: function c2(date, token2, localize2, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token2) {
          case "c":
            return String(localDayOfWeek);
          case "cc":
            return addLeadingZeros(localDayOfWeek, token2.length);
          case "co":
            return localize2.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "ccc":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "standalone"
            });
          case "ccccc":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "standalone"
            });
          case "cccc":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // ISO day of week
      i: function i(date, token2, localize2) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch (token2) {
          case "i":
            return String(isoDayOfWeek);
          case "ii":
            return addLeadingZeros(isoDayOfWeek, token2.length);
          case "io":
            return localize2.ordinalNumber(isoDayOfWeek, {
              unit: "day"
            });
          case "iii":
            return localize2.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "iiiii":
            return localize2.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "iiiiii":
            return localize2.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "iiii":
          default:
            return localize2.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM or PM
      a: function a(date, token2, localize2) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch (token2) {
          case "a":
          case "aa":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "aaa":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "aaaaa":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM, PM, midnight, noon
      b: function b2(date, token2, localize2) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) {
          dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
          dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
          dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch (token2) {
          case "b":
          case "bb":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "bbb":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "bbbbb":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // in the morning, in the afternoon, in the evening, at night
      B: function B2(date, token2, localize2) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) {
          dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
          dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
          dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
          dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch (token2) {
          case "B":
          case "BB":
          case "BBB":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "BBBBB":
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return localize2.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Hour [1-12]
      h: function h2(date, token2, localize2) {
        if (token2 === "ho") {
          var hours = date.getUTCHours() % 12;
          if (hours === 0)
            hours = 12;
          return localize2.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return formatters$3.h(date, token2);
      },
      // Hour [0-23]
      H: function H2(date, token2, localize2) {
        if (token2 === "Ho") {
          return localize2.ordinalNumber(date.getUTCHours(), {
            unit: "hour"
          });
        }
        return formatters$3.H(date, token2);
      },
      // Hour [0-11]
      K: function K2(date, token2, localize2) {
        var hours = date.getUTCHours() % 12;
        if (token2 === "Ko") {
          return localize2.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return addLeadingZeros(hours, token2.length);
      },
      // Hour [1-24]
      k: function k2(date, token2, localize2) {
        var hours = date.getUTCHours();
        if (hours === 0)
          hours = 24;
        if (token2 === "ko") {
          return localize2.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return addLeadingZeros(hours, token2.length);
      },
      // Minute
      m: function m2(date, token2, localize2) {
        if (token2 === "mo") {
          return localize2.ordinalNumber(date.getUTCMinutes(), {
            unit: "minute"
          });
        }
        return formatters$3.m(date, token2);
      },
      // Second
      s: function s(date, token2, localize2) {
        if (token2 === "so") {
          return localize2.ordinalNumber(date.getUTCSeconds(), {
            unit: "second"
          });
        }
        return formatters$3.s(date, token2);
      },
      // Fraction of second
      S: function S2(date, token2) {
        return formatters$3.S(date, token2);
      },
      // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
      X: function X2(date, token2, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) {
          return "Z";
        }
        switch (token2) {
          case "X":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "XXXX":
          case "XX":
            return formatTimezone(timezoneOffset);
          case "XXXXX":
          case "XXX":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
      x: function x2(date, token2, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token2) {
          case "x":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "xxxx":
          case "xx":
            return formatTimezone(timezoneOffset);
          case "xxxxx":
          case "xxx":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (GMT)
      O: function O2(date, token2, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token2) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "OOOO":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (specific non-location)
      z: function z2(date, token2, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token2) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "zzzz":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      // Seconds timestamp
      t: function t2(date, token2, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1e3);
        return addLeadingZeros(timestamp, token2.length);
      },
      // Milliseconds timestamp
      T: function T2(date, token2, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return addLeadingZeros(timestamp, token2.length);
      }
    };
    function formatTimezoneShort(offset, dirtyDelimiter) {
      var sign = offset > 0 ? "-" : "+";
      var absOffset = Math.abs(offset);
      var hours = Math.floor(absOffset / 60);
      var minutes = absOffset % 60;
      if (minutes === 0) {
        return sign + String(hours);
      }
      var delimiter2 = dirtyDelimiter || "";
      return sign + String(hours) + delimiter2 + addLeadingZeros(minutes, 2);
    }
    function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
      if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
      }
      return formatTimezone(offset, dirtyDelimiter);
    }
    function formatTimezone(offset, dirtyDelimiter) {
      var delimiter2 = dirtyDelimiter || "";
      var sign = offset > 0 ? "-" : "+";
      var absOffset = Math.abs(offset);
      var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
      var minutes = addLeadingZeros(absOffset % 60, 2);
      return sign + hours + delimiter2 + minutes;
    }
    const formatters$1 = formatters;
    var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
      switch (pattern) {
        case "P":
          return formatLong2.date({
            width: "short"
          });
        case "PP":
          return formatLong2.date({
            width: "medium"
          });
        case "PPP":
          return formatLong2.date({
            width: "long"
          });
        case "PPPP":
        default:
          return formatLong2.date({
            width: "full"
          });
      }
    };
    var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
      switch (pattern) {
        case "p":
          return formatLong2.time({
            width: "short"
          });
        case "pp":
          return formatLong2.time({
            width: "medium"
          });
        case "ppp":
          return formatLong2.time({
            width: "long"
          });
        case "pppp":
        default:
          return formatLong2.time({
            width: "full"
          });
      }
    };
    var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
      var matchResult = pattern.match(/(P+)(p+)?/) || [];
      var datePattern = matchResult[1];
      var timePattern = matchResult[2];
      if (!timePattern) {
        return dateLongFormatter(pattern, formatLong2);
      }
      var dateTimeFormat;
      switch (datePattern) {
        case "P":
          dateTimeFormat = formatLong2.dateTime({
            width: "short"
          });
          break;
        case "PP":
          dateTimeFormat = formatLong2.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          dateTimeFormat = formatLong2.dateTime({
            width: "long"
          });
          break;
        case "PPPP":
        default:
          dateTimeFormat = formatLong2.dateTime({
            width: "full"
          });
          break;
      }
      return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
    };
    var longFormatters = {
      p: timeLongFormatter,
      P: dateTimeLongFormatter
    };
    const longFormatters$1 = longFormatters;
    var protectedDayOfYearTokens = ["D", "DD"];
    var protectedWeekYearTokens = ["YY", "YYYY"];
    function isProtectedDayOfYearToken(token2) {
      return protectedDayOfYearTokens.indexOf(token2) !== -1;
    }
    function isProtectedWeekYearToken(token2) {
      return protectedWeekYearTokens.indexOf(token2) !== -1;
    }
    function throwProtectedError(token2, format2, input) {
      if (token2 === "YYYY") {
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token2 === "YY") {
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token2 === "D") {
        throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token2 === "DD") {
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      }
    }
    var formatDistanceLocale = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
      },
      xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
      },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
      },
      xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
      },
      aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
      },
      xHours: {
        one: "1 hour",
        other: "{{count}} hours"
      },
      xDays: {
        one: "1 day",
        other: "{{count}} days"
      },
      aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
      },
      xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
      },
      aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
      },
      xMonths: {
        one: "1 month",
        other: "{{count}} months"
      },
      aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
      },
      xYears: {
        one: "1 year",
        other: "{{count}} years"
      },
      overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
      },
      almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
      }
    };
    var formatDistance = function formatDistance2(token2, count, options) {
      var result2;
      var tokenValue = formatDistanceLocale[token2];
      if (typeof tokenValue === "string") {
        result2 = tokenValue;
      } else if (count === 1) {
        result2 = tokenValue.one;
      } else {
        result2 = tokenValue.other.replace("{{count}}", count.toString());
      }
      if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
          return "in " + result2;
        } else {
          return result2 + " ago";
        }
      }
      return result2;
    };
    const formatDistance$1 = formatDistance;
    function buildFormatLongFn(args) {
      return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var width2 = options.width ? String(options.width) : args.defaultWidth;
        var format2 = args.formats[width2] || args.formats[args.defaultWidth];
        return format2;
      };
    }
    var dateFormats = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    };
    var timeFormats = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    };
    var dateTimeFormats = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    };
    var formatLong = {
      date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: "full"
      }),
      time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: "full"
      }),
      dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: "full"
      })
    };
    const formatLong$1 = formatLong;
    var formatRelativeLocale = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    };
    var formatRelative = function formatRelative2(token2, _date, _baseDate, _options) {
      return formatRelativeLocale[token2];
    };
    const formatRelative$1 = formatRelative;
    function buildLocalizeFn(args) {
      return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
          var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
          var width2 = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
          valuesArray = args.formattingValues[width2] || args.formattingValues[defaultWidth];
        } else {
          var _defaultWidth = args.defaultWidth;
          var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
          valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index2 = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index2];
      };
    }
    var eraValues = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    };
    var quarterValues = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    };
    var monthValues = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
    var dayValues = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
    var dayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    };
    var formattingDayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    };
    var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
      var number = Number(dirtyNumber);
      var rem100 = number % 100;
      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + "st";
          case 2:
            return number + "nd";
          case 3:
            return number + "rd";
        }
      }
      return number + "th";
    };
    var localize = {
      ordinalNumber,
      era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: "wide"
      }),
      quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
          return quarter - 1;
        }
      }),
      month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: "wide"
      }),
      day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide"
      }),
      dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
      })
    };
    const localize$1 = localize;
    function buildMatchFn(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var width2 = options.width;
        var matchPattern = width2 && args.matchPatterns[width2] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
          return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width2 && args.parsePatterns[width2] || args.parsePatterns[args.defaultParseWidth];
        var key2 = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key2) : key2;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    function findKey(object, predicate) {
      for (var key2 in object) {
        if (object.hasOwnProperty(key2) && predicate(object[key2])) {
          return key2;
        }
      }
      return void 0;
    }
    function findIndex(array, predicate) {
      for (var key2 = 0; key2 < array.length; key2++) {
        if (predicate(array[key2])) {
          return key2;
        }
      }
      return void 0;
    }
    function buildMatchPatternFn(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult)
          return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult)
          return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
    var parseOrdinalNumberPattern = /\d+/i;
    var matchEraPatterns = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    };
    var parseEraPatterns = {
      any: [/^b/i, /^(a|c)/i]
    };
    var matchQuarterPatterns = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    };
    var parseQuarterPatterns = {
      any: [/1/i, /2/i, /3/i, /4/i]
    };
    var matchMonthPatterns = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    };
    var parseMonthPatterns = {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    };
    var matchDayPatterns = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    };
    var parseDayPatterns = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    };
    var matchDayPeriodPatterns = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    };
    var parseDayPeriodPatterns = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
      }
    };
    var match$1 = {
      ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
          return parseInt(value, 10);
        }
      }),
      era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
      }),
      quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(index2) {
          return index2 + 1;
        }
      }),
      month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
      }),
      day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
      }),
      dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
      })
    };
    const match$2 = match$1;
    var locale = {
      code: "en-US",
      formatDistance: formatDistance$1,
      formatLong: formatLong$1,
      formatRelative: formatRelative$1,
      localize: localize$1,
      match: match$2,
      options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }
    };
    const defaultLocale = locale;
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function format(dirtyDate, dirtyFormatStr, options) {
      var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
      requiredArgs(2, arguments);
      var formatStr = String(dirtyFormatStr);
      var defaultOptions2 = getDefaultOptions();
      var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
      var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      }
      var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      }
      if (!locale2.localize) {
        throw new RangeError("locale must contain localize property");
      }
      if (!locale2.formatLong) {
        throw new RangeError("locale must contain formatLong property");
      }
      var originalDate = toDate(dirtyDate);
      if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
      }
      var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
      var utcDate = subMilliseconds(originalDate, timezoneOffset);
      var formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale: locale2,
        _originalDate: originalDate
      };
      var result2 = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
          var longFormatter = longFormatters$1[firstCharacter];
          return longFormatter(substring, locale2.formatLong);
        }
        return substring;
      }).join("").match(formattingTokensRegExp).map(function(substring) {
        if (substring === "''") {
          return "'";
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
          return cleanEscapedString(substring);
        }
        var formatter = formatters$1[firstCharacter];
        if (formatter) {
          if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
            throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
          }
          if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
            throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
          }
          return formatter(utcDate, substring, locale2.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return substring;
      }).join("");
      return result2;
    }
    function cleanEscapedString(input) {
      var matched = input.match(escapedStringRegExp);
      if (!matched) {
        return input;
      }
      return matched[1].replace(doubleQuoteRegExp, "'");
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor)
        n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o, minLen);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf(o, p2);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _toPrimitive(input, hint) {
      if (_typeof$1(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof$1(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key2 = _toPrimitive(arg, "string");
      return _typeof$1(key2) === "symbol" ? key2 : String(key2);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _defineProperty$1(obj, key2, value) {
      key2 = _toPropertyKey(key2);
      if (key2 in obj) {
        Object.defineProperty(obj, key2, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    const name = "portfolio";
    const version = "0.1.0";
    const homepage = "https://annamyamikova.github.io/amyam";
    const scripts = {
      predeploy: "yarn build",
      deploy: "yarn build & gh-pages -d build",
      "local-settings": "node create-local-settings.js",
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
      lint: 'eslint "**/*.{js,jsx,ts,tsx}"',
      format: 'prettier --write "**/*.{js,jsx,css,json,ts,tsx}"',
      "format:check": 'prettier --check "**/*.{js,jsx,css,json,ts,tsx}"',
      "full-check": "yarn format:check && yarn lint",
      test: "cross-env DEBUG_PRINT_LIMIT=500 jest",
      "check-translations": "node translation-tools/check"
    };
    const dependencies = {
      "@emotion/react": "^11.9.3",
      "@emotion/styled": "^11.9.3",
      "@material-ui/core": "^4.12.4",
      "@mui/icons-material": "^5.8.4",
      "@mui/material": "^5.8.6",
      clsx: "^2.0.0",
      "date-fns": "^2.30.0",
      "date-fns-tz": "2.0.0",
      "gh-pages": "^6.1.1",
      i18next: "22.4.11",
      "i18next-browser-languagedetector": "7.0.1",
      jss: "10.10.0",
      react: "18.2.0",
      "react-dom": "18.2.0",
      "react-draggable": "^4.4.5",
      "react-helmet": "^6.1.0",
      "react-i18next": "12.2.0",
      "react-jss": "^10.10.0",
      "react-overlays": "5.2.1",
      "react-router-dom": "6.8.2",
      "react-terminal": "^1.3.1",
      "react-transition-group": "4.4.5",
      uuid: "9.0.0",
      "web-vitals": "^2.1.4"
    };
    const devDependencies = {
      "@testing-library/jest-dom": "5.16.5",
      "@testing-library/react": "14.0.0",
      "@trivago/prettier-plugin-sort-imports": "4.1.1",
      "@types/jest": "29.4.0",
      "@types/prettier": "2.7.2",
      "@types/react": "18.0.28",
      "@types/react-dom": "18.0.11",
      "@types/react-helmet": "^6.1.5",
      "@types/react-transition-group": "4.4.5",
      "@types/uuid": "9.0.1",
      "@typescript-eslint/eslint-plugin": "5.54.1",
      "@typescript-eslint/parser": "5.54.1",
      "@vitejs/plugin-react": "3.1.0",
      "cross-env": "7.0.3",
      eslint: "8.35.0",
      "eslint-config-prettier": "8.7.0",
      "eslint-import-resolver-alias": "1.1.2",
      "eslint-plugin-import": "2.27.5",
      "eslint-plugin-jest": "27.2.1",
      "eslint-plugin-react": "7.32.2",
      "eslint-plugin-react-hooks": "4.6.0",
      jest: "29.5.0",
      "jest-environment-jsdom": "29.5.0",
      prettier: "2.8.4",
      "ts-jest": "29.0.5",
      "ts-node": "10.9.1",
      typescript: "4.9.5",
      vite: "4.1.4",
      "vite-plugin-checker": "0.5.6",
      "vite-tsconfig-paths": "4.0.5"
    };
    const resolutions = {
      jss: "10.10.0",
      "react-jss": "10.10.0"
    };
    const packageJson = {
      name,
      version,
      homepage,
      "private": true,
      scripts,
      dependencies,
      devDependencies,
      resolutions
    };
    const Welcome = () => {
      const classes = useStyles$3();
      const { version: version2 } = packageJson;
      const dateDifference = reactExports.useMemo(() => {
        const diffInMonths = differenceInMonths(new Date(), new Date(Date.parse("2020-09-21")));
        return `${Math.floor(diffInMonths / 12)} years ${diffInMonths % 12} months of professional experience.`;
      }, []);
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: classes.version, children: [
          "(Version ",
          version2,
          ")"
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "Hello! I'm Anna" }),
          /* @__PURE__ */ jsxs(Fragment, { children: [
            "- a Frontend Software Engineer with ",
            dateDifference
          ] })
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          "Type ",
          /* @__PURE__ */ jsx("b", { children: "help" }),
          " to view a list of commands"
        ] })
      ] });
    };
    createUseStyles({
      root: {
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        [mediaDown("m")]: {
          gridTemplateColumns: "repeat(2, auto)"
        }
      }
    });
    const useStyles$2 = createUseStyles({
      root: {}
    });
    const Profile = () => {
      const classes = useStyles$2();
      return /* @__PURE__ */ jsxs("div", { className: classes.root, children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "As a Software Engineer, I find my joy in frontend development.",
          /* @__PURE__ */ jsx("br", {}),
          " The creative process of transforming complex designs into intuitive,",
          /* @__PURE__ */ jsx("br", {}),
          " interactive elements sparks my drive."
        ] }),
        /* @__PURE__ */ jsx("b", { children: "Education" }),
        /* @__PURE__ */ jsx("p", { children: "- Bachelor Degree @ Computer Science" }),
        /* @__PURE__ */ jsx("b", { children: "Location / time-zone" }),
        /* @__PURE__ */ jsx("p", { children: "- Russia, Novosibirsk / UTC +7:00" }),
        /* @__PURE__ */ jsx("b", { children: "Current company" }),
        /* @__PURE__ */ jsx("p", { children: "- True Engineering" })
      ] });
    };
    const useStyles$1 = createUseStyles({
      root: {},
      links: {
        display: "flex",
        flexDirection: "column"
      }
    });
    const Socials = () => {
      const classes = useStyles$1();
      return /* @__PURE__ */ jsxs("div", { className: classes.root, children: [
        "Here are my social links:",
        /* @__PURE__ */ jsxs("div", { className: classes.links, children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "https://www.linkedin.com/in/anna-myamikova-8a0943234/",
              rel: "noreferrer",
              children: "LinkedIn"
            }
          ),
          /* @__PURE__ */ jsx("a", { target: "_blank", href: "https://github.com/annamyamikova", rel: "noreferrer", children: "GitHub" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "https://instagram.com/annmyamikova?igshid=OGQ5ZDc2ODk2ZA==",
              rel: "noreferrer",
              children: "Instagram"
            }
          ),
          /* @__PURE__ */ jsx("a", { target: "_blank", href: "https://t.me/annamyam", rel: "noreferrer", children: "Telegram" }),
          /* @__PURE__ */ jsx("a", { target: "_blank", href: "https://vk.com/amyamikova", rel: "noreferrer", children: "VK" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you would like to get on touch with me, feel free to send me an email at",
          /* @__PURE__ */ jsx("a", { href: "mailto:myamikova9@gmail.com", children: " myamikova9@gmail.com" }),
          "Feel free to drop a message, anytime! Let's code, collaborate, and create the future of technology together. Welcome on board!"
        ] })
      ] });
    };
    const commands = {
      help: { desc: "check available commands", component: /* @__PURE__ */ jsx(Help, {}) },
      profile: { desc: "view profile CV", component: /* @__PURE__ */ jsx(Profile, {}) },
      socials: { desc: "check out socials accounts", component: /* @__PURE__ */ jsx(Socials, {}) },
      clear: { desc: "clear the terminal" },
      welcome: { desc: "show welcome message", component: /* @__PURE__ */ jsx(Welcome, {}) }
      // TODO: доделать откытие файла
      // ls: { desc: 'show lists files in the current directory', component: <Ls /> },
      // cat: { desc: 'open a file', component: <Help /> },
    };
    const useStyles = createUseStyles({
      root: {
        height: "auto",
        maxWidth: 750,
        margin: [100, "auto", 0],
        [mediaDown("m")]: {
          margin: [100, 10, 0]
        }
      },
      prompt: {
        color: colors.GREEN,
        flexShrink: 0,
        display: "inline"
      },
      delta: {
        color: colors.PINK
      },
      percent: {
        color: colors.BLUE
      }
    });
    const Terminal = () => {
      const classes = useStyles();
      return /* @__PURE__ */ jsx("div", { className: classes.root, children: /* @__PURE__ */ jsx(
        Editor,
        {
          defaultCommand: "welcome",
          welcomeMessage: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
            "Last login: ",
            format(new Date(), "E MMM dd hh:mm:ss"),
            " on console"
          ] }) }),
          commands,
          prompt: /* @__PURE__ */ jsxs("div", { className: classes.prompt, children: [
            "root@Annas-MBP-2",
            /* @__PURE__ */ jsx("span", { className: classes.delta, children: " ~ " }),
            /* @__PURE__ */ jsx("span", { className: classes.percent, children: "%" })
          ] })
        }
      ) });
    };
    const Home = () => /* @__PURE__ */ jsx(Terminal, {});
    /**
     * @remix-run/router v1.3.3
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$3() {
      _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$3.apply(this, arguments);
    }
    var Action;
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
    const PopStateEventType = "popstate";
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash: hash2
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash: hash2
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to) {
        return typeof to === "string" ? to : createPath(to);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index2) {
      return {
        usr: location.state,
        key: location.key,
        idx: index2
      };
    }
    function createLocation(current, to, state, key2) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends$3({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key2 || createKey()
      });
      return location;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash: hash2 = ""
      } = _ref;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash2 && hash2 !== "#")
        pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener = null;
      let index2 = getIndex();
      if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extends$3({}, globalHistory.state, {
          idx: index2
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index2;
        index2 = nextIndex;
        if (listener) {
          listener({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to, state) {
        action = Action.Push;
        let location = createLocation(history.location, to, state);
        if (validateLocation)
          validateLocation(location, to);
        index2 = getIndex() + 1;
        let historyState = getHistoryState(location, index2);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace2(to, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to, state);
        if (validateLocation)
          validateLocation(location, to);
        index2 = getIndex();
        let historyState = getHistoryState(location, index2);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to === "string" ? to : createPath(to);
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to) {
          return createHref(window2, to);
        },
        createURL,
        encodeLocation(to) {
          let url = createURL(to);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace: replace2,
        go(n2) {
          return globalHistory.go(n2);
        }
      };
      return history;
    }
    var ResultType;
    (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
    })(ResultType || (ResultType = {}));
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        matches = matchRouteBranch(
          branches[i],
          // Incoming pathnames are generally encoded from either window.location
          // or from router.navigate, but we want to match against the unencoded
          // paths in the route definitions.  Memory router locations won't be
          // encoded here but there also shouldn't be anything to decode so this
          // should be a safe operation.  This avoids needing matchRoutes to be
          // history-aware.
          safelyDecodeURI(pathname)
        );
      }
      return matches;
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index2, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index2,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes.forEach((route, index2) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index2);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index2, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0)
        return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result2 = [];
      result2.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result2.push(...restExploded);
      }
      return result2.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
    }
    const paramRe = /^:\w+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s) => s === "*";
    function computeScore(path, index2) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index2) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b2) {
      let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b2[b2.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname) {
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match2 = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        if (!match2)
          return null;
        Object.assign(matchedParams, match2.params);
        let route = meta.route;
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match2.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match2.pathnameBase])),
          route
        });
        if (match2.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match2.pathnameBase]);
        }
      }
      return matches;
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match2 = pathname.match(matcher);
      if (!match2)
        return null;
      let matchedPathname = match2[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match2.slice(1);
      let params = paramNames.reduce((memo, paramName, index2) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index2] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let paramNames = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_, paramName) => {
        paramNames.push(paramName);
        return "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else
        ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, paramNames];
    }
    function safelyDecodeURI(value) {
      try {
        return decodeURI(value);
      } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value;
      }
    }
    function safelyDecodeURIComponent(value, paramName) {
      try {
        return decodeURIComponent(value);
      } catch (error) {
        warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e2) {
        }
      }
    }
    const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    const validMutationMethodsArr = ["post", "put", "patch", "delete"];
    new Set(validMutationMethodsArr);
    const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
    new Set(validRequestMethodsArr);
    /**
     * React Router v6.8.2
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$2() {
      _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$2.apply(this, arguments);
    }
    function isPolyfill(x2, y2) {
      return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    const is = typeof Object.is === "function" ? Object.is : isPolyfill;
    const {
      useState,
      useEffect,
      useLayoutEffect,
      useDebugValue
    } = React$2;
    function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
      const value = getSnapshot();
      const [{
        inst
      }, forceUpdate] = useState({
        inst: {
          value,
          getSnapshot
        }
      });
      useLayoutEffect(() => {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
      }, [subscribe, value, getSnapshot]);
      useEffect(() => {
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
        const handleStoreChange = () => {
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({
              inst
            });
          }
        };
        return subscribe(handleStoreChange);
      }, [subscribe]);
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      const latestGetSnapshot = inst.getSnapshot;
      const prevValue = inst.value;
      try {
        const nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
      return getSnapshot();
    }
    const canUseDOM$1 = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
    const isServerEnvironment = !canUseDOM$1;
    const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
    "useSyncExternalStore" in React$2 ? ((module2) => module2.useSyncExternalStore)(React$2) : shim;
    const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
    const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
    const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
    const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
    const RouteContext = /* @__PURE__ */ reactExports.createContext({
      outlet: null,
      matches: []
    });
    const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
    function useInRouterContext() {
      return reactExports.useContext(LocationContext) != null;
    }
    function useLocation() {
      !useInRouterContext() ? invariant(false) : void 0;
      return reactExports.useContext(LocationContext).location;
    }
    function useRoutes(routes, locationArg) {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let dataRouterStateContext = reactExports.useContext(DataRouterStateContext);
      let {
        matches: parentMatches
      } = reactExports.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      routeMatch && routeMatch.route;
      let locationFromContext = useLocation();
      let location;
      if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
        location = parsedLocationArg;
      } else {
        location = locationFromContext;
      }
      let pathname = location.pathname || "/";
      let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
      let matches = matchRoutes(routes, {
        pathname: remainingPathname
      });
      let renderedMatches = _renderMatches(matches && matches.map((match2) => Object.assign({}, match2, {
        params: Object.assign({}, parentParams, match2.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathname).pathname : match2.pathname
        ]),
        pathnameBase: match2.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathnameBase).pathname : match2.pathnameBase
        ])
      })), parentMatches, dataRouterStateContext || void 0);
      if (locationArg && renderedMatches) {
        return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
          value: {
            location: _extends$2({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location),
            navigationType: Action.Pop
          }
        }, renderedMatches);
      }
      return renderedMatches;
    }
    function DefaultErrorElement() {
      let error = useRouteError();
      let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
      };
      let devInfo = null;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
        style: {
          fontStyle: "italic"
        }
      }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
        style: preStyles
      }, stack) : null, devInfo);
    }
    class RenderErrorBoundary extends reactExports.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
          return {
            error: props.error,
            location: props.location
          };
        }
        return {
          error: props.error || state.error,
          location: state.location
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
          value: this.props.routeContext
        }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })) : this.props.children;
      }
    }
    function RenderedRoute(_ref) {
      let {
        routeContext,
        match: match2,
        children
      } = _ref;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match2.route.errorElement) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match2.route.id;
      }
      return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
        value: routeContext
      }, children);
    }
    function _renderMatches(matches, parentMatches, dataRouterState) {
      if (parentMatches === void 0) {
        parentMatches = [];
      }
      if (matches == null) {
        if (dataRouterState != null && dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
        !(errorIndex >= 0) ? invariant(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
      }
      return renderedMatches.reduceRight((outlet, match2, index2) => {
        let error = match2.route.id ? errors == null ? void 0 : errors[match2.route.id] : null;
        let errorElement = dataRouterState ? match2.route.errorElement || /* @__PURE__ */ reactExports.createElement(DefaultErrorElement, null) : null;
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
        let getChildren = () => /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
          match: match2,
          routeContext: {
            outlet,
            matches: matches2
          }
        }, error ? errorElement : match2.route.element !== void 0 ? match2.route.element : outlet);
        return dataRouterState && (match2.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: {
            outlet: null,
            matches: matches2
          }
        }) : getChildren();
      }, null);
    }
    var DataRouterHook$1;
    (function(DataRouterHook2) {
      DataRouterHook2["UseBlocker"] = "useBlocker";
      DataRouterHook2["UseRevalidator"] = "useRevalidator";
    })(DataRouterHook$1 || (DataRouterHook$1 = {}));
    var DataRouterStateHook$1;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
      DataRouterStateHook2["UseActionData"] = "useActionData";
      DataRouterStateHook2["UseRouteError"] = "useRouteError";
      DataRouterStateHook2["UseNavigation"] = "useNavigation";
      DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
      DataRouterStateHook2["UseMatches"] = "useMatches";
      DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
    })(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
    function useDataRouterState(hookName) {
      let state = reactExports.useContext(DataRouterStateContext);
      !state ? invariant(false) : void 0;
      return state;
    }
    function useRouteContext(hookName) {
      let route = reactExports.useContext(RouteContext);
      !route ? invariant(false) : void 0;
      return route;
    }
    function useCurrentRouteId(hookName) {
      let route = useRouteContext();
      let thisRoute = route.matches[route.matches.length - 1];
      !thisRoute.route.id ? invariant(false) : void 0;
      return thisRoute.route.id;
    }
    function useRouteError() {
      var _state$errors;
      let error = reactExports.useContext(RouteErrorContext);
      let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
      let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
      if (error) {
        return error;
      }
      return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
    }
    function Route(_props) {
      invariant(false);
    }
    function Router(_ref4) {
      let {
        basename: basenameProp = "/",
        children = null,
        location: locationProp,
        navigationType = Action.Pop,
        navigator: navigator2,
        static: staticProp = false
      } = _ref4;
      !!useInRouterContext() ? invariant(false) : void 0;
      let basename = basenameProp.replace(/^\/*/, "/");
      let navigationContext = reactExports.useMemo(() => ({
        basename,
        navigator: navigator2,
        static: staticProp
      }), [basename, navigator2, staticProp]);
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash: hash2 = "",
        state = null,
        key: key2 = "default"
      } = locationProp;
      let location = reactExports.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) {
          return null;
        }
        return {
          pathname: trailingPathname,
          search,
          hash: hash2,
          state,
          key: key2
        };
      }, [basename, pathname, search, hash2, state, key2]);
      if (location == null) {
        return null;
      }
      return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
        value: navigationContext
      }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
        children,
        value: {
          location,
          navigationType
        }
      }));
    }
    function Routes$1(_ref5) {
      let {
        children,
        location
      } = _ref5;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
      return useRoutes(routes, location);
    }
    var AwaitRenderStatus;
    (function(AwaitRenderStatus2) {
      AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
      AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
      AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
    })(AwaitRenderStatus || (AwaitRenderStatus = {}));
    new Promise(() => {
    });
    function createRoutesFromChildren(children, parentPath) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      let routes = [];
      reactExports.Children.forEach(children, (element, index2) => {
        if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
          return;
        }
        if (element.type === reactExports.Fragment) {
          routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
          return;
        }
        !(element.type === Route) ? invariant(false) : void 0;
        !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
        let treePath = [...parentPath, index2];
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          errorElement: element.props.errorElement,
          hasErrorBoundary: element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
      });
      return routes;
    }
    /**
     * React Router DOM v6.8.2
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function BrowserRouter(_ref) {
      let {
        basename,
        children,
        window: window2
      } = _ref;
      let historyRef = reactExports.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
          window: window2,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setState] = reactExports.useState({
        action: history.action,
        location: history.location
      });
      reactExports.useLayoutEffect(() => history.listen(setState), [history]);
      return /* @__PURE__ */ reactExports.createElement(Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
      });
    }
    var DataRouterHook;
    (function(DataRouterHook2) {
      DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
      DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
      DataRouterHook2["UseFetcher"] = "useFetcher";
    })(DataRouterHook || (DataRouterHook = {}));
    var DataRouterStateHook;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseFetchers"] = "useFetchers";
      DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    const Routes = () => /* @__PURE__ */ jsx(Routes$1, { children: /* @__PURE__ */ jsx(Route, { path: "/amyam", element: /* @__PURE__ */ jsx(Home, {}) }) });
    const common = {
      black: "#000",
      white: "#fff"
    };
    const common$1 = common;
    const red = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000"
    };
    const red$1 = red;
    const purple = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff"
    };
    const purple$1 = purple;
    const blue = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff"
    };
    const blue$1 = blue;
    const lightBlue = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea"
    };
    const lightBlue$1 = lightBlue;
    const green = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853"
    };
    const green$1 = green;
    const orange = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00"
    };
    const orange$1 = orange;
    const grey = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161"
    };
    const grey$1 = grey;
    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key2 in source) {
            if (Object.prototype.hasOwnProperty.call(source, key2)) {
              target[key2] = source[key2];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }
    function isPlainObject(item) {
      return item !== null && typeof item === "object" && item.constructor === Object;
    }
    function deepClone(source) {
      if (!isPlainObject(source)) {
        return source;
      }
      const output = {};
      Object.keys(source).forEach((key2) => {
        output[key2] = deepClone(source[key2]);
      });
      return output;
    }
    function deepmerge(target, source, options = {
      clone: true
    }) {
      const output = options.clone ? _extends$1({}, target) : target;
      if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key2) => {
          if (key2 === "__proto__") {
            return;
          }
          if (isPlainObject(source[key2]) && key2 in target && isPlainObject(target[key2])) {
            output[key2] = deepmerge(target[key2], source[key2], options);
          } else if (options.clone) {
            output[key2] = isPlainObject(source[key2]) ? deepClone(source[key2]) : source[key2];
          } else {
            output[key2] = source[key2];
          }
        });
      }
      return output;
    }
    function formatMuiErrorMessage(code) {
      let url = "https://mui.com/production-error/?code=" + code;
      for (let i = 1; i < arguments.length; i += 1) {
        url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
    }
    function capitalize$1(string) {
      if (typeof string !== "string") {
        throw new Error(formatMuiErrorMessage(7));
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const THEME_ID = "$$material";
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key2, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key2 = sourceKeys[i];
        if (excluded.indexOf(key2) >= 0)
          continue;
        target[key2] = source[key2];
      }
      return target;
    }
    function sheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
    function createStyleElement(options) {
      var tag = document.createElement("style");
      tag.setAttribute("data-emotion", options.key);
      if (options.nonce !== void 0) {
        tag.setAttribute("nonce", options.nonce);
      }
      tag.appendChild(document.createTextNode(""));
      tag.setAttribute("data-s", "");
      return tag;
    }
    var StyleSheet = /* @__PURE__ */ function() {
      function StyleSheet2(options) {
        var _this = this;
        this._insertTag = function(tag) {
          var before;
          if (_this.tags.length === 0) {
            if (_this.insertionPoint) {
              before = _this.insertionPoint.nextSibling;
            } else if (_this.prepend) {
              before = _this.container.firstChild;
            } else {
              before = _this.before;
            }
          } else {
            before = _this.tags[_this.tags.length - 1].nextSibling;
          }
          _this.container.insertBefore(tag, before);
          _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce;
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.insertionPoint = options.insertionPoint;
        this.before = null;
      }
      var _proto = StyleSheet2.prototype;
      _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
      };
      _proto.insert = function insert(rule) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
          this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e2) {
          }
        } else {
          tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
      };
      _proto.flush = function flush() {
        this.tags.forEach(function(tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
      };
      return StyleSheet2;
    }();
    var MS = "-ms-";
    var MOZ = "-moz-";
    var WEBKIT = "-webkit-";
    var COMMENT = "comm";
    var RULESET = "rule";
    var DECLARATION = "decl";
    var IMPORT = "@import";
    var KEYFRAMES = "@keyframes";
    var LAYER = "@layer";
    var abs = Math.abs;
    var from = String.fromCharCode;
    var assign = Object.assign;
    function hash(value, length2) {
      return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
    }
    function trim(value) {
      return value.trim();
    }
    function match(value, pattern) {
      return (value = pattern.exec(value)) ? value[0] : value;
    }
    function replace(value, pattern, replacement) {
      return value.replace(pattern, replacement);
    }
    function indexof(value, search) {
      return value.indexOf(search);
    }
    function charat(value, index2) {
      return value.charCodeAt(index2) | 0;
    }
    function substr(value, begin, end) {
      return value.slice(begin, end);
    }
    function strlen(value) {
      return value.length;
    }
    function sizeof(value) {
      return value.length;
    }
    function append(value, array) {
      return array.push(value), value;
    }
    function combine(array, callback) {
      return array.map(callback).join("");
    }
    var line = 1;
    var column = 1;
    var length = 0;
    var position = 0;
    var character = 0;
    var characters = "";
    function node(value, root2, parent, type, props, children, length2) {
      return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "" };
    }
    function copy$1(root2, props) {
      return assign(node("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
    }
    function char() {
      return character;
    }
    function prev() {
      character = position > 0 ? charat(characters, --position) : 0;
      if (column--, character === 10)
        column = 1, line--;
      return character;
    }
    function next() {
      character = position < length ? charat(characters, position++) : 0;
      if (column++, character === 10)
        column = 1, line++;
      return character;
    }
    function peek() {
      return charat(characters, position);
    }
    function caret() {
      return position;
    }
    function slice(begin, end) {
      return substr(characters, begin, end);
    }
    function token(type) {
      switch (type) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function alloc(value) {
      return line = column = 1, length = strlen(characters = value), position = 0, [];
    }
    function dealloc(value) {
      return characters = "", value;
    }
    function delimit(type) {
      return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
    }
    function whitespace(type) {
      while (character = peek())
        if (character < 33)
          next();
        else
          break;
      return token(type) > 2 || token(character) > 3 ? "" : " ";
    }
    function escaping(index2, count) {
      while (--count && next())
        if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
          break;
      return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
    }
    function delimiter(type) {
      while (next())
        switch (character) {
          case type:
            return position;
          case 34:
          case 39:
            if (type !== 34 && type !== 39)
              delimiter(character);
            break;
          case 40:
            if (type === 41)
              delimiter(type);
            break;
          case 92:
            next();
            break;
        }
      return position;
    }
    function commenter(type, index2) {
      while (next())
        if (type + character === 47 + 10)
          break;
        else if (type + character === 42 + 42 && peek() === 47)
          break;
      return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
    }
    function identifier(index2) {
      while (!token(peek()))
        next();
      return slice(index2, position);
    }
    function compile(value) {
      return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
    }
    function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
      var index2 = 0;
      var offset = 0;
      var length2 = pseudo;
      var atrule = 0;
      var property = 0;
      var previous = 0;
      var variable = 1;
      var scanning = 1;
      var ampersand = 1;
      var character2 = 0;
      var type = "";
      var props = rules;
      var children = rulesets;
      var reference = rule;
      var characters2 = type;
      while (scanning)
        switch (previous = character2, character2 = next()) {
          case 40:
            if (previous != 108 && charat(characters2, length2 - 1) == 58) {
              if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
                ampersand = -1;
              break;
            }
          case 34:
          case 39:
          case 91:
            characters2 += delimit(character2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            characters2 += whitespace(previous);
            break;
          case 92:
            characters2 += escaping(caret() - 1, 7);
            continue;
          case 47:
            switch (peek()) {
              case 42:
              case 47:
                append(comment(commenter(next(), caret()), root2, parent), declarations);
                break;
              default:
                characters2 += "/";
            }
            break;
          case 123 * variable:
            points[index2++] = strlen(characters2) * ampersand;
          case 125 * variable:
          case 59:
          case 0:
            switch (character2) {
              case 0:
              case 125:
                scanning = 0;
              case 59 + offset:
                if (ampersand == -1)
                  characters2 = replace(characters2, /\f/g, "");
                if (property > 0 && strlen(characters2) - length2)
                  append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
                break;
              case 59:
                characters2 += ";";
              default:
                append(reference = ruleset(characters2, root2, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
                if (character2 === 123)
                  if (offset === 0)
                    parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                  else
                    switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                        break;
                      default:
                        parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                    }
            }
            index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
            break;
          case 58:
            length2 = 1 + strlen(characters2), property = previous;
          default:
            if (variable < 1) {
              if (character2 == 123)
                --variable;
              else if (character2 == 125 && variable++ == 0 && prev() == 125)
                continue;
            }
            switch (characters2 += from(character2), character2 * variable) {
              case 38:
                ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
                break;
              case 44:
                points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
                break;
              case 64:
                if (peek() === 45)
                  characters2 += delimit(next());
                atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
                break;
              case 45:
                if (previous === 45 && strlen(characters2) == 2)
                  variable = 0;
            }
        }
      return rulesets;
    }
    function ruleset(value, root2, parent, index2, offset, rules, points, type, props, children, length2) {
      var post = offset - 1;
      var rule = offset === 0 ? rules : [""];
      var size = sizeof(rule);
      for (var i = 0, j = 0, k2 = 0; i < index2; ++i)
        for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
          if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
            props[k2++] = z2;
      return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2);
    }
    function comment(value, root2, parent) {
      return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
    }
    function declaration(value, root2, parent, length2) {
      return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
    }
    function serialize(children, callback) {
      var output = "";
      var length2 = sizeof(children);
      for (var i = 0; i < length2; i++)
        output += callback(children[i], i, children, callback) || "";
      return output;
    }
    function stringify(element, index2, children, callback) {
      switch (element.type) {
        case LAYER:
          if (element.children.length)
            break;
        case IMPORT:
        case DECLARATION:
          return element.return = element.return || element.value;
        case COMMENT:
          return "";
        case KEYFRAMES:
          return element.return = element.value + "{" + serialize(element.children, callback) + "}";
        case RULESET:
          element.value = element.props.join(",");
      }
      return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
    }
    function middleware(collection) {
      var length2 = sizeof(collection);
      return function(element, index2, children, callback) {
        var output = "";
        for (var i = 0; i < length2; i++)
          output += collection[i](element, index2, children, callback) || "";
        return output;
      };
    }
    function rulesheet(callback) {
      return function(element) {
        if (!element.root) {
          if (element = element.return)
            callback(element);
        }
      };
    }
    var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
      var previous = 0;
      var character2 = 0;
      while (true) {
        previous = character2;
        character2 = peek();
        if (previous === 38 && character2 === 12) {
          points[index2] = 1;
        }
        if (token(character2)) {
          break;
        }
        next();
      }
      return slice(begin, position);
    };
    var toRules = function toRules2(parsed, points) {
      var index2 = -1;
      var character2 = 44;
      do {
        switch (token(character2)) {
          case 0:
            if (character2 === 38 && peek() === 12) {
              points[index2] = 1;
            }
            parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
            break;
          case 2:
            parsed[index2] += delimit(character2);
            break;
          case 4:
            if (character2 === 44) {
              parsed[++index2] = peek() === 58 ? "&\f" : "";
              points[index2] = parsed[index2].length;
              break;
            }
          default:
            parsed[index2] += from(character2);
        }
      } while (character2 = next());
      return parsed;
    };
    var getRules = function getRules2(value, points) {
      return dealloc(toRules(alloc(value), points));
    };
    var fixedElements = /* @__PURE__ */ new WeakMap();
    var compat = function compat2(element) {
      if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
      // negative .length indicates that this rule has been already prefixed
      element.length < 1) {
        return;
      }
      var value = element.value, parent = element.parent;
      var isImplicitRule = element.column === parent.column && element.line === parent.line;
      while (parent.type !== "rule") {
        parent = parent.parent;
        if (!parent)
          return;
      }
      if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
      }
      if (isImplicitRule) {
        return;
      }
      fixedElements.set(element, true);
      var points = [];
      var rules = getRules(value, points);
      var parentRules = parent.props;
      for (var i = 0, k2 = 0; i < rules.length; i++) {
        for (var j = 0; j < parentRules.length; j++, k2++) {
          element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
      }
    };
    var removeLabel = function removeLabel2(element) {
      if (element.type === "decl") {
        var value = element.value;
        if (
          // charcode for l
          value.charCodeAt(0) === 108 && // charcode for b
          value.charCodeAt(2) === 98
        ) {
          element["return"] = "";
          element.value = "";
        }
      }
    };
    function prefix(value, length2) {
      switch (hash(value, length2)) {
        case 5103:
          return WEBKIT + "print-" + value + value;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return WEBKIT + value + value;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return WEBKIT + value + MOZ + value + MS + value + value;
        case 6828:
        case 4268:
          return WEBKIT + value + MS + value + value;
        case 6165:
          return WEBKIT + value + MS + "flex-" + value + value;
        case 5187:
          return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
        case 5443:
          return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
        case 4675:
          return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
        case 5548:
          return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
        case 5292:
          return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
        case 6060:
          return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
        case 4554:
          return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
        case 6187:
          return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
        case 5495:
        case 3959:
          return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
        case 4968:
          return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (strlen(value) - 1 - length2 > 6)
            switch (charat(value, length2 + 1)) {
              case 109:
                if (charat(value, length2 + 4) !== 45)
                  break;
              case 102:
                return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
              case 115:
                return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
            }
          break;
        case 4949:
          if (charat(value, length2 + 1) !== 115)
            break;
        case 6444:
          switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
            case 107:
              return replace(value, ":", ":" + WEBKIT) + value;
            case 101:
              return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
          }
          break;
        case 5936:
          switch (charat(value, length2 + 11)) {
            case 114:
              return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
            case 108:
              return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
            case 45:
              return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
          }
          return WEBKIT + value + MS + value + value;
      }
      return value;
    }
    var prefixer = function prefixer2(element, index2, children, callback) {
      if (element.length > -1) {
        if (!element["return"])
          switch (element.type) {
            case DECLARATION:
              element["return"] = prefix(element.value, element.length);
              break;
            case KEYFRAMES:
              return serialize([copy$1(element, {
                value: replace(element.value, "@", "@" + WEBKIT)
              })], callback);
            case RULESET:
              if (element.length)
                return combine(element.props, function(value) {
                  switch (match(value, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return serialize([copy$1(element, {
                        props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                      })], callback);
                    case "::placeholder":
                      return serialize([copy$1(element, {
                        props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                      }), copy$1(element, {
                        props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                      }), copy$1(element, {
                        props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                      })], callback);
                  }
                  return "";
                });
          }
      }
    };
    var defaultStylisPlugins = [prefixer];
    var createCache = function createCache2(options) {
      var key2 = options.key;
      if (key2 === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(ssrStyles, function(node2) {
          var dataEmotionAttribute = node2.getAttribute("data-emotion");
          if (dataEmotionAttribute.indexOf(" ") === -1) {
            return;
          }
          document.head.appendChild(node2);
          node2.setAttribute("data-s", "");
        });
      }
      var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
      var inserted = {};
      var container2;
      var nodesToHydrate = [];
      {
        container2 = options.container || document.head;
        Array.prototype.forEach.call(
          // this means we will ignore elements which don't have a space in them which
          // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
          document.querySelectorAll('style[data-emotion^="' + key2 + ' "]'),
          function(node2) {
            var attrib = node2.getAttribute("data-emotion").split(" ");
            for (var i = 1; i < attrib.length; i++) {
              inserted[attrib[i]] = true;
            }
            nodesToHydrate.push(node2);
          }
        );
      }
      var _insert;
      var omnipresentPlugins = [compat, removeLabel];
      {
        var currentSheet;
        var finalizingPlugins = [stringify, rulesheet(function(rule) {
          currentSheet.insert(rule);
        })];
        var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
        var stylis = function stylis2(styles) {
          return serialize(compile(styles), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
          currentSheet = sheet;
          stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
          if (shouldCache) {
            cache2.inserted[serialized.name] = true;
          }
        };
      }
      var cache2 = {
        key: key2,
        sheet: new StyleSheet({
          key: key2,
          container: container2,
          nonce: options.nonce,
          speedy: options.speedy,
          prepend: options.prepend,
          insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted,
        registered: {},
        insert: _insert
      };
      cache2.sheet.hydrate(nodesToHydrate);
      return cache2;
    };
    var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
      // we're doing this to avoid preconstruct's dead code elimination in this one case
      // because this module is primarily intended for the browser and node
      // but it's also required in react native and similar environments sometimes
      // and we could have a special build just for that
      // but this is much easier and the native packages
      // might use a different theme context in the future anyway
      typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
        key: "css"
      }) : null
    );
    EmotionCacheContext.Provider;
    var ThemeContext$2 = /* @__PURE__ */ reactExports.createContext({});
    const _excluded$6 = ["values", "unit", "step"];
    const sortBreakpointsValues = (values2) => {
      const breakpointsAsArray = Object.keys(values2).map((key2) => ({
        key: key2,
        val: values2[key2]
      })) || [];
      breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
      return breakpointsAsArray.reduce((acc, obj) => {
        return _extends$1({}, acc, {
          [obj.key]: obj.val
        });
      }, {});
    };
    function createBreakpoints(breakpoints2) {
      const {
        // The breakpoint **start** at this value.
        // For instance with the first breakpoint xs: [xs, sm).
        values: values2 = {
          xs: 0,
          // phone
          sm: 600,
          // tablet
          md: 900,
          // small laptop
          lg: 1200,
          // desktop
          xl: 1536
          // large screen
        },
        unit = "px",
        step = 5
      } = breakpoints2, other = _objectWithoutPropertiesLoose(breakpoints2, _excluded$6);
      const sortedValues = sortBreakpointsValues(values2);
      const keys = Object.keys(sortedValues);
      function up(key2) {
        const value = typeof values2[key2] === "number" ? values2[key2] : key2;
        return `@media (min-width:${value}${unit})`;
      }
      function down(key2) {
        const value = typeof values2[key2] === "number" ? values2[key2] : key2;
        return `@media (max-width:${value - step / 100}${unit})`;
      }
      function between(start, end) {
        const endIndex = keys.indexOf(end);
        return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
      }
      function only(key2) {
        if (keys.indexOf(key2) + 1 < keys.length) {
          return between(key2, keys[keys.indexOf(key2) + 1]);
        }
        return up(key2);
      }
      function not(key2) {
        const keyIndex = keys.indexOf(key2);
        if (keyIndex === 0) {
          return up(keys[1]);
        }
        if (keyIndex === keys.length - 1) {
          return down(keys[keyIndex]);
        }
        return between(key2, keys[keys.indexOf(key2) + 1]).replace("@media", "@media not all and");
      }
      return _extends$1({
        keys,
        values: sortedValues,
        up,
        down,
        between,
        only,
        not,
        unit
      }, other);
    }
    const shape = {
      borderRadius: 4
    };
    const shape$1 = shape;
    function merge(acc, item) {
      if (!item) {
        return acc;
      }
      return deepmerge(acc, item, {
        clone: false
        // No need to clone deep, it's way faster.
      });
    }
    const values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    };
    const defaultBreakpoints = {
      // Sorted ASC by size. That's important.
      // It can't be configured as it's used statically for propTypes.
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (key2) => `@media (min-width:${values[key2]}px)`
    };
    function handleBreakpoints(props, propValue, styleFromPropValue) {
      const theme = props.theme || {};
      if (Array.isArray(propValue)) {
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        return propValue.reduce((acc, item, index2) => {
          acc[themeBreakpoints.up(themeBreakpoints.keys[index2])] = styleFromPropValue(propValue[index2]);
          return acc;
        }, {});
      }
      if (typeof propValue === "object") {
        const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
        return Object.keys(propValue).reduce((acc, breakpoint) => {
          if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
            const mediaKey = themeBreakpoints.up(breakpoint);
            acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
          } else {
            const cssKey = breakpoint;
            acc[cssKey] = propValue[cssKey];
          }
          return acc;
        }, {});
      }
      const output = styleFromPropValue(propValue);
      return output;
    }
    function createEmptyBreakpointObject(breakpointsInput = {}) {
      var _breakpointsInput$key;
      const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key2) => {
        const breakpointStyleKey = breakpointsInput.up(key2);
        acc[breakpointStyleKey] = {};
        return acc;
      }, {});
      return breakpointsInOrder || {};
    }
    function removeUnusedBreakpoints(breakpointKeys, style2) {
      return breakpointKeys.reduce((acc, key2) => {
        const breakpointOutput = acc[key2];
        const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
        if (isBreakpointUnused) {
          delete acc[key2];
        }
        return acc;
      }, style2);
    }
    function getPath$1(obj, path, checkVars = true) {
      if (!path || typeof path !== "string") {
        return null;
      }
      if (obj && obj.vars && checkVars) {
        const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
        if (val != null) {
          return val;
        }
      }
      return path.split(".").reduce((acc, item) => {
        if (acc && acc[item] != null) {
          return acc[item];
        }
        return null;
      }, obj);
    }
    function getStyleValue(themeMapping, transform2, propValueFinal, userValue = propValueFinal) {
      let value;
      if (typeof themeMapping === "function") {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || userValue;
      } else {
        value = getPath$1(themeMapping, propValueFinal) || userValue;
      }
      if (transform2) {
        value = transform2(value, userValue, themeMapping);
      }
      return value;
    }
    function style$1(options) {
      const {
        prop,
        cssProperty = options.prop,
        themeKey,
        transform: transform2
      } = options;
      const fn = (props) => {
        if (props[prop] == null) {
          return null;
        }
        const propValue = props[prop];
        const theme = props.theme;
        const themeMapping = getPath$1(theme, themeKey) || {};
        const styleFromPropValue = (propValueFinal) => {
          let value = getStyleValue(themeMapping, transform2, propValueFinal);
          if (propValueFinal === value && typeof propValueFinal === "string") {
            value = getStyleValue(themeMapping, transform2, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
          }
          if (cssProperty === false) {
            return value;
          }
          return {
            [cssProperty]: value
          };
        };
        return handleBreakpoints(props, propValue, styleFromPropValue);
      };
      fn.propTypes = {};
      fn.filterProps = [prop];
      return fn;
    }
    function memoize(fn) {
      const cache2 = {};
      return (arg) => {
        if (cache2[arg] === void 0) {
          cache2[arg] = fn(arg);
        }
        return cache2[arg];
      };
    }
    const properties = {
      m: "margin",
      p: "padding"
    };
    const directions = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"]
    };
    const aliases = {
      marginX: "mx",
      marginY: "my",
      paddingX: "px",
      paddingY: "py"
    };
    const getCssProperties = memoize((prop) => {
      if (prop.length > 2) {
        if (aliases[prop]) {
          prop = aliases[prop];
        } else {
          return [prop];
        }
      }
      const [a, b2] = prop.split("");
      const property = properties[a];
      const direction = directions[b2] || "";
      return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
    });
    const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
    const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
    [...marginKeys, ...paddingKeys];
    function createUnaryUnit(theme, themeKey, defaultValue, propName) {
      var _getPath;
      const themeSpacing = (_getPath = getPath$1(theme, themeKey, false)) != null ? _getPath : defaultValue;
      if (typeof themeSpacing === "number") {
        return (abs2) => {
          if (typeof abs2 === "string") {
            return abs2;
          }
          return themeSpacing * abs2;
        };
      }
      if (Array.isArray(themeSpacing)) {
        return (abs2) => {
          if (typeof abs2 === "string") {
            return abs2;
          }
          return themeSpacing[abs2];
        };
      }
      if (typeof themeSpacing === "function") {
        return themeSpacing;
      }
      return () => void 0;
    }
    function createUnarySpacing(theme) {
      return createUnaryUnit(theme, "spacing", 8);
    }
    function getValue(transformer, propValue) {
      if (typeof propValue === "string" || propValue == null) {
        return propValue;
      }
      const abs2 = Math.abs(propValue);
      const transformed = transformer(abs2);
      if (propValue >= 0) {
        return transformed;
      }
      if (typeof transformed === "number") {
        return -transformed;
      }
      return `-${transformed}`;
    }
    function getStyleFromPropValue(cssProperties, transformer) {
      return (propValue) => cssProperties.reduce((acc, cssProperty) => {
        acc[cssProperty] = getValue(transformer, propValue);
        return acc;
      }, {});
    }
    function resolveCssProperty(props, keys, prop, transformer) {
      if (keys.indexOf(prop) === -1) {
        return null;
      }
      const cssProperties = getCssProperties(prop);
      const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
      const propValue = props[prop];
      return handleBreakpoints(props, propValue, styleFromPropValue);
    }
    function style(props, keys) {
      const transformer = createUnarySpacing(props.theme);
      return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
    }
    function margin(props) {
      return style(props, marginKeys);
    }
    margin.propTypes = {};
    margin.filterProps = marginKeys;
    function padding(props) {
      return style(props, paddingKeys);
    }
    padding.propTypes = {};
    padding.filterProps = paddingKeys;
    function createSpacing(spacingInput = 8) {
      if (spacingInput.mui) {
        return spacingInput;
      }
      const transform2 = createUnarySpacing({
        spacing: spacingInput
      });
      const spacing = (...argsInput) => {
        const args = argsInput.length === 0 ? [1] : argsInput;
        return args.map((argument) => {
          const output = transform2(argument);
          return typeof output === "number" ? `${output}px` : output;
        }).join(" ");
      };
      spacing.mui = true;
      return spacing;
    }
    function compose(...styles) {
      const handlers = styles.reduce((acc, style2) => {
        style2.filterProps.forEach((prop) => {
          acc[prop] = style2;
        });
        return acc;
      }, {});
      const fn = (props) => {
        return Object.keys(props).reduce((acc, prop) => {
          if (handlers[prop]) {
            return merge(acc, handlers[prop](props));
          }
          return acc;
        }, {});
      };
      fn.propTypes = {};
      fn.filterProps = styles.reduce((acc, style2) => acc.concat(style2.filterProps), []);
      return fn;
    }
    function borderTransform(value) {
      if (typeof value !== "number") {
        return value;
      }
      return `${value}px solid`;
    }
    const border = style$1({
      prop: "border",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderTop = style$1({
      prop: "borderTop",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderRight = style$1({
      prop: "borderRight",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderBottom = style$1({
      prop: "borderBottom",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderLeft = style$1({
      prop: "borderLeft",
      themeKey: "borders",
      transform: borderTransform
    });
    const borderColor = style$1({
      prop: "borderColor",
      themeKey: "palette"
    });
    const borderTopColor = style$1({
      prop: "borderTopColor",
      themeKey: "palette"
    });
    const borderRightColor = style$1({
      prop: "borderRightColor",
      themeKey: "palette"
    });
    const borderBottomColor = style$1({
      prop: "borderBottomColor",
      themeKey: "palette"
    });
    const borderLeftColor = style$1({
      prop: "borderLeftColor",
      themeKey: "palette"
    });
    const borderRadius = (props) => {
      if (props.borderRadius !== void 0 && props.borderRadius !== null) {
        const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
        const styleFromPropValue = (propValue) => ({
          borderRadius: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
      }
      return null;
    };
    borderRadius.propTypes = {};
    borderRadius.filterProps = ["borderRadius"];
    compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
    const gap = (props) => {
      if (props.gap !== void 0 && props.gap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8);
        const styleFromPropValue = (propValue) => ({
          gap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.gap, styleFromPropValue);
      }
      return null;
    };
    gap.propTypes = {};
    gap.filterProps = ["gap"];
    const columnGap = (props) => {
      if (props.columnGap !== void 0 && props.columnGap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8);
        const styleFromPropValue = (propValue) => ({
          columnGap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.columnGap, styleFromPropValue);
      }
      return null;
    };
    columnGap.propTypes = {};
    columnGap.filterProps = ["columnGap"];
    const rowGap = (props) => {
      if (props.rowGap !== void 0 && props.rowGap !== null) {
        const transformer = createUnaryUnit(props.theme, "spacing", 8);
        const styleFromPropValue = (propValue) => ({
          rowGap: getValue(transformer, propValue)
        });
        return handleBreakpoints(props, props.rowGap, styleFromPropValue);
      }
      return null;
    };
    rowGap.propTypes = {};
    rowGap.filterProps = ["rowGap"];
    const gridColumn = style$1({
      prop: "gridColumn"
    });
    const gridRow = style$1({
      prop: "gridRow"
    });
    const gridAutoFlow = style$1({
      prop: "gridAutoFlow"
    });
    const gridAutoColumns = style$1({
      prop: "gridAutoColumns"
    });
    const gridAutoRows = style$1({
      prop: "gridAutoRows"
    });
    const gridTemplateColumns = style$1({
      prop: "gridTemplateColumns"
    });
    const gridTemplateRows = style$1({
      prop: "gridTemplateRows"
    });
    const gridTemplateAreas = style$1({
      prop: "gridTemplateAreas"
    });
    const gridArea = style$1({
      prop: "gridArea"
    });
    compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
    function paletteTransform(value, userValue) {
      if (userValue === "grey") {
        return userValue;
      }
      return value;
    }
    const color = style$1({
      prop: "color",
      themeKey: "palette",
      transform: paletteTransform
    });
    const bgcolor = style$1({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: paletteTransform
    });
    const backgroundColor = style$1({
      prop: "backgroundColor",
      themeKey: "palette",
      transform: paletteTransform
    });
    compose(color, bgcolor, backgroundColor);
    function sizingTransform(value) {
      return value <= 1 && value !== 0 ? `${value * 100}%` : value;
    }
    const width = style$1({
      prop: "width",
      transform: sizingTransform
    });
    const maxWidth = (props) => {
      if (props.maxWidth !== void 0 && props.maxWidth !== null) {
        const styleFromPropValue = (propValue) => {
          var _props$theme, _props$theme2;
          const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
          if (!breakpoint) {
            return {
              maxWidth: sizingTransform(propValue)
            };
          }
          if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
            return {
              maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
            };
          }
          return {
            maxWidth: breakpoint
          };
        };
        return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
      }
      return null;
    };
    maxWidth.filterProps = ["maxWidth"];
    const minWidth = style$1({
      prop: "minWidth",
      transform: sizingTransform
    });
    const height = style$1({
      prop: "height",
      transform: sizingTransform
    });
    const maxHeight = style$1({
      prop: "maxHeight",
      transform: sizingTransform
    });
    const minHeight = style$1({
      prop: "minHeight",
      transform: sizingTransform
    });
    style$1({
      prop: "size",
      cssProperty: "width",
      transform: sizingTransform
    });
    style$1({
      prop: "size",
      cssProperty: "height",
      transform: sizingTransform
    });
    const boxSizing = style$1({
      prop: "boxSizing"
    });
    compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
    const defaultSxConfig = {
      // borders
      border: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderTop: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderRight: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderBottom: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderLeft: {
        themeKey: "borders",
        transform: borderTransform
      },
      borderColor: {
        themeKey: "palette"
      },
      borderTopColor: {
        themeKey: "palette"
      },
      borderRightColor: {
        themeKey: "palette"
      },
      borderBottomColor: {
        themeKey: "palette"
      },
      borderLeftColor: {
        themeKey: "palette"
      },
      borderRadius: {
        themeKey: "shape.borderRadius",
        style: borderRadius
      },
      // palette
      color: {
        themeKey: "palette",
        transform: paletteTransform
      },
      bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: paletteTransform
      },
      backgroundColor: {
        themeKey: "palette",
        transform: paletteTransform
      },
      // spacing
      p: {
        style: padding
      },
      pt: {
        style: padding
      },
      pr: {
        style: padding
      },
      pb: {
        style: padding
      },
      pl: {
        style: padding
      },
      px: {
        style: padding
      },
      py: {
        style: padding
      },
      padding: {
        style: padding
      },
      paddingTop: {
        style: padding
      },
      paddingRight: {
        style: padding
      },
      paddingBottom: {
        style: padding
      },
      paddingLeft: {
        style: padding
      },
      paddingX: {
        style: padding
      },
      paddingY: {
        style: padding
      },
      paddingInline: {
        style: padding
      },
      paddingInlineStart: {
        style: padding
      },
      paddingInlineEnd: {
        style: padding
      },
      paddingBlock: {
        style: padding
      },
      paddingBlockStart: {
        style: padding
      },
      paddingBlockEnd: {
        style: padding
      },
      m: {
        style: margin
      },
      mt: {
        style: margin
      },
      mr: {
        style: margin
      },
      mb: {
        style: margin
      },
      ml: {
        style: margin
      },
      mx: {
        style: margin
      },
      my: {
        style: margin
      },
      margin: {
        style: margin
      },
      marginTop: {
        style: margin
      },
      marginRight: {
        style: margin
      },
      marginBottom: {
        style: margin
      },
      marginLeft: {
        style: margin
      },
      marginX: {
        style: margin
      },
      marginY: {
        style: margin
      },
      marginInline: {
        style: margin
      },
      marginInlineStart: {
        style: margin
      },
      marginInlineEnd: {
        style: margin
      },
      marginBlock: {
        style: margin
      },
      marginBlockStart: {
        style: margin
      },
      marginBlockEnd: {
        style: margin
      },
      // display
      displayPrint: {
        cssProperty: false,
        transform: (value) => ({
          "@media print": {
            display: value
          }
        })
      },
      display: {},
      overflow: {},
      textOverflow: {},
      visibility: {},
      whiteSpace: {},
      // flexbox
      flexBasis: {},
      flexDirection: {},
      flexWrap: {},
      justifyContent: {},
      alignItems: {},
      alignContent: {},
      order: {},
      flex: {},
      flexGrow: {},
      flexShrink: {},
      alignSelf: {},
      justifyItems: {},
      justifySelf: {},
      // grid
      gap: {
        style: gap
      },
      rowGap: {
        style: rowGap
      },
      columnGap: {
        style: columnGap
      },
      gridColumn: {},
      gridRow: {},
      gridAutoFlow: {},
      gridAutoColumns: {},
      gridAutoRows: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
      gridTemplateAreas: {},
      gridArea: {},
      // positions
      position: {},
      zIndex: {
        themeKey: "zIndex"
      },
      top: {},
      right: {},
      bottom: {},
      left: {},
      // shadows
      boxShadow: {
        themeKey: "shadows"
      },
      // sizing
      width: {
        transform: sizingTransform
      },
      maxWidth: {
        style: maxWidth
      },
      minWidth: {
        transform: sizingTransform
      },
      height: {
        transform: sizingTransform
      },
      maxHeight: {
        transform: sizingTransform
      },
      minHeight: {
        transform: sizingTransform
      },
      boxSizing: {},
      // typography
      fontFamily: {
        themeKey: "typography"
      },
      fontSize: {
        themeKey: "typography"
      },
      fontStyle: {
        themeKey: "typography"
      },
      fontWeight: {
        themeKey: "typography"
      },
      letterSpacing: {},
      textTransform: {},
      lineHeight: {},
      textAlign: {},
      typography: {
        cssProperty: false,
        themeKey: "typography"
      }
    };
    const defaultSxConfig$1 = defaultSxConfig;
    function objectsHaveSameKeys(...objects) {
      const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
      const union = new Set(allKeys);
      return objects.every((object) => union.size === Object.keys(object).length);
    }
    function callIfFn(maybeFn, arg) {
      return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
    }
    function unstable_createStyleFunctionSx() {
      function getThemeValue(prop, val, theme, config) {
        const props = {
          [prop]: val,
          theme
        };
        const options = config[prop];
        if (!options) {
          return {
            [prop]: val
          };
        }
        const {
          cssProperty = prop,
          themeKey,
          transform: transform2,
          style: style2
        } = options;
        if (val == null) {
          return null;
        }
        if (themeKey === "typography" && val === "inherit") {
          return {
            [prop]: val
          };
        }
        const themeMapping = getPath$1(theme, themeKey) || {};
        if (style2) {
          return style2(props);
        }
        const styleFromPropValue = (propValueFinal) => {
          let value = getStyleValue(themeMapping, transform2, propValueFinal);
          if (propValueFinal === value && typeof propValueFinal === "string") {
            value = getStyleValue(themeMapping, transform2, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
          }
          if (cssProperty === false) {
            return value;
          }
          return {
            [cssProperty]: value
          };
        };
        return handleBreakpoints(props, val, styleFromPropValue);
      }
      function styleFunctionSx2(props) {
        var _theme$unstable_sxCon;
        const {
          sx,
          theme = {}
        } = props || {};
        if (!sx) {
          return null;
        }
        const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;
        function traverse(sxInput) {
          let sxObject = sxInput;
          if (typeof sxInput === "function") {
            sxObject = sxInput(theme);
          } else if (typeof sxInput !== "object") {
            return sxInput;
          }
          if (!sxObject) {
            return null;
          }
          const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
          const breakpointsKeys = Object.keys(emptyBreakpoints);
          let css2 = emptyBreakpoints;
          Object.keys(sxObject).forEach((styleKey) => {
            const value = callIfFn(sxObject[styleKey], theme);
            if (value !== null && value !== void 0) {
              if (typeof value === "object") {
                if (config[styleKey]) {
                  css2 = merge(css2, getThemeValue(styleKey, value, theme, config));
                } else {
                  const breakpointsValues = handleBreakpoints({
                    theme
                  }, value, (x2) => ({
                    [styleKey]: x2
                  }));
                  if (objectsHaveSameKeys(breakpointsValues, value)) {
                    css2[styleKey] = styleFunctionSx2({
                      sx: value,
                      theme
                    });
                  } else {
                    css2 = merge(css2, breakpointsValues);
                  }
                }
              } else {
                css2 = merge(css2, getThemeValue(styleKey, value, theme, config));
              }
            }
          });
          return removeUnusedBreakpoints(breakpointsKeys, css2);
        }
        return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
      }
      return styleFunctionSx2;
    }
    const styleFunctionSx = unstable_createStyleFunctionSx();
    styleFunctionSx.filterProps = ["sx"];
    const styleFunctionSx$1 = styleFunctionSx;
    const _excluded$5 = ["breakpoints", "palette", "spacing", "shape"];
    function createTheme$1(options = {}, ...args) {
      const {
        breakpoints: breakpointsInput = {},
        palette: paletteInput = {},
        spacing: spacingInput,
        shape: shapeInput = {}
      } = options, other = _objectWithoutPropertiesLoose(options, _excluded$5);
      const breakpoints2 = createBreakpoints(breakpointsInput);
      const spacing = createSpacing(spacingInput);
      let muiTheme = deepmerge({
        breakpoints: breakpoints2,
        direction: "ltr",
        components: {},
        // Inject component definitions.
        palette: _extends$1({
          mode: "light"
        }, paletteInput),
        spacing,
        shape: _extends$1({}, shape$1, shapeInput)
      }, other);
      muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
      muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
      muiTheme.unstable_sx = function sx(props) {
        return styleFunctionSx$1({
          sx: props,
          theme: this
        });
      };
      return muiTheme;
    }
    function isObjectEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    function useTheme$1(defaultTheme = null) {
      const contextTheme = reactExports.useContext(ThemeContext$2);
      return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
    }
    function clamp(value, min = 0, max = 1) {
      return Math.min(Math.max(min, value), max);
    }
    function hexToRgb(color2) {
      color2 = color2.slice(1);
      const re2 = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
      let colors2 = color2.match(re2);
      if (colors2 && colors2[0].length === 1) {
        colors2 = colors2.map((n2) => n2 + n2);
      }
      return colors2 ? `rgb${colors2.length === 4 ? "a" : ""}(${colors2.map((n2, index2) => {
        return index2 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
      }).join(", ")})` : "";
    }
    function decomposeColor(color2) {
      if (color2.type) {
        return color2;
      }
      if (color2.charAt(0) === "#") {
        return decomposeColor(hexToRgb(color2));
      }
      const marker = color2.indexOf("(");
      const type = color2.substring(0, marker);
      if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
        throw new Error(formatMuiErrorMessage(9, color2));
      }
      let values2 = color2.substring(marker + 1, color2.length - 1);
      let colorSpace;
      if (type === "color") {
        values2 = values2.split(" ");
        colorSpace = values2.shift();
        if (values2.length === 4 && values2[3].charAt(0) === "/") {
          values2[3] = values2[3].slice(1);
        }
        if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
          throw new Error(formatMuiErrorMessage(10, colorSpace));
        }
      } else {
        values2 = values2.split(",");
      }
      values2 = values2.map((value) => parseFloat(value));
      return {
        type,
        values: values2,
        colorSpace
      };
    }
    function recomposeColor(color2) {
      const {
        type,
        colorSpace
      } = color2;
      let {
        values: values2
      } = color2;
      if (type.indexOf("rgb") !== -1) {
        values2 = values2.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
      } else if (type.indexOf("hsl") !== -1) {
        values2[1] = `${values2[1]}%`;
        values2[2] = `${values2[2]}%`;
      }
      if (type.indexOf("color") !== -1) {
        values2 = `${colorSpace} ${values2.join(" ")}`;
      } else {
        values2 = `${values2.join(", ")}`;
      }
      return `${type}(${values2})`;
    }
    function hslToRgb(color2) {
      color2 = decomposeColor(color2);
      const {
        values: values2
      } = color2;
      const h2 = values2[0];
      const s = values2[1] / 100;
      const l2 = values2[2] / 100;
      const a = s * Math.min(l2, 1 - l2);
      const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
      let type = "rgb";
      const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
      if (color2.type === "hsla") {
        type += "a";
        rgb.push(values2[3]);
      }
      return recomposeColor({
        type,
        values: rgb
      });
    }
    function getLuminance(color2) {
      color2 = decomposeColor(color2);
      let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
      rgb = rgb.map((val) => {
        if (color2.type !== "color") {
          val /= 255;
        }
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    function getContrastRatio(foreground, background) {
      const lumA = getLuminance(foreground);
      const lumB = getLuminance(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    function darken(color2, coefficient) {
      color2 = decomposeColor(color2);
      coefficient = clamp(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] *= 1 - coefficient;
      } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] *= 1 - coefficient;
        }
      }
      return recomposeColor(color2);
    }
    function lighten(color2, coefficient) {
      color2 = decomposeColor(color2);
      coefficient = clamp(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] += (100 - color2.values[2]) * coefficient;
      } else if (color2.type.indexOf("rgb") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (255 - color2.values[i]) * coefficient;
        }
      } else if (color2.type.indexOf("color") !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (1 - color2.values[i]) * coefficient;
        }
      }
      return recomposeColor(color2);
    }
    const ThemeContext = /* @__PURE__ */ reactExports.createContext(null);
    const ThemeContext$1 = ThemeContext;
    function useTheme() {
      const theme = reactExports.useContext(ThemeContext$1);
      return theme;
    }
    const hasSymbol = typeof Symbol === "function" && Symbol.for;
    const nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
    function mergeOuterLocalTheme(outerTheme, localTheme) {
      if (typeof localTheme === "function") {
        const mergedTheme = localTheme(outerTheme);
        return mergedTheme;
      }
      return _extends$1({}, outerTheme, localTheme);
    }
    function ThemeProvider$2(props) {
      const {
        children,
        theme: localTheme
      } = props;
      const outerTheme = useTheme();
      const theme = reactExports.useMemo(() => {
        const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
        if (output != null) {
          output[nested] = outerTheme !== null;
        }
        return output;
      }, [localTheme, outerTheme]);
      return /* @__PURE__ */ jsx(ThemeContext$1.Provider, {
        value: theme,
        children
      });
    }
    const EMPTY_THEME = {};
    function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
      return reactExports.useMemo(() => {
        const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
        if (typeof localTheme === "function") {
          const mergedTheme = localTheme(resolvedTheme);
          const result2 = themeId ? _extends$1({}, upperTheme, {
            [themeId]: mergedTheme
          }) : mergedTheme;
          if (isPrivate) {
            return () => result2;
          }
          return result2;
        }
        return themeId ? _extends$1({}, upperTheme, {
          [themeId]: localTheme
        }) : _extends$1({}, upperTheme, localTheme);
      }, [themeId, upperTheme, localTheme, isPrivate]);
    }
    function ThemeProvider$1(props) {
      const {
        children,
        theme: localTheme,
        themeId
      } = props;
      const upperTheme = useTheme$1(EMPTY_THEME);
      const upperPrivateTheme = useTheme() || EMPTY_THEME;
      const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
      const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
      return /* @__PURE__ */ jsx(ThemeProvider$2, {
        theme: privateTheme,
        children: /* @__PURE__ */ jsx(ThemeContext$2.Provider, {
          value: engineTheme,
          children
        })
      });
    }
    function createMixins(breakpoints2, mixins) {
      return _extends$1({
        toolbar: {
          minHeight: 56,
          [breakpoints2.up("xs")]: {
            "@media (orientation: landscape)": {
              minHeight: 48
            }
          },
          [breakpoints2.up("sm")]: {
            minHeight: 64
          }
        }
      }, mixins);
    }
    const _excluded$4 = ["mode", "contrastThreshold", "tonalOffset"];
    const light = {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: "rgba(0, 0, 0, 0.87)",
        // Secondary text.
        secondary: "rgba(0, 0, 0, 0.6)",
        // Disabled text have even lower visual prominence.
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      // The color used to divide different elements.
      divider: "rgba(0, 0, 0, 0.12)",
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common$1.white,
        default: common$1.white
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: "rgba(0, 0, 0, 0.54)",
        // The color of an hovered action.
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: "rgba(0, 0, 0, 0.26)",
        // The background color of a disabled action.
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
    const dark = {
      text: {
        primary: common$1.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: common$1.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
    function addLightOrDark(intent, direction, shade, tonalOffset) {
      const tonalOffsetLight = tonalOffset.light || tonalOffset;
      const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
      if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
          intent[direction] = intent[shade];
        } else if (direction === "light") {
          intent.light = lighten(intent.main, tonalOffsetLight);
        } else if (direction === "dark") {
          intent.dark = darken(intent.main, tonalOffsetDark);
        }
      }
    }
    function getDefaultPrimary(mode = "light") {
      if (mode === "dark") {
        return {
          main: blue$1[200],
          light: blue$1[50],
          dark: blue$1[400]
        };
      }
      return {
        main: blue$1[700],
        light: blue$1[400],
        dark: blue$1[800]
      };
    }
    function getDefaultSecondary(mode = "light") {
      if (mode === "dark") {
        return {
          main: purple$1[200],
          light: purple$1[50],
          dark: purple$1[400]
        };
      }
      return {
        main: purple$1[500],
        light: purple$1[300],
        dark: purple$1[700]
      };
    }
    function getDefaultError(mode = "light") {
      if (mode === "dark") {
        return {
          main: red$1[500],
          light: red$1[300],
          dark: red$1[700]
        };
      }
      return {
        main: red$1[700],
        light: red$1[400],
        dark: red$1[800]
      };
    }
    function getDefaultInfo(mode = "light") {
      if (mode === "dark") {
        return {
          main: lightBlue$1[400],
          light: lightBlue$1[300],
          dark: lightBlue$1[700]
        };
      }
      return {
        main: lightBlue$1[700],
        light: lightBlue$1[500],
        dark: lightBlue$1[900]
      };
    }
    function getDefaultSuccess(mode = "light") {
      if (mode === "dark") {
        return {
          main: green$1[400],
          light: green$1[300],
          dark: green$1[700]
        };
      }
      return {
        main: green$1[800],
        light: green$1[500],
        dark: green$1[900]
      };
    }
    function getDefaultWarning(mode = "light") {
      if (mode === "dark") {
        return {
          main: orange$1[400],
          light: orange$1[300],
          dark: orange$1[700]
        };
      }
      return {
        main: "#ed6c02",
        // closest to orange[800] that pass 3:1.
        light: orange$1[500],
        dark: orange$1[900]
      };
    }
    function createPalette(palette) {
      const {
        mode = "light",
        contrastThreshold = 3,
        tonalOffset = 0.2
      } = palette, other = _objectWithoutPropertiesLoose(palette, _excluded$4);
      const primary = palette.primary || getDefaultPrimary(mode);
      const secondary = palette.secondary || getDefaultSecondary(mode);
      const error = palette.error || getDefaultError(mode);
      const info = palette.info || getDefaultInfo(mode);
      const success = palette.success || getDefaultSuccess(mode);
      const warning2 = palette.warning || getDefaultWarning(mode);
      function getContrastText(background) {
        const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
        return contrastText;
      }
      const augmentColor = ({
        color: color2,
        name: name2,
        mainShade = 500,
        lightShade = 300,
        darkShade = 700
      }) => {
        color2 = _extends$1({}, color2);
        if (!color2.main && color2[mainShade]) {
          color2.main = color2[mainShade];
        }
        if (!color2.hasOwnProperty("main")) {
          throw new Error(formatMuiErrorMessage(11, name2 ? ` (${name2})` : "", mainShade));
        }
        if (typeof color2.main !== "string") {
          throw new Error(formatMuiErrorMessage(12, name2 ? ` (${name2})` : "", JSON.stringify(color2.main)));
        }
        addLightOrDark(color2, "light", lightShade, tonalOffset);
        addLightOrDark(color2, "dark", darkShade, tonalOffset);
        if (!color2.contrastText) {
          color2.contrastText = getContrastText(color2.main);
        }
        return color2;
      };
      const modes = {
        dark,
        light
      };
      const paletteOutput = deepmerge(_extends$1({
        // A collection of common colors.
        common: _extends$1({}, common$1),
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor({
          color: primary,
          name: "primary"
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor({
          color: secondary,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700"
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor({
          color: error,
          name: "error"
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor({
          color: warning2,
          name: "warning"
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor({
          color: info,
          name: "info"
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor({
          color: success,
          name: "success"
        }),
        // The grey colors.
        grey: grey$1,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText,
        // Generate a rich color object.
        augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset
      }, modes[mode]), other);
      return paletteOutput;
    }
    const _excluded$3 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
    function round(value) {
      return Math.round(value * 1e5) / 1e5;
    }
    const caseAllCaps = {
      textTransform: "uppercase"
    };
    const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    function createTypography(palette, typography) {
      const _ref = typeof typography === "function" ? typography(palette) : typography, {
        fontFamily = defaultFontFamily,
        // The default font size of the Material Specification.
        fontSize = 14,
        // px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        // Tell MUI what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,
        // Apply the CSS properties to all the variants.
        allVariants,
        pxToRem: pxToRem2
      } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$3);
      const coef = fontSize / 14;
      const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
      const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
        fontFamily,
        fontWeight,
        fontSize: pxToRem(size),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight
      }, fontFamily === defaultFontFamily ? {
        letterSpacing: `${round(letterSpacing / size)}em`
      } : {}, casing, allVariants);
      const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
        // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit"
        }
      };
      return deepmerge(_extends$1({
        htmlFontSize,
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold
      }, variants), other, {
        clone: false
        // No need to clone deep
      });
    }
    const shadowKeyUmbraOpacity = 0.2;
    const shadowKeyPenumbraOpacity = 0.14;
    const shadowAmbientShadowOpacity = 0.12;
    function createShadow(...px2) {
      return [`${px2[0]}px ${px2[1]}px ${px2[2]}px ${px2[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px2[4]}px ${px2[5]}px ${px2[6]}px ${px2[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px2[8]}px ${px2[9]}px ${px2[10]}px ${px2[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
    }
    const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
    const shadows$1 = shadows;
    const _excluded$2 = ["duration", "easing", "delay"];
    const easing = {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    };
    const duration = {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    };
    function formatMs(milliseconds) {
      return `${Math.round(milliseconds)}ms`;
    }
    function getAutoHeightDuration(height2) {
      if (!height2) {
        return 0;
      }
      const constant = height2 / 36;
      return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
    }
    function createTransitions(inputTransitions) {
      const mergedEasing = _extends$1({}, easing, inputTransitions.easing);
      const mergedDuration = _extends$1({}, duration, inputTransitions.duration);
      const create2 = (props = ["all"], options = {}) => {
        const {
          duration: durationOption = mergedDuration.standard,
          easing: easingOption = mergedEasing.easeInOut,
          delay = 0
        } = options;
        _objectWithoutPropertiesLoose(options, _excluded$2);
        return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
      };
      return _extends$1({
        getAutoHeightDuration,
        create: create2
      }, inputTransitions, {
        easing: mergedEasing,
        duration: mergedDuration
      });
    }
    const zIndex = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    };
    const zIndex$1 = zIndex;
    const _excluded$1 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
    function createTheme(options = {}, ...args) {
      const {
        mixins: mixinsInput = {},
        palette: paletteInput = {},
        transitions: transitionsInput = {},
        typography: typographyInput = {}
      } = options, other = _objectWithoutPropertiesLoose(options, _excluded$1);
      if (options.vars) {
        throw new Error(formatMuiErrorMessage(18));
      }
      const palette = createPalette(paletteInput);
      const systemTheme = createTheme$1(options);
      let muiTheme = deepmerge(systemTheme, {
        mixins: createMixins(systemTheme.breakpoints, mixinsInput),
        palette,
        // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
        shadows: shadows$1.slice(),
        typography: createTypography(palette, typographyInput),
        transitions: createTransitions(transitionsInput),
        zIndex: _extends$1({}, zIndex$1)
      });
      muiTheme = deepmerge(muiTheme, other);
      muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
      muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
      muiTheme.unstable_sx = function sx(props) {
        return styleFunctionSx$1({
          sx: props,
          theme: this
        });
      };
      return muiTheme;
    }
    const _excluded = ["theme"];
    function ThemeProvider(_ref) {
      let {
        theme: themeInput
      } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
      const scopedTheme = themeInput[THEME_ID];
      return /* @__PURE__ */ jsx(ThemeProvider$1, _extends$1({}, props, {
        themeId: scopedTheme ? THEME_ID : void 0,
        theme: scopedTheme || themeInput
      }));
    }
    var reactDomExports = {};
    var reactDom = {
      get exports() {
        return reactDomExports;
      },
      set exports(v2) {
        reactDomExports = v2;
      }
    };
    var reactDom_production_min = {};
    var schedulerExports = {};
    var scheduler = {
      get exports() {
        return schedulerExports;
      },
      set exports(v2) {
        schedulerExports = v2;
      }
    };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b2) {
        var c2 = a.length;
        a.push(b2);
        a:
          for (; 0 < c2; ) {
            var d2 = c2 - 1 >>> 1, e2 = a[d2];
            if (0 < g2(e2, b2))
              a[d2] = b2, a[c2] = e2, c2 = d2;
            else
              break a;
          }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length)
          return null;
        var b2 = a[0], c2 = a.pop();
        if (c2 !== b2) {
          a[0] = c2;
          a:
            for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
              var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
              if (0 > g2(C2, c2))
                n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
              else if (n2 < e2 && 0 > g2(x2, c2))
                a[d2] = x2, a[n2] = c2, d2 = n2;
              else
                break a;
            }
        }
        return b2;
      }
      function g2(a, b2) {
        var c2 = a.sortIndex - b2.sortIndex;
        return 0 !== c2 ? c2 : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h2(t2); null !== b2; ) {
          if (null === b2.callback)
            k2(t2);
          else if (b2.startTime <= a)
            k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
          else
            break;
          b2 = h2(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2)
          if (null !== h2(r2))
            A2 = true, I2(J2);
          else {
            var b2 = h2(t2);
            null !== b2 && K2(H2, b2.startTime - a);
          }
      }
      function J2(a, b2) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b2);
          for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b2);
              b2 = exports2.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
              G2(b2);
            } else
              k2(r2);
            v2 = h2(r2);
          }
          if (null !== v2)
            var w2 = true;
          else {
            var m2 = h2(t2);
            null !== m2 && K2(H2, m2.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b2 = true;
          try {
            b2 = O2(true, a);
          } finally {
            b2 ? S2() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S2;
      if ("function" === typeof F2)
        S2 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else
        S2 = function() {
          D2(R2, 0);
        };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b2) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b2);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h2(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c2 = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c2 = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b2, c2) {
        var d2 = exports2.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c2 = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    })(scheduler_production_min);
    (function(module2) {
      {
        module2.exports = scheduler_production_min;
      }
    })(scheduler);
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p(a) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b2) {
      ha(a, b2);
      ha(a + "Capture", b2);
    }
    function ha(a, b2) {
      ea[a] = b2;
      for (a = 0; a < b2.length; a++)
        da.add(b2[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a))
        return true;
      if (ja.call(la, a))
        return false;
      if (ka.test(a))
        return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b2, c2, d2) {
      if (null !== c2 && 0 === c2.type)
        return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (null !== c2)
            return !c2.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b2, c2, d2) {
      if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2))
        return true;
      if (d2)
        return false;
      if (null !== c2)
        switch (c2.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
      return false;
    }
    function v(a, b2, c2, d2, e2, f2, g2) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a;
      this.type = b2;
      this.sanitizeURL = f2;
      this.removeEmptyString = g2;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b2 = a[0];
      z[b2] = new v(b2, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b2 = a.replace(
        ra,
        sa
      );
      z[b2] = new v(b2, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z[b2] = new v(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z[b2] = new v(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b2, c2, d2) {
      var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
      if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
        qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La)
        try {
          throw Error();
        } catch (c2) {
          var b2 = c2.stack.trim().match(/\n( *(at )?)/);
          La = b2 && b2[1] || "";
        }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b2) {
      if (!a || Na)
        return "";
      Na = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b2)
          if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d2 = l2;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d2 = l2;
            }
            a.call(b2.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
            h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--)
            if (e2[g2] !== f2[h2]) {
              if (1 !== g2 || 1 !== h2) {
                do
                  if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                    var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                    a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                    return k2;
                  }
                while (1 <= g2 && 0 <= h2);
              }
              break;
            }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c2;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a)
        return null;
      if ("function" === typeof a)
        return a.displayName || a.name || null;
      if ("string" === typeof a)
        return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a)
        switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
          case Ha:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa(a(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    function Ra(a) {
      var b2 = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b2.displayName || "Context") + ".Consumer";
        case 10:
          return (b2._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b2;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b2);
        case 8:
          return b2 === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b2)
            return b2.displayName || b2.name || null;
          if ("string" === typeof b2)
            return b2;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b2 = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
    }
    function Ua(a) {
      var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
      if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
        var e2 = c2.get, f2 = c2.set;
        Object.defineProperty(a, b2, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a2) {
          d2 = "" + a2;
          f2.call(this, a2);
        } });
        Object.defineProperty(a, b2, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a2) {
          d2 = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b2];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a)
        return false;
      var b2 = a._valueTracker;
      if (!b2)
        return true;
      var c2 = b2.getValue();
      var d2 = "";
      a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d2;
      return a !== c2 ? (b2.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a)
        return null;
      try {
        return a.activeElement || a.body;
      } catch (b2) {
        return a.body;
      }
    }
    function Ya(a, b2) {
      var c2 = b2.checked;
      return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
    }
    function Za(a, b2) {
      var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
      c2 = Sa(null != b2.value ? b2.value : c2);
      a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
    }
    function ab(a, b2) {
      b2 = b2.checked;
      null != b2 && ta(a, "checked", b2, false);
    }
    function bb(a, b2) {
      ab(a, b2);
      var c2 = Sa(b2.value), d2 = b2.type;
      if (null != c2)
        if ("number" === d2) {
          if (0 === c2 && "" === a.value || a.value != c2)
            a.value = "" + c2;
        } else
          a.value !== "" + c2 && (a.value = "" + c2);
      else if ("submit" === d2 || "reset" === d2) {
        a.removeAttribute("value");
        return;
      }
      b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
      null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
    }
    function db(a, b2, c2) {
      if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
        var d2 = b2.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
          return;
        b2 = "" + a._wrapperState.initialValue;
        c2 || b2 === a.value || (a.value = b2);
        a.defaultValue = b2;
      }
      c2 = a.name;
      "" !== c2 && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c2 && (a.name = c2);
    }
    function cb(a, b2, c2) {
      if ("number" !== b2 || Xa(a.ownerDocument) !== a)
        null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
    }
    var eb = Array.isArray;
    function fb(a, b2, c2, d2) {
      a = a.options;
      if (b2) {
        b2 = {};
        for (var e2 = 0; e2 < c2.length; e2++)
          b2["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a.length; c2++)
          e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b2 = null;
        for (e2 = 0; e2 < a.length; e2++) {
          if (a[e2].value === c2) {
            a[e2].selected = true;
            d2 && (a[e2].defaultSelected = true);
            return;
          }
          null !== b2 || a[e2].disabled || (b2 = a[e2]);
        }
        null !== b2 && (b2.selected = true);
      }
    }
    function gb(a, b2) {
      if (null != b2.dangerouslySetInnerHTML)
        throw Error(p(91));
      return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b2) {
      var c2 = b2.value;
      if (null == c2) {
        c2 = b2.children;
        b2 = b2.defaultValue;
        if (null != c2) {
          if (null != b2)
            throw Error(p(92));
          if (eb(c2)) {
            if (1 < c2.length)
              throw Error(p(93));
            c2 = c2[0];
          }
          b2 = c2;
        }
        null == b2 && (b2 = "");
        c2 = b2;
      }
      a._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a, b2) {
      var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
      null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
      null != d2 && (a.defaultValue = "" + d2);
    }
    function jb(a) {
      var b2 = a.textContent;
      b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b2) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b2, c2, d2, e2);
        });
      } : a;
    }(function(a, b2) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
        a.innerHTML = b2;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
        for (b2 = mb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b2.firstChild; )
          a.appendChild(b2.firstChild);
      }
    });
    function ob(a, b2) {
      if (b2) {
        var c2 = a.firstChild;
        if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
          c2.nodeValue = b2;
          return;
        }
      }
      a.textContent = b2;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b2) {
        b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b2] = pb[a];
      });
    });
    function rb(a, b2, c2) {
      return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
    }
    function sb(a, b2) {
      a = a.style;
      for (var c2 in b2)
        if (b2.hasOwnProperty(c2)) {
          var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
          "float" === c2 && (c2 = "cssFloat");
          d2 ? a.setProperty(c2, e2) : a[c2] = e2;
        }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b2) {
      if (b2) {
        if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
          throw Error(p(137, a));
        if (null != b2.dangerouslySetInnerHTML) {
          if (null != b2.children)
            throw Error(p(60));
          if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
            throw Error(p(61));
        }
        if (null != b2.style && "object" !== typeof b2.style)
          throw Error(p(62));
      }
    }
    function vb(a, b2) {
      if (-1 === a.indexOf("-"))
        return "string" === typeof b2.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb)
          throw Error(p(280));
        var b2 = a.stateNode;
        b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b2 = Ab;
        Ab = zb = null;
        Bb(a);
        if (b2)
          for (a = 0; a < b2.length; a++)
            Bb(b2[a]);
      }
    }
    function Gb(a, b2) {
      return a(b2);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b2, c2) {
      if (Ib)
        return a(b2, c2);
      Ib = true;
      try {
        return Gb(a, b2, c2);
      } finally {
        if (Ib = false, null !== zb || null !== Ab)
          Hb(), Fb();
      }
    }
    function Kb(a, b2) {
      var c2 = a.stateNode;
      if (null === c2)
        return null;
      var d2 = Db(c2);
      if (null === d2)
        return null;
      c2 = d2[b2];
      a:
        switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d2;
            break a;
          default:
            a = false;
        }
      if (a)
        return null;
      if (c2 && "function" !== typeof c2)
        throw Error(p(231, b2, typeof c2));
      return c2;
    }
    var Lb = false;
    if (ia)
      try {
        var Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
    function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b2.apply(c2, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else
          throw Error(p(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b2 = a, c2 = a;
      if (a.alternate)
        for (; b2.return; )
          b2 = b2.return;
      else {
        a = b2;
        do
          b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
        while (a);
      }
      return 3 === b2.tag ? c2 : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b2 = a.memoizedState;
        null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
        if (null !== b2)
          return b2.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a)
        throw Error(p(188));
    }
    function Yb(a) {
      var b2 = a.alternate;
      if (!b2) {
        b2 = Vb(a);
        if (null === b2)
          throw Error(p(188));
        return b2 !== a ? null : a;
      }
      for (var c2 = a, d2 = b2; ; ) {
        var e2 = c2.return;
        if (null === e2)
          break;
        var f2 = e2.alternate;
        if (null === f2) {
          d2 = e2.return;
          if (null !== d2) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f2.child) {
          for (f2 = e2.child; f2; ) {
            if (f2 === c2)
              return Xb(e2), a;
            if (f2 === d2)
              return Xb(e2), b2;
            f2 = f2.sibling;
          }
          throw Error(p(188));
        }
        if (c2.return !== d2.return)
          c2 = e2, d2 = f2;
        else {
          for (var g2 = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = e2;
              d2 = f2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e2;
              c2 = f2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f2.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = f2;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f2;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2)
              throw Error(p(189));
          }
        }
        if (c2.alternate !== d2)
          throw Error(p(190));
      }
      if (3 !== c2.tag)
        throw Error(p(188));
      return c2.stateNode.current === c2 ? a : b2;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag)
        return a;
      for (a = a.child; null !== a; ) {
        var b2 = $b(a);
        if (null !== b2)
          return b2;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot)
        try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b2) {
      var c2 = a.pendingLanes;
      if (0 === c2)
        return 0;
      var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
      if (0 !== g2) {
        var h2 = g2 & ~e2;
        0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
      } else
        g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
      if (0 === d2)
        return 0;
      if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
        return b2;
      0 !== (d2 & 4) && (d2 |= c2 & 16);
      b2 = a.entangledLanes;
      if (0 !== b2)
        for (a = a.entanglements, b2 &= d2; 0 < b2; )
          c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
      return d2;
    }
    function vc(a, b2) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b2 + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b2 + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b2) {
      for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
        if (-1 === k2) {
          if (0 === (h2 & c2) || 0 !== (h2 & d2))
            e2[g2] = vc(h2, b2);
        } else
          k2 <= b2 && (a.expiredLanes |= h2);
        f2 &= ~h2;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b2 = [], c2 = 0; 31 > c2; c2++)
        b2.push(a);
      return b2;
    }
    function Ac(a, b2, c2) {
      a.pendingLanes |= b2;
      536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b2 = 31 - oc(b2);
      a[b2] = c2;
    }
    function Bc(a, b2) {
      var c2 = a.pendingLanes & ~b2;
      a.pendingLanes = b2;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b2;
      a.mutableReadLanes &= b2;
      a.entangledLanes &= b2;
      b2 = a.entanglements;
      var d2 = a.eventTimes;
      for (a = a.expirationTimes; 0 < c2; ) {
        var e2 = 31 - oc(c2), f2 = 1 << e2;
        b2[e2] = 0;
        d2[e2] = -1;
        a[e2] = -1;
        c2 &= ~f2;
      }
    }
    function Cc(a, b2) {
      var c2 = a.entangledLanes |= b2;
      for (a = a.entanglements; c2; ) {
        var d2 = 31 - oc(c2), e2 = 1 << d2;
        e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
        c2 &= ~e2;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b2) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b2.pointerId);
      }
    }
    function Tc(a, b2, c2, d2, e2, f2) {
      if (null === a || a.nativeEvent !== f2)
        return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
      a.eventSystemFlags |= d2;
      b2 = a.targetContainers;
      null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
      return a;
    }
    function Uc(a, b2, c2, d2, e2) {
      switch (b2) {
        case "focusin":
          return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
        case "pointerover":
          var f2 = e2.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
      }
      return false;
    }
    function Vc(a) {
      var b2 = Wc(a.target);
      if (null !== b2) {
        var c2 = Vb(b2);
        if (null !== c2) {
          if (b2 = c2.tag, 13 === b2) {
            if (b2 = Wb(c2), null !== b2) {
              a.blockedOn = b2;
              Ic(a.priority, function() {
                Gc(c2);
              });
              return;
            }
          } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn)
        return false;
      for (var b2 = a.targetContainers; 0 < b2.length; ) {
        var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
        if (null === c2) {
          c2 = a.nativeEvent;
          var d2 = new c2.constructor(c2.type, c2);
          wb = d2;
          c2.target.dispatchEvent(d2);
          wb = null;
        } else
          return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
        b2.shift();
      }
      return true;
    }
    function Zc(a, b2, c2) {
      Xc(a) && c2.delete(b2);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b2) {
      a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b2(b3) {
        return ad(b3, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c2 = 1; c2 < Kc.length; c2++) {
          var d2 = Kc[c2];
          d2.blockedOn === a && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b2);
      Pc.forEach(b2);
      for (c2 = 0; c2 < Qc.length; c2++)
        d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
        Vc(c2), null === c2.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function gd(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function fd(a, b2, c2, d2) {
      if (dd) {
        var e2 = Yc(a, b2, c2, d2);
        if (null === e2)
          hd(a, b2, d2, id, c2), Sc(a, d2);
        else if (Uc(e2, a, b2, c2, d2))
          d2.stopPropagation();
        else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e2; ) {
            var f2 = Cb(e2);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b2, c2, d2);
            null === f2 && hd(a, b2, d2, id, c2);
            if (f2 === e2)
              break;
            e2 = f2;
          }
          null !== e2 && d2.stopPropagation();
        } else
          hd(a, b2, d2, null, c2);
      }
    }
    var id = null;
    function Yc(a, b2, c2, d2) {
      id = null;
      a = xb(d2);
      a = Wc(a);
      if (null !== a)
        if (b2 = Vb(a), null === b2)
          a = null;
        else if (c2 = b2.tag, 13 === c2) {
          a = Wb(b2);
          if (null !== a)
            return a;
          a = null;
        } else if (3 === c2) {
          if (b2.stateNode.current.memoizedState.isDehydrated)
            return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else
          b2 !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md)
        return md;
      var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
      for (a = 0; a < c2 && b2[a] === e2[a]; a++)
        ;
      var g2 = c2 - a;
      for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
        ;
      return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a) {
      var b2 = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b2(b3, d2, e2, f2, g2) {
        this._reactName = b3;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f2;
        this.target = g2;
        this.currentTarget = null;
        for (var c2 in a)
          a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b2;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b2 = this.nativeEvent;
      return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b2 = Md[a.key] || a.key;
        if ("Unidentified" !== b2)
          return b2;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b2) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b2.keyCode);
        case "keydown":
          return 229 !== b2.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b2) {
      switch (a) {
        case "compositionend":
          return he(b2);
        case "keypress":
          if (32 !== b2.which)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b2.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b2) {
      if (ie)
        return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
            if (b2.char && 1 < b2.char.length)
              return b2.char;
            if (b2.which)
              return String.fromCharCode(b2.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b2.locale ? null : b2.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
    }
    function ne(a, b2, c2, d2) {
      Eb(d2);
      b2 = oe(b2, "onChange");
      0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
    }
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b2 = ue(a);
      if (Wa(b2))
        return a;
    }
    function ve(a, b2) {
      if ("change" === a)
        return b2;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else
        xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b2 = [];
        ne(b2, qe, a, xb(a));
        Jb(re, b2);
      }
    }
    function Ce(a, b2, c2) {
      "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a)
        return te(qe);
    }
    function Ee(a, b2) {
      if ("click" === a)
        return te(b2);
    }
    function Fe(a, b2) {
      if ("input" === a || "change" === a)
        return te(b2);
    }
    function Ge(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b2) {
      if (He(a, b2))
        return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
        return false;
      var c2 = Object.keys(a), d2 = Object.keys(b2);
      if (c2.length !== d2.length)
        return false;
      for (d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        if (!ja.call(b2, e2) || !He(a[e2], b2[e2]))
          return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Ke(a, b2) {
      var c2 = Je(a);
      a = 0;
      for (var d2; c2; ) {
        if (3 === c2.nodeType) {
          d2 = a + c2.textContent.length;
          if (a <= b2 && d2 >= b2)
            return { node: c2, offset: b2 - a };
          a = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Je(c2);
      }
    }
    function Le(a, b2) {
      return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
        try {
          var c2 = "string" === typeof b2.contentWindow.location.href;
        } catch (d2) {
          c2 = false;
        }
        if (c2)
          a = b2.contentWindow;
        else
          break;
        b2 = Xa(a.document);
      }
      return b2;
    }
    function Ne(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
      if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
        if (null !== d2 && Ne(c2)) {
          if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2)
            c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
          else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
            d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
            !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
            e2 = Ke(c2, f2);
            var g2 = Ke(
              c2,
              d2
            );
            e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
          }
        }
        b2 = [];
        for (a = c2; a = a.parentNode; )
          1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c2.focus && c2.focus();
        for (c2 = 0; c2 < b2.length; c2++)
          a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b2, c2) {
      var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
      Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
    }
    function Ve(a, b2) {
      var c2 = {};
      c2[a.toLowerCase()] = b2.toLowerCase();
      c2["Webkit" + a] = "webkit" + b2;
      c2["Moz" + a] = "moz" + b2;
      return c2;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a])
        return Xe[a];
      if (!We[a])
        return a;
      var b2 = We[a], c2;
      for (c2 in b2)
        if (b2.hasOwnProperty(c2) && c2 in Ye)
          return Xe[a] = b2[c2];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b2) {
      df.set(a, b2);
      fa(b2, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b2, c2) {
      var d2 = a.type || "unknown-event";
      a.currentTarget = c2;
      Ub(d2, b2, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b2) {
      b2 = 0 !== (b2 & 4);
      for (var c2 = 0; c2 < a.length; c2++) {
        var d2 = a[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f2 = void 0;
          if (b2)
            for (var g2 = d2.length - 1; 0 <= g2; g2--) {
              var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
          else
            for (g2 = 0; g2 < d2.length; g2++) {
              h2 = d2[g2];
              k2 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
        }
      }
      if (Qb)
        throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b2) {
      var c2 = b2[of];
      void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
      var d2 = a + "__bubble";
      c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
    }
    function qf(a, b2, c2) {
      var d2 = 0;
      b2 && (d2 |= 4);
      pf(c2, a, d2, b2);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b3) {
          "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
        });
        var b2 = 9 === a.nodeType ? a : a.ownerDocument;
        null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
      }
    }
    function pf(a, b2, c2, d2) {
      switch (jd(b2)) {
        case 1:
          var e2 = ed;
          break;
        case 4:
          e2 = gd;
          break;
        default:
          e2 = fd;
      }
      c2 = e2.bind(null, b2, c2, a);
      e2 = void 0;
      !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
      d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
    }
    function hd(a, b2, c2, d2, e2) {
      var f2 = d2;
      if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
        a:
          for (; ; ) {
            if (null === d2)
              return;
            var g2 = d2.tag;
            if (3 === g2 || 4 === g2) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
                break;
              if (4 === g2)
                for (g2 = d2.return; null !== g2; ) {
                  var k2 = g2.tag;
                  if (3 === k2 || 4 === k2) {
                    if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                      return;
                  }
                  g2 = g2.return;
                }
              for (; null !== h2; ) {
                g2 = Wc(h2);
                if (null === g2)
                  return;
                k2 = g2.tag;
                if (5 === k2 || 6 === k2) {
                  d2 = f2 = g2;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
      Jb(function() {
        var d3 = f2, e3 = xb(c2), g3 = [];
        a: {
          var h3 = df.get(a);
          if (void 0 !== h3) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c2))
                  break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c2.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
            t2 = [];
            for (var w2 = d3, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2)
                break;
              w2 = w2.return;
            }
            0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
          }
        }
        if (0 === (b2 & 7)) {
          a: {
            h3 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
              break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                  n2 = null;
              } else
                k3 = null, n2 = d3;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a)
                  t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h3 : ue(k3);
                u2 = null == n2 ? h3 : ue(n2);
                h3 = new t2(F2, w2 + "leave", k3, c2, e3);
                h3.target = J2;
                h3.relatedTarget = u2;
                F2 = null;
                Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2)
                  b: {
                    t2 = k3;
                    x2 = n2;
                    w2 = 0;
                    for (u2 = t2; u2; u2 = vf(u2))
                      w2++;
                    u2 = 0;
                    for (F2 = x2; F2; F2 = vf(F2))
                      u2++;
                    for (; 0 < w2 - u2; )
                      t2 = vf(t2), w2--;
                    for (; 0 < u2 - w2; )
                      x2 = vf(x2), u2--;
                    for (; w2--; ) {
                      if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                        break b;
                      t2 = vf(t2);
                      x2 = vf(x2);
                    }
                    t2 = null;
                  }
                else
                  t2 = null;
                null !== k3 && wf(g3, h3, k3, t2, false);
                null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h3.type)
              var na = ve;
            else if (me(h3))
              if (we)
                na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
            else
              (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
            if (na && (na = na(a, d3))) {
              ne(g3, na, c2, e3);
              break a;
            }
            xa && xa(a, h3, d3);
            "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue(d3) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable)
                Qe = xa, Re = d3, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g3, c2, e3);
              break;
            case "selectionchange":
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g3, c2, e3);
          }
          var $a;
          if (ae)
            b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
          else
            ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c2) : ke(a, c2))
            d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
        }
        se(g3, b2);
      });
    }
    function tf(a, b2, c2) {
      return { instance: a, listener: b2, currentTarget: c2 };
    }
    function oe(a, b2) {
      for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
        var e2 = a, f2 = e2.stateNode;
        5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
        a = a.return;
      }
      return d2;
    }
    function vf(a) {
      if (null === a)
        return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b2, c2, d2, e2) {
      for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (null !== k2 && k2 === d2)
          break;
        5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
        c2 = c2.return;
      }
      0 !== g2.length && a.push({ event: b2, listeners: g2 });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b2, c2) {
      b2 = zf(b2);
      if (zf(a) !== b2 && c2)
        throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b2) {
      return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b2) {
      var c2 = b2, d2 = 0;
      do {
        var e2 = c2.nextSibling;
        a.removeChild(c2);
        if (e2 && 8 === e2.nodeType)
          if (c2 = e2.data, "/$" === c2) {
            if (0 === d2) {
              a.removeChild(e2);
              bd(b2);
              return;
            }
            d2--;
          } else
            "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
        c2 = e2;
      } while (c2);
      bd(b2);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b2 = a.nodeType;
        if (1 === b2 || 3 === b2)
          break;
        if (8 === b2) {
          b2 = a.data;
          if ("$" === b2 || "$!" === b2 || "$?" === b2)
            break;
          if ("/$" === b2)
            return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("$" === c2 || "$!" === c2 || "$?" === c2) {
            if (0 === b2)
              return a;
            b2--;
          } else
            "/$" === c2 && b2++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b2 = a[Of];
      if (b2)
        return b2;
      for (var c2 = a.parentNode; c2; ) {
        if (b2 = c2[uf] || c2[Of]) {
          c2 = b2.alternate;
          if (null !== b2.child || null !== c2 && null !== c2.child)
            for (a = Mf(a); null !== a; ) {
              if (c2 = a[Of])
                return c2;
              a = Mf(a);
            }
          return b2;
        }
        a = c2;
        c2 = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag)
        return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b2) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b2;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b2) {
      var c2 = a.type.contextTypes;
      if (!c2)
        return Vf;
      var d2 = a.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
        return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f2;
      for (f2 in c2)
        e2[f2] = b2[f2];
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b2, c2) {
      if (H.current !== Vf)
        throw Error(p(168));
      G(H, b2);
      G(Wf, c2);
    }
    function bg(a, b2, c2) {
      var d2 = a.stateNode;
      b2 = b2.childContextTypes;
      if ("function" !== typeof d2.getChildContext)
        return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2)
        if (!(e2 in b2))
          throw Error(p(108, Ra(a) || "Unknown", e2));
      return A({}, c2, d2);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b2, c2) {
      var d2 = a.stateNode;
      if (!d2)
        throw Error(p(169));
      c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c2);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b2 = C;
        try {
          var c2 = eg;
          for (C = 1; a < c2.length; a++) {
            var d2 = c2[a];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e2) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
        } finally {
          C = b2, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b2) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b2;
    }
    function ug(a, b2, c2) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d2 = rg;
      a = sg;
      var e2 = 32 - oc(d2) - 1;
      d2 &= ~(1 << e2);
      c2 += 1;
      var f2 = 32 - oc(b2) + e2;
      if (30 < f2) {
        var g2 = e2 - e2 % 5;
        f2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        e2 -= g2;
        rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
        sg = f2 + a;
      } else
        rg = 1 << f2 | c2 << e2 | d2, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; )
        mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; )
        qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b2) {
      var c2 = Bg(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.stateNode = b2;
      c2.return = a;
      b2 = a.deletions;
      null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
    }
    function Cg(a, b2) {
      switch (a.tag) {
        case 5:
          var c2 = a.type;
          b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
          return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
        case 6:
          return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
        case 13:
          return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b2 = yg;
        if (b2) {
          var c2 = b2;
          if (!Cg(a, b2)) {
            if (Dg(a))
              throw Error(p(418));
            b2 = Lf(c2.nextSibling);
            var d2 = xg;
            b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a))
            throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
        a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg)
        return false;
      if (!I)
        return Fg(a), I = true, false;
      var b2;
      (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
      if (b2 && (b2 = yg)) {
        if (Dg(a))
          throw Hg(), Error(p(418));
        for (; b2; )
          Ag(a, b2), b2 = Lf(b2.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a)
          throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b2 = 0; a; ) {
            if (8 === a.nodeType) {
              var c2 = a.data;
              if ("/$" === c2) {
                if (0 === b2) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b2--;
              } else
                "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else
        yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; )
        a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b2) {
      if (a && a.defaultProps) {
        b2 = A({}, b2);
        a = a.defaultProps;
        for (var c2 in a)
          void 0 === b2[c2] && (b2[c2] = a[c2]);
        return b2;
      }
      return b2;
    }
    var Mg = Uf(null), Ng = null, Og = null, Pg = null;
    function Qg() {
      Pg = Og = Ng = null;
    }
    function Rg(a) {
      var b2 = Mg.current;
      E(Mg);
      a._currentValue = b2;
    }
    function Sg(a, b2, c2) {
      for (; null !== a; ) {
        var d2 = a.alternate;
        (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
        if (a === c2)
          break;
        a = a.return;
      }
    }
    function Tg(a, b2) {
      Ng = a;
      Pg = Og = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
    }
    function Vg(a) {
      var b2 = a._currentValue;
      if (Pg !== a)
        if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
          if (null === Ng)
            throw Error(p(308));
          Og = a;
          Ng.dependencies = { lanes: 0, firstContext: a };
        } else
          Og = Og.next = a;
      return b2;
    }
    var Wg = null;
    function Xg(a) {
      null === Wg ? Wg = [a] : Wg.push(a);
    }
    function Yg(a, b2, c2, d2) {
      var e2 = b2.interleaved;
      null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
      b2.interleaved = c2;
      return Zg(a, d2);
    }
    function Zg(a, b2) {
      a.lanes |= b2;
      var c2 = a.alternate;
      null !== c2 && (c2.lanes |= b2);
      c2 = a;
      for (a = a.return; null !== a; )
        a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
      return 3 === c2.tag ? c2.stateNode : null;
    }
    var $g = false;
    function ah(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function bh(a, b2) {
      a = a.updateQueue;
      b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function ch(a, b2) {
      return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
    }
    function dh(a, b2, c2) {
      var d2 = a.updateQueue;
      if (null === d2)
        return null;
      d2 = d2.shared;
      if (0 !== (K & 2)) {
        var e2 = d2.pending;
        null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
        d2.pending = b2;
        return Zg(a, c2);
      }
      e2 = d2.interleaved;
      null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
      d2.interleaved = b2;
      return Zg(a, c2);
    }
    function eh(a, b2, c2) {
      b2 = b2.updateQueue;
      if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    function fh(a, b2) {
      var c2 = a.updateQueue, d2 = a.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f2 = null;
        c2 = c2.firstBaseUpdate;
        if (null !== c2) {
          do {
            var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
            c2 = c2.next;
          } while (null !== c2);
          null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
        } else
          e2 = f2 = b2;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
        a.updateQueue = c2;
        return;
      }
      a = c2.lastBaseUpdate;
      null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
      c2.lastBaseUpdate = b2;
    }
    function gh(a, b2, c2, d2) {
      var e2 = a.updateQueue;
      $g = false;
      var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (null !== h2) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        null === g2 ? f2 = l2 : g2.next = l2;
        g2 = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e2.baseState;
        g2 = 0;
        m2 = l2 = k2 = null;
        h2 = f2;
        do {
          var r2 = h2.lane, y2 = h2.eventTime;
          if ((d2 & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h2;
              r2 = b2;
              y2 = c2;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2)
                    break a;
                  q2 = A({}, q2, r2);
                  break a;
                case 2:
                  $g = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
          } else
            y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
          h2 = h2.next;
          if (null === h2)
            if (h2 = e2.shared.pending, null === h2)
              break;
            else
              r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = m2;
        b2 = e2.shared.interleaved;
        if (null !== b2) {
          e2 = b2;
          do
            g2 |= e2.lane, e2 = e2.next;
          while (e2 !== b2);
        } else
          null === f2 && (e2.shared.lanes = 0);
        hh |= g2;
        a.lanes = g2;
        a.memoizedState = q2;
      }
    }
    function ih(a, b2, c2) {
      a = b2.effects;
      b2.effects = null;
      if (null !== a)
        for (b2 = 0; b2 < a.length; b2++) {
          var d2 = a[b2], e2 = d2.callback;
          if (null !== e2) {
            d2.callback = null;
            d2 = c2;
            if ("function" !== typeof e2)
              throw Error(p(191, e2));
            e2.call(d2);
          }
        }
    }
    var jh = new aa.Component().refs;
    function kh(a, b2, c2, d2) {
      b2 = a.memoizedState;
      c2 = c2(d2, b2);
      c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
      a.memoizedState = c2;
      0 === a.lanes && (a.updateQueue.baseState = c2);
    }
    var nh = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = dh(a, f2, e2);
      null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
    }, enqueueReplaceState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
      f2.tag = 1;
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = dh(a, f2, e2);
      null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
    }, enqueueForceUpdate: function(a, b2) {
      a = a._reactInternals;
      var c2 = L(), d2 = lh(a), e2 = ch(c2, d2);
      e2.tag = 2;
      void 0 !== b2 && null !== b2 && (e2.callback = b2);
      b2 = dh(a, e2, d2);
      null !== b2 && (mh(b2, a, d2, c2), eh(b2, a, d2));
    } };
    function oh(a, b2, c2, d2, e2, f2, g2) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
    }
    function ph(a, b2, c2) {
      var d2 = false, e2 = Vf;
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
      b2 = new b2(c2, f2);
      a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
      b2.updater = nh;
      a.stateNode = b2;
      b2._reactInternals = a;
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b2;
    }
    function qh(a, b2, c2, d2) {
      a = b2.state;
      "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
      "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
      b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
    }
    function rh(a, b2, c2, d2) {
      var e2 = a.stateNode;
      e2.props = c2;
      e2.state = a.memoizedState;
      e2.refs = jh;
      ah(a);
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
      e2.state = a.memoizedState;
      f2 = b2.getDerivedStateFromProps;
      "function" === typeof f2 && (kh(a, b2, f2, c2), e2.state = a.memoizedState);
      "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c2, e2, d2), e2.state = a.memoizedState);
      "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
    }
    function sh(a, b2, c2) {
      a = c2.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (1 !== c2.tag)
              throw Error(p(309));
            var d2 = c2.stateNode;
          }
          if (!d2)
            throw Error(p(147, a));
          var e2 = d2, f2 = "" + a;
          if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
            return b2.ref;
          b2 = function(a2) {
            var b3 = e2.refs;
            b3 === jh && (b3 = e2.refs = {});
            null === a2 ? delete b3[f2] : b3[f2] = a2;
          };
          b2._stringRef = f2;
          return b2;
        }
        if ("string" !== typeof a)
          throw Error(p(284));
        if (!c2._owner)
          throw Error(p(290, a));
      }
      return a;
    }
    function th(a, b2) {
      a = Object.prototype.toString.call(b2);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
    }
    function uh(a) {
      var b2 = a._init;
      return b2(a._payload);
    }
    function vh(a) {
      function b2(b3, c3) {
        if (a) {
          var d3 = b3.deletions;
          null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
        }
      }
      function c2(c3, d3) {
        if (!a)
          return null;
        for (; null !== d3; )
          b2(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a2, b3) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
          null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
        return a2;
      }
      function e2(a2, b3) {
        a2 = wh(a2, b3);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b3, c3, d3) {
        b3.index = d3;
        if (!a)
          return b3.flags |= 1048576, c3;
        d3 = b3.alternate;
        if (null !== d3)
          return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
        b3.flags |= 2;
        return c3;
      }
      function g2(b3) {
        a && null === b3.alternate && (b3.flags |= 2);
        return b3;
      }
      function h2(a2, b3, c3, d3) {
        if (null === b3 || 6 !== b3.tag)
          return b3 = xh(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function k2(a2, b3, c3, d3) {
        var f3 = c3.type;
        if (f3 === ya)
          return m2(a2, b3, c3.props.children, d3, c3.key);
        if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
          return d3 = e2(b3, c3.props), d3.ref = sh(a2, b3, c3), d3.return = a2, d3;
        d3 = yh(c3.type, c3.key, c3.props, null, a2.mode, d3);
        d3.ref = sh(a2, b3, c3);
        d3.return = a2;
        return d3;
      }
      function l2(a2, b3, c3, d3) {
        if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
          return b3 = zh(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3.children || []);
        b3.return = a2;
        return b3;
      }
      function m2(a2, b3, c3, d3, f3) {
        if (null === b3 || 7 !== b3.tag)
          return b3 = Ah(c3, a2.mode, d3, f3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function q2(a2, b3, c3) {
        if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
          return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
        if ("object" === typeof b3 && null !== b3) {
          switch (b3.$$typeof) {
            case va:
              return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
            case wa:
              return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
            case Ha:
              var d3 = b3._init;
              return q2(a2, d3(b3._payload), c3);
          }
          if (eb(b3) || Ka(b3))
            return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
          th(a2, b3);
        }
        return null;
      }
      function r2(a2, b3, c3, d3) {
        var e3 = null !== b3 ? b3.key : null;
        if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
          return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
        if ("object" === typeof c3 && null !== c3) {
          switch (c3.$$typeof) {
            case va:
              return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
            case wa:
              return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
            case Ha:
              return e3 = c3._init, r2(
                a2,
                b3,
                e3(c3._payload),
                d3
              );
          }
          if (eb(c3) || Ka(c3))
            return null !== e3 ? null : m2(a2, b3, c3, d3, null);
          th(a2, c3);
        }
        return null;
      }
      function y2(a2, b3, c3, d3, e3) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
          return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
            case wa:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
            case Ha:
              var f3 = d3._init;
              return y2(a2, b3, c3, f3(d3._payload), e3);
          }
          if (eb(d3) || Ka(d3))
            return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
          th(b3, d3);
        }
        return null;
      }
      function n2(e3, g3, h3, k3) {
        for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e3, u2, h3[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b2(e3, u2);
          g3 = f2(n3, g3, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h3.length)
          return c2(e3, u2), I && tg(e3, w2), l3;
        if (null === u2) {
          for (; w2 < h3.length; w2++)
            u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I && tg(e3, w2);
          return l3;
        }
        for (u2 = d2(e3, u2); w2 < h3.length; w2++)
          x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function(a2) {
          return b2(e3, a2);
        });
        I && tg(e3, w2);
        return l3;
      }
      function t2(e3, g3, h3, k3) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3)
          throw Error(p(150));
        h3 = l3.call(h3);
        if (null == h3)
          throw Error(p(151));
        for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e3, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b2(e3, m3);
          g3 = f2(t3, g3, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done)
          return c2(
            e3,
            m3
          ), I && tg(e3, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h3.next())
            n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I && tg(e3, w2);
          return l3;
        }
        for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
          n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function(a2) {
          return b2(e3, a2);
        });
        I && tg(e3, w2);
        return l3;
      }
      function J2(a2, d3, f3, h3) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c2(a2, l3.sibling);
                        d3 = e2(l3, f3.props.children);
                        d3.return = a2;
                        a2 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                      c2(a2, l3.sibling);
                      d3 = e2(l3, f3.props);
                      d3.ref = sh(a2, l3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    c2(a2, l3);
                    break;
                  } else
                    b2(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d3 = Ah(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d3, f3), h3.return = a2, a2 = h3);
              }
              return g2(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d3; ) {
                  if (d3.key === l3)
                    if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                      c2(a2, d3.sibling);
                      d3 = e2(d3, f3.children || []);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    } else {
                      c2(a2, d3);
                      break;
                    }
                  else
                    b2(a2, d3);
                  d3 = d3.sibling;
                }
                d3 = zh(f3, a2.mode, h3);
                d3.return = a2;
                a2 = d3;
              }
              return g2(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
          }
          if (eb(f3))
            return n2(a2, d3, f3, h3);
          if (Ka(f3))
            return t2(a2, d3, f3, h3);
          th(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = xh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
      }
      return J2;
    }
    var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
    function Hh(a) {
      if (a === Dh)
        throw Error(p(174));
      return a;
    }
    function Ih(a, b2) {
      G(Gh, b2);
      G(Fh, a);
      G(Eh, Dh);
      a = b2.nodeType;
      switch (a) {
        case 9:
        case 11:
          b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
      }
      E(Eh);
      G(Eh, b2);
    }
    function Jh() {
      E(Eh);
      E(Fh);
      E(Gh);
    }
    function Kh(a) {
      Hh(Gh.current);
      var b2 = Hh(Eh.current);
      var c2 = lb(b2, a.type);
      b2 !== c2 && (G(Fh, a), G(Eh, c2));
    }
    function Lh(a) {
      Fh.current === a && (E(Eh), E(Fh));
    }
    var M = Uf(0);
    function Mh(a) {
      for (var b2 = a; null !== b2; ) {
        if (13 === b2.tag) {
          var c2 = b2.memoizedState;
          if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
            return b2;
        } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
          if (0 !== (b2.flags & 128))
            return b2;
        } else if (null !== b2.child) {
          b2.child.return = b2;
          b2 = b2.child;
          continue;
        }
        if (b2 === a)
          break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a)
            return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
      return null;
    }
    var Nh = [];
    function Oh() {
      for (var a = 0; a < Nh.length; a++)
        Nh[a]._workInProgressVersionPrimary = null;
      Nh.length = 0;
    }
    var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
    function Q() {
      throw Error(p(321));
    }
    function Wh(a, b2) {
      if (null === b2)
        return false;
      for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
        if (!He(a[c2], b2[c2]))
          return false;
      return true;
    }
    function Xh(a, b2, c2, d2, e2, f2) {
      Rh = f2;
      N = b2;
      b2.memoizedState = null;
      b2.updateQueue = null;
      b2.lanes = 0;
      Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
      a = c2(d2, e2);
      if (Th) {
        f2 = 0;
        do {
          Th = false;
          Uh = 0;
          if (25 <= f2)
            throw Error(p(301));
          f2 += 1;
          P = O = null;
          b2.updateQueue = null;
          Ph.current = $h;
          a = c2(d2, e2);
        } while (Th);
      }
      Ph.current = ai;
      b2 = null !== O && null !== O.next;
      Rh = 0;
      P = O = N = null;
      Sh = false;
      if (b2)
        throw Error(p(300));
      return a;
    }
    function bi() {
      var a = 0 !== Uh;
      Uh = 0;
      return a;
    }
    function ci() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === P ? N.memoizedState = P = a : P = P.next = a;
      return P;
    }
    function di() {
      if (null === O) {
        var a = N.alternate;
        a = null !== a ? a.memoizedState : null;
      } else
        a = O.next;
      var b2 = null === P ? N.memoizedState : P.next;
      if (null !== b2)
        P = b2, O = a;
      else {
        if (null === a)
          throw Error(p(310));
        O = a;
        a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
        null === P ? N.memoizedState = P = a : P = P.next = a;
      }
      return P;
    }
    function ei(a, b2) {
      return "function" === typeof b2 ? b2(a) : b2;
    }
    function fi(a) {
      var b2 = di(), c2 = b2.queue;
      if (null === c2)
        throw Error(p(311));
      c2.lastRenderedReducer = a;
      var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
      if (null !== f2) {
        if (null !== e2) {
          var g2 = e2.next;
          e2.next = f2.next;
          f2.next = g2;
        }
        d2.baseQueue = e2 = f2;
        c2.pending = null;
      }
      if (null !== e2) {
        f2 = e2.next;
        d2 = d2.baseState;
        var h2 = g2 = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Rh & m2) === m2)
            null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
            N.lanes |= m2;
            hh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g2 = d2 : k2.next = h2;
        He(d2, b2.memoizedState) || (Ug = true);
        b2.memoizedState = d2;
        b2.baseState = g2;
        b2.baseQueue = k2;
        c2.lastRenderedState = d2;
      }
      a = c2.interleaved;
      if (null !== a) {
        e2 = a;
        do
          f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
        while (e2 !== a);
      } else
        null === e2 && (c2.lanes = 0);
      return [b2.memoizedState, c2.dispatch];
    }
    function gi(a) {
      var b2 = di(), c2 = b2.queue;
      if (null === c2)
        throw Error(p(311));
      c2.lastRenderedReducer = a;
      var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
      if (null !== e2) {
        c2.pending = null;
        var g2 = e2 = e2.next;
        do
          f2 = a(f2, g2.action), g2 = g2.next;
        while (g2 !== e2);
        He(f2, b2.memoizedState) || (Ug = true);
        b2.memoizedState = f2;
        null === b2.baseQueue && (b2.baseState = f2);
        c2.lastRenderedState = f2;
      }
      return [f2, d2];
    }
    function hi() {
    }
    function ii(a, b2) {
      var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
      f2 && (d2.memoizedState = e2, Ug = true);
      d2 = d2.queue;
      ji(ki.bind(null, c2, d2, a), [a]);
      if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
        c2.flags |= 2048;
        li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
        if (null === R)
          throw Error(p(349));
        0 !== (Rh & 30) || ni(c2, b2, e2);
      }
      return e2;
    }
    function ni(a, b2, c2) {
      a.flags |= 16384;
      a = { getSnapshot: b2, value: c2 };
      b2 = N.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
    }
    function mi(a, b2, c2, d2) {
      b2.value = c2;
      b2.getSnapshot = d2;
      oi(b2) && pi(a);
    }
    function ki(a, b2, c2) {
      return c2(function() {
        oi(b2) && pi(a);
      });
    }
    function oi(a) {
      var b2 = a.getSnapshot;
      a = a.value;
      try {
        var c2 = b2();
        return !He(a, c2);
      } catch (d2) {
        return true;
      }
    }
    function pi(a) {
      var b2 = Zg(a, 1);
      null !== b2 && mh(b2, a, 1, -1);
    }
    function qi(a) {
      var b2 = ci();
      "function" === typeof a && (a = a());
      b2.memoizedState = b2.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
      b2.queue = a;
      a = a.dispatch = ri.bind(null, N, a);
      return [b2.memoizedState, a];
    }
    function li(a, b2, c2, d2) {
      a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
      b2 = N.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
      return a;
    }
    function si() {
      return di().memoizedState;
    }
    function ti(a, b2, c2, d2) {
      var e2 = ci();
      N.flags |= a;
      e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
    }
    function ui(a, b2, c2, d2) {
      var e2 = di();
      d2 = void 0 === d2 ? null : d2;
      var f2 = void 0;
      if (null !== O) {
        var g2 = O.memoizedState;
        f2 = g2.destroy;
        if (null !== d2 && Wh(d2, g2.deps)) {
          e2.memoizedState = li(b2, c2, f2, d2);
          return;
        }
      }
      N.flags |= a;
      e2.memoizedState = li(1 | b2, c2, f2, d2);
    }
    function vi(a, b2) {
      return ti(8390656, 8, a, b2);
    }
    function ji(a, b2) {
      return ui(2048, 8, a, b2);
    }
    function wi(a, b2) {
      return ui(4, 2, a, b2);
    }
    function xi(a, b2) {
      return ui(4, 4, a, b2);
    }
    function yi(a, b2) {
      if ("function" === typeof b2)
        return a = a(), b2(a), function() {
          b2(null);
        };
      if (null !== b2 && void 0 !== b2)
        return a = a(), b2.current = a, function() {
          b2.current = null;
        };
    }
    function zi(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return ui(4, 4, yi.bind(null, b2, a), c2);
    }
    function Ai() {
    }
    function Bi(a, b2) {
      var c2 = di();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
        return d2[0];
      c2.memoizedState = [a, b2];
      return a;
    }
    function Ci(a, b2) {
      var c2 = di();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
        return d2[0];
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }
    function Di(a, b2, c2) {
      if (0 === (Rh & 21))
        return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
      He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a.baseState = true);
      return b2;
    }
    function Ei(a, b2) {
      var c2 = C;
      C = 0 !== c2 && 4 > c2 ? c2 : 4;
      a(true);
      var d2 = Qh.transition;
      Qh.transition = {};
      try {
        a(false), b2();
      } finally {
        C = c2, Qh.transition = d2;
      }
    }
    function Fi() {
      return di().memoizedState;
    }
    function Gi(a, b2, c2) {
      var d2 = lh(a);
      c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a))
        Ii(b2, c2);
      else if (c2 = Yg(a, b2, c2, d2), null !== c2) {
        var e2 = L();
        mh(c2, a, d2, e2);
        Ji(c2, b2, d2);
      }
    }
    function ri(a, b2, c2) {
      var d2 = lh(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a))
        Ii(b2, e2);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
          try {
            var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He(h2, g2)) {
              var k2 = b2.interleaved;
              null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
        c2 = Yg(a, b2, e2, d2);
        null !== c2 && (e2 = L(), mh(c2, a, d2, e2), Ji(c2, b2, d2));
      }
    }
    function Hi(a) {
      var b2 = a.alternate;
      return a === N || null !== b2 && b2 === N;
    }
    function Ii(a, b2) {
      Th = Sh = true;
      var c2 = a.pending;
      null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
      a.pending = b2;
    }
    function Ji(a, b2, c2) {
      if (0 !== (c2 & 4194240)) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
      ci().memoizedState = [a, void 0 === b2 ? null : b2];
      return a;
    }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return ti(
        4194308,
        4,
        yi.bind(null, b2, a),
        c2
      );
    }, useLayoutEffect: function(a, b2) {
      return ti(4194308, 4, a, b2);
    }, useInsertionEffect: function(a, b2) {
      return ti(4, 2, a, b2);
    }, useMemo: function(a, b2) {
      var c2 = ci();
      b2 = void 0 === b2 ? null : b2;
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }, useReducer: function(a, b2, c2) {
      var d2 = ci();
      b2 = void 0 !== c2 ? c2(b2) : b2;
      d2.memoizedState = d2.baseState = b2;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
      d2.queue = a;
      a = a.dispatch = Gi.bind(null, N, a);
      return [d2.memoizedState, a];
    }, useRef: function(a) {
      var b2 = ci();
      a = { current: a };
      return b2.memoizedState = a;
    }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
      return ci().memoizedState = a;
    }, useTransition: function() {
      var a = qi(false), b2 = a[0];
      a = Ei.bind(null, a[1]);
      ci().memoizedState = a;
      return [b2, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b2, c2) {
      var d2 = N, e2 = ci();
      if (I) {
        if (void 0 === c2)
          throw Error(p(407));
        c2 = c2();
      } else {
        c2 = b2();
        if (null === R)
          throw Error(p(349));
        0 !== (Rh & 30) || ni(d2, b2, c2);
      }
      e2.memoizedState = c2;
      var f2 = { value: c2, getSnapshot: b2 };
      e2.queue = f2;
      vi(ki.bind(
        null,
        d2,
        f2,
        a
      ), [a]);
      d2.flags |= 2048;
      li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
      return c2;
    }, useId: function() {
      var a = ci(), b2 = R.identifierPrefix;
      if (I) {
        var c2 = sg;
        var d2 = rg;
        c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
        b2 = ":" + b2 + "R" + c2;
        c2 = Uh++;
        0 < c2 && (b2 += "H" + c2.toString(32));
        b2 += ":";
      } else
        c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
      return a.memoizedState = b2;
    }, unstable_isNewReconciler: false }, Zh = {
      readContext: Vg,
      useCallback: Bi,
      useContext: Vg,
      useEffect: ji,
      useImperativeHandle: zi,
      useInsertionEffect: wi,
      useLayoutEffect: xi,
      useMemo: Ci,
      useReducer: fi,
      useRef: si,
      useState: function() {
        return fi(ei);
      },
      useDebugValue: Ai,
      useDeferredValue: function(a) {
        var b2 = di();
        return Di(b2, O.memoizedState, a);
      },
      useTransition: function() {
        var a = fi(ei)[0], b2 = di().memoizedState;
        return [a, b2];
      },
      useMutableSource: hi,
      useSyncExternalStore: ii,
      useId: Fi,
      unstable_isNewReconciler: false
    }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
      return gi(ei);
    }, useDebugValue: Ai, useDeferredValue: function(a) {
      var b2 = di();
      return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
    }, useTransition: function() {
      var a = gi(ei)[0], b2 = di().memoizedState;
      return [a, b2];
    }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
    function Ki(a, b2) {
      try {
        var c2 = "", d2 = b2;
        do
          c2 += Pa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f2) {
        e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b2, stack: e2, digest: null };
    }
    function Li(a, b2, c2) {
      return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
    }
    function Mi(a, b2) {
      try {
        console.error(b2.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Ni = "function" === typeof WeakMap ? WeakMap : Map;
    function Oi(a, b2, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b2.value;
      c2.callback = function() {
        Pi || (Pi = true, Qi = d2);
        Mi(a, b2);
      };
      return c2;
    }
    function Ri(a, b2, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      var d2 = a.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e2 = b2.value;
        c2.payload = function() {
          return d2(e2);
        };
        c2.callback = function() {
          Mi(a, b2);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
        Mi(a, b2);
        "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
        var c3 = b2.stack;
        this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
      });
      return c2;
    }
    function Ti(a, b2, c2) {
      var d2 = a.pingCache;
      if (null === d2) {
        d2 = a.pingCache = new Ni();
        var e2 = /* @__PURE__ */ new Set();
        d2.set(b2, e2);
      } else
        e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
      e2.has(c2) || (e2.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
    }
    function Vi(a) {
      do {
        var b2;
        if (b2 = 13 === a.tag)
          b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
        if (b2)
          return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Wi(a, b2, c2, d2, e2) {
      if (0 === (a.mode & 1))
        return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e2;
      return a;
    }
    var Xi = ua.ReactCurrentOwner, Ug = false;
    function Yi(a, b2, c2, d2) {
      b2.child = null === a ? Ch(b2, null, c2, d2) : Bh(b2, a.child, c2, d2);
    }
    function Zi(a, b2, c2, d2, e2) {
      c2 = c2.render;
      var f2 = b2.ref;
      Tg(b2, e2);
      d2 = Xh(a, b2, c2, d2, f2, e2);
      c2 = bi();
      if (null !== a && !Ug)
        return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
      I && c2 && vg(b2);
      b2.flags |= 1;
      Yi(a, b2, d2, e2);
      return b2.child;
    }
    function aj(a, b2, c2, d2, e2) {
      if (null === a) {
        var f2 = c2.type;
        if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
          return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d2, e2);
        a = yh(c2.type, null, d2, b2, b2.mode, e2);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e2)) {
        var g2 = f2.memoizedProps;
        c2 = c2.compare;
        c2 = null !== c2 ? c2 : Ie;
        if (c2(g2, d2) && a.ref === b2.ref)
          return $i(a, b2, e2);
      }
      b2.flags |= 1;
      a = wh(f2, d2);
      a.ref = b2.ref;
      a.return = b2;
      return b2.child = a;
    }
    function cj(a, b2, c2, d2, e2) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie(f2, d2) && a.ref === b2.ref)
          if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2))
            0 !== (a.flags & 131072) && (Ug = true);
          else
            return b2.lanes = a.lanes, $i(a, b2, e2);
      }
      return dj(a, b2, c2, d2, e2);
    }
    function ej(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d2.mode)
        if (0 === (b2.mode & 1))
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
        else {
          if (0 === (c2 & 1073741824))
            return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d2 = null !== f2 ? f2.baseLanes : c2;
          G(fj, gj);
          gj |= d2;
        }
      else
        null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
      Yi(a, b2, e2, c2);
      return b2.child;
    }
    function hj(a, b2) {
      var c2 = b2.ref;
      if (null === a && null !== c2 || null !== a && a.ref !== c2)
        b2.flags |= 512, b2.flags |= 2097152;
    }
    function dj(a, b2, c2, d2, e2) {
      var f2 = Zf(c2) ? Xf : H.current;
      f2 = Yf(b2, f2);
      Tg(b2, e2);
      c2 = Xh(a, b2, c2, d2, f2, e2);
      d2 = bi();
      if (null !== a && !Ug)
        return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
      I && d2 && vg(b2);
      b2.flags |= 1;
      Yi(a, b2, c2, e2);
      return b2.child;
    }
    function ij(a, b2, c2, d2, e2) {
      if (Zf(c2)) {
        var f2 = true;
        cg(b2);
      } else
        f2 = false;
      Tg(b2, e2);
      if (null === b2.stateNode)
        jj(a, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
      else if (null === a) {
        var g2 = b2.stateNode, h2 = b2.memoizedProps;
        g2.props = h2;
        var k2 = g2.context, l2 = c2.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
        var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
        $g = false;
        var r2 = b2.memoizedState;
        g2.state = r2;
        gh(b2, d2, g2, e2);
        k2 = b2.memoizedState;
        h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
      } else {
        g2 = b2.stateNode;
        bh(a, b2);
        h2 = b2.memoizedProps;
        l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
        g2.props = l2;
        q2 = b2.pendingProps;
        r2 = g2.context;
        k2 = c2.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
        var y2 = c2.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
        $g = false;
        r2 = b2.memoizedState;
        g2.state = r2;
        gh(b2, d2, g2, e2);
        var n2 = b2.memoizedState;
        h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
      }
      return kj(a, b2, c2, d2, f2, e2);
    }
    function kj(a, b2, c2, d2, e2, f2) {
      hj(a, b2);
      var g2 = 0 !== (b2.flags & 128);
      if (!d2 && !g2)
        return e2 && dg(b2, c2, false), $i(a, b2, f2);
      d2 = b2.stateNode;
      Xi.current = b2;
      var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
      b2.flags |= 1;
      null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
      b2.memoizedState = d2.state;
      e2 && dg(b2, c2, true);
      return b2.child;
    }
    function lj(a) {
      var b2 = a.stateNode;
      b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
      Ih(a, b2.containerInfo);
    }
    function mj(a, b2, c2, d2, e2) {
      Ig();
      Jg(e2);
      b2.flags |= 256;
      Yi(a, b2, c2, d2);
      return b2.child;
    }
    var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function oj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function pj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
      (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
      if (h2)
        f2 = true, b2.flags &= -129;
      else if (null === a || null !== a.memoizedState)
        e2 |= 1;
      G(M, e2 & 1);
      if (null === a) {
        Eg(b2);
        a = b2.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a))
          return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
        g2 = d2.children;
        a = d2.fallback;
        return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a = Ah(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
      }
      e2 = a.memoizedState;
      if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
        return sj(a, b2, g2, d2, h2, e2, c2);
      if (f2) {
        f2 = d2.fallback;
        g2 = b2.mode;
        e2 = a.child;
        h2 = e2.sibling;
        var k2 = { mode: "hidden", children: d2.children };
        0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
        null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
        f2.return = b2;
        d2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        d2 = f2;
        f2 = b2.child;
        g2 = a.child.memoizedState;
        g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
        f2.memoizedState = g2;
        f2.childLanes = a.childLanes & ~c2;
        b2.memoizedState = nj;
        return d2;
      }
      f2 = a.child;
      a = f2.sibling;
      d2 = wh(f2, { mode: "visible", children: d2.children });
      0 === (b2.mode & 1) && (d2.lanes = c2);
      d2.return = b2;
      d2.sibling = null;
      null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
      b2.child = d2;
      b2.memoizedState = null;
      return d2;
    }
    function rj(a, b2) {
      b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
      b2.return = a;
      return a.child = b2;
    }
    function tj(a, b2, c2, d2) {
      null !== d2 && Jg(d2);
      Bh(b2, a.child, null, c2);
      a = rj(b2, b2.pendingProps.children);
      a.flags |= 2;
      b2.memoizedState = null;
      return a;
    }
    function sj(a, b2, c2, d2, e2, f2, g2) {
      if (c2) {
        if (b2.flags & 256)
          return b2.flags &= -257, d2 = Li(Error(p(422))), tj(a, b2, g2, d2);
        if (null !== b2.memoizedState)
          return b2.child = a.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = Ah(f2, e2, g2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
        b2.child.memoizedState = oj(g2);
        b2.memoizedState = nj;
        return f2;
      }
      if (0 === (b2.mode & 1))
        return tj(a, b2, g2, null);
      if ("$!" === e2.data) {
        d2 = e2.nextSibling && e2.nextSibling.dataset;
        if (d2)
          var h2 = d2.dgst;
        d2 = h2;
        f2 = Error(p(419));
        d2 = Li(f2, d2, void 0);
        return tj(a, b2, g2, d2);
      }
      h2 = 0 !== (g2 & a.childLanes);
      if (Ug || h2) {
        d2 = R;
        if (null !== d2) {
          switch (g2 & -g2) {
            case 4:
              e2 = 2;
              break;
            case 16:
              e2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e2 = 32;
              break;
            case 536870912:
              e2 = 268435456;
              break;
            default:
              e2 = 0;
          }
          e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
          0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d2, a, e2, -1));
        }
        uj();
        d2 = Li(Error(p(421)));
        return tj(a, b2, g2, d2);
      }
      if ("$?" === e2.data)
        return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e2._reactRetry = b2, null;
      a = f2.treeContext;
      yg = Lf(e2.nextSibling);
      xg = b2;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
      b2 = rj(b2, d2.children);
      b2.flags |= 4096;
      return b2;
    }
    function wj(a, b2, c2) {
      a.lanes |= b2;
      var d2 = a.alternate;
      null !== d2 && (d2.lanes |= b2);
      Sg(a.return, b2, c2);
    }
    function xj(a, b2, c2, d2, e2) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
    }
    function yj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
      Yi(a, b2, d2.children, c2);
      d2 = M.current;
      if (0 !== (d2 & 2))
        d2 = d2 & 1 | 2, b2.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128))
          a:
            for (a = b2.child; null !== a; ) {
              if (13 === a.tag)
                null !== a.memoizedState && wj(a, c2, b2);
              else if (19 === a.tag)
                wj(a, c2, b2);
              else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b2)
                break a;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === b2)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d2 &= 1;
      }
      G(M, d2);
      if (0 === (b2.mode & 1))
        b2.memoizedState = null;
      else
        switch (e2) {
          case "forwards":
            c2 = b2.child;
            for (e2 = null; null !== c2; )
              a = c2.alternate, null !== a && null === Mh(a) && (e2 = c2), c2 = c2.sibling;
            c2 = e2;
            null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
            xj(b2, false, e2, c2, f2);
            break;
          case "backwards":
            c2 = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Mh(a)) {
                b2.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c2;
              c2 = e2;
              e2 = a;
            }
            xj(b2, true, c2, null, f2);
            break;
          case "together":
            xj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
      return b2.child;
    }
    function jj(a, b2) {
      0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
    }
    function $i(a, b2, c2) {
      null !== a && (b2.dependencies = a.dependencies);
      hh |= b2.lanes;
      if (0 === (c2 & b2.childLanes))
        return null;
      if (null !== a && b2.child !== a.child)
        throw Error(p(153));
      if (null !== b2.child) {
        a = b2.child;
        c2 = wh(a, a.pendingProps);
        b2.child = c2;
        for (c2.return = b2; null !== a.sibling; )
          a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
        c2.sibling = null;
      }
      return b2.child;
    }
    function zj(a, b2, c2) {
      switch (b2.tag) {
        case 3:
          lj(b2);
          Ig();
          break;
        case 5:
          Kh(b2);
          break;
        case 1:
          Zf(b2.type) && cg(b2);
          break;
        case 4:
          Ih(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b2.type._context, e2 = b2.memoizedProps.value;
          G(Mg, d2._currentValue);
          d2._currentValue = e2;
          break;
        case 13:
          d2 = b2.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated)
              return G(M, M.current & 1), b2.flags |= 128, null;
            if (0 !== (c2 & b2.child.childLanes))
              return pj(a, b2, c2);
            G(M, M.current & 1);
            a = $i(a, b2, c2);
            return null !== a ? a.sibling : null;
          }
          G(M, M.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d2)
              return yj(a, b2, c2);
            b2.flags |= 128;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          G(M, M.current);
          if (d2)
            break;
          else
            return null;
        case 22:
        case 23:
          return b2.lanes = 0, ej(a, b2, c2);
      }
      return $i(a, b2, c2);
    }
    var Aj, Bj, Cj, Dj;
    Aj = function(a, b2) {
      for (var c2 = b2.child; null !== c2; ) {
        if (5 === c2.tag || 6 === c2.tag)
          a.appendChild(c2.stateNode);
        else if (4 !== c2.tag && null !== c2.child) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2)
          break;
        for (; null === c2.sibling; ) {
          if (null === c2.return || c2.return === b2)
            return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Bj = function() {
    };
    Cj = function(a, b2, c2, d2) {
      var e2 = a.memoizedProps;
      if (e2 !== d2) {
        a = b2.stateNode;
        Hh(Eh.current);
        var f2 = null;
        switch (c2) {
          case "input":
            e2 = Ya(a, e2);
            d2 = Ya(a, d2);
            f2 = [];
            break;
          case "select":
            e2 = A({}, e2, { value: void 0 });
            d2 = A({}, d2, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e2 = gb(a, e2);
            d2 = gb(a, d2);
            f2 = [];
            break;
          default:
            "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
        }
        ub(c2, d2);
        var g2;
        c2 = null;
        for (l2 in e2)
          if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
            if ("style" === l2) {
              var h2 = e2[l2];
              for (g2 in h2)
                h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = null != e2 ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
            if ("style" === l2)
              if (h2) {
                for (g2 in h2)
                  !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
                for (g2 in k2)
                  k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
              } else
                c2 || (f2 || (f2 = []), f2.push(
                  l2,
                  c2
                )), c2 = k2;
            else
              "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c2 && (f2 = f2 || []).push("style", c2);
        var l2 = f2;
        if (b2.updateQueue = l2)
          b2.flags |= 4;
      }
    };
    Dj = function(a, b2, c2, d2) {
      c2 !== d2 && (b2.flags |= 4);
    };
    function Ej(a, b2) {
      if (!I)
        switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c2 = null; null !== b2; )
              null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
            null === c2 ? a.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a.tail;
            for (var d2 = null; null !== c2; )
              null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
            null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
        }
    }
    function S(a) {
      var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
      if (b2)
        for (var e2 = a.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
      else
        for (e2 = a.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
      a.subtreeFlags |= d2;
      a.childLanes = c2;
      return b2;
    }
    function Fj(a, b2, c2) {
      var d2 = b2.pendingProps;
      wg(b2);
      switch (b2.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b2), null;
        case 1:
          return Zf(b2.type) && $f(), S(b2), null;
        case 3:
          d2 = b2.stateNode;
          Jh();
          E(Wf);
          E(H);
          Oh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a || null === a.child)
            Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
          Bj(a, b2);
          S(b2);
          return null;
        case 5:
          Lh(b2);
          var e2 = Hh(Gh.current);
          c2 = b2.type;
          if (null !== a && null != b2.stateNode)
            Cj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b2.stateNode)
                throw Error(p(166));
              S(b2);
              return null;
            }
            a = Hh(Eh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.type;
              var f2 = b2.memoizedProps;
              d2[Of] = b2;
              d2[Pf] = f2;
              a = 0 !== (b2.mode & 1);
              switch (c2) {
                case "dialog":
                  D("cancel", d2);
                  D("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++)
                    D(lf[e2], d2);
                  break;
                case "source":
                  D("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d2
                  );
                  D("load", d2);
                  break;
                case "details":
                  D("toggle", d2);
                  break;
                case "input":
                  Za(d2, f2);
                  D("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f2), D("invalid", d2);
              }
              ub(c2, f2);
              e2 = null;
              for (var g2 in f2)
                if (f2.hasOwnProperty(g2)) {
                  var h2 = f2[g2];
                  "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d2.textContent,
                    h2,
                    a
                  ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
                }
              switch (c2) {
                case "input":
                  Va(d2);
                  db(d2, f2, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d2.onclick = Bf);
              }
              d2 = e2;
              b2.updateQueue = d2;
              null !== d2 && (b2.flags |= 4);
            } else {
              g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
              a[Of] = b2;
              a[Pf] = d2;
              Aj(a, b2, false, false);
              b2.stateNode = a;
              a: {
                g2 = vb(c2, d2);
                switch (c2) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e2 = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e2 = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++)
                      D(lf[e2], a);
                    e2 = d2;
                    break;
                  case "source":
                    D("error", a);
                    e2 = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e2 = d2;
                    break;
                  case "details":
                    D("toggle", a);
                    e2 = d2;
                    break;
                  case "input":
                    Za(a, d2);
                    e2 = Ya(a, d2);
                    D("invalid", a);
                    break;
                  case "option":
                    e2 = d2;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d2.multiple };
                    e2 = A({}, d2, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d2);
                    e2 = gb(a, d2);
                    D("invalid", a);
                    break;
                  default:
                    e2 = d2;
                }
                ub(c2, e2);
                h2 = e2;
                for (f2 in h2)
                  if (h2.hasOwnProperty(f2)) {
                    var k2 = h2[f2];
                    "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
                  }
                switch (c2) {
                  case "input":
                    Va(a);
                    db(a, d2, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a.multiple = !!d2.multiple;
                    f2 = d2.value;
                    null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                      a,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e2.onClick && (a.onclick = Bf);
                }
                switch (c2) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b2.flags |= 4);
            }
            null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          }
          S(b2);
          return null;
        case 6:
          if (a && null != b2.stateNode)
            Dj(a, b2, a.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b2.stateNode)
              throw Error(p(166));
            c2 = Hh(Gh.current);
            Hh(Eh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.memoizedProps;
              d2[Of] = b2;
              if (f2 = d2.nodeValue !== c2) {
                if (a = xg, null !== a)
                  switch (a.tag) {
                    case 3:
                      Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  }
              }
              f2 && (b2.flags |= 4);
            } else
              d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
          }
          S(b2);
          return null;
        case 13:
          E(M);
          d2 = b2.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
              Hg(), Ig(), b2.flags |= 98560, f2 = false;
            else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
              if (null === a) {
                if (!f2)
                  throw Error(p(318));
                f2 = b2.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2)
                  throw Error(p(317));
                f2[Of] = b2;
              } else
                Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
              S(b2);
              f2 = false;
            } else
              null !== zg && (Gj(zg), zg = null), f2 = true;
            if (!f2)
              return b2.flags & 65536 ? b2 : null;
          }
          if (0 !== (b2.flags & 128))
            return b2.lanes = c2, b2;
          d2 = null !== d2;
          d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
          null !== b2.updateQueue && (b2.flags |= 4);
          S(b2);
          return null;
        case 4:
          return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
        case 10:
          return Rg(b2.type._context), S(b2), null;
        case 17:
          return Zf(b2.type) && $f(), S(b2), null;
        case 19:
          E(M);
          f2 = b2.memoizedState;
          if (null === f2)
            return S(b2), null;
          d2 = 0 !== (b2.flags & 128);
          g2 = f2.rendering;
          if (null === g2)
            if (d2)
              Ej(f2, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128))
                for (a = b2.child; null !== a; ) {
                  g2 = Mh(a);
                  if (null !== g2) {
                    b2.flags |= 128;
                    Ej(f2, false);
                    d2 = g2.updateQueue;
                    null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                    b2.subtreeFlags = 0;
                    d2 = c2;
                    for (c2 = b2.child; null !== c2; )
                      f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                    G(M, M.current & 1 | 2);
                    return b2.child;
                  }
                  a = a.sibling;
                }
              null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
            }
          else {
            if (!d2)
              if (a = Mh(g2), null !== a) {
                if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
                  return S(b2), null;
              } else
                2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
            f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
          }
          if (null !== f2.tail)
            return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d2 ? c2 & 1 | 2 : c2 & 1), b2;
          S(b2);
          return null;
        case 22:
        case 23:
          return Ij(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b2.tag));
    }
    function Jj(a, b2) {
      wg(b2);
      switch (b2.tag) {
        case 1:
          return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 3:
          return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
        case 5:
          return Lh(b2), null;
        case 13:
          E(M);
          a = b2.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b2.alternate)
              throw Error(p(340));
            Ig();
          }
          a = b2.flags;
          return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 19:
          return E(M), null;
        case 4:
          return Jh(), null;
        case 10:
          return Rg(b2.type._context), null;
        case 22:
        case 23:
          return Ij(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Mj(a, b2) {
      var c2 = a.ref;
      if (null !== c2)
        if ("function" === typeof c2)
          try {
            c2(null);
          } catch (d2) {
            W(a, b2, d2);
          }
        else
          c2.current = null;
    }
    function Nj(a, b2, c2) {
      try {
        c2();
      } catch (d2) {
        W(a, b2, d2);
      }
    }
    var Oj = false;
    function Pj(a, b2) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a)
          var c2 = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
            var d2 = c2.getSelection && c2.getSelection();
            if (d2 && 0 !== d2.rangeCount) {
              c2 = d2.anchorNode;
              var e2 = d2.anchorOffset, f2 = d2.focusNode;
              d2 = d2.focusOffset;
              try {
                c2.nodeType, f2.nodeType;
              } catch (F2) {
                c2 = null;
                break a;
              }
              var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
              b:
                for (; ; ) {
                  for (var y2; ; ) {
                    q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                    q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                    3 === q2.nodeType && (g2 += q2.nodeValue.length);
                    if (null === (y2 = q2.firstChild))
                      break;
                    r2 = q2;
                    q2 = y2;
                  }
                  for (; ; ) {
                    if (q2 === a)
                      break b;
                    r2 === c2 && ++l2 === e2 && (h2 = g2);
                    r2 === f2 && ++m2 === d2 && (k2 = g2);
                    if (null !== (y2 = q2.nextSibling))
                      break;
                    q2 = r2;
                    r2 = q2.parentNode;
                  }
                  q2 = y2;
                }
              c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
            } else
              c2 = null;
          }
        c2 = c2 || { start: 0, end: 0 };
      } else
        c2 = null;
      Df = { focusedElem: a, selectionRange: c2 };
      dd = false;
      for (V = b2; null !== V; )
        if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
          a.return = b2, V = a;
        else
          for (; null !== V; ) {
            b2 = V;
            try {
              var n2 = b2.alternate;
              if (0 !== (b2.flags & 1024))
                switch (b2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== n2) {
                      var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                      x2.__reactInternalSnapshotBeforeUpdate = w2;
                    }
                    break;
                  case 3:
                    var u2 = b2.stateNode.containerInfo;
                    1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p(163));
                }
            } catch (F2) {
              W(b2, b2.return, F2);
            }
            a = b2.sibling;
            if (null !== a) {
              a.return = b2.return;
              V = a;
              break;
            }
            V = b2.return;
          }
      n2 = Oj;
      Oj = false;
      return n2;
    }
    function Qj(a, b2, c2) {
      var d2 = b2.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e2 = d2 = d2.next;
        do {
          if ((e2.tag & a) === a) {
            var f2 = e2.destroy;
            e2.destroy = void 0;
            void 0 !== f2 && Nj(b2, c2, f2);
          }
          e2 = e2.next;
        } while (e2 !== d2);
      }
    }
    function Rj(a, b2) {
      b2 = b2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        var c2 = b2 = b2.next;
        do {
          if ((c2.tag & a) === a) {
            var d2 = c2.create;
            c2.destroy = d2();
          }
          c2 = c2.next;
        } while (c2 !== b2);
      }
    }
    function Sj(a) {
      var b2 = a.ref;
      if (null !== b2) {
        var c2 = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c2;
            break;
          default:
            a = c2;
        }
        "function" === typeof b2 ? b2(a) : b2.current = a;
      }
    }
    function Tj(a) {
      var b2 = a.alternate;
      null !== b2 && (a.alternate = null, Tj(b2));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Uj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Vj(a) {
      a:
        for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Uj(a.return))
              return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2)
              continue a;
            if (null === a.child || 4 === a.tag)
              continue a;
            else
              a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2))
            return a.stateNode;
        }
    }
    function Wj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2)
        a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
      else if (4 !== d2 && (a = a.child, null !== a))
        for (Wj(a, b2, c2), a = a.sibling; null !== a; )
          Wj(a, b2, c2), a = a.sibling;
    }
    function Xj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2)
        a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
      else if (4 !== d2 && (a = a.child, null !== a))
        for (Xj(a, b2, c2), a = a.sibling; null !== a; )
          Xj(a, b2, c2), a = a.sibling;
    }
    var X = null, Yj = false;
    function Zj(a, b2, c2) {
      for (c2 = c2.child; null !== c2; )
        ak(a, b2, c2), c2 = c2.sibling;
    }
    function ak(a, b2, c2) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount)
        try {
          lc.onCommitFiberUnmount(kc, c2);
        } catch (h2) {
        }
      switch (c2.tag) {
        case 5:
          U || Mj(c2, b2);
        case 6:
          var d2 = X, e2 = Yj;
          X = null;
          Zj(a, b2, c2);
          X = d2;
          Yj = e2;
          null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
          break;
        case 18:
          null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
          break;
        case 4:
          d2 = X;
          e2 = Yj;
          X = c2.stateNode.containerInfo;
          Yj = true;
          Zj(a, b2, c2);
          X = d2;
          Yj = e2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e2 = d2 = d2.next;
            do {
              var f2 = e2, g2 = f2.destroy;
              f2 = f2.tag;
              void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
              e2 = e2.next;
            } while (e2 !== d2);
          }
          Zj(a, b2, c2);
          break;
        case 1:
          if (!U && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
            try {
              d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
            } catch (h2) {
              W(c2, b2, h2);
            }
          Zj(a, b2, c2);
          break;
        case 21:
          Zj(a, b2, c2);
          break;
        case 22:
          c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Zj(a, b2, c2), U = d2) : Zj(a, b2, c2);
          break;
        default:
          Zj(a, b2, c2);
      }
    }
    function bk(a) {
      var b2 = a.updateQueue;
      if (null !== b2) {
        a.updateQueue = null;
        var c2 = a.stateNode;
        null === c2 && (c2 = a.stateNode = new Lj());
        b2.forEach(function(b3) {
          var d2 = ck.bind(null, a, b3);
          c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
        });
      }
    }
    function dk(a, b2) {
      var c2 = b2.deletions;
      if (null !== c2)
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2];
          try {
            var f2 = a, g2 = b2, h2 = g2;
            a:
              for (; null !== h2; ) {
                switch (h2.tag) {
                  case 5:
                    X = h2.stateNode;
                    Yj = false;
                    break a;
                  case 3:
                    X = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                  case 4:
                    X = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                }
                h2 = h2.return;
              }
            if (null === X)
              throw Error(p(160));
            ak(f2, g2, e2);
            X = null;
            Yj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W(e2, b2, l2);
          }
        }
      if (b2.subtreeFlags & 12854)
        for (b2 = b2.child; null !== b2; )
          ek(b2, a), b2 = b2.sibling;
    }
    function ek(a, b2) {
      var c2 = a.alternate, d2 = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dk(b2, a);
          fk(a);
          if (d2 & 4) {
            try {
              Qj(3, a, a.return), Rj(3, a);
            } catch (t2) {
              W(a, a.return, t2);
            }
            try {
              Qj(5, a, a.return);
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 1:
          dk(b2, a);
          fk(a);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          break;
        case 5:
          dk(b2, a);
          fk(a);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          if (a.flags & 32) {
            var e2 = a.stateNode;
            try {
              ob(e2, "");
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
            var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2)
              try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g2);
                var l2 = vb(h2, f2);
                for (g2 = 0; g2 < k2.length; g2 += 2) {
                  var m2 = k2[g2], q2 = k2[g2 + 1];
                  "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r2 = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t2) {
                W(a, a.return, t2);
              }
          }
          break;
        case 6:
          dk(b2, a);
          fk(a);
          if (d2 & 4) {
            if (null === a.stateNode)
              throw Error(p(162));
            e2 = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e2.nodeValue = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 3:
          dk(b2, a);
          fk(a);
          if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
            try {
              bd(b2.containerInfo);
            } catch (t2) {
              W(a, a.return, t2);
            }
          break;
        case 4:
          dk(b2, a);
          fk(a);
          break;
        case 13:
          dk(b2, a);
          fk(a);
          e2 = a.child;
          e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
          d2 & 4 && bk(a);
          break;
        case 22:
          m2 = null !== c2 && null !== c2.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a), U = l2) : dk(b2, a);
          fk(a);
          if (d2 & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
              for (V = a, m2 = a.child; null !== m2; ) {
                for (q2 = V = m2; null !== V; ) {
                  r2 = V;
                  y2 = r2.child;
                  switch (r2.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Qj(4, r2, r2.return);
                      break;
                    case 1:
                      Mj(r2, r2.return);
                      var n2 = r2.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d2 = r2;
                        c2 = r2.return;
                        try {
                          b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                        } catch (t2) {
                          W(d2, c2, t2);
                        }
                      }
                      break;
                    case 5:
                      Mj(r2, r2.return);
                      break;
                    case 22:
                      if (null !== r2.memoizedState) {
                        hk(q2);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
                }
                m2 = m2.sibling;
              }
            a:
              for (m2 = null, q2 = a; ; ) {
                if (5 === q2.tag) {
                  if (null === m2) {
                    m2 = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m2)
                    try {
                      q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a)
                  break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a)
                    break a;
                  m2 === q2 && (m2 = null);
                  q2 = q2.return;
                }
                m2 === q2 && (m2 = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
          }
          break;
        case 19:
          dk(b2, a);
          fk(a);
          d2 & 4 && bk(a);
          break;
        case 21:
          break;
        default:
          dk(
            b2,
            a
          ), fk(a);
      }
    }
    function fk(a) {
      var b2 = a.flags;
      if (b2 & 2) {
        try {
          a: {
            for (var c2 = a.return; null !== c2; ) {
              if (Uj(c2)) {
                var d2 = c2;
                break a;
              }
              c2 = c2.return;
            }
            throw Error(p(160));
          }
          switch (d2.tag) {
            case 5:
              var e2 = d2.stateNode;
              d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
              var f2 = Vj(a);
              Xj(a, f2, e2);
              break;
            case 3:
            case 4:
              var g2 = d2.stateNode.containerInfo, h2 = Vj(a);
              Wj(a, h2, g2);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k2) {
          W(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b2 & 4096 && (a.flags &= -4097);
    }
    function ik(a, b2, c2) {
      V = a;
      jk(a);
    }
    function jk(a, b2, c2) {
      for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
        var e2 = V, f2 = e2.child;
        if (22 === e2.tag && d2) {
          var g2 = null !== e2.memoizedState || Kj;
          if (!g2) {
            var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
            h2 = Kj;
            var l2 = U;
            Kj = g2;
            if ((U = k2) && !l2)
              for (V = e2; null !== V; )
                g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
            for (; null !== f2; )
              V = f2, jk(f2), f2 = f2.sibling;
            V = e2;
            Kj = h2;
            U = l2;
          }
          lk(a);
        } else
          0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
      }
    }
    function lk(a) {
      for (; null !== V; ) {
        var b2 = V;
        if (0 !== (b2.flags & 8772)) {
          var c2 = b2.alternate;
          try {
            if (0 !== (b2.flags & 8772))
              switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U || Rj(5, b2);
                  break;
                case 1:
                  var d2 = b2.stateNode;
                  if (b2.flags & 4 && !U)
                    if (null === c2)
                      d2.componentDidMount();
                    else {
                      var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                      d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f2 = b2.updateQueue;
                  null !== f2 && ih(b2, f2, d2);
                  break;
                case 3:
                  var g2 = b2.updateQueue;
                  if (null !== g2) {
                    c2 = null;
                    if (null !== b2.child)
                      switch (b2.child.tag) {
                        case 5:
                          c2 = b2.child.stateNode;
                          break;
                        case 1:
                          c2 = b2.child.stateNode;
                      }
                    ih(b2, g2, c2);
                  }
                  break;
                case 5:
                  var h2 = b2.stateNode;
                  if (null === c2 && b2.flags & 4) {
                    c2 = h2;
                    var k2 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c2.focus();
                        break;
                      case "img":
                        k2.src && (c2.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q2 = m2.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
            U || b2.flags & 512 && Sj(b2);
          } catch (r2) {
            W(b2, b2.return, r2);
          }
        }
        if (b2 === a) {
          V = null;
          break;
        }
        c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V = c2;
          break;
        }
        V = b2.return;
      }
    }
    function hk(a) {
      for (; null !== V; ) {
        var b2 = V;
        if (b2 === a) {
          V = null;
          break;
        }
        var c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V = c2;
          break;
        }
        V = b2.return;
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b2 = V;
        try {
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              var c2 = b2.return;
              try {
                Rj(4, b2);
              } catch (k2) {
                W(b2, c2, k2);
              }
              break;
            case 1:
              var d2 = b2.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e2 = b2.return;
                try {
                  d2.componentDidMount();
                } catch (k2) {
                  W(b2, e2, k2);
                }
              }
              var f2 = b2.return;
              try {
                Sj(b2);
              } catch (k2) {
                W(b2, f2, k2);
              }
              break;
            case 5:
              var g2 = b2.return;
              try {
                Sj(b2);
              } catch (k2) {
                W(b2, g2, k2);
              }
          }
        } catch (k2) {
          W(b2, b2.return, k2);
        }
        if (b2 === a) {
          V = null;
          break;
        }
        var h2 = b2.sibling;
        if (null !== h2) {
          h2.return = b2.return;
          V = h2;
          break;
        }
        V = b2.return;
      }
    }
    var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
    function L() {
      return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
    }
    function lh(a) {
      if (0 === (a.mode & 1))
        return 1;
      if (0 !== (K & 2) && 0 !== Z)
        return Z & -Z;
      if (null !== Kg.transition)
        return 0 === Ck && (Ck = yc()), Ck;
      a = C;
      if (0 !== a)
        return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function mh(a, b2, c2, d2) {
      if (50 < zk)
        throw zk = 0, Ak = null, Error(p(185));
      Ac(a, c2, d2);
      if (0 === (K & 2) || a !== R)
        a === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a, Z)), Ek(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
    }
    function Ek(a, b2) {
      var c2 = a.callbackNode;
      wc(a, b2);
      var d2 = uc(a, a === R ? Z : 0);
      if (0 === d2)
        null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
      else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
        null != c2 && bc(c2);
        if (1 === b2)
          0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c2 = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c2 = fc;
              break;
            case 4:
              c2 = gc;
              break;
            case 16:
              c2 = hc;
              break;
            case 536870912:
              c2 = jc;
              break;
            default:
              c2 = hc;
          }
          c2 = Gk(c2, Hk.bind(null, a));
        }
        a.callbackPriority = b2;
        a.callbackNode = c2;
      }
    }
    function Hk(a, b2) {
      Bk = -1;
      Ck = 0;
      if (0 !== (K & 6))
        throw Error(p(327));
      var c2 = a.callbackNode;
      if (Ik() && a.callbackNode !== c2)
        return null;
      var d2 = uc(a, a === R ? Z : 0);
      if (0 === d2)
        return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2)
        b2 = Jk(a, d2);
      else {
        b2 = d2;
        var e2 = K;
        K |= 2;
        var f2 = Kk();
        if (R !== a || Z !== b2)
          vk = null, Hj = B() + 500, Lk(a, b2);
        do
          try {
            Mk();
            break;
          } catch (h2) {
            Nk(a, h2);
          }
        while (1);
        Qg();
        nk.current = f2;
        K = e2;
        null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
      }
      if (0 !== b2) {
        2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Ok(a, e2)));
        if (1 === b2)
          throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
        if (6 === b2)
          Dk(a, d2);
        else {
          e2 = a.current.alternate;
          if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Ok(a, f2))), 1 === b2))
            throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
          a.finishedWork = e2;
          a.finishedLanes = d2;
          switch (b2) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Qk(a, uk, vk);
              break;
            case 3:
              Dk(a, d2);
              if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
                if (0 !== uc(a, 0))
                  break;
                e2 = a.suspendedLanes;
                if ((e2 & d2) !== d2) {
                  L();
                  a.pingedLanes |= a.suspendedLanes & e2;
                  break;
                }
                a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
                break;
              }
              Qk(a, uk, vk);
              break;
            case 4:
              Dk(a, d2);
              if ((d2 & 4194240) === d2)
                break;
              b2 = a.eventTimes;
              for (e2 = -1; 0 < d2; ) {
                var g2 = 31 - oc(d2);
                f2 = 1 << g2;
                g2 = b2[g2];
                g2 > e2 && (e2 = g2);
                d2 &= ~f2;
              }
              d2 = e2;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
              if (10 < d2) {
                a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d2);
                break;
              }
              Qk(a, uk, vk);
              break;
            case 5:
              Qk(a, uk, vk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Ek(a, B());
      return a.callbackNode === c2 ? Hk.bind(null, a) : null;
    }
    function Ok(a, b2) {
      var c2 = tk;
      a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
      a = Jk(a, b2);
      2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
      return a;
    }
    function Gj(a) {
      null === uk ? uk = a : uk.push.apply(uk, a);
    }
    function Pk(a) {
      for (var b2 = a; ; ) {
        if (b2.flags & 16384) {
          var c2 = b2.updateQueue;
          if (null !== c2 && (c2 = c2.stores, null !== c2))
            for (var d2 = 0; d2 < c2.length; d2++) {
              var e2 = c2[d2], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He(f2(), e2))
                  return false;
              } catch (g2) {
                return false;
              }
            }
        }
        c2 = b2.child;
        if (b2.subtreeFlags & 16384 && null !== c2)
          c2.return = b2, b2 = c2;
        else {
          if (b2 === a)
            break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a)
              return true;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
      }
      return true;
    }
    function Dk(a, b2) {
      b2 &= ~sk;
      b2 &= ~rk;
      a.suspendedLanes |= b2;
      a.pingedLanes &= ~b2;
      for (a = a.expirationTimes; 0 < b2; ) {
        var c2 = 31 - oc(b2), d2 = 1 << c2;
        a[c2] = -1;
        b2 &= ~d2;
      }
    }
    function Fk(a) {
      if (0 !== (K & 6))
        throw Error(p(327));
      Ik();
      var b2 = uc(a, 0);
      if (0 === (b2 & 1))
        return Ek(a, B()), null;
      var c2 = Jk(a, b2);
      if (0 !== a.tag && 2 === c2) {
        var d2 = xc(a);
        0 !== d2 && (b2 = d2, c2 = Ok(a, d2));
      }
      if (1 === c2)
        throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c2;
      if (6 === c2)
        throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b2;
      Qk(a, uk, vk);
      Ek(a, B());
      return null;
    }
    function Rk(a, b2) {
      var c2 = K;
      K |= 1;
      try {
        return a(b2);
      } finally {
        K = c2, 0 === K && (Hj = B() + 500, fg && jg());
      }
    }
    function Sk(a) {
      null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
      var b2 = K;
      K |= 1;
      var c2 = pk.transition, d2 = C;
      try {
        if (pk.transition = null, C = 1, a)
          return a();
      } finally {
        C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
      }
    }
    function Ij() {
      gj = fj.current;
      E(fj);
    }
    function Lk(a, b2) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c2 = a.timeoutHandle;
      -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
      if (null !== Y)
        for (c2 = Y.return; null !== c2; ) {
          var d2 = c2;
          wg(d2);
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              null !== d2 && void 0 !== d2 && $f();
              break;
            case 3:
              Jh();
              E(Wf);
              E(H);
              Oh();
              break;
            case 5:
              Lh(d2);
              break;
            case 4:
              Jh();
              break;
            case 13:
              E(M);
              break;
            case 19:
              E(M);
              break;
            case 10:
              Rg(d2.type._context);
              break;
            case 22:
            case 23:
              Ij();
          }
          c2 = c2.return;
        }
      R = a;
      Y = a = wh(a.current, null);
      Z = gj = b2;
      T = 0;
      qk = null;
      sk = rk = hh = 0;
      uk = tk = null;
      if (null !== Wg) {
        for (b2 = 0; b2 < Wg.length; b2++)
          if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
            c2.interleaved = null;
            var e2 = d2.next, f2 = c2.pending;
            if (null !== f2) {
              var g2 = f2.next;
              f2.next = e2;
              d2.next = g2;
            }
            c2.pending = d2;
          }
        Wg = null;
      }
      return a;
    }
    function Nk(a, b2) {
      do {
        var c2 = Y;
        try {
          Qg();
          Ph.current = ai;
          if (Sh) {
            for (var d2 = N.memoizedState; null !== d2; ) {
              var e2 = d2.queue;
              null !== e2 && (e2.pending = null);
              d2 = d2.next;
            }
            Sh = false;
          }
          Rh = 0;
          P = O = N = null;
          Th = false;
          Uh = 0;
          ok.current = null;
          if (null === c2 || null === c2.return) {
            T = 1;
            qk = b2;
            Y = null;
            break;
          }
          a: {
            var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
            b2 = Z;
            h2.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h2, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Vi(g2);
              if (null !== y2) {
                y2.flags &= -257;
                Wi(y2, g2, h2, f2, b2);
                y2.mode & 1 && Ti(f2, l2, b2);
                b2 = y2;
                k2 = l2;
                var n2 = b2.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b2.updateQueue = t2;
                } else
                  n2.add(k2);
                break a;
              } else {
                if (0 === (b2 & 1)) {
                  Ti(f2, l2, b2);
                  uj();
                  break a;
                }
                k2 = Error(p(426));
              }
            } else if (I && h2.mode & 1) {
              var J2 = Vi(g2);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Wi(J2, g2, h2, f2, b2);
                Jg(Ki(k2, h2));
                break a;
              }
            }
            f2 = k2 = Ki(k2, h2);
            4 !== T && (T = 2);
            null === tk ? tk = [f2] : tk.push(f2);
            f2 = g2;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var x2 = Oi(f2, k2, b2);
                  fh(f2, x2);
                  break a;
                case 1:
                  h2 = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var F2 = Ri(f2, h2, b2);
                    fh(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Tk(c2);
        } catch (na) {
          b2 = na;
          Y === c2 && null !== c2 && (Y = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Kk() {
      var a = nk.current;
      nk.current = ai;
      return null === a ? ai : a;
    }
    function uj() {
      if (0 === T || 3 === T || 2 === T)
        T = 4;
      null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
    }
    function Jk(a, b2) {
      var c2 = K;
      K |= 2;
      var d2 = Kk();
      if (R !== a || Z !== b2)
        vk = null, Lk(a, b2);
      do
        try {
          Uk();
          break;
        } catch (e2) {
          Nk(a, e2);
        }
      while (1);
      Qg();
      K = c2;
      nk.current = d2;
      if (null !== Y)
        throw Error(p(261));
      R = null;
      Z = 0;
      return T;
    }
    function Uk() {
      for (; null !== Y; )
        Vk(Y);
    }
    function Mk() {
      for (; null !== Y && !cc(); )
        Vk(Y);
    }
    function Vk(a) {
      var b2 = Wk(a.alternate, a, gj);
      a.memoizedProps = a.pendingProps;
      null === b2 ? Tk(a) : Y = b2;
      ok.current = null;
    }
    function Tk(a) {
      var b2 = a;
      do {
        var c2 = b2.alternate;
        a = b2.return;
        if (0 === (b2.flags & 32768)) {
          if (c2 = Fj(c2, b2, gj), null !== c2) {
            Y = c2;
            return;
          }
        } else {
          c2 = Jj(c2, b2);
          if (null !== c2) {
            c2.flags &= 32767;
            Y = c2;
            return;
          }
          if (null !== a)
            a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b2 = b2.sibling;
        if (null !== b2) {
          Y = b2;
          return;
        }
        Y = b2 = a;
      } while (null !== b2);
      0 === T && (T = 5);
    }
    function Qk(a, b2, c2) {
      var d2 = C, e2 = pk.transition;
      try {
        pk.transition = null, C = 1, Xk(a, b2, c2, d2);
      } finally {
        pk.transition = e2, C = d2;
      }
      return null;
    }
    function Xk(a, b2, c2, d2) {
      do
        Ik();
      while (null !== xk);
      if (0 !== (K & 6))
        throw Error(p(327));
      c2 = a.finishedWork;
      var e2 = a.finishedLanes;
      if (null === c2)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c2 === a.current)
        throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c2.lanes | c2.childLanes;
      Bc(a, f2);
      a === R && (Y = R = null, Z = 0);
      0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
        Ik();
        return null;
      }));
      f2 = 0 !== (c2.flags & 15990);
      if (0 !== (c2.subtreeFlags & 15990) || f2) {
        f2 = pk.transition;
        pk.transition = null;
        var g2 = C;
        C = 1;
        var h2 = K;
        K |= 4;
        ok.current = null;
        Pj(a, c2);
        ek(c2, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c2;
        ik(c2);
        dc();
        K = h2;
        C = g2;
        pk.transition = f2;
      } else
        a.current = c2;
      wk && (wk = false, xk = a, yk = e2);
      f2 = a.pendingLanes;
      0 === f2 && (Si = null);
      mc(c2.stateNode);
      Ek(a, B());
      if (null !== b2)
        for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
          e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
      if (Pi)
        throw Pi = false, a = Qi, Qi = null, a;
      0 !== (yk & 1) && 0 !== a.tag && Ik();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
      jg();
      return null;
    }
    function Ik() {
      if (null !== xk) {
        var a = Dc(yk), b2 = pk.transition, c2 = C;
        try {
          pk.transition = null;
          C = 16 > a ? 16 : a;
          if (null === xk)
            var d2 = false;
          else {
            a = xk;
            xk = null;
            yk = 0;
            if (0 !== (K & 6))
              throw Error(p(331));
            var e2 = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f2 = V, g2 = f2.child;
              if (0 !== (V.flags & 16)) {
                var h2 = f2.deletions;
                if (null !== h2) {
                  for (var k2 = 0; k2 < h2.length; k2++) {
                    var l2 = h2[k2];
                    for (V = l2; null !== V; ) {
                      var m2 = V;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2)
                        q2.return = m2, V = q2;
                      else
                        for (; null !== V; ) {
                          m2 = V;
                          var r2 = m2.sibling, y2 = m2.return;
                          Tj(m2);
                          if (m2 === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r2) {
                            r2.return = y2;
                            V = r2;
                            break;
                          }
                          V = y2;
                        }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
                g2.return = f2, V = g2;
              else
                b:
                  for (; null !== V; ) {
                    f2 = V;
                    if (0 !== (f2.flags & 2048))
                      switch (f2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, f2, f2.return);
                      }
                    var x2 = f2.sibling;
                    if (null !== x2) {
                      x2.return = f2.return;
                      V = x2;
                      break b;
                    }
                    V = f2.return;
                  }
            }
            var w2 = a.current;
            for (V = w2; null !== V; ) {
              g2 = V;
              var u2 = g2.child;
              if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
                u2.return = g2, V = u2;
              else
                b:
                  for (g2 = w2; null !== V; ) {
                    h2 = V;
                    if (0 !== (h2.flags & 2048))
                      try {
                        switch (h2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Rj(9, h2);
                        }
                      } catch (na) {
                        W(h2, h2.return, na);
                      }
                    if (h2 === g2) {
                      V = null;
                      break b;
                    }
                    var F2 = h2.sibling;
                    if (null !== F2) {
                      F2.return = h2.return;
                      V = F2;
                      break b;
                    }
                    V = h2.return;
                  }
            }
            K = e2;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot)
              try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
            d2 = true;
          }
          return d2;
        } finally {
          C = c2, pk.transition = b2;
        }
      }
      return false;
    }
    function Yk(a, b2, c2) {
      b2 = Ki(c2, b2);
      b2 = Oi(a, b2, 1);
      a = dh(a, b2, 1);
      b2 = L();
      null !== a && (Ac(a, 1, b2), Ek(a, b2));
    }
    function W(a, b2, c2) {
      if (3 === a.tag)
        Yk(a, a, c2);
      else
        for (; null !== b2; ) {
          if (3 === b2.tag) {
            Yk(b2, a, c2);
            break;
          } else if (1 === b2.tag) {
            var d2 = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
              a = Ki(c2, a);
              a = Ri(b2, a, 1);
              b2 = dh(b2, a, 1);
              a = L();
              null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
    }
    function Ui(a, b2, c2) {
      var d2 = a.pingCache;
      null !== d2 && d2.delete(b2);
      b2 = L();
      a.pingedLanes |= a.suspendedLanes & c2;
      R === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c2);
      Ek(a, b2);
    }
    function Zk(a, b2) {
      0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c2 = L();
      a = Zg(a, b2);
      null !== a && (Ac(a, b2, c2), Ek(a, c2));
    }
    function vj(a) {
      var b2 = a.memoizedState, c2 = 0;
      null !== b2 && (c2 = b2.retryLane);
      Zk(a, c2);
    }
    function ck(a, b2) {
      var c2 = 0;
      switch (a.tag) {
        case 13:
          var d2 = a.stateNode;
          var e2 = a.memoizedState;
          null !== e2 && (c2 = e2.retryLane);
          break;
        case 19:
          d2 = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d2 && d2.delete(b2);
      Zk(a, c2);
    }
    var Wk;
    Wk = function(a, b2, c2) {
      if (null !== a)
        if (a.memoizedProps !== b2.pendingProps || Wf.current)
          Ug = true;
        else {
          if (0 === (a.lanes & c2) && 0 === (b2.flags & 128))
            return Ug = false, zj(a, b2, c2);
          Ug = 0 !== (a.flags & 131072) ? true : false;
        }
      else
        Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
      b2.lanes = 0;
      switch (b2.tag) {
        case 2:
          var d2 = b2.type;
          jj(a, b2);
          a = b2.pendingProps;
          var e2 = Yf(b2, H.current);
          Tg(b2, c2);
          e2 = Xh(null, b2, d2, a, e2, c2);
          var f2 = bi();
          b2.flags |= 1;
          "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
          return b2;
        case 16:
          d2 = b2.elementType;
          a: {
            jj(a, b2);
            a = b2.pendingProps;
            e2 = d2._init;
            d2 = e2(d2._payload);
            b2.type = d2;
            e2 = b2.tag = $k(d2);
            a = Lg(d2, a);
            switch (e2) {
              case 0:
                b2 = dj(null, b2, d2, a, c2);
                break a;
              case 1:
                b2 = ij(null, b2, d2, a, c2);
                break a;
              case 11:
                b2 = Zi(null, b2, d2, a, c2);
                break a;
              case 14:
                b2 = aj(null, b2, d2, Lg(d2.type, a), c2);
                break a;
            }
            throw Error(p(
              306,
              d2,
              ""
            ));
          }
          return b2;
        case 0:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a, b2, d2, e2, c2);
        case 1:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a, b2, d2, e2, c2);
        case 3:
          a: {
            lj(b2);
            if (null === a)
              throw Error(p(387));
            d2 = b2.pendingProps;
            f2 = b2.memoizedState;
            e2 = f2.element;
            bh(a, b2);
            gh(b2, d2, null, c2);
            var g2 = b2.memoizedState;
            d2 = g2.element;
            if (f2.isDehydrated)
              if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ki(Error(p(423)), b2);
                b2 = mj(a, b2, d2, c2, e2);
                break a;
              } else if (d2 !== e2) {
                e2 = Ki(Error(p(424)), b2);
                b2 = mj(a, b2, d2, c2, e2);
                break a;
              } else
                for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
                  c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
            else {
              Ig();
              if (d2 === e2) {
                b2 = $i(a, b2, c2);
                break a;
              }
              Yi(a, b2, d2, c2);
            }
            b2 = b2.child;
          }
          return b2;
        case 5:
          return Kh(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
        case 6:
          return null === a && Eg(b2), null;
        case 13:
          return pj(a, b2, c2);
        case 4:
          return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d2, c2) : Yi(a, b2, d2, c2), b2.child;
        case 11:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a, b2, d2, e2, c2);
        case 7:
          return Yi(a, b2, b2.pendingProps, c2), b2.child;
        case 8:
          return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 12:
          return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 10:
          a: {
            d2 = b2.type._context;
            e2 = b2.pendingProps;
            f2 = b2.memoizedProps;
            g2 = e2.value;
            G(Mg, d2._currentValue);
            d2._currentValue = g2;
            if (null !== f2)
              if (He(f2.value, g2)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = $i(a, b2, c2);
                  break a;
                }
              } else
                for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                  var h2 = f2.dependencies;
                  if (null !== h2) {
                    g2 = f2.child;
                    for (var k2 = h2.firstContext; null !== k2; ) {
                      if (k2.context === d2) {
                        if (1 === f2.tag) {
                          k2 = ch(-1, c2 & -c2);
                          k2.tag = 2;
                          var l2 = f2.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var m2 = l2.pending;
                            null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                            l2.pending = k2;
                          }
                        }
                        f2.lanes |= c2;
                        k2 = f2.alternate;
                        null !== k2 && (k2.lanes |= c2);
                        Sg(
                          f2.return,
                          c2,
                          b2
                        );
                        h2.lanes |= c2;
                        break;
                      }
                      k2 = k2.next;
                    }
                  } else if (10 === f2.tag)
                    g2 = f2.type === b2.type ? null : f2.child;
                  else if (18 === f2.tag) {
                    g2 = f2.return;
                    if (null === g2)
                      throw Error(p(341));
                    g2.lanes |= c2;
                    h2 = g2.alternate;
                    null !== h2 && (h2.lanes |= c2);
                    Sg(g2, c2, b2);
                    g2 = f2.sibling;
                  } else
                    g2 = f2.child;
                  if (null !== g2)
                    g2.return = f2;
                  else
                    for (g2 = f2; null !== g2; ) {
                      if (g2 === b2) {
                        g2 = null;
                        break;
                      }
                      f2 = g2.sibling;
                      if (null !== f2) {
                        f2.return = g2.return;
                        g2 = f2;
                        break;
                      }
                      g2 = g2.return;
                    }
                  f2 = g2;
                }
            Yi(a, b2, e2.children, c2);
            b2 = b2.child;
          }
          return b2;
        case 9:
          return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a, b2, d2, c2), b2.child;
        case 14:
          return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a, b2, d2, e2, c2);
        case 15:
          return cj(a, b2, b2.type, b2.pendingProps, c2);
        case 17:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a, c2);
        case 19:
          return yj(a, b2, c2);
        case 22:
          return ej(a, b2, c2);
      }
      throw Error(p(156, b2.tag));
    };
    function Gk(a, b2) {
      return ac(a, b2);
    }
    function al(a, b2, c2, d2) {
      this.tag = a;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b2;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b2, c2, d2) {
      return new al(a, b2, c2, d2);
    }
    function bj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function $k(a) {
      if ("function" === typeof a)
        return bj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da)
          return 11;
        if (a === Ga)
          return 14;
      }
      return 2;
    }
    function wh(a, b2) {
      var c2 = a.alternate;
      null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
      c2.flags = a.flags & 14680064;
      c2.childLanes = a.childLanes;
      c2.lanes = a.lanes;
      c2.child = a.child;
      c2.memoizedProps = a.memoizedProps;
      c2.memoizedState = a.memoizedState;
      c2.updateQueue = a.updateQueue;
      b2 = a.dependencies;
      c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
      c2.sibling = a.sibling;
      c2.index = a.index;
      c2.ref = a.ref;
      return c2;
    }
    function yh(a, b2, c2, d2, e2, f2) {
      var g2 = 2;
      d2 = a;
      if ("function" === typeof a)
        bj(a) && (g2 = 1);
      else if ("string" === typeof a)
        g2 = 5;
      else
        a:
          switch (a) {
            case ya:
              return Ah(c2.children, e2, f2, b2);
            case za:
              g2 = 8;
              e2 |= 8;
              break;
            case Aa:
              return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
            case Ea:
              return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
            case Fa:
              return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
            case Ia:
              return qj(c2, e2, f2, b2);
            default:
              if ("object" === typeof a && null !== a)
                switch (a.$$typeof) {
                  case Ba:
                    g2 = 10;
                    break a;
                  case Ca:
                    g2 = 9;
                    break a;
                  case Da:
                    g2 = 11;
                    break a;
                  case Ga:
                    g2 = 14;
                    break a;
                  case Ha:
                    g2 = 16;
                    d2 = null;
                    break a;
                }
              throw Error(p(130, null == a ? a : typeof a, ""));
          }
      b2 = Bg(g2, c2, b2, e2);
      b2.elementType = a;
      b2.type = d2;
      b2.lanes = f2;
      return b2;
    }
    function Ah(a, b2, c2, d2) {
      a = Bg(7, a, d2, b2);
      a.lanes = c2;
      return a;
    }
    function qj(a, b2, c2, d2) {
      a = Bg(22, a, d2, b2);
      a.elementType = Ia;
      a.lanes = c2;
      a.stateNode = { isHidden: false };
      return a;
    }
    function xh(a, b2, c2) {
      a = Bg(6, a, null, b2);
      a.lanes = c2;
      return a;
    }
    function zh(a, b2, c2) {
      b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
      b2.lanes = c2;
      b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b2;
    }
    function bl(a, b2, c2, d2, e2) {
      this.tag = b2;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e2;
      this.mutableSourceEagerHydrationData = null;
    }
    function cl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = new bl(a, b2, c2, h2, k2);
      1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
      f2 = Bg(3, null, null, b2);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      ah(f2);
      return a;
    }
    function dl(a, b2, c2) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
    }
    function el(a) {
      if (!a)
        return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag)
          throw Error(p(170));
        var b2 = a;
        do {
          switch (b2.tag) {
            case 3:
              b2 = b2.stateNode.context;
              break a;
            case 1:
              if (Zf(b2.type)) {
                b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b2 = b2.return;
        } while (null !== b2);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c2 = a.type;
        if (Zf(c2))
          return bg(a, c2, b2);
      }
      return b2;
    }
    function fl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = cl(c2, d2, true, a, e2, f2, g2, h2, k2);
      a.context = el(null);
      c2 = a.current;
      d2 = L();
      e2 = lh(c2);
      f2 = ch(d2, e2);
      f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
      dh(c2, f2, e2);
      a.current.lanes = e2;
      Ac(a, e2, d2);
      Ek(a, d2);
      return a;
    }
    function gl(a, b2, c2, d2) {
      var e2 = b2.current, f2 = L(), g2 = lh(e2);
      c2 = el(c2);
      null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
      b2 = ch(f2, g2);
      b2.payload = { element: a };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b2.callback = d2);
      a = dh(e2, b2, g2);
      null !== a && (mh(a, e2, g2, f2), eh(a, e2, g2));
      return g2;
    }
    function hl(a) {
      a = a.current;
      if (!a.child)
        return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function il(a, b2) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c2 = a.retryLane;
        a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
      }
    }
    function jl(a, b2) {
      il(a, b2);
      (a = a.alternate) && il(a, b2);
    }
    function kl() {
      return null;
    }
    var ll = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ml(a) {
      this._internalRoot = a;
    }
    nl.prototype.render = ml.prototype.render = function(a) {
      var b2 = this._internalRoot;
      if (null === b2)
        throw Error(p(409));
      gl(a, b2, null, null);
    };
    nl.prototype.unmount = ml.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b2 = a.containerInfo;
        Sk(function() {
          gl(null, a, null, null);
        });
        b2[uf] = null;
      }
    };
    function nl(a) {
      this._internalRoot = a;
    }
    nl.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b2 = Hc();
        a = { blockedOn: null, target: a, priority: b2 };
        for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
          ;
        Qc.splice(c2, 0, a);
        0 === c2 && Vc(a);
      }
    };
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function pl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function ql() {
    }
    function rl(a, b2, c2, d2, e2) {
      if (e2) {
        if ("function" === typeof d2) {
          var f2 = d2;
          d2 = function() {
            var a2 = hl(g2);
            f2.call(a2);
          };
        }
        var g2 = fl(b2, d2, a, 0, null, false, false, "", ql);
        a._reactRootContainer = g2;
        a[uf] = g2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk();
        return g2;
      }
      for (; e2 = a.lastChild; )
        a.removeChild(e2);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a2 = hl(k2);
          h2.call(a2);
        };
      }
      var k2 = cl(a, 0, false, null, null, false, false, "", ql);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Sk(function() {
        gl(b2, k2, c2, d2);
      });
      return k2;
    }
    function sl(a, b2, c2, d2, e2) {
      var f2 = c2._reactRootContainer;
      if (f2) {
        var g2 = f2;
        if ("function" === typeof e2) {
          var h2 = e2;
          e2 = function() {
            var a2 = hl(g2);
            h2.call(a2);
          };
        }
        gl(b2, g2, a, e2);
      } else
        g2 = rl(c2, b2, a, e2, d2);
      return hl(g2);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b2 = a.stateNode;
          if (b2.current.memoizedState.isDehydrated) {
            var c2 = tc(b2.pendingLanes);
            0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
          }
          break;
        case 13:
          Sk(function() {
            var b3 = Zg(a, 1);
            if (null !== b3) {
              var c3 = L();
              mh(b3, a, 1, c3);
            }
          }), jl(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b2 = Zg(a, 134217728);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 134217728, c2);
        }
        jl(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b2 = lh(a), c2 = Zg(a, b2);
        if (null !== c2) {
          var d2 = L();
          mh(c2, a, b2, d2);
        }
        jl(a, b2);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b2) {
      var c2 = C;
      try {
        return C = a, b2();
      } finally {
        C = c2;
      }
    };
    yb = function(a, b2, c2) {
      switch (b2) {
        case "input":
          bb(a, c2);
          b2 = c2.name;
          if ("radio" === c2.type && null != b2) {
            for (c2 = a; c2.parentNode; )
              c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
            for (b2 = 0; b2 < c2.length; b2++) {
              var d2 = c2[b2];
              if (d2 !== a && d2.form === a.form) {
                var e2 = Db(d2);
                if (!e2)
                  throw Error(p(90));
                Wa(d2);
                bb(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c2);
          break;
        case "select":
          b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
      }
    };
    Gb = Rk;
    Hb = Sk;
    var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
    var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wl.isDisabled && wl.supportsFiber)
        try {
          kc = wl.inject(vl), lc = wl;
        } catch (a) {
        }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
    reactDom_production_min.createPortal = function(a, b2) {
      var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!ol(b2))
        throw Error(p(200));
      return dl(a, b2, null, c2);
    };
    reactDom_production_min.createRoot = function(a, b2) {
      if (!ol(a))
        throw Error(p(299));
      var c2 = false, d2 = "", e2 = ll;
      null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
      b2 = cl(a, 1, false, null, null, c2, false, d2, e2);
      a[uf] = b2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ml(b2);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a)
        return null;
      if (1 === a.nodeType)
        return a;
      var b2 = a._reactInternals;
      if (void 0 === b2) {
        if ("function" === typeof a.render)
          throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b2);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Sk(a);
    };
    reactDom_production_min.hydrate = function(a, b2, c2) {
      if (!pl(b2))
        throw Error(p(200));
      return sl(null, a, b2, true, c2);
    };
    reactDom_production_min.hydrateRoot = function(a, b2, c2) {
      if (!ol(a))
        throw Error(p(405));
      var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
      null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
      b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
      a[uf] = b2.current;
      sf(a);
      if (d2)
        for (a = 0; a < d2.length; a++)
          c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
            c2,
            e2
          );
      return new nl(b2);
    };
    reactDom_production_min.render = function(a, b2, c2) {
      if (!pl(b2))
        throw Error(p(200));
      return sl(null, a, b2, false, c2);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!pl(a))
        throw Error(p(40));
      return a._reactRootContainer ? (Sk(function() {
        sl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Rk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
      if (!pl(c2))
        throw Error(p(200));
      if (null == a || void 0 === a._reactInternals)
        throw Error(p(38));
      return sl(a, b2, c2, false, d2);
    };
    reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
    (function(module2) {
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      {
        checkDCE();
        module2.exports = reactDom_production_min;
      }
    })(reactDom);
    const amET = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "መንገድ አሳይ"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "ወደ መጀመሪያው ገጽ ይሂዱ";
              }
              if (type === "last") {
                return "ወደ መጨረሻው ገጽ ይሂዱ";
              }
              if (type === "next") {
                return "ወደ ቀጣዩ ገጽ ይሂዱ";
              }
              return "ወደ ቀዳሚው ገጽ ይሂዱ";
            },
            labelRowsPerPage: "ረድፎች በአንድ ገጽ:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}-${to} ከ ${count !== -1 ? count : `${to} በላይ`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ኮከ${value !== 1 ? "ቦች" : "ብ"}`,
            emptyLabelText: "ባዶ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "አጽዳ",
            closeText: "ዝጋ",
            loadingText: "በመጫን ላይ…",
            noOptionsText: "አማራጮች የሉም",
            openText: "ክፈት"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "ዝጋ"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "የገጽ አሰሳ",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "ወደ "}ገጽ ${page}${selected ? "" : " ሂድ"}`;
              }
              if (type === "first") {
                return "ወደ መጀመሪያው ገጽ ይሂዱ";
              }
              if (type === "last") {
                return "ወደ መጨረሻው ገጽ ይሂዱ";
              }
              if (type === "next") {
                return "ወደ ቀጣዩ ገጽ ይሂዱ";
              }
              return "ወደ ቀዳሚው ገጽ ይሂዱ";
            }
          }
        }
      }
    };
    const arEG = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "إظهار المسار"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "انتقل إلى الصفحة الأولى";
              }
              if (type === "last") {
                return "انتقل إلى الصفحة الأخيرة";
              }
              if (type === "next") {
                return "انتقل إلى الصفحة التالية";
              }
              return "انتقل إلى الصفحة السابقة";
            },
            labelRowsPerPage: "عدد الصفوف في الصفحة:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} من ${count !== -1 ? count : ` أكثر من${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "نجوم" : "نجمة"}`,
            emptyLabelText: "فارغ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "مسح",
            closeText: "إغلاق",
            loadingText: "جار التحميل...",
            noOptionsText: "لا يوجد خيارات",
            openText: "فتح"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "إغلاق"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "التنقل عبر الصفحات",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "انتقل إلى "} صفحة ${page}`;
              }
              if (type === "first") {
                return "انتقل إلى الصفحة الأولى";
              }
              if (type === "last") {
                return "انتقل إلى الصفحة الأخيرة";
              }
              if (type === "next") {
                return "انتقل إلى الصفحة التالية";
              }
              return "انتقل  إلى الصفحة السابقة";
            }
          }
        }
      }
    };
    const arSA = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "إظهار المسار"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "الانتقال إلى الصفحة الأولى";
              }
              if (type === "last") {
                return "الانتقال إلى الصفحة الأخيرة";
              }
              if (type === "next") {
                return "الانتقال إلى الصفحة التالية";
              }
              return "الانتقال إلى الصفحة السابقة";
            },
            labelRowsPerPage: "عدد الصفوف في الصفحة:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} من ${count !== -1 ? count : ` أكثر من${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "نجوم" : "نجمة"}`,
            emptyLabelText: "فارغ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "مسح",
            closeText: "إغلاق",
            loadingText: "جار التحميل...",
            noOptionsText: "لا توجد خيارات",
            openText: "فتح"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "إغلاق"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "التنقل عبر الصفحات",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "الانتقال إلى "} صفحة ${page}`;
              }
              if (type === "first") {
                return "الانتقال إلى الصفحة الأولى";
              }
              if (type === "last") {
                return "الانتقال الي الصفحة الأخيرة";
              }
              if (type === "next") {
                return "الانتقال إلى الصفحة التالية";
              }
              return "الانتقال إلى الصفحة السابقة";
            }
          }
        }
      }
    };
    const arSD = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "إظهار المسار"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "انتقل إلى الصفحة الأولى";
              }
              if (type === "last") {
                return "انتقل إلى الصفحة الأخيرة";
              }
              if (type === "next") {
                return "انتقل إلى الصفحة التالية";
              }
              return "انتقل إلى الصفحة السابقة";
            },
            labelRowsPerPage: "عدد الصفوف في الصفحة:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} من ${count !== -1 ? count : ` أكثر من${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "نجوم" : "نجمة"}`,
            emptyLabelText: "فارغ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "مسح",
            closeText: "إغلاق",
            loadingText: "جار التحميل...",
            noOptionsText: "لا يوجد خيارات",
            openText: "فتح"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "إغلاق"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "التنقل عبر الصفحات",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "انتقل إلى "} صفحة ${page}`;
              }
              if (type === "first") {
                return "انتقل إلى الصفحة الأولى";
              }
              if (type === "last") {
                return "انتقل الي الصفحة الأخيرة";
              }
              if (type === "next") {
                return "انتقل إلى الصفحة التالية";
              }
              return "انتقل إلى الصفحة السابقة";
            }
          }
        }
      }
    };
    const azAZ = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Yolu göstər"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Birinci səhifəyə keç";
              }
              if (type === "last") {
                return "Sonuncu səhifəyə keç";
              }
              if (type === "next") {
                return "Növbəti səhifəyə keç";
              }
              return "Əvvəlki səhifəyə keç";
            },
            labelRowsPerPage: "Səhifəyə düşən sətrlər:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} dən ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              let pluralForm = "Ulduz";
              const lastDigit = value % 10;
              if (lastDigit > 1 && lastDigit < 5) {
                pluralForm = "Ulduzlar";
              }
              return `${value} ${pluralForm}`;
            },
            emptyLabelText: "Boş"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Silmək",
            closeText: "Bağlamaq",
            loadingText: "Yüklənir…",
            noOptionsText: "Seçimlər mövcud deyil",
            openText: "Открыть"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Bağlamaq"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Səhifənin naviqasiyası",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${page} ${selected ? "səhifə" : "səhifəyə keç"}`;
              }
              if (type === "first") {
                return "Birinci səhifəyə keç";
              }
              if (type === "last") {
                return "Sonuncu səhifəyə keç";
              }
              if (type === "next") {
                return "Növbəti səhifəyə keç";
              }
              return "Əvvəlki səhifəyə keç";
            }
          }
        }
      }
    };
    const bnBD = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "পথ দেখান"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "প্রথম পৃষ্ঠায় যান";
              }
              if (type === "last") {
                return "শেষ পৃষ্ঠায় যান";
              }
              if (type === "next") {
                return "পরবর্তী পৃষ্ঠায় যান";
              }
              return "আগের পৃষ্ঠায় যান";
            },
            labelRowsPerPage: "প্রতি পৃষ্ঠায় সারি:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} / ${count !== -1 ? count : `${to} থেকে বেশি`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} স্টার`,
            emptyLabelText: "খালি"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "পরিষ্কার করুন",
            closeText: "বন্ধ করুন",
            loadingText: "লোড হচ্ছে…",
            noOptionsText: "কোন অপশন নেই",
            openText: "ওপেন করুন"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "বন্ধ করুন"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "পেজিনেশন নেভিগেশন",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "যান "}পৃষ্ঠা ${page}-এ`;
              }
              if (type === "first") {
                return "প্রথম পৃষ্ঠায় যান";
              }
              if (type === "last") {
                return "শেষ পৃষ্ঠায় যান";
              }
              if (type === "next") {
                return "পরবর্তী পৃষ্ঠায় যান";
              }
              return "আগের পৃষ্ঠায় যান";
            }
          }
        }
      }
    };
    const beBY = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Паказаць шлях"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Перайсці на першую старонку";
              }
              if (type === "last") {
                return "Перайсці на апошнюю старонку";
              }
              if (type === "next") {
                return "Перайсці на наступную старонку";
              }
              return "Перайсці на папярэднюю старонку";
            },
            labelRowsPerPage: "Радкоў на старонцы:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} з ${count !== -1 ? count : `больш чым ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              let pluralForm = "Зорак";
              const lastDigit = value % 10;
              if (lastDigit > 1 && lastDigit < 5 && (value < 10 || value > 20)) {
                pluralForm = "Зоркі";
              } else if (lastDigit === 1 && value % 100 !== 11) {
                pluralForm = "Зорка";
              }
              return `${value} ${pluralForm}`;
            },
            emptyLabelText: "Рэйтынг адсутнічае"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Ачысціць",
            closeText: "Закрыць",
            loadingText: "Загрузка…",
            noOptionsText: "Няма варыянтаў",
            openText: "Адкрыць"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Закрыць"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Навігацыя па старонкам",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                if (selected) {
                  return `${page} старонка`;
                }
                return `Перайсці на ${page} старонку`;
              }
              if (type === "first") {
                return "Перайсці на першую старонку";
              }
              if (type === "last") {
                return "Перайсці на апошнюю старонку";
              }
              if (type === "next") {
                return "Перайсці на наступную старонку";
              }
              return "Перайсці на папярэднюю старонку";
            }
          }
        }
      }
    };
    const bgBG = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Показване на пътя"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Отиди на първата страница";
              }
              if (type === "last") {
                return "Отиди на последната страница";
              }
              if (type === "next") {
                return "Отиди на следващата страница";
              }
              return "Отиди на предишната страница";
            },
            labelRowsPerPage: "Редове на страница:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} от ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Звезд${value !== 1 ? "и" : "а"}`,
            emptyLabelText: "Изчисти"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Изчисти",
            closeText: "Затвори",
            loadingText: "Зареждане…",
            noOptionsText: "Няма налични опции",
            openText: "Отвори"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Затвори"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Пагинация",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Към "}страница ${page}`;
              }
              if (type === "first") {
                return "Отиди на първата страница";
              }
              if (type === "last") {
                return "Отиди на последната страница";
              }
              if (type === "next") {
                return "Отиди на следващата страница";
              }
              return "Отиди на предишната страница";
            }
          }
        }
      }
    };
    const caES = {
      components: {
        // MuiBreadcrumbs: {
        //   defaultProps: {
        //    expandText: 'Show path',
        //   },
        // },
        MuiTablePagination: {
          defaultProps: {
            // getItemAriaLabel: (type) => {
            //   if (type === 'first') {
            //     return 'Go to first page';
            //   }
            //   if (type === 'last') {
            //     return 'Go to last page';
            //   }
            //   if (type === 'next') {
            //     return 'Go to next page';
            //   }
            //   // if (type === 'previous') {
            //   return 'Go to previous page';
            // },
            labelRowsPerPage: "Files per pàgina:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} de ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "Estrelles" : "Estrella"}`,
            emptyLabelText: "Buit"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Netejar",
            closeText: "Tancar",
            loadingText: "Carregant…",
            noOptionsText: "Sense opcions",
            openText: "Obert"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Tancat"
          }
        }
        // MuiPagination: {
        //   defaultProps: {
        //     'aria-label': 'Pagination navigation',
        //     getItemAriaLabel: (type, page, selected) => {
        //       if (type === 'page') {
        //         return `${selected ? '' : 'Go to '}page ${page}`;
        //       }
        //       if (type === 'first') {
        //         return 'Go to first page';
        //       }
        //       if (type === 'last') {
        //         return 'Go to last page';
        //       }
        //       if (type === 'next') {
        //         return 'Go to next page';
        //       }
        //       // if (type === 'previous') {
        //       return 'Go to previous page';
        //     },
        //   },
        // },
      }
    };
    const csCZ = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Ukázat cestu"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Jít na první stránku";
              }
              if (type === "last") {
                return "Jít na poslední stránku";
              }
              if (type === "next") {
                return "Jít na další stránku";
              }
              return "Jít na předchozí stránku";
            },
            labelRowsPerPage: "Řádků na stránce:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} z ${count !== -1 ? count : `více než ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              if (value === 1) {
                return `${value} hvězdička`;
              }
              if (value >= 2 && value <= 4) {
                return `${value} hvězdičky`;
              }
              return `${value} hvězdiček`;
            },
            emptyLabelText: "Prázdné"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Vymazat",
            closeText: "Zavřít",
            loadingText: "Načítání…",
            noOptionsText: "Žádné možnosti",
            openText: "Otevřít"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Zavřít"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigace stránkováním",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Jít na "}${page}. stránku`;
              }
              if (type === "first") {
                return "Jít na první stránku";
              }
              if (type === "last") {
                return "Jít na poslední stránku";
              }
              if (type === "next") {
                return "Jít na další stránku";
              }
              return "Jít na předchozí stránku";
            }
          }
        }
      }
    };
    const daDK = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Vis sti"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Gå til den første side";
              }
              if (type === "last") {
                return "Gå til den sidste side";
              }
              if (type === "next") {
                return "Gå til den næste side";
              }
              return "Gå til den forrige side";
            },
            labelRowsPerPage: "Rækker pr side:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}-${to} af ${count !== -1 ? count : `mere end ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Stjern${value !== 1 ? "er" : ""}`,
            emptyLabelText: "Tom"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Slet",
            closeText: "Luk",
            loadingText: "Indlæser…",
            noOptionsText: "Ingen muligheder",
            openText: "Åben"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Luk"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Sideinddelings navigation",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Go to "}page ${page}`;
              }
              if (type === "first") {
                return "Gå til den første side";
              }
              if (type === "last") {
                return "Gå til den sidste side";
              }
              if (type === "next") {
                return "Gå til den næste side";
              }
              return "Gå til den forrige side";
            }
          }
        }
      }
    };
    const deDE = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Pfad anzeigen"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Zur ersten Seite";
              }
              if (type === "last") {
                return "Zur letzten Seite";
              }
              if (type === "next") {
                return "Zur nächsten Seite";
              }
              return "Zur vorherigen Seite";
            },
            labelRowsPerPage: "Zeilen pro Seite:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} von ${count !== -1 ? count : `mehr als ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "Sterne" : "Stern"}`,
            emptyLabelText: "Keine Wertung"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Leeren",
            closeText: "Schließen",
            loadingText: "Wird geladen…",
            noOptionsText: "Keine Optionen",
            openText: "Öffnen"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Schließen"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigation via Seitennummerierung",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Gehe zu "}Seite ${page}`;
              }
              if (type === "first") {
                return "Zur ersten Seite";
              }
              if (type === "last") {
                return "Zur letzten Seite";
              }
              if (type === "next") {
                return "Zur nächsten Seite";
              }
              return "Zur vorherigen Seite";
            }
          }
        }
      }
    };
    const elGR = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Εμφάνιση διαδρομής"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Πρώτη σελίδα";
              }
              if (type === "last") {
                return "Τελευταία σελίδα";
              }
              if (type === "next") {
                return "Επόμενη σελίδα";
              }
              return "Προηγούμενη σελίδα";
            },
            labelRowsPerPage: "Γραμμές ανα σελίδα:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} από ${count !== -1 ? count : `πάνω από ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Αστέρι${value !== 1 ? "α" : ""}`,
            emptyLabelText: "Χωρίς βαθμολόγηση"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Καθαρισμός",
            closeText: "Κλείσιμο",
            loadingText: "Φόρτωση…",
            noOptionsText: "Δεν υπάρχουν επιλογές",
            openText: "Άνοιγμα"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Κλείσιμο"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Πλοήγηση σε σελίδες",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Μετάβαση "}σελίδα ${page}`;
              }
              if (type === "first") {
                return "Πρώτη σελίδα";
              }
              if (type === "last") {
                return "Τελευταία σελίδα";
              }
              if (type === "next") {
                return "Επόμενη σελίδα";
              }
              return "Προηγούμενη σελίδα";
            }
          }
        }
      }
    };
    const enUS$1 = {
      /*
      components: {
        MuiBreadcrumbs: { defaultProps: {
          expandText: 'Show path',
        }},
        MuiTablePagination: { defaultProps: {
          getItemAriaLabel: (type) => {
            if (type === 'first') {
              return 'Go to first page';
            }
            if (type === 'last') {
              return 'Go to last page';
            }
            if (type === 'next') {
              return 'Go to next page';
            }
            // if (type === 'previous') {
            return 'Go to previous page';
          },
          labelRowsPerPage: 'Rows per page:',
          labelDisplayedRows: ({ from, to, count }) =>
      `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`,
        }},
        MuiRating: { defaultProps: {
          getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
          emptyLabelText: 'Empty',
        }},
        MuiAutocomplete: { defaultProps: {
          clearText: 'Clear',
          closeText: 'Close',
          loadingText: 'Loading…',
          noOptionsText: 'No options',
          openText: 'Open',
        }},
        MuiAlert: { defaultProps: {
          closeText: 'Close',
        }},
        MuiPagination: {  defaultProps: {
          'aria-label': 'Pagination navigation',
          getItemAriaLabel: (type, page, selected) => {
            if (type === 'page') {
              return `${selected ? '' : 'Go to '}page ${page}`;
            }
            if (type === 'first') {
              return 'Go to first page';
            }
            if (type === 'last') {
              return 'Go to last page';
            }
            if (type === 'next') {
              return 'Go to next page';
            }
            // if (type === 'previous') {
            return 'Go to previous page';
          },
        }},
      },
      */
    };
    const esES = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Mostrar ruta"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Ir a la primera página";
              }
              if (type === "last") {
                return "Ir a la última página";
              }
              if (type === "next") {
                return "Ir a la página siguiente";
              }
              return "Ir a la página anterior";
            },
            labelRowsPerPage: "Filas por página:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} de ${count !== -1 ? count : `más de ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Estrella${value !== 1 ? "s" : ""}`,
            emptyLabelText: "Vacío"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Limpiar",
            closeText: "Cerrar",
            loadingText: "Cargando…",
            noOptionsText: "Sin opciones",
            openText: "Abierto"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Cerrar"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Paginador",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Ir a la "}página ${page}`;
              }
              if (type === "first") {
                return "Ir a la primera página";
              }
              if (type === "last") {
                return "Ir a la última página";
              }
              if (type === "next") {
                return "Ir a la página siguiente";
              }
              return "Ir a la página anterior";
            }
          }
        }
      }
    };
    const etEE = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Näita teed"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Vali esimene lehekülg";
              }
              if (type === "last") {
                return "Vali viimane lehekülg";
              }
              if (type === "next") {
                return "Vali järgmine lehekülg";
              }
              return "Vali eelmine lehekülg";
            },
            labelRowsPerPage: "Ridu leheküljel:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} / ${count !== -1 ? count : `rohkem kui ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Tärn${value !== 1 ? "i" : ""}`,
            emptyLabelText: "Tühi"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Tühjenda",
            closeText: "Sulge",
            loadingText: "Laen…",
            noOptionsText: "Valikuid ei ole",
            openText: "Ava"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Sulge"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Lehekülgede valik",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Vali "}lehekülg ${page}`;
              }
              if (type === "first") {
                return "Vali esimene lehekülg";
              }
              if (type === "last") {
                return "Vali viimane lehekülg";
              }
              if (type === "next") {
                return "Vali järgmine lehekülg";
              }
              return "Vali eelmine lehekülg";
            }
          }
        }
      }
    };
    const faIR = {
      components: {
        // MuiBreadcrumbs: {
        //   defaultProps: {
        //     expandText: 'Show path',
        //   },
        // },
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "نمایش مسیر"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "رفتن به اولین صفحه";
              }
              if (type === "last") {
                return "رفتن به آخرین صفحه";
              }
              if (type === "next") {
                return "رفتن به صفحه‌ی بعدی";
              }
              return "رفتن به صفحه‌ی قبلی";
            },
            labelRowsPerPage: "تعداد سطرهای هر صفحه:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} از ${count !== -1 ? count : `بیشتر از ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ستاره`,
            emptyLabelText: "خالی"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "پاک‌کردن",
            closeText: "بستن",
            loadingText: "در حال بارگذاری…",
            noOptionsText: "بی‌نتیجه",
            openText: "بازکردن"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "بستن"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "ناوبری صفحه",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "رفتن به "}صفحهٔ ${page}`;
              }
              if (type === "first") {
                return "رفتن به اولین صفحه";
              }
              if (type === "last") {
                return "رفتن به آخرین صفحه";
              }
              if (type === "next") {
                return "رفتن به صفحه‌ی بعدی";
              }
              return "رفتن به صفحه‌ی قبلی";
            }
          }
        }
      }
    };
    const fiFI = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Näytä reitti"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Mene ensimmäiselle sivulle";
              }
              if (type === "last") {
                return "Mene viimeiselle sivulle";
              }
              if (type === "next") {
                return "Mene seuraavalle sivulle";
              }
              return "Mene edelliselle sivulle";
            },
            labelRowsPerPage: "Rivejä per sivu:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} / ${count !== -1 ? count : `enemmän kuin ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Täht${value !== 1 ? "eä" : "i"}`,
            emptyLabelText: "Tyhjä"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Tyhjennä",
            closeText: "Sulje",
            loadingText: "Ladataan…",
            noOptionsText: "Ei valintoja",
            openText: "Avaa"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Sulje"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Sivutus navigaatio",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "sivu" : "Mene sivulle"} ${page}`;
              }
              if (type === "first") {
                return "Mene ensimmäiselle sivulle";
              }
              if (type === "last") {
                return "Mene viimeiselle sivulle";
              }
              if (type === "next") {
                return "Mene seuraavalle sivulle";
              }
              return "Mene edelliselle sivulle";
            }
          }
        }
      }
    };
    const frFR = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Montrer le chemin"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Aller à la première page";
              }
              if (type === "last") {
                return "Aller à la dernière page";
              }
              if (type === "next") {
                return "Aller à la page suivante";
              }
              return "Aller à la page précédente";
            },
            labelRowsPerPage: "Lignes par page :",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} sur ${count !== -1 ? count : `plus que ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Etoile${value !== 1 ? "s" : ""}`,
            emptyLabelText: "Vide"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Vider",
            closeText: "Fermer",
            loadingText: "Chargement…",
            noOptionsText: "Pas de résultats",
            openText: "Ouvrir"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Fermer"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "navigation de pagination",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Aller à la "}page ${page}`;
              }
              if (type === "first") {
                return "Aller à la première page";
              }
              if (type === "last") {
                return "Aller à la dernière page";
              }
              if (type === "next") {
                return "Aller à la page suivante";
              }
              return "Aller à la page précédente";
            }
          }
        }
      }
    };
    const heIL = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "הצג נתיב"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "לעמוד הראשון";
              }
              if (type === "last") {
                return "לעמוד האחרון";
              }
              if (type === "next") {
                return "לעמוד הבא";
              }
              return "לעמוד הקודם";
            },
            labelRowsPerPage: "שורות בעמוד:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} מתוך ${count !== -1 ? count : `יותר מ ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} כוכב${value !== 1 ? "ים" : ""}`,
            emptyLabelText: "ריק"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "נקה",
            closeText: "סגור",
            loadingText: "טוען…",
            noOptionsText: "אין אופציות",
            openText: "פתח"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "סגור"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "ניווט בעמודים",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "ל "}עמוד ${page}`;
              }
              if (type === "first") {
                return "לעמוד הראשון";
              }
              if (type === "last") {
                return "לעמוד האחרון";
              }
              if (type === "next") {
                return "לעמוד הבא";
              }
              return "לעמוד הקודם";
            }
          }
        }
      }
    };
    const hiIN = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "रास्ता दिखायें"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "पहले पृष्ठ पर जाएँ";
              }
              if (type === "last") {
                return "अंतिम पृष्ठ पर जाएँ";
              }
              if (type === "next") {
                return "अगले पृष्ठ पर जाएँ";
              }
              return "पिछले पृष्ठ पर जाएँ";
            },
            labelRowsPerPage: "पंक्तियाँ प्रति पृष्ठ:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}-${to === -1 ? count : to} कुल ${count} में`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} तार${value !== 1 ? "े" : "ा"}`,
            emptyLabelText: "रिक्त"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "हटायें",
            closeText: "बंद करें",
            loadingText: "लोड हो रहा है…",
            noOptionsText: "कोई विकल्प नहीं",
            openText: "खोलें"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "बंद करें"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "पृस्ठानुसार संचालन",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `पृष्ठ ${page} ${selected ? "" : " पर जाएँ"}`;
              }
              if (type === "first") {
                return "पहले पृष्ठ पर जाएँ";
              }
              if (type === "last") {
                return "अंतिम पृष्ठ पर जाएँ";
              }
              if (type === "next") {
                return "अगले पृष्ठ पर जाएँ";
              }
              return "पिछले पृष्ठ पर जाएँ";
            }
          }
        }
      }
    };
    const hrHR = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Pokaži putanju"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Idi na prvu stranicu";
              }
              if (type === "last") {
                return "Idi na posljednju stranicu";
              }
              if (type === "next") {
                return "Idi na sljedeću stranicu";
              }
              return "Idi na prethodnu stranicu";
            },
            labelRowsPerPage: "Redova po stranici:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} od ${count !== -1 ? count : `više nego ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              const lastDigit = value % 10;
              const lastTwoDigits = value % 100;
              if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
                return "Zvijezde";
              }
              return "Zvijezda";
            },
            emptyLabelText: "Prazno"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Briši",
            closeText: "Zatvori",
            loadingText: "Učitavanje…",
            noOptionsText: "Nema opcija",
            openText: "Otvori"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Zatvori"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigacija po stranicama",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Idi na "}stranicu ${page}`;
              }
              if (type === "first") {
                return "Idi na prvu stranicu";
              }
              if (type === "last") {
                return "Idi na zadnju stranicu";
              }
              if (type === "next") {
                return "Idi na sljedeću stranicu";
              }
              return "Idi na prethodnu stranicu";
            }
          }
        }
      }
    };
    const huHU = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Útvonal"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Első oldalra";
              }
              if (type === "last") {
                return "Utolsó oldalra";
              }
              if (type === "next") {
                return "Következő oldalra";
              }
              return "Előző oldalra";
            },
            labelRowsPerPage: "Sorok száma:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} / ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Csillag`,
            emptyLabelText: "Üres"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Törlés",
            closeText: "Bezárás",
            loadingText: "Töltés…",
            noOptionsText: "Nincs találat",
            openText: "Megnyitás"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Bezárás"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Lapozás",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${page}. oldal${selected ? "" : "ra"}`;
              }
              if (type === "first") {
                return "Első oldalra";
              }
              if (type === "last") {
                return "Utolsó oldalra";
              }
              if (type === "next") {
                return "Következő oldalra";
              }
              return "Előző oldalra";
            }
          }
        }
      }
    };
    const hyAM = {
      components: {
        // MuiBreadcrumbs: {
        //   defaultProps: {
        //     expandText: 'Show path',
        //   },
        // },
        MuiTablePagination: {
          defaultProps: {
            // getItemAriaLabel: (type) => {
            //   if (type === 'first') {
            //     return 'Go to first page';
            //   }
            //   if (type === 'last') {
            //     return 'Go to last page';
            //   }
            //   if (type === 'next') {
            //     return 'Go to next page';
            //   }
            //   // if (type === 'previous') {
            //   return 'Go to previous page';
            // },
            labelRowsPerPage: "Տողեր մեկ էջում`"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} / ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Աստղ`,
            emptyLabelText: "Դատարկ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Մաքրել",
            closeText: "Փակել",
            loadingText: "Բեռնում…",
            noOptionsText: "Տարբերակներ չկան",
            openText: "Բացել"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Փակել"
          }
        }
        // MuiPagination: {
        //   defaultProps: {
        //     'aria-label': 'Pagination navigation',
        //     getItemAriaLabel: (type, page, selected) => {
        //       if (type === 'page') {
        //         return `${selected ? '' : 'Go to '}page ${page}`;
        //       }
        //       if (type === 'first') {
        //         return 'Go to first page';
        //       }
        //       if (type === 'last') {
        //         return 'Go to last page';
        //       }
        //       if (type === 'next') {
        //         return 'Go to next page';
        //       }
        //       // if (type === 'previous') {
        //       return 'Go to previous page';
        //     },
        //   },
        // },
      }
    };
    const idID = {
      components: {
        // MuiBreadcrumbs: {
        //   defaultProps: {
        //     expandText: 'Show path',
        //   },
        // },
        MuiTablePagination: {
          defaultProps: {
            // getItemAriaLabel: (type) => {
            //   if (type === 'first') {
            //     return 'Go to first page';
            //   }
            //   if (type === 'last') {
            //     return 'Go to last page';
            //   }
            //   if (type === 'next') {
            //     return 'Go to next page';
            //   }
            //   // if (type === 'previous') {
            //   return 'Go to previous page';
            // },
            labelRowsPerPage: "Baris per halaman:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} dari ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Bintang`
            // emptyLabelText: 'Empty',
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Hapus",
            closeText: "Tutup",
            loadingText: "Memuat…",
            noOptionsText: "Tidak ada opsi",
            openText: "Buka"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Tutup"
          }
        }
        // MuiPagination: {
        //   defaultProps: {
        //     'aria-label': 'Pagination navigation',
        //     getItemAriaLabel: (type, page, selected) => {
        //       if (type === 'page') {
        //         return `${selected ? '' : 'Go to '}page ${page}`;
        //       }
        //       if (type === 'first') {
        //         return 'Go to first page';
        //       }
        //       if (type === 'last') {
        //         return 'Go to last page';
        //       }
        //       if (type === 'next') {
        //         return 'Go to next page';
        //       }
        //       // if (type === 'previous') {
        //       return 'Go to previous page';
        //     },
        //   },
        // },
      }
    };
    const isIS = {
      components: {
        // MuiBreadcrumbs: {
        //   defaultProps: {
        //    expandText: 'Show path',
        //   },
        // },
        MuiTablePagination: {
          defaultProps: {
            // getItemAriaLabel: (type) => {
            //   if (type === 'first') {
            //     return 'Go to first page';
            //   }
            //   if (type === 'last') {
            //     return 'Go to last page';
            //   }
            //   if (type === 'next') {
            //     return 'Go to next page';
            //   }
            //   // if (type === 'previous') {
            //   return 'Go to previous page';
            // },
            labelRowsPerPage: "Raðir á síðu:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} af ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value === 1 ? "Stjarna" : "Stjörnur"}`,
            emptyLabelText: "Tómt"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Hreinsa",
            closeText: "Loka",
            loadingText: "Hlaða…",
            noOptionsText: "Engar niðurstöður",
            openText: "Opna"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Loka"
          }
        }
        // MuiPagination: {
        //   defaultProps: {
        //     'aria-label': 'Pagination navigation',
        //     getItemAriaLabel: (type, page, selected) => {
        //       if (type === 'page') {
        //         return `${selected ? '' : 'Go to '}page ${page}`;
        //       }
        //       if (type === 'first') {
        //         return 'Go to first page';
        //       }
        //       if (type === 'last') {
        //         return 'Go to last page';
        //       }
        //       if (type === 'next') {
        //         return 'Go to next page';
        //       }
        //       // if (type === 'previous') {
        //       return 'Go to previous page';
        //     },
        //   },
        // },
      }
    };
    const itIT = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Visualizza percorso"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Vai alla prima pagina";
              }
              if (type === "last") {
                return "Vai all'ultima pagina";
              }
              if (type === "next") {
                return "Vai alla pagina successiva";
              }
              return "Vai alla pagina precedente";
            },
            labelRowsPerPage: "Righe per pagina:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} di ${count !== -1 ? count : `più di ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Stell${value !== 1 ? "e" : "a"}`,
            emptyLabelText: "Vuoto"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Svuota",
            closeText: "Chiudi",
            loadingText: "Caricamento in corso…",
            noOptionsText: "Nessuna opzione",
            openText: "Apri"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Chiudi"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigazione impaginata",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Vai alla "}pagina ${page}`;
              }
              if (type === "first") {
                return "Vai alla prima pagina";
              }
              if (type === "last") {
                return "Vai all'ultima pagina";
              }
              if (type === "next") {
                return "Vai alla pagina successiva";
              }
              return "Vai alla pagina precedente";
            }
          }
        }
      }
    };
    const jaJP = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "すべて表示"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "最初のページへ";
              }
              if (type === "last") {
                return "最後のページへ";
              }
              if (type === "next") {
                return "次のページへ";
              }
              return "前のページへ";
            },
            labelRowsPerPage: "ページあたりの行数:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}～${to} / ${count !== -1 ? count : `${to}以上`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `星${value}`,
            emptyLabelText: "星なし"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "クリア",
            closeText: "閉じる",
            loadingText: "読み込み中…",
            noOptionsText: "データがありません",
            openText: "開く"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "閉じる"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "ページ選択",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `ページ${page}${selected ? "" : "へ"}`;
              }
              if (type === "first") {
                return "最初のページへ";
              }
              if (type === "last") {
                return "最後のページへ";
              }
              if (type === "next") {
                return "次のページへ";
              }
              return "前のページへ";
            }
          }
        }
      }
    };
    const khKH = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "បង្ហាញផ្លូវ"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "ទៅទំព័រដំបូង";
              }
              if (type === "last") {
                return "ទៅទំព័រចុងក្រោយ";
              }
              if (type === "next") {
                return "ទៅទំព័របន្ទាប់";
              }
              return "ទៅទំព័រមុន";
            },
            labelRowsPerPage: "ចំនួនជួរដេកក្នុងមួយទំព័រ:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2} - ${to} នៃ ${count !== -1 ? count : `ច្រើនជាង ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ផ្កាយ${value !== 1 ? "" : ""}`,
            emptyLabelText: "ទទេ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "លុបចោល",
            closeText: "បិទ",
            loadingText: "កំពុងលោត…",
            noOptionsText: "គ្មានជម្រើស",
            openText: "បើក"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "បិទ"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "រុករកទំព័រ",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "ទៅ "}ទំព័រ ${page}`;
              }
              if (type === "first") {
                return "ទៅទំព័រដំបូង";
              }
              if (type === "last") {
                return "ទៅទំព័រចុងក្រោយ";
              }
              if (type === "next") {
                return "ទៅទំព័របន្ទាប់";
              }
              return "ទៅទំព័រមុន";
            }
          }
        }
      }
    };
    const koKR = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "경로 보기"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "첫 번째 페이지로 이동";
              }
              if (type === "last") {
                return "마지막 페이지로 이동";
              }
              if (type === "next") {
                return "다음 페이지로 이동";
              }
              return "이전 페이지로 이동";
            },
            labelRowsPerPage: "페이지 당 행:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} / ${count !== -1 ? count : `${to}개 이상`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} 점`,
            emptyLabelText: "빈 텍스트"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "지우기",
            closeText: "닫기",
            loadingText: "불러오는 중…",
            noOptionsText: "옵션 없음",
            openText: "열기"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "닫기"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "페이지네이션 네비게이션",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${page} 번째 페이지${selected ? "" : "로 이동"}`;
              }
              if (type === "first") {
                return "첫 번째 페이지로 이동";
              }
              if (type === "last") {
                return "마지막 페이지로 이동";
              }
              if (type === "next") {
                return "다음 페이지로 이동";
              }
              return "이전 페이지로 이동";
            }
          }
        }
      }
    };
    const kuCKB = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "ڕێچکە پیشان بدە"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "چوونە یەکەم پەڕە";
              }
              if (type === "last") {
                return "چوونە کۆتا پەڕە";
              }
              if (type === "next") {
                return "چوونە پەڕەی دواتر";
              }
              return "گەڕانەوە بۆ پەڕەی پێشوو";
            },
            labelRowsPerPage: "ژمارەی ڕیزەکان لە هەر پەڕەیەک:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} لە ${count !== -1 ? count : ` زیاترە لە${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "ئەستێرەکان" : "ئەستێرە"}`,
            emptyLabelText: "خاڵیە"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "سڕینەوە",
            closeText: "داخستن",
            loadingText: "لە بارکردندایە...",
            noOptionsText: "هیچ بژاردەیەک نیە",
            openText: "کردنەوە"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "داخستن"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "گەڕان لە پەڕەکان",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "چوون بۆ "} پەڕەی ${page}`;
              }
              if (type === "first") {
                return "چوونە یەکەم پەڕە";
              }
              if (type === "last") {
                return "چوونە کۆتا پەڕە";
              }
              if (type === "next") {
                return "چوونە پەڕەی دواتر";
              }
              return "گەڕانەوە بۆ پەڕەی پێشوو";
            }
          }
        }
      }
    };
    const kuLatn = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Rê nîşan bide"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Biçe rûpela yekem";
              }
              if (type === "last") {
                return "Biçe rûpela dawî";
              }
              if (type === "next") {
                return "Biçe rûpela din";
              }
              return "Biçe rûpela berê";
            },
            labelRowsPerPage: "Rêz li ser rûpelê:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} of ${count !== -1 ? count : `zêdetir ji ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Stêrk`,
            emptyLabelText: "Vala"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Paqij bike",
            closeText: "Bigre",
            loadingText: "Tê barkirin…",
            noOptionsText: "Vebijêrk tune",
            openText: "Veke"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Bigre"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navîgasyona rûpelan",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Biçe "}rûpel ${page}`;
              }
              if (type === "first") {
                return "Biçe rûpela yekem";
              }
              if (type === "last") {
                return "Biçe rûpela dawî";
              }
              if (type === "next") {
                return "Biçe rûpela din";
              }
              return "Biçe rûpela berê";
            }
          }
        }
      }
    };
    const kkKZ = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Толық жолды көрсету"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Бірінші бетке өту";
              }
              if (type === "last") {
                return "Соңғы бетке өту";
              }
              if (type === "next") {
                return "Келесі бетке өту";
              }
              return "Алдыңғы бетке өту";
            },
            labelRowsPerPage: "Беттегі қатарлар:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${count !== -1 ? count : `+${to}`} қатардың ішінен ${from2}–${to}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} жұлдыз`,
            emptyLabelText: "Рейтинг жоқ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Тазарту",
            closeText: "Жабу",
            loadingText: "Жүктелуде…",
            noOptionsText: "Қол жетімді нұсқалар жоқ",
            openText: "Ашу"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Жабу"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Беттерді шарлау",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                if (selected) {
                  return `${page} — бет`;
                }
                return `${page} — бетке өту`;
              }
              if (type === "first") {
                return "Бірінші бетке өту";
              }
              if (type === "last") {
                return "Соңғы бетке өту";
              }
              if (type === "next") {
                return "Келесі бетке өту";
              }
              return "Алдыңғы бетке өту";
            }
          }
        }
      }
    };
    const mkMK = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Прикажи патека"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Оди на прва страница";
              }
              if (type === "last") {
                return "Оди на последна страница";
              }
              if (type === "next") {
                return "Оди на следна страница";
              }
              return "Оди на предходна страница";
            },
            labelRowsPerPage: "Редови по страница:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} од ${count !== -1 ? count : `повеќе од ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              const lastDigit = value % 10;
              return `${value} Ѕвезд${lastDigit === 1 ? "а" : "и"}`;
            },
            emptyLabelText: "Празно"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Избриши",
            closeText: "Затвори",
            loadingText: "Се презема",
            noOptionsText: "Нема опција",
            openText: "Отвори"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Затвори"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Навигација низ страници",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Оди на "}страница ${page}`;
              }
              if (type === "first") {
                return "Оди на прва страница";
              }
              if (type === "last") {
                return "Оди на последна страница";
              }
              if (type === "next") {
                return "Оди на следна страница";
              }
              return "Оди на предходна страница";
            }
          }
        }
      }
    };
    const myMY = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "လမ်းကြောင်းပြပါ။"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "ပထမစာမျက်နှာသို့သွားပါ။";
              }
              if (type === "last") {
                return "နောက်ဆုံးစာမျက်နှာသို့သွားပါ။";
              }
              if (type === "next") {
                return "နောက်စာမျက်နှာသို့သွားပါ။";
              }
              return "ယခင်စာမျက်နှာသို့သွားပါ။";
            },
            labelRowsPerPage: "စာမျက်နှာအလိုက် အတန်းများ:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} ၏ ${count !== -1 ? count : `ထက်ပိုပြီး ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              const lastDigit = value % 10;
              return `${value} ကြယ်ပွင့်${lastDigit === 1 ? "၎" : ""}`;
            },
            emptyLabelText: "ဗလာ"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "ရှင်းလင်းသော",
            closeText: "ပိတ်လိုက်",
            loadingText: "ဖွင့်နေသည်…",
            noOptionsText: "ရွေးချယ်ခွင့်မရှိပါ။",
            openText: "ဖွင့်သည်။"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "ပိတ်လိုက်"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Pagination အညွှန်း",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "သွားပါ။ "}စာမျက်နှာ ${page}`;
              }
              if (type === "first") {
                return "ပထမစာမျက်နှာသို့သွားပါ။";
              }
              if (type === "last") {
                return "နောက်ဆုံးစာမျက်နှာသို့သွားပါ။";
              }
              if (type === "next") {
                return "နောက်စာမျက်နှာသို့သွားပါ။";
              }
              return "ယခင်စာမျက်နှာသို့သွားပါ။";
            }
          }
        }
      }
    };
    const msMS = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Tunjukkan laluan"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Pergi ke halaman pertama";
              }
              if (type === "last") {
                return "Pergi ke halaman terakhir";
              }
              if (type === "next") {
                return "Pergi ke halaman seterusnya";
              }
              return "Pergi ke halaman sebelumnya";
            },
            labelRowsPerPage: "Baris setiap halaman:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} daripada ${count !== -1 ? count : `lebih daripada ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              const lastDigit = value % 10;
              return `${value} Bintang${lastDigit === 1 ? "s" : ""}`;
            },
            emptyLabelText: "kosong"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Jelas",
            closeText: "tutup",
            loadingText: "Memuatkan…",
            noOptionsText: "Tiada pilihan",
            openText: "Buka"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "tutup"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigasi penomboran",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Pergi ke "}muka surat ${page}`;
              }
              if (type === "first") {
                return "Pergi ke halaman pertama";
              }
              if (type === "last") {
                return "Pergi ke halaman terakhir";
              }
              if (type === "next") {
                return "Pergi ke halaman seterusnya";
              }
              return "Pergi ke halaman sebelumnya";
            }
          }
        }
      }
    };
    const neNP = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "बाटो देखाउनुहोस्"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "पहिलो पृष्ठमा जानुहोस्";
              }
              if (type === "last") {
                return "अन्तिम पृष्ठमा जानुहोस्";
              }
              if (type === "next") {
                return "अर्को पृष्ठमा जानुहोस्";
              }
              return "अघिल्लो पृष्ठमा जानुहोस्";
            },
            labelRowsPerPage: "प्रति पृष्ठ पङ्क्तिहरू:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} को ${count !== -1 ? count : `धेरै ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              const lastDigit = value % 10;
              return `${value} तारा${lastDigit === 1 ? "स" : ""}`;
            },
            emptyLabelText: "खाली"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "खाली गर्नुहोस्",
            closeText: "बन्द गर्नुहोस्",
            loadingText: "लोड हुँदै...",
            noOptionsText: "कुनै विकल्प छैन",
            openText: "खोल्नुहोस्"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "बन्द गर्नुहोस्"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "पृष्ठांकन नेभिगेसन",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "जाऊ त्यहाँ "}पृष्ठ ${page}`;
              }
              if (type === "first") {
                return "पहिलो पृष्ठमा जानुहोस्";
              }
              if (type === "last") {
                return "अन्तिम पृष्ठमा जानुहोस्";
              }
              if (type === "next") {
                return "अर्को पृष्ठमा जानुहोस्";
              }
              return "अघिल्लो पृष्ठमा जानुहोस्";
            }
          }
        }
      }
    };
    const nbNO = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Vis sti"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Gå til første side";
              }
              if (type === "last") {
                return "Gå til siste side";
              }
              if (type === "next") {
                return "Gå til neste side";
              }
              return "Gå til forrige side";
            },
            labelRowsPerPage: "Rader per side:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} av ${count !== -1 ? count : `mer enn ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Stjerne${value !== 1 ? "r" : ""}`,
            emptyLabelText: "Tom"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Tøm",
            closeText: "Lukk",
            loadingText: "Laster inn…",
            noOptionsText: "Ingen alternativer",
            openText: "Åpne"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Lukk"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Paginering navigasjon",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Gå til "}side ${page}`;
              }
              if (type === "first") {
                return "Gå til første side";
              }
              if (type === "last") {
                return "Gå til siste side";
              }
              if (type === "next") {
                return "Gå til neste side";
              }
              return "Gå til forrige side";
            }
          }
        }
      }
    };
    const nlNL = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Pad tonen"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Ga naar eerste pagina";
              }
              if (type === "last") {
                return "Ga naar laatste pagina";
              }
              if (type === "next") {
                return "Ga naar volgende pagina";
              }
              return "Ga naar vorige pagina";
            },
            labelRowsPerPage: "Regels per pagina:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} van ${count !== -1 ? count : `meer dan ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Ster${value !== 1 ? "ren" : ""}`,
            emptyLabelText: "Leeg"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Wissen",
            closeText: "Sluiten",
            loadingText: "Laden…",
            noOptionsText: "Geen opties",
            openText: "Openen"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Sluiten"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigatie via paginering",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Ga naar "}pagina ${page}`;
              }
              if (type === "first") {
                return "Ga naar eerste pagina";
              }
              if (type === "last") {
                return "Ga naar laatste pagina";
              }
              if (type === "next") {
                return "Ga naar volgende pagina";
              }
              return "Ga naar vorige pagina";
            }
          }
        }
      }
    };
    const plPL = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Pokaż ścieżkę"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Przejdź do pierwszej strony";
              }
              if (type === "last") {
                return "Przejdź do ostatniej strony";
              }
              if (type === "next") {
                return "Przejdź do następnej strony";
              }
              return "Przejdź do poprzedniej strony";
            },
            labelRowsPerPage: "Wierszy na stronę:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} z ${count !== -1 ? count : `ponad ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              let pluralForm = "gwiazdek";
              const lastDigit = value % 10;
              if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
                pluralForm = "gwiazdki";
              } else if (value === 1) {
                pluralForm = "gwiazdka";
              }
              return `${value} ${pluralForm}`;
            },
            emptyLabelText: "Brak gwiazdek"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Wyczyść",
            closeText: "Zamknij",
            loadingText: "Ładowanie…",
            noOptionsText: "Brak opcji",
            openText: "Otwórz"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Zamknij"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Nawigacja podziału na strony",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return selected ? `${page}. strona` : `Przejdź do ${page}. strony`;
              }
              if (type === "first") {
                return "Przejdź do pierwszej strony";
              }
              if (type === "last") {
                return "Przejdź do ostatniej strony";
              }
              if (type === "next") {
                return "Przejdź do następnej strony";
              }
              return "Przejdź do poprzedniej strony";
            }
          }
        }
      }
    };
    const ptBR = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Mostrar caminho"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Ir para a primeira página";
              }
              if (type === "last") {
                return "Ir para a última página";
              }
              if (type === "next") {
                return "Ir para a próxima página";
              }
              return "Ir para a página anterior";
            },
            labelRowsPerPage: "Linhas por página:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} de ${count !== -1 ? count : `mais de ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Estrela${value !== 1 ? "s" : ""}`,
            emptyLabelText: "Vazio"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Limpar",
            closeText: "Fechar",
            loadingText: "Carregando…",
            noOptionsText: "Sem opções",
            openText: "Abrir"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Fechar"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navegar pela paginação",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Ir para a "}página ${page}`;
              }
              if (type === "first") {
                return "Ir para a primeira página";
              }
              if (type === "last") {
                return "Ir para a última página";
              }
              if (type === "next") {
                return "Ir para a próxima página";
              }
              return "Ir para a página anterior";
            }
          }
        }
      }
    };
    const ptPT = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Mostrar caminho"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Primeira página";
              }
              if (type === "last") {
                return "Última página";
              }
              if (type === "next") {
                return "Próxima página";
              }
              return "Página anterior";
            },
            labelRowsPerPage: "Linhas por página:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} de ${count !== -1 ? count : `mais de ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Estrela${value !== 1 ? "s" : ""}`,
            emptyLabelText: "Vazio"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Limpar",
            closeText: "Fechar",
            loadingText: "A carregar…",
            noOptionsText: "Sem opções",
            openText: "Abrir"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Fechar"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navegar por páginas",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Ir para a "}página ${page}`;
              }
              if (type === "first") {
                return "Primeira página";
              }
              if (type === "last") {
                return "Última página";
              }
              if (type === "next") {
                return "Próxima página";
              }
              return "Página anterior";
            }
          }
        }
      }
    };
    const roRO = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Arată calea"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Mergi la prima pagină";
              }
              if (type === "last") {
                return "Mergi la ultima pagină";
              }
              if (type === "next") {
                return "Mergi la pagina următoare";
              }
              return "Mergi la pagina precedentă";
            },
            labelRowsPerPage: "Rânduri pe pagină:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} din ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} St${value !== 1 ? "ele" : "ea"}`,
            emptyLabelText: "Gol"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Șterge",
            closeText: "Închide",
            loadingText: "Se încarcă…",
            noOptionsText: "Nicio opțiune",
            openText: "Deschide"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Închide"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigare prin paginare",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Mergi la "}pagina ${page}`;
              }
              if (type === "first") {
                return "Mergi la prima pagină";
              }
              if (type === "last") {
                return "Mergi la ultima pagină";
              }
              if (type === "next") {
                return "Mergi la pagina următoare";
              }
              return "Mergi la pagina precedentă";
            }
          }
        }
      }
    };
    const srRS = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Pokaži putanju"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Idi na prvu stranicu";
              }
              if (type === "last") {
                return "Idi na poslednju stranicu";
              }
              if (type === "next") {
                return "Idi na sledeću stranicu";
              }
              return "Idi na prethodnu stranicu";
            },
            labelRowsPerPage: "Redova po stranici:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} od ${count !== -1 ? count : `više nego ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              const lastDigit = value % 10;
              const lastTwoDigits = value % 100;
              if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
                return "Zvezde";
              }
              return "Zvezda";
            },
            emptyLabelText: "Prazno"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Briši",
            closeText: "Zatvori",
            loadingText: "Učitavanje…",
            noOptionsText: "Nema opcija",
            openText: "Otvori"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Zatvori"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigacija po stranicama",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Idi na "}stranicu ${page}`;
              }
              if (type === "first") {
                return "Idi na prvu stranicu";
              }
              if (type === "last") {
                return "Idi na zadnju stranicu";
              }
              if (type === "next") {
                return "Idi na sledeću stranicu";
              }
              return "Idi na prethodnu stranicu";
            }
          }
        }
      }
    };
    const ruRU$1 = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Показать полный путь"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Перейти на первую страницу";
              }
              if (type === "last") {
                return "Перейти на последнюю страницу";
              }
              if (type === "next") {
                return "Перейти на следующую страницу";
              }
              return "Перейти на предыдущую страницу";
            },
            labelRowsPerPage: "Строк на странице:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} из ${count !== -1 ? count : `более чем ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              let pluralForm = "Звёзд";
              const lastDigit = value % 10;
              if (lastDigit > 1 && lastDigit < 5) {
                pluralForm = "Звезды";
              } else if (lastDigit === 1) {
                pluralForm = "Звезда";
              }
              return `${value} ${pluralForm}`;
            },
            emptyLabelText: "Рейтинг отсутствует"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Очистить",
            closeText: "Закрыть",
            loadingText: "Загрузка…",
            noOptionsText: "Нет доступных вариантов",
            openText: "Открыть"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Закрыть"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Навигация по страницам",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                if (selected) {
                  return `${page} страница`;
                }
                return `Перейти на ${page} страницу`;
              }
              if (type === "first") {
                return "Перейти на первую страницу";
              }
              if (type === "last") {
                return "Перейти на последнюю страницу";
              }
              if (type === "next") {
                return "Перейти на следующую страницу";
              }
              return "Перейти на предыдущую страницу";
            }
          }
        }
      }
    };
    const siLK = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "ගමන් මඟ පෙන්වන්න"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "පළමු පිටුවට යන්න";
              }
              if (type === "last") {
                return "අවසාන පිටුවට යන්න";
              }
              if (type === "next") {
                return "මීළඟ පිටුවට යන්න";
              }
              return "පෙර පිටුවට යන්න";
            },
            labelRowsPerPage: "පිටුවක පේළි:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} දක්වා ${count !== -1 ? count : `${to} ට වැඩි ප්‍රමාණයකින්`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `තරු ${value}`,
            emptyLabelText: "හිස්"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "මකන්න",
            closeText: "වසන්න",
            loadingText: "නැංවෙමින්…",
            noOptionsText: "විකල්ප නැත",
            openText: "විවෘත කරන්න"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "වසන්න"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "පිටු අතර සංචරණය",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `පිටුව ${page} ${selected ? "" : "ට යන්න"}`;
              }
              if (type === "first") {
                return "පළමු පිටුවට යන්න";
              }
              if (type === "last") {
                return "අවසාන පිටුවට යන්න";
              }
              if (type === "next") {
                return "මීළඟ පිටුවට යන්න";
              }
              return "පෙර පිටුවට යන්න";
            }
          }
        }
      }
    };
    const skSK = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Ukázať cestu "
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Ísť na prvú stránku";
              }
              if (type === "last") {
                return "Ísť na poslednú stránku";
              }
              if (type === "next") {
                return "Ísť na ďaľšiu stránku";
              }
              return "Ísť na predchádzajúcu stránku";
            },
            labelRowsPerPage: "Riadkov na stránke:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} z ${count !== -1 ? count : `viac ako ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              if (value === 1) {
                return `${value} hviezdička`;
              }
              if (value >= 2 && value <= 4) {
                return `${value} hviezdičky`;
              }
              return `${value} hviezdičiek`;
            },
            emptyLabelText: "Prázdne"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Vymazať",
            closeText: "Zavrieť",
            loadingText: "Načítanie…",
            noOptionsText: "Žiadne možnosti",
            openText: "Otvoriť"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Zavrieť"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Navigácia stránkovanim",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Ísť na "}stránku ${page}`;
              }
              if (type === "first") {
                return "Ísť na prvú stránku";
              }
              if (type === "last") {
                return "Ísť na poslednú stránku";
              }
              if (type === "next") {
                return "Ísť na ďaľšiu stránku";
              }
              return "Ísť na predchádzajúcu stránku";
            }
          }
        }
      }
    };
    const svSE = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Visa sökväg"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Gå till första sidan";
              }
              if (type === "last") {
                return "Gå till sista sidan";
              }
              if (type === "next") {
                return "Gå till nästa sida";
              }
              return "Gå till föregående sida";
            },
            labelRowsPerPage: "Rader per sida:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} av ${count !== -1 ? count : `fler än ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ${value !== 1 ? "Stjärnor" : "Stjärna"}`,
            emptyLabelText: "Tom"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Rensa",
            closeText: "Stäng",
            loadingText: "Laddar…",
            noOptionsText: "Inga alternativ",
            openText: "Öppna"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Stäng"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Sidnavigering",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Gå till "}sida ${page}`;
              }
              if (type === "first") {
                return "Gå till första sidan";
              }
              if (type === "last") {
                return "Gå till sista sidan";
              }
              if (type === "next") {
                return "Gå till nästa sida";
              }
              return "Gå till föregående sida";
            }
          }
        }
      }
    };
    const thTH = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "แสดงเส้นทาง"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "ไปที่หน้าแรก";
              }
              if (type === "last") {
                return "ไปที่หน้าสุดท้าย";
              }
              if (type === "next") {
                return "ไปที่หน้าถัดไป";
              }
              return "ไปที่หน้าก่อน";
            },
            labelRowsPerPage: "จำนวนแถวต่อหน้า:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} จาก ${count !== -1 ? count : `มากกว่า ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ดาว`,
            emptyLabelText: "ว่างเปล่า"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "เคลียร์",
            closeText: "ปิด",
            loadingText: "กำลังโหลด…",
            noOptionsText: "ไม่มีตัวเลือก",
            openText: "เปิด"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "ปิด"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "ไปที่"}หน้า ${page}`;
              }
              if (type === "first") {
                return "ไปที่หน้าแรก";
              }
              if (type === "last") {
                return "ไปที่หน้าสุดท้าย";
              }
              if (type === "next") {
                return "ไปที่หน้าถัดไป";
              }
              return "ไปที่หน้าก่อน";
            }
          }
        }
      }
    };
    const trTR = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Yolu göster"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "İlk sayfaya git";
              }
              if (type === "last") {
                return "Son sayfaya git";
              }
              if (type === "next") {
                return "Sonraki sayfaya git";
              }
              return "Önceki sayfaya git";
            },
            labelRowsPerPage: "Sayfa başına satır:"
            // labelDisplayedRows: ({ from, to, count }) =>
            //   `${from}–${to} tanesinden ${count !== -1 ? count : `more than ${to}`}`,
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Yıldız`,
            emptyLabelText: "Boş"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Temizle",
            closeText: "Kapat",
            loadingText: "Yükleniyor…",
            noOptionsText: "Seçenek yok",
            openText: "Aç"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Kapat"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Sayfa navigasyonu",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${page}. ${selected ? "sayfa" : "sayfaya git"}`;
              }
              if (type === "first") {
                return "İlk sayfaya git";
              }
              if (type === "last") {
                return "Son sayfaya git";
              }
              if (type === "next") {
                return "Sonraki sayfaya git";
              }
              return "Önceki sayfaya git";
            }
          }
        }
      }
    };
    const tlTL = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Ipakita ang landas"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Pumunta sa unang pahina";
              }
              if (type === "last") {
                return "Pumunta sa huling pahina";
              }
              if (type === "next") {
                return "Pumunta sa susunod na pahina";
              }
              return "Pumunta sa nakaraang pahina";
            },
            labelRowsPerPage: "Mga hilera bawat pahina:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} ng ${count !== -1 ? count : `higit sa ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} Bituin${value !== 1 ? "s" : ""}`,
            emptyLabelText: "Walang laman"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Maaliwalas",
            closeText: "Isara",
            loadingText: "Naglo-load…",
            noOptionsText: "Walang mga pagpipilian",
            openText: "Bukas"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Isara"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Sayfa navigasyonu",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Pumunta sa"}pahina ${page}`;
              }
              if (type === "first") {
                return "Pumunta sa unang pahina";
              }
              if (type === "last") {
                return "Pumunta sa huling pahina";
              }
              if (type === "next") {
                return "Pumunta sa susunod na pahina";
              }
              return "Pumunta sa nakaraang pahina";
            }
          }
        }
      }
    };
    const ukUA = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Показати шлях сторінок"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Перейти на першу сторінку";
              }
              if (type === "last") {
                return "Перейти на останню сторінку";
              }
              if (type === "next") {
                return "Перейти на наступну сторінку";
              }
              return "Перейти на попередню сторінку";
            },
            labelRowsPerPage: "Рядків на сторінці:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} з ${count !== -1 ? count : `понад ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => {
              let pluralForm = "Зірок";
              const lastDigit = value % 10;
              if (lastDigit > 1 && lastDigit < 5) {
                pluralForm = "Зірки";
              } else if (lastDigit === 1) {
                pluralForm = "Зірка";
              }
              return `${value} ${pluralForm}`;
            },
            emptyLabelText: "Рейтинг відсутній"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Очистити",
            closeText: "Згорнути",
            loadingText: "Завантаження…",
            noOptionsText: "Немає варіантів",
            openText: "Розгорнути"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Згорнути"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Навігація сторінками",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Перейти на "}сторінку ${page}`;
              }
              if (type === "first") {
                return "Перейти на першу сторінку";
              }
              if (type === "last") {
                return "Перейти на останню сторінку";
              }
              if (type === "next") {
                return "Перейти на наступну сторінку";
              }
              return "Перейти на попередню сторінку";
            }
          }
        }
      }
    };
    const urPK = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "راستہ دکھائیں"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "پہلے صفحے پر جائیں";
              }
              if (type === "last") {
                return "آخری صفحے پر جائیں";
              }
              if (type === "next") {
                return "اگلے صفحے پر جائیں";
              }
              return "پچھلے صفحے پر جائیں";
            },
            labelRowsPerPage: "ایک صفحے پر قطاریں:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${count !== -1 ? `${count} میں سے` : `${to} سے ذیادہ میں سے`} ${from2} سے ${to} قطاریں`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} ستار${value !== 1 ? "ے" : "ہ"}`,
            emptyLabelText: "خالی"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "کلئیر",
            closeText: "بند کریں",
            loadingText: "لوڈ ہو رہا ہے۔۔۔",
            noOptionsText: "کوئی آپشن نہیں",
            openText: "کھولیں"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "بند کریں"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "صفحات کی ترتیب",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `صفحہ نمبر ${page}${selected ? "" : " پر جائیں"}`;
              }
              if (type === "first") {
                return "پہلے صفحے پر جائیں";
              }
              if (type === "last") {
                return "آخری صفحے پر جائیں";
              }
              if (type === "next") {
                return "اگلے صفحے پر جائیں";
              }
              return "پچھلے صفحے پر جائیں";
            }
          }
        }
      }
    };
    const viVN = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "Mở ra"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "Tới trang đầu tiên";
              }
              if (type === "last") {
                return "Tới trang cuối cùng";
              }
              if (type === "next") {
                return "Tới trang tiếp theo";
              }
              return "Về trang trước đó";
            },
            labelRowsPerPage: "Số hàng mỗi trang:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2}–${to} trong ${count !== -1 ? count : `nhiều hơn ${to}`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} sao`,
            emptyLabelText: "Không có dữ liệu"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "Xóa",
            closeText: "Đóng",
            loadingText: "Đang tải…",
            noOptionsText: "Không có lựa chọn nào",
            openText: "Mở"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "Đóng"
          }
        },
        MuiPagination: {
          defaultProps: {
            "aria-label": "Thanh điều khiển trang",
            getItemAriaLabel: (type, page, selected) => {
              if (type === "page") {
                return `${selected ? "" : "Tới "}trang ${page}`;
              }
              if (type === "first") {
                return "Tới trang đầu tiên";
              }
              if (type === "last") {
                return "Tới trang cuối cùng";
              }
              if (type === "next") {
                return "Tới trang tiếp theo";
              }
              return "Về trang trước đó";
            }
          }
        }
      }
    };
    const zhCN = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "展开"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "第一页";
              }
              if (type === "last") {
                return "最后一页";
              }
              if (type === "next") {
                return "下一页";
              }
              return "上一页";
            },
            labelRowsPerPage: "每页行数:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `第 ${from2} 条到第 ${to} 条，${count !== -1 ? `共 ${count} 条` : `至少 ${to} 条`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} 颗星`,
            emptyLabelText: "无标签"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "清空",
            closeText: "关闭",
            loadingText: "加载中……",
            noOptionsText: "没有可用选项",
            openText: "打开"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "关闭"
          }
        }
      }
    };
    const zhHK = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "展開"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "第一頁";
              }
              if (type === "last") {
                return "最後一頁";
              }
              if (type === "next") {
                return "下一頁";
              }
              return "上一頁";
            },
            labelRowsPerPage: "每頁行數:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `第 ${from2} 項至第 ${to} 項，${count !== -1 ? `共 ${count} 項` : `超過 ${to} 項`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} 粒星`,
            emptyLabelText: "無標籤"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "清除",
            closeText: "關閉",
            loadingText: "載入中……",
            noOptionsText: "沒有可用選項",
            openText: "開啟"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "關閉"
          }
        }
      }
    };
    const zhTW = {
      components: {
        MuiBreadcrumbs: {
          defaultProps: {
            expandText: "展開"
          }
        },
        MuiTablePagination: {
          defaultProps: {
            getItemAriaLabel: (type) => {
              if (type === "first") {
                return "第一頁";
              }
              if (type === "last") {
                return "最後一頁";
              }
              if (type === "next") {
                return "下一頁";
              }
              return "上一頁";
            },
            labelRowsPerPage: "每頁數量:",
            labelDisplayedRows: ({
              from: from2,
              to,
              count
            }) => `${from2} ~ ${to} / ${count !== -1 ? count : `${to} 以上`}`
          }
        },
        MuiRating: {
          defaultProps: {
            getLabelText: (value) => `${value} 顆星`,
            emptyLabelText: "無標籤"
          }
        },
        MuiAutocomplete: {
          defaultProps: {
            clearText: "清空",
            closeText: "關閉",
            loadingText: "載入中…",
            noOptionsText: "沒有可用選項",
            openText: "打開"
          }
        },
        MuiAlert: {
          defaultProps: {
            closeText: "關閉"
          }
        }
      }
    };
    const locales$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      amET,
      arEG,
      arSA,
      arSD,
      azAZ,
      beBY,
      bgBG,
      bnBD,
      caES,
      csCZ,
      daDK,
      deDE,
      elGR,
      enUS: enUS$1,
      esES,
      etEE,
      faIR,
      fiFI,
      frFR,
      heIL,
      hiIN,
      hrHR,
      huHU,
      hyAM,
      idID,
      isIS,
      itIT,
      jaJP,
      khKH,
      kkKZ,
      koKR,
      kuCKB,
      kuLatn,
      mkMK,
      msMS,
      myMY,
      nbNO,
      neNP,
      nlNL,
      plPL,
      ptBR,
      ptPT,
      roRO,
      ruRU: ruRU$1,
      siLK,
      skSK,
      srRS,
      svSE,
      thTH,
      tlTL,
      trTR,
      ukUA,
      urPK,
      viVN,
      zhCN,
      zhHK,
      zhTW
    }, Symbol.toStringTag, { value: "Module" }));
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React = reactExports;
    var React__default = _interopDefault(React);
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    function withSideEffect(reducePropsToState2, handleStateChangeOnClient, mapStateOnServer2) {
      if (typeof reducePropsToState2 !== "function") {
        throw new Error("Expected reducePropsToState to be a function.");
      }
      if (typeof handleStateChangeOnClient !== "function") {
        throw new Error("Expected handleStateChangeOnClient to be a function.");
      }
      if (typeof mapStateOnServer2 !== "undefined" && typeof mapStateOnServer2 !== "function") {
        throw new Error("Expected mapStateOnServer to either be undefined or a function.");
      }
      function getDisplayName2(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || "Component";
      }
      return function wrap(WrappedComponent) {
        if (typeof WrappedComponent !== "function") {
          throw new Error("Expected WrappedComponent to be a React component.");
        }
        var mountedInstances = [];
        var state;
        function emitChange() {
          state = reducePropsToState2(mountedInstances.map(function(instance2) {
            return instance2.props;
          }));
          if (SideEffect.canUseDOM) {
            handleStateChangeOnClient(state);
          } else if (mapStateOnServer2) {
            state = mapStateOnServer2(state);
          }
        }
        var SideEffect = /* @__PURE__ */ function(_PureComponent) {
          _inheritsLoose(SideEffect2, _PureComponent);
          function SideEffect2() {
            return _PureComponent.apply(this, arguments) || this;
          }
          SideEffect2.peek = function peek2() {
            return state;
          };
          SideEffect2.rewind = function rewind() {
            if (SideEffect2.canUseDOM) {
              throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
            }
            var recordedState = state;
            state = void 0;
            mountedInstances = [];
            return recordedState;
          };
          var _proto = SideEffect2.prototype;
          _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
            mountedInstances.push(this);
            emitChange();
          };
          _proto.componentDidUpdate = function componentDidUpdate() {
            emitChange();
          };
          _proto.componentWillUnmount = function componentWillUnmount() {
            var index2 = mountedInstances.indexOf(this);
            mountedInstances.splice(index2, 1);
            emitChange();
          };
          _proto.render = function render() {
            return React__default.createElement(WrappedComponent, this.props);
          };
          return SideEffect2;
        }(React.PureComponent);
        _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName2(WrappedComponent) + ")");
        _defineProperty(SideEffect, "canUseDOM", canUseDOM);
        return SideEffect;
      };
    }
    var lib = withSideEffect;
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b2) {
      if (a === b2)
        return true;
      if (a && b2 && typeof a == "object" && typeof b2 == "object") {
        if (a.constructor !== b2.constructor)
          return false;
        var length2, i, keys;
        if (Array.isArray(a)) {
          length2 = a.length;
          if (length2 != b2.length)
            return false;
          for (i = length2; i-- !== 0; )
            if (!equal(a[i], b2[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b2 instanceof Map) {
          if (a.size !== b2.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b2.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b2.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b2 instanceof Set) {
          if (a.size !== b2.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b2.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b2)) {
          length2 = a.length;
          if (length2 != b2.length)
            return false;
          for (i = length2; i-- !== 0; )
            if (a[i] !== b2[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b2.source && a.flags === b2.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b2.valueOf === "function")
          return a.valueOf() === b2.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b2.toString === "function")
          return a.toString() === b2.toString();
        keys = Object.keys(a);
        length2 = keys.length;
        if (length2 !== Object.keys(b2).length)
          return false;
        for (i = length2; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length2; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b2[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b2 !== b2;
    }
    var reactFastCompare = function isEqual(a, b2) {
      try {
        return equal(a, b2);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
      var from2;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from2 = Object(arguments[s]);
        for (var key2 in from2) {
          if (hasOwnProperty.call(from2, key2)) {
            to[key2] = from2[key2];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from2);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from2, symbols[i])) {
              to[symbols[i]] = from2[symbols[i]];
            }
          }
        }
      }
      return to;
    };
    var ATTRIBUTE_NAMES = {
      BODY: "bodyAttributes",
      HTML: "htmlAttributes",
      TITLE: "titleAttributes"
    };
    var TAG_NAMES = {
      BASE: "base",
      BODY: "body",
      HEAD: "head",
      HTML: "html",
      LINK: "link",
      META: "meta",
      NOSCRIPT: "noscript",
      SCRIPT: "script",
      STYLE: "style",
      TITLE: "title"
    };
    Object.keys(TAG_NAMES).map(function(name2) {
      return TAG_NAMES[name2];
    });
    var TAG_PROPERTIES = {
      CHARSET: "charset",
      CSS_TEXT: "cssText",
      HREF: "href",
      HTTPEQUIV: "http-equiv",
      INNER_HTML: "innerHTML",
      ITEM_PROP: "itemprop",
      NAME: "name",
      PROPERTY: "property",
      REL: "rel",
      SRC: "src",
      TARGET: "target"
    };
    var REACT_TAG_MAP = {
      accesskey: "accessKey",
      charset: "charSet",
      class: "className",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      "http-equiv": "httpEquiv",
      itemprop: "itemProp",
      tabindex: "tabIndex"
    };
    var HELMET_PROPS = {
      DEFAULT_TITLE: "defaultTitle",
      DEFER: "defer",
      ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
      ON_CHANGE_CLIENT_STATE: "onChangeClientState",
      TITLE_TEMPLATE: "titleTemplate"
    };
    var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function(obj, key2) {
      obj[REACT_TAG_MAP[key2]] = key2;
      return obj;
    }, {});
    var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
    var HELMET_ATTRIBUTE = "data-react-helmet";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var classCallCheck = function(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key2 in source) {
          if (Object.prototype.hasOwnProperty.call(source, key2)) {
            target[key2] = source[key2];
          }
        }
      }
      return target;
    };
    var inherits = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var objectWithoutProperties = function(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    };
    var possibleConstructorReturn = function(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    };
    var encodeSpecialCharacters = function encodeSpecialCharacters2(str) {
      var encode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (encode === false) {
        return String(str);
      }
      return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    };
    var getTitleFromPropsList = function getTitleFromPropsList2(propsList) {
      var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
      var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
      if (innermostTemplate && innermostTitle) {
        return innermostTemplate.replace(/%s/g, function() {
          return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
      }
      var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
      return innermostTitle || innermostDefaultTitle || void 0;
    };
    var getOnChangeClientState = function getOnChangeClientState2(propsList) {
      return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {
      };
    };
    var getAttributesFromPropsList = function getAttributesFromPropsList2(tagType, propsList) {
      return propsList.filter(function(props) {
        return typeof props[tagType] !== "undefined";
      }).map(function(props) {
        return props[tagType];
      }).reduce(function(tagAttrs, current) {
        return _extends({}, tagAttrs, current);
      }, {});
    };
    var getBaseTagFromPropsList = function getBaseTagFromPropsList2(primaryAttributes, propsList) {
      return propsList.filter(function(props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
      }).map(function(props) {
        return props[TAG_NAMES.BASE];
      }).reverse().reduce(function(innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
          var keys = Object.keys(tag);
          for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var lowerCaseAttributeKey = attributeKey.toLowerCase();
            if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
              return innermostBaseTag.concat(tag);
            }
          }
        }
        return innermostBaseTag;
      }, []);
    };
    var getTagsFromPropsList = function getTagsFromPropsList2(tagName, primaryAttributes, propsList) {
      var approvedSeenTags = {};
      return propsList.filter(function(props) {
        if (Array.isArray(props[tagName])) {
          return true;
        }
        if (typeof props[tagName] !== "undefined") {
          warn$1("Helmet: " + tagName + ' should be of type "Array". Instead found type "' + _typeof(props[tagName]) + '"');
        }
        return false;
      }).map(function(props) {
        return props[tagName];
      }).reverse().reduce(function(approvedTags, instanceTags) {
        var instanceSeenTags = {};
        instanceTags.filter(function(tag) {
          var primaryAttributeKey = void 0;
          var keys2 = Object.keys(tag);
          for (var i2 = 0; i2 < keys2.length; i2++) {
            var attributeKey2 = keys2[i2];
            var lowerCaseAttributeKey = attributeKey2.toLowerCase();
            if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
              primaryAttributeKey = lowerCaseAttributeKey;
            }
            if (primaryAttributes.indexOf(attributeKey2) !== -1 && (attributeKey2 === TAG_PROPERTIES.INNER_HTML || attributeKey2 === TAG_PROPERTIES.CSS_TEXT || attributeKey2 === TAG_PROPERTIES.ITEM_PROP)) {
              primaryAttributeKey = attributeKey2;
            }
          }
          if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
            return false;
          }
          var value = tag[primaryAttributeKey].toLowerCase();
          if (!approvedSeenTags[primaryAttributeKey]) {
            approvedSeenTags[primaryAttributeKey] = {};
          }
          if (!instanceSeenTags[primaryAttributeKey]) {
            instanceSeenTags[primaryAttributeKey] = {};
          }
          if (!approvedSeenTags[primaryAttributeKey][value]) {
            instanceSeenTags[primaryAttributeKey][value] = true;
            return true;
          }
          return false;
        }).reverse().forEach(function(tag) {
          return approvedTags.push(tag);
        });
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
          var attributeKey = keys[i];
          var tagUnion = objectAssign({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
          approvedSeenTags[attributeKey] = tagUnion;
        }
        return approvedTags;
      }, []).reverse();
    };
    var getInnermostProperty = function getInnermostProperty2(propsList, property) {
      for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];
        if (props.hasOwnProperty(property)) {
          return props[property];
        }
      }
      return null;
    };
    var reducePropsToState = function reducePropsToState2(propsList) {
      return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
      };
    };
    var rafPolyfill = function() {
      var clock = Date.now();
      return function(callback) {
        var currentTime = Date.now();
        if (currentTime - clock > 16) {
          clock = currentTime;
          callback(currentTime);
        } else {
          setTimeout(function() {
            rafPolyfill(callback);
          }, 0);
        }
      };
    }();
    var cafPolyfill = function cafPolyfill2(id2) {
      return clearTimeout(id2);
    };
    var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
    var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
    var warn$1 = function warn2(msg) {
      return console && typeof console.warn === "function" && console.warn(msg);
    };
    var _helmetCallback = null;
    var handleClientStateChange = function handleClientStateChange2(newState) {
      if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
      }
      if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function() {
          commitTagChanges(newState, function() {
            _helmetCallback = null;
          });
        });
      } else {
        commitTagChanges(newState);
        _helmetCallback = null;
      }
    };
    var commitTagChanges = function commitTagChanges2(newState, cb2) {
      var baseTag = newState.baseTag, bodyAttributes = newState.bodyAttributes, htmlAttributes = newState.htmlAttributes, linkTags = newState.linkTags, metaTags = newState.metaTags, noscriptTags = newState.noscriptTags, onChangeClientState = newState.onChangeClientState, scriptTags = newState.scriptTags, styleTags = newState.styleTags, title2 = newState.title, titleAttributes = newState.titleAttributes;
      updateAttributes(TAG_NAMES.BODY, bodyAttributes);
      updateAttributes(TAG_NAMES.HTML, htmlAttributes);
      updateTitle(title2, titleAttributes);
      var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
      };
      var addedTags = {};
      var removedTags = {};
      Object.keys(tagUpdates).forEach(function(tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType], newTags = _tagUpdates$tagType.newTags, oldTags = _tagUpdates$tagType.oldTags;
        if (newTags.length) {
          addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
          removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
      });
      cb2 && cb2();
      onChangeClientState(newState, addedTags, removedTags);
    };
    var flattenArray = function flattenArray2(possibleArray) {
      return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
    };
    var updateTitle = function updateTitle2(title2, attributes) {
      if (typeof title2 !== "undefined" && document.title !== title2) {
        document.title = flattenArray(title2);
      }
      updateAttributes(TAG_NAMES.TITLE, attributes);
    };
    var updateAttributes = function updateAttributes2(tagName, attributes) {
      var elementTag = document.getElementsByTagName(tagName)[0];
      if (!elementTag) {
        return;
      }
      var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
      var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
      var attributesToRemove = [].concat(helmetAttributes);
      var attributeKeys = Object.keys(attributes);
      for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";
        if (elementTag.getAttribute(attribute) !== value) {
          elementTag.setAttribute(attribute, value);
        }
        if (helmetAttributes.indexOf(attribute) === -1) {
          helmetAttributes.push(attribute);
        }
        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
          attributesToRemove.splice(indexToSave, 1);
        }
      }
      for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
      }
      if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
      } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
      }
    };
    var updateTags = function updateTags2(type, tags) {
      var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
      var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
      var oldTags = Array.prototype.slice.call(tagNodes);
      var newTags = [];
      var indexToDelete = void 0;
      if (tags && tags.length) {
        tags.forEach(function(tag) {
          var newElement = document.createElement(type);
          for (var attribute in tag) {
            if (tag.hasOwnProperty(attribute)) {
              if (attribute === TAG_PROPERTIES.INNER_HTML) {
                newElement.innerHTML = tag.innerHTML;
              } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                if (newElement.styleSheet) {
                  newElement.styleSheet.cssText = tag.cssText;
                } else {
                  newElement.appendChild(document.createTextNode(tag.cssText));
                }
              } else {
                var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                newElement.setAttribute(attribute, value);
              }
            }
          }
          newElement.setAttribute(HELMET_ATTRIBUTE, "true");
          if (oldTags.some(function(existingTag, index2) {
            indexToDelete = index2;
            return newElement.isEqualNode(existingTag);
          })) {
            oldTags.splice(indexToDelete, 1);
          } else {
            newTags.push(newElement);
          }
        });
      }
      oldTags.forEach(function(tag) {
        return tag.parentNode.removeChild(tag);
      });
      newTags.forEach(function(tag) {
        return headElement.appendChild(tag);
      });
      return {
        oldTags,
        newTags
      };
    };
    var generateElementAttributesAsString = function generateElementAttributesAsString2(attributes) {
      return Object.keys(attributes).reduce(function(str, key2) {
        var attr = typeof attributes[key2] !== "undefined" ? key2 + '="' + attributes[key2] + '"' : "" + key2;
        return str ? str + " " + attr : attr;
      }, "");
    };
    var generateTitleAsString = function generateTitleAsString2(type, title2, attributes, encode) {
      var attributeString = generateElementAttributesAsString(attributes);
      var flattenedTitle = flattenArray(title2);
      return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + '="true" ' + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + '="true">' + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
    };
    var generateTagsAsString = function generateTagsAsString2(type, tags, encode) {
      return tags.reduce(function(str, tag) {
        var attributeHtml = Object.keys(tag).filter(function(attribute) {
          return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function(string, attribute) {
          var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + '="' + encodeSpecialCharacters(tag[attribute], encode) + '"';
          return string ? string + " " + attr : attr;
        }, "");
        var tagContent = tag.innerHTML || tag.cssText || "";
        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
        return str + "<" + type + " " + HELMET_ATTRIBUTE + '="true" ' + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
      }, "");
    };
    var convertElementAttributestoReactProps = function convertElementAttributestoReactProps2(attributes) {
      var initProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return Object.keys(attributes).reduce(function(obj, key2) {
        obj[REACT_TAG_MAP[key2] || key2] = attributes[key2];
        return obj;
      }, initProps);
    };
    var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes2(props) {
      var initAttributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return Object.keys(props).reduce(function(obj, key2) {
        obj[HTML_TAG_MAP[key2] || key2] = props[key2];
        return obj;
      }, initAttributes);
    };
    var generateTitleAsReactComponent = function generateTitleAsReactComponent2(type, title2, attributes) {
      var _initProps;
      var initProps = (_initProps = {
        key: title2
      }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
      var props = convertElementAttributestoReactProps(attributes, initProps);
      return [React$1.createElement(TAG_NAMES.TITLE, props, title2)];
    };
    var generateTagsAsReactComponent = function generateTagsAsReactComponent2(type, tags) {
      return tags.map(function(tag, i) {
        var _mappedTag;
        var mappedTag = (_mappedTag = {
          key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
        Object.keys(tag).forEach(function(attribute) {
          var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
          if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
            var content = tag.innerHTML || tag.cssText;
            mappedTag.dangerouslySetInnerHTML = { __html: content };
          } else {
            mappedTag[mappedAttribute] = tag[attribute];
          }
        });
        return React$1.createElement(type, mappedTag);
      });
    };
    var getMethodsForTag = function getMethodsForTag2(type, tags, encode) {
      switch (type) {
        case TAG_NAMES.TITLE:
          return {
            toComponent: function toComponent() {
              return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes);
            },
            toString: function toString() {
              return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
            }
          };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
          return {
            toComponent: function toComponent() {
              return convertElementAttributestoReactProps(tags);
            },
            toString: function toString() {
              return generateElementAttributesAsString(tags);
            }
          };
        default:
          return {
            toComponent: function toComponent() {
              return generateTagsAsReactComponent(type, tags);
            },
            toString: function toString() {
              return generateTagsAsString(type, tags, encode);
            }
          };
      }
    };
    var mapStateOnServer = function mapStateOnServer2(_ref) {
      var baseTag = _ref.baseTag, bodyAttributes = _ref.bodyAttributes, encode = _ref.encode, htmlAttributes = _ref.htmlAttributes, linkTags = _ref.linkTags, metaTags = _ref.metaTags, noscriptTags = _ref.noscriptTags, scriptTags = _ref.scriptTags, styleTags = _ref.styleTags, _ref$title = _ref.title, title2 = _ref$title === void 0 ? "" : _ref$title, titleAttributes = _ref.titleAttributes;
      return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title2, titleAttributes }, encode)
      };
    };
    var Helmet = function Helmet2(Component) {
      var _class, _temp;
      return _temp = _class = function(_React$Component) {
        inherits(HelmetWrapper, _React$Component);
        function HelmetWrapper() {
          classCallCheck(this, HelmetWrapper);
          return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }
        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          return !reactFastCompare(this.props, nextProps);
        };
        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
          if (!nestedChildren) {
            return null;
          }
          switch (child.type) {
            case TAG_NAMES.SCRIPT:
            case TAG_NAMES.NOSCRIPT:
              return {
                innerHTML: nestedChildren
              };
            case TAG_NAMES.STYLE:
              return {
                cssText: nestedChildren
              };
          }
          throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };
        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
          var _babelHelpers$extends;
          var child = _ref.child, arrayTypeChildren = _ref.arrayTypeChildren, newChildProps = _ref.newChildProps, nestedChildren = _ref.nestedChildren;
          return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };
        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
          var _babelHelpers$extends2, _babelHelpers$extends3;
          var child = _ref2.child, newProps = _ref2.newProps, newChildProps = _ref2.newChildProps, nestedChildren = _ref2.nestedChildren;
          switch (child.type) {
            case TAG_NAMES.TITLE:
              return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));
            case TAG_NAMES.BODY:
              return _extends({}, newProps, {
                bodyAttributes: _extends({}, newChildProps)
              });
            case TAG_NAMES.HTML:
              return _extends({}, newProps, {
                htmlAttributes: _extends({}, newChildProps)
              });
          }
          return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };
        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
          var newFlattenedProps = _extends({}, newProps);
          Object.keys(arrayTypeChildren).forEach(function(arrayChildName) {
            var _babelHelpers$extends4;
            newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
          });
          return newFlattenedProps;
        };
        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
          return true;
        };
        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
          var _this2 = this;
          var arrayTypeChildren = {};
          React$1.Children.forEach(children, function(child) {
            if (!child || !child.props) {
              return;
            }
            var _child$props = child.props, nestedChildren = _child$props.children, childProps = objectWithoutProperties(_child$props, ["children"]);
            var newChildProps = convertReactPropstoHtmlAttributes(childProps);
            _this2.warnOnInvalidChildren(child, nestedChildren);
            switch (child.type) {
              case TAG_NAMES.LINK:
              case TAG_NAMES.META:
              case TAG_NAMES.NOSCRIPT:
              case TAG_NAMES.SCRIPT:
              case TAG_NAMES.STYLE:
                arrayTypeChildren = _this2.flattenArrayTypeChildren({
                  child,
                  arrayTypeChildren,
                  newChildProps,
                  nestedChildren
                });
                break;
              default:
                newProps = _this2.mapObjectTypeChildren({
                  child,
                  newProps,
                  newChildProps,
                  nestedChildren
                });
                break;
            }
          });
          newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
          return newProps;
        };
        HelmetWrapper.prototype.render = function render() {
          var _props = this.props, children = _props.children, props = objectWithoutProperties(_props, ["children"]);
          var newProps = _extends({}, props);
          if (children) {
            newProps = this.mapChildrenToProps(children, newProps);
          }
          return React$1.createElement(Component, newProps);
        };
        createClass(HelmetWrapper, null, [{
          key: "canUseDOM",
          // Component.peek comes from react-side-effect:
          // For testing, you may use a static peek() method available on the returned component.
          // It lets you get the current state without resetting the mounted instance stack.
          // Don’t use it for anything other than testing.
          /**
           * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
           * @param {Object} bodyAttributes: {"className": "root"}
           * @param {String} defaultTitle: "Default Title"
           * @param {Boolean} defer: true
           * @param {Boolean} encodeSpecialCharacters: true
           * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
           * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
           * @param {Array} meta: [{"name": "description", "content": "Test description"}]
           * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
           * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
           * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
           * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
           * @param {String} title: "Title"
           * @param {Object} titleAttributes: {"itemprop": "name"}
           * @param {String} titleTemplate: "MySite.com - %s"
           */
          set: function set$$1(canUseDOM2) {
            Component.canUseDOM = canUseDOM2;
          }
        }]);
        return HelmetWrapper;
      }(React$1.Component), _class.propTypes = {
        base: propTypesExports.object,
        bodyAttributes: propTypesExports.object,
        children: propTypesExports.oneOfType([propTypesExports.arrayOf(propTypesExports.node), propTypesExports.node]),
        defaultTitle: propTypesExports.string,
        defer: propTypesExports.bool,
        encodeSpecialCharacters: propTypesExports.bool,
        htmlAttributes: propTypesExports.object,
        link: propTypesExports.arrayOf(propTypesExports.object),
        meta: propTypesExports.arrayOf(propTypesExports.object),
        noscript: propTypesExports.arrayOf(propTypesExports.object),
        onChangeClientState: propTypesExports.func,
        script: propTypesExports.arrayOf(propTypesExports.object),
        style: propTypesExports.arrayOf(propTypesExports.object),
        title: propTypesExports.string,
        titleAttributes: propTypesExports.object,
        titleTemplate: propTypesExports.string
      }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
      }, _class.peek = Component.peek, _class.rewind = function() {
        var mappedState = Component.rewind();
        if (!mappedState) {
          mappedState = mapStateOnServer({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: true,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
          });
        }
        return mappedState;
      }, _temp;
    };
    var NullComponent = function NullComponent2() {
      return null;
    };
    var HelmetSideEffects = lib(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
    var HelmetExport = Helmet(HelmetSideEffects);
    HelmetExport.renderStatic = HelmetExport.rewind;
    function warn() {
      if (console && console.warn) {
        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (typeof args[0] === "string")
          args[0] = "react-i18next:: ".concat(args[0]);
        (_console = console).warn.apply(_console, args);
      }
    }
    var alreadyWarned = {};
    function warnOnce() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" && alreadyWarned[args[0]])
        return;
      if (typeof args[0] === "string")
        alreadyWarned[args[0]] = new Date();
      warn.apply(void 0, args);
    }
    function loadNamespaces(i18n, ns2, cb2) {
      i18n.loadNamespaces(ns2, function() {
        if (i18n.isInitialized) {
          cb2();
        } else {
          var initialized = function initialized2() {
            setTimeout(function() {
              i18n.off("initialized", initialized2);
            }, 0);
            cb2();
          };
          i18n.on("initialized", initialized);
        }
      });
    }
    function oldI18nextHasLoadedNamespace(ns2, i18n) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var lng = i18n.languages[0];
      var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
      var lastLng = i18n.languages[i18n.languages.length - 1];
      if (lng.toLowerCase() === "cimode")
        return true;
      var loadNotPending = function loadNotPending2(l2, n2) {
        var loadState = i18n.services.backendConnector.state["".concat(l2, "|").concat(n2)];
        return loadState === -1 || loadState === 2;
      };
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns2))
        return false;
      if (i18n.hasResourceBundle(lng, ns2))
        return true;
      if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages)
        return true;
      if (loadNotPending(lng, ns2) && (!fallbackLng || loadNotPending(lastLng, ns2)))
        return true;
      return false;
    }
    function hasLoadedNamespace(ns2, i18n) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!i18n.languages || !i18n.languages.length) {
        warnOnce("i18n.languages were undefined or empty", i18n.languages);
        return true;
      }
      var isNewerI18next = i18n.options.ignoreJSONStructure !== void 0;
      if (!isNewerI18next) {
        return oldI18nextHasLoadedNamespace(ns2, i18n, options);
      }
      return i18n.hasLoadedNamespace(ns2, {
        precheck: function precheck(i18nInstance2, loadNotPending) {
          if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns2))
            return false;
        }
      });
    }
    var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
    var htmlEntities = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
      "&nbsp;": " ",
      "&#160;": " ",
      "&copy;": "©",
      "&#169;": "©",
      "&reg;": "®",
      "&#174;": "®",
      "&hellip;": "…",
      "&#8230;": "…",
      "&#x2F;": "/",
      "&#47;": "/"
    };
    var unescapeHtmlEntity = function unescapeHtmlEntity2(m2) {
      return htmlEntities[m2];
    };
    var unescape = function unescape2(text) {
      return text.replace(matchHtmlEntity, unescapeHtmlEntity);
    };
    function ownKeys$8(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$8(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$8(Object(source), true).forEach(function(key2) {
            _defineProperty$1(target, key2, source[key2]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$8(Object(source)).forEach(function(key2) {
            Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
          });
        }
      }
      return target;
    }
    var defaultOptions = {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transWrapTextNodes: "",
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
      useSuspense: true,
      unescape
    };
    function setDefaults() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      defaultOptions = _objectSpread$8(_objectSpread$8({}, defaultOptions), options);
    }
    function getDefaults() {
      return defaultOptions;
    }
    var i18nInstance;
    function setI18n(instance2) {
      i18nInstance = instance2;
    }
    function getI18n() {
      return i18nInstance;
    }
    var initReactI18next = {
      type: "3rdParty",
      init: function init(instance2) {
        setDefaults(instance2.options.react);
        setI18n(instance2);
      }
    };
    var I18nContext = reactExports.createContext();
    var ReportNamespaces = function() {
      function ReportNamespaces2() {
        _classCallCheck(this, ReportNamespaces2);
        this.usedNamespaces = {};
      }
      _createClass(ReportNamespaces2, [{
        key: "addUsedNamespaces",
        value: function addUsedNamespaces(namespaces) {
          var _this = this;
          namespaces.forEach(function(ns2) {
            if (!_this.usedNamespaces[ns2])
              _this.usedNamespaces[ns2] = true;
          });
        }
      }, {
        key: "getUsedNamespaces",
        value: function getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }]);
      return ReportNamespaces2;
    }();
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArrayLimit(r2, l2) {
      var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
      if (null != t2) {
        var e2, n2, i, u2, a = [], f2 = true, o = false;
        try {
          if (i = (t2 = t2.call(r2)).next, 0 === l2) {
            if (Object(t2) !== t2)
              return;
            f2 = false;
          } else
            for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true)
              ;
        } catch (r3) {
          o = true, n2 = r3;
        } finally {
          try {
            if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2))
              return;
          } finally {
            if (o)
              throw n2;
          }
        }
        return a;
      }
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function ownKeys$7(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$7(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$7(Object(source), true).forEach(function(key2) {
            _defineProperty$1(target, key2, source[key2]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$7(Object(source)).forEach(function(key2) {
            Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
          });
        }
      }
      return target;
    }
    var usePrevious = function usePrevious2(value, ignore) {
      var ref = reactExports.useRef();
      reactExports.useEffect(function() {
        ref.current = ignore ? ref.current : value;
      }, [value, ignore]);
      return ref.current;
    };
    function useTranslation(ns2) {
      var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var i18nFromProps = props.i18n;
      var _ref = reactExports.useContext(I18nContext) || {}, i18nFromContext = _ref.i18n, defaultNSFromContext = _ref.defaultNS;
      var i18n = i18nFromProps || i18nFromContext || getI18n();
      if (i18n && !i18n.reportNamespaces)
        i18n.reportNamespaces = new ReportNamespaces();
      if (!i18n) {
        warnOnce("You will need to pass in an i18next instance by using initReactI18next");
        var notReadyT = function notReadyT2(k2, optsOrDefaultValue) {
          if (typeof optsOrDefaultValue === "string")
            return optsOrDefaultValue;
          if (optsOrDefaultValue && _typeof$1(optsOrDefaultValue) === "object" && typeof optsOrDefaultValue.defaultValue === "string")
            return optsOrDefaultValue.defaultValue;
          return Array.isArray(k2) ? k2[k2.length - 1] : k2;
        };
        var retNotReady = [notReadyT, {}, false];
        retNotReady.t = notReadyT;
        retNotReady.i18n = {};
        retNotReady.ready = false;
        return retNotReady;
      }
      if (i18n.options.react && i18n.options.react.wait !== void 0)
        warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
      var i18nOptions = _objectSpread$7(_objectSpread$7(_objectSpread$7({}, getDefaults()), i18n.options.react), props);
      var useSuspense = i18nOptions.useSuspense, keyPrefix = i18nOptions.keyPrefix;
      var namespaces = ns2 || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
      namespaces = typeof namespaces === "string" ? [namespaces] : namespaces || ["translation"];
      if (i18n.reportNamespaces.addUsedNamespaces)
        i18n.reportNamespaces.addUsedNamespaces(namespaces);
      var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function(n2) {
        return hasLoadedNamespace(n2, i18n, i18nOptions);
      });
      function getT() {
        return i18n.getFixedT(null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
      }
      var _useState = reactExports.useState(getT), _useState2 = _slicedToArray(_useState, 2), t2 = _useState2[0], setT = _useState2[1];
      var joinedNS = namespaces.join();
      var previousJoinedNS = usePrevious(joinedNS);
      var isMounted = reactExports.useRef(true);
      reactExports.useEffect(function() {
        var bindI18n = i18nOptions.bindI18n, bindI18nStore = i18nOptions.bindI18nStore;
        isMounted.current = true;
        if (!ready && !useSuspense) {
          loadNamespaces(i18n, namespaces, function() {
            if (isMounted.current)
              setT(getT);
          });
        }
        if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
          setT(getT);
        }
        function boundReset() {
          if (isMounted.current)
            setT(getT);
        }
        if (bindI18n && i18n)
          i18n.on(bindI18n, boundReset);
        if (bindI18nStore && i18n)
          i18n.store.on(bindI18nStore, boundReset);
        return function() {
          isMounted.current = false;
          if (bindI18n && i18n)
            bindI18n.split(" ").forEach(function(e2) {
              return i18n.off(e2, boundReset);
            });
          if (bindI18nStore && i18n)
            bindI18nStore.split(" ").forEach(function(e2) {
              return i18n.store.off(e2, boundReset);
            });
        };
      }, [i18n, joinedNS]);
      var isInitial = reactExports.useRef(true);
      reactExports.useEffect(function() {
        if (isMounted.current && !isInitial.current) {
          setT(getT);
        }
        isInitial.current = false;
      }, [i18n, keyPrefix]);
      var ret = [t2, i18n, ready];
      ret.t = t2;
      ret.i18n = i18n;
      ret.ready = ready;
      if (ready)
        return ret;
      if (!ready && !useSuspense)
        return ret;
      throw new Promise(function(resolve) {
        loadNamespaces(i18n, namespaces, function() {
          resolve();
        });
      });
    }
    const App = () => {
      const { i18n } = useTranslation();
      const [locale2, setLocale] = reactExports.useState(i18n.language);
      reactExports.useEffect(() => {
        const onLanguageChanged = (cLocale) => {
          setLocale(cLocale);
        };
        i18n.on("languageChanged", onLanguageChanged);
        return () => {
          i18n.off("languageChanged", onLanguageChanged);
        };
      }, []);
      const theme = reactExports.useMemo(() => createTheme({}, locales$1[locale2]), [locale2]);
      return /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
        /* @__PURE__ */ jsx(HelmetExport, { titleTemplate: "%s - Anna Myamikova", defaultTitle: "Anna Myamikova" }),
        /* @__PURE__ */ jsx(Routes, {})
      ] });
    };
    const index = "";
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _toArray(arr) {
      return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
    }
    function ownKeys$6(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$6(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$6(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    var consoleLogger = {
      type: "logger",
      log: function log(args) {
        this.output("log", args);
      },
      warn: function warn2(args) {
        this.output("warn", args);
      },
      error: function error(args) {
        this.output("error", args);
      },
      output: function output(type, args) {
        if (console && console[type])
          console[type].apply(console, args);
      }
    };
    var Logger = function() {
      function Logger2(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Logger2);
        this.init(concreteLogger, options);
      }
      _createClass(Logger2, [{
        key: "init",
        value: function init(concreteLogger) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.prefix = options.prefix || "i18next:";
          this.logger = concreteLogger || consoleLogger;
          this.options = options;
          this.debug = options.debug;
        }
      }, {
        key: "setDebug",
        value: function setDebug(bool) {
          this.debug = bool;
        }
      }, {
        key: "log",
        value: function log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return this.forward(args, "log", "", true);
        }
      }, {
        key: "warn",
        value: function warn2() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return this.forward(args, "warn", "", true);
        }
      }, {
        key: "error",
        value: function error() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return this.forward(args, "error", "");
        }
      }, {
        key: "deprecate",
        value: function deprecate() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
        }
      }, {
        key: "forward",
        value: function forward(args, lvl, prefix2, debugOnly) {
          if (debugOnly && !this.debug)
            return null;
          if (typeof args[0] === "string")
            args[0] = "".concat(prefix2).concat(this.prefix, " ").concat(args[0]);
          return this.logger[lvl](args);
        }
      }, {
        key: "create",
        value: function create2(moduleName) {
          return new Logger2(this.logger, _objectSpread$6(_objectSpread$6({}, {
            prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
          }), this.options));
        }
      }, {
        key: "clone",
        value: function clone(options) {
          options = options || this.options;
          options.prefix = options.prefix || this.prefix;
          return new Logger2(this.logger, options);
        }
      }]);
      return Logger2;
    }();
    var baseLogger = new Logger();
    var EventEmitter = function() {
      function EventEmitter2() {
        _classCallCheck(this, EventEmitter2);
        this.observers = {};
      }
      _createClass(EventEmitter2, [{
        key: "on",
        value: function on(events, listener) {
          var _this = this;
          events.split(" ").forEach(function(event) {
            _this.observers[event] = _this.observers[event] || [];
            _this.observers[event].push(listener);
          });
          return this;
        }
      }, {
        key: "off",
        value: function off(event, listener) {
          if (!this.observers[event])
            return;
          if (!listener) {
            delete this.observers[event];
            return;
          }
          this.observers[event] = this.observers[event].filter(function(l2) {
            return l2 !== listener;
          });
        }
      }, {
        key: "emit",
        value: function emit(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (this.observers[event]) {
            var cloned = [].concat(this.observers[event]);
            cloned.forEach(function(observer) {
              observer.apply(void 0, args);
            });
          }
          if (this.observers["*"]) {
            var _cloned = [].concat(this.observers["*"]);
            _cloned.forEach(function(observer) {
              observer.apply(observer, [event].concat(args));
            });
          }
        }
      }]);
      return EventEmitter2;
    }();
    function defer() {
      var res;
      var rej;
      var promise = new Promise(function(resolve, reject) {
        res = resolve;
        rej = reject;
      });
      promise.resolve = res;
      promise.reject = rej;
      return promise;
    }
    function makeString(object) {
      if (object == null)
        return "";
      return "" + object;
    }
    function copy(a, s, t2) {
      a.forEach(function(m2) {
        if (s[m2])
          t2[m2] = s[m2];
      });
    }
    function getLastOfPath(object, path, Empty) {
      function cleanKey(key3) {
        return key3 && key3.indexOf("###") > -1 ? key3.replace(/###/g, ".") : key3;
      }
      function canNotTraverseDeeper() {
        return !object || typeof object === "string";
      }
      var stack = typeof path !== "string" ? [].concat(path) : path.split(".");
      while (stack.length > 1) {
        if (canNotTraverseDeeper())
          return {};
        var key2 = cleanKey(stack.shift());
        if (!object[key2] && Empty)
          object[key2] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key2)) {
          object = object[key2];
        } else {
          object = {};
        }
      }
      if (canNotTraverseDeeper())
        return {};
      return {
        obj: object,
        k: cleanKey(stack.shift())
      };
    }
    function setPath(object, path, newValue) {
      var _getLastOfPath = getLastOfPath(object, path, Object), obj = _getLastOfPath.obj, k2 = _getLastOfPath.k;
      obj[k2] = newValue;
    }
    function pushPath(object, path, newValue, concat) {
      var _getLastOfPath2 = getLastOfPath(object, path, Object), obj = _getLastOfPath2.obj, k2 = _getLastOfPath2.k;
      obj[k2] = obj[k2] || [];
      if (concat)
        obj[k2] = obj[k2].concat(newValue);
      if (!concat)
        obj[k2].push(newValue);
    }
    function getPath(object, path) {
      var _getLastOfPath3 = getLastOfPath(object, path), obj = _getLastOfPath3.obj, k2 = _getLastOfPath3.k;
      if (!obj)
        return void 0;
      return obj[k2];
    }
    function getPathWithDefaults(data, defaultData, key2) {
      var value = getPath(data, key2);
      if (value !== void 0) {
        return value;
      }
      return getPath(defaultData, key2);
    }
    function deepExtend(target, source, overwrite) {
      for (var prop in source) {
        if (prop !== "__proto__" && prop !== "constructor") {
          if (prop in target) {
            if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
              if (overwrite)
                target[prop] = source[prop];
            } else {
              deepExtend(target[prop], source[prop], overwrite);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
      return target;
    }
    function regexEscape(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    var _entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;"
    };
    function escape(data) {
      if (typeof data === "string") {
        return data.replace(/[&<>"'\/]/g, function(s) {
          return _entityMap[s];
        });
      }
      return data;
    }
    var isIE10 = typeof window !== "undefined" && window.navigator && typeof window.navigator.userAgentData === "undefined" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
    var chars = [" ", ",", "?", "!", ";"];
    function looksLikeObjectPath(key2, nsSeparator, keySeparator) {
      nsSeparator = nsSeparator || "";
      keySeparator = keySeparator || "";
      var possibleChars = chars.filter(function(c2) {
        return nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0;
      });
      if (possibleChars.length === 0)
        return true;
      var r2 = new RegExp("(".concat(possibleChars.map(function(c2) {
        return c2 === "?" ? "\\?" : c2;
      }).join("|"), ")"));
      var matched = !r2.test(key2);
      if (!matched) {
        var ki2 = key2.indexOf(keySeparator);
        if (ki2 > 0 && !r2.test(key2.substring(0, ki2))) {
          matched = true;
        }
      }
      return matched;
    }
    function ownKeys$5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$5(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function _createSuper$3(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result2;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result2 = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result2 = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result2);
      };
    }
    function _isNativeReflectConstruct$3() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function deepFind(obj, path) {
      var keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
      if (!obj)
        return void 0;
      if (obj[path])
        return obj[path];
      var paths = path.split(keySeparator);
      var current = obj;
      for (var i = 0; i < paths.length; ++i) {
        if (!current)
          return void 0;
        if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
          return void 0;
        }
        if (current[paths[i]] === void 0) {
          var j = 2;
          var p2 = paths.slice(i, i + j).join(keySeparator);
          var mix = current[p2];
          while (mix === void 0 && paths.length > i + j) {
            j++;
            p2 = paths.slice(i, i + j).join(keySeparator);
            mix = current[p2];
          }
          if (mix === void 0)
            return void 0;
          if (mix === null)
            return null;
          if (path.endsWith(p2)) {
            if (typeof mix === "string")
              return mix;
            if (p2 && typeof mix[p2] === "string")
              return mix[p2];
          }
          var joinedPath = paths.slice(i + j).join(keySeparator);
          if (joinedPath)
            return deepFind(mix, joinedPath, keySeparator);
          return void 0;
        }
        current = current[paths[i]];
      }
      return current;
    }
    var ResourceStore = function(_EventEmitter) {
      _inherits(ResourceStore2, _EventEmitter);
      var _super = _createSuper$3(ResourceStore2);
      function ResourceStore2(data) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          ns: ["translation"],
          defaultNS: "translation"
        };
        _classCallCheck(this, ResourceStore2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        _this.data = data || {};
        _this.options = options;
        if (_this.options.keySeparator === void 0) {
          _this.options.keySeparator = ".";
        }
        if (_this.options.ignoreJSONStructure === void 0) {
          _this.options.ignoreJSONStructure = true;
        }
        return _this;
      }
      _createClass(ResourceStore2, [{
        key: "addNamespaces",
        value: function addNamespaces(ns2) {
          if (this.options.ns.indexOf(ns2) < 0) {
            this.options.ns.push(ns2);
          }
        }
      }, {
        key: "removeNamespaces",
        value: function removeNamespaces(ns2) {
          var index2 = this.options.ns.indexOf(ns2);
          if (index2 > -1) {
            this.options.ns.splice(index2, 1);
          }
        }
      }, {
        key: "getResource",
        value: function getResource(lng, ns2, key2) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
          var path = [lng, ns2];
          if (key2 && typeof key2 !== "string")
            path = path.concat(key2);
          if (key2 && typeof key2 === "string")
            path = path.concat(keySeparator ? key2.split(keySeparator) : key2);
          if (lng.indexOf(".") > -1) {
            path = lng.split(".");
          }
          var result2 = getPath(this.data, path);
          if (result2 || !ignoreJSONStructure || typeof key2 !== "string")
            return result2;
          return deepFind(this.data && this.data[lng] && this.data[lng][ns2], key2, keySeparator);
        }
      }, {
        key: "addResource",
        value: function addResource(lng, ns2, key2, value) {
          var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: false
          };
          var keySeparator = this.options.keySeparator;
          if (keySeparator === void 0)
            keySeparator = ".";
          var path = [lng, ns2];
          if (key2)
            path = path.concat(keySeparator ? key2.split(keySeparator) : key2);
          if (lng.indexOf(".") > -1) {
            path = lng.split(".");
            value = ns2;
            ns2 = path[1];
          }
          this.addNamespaces(ns2);
          setPath(this.data, path, value);
          if (!options.silent)
            this.emit("added", lng, ns2, key2, value);
        }
      }, {
        key: "addResources",
        value: function addResources(lng, ns2, resources) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: false
          };
          for (var m2 in resources) {
            if (typeof resources[m2] === "string" || Object.prototype.toString.apply(resources[m2]) === "[object Array]")
              this.addResource(lng, ns2, m2, resources[m2], {
                silent: true
              });
          }
          if (!options.silent)
            this.emit("added", lng, ns2, resources);
        }
      }, {
        key: "addResourceBundle",
        value: function addResourceBundle(lng, ns2, resources, deep, overwrite) {
          var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: false
          };
          var path = [lng, ns2];
          if (lng.indexOf(".") > -1) {
            path = lng.split(".");
            deep = resources;
            resources = ns2;
            ns2 = path[1];
          }
          this.addNamespaces(ns2);
          var pack = getPath(this.data, path) || {};
          if (deep) {
            deepExtend(pack, resources, overwrite);
          } else {
            pack = _objectSpread$5(_objectSpread$5({}, pack), resources);
          }
          setPath(this.data, path, pack);
          if (!options.silent)
            this.emit("added", lng, ns2, resources);
        }
      }, {
        key: "removeResourceBundle",
        value: function removeResourceBundle(lng, ns2) {
          if (this.hasResourceBundle(lng, ns2)) {
            delete this.data[lng][ns2];
          }
          this.removeNamespaces(ns2);
          this.emit("removed", lng, ns2);
        }
      }, {
        key: "hasResourceBundle",
        value: function hasResourceBundle(lng, ns2) {
          return this.getResource(lng, ns2) !== void 0;
        }
      }, {
        key: "getResourceBundle",
        value: function getResourceBundle(lng, ns2) {
          if (!ns2)
            ns2 = this.options.defaultNS;
          if (this.options.compatibilityAPI === "v1")
            return _objectSpread$5(_objectSpread$5({}, {}), this.getResource(lng, ns2));
          return this.getResource(lng, ns2);
        }
      }, {
        key: "getDataByLanguage",
        value: function getDataByLanguage(lng) {
          return this.data[lng];
        }
      }, {
        key: "hasLanguageSomeTranslations",
        value: function hasLanguageSomeTranslations(lng) {
          var data = this.getDataByLanguage(lng);
          var n2 = data && Object.keys(data) || [];
          return !!n2.find(function(v2) {
            return data[v2] && Object.keys(data[v2]).length > 0;
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return this.data;
        }
      }]);
      return ResourceStore2;
    }(EventEmitter);
    var postProcessor = {
      processors: {},
      addPostProcessor: function addPostProcessor(module2) {
        this.processors[module2.name] = module2;
      },
      handle: function handle(processors, value, key2, options, translator) {
        var _this = this;
        processors.forEach(function(processor) {
          if (_this.processors[processor])
            value = _this.processors[processor].process(value, key2, options, translator);
        });
        return value;
      }
    };
    function ownKeys$4(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$4(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$4(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function _createSuper$2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result2;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result2 = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result2 = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result2);
      };
    }
    function _isNativeReflectConstruct$2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    var checkedLoadedFor = {};
    var Translator = function(_EventEmitter) {
      _inherits(Translator2, _EventEmitter);
      var _super = _createSuper$2(Translator2);
      function Translator2(services) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Translator2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized(_this));
        _this.options = options;
        if (_this.options.keySeparator === void 0) {
          _this.options.keySeparator = ".";
        }
        _this.logger = baseLogger.create("translator");
        return _this;
      }
      _createClass(Translator2, [{
        key: "changeLanguage",
        value: function changeLanguage(lng) {
          if (lng)
            this.language = lng;
        }
      }, {
        key: "exists",
        value: function exists(key2) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          if (key2 === void 0 || key2 === null) {
            return false;
          }
          var resolved = this.resolve(key2, options);
          return resolved && resolved.res !== void 0;
        }
      }, {
        key: "extractFromKey",
        value: function extractFromKey(key2, options) {
          var nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
          if (nsSeparator === void 0)
            nsSeparator = ":";
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var namespaces = options.ns || this.options.defaultNS || [];
          var wouldCheckForNsInKey = nsSeparator && key2.indexOf(nsSeparator) > -1;
          var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key2, nsSeparator, keySeparator);
          if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
            var m2 = key2.match(this.interpolator.nestingRegexp);
            if (m2 && m2.length > 0) {
              return {
                key: key2,
                namespaces
              };
            }
            var parts = key2.split(nsSeparator);
            if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
              namespaces = parts.shift();
            key2 = parts.join(keySeparator);
          }
          if (typeof namespaces === "string")
            namespaces = [namespaces];
          return {
            key: key2,
            namespaces
          };
        }
      }, {
        key: "translate",
        value: function translate(keys, options, lastKey) {
          var _this2 = this;
          if (_typeof$1(options) !== "object" && this.options.overloadTranslationOptionHandler) {
            options = this.options.overloadTranslationOptionHandler(arguments);
          }
          if (!options)
            options = {};
          if (keys === void 0 || keys === null)
            return "";
          if (!Array.isArray(keys))
            keys = [String(keys)];
          var returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key2 = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
          var namespace = namespaces[namespaces.length - 1];
          var lng = options.lng || this.language;
          var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (lng && lng.toLowerCase() === "cimode") {
            if (appendNamespaceToCIMode) {
              var nsSeparator = options.nsSeparator || this.options.nsSeparator;
              if (returnDetails) {
                return {
                  res: "".concat(namespace).concat(nsSeparator).concat(key2),
                  usedKey: key2,
                  exactUsedKey: key2,
                  usedLng: lng,
                  usedNS: namespace
                };
              }
              return "".concat(namespace).concat(nsSeparator).concat(key2);
            }
            if (returnDetails) {
              return {
                res: key2,
                usedKey: key2,
                exactUsedKey: key2,
                usedLng: lng,
                usedNS: namespace
              };
            }
            return key2;
          }
          var resolved = this.resolve(keys, options);
          var res = resolved && resolved.res;
          var resUsedKey = resolved && resolved.usedKey || key2;
          var resExactUsedKey = resolved && resolved.exactUsedKey || key2;
          var resType = Object.prototype.toString.apply(res);
          var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
          var joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
          var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
          var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
          if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
            if (!options.returnObjects && !this.options.returnObjects) {
              if (!this.options.returnedObjectHandler) {
                this.logger.warn("accessing an object - but returnObjects options is not enabled!");
              }
              var r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$4(_objectSpread$4({}, options), {}, {
                ns: namespaces
              })) : "key '".concat(key2, " (").concat(this.language, ")' returned an object instead of string.");
              if (returnDetails) {
                resolved.res = r2;
                return resolved;
              }
              return r2;
            }
            if (keySeparator) {
              var resTypeIsArray = resType === "[object Array]";
              var copy2 = resTypeIsArray ? [] : {};
              var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
              for (var m2 in res) {
                if (Object.prototype.hasOwnProperty.call(res, m2)) {
                  var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m2);
                  copy2[m2] = this.translate(deepKey, _objectSpread$4(_objectSpread$4({}, options), {
                    joinArrays: false,
                    ns: namespaces
                  }));
                  if (copy2[m2] === deepKey)
                    copy2[m2] = res[m2];
                }
              }
              res = copy2;
            }
          } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
            res = res.join(joinArrays);
            if (res)
              res = this.extendTranslation(res, keys, options, lastKey);
          } else {
            var usedDefault = false;
            var usedKey = false;
            var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
            var hasDefaultValue = Translator2.hasDefaultValue(options);
            var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
            var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
            if (!this.isValidLookup(res) && hasDefaultValue) {
              usedDefault = true;
              res = defaultValue;
            }
            if (!this.isValidLookup(res)) {
              usedKey = true;
              res = key2;
            }
            var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
            var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
            var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
            if (usedKey || usedDefault || updateMissing) {
              this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key2, updateMissing ? defaultValue : res);
              if (keySeparator) {
                var fk2 = this.resolve(key2, _objectSpread$4(_objectSpread$4({}, options), {}, {
                  keySeparator: false
                }));
                if (fk2 && fk2.res)
                  this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              var lngs = [];
              var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
              if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
                for (var i = 0; i < fallbackLngs.length; i++) {
                  lngs.push(fallbackLngs[i]);
                }
              } else if (this.options.saveMissingTo === "all") {
                lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
              } else {
                lngs.push(options.lng || this.language);
              }
              var send = function send2(l2, k2, specificDefaultValue) {
                var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                if (_this2.options.missingKeyHandler) {
                  _this2.options.missingKeyHandler(l2, namespace, k2, defaultForMissing, updateMissing, options);
                } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                  _this2.backendConnector.saveMissing(l2, namespace, k2, defaultForMissing, updateMissing, options);
                }
                _this2.emit("missingKey", l2, namespace, k2, res);
              };
              if (this.options.saveMissing) {
                if (this.options.saveMissingPlurals && needsPluralHandling) {
                  lngs.forEach(function(language) {
                    _this2.pluralResolver.getSuffixes(language, options).forEach(function(suffix) {
                      send([language], key2 + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                    });
                  });
                } else {
                  send(lngs, key2, defaultValue);
                }
              }
            }
            res = this.extendTranslation(res, keys, options, resolved, lastKey);
            if (usedKey && res === key2 && this.options.appendNamespaceToMissingKey)
              res = "".concat(namespace, ":").concat(key2);
            if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
              if (this.options.compatibilityAPI !== "v1") {
                res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key2) : key2, usedDefault ? res : void 0);
              } else {
                res = this.options.parseMissingKeyHandler(res);
              }
            }
          }
          if (returnDetails) {
            resolved.res = res;
            return resolved;
          }
          return res;
        }
      }, {
        key: "extendTranslation",
        value: function extendTranslation(res, key2, options, resolved, lastKey) {
          var _this3 = this;
          if (this.i18nFormat && this.i18nFormat.parse) {
            res = this.i18nFormat.parse(res, _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
              resolved
            });
          } else if (!options.skipInterpolation) {
            if (options.interpolation)
              this.interpolator.init(_objectSpread$4(_objectSpread$4({}, options), {
                interpolation: _objectSpread$4(_objectSpread$4({}, this.options.interpolation), options.interpolation)
              }));
            var skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            var nestBef;
            if (skipOnVariables) {
              var nb2 = res.match(this.interpolator.nestingRegexp);
              nestBef = nb2 && nb2.length;
            }
            var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
            if (this.options.interpolation.defaultVariables)
              data = _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), data);
            res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
            if (skipOnVariables) {
              var na = res.match(this.interpolator.nestingRegexp);
              var nestAft = na && na.length;
              if (nestBef < nestAft)
                options.nest = false;
            }
            if (options.nest !== false)
              res = this.interpolator.nest(res, function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                if (lastKey && lastKey[0] === args[0] && !options.context) {
                  _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key2[0]));
                  return null;
                }
                return _this3.translate.apply(_this3, args.concat([key2]));
              }, options);
            if (options.interpolation)
              this.interpolator.reset();
          }
          var postProcess = options.postProcess || this.options.postProcess;
          var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
          if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
            res = postProcessor.handle(postProcessorNames, res, key2, this.options && this.options.postProcessPassResolved ? _objectSpread$4({
              i18nResolved: resolved
            }, options) : options, this);
          }
          return res;
        }
      }, {
        key: "resolve",
        value: function resolve(keys) {
          var _this4 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var found;
          var usedKey;
          var exactUsedKey;
          var usedLng;
          var usedNS;
          if (typeof keys === "string")
            keys = [keys];
          keys.forEach(function(k2) {
            if (_this4.isValidLookup(found))
              return;
            var extracted = _this4.extractFromKey(k2, options);
            var key2 = extracted.key;
            usedKey = key2;
            var namespaces = extracted.namespaces;
            if (_this4.options.fallbackNS)
              namespaces = namespaces.concat(_this4.options.fallbackNS);
            var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
            var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
            var needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
            var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
            namespaces.forEach(function(ns2) {
              if (_this4.isValidLookup(found))
                return;
              usedNS = ns2;
              if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns2)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                checkedLoadedFor["".concat(codes[0], "-").concat(ns2)] = true;
                _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
              }
              codes.forEach(function(code) {
                if (_this4.isValidLookup(found))
                  return;
                usedLng = code;
                var finalKeys = [key2];
                if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                  _this4.i18nFormat.addLookupKeys(finalKeys, key2, code, ns2, options);
                } else {
                  var pluralSuffix;
                  if (needsPluralHandling)
                    pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                  var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                  if (needsPluralHandling) {
                    finalKeys.push(key2 + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(key2 + zeroSuffix);
                    }
                  }
                  if (needsContextHandling) {
                    var contextKey = "".concat(key2).concat(_this4.options.contextSeparator).concat(options.context);
                    finalKeys.push(contextKey);
                    if (needsPluralHandling) {
                      finalKeys.push(contextKey + pluralSuffix);
                      if (needsZeroSuffixLookup) {
                        finalKeys.push(contextKey + zeroSuffix);
                      }
                    }
                  }
                }
                var possibleKey;
                while (possibleKey = finalKeys.pop()) {
                  if (!_this4.isValidLookup(found)) {
                    exactUsedKey = possibleKey;
                    found = _this4.getResource(code, ns2, possibleKey, options);
                  }
                }
              });
            });
          });
          return {
            res: found,
            usedKey,
            exactUsedKey,
            usedLng,
            usedNS
          };
        }
      }, {
        key: "isValidLookup",
        value: function isValidLookup(res) {
          return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
        }
      }, {
        key: "getResource",
        value: function getResource(code, ns2, key2) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (this.i18nFormat && this.i18nFormat.getResource)
            return this.i18nFormat.getResource(code, ns2, key2, options);
          return this.resourceStore.getResource(code, ns2, key2, options);
        }
      }], [{
        key: "hasDefaultValue",
        value: function hasDefaultValue(options) {
          var prefix2 = "defaultValue";
          for (var option in options) {
            if (Object.prototype.hasOwnProperty.call(options, option) && prefix2 === option.substring(0, prefix2.length) && void 0 !== options[option]) {
              return true;
            }
          }
          return false;
        }
      }]);
      return Translator2;
    }(EventEmitter);
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var LanguageUtil = function() {
      function LanguageUtil2(options) {
        _classCallCheck(this, LanguageUtil2);
        this.options = options;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create("languageUtils");
      }
      _createClass(LanguageUtil2, [{
        key: "getScriptPartFromCode",
        value: function getScriptPartFromCode(code) {
          if (!code || code.indexOf("-") < 0)
            return null;
          var p2 = code.split("-");
          if (p2.length === 2)
            return null;
          p2.pop();
          if (p2[p2.length - 1].toLowerCase() === "x")
            return null;
          return this.formatLanguageCode(p2.join("-"));
        }
      }, {
        key: "getLanguagePartFromCode",
        value: function getLanguagePartFromCode(code) {
          if (!code || code.indexOf("-") < 0)
            return code;
          var p2 = code.split("-");
          return this.formatLanguageCode(p2[0]);
        }
      }, {
        key: "formatLanguageCode",
        value: function formatLanguageCode(code) {
          if (typeof code === "string" && code.indexOf("-") > -1) {
            var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            var p2 = code.split("-");
            if (this.options.lowerCaseLng) {
              p2 = p2.map(function(part) {
                return part.toLowerCase();
              });
            } else if (p2.length === 2) {
              p2[0] = p2[0].toLowerCase();
              p2[1] = p2[1].toUpperCase();
              if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
                p2[1] = capitalize(p2[1].toLowerCase());
            } else if (p2.length === 3) {
              p2[0] = p2[0].toLowerCase();
              if (p2[1].length === 2)
                p2[1] = p2[1].toUpperCase();
              if (p2[0] !== "sgn" && p2[2].length === 2)
                p2[2] = p2[2].toUpperCase();
              if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
                p2[1] = capitalize(p2[1].toLowerCase());
              if (specialCases.indexOf(p2[2].toLowerCase()) > -1)
                p2[2] = capitalize(p2[2].toLowerCase());
            }
            return p2.join("-");
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
        }
      }, {
        key: "isSupportedCode",
        value: function isSupportedCode(code) {
          if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
            code = this.getLanguagePartFromCode(code);
          }
          return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
        }
      }, {
        key: "getBestMatchFromCodes",
        value: function getBestMatchFromCodes(codes) {
          var _this = this;
          if (!codes)
            return null;
          var found;
          codes.forEach(function(code) {
            if (found)
              return;
            var cleanedLng = _this.formatLanguageCode(code);
            if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
              found = cleanedLng;
          });
          if (!found && this.options.supportedLngs) {
            codes.forEach(function(code) {
              if (found)
                return;
              var lngOnly = _this.getLanguagePartFromCode(code);
              if (_this.isSupportedCode(lngOnly))
                return found = lngOnly;
              found = _this.options.supportedLngs.find(function(supportedLng) {
                if (supportedLng.indexOf(lngOnly) === 0)
                  return supportedLng;
              });
            });
          }
          if (!found)
            found = this.getFallbackCodes(this.options.fallbackLng)[0];
          return found;
        }
      }, {
        key: "getFallbackCodes",
        value: function getFallbackCodes(fallbacks, code) {
          if (!fallbacks)
            return [];
          if (typeof fallbacks === "function")
            fallbacks = fallbacks(code);
          if (typeof fallbacks === "string")
            fallbacks = [fallbacks];
          if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
            return fallbacks;
          if (!code)
            return fallbacks["default"] || [];
          var found = fallbacks[code];
          if (!found)
            found = fallbacks[this.getScriptPartFromCode(code)];
          if (!found)
            found = fallbacks[this.formatLanguageCode(code)];
          if (!found)
            found = fallbacks[this.getLanguagePartFromCode(code)];
          if (!found)
            found = fallbacks["default"];
          return found || [];
        }
      }, {
        key: "toResolveHierarchy",
        value: function toResolveHierarchy(code, fallbackCode) {
          var _this2 = this;
          var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
          var codes = [];
          var addCode = function addCode2(c2) {
            if (!c2)
              return;
            if (_this2.isSupportedCode(c2)) {
              codes.push(c2);
            } else {
              _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c2));
            }
          };
          if (typeof code === "string" && code.indexOf("-") > -1) {
            if (this.options.load !== "languageOnly")
              addCode(this.formatLanguageCode(code));
            if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
              addCode(this.getScriptPartFromCode(code));
            if (this.options.load !== "currentOnly")
              addCode(this.getLanguagePartFromCode(code));
          } else if (typeof code === "string") {
            addCode(this.formatLanguageCode(code));
          }
          fallbackCodes.forEach(function(fc2) {
            if (codes.indexOf(fc2) < 0)
              addCode(_this2.formatLanguageCode(fc2));
          });
          return codes;
        }
      }]);
      return LanguageUtil2;
    }();
    var sets = [{
      lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
      nr: [1, 2],
      fc: 1
    }, {
      lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
      nr: [1, 2],
      fc: 2
    }, {
      lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
      nr: [1],
      fc: 3
    }, {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4
    }, {
      lngs: ["ar"],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5
    }, {
      lngs: ["cs", "sk"],
      nr: [1, 2, 5],
      fc: 6
    }, {
      lngs: ["csb", "pl"],
      nr: [1, 2, 5],
      fc: 7
    }, {
      lngs: ["cy"],
      nr: [1, 2, 3, 8],
      fc: 8
    }, {
      lngs: ["fr"],
      nr: [1, 2],
      fc: 9
    }, {
      lngs: ["ga"],
      nr: [1, 2, 3, 7, 11],
      fc: 10
    }, {
      lngs: ["gd"],
      nr: [1, 2, 3, 20],
      fc: 11
    }, {
      lngs: ["is"],
      nr: [1, 2],
      fc: 12
    }, {
      lngs: ["jv"],
      nr: [0, 1],
      fc: 13
    }, {
      lngs: ["kw"],
      nr: [1, 2, 3, 4],
      fc: 14
    }, {
      lngs: ["lt"],
      nr: [1, 2, 10],
      fc: 15
    }, {
      lngs: ["lv"],
      nr: [1, 2, 0],
      fc: 16
    }, {
      lngs: ["mk"],
      nr: [1, 2],
      fc: 17
    }, {
      lngs: ["mnk"],
      nr: [0, 1, 2],
      fc: 18
    }, {
      lngs: ["mt"],
      nr: [1, 2, 11, 20],
      fc: 19
    }, {
      lngs: ["or"],
      nr: [2, 1],
      fc: 2
    }, {
      lngs: ["ro"],
      nr: [1, 2, 20],
      fc: 20
    }, {
      lngs: ["sl"],
      nr: [5, 1, 2, 3],
      fc: 21
    }, {
      lngs: ["he", "iw"],
      nr: [1, 2, 20, 21],
      fc: 22
    }];
    var _rulesPluralsTypes = {
      1: function _(n2) {
        return Number(n2 > 1);
      },
      2: function _(n2) {
        return Number(n2 != 1);
      },
      3: function _(n2) {
        return 0;
      },
      4: function _(n2) {
        return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
      },
      5: function _(n2) {
        return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : n2 == 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5);
      },
      6: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2);
      },
      7: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
      },
      8: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 != 8 && n2 != 11 ? 2 : 3);
      },
      9: function _(n2) {
        return Number(n2 >= 2);
      },
      10: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4);
      },
      11: function _(n2) {
        return Number(n2 == 1 || n2 == 11 ? 0 : n2 == 2 || n2 == 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3);
      },
      12: function _(n2) {
        return Number(n2 % 10 != 1 || n2 % 100 == 11);
      },
      13: function _(n2) {
        return Number(n2 !== 0);
      },
      14: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 == 3 ? 2 : 3);
      },
      15: function _(n2) {
        return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
      },
      16: function _(n2) {
        return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 !== 0 ? 1 : 2);
      },
      17: function _(n2) {
        return Number(n2 == 1 || n2 % 10 == 1 && n2 % 100 != 11 ? 0 : 1);
      },
      18: function _(n2) {
        return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : 2);
      },
      19: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3);
      },
      20: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2);
      },
      21: function _(n2) {
        return Number(n2 % 100 == 1 ? 1 : n2 % 100 == 2 ? 2 : n2 % 100 == 3 || n2 % 100 == 4 ? 3 : 0);
      },
      22: function _(n2) {
        return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : (n2 < 0 || n2 > 10) && n2 % 10 == 0 ? 2 : 3);
      }
    };
    var deprecatedJsonVersions = ["v1", "v2", "v3"];
    var suffixesOrder = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5
    };
    function createRules() {
      var rules = {};
      sets.forEach(function(set) {
        set.lngs.forEach(function(l2) {
          rules[l2] = {
            numbers: set.nr,
            plurals: _rulesPluralsTypes[set.fc]
          };
        });
      });
      return rules;
    }
    var PluralResolver = function() {
      function PluralResolver2(languageUtils) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, PluralResolver2);
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create("pluralResolver");
        if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
          this.options.compatibilityJSON = "v3";
          this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
        }
        this.rules = createRules();
      }
      _createClass(PluralResolver2, [{
        key: "addRule",
        value: function addRule(lng, obj) {
          this.rules[lng] = obj;
        }
      }, {
        key: "getRule",
        value: function getRule(code) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi()) {
            try {
              return new Intl.PluralRules(code, {
                type: options.ordinal ? "ordinal" : "cardinal"
              });
            } catch (_unused) {
              return;
            }
          }
          return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
        }
      }, {
        key: "needsPlural",
        value: function needsPlural(code) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var rule = this.getRule(code, options);
          if (this.shouldUseIntlApi()) {
            return rule && rule.resolvedOptions().pluralCategories.length > 1;
          }
          return rule && rule.numbers.length > 1;
        }
      }, {
        key: "getPluralFormsOfKey",
        value: function getPluralFormsOfKey(code, key2) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(code, options).map(function(suffix) {
            return "".concat(key2).concat(suffix);
          });
        }
      }, {
        key: "getSuffixes",
        value: function getSuffixes(code) {
          var _this = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var rule = this.getRule(code, options);
          if (!rule) {
            return [];
          }
          if (this.shouldUseIntlApi()) {
            return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
              return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
            }).map(function(pluralCategory) {
              return "".concat(_this.options.prepend).concat(pluralCategory);
            });
          }
          return rule.numbers.map(function(number) {
            return _this.getSuffix(code, number, options);
          });
        }
      }, {
        key: "getSuffix",
        value: function getSuffix(code, count) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var rule = this.getRule(code, options);
          if (rule) {
            if (this.shouldUseIntlApi()) {
              return "".concat(this.options.prepend).concat(rule.select(count));
            }
            return this.getSuffixRetroCompatible(rule, count);
          }
          this.logger.warn("no plural rule found for: ".concat(code));
          return "";
        }
      }, {
        key: "getSuffixRetroCompatible",
        value: function getSuffixRetroCompatible(rule, count) {
          var _this2 = this;
          var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
          var suffix = rule.numbers[idx];
          if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
            if (suffix === 2) {
              suffix = "plural";
            } else if (suffix === 1) {
              suffix = "";
            }
          }
          var returnSuffix = function returnSuffix2() {
            return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
          };
          if (this.options.compatibilityJSON === "v1") {
            if (suffix === 1)
              return "";
            if (typeof suffix === "number")
              return "_plural_".concat(suffix.toString());
            return returnSuffix();
          } else if (this.options.compatibilityJSON === "v2") {
            return returnSuffix();
          } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
            return returnSuffix();
          }
          return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
        }
      }, {
        key: "shouldUseIntlApi",
        value: function shouldUseIntlApi() {
          return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
        }
      }]);
      return PluralResolver2;
    }();
    function ownKeys$3(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$3(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$3(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    var Interpolator = function() {
      function Interpolator2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, Interpolator2);
        this.logger = baseLogger.create("interpolator");
        this.options = options;
        this.format = options.interpolation && options.interpolation.format || function(value) {
          return value;
        };
        this.init(options);
      }
      _createClass(Interpolator2, [{
        key: "init",
        value: function init() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!options.interpolation)
            options.interpolation = {
              escapeValue: true
            };
          var iOpts = options.interpolation;
          this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
          this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
          this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
          this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
          this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
          this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
          this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
          this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
          this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
          this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
          this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
          this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
          this.resetRegExp();
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.options)
            this.init(this.options);
        }
      }, {
        key: "resetRegExp",
        value: function resetRegExp() {
          var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(regexpStr, "g");
          var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
          this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
          var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
        }
      }, {
        key: "interpolate",
        value: function interpolate(str, data, lng, options) {
          var _this = this;
          var match2;
          var value;
          var replaces;
          var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
          function regexSafe(val) {
            return val.replace(/\$/g, "$$$$");
          }
          var handleFormat = function handleFormat2(key2) {
            if (key2.indexOf(_this.formatSeparator) < 0) {
              var path = getPathWithDefaults(data, defaultData, key2);
              return _this.alwaysFormat ? _this.format(path, void 0, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
                interpolationkey: key2
              })) : path;
            }
            var p2 = key2.split(_this.formatSeparator);
            var k2 = p2.shift().trim();
            var f2 = p2.join(_this.formatSeparator).trim();
            return _this.format(getPathWithDefaults(data, defaultData, k2), f2, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
              interpolationkey: k2
            }));
          };
          this.resetRegExp();
          var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
          var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
          var todos = [{
            regex: this.regexpUnescape,
            safeValue: function safeValue(val) {
              return regexSafe(val);
            }
          }, {
            regex: this.regexp,
            safeValue: function safeValue(val) {
              return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
            }
          }];
          todos.forEach(function(todo) {
            replaces = 0;
            while (match2 = todo.regex.exec(str)) {
              var matchedVar = match2[1].trim();
              value = handleFormat(matchedVar);
              if (value === void 0) {
                if (typeof missingInterpolationHandler === "function") {
                  var temp = missingInterpolationHandler(str, match2, options);
                  value = typeof temp === "string" ? temp : "";
                } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
                  value = "";
                } else if (skipOnVariables) {
                  value = match2[0];
                  continue;
                } else {
                  _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                  value = "";
                }
              } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
                value = makeString(value);
              }
              var safeValue = todo.safeValue(value);
              str = str.replace(match2[0], safeValue);
              if (skipOnVariables) {
                todo.regex.lastIndex += value.length;
                todo.regex.lastIndex -= match2[0].length;
              } else {
                todo.regex.lastIndex = 0;
              }
              replaces++;
              if (replaces >= _this.maxReplaces) {
                break;
              }
            }
          });
          return str;
        }
      }, {
        key: "nest",
        value: function nest(str, fc2) {
          var _this2 = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var match2;
          var value;
          var clonedOptions;
          function handleHasOptions(key2, inheritedOptions) {
            var sep = this.nestingOptionsSeparator;
            if (key2.indexOf(sep) < 0)
              return key2;
            var c2 = key2.split(new RegExp("".concat(sep, "[ ]*{")));
            var optionsString = "{".concat(c2[1]);
            key2 = c2[0];
            optionsString = this.interpolate(optionsString, clonedOptions);
            var matchedSingleQuotes = optionsString.match(/'/g);
            var matchedDoubleQuotes = optionsString.match(/"/g);
            if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
              optionsString = optionsString.replace(/'/g, '"');
            }
            try {
              clonedOptions = JSON.parse(optionsString);
              if (inheritedOptions)
                clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
            } catch (e2) {
              this.logger.warn("failed parsing options string in nesting for key ".concat(key2), e2);
              return "".concat(key2).concat(sep).concat(optionsString);
            }
            delete clonedOptions.defaultValue;
            return key2;
          }
          while (match2 = this.nestingRegexp.exec(str)) {
            var formatters2 = [];
            clonedOptions = _objectSpread$3({}, options);
            clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
            clonedOptions.applyPostProcessor = false;
            delete clonedOptions.defaultValue;
            var doReduce = false;
            if (match2[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match2[1])) {
              var r2 = match2[1].split(this.formatSeparator).map(function(elem) {
                return elem.trim();
              });
              match2[1] = r2.shift();
              formatters2 = r2;
              doReduce = true;
            }
            value = fc2(handleHasOptions.call(this, match2[1].trim(), clonedOptions), clonedOptions);
            if (value && match2[0] === str && typeof value !== "string")
              return value;
            if (typeof value !== "string")
              value = makeString(value);
            if (!value) {
              this.logger.warn("missed to resolve ".concat(match2[1], " for nesting ").concat(str));
              value = "";
            }
            if (doReduce) {
              value = formatters2.reduce(function(v2, f2) {
                return _this2.format(v2, f2, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                  interpolationkey: match2[1].trim()
                }));
              }, value.trim());
            }
            str = str.replace(match2[0], value);
            this.regexp.lastIndex = 0;
          }
          return str;
        }
      }]);
      return Interpolator2;
    }();
    function ownKeys$2(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$2(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function parseFormatStr(formatStr) {
      var formatName = formatStr.toLowerCase().trim();
      var formatOptions = {};
      if (formatStr.indexOf("(") > -1) {
        var p2 = formatStr.split("(");
        formatName = p2[0].toLowerCase().trim();
        var optStr = p2[1].substring(0, p2[1].length - 1);
        if (formatName === "currency" && optStr.indexOf(":") < 0) {
          if (!formatOptions.currency)
            formatOptions.currency = optStr.trim();
        } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
          if (!formatOptions.range)
            formatOptions.range = optStr.trim();
        } else {
          var opts = optStr.split(";");
          opts.forEach(function(opt) {
            if (!opt)
              return;
            var _opt$split = opt.split(":"), _opt$split2 = _toArray(_opt$split), key2 = _opt$split2[0], rest = _opt$split2.slice(1);
            var val = rest.join(":").trim().replace(/^'+|'+$/g, "");
            if (!formatOptions[key2.trim()])
              formatOptions[key2.trim()] = val;
            if (val === "false")
              formatOptions[key2.trim()] = false;
            if (val === "true")
              formatOptions[key2.trim()] = true;
            if (!isNaN(val))
              formatOptions[key2.trim()] = parseInt(val, 10);
          });
        }
      }
      return {
        formatName,
        formatOptions
      };
    }
    function createCachedFormatter(fn) {
      var cache2 = {};
      return function invokeFormatter(val, lng, options) {
        var key2 = lng + JSON.stringify(options);
        var formatter = cache2[key2];
        if (!formatter) {
          formatter = fn(lng, options);
          cache2[key2] = formatter;
        }
        return formatter(val);
      };
    }
    var Formatter = function() {
      function Formatter2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, Formatter2);
        this.logger = baseLogger.create("formatter");
        this.options = options;
        this.formats = {
          number: createCachedFormatter(function(lng, opt) {
            var formatter = new Intl.NumberFormat(lng, _objectSpread$2({}, opt));
            return function(val) {
              return formatter.format(val);
            };
          }),
          currency: createCachedFormatter(function(lng, opt) {
            var formatter = new Intl.NumberFormat(lng, _objectSpread$2(_objectSpread$2({}, opt), {}, {
              style: "currency"
            }));
            return function(val) {
              return formatter.format(val);
            };
          }),
          datetime: createCachedFormatter(function(lng, opt) {
            var formatter = new Intl.DateTimeFormat(lng, _objectSpread$2({}, opt));
            return function(val) {
              return formatter.format(val);
            };
          }),
          relativetime: createCachedFormatter(function(lng, opt) {
            var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$2({}, opt));
            return function(val) {
              return formatter.format(val, opt.range || "day");
            };
          }),
          list: createCachedFormatter(function(lng, opt) {
            var formatter = new Intl.ListFormat(lng, _objectSpread$2({}, opt));
            return function(val) {
              return formatter.format(val);
            };
          })
        };
        this.init(options);
      }
      _createClass(Formatter2, [{
        key: "init",
        value: function init(services) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          var iOpts = options.interpolation;
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
        }
      }, {
        key: "add",
        value: function add(name2, fc2) {
          this.formats[name2.toLowerCase().trim()] = fc2;
        }
      }, {
        key: "addCached",
        value: function addCached(name2, fc2) {
          this.formats[name2.toLowerCase().trim()] = createCachedFormatter(fc2);
        }
      }, {
        key: "format",
        value: function format2(value, _format, lng) {
          var _this = this;
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var formats = _format.split(this.formatSeparator);
          var result2 = formats.reduce(function(mem, f2) {
            var _parseFormatStr = parseFormatStr(f2), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
            if (_this.formats[formatName]) {
              var formatted = mem;
              try {
                var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
                var l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
                formatted = _this.formats[formatName](mem, l2, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, formatOptions), options), valOptions));
              } catch (error) {
                _this.logger.warn(error);
              }
              return formatted;
            } else {
              _this.logger.warn("there was no format function for ".concat(formatName));
            }
            return mem;
          }, value);
          return result2;
        }
      }]);
      return Formatter2;
    }();
    function ownKeys$1(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$1(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function _createSuper$1(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result2;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result2 = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result2 = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result2);
      };
    }
    function _isNativeReflectConstruct$1() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function removePending(q2, name2) {
      if (q2.pending[name2] !== void 0) {
        delete q2.pending[name2];
        q2.pendingCount--;
      }
    }
    var Connector = function(_EventEmitter) {
      _inherits(Connector2, _EventEmitter);
      var _super = _createSuper$1(Connector2);
      function Connector2(backend, store, services) {
        var _this;
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        _classCallCheck(this, Connector2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        _this.backend = backend;
        _this.store = store;
        _this.services = services;
        _this.languageUtils = services.languageUtils;
        _this.options = options;
        _this.logger = baseLogger.create("backendConnector");
        _this.waitingReads = [];
        _this.maxParallelReads = options.maxParallelReads || 10;
        _this.readingCalls = 0;
        _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
        _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
        _this.state = {};
        _this.queue = [];
        if (_this.backend && _this.backend.init) {
          _this.backend.init(services, options.backend, options);
        }
        return _this;
      }
      _createClass(Connector2, [{
        key: "queueLoad",
        value: function queueLoad(languages, namespaces, options, callback) {
          var _this2 = this;
          var toLoad = {};
          var pending = {};
          var toLoadLanguages = {};
          var toLoadNamespaces = {};
          languages.forEach(function(lng) {
            var hasAllNamespaces = true;
            namespaces.forEach(function(ns2) {
              var name2 = "".concat(lng, "|").concat(ns2);
              if (!options.reload && _this2.store.hasResourceBundle(lng, ns2)) {
                _this2.state[name2] = 2;
              } else if (_this2.state[name2] < 0)
                ;
              else if (_this2.state[name2] === 1) {
                if (pending[name2] === void 0)
                  pending[name2] = true;
              } else {
                _this2.state[name2] = 1;
                hasAllNamespaces = false;
                if (pending[name2] === void 0)
                  pending[name2] = true;
                if (toLoad[name2] === void 0)
                  toLoad[name2] = true;
                if (toLoadNamespaces[ns2] === void 0)
                  toLoadNamespaces[ns2] = true;
              }
            });
            if (!hasAllNamespaces)
              toLoadLanguages[lng] = true;
          });
          if (Object.keys(toLoad).length || Object.keys(pending).length) {
            this.queue.push({
              pending,
              pendingCount: Object.keys(pending).length,
              loaded: {},
              errors: [],
              callback
            });
          }
          return {
            toLoad: Object.keys(toLoad),
            pending: Object.keys(pending),
            toLoadLanguages: Object.keys(toLoadLanguages),
            toLoadNamespaces: Object.keys(toLoadNamespaces)
          };
        }
      }, {
        key: "loaded",
        value: function loaded(name2, err, data) {
          var s = name2.split("|");
          var lng = s[0];
          var ns2 = s[1];
          if (err)
            this.emit("failedLoading", lng, ns2, err);
          if (data) {
            this.store.addResourceBundle(lng, ns2, data);
          }
          this.state[name2] = err ? -1 : 2;
          var loaded2 = {};
          this.queue.forEach(function(q2) {
            pushPath(q2.loaded, [lng], ns2);
            removePending(q2, name2);
            if (err)
              q2.errors.push(err);
            if (q2.pendingCount === 0 && !q2.done) {
              Object.keys(q2.loaded).forEach(function(l2) {
                if (!loaded2[l2])
                  loaded2[l2] = {};
                var loadedKeys = q2.loaded[l2];
                if (loadedKeys.length) {
                  loadedKeys.forEach(function(n2) {
                    if (loaded2[l2][n2] === void 0)
                      loaded2[l2][n2] = true;
                  });
                }
              });
              q2.done = true;
              if (q2.errors.length) {
                q2.callback(q2.errors);
              } else {
                q2.callback();
              }
            }
          });
          this.emit("loaded", loaded2);
          this.queue = this.queue.filter(function(q2) {
            return !q2.done;
          });
        }
      }, {
        key: "read",
        value: function read(lng, ns2, fcName) {
          var _this3 = this;
          var tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          var wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
          var callback = arguments.length > 5 ? arguments[5] : void 0;
          if (!lng.length)
            return callback(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng,
              ns: ns2,
              fcName,
              tried,
              wait,
              callback
            });
            return;
          }
          this.readingCalls++;
          var resolver = function resolver2(err, data) {
            _this3.readingCalls--;
            if (_this3.waitingReads.length > 0) {
              var next2 = _this3.waitingReads.shift();
              _this3.read(next2.lng, next2.ns, next2.fcName, next2.tried, next2.wait, next2.callback);
            }
            if (err && data && tried < _this3.maxRetries) {
              setTimeout(function() {
                _this3.read.call(_this3, lng, ns2, fcName, tried + 1, wait * 2, callback);
              }, wait);
              return;
            }
            callback(err, data);
          };
          var fc2 = this.backend[fcName].bind(this.backend);
          if (fc2.length === 2) {
            try {
              var r2 = fc2(lng, ns2);
              if (r2 && typeof r2.then === "function") {
                r2.then(function(data) {
                  return resolver(null, data);
                })["catch"](resolver);
              } else {
                resolver(null, r2);
              }
            } catch (err) {
              resolver(err);
            }
            return;
          }
          return fc2(lng, ns2, resolver);
        }
      }, {
        key: "prepareLoading",
        value: function prepareLoading(languages, namespaces) {
          var _this4 = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var callback = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend) {
            this.logger.warn("No backend was added via i18next.use. Will not load resources.");
            return callback && callback();
          }
          if (typeof languages === "string")
            languages = this.languageUtils.toResolveHierarchy(languages);
          if (typeof namespaces === "string")
            namespaces = [namespaces];
          var toLoad = this.queueLoad(languages, namespaces, options, callback);
          if (!toLoad.toLoad.length) {
            if (!toLoad.pending.length)
              callback();
            return null;
          }
          toLoad.toLoad.forEach(function(name2) {
            _this4.loadOne(name2);
          });
        }
      }, {
        key: "load",
        value: function load(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {}, callback);
        }
      }, {
        key: "reload",
        value: function reload(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {
            reload: true
          }, callback);
        }
      }, {
        key: "loadOne",
        value: function loadOne(name2) {
          var _this5 = this;
          var prefix2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          var s = name2.split("|");
          var lng = s[0];
          var ns2 = s[1];
          this.read(lng, ns2, "read", void 0, void 0, function(err, data) {
            if (err)
              _this5.logger.warn("".concat(prefix2, "loading namespace ").concat(ns2, " for language ").concat(lng, " failed"), err);
            if (!err && data)
              _this5.logger.log("".concat(prefix2, "loaded namespace ").concat(ns2, " for language ").concat(lng), data);
            _this5.loaded(name2, err, data);
          });
        }
      }, {
        key: "saveMissing",
        value: function saveMissing(languages, namespace, key2, fallbackValue, isUpdate) {
          var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          var clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
          };
          if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
            this.logger.warn('did not save key "'.concat(key2, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return;
          }
          if (key2 === void 0 || key2 === null || key2 === "")
            return;
          if (this.backend && this.backend.create) {
            var opts = _objectSpread$1(_objectSpread$1({}, options), {}, {
              isUpdate
            });
            var fc2 = this.backend.create.bind(this.backend);
            if (fc2.length < 6) {
              try {
                var r2;
                if (fc2.length === 5) {
                  r2 = fc2(languages, namespace, key2, fallbackValue, opts);
                } else {
                  r2 = fc2(languages, namespace, key2, fallbackValue);
                }
                if (r2 && typeof r2.then === "function") {
                  r2.then(function(data) {
                    return clb(null, data);
                  })["catch"](clb);
                } else {
                  clb(null, r2);
                }
              } catch (err) {
                clb(err);
              }
            } else {
              fc2(languages, namespace, key2, fallbackValue, clb, opts);
            }
          }
          if (!languages || !languages[0])
            return;
          this.store.addResource(languages[0], namespace, key2, fallbackValue);
        }
      }]);
      return Connector2;
    }(EventEmitter);
    function get() {
      return {
        debug: false,
        initImmediate: true,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: "all",
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: "fallback",
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: true,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: function handle(args) {
          var ret = {};
          if (_typeof$1(args[1]) === "object")
            ret = args[1];
          if (typeof args[1] === "string")
            ret.defaultValue = args[1];
          if (typeof args[2] === "string")
            ret.tDescription = args[2];
          if (_typeof$1(args[2]) === "object" || _typeof$1(args[3]) === "object") {
            var options = args[3] || args[2];
            Object.keys(options).forEach(function(key2) {
              ret[key2] = options[key2];
            });
          }
          return ret;
        },
        interpolation: {
          escapeValue: true,
          format: function format2(value, _format, lng, options) {
            return value;
          },
          prefix: "{{",
          suffix: "}}",
          formatSeparator: ",",
          unescapePrefix: "-",
          nestingPrefix: "$t(",
          nestingSuffix: ")",
          nestingOptionsSeparator: ",",
          maxReplaces: 1e3,
          skipOnVariables: true
        }
      };
    }
    function transformOptions(options) {
      if (typeof options.ns === "string")
        options.ns = [options.ns];
      if (typeof options.fallbackLng === "string")
        options.fallbackLng = [options.fallbackLng];
      if (typeof options.fallbackNS === "string")
        options.fallbackNS = [options.fallbackNS];
      if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
        options.supportedLngs = options.supportedLngs.concat(["cimode"]);
      }
      return options;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
          _defineProperty$1(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result2;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result2 = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result2 = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result2);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function noop() {
    }
    function bindMemberFunctions(inst) {
      var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
      mems.forEach(function(mem) {
        if (typeof inst[mem] === "function") {
          inst[mem] = inst[mem].bind(inst);
        }
      });
    }
    var I18n = function(_EventEmitter) {
      _inherits(I18n2, _EventEmitter);
      var _super = _createSuper(I18n2);
      function I18n2() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : void 0;
        _classCallCheck(this, I18n2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized(_this));
        }
        _this.options = transformOptions(options);
        _this.services = {};
        _this.logger = baseLogger;
        _this.modules = {
          external: []
        };
        bindMemberFunctions(_assertThisInitialized(_this));
        if (callback && !_this.isInitialized && !options.isClone) {
          if (!_this.options.initImmediate) {
            _this.init(options, callback);
            return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
          }
          setTimeout(function() {
            _this.init(options, callback);
          }, 0);
        }
        return _this;
      }
      _createClass(I18n2, [{
        key: "init",
        value: function init() {
          var _this2 = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : void 0;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          if (!options.defaultNS && options.defaultNS !== false && options.ns) {
            if (typeof options.ns === "string") {
              options.defaultNS = options.ns;
            } else if (options.ns.indexOf("translation") < 0) {
              options.defaultNS = options.ns[0];
            }
          }
          var defOpts = get();
          this.options = _objectSpread(_objectSpread(_objectSpread({}, defOpts), this.options), transformOptions(options));
          if (this.options.compatibilityAPI !== "v1") {
            this.options.interpolation = _objectSpread(_objectSpread({}, defOpts.interpolation), this.options.interpolation);
          }
          if (options.keySeparator !== void 0) {
            this.options.userDefinedKeySeparator = options.keySeparator;
          }
          if (options.nsSeparator !== void 0) {
            this.options.userDefinedNsSeparator = options.nsSeparator;
          }
          function createClassOnDemand(ClassOrObject) {
            if (!ClassOrObject)
              return null;
            if (typeof ClassOrObject === "function")
              return new ClassOrObject();
            return ClassOrObject;
          }
          if (!this.options.isClone) {
            if (this.modules.logger) {
              baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
            } else {
              baseLogger.init(null, this.options);
            }
            var formatter;
            if (this.modules.formatter) {
              formatter = this.modules.formatter;
            } else if (typeof Intl !== "undefined") {
              formatter = Formatter;
            }
            var lu = new LanguageUtil(this.options);
            this.store = new ResourceStore(this.options.resources, this.options);
            var s = this.services;
            s.logger = baseLogger;
            s.resourceStore = this.store;
            s.languageUtils = lu;
            s.pluralResolver = new PluralResolver(lu, {
              prepend: this.options.pluralSeparator,
              compatibilityJSON: this.options.compatibilityJSON,
              simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
              s.formatter = createClassOnDemand(formatter);
              s.formatter.init(s, this.options);
              this.options.interpolation.format = s.formatter.format.bind(s.formatter);
            }
            s.interpolator = new Interpolator(this.options);
            s.utils = {
              hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            };
            s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
            s.backendConnector.on("*", function(event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              _this2.emit.apply(_this2, [event].concat(args));
            });
            if (this.modules.languageDetector) {
              s.languageDetector = createClassOnDemand(this.modules.languageDetector);
              if (s.languageDetector.init)
                s.languageDetector.init(s, this.options.detection, this.options);
            }
            if (this.modules.i18nFormat) {
              s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
              if (s.i18nFormat.init)
                s.i18nFormat.init(this);
            }
            this.translator = new Translator(this.services, this.options);
            this.translator.on("*", function(event) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              _this2.emit.apply(_this2, [event].concat(args));
            });
            this.modules.external.forEach(function(m2) {
              if (m2.init)
                m2.init(_this2);
            });
          }
          this.format = this.options.interpolation.format;
          if (!callback)
            callback = noop;
          if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            if (codes.length > 0 && codes[0] !== "dev")
              this.options.lng = codes[0];
          }
          if (!this.services.languageDetector && !this.options.lng) {
            this.logger.warn("init: no languageDetector is used and no lng is defined");
          }
          var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
          storeApi.forEach(function(fcName) {
            _this2[fcName] = function() {
              var _this2$store;
              return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
            };
          });
          var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
          storeApiChained.forEach(function(fcName) {
            _this2[fcName] = function() {
              var _this2$store2;
              (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
              return _this2;
            };
          });
          var deferred = defer();
          var load = function load2() {
            var finish = function finish2(err, t2) {
              if (_this2.isInitialized && !_this2.initializedStoreOnce)
                _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
              _this2.isInitialized = true;
              if (!_this2.options.isClone)
                _this2.logger.log("initialized", _this2.options);
              _this2.emit("initialized", _this2.options);
              deferred.resolve(t2);
              callback(err, t2);
            };
            if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
              return finish(null, _this2.t.bind(_this2));
            _this2.changeLanguage(_this2.options.lng, finish);
          };
          if (this.options.resources || !this.options.initImmediate) {
            load();
          } else {
            setTimeout(load, 0);
          }
          return deferred;
        }
      }, {
        key: "loadResources",
        value: function loadResources(language) {
          var _this3 = this;
          var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
          var usedCallback = callback;
          var usedLng = typeof language === "string" ? language : this.language;
          if (typeof language === "function")
            usedCallback = language;
          if (!this.options.resources || this.options.partialBundledLanguages) {
            if (usedLng && usedLng.toLowerCase() === "cimode")
              return usedCallback();
            var toLoad = [];
            var append2 = function append3(lng) {
              if (!lng)
                return;
              var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
              lngs.forEach(function(l2) {
                if (toLoad.indexOf(l2) < 0)
                  toLoad.push(l2);
              });
            };
            if (!usedLng) {
              var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              fallbacks.forEach(function(l2) {
                return append2(l2);
              });
            } else {
              append2(usedLng);
            }
            if (this.options.preload) {
              this.options.preload.forEach(function(l2) {
                return append2(l2);
              });
            }
            this.services.backendConnector.load(toLoad, this.options.ns, function(e2) {
              if (!e2 && !_this3.resolvedLanguage && _this3.language)
                _this3.setResolvedLanguage(_this3.language);
              usedCallback(e2);
            });
          } else {
            usedCallback(null);
          }
        }
      }, {
        key: "reloadResources",
        value: function reloadResources(lngs, ns2, callback) {
          var deferred = defer();
          if (!lngs)
            lngs = this.languages;
          if (!ns2)
            ns2 = this.options.ns;
          if (!callback)
            callback = noop;
          this.services.backendConnector.reload(lngs, ns2, function(err) {
            deferred.resolve();
            callback(err);
          });
          return deferred;
        }
      }, {
        key: "use",
        value: function use(module2) {
          if (!module2)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!module2.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          if (module2.type === "backend") {
            this.modules.backend = module2;
          }
          if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
            this.modules.logger = module2;
          }
          if (module2.type === "languageDetector") {
            this.modules.languageDetector = module2;
          }
          if (module2.type === "i18nFormat") {
            this.modules.i18nFormat = module2;
          }
          if (module2.type === "postProcessor") {
            postProcessor.addPostProcessor(module2);
          }
          if (module2.type === "formatter") {
            this.modules.formatter = module2;
          }
          if (module2.type === "3rdParty") {
            this.modules.external.push(module2);
          }
          return this;
        }
      }, {
        key: "setResolvedLanguage",
        value: function setResolvedLanguage(l2) {
          if (!l2 || !this.languages)
            return;
          if (["cimode", "dev"].indexOf(l2) > -1)
            return;
          for (var li2 = 0; li2 < this.languages.length; li2++) {
            var lngInLngs = this.languages[li2];
            if (["cimode", "dev"].indexOf(lngInLngs) > -1)
              continue;
            if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
              this.resolvedLanguage = lngInLngs;
              break;
            }
          }
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lng, callback) {
          var _this4 = this;
          this.isLanguageChangingTo = lng;
          var deferred = defer();
          this.emit("languageChanging", lng);
          var setLngProps = function setLngProps2(l2) {
            _this4.language = l2;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l2);
            _this4.resolvedLanguage = void 0;
            _this4.setResolvedLanguage(l2);
          };
          var done = function done2(err, l2) {
            if (l2) {
              setLngProps(l2);
              _this4.translator.changeLanguage(l2);
              _this4.isLanguageChangingTo = void 0;
              _this4.emit("languageChanged", l2);
              _this4.logger.log("languageChanged", l2);
            } else {
              _this4.isLanguageChangingTo = void 0;
            }
            deferred.resolve(function() {
              return _this4.t.apply(_this4, arguments);
            });
            if (callback)
              callback(err, function() {
                return _this4.t.apply(_this4, arguments);
              });
          };
          var setLng = function setLng2(lngs) {
            if (!lng && !lngs && _this4.services.languageDetector)
              lngs = [];
            var l2 = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
            if (l2) {
              if (!_this4.language) {
                setLngProps(l2);
              }
              if (!_this4.translator.language)
                _this4.translator.changeLanguage(l2);
              if (_this4.services.languageDetector && _this4.services.languageDetector.cacheUserLanguage)
                _this4.services.languageDetector.cacheUserLanguage(l2);
            }
            _this4.loadResources(l2, function(err) {
              done(err, l2);
            });
          };
          if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
            setLng(this.services.languageDetector.detect());
          } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
            if (this.services.languageDetector.detect.length === 0) {
              this.services.languageDetector.detect().then(setLng);
            } else {
              this.services.languageDetector.detect(setLng);
            }
          } else {
            setLng(lng);
          }
          return deferred;
        }
      }, {
        key: "getFixedT",
        value: function getFixedT(lng, ns2, keyPrefix) {
          var _this5 = this;
          var fixedT = function fixedT2(key2, opts) {
            var options;
            if (_typeof$1(opts) !== "object") {
              for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                rest[_key3 - 2] = arguments[_key3];
              }
              options = _this5.options.overloadTranslationOptionHandler([key2, opts].concat(rest));
            } else {
              options = _objectSpread({}, opts);
            }
            options.lng = options.lng || fixedT2.lng;
            options.lngs = options.lngs || fixedT2.lngs;
            options.ns = options.ns || fixedT2.ns;
            options.keyPrefix = options.keyPrefix || keyPrefix || fixedT2.keyPrefix;
            var keySeparator = _this5.options.keySeparator || ".";
            var resultKey;
            if (options.keyPrefix && Array.isArray(key2)) {
              resultKey = key2.map(function(k2) {
                return "".concat(options.keyPrefix).concat(keySeparator).concat(k2);
              });
            } else {
              resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key2) : key2;
            }
            return _this5.t(resultKey, options);
          };
          if (typeof lng === "string") {
            fixedT.lng = lng;
          } else {
            fixedT.lngs = lng;
          }
          fixedT.ns = ns2;
          fixedT.keyPrefix = keyPrefix;
          return fixedT;
        }
      }, {
        key: "t",
        value: function t2() {
          var _this$translator;
          return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
        }
      }, {
        key: "exists",
        value: function exists() {
          var _this$translator2;
          return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
        }
      }, {
        key: "setDefaultNamespace",
        value: function setDefaultNamespace(ns2) {
          this.options.defaultNS = ns2;
        }
      }, {
        key: "hasLoadedNamespace",
        value: function hasLoadedNamespace2(ns2) {
          var _this6 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized) {
            this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
            return false;
          }
          if (!this.languages || !this.languages.length) {
            this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
            return false;
          }
          var lng = this.resolvedLanguage || this.languages[0];
          var fallbackLng = this.options ? this.options.fallbackLng : false;
          var lastLng = this.languages[this.languages.length - 1];
          if (lng.toLowerCase() === "cimode")
            return true;
          var loadNotPending = function loadNotPending2(l2, n2) {
            var loadState = _this6.services.backendConnector.state["".concat(l2, "|").concat(n2)];
            return loadState === -1 || loadState === 2;
          };
          if (options.precheck) {
            var preResult = options.precheck(this, loadNotPending);
            if (preResult !== void 0)
              return preResult;
          }
          if (this.hasResourceBundle(lng, ns2))
            return true;
          if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
            return true;
          if (loadNotPending(lng, ns2) && (!fallbackLng || loadNotPending(lastLng, ns2)))
            return true;
          return false;
        }
      }, {
        key: "loadNamespaces",
        value: function loadNamespaces2(ns2, callback) {
          var _this7 = this;
          var deferred = defer();
          if (!this.options.ns) {
            if (callback)
              callback();
            return Promise.resolve();
          }
          if (typeof ns2 === "string")
            ns2 = [ns2];
          ns2.forEach(function(n2) {
            if (_this7.options.ns.indexOf(n2) < 0)
              _this7.options.ns.push(n2);
          });
          this.loadResources(function(err) {
            deferred.resolve();
            if (callback)
              callback(err);
          });
          return deferred;
        }
      }, {
        key: "loadLanguages",
        value: function loadLanguages(lngs, callback) {
          var deferred = defer();
          if (typeof lngs === "string")
            lngs = [lngs];
          var preloaded = this.options.preload || [];
          var newLngs = lngs.filter(function(lng) {
            return preloaded.indexOf(lng) < 0;
          });
          if (!newLngs.length) {
            if (callback)
              callback();
            return Promise.resolve();
          }
          this.options.preload = preloaded.concat(newLngs);
          this.loadResources(function(err) {
            deferred.resolve();
            if (callback)
              callback(err);
          });
          return deferred;
        }
      }, {
        key: "dir",
        value: function dir(lng) {
          if (!lng)
            lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
          if (!lng)
            return "rtl";
          var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
          var languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
          return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
        }
      }, {
        key: "cloneInstance",
        value: function cloneInstance() {
          var _this8 = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
          var mergedOptions = _objectSpread(_objectSpread(_objectSpread({}, this.options), options), {
            isClone: true
          });
          var clone = new I18n2(mergedOptions);
          if (options.debug !== void 0 || options.prefix !== void 0) {
            clone.logger = clone.logger.clone(options);
          }
          var membersToCopy = ["store", "services", "language"];
          membersToCopy.forEach(function(m2) {
            clone[m2] = _this8[m2];
          });
          clone.services = _objectSpread({}, this.services);
          clone.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          clone.translator = new Translator(clone.services, clone.options);
          clone.translator.on("*", function(event) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }
            clone.emit.apply(clone, [event].concat(args));
          });
          clone.init(mergedOptions, callback);
          clone.translator.options = clone.options;
          clone.translator.backendConnector.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          return clone;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
          };
        }
      }]);
      return I18n2;
    }(EventEmitter);
    _defineProperty$1(I18n, "createInstance", function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      return new I18n(options, callback);
    });
    var instance = I18n.createInstance();
    instance.createInstance = I18n.createInstance;
    instance.createInstance;
    instance.dir;
    instance.init;
    instance.loadResources;
    instance.reloadResources;
    instance.use;
    instance.changeLanguage;
    instance.getFixedT;
    instance.t;
    instance.exists;
    instance.setDefaultNamespace;
    instance.hasLoadedNamespace;
    instance.loadNamespaces;
    instance.loadLanguages;
    const title$1 = "RU";
    const translation$1 = {
      email: "E-mail",
      password: "Пароль",
      login: "Войти"
    };
    const ruRU = {
      title: title$1,
      translation: translation$1
    };
    const title = "EN";
    const translation = {
      email: "E-mail",
      password: "Password",
      login: "Log in"
    };
    const enUS = {
      title,
      translation
    };
    const locales = {
      ruRU,
      enUS
    };
    const DEFAULT_LANG = localStorage.getItem("LOCALE") || Object.keys(locales)[0] || "ruRU";
    instance.use(initReactI18next).init({
      resources: locales,
      lng: DEFAULT_LANG,
      keySeparator: false,
      interpolation: {
        escapeValue: false
      }
    });
    const scriptRel = "modulepreload";
    const assetsURL = function(dep) {
      return "/amyam/" + dep;
    };
    const seen = {};
    const __vitePreload = function preload(baseModule, deps, importerUrl) {
      if (!deps || deps.length === 0) {
        return baseModule();
      }
      const links = document.getElementsByTagName("link");
      return Promise.all(deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen)
          return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
          link.crossOrigin = "";
        }
        link.href = dep;
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
          });
        }
      })).then(() => baseModule());
    };
    const reportWebVitals = (onPerfEntry) => {
      if (onPerfEntry && onPerfEntry instanceof Function) {
        __vitePreload(() => import("./web-vitals-b7c54c0c.js"), true ? [] : void 0).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        });
      }
    };
    var createRoot;
    var m = reactDomExports;
    {
      createRoot = m.createRoot;
      m.hydrateRoot;
    }
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
      /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(App, {}) })
    );
    reportWebVitals();
  }
});
export default require_index_001();
