(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const u of s.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function r(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
var $i =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ut(e, t) {
  return (
    e(
      (t = {
        exports: {},
      }),
      t.exports
    ),
    t.exports
  );
}
var Q = ut(function (e) {
    var t, r;
    (t = $i),
      (r = function () {
        function n(i) {
          var s = [];
          if (i.length === 0) return "";
          if (typeof i[0] != "string")
            throw new TypeError("Url must be a string. Received " + i[0]);
          if (i[0].match(/^[^/:]+:\/*$/) && i.length > 1) {
            var u = i.shift();
            i[0] = u + i[0];
          }
          i[0].match(/^file:\/\/\//)
            ? (i[0] = i[0].replace(/^([^/:]+):\/*/, "$1:///"))
            : (i[0] = i[0].replace(/^([^/:]+):\/*/, "$1://"));
          for (var p = 0; p < i.length; p++) {
            var l = i[p];
            if (typeof l != "string")
              throw new TypeError("Url must be a string. Received " + l);
            l !== "" &&
              (p > 0 && (l = l.replace(/^[\/]+/, "")),
              (l =
                p < i.length - 1
                  ? l.replace(/[\/]+$/, "")
                  : l.replace(/[\/]+$/, "/")),
              s.push(l));
          }
          var f = s.join("/"),
            g = (f = f.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
          return (f = g.shift() + (g.length > 0 ? "?" : "") + g.join("&"));
        }
        return function () {
          return n(
            typeof arguments[0] == "object"
              ? arguments[0]
              : [].slice.call(arguments)
          );
        };
      }),
      e.exports ? (e.exports = r()) : (t.urljoin = r());
  }),
  Yr = typeof Symbol < "u" && Symbol,
  ji = "Function.prototype.bind called on incompatible ",
  zt = Array.prototype.slice,
  Wi = Object.prototype.toString,
  be =
    Function.prototype.bind ||
    function (e) {
      var t = this;
      if (typeof t != "function" || Wi.call(t) !== "[object Function]")
        throw new TypeError(ji + t);
      for (
        var r,
          n = zt.call(arguments, 1),
          i = function () {
            if (this instanceof r) {
              var f = t.apply(this, n.concat(zt.call(arguments)));
              return Object(f) === f ? f : this;
            }
            return t.apply(e, n.concat(zt.call(arguments)));
          },
          s = Math.max(0, t.length - n.length),
          u = [],
          p = 0;
        p < s;
        p++
      )
        u.push("$" + p);
      if (
        ((r = Function(
          "binder",
          "return function (" +
            u.join(",") +
            "){ return binder.apply(this,arguments); }"
        )(i)),
        t.prototype)
      ) {
        var l = function () {};
        (l.prototype = t.prototype),
          (r.prototype = new l()),
          (l.prototype = null);
      }
      return r;
    },
  Ut = be.call(Function.call, Object.prototype.hasOwnProperty),
  st = SyntaxError,
  fi = Function,
  et = TypeError,
  Vt = function (e) {
    try {
      return fi('"use strict"; return (' + e + ").constructor;")();
    } catch {}
  },
  Ue = Object.getOwnPropertyDescriptor;
if (Ue)
  try {
    Ue({}, "");
  } catch {
    Ue = null;
  }
var Jt = function () {
    throw new et();
  },
  zi = Ue
    ? (function () {
        try {
          return Jt;
        } catch {
          try {
            return Ue(arguments, "callee").get;
          } catch {
            return Jt;
          }
        }
      })()
    : Jt,
  $e =
    typeof Yr == "function" &&
    typeof Symbol == "function" &&
    typeof Yr("foo") == "symbol" &&
    typeof Symbol("bar") == "symbol" &&
    (function () {
      if (
        typeof Symbol != "function" ||
        typeof Object.getOwnPropertySymbols != "function"
      )
        return !1;
      if (typeof Symbol.iterator == "symbol") return !0;
      var e = {},
        t = Symbol("test"),
        r = Object(t);
      if (
        typeof t == "string" ||
        Object.prototype.toString.call(t) !== "[object Symbol]" ||
        Object.prototype.toString.call(r) !== "[object Symbol]"
      )
        return !1;
      for (t in ((e[t] = 42), e)) return !1;
      if (
        (typeof Object.keys == "function" && Object.keys(e).length !== 0) ||
        (typeof Object.getOwnPropertyNames == "function" &&
          Object.getOwnPropertyNames(e).length !== 0)
      )
        return !1;
      var n = Object.getOwnPropertySymbols(e);
      if (
        n.length !== 1 ||
        n[0] !== t ||
        !Object.prototype.propertyIsEnumerable.call(e, t)
      )
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (i.value !== 42 || i.enumerable !== !0) return !1;
      }
      return !0;
    })(),
  Se =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__;
    },
  Xe = {},
  Vi = typeof Uint8Array > "u" ? void 0 : Se(Uint8Array),
  tt = {
    "%AggregateError%": typeof AggregateError > "u" ? void 0 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? void 0 : ArrayBuffer,
    "%ArrayIteratorPrototype%": $e ? Se([][Symbol.iterator]()) : void 0,
    "%AsyncFromSyncIteratorPrototype%": void 0,
    "%AsyncFunction%": Xe,
    "%AsyncGenerator%": Xe,
    "%AsyncGeneratorFunction%": Xe,
    "%AsyncIteratorPrototype%": Xe,
    "%Atomics%": typeof Atomics > "u" ? void 0 : Atomics,
    "%BigInt%": typeof BigInt > "u" ? void 0 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? void 0 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? void 0 : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? void 0 : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? void 0 : FinalizationRegistry,
    "%Function%": fi,
    "%GeneratorFunction%": Xe,
    "%Int8Array%": typeof Int8Array > "u" ? void 0 : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? void 0 : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? void 0 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $e ? Se(Se([][Symbol.iterator]())) : void 0,
    "%JSON%": typeof JSON == "object" ? JSON : void 0,
    "%Map%": typeof Map > "u" ? void 0 : Map,
    "%MapIteratorPrototype%":
      typeof Map < "u" && $e ? Se(new Map()[Symbol.iterator]()) : void 0,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? void 0 : Promise,
    "%Proxy%": typeof Proxy > "u" ? void 0 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? void 0 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? void 0 : Set,
    "%SetIteratorPrototype%":
      typeof Set < "u" && $e ? Se(new Set()[Symbol.iterator]()) : void 0,
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? void 0 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $e ? Se(""[Symbol.iterator]()) : void 0,
    "%Symbol%": $e ? Symbol : void 0,
    "%SyntaxError%": st,
    "%ThrowTypeError%": zi,
    "%TypedArray%": Vi,
    "%TypeError%": et,
    "%Uint8Array%": typeof Uint8Array > "u" ? void 0 : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? void 0 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? void 0 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? void 0 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? void 0 : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? void 0 : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? void 0 : WeakSet,
  },
  en = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  Ji = be.call(Function.call, Array.prototype.concat),
  Gi = be.call(Function.apply, Array.prototype.splice),
  tn = be.call(Function.call, String.prototype.replace),
  qt = be.call(Function.call, String.prototype.slice),
  Xi = be.call(Function.call, RegExp.prototype.exec),
  Qi =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Ki = /\\(\\)?/g,
  Zi = function (e) {
    var t = qt(e, 0, 1),
      r = qt(e, -1);
    if (t === "%" && r !== "%")
      throw new st("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && t !== "%")
      throw new st("invalid intrinsic syntax, expected opening `%`");
    var n = [];
    return (
      tn(e, Qi, function (i, s, u, p) {
        n[n.length] = u ? tn(p, Ki, "$1") : s || i;
      }),
      n
    );
  },
  Yi = function (e, t) {
    var r,
      n = e;
    if ((Ut(en, n) && (n = "%" + (r = en[n])[0] + "%"), Ut(tt, n))) {
      var i = tt[n];
      if (
        (i === Xe &&
          (i = (function s(u) {
            var p;
            if (u === "%AsyncFunction%") p = Vt("async function () {}");
            else if (u === "%GeneratorFunction%") p = Vt("function* () {}");
            else if (u === "%AsyncGeneratorFunction%")
              p = Vt("async function* () {}");
            else if (u === "%AsyncGenerator%") {
              var l = s("%AsyncGeneratorFunction%");
              l && (p = l.prototype);
            } else if (u === "%AsyncIteratorPrototype%") {
              var f = s("%AsyncGenerator%");
              f && (p = Se(f.prototype));
            }
            return (tt[u] = p), p;
          })(n)),
        i === void 0 && !t)
      )
        throw new et(
          "intrinsic " +
            e +
            " exists, but is not available. Please file an issue!"
        );
      return {
        alias: r,
        name: n,
        value: i,
      };
    }
    throw new st("intrinsic " + e + " does not exist!");
  },
  le = function (e, t) {
    if (typeof e != "string" || e.length === 0)
      throw new et("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof t != "boolean")
      throw new et('"allowMissing" argument must be a boolean');
    if (Xi(/^%?[^%]*%?$/g, e) === null)
      throw new st(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var r = Zi(e),
      n = r.length > 0 ? r[0] : "",
      i = Yi("%" + n + "%", t),
      s = i.name,
      u = i.value,
      p = !1,
      l = i.alias;
    l && ((n = l[0]), Gi(r, Ji([0, 1], l)));
    for (var f = 1, g = !0; f < r.length; f += 1) {
      var y = r[f],
        b = qt(y, 0, 1),
        A = qt(y, -1);
      if (
        (b === '"' ||
          b === "'" ||
          b === "`" ||
          A === '"' ||
          A === "'" ||
          A === "`") &&
        b !== A
      )
        throw new st("property names with quotes must have matching quotes");
      if (
        ((y !== "constructor" && g) || (p = !0),
        Ut(tt, (s = "%" + (n += "." + y) + "%")))
      )
        u = tt[s];
      else if (u != null) {
        if (!(y in u)) {
          if (!t)
            throw new et(
              "base intrinsic for " +
                e +
                " exists, but the property is not available."
            );
          return;
        }
        if (Ue && f + 1 >= r.length) {
          var h = Ue(u, y);
          u =
            (g = !!h) && "get" in h && !("originalValue" in h.get)
              ? h.get
              : u[y];
        } else (g = Ut(u, y)), (u = u[y]);
        g && !p && (tt[s] = u);
      }
    }
    return u;
  },
  Rr = ut(function (e) {
    var t = le("%Function.prototype.apply%"),
      r = le("%Function.prototype.call%"),
      n = le("%Reflect.apply%", !0) || be.call(r, t),
      i = le("%Object.getOwnPropertyDescriptor%", !0),
      s = le("%Object.defineProperty%", !0),
      u = le("%Math.max%");
    if (s)
      try {
        s({}, "a", {
          value: 1,
        });
      } catch {
        s = null;
      }
    e.exports = function (l) {
      var f = n(be, r, arguments);
      if (i && s) {
        var g = i(f, "length");
        g.configurable &&
          s(f, "length", {
            value: 1 + u(0, l.length - (arguments.length - 1)),
          });
      }
      return f;
    };
    var p = function () {
      return n(be, t, arguments);
    };
    s
      ? s(e.exports, "apply", {
          value: p,
        })
      : (e.exports.apply = p);
  }),
  eo = (Rr.apply, Rr(le("String.prototype.indexOf"))),
  ct = function (e, t) {
    var r = le(e, !!t);
    return typeof r == "function" && eo(e, ".prototype.") > -1 ? Rr(r) : r;
  },
  Pr = (function (e) {
    return (e && e.default) || e;
  })(
    Object.freeze({
      __proto__: null,
      default: {},
    })
  ),
  Vr = typeof Map == "function" && Map.prototype,
  Gt =
    Object.getOwnPropertyDescriptor && Vr
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  _t = Vr && Gt && typeof Gt.get == "function" ? Gt.get : null,
  to = Vr && Map.prototype.forEach,
  Jr = typeof Set == "function" && Set.prototype,
  Xt =
    Object.getOwnPropertyDescriptor && Jr
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  Ot = Jr && Xt && typeof Xt.get == "function" ? Xt.get : null,
  ro = Jr && Set.prototype.forEach,
  lt =
    typeof WeakMap == "function" && WeakMap.prototype
      ? WeakMap.prototype.has
      : null,
  ht =
    typeof WeakSet == "function" && WeakSet.prototype
      ? WeakSet.prototype.has
      : null,
  rn =
    typeof WeakRef == "function" && WeakRef.prototype
      ? WeakRef.prototype.deref
      : null,
  no = Boolean.prototype.valueOf,
  io = Object.prototype.toString,
  oo = Function.prototype.toString,
  so = String.prototype.match,
  Dr = String.prototype.slice,
  Ce = String.prototype.replace,
  ao = String.prototype.toUpperCase,
  nn = String.prototype.toLowerCase,
  di = RegExp.prototype.test,
  on = Array.prototype.concat,
  fe = Array.prototype.join,
  uo = Array.prototype.slice,
  sn = Math.floor,
  Qt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  Kt = Object.getOwnPropertySymbols,
  Ir =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  at = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  te =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === at || "symbol")
      ? Symbol.toStringTag
      : null,
  yi = Object.prototype.propertyIsEnumerable,
  an =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function un(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e != e ||
    (e && e > -1e3 && e < 1e3) ||
    di.call(/e/, t)
  )
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -sn(-e) : sn(e);
    if (n !== e) {
      var i = String(n),
        s = Dr.call(t, i.length + 1);
      return (
        Ce.call(i, r, "$&_") +
        "." +
        Ce.call(Ce.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return Ce.call(t, r, "$&_");
}
var cn = Pr.custom,
  pn = mi(cn) ? cn : null,
  co = function e(t, r, n, i) {
    var s = r || {};
    if (
      Ae(s, "quoteStyle") &&
      s.quoteStyle !== "single" &&
      s.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      Ae(s, "maxStringLength") &&
      (typeof s.maxStringLength == "number"
        ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
        : s.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var u = !Ae(s, "customInspect") || s.customInspect;
    if (typeof u != "boolean" && u !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      Ae(s, "indent") &&
      s.indent !== null &&
      s.indent !== "	" &&
      !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (Ae(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var p = s.numericSeparator;
    if (t === void 0) return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string")
      return (function x(N, q) {
        if (N.length > q.maxStringLength) {
          var J = N.length - q.maxStringLength,
            pe = "... " + J + " more character" + (J > 1 ? "s" : "");
          return x(Dr.call(N, 0, q.maxStringLength), q) + pe;
        }
        return ln(
          Ce.call(Ce.call(N, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ho),
          "single",
          q
        );
      })(t, s);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var l = String(t);
      return p ? un(t, l) : l;
    }
    if (typeof t == "bigint") {
      var f = String(t) + "n";
      return p ? un(t, f) : f;
    }
    var g = s.depth === void 0 ? 5 : s.depth;
    if ((n === void 0 && (n = 0), n >= g && g > 0 && typeof t == "object"))
      return kr(t) ? "[Array]" : "[Object]";
    var y = (function (x, N) {
      var q;
      if (x.indent === "	") q = "	";
      else {
        if (!(typeof x.indent == "number" && x.indent > 0)) return null;
        q = fe.call(Array(x.indent + 1), " ");
      }
      return {
        base: q,
        prev: fe.call(Array(N + 1), q),
      };
    })(s, n);
    if (i === void 0) i = [];
    else if (fn(i, t) >= 0) return "[Circular]";
    function b(x, N, q) {
      if ((N && (i = uo.call(i)).push(N), q)) {
        var J = {
          depth: s.depth,
        };
        return (
          Ae(s, "quoteStyle") && (J.quoteStyle = s.quoteStyle),
          e(x, J, n + 1, i)
        );
      }
      return e(x, s, n + 1, i);
    }
    if (typeof t == "function" && !hn(t)) {
      var A = (function (x) {
          if (x.name) return x.name;
          var N = so.call(oo.call(x), /^function\s*([\w$]+)/);
          return N ? N[1] : null;
        })(t),
        h = Tt(t, b);
      return (
        "[Function" +
        (A ? ": " + A : " (anonymous)") +
        "]" +
        (h.length > 0 ? " { " + fe.call(h, ", ") + " }" : "")
      );
    }
    if (mi(t)) {
      var d = at
        ? Ce.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : Ir.call(t);
      return typeof t != "object" || at ? d : ft(d);
    }
    if (
      (function (x) {
        return !x || typeof x != "object"
          ? !1
          : typeof HTMLElement < "u" && x instanceof HTMLElement
          ? !0
          : typeof x.nodeName == "string" &&
            typeof x.getAttribute == "function";
      })(t)
    ) {
      for (
        var w = "<" + nn.call(String(t.nodeName)),
          O = t.attributes || [],
          v = 0;
        v < O.length;
        v++
      )
        w += " " + O[v].name + "=" + ln(po(O[v].value), "double", s);
      return (
        (w += ">"),
        t.childNodes && t.childNodes.length && (w += "..."),
        (w += "</" + nn.call(String(t.nodeName)) + ">")
      );
    }
    if (kr(t)) {
      if (t.length === 0) return "[]";
      var S = Tt(t, b);
      return y &&
        !(function (x) {
          for (var N = 0; N < x.length; N++)
            if (
              fn(
                x[N],
                `
`
              ) >= 0
            )
              return !1;
          return !0;
        })(S)
        ? "[" + Ur(S, y) + "]"
        : "[ " + fe.call(S, ", ") + " ]";
    }
    if (
      (function (x) {
        return !(
          Ee(x) !== "[object Error]" ||
          (te && typeof x == "object" && te in x)
        );
      })(t)
    ) {
      var E = Tt(t, b);
      return "cause" in Error.prototype ||
        !("cause" in t) ||
        yi.call(t, "cause")
        ? E.length === 0
          ? "[" + String(t) + "]"
          : "{ [" + String(t) + "] " + fe.call(E, ", ") + " }"
        : "{ [" +
            String(t) +
            "] " +
            fe.call(on.call("[cause]: " + b(t.cause), E), ", ") +
            " }";
    }
    if (typeof t == "object" && u) {
      if (pn && typeof t[pn] == "function" && Pr)
        return Pr(t, {
          depth: g - n,
        });
      if (u !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (
      (function (x) {
        if (!_t || !x || typeof x != "object") return !1;
        try {
          _t.call(x);
          try {
            Ot.call(x);
          } catch {
            return !0;
          }
          return x instanceof Map;
        } catch {}
        return !1;
      })(t)
    ) {
      var P = [];
      return (
        to.call(t, function (x, N) {
          P.push(b(N, t, !0) + " => " + b(x, t));
        }),
        dn("Map", _t.call(t), P, y)
      );
    }
    if (
      (function (x) {
        if (!Ot || !x || typeof x != "object") return !1;
        try {
          Ot.call(x);
          try {
            _t.call(x);
          } catch {
            return !0;
          }
          return x instanceof Set;
        } catch {}
        return !1;
      })(t)
    ) {
      var I = [];
      return (
        ro.call(t, function (x) {
          I.push(b(x, t));
        }),
        dn("Set", Ot.call(t), I, y)
      );
    }
    if (
      (function (x) {
        if (!lt || !x || typeof x != "object") return !1;
        try {
          lt.call(x, lt);
          try {
            ht.call(x, ht);
          } catch {
            return !0;
          }
          return x instanceof WeakMap;
        } catch {}
        return !1;
      })(t)
    )
      return Zt("WeakMap");
    if (
      (function (x) {
        if (!ht || !x || typeof x != "object") return !1;
        try {
          ht.call(x, ht);
          try {
            lt.call(x, lt);
          } catch {
            return !0;
          }
          return x instanceof WeakSet;
        } catch {}
        return !1;
      })(t)
    )
      return Zt("WeakSet");
    if (
      (function (x) {
        if (!rn || !x || typeof x != "object") return !1;
        try {
          return rn.call(x), !0;
        } catch {}
        return !1;
      })(t)
    )
      return Zt("WeakRef");
    if (
      (function (x) {
        return !(
          Ee(x) !== "[object Number]" ||
          (te && typeof x == "object" && te in x)
        );
      })(t)
    )
      return ft(b(Number(t)));
    if (
      (function (x) {
        if (!x || typeof x != "object" || !Qt) return !1;
        try {
          return Qt.call(x), !0;
        } catch {}
        return !1;
      })(t)
    )
      return ft(b(Qt.call(t)));
    if (
      (function (x) {
        return !(
          Ee(x) !== "[object Boolean]" ||
          (te && typeof x == "object" && te in x)
        );
      })(t)
    )
      return ft(no.call(t));
    if (
      (function (x) {
        return !(
          Ee(x) !== "[object String]" ||
          (te && typeof x == "object" && te in x)
        );
      })(t)
    )
      return ft(b(String(t)));
    if (
      !(function (x) {
        return !(
          Ee(x) !== "[object Date]" ||
          (te && typeof x == "object" && te in x)
        );
      })(t) &&
      !hn(t)
    ) {
      var U = Tt(t, b),
        M = an
          ? an(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        L = t instanceof Object ? "" : "null prototype",
        k =
          !M && te && Object(t) === t && te in t
            ? Dr.call(Ee(t), 8, -1)
            : L
            ? "Object"
            : "",
        F =
          (M || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "") +
          (k || L
            ? "[" + fe.call(on.call([], k || [], L || []), ": ") + "] "
            : "");
      return U.length === 0
        ? F + "{}"
        : y
        ? F + "{" + Ur(U, y) + "}"
        : F + "{ " + fe.call(U, ", ") + " }";
    }
    return String(t);
  };
function ln(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function po(e) {
  return Ce.call(String(e), /"/g, "&quot;");
}
function kr(e) {
  return !(
    Ee(e) !== "[object Array]" ||
    (te && typeof e == "object" && te in e)
  );
}
function hn(e) {
  return !(
    Ee(e) !== "[object RegExp]" ||
    (te && typeof e == "object" && te in e)
  );
}
function mi(e) {
  if (at) return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol") return !0;
  if (!e || typeof e != "object" || !Ir) return !1;
  try {
    return Ir.call(e), !0;
  } catch {}
  return !1;
}
var lo =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function Ae(e, t) {
  return lo.call(e, t);
}
function Ee(e) {
  return io.call(e);
}
function fn(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
  return -1;
}
function ho(e) {
  var t = e.charCodeAt(0),
    r = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r",
    }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + ao.call(t.toString(16));
}
function ft(e) {
  return "Object(" + e + ")";
}
function Zt(e) {
  return e + " { ? }";
}
function dn(e, t, r, n) {
  return e + " (" + t + ") {" + (n ? Ur(r, n) : fe.call(r, ", ")) + "}";
}
function Ur(e, t) {
  if (e.length === 0) return "";
  var r =
    `
` +
    t.prev +
    t.base;
  return (
    r +
    fe.call(e, "," + r) +
    `
` +
    t.prev
  );
}
function Tt(e, t) {
  var r = kr(e),
    n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++) n[i] = Ae(e, i) ? t(e[i], e) : "";
  }
  var s,
    u = typeof Kt == "function" ? Kt(e) : [];
  if (at) {
    s = {};
    for (var p = 0; p < u.length; p++) s["$" + u[p]] = u[p];
  }
  for (var l in e)
    Ae(e, l) &&
      ((r && String(Number(l)) === l && l < e.length) ||
        (at && s["$" + l] instanceof Symbol) ||
        (di.call(/[^\w$]/, l)
          ? n.push(t(l, e) + ": " + t(e[l], e))
          : n.push(l + ": " + t(e[l], e))));
  if (typeof Kt == "function")
    for (var f = 0; f < u.length; f++)
      yi.call(e, u[f]) && n.push("[" + t(u[f]) + "]: " + t(e[u[f]], e));
  return n;
}
var fo = le("%TypeError%"),
  St = le("%WeakMap%", !0),
  At = le("%Map%", !0),
  yo = ct("WeakMap.prototype.get", !0),
  mo = ct("WeakMap.prototype.set", !0),
  go = ct("WeakMap.prototype.has", !0),
  vo = ct("Map.prototype.get", !0),
  wo = ct("Map.prototype.set", !0),
  bo = ct("Map.prototype.has", !0),
  Yt = function (e, t) {
    for (var r, n = e; (r = n.next) !== null; n = r)
      if (r.key === t)
        return (n.next = r.next), (r.next = e.next), (e.next = r), r;
  },
  gi = function () {
    var e,
      t,
      r,
      n = {
        assert: function (i) {
          if (!n.has(i)) throw new fo("Side channel does not contain " + co(i));
        },
        get: function (i) {
          if (St && i && (typeof i == "object" || typeof i == "function")) {
            if (e) return yo(e, i);
          } else if (At) {
            if (t) return vo(t, i);
          } else if (r)
            return (function (s, u) {
              var p = Yt(s, u);
              return p && p.value;
            })(r, i);
        },
        has: function (i) {
          if (St && i && (typeof i == "object" || typeof i == "function")) {
            if (e) return go(e, i);
          } else if (At) {
            if (t) return bo(t, i);
          } else if (r)
            return (function (s, u) {
              return !!Yt(s, u);
            })(r, i);
          return !1;
        },
        set: function (i, s) {
          St && i && (typeof i == "object" || typeof i == "function")
            ? (e || (e = new St()), mo(e, i, s))
            : At
            ? (t || (t = new At()), wo(t, i, s))
            : (r ||
                (r = {
                  key: {},
                  next: null,
                }),
              (function (u, p, l) {
                var f = Yt(u, p);
                f
                  ? (f.value = l)
                  : (u.next = {
                      key: p,
                      next: u.next,
                      value: l,
                    });
              })(r, i, s));
        },
      };
    return n;
  },
  _o = String.prototype.replace,
  Oo = /%20/g,
  yn = "RFC3986",
  rt = {
    default: yn,
    formatters: {
      RFC1738: function (e) {
        return _o.call(e, Oo, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: "RFC1738",
    RFC3986: yn,
  },
  er = Object.prototype.hasOwnProperty,
  Re = Array.isArray,
  he = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  mn = function (e, t) {
    for (
      var r = t && t.plainObjects ? Object.create(null) : {}, n = 0;
      n < e.length;
      ++n
    )
      e[n] !== void 0 && (r[n] = e[n]);
    return r;
  },
  ve = {
    arrayToObject: mn,
    assign: function (e, t) {
      return Object.keys(t).reduce(function (r, n) {
        return (r[n] = t[n]), r;
      }, e);
    },
    combine: function (e, t) {
      return [].concat(e, t);
    },
    compact: function (e) {
      for (
        var t = [
            {
              obj: {
                o: e,
              },
              prop: "o",
            },
          ],
          r = [],
          n = 0;
        n < t.length;
        ++n
      )
        for (
          var i = t[n], s = i.obj[i.prop], u = Object.keys(s), p = 0;
          p < u.length;
          ++p
        ) {
          var l = u[p],
            f = s[l];
          typeof f == "object" &&
            f !== null &&
            r.indexOf(f) === -1 &&
            (t.push({
              obj: s,
              prop: l,
            }),
            r.push(f));
        }
      return (
        (function (g) {
          for (; g.length > 1; ) {
            var y = g.pop(),
              b = y.obj[y.prop];
            if (Re(b)) {
              for (var A = [], h = 0; h < b.length; ++h)
                b[h] !== void 0 && A.push(b[h]);
              y.obj[y.prop] = A;
            }
          }
        })(t),
        e
      );
    },
    decode: function (e, t, r) {
      var n = e.replace(/\+/g, " ");
      if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(n);
      } catch {
        return n;
      }
    },
    encode: function (e, t, r, n, i) {
      if (e.length === 0) return e;
      var s = e;
      if (
        (typeof e == "symbol"
          ? (s = Symbol.prototype.toString.call(e))
          : typeof e != "string" && (s = String(e)),
        r === "iso-8859-1")
      )
        return escape(s).replace(/%u[0-9a-f]{4}/gi, function (f) {
          return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
        });
      for (var u = "", p = 0; p < s.length; ++p) {
        var l = s.charCodeAt(p);
        l === 45 ||
        l === 46 ||
        l === 95 ||
        l === 126 ||
        (l >= 48 && l <= 57) ||
        (l >= 65 && l <= 90) ||
        (l >= 97 && l <= 122) ||
        (i === rt.RFC1738 && (l === 40 || l === 41))
          ? (u += s.charAt(p))
          : l < 128
          ? (u += he[l])
          : l < 2048
          ? (u += he[192 | (l >> 6)] + he[128 | (63 & l)])
          : l < 55296 || l >= 57344
          ? (u +=
              he[224 | (l >> 12)] +
              he[128 | ((l >> 6) & 63)] +
              he[128 | (63 & l)])
          : ((p += 1),
            (l = 65536 + (((1023 & l) << 10) | (1023 & s.charCodeAt(p)))),
            (u +=
              he[240 | (l >> 18)] +
              he[128 | ((l >> 12) & 63)] +
              he[128 | ((l >> 6) & 63)] +
              he[128 | (63 & l)]));
      }
      return u;
    },
    isBuffer: function (e) {
      return (
        !(!e || typeof e != "object") &&
        !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
      );
    },
    isRegExp: function (e) {
      return Object.prototype.toString.call(e) === "[object RegExp]";
    },
    maybeMap: function (e, t) {
      if (Re(e)) {
        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
        return r;
      }
      return t(e);
    },
    merge: function e(t, r, n) {
      if (!r) return t;
      if (typeof r != "object") {
        if (Re(t)) t.push(r);
        else {
          if (!t || typeof t != "object") return [t, r];
          ((n && (n.plainObjects || n.allowPrototypes)) ||
            !er.call(Object.prototype, r)) &&
            (t[r] = !0);
        }
        return t;
      }
      if (!t || typeof t != "object") return [t].concat(r);
      var i = t;
      return (
        Re(t) && !Re(r) && (i = mn(t, n)),
        Re(t) && Re(r)
          ? (r.forEach(function (s, u) {
              if (er.call(t, u)) {
                var p = t[u];
                p && typeof p == "object" && s && typeof s == "object"
                  ? (t[u] = e(p, s, n))
                  : t.push(s);
              } else t[u] = s;
            }),
            t)
          : Object.keys(r).reduce(function (s, u) {
              var p = r[u];
              return er.call(s, u) ? (s[u] = e(s[u], p, n)) : (s[u] = p), s;
            }, i)
      );
    },
  },
  To = Object.prototype.hasOwnProperty,
  gn = {
    brackets: function (e) {
      return e + "[]";
    },
    comma: "comma",
    indices: function (e, t) {
      return e + "[" + t + "]";
    },
    repeat: function (e) {
      return e;
    },
  },
  ge = Array.isArray,
  So = String.prototype.split,
  Ao = Array.prototype.push,
  vi = function (e, t) {
    Ao.apply(e, ge(t) ? t : [t]);
  },
  Eo = Date.prototype.toISOString,
  vn = rt.default,
  K = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: ve.encode,
    encodeValuesOnly: !1,
    format: vn,
    formatter: rt.formatters[vn],
    indices: !1,
    serializeDate: function (e) {
      return Eo.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  tr = {},
  Co = function e(t, r, n, i, s, u, p, l, f, g, y, b, A, h, d, w) {
    for (var O = t, v = w, S = 0, E = !1; (v = v.get(tr)) !== void 0 && !E; ) {
      var P = v.get(t);
      if (((S += 1), P !== void 0)) {
        if (P === S) throw new RangeError("Cyclic object value");
        E = !0;
      }
      v.get(tr) === void 0 && (S = 0);
    }
    if (
      (typeof l == "function"
        ? (O = l(r, O))
        : O instanceof Date
        ? (O = y(O))
        : n === "comma" &&
          ge(O) &&
          (O = ve.maybeMap(O, function (Y) {
            return Y instanceof Date ? y(Y) : Y;
          })),
      O === null)
    ) {
      if (s) return p && !h ? p(r, K.encoder, d, "key", b) : r;
      O = "";
    }
    if (
      (function (Y) {
        return (
          typeof Y == "string" ||
          typeof Y == "number" ||
          typeof Y == "boolean" ||
          typeof Y == "symbol" ||
          typeof Y == "bigint"
        );
      })(O) ||
      ve.isBuffer(O)
    ) {
      if (p) {
        var I = h ? r : p(r, K.encoder, d, "key", b);
        if (n === "comma" && h) {
          for (
            var U = So.call(String(O), ","), M = "", L = 0;
            L < U.length;
            ++L
          )
            M += (L === 0 ? "" : ",") + A(p(U[L], K.encoder, d, "value", b));
          return [A(I) + (i && ge(O) && U.length === 1 ? "[]" : "") + "=" + M];
        }
        return [A(I) + "=" + A(p(O, K.encoder, d, "value", b))];
      }
      return [A(r) + "=" + A(String(O))];
    }
    var k,
      F = [];
    if (O === void 0) return F;
    if (n === "comma" && ge(O))
      k = [
        {
          value: O.length > 0 ? O.join(",") || null : void 0,
        },
      ];
    else if (ge(l)) k = l;
    else {
      var x = Object.keys(O);
      k = f ? x.sort(f) : x;
    }
    for (
      var N = i && ge(O) && O.length === 1 ? r + "[]" : r, q = 0;
      q < k.length;
      ++q
    ) {
      var J = k[q],
        pe = typeof J == "object" && J.value !== void 0 ? J.value : O[J];
      if (!u || pe !== null) {
        var He = ge(O)
          ? typeof n == "function"
            ? n(N, J)
            : N
          : N + (g ? "." + J : "[" + J + "]");
        w.set(t, S);
        var _e = gi();
        _e.set(tr, w),
          vi(F, e(pe, He, n, i, s, u, p, l, f, g, y, b, A, h, d, _e));
      }
    }
    return F;
  },
  qr = Object.prototype.hasOwnProperty,
  xo = Array.isArray,
  X = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: ve.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  Ro = function (e) {
    return e.replace(/&#(\d+);/g, function (t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  wi = function (e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
      ? e.split(",")
      : e;
  },
  Po = function (e, t, r, n) {
    if (e) {
      var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        s = /(\[[^[\]]*])/g,
        u = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
        p = u ? i.slice(0, u.index) : i,
        l = [];
      if (p) {
        if (
          !r.plainObjects &&
          qr.call(Object.prototype, p) &&
          !r.allowPrototypes
        )
          return;
        l.push(p);
      }
      for (
        var f = 0;
        r.depth > 0 && (u = s.exec(i)) !== null && f < r.depth;

      ) {
        if (
          ((f += 1),
          !r.plainObjects &&
            qr.call(Object.prototype, u[1].slice(1, -1)) &&
            !r.allowPrototypes)
        )
          return;
        l.push(u[1]);
      }
      return (
        u && l.push("[" + i.slice(u.index) + "]"),
        (function (g, y, b, A) {
          for (var h = A ? y : wi(y, b), d = g.length - 1; d >= 0; --d) {
            var w,
              O = g[d];
            if (O === "[]" && b.parseArrays) w = [].concat(h);
            else {
              w = b.plainObjects ? Object.create(null) : {};
              var v =
                  O.charAt(0) === "[" && O.charAt(O.length - 1) === "]"
                    ? O.slice(1, -1)
                    : O,
                S = parseInt(v, 10);
              b.parseArrays || v !== ""
                ? !isNaN(S) &&
                  O !== v &&
                  String(S) === v &&
                  S >= 0 &&
                  b.parseArrays &&
                  S <= b.arrayLimit
                  ? ((w = [])[S] = h)
                  : v !== "__proto__" && (w[v] = h)
                : (w = {
                    0: h,
                  });
            }
            h = w;
          }
          return h;
        })(l, t, r, n)
      );
    }
  },
  Do = function (e, t) {
    var r = (function (f) {
      if (!f) return X;
      if (
        f.decoder !== null &&
        f.decoder !== void 0 &&
        typeof f.decoder != "function"
      )
        throw new TypeError("Decoder has to be a function.");
      if (
        f.charset !== void 0 &&
        f.charset !== "utf-8" &&
        f.charset !== "iso-8859-1"
      )
        throw new TypeError(
          "The charset option must be either utf-8, iso-8859-1, or undefined"
        );
      var g = f.charset === void 0 ? X.charset : f.charset;
      return {
        allowDots: f.allowDots === void 0 ? X.allowDots : !!f.allowDots,
        allowPrototypes:
          typeof f.allowPrototypes == "boolean"
            ? f.allowPrototypes
            : X.allowPrototypes,
        allowSparse:
          typeof f.allowSparse == "boolean" ? f.allowSparse : X.allowSparse,
        arrayLimit:
          typeof f.arrayLimit == "number" ? f.arrayLimit : X.arrayLimit,
        charset: g,
        charsetSentinel:
          typeof f.charsetSentinel == "boolean"
            ? f.charsetSentinel
            : X.charsetSentinel,
        comma: typeof f.comma == "boolean" ? f.comma : X.comma,
        decoder: typeof f.decoder == "function" ? f.decoder : X.decoder,
        delimiter:
          typeof f.delimiter == "string" || ve.isRegExp(f.delimiter)
            ? f.delimiter
            : X.delimiter,
        depth:
          typeof f.depth == "number" || f.depth === !1 ? +f.depth : X.depth,
        ignoreQueryPrefix: f.ignoreQueryPrefix === !0,
        interpretNumericEntities:
          typeof f.interpretNumericEntities == "boolean"
            ? f.interpretNumericEntities
            : X.interpretNumericEntities,
        parameterLimit:
          typeof f.parameterLimit == "number"
            ? f.parameterLimit
            : X.parameterLimit,
        parseArrays: f.parseArrays !== !1,
        plainObjects:
          typeof f.plainObjects == "boolean" ? f.plainObjects : X.plainObjects,
        strictNullHandling:
          typeof f.strictNullHandling == "boolean"
            ? f.strictNullHandling
            : X.strictNullHandling,
      };
    })(t);
    if (e === "" || e == null) return r.plainObjects ? Object.create(null) : {};
    for (
      var n =
          typeof e == "string"
            ? (function (f, g) {
                var y,
                  b = {},
                  A = g.ignoreQueryPrefix ? f.replace(/^\?/, "") : f,
                  h = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit,
                  d = A.split(g.delimiter, h),
                  w = -1,
                  O = g.charset;
                if (g.charsetSentinel)
                  for (y = 0; y < d.length; ++y)
                    d[y].indexOf("utf8=") === 0 &&
                      (d[y] === "utf8=%E2%9C%93"
                        ? (O = "utf-8")
                        : d[y] === "utf8=%26%2310003%3B" && (O = "iso-8859-1"),
                      (w = y),
                      (y = d.length));
                for (y = 0; y < d.length; ++y)
                  if (y !== w) {
                    var v,
                      S,
                      E = d[y],
                      P = E.indexOf("]="),
                      I = P === -1 ? E.indexOf("=") : P + 1;
                    I === -1
                      ? ((v = g.decoder(E, X.decoder, O, "key")),
                        (S = g.strictNullHandling ? null : ""))
                      : ((v = g.decoder(E.slice(0, I), X.decoder, O, "key")),
                        (S = ve.maybeMap(wi(E.slice(I + 1), g), function (U) {
                          return g.decoder(U, X.decoder, O, "value");
                        }))),
                      S &&
                        g.interpretNumericEntities &&
                        O === "iso-8859-1" &&
                        (S = Ro(S)),
                      E.indexOf("[]=") > -1 && (S = xo(S) ? [S] : S),
                      qr.call(b, v) ? (b[v] = ve.combine(b[v], S)) : (b[v] = S);
                  }
                return b;
              })(e, r)
            : e,
        i = r.plainObjects ? Object.create(null) : {},
        s = Object.keys(n),
        u = 0;
      u < s.length;
      ++u
    ) {
      var p = s[u],
        l = Po(p, n[p], r, typeof e == "string");
      i = ve.merge(i, l, r);
    }
    return r.allowSparse === !0 ? i : ve.compact(i);
  },
  nt = function (e, t) {
    var r,
      n = e,
      i = (function (h) {
        if (!h) return K;
        if (
          h.encoder !== null &&
          h.encoder !== void 0 &&
          typeof h.encoder != "function"
        )
          throw new TypeError("Encoder has to be a function.");
        var d = h.charset || K.charset;
        if (
          h.charset !== void 0 &&
          h.charset !== "utf-8" &&
          h.charset !== "iso-8859-1"
        )
          throw new TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var w = rt.default;
        if (h.format !== void 0) {
          if (!To.call(rt.formatters, h.format))
            throw new TypeError("Unknown format option provided.");
          w = h.format;
        }
        var O = rt.formatters[w],
          v = K.filter;
        return (
          (typeof h.filter == "function" || ge(h.filter)) && (v = h.filter),
          {
            addQueryPrefix:
              typeof h.addQueryPrefix == "boolean"
                ? h.addQueryPrefix
                : K.addQueryPrefix,
            allowDots: h.allowDots === void 0 ? K.allowDots : !!h.allowDots,
            charset: d,
            charsetSentinel:
              typeof h.charsetSentinel == "boolean"
                ? h.charsetSentinel
                : K.charsetSentinel,
            delimiter: h.delimiter === void 0 ? K.delimiter : h.delimiter,
            encode: typeof h.encode == "boolean" ? h.encode : K.encode,
            encoder: typeof h.encoder == "function" ? h.encoder : K.encoder,
            encodeValuesOnly:
              typeof h.encodeValuesOnly == "boolean"
                ? h.encodeValuesOnly
                : K.encodeValuesOnly,
            filter: v,
            format: w,
            formatter: O,
            serializeDate:
              typeof h.serializeDate == "function"
                ? h.serializeDate
                : K.serializeDate,
            skipNulls:
              typeof h.skipNulls == "boolean" ? h.skipNulls : K.skipNulls,
            sort: typeof h.sort == "function" ? h.sort : null,
            strictNullHandling:
              typeof h.strictNullHandling == "boolean"
                ? h.strictNullHandling
                : K.strictNullHandling,
          }
        );
      })(t);
    typeof i.filter == "function"
      ? (n = (0, i.filter)("", n))
      : ge(i.filter) && (r = i.filter);
    var s,
      u = [];
    if (typeof n != "object" || n === null) return "";
    s =
      t && t.arrayFormat in gn
        ? t.arrayFormat
        : t && "indices" in t
        ? t.indices
          ? "indices"
          : "repeat"
        : "indices";
    var p = gn[s];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = p === "comma" && t && t.commaRoundTrip;
    r || (r = Object.keys(n)), i.sort && r.sort(i.sort);
    for (var f = gi(), g = 0; g < r.length; ++g) {
      var y = r[g];
      (i.skipNulls && n[y] === null) ||
        vi(
          u,
          Co(
            n[y],
            y,
            p,
            l,
            i.strictNullHandling,
            i.skipNulls,
            i.encode ? i.encoder : null,
            i.filter,
            i.sort,
            i.allowDots,
            i.serializeDate,
            i.format,
            i.formatter,
            i.encodeValuesOnly,
            i.charset,
            f
          )
        );
    }
    var b = u.join(i.delimiter),
      A = i.addQueryPrefix === !0 ? "?" : "";
    return (
      i.charsetSentinel &&
        (i.charset === "iso-8859-1"
          ? (A += "utf8=%26%2310003%3B&")
          : (A += "utf8=%E2%9C%93&")),
      b.length > 0 ? A + b : ""
    );
  },
  Io = ut(function (e) {
    function t(r) {
      if (r)
        return (function (n) {
          for (var i in t.prototype) n[i] = t.prototype[i];
          return n;
        })(r);
    }
    (e.exports = t),
      (t.prototype.on = t.prototype.addEventListener =
        function (r, n) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(n),
            this
          );
        }),
      (t.prototype.once = function (r, n) {
        function i() {
          this.off(r, i), n.apply(this, arguments);
        }
        return (i.fn = n), this.on(r, i), this;
      }),
      (t.prototype.off =
        t.prototype.removeListener =
        t.prototype.removeAllListeners =
        t.prototype.removeEventListener =
          function (r, n) {
            if (
              ((this._callbacks = this._callbacks || {}), arguments.length == 0)
            )
              return (this._callbacks = {}), this;
            var i,
              s = this._callbacks["$" + r];
            if (!s) return this;
            if (arguments.length == 1)
              return delete this._callbacks["$" + r], this;
            for (var u = 0; u < s.length; u++)
              if ((i = s[u]) === n || i.fn === n) {
                s.splice(u, 1);
                break;
              }
            return s.length === 0 && delete this._callbacks["$" + r], this;
          }),
      (t.prototype.emit = function (r) {
        this._callbacks = this._callbacks || {};
        for (
          var n = new Array(arguments.length - 1),
            i = this._callbacks["$" + r],
            s = 1;
          s < arguments.length;
          s++
        )
          n[s - 1] = arguments[s];
        if (i) {
          s = 0;
          for (var u = (i = i.slice(0)).length; s < u; ++s) i[s].apply(this, n);
        }
        return this;
      }),
      (t.prototype.listeners = function (r) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks["$" + r] || []
        );
      }),
      (t.prototype.hasListeners = function (r) {
        return !!this.listeners(r).length;
      });
  }),
  ko = dt;
(dt.default = dt), (dt.stable = wn), (dt.stableStringify = wn);
var qe = [],
  De = [];
function bi() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER,
  };
}
function dt(e, t, r, n) {
  var i;
  n === void 0 && (n = bi()),
    (function u(p, l, f, g, y, b, A) {
      var h;
      if (((b += 1), typeof p == "object" && p !== null)) {
        for (h = 0; h < g.length; h++)
          if (g[h] === p) return void it("[Circular]", p, l, y);
        if (
          (A.depthLimit !== void 0 && b > A.depthLimit) ||
          (A.edgesLimit !== void 0 && f + 1 > A.edgesLimit)
        )
          return void it("[...]", p, l, y);
        if ((g.push(p), Array.isArray(p)))
          for (h = 0; h < p.length; h++) u(p[h], h, h, g, p, b, A);
        else {
          var d = Object.keys(p);
          for (h = 0; h < d.length; h++) {
            var w = d[h];
            u(p[w], w, h, g, p, b, A);
          }
        }
        g.pop();
      }
    })(e, "", 0, [], void 0, 0, n);
  try {
    i = De.length === 0 ? JSON.stringify(e, t, r) : JSON.stringify(e, _i(t), r);
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; qe.length !== 0; ) {
      var s = qe.pop();
      s.length === 4
        ? Object.defineProperty(s[0], s[1], s[3])
        : (s[0][s[1]] = s[2]);
    }
  }
  return i;
}
function it(e, t, r, n) {
  var i = Object.getOwnPropertyDescriptor(n, r);
  i.get !== void 0
    ? i.configurable
      ? (Object.defineProperty(n, r, {
          value: e,
        }),
        qe.push([n, r, t, i]))
      : De.push([t, r, e])
    : ((n[r] = e), qe.push([n, r, t]));
}
function Uo(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function wn(e, t, r, n) {
  n === void 0 && (n = bi());
  var i,
    s =
      (function p(l, f, g, y, b, A, h) {
        var d;
        if (((A += 1), typeof l == "object" && l !== null)) {
          for (d = 0; d < y.length; d++)
            if (y[d] === l) return void it("[Circular]", l, f, b);
          try {
            if (typeof l.toJSON == "function") return;
          } catch {
            return;
          }
          if (
            (h.depthLimit !== void 0 && A > h.depthLimit) ||
            (h.edgesLimit !== void 0 && g + 1 > h.edgesLimit)
          )
            return void it("[...]", l, f, b);
          if ((y.push(l), Array.isArray(l)))
            for (d = 0; d < l.length; d++) p(l[d], d, d, y, l, A, h);
          else {
            var w = {},
              O = Object.keys(l).sort(Uo);
            for (d = 0; d < O.length; d++) {
              var v = O[d];
              p(l[v], v, d, y, l, A, h), (w[v] = l[v]);
            }
            if (b === void 0) return w;
            qe.push([b, f, l]), (b[f] = w);
          }
          y.pop();
        }
      })(e, "", 0, [], void 0, 0, n) || e;
  try {
    i = De.length === 0 ? JSON.stringify(s, t, r) : JSON.stringify(s, _i(t), r);
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; qe.length !== 0; ) {
      var u = qe.pop();
      u.length === 4
        ? Object.defineProperty(u[0], u[1], u[3])
        : (u[0][u[1]] = u[2]);
    }
  }
  return i;
}
function _i(e) {
  return (
    (e =
      e !== void 0
        ? e
        : function (t, r) {
            return r;
          }),
    function (t, r) {
      if (De.length > 0)
        for (var n = 0; n < De.length; n++) {
          var i = De[n];
          if (i[1] === t && i[0] === r) {
            (r = i[2]), De.splice(n, 1);
            break;
          }
        }
      return e.call(this, t, r);
    }
  );
}
function Oi(e) {
  return (Oi =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
var Ye = function (e) {
  return e !== null && Oi(e) === "object";
};
function Ti(e) {
  return (Ti =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
var qo = $;
function $(e) {
  if (e)
    return (function (t) {
      for (var r in $.prototype)
        Object.prototype.hasOwnProperty.call($.prototype, r) &&
          (t[r] = $.prototype[r]);
      return t;
    })(e);
}
($.prototype.clearTimeout = function () {
  return (
    clearTimeout(this._timer),
    clearTimeout(this._responseTimeoutTimer),
    clearTimeout(this._uploadTimeoutTimer),
    delete this._timer,
    delete this._responseTimeoutTimer,
    delete this._uploadTimeoutTimer,
    this
  );
}),
  ($.prototype.parse = function (e) {
    return (this._parser = e), this;
  }),
  ($.prototype.responseType = function (e) {
    return (this._responseType = e), this;
  }),
  ($.prototype.serialize = function (e) {
    return (this._serializer = e), this;
  }),
  ($.prototype.timeout = function (e) {
    if (!e || Ti(e) !== "object")
      return (
        (this._timeout = e),
        (this._responseTimeout = 0),
        (this._uploadTimeout = 0),
        this
      );
    for (var t in e)
      if (Object.prototype.hasOwnProperty.call(e, t))
        switch (t) {
          case "deadline":
            this._timeout = e.deadline;
            break;
          case "response":
            this._responseTimeout = e.response;
            break;
          case "upload":
            this._uploadTimeout = e.upload;
            break;
          default:
            console.warn("Unknown timeout option", t);
        }
    return this;
  }),
  ($.prototype.retry = function (e, t) {
    return (
      (arguments.length !== 0 && e !== !0) || (e = 1),
      e <= 0 && (e = 0),
      (this._maxRetries = e),
      (this._retries = 0),
      (this._retryCallback = t),
      this
    );
  });
var Mo = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
($.prototype._shouldRetry = function (e, t) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
  if (this._retryCallback)
    try {
      var r = this._retryCallback(e, t);
      if (r === !0) return !0;
      if (r === !1) return !1;
    } catch (n) {
      console.error(n);
    }
  return !!(
    (t && t.status && t.status >= 500 && t.status !== 501) ||
    (e &&
      ((e.code && Mo.includes(e.code)) ||
        (e.timeout && e.code === "ECONNABORTED") ||
        e.crossDomain))
  );
}),
  ($.prototype._retry = function () {
    return (
      this.clearTimeout(),
      this.req && ((this.req = null), (this.req = this.request())),
      (this._aborted = !1),
      (this.timedout = !1),
      (this.timedoutError = null),
      this._end()
    );
  }),
  ($.prototype.then = function (e, t) {
    var r = this;
    if (!this._fullfilledPromise) {
      var n = this;
      this._endCalled &&
        console.warn(
          "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"
        ),
        (this._fullfilledPromise = new Promise(function (i, s) {
          n.on("abort", function () {
            if (!(r._maxRetries && r._maxRetries > r._retries))
              if (r.timedout && r.timedoutError) s(r.timedoutError);
              else {
                var u = new Error("Aborted");
                (u.code = "ABORTED"),
                  (u.status = r.status),
                  (u.method = r.method),
                  (u.url = r.url),
                  s(u);
              }
          }),
            n.end(function (u, p) {
              u ? s(u) : i(p);
            });
        }));
    }
    return this._fullfilledPromise.then(e, t);
  }),
  ($.prototype.catch = function (e) {
    return this.then(void 0, e);
  }),
  ($.prototype.use = function (e) {
    return e(this), this;
  }),
  ($.prototype.ok = function (e) {
    if (typeof e != "function") throw new Error("Callback required");
    return (this._okCallback = e), this;
  }),
  ($.prototype._isResponseOK = function (e) {
    return (
      !!e &&
      (this._okCallback
        ? this._okCallback(e)
        : e.status >= 200 && e.status < 300)
    );
  }),
  ($.prototype.get = function (e) {
    return this._header[e.toLowerCase()];
  }),
  ($.prototype.getHeader = $.prototype.get),
  ($.prototype.set = function (e, t) {
    if (Ye(e)) {
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && this.set(r, e[r]);
      return this;
    }
    return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this;
  }),
  ($.prototype.unset = function (e) {
    return delete this._header[e.toLowerCase()], delete this.header[e], this;
  }),
  ($.prototype.field = function (e, t) {
    if (e == null) throw new Error(".field(name, val) name can not be empty");
    if (this._data)
      throw new Error(
        ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
      );
    if (Ye(e)) {
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && this.field(r, e[r]);
      return this;
    }
    if (Array.isArray(t)) {
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && this.field(e, t[n]);
      return this;
    }
    if (t == null) throw new Error(".field(name, val) val can not be empty");
    return (
      typeof t == "boolean" && (t = String(t)),
      this._getFormData().append(e, t),
      this
    );
  }),
  ($.prototype.abort = function () {
    return (
      this._aborted ||
        ((this._aborted = !0),
        this.xhr && this.xhr.abort(),
        this.req && this.req.abort(),
        this.clearTimeout(),
        this.emit("abort")),
      this
    );
  }),
  ($.prototype._auth = function (e, t, r, n) {
    switch (r.type) {
      case "basic":
        this.set(
          "Authorization",
          "Basic ".concat(n("".concat(e, ":").concat(t)))
        );
        break;
      case "auto":
        (this.username = e), (this.password = t);
        break;
      case "bearer":
        this.set("Authorization", "Bearer ".concat(e));
    }
    return this;
  }),
  ($.prototype.withCredentials = function (e) {
    return e === void 0 && (e = !0), (this._withCredentials = e), this;
  }),
  ($.prototype.redirects = function (e) {
    return (this._maxRedirects = e), this;
  }),
  ($.prototype.maxResponseSize = function (e) {
    if (typeof e != "number") throw new TypeError("Invalid argument");
    return (this._maxResponseSize = e), this;
  }),
  ($.prototype.toJSON = function () {
    return {
      method: this.method,
      url: this.url,
      data: this._data,
      headers: this._header,
    };
  }),
  ($.prototype.send = function (e) {
    var t = Ye(e),
      r = this._header["content-type"];
    if (this._formData)
      throw new Error(
        ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
      );
    if (t && !this._data)
      Array.isArray(e)
        ? (this._data = [])
        : this._isHost(e) || (this._data = {});
    else if (e && this._data && this._isHost(this._data))
      throw new Error("Can't merge these send calls");
    if (t && Ye(this._data))
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (this._data[n] = e[n]);
    else
      typeof e == "string"
        ? (r || this.type("form"),
          (r = this._header["content-type"]),
          (this._data =
            r === "application/x-www-form-urlencoded"
              ? this._data
                ? "".concat(this._data, "&").concat(e)
                : e
              : (this._data || "") + e))
        : (this._data = e);
    return !t || this._isHost(e) || r || this.type("json"), this;
  }),
  ($.prototype.sortQuery = function (e) {
    return (this._sort = e === void 0 || e), this;
  }),
  ($.prototype._finalizeQueryString = function () {
    var e = this._query.join("&");
    if (
      (e && (this.url += (this.url.includes("?") ? "&" : "?") + e),
      (this._query.length = 0),
      this._sort)
    ) {
      var t = this.url.indexOf("?");
      if (t >= 0) {
        var r = this.url.slice(t + 1).split("&");
        typeof this._sort == "function" ? r.sort(this._sort) : r.sort(),
          (this.url = this.url.slice(0, t) + "?" + r.join("&"));
      }
    }
  }),
  ($.prototype._appendQueryString = function () {
    console.warn("Unsupported");
  }),
  ($.prototype._timeoutError = function (e, t, r) {
    if (!this._aborted) {
      var n = new Error("".concat(e + t, "ms exceeded"));
      (n.timeout = t),
        (n.code = "ECONNABORTED"),
        (n.errno = r),
        (this.timedout = !0),
        (this.timedoutError = n),
        this.abort(),
        this.callback(n);
    }
  }),
  ($.prototype._setTimeouts = function () {
    var e = this;
    this._timeout &&
      !this._timer &&
      (this._timer = setTimeout(function () {
        e._timeoutError("Timeout of ", e._timeout, "ETIME");
      }, this._timeout)),
      this._responseTimeout &&
        !this._responseTimeoutTimer &&
        (this._responseTimeoutTimer = setTimeout(function () {
          e._timeoutError(
            "Response timeout of ",
            e._responseTimeout,
            "ETIMEDOUT"
          );
        }, this._responseTimeout));
  });
var No = function (e) {
    return e.split(/ *; */).shift();
  },
  Lo = function (e) {
    return e.split(/ *; */).reduce(function (t, r) {
      var n = r.split(/ *= */),
        i = n.shift(),
        s = n.shift();
      return i && s && (t[i] = s), t;
    }, {});
  },
  Bo = function (e) {
    return e.split(/ *, */).reduce(function (t, r) {
      var n = r.split(/ *; */),
        i = n[0].slice(1, -1);
      return (t[n[1].split(/ *= */)[1].slice(1, -1)] = i), t;
    }, {});
  },
  Fo = Me;
function Me(e) {
  if (e)
    return (function (t) {
      for (var r in Me.prototype)
        Object.prototype.hasOwnProperty.call(Me.prototype, r) &&
          (t[r] = Me.prototype[r]);
      return t;
    })(e);
}
function Ho(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return rr(t);
    })(e) ||
    (function (t) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(t))
        return Array.from(t);
    })(e) ||
    (function (t, r) {
      if (t) {
        if (typeof t == "string") return rr(t, r);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (n === "Object" && t.constructor && (n = t.constructor.name),
          n === "Map" || n === "Set")
        )
          return Array.from(t);
        if (
          n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return rr(t, r);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function rr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mr() {
  this._defaults = [];
}
(Me.prototype.get = function (e) {
  return this.header[e.toLowerCase()];
}),
  (Me.prototype._setHeaderProperties = function (e) {
    var t = e["content-type"] || "";
    this.type = No(t);
    var r = Lo(t);
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (this[n] = r[n]);
    this.links = {};
    try {
      e.link && (this.links = Bo(e.link));
    } catch {}
  }),
  (Me.prototype._setStatusProperties = function (e) {
    var t = (e / 100) | 0;
    (this.statusCode = e),
      (this.status = this.statusCode),
      (this.statusType = t),
      (this.info = t === 1),
      (this.ok = t === 2),
      (this.redirect = t === 3),
      (this.clientError = t === 4),
      (this.serverError = t === 5),
      (this.error = (t === 4 || t === 5) && this.toError()),
      (this.created = e === 201),
      (this.accepted = e === 202),
      (this.noContent = e === 204),
      (this.badRequest = e === 400),
      (this.unauthorized = e === 401),
      (this.notAcceptable = e === 406),
      (this.forbidden = e === 403),
      (this.notFound = e === 404),
      (this.unprocessableEntity = e === 422);
  }),
  [
    "use",
    "on",
    "once",
    "set",
    "query",
    "type",
    "accept",
    "auth",
    "withCredentials",
    "sortQuery",
    "retry",
    "ok",
    "redirects",
    "timeout",
    "buffer",
    "serialize",
    "parse",
    "ca",
    "key",
    "pfx",
    "cert",
    "disableTLSCerts",
  ].forEach(function (e) {
    Mr.prototype[e] = function () {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return (
        this._defaults.push({
          fn: e,
          args: r,
        }),
        this
      );
    };
  }),
  (Mr.prototype._setDefaults = function (e) {
    this._defaults.forEach(function (t) {
      e[t.fn].apply(e, Ho(t.args));
    });
  });
for (
  var Et = Mr,
    Pt = ut(function (e, t) {
      function r(h) {
        return (r =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (d) {
                return typeof d;
              }
            : function (d) {
                return d &&
                  typeof Symbol == "function" &&
                  d.constructor === Symbol &&
                  d !== Symbol.prototype
                  ? "symbol"
                  : typeof d;
              })(h);
      }
      var n;
      function i() {}
      typeof window < "u"
        ? (n = window)
        : typeof self > "u"
        ? (console.warn(
            "Using browser-only version of superagent in non-browser environment"
          ),
          (n = void 0))
        : (n = self),
        (e.exports = function (h, d) {
          return typeof d == "function"
            ? new t.Request("GET", h).end(d)
            : arguments.length === 1
            ? new t.Request("GET", h)
            : new t.Request(h, d);
        });
      var s = (t = e.exports);
      (t.Request = b),
        (s.getXHR = function () {
          if (
            n.XMLHttpRequest &&
            (!n.location || n.location.protocol !== "file:" || !n.ActiveXObject)
          )
            return new XMLHttpRequest();
          try {
            return new ActiveXObject("Microsoft.XMLHTTP");
          } catch {}
          try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
          } catch {}
          try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
          } catch {}
          try {
            return new ActiveXObject("Msxml2.XMLHTTP");
          } catch {}
          throw new Error(
            "Browser-only version of superagent could not find XHR"
          );
        });
      var u = "".trim
        ? function (h) {
            return h.trim();
          }
        : function (h) {
            return h.replace(/(^\s*|\s*$)/g, "");
          };
      function p(h) {
        if (!Ye(h)) return h;
        var d = [];
        for (var w in h)
          Object.prototype.hasOwnProperty.call(h, w) && l(d, w, h[w]);
        return d.join("&");
      }
      function l(h, d, w) {
        if (w !== void 0)
          if (w !== null)
            if (Array.isArray(w))
              w.forEach(function (v) {
                l(h, d, v);
              });
            else if (Ye(w))
              for (var O in w)
                Object.prototype.hasOwnProperty.call(w, O) &&
                  l(h, "".concat(d, "[").concat(O, "]"), w[O]);
            else h.push(encodeURI(d) + "=" + encodeURIComponent(w));
          else h.push(encodeURI(d));
      }
      function f(h) {
        for (
          var d, w, O = {}, v = h.split("&"), S = 0, E = v.length;
          S < E;
          ++S
        )
          (w = (d = v[S]).indexOf("=")) === -1
            ? (O[decodeURIComponent(d)] = "")
            : (O[decodeURIComponent(d.slice(0, w))] = decodeURIComponent(
                d.slice(w + 1)
              ));
        return O;
      }
      function g(h) {
        return /[/+]json($|[^-\w])/.test(h);
      }
      function y(h) {
        (this.req = h),
          (this.xhr = this.req.xhr),
          (this.text =
            (this.req.method !== "HEAD" &&
              (this.xhr.responseType === "" ||
                this.xhr.responseType === "text")) ||
            this.xhr.responseType === void 0
              ? this.xhr.responseText
              : null),
          (this.statusText = this.req.xhr.statusText);
        var d = this.xhr.status;
        d === 1223 && (d = 204),
          this._setStatusProperties(d),
          (this.headers = (function (w) {
            for (
              var O, v, S, E, P = w.split(/\r?\n/), I = {}, U = 0, M = P.length;
              U < M;
              ++U
            )
              (O = (v = P[U]).indexOf(":")) !== -1 &&
                ((S = v.slice(0, O).toLowerCase()),
                (E = u(v.slice(O + 1))),
                (I[S] = E));
            return I;
          })(this.xhr.getAllResponseHeaders())),
          (this.header = this.headers),
          (this.header["content-type"] =
            this.xhr.getResponseHeader("content-type")),
          this._setHeaderProperties(this.header),
          this.text === null && h._responseType
            ? (this.body = this.xhr.response)
            : (this.body =
                this.req.method === "HEAD"
                  ? null
                  : this._parseBody(this.text ? this.text : this.xhr.response));
      }
      function b(h, d) {
        var w = this;
        (this._query = this._query || []),
          (this.method = h),
          (this.url = d),
          (this.header = {}),
          (this._header = {}),
          this.on("end", function () {
            var O,
              v = null,
              S = null;
            try {
              S = new y(w);
            } catch (E) {
              return (
                ((v = new Error(
                  "Parser is unable to parse the response"
                )).parse = !0),
                (v.original = E),
                w.xhr
                  ? ((v.rawResponse =
                      w.xhr.responseType === void 0
                        ? w.xhr.responseText
                        : w.xhr.response),
                    (v.status = w.xhr.status ? w.xhr.status : null),
                    (v.statusCode = v.status))
                  : ((v.rawResponse = null), (v.status = null)),
                w.callback(v)
              );
            }
            w.emit("response", S);
            try {
              w._isResponseOK(S) ||
                (O = new Error(
                  S.statusText || S.text || "Unsuccessful HTTP response"
                ));
            } catch (E) {
              O = E;
            }
            O
              ? ((O.original = v),
                (O.response = S),
                (O.status = S.status),
                w.callback(O, S))
              : w.callback(null, S);
          });
      }
      function A(h, d, w) {
        var O = s("DELETE", h);
        return (
          typeof d == "function" && ((w = d), (d = null)),
          d && O.send(d),
          w && O.end(w),
          O
        );
      }
      (s.serializeObject = p),
        (s.parseString = f),
        (s.types = {
          html: "text/html",
          json: "application/json",
          xml: "text/xml",
          urlencoded: "application/x-www-form-urlencoded",
          form: "application/x-www-form-urlencoded",
          "form-data": "application/x-www-form-urlencoded",
        }),
        (s.serialize = {
          "application/x-www-form-urlencoded": p,
          "application/json": ko,
        }),
        (s.parse = {
          "application/x-www-form-urlencoded": f,
          "application/json": JSON.parse,
        }),
        Fo(y.prototype),
        (y.prototype._parseBody = function (h) {
          var d = s.parse[this.type];
          return this.req._parser
            ? this.req._parser(this, h)
            : (!d && g(this.type) && (d = s.parse["application/json"]),
              d && h && (h.length > 0 || h instanceof Object) ? d(h) : null);
        }),
        (y.prototype.toError = function () {
          var h = this.req,
            d = h.method,
            w = h.url,
            O = "cannot "
              .concat(d, " ")
              .concat(w, " (")
              .concat(this.status, ")"),
            v = new Error(O);
          return (v.status = this.status), (v.method = d), (v.url = w), v;
        }),
        (s.Response = y),
        Io(b.prototype),
        qo(b.prototype),
        (b.prototype.type = function (h) {
          return this.set("Content-Type", s.types[h] || h), this;
        }),
        (b.prototype.accept = function (h) {
          return this.set("Accept", s.types[h] || h), this;
        }),
        (b.prototype.auth = function (h, d, w) {
          arguments.length === 1 && (d = ""),
            r(d) === "object" && d !== null && ((w = d), (d = "")),
            w ||
              (w = {
                type: typeof btoa == "function" ? "basic" : "auto",
              });
          var O = function (v) {
            if (typeof btoa == "function") return btoa(v);
            throw new Error("Cannot use basic auth, btoa is not a function");
          };
          return this._auth(h, d, w, O);
        }),
        (b.prototype.query = function (h) {
          return (
            typeof h != "string" && (h = p(h)), h && this._query.push(h), this
          );
        }),
        (b.prototype.attach = function (h, d, w) {
          if (d) {
            if (this._data)
              throw new Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(h, d, w || d.name);
          }
          return this;
        }),
        (b.prototype._getFormData = function () {
          return (
            this._formData || (this._formData = new n.FormData()),
            this._formData
          );
        }),
        (b.prototype.callback = function (h, d) {
          if (this._shouldRetry(h, d)) return this._retry();
          var w = this._callback;
          this.clearTimeout(),
            h &&
              (this._maxRetries && (h.retries = this._retries - 1),
              this.emit("error", h)),
            w(h, d);
        }),
        (b.prototype.crossDomainError = function () {
          var h = new Error(`Request has been terminated
Possible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.`);
          (h.crossDomain = !0),
            (h.status = this.status),
            (h.method = this.method),
            (h.url = this.url),
            this.callback(h);
        }),
        (b.prototype.agent = function () {
          return (
            console.warn(
              "This is not supported in browser version of superagent"
            ),
            this
          );
        }),
        (b.prototype.ca = b.prototype.agent),
        (b.prototype.buffer = b.prototype.ca),
        (b.prototype.write = function () {
          throw new Error(
            "Streaming is not supported in browser version of superagent"
          );
        }),
        (b.prototype.pipe = b.prototype.write),
        (b.prototype._isHost = function (h) {
          return (
            h &&
            r(h) === "object" &&
            !Array.isArray(h) &&
            Object.prototype.toString.call(h) !== "[object Object]"
          );
        }),
        (b.prototype.end = function (h) {
          this._endCalled &&
            console.warn(
              "Warning: .end() was called twice. This is not supported in superagent"
            ),
            (this._endCalled = !0),
            (this._callback = h || i),
            this._finalizeQueryString(),
            this._end();
        }),
        (b.prototype._setUploadTimeout = function () {
          var h = this;
          this._uploadTimeout &&
            !this._uploadTimeoutTimer &&
            (this._uploadTimeoutTimer = setTimeout(function () {
              h._timeoutError(
                "Upload timeout of ",
                h._uploadTimeout,
                "ETIMEDOUT"
              );
            }, this._uploadTimeout));
        }),
        (b.prototype._end = function () {
          if (this._aborted)
            return this.callback(
              new Error(
                "The request has been aborted even before .end() was called"
              )
            );
          var h = this;
          this.xhr = s.getXHR();
          var d = this.xhr,
            w = this._formData || this._data;
          this._setTimeouts(),
            (d.onreadystatechange = function () {
              var P = d.readyState;
              if (
                (P >= 2 &&
                  h._responseTimeoutTimer &&
                  clearTimeout(h._responseTimeoutTimer),
                P === 4)
              ) {
                var I;
                try {
                  I = d.status;
                } catch {
                  I = 0;
                }
                if (!I)
                  return h.timedout || h._aborted
                    ? void 0
                    : h.crossDomainError();
                h.emit("end");
              }
            });
          var O = function (P, I) {
            I.total > 0 &&
              ((I.percent = (I.loaded / I.total) * 100),
              I.percent === 100 && clearTimeout(h._uploadTimeoutTimer)),
              (I.direction = P),
              h.emit("progress", I);
          };
          if (this.hasListeners("progress"))
            try {
              d.addEventListener("progress", O.bind(null, "download")),
                d.upload &&
                  d.upload.addEventListener("progress", O.bind(null, "upload"));
            } catch {}
          d.upload && this._setUploadTimeout();
          try {
            this.username && this.password
              ? d.open(this.method, this.url, !0, this.username, this.password)
              : d.open(this.method, this.url, !0);
          } catch (P) {
            return this.callback(P);
          }
          if (
            (this._withCredentials && (d.withCredentials = !0),
            !this._formData &&
              this.method !== "GET" &&
              this.method !== "HEAD" &&
              typeof w != "string" &&
              !this._isHost(w))
          ) {
            var v = this._header["content-type"],
              S = this._serializer || s.serialize[v ? v.split(";")[0] : ""];
            !S && g(v) && (S = s.serialize["application/json"]),
              S && (w = S(w));
          }
          for (var E in this.header)
            this.header[E] !== null &&
              Object.prototype.hasOwnProperty.call(this.header, E) &&
              d.setRequestHeader(E, this.header[E]);
          this._responseType && (d.responseType = this._responseType),
            this.emit("request", this),
            d.send(w === void 0 ? null : w);
        }),
        (s.agent = function () {
          return new Et();
        }),
        ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (
          h
        ) {
          Et.prototype[h.toLowerCase()] = function (d, w) {
            var O = new s.Request(h, d);
            return this._setDefaults(O), w && O.end(w), O;
          };
        }),
        (Et.prototype.del = Et.prototype.delete),
        (s.get = function (h, d, w) {
          var O = s("GET", h);
          return (
            typeof d == "function" && ((w = d), (d = null)),
            d && O.query(d),
            w && O.end(w),
            O
          );
        }),
        (s.head = function (h, d, w) {
          var O = s("HEAD", h);
          return (
            typeof d == "function" && ((w = d), (d = null)),
            d && O.query(d),
            w && O.end(w),
            O
          );
        }),
        (s.options = function (h, d, w) {
          var O = s("OPTIONS", h);
          return (
            typeof d == "function" && ((w = d), (d = null)),
            d && O.send(d),
            w && O.end(w),
            O
          );
        }),
        (s.del = A),
        (s.delete = A),
        (s.patch = function (h, d, w) {
          var O = s("PATCH", h);
          return (
            typeof d == "function" && ((w = d), (d = null)),
            d && O.send(d),
            w && O.end(w),
            O
          );
        }),
        (s.post = function (h, d, w) {
          var O = s("POST", h);
          return (
            typeof d == "function" && ((w = d), (d = null)),
            d && O.send(d),
            w && O.end(w),
            O
          );
        }),
        (s.put = function (h, d, w) {
          var O = s("PUT", h);
          return (
            typeof d == "function" && ((w = d), (d = null)),
            d && O.send(d),
            w && O.end(w),
            O
          );
        });
    }),
    $o =
      (Pt.Request,
      function (e) {
        var t = bn(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
    jo = function (e) {
      var t,
        r,
        n = bn(e),
        i = n[0],
        s = n[1],
        u = new zo(
          (function (f, g, y) {
            return (3 * (g + y)) / 4 - y;
          })(0, i, s)
        ),
        p = 0,
        l = s > 0 ? i - 4 : i;
      for (r = 0; r < l; r += 4)
        (t =
          (ue[e.charCodeAt(r)] << 18) |
          (ue[e.charCodeAt(r + 1)] << 12) |
          (ue[e.charCodeAt(r + 2)] << 6) |
          ue[e.charCodeAt(r + 3)]),
          (u[p++] = (t >> 16) & 255),
          (u[p++] = (t >> 8) & 255),
          (u[p++] = 255 & t);
      return (
        s === 2 &&
          ((t = (ue[e.charCodeAt(r)] << 2) | (ue[e.charCodeAt(r + 1)] >> 4)),
          (u[p++] = 255 & t)),
        s === 1 &&
          ((t =
            (ue[e.charCodeAt(r)] << 10) |
            (ue[e.charCodeAt(r + 1)] << 4) |
            (ue[e.charCodeAt(r + 2)] >> 2)),
          (u[p++] = (t >> 8) & 255),
          (u[p++] = 255 & t)),
        u
      );
    },
    Wo = function (e) {
      for (
        var t, r = e.length, n = r % 3, i = [], s = 0, u = r - n;
        s < u;
        s += 16383
      )
        i.push(Jo(e, s, s + 16383 > u ? u : s + 16383));
      return (
        n === 1
          ? ((t = e[r - 1]), i.push(de[t >> 2] + de[(t << 4) & 63] + "=="))
          : n === 2 &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            i.push(de[t >> 10] + de[(t >> 4) & 63] + de[(t << 2) & 63] + "=")),
        i.join("")
      );
    },
    de = [],
    ue = [],
    zo = typeof Uint8Array < "u" ? Uint8Array : Array,
    nr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    je = 0,
    Vo = nr.length;
  je < Vo;
  ++je
)
  (de[je] = nr[je]), (ue[nr.charCodeAt(je)] = je);
function bn(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  return r === -1 && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
}
function Jo(e, t, r) {
  for (var n, i, s = [], u = t; u < r; u += 3)
    (n =
      ((e[u] << 16) & 16711680) + ((e[u + 1] << 8) & 65280) + (255 & e[u + 2])),
      s.push(
        de[((i = n) >> 18) & 63] +
          de[(i >> 12) & 63] +
          de[(i >> 6) & 63] +
          de[63 & i]
      );
  return s.join("");
}
(ue["-".charCodeAt(0)] = 62), (ue["_".charCodeAt(0)] = 63);
var _n = {
    byteLength: $o,
    toByteArray: jo,
    fromByteArray: Wo,
  },
  Go = {
    encode: function (e) {
      return _n
        .fromByteArray(
          (function (t) {
            for (var r = new Array(t.length), n = 0; n < t.length; n++)
              r[n] = t.charCodeAt(n);
            return r;
          })(e)
        )
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
    },
    decode: function (e) {
      return (
        (e = (function (t) {
          var r = t.length % 4;
          return r === 0 ? t : t + new Array(1 + (4 - r)).join("=");
        })(e)
          .replace(/-/g, "+")
          .replace(/_/g, "/")),
        (function (t) {
          for (var r = "", n = 0; n < t.length; n++)
            r += String.fromCharCode(t[n]);
          return r;
        })(_n.toByteArray(e))
      );
    },
  },
  Mt = {
    raw: "9.20.0",
  },
  Xo = Object.prototype.toString;
function On(e, t, r, n) {
  if (((r = r === "array" ? "object" : r), e && typeof e[t] !== r))
    throw new Error(n);
}
function Tn(e, t, r) {
  if (typeof e !== t) throw new Error(r);
}
function Sn(e, t, r) {
  if (t.indexOf(e) === -1) throw new Error(r);
}
var B = {
  check: function (e, t, r) {
    if (
      ((t.optional && !e) || Tn(e, t.type, t.message), t.type === "object" && r)
    )
      for (var n = Object.keys(r), i = 0; i < n.length; i++) {
        var s = n[i];
        (r[s].optional && !e[s]) ||
          (r[s].condition && !r[s].condition(e)) ||
          (On(e, s, r[s].type, r[s].message),
          r[s].values && Sn(e[s], r[s].values, r[s].value_message));
      }
  },
  attribute: On,
  variable: Tn,
  value: Sn,
  isArray: function (e) {
    return this.supportsIsArray()
      ? Array.isArray(e)
      : Xo.call(e) === "[object Array]";
  },
  supportsIsArray: function () {
    return Array.isArray != null;
  },
};
function An(e) {
  if (e == null) throw new TypeError("Cannot convert first argument to object");
  for (var t = Object(e), r = 1; r < arguments.length; r++) {
    var n = arguments[r];
    if (n != null)
      for (var i = Object.keys(Object(n)), s = 0, u = i.length; s < u; s++) {
        var p = i[s],
          l = Object.getOwnPropertyDescriptor(n, p);
        l !== void 0 && l.enumerable && (t[p] = n[p]);
      }
  }
  return t;
}
var Qo = {
  get: function () {
    return Object.assign ? Object.assign : An;
  },
  objectAssignPolyfill: An,
};
function ir(e, t) {
  return t.reduce(function (r, n) {
    return e[n] && (r[n] = e[n]), r;
  }, {});
}
function Ko(e) {
  var t = [];
  for (var r in e) t.push(e[r]);
  return t;
}
function Nr() {
  var e = Ko(arguments);
  return e.unshift({}), Qo.get().apply(void 0, e);
}
function En(e) {
  var t = e.match(
    /^(https?:|file:|chrome-extension:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
  );
  return (
    t && {
      href: e,
      protocol: t[1],
      host: t[2],
      hostname: t[3],
      port: t[4],
      pathname: t[5],
      search: t[6],
      hash: t[7],
    }
  );
}
function Zo(e, t) {
  var r = Nr(e);
  return e[t] && (r[t] = e[t].trim()), r;
}
var D = {
  toSnakeCase: function e(t, r) {
    return typeof t != "object" || B.isArray(t) || t === null
      ? t
      : ((r = r || []),
        Object.keys(t).reduce(function (n, i) {
          return (
            (n[
              r.indexOf(i) === -1
                ? (function (s) {
                    for (var u, p = "", l = 0, f = !0, g = !0; l < s.length; )
                      (u = s.charCodeAt(l)),
                        ((!g && u >= 65 && u <= 90) ||
                          (!f && u >= 48 && u <= 57)) &&
                          (p += "_"),
                        (p += s[l].toLowerCase()),
                        (f = u >= 48 && u <= 57),
                        (g = u >= 65 && u <= 90),
                        l++;
                    return p;
                  })(i)
                : i
            ] = e(t[i])),
            n
          );
        }, {}));
  },
  toCamelCase: function e(t, r, n) {
    return typeof t != "object" || B.isArray(t) || t === null
      ? t
      : ((r = r || []),
        (n = n || {}),
        Object.keys(t).reduce(function (i, s) {
          var u,
            p =
              r.indexOf(s) === -1
                ? (u = s.split("_")).reduce(function (l, f) {
                    return l + f.charAt(0).toUpperCase() + f.slice(1);
                  }, u.shift())
                : s;
          return (
            (i[p] = e(t[p] || t[s], [], n)),
            n.keepOriginal && (i[s] = e(t[s], [], n)),
            i
          );
        }, {}));
  },
  blacklist: function (e, t) {
    return Object.keys(e).reduce(function (r, n) {
      return t.indexOf(n) === -1 && (r[n] = e[n]), r;
    }, {});
  },
  merge: function (e, t) {
    return {
      base: t ? ir(e, t) : e,
      with: function (r, n) {
        return (r = n ? ir(r, n) : r), Nr(this.base, r);
      },
    };
  },
  pick: ir,
  getKeysNotIn: function (e, t) {
    var r = [];
    for (var n in e) t.indexOf(n) === -1 && r.push(n);
    return r;
  },
  extend: Nr,
  getOriginFromUrl: function (e) {
    if (e) {
      var t = En(e);
      if (!t) return null;
      var r = t.protocol + "//" + t.hostname;
      return t.port && (r += ":" + t.port), r;
    }
  },
  getLocationFromUrl: En,
  trimUserDetails: function (e) {
    return (function (t, r) {
      return r.reduce(Zo, t);
    })(e, ["username", "email", "phoneNumber"]);
  },
  updatePropertyOn: function e(t, r, n) {
    typeof r == "string" && (r = r.split("."));
    var i = r[0];
    t.hasOwnProperty(i) &&
      (r.length === 1 ? (t[i] = n) : e(t[i], r.slice(1), n));
  },
};
function We(e) {
  (this.request = e),
    (this.method = e.method),
    (this.url = e.url),
    (this.body = e._data),
    (this.headers = e._header);
}
function Pe(e) {
  this.request = e;
}
function we(e) {
  (this._sendTelemetry = e._sendTelemetry !== !1 || e._sendTelemetry),
    (this._telemetryInfo = e._telemetryInfo || null),
    (this._timesToRetryFailedRequests = e._timesToRetryFailedRequests),
    (this.headers = e.headers || {}),
    (this._universalLoginPage = e.universalLoginPage);
}
function Ct() {
  return window;
}
(We.prototype.abort = function () {
  this.request.abort();
}),
  (We.prototype.getMethod = function () {
    return this.method;
  }),
  (We.prototype.getBody = function () {
    return this.body;
  }),
  (We.prototype.getUrl = function () {
    return this.url;
  }),
  (We.prototype.getHeaders = function () {
    return this.headers;
  }),
  (Pe.prototype.set = function (e, t) {
    return (this.request = this.request.set(e, t)), this;
  }),
  (Pe.prototype.send = function (e) {
    return (this.request = this.request.send(D.trimUserDetails(e))), this;
  }),
  (Pe.prototype.withCredentials = function () {
    return (this.request = this.request.withCredentials()), this;
  }),
  (Pe.prototype.end = function (e) {
    return this.request.end(e), new We(this.request);
  }),
  (we.prototype.setCommonConfiguration = function (e, t) {
    if (
      ((t = t || {}),
      this._timesToRetryFailedRequests > 0 &&
        (e = e.retry(this._timesToRetryFailedRequests)),
      t.noHeaders)
    )
      return e;
    var r = this.headers;
    (e = e.set("Content-Type", "application/json")),
      t.xRequestLanguage &&
        (e = e.set("X-Request-Language", t.xRequestLanguage));
    for (var n = Object.keys(this.headers), i = 0; i < n.length; i++)
      e = e.set(n[i], r[n[i]]);
    return (
      this._sendTelemetry &&
        (e = e.set("Auth0-Client", this.getTelemetryData())),
      e
    );
  }),
  (we.prototype.getTelemetryData = function () {
    var e = this._universalLoginPage ? "auth0.js-ulp" : "auth0.js",
      t = {
        name: e,
        version: Mt.raw,
      };
    this._telemetryInfo &&
      (((t = D.extend({}, this._telemetryInfo)).env = D.extend(
        {},
        this._telemetryInfo.env
      )),
      (t.env[e] = Mt.raw));
    var r = JSON.stringify(t);
    return Go.encode(r);
  }),
  (we.prototype.get = function (e, t) {
    return new Pe(this.setCommonConfiguration(Pt.get(e), t));
  }),
  (we.prototype.post = function (e, t) {
    return new Pe(this.setCommonConfiguration(Pt.post(e), t));
  }),
  (we.prototype.patch = function (e, t) {
    return new Pe(this.setCommonConfiguration(Pt.patch(e), t));
  });
var j = {
  redirect: function (e) {
    Ct().location = e;
  },
  getDocument: function () {
    return Ct().document;
  },
  getWindow: Ct,
  getOrigin: function () {
    var e = Ct().location,
      t = e.origin;
    return t || (t = D.getOriginFromUrl(e.href)), t;
  },
};
function gt() {}
(gt.prototype.getItem = function () {
  return null;
}),
  (gt.prototype.removeItem = function () {}),
  (gt.prototype.setItem = function () {});
var ze = ut(function (e, t) {
  var r;
  (r = function () {
    function n() {
      for (var s = 0, u = {}; s < arguments.length; s++) {
        var p = arguments[s];
        for (var l in p) u[l] = p[l];
      }
      return u;
    }
    function i(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function s(u) {
      function p() {}
      function l(g, y, b) {
        if (typeof document < "u") {
          typeof (b = n(
            {
              path: "/",
            },
            p.defaults,
            b
          )).expires == "number" &&
            (b.expires = new Date(1 * new Date() + 864e5 * b.expires)),
            (b.expires = b.expires ? b.expires.toUTCString() : "");
          try {
            var A = JSON.stringify(y);
            /^[\{\[]/.test(A) && (y = A);
          } catch {}
          (y = u.write
            ? u.write(y, g)
            : encodeURIComponent(String(y)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (g = encodeURIComponent(String(g))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var h = "";
          for (var d in b)
            b[d] &&
              ((h += "; " + d), b[d] !== !0 && (h += "=" + b[d].split(";")[0]));
          return (document.cookie = g + "=" + y + h);
        }
      }
      function f(g, y) {
        if (typeof document < "u") {
          for (
            var b = {},
              A = document.cookie ? document.cookie.split("; ") : [],
              h = 0;
            h < A.length;
            h++
          ) {
            var d = A[h].split("="),
              w = d.slice(1).join("=");
            y || w.charAt(0) !== '"' || (w = w.slice(1, -1));
            try {
              var O = i(d[0]);
              if (((w = (u.read || u)(w, O) || i(w)), y))
                try {
                  w = JSON.parse(w);
                } catch {}
              if (((b[O] = w), g === O)) break;
            } catch {}
          }
          return g ? b[g] : b;
        }
      }
      return (
        (p.set = l),
        (p.get = function (g) {
          return f(g, !1);
        }),
        (p.getJSON = function (g) {
          return f(g, !0);
        }),
        (p.remove = function (g, y) {
          l(
            g,
            "",
            n(y, {
              expires: -1,
            })
          );
        }),
        (p.defaults = {}),
        (p.withConverter = s),
        p
      );
    })(function () {});
  }),
    (e.exports = r());
});
function or(e) {
  return "_" + e + "_compat";
}
function Qe(e) {
  this._options = e || {};
}
function Le(e) {
  this.disableWarnings = e.disableWarnings;
}
function yt(e) {
  if (
    ((this.warn = new Le({})),
    (this.storage = new Qe(e)),
    e.__tryLocalStorageFirst === !0)
  )
    try {
      var t = j.getWindow().localStorage;
      t && (this.storage = t);
    } catch (r) {
      this.warn.warning(r),
        this.warn.warning(
          "Can't use localStorage. Using CookieStorage instead."
        );
    }
}
function ot(e) {
  this.handler = new yt(e);
}
function Nt(e) {
  this.storage = new ot(e);
}
function Cn(e, t) {
  return {
    error: e,
    errorDescription: t,
  };
}
(Qe.prototype.getItem = function (e) {
  return ze.get(e) || ze.get(or(e));
}),
  (Qe.prototype.removeItem = function (e) {
    ze.remove(e), ze.remove(or(e));
  }),
  (Qe.prototype.setItem = function (e, t, r) {
    var n = D.extend(
      {
        expires: 1,
      },
      r
    );
    if (
      j.getWindow().location.protocol === "https:" &&
      ((n.secure = !0),
      (n.sameSite = "none"),
      this._options.legacySameSiteCookie)
    ) {
      var i = D.blacklist(n, ["sameSite"]);
      ze.set(or(e), t, i);
    }
    ze.set(e, t, n);
  }),
  (Le.prototype.warning = function (e) {
    this.disableWarnings || console.warn(e);
  }),
  (yt.prototype.failover = function () {
    this.storage instanceof gt
      ? this.warn.warning("DummyStorage: ignore failover")
      : this.storage instanceof Qe
      ? (this.warn.warning("CookieStorage: failing over DummyStorage"),
        (this.storage = new gt()))
      : (this.warn.warning("LocalStorage: failing over CookieStorage"),
        (this.storage = new Qe()));
  }),
  (yt.prototype.getItem = function (e) {
    try {
      return this.storage.getItem(e);
    } catch (t) {
      return this.warn.warning(t), this.failover(), this.getItem(e);
    }
  }),
  (yt.prototype.removeItem = function (e) {
    try {
      return this.storage.removeItem(e);
    } catch (t) {
      return this.warn.warning(t), this.failover(), this.removeItem(e);
    }
  }),
  (yt.prototype.setItem = function (e, t, r) {
    try {
      return this.storage.setItem(e, t, r);
    } catch (n) {
      return this.warn.warning(n), this.failover(), this.setItem(e, t, r);
    }
  }),
  (ot.prototype.getItem = function (e) {
    var t = this.handler.getItem(e);
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }),
  (ot.prototype.removeItem = function (e) {
    return this.handler.removeItem(e);
  }),
  (ot.prototype.setItem = function (e, t, r) {
    var n = JSON.stringify(t);
    return this.handler.setItem(e, n, r);
  }),
  (Nt.prototype.set = function (e, t) {
    var r = {
      lastUsedConnection: e,
      lastUsedSub: t,
    };
    this.storage.setItem("auth0.ssodata", JSON.stringify(r));
  }),
  (Nt.prototype.get = function () {
    var e = this.storage.getItem("auth0.ssodata");
    if (e) return JSON.parse(e);
  });
var Te = {
  buildResponse: Cn,
  invalidToken: function (e) {
    return Cn("invalid_token", e);
  },
};
function Z(e, t) {
  return (
    ((t = t || {}).ignoreCasing = !!t.ignoreCasing && t.ignoreCasing),
    function (r, n) {
      var i;
      return r || n
        ? (!r && n.err && ((r = n.err), (n = null)),
          !r && n.error && ((r = n), (n = null)),
          r
            ? ((i = {
                original: r,
              }),
              D.updatePropertyOn(
                i,
                "original.response.req._data.password",
                "*****"
              ),
              r.response &&
                r.response.statusCode &&
                (i.statusCode = r.response.statusCode),
              r.response &&
                r.response.statusText &&
                (i.statusText = r.response.statusText),
              r.response && r.response.body && (r = r.response.body),
              r.err && (r = r.err),
              (i.code = r.code || r.error || r.error_code || r.status || null),
              (i.description =
                r.errorDescription ||
                r.error_description ||
                r.description ||
                r.error ||
                r.details ||
                r.err ||
                null),
              t.forceLegacyError &&
                ((i.error = i.code), (i.error_description = i.description)),
              r.error_codes &&
                r.error_details &&
                (i.errorDetails = {
                  codes: r.error_codes,
                  details: r.error_details,
                }),
              r.name && (i.name = r.name),
              r.policy && (i.policy = r.policy),
              e(i))
            : !n.type || (n.type !== "text/html" && n.type !== "text/plain")
            ? t.ignoreCasing
              ? e(null, n.body || n)
              : e(
                  null,
                  D.toCamelCase(n.body || n, [], {
                    keepOriginal: t.keepOriginalCasing,
                  })
                )
            : e(null, n.text))
        : e(Te.buildResponse("generic_error", "Something went wrong"));
    }
  );
}
var Yo = [
    "realm",
    "audience",
    "otp",
    "client_id",
    "client_secret",
    "redirect_uri",
    "scope",
    "code",
    "grant_type",
    "username",
    "password",
    "refresh_token",
    "assertion",
    "client_assertion",
    "client_assertion_type",
    "code_verifier",
  ],
  es = [
    "connection",
    "connection_scope",
    "auth0Client",
    "owp",
    "device",
    "realm",
    "organization",
    "invitation",
    "protocol",
    "_csrf",
    "_intstate",
    "login_ticket",
    "client_id",
    "response_type",
    "response_mode",
    "redirect_uri",
    "audience",
    "scope",
    "state",
    "nonce",
    "display",
    "prompt",
    "screen_hint",
    "max_age",
    "ui_locales",
    "claims_locales",
    "id_token_hint",
    "login_hint",
    "acr_values",
    "claims",
    "registration",
    "request",
    "request_uri",
    "code_challenge",
    "code_challenge_method",
    "access_type",
    "display",
  ],
  xn = {
    oauthTokenParams: function (e, t) {
      return D.pick(t, Yo);
    },
    oauthAuthorizeParams: function (e, t) {
      var r = D.getKeysNotIn(t, es);
      return (
        r.length > 0 &&
          e.warning(
            "Following parameters are not allowed on the `/authorize` endpoint: [" +
              r.join(",") +
              "]"
          ),
        t
      );
    },
  },
  Ne =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
function Be(e) {
  var t = {
    exports: {},
  };
  return e(t, t.exports), t.exports;
}
var ts = Be(function (e, t) {
    e.exports = (function () {
      function r(o) {
        return typeof o == "function";
      }
      var n = Array.isArray
          ? Array.isArray
          : function (o) {
              return Object.prototype.toString.call(o) === "[object Array]";
            },
        i = 0,
        s = void 0,
        u = void 0,
        p = function (o, c) {
          (h[i] = o), (h[i + 1] = c), (i += 2) === 2 && (u ? u(d) : E());
        },
        l = typeof window < "u" ? window : void 0,
        f = l || {},
        g = f.MutationObserver || f.WebKitMutationObserver,
        y =
          typeof self > "u" &&
          typeof process < "u" &&
          {}.toString.call(process) === "[object process]",
        b =
          typeof Uint8ClampedArray < "u" &&
          typeof importScripts < "u" &&
          typeof MessageChannel < "u";
      function A() {
        var o = setTimeout;
        return function () {
          return o(d, 1);
        };
      }
      var h = new Array(1e3);
      function d() {
        for (var o = 0; o < i; o += 2)
          (0, h[o])(h[o + 1]), (h[o] = void 0), (h[o + 1] = void 0);
        i = 0;
      }
      var w,
        O,
        v,
        S,
        E = void 0;
      function P(o, c) {
        var m = this,
          _ = new this.constructor(M);
        _[U] === void 0 && Y(_);
        var T = m._state;
        if (T) {
          var C = arguments[T - 1];
          p(function () {
            return He(T, _, C, m._result);
          });
        } else J(m, _, o, c);
        return _;
      }
      function I(o) {
        if (o && typeof o == "object" && o.constructor === this) return o;
        var c = new this(M);
        return F(c, o), c;
      }
      E = y
        ? function () {
            return process.nextTick(d);
          }
        : g
        ? ((O = 0),
          (v = new g(d)),
          (S = document.createTextNode("")),
          v.observe(S, {
            characterData: !0,
          }),
          function () {
            S.data = O = ++O % 2;
          })
        : b
        ? (((w = new MessageChannel()).port1.onmessage = d),
          function () {
            return w.port2.postMessage(0);
          })
        : l === void 0
        ? (function () {
            try {
              var o = Function("return this")().require("vertx");
              return (s = o.runOnLoop || o.runOnContext) !== void 0
                ? function () {
                    s(d);
                  }
                : A();
            } catch {
              return A();
            }
          })()
        : A();
      var U = Math.random().toString(36).substring(2);
      function M() {}
      var L = void 0;
      function k(o, c, m) {
        c.constructor === o.constructor &&
        m === P &&
        c.constructor.resolve === I
          ? (function (_, T) {
              T._state === 1
                ? N(_, T._result)
                : T._state === 2
                ? q(_, T._result)
                : J(
                    T,
                    void 0,
                    function (C) {
                      return F(_, C);
                    },
                    function (C) {
                      return q(_, C);
                    }
                  );
            })(o, c)
          : m === void 0
          ? N(o, c)
          : r(m)
          ? (function (_, T, C) {
              p(function (R) {
                var H = !1,
                  W = (function (G, oe, xe, re) {
                    try {
                      G.call(
                        oe,
                        function (se) {
                          H || ((H = !0), T !== se ? F(R, se) : N(R, se));
                        },
                        function (se) {
                          H || ((H = !0), q(R, se));
                        }
                      );
                    } catch (se) {
                      return se;
                    }
                  })(C, T);
                !H && W && ((H = !0), q(R, W));
              }, _);
            })(o, c, m)
          : N(o, c);
      }
      function F(o, c) {
        if (o === c)
          q(o, new TypeError("You cannot resolve a promise with itself"));
        else if (
          ((T = typeof (_ = c)),
          _ === null || (T !== "object" && T !== "function"))
        )
          N(o, c);
        else {
          var m = void 0;
          try {
            m = c.then;
          } catch (C) {
            return void q(o, C);
          }
          k(o, c, m);
        }
        var _, T;
      }
      function x(o) {
        o._onerror && o._onerror(o._result), pe(o);
      }
      function N(o, c) {
        o._state === L &&
          ((o._result = c),
          (o._state = 1),
          o._subscribers.length !== 0 && p(pe, o));
      }
      function q(o, c) {
        o._state === L && ((o._state = 2), (o._result = c), p(x, o));
      }
      function J(o, c, m, _) {
        var T = o._subscribers,
          C = T.length;
        (o._onerror = null),
          (T[C] = c),
          (T[C + 1] = m),
          (T[C + 2] = _),
          C === 0 && o._state && p(pe, o);
      }
      function pe(o) {
        var c = o._subscribers,
          m = o._state;
        if (c.length !== 0) {
          for (
            var _ = void 0, T = void 0, C = o._result, R = 0;
            R < c.length;
            R += 3
          )
            (T = c[R + m]), (_ = c[R]) ? He(m, _, T, C) : T(C);
          o._subscribers.length = 0;
        }
      }
      function He(o, c, m, _) {
        var T = r(m),
          C = void 0,
          R = void 0,
          H = !0;
        if (T) {
          try {
            C = m(_);
          } catch (W) {
            (H = !1), (R = W);
          }
          if (c === C)
            return void q(
              c,
              new TypeError(
                "A promises callback cannot return that same promise."
              )
            );
        } else C = _;
        c._state !== L ||
          (T && H
            ? F(c, C)
            : H === !1
            ? q(c, R)
            : o === 1
            ? N(c, C)
            : o === 2 && q(c, C));
      }
      var _e = 0;
      function Y(o) {
        (o[U] = _e++),
          (o._state = void 0),
          (o._result = void 0),
          (o._subscribers = []);
      }
      var pt = (function () {
          function o(c, m) {
            (this._instanceConstructor = c),
              (this.promise = new c(M)),
              this.promise[U] || Y(this.promise),
              n(m)
                ? ((this.length = m.length),
                  (this._remaining = m.length),
                  (this._result = new Array(this.length)),
                  this.length === 0
                    ? N(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(m),
                      this._remaining === 0 && N(this.promise, this._result)))
                : q(
                    this.promise,
                    new Error("Array Methods must be provided an Array")
                  );
          }
          return (
            (o.prototype._enumerate = function (c) {
              for (var m = 0; this._state === L && m < c.length; m++)
                this._eachEntry(c[m], m);
            }),
            (o.prototype._eachEntry = function (c, m) {
              var _ = this._instanceConstructor,
                T = _.resolve;
              if (T === I) {
                var C = void 0,
                  R = void 0,
                  H = !1;
                try {
                  C = c.then;
                } catch (G) {
                  (H = !0), (R = G);
                }
                if (C === P && c._state !== L)
                  this._settledAt(c._state, m, c._result);
                else if (typeof C != "function")
                  this._remaining--, (this._result[m] = c);
                else if (_ === a) {
                  var W = new _(M);
                  H ? q(W, R) : k(W, c, C), this._willSettleAt(W, m);
                } else
                  this._willSettleAt(
                    new _(function (G) {
                      return G(c);
                    }),
                    m
                  );
              } else this._willSettleAt(T(c), m);
            }),
            (o.prototype._settledAt = function (c, m, _) {
              var T = this.promise;
              T._state === L &&
                (this._remaining--, c === 2 ? q(T, _) : (this._result[m] = _)),
                this._remaining === 0 && N(T, this._result);
            }),
            (o.prototype._willSettleAt = function (c, m) {
              var _ = this;
              J(
                c,
                void 0,
                function (T) {
                  return _._settledAt(1, m, T);
                },
                function (T) {
                  return _._settledAt(2, m, T);
                }
              );
            }),
            o
          );
        })(),
        a = (function () {
          function o(c) {
            (this[U] = _e++),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              M !== c &&
                (typeof c != "function" &&
                  (function () {
                    throw new TypeError(
                      "You must pass a resolver function as the first argument to the promise constructor"
                    );
                  })(),
                this instanceof o
                  ? (function (m, _) {
                      try {
                        _(
                          function (T) {
                            F(m, T);
                          },
                          function (T) {
                            q(m, T);
                          }
                        );
                      } catch (T) {
                        q(m, T);
                      }
                    })(this, c)
                  : (function () {
                      throw new TypeError(
                        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                      );
                    })());
          }
          return (
            (o.prototype.catch = function (c) {
              return this.then(null, c);
            }),
            (o.prototype.finally = function (c) {
              var m = this,
                _ = m.constructor;
              return r(c)
                ? m.then(
                    function (T) {
                      return _.resolve(c()).then(function () {
                        return T;
                      });
                    },
                    function (T) {
                      return _.resolve(c()).then(function () {
                        throw T;
                      });
                    }
                  )
                : m.then(c, c);
            }),
            o
          );
        })();
      return (
        (a.prototype.then = P),
        (a.all = function (o) {
          return new pt(this, o).promise;
        }),
        (a.race = function (o) {
          var c = this;
          return n(o)
            ? new c(function (m, _) {
                for (var T = o.length, C = 0; C < T; C++)
                  c.resolve(o[C]).then(m, _);
              })
            : new c(function (m, _) {
                return _(new TypeError("You must pass an array to race."));
              });
        }),
        (a.resolve = I),
        (a.reject = function (o) {
          var c = new this(M);
          return q(c, o), c;
        }),
        (a._setScheduler = function (o) {
          u = o;
        }),
        (a._setAsap = function (o) {
          p = o;
        }),
        (a._asap = p),
        (a.polyfill = function () {
          var o = void 0;
          if (Ne !== void 0) o = Ne;
          else if (typeof self < "u") o = self;
          else
            try {
              o = Function("return this")();
            } catch {
              throw new Error(
                "polyfill failed because global object is unavailable in this environment"
              );
            }
          var c = o.Promise;
          if (c) {
            var m = null;
            try {
              m = Object.prototype.toString.call(c.resolve());
            } catch {}
            if (m === "[object Promise]" && !c.cast) return;
          }
          o.Promise = a;
        }),
        (a.Promise = a),
        a
      );
    })();
  }),
  rs = {
    __proto__: null,
    default: {},
  },
  Gr = Be(function (e, t) {
    var r;
    e.exports = r =
      r ||
      (function (n, i) {
        var s;
        if (
          (typeof window < "u" && window.crypto && (s = window.crypto),
          typeof self < "u" && self.crypto && (s = self.crypto),
          typeof globalThis < "u" &&
            globalThis.crypto &&
            (s = globalThis.crypto),
          !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto),
          !s && Ne !== void 0 && Ne.crypto && (s = Ne.crypto),
          !s)
        )
          try {
            s = rs;
          } catch {}
        var u = function () {
            if (s) {
              if (typeof s.getRandomValues == "function")
                try {
                  return s.getRandomValues(new Uint32Array(1))[0];
                } catch {}
              if (typeof s.randomBytes == "function")
                try {
                  return s.randomBytes(4).readInt32LE();
                } catch {}
            }
            throw new Error(
              "Native crypto module could not be used to get secure random number."
            );
          },
          p =
            Object.create ||
            (function () {
              function v() {}
              return function (S) {
                var E;
                return (
                  (v.prototype = S), (E = new v()), (v.prototype = null), E
                );
              };
            })(),
          l = {},
          f = (l.lib = {}),
          g = (f.Base = {
            extend: function (v) {
              var S = p(this);
              return (
                v && S.mixIn(v),
                (S.hasOwnProperty("init") && this.init !== S.init) ||
                  (S.init = function () {
                    S.$super.init.apply(this, arguments);
                  }),
                (S.init.prototype = S),
                (S.$super = this),
                S
              );
            },
            create: function () {
              var v = this.extend();
              return v.init.apply(v, arguments), v;
            },
            init: function () {},
            mixIn: function (v) {
              for (var S in v) v.hasOwnProperty(S) && (this[S] = v[S]);
              v.hasOwnProperty("toString") && (this.toString = v.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            },
          }),
          y = (f.WordArray = g.extend({
            init: function (v, S) {
              (v = this.words = v || []), (this.sigBytes = S ?? 4 * v.length);
            },
            toString: function (v) {
              return (v || A).stringify(this);
            },
            concat: function (v) {
              var S = this.words,
                E = v.words,
                P = this.sigBytes,
                I = v.sigBytes;
              if ((this.clamp(), P % 4))
                for (var U = 0; U < I; U++)
                  S[(P + U) >>> 2] |=
                    ((E[U >>> 2] >>> (24 - (U % 4) * 8)) & 255) <<
                    (24 - ((P + U) % 4) * 8);
              else for (var M = 0; M < I; M += 4) S[(P + M) >>> 2] = E[M >>> 2];
              return (this.sigBytes += I), this;
            },
            clamp: function () {
              var v = this.words,
                S = this.sigBytes;
              (v[S >>> 2] &= 4294967295 << (32 - (S % 4) * 8)),
                (v.length = n.ceil(S / 4));
            },
            clone: function () {
              var v = g.clone.call(this);
              return (v.words = this.words.slice(0)), v;
            },
            random: function (v) {
              for (var S = [], E = 0; E < v; E += 4) S.push(u());
              return new y.init(S, v);
            },
          })),
          b = (l.enc = {}),
          A = (b.Hex = {
            stringify: function (v) {
              for (var S = v.words, E = v.sigBytes, P = [], I = 0; I < E; I++) {
                var U = (S[I >>> 2] >>> (24 - (I % 4) * 8)) & 255;
                P.push((U >>> 4).toString(16)), P.push((15 & U).toString(16));
              }
              return P.join("");
            },
            parse: function (v) {
              for (var S = v.length, E = [], P = 0; P < S; P += 2)
                E[P >>> 3] |=
                  parseInt(v.substr(P, 2), 16) << (24 - (P % 8) * 4);
              return new y.init(E, S / 2);
            },
          }),
          h = (b.Latin1 = {
            stringify: function (v) {
              for (var S = v.words, E = v.sigBytes, P = [], I = 0; I < E; I++)
                P.push(
                  String.fromCharCode((S[I >>> 2] >>> (24 - (I % 4) * 8)) & 255)
                );
              return P.join("");
            },
            parse: function (v) {
              for (var S = v.length, E = [], P = 0; P < S; P++)
                E[P >>> 2] |= (255 & v.charCodeAt(P)) << (24 - (P % 4) * 8);
              return new y.init(E, S);
            },
          }),
          d = (b.Utf8 = {
            stringify: function (v) {
              try {
                return decodeURIComponent(escape(h.stringify(v)));
              } catch {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (v) {
              return h.parse(unescape(encodeURIComponent(v)));
            },
          }),
          w = (f.BufferedBlockAlgorithm = g.extend({
            reset: function () {
              (this._data = new y.init()), (this._nDataBytes = 0);
            },
            _append: function (v) {
              typeof v == "string" && (v = d.parse(v)),
                this._data.concat(v),
                (this._nDataBytes += v.sigBytes);
            },
            _process: function (v) {
              var S,
                E = this._data,
                P = E.words,
                I = E.sigBytes,
                U = this.blockSize,
                M = I / (4 * U),
                L =
                  (M = v
                    ? n.ceil(M)
                    : n.max((0 | M) - this._minBufferSize, 0)) * U,
                k = n.min(4 * L, I);
              if (L) {
                for (var F = 0; F < L; F += U) this._doProcessBlock(P, F);
                (S = P.splice(0, L)), (E.sigBytes -= k);
              }
              return new y.init(S, k);
            },
            clone: function () {
              var v = g.clone.call(this);
              return (v._data = this._data.clone()), v;
            },
            _minBufferSize: 0,
          }));
        f.Hasher = w.extend({
          cfg: g.extend(),
          init: function (v) {
            (this.cfg = this.cfg.extend(v)), this.reset();
          },
          reset: function () {
            w.reset.call(this), this._doReset();
          },
          update: function (v) {
            return this._append(v), this._process(), this;
          },
          finalize: function (v) {
            return v && this._append(v), this._doFinalize();
          },
          blockSize: 16,
          _createHelper: function (v) {
            return function (S, E) {
              return new v.init(E).finalize(S);
            };
          },
          _createHmacHelper: function (v) {
            return function (S, E) {
              return new O.HMAC.init(v, E).finalize(S);
            };
          },
        });
        var O = (l.algo = {});
        return l;
      })(Math);
  }),
  Si = Be(function (e, t) {
    var r;
    e.exports =
      ((r = Gr),
      (function (n) {
        var i = r,
          s = i.lib,
          u = s.WordArray,
          p = s.Hasher,
          l = i.algo,
          f = [],
          g = [];
        (function () {
          function A(O) {
            for (var v = n.sqrt(O), S = 2; S <= v; S++) if (!(O % S)) return !1;
            return !0;
          }
          function h(O) {
            return (4294967296 * (O - (0 | O))) | 0;
          }
          for (var d = 2, w = 0; w < 64; )
            A(d) &&
              (w < 8 && (f[w] = h(n.pow(d, 0.5))),
              (g[w] = h(n.pow(d, 1 / 3))),
              w++),
              d++;
        })();
        var y = [],
          b = (l.SHA256 = p.extend({
            _doReset: function () {
              this._hash = new u.init(f.slice(0));
            },
            _doProcessBlock: function (A, h) {
              for (
                var d = this._hash.words,
                  w = d[0],
                  O = d[1],
                  v = d[2],
                  S = d[3],
                  E = d[4],
                  P = d[5],
                  I = d[6],
                  U = d[7],
                  M = 0;
                M < 64;
                M++
              ) {
                if (M < 16) y[M] = 0 | A[h + M];
                else {
                  var L = y[M - 15],
                    k = y[M - 2];
                  y[M] =
                    (((L << 25) | (L >>> 7)) ^
                      ((L << 14) | (L >>> 18)) ^
                      (L >>> 3)) +
                    y[M - 7] +
                    (((k << 15) | (k >>> 17)) ^
                      ((k << 13) | (k >>> 19)) ^
                      (k >>> 10)) +
                    y[M - 16];
                }
                var F = (w & O) ^ (w & v) ^ (O & v),
                  x =
                    U +
                    (((E << 26) | (E >>> 6)) ^
                      ((E << 21) | (E >>> 11)) ^
                      ((E << 7) | (E >>> 25))) +
                    ((E & P) ^ (~E & I)) +
                    g[M] +
                    y[M];
                (U = I),
                  (I = P),
                  (P = E),
                  (E = (S + x) | 0),
                  (S = v),
                  (v = O),
                  (O = w),
                  (w =
                    (x +
                      ((((w << 30) | (w >>> 2)) ^
                        ((w << 19) | (w >>> 13)) ^
                        ((w << 10) | (w >>> 22))) +
                        F)) |
                    0);
              }
              (d[0] = (d[0] + w) | 0),
                (d[1] = (d[1] + O) | 0),
                (d[2] = (d[2] + v) | 0),
                (d[3] = (d[3] + S) | 0),
                (d[4] = (d[4] + E) | 0),
                (d[5] = (d[5] + P) | 0),
                (d[6] = (d[6] + I) | 0),
                (d[7] = (d[7] + U) | 0);
            },
            _doFinalize: function () {
              var A = this._data,
                h = A.words,
                d = 8 * this._nDataBytes,
                w = 8 * A.sigBytes;
              return (
                (h[w >>> 5] |= 128 << (24 - (w % 32))),
                (h[14 + (((w + 64) >>> 9) << 4)] = n.floor(d / 4294967296)),
                (h[15 + (((w + 64) >>> 9) << 4)] = d),
                (A.sigBytes = 4 * h.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var A = p.clone.call(this);
              return (A._hash = this._hash.clone()), A;
            },
          }));
        (i.SHA256 = p._createHelper(b)),
          (i.HmacSHA256 = p._createHmacHelper(b));
      })(Math),
      r.SHA256);
  }),
  ns = Be(function (e, t) {
    var r, n;
    e.exports =
      ((n = (r = Gr).lib.WordArray),
      (r.enc.Base64 = {
        stringify: function (i) {
          var s = i.words,
            u = i.sigBytes,
            p = this._map;
          i.clamp();
          for (var l = [], f = 0; f < u; f += 3)
            for (
              var g =
                  (((s[f >>> 2] >>> (24 - (f % 4) * 8)) & 255) << 16) |
                  (((s[(f + 1) >>> 2] >>> (24 - ((f + 1) % 4) * 8)) & 255) <<
                    8) |
                  ((s[(f + 2) >>> 2] >>> (24 - ((f + 2) % 4) * 8)) & 255),
                y = 0;
              y < 4 && f + 0.75 * y < u;
              y++
            )
              l.push(p.charAt((g >>> (6 * (3 - y))) & 63));
          var b = p.charAt(64);
          if (b) for (; l.length % 4; ) l.push(b);
          return l.join("");
        },
        parse: function (i) {
          var s = i.length,
            u = this._map,
            p = this._reverseMap;
          if (!p) {
            p = this._reverseMap = [];
            for (var l = 0; l < u.length; l++) p[u.charCodeAt(l)] = l;
          }
          var f = u.charAt(64);
          if (f) {
            var g = i.indexOf(f);
            g !== -1 && (s = g);
          }
          return (function (y, b, A) {
            for (var h = [], d = 0, w = 0; w < b; w++)
              if (w % 4) {
                var O = A[y.charCodeAt(w - 1)] << ((w % 4) * 2),
                  v = A[y.charCodeAt(w)] >>> (6 - (w % 4) * 2);
                (h[d >>> 2] |= (O | v) << (24 - (d % 4) * 8)), d++;
              }
            return n.create(h, d);
          })(i, s, p);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      }),
      r.enc.Base64);
  }),
  Rn = Be(function (e, t) {
    e.exports = Gr.enc.Hex;
  }),
  Ai = Be(function (e, t) {
    (function () {
      var r;
      function n(a, o, c) {
        a != null &&
          (typeof a == "number"
            ? this.fromNumber(a, o, c)
            : this.fromString(a, o == null && typeof a != "string" ? 256 : o));
      }
      function i() {
        return new n(null);
      }
      var s = typeof navigator < "u";
      s && navigator.appName == "Microsoft Internet Explorer"
        ? ((n.prototype.am = function (a, o, c, m, _, T) {
            for (var C = 32767 & o, R = o >> 15; --T >= 0; ) {
              var H = 32767 & this[a],
                W = this[a++] >> 15,
                G = R * H + W * C;
              (_ =
                ((H = C * H + ((32767 & G) << 15) + c[m] + (1073741823 & _)) >>>
                  30) +
                (G >>> 15) +
                R * W +
                (_ >>> 30)),
                (c[m++] = 1073741823 & H);
            }
            return _;
          }),
          (r = 30))
        : s && navigator.appName != "Netscape"
        ? ((n.prototype.am = function (a, o, c, m, _, T) {
            for (; --T >= 0; ) {
              var C = o * this[a++] + c[m] + _;
              (_ = Math.floor(C / 67108864)), (c[m++] = 67108863 & C);
            }
            return _;
          }),
          (r = 26))
        : ((n.prototype.am = function (a, o, c, m, _, T) {
            for (var C = 16383 & o, R = o >> 14; --T >= 0; ) {
              var H = 16383 & this[a],
                W = this[a++] >> 14,
                G = R * H + W * C;
              (_ =
                ((H = C * H + ((16383 & G) << 14) + c[m] + _) >> 28) +
                (G >> 14) +
                R * W),
                (c[m++] = 268435455 & H);
            }
            return _;
          }),
          (r = 28)),
        (n.prototype.DB = r),
        (n.prototype.DM = (1 << r) - 1),
        (n.prototype.DV = 1 << r),
        (n.prototype.FV = Math.pow(2, 52)),
        (n.prototype.F1 = 52 - r),
        (n.prototype.F2 = 2 * r - 52);
      var u,
        p,
        l = new Array();
      for (u = "0".charCodeAt(0), p = 0; p <= 9; ++p) l[u++] = p;
      for (u = "a".charCodeAt(0), p = 10; p < 36; ++p) l[u++] = p;
      for (u = "A".charCodeAt(0), p = 10; p < 36; ++p) l[u++] = p;
      function f(a) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(a);
      }
      function g(a, o) {
        var c = l[a.charCodeAt(o)];
        return c ?? -1;
      }
      function y(a) {
        var o = i();
        return o.fromInt(a), o;
      }
      function b(a) {
        var o,
          c = 1;
        return (
          (o = a >>> 16) != 0 && ((a = o), (c += 16)),
          (o = a >> 8) != 0 && ((a = o), (c += 8)),
          (o = a >> 4) != 0 && ((a = o), (c += 4)),
          (o = a >> 2) != 0 && ((a = o), (c += 2)),
          (o = a >> 1) != 0 && ((a = o), (c += 1)),
          c
        );
      }
      function A(a) {
        this.m = a;
      }
      function h(a) {
        (this.m = a),
          (this.mp = a.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (a.DB - 15)) - 1),
          (this.mt2 = 2 * a.t);
      }
      function d(a, o) {
        return a & o;
      }
      function w(a, o) {
        return a | o;
      }
      function O(a, o) {
        return a ^ o;
      }
      function v(a, o) {
        return a & ~o;
      }
      function S(a) {
        if (a == 0) return -1;
        var o = 0;
        return (
          !(65535 & a) && ((a >>= 16), (o += 16)),
          !(255 & a) && ((a >>= 8), (o += 8)),
          !(15 & a) && ((a >>= 4), (o += 4)),
          !(3 & a) && ((a >>= 2), (o += 2)),
          !(1 & a) && ++o,
          o
        );
      }
      function E(a) {
        for (var o = 0; a != 0; ) (a &= a - 1), ++o;
        return o;
      }
      function P() {}
      function I(a) {
        return a;
      }
      function U(a) {
        (this.r2 = i()),
          (this.q3 = i()),
          n.ONE.dlShiftTo(2 * a.t, this.r2),
          (this.mu = this.r2.divide(a)),
          (this.m = a);
      }
      (A.prototype.convert = function (a) {
        return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a;
      }),
        (A.prototype.revert = function (a) {
          return a;
        }),
        (A.prototype.reduce = function (a) {
          a.divRemTo(this.m, null, a);
        }),
        (A.prototype.mulTo = function (a, o, c) {
          a.multiplyTo(o, c), this.reduce(c);
        }),
        (A.prototype.sqrTo = function (a, o) {
          a.squareTo(o), this.reduce(o);
        }),
        (h.prototype.convert = function (a) {
          var o = i();
          return (
            a.abs().dlShiftTo(this.m.t, o),
            o.divRemTo(this.m, null, o),
            a.s < 0 && o.compareTo(n.ZERO) > 0 && this.m.subTo(o, o),
            o
          );
        }),
        (h.prototype.revert = function (a) {
          var o = i();
          return a.copyTo(o), this.reduce(o), o;
        }),
        (h.prototype.reduce = function (a) {
          for (; a.t <= this.mt2; ) a[a.t++] = 0;
          for (var o = 0; o < this.m.t; ++o) {
            var c = 32767 & a[o],
              m =
                (c * this.mpl +
                  (((c * this.mph + (a[o] >> 15) * this.mpl) & this.um) <<
                    15)) &
                a.DM;
            for (
              a[(c = o + this.m.t)] += this.m.am(0, m, a, o, 0, this.m.t);
              a[c] >= a.DV;

            )
              (a[c] -= a.DV), a[++c]++;
          }
          a.clamp(),
            a.drShiftTo(this.m.t, a),
            a.compareTo(this.m) >= 0 && a.subTo(this.m, a);
        }),
        (h.prototype.mulTo = function (a, o, c) {
          a.multiplyTo(o, c), this.reduce(c);
        }),
        (h.prototype.sqrTo = function (a, o) {
          a.squareTo(o), this.reduce(o);
        }),
        (n.prototype.copyTo = function (a) {
          for (var o = this.t - 1; o >= 0; --o) a[o] = this[o];
          (a.t = this.t), (a.s = this.s);
        }),
        (n.prototype.fromInt = function (a) {
          (this.t = 1),
            (this.s = a < 0 ? -1 : 0),
            a > 0
              ? (this[0] = a)
              : a < -1
              ? (this[0] = a + this.DV)
              : (this.t = 0);
        }),
        (n.prototype.fromString = function (a, o) {
          var c;
          if (o == 16) c = 4;
          else if (o == 8) c = 3;
          else if (o == 256) c = 8;
          else if (o == 2) c = 1;
          else if (o == 32) c = 5;
          else {
            if (o != 4) return void this.fromRadix(a, o);
            c = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var m = a.length, _ = !1, T = 0; --m >= 0; ) {
            var C = c == 8 ? 255 & a[m] : g(a, m);
            C < 0
              ? a.charAt(m) == "-" && (_ = !0)
              : ((_ = !1),
                T == 0
                  ? (this[this.t++] = C)
                  : T + c > this.DB
                  ? ((this[this.t - 1] |=
                      (C & ((1 << (this.DB - T)) - 1)) << T),
                    (this[this.t++] = C >> (this.DB - T)))
                  : (this[this.t - 1] |= C << T),
                (T += c) >= this.DB && (T -= this.DB));
          }
          c == 8 &&
            128 & a[0] &&
            ((this.s = -1),
            T > 0 && (this[this.t - 1] |= ((1 << (this.DB - T)) - 1) << T)),
            this.clamp(),
            _ && n.ZERO.subTo(this, this);
        }),
        (n.prototype.clamp = function () {
          for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a; )
            --this.t;
        }),
        (n.prototype.dlShiftTo = function (a, o) {
          var c;
          for (c = this.t - 1; c >= 0; --c) o[c + a] = this[c];
          for (c = a - 1; c >= 0; --c) o[c] = 0;
          (o.t = this.t + a), (o.s = this.s);
        }),
        (n.prototype.drShiftTo = function (a, o) {
          for (var c = a; c < this.t; ++c) o[c - a] = this[c];
          (o.t = Math.max(this.t - a, 0)), (o.s = this.s);
        }),
        (n.prototype.lShiftTo = function (a, o) {
          var c,
            m = a % this.DB,
            _ = this.DB - m,
            T = (1 << _) - 1,
            C = Math.floor(a / this.DB),
            R = (this.s << m) & this.DM;
          for (c = this.t - 1; c >= 0; --c)
            (o[c + C + 1] = (this[c] >> _) | R), (R = (this[c] & T) << m);
          for (c = C - 1; c >= 0; --c) o[c] = 0;
          (o[C] = R), (o.t = this.t + C + 1), (o.s = this.s), o.clamp();
        }),
        (n.prototype.rShiftTo = function (a, o) {
          o.s = this.s;
          var c = Math.floor(a / this.DB);
          if (c >= this.t) o.t = 0;
          else {
            var m = a % this.DB,
              _ = this.DB - m,
              T = (1 << m) - 1;
            o[0] = this[c] >> m;
            for (var C = c + 1; C < this.t; ++C)
              (o[C - c - 1] |= (this[C] & T) << _), (o[C - c] = this[C] >> m);
            m > 0 && (o[this.t - c - 1] |= (this.s & T) << _),
              (o.t = this.t - c),
              o.clamp();
          }
        }),
        (n.prototype.subTo = function (a, o) {
          for (var c = 0, m = 0, _ = Math.min(a.t, this.t); c < _; )
            (m += this[c] - a[c]), (o[c++] = m & this.DM), (m >>= this.DB);
          if (a.t < this.t) {
            for (m -= a.s; c < this.t; )
              (m += this[c]), (o[c++] = m & this.DM), (m >>= this.DB);
            m += this.s;
          } else {
            for (m += this.s; c < a.t; )
              (m -= a[c]), (o[c++] = m & this.DM), (m >>= this.DB);
            m -= a.s;
          }
          (o.s = m < 0 ? -1 : 0),
            m < -1 ? (o[c++] = this.DV + m) : m > 0 && (o[c++] = m),
            (o.t = c),
            o.clamp();
        }),
        (n.prototype.multiplyTo = function (a, o) {
          var c = this.abs(),
            m = a.abs(),
            _ = c.t;
          for (o.t = _ + m.t; --_ >= 0; ) o[_] = 0;
          for (_ = 0; _ < m.t; ++_) o[_ + c.t] = c.am(0, m[_], o, _, 0, c.t);
          (o.s = 0), o.clamp(), this.s != a.s && n.ZERO.subTo(o, o);
        }),
        (n.prototype.squareTo = function (a) {
          for (var o = this.abs(), c = (a.t = 2 * o.t); --c >= 0; ) a[c] = 0;
          for (c = 0; c < o.t - 1; ++c) {
            var m = o.am(c, o[c], a, 2 * c, 0, 1);
            (a[c + o.t] += o.am(
              c + 1,
              2 * o[c],
              a,
              2 * c + 1,
              m,
              o.t - c - 1
            )) >= o.DV && ((a[c + o.t] -= o.DV), (a[c + o.t + 1] = 1));
          }
          a.t > 0 && (a[a.t - 1] += o.am(c, o[c], a, 2 * c, 0, 1)),
            (a.s = 0),
            a.clamp();
        }),
        (n.prototype.divRemTo = function (a, o, c) {
          var m = a.abs();
          if (!(m.t <= 0)) {
            var _ = this.abs();
            if (_.t < m.t)
              return (
                o != null && o.fromInt(0), void (c != null && this.copyTo(c))
              );
            c == null && (c = i());
            var T = i(),
              C = this.s,
              R = a.s,
              H = this.DB - b(m[m.t - 1]);
            H > 0
              ? (m.lShiftTo(H, T), _.lShiftTo(H, c))
              : (m.copyTo(T), _.copyTo(c));
            var W = T.t,
              G = T[W - 1];
            if (G != 0) {
              var oe = G * (1 << this.F1) + (W > 1 ? T[W - 2] >> this.F2 : 0),
                xe = this.FV / oe,
                re = (1 << this.F1) / oe,
                se = 1 << this.F2,
                ee = c.t,
                bt = ee - W,
                Oe = o ?? i();
              for (
                T.dlShiftTo(bt, Oe),
                  c.compareTo(Oe) >= 0 && ((c[c.t++] = 1), c.subTo(Oe, c)),
                  n.ONE.dlShiftTo(W, Oe),
                  Oe.subTo(T, T);
                T.t < W;

              )
                T[T.t++] = 0;
              for (; --bt >= 0; ) {
                var Wt =
                  c[--ee] == G
                    ? this.DM
                    : Math.floor(c[ee] * xe + (c[ee - 1] + se) * re);
                if ((c[ee] += T.am(0, Wt, c, bt, 0, W)) < Wt)
                  for (T.dlShiftTo(bt, Oe), c.subTo(Oe, c); c[ee] < --Wt; )
                    c.subTo(Oe, c);
              }
              o != null && (c.drShiftTo(W, o), C != R && n.ZERO.subTo(o, o)),
                (c.t = W),
                c.clamp(),
                H > 0 && c.rShiftTo(H, c),
                C < 0 && n.ZERO.subTo(c, c);
            }
          }
        }),
        (n.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var a = this[0];
          if (!(1 & a)) return 0;
          var o = 3 & a;
          return (o =
            ((o =
              ((o =
                ((o = (o * (2 - (15 & a) * o)) & 15) * (2 - (255 & a) * o)) &
                255) *
                (2 - (((65535 & a) * o) & 65535))) &
              65535) *
              (2 - ((a * o) % this.DV))) %
            this.DV) > 0
            ? this.DV - o
            : -o;
        }),
        (n.prototype.isEven = function () {
          return (this.t > 0 ? 1 & this[0] : this.s) == 0;
        }),
        (n.prototype.exp = function (a, o) {
          if (a > 4294967295 || a < 1) return n.ONE;
          var c = i(),
            m = i(),
            _ = o.convert(this),
            T = b(a) - 1;
          for (_.copyTo(c); --T >= 0; )
            if ((o.sqrTo(c, m), (a & (1 << T)) > 0)) o.mulTo(m, _, c);
            else {
              var C = c;
              (c = m), (m = C);
            }
          return o.revert(c);
        }),
        (n.prototype.toString = function (a) {
          if (this.s < 0) return "-" + this.negate().toString(a);
          var o;
          if (a == 16) o = 4;
          else if (a == 8) o = 3;
          else if (a == 2) o = 1;
          else if (a == 32) o = 5;
          else {
            if (a != 4) return this.toRadix(a);
            o = 2;
          }
          var c,
            m = (1 << o) - 1,
            _ = !1,
            T = "",
            C = this.t,
            R = this.DB - ((C * this.DB) % o);
          if (C-- > 0)
            for (
              R < this.DB && (c = this[C] >> R) > 0 && ((_ = !0), (T = f(c)));
              C >= 0;

            )
              R < o
                ? ((c = (this[C] & ((1 << R) - 1)) << (o - R)),
                  (c |= this[--C] >> (R += this.DB - o)))
                : ((c = (this[C] >> (R -= o)) & m),
                  R <= 0 && ((R += this.DB), --C)),
                c > 0 && (_ = !0),
                _ && (T += f(c));
          return _ ? T : "0";
        }),
        (n.prototype.negate = function () {
          var a = i();
          return n.ZERO.subTo(this, a), a;
        }),
        (n.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (n.prototype.compareTo = function (a) {
          var o = this.s - a.s;
          if (o != 0) return o;
          var c = this.t;
          if ((o = c - a.t) != 0) return this.s < 0 ? -o : o;
          for (; --c >= 0; ) if ((o = this[c] - a[c]) != 0) return o;
          return 0;
        }),
        (n.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + b(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (n.prototype.mod = function (a) {
          var o = i();
          return (
            this.abs().divRemTo(a, null, o),
            this.s < 0 && o.compareTo(n.ZERO) > 0 && a.subTo(o, o),
            o
          );
        }),
        (n.prototype.modPowInt = function (a, o) {
          var c;
          return (
            (c = a < 256 || o.isEven() ? new A(o) : new h(o)), this.exp(a, c)
          );
        }),
        (n.ZERO = y(0)),
        (n.ONE = y(1)),
        (P.prototype.convert = I),
        (P.prototype.revert = I),
        (P.prototype.mulTo = function (a, o, c) {
          a.multiplyTo(o, c);
        }),
        (P.prototype.sqrTo = function (a, o) {
          a.squareTo(o);
        }),
        (U.prototype.convert = function (a) {
          if (a.s < 0 || a.t > 2 * this.m.t) return a.mod(this.m);
          if (a.compareTo(this.m) < 0) return a;
          var o = i();
          return a.copyTo(o), this.reduce(o), o;
        }),
        (U.prototype.revert = function (a) {
          return a;
        }),
        (U.prototype.reduce = function (a) {
          for (
            a.drShiftTo(this.m.t - 1, this.r2),
              a.t > this.m.t + 1 && ((a.t = this.m.t + 1), a.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            a.compareTo(this.r2) < 0;

          )
            a.dAddOffset(1, this.m.t + 1);
          for (a.subTo(this.r2, a); a.compareTo(this.m) >= 0; )
            a.subTo(this.m, a);
        }),
        (U.prototype.mulTo = function (a, o, c) {
          a.multiplyTo(o, c), this.reduce(c);
        }),
        (U.prototype.sqrTo = function (a, o) {
          a.squareTo(o), this.reduce(o);
        });
      var M,
        L,
        k,
        F = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
          569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
          647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
          743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
          839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
          941, 947, 953, 967, 971, 977, 983, 991, 997,
        ],
        x = (1 << 26) / F[F.length - 1];
      function N() {
        var a;
        (a = new Date().getTime()),
          (L[k++] ^= 255 & a),
          (L[k++] ^= (a >> 8) & 255),
          (L[k++] ^= (a >> 16) & 255),
          (L[k++] ^= (a >> 24) & 255),
          k >= pt && (k -= pt);
      }
      if (
        ((n.prototype.chunkSize = function (a) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(a));
        }),
        (n.prototype.toRadix = function (a) {
          if ((a == null && (a = 10), this.signum() == 0 || a < 2 || a > 36))
            return "0";
          var o = this.chunkSize(a),
            c = Math.pow(a, o),
            m = y(c),
            _ = i(),
            T = i(),
            C = "";
          for (this.divRemTo(m, _, T); _.signum() > 0; )
            (C = (c + T.intValue()).toString(a).substr(1) + C),
              _.divRemTo(m, _, T);
          return T.intValue().toString(a) + C;
        }),
        (n.prototype.fromRadix = function (a, o) {
          this.fromInt(0), o == null && (o = 10);
          for (
            var c = this.chunkSize(o),
              m = Math.pow(o, c),
              _ = !1,
              T = 0,
              C = 0,
              R = 0;
            R < a.length;
            ++R
          ) {
            var H = g(a, R);
            H < 0
              ? a.charAt(R) == "-" && this.signum() == 0 && (_ = !0)
              : ((C = o * C + H),
                ++T >= c &&
                  (this.dMultiply(m), this.dAddOffset(C, 0), (T = 0), (C = 0)));
          }
          T > 0 && (this.dMultiply(Math.pow(o, T)), this.dAddOffset(C, 0)),
            _ && n.ZERO.subTo(this, this);
        }),
        (n.prototype.fromNumber = function (a, o, c) {
          if (typeof o == "number")
            if (a < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(a, c),
                  this.testBit(a - 1) ||
                    this.bitwiseTo(n.ONE.shiftLeft(a - 1), w, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(o);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > a &&
                    this.subTo(n.ONE.shiftLeft(a - 1), this);
          else {
            var m = new Array(),
              _ = 7 & a;
            (m.length = 1 + (a >> 3)),
              o.nextBytes(m),
              _ > 0 ? (m[0] &= (1 << _) - 1) : (m[0] = 0),
              this.fromString(m, 256);
          }
        }),
        (n.prototype.bitwiseTo = function (a, o, c) {
          var m,
            _,
            T = Math.min(a.t, this.t);
          for (m = 0; m < T; ++m) c[m] = o(this[m], a[m]);
          if (a.t < this.t) {
            for (_ = a.s & this.DM, m = T; m < this.t; ++m)
              c[m] = o(this[m], _);
            c.t = this.t;
          } else {
            for (_ = this.s & this.DM, m = T; m < a.t; ++m) c[m] = o(_, a[m]);
            c.t = a.t;
          }
          (c.s = o(this.s, a.s)), c.clamp();
        }),
        (n.prototype.changeBit = function (a, o) {
          var c = n.ONE.shiftLeft(a);
          return this.bitwiseTo(c, o, c), c;
        }),
        (n.prototype.addTo = function (a, o) {
          for (var c = 0, m = 0, _ = Math.min(a.t, this.t); c < _; )
            (m += this[c] + a[c]), (o[c++] = m & this.DM), (m >>= this.DB);
          if (a.t < this.t) {
            for (m += a.s; c < this.t; )
              (m += this[c]), (o[c++] = m & this.DM), (m >>= this.DB);
            m += this.s;
          } else {
            for (m += this.s; c < a.t; )
              (m += a[c]), (o[c++] = m & this.DM), (m >>= this.DB);
            m += a.s;
          }
          (o.s = m < 0 ? -1 : 0),
            m > 0 ? (o[c++] = m) : m < -1 && (o[c++] = this.DV + m),
            (o.t = c),
            o.clamp();
        }),
        (n.prototype.dMultiply = function (a) {
          (this[this.t] = this.am(0, a - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (n.prototype.dAddOffset = function (a, o) {
          if (a != 0) {
            for (; this.t <= o; ) this[this.t++] = 0;
            for (this[o] += a; this[o] >= this.DV; )
              (this[o] -= this.DV),
                ++o >= this.t && (this[this.t++] = 0),
                ++this[o];
          }
        }),
        (n.prototype.multiplyLowerTo = function (a, o, c) {
          var m,
            _ = Math.min(this.t + a.t, o);
          for (c.s = 0, c.t = _; _ > 0; ) c[--_] = 0;
          for (m = c.t - this.t; _ < m; ++_)
            c[_ + this.t] = this.am(0, a[_], c, _, 0, this.t);
          for (m = Math.min(a.t, o); _ < m; ++_)
            this.am(0, a[_], c, _, 0, o - _);
          c.clamp();
        }),
        (n.prototype.multiplyUpperTo = function (a, o, c) {
          --o;
          var m = (c.t = this.t + a.t - o);
          for (c.s = 0; --m >= 0; ) c[m] = 0;
          for (m = Math.max(o - this.t, 0); m < a.t; ++m)
            c[this.t + m - o] = this.am(o - m, a[m], c, 0, 0, this.t + m - o);
          c.clamp(), c.drShiftTo(1, c);
        }),
        (n.prototype.modInt = function (a) {
          if (a <= 0) return 0;
          var o = this.DV % a,
            c = this.s < 0 ? a - 1 : 0;
          if (this.t > 0)
            if (o == 0) c = this[0] % a;
            else
              for (var m = this.t - 1; m >= 0; --m) c = (o * c + this[m]) % a;
          return c;
        }),
        (n.prototype.millerRabin = function (a) {
          var o = this.subtract(n.ONE),
            c = o.getLowestSetBit();
          if (c <= 0) return !1;
          var m = o.shiftRight(c);
          (a = (a + 1) >> 1) > F.length && (a = F.length);
          for (var _ = i(), T = 0; T < a; ++T) {
            _.fromInt(F[Math.floor(Math.random() * F.length)]);
            var C = _.modPow(m, this);
            if (C.compareTo(n.ONE) != 0 && C.compareTo(o) != 0) {
              for (var R = 1; R++ < c && C.compareTo(o) != 0; )
                if ((C = C.modPowInt(2, this)).compareTo(n.ONE) == 0) return !1;
              if (C.compareTo(o) != 0) return !1;
            }
          }
          return !0;
        }),
        (n.prototype.clone = function () {
          var a = i();
          return this.copyTo(a), a;
        }),
        (n.prototype.intValue = function () {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (n.prototype.byteValue = function () {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }),
        (n.prototype.shortValue = function () {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }),
        (n.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
            ? 0
            : 1;
        }),
        (n.prototype.toByteArray = function () {
          var a = this.t,
            o = new Array();
          o[0] = this.s;
          var c,
            m = this.DB - ((a * this.DB) % 8),
            _ = 0;
          if (a-- > 0)
            for (
              m < this.DB &&
              (c = this[a] >> m) != (this.s & this.DM) >> m &&
              (o[_++] = c | (this.s << (this.DB - m)));
              a >= 0;

            )
              m < 8
                ? ((c = (this[a] & ((1 << m) - 1)) << (8 - m)),
                  (c |= this[--a] >> (m += this.DB - 8)))
                : ((c = (this[a] >> (m -= 8)) & 255),
                  m <= 0 && ((m += this.DB), --a)),
                128 & c && (c |= -256),
                _ == 0 && (128 & this.s) != (128 & c) && ++_,
                (_ > 0 || c != this.s) && (o[_++] = c);
          return o;
        }),
        (n.prototype.equals = function (a) {
          return this.compareTo(a) == 0;
        }),
        (n.prototype.min = function (a) {
          return this.compareTo(a) < 0 ? this : a;
        }),
        (n.prototype.max = function (a) {
          return this.compareTo(a) > 0 ? this : a;
        }),
        (n.prototype.and = function (a) {
          var o = i();
          return this.bitwiseTo(a, d, o), o;
        }),
        (n.prototype.or = function (a) {
          var o = i();
          return this.bitwiseTo(a, w, o), o;
        }),
        (n.prototype.xor = function (a) {
          var o = i();
          return this.bitwiseTo(a, O, o), o;
        }),
        (n.prototype.andNot = function (a) {
          var o = i();
          return this.bitwiseTo(a, v, o), o;
        }),
        (n.prototype.not = function () {
          for (var a = i(), o = 0; o < this.t; ++o) a[o] = this.DM & ~this[o];
          return (a.t = this.t), (a.s = ~this.s), a;
        }),
        (n.prototype.shiftLeft = function (a) {
          var o = i();
          return a < 0 ? this.rShiftTo(-a, o) : this.lShiftTo(a, o), o;
        }),
        (n.prototype.shiftRight = function (a) {
          var o = i();
          return a < 0 ? this.lShiftTo(-a, o) : this.rShiftTo(a, o), o;
        }),
        (n.prototype.getLowestSetBit = function () {
          for (var a = 0; a < this.t; ++a)
            if (this[a] != 0) return a * this.DB + S(this[a]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (n.prototype.bitCount = function () {
          for (var a = 0, o = this.s & this.DM, c = 0; c < this.t; ++c)
            a += E(this[c] ^ o);
          return a;
        }),
        (n.prototype.testBit = function (a) {
          var o = Math.floor(a / this.DB);
          return o >= this.t
            ? this.s != 0
            : (this[o] & (1 << a % this.DB)) != 0;
        }),
        (n.prototype.setBit = function (a) {
          return this.changeBit(a, w);
        }),
        (n.prototype.clearBit = function (a) {
          return this.changeBit(a, v);
        }),
        (n.prototype.flipBit = function (a) {
          return this.changeBit(a, O);
        }),
        (n.prototype.add = function (a) {
          var o = i();
          return this.addTo(a, o), o;
        }),
        (n.prototype.subtract = function (a) {
          var o = i();
          return this.subTo(a, o), o;
        }),
        (n.prototype.multiply = function (a) {
          var o = i();
          return this.multiplyTo(a, o), o;
        }),
        (n.prototype.divide = function (a) {
          var o = i();
          return this.divRemTo(a, o, null), o;
        }),
        (n.prototype.remainder = function (a) {
          var o = i();
          return this.divRemTo(a, null, o), o;
        }),
        (n.prototype.divideAndRemainder = function (a) {
          var o = i(),
            c = i();
          return this.divRemTo(a, o, c), new Array(o, c);
        }),
        (n.prototype.modPow = function (a, o) {
          var c,
            m,
            _ = a.bitLength(),
            T = y(1);
          if (_ <= 0) return T;
          (c = _ < 18 ? 1 : _ < 48 ? 3 : _ < 144 ? 4 : _ < 768 ? 5 : 6),
            (m = _ < 8 ? new A(o) : o.isEven() ? new U(o) : new h(o));
          var C = new Array(),
            R = 3,
            H = c - 1,
            W = (1 << c) - 1;
          if (((C[1] = m.convert(this)), c > 1)) {
            var G = i();
            for (m.sqrTo(C[1], G); R <= W; )
              (C[R] = i()), m.mulTo(G, C[R - 2], C[R]), (R += 2);
          }
          var oe,
            xe,
            re = a.t - 1,
            se = !0,
            ee = i();
          for (_ = b(a[re]) - 1; re >= 0; ) {
            for (
              _ >= H
                ? (oe = (a[re] >> (_ - H)) & W)
                : ((oe = (a[re] & ((1 << (_ + 1)) - 1)) << (H - _)),
                  re > 0 && (oe |= a[re - 1] >> (this.DB + _ - H))),
                R = c;
              !(1 & oe);

            )
              (oe >>= 1), --R;
            if (((_ -= R) < 0 && ((_ += this.DB), --re), se))
              C[oe].copyTo(T), (se = !1);
            else {
              for (; R > 1; ) m.sqrTo(T, ee), m.sqrTo(ee, T), (R -= 2);
              R > 0 ? m.sqrTo(T, ee) : ((xe = T), (T = ee), (ee = xe)),
                m.mulTo(ee, C[oe], T);
            }
            for (; re >= 0 && !(a[re] & (1 << _)); )
              m.sqrTo(T, ee),
                (xe = T),
                (T = ee),
                (ee = xe),
                --_ < 0 && ((_ = this.DB - 1), --re);
          }
          return m.revert(T);
        }),
        (n.prototype.modInverse = function (a) {
          var o = a.isEven();
          if ((this.isEven() && o) || a.signum() == 0) return n.ZERO;
          for (
            var c = a.clone(),
              m = this.clone(),
              _ = y(1),
              T = y(0),
              C = y(0),
              R = y(1);
            c.signum() != 0;

          ) {
            for (; c.isEven(); )
              c.rShiftTo(1, c),
                o
                  ? ((_.isEven() && T.isEven()) ||
                      (_.addTo(this, _), T.subTo(a, T)),
                    _.rShiftTo(1, _))
                  : T.isEven() || T.subTo(a, T),
                T.rShiftTo(1, T);
            for (; m.isEven(); )
              m.rShiftTo(1, m),
                o
                  ? ((C.isEven() && R.isEven()) ||
                      (C.addTo(this, C), R.subTo(a, R)),
                    C.rShiftTo(1, C))
                  : R.isEven() || R.subTo(a, R),
                R.rShiftTo(1, R);
            c.compareTo(m) >= 0
              ? (c.subTo(m, c), o && _.subTo(C, _), T.subTo(R, T))
              : (m.subTo(c, m), o && C.subTo(_, C), R.subTo(T, R));
          }
          return m.compareTo(n.ONE) != 0
            ? n.ZERO
            : R.compareTo(a) >= 0
            ? R.subtract(a)
            : R.signum() < 0
            ? (R.addTo(a, R), R.signum() < 0 ? R.add(a) : R)
            : R;
        }),
        (n.prototype.pow = function (a) {
          return this.exp(a, new P());
        }),
        (n.prototype.gcd = function (a) {
          var o = this.s < 0 ? this.negate() : this.clone(),
            c = a.s < 0 ? a.negate() : a.clone();
          if (o.compareTo(c) < 0) {
            var m = o;
            (o = c), (c = m);
          }
          var _ = o.getLowestSetBit(),
            T = c.getLowestSetBit();
          if (T < 0) return o;
          for (
            _ < T && (T = _), T > 0 && (o.rShiftTo(T, o), c.rShiftTo(T, c));
            o.signum() > 0;

          )
            (_ = o.getLowestSetBit()) > 0 && o.rShiftTo(_, o),
              (_ = c.getLowestSetBit()) > 0 && c.rShiftTo(_, c),
              o.compareTo(c) >= 0
                ? (o.subTo(c, o), o.rShiftTo(1, o))
                : (c.subTo(o, c), c.rShiftTo(1, c));
          return T > 0 && c.lShiftTo(T, c), c;
        }),
        (n.prototype.isProbablePrime = function (a) {
          var o,
            c = this.abs();
          if (c.t == 1 && c[0] <= F[F.length - 1]) {
            for (o = 0; o < F.length; ++o) if (c[0] == F[o]) return !0;
            return !1;
          }
          if (c.isEven()) return !1;
          for (o = 1; o < F.length; ) {
            for (var m = F[o], _ = o + 1; _ < F.length && m < x; ) m *= F[_++];
            for (m = c.modInt(m); o < _; ) if (m % F[o++] == 0) return !1;
          }
          return c.millerRabin(a);
        }),
        (n.prototype.square = function () {
          var a = i();
          return this.squareTo(a), a;
        }),
        (n.prototype.Barrett = U),
        L == null)
      ) {
        var q;
        if (
          ((L = new Array()), (k = 0), typeof window < "u" && window.crypto)
        ) {
          if (window.crypto.getRandomValues) {
            var J = new Uint8Array(32);
            for (window.crypto.getRandomValues(J), q = 0; q < 32; ++q)
              L[k++] = J[q];
          } else if (
            navigator.appName == "Netscape" &&
            navigator.appVersion < "5"
          ) {
            var pe = window.crypto.random(32);
            for (q = 0; q < pe.length; ++q) L[k++] = 255 & pe.charCodeAt(q);
          }
        }
        for (; k < pt; )
          (q = Math.floor(65536 * Math.random())),
            (L[k++] = q >>> 8),
            (L[k++] = 255 & q);
        (k = 0), N();
      }
      function He() {
        if (M == null) {
          for (N(), (M = new Y()).init(L), k = 0; k < L.length; ++k) L[k] = 0;
          k = 0;
        }
        return M.next();
      }
      function _e() {}
      function Y() {
        (this.i = 0), (this.j = 0), (this.S = new Array());
      }
      (_e.prototype.nextBytes = function (a) {
        var o;
        for (o = 0; o < a.length; ++o) a[o] = He();
      }),
        (Y.prototype.init = function (a) {
          var o, c, m;
          for (o = 0; o < 256; ++o) this.S[o] = o;
          for (c = 0, o = 0; o < 256; ++o)
            (m = this.S[o]),
              (this.S[o] =
                this.S[(c = (c + this.S[o] + a[o % a.length]) & 255)]),
              (this.S[c] = m);
          (this.i = 0), (this.j = 0);
        }),
        (Y.prototype.next = function () {
          var a;
          return (
            (this.i = (this.i + 1) & 255),
            (this.j = (this.j + this.S[this.i]) & 255),
            (a = this.S[this.i]),
            (this.S[this.i] = this.S[this.j]),
            (this.S[this.j] = a),
            this.S[(a + this.S[this.i]) & 255]
          );
        });
      var pt = 256;
      e.exports = {
        default: n,
        BigInteger: n,
        SecureRandom: _e,
      };
    }.call(Ne));
  }),
  Pn = {
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    ripemd160: "3021300906052b2403020105000414",
  },
  Dn = {
    sha256: Si,
  };
function Ei(e, t) {
  if (
    ((this.n = null),
    (this.e = 0),
    !(e != null && t != null && e.length > 0 && t.length > 0))
  )
    throw new Error("Invalid key data");
  (this.n = new Ai.BigInteger(e, 16)), (this.e = parseInt(t, 16));
}
Ei.prototype.verify = function (e, t) {
  t = t.replace(/[^0-9a-f]|[\s\n]]/gi, "");
  var r = new Ai.BigInteger(t, 16);
  if (r.bitLength() > this.n.bitLength())
    throw new Error("Signature does not match with the key modulus.");
  var n = (function (s) {
    for (var u in Pn) {
      var p = Pn[u],
        l = p.length;
      if (s.substring(0, l) === p)
        return {
          alg: u,
          hash: s.substring(l),
        };
    }
    return [];
  })(
    r
      .modPowInt(this.e, this.n)
      .toString(16)
      .replace(/^1f+00/, "")
  );
  if (n.length === 0) return !1;
  if (!Dn.hasOwnProperty(n.alg))
    throw new Error("Hashing algorithm is not supported.");
  var i = Dn[n.alg](e).toString();
  return n.hash === i;
};
for (
  var is = [],
    ce = [],
    os = typeof Uint8Array < "u" ? Uint8Array : Array,
    sr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Ve = 0,
    ss = sr.length;
  Ve < ss;
  ++Ve
)
  (is[Ve] = sr[Ve]), (ce[sr.charCodeAt(Ve)] = Ve);
(ce["-".charCodeAt(0)] = 62), (ce["_".charCodeAt(0)] = 63);
var Ci = function (e) {
  var t,
    r,
    n = (function (f) {
      var g = f.length;
      if (g % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var y = f.indexOf("=");
      return y === -1 && (y = g), [y, y === g ? 0 : 4 - (y % 4)];
    })(e),
    i = n[0],
    s = n[1],
    u = new os(
      (function (f, g, y) {
        return (3 * (g + y)) / 4 - y;
      })(0, i, s)
    ),
    p = 0,
    l = s > 0 ? i - 4 : i;
  for (r = 0; r < l; r += 4)
    (t =
      (ce[e.charCodeAt(r)] << 18) |
      (ce[e.charCodeAt(r + 1)] << 12) |
      (ce[e.charCodeAt(r + 2)] << 6) |
      ce[e.charCodeAt(r + 3)]),
      (u[p++] = (t >> 16) & 255),
      (u[p++] = (t >> 8) & 255),
      (u[p++] = 255 & t);
  return (
    s === 2 &&
      ((t = (ce[e.charCodeAt(r)] << 2) | (ce[e.charCodeAt(r + 1)] >> 4)),
      (u[p++] = 255 & t)),
    s === 1 &&
      ((t =
        (ce[e.charCodeAt(r)] << 10) |
        (ce[e.charCodeAt(r + 1)] << 4) |
        (ce[e.charCodeAt(r + 2)] >> 2)),
      (u[p++] = (t >> 8) & 255),
      (u[p++] = 255 & t)),
    u
  );
};
function xi(e) {
  var t = e.length % 4;
  return t === 0 ? e : e + new Array(4 - t + 1).join("=");
}
function In(e) {
  return (
    (e = xi(e).replace(/\-/g, "+").replace(/_/g, "/")),
    decodeURIComponent(
      (function (t) {
        for (var r = "", n = 0; n < t.length; n++)
          r += String.fromCharCode(t[n]);
        return r;
      })(Ci(e))
        .split("")
        .map(function (t) {
          return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    )
  );
}
function ar(e) {
  return (function (t) {
    for (var r = "", n = 0; n < t.length; n++) {
      var i = t[n].toString(16);
      r += i.length === 2 ? i : "0" + i;
    }
    return r;
  })(Ci(xi(e)));
}
var as = Be(function (e) {
  var t, r;
  (t = Ne),
    (r = function () {
      function n(i) {
        var s = [];
        if (i.length === 0) return "";
        if (typeof i[0] != "string")
          throw new TypeError("Url must be a string. Received " + i[0]);
        if (i[0].match(/^[^/:]+:\/*$/) && i.length > 1) {
          var u = i.shift();
          i[0] = u + i[0];
        }
        i[0] = i[0].match(/^file:\/\/\//)
          ? i[0].replace(/^([^/:]+):\/*/, "$1:///")
          : i[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var p = 0; p < i.length; p++) {
          var l = i[p];
          if (typeof l != "string")
            throw new TypeError("Url must be a string. Received " + l);
          l !== "" &&
            (p > 0 && (l = l.replace(/^[\/]+/, "")),
            (l = l.replace(/[\/]+$/, p < i.length - 1 ? "" : "/")),
            s.push(l));
        }
        var f = s.join("/"),
          g = (f = f.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return g.shift() + (g.length > 0 ? "?" : "") + g.join("&");
      }
      return function () {
        return n(
          typeof arguments[0] == "object"
            ? arguments[0]
            : [].slice.call(arguments)
        );
      };
    }),
    e.exports ? (e.exports = r()) : (t.urljoin = r());
});
function us(e, t) {
  return (
    (t = t || {}),
    new Promise(function (r, n) {
      var i = new XMLHttpRequest(),
        s = [],
        u = [],
        p = {},
        l = function () {
          return {
            ok: ((i.status / 100) | 0) == 2,
            statusText: i.statusText,
            status: i.status,
            url: i.responseURL,
            text: function () {
              return Promise.resolve(i.responseText);
            },
            json: function () {
              return Promise.resolve(i.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([i.response]));
            },
            clone: l,
            headers: {
              keys: function () {
                return s;
              },
              entries: function () {
                return u;
              },
              get: function (g) {
                return p[g.toLowerCase()];
              },
              has: function (g) {
                return g.toLowerCase() in p;
              },
            },
          };
        };
      for (var f in (i.open(t.method || "get", e, !0),
      (i.onload = function () {
        i
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (g, y, b) {
            s.push((y = y.toLowerCase())),
              u.push([y, b]),
              (p[y] = p[y] ? p[y] + "," + b : b);
          }),
          r(l());
      }),
      (i.onerror = n),
      (i.withCredentials = t.credentials == "include"),
      t.headers))
        i.setRequestHeader(f, t.headers[f]);
      i.send(t.body || null);
    })
  );
}
function cs(e) {
  if (e.ok) return e.json();
  var t = new Error(e.statusText);
  return (t.response = e), Promise.reject(t);
}
function Lr(e) {
  (this.name = "ConfigurationError"), (this.message = e || "");
}
function z(e) {
  (this.name = "TokenValidationError"), (this.message = e || "");
}
(Lr.prototype = Error.prototype), (z.prototype = Error.prototype);
var ps = (function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.get = function () {
      return null;
    }),
    (t.has = function () {
      return null;
    }),
    (t.set = function () {
      return null;
    }),
    e
  );
})();
ts.polyfill();
var xt = function (e) {
    return typeof e == "number";
  },
  ls = function () {
    return new Date();
  };
function Ie(e) {
  var t = e || {};
  if (
    ((this.jwksCache = t.jwksCache || new ps()),
    (this.expectedAlg = t.expectedAlg || "RS256"),
    (this.issuer = t.issuer),
    (this.audience = t.audience),
    (this.leeway = t.leeway === 0 ? 0 : t.leeway || 60),
    (this.jwksURI = t.jwksURI),
    (this.maxAge = t.maxAge),
    (this.__clock = typeof t.__clock == "function" ? t.__clock : ls),
    this.leeway < 0 || this.leeway > 300)
  )
    throw new Lr("The leeway should be positive and lower than five minutes.");
  if (this.expectedAlg !== "RS256")
    throw new Lr(
      'Signature algorithm of "' +
        this.expectedAlg +
        '" is not supported. Expected the ID token to be signed with "RS256".'
    );
}
function Ri(e, t) {
  this.plugins = t;
  for (var r = 0; r < this.plugins.length; r++) {
    if (this.plugins[r].version !== Mt.raw) {
      var n = "";
      throw (
        (this.plugins[r].constructor &&
          this.plugins[r].constructor.name &&
          (n = this.plugins[r].constructor.name),
        new Error(
          "Plugin " +
            n +
            " version (" +
            this.plugins[r].version +
            ") is not compatible with the SDK version (" +
            Mt.raw +
            ")"
        ))
      );
    }
    this.plugins[r].setWebAuth(e);
  }
}
(Ie.prototype.verify = function (e, t, r) {
  if ((!r && t && typeof t == "function" && ((r = t), (t = void 0)), !e))
    return r(new z("ID token is required but missing"), null);
  var n = this.decode(e);
  if (n instanceof Error)
    return r(new z("ID token could not be decoded"), null);
  var i = n.encoded.header + "." + n.encoded.payload,
    s = ar(n.encoded.signature),
    u = n.header.alg,
    p = n.header.kid,
    l = n.payload.aud,
    f = n.payload.sub,
    g = n.payload.iss,
    y = n.payload.exp,
    b = n.payload.nbf,
    A = n.payload.iat,
    h = n.payload.azp,
    d = n.payload.auth_time,
    w = n.payload.nonce,
    O = this.__clock(),
    v = this;
  if (v.expectedAlg !== u)
    return r(
      new z(
        'Signature algorithm of "' +
          u +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      ),
      null
    );
  this.getRsaVerifier(g, p, function (S, E) {
    if (S) return r(S, null);
    if (!E.verify(i, s)) return r(new z("Invalid ID token signature."), null);
    if (!g || typeof g != "string")
      return r(
        new z("Issuer (iss) claim must be a string present in the ID token"),
        null
      );
    if (v.issuer !== g)
      return r(
        new z(
          'Issuer (iss) claim mismatch in the ID token, expected "' +
            v.issuer +
            '", found "' +
            g +
            '"'
        ),
        null
      );
    if (!f || typeof f != "string")
      return r(
        new z("Subject (sub) claim must be a string present in the ID token"),
        null
      );
    if (!l || (typeof l != "string" && !Array.isArray(l)))
      return r(
        new z(
          "Audience (aud) claim must be a string or array of strings present in the ID token"
        ),
        null
      );
    if (Array.isArray(l) && !l.includes(v.audience))
      return r(
        new z(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            v.audience +
            '" but was not one of "' +
            l.join(", ") +
            '"'
        ),
        null
      );
    if (typeof l == "string" && v.audience !== l)
      return r(
        new z(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            v.audience +
            '" but found "' +
            l +
            '"'
        ),
        null
      );
    if (t) {
      if (!w || typeof w != "string")
        return r(
          new z("Nonce (nonce) claim must be a string present in the ID token"),
          null
        );
      if (w !== t)
        return r(
          new z(
            'Nonce (nonce) claim value mismatch in the ID token; expected "' +
              t +
              '", found "' +
              w +
              '"'
          ),
          null
        );
    }
    if (Array.isArray(l) && l.length > 1) {
      if (!h || typeof h != "string")
        return r(
          new z(
            "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
          ),
          null
        );
      if (h !== v.audience)
        return r(
          new z(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              v.audience +
              '", found "' +
              h +
              '"'
          ),
          null
        );
    }
    if (!y || !xt(y))
      return r(
        new z(
          "Expiration Time (exp) claim must be a number present in the ID token"
        ),
        null
      );
    if (!A || !xt(A))
      return r(
        new z("Issued At (iat) claim must be a number present in the ID token"),
        null
      );
    var P = y + v.leeway,
      I = new Date(0);
    if ((I.setUTCSeconds(P), O > I))
      return r(
        new z(
          'Expiration Time (exp) claim error in the ID token; current time "' +
            O +
            '" is after expiration time "' +
            I +
            '"'
        ),
        null
      );
    if (b && xt(b)) {
      var U = b - v.leeway,
        M = new Date(0);
      if ((M.setUTCSeconds(U), O < M))
        return r(
          new z(
            'Not Before Time (nbf) claim error in the ID token; current time "' +
              O +
              '" is before the not before time "' +
              M +
              '"'
          ),
          null
        );
    }
    if (v.maxAge) {
      if (!d || !xt(d))
        return r(
          new z(
            "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
          ),
          null
        );
      var L = d + v.maxAge + v.leeway,
        k = new Date(0);
      if ((k.setUTCSeconds(L), O > k))
        return r(
          new z(
            'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time "' +
              O +
              '" is after last auth time at "' +
              k +
              '"'
          ),
          null
        );
    }
    return r(null, n.payload);
  });
}),
  (Ie.prototype.getRsaVerifier = function (e, t, r) {
    var n = this,
      i = e + t;
    Promise.resolve(this.jwksCache.has(i))
      .then(function (s) {
        return s
          ? n.jwksCache.get(i)
          : ((u = {
              jwksURI: n.jwksURI,
              iss: e,
              kid: t,
            }),
            (typeof fetch > "u" ? us : fetch)(
              u.jwksURI || as(u.iss, ".well-known", "jwks.json")
            )
              .then(cs)
              .then(function (p) {
                var l,
                  f,
                  g,
                  y = null;
                for (l = 0; l < p.keys.length && y === null; l++)
                  (f = p.keys[l]).kid === u.kid && (y = f);
                if (!y)
                  throw new Error(
                    'Could not find a public key for Key ID (kid) "' +
                      u.kid +
                      '"'
                  );
                return {
                  modulus: ar((g = y).n),
                  exp: ar(g.e),
                };
              })
              .catch(function (p) {
                throw p;
              }));
        var u;
      })
      .then(function (s) {
        if (!s || !s.modulus || !s.exp)
          throw new Error("Empty keyInfo in response");
        return Promise.resolve(n.jwksCache.set(i, s)).then(function () {
          r && r(null, new Ei(s.modulus, s.exp));
        });
      })
      .catch(function (s) {
        r && r(s);
      });
  }),
  (Ie.prototype.decode = function (e) {
    var t,
      r,
      n = e.split(".");
    if (n.length !== 3) return new z("Cannot decode a malformed JWT");
    try {
      (t = JSON.parse(In(n[0]))), (r = JSON.parse(In(n[1])));
    } catch {
      return new z("Token header or payload is not valid JSON");
    }
    return {
      header: t,
      payload: r,
      encoded: {
        header: n[0],
        payload: n[1],
        signature: n[2],
      },
    };
  }),
  (Ie.prototype.validateAccessToken = function (e, t, r, n) {
    if (this.expectedAlg !== t)
      return n(
        new z(
          'Signature algorithm of "' +
            t +
            '" is not supported. Expected "' +
            this.expectedAlg +
            '"'
        )
      );
    var i,
      s = Si(e),
      u = Rn.stringify(s),
      p = u.substring(0, u.length / 2),
      l = Rn.parse(p),
      f = ns.stringify(l);
    return n(
      ((i = {
        "+": "-",
        "/": "_",
        "=": "",
      }),
      f.replace(/[+/=]/g, function (g) {
        return i[g];
      }) !== r
        ? new z("Invalid access_token")
        : null)
    );
  }),
  (Ri.prototype.get = function (e) {
    for (var t = 0; t < this.plugins.length; t++)
      if (this.plugins[t].supports(e)) return this.plugins[t].init();
    return null;
  });
var kn = {
  randomString: function (e) {
    var t = new Uint8Array(e),
      r = [],
      n = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",
      i = j.getWindow().crypto || j.getWindow().msCrypto;
    if (!i) return null;
    for (var s = i.getRandomValues(t), u = 0; u < s.length; u++)
      r.push(n[s[u] % n.length]);
    return r.join("");
  },
};
function ke(e) {
  var t = e.transaction || {};
  (this.namespace = t.namespace || "com.auth0.auth."),
    (this.keyLength = t.keyLength || 32),
    (this.stateExpiration = e.stateExpiration
      ? e.stateExpiration / 60 / 24
      : 1 / 48),
    (this.storage = new ot(e)),
    (this.options = e);
}
function Ke(e) {
  if (
    ((this.url = e.url),
    (this.callback = e.callback),
    (this.timeout = e.timeout || 6e4),
    (this.timeoutCallback = e.timeoutCallback || null),
    (this.eventListenerType = e.eventListenerType || "message"),
    (this.iframe = null),
    (this.timeoutHandle = null),
    (this._destroyTimeout = null),
    (this.transientMessageEventListener = null),
    (this.proxyEventListener = null),
    (this.eventValidator = e.eventValidator || {
      isValid: function () {
        return !0;
      },
    }),
    typeof this.callback != "function")
  )
    throw new Error("options.callback must be a function");
}
function Xr(e) {
  (this.webAuth = e), (this.warn = new Le(e.baseOptions));
}
function vt(e, t) {
  (this.webAuth = e),
    (this.baseOptions = t),
    (this.request = new we(t)),
    (this.webMessageHandler = new Xr(e)),
    (this.storage = new ot(t));
}
function Un(e, t) {
  return ["co/verifier", encodeURIComponent(e), encodeURIComponent(t)].join(
    "/"
  );
}
function Br(e, t) {
  (this.webAuth = e),
    (this.baseOptions = t),
    (this.crossOriginAuthentication = new vt(e, this.baseOptions)),
    (this.warn = new Le({
      disableWarnings: !!t._disableDeprecationWarnings,
    }));
}
(ke.prototype.process = function (e) {
  if (!e.responseType) throw new Error("responseType is required");
  var t = e.realm || e.connection,
    r = e.responseType.indexOf("id_token") !== -1,
    n = this.generateTransaction(
      e.appState,
      e.state,
      e.nonce,
      t,
      r,
      e.organization
    );
  return (
    e.state || (e.state = n.state), r && !e.nonce && (e.nonce = n.nonce), e
  );
}),
  (ke.prototype.generateTransaction = function (e, t, r, n, i, s) {
    if (
      ((t = t || kn.randomString(this.keyLength)),
      (r = r || (i ? kn.randomString(this.keyLength) : null)),
      j.getWindow().location.host !== this.options.domain)
    ) {
      var u = {
        nonce: r,
        appState: e,
        state: t,
        lastUsedConnection: n,
      };
      s && (u.organization = s),
        this.storage.setItem(this.namespace + t, u, {
          expires: this.stateExpiration,
        });
    }
    return {
      state: t,
      nonce: r,
    };
  }),
  (ke.prototype.getStoredTransaction = function (e) {
    var t;
    return (
      (t = this.storage.getItem(this.namespace + e)),
      this.clearTransaction(e),
      t
    );
  }),
  (ke.prototype.clearTransaction = function (e) {
    this.storage.removeItem(this.namespace + e);
  }),
  (Ke.prototype.init = function () {
    var e = this,
      t = j.getWindow();
    switch (
      ((this.iframe = t.document.createElement("iframe")),
      (this.iframe.style.display = "none"),
      (this.proxyEventListener = function (r) {
        e.eventListener(r);
      }),
      this.eventListenerType)
    ) {
      case "message":
        this.eventSourceObject = t;
        break;
      case "load":
        this.eventSourceObject = this.iframe;
        break;
      default:
        throw new Error(
          "Unsupported event listener type: " + this.eventListenerType
        );
    }
    this.eventSourceObject.addEventListener(
      this.eventListenerType,
      this.proxyEventListener,
      !1
    ),
      t.document.body.appendChild(this.iframe),
      (this.iframe.src = this.url),
      (this.timeoutHandle = setTimeout(function () {
        e.timeoutHandler();
      }, this.timeout));
  }),
  (Ke.prototype.eventListener = function (e) {
    var t = {
      event: e,
      sourceObject: this.eventSourceObject,
    };
    this.eventValidator.isValid(t) && (this.destroy(), this.callback(t));
  }),
  (Ke.prototype.timeoutHandler = function () {
    this.destroy(), this.timeoutCallback && this.timeoutCallback();
  }),
  (Ke.prototype.destroy = function () {
    var e = this;
    clearTimeout(this.timeoutHandle),
      (this._destroyTimeout = setTimeout(function () {
        e.eventSourceObject.removeEventListener(
          e.eventListenerType,
          e.proxyEventListener,
          !1
        ),
          e.iframe.parentNode && e.iframe.parentNode.removeChild(e.iframe);
      }, 0));
  }),
  (Xr.prototype.run = function (e, t) {
    var r = this;
    (e.responseMode = "web_message"), (e.prompt = "none");
    var n = j.getOrigin(),
      i = D.getOriginFromUrl(e.redirectUri);
    if (i && n !== i)
      return t({
        error: "origin_mismatch",
        error_description:
          "The redirectUri's origin (" +
          i +
          ") should match the window's origin (" +
          n +
          ").",
      });
    (function (s, u, p) {
      new Ke({
        url: s,
        eventListenerType: "message",
        callback: function (l) {
          p(null, l);
        },
        timeout: u.timeout,
        eventValidator: {
          isValid: function (l) {
            return !(
              !l.event.data ||
              l.event.data.type !== "authorization_response" ||
              u.state !== l.event.data.response.state
            );
          },
        },
        timeoutCallback: function () {
          p({
            error: "timeout",
            error_description:
              "Timeout during executing web_message communication",
            state: u.state,
          });
        },
      }).init();
    })(this.webAuth.client.buildAuthorizeUrl(e), e, function (s, u) {
      var p = s;
      if (
        (!s && u.event.data.response.error && (p = u.event.data.response), !p)
      ) {
        var l = u.event.data.response;
        return r.webAuth.validateAuthenticationResponse(e, l, t);
      }
      return (
        p.error === "consent_required" &&
          j.getWindow().location.hostname === "localhost" &&
          r.warn.warning(
            "Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"
          ),
        r.webAuth.transactionManager.clearTransaction(p.state),
        t(D.pick(p, ["error", "error_description"]))
      );
    });
  }),
  (vt.prototype.login = function (e, t) {
    var r = this,
      n = Q(this.baseOptions.rootUrl, "/co/authenticate");
    (e.username = e.username || e.email), delete e.email;
    var i = {
      client_id: e.clientID || this.baseOptions.clientID,
      username: e.username,
    };
    e.password && (i.password = e.password), e.otp && (i.otp = e.otp);
    var s = e.realm || this.baseOptions.realm;
    if (s) {
      var u =
        e.credentialType ||
        this.baseOptions.credentialType ||
        "http://auth0.com/oauth/grant-type/password-realm";
      (i.realm = s), (i.credential_type = u);
    } else i.credential_type = "password";
    this.request
      .post(n)
      .withCredentials()
      .send(i)
      .end(function (p, l) {
        if (p) {
          var f = (p.response && p.response.body) || {
            error: "request_error",
            error_description: JSON.stringify(p),
          };
          return Z(t, {
            forceLegacyError: !0,
          })(f);
        }
        function g() {
          var y = e.popup === !0;
          e = D.blacklist(e, [
            "password",
            "credentialType",
            "otp",
            "popup",
            "onRedirecting",
          ]);
          var b = D.merge(e).with({
              loginTicket: l.body.login_ticket,
            }),
            A = Un(r.baseOptions.rootUrl, l.body.co_id);
          r.storage.setItem(A, l.body.co_verifier, {
            expires: 1 / 96,
          }),
            y
              ? r.webMessageHandler.run(
                  b,
                  Z(t, {
                    forceLegacyError: !0,
                  })
                )
              : r.webAuth.authorize(b);
        }
        typeof e.onRedirecting == "function" ? e.onRedirecting(g) : g();
      });
  }),
  (vt.prototype.callback = function () {
    var e = decodeURIComponent(
        (function (n) {
          var i = ("&" + j.getWindow().location.hash.substring(1)).split(
            "&" + n + "="
          );
          if (i.length === 2) return i.pop().split("&").shift();
        })("origin")
      ),
      t = j.getWindow(),
      r = this;
    t.addEventListener("message", function (n) {
      if (n.data.type === "co_verifier_request") {
        var i = Un(n.origin, n.data.request.id),
          s = (function (u, p) {
            try {
              var l = u.getItem(p);
              return u.removeItem(p), l || "";
            } catch {
              return "";
            }
          })(r.storage, i);
        n.source.postMessage(
          {
            type: "co_verifier_response",
            response: {
              verifier: s,
            },
          },
          n.origin
        );
      }
    }),
      t.parent.postMessage(
        {
          type: "ready",
        },
        e
      );
  }),
  (Br.prototype.loginWithCredentials = function (e, t) {
    (e.realm = e.realm || e.connection),
      delete e.connection,
      this.crossOriginAuthentication.login(e, t);
  }),
  (Br.prototype.signupAndLogin = function (e, t) {
    var r = this;
    return this.webAuth.client.dbConnection.signup(e, function (n) {
      return n
        ? t(n)
        : ((e.realm = e.realm || e.connection),
          delete e.connection,
          r.webAuth.login(e, t));
    });
  });
var qn = ut(function (e) {
    var t = (function () {
      function r(u, p, l) {
        u.attachEvent
          ? u.attachEvent("on" + p, l)
          : u.addEventListener && u.addEventListener(p, l, !1);
      }
      function n(u, p, l) {
        u.detachEvent
          ? u.detachEvent("on" + p, l)
          : u.removeEventListener && u.removeEventListener(p, l, !1);
      }
      function i(u) {
        /^https?:\/\//.test(u) || (u = window.location.href);
        var p = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(u);
        return p ? p[1] : u;
      }
      var s = (function () {
        if (typeof navigator > "u") return !1;
        var u = -1,
          p = navigator.userAgent;
        return (
          navigator.appName === "Microsoft Internet Explorer"
            ? new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(p) != null &&
              (u = parseFloat(RegExp.$1))
            : p.indexOf("Trident") > -1 &&
              new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(p) !== null &&
              (u = parseFloat(RegExp.$1)),
          u >= 8
        );
      })();
      return typeof window < "u" &&
        window.JSON &&
        window.JSON.stringify &&
        window.JSON.parse &&
        window.postMessage
        ? {
            open: function (u, p) {
              if (!p) throw "missing required callback argument";
              var l, f;
              u.url || (l = "missing required 'url' parameter"),
                u.relay_url || (l = "missing required 'relay_url' parameter"),
                l &&
                  setTimeout(function () {
                    p(l);
                  }, 0),
                u.window_name || (u.window_name = null),
                (u.window_features &&
                  !(function () {
                    try {
                      var O = navigator.userAgent;
                      return (
                        O.indexOf("Fennec/") != -1 ||
                        (O.indexOf("Firefox/") != -1 &&
                          O.indexOf("Android") != -1)
                      );
                    } catch {}
                    return !1;
                  })()) ||
                  (u.window_features = void 0);
              var g,
                y = u.origin || i(u.url);
              if (y !== i(u.relay_url))
                return setTimeout(function () {
                  p(
                    "invalid arguments: origin of url and relay_url must match"
                  );
                }, 0);
              s &&
                ((f = document.createElement("iframe")).setAttribute(
                  "src",
                  u.relay_url
                ),
                (f.style.display = "none"),
                f.setAttribute("name", "__winchan_relay_frame"),
                document.body.appendChild(f),
                (g = f.contentWindow));
              var b =
                u.popup || window.open(u.url, u.window_name, u.window_features);
              u.popup && (b.location.href = u.url), g || (g = b);
              var A = setInterval(function () {
                  b &&
                    b.closed &&
                    (d(), p && (p("User closed the popup window"), (p = null)));
                }, 500),
                h = JSON.stringify({
                  a: "request",
                  d: u.params,
                });
              function d() {
                if (
                  (f && document.body.removeChild(f),
                  (f = void 0),
                  A && (A = clearInterval(A)),
                  n(window, "message", w),
                  n(window, "unload", d),
                  b)
                )
                  try {
                    b.close();
                  } catch {
                    g.postMessage("die", y);
                  }
                b = g = void 0;
              }
              function w(O) {
                if (O.origin === y) {
                  try {
                    var v = JSON.parse(O.data);
                  } catch (S) {
                    if (p) return p(S);
                    throw S;
                  }
                  v.a === "ready"
                    ? g.postMessage(h, y)
                    : v.a === "error"
                    ? (d(), p && (p(v.d), (p = null)))
                    : v.a === "response" &&
                      (d(), p && (p(null, v.d), (p = null)));
                }
              }
              return (
                r(window, "unload", d),
                r(window, "message", w),
                {
                  originalPopup: b,
                  close: d,
                  focus: function () {
                    if (b)
                      try {
                        b.focus();
                      } catch {}
                  },
                }
              );
            },
            onOpen: function (u) {
              var p = "*",
                l = s
                  ? (function () {
                      for (
                        var b = window.opener.frames, A = b.length - 1;
                        A >= 0;
                        A--
                      )
                        try {
                          if (
                            b[A].location.protocol ===
                              window.location.protocol &&
                            b[A].location.host === window.location.host &&
                            b[A].name === "__winchan_relay_frame"
                          )
                            return b[A];
                        } catch {}
                    })()
                  : window.opener;
              if (!l) throw "can't find relay frame";
              function f(b) {
                (b = JSON.stringify(b)),
                  s ? l.doPost(b, p) : l.postMessage(b, p);
              }
              function g(b) {
                if (b.data === "die")
                  try {
                    window.close();
                  } catch {}
              }
              r(s ? l : window, "message", function b(A) {
                var h;
                try {
                  h = JSON.parse(A.data);
                } catch {}
                h &&
                  h.a === "request" &&
                  (n(window, "message", b),
                  (p = A.origin),
                  u &&
                    setTimeout(function () {
                      u(p, h.d, function (d) {
                        (u = void 0),
                          f({
                            a: "response",
                            d,
                          });
                      });
                    }, 0));
              }),
                r(s ? l : window, "message", g);
              try {
                f({
                  a: "ready",
                });
              } catch {
                r(l, "load", function (A) {
                  f({
                    a: "ready",
                  });
                });
              }
              var y = function () {
                try {
                  n(s ? l : window, "message", g);
                } catch {}
                u &&
                  f({
                    a: "error",
                    d: "client closed window",
                  }),
                  (u = void 0);
                try {
                  window.close();
                } catch {}
              };
              return (
                r(window, "unload", y),
                {
                  detach: function () {
                    n(window, "unload", y);
                  },
                }
              );
            },
          }
        : {
            open: function (u, p, l, f) {
              setTimeout(function () {
                f("unsupported browser");
              }, 0);
            },
            onOpen: function (u) {
              setTimeout(function () {
                u("unsupported browser");
              }, 0);
            },
          };
    })();
    e.exports && (e.exports = t);
  }),
  hs = {
    extractOrigin: function (e) {
      /^https?:\/\//.test(e) || (e = window.location.href);
      var t = /^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(e);
      return t ? t[1] : e;
    },
  };
function Rt() {
  this._current_popup = null;
}
function me(e, t) {
  (this.baseOptions = t),
    (this.baseOptions.popupOrigin = t.popupOrigin),
    (this.client = e.client),
    (this.webAuth = e),
    (this.transactionManager = new ke(this.baseOptions)),
    (this.crossOriginAuthentication = new vt(e, this.baseOptions)),
    (this.warn = new Le({
      disableWarnings: !!t._disableDeprecationWarnings,
    }));
}
function Ze(e) {
  (this.authenticationUrl = e.authenticationUrl),
    (this.timeout = e.timeout || 6e4),
    (this.handler = null),
    (this.postMessageDataType = e.postMessageDataType || !1),
    (this.postMessageOrigin =
      e.postMessageOrigin ||
      j.getWindow().location.origin ||
      j.getWindow().location.protocol +
        "//" +
        j.getWindow().location.hostname +
        (j.getWindow().location.port ? ":" + j.getWindow().location.port : ""));
}
function ur(e) {
  (this.baseOptions = e),
    (this.request = new we(e)),
    (this.transactionManager = new ke(this.baseOptions));
}
function Dt(e, t) {
  (this.baseOptions = t),
    (this.client = e),
    (this.baseOptions.universalLoginPage = !0),
    (this.request = new we(this.baseOptions)),
    (this.warn = new Le({
      disableWarnings: !!t._disableDeprecationWarnings,
    }));
}
(Rt.prototype.calculatePosition = function (e) {
  var t = e.width || 500,
    r = e.height || 600,
    n = j.getWindow(),
    i = n.screenX !== void 0 ? n.screenX : n.screenLeft,
    s = n.screenY !== void 0 ? n.screenY : n.screenTop,
    u = n.outerWidth !== void 0 ? n.outerWidth : n.document.body.clientWidth,
    p = n.outerHeight !== void 0 ? n.outerHeight : n.document.body.clientHeight;
  return {
    width: t,
    height: r,
    left: e.left || i + (u - t) / 2,
    top: e.top || s + (p - r) / 2,
  };
}),
  (Rt.prototype.preload = function (e) {
    var t = this,
      r = j.getWindow(),
      n = this.calculatePosition(e.popupOptions || {}),
      i = D.merge(n).with(e.popupOptions),
      s = e.url || "about:blank",
      u = nt(i, {
        encode: !1,
        delimiter: ",",
      });
    return (
      (this._current_popup && !this._current_popup.closed) ||
        ((this._current_popup = r.open(s, "auth0_signup_popup", u)),
        (this._current_popup.kill = function () {
          this.close(), (t._current_popup = null);
        })),
      this._current_popup
    );
  }),
  (Rt.prototype.load = function (e, t, r, n) {
    var i = this,
      s = this.calculatePosition(r.popupOptions || {}),
      u = D.merge(s).with(r.popupOptions),
      p = D.merge({
        url: e,
        relay_url: t,
        window_features: nt(u, {
          delimiter: ",",
          encode: !1,
        }),
        popup: this._current_popup,
      }).with(r),
      l = qn.open(p, function (f, g) {
        if (!f || f.name !== "SyntaxError")
          return (i._current_popup = null), n(f, g);
      });
    return l.focus(), l;
  }),
  (me.prototype.buildPopupHandler = function () {
    var e = this.baseOptions.plugins.get("popup.getPopupHandler");
    return e ? e.getPopupHandler() : new Rt();
  }),
  (me.prototype.preload = function (e) {
    e = e || {};
    var t = this.buildPopupHandler();
    return t.preload(e), t;
  }),
  (me.prototype.getPopupHandler = function (e, t) {
    return e.popupHandler
      ? e.popupHandler
      : t
      ? this.preload(e)
      : this.buildPopupHandler();
  }),
  (me.prototype.callback = function (e) {
    var t = this,
      r = j.getWindow(),
      n =
        (e = e || {}).popupOrigin ||
        this.baseOptions.popupOrigin ||
        j.getOrigin();
    r.opener
      ? qn.onOpen(function (i, s, u) {
          if (i !== n)
            return u({
              error: "origin_mismatch",
              error_description:
                "The popup's origin (" +
                i +
                ") should match the `popupOrigin` parameter (" +
                n +
                ").",
            });
          t.webAuth.parseHash(e || {}, function (p, l) {
            return u(p || l);
          });
        })
      : (r.doPost = function (i) {
          r.parent && r.parent.postMessage(i, n);
        });
  }),
  (me.prototype.authorize = function (e, t) {
    var r,
      n,
      i = {},
      s = this.baseOptions.plugins.get("popup.authorize"),
      u = D.merge(this.baseOptions, [
        "clientID",
        "scope",
        "domain",
        "audience",
        "tenant",
        "responseType",
        "redirectUri",
        "_csrf",
        "state",
        "_intstate",
        "nonce",
        "organization",
        "invitation",
      ]).with(D.blacklist(e, ["popupHandler"]));
    return (
      B.check(
        u,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          responseType: {
            type: "string",
            message: "responseType option is required",
          },
        }
      ),
      (n = Q(this.baseOptions.rootUrl, "relay.html")),
      e.owp
        ? (u.owp = !0)
        : ((i.origin = hs.extractOrigin(u.redirectUri)), (n = u.redirectUri)),
      e.popupOptions &&
        (i.popupOptions = D.pick(e.popupOptions, [
          "width",
          "height",
          "top",
          "left",
        ])),
      s && (u = s.processParams(u)),
      ((u = this.transactionManager.process(u)).scope =
        u.scope || "openid profile email"),
      delete u.domain,
      (r = this.client.buildAuthorizeUrl(u)),
      this.getPopupHandler(e).load(
        r,
        n,
        i,
        Z(t, {
          keepOriginalCasing: !0,
        })
      )
    );
  }),
  (me.prototype.loginWithCredentials = function (e, t) {
    (e.realm = e.realm || e.connection),
      (e.popup = !0),
      (e = D.merge(this.baseOptions, [
        "redirectUri",
        "responseType",
        "state",
        "nonce",
        "timeout",
      ]).with(D.blacklist(e, ["popupHandler", "connection"]))),
      (e = this.transactionManager.process(e)),
      this.crossOriginAuthentication.login(e, t);
  }),
  (me.prototype.passwordlessVerify = function (e, t) {
    var r = this;
    return this.client.passwordless.verify(
      D.blacklist(e, ["popupHandler"]),
      function (n) {
        if (n) return t(n);
        (e.username = e.phoneNumber || e.email),
          (e.password = e.verificationCode),
          delete e.email,
          delete e.phoneNumber,
          delete e.verificationCode,
          delete e.type,
          r.client.loginWithResourceOwner(e, t);
      }
    );
  }),
  (me.prototype.signupAndLogin = function (e, t) {
    var r = this;
    return this.client.dbConnection.signup(e, function (n) {
      if (n) return t(n);
      r.loginWithCredentials(e, t);
    });
  }),
  (Ze.create = function (e) {
    return new Ze(e);
  }),
  (Ze.prototype.login = function (e, t) {
    (this.handler = new Ke({
      auth0: this.auth0,
      url: this.authenticationUrl,
      eventListenerType: e ? "message" : "load",
      callback: this.getCallbackHandler(t, e),
      timeout: this.timeout,
      eventValidator: this.getEventValidator(),
      timeoutCallback: function () {
        t(
          null,
          "#error=timeout&error_description=Timeout+during+authentication+renew."
        );
      },
      usePostMessage: e || !1,
    })),
      this.handler.init();
  }),
  (Ze.prototype.getEventValidator = function () {
    var e = this;
    return {
      isValid: function (t) {
        switch (t.event.type) {
          case "message":
            return (
              t.event.origin === e.postMessageOrigin &&
              t.event.source === e.handler.iframe.contentWindow &&
              (e.postMessageDataType === !1 ||
                (t.event.data.type &&
                  t.event.data.type === e.postMessageDataType))
            );
          case "load":
            if (t.sourceObject.contentWindow.location.protocol === "about:")
              return !1;
          default:
            return !0;
        }
      },
    };
  }),
  (Ze.prototype.getCallbackHandler = function (e, t) {
    return function (r) {
      var n;
      (n = t
        ? typeof r.event.data == "object" && r.event.data.hash
          ? r.event.data.hash
          : r.event.data
        : r.sourceObject.contentWindow.location.hash),
        e(null, n);
    };
  }),
  (ur.prototype.login = function (e, t) {
    var r, n;
    return (
      (r = Q(this.baseOptions.rootUrl, "usernamepassword", "login")),
      (e.username = e.username || e.email),
      (e = D.blacklist(e, ["email", "onRedirecting"])),
      (n = D.merge(this.baseOptions, [
        "clientID",
        "redirectUri",
        "tenant",
        "responseType",
        "responseMode",
        "scope",
        "audience",
      ]).with(e)),
      (n = this.transactionManager.process(n)),
      (n = D.toSnakeCase(n, ["auth0Client"])),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (ur.prototype.callback = function (e) {
    var t,
      r = j.getDocument();
    ((t = r.createElement("div")).innerHTML = e),
      r.body.appendChild(t).children[0].submit();
  }),
  (Dt.prototype.login = function (e, t) {
    if (j.getWindow().location.host !== this.baseOptions.domain)
      throw new Error(
        "This method is meant to be used only inside the Universal Login Page."
      );
    var r,
      n = D.merge(this.baseOptions, [
        "clientID",
        "redirectUri",
        "tenant",
        "responseType",
        "responseMode",
        "scope",
        "audience",
        "_csrf",
        "state",
        "_intstate",
        "nonce",
      ]).with(e);
    return (
      B.check(
        n,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          responseType: {
            type: "string",
            message: "responseType option is required",
          },
        }
      ),
      (r = new ur(this.baseOptions)).login(n, function (i, s) {
        if (i) return t(i);
        function u() {
          r.callback(s);
        }
        if (typeof e.onRedirecting == "function")
          return e.onRedirecting(function () {
            u();
          });
        u();
      })
    );
  }),
  (Dt.prototype.signupAndLogin = function (e, t) {
    var r = this;
    return r.client.client.dbConnection.signup(e, function (n) {
      return n ? t(n) : r.login(e, t);
    });
  }),
  (Dt.prototype.getSSOData = function (e, t) {
    var r,
      n = "";
    return (
      typeof e == "function" && ((t = e), (e = !1)),
      B.check(e, {
        type: "boolean",
        message: "withActiveDirectories parameter is not valid",
      }),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      e &&
        (n =
          "?" +
          nt({
            ldaps: 1,
            client_id: this.baseOptions.clientID,
          })),
      (r = Q(this.baseOptions.rootUrl, "user", "ssodata", n)),
      this.request
        .get(r, {
          noHeaders: !0,
        })
        .withCredentials()
        .end(Z(t))
    );
  });
var Mn = function () {},
  Nn = {
    lang: "en",
    templates: {
      auth0: function (e) {
        var t =
          e.type === "code"
            ? "Enter the code shown above"
            : "Solve the formula shown above";
        return (
          `<div class="captcha-challenge">
  <img src="` +
          e.image +
          `" />
  <button type="button" class="captcha-reload">↺</button>
</div>
<input type="text" name="captcha"
  class="form-control captcha-control"
  placeholder="` +
          t +
          '" />'
        );
      },
      recaptcha_v2: function () {
        return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />';
      },
      recaptcha_enterprise: function () {
        return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />';
      },
      error: function () {
        return '<div class="error" style="color: red;">Error getting the bot detection challenge. Please contact the system administrator.</div>';
      },
    },
  };
function Ln(e, t, r, n) {
  (e.innerHTML = t.templates[r.provider](r)),
    e.querySelector(".captcha-reload").addEventListener("click", function (i) {
      i.preventDefault(), n();
    });
}
function Bn(e) {
  switch (e) {
    case "recaptcha_v2":
      return window.grecaptcha;
    case "recaptcha_enterprise":
      return window.grecaptcha.enterprise;
    default:
      throw new Error("Unknown captcha provider");
  }
}
function fs(e, t, r) {
  var n = "recaptchaCallback_" + Math.floor(1000001 * Math.random());
  window[n] = function () {
    delete window[n], r();
  };
  var i = window.document.createElement("script");
  (i.src = (function (s, u, p) {
    switch (s) {
      case "recaptcha_v2":
        return (
          "https://www.recaptcha.net/recaptcha/api.js?hl=" + u + "&onload=" + p
        );
      case "recaptcha_enterprise":
        return (
          "https://www.recaptcha.net/recaptcha/enterprise.js?render=explicit&hl=" +
          u +
          "&onload=" +
          p
        );
      default:
        throw new Error("Unknown captcha provider");
    }
  })(t.provider, t.lang, n)),
    (i.async = !0),
    window.document.body.appendChild(i);
}
function Fn(e, t, r) {
  var n = e.hasAttribute("data-wid") && e.getAttribute("data-wid");
  function i(u) {
    e.querySelector('input[name="captcha"]').value = u || "";
  }
  if (n) return i(), void Bn(r.provider).reset(n);
  e.innerHTML = t.templates[r.provider](r);
  var s = e.querySelector(".recaptcha");
  fs(
    0,
    {
      lang: t.lang,
      provider: r.provider,
    },
    function () {
      var u = Bn(r.provider);
      (n = u.render(s, {
        callback: i,
        "expired-callback": function () {
          i();
        },
        "error-callback": function () {
          i();
        },
        sitekey: r.siteKey,
      })),
        e.setAttribute("data-wid", n);
    }
  );
}
var Hn = {
  render: function (e, t, r, n) {
    function i(s) {
      (s = s || Mn),
        e.getChallenge(function (u, p) {
          return u
            ? ((t.innerHTML = r.templates.error(u)), s(u))
            : p.required
            ? ((t.style.display = ""),
              p.provider === "auth0"
                ? Ln(t, r, p, i)
                : (p.provider !== "recaptcha_v2" &&
                    p.provider !== "recaptcha_enterprise") ||
                  Fn(t, r, p),
              void s())
            : ((t.style.display = "none"), void (t.innerHTML = ""));
        });
    }
    return (
      (r = D.merge(Nn).with(r || {})),
      i(n),
      {
        reload: i,
        getValue: function () {
          var s = t.querySelector('input[name="captcha"]');
          if (s) return s.value;
        },
      }
    );
  },
  renderPasswordless: function (e, t, r, n) {
    function i(s) {
      (s = s || Mn),
        e.passwordless.getChallenge(function (u, p) {
          return u
            ? ((t.innerHTML = r.templates.error(u)), s(u))
            : p.required
            ? ((t.style.display = ""),
              p.provider === "auth0"
                ? Ln(t, r, p, i)
                : (p.provider !== "recaptcha_v2" &&
                    p.provider !== "recaptcha_enterprise") ||
                  Fn(t, r, p),
              void s())
            : ((t.style.display = "none"), void (t.innerHTML = ""));
        });
    }
    return (
      (r = D.merge(Nn).with(r || {})),
      i(n),
      {
        reload: i,
        getValue: function () {
          var s = t.querySelector('input[name="captcha"]');
          if (s) return s.value;
        },
      }
    );
  },
};
function ds() {
  return new Date();
}
function V(e) {
  B.check(
    e,
    {
      type: "object",
      message: "options parameter is not valid",
    },
    {
      domain: {
        type: "string",
        message: "domain option is required",
      },
      clientID: {
        type: "string",
        message: "clientID option is required",
      },
      responseType: {
        optional: !0,
        type: "string",
        message: "responseType is not valid",
      },
      responseMode: {
        optional: !0,
        type: "string",
        message: "responseMode is not valid",
      },
      redirectUri: {
        optional: !0,
        type: "string",
        message: "redirectUri is not valid",
      },
      scope: {
        optional: !0,
        type: "string",
        message: "scope is not valid",
      },
      audience: {
        optional: !0,
        type: "string",
        message: "audience is not valid",
      },
      popupOrigin: {
        optional: !0,
        type: "string",
        message: "popupOrigin is not valid",
      },
      leeway: {
        optional: !0,
        type: "number",
        message: "leeway is not valid",
      },
      plugins: {
        optional: !0,
        type: "array",
        message: "plugins is not valid",
      },
      maxAge: {
        optional: !0,
        type: "number",
        message: "maxAge is not valid",
      },
      stateExpiration: {
        optional: !0,
        type: "number",
        message: "stateExpiration is not valid",
      },
      legacySameSiteCookie: {
        optional: !0,
        type: "boolean",
        message: "legacySameSiteCookie option is not valid",
      },
      _disableDeprecationWarnings: {
        optional: !0,
        type: "boolean",
        message: "_disableDeprecationWarnings option is not valid",
      },
      _sendTelemetry: {
        optional: !0,
        type: "boolean",
        message: "_sendTelemetry option is not valid",
      },
      _telemetryInfo: {
        optional: !0,
        type: "object",
        message: "_telemetryInfo option is not valid",
      },
      _timesToRetryFailedRequests: {
        optional: !0,
        type: "number",
        message: "_timesToRetryFailedRequests option is not valid",
      },
    }
  ),
    e.overrides &&
      B.check(
        e.overrides,
        {
          type: "object",
          message: "overrides option is not valid",
        },
        {
          __tenant: {
            optional: !0,
            type: "string",
            message: "__tenant option is required",
          },
          __token_issuer: {
            optional: !0,
            type: "string",
            message: "__token_issuer option is required",
          },
          __jwks_uri: {
            optional: !0,
            type: "string",
            message: "__jwks_uri is required",
          },
        }
      ),
    (this.baseOptions = e),
    (this.baseOptions.plugins = new Ri(this, this.baseOptions.plugins || [])),
    (this.baseOptions._sendTelemetry =
      this.baseOptions._sendTelemetry !== !1 ||
      this.baseOptions._sendTelemetry),
    (this.baseOptions._timesToRetryFailedRequests =
      e._timesToRetryFailedRequests
        ? parseInt(e._timesToRetryFailedRequests)
        : 0),
    (this.baseOptions.tenant =
      (this.baseOptions.overrides && this.baseOptions.overrides.__tenant) ||
      this.baseOptions.domain.split(".")[0]),
    (this.baseOptions.token_issuer =
      (this.baseOptions.overrides &&
        this.baseOptions.overrides.__token_issuer) ||
      "https://" + this.baseOptions.domain + "/"),
    (this.baseOptions.jwksURI =
      this.baseOptions.overrides && this.baseOptions.overrides.__jwks_uri),
    e.legacySameSiteCookie !== !1 &&
      (this.baseOptions.legacySameSiteCookie = !0),
    (this.transactionManager = new ke(this.baseOptions)),
    (this.client = new ae(this.baseOptions)),
    (this.redirect = new Br(this, this.baseOptions)),
    (this.popup = new me(this, this.baseOptions)),
    (this.crossOriginAuthentication = new vt(this, this.baseOptions)),
    (this.webMessageHandler = new Xr(this)),
    (this._universalLogin = new Dt(this, this.baseOptions)),
    (this.ssodataStorage = new Nt(this.baseOptions));
}
function mt(e, t) {
  (this.baseOptions = t), (this.request = e);
}
function Fr(e, t) {
  (this.baseOptions = t), (this.request = e);
}
function ae(e, t) {
  arguments.length === 2 ? (this.auth0 = e) : (t = e),
    B.check(
      t,
      {
        type: "object",
        message: "options parameter is not valid",
      },
      {
        domain: {
          type: "string",
          message: "domain option is required",
        },
        clientID: {
          type: "string",
          message: "clientID option is required",
        },
        responseType: {
          optional: !0,
          type: "string",
          message: "responseType is not valid",
        },
        responseMode: {
          optional: !0,
          type: "string",
          message: "responseMode is not valid",
        },
        redirectUri: {
          optional: !0,
          type: "string",
          message: "redirectUri is not valid",
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope is not valid",
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience is not valid",
        },
        _disableDeprecationWarnings: {
          optional: !0,
          type: "boolean",
          message: "_disableDeprecationWarnings option is not valid",
        },
        _sendTelemetry: {
          optional: !0,
          type: "boolean",
          message: "_sendTelemetry option is not valid",
        },
        _telemetryInfo: {
          optional: !0,
          type: "object",
          message: "_telemetryInfo option is not valid",
        },
      }
    ),
    (this.baseOptions = t),
    (this.baseOptions._sendTelemetry =
      this.baseOptions._sendTelemetry !== !1 ||
      this.baseOptions._sendTelemetry),
    (this.baseOptions.rootUrl =
      this.baseOptions.domain &&
      this.baseOptions.domain.toLowerCase().indexOf("http") === 0
        ? this.baseOptions.domain
        : "https://" + this.baseOptions.domain),
    (this.request = new we(this.baseOptions)),
    (this.passwordless = new mt(this.request, this.baseOptions)),
    (this.dbConnection = new Fr(this.request, this.baseOptions)),
    (this.warn = new Le({
      disableWarnings: !!t._disableDeprecationWarnings,
    })),
    (this.ssodataStorage = new Nt(this.baseOptions));
}
(V.prototype.parseHash = function (e, t) {
  var r, n;
  t || typeof e != "function" ? (e = e || {}) : ((t = e), (e = {}));
  var i = e.hash === void 0 ? j.getWindow().location.hash : e.hash;
  if (((i = i.replace(/^#?\/?/, "")), (r = Do(i)).hasOwnProperty("error")))
    return (
      (n = Te.buildResponse(r.error, r.error_description)),
      r.state && (n.state = r.state),
      t(n)
    );
  if (
    !r.hasOwnProperty("access_token") &&
    !r.hasOwnProperty("id_token") &&
    !r.hasOwnProperty("refresh_token")
  )
    return t(null, null);
  var s = (this.baseOptions.responseType || e.responseType || "").split(" ");
  return s.length > 0 &&
    s.indexOf("token") !== -1 &&
    !r.hasOwnProperty("access_token")
    ? t(
        Te.buildResponse(
          "invalid_hash",
          "response_type contains `token`, but the parsed hash does not contain an `access_token` property"
        )
      )
    : s.length > 0 &&
      s.indexOf("id_token") !== -1 &&
      !r.hasOwnProperty("id_token")
    ? t(
        Te.buildResponse(
          "invalid_hash",
          "response_type contains `id_token`, but the parsed hash does not contain an `id_token` property"
        )
      )
    : this.validateAuthenticationResponse(e, r, t);
}),
  (V.prototype.validateAuthenticationResponse = function (e, t, r) {
    var n = this;
    e.__enableIdPInitiatedLogin =
      e.__enableIdPInitiatedLogin || e.__enableImpersonation;
    var i = t.state,
      s = this.transactionManager.getStoredTransaction(i),
      u = e.state || (s && s.state) || null,
      p = u === i;
    if (!(!i && !u && e.__enableIdPInitiatedLogin) && !p)
      return r({
        error: "invalid_token",
        errorDescription: "`state` does not match.",
      });
    var l = e.nonce || (s && s.nonce) || null,
      f = s && s.organization,
      g = e.state || (s && s.appState) || null,
      y = function (b, A) {
        if (b) return r(b);
        var h;
        return (
          s &&
            s.lastUsedConnection &&
            (A && (h = A.sub), n.ssodataStorage.set(s.lastUsedConnection, h)),
          r(
            null,
            (function (d, w, O) {
              return {
                accessToken: d.access_token || null,
                idToken: d.id_token || null,
                idTokenPayload: O || null,
                appState: w || null,
                refreshToken: d.refresh_token || null,
                state: d.state || null,
                expiresIn: d.expires_in ? parseInt(d.expires_in, 10) : null,
                tokenType: d.token_type || null,
                scope: d.scope || null,
              };
            })(t, g, A)
          )
        );
      };
    return t.id_token
      ? this.validateToken(t.id_token, l, function (b, A) {
          if (!b) {
            if (f) {
              if (!A.org_id)
                return y(
                  Te.invalidToken(
                    "Organization Id (org_id) claim must be a string present in the ID token"
                  )
                );
              if (A.org_id !== f)
                return y(
                  Te.invalidToken(
                    'Organization Id (org_id) claim value mismatch in the ID token; expected "' +
                      f +
                      '", found "' +
                      A.org_id +
                      '"'
                  )
                );
            }
            return t.access_token && A.at_hash
              ? new Ie().validateAccessToken(
                  t.access_token,
                  "RS256",
                  A.at_hash,
                  function (d) {
                    return d ? y(Te.invalidToken(d.message)) : y(null, A);
                  }
                )
              : y(null, A);
          }
          if (
            b.error !== "invalid_token" ||
            (b.errorDescription &&
              b.errorDescription.indexOf(
                "Nonce (nonce) claim value mismatch in the ID token"
              ) > -1)
          )
            return y(b);
          var h = new Ie().decode(t.id_token);
          return h.header.alg !== "HS256"
            ? y(b)
            : (h.payload.nonce || null) !== l
            ? y({
                error: "invalid_token",
                errorDescription:
                  'Nonce (nonce) claim value mismatch in the ID token; expected "' +
                  l +
                  '", found "' +
                  h.payload.nonce +
                  '"',
              })
            : t.access_token
            ? n.client.userInfo(t.access_token, function (d, w) {
                return d ? y(d) : y(null, w);
              })
            : y({
                error: "invalid_token",
                description:
                  "The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can’t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token",
              });
        })
      : y(null, null);
  }),
  (V.prototype.validateToken = function (e, t, r) {
    new Ie({
      issuer: this.baseOptions.token_issuer,
      jwksURI: this.baseOptions.jwksURI,
      audience: this.baseOptions.clientID,
      leeway: this.baseOptions.leeway || 60,
      maxAge: this.baseOptions.maxAge,
      __clock: this.baseOptions.__clock || ds,
    }).verify(e, t, function (n, i) {
      if (n) return r(Te.invalidToken(n.message));
      r(null, i);
    });
  }),
  (V.prototype.renewAuth = function (e, t) {
    var r = !!e.usePostMessage,
      n = e.postMessageDataType || !1,
      i = e.postMessageOrigin || j.getWindow().origin,
      s = e.timeout,
      u = this,
      p = D.merge(this.baseOptions, [
        "clientID",
        "redirectUri",
        "responseType",
        "scope",
        "audience",
        "_csrf",
        "state",
        "_intstate",
        "nonce",
      ]).with(e);
    (p.responseType = p.responseType || "token"),
      (p.responseMode = p.responseMode || "fragment"),
      (p = this.transactionManager.process(p)),
      B.check(p, {
        type: "object",
        message: "options parameter is not valid",
      }),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (p.prompt = "none"),
      (p = D.blacklist(p, [
        "usePostMessage",
        "tenant",
        "postMessageDataType",
        "postMessageOrigin",
      ])),
      Ze.create({
        authenticationUrl: this.client.buildAuthorizeUrl(p),
        postMessageDataType: n,
        postMessageOrigin: i,
        timeout: s,
      }).login(r, function (l, f) {
        if (typeof f == "object") return t(l, f);
        u.parseHash(
          {
            hash: f,
          },
          t
        );
      });
  }),
  (V.prototype.checkSession = function (e, t) {
    var r = D.merge(this.baseOptions, [
      "clientID",
      "responseType",
      "redirectUri",
      "scope",
      "audience",
      "_csrf",
      "state",
      "_intstate",
      "nonce",
    ]).with(e);
    return r.responseType === "code"
      ? t({
          error: "error",
          error_description: "responseType can't be `code`",
        })
      : (e.nonce || (r = this.transactionManager.process(r)),
        r.redirectUri
          ? (B.check(r, {
              type: "object",
              message: "options parameter is not valid",
            }),
            B.check(t, {
              type: "function",
              message: "cb parameter is not valid",
            }),
            (r = D.blacklist(r, [
              "usePostMessage",
              "tenant",
              "postMessageDataType",
            ])),
            void this.webMessageHandler.run(
              r,
              Z(t, {
                forceLegacyError: !0,
                ignoreCasing: !0,
              })
            ))
          : t({
              error: "error",
              error_description: "redirectUri can't be empty",
            }));
  }),
  (V.prototype.changePassword = function (e, t) {
    return this.client.dbConnection.changePassword(e, t);
  }),
  (V.prototype.passwordlessStart = function (e, t) {
    var r = D.merge(this.baseOptions, [
      "responseType",
      "responseMode",
      "redirectUri",
      "scope",
      "audience",
      "_csrf",
      "state",
      "_intstate",
      "nonce",
    ]).with(e.authParams);
    return (
      (e.authParams = this.transactionManager.process(r)),
      this.client.passwordless.start(e, t)
    );
  }),
  (V.prototype.signup = function (e, t) {
    return this.client.dbConnection.signup(e, t);
  }),
  (V.prototype.authorize = function (e) {
    var t = D.merge(this.baseOptions, [
      "clientID",
      "responseType",
      "responseMode",
      "redirectUri",
      "scope",
      "audience",
      "_csrf",
      "state",
      "_intstate",
      "nonce",
      "organization",
      "invitation",
    ]).with(e);
    B.check(
      t,
      {
        type: "object",
        message: "options parameter is not valid",
      },
      {
        responseType: {
          type: "string",
          message: "responseType option is required",
        },
      }
    ),
      ((t = this.transactionManager.process(t)).scope =
        t.scope || "openid profile email"),
      j.redirect(this.client.buildAuthorizeUrl(t));
  }),
  (V.prototype.signupAndAuthorize = function (e, t) {
    var r = this;
    return this.client.dbConnection.signup(
      D.blacklist(e, ["popupHandler"]),
      function (n) {
        if (n) return t(n);
        (e.realm = e.connection),
          e.username || (e.username = e.email),
          r.client.login(e, t);
      }
    );
  }),
  (V.prototype.login = function (e, t) {
    var r = D.merge(this.baseOptions, [
      "clientID",
      "responseType",
      "redirectUri",
      "scope",
      "audience",
      "_csrf",
      "state",
      "_intstate",
      "nonce",
      "onRedirecting",
      "organization",
      "invitation",
    ]).with(e);
    (r = this.transactionManager.process(r)),
      j.getWindow().location.host === this.baseOptions.domain
        ? ((r.connection = r.realm),
          delete r.realm,
          this._universalLogin.login(r, t))
        : this.crossOriginAuthentication.login(r, t);
  }),
  (V.prototype.passwordlessLogin = function (e, t) {
    var r = D.merge(this.baseOptions, [
      "clientID",
      "responseType",
      "redirectUri",
      "scope",
      "audience",
      "_csrf",
      "state",
      "_intstate",
      "nonce",
      "onRedirecting",
    ]).with(e);
    if (
      ((r = this.transactionManager.process(r)),
      j.getWindow().location.host === this.baseOptions.domain)
    )
      this.passwordlessVerify(r, t);
    else {
      var n = D.extend(
        {
          credentialType: "http://auth0.com/oauth/grant-type/passwordless/otp",
          realm: r.connection,
          username: r.email || r.phoneNumber,
          otp: r.verificationCode,
        },
        D.blacklist(r, [
          "connection",
          "email",
          "phoneNumber",
          "verificationCode",
        ])
      );
      this.crossOriginAuthentication.login(n, t);
    }
  }),
  (V.prototype.crossOriginAuthenticationCallback = function () {
    this.crossOriginVerification();
  }),
  (V.prototype.crossOriginVerification = function () {
    this.crossOriginAuthentication.callback();
  }),
  (V.prototype.logout = function (e) {
    j.redirect(this.client.buildLogoutUrl(e));
  }),
  (V.prototype.passwordlessVerify = function (e, t) {
    var r = this,
      n = D.merge(this.baseOptions, [
        "clientID",
        "responseType",
        "responseMode",
        "redirectUri",
        "scope",
        "audience",
        "_csrf",
        "state",
        "_intstate",
        "nonce",
        "onRedirecting",
      ]).with(e);
    return (
      B.check(
        n,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          responseType: {
            type: "string",
            message: "responseType option is required",
          },
        }
      ),
      (n = this.transactionManager.process(n)),
      this.client.passwordless.verify(n, function (i) {
        if (i) return t(i);
        function s() {
          j.redirect(r.client.passwordless.buildVerifyUrl(n));
        }
        if (typeof e.onRedirecting == "function")
          return e.onRedirecting(function () {
            s();
          });
        s();
      })
    );
  }),
  (V.prototype.renderCaptcha = function (e, t, r) {
    return Hn.render(this.client, e, t, r);
  }),
  (V.prototype.renderPasswordlessCaptcha = function (e, t, r) {
    return Hn.renderPasswordless(this.client, e, t, r);
  }),
  (mt.prototype.buildVerifyUrl = function (e) {
    var t, r;
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          connection: {
            type: "string",
            message: "connection option is required",
          },
          verificationCode: {
            type: "string",
            message: "verificationCode option is required",
          },
          phoneNumber: {
            optional: !1,
            type: "string",
            message: "phoneNumber option is required",
            condition: function (n) {
              return !n.email;
            },
          },
          email: {
            optional: !1,
            type: "string",
            message: "email option is required",
            condition: function (n) {
              return !n.phoneNumber;
            },
          },
        }
      ),
      (t = D.merge(this.baseOptions, [
        "clientID",
        "responseType",
        "responseMode",
        "redirectUri",
        "scope",
        "audience",
        "_csrf",
        "state",
        "_intstate",
        "protocol",
        "nonce",
      ]).with(e)),
      this.baseOptions._sendTelemetry &&
        (t.auth0Client = this.request.getTelemetryData()),
      (t = D.toSnakeCase(t, ["auth0Client"])),
      (r = nt(t)),
      Q(this.baseOptions.rootUrl, "passwordless", "verify_redirect", "?" + r)
    );
  }),
  (mt.prototype.start = function (e, t) {
    var r, n;
    B.check(
      e,
      {
        type: "object",
        message: "options parameter is not valid",
      },
      {
        connection: {
          type: "string",
          message: "connection option is required",
        },
        send: {
          type: "string",
          message: "send option is required",
          values: ["link", "code"],
          value_message: "send is not valid ([link, code])",
        },
        phoneNumber: {
          optional: !0,
          type: "string",
          message: "phoneNumber option is required",
          condition: function (u) {
            return u.send === "code" || !u.email;
          },
        },
        email: {
          optional: !0,
          type: "string",
          message: "email option is required",
          condition: function (u) {
            return u.send === "link" || !u.phoneNumber;
          },
        },
        authParams: {
          optional: !0,
          type: "object",
          message: "authParams option is required",
        },
      }
    ),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "passwordless", "start"));
    var i = e.xRequestLanguage;
    delete e.xRequestLanguage,
      (n = D.merge(this.baseOptions, [
        "clientID",
        "responseType",
        "redirectUri",
        "scope",
      ]).with(e)).scope &&
        ((n.authParams = n.authParams || {}),
        (n.authParams.scope = n.authParams.scope || n.scope)),
      n.redirectUri &&
        ((n.authParams = n.authParams || {}),
        (n.authParams.redirect_uri =
          n.authParams.redirectUri || n.redirectUri)),
      n.responseType &&
        ((n.authParams = n.authParams || {}),
        (n.authParams.response_type =
          n.authParams.responseType || n.responseType)),
      delete n.redirectUri,
      delete n.responseType,
      delete n.scope,
      (n = D.toSnakeCase(n, ["auth0Client", "authParams"]));
    var s = i
      ? {
          xRequestLanguage: i,
        }
      : void 0;
    return this.request.post(r, s).send(n).end(Z(t));
  }),
  (mt.prototype.verify = function (e, t) {
    var r, n;
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          connection: {
            type: "string",
            message: "connection option is required",
          },
          verificationCode: {
            type: "string",
            message: "verificationCode option is required",
          },
          phoneNumber: {
            optional: !1,
            type: "string",
            message: "phoneNumber option is required",
            condition: function (i) {
              return !i.email;
            },
          },
          email: {
            optional: !1,
            type: "string",
            message: "email option is required",
            condition: function (i) {
              return !i.phoneNumber;
            },
          },
        }
      ),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (n = D.pick(e, [
        "connection",
        "verificationCode",
        "phoneNumber",
        "email",
        "auth0Client",
        "clientID",
      ])),
      (n = D.toSnakeCase(n, ["auth0Client"])),
      (r = Q(this.baseOptions.rootUrl, "passwordless", "verify")),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (mt.prototype.getChallenge = function (e) {
    if (
      (B.check(e, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      !this.baseOptions.state)
    )
      return e();
    var t = Q(this.baseOptions.rootUrl, "passwordless", "challenge");
    return this.request
      .post(t)
      .send({
        state: this.baseOptions.state,
      })
      .end(
        Z(e, {
          ignoreCasing: !0,
        })
      );
  }),
  (Fr.prototype.signup = function (e, t) {
    var r, n, i;
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          connection: {
            type: "string",
            message: "connection option is required",
          },
          email: {
            type: "string",
            message: "email option is required",
          },
          password: {
            type: "string",
            message: "password option is required",
          },
        }
      ),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "dbconnections", "signup")),
      (i =
        (n = D.merge(this.baseOptions, ["clientID", "state"]).with(e))
          .user_metadata || n.userMetadata),
      (n = D.blacklist(n, ["scope", "userMetadata", "user_metadata"])),
      (n = D.toSnakeCase(n, ["auth0Client"])),
      i && (n.user_metadata = i),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (Fr.prototype.changePassword = function (e, t) {
    var r, n;
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          connection: {
            type: "string",
            message: "connection option is required",
          },
          email: {
            type: "string",
            message: "email option is required",
          },
        }
      ),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "dbconnections", "change_password")),
      (n = D.merge(this.baseOptions, ["clientID"]).with(e, [
        "email",
        "connection",
      ])),
      (n = D.toSnakeCase(n, ["auth0Client"])),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (ae.prototype.buildAuthorizeUrl = function (e) {
    var t, r;
    return (
      B.check(e, {
        type: "object",
        message: "options parameter is not valid",
      }),
      (t = D.merge(this.baseOptions, [
        "clientID",
        "responseType",
        "responseMode",
        "redirectUri",
        "scope",
        "audience",
      ]).with(e)),
      B.check(
        t,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          clientID: {
            type: "string",
            message: "clientID option is required",
          },
          redirectUri: {
            optional: !0,
            type: "string",
            message: "redirectUri option is required",
          },
          responseType: {
            type: "string",
            message: "responseType option is required",
          },
          nonce: {
            type: "string",
            message: "nonce option is required",
            condition: function (n) {
              return (
                n.responseType.indexOf("code") === -1 &&
                n.responseType.indexOf("id_token") !== -1
              );
            },
          },
          scope: {
            optional: !0,
            type: "string",
            message: "scope option is required",
          },
          audience: {
            optional: !0,
            type: "string",
            message: "audience option is required",
          },
        }
      ),
      this.baseOptions._sendTelemetry &&
        (t.auth0Client = this.request.getTelemetryData()),
      t.connection_scope &&
        B.isArray(t.connection_scope) &&
        (t.connection_scope = t.connection_scope.join(",")),
      (t = D.blacklist(t, [
        "username",
        "popupOptions",
        "domain",
        "tenant",
        "timeout",
        "appState",
      ])),
      (t = D.toSnakeCase(t, ["auth0Client"])),
      (t = xn.oauthAuthorizeParams(this.warn, t)),
      (r = nt(t)),
      Q(this.baseOptions.rootUrl, "authorize", "?" + r)
    );
  }),
  (ae.prototype.buildLogoutUrl = function (e) {
    var t, r;
    return (
      B.check(e, {
        optional: !0,
        type: "object",
        message: "options parameter is not valid",
      }),
      (t = D.merge(this.baseOptions, ["clientID"]).with(e || {})),
      this.baseOptions._sendTelemetry &&
        (t.auth0Client = this.request.getTelemetryData()),
      (t = D.toSnakeCase(t, ["auth0Client", "returnTo"])),
      (r = nt(D.blacklist(t, ["federated"]))),
      e &&
        e.federated !== void 0 &&
        e.federated !== !1 &&
        e.federated !== "false" &&
        (r += "&federated"),
      Q(this.baseOptions.rootUrl, "v2", "logout", "?" + r)
    );
  }),
  (ae.prototype.loginWithDefaultDirectory = function (e, t) {
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          username: {
            type: "string",
            message: "username option is required",
          },
          password: {
            type: "string",
            message: "password option is required",
          },
          scope: {
            optional: !0,
            type: "string",
            message: "scope option is required",
          },
          audience: {
            optional: !0,
            type: "string",
            message: "audience option is required",
          },
        }
      ),
      (e.grantType = "password"),
      this.oauthToken(e, t)
    );
  }),
  (ae.prototype.login = function (e, t) {
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          username: {
            type: "string",
            message: "username option is required",
          },
          password: {
            type: "string",
            message: "password option is required",
          },
          realm: {
            type: "string",
            message: "realm option is required",
          },
          scope: {
            optional: !0,
            type: "string",
            message: "scope option is required",
          },
          audience: {
            optional: !0,
            type: "string",
            message: "audience option is required",
          },
        }
      ),
      (e.grantType = "http://auth0.com/oauth/grant-type/password-realm"),
      this.oauthToken(e, t)
    );
  }),
  (ae.prototype.oauthToken = function (e, t) {
    var r, n;
    return (
      B.check(e, {
        type: "object",
        message: "options parameter is not valid",
      }),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "oauth", "token")),
      (n = D.merge(this.baseOptions, ["clientID", "scope", "audience"]).with(
        e
      )),
      B.check(
        n,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          clientID: {
            type: "string",
            message: "clientID option is required",
          },
          grantType: {
            type: "string",
            message: "grantType option is required",
          },
          scope: {
            optional: !0,
            type: "string",
            message: "scope option is required",
          },
          audience: {
            optional: !0,
            type: "string",
            message: "audience option is required",
          },
        }
      ),
      (n = D.toSnakeCase(n, ["auth0Client"])),
      (n = xn.oauthTokenParams(this.warn, n)),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (ae.prototype.loginWithResourceOwner = function (e, t) {
    var r, n;
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          username: {
            type: "string",
            message: "username option is required",
          },
          password: {
            type: "string",
            message: "password option is required",
          },
          connection: {
            type: "string",
            message: "connection option is required",
          },
          scope: {
            optional: !0,
            type: "string",
            message: "scope option is required",
          },
        }
      ),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "oauth", "ro")),
      (n = D.merge(this.baseOptions, ["clientID", "scope"]).with(e, [
        "username",
        "password",
        "scope",
        "connection",
        "device",
      ])),
      ((n = D.toSnakeCase(n, ["auth0Client"])).grant_type =
        n.grant_type || "password"),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (ae.prototype.getSSOData = function (e, t) {
    if (
      (this.auth0 || (this.auth0 = new V(this.baseOptions)),
      j.getWindow().location.host === this.baseOptions.domain)
    )
      return this.auth0._universalLogin.getSSOData(e, t);
    typeof e == "function" && (t = e),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      });
    var r = this.baseOptions.clientID,
      n = this.ssodataStorage.get() || {};
    this.auth0.checkSession(
      {
        responseType: "token id_token",
        scope: "openid profile email",
        connection: n.lastUsedConnection,
        timeout: 5e3,
      },
      function (i, s) {
        return i
          ? i.error === "login_required"
            ? t(null, {
                sso: !1,
              })
            : (i.error === "consent_required" &&
                (i.error_description =
                  "Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."),
              t(i, {
                sso: !1,
              }))
          : n.lastUsedSub && n.lastUsedSub !== s.idTokenPayload.sub
          ? t(i, {
              sso: !1,
            })
          : t(null, {
              lastUsedConnection: {
                name: n.lastUsedConnection,
              },
              lastUsedUserID: s.idTokenPayload.sub,
              lastUsedUsername: s.idTokenPayload.email || s.idTokenPayload.name,
              lastUsedClientID: r,
              sessionClients: [r],
              sso: !0,
            });
      }
    );
  }),
  (ae.prototype.userInfo = function (e, t) {
    var r;
    return (
      B.check(e, {
        type: "string",
        message: "accessToken parameter is not valid",
      }),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "userinfo")),
      this.request
        .get(r)
        .set("Authorization", "Bearer " + e)
        .end(
          Z(t, {
            ignoreCasing: !0,
          })
        )
    );
  }),
  (ae.prototype.getChallenge = function (e) {
    if (
      (B.check(e, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      !this.baseOptions.state)
    )
      return e();
    var t = Q(this.baseOptions.rootUrl, "usernamepassword", "challenge");
    return this.request
      .post(t)
      .send({
        state: this.baseOptions.state,
      })
      .end(
        Z(e, {
          ignoreCasing: !0,
        })
      );
  }),
  (ae.prototype.delegation = function (e, t) {
    var r, n;
    return (
      B.check(
        e,
        {
          type: "object",
          message: "options parameter is not valid",
        },
        {
          grant_type: {
            type: "string",
            message: "grant_type option is required",
          },
        }
      ),
      B.check(t, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (r = Q(this.baseOptions.rootUrl, "delegation")),
      (n = D.merge(this.baseOptions, ["clientID"]).with(e)),
      (n = D.toSnakeCase(n, ["auth0Client"])),
      this.request.post(r).send(n).end(Z(t))
    );
  }),
  (ae.prototype.getUserCountry = function (e) {
    var t;
    return (
      B.check(e, {
        type: "function",
        message: "cb parameter is not valid",
      }),
      (t = Q(this.baseOptions.rootUrl, "user", "geoloc", "country")),
      this.request.get(t).end(Z(e))
    );
  });
class ys extends Error {
  constructor() {
    super("No valid session"), (this.name = "NoValidSession");
  }
}
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hr = {},
  gs = {
    get exports() {
      return Hr;
    },
    set exports(e) {
      Hr = e;
    },
  },
  Lt = {},
  vs = {
    get exports() {
      return Lt;
    },
    set exports(e) {
      Lt = e;
    },
  },
  Pi = function (t, r) {
    return function () {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
        i[s] = arguments[s];
      return t.apply(r, i);
    };
  },
  ws = Pi,
  Fe = Object.prototype.toString;
function Qr(e) {
  return Fe.call(e) === "[object Array]";
}
function $r(e) {
  return typeof e > "u";
}
function bs(e) {
  return (
    e !== null &&
    !$r(e) &&
    e.constructor !== null &&
    !$r(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function _s(e) {
  return Fe.call(e) === "[object ArrayBuffer]";
}
function Os(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function Ts(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
    t
  );
}
function Ss(e) {
  return typeof e == "string";
}
function As(e) {
  return typeof e == "number";
}
function Di(e) {
  return e !== null && typeof e == "object";
}
function It(e) {
  if (Fe.call(e) !== "[object Object]") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function Es(e) {
  return Fe.call(e) === "[object Date]";
}
function Cs(e) {
  return Fe.call(e) === "[object File]";
}
function xs(e) {
  return Fe.call(e) === "[object Blob]";
}
function Ii(e) {
  return Fe.call(e) === "[object Function]";
}
function Rs(e) {
  return Di(e) && Ii(e.pipe);
}
function Ps(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function Ds(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Is() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function Kr(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), Qr(e)))
      for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
    else
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
}
function jr() {
  var e = {};
  function t(i, s) {
    It(e[s]) && It(i)
      ? (e[s] = jr(e[s], i))
      : It(i)
      ? (e[s] = jr({}, i))
      : Qr(i)
      ? (e[s] = i.slice())
      : (e[s] = i);
  }
  for (var r = 0, n = arguments.length; r < n; r++) Kr(arguments[r], t);
  return e;
}
function ks(e, t, r) {
  return (
    Kr(t, function (i, s) {
      r && typeof i == "function" ? (e[s] = ws(i, r)) : (e[s] = i);
    }),
    e
  );
}
function Us(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var ie = {
    isArray: Qr,
    isArrayBuffer: _s,
    isBuffer: bs,
    isFormData: Os,
    isArrayBufferView: Ts,
    isString: Ss,
    isNumber: As,
    isObject: Di,
    isPlainObject: It,
    isUndefined: $r,
    isDate: Es,
    isFile: Cs,
    isBlob: xs,
    isFunction: Ii,
    isStream: Rs,
    isURLSearchParams: Ps,
    isStandardBrowserEnv: Is,
    forEach: Kr,
    merge: jr,
    extend: ks,
    trim: Ds,
    stripBOM: Us,
  },
  Je = ie;
function $n(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var ki = function (t, r, n) {
    if (!r) return t;
    var i;
    if (n) i = n(r);
    else if (Je.isURLSearchParams(r)) i = r.toString();
    else {
      var s = [];
      Je.forEach(r, function (l, f) {
        l === null ||
          typeof l > "u" ||
          (Je.isArray(l) ? (f = f + "[]") : (l = [l]),
          Je.forEach(l, function (y) {
            Je.isDate(y)
              ? (y = y.toISOString())
              : Je.isObject(y) && (y = JSON.stringify(y)),
              s.push($n(f) + "=" + $n(y));
          }));
      }),
        (i = s.join("&"));
    }
    if (i) {
      var u = t.indexOf("#");
      u !== -1 && (t = t.slice(0, u)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + i);
    }
    return t;
  },
  qs = ie;
function Ft() {
  this.handlers = [];
}
Ft.prototype.use = function (t, r, n) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Ft.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Ft.prototype.forEach = function (t) {
  qs.forEach(this.handlers, function (n) {
    n !== null && t(n);
  });
};
var Ms = Ft,
  Ns = ie,
  Ls = function (t, r) {
    Ns.forEach(t, function (i, s) {
      s !== r &&
        s.toUpperCase() === r.toUpperCase() &&
        ((t[r] = i), delete t[s]);
    });
  },
  Ui = function (t, r, n, i, s) {
    return (
      (t.config = r),
      n && (t.code = n),
      (t.request = i),
      (t.response = s),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      t
    );
  },
  cr,
  jn;
function qi() {
  if (jn) return cr;
  jn = 1;
  var e = Ui;
  return (
    (cr = function (r, n, i, s, u) {
      var p = new Error(r);
      return e(p, n, i, s, u);
    }),
    cr
  );
}
var pr, Wn;
function Bs() {
  if (Wn) return pr;
  Wn = 1;
  var e = qi();
  return (
    (pr = function (r, n, i) {
      var s = i.config.validateStatus;
      !i.status || !s || s(i.status)
        ? r(i)
        : n(
            e(
              "Request failed with status code " + i.status,
              i.config,
              null,
              i.request,
              i
            )
          );
    }),
    pr
  );
}
var lr, zn;
function Fs() {
  if (zn) return lr;
  zn = 1;
  var e = ie;
  return (
    (lr = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (n, i, s, u, p, l) {
              var f = [];
              f.push(n + "=" + encodeURIComponent(i)),
                e.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()),
                e.isString(u) && f.push("path=" + u),
                e.isString(p) && f.push("domain=" + p),
                l === !0 && f.push("secure"),
                (document.cookie = f.join("; "));
            },
            read: function (n) {
              var i = document.cookie.match(
                new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
              );
              return i ? decodeURIComponent(i[3]) : null;
            },
            remove: function (n) {
              this.write(n, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    lr
  );
}
var hr, Vn;
function Hs() {
  return (
    Vn ||
      ((Vn = 1),
      (hr = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
      })),
    hr
  );
}
var fr, Jn;
function $s() {
  return (
    Jn ||
      ((Jn = 1),
      (fr = function (t, r) {
        return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
      })),
    fr
  );
}
var dr, Gn;
function js() {
  if (Gn) return dr;
  Gn = 1;
  var e = Hs(),
    t = $s();
  return (
    (dr = function (n, i) {
      return n && !e(i) ? t(n, i) : i;
    }),
    dr
  );
}
var yr, Xn;
function Ws() {
  if (Xn) return yr;
  Xn = 1;
  var e = ie,
    t = [
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
    ];
  return (
    (yr = function (n) {
      var i = {},
        s,
        u,
        p;
      return (
        n &&
          e.forEach(
            n.split(`
`),
            function (f) {
              if (
                ((p = f.indexOf(":")),
                (s = e.trim(f.substr(0, p)).toLowerCase()),
                (u = e.trim(f.substr(p + 1))),
                s)
              ) {
                if (i[s] && t.indexOf(s) >= 0) return;
                s === "set-cookie"
                  ? (i[s] = (i[s] ? i[s] : []).concat([u]))
                  : (i[s] = i[s] ? i[s] + ", " + u : u);
              }
            }
          ),
        i
      );
    }),
    yr
  );
}
var mr, Qn;
function zs() {
  if (Qn) return mr;
  Qn = 1;
  var e = ie;
  return (
    (mr = e.isStandardBrowserEnv()
      ? (function () {
          var r = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a"),
            i;
          function s(u) {
            var p = u;
            return (
              r && (n.setAttribute("href", p), (p = n.href)),
              n.setAttribute("href", p),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (i = s(window.location.href)),
            function (p) {
              var l = e.isString(p) ? s(p) : p;
              return l.protocol === i.protocol && l.host === i.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    mr
  );
}
var gr, Kn;
function Ht() {
  if (Kn) return gr;
  Kn = 1;
  function e(t) {
    this.message = t;
  }
  return (
    (e.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
    (e.prototype.__CANCEL__ = !0),
    (gr = e),
    gr
  );
}
var vr, Zn;
function Yn() {
  if (Zn) return vr;
  Zn = 1;
  var e = ie,
    t = Bs(),
    r = Fs(),
    n = ki,
    i = js(),
    s = Ws(),
    u = zs(),
    p = qi(),
    l = $t(),
    f = Ht();
  return (
    (vr = function (y) {
      return new Promise(function (A, h) {
        var d = y.data,
          w = y.headers,
          O = y.responseType,
          v;
        function S() {
          y.cancelToken && y.cancelToken.unsubscribe(v),
            y.signal && y.signal.removeEventListener("abort", v);
        }
        e.isFormData(d) && delete w["Content-Type"];
        var E = new XMLHttpRequest();
        if (y.auth) {
          var P = y.auth.username || "",
            I = y.auth.password
              ? unescape(encodeURIComponent(y.auth.password))
              : "";
          w.Authorization = "Basic " + btoa(P + ":" + I);
        }
        var U = i(y.baseURL, y.url);
        E.open(y.method.toUpperCase(), n(U, y.params, y.paramsSerializer), !0),
          (E.timeout = y.timeout);
        function M() {
          if (E) {
            var k =
                "getAllResponseHeaders" in E
                  ? s(E.getAllResponseHeaders())
                  : null,
              F =
                !O || O === "text" || O === "json"
                  ? E.responseText
                  : E.response,
              x = {
                data: F,
                status: E.status,
                statusText: E.statusText,
                headers: k,
                config: y,
                request: E,
              };
            t(
              function (q) {
                A(q), S();
              },
              function (q) {
                h(q), S();
              },
              x
            ),
              (E = null);
          }
        }
        if (
          ("onloadend" in E
            ? (E.onloadend = M)
            : (E.onreadystatechange = function () {
                !E ||
                  E.readyState !== 4 ||
                  (E.status === 0 &&
                    !(E.responseURL && E.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(M);
              }),
          (E.onabort = function () {
            E && (h(p("Request aborted", y, "ECONNABORTED", E)), (E = null));
          }),
          (E.onerror = function () {
            h(p("Network Error", y, null, E)), (E = null);
          }),
          (E.ontimeout = function () {
            var F = "timeout of " + y.timeout + "ms exceeded",
              x = y.transitional || l.transitional;
            y.timeoutErrorMessage && (F = y.timeoutErrorMessage),
              h(
                p(F, y, x.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", E)
              ),
              (E = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var L =
            (y.withCredentials || u(U)) && y.xsrfCookieName
              ? r.read(y.xsrfCookieName)
              : void 0;
          L && (w[y.xsrfHeaderName] = L);
        }
        "setRequestHeader" in E &&
          e.forEach(w, function (F, x) {
            typeof d > "u" && x.toLowerCase() === "content-type"
              ? delete w[x]
              : E.setRequestHeader(x, F);
          }),
          e.isUndefined(y.withCredentials) ||
            (E.withCredentials = !!y.withCredentials),
          O && O !== "json" && (E.responseType = y.responseType),
          typeof y.onDownloadProgress == "function" &&
            E.addEventListener("progress", y.onDownloadProgress),
          typeof y.onUploadProgress == "function" &&
            E.upload &&
            E.upload.addEventListener("progress", y.onUploadProgress),
          (y.cancelToken || y.signal) &&
            ((v = function (k) {
              E &&
                (h(!k || (k && k.type) ? new f("canceled") : k),
                E.abort(),
                (E = null));
            }),
            y.cancelToken && y.cancelToken.subscribe(v),
            y.signal &&
              (y.signal.aborted ? v() : y.signal.addEventListener("abort", v))),
          d || (d = null),
          E.send(d);
      });
    }),
    vr
  );
}
var wr, ei;
function $t() {
  if (ei) return wr;
  ei = 1;
  var e = ie,
    t = Ls,
    r = Ui,
    n = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  function i(l, f) {
    !e.isUndefined(l) &&
      e.isUndefined(l["Content-Type"]) &&
      (l["Content-Type"] = f);
  }
  function s() {
    var l;
    return (
      (typeof XMLHttpRequest < "u" ||
        (typeof process < "u" &&
          Object.prototype.toString.call(process) === "[object process]")) &&
        (l = Yn()),
      l
    );
  }
  function u(l, f, g) {
    if (e.isString(l))
      try {
        return (f || JSON.parse)(l), e.trim(l);
      } catch (y) {
        if (y.name !== "SyntaxError") throw y;
      }
    return (g || JSON.stringify)(l);
  }
  var p = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter: s(),
    transformRequest: [
      function (f, g) {
        return (
          t(g, "Accept"),
          t(g, "Content-Type"),
          e.isFormData(f) ||
          e.isArrayBuffer(f) ||
          e.isBuffer(f) ||
          e.isStream(f) ||
          e.isFile(f) ||
          e.isBlob(f)
            ? f
            : e.isArrayBufferView(f)
            ? f.buffer
            : e.isURLSearchParams(f)
            ? (i(g, "application/x-www-form-urlencoded;charset=utf-8"),
              f.toString())
            : e.isObject(f) || (g && g["Content-Type"] === "application/json")
            ? (i(g, "application/json"), u(f))
            : f
        );
      },
    ],
    transformResponse: [
      function (f) {
        var g = this.transitional || p.transitional,
          y = g && g.silentJSONParsing,
          b = g && g.forcedJSONParsing,
          A = !y && this.responseType === "json";
        if (A || (b && e.isString(f) && f.length))
          try {
            return JSON.parse(f);
          } catch (h) {
            if (A)
              throw h.name === "SyntaxError" ? r(h, this, "E_JSON_PARSE") : h;
          }
        return f;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (f) {
      return f >= 200 && f < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
      },
    },
  };
  return (
    e.forEach(["delete", "get", "head"], function (f) {
      p.headers[f] = {};
    }),
    e.forEach(["post", "put", "patch"], function (f) {
      p.headers[f] = e.merge(n);
    }),
    (wr = p),
    wr
  );
}
var Vs = ie,
  Js = $t(),
  Gs = function (t, r, n) {
    var i = this || Js;
    return (
      Vs.forEach(n, function (u) {
        t = u.call(i, t, r);
      }),
      t
    );
  },
  br,
  ti;
function Mi() {
  return (
    ti ||
      ((ti = 1),
      (br = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    br
  );
}
var ri = ie,
  _r = Gs,
  Xs = Mi(),
  Qs = $t(),
  Ks = Ht();
function Or(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ks("canceled");
}
var Zs = function (t) {
    Or(t),
      (t.headers = t.headers || {}),
      (t.data = _r.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = ri.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      ri.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (i) {
          delete t.headers[i];
        }
      );
    var r = t.adapter || Qs.adapter;
    return r(t).then(
      function (i) {
        return (
          Or(t),
          (i.data = _r.call(t, i.data, i.headers, t.transformResponse)),
          i
        );
      },
      function (i) {
        return (
          Xs(i) ||
            (Or(t),
            i &&
              i.response &&
              (i.response.data = _r.call(
                t,
                i.response.data,
                i.response.headers,
                t.transformResponse
              ))),
          Promise.reject(i)
        );
      }
    );
  },
  ne = ie,
  Ni = function (t, r) {
    r = r || {};
    var n = {};
    function i(g, y) {
      return ne.isPlainObject(g) && ne.isPlainObject(y)
        ? ne.merge(g, y)
        : ne.isPlainObject(y)
        ? ne.merge({}, y)
        : ne.isArray(y)
        ? y.slice()
        : y;
    }
    function s(g) {
      if (ne.isUndefined(r[g])) {
        if (!ne.isUndefined(t[g])) return i(void 0, t[g]);
      } else return i(t[g], r[g]);
    }
    function u(g) {
      if (!ne.isUndefined(r[g])) return i(void 0, r[g]);
    }
    function p(g) {
      if (ne.isUndefined(r[g])) {
        if (!ne.isUndefined(t[g])) return i(void 0, t[g]);
      } else return i(void 0, r[g]);
    }
    function l(g) {
      if (g in r) return i(t[g], r[g]);
      if (g in t) return i(void 0, t[g]);
    }
    var f = {
      url: u,
      method: u,
      data: u,
      baseURL: p,
      transformRequest: p,
      transformResponse: p,
      paramsSerializer: p,
      timeout: p,
      timeoutMessage: p,
      withCredentials: p,
      adapter: p,
      responseType: p,
      xsrfCookieName: p,
      xsrfHeaderName: p,
      onUploadProgress: p,
      onDownloadProgress: p,
      decompress: p,
      maxContentLength: p,
      maxBodyLength: p,
      transport: p,
      httpAgent: p,
      httpsAgent: p,
      cancelToken: p,
      socketPath: p,
      responseEncoding: p,
      validateStatus: l,
    };
    return (
      ne.forEach(Object.keys(t).concat(Object.keys(r)), function (y) {
        var b = f[y] || s,
          A = b(y);
        (ne.isUndefined(A) && b !== l) || (n[y] = A);
      }),
      n
    );
  },
  Tr,
  ni;
function Li() {
  return (
    ni ||
      ((ni = 1),
      (Tr = {
        version: "0.22.0",
      })),
    Tr
  );
}
var Ys = Li().version,
  Zr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    Zr[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var ii = {};
Zr.transitional = function (t, r, n) {
  function i(s, u) {
    return (
      "[Axios v" +
      Ys +
      "] Transitional option '" +
      s +
      "'" +
      u +
      (n ? ". " + n : "")
    );
  }
  return function (s, u, p) {
    if (t === !1)
      throw new Error(i(u, " has been removed" + (r ? " in " + r : "")));
    return (
      r &&
        !ii[u] &&
        ((ii[u] = !0),
        console.warn(
          i(
            u,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, u, p) : !0
    );
  };
};
function ea(e, t, r) {
  if (typeof e != "object") throw new TypeError("options must be an object");
  for (var n = Object.keys(e), i = n.length; i-- > 0; ) {
    var s = n[i],
      u = t[s];
    if (u) {
      var p = e[s],
        l = p === void 0 || u(p, s, e);
      if (l !== !0) throw new TypeError("option " + s + " must be " + l);
      continue;
    }
    if (r !== !0) throw Error("Unknown option " + s);
  }
}
var ta = {
    assertOptions: ea,
    validators: Zr,
  },
  Bi = ie,
  ra = ki,
  oi = Ms,
  si = Zs,
  jt = Ni,
  Fi = ta,
  Ge = Fi.validators;
function wt(e) {
  (this.defaults = e),
    (this.interceptors = {
      request: new oi(),
      response: new oi(),
    });
}
wt.prototype.request = function (t) {
  typeof t == "string"
    ? ((t = arguments[1] || {}), (t.url = arguments[0]))
    : (t = t || {}),
    (t = jt(this.defaults, t)),
    t.method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = "get");
  var r = t.transitional;
  r !== void 0 &&
    Fi.assertOptions(
      r,
      {
        silentJSONParsing: Ge.transitional(Ge.boolean),
        forcedJSONParsing: Ge.transitional(Ge.boolean),
        clarifyTimeoutError: Ge.transitional(Ge.boolean),
      },
      !1
    );
  var n = [],
    i = !0;
  this.interceptors.request.forEach(function (b) {
    (typeof b.runWhen == "function" && b.runWhen(t) === !1) ||
      ((i = i && b.synchronous), n.unshift(b.fulfilled, b.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function (b) {
    s.push(b.fulfilled, b.rejected);
  });
  var u;
  if (!i) {
    var p = [si, void 0];
    for (
      Array.prototype.unshift.apply(p, n),
        p = p.concat(s),
        u = Promise.resolve(t);
      p.length;

    )
      u = u.then(p.shift(), p.shift());
    return u;
  }
  for (var l = t; n.length; ) {
    var f = n.shift(),
      g = n.shift();
    try {
      l = f(l);
    } catch (y) {
      g(y);
      break;
    }
  }
  try {
    u = si(l);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; s.length; ) u = u.then(s.shift(), s.shift());
  return u;
};
wt.prototype.getUri = function (t) {
  return (
    (t = jt(this.defaults, t)),
    ra(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
  );
};
Bi.forEach(["delete", "get", "head", "options"], function (t) {
  wt.prototype[t] = function (r, n) {
    return this.request(
      jt(n || {}, {
        method: t,
        url: r,
        data: (n || {}).data,
      })
    );
  };
});
Bi.forEach(["post", "put", "patch"], function (t) {
  wt.prototype[t] = function (r, n, i) {
    return this.request(
      jt(i || {}, {
        method: t,
        url: r,
        data: n,
      })
    );
  };
});
var na = wt,
  Sr,
  ai;
function ia() {
  if (ai) return Sr;
  ai = 1;
  var e = Ht();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function (u) {
      n = u;
    });
    var i = this;
    this.promise.then(function (s) {
      if (i._listeners) {
        var u,
          p = i._listeners.length;
        for (u = 0; u < p; u++) i._listeners[u](s);
        i._listeners = null;
      }
    }),
      (this.promise.then = function (s) {
        var u,
          p = new Promise(function (l) {
            i.subscribe(l), (u = l);
          }).then(s);
        return (
          (p.cancel = function () {
            i.unsubscribe(u);
          }),
          p
        );
      }),
      r(function (u) {
        i.reason || ((i.reason = new e(u)), n(i.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (n) {
      if (this.reason) {
        n(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
    }),
    (t.prototype.unsubscribe = function (n) {
      if (this._listeners) {
        var i = this._listeners.indexOf(n);
        i !== -1 && this._listeners.splice(i, 1);
      }
    }),
    (t.source = function () {
      var n,
        i = new t(function (u) {
          n = u;
        });
      return {
        token: i,
        cancel: n,
      };
    }),
    (Sr = t),
    Sr
  );
}
var Ar, ui;
function oa() {
  return (
    ui ||
      ((ui = 1),
      (Ar = function (t) {
        return function (n) {
          return t.apply(null, n);
        };
      })),
    Ar
  );
}
var Er, ci;
function sa() {
  return (
    ci ||
      ((ci = 1),
      (Er = function (t) {
        return typeof t == "object" && t.isAxiosError === !0;
      })),
    Er
  );
}
var pi = ie,
  aa = Pi,
  kt = na,
  ua = Ni,
  ca = $t();
function Hi(e) {
  var t = new kt(e),
    r = aa(kt.prototype.request, t);
  return (
    pi.extend(r, kt.prototype, t),
    pi.extend(r, t),
    (r.create = function (i) {
      return Hi(ua(e, i));
    }),
    r
  );
}
var ye = Hi(ca);
ye.Axios = kt;
ye.Cancel = Ht();
ye.CancelToken = ia();
ye.isCancel = Mi();
ye.VERSION = Li().version;
ye.all = function (t) {
  return Promise.all(t);
};
ye.spread = oa();
ye.isAxiosError = sa();
vs.exports = ye;
Lt.default = ye;
(function (e) {
  e.exports = Lt;
})(gs);
const pa = ms(Hr);
class li extends Error {
  constructor() {
    super("Unexpected error on AccountUsers API"),
      (this.name = "UnexpectedError");
  }
}
var la =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(s) {
      return s instanceof r
        ? s
        : new r(function (u) {
            u(s);
          });
    }
    return new (r || (r = Promise))(function (s, u) {
      function p(g) {
        try {
          f(n.next(g));
        } catch (y) {
          u(y);
        }
      }
      function l(g) {
        try {
          f(n.throw(g));
        } catch (y) {
          u(y);
        }
      }
      function f(g) {
        g.done ? s(g.value) : i(g.value).then(p, l);
      }
      f((n = n.apply(e, t || [])).next());
    });
  };
class ha {
  constructor(t) {
    this.options = t;
  }
  getApiUrl(...t) {
    if (t.length === 0) return this.options.api_url;
    const r = t.map((n) => encodeURIComponent(n)).join("/");
    return new URL(r, this.options.api_url).toString();
  }
  getRegionClientId(t, r) {
    return la(this, void 0, void 0, function* () {
      const n = this.getApiUrl("v1", "regions", t.valueOf(), "apps", r);
      return pa
        .get(n)
        .then((i) => {
          if (i.status === 200) return i.data;
          throw new li();
        })
        .catch(() => {
          throw new li();
        });
    });
  }
}
var Bt;
(function (e) {
  (e.EU = "eu"), (e.US = "us");
})(Bt || (Bt = {}));
class fa {
  constructor(t) {
    (this.emburseAccountDb = "emburseAccount"),
      (this.options = t),
      (this.accountUsersApi = this.initAccountUsers()),
      (this.genericAuth0Api = this.initGenericAuth0());
  }
  initGenericAuth0() {
    return this.accountUsersApi
      .getRegionClientId(Bt.US, this.options.genericClientId)
      .then(
        (t) => (
          (this.connection = t.connection),
          new V({
            domain: t.domain,
            clientID: this.options.genericClientId,
            overrides: {
              __tenant: t.tenant,
              __token_issuer: t.serverIssuer,
            },
          })
        )
      );
  }
  initAuth0() {
    this.auth0Api ||
      (this.auth0Api = this.accountUsersApi
        .getRegionClientId(this.options.region, this.options.genericClientId)
        .then(
          (t) => (
            (this.connection = t.connection),
            new V({
              domain: t.domain,
              clientID: t.clientId,
              overrides: {
                __tenant: t.tenant,
                __token_issuer: t.serverIssuer,
              },
            })
          )
        ));
  }
  initAccountUsers() {
    return new ha({
      api_url: this.options.account_api_uri,
    });
  }
  login(t) {
    this.genericAuth0Api.then((r) => {
      const n = {
        redirectUri: t.redirectUri,
        responseType: t.responseType.valueOf(),
        responseMode:
          t.responseMode !== void 0 ? t.responseMode.valueOf() : void 0,
        state: t.state,
        nonce: t.nonce,
        scope: t.scope,
        audience: t.audience,
        language: t.language.valueOf(),
      };
      r.authorize(n);
    });
  }
  logout(t) {
    this.initAuth0(),
      this.auth0Api.then((r) => {
        r.logout({
          returnTo: t.returnTo,
        });
      });
  }
  checkSession(t) {
    return (
      this.initAuth0(),
      this.auth0Api.then(
        (r) =>
          new Promise((n, i) => {
            r.checkSession(
              {
                responseType: "token",
                redirectUri: t.productDomain,
                connection: t.migrated
                  ? this.emburseAccountDb
                  : this.connection,
              },
              (s, u) => {
                u ? n(u) : i(new ys());
              }
            );
          })
      )
    );
  }
}
var Wr;
(function (e) {
  e.ENGLISH = "en";
})(Wr || (Wr = {}));
var hi;
(function (e) {
  (e.FORM_POST = "form_post"),
    (e.QUERY = "query"),
    (e.FRAGMENT = "fragment"),
    (e.WEB_MESSAGE = "web_message");
})(hi || (hi = {}));
var zr;
(function (e) {
  (e.AUTHORIZATION_CODE = "code"),
    (e.ACCESS_TOKEN = "token"),
    (e.ID_TOKEN = "id_token");
})(zr || (zr = {}));
let Cr = new fa({
    account_api_uri: "https://accountusers.api-dev.emburse.services/",
    genericClientId: "7vGUSpvz2Dl6bkncne5vui6Sjx08TOVV",
    region: Bt.EU,
  }),
  xr = "https://adricu1988.github.io/";
window.location.href.includes("start")
  ? Cr.login({
      redirectUri: xr + "index.html",
      responseType: zr.ID_TOKEN,
      state: "fakeState",
      nonce: "fakeNonce",
      language: Wr.ENGLISH,
    })
  : window.location.href.includes("session")
  ? Cr.checkSession({
      productDomain: xr + "index.html",
      migrated: !1,
    })
      .then((t) => {
        document.getElementById("access-token-box").innerHTML = t.accessToken;
      })
      .catch(() => {
        document.getElementById("access-token-box").innerHTML = "error";
      })
  : window.location.href.includes("you-are-out") ||
    (window.location.href.includes("out") &&
      Cr.logout({
        returnTo: xr + "index.html#you-are-out",
      }));
