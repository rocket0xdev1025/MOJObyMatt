var Ym = (t) => {
  throw TypeError(t);
};
var Fc = (t, e, r) => e.has(t) || Ym("Cannot " + r);
var P = (t, e, r) => (
    Fc(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  ue = (t, e, r) =>
    e.has(t)
      ? Ym("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, r),
  Y = (t, e, r, i) => (
    Fc(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r
  ),
  Ee = (t, e, r) => (Fc(t, e, "access private method"), r);
var Ja = (t, e, r, i) => ({
  set _(a) {
    Y(t, e, a, r);
  },
  get _() {
    return P(t, e, i);
  },
});
function VS(t, e) {
  for (var r = 0; r < e.length; r++) {
    const i = e[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in t)) {
          const u = Object.getOwnPropertyDescriptor(i, a);
          u &&
            Object.defineProperty(
              t,
              a,
              u.get ? u : { enumerable: !0, get: () => i[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = r(a);
    fetch(a.href, u);
  }
})();
function Vv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Vc = { exports: {} },
  Gi = {},
  Bc = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm;
function BS() {
  if (Xm) return ke;
  Xm = 1;
  var t = Symbol.for("react.element"),
    e = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function w(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (y && A[y]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    b = {};
  function x(A, z, ye) {
    (this.props = A),
      (this.context = z),
      (this.refs = b),
      (this.updater = ye || T);
  }
  (x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (A, z) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, z, "setState");
    }),
    (x.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function R() {}
  R.prototype = x.prototype;
  function F(A, z, ye) {
    (this.props = A),
      (this.context = z),
      (this.refs = b),
      (this.updater = ye || T);
  }
  var L = (F.prototype = new R());
  (L.constructor = F), k(L, x.prototype), (L.isPureReactComponent = !0);
  var M = Array.isArray,
    U = Object.prototype.hasOwnProperty,
    Q = { current: null },
    J = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(A, z, ye) {
    var ve,
      le = {},
      he = null,
      Oe = null;
    if (z != null)
      for (ve in (z.ref !== void 0 && (Oe = z.ref),
      z.key !== void 0 && (he = "" + z.key),
      z))
        U.call(z, ve) && !J.hasOwnProperty(ve) && (le[ve] = z[ve]);
    var Re = arguments.length - 2;
    if (Re === 1) le.children = ye;
    else if (1 < Re) {
      for (var we = Array(Re), ht = 0; ht < Re; ht++)
        we[ht] = arguments[ht + 2];
      le.children = we;
    }
    if (A && A.defaultProps)
      for (ve in ((Re = A.defaultProps), Re))
        le[ve] === void 0 && (le[ve] = Re[ve]);
    return {
      $$typeof: t,
      type: A,
      key: he,
      ref: Oe,
      props: le,
      _owner: Q.current,
    };
  }
  function X(A, z) {
    return {
      $$typeof: t,
      type: A.type,
      key: z,
      ref: A.ref,
      props: A.props,
      _owner: A._owner,
    };
  }
  function me(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t;
  }
  function de(A) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (ye) {
        return z[ye];
      })
    );
  }
  var Pe = /\/+/g;
  function Me(A, z) {
    return typeof A == "object" && A !== null && A.key != null
      ? de("" + A.key)
      : z.toString(36);
  }
  function Ne(A, z, ye, ve, le) {
    var he = typeof A;
    (he === "undefined" || he === "boolean") && (A = null);
    var Oe = !1;
    if (A === null) Oe = !0;
    else
      switch (he) {
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case t:
            case e:
              Oe = !0;
          }
      }
    if (Oe)
      return (
        (Oe = A),
        (le = le(Oe)),
        (A = ve === "" ? "." + Me(Oe, 0) : ve),
        M(le)
          ? ((ye = ""),
            A != null && (ye = A.replace(Pe, "$&/") + "/"),
            Ne(le, z, ye, "", function (ht) {
              return ht;
            }))
          : le != null &&
            (me(le) &&
              (le = X(
                le,
                ye +
                  (!le.key || (Oe && Oe.key === le.key)
                    ? ""
                    : ("" + le.key).replace(Pe, "$&/") + "/") +
                  A
              )),
            z.push(le)),
        1
      );
    if (((Oe = 0), (ve = ve === "" ? "." : ve + ":"), M(A)))
      for (var Re = 0; Re < A.length; Re++) {
        he = A[Re];
        var we = ve + Me(he, Re);
        Oe += Ne(he, z, ye, we, le);
      }
    else if (((we = w(A)), typeof we == "function"))
      for (A = we.call(A), Re = 0; !(he = A.next()).done; )
        (he = he.value),
          (we = ve + Me(he, Re++)),
          (Oe += Ne(he, z, ye, we, le));
    else if (he === "object")
      throw (
        ((z = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Oe;
  }
  function Ie(A, z, ye) {
    if (A == null) return A;
    var ve = [],
      le = 0;
    return (
      Ne(A, ve, "", "", function (he) {
        return z.call(ye, he, le++);
      }),
      ve
    );
  }
  function xe(A) {
    if (A._status === -1) {
      var z = A._result;
      (z = z()),
        z.then(
          function (ye) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = ye));
          },
          function (ye) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = ye));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = z));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var fe = { current: null },
    q = { transition: null },
    se = {
      ReactCurrentDispatcher: fe,
      ReactCurrentBatchConfig: q,
      ReactCurrentOwner: Q,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ke.Children = {
      map: Ie,
      forEach: function (A, z, ye) {
        Ie(
          A,
          function () {
            z.apply(this, arguments);
          },
          ye
        );
      },
      count: function (A) {
        var z = 0;
        return (
          Ie(A, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (A) {
        return (
          Ie(A, function (z) {
            return z;
          }) || []
        );
      },
      only: function (A) {
        if (!me(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    }),
    (ke.Component = x),
    (ke.Fragment = r),
    (ke.Profiler = a),
    (ke.PureComponent = F),
    (ke.StrictMode = i),
    (ke.Suspense = h),
    (ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se),
    (ke.act = V),
    (ke.cloneElement = function (A, z, ye) {
      if (A == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            A +
            "."
        );
      var ve = k({}, A.props),
        le = A.key,
        he = A.ref,
        Oe = A._owner;
      if (z != null) {
        if (
          (z.ref !== void 0 && ((he = z.ref), (Oe = Q.current)),
          z.key !== void 0 && (le = "" + z.key),
          A.type && A.type.defaultProps)
        )
          var Re = A.type.defaultProps;
        for (we in z)
          U.call(z, we) &&
            !J.hasOwnProperty(we) &&
            (ve[we] = z[we] === void 0 && Re !== void 0 ? Re[we] : z[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) ve.children = ye;
      else if (1 < we) {
        Re = Array(we);
        for (var ht = 0; ht < we; ht++) Re[ht] = arguments[ht + 2];
        ve.children = Re;
      }
      return {
        $$typeof: t,
        type: A.type,
        key: le,
        ref: he,
        props: ve,
        _owner: Oe,
      };
    }),
    (ke.createContext = function (A) {
      return (
        (A = {
          $$typeof: c,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (A.Provider = { $$typeof: u, _context: A }),
        (A.Consumer = A)
      );
    }),
    (ke.createElement = D),
    (ke.createFactory = function (A) {
      var z = D.bind(null, A);
      return (z.type = A), z;
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (A) {
      return { $$typeof: f, render: A };
    }),
    (ke.isValidElement = me),
    (ke.lazy = function (A) {
      return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: xe };
    }),
    (ke.memo = function (A, z) {
      return { $$typeof: m, type: A, compare: z === void 0 ? null : z };
    }),
    (ke.startTransition = function (A) {
      var z = q.transition;
      q.transition = {};
      try {
        A();
      } finally {
        q.transition = z;
      }
    }),
    (ke.unstable_act = V),
    (ke.useCallback = function (A, z) {
      return fe.current.useCallback(A, z);
    }),
    (ke.useContext = function (A) {
      return fe.current.useContext(A);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (A) {
      return fe.current.useDeferredValue(A);
    }),
    (ke.useEffect = function (A, z) {
      return fe.current.useEffect(A, z);
    }),
    (ke.useId = function () {
      return fe.current.useId();
    }),
    (ke.useImperativeHandle = function (A, z, ye) {
      return fe.current.useImperativeHandle(A, z, ye);
    }),
    (ke.useInsertionEffect = function (A, z) {
      return fe.current.useInsertionEffect(A, z);
    }),
    (ke.useLayoutEffect = function (A, z) {
      return fe.current.useLayoutEffect(A, z);
    }),
    (ke.useMemo = function (A, z) {
      return fe.current.useMemo(A, z);
    }),
    (ke.useReducer = function (A, z, ye) {
      return fe.current.useReducer(A, z, ye);
    }),
    (ke.useRef = function (A) {
      return fe.current.useRef(A);
    }),
    (ke.useState = function (A) {
      return fe.current.useState(A);
    }),
    (ke.useSyncExternalStore = function (A, z, ye) {
      return fe.current.useSyncExternalStore(A, z, ye);
    }),
    (ke.useTransition = function () {
      return fe.current.useTransition();
    }),
    (ke.version = "18.3.1"),
    ke
  );
}
var Zm;
function lf() {
  return Zm || ((Zm = 1), (Bc.exports = BS())), Bc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eg;
function US() {
  if (eg) return Gi;
  eg = 1;
  var t = lf(),
    e = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, h, m) {
    var g,
      y = {},
      w = null,
      T = null;
    m !== void 0 && (w = "" + m),
      h.key !== void 0 && (w = "" + h.key),
      h.ref !== void 0 && (T = h.ref);
    for (g in h) i.call(h, g) && !u.hasOwnProperty(g) && (y[g] = h[g]);
    if (f && f.defaultProps)
      for (g in ((h = f.defaultProps), h)) y[g] === void 0 && (y[g] = h[g]);
    return {
      $$typeof: e,
      type: f,
      key: w,
      ref: T,
      props: y,
      _owner: a.current,
    };
  }
  return (Gi.Fragment = r), (Gi.jsx = c), (Gi.jsxs = c), Gi;
}
var tg;
function zS() {
  return tg || ((tg = 1), (Vc.exports = US())), Vc.exports;
}
var S = zS(),
  B = lf();
const $S = Vv(B),
  HS = VS({ __proto__: null, default: $S }, [B]);
var Ya = {},
  Uc = { exports: {} },
  At = {},
  zc = { exports: {} },
  $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng;
function WS() {
  return (
    ng ||
      ((ng = 1),
      (function (t) {
        function e(q, se) {
          var V = q.length;
          q.push(se);
          e: for (; 0 < V; ) {
            var A = (V - 1) >>> 1,
              z = q[A];
            if (0 < a(z, se)) (q[A] = se), (q[V] = z), (V = A);
            else break e;
          }
        }
        function r(q) {
          return q.length === 0 ? null : q[0];
        }
        function i(q) {
          if (q.length === 0) return null;
          var se = q[0],
            V = q.pop();
          if (V !== se) {
            q[0] = V;
            e: for (var A = 0, z = q.length, ye = z >>> 1; A < ye; ) {
              var ve = 2 * (A + 1) - 1,
                le = q[ve],
                he = ve + 1,
                Oe = q[he];
              if (0 > a(le, V))
                he < z && 0 > a(Oe, le)
                  ? ((q[A] = Oe), (q[he] = V), (A = he))
                  : ((q[A] = le), (q[ve] = V), (A = ve));
              else if (he < z && 0 > a(Oe, V))
                (q[A] = Oe), (q[he] = V), (A = he);
              else break e;
            }
          }
          return se;
        }
        function a(q, se) {
          var V = q.sortIndex - se.sortIndex;
          return V !== 0 ? V : q.id - se.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            f = c.now();
          t.unstable_now = function () {
            return c.now() - f;
          };
        }
        var h = [],
          m = [],
          g = 1,
          y = null,
          w = 3,
          T = !1,
          k = !1,
          b = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          R = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function L(q) {
          for (var se = r(m); se !== null; ) {
            if (se.callback === null) i(m);
            else if (se.startTime <= q)
              i(m), (se.sortIndex = se.expirationTime), e(h, se);
            else break;
            se = r(m);
          }
        }
        function M(q) {
          if (((b = !1), L(q), !k))
            if (r(h) !== null) (k = !0), xe(U);
            else {
              var se = r(m);
              se !== null && fe(M, se.startTime - q);
            }
        }
        function U(q, se) {
          (k = !1), b && ((b = !1), R(D), (D = -1)), (T = !0);
          var V = w;
          try {
            for (
              L(se), y = r(h);
              y !== null && (!(y.expirationTime > se) || (q && !de()));

            ) {
              var A = y.callback;
              if (typeof A == "function") {
                (y.callback = null), (w = y.priorityLevel);
                var z = A(y.expirationTime <= se);
                (se = t.unstable_now()),
                  typeof z == "function"
                    ? (y.callback = z)
                    : y === r(h) && i(h),
                  L(se);
              } else i(h);
              y = r(h);
            }
            if (y !== null) var ye = !0;
            else {
              var ve = r(m);
              ve !== null && fe(M, ve.startTime - se), (ye = !1);
            }
            return ye;
          } finally {
            (y = null), (w = V), (T = !1);
          }
        }
        var Q = !1,
          J = null,
          D = -1,
          X = 5,
          me = -1;
        function de() {
          return !(t.unstable_now() - me < X);
        }
        function Pe() {
          if (J !== null) {
            var q = t.unstable_now();
            me = q;
            var se = !0;
            try {
              se = J(!0, q);
            } finally {
              se ? Me() : ((Q = !1), (J = null));
            }
          } else Q = !1;
        }
        var Me;
        if (typeof F == "function")
          Me = function () {
            F(Pe);
          };
        else if (typeof MessageChannel < "u") {
          var Ne = new MessageChannel(),
            Ie = Ne.port2;
          (Ne.port1.onmessage = Pe),
            (Me = function () {
              Ie.postMessage(null);
            });
        } else
          Me = function () {
            x(Pe, 0);
          };
        function xe(q) {
          (J = q), Q || ((Q = !0), Me());
        }
        function fe(q, se) {
          D = x(function () {
            q(t.unstable_now());
          }, se);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            k || T || ((k = !0), xe(U));
          }),
          (t.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (X = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(h);
          }),
          (t.unstable_next = function (q) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var se = 3;
                break;
              default:
                se = w;
            }
            var V = w;
            w = se;
            try {
              return q();
            } finally {
              w = V;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (q, se) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var V = w;
            w = q;
            try {
              return se();
            } finally {
              w = V;
            }
          }),
          (t.unstable_scheduleCallback = function (q, se, V) {
            var A = t.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? A + V : A))
                : (V = A),
              q)
            ) {
              case 1:
                var z = -1;
                break;
              case 2:
                z = 250;
                break;
              case 5:
                z = 1073741823;
                break;
              case 4:
                z = 1e4;
                break;
              default:
                z = 5e3;
            }
            return (
              (z = V + z),
              (q = {
                id: g++,
                callback: se,
                priorityLevel: q,
                startTime: V,
                expirationTime: z,
                sortIndex: -1,
              }),
              V > A
                ? ((q.sortIndex = V),
                  e(m, q),
                  r(h) === null &&
                    q === r(m) &&
                    (b ? (R(D), (D = -1)) : (b = !0), fe(M, V - A)))
                : ((q.sortIndex = z), e(h, q), k || T || ((k = !0), xe(U))),
              q
            );
          }),
          (t.unstable_shouldYield = de),
          (t.unstable_wrapCallback = function (q) {
            var se = w;
            return function () {
              var V = w;
              w = se;
              try {
                return q.apply(this, arguments);
              } finally {
                w = V;
              }
            };
          });
      })($c)),
    $c
  );
}
var rg;
function qS() {
  return rg || ((rg = 1), (zc.exports = WS())), zc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sg;
function KS() {
  if (sg) return At;
  sg = 1;
  var t = lf(),
    e = qS();
  function r(n) {
    for (
      var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        o = 1;
      o < arguments.length;
      o++
    )
      s += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      s +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    a = {};
  function u(n, s) {
    c(n, s), c(n + "Capture", s);
  }
  function c(n, s) {
    for (a[n] = s, n = 0; n < s.length; n++) i.add(s[n]);
  }
  var f = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    y = {};
  function w(n) {
    return h.call(y, n)
      ? !0
      : h.call(g, n)
      ? !1
      : m.test(n)
      ? (y[n] = !0)
      : ((g[n] = !0), !1);
  }
  function T(n, s, o, l) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof s) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : o !== null
          ? !o.acceptsBooleans
          : ((n = n.toLowerCase().slice(0, 5)), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function k(n, s, o, l) {
    if (s === null || typeof s > "u" || T(n, s, o, l)) return !0;
    if (l) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !s;
        case 4:
          return s === !1;
        case 5:
          return isNaN(s);
        case 6:
          return isNaN(s) || 1 > s;
      }
    return !1;
  }
  function b(n, s, o, l, d, p, v) {
    (this.acceptsBooleans = s === 2 || s === 3 || s === 4),
      (this.attributeName = l),
      (this.attributeNamespace = d),
      (this.mustUseProperty = o),
      (this.propertyName = n),
      (this.type = s),
      (this.sanitizeURL = p),
      (this.removeEmptyString = v);
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      x[n] = new b(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var s = n[0];
      x[s] = new b(s, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      n
    ) {
      x[n] = new b(n, 2, !1, n.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      x[n] = new b(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        x[n] = new b(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      x[n] = new b(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      x[n] = new b(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      x[n] = new b(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      x[n] = new b(n, 5, !1, n.toLowerCase(), null, !1, !1);
    });
  var R = /[\-:]([a-z])/g;
  function F(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var s = n.replace(R, F);
      x[s] = new b(s, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var s = n.replace(R, F);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var s = n.replace(R, F);
      x[s] = new b(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      x[n] = new b(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (x.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      x[n] = new b(n, 1, !1, n.toLowerCase(), null, !0, !0);
    });
  function L(n, s, o, l) {
    var d = x.hasOwnProperty(s) ? x[s] : null;
    (d !== null
      ? d.type !== 0
      : l ||
        !(2 < s.length) ||
        (s[0] !== "o" && s[0] !== "O") ||
        (s[1] !== "n" && s[1] !== "N")) &&
      (k(s, o, d, l) && (o = null),
      l || d === null
        ? w(s) &&
          (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o))
        : d.mustUseProperty
        ? (n[d.propertyName] = o === null ? (d.type === 3 ? !1 : "") : o)
        : ((s = d.attributeName),
          (l = d.attributeNamespace),
          o === null
            ? n.removeAttribute(s)
            : ((d = d.type),
              (o = d === 3 || (d === 4 && o === !0) ? "" : "" + o),
              l ? n.setAttributeNS(l, s, o) : n.setAttribute(s, o))));
  }
  var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    U = Symbol.for("react.element"),
    Q = Symbol.for("react.portal"),
    J = Symbol.for("react.fragment"),
    D = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    me = Symbol.for("react.provider"),
    de = Symbol.for("react.context"),
    Pe = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    Ne = Symbol.for("react.suspense_list"),
    Ie = Symbol.for("react.memo"),
    xe = Symbol.for("react.lazy"),
    fe = Symbol.for("react.offscreen"),
    q = Symbol.iterator;
  function se(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (q && n[q]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var V = Object.assign,
    A;
  function z(n) {
    if (A === void 0)
      try {
        throw Error();
      } catch (o) {
        var s = o.stack.trim().match(/\n( *(at )?)/);
        A = (s && s[1]) || "";
      }
    return (
      `
` +
      A +
      n
    );
  }
  var ye = !1;
  function ve(n, s) {
    if (!n || ye) return "";
    ye = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (s)
        if (
          ((s = function () {
            throw Error();
          }),
          Object.defineProperty(s.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(s, []);
          } catch (j) {
            var l = j;
          }
          Reflect.construct(n, [], s);
        } else {
          try {
            s.call();
          } catch (j) {
            l = j;
          }
          n.call(s.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          l = j;
        }
        n();
      }
    } catch (j) {
      if (j && l && typeof j.stack == "string") {
        for (
          var d = j.stack.split(`
`),
            p = l.stack.split(`
`),
            v = d.length - 1,
            E = p.length - 1;
          1 <= v && 0 <= E && d[v] !== p[E];

        )
          E--;
        for (; 1 <= v && 0 <= E; v--, E--)
          if (d[v] !== p[E]) {
            if (v !== 1 || E !== 1)
              do
                if ((v--, E--, 0 > E || d[v] !== p[E])) {
                  var C =
                    `
` + d[v].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", n.displayName)),
                    C
                  );
                }
              while (1 <= v && 0 <= E);
            break;
          }
      }
    } finally {
      (ye = !1), (Error.prepareStackTrace = o);
    }
    return (n = n ? n.displayName || n.name : "") ? z(n) : "";
  }
  function le(n) {
    switch (n.tag) {
      case 5:
        return z(n.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (n = ve(n.type, !1)), n;
      case 11:
        return (n = ve(n.type.render, !1)), n;
      case 1:
        return (n = ve(n.type, !0)), n;
      default:
        return "";
    }
  }
  function he(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case J:
        return "Fragment";
      case Q:
        return "Portal";
      case X:
        return "Profiler";
      case D:
        return "StrictMode";
      case Me:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case de:
          return (n.displayName || "Context") + ".Consumer";
        case me:
          return (n._context.displayName || "Context") + ".Provider";
        case Pe:
          var s = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = s.displayName || s.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case Ie:
          return (
            (s = n.displayName || null), s !== null ? s : he(n.type) || "Memo"
          );
        case xe:
          (s = n._payload), (n = n._init);
          try {
            return he(n(s));
          } catch {}
      }
    return null;
  }
  function Oe(n) {
    var s = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = s.render),
          (n = n.displayName || n.name || ""),
          s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return he(s);
      case 8:
        return s === D ? "StrictMode" : "Mode";
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
        if (typeof s == "function") return s.displayName || s.name || null;
        if (typeof s == "string") return s;
    }
    return null;
  }
  function Re(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function we(n) {
    var s = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (s === "checkbox" || s === "radio")
    );
  }
  function ht(n) {
    var s = we(n) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s),
      l = "" + n[s];
    if (
      !n.hasOwnProperty(s) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var d = o.get,
        p = o.set;
      return (
        Object.defineProperty(n, s, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (v) {
            (l = "" + v), p.call(this, v);
          },
        }),
        Object.defineProperty(n, s, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            (n._valueTracker = null), delete n[s];
          },
        }
      );
    }
  }
  function Tn(n) {
    n._valueTracker || (n._valueTracker = ht(n));
  }
  function Rr(n) {
    if (!n) return !1;
    var s = n._valueTracker;
    if (!s) return !0;
    var o = s.getValue(),
      l = "";
    return (
      n && (l = we(n) ? (n.checked ? "true" : "false") : n.value),
      (n = l),
      n !== o ? (s.setValue(n), !0) : !1
    );
  }
  function zn(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function $n(n, s) {
    var o = s.checked;
    return V({}, s, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? n._wrapperState.initialChecked,
    });
  }
  function sh(n, s) {
    var o = s.defaultValue == null ? "" : s.defaultValue,
      l = s.checked != null ? s.checked : s.defaultChecked;
    (o = Re(s.value != null ? s.value : o)),
      (n._wrapperState = {
        initialChecked: l,
        initialValue: o,
        controlled:
          s.type === "checkbox" || s.type === "radio"
            ? s.checked != null
            : s.value != null,
      });
  }
  function ih(n, s) {
    (s = s.checked), s != null && L(n, "checked", s, !1);
  }
  function ql(n, s) {
    ih(n, s);
    var o = Re(s.value),
      l = s.type;
    if (o != null)
      l === "number"
        ? ((o === 0 && n.value === "") || n.value != o) && (n.value = "" + o)
        : n.value !== "" + o && (n.value = "" + o);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    s.hasOwnProperty("value")
      ? Kl(n, s.type, o)
      : s.hasOwnProperty("defaultValue") && Kl(n, s.type, Re(s.defaultValue)),
      s.checked == null &&
        s.defaultChecked != null &&
        (n.defaultChecked = !!s.defaultChecked);
  }
  function oh(n, s, o) {
    if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
      var l = s.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (s.value !== void 0 && s.value !== null)
        )
      )
        return;
      (s = "" + n._wrapperState.initialValue),
        o || s === n.value || (n.value = s),
        (n.defaultValue = s);
    }
    (o = n.name),
      o !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      o !== "" && (n.name = o);
  }
  function Kl(n, s, o) {
    (s !== "number" || zn(n.ownerDocument) !== n) &&
      (o == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var ci = Array.isArray;
  function fs(n, s, o, l) {
    if (((n = n.options), s)) {
      s = {};
      for (var d = 0; d < o.length; d++) s["$" + o[d]] = !0;
      for (o = 0; o < n.length; o++)
        (d = s.hasOwnProperty("$" + n[o].value)),
          n[o].selected !== d && (n[o].selected = d),
          d && l && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Re(o), s = null, d = 0; d < n.length; d++) {
        if (n[d].value === o) {
          (n[d].selected = !0), l && (n[d].defaultSelected = !0);
          return;
        }
        s !== null || n[d].disabled || (s = n[d]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function Ql(n, s) {
    if (s.dangerouslySetInnerHTML != null) throw Error(r(91));
    return V({}, s, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function ah(n, s) {
    var o = s.value;
    if (o == null) {
      if (((o = s.children), (s = s.defaultValue), o != null)) {
        if (s != null) throw Error(r(92));
        if (ci(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        s = o;
      }
      s == null && (s = ""), (o = s);
    }
    n._wrapperState = { initialValue: Re(o) };
  }
  function lh(n, s) {
    var o = Re(s.value),
      l = Re(s.defaultValue);
    o != null &&
      ((o = "" + o),
      o !== n.value && (n.value = o),
      s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
      l != null && (n.defaultValue = "" + l);
  }
  function uh(n) {
    var s = n.textContent;
    s === n._wrapperState.initialValue &&
      s !== "" &&
      s !== null &&
      (n.value = s);
  }
  function ch(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gl(n, s) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? ch(s)
      : n === "http://www.w3.org/2000/svg" && s === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : n;
  }
  var zo,
    dh = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (s, o, l, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(s, o, l, d);
            });
          }
        : n;
    })(function (n, s) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = s;
      else {
        for (
          zo = zo || document.createElement("div"),
            zo.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = zo.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; s.firstChild; ) n.appendChild(s.firstChild);
      }
    });
  function di(n, s) {
    if (s) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = s;
        return;
      }
    }
    n.textContent = s;
  }
  var fi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    $x = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fi).forEach(function (n) {
    $x.forEach(function (s) {
      (s = s + n.charAt(0).toUpperCase() + n.substring(1)), (fi[s] = fi[n]);
    });
  });
  function fh(n, s, o) {
    return s == null || typeof s == "boolean" || s === ""
      ? ""
      : o || typeof s != "number" || s === 0 || (fi.hasOwnProperty(n) && fi[n])
      ? ("" + s).trim()
      : s + "px";
  }
  function hh(n, s) {
    n = n.style;
    for (var o in s)
      if (s.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0,
          d = fh(o, s[o], l);
        o === "float" && (o = "cssFloat"), l ? n.setProperty(o, d) : (n[o] = d);
      }
  }
  var Hx = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Jl(n, s) {
    if (s) {
      if (Hx[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
        throw Error(r(137, n));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(r(60));
        if (
          typeof s.dangerouslySetInnerHTML != "object" ||
          !("__html" in s.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(r(62));
    }
  }
  function Yl(n, s) {
    if (n.indexOf("-") === -1) return typeof s.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xl = null;
  function Zl(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var eu = null,
    hs = null,
    ps = null;
  function ph(n) {
    if ((n = Li(n))) {
      if (typeof eu != "function") throw Error(r(280));
      var s = n.stateNode;
      s && ((s = da(s)), eu(n.stateNode, n.type, s));
    }
  }
  function mh(n) {
    hs ? (ps ? ps.push(n) : (ps = [n])) : (hs = n);
  }
  function gh() {
    if (hs) {
      var n = hs,
        s = ps;
      if (((ps = hs = null), ph(n), s)) for (n = 0; n < s.length; n++) ph(s[n]);
    }
  }
  function yh(n, s) {
    return n(s);
  }
  function vh() {}
  var tu = !1;
  function wh(n, s, o) {
    if (tu) return n(s, o);
    tu = !0;
    try {
      return yh(n, s, o);
    } finally {
      (tu = !1), (hs !== null || ps !== null) && (vh(), gh());
    }
  }
  function hi(n, s) {
    var o = n.stateNode;
    if (o === null) return null;
    var l = da(o);
    if (l === null) return null;
    o = l[s];
    e: switch (s) {
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
        (l = !l.disabled) ||
          ((n = n.type),
          (l = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !l);
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(r(231, s, typeof o));
    return o;
  }
  var nu = !1;
  if (f)
    try {
      var pi = {};
      Object.defineProperty(pi, "passive", {
        get: function () {
          nu = !0;
        },
      }),
        window.addEventListener("test", pi, pi),
        window.removeEventListener("test", pi, pi);
    } catch {
      nu = !1;
    }
  function Wx(n, s, o, l, d, p, v, E, C) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(o, j);
    } catch (H) {
      this.onError(H);
    }
  }
  var mi = !1,
    $o = null,
    Ho = !1,
    ru = null,
    qx = {
      onError: function (n) {
        (mi = !0), ($o = n);
      },
    };
  function Kx(n, s, o, l, d, p, v, E, C) {
    (mi = !1), ($o = null), Wx.apply(qx, arguments);
  }
  function Qx(n, s, o, l, d, p, v, E, C) {
    if ((Kx.apply(this, arguments), mi)) {
      if (mi) {
        var j = $o;
        (mi = !1), ($o = null);
      } else throw Error(r(198));
      Ho || ((Ho = !0), (ru = j));
    }
  }
  function Ar(n) {
    var s = n,
      o = n;
    if (n.alternate) for (; s.return; ) s = s.return;
    else {
      n = s;
      do (s = n), (s.flags & 4098) !== 0 && (o = s.return), (n = s.return);
      while (n);
    }
    return s.tag === 3 ? o : null;
  }
  function xh(n) {
    if (n.tag === 13) {
      var s = n.memoizedState;
      if (
        (s === null && ((n = n.alternate), n !== null && (s = n.memoizedState)),
        s !== null)
      )
        return s.dehydrated;
    }
    return null;
  }
  function Sh(n) {
    if (Ar(n) !== n) throw Error(r(188));
  }
  function Gx(n) {
    var s = n.alternate;
    if (!s) {
      if (((s = Ar(n)), s === null)) throw Error(r(188));
      return s !== n ? null : n;
    }
    for (var o = n, l = s; ; ) {
      var d = o.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (((l = d.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === o) return Sh(d), n;
          if (p === l) return Sh(d), s;
          p = p.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== l.return) (o = d), (l = p);
      else {
        for (var v = !1, E = d.child; E; ) {
          if (E === o) {
            (v = !0), (o = d), (l = p);
            break;
          }
          if (E === l) {
            (v = !0), (l = d), (o = p);
            break;
          }
          E = E.sibling;
        }
        if (!v) {
          for (E = p.child; E; ) {
            if (E === o) {
              (v = !0), (o = p), (l = d);
              break;
            }
            if (E === l) {
              (v = !0), (l = p), (o = d);
              break;
            }
            E = E.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (o.alternate !== l) throw Error(r(190));
    }
    if (o.tag !== 3) throw Error(r(188));
    return o.stateNode.current === o ? n : s;
  }
  function bh(n) {
    return (n = Gx(n)), n !== null ? kh(n) : null;
  }
  function kh(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var s = kh(n);
      if (s !== null) return s;
      n = n.sibling;
    }
    return null;
  }
  var Eh = e.unstable_scheduleCallback,
    Th = e.unstable_cancelCallback,
    Jx = e.unstable_shouldYield,
    Yx = e.unstable_requestPaint,
    Ge = e.unstable_now,
    Xx = e.unstable_getCurrentPriorityLevel,
    su = e.unstable_ImmediatePriority,
    Ch = e.unstable_UserBlockingPriority,
    Wo = e.unstable_NormalPriority,
    Zx = e.unstable_LowPriority,
    Ph = e.unstable_IdlePriority,
    qo = null,
    hn = null;
  function e1(n) {
    if (hn && typeof hn.onCommitFiberRoot == "function")
      try {
        hn.onCommitFiberRoot(qo, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var en = Math.clz32 ? Math.clz32 : r1,
    t1 = Math.log,
    n1 = Math.LN2;
  function r1(n) {
    return (n >>>= 0), n === 0 ? 32 : (31 - ((t1(n) / n1) | 0)) | 0;
  }
  var Ko = 64,
    Qo = 4194304;
  function gi(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Go(n, s) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var l = 0,
      d = n.suspendedLanes,
      p = n.pingedLanes,
      v = o & 268435455;
    if (v !== 0) {
      var E = v & ~d;
      E !== 0 ? (l = gi(E)) : ((p &= v), p !== 0 && (l = gi(p)));
    } else (v = o & ~d), v !== 0 ? (l = gi(v)) : p !== 0 && (l = gi(p));
    if (l === 0) return 0;
    if (
      s !== 0 &&
      s !== l &&
      (s & d) === 0 &&
      ((d = l & -l), (p = s & -s), d >= p || (d === 16 && (p & 4194240) !== 0))
    )
      return s;
    if (((l & 4) !== 0 && (l |= o & 16), (s = n.entangledLanes), s !== 0))
      for (n = n.entanglements, s &= l; 0 < s; )
        (o = 31 - en(s)), (d = 1 << o), (l |= n[o]), (s &= ~d);
    return l;
  }
  function s1(n, s) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return s + 250;
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
        return s + 5e3;
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
  function i1(n, s) {
    for (
      var o = n.suspendedLanes,
        l = n.pingedLanes,
        d = n.expirationTimes,
        p = n.pendingLanes;
      0 < p;

    ) {
      var v = 31 - en(p),
        E = 1 << v,
        C = d[v];
      C === -1
        ? ((E & o) === 0 || (E & l) !== 0) && (d[v] = s1(E, s))
        : C <= s && (n.expiredLanes |= E),
        (p &= ~E);
    }
  }
  function iu(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function _h() {
    var n = Ko;
    return (Ko <<= 1), (Ko & 4194240) === 0 && (Ko = 64), n;
  }
  function ou(n) {
    for (var s = [], o = 0; 31 > o; o++) s.push(n);
    return s;
  }
  function yi(n, s, o) {
    (n.pendingLanes |= s),
      s !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (s = 31 - en(s)),
      (n[s] = o);
  }
  function o1(n, s) {
    var o = n.pendingLanes & ~s;
    (n.pendingLanes = s),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= s),
      (n.mutableReadLanes &= s),
      (n.entangledLanes &= s),
      (s = n.entanglements);
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var d = 31 - en(o),
        p = 1 << d;
      (s[d] = 0), (l[d] = -1), (n[d] = -1), (o &= ~p);
    }
  }
  function au(n, s) {
    var o = (n.entangledLanes |= s);
    for (n = n.entanglements; o; ) {
      var l = 31 - en(o),
        d = 1 << l;
      (d & s) | (n[l] & s) && (n[l] |= s), (o &= ~d);
    }
  }
  var Le = 0;
  function Rh(n) {
    return (
      (n &= -n),
      1 < n ? (4 < n ? ((n & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ah,
    lu,
    Nh,
    Oh,
    jh,
    uu = !1,
    Jo = [],
    Hn = null,
    Wn = null,
    qn = null,
    vi = new Map(),
    wi = new Map(),
    Kn = [],
    a1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Lh(n, s) {
    switch (n) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        vi.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wi.delete(s.pointerId);
    }
  }
  function xi(n, s, o, l, d, p) {
    return n === null || n.nativeEvent !== p
      ? ((n = {
          blockedOn: s,
          domEventName: o,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [d],
        }),
        s !== null && ((s = Li(s)), s !== null && lu(s)),
        n)
      : ((n.eventSystemFlags |= l),
        (s = n.targetContainers),
        d !== null && s.indexOf(d) === -1 && s.push(d),
        n);
  }
  function l1(n, s, o, l, d) {
    switch (s) {
      case "focusin":
        return (Hn = xi(Hn, n, s, o, l, d)), !0;
      case "dragenter":
        return (Wn = xi(Wn, n, s, o, l, d)), !0;
      case "mouseover":
        return (qn = xi(qn, n, s, o, l, d)), !0;
      case "pointerover":
        var p = d.pointerId;
        return vi.set(p, xi(vi.get(p) || null, n, s, o, l, d)), !0;
      case "gotpointercapture":
        return (
          (p = d.pointerId), wi.set(p, xi(wi.get(p) || null, n, s, o, l, d)), !0
        );
    }
    return !1;
  }
  function Mh(n) {
    var s = Nr(n.target);
    if (s !== null) {
      var o = Ar(s);
      if (o !== null) {
        if (((s = o.tag), s === 13)) {
          if (((s = xh(o)), s !== null)) {
            (n.blockedOn = s),
              jh(n.priority, function () {
                Nh(o);
              });
            return;
          }
        } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Yo(n) {
    if (n.blockedOn !== null) return !1;
    for (var s = n.targetContainers; 0 < s.length; ) {
      var o = du(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var l = new o.constructor(o.type, o);
        (Xl = l), o.target.dispatchEvent(l), (Xl = null);
      } else return (s = Li(o)), s !== null && lu(s), (n.blockedOn = o), !1;
      s.shift();
    }
    return !0;
  }
  function Dh(n, s, o) {
    Yo(n) && o.delete(s);
  }
  function u1() {
    (uu = !1),
      Hn !== null && Yo(Hn) && (Hn = null),
      Wn !== null && Yo(Wn) && (Wn = null),
      qn !== null && Yo(qn) && (qn = null),
      vi.forEach(Dh),
      wi.forEach(Dh);
  }
  function Si(n, s) {
    n.blockedOn === s &&
      ((n.blockedOn = null),
      uu ||
        ((uu = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, u1)));
  }
  function bi(n) {
    function s(d) {
      return Si(d, n);
    }
    if (0 < Jo.length) {
      Si(Jo[0], n);
      for (var o = 1; o < Jo.length; o++) {
        var l = Jo[o];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (
      Hn !== null && Si(Hn, n),
        Wn !== null && Si(Wn, n),
        qn !== null && Si(qn, n),
        vi.forEach(s),
        wi.forEach(s),
        o = 0;
      o < Kn.length;
      o++
    )
      (l = Kn[o]), l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < Kn.length && ((o = Kn[0]), o.blockedOn === null); )
      Mh(o), o.blockedOn === null && Kn.shift();
  }
  var ms = M.ReactCurrentBatchConfig,
    Xo = !0;
  function c1(n, s, o, l) {
    var d = Le,
      p = ms.transition;
    ms.transition = null;
    try {
      (Le = 1), cu(n, s, o, l);
    } finally {
      (Le = d), (ms.transition = p);
    }
  }
  function d1(n, s, o, l) {
    var d = Le,
      p = ms.transition;
    ms.transition = null;
    try {
      (Le = 4), cu(n, s, o, l);
    } finally {
      (Le = d), (ms.transition = p);
    }
  }
  function cu(n, s, o, l) {
    if (Xo) {
      var d = du(n, s, o, l);
      if (d === null) _u(n, s, l, Zo, o), Lh(n, l);
      else if (l1(d, n, s, o, l)) l.stopPropagation();
      else if ((Lh(n, l), s & 4 && -1 < a1.indexOf(n))) {
        for (; d !== null; ) {
          var p = Li(d);
          if (
            (p !== null && Ah(p),
            (p = du(n, s, o, l)),
            p === null && _u(n, s, l, Zo, o),
            p === d)
          )
            break;
          d = p;
        }
        d !== null && l.stopPropagation();
      } else _u(n, s, l, null, o);
    }
  }
  var Zo = null;
  function du(n, s, o, l) {
    if (((Zo = null), (n = Zl(l)), (n = Nr(n)), n !== null))
      if (((s = Ar(n)), s === null)) n = null;
      else if (((o = s.tag), o === 13)) {
        if (((n = xh(s)), n !== null)) return n;
        n = null;
      } else if (o === 3) {
        if (s.stateNode.current.memoizedState.isDehydrated)
          return s.tag === 3 ? s.stateNode.containerInfo : null;
        n = null;
      } else s !== n && (n = null);
    return (Zo = n), null;
  }
  function Ih(n) {
    switch (n) {
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
        switch (Xx()) {
          case su:
            return 1;
          case Ch:
            return 4;
          case Wo:
          case Zx:
            return 16;
          case Ph:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qn = null,
    fu = null,
    ea = null;
  function Fh() {
    if (ea) return ea;
    var n,
      s = fu,
      o = s.length,
      l,
      d = "value" in Qn ? Qn.value : Qn.textContent,
      p = d.length;
    for (n = 0; n < o && s[n] === d[n]; n++);
    var v = o - n;
    for (l = 1; l <= v && s[o - l] === d[p - l]; l++);
    return (ea = d.slice(n, 1 < l ? 1 - l : void 0));
  }
  function ta(n) {
    var s = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && s === 13 && (n = 13))
        : (n = s),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function na() {
    return !0;
  }
  function Vh() {
    return !1;
  }
  function Dt(n) {
    function s(o, l, d, p, v) {
      (this._reactName = o),
        (this._targetInst = d),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = v),
        (this.currentTarget = null);
      for (var E in n)
        n.hasOwnProperty(E) && ((o = n[E]), (this[E] = o ? o(p) : p[E]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? na
          : Vh),
        (this.isPropagationStopped = Vh),
        this
      );
    }
    return (
      V(s.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = na));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = na));
        },
        persist: function () {},
        isPersistent: na,
      }),
      s
    );
  }
  var gs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    hu = Dt(gs),
    ki = V({}, gs, { view: 0, detail: 0 }),
    f1 = Dt(ki),
    pu,
    mu,
    Ei,
    ra = V({}, ki, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yu,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Ei &&
              (Ei && n.type === "mousemove"
                ? ((pu = n.screenX - Ei.screenX), (mu = n.screenY - Ei.screenY))
                : (mu = pu = 0),
              (Ei = n)),
            pu);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : mu;
      },
    }),
    Bh = Dt(ra),
    h1 = V({}, ra, { dataTransfer: 0 }),
    p1 = Dt(h1),
    m1 = V({}, ki, { relatedTarget: 0 }),
    gu = Dt(m1),
    g1 = V({}, gs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y1 = Dt(g1),
    v1 = V({}, gs, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    w1 = Dt(v1),
    x1 = V({}, gs, { data: 0 }),
    Uh = Dt(x1),
    S1 = {
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
      MozPrintableKey: "Unidentified",
    },
    b1 = {
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
      224: "Meta",
    },
    k1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function E1(n) {
    var s = this.nativeEvent;
    return s.getModifierState
      ? s.getModifierState(n)
      : (n = k1[n])
      ? !!s[n]
      : !1;
  }
  function yu() {
    return E1;
  }
  var T1 = V({}, ki, {
      key: function (n) {
        if (n.key) {
          var s = S1[n.key] || n.key;
          if (s !== "Unidentified") return s;
        }
        return n.type === "keypress"
          ? ((n = ta(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
          ? b1[n.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yu,
      charCode: function (n) {
        return n.type === "keypress" ? ta(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? ta(n)
          : n.type === "keydown" || n.type === "keyup"
          ? n.keyCode
          : 0;
      },
    }),
    C1 = Dt(T1),
    P1 = V({}, ra, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zh = Dt(P1),
    _1 = V({}, ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yu,
    }),
    R1 = Dt(_1),
    A1 = V({}, gs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N1 = Dt(A1),
    O1 = V({}, ra, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
          ? -n.wheelDeltaX
          : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
          ? -n.wheelDeltaY
          : "wheelDelta" in n
          ? -n.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    j1 = Dt(O1),
    L1 = [9, 13, 27, 32],
    vu = f && "CompositionEvent" in window,
    Ti = null;
  f && "documentMode" in document && (Ti = document.documentMode);
  var M1 = f && "TextEvent" in window && !Ti,
    $h = f && (!vu || (Ti && 8 < Ti && 11 >= Ti)),
    Hh = " ",
    Wh = !1;
  function qh(n, s) {
    switch (n) {
      case "keyup":
        return L1.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kh(n) {
    return (n = n.detail), typeof n == "object" && "data" in n ? n.data : null;
  }
  var ys = !1;
  function D1(n, s) {
    switch (n) {
      case "compositionend":
        return Kh(s);
      case "keypress":
        return s.which !== 32 ? null : ((Wh = !0), Hh);
      case "textInput":
        return (n = s.data), n === Hh && Wh ? null : n;
      default:
        return null;
    }
  }
  function I1(n, s) {
    if (ys)
      return n === "compositionend" || (!vu && qh(n, s))
        ? ((n = Fh()), (ea = fu = Qn = null), (ys = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || (s.ctrlKey && s.altKey)) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return $h && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var F1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qh(n) {
    var s = n && n.nodeName && n.nodeName.toLowerCase();
    return s === "input" ? !!F1[n.type] : s === "textarea";
  }
  function Gh(n, s, o, l) {
    mh(l),
      (s = la(s, "onChange")),
      0 < s.length &&
        ((o = new hu("onChange", "change", null, o, l)),
        n.push({ event: o, listeners: s }));
  }
  var Ci = null,
    Pi = null;
  function V1(n) {
    hp(n, 0);
  }
  function sa(n) {
    var s = bs(n);
    if (Rr(s)) return n;
  }
  function B1(n, s) {
    if (n === "change") return s;
  }
  var Jh = !1;
  if (f) {
    var wu;
    if (f) {
      var xu = "oninput" in document;
      if (!xu) {
        var Yh = document.createElement("div");
        Yh.setAttribute("oninput", "return;"),
          (xu = typeof Yh.oninput == "function");
      }
      wu = xu;
    } else wu = !1;
    Jh = wu && (!document.documentMode || 9 < document.documentMode);
  }
  function Xh() {
    Ci && (Ci.detachEvent("onpropertychange", Zh), (Pi = Ci = null));
  }
  function Zh(n) {
    if (n.propertyName === "value" && sa(Pi)) {
      var s = [];
      Gh(s, Pi, n, Zl(n)), wh(V1, s);
    }
  }
  function U1(n, s, o) {
    n === "focusin"
      ? (Xh(), (Ci = s), (Pi = o), Ci.attachEvent("onpropertychange", Zh))
      : n === "focusout" && Xh();
  }
  function z1(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return sa(Pi);
  }
  function $1(n, s) {
    if (n === "click") return sa(s);
  }
  function H1(n, s) {
    if (n === "input" || n === "change") return sa(s);
  }
  function W1(n, s) {
    return (n === s && (n !== 0 || 1 / n === 1 / s)) || (n !== n && s !== s);
  }
  var tn = typeof Object.is == "function" ? Object.is : W1;
  function _i(n, s) {
    if (tn(n, s)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof s != "object" ||
      s === null
    )
      return !1;
    var o = Object.keys(n),
      l = Object.keys(s);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var d = o[l];
      if (!h.call(s, d) || !tn(n[d], s[d])) return !1;
    }
    return !0;
  }
  function ep(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function tp(n, s) {
    var o = ep(n);
    n = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = n + o.textContent.length), n <= s && l >= s))
          return { node: o, offset: s - n };
        n = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = ep(o);
    }
  }
  function np(n, s) {
    return n && s
      ? n === s
        ? !0
        : n && n.nodeType === 3
        ? !1
        : s && s.nodeType === 3
        ? np(n, s.parentNode)
        : "contains" in n
        ? n.contains(s)
        : n.compareDocumentPosition
        ? !!(n.compareDocumentPosition(s) & 16)
        : !1
      : !1;
  }
  function rp() {
    for (var n = window, s = zn(); s instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof s.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = s.contentWindow;
      else break;
      s = zn(n.document);
    }
    return s;
  }
  function Su(n) {
    var s = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      s &&
      ((s === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        s === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function q1(n) {
    var s = rp(),
      o = n.focusedElem,
      l = n.selectionRange;
    if (
      s !== o &&
      o &&
      o.ownerDocument &&
      np(o.ownerDocument.documentElement, o)
    ) {
      if (l !== null && Su(o)) {
        if (
          ((s = l.start),
          (n = l.end),
          n === void 0 && (n = s),
          "selectionStart" in o)
        )
          (o.selectionStart = s),
            (o.selectionEnd = Math.min(n, o.value.length));
        else if (
          ((n = ((s = o.ownerDocument || document) && s.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var d = o.textContent.length,
            p = Math.min(l.start, d);
          (l = l.end === void 0 ? p : Math.min(l.end, d)),
            !n.extend && p > l && ((d = l), (l = p), (p = d)),
            (d = tp(o, p));
          var v = tp(o, l);
          d &&
            v &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== d.node ||
              n.anchorOffset !== d.offset ||
              n.focusNode !== v.node ||
              n.focusOffset !== v.offset) &&
            ((s = s.createRange()),
            s.setStart(d.node, d.offset),
            n.removeAllRanges(),
            p > l
              ? (n.addRange(s), n.extend(v.node, v.offset))
              : (s.setEnd(v.node, v.offset), n.addRange(s)));
        }
      }
      for (s = [], n = o; (n = n.parentNode); )
        n.nodeType === 1 &&
          s.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < s.length; o++)
        (n = s[o]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var K1 = f && "documentMode" in document && 11 >= document.documentMode,
    vs = null,
    bu = null,
    Ri = null,
    ku = !1;
  function sp(n, s, o) {
    var l =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    ku ||
      vs == null ||
      vs !== zn(l) ||
      ((l = vs),
      "selectionStart" in l && Su(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ri && _i(Ri, l)) ||
        ((Ri = l),
        (l = la(bu, "onSelect")),
        0 < l.length &&
          ((s = new hu("onSelect", "select", null, s, o)),
          n.push({ event: s, listeners: l }),
          (s.target = vs))));
  }
  function ia(n, s) {
    var o = {};
    return (
      (o[n.toLowerCase()] = s.toLowerCase()),
      (o["Webkit" + n] = "webkit" + s),
      (o["Moz" + n] = "moz" + s),
      o
    );
  }
  var ws = {
      animationend: ia("Animation", "AnimationEnd"),
      animationiteration: ia("Animation", "AnimationIteration"),
      animationstart: ia("Animation", "AnimationStart"),
      transitionend: ia("Transition", "TransitionEnd"),
    },
    Eu = {},
    ip = {};
  f &&
    ((ip = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ws.animationend.animation,
      delete ws.animationiteration.animation,
      delete ws.animationstart.animation),
    "TransitionEvent" in window || delete ws.transitionend.transition);
  function oa(n) {
    if (Eu[n]) return Eu[n];
    if (!ws[n]) return n;
    var s = ws[n],
      o;
    for (o in s) if (s.hasOwnProperty(o) && o in ip) return (Eu[n] = s[o]);
    return n;
  }
  var op = oa("animationend"),
    ap = oa("animationiteration"),
    lp = oa("animationstart"),
    up = oa("transitionend"),
    cp = new Map(),
    dp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Gn(n, s) {
    cp.set(n, s), u(s, [n]);
  }
  for (var Tu = 0; Tu < dp.length; Tu++) {
    var Cu = dp[Tu],
      Q1 = Cu.toLowerCase(),
      G1 = Cu[0].toUpperCase() + Cu.slice(1);
    Gn(Q1, "on" + G1);
  }
  Gn(op, "onAnimationEnd"),
    Gn(ap, "onAnimationIteration"),
    Gn(lp, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(up, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ai =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    J1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ai)
    );
  function fp(n, s, o) {
    var l = n.type || "unknown-event";
    (n.currentTarget = o), Qx(l, s, void 0, n), (n.currentTarget = null);
  }
  function hp(n, s) {
    s = (s & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var l = n[o],
        d = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (s)
          for (var v = l.length - 1; 0 <= v; v--) {
            var E = l[v],
              C = E.instance,
              j = E.currentTarget;
            if (((E = E.listener), C !== p && d.isPropagationStopped()))
              break e;
            fp(d, E, j), (p = C);
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((E = l[v]),
              (C = E.instance),
              (j = E.currentTarget),
              (E = E.listener),
              C !== p && d.isPropagationStopped())
            )
              break e;
            fp(d, E, j), (p = C);
          }
      }
    }
    if (Ho) throw ((n = ru), (Ho = !1), (ru = null), n);
  }
  function Ve(n, s) {
    var o = s[Lu];
    o === void 0 && (o = s[Lu] = new Set());
    var l = n + "__bubble";
    o.has(l) || (pp(s, n, 2, !1), o.add(l));
  }
  function Pu(n, s, o) {
    var l = 0;
    s && (l |= 4), pp(o, n, l, s);
  }
  var aa = "_reactListening" + Math.random().toString(36).slice(2);
  function Ni(n) {
    if (!n[aa]) {
      (n[aa] = !0),
        i.forEach(function (o) {
          o !== "selectionchange" && (J1.has(o) || Pu(o, !1, n), Pu(o, !0, n));
        });
      var s = n.nodeType === 9 ? n : n.ownerDocument;
      s === null || s[aa] || ((s[aa] = !0), Pu("selectionchange", !1, s));
    }
  }
  function pp(n, s, o, l) {
    switch (Ih(s)) {
      case 1:
        var d = c1;
        break;
      case 4:
        d = d1;
        break;
      default:
        d = cu;
    }
    (o = d.bind(null, s, o, n)),
      (d = void 0),
      !nu ||
        (s !== "touchstart" && s !== "touchmove" && s !== "wheel") ||
        (d = !0),
      l
        ? d !== void 0
          ? n.addEventListener(s, o, { capture: !0, passive: d })
          : n.addEventListener(s, o, !0)
        : d !== void 0
        ? n.addEventListener(s, o, { passive: d })
        : n.addEventListener(s, o, !1);
  }
  function _u(n, s, o, l, d) {
    var p = l;
    if ((s & 1) === 0 && (s & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var E = l.stateNode.containerInfo;
          if (E === d || (E.nodeType === 8 && E.parentNode === d)) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var C = v.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = v.stateNode.containerInfo),
                C === d || (C.nodeType === 8 && C.parentNode === d))
              )
                return;
              v = v.return;
            }
          for (; E !== null; ) {
            if (((v = Nr(E)), v === null)) return;
            if (((C = v.tag), C === 5 || C === 6)) {
              l = p = v;
              continue e;
            }
            E = E.parentNode;
          }
        }
        l = l.return;
      }
    wh(function () {
      var j = p,
        H = Zl(o),
        W = [];
      e: {
        var $ = cp.get(n);
        if ($ !== void 0) {
          var G = hu,
            ee = n;
          switch (n) {
            case "keypress":
              if (ta(o) === 0) break e;
            case "keydown":
            case "keyup":
              G = C1;
              break;
            case "focusin":
              (ee = "focus"), (G = gu);
              break;
            case "focusout":
              (ee = "blur"), (G = gu);
              break;
            case "beforeblur":
            case "afterblur":
              G = gu;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Bh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = p1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = R1;
              break;
            case op:
            case ap:
            case lp:
              G = y1;
              break;
            case up:
              G = N1;
              break;
            case "scroll":
              G = f1;
              break;
            case "wheel":
              G = j1;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = w1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = zh;
          }
          var re = (s & 4) !== 0,
            Je = !re && n === "scroll",
            N = re ? ($ !== null ? $ + "Capture" : null) : $;
          re = [];
          for (var _ = j, O; _ !== null; ) {
            O = _;
            var K = O.stateNode;
            if (
              (O.tag === 5 &&
                K !== null &&
                ((O = K),
                N !== null &&
                  ((K = hi(_, N)), K != null && re.push(Oi(_, K, O)))),
              Je)
            )
              break;
            _ = _.return;
          }
          0 < re.length &&
            (($ = new G($, ee, null, o, H)),
            W.push({ event: $, listeners: re }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (
            (($ = n === "mouseover" || n === "pointerover"),
            (G = n === "mouseout" || n === "pointerout"),
            $ &&
              o !== Xl &&
              (ee = o.relatedTarget || o.fromElement) &&
              (Nr(ee) || ee[Cn]))
          )
            break e;
          if (
            (G || $) &&
            (($ =
              H.window === H
                ? H
                : ($ = H.ownerDocument)
                ? $.defaultView || $.parentWindow
                : window),
            G
              ? ((ee = o.relatedTarget || o.toElement),
                (G = j),
                (ee = ee ? Nr(ee) : null),
                ee !== null &&
                  ((Je = Ar(ee)),
                  ee !== Je || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((G = null), (ee = j)),
            G !== ee)
          ) {
            if (
              ((re = Bh),
              (K = "onMouseLeave"),
              (N = "onMouseEnter"),
              (_ = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((re = zh),
                (K = "onPointerLeave"),
                (N = "onPointerEnter"),
                (_ = "pointer")),
              (Je = G == null ? $ : bs(G)),
              (O = ee == null ? $ : bs(ee)),
              ($ = new re(K, _ + "leave", G, o, H)),
              ($.target = Je),
              ($.relatedTarget = O),
              (K = null),
              Nr(H) === j &&
                ((re = new re(N, _ + "enter", ee, o, H)),
                (re.target = O),
                (re.relatedTarget = Je),
                (K = re)),
              (Je = K),
              G && ee)
            )
              t: {
                for (re = G, N = ee, _ = 0, O = re; O; O = xs(O)) _++;
                for (O = 0, K = N; K; K = xs(K)) O++;
                for (; 0 < _ - O; ) (re = xs(re)), _--;
                for (; 0 < O - _; ) (N = xs(N)), O--;
                for (; _--; ) {
                  if (re === N || (N !== null && re === N.alternate)) break t;
                  (re = xs(re)), (N = xs(N));
                }
                re = null;
              }
            else re = null;
            G !== null && mp(W, $, G, re, !1),
              ee !== null && Je !== null && mp(W, Je, ee, re, !0);
          }
        }
        e: {
          if (
            (($ = j ? bs(j) : window),
            (G = $.nodeName && $.nodeName.toLowerCase()),
            G === "select" || (G === "input" && $.type === "file"))
          )
            var ie = B1;
          else if (Qh($))
            if (Jh) ie = H1;
            else {
              ie = z1;
              var oe = U1;
            }
          else
            (G = $.nodeName) &&
              G.toLowerCase() === "input" &&
              ($.type === "checkbox" || $.type === "radio") &&
              (ie = $1);
          if (ie && (ie = ie(n, j))) {
            Gh(W, ie, o, H);
            break e;
          }
          oe && oe(n, $, j),
            n === "focusout" &&
              (oe = $._wrapperState) &&
              oe.controlled &&
              $.type === "number" &&
              Kl($, "number", $.value);
        }
        switch (((oe = j ? bs(j) : window), n)) {
          case "focusin":
            (Qh(oe) || oe.contentEditable === "true") &&
              ((vs = oe), (bu = j), (Ri = null));
            break;
          case "focusout":
            Ri = bu = vs = null;
            break;
          case "mousedown":
            ku = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ku = !1), sp(W, o, H);
            break;
          case "selectionchange":
            if (K1) break;
          case "keydown":
          case "keyup":
            sp(W, o, H);
        }
        var ae;
        if (vu)
          e: {
            switch (n) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          ys
            ? qh(n, o) && (ge = "onCompositionEnd")
            : n === "keydown" &&
              o.keyCode === 229 &&
              (ge = "onCompositionStart");
        ge &&
          ($h &&
            o.locale !== "ko" &&
            (ys || ge !== "onCompositionStart"
              ? ge === "onCompositionEnd" && ys && (ae = Fh())
              : ((Qn = H),
                (fu = "value" in Qn ? Qn.value : Qn.textContent),
                (ys = !0))),
          (oe = la(j, ge)),
          0 < oe.length &&
            ((ge = new Uh(ge, n, null, o, H)),
            W.push({ event: ge, listeners: oe }),
            ae
              ? (ge.data = ae)
              : ((ae = Kh(o)), ae !== null && (ge.data = ae)))),
          (ae = M1 ? D1(n, o) : I1(n, o)) &&
            ((j = la(j, "onBeforeInput")),
            0 < j.length &&
              ((H = new Uh("onBeforeInput", "beforeinput", null, o, H)),
              W.push({ event: H, listeners: j }),
              (H.data = ae)));
      }
      hp(W, s);
    });
  }
  function Oi(n, s, o) {
    return { instance: n, listener: s, currentTarget: o };
  }
  function la(n, s) {
    for (var o = s + "Capture", l = []; n !== null; ) {
      var d = n,
        p = d.stateNode;
      d.tag === 5 &&
        p !== null &&
        ((d = p),
        (p = hi(n, o)),
        p != null && l.unshift(Oi(n, p, d)),
        (p = hi(n, s)),
        p != null && l.push(Oi(n, p, d))),
        (n = n.return);
    }
    return l;
  }
  function xs(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function mp(n, s, o, l, d) {
    for (var p = s._reactName, v = []; o !== null && o !== l; ) {
      var E = o,
        C = E.alternate,
        j = E.stateNode;
      if (C !== null && C === l) break;
      E.tag === 5 &&
        j !== null &&
        ((E = j),
        d
          ? ((C = hi(o, p)), C != null && v.unshift(Oi(o, C, E)))
          : d || ((C = hi(o, p)), C != null && v.push(Oi(o, C, E)))),
        (o = o.return);
    }
    v.length !== 0 && n.push({ event: s, listeners: v });
  }
  var Y1 = /\r\n?/g,
    X1 = /\u0000|\uFFFD/g;
  function gp(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        Y1,
        `
`
      )
      .replace(X1, "");
  }
  function ua(n, s, o) {
    if (((s = gp(s)), gp(n) !== s && o)) throw Error(r(425));
  }
  function ca() {}
  var Ru = null,
    Au = null;
  function Nu(n, s) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof s.children == "string" ||
      typeof s.children == "number" ||
      (typeof s.dangerouslySetInnerHTML == "object" &&
        s.dangerouslySetInnerHTML !== null &&
        s.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ou = typeof setTimeout == "function" ? setTimeout : void 0,
    Z1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yp = typeof Promise == "function" ? Promise : void 0,
    eS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof yp < "u"
        ? function (n) {
            return yp.resolve(null).then(n).catch(tS);
          }
        : Ou;
  function tS(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function ju(n, s) {
    var o = s,
      l = 0;
    do {
      var d = o.nextSibling;
      if ((n.removeChild(o), d && d.nodeType === 8))
        if (((o = d.data), o === "/$")) {
          if (l === 0) {
            n.removeChild(d), bi(s);
            return;
          }
          l--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || l++;
      o = d;
    } while (o);
    bi(s);
  }
  function Jn(n) {
    for (; n != null; n = n.nextSibling) {
      var s = n.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (((s = n.data), s === "$" || s === "$!" || s === "$?")) break;
        if (s === "/$") return null;
      }
    }
    return n;
  }
  function vp(n) {
    n = n.previousSibling;
    for (var s = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (s === 0) return n;
          s--;
        } else o === "/$" && s++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ss = Math.random().toString(36).slice(2),
    pn = "__reactFiber$" + Ss,
    ji = "__reactProps$" + Ss,
    Cn = "__reactContainer$" + Ss,
    Lu = "__reactEvents$" + Ss,
    nS = "__reactListeners$" + Ss,
    rS = "__reactHandles$" + Ss;
  function Nr(n) {
    var s = n[pn];
    if (s) return s;
    for (var o = n.parentNode; o; ) {
      if ((s = o[Cn] || o[pn])) {
        if (
          ((o = s.alternate),
          s.child !== null || (o !== null && o.child !== null))
        )
          for (n = vp(n); n !== null; ) {
            if ((o = n[pn])) return o;
            n = vp(n);
          }
        return s;
      }
      (n = o), (o = n.parentNode);
    }
    return null;
  }
  function Li(n) {
    return (
      (n = n[pn] || n[Cn]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function bs(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function da(n) {
    return n[ji] || null;
  }
  var Mu = [],
    ks = -1;
  function Yn(n) {
    return { current: n };
  }
  function Be(n) {
    0 > ks || ((n.current = Mu[ks]), (Mu[ks] = null), ks--);
  }
  function Fe(n, s) {
    ks++, (Mu[ks] = n.current), (n.current = s);
  }
  var Xn = {},
    pt = Yn(Xn),
    Tt = Yn(!1),
    Or = Xn;
  function Es(n, s) {
    var o = n.type.contextTypes;
    if (!o) return Xn;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === s)
      return l.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      p;
    for (p in o) d[p] = s[p];
    return (
      l &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = s),
        (n.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function Ct(n) {
    return (n = n.childContextTypes), n != null;
  }
  function fa() {
    Be(Tt), Be(pt);
  }
  function wp(n, s, o) {
    if (pt.current !== Xn) throw Error(r(168));
    Fe(pt, s), Fe(Tt, o);
  }
  function xp(n, s, o) {
    var l = n.stateNode;
    if (((s = s.childContextTypes), typeof l.getChildContext != "function"))
      return o;
    l = l.getChildContext();
    for (var d in l) if (!(d in s)) throw Error(r(108, Oe(n) || "Unknown", d));
    return V({}, o, l);
  }
  function ha(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        Xn),
      (Or = pt.current),
      Fe(pt, n),
      Fe(Tt, Tt.current),
      !0
    );
  }
  function Sp(n, s, o) {
    var l = n.stateNode;
    if (!l) throw Error(r(169));
    o
      ? ((n = xp(n, s, Or)),
        (l.__reactInternalMemoizedMergedChildContext = n),
        Be(Tt),
        Be(pt),
        Fe(pt, n))
      : Be(Tt),
      Fe(Tt, o);
  }
  var Pn = null,
    pa = !1,
    Du = !1;
  function bp(n) {
    Pn === null ? (Pn = [n]) : Pn.push(n);
  }
  function sS(n) {
    (pa = !0), bp(n);
  }
  function Zn() {
    if (!Du && Pn !== null) {
      Du = !0;
      var n = 0,
        s = Le;
      try {
        var o = Pn;
        for (Le = 1; n < o.length; n++) {
          var l = o[n];
          do l = l(!0);
          while (l !== null);
        }
        (Pn = null), (pa = !1);
      } catch (d) {
        throw (Pn !== null && (Pn = Pn.slice(n + 1)), Eh(su, Zn), d);
      } finally {
        (Le = s), (Du = !1);
      }
    }
    return null;
  }
  var Ts = [],
    Cs = 0,
    ma = null,
    ga = 0,
    zt = [],
    $t = 0,
    jr = null,
    _n = 1,
    Rn = "";
  function Lr(n, s) {
    (Ts[Cs++] = ga), (Ts[Cs++] = ma), (ma = n), (ga = s);
  }
  function kp(n, s, o) {
    (zt[$t++] = _n), (zt[$t++] = Rn), (zt[$t++] = jr), (jr = n);
    var l = _n;
    n = Rn;
    var d = 32 - en(l) - 1;
    (l &= ~(1 << d)), (o += 1);
    var p = 32 - en(s) + d;
    if (30 < p) {
      var v = d - (d % 5);
      (p = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (d -= v),
        (_n = (1 << (32 - en(s) + d)) | (o << d) | l),
        (Rn = p + n);
    } else (_n = (1 << p) | (o << d) | l), (Rn = n);
  }
  function Iu(n) {
    n.return !== null && (Lr(n, 1), kp(n, 1, 0));
  }
  function Fu(n) {
    for (; n === ma; )
      (ma = Ts[--Cs]), (Ts[Cs] = null), (ga = Ts[--Cs]), (Ts[Cs] = null);
    for (; n === jr; )
      (jr = zt[--$t]),
        (zt[$t] = null),
        (Rn = zt[--$t]),
        (zt[$t] = null),
        (_n = zt[--$t]),
        (zt[$t] = null);
  }
  var It = null,
    Ft = null,
    ze = !1,
    nn = null;
  function Ep(n, s) {
    var o = Kt(5, null, null, 0);
    (o.elementType = "DELETED"),
      (o.stateNode = s),
      (o.return = n),
      (s = n.deletions),
      s === null ? ((n.deletions = [o]), (n.flags |= 16)) : s.push(o);
  }
  function Tp(n, s) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return (
          (s =
            s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase()
              ? null
              : s),
          s !== null
            ? ((n.stateNode = s), (It = n), (Ft = Jn(s.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (s = n.pendingProps === "" || s.nodeType !== 3 ? null : s),
          s !== null ? ((n.stateNode = s), (It = n), (Ft = null), !0) : !1
        );
      case 13:
        return (
          (s = s.nodeType !== 8 ? null : s),
          s !== null
            ? ((o = jr !== null ? { id: _n, overflow: Rn } : null),
              (n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824,
              }),
              (o = Kt(18, null, null, 0)),
              (o.stateNode = s),
              (o.return = n),
              (n.child = o),
              (It = n),
              (Ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Vu(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Bu(n) {
    if (ze) {
      var s = Ft;
      if (s) {
        var o = s;
        if (!Tp(n, s)) {
          if (Vu(n)) throw Error(r(418));
          s = Jn(o.nextSibling);
          var l = It;
          s && Tp(n, s)
            ? Ep(l, o)
            : ((n.flags = (n.flags & -4097) | 2), (ze = !1), (It = n));
        }
      } else {
        if (Vu(n)) throw Error(r(418));
        (n.flags = (n.flags & -4097) | 2), (ze = !1), (It = n);
      }
    }
  }
  function Cp(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    It = n;
  }
  function ya(n) {
    if (n !== It) return !1;
    if (!ze) return Cp(n), (ze = !0), !1;
    var s;
    if (
      ((s = n.tag !== 3) &&
        !(s = n.tag !== 5) &&
        ((s = n.type),
        (s = s !== "head" && s !== "body" && !Nu(n.type, n.memoizedProps))),
      s && (s = Ft))
    ) {
      if (Vu(n)) throw (Pp(), Error(r(418)));
      for (; s; ) Ep(n, s), (s = Jn(s.nextSibling));
    }
    if ((Cp(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(r(317));
      e: {
        for (n = n.nextSibling, s = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (s === 0) {
                Ft = Jn(n.nextSibling);
                break e;
              }
              s--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || s++;
          }
          n = n.nextSibling;
        }
        Ft = null;
      }
    } else Ft = It ? Jn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Pp() {
    for (var n = Ft; n; ) n = Jn(n.nextSibling);
  }
  function Ps() {
    (Ft = It = null), (ze = !1);
  }
  function Uu(n) {
    nn === null ? (nn = [n]) : nn.push(n);
  }
  var iS = M.ReactCurrentBatchConfig;
  function Mi(n, s, o) {
    if (
      ((n = o.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(r(309));
          var l = o.stateNode;
        }
        if (!l) throw Error(r(147, n));
        var d = l,
          p = "" + n;
        return s !== null &&
          s.ref !== null &&
          typeof s.ref == "function" &&
          s.ref._stringRef === p
          ? s.ref
          : ((s = function (v) {
              var E = d.refs;
              v === null ? delete E[p] : (E[p] = v);
            }),
            (s._stringRef = p),
            s);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!o._owner) throw Error(r(290, n));
    }
    return n;
  }
  function va(n, s) {
    throw (
      ((n = Object.prototype.toString.call(s)),
      Error(
        r(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(s).join(", ") + "}"
            : n
        )
      ))
    );
  }
  function _p(n) {
    var s = n._init;
    return s(n._payload);
  }
  function Rp(n) {
    function s(N, _) {
      if (n) {
        var O = N.deletions;
        O === null ? ((N.deletions = [_]), (N.flags |= 16)) : O.push(_);
      }
    }
    function o(N, _) {
      if (!n) return null;
      for (; _ !== null; ) s(N, _), (_ = _.sibling);
      return null;
    }
    function l(N, _) {
      for (N = new Map(); _ !== null; )
        _.key !== null ? N.set(_.key, _) : N.set(_.index, _), (_ = _.sibling);
      return N;
    }
    function d(N, _) {
      return (N = ar(N, _)), (N.index = 0), (N.sibling = null), N;
    }
    function p(N, _, O) {
      return (
        (N.index = O),
        n
          ? ((O = N.alternate),
            O !== null
              ? ((O = O.index), O < _ ? ((N.flags |= 2), _) : O)
              : ((N.flags |= 2), _))
          : ((N.flags |= 1048576), _)
      );
    }
    function v(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function E(N, _, O, K) {
      return _ === null || _.tag !== 6
        ? ((_ = Oc(O, N.mode, K)), (_.return = N), _)
        : ((_ = d(_, O)), (_.return = N), _);
    }
    function C(N, _, O, K) {
      var ie = O.type;
      return ie === J
        ? H(N, _, O.props.children, K, O.key)
        : _ !== null &&
          (_.elementType === ie ||
            (typeof ie == "object" &&
              ie !== null &&
              ie.$$typeof === xe &&
              _p(ie) === _.type))
        ? ((K = d(_, O.props)), (K.ref = Mi(N, _, O)), (K.return = N), K)
        : ((K = za(O.type, O.key, O.props, null, N.mode, K)),
          (K.ref = Mi(N, _, O)),
          (K.return = N),
          K);
    }
    function j(N, _, O, K) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== O.containerInfo ||
        _.stateNode.implementation !== O.implementation
        ? ((_ = jc(O, N.mode, K)), (_.return = N), _)
        : ((_ = d(_, O.children || [])), (_.return = N), _);
    }
    function H(N, _, O, K, ie) {
      return _ === null || _.tag !== 7
        ? ((_ = zr(O, N.mode, K, ie)), (_.return = N), _)
        : ((_ = d(_, O)), (_.return = N), _);
    }
    function W(N, _, O) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return (_ = Oc("" + _, N.mode, O)), (_.return = N), _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case U:
            return (
              (O = za(_.type, _.key, _.props, null, N.mode, O)),
              (O.ref = Mi(N, null, _)),
              (O.return = N),
              O
            );
          case Q:
            return (_ = jc(_, N.mode, O)), (_.return = N), _;
          case xe:
            var K = _._init;
            return W(N, K(_._payload), O);
        }
        if (ci(_) || se(_))
          return (_ = zr(_, N.mode, O, null)), (_.return = N), _;
        va(N, _);
      }
      return null;
    }
    function $(N, _, O, K) {
      var ie = _ !== null ? _.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return ie !== null ? null : E(N, _, "" + O, K);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case U:
            return O.key === ie ? C(N, _, O, K) : null;
          case Q:
            return O.key === ie ? j(N, _, O, K) : null;
          case xe:
            return (ie = O._init), $(N, _, ie(O._payload), K);
        }
        if (ci(O) || se(O)) return ie !== null ? null : H(N, _, O, K, null);
        va(N, O);
      }
      return null;
    }
    function G(N, _, O, K, ie) {
      if ((typeof K == "string" && K !== "") || typeof K == "number")
        return (N = N.get(O) || null), E(_, N, "" + K, ie);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case U:
            return (
              (N = N.get(K.key === null ? O : K.key) || null), C(_, N, K, ie)
            );
          case Q:
            return (
              (N = N.get(K.key === null ? O : K.key) || null), j(_, N, K, ie)
            );
          case xe:
            var oe = K._init;
            return G(N, _, O, oe(K._payload), ie);
        }
        if (ci(K) || se(K)) return (N = N.get(O) || null), H(_, N, K, ie, null);
        va(_, K);
      }
      return null;
    }
    function ee(N, _, O, K) {
      for (
        var ie = null, oe = null, ae = _, ge = (_ = 0), ot = null;
        ae !== null && ge < O.length;
        ge++
      ) {
        ae.index > ge ? ((ot = ae), (ae = null)) : (ot = ae.sibling);
        var Ae = $(N, ae, O[ge], K);
        if (Ae === null) {
          ae === null && (ae = ot);
          break;
        }
        n && ae && Ae.alternate === null && s(N, ae),
          (_ = p(Ae, _, ge)),
          oe === null ? (ie = Ae) : (oe.sibling = Ae),
          (oe = Ae),
          (ae = ot);
      }
      if (ge === O.length) return o(N, ae), ze && Lr(N, ge), ie;
      if (ae === null) {
        for (; ge < O.length; ge++)
          (ae = W(N, O[ge], K)),
            ae !== null &&
              ((_ = p(ae, _, ge)),
              oe === null ? (ie = ae) : (oe.sibling = ae),
              (oe = ae));
        return ze && Lr(N, ge), ie;
      }
      for (ae = l(N, ae); ge < O.length; ge++)
        (ot = G(ae, N, ge, O[ge], K)),
          ot !== null &&
            (n &&
              ot.alternate !== null &&
              ae.delete(ot.key === null ? ge : ot.key),
            (_ = p(ot, _, ge)),
            oe === null ? (ie = ot) : (oe.sibling = ot),
            (oe = ot));
      return (
        n &&
          ae.forEach(function (lr) {
            return s(N, lr);
          }),
        ze && Lr(N, ge),
        ie
      );
    }
    function re(N, _, O, K) {
      var ie = se(O);
      if (typeof ie != "function") throw Error(r(150));
      if (((O = ie.call(O)), O == null)) throw Error(r(151));
      for (
        var oe = (ie = null), ae = _, ge = (_ = 0), ot = null, Ae = O.next();
        ae !== null && !Ae.done;
        ge++, Ae = O.next()
      ) {
        ae.index > ge ? ((ot = ae), (ae = null)) : (ot = ae.sibling);
        var lr = $(N, ae, Ae.value, K);
        if (lr === null) {
          ae === null && (ae = ot);
          break;
        }
        n && ae && lr.alternate === null && s(N, ae),
          (_ = p(lr, _, ge)),
          oe === null ? (ie = lr) : (oe.sibling = lr),
          (oe = lr),
          (ae = ot);
      }
      if (Ae.done) return o(N, ae), ze && Lr(N, ge), ie;
      if (ae === null) {
        for (; !Ae.done; ge++, Ae = O.next())
          (Ae = W(N, Ae.value, K)),
            Ae !== null &&
              ((_ = p(Ae, _, ge)),
              oe === null ? (ie = Ae) : (oe.sibling = Ae),
              (oe = Ae));
        return ze && Lr(N, ge), ie;
      }
      for (ae = l(N, ae); !Ae.done; ge++, Ae = O.next())
        (Ae = G(ae, N, ge, Ae.value, K)),
          Ae !== null &&
            (n &&
              Ae.alternate !== null &&
              ae.delete(Ae.key === null ? ge : Ae.key),
            (_ = p(Ae, _, ge)),
            oe === null ? (ie = Ae) : (oe.sibling = Ae),
            (oe = Ae));
      return (
        n &&
          ae.forEach(function (FS) {
            return s(N, FS);
          }),
        ze && Lr(N, ge),
        ie
      );
    }
    function Je(N, _, O, K) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === J &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case U:
            e: {
              for (var ie = O.key, oe = _; oe !== null; ) {
                if (oe.key === ie) {
                  if (((ie = O.type), ie === J)) {
                    if (oe.tag === 7) {
                      o(N, oe.sibling),
                        (_ = d(oe, O.props.children)),
                        (_.return = N),
                        (N = _);
                      break e;
                    }
                  } else if (
                    oe.elementType === ie ||
                    (typeof ie == "object" &&
                      ie !== null &&
                      ie.$$typeof === xe &&
                      _p(ie) === oe.type)
                  ) {
                    o(N, oe.sibling),
                      (_ = d(oe, O.props)),
                      (_.ref = Mi(N, oe, O)),
                      (_.return = N),
                      (N = _);
                    break e;
                  }
                  o(N, oe);
                  break;
                } else s(N, oe);
                oe = oe.sibling;
              }
              O.type === J
                ? ((_ = zr(O.props.children, N.mode, K, O.key)),
                  (_.return = N),
                  (N = _))
                : ((K = za(O.type, O.key, O.props, null, N.mode, K)),
                  (K.ref = Mi(N, _, O)),
                  (K.return = N),
                  (N = K));
            }
            return v(N);
          case Q:
            e: {
              for (oe = O.key; _ !== null; ) {
                if (_.key === oe)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === O.containerInfo &&
                    _.stateNode.implementation === O.implementation
                  ) {
                    o(N, _.sibling),
                      (_ = d(_, O.children || [])),
                      (_.return = N),
                      (N = _);
                    break e;
                  } else {
                    o(N, _);
                    break;
                  }
                else s(N, _);
                _ = _.sibling;
              }
              (_ = jc(O, N.mode, K)), (_.return = N), (N = _);
            }
            return v(N);
          case xe:
            return (oe = O._init), Je(N, _, oe(O._payload), K);
        }
        if (ci(O)) return ee(N, _, O, K);
        if (se(O)) return re(N, _, O, K);
        va(N, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          _ !== null && _.tag === 6
            ? (o(N, _.sibling), (_ = d(_, O)), (_.return = N), (N = _))
            : (o(N, _), (_ = Oc(O, N.mode, K)), (_.return = N), (N = _)),
          v(N))
        : o(N, _);
    }
    return Je;
  }
  var _s = Rp(!0),
    Ap = Rp(!1),
    wa = Yn(null),
    xa = null,
    Rs = null,
    zu = null;
  function $u() {
    zu = Rs = xa = null;
  }
  function Hu(n) {
    var s = wa.current;
    Be(wa), (n._currentValue = s);
  }
  function Wu(n, s, o) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (
        ((n.childLanes & s) !== s
          ? ((n.childLanes |= s), l !== null && (l.childLanes |= s))
          : l !== null && (l.childLanes & s) !== s && (l.childLanes |= s),
        n === o)
      )
        break;
      n = n.return;
    }
  }
  function As(n, s) {
    (xa = n),
      (zu = Rs = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        ((n.lanes & s) !== 0 && (Pt = !0), (n.firstContext = null));
  }
  function Ht(n) {
    var s = n._currentValue;
    if (zu !== n)
      if (((n = { context: n, memoizedValue: s, next: null }), Rs === null)) {
        if (xa === null) throw Error(r(308));
        (Rs = n), (xa.dependencies = { lanes: 0, firstContext: n });
      } else Rs = Rs.next = n;
    return s;
  }
  var Mr = null;
  function qu(n) {
    Mr === null ? (Mr = [n]) : Mr.push(n);
  }
  function Np(n, s, o, l) {
    var d = s.interleaved;
    return (
      d === null ? ((o.next = o), qu(s)) : ((o.next = d.next), (d.next = o)),
      (s.interleaved = o),
      An(n, l)
    );
  }
  function An(n, s) {
    n.lanes |= s;
    var o = n.alternate;
    for (o !== null && (o.lanes |= s), o = n, n = n.return; n !== null; )
      (n.childLanes |= s),
        (o = n.alternate),
        o !== null && (o.childLanes |= s),
        (o = n),
        (n = n.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  var er = !1;
  function Ku(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Op(n, s) {
    (n = n.updateQueue),
      s.updateQueue === n &&
        (s.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        });
  }
  function Nn(n, s) {
    return {
      eventTime: n,
      lane: s,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function tr(n, s, o) {
    var l = n.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (_e & 2) !== 0)) {
      var d = l.pending;
      return (
        d === null ? (s.next = s) : ((s.next = d.next), (d.next = s)),
        (l.pending = s),
        An(n, o)
      );
    }
    return (
      (d = l.interleaved),
      d === null ? ((s.next = s), qu(l)) : ((s.next = d.next), (d.next = s)),
      (l.interleaved = s),
      An(n, o)
    );
  }
  function Sa(n, s, o) {
    if (
      ((s = s.updateQueue), s !== null && ((s = s.shared), (o & 4194240) !== 0))
    ) {
      var l = s.lanes;
      (l &= n.pendingLanes), (o |= l), (s.lanes = o), au(n, o);
    }
  }
  function jp(n, s) {
    var o = n.updateQueue,
      l = n.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
      var d = null,
        p = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var v = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          p === null ? (d = p = v) : (p = p.next = v), (o = o.next);
        } while (o !== null);
        p === null ? (d = p = s) : (p = p.next = s);
      } else d = p = s;
      (o = {
        baseState: l.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: l.shared,
        effects: l.effects,
      }),
        (n.updateQueue = o);
      return;
    }
    (n = o.lastBaseUpdate),
      n === null ? (o.firstBaseUpdate = s) : (n.next = s),
      (o.lastBaseUpdate = s);
  }
  function ba(n, s, o, l) {
    var d = n.updateQueue;
    er = !1;
    var p = d.firstBaseUpdate,
      v = d.lastBaseUpdate,
      E = d.shared.pending;
    if (E !== null) {
      d.shared.pending = null;
      var C = E,
        j = C.next;
      (C.next = null), v === null ? (p = j) : (v.next = j), (v = C);
      var H = n.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (E = H.lastBaseUpdate),
        E !== v &&
          (E === null ? (H.firstBaseUpdate = j) : (E.next = j),
          (H.lastBaseUpdate = C)));
    }
    if (p !== null) {
      var W = d.baseState;
      (v = 0), (H = j = C = null), (E = p);
      do {
        var $ = E.lane,
          G = E.eventTime;
        if ((l & $) === $) {
          H !== null &&
            (H = H.next =
              {
                eventTime: G,
                lane: 0,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null,
              });
          e: {
            var ee = n,
              re = E;
            switch ((($ = s), (G = o), re.tag)) {
              case 1:
                if (((ee = re.payload), typeof ee == "function")) {
                  W = ee.call(G, W, $);
                  break e;
                }
                W = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = re.payload),
                  ($ = typeof ee == "function" ? ee.call(G, W, $) : ee),
                  $ == null)
                )
                  break e;
                W = V({}, W, $);
                break e;
              case 2:
                er = !0;
            }
          }
          E.callback !== null &&
            E.lane !== 0 &&
            ((n.flags |= 64),
            ($ = d.effects),
            $ === null ? (d.effects = [E]) : $.push(E));
        } else
          (G = {
            eventTime: G,
            lane: $,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            H === null ? ((j = H = G), (C = W)) : (H = H.next = G),
            (v |= $);
        if (((E = E.next), E === null)) {
          if (((E = d.shared.pending), E === null)) break;
          ($ = E),
            (E = $.next),
            ($.next = null),
            (d.lastBaseUpdate = $),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (H === null && (C = W),
        (d.baseState = C),
        (d.firstBaseUpdate = j),
        (d.lastBaseUpdate = H),
        (s = d.shared.interleaved),
        s !== null)
      ) {
        d = s;
        do (v |= d.lane), (d = d.next);
        while (d !== s);
      } else p === null && (d.shared.lanes = 0);
      (Fr |= v), (n.lanes = v), (n.memoizedState = W);
    }
  }
  function Lp(n, s, o) {
    if (((n = s.effects), (s.effects = null), n !== null))
      for (s = 0; s < n.length; s++) {
        var l = n[s],
          d = l.callback;
        if (d !== null) {
          if (((l.callback = null), (l = o), typeof d != "function"))
            throw Error(r(191, d));
          d.call(l);
        }
      }
  }
  var Di = {},
    mn = Yn(Di),
    Ii = Yn(Di),
    Fi = Yn(Di);
  function Dr(n) {
    if (n === Di) throw Error(r(174));
    return n;
  }
  function Qu(n, s) {
    switch ((Fe(Fi, s), Fe(Ii, n), Fe(mn, Di), (n = s.nodeType), n)) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : Gl(null, "");
        break;
      default:
        (n = n === 8 ? s.parentNode : s),
          (s = n.namespaceURI || null),
          (n = n.tagName),
          (s = Gl(s, n));
    }
    Be(mn), Fe(mn, s);
  }
  function Ns() {
    Be(mn), Be(Ii), Be(Fi);
  }
  function Mp(n) {
    Dr(Fi.current);
    var s = Dr(mn.current),
      o = Gl(s, n.type);
    s !== o && (Fe(Ii, n), Fe(mn, o));
  }
  function Gu(n) {
    Ii.current === n && (Be(mn), Be(Ii));
  }
  var $e = Yn(0);
  function ka(n) {
    for (var s = n; s !== null; ) {
      if (s.tag === 13) {
        var o = s.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")
        )
          return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if ((s.flags & 128) !== 0) return s;
      } else if (s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === n) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === n) return null;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
    return null;
  }
  var Ju = [];
  function Yu() {
    for (var n = 0; n < Ju.length; n++)
      Ju[n]._workInProgressVersionPrimary = null;
    Ju.length = 0;
  }
  var Ea = M.ReactCurrentDispatcher,
    Xu = M.ReactCurrentBatchConfig,
    Ir = 0,
    He = null,
    tt = null,
    st = null,
    Ta = !1,
    Vi = !1,
    Bi = 0,
    oS = 0;
  function mt() {
    throw Error(r(321));
  }
  function Zu(n, s) {
    if (s === null) return !1;
    for (var o = 0; o < s.length && o < n.length; o++)
      if (!tn(n[o], s[o])) return !1;
    return !0;
  }
  function ec(n, s, o, l, d, p) {
    if (
      ((Ir = p),
      (He = s),
      (s.memoizedState = null),
      (s.updateQueue = null),
      (s.lanes = 0),
      (Ea.current = n === null || n.memoizedState === null ? cS : dS),
      (n = o(l, d)),
      Vi)
    ) {
      p = 0;
      do {
        if (((Vi = !1), (Bi = 0), 25 <= p)) throw Error(r(301));
        (p += 1),
          (st = tt = null),
          (s.updateQueue = null),
          (Ea.current = fS),
          (n = o(l, d));
      } while (Vi);
    }
    if (
      ((Ea.current = _a),
      (s = tt !== null && tt.next !== null),
      (Ir = 0),
      (st = tt = He = null),
      (Ta = !1),
      s)
    )
      throw Error(r(300));
    return n;
  }
  function tc() {
    var n = Bi !== 0;
    return (Bi = 0), n;
  }
  function gn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return st === null ? (He.memoizedState = st = n) : (st = st.next = n), st;
  }
  function Wt() {
    if (tt === null) {
      var n = He.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = tt.next;
    var s = st === null ? He.memoizedState : st.next;
    if (s !== null) (st = s), (tt = n);
    else {
      if (n === null) throw Error(r(310));
      (tt = n),
        (n = {
          memoizedState: tt.memoizedState,
          baseState: tt.baseState,
          baseQueue: tt.baseQueue,
          queue: tt.queue,
          next: null,
        }),
        st === null ? (He.memoizedState = st = n) : (st = st.next = n);
    }
    return st;
  }
  function Ui(n, s) {
    return typeof s == "function" ? s(n) : s;
  }
  function nc(n) {
    var s = Wt(),
      o = s.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = n;
    var l = tt,
      d = l.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (d !== null) {
        var v = d.next;
        (d.next = p.next), (p.next = v);
      }
      (l.baseQueue = d = p), (o.pending = null);
    }
    if (d !== null) {
      (p = d.next), (l = l.baseState);
      var E = (v = null),
        C = null,
        j = p;
      do {
        var H = j.lane;
        if ((Ir & H) === H)
          C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (l = j.hasEagerState ? j.eagerState : n(l, j.action));
        else {
          var W = {
            lane: H,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          C === null ? ((E = C = W), (v = l)) : (C = C.next = W),
            (He.lanes |= H),
            (Fr |= H);
        }
        j = j.next;
      } while (j !== null && j !== p);
      C === null ? (v = l) : (C.next = E),
        tn(l, s.memoizedState) || (Pt = !0),
        (s.memoizedState = l),
        (s.baseState = v),
        (s.baseQueue = C),
        (o.lastRenderedState = l);
    }
    if (((n = o.interleaved), n !== null)) {
      d = n;
      do (p = d.lane), (He.lanes |= p), (Fr |= p), (d = d.next);
      while (d !== n);
    } else d === null && (o.lanes = 0);
    return [s.memoizedState, o.dispatch];
  }
  function rc(n) {
    var s = Wt(),
      o = s.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = n;
    var l = o.dispatch,
      d = o.pending,
      p = s.memoizedState;
    if (d !== null) {
      o.pending = null;
      var v = (d = d.next);
      do (p = n(p, v.action)), (v = v.next);
      while (v !== d);
      tn(p, s.memoizedState) || (Pt = !0),
        (s.memoizedState = p),
        s.baseQueue === null && (s.baseState = p),
        (o.lastRenderedState = p);
    }
    return [p, l];
  }
  function Dp() {}
  function Ip(n, s) {
    var o = He,
      l = Wt(),
      d = s(),
      p = !tn(l.memoizedState, d);
    if (
      (p && ((l.memoizedState = d), (Pt = !0)),
      (l = l.queue),
      sc(Bp.bind(null, o, l, n), [n]),
      l.getSnapshot !== s || p || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        zi(9, Vp.bind(null, o, l, d, s), void 0, null),
        it === null)
      )
        throw Error(r(349));
      (Ir & 30) !== 0 || Fp(o, s, d);
    }
    return d;
  }
  function Fp(n, s, o) {
    (n.flags |= 16384),
      (n = { getSnapshot: s, value: o }),
      (s = He.updateQueue),
      s === null
        ? ((s = { lastEffect: null, stores: null }),
          (He.updateQueue = s),
          (s.stores = [n]))
        : ((o = s.stores), o === null ? (s.stores = [n]) : o.push(n));
  }
  function Vp(n, s, o, l) {
    (s.value = o), (s.getSnapshot = l), Up(s) && zp(n);
  }
  function Bp(n, s, o) {
    return o(function () {
      Up(s) && zp(n);
    });
  }
  function Up(n) {
    var s = n.getSnapshot;
    n = n.value;
    try {
      var o = s();
      return !tn(n, o);
    } catch {
      return !0;
    }
  }
  function zp(n) {
    var s = An(n, 1);
    s !== null && an(s, n, 1, -1);
  }
  function $p(n) {
    var s = gn();
    return (
      typeof n == "function" && (n = n()),
      (s.memoizedState = s.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ui,
        lastRenderedState: n,
      }),
      (s.queue = n),
      (n = n.dispatch = uS.bind(null, He, n)),
      [s.memoizedState, n]
    );
  }
  function zi(n, s, o, l) {
    return (
      (n = { tag: n, create: s, destroy: o, deps: l, next: null }),
      (s = He.updateQueue),
      s === null
        ? ((s = { lastEffect: null, stores: null }),
          (He.updateQueue = s),
          (s.lastEffect = n.next = n))
        : ((o = s.lastEffect),
          o === null
            ? (s.lastEffect = n.next = n)
            : ((l = o.next), (o.next = n), (n.next = l), (s.lastEffect = n))),
      n
    );
  }
  function Hp() {
    return Wt().memoizedState;
  }
  function Ca(n, s, o, l) {
    var d = gn();
    (He.flags |= n),
      (d.memoizedState = zi(1 | s, o, void 0, l === void 0 ? null : l));
  }
  function Pa(n, s, o, l) {
    var d = Wt();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (tt !== null) {
      var v = tt.memoizedState;
      if (((p = v.destroy), l !== null && Zu(l, v.deps))) {
        d.memoizedState = zi(s, o, p, l);
        return;
      }
    }
    (He.flags |= n), (d.memoizedState = zi(1 | s, o, p, l));
  }
  function Wp(n, s) {
    return Ca(8390656, 8, n, s);
  }
  function sc(n, s) {
    return Pa(2048, 8, n, s);
  }
  function qp(n, s) {
    return Pa(4, 2, n, s);
  }
  function Kp(n, s) {
    return Pa(4, 4, n, s);
  }
  function Qp(n, s) {
    if (typeof s == "function")
      return (
        (n = n()),
        s(n),
        function () {
          s(null);
        }
      );
    if (s != null)
      return (
        (n = n()),
        (s.current = n),
        function () {
          s.current = null;
        }
      );
  }
  function Gp(n, s, o) {
    return (
      (o = o != null ? o.concat([n]) : null), Pa(4, 4, Qp.bind(null, s, n), o)
    );
  }
  function ic() {}
  function Jp(n, s) {
    var o = Wt();
    s = s === void 0 ? null : s;
    var l = o.memoizedState;
    return l !== null && s !== null && Zu(s, l[1])
      ? l[0]
      : ((o.memoizedState = [n, s]), n);
  }
  function Yp(n, s) {
    var o = Wt();
    s = s === void 0 ? null : s;
    var l = o.memoizedState;
    return l !== null && s !== null && Zu(s, l[1])
      ? l[0]
      : ((n = n()), (o.memoizedState = [n, s]), n);
  }
  function Xp(n, s, o) {
    return (Ir & 21) === 0
      ? (n.baseState && ((n.baseState = !1), (Pt = !0)), (n.memoizedState = o))
      : (tn(o, s) ||
          ((o = _h()), (He.lanes |= o), (Fr |= o), (n.baseState = !0)),
        s);
  }
  function aS(n, s) {
    var o = Le;
    (Le = o !== 0 && 4 > o ? o : 4), n(!0);
    var l = Xu.transition;
    Xu.transition = {};
    try {
      n(!1), s();
    } finally {
      (Le = o), (Xu.transition = l);
    }
  }
  function Zp() {
    return Wt().memoizedState;
  }
  function lS(n, s, o) {
    var l = ir(n);
    if (
      ((o = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      em(n))
    )
      tm(s, o);
    else if (((o = Np(n, s, o, l)), o !== null)) {
      var d = kt();
      an(o, n, l, d), nm(o, s, l);
    }
  }
  function uS(n, s, o) {
    var l = ir(n),
      d = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (em(n)) tm(s, d);
    else {
      var p = n.alternate;
      if (
        n.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = s.lastRenderedReducer), p !== null)
      )
        try {
          var v = s.lastRenderedState,
            E = p(v, o);
          if (((d.hasEagerState = !0), (d.eagerState = E), tn(E, v))) {
            var C = s.interleaved;
            C === null
              ? ((d.next = d), qu(s))
              : ((d.next = C.next), (C.next = d)),
              (s.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (o = Np(n, s, d, l)),
        o !== null && ((d = kt()), an(o, n, l, d), nm(o, s, l));
    }
  }
  function em(n) {
    var s = n.alternate;
    return n === He || (s !== null && s === He);
  }
  function tm(n, s) {
    Vi = Ta = !0;
    var o = n.pending;
    o === null ? (s.next = s) : ((s.next = o.next), (o.next = s)),
      (n.pending = s);
  }
  function nm(n, s, o) {
    if ((o & 4194240) !== 0) {
      var l = s.lanes;
      (l &= n.pendingLanes), (o |= l), (s.lanes = o), au(n, o);
    }
  }
  var _a = {
      readContext: Ht,
      useCallback: mt,
      useContext: mt,
      useEffect: mt,
      useImperativeHandle: mt,
      useInsertionEffect: mt,
      useLayoutEffect: mt,
      useMemo: mt,
      useReducer: mt,
      useRef: mt,
      useState: mt,
      useDebugValue: mt,
      useDeferredValue: mt,
      useTransition: mt,
      useMutableSource: mt,
      useSyncExternalStore: mt,
      useId: mt,
      unstable_isNewReconciler: !1,
    },
    cS = {
      readContext: Ht,
      useCallback: function (n, s) {
        return (gn().memoizedState = [n, s === void 0 ? null : s]), n;
      },
      useContext: Ht,
      useEffect: Wp,
      useImperativeHandle: function (n, s, o) {
        return (
          (o = o != null ? o.concat([n]) : null),
          Ca(4194308, 4, Qp.bind(null, s, n), o)
        );
      },
      useLayoutEffect: function (n, s) {
        return Ca(4194308, 4, n, s);
      },
      useInsertionEffect: function (n, s) {
        return Ca(4, 2, n, s);
      },
      useMemo: function (n, s) {
        var o = gn();
        return (
          (s = s === void 0 ? null : s),
          (n = n()),
          (o.memoizedState = [n, s]),
          n
        );
      },
      useReducer: function (n, s, o) {
        var l = gn();
        return (
          (s = o !== void 0 ? o(s) : s),
          (l.memoizedState = l.baseState = s),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: s,
          }),
          (l.queue = n),
          (n = n.dispatch = lS.bind(null, He, n)),
          [l.memoizedState, n]
        );
      },
      useRef: function (n) {
        var s = gn();
        return (n = { current: n }), (s.memoizedState = n);
      },
      useState: $p,
      useDebugValue: ic,
      useDeferredValue: function (n) {
        return (gn().memoizedState = n);
      },
      useTransition: function () {
        var n = $p(!1),
          s = n[0];
        return (n = aS.bind(null, n[1])), (gn().memoizedState = n), [s, n];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, s, o) {
        var l = He,
          d = gn();
        if (ze) {
          if (o === void 0) throw Error(r(407));
          o = o();
        } else {
          if (((o = s()), it === null)) throw Error(r(349));
          (Ir & 30) !== 0 || Fp(l, s, o);
        }
        d.memoizedState = o;
        var p = { value: o, getSnapshot: s };
        return (
          (d.queue = p),
          Wp(Bp.bind(null, l, p, n), [n]),
          (l.flags |= 2048),
          zi(9, Vp.bind(null, l, p, o, s), void 0, null),
          o
        );
      },
      useId: function () {
        var n = gn(),
          s = it.identifierPrefix;
        if (ze) {
          var o = Rn,
            l = _n;
          (o = (l & ~(1 << (32 - en(l) - 1))).toString(32) + o),
            (s = ":" + s + "R" + o),
            (o = Bi++),
            0 < o && (s += "H" + o.toString(32)),
            (s += ":");
        } else (o = oS++), (s = ":" + s + "r" + o.toString(32) + ":");
        return (n.memoizedState = s);
      },
      unstable_isNewReconciler: !1,
    },
    dS = {
      readContext: Ht,
      useCallback: Jp,
      useContext: Ht,
      useEffect: sc,
      useImperativeHandle: Gp,
      useInsertionEffect: qp,
      useLayoutEffect: Kp,
      useMemo: Yp,
      useReducer: nc,
      useRef: Hp,
      useState: function () {
        return nc(Ui);
      },
      useDebugValue: ic,
      useDeferredValue: function (n) {
        var s = Wt();
        return Xp(s, tt.memoizedState, n);
      },
      useTransition: function () {
        var n = nc(Ui)[0],
          s = Wt().memoizedState;
        return [n, s];
      },
      useMutableSource: Dp,
      useSyncExternalStore: Ip,
      useId: Zp,
      unstable_isNewReconciler: !1,
    },
    fS = {
      readContext: Ht,
      useCallback: Jp,
      useContext: Ht,
      useEffect: sc,
      useImperativeHandle: Gp,
      useInsertionEffect: qp,
      useLayoutEffect: Kp,
      useMemo: Yp,
      useReducer: rc,
      useRef: Hp,
      useState: function () {
        return rc(Ui);
      },
      useDebugValue: ic,
      useDeferredValue: function (n) {
        var s = Wt();
        return tt === null ? (s.memoizedState = n) : Xp(s, tt.memoizedState, n);
      },
      useTransition: function () {
        var n = rc(Ui)[0],
          s = Wt().memoizedState;
        return [n, s];
      },
      useMutableSource: Dp,
      useSyncExternalStore: Ip,
      useId: Zp,
      unstable_isNewReconciler: !1,
    };
  function rn(n, s) {
    if (n && n.defaultProps) {
      (s = V({}, s)), (n = n.defaultProps);
      for (var o in n) s[o] === void 0 && (s[o] = n[o]);
      return s;
    }
    return s;
  }
  function oc(n, s, o, l) {
    (s = n.memoizedState),
      (o = o(l, s)),
      (o = o == null ? s : V({}, s, o)),
      (n.memoizedState = o),
      n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Ra = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Ar(n) === n : !1;
    },
    enqueueSetState: function (n, s, o) {
      n = n._reactInternals;
      var l = kt(),
        d = ir(n),
        p = Nn(l, d);
      (p.payload = s),
        o != null && (p.callback = o),
        (s = tr(n, p, d)),
        s !== null && (an(s, n, d, l), Sa(s, n, d));
    },
    enqueueReplaceState: function (n, s, o) {
      n = n._reactInternals;
      var l = kt(),
        d = ir(n),
        p = Nn(l, d);
      (p.tag = 1),
        (p.payload = s),
        o != null && (p.callback = o),
        (s = tr(n, p, d)),
        s !== null && (an(s, n, d, l), Sa(s, n, d));
    },
    enqueueForceUpdate: function (n, s) {
      n = n._reactInternals;
      var o = kt(),
        l = ir(n),
        d = Nn(o, l);
      (d.tag = 2),
        s != null && (d.callback = s),
        (s = tr(n, d, l)),
        s !== null && (an(s, n, l, o), Sa(s, n, l));
    },
  };
  function rm(n, s, o, l, d, p, v) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(l, p, v)
        : s.prototype && s.prototype.isPureReactComponent
        ? !_i(o, l) || !_i(d, p)
        : !0
    );
  }
  function sm(n, s, o) {
    var l = !1,
      d = Xn,
      p = s.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = Ht(p))
        : ((d = Ct(s) ? Or : pt.current),
          (l = s.contextTypes),
          (p = (l = l != null) ? Es(n, d) : Xn)),
      (s = new s(o, p)),
      (n.memoizedState =
        s.state !== null && s.state !== void 0 ? s.state : null),
      (s.updater = Ra),
      (n.stateNode = s),
      (s._reactInternals = n),
      l &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = d),
        (n.__reactInternalMemoizedMaskedChildContext = p)),
      s
    );
  }
  function im(n, s, o, l) {
    (n = s.state),
      typeof s.componentWillReceiveProps == "function" &&
        s.componentWillReceiveProps(o, l),
      typeof s.UNSAFE_componentWillReceiveProps == "function" &&
        s.UNSAFE_componentWillReceiveProps(o, l),
      s.state !== n && Ra.enqueueReplaceState(s, s.state, null);
  }
  function ac(n, s, o, l) {
    var d = n.stateNode;
    (d.props = o), (d.state = n.memoizedState), (d.refs = {}), Ku(n);
    var p = s.contextType;
    typeof p == "object" && p !== null
      ? (d.context = Ht(p))
      : ((p = Ct(s) ? Or : pt.current), (d.context = Es(n, p))),
      (d.state = n.memoizedState),
      (p = s.getDerivedStateFromProps),
      typeof p == "function" && (oc(n, s, p, o), (d.state = n.memoizedState)),
      typeof s.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" ||
        (typeof d.UNSAFE_componentWillMount != "function" &&
          typeof d.componentWillMount != "function") ||
        ((s = d.state),
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" &&
          d.UNSAFE_componentWillMount(),
        s !== d.state && Ra.enqueueReplaceState(d, d.state, null),
        ba(n, o, d, l),
        (d.state = n.memoizedState)),
      typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Os(n, s) {
    try {
      var o = "",
        l = s;
      do (o += le(l)), (l = l.return);
      while (l);
      var d = o;
    } catch (p) {
      d =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: n, source: s, stack: d, digest: null };
  }
  function lc(n, s, o) {
    return { value: n, source: null, stack: o ?? null, digest: s ?? null };
  }
  function uc(n, s) {
    try {
      console.error(s.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var hS = typeof WeakMap == "function" ? WeakMap : Map;
  function om(n, s, o) {
    (o = Nn(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var l = s.value;
    return (
      (o.callback = function () {
        Da || ((Da = !0), (Ec = l)), uc(n, s);
      }),
      o
    );
  }
  function am(n, s, o) {
    (o = Nn(-1, o)), (o.tag = 3);
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = s.value;
      (o.payload = function () {
        return l(d);
      }),
        (o.callback = function () {
          uc(n, s);
        });
    }
    var p = n.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (o.callback = function () {
          uc(n, s),
            typeof l != "function" &&
              (rr === null ? (rr = new Set([this])) : rr.add(this));
          var v = s.stack;
          this.componentDidCatch(s.value, {
            componentStack: v !== null ? v : "",
          });
        }),
      o
    );
  }
  function lm(n, s, o) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new hS();
      var d = new Set();
      l.set(s, d);
    } else (d = l.get(s)), d === void 0 && ((d = new Set()), l.set(s, d));
    d.has(o) || (d.add(o), (n = PS.bind(null, n, s, o)), s.then(n, n));
  }
  function um(n) {
    do {
      var s;
      if (
        ((s = n.tag === 13) &&
          ((s = n.memoizedState),
          (s = s !== null ? s.dehydrated !== null : !0)),
        s)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function cm(n, s, o, l, d) {
    return (n.mode & 1) === 0
      ? (n === s
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null
                ? (o.tag = 17)
                : ((s = Nn(-1, 1)), (s.tag = 2), tr(o, s, 1))),
            (o.lanes |= 1)),
        n)
      : ((n.flags |= 65536), (n.lanes = d), n);
  }
  var pS = M.ReactCurrentOwner,
    Pt = !1;
  function bt(n, s, o, l) {
    s.child = n === null ? Ap(s, null, o, l) : _s(s, n.child, o, l);
  }
  function dm(n, s, o, l, d) {
    o = o.render;
    var p = s.ref;
    return (
      As(s, d),
      (l = ec(n, s, o, l, p, d)),
      (o = tc()),
      n !== null && !Pt
        ? ((s.updateQueue = n.updateQueue),
          (s.flags &= -2053),
          (n.lanes &= ~d),
          On(n, s, d))
        : (ze && o && Iu(s), (s.flags |= 1), bt(n, s, l, d), s.child)
    );
  }
  function fm(n, s, o, l, d) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" &&
        !Nc(p) &&
        p.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((s.tag = 15), (s.type = p), hm(n, s, p, l, d))
        : ((n = za(o.type, null, l, s, s.mode, d)),
          (n.ref = s.ref),
          (n.return = s),
          (s.child = n));
    }
    if (((p = n.child), (n.lanes & d) === 0)) {
      var v = p.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : _i), o(v, l) && n.ref === s.ref)
      )
        return On(n, s, d);
    }
    return (
      (s.flags |= 1),
      (n = ar(p, l)),
      (n.ref = s.ref),
      (n.return = s),
      (s.child = n)
    );
  }
  function hm(n, s, o, l, d) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (_i(p, l) && n.ref === s.ref)
        if (((Pt = !1), (s.pendingProps = l = p), (n.lanes & d) !== 0))
          (n.flags & 131072) !== 0 && (Pt = !0);
        else return (s.lanes = n.lanes), On(n, s, d);
    }
    return cc(n, s, o, l, d);
  }
  function pm(n, s, o) {
    var l = s.pendingProps,
      d = l.children,
      p = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if ((s.mode & 1) === 0)
        (s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Fe(Ls, Vt),
          (Vt |= o);
      else {
        if ((o & 1073741824) === 0)
          return (
            (n = p !== null ? p.baseLanes | o : o),
            (s.lanes = s.childLanes = 1073741824),
            (s.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (s.updateQueue = null),
            Fe(Ls, Vt),
            (Vt |= n),
            null
          );
        (s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : o),
          Fe(Ls, Vt),
          (Vt |= l);
      }
    else
      p !== null ? ((l = p.baseLanes | o), (s.memoizedState = null)) : (l = o),
        Fe(Ls, Vt),
        (Vt |= l);
    return bt(n, s, d, o), s.child;
  }
  function mm(n, s) {
    var o = s.ref;
    ((n === null && o !== null) || (n !== null && n.ref !== o)) &&
      ((s.flags |= 512), (s.flags |= 2097152));
  }
  function cc(n, s, o, l, d) {
    var p = Ct(o) ? Or : pt.current;
    return (
      (p = Es(s, p)),
      As(s, d),
      (o = ec(n, s, o, l, p, d)),
      (l = tc()),
      n !== null && !Pt
        ? ((s.updateQueue = n.updateQueue),
          (s.flags &= -2053),
          (n.lanes &= ~d),
          On(n, s, d))
        : (ze && l && Iu(s), (s.flags |= 1), bt(n, s, o, d), s.child)
    );
  }
  function gm(n, s, o, l, d) {
    if (Ct(o)) {
      var p = !0;
      ha(s);
    } else p = !1;
    if ((As(s, d), s.stateNode === null))
      Na(n, s), sm(s, o, l), ac(s, o, l, d), (l = !0);
    else if (n === null) {
      var v = s.stateNode,
        E = s.memoizedProps;
      v.props = E;
      var C = v.context,
        j = o.contextType;
      typeof j == "object" && j !== null
        ? (j = Ht(j))
        : ((j = Ct(o) ? Or : pt.current), (j = Es(s, j)));
      var H = o.getDerivedStateFromProps,
        W =
          typeof H == "function" ||
          typeof v.getSnapshotBeforeUpdate == "function";
      W ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((E !== l || C !== j) && im(s, v, l, j)),
        (er = !1);
      var $ = s.memoizedState;
      (v.state = $),
        ba(s, l, v, d),
        (C = s.memoizedState),
        E !== l || $ !== C || Tt.current || er
          ? (typeof H == "function" && (oc(s, o, H, l), (C = s.memoizedState)),
            (E = er || rm(s, o, E, l, $, C, j))
              ? (W ||
                  (typeof v.UNSAFE_componentWillMount != "function" &&
                    typeof v.componentWillMount != "function") ||
                  (typeof v.componentWillMount == "function" &&
                    v.componentWillMount(),
                  typeof v.UNSAFE_componentWillMount == "function" &&
                    v.UNSAFE_componentWillMount()),
                typeof v.componentDidMount == "function" &&
                  (s.flags |= 4194308))
              : (typeof v.componentDidMount == "function" &&
                  (s.flags |= 4194308),
                (s.memoizedProps = l),
                (s.memoizedState = C)),
            (v.props = l),
            (v.state = C),
            (v.context = j),
            (l = E))
          : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            (l = !1));
    } else {
      (v = s.stateNode),
        Op(n, s),
        (E = s.memoizedProps),
        (j = s.type === s.elementType ? E : rn(s.type, E)),
        (v.props = j),
        (W = s.pendingProps),
        ($ = v.context),
        (C = o.contextType),
        typeof C == "object" && C !== null
          ? (C = Ht(C))
          : ((C = Ct(o) ? Or : pt.current), (C = Es(s, C)));
      var G = o.getDerivedStateFromProps;
      (H =
        typeof G == "function" ||
        typeof v.getSnapshotBeforeUpdate == "function") ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((E !== W || $ !== C) && im(s, v, l, C)),
        (er = !1),
        ($ = s.memoizedState),
        (v.state = $),
        ba(s, l, v, d);
      var ee = s.memoizedState;
      E !== W || $ !== ee || Tt.current || er
        ? (typeof G == "function" && (oc(s, o, G, l), (ee = s.memoizedState)),
          (j = er || rm(s, o, j, l, $, ee, C) || !1)
            ? (H ||
                (typeof v.UNSAFE_componentWillUpdate != "function" &&
                  typeof v.componentWillUpdate != "function") ||
                (typeof v.componentWillUpdate == "function" &&
                  v.componentWillUpdate(l, ee, C),
                typeof v.UNSAFE_componentWillUpdate == "function" &&
                  v.UNSAFE_componentWillUpdate(l, ee, C)),
              typeof v.componentDidUpdate == "function" && (s.flags |= 4),
              typeof v.getSnapshotBeforeUpdate == "function" &&
                (s.flags |= 1024))
            : (typeof v.componentDidUpdate != "function" ||
                (E === n.memoizedProps && $ === n.memoizedState) ||
                (s.flags |= 4),
              typeof v.getSnapshotBeforeUpdate != "function" ||
                (E === n.memoizedProps && $ === n.memoizedState) ||
                (s.flags |= 1024),
              (s.memoizedProps = l),
              (s.memoizedState = ee)),
          (v.props = l),
          (v.state = ee),
          (v.context = C),
          (l = j))
        : (typeof v.componentDidUpdate != "function" ||
            (E === n.memoizedProps && $ === n.memoizedState) ||
            (s.flags |= 4),
          typeof v.getSnapshotBeforeUpdate != "function" ||
            (E === n.memoizedProps && $ === n.memoizedState) ||
            (s.flags |= 1024),
          (l = !1));
    }
    return dc(n, s, o, l, p, d);
  }
  function dc(n, s, o, l, d, p) {
    mm(n, s);
    var v = (s.flags & 128) !== 0;
    if (!l && !v) return d && Sp(s, o, !1), On(n, s, p);
    (l = s.stateNode), (pS.current = s);
    var E =
      v && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (s.flags |= 1),
      n !== null && v
        ? ((s.child = _s(s, n.child, null, p)), (s.child = _s(s, null, E, p)))
        : bt(n, s, E, p),
      (s.memoizedState = l.state),
      d && Sp(s, o, !0),
      s.child
    );
  }
  function ym(n) {
    var s = n.stateNode;
    s.pendingContext
      ? wp(n, s.pendingContext, s.pendingContext !== s.context)
      : s.context && wp(n, s.context, !1),
      Qu(n, s.containerInfo);
  }
  function vm(n, s, o, l, d) {
    return Ps(), Uu(d), (s.flags |= 256), bt(n, s, o, l), s.child;
  }
  var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function wm(n, s, o) {
    var l = s.pendingProps,
      d = $e.current,
      p = !1,
      v = (s.flags & 128) !== 0,
      E;
    if (
      ((E = v) ||
        (E = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0),
      E
        ? ((p = !0), (s.flags &= -129))
        : (n === null || n.memoizedState !== null) && (d |= 1),
      Fe($e, d & 1),
      n === null)
    )
      return (
        Bu(s),
        (n = s.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? ((s.mode & 1) === 0
              ? (s.lanes = 1)
              : n.data === "$!"
              ? (s.lanes = 8)
              : (s.lanes = 1073741824),
            null)
          : ((v = l.children),
            (n = l.fallback),
            p
              ? ((l = s.mode),
                (p = s.child),
                (v = { mode: "hidden", children: v }),
                (l & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = v))
                  : (p = $a(v, l, 0, null)),
                (n = zr(n, l, o, null)),
                (p.return = s),
                (n.return = s),
                (p.sibling = n),
                (s.child = p),
                (s.child.memoizedState = hc(o)),
                (s.memoizedState = fc),
                n)
              : pc(s, v))
      );
    if (((d = n.memoizedState), d !== null && ((E = d.dehydrated), E !== null)))
      return mS(n, s, v, l, E, d, o);
    if (p) {
      (p = l.fallback), (v = s.mode), (d = n.child), (E = d.sibling);
      var C = { mode: "hidden", children: l.children };
      return (
        (v & 1) === 0 && s.child !== d
          ? ((l = s.child),
            (l.childLanes = 0),
            (l.pendingProps = C),
            (s.deletions = null))
          : ((l = ar(d, C)), (l.subtreeFlags = d.subtreeFlags & 14680064)),
        E !== null ? (p = ar(E, p)) : ((p = zr(p, v, o, null)), (p.flags |= 2)),
        (p.return = s),
        (l.return = s),
        (l.sibling = p),
        (s.child = l),
        (l = p),
        (p = s.child),
        (v = n.child.memoizedState),
        (v =
          v === null
            ? hc(o)
            : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions,
              }),
        (p.memoizedState = v),
        (p.childLanes = n.childLanes & ~o),
        (s.memoizedState = fc),
        l
      );
    }
    return (
      (p = n.child),
      (n = p.sibling),
      (l = ar(p, { mode: "visible", children: l.children })),
      (s.mode & 1) === 0 && (l.lanes = o),
      (l.return = s),
      (l.sibling = null),
      n !== null &&
        ((o = s.deletions),
        o === null ? ((s.deletions = [n]), (s.flags |= 16)) : o.push(n)),
      (s.child = l),
      (s.memoizedState = null),
      l
    );
  }
  function pc(n, s) {
    return (
      (s = $a({ mode: "visible", children: s }, n.mode, 0, null)),
      (s.return = n),
      (n.child = s)
    );
  }
  function Aa(n, s, o, l) {
    return (
      l !== null && Uu(l),
      _s(s, n.child, null, o),
      (n = pc(s, s.pendingProps.children)),
      (n.flags |= 2),
      (s.memoizedState = null),
      n
    );
  }
  function mS(n, s, o, l, d, p, v) {
    if (o)
      return s.flags & 256
        ? ((s.flags &= -257), (l = lc(Error(r(422)))), Aa(n, s, v, l))
        : s.memoizedState !== null
        ? ((s.child = n.child), (s.flags |= 128), null)
        : ((p = l.fallback),
          (d = s.mode),
          (l = $a({ mode: "visible", children: l.children }, d, 0, null)),
          (p = zr(p, d, v, null)),
          (p.flags |= 2),
          (l.return = s),
          (p.return = s),
          (l.sibling = p),
          (s.child = l),
          (s.mode & 1) !== 0 && _s(s, n.child, null, v),
          (s.child.memoizedState = hc(v)),
          (s.memoizedState = fc),
          p);
    if ((s.mode & 1) === 0) return Aa(n, s, v, null);
    if (d.data === "$!") {
      if (((l = d.nextSibling && d.nextSibling.dataset), l)) var E = l.dgst;
      return (
        (l = E), (p = Error(r(419))), (l = lc(p, l, void 0)), Aa(n, s, v, l)
      );
    }
    if (((E = (v & n.childLanes) !== 0), Pt || E)) {
      if (((l = it), l !== null)) {
        switch (v & -v) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = (d & (l.suspendedLanes | v)) !== 0 ? 0 : d),
          d !== 0 &&
            d !== p.retryLane &&
            ((p.retryLane = d), An(n, d), an(l, n, d, -1));
      }
      return Ac(), (l = lc(Error(r(421)))), Aa(n, s, v, l);
    }
    return d.data === "$?"
      ? ((s.flags |= 128),
        (s.child = n.child),
        (s = _S.bind(null, n)),
        (d._reactRetry = s),
        null)
      : ((n = p.treeContext),
        (Ft = Jn(d.nextSibling)),
        (It = s),
        (ze = !0),
        (nn = null),
        n !== null &&
          ((zt[$t++] = _n),
          (zt[$t++] = Rn),
          (zt[$t++] = jr),
          (_n = n.id),
          (Rn = n.overflow),
          (jr = s)),
        (s = pc(s, l.children)),
        (s.flags |= 4096),
        s);
  }
  function xm(n, s, o) {
    n.lanes |= s;
    var l = n.alternate;
    l !== null && (l.lanes |= s), Wu(n.return, s, o);
  }
  function mc(n, s, o, l, d) {
    var p = n.memoizedState;
    p === null
      ? (n.memoizedState = {
          isBackwards: s,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: d,
        })
      : ((p.isBackwards = s),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = o),
        (p.tailMode = d));
  }
  function Sm(n, s, o) {
    var l = s.pendingProps,
      d = l.revealOrder,
      p = l.tail;
    if ((bt(n, s, l.children, o), (l = $e.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (s.flags |= 128);
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = s.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && xm(n, o, s);
          else if (n.tag === 19) xm(n, o, s);
          else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === s) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === s) break e;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      l &= 1;
    }
    if ((Fe($e, l), (s.mode & 1) === 0)) s.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (o = s.child, d = null; o !== null; )
            (n = o.alternate),
              n !== null && ka(n) === null && (d = o),
              (o = o.sibling);
          (o = d),
            o === null
              ? ((d = s.child), (s.child = null))
              : ((d = o.sibling), (o.sibling = null)),
            mc(s, !1, d, o, p);
          break;
        case "backwards":
          for (o = null, d = s.child, s.child = null; d !== null; ) {
            if (((n = d.alternate), n !== null && ka(n) === null)) {
              s.child = d;
              break;
            }
            (n = d.sibling), (d.sibling = o), (o = d), (d = n);
          }
          mc(s, !0, o, null, p);
          break;
        case "together":
          mc(s, !1, null, null, void 0);
          break;
        default:
          s.memoizedState = null;
      }
    return s.child;
  }
  function Na(n, s) {
    (s.mode & 1) === 0 &&
      n !== null &&
      ((n.alternate = null), (s.alternate = null), (s.flags |= 2));
  }
  function On(n, s, o) {
    if (
      (n !== null && (s.dependencies = n.dependencies),
      (Fr |= s.lanes),
      (o & s.childLanes) === 0)
    )
      return null;
    if (n !== null && s.child !== n.child) throw Error(r(153));
    if (s.child !== null) {
      for (
        n = s.child, o = ar(n, n.pendingProps), s.child = o, o.return = s;
        n.sibling !== null;

      )
        (n = n.sibling),
          (o = o.sibling = ar(n, n.pendingProps)),
          (o.return = s);
      o.sibling = null;
    }
    return s.child;
  }
  function gS(n, s, o) {
    switch (s.tag) {
      case 3:
        ym(s), Ps();
        break;
      case 5:
        Mp(s);
        break;
      case 1:
        Ct(s.type) && ha(s);
        break;
      case 4:
        Qu(s, s.stateNode.containerInfo);
        break;
      case 10:
        var l = s.type._context,
          d = s.memoizedProps.value;
        Fe(wa, l._currentValue), (l._currentValue = d);
        break;
      case 13:
        if (((l = s.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Fe($e, $e.current & 1), (s.flags |= 128), null)
            : (o & s.child.childLanes) !== 0
            ? wm(n, s, o)
            : (Fe($e, $e.current & 1),
              (n = On(n, s, o)),
              n !== null ? n.sibling : null);
        Fe($e, $e.current & 1);
        break;
      case 19:
        if (((l = (o & s.childLanes) !== 0), (n.flags & 128) !== 0)) {
          if (l) return Sm(n, s, o);
          s.flags |= 128;
        }
        if (
          ((d = s.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Fe($e, $e.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (s.lanes = 0), pm(n, s, o);
    }
    return On(n, s, o);
  }
  var bm, gc, km, Em;
  (bm = function (n, s) {
    for (var o = s.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === s) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === s) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (gc = function () {}),
    (km = function (n, s, o, l) {
      var d = n.memoizedProps;
      if (d !== l) {
        (n = s.stateNode), Dr(mn.current);
        var p = null;
        switch (o) {
          case "input":
            (d = $n(n, d)), (l = $n(n, l)), (p = []);
            break;
          case "select":
            (d = V({}, d, { value: void 0 })),
              (l = V({}, l, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (d = Ql(n, d)), (l = Ql(n, l)), (p = []);
            break;
          default:
            typeof d.onClick != "function" &&
              typeof l.onClick == "function" &&
              (n.onclick = ca);
        }
        Jl(o, l);
        var v;
        o = null;
        for (j in d)
          if (!l.hasOwnProperty(j) && d.hasOwnProperty(j) && d[j] != null)
            if (j === "style") {
              var E = d[j];
              for (v in E) E.hasOwnProperty(v) && (o || (o = {}), (o[v] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (a.hasOwnProperty(j)
                  ? p || (p = [])
                  : (p = p || []).push(j, null));
        for (j in l) {
          var C = l[j];
          if (
            ((E = d != null ? d[j] : void 0),
            l.hasOwnProperty(j) && C !== E && (C != null || E != null))
          )
            if (j === "style")
              if (E) {
                for (v in E)
                  !E.hasOwnProperty(v) ||
                    (C && C.hasOwnProperty(v)) ||
                    (o || (o = {}), (o[v] = ""));
                for (v in C)
                  C.hasOwnProperty(v) &&
                    E[v] !== C[v] &&
                    (o || (o = {}), (o[v] = C[v]));
              } else o || (p || (p = []), p.push(j, o)), (o = C);
            else
              j === "dangerouslySetInnerHTML"
                ? ((C = C ? C.__html : void 0),
                  (E = E ? E.__html : void 0),
                  C != null && E !== C && (p = p || []).push(j, C))
                : j === "children"
                ? (typeof C != "string" && typeof C != "number") ||
                  (p = p || []).push(j, "" + C)
                : j !== "suppressContentEditableWarning" &&
                  j !== "suppressHydrationWarning" &&
                  (a.hasOwnProperty(j)
                    ? (C != null && j === "onScroll" && Ve("scroll", n),
                      p || E === C || (p = []))
                    : (p = p || []).push(j, C));
        }
        o && (p = p || []).push("style", o);
        var j = p;
        (s.updateQueue = j) && (s.flags |= 4);
      }
    }),
    (Em = function (n, s, o, l) {
      o !== l && (s.flags |= 4);
    });
  function $i(n, s) {
    if (!ze)
      switch (n.tailMode) {
        case "hidden":
          s = n.tail;
          for (var o = null; s !== null; )
            s.alternate !== null && (o = s), (s = s.sibling);
          o === null ? (n.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = n.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null
            ? s || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function gt(n) {
    var s = n.alternate !== null && n.alternate.child === n.child,
      o = 0,
      l = 0;
    if (s)
      for (var d = n.child; d !== null; )
        (o |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags & 14680064),
          (l |= d.flags & 14680064),
          (d.return = n),
          (d = d.sibling);
    else
      for (d = n.child; d !== null; )
        (o |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags),
          (l |= d.flags),
          (d.return = n),
          (d = d.sibling);
    return (n.subtreeFlags |= l), (n.childLanes = o), s;
  }
  function yS(n, s, o) {
    var l = s.pendingProps;
    switch ((Fu(s), s.tag)) {
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
        return gt(s), null;
      case 1:
        return Ct(s.type) && fa(), gt(s), null;
      case 3:
        return (
          (l = s.stateNode),
          Ns(),
          Be(Tt),
          Be(pt),
          Yu(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (n === null || n.child === null) &&
            (ya(s)
              ? (s.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && (s.flags & 256) === 0) ||
                ((s.flags |= 1024), nn !== null && (Pc(nn), (nn = null)))),
          gc(n, s),
          gt(s),
          null
        );
      case 5:
        Gu(s);
        var d = Dr(Fi.current);
        if (((o = s.type), n !== null && s.stateNode != null))
          km(n, s, o, l, d),
            n.ref !== s.ref && ((s.flags |= 512), (s.flags |= 2097152));
        else {
          if (!l) {
            if (s.stateNode === null) throw Error(r(166));
            return gt(s), null;
          }
          if (((n = Dr(mn.current)), ya(s))) {
            (l = s.stateNode), (o = s.type);
            var p = s.memoizedProps;
            switch (((l[pn] = s), (l[ji] = p), (n = (s.mode & 1) !== 0), o)) {
              case "dialog":
                Ve("cancel", l), Ve("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Ai.length; d++) Ve(Ai[d], l);
                break;
              case "source":
                Ve("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Ve("error", l), Ve("load", l);
                break;
              case "details":
                Ve("toggle", l);
                break;
              case "input":
                sh(l, p), Ve("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  Ve("invalid", l);
                break;
              case "textarea":
                ah(l, p), Ve("invalid", l);
            }
            Jl(o, p), (d = null);
            for (var v in p)
              if (p.hasOwnProperty(v)) {
                var E = p[v];
                v === "children"
                  ? typeof E == "string"
                    ? l.textContent !== E &&
                      (p.suppressHydrationWarning !== !0 &&
                        ua(l.textContent, E, n),
                      (d = ["children", E]))
                    : typeof E == "number" &&
                      l.textContent !== "" + E &&
                      (p.suppressHydrationWarning !== !0 &&
                        ua(l.textContent, E, n),
                      (d = ["children", "" + E]))
                  : a.hasOwnProperty(v) &&
                    E != null &&
                    v === "onScroll" &&
                    Ve("scroll", l);
              }
            switch (o) {
              case "input":
                Tn(l), oh(l, p, !0);
                break;
              case "textarea":
                Tn(l), uh(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (l.onclick = ca);
            }
            (l = d), (s.updateQueue = l), l !== null && (s.flags |= 4);
          } else {
            (v = d.nodeType === 9 ? d : d.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = ch(o)),
              n === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((n = v.createElement("div")),
                    (n.innerHTML = "<script></script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof l.is == "string"
                  ? (n = v.createElement(o, { is: l.is }))
                  : ((n = v.createElement(o)),
                    o === "select" &&
                      ((v = n),
                      l.multiple
                        ? (v.multiple = !0)
                        : l.size && (v.size = l.size)))
                : (n = v.createElementNS(n, o)),
              (n[pn] = s),
              (n[ji] = l),
              bm(n, s, !1, !1),
              (s.stateNode = n);
            e: {
              switch (((v = Yl(o, l)), o)) {
                case "dialog":
                  Ve("cancel", n), Ve("close", n), (d = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ve("load", n), (d = l);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Ai.length; d++) Ve(Ai[d], n);
                  d = l;
                  break;
                case "source":
                  Ve("error", n), (d = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Ve("error", n), Ve("load", n), (d = l);
                  break;
                case "details":
                  Ve("toggle", n), (d = l);
                  break;
                case "input":
                  sh(n, l), (d = $n(n, l)), Ve("invalid", n);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!l.multiple }),
                    (d = V({}, l, { value: void 0 })),
                    Ve("invalid", n);
                  break;
                case "textarea":
                  ah(n, l), (d = Ql(n, l)), Ve("invalid", n);
                  break;
                default:
                  d = l;
              }
              Jl(o, d), (E = d);
              for (p in E)
                if (E.hasOwnProperty(p)) {
                  var C = E[p];
                  p === "style"
                    ? hh(n, C)
                    : p === "dangerouslySetInnerHTML"
                    ? ((C = C ? C.__html : void 0), C != null && dh(n, C))
                    : p === "children"
                    ? typeof C == "string"
                      ? (o !== "textarea" || C !== "") && di(n, C)
                      : typeof C == "number" && di(n, "" + C)
                    : p !== "suppressContentEditableWarning" &&
                      p !== "suppressHydrationWarning" &&
                      p !== "autoFocus" &&
                      (a.hasOwnProperty(p)
                        ? C != null && p === "onScroll" && Ve("scroll", n)
                        : C != null && L(n, p, C, v));
                }
              switch (o) {
                case "input":
                  Tn(n), oh(n, l, !1);
                  break;
                case "textarea":
                  Tn(n), uh(n);
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + Re(l.value));
                  break;
                case "select":
                  (n.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? fs(n, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        fs(n, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = ca);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (s.flags |= 4);
          }
          s.ref !== null && ((s.flags |= 512), (s.flags |= 2097152));
        }
        return gt(s), null;
      case 6:
        if (n && s.stateNode != null) Em(n, s, n.memoizedProps, l);
        else {
          if (typeof l != "string" && s.stateNode === null) throw Error(r(166));
          if (((o = Dr(Fi.current)), Dr(mn.current), ya(s))) {
            if (
              ((l = s.stateNode),
              (o = s.memoizedProps),
              (l[pn] = s),
              (p = l.nodeValue !== o) && ((n = It), n !== null))
            )
              switch (n.tag) {
                case 3:
                  ua(l.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    ua(l.nodeValue, o, (n.mode & 1) !== 0);
              }
            p && (s.flags |= 4);
          } else
            (l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l)),
              (l[pn] = s),
              (s.stateNode = l);
        }
        return gt(s), null;
      case 13:
        if (
          (Be($e),
          (l = s.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (ze && Ft !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
            Pp(), Ps(), (s.flags |= 98560), (p = !1);
          else if (((p = ya(s)), l !== null && l.dehydrated !== null)) {
            if (n === null) {
              if (!p) throw Error(r(318));
              if (
                ((p = s.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(r(317));
              p[pn] = s;
            } else
              Ps(),
                (s.flags & 128) === 0 && (s.memoizedState = null),
                (s.flags |= 4);
            gt(s), (p = !1);
          } else nn !== null && (Pc(nn), (nn = null)), (p = !0);
          if (!p) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0
          ? ((s.lanes = o), s)
          : ((l = l !== null),
            l !== (n !== null && n.memoizedState !== null) &&
              l &&
              ((s.child.flags |= 8192),
              (s.mode & 1) !== 0 &&
                (n === null || ($e.current & 1) !== 0
                  ? nt === 0 && (nt = 3)
                  : Ac())),
            s.updateQueue !== null && (s.flags |= 4),
            gt(s),
            null);
      case 4:
        return (
          Ns(),
          gc(n, s),
          n === null && Ni(s.stateNode.containerInfo),
          gt(s),
          null
        );
      case 10:
        return Hu(s.type._context), gt(s), null;
      case 17:
        return Ct(s.type) && fa(), gt(s), null;
      case 19:
        if ((Be($e), (p = s.memoizedState), p === null)) return gt(s), null;
        if (((l = (s.flags & 128) !== 0), (v = p.rendering), v === null))
          if (l) $i(p, !1);
          else {
            if (nt !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = s.child; n !== null; ) {
                if (((v = ka(n)), v !== null)) {
                  for (
                    s.flags |= 128,
                      $i(p, !1),
                      l = v.updateQueue,
                      l !== null && ((s.updateQueue = l), (s.flags |= 4)),
                      s.subtreeFlags = 0,
                      l = o,
                      o = s.child;
                    o !== null;

                  )
                    (p = o),
                      (n = l),
                      (p.flags &= 14680066),
                      (v = p.alternate),
                      v === null
                        ? ((p.childLanes = 0),
                          (p.lanes = n),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = v.childLanes),
                          (p.lanes = v.lanes),
                          (p.child = v.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = v.memoizedProps),
                          (p.memoizedState = v.memoizedState),
                          (p.updateQueue = v.updateQueue),
                          (p.type = v.type),
                          (n = v.dependencies),
                          (p.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (o = o.sibling);
                  return Fe($e, ($e.current & 1) | 2), s.child;
                }
                n = n.sibling;
              }
            p.tail !== null &&
              Ge() > Ms &&
              ((s.flags |= 128), (l = !0), $i(p, !1), (s.lanes = 4194304));
          }
        else {
          if (!l)
            if (((n = ka(v)), n !== null)) {
              if (
                ((s.flags |= 128),
                (l = !0),
                (o = n.updateQueue),
                o !== null && ((s.updateQueue = o), (s.flags |= 4)),
                $i(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !v.alternate &&
                  !ze)
              )
                return gt(s), null;
            } else
              2 * Ge() - p.renderingStartTime > Ms &&
                o !== 1073741824 &&
                ((s.flags |= 128), (l = !0), $i(p, !1), (s.lanes = 4194304));
          p.isBackwards
            ? ((v.sibling = s.child), (s.child = v))
            : ((o = p.last),
              o !== null ? (o.sibling = v) : (s.child = v),
              (p.last = v));
        }
        return p.tail !== null
          ? ((s = p.tail),
            (p.rendering = s),
            (p.tail = s.sibling),
            (p.renderingStartTime = Ge()),
            (s.sibling = null),
            (o = $e.current),
            Fe($e, l ? (o & 1) | 2 : o & 1),
            s)
          : (gt(s), null);
      case 22:
      case 23:
        return (
          Rc(),
          (l = s.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== l && (s.flags |= 8192),
          l && (s.mode & 1) !== 0
            ? (Vt & 1073741824) !== 0 &&
              (gt(s), s.subtreeFlags & 6 && (s.flags |= 8192))
            : gt(s),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, s.tag));
  }
  function vS(n, s) {
    switch ((Fu(s), s.tag)) {
      case 1:
        return (
          Ct(s.type) && fa(),
          (n = s.flags),
          n & 65536 ? ((s.flags = (n & -65537) | 128), s) : null
        );
      case 3:
        return (
          Ns(),
          Be(Tt),
          Be(pt),
          Yu(),
          (n = s.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((s.flags = (n & -65537) | 128), s)
            : null
        );
      case 5:
        return Gu(s), null;
      case 13:
        if (
          (Be($e), (n = s.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (s.alternate === null) throw Error(r(340));
          Ps();
        }
        return (
          (n = s.flags), n & 65536 ? ((s.flags = (n & -65537) | 128), s) : null
        );
      case 19:
        return Be($e), null;
      case 4:
        return Ns(), null;
      case 10:
        return Hu(s.type._context), null;
      case 22:
      case 23:
        return Rc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Oa = !1,
    yt = !1,
    wS = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function js(n, s) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (l) {
          qe(n, s, l);
        }
      else o.current = null;
  }
  function yc(n, s, o) {
    try {
      o();
    } catch (l) {
      qe(n, s, l);
    }
  }
  var Tm = !1;
  function xS(n, s) {
    if (((Ru = Xo), (n = rp()), Su(n))) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = ((o = n.ownerDocument) && o.defaultView) || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var d = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var v = 0,
              E = -1,
              C = -1,
              j = 0,
              H = 0,
              W = n,
              $ = null;
            t: for (;;) {
              for (
                var G;
                W !== o || (d !== 0 && W.nodeType !== 3) || (E = v + d),
                  W !== p || (l !== 0 && W.nodeType !== 3) || (C = v + l),
                  W.nodeType === 3 && (v += W.nodeValue.length),
                  (G = W.firstChild) !== null;

              )
                ($ = W), (W = G);
              for (;;) {
                if (W === n) break t;
                if (
                  ($ === o && ++j === d && (E = v),
                  $ === p && ++H === l && (C = v),
                  (G = W.nextSibling) !== null)
                )
                  break;
                (W = $), ($ = W.parentNode);
              }
              W = G;
            }
            o = E === -1 || C === -1 ? null : { start: E, end: C };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      Au = { focusedElem: n, selectionRange: o }, Xo = !1, Z = s;
      Z !== null;

    )
      if (((s = Z), (n = s.child), (s.subtreeFlags & 1028) !== 0 && n !== null))
        (n.return = s), (Z = n);
      else
        for (; Z !== null; ) {
          s = Z;
          try {
            var ee = s.alternate;
            if ((s.flags & 1024) !== 0)
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var re = ee.memoizedProps,
                      Je = ee.memoizedState,
                      N = s.stateNode,
                      _ = N.getSnapshotBeforeUpdate(
                        s.elementType === s.type ? re : rn(s.type, re),
                        Je
                      );
                    N.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var O = s.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (K) {
            qe(s, s.return, K);
          }
          if (((n = s.sibling), n !== null)) {
            (n.return = s.return), (Z = n);
            break;
          }
          Z = s.return;
        }
    return (ee = Tm), (Tm = !1), ee;
  }
  function Hi(n, s, o) {
    var l = s.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var d = (l = l.next);
      do {
        if ((d.tag & n) === n) {
          var p = d.destroy;
          (d.destroy = void 0), p !== void 0 && yc(s, o, p);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function ja(n, s) {
    if (
      ((s = s.updateQueue), (s = s !== null ? s.lastEffect : null), s !== null)
    ) {
      var o = (s = s.next);
      do {
        if ((o.tag & n) === n) {
          var l = o.create;
          o.destroy = l();
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function vc(n) {
    var s = n.ref;
    if (s !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof s == "function" ? s(n) : (s.current = n);
    }
  }
  function Cm(n) {
    var s = n.alternate;
    s !== null && ((n.alternate = null), Cm(s)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((s = n.stateNode),
        s !== null &&
          (delete s[pn],
          delete s[ji],
          delete s[Lu],
          delete s[nS],
          delete s[rS])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null);
  }
  function Pm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function _m(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Pm(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function wc(n, s, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      (n = n.stateNode),
        s
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(n, s)
            : o.insertBefore(n, s)
          : (o.nodeType === 8
              ? ((s = o.parentNode), s.insertBefore(n, o))
              : ((s = o), s.appendChild(n)),
            (o = o._reactRootContainer),
            o != null || s.onclick !== null || (s.onclick = ca));
    else if (l !== 4 && ((n = n.child), n !== null))
      for (wc(n, s, o), n = n.sibling; n !== null; )
        wc(n, s, o), (n = n.sibling);
  }
  function xc(n, s, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      (n = n.stateNode), s ? o.insertBefore(n, s) : o.appendChild(n);
    else if (l !== 4 && ((n = n.child), n !== null))
      for (xc(n, s, o), n = n.sibling; n !== null; )
        xc(n, s, o), (n = n.sibling);
  }
  var lt = null,
    sn = !1;
  function nr(n, s, o) {
    for (o = o.child; o !== null; ) Rm(n, s, o), (o = o.sibling);
  }
  function Rm(n, s, o) {
    if (hn && typeof hn.onCommitFiberUnmount == "function")
      try {
        hn.onCommitFiberUnmount(qo, o);
      } catch {}
    switch (o.tag) {
      case 5:
        yt || js(o, s);
      case 6:
        var l = lt,
          d = sn;
        (lt = null),
          nr(n, s, o),
          (lt = l),
          (sn = d),
          lt !== null &&
            (sn
              ? ((n = lt),
                (o = o.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(o)
                  : n.removeChild(o))
              : lt.removeChild(o.stateNode));
        break;
      case 18:
        lt !== null &&
          (sn
            ? ((n = lt),
              (o = o.stateNode),
              n.nodeType === 8
                ? ju(n.parentNode, o)
                : n.nodeType === 1 && ju(n, o),
              bi(n))
            : ju(lt, o.stateNode));
        break;
      case 4:
        (l = lt),
          (d = sn),
          (lt = o.stateNode.containerInfo),
          (sn = !0),
          nr(n, s, o),
          (lt = l),
          (sn = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !yt &&
          ((l = o.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          d = l = l.next;
          do {
            var p = d,
              v = p.destroy;
            (p = p.tag),
              v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && yc(o, s, v),
              (d = d.next);
          } while (d !== l);
        }
        nr(n, s, o);
        break;
      case 1:
        if (
          !yt &&
          (js(o, s),
          (l = o.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = o.memoizedProps),
              (l.state = o.memoizedState),
              l.componentWillUnmount();
          } catch (E) {
            qe(o, s, E);
          }
        nr(n, s, o);
        break;
      case 21:
        nr(n, s, o);
        break;
      case 22:
        o.mode & 1
          ? ((yt = (l = yt) || o.memoizedState !== null), nr(n, s, o), (yt = l))
          : nr(n, s, o);
        break;
      default:
        nr(n, s, o);
    }
  }
  function Am(n) {
    var s = n.updateQueue;
    if (s !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new wS()),
        s.forEach(function (l) {
          var d = RS.bind(null, n, l);
          o.has(l) || (o.add(l), l.then(d, d));
        });
    }
  }
  function on(n, s) {
    var o = s.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var d = o[l];
        try {
          var p = n,
            v = s,
            E = v;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                (lt = E.stateNode), (sn = !1);
                break e;
              case 3:
                (lt = E.stateNode.containerInfo), (sn = !0);
                break e;
              case 4:
                (lt = E.stateNode.containerInfo), (sn = !0);
                break e;
            }
            E = E.return;
          }
          if (lt === null) throw Error(r(160));
          Rm(p, v, d), (lt = null), (sn = !1);
          var C = d.alternate;
          C !== null && (C.return = null), (d.return = null);
        } catch (j) {
          qe(d, s, j);
        }
      }
    if (s.subtreeFlags & 12854)
      for (s = s.child; s !== null; ) Nm(s, n), (s = s.sibling);
  }
  function Nm(n, s) {
    var o = n.alternate,
      l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((on(s, n), yn(n), l & 4)) {
          try {
            Hi(3, n, n.return), ja(3, n);
          } catch (re) {
            qe(n, n.return, re);
          }
          try {
            Hi(5, n, n.return);
          } catch (re) {
            qe(n, n.return, re);
          }
        }
        break;
      case 1:
        on(s, n), yn(n), l & 512 && o !== null && js(o, o.return);
        break;
      case 5:
        if (
          (on(s, n),
          yn(n),
          l & 512 && o !== null && js(o, o.return),
          n.flags & 32)
        ) {
          var d = n.stateNode;
          try {
            di(d, "");
          } catch (re) {
            qe(n, n.return, re);
          }
        }
        if (l & 4 && ((d = n.stateNode), d != null)) {
          var p = n.memoizedProps,
            v = o !== null ? o.memoizedProps : p,
            E = n.type,
            C = n.updateQueue;
          if (((n.updateQueue = null), C !== null))
            try {
              E === "input" && p.type === "radio" && p.name != null && ih(d, p),
                Yl(E, v);
              var j = Yl(E, p);
              for (v = 0; v < C.length; v += 2) {
                var H = C[v],
                  W = C[v + 1];
                H === "style"
                  ? hh(d, W)
                  : H === "dangerouslySetInnerHTML"
                  ? dh(d, W)
                  : H === "children"
                  ? di(d, W)
                  : L(d, H, W, j);
              }
              switch (E) {
                case "input":
                  ql(d, p);
                  break;
                case "textarea":
                  lh(d, p);
                  break;
                case "select":
                  var $ = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var G = p.value;
                  G != null
                    ? fs(d, !!p.multiple, G, !1)
                    : $ !== !!p.multiple &&
                      (p.defaultValue != null
                        ? fs(d, !!p.multiple, p.defaultValue, !0)
                        : fs(d, !!p.multiple, p.multiple ? [] : "", !1));
              }
              d[ji] = p;
            } catch (re) {
              qe(n, n.return, re);
            }
        }
        break;
      case 6:
        if ((on(s, n), yn(n), l & 4)) {
          if (n.stateNode === null) throw Error(r(162));
          (d = n.stateNode), (p = n.memoizedProps);
          try {
            d.nodeValue = p;
          } catch (re) {
            qe(n, n.return, re);
          }
        }
        break;
      case 3:
        if (
          (on(s, n), yn(n), l & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            bi(s.containerInfo);
          } catch (re) {
            qe(n, n.return, re);
          }
        break;
      case 4:
        on(s, n), yn(n);
        break;
      case 13:
        on(s, n),
          yn(n),
          (d = n.child),
          d.flags & 8192 &&
            ((p = d.memoizedState !== null),
            (d.stateNode.isHidden = p),
            !p ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (kc = Ge())),
          l & 4 && Am(n);
        break;
      case 22:
        if (
          ((H = o !== null && o.memoizedState !== null),
          n.mode & 1 ? ((yt = (j = yt) || H), on(s, n), (yt = j)) : on(s, n),
          yn(n),
          l & 8192)
        ) {
          if (
            ((j = n.memoizedState !== null),
            (n.stateNode.isHidden = j) && !H && (n.mode & 1) !== 0)
          )
            for (Z = n, H = n.child; H !== null; ) {
              for (W = Z = H; Z !== null; ) {
                switch ((($ = Z), (G = $.child), $.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Hi(4, $, $.return);
                    break;
                  case 1:
                    js($, $.return);
                    var ee = $.stateNode;
                    if (typeof ee.componentWillUnmount == "function") {
                      (l = $), (o = $.return);
                      try {
                        (s = l),
                          (ee.props = s.memoizedProps),
                          (ee.state = s.memoizedState),
                          ee.componentWillUnmount();
                      } catch (re) {
                        qe(l, o, re);
                      }
                    }
                    break;
                  case 5:
                    js($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      Lm(W);
                      continue;
                    }
                }
                G !== null ? ((G.return = $), (Z = G)) : Lm(W);
              }
              H = H.sibling;
            }
          e: for (H = null, W = n; ; ) {
            if (W.tag === 5) {
              if (H === null) {
                H = W;
                try {
                  (d = W.stateNode),
                    j
                      ? ((p = d.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((E = W.stateNode),
                        (C = W.memoizedProps.style),
                        (v =
                          C != null && C.hasOwnProperty("display")
                            ? C.display
                            : null),
                        (E.style.display = fh("display", v)));
                } catch (re) {
                  qe(n, n.return, re);
                }
              }
            } else if (W.tag === 6) {
              if (H === null)
                try {
                  W.stateNode.nodeValue = j ? "" : W.memoizedProps;
                } catch (re) {
                  qe(n, n.return, re);
                }
            } else if (
              ((W.tag !== 22 && W.tag !== 23) ||
                W.memoizedState === null ||
                W === n) &&
              W.child !== null
            ) {
              (W.child.return = W), (W = W.child);
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              H === W && (H = null), (W = W.return);
            }
            H === W && (H = null),
              (W.sibling.return = W.return),
              (W = W.sibling);
          }
        }
        break;
      case 19:
        on(s, n), yn(n), l & 4 && Am(n);
        break;
      case 21:
        break;
      default:
        on(s, n), yn(n);
    }
  }
  function yn(n) {
    var s = n.flags;
    if (s & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Pm(o)) {
              var l = o;
              break e;
            }
            o = o.return;
          }
          throw Error(r(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (di(d, ""), (l.flags &= -33));
            var p = _m(n);
            xc(n, p, d);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              E = _m(n);
            wc(n, E, v);
            break;
          default:
            throw Error(r(161));
        }
      } catch (C) {
        qe(n, n.return, C);
      }
      n.flags &= -3;
    }
    s & 4096 && (n.flags &= -4097);
  }
  function SS(n, s, o) {
    (Z = n), Om(n);
  }
  function Om(n, s, o) {
    for (var l = (n.mode & 1) !== 0; Z !== null; ) {
      var d = Z,
        p = d.child;
      if (d.tag === 22 && l) {
        var v = d.memoizedState !== null || Oa;
        if (!v) {
          var E = d.alternate,
            C = (E !== null && E.memoizedState !== null) || yt;
          E = Oa;
          var j = yt;
          if (((Oa = v), (yt = C) && !j))
            for (Z = d; Z !== null; )
              (v = Z),
                (C = v.child),
                v.tag === 22 && v.memoizedState !== null
                  ? Mm(d)
                  : C !== null
                  ? ((C.return = v), (Z = C))
                  : Mm(d);
          for (; p !== null; ) (Z = p), Om(p), (p = p.sibling);
          (Z = d), (Oa = E), (yt = j);
        }
        jm(n);
      } else
        (d.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = d), (Z = p))
          : jm(n);
    }
  }
  function jm(n) {
    for (; Z !== null; ) {
      var s = Z;
      if ((s.flags & 8772) !== 0) {
        var o = s.alternate;
        try {
          if ((s.flags & 8772) !== 0)
            switch (s.tag) {
              case 0:
              case 11:
              case 15:
                yt || ja(5, s);
                break;
              case 1:
                var l = s.stateNode;
                if (s.flags & 4 && !yt)
                  if (o === null) l.componentDidMount();
                  else {
                    var d =
                      s.elementType === s.type
                        ? o.memoizedProps
                        : rn(s.type, o.memoizedProps);
                    l.componentDidUpdate(
                      d,
                      o.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = s.updateQueue;
                p !== null && Lp(s, p, l);
                break;
              case 3:
                var v = s.updateQueue;
                if (v !== null) {
                  if (((o = null), s.child !== null))
                    switch (s.child.tag) {
                      case 5:
                        o = s.child.stateNode;
                        break;
                      case 1:
                        o = s.child.stateNode;
                    }
                  Lp(s, v, o);
                }
                break;
              case 5:
                var E = s.stateNode;
                if (o === null && s.flags & 4) {
                  o = E;
                  var C = s.memoizedProps;
                  switch (s.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && o.focus();
                      break;
                    case "img":
                      C.src && (o.src = C.src);
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
                if (s.memoizedState === null) {
                  var j = s.alternate;
                  if (j !== null) {
                    var H = j.memoizedState;
                    if (H !== null) {
                      var W = H.dehydrated;
                      W !== null && bi(W);
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
                throw Error(r(163));
            }
          yt || (s.flags & 512 && vc(s));
        } catch ($) {
          qe(s, s.return, $);
        }
      }
      if (s === n) {
        Z = null;
        break;
      }
      if (((o = s.sibling), o !== null)) {
        (o.return = s.return), (Z = o);
        break;
      }
      Z = s.return;
    }
  }
  function Lm(n) {
    for (; Z !== null; ) {
      var s = Z;
      if (s === n) {
        Z = null;
        break;
      }
      var o = s.sibling;
      if (o !== null) {
        (o.return = s.return), (Z = o);
        break;
      }
      Z = s.return;
    }
  }
  function Mm(n) {
    for (; Z !== null; ) {
      var s = Z;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var o = s.return;
            try {
              ja(4, s);
            } catch (C) {
              qe(s, o, C);
            }
            break;
          case 1:
            var l = s.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = s.return;
              try {
                l.componentDidMount();
              } catch (C) {
                qe(s, d, C);
              }
            }
            var p = s.return;
            try {
              vc(s);
            } catch (C) {
              qe(s, p, C);
            }
            break;
          case 5:
            var v = s.return;
            try {
              vc(s);
            } catch (C) {
              qe(s, v, C);
            }
        }
      } catch (C) {
        qe(s, s.return, C);
      }
      if (s === n) {
        Z = null;
        break;
      }
      var E = s.sibling;
      if (E !== null) {
        (E.return = s.return), (Z = E);
        break;
      }
      Z = s.return;
    }
  }
  var bS = Math.ceil,
    La = M.ReactCurrentDispatcher,
    Sc = M.ReactCurrentOwner,
    qt = M.ReactCurrentBatchConfig,
    _e = 0,
    it = null,
    Ze = null,
    ut = 0,
    Vt = 0,
    Ls = Yn(0),
    nt = 0,
    Wi = null,
    Fr = 0,
    Ma = 0,
    bc = 0,
    qi = null,
    _t = null,
    kc = 0,
    Ms = 1 / 0,
    jn = null,
    Da = !1,
    Ec = null,
    rr = null,
    Ia = !1,
    sr = null,
    Fa = 0,
    Ki = 0,
    Tc = null,
    Va = -1,
    Ba = 0;
  function kt() {
    return (_e & 6) !== 0 ? Ge() : Va !== -1 ? Va : (Va = Ge());
  }
  function ir(n) {
    return (n.mode & 1) === 0
      ? 1
      : (_e & 2) !== 0 && ut !== 0
      ? ut & -ut
      : iS.transition !== null
      ? (Ba === 0 && (Ba = _h()), Ba)
      : ((n = Le),
        n !== 0 || ((n = window.event), (n = n === void 0 ? 16 : Ih(n.type))),
        n);
  }
  function an(n, s, o, l) {
    if (50 < Ki) throw ((Ki = 0), (Tc = null), Error(r(185)));
    yi(n, o, l),
      ((_e & 2) === 0 || n !== it) &&
        (n === it && ((_e & 2) === 0 && (Ma |= o), nt === 4 && or(n, ut)),
        Rt(n, l),
        o === 1 &&
          _e === 0 &&
          (s.mode & 1) === 0 &&
          ((Ms = Ge() + 500), pa && Zn()));
  }
  function Rt(n, s) {
    var o = n.callbackNode;
    i1(n, s);
    var l = Go(n, n === it ? ut : 0);
    if (l === 0)
      o !== null && Th(o), (n.callbackNode = null), (n.callbackPriority = 0);
    else if (((s = l & -l), n.callbackPriority !== s)) {
      if ((o != null && Th(o), s === 1))
        n.tag === 0 ? sS(Im.bind(null, n)) : bp(Im.bind(null, n)),
          eS(function () {
            (_e & 6) === 0 && Zn();
          }),
          (o = null);
      else {
        switch (Rh(l)) {
          case 1:
            o = su;
            break;
          case 4:
            o = Ch;
            break;
          case 16:
            o = Wo;
            break;
          case 536870912:
            o = Ph;
            break;
          default:
            o = Wo;
        }
        o = Wm(o, Dm.bind(null, n));
      }
      (n.callbackPriority = s), (n.callbackNode = o);
    }
  }
  function Dm(n, s) {
    if (((Va = -1), (Ba = 0), (_e & 6) !== 0)) throw Error(r(327));
    var o = n.callbackNode;
    if (Ds() && n.callbackNode !== o) return null;
    var l = Go(n, n === it ? ut : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || s) s = Ua(n, l);
    else {
      s = l;
      var d = _e;
      _e |= 2;
      var p = Vm();
      (it !== n || ut !== s) && ((jn = null), (Ms = Ge() + 500), Br(n, s));
      do
        try {
          TS();
          break;
        } catch (E) {
          Fm(n, E);
        }
      while (!0);
      $u(),
        (La.current = p),
        (_e = d),
        Ze !== null ? (s = 0) : ((it = null), (ut = 0), (s = nt));
    }
    if (s !== 0) {
      if (
        (s === 2 && ((d = iu(n)), d !== 0 && ((l = d), (s = Cc(n, d)))),
        s === 1)
      )
        throw ((o = Wi), Br(n, 0), or(n, l), Rt(n, Ge()), o);
      if (s === 6) or(n, l);
      else {
        if (
          ((d = n.current.alternate),
          (l & 30) === 0 &&
            !kS(d) &&
            ((s = Ua(n, l)),
            s === 2 && ((p = iu(n)), p !== 0 && ((l = p), (s = Cc(n, p)))),
            s === 1))
        )
          throw ((o = Wi), Br(n, 0), or(n, l), Rt(n, Ge()), o);
        switch (((n.finishedWork = d), (n.finishedLanes = l), s)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Ur(n, _t, jn);
            break;
          case 3:
            if (
              (or(n, l),
              (l & 130023424) === l && ((s = kc + 500 - Ge()), 10 < s))
            ) {
              if (Go(n, 0) !== 0) break;
              if (((d = n.suspendedLanes), (d & l) !== l)) {
                kt(), (n.pingedLanes |= n.suspendedLanes & d);
                break;
              }
              n.timeoutHandle = Ou(Ur.bind(null, n, _t, jn), s);
              break;
            }
            Ur(n, _t, jn);
            break;
          case 4:
            if ((or(n, l), (l & 4194240) === l)) break;
            for (s = n.eventTimes, d = -1; 0 < l; ) {
              var v = 31 - en(l);
              (p = 1 << v), (v = s[v]), v > d && (d = v), (l &= ~p);
            }
            if (
              ((l = d),
              (l = Ge() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * bS(l / 1960)) - l),
              10 < l)
            ) {
              n.timeoutHandle = Ou(Ur.bind(null, n, _t, jn), l);
              break;
            }
            Ur(n, _t, jn);
            break;
          case 5:
            Ur(n, _t, jn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Rt(n, Ge()), n.callbackNode === o ? Dm.bind(null, n) : null;
  }
  function Cc(n, s) {
    var o = qi;
    return (
      n.current.memoizedState.isDehydrated && (Br(n, s).flags |= 256),
      (n = Ua(n, s)),
      n !== 2 && ((s = _t), (_t = o), s !== null && Pc(s)),
      n
    );
  }
  function Pc(n) {
    _t === null ? (_t = n) : _t.push.apply(_t, n);
  }
  function kS(n) {
    for (var s = n; ; ) {
      if (s.flags & 16384) {
        var o = s.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var l = 0; l < o.length; l++) {
            var d = o[l],
              p = d.getSnapshot;
            d = d.value;
            try {
              if (!tn(p(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = s.child), s.subtreeFlags & 16384 && o !== null))
        (o.return = s), (s = o);
      else {
        if (s === n) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === n) return !0;
          s = s.return;
        }
        (s.sibling.return = s.return), (s = s.sibling);
      }
    }
    return !0;
  }
  function or(n, s) {
    for (
      s &= ~bc,
        s &= ~Ma,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes;
      0 < s;

    ) {
      var o = 31 - en(s),
        l = 1 << o;
      (n[o] = -1), (s &= ~l);
    }
  }
  function Im(n) {
    if ((_e & 6) !== 0) throw Error(r(327));
    Ds();
    var s = Go(n, 0);
    if ((s & 1) === 0) return Rt(n, Ge()), null;
    var o = Ua(n, s);
    if (n.tag !== 0 && o === 2) {
      var l = iu(n);
      l !== 0 && ((s = l), (o = Cc(n, l)));
    }
    if (o === 1) throw ((o = Wi), Br(n, 0), or(n, s), Rt(n, Ge()), o);
    if (o === 6) throw Error(r(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = s),
      Ur(n, _t, jn),
      Rt(n, Ge()),
      null
    );
  }
  function _c(n, s) {
    var o = _e;
    _e |= 1;
    try {
      return n(s);
    } finally {
      (_e = o), _e === 0 && ((Ms = Ge() + 500), pa && Zn());
    }
  }
  function Vr(n) {
    sr !== null && sr.tag === 0 && (_e & 6) === 0 && Ds();
    var s = _e;
    _e |= 1;
    var o = qt.transition,
      l = Le;
    try {
      if (((qt.transition = null), (Le = 1), n)) return n();
    } finally {
      (Le = l), (qt.transition = o), (_e = s), (_e & 6) === 0 && Zn();
    }
  }
  function Rc() {
    (Vt = Ls.current), Be(Ls);
  }
  function Br(n, s) {
    (n.finishedWork = null), (n.finishedLanes = 0);
    var o = n.timeoutHandle;
    if ((o !== -1 && ((n.timeoutHandle = -1), Z1(o)), Ze !== null))
      for (o = Ze.return; o !== null; ) {
        var l = o;
        switch ((Fu(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && fa();
            break;
          case 3:
            Ns(), Be(Tt), Be(pt), Yu();
            break;
          case 5:
            Gu(l);
            break;
          case 4:
            Ns();
            break;
          case 13:
            Be($e);
            break;
          case 19:
            Be($e);
            break;
          case 10:
            Hu(l.type._context);
            break;
          case 22:
          case 23:
            Rc();
        }
        o = o.return;
      }
    if (
      ((it = n),
      (Ze = n = ar(n.current, null)),
      (ut = Vt = s),
      (nt = 0),
      (Wi = null),
      (bc = Ma = Fr = 0),
      (_t = qi = null),
      Mr !== null)
    ) {
      for (s = 0; s < Mr.length; s++)
        if (((o = Mr[s]), (l = o.interleaved), l !== null)) {
          o.interleaved = null;
          var d = l.next,
            p = o.pending;
          if (p !== null) {
            var v = p.next;
            (p.next = d), (l.next = v);
          }
          o.pending = l;
        }
      Mr = null;
    }
    return n;
  }
  function Fm(n, s) {
    do {
      var o = Ze;
      try {
        if (($u(), (Ea.current = _a), Ta)) {
          for (var l = He.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), (l = l.next);
          }
          Ta = !1;
        }
        if (
          ((Ir = 0),
          (st = tt = He = null),
          (Vi = !1),
          (Bi = 0),
          (Sc.current = null),
          o === null || o.return === null)
        ) {
          (nt = 1), (Wi = s), (Ze = null);
          break;
        }
        e: {
          var p = n,
            v = o.return,
            E = o,
            C = s;
          if (
            ((s = ut),
            (E.flags |= 32768),
            C !== null && typeof C == "object" && typeof C.then == "function")
          ) {
            var j = C,
              H = E,
              W = H.tag;
            if ((H.mode & 1) === 0 && (W === 0 || W === 11 || W === 15)) {
              var $ = H.alternate;
              $
                ? ((H.updateQueue = $.updateQueue),
                  (H.memoizedState = $.memoizedState),
                  (H.lanes = $.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var G = um(v);
            if (G !== null) {
              (G.flags &= -257),
                cm(G, v, E, p, s),
                G.mode & 1 && lm(p, j, s),
                (s = G),
                (C = j);
              var ee = s.updateQueue;
              if (ee === null) {
                var re = new Set();
                re.add(C), (s.updateQueue = re);
              } else ee.add(C);
              break e;
            } else {
              if ((s & 1) === 0) {
                lm(p, j, s), Ac();
                break e;
              }
              C = Error(r(426));
            }
          } else if (ze && E.mode & 1) {
            var Je = um(v);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256),
                cm(Je, v, E, p, s),
                Uu(Os(C, E));
              break e;
            }
          }
          (p = C = Os(C, E)),
            nt !== 4 && (nt = 2),
            qi === null ? (qi = [p]) : qi.push(p),
            (p = v);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (s &= -s), (p.lanes |= s);
                var N = om(p, C, s);
                jp(p, N);
                break e;
              case 1:
                E = C;
                var _ = p.type,
                  O = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (rr === null || !rr.has(O))))
                ) {
                  (p.flags |= 65536), (s &= -s), (p.lanes |= s);
                  var K = am(p, E, s);
                  jp(p, K);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Um(o);
      } catch (ie) {
        (s = ie), Ze === o && o !== null && (Ze = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vm() {
    var n = La.current;
    return (La.current = _a), n === null ? _a : n;
  }
  function Ac() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
      it === null ||
        ((Fr & 268435455) === 0 && (Ma & 268435455) === 0) ||
        or(it, ut);
  }
  function Ua(n, s) {
    var o = _e;
    _e |= 2;
    var l = Vm();
    (it !== n || ut !== s) && ((jn = null), Br(n, s));
    do
      try {
        ES();
        break;
      } catch (d) {
        Fm(n, d);
      }
    while (!0);
    if (($u(), (_e = o), (La.current = l), Ze !== null)) throw Error(r(261));
    return (it = null), (ut = 0), nt;
  }
  function ES() {
    for (; Ze !== null; ) Bm(Ze);
  }
  function TS() {
    for (; Ze !== null && !Jx(); ) Bm(Ze);
  }
  function Bm(n) {
    var s = Hm(n.alternate, n, Vt);
    (n.memoizedProps = n.pendingProps),
      s === null ? Um(n) : (Ze = s),
      (Sc.current = null);
  }
  function Um(n) {
    var s = n;
    do {
      var o = s.alternate;
      if (((n = s.return), (s.flags & 32768) === 0)) {
        if (((o = yS(o, s, Vt)), o !== null)) {
          Ze = o;
          return;
        }
      } else {
        if (((o = vS(o, s)), o !== null)) {
          (o.flags &= 32767), (Ze = o);
          return;
        }
        if (n !== null)
          (n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null);
        else {
          (nt = 6), (Ze = null);
          return;
        }
      }
      if (((s = s.sibling), s !== null)) {
        Ze = s;
        return;
      }
      Ze = s = n;
    } while (s !== null);
    nt === 0 && (nt = 5);
  }
  function Ur(n, s, o) {
    var l = Le,
      d = qt.transition;
    try {
      (qt.transition = null), (Le = 1), CS(n, s, o, l);
    } finally {
      (qt.transition = d), (Le = l);
    }
    return null;
  }
  function CS(n, s, o, l) {
    do Ds();
    while (sr !== null);
    if ((_e & 6) !== 0) throw Error(r(327));
    o = n.finishedWork;
    var d = n.finishedLanes;
    if (o === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), o === n.current))
      throw Error(r(177));
    (n.callbackNode = null), (n.callbackPriority = 0);
    var p = o.lanes | o.childLanes;
    if (
      (o1(n, p),
      n === it && ((Ze = it = null), (ut = 0)),
      ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
        Ia ||
        ((Ia = !0),
        Wm(Wo, function () {
          return Ds(), null;
        })),
      (p = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || p)
    ) {
      (p = qt.transition), (qt.transition = null);
      var v = Le;
      Le = 1;
      var E = _e;
      (_e |= 4),
        (Sc.current = null),
        xS(n, o),
        Nm(o, n),
        q1(Au),
        (Xo = !!Ru),
        (Au = Ru = null),
        (n.current = o),
        SS(o),
        Yx(),
        (_e = E),
        (Le = v),
        (qt.transition = p);
    } else n.current = o;
    if (
      (Ia && ((Ia = !1), (sr = n), (Fa = d)),
      (p = n.pendingLanes),
      p === 0 && (rr = null),
      e1(o.stateNode),
      Rt(n, Ge()),
      s !== null)
    )
      for (l = n.onRecoverableError, o = 0; o < s.length; o++)
        (d = s[o]), l(d.value, { componentStack: d.stack, digest: d.digest });
    if (Da) throw ((Da = !1), (n = Ec), (Ec = null), n);
    return (
      (Fa & 1) !== 0 && n.tag !== 0 && Ds(),
      (p = n.pendingLanes),
      (p & 1) !== 0 ? (n === Tc ? Ki++ : ((Ki = 0), (Tc = n))) : (Ki = 0),
      Zn(),
      null
    );
  }
  function Ds() {
    if (sr !== null) {
      var n = Rh(Fa),
        s = qt.transition,
        o = Le;
      try {
        if (((qt.transition = null), (Le = 16 > n ? 16 : n), sr === null))
          var l = !1;
        else {
          if (((n = sr), (sr = null), (Fa = 0), (_e & 6) !== 0))
            throw Error(r(331));
          var d = _e;
          for (_e |= 4, Z = n.current; Z !== null; ) {
            var p = Z,
              v = p.child;
            if ((Z.flags & 16) !== 0) {
              var E = p.deletions;
              if (E !== null) {
                for (var C = 0; C < E.length; C++) {
                  var j = E[C];
                  for (Z = j; Z !== null; ) {
                    var H = Z;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hi(8, H, p);
                    }
                    var W = H.child;
                    if (W !== null) (W.return = H), (Z = W);
                    else
                      for (; Z !== null; ) {
                        H = Z;
                        var $ = H.sibling,
                          G = H.return;
                        if ((Cm(H), H === j)) {
                          Z = null;
                          break;
                        }
                        if ($ !== null) {
                          ($.return = G), (Z = $);
                          break;
                        }
                        Z = G;
                      }
                  }
                }
                var ee = p.alternate;
                if (ee !== null) {
                  var re = ee.child;
                  if (re !== null) {
                    ee.child = null;
                    do {
                      var Je = re.sibling;
                      (re.sibling = null), (re = Je);
                    } while (re !== null);
                  }
                }
                Z = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && v !== null)
              (v.return = p), (Z = v);
            else
              e: for (; Z !== null; ) {
                if (((p = Z), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(9, p, p.return);
                  }
                var N = p.sibling;
                if (N !== null) {
                  (N.return = p.return), (Z = N);
                  break e;
                }
                Z = p.return;
              }
          }
          var _ = n.current;
          for (Z = _; Z !== null; ) {
            v = Z;
            var O = v.child;
            if ((v.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = v), (Z = O);
            else
              e: for (v = _; Z !== null; ) {
                if (((E = Z), (E.flags & 2048) !== 0))
                  try {
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ja(9, E);
                    }
                  } catch (ie) {
                    qe(E, E.return, ie);
                  }
                if (E === v) {
                  Z = null;
                  break e;
                }
                var K = E.sibling;
                if (K !== null) {
                  (K.return = E.return), (Z = K);
                  break e;
                }
                Z = E.return;
              }
          }
          if (
            ((_e = d),
            Zn(),
            hn && typeof hn.onPostCommitFiberRoot == "function")
          )
            try {
              hn.onPostCommitFiberRoot(qo, n);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Le = o), (qt.transition = s);
      }
    }
    return !1;
  }
  function zm(n, s, o) {
    (s = Os(o, s)),
      (s = om(n, s, 1)),
      (n = tr(n, s, 1)),
      (s = kt()),
      n !== null && (yi(n, 1, s), Rt(n, s));
  }
  function qe(n, s, o) {
    if (n.tag === 3) zm(n, n, o);
    else
      for (; s !== null; ) {
        if (s.tag === 3) {
          zm(s, n, o);
          break;
        } else if (s.tag === 1) {
          var l = s.stateNode;
          if (
            typeof s.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (rr === null || !rr.has(l)))
          ) {
            (n = Os(o, n)),
              (n = am(s, n, 1)),
              (s = tr(s, n, 1)),
              (n = kt()),
              s !== null && (yi(s, 1, n), Rt(s, n));
            break;
          }
        }
        s = s.return;
      }
  }
  function PS(n, s, o) {
    var l = n.pingCache;
    l !== null && l.delete(s),
      (s = kt()),
      (n.pingedLanes |= n.suspendedLanes & o),
      it === n &&
        (ut & o) === o &&
        (nt === 4 || (nt === 3 && (ut & 130023424) === ut && 500 > Ge() - kc)
          ? Br(n, 0)
          : (bc |= o)),
      Rt(n, s);
  }
  function $m(n, s) {
    s === 0 &&
      ((n.mode & 1) === 0
        ? (s = 1)
        : ((s = Qo), (Qo <<= 1), (Qo & 130023424) === 0 && (Qo = 4194304)));
    var o = kt();
    (n = An(n, s)), n !== null && (yi(n, s, o), Rt(n, o));
  }
  function _S(n) {
    var s = n.memoizedState,
      o = 0;
    s !== null && (o = s.retryLane), $m(n, o);
  }
  function RS(n, s) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode,
          d = n.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(s), $m(n, o);
  }
  var Hm;
  Hm = function (n, s, o) {
    if (n !== null)
      if (n.memoizedProps !== s.pendingProps || Tt.current) Pt = !0;
      else {
        if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
          return (Pt = !1), gS(n, s, o);
        Pt = (n.flags & 131072) !== 0;
      }
    else (Pt = !1), ze && (s.flags & 1048576) !== 0 && kp(s, ga, s.index);
    switch (((s.lanes = 0), s.tag)) {
      case 2:
        var l = s.type;
        Na(n, s), (n = s.pendingProps);
        var d = Es(s, pt.current);
        As(s, o), (d = ec(null, s, l, n, d, o));
        var p = tc();
        return (
          (s.flags |= 1),
          typeof d == "object" &&
          d !== null &&
          typeof d.render == "function" &&
          d.$$typeof === void 0
            ? ((s.tag = 1),
              (s.memoizedState = null),
              (s.updateQueue = null),
              Ct(l) ? ((p = !0), ha(s)) : (p = !1),
              (s.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Ku(s),
              (d.updater = Ra),
              (s.stateNode = d),
              (d._reactInternals = s),
              ac(s, l, n, o),
              (s = dc(null, s, l, !0, p, o)))
            : ((s.tag = 0), ze && p && Iu(s), bt(null, s, d, o), (s = s.child)),
          s
        );
      case 16:
        l = s.elementType;
        e: {
          switch (
            (Na(n, s),
            (n = s.pendingProps),
            (d = l._init),
            (l = d(l._payload)),
            (s.type = l),
            (d = s.tag = NS(l)),
            (n = rn(l, n)),
            d)
          ) {
            case 0:
              s = cc(null, s, l, n, o);
              break e;
            case 1:
              s = gm(null, s, l, n, o);
              break e;
            case 11:
              s = dm(null, s, l, n, o);
              break e;
            case 14:
              s = fm(null, s, l, rn(l.type, n), o);
              break e;
          }
          throw Error(r(306, l, ""));
        }
        return s;
      case 0:
        return (
          (l = s.type),
          (d = s.pendingProps),
          (d = s.elementType === l ? d : rn(l, d)),
          cc(n, s, l, d, o)
        );
      case 1:
        return (
          (l = s.type),
          (d = s.pendingProps),
          (d = s.elementType === l ? d : rn(l, d)),
          gm(n, s, l, d, o)
        );
      case 3:
        e: {
          if ((ym(s), n === null)) throw Error(r(387));
          (l = s.pendingProps),
            (p = s.memoizedState),
            (d = p.element),
            Op(n, s),
            ba(s, l, null, o);
          var v = s.memoizedState;
          if (((l = v.element), p.isDehydrated))
            if (
              ((p = {
                element: l,
                isDehydrated: !1,
                cache: v.cache,
                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                transitions: v.transitions,
              }),
              (s.updateQueue.baseState = p),
              (s.memoizedState = p),
              s.flags & 256)
            ) {
              (d = Os(Error(r(423)), s)), (s = vm(n, s, l, o, d));
              break e;
            } else if (l !== d) {
              (d = Os(Error(r(424)), s)), (s = vm(n, s, l, o, d));
              break e;
            } else
              for (
                Ft = Jn(s.stateNode.containerInfo.firstChild),
                  It = s,
                  ze = !0,
                  nn = null,
                  o = Ap(s, null, l, o),
                  s.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
          else {
            if ((Ps(), l === d)) {
              s = On(n, s, o);
              break e;
            }
            bt(n, s, l, o);
          }
          s = s.child;
        }
        return s;
      case 5:
        return (
          Mp(s),
          n === null && Bu(s),
          (l = s.type),
          (d = s.pendingProps),
          (p = n !== null ? n.memoizedProps : null),
          (v = d.children),
          Nu(l, d) ? (v = null) : p !== null && Nu(l, p) && (s.flags |= 32),
          mm(n, s),
          bt(n, s, v, o),
          s.child
        );
      case 6:
        return n === null && Bu(s), null;
      case 13:
        return wm(n, s, o);
      case 4:
        return (
          Qu(s, s.stateNode.containerInfo),
          (l = s.pendingProps),
          n === null ? (s.child = _s(s, null, l, o)) : bt(n, s, l, o),
          s.child
        );
      case 11:
        return (
          (l = s.type),
          (d = s.pendingProps),
          (d = s.elementType === l ? d : rn(l, d)),
          dm(n, s, l, d, o)
        );
      case 7:
        return bt(n, s, s.pendingProps, o), s.child;
      case 8:
        return bt(n, s, s.pendingProps.children, o), s.child;
      case 12:
        return bt(n, s, s.pendingProps.children, o), s.child;
      case 10:
        e: {
          if (
            ((l = s.type._context),
            (d = s.pendingProps),
            (p = s.memoizedProps),
            (v = d.value),
            Fe(wa, l._currentValue),
            (l._currentValue = v),
            p !== null)
          )
            if (tn(p.value, v)) {
              if (p.children === d.children && !Tt.current) {
                s = On(n, s, o);
                break e;
              }
            } else
              for (p = s.child, p !== null && (p.return = s); p !== null; ) {
                var E = p.dependencies;
                if (E !== null) {
                  v = p.child;
                  for (var C = E.firstContext; C !== null; ) {
                    if (C.context === l) {
                      if (p.tag === 1) {
                        (C = Nn(-1, o & -o)), (C.tag = 2);
                        var j = p.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var H = j.pending;
                          H === null
                            ? (C.next = C)
                            : ((C.next = H.next), (H.next = C)),
                            (j.pending = C);
                        }
                      }
                      (p.lanes |= o),
                        (C = p.alternate),
                        C !== null && (C.lanes |= o),
                        Wu(p.return, o, s),
                        (E.lanes |= o);
                      break;
                    }
                    C = C.next;
                  }
                } else if (p.tag === 10) v = p.type === s.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((v = p.return), v === null)) throw Error(r(341));
                  (v.lanes |= o),
                    (E = v.alternate),
                    E !== null && (E.lanes |= o),
                    Wu(v, o, s),
                    (v = p.sibling);
                } else v = p.child;
                if (v !== null) v.return = p;
                else
                  for (v = p; v !== null; ) {
                    if (v === s) {
                      v = null;
                      break;
                    }
                    if (((p = v.sibling), p !== null)) {
                      (p.return = v.return), (v = p);
                      break;
                    }
                    v = v.return;
                  }
                p = v;
              }
          bt(n, s, d.children, o), (s = s.child);
        }
        return s;
      case 9:
        return (
          (d = s.type),
          (l = s.pendingProps.children),
          As(s, o),
          (d = Ht(d)),
          (l = l(d)),
          (s.flags |= 1),
          bt(n, s, l, o),
          s.child
        );
      case 14:
        return (
          (l = s.type),
          (d = rn(l, s.pendingProps)),
          (d = rn(l.type, d)),
          fm(n, s, l, d, o)
        );
      case 15:
        return hm(n, s, s.type, s.pendingProps, o);
      case 17:
        return (
          (l = s.type),
          (d = s.pendingProps),
          (d = s.elementType === l ? d : rn(l, d)),
          Na(n, s),
          (s.tag = 1),
          Ct(l) ? ((n = !0), ha(s)) : (n = !1),
          As(s, o),
          sm(s, l, d),
          ac(s, l, d, o),
          dc(null, s, l, !0, n, o)
        );
      case 19:
        return Sm(n, s, o);
      case 22:
        return pm(n, s, o);
    }
    throw Error(r(156, s.tag));
  };
  function Wm(n, s) {
    return Eh(n, s);
  }
  function AS(n, s, o, l) {
    (this.tag = n),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = s),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Kt(n, s, o, l) {
    return new AS(n, s, o, l);
  }
  function Nc(n) {
    return (n = n.prototype), !(!n || !n.isReactComponent);
  }
  function NS(n) {
    if (typeof n == "function") return Nc(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === Pe)) return 11;
      if (n === Ie) return 14;
    }
    return 2;
  }
  function ar(n, s) {
    var o = n.alternate;
    return (
      o === null
        ? ((o = Kt(n.tag, s, n.key, n.mode)),
          (o.elementType = n.elementType),
          (o.type = n.type),
          (o.stateNode = n.stateNode),
          (o.alternate = n),
          (n.alternate = o))
        : ((o.pendingProps = s),
          (o.type = n.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = n.flags & 14680064),
      (o.childLanes = n.childLanes),
      (o.lanes = n.lanes),
      (o.child = n.child),
      (o.memoizedProps = n.memoizedProps),
      (o.memoizedState = n.memoizedState),
      (o.updateQueue = n.updateQueue),
      (s = n.dependencies),
      (o.dependencies =
        s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }),
      (o.sibling = n.sibling),
      (o.index = n.index),
      (o.ref = n.ref),
      o
    );
  }
  function za(n, s, o, l, d, p) {
    var v = 2;
    if (((l = n), typeof n == "function")) Nc(n) && (v = 1);
    else if (typeof n == "string") v = 5;
    else
      e: switch (n) {
        case J:
          return zr(o.children, d, p, s);
        case D:
          (v = 8), (d |= 8);
          break;
        case X:
          return (
            (n = Kt(12, o, s, d | 2)), (n.elementType = X), (n.lanes = p), n
          );
        case Me:
          return (n = Kt(13, o, s, d)), (n.elementType = Me), (n.lanes = p), n;
        case Ne:
          return (n = Kt(19, o, s, d)), (n.elementType = Ne), (n.lanes = p), n;
        case fe:
          return $a(o, d, p, s);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case me:
                v = 10;
                break e;
              case de:
                v = 9;
                break e;
              case Pe:
                v = 11;
                break e;
              case Ie:
                v = 14;
                break e;
              case xe:
                (v = 16), (l = null);
                break e;
            }
          throw Error(r(130, n == null ? n : typeof n, ""));
      }
    return (
      (s = Kt(v, o, s, d)), (s.elementType = n), (s.type = l), (s.lanes = p), s
    );
  }
  function zr(n, s, o, l) {
    return (n = Kt(7, n, l, s)), (n.lanes = o), n;
  }
  function $a(n, s, o, l) {
    return (
      (n = Kt(22, n, l, s)),
      (n.elementType = fe),
      (n.lanes = o),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function Oc(n, s, o) {
    return (n = Kt(6, n, null, s)), (n.lanes = o), n;
  }
  function jc(n, s, o) {
    return (
      (s = Kt(4, n.children !== null ? n.children : [], n.key, s)),
      (s.lanes = o),
      (s.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      s
    );
  }
  function OS(n, s, o, l, d) {
    (this.tag = s),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ou(0)),
      (this.expirationTimes = ou(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ou(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Lc(n, s, o, l, d, p, v, E, C) {
    return (
      (n = new OS(n, s, o, E, C)),
      s === 1 ? ((s = 1), p === !0 && (s |= 8)) : (s = 0),
      (p = Kt(3, null, null, s)),
      (n.current = p),
      (p.stateNode = n),
      (p.memoizedState = {
        element: l,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ku(p),
      n
    );
  }
  function jS(n, s, o) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: l == null ? null : "" + l,
      children: n,
      containerInfo: s,
      implementation: o,
    };
  }
  function qm(n) {
    if (!n) return Xn;
    n = n._reactInternals;
    e: {
      if (Ar(n) !== n || n.tag !== 1) throw Error(r(170));
      var s = n;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (Ct(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Ct(o)) return xp(n, o, s);
    }
    return s;
  }
  function Km(n, s, o, l, d, p, v, E, C) {
    return (
      (n = Lc(o, l, !0, n, d, p, v, E, C)),
      (n.context = qm(null)),
      (o = n.current),
      (l = kt()),
      (d = ir(o)),
      (p = Nn(l, d)),
      (p.callback = s ?? null),
      tr(o, p, d),
      (n.current.lanes = d),
      yi(n, d, l),
      Rt(n, l),
      n
    );
  }
  function Ha(n, s, o, l) {
    var d = s.current,
      p = kt(),
      v = ir(d);
    return (
      (o = qm(o)),
      s.context === null ? (s.context = o) : (s.pendingContext = o),
      (s = Nn(p, v)),
      (s.payload = { element: n }),
      (l = l === void 0 ? null : l),
      l !== null && (s.callback = l),
      (n = tr(d, s, v)),
      n !== null && (an(n, d, v, p), Sa(n, d, v)),
      v
    );
  }
  function Wa(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Qm(n, s) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < s ? o : s;
    }
  }
  function Mc(n, s) {
    Qm(n, s), (n = n.alternate) && Qm(n, s);
  }
  function LS() {
    return null;
  }
  var Gm =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function Dc(n) {
    this._internalRoot = n;
  }
  (qa.prototype.render = Dc.prototype.render =
    function (n) {
      var s = this._internalRoot;
      if (s === null) throw Error(r(409));
      Ha(n, s, null, null);
    }),
    (qa.prototype.unmount = Dc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var s = n.containerInfo;
          Vr(function () {
            Ha(null, n, null, null);
          }),
            (s[Cn] = null);
        }
      });
  function qa(n) {
    this._internalRoot = n;
  }
  qa.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var s = Oh();
      n = { blockedOn: null, target: n, priority: s };
      for (var o = 0; o < Kn.length && s !== 0 && s < Kn[o].priority; o++);
      Kn.splice(o, 0, n), o === 0 && Mh(n);
    }
  };
  function Ic(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Ka(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Jm() {}
  function MS(n, s, o, l, d) {
    if (d) {
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var j = Wa(v);
          p.call(j);
        };
      }
      var v = Km(s, l, n, 0, null, !1, !1, "", Jm);
      return (
        (n._reactRootContainer = v),
        (n[Cn] = v.current),
        Ni(n.nodeType === 8 ? n.parentNode : n),
        Vr(),
        v
      );
    }
    for (; (d = n.lastChild); ) n.removeChild(d);
    if (typeof l == "function") {
      var E = l;
      l = function () {
        var j = Wa(C);
        E.call(j);
      };
    }
    var C = Lc(n, 0, !1, null, null, !1, !1, "", Jm);
    return (
      (n._reactRootContainer = C),
      (n[Cn] = C.current),
      Ni(n.nodeType === 8 ? n.parentNode : n),
      Vr(function () {
        Ha(s, C, o, l);
      }),
      C
    );
  }
  function Qa(n, s, o, l, d) {
    var p = o._reactRootContainer;
    if (p) {
      var v = p;
      if (typeof d == "function") {
        var E = d;
        d = function () {
          var C = Wa(v);
          E.call(C);
        };
      }
      Ha(s, v, n, d);
    } else v = MS(o, s, n, d, l);
    return Wa(v);
  }
  (Ah = function (n) {
    switch (n.tag) {
      case 3:
        var s = n.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var o = gi(s.pendingLanes);
          o !== 0 &&
            (au(s, o | 1),
            Rt(s, Ge()),
            (_e & 6) === 0 && ((Ms = Ge() + 500), Zn()));
        }
        break;
      case 13:
        Vr(function () {
          var l = An(n, 1);
          if (l !== null) {
            var d = kt();
            an(l, n, 1, d);
          }
        }),
          Mc(n, 1);
    }
  }),
    (lu = function (n) {
      if (n.tag === 13) {
        var s = An(n, 134217728);
        if (s !== null) {
          var o = kt();
          an(s, n, 134217728, o);
        }
        Mc(n, 134217728);
      }
    }),
    (Nh = function (n) {
      if (n.tag === 13) {
        var s = ir(n),
          o = An(n, s);
        if (o !== null) {
          var l = kt();
          an(o, n, s, l);
        }
        Mc(n, s);
      }
    }),
    (Oh = function () {
      return Le;
    }),
    (jh = function (n, s) {
      var o = Le;
      try {
        return (Le = n), s();
      } finally {
        Le = o;
      }
    }),
    (eu = function (n, s, o) {
      switch (s) {
        case "input":
          if ((ql(n, o), (s = o.name), o.type === "radio" && s != null)) {
            for (o = n; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                "input[name=" + JSON.stringify("" + s) + '][type="radio"]'
              ),
                s = 0;
              s < o.length;
              s++
            ) {
              var l = o[s];
              if (l !== n && l.form === n.form) {
                var d = da(l);
                if (!d) throw Error(r(90));
                Rr(l), ql(l, d);
              }
            }
          }
          break;
        case "textarea":
          lh(n, o);
          break;
        case "select":
          (s = o.value), s != null && fs(n, !!o.multiple, s, !1);
      }
    }),
    (yh = _c),
    (vh = Vr);
  var DS = { usingClientEntryPoint: !1, Events: [Li, bs, da, mh, gh, _c] },
    Qi = {
      findFiberByHostInstance: Nr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    IS = {
      bundleType: Qi.bundleType,
      version: Qi.version,
      rendererPackageName: Qi.rendererPackageName,
      rendererConfig: Qi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: M.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return (n = bh(n)), n === null ? null : n.stateNode;
      },
      findFiberByHostInstance: Qi.findFiberByHostInstance || LS,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ga.isDisabled && Ga.supportsFiber)
      try {
        (qo = Ga.inject(IS)), (hn = Ga);
      } catch {}
  }
  return (
    (At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DS),
    (At.createPortal = function (n, s) {
      var o =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ic(s)) throw Error(r(200));
      return jS(n, s, null, o);
    }),
    (At.createRoot = function (n, s) {
      if (!Ic(n)) throw Error(r(299));
      var o = !1,
        l = "",
        d = Gm;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (o = !0),
          s.identifierPrefix !== void 0 && (l = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (d = s.onRecoverableError)),
        (s = Lc(n, 1, !1, null, null, o, !1, l, d)),
        (n[Cn] = s.current),
        Ni(n.nodeType === 8 ? n.parentNode : n),
        new Dc(s)
      );
    }),
    (At.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var s = n._reactInternals;
      if (s === void 0)
        throw typeof n.render == "function"
          ? Error(r(188))
          : ((n = Object.keys(n).join(",")), Error(r(268, n)));
      return (n = bh(s)), (n = n === null ? null : n.stateNode), n;
    }),
    (At.flushSync = function (n) {
      return Vr(n);
    }),
    (At.hydrate = function (n, s, o) {
      if (!Ka(s)) throw Error(r(200));
      return Qa(null, n, s, !0, o);
    }),
    (At.hydrateRoot = function (n, s, o) {
      if (!Ic(n)) throw Error(r(405));
      var l = (o != null && o.hydratedSources) || null,
        d = !1,
        p = "",
        v = Gm;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (d = !0),
          o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (v = o.onRecoverableError)),
        (s = Km(s, null, n, 1, o ?? null, d, !1, p, v)),
        (n[Cn] = s.current),
        Ni(n),
        l)
      )
        for (n = 0; n < l.length; n++)
          (o = l[n]),
            (d = o._getVersion),
            (d = d(o._source)),
            s.mutableSourceEagerHydrationData == null
              ? (s.mutableSourceEagerHydrationData = [o, d])
              : s.mutableSourceEagerHydrationData.push(o, d);
      return new qa(s);
    }),
    (At.render = function (n, s, o) {
      if (!Ka(s)) throw Error(r(200));
      return Qa(null, n, s, !1, o);
    }),
    (At.unmountComponentAtNode = function (n) {
      if (!Ka(n)) throw Error(r(40));
      return n._reactRootContainer
        ? (Vr(function () {
            Qa(null, null, n, !1, function () {
              (n._reactRootContainer = null), (n[Cn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (At.unstable_batchedUpdates = _c),
    (At.unstable_renderSubtreeIntoContainer = function (n, s, o, l) {
      if (!Ka(o)) throw Error(r(200));
      if (n == null || n._reactInternals === void 0) throw Error(r(38));
      return Qa(n, s, o, !1, l);
    }),
    (At.version = "18.3.1-next-f1338f8080-20240426"),
    At
  );
}
var ig;
function Bv() {
  if (ig) return Uc.exports;
  ig = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
  }
  return t(), (Uc.exports = KS()), Uc.exports;
}
var og;
function QS() {
  if (og) return Ya;
  og = 1;
  var t = Bv();
  return (Ya.createRoot = t.createRoot), (Ya.hydrateRoot = t.hydrateRoot), Ya;
}
var GS = QS();
const JS = Vv(GS),
  YS = 20,
  XS = 1e6,
  Fn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
  };
let Hc = 0;
function ZS() {
  return (Hc = (Hc + 1) % Number.MAX_VALUE), Hc.toString();
}
const Wc = new Map(),
  ag = (t) => {
    if (Wc.has(t)) return;
    const e = setTimeout(() => {
      Wc.delete(t), co({ type: Fn.REMOVE_TOAST, toastId: t });
    }, XS);
    Wc.set(t, e);
  },
  eb = (t, e) => {
    switch (e.type) {
      case Fn.ADD_TOAST:
        return { ...t, toasts: [e.toast, ...t.toasts].slice(0, YS) };
      case Fn.UPDATE_TOAST:
        return {
          ...t,
          toasts: t.toasts.map((r) =>
            r.id === e.toast.id ? { ...r, ...e.toast } : r
          ),
        };
      case Fn.DISMISS_TOAST: {
        const { toastId: r } = e;
        return (
          r
            ? ag(r)
            : t.toasts.forEach((i) => {
                ag(i.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, open: !1 } : i
            ),
          }
        );
      }
      case Fn.REMOVE_TOAST:
        return e.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((r) => r.id !== e.toastId) };
    }
  },
  al = [];
let ll = { toasts: [] };
function co(t) {
  (ll = eb(ll, t)),
    al.forEach((e) => {
      e(ll);
    });
}
function tb({ ...t }) {
  const e = ZS(),
    r = (a) => co({ type: Fn.UPDATE_TOAST, toast: { ...a, id: e } }),
    i = () => co({ type: Fn.DISMISS_TOAST, toastId: e });
  return (
    co({
      type: Fn.ADD_TOAST,
      toast: {
        ...t,
        id: e,
        open: !0,
        onOpenChange: (a) => {
          a || i();
        },
      },
    }),
    { id: e, dismiss: i, update: r }
  );
}
function nb() {
  const [t, e] = B.useState(ll);
  return (
    B.useEffect(
      () => (
        al.push(e),
        () => {
          const r = al.indexOf(e);
          r > -1 && al.splice(r, 1);
        }
      ),
      [t]
    ),
    {
      ...t,
      toast: tb,
      dismiss: (r) => co({ type: Fn.DISMISS_TOAST, toastId: r }),
    }
  );
}
function Uv(t) {
  var e,
    r,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++)
        t[e] && (r = Uv(t[e])) && (i && (i += " "), (i += r));
    } else for (r in t) t[r] && (i && (i += " "), (i += r));
  return i;
}
function zv() {
  for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)
    (t = arguments[r]) && (e = Uv(t)) && (i && (i += " "), (i += e));
  return i;
}
const lg = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  ug = zv,
  rb = (t, e) => (r) => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
      return ug(
        t,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className
      );
    const { variants: a, defaultVariants: u } = e,
      c = Object.keys(a).map((m) => {
        const g = r == null ? void 0 : r[m],
          y = u == null ? void 0 : u[m];
        if (g === null) return null;
        const w = lg(g) || lg(y);
        return a[m][w];
      }),
      f =
        r &&
        Object.entries(r).reduce((m, g) => {
          let [y, w] = g;
          return w === void 0 || (m[y] = w), m;
        }, {}),
      h =
        e == null || (i = e.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((m, g) => {
              let { class: y, className: w, ...T } = g;
              return Object.entries(T).every((k) => {
                let [b, x] = k;
                return Array.isArray(x)
                  ? x.includes({ ...u, ...f }[b])
                  : { ...u, ...f }[b] === x;
              })
                ? [...m, y, w]
                : m;
            }, []);
    return ug(
      t,
      c,
      h,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className
    );
  };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sb = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $v = (...t) =>
    t
      .filter((e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ib = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ob = B.forwardRef(
  (
    {
      color: t = "currentColor",
      size: e = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: u,
      iconNode: c,
      ...f
    },
    h
  ) =>
    B.createElement(
      "svg",
      {
        ref: h,
        ...ib,
        width: e,
        height: e,
        stroke: t,
        strokeWidth: i ? (Number(r) * 24) / Number(e) : r,
        className: $v("lucide", a),
        ...f,
      },
      [
        ...c.map(([m, g]) => B.createElement(m, g)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ao = (t, e) => {
  const r = B.forwardRef(({ className: i, ...a }, u) =>
    B.createElement(ob, {
      ref: u,
      iconNode: e,
      className: $v(`lucide-${sb(t)}`, i),
      ...a,
    })
  );
  return (r.displayName = `${t}`), r;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ab = [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ],
  lb = Ao("Coins", ab);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ub = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  cb = Ao("Rocket", ub);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const db = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  fb = Ao("Shield", db);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hb = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  pb = Ao("X", hb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mb = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  gb = Ao("Zap", mb),
  yb = (t, e) => {
    const r = new Array(t.length + e.length);
    for (let i = 0; i < t.length; i++) r[i] = t[i];
    for (let i = 0; i < e.length; i++) r[t.length + i] = e[i];
    return r;
  },
  vb = (t, e) => ({ classGroupId: t, validator: e }),
  Hv = (t = new Map(), e = null, r) => ({
    nextPart: t,
    validators: e,
    classGroupId: r,
  }),
  wl = "-",
  cg = [],
  wb = "arbitrary..",
  xb = (t) => {
    const e = bb(t),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (c) => {
        if (c.startsWith("[") && c.endsWith("]")) return Sb(c);
        const f = c.split(wl),
          h = f[0] === "" && f.length > 1 ? 1 : 0;
        return Wv(f, h, e);
      },
      getConflictingClassGroupIds: (c, f) => {
        if (f) {
          const h = i[c],
            m = r[c];
          return h ? (m ? yb(m, h) : h) : m || cg;
        }
        return r[c] || cg;
      },
    };
  },
  Wv = (t, e, r) => {
    if (t.length - e === 0) return r.classGroupId;
    const a = t[e],
      u = r.nextPart.get(a);
    if (u) {
      const m = Wv(t, e + 1, u);
      if (m) return m;
    }
    const c = r.validators;
    if (c === null) return;
    const f = e === 0 ? t.join(wl) : t.slice(e).join(wl),
      h = c.length;
    for (let m = 0; m < h; m++) {
      const g = c[m];
      if (g.validator(f)) return g.classGroupId;
    }
  },
  Sb = (t) =>
    t.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const e = t.slice(1, -1),
            r = e.indexOf(":"),
            i = e.slice(0, r);
          return i ? wb + i : void 0;
        })(),
  bb = (t) => {
    const { theme: e, classGroups: r } = t;
    return kb(r, e);
  },
  kb = (t, e) => {
    const r = Hv();
    for (const i in t) {
      const a = t[i];
      uf(a, r, i, e);
    }
    return r;
  },
  uf = (t, e, r, i) => {
    const a = t.length;
    for (let u = 0; u < a; u++) {
      const c = t[u];
      Eb(c, e, r, i);
    }
  },
  Eb = (t, e, r, i) => {
    if (typeof t == "string") {
      Tb(t, e, r);
      return;
    }
    if (typeof t == "function") {
      Cb(t, e, r, i);
      return;
    }
    Pb(t, e, r, i);
  },
  Tb = (t, e, r) => {
    const i = t === "" ? e : qv(e, t);
    i.classGroupId = r;
  },
  Cb = (t, e, r, i) => {
    if (_b(t)) {
      uf(t(i), e, r, i);
      return;
    }
    e.validators === null && (e.validators = []), e.validators.push(vb(r, t));
  },
  Pb = (t, e, r, i) => {
    const a = Object.entries(t),
      u = a.length;
    for (let c = 0; c < u; c++) {
      const [f, h] = a[c];
      uf(h, qv(e, f), r, i);
    }
  },
  qv = (t, e) => {
    let r = t;
    const i = e.split(wl),
      a = i.length;
    for (let u = 0; u < a; u++) {
      const c = i[u];
      let f = r.nextPart.get(c);
      f || ((f = Hv()), r.nextPart.set(c, f)), (r = f);
    }
    return r;
  },
  _b = (t) => "isThemeGetter" in t && t.isThemeGetter === !0,
  Rb = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let e = 0,
      r = Object.create(null),
      i = Object.create(null);
    const a = (u, c) => {
      (r[u] = c), e++, e > t && ((e = 0), (i = r), (r = Object.create(null)));
    };
    return {
      get(u) {
        let c = r[u];
        if (c !== void 0) return c;
        if ((c = i[u]) !== void 0) return a(u, c), c;
      },
      set(u, c) {
        u in r ? (r[u] = c) : a(u, c);
      },
    };
  },
  md = "!",
  dg = ":",
  Ab = [],
  fg = (t, e, r, i, a) => ({
    modifiers: t,
    hasImportantModifier: e,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: a,
  }),
  Nb = (t) => {
    const { prefix: e, experimentalParseClassName: r } = t;
    let i = (a) => {
      const u = [];
      let c = 0,
        f = 0,
        h = 0,
        m;
      const g = a.length;
      for (let b = 0; b < g; b++) {
        const x = a[b];
        if (c === 0 && f === 0) {
          if (x === dg) {
            u.push(a.slice(h, b)), (h = b + 1);
            continue;
          }
          if (x === "/") {
            m = b;
            continue;
          }
        }
        x === "[" ? c++ : x === "]" ? c-- : x === "(" ? f++ : x === ")" && f--;
      }
      const y = u.length === 0 ? a : a.slice(h);
      let w = y,
        T = !1;
      y.endsWith(md)
        ? ((w = y.slice(0, -1)), (T = !0))
        : y.startsWith(md) && ((w = y.slice(1)), (T = !0));
      const k = m && m > h ? m - h : void 0;
      return fg(u, T, w, k);
    };
    if (e) {
      const a = e + dg,
        u = i;
      i = (c) =>
        c.startsWith(a) ? u(c.slice(a.length)) : fg(Ab, !1, c, void 0, !0);
    }
    if (r) {
      const a = i;
      i = (u) => r({ className: u, parseClassName: a });
    }
    return i;
  },
  Ob = (t) => {
    const e = new Map();
    return (
      t.orderSensitiveModifiers.forEach((r, i) => {
        e.set(r, 1e6 + i);
      }),
      (r) => {
        const i = [];
        let a = [];
        for (let u = 0; u < r.length; u++) {
          const c = r[u],
            f = c[0] === "[",
            h = e.has(c);
          f || h
            ? (a.length > 0 && (a.sort(), i.push(...a), (a = [])), i.push(c))
            : a.push(c);
        }
        return a.length > 0 && (a.sort(), i.push(...a)), i;
      }
    );
  },
  jb = (t) => ({
    cache: Rb(t.cacheSize),
    parseClassName: Nb(t),
    sortModifiers: Ob(t),
    ...xb(t),
  }),
  Lb = /\s+/,
  Mb = (t, e) => {
    const {
        parseClassName: r,
        getClassGroupId: i,
        getConflictingClassGroupIds: a,
        sortModifiers: u,
      } = e,
      c = [],
      f = t.trim().split(Lb);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
      const g = f[m],
        {
          isExternal: y,
          modifiers: w,
          hasImportantModifier: T,
          baseClassName: k,
          maybePostfixModifierPosition: b,
        } = r(g);
      if (y) {
        h = g + (h.length > 0 ? " " + h : h);
        continue;
      }
      let x = !!b,
        R = i(x ? k.substring(0, b) : k);
      if (!R) {
        if (!x) {
          h = g + (h.length > 0 ? " " + h : h);
          continue;
        }
        if (((R = i(k)), !R)) {
          h = g + (h.length > 0 ? " " + h : h);
          continue;
        }
        x = !1;
      }
      const F = w.length === 0 ? "" : w.length === 1 ? w[0] : u(w).join(":"),
        L = T ? F + md : F,
        M = L + R;
      if (c.indexOf(M) > -1) continue;
      c.push(M);
      const U = a(R, x);
      for (let Q = 0; Q < U.length; ++Q) {
        const J = U[Q];
        c.push(L + J);
      }
      h = g + (h.length > 0 ? " " + h : h);
    }
    return h;
  },
  Db = (...t) => {
    let e = 0,
      r,
      i,
      a = "";
    for (; e < t.length; )
      (r = t[e++]) && (i = Kv(r)) && (a && (a += " "), (a += i));
    return a;
  },
  Kv = (t) => {
    if (typeof t == "string") return t;
    let e,
      r = "";
    for (let i = 0; i < t.length; i++)
      t[i] && (e = Kv(t[i])) && (r && (r += " "), (r += e));
    return r;
  },
  Ib = (t, ...e) => {
    let r, i, a, u;
    const c = (h) => {
        const m = e.reduce((g, y) => y(g), t());
        return (r = jb(m)), (i = r.cache.get), (a = r.cache.set), (u = f), f(h);
      },
      f = (h) => {
        const m = i(h);
        if (m) return m;
        const g = Mb(h, r);
        return a(h, g), g;
      };
    return (u = c), (...h) => u(Db(...h));
  },
  Fb = [],
  rt = (t) => {
    const e = (r) => r[t] || Fb;
    return (e.isThemeGetter = !0), e;
  },
  Qv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Gv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Vb = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Bb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ub =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  zb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  $b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Hb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ur = (t) => Vb.test(t),
  be = (t) => !!t && !Number.isNaN(Number(t)),
  cr = (t) => !!t && Number.isInteger(Number(t)),
  qc = (t) => t.endsWith("%") && be(t.slice(0, -1)),
  Ln = (t) => Bb.test(t),
  Jv = () => !0,
  Wb = (t) => Ub.test(t) && !zb.test(t),
  cf = () => !1,
  qb = (t) => $b.test(t),
  Kb = (t) => Hb.test(t),
  Qb = (t) => !te(t) && !ne(t),
  Gb = (t) => Cr(t, Zv, cf),
  te = (t) => Qv.test(t),
  $r = (t) => Cr(t, e0, Wb),
  hg = (t) => Cr(t, rk, be),
  Jb = (t) => Cr(t, n0, Jv),
  Yb = (t) => Cr(t, t0, cf),
  pg = (t) => Cr(t, Yv, cf),
  Xb = (t) => Cr(t, Xv, Kb),
  Xa = (t) => Cr(t, r0, qb),
  ne = (t) => Gv.test(t),
  Ji = (t) => cs(t, e0),
  Zb = (t) => cs(t, t0),
  mg = (t) => cs(t, Yv),
  ek = (t) => cs(t, Zv),
  tk = (t) => cs(t, Xv),
  Za = (t) => cs(t, r0, !0),
  nk = (t) => cs(t, n0, !0),
  Cr = (t, e, r) => {
    const i = Qv.exec(t);
    return i ? (i[1] ? e(i[1]) : r(i[2])) : !1;
  },
  cs = (t, e, r = !1) => {
    const i = Gv.exec(t);
    return i ? (i[1] ? e(i[1]) : r) : !1;
  },
  Yv = (t) => t === "position" || t === "percentage",
  Xv = (t) => t === "image" || t === "url",
  Zv = (t) => t === "length" || t === "size" || t === "bg-size",
  e0 = (t) => t === "length",
  rk = (t) => t === "number",
  t0 = (t) => t === "family-name",
  n0 = (t) => t === "number" || t === "weight",
  r0 = (t) => t === "shadow",
  sk = () => {
    const t = rt("color"),
      e = rt("font"),
      r = rt("text"),
      i = rt("font-weight"),
      a = rt("tracking"),
      u = rt("leading"),
      c = rt("breakpoint"),
      f = rt("container"),
      h = rt("spacing"),
      m = rt("radius"),
      g = rt("shadow"),
      y = rt("inset-shadow"),
      w = rt("text-shadow"),
      T = rt("drop-shadow"),
      k = rt("blur"),
      b = rt("perspective"),
      x = rt("aspect"),
      R = rt("ease"),
      F = rt("animate"),
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      M = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      U = () => [...M(), ne, te],
      Q = () => ["auto", "hidden", "clip", "visible", "scroll"],
      J = () => ["auto", "contain", "none"],
      D = () => [ne, te, h],
      X = () => [ur, "full", "auto", ...D()],
      me = () => [cr, "none", "subgrid", ne, te],
      de = () => ["auto", { span: ["full", cr, ne, te] }, cr, ne, te],
      Pe = () => [cr, "auto", ne, te],
      Me = () => ["auto", "min", "max", "fr", ne, te],
      Ne = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Ie = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      xe = () => ["auto", ...D()],
      fe = () => [
        ur,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...D(),
      ],
      q = () => [
        ur,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...D(),
      ],
      se = () => [
        ur,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...D(),
      ],
      V = () => [t, ne, te],
      A = () => [...M(), mg, pg, { position: [ne, te] }],
      z = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      ye = () => ["auto", "cover", "contain", ek, Gb, { size: [ne, te] }],
      ve = () => [qc, Ji, $r],
      le = () => ["", "none", "full", m, ne, te],
      he = () => ["", be, Ji, $r],
      Oe = () => ["solid", "dashed", "dotted", "double"],
      Re = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      we = () => [be, qc, mg, pg],
      ht = () => ["", "none", k, ne, te],
      Tn = () => ["none", be, ne, te],
      Rr = () => ["none", be, ne, te],
      zn = () => [be, ne, te],
      $n = () => [ur, "full", ...D()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ln],
        breakpoint: [Ln],
        color: [Jv],
        container: [Ln],
        "drop-shadow": [Ln],
        ease: ["in", "out", "in-out"],
        font: [Qb],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ln],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ln],
        shadow: [Ln],
        spacing: ["px", be],
        text: [Ln],
        "text-shadow": [Ln],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ur, te, ne, x] }],
        container: ["container"],
        columns: [{ columns: [be, te, ne, f] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: U() }],
        overflow: [{ overflow: Q() }],
        "overflow-x": [{ "overflow-x": Q() }],
        "overflow-y": [{ "overflow-y": Q() }],
        overscroll: [{ overscroll: J() }],
        "overscroll-x": [{ "overscroll-x": J() }],
        "overscroll-y": [{ "overscroll-y": J() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: X() }],
        "inset-x": [{ "inset-x": X() }],
        "inset-y": [{ "inset-y": X() }],
        start: [{ "inset-s": X(), start: X() }],
        end: [{ "inset-e": X(), end: X() }],
        "inset-bs": [{ "inset-bs": X() }],
        "inset-be": [{ "inset-be": X() }],
        top: [{ top: X() }],
        right: [{ right: X() }],
        bottom: [{ bottom: X() }],
        left: [{ left: X() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [cr, "auto", ne, te] }],
        basis: [{ basis: [ur, "full", "auto", f, ...D()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [be, ur, "auto", "initial", "none", te] }],
        grow: [{ grow: ["", be, ne, te] }],
        shrink: [{ shrink: ["", be, ne, te] }],
        order: [{ order: [cr, "first", "last", "none", ne, te] }],
        "grid-cols": [{ "grid-cols": me() }],
        "col-start-end": [{ col: de() }],
        "col-start": [{ "col-start": Pe() }],
        "col-end": [{ "col-end": Pe() }],
        "grid-rows": [{ "grid-rows": me() }],
        "row-start-end": [{ row: de() }],
        "row-start": [{ "row-start": Pe() }],
        "row-end": [{ "row-end": Pe() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Me() }],
        "auto-rows": [{ "auto-rows": Me() }],
        gap: [{ gap: D() }],
        "gap-x": [{ "gap-x": D() }],
        "gap-y": [{ "gap-y": D() }],
        "justify-content": [{ justify: [...Ne(), "normal"] }],
        "justify-items": [{ "justify-items": [...Ie(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Ie()] }],
        "align-content": [{ content: ["normal", ...Ne()] }],
        "align-items": [{ items: [...Ie(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Ie(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Ne() }],
        "place-items": [{ "place-items": [...Ie(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Ie()] }],
        p: [{ p: D() }],
        px: [{ px: D() }],
        py: [{ py: D() }],
        ps: [{ ps: D() }],
        pe: [{ pe: D() }],
        pbs: [{ pbs: D() }],
        pbe: [{ pbe: D() }],
        pt: [{ pt: D() }],
        pr: [{ pr: D() }],
        pb: [{ pb: D() }],
        pl: [{ pl: D() }],
        m: [{ m: xe() }],
        mx: [{ mx: xe() }],
        my: [{ my: xe() }],
        ms: [{ ms: xe() }],
        me: [{ me: xe() }],
        mbs: [{ mbs: xe() }],
        mbe: [{ mbe: xe() }],
        mt: [{ mt: xe() }],
        mr: [{ mr: xe() }],
        mb: [{ mb: xe() }],
        ml: [{ ml: xe() }],
        "space-x": [{ "space-x": D() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": D() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: fe() }],
        "inline-size": [{ inline: ["auto", ...q()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...q()] }],
        "max-inline-size": [{ "max-inline": ["none", ...q()] }],
        "block-size": [{ block: ["auto", ...se()] }],
        "min-block-size": [{ "min-block": ["auto", ...se()] }],
        "max-block-size": [{ "max-block": ["none", ...se()] }],
        w: [{ w: [f, "screen", ...fe()] }],
        "min-w": [{ "min-w": [f, "screen", "none", ...fe()] }],
        "max-w": [
          { "max-w": [f, "screen", "none", "prose", { screen: [c] }, ...fe()] },
        ],
        h: [{ h: ["screen", "lh", ...fe()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...fe()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...fe()] }],
        "font-size": [{ text: ["base", r, Ji, $r] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, nk, Jb] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              qc,
              te,
            ],
          },
        ],
        "font-family": [{ font: [Zb, Yb, e] }],
        "font-features": [{ "font-features": [te] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [a, ne, te] }],
        "line-clamp": [{ "line-clamp": [be, "none", ne, hg] }],
        leading: [{ leading: [u, ...D()] }],
        "list-image": [{ "list-image": ["none", ne, te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ne, te] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: V() }],
        "text-color": [{ text: V() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Oe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [be, "from-font", "auto", ne, $r] },
        ],
        "text-decoration-color": [{ decoration: V() }],
        "underline-offset": [{ "underline-offset": [be, "auto", ne, te] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ne,
              te,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ne, te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: A() }],
        "bg-repeat": [{ bg: z() }],
        "bg-size": [{ bg: ye() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  cr,
                  ne,
                  te,
                ],
                radial: ["", ne, te],
                conic: [cr, ne, te],
              },
              tk,
              Xb,
            ],
          },
        ],
        "bg-color": [{ bg: V() }],
        "gradient-from-pos": [{ from: ve() }],
        "gradient-via-pos": [{ via: ve() }],
        "gradient-to-pos": [{ to: ve() }],
        "gradient-from": [{ from: V() }],
        "gradient-via": [{ via: V() }],
        "gradient-to": [{ to: V() }],
        rounded: [{ rounded: le() }],
        "rounded-s": [{ "rounded-s": le() }],
        "rounded-e": [{ "rounded-e": le() }],
        "rounded-t": [{ "rounded-t": le() }],
        "rounded-r": [{ "rounded-r": le() }],
        "rounded-b": [{ "rounded-b": le() }],
        "rounded-l": [{ "rounded-l": le() }],
        "rounded-ss": [{ "rounded-ss": le() }],
        "rounded-se": [{ "rounded-se": le() }],
        "rounded-ee": [{ "rounded-ee": le() }],
        "rounded-es": [{ "rounded-es": le() }],
        "rounded-tl": [{ "rounded-tl": le() }],
        "rounded-tr": [{ "rounded-tr": le() }],
        "rounded-br": [{ "rounded-br": le() }],
        "rounded-bl": [{ "rounded-bl": le() }],
        "border-w": [{ border: he() }],
        "border-w-x": [{ "border-x": he() }],
        "border-w-y": [{ "border-y": he() }],
        "border-w-s": [{ "border-s": he() }],
        "border-w-e": [{ "border-e": he() }],
        "border-w-bs": [{ "border-bs": he() }],
        "border-w-be": [{ "border-be": he() }],
        "border-w-t": [{ "border-t": he() }],
        "border-w-r": [{ "border-r": he() }],
        "border-w-b": [{ "border-b": he() }],
        "border-w-l": [{ "border-l": he() }],
        "divide-x": [{ "divide-x": he() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": he() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Oe(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Oe(), "hidden", "none"] }],
        "border-color": [{ border: V() }],
        "border-color-x": [{ "border-x": V() }],
        "border-color-y": [{ "border-y": V() }],
        "border-color-s": [{ "border-s": V() }],
        "border-color-e": [{ "border-e": V() }],
        "border-color-bs": [{ "border-bs": V() }],
        "border-color-be": [{ "border-be": V() }],
        "border-color-t": [{ "border-t": V() }],
        "border-color-r": [{ "border-r": V() }],
        "border-color-b": [{ "border-b": V() }],
        "border-color-l": [{ "border-l": V() }],
        "divide-color": [{ divide: V() }],
        "outline-style": [{ outline: [...Oe(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [be, ne, te] }],
        "outline-w": [{ outline: ["", be, Ji, $r] }],
        "outline-color": [{ outline: V() }],
        shadow: [{ shadow: ["", "none", g, Za, Xa] }],
        "shadow-color": [{ shadow: V() }],
        "inset-shadow": [{ "inset-shadow": ["none", y, Za, Xa] }],
        "inset-shadow-color": [{ "inset-shadow": V() }],
        "ring-w": [{ ring: he() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: V() }],
        "ring-offset-w": [{ "ring-offset": [be, $r] }],
        "ring-offset-color": [{ "ring-offset": V() }],
        "inset-ring-w": [{ "inset-ring": he() }],
        "inset-ring-color": [{ "inset-ring": V() }],
        "text-shadow": [{ "text-shadow": ["none", w, Za, Xa] }],
        "text-shadow-color": [{ "text-shadow": V() }],
        opacity: [{ opacity: [be, ne, te] }],
        "mix-blend": [
          { "mix-blend": [...Re(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Re() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [be] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": we() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": we() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": V() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": V() }],
        "mask-image-t-from-pos": [{ "mask-t-from": we() }],
        "mask-image-t-to-pos": [{ "mask-t-to": we() }],
        "mask-image-t-from-color": [{ "mask-t-from": V() }],
        "mask-image-t-to-color": [{ "mask-t-to": V() }],
        "mask-image-r-from-pos": [{ "mask-r-from": we() }],
        "mask-image-r-to-pos": [{ "mask-r-to": we() }],
        "mask-image-r-from-color": [{ "mask-r-from": V() }],
        "mask-image-r-to-color": [{ "mask-r-to": V() }],
        "mask-image-b-from-pos": [{ "mask-b-from": we() }],
        "mask-image-b-to-pos": [{ "mask-b-to": we() }],
        "mask-image-b-from-color": [{ "mask-b-from": V() }],
        "mask-image-b-to-color": [{ "mask-b-to": V() }],
        "mask-image-l-from-pos": [{ "mask-l-from": we() }],
        "mask-image-l-to-pos": [{ "mask-l-to": we() }],
        "mask-image-l-from-color": [{ "mask-l-from": V() }],
        "mask-image-l-to-color": [{ "mask-l-to": V() }],
        "mask-image-x-from-pos": [{ "mask-x-from": we() }],
        "mask-image-x-to-pos": [{ "mask-x-to": we() }],
        "mask-image-x-from-color": [{ "mask-x-from": V() }],
        "mask-image-x-to-color": [{ "mask-x-to": V() }],
        "mask-image-y-from-pos": [{ "mask-y-from": we() }],
        "mask-image-y-to-pos": [{ "mask-y-to": we() }],
        "mask-image-y-from-color": [{ "mask-y-from": V() }],
        "mask-image-y-to-color": [{ "mask-y-to": V() }],
        "mask-image-radial": [{ "mask-radial": [ne, te] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": we() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": we() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": V() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": V() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": M() }],
        "mask-image-conic-pos": [{ "mask-conic": [be] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": we() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": we() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": V() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": V() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: A() }],
        "mask-repeat": [{ mask: z() }],
        "mask-size": [{ mask: ye() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ne, te] }],
        filter: [{ filter: ["", "none", ne, te] }],
        blur: [{ blur: ht() }],
        brightness: [{ brightness: [be, ne, te] }],
        contrast: [{ contrast: [be, ne, te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", T, Za, Xa] }],
        "drop-shadow-color": [{ "drop-shadow": V() }],
        grayscale: [{ grayscale: ["", be, ne, te] }],
        "hue-rotate": [{ "hue-rotate": [be, ne, te] }],
        invert: [{ invert: ["", be, ne, te] }],
        saturate: [{ saturate: [be, ne, te] }],
        sepia: [{ sepia: ["", be, ne, te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ne, te] }],
        "backdrop-blur": [{ "backdrop-blur": ht() }],
        "backdrop-brightness": [{ "backdrop-brightness": [be, ne, te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [be, ne, te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", be, ne, te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [be, ne, te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", be, ne, te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [be, ne, te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [be, ne, te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", be, ne, te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": D() }],
        "border-spacing-x": [{ "border-spacing-x": D() }],
        "border-spacing-y": [{ "border-spacing-y": D() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ne,
              te,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [be, "initial", ne, te] }],
        ease: [{ ease: ["linear", "initial", R, ne, te] }],
        delay: [{ delay: [be, ne, te] }],
        animate: [{ animate: ["none", F, ne, te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [b, ne, te] }],
        "perspective-origin": [{ "perspective-origin": U() }],
        rotate: [{ rotate: Tn() }],
        "rotate-x": [{ "rotate-x": Tn() }],
        "rotate-y": [{ "rotate-y": Tn() }],
        "rotate-z": [{ "rotate-z": Tn() }],
        scale: [{ scale: Rr() }],
        "scale-x": [{ "scale-x": Rr() }],
        "scale-y": [{ "scale-y": Rr() }],
        "scale-z": [{ "scale-z": Rr() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: zn() }],
        "skew-x": [{ "skew-x": zn() }],
        "skew-y": [{ "skew-y": zn() }],
        transform: [{ transform: [ne, te, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: U() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: $n() }],
        "translate-x": [{ "translate-x": $n() }],
        "translate-y": [{ "translate-y": $n() }],
        "translate-z": [{ "translate-z": $n() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: V() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: V() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ne,
              te,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mbs": [{ "scroll-mbs": D() }],
        "scroll-mbe": [{ "scroll-mbe": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pbs": [{ "scroll-pbs": D() }],
        "scroll-pbe": [{ "scroll-pbe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ne, te],
          },
        ],
        fill: [{ fill: ["none", ...V()] }],
        "stroke-w": [{ stroke: [be, Ji, $r, hg] }],
        stroke: [{ stroke: ["none", ...V()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  ik = Ib(sk);
function No(...t) {
  return ik(zv(t));
}
const s0 = B.forwardRef(({ ...t }, e) =>
  S.jsx("div", {
    ref: e,
    className:
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t,
  })
);
s0.displayName = "ToastProvider";
const i0 = B.forwardRef(({ ...t }, e) =>
  S.jsx("div", {
    ref: e,
    className:
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t,
  })
);
i0.displayName = "ToastViewport";
const ok = rb(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  o0 = B.forwardRef(({ className: t, variant: e, ...r }, i) =>
    S.jsx("div", { ref: i, className: No(ok({ variant: e }), t), ...r })
  );
o0.displayName = "Toast";
const ak = B.forwardRef(({ className: t, ...e }, r) =>
  S.jsx("div", {
    ref: r,
    className: No(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t
    ),
    ...e,
  })
);
ak.displayName = "ToastAction";
const a0 = B.forwardRef(({ className: t, ...e }, r) =>
  S.jsx("button", {
    ref: r,
    className: No(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: S.jsx(pb, { className: "h-4 w-4" }),
  })
);
a0.displayName = "ToastClose";
const l0 = B.forwardRef(({ className: t, ...e }, r) =>
  S.jsx("div", { ref: r, className: No("text-sm font-semibold", t), ...e })
);
l0.displayName = "ToastTitle";
const u0 = B.forwardRef(({ className: t, ...e }, r) =>
  S.jsx("div", { ref: r, className: No("text-sm opacity-90", t), ...e })
);
u0.displayName = "ToastDescription";
function lk() {
  const { toasts: t } = nb();
  return S.jsxs(s0, {
    children: [
      t.map(function ({ id: e, title: r, description: i, action: a, ...u }) {
        return S.jsxs(
          o0,
          {
            ...u,
            children: [
              S.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && S.jsx(l0, { children: r }),
                  i && S.jsx(u0, { children: i }),
                ],
              }),
              a,
              S.jsx(a0, {}),
            ],
          },
          e
        );
      }),
      S.jsx(i0, {}),
    ],
  });
}
var Oo = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  uk = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: (t) => clearInterval(t),
  },
  hr,
  af,
  Rv,
  ck =
    ((Rv = class {
      constructor() {
        ue(this, hr, uk);
        ue(this, af, !1);
      }
      setTimeoutProvider(t) {
        Y(this, hr, t);
      }
      setTimeout(t, e) {
        return P(this, hr).setTimeout(t, e);
      }
      clearTimeout(t) {
        P(this, hr).clearTimeout(t);
      }
      setInterval(t, e) {
        return P(this, hr).setInterval(t, e);
      }
      clearInterval(t) {
        P(this, hr).clearInterval(t);
      }
    }),
    (hr = new WeakMap()),
    (af = new WeakMap()),
    Rv),
  Kr = new ck();
function dk(t) {
  setTimeout(t, 0);
}
var ls = typeof window > "u" || "Deno" in globalThis;
function Ot() {}
function fk(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function gd(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function c0(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function br(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Xt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function gg(t, e) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: a,
    predicate: u,
    queryKey: c,
    stale: f,
  } = t;
  if (c) {
    if (i) {
      if (e.queryHash !== df(c, e.options)) return !1;
    } else if (!vo(e.queryKey, c)) return !1;
  }
  if (r !== "all") {
    const h = e.isActive();
    if ((r === "active" && !h) || (r === "inactive" && h)) return !1;
  }
  return !(
    (typeof f == "boolean" && e.isStale() !== f) ||
    (a && a !== e.state.fetchStatus) ||
    (u && !u(e))
  );
}
function yg(t, e) {
  const { exact: r, status: i, predicate: a, mutationKey: u } = t;
  if (u) {
    if (!e.options.mutationKey) return !1;
    if (r) {
      if (yo(e.options.mutationKey) !== yo(u)) return !1;
    } else if (!vo(e.options.mutationKey, u)) return !1;
  }
  return !((i && e.state.status !== i) || (a && !a(e)));
}
function df(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || yo)(t);
}
function yo(t) {
  return JSON.stringify(t, (e, r) =>
    vd(r)
      ? Object.keys(r)
          .sort()
          .reduce((i, a) => ((i[a] = r[a]), i), {})
      : r
  );
}
function vo(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
    ? !1
    : t && e && typeof t == "object" && typeof e == "object"
    ? Object.keys(e).every((r) => vo(t[r], e[r]))
    : !1;
}
var hk = Object.prototype.hasOwnProperty;
function d0(t, e, r = 0) {
  if (t === e) return t;
  if (r > 500) return e;
  const i = vg(t) && vg(e);
  if (!i && !(vd(t) && vd(e))) return e;
  const u = (i ? t : Object.keys(t)).length,
    c = i ? e : Object.keys(e),
    f = c.length,
    h = i ? new Array(f) : {};
  let m = 0;
  for (let g = 0; g < f; g++) {
    const y = i ? g : c[g],
      w = t[y],
      T = e[y];
    if (w === T) {
      (h[y] = w), (i ? g < u : hk.call(t, y)) && m++;
      continue;
    }
    if (
      w === null ||
      T === null ||
      typeof w != "object" ||
      typeof T != "object"
    ) {
      h[y] = T;
      continue;
    }
    const k = d0(w, T, r + 1);
    (h[y] = k), k === w && m++;
  }
  return u === f && m === u ? t : h;
}
function yd(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const r in t) if (t[r] !== e[r]) return !1;
  return !0;
}
function vg(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function vd(t) {
  if (!wg(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const r = e.prototype;
  return !(
    !wg(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function wg(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function pk(t) {
  return new Promise((e) => {
    Kr.setTimeout(e, t);
  });
}
function wd(t, e, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(t, e)
    : r.structuralSharing !== !1
    ? d0(t, e)
    : e;
}
function mk(t, e, r = 0) {
  const i = [...t, e];
  return r && i.length > r ? i.slice(1) : i;
}
function gk(t, e, r = 0) {
  const i = [e, ...t];
  return r && i.length > r ? i.slice(0, -1) : i;
}
var ff = Symbol();
function f0(t, e) {
  return !t.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === ff
    ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
    : t.queryFn;
}
function h0(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function yk(t, e, r) {
  let i = !1,
    a;
  return (
    Object.defineProperty(t, "signal", {
      enumerable: !0,
      get: () => (
        a ?? (a = e()),
        i ||
          ((i = !0),
          a.aborted ? r() : a.addEventListener("abort", r, { once: !0 })),
        a
      ),
    }),
    t
  );
}
var Jr,
  pr,
  Hs,
  Av,
  vk =
    ((Av = class extends Oo {
      constructor() {
        super();
        ue(this, Jr);
        ue(this, pr);
        ue(this, Hs);
        Y(this, Hs, (e) => {
          if (!ls && window.addEventListener) {
            const r = () => e();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, pr) || this.setEventListener(P(this, Hs));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = P(this, pr)) == null || e.call(this), Y(this, pr, void 0));
      }
      setEventListener(e) {
        var r;
        Y(this, Hs, e),
          (r = P(this, pr)) == null || r.call(this),
          Y(
            this,
            pr,
            e((i) => {
              typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
            })
          );
      }
      setFocused(e) {
        P(this, Jr) !== e && (Y(this, Jr, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((r) => {
          r(e);
        });
      }
      isFocused() {
        var e;
        return typeof P(this, Jr) == "boolean"
          ? P(this, Jr)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (Jr = new WeakMap()),
    (pr = new WeakMap()),
    (Hs = new WeakMap()),
    Av),
  hf = new vk();
function xd() {
  let t, e;
  const r = new Promise((a, u) => {
    (t = a), (e = u);
  });
  (r.status = "pending"), r.catch(() => {});
  function i(a) {
    Object.assign(r, a), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (a) => {
      i({ status: "fulfilled", value: a }), t(a);
    }),
    (r.reject = (a) => {
      i({ status: "rejected", reason: a }), e(a);
    }),
    r
  );
}
var wk = dk;
function xk() {
  let t = [],
    e = 0,
    r = (f) => {
      f();
    },
    i = (f) => {
      f();
    },
    a = wk;
  const u = (f) => {
      e
        ? t.push(f)
        : a(() => {
            r(f);
          });
    },
    c = () => {
      const f = t;
      (t = []),
        f.length &&
          a(() => {
            i(() => {
              f.forEach((h) => {
                r(h);
              });
            });
          });
    };
  return {
    batch: (f) => {
      let h;
      e++;
      try {
        h = f();
      } finally {
        e--, e || c();
      }
      return h;
    },
    batchCalls:
      (f) =>
      (...h) => {
        u(() => {
          f(...h);
        });
      },
    schedule: u,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      i = f;
    },
    setScheduler: (f) => {
      a = f;
    },
  };
}
var ft = xk(),
  Ws,
  mr,
  qs,
  Nv,
  Sk =
    ((Nv = class extends Oo {
      constructor() {
        super();
        ue(this, Ws, !0);
        ue(this, mr);
        ue(this, qs);
        Y(this, qs, (e) => {
          if (!ls && window.addEventListener) {
            const r = () => e(!0),
              i = () => e(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", i, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, mr) || this.setEventListener(P(this, qs));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = P(this, mr)) == null || e.call(this), Y(this, mr, void 0));
      }
      setEventListener(e) {
        var r;
        Y(this, qs, e),
          (r = P(this, mr)) == null || r.call(this),
          Y(this, mr, e(this.setOnline.bind(this)));
      }
      setOnline(e) {
        P(this, Ws) !== e &&
          (Y(this, Ws, e),
          this.listeners.forEach((i) => {
            i(e);
          }));
      }
      isOnline() {
        return P(this, Ws);
      }
    }),
    (Ws = new WeakMap()),
    (mr = new WeakMap()),
    (qs = new WeakMap()),
    Nv),
  xl = new Sk();
function bk(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function p0(t) {
  return (t ?? "online") === "online" ? xl.isOnline() : !0;
}
var Sd = class extends Error {
  constructor(t) {
    super("CancelledError"),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
};
function m0(t) {
  let e = !1,
    r = 0,
    i;
  const a = xd(),
    u = () => a.status !== "pending",
    c = (b) => {
      var x;
      if (!u()) {
        const R = new Sd(b);
        w(R), (x = t.onCancel) == null || x.call(t, R);
      }
    },
    f = () => {
      e = !0;
    },
    h = () => {
      e = !1;
    },
    m = () =>
      hf.isFocused() &&
      (t.networkMode === "always" || xl.isOnline()) &&
      t.canRun(),
    g = () => p0(t.networkMode) && t.canRun(),
    y = (b) => {
      u() || (i == null || i(), a.resolve(b));
    },
    w = (b) => {
      u() || (i == null || i(), a.reject(b));
    },
    T = () =>
      new Promise((b) => {
        var x;
        (i = (R) => {
          (u() || m()) && b(R);
        }),
          (x = t.onPause) == null || x.call(t);
      }).then(() => {
        var b;
        (i = void 0), u() || (b = t.onContinue) == null || b.call(t);
      }),
    k = () => {
      if (u()) return;
      let b;
      const x = r === 0 ? t.initialPromise : void 0;
      try {
        b = x ?? t.fn();
      } catch (R) {
        b = Promise.reject(R);
      }
      Promise.resolve(b)
        .then(y)
        .catch((R) => {
          var Q;
          if (u()) return;
          const F = t.retry ?? (ls ? 0 : 3),
            L = t.retryDelay ?? bk,
            M = typeof L == "function" ? L(r, R) : L,
            U =
              F === !0 ||
              (typeof F == "number" && r < F) ||
              (typeof F == "function" && F(r, R));
          if (e || !U) {
            w(R);
            return;
          }
          r++,
            (Q = t.onFail) == null || Q.call(t, r, R),
            pk(M)
              .then(() => (m() ? void 0 : T()))
              .then(() => {
                e ? w(R) : k();
              });
        });
    };
  return {
    promise: a,
    status: () => a.status,
    cancel: c,
    continue: () => (i == null || i(), a),
    cancelRetry: f,
    continueRetry: h,
    canStart: g,
    start: () => (g() ? k() : T().then(k), a),
  };
}
var Yr,
  Ov,
  g0 =
    ((Ov = class {
      constructor() {
        ue(this, Yr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          gd(this.gcTime) &&
            Y(
              this,
              Yr,
              Kr.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (ls ? 1 / 0 : 300 * 1e3));
      }
      clearGcTimeout() {
        P(this, Yr) && (Kr.clearTimeout(P(this, Yr)), Y(this, Yr, void 0));
      }
    }),
    (Yr = new WeakMap()),
    Ov),
  Xr,
  Ks,
  Yt,
  Zr,
  at,
  To,
  es,
  un,
  Mn,
  jv,
  kk =
    ((jv = class extends g0 {
      constructor(e) {
        super();
        ue(this, un);
        ue(this, Xr);
        ue(this, Ks);
        ue(this, Yt);
        ue(this, Zr);
        ue(this, at);
        ue(this, To);
        ue(this, es);
        Y(this, es, !1),
          Y(this, To, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          Y(this, Zr, e.client),
          Y(this, Yt, P(this, Zr).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          Y(this, Xr, Sg(this.options)),
          (this.state = e.state ?? P(this, Xr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = P(this, at)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        if (
          ((this.options = { ...P(this, To), ...e }),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const r = Sg(this.options);
          r.data !== void 0 &&
            (this.setState(xg(r.data, r.dataUpdatedAt)), Y(this, Xr, r));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, Yt).remove(this);
      }
      setData(e, r) {
        const i = wd(this.state.data, e, this.options);
        return (
          Ee(this, un, Mn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          i
        );
      }
      setState(e, r) {
        Ee(this, un, Mn).call(this, {
          type: "setState",
          state: e,
          setStateOptions: r,
        });
      }
      cancel(e) {
        var i, a;
        const r = (i = P(this, at)) == null ? void 0 : i.promise;
        return (
          (a = P(this, at)) == null || a.cancel(e),
          r ? r.then(Ot).catch(Ot) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, Xr));
      }
      isActive() {
        return this.observers.some((e) => Xt(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === ff ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (e) => br(e.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return this.state.data === void 0
          ? !0
          : e === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !c0(this.state.dataUpdatedAt, e);
      }
      onFocus() {
        var r;
        const e = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (r = P(this, at)) == null || r.continue();
      }
      onOnline() {
        var r;
        const e = this.observers.find((i) => i.shouldFetchOnReconnect());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (r = P(this, at)) == null || r.continue();
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          P(this, Yt).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((r) => r !== e)),
          this.observers.length ||
            (P(this, at) &&
              (P(this, es)
                ? P(this, at).cancel({ revert: !0 })
                : P(this, at).cancelRetry()),
            this.scheduleGc()),
          P(this, Yt).notify({
            type: "observerRemoved",
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ee(this, un, Mn).call(this, { type: "invalidate" });
      }
      async fetch(e, r) {
        var h, m, g, y, w, T, k, b, x, R, F, L;
        if (
          this.state.fetchStatus !== "idle" &&
          ((h = P(this, at)) == null ? void 0 : h.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, at))
            return P(this, at).continueRetry(), P(this, at).promise;
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const M = this.observers.find((U) => U.options.queryFn);
          M && this.setOptions(M.options);
        }
        const i = new AbortController(),
          a = (M) => {
            Object.defineProperty(M, "signal", {
              enumerable: !0,
              get: () => (Y(this, es, !0), i.signal),
            });
          },
          u = () => {
            const M = f0(this.options, r),
              Q = (() => {
                const J = {
                  client: P(this, Zr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return a(J), J;
              })();
            return (
              Y(this, es, !1),
              this.options.persister ? this.options.persister(M, Q, this) : M(Q)
            );
          },
          f = (() => {
            const M = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, Zr),
              state: this.state,
              fetchFn: u,
            };
            return a(M), M;
          })();
        (m = this.options.behavior) == null || m.onFetch(f, this),
          Y(this, Ks, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((g = f.fetchOptions) == null ? void 0 : g.meta)) &&
            Ee(this, un, Mn).call(this, {
              type: "fetch",
              meta: (y = f.fetchOptions) == null ? void 0 : y.meta,
            }),
          Y(
            this,
            at,
            m0({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: f.fetchFn,
              onCancel: (M) => {
                M instanceof Sd &&
                  M.revert &&
                  this.setState({ ...P(this, Ks), fetchStatus: "idle" }),
                  i.abort();
              },
              onFail: (M, U) => {
                Ee(this, un, Mn).call(this, {
                  type: "failed",
                  failureCount: M,
                  error: U,
                });
              },
              onPause: () => {
                Ee(this, un, Mn).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ee(this, un, Mn).call(this, { type: "continue" });
              },
              retry: f.options.retry,
              retryDelay: f.options.retryDelay,
              networkMode: f.options.networkMode,
              canRun: () => !0,
            })
          );
        try {
          const M = await P(this, at).start();
          if (M === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(M),
            (T = (w = P(this, Yt).config).onSuccess) == null ||
              T.call(w, M, this),
            (b = (k = P(this, Yt).config).onSettled) == null ||
              b.call(k, M, this.state.error, this),
            M
          );
        } catch (M) {
          if (M instanceof Sd) {
            if (M.silent) return P(this, at).promise;
            if (M.revert) {
              if (this.state.data === void 0) throw M;
              return this.state.data;
            }
          }
          throw (
            (Ee(this, un, Mn).call(this, { type: "error", error: M }),
            (R = (x = P(this, Yt).config).onError) == null ||
              R.call(x, M, this),
            (L = (F = P(this, Yt).config).onSettled) == null ||
              L.call(F, this.state.data, M, this),
            M)
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (Xr = new WeakMap()),
    (Ks = new WeakMap()),
    (Yt = new WeakMap()),
    (Zr = new WeakMap()),
    (at = new WeakMap()),
    (To = new WeakMap()),
    (es = new WeakMap()),
    (un = new WeakSet()),
    (Mn = function (e) {
      const r = (i) => {
        switch (e.type) {
          case "failed":
            return {
              ...i,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...i, fetchStatus: "paused" };
          case "continue":
            return { ...i, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...i,
              ...y0(i.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            const a = {
              ...i,
              ...xg(e.data, e.dataUpdatedAt),
              dataUpdateCount: i.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return Y(this, Ks, e.manual ? a : void 0), a;
          case "error":
            const u = e.error;
            return {
              ...i,
              error: u,
              errorUpdateCount: i.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: i.fetchFailureCount + 1,
              fetchFailureReason: u,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...i, isInvalidated: !0 };
          case "setState":
            return { ...i, ...e.state };
        }
      };
      (this.state = r(this.state)),
        ft.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            P(this, Yt).notify({ query: this, type: "updated", action: e });
        });
    }),
    jv);
function y0(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: p0(e.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function xg(t, e) {
  return {
    data: t,
    dataUpdatedAt: e ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Sg(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    r = e !== void 0,
    i = r
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Nt,
  Te,
  Co,
  Et,
  ts,
  Qs,
  Dn,
  gr,
  Po,
  Gs,
  Js,
  ns,
  rs,
  yr,
  Ys,
  je,
  no,
  bd,
  kd,
  Ed,
  Td,
  Cd,
  Pd,
  _d,
  v0,
  Lv,
  Ek =
    ((Lv = class extends Oo {
      constructor(e, r) {
        super();
        ue(this, je);
        ue(this, Nt);
        ue(this, Te);
        ue(this, Co);
        ue(this, Et);
        ue(this, ts);
        ue(this, Qs);
        ue(this, Dn);
        ue(this, gr);
        ue(this, Po);
        ue(this, Gs);
        ue(this, Js);
        ue(this, ns);
        ue(this, rs);
        ue(this, yr);
        ue(this, Ys, new Set());
        (this.options = r),
          Y(this, Nt, e),
          Y(this, gr, null),
          Y(this, Dn, xd()),
          this.bindMethods(),
          this.setOptions(r);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (P(this, Te).addObserver(this),
          bg(P(this, Te), this.options)
            ? Ee(this, je, no).call(this)
            : this.updateResult(),
          Ee(this, je, Td).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Rd(P(this, Te), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Rd(P(this, Te), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          Ee(this, je, Cd).call(this),
          Ee(this, je, Pd).call(this),
          P(this, Te).removeObserver(this);
      }
      setOptions(e) {
        const r = this.options,
          i = P(this, Te);
        if (
          ((this.options = P(this, Nt).defaultQueryOptions(e)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Xt(this.options.enabled, P(this, Te)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        Ee(this, je, _d).call(this),
          P(this, Te).setOptions(this.options),
          r._defaulted &&
            !yd(this.options, r) &&
            P(this, Nt)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: P(this, Te),
                observer: this,
              });
        const a = this.hasListeners();
        a && kg(P(this, Te), i, this.options, r) && Ee(this, je, no).call(this),
          this.updateResult(),
          a &&
            (P(this, Te) !== i ||
              Xt(this.options.enabled, P(this, Te)) !==
                Xt(r.enabled, P(this, Te)) ||
              br(this.options.staleTime, P(this, Te)) !==
                br(r.staleTime, P(this, Te))) &&
            Ee(this, je, bd).call(this);
        const u = Ee(this, je, kd).call(this);
        a &&
          (P(this, Te) !== i ||
            Xt(this.options.enabled, P(this, Te)) !==
              Xt(r.enabled, P(this, Te)) ||
            u !== P(this, yr)) &&
          Ee(this, je, Ed).call(this, u);
      }
      getOptimisticResult(e) {
        const r = P(this, Nt).getQueryCache().build(P(this, Nt), e),
          i = this.createResult(r, e);
        return (
          Ck(this, i) &&
            (Y(this, Et, i),
            Y(this, Qs, this.options),
            Y(this, ts, P(this, Te).state)),
          i
        );
      }
      getCurrentResult() {
        return P(this, Et);
      }
      trackResult(e, r) {
        return new Proxy(e, {
          get: (i, a) => (
            this.trackProp(a),
            r == null || r(a),
            a === "promise" &&
              (this.trackProp("data"),
              !this.options.experimental_prefetchInRender &&
                P(this, Dn).status === "pending" &&
                P(this, Dn).reject(
                  new Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                )),
            Reflect.get(i, a)
          ),
        });
      }
      trackProp(e) {
        P(this, Ys).add(e);
      }
      getCurrentQuery() {
        return P(this, Te);
      }
      refetch({ ...e } = {}) {
        return this.fetch({ ...e });
      }
      fetchOptimistic(e) {
        const r = P(this, Nt).defaultQueryOptions(e),
          i = P(this, Nt).getQueryCache().build(P(this, Nt), r);
        return i.fetch().then(() => this.createResult(i, r));
      }
      fetch(e) {
        return Ee(this, je, no)
          .call(this, { ...e, cancelRefetch: e.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), P(this, Et)));
      }
      createResult(e, r) {
        var X;
        const i = P(this, Te),
          a = this.options,
          u = P(this, Et),
          c = P(this, ts),
          f = P(this, Qs),
          m = e !== i ? e.state : P(this, Co),
          { state: g } = e;
        let y = { ...g },
          w = !1,
          T;
        if (r._optimisticResults) {
          const me = this.hasListeners(),
            de = !me && bg(e, r),
            Pe = me && kg(e, i, r, a);
          (de || Pe) && (y = { ...y, ...y0(g.data, e.options) }),
            r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle");
        }
        let { error: k, errorUpdatedAt: b, status: x } = y;
        T = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && T === void 0 && x === "pending") {
          let me;
          u != null &&
          u.isPlaceholderData &&
          r.placeholderData === (f == null ? void 0 : f.placeholderData)
            ? ((me = u.data), (R = !0))
            : (me =
                typeof r.placeholderData == "function"
                  ? r.placeholderData(
                      (X = P(this, Js)) == null ? void 0 : X.state.data,
                      P(this, Js)
                    )
                  : r.placeholderData),
            me !== void 0 &&
              ((x = "success"),
              (T = wd(u == null ? void 0 : u.data, me, r)),
              (w = !0));
        }
        if (r.select && T !== void 0 && !R)
          if (
            u &&
            T === (c == null ? void 0 : c.data) &&
            r.select === P(this, Po)
          )
            T = P(this, Gs);
          else
            try {
              Y(this, Po, r.select),
                (T = r.select(T)),
                (T = wd(u == null ? void 0 : u.data, T, r)),
                Y(this, Gs, T),
                Y(this, gr, null);
            } catch (me) {
              Y(this, gr, me);
            }
        P(this, gr) &&
          ((k = P(this, gr)),
          (T = P(this, Gs)),
          (b = Date.now()),
          (x = "error"));
        const F = y.fetchStatus === "fetching",
          L = x === "pending",
          M = x === "error",
          U = L && F,
          Q = T !== void 0,
          D = {
            status: x,
            fetchStatus: y.fetchStatus,
            isPending: L,
            isSuccess: x === "success",
            isError: M,
            isInitialLoading: U,
            isLoading: U,
            data: T,
            dataUpdatedAt: y.dataUpdatedAt,
            error: k,
            errorUpdatedAt: b,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount:
              y.dataUpdateCount > m.dataUpdateCount ||
              y.errorUpdateCount > m.errorUpdateCount,
            isFetching: F,
            isRefetching: F && !L,
            isLoadingError: M && !Q,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: M && Q,
            isStale: pf(e, r),
            refetch: this.refetch,
            promise: P(this, Dn),
            isEnabled: Xt(r.enabled, e) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const me = D.data !== void 0,
            de = D.status === "error" && !me,
            Pe = (Ie) => {
              de ? Ie.reject(D.error) : me && Ie.resolve(D.data);
            },
            Me = () => {
              const Ie = Y(this, Dn, (D.promise = xd()));
              Pe(Ie);
            },
            Ne = P(this, Dn);
          switch (Ne.status) {
            case "pending":
              e.queryHash === i.queryHash && Pe(Ne);
              break;
            case "fulfilled":
              (de || D.data !== Ne.value) && Me();
              break;
            case "rejected":
              (!de || D.error !== Ne.reason) && Me();
              break;
          }
        }
        return D;
      }
      updateResult() {
        const e = P(this, Et),
          r = this.createResult(P(this, Te), this.options);
        if (
          (Y(this, ts, P(this, Te).state),
          Y(this, Qs, this.options),
          P(this, ts).data !== void 0 && Y(this, Js, P(this, Te)),
          yd(r, e))
        )
          return;
        Y(this, Et, r);
        const i = () => {
          if (!e) return !0;
          const { notifyOnChangeProps: a } = this.options,
            u = typeof a == "function" ? a() : a;
          if (u === "all" || (!u && !P(this, Ys).size)) return !0;
          const c = new Set(u ?? P(this, Ys));
          return (
            this.options.throwOnError && c.add("error"),
            Object.keys(P(this, Et)).some((f) => {
              const h = f;
              return P(this, Et)[h] !== e[h] && c.has(h);
            })
          );
        };
        Ee(this, je, v0).call(this, { listeners: i() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Ee(this, je, Td).call(this);
      }
    }),
    (Nt = new WeakMap()),
    (Te = new WeakMap()),
    (Co = new WeakMap()),
    (Et = new WeakMap()),
    (ts = new WeakMap()),
    (Qs = new WeakMap()),
    (Dn = new WeakMap()),
    (gr = new WeakMap()),
    (Po = new WeakMap()),
    (Gs = new WeakMap()),
    (Js = new WeakMap()),
    (ns = new WeakMap()),
    (rs = new WeakMap()),
    (yr = new WeakMap()),
    (Ys = new WeakMap()),
    (je = new WeakSet()),
    (no = function (e) {
      Ee(this, je, _d).call(this);
      let r = P(this, Te).fetch(this.options, e);
      return (e != null && e.throwOnError) || (r = r.catch(Ot)), r;
    }),
    (bd = function () {
      Ee(this, je, Cd).call(this);
      const e = br(this.options.staleTime, P(this, Te));
      if (ls || P(this, Et).isStale || !gd(e)) return;
      const i = c0(P(this, Et).dataUpdatedAt, e) + 1;
      Y(
        this,
        ns,
        Kr.setTimeout(() => {
          P(this, Et).isStale || this.updateResult();
        }, i)
      );
    }),
    (kd = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(P(this, Te))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Ed = function (e) {
      Ee(this, je, Pd).call(this),
        Y(this, yr, e),
        !(
          ls ||
          Xt(this.options.enabled, P(this, Te)) === !1 ||
          !gd(P(this, yr)) ||
          P(this, yr) === 0
        ) &&
          Y(
            this,
            rs,
            Kr.setInterval(() => {
              (this.options.refetchIntervalInBackground || hf.isFocused()) &&
                Ee(this, je, no).call(this);
            }, P(this, yr))
          );
    }),
    (Td = function () {
      Ee(this, je, bd).call(this),
        Ee(this, je, Ed).call(this, Ee(this, je, kd).call(this));
    }),
    (Cd = function () {
      P(this, ns) && (Kr.clearTimeout(P(this, ns)), Y(this, ns, void 0));
    }),
    (Pd = function () {
      P(this, rs) && (Kr.clearInterval(P(this, rs)), Y(this, rs, void 0));
    }),
    (_d = function () {
      const e = P(this, Nt).getQueryCache().build(P(this, Nt), this.options);
      if (e === P(this, Te)) return;
      const r = P(this, Te);
      Y(this, Te, e),
        Y(this, Co, e.state),
        this.hasListeners() &&
          (r == null || r.removeObserver(this), e.addObserver(this));
    }),
    (v0 = function (e) {
      ft.batch(() => {
        e.listeners &&
          this.listeners.forEach((r) => {
            r(P(this, Et));
          }),
          P(this, Nt)
            .getQueryCache()
            .notify({ query: P(this, Te), type: "observerResultsUpdated" });
      });
    }),
    Lv);
function Tk(t, e) {
  return (
    Xt(e.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === "error" && e.retryOnMount === !1)
  );
}
function bg(t, e) {
  return Tk(t, e) || (t.state.data !== void 0 && Rd(t, e, e.refetchOnMount));
}
function Rd(t, e, r) {
  if (Xt(e.enabled, t) !== !1 && br(e.staleTime, t) !== "static") {
    const i = typeof r == "function" ? r(t) : r;
    return i === "always" || (i !== !1 && pf(t, e));
  }
  return !1;
}
function kg(t, e, r, i) {
  return (
    (t !== e || Xt(i.enabled, t) === !1) &&
    (!r.suspense || t.state.status !== "error") &&
    pf(t, r)
  );
}
function pf(t, e) {
  return Xt(e.enabled, t) !== !1 && t.isStaleByTime(br(e.staleTime, t));
}
function Ck(t, e) {
  return !yd(t.getCurrentResult(), e);
}
function Eg(t) {
  return {
    onFetch: (e, r) => {
      var g, y, w, T, k;
      const i = e.options,
        a =
          (w =
            (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null
              ? void 0
              : y.fetchMore) == null
            ? void 0
            : w.direction,
        u = ((T = e.state.data) == null ? void 0 : T.pages) || [],
        c = ((k = e.state.data) == null ? void 0 : k.pageParams) || [];
      let f = { pages: [], pageParams: [] },
        h = 0;
      const m = async () => {
        let b = !1;
        const x = (L) => {
            yk(
              L,
              () => e.signal,
              () => (b = !0)
            );
          },
          R = f0(e.options, e.fetchOptions),
          F = async (L, M, U) => {
            if (b) return Promise.reject();
            if (M == null && L.pages.length) return Promise.resolve(L);
            const J = (() => {
                const de = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: M,
                  direction: U ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return x(de), de;
              })(),
              D = await R(J),
              { maxPages: X } = e.options,
              me = U ? gk : mk;
            return {
              pages: me(L.pages, D, X),
              pageParams: me(L.pageParams, M, X),
            };
          };
        if (a && u.length) {
          const L = a === "backward",
            M = L ? Pk : Tg,
            U = { pages: u, pageParams: c },
            Q = M(i, U);
          f = await F(U, Q, L);
        } else {
          const L = t ?? u.length;
          do {
            const M = h === 0 ? c[0] ?? i.initialPageParam : Tg(i, f);
            if (h > 0 && M == null) break;
            (f = await F(f, M)), h++;
          } while (h < L);
        }
        return f;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var b, x;
            return (x = (b = e.options).persister) == null
              ? void 0
              : x.call(
                  b,
                  m,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  r
                );
          })
        : (e.fetchFn = m);
    },
  };
}
function Tg(t, { pages: e, pageParams: r }) {
  const i = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0;
}
function Pk(t, { pages: e, pageParams: r }) {
  var i;
  return e.length > 0
    ? (i = t.getPreviousPageParam) == null
      ? void 0
      : i.call(t, e[0], e, r[0], r)
    : void 0;
}
var _o,
  vn,
  vt,
  ss,
  wn,
  dr,
  Mv,
  _k =
    ((Mv = class extends g0 {
      constructor(e) {
        super();
        ue(this, wn);
        ue(this, _o);
        ue(this, vn);
        ue(this, vt);
        ue(this, ss);
        Y(this, _o, e.client),
          (this.mutationId = e.mutationId),
          Y(this, vt, e.mutationCache),
          Y(this, vn, []),
          (this.state = e.state || Rk()),
          this.setOptions(e.options),
          this.scheduleGc();
      }
      setOptions(e) {
        (this.options = e), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        P(this, vn).includes(e) ||
          (P(this, vn).push(e),
          this.clearGcTimeout(),
          P(this, vt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        Y(
          this,
          vn,
          P(this, vn).filter((r) => r !== e)
        ),
          this.scheduleGc(),
          P(this, vt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          });
      }
      optionalRemove() {
        P(this, vn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, vt).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = P(this, ss)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var c, f, h, m, g, y, w, T, k, b, x, R, F, L, M, U, Q, J;
        const r = () => {
            Ee(this, wn, dr).call(this, { type: "continue" });
          },
          i = {
            client: P(this, _o),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        Y(
          this,
          ss,
          m0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e, i)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (D, X) => {
              Ee(this, wn, dr).call(this, {
                type: "failed",
                failureCount: D,
                error: X,
              });
            },
            onPause: () => {
              Ee(this, wn, dr).call(this, { type: "pause" });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, vt).canRun(this),
          })
        );
        const a = this.state.status === "pending",
          u = !P(this, ss).canStart();
        try {
          if (a) r();
          else {
            Ee(this, wn, dr).call(this, {
              type: "pending",
              variables: e,
              isPaused: u,
            }),
              P(this, vt).config.onMutate &&
                (await P(this, vt).config.onMutate(e, this, i));
            const X = await ((f = (c = this.options).onMutate) == null
              ? void 0
              : f.call(c, e, i));
            X !== this.state.context &&
              Ee(this, wn, dr).call(this, {
                type: "pending",
                context: X,
                variables: e,
                isPaused: u,
              });
          }
          const D = await P(this, ss).start();
          return (
            await ((m = (h = P(this, vt).config).onSuccess) == null
              ? void 0
              : m.call(h, D, e, this.state.context, this, i)),
            await ((y = (g = this.options).onSuccess) == null
              ? void 0
              : y.call(g, D, e, this.state.context, i)),
            await ((T = (w = P(this, vt).config).onSettled) == null
              ? void 0
              : T.call(
                  w,
                  D,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  i
                )),
            await ((b = (k = this.options).onSettled) == null
              ? void 0
              : b.call(k, D, null, e, this.state.context, i)),
            Ee(this, wn, dr).call(this, { type: "success", data: D }),
            D
          );
        } catch (D) {
          try {
            await ((R = (x = P(this, vt).config).onError) == null
              ? void 0
              : R.call(x, D, e, this.state.context, this, i));
          } catch (X) {
            Promise.reject(X);
          }
          try {
            await ((L = (F = this.options).onError) == null
              ? void 0
              : L.call(F, D, e, this.state.context, i));
          } catch (X) {
            Promise.reject(X);
          }
          try {
            await ((U = (M = P(this, vt).config).onSettled) == null
              ? void 0
              : U.call(
                  M,
                  void 0,
                  D,
                  this.state.variables,
                  this.state.context,
                  this,
                  i
                ));
          } catch (X) {
            Promise.reject(X);
          }
          try {
            await ((J = (Q = this.options).onSettled) == null
              ? void 0
              : J.call(Q, void 0, D, e, this.state.context, i));
          } catch (X) {
            Promise.reject(X);
          }
          throw (Ee(this, wn, dr).call(this, { type: "error", error: D }), D);
        } finally {
          P(this, vt).runNext(this);
        }
      }
    }),
    (_o = new WeakMap()),
    (vn = new WeakMap()),
    (vt = new WeakMap()),
    (ss = new WeakMap()),
    (wn = new WeakSet()),
    (dr = function (e) {
      const r = (i) => {
        switch (e.type) {
          case "failed":
            return {
              ...i,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...i, isPaused: !0 };
          case "continue":
            return { ...i, isPaused: !1 };
          case "pending":
            return {
              ...i,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: "pending",
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...i,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...i,
              data: void 0,
              error: e.error,
              failureCount: i.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        ft.batch(() => {
          P(this, vn).forEach((i) => {
            i.onMutationUpdate(e);
          }),
            P(this, vt).notify({ mutation: this, type: "updated", action: e });
        });
    }),
    Mv);
function Rk() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var In,
  cn,
  Ro,
  Dv,
  Ak =
    ((Dv = class extends Oo {
      constructor(e = {}) {
        super();
        ue(this, In);
        ue(this, cn);
        ue(this, Ro);
        (this.config = e),
          Y(this, In, new Set()),
          Y(this, cn, new Map()),
          Y(this, Ro, 0);
      }
      build(e, r, i) {
        const a = new _k({
          client: e,
          mutationCache: this,
          mutationId: ++Ja(this, Ro)._,
          options: e.defaultMutationOptions(r),
          state: i,
        });
        return this.add(a), a;
      }
      add(e) {
        P(this, In).add(e);
        const r = el(e);
        if (typeof r == "string") {
          const i = P(this, cn).get(r);
          i ? i.push(e) : P(this, cn).set(r, [e]);
        }
        this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        if (P(this, In).delete(e)) {
          const r = el(e);
          if (typeof r == "string") {
            const i = P(this, cn).get(r);
            if (i)
              if (i.length > 1) {
                const a = i.indexOf(e);
                a !== -1 && i.splice(a, 1);
              } else i[0] === e && P(this, cn).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        const r = el(e);
        if (typeof r == "string") {
          const i = P(this, cn).get(r),
            a =
              i == null ? void 0 : i.find((u) => u.state.status === "pending");
          return !a || a === e;
        } else return !0;
      }
      runNext(e) {
        var i;
        const r = el(e);
        if (typeof r == "string") {
          const a =
            (i = P(this, cn).get(r)) == null
              ? void 0
              : i.find((u) => u !== e && u.state.isPaused);
          return (a == null ? void 0 : a.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ft.batch(() => {
          P(this, In).forEach((e) => {
            this.notify({ type: "removed", mutation: e });
          }),
            P(this, In).clear(),
            P(this, cn).clear();
        });
      }
      getAll() {
        return Array.from(P(this, In));
      }
      find(e) {
        const r = { exact: !0, ...e };
        return this.getAll().find((i) => yg(r, i));
      }
      findAll(e = {}) {
        return this.getAll().filter((r) => yg(e, r));
      }
      notify(e) {
        ft.batch(() => {
          this.listeners.forEach((r) => {
            r(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((r) => r.state.isPaused);
        return ft.batch(() =>
          Promise.all(e.map((r) => r.continue().catch(Ot)))
        );
      }
    }),
    (In = new WeakMap()),
    (cn = new WeakMap()),
    (Ro = new WeakMap()),
    Dv);
function el(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
var xn,
  Iv,
  Nk =
    ((Iv = class extends Oo {
      constructor(e = {}) {
        super();
        ue(this, xn);
        (this.config = e), Y(this, xn, new Map());
      }
      build(e, r, i) {
        const a = r.queryKey,
          u = r.queryHash ?? df(a, r);
        let c = this.get(u);
        return (
          c ||
            ((c = new kk({
              client: e,
              queryKey: a,
              queryHash: u,
              options: e.defaultQueryOptions(r),
              state: i,
              defaultOptions: e.getQueryDefaults(a),
            })),
            this.add(c)),
          c
        );
      }
      add(e) {
        P(this, xn).has(e.queryHash) ||
          (P(this, xn).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const r = P(this, xn).get(e.queryHash);
        r &&
          (e.destroy(),
          r === e && P(this, xn).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        ft.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return P(this, xn).get(e);
      }
      getAll() {
        return [...P(this, xn).values()];
      }
      find(e) {
        const r = { exact: !0, ...e };
        return this.getAll().find((i) => gg(r, i));
      }
      findAll(e = {}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter((i) => gg(e, i)) : r;
      }
      notify(e) {
        ft.batch(() => {
          this.listeners.forEach((r) => {
            r(e);
          });
        });
      }
      onFocus() {
        ft.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        ft.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (xn = new WeakMap()),
    Iv),
  Ke,
  vr,
  wr,
  Xs,
  Zs,
  xr,
  ei,
  ti,
  Fv,
  Ok =
    ((Fv = class {
      constructor(t = {}) {
        ue(this, Ke);
        ue(this, vr);
        ue(this, wr);
        ue(this, Xs);
        ue(this, Zs);
        ue(this, xr);
        ue(this, ei);
        ue(this, ti);
        Y(this, Ke, t.queryCache || new Nk()),
          Y(this, vr, t.mutationCache || new Ak()),
          Y(this, wr, t.defaultOptions || {}),
          Y(this, Xs, new Map()),
          Y(this, Zs, new Map()),
          Y(this, xr, 0);
      }
      mount() {
        Ja(this, xr)._++,
          P(this, xr) === 1 &&
            (Y(
              this,
              ei,
              hf.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), P(this, Ke).onFocus());
              })
            ),
            Y(
              this,
              ti,
              xl.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), P(this, Ke).onOnline());
              })
            ));
      }
      unmount() {
        var t, e;
        Ja(this, xr)._--,
          P(this, xr) === 0 &&
            ((t = P(this, ei)) == null || t.call(this),
            Y(this, ei, void 0),
            (e = P(this, ti)) == null || e.call(this),
            Y(this, ti, void 0));
      }
      isFetching(t) {
        return P(this, Ke).findAll({ ...t, fetchStatus: "fetching" }).length;
      }
      isMutating(t) {
        return P(this, vr).findAll({ ...t, status: "pending" }).length;
      }
      getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (r = P(this, Ke).get(e.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(t) {
        const e = this.defaultQueryOptions(t),
          r = P(this, Ke).build(this, e),
          i = r.state.data;
        return i === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale &&
              r.isStaleByTime(br(e.staleTime, r)) &&
              this.prefetchQuery(e),
            Promise.resolve(i));
      }
      getQueriesData(t) {
        return P(this, Ke)
          .findAll(t)
          .map(({ queryKey: e, state: r }) => {
            const i = r.data;
            return [e, i];
          });
      }
      setQueryData(t, e, r) {
        const i = this.defaultQueryOptions({ queryKey: t }),
          a = P(this, Ke).get(i.queryHash),
          u = a == null ? void 0 : a.state.data,
          c = fk(e, u);
        if (c !== void 0)
          return P(this, Ke)
            .build(this, i)
            .setData(c, { ...r, manual: !0 });
      }
      setQueriesData(t, e, r) {
        return ft.batch(() =>
          P(this, Ke)
            .findAll(t)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, e, r)])
        );
      }
      getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (r = P(this, Ke).get(e.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(t) {
        const e = P(this, Ke);
        ft.batch(() => {
          e.findAll(t).forEach((r) => {
            e.remove(r);
          });
        });
      }
      resetQueries(t, e) {
        const r = P(this, Ke);
        return ft.batch(
          () => (
            r.findAll(t).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries({ type: "active", ...t }, e)
          )
        );
      }
      cancelQueries(t, e = {}) {
        const r = { revert: !0, ...e },
          i = ft.batch(() =>
            P(this, Ke)
              .findAll(t)
              .map((a) => a.cancel(r))
          );
        return Promise.all(i).then(Ot).catch(Ot);
      }
      invalidateQueries(t, e = {}) {
        return ft.batch(
          () => (
            P(this, Ke)
              .findAll(t)
              .forEach((r) => {
                r.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...t,
                    type:
                      (t == null ? void 0 : t.refetchType) ??
                      (t == null ? void 0 : t.type) ??
                      "active",
                  },
                  e
                )
          )
        );
      }
      refetchQueries(t, e = {}) {
        const r = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          i = ft.batch(() =>
            P(this, Ke)
              .findAll(t)
              .filter((a) => !a.isDisabled() && !a.isStatic())
              .map((a) => {
                let u = a.fetch(void 0, r);
                return (
                  r.throwOnError || (u = u.catch(Ot)),
                  a.state.fetchStatus === "paused" ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(i).then(Ot);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = P(this, Ke).build(this, e);
        return r.isStaleByTime(br(e.staleTime, r))
          ? r.fetch(e)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(Ot).catch(Ot);
      }
      fetchInfiniteQuery(t) {
        return (t.behavior = Eg(t.pages)), this.fetchQuery(t);
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Ot).catch(Ot);
      }
      ensureInfiniteQueryData(t) {
        return (t.behavior = Eg(t.pages)), this.ensureQueryData(t);
      }
      resumePausedMutations() {
        return xl.isOnline()
          ? P(this, vr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, Ke);
      }
      getMutationCache() {
        return P(this, vr);
      }
      getDefaultOptions() {
        return P(this, wr);
      }
      setDefaultOptions(t) {
        Y(this, wr, t);
      }
      setQueryDefaults(t, e) {
        P(this, Xs).set(yo(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...P(this, Xs).values()],
          r = {};
        return (
          e.forEach((i) => {
            vo(t, i.queryKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(t, e) {
        P(this, Zs).set(yo(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...P(this, Zs).values()],
          r = {};
        return (
          e.forEach((i) => {
            vo(t, i.mutationKey) && Object.assign(r, i.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
          ...P(this, wr).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = df(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
          e.queryFn === ff && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...P(this, wr).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, Ke).clear(), P(this, vr).clear();
      }
    }),
    (Ke = new WeakMap()),
    (vr = new WeakMap()),
    (wr = new WeakMap()),
    (Xs = new WeakMap()),
    (Zs = new WeakMap()),
    (xr = new WeakMap()),
    (ei = new WeakMap()),
    (ti = new WeakMap()),
    Fv),
  w0 = B.createContext(void 0),
  jk = (t) => {
    const e = B.useContext(w0);
    if (!e)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  Lk = ({ client: t, children: e }) => (
    B.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    S.jsx(w0.Provider, { value: t, children: e })
  ),
  x0 = B.createContext(!1),
  Mk = () => B.useContext(x0);
x0.Provider;
function Dk() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var Ik = B.createContext(Dk()),
  Fk = () => B.useContext(Ik),
  Vk = (t, e, r) => {
    const i =
      r != null && r.state.error && typeof t.throwOnError == "function"
        ? h0(t.throwOnError, [r.state.error, r])
        : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) &&
      (e.isReset() || (t.retryOnMount = !1));
  },
  Bk = (t) => {
    B.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  Uk = ({
    result: t,
    errorResetBoundary: e,
    throwOnError: r,
    query: i,
    suspense: a,
  }) =>
    t.isError &&
    !e.isReset() &&
    !t.isFetching &&
    i &&
    ((a && t.data === void 0) || h0(r, [t.error, i])),
  zk = (t) => {
    if (t.suspense) {
      const r = (a) => (a === "static" ? a : Math.max(a ?? 1e3, 1e3)),
        i = t.staleTime;
      (t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3));
    }
  },
  $k = (t, e) => t.isLoading && t.isFetching && !e,
  Hk = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
  Cg = (t, e, r) =>
    e.fetchOptimistic(t).catch(() => {
      r.clearReset();
    });
function Wk(t, e, r) {
  var w, T, k, b;
  const i = Mk(),
    a = Fk(),
    u = jk(),
    c = u.defaultQueryOptions(t);
  (T =
    (w = u.getDefaultOptions().queries) == null
      ? void 0
      : w._experimental_beforeQuery) == null || T.call(w, c);
  const f = u.getQueryCache().get(c.queryHash);
  (c._optimisticResults = i ? "isRestoring" : "optimistic"),
    zk(c),
    Vk(c, a, f),
    Bk(a);
  const h = !u.getQueryCache().get(c.queryHash),
    [m] = B.useState(() => new e(u, c)),
    g = m.getOptimisticResult(c),
    y = !i && t.subscribed !== !1;
  if (
    (B.useSyncExternalStore(
      B.useCallback(
        (x) => {
          const R = y ? m.subscribe(ft.batchCalls(x)) : Ot;
          return m.updateResult(), R;
        },
        [m, y]
      ),
      () => m.getCurrentResult(),
      () => m.getCurrentResult()
    ),
    B.useEffect(() => {
      m.setOptions(c);
    }, [c, m]),
    Hk(c, g))
  )
    throw Cg(c, m, a);
  if (
    Uk({
      result: g,
      errorResetBoundary: a,
      throwOnError: c.throwOnError,
      query: f,
      suspense: c.suspense,
    })
  )
    throw g.error;
  if (
    ((b =
      (k = u.getDefaultOptions().queries) == null
        ? void 0
        : k._experimental_afterQuery) == null || b.call(k, c, g),
    c.experimental_prefetchInRender && !ls && $k(g, i))
  ) {
    const x = h ? Cg(c, m, a) : f == null ? void 0 : f.promise;
    x == null ||
      x.catch(Ot).finally(() => {
        m.updateResult();
      });
  }
  return c.notifyOnChangeProps ? g : m.trackResult(g);
}
function qk(t, e) {
  return Wk(t, Ek);
}
const Kk = new Ok({
  defaultOptions: { queries: { refetchOnWindowFocus: !1, retry: 1 } },
});
Bv();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sl() {
  return (
    (Sl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
    Sl.apply(this, arguments)
  );
}
var Sr;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Sr || (Sr = {}));
const Pg = "popstate";
function Qk(t) {
  t === void 0 && (t = {});
  function e(i, a) {
    let { pathname: u, search: c, hash: f } = i.location;
    return Ad(
      "",
      { pathname: u, search: c, hash: f },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function r(i, a) {
    return typeof a == "string" ? a : b0(a);
  }
  return Jk(e, r, null, t);
}
function Mt(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function S0(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Gk() {
  return Math.random().toString(36).substr(2, 8);
}
function _g(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Ad(t, e, r, i) {
  return (
    r === void 0 && (r = null),
    Sl(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? Nl(e) : e,
      { state: r, key: (e && e.key) || i || Gk() }
    )
  );
}
function b0(t) {
  let { pathname: e = "/", search: r = "", hash: i = "" } = t;
  return (
    r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
  );
}
function Nl(t) {
  let e = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((e.hash = t.substr(r)), (t = t.substr(0, r)));
    let i = t.indexOf("?");
    i >= 0 && ((e.search = t.substr(i)), (t = t.substr(0, i))),
      t && (e.pathname = t);
  }
  return e;
}
function Jk(t, e, r, i) {
  i === void 0 && (i = {});
  let { window: a = document.defaultView, v5Compat: u = !1 } = i,
    c = a.history,
    f = Sr.Pop,
    h = null,
    m = g();
  m == null && ((m = 0), c.replaceState(Sl({}, c.state, { idx: m }), ""));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function y() {
    f = Sr.Pop;
    let x = g(),
      R = x == null ? null : x - m;
    (m = x), h && h({ action: f, location: b.location, delta: R });
  }
  function w(x, R) {
    f = Sr.Push;
    let F = Ad(b.location, x, R);
    m = g() + 1;
    let L = _g(F, m),
      M = b.createHref(F);
    try {
      c.pushState(L, "", M);
    } catch (U) {
      if (U instanceof DOMException && U.name === "DataCloneError") throw U;
      a.location.assign(M);
    }
    u && h && h({ action: f, location: b.location, delta: 1 });
  }
  function T(x, R) {
    f = Sr.Replace;
    let F = Ad(b.location, x, R);
    m = g();
    let L = _g(F, m),
      M = b.createHref(F);
    c.replaceState(L, "", M),
      u && h && h({ action: f, location: b.location, delta: 0 });
  }
  function k(x) {
    let R = a.location.origin !== "null" ? a.location.origin : a.location.href,
      F = typeof x == "string" ? x : b0(x);
    return (
      (F = F.replace(/ $/, "%20")),
      Mt(
        R,
        "No window.location.(origin|href) available to create URL for href: " +
          F
      ),
      new URL(F, R)
    );
  }
  let b = {
    get action() {
      return f;
    },
    get location() {
      return t(a, c);
    },
    listen(x) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(Pg, y),
        (h = x),
        () => {
          a.removeEventListener(Pg, y), (h = null);
        }
      );
    },
    createHref(x) {
      return e(a, x);
    },
    createURL: k,
    encodeLocation(x) {
      let R = k(x);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: w,
    replace: T,
    go(x) {
      return c.go(x);
    },
  };
  return b;
}
var Rg;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(Rg || (Rg = {}));
function Yk(t, e, r) {
  return r === void 0 && (r = "/"), Xk(t, e, r);
}
function Xk(t, e, r, i) {
  let a = typeof e == "string" ? Nl(e) : e,
    u = T0(a.pathname || "/", r);
  if (u == null) return null;
  let c = k0(t);
  Zk(c);
  let f = null;
  for (let h = 0; f == null && h < c.length; ++h) {
    let m = dE(u);
    f = lE(c[h], m);
  }
  return f;
}
function k0(t, e, r, i) {
  e === void 0 && (e = []), r === void 0 && (r = []), i === void 0 && (i = "");
  let a = (u, c, f) => {
    let h = {
      relativePath: f === void 0 ? u.path || "" : f,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: c,
      route: u,
    };
    h.relativePath.startsWith("/") &&
      (Mt(
        h.relativePath.startsWith(i),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (h.relativePath = h.relativePath.slice(i.length)));
    let m = $s([i, h.relativePath]),
      g = r.concat(h);
    u.children &&
      u.children.length > 0 &&
      (Mt(
        u.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      k0(u.children, e, g, m)),
      !(u.path == null && !u.index) &&
        e.push({ path: m, score: oE(m, u.index), routesMeta: g });
  };
  return (
    t.forEach((u, c) => {
      var f;
      if (u.path === "" || !((f = u.path) != null && f.includes("?"))) a(u, c);
      else for (let h of E0(u.path)) a(u, c, h);
    }),
    e
  );
}
function E0(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [r, ...i] = e,
    a = r.endsWith("?"),
    u = r.replace(/\?$/, "");
  if (i.length === 0) return a ? [u, ""] : [u];
  let c = E0(i.join("/")),
    f = [];
  return (
    f.push(...c.map((h) => (h === "" ? u : [u, h].join("/")))),
    a && f.push(...c),
    f.map((h) => (t.startsWith("/") && h === "" ? "/" : h))
  );
}
function Zk(t) {
  t.sort((e, r) =>
    e.score !== r.score
      ? r.score - e.score
      : aE(
          e.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const eE = /^:[\w-]+$/,
  tE = 3,
  nE = 2,
  rE = 1,
  sE = 10,
  iE = -2,
  Ag = (t) => t === "*";
function oE(t, e) {
  let r = t.split("/"),
    i = r.length;
  return (
    r.some(Ag) && (i += iE),
    e && (i += nE),
    r
      .filter((a) => !Ag(a))
      .reduce((a, u) => a + (eE.test(u) ? tE : u === "" ? rE : sE), i)
  );
}
function aE(t, e) {
  return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function lE(t, e, r) {
  let { routesMeta: i } = t,
    a = {},
    u = "/",
    c = [];
  for (let f = 0; f < i.length; ++f) {
    let h = i[f],
      m = f === i.length - 1,
      g = u === "/" ? e : e.slice(u.length) || "/",
      y = uE(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        g
      ),
      w = h.route;
    if (!y) return null;
    Object.assign(a, y.params),
      c.push({
        params: a,
        pathname: $s([u, y.pathname]),
        pathnameBase: fE($s([u, y.pathnameBase])),
        route: w,
      }),
      y.pathnameBase !== "/" && (u = $s([u, y.pathnameBase]));
  }
  return c;
}
function uE(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, i] = cE(t.path, t.caseSensitive, t.end),
    a = e.match(r);
  if (!a) return null;
  let u = a[0],
    c = u.replace(/(.)\/+$/, "$1"),
    f = a.slice(1);
  return {
    params: i.reduce((m, g, y) => {
      let { paramName: w, isOptional: T } = g;
      if (w === "*") {
        let b = f[y] || "";
        c = u.slice(0, u.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const k = f[y];
      return (
        T && !k ? (m[w] = void 0) : (m[w] = (k || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: t,
  };
}
function cE(t, e, r) {
  e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    S0(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    a =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, f, h) => (
            i.push({ paramName: f, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (a += "\\/*$")
      : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, e ? void 0 : "i"), i]
  );
}
function dE(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      S0(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function T0(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let r = e.endsWith("/") ? e.length - 1 : e.length,
    i = t.charAt(r);
  return i && i !== "/" ? null : t.slice(r) || "/";
}
const $s = (t) => t.join("/").replace(/\/\/+/g, "/"),
  fE = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function hE(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const C0 = ["post", "put", "patch", "delete"];
new Set(C0);
const pE = ["get", ...C0];
new Set(pE);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
    bl.apply(this, arguments)
  );
}
const mE = B.createContext(null),
  gE = B.createContext(null),
  P0 = B.createContext(null),
  Ol = B.createContext(null),
  jl = B.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  _0 = B.createContext(null);
function mf() {
  return B.useContext(Ol) != null;
}
function R0() {
  return mf() || Mt(!1), B.useContext(Ol).location;
}
function yE(t, e) {
  return vE(t, e);
}
function vE(t, e, r, i) {
  mf() || Mt(!1);
  let { navigator: a } = B.useContext(P0),
    { matches: u } = B.useContext(jl),
    c = u[u.length - 1],
    f = c ? c.params : {};
  c && c.pathname;
  let h = c ? c.pathnameBase : "/";
  c && c.route;
  let m = R0(),
    g;
  if (e) {
    var y;
    let x = typeof e == "string" ? Nl(e) : e;
    h === "/" || ((y = x.pathname) != null && y.startsWith(h)) || Mt(!1),
      (g = x);
  } else g = m;
  let w = g.pathname || "/",
    T = w;
  if (h !== "/") {
    let x = h.replace(/^\//, "").split("/");
    T = "/" + w.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let k = Yk(t, { pathname: T }),
    b = kE(
      k &&
        k.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, f, x.params),
            pathname: $s([
              h,
              a.encodeLocation
                ? a.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? h
                : $s([
                    h,
                    a.encodeLocation
                      ? a.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      u,
      r,
      i
    );
  return e && b
    ? B.createElement(
        Ol.Provider,
        {
          value: {
            location: bl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: Sr.Pop,
          },
        },
        b
      )
    : b;
}
function wE() {
  let t = PE(),
    e = hE(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return B.createElement(
    B.Fragment,
    null,
    B.createElement("h2", null, "Unexpected Application Error!"),
    B.createElement("h3", { style: { fontStyle: "italic" } }, e),
    r ? B.createElement("pre", { style: a }, r) : null,
    null
  );
}
const xE = B.createElement(wE, null);
class SE extends B.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, r) {
    return r.location !== e.location ||
      (r.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : r.error,
          location: r.location,
          revalidation: e.revalidation || r.revalidation,
        };
  }
  componentDidCatch(e, r) {
    console.error(
      "React Router caught the following error during render",
      e,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? B.createElement(
          jl.Provider,
          { value: this.props.routeContext },
          B.createElement(_0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function bE(t) {
  let { routeContext: e, match: r, children: i } = t,
    a = B.useContext(mE);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    B.createElement(jl.Provider, { value: e }, i)
  );
}
function kE(t, e, r, i) {
  var a;
  if (
    (e === void 0 && (e = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    t == null)
  ) {
    var u;
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (
      (u = i) != null &&
      u.v7_partialHydration &&
      e.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      t = r.matches;
    else return null;
  }
  let c = t,
    f = (a = r) == null ? void 0 : a.errors;
  if (f != null) {
    let g = c.findIndex(
      (y) => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0
    );
    g >= 0 || Mt(!1), (c = c.slice(0, Math.min(c.length, g + 1)));
  }
  let h = !1,
    m = -1;
  if (r && i && i.v7_partialHydration)
    for (let g = 0; g < c.length; g++) {
      let y = c[g];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
        y.route.id)
      ) {
        let { loaderData: w, errors: T } = r,
          k =
            y.route.loader &&
            w[y.route.id] === void 0 &&
            (!T || T[y.route.id] === void 0);
        if (y.route.lazy || k) {
          (h = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((g, y, w) => {
    let T,
      k = !1,
      b = null,
      x = null;
    r &&
      ((T = f && y.route.id ? f[y.route.id] : void 0),
      (b = y.route.errorElement || xE),
      h &&
        (m < 0 && w === 0
          ? (_E("route-fallback"), (k = !0), (x = null))
          : m === w &&
            ((k = !0), (x = y.route.hydrateFallbackElement || null))));
    let R = e.concat(c.slice(0, w + 1)),
      F = () => {
        let L;
        return (
          T
            ? (L = b)
            : k
            ? (L = x)
            : y.route.Component
            ? (L = B.createElement(y.route.Component, null))
            : y.route.element
            ? (L = y.route.element)
            : (L = g),
          B.createElement(bE, {
            match: y,
            routeContext: { outlet: g, matches: R, isDataRoute: r != null },
            children: L,
          })
        );
      };
    return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0)
      ? B.createElement(SE, {
          location: r.location,
          revalidation: r.revalidation,
          component: b,
          error: T,
          children: F(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : F();
  }, null);
}
var A0 = (function (t) {
  return (
    (t.UseBlocker = "useBlocker"),
    (t.UseLoaderData = "useLoaderData"),
    (t.UseActionData = "useActionData"),
    (t.UseRouteError = "useRouteError"),
    (t.UseNavigation = "useNavigation"),
    (t.UseRouteLoaderData = "useRouteLoaderData"),
    (t.UseMatches = "useMatches"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate"),
    (t.UseRouteId = "useRouteId"),
    t
  );
})(A0 || {});
function EE(t) {
  let e = B.useContext(gE);
  return e || Mt(!1), e;
}
function TE(t) {
  let e = B.useContext(jl);
  return e || Mt(!1), e;
}
function CE(t) {
  let e = TE(),
    r = e.matches[e.matches.length - 1];
  return r.route.id || Mt(!1), r.route.id;
}
function PE() {
  var t;
  let e = B.useContext(_0),
    r = EE(A0.UseRouteError),
    i = CE();
  return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i];
}
const Ng = {};
function _E(t, e, r) {
  Ng[t] || (Ng[t] = !0);
}
function RE(t, e) {
  t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath;
}
function Nd(t) {
  Mt(!1);
}
function AE(t) {
  let {
    basename: e = "/",
    children: r = null,
    location: i,
    navigationType: a = Sr.Pop,
    navigator: u,
    static: c = !1,
    future: f,
  } = t;
  mf() && Mt(!1);
  let h = e.replace(/^\/*/, "/"),
    m = B.useMemo(
      () => ({
        basename: h,
        navigator: u,
        static: c,
        future: bl({ v7_relativeSplatPath: !1 }, f),
      }),
      [h, f, u, c]
    );
  typeof i == "string" && (i = Nl(i));
  let {
      pathname: g = "/",
      search: y = "",
      hash: w = "",
      state: T = null,
      key: k = "default",
    } = i,
    b = B.useMemo(() => {
      let x = T0(g, h);
      return x == null
        ? null
        : {
            location: { pathname: x, search: y, hash: w, state: T, key: k },
            navigationType: a,
          };
    }, [h, g, y, w, T, k, a]);
  return b == null
    ? null
    : B.createElement(
        P0.Provider,
        { value: m },
        B.createElement(Ol.Provider, { children: r, value: b })
      );
}
function NE(t) {
  let { children: e, location: r } = t;
  return yE(Od(e), r);
}
new Promise(() => {});
function Od(t, e) {
  e === void 0 && (e = []);
  let r = [];
  return (
    B.Children.forEach(t, (i, a) => {
      if (!B.isValidElement(i)) return;
      let u = [...e, a];
      if (i.type === B.Fragment) {
        r.push.apply(r, Od(i.props.children, u));
        return;
      }
      i.type !== Nd && Mt(!1), !i.props.index || !i.props.children || Mt(!1);
      let c = {
        id: i.props.id || u.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (c.children = Od(i.props.children, u)), r.push(c);
    }),
    r
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const OE = "6";
try {
  window.__reactRouterVersion = OE;
} catch {}
const jE = "startTransition",
  Og = HS[jE];
function LE(t) {
  let { basename: e, children: r, future: i, window: a } = t,
    u = B.useRef();
  u.current == null && (u.current = Qk({ window: a, v5Compat: !0 }));
  let c = u.current,
    [f, h] = B.useState({ action: c.action, location: c.location }),
    { v7_startTransition: m } = i || {},
    g = B.useCallback(
      (y) => {
        m && Og ? Og(() => h(y)) : h(y);
      },
      [h, m]
    );
  return (
    B.useLayoutEffect(() => c.listen(g), [c, g]),
    B.useEffect(() => RE(i), [i]),
    B.createElement(AE, {
      basename: e,
      children: r,
      location: f.location,
      navigationType: f.action,
      navigator: c,
      future: i,
    })
  );
}
var jg;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(jg || (jg = {}));
var Lg;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Lg || (Lg = {}));
function N0(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: ME } = Object.prototype,
  { getPrototypeOf: gf } = Object,
  { iterator: Ll, toStringTag: O0 } = Symbol,
  Ml = ((t) => (e) => {
    const r = ME.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  fn = (t) => ((t = t.toLowerCase()), (e) => Ml(e) === t),
  Dl = (t) => (e) => typeof e === t,
  { isArray: oi } = Array,
  ni = Dl("undefined");
function jo(t) {
  return (
    t !== null &&
    !ni(t) &&
    t.constructor !== null &&
    !ni(t.constructor) &&
    jt(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const j0 = fn("ArrayBuffer");
function DE(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && j0(t.buffer)),
    e
  );
}
const IE = Dl("string"),
  jt = Dl("function"),
  L0 = Dl("number"),
  Lo = (t) => t !== null && typeof t == "object",
  FE = (t) => t === !0 || t === !1,
  ul = (t) => {
    if (Ml(t) !== "object") return !1;
    const e = gf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(O0 in t) &&
      !(Ll in t)
    );
  },
  VE = (t) => {
    if (!Lo(t) || jo(t)) return !1;
    try {
      return (
        Object.keys(t).length === 0 &&
        Object.getPrototypeOf(t) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  BE = fn("Date"),
  UE = fn("File"),
  zE = fn("Blob"),
  $E = fn("FileList"),
  HE = (t) => Lo(t) && jt(t.pipe),
  WE = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (jt(t.append) &&
          ((e = Ml(t)) === "formdata" ||
            (e === "object" &&
              jt(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  qE = fn("URLSearchParams"),
  [KE, QE, GE, JE] = ["ReadableStream", "Request", "Response", "Headers"].map(
    fn
  ),
  YE = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mo(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let i, a;
  if ((typeof t != "object" && (t = [t]), oi(t)))
    for (i = 0, a = t.length; i < a; i++) e.call(null, t[i], i, t);
  else {
    if (jo(t)) return;
    const u = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
      c = u.length;
    let f;
    for (i = 0; i < c; i++) (f = u[i]), e.call(null, t[f], f, t);
  }
}
function M0(t, e) {
  if (jo(t)) return null;
  e = e.toLowerCase();
  const r = Object.keys(t);
  let i = r.length,
    a;
  for (; i-- > 0; ) if (((a = r[i]), e === a.toLowerCase())) return a;
  return null;
}
const Qr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  D0 = (t) => !ni(t) && t !== Qr;
function jd() {
  const { caseless: t, skipUndefined: e } = (D0(this) && this) || {},
    r = {},
    i = (a, u) => {
      if (u === "__proto__" || u === "constructor" || u === "prototype") return;
      const c = (t && M0(r, u)) || u;
      ul(r[c]) && ul(a)
        ? (r[c] = jd(r[c], a))
        : ul(a)
        ? (r[c] = jd({}, a))
        : oi(a)
        ? (r[c] = a.slice())
        : (!e || !ni(a)) && (r[c] = a);
    };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && Mo(arguments[a], i);
  return r;
}
const XE = (t, e, r, { allOwnKeys: i } = {}) => (
    Mo(
      e,
      (a, u) => {
        r && jt(a)
          ? Object.defineProperty(t, u, {
              value: N0(a, r),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(t, u, {
              value: a,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: i }
    ),
    t
  ),
  ZE = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  eT = (t, e, r, i) => {
    (t.prototype = Object.create(e.prototype, i)),
      Object.defineProperty(t.prototype, "constructor", {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t, "super", { value: e.prototype }),
      r && Object.assign(t.prototype, r);
  },
  tT = (t, e, r, i) => {
    let a, u, c;
    const f = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (a = Object.getOwnPropertyNames(t), u = a.length; u-- > 0; )
        (c = a[u]), (!i || i(c, t, e)) && !f[c] && ((e[c] = t[c]), (f[c] = !0));
      t = r !== !1 && gf(t);
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e;
  },
  nT = (t, e, r) => {
    (t = String(t)),
      (r === void 0 || r > t.length) && (r = t.length),
      (r -= e.length);
    const i = t.indexOf(e, r);
    return i !== -1 && i === r;
  },
  rT = (t) => {
    if (!t) return null;
    if (oi(t)) return t;
    let e = t.length;
    if (!L0(e)) return null;
    const r = new Array(e);
    for (; e-- > 0; ) r[e] = t[e];
    return r;
  },
  sT = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && gf(Uint8Array)),
  iT = (t, e) => {
    const i = (t && t[Ll]).call(t);
    let a;
    for (; (a = i.next()) && !a.done; ) {
      const u = a.value;
      e.call(t, u[0], u[1]);
    }
  },
  oT = (t, e) => {
    let r;
    const i = [];
    for (; (r = t.exec(e)) !== null; ) i.push(r);
    return i;
  },
  aT = fn("HTMLFormElement"),
  lT = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, i, a) {
      return i.toUpperCase() + a;
    }),
  Mg = (
    ({ hasOwnProperty: t }) =>
    (e, r) =>
      t.call(e, r)
  )(Object.prototype),
  uT = fn("RegExp"),
  I0 = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t),
      i = {};
    Mo(r, (a, u) => {
      let c;
      (c = e(a, u, t)) !== !1 && (i[u] = c || a);
    }),
      Object.defineProperties(t, i);
  },
  cT = (t) => {
    I0(t, (e, r) => {
      if (jt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const i = t[r];
      if (jt(i)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  dT = (t, e) => {
    const r = {},
      i = (a) => {
        a.forEach((u) => {
          r[u] = !0;
        });
      };
    return oi(t) ? i(t) : i(String(t).split(e)), r;
  },
  fT = () => {},
  hT = (t, e) => (t != null && Number.isFinite((t = +t)) ? t : e);
function pT(t) {
  return !!(t && jt(t.append) && t[O0] === "FormData" && t[Ll]);
}
const mT = (t) => {
    const e = new Array(10),
      r = (i, a) => {
        if (Lo(i)) {
          if (e.indexOf(i) >= 0) return;
          if (jo(i)) return i;
          if (!("toJSON" in i)) {
            e[a] = i;
            const u = oi(i) ? [] : {};
            return (
              Mo(i, (c, f) => {
                const h = r(c, a + 1);
                !ni(h) && (u[f] = h);
              }),
              (e[a] = void 0),
              u
            );
          }
        }
        return i;
      };
    return r(t, 0);
  },
  gT = fn("AsyncFunction"),
  yT = (t) => t && (Lo(t) || jt(t)) && jt(t.then) && jt(t.catch),
  F0 = ((t, e) =>
    t
      ? setImmediate
      : e
      ? ((r, i) => (
          Qr.addEventListener(
            "message",
            ({ source: a, data: u }) => {
              a === Qr && u === r && i.length && i.shift()();
            },
            !1
          ),
          (a) => {
            i.push(a), Qr.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    jt(Qr.postMessage)
  ),
  vT =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Qr)
      : (typeof process < "u" && process.nextTick) || F0,
  wT = (t) => t != null && jt(t[Ll]),
  I = {
    isArray: oi,
    isArrayBuffer: j0,
    isBuffer: jo,
    isFormData: WE,
    isArrayBufferView: DE,
    isString: IE,
    isNumber: L0,
    isBoolean: FE,
    isObject: Lo,
    isPlainObject: ul,
    isEmptyObject: VE,
    isReadableStream: KE,
    isRequest: QE,
    isResponse: GE,
    isHeaders: JE,
    isUndefined: ni,
    isDate: BE,
    isFile: UE,
    isBlob: zE,
    isRegExp: uT,
    isFunction: jt,
    isStream: HE,
    isURLSearchParams: qE,
    isTypedArray: sT,
    isFileList: $E,
    forEach: Mo,
    merge: jd,
    extend: XE,
    trim: YE,
    stripBOM: ZE,
    inherits: eT,
    toFlatObject: tT,
    kindOf: Ml,
    kindOfTest: fn,
    endsWith: nT,
    toArray: rT,
    forEachEntry: iT,
    matchAll: oT,
    isHTMLForm: aT,
    hasOwnProperty: Mg,
    hasOwnProp: Mg,
    reduceDescriptors: I0,
    freezeMethods: cT,
    toObjectSet: dT,
    toCamelCase: lT,
    noop: fT,
    toFiniteNumber: hT,
    findKey: M0,
    global: Qr,
    isContextDefined: D0,
    isSpecCompliantForm: pT,
    toJSONObject: mT,
    isAsyncFn: gT,
    isThenable: yT,
    setImmediate: F0,
    asap: vT,
    isIterable: wT,
  };
let pe = class V0 extends Error {
  static from(e, r, i, a, u, c) {
    const f = new V0(e.message, r || e.code, i, a, u);
    return (f.cause = e), (f.name = e.name), c && Object.assign(f, c), f;
  }
  constructor(e, r, i, a, u) {
    super(e),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      r && (this.code = r),
      i && (this.config = i),
      a && (this.request = a),
      u && ((this.response = u), (this.status = u.status));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
};
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const xT = null;
function Ld(t) {
  return I.isPlainObject(t) || I.isArray(t);
}
function B0(t) {
  return I.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dg(t, e, r) {
  return t
    ? t
        .concat(e)
        .map(function (a, u) {
          return (a = B0(a)), !r && u ? "[" + a + "]" : a;
        })
        .join(r ? "." : "")
    : e;
}
function ST(t) {
  return I.isArray(t) && !t.some(Ld);
}
const bT = I.toFlatObject(I, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Il(t, e, r) {
  if (!I.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (r = I.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, x) {
        return !I.isUndefined(x[b]);
      }
    ));
  const i = r.metaTokens,
    a = r.visitor || g,
    u = r.dots,
    c = r.indexes,
    h = (r.Blob || (typeof Blob < "u" && Blob)) && I.isSpecCompliantForm(e);
  if (!I.isFunction(a)) throw new TypeError("visitor must be a function");
  function m(k) {
    if (k === null) return "";
    if (I.isDate(k)) return k.toISOString();
    if (I.isBoolean(k)) return k.toString();
    if (!h && I.isBlob(k))
      throw new pe("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(k) || I.isTypedArray(k)
      ? h && typeof Blob == "function"
        ? new Blob([k])
        : Buffer.from(k)
      : k;
  }
  function g(k, b, x) {
    let R = k;
    if (k && !x && typeof k == "object") {
      if (I.endsWith(b, "{}"))
        (b = i ? b : b.slice(0, -2)), (k = JSON.stringify(k));
      else if (
        (I.isArray(k) && ST(k)) ||
        ((I.isFileList(k) || I.endsWith(b, "[]")) && (R = I.toArray(k)))
      )
        return (
          (b = B0(b)),
          R.forEach(function (L, M) {
            !(I.isUndefined(L) || L === null) &&
              e.append(
                c === !0 ? Dg([b], M, u) : c === null ? b : b + "[]",
                m(L)
              );
          }),
          !1
        );
    }
    return Ld(k) ? !0 : (e.append(Dg(x, b, u), m(k)), !1);
  }
  const y = [],
    w = Object.assign(bT, {
      defaultVisitor: g,
      convertValue: m,
      isVisitable: Ld,
    });
  function T(k, b) {
    if (!I.isUndefined(k)) {
      if (y.indexOf(k) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      y.push(k),
        I.forEach(k, function (R, F) {
          (!(I.isUndefined(R) || R === null) &&
            a.call(e, R, I.isString(F) ? F.trim() : F, b, w)) === !0 &&
            T(R, b ? b.concat(F) : [F]);
        }),
        y.pop();
    }
  }
  if (!I.isObject(t)) throw new TypeError("data must be an object");
  return T(t), e;
}
function Ig(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (i) {
    return e[i];
  });
}
function yf(t, e) {
  (this._pairs = []), t && Il(t, this, e);
}
const U0 = yf.prototype;
U0.append = function (e, r) {
  this._pairs.push([e, r]);
};
U0.toString = function (e) {
  const r = e
    ? function (i) {
        return e.call(this, i, Ig);
      }
    : Ig;
  return this._pairs
    .map(function (a) {
      return r(a[0]) + "=" + r(a[1]);
    }, "")
    .join("&");
};
function kT(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function z0(t, e, r) {
  if (!e) return t;
  const i = (r && r.encode) || kT,
    a = I.isFunction(r) ? { serialize: r } : r,
    u = a && a.serialize;
  let c;
  if (
    (u
      ? (c = u(e, a))
      : (c = I.isURLSearchParams(e) ? e.toString() : new yf(e, a).toString(i)),
    c)
  ) {
    const f = t.indexOf("#");
    f !== -1 && (t = t.slice(0, f)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return t;
}
class Fg {
  constructor() {
    this.handlers = [];
  }
  use(e, r, i) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: r,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    I.forEach(this.handlers, function (i) {
      i !== null && e(i);
    });
  }
}
const vf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  ET = typeof URLSearchParams < "u" ? URLSearchParams : yf,
  TT = typeof FormData < "u" ? FormData : null,
  CT = typeof Blob < "u" ? Blob : null,
  PT = {
    isBrowser: !0,
    classes: { URLSearchParams: ET, FormData: TT, Blob: CT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  wf = typeof window < "u" && typeof document < "u",
  Md = (typeof navigator == "object" && navigator) || void 0,
  _T =
    wf &&
    (!Md || ["ReactNative", "NativeScript", "NS"].indexOf(Md.product) < 0),
  RT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  AT = (wf && window.location.href) || "http://localhost",
  NT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: wf,
        hasStandardBrowserEnv: _T,
        hasStandardBrowserWebWorkerEnv: RT,
        navigator: Md,
        origin: AT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xt = { ...NT, ...PT };
function OT(t, e) {
  return Il(t, new xt.classes.URLSearchParams(), {
    visitor: function (r, i, a, u) {
      return xt.isNode && I.isBuffer(r)
        ? (this.append(i, r.toString("base64")), !1)
        : u.defaultVisitor.apply(this, arguments);
    },
    ...e,
  });
}
function jT(t) {
  return I.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
    e[0] === "[]" ? "" : e[1] || e[0]
  );
}
function LT(t) {
  const e = {},
    r = Object.keys(t);
  let i;
  const a = r.length;
  let u;
  for (i = 0; i < a; i++) (u = r[i]), (e[u] = t[u]);
  return e;
}
function $0(t) {
  function e(r, i, a, u) {
    let c = r[u++];
    if (c === "__proto__") return !0;
    const f = Number.isFinite(+c),
      h = u >= r.length;
    return (
      (c = !c && I.isArray(a) ? a.length : c),
      h
        ? (I.hasOwnProp(a, c) ? (a[c] = [a[c], i]) : (a[c] = i), !f)
        : ((!a[c] || !I.isObject(a[c])) && (a[c] = []),
          e(r, i, a[c], u) && I.isArray(a[c]) && (a[c] = LT(a[c])),
          !f)
    );
  }
  if (I.isFormData(t) && I.isFunction(t.entries)) {
    const r = {};
    return (
      I.forEachEntry(t, (i, a) => {
        e(jT(i), a, r, 0);
      }),
      r
    );
  }
  return null;
}
function MT(t, e, r) {
  if (I.isString(t))
    try {
      return (e || JSON.parse)(t), I.trim(t);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (r || JSON.stringify)(t);
}
const Do = {
  transitional: vf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (e, r) {
      const i = r.getContentType() || "",
        a = i.indexOf("application/json") > -1,
        u = I.isObject(e);
      if ((u && I.isHTMLForm(e) && (e = new FormData(e)), I.isFormData(e)))
        return a ? JSON.stringify($0(e)) : e;
      if (
        I.isArrayBuffer(e) ||
        I.isBuffer(e) ||
        I.isStream(e) ||
        I.isFile(e) ||
        I.isBlob(e) ||
        I.isReadableStream(e)
      )
        return e;
      if (I.isArrayBufferView(e)) return e.buffer;
      if (I.isURLSearchParams(e))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let f;
      if (u) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return OT(e, this.formSerializer).toString();
        if ((f = I.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
          const h = this.env && this.env.FormData;
          return Il(
            f ? { "files[]": e } : e,
            h && new h(),
            this.formSerializer
          );
        }
      }
      return u || a ? (r.setContentType("application/json", !1), MT(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const r = this.transitional || Do.transitional,
        i = r && r.forcedJSONParsing,
        a = this.responseType === "json";
      if (I.isResponse(e) || I.isReadableStream(e)) return e;
      if (e && I.isString(e) && ((i && !this.responseType) || a)) {
        const c = !(r && r.silentJSONParsing) && a;
        try {
          return JSON.parse(e, this.parseReviver);
        } catch (f) {
          if (c)
            throw f.name === "SyntaxError"
              ? pe.from(f, pe.ERR_BAD_RESPONSE, this, null, this.response)
              : f;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: xt.classes.FormData, Blob: xt.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Do.headers[t] = {};
});
const DT = I.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  IT = (t) => {
    const e = {};
    let r, i, a;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (c) {
            (a = c.indexOf(":")),
              (r = c.substring(0, a).trim().toLowerCase()),
              (i = c.substring(a + 1).trim()),
              !(!r || (e[r] && DT[r])) &&
                (r === "set-cookie"
                  ? e[r]
                    ? e[r].push(i)
                    : (e[r] = [i])
                  : (e[r] = e[r] ? e[r] + ", " + i : i));
          }),
      e
    );
  },
  Vg = Symbol("internals");
function Yi(t) {
  return t && String(t).trim().toLowerCase();
}
function cl(t) {
  return t === !1 || t == null ? t : I.isArray(t) ? t.map(cl) : String(t);
}
function FT(t) {
  const e = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = r.exec(t)); ) e[i[1]] = i[2];
  return e;
}
const VT = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Kc(t, e, r, i, a) {
  if (I.isFunction(i)) return i.call(this, e, r);
  if ((a && (e = r), !!I.isString(e))) {
    if (I.isString(i)) return e.indexOf(i) !== -1;
    if (I.isRegExp(i)) return i.test(e);
  }
}
function BT(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i);
}
function UT(t, e) {
  const r = I.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(t, i + r, {
      value: function (a, u, c) {
        return this[i].call(this, e, a, u, c);
      },
      configurable: !0,
    });
  });
}
let Lt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, i) {
    const a = this;
    function u(f, h, m) {
      const g = Yi(h);
      if (!g) throw new Error("header name must be a non-empty string");
      const y = I.findKey(a, g);
      (!y || a[y] === void 0 || m === !0 || (m === void 0 && a[y] !== !1)) &&
        (a[y || h] = cl(f));
    }
    const c = (f, h) => I.forEach(f, (m, g) => u(m, g, h));
    if (I.isPlainObject(e) || e instanceof this.constructor) c(e, r);
    else if (I.isString(e) && (e = e.trim()) && !VT(e)) c(IT(e), r);
    else if (I.isObject(e) && I.isIterable(e)) {
      let f = {},
        h,
        m;
      for (const g of e) {
        if (!I.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        f[(m = g[0])] = (h = f[m])
          ? I.isArray(h)
            ? [...h, g[1]]
            : [h, g[1]]
          : g[1];
      }
      c(f, r);
    } else e != null && u(r, e, i);
    return this;
  }
  get(e, r) {
    if (((e = Yi(e)), e)) {
      const i = I.findKey(this, e);
      if (i) {
        const a = this[i];
        if (!r) return a;
        if (r === !0) return FT(a);
        if (I.isFunction(r)) return r.call(this, a, i);
        if (I.isRegExp(r)) return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (((e = Yi(e)), e)) {
      const i = I.findKey(this, e);
      return !!(i && this[i] !== void 0 && (!r || Kc(this, this[i], i, r)));
    }
    return !1;
  }
  delete(e, r) {
    const i = this;
    let a = !1;
    function u(c) {
      if (((c = Yi(c)), c)) {
        const f = I.findKey(i, c);
        f && (!r || Kc(i, i[f], f, r)) && (delete i[f], (a = !0));
      }
    }
    return I.isArray(e) ? e.forEach(u) : u(e), a;
  }
  clear(e) {
    const r = Object.keys(this);
    let i = r.length,
      a = !1;
    for (; i--; ) {
      const u = r[i];
      (!e || Kc(this, this[u], u, e, !0)) && (delete this[u], (a = !0));
    }
    return a;
  }
  normalize(e) {
    const r = this,
      i = {};
    return (
      I.forEach(this, (a, u) => {
        const c = I.findKey(i, u);
        if (c) {
          (r[c] = cl(a)), delete r[u];
          return;
        }
        const f = e ? BT(u) : String(u).trim();
        f !== u && delete r[u], (r[f] = cl(a)), (i[f] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = Object.create(null);
    return (
      I.forEach(this, (i, a) => {
        i != null && i !== !1 && (r[a] = e && I.isArray(i) ? i.join(", ") : i);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const i = new this(e);
    return r.forEach((a) => i.set(a)), i;
  }
  static accessor(e) {
    const i = (this[Vg] = this[Vg] = { accessors: {} }).accessors,
      a = this.prototype;
    function u(c) {
      const f = Yi(c);
      i[f] || (UT(a, c), (i[f] = !0));
    }
    return I.isArray(e) ? e.forEach(u) : u(e), this;
  }
};
Lt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
I.reduceDescriptors(Lt.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(i) {
      this[r] = i;
    },
  };
});
I.freezeMethods(Lt);
function Qc(t, e) {
  const r = this || Do,
    i = e || r,
    a = Lt.from(i.headers);
  let u = i.data;
  return (
    I.forEach(t, function (f) {
      u = f.call(r, u, a.normalize(), e ? e.status : void 0);
    }),
    a.normalize(),
    u
  );
}
function H0(t) {
  return !!(t && t.__CANCEL__);
}
let Io = class extends pe {
  constructor(e, r, i) {
    super(e ?? "canceled", pe.ERR_CANCELED, r, i),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0);
  }
};
function W0(t, e, r) {
  const i = r.config.validateStatus;
  !r.status || !i || i(r.status)
    ? t(r)
    : e(
        new pe(
          "Request failed with status code " + r.status,
          [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function zT(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function $T(t, e) {
  t = t || 10;
  const r = new Array(t),
    i = new Array(t);
  let a = 0,
    u = 0,
    c;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (h) {
      const m = Date.now(),
        g = i[u];
      c || (c = m), (r[a] = h), (i[a] = m);
      let y = u,
        w = 0;
      for (; y !== a; ) (w += r[y++]), (y = y % t);
      if (((a = (a + 1) % t), a === u && (u = (u + 1) % t), m - c < e)) return;
      const T = g && m - g;
      return T ? Math.round((w * 1e3) / T) : void 0;
    }
  );
}
function HT(t, e) {
  let r = 0,
    i = 1e3 / e,
    a,
    u;
  const c = (m, g = Date.now()) => {
    (r = g), (a = null), u && (clearTimeout(u), (u = null)), t(...m);
  };
  return [
    (...m) => {
      const g = Date.now(),
        y = g - r;
      y >= i
        ? c(m, g)
        : ((a = m),
          u ||
            (u = setTimeout(() => {
              (u = null), c(a);
            }, i - y)));
    },
    () => a && c(a),
  ];
}
const kl = (t, e, r = 3) => {
    let i = 0;
    const a = $T(50, 250);
    return HT((u) => {
      const c = u.loaded,
        f = u.lengthComputable ? u.total : void 0,
        h = c - i,
        m = a(h),
        g = c <= f;
      i = c;
      const y = {
        loaded: c,
        total: f,
        progress: f ? c / f : void 0,
        bytes: h,
        rate: m || void 0,
        estimated: m && f && g ? (f - c) / m : void 0,
        event: u,
        lengthComputable: f != null,
        [e ? "download" : "upload"]: !0,
      };
      t(y);
    }, r);
  },
  Bg = (t, e) => {
    const r = t != null;
    return [(i) => e[0]({ lengthComputable: r, total: t, loaded: i }), e[1]];
  },
  Ug =
    (t) =>
    (...e) =>
      I.asap(() => t(...e)),
  WT = xt.hasStandardBrowserEnv
    ? ((t, e) => (r) => (
        (r = new URL(r, xt.origin)),
        t.protocol === r.protocol &&
          t.host === r.host &&
          (e || t.port === r.port)
      ))(
        new URL(xt.origin),
        xt.navigator && /(msie|trident)/i.test(xt.navigator.userAgent)
      )
    : () => !0,
  qT = xt.hasStandardBrowserEnv
    ? {
        write(t, e, r, i, a, u, c) {
          if (typeof document > "u") return;
          const f = [`${t}=${encodeURIComponent(e)}`];
          I.isNumber(r) && f.push(`expires=${new Date(r).toUTCString()}`),
            I.isString(i) && f.push(`path=${i}`),
            I.isString(a) && f.push(`domain=${a}`),
            u === !0 && f.push("secure"),
            I.isString(c) && f.push(`SameSite=${c}`),
            (document.cookie = f.join("; "));
        },
        read(t) {
          if (typeof document > "u") return null;
          const e = document.cookie.match(
            new RegExp("(?:^|; )" + t + "=([^;]*)")
          );
          return e ? decodeURIComponent(e[1]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function KT(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function QT(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function q0(t, e, r) {
  let i = !KT(e);
  return t && (i || r == !1) ? QT(t, e) : e;
}
const zg = (t) => (t instanceof Lt ? { ...t } : t);
function us(t, e) {
  e = e || {};
  const r = {};
  function i(m, g, y, w) {
    return I.isPlainObject(m) && I.isPlainObject(g)
      ? I.merge.call({ caseless: w }, m, g)
      : I.isPlainObject(g)
      ? I.merge({}, g)
      : I.isArray(g)
      ? g.slice()
      : g;
  }
  function a(m, g, y, w) {
    if (I.isUndefined(g)) {
      if (!I.isUndefined(m)) return i(void 0, m, y, w);
    } else return i(m, g, y, w);
  }
  function u(m, g) {
    if (!I.isUndefined(g)) return i(void 0, g);
  }
  function c(m, g) {
    if (I.isUndefined(g)) {
      if (!I.isUndefined(m)) return i(void 0, m);
    } else return i(void 0, g);
  }
  function f(m, g, y) {
    if (y in e) return i(m, g);
    if (y in t) return i(void 0, m);
  }
  const h = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: f,
    headers: (m, g, y) => a(zg(m), zg(g), y, !0),
  };
  return (
    I.forEach(Object.keys({ ...t, ...e }), function (g) {
      if (g === "__proto__" || g === "constructor" || g === "prototype") return;
      const y = I.hasOwnProp(h, g) ? h[g] : a,
        w = y(t[g], e[g], g);
      (I.isUndefined(w) && y !== f) || (r[g] = w);
    }),
    r
  );
}
const K0 = (t) => {
    const e = us({}, t);
    let {
      data: r,
      withXSRFToken: i,
      xsrfHeaderName: a,
      xsrfCookieName: u,
      headers: c,
      auth: f,
    } = e;
    if (
      ((e.headers = c = Lt.from(c)),
      (e.url = z0(
        q0(e.baseURL, e.url, e.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer
      )),
      f &&
        c.set(
          "Authorization",
          "Basic " +
            btoa(
              (f.username || "") +
                ":" +
                (f.password ? unescape(encodeURIComponent(f.password)) : "")
            )
        ),
      I.isFormData(r))
    ) {
      if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv)
        c.setContentType(void 0);
      else if (I.isFunction(r.getHeaders)) {
        const h = r.getHeaders(),
          m = ["content-type", "content-length"];
        Object.entries(h).forEach(([g, y]) => {
          m.includes(g.toLowerCase()) && c.set(g, y);
        });
      }
    }
    if (
      xt.hasStandardBrowserEnv &&
      (i && I.isFunction(i) && (i = i(e)), i || (i !== !1 && WT(e.url)))
    ) {
      const h = a && u && qT.read(u);
      h && c.set(a, h);
    }
    return e;
  },
  GT = typeof XMLHttpRequest < "u",
  JT =
    GT &&
    function (t) {
      return new Promise(function (r, i) {
        const a = K0(t);
        let u = a.data;
        const c = Lt.from(a.headers).normalize();
        let { responseType: f, onUploadProgress: h, onDownloadProgress: m } = a,
          g,
          y,
          w,
          T,
          k;
        function b() {
          T && T(),
            k && k(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener("abort", g);
        }
        let x = new XMLHttpRequest();
        x.open(a.method.toUpperCase(), a.url, !0), (x.timeout = a.timeout);
        function R() {
          if (!x) return;
          const L = Lt.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders()
            ),
            U = {
              data:
                !f || f === "text" || f === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: L,
              config: t,
              request: x,
            };
          W0(
            function (J) {
              r(J), b();
            },
            function (J) {
              i(J), b();
            },
            U
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = R)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(R);
            }),
          (x.onabort = function () {
            x &&
              (i(new pe("Request aborted", pe.ECONNABORTED, t, x)), (x = null));
          }),
          (x.onerror = function (M) {
            const U = M && M.message ? M.message : "Network Error",
              Q = new pe(U, pe.ERR_NETWORK, t, x);
            (Q.event = M || null), i(Q), (x = null);
          }),
          (x.ontimeout = function () {
            let M = a.timeout
              ? "timeout of " + a.timeout + "ms exceeded"
              : "timeout exceeded";
            const U = a.transitional || vf;
            a.timeoutErrorMessage && (M = a.timeoutErrorMessage),
              i(
                new pe(
                  M,
                  U.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,
                  t,
                  x
                )
              ),
              (x = null);
          }),
          u === void 0 && c.setContentType(null),
          "setRequestHeader" in x &&
            I.forEach(c.toJSON(), function (M, U) {
              x.setRequestHeader(U, M);
            }),
          I.isUndefined(a.withCredentials) ||
            (x.withCredentials = !!a.withCredentials),
          f && f !== "json" && (x.responseType = a.responseType),
          m && (([w, k] = kl(m, !0)), x.addEventListener("progress", w)),
          h &&
            x.upload &&
            (([y, T] = kl(h)),
            x.upload.addEventListener("progress", y),
            x.upload.addEventListener("loadend", T)),
          (a.cancelToken || a.signal) &&
            ((g = (L) => {
              x &&
                (i(!L || L.type ? new Io(null, t, x) : L),
                x.abort(),
                (x = null));
            }),
            a.cancelToken && a.cancelToken.subscribe(g),
            a.signal &&
              (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
        const F = zT(a.url);
        if (F && xt.protocols.indexOf(F) === -1) {
          i(new pe("Unsupported protocol " + F + ":", pe.ERR_BAD_REQUEST, t));
          return;
        }
        x.send(u || null);
      });
    },
  YT = (t, e) => {
    const { length: r } = (t = t ? t.filter(Boolean) : []);
    if (e || r) {
      let i = new AbortController(),
        a;
      const u = function (m) {
        if (!a) {
          (a = !0), f();
          const g = m instanceof Error ? m : this.reason;
          i.abort(
            g instanceof pe ? g : new Io(g instanceof Error ? g.message : g)
          );
        }
      };
      let c =
        e &&
        setTimeout(() => {
          (c = null), u(new pe(`timeout of ${e}ms exceeded`, pe.ETIMEDOUT));
        }, e);
      const f = () => {
        t &&
          (c && clearTimeout(c),
          (c = null),
          t.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(u)
              : m.removeEventListener("abort", u);
          }),
          (t = null));
      };
      t.forEach((m) => m.addEventListener("abort", u));
      const { signal: h } = i;
      return (h.unsubscribe = () => I.asap(f)), h;
    }
  },
  XT = function* (t, e) {
    let r = t.byteLength;
    if (r < e) {
      yield t;
      return;
    }
    let i = 0,
      a;
    for (; i < r; ) (a = i + e), yield t.slice(i, a), (i = a);
  },
  ZT = async function* (t, e) {
    for await (const r of eC(t)) yield* XT(r, e);
  },
  eC = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const e = t.getReader();
    try {
      for (;;) {
        const { done: r, value: i } = await e.read();
        if (r) break;
        yield i;
      }
    } finally {
      await e.cancel();
    }
  },
  $g = (t, e, r, i) => {
    const a = ZT(t, e);
    let u = 0,
      c,
      f = (h) => {
        c || ((c = !0), i && i(h));
      };
    return new ReadableStream(
      {
        async pull(h) {
          try {
            const { done: m, value: g } = await a.next();
            if (m) {
              f(), h.close();
              return;
            }
            let y = g.byteLength;
            if (r) {
              let w = (u += y);
              r(w);
            }
            h.enqueue(new Uint8Array(g));
          } catch (m) {
            throw (f(m), m);
          }
        },
        cancel(h) {
          return f(h), a.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Hg = 64 * 1024,
  { isFunction: tl } = I,
  tC = (({ Request: t, Response: e }) => ({ Request: t, Response: e }))(
    I.global
  ),
  { ReadableStream: Wg, TextEncoder: qg } = I.global,
  Kg = (t, ...e) => {
    try {
      return !!t(...e);
    } catch {
      return !1;
    }
  },
  nC = (t) => {
    t = I.merge.call({ skipUndefined: !0 }, tC, t);
    const { fetch: e, Request: r, Response: i } = t,
      a = e ? tl(e) : typeof fetch == "function",
      u = tl(r),
      c = tl(i);
    if (!a) return !1;
    const f = a && tl(Wg),
      h =
        a &&
        (typeof qg == "function"
          ? (
              (k) => (b) =>
                k.encode(b)
            )(new qg())
          : async (k) => new Uint8Array(await new r(k).arrayBuffer())),
      m =
        u &&
        f &&
        Kg(() => {
          let k = !1;
          const b = new r(xt.origin, {
            body: new Wg(),
            method: "POST",
            get duplex() {
              return (k = !0), "half";
            },
          }).headers.has("Content-Type");
          return k && !b;
        }),
      g = c && f && Kg(() => I.isReadableStream(new i("").body)),
      y = { stream: g && ((k) => k.body) };
    a &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((k) => {
        !y[k] &&
          (y[k] = (b, x) => {
            let R = b && b[k];
            if (R) return R.call(b);
            throw new pe(
              `Response type '${k}' is not supported`,
              pe.ERR_NOT_SUPPORT,
              x
            );
          });
      });
    const w = async (k) => {
        if (k == null) return 0;
        if (I.isBlob(k)) return k.size;
        if (I.isSpecCompliantForm(k))
          return (
            await new r(xt.origin, { method: "POST", body: k }).arrayBuffer()
          ).byteLength;
        if (I.isArrayBufferView(k) || I.isArrayBuffer(k)) return k.byteLength;
        if ((I.isURLSearchParams(k) && (k = k + ""), I.isString(k)))
          return (await h(k)).byteLength;
      },
      T = async (k, b) => {
        const x = I.toFiniteNumber(k.getContentLength());
        return x ?? w(b);
      };
    return async (k) => {
      let {
          url: b,
          method: x,
          data: R,
          signal: F,
          cancelToken: L,
          timeout: M,
          onDownloadProgress: U,
          onUploadProgress: Q,
          responseType: J,
          headers: D,
          withCredentials: X = "same-origin",
          fetchOptions: me,
        } = K0(k),
        de = e || fetch;
      J = J ? (J + "").toLowerCase() : "text";
      let Pe = YT([F, L && L.toAbortSignal()], M),
        Me = null;
      const Ne =
        Pe &&
        Pe.unsubscribe &&
        (() => {
          Pe.unsubscribe();
        });
      let Ie;
      try {
        if (
          Q &&
          m &&
          x !== "get" &&
          x !== "head" &&
          (Ie = await T(D, R)) !== 0
        ) {
          let A = new r(b, { method: "POST", body: R, duplex: "half" }),
            z;
          if (
            (I.isFormData(R) &&
              (z = A.headers.get("content-type")) &&
              D.setContentType(z),
            A.body)
          ) {
            const [ye, ve] = Bg(Ie, kl(Ug(Q)));
            R = $g(A.body, Hg, ye, ve);
          }
        }
        I.isString(X) || (X = X ? "include" : "omit");
        const xe = u && "credentials" in r.prototype,
          fe = {
            ...me,
            signal: Pe,
            method: x.toUpperCase(),
            headers: D.normalize().toJSON(),
            body: R,
            duplex: "half",
            credentials: xe ? X : void 0,
          };
        Me = u && new r(b, fe);
        let q = await (u ? de(Me, me) : de(b, fe));
        const se = g && (J === "stream" || J === "response");
        if (g && (U || (se && Ne))) {
          const A = {};
          ["status", "statusText", "headers"].forEach((le) => {
            A[le] = q[le];
          });
          const z = I.toFiniteNumber(q.headers.get("content-length")),
            [ye, ve] = (U && Bg(z, kl(Ug(U), !0))) || [];
          q = new i(
            $g(q.body, Hg, ye, () => {
              ve && ve(), Ne && Ne();
            }),
            A
          );
        }
        J = J || "text";
        let V = await y[I.findKey(y, J) || "text"](q, k);
        return (
          !se && Ne && Ne(),
          await new Promise((A, z) => {
            W0(A, z, {
              data: V,
              headers: Lt.from(q.headers),
              status: q.status,
              statusText: q.statusText,
              config: k,
              request: Me,
            });
          })
        );
      } catch (xe) {
        throw (
          (Ne && Ne(),
          xe && xe.name === "TypeError" && /Load failed|fetch/i.test(xe.message)
            ? Object.assign(
                new pe(
                  "Network Error",
                  pe.ERR_NETWORK,
                  k,
                  Me,
                  xe && xe.response
                ),
                { cause: xe.cause || xe }
              )
            : pe.from(xe, xe && xe.code, k, Me, xe && xe.response))
        );
      }
    };
  },
  rC = new Map(),
  Q0 = (t) => {
    let e = (t && t.env) || {};
    const { fetch: r, Request: i, Response: a } = e,
      u = [i, a, r];
    let c = u.length,
      f = c,
      h,
      m,
      g = rC;
    for (; f--; )
      (h = u[f]),
        (m = g.get(h)),
        m === void 0 && g.set(h, (m = f ? new Map() : nC(e))),
        (g = m);
    return m;
  };
Q0();
const xf = { http: xT, xhr: JT, fetch: { get: Q0 } };
I.forEach(xf, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Qg = (t) => `- ${t}`,
  sC = (t) => I.isFunction(t) || t === null || t === !1;
function iC(t, e) {
  t = I.isArray(t) ? t : [t];
  const { length: r } = t;
  let i, a;
  const u = {};
  for (let c = 0; c < r; c++) {
    i = t[c];
    let f;
    if (
      ((a = i),
      !sC(i) && ((a = xf[(f = String(i)).toLowerCase()]), a === void 0))
    )
      throw new pe(`Unknown adapter '${f}'`);
    if (a && (I.isFunction(a) || (a = a.get(e)))) break;
    u[f || "#" + c] = a;
  }
  if (!a) {
    const c = Object.entries(u).map(
      ([h, m]) =>
        `adapter ${h} ` +
        (m === !1
          ? "is not supported by the environment"
          : "is not available in the build")
    );
    let f = r
      ? c.length > 1
        ? `since :
` +
          c.map(Qg).join(`
`)
        : " " + Qg(c[0])
      : "as no adapter specified";
    throw new pe(
      "There is no suitable adapter to dispatch the request " + f,
      "ERR_NOT_SUPPORT"
    );
  }
  return a;
}
const G0 = { getAdapter: iC, adapters: xf };
function Gc(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Io(null, t);
}
function Gg(t) {
  return (
    Gc(t),
    (t.headers = Lt.from(t.headers)),
    (t.data = Qc.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    G0.getAdapter(
      t.adapter || Do.adapter,
      t
    )(t).then(
      function (i) {
        return (
          Gc(t),
          (i.data = Qc.call(t, t.transformResponse, i)),
          (i.headers = Lt.from(i.headers)),
          i
        );
      },
      function (i) {
        return (
          H0(i) ||
            (Gc(t),
            i &&
              i.response &&
              ((i.response.data = Qc.call(t, t.transformResponse, i.response)),
              (i.response.headers = Lt.from(i.response.headers)))),
          Promise.reject(i)
        );
      }
    )
  );
}
const J0 = "1.13.5",
  Fl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    Fl[t] = function (i) {
      return typeof i === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const Jg = {};
Fl.transitional = function (e, r, i) {
  function a(u, c) {
    return (
      "[Axios v" +
      J0 +
      "] Transitional option '" +
      u +
      "'" +
      c +
      (i ? ". " + i : "")
    );
  }
  return (u, c, f) => {
    if (e === !1)
      throw new pe(
        a(c, " has been removed" + (r ? " in " + r : "")),
        pe.ERR_DEPRECATED
      );
    return (
      r &&
        !Jg[c] &&
        ((Jg[c] = !0),
        console.warn(
          a(
            c,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      e ? e(u, c, f) : !0
    );
  };
};
Fl.spelling = function (e) {
  return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0);
};
function oC(t, e, r) {
  if (typeof t != "object")
    throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(t);
  let a = i.length;
  for (; a-- > 0; ) {
    const u = i[a],
      c = e[u];
    if (c) {
      const f = t[u],
        h = f === void 0 || c(f, u, t);
      if (h !== !0)
        throw new pe("option " + u + " must be " + h, pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new pe("Unknown option " + u, pe.ERR_BAD_OPTION);
  }
}
const dl = { assertOptions: oC, validators: Fl },
  Qt = dl.validators;
let is = class {
  constructor(e) {
    (this.defaults = e || {}),
      (this.interceptors = { request: new Fg(), response: new Fg() });
  }
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (i) {
      if (i instanceof Error) {
        let a = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(a)
          : (a = new Error());
        const u = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? u &&
              !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + u)
            : (i.stack = u);
        } catch {}
      }
      throw i;
    }
  }
  _request(e, r) {
    typeof e == "string" ? ((r = r || {}), (r.url = e)) : (r = e || {}),
      (r = us(this.defaults, r));
    const { transitional: i, paramsSerializer: a, headers: u } = r;
    i !== void 0 &&
      dl.assertOptions(
        i,
        {
          silentJSONParsing: Qt.transitional(Qt.boolean),
          forcedJSONParsing: Qt.transitional(Qt.boolean),
          clarifyTimeoutError: Qt.transitional(Qt.boolean),
          legacyInterceptorReqResOrdering: Qt.transitional(Qt.boolean),
        },
        !1
      ),
      a != null &&
        (I.isFunction(a)
          ? (r.paramsSerializer = { serialize: a })
          : dl.assertOptions(
              a,
              { encode: Qt.function, serialize: Qt.function },
              !0
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      dl.assertOptions(
        r,
        {
          baseUrl: Qt.spelling("baseURL"),
          withXsrfToken: Qt.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let c = u && I.merge(u.common, u[r.method]);
    u &&
      I.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (k) => {
          delete u[k];
        }
      ),
      (r.headers = Lt.concat(c, u));
    const f = [];
    let h = !0;
    this.interceptors.request.forEach(function (b) {
      if (typeof b.runWhen == "function" && b.runWhen(r) === !1) return;
      h = h && b.synchronous;
      const x = r.transitional || vf;
      x && x.legacyInterceptorReqResOrdering
        ? f.unshift(b.fulfilled, b.rejected)
        : f.push(b.fulfilled, b.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function (b) {
      m.push(b.fulfilled, b.rejected);
    });
    let g,
      y = 0,
      w;
    if (!h) {
      const k = [Gg.bind(this), void 0];
      for (
        k.unshift(...f), k.push(...m), w = k.length, g = Promise.resolve(r);
        y < w;

      )
        g = g.then(k[y++], k[y++]);
      return g;
    }
    w = f.length;
    let T = r;
    for (; y < w; ) {
      const k = f[y++],
        b = f[y++];
      try {
        T = k(T);
      } catch (x) {
        b.call(this, x);
        break;
      }
    }
    try {
      g = Gg.call(this, T);
    } catch (k) {
      return Promise.reject(k);
    }
    for (y = 0, w = m.length; y < w; ) g = g.then(m[y++], m[y++]);
    return g;
  }
  getUri(e) {
    e = us(this.defaults, e);
    const r = q0(e.baseURL, e.url, e.allowAbsoluteUrls);
    return z0(r, e.params, e.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function (e) {
  is.prototype[e] = function (r, i) {
    return this.request(
      us(i || {}, { method: e, url: r, data: (i || {}).data })
    );
  };
});
I.forEach(["post", "put", "patch"], function (e) {
  function r(i) {
    return function (u, c, f) {
      return this.request(
        us(f || {}, {
          method: e,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: c,
        })
      );
    };
  }
  (is.prototype[e] = r()), (is.prototype[e + "Form"] = r(!0));
});
let aC = class Y0 {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (u) {
      r = u;
    });
    const i = this;
    this.promise.then((a) => {
      if (!i._listeners) return;
      let u = i._listeners.length;
      for (; u-- > 0; ) i._listeners[u](a);
      i._listeners = null;
    }),
      (this.promise.then = (a) => {
        let u;
        const c = new Promise((f) => {
          i.subscribe(f), (u = f);
        }).then(a);
        return (
          (c.cancel = function () {
            i.unsubscribe(u);
          }),
          c
        );
      }),
      e(function (u, c, f) {
        i.reason || ((i.reason = new Io(u, c, f)), r(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(),
      r = (i) => {
        e.abort(i);
      };
    return (
      this.subscribe(r),
      (e.signal.unsubscribe = () => this.unsubscribe(r)),
      e.signal
    );
  }
  static source() {
    let e;
    return {
      token: new Y0(function (a) {
        e = a;
      }),
      cancel: e,
    };
  }
};
function lC(t) {
  return function (r) {
    return t.apply(null, r);
  };
}
function uC(t) {
  return I.isObject(t) && t.isAxiosError === !0;
}
const Dd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Dd).forEach(([t, e]) => {
  Dd[e] = t;
});
function X0(t) {
  const e = new is(t),
    r = N0(is.prototype.request, e);
  return (
    I.extend(r, is.prototype, e, { allOwnKeys: !0 }),
    I.extend(r, e, null, { allOwnKeys: !0 }),
    (r.create = function (a) {
      return X0(us(t, a));
    }),
    r
  );
}
const Xe = X0(Do);
Xe.Axios = is;
Xe.CanceledError = Io;
Xe.CancelToken = aC;
Xe.isCancel = H0;
Xe.VERSION = J0;
Xe.toFormData = Il;
Xe.AxiosError = pe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function (e) {
  return Promise.all(e);
};
Xe.spread = lC;
Xe.isAxiosError = uC;
Xe.mergeConfig = us;
Xe.AxiosHeaders = Lt;
Xe.formToJSON = (t) => $0(I.isHTMLForm(t) ? new FormData(t) : t);
Xe.getAdapter = G0.getAdapter;
Xe.HttpStatusCode = Dd;
Xe.default = Xe;
const {
    Axios: $N,
    AxiosError: HN,
    CanceledError: WN,
    isCancel: qN,
    CancelToken: KN,
    VERSION: QN,
    all: GN,
    Cancel: JN,
    isAxiosError: YN,
    spread: XN,
    toFormData: ZN,
    AxiosHeaders: eO,
    HttpStatusCode: tO,
    formToJSON: nO,
    getAdapter: rO,
    mergeConfig: sO,
  } = Xe,
  cC = typeof window > "u",
  Yg = !cC && window.self !== window.top,
  Jc = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15),
  ct = [];
for (let t = 0; t < 256; ++t) ct.push((t + 256).toString(16).slice(1));
function dC(t, e = 0) {
  return (
    ct[t[e + 0]] +
    ct[t[e + 1]] +
    ct[t[e + 2]] +
    ct[t[e + 3]] +
    "-" +
    ct[t[e + 4]] +
    ct[t[e + 5]] +
    "-" +
    ct[t[e + 6]] +
    ct[t[e + 7]] +
    "-" +
    ct[t[e + 8]] +
    ct[t[e + 9]] +
    "-" +
    ct[t[e + 10]] +
    ct[t[e + 11]] +
    ct[t[e + 12]] +
    ct[t[e + 13]] +
    ct[t[e + 14]] +
    ct[t[e + 15]]
  ).toLowerCase();
}
let Yc;
const fC = new Uint8Array(16);
function hC() {
  if (!Yc) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    Yc = crypto.getRandomValues.bind(crypto);
  }
  return Yc(fC);
}
const pC =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Xg = { randomUUID: pC };
function mC(t, e, r) {
  var a;
  t = t || {};
  const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? hC();
  if (i.length < 16) throw new Error("Random bytes length must be >= 16");
  return (i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), dC(i);
}
function gC(t, e, r) {
  return Xg.randomUUID && !t ? Xg.randomUUID() : mC(t);
}
class yC extends Error {
  constructor(e, r, i, a, u) {
    super(e),
      (this.name = "Base44Error"),
      (this.status = r),
      (this.code = i),
      (this.data = a),
      (this.originalError = u);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      data: this.data,
    };
  }
}
function ro({
  baseURL: t,
  headers: e = {},
  token: r,
  interceptResponses: i = !0,
  onError: a,
}) {
  const u = Xe.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...e,
    },
  });
  return (
    r && (u.defaults.headers.common.Authorization = `Bearer ${r}`),
    u.interceptors.request.use((c) => {
      typeof window < "u" &&
        c.headers.set("X-Origin-URL", window.location.href);
      const f = gC();
      if (((c.requestId = f), Yg))
        try {
          window.parent.postMessage(
            {
              type: "api-request-start",
              requestId: f,
              data: {
                url: t + c.url,
                method: c.method,
                body: c.data instanceof FormData ? "[FormData object]" : c.data,
              },
            },
            "*"
          );
        } catch {}
      return c;
    }),
    i &&
      u.interceptors.response.use(
        (c) => {
          var f;
          const h =
            (f = c.config) === null || f === void 0 ? void 0 : f.requestId;
          try {
            Yg &&
              h &&
              window.parent.postMessage(
                {
                  type: "api-request-end",
                  requestId: h,
                  data: { statusCode: c.status, response: c.data },
                },
                "*"
              );
          } catch {}
          return c.data;
        },
        (c) => {
          var f, h, m, g, y, w, T, k;
          const b =
              ((h =
                (f = c.response) === null || f === void 0 ? void 0 : f.data) ===
                null || h === void 0
                ? void 0
                : h.message) ||
              ((g =
                (m = c.response) === null || m === void 0 ? void 0 : m.data) ===
                null || g === void 0
                ? void 0
                : g.detail) ||
              c.message,
            x = new yC(
              b,
              (y = c.response) === null || y === void 0 ? void 0 : y.status,
              (T =
                (w = c.response) === null || w === void 0 ? void 0 : w.data) ===
                null || T === void 0
                ? void 0
                : T.code,
              (k = c.response) === null || k === void 0 ? void 0 : k.data,
              c
            );
          return a == null || a(x), Promise.reject(x);
        }
      ),
    u
  );
}
function Zg(t) {
  const { axios: e, appId: r, getSocket: i } = t;
  return new Proxy(
    {},
    {
      get(a, u) {
        if (!(typeof u != "string" || u === "then" || u.startsWith("_")))
          return wC(e, r, u, i);
      },
    }
  );
}
function vC(t) {
  var e;
  try {
    const r = JSON.parse(t);
    return {
      type: r.type,
      data: r.data,
      id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
      timestamp: r.timestamp || new Date().toISOString(),
    };
  } catch (r) {
    return (
      console.warn("[Base44 SDK] Failed to parse realtime message:", r), null
    );
  }
}
function wC(t, e, r, i) {
  const a = `/apps/${e}/entities/${r}`;
  return {
    async list(u, c, f, h) {
      const m = {};
      return (
        u && (m.sort = u),
        c && (m.limit = c),
        f && (m.skip = f),
        h && (m.fields = Array.isArray(h) ? h.join(",") : h),
        t.get(a, { params: m })
      );
    },
    async filter(u, c, f, h, m) {
      const g = { q: JSON.stringify(u) };
      return (
        c && (g.sort = c),
        f && (g.limit = f),
        h && (g.skip = h),
        m && (g.fields = Array.isArray(m) ? m.join(",") : m),
        t.get(a, { params: g })
      );
    },
    async get(u) {
      return t.get(`${a}/${u}`);
    },
    async create(u) {
      return t.post(a, u);
    },
    async update(u, c) {
      return t.put(`${a}/${u}`, c);
    },
    async delete(u) {
      return t.delete(`${a}/${u}`);
    },
    async deleteMany(u) {
      return t.delete(a, { data: u });
    },
    async bulkCreate(u) {
      return t.post(`${a}/bulk`, u);
    },
    async updateMany(u, c) {
      return t.patch(`${a}/update-many`, { query: u, data: c });
    },
    async bulkUpdate(u) {
      return t.put(`${a}/bulk`, u);
    },
    async importEntities(u) {
      const c = new FormData();
      return (
        c.append("file", u, u.name),
        t.post(`${a}/import`, c, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      );
    },
    subscribe(u) {
      const c = `entities:${e}:${r}`;
      return i().subscribeToRoom(c, {
        update_model: (m) => {
          const g = vC(m.data);
          if (g)
            try {
              u(g);
            } catch (y) {
              console.error("[Base44 SDK] Subscription callback error:", y);
            }
        },
      });
    },
  };
}
function xC(t, e) {
  return {
    async call(r, i, a) {
      if (!(r != null && r.trim()))
        throw new Error("Integration slug is required and cannot be empty");
      if (!(i != null && i.trim()))
        throw new Error("Operation ID is required and cannot be empty");
      const { pathParams: u, queryParams: c, ...f } = a ?? {},
        h = {
          ...f,
          ...(u && { path_params: u }),
          ...(c && { query_params: c }),
        };
      return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h);
    },
  };
}
function ey(t, e) {
  const r = xC(t, e);
  return new Proxy(
    {},
    {
      get(i, a) {
        if (!(typeof a != "string" || a === "then" || a.startsWith("_")))
          return a === "custom"
            ? r
            : new Proxy(
                {},
                {
                  get(u, c) {
                    if (
                      !(
                        typeof c != "string" ||
                        c === "then" ||
                        c.startsWith("_")
                      )
                    )
                      return async (f) => {
                        if (typeof f == "string")
                          throw new Error(
                            `Integration ${c} must receive an object with named parameters, received: ${f}`
                          );
                        let h, m;
                        return (
                          f instanceof FormData ||
                          (f && Object.values(f).some((g) => g instanceof File))
                            ? ((h = new FormData()),
                              Object.keys(f).forEach((g) => {
                                f[g] instanceof File
                                  ? h.append(g, f[g], f[g].name)
                                  : typeof f[g] == "object" && f[g] !== null
                                  ? h.append(g, JSON.stringify(f[g]))
                                  : h.append(g, f[g]);
                              }),
                              (m = "multipart/form-data"))
                            : ((h = f), (m = "application/json")),
                          a === "Core"
                            ? t.post(
                                `/apps/${e}/integration-endpoints/Core/${c}`,
                                h || f,
                                { headers: { "Content-Type": m } }
                              )
                            : t.post(
                                `/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`,
                                h || f,
                                { headers: { "Content-Type": m } }
                              )
                        );
                      };
                  },
                }
              );
      },
    }
  );
}
function SC(t, e, r, i) {
  return {
    async me() {
      return t.get(`/apps/${r}/entities/User/me`);
    },
    async updateMe(a) {
      return t.put(`/apps/${r}/entities/User/me`, a);
    },
    redirectToLogin(a) {
      if (typeof window > "u")
        throw new Error(
          "Login method can only be used in a browser environment"
        );
      const u = a
          ? new URL(a, window.location.origin).toString()
          : window.location.href,
        c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(u)}`;
      window.location.href = c;
    },
    loginWithProvider(a, u = "/") {
      const c = new URL(u, window.location.origin).toString(),
        f = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
      let h;
      a === "sso"
        ? (h = `/apps/${r}/auth/sso/login`)
        : (h = `/apps/auth${a === "google" ? "" : `/${a}`}/login`);
      const m = `${i.appBaseUrl}/api${h}?${f}`;
      window.location.href = m;
    },
    logout(a) {
      if (
        (delete t.defaults.headers.common.Authorization, typeof window < "u")
      ) {
        if (window.localStorage)
          try {
            window.localStorage.removeItem("base44_access_token"),
              window.localStorage.removeItem("token");
          } catch (f) {
            console.error("Failed to remove token from localStorage:", f);
          }
        const u = a || window.location.href,
          c = `${
            i.appBaseUrl
          }/api/apps/auth/logout?from_url=${encodeURIComponent(u)}`;
        window.location.href = c;
      }
    },
    setToken(a, u = !0) {
      if (
        a &&
        ((t.defaults.headers.common.Authorization = `Bearer ${a}`),
        (e.defaults.headers.common.Authorization = `Bearer ${a}`),
        u && typeof window < "u" && window.localStorage)
      )
        try {
          window.localStorage.setItem("base44_access_token", a),
            window.localStorage.setItem("token", a);
        } catch (c) {
          console.error("Failed to save token to localStorage:", c);
        }
    },
    async loginViaEmailPassword(a, u, c) {
      var f;
      try {
        const h = await t.post(`/apps/${r}/auth/login`, {
            email: a,
            password: u,
            ...(c && { turnstile_token: c }),
          }),
          { access_token: m, user: g } = h;
        return m && this.setToken(m), { access_token: m, user: g };
      } catch (h) {
        throw (
          (((f = h.response) === null || f === void 0 ? void 0 : f.status) ===
            401 && (await this.logout()),
          h)
        );
      }
    },
    async isAuthenticated() {
      try {
        return await this.me(), !0;
      } catch {
        return !1;
      }
    },
    inviteUser(a, u) {
      return t.post(`/apps/${r}/users/invite-user`, { user_email: a, role: u });
    },
    register(a) {
      return t.post(`/apps/${r}/auth/register`, a);
    },
    verifyOtp({ email: a, otpCode: u }) {
      return t.post(`/apps/${r}/auth/verify-otp`, { email: a, otp_code: u });
    },
    resendOtp(a) {
      return t.post(`/apps/${r}/auth/resend-otp`, { email: a });
    },
    resetPasswordRequest(a) {
      return t.post(`/apps/${r}/auth/reset-password-request`, { email: a });
    },
    resetPassword({ resetToken: a, newPassword: u }) {
      return t.post(`/apps/${r}/auth/reset-password`, {
        reset_token: a,
        new_password: u,
      });
    },
    changePassword({ userId: a, currentPassword: u, newPassword: c }) {
      return t.post(`/apps/${r}/auth/change-password`, {
        user_id: a,
        current_password: u,
        new_password: c,
      });
    },
  };
}
function bC(t, e) {
  return {
    async getAccessToken(r) {
      const i = `/apps/${e}/auth/sso/accesstoken/${r}`;
      return t.get(i);
    },
  };
}
function kC(t, e) {
  return {
    async getAccessToken(r) {
      if (!r || typeof r != "string")
        throw new Error("Integration type is required and must be a string");
      return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token;
    },
    async getConnection(r) {
      var i;
      if (!r || typeof r != "string")
        throw new Error("Integration type is required and must be a string");
      const u = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
      return {
        accessToken: u.access_token,
        connectionConfig:
          (i = u.connection_config) !== null && i !== void 0 ? i : null,
      };
    },
    async getCurrentAppUserAccessToken(r) {
      if (!r || typeof r != "string")
        throw new Error("Connector ID is required and must be a string");
      return (await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`))
        .access_token;
    },
  };
}
function EC(t, e) {
  return {
    async connectAppUser(r) {
      if (!r || typeof r != "string")
        throw new Error("Connector ID is required and must be a string");
      return (await t.post(`/apps/${e}/app-user-auth/connectors/${r}/initiate`))
        .redirect_url;
    },
    async disconnectAppUser(r) {
      if (!r || typeof r != "string")
        throw new Error("Connector ID is required and must be a string");
      await t.delete(`/apps/${e}/app-user-auth/connectors/${r}`);
    },
  };
}
function wo(t = {}) {
  const {
    storageKey: e = "base44_access_token",
    paramName: r = "access_token",
    saveToStorage: i = !0,
    removeFromUrl: a = !0,
  } = t;
  let u = null;
  if (typeof window < "u" && window.location)
    try {
      const c = new URLSearchParams(window.location.search);
      if (((u = c.get(r)), u)) {
        if ((i && TC(u, { storageKey: e }), a)) {
          c.delete(r);
          const f = `${window.location.pathname}${
            c.toString() ? `?${c.toString()}` : ""
          }${window.location.hash}`;
          window.history.replaceState({}, document.title, f);
        }
        return u;
      }
    } catch (c) {
      console.error("Error retrieving token from URL:", c);
    }
  if (typeof window < "u" && window.localStorage)
    try {
      return (u = window.localStorage.getItem(e)), u;
    } catch (c) {
      console.error("Error retrieving token from local storage:", c);
    }
  return null;
}
function TC(t, e) {
  const { storageKey: r = "base44_access_token" } = e;
  if (typeof window > "u" || !window.localStorage || !t) return !1;
  try {
    return (
      window.localStorage.setItem(r, t),
      window.localStorage.setItem("token", t),
      !0
    );
  } catch (i) {
    return console.error("Error saving token to local storage:", i), !1;
  }
}
function ty(t, e, r) {
  const i = (u, c) => (u ? `${String(u).replace(/\/$/, "")}${c}` : c),
    a = (u) => {
      const c = new Headers();
      if (r != null && r.getAuthHeaders) {
        const f = r.getAuthHeaders();
        Object.entries(f).forEach(([h, m]) => {
          m != null && c.set(h, String(m));
        });
      }
      return (
        u &&
          new Headers(u).forEach((f, h) => {
            c.set(h, f);
          }),
        c
      );
    };
  return {
    async invoke(u, c) {
      if (typeof c == "string")
        throw new Error(
          `Function ${u} must receive an object with named parameters, received: ${c}`
        );
      let f, h;
      return (
        c instanceof FormData ||
        (c && Object.values(c).some((m) => m instanceof File))
          ? ((f = new FormData()),
            Object.keys(c).forEach((m) => {
              c[m] instanceof File
                ? f.append(m, c[m], c[m].name)
                : typeof c[m] == "object" && c[m] !== null
                ? f.append(m, JSON.stringify(c[m]))
                : f.append(m, c[m]);
            }),
            (h = "multipart/form-data"))
          : ((f = c), (h = "application/json")),
        t.post(`/apps/${e}/functions/${u}`, f || c, {
          headers: { "Content-Type": h },
        })
      );
    },
    async fetch(u, c = {}) {
      const h = `/functions${u.startsWith("/") ? u : `/${u}`}`,
        m = a(c.headers),
        g = { ...c, headers: m };
      return await fetch(i(r == null ? void 0 : r.baseURL, h), g);
    },
  };
}
function ny({ axios: t, getSocket: e, appId: r, serverUrl: i, token: a }) {
  const u = `/apps/${r}/agents`,
    c = {},
    f = () => t.get(`${u}/conversations`),
    h = (b) => t.get(`${u}/conversations/${b}`);
  return {
    getConversations: f,
    getConversation: h,
    listConversations: (b) => t.get(`${u}/conversations`, { params: b }),
    createConversation: (b) => t.post(`${u}/conversations`, b),
    addMessage: async (b, x) =>
      t.post(`${u}/conversations/v2/${b.id}/messages`, x),
    subscribeToConversation: (b, x) => {
      const R = `/agent-conversations/${b}`,
        F = e(),
        L = h(b).then((M) => ((c[b] = M), M));
      return F.subscribeToRoom(R, {
        connect: () => {},
        update_model: async ({ data: M }) => {
          const U = JSON.parse(M);
          if (U._message) {
            await L;
            const Q = U._message,
              J = c[b];
            if (J) {
              const D = J.messages || [],
                X = D.findIndex((de) => de.id === Q.id),
                me =
                  X !== -1 ? D.map((de, Pe) => (Pe === X ? Q : de)) : [...D, Q];
              (c[b] = { ...J, messages: me }), x == null || x(c[b]);
            }
          }
        },
      });
    },
    getWhatsAppConnectURL: (b) => {
      const x = `${i}/api/apps/${r}/agents/${encodeURIComponent(b)}/whatsapp`,
        R = a ?? wo();
      return R ? `${x}?token=${R}` : x;
    },
    getTelegramConnectURL: (b) => {
      const x = `${i}/api/apps/${r}/agents/${encodeURIComponent(b)}/telegram`,
        R = a ?? wo();
      return R ? `${x}?token=${R}` : x;
    },
  };
}
function ry(t, e) {
  const r = `/app-logs/${e}`;
  return {
    async logUserInApp(i) {
      await t.post(`${r}/log-user-in-app/${i}`);
    },
    async fetchLogs(i = {}) {
      return await t.get(r, { params: i });
    },
    async getStats(i = {}) {
      return await t.get(`${r}/stats`, { params: i });
    },
  };
}
function CC(t, e) {
  return {
    async inviteUser(r, i) {
      if (i !== "user" && i !== "admin")
        throw new Error(
          `Invalid role: "${i}". Role must be either "user" or "admin".`
        );
      return await t.post(`/apps/${e}/runtime/users/invite-user`, {
        user_email: r,
        role: i,
      });
    },
  };
}
const En = Object.create(null);
En.open = "0";
En.close = "1";
En.ping = "2";
En.pong = "3";
En.message = "4";
En.upgrade = "5";
En.noop = "6";
const fl = Object.create(null);
Object.keys(En).forEach((t) => {
  fl[En[t]] = t;
});
const Id = { type: "error", data: "parser error" },
  Z0 =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  ew = typeof ArrayBuffer == "function",
  tw = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t && t.buffer instanceof ArrayBuffer,
  Sf = ({ type: t, data: e }, r, i) =>
    Z0 && e instanceof Blob
      ? r
        ? i(e)
        : sy(e, i)
      : ew && (e instanceof ArrayBuffer || tw(e))
      ? r
        ? i(e)
        : sy(new Blob([e]), i)
      : i(En[t] + (e || "")),
  sy = (t, e) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const i = r.result.split(",")[1];
        e("b" + (i || ""));
      }),
      r.readAsDataURL(t)
    );
  };
function iy(t) {
  return t instanceof Uint8Array
    ? t
    : t instanceof ArrayBuffer
    ? new Uint8Array(t)
    : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Xc;
function PC(t, e) {
  if (Z0 && t.data instanceof Blob)
    return t.data.arrayBuffer().then(iy).then(e);
  if (ew && (t.data instanceof ArrayBuffer || tw(t.data))) return e(iy(t.data));
  Sf(t, !1, (r) => {
    Xc || (Xc = new TextEncoder()), e(Xc.encode(r));
  });
}
const oy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  so = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < oy.length; t++) so[oy.charCodeAt(t)] = t;
const _C = (t) => {
    let e = t.length * 0.75,
      r = t.length,
      i,
      a = 0,
      u,
      c,
      f,
      h;
    t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e),
      g = new Uint8Array(m);
    for (i = 0; i < r; i += 4)
      (u = so[t.charCodeAt(i)]),
        (c = so[t.charCodeAt(i + 1)]),
        (f = so[t.charCodeAt(i + 2)]),
        (h = so[t.charCodeAt(i + 3)]),
        (g[a++] = (u << 2) | (c >> 4)),
        (g[a++] = ((c & 15) << 4) | (f >> 2)),
        (g[a++] = ((f & 3) << 6) | (h & 63));
    return m;
  },
  RC = typeof ArrayBuffer == "function",
  bf = (t, e) => {
    if (typeof t != "string") return { type: "message", data: nw(t, e) };
    const r = t.charAt(0);
    return r === "b"
      ? { type: "message", data: AC(t.substring(1), e) }
      : fl[r]
      ? t.length > 1
        ? { type: fl[r], data: t.substring(1) }
        : { type: fl[r] }
      : Id;
  },
  AC = (t, e) => {
    if (RC) {
      const r = _C(t);
      return nw(r, e);
    } else return { base64: !0, data: t };
  },
  nw = (t, e) => {
    switch (e) {
      case "blob":
        return t instanceof Blob ? t : new Blob([t]);
      case "arraybuffer":
      default:
        return t instanceof ArrayBuffer ? t : t.buffer;
    }
  },
  rw = "",
  NC = (t, e) => {
    const r = t.length,
      i = new Array(r);
    let a = 0;
    t.forEach((u, c) => {
      Sf(u, !1, (f) => {
        (i[c] = f), ++a === r && e(i.join(rw));
      });
    });
  },
  OC = (t, e) => {
    const r = t.split(rw),
      i = [];
    for (let a = 0; a < r.length; a++) {
      const u = bf(r[a], e);
      if ((i.push(u), u.type === "error")) break;
    }
    return i;
  };
function jC() {
  return new TransformStream({
    transform(t, e) {
      PC(t, (r) => {
        const i = r.length;
        let a;
        if (i < 126)
          (a = new Uint8Array(1)), new DataView(a.buffer).setUint8(0, i);
        else if (i < 65536) {
          a = new Uint8Array(3);
          const u = new DataView(a.buffer);
          u.setUint8(0, 126), u.setUint16(1, i);
        } else {
          a = new Uint8Array(9);
          const u = new DataView(a.buffer);
          u.setUint8(0, 127), u.setBigUint64(1, BigInt(i));
        }
        t.data && typeof t.data != "string" && (a[0] |= 128),
          e.enqueue(a),
          e.enqueue(r);
      });
    },
  });
}
let Zc;
function nl(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function rl(t, e) {
  if (t[0].length === e) return t.shift();
  const r = new Uint8Array(e);
  let i = 0;
  for (let a = 0; a < e; a++)
    (r[a] = t[0][i++]), i === t[0].length && (t.shift(), (i = 0));
  return t.length && i < t[0].length && (t[0] = t[0].slice(i)), r;
}
function LC(t, e) {
  Zc || (Zc = new TextDecoder());
  const r = [];
  let i = 0,
    a = -1,
    u = !1;
  return new TransformStream({
    transform(c, f) {
      for (r.push(c); ; ) {
        if (i === 0) {
          if (nl(r) < 1) break;
          const h = rl(r, 1);
          (u = (h[0] & 128) === 128),
            (a = h[0] & 127),
            a < 126 ? (i = 3) : a === 126 ? (i = 1) : (i = 2);
        } else if (i === 1) {
          if (nl(r) < 2) break;
          const h = rl(r, 2);
          (a = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0)),
            (i = 3);
        } else if (i === 2) {
          if (nl(r) < 8) break;
          const h = rl(r, 8),
            m = new DataView(h.buffer, h.byteOffset, h.length),
            g = m.getUint32(0);
          if (g > Math.pow(2, 21) - 1) {
            f.enqueue(Id);
            break;
          }
          (a = g * Math.pow(2, 32) + m.getUint32(4)), (i = 3);
        } else {
          if (nl(r) < a) break;
          const h = rl(r, a);
          f.enqueue(bf(u ? h : Zc.decode(h), e)), (i = 0);
        }
        if (a === 0 || a > t) {
          f.enqueue(Id);
          break;
        }
      }
    },
  });
}
const sw = 4;
function et(t) {
  if (t) return MC(t);
}
function MC(t) {
  for (var e in et.prototype) t[e] = et.prototype[e];
  return t;
}
et.prototype.on = et.prototype.addEventListener = function (t, e) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
  );
};
et.prototype.once = function (t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return (r.fn = e), this.on(t, r), this;
};
et.prototype.off =
  et.prototype.removeListener =
  et.prototype.removeAllListeners =
  et.prototype.removeEventListener =
    function (t, e) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var r = this._callbacks["$" + t];
      if (!r) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + t], this;
      for (var i, a = 0; a < r.length; a++)
        if (((i = r[a]), i === e || i.fn === e)) {
          r.splice(a, 1);
          break;
        }
      return r.length === 0 && delete this._callbacks["$" + t], this;
    };
et.prototype.emit = function (t) {
  this._callbacks = this._callbacks || {};
  for (
    var e = new Array(arguments.length - 1),
      r = this._callbacks["$" + t],
      i = 1;
    i < arguments.length;
    i++
  )
    e[i - 1] = arguments[i];
  if (r) {
    r = r.slice(0);
    for (var i = 0, a = r.length; i < a; ++i) r[i].apply(this, e);
  }
  return this;
};
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function (t) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || []
  );
};
et.prototype.hasListeners = function (t) {
  return !!this.listeners(t).length;
};
const Vl =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (e) => Promise.resolve().then(e)
      : (e, r) => r(e, 0),
  Zt =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  DC = "arraybuffer";
function iw(t, ...e) {
  return e.reduce((r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]), r), {});
}
const IC = Zt.setTimeout,
  FC = Zt.clearTimeout;
function Bl(t, e) {
  e.useNativeTimers
    ? ((t.setTimeoutFn = IC.bind(Zt)), (t.clearTimeoutFn = FC.bind(Zt)))
    : ((t.setTimeoutFn = Zt.setTimeout.bind(Zt)),
      (t.clearTimeoutFn = Zt.clearTimeout.bind(Zt)));
}
const VC = 1.33;
function BC(t) {
  return typeof t == "string"
    ? UC(t)
    : Math.ceil((t.byteLength || t.size) * VC);
}
function UC(t) {
  let e = 0,
    r = 0;
  for (let i = 0, a = t.length; i < a; i++)
    (e = t.charCodeAt(i)),
      e < 128
        ? (r += 1)
        : e < 2048
        ? (r += 2)
        : e < 55296 || e >= 57344
        ? (r += 3)
        : (i++, (r += 4));
  return r;
}
function ow() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function zC(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) &&
      (e.length && (e += "&"),
      (e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r])));
  return e;
}
function $C(t) {
  let e = {},
    r = t.split("&");
  for (let i = 0, a = r.length; i < a; i++) {
    let u = r[i].split("=");
    e[decodeURIComponent(u[0])] = decodeURIComponent(u[1]);
  }
  return e;
}
class HC extends Error {
  constructor(e, r, i) {
    super(e),
      (this.description = r),
      (this.context = i),
      (this.type = "TransportError");
  }
}
class kf extends et {
  constructor(e) {
    super(),
      (this.writable = !1),
      Bl(this, e),
      (this.opts = e),
      (this.query = e.query),
      (this.socket = e.socket),
      (this.supportsBinary = !e.forceBase64);
  }
  onError(e, r, i) {
    return super.emitReserved("error", new HC(e, r, i)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(e) {
    const r = bf(e, this.socket.binaryType);
    this.onPacket(r);
  }
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  onClose(e) {
    (this.readyState = "closed"), super.emitReserved("close", e);
  }
  pause(e) {}
  createUri(e, r = {}) {
    return (
      e +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(r)
    );
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && Number(this.opts.port) !== 443) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(e) {
    const r = zC(e);
    return r.length ? "?" + r : "";
  }
}
class WC extends kf {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(e) {
    this.readyState = "pausing";
    const r = () => {
      (this.readyState = "paused"), e();
    };
    if (this._polling || !this.writable) {
      let i = 0;
      this._polling &&
        (i++,
        this.once("pollComplete", function () {
          --i || r();
        })),
        this.writable ||
          (i++,
          this.once("drain", function () {
            --i || r();
          }));
    } else r();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(e) {
    const r = (i) => {
      if (
        (this.readyState === "opening" && i.type === "open" && this.onOpen(),
        i.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(i);
    };
    OC(e, this.socket.binaryType).forEach(r),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  write(e) {
    (this.writable = !1),
      NC(e, (r) => {
        this.doWrite(r, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const e = this.opts.secure ? "https" : "http",
      r = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (r[this.opts.timestampParam] = ow()),
      !this.supportsBinary && !r.sid && (r.b64 = 1),
      this.createUri(e, r)
    );
  }
}
let aw = !1;
try {
  aw = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const qC = aw;
function KC() {}
class QC extends WC {
  constructor(e) {
    if ((super(e), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && e.hostname !== location.hostname) ||
          i !== e.port);
    }
  }
  doWrite(e, r) {
    const i = this.request({ method: "POST", data: e });
    i.on("success", r),
      i.on("error", (a, u) => {
        this.onError("xhr post error", a, u);
      });
  }
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)),
      e.on("error", (r, i) => {
        this.onError("xhr poll error", r, i);
      }),
      (this.pollXhr = e);
  }
}
class Sn extends et {
  constructor(e, r, i) {
    super(),
      (this.createRequest = e),
      Bl(this, i),
      (this._opts = i),
      (this._method = i.method || "GET"),
      (this._uri = r),
      (this._data = i.data !== void 0 ? i.data : null),
      this._create();
  }
  _create() {
    var e;
    const r = iw(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    r.xdomain = !!this._opts.xd;
    const i = (this._xhr = this.createRequest(r));
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let a in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(a) &&
              i.setRequestHeader(a, this._opts.extraHeaders[a]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {}
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
        "withCredentials" in i &&
          (i.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
        (i.onreadystatechange = () => {
          var a;
          i.readyState === 3 &&
            ((a = this._opts.cookieJar) === null ||
              a === void 0 ||
              a.parseCookies(i.getResponseHeader("set-cookie"))),
            i.readyState === 4 &&
              (i.status === 200 || i.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0);
                  }, 0));
        }),
        i.send(this._data);
    } catch (a) {
      this.setTimeoutFn(() => {
        this._onError(a);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = Sn.requestsCount++), (Sn.requests[this._index] = this));
  }
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = KC), e))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete Sn.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null &&
      (this.emitReserved("data", e),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
Sn.requestsCount = 0;
Sn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", ay);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Zt ? "pagehide" : "unload";
    addEventListener(t, ay, !1);
  }
}
function ay() {
  for (let t in Sn.requests)
    Sn.requests.hasOwnProperty(t) && Sn.requests[t].abort();
}
const GC = (function () {
  const t = lw({ xdomain: !1 });
  return t && t.responseType !== null;
})();
class JC extends QC {
  constructor(e) {
    super(e);
    const r = e && e.forceBase64;
    this.supportsBinary = GC && !r;
  }
  request(e = {}) {
    return (
      Object.assign(e, { xd: this.xd }, this.opts), new Sn(lw, this.uri(), e)
    );
  }
}
function lw(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || qC)) return new XMLHttpRequest();
  } catch {}
  if (!e)
    try {
      return new Zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const uw =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class YC extends kf {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(),
      r = this.opts.protocols,
      i = uw
        ? {}
        : iw(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, r, i);
    } catch (a) {
      return this.emitReserved("error", a);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (e) =>
        this.onClose({
          description: "websocket connection closed",
          context: e,
        })),
      (this.ws.onmessage = (e) => this.onData(e.data)),
      (this.ws.onerror = (e) => this.onError("websocket error", e));
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const i = e[r],
        a = r === e.length - 1;
      Sf(i, this.supportsBinary, (u) => {
        try {
          this.doWrite(i, u);
        } catch {}
        a &&
          Vl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const e = this.opts.secure ? "wss" : "ws",
      r = this.query || {};
    return (
      this.opts.timestampRequests && (r[this.opts.timestampParam] = ow()),
      this.supportsBinary || (r.b64 = 1),
      this.createUri(e, r)
    );
  }
}
const ed = Zt.WebSocket || Zt.MozWebSocket;
class XC extends YC {
  createSocket(e, r, i) {
    return uw ? new ed(e, r, i) : r ? new ed(e, r) : new ed(e);
  }
  doWrite(e, r) {
    this.ws.send(r);
  }
}
class ZC extends kf {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((e) => {
        this.onError("webtransport error", e);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((e) => {
          const r = LC(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            i = e.readable.pipeThrough(r).getReader(),
            a = jC();
          a.readable.pipeTo(e.writable),
            (this._writer = a.writable.getWriter());
          const u = () => {
            i.read()
              .then(({ done: f, value: h }) => {
                f || (this.onPacket(h), u());
              })
              .catch((f) => {});
          };
          u();
          const c = { type: "open" };
          this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(c).then(() => this.onOpen());
        });
      });
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const i = e[r],
        a = r === e.length - 1;
      this._writer.write(i).then(() => {
        a &&
          Vl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const eP = { websocket: XC, webtransport: ZC, polling: JC },
  tP =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  nP = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function Fd(t) {
  if (t.length > 8e3) throw "URI too long";
  const e = t,
    r = t.indexOf("["),
    i = t.indexOf("]");
  r != -1 &&
    i != -1 &&
    (t =
      t.substring(0, r) +
      t.substring(r, i).replace(/:/g, ";") +
      t.substring(i, t.length));
  let a = tP.exec(t || ""),
    u = {},
    c = 14;
  for (; c--; ) u[nP[c]] = a[c] || "";
  return (
    r != -1 &&
      i != -1 &&
      ((u.source = e),
      (u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":")),
      (u.authority = u.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (u.ipv6uri = !0)),
    (u.pathNames = rP(u, u.path)),
    (u.queryKey = sP(u, u.query)),
    u
  );
}
function rP(t, e) {
  const r = /\/{2,9}/g,
    i = e.replace(r, "/").split("/");
  return (
    (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
  );
}
function sP(t, e) {
  const r = {};
  return (
    e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (i, a, u) {
      a && (r[a] = u);
    }),
    r
  );
}
const Vd =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  hl = [];
Vd &&
  addEventListener(
    "offline",
    () => {
      hl.forEach((t) => t());
    },
    !1
  );
class kr extends et {
  constructor(e, r) {
    if (
      (super(),
      (this.binaryType = DC),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      e && typeof e == "object" && ((r = e), (e = null)),
      e)
    ) {
      const i = Fd(e);
      (r.hostname = i.host),
        (r.secure = i.protocol === "https" || i.protocol === "wss"),
        (r.port = i.port),
        i.query && (r.query = i.query);
    } else r.host && (r.hostname = Fd(r.host).host);
    Bl(this, r),
      (this.secure =
        r.secure != null
          ? r.secure
          : typeof location < "u" && location.protocol === "https:"),
      r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
      (this.hostname =
        r.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        r.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      r.transports.forEach((i) => {
        const a = i.prototype.name;
        this.transports.push(a), (this._transportsByName[a] = i);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        r
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = $C(this.opts.query)),
      Vd &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          hl.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(e) {
    const r = Object.assign({}, this.opts.query);
    (r.EIO = sw), (r.transport = e), this.id && (r.sid = this.id);
    const i = Object.assign(
      {},
      this.opts,
      {
        query: r,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[e]
    );
    return new this._transportsByName[e](i);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e =
      this.opts.rememberUpgrade &&
      kr.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(e);
    r.open(), this.setTransport(r);
  }
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = e),
      e
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (r) => this._onClose("transport close", r));
  }
  onOpen() {
    (this.readyState = "open"),
      (kr.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(e) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          (r.code = e.data), this._onError(r);
          break;
        case "message":
          this.emitReserved("data", e.data),
            this.emitReserved("message", e.data);
          break;
      }
  }
  onHandshake(e) {
    this.emitReserved("handshake", e),
      (this.id = e.sid),
      (this.transport.query.sid = e.sid),
      (this._pingInterval = e.pingInterval),
      (this._pingTimeout = e.pingTimeout),
      (this._maxPayload = e.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + e),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, e)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const e = this._getWritablePackets();
      this.transport.send(e),
        (this._prevBufferLen = e.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let r = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const a = this.writeBuffer[i].data;
      if ((a && (r += BC(a)), i > 0 && r > this._maxPayload))
        return this.writeBuffer.slice(0, i);
      r += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return (
      e &&
        ((this._pingTimeoutTime = 0),
        Vl(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      e
    );
  }
  write(e, r, i) {
    return this._sendPacket("message", e, r, i), this;
  }
  send(e, r, i) {
    return this._sendPacket("message", e, r, i), this;
  }
  _sendPacket(e, r, i, a) {
    if (
      (typeof r == "function" && ((a = r), (r = void 0)),
      typeof i == "function" && ((a = i), (i = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (i = i || {}), (i.compress = i.compress !== !1);
    const u = { type: e, data: r, options: i };
    this.emitReserved("packetCreate", u),
      this.writeBuffer.push(u),
      a && this.once("flush", a),
      this.flush();
  }
  close() {
    const e = () => {
        this._onClose("forced close"), this.transport.close();
      },
      r = () => {
        this.off("upgrade", r), this.off("upgradeError", r), e();
      },
      i = () => {
        this.once("upgrade", r), this.once("upgradeError", r);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? i() : e();
            })
          : this.upgrading
          ? i()
          : e()),
      this
    );
  }
  _onError(e) {
    if (
      ((kr.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  _onClose(e, r) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        Vd &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const i = hl.indexOf(this._offlineEventListener);
        i !== -1 && hl.splice(i, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", e, r),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
kr.protocol = sw;
class iP extends kr {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  _probe(e) {
    let r = this.createTransport(e),
      i = !1;
    kr.priorWebsocketSuccess = !1;
    const a = () => {
      i ||
        (r.send([{ type: "ping", data: "probe" }]),
        r.once("packet", (y) => {
          if (!i)
            if (y.type === "pong" && y.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", r), !r)
              )
                return;
              (kr.priorWebsocketSuccess = r.name === "websocket"),
                this.transport.pause(() => {
                  i ||
                    (this.readyState !== "closed" &&
                      (g(),
                      this.setTransport(r),
                      r.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", r),
                      (r = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const w = new Error("probe error");
              (w.transport = r.name), this.emitReserved("upgradeError", w);
            }
        }));
    };
    function u() {
      i || ((i = !0), g(), r.close(), (r = null));
    }
    const c = (y) => {
      const w = new Error("probe error: " + y);
      (w.transport = r.name), u(), this.emitReserved("upgradeError", w);
    };
    function f() {
      c("transport closed");
    }
    function h() {
      c("socket closed");
    }
    function m(y) {
      r && y.name !== r.name && u();
    }
    const g = () => {
      r.removeListener("open", a),
        r.removeListener("error", c),
        r.removeListener("close", f),
        this.off("close", h),
        this.off("upgrading", m);
    };
    r.once("open", a),
      r.once("error", c),
      r.once("close", f),
      this.once("close", h),
      this.once("upgrading", m),
      this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport"
        ? this.setTimeoutFn(() => {
            i || r.open();
          }, 200)
        : r.open();
  }
  onHandshake(e) {
    (this._upgrades = this._filterUpgrades(e.upgrades)), super.onHandshake(e);
  }
  _filterUpgrades(e) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      ~this.transports.indexOf(e[i]) && r.push(e[i]);
    return r;
  }
}
let oP = class extends iP {
  constructor(e, r = {}) {
    const i = typeof e == "object" ? e : r;
    (!i.transports || (i.transports && typeof i.transports[0] == "string")) &&
      (i.transports = (i.transports || ["polling", "websocket", "webtransport"])
        .map((a) => eP[a])
        .filter((a) => !!a)),
      super(e, i);
  }
};
function aP(t, e = "", r) {
  let i = t;
  (r = r || (typeof location < "u" && location)),
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" &&
      (t.charAt(0) === "/" &&
        (t.charAt(1) === "/" ? (t = r.protocol + t) : (t = r.host + t)),
      /^(https?|wss?):\/\//.test(t) ||
        (typeof r < "u" ? (t = r.protocol + "//" + t) : (t = "https://" + t)),
      (i = Fd(t))),
    i.port ||
      (/^(http|ws)$/.test(i.protocol)
        ? (i.port = "80")
        : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    (i.path = i.path || "/");
  const u = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return (
    (i.id = i.protocol + "://" + u + ":" + i.port + e),
    (i.href =
      i.protocol + "://" + u + (r && r.port === i.port ? "" : ":" + i.port)),
    i
  );
}
const lP = typeof ArrayBuffer == "function",
  uP = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t.buffer instanceof ArrayBuffer,
  cw = Object.prototype.toString,
  cP =
    typeof Blob == "function" ||
    (typeof Blob < "u" && cw.call(Blob) === "[object BlobConstructor]"),
  dP =
    typeof File == "function" ||
    (typeof File < "u" && cw.call(File) === "[object FileConstructor]");
function Ef(t) {
  return (
    (lP && (t instanceof ArrayBuffer || uP(t))) ||
    (cP && t instanceof Blob) ||
    (dP && t instanceof File)
  );
}
function pl(t, e) {
  if (!t || typeof t != "object") return !1;
  if (Array.isArray(t)) {
    for (let r = 0, i = t.length; r < i; r++) if (pl(t[r])) return !0;
    return !1;
  }
  if (Ef(t)) return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return pl(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && pl(t[r])) return !0;
  return !1;
}
function fP(t) {
  const e = [],
    r = t.data,
    i = t;
  return (
    (i.data = Bd(r, e)), (i.attachments = e.length), { packet: i, buffers: e }
  );
}
function Bd(t, e) {
  if (!t) return t;
  if (Ef(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let i = 0; i < t.length; i++) r[i] = Bd(t[i], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (r[i] = Bd(t[i], e));
    return r;
  }
  return t;
}
function hP(t, e) {
  return (t.data = Ud(t.data, e)), delete t.attachments, t;
}
function Ud(t, e) {
  if (!t) return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++) t[r] = Ud(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Ud(t[r], e));
  return t;
}
const pP = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener",
];
var Ce;
(function (t) {
  (t[(t.CONNECT = 0)] = "CONNECT"),
    (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
    (t[(t.EVENT = 2)] = "EVENT"),
    (t[(t.ACK = 3)] = "ACK"),
    (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
})(Ce || (Ce = {}));
class mP {
  constructor(e) {
    this.replacer = e;
  }
  encode(e) {
    return (e.type === Ce.EVENT || e.type === Ce.ACK) && pl(e)
      ? this.encodeAsBinary({
          type: e.type === Ce.EVENT ? Ce.BINARY_EVENT : Ce.BINARY_ACK,
          nsp: e.nsp,
          data: e.data,
          id: e.id,
        })
      : [this.encodeAsString(e)];
  }
  encodeAsString(e) {
    let r = "" + e.type;
    return (
      (e.type === Ce.BINARY_EVENT || e.type === Ce.BINARY_ACK) &&
        (r += e.attachments + "-"),
      e.nsp && e.nsp !== "/" && (r += e.nsp + ","),
      e.id != null && (r += e.id),
      e.data != null && (r += JSON.stringify(e.data, this.replacer)),
      r
    );
  }
  encodeAsBinary(e) {
    const r = fP(e),
      i = this.encodeAsString(r.packet),
      a = r.buffers;
    return a.unshift(i), a;
  }
}
class Tf extends et {
  constructor(e) {
    super(), (this.reviver = e);
  }
  add(e) {
    let r;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(e);
      const i = r.type === Ce.BINARY_EVENT;
      i || r.type === Ce.BINARY_ACK
        ? ((r.type = i ? Ce.EVENT : Ce.ACK),
          (this.reconstructor = new gP(r)),
          r.attachments === 0 && super.emitReserved("decoded", r))
        : super.emitReserved("decoded", r);
    } else if (Ef(e) || e.base64)
      if (this.reconstructor)
        (r = this.reconstructor.takeBinaryData(e)),
          r && ((this.reconstructor = null), super.emitReserved("decoded", r));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + e);
  }
  decodeString(e) {
    let r = 0;
    const i = { type: Number(e.charAt(0)) };
    if (Ce[i.type] === void 0) throw new Error("unknown packet type " + i.type);
    if (i.type === Ce.BINARY_EVENT || i.type === Ce.BINARY_ACK) {
      const u = r + 1;
      for (; e.charAt(++r) !== "-" && r != e.length; );
      const c = e.substring(u, r);
      if (c != Number(c) || e.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(c);
    }
    if (e.charAt(r + 1) === "/") {
      const u = r + 1;
      for (; ++r && !(e.charAt(r) === "," || r === e.length); );
      i.nsp = e.substring(u, r);
    } else i.nsp = "/";
    const a = e.charAt(r + 1);
    if (a !== "" && Number(a) == a) {
      const u = r + 1;
      for (; ++r; ) {
        const c = e.charAt(r);
        if (c == null || Number(c) != c) {
          --r;
          break;
        }
        if (r === e.length) break;
      }
      i.id = Number(e.substring(u, r + 1));
    }
    if (e.charAt(++r)) {
      const u = this.tryParse(e.substr(r));
      if (Tf.isPayloadValid(i.type, u)) i.data = u;
      else throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, r) {
    switch (e) {
      case Ce.CONNECT:
        return ly(r);
      case Ce.DISCONNECT:
        return r === void 0;
      case Ce.CONNECT_ERROR:
        return typeof r == "string" || ly(r);
      case Ce.EVENT:
      case Ce.BINARY_EVENT:
        return (
          Array.isArray(r) &&
          (typeof r[0] == "number" ||
            (typeof r[0] == "string" && pP.indexOf(r[0]) === -1))
        );
      case Ce.ACK:
      case Ce.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class gP {
  constructor(e) {
    (this.packet = e), (this.buffers = []), (this.reconPack = e);
  }
  takeBinaryData(e) {
    if (
      (this.buffers.push(e), this.buffers.length === this.reconPack.attachments)
    ) {
      const r = hP(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
function ly(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
const yP = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Tf,
      Encoder: mP,
      get PacketType() {
        return Ce;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function dn(t, e, r) {
  return (
    t.on(e, r),
    function () {
      t.off(e, r);
    }
  );
}
const vP = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class dw extends et {
  constructor(e, r, i) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = e),
      (this.nsp = r),
      i && i.auth && (this.auth = i.auth),
      (this._opts = Object.assign({}, i)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const e = this.io;
    this.subs = [
      dn(e, "open", this.onopen.bind(this)),
      dn(e, "packet", this.onpacket.bind(this)),
      dn(e, "error", this.onerror.bind(this)),
      dn(e, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  emit(e, ...r) {
    var i, a, u;
    if (vP.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (
      (r.unshift(e),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(r), this;
    const c = { type: Ce.EVENT, data: r };
    if (
      ((c.options = {}),
      (c.options.compress = this.flags.compress !== !1),
      typeof r[r.length - 1] == "function")
    ) {
      const g = this.ids++,
        y = r.pop();
      this._registerAckCallback(g, y), (c.id = g);
    }
    const f =
        (a =
          (i = this.io.engine) === null || i === void 0
            ? void 0
            : i.transport) === null || a === void 0
          ? void 0
          : a.writable,
      h =
        this.connected &&
        !(
          !((u = this.io.engine) === null || u === void 0) &&
          u._hasPingExpired()
        );
    return (
      (this.flags.volatile && !f) ||
        (h
          ? (this.notifyOutgoingListeners(c), this.packet(c))
          : this.sendBuffer.push(c)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(e, r) {
    var i;
    const a =
      (i = this.flags.timeout) !== null && i !== void 0
        ? i
        : this._opts.ackTimeout;
    if (a === void 0) {
      this.acks[e] = r;
      return;
    }
    const u = this.io.setTimeoutFn(() => {
        delete this.acks[e];
        for (let f = 0; f < this.sendBuffer.length; f++)
          this.sendBuffer[f].id === e && this.sendBuffer.splice(f, 1);
        r.call(this, new Error("operation has timed out"));
      }, a),
      c = (...f) => {
        this.io.clearTimeoutFn(u), r.apply(this, f);
      };
    (c.withError = !0), (this.acks[e] = c);
  }
  emitWithAck(e, ...r) {
    return new Promise((i, a) => {
      const u = (c, f) => (c ? a(c) : i(f));
      (u.withError = !0), r.push(u), this.emit(e, ...r);
    });
  }
  _addToQueue(e) {
    let r;
    typeof e[e.length - 1] == "function" && (r = e.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    e.push(
      (a, ...u) => (
        this._queue[0],
        a !== null
          ? i.tryCount > this._opts.retries && (this._queue.shift(), r && r(a))
          : (this._queue.shift(), r && r(null, ...u)),
        (i.pending = !1),
        this._drainQueue()
      )
    ),
      this._queue.push(i),
      this._drainQueue();
  }
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const r = this._queue[0];
    (r.pending && !e) ||
      ((r.pending = !0),
      r.tryCount++,
      (this.flags = r.flags),
      this.emit.apply(this, r.args));
  }
  packet(e) {
    (e.nsp = this.nsp), this.io._packet(e);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((e) => {
          this._sendConnectPacket(e);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(e) {
    this.packet({
      type: Ce.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
        : e,
    });
  }
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  onclose(e, r) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", e, r),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((i) => String(i.id) === e)) {
        const i = this.acks[e];
        delete this.acks[e],
          i.withError &&
            i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case Ce.CONNECT:
          e.data && e.data.sid
            ? this.onconnect(e.data.sid, e.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case Ce.EVENT:
        case Ce.BINARY_EVENT:
          this.onevent(e);
          break;
        case Ce.ACK:
        case Ce.BINARY_ACK:
          this.onack(e);
          break;
        case Ce.DISCONNECT:
          this.ondisconnect();
          break;
        case Ce.CONNECT_ERROR:
          this.destroy();
          const i = new Error(e.data.message);
          (i.data = e.data.data), this.emitReserved("connect_error", i);
          break;
      }
  }
  onevent(e) {
    const r = e.data || [];
    e.id != null && r.push(this.ack(e.id)),
      this.connected
        ? this.emitEvent(r)
        : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const i of r) i.apply(this, e);
    }
    super.emit.apply(this, e),
      this._pid &&
        e.length &&
        typeof e[e.length - 1] == "string" &&
        (this._lastOffset = e[e.length - 1]);
  }
  ack(e) {
    const r = this;
    let i = !1;
    return function (...a) {
      i || ((i = !0), r.packet({ type: Ce.ACK, id: e, data: a }));
    };
  }
  onack(e) {
    const r = this.acks[e.id];
    typeof r == "function" &&
      (delete this.acks[e.id],
      r.withError && e.data.unshift(null),
      r.apply(this, e.data));
  }
  onconnect(e, r) {
    (this.id = e),
      (this.recovered = r && this._pid === r),
      (this._pid = r),
      (this.connected = !0),
      this.emitBuffered(),
      this._drainQueue(!0),
      this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((e) => {
        this.notifyOutgoingListeners(e), this.packet(e);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: Ce.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(e) {
    return (this.flags.compress = e), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(e) {
    return (this.flags.timeout = e), this;
  }
  onAny(e) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(e),
      this
    );
  }
  prependAny(e) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(e),
      this
    );
  }
  offAny(e) {
    if (!this._anyListeners) return this;
    if (e) {
      const r = this._anyListeners;
      for (let i = 0; i < r.length; i++)
        if (e === r[i]) return r.splice(i, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(e) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(e),
      this
    );
  }
  prependAnyOutgoing(e) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(e),
      this
    );
  }
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners) return this;
    if (e) {
      const r = this._anyOutgoingListeners;
      for (let i = 0; i < r.length; i++)
        if (e === r[i]) return r.splice(i, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const i of r) i.apply(this, e.data);
    }
  }
}
function ai(t) {
  (t = t || {}),
    (this.ms = t.min || 100),
    (this.max = t.max || 1e4),
    (this.factor = t.factor || 2),
    (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
    (this.attempts = 0);
}
ai.prototype.duration = function () {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(),
      r = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r;
  }
  return Math.min(t, this.max) | 0;
};
ai.prototype.reset = function () {
  this.attempts = 0;
};
ai.prototype.setMin = function (t) {
  this.ms = t;
};
ai.prototype.setMax = function (t) {
  this.max = t;
};
ai.prototype.setJitter = function (t) {
  this.jitter = t;
};
class zd extends et {
  constructor(e, r) {
    var i;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      e && typeof e == "object" && ((r = e), (e = void 0)),
      (r = r || {}),
      (r.path = r.path || "/socket.io"),
      (this.opts = r),
      Bl(this, r),
      this.reconnection(r.reconnection !== !1),
      this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(r.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (i = r.randomizationFactor) !== null && i !== void 0 ? i : 0.5
      ),
      (this.backoff = new ai({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(r.timeout == null ? 2e4 : r.timeout),
      (this._readyState = "closed"),
      (this.uri = e);
    const a = r.parser || yP;
    (this.encoder = new a.Encoder()),
      (this.decoder = new a.Decoder()),
      (this._autoConnect = r.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length
      ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = e), this);
  }
  reconnectionDelay(e) {
    var r;
    return e === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = e),
        (r = this.backoff) === null || r === void 0 || r.setMin(e),
        this);
  }
  randomizationFactor(e) {
    var r;
    return e === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = e),
        (r = this.backoff) === null || r === void 0 || r.setJitter(e),
        this);
  }
  reconnectionDelayMax(e) {
    var r;
    return e === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = e),
        (r = this.backoff) === null || r === void 0 || r.setMax(e),
        this);
  }
  timeout(e) {
    return arguments.length ? ((this._timeout = e), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(e) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new oP(this.uri, this.opts);
    const r = this.engine,
      i = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const a = dn(r, "open", function () {
        i.onopen(), e && e();
      }),
      u = (f) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", f),
          e ? e(f) : this.maybeReconnectOnOpen();
      },
      c = dn(r, "error", u);
    if (this._timeout !== !1) {
      const f = this._timeout,
        h = this.setTimeoutFn(() => {
          a(), u(new Error("timeout")), r.close();
        }, f);
      this.opts.autoUnref && h.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(h);
        });
    }
    return this.subs.push(a), this.subs.push(c), this;
  }
  connect(e) {
    return this.open(e);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      dn(e, "ping", this.onping.bind(this)),
      dn(e, "data", this.ondata.bind(this)),
      dn(e, "error", this.onerror.bind(this)),
      dn(e, "close", this.onclose.bind(this)),
      dn(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  ondecoded(e) {
    Vl(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  onerror(e) {
    this.emitReserved("error", e);
  }
  socket(e, r) {
    let i = this.nsps[e];
    return (
      i
        ? this._autoConnect && !i.active && i.connect()
        : ((i = new dw(this, e, r)), (this.nsps[e] = i)),
      i
    );
  }
  _destroy(e) {
    const r = Object.keys(this.nsps);
    for (const i of r) if (this.nsps[i].active) return;
    this._close();
  }
  _packet(e) {
    const r = this.encoder.encode(e);
    for (let i = 0; i < r.length; i++) this.engine.write(r[i], e.options);
  }
  cleanup() {
    this.subs.forEach((e) => e()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(e, r) {
    var i;
    this.cleanup(),
      (i = this.engine) === null || i === void 0 || i.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", e, r),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        e.skipReconnect ||
          (this.emitReserved("reconnect_attempt", e.backoff.attempts),
          !e.skipReconnect &&
            e.open((a) => {
              a
                ? ((e._reconnecting = !1),
                  e.reconnect(),
                  this.emitReserved("reconnect_error", a))
                : e.onreconnect();
            }));
      }, r);
      this.opts.autoUnref && i.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(i);
        });
    }
  }
  onreconnect() {
    const e = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", e);
  }
}
const Xi = {};
function ml(t, e) {
  typeof t == "object" && ((e = t), (t = void 0)), (e = e || {});
  const r = aP(t, e.path || "/socket.io"),
    i = r.source,
    a = r.id,
    u = r.path,
    c = Xi[a] && u in Xi[a].nsps,
    f = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
  let h;
  return (
    f ? (h = new zd(i, e)) : (Xi[a] || (Xi[a] = new zd(i, e)), (h = Xi[a])),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
  );
}
Object.assign(ml, { Manager: zd, Socket: dw, io: ml, connect: ml });
function uy(t, e) {
  var r;
  const i = ml(t.serverUrl, {
    path: t.mountPath,
    transports: t.transports,
    query: {
      app_id: t.appId,
      token: (r = t.token) !== null && r !== void 0 ? r : wo(),
    },
  });
  return (
    i.on("connect", async () => {
      var a;
      return (
        console.log("connect", i.id),
        (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
      );
    }),
    i.on("update_model", async (a) => {
      var u;
      return (u = e.update_model) === null || u === void 0
        ? void 0
        : u.call(e, a);
    }),
    i.on("error", async (a) => {
      var u;
      return (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a);
    }),
    i.on("connect_error", async (a) => {
      var u;
      return (
        console.error("connect_error", a),
        (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
      );
    }),
    i
  );
}
function wP({ config: t }) {
  let e = { ...t };
  const r = {},
    i = {
      connect: async () => {
        const T = [];
        Object.keys(r).forEach((k) => {
          h(k);
          const b = y(k);
          b == null ||
            b.forEach(({ connect: x }) => {
              const R = async () => (x == null ? void 0 : x());
              T.push(R());
            });
        }),
          await Promise.all(T);
      },
      update_model: async (T) => {
        const b = y(T.room).map((x) => {
          var R;
          return (R = x.update_model) === null || R === void 0
            ? void 0
            : R.call(x, T);
        });
        await Promise.all(b);
      },
      error: async (T) => {
        console.error("error", T);
        const k = Object.values(r)
          .flat()
          .map((b) => {
            var x;
            return (x = b.error) === null || x === void 0
              ? void 0
              : x.call(b, T);
          });
        await Promise.all(k);
      },
    };
  let a = uy(t, i);
  function u() {
    c();
  }
  function c() {
    a && a.disconnect();
  }
  function f(T) {
    u(), (e = { ...e, ...T }), (a = uy(e, i));
  }
  function h(T) {
    a.emit("join", T);
  }
  function m(T) {
    a.emit("leave", T);
  }
  async function g(T, k) {
    var b;
    const x = JSON.stringify(k);
    return (b = i.update_model) === null || b === void 0
      ? void 0
      : b.call(i, { room: T, data: x });
  }
  function y(T) {
    return r[T];
  }
  return {
    socket: a,
    subscribeToRoom: (T, k) => (
      r[T] || (h(T), (r[T] = [])),
      r[T].push(k),
      () => {
        var b, x;
        (r[T] =
          (x =
            (b = r[T]) === null || b === void 0
              ? void 0
              : b.filter((R) => R !== k)) !== null && x !== void 0
            ? x
            : []),
          r[T].length === 0 && m(T);
      }
    ),
    updateConfig: f,
    updateModel: g,
    disconnect: c,
  };
}
const Zi = typeof window < "u" ? window : { base44SharedInstances: {} };
function xP(t, e) {
  return (
    Zi.base44SharedInstances || (Zi.base44SharedInstances = {}),
    Zi.base44SharedInstances[t] ||
      (Zi.base44SharedInstances[t] = { instance: e() }),
    Zi.base44SharedInstances[t].instance
  );
}
const SP = "__user_heartbeat_event__",
  bP = "__initialization_event__",
  kP = "__session_duration_event__",
  cy = "analytics-enable",
  dy = "base44_analytics_session_id",
  EP = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3,
  },
  TP = "analytics",
  De = xP(TP, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: { ...EP, ...jP() },
  })),
  CP = ({ axiosClient: t, serverUrl: e, appId: r, userAuthModule: i }) => {
    var a;
    const { maxQueueSize: u, throttleTime: c, batchSize: f } = De.config;
    if (!(!((a = De.config) === null || a === void 0) && a.enabled))
      return { track: () => {}, cleanup: () => {} };
    let h;
    const m = `${e}/api/apps/${r}/analytics/track/batch`,
      g = async (L) => {
        await t.request({
          method: "POST",
          url: `/apps/${r}/analytics/track/batch`,
          data: { events: L },
        });
      },
      y = (L) => {
        try {
          const M = JSON.stringify({ events: L }),
            U = new Blob([M], { type: "application/json" });
          return (
            typeof navigator > "u" ||
            M.length > 6e4 ||
            !navigator.sendBeacon(m, U)
          );
        } catch {
          return !1;
        }
      },
      w = async (L, M = {}) => {
        if (L.length === 0) return;
        const U = await OP(i),
          Q = L.map(NP(U));
        try {
          (!M.isBeacon || !y(Q)) && (await g(Q));
        } catch {}
      },
      T = () => {
        hy(w, { throttleTime: c, batchSize: f });
      },
      k = (L) => {
        if (De.requestsQueue.length >= u) return;
        const M = AP();
        De.requestsQueue.push({ ...L, ...M }), T();
      },
      b = () => {
        hy(w, { throttleTime: c, batchSize: f }), (h = py(k)), _P();
      },
      x = () => {
        fy(), h == null || h(), RP(k);
        const L = De.requestsQueue.splice(0);
        w(L, { isBeacon: !0 });
      },
      R = () => {
        typeof window > "u" ||
          (document.visibilityState === "hidden"
            ? x()
            : document.visibilityState === "visible" && b());
      },
      F = () => {
        fy(),
          h == null || h(),
          typeof window < "u" &&
            window.removeEventListener("visibilitychange", R);
      };
    return (
      T(),
      (h = py(k)),
      PP(k),
      typeof window < "u" && window.addEventListener("visibilitychange", R),
      { track: k, cleanup: F }
    );
  };
function fy() {
  De.isProcessing = !1;
}
async function hy(t, e) {
  if (De.isProcessing) return;
  De.isProcessing = !0;
  const { throttleTime: r = 1e3, batchSize: i = 30 } = e ?? {};
  for (; De.isProcessing && De.requestsQueue.length > 0; ) {
    const a = De.requestsQueue.splice(0, i);
    a.length && (await t(a)), await new Promise((u) => setTimeout(u, r));
  }
  De.isProcessing = !1;
}
function py(t) {
  var e;
  if (
    De.isHeartBeatProcessing ||
    ((e = De.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10
  )
    return () => {};
  De.isHeartBeatProcessing = !0;
  const r = setInterval(() => {
    t({ eventName: SP });
  }, De.config.heartBeatInterval);
  return () => {
    clearInterval(r), (De.isHeartBeatProcessing = !1);
  };
}
function PP(t) {
  typeof window > "u" ||
    De.wasInitializationTracked ||
    ((De.wasInitializationTracked = !0),
    t({
      eventName: bP,
      properties: { referrer: document == null ? void 0 : document.referrer },
    }));
}
function _P() {
  typeof window > "u" ||
    De.sessionStartTime !== null ||
    (De.sessionStartTime = new Date().toISOString());
}
function RP(t) {
  if (typeof window > "u" || De.sessionStartTime === null) return;
  const e = new Date().getTime() - new Date(De.sessionStartTime).getTime();
  (De.sessionStartTime = null),
    t({ eventName: kP, properties: { sessionDuration: e } });
}
function AP() {
  return {
    timestamp: new Date().toISOString(),
    pageUrl: typeof window < "u" ? window.location.pathname : null,
  };
}
function NP(t) {
  return (e) => ({
    event_name: e.eventName,
    properties: e.properties,
    timestamp: e.timestamp,
    page_url: e.pageUrl,
    ...t,
  });
}
let td = null;
async function OP(t) {
  if (!De.sessionContext) {
    if (!td) {
      const e = LP();
      td = t
        .me()
        .then((r) => ({ user_id: r.id, session_id: e }))
        .catch(() => ({ user_id: null, session_id: e }));
    }
    De.sessionContext = await td;
  }
  return De.sessionContext;
}
function jP() {
  if (typeof window > "u") return;
  const e = new URLSearchParams(window.location.search).get(cy);
  if (e == null || !e.length) return;
  const r = new URLSearchParams(window.location.search);
  r.delete(cy);
  const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
  return window.history.replaceState({}, "", i), { enabled: e === "true" };
}
function LP() {
  if (typeof window > "u") return Jc();
  try {
    const t = localStorage.getItem(dy);
    if (!t) {
      const e = Jc();
      return localStorage.setItem(dy, e), e;
    }
    return t;
  } catch {
    return Jc();
  }
}
function MP(t) {
  var e, r;
  const {
      serverUrl: i = "https://base44.app",
      appId: a,
      token: u,
      serviceToken: c,
      requiresAuth: f = !1,
      appBaseUrl: h,
      options: m,
      functionsVersion: g,
      headers: y,
    } = t,
    w = typeof h == "string" ? h : "",
    T = {
      serverUrl: i,
      mountPath: "/ws-user-apps/socket.io/",
      transports: ["websocket"],
      appId: a,
      token: u,
    };
  let k = null;
  const b = () => (k || (k = wP({ config: T })), k),
    x = { ...y, "X-App-Id": String(a) },
    R = g ? { ...x, "Base44-Functions-Version": g } : x,
    F = ro({
      baseURL: `${i}/api`,
      headers: x,
      token: u,
      onError: m == null ? void 0 : m.onError,
    }),
    L = ro({
      baseURL: `${i}/api`,
      headers: R,
      token: u,
      interceptResponses: !1,
      onError: m == null ? void 0 : m.onError,
    }),
    M = { ...x, ...(u ? { "on-behalf-of": `Bearer ${u}` } : {}) },
    U = ro({
      baseURL: `${i}/api`,
      headers: M,
      token: c,
      onError: m == null ? void 0 : m.onError,
    }),
    Q = ro({
      baseURL: `${i}/api`,
      headers: R,
      token: c,
      interceptResponses: !1,
    }),
    J = SC(F, L, a, { appBaseUrl: w }),
    D = {
      entities: Zg({ axios: F, appId: a, getSocket: b }),
      integrations: ey(F, a),
      connectors: EC(F, a),
      auth: J,
      functions: ty(L, a, {
        getAuthHeaders: () => {
          const de = {},
            Pe = u || wo();
          return Pe && (de.Authorization = `Bearer ${Pe}`), de;
        },
        baseURL: (e = L.defaults) === null || e === void 0 ? void 0 : e.baseURL,
      }),
      agents: ny({ axios: F, getSocket: b, appId: a, serverUrl: i, token: u }),
      appLogs: ry(F, a),
      users: CC(F, a),
      analytics: CP({
        axiosClient: F,
        serverUrl: i,
        appId: a,
        userAuthModule: J,
      }),
      cleanup: () => {
        D.analytics.cleanup(), k && k.disconnect();
      },
    },
    X = {
      entities: Zg({ axios: U, appId: a, getSocket: b }),
      integrations: ey(U, a),
      sso: bC(U, a),
      connectors: kC(U, a),
      functions: ty(Q, a, {
        getAuthHeaders: () => {
          const de = {};
          return c && (de.Authorization = `Bearer ${c}`), de;
        },
        baseURL: (r = Q.defaults) === null || r === void 0 ? void 0 : r.baseURL,
      }),
      agents: ny({ axios: U, getSocket: b, appId: a, serverUrl: i, token: u }),
      appLogs: ry(U, a),
      cleanup: () => {
        k && k.disconnect();
      },
    };
  if (typeof window < "u") {
    const de = u || wo();
    de && D.auth.setToken(de);
  }
  return (
    f &&
      typeof window < "u" &&
      setTimeout(async () => {
        try {
          (await D.auth.isAuthenticated()) ||
            D.auth.redirectToLogin(window.location.href);
        } catch (de) {
          console.error("Authentication check failed:", de),
            D.auth.redirectToLogin(window.location.href);
        }
      }, 0),
    {
      ...D,
      setToken(de) {
        D.auth.setToken(de), k && k.updateConfig({ token: de }), (T.token = de);
      },
      getConfig() {
        return { serverUrl: i, appId: a, requiresAuth: f };
      },
      get asServiceRole() {
        if (!c)
          throw new Error(
            "Service token is required to use asServiceRole. Please provide a serviceToken when creating the client."
          );
        return X;
      },
    }
  );
}
const fw = typeof window > "u",
  DP = fw ? { localStorage: new Map() } : window,
  fo = DP.localStorage,
  IP = (t) => t.replace(/([A-Z])/g, "_$1").toLowerCase(),
  Is = (t, { defaultValue: e = void 0, removeFromUrl: r = !1 } = {}) => {
    if (fw) return e;
    const i = `base44_${IP(t)}`,
      a = new URLSearchParams(window.location.search),
      u = a.get(t);
    if (r) {
      a.delete(t);
      const f = `${window.location.pathname}${
        a.toString() ? `?${a.toString()}` : ""
      }${window.location.hash}`;
      window.history.replaceState({}, document.title, f);
    }
    if (u) return fo.setItem(i, u), u;
    if (e) return fo.setItem(i, e), e;
    const c = fo.getItem(i);
    return c || null;
  },
  FP = () => (
    Is("clear_access_token") === "true" &&
      (fo.removeItem("base44_access_token"), fo.removeItem("token")),
    {
      appId: Is("app_id", { defaultValue: void 0 }),
      token: Is("access_token", { removeFromUrl: !0 }),
      fromUrl: Is("from_url", { defaultValue: window.location.href }),
      functionsVersion: Is("functions_version", { defaultValue: void 0 }),
      appBaseUrl: Is("app_base_url", { defaultValue: void 0 }),
    }
  ),
  io = { ...FP() },
  { appId: VP, token: BP, functionsVersion: UP, appBaseUrl: zP } = io,
  oo = MP({
    appId: VP,
    token: BP,
    functionsVersion: UP,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: zP,
  });
function $P({}) {
  var a;
  const e = R0().pathname.substring(1),
    { data: r, isFetched: i } = qk({
      queryKey: ["user"],
      queryFn: async () => {
        try {
          return { user: await oo.auth.me(), isAuthenticated: !0 };
        } catch {
          return { user: null, isAuthenticated: !1 };
        }
      },
    });
  return S.jsx("div", {
    className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
    children: S.jsx("div", {
      className: "max-w-md w-full",
      children: S.jsxs("div", {
        className: "text-center space-y-6",
        children: [
          S.jsxs("div", {
            className: "space-y-2",
            children: [
              S.jsx("h1", {
                className: "text-7xl font-light text-slate-300",
                children: "404",
              }),
              S.jsx("div", { className: "h-0.5 w-16 bg-slate-200 mx-auto" }),
            ],
          }),
          S.jsxs("div", {
            className: "space-y-3",
            children: [
              S.jsx("h2", {
                className: "text-2xl font-medium text-slate-800",
                children: "Page Not Found",
              }),
              S.jsxs("p", {
                className: "text-slate-600 leading-relaxed",
                children: [
                  "The page ",
                  S.jsxs("span", {
                    className: "font-medium text-slate-700",
                    children: ['"', e, '"'],
                  }),
                  " could not be found in this application.",
                ],
              }),
            ],
          }),
          i &&
            r.isAuthenticated &&
            ((a = r.user) == null ? void 0 : a.role) === "admin" &&
            S.jsx("div", {
              className:
                "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
              children: S.jsxs("div", {
                className: "flex items-start space-x-3",
                children: [
                  S.jsx("div", {
                    className:
                      "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                    children: S.jsx("div", {
                      className: "w-2 h-2 rounded-full bg-orange-400",
                    }),
                  }),
                  S.jsxs("div", {
                    className: "text-left space-y-1",
                    children: [
                      S.jsx("p", {
                        className: "text-sm font-medium text-slate-700",
                        children: "Admin Note",
                      }),
                      S.jsx("p", {
                        className: "text-sm text-slate-600 leading-relaxed",
                        children:
                          "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          S.jsx("div", {
            className: "pt-6",
            children: S.jsxs("button", {
              onClick: () => (window.location.href = "/"),
              className:
                "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
              children: [
                S.jsx("svg", {
                  className: "w-4 h-4 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: S.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                  }),
                }),
                "Go Home",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
const hw = B.createContext(),
  HP = ({ children: t }) => {
    const [e, r] = B.useState(null),
      [i, a] = B.useState(!1),
      [u, c] = B.useState(!0),
      [f, h] = B.useState(!0),
      [m, g] = B.useState(null),
      [y, w] = B.useState(null);
    B.useEffect(() => {
      T();
    }, []);
    const T = async () => {
        var R, F;
        try {
          h(!0), g(null);
          const L = ro({
            baseURL: "/api/apps/public",
            headers: { "X-App-Id": io.appId },
            token: io.token,
            interceptResponses: !0,
          });
          try {
            const M = await L.get(`/prod/public-settings/by-id/${io.appId}`);
            w(M), io.token ? await k() : (c(!1), a(!1)), h(!1);
          } catch (M) {
            if (
              (console.error("App state check failed:", M),
              M.status === 403 &&
                (F = (R = M.data) == null ? void 0 : R.extra_data) != null &&
                F.reason)
            ) {
              const U = M.data.extra_data.reason;
              g(
                U === "auth_required"
                  ? {
                      type: "auth_required",
                      message: "Authentication required",
                    }
                  : U === "user_not_registered"
                  ? {
                      type: "user_not_registered",
                      message: "User not registered for this app",
                    }
                  : { type: U, message: M.message }
              );
            } else
              g({
                type: "unknown",
                message: M.message || "Failed to load app",
              });
            h(!1), c(!1);
          }
        } catch (L) {
          console.error("Unexpected error:", L),
            g({
              type: "unknown",
              message: L.message || "An unexpected error occurred",
            }),
            h(!1),
            c(!1);
        }
      },
      k = async () => {
        try {
          c(!0);
          const R = await oo.auth.me();
          r(R), a(!0), c(!1);
        } catch (R) {
          console.error("User auth check failed:", R),
            c(!1),
            a(!1),
            (R.status === 401 || R.status === 403) &&
              g({ type: "auth_required", message: "Authentication required" });
        }
      },
      b = (R = !0) => {
        r(null),
          a(!1),
          R ? oo.auth.logout(window.location.href) : oo.auth.logout();
      },
      x = () => {
        oo.auth.redirectToLogin(window.location.href);
      };
    return S.jsx(hw.Provider, {
      value: {
        user: e,
        isAuthenticated: i,
        isLoadingAuth: u,
        isLoadingPublicSettings: f,
        authError: m,
        appPublicSettings: y,
        logout: b,
        navigateToLogin: x,
        checkAppState: T,
      },
      children: t,
    });
  },
  WP = () => {
    const t = B.useContext(hw);
    if (!t) throw new Error("useAuth must be used within an AuthProvider");
    return t;
  },
  qP = () =>
    S.jsx("div", {
      className:
        "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
      children: S.jsx("div", {
        className:
          "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: S.jsxs("div", {
          className: "text-center",
          children: [
            S.jsx("div", {
              className:
                "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
              children: S.jsx("svg", {
                className: "w-8 h-8 text-orange-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: S.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                }),
              }),
            }),
            S.jsx("h1", {
              className: "text-3xl font-bold text-slate-900 mb-4",
              children: "Access Restricted",
            }),
            S.jsx("p", {
              className: "text-slate-600 mb-8",
              children:
                "You are not registered to use this application. Please contact the app administrator to request access.",
            }),
            S.jsxs("div", {
              className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
              children: [
                S.jsx("p", {
                  children: "If you believe this is an error, you can:",
                }),
                S.jsxs("ul", {
                  className: "list-disc list-inside mt-2 space-y-1",
                  children: [
                    S.jsx("li", {
                      children:
                        "Verify you are logged in with the correct account",
                    }),
                    S.jsx("li", {
                      children: "Contact the app administrator for access",
                    }),
                    S.jsx("li", {
                      children: "Try logging out and back in again",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  pw = B.createContext({});
function KP(t) {
  const e = B.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Cf = B.createContext(null),
  mw = B.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function QP(t = !0) {
  const e = B.useContext(Cf);
  if (e === null) return [!0, null];
  const { isPresent: r, onExitComplete: i, register: a } = e,
    u = B.useId();
  B.useEffect(() => {
    t && a(u);
  }, [t]);
  const c = B.useCallback(() => t && i && i(u), [u, i, t]);
  return !r && i ? [!1, c] : [!0];
}
const Pf = typeof window < "u",
  GP = Pf ? B.useLayoutEffect : B.useEffect,
  Bt = (t) => t;
let gw = Bt;
function _f(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const ri = (t, e, r) => {
    const i = e - t;
    return i === 0 ? 1 : (r - t) / i;
  },
  Vn = (t) => t * 1e3,
  Bn = (t) => t / 1e3,
  JP = { useManualTiming: !1 };
function YP(t) {
  let e = new Set(),
    r = new Set(),
    i = !1,
    a = !1;
  const u = new WeakSet();
  let c = { delta: 0, timestamp: 0, isProcessing: !1 };
  function f(m) {
    u.has(m) && (h.schedule(m), t()), m(c);
  }
  const h = {
    schedule: (m, g = !1, y = !1) => {
      const T = y && i ? e : r;
      return g && u.add(m), T.has(m) || T.add(m), m;
    },
    cancel: (m) => {
      r.delete(m), u.delete(m);
    },
    process: (m) => {
      if (((c = m), i)) {
        a = !0;
        return;
      }
      (i = !0),
        ([e, r] = [r, e]),
        e.forEach(f),
        e.clear(),
        (i = !1),
        a && ((a = !1), h.process(m));
    },
  };
  return h;
}
const sl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  XP = 40;
function yw(t, e) {
  let r = !1,
    i = !0;
  const a = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (r = !0),
    c = sl.reduce((R, F) => ((R[F] = YP(u)), R), {}),
    {
      read: f,
      resolveKeyframes: h,
      update: m,
      preRender: g,
      render: y,
      postRender: w,
    } = c,
    T = () => {
      const R = performance.now();
      (r = !1),
        (a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, XP), 1)),
        (a.timestamp = R),
        (a.isProcessing = !0),
        f.process(a),
        h.process(a),
        m.process(a),
        g.process(a),
        y.process(a),
        w.process(a),
        (a.isProcessing = !1),
        r && e && ((i = !1), t(T));
    },
    k = () => {
      (r = !0), (i = !0), a.isProcessing || t(T);
    };
  return {
    schedule: sl.reduce((R, F) => {
      const L = c[F];
      return (R[F] = (M, U = !1, Q = !1) => (r || k(), L.schedule(M, U, Q))), R;
    }, {}),
    cancel: (R) => {
      for (let F = 0; F < sl.length; F++) c[sl[F]].cancel(R);
    },
    state: a,
    steps: c,
  };
}
const {
    schedule: Ue,
    cancel: Er,
    state: dt,
    steps: nd,
  } = yw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0),
  vw = B.createContext({ strict: !1 }),
  my = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  si = {};
for (const t in my) si[t] = { isEnabled: (e) => my[t].some((r) => !!e[r]) };
function ZP(t) {
  for (const e in t) si[e] = { ...si[e], ...t[e] };
}
const e_ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function El(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    e_.has(t)
  );
}
let ww = (t) => !El(t);
function t_(t) {
  t && (ww = (e) => (e.startsWith("on") ? !El(e) : t(e)));
}
try {
  t_(require("@emotion/is-prop-valid").default);
} catch {}
function n_(t, e, r) {
  const i = {};
  for (const a in t)
    (a === "values" && typeof t.values == "object") ||
      ((ww(a) ||
        (r === !0 && El(a)) ||
        (!e && !El(a)) ||
        (t.draggable && a.startsWith("onDrag"))) &&
        (i[a] = t[a]));
  return i;
}
function r_(t) {
  if (typeof Proxy > "u") return t;
  const e = new Map(),
    r = (...i) => t(...i);
  return new Proxy(r, {
    get: (i, a) =>
      a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a)),
  });
}
const Ul = B.createContext({});
function xo(t) {
  return typeof t == "string" || Array.isArray(t);
}
function zl(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const Rf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Af = ["initial", ...Rf];
function $l(t) {
  return zl(t.animate) || Af.some((e) => xo(t[e]));
}
function xw(t) {
  return !!($l(t) || t.variants);
}
function s_(t, e) {
  if ($l(t)) {
    const { initial: r, animate: i } = t;
    return {
      initial: r === !1 || xo(r) ? r : void 0,
      animate: xo(i) ? i : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function i_(t) {
  const { initial: e, animate: r } = s_(t, B.useContext(Ul));
  return B.useMemo(() => ({ initial: e, animate: r }), [gy(e), gy(r)]);
}
function gy(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const o_ = Symbol.for("motionComponentSymbol");
function Fs(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function a_(t, e, r) {
  return B.useCallback(
    (i) => {
      i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        r && (typeof r == "function" ? r(i) : Fs(r) && (r.current = i));
    },
    [e]
  );
}
const Nf = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  l_ = "framerAppearId",
  Sw = "data-" + Nf(l_),
  { schedule: Of } = yw(queueMicrotask, !1),
  bw = B.createContext({});
function u_(t, e, r, i, a) {
  var u, c;
  const { visualElement: f } = B.useContext(Ul),
    h = B.useContext(vw),
    m = B.useContext(Cf),
    g = B.useContext(mw).reducedMotion,
    y = B.useRef(null);
  (i = i || h.renderer),
    !y.current &&
      i &&
      (y.current = i(t, {
        visualState: e,
        parent: f,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const w = y.current,
    T = B.useContext(bw);
  w &&
    !w.projection &&
    a &&
    (w.type === "html" || w.type === "svg") &&
    c_(y.current, r, a, T);
  const k = B.useRef(!1);
  B.useInsertionEffect(() => {
    w && k.current && w.update(r, m);
  });
  const b = r[Sw],
    x = B.useRef(
      !!b &&
        !(
          !((u = window.MotionHandoffIsComplete) === null || u === void 0) &&
          u.call(window, b)
        ) &&
        ((c = window.MotionHasOptimisedAnimation) === null || c === void 0
          ? void 0
          : c.call(window, b))
    );
  return (
    GP(() => {
      w &&
        ((k.current = !0),
        (window.MotionIsMounted = !0),
        w.updateFeatures(),
        Of.render(w.render),
        x.current && w.animationState && w.animationState.animateChanges());
    }),
    B.useEffect(() => {
      w &&
        (!x.current && w.animationState && w.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null ||
              R === void 0 ||
              R.call(window, b);
          }),
          (x.current = !1)));
    }),
    w
  );
}
function c_(t, e, r, i) {
  const {
    layoutId: a,
    layout: u,
    drag: c,
    dragConstraints: f,
    layoutScroll: h,
    layoutRoot: m,
  } = e;
  (t.projection = new r(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : kw(t.parent)
  )),
    t.projection.setOptions({
      layoutId: a,
      layout: u,
      alwaysMeasureLayout: !!c || (f && Fs(f)),
      visualElement: t,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: i,
      layoutScroll: h,
      layoutRoot: m,
    });
}
function kw(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : kw(t.parent);
}
function d_({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: r,
  useVisualState: i,
  Component: a,
}) {
  var u, c;
  t && ZP(t);
  function f(m, g) {
    let y;
    const w = { ...B.useContext(mw), ...m, layoutId: f_(m) },
      { isStatic: T } = w,
      k = i_(m),
      b = i(m, T);
    if (!T && Pf) {
      h_();
      const x = p_(w);
      (y = x.MeasureLayout),
        (k.visualElement = u_(a, b, w, e, x.ProjectionNode));
    }
    return S.jsxs(Ul.Provider, {
      value: k,
      children: [
        y && k.visualElement
          ? S.jsx(y, { visualElement: k.visualElement, ...w })
          : null,
        r(a, m, a_(b, k.visualElement, g), b, T, k.visualElement),
      ],
    });
  }
  f.displayName = `motion.${
    typeof a == "string"
      ? a
      : `create(${
          (c = (u = a.displayName) !== null && u !== void 0 ? u : a.name) !==
            null && c !== void 0
            ? c
            : ""
        })`
  }`;
  const h = B.forwardRef(f);
  return (h[o_] = a), h;
}
function f_({ layoutId: t }) {
  const e = B.useContext(pw).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function h_(t, e) {
  B.useContext(vw).strict;
}
function p_(t) {
  const { drag: e, layout: r } = si;
  if (!e && !r) return {};
  const i = { ...e, ...r };
  return {
    MeasureLayout:
      (e != null && e.isEnabled(t)) || (r != null && r.isEnabled(t))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
const m_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function jf(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(m_.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function yy(t) {
  const e = [{}, {}];
  return (
    t == null ||
      t.values.forEach((r, i) => {
        (e[0][i] = r.get()), (e[1][i] = r.getVelocity());
      }),
    e
  );
}
function Lf(t, e, r, i) {
  if (typeof e == "function") {
    const [a, u] = yy(i);
    e = e(r !== void 0 ? r : t.custom, a, u);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [a, u] = yy(i);
    e = e(r !== void 0 ? r : t.custom, a, u);
  }
  return e;
}
const $d = (t) => Array.isArray(t),
  g_ = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  y_ = (t) => ($d(t) ? t[t.length - 1] || 0 : t),
  St = (t) => !!(t && t.getVelocity);
function gl(t) {
  const e = St(t) ? t.get() : t;
  return g_(e) ? e.toValue() : e;
}
function v_(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: r },
  i,
  a,
  u
) {
  const c = { latestValues: w_(i, a, u, t), renderState: e() };
  return (
    r &&
      ((c.onMount = (f) => r({ props: i, current: f, ...c })),
      (c.onUpdate = (f) => r(f))),
    c
  );
}
const Ew = (t) => (e, r) => {
  const i = B.useContext(Ul),
    a = B.useContext(Cf),
    u = () => v_(t, e, i, a);
  return r ? u() : KP(u);
};
function w_(t, e, r, i) {
  const a = {},
    u = i(t, {});
  for (const w in u) a[w] = gl(u[w]);
  let { initial: c, animate: f } = t;
  const h = $l(t),
    m = xw(t);
  e &&
    m &&
    !h &&
    t.inherit !== !1 &&
    (c === void 0 && (c = e.initial), f === void 0 && (f = e.animate));
  let g = r ? r.initial === !1 : !1;
  g = g || c === !1;
  const y = g ? f : c;
  if (y && typeof y != "boolean" && !zl(y)) {
    const w = Array.isArray(y) ? y : [y];
    for (let T = 0; T < w.length; T++) {
      const k = Lf(t, w[T]);
      if (k) {
        const { transitionEnd: b, transition: x, ...R } = k;
        for (const F in R) {
          let L = R[F];
          if (Array.isArray(L)) {
            const M = g ? L.length - 1 : 0;
            L = L[M];
          }
          L !== null && (a[F] = L);
        }
        for (const F in b) a[F] = b[F];
      }
    }
  }
  return a;
}
const li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ds = new Set(li),
  Tw = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Cw = Tw("--"),
  x_ = Tw("var(--"),
  Mf = (t) => (x_(t) ? S_.test(t.split("/*")[0].trim()) : !1),
  S_ =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Pw = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  Un = (t, e, r) => (r > e ? e : r < t ? t : r),
  ui = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  So = { ...ui, transform: (t) => Un(0, 1, t) },
  il = { ...ui, default: 1 },
  Fo = (t) => ({
    test: (e) =>
      typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  fr = Fo("deg"),
  bn = Fo("%"),
  ce = Fo("px"),
  b_ = Fo("vh"),
  k_ = Fo("vw"),
  vy = {
    ...bn,
    parse: (t) => bn.parse(t) / 100,
    transform: (t) => bn.transform(t * 100),
  },
  E_ = {
    borderWidth: ce,
    borderTopWidth: ce,
    borderRightWidth: ce,
    borderBottomWidth: ce,
    borderLeftWidth: ce,
    borderRadius: ce,
    radius: ce,
    borderTopLeftRadius: ce,
    borderTopRightRadius: ce,
    borderBottomRightRadius: ce,
    borderBottomLeftRadius: ce,
    width: ce,
    maxWidth: ce,
    height: ce,
    maxHeight: ce,
    top: ce,
    right: ce,
    bottom: ce,
    left: ce,
    padding: ce,
    paddingTop: ce,
    paddingRight: ce,
    paddingBottom: ce,
    paddingLeft: ce,
    margin: ce,
    marginTop: ce,
    marginRight: ce,
    marginBottom: ce,
    marginLeft: ce,
    backgroundPositionX: ce,
    backgroundPositionY: ce,
  },
  T_ = {
    rotate: fr,
    rotateX: fr,
    rotateY: fr,
    rotateZ: fr,
    scale: il,
    scaleX: il,
    scaleY: il,
    scaleZ: il,
    skew: fr,
    skewX: fr,
    skewY: fr,
    distance: ce,
    translateX: ce,
    translateY: ce,
    translateZ: ce,
    x: ce,
    y: ce,
    z: ce,
    perspective: ce,
    transformPerspective: ce,
    opacity: So,
    originX: vy,
    originY: vy,
    originZ: ce,
  },
  wy = { ...ui, transform: Math.round },
  Df = {
    ...E_,
    ...T_,
    zIndex: wy,
    size: ce,
    fillOpacity: So,
    strokeOpacity: So,
    numOctaves: wy,
  },
  C_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  P_ = li.length;
function __(t, e, r) {
  let i = "",
    a = !0;
  for (let u = 0; u < P_; u++) {
    const c = li[u],
      f = t[c];
    if (f === void 0) continue;
    let h = !0;
    if (
      (typeof f == "number"
        ? (h = f === (c.startsWith("scale") ? 1 : 0))
        : (h = parseFloat(f) === 0),
      !h || r)
    ) {
      const m = Pw(f, Df[c]);
      if (!h) {
        a = !1;
        const g = C_[c] || c;
        i += `${g}(${m}) `;
      }
      r && (e[c] = m);
    }
  }
  return (i = i.trim()), r ? (i = r(e, a ? "" : i)) : a && (i = "none"), i;
}
function If(t, e, r) {
  const { style: i, vars: a, transformOrigin: u } = t;
  let c = !1,
    f = !1;
  for (const h in e) {
    const m = e[h];
    if (ds.has(h)) {
      c = !0;
      continue;
    } else if (Cw(h)) {
      a[h] = m;
      continue;
    } else {
      const g = Pw(m, Df[h]);
      h.startsWith("origin") ? ((f = !0), (u[h] = g)) : (i[h] = g);
    }
  }
  if (
    (e.transform ||
      (c || r
        ? (i.transform = __(e, t.transform, r))
        : i.transform && (i.transform = "none")),
    f)
  ) {
    const { originX: h = "50%", originY: m = "50%", originZ: g = 0 } = u;
    i.transformOrigin = `${h} ${m} ${g}`;
  }
}
const R_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  A_ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function N_(t, e, r = 1, i = 0, a = !0) {
  t.pathLength = 1;
  const u = a ? R_ : A_;
  t[u.offset] = ce.transform(-i);
  const c = ce.transform(e),
    f = ce.transform(r);
  t[u.array] = `${c} ${f}`;
}
function xy(t, e, r) {
  return typeof t == "string" ? t : ce.transform(e + r * t);
}
function O_(t, e, r) {
  const i = xy(e, t.x, t.width),
    a = xy(r, t.y, t.height);
  return `${i} ${a}`;
}
function Ff(
  t,
  {
    attrX: e,
    attrY: r,
    attrScale: i,
    originX: a,
    originY: u,
    pathLength: c,
    pathSpacing: f = 1,
    pathOffset: h = 0,
    ...m
  },
  g,
  y
) {
  if ((If(t, m, y), g)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: w, style: T, dimensions: k } = t;
  w.transform && (k && (T.transform = w.transform), delete w.transform),
    k &&
      (a !== void 0 || u !== void 0 || T.transform) &&
      (T.transformOrigin = O_(
        k,
        a !== void 0 ? a : 0.5,
        u !== void 0 ? u : 0.5
      )),
    e !== void 0 && (w.x = e),
    r !== void 0 && (w.y = r),
    i !== void 0 && (w.scale = i),
    c !== void 0 && N_(w, c, f, h, !1);
}
const Vf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  _w = () => ({ ...Vf(), attrs: {} }),
  Bf = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Rw(t, { style: e, vars: r }, i, a) {
  Object.assign(t.style, e, a && a.getProjectionStyles(i));
  for (const u in r) t.style.setProperty(u, r[u]);
}
const Aw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Nw(t, e, r, i) {
  Rw(t, e, void 0, i);
  for (const a in e.attrs) t.setAttribute(Aw.has(a) ? a : Nf(a), e.attrs[a]);
}
const Tl = {};
function j_(t) {
  Object.assign(Tl, t);
}
function Ow(t, { layout: e, layoutId: r }) {
  return (
    ds.has(t) ||
    t.startsWith("origin") ||
    ((e || r !== void 0) && (!!Tl[t] || t === "opacity"))
  );
}
function Uf(t, e, r) {
  var i;
  const { style: a } = t,
    u = {};
  for (const c in a)
    (St(a[c]) ||
      (e.style && St(e.style[c])) ||
      Ow(c, t) ||
      ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0
        ? void 0
        : i.liveStyle) !== void 0) &&
      (u[c] = a[c]);
  return u;
}
function jw(t, e, r) {
  const i = Uf(t, e, r);
  for (const a in t)
    if (St(t[a]) || St(e[a])) {
      const u =
        li.indexOf(a) !== -1
          ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
          : a;
      i[u] = t[a];
    }
  return i;
}
function L_(t, e) {
  try {
    e.dimensions =
      typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Sy = ["x", "y", "width", "height", "cx", "cy", "r"],
  M_ = {
    useVisualState: Ew({
      scrapeMotionValuesFromProps: jw,
      createRenderState: _w,
      onUpdate: ({
        props: t,
        prevProps: e,
        current: r,
        renderState: i,
        latestValues: a,
      }) => {
        if (!r) return;
        let u = !!t.drag;
        if (!u) {
          for (const f in a)
            if (ds.has(f)) {
              u = !0;
              break;
            }
        }
        if (!u) return;
        let c = !e;
        if (e)
          for (let f = 0; f < Sy.length; f++) {
            const h = Sy[f];
            t[h] !== e[h] && (c = !0);
          }
        c &&
          Ue.read(() => {
            L_(r, i),
              Ue.render(() => {
                Ff(i, a, Bf(r.tagName), t.transformTemplate), Nw(r, i);
              });
          });
      },
    }),
  },
  D_ = {
    useVisualState: Ew({
      scrapeMotionValuesFromProps: Uf,
      createRenderState: Vf,
    }),
  };
function Lw(t, e, r) {
  for (const i in e) !St(e[i]) && !Ow(i, r) && (t[i] = e[i]);
}
function I_({ transformTemplate: t }, e) {
  return B.useMemo(() => {
    const r = Vf();
    return If(r, e, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function F_(t, e) {
  const r = t.style || {},
    i = {};
  return Lw(i, r, t), Object.assign(i, I_(t, e)), i;
}
function V_(t, e) {
  const r = {},
    i = F_(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function B_(t, e, r, i) {
  const a = B.useMemo(() => {
    const u = _w();
    return (
      Ff(u, e, Bf(i), t.transformTemplate),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [e]);
  if (t.style) {
    const u = {};
    Lw(u, t.style, t), (a.style = { ...u, ...a.style });
  }
  return a;
}
function U_(t = !1) {
  return (r, i, a, { latestValues: u }, c) => {
    const h = (jf(r) ? B_ : V_)(i, u, c, r),
      m = n_(i, typeof r == "string", t),
      g = r !== B.Fragment ? { ...m, ...h, ref: a } : {},
      { children: y } = i,
      w = B.useMemo(() => (St(y) ? y.get() : y), [y]);
    return B.createElement(r, { ...g, children: w });
  };
}
function z_(t, e) {
  return function (i, { forwardMotionProps: a } = { forwardMotionProps: !1 }) {
    const c = {
      ...(jf(i) ? M_ : D_),
      preloadedFeatures: t,
      useRender: U_(a),
      createVisualElement: e,
      Component: i,
    };
    return d_(c);
  };
}
function Mw(t, e) {
  if (!Array.isArray(e)) return !1;
  const r = e.length;
  if (r !== t.length) return !1;
  for (let i = 0; i < r; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
function Hl(t, e, r) {
  const i = t.getProps();
  return Lf(i, e, r !== void 0 ? r : i.custom, t);
}
const $_ = _f(() => window.ScrollTimeline !== void 0);
class H_ {
  constructor(e) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((e) => ("finished" in e ? e.finished : e))
    );
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, r) {
    for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = r;
  }
  attachTimeline(e, r) {
    const i = this.animations.map((a) => {
      if ($_() && a.attachTimeline) return a.attachTimeline(e);
      if (typeof r == "function") return r(a);
    });
    return () => {
      i.forEach((a, u) => {
        a && a(), this.animations[u].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let r = 0; r < this.animations.length; r++)
      e = Math.max(e, this.animations[r].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((r) => r[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class W_ extends H_ {
  then(e, r) {
    return Promise.all(this.animations).then(e).catch(r);
  }
}
function zf(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const Hd = 2e4;
function Dw(t) {
  let e = 0;
  const r = 50;
  let i = t.next(e);
  for (; !i.done && e < Hd; ) (e += r), (i = t.next(e));
  return e >= Hd ? 1 / 0 : e;
}
function $f(t) {
  return typeof t == "function";
}
function by(t, e) {
  (t.timeline = e), (t.onfinish = null);
}
const Hf = (t) => Array.isArray(t) && typeof t[0] == "number",
  q_ = { linearEasing: void 0 };
function K_(t, e) {
  const r = _f(t);
  return () => {
    var i;
    return (i = q_[e]) !== null && i !== void 0 ? i : r();
  };
}
const Cl = K_(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Iw = (t, e, r = 10) => {
    let i = "";
    const a = Math.max(Math.round(e / r), 2);
    for (let u = 0; u < a; u++) i += t(ri(0, a - 1, u)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  };
function Fw(t) {
  return !!(
    (typeof t == "function" && Cl()) ||
    !t ||
    (typeof t == "string" && (t in Wd || Cl())) ||
    Hf(t) ||
    (Array.isArray(t) && t.every(Fw))
  );
}
const ao = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
  Wd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ao([0, 0.65, 0.55, 1]),
    circOut: ao([0.55, 0, 1, 0.45]),
    backIn: ao([0.31, 0.01, 0.66, -0.59]),
    backOut: ao([0.33, 1.53, 0.69, 0.99]),
  };
function Vw(t, e) {
  if (t)
    return typeof t == "function" && Cl()
      ? Iw(t, e)
      : Hf(t)
      ? ao(t)
      : Array.isArray(t)
      ? t.map((r) => Vw(r, e) || Wd.easeOut)
      : Wd[t];
}
const ln = { x: !1, y: !1 };
function Bw() {
  return ln.x || ln.y;
}
function Q_(t, e, r) {
  var i;
  if (t instanceof Element) return [t];
  if (typeof t == "string") {
    let a = document;
    const u = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
    return u ? Array.from(u) : [];
  }
  return Array.from(t);
}
function Uw(t, e) {
  const r = Q_(t),
    i = new AbortController(),
    a = { passive: !0, ...e, signal: i.signal };
  return [r, a, () => i.abort()];
}
function ky(t) {
  return (e) => {
    e.pointerType === "touch" || Bw() || t(e);
  };
}
function G_(t, e, r = {}) {
  const [i, a, u] = Uw(t, r),
    c = ky((f) => {
      const { target: h } = f,
        m = e(f);
      if (typeof m != "function" || !h) return;
      const g = ky((y) => {
        m(y), h.removeEventListener("pointerleave", g);
      });
      h.addEventListener("pointerleave", g, a);
    });
  return (
    i.forEach((f) => {
      f.addEventListener("pointerenter", c, a);
    }),
    u
  );
}
const zw = (t, e) => (e ? (t === e ? !0 : zw(t, e.parentElement)) : !1),
  Wf = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  J_ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Y_(t) {
  return J_.has(t.tagName) || t.tabIndex !== -1;
}
const lo = new WeakSet();
function Ey(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function rd(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
  );
}
const X_ = (t, e) => {
  const r = t.currentTarget;
  if (!r) return;
  const i = Ey(() => {
    if (lo.has(r)) return;
    rd(r, "down");
    const a = Ey(() => {
        rd(r, "up");
      }),
      u = () => rd(r, "cancel");
    r.addEventListener("keyup", a, e), r.addEventListener("blur", u, e);
  });
  r.addEventListener("keydown", i, e),
    r.addEventListener("blur", () => r.removeEventListener("keydown", i), e);
};
function Ty(t) {
  return Wf(t) && !Bw();
}
function Z_(t, e, r = {}) {
  const [i, a, u] = Uw(t, r),
    c = (f) => {
      const h = f.currentTarget;
      if (!Ty(f) || lo.has(h)) return;
      lo.add(h);
      const m = e(f),
        g = (T, k) => {
          window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!Ty(T) || !lo.has(h)) &&
              (lo.delete(h), typeof m == "function" && m(T, { success: k }));
        },
        y = (T) => {
          g(T, r.useGlobalTarget || zw(h, T.target));
        },
        w = (T) => {
          g(T, !1);
        };
      window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", w, a);
    };
  return (
    i.forEach((f) => {
      !Y_(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0),
        (r.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a),
        f.addEventListener("focus", (m) => X_(m, a), a);
    }),
    u
  );
}
function eR(t) {
  return t === "x" || t === "y"
    ? ln[t]
      ? null
      : ((ln[t] = !0),
        () => {
          ln[t] = !1;
        })
    : ln.x || ln.y
    ? null
    : ((ln.x = ln.y = !0),
      () => {
        ln.x = ln.y = !1;
      });
}
const $w = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...li,
]);
let yl;
function tR() {
  yl = void 0;
}
const kn = {
  now: () => (
    yl === void 0 &&
      kn.set(
        dt.isProcessing || JP.useManualTiming ? dt.timestamp : performance.now()
      ),
    yl
  ),
  set: (t) => {
    (yl = t), queueMicrotask(tR);
  },
};
function qf(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Kf(t, e) {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
class Qf {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return qf(this.subscriptions, e), () => Kf(this.subscriptions, e);
  }
  notify(e, r, i) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1) this.subscriptions[0](e, r, i);
      else
        for (let u = 0; u < a; u++) {
          const c = this.subscriptions[u];
          c && c(e, r, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Hw(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Cy = 30,
  nR = (t) => !isNaN(parseFloat(t));
class rR {
  constructor(e, r = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (i, a = !0) => {
        const u = kn.now();
        this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(i),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          a &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = r.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = kn.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = nR(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, r) {
    this.events[e] || (this.events[e] = new Qf());
    const i = this.events[e].add(r);
    return e === "change"
      ? () => {
          i(),
            Ue.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : i;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, r) {
    (this.passiveEffect = e), (this.stopPassiveEffect = r);
  }
  set(e, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(e, r)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, r, i) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - i);
  }
  jump(e, r = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = kn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Cy
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Cy);
    return Hw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = e(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function bo(t, e) {
  return new rR(t, e);
}
function sR(t, e, r) {
  t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, bo(r));
}
function iR(t, e) {
  const r = Hl(t, e);
  let { transitionEnd: i = {}, transition: a = {}, ...u } = r || {};
  u = { ...u, ...i };
  for (const c in u) {
    const f = y_(u[c]);
    sR(t, c, f);
  }
}
function oR(t) {
  return !!(St(t) && t.add);
}
function qd(t, e) {
  const r = t.getValue("willChange");
  if (oR(r)) return r.add(e);
}
function Ww(t) {
  return t.props[Sw];
}
const qw = (t, e, r) =>
    (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
  aR = 1e-7,
  lR = 12;
function uR(t, e, r, i, a) {
  let u,
    c,
    f = 0;
  do (c = e + (r - e) / 2), (u = qw(c, i, a) - t), u > 0 ? (r = c) : (e = c);
  while (Math.abs(u) > aR && ++f < lR);
  return c;
}
function Vo(t, e, r, i) {
  if (t === e && r === i) return Bt;
  const a = (u) => uR(u, 0, 1, t, r);
  return (u) => (u === 0 || u === 1 ? u : qw(a(u), e, i));
}
const Kw = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  Qw = (t) => (e) => 1 - t(1 - e),
  Gw = Vo(0.33, 1.53, 0.69, 0.99),
  Gf = Qw(Gw),
  Jw = Kw(Gf),
  Yw = (t) =>
    (t *= 2) < 1 ? 0.5 * Gf(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  Jf = (t) => 1 - Math.sin(Math.acos(t)),
  Xw = Qw(Jf),
  Zw = Kw(Jf),
  ex = (t) => /^0[^.\s]+$/u.test(t);
function cR(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
    ? t === "none" || t === "0" || ex(t)
    : !0;
}
const ho = (t) => Math.round(t * 1e5) / 1e5,
  Yf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dR(t) {
  return t == null;
}
const fR =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Xf = (t, e) => (r) =>
    !!(
      (typeof r == "string" && fR.test(r) && r.startsWith(t)) ||
      (e && !dR(r) && Object.prototype.hasOwnProperty.call(r, e))
    ),
  tx = (t, e, r) => (i) => {
    if (typeof i != "string") return i;
    const [a, u, c, f] = i.match(Yf);
    return {
      [t]: parseFloat(a),
      [e]: parseFloat(u),
      [r]: parseFloat(c),
      alpha: f !== void 0 ? parseFloat(f) : 1,
    };
  },
  hR = (t) => Un(0, 255, t),
  sd = { ...ui, transform: (t) => Math.round(hR(t)) },
  Gr = {
    test: Xf("rgb", "red"),
    parse: tx("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: r, alpha: i = 1 }) =>
      "rgba(" +
      sd.transform(t) +
      ", " +
      sd.transform(e) +
      ", " +
      sd.transform(r) +
      ", " +
      ho(So.transform(i)) +
      ")",
  };
function pR(t) {
  let e = "",
    r = "",
    i = "",
    a = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (r = t.substring(3, 5)),
        (i = t.substring(5, 7)),
        (a = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (r = t.substring(2, 3)),
        (i = t.substring(3, 4)),
        (a = t.substring(4, 5)),
        (e += e),
        (r += r),
        (i += i),
        (a += a)),
    {
      red: parseInt(e, 16),
      green: parseInt(r, 16),
      blue: parseInt(i, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1,
    }
  );
}
const Kd = { test: Xf("#"), parse: pR, transform: Gr.transform },
  Vs = {
    test: Xf("hsl", "hue"),
    parse: tx("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: r, alpha: i = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      bn.transform(ho(e)) +
      ", " +
      bn.transform(ho(r)) +
      ", " +
      ho(So.transform(i)) +
      ")",
  },
  wt = {
    test: (t) => Gr.test(t) || Kd.test(t) || Vs.test(t),
    parse: (t) =>
      Gr.test(t) ? Gr.parse(t) : Vs.test(t) ? Vs.parse(t) : Kd.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
        ? Gr.transform(t)
        : Vs.transform(t),
  },
  mR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function gR(t) {
  var e, r;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((e = t.match(Yf)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((r = t.match(mR)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const nx = "number",
  rx = "color",
  yR = "var",
  vR = "var(",
  Py = "${}",
  wR =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ko(t) {
  const e = t.toString(),
    r = [],
    i = { color: [], number: [], var: [] },
    a = [];
  let u = 0;
  const f = e
    .replace(
      wR,
      (h) => (
        wt.test(h)
          ? (i.color.push(u), a.push(rx), r.push(wt.parse(h)))
          : h.startsWith(vR)
          ? (i.var.push(u), a.push(yR), r.push(h))
          : (i.number.push(u), a.push(nx), r.push(parseFloat(h))),
        ++u,
        Py
      )
    )
    .split(Py);
  return { values: r, split: f, indexes: i, types: a };
}
function sx(t) {
  return ko(t).values;
}
function ix(t) {
  const { split: e, types: r } = ko(t),
    i = e.length;
  return (a) => {
    let u = "";
    for (let c = 0; c < i; c++)
      if (((u += e[c]), a[c] !== void 0)) {
        const f = r[c];
        f === nx
          ? (u += ho(a[c]))
          : f === rx
          ? (u += wt.transform(a[c]))
          : (u += a[c]);
      }
    return u;
  };
}
const xR = (t) => (typeof t == "number" ? 0 : t);
function SR(t) {
  const e = sx(t);
  return ix(t)(e.map(xR));
}
const Tr = {
    test: gR,
    parse: sx,
    createTransformer: ix,
    getAnimatableNone: SR,
  },
  bR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function kR(t) {
  const [e, r] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [i] = r.match(Yf) || [];
  if (!i) return t;
  const a = r.replace(i, "");
  let u = bR.has(e) ? 1 : 0;
  return i !== r && (u *= 100), e + "(" + u + a + ")";
}
const ER = /\b([a-z-]*)\(.*?\)/gu,
  Qd = {
    ...Tr,
    getAnimatableNone: (t) => {
      const e = t.match(ER);
      return e ? e.map(kR).join(" ") : t;
    },
  },
  TR = {
    ...Df,
    color: wt,
    backgroundColor: wt,
    outlineColor: wt,
    fill: wt,
    stroke: wt,
    borderColor: wt,
    borderTopColor: wt,
    borderRightColor: wt,
    borderBottomColor: wt,
    borderLeftColor: wt,
    filter: Qd,
    WebkitFilter: Qd,
  },
  Zf = (t) => TR[t];
function ox(t, e) {
  let r = Zf(t);
  return (
    r !== Qd && (r = Tr), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
  );
}
const CR = new Set(["auto", "none", "0"]);
function PR(t, e, r) {
  let i = 0,
    a;
  for (; i < t.length && !a; ) {
    const u = t[i];
    typeof u == "string" && !CR.has(u) && ko(u).values.length && (a = t[i]),
      i++;
  }
  if (a && r) for (const u of e) t[u] = ox(r, a);
}
const _y = (t) => t === ui || t === ce,
  Ry = (t, e) => parseFloat(t.split(", ")[e]),
  Ay =
    (t, e) =>
    (r, { transform: i }) => {
      if (i === "none" || !i) return 0;
      const a = i.match(/^matrix3d\((.+)\)$/u);
      if (a) return Ry(a[1], e);
      {
        const u = i.match(/^matrix\((.+)\)$/u);
        return u ? Ry(u[1], t) : 0;
      }
    },
  _R = new Set(["x", "y", "z"]),
  RR = li.filter((t) => !_R.has(t));
function AR(t) {
  const e = [];
  return (
    RR.forEach((r) => {
      const i = t.getValue(r);
      i !== void 0 &&
        (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const ii = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(r),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(r),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Ay(4, 13),
  y: Ay(5, 14),
};
ii.translateX = ii.x;
ii.translateY = ii.y;
const os = new Set();
let Gd = !1,
  Jd = !1;
function ax() {
  if (Jd) {
    const t = Array.from(os).filter((i) => i.needsMeasurement),
      e = new Set(t.map((i) => i.element)),
      r = new Map();
    e.forEach((i) => {
      const a = AR(i);
      a.length && (r.set(i, a), i.render());
    }),
      t.forEach((i) => i.measureInitialState()),
      e.forEach((i) => {
        i.render();
        const a = r.get(i);
        a &&
          a.forEach(([u, c]) => {
            var f;
            (f = i.getValue(u)) === null || f === void 0 || f.set(c);
          });
      }),
      t.forEach((i) => i.measureEndState()),
      t.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
  }
  (Jd = !1), (Gd = !1), os.forEach((t) => t.complete()), os.clear();
}
function lx() {
  os.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Jd = !0);
  });
}
function NR() {
  lx(), ax();
}
class eh {
  constructor(e, r, i, a, u, c = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = r),
      (this.name = i),
      (this.motionValue = a),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (os.add(this),
          Gd || ((Gd = !0), Ue.read(lx), Ue.resolveKeyframes(ax)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: r,
      element: i,
      motionValue: a,
    } = this;
    for (let u = 0; u < e.length; u++)
      if (e[u] === null)
        if (u === 0) {
          const c = a == null ? void 0 : a.get(),
            f = e[e.length - 1];
          if (c !== void 0) e[0] = c;
          else if (i && r) {
            const h = i.readValue(r, f);
            h != null && (e[0] = h);
          }
          e[0] === void 0 && (e[0] = f), a && c === void 0 && a.set(e[0]);
        } else e[u] = e[u - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      os.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), os.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ux = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  OR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jR(t) {
  const e = OR.exec(t);
  if (!e) return [,];
  const [, r, i, a] = e;
  return [`--${r ?? i}`, a];
}
function cx(t, e, r = 1) {
  const [i, a] = jR(t);
  if (!i) return;
  const u = window.getComputedStyle(e).getPropertyValue(i);
  if (u) {
    const c = u.trim();
    return ux(c) ? parseFloat(c) : c;
  }
  return Mf(a) ? cx(a, e, r + 1) : a;
}
const dx = (t) => (e) => e.test(t),
  LR = { test: (t) => t === "auto", parse: (t) => t },
  fx = [ui, ce, bn, fr, k_, b_, LR],
  Ny = (t) => fx.find(dx(t));
class hx extends eh {
  constructor(e, r, i, a, u) {
    super(e, r, i, a, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: r, name: i } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let h = 0; h < e.length; h++) {
      let m = e[h];
      if (typeof m == "string" && ((m = m.trim()), Mf(m))) {
        const g = cx(m, r.current);
        g !== void 0 && (e[h] = g),
          h === e.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !$w.has(i) || e.length !== 2)) return;
    const [a, u] = e,
      c = Ny(a),
      f = Ny(u);
    if (c !== f)
      if (_y(c) && _y(f))
        for (let h = 0; h < e.length; h++) {
          const m = e[h];
          typeof m == "string" && (e[h] = parseFloat(m));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: r } = this,
      i = [];
    for (let a = 0; a < e.length; a++) cR(e[a]) && i.push(a);
    i.length && PR(e, i, r);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: r, name: i } = this;
    if (!e || !e.current) return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ii[i](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
      (r[0] = this.measuredOrigin);
    const a = r[r.length - 1];
    a !== void 0 && e.getValue(i, a).jump(a, !1);
  }
  measureEndState() {
    var e;
    const { element: r, name: i, unresolvedKeyframes: a } = this;
    if (!r || !r.current) return;
    const u = r.getValue(i);
    u && u.jump(this.measuredOrigin, !1);
    const c = a.length - 1,
      f = a[c];
    (a[c] = ii[i](r.measureViewportBox(), window.getComputedStyle(r.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([h, m]) => {
          r.getValue(h).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
const Oy = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (Tr.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function MR(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let r = 0; r < t.length; r++) if (t[r] !== e) return !0;
}
function DR(t, e, r, i) {
  const a = t[0];
  if (a === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const u = t[t.length - 1],
    c = Oy(a, e),
    f = Oy(u, e);
  return !c || !f ? !1 : MR(t) || ((r === "spring" || $f(r)) && i);
}
const IR = (t) => t !== null;
function Wl(t, { repeat: e, repeatType: r = "loop" }, i) {
  const a = t.filter(IR),
    u = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
  return !u || i === void 0 ? a[u] : i;
}
const FR = 40;
class px {
  constructor({
    autoplay: e = !0,
    delay: r = 0,
    type: i = "keyframes",
    repeat: a = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    ...f
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = kn.now()),
      (this.options = {
        autoplay: e,
        delay: r,
        type: i,
        repeat: a,
        repeatDelay: u,
        repeatType: c,
        ...f,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > FR
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && NR(), this._resolved;
  }
  onKeyframesResolved(e, r) {
    (this.resolvedAt = kn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: i,
      type: a,
      velocity: u,
      delay: c,
      onComplete: f,
      onUpdate: h,
      isGenerator: m,
    } = this.options;
    if (!m && !DR(e, i, a, u))
      if (c) this.options.duration = 0;
      else {
        h && h(Wl(e, this.options, r)), f && f(), this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(e, r);
    g !== !1 &&
      ((this._resolved = { keyframes: e, finalKeyframe: r, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(e, r) {
    return this.currentFinishedPromise.then(e, r);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const We = (t, e, r) => t + (e - t) * r;
function id(t, e, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? t + (e - t) * 6 * r
      : r < 1 / 2
      ? e
      : r < 2 / 3
      ? t + (e - t) * (2 / 3 - r) * 6
      : t
  );
}
function VR({ hue: t, saturation: e, lightness: r, alpha: i }) {
  (t /= 360), (e /= 100), (r /= 100);
  let a = 0,
    u = 0,
    c = 0;
  if (!e) a = u = c = r;
  else {
    const f = r < 0.5 ? r * (1 + e) : r + e - r * e,
      h = 2 * r - f;
    (a = id(h, f, t + 1 / 3)), (u = id(h, f, t)), (c = id(h, f, t - 1 / 3));
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: i,
  };
}
function Pl(t, e) {
  return (r) => (r > 0 ? e : t);
}
const od = (t, e, r) => {
    const i = t * t,
      a = r * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a);
  },
  BR = [Kd, Gr, Vs],
  UR = (t) => BR.find((e) => e.test(t));
function jy(t) {
  const e = UR(t);
  if (!e) return !1;
  let r = e.parse(t);
  return e === Vs && (r = VR(r)), r;
}
const Ly = (t, e) => {
    const r = jy(t),
      i = jy(e);
    if (!r || !i) return Pl(t, e);
    const a = { ...r };
    return (u) => (
      (a.red = od(r.red, i.red, u)),
      (a.green = od(r.green, i.green, u)),
      (a.blue = od(r.blue, i.blue, u)),
      (a.alpha = We(r.alpha, i.alpha, u)),
      Gr.transform(a)
    );
  },
  zR = (t, e) => (r) => e(t(r)),
  Bo = (...t) => t.reduce(zR),
  Yd = new Set(["none", "hidden"]);
function $R(t, e) {
  return Yd.has(t) ? (r) => (r <= 0 ? t : e) : (r) => (r >= 1 ? e : t);
}
function HR(t, e) {
  return (r) => We(t, e, r);
}
function th(t) {
  return typeof t == "number"
    ? HR
    : typeof t == "string"
    ? Mf(t)
      ? Pl
      : wt.test(t)
      ? Ly
      : KR
    : Array.isArray(t)
    ? mx
    : typeof t == "object"
    ? wt.test(t)
      ? Ly
      : WR
    : Pl;
}
function mx(t, e) {
  const r = [...t],
    i = r.length,
    a = t.map((u, c) => th(u)(u, e[c]));
  return (u) => {
    for (let c = 0; c < i; c++) r[c] = a[c](u);
    return r;
  };
}
function WR(t, e) {
  const r = { ...t, ...e },
    i = {};
  for (const a in r)
    t[a] !== void 0 && e[a] !== void 0 && (i[a] = th(t[a])(t[a], e[a]));
  return (a) => {
    for (const u in i) r[u] = i[u](a);
    return r;
  };
}
function qR(t, e) {
  var r;
  const i = [],
    a = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < e.values.length; u++) {
    const c = e.types[u],
      f = t.indexes[c][a[c]],
      h = (r = t.values[f]) !== null && r !== void 0 ? r : 0;
    (i[u] = h), a[c]++;
  }
  return i;
}
const KR = (t, e) => {
  const r = Tr.createTransformer(e),
    i = ko(t),
    a = ko(e);
  return i.indexes.var.length === a.indexes.var.length &&
    i.indexes.color.length === a.indexes.color.length &&
    i.indexes.number.length >= a.indexes.number.length
    ? (Yd.has(t) && !a.values.length) || (Yd.has(e) && !i.values.length)
      ? $R(t, e)
      : Bo(mx(qR(i, a), a.values), r)
    : Pl(t, e);
};
function gx(t, e, r) {
  return typeof t == "number" && typeof e == "number" && typeof r == "number"
    ? We(t, e, r)
    : th(t)(t, e);
}
const QR = 5;
function yx(t, e, r) {
  const i = Math.max(e - QR, 0);
  return Hw(r - t(i), e - i);
}
const Qe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  ad = 0.001;
function GR({
  duration: t = Qe.duration,
  bounce: e = Qe.bounce,
  velocity: r = Qe.velocity,
  mass: i = Qe.mass,
}) {
  let a,
    u,
    c = 1 - e;
  (c = Un(Qe.minDamping, Qe.maxDamping, c)),
    (t = Un(Qe.minDuration, Qe.maxDuration, Bn(t))),
    c < 1
      ? ((a = (m) => {
          const g = m * c,
            y = g * t,
            w = g - r,
            T = Xd(m, c),
            k = Math.exp(-y);
          return ad - (w / T) * k;
        }),
        (u = (m) => {
          const y = m * c * t,
            w = y * r + r,
            T = Math.pow(c, 2) * Math.pow(m, 2) * t,
            k = Math.exp(-y),
            b = Xd(Math.pow(m, 2), c);
          return ((-a(m) + ad > 0 ? -1 : 1) * ((w - T) * k)) / b;
        }))
      : ((a = (m) => {
          const g = Math.exp(-m * t),
            y = (m - r) * t + 1;
          return -ad + g * y;
        }),
        (u = (m) => {
          const g = Math.exp(-m * t),
            y = (r - m) * (t * t);
          return g * y;
        }));
  const f = 5 / t,
    h = YR(a, u, f);
  if (((t = Vn(t)), isNaN(h)))
    return { stiffness: Qe.stiffness, damping: Qe.damping, duration: t };
  {
    const m = Math.pow(h, 2) * i;
    return { stiffness: m, damping: c * 2 * Math.sqrt(i * m), duration: t };
  }
}
const JR = 12;
function YR(t, e, r) {
  let i = r;
  for (let a = 1; a < JR; a++) i = i - t(i) / e(i);
  return i;
}
function Xd(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const XR = ["duration", "bounce"],
  ZR = ["stiffness", "damping", "mass"];
function My(t, e) {
  return e.some((r) => t[r] !== void 0);
}
function eA(t) {
  let e = {
    velocity: Qe.velocity,
    stiffness: Qe.stiffness,
    damping: Qe.damping,
    mass: Qe.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!My(t, ZR) && My(t, XR))
    if (t.visualDuration) {
      const r = t.visualDuration,
        i = (2 * Math.PI) / (r * 1.2),
        a = i * i,
        u = 2 * Un(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = { ...e, mass: Qe.mass, stiffness: a, damping: u };
    } else {
      const r = GR(t);
      (e = { ...e, ...r, mass: Qe.mass }), (e.isResolvedFromDuration = !0);
    }
  return e;
}
function vx(t = Qe.visualDuration, e = Qe.bounce) {
  const r =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: e }
      : t;
  let { restSpeed: i, restDelta: a } = r;
  const u = r.keyframes[0],
    c = r.keyframes[r.keyframes.length - 1],
    f = { done: !1, value: u },
    {
      stiffness: h,
      damping: m,
      mass: g,
      duration: y,
      velocity: w,
      isResolvedFromDuration: T,
    } = eA({ ...r, velocity: -Bn(r.velocity || 0) }),
    k = w || 0,
    b = m / (2 * Math.sqrt(h * g)),
    x = c - u,
    R = Bn(Math.sqrt(h / g)),
    F = Math.abs(x) < 5;
  i || (i = F ? Qe.restSpeed.granular : Qe.restSpeed.default),
    a || (a = F ? Qe.restDelta.granular : Qe.restDelta.default);
  let L;
  if (b < 1) {
    const U = Xd(R, b);
    L = (Q) => {
      const J = Math.exp(-b * R * Q);
      return (
        c - J * (((k + b * R * x) / U) * Math.sin(U * Q) + x * Math.cos(U * Q))
      );
    };
  } else if (b === 1) L = (U) => c - Math.exp(-R * U) * (x + (k + R * x) * U);
  else {
    const U = R * Math.sqrt(b * b - 1);
    L = (Q) => {
      const J = Math.exp(-b * R * Q),
        D = Math.min(U * Q, 300);
      return (
        c - (J * ((k + b * R * x) * Math.sinh(D) + U * x * Math.cosh(D))) / U
      );
    };
  }
  const M = {
    calculatedDuration: (T && y) || null,
    next: (U) => {
      const Q = L(U);
      if (T) f.done = U >= y;
      else {
        let J = 0;
        b < 1 && (J = U === 0 ? Vn(k) : yx(L, U, Q));
        const D = Math.abs(J) <= i,
          X = Math.abs(c - Q) <= a;
        f.done = D && X;
      }
      return (f.value = f.done ? c : Q), f;
    },
    toString: () => {
      const U = Math.min(Dw(M), Hd),
        Q = Iw((J) => M.next(U * J).value, U, 30);
      return U + "ms " + Q;
    },
  };
  return M;
}
function Dy({
  keyframes: t,
  velocity: e = 0,
  power: r = 0.8,
  timeConstant: i = 325,
  bounceDamping: a = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: f,
  max: h,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const y = t[0],
    w = { done: !1, value: y },
    T = (D) => (f !== void 0 && D < f) || (h !== void 0 && D > h),
    k = (D) =>
      f === void 0
        ? h
        : h === void 0 || Math.abs(f - D) < Math.abs(h - D)
        ? f
        : h;
  let b = r * e;
  const x = y + b,
    R = c === void 0 ? x : c(x);
  R !== x && (b = R - y);
  const F = (D) => -b * Math.exp(-D / i),
    L = (D) => R + F(D),
    M = (D) => {
      const X = F(D),
        me = L(D);
      (w.done = Math.abs(X) <= m), (w.value = w.done ? R : me);
    };
  let U, Q;
  const J = (D) => {
    T(w.value) &&
      ((U = D),
      (Q = vx({
        keyframes: [w.value, k(w.value)],
        velocity: yx(L, D, w.value),
        damping: a,
        stiffness: u,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    J(0),
    {
      calculatedDuration: null,
      next: (D) => {
        let X = !1;
        return (
          !Q && U === void 0 && ((X = !0), M(D), J(D)),
          U !== void 0 && D >= U ? Q.next(D - U) : (!X && M(D), w)
        );
      },
    }
  );
}
const tA = Vo(0.42, 0, 1, 1),
  nA = Vo(0, 0, 0.58, 1),
  wx = Vo(0.42, 0, 0.58, 1),
  rA = (t) => Array.isArray(t) && typeof t[0] != "number",
  sA = {
    linear: Bt,
    easeIn: tA,
    easeInOut: wx,
    easeOut: nA,
    circIn: Jf,
    circInOut: Zw,
    circOut: Xw,
    backIn: Gf,
    backInOut: Jw,
    backOut: Gw,
    anticipate: Yw,
  },
  Iy = (t) => {
    if (Hf(t)) {
      gw(t.length === 4);
      const [e, r, i, a] = t;
      return Vo(e, r, i, a);
    } else if (typeof t == "string") return sA[t];
    return t;
  };
function iA(t, e, r) {
  const i = [],
    a = r || gx,
    u = t.length - 1;
  for (let c = 0; c < u; c++) {
    let f = a(t[c], t[c + 1]);
    if (e) {
      const h = Array.isArray(e) ? e[c] || Bt : e;
      f = Bo(h, f);
    }
    i.push(f);
  }
  return i;
}
function oA(t, e, { clamp: r = !0, ease: i, mixer: a } = {}) {
  const u = t.length;
  if ((gw(u === e.length), u === 1)) return () => e[0];
  if (u === 2 && e[0] === e[1]) return () => e[1];
  const c = t[0] === t[1];
  t[0] > t[u - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const f = iA(e, i, a),
    h = f.length,
    m = (g) => {
      if (c && g < t[0]) return e[0];
      let y = 0;
      if (h > 1) for (; y < t.length - 2 && !(g < t[y + 1]); y++);
      const w = ri(t[y], t[y + 1], g);
      return f[y](w);
    };
  return r ? (g) => m(Un(t[0], t[u - 1], g)) : m;
}
function aA(t, e) {
  const r = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const a = ri(0, e, i);
    t.push(We(r, 1, a));
  }
}
function lA(t) {
  const e = [0];
  return aA(e, t.length - 1), e;
}
function uA(t, e) {
  return t.map((r) => r * e);
}
function cA(t, e) {
  return t.map(() => e || wx).splice(0, t.length - 1);
}
function _l({
  duration: t = 300,
  keyframes: e,
  times: r,
  ease: i = "easeInOut",
}) {
  const a = rA(i) ? i.map(Iy) : Iy(i),
    u = { done: !1, value: e[0] },
    c = uA(r && r.length === e.length ? r : lA(e), t),
    f = oA(c, e, { ease: Array.isArray(a) ? a : cA(e, a) });
  return {
    calculatedDuration: t,
    next: (h) => ((u.value = f(h)), (u.done = h >= t), u),
  };
}
const dA = (t) => {
    const e = ({ timestamp: r }) => t(r);
    return {
      start: () => Ue.update(e, !0),
      stop: () => Er(e),
      now: () => (dt.isProcessing ? dt.timestamp : kn.now()),
    };
  },
  fA = { decay: Dy, inertia: Dy, tween: _l, keyframes: _l, spring: vx },
  hA = (t) => t / 100;
class nh extends px {
  constructor(e) {
    super(e),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: h } = this.options;
        h && h();
      });
    const { name: r, motionValue: i, element: a, keyframes: u } = this.options,
      c = (a == null ? void 0 : a.KeyframeResolver) || eh,
      f = (h, m) => this.onKeyframesResolved(h, m);
    (this.resolver = new c(u, f, r, i, a)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(e) {
    const {
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: a = 0,
        repeatType: u,
        velocity: c = 0,
      } = this.options,
      f = $f(r) ? r : fA[r] || _l;
    let h, m;
    f !== _l &&
      typeof e[0] != "number" &&
      ((h = Bo(hA, gx(e[0], e[1]))), (e = [0, 100]));
    const g = f({ ...this.options, keyframes: e });
    u === "mirror" &&
      (m = f({ ...this.options, keyframes: [...e].reverse(), velocity: -c })),
      g.calculatedDuration === null && (g.calculatedDuration = Dw(g));
    const { calculatedDuration: y } = g,
      w = y + a,
      T = w * (i + 1) - a;
    return {
      generator: g,
      mirroredGenerator: m,
      mapPercentToKeyframes: h,
      calculatedDuration: y,
      resolvedDuration: w,
      totalDuration: T,
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !e
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(e, r = !1) {
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: D } = this.options;
      return { done: !0, value: D[D.length - 1] };
    }
    const {
      finalKeyframe: a,
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: f,
      keyframes: h,
      calculatedDuration: m,
      totalDuration: g,
      resolvedDuration: y,
    } = i;
    if (this.startTime === null) return u.next(0);
    const {
      delay: w,
      repeat: T,
      repeatType: k,
      repeatDelay: b,
      onUpdate: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - g / this.speed, this.startTime)),
      r
        ? (this.currentTime = e)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(e - this.startTime) * this.speed);
    const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
      F = this.speed >= 0 ? R < 0 : R > g;
    (this.currentTime = Math.max(R, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = g);
    let L = this.currentTime,
      M = u;
    if (T) {
      const D = Math.min(this.currentTime, g) / y;
      let X = Math.floor(D),
        me = D % 1;
      !me && D >= 1 && (me = 1),
        me === 1 && X--,
        (X = Math.min(X, T + 1)),
        !!(X % 2) &&
          (k === "reverse"
            ? ((me = 1 - me), b && (me -= b / y))
            : k === "mirror" && (M = c)),
        (L = Un(0, 1, me) * y);
    }
    const U = F ? { done: !1, value: h[0] } : M.next(L);
    f && (U.value = f(U.value));
    let { done: Q } = U;
    !F &&
      m !== null &&
      (Q = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const J =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && Q));
    return (
      J && a !== void 0 && (U.value = Wl(h, this.options, a)),
      x && x(U.value),
      J && this.finish(),
      U
    );
  }
  get duration() {
    const { resolved: e } = this;
    return e ? Bn(e.calculatedDuration) : 0;
  }
  get time() {
    return Bn(this.currentTime);
  }
  set time(e) {
    (e = Vn(e)),
      (this.currentTime = e),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const r = this.playbackSpeed !== e;
    (this.playbackSpeed = e), r && (this.time = Bn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: e = dA, onPlay: r, startTime: i } = this.options;
    this.driver || (this.driver = e((u) => this.tick(u))), r && r();
    const a = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = a - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = a)
      : (this.startTime = i ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
}
const pA = new Set(["opacity", "clipPath", "filter", "transform"]);
function mA(
  t,
  e,
  r,
  {
    delay: i = 0,
    duration: a = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: f = "easeInOut",
    times: h,
  } = {}
) {
  const m = { [e]: r };
  h && (m.offset = h);
  const g = Vw(f, a);
  return (
    Array.isArray(g) && (m.easing = g),
    t.animate(m, {
      delay: i,
      duration: a,
      easing: Array.isArray(g) ? "linear" : g,
      fill: "both",
      iterations: u + 1,
      direction: c === "reverse" ? "alternate" : "normal",
    })
  );
}
const gA = _f(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Rl = 10,
  yA = 2e4;
function vA(t) {
  return $f(t.type) || t.type === "spring" || !Fw(t.ease);
}
function wA(t, e) {
  const r = new nh({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let i = { done: !1, value: t[0] };
  const a = [];
  let u = 0;
  for (; !i.done && u < yA; ) (i = r.sample(u)), a.push(i.value), (u += Rl);
  return { times: void 0, keyframes: a, duration: u - Rl, ease: "linear" };
}
const xx = { anticipate: Yw, backInOut: Jw, circInOut: Zw };
function xA(t) {
  return t in xx;
}
class Fy extends px {
  constructor(e) {
    super(e);
    const { name: r, motionValue: i, element: a, keyframes: u } = this.options;
    (this.resolver = new hx(
      u,
      (c, f) => this.onKeyframesResolved(c, f),
      r,
      i,
      a
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, r) {
    let {
      duration: i = 300,
      times: a,
      ease: u,
      type: c,
      motionValue: f,
      name: h,
      startTime: m,
    } = this.options;
    if (!f.owner || !f.owner.current) return !1;
    if (
      (typeof u == "string" && Cl() && xA(u) && (u = xx[u]), vA(this.options))
    ) {
      const {
          onComplete: y,
          onUpdate: w,
          motionValue: T,
          element: k,
          ...b
        } = this.options,
        x = wA(e, b);
      (e = x.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (i = x.duration),
        (a = x.times),
        (u = x.ease),
        (c = "keyframes");
    }
    const g = mA(f.owner.current, h, e, {
      ...this.options,
      duration: i,
      times: a,
      ease: u,
    });
    return (
      (g.startTime = m ?? this.calcStartTime()),
      this.pendingTimeline
        ? (by(g, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (g.onfinish = () => {
            const { onComplete: y } = this.options;
            f.set(Wl(e, this.options, r)),
              y && y(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: g, duration: i, times: a, type: c, ease: u, keyframes: e }
    );
  }
  get duration() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { duration: r } = e;
    return Bn(r);
  }
  get time() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { animation: r } = e;
    return Bn(r.currentTime || 0);
  }
  set time(e) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: i } = r;
    i.currentTime = Vn(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e) return 1;
    const { animation: r } = e;
    return r.playbackRate;
  }
  set speed(e) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: i } = r;
    i.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e) return "idle";
    const { animation: r } = e;
    return r.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e) return null;
    const { animation: r } = e;
    return r.startTime;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const { resolved: r } = this;
      if (!r) return Bt;
      const { animation: i } = r;
      by(i, e);
    }
    return Bt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: e } = this;
    if (!e) return;
    const { animation: r } = e;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e) return;
    const { animation: r } = e;
    r.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e) return;
    const {
      animation: r,
      keyframes: i,
      duration: a,
      type: u,
      ease: c,
      times: f,
    } = e;
    if (r.playState === "idle" || r.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: m,
          onUpdate: g,
          onComplete: y,
          element: w,
          ...T
        } = this.options,
        k = new nh({
          ...T,
          keyframes: i,
          duration: a,
          type: u,
          ease: c,
          times: f,
          isGenerator: !0,
        }),
        b = Vn(this.time);
      m.setWithVelocity(k.sample(b - Rl).value, k.sample(b).value, Rl);
    }
    const { onStop: h } = this.options;
    h && h(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const {
      motionValue: r,
      name: i,
      repeatDelay: a,
      repeatType: u,
      damping: c,
      type: f,
    } = e;
    if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: h, transformTemplate: m } = r.owner.getProps();
    return (
      gA() &&
      i &&
      pA.has(i) &&
      !h &&
      !m &&
      !a &&
      u !== "mirror" &&
      c !== 0 &&
      f !== "inertia"
    );
  }
}
const SA = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  bA = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  kA = { type: "keyframes", duration: 0.8 },
  EA = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  TA = (t, { keyframes: e }) =>
    e.length > 2
      ? kA
      : ds.has(t)
      ? t.startsWith("scale")
        ? bA(e[1])
        : SA
      : EA;
function CA({
  when: t,
  delay: e,
  delayChildren: r,
  staggerChildren: i,
  staggerDirection: a,
  repeat: u,
  repeatType: c,
  repeatDelay: f,
  from: h,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const rh =
  (t, e, r, i = {}, a, u) =>
  (c) => {
    const f = zf(i, t) || {},
      h = f.delay || i.delay || 0;
    let { elapsed: m = 0 } = i;
    m = m - Vn(h);
    let g = {
      keyframes: Array.isArray(r) ? r : [null, r],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...f,
      delay: -m,
      onUpdate: (w) => {
        e.set(w), f.onUpdate && f.onUpdate(w);
      },
      onComplete: () => {
        c(), f.onComplete && f.onComplete();
      },
      name: t,
      motionValue: e,
      element: u ? void 0 : a,
    };
    CA(f) || (g = { ...g, ...TA(t, g) }),
      g.duration && (g.duration = Vn(g.duration)),
      g.repeatDelay && (g.repeatDelay = Vn(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (y = !0)),
      y && !u && e.get() !== void 0)
    ) {
      const w = Wl(g.keyframes, f);
      if (w !== void 0)
        return (
          Ue.update(() => {
            g.onUpdate(w), g.onComplete();
          }),
          new W_([])
        );
    }
    return !u && Fy.supports(g) ? new Fy(g) : new nh(g);
  };
function PA({ protectedKeys: t, needsAnimating: e }, r) {
  const i = t.hasOwnProperty(r) && e[r] !== !0;
  return (e[r] = !1), i;
}
function Sx(t, e, { delay: r = 0, transitionOverride: i, type: a } = {}) {
  var u;
  let { transition: c = t.getDefaultTransition(), transitionEnd: f, ...h } = e;
  i && (c = i);
  const m = [],
    g = a && t.animationState && t.animationState.getState()[a];
  for (const y in h) {
    const w = t.getValue(
        y,
        (u = t.latestValues[y]) !== null && u !== void 0 ? u : null
      ),
      T = h[y];
    if (T === void 0 || (g && PA(g, y))) continue;
    const k = { delay: r, ...zf(c || {}, y) };
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const R = Ww(t);
      if (R) {
        const F = window.MotionHandoffAnimation(R, y, Ue);
        F !== null && ((k.startTime = F), (b = !0));
      }
    }
    qd(t, y),
      w.start(
        rh(y, w, T, t.shouldReduceMotion && $w.has(y) ? { type: !1 } : k, t, b)
      );
    const x = w.animation;
    x && m.push(x);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        Ue.update(() => {
          f && iR(t, f);
        });
      }),
    m
  );
}
function Zd(t, e, r = {}) {
  var i;
  const a = Hl(
    t,
    e,
    r.type === "exit"
      ? (i = t.presenceContext) === null || i === void 0
        ? void 0
        : i.custom
      : void 0
  );
  let { transition: u = t.getDefaultTransition() || {} } = a || {};
  r.transitionOverride && (u = r.transitionOverride);
  const c = a ? () => Promise.all(Sx(t, a, r)) : () => Promise.resolve(),
    f =
      t.variantChildren && t.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: y,
              staggerDirection: w,
            } = u;
            return _A(t, e, g + m, y, w, r);
          }
        : () => Promise.resolve(),
    { when: h } = u;
  if (h) {
    const [m, g] = h === "beforeChildren" ? [c, f] : [f, c];
    return m().then(() => g());
  } else return Promise.all([c(), f(r.delay)]);
}
function _A(t, e, r = 0, i = 0, a = 1, u) {
  const c = [],
    f = (t.variantChildren.size - 1) * i,
    h = a === 1 ? (m = 0) => m * i : (m = 0) => f - m * i;
  return (
    Array.from(t.variantChildren)
      .sort(RA)
      .forEach((m, g) => {
        m.notify("AnimationStart", e),
          c.push(
            Zd(m, e, { ...u, delay: r + h(g) }).then(() =>
              m.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(c)
  );
}
function RA(t, e) {
  return t.sortNodePosition(e);
}
function AA(t, e, r = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const a = e.map((u) => Zd(t, u, r));
    i = Promise.all(a);
  } else if (typeof e == "string") i = Zd(t, e, r);
  else {
    const a = typeof e == "function" ? Hl(t, e, r.custom) : e;
    i = Promise.all(Sx(t, a, r));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const NA = Af.length;
function bx(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const r = t.parent ? bx(t.parent) || {} : {};
    return t.props.initial !== void 0 && (r.initial = t.props.initial), r;
  }
  const e = {};
  for (let r = 0; r < NA; r++) {
    const i = Af[r],
      a = t.props[i];
    (xo(a) || a === !1) && (e[i] = a);
  }
  return e;
}
const OA = [...Rf].reverse(),
  jA = Rf.length;
function LA(t) {
  return (e) =>
    Promise.all(e.map(({ animation: r, options: i }) => AA(t, r, i)));
}
function MA(t) {
  let e = LA(t),
    r = Vy(),
    i = !0;
  const a = (h) => (m, g) => {
    var y;
    const w = Hl(
      t,
      g,
      h === "exit"
        ? (y = t.presenceContext) === null || y === void 0
          ? void 0
          : y.custom
        : void 0
    );
    if (w) {
      const { transition: T, transitionEnd: k, ...b } = w;
      m = { ...m, ...b, ...k };
    }
    return m;
  };
  function u(h) {
    e = h(t);
  }
  function c(h) {
    const { props: m } = t,
      g = bx(t.parent) || {},
      y = [],
      w = new Set();
    let T = {},
      k = 1 / 0;
    for (let x = 0; x < jA; x++) {
      const R = OA[x],
        F = r[R],
        L = m[R] !== void 0 ? m[R] : g[R],
        M = xo(L),
        U = R === h ? F.isActive : null;
      U === !1 && (k = x);
      let Q = L === g[R] && L !== m[R] && M;
      if (
        (Q && i && t.manuallyAnimateOnMount && (Q = !1),
        (F.protectedKeys = { ...T }),
        (!F.isActive && U === null) ||
          (!L && !F.prevProp) ||
          zl(L) ||
          typeof L == "boolean")
      )
        continue;
      const J = DA(F.prevProp, L);
      let D = J || (R === h && F.isActive && !Q && M) || (x > k && M),
        X = !1;
      const me = Array.isArray(L) ? L : [L];
      let de = me.reduce(a(R), {});
      U === !1 && (de = {});
      const { prevResolvedValues: Pe = {} } = F,
        Me = { ...Pe, ...de },
        Ne = (fe) => {
          (D = !0),
            w.has(fe) && ((X = !0), w.delete(fe)),
            (F.needsAnimating[fe] = !0);
          const q = t.getValue(fe);
          q && (q.liveStyle = !1);
        };
      for (const fe in Me) {
        const q = de[fe],
          se = Pe[fe];
        if (T.hasOwnProperty(fe)) continue;
        let V = !1;
        $d(q) && $d(se) ? (V = !Mw(q, se)) : (V = q !== se),
          V
            ? q != null
              ? Ne(fe)
              : w.add(fe)
            : q !== void 0 && w.has(fe)
            ? Ne(fe)
            : (F.protectedKeys[fe] = !0);
      }
      (F.prevProp = L),
        (F.prevResolvedValues = de),
        F.isActive && (T = { ...T, ...de }),
        i && t.blockInitialAnimation && (D = !1),
        D &&
          (!(Q && J) || X) &&
          y.push(...me.map((fe) => ({ animation: fe, options: { type: R } })));
    }
    if (w.size) {
      const x = {};
      w.forEach((R) => {
        const F = t.getBaseTarget(R),
          L = t.getValue(R);
        L && (L.liveStyle = !0), (x[R] = F ?? null);
      }),
        y.push({ animation: x });
    }
    let b = !!y.length;
    return (
      i &&
        (m.initial === !1 || m.initial === m.animate) &&
        !t.manuallyAnimateOnMount &&
        (b = !1),
      (i = !1),
      b ? e(y) : Promise.resolve()
    );
  }
  function f(h, m) {
    var g;
    if (r[h].isActive === m) return Promise.resolve();
    (g = t.variantChildren) === null ||
      g === void 0 ||
      g.forEach((w) => {
        var T;
        return (T = w.animationState) === null || T === void 0
          ? void 0
          : T.setActive(h, m);
      }),
      (r[h].isActive = m);
    const y = c(h);
    for (const w in r) r[w].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: c,
    setActive: f,
    setAnimateFunction: u,
    getState: () => r,
    reset: () => {
      (r = Vy()), (i = !0);
    },
  };
}
function DA(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Mw(e, t) : !1;
}
function Hr(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Vy() {
  return {
    animate: Hr(!0),
    whileInView: Hr(),
    whileHover: Hr(),
    whileTap: Hr(),
    whileDrag: Hr(),
    whileFocus: Hr(),
    exit: Hr(),
  };
}
class Pr {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
class IA extends Pr {
  constructor(e) {
    super(e), e.animationState || (e.animationState = MA(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    zl(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    e !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(),
      (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let FA = 0;
class VA extends Pr {
  constructor() {
    super(...arguments), (this.id = FA++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: r } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const a = this.node.animationState.setActive("exit", !e);
    r && !e && a.then(() => r(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const BA = { animation: { Feature: IA }, exit: { Feature: VA } };
function Eo(t, e, r, i = { passive: !0 }) {
  return t.addEventListener(e, r, i), () => t.removeEventListener(e, r);
}
function Uo(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const UA = (t) => (e) => Wf(e) && t(e, Uo(e));
function po(t, e, r, i) {
  return Eo(t, e, UA(r), i);
}
const By = (t, e) => Math.abs(t - e);
function zA(t, e) {
  const r = By(t.x, e.x),
    i = By(t.y, e.y);
  return Math.sqrt(r ** 2 + i ** 2);
}
class kx {
  constructor(
    e,
    r,
    { transformPagePoint: i, contextWindow: a, dragSnapToOrigin: u = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const y = ud(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          T = zA(y.offset, { x: 0, y: 0 }) >= 3;
        if (!w && !T) return;
        const { point: k } = y,
          { timestamp: b } = dt;
        this.history.push({ ...k, timestamp: b });
        const { onStart: x, onMove: R } = this.handlers;
        w ||
          (x && x(this.lastMoveEvent, y),
          (this.startEvent = this.lastMoveEvent)),
          R && R(this.lastMoveEvent, y);
      }),
      (this.handlePointerMove = (y, w) => {
        (this.lastMoveEvent = y),
          (this.lastMoveEventInfo = ld(w, this.transformPagePoint)),
          Ue.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (y, w) => {
        this.end();
        const { onEnd: T, onSessionEnd: k, resumeAnimation: b } = this.handlers;
        if (
          (this.dragSnapToOrigin && b && b(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = ud(
          y.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ld(w, this.transformPagePoint),
          this.history
        );
        this.startEvent && T && T(y, x), k && k(y, x);
      }),
      !Wf(e))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = r),
      (this.transformPagePoint = i),
      (this.contextWindow = a || window);
    const c = Uo(e),
      f = ld(c, this.transformPagePoint),
      { point: h } = f,
      { timestamp: m } = dt;
    this.history = [{ ...h, timestamp: m }];
    const { onSessionStart: g } = r;
    g && g(e, ud(f, this.history)),
      (this.removeListeners = Bo(
        po(this.contextWindow, "pointermove", this.handlePointerMove),
        po(this.contextWindow, "pointerup", this.handlePointerUp),
        po(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Er(this.updatePoint);
  }
}
function ld(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Uy(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ud({ point: t }, e) {
  return {
    point: t,
    delta: Uy(t, Ex(e)),
    offset: Uy(t, $A(e)),
    velocity: HA(e, 0.1),
  };
}
function $A(t) {
  return t[0];
}
function Ex(t) {
  return t[t.length - 1];
}
function HA(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let r = t.length - 1,
    i = null;
  const a = Ex(t);
  for (; r >= 0 && ((i = t[r]), !(a.timestamp - i.timestamp > Vn(e))); ) r--;
  if (!i) return { x: 0, y: 0 };
  const u = Bn(a.timestamp - i.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (a.x - i.x) / u, y: (a.y - i.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
const Tx = 1e-4,
  WA = 1 - Tx,
  qA = 1 + Tx,
  Cx = 0.01,
  KA = 0 - Cx,
  QA = 0 + Cx;
function Ut(t) {
  return t.max - t.min;
}
function GA(t, e, r) {
  return Math.abs(t - e) <= r;
}
function zy(t, e, r, i = 0.5) {
  (t.origin = i),
    (t.originPoint = We(e.min, e.max, t.origin)),
    (t.scale = Ut(r) / Ut(e)),
    (t.translate = We(r.min, r.max, t.origin) - t.originPoint),
    ((t.scale >= WA && t.scale <= qA) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= KA && t.translate <= QA) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function mo(t, e, r, i) {
  zy(t.x, e.x, r.x, i ? i.originX : void 0),
    zy(t.y, e.y, r.y, i ? i.originY : void 0);
}
function $y(t, e, r) {
  (t.min = r.min + e.min), (t.max = t.min + Ut(e));
}
function JA(t, e, r) {
  $y(t.x, e.x, r.x), $y(t.y, e.y, r.y);
}
function Hy(t, e, r) {
  (t.min = e.min - r.min), (t.max = t.min + Ut(e));
}
function go(t, e, r) {
  Hy(t.x, e.x, r.x), Hy(t.y, e.y, r.y);
}
function YA(t, { min: e, max: r }, i) {
  return (
    e !== void 0 && t < e
      ? (t = i ? We(e, t, i.min) : Math.max(t, e))
      : r !== void 0 && t > r && (t = i ? We(r, t, i.max) : Math.min(t, r)),
    t
  );
}
function Wy(t, e, r) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0,
  };
}
function XA(t, { top: e, left: r, bottom: i, right: a }) {
  return { x: Wy(t.x, r, a), y: Wy(t.y, e, i) };
}
function qy(t, e) {
  let r = e.min - t.min,
    i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), { min: r, max: i };
}
function ZA(t, e) {
  return { x: qy(t.x, e.x), y: qy(t.y, e.y) };
}
function e2(t, e) {
  let r = 0.5;
  const i = Ut(t),
    a = Ut(e);
  return (
    a > i
      ? (r = ri(e.min, e.max - i, t.min))
      : i > a && (r = ri(t.min, t.max - a, e.min)),
    Un(0, 1, r)
  );
}
function t2(t, e) {
  const r = {};
  return (
    e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
  );
}
const ef = 0.35;
function n2(t = ef) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = ef),
    { x: Ky(t, "left", "right"), y: Ky(t, "top", "bottom") }
  );
}
function Ky(t, e, r) {
  return { min: Qy(t, e), max: Qy(t, r) };
}
function Qy(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Gy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Bs = () => ({ x: Gy(), y: Gy() }),
  Jy = () => ({ min: 0, max: 0 }),
  Ye = () => ({ x: Jy(), y: Jy() });
function Jt(t) {
  return [t("x"), t("y")];
}
function Px({ top: t, left: e, right: r, bottom: i }) {
  return { x: { min: e, max: r }, y: { min: t, max: i } };
}
function r2({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function s2(t, e) {
  if (!e) return t;
  const r = e({ x: t.left, y: t.top }),
    i = e({ x: t.right, y: t.bottom });
  return { top: r.y, left: r.x, bottom: i.y, right: i.x };
}
function cd(t) {
  return t === void 0 || t === 1;
}
function tf({ scale: t, scaleX: e, scaleY: r }) {
  return !cd(t) || !cd(e) || !cd(r);
}
function Wr(t) {
  return (
    tf(t) ||
    _x(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function _x(t) {
  return Yy(t.x) || Yy(t.y);
}
function Yy(t) {
  return t && t !== "0%";
}
function Al(t, e, r) {
  const i = t - r,
    a = e * i;
  return r + a;
}
function Xy(t, e, r, i, a) {
  return a !== void 0 && (t = Al(t, a, i)), Al(t, r, i) + e;
}
function nf(t, e = 0, r = 1, i, a) {
  (t.min = Xy(t.min, e, r, i, a)), (t.max = Xy(t.max, e, r, i, a));
}
function Rx(t, { x: e, y: r }) {
  nf(t.x, e.translate, e.scale, e.originPoint),
    nf(t.y, r.translate, r.scale, r.originPoint);
}
const Zy = 0.999999999999,
  ev = 1.0000000000001;
function i2(t, e, r, i = !1) {
  const a = r.length;
  if (!a) return;
  e.x = e.y = 1;
  let u, c;
  for (let f = 0; f < a; f++) {
    (u = r[f]), (c = u.projectionDelta);
    const { visualElement: h } = u.options;
    (h && h.props.style && h.props.style.display === "contents") ||
      (i &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        zs(t, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((e.x *= c.x.scale), (e.y *= c.y.scale), Rx(t, c)),
      i && Wr(u.latestValues) && zs(t, u.latestValues));
  }
  e.x < ev && e.x > Zy && (e.x = 1), e.y < ev && e.y > Zy && (e.y = 1);
}
function Us(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function tv(t, e, r, i, a = 0.5) {
  const u = We(t.min, t.max, a);
  nf(t, e, r, u, i);
}
function zs(t, e) {
  tv(t.x, e.x, e.scaleX, e.scale, e.originX),
    tv(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ax(t, e) {
  return Px(s2(t.getBoundingClientRect(), e));
}
function o2(t, e, r) {
  const i = Ax(t, r),
    { scroll: a } = e;
  return a && (Us(i.x, a.offset.x), Us(i.y, a.offset.y)), i;
}
const Nx = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  a2 = new WeakMap();
class l2 {
  constructor(e) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ye()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const a = (g) => {
        const { dragSnapToOrigin: y } = this.getProps();
        y ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(Uo(g).point);
      },
      u = (g, y) => {
        const { drag: w, dragPropagation: T, onDragStart: k } = this.getProps();
        if (
          w &&
          !T &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = eR(w)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Jt((x) => {
            let R = this.getAxisMotionValue(x).get() || 0;
            if (bn.test(R)) {
              const { projection: F } = this.visualElement;
              if (F && F.layout) {
                const L = F.layout.layoutBox[x];
                L && (R = Ut(L) * (parseFloat(R) / 100));
              }
            }
            this.originPoint[x] = R;
          }),
          k && Ue.postRender(() => k(g, y)),
          qd(this.visualElement, "transform");
        const { animationState: b } = this.visualElement;
        b && b.setActive("whileDrag", !0);
      },
      c = (g, y) => {
        const {
          dragPropagation: w,
          dragDirectionLock: T,
          onDirectionLock: k,
          onDrag: b,
        } = this.getProps();
        if (!w && !this.openDragLock) return;
        const { offset: x } = y;
        if (T && this.currentDirection === null) {
          (this.currentDirection = u2(x)),
            this.currentDirection !== null && k && k(this.currentDirection);
          return;
        }
        this.updateAxis("x", y.point, x),
          this.updateAxis("y", y.point, x),
          this.visualElement.render(),
          b && b(g, y);
      },
      f = (g, y) => this.stop(g, y),
      h = () =>
        Jt((g) => {
          var y;
          return (
            this.getAnimationState(g) === "paused" &&
            ((y = this.getAxisMotionValue(g).animation) === null || y === void 0
              ? void 0
              : y.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new kx(
      e,
      {
        onSessionStart: a,
        onStart: u,
        onMove: c,
        onSessionEnd: f,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        contextWindow: Nx(this.visualElement),
      }
    );
  }
  stop(e, r) {
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: a } = r;
    this.startAnimation(a);
    const { onDragEnd: u } = this.getProps();
    u && Ue.postRender(() => u(e, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: r } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: i } = this.getProps();
    !i &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(e, r, i) {
    const { drag: a } = this.getProps();
    if (!i || !ol(e, a, this.currentDirection)) return;
    const u = this.getAxisMotionValue(e);
    let c = this.originPoint[e] + i[e];
    this.constraints &&
      this.constraints[e] &&
      (c = YA(c, this.constraints[e], this.elastic[e])),
      u.set(c);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: r, dragElastic: i } = this.getProps(),
      a =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
          ? void 0
          : e.layout,
      u = this.constraints;
    r && Fs(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && a
      ? (this.constraints = XA(a.layoutBox, r))
      : (this.constraints = !1),
      (this.elastic = n2(i)),
      u !== this.constraints &&
        a &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Jt((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = t2(a.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: r } = this.getProps();
    if (!e || !Fs(e)) return !1;
    const i = e.current,
      { projection: a } = this.visualElement;
    if (!a || !a.layout) return !1;
    const u = o2(i, a.root, this.visualElement.getTransformPagePoint());
    let c = ZA(a.layout.layoutBox, u);
    if (r) {
      const f = r(r2(c));
      (this.hasMutatedConstraints = !!f), f && (c = Px(f));
    }
    return c;
  }
  startAnimation(e) {
    const {
        drag: r,
        dragMomentum: i,
        dragElastic: a,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: f,
      } = this.getProps(),
      h = this.constraints || {},
      m = Jt((g) => {
        if (!ol(g, r, this.currentDirection)) return;
        let y = (h && h[g]) || {};
        c && (y = { min: 0, max: 0 });
        const w = a ? 200 : 1e6,
          T = a ? 40 : 1e7,
          k = {
            type: "inertia",
            velocity: i ? e[g] : 0,
            bounceStiffness: w,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...y,
          };
        return this.startAxisValueAnimation(g, k);
      });
    return Promise.all(m).then(f);
  }
  startAxisValueAnimation(e, r) {
    const i = this.getAxisMotionValue(e);
    return (
      qd(this.visualElement, e), i.start(rh(e, i, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Jt((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    Jt((e) => {
      var r;
      return (r = this.getAxisMotionValue(e).animation) === null || r === void 0
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(e) {
    var r;
    return (r = this.getAxisMotionValue(e).animation) === null || r === void 0
      ? void 0
      : r.state;
  }
  getAxisMotionValue(e) {
    const r = `_drag${e.toUpperCase()}`,
      i = this.visualElement.getProps(),
      a = i[r];
    return (
      a ||
      this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    Jt((r) => {
      const { drag: i } = this.getProps();
      if (!ol(r, i, this.currentDirection)) return;
      const { projection: a } = this.visualElement,
        u = this.getAxisMotionValue(r);
      if (a && a.layout) {
        const { min: c, max: f } = a.layout.layoutBox[r];
        u.set(e[r] - We(c, f, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: r } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!Fs(r) || !i || !this.constraints) return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    Jt((c) => {
      const f = this.getAxisMotionValue(c);
      if (f && this.constraints !== !1) {
        const h = f.get();
        a[c] = e2({ min: h, max: h }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      Jt((c) => {
        if (!ol(c, e, null)) return;
        const f = this.getAxisMotionValue(c),
          { min: h, max: m } = this.constraints[c];
        f.set(We(h, m, a[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    a2.set(this.visualElement, this);
    const e = this.visualElement.current,
      r = po(e, "pointerdown", (h) => {
        const { drag: m, dragListener: g = !0 } = this.getProps();
        m && g && this.start(h);
      }),
      i = () => {
        const { dragConstraints: h } = this.getProps();
        Fs(h) && h.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: a } = this.visualElement,
      u = a.addEventListener("measure", i);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()),
      Ue.read(i);
    const c = Eo(window, "resize", () => this.scalePositionWithinConstraints()),
      f = a.addEventListener(
        "didUpdate",
        ({ delta: h, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (Jt((g) => {
              const y = this.getAxisMotionValue(g);
              y &&
                ((this.originPoint[g] += h[g].translate),
                y.set(y.get() + h[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      c(), r(), u(), f && f();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: i = !1,
        dragPropagation: a = !1,
        dragConstraints: u = !1,
        dragElastic: c = ef,
        dragMomentum: f = !0,
      } = e;
    return {
      ...e,
      drag: r,
      dragDirectionLock: i,
      dragPropagation: a,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: f,
    };
  }
}
function ol(t, e, r) {
  return (e === !0 || e === t) && (r === null || r === t);
}
function u2(t, e = 10) {
  let r = null;
  return Math.abs(t.y) > e ? (r = "y") : Math.abs(t.x) > e && (r = "x"), r;
}
class c2 extends Pr {
  constructor(e) {
    super(e),
      (this.removeGroupControls = Bt),
      (this.removeListeners = Bt),
      (this.controls = new l2(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Bt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const nv = (t) => (e, r) => {
  t && Ue.postRender(() => t(e, r));
};
class d2 extends Pr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Bt);
  }
  onPointerDown(e) {
    this.session = new kx(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Nx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: r,
      onPan: i,
      onPanEnd: a,
    } = this.node.getProps();
    return {
      onSessionStart: nv(e),
      onStart: nv(r),
      onMove: i,
      onEnd: (u, c) => {
        delete this.session, a && Ue.postRender(() => a(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = po(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const vl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function rv(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const eo = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (ce.test(t)) t = parseFloat(t);
        else return t;
      const r = rv(t, e.target.x),
        i = rv(t, e.target.y);
      return `${r}% ${i}%`;
    },
  },
  f2 = {
    correct: (t, { treeScale: e, projectionDelta: r }) => {
      const i = t,
        a = Tr.parse(t);
      if (a.length > 5) return i;
      const u = Tr.createTransformer(t),
        c = typeof a[0] != "number" ? 1 : 0,
        f = r.x.scale * e.x,
        h = r.y.scale * e.y;
      (a[0 + c] /= f), (a[1 + c] /= h);
      const m = We(f, h, 0.5);
      return (
        typeof a[2 + c] == "number" && (a[2 + c] /= m),
        typeof a[3 + c] == "number" && (a[3 + c] /= m),
        u(a)
      );
    },
  };
class h2 extends B.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: r,
        switchLayoutGroup: i,
        layoutId: a,
      } = this.props,
      { projection: u } = e;
    j_(p2),
      u &&
        (r.group && r.group.add(u),
        i && i.register && a && i.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (vl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: r,
        visualElement: i,
        drag: a,
        isPresent: u,
      } = this.props,
      c = i.projection;
    return (
      c &&
        ((c.isPresent = u),
        a || e.layoutDependency !== r || r === void 0
          ? c.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              Ue.postRender(() => {
                const f = c.getStack();
                (!f || !f.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      Of.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: r,
        switchLayoutGroup: i,
      } = this.props,
      { projection: a } = e;
    a &&
      (a.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(a),
      i && i.deregister && i.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ox(t) {
  const [e, r] = QP(),
    i = B.useContext(pw);
  return S.jsx(h2, {
    ...t,
    layoutGroup: i,
    switchLayoutGroup: B.useContext(bw),
    isPresent: e,
    safeToRemove: r,
  });
}
const p2 = {
  borderRadius: {
    ...eo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: eo,
  borderTopRightRadius: eo,
  borderBottomLeftRadius: eo,
  borderBottomRightRadius: eo,
  boxShadow: f2,
};
function m2(t, e, r) {
  const i = St(t) ? t : bo(t);
  return i.start(rh("", i, e, r)), i.animation;
}
function g2(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const y2 = (t, e) => t.depth - e.depth;
class v2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    qf(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    Kf(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(y2),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function w2(t, e) {
  const r = kn.now(),
    i = ({ timestamp: a }) => {
      const u = a - r;
      u >= e && (Er(i), t(u - e));
    };
  return Ue.read(i, !0), () => Er(i);
}
const jx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  x2 = jx.length,
  sv = (t) => (typeof t == "string" ? parseFloat(t) : t),
  iv = (t) => typeof t == "number" || ce.test(t);
function S2(t, e, r, i, a, u) {
  a
    ? ((t.opacity = We(0, r.opacity !== void 0 ? r.opacity : 1, b2(i))),
      (t.opacityExit = We(e.opacity !== void 0 ? e.opacity : 1, 0, k2(i))))
    : u &&
      (t.opacity = We(
        e.opacity !== void 0 ? e.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        i
      ));
  for (let c = 0; c < x2; c++) {
    const f = `border${jx[c]}Radius`;
    let h = ov(e, f),
      m = ov(r, f);
    if (h === void 0 && m === void 0) continue;
    h || (h = 0),
      m || (m = 0),
      h === 0 || m === 0 || iv(h) === iv(m)
        ? ((t[f] = Math.max(We(sv(h), sv(m), i), 0)),
          (bn.test(m) || bn.test(h)) && (t[f] += "%"))
        : (t[f] = m);
  }
  (e.rotate || r.rotate) && (t.rotate = We(e.rotate || 0, r.rotate || 0, i));
}
function ov(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const b2 = Lx(0, 0.5, Xw),
  k2 = Lx(0.5, 0.95, Bt);
function Lx(t, e, r) {
  return (i) => (i < t ? 0 : i > e ? 1 : r(ri(t, e, i)));
}
function av(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function Gt(t, e) {
  av(t.x, e.x), av(t.y, e.y);
}
function lv(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function uv(t, e, r, i, a) {
  return (
    (t -= e), (t = Al(t, 1 / r, i)), a !== void 0 && (t = Al(t, 1 / a, i)), t
  );
}
function E2(t, e = 0, r = 1, i = 0.5, a, u = t, c = t) {
  if (
    (bn.test(e) &&
      ((e = parseFloat(e)), (e = We(c.min, c.max, e / 100) - c.min)),
    typeof e != "number")
  )
    return;
  let f = We(u.min, u.max, i);
  t === u && (f -= e),
    (t.min = uv(t.min, e, r, f, a)),
    (t.max = uv(t.max, e, r, f, a));
}
function cv(t, e, [r, i, a], u, c) {
  E2(t, e[r], e[i], e[a], e.scale, u, c);
}
const T2 = ["x", "scaleX", "originX"],
  C2 = ["y", "scaleY", "originY"];
function dv(t, e, r, i) {
  cv(t.x, e, T2, r ? r.x : void 0, i ? i.x : void 0),
    cv(t.y, e, C2, r ? r.y : void 0, i ? i.y : void 0);
}
function fv(t) {
  return t.translate === 0 && t.scale === 1;
}
function Mx(t) {
  return fv(t.x) && fv(t.y);
}
function hv(t, e) {
  return t.min === e.min && t.max === e.max;
}
function P2(t, e) {
  return hv(t.x, e.x) && hv(t.y, e.y);
}
function pv(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function Dx(t, e) {
  return pv(t.x, e.x) && pv(t.y, e.y);
}
function mv(t) {
  return Ut(t.x) / Ut(t.y);
}
function gv(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class _2 {
  constructor() {
    this.members = [];
  }
  add(e) {
    qf(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (Kf(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(e) {
    const r = this.members.findIndex((a) => e === a);
    if (r === 0) return !1;
    let i;
    for (let a = r; a >= 0; a--) {
      const u = this.members[a];
      if (u.isPresent !== !1) {
        i = u;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, r) {
    const i = this.lead;
    if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
      i.instance && i.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = i),
        r && (e.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((e.snapshot = i.snapshot),
          (e.snapshot.latestValues = i.animationValues || i.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: a } = e.options;
      a === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: r, resumingFrom: i } = e;
      r.onExitComplete && r.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function R2(t, e, r) {
  let i = "";
  const a = t.x.translate / e.x,
    u = t.y.translate / e.y,
    c = (r == null ? void 0 : r.z) || 0;
  if (
    ((a || u || c) && (i = `translate3d(${a}px, ${u}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    r)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: y,
      rotateY: w,
      skewX: T,
      skewY: k,
    } = r;
    m && (i = `perspective(${m}px) ${i}`),
      g && (i += `rotate(${g}deg) `),
      y && (i += `rotateX(${y}deg) `),
      w && (i += `rotateY(${w}deg) `),
      T && (i += `skewX(${T}deg) `),
      k && (i += `skewY(${k}deg) `);
  }
  const f = t.x.scale * e.x,
    h = t.y.scale * e.y;
  return (f !== 1 || h !== 1) && (i += `scale(${f}, ${h})`), i || "none";
}
const qr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  uo = typeof window < "u" && window.MotionDebug !== void 0,
  dd = ["", "X", "Y", "Z"],
  A2 = { visibility: "hidden" },
  yv = 1e3;
let N2 = 0;
function fd(t, e, r, i) {
  const { latestValues: a } = e;
  a[t] && ((r[t] = a[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Ix(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const r = Ww(e);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: a, layoutId: u } = t.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Ue, !(a || u));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Ix(i);
}
function Fx({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: r,
  checkIsScrollRoot: i,
  resetTransform: a,
}) {
  return class {
    constructor(c = {}, f = e == null ? void 0 : e()) {
      (this.id = N2++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            uo &&
              (qr.totalNodes =
                qr.resolvedTargetDeltas =
                qr.recalculatedProjection =
                  0),
            this.nodes.forEach(L2),
            this.nodes.forEach(V2),
            this.nodes.forEach(B2),
            this.nodes.forEach(M2),
            uo && window.MotionDebug.record(qr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = f ? f.root || f : this),
        (this.path = f ? [...f.path, f] : []),
        (this.parent = f),
        (this.depth = f ? f.depth + 1 : 0);
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new v2());
    }
    addEventListener(c, f) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new Qf()),
        this.eventHandlers.get(c).add(f)
      );
    }
    notifyListeners(c, ...f) {
      const h = this.eventHandlers.get(c);
      h && h.notify(...f);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c, f = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = g2(c)), (this.instance = c);
      const { layoutId: h, layout: m, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        f && (m || h) && (this.isLayoutDirty = !0),
        t)
      ) {
        let y;
        const w = () => (this.root.updateBlockedByResize = !1);
        t(c, () => {
          (this.root.updateBlockedByResize = !0),
            y && y(),
            (y = w2(w, 250)),
            vl.hasAnimatedSinceResize &&
              ((vl.hasAnimatedSinceResize = !1), this.nodes.forEach(wv));
        });
      }
      h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          g &&
          (h || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: w,
              hasRelativeTargetChanged: T,
              layout: k,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b =
                  this.options.transition || g.getDefaultTransition() || W2,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: R } =
                  g.getProps(),
                F = !this.targetLayout || !Dx(this.targetLayout, k) || T,
                L = !w && T;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                L ||
                (w && (F || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(y, L);
                const M = { ...zf(b, "layout"), onPlay: x, onComplete: R };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((M.delay = 0), (M.type = !1)),
                  this.startAnimation(M);
              } else
                w || wv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = k;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Er(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(U2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ix(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        (y.shouldResetTransform = !0),
          y.updateScroll("snapshot"),
          y.options.layoutRoot && y.willUpdate(!1);
      }
      const { layoutId: f, layout: h } = this.options;
      if (f === void 0 && !h) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vv);
        return;
      }
      this.isUpdating || this.nodes.forEach(I2),
        (this.isUpdating = !1),
        this.nodes.forEach(F2),
        this.nodes.forEach(O2),
        this.nodes.forEach(j2),
        this.clearAllSnapshots();
      const f = kn.now();
      (dt.delta = Un(0, 1e3 / 60, f - dt.timestamp)),
        (dt.timestamp = f),
        (dt.isProcessing = !0),
        nd.update.process(dt),
        nd.preRender.process(dt),
        nd.render.process(dt),
        (dt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Of.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(D2), this.sharedNodes.forEach(z2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ue.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ue.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: f } = this.options;
      f &&
        f.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0
        );
    }
    updateScroll(c = "measure") {
      let f = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (f = !1),
        f)
      ) {
        const h = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: h,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!a) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        f = this.projectionDelta && !Mx(this.projectionDelta),
        h = this.getTransformTemplate(),
        m = h ? h(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      c &&
        (f || Wr(this.latestValues) || g) &&
        (a(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const f = this.measurePageBox();
      let h = this.removeElementScroll(f);
      return (
        c && (h = this.removeTransform(h)),
        q2(h),
        {
          animationId: this.root.animationId,
          measuredBox: f,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: f } = this.options;
      if (!f) return Ye();
      const h = f.measureViewportBox();
      if (
        !(
          ((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) ||
          this.path.some(K2)
        )
      ) {
        const { scroll: g } = this.root;
        g && (Us(h.x, g.offset.x), Us(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(c) {
      var f;
      const h = Ye();
      if (
        (Gt(h, c), !((f = this.scroll) === null || f === void 0) && f.wasRoot)
      )
        return h;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: y, options: w } = g;
        g !== this.root &&
          y &&
          w.layoutScroll &&
          (y.wasRoot && Gt(h, c), Us(h.x, y.offset.x), Us(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(c, f = !1) {
      const h = Ye();
      Gt(h, c);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !f &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          zs(h, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          Wr(g.latestValues) && zs(h, g.latestValues);
      }
      return Wr(this.latestValues) && zs(h, this.latestValues), h;
    }
    removeTransform(c) {
      const f = Ye();
      Gt(f, c);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!m.instance || !Wr(m.latestValues)) continue;
        tf(m.latestValues) && m.updateSnapshot();
        const g = Ye(),
          y = m.measurePageBox();
        Gt(g, y),
          dv(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g);
      }
      return Wr(this.latestValues) && dv(f, this.latestValues), f;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var f;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== h;
      if (
        !(
          c ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((f = this.parent) === null || f === void 0) &&
            f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: w } = this.options;
      if (!(!this.layout || !(y || w))) {
        if (
          ((this.resolvedRelativeTargetAt = dt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const T = this.getClosestProjectingParent();
          T && T.layout && this.animationProgress !== 1
            ? ((this.relativeParent = T),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ye()),
              (this.relativeTargetOrigin = Ye()),
              go(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                T.layout.layoutBox
              ),
              Gt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ye()), (this.targetWithTransforms = Ye())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                JA(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Gt(this.target, this.layout.layoutBox),
                Rx(this.target, this.targetDelta))
              : Gt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const T = this.getClosestProjectingParent();
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = T),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ye()),
                (this.relativeTargetOrigin = Ye()),
                go(this.relativeTargetOrigin, this.target, T.target),
                Gt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          uo && qr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          tf(this.parent.latestValues) ||
          _x(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var c;
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty ||
          (!((c = this.parent) === null || c === void 0) &&
            c.isProjectionDirty)) &&
          (m = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === dt.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      Gt(this.layoutCorrected, this.layout.layoutBox);
      const w = this.treeScale.x,
        T = this.treeScale.y;
      i2(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Ye()));
      const { target: k } = f;
      if (!k) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (lv(this.prevProjectionDelta.x, this.projectionDelta.x),
          lv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        mo(this.projectionDelta, this.layoutCorrected, k, this.latestValues),
        (this.treeScale.x !== w ||
          this.treeScale.y !== T ||
          !gv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !gv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", k)),
        uo && qr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var f;
      if (
        ((f = this.options.visualElement) === null ||
          f === void 0 ||
          f.scheduleRender(),
        c)
      ) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Bs()),
        (this.projectionDelta = Bs()),
        (this.projectionDeltaWithTransform = Bs());
    }
    setAnimationOrigin(c, f = !1) {
      const h = this.snapshot,
        m = h ? h.latestValues : {},
        g = { ...this.latestValues },
        y = Bs();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !f);
      const w = Ye(),
        T = h ? h.source : void 0,
        k = this.layout ? this.layout.source : void 0,
        b = T !== k,
        x = this.getStack(),
        R = !x || x.members.length <= 1,
        F = !!(b && !R && this.options.crossfade === !0 && !this.path.some(H2));
      this.animationProgress = 0;
      let L;
      (this.mixTargetDelta = (M) => {
        const U = M / 1e3;
        xv(y.x, c.x, U),
          xv(y.y, c.y, U),
          this.setTargetDelta(y),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (go(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            $2(this.relativeTarget, this.relativeTargetOrigin, w, U),
            L && P2(this.relativeTarget, L) && (this.isProjectionDirty = !1),
            L || (L = Ye()),
            Gt(L, this.relativeTarget)),
          b &&
            ((this.animationValues = g), S2(g, m, this.latestValues, U, F, R)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = U);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Er(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ue.update(() => {
          (vl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = m2(0, yv, {
              ...c,
              onUpdate: (f) => {
                this.mixTargetDelta(f), c.onUpdate && c.onUpdate(f);
              },
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(yv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: f,
        target: h,
        layout: m,
        latestValues: g,
      } = c;
      if (!(!f || !h || !m)) {
        if (
          this !== c &&
          this.layout &&
          m &&
          Vx(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          h = this.target || Ye();
          const y = Ut(this.layout.layoutBox.x);
          (h.x.min = c.target.x.min), (h.x.max = h.x.min + y);
          const w = Ut(this.layout.layoutBox.y);
          (h.y.min = c.target.y.min), (h.y.max = h.y.min + w);
        }
        Gt(f, h),
          zs(f, g),
          mo(this.projectionDeltaWithTransform, this.layoutCorrected, f, g);
      }
    }
    registerSharedNode(c, f) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new _2()),
        this.sharedNodes.get(c).add(f);
      const m = f.options.initialPromotionConfig;
      f.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(f)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: f } = this.options;
      return f
        ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: f } = this.options;
      return f
        ? (c = this.getStack()) === null || c === void 0
          ? void 0
          : c.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: f, preserveFollowOpacity: h } = {}) {
      const m = this.getStack();
      m && m.promote(this, h),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        f && this.setOptions({ transition: f });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let f = !1;
      const { latestValues: h } = c;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (f = !0),
        !f)
      )
        return;
      const m = {};
      h.z && fd("z", c, m, this.animationValues);
      for (let g = 0; g < dd.length; g++)
        fd(`rotate${dd[g]}`, c, m, this.animationValues),
          fd(`skew${dd[g]}`, c, m, this.animationValues);
      c.render();
      for (const g in m)
        c.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]);
      c.scheduleRender();
    }
    getProjectionStyles(c) {
      var f, h;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return A2;
      const m = { visibility: "" },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = gl(c == null ? void 0 : c.pointerEvents) || ""),
          (m.transform = g ? g(this.latestValues, "") : "none"),
          m
        );
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const b = {};
        return (
          this.options.layoutId &&
            ((b.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (b.pointerEvents = gl(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !Wr(this.latestValues) &&
            ((b.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)),
          b
        );
      }
      const w = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = R2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          w
        )),
        g && (m.transform = g(w, m.transform));
      const { x: T, y: k } = this.projectionDelta;
      (m.transformOrigin = `${T.origin * 100}% ${k.origin * 100}% 0`),
        y.animationValues
          ? (m.opacity =
              y === this
                ? (h =
                    (f = w.opacity) !== null && f !== void 0
                      ? f
                      : this.latestValues.opacity) !== null && h !== void 0
                  ? h
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : w.opacityExit)
          : (m.opacity =
              y === this
                ? w.opacity !== void 0
                  ? w.opacity
                  : ""
                : w.opacityExit !== void 0
                ? w.opacityExit
                : 0);
      for (const b in Tl) {
        if (w[b] === void 0) continue;
        const { correct: x, applyTo: R } = Tl[b],
          F = m.transform === "none" ? w[b] : x(w[b], y);
        if (R) {
          const L = R.length;
          for (let M = 0; M < L; M++) m[R[M]] = F;
        } else m[b] = F;
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            y === this
              ? gl(c == null ? void 0 : c.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var f;
        return (f = c.currentAnimation) === null || f === void 0
          ? void 0
          : f.stop();
      }),
        this.root.nodes.forEach(vv),
        this.root.sharedNodes.clear();
    }
  };
}
function O2(t) {
  t.updateLayout();
}
function j2(t) {
  var e;
  const r =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: a } = t.layout,
      { animationType: u } = t.options,
      c = r.source !== t.layout.source;
    u === "size"
      ? Jt((y) => {
          const w = c ? r.measuredBox[y] : r.layoutBox[y],
            T = Ut(w);
          (w.min = i[y].min), (w.max = w.min + T);
        })
      : Vx(u, r.layoutBox, i) &&
        Jt((y) => {
          const w = c ? r.measuredBox[y] : r.layoutBox[y],
            T = Ut(i[y]);
          (w.max = w.min + T),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[y].max = t.relativeTarget[y].min + T));
        });
    const f = Bs();
    mo(f, i, r.layoutBox);
    const h = Bs();
    c ? mo(h, t.applyTransform(a, !0), r.measuredBox) : mo(h, i, r.layoutBox);
    const m = !Mx(f);
    let g = !1;
    if (!t.resumeFrom) {
      const y = t.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: w, layout: T } = y;
        if (w && T) {
          const k = Ye();
          go(k, r.layoutBox, w.layoutBox);
          const b = Ye();
          go(b, i, T.layoutBox),
            Dx(k, b) || (g = !0),
            y.options.layoutRoot &&
              ((t.relativeTarget = b),
              (t.relativeTargetOrigin = k),
              (t.relativeParent = y));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: r,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeTargetChanged: g,
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function L2(t) {
  uo && qr.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function M2(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function D2(t) {
  t.clearSnapshot();
}
function vv(t) {
  t.clearMeasurements();
}
function I2(t) {
  t.isLayoutDirty = !1;
}
function F2(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function wv(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function V2(t) {
  t.resolveTargetDelta();
}
function B2(t) {
  t.calcProjection();
}
function U2(t) {
  t.resetSkewAndRotation();
}
function z2(t) {
  t.removeLeadSnapshot();
}
function xv(t, e, r) {
  (t.translate = We(e.translate, 0, r)),
    (t.scale = We(e.scale, 1, r)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Sv(t, e, r, i) {
  (t.min = We(e.min, r.min, i)), (t.max = We(e.max, r.max, i));
}
function $2(t, e, r, i) {
  Sv(t.x, e.x, r.x, i), Sv(t.y, e.y, r.y, i);
}
function H2(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const W2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bv = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  kv = bv("applewebkit/") && !bv("chrome/") ? Math.round : Bt;
function Ev(t) {
  (t.min = kv(t.min)), (t.max = kv(t.max));
}
function q2(t) {
  Ev(t.x), Ev(t.y);
}
function Vx(t, e, r) {
  return (
    t === "position" || (t === "preserve-aspect" && !GA(mv(e), mv(r), 0.2))
  );
}
function K2(t) {
  var e;
  return (
    t !== t.root &&
    ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
  );
}
const Q2 = Fx({
    attachResizeListener: (t, e) => Eo(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  hd = { current: void 0 },
  Bx = Fx({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!hd.current) {
        const t = new Q2({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (hd.current = t);
      }
      return hd.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  G2 = {
    pan: { Feature: d2 },
    drag: { Feature: c2, ProjectionNode: Bx, MeasureLayout: Ox },
  };
function Tv(t, e, r) {
  const { props: i } = t;
  t.animationState &&
    i.whileHover &&
    t.animationState.setActive("whileHover", r === "Start");
  const a = "onHover" + r,
    u = i[a];
  u && Ue.postRender(() => u(e, Uo(e)));
}
class J2 extends Pr {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = G_(
        e,
        (r) => (Tv(this.node, r, "Start"), (i) => Tv(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class Y2 extends Pr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Bo(
      Eo(this.node.current, "focus", () => this.onFocus()),
      Eo(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Cv(t, e, r) {
  const { props: i } = t;
  t.animationState &&
    i.whileTap &&
    t.animationState.setActive("whileTap", r === "Start");
  const a = "onTap" + (r === "End" ? "" : r),
    u = i[a];
  u && Ue.postRender(() => u(e, Uo(e)));
}
class X2 extends Pr {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = Z_(
        e,
        (r) => (
          Cv(this.node, r, "Start"),
          (i, { success: a }) => Cv(this.node, i, a ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const rf = new WeakMap(),
  pd = new WeakMap(),
  Z2 = (t) => {
    const e = rf.get(t.target);
    e && e(t);
  },
  eN = (t) => {
    t.forEach(Z2);
  };
function tN({ root: t, ...e }) {
  const r = t || document;
  pd.has(r) || pd.set(r, {});
  const i = pd.get(r),
    a = JSON.stringify(e);
  return i[a] || (i[a] = new IntersectionObserver(eN, { root: t, ...e })), i[a];
}
function nN(t, e, r) {
  const i = tN(e);
  return (
    rf.set(t, r),
    i.observe(t),
    () => {
      rf.delete(t), i.unobserve(t);
    }
  );
}
const rN = { some: 0, all: 1 };
class sN extends Pr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: r, margin: i, amount: a = "some", once: u } = e,
      c = {
        root: r ? r.current : void 0,
        rootMargin: i,
        threshold: typeof a == "number" ? a : rN[a],
      },
      f = (h) => {
        const { isIntersecting: m } = h;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(),
          w = m ? g : y;
        w && w(h);
      };
    return nN(this.node.current, c, f);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(iN(e, r)) && this.startObserver();
  }
  unmount() {}
}
function iN({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (r) => t[r] !== e[r];
}
const oN = {
    inView: { Feature: sN },
    tap: { Feature: X2 },
    focus: { Feature: Y2 },
    hover: { Feature: J2 },
  },
  aN = { layout: { ProjectionNode: Bx, MeasureLayout: Ox } },
  sf = { current: null },
  Ux = { current: !1 };
function lN() {
  if (((Ux.current = !0), !!Pf))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (sf.current = t.matches);
      t.addListener(e), e();
    } else sf.current = !1;
}
const uN = [...fx, wt, Tr],
  cN = (t) => uN.find(dx(t)),
  Pv = new WeakMap();
function dN(t, e, r) {
  for (const i in e) {
    const a = e[i],
      u = r[i];
    if (St(a)) t.addValue(i, a);
    else if (St(u)) t.addValue(i, bo(a, { owner: t }));
    else if (u !== a)
      if (t.hasValue(i)) {
        const c = t.getValue(i);
        c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
      } else {
        const c = t.getStaticValue(i);
        t.addValue(i, bo(c !== void 0 ? c : a, { owner: t }));
      }
  }
  for (const i in r) e[i] === void 0 && t.removeValue(i);
  return e;
}
const _v = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class fN {
  scrapeMotionValuesFromProps(e, r, i) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: r,
      presenceContext: i,
      reducedMotionConfig: a,
      blockInitialAnimation: u,
      visualState: c,
    },
    f = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = eh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = kn.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), Ue.render(this.render, !1, !0));
      });
    const { latestValues: h, renderState: m, onUpdate: g } = c;
    (this.onUpdate = g),
      (this.latestValues = h),
      (this.baseTarget = { ...h }),
      (this.initialValues = r.initial ? { ...h } : {}),
      (this.renderState = m),
      (this.parent = e),
      (this.props = r),
      (this.presenceContext = i),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = a),
      (this.options = f),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = $l(r)),
      (this.isVariantNode = xw(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: y, ...w } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const T in w) {
      const k = w[T];
      h[T] !== void 0 && St(k) && k.set(h[T], !1);
    }
  }
  mount(e) {
    (this.current = e),
      Pv.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      Ux.current || lN(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : sf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Pv.delete(this.current),
      this.projection && this.projection.unmount(),
      Er(this.notifyUpdate),
      Er(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const r = this.features[e];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(e, r) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = ds.has(e),
      a = r.on("change", (f) => {
        (this.latestValues[e] = f),
          this.props.onUpdate && Ue.preRender(this.notifyUpdate),
          i && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = r.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, e, r)),
      this.valueSubscriptions.set(e, () => {
        a(), u(), c && c(), r.owner && r.stop();
      });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in si) {
      const r = si[e];
      if (!r) continue;
      const { isEnabled: i, Feature: a } = r;
      if (
        (!this.features[e] &&
          a &&
          i(this.props) &&
          (this.features[e] = new a(this)),
        this.features[e])
      ) {
        const u = this.features[e];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ye();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, r) {
    this.latestValues[e] = r;
  }
  update(e, r) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let i = 0; i < _v.length; i++) {
      const a = _v[i];
      this.propEventSubscriptions[a] &&
        (this.propEventSubscriptions[a](),
        delete this.propEventSubscriptions[a]);
      const u = "on" + a,
        c = e[u];
      c && (this.propEventSubscriptions[a] = this.on(a, c));
    }
    (this.prevMotionValues = dN(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(e) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(e),
        () => r.variantChildren.delete(e)
      );
  }
  addValue(e, r) {
    const i = this.values.get(e);
    r !== i &&
      (i && this.removeValue(e),
      this.bindToMotionValue(e, r),
      this.values.set(e, r),
      (this.latestValues[e] = r.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const r = this.valueSubscriptions.get(e);
    r && (r(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, r) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let i = this.values.get(e);
    return (
      i === void 0 &&
        r !== void 0 &&
        ((i = bo(r === null ? void 0 : r, { owner: this })),
        this.addValue(e, i)),
      i
    );
  }
  readValue(e, r) {
    var i;
    let a =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (i = this.getBaseTargetFromProps(this.props, e)) !== null &&
          i !== void 0
        ? i
        : this.readValueFromInstance(this.current, e, this.options);
    return (
      a != null &&
        (typeof a == "string" && (ux(a) || ex(a))
          ? (a = parseFloat(a))
          : !cN(a) && Tr.test(r) && (a = ox(e, r)),
        this.setBaseTarget(e, St(a) ? a.get() : a)),
      St(a) ? a.get() : a
    );
  }
  setBaseTarget(e, r) {
    this.baseTarget[e] = r;
  }
  getBaseTarget(e) {
    var r;
    const { initial: i } = this.props;
    let a;
    if (typeof i == "string" || typeof i == "object") {
      const c = Lf(
        this.props,
        i,
        (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom
      );
      c && (a = c[e]);
    }
    if (i && a !== void 0) return a;
    const u = this.getBaseTargetFromProps(this.props, e);
    return u !== void 0 && !St(u)
      ? u
      : this.initialValues[e] !== void 0 && a === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, r) {
    return this.events[e] || (this.events[e] = new Qf()), this.events[e].add(r);
  }
  notify(e, ...r) {
    this.events[e] && this.events[e].notify(...r);
  }
}
class zx extends fN {
  constructor() {
    super(...arguments), (this.KeyframeResolver = hx);
  }
  sortInstanceNodePosition(e, r) {
    return e.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, r) {
    return e.style ? e.style[r] : void 0;
  }
  removeValueFromRenderState(e, { vars: r, style: i }) {
    delete r[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    St(e) &&
      (this.childSubscription = e.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
function hN(t) {
  return window.getComputedStyle(t);
}
class pN extends zx {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Rw);
  }
  readValueFromInstance(e, r) {
    if (ds.has(r)) {
      const i = Zf(r);
      return (i && i.default) || 0;
    } else {
      const i = hN(e),
        a = (Cw(r) ? i.getPropertyValue(r) : i[r]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: r }) {
    return Ax(e, r);
  }
  build(e, r, i) {
    If(e, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, r, i) {
    return Uf(e, r, i);
  }
}
class mN extends zx {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ye);
  }
  getBaseTargetFromProps(e, r) {
    return e[r];
  }
  readValueFromInstance(e, r) {
    if (ds.has(r)) {
      const i = Zf(r);
      return (i && i.default) || 0;
    }
    return (r = Aw.has(r) ? r : Nf(r)), e.getAttribute(r);
  }
  scrapeMotionValuesFromProps(e, r, i) {
    return jw(e, r, i);
  }
  build(e, r, i) {
    Ff(e, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, r, i, a) {
    Nw(e, r, i, a);
  }
  mount(e) {
    (this.isSVGTag = Bf(e.tagName)), super.mount(e);
  }
}
const gN = (t, e) =>
    jf(t) ? new mN(e) : new pN(e, { allowProjection: t !== B.Fragment }),
  yN = z_({ ...BA, ...oN, ...G2, ...aN }, gN),
  Se = r_(yN);
function _r({ className: t = "", color: e = "#ff8d02", width: r = 200 }) {
  return S.jsx("svg", {
    className: t,
    width: r,
    height: "12",
    viewBox: `0 0 ${r} 12`,
    fill: "none",
    children: S.jsx(Se.path, {
      d: `M0 6 Q ${r * 0.1} 0, ${r * 0.2} 6 T ${r * 0.4} 6 T ${r * 0.6} 6 T ${
        r * 0.8
      } 6 T ${r} 6`,
      stroke: e,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      fill: "none",
      initial: { pathLength: 0 },
      whileInView: { pathLength: 1 },
      transition: { duration: 1.2, ease: "easeOut" },
      viewport: { once: !0 },
    }),
  });
}
function as({ className: t = "", size: e = 40, color: r = "#ff8d02" }) {
  return S.jsx(Se.svg, {
    className: t,
    width: e,
    height: e,
    viewBox: "0 0 40 40",
    fill: "none",
    animate: { rotate: [0, 10, -10, 0] },
    transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
    children: S.jsx("path", {
      d: "M20 2 L24 15 L38 15 L27 23 L31 37 L20 29 L9 37 L13 23 L2 15 L16 15 Z",
      stroke: r,
      strokeWidth: "2",
      fill: "none",
      strokeLinejoin: "round",
    }),
  });
}
function of({ className: t = "", size: e = 60, color: r = "#ff8d02" }) {
  return S.jsx(Se.svg, {
    className: t,
    width: e,
    height: e,
    viewBox: "0 0 60 60",
    fill: "none",
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
    children: S.jsx("path", {
      d: "M30 5 C45 3, 58 15, 56 30 C54 45, 42 57, 28 55 C14 53, 3 42, 5 28 C7 14, 18 4, 30 5Z",
      stroke: r,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round",
    }),
  });
}
function vN({
  className: t = "",
  color: e = "#ff8d02",
  direction: r = "down",
}) {
  const i = r === "down" ? 0 : r === "right" ? -90 : r === "left" ? 90 : 180;
  return S.jsxs(Se.svg, {
    className: t,
    width: "30",
    height: "50",
    viewBox: "0 0 30 50",
    fill: "none",
    style: { transform: `rotate(${i}deg)` },
    animate: { y: [0, 8, 0] },
    transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
    children: [
      S.jsx("path", {
        d: "M15 2 L15 42",
        stroke: e,
        strokeWidth: "2.5",
        strokeLinecap: "round",
      }),
      S.jsx("path", {
        d: "M5 33 L15 45 L25 33",
        stroke: e,
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
      }),
    ],
  });
}
function wN({ className: t = "", color: e = "#ff8d02" }) {
  return S.jsx("svg", {
    className: t,
    width: "120",
    height: "20",
    viewBox: "0 0 120 20",
    fill: "none",
    children: S.jsx("path", {
      d: "M0 10 L15 2 L30 18 L45 2 L60 18 L75 2 L90 18 L105 2 L120 10",
      stroke: e,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
    }),
  });
}
function xN({ className: t = "", size: e = 50, color: r = "#ff8d02" }) {
  return S.jsx(Se.svg, {
    className: t,
    width: e,
    height: e,
    viewBox: "0 0 50 50",
    fill: "none",
    animate: { rotate: 360 },
    transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
    children: S.jsx("path", {
      d: "M25 25 C25 22, 28 20, 30 22 C32 24, 30 28, 27 28 C23 28, 20 24, 22 20 C24 16, 30 14, 34 18 C38 22, 36 30, 30 32 C24 34, 16 30, 16 24",
      stroke: r,
      strokeWidth: "2",
      strokeLinecap: "round",
      fill: "none",
    }),
  });
}
const SN =
  "/media.base44.com/images/public/user_69a2d7ff5ed8bd83fe10039e/46baf4dd9_ChatGPTImageApr10202603_47_02PM.png";
function bN() {
  return S.jsxs("section", {
    className:
      "relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20",
    children: [
      S.jsx(as, {
        className: "absolute top-20 left-[10%] opacity-40",
        size: 35,
      }),
      S.jsx(as, {
        className: "absolute top-32 right-[15%] opacity-30",
        size: 25,
      }),
      S.jsx(of, {
        className: "absolute bottom-32 left-[8%] opacity-25",
        size: 70,
      }),
      S.jsx(xN, {
        className: "absolute top-40 right-[8%] opacity-30",
        size: 55,
      }),
      S.jsx(as, {
        className: "absolute bottom-20 right-[20%] opacity-35",
        size: 30,
      }),
      S.jsx(of, {
        className: "absolute top-16 left-[40%] opacity-20",
        size: 45,
      }),
      [...Array(12)].map((t, e) =>
        S.jsx(
          Se.div,
          {
            className:
              "absolute w-1.5 h-1.5 rounded-full bg-mojo-orange opacity-20",
            style: {
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            },
            animate: { opacity: [0.1, 0.3, 0.1] },
            transition: {
              duration: 3 + Math.random() * 2,
              repeat: 1 / 0,
              delay: Math.random() * 2,
            },
          },
          e
        )
      ),
      S.jsxs("div", {
        className: "relative z-10 text-center max-w-4xl mx-auto",
        children: [
          S.jsx(Se.div, {
            initial: { scale: 0.5, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.8, type: "spring", bounce: 0.4 },
            className: "mb-6",
            children: S.jsx("img", {
              src: SN,
              alt: "Mojo character - orange hand-drawn creature",
              className:
                "w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-lg",
            }),
          }),
          S.jsxs(Se.h1, {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.7, delay: 0.2 },
            className:
              "font-heading text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-mojo-dark leading-none tracking-tight",
            children: [
              "M",
              S.jsx("span", { className: "text-mojo-orange", children: "O" }),
              "J",
              S.jsx("span", { className: "text-mojo-orange", children: "O" }),
            ],
          }),
          S.jsx(Se.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.8 },
            className: "flex justify-center my-4",
            children: S.jsx(_r, { width: 280 }),
          }),
          S.jsx(Se.p, {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.6, delay: 0.5 },
            className:
              "font-heading text-3xl md:text-4xl text-mojo-dark/80 mb-4",
            children: "The Origin of Creativity",
          }),
          S.jsx(Se.p, {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.6, delay: 0.7 },
            className:
              "font-body text-lg md:text-xl text-mojo-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed",
            children:
              "Mojo is the first documented drawing by Matt Furie — the spark that started it all. A raw, unfiltered burst of creative energy.",
          }),
          S.jsxs(Se.div, {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.6, delay: 0.9 },
            className:
              "flex flex-col sm:flex-row gap-4 justify-center items-center",
            children: [
              S.jsx(Se.a, {
                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: { scale: 1.05, rotate: -1 },
                whileTap: { scale: 0.95 },
                className:
                  "px-8 py-4 bg-mojo-orange text-white font-heading text-2xl rounded-2xl shadow-lg shadow-mojo-orange/30 hover:shadow-xl hover:shadow-mojo-orange/40 transition-shadow border-2 border-mojo-dark/10",
                children: "Buy",
              }),
              S.jsx(Se.a, {
                href: "https://t.me/mattfurie_mojo",
                whileHover: { scale: 1.05, rotate: 1 },
                whileTap: { scale: 0.95 },
                className:
                  "px-8 py-4 bg-white text-mojo-dark font-heading text-2xl rounded-2xl shadow-md border-2 border-mojo-dark/15 hover:border-mojo-orange/50 transition-colors",
                children: "Join the Movement ✏️",
              }),
            ],
          }),
        ],
      }),
      S.jsx(Se.div, {
        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
        animate: { y: [0, 10, 0] },
        transition: { duration: 2, repeat: 1 / 0 },
        children: S.jsxs("svg", {
          width: "24",
          height: "40",
          viewBox: "0 0 24 40",
          fill: "none",
          className: "opacity-40",
          children: [
            S.jsx("path", {
              d: "M12 2 L12 32",
              stroke: "#2d1f0e",
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
            S.jsx("path", {
              d: "M5 25 L12 35 L19 25",
              stroke: "#2d1f0e",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
      }),
    ],
  });
}
function kN() {
  return S.jsx("section", {
    className: "relative py-16 px-4 md:px-8",
    children: S.jsxs("div", {
      className: "max-w-3xl mx-auto",
      children: [
        S.jsxs(Se.div, {
          initial: { y: 30, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.7 },
          className: "text-center mb-10",
          children: [
            S.jsxs("h2", {
              className:
                "font-heading text-5xl md:text-6xl font-bold text-mojo-dark mb-3",
              children: [
                "Mojo in ",
                S.jsx("span", {
                  className: "text-mojo-orange",
                  children: "Motion",
                }),
                " 🎬",
              ],
            }),
            S.jsx("div", {
              className: "flex justify-center",
              children: S.jsx(_r, { width: 160 }),
            }),
          ],
        }),
        S.jsxs(Se.div, {
          initial: { y: 40, opacity: 0, scale: 0.97 },
          whileInView: { y: 0, opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.7, delay: 0.1 },
          className:
            "relative bg-white rounded-3xl p-3 shadow-xl border-2 border-dashed border-mojo-orange/30",
          style: { transform: "rotate(-0.5deg)" },
          children: [
            S.jsx("div", {
              className:
                "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200/70 rounded-sm",
              style: { transform: "rotate(1deg)" },
            }),
            S.jsx("iframe", {
              src: "https://imgur.com/a/OjkiYVk/embed?pub=true&rel=noskin&captions=false&loop=1",
              allowFullScreen: !0,
              frameBorder: "0",
              className: "w-full rounded-2xl",
              style: { minHeight: "400px" },
              title: "Mojo video",
            }),
          ],
        }),
      ],
    }),
  });
}
const EN =
    "/media.base44.com/images/public/user_69a2d7ff5ed8bd83fe10039e/7c8da3e30_Untitleddesign-2026-04-10T154851225.png",
  to = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: !0, margin: "-80px" },
    transition: { duration: 0.7 },
  };
function TN() {
  return S.jsxs("section", {
    id: "about",
    className: "relative py-24 px-4 md:px-8 overflow-hidden",
    children: [
      S.jsx(as, {
        className: "absolute top-12 right-[10%] opacity-20",
        size: 30,
      }),
      S.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [
          S.jsxs(Se.div, {
            ...to,
            className: "text-center mb-16",
            children: [
              S.jsxs("h2", {
                className:
                  "font-heading text-5xl md:text-7xl font-bold text-mojo-dark mb-3",
                children: [
                  "What is ",
                  S.jsx("span", {
                    className: "text-mojo-orange",
                    children: "Mojo",
                  }),
                  "?",
                ],
              }),
              S.jsx("div", {
                className: "flex justify-center",
                children: S.jsx(_r, { width: 180 }),
              }),
            ],
          }),
          S.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 md:gap-20 items-center",
            children: [
              S.jsxs(Se.div, {
                initial: { x: -50, opacity: 0, rotate: -3 },
                whileInView: { x: 0, opacity: 1, rotate: -2 },
                viewport: { once: !0, margin: "-80px" },
                transition: { duration: 0.8 },
                className: "relative",
                children: [
                  S.jsxs("div", {
                    className:
                      "relative bg-white rounded-3xl p-4 shadow-xl border-2 border-dashed border-mojo-orange/30",
                    style: { transform: "rotate(-2deg)" },
                    children: [
                      S.jsx("img", {
                        src: EN,
                        alt: "Original Mojo sketch",
                        className: "w-full rounded-2xl",
                      }),
                      S.jsx("div", {
                        className:
                          "absolute -bottom-3 -right-3 bg-mojo-orange text-white font-heading text-sm px-3 py-1 rounded-full rotate-3",
                        children: "The Original ✨",
                      }),
                    ],
                  }),
                  S.jsx("div", {
                    className:
                      "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200/70 rounded-sm",
                    style: { transform: "rotate(2deg)" },
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "space-y-6",
                children: [
                  S.jsx(Se.div, {
                    ...to,
                    transition: { duration: 0.7, delay: 0.1 },
                    children: S.jsxs("p", {
                      className:
                        "font-body text-lg md:text-xl text-mojo-dark/70 leading-relaxed",
                      children: [
                        "Before the memes, before the movement — there was a single sketch. A hand-drawn character born from pure imagination and a crayon.",
                        S.jsx("span", {
                          className: "text-mojo-orange font-semibold",
                          children: " That character is Mojo.",
                        }),
                      ],
                    }),
                  }),
                  S.jsx(Se.div, {
                    ...to,
                    transition: { duration: 0.7, delay: 0.2 },
                    children: S.jsx("p", {
                      className:
                        "font-body text-lg md:text-xl text-mojo-dark/70 leading-relaxed",
                      children:
                        "Mojo represents the raw, unfiltered beginning of creativity — the very first spark that would go on to inspire an entire generation of internet culture and digital art.",
                    }),
                  }),
                  S.jsx(Se.div, {
                    ...to,
                    transition: { duration: 0.7, delay: 0.3 },
                    children: S.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-mojo-orange/20 space-y-3",
                      children: [
                        S.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            S.jsx("span", {
                              className: "text-2xl",
                              children: "_",
                            }),
                            S.jsx("span", {
                              className: "font-heading text-xl text-mojo-dark",
                              children: "Authentically hand-drawn",
                            }),
                          ],
                        }),
                        S.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            S.jsx("span", {
                              className: "text-2xl",
                              children: "⚡",
                            }),
                            S.jsx("span", {
                              className: "font-heading text-xl text-mojo-dark",
                              children: "The origin of a creative revolution",
                            }),
                          ],
                        }),
                        S.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            S.jsx("span", {
                              className: "text-2xl",
                              children: "💫",
                            }),
                            S.jsx("span", {
                              className: "font-heading text-xl text-mojo-dark",
                              children: "Raw, playful, and full of potential",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  S.jsx(Se.div, {
                    ...to,
                    transition: { duration: 0.7, delay: 0.4 },
                    children: S.jsx(wN, { className: "opacity-40" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const CN = [
  {
    emoji: "✏️",
    title: "The First Sketch",
    year: "Day One",
    description:
      "A simple crayon meets paper. Mojo is born from pure, unfiltered imagination — no rules, no expectations. Just creativity in its rawest form.",
    color: "bg-orange-50",
    borderColor: "border-mojo-orange/30",
  },
  {
    emoji: "🌱",
    title: "Creative Exploration",
    year: "The Journey",
    description:
      "From one sketch came many. Characters evolved, stories took shape, and a unique artistic universe began to form around this original spark.",
    color: "bg-amber-50",
    borderColor: "border-amber-400/30",
  },
  {
    emoji: "🌍",
    title: "Cultural Impact",
    year: "The Movement",
    description:
      "What started as a doodle became a cultural phenomenon. Mojo's DNA lives in every character that followed — a testament to the power of a single creative moment.",
    color: "bg-yellow-50",
    borderColor: "border-yellow-400/30",
  },
  {
    emoji: "🚀",
    title: "The Revival",
    year: "Now",
    description:
      "Mojo returns — not just as art, but as a movement. A community token that celebrates creativity, authenticity, and the beautiful chaos of artistic beginnings.",
    color: "bg-orange-50",
    borderColor: "border-mojo-orange/40",
  },
];
function PN() {
  return S.jsx("section", {
    id: "story",
    className: "relative py-24 px-4 md:px-8 bg-white/50",
    children: S.jsxs("div", {
      className: "max-w-5xl mx-auto",
      children: [
        S.jsxs(Se.div, {
          initial: { y: 30, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.7 },
          className: "text-center mb-20",
          children: [
            S.jsxs("h2", {
              className:
                "font-heading text-5xl md:text-7xl font-bold text-mojo-dark mb-3",
              children: [
                "The ",
                S.jsx("span", {
                  className: "text-mojo-orange",
                  children: "Story",
                }),
              ],
            }),
            S.jsx("div", {
              className: "flex justify-center mb-4",
              children: S.jsx(_r, { width: 150 }),
            }),
            S.jsx("p", {
              className: "font-body text-lg text-mojo-dark/50 max-w-xl mx-auto",
              children:
                "Every great movement starts with a single moment of inspiration",
            }),
          ],
        }),
        S.jsxs("div", {
          className: "relative",
          children: [
            S.jsx("div", {
              className:
                "absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-mojo-orange/20 -translate-x-1/2 hidden md:block",
            }),
            S.jsx("div", {
              className:
                "absolute left-6 top-0 bottom-0 w-0.5 bg-mojo-orange/20 md:hidden",
            }),
            S.jsx("div", {
              className: "space-y-12 md:space-y-16",
              children: CN.map((t, e) =>
                S.jsxs(
                  Se.div,
                  {
                    initial: { y: 40, opacity: 0, x: e % 2 === 0 ? -20 : 20 },
                    whileInView: { y: 0, opacity: 1, x: 0 },
                    viewport: { once: !0, margin: "-60px" },
                    transition: { duration: 0.7, delay: e * 0.1 },
                    className: `relative flex items-start gap-6 md:gap-0 ${
                      e % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`,
                    children: [
                      S.jsx("div", {
                        className:
                          "absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-mojo-orange border-4 border-mojo-cream z-10 mt-8",
                      }),
                      S.jsx("div", { className: "w-12 shrink-0 md:hidden" }),
                      S.jsx("div", {
                        className: `flex-1 md:w-[45%] ${
                          e % 2 === 0 ? "md:pr-16" : "md:pl-16"
                        }`,
                        children: S.jsxs(Se.div, {
                          whileHover: {
                            scale: 1.02,
                            rotate: e % 2 === 0 ? -0.5 : 0.5,
                          },
                          className: `${t.color} rounded-2xl p-6 md:p-8 border-2 border-dashed ${t.borderColor} shadow-sm`,
                          children: [
                            S.jsxs("div", {
                              className: "flex items-center gap-3 mb-3",
                              children: [
                                S.jsx("span", {
                                  className: "text-3xl",
                                  children: t.emoji,
                                }),
                                S.jsx("span", {
                                  className:
                                    "font-heading text-sm text-mojo-orange uppercase tracking-wider",
                                  children: t.year,
                                }),
                              ],
                            }),
                            S.jsx("h3", {
                              className:
                                "font-heading text-2xl md:text-3xl font-bold text-mojo-dark mb-2",
                              children: t.title,
                            }),
                            S.jsx("p", {
                              className:
                                "font-body text-mojo-dark/60 leading-relaxed",
                              children: t.description,
                            }),
                          ],
                        }),
                      }),
                      S.jsx("div", {
                        className: "hidden md:block flex-1 md:w-[45%]",
                      }),
                    ],
                  },
                  e
                )
              ),
            }),
            S.jsx("div", {
              className: "flex justify-center mt-12",
              children: S.jsx(vN, {}),
            }),
          ],
        }),
      ],
    }),
  });
}
const _N = [
  { icon: cb, title: "Fair Launch", desc: "" },
  {
    icon: lb,
    title: "Community Token",
    desc: "By the people, for the people who believe in raw creativity.",
  },
  {
    icon: fb,
    title: "Transparent",
    desc: "Open, honest, and built on the foundation of authentic art.",
  },
  {
    icon: gb,
    title: "Full Send",
    desc: "No roadmap needed — just vibes, art, and unstoppable energy.",
  },
];
function RN() {
  return S.jsxs("section", {
    id: "token",
    className: "relative py-24 px-4 md:px-8 overflow-hidden",
    children: [
      S.jsx(as, {
        className: "absolute top-20 left-[5%] opacity-20",
        size: 35,
      }),
      S.jsx(of, {
        className: "absolute bottom-20 right-[8%] opacity-15",
        size: 60,
      }),
      S.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [
          S.jsxs(Se.div, {
            initial: { y: 30, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.7 },
            className: "text-center mb-16",
            children: [
              S.jsxs("h2", {
                className:
                  "font-heading text-5xl md:text-7xl font-bold text-mojo-dark mb-3",
                children: [
                  "The ",
                  S.jsx("span", {
                    className: "text-mojo-orange",
                    children: "Token",
                  }),
                  " 🪙",
                ],
              }),
              S.jsx("div", {
                className: "flex justify-center mb-4",
                children: S.jsx(_r, { width: 160 }),
              }),
              S.jsx("p", {
                className:
                  "font-body text-lg text-mojo-dark/50 max-w-2xl mx-auto",
                children:
                  "Mojo is more than art — it's becoming a movement powered by the community",
              }),
            ],
          }),
          S.jsxs(Se.div, {
            initial: { y: 40, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.7 },
            className:
              "relative bg-gradient-to-br from-mojo-orange/5 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-dashed border-mojo-orange/30 mb-12",
            children: [
              S.jsxs("div", {
                className: "text-center mb-10",
                children: [
                  S.jsx(Se.div, {
                    animate: { rotate: [0, 5, -5, 0] },
                    transition: { duration: 4, repeat: 1 / 0 },
                    className: "inline-block mb-4",
                    children: S.jsx("span", {
                      className: "text-6xl",
                      children: "_",
                    }),
                  }),
                  S.jsx("h3", {
                    className:
                      "font-heading text-3xl md:text-4xl text-mojo-dark mb-3",
                    children: "",
                  }),
                  S.jsx("p", {
                    className:
                      "font-body text-mojo-dark/60 max-w-xl mx-auto text-lg",
                    children:
                      "$MOJO captures the spirit of the original sketch — pure, unfiltered, and community-driven. No pre-sale, no VCs, just a fair launch for everyone.",
                  }),
                ],
              }),
              S.jsxs("div", {
                className:
                  "bg-white rounded-2xl p-5 border border-mojo-orange/20 max-w-lg mx-auto mb-8",
                children: [
                  S.jsx("p", {
                    className:
                      "font-heading text-sm text-mojo-orange uppercase tracking-wider mb-1",
                    children: "Contract Address",
                  }),
                  S.jsxs("div", {
                    className:
                      "font-body text-mojo-dark text-xs md:text-sm bg-mojo-cream/50 rounded-lg px-4 py-3 border border-dashed border-mojo-dark/10 break-all select-all cursor-pointer",
                    onClick: () =>
                      navigator.clipboard.writeText(
                        "0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e"
                      ),
                    children: [
                      "0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e",
                      S.jsx("span", {
                        className: "ml-2 text-mojo-orange text-xs",
                        children: "📋 click to copy",
                      }),
                    ],
                  }),
                ],
              }),
              S.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-4 justify-center items-center",
                children: [
                  S.jsx(Se.a, {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.05, rotate: -1 },
                    whileTap: { scale: 0.95 },
                    className:
                      "inline-block px-10 py-4 bg-mojo-orange text-white font-heading text-2xl rounded-2xl shadow-lg shadow-mojo-orange/30 hover:shadow-xl border-2 border-mojo-dark/10 transition-shadow",
                    children: "Buy",
                  }),
                  S.jsxs(Se.a, {
                    href: "https://dexscreener.com/ethereum/0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.05, rotate: 1 },
                    whileTap: { scale: 0.95 },
                    className:
                      "inline-flex items-center gap-2 px-10 py-4 bg-white text-mojo-dark font-heading text-2xl rounded-2xl shadow-md border-2 border-mojo-dark/10 hover:border-mojo-orange/40 transition-all",
                    children: [
                      S.jsx("img", {
                        src: "https://dexscreener.com/favicon.ico",
                        alt: "DexScreener",
                        className: "w-6 h-6",
                      }),
                      "DexScreener 📊",
                    ],
                  }),
                ],
              }),
              S.jsx("div", {
                className:
                  "absolute top-4 left-4 font-heading text-mojo-orange/20 text-4xl",
                children: "✦",
              }),
              S.jsx("div", {
                className:
                  "absolute bottom-4 right-4 font-heading text-mojo-orange/20 text-4xl",
                children: "✦",
              }),
            ],
          }),
          S.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: _N.map((t, e) =>
              S.jsxs(
                Se.div,
                {
                  initial: { y: 30, opacity: 0 },
                  whileInView: { y: 0, opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: e * 0.1 },
                  whileHover: { y: -4, rotate: e % 2 === 0 ? 1 : -1 },
                  className:
                    "bg-white rounded-2xl p-6 border-2 border-mojo-dark/5 shadow-sm hover:shadow-md hover:border-mojo-orange/20 transition-all",
                  children: [
                    S.jsx(t.icon, {
                      className: "w-8 h-8 text-mojo-orange mb-3",
                      strokeWidth: 1.5,
                    }),
                    S.jsx("h4", {
                      className: "font-heading text-xl text-mojo-dark mb-1",
                      children: t.title,
                    }),
                    S.jsx("p", {
                      className: "font-body text-sm text-mojo-dark/50",
                      children: t.desc,
                    }),
                  ],
                },
                e
              )
            ),
          }),
        ],
      }),
    ],
  });
}
const AN = [
  {
    name: "Twitter / X",
    emoji: "🐦",
    description: "Follow for memes, updates, and daily doses of Mojo energy",
    url: "https://x.com/mattfurie_mojoX",
    color: "from-sky-50 to-blue-50",
    borderHover: "hover:border-sky-300",
    tag: "@MojoOnSol",
  },
  {
    name: "Telegram",
    emoji: "✈️",
    description: "Join the chat — where the real ones hang out 24/7",
    url: "https://t.me/mattfurie_mojo",
    color: "from-blue-50 to-cyan-50",
    borderHover: "hover:border-blue-300",
    tag: "Join Group",
  },
  {
    name: "Discord",
    emoji: "🎮",
    description: "Art drops, community calls, and organized chaos",
    url: "#",
    color: "from-indigo-50 to-purple-50",
    borderHover: "hover:border-indigo-300",
    tag: "Join Server",
  },
];
function NN() {
  return S.jsx("section", {
    id: "community",
    className: "relative py-24 px-4 md:px-8 bg-white/50",
    children: S.jsxs("div", {
      className: "max-w-5xl mx-auto",
      children: [
        S.jsxs(Se.div, {
          initial: { y: 30, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.7 },
          className: "text-center mb-16",
          children: [
            S.jsxs("h2", {
              className:
                "font-heading text-5xl md:text-7xl font-bold text-mojo-dark mb-3",
              children: [
                "Join the ",
                S.jsx("span", {
                  className: "text-mojo-orange",
                  children: "Crew",
                }),
                " 🤝",
              ],
            }),
            S.jsx("div", {
              className: "flex justify-center mb-4",
              children: S.jsx(_r, { width: 200 }),
            }),
            S.jsx("p", {
              className: "font-body text-lg text-mojo-dark/50 max-w-xl mx-auto",
              children:
                "Art is better together. Find your people and be part of the movement.",
            }),
          ],
        }),
        S.jsx("div", {
          className: "grid md:grid-cols-3 gap-6",
          children: AN.map((t, e) =>
            S.jsxs(
              Se.a,
              {
                href: t.url,
                target: "_blank",
                rel: "noopener noreferrer",
                initial: { y: 40, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: e * 0.15 },
                whileHover: { y: -8, scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: `block bg-gradient-to-br ${t.color} rounded-3xl p-8 border-2 border-transparent ${t.borderHover} shadow-sm hover:shadow-lg transition-all cursor-pointer group`,
                children: [
                  S.jsx(Se.span, {
                    className: "text-5xl block mb-4",
                    animate: { rotate: [0, 5, -5, 0] },
                    transition: { duration: 3, repeat: 1 / 0, delay: e * 0.5 },
                    children: t.emoji,
                  }),
                  S.jsx("h3", {
                    className:
                      "font-heading text-2xl text-mojo-dark mb-2 group-hover:text-mojo-orange transition-colors",
                    children: t.name,
                  }),
                  S.jsx("p", {
                    className:
                      "font-body text-mojo-dark/50 mb-4 text-sm leading-relaxed",
                    children: t.description,
                  }),
                  S.jsx("span", {
                    className:
                      "inline-block font-heading text-mojo-orange bg-white/80 px-4 py-1.5 rounded-full text-sm border border-mojo-orange/20 group-hover:bg-mojo-orange group-hover:text-white transition-all",
                    children: t.tag,
                  }),
                ],
              },
              e
            )
          ),
        }),
        S.jsx(Se.div, {
          initial: { y: 30, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.7, delay: 0.3 },
          className: "mt-16 text-center",
          children: S.jsxs("div", {
            className:
              "inline-flex items-center gap-3 bg-mojo-orange/5 rounded-2xl px-8 py-4 border border-dashed border-mojo-orange/20",
            children: [
              S.jsx("span", { className: "text-2xl", children: "✏️" }),
              S.jsx("span", {
                className: "font-heading text-xl text-mojo-dark/70",
                children: "Every degen was once an artist. Welcome home.",
              }),
              S.jsx("span", { className: "text-2xl", children: "🏠" }),
            ],
          }),
        }),
      ],
    }),
  });
}
const ON = [
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/3be4ec5b4_GRsY2ulaUAEaO8s.jpg",
    alt: "$MOJO distracted boyfriend meme",
    rotate: -2,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/0b138903b_GRsMaNebgAAGxsc.jpg",
    alt: "Mojo swimming underwater meme",
    rotate: 1,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/8bae9b96f_GRs97xebMAEj5-_.jpg",
    alt: "Mojo Abbey Road crosswalk",
    rotate: -1,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/01fd25ba2_images70.jpg",
    alt: "Mojo at the bar with frens",
    rotate: 2,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/248998c03_images69.jpg",
    alt: "$MOJO party bitch",
    rotate: -1.5,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/e8f132c91_images68.jpg",
    alt: "$MOJO distracted meme v2",
    rotate: 1.5,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/c55ec0841_images67.jpg",
    alt: "Mojo holding $MOJO sign",
    rotate: -2,
  },
  {
    src: "/media.base44.com/images/public/69d8bdbf92c972afa33fbfeb/d5b45d937_GOODV87bMAADVw4.jpg",
    alt: "Mojo origin timeline",
    rotate: 1,
  },
];
function jN() {
  return S.jsx("section", {
    id: "gallery",
    className: "relative py-24 px-4 md:px-8",
    children: S.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        S.jsxs(Se.div, {
          initial: { y: 30, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.7 },
          className: "text-center mb-16",
          children: [
            S.jsxs("h2", {
              className:
                "font-heading text-5xl md:text-7xl font-bold text-mojo-dark mb-3",
              children: [
                "The ",
                S.jsx("span", {
                  className: "text-mojo-orange",
                  children: "Gallery",
                }),
                " 🖼️",
              ],
            }),
            S.jsx("div", {
              className: "flex justify-center mb-4",
              children: S.jsx(_r, { width: 170 }),
            }),
            S.jsx("p", {
              className: "font-body text-lg text-mojo-dark/50 max-w-xl mx-auto",
              children:
                "A collection of sketches, doodles, and creative explorations",
            }),
          ],
        }),
        S.jsx("div", {
          className: "columns-2 md:columns-3 gap-4 space-y-4",
          children: ON.map((t, e) =>
            S.jsx(
              Se.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0, margin: "-40px" },
                transition: { duration: 0.5, delay: e * 0.08 },
                whileHover: { scale: 1.03, rotate: 0, zIndex: 10 },
                className: "break-inside-avoid relative group cursor-pointer",
                style: { transform: `rotate(${t.rotate}deg)` },
                children: S.jsxs("div", {
                  className:
                    "bg-white rounded-2xl p-2 shadow-md border-2 border-mojo-dark/5 group-hover:border-mojo-orange/30 group-hover:shadow-xl transition-all",
                  children: [
                    S.jsx("img", {
                      src: t.src,
                      alt: t.alt,
                      className: "w-full rounded-xl object-cover",
                      loading: "lazy",
                    }),
                    e % 3 === 0 &&
                      S.jsx("div", {
                        className:
                          "absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-200/60 rounded-sm",
                        style: { transform: `rotate(${t.rotate * -1}deg)` },
                      }),
                    e % 3 === 1 &&
                      S.jsx("div", {
                        className:
                          "absolute -top-1 right-4 w-10 h-4 bg-mojo-orange/20 rounded-sm",
                        style: { transform: "rotate(5deg)" },
                      }),
                  ],
                }),
              },
              e
            )
          ),
        }),
      ],
    }),
  });
}
const LN = [
  { label: "Twitter / X", href: "https://x.com/mattfurie_mojoX" },
  { label: "Telegram", href: "https://t.me/mattfurie_mojo" },
  { label: "Discord", href: "#" },
  {
    label: "BUY",
    href: "https://dexscreener.com/ethereum/0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e",
  },
];
function MN() {
  return S.jsxs("footer", {
    className:
      "relative py-16 px-4 md:px-8 bg-mojo-dark text-white overflow-hidden",
    children: [
      S.jsx(as, {
        className: "absolute top-8 right-[10%] opacity-10",
        size: 30,
        color: "#ff8d02",
      }),
      S.jsx(as, {
        className: "absolute bottom-8 left-[8%] opacity-10",
        size: 25,
        color: "#ff8d02",
      }),
      S.jsxs("div", {
        className: "max-w-5xl mx-auto text-center",
        children: [
          S.jsxs(Se.h3, {
            initial: { y: 20, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            className: "font-heading text-5xl md:text-6xl font-bold mb-2",
            children: [
              "M",
              S.jsx("span", { className: "text-mojo-orange", children: "O" }),
              "J",
              S.jsx("span", { className: "text-mojo-orange", children: "O" }),
            ],
          }),
          S.jsx("div", {
            className: "flex justify-center mb-6",
            children: S.jsx(_r, { width: 120, color: "#ff8d02" }),
          }),
          S.jsx(Se.p, {
            initial: { y: 15, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.1 },
            className: "font-body text-white/50 text-lg mb-8 italic",
            children: '"Every movement starts with a single sketch." ✏️',
          }),
          S.jsx(Se.div, {
            initial: { y: 15, opacity: 0 },
            whileInView: { y: 0, opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.2 },
            className: "flex flex-wrap justify-center gap-6 mb-10",
            children: LN.map((t, e) =>
              S.jsx(
                Se.a,
                {
                  href: t.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { y: -2, color: "#ff8d02" },
                  className:
                    "font-heading text-lg text-white/60 hover:text-mojo-orange transition-colors",
                  children: t.label,
                },
                e
              )
            ),
          }),
          S.jsx("div", {
            className: "flex justify-center mb-6 opacity-20",
            children: S.jsx("svg", {
              width: "200",
              height: "8",
              viewBox: "0 0 200 8",
              fill: "none",
              children: S.jsx("path", {
                d: "M0 4 Q25 0, 50 4 T100 4 T150 4 T200 4",
                stroke: "#ff8d02",
                strokeWidth: "1.5",
              }),
            }),
          }),
          S.jsx("p", {
            className: "font-body text-white/30 text-sm",
            children:
              "$MOJO — A celebration of creativity and community. Not financial advice. DYOR.",
          }),
          S.jsx("p", {
            className: "font-body text-white/20 text-xs mt-2",
            children: "© 2026 Mojo. Made with crayons and vibes.",
          }),
        ],
      }),
    ],
  });
}
function DN() {
  return S.jsxs("div", {
    className:
      "min-h-screen bg-background font-body overflow-x-hidden scroll-smooth",
    children: [
      S.jsx("nav", {
        className: "fixed top-0 left-0 right-0 z-50",
        style: { backgroundColor: "#fde9c4" },
        children: S.jsxs("div", {
          className:
            "max-w-6xl mx-auto px-6 py-3 flex items-center justify-between",
          children: [
            S.jsx("a", {
              href: "#",
              className: "font-heading text-3xl font-bold",
              style: { color: "#7a2800" },
              children: "MOJO",
            }),
            S.jsx("div", {
              className: "hidden md:flex items-center gap-3",
              children: ["About", "Story", "Token", "Gallery", "Community"].map(
                (t) =>
                  S.jsx(
                    "a",
                    {
                      href:
                        t.toLowerCase() === "community"
                          ? "https://t.me/mattfurie_mojo"
                          : `#${t.toLowerCase()}`,
                      className:
                        "font-heading text-lg px-5 py-2 rounded-full bg-white border-2 transition-all hover:-rotate-1",
                      style: { color: "#7a2800", borderColor: "#ff8d02" },
                      children: t,
                    },
                    t
                  )
              ),
            }),
            S.jsx("a", {
              href: "https://dexscreener.com/ethereum/0x112ccB5107D334f0Cb11c7114F85d21dc516CE0e",
              className:
                "font-heading text-lg px-6 py-2 rounded-full border-2 transition-all hover:scale-105",
              style: {
                backgroundColor: "#ff8d02",
                color: "#7a2800",
                borderColor: "#c45e00",
              },
              children: "Buy $MOJO",
            }),
          ],
        }),
      }),
      S.jsx(bN, {}),
      S.jsx(kN, {}),
      S.jsx(TN, {}),
      S.jsx(PN, {}),
      S.jsx(RN, {}),
      S.jsx(jN, {}),
      S.jsx(NN, {}),
      S.jsx(MN, {}),
    ],
  });
}
const IN = () => {
  const {
    isLoadingAuth: t,
    isLoadingPublicSettings: e,
    authError: r,
    navigateToLogin: i,
  } = WP();
  if (e || t) return null;
  if (r) {
    if (r.type === "user_not_registered") return S.jsx(qP, {});
    if (r.type === "auth_required") return i(), null;
  }
  return S.jsxs(NE, {
    children: [
      S.jsx(Nd, { path: "/", element: S.jsx(DN, {}) }),
      S.jsx(Nd, { path: "*", element: S.jsx($P, {}) }),
    ],
  });
};
function FN() {
  return S.jsx(HP, {
    children: S.jsxs(Lk, {
      client: Kk,
      children: [S.jsx(LE, { children: S.jsx(IN, {}) }), S.jsx(lk, {})],
    }),
  });
}
JS.createRoot(document.getElementById("root")).render(S.jsx(FN, {}));
