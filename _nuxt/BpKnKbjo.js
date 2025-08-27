var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as Se } from "./vffVQ_uU.js";
import { a as P0, v as W, x as T0, d as ne, B as Re, K as Fe, j as D, o as U, k as R, l as i0, h as S, q as V0, n as Ee, t as c0, g as o0, f as O0, ak as X0, A as Ie, aw as C0, av as Pe, al as Te, __tla as __tla_0 } from "./BdODHn_3.js";
import { s as Oe, c as Le } from "./DesCJePW.js";
import { u as Ne } from "./BqMu1s5P.js";
import { i as Be, j as re, k as De, t as Ue, l as We } from "./5qd8EHar.js";
import { w as qe, a as je, b as Ve } from "./BTeZegdw.js";
import { _ as ie } from "./DlAUqK2U.js";
import { g as Xe } from "./CpsPJSKh.js";
import "./DGIQ2ECZ.js";
let Ia;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const B0 = Symbol("Comlink.proxy"), se = Symbol("Comlink.endpoint"), oe = Symbol("Comlink.releaseProxy"), d0 = Symbol("Comlink.finalizer"), p0 = Symbol("Comlink.thrown"), _e = (n) => typeof n == "object" && n !== null || typeof n == "function", Ye = {
    canHandle: (n) => _e(n) && n[B0],
    serialize(n) {
      const { port1: e, port2: t } = new MessageChannel();
      return U0(n, e), [
        t,
        [
          t
        ]
      ];
    },
    deserialize(n) {
      return n.start(), k0(n);
    }
  }, Ge = {
    canHandle: (n) => _e(n) && p0 in n,
    serialize({ value: n }) {
      let e;
      return n instanceof Error ? e = {
        isError: true,
        value: {
          message: n.message,
          name: n.name,
          stack: n.stack
        }
      } : e = {
        isError: false,
        value: n
      }, [
        e,
        []
      ];
    },
    deserialize(n) {
      throw n.isError ? Object.assign(new Error(n.value.message), n.value) : n.value;
    }
  }, D0 = /* @__PURE__ */ new Map([
    [
      "proxy",
      Ye
    ],
    [
      "throw",
      Ge
    ]
  ]);
  function $e(n, e) {
    for (const t of n) if (e === t || t === "*" || t instanceof RegExp && t.test(e)) return true;
    return false;
  }
  function U0(n, e = globalThis, t = [
    "*"
  ]) {
    e.addEventListener("message", function i(o) {
      if (!o || !o.data) return;
      if (!$e(t, o.origin)) {
        console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
        return;
      }
      const { id: _, type: a, path: l } = Object.assign({
        path: []
      }, o.data), g = (o.data.argumentList || []).map(G);
      let u;
      try {
        const p = l.slice(0, -1).reduce((b, A) => b[A], n), w = l.reduce((b, A) => b[A], n);
        switch (a) {
          case "GET":
            u = w;
            break;
          case "SET":
            p[l.slice(-1)[0]] = G(o.data.value), u = true;
            break;
          case "APPLY":
            u = w.apply(p, g);
            break;
          case "CONSTRUCT":
            {
              const b = new w(...g);
              u = ge(b);
            }
            break;
          case "ENDPOINT":
            {
              const { port1: b, port2: A } = new MessageChannel();
              U0(n, A), u = ue(b, [
                b
              ]);
            }
            break;
          case "RELEASE":
            u = void 0;
            break;
          default:
            return;
        }
      } catch (p) {
        u = {
          value: p,
          [p0]: 0
        };
      }
      Promise.resolve(u).catch((p) => ({
        value: p,
        [p0]: 0
      })).then((p) => {
        const [w, b] = m0(p);
        e.postMessage(Object.assign(Object.assign({}, w), {
          id: _
        }), b), a === "RELEASE" && (e.removeEventListener("message", i), ae(e), d0 in n && typeof n[d0] == "function" && n[d0]());
      }).catch((p) => {
        const [w, b] = m0({
          value: new TypeError("Unserializable return value"),
          [p0]: 0
        });
        e.postMessage(Object.assign(Object.assign({}, w), {
          id: _
        }), b);
      });
    }), e.start && e.start();
  }
  function Ke(n) {
    return n.constructor.name === "MessagePort";
  }
  function ae(n) {
    Ke(n) && n.close();
  }
  function k0(n, e) {
    const t = /* @__PURE__ */ new Map();
    return n.addEventListener("message", function(o) {
      const { data: _ } = o;
      if (!_ || !_.id) return;
      const a = t.get(_.id);
      if (a) try {
        a(_);
      } finally {
        t.delete(_.id);
      }
    }), L0(n, t, [], e);
  }
  function l0(n) {
    if (n) throw new Error("Proxy has been released and is not useable");
  }
  function ce(n) {
    return e0(n, /* @__PURE__ */ new Map(), {
      type: "RELEASE"
    }).then(() => {
      ae(n);
    });
  }
  const b0 = /* @__PURE__ */ new WeakMap(), w0 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((n) => {
    const e = (b0.get(n) || 0) - 1;
    b0.set(n, e), e === 0 && ce(n);
  });
  function Je(n, e) {
    const t = (b0.get(e) || 0) + 1;
    b0.set(e, t), w0 && w0.register(n, e, n);
  }
  function Qe(n) {
    w0 && w0.unregister(n);
  }
  function L0(n, e, t = [], i = function() {
  }) {
    let o = false;
    const _ = new Proxy(i, {
      get(a, l) {
        if (l0(o), l === oe) return () => {
          Qe(_), ce(n), e.clear(), o = true;
        };
        if (l === "then") {
          if (t.length === 0) return {
            then: () => _
          };
          const g = e0(n, e, {
            type: "GET",
            path: t.map((u) => u.toString())
          }).then(G);
          return g.then.bind(g);
        }
        return L0(n, e, [
          ...t,
          l
        ]);
      },
      set(a, l, g) {
        l0(o);
        const [u, p] = m0(g);
        return e0(n, e, {
          type: "SET",
          path: [
            ...t,
            l
          ].map((w) => w.toString()),
          value: u
        }, p).then(G);
      },
      apply(a, l, g) {
        l0(o);
        const u = t[t.length - 1];
        if (u === se) return e0(n, e, {
          type: "ENDPOINT"
        }).then(G);
        if (u === "bind") return L0(n, e, t.slice(0, -1));
        const [p, w] = Y0(g);
        return e0(n, e, {
          type: "APPLY",
          path: t.map((b) => b.toString()),
          argumentList: p
        }, w).then(G);
      },
      construct(a, l) {
        l0(o);
        const [g, u] = Y0(l);
        return e0(n, e, {
          type: "CONSTRUCT",
          path: t.map((p) => p.toString()),
          argumentList: g
        }, u).then(G);
      }
    });
    return Je(_, n), _;
  }
  function Ze(n) {
    return Array.prototype.concat.apply([], n);
  }
  function Y0(n) {
    const e = n.map(m0);
    return [
      e.map((t) => t[0]),
      Ze(e.map((t) => t[1]))
    ];
  }
  const le = /* @__PURE__ */ new WeakMap();
  function ue(n, e) {
    return le.set(n, e), n;
  }
  function ge(n) {
    return Object.assign(n, {
      [B0]: true
    });
  }
  function et(n, e = globalThis, t = "*") {
    return {
      postMessage: (i, o) => n.postMessage(i, t, o),
      addEventListener: e.addEventListener.bind(e),
      removeEventListener: e.removeEventListener.bind(e)
    };
  }
  function m0(n) {
    for (const [e, t] of D0) if (t.canHandle(n)) {
      const [i, o] = t.serialize(n);
      return [
        {
          type: "HANDLER",
          name: e,
          value: i
        },
        o
      ];
    }
    return [
      {
        type: "RAW",
        value: n
      },
      le.get(n) || []
    ];
  }
  function G(n) {
    switch (n.type) {
      case "HANDLER":
        return D0.get(n.name).deserialize(n.value);
      case "RAW":
        return n.value;
    }
  }
  function e0(n, e, t, i) {
    return new Promise((o) => {
      const _ = tt();
      e.set(_, o), n.start && n.start(), n.postMessage(Object.assign({
        id: _
      }, t), i);
    });
  }
  function tt() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
  }
  const nt = Object.freeze(Object.defineProperty({
    __proto__: null,
    createEndpoint: se,
    expose: U0,
    finalizer: d0,
    proxy: ge,
    proxyMarker: B0,
    releaseProxy: oe,
    transfer: ue,
    transferHandlers: D0,
    windowEndpoint: et,
    wrap: k0
  }, Symbol.toStringTag, {
    value: "Module"
  })), rt = "" + new URL("index_bg.DKW2dVVz.wasm", import.meta.url).href, it = async (n = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const i = e.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(i, "base64");
      else if (typeof atob == "function") {
        const _ = atob(i);
        o = new Uint8Array(_.length);
        for (let a = 0; a < _.length; a++) o[a] = _.charCodeAt(a);
      } else throw new Error("Cannot decode base64-encoded data URL");
      t = await WebAssembly.instantiate(o, n);
    } else {
      const i = await fetch(e), o = i.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(i, n);
      else {
        const _ = await i.arrayBuffer();
        t = await WebAssembly.instantiate(_, n);
      }
    }
    return t.instance.exports;
  };
  let s;
  function st(n) {
    s = n;
  }
  let d = 0, u0 = null;
  function t0() {
    return (u0 === null || u0.byteLength === 0) && (u0 = new Uint8Array(s.memory.buffer)), u0;
  }
  const ot = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let f0 = new ot("utf-8");
  const _t = typeof f0.encodeInto == "function" ? function(n, e) {
    return f0.encodeInto(n, e);
  } : function(n, e) {
    const t = f0.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    };
  };
  function T(n, e, t) {
    if (t === void 0) {
      const l = f0.encode(n), g = e(l.length, 1) >>> 0;
      return t0().subarray(g, g + l.length).set(l), d = l.length, g;
    }
    let i = n.length, o = e(i, 1) >>> 0;
    const _ = t0();
    let a = 0;
    for (; a < i; a++) {
      const l = n.charCodeAt(a);
      if (l > 127) break;
      _[o + a] = l;
    }
    if (a !== i) {
      a !== 0 && (n = n.slice(a)), o = t(o, i, i = a + n.length * 3, 1) >>> 0;
      const l = t0().subarray(o + a, o + i), g = _t(n, l);
      a += g.written, o = t(o, i, a, 1) >>> 0;
    }
    return d = a, o;
  }
  let Z = null;
  function B() {
    return (Z === null || Z.buffer.detached === true || Z.buffer.detached === void 0 && Z.buffer !== s.memory.buffer) && (Z = new DataView(s.memory.buffer)), Z;
  }
  function de(n) {
    const e = s.__externref_table_alloc();
    return s.__wbindgen_export_4.set(e, n), e;
  }
  function _0(n, e) {
    try {
      return n.apply(this, e);
    } catch (t) {
      const i = de(t);
      s.__wbindgen_exn_store(i);
    }
  }
  function O(n, e) {
    return n = n >>> 0, t0().subarray(n / 1, n / 1 + e);
  }
  function I(n) {
    return n == null;
  }
  function N0(n) {
    const e = typeof n;
    if (e == "number" || e == "boolean" || n == null) return `${n}`;
    if (e == "string") return `"${n}"`;
    if (e == "symbol") {
      const o = n.description;
      return o == null ? "Symbol" : `Symbol(${o})`;
    }
    if (e == "function") {
      const o = n.name;
      return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
    }
    if (Array.isArray(n)) {
      const o = n.length;
      let _ = "[";
      o > 0 && (_ += N0(n[0]));
      for (let a = 1; a < o; a++) _ += ", " + N0(n[a]);
      return _ += "]", _;
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
    let i;
    if (t && t.length > 1) i = t[1];
    else return toString.call(n);
    if (i == "Object") try {
      return "Object(" + JSON.stringify(n) + ")";
    } catch {
      return "Object";
    }
    return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : i;
  }
  const at = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let pe = new at("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  pe.decode();
  function x(n, e) {
    return n = n >>> 0, pe.decode(t0().subarray(n, n + e));
  }
  function z(n, e) {
    if (!(n instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  function y(n, e) {
    const t = e(n.length * 1, 1) >>> 0;
    return t0().set(n, t / 1), d = n.length, t;
  }
  function f(n) {
    const e = s.__wbindgen_export_4.get(n);
    return s.__externref_table_dealloc(n), e;
  }
  function ct(n, e) {
    const t = e(n.length * 4, 4) >>> 0;
    for (let i = 0; i < n.length; i++) {
      const o = de(n[i]);
      B().setUint32(t + 4 * i, o, true);
    }
    return d = n.length, t;
  }
  const M0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_address_free(n >>> 0, 1));
  class M {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(M.prototype);
      return t.__wbg_ptr = e, M0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, M0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_address_free(e, 0);
    }
    __getClassname() {
      let e, t;
      try {
        const i = s.address___getClassname(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    constructor(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.address_new(t, i);
      if (o[2]) throw f(o[1]);
      return this.__wbg_ptr = o[0] >>> 0, M0.register(this, this.__wbg_ptr, this), this;
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.address_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return M.__wrap(o[0]);
    }
    static fromAny(e) {
      const t = s.address_fromAny(e);
      if (t[2]) throw f(t[1]);
      return M.__wrap(t[0]);
    }
    static fromString(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.address_fromString(t, i);
      if (o[2]) throw f(o[1]);
      return M.__wrap(o[0]);
    }
    static fromUserFriendlyAddress(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.address_fromUserFriendlyAddress(t, i);
      if (o[2]) throw f(o[1]);
      return M.__wrap(o[0]);
    }
    static fromPublicKeys(e, t) {
      const i = s.address_fromPublicKeys(e, t);
      if (i[2]) throw f(i[1]);
      return M.__wrap(i[0]);
    }
    toPlain() {
      let e, t;
      try {
        const i = s.address_toPlain(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    toUserFriendlyAddress() {
      let e, t;
      try {
        const i = s.address_toUserFriendlyAddress(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    toHex() {
      let e, t;
      try {
        const i = s.address_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    serialize() {
      const e = s.address_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    equals(e) {
      return z(e, M), s.address_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    compare(e) {
      return z(e, M), s.address_compare(this.__wbg_ptr, e.__wbg_ptr);
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_blskeypair_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_blspublickey_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_blssecretkey_free(n >>> 0, 1));
  const G0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_clientconfiguration_free(n >>> 0, 1));
  class lt {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, G0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_clientconfiguration_free(e, 0);
    }
    constructor() {
      const e = s.clientconfiguration_new();
      return this.__wbg_ptr = e >>> 0, G0.register(this, this.__wbg_ptr, this), this;
    }
    network(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.clientconfiguration_network(this.__wbg_ptr, t, i);
      if (o[1]) throw f(o[0]);
    }
    seedNodes(e) {
      const t = ct(e, s.__wbindgen_malloc), i = d;
      s.clientconfiguration_seedNodes(this.__wbg_ptr, t, i);
    }
    logLevel(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d;
      s.clientconfiguration_logLevel(this.__wbg_ptr, t, i);
    }
    onlySecureWsConnections(e) {
      s.clientconfiguration_onlySecureWsConnections(this.__wbg_ptr, e);
    }
    desiredPeerCount(e) {
      s.clientconfiguration_desiredPeerCount(this.__wbg_ptr, e);
    }
    peerCountMax(e) {
      s.clientconfiguration_peerCountMax(this.__wbg_ptr, e);
    }
    peerCountPerIpMax(e) {
      s.clientconfiguration_peerCountPerIpMax(this.__wbg_ptr, e);
    }
    peerCountPerSubnetMax(e) {
      s.clientconfiguration_peerCountPerSubnetMax(this.__wbg_ptr, e);
    }
    syncMode(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d;
      s.clientconfiguration_syncMode(this.__wbg_ptr, t, i);
    }
    build() {
      return s.clientconfiguration_build(this.__wbg_ptr);
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_commitment_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_commitmentpair_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_cryptoutils_free(n >>> 0, 1));
  const H0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_es256publickey_free(n >>> 0, 1));
  class j {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(j.prototype);
      return t.__wbg_ptr = e, H0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, H0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_es256publickey_free(e, 0);
    }
    __getClassname() {
      let e, t;
      try {
        const i = s.es256publickey___getClassname(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    verify(e, t) {
      z(e, K);
      const i = y(t, s.__wbindgen_malloc), o = d;
      return s.es256publickey_verify(this.__wbg_ptr, e.__wbg_ptr, i, o) !== 0;
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.es256publickey_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return j.__wrap(o[0]);
    }
    static fromSpki(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.es256publickey_fromSpki(t, i);
      if (o[2]) throw f(o[1]);
      return j.__wrap(o[0]);
    }
    static fromRaw(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.es256publickey_fromRaw(t, i);
      if (o[2]) throw f(o[1]);
      return j.__wrap(o[0]);
    }
    constructor(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.es256publickey_new(t, i);
      if (o[2]) throw f(o[1]);
      return this.__wbg_ptr = o[0] >>> 0, H0.register(this, this.__wbg_ptr, this), this;
    }
    serialize() {
      const e = s.es256publickey_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    static fromHex(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.es256publickey_fromHex(t, i);
      if (o[2]) throw f(o[1]);
      return j.__wrap(o[0]);
    }
    toHex() {
      let e, t;
      try {
        const i = s.es256publickey_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    toAddress() {
      const e = s.es256publickey_toAddress(this.__wbg_ptr);
      return M.__wrap(e);
    }
    equals(e) {
      return z(e, j), s.es256publickey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    compare(e) {
      return z(e, j), s.es256publickey_compare(this.__wbg_ptr, e.__wbg_ptr);
    }
  }
  const $0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_es256signature_free(n >>> 0, 1));
  class K {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(K.prototype);
      return t.__wbg_ptr = e, $0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, $0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_es256signature_free(e, 0);
    }
    __getClassname() {
      let e, t;
      try {
        const i = s.es256signature___getClassname(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.es256signature_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return K.__wrap(o[0]);
    }
    serialize() {
      const e = s.es256signature_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    static fromAsn1(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.es256signature_fromAsn1(t, i);
      if (o[2]) throw f(o[1]);
      return K.__wrap(o[0]);
    }
    static fromHex(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.es256signature_fromHex(t, i);
      if (o[2]) throw f(o[1]);
      return K.__wrap(o[0]);
    }
    toHex() {
      let e, t;
      try {
        const i = s.es256signature_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_hash_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_hashedtimelockedcontract_free(n >>> 0, 1));
  const S0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_keypair_free(n >>> 0, 1));
  class $ {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create($.prototype);
      return t.__wbg_ptr = e, S0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, S0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_keypair_free(e, 0);
    }
    static generate() {
      const e = s.keypair_generate();
      return $.__wrap(e);
    }
    static derive(e) {
      z(e, N);
      const t = s.keypair_derive(e.__wbg_ptr);
      return $.__wrap(t);
    }
    static fromHex(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.keypair_fromHex(t, i);
      if (o[2]) throw f(o[1]);
      return $.__wrap(o[0]);
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.keypair_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return $.__wrap(o[0]);
    }
    constructor(e, t) {
      z(e, N), z(t, P);
      const i = s.keypair_new(e.__wbg_ptr, t.__wbg_ptr);
      return this.__wbg_ptr = i >>> 0, S0.register(this, this.__wbg_ptr, this), this;
    }
    serialize() {
      const e = s.keypair_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    sign(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.keypair_sign(this.__wbg_ptr, t, i);
      return V.__wrap(o);
    }
    signTransaction(e) {
      z(e, J);
      const t = s.keypair_signTransaction(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw f(t[0]);
    }
    get privateKey() {
      const e = s.keypair_privateKey(this.__wbg_ptr);
      return N.__wrap(e);
    }
    get publicKey() {
      const e = s.keypair_publicKey(this.__wbg_ptr);
      return P.__wrap(e);
    }
    toAddress() {
      const e = s.keypair_toAddress(this.__wbg_ptr);
      return M.__wrap(e);
    }
    toHex() {
      let e, t;
      try {
        const i = s.keypair_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_merkletree_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_partialsignature_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_policy_free(n >>> 0, 1));
  const R0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_privatekey_free(n >>> 0, 1));
  class N {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(N.prototype);
      return t.__wbg_ptr = e, R0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, R0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_privatekey_free(e, 0);
    }
    static get PURPOSE_ID() {
      return s.privatekey_purpose_id() >>> 0;
    }
    static get SIZE() {
      return s.privatekey_size() >>> 0;
    }
    get serializedSize() {
      return s.privatekey_serialized_size(this.__wbg_ptr) >>> 0;
    }
    static generate() {
      const e = s.privatekey_generate();
      return N.__wrap(e);
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.privatekey_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return N.__wrap(o[0]);
    }
    constructor(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.privatekey_new(t, i);
      if (o[2]) throw f(o[1]);
      return this.__wbg_ptr = o[0] >>> 0, R0.register(this, this.__wbg_ptr, this), this;
    }
    serialize() {
      const e = s.privatekey_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    static fromHex(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.privatekey_fromHex(t, i);
      if (o[2]) throw f(o[1]);
      return N.__wrap(o[0]);
    }
    toHex() {
      let e, t;
      try {
        const i = s.privatekey_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    equals(e) {
      return z(e, N), s.privatekey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
  }
  const F0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_publickey_free(n >>> 0, 1));
  class P {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(P.prototype);
      return t.__wbg_ptr = e, F0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, F0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_publickey_free(e, 0);
    }
    __getClassname() {
      let e, t;
      try {
        const i = s.publickey___getClassname(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    static get SIZE() {
      return s.privatekey_size() >>> 0;
    }
    get serializedSize() {
      return s.publickey_serialized_size(this.__wbg_ptr) >>> 0;
    }
    static derive(e) {
      z(e, N);
      const t = s.publickey_derive(e.__wbg_ptr);
      return P.__wrap(t);
    }
    static fromAny(e) {
      const t = s.publickey_fromAny(e);
      if (t[2]) throw f(t[1]);
      return P.__wrap(t[0]);
    }
    verify(e, t) {
      z(e, V);
      const i = y(t, s.__wbindgen_malloc), o = d;
      return s.publickey_verify(this.__wbg_ptr, e.__wbg_ptr, i, o) !== 0;
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.publickey_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return P.__wrap(o[0]);
    }
    static fromSpki(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.publickey_fromSpki(t, i);
      if (o[2]) throw f(o[1]);
      return P.__wrap(o[0]);
    }
    static fromRaw(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.publickey_fromRaw(t, i);
      if (o[2]) throw f(o[1]);
      return P.__wrap(o[0]);
    }
    constructor(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.publickey_new(t, i);
      if (o[2]) throw f(o[1]);
      return this.__wbg_ptr = o[0] >>> 0, F0.register(this, this.__wbg_ptr, this), this;
    }
    serialize() {
      const e = s.publickey_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    static fromHex(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.publickey_fromHex(t, i);
      if (o[2]) throw f(o[1]);
      return P.__wrap(o[0]);
    }
    toHex() {
      let e, t;
      try {
        const i = s.publickey_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    toAddress() {
      const e = s.publickey_toAddress(this.__wbg_ptr);
      return M.__wrap(e);
    }
    equals(e) {
      return z(e, P), s.publickey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
    }
    compare(e) {
      return z(e, P), s.publickey_compare(this.__wbg_ptr, e.__wbg_ptr);
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_randomsecret_free(n >>> 0, 1));
  const K0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_signature_free(n >>> 0, 1));
  class V {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(V.prototype);
      return t.__wbg_ptr = e, K0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, K0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_signature_free(e, 0);
    }
    __getClassname() {
      let e, t;
      try {
        const i = s.signature___getClassname(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.signature_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return V.__wrap(o[0]);
    }
    serialize() {
      const e = s.signature_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    static create(e, t, i) {
      z(e, N), z(t, P);
      const o = y(i, s.__wbindgen_malloc), _ = d, a = s.signature_create(e.__wbg_ptr, t.__wbg_ptr, o, _);
      return V.__wrap(a);
    }
    static fromAsn1(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.signature_fromAsn1(t, i);
      if (o[2]) throw f(o[1]);
      return V.__wrap(o[0]);
    }
    static fromHex(e) {
      const t = T(e, s.__wbindgen_malloc, s.__wbindgen_realloc), i = d, o = s.signature_fromHex(t, i);
      if (o[2]) throw f(o[1]);
      return V.__wrap(o[0]);
    }
    toHex() {
      let e, t;
      try {
        const i = s.signature_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_signatureproof_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_stakingcontract_free(n >>> 0, 1));
  const E0 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => s.__wbg_transaction_free(n >>> 0, 1));
  class J {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(J.prototype);
      return t.__wbg_ptr = e, E0.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, E0.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      s.__wbg_transaction_free(e, 0);
    }
    __getClassname() {
      let e, t;
      try {
        const i = s.transaction___getClassname(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    constructor(e, t, i, o, _, a, l, g, u, p, w) {
      z(e, M);
      var b = I(i) ? 0 : y(i, s.__wbindgen_malloc), A = d;
      z(o, M);
      var n0 = I(a) ? 0 : y(a, s.__wbindgen_malloc), Q = d;
      const v = s.transaction_new(e.__wbg_ptr, I(t) ? 16777215 : t, b, A, o.__wbg_ptr, I(_) ? 16777215 : _, n0, Q, l, g, I(u) ? 16777215 : u, p, w);
      if (v[2]) throw f(v[1]);
      return this.__wbg_ptr = v[0] >>> 0, E0.register(this, this.__wbg_ptr, this), this;
    }
    sign(e) {
      z(e, $);
      const t = s.transaction_sign(this.__wbg_ptr, e.__wbg_ptr);
      if (t[1]) throw f(t[0]);
    }
    hash() {
      let e, t;
      try {
        const i = s.transaction_hash(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    verify(e) {
      const t = s.transaction_verify(this.__wbg_ptr, I(e) ? 16777215 : e);
      if (t[1]) throw f(t[0]);
    }
    isValidAt(e) {
      return s.transaction_isValidAt(this.__wbg_ptr, e) !== 0;
    }
    getContractCreationAddress() {
      const e = s.transaction_getContractCreationAddress(this.__wbg_ptr);
      return M.__wrap(e);
    }
    serializeContent() {
      const e = s.transaction_serializeContent(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    serialize() {
      const e = s.transaction_serialize(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    get format() {
      return s.transaction_format(this.__wbg_ptr);
    }
    get sender() {
      const e = s.transaction_sender(this.__wbg_ptr);
      return M.__wrap(e);
    }
    get senderType() {
      return s.transaction_senderType(this.__wbg_ptr);
    }
    get recipient() {
      const e = s.transaction_recipient(this.__wbg_ptr);
      return M.__wrap(e);
    }
    get recipientType() {
      return s.transaction_recipientType(this.__wbg_ptr);
    }
    get value() {
      const e = s.transaction_value(this.__wbg_ptr);
      return BigInt.asUintN(64, e);
    }
    get fee() {
      const e = s.transaction_fee(this.__wbg_ptr);
      return BigInt.asUintN(64, e);
    }
    get feePerByte() {
      return s.transaction_feePerByte(this.__wbg_ptr);
    }
    get validityStartHeight() {
      return s.transaction_validityStartHeight(this.__wbg_ptr) >>> 0;
    }
    get networkId() {
      return s.transaction_networkId(this.__wbg_ptr);
    }
    get flags() {
      return s.transaction_flags(this.__wbg_ptr);
    }
    get data() {
      const e = s.transaction_data(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    set data(e) {
      const t = y(e, s.__wbindgen_malloc), i = d;
      s.transaction_set_data(this.__wbg_ptr, t, i);
    }
    get senderData() {
      const e = s.transaction_senderData(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    get proof() {
      const e = s.transaction_proof(this.__wbg_ptr);
      var t = O(e[0], e[1]).slice();
      return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    set proof(e) {
      const t = y(e, s.__wbindgen_malloc), i = d;
      s.transaction_set_proof(this.__wbg_ptr, t, i);
    }
    get serializedSize() {
      return s.transaction_serializedSize(this.__wbg_ptr) >>> 0;
    }
    toHex() {
      let e, t;
      try {
        const i = s.transaction_toHex(this.__wbg_ptr);
        return e = i[0], t = i[1], x(i[0], i[1]);
      } finally {
        s.__wbindgen_free(e, t, 1);
      }
    }
    toPlain(e, t) {
      const i = s.transaction_toPlain(this.__wbg_ptr, I(e) ? 4294967297 : e >>> 0, !I(t), I(t) ? BigInt(0) : t);
      if (i[2]) throw f(i[1]);
      return f(i[0]);
    }
    static deserialize(e) {
      const t = y(e, s.__wbindgen_malloc), i = d, o = s.transaction_deserialize(t, i);
      if (o[2]) throw f(o[1]);
      return J.__wrap(o[0]);
    }
    static fromAny(e) {
      const t = s.transaction_fromAny(e);
      if (t[2]) throw f(t[1]);
      return J.__wrap(t[0]);
    }
    static fromPlain(e) {
      const t = s.transaction_fromPlain(e);
      if (t[2]) throw f(t[1]);
      return J.__wrap(t[0]);
    }
  }
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_transactionbuilder_free(n >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_vestingcontract_free(n >>> 0, 1));
  function ut(n, e) {
    const t = String(e), i = T(t, s.__wbindgen_malloc, s.__wbindgen_realloc), o = d;
    B().setInt32(n + 4, o, true), B().setInt32(n + 0, i, true);
  }
  function gt() {
    return _0(function(n, e, t) {
      return Reflect.apply(n, e, t);
    }, arguments);
  }
  function dt(n) {
    return n.buffer;
  }
  function pt() {
    return _0(function(n, e) {
      return n.call(e);
    }, arguments);
  }
  function ft(n) {
    return n.done;
  }
  function bt(n) {
    return Object.entries(n);
  }
  function wt(n) {
    return j.__wrap(n);
  }
  function mt(n) {
    return K.__wrap(n);
  }
  function yt() {
    return _0(function(n, e) {
      globalThis.crypto.getRandomValues(O(n, e));
    }, arguments);
  }
  function ht() {
    return _0(function(n, e) {
      return Reflect.get(n, e);
    }, arguments);
  }
  function kt(n, e) {
    return n[e >>> 0];
  }
  function vt(n, e) {
    return n[e];
  }
  function xt(n) {
    let e;
    try {
      e = n instanceof ArrayBuffer;
    } catch {
      e = false;
    }
    return e;
  }
  function zt(n) {
    let e;
    try {
      e = n instanceof Map;
    } catch {
      e = false;
    }
    return e;
  }
  function At(n) {
    let e;
    try {
      e = n instanceof Uint8Array;
    } catch {
      e = false;
    }
    return e;
  }
  function Ct(n) {
    return Array.isArray(n);
  }
  function Mt(n) {
    return Number.isSafeInteger(n);
  }
  function Ht() {
    return Symbol.iterator;
  }
  function St(n) {
    return n.length;
  }
  function Rt(n) {
    return n.length;
  }
  function Ft() {
    return new Object();
  }
  function Et() {
    return new Array();
  }
  function It(n) {
    return new Uint8Array(n);
  }
  function Pt(n) {
    return n.next;
  }
  function Tt() {
    return _0(function(n) {
      return n.next();
    }, arguments);
  }
  function Ot(n) {
    return P.__wrap(n);
  }
  function Lt(n, e, t) {
    n[e >>> 0] = t;
  }
  function Nt(n, e, t) {
    n[e] = t;
  }
  function Bt(n, e, t) {
    n.set(e, t >>> 0);
  }
  function Dt(n) {
    return V.__wrap(n);
  }
  function Ut(n) {
    return n.value;
  }
  function Wt(n) {
    return +n;
  }
  function qt(n) {
    return n;
  }
  function jt(n) {
    return BigInt.asUintN(64, n);
  }
  function Vt(n, e) {
    const t = e, i = typeof t == "bigint" ? t : void 0;
    B().setBigInt64(n + 8, I(i) ? BigInt(0) : i, true), B().setInt32(n + 0, !I(i), true);
  }
  function Xt(n) {
    const e = n;
    return typeof e == "boolean" ? e ? 1 : 0 : 2;
  }
  function Yt(n, e) {
    const t = N0(e), i = T(t, s.__wbindgen_malloc, s.__wbindgen_realloc), o = d;
    B().setInt32(n + 4, o, true), B().setInt32(n + 0, i, true);
  }
  function Gt(n, e) {
    return new Error(x(n, e));
  }
  function $t(n, e) {
    return n in e;
  }
  function Kt() {
    const n = s.__wbindgen_export_4, e = n.grow(4);
    n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, true), n.set(e + 3, false);
  }
  function Jt(n) {
    return typeof n == "bigint";
  }
  function Qt(n) {
    return typeof n == "function";
  }
  function Zt(n) {
    const e = n;
    return typeof e == "object" && e !== null;
  }
  function en(n) {
    return typeof n == "string";
  }
  function tn(n) {
    return n === void 0;
  }
  function nn(n, e) {
    return n === e;
  }
  function rn(n, e) {
    return n == e;
  }
  function sn() {
    return s.memory;
  }
  function on(n, e) {
    const t = e, i = typeof t == "number" ? t : void 0;
    B().setFloat64(n + 8, I(i) ? 0 : i, true), B().setInt32(n + 0, !I(i), true);
  }
  function _n(n) {
    return n;
  }
  function an(n, e) {
    const t = e, i = typeof t == "string" ? t : void 0;
    var o = I(i) ? 0 : T(i, s.__wbindgen_malloc, s.__wbindgen_realloc), _ = d;
    B().setInt32(n + 4, _, true), B().setInt32(n + 0, o, true);
  }
  function cn(n, e) {
    return x(n, e);
  }
  function ln(n, e) {
    throw new Error(x(n, e));
  }
  URL = globalThis.URL;
  const r = await it({
    "./index_bg.js": {
      __wbg_signature_new: Dt,
      __wbindgen_number_new: _n,
      __wbg_es256publickey_new: wt,
      __wbg_publickey_new: Ot,
      __wbg_es256signature_new: mt,
      __wbindgen_error_new: Gt,
      __wbindgen_is_object: Zt,
      __wbindgen_string_new: cn,
      __wbindgen_is_undefined: tn,
      __wbindgen_string_get: an,
      __wbindgen_number_get: on,
      __wbindgen_in: $t,
      __wbindgen_boolean_get: Xt,
      __wbindgen_is_bigint: Jt,
      __wbindgen_bigint_from_i64: qt,
      __wbindgen_jsval_eq: nn,
      __wbindgen_bigint_from_u64: jt,
      __wbindgen_is_string: en,
      __wbindgen_jsval_loose_eq: rn,
      __wbindgen_as_number: Wt,
      __wbg_String_8f0eb39a4a4c2f66: ut,
      __wbg_getwithrefkey_1dc361bd10053bfe: vt,
      __wbg_set_3f1d0b984ed272ed: Nt,
      __wbindgen_is_function: Qt,
      __wbg_get_b9b93047fe3cf45b: kt,
      __wbg_length_e2d2a49132c1b256: Rt,
      __wbg_new_78feb108b6472713: Et,
      __wbg_next_25feadfc0913fea9: Pt,
      __wbg_next_6574e1a8a62d1055: Tt,
      __wbg_done_769e5ede4b31c67b: ft,
      __wbg_value_cd1ffa7b1ab794f1: Ut,
      __wbg_iterator_9a24c88df860dc65: Ht,
      __wbg_get_67b2ba62fc30de12: ht,
      __wbg_call_672a4d21634d4a24: pt,
      __wbg_new_405e22f390576ce2: Ft,
      __wbg_set_37837023f3d740e8: Lt,
      __wbg_isArray_a1eab7e0d067391b: Ct,
      __wbg_instanceof_ArrayBuffer_e14585432e3737fc: xt,
      __wbg_instanceof_Map_f3469ce2244d2430: zt,
      __wbg_isSafeInteger_343e2beeeece1bb0: Mt,
      __wbg_entries_3265d4158b33e5dc: bt,
      __wbg_buffer_609cc3eee51ed158: dt,
      __wbg_new_a12002a7f91c75be: It,
      __wbg_set_65595bdd868b3009: Bt,
      __wbg_length_a446193dc22c12f8: St,
      __wbg_instanceof_Uint8Array_17156bcf118086a9: At,
      __wbg_apply_eb9e9b97497f91e4: gt,
      __wbg_getRandomValues_3c9c0d586e575a16: yt,
      __wbindgen_bigint_get_as_i64: Vt,
      __wbindgen_debug_string: Yt,
      __wbindgen_throw: ln,
      __wbindgen_memory: sn,
      __wbindgen_init_externref_table: Kt
    }
  }, rt), un = r.memory, gn = r.transaction___getClassname, dn = r.__wbg_transaction_free, pn = r.transaction_new, fn = r.transaction_sign, bn = r.transaction_hash, wn = r.transaction_verify, mn = r.transaction_isValidAt, yn = r.transaction_getContractCreationAddress, hn = r.transaction_serializeContent, kn = r.transaction_serialize, vn = r.transaction_format, xn = r.transaction_sender, zn = r.transaction_senderType, An = r.transaction_recipient, Cn = r.transaction_recipientType, Mn = r.transaction_value, Hn = r.transaction_fee, Sn = r.transaction_feePerByte, Rn = r.transaction_validityStartHeight, Fn = r.transaction_networkId, En = r.transaction_flags, In = r.transaction_data, Pn = r.transaction_set_data, Tn = r.transaction_senderData, On = r.transaction_proof, Ln = r.transaction_set_proof, Nn = r.transaction_serializedSize, Bn = r.transaction_toHex, Dn = r.transaction_toPlain, Un = r.transaction_deserialize, Wn = r.transaction_fromAny, qn = r.transaction_fromPlain, jn = r.address___getClassname, Vn = r.__wbg_address_free, Xn = r.address_new, Yn = r.address_deserialize, Gn = r.address_fromAny, $n = r.address_fromString, Kn = r.address_fromUserFriendlyAddress, Jn = r.address_fromPublicKeys, Qn = r.address_toPlain, Zn = r.address_toHex, er = r.address_serialize, tr = r.address_equals, nr = r.address_compare, rr = r.randomsecret___getClassname, ir = r.__wbg_randomsecret_free, sr = r.randomsecret_size, or = r.randomsecret_serialized_size, _r = r.randomsecret_fromAny, ar = r.randomsecret_deserialize, cr = r.randomsecret_serialize, lr = r.randomsecret_fromHex, ur = r.randomsecret_toHex, gr = r.randomsecret_equals, dr = r.randomsecret_new, pr = r.address_toUserFriendlyAddress, fr = r.__wbg_vestingcontract_free, br = r.vestingcontract_dataToPlain, wr = r.vestingcontract_proofToPlain, mr = r.__wbg_blskeypair_free, yr = r.blskeypair_generate, hr = r.blskeypair_derive, kr = r.blskeypair_deserialize, vr = r.blskeypair_new, xr = r.blskeypair_serialize, zr = r.blskeypair_secretKey, Ar = r.blskeypair_publicKey, Cr = r.blskeypair_toHex, Mr = r.__wbg_transactionbuilder_free, Hr = r.transactionbuilder_newBasic, Sr = r.transactionbuilder_newBasicWithData, Rr = r.transactionbuilder_newCreateStaker, Fr = r.transactionbuilder_newAddStake, Er = r.transactionbuilder_newUpdateStaker, Ir = r.transactionbuilder_newSetActiveStake, Pr = r.transactionbuilder_newRetireStake, Tr = r.transactionbuilder_newRemoveStake, Or = r.transactionbuilder_newCreateValidator, Lr = r.transactionbuilder_newUpdateValidator, Nr = r.transactionbuilder_newDeactivateValidator, Br = r.transactionbuilder_newDeleteValidator, Dr = r.transactionbuilder_newRetireValidator, Ur = r.__wbg_hashedtimelockedcontract_free, Wr = r.hashedtimelockedcontract_dataToPlain, qr = r.hashedtimelockedcontract_proofToPlain, jr = r.__wbg_signatureproof_free, Vr = r.signatureproof_single_sig_size, Xr = r.signatureproof_es256_single_sig_size, Yr = r.signatureproof_singleSig, Gr = r.signatureproof_multiSig, $r = r.signatureproof_webauthnSingleSig, Kr = r.signatureproof_webauthnMultiSig, Jr = r.signatureproof_verify, Qr = r.signatureproof_isSignedBy, Zr = r.signatureproof_signature, ei = r.signatureproof_publicKey, ti = r.signatureproof_serialize, ni = r.signatureproof_toPlain, ri = r.signatureproof_deserialize, ii = r.__wbg_stakingcontract_free, si = r.stakingcontract_dataToPlain, oi = r.stakingcontract_proofToPlain, _i = r.__wbg_merkletree_free, ai = r.merkletree_computeRoot, ci = r.partialsignature___getClassname, li = r.__wbg_partialsignature_free, ui = r.partialsignature_size, gi = r.partialsignature_serialized_size, di = r.partialsignature_fromAny, pi = r.partialsignature_deserialize, fi = r.partialsignature_create, bi = r.partialsignature_serialize, wi = r.partialsignature_fromHex, mi = r.partialsignature_toHex, yi = r.partialsignature_equals, hi = r.__wbg_keypair_free, ki = r.keypair_generate, vi = r.keypair_derive, xi = r.keypair_fromHex, zi = r.keypair_deserialize, Ai = r.keypair_new, Ci = r.keypair_serialize, Mi = r.keypair_sign, Hi = r.keypair_signTransaction, Si = r.keypair_privateKey, Ri = r.keypair_publicKey, Fi = r.keypair_toAddress, Ei = r.keypair_toHex, Ii = r.partialsignature_new, Pi = r.__wbg_clientconfiguration_free, Ti = r.clientconfiguration_new, Oi = r.clientconfiguration_network, Li = r.clientconfiguration_seedNodes, Ni = r.clientconfiguration_logLevel, Bi = r.clientconfiguration_onlySecureWsConnections, Di = r.clientconfiguration_desiredPeerCount, Ui = r.clientconfiguration_peerCountMax, Wi = r.clientconfiguration_peerCountPerIpMax, qi = r.clientconfiguration_peerCountPerSubnetMax, ji = r.clientconfiguration_syncMode, Vi = r.clientconfiguration_build, Xi = r.es256publickey___getClassname, Yi = r.__wbg_es256publickey_free, Gi = r.es256publickey_verify, $i = r.es256publickey_deserialize, Ki = r.es256publickey_fromSpki, Ji = r.es256publickey_fromRaw, Qi = r.es256publickey_new, Zi = r.es256publickey_serialize, es = r.es256publickey_fromHex, ts = r.es256publickey_toHex, ns = r.es256publickey_toAddress, rs = r.es256publickey_equals, is = r.es256publickey_compare, ss = r.signature___getClassname, os = r.__wbg_signature_free, _s = r.signature_deserialize, as = r.signature_serialize, cs = r.signature_create, ls = r.signature_fromAsn1, us = r.signature_fromHex, gs = r.signature_toHex, ds = r.__wbg_cryptoutils_free, ps = r.cryptoutils_getRandomValues, fs = r.cryptoutils_computeHmacSha512, bs = r.cryptoutils_computePBKDF2sha512, ws = r.commitment___getClassname, ms = r.__wbg_commitment_free, ys = r.commitment_size, hs = r.commitment_serialized_size, ks = r.commitment_derive, vs = r.commitment_sum, xs = r.commitment_fromAny, zs = r.commitment_deserialize, As = r.commitment_serialize, Cs = r.commitment_fromHex, Ms = r.commitment_toHex, Hs = r.commitment_equals, Ss = r.__wbg_blssecretkey_free, Rs = r.blssecretkey_generate, Fs = r.blssecretkey_deserialize, Es = r.blssecretkey_new, Is = r.blssecretkey_serialize, Ps = r.blssecretkey_fromHex, Ts = r.blssecretkey_toHex, Os = r.__wbg_hash_free, Ls = r.hash_computeBlake2b, Ns = r.hash_computeSha256, Bs = r.hash_computeSha512, Ds = r.hash_computeNimiqArgon2d, Us = r.hash_computeNimiqArgon2id, Ws = r.commitment_new, qs = r.commitmentpair___getClassname, js = r.__wbg_commitmentpair_free, Vs = r.commitmentpair_size, Xs = r.commitmentpair_serialized_size, Ys = r.commitmentpair_fromAny, Gs = r.commitmentpair_deserialize, $s = r.commitmentpair_generate, Ks = r.commitmentpair_derive, Js = r.commitmentpair_new, Qs = r.commitmentpair_serialize, Zs = r.commitmentpair_fromHex, eo = r.commitmentpair_toHex, to = r.commitmentpair_secret, no = r.commitmentpair_commitment, ro = r.commitmentpair_equals, io = r.es256signature___getClassname, so = r.__wbg_es256signature_free, oo = r.es256signature_deserialize, _o = r.es256signature_serialize, ao = r.es256signature_fromAsn1, co = r.es256signature_fromHex, lo = r.es256signature_toHex, uo = r.__wbg_blspublickey_free, go = r.blspublickey_derive, po = r.blspublickey_deserialize, fo = r.blspublickey_serialize, bo = r.blspublickey_fromHex, wo = r.blspublickey_toHex, mo = r.__wbg_privatekey_free, yo = r.privatekey_purpose_id, ho = r.privatekey_size, ko = r.privatekey_serialized_size, vo = r.privatekey_generate, xo = r.privatekey_deserialize, zo = r.privatekey_new, Ao = r.privatekey_serialize, Co = r.privatekey_fromHex, Mo = r.privatekey_toHex, Ho = r.privatekey_equals, So = r.publickey___getClassname, Ro = r.__wbg_publickey_free, Fo = r.publickey_serialized_size, Eo = r.publickey_derive, Io = r.publickey_fromAny, Po = r.publickey_verify, To = r.publickey_deserialize, Oo = r.publickey_fromSpki, Lo = r.publickey_fromRaw, No = r.publickey_new, Bo = r.publickey_serialize, Do = r.publickey_fromHex, Uo = r.publickey_toHex, Wo = r.publickey_toAddress, qo = r.publickey_equals, jo = r.publickey_compare, Vo = r.publickey_size, Xo = r.blspublickey_new, Yo = r.__wbg_policy_free, Go = r.policy_transaction_validity_window, $o = r.policy_transaction_validity_window_blocks, Ko = r.policy_batches_per_epoch, Jo = r.policy_blocks_per_batch, Qo = r.policy_blocks_per_epoch, Zo = r.policy_genesis_block_number, e_ = r.policy_state_chunks_max_size, t_ = r.policy_epochAt, n_ = r.policy_epochIndexAt, r_ = r.policy_batchAt, i_ = r.policy_batchIndexAt, s_ = r.policy_electionBlockAfter, o_ = r.policy_electionBlockBefore, __ = r.policy_lastElectionBlock, a_ = r.policy_isElectionBlockAt, c_ = r.policy_macroBlockAfter, l_ = r.policy_macroBlockBefore, u_ = r.policy_lastMacroBlock, g_ = r.policy_isMacroBlockAt, d_ = r.policy_isMicroBlockAt, p_ = r.policy_firstBlockOf, f_ = r.policy_firstBlockOfBatch, b_ = r.policy_electionBlockOf, w_ = r.policy_macroBlockOf, m_ = r.policy_firstBatchOfEpoch, y_ = r.policy_lastBlockOfReportingWindow, h_ = r.policy_blockAfterReportingWindow, k_ = r.policy_blockAfterJail, v_ = r.policy_supplyAt, x_ = r.policy_batchDelayPenalty, z_ = r.policy_wasm_staking_contract_address, A_ = r.policy_wasm_coinbase_address, C_ = r.policy_wasm_max_size_micro_body, M_ = r.policy_wasm_slots, H_ = r.policy_wasm_two_f_plus_one, S_ = r.policy_wasm_f_plus_one, R_ = r.policy_wasm_min_block_producer_timeout, F_ = r.policy_wasm_block_separation_time, E_ = r.policy_wasm_min_epochs_stored, I_ = r.policy_wasm_timestamp_max_drift, P_ = r.policy_wasm_minimum_rewards_percentage, T_ = r.policy_wasm_validator_deposit, O_ = r.policy_wasm_jail_epochs, L_ = r.policy_wasm_total_supply, N_ = r.policy_wasm_bls_cache_max_capacity, B_ = r.policy_wasm_history_chunks_max_size, D_ = r.policy_wasm_version, U_ = r.__wbindgen_malloc, W_ = r.__wbindgen_realloc, q_ = r.__wbindgen_exn_store, j_ = r.__externref_table_alloc, V_ = r.__wbindgen_export_4, X_ = r.__wbindgen_free, Y_ = r.__externref_table_dealloc, fe = r.__wbindgen_start, G_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_alloc: j_,
    __externref_table_dealloc: Y_,
    __wbg_address_free: Vn,
    __wbg_blskeypair_free: mr,
    __wbg_blspublickey_free: uo,
    __wbg_blssecretkey_free: Ss,
    __wbg_clientconfiguration_free: Pi,
    __wbg_commitment_free: ms,
    __wbg_commitmentpair_free: js,
    __wbg_cryptoutils_free: ds,
    __wbg_es256publickey_free: Yi,
    __wbg_es256signature_free: so,
    __wbg_hash_free: Os,
    __wbg_hashedtimelockedcontract_free: Ur,
    __wbg_keypair_free: hi,
    __wbg_merkletree_free: _i,
    __wbg_partialsignature_free: li,
    __wbg_policy_free: Yo,
    __wbg_privatekey_free: mo,
    __wbg_publickey_free: Ro,
    __wbg_randomsecret_free: ir,
    __wbg_signature_free: os,
    __wbg_signatureproof_free: jr,
    __wbg_stakingcontract_free: ii,
    __wbg_transaction_free: dn,
    __wbg_transactionbuilder_free: Mr,
    __wbg_vestingcontract_free: fr,
    __wbindgen_exn_store: q_,
    __wbindgen_export_4: V_,
    __wbindgen_free: X_,
    __wbindgen_malloc: U_,
    __wbindgen_realloc: W_,
    __wbindgen_start: fe,
    address___getClassname: jn,
    address_compare: nr,
    address_deserialize: Yn,
    address_equals: tr,
    address_fromAny: Gn,
    address_fromPublicKeys: Jn,
    address_fromString: $n,
    address_fromUserFriendlyAddress: Kn,
    address_new: Xn,
    address_serialize: er,
    address_toHex: Zn,
    address_toPlain: Qn,
    address_toUserFriendlyAddress: pr,
    blskeypair_derive: hr,
    blskeypair_deserialize: kr,
    blskeypair_generate: yr,
    blskeypair_new: vr,
    blskeypair_publicKey: Ar,
    blskeypair_secretKey: zr,
    blskeypair_serialize: xr,
    blskeypair_toHex: Cr,
    blspublickey_derive: go,
    blspublickey_deserialize: po,
    blspublickey_fromHex: bo,
    blspublickey_new: Xo,
    blspublickey_serialize: fo,
    blspublickey_toHex: wo,
    blssecretkey_deserialize: Fs,
    blssecretkey_fromHex: Ps,
    blssecretkey_generate: Rs,
    blssecretkey_new: Es,
    blssecretkey_serialize: Is,
    blssecretkey_toHex: Ts,
    clientconfiguration_build: Vi,
    clientconfiguration_desiredPeerCount: Di,
    clientconfiguration_logLevel: Ni,
    clientconfiguration_network: Oi,
    clientconfiguration_new: Ti,
    clientconfiguration_onlySecureWsConnections: Bi,
    clientconfiguration_peerCountMax: Ui,
    clientconfiguration_peerCountPerIpMax: Wi,
    clientconfiguration_peerCountPerSubnetMax: qi,
    clientconfiguration_seedNodes: Li,
    clientconfiguration_syncMode: ji,
    commitment___getClassname: ws,
    commitment_derive: ks,
    commitment_deserialize: zs,
    commitment_equals: Hs,
    commitment_fromAny: xs,
    commitment_fromHex: Cs,
    commitment_new: Ws,
    commitment_serialize: As,
    commitment_serialized_size: hs,
    commitment_size: ys,
    commitment_sum: vs,
    commitment_toHex: Ms,
    commitmentpair___getClassname: qs,
    commitmentpair_commitment: no,
    commitmentpair_derive: Ks,
    commitmentpair_deserialize: Gs,
    commitmentpair_equals: ro,
    commitmentpair_fromAny: Ys,
    commitmentpair_fromHex: Zs,
    commitmentpair_generate: $s,
    commitmentpair_new: Js,
    commitmentpair_secret: to,
    commitmentpair_serialize: Qs,
    commitmentpair_serialized_size: Xs,
    commitmentpair_size: Vs,
    commitmentpair_toHex: eo,
    cryptoutils_computeHmacSha512: fs,
    cryptoutils_computePBKDF2sha512: bs,
    cryptoutils_getRandomValues: ps,
    es256publickey___getClassname: Xi,
    es256publickey_compare: is,
    es256publickey_deserialize: $i,
    es256publickey_equals: rs,
    es256publickey_fromHex: es,
    es256publickey_fromRaw: Ji,
    es256publickey_fromSpki: Ki,
    es256publickey_new: Qi,
    es256publickey_serialize: Zi,
    es256publickey_toAddress: ns,
    es256publickey_toHex: ts,
    es256publickey_verify: Gi,
    es256signature___getClassname: io,
    es256signature_deserialize: oo,
    es256signature_fromAsn1: ao,
    es256signature_fromHex: co,
    es256signature_serialize: _o,
    es256signature_toHex: lo,
    hash_computeBlake2b: Ls,
    hash_computeNimiqArgon2d: Ds,
    hash_computeNimiqArgon2id: Us,
    hash_computeSha256: Ns,
    hash_computeSha512: Bs,
    hashedtimelockedcontract_dataToPlain: Wr,
    hashedtimelockedcontract_proofToPlain: qr,
    keypair_derive: vi,
    keypair_deserialize: zi,
    keypair_fromHex: xi,
    keypair_generate: ki,
    keypair_new: Ai,
    keypair_privateKey: Si,
    keypair_publicKey: Ri,
    keypair_serialize: Ci,
    keypair_sign: Mi,
    keypair_signTransaction: Hi,
    keypair_toAddress: Fi,
    keypair_toHex: Ei,
    memory: un,
    merkletree_computeRoot: ai,
    partialsignature___getClassname: ci,
    partialsignature_create: fi,
    partialsignature_deserialize: pi,
    partialsignature_equals: yi,
    partialsignature_fromAny: di,
    partialsignature_fromHex: wi,
    partialsignature_new: Ii,
    partialsignature_serialize: bi,
    partialsignature_serialized_size: gi,
    partialsignature_size: ui,
    partialsignature_toHex: mi,
    policy_batchAt: r_,
    policy_batchDelayPenalty: x_,
    policy_batchIndexAt: i_,
    policy_batches_per_epoch: Ko,
    policy_blockAfterJail: k_,
    policy_blockAfterReportingWindow: h_,
    policy_blocks_per_batch: Jo,
    policy_blocks_per_epoch: Qo,
    policy_electionBlockAfter: s_,
    policy_electionBlockBefore: o_,
    policy_electionBlockOf: b_,
    policy_epochAt: t_,
    policy_epochIndexAt: n_,
    policy_firstBatchOfEpoch: m_,
    policy_firstBlockOf: p_,
    policy_firstBlockOfBatch: f_,
    policy_genesis_block_number: Zo,
    policy_isElectionBlockAt: a_,
    policy_isMacroBlockAt: g_,
    policy_isMicroBlockAt: d_,
    policy_lastBlockOfReportingWindow: y_,
    policy_lastElectionBlock: __,
    policy_lastMacroBlock: u_,
    policy_macroBlockAfter: c_,
    policy_macroBlockBefore: l_,
    policy_macroBlockOf: w_,
    policy_state_chunks_max_size: e_,
    policy_supplyAt: v_,
    policy_transaction_validity_window: Go,
    policy_transaction_validity_window_blocks: $o,
    policy_wasm_block_separation_time: F_,
    policy_wasm_bls_cache_max_capacity: N_,
    policy_wasm_coinbase_address: A_,
    policy_wasm_f_plus_one: S_,
    policy_wasm_history_chunks_max_size: B_,
    policy_wasm_jail_epochs: O_,
    policy_wasm_max_size_micro_body: C_,
    policy_wasm_min_block_producer_timeout: R_,
    policy_wasm_min_epochs_stored: E_,
    policy_wasm_minimum_rewards_percentage: P_,
    policy_wasm_slots: M_,
    policy_wasm_staking_contract_address: z_,
    policy_wasm_timestamp_max_drift: I_,
    policy_wasm_total_supply: L_,
    policy_wasm_two_f_plus_one: H_,
    policy_wasm_validator_deposit: T_,
    policy_wasm_version: D_,
    privatekey_deserialize: xo,
    privatekey_equals: Ho,
    privatekey_fromHex: Co,
    privatekey_generate: vo,
    privatekey_new: zo,
    privatekey_purpose_id: yo,
    privatekey_serialize: Ao,
    privatekey_serialized_size: ko,
    privatekey_size: ho,
    privatekey_toHex: Mo,
    publickey___getClassname: So,
    publickey_compare: jo,
    publickey_derive: Eo,
    publickey_deserialize: To,
    publickey_equals: qo,
    publickey_fromAny: Io,
    publickey_fromHex: Do,
    publickey_fromRaw: Lo,
    publickey_fromSpki: Oo,
    publickey_new: No,
    publickey_serialize: Bo,
    publickey_serialized_size: Fo,
    publickey_size: Vo,
    publickey_toAddress: Wo,
    publickey_toHex: Uo,
    publickey_verify: Po,
    randomsecret___getClassname: rr,
    randomsecret_deserialize: ar,
    randomsecret_equals: gr,
    randomsecret_fromAny: _r,
    randomsecret_fromHex: lr,
    randomsecret_new: dr,
    randomsecret_serialize: cr,
    randomsecret_serialized_size: or,
    randomsecret_size: sr,
    randomsecret_toHex: ur,
    signature___getClassname: ss,
    signature_create: cs,
    signature_deserialize: _s,
    signature_fromAsn1: ls,
    signature_fromHex: us,
    signature_serialize: as,
    signature_toHex: gs,
    signatureproof_deserialize: ri,
    signatureproof_es256_single_sig_size: Xr,
    signatureproof_isSignedBy: Qr,
    signatureproof_multiSig: Gr,
    signatureproof_publicKey: ei,
    signatureproof_serialize: ti,
    signatureproof_signature: Zr,
    signatureproof_singleSig: Yr,
    signatureproof_single_sig_size: Vr,
    signatureproof_toPlain: ni,
    signatureproof_verify: Jr,
    signatureproof_webauthnMultiSig: Kr,
    signatureproof_webauthnSingleSig: $r,
    stakingcontract_dataToPlain: si,
    stakingcontract_proofToPlain: oi,
    transaction___getClassname: gn,
    transaction_data: In,
    transaction_deserialize: Un,
    transaction_fee: Hn,
    transaction_feePerByte: Sn,
    transaction_flags: En,
    transaction_format: vn,
    transaction_fromAny: Wn,
    transaction_fromPlain: qn,
    transaction_getContractCreationAddress: yn,
    transaction_hash: bn,
    transaction_isValidAt: mn,
    transaction_networkId: Fn,
    transaction_new: pn,
    transaction_proof: On,
    transaction_recipient: An,
    transaction_recipientType: Cn,
    transaction_sender: xn,
    transaction_senderData: Tn,
    transaction_senderType: zn,
    transaction_serialize: kn,
    transaction_serializeContent: hn,
    transaction_serializedSize: Nn,
    transaction_set_data: Pn,
    transaction_set_proof: Ln,
    transaction_sign: fn,
    transaction_toHex: Bn,
    transaction_toPlain: Dn,
    transaction_validityStartHeight: Rn,
    transaction_value: Mn,
    transaction_verify: wn,
    transactionbuilder_newAddStake: Fr,
    transactionbuilder_newBasic: Hr,
    transactionbuilder_newBasicWithData: Sr,
    transactionbuilder_newCreateStaker: Rr,
    transactionbuilder_newCreateValidator: Or,
    transactionbuilder_newDeactivateValidator: Nr,
    transactionbuilder_newDeleteValidator: Br,
    transactionbuilder_newRemoveStake: Tr,
    transactionbuilder_newRetireStake: Pr,
    transactionbuilder_newRetireValidator: Dr,
    transactionbuilder_newSetActiveStake: Ir,
    transactionbuilder_newUpdateStaker: Er,
    transactionbuilder_newUpdateValidator: Lr,
    vestingcontract_dataToPlain: br,
    vestingcontract_proofToPlain: wr
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  st(G_);
  fe();
  function $_(n, e) {
    return {
      async create(t) {
        const i = n();
        let o;
        const _ = new Promise((u) => {
          o = u;
        }), a = (u) => {
          Q0(u) === "NIMIQ_READY" && o();
        };
        J0(i, "message", a);
        const l = setInterval(() => {
          i.postMessage("NIMIQ_CHECKREADY");
        }, 20);
        await _, K_(i, "message", a), clearInterval(l), console.debug("Client WASM worker loaded");
        const g = e(i);
        return typeof window < "u" && (window.addEventListener("offline", () => i.postMessage("offline")), window.addEventListener("online", () => i.postMessage("online"))), typeof document < "u" && document.addEventListener("visibilitychange", () => {
          document.visibilityState === "visible" && i.postMessage("visible");
        }), console.debug("Sending NIMIQ_INIT message to client worker"), i.postMessage({
          type: "NIMIQ_INIT",
          config: t
        }), await new Promise((u, p) => {
          J0(i, "message", (w) => {
            const b = Q0(w);
            if (!(typeof b != "object" || !("ok" in b)) && (b.ok === true && u(), b.ok === false && "error" in b && typeof b.error == "string")) {
              const A = new Error(b.error);
              "stack" in b && typeof b.stack == "string" && (A.stack = b.stack), p(A);
            }
          });
        }), console.debug("Have client worker remote"), g;
      }
    };
  }
  function J0(n, e, t) {
    const i = "addListener" in n ? "addListener" : "addEventListener";
    n[i](e, t);
  }
  function K_(n, e, t) {
    const i = "removeListener" in n ? "removeListener" : "removeEventListener";
    n[i](e, t);
  }
  function Q0(n) {
    return typeof n == "object" && "data" in n ? n.data : n;
  }
  Oe(nt, {
    Address: M,
    Transaction: J
  });
  const J_ = $_(() => new Worker(new URL("" + new URL("worker-D-AmvxC0.js", import.meta.url).href, import.meta.url), {
    type: "module"
  }), (n) => k0(n));
  Le(() => new Worker(new URL("" + new URL("crypto-CtXlKrNP.js", import.meta.url).href, import.meta.url), {
    type: "module"
  }), (n) => k0(n));
  var s0 = ((n) => (n.Idle = "idle", n.Connecting = "connecting", n.Established = "established", n))(s0 || {});
  const Q_ = [
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ],
    [
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ], be = 129, Z_ = 52, y0 = 1037, h0 = 531, { isMobile: ea } = Ne(), we = ea ? h0 / y0 : y0 / h0, me = 1.142, W0 = 0.98, c = 2 * y0 / (be * W0), g0 = Math.PI / 6, Z0 = 0.2, ta = 2e3, ee = (n) => 1 - (1 - n) ** 3;
  function na(n, e) {
    const t = c, i = t / 2, o = n.createRadialGradient(e.left + i, e.top + i, t, e.left + i, e.top + i, 2 * t);
    [
      "rgb(236, 153, 28)",
      "rgb(233, 178, 19)"
    ].forEach((a, l) => o.addColorStop(l, a)), n.fillStyle = o;
  }
  function ra(n, e) {
    n.fillStyle = "rgba(255,255,255,0.3)";
  }
  function ye(n, e) {
    n.fillStyle = "rgba(255,255,255,0.1)";
  }
  class I0 {
    constructor(e, t) {
      __publicField(this, "position", {
        x: 0,
        y: 0
      });
      __publicField(this, "paintHexagon", ye);
      this.position.x = e, this.position.y = t;
    }
    get left() {
      return this.position.x * c * W0;
    }
    get top() {
      const e = this.position.x % 2 === 0 ? 0.5 : 0;
      return (this.position.y + e) * c * me - 0.5 * c + 2;
    }
    draw(e) {
      return e.lineWidth = 1, e.beginPath(), e.moveTo(this.left + 0.22 * c, this.top + 0.04 * c), e.arc(this.left + 0.298 * c, this.top + 0.0825 * c, 0.0825 * c, 7 / 6 * Math.PI, 1.5 * Math.PI), e.lineTo(this.left + 0.71 * c, this.top), e.arc(this.left + 0.71 * c, this.top + 0.0825 * c, 0.0825 * c, 1.5 * Math.PI, 11 / 6 * Math.PI), e.lineTo(this.left + 0.9875 * c, this.top + 0.4 * c), e.arc(this.left + 0.9175 * c, this.top + 0.445 * c, 0.0825 * c, 11 / 6 * Math.PI, 1 / 6 * Math.PI), e.lineTo(this.left + 0.78 * c, this.top + 0.85 * c), e.arc(this.left + 0.71 * c, this.top + 0.8075 * c, 0.0825 * c, 1 / 6 * Math.PI, 0.5 * Math.PI), e.lineTo(this.left + 0.29 * c, this.top + 0.89 * c), e.arc(this.left + 0.298 * c, this.top + 0.8075 * c, 0.0825 * c, 0.5 * Math.PI, 5 / 6 * Math.PI), e.lineTo(this.left + 0.0125 * c, this.top + 0.49 * c), e.arc(this.left + 0.0825 * c, this.top + 0.445 * c, 0.0825 * c, 5 / 6 * Math.PI, 7 / 6 * Math.PI), e.closePath(), this.paintHexagon(e, this), e.fill(), false;
    }
  }
  class ia {
    constructor(e, t) {
      __publicField(this, "left1");
      __publicField(this, "top1");
      __publicField(this, "left2");
      __publicField(this, "top2");
      __publicField(this, "ts");
      __publicField(this, "animation", 0);
      __publicField(this, "onAnimationEnd");
      __publicField(this, "state", "animation-in");
      this.left1 = e.left, this.top1 = e.top, this.left2 = t.left, this.top2 = t.top, this.state = "animation-in";
    }
    remove() {
      this.state = "animation-out", this.animation = 0, this.ts = Date.now();
    }
    draw(e, t) {
      if (this.state === "animation-out-finished") return;
      const i = Date.now();
      this.ts || (this.ts = i), t = i - this.ts, this.animation = Math.min((this.animation + t) / ta, 1);
      const o = this.left1 + 0.5 * c, _ = this.top1 + 0.445 * c, a = this.left2 + 0.5 * c, l = this.top2 + 0.445 * c;
      let g = Math.atan2(l - _, a - o);
      const u = Math.hypot(a - o, l - _);
      if (e.lineWidth = 3.5, this.state === "animation-in" || this.state === "animation-out" ? (e.strokeStyle = "rgba(117, 121, 157, 1)", e.setLineDash([
        u,
        u
      ]), e.lineDashOffset = this.state === "animation-in" ? -(u + ee(this.animation) * u) : -ee(this.animation) * u) : this.state === "normal" && (e.strokeStyle = "rgba(117, 121, 157, 1)", e.setLineDash([]), e.lineDashOffset = 0), e.lineCap = "round", e.beginPath(), u >= 3.5 * c) {
        let p = 0, w = 0;
        Math.abs(g) > Math.PI / 2 ? (p = g + Math.PI - g0, w = g + Math.PI / 2, g += g0) : (p = g + Math.PI + g0, w = g - Math.PI / 2, g -= g0), e.moveTo(o + Math.cos(g) * c, _ + Math.sin(g) * c * 0.89), e.quadraticCurveTo((o + a) / 2 + Math.cos(w) * u * Z0, (_ + l) / 2 + Math.sin(w) * u * Z0, a + Math.cos(p) * c, l + Math.sin(p) * c * 0.89);
      } else u > 1.5 * c && (e.moveTo(o + Math.cos(g) * c, _ + Math.sin(g) * c * 0.89), e.lineTo(a + Math.cos(g + Math.PI) * c, l + Math.sin(g + Math.PI) * c * 0.89));
      return e.stroke(), this.animation === 1 && this.state === "animation-in" && (this.state = "normal"), this.animation < 1;
    }
  }
  function sa(n, e) {
    var _a2;
    const t = P0(() => {
      var _a3;
      return (_a3 = n.value) == null ? void 0 : _a3.parentElement;
    }), { userPeer: i, peers: o, centerOnUser: _ = false } = e, { height: a } = Be(t), l = P0(() => {
      var _a3;
      return (_a3 = n.value) == null ? void 0 : _a3.getContext("2d");
    }), g = W([]);
    for (let v = 0; v < be; v++) for (let m = 0; m < Z_; m++) ((_a2 = Q_[v]) == null ? void 0 : _a2[m]) === 1 && g.value.push(new I0(v, m));
    const u = W();
    T0(i, () => {
      i.value && (u.value = g.value.find(({ left: v, top: m }) => v === i.value.x && m === i.value.y), u.value || (u.value = new I0(i.value.x, i.value.y), g.value.push(u.value)), u.value.paintHexagon = na);
    }, {
      immediate: true,
      deep: true
    });
    const p = W([]), w = W([]), { pixelRatio: b } = re();
    function A() {
      if (!n.value || !l.value) return;
      n.value.width = Math.round(a.value * we) * b.value, n.value.height = Math.round(a.value) * b.value;
      const v = n.value.height / (3 * h0);
      if (l.value.resetTransform(), l.value.scale(v, v), l.value.clearRect(0, 0, l.value.canvas.width, l.value.canvas.height), _ && u.value) {
        const m = u.value.left + c / 2, H = u.value.top + c / 2, q = n.value.width / b.value / (2 * v), k = n.value.height / b.value / (2 * v);
        l.value.translate(q - m, k - H);
      }
    }
    A();
    const { pause: n0, resume: Q } = De(() => {
      A();
      const v = w.value.map((m) => m.draw(l.value, 1)).some((m) => m);
      g.value.forEach((m) => m.draw(l.value)), v || (w.value = w.value.filter((m) => m.state !== "animation-out-finished"), n0());
    });
    return T0([
      a,
      u
    ], Q, {
      deep: true
    }), qe(o, (v, m, H, q) => {
      H.forEach((k) => {
        let h = g.value.find(({ position: { x: L, y: C } }) => L === k.x && C === k.y);
        return h || (h = new I0(k.x, k.y), g.value.push(h)), h.paintHexagon = ra, w.value.push(new ia(u.value, h)), p.value.push(h), h;
      }), q.forEach((k) => {
        const h = p.value.find(({ position: C }) => C.x === k.x && C.y === k.y);
        if (!h) return;
        const L = w.value.find((C) => C.left2 === h.left && C.top2 === h.top);
        if (L) {
          if (L.state === "animation-out" && L.animation !== 1) {
            w.value = w.value.filter((F) => F.left2 !== k.x && F.top2 !== k.y);
            const C = p.value.filter((F) => F.position.x === k.x && F.position.y === k.y);
            C.forEach((F) => F.paintHexagon = ye), p.value = p.value.filter((F) => (C == null ? void 0 : C.indexOf(F)) === -1);
            return;
          }
          return L.remove(), h;
        }
      }), Q();
    }, {
      deep: true
    }), {
      userHexagon: u
    };
  }
  const _E = class _E {
    static project(e, { lat: t, lng: i }) {
      const o = e / 5.332539516, _ = Math.max(Math.floor((Math.abs(t) - _E.EPS) / _E.INTERVAL)), a = _ + 1, l = (Math.abs(t) - _ * _E.INTERVAL) / _E.INTERVAL, g = _E.X[a] - _E.X[_], u = _E.Y[a] - _E.Y[_];
      let p = (g * l + _E.X[_]) * (Math.abs(i) * _E.radians);
      p = i < 0 ? -p : p;
      let w = u * l + _E.Y[_];
      return w = t < 0 ? -w : w, {
        x: p * o,
        y: w * o
      };
    }
  };
  __publicField(_E, "X", [
    0.8487,
    0.84751182,
    0.84479598,
    0.840213,
    0.83359314,
    0.8257851,
    0.814752,
    0.80006949,
    0.78216192,
    0.76060494,
    0.73658673,
    0.7086645,
    0.67777182,
    0.64475739,
    0.60987582,
    0.57134484,
    0.52729731,
    0.48562614,
    0.45167814
  ]);
  __publicField(_E, "Y", [
    0,
    0.0838426,
    0.1676852,
    0.2515278,
    0.3353704,
    0.419213,
    0.5030556,
    0.5868982,
    0.67182264,
    0.75336633,
    0.83518048,
    0.91537187,
    0.99339958,
    1.06872269,
    1.14066505,
    1.20841528,
    1.27035062,
    1.31998003,
    1.3523
  ]);
  __publicField(_E, "EPS", 1e-8);
  __publicField(_E, "INTERVAL", 5);
  __publicField(_E, "pi", Math.PI);
  __publicField(_E, "radians", _E.pi / 180);
  let E = _E;
  function te(n) {
    const e = 2.1893617021276595 * y0, t = e / 1.97165551906973, i = E.project(e, n);
    i.x = e / 2 + i.x, i.y = t / 2 - i.y, i.x = Math.max(0, i.x - 0.07045675413022352 * e), i.y = Math.max(0, i.y - 0.012380952380952381 * t);
    const o = Math.floor(i.x / (c * W0)), _ = o % 2 === 0 ? 0.5 : 0;
    return {
      x: o,
      y: Math.floor((i.y + 0.5 * c) / (c * me) - _)
    };
  }
  function oa() {
    async function n(e) {
      const t = new URL("https://geoip.nimiq-network.com:8443/v1/locate");
      e && t.searchParams.set("host", e);
      const i = await $fetch(t.href), { location: o } = i;
      if (!o || !o.latitude || !o.longitude) throw new Error("Invalid GeoIP response");
      return {
        lat: o.latitude,
        lng: o.longitude
      };
    }
    return {
      locate: n
    };
  }
  let _a, aa, ca, la, ua, ga, da, pa, fa, ba, wa, ma, ya, ha, ka, va, xa;
  _a = {
    "of-hidden": ""
  };
  aa = {
    "size-full": "",
    absolute: ""
  };
  ca = {
    left: "[calc(-50%+2px)]",
    flex: "~ col items-center",
    class: "dark",
    "mt-16": "",
    "scheme-dark": "",
    relative: ""
  };
  la = {
    key: 0,
    "layout-id": "connect",
    ring: "0.2 blue",
    flex: "~ items-center",
    "rounded-full": "",
    "transition-colors": "",
    "top--1": "",
    "bg-gradient-blue": ""
  };
  ua = {
    "text-white": "",
    "font-bold": "",
    "px-16": "",
    "py-8": ""
  };
  ga = {
    key: 1,
    "layout-id": "connect",
    ring: "0.2 orange",
    flex: "~ items-center gap-8",
    class: "bg-gradient-orange",
    "outline-none": "",
    "text-white": "",
    "font-semibold": "",
    "px-16": "",
    "py-8": "",
    "rounded-full": "",
    "w-max": "",
    "transition-colors": "",
    "top--3": ""
  };
  da = {
    key: 2,
    "layout-id": "connect",
    flex: "~ items-center gap-8",
    class: "bg-gradient-green",
    "outline-none": "",
    "text-white": "",
    "font-semibold": "",
    "px-16": "",
    "py-8": "",
    "rounded-full": "",
    "w-max": "",
    "transition-colors": "",
    "top--3": "",
    "z-3": ""
  };
  pa = {
    key: 0,
    bottom: "0 xl:32",
    "font-semibold": "",
    "mx-auto": "",
    "p-24": "",
    "rounded-6": "",
    "bg-white": "",
    "bg-op-6": "",
    "h-auto": "",
    "max-w-400": "",
    "transition-height": "",
    "inset-x-0": "",
    absolute: "",
    "z-2": "",
    "backdrop-blur-24": "",
    animate: "fade-in-up both delay-1250ms"
  };
  fa = {
    key: 0,
    text: "neutral-800 11 center",
    w: "[calc(100%-48px)]",
    "top--1.4lh": "",
    absolute: "",
    "nq-label": ""
  };
  ba = {
    key: "connected",
    text: "white/60 center f-lg",
    "h-2lh": ""
  };
  wa = ne({
    __name: "ConsensusMap.client",
    props: {
      connectLabel: {},
      thisIsYou: {},
      connecting: {}
    },
    setup(n) {
      function e() {
        const { clientNetwork: m } = Ie().public, H = C0("nimiq-client", () => s0.Idle), q = W(), k = W(0), h = C0("$lL_Y0aj3cg"), { locate: L } = oa(), C = W([]), F = C0("$Evn1EoyCfc"), he = W();
        async function ke() {
          H.value = s0.Connecting;
          const X = new lt();
          X.network(m), X.logLevel("debug"), h.value = await J_.create(X.build());
          const a0 = h.value.addConsensusChangedListener((Y) => {
            console.log("Consensus state changed:", Y), H.value = Y === "syncing" ? s0.Connecting : s0.Established;
          }), v0 = h.value.addHeadChangedListener(async (Y) => {
            const r0 = await h.value.getBlock(Y);
            q.value = r0, k.value = r0.height;
          }), x0 = h.value.addPeerChangedListener(async (Y, r0, ze, z0) => {
            if (console.log("Peer changed:", {
              peerId: Y,
              reason: r0,
              peerCount: ze,
              peerInfo: z0
            }), r0 === "left") {
              C.value = C.value.filter((He) => He.peerId !== Y);
              return;
            }
            if (!z0) return;
            const A0 = z0.address.split("/")[2];
            if (!A0 || A0 === "0.0.0.0") return;
            const { lat: q0, lng: j0 } = await L(A0), { x: Ae, y: Ce } = te({
              lat: q0,
              lng: j0
            }), Me = {
              peerId: Y,
              x: Ae,
              y: Ce,
              lat: q0,
              lng: j0
            };
            C.value.push(Me);
          });
          he.value = () => Promise.all([
            a0,
            v0,
            x0
          ]);
        }
        async function ve(X = 1e4) {
          var _a2;
          await ((_a2 = h.value) == null ? void 0 : _a2.disconnectNetwork()), await Ve(C.value.length).toBe(0, {
            timeout: X
          });
        }
        async function xe() {
          const { lat: X, lng: a0 } = await L(), { x: v0, y: x0 } = te({
            lat: X,
            lng: a0
          });
          F.value = {
            peerId: "user",
            lat: X,
            lng: a0,
            x: v0,
            y: x0
          };
        }
        return {
          client: h,
          launchNetwork: ke,
          consensus: H,
          height: k,
          head: q,
          disconnect: ve,
          setUserPeer: xe,
          userPeer: F,
          peers: C
        };
      }
      const { launchNetwork: t, setUserPeer: i, consensus: o, peers: _, userPeer: a } = e(), l = Ue("canvas"), g = W({
        transform: "translate(0, 0)"
      });
      Re(async () => {
        await i();
        const { userHexagon: m } = sa(l, {
          peers: _,
          userPeer: a,
          centerOnUser: true
        });
        p(m);
      });
      const { pixelRatio: u } = re();
      async function p(m) {
        if (await Fe(), !a.value || !m.value) return;
        const H = m.value.left + c / 2, q = m.value.top + c / 2, k = l.value.height / (2 * h0), h = l.value.width / u.value / (2 * k), L = l.value.height / u.value / (2 * k), C = k * (H + (h - H)) - 6, F = k * (q + (L - q)) + 32;
        g.value = {
          transform: `translate(${C + 4}px, ${F - 36}px)`
        };
      }
      We(window, "resize", p);
      const w = P0(() => a.value && g.value), b = [
        "Nimiq is a browser-first blockchain",
        "Nimiq 2.0 uses Proof-of-Stake consensus",
        "You are connecting directly to the blockchain",
        "Nimiq supports atomic swaps with Bitcoin, USDC and USDT",
        "Nimiq was founded in 2018",
        "You can use NIM in over 29K locations",
        "Nimiq is a non-profit foundation",
        "You can find us on Twitter or Telegram",
        "Nimiq is a decentralized payment protocol"
      ], A = W(""), { pause: n0, resume: Q } = je(() => {
        A.value = b[Math.floor(Math.random() * b.length)];
      }, 6e3, {
        immediate: false
      });
      T0(o, () => {
        o.value === "connecting" ? Q() : n0();
      }, {
        immediate: true
      });
      async function v() {
        A.value = b[Math.floor(Math.random() * b.length)], await t();
      }
      return (m, H) => (U(), D("div", _a, [
        R("div", {
          relative: "",
          "xl:w-65vw": "",
          style: V0(`aspect-ratio: ${S(we)}`)
        }, [
          H[2] || (H[2] = R("div", {
            "size-full": "",
            absolute: "",
            "z-1": "",
            "xl:max-w-50vw": "",
            class: "curtain"
          }, null, -1)),
          R("div", aa, [
            R("canvas", {
              ref_key: "canvas",
              ref: l
            }, null, 512),
            S(w) ? (U(), D("div", {
              key: 0,
              "left-0": "",
              "top-0": "",
              absolute: "",
              "z-1": "",
              style: V0(S(g)),
              animate: "delay-500 fade-in both"
            }, [
              R("div", ca, [
                R("div", {
                  class: Ee({
                    "text-blue": S(o) === "idle",
                    "text-orange": S(o) === "connecting",
                    "text-green": S(o) === "established"
                  }),
                  "text-12": "",
                  "translate-y-3.5": "",
                  "i-nimiq:tooltip-triangle": ""
                }, null, 2),
                S(o) === "idle" ? (U(), D("div", la, [
                  R("span", ua, c0(m.thisIsYou), 1),
                  R("div", {
                    "layout-id": "connect-label",
                    as: "button",
                    "text-blue": "",
                    "font-bold": "",
                    "m-6": "",
                    "px-12": "",
                    "py-5": "",
                    "rounded-full": "",
                    "bg-white": "",
                    onClick: v
                  }, c0(m.connectLabel), 1)
                ])) : S(o) === "connecting" ? (U(), D("div", ga, H[0] || (H[0] = [
                  R("div", {
                    "layout-id": "connect-label",
                    as: "span"
                  }, " Connecting ", -1),
                  R("div", {
                    animate: "ease-out scale-in delay-2s",
                    "shrink-0": "",
                    "i-nimiq:spinner": ""
                  }, null, -1)
                ]))) : S(o) === "established" ? (U(), D("div", da, H[1] || (H[1] = [
                  R("div", {
                    "layout-id": "connect-label",
                    as: "span"
                  }, [
                    R("div", {
                      flex: "~ items-center justify-between gap-8"
                    }, [
                      R("span", null, " Connected ")
                    ])
                  ], -1)
                ]))) : i0("", true)
              ])
            ], 4)) : i0("", true)
          ]),
          S(o) !== "idle" ? (U(), D("div", pa, [
            o0(X0, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y--1lh",
              "enter-to-class": "translate-y-0",
              "leave-active-class": "transition duration-200 ease-out",
              "leave-from-class": "translate-y-0",
              "leave-to-class": "translate-y--1lh"
            }, {
              default: O0(() => [
                S(o) === "connecting" ? (U(), D("p", fa, " Did you know that ")) : i0("", true)
              ]),
              _: 1
            }),
            o0(X0, {
              mode: "out-in",
              "enter-active-class": "transition duration-200 ease-out origin-center-bottom",
              "enter-from-class": "transform translate-y-1lh op-0 blur-4 scale-95",
              "enter-to-class": "translate-y-0 op-100 blur-0 scale-100",
              "leave-active-class": "transition duration-200 ease-out origin-center-top",
              "leave-from-class": "transform translate-y-0 op-100 scale-100",
              "leave-to-class": "translate-y--1lh op-0 scale-95"
            }, {
              default: O0(() => [
                S(o) === "connecting" ? (U(), D("p", {
                  key: S(A),
                  text: "white/60 center f-lg",
                  "h-2lh": ""
                }, c0(S(A)), 1)) : (U(), D("p", ba, " Your browser is now directly connected to " + c0(S(_).length) + " peers on the network. ", 1))
              ]),
              _: 1
            })
          ])) : i0("", true)
        ], 4)
      ]));
    }
  });
  ma = Object.assign(ie(wa, [
    [
      "__scopeId",
      "data-v-1cbc8a87"
    ]
  ]), {
    __name: "AlbatrossConsensusMap"
  });
  ya = Pe(ma);
  ha = {
    key: 0,
    class: "dark",
    "px-0": "",
    "pb-0": "",
    "pt-160": "",
    "bg-darkerblue": ""
  };
  ka = {
    flex: "~ col xl:row justify-center",
    "m-0": "",
    "max-w-none": "",
    "w-full": ""
  };
  va = {
    "xl:w-50vw": ""
  };
  xa = ne({
    __name: "index",
    props: Xe(),
    setup(n) {
      return (e, t) => {
        const i = Se, o = ya, _ = Te;
        return e.slice.variation === "twoColumn" ? (U(), D("section", ha, [
          R("div", ka, [
            o0(i, {
              headline: e.slice.primary.headline,
              subline: e.slice.primary.subline,
              label: e.slice.primary.label,
              pl: "$px",
              "left-align": "",
              "xl:pb-200": "",
              "xl:pt-32": "",
              "xl:w-50vw": ""
            }, null, 8, [
              "headline",
              "subline",
              "label"
            ]),
            R("div", va, [
              o0(_, null, {
                default: O0(() => [
                  o0(o, {
                    "connect-label": e.slice.primary.connect,
                    connecting: e.slice.primary.connecting,
                    "this-is-you": e.slice.primary.thisIsYou
                  }, null, 8, [
                    "connect-label",
                    "connecting",
                    "this-is-you"
                  ])
                ]),
                _: 1
              })
            ])
          ])
        ])) : i0("", true);
      };
    }
  });
  Ia = ie(xa, [
    [
      "__scopeId",
      "data-v-e042d9b9"
    ]
  ]);
});
export {
  __tla,
  Ia as default
};
