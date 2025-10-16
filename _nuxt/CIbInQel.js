var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e2, _f, _g, _h;
import "./B8biU-UE.js";
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const Ee = Symbol("Comlink.proxy"), Pe = Symbol("Comlink.endpoint"), Fe = Symbol("Comlink.releaseProxy"), te = Symbol("Comlink.finalizer"), re = Symbol("Comlink.thrown"), Se = (n) => typeof n == "object" && n !== null || typeof n == "function", ke = /* @__PURE__ */ new Map([["proxy", { canHandle: (n) => Se(n) && n[Ee], serialize(n) {
  const { port1: e, port2: t } = new MessageChannel();
  return ze(n, e), [t, [t]];
}, deserialize: (n) => (n.start(), oe(n)) }], ["throw", { canHandle: (n) => Se(n) && re in n, serialize({ value: n }) {
  let e;
  return e = n instanceof Error ? { isError: true, value: { message: n.message, name: n.name, stack: n.stack } } : { isError: false, value: n }, [e, []];
}, deserialize(n) {
  throw n.isError ? Object.assign(new Error(n.value.message), n.value) : n.value;
} }]]);
function ze(n, e = globalThis, t = ["*"]) {
  e.addEventListener("message", function r(i) {
    if (!i || !i.data) return;
    if (!function(h, E) {
      for (const w of h) if (E === w || w === "*" || w instanceof RegExp && w.test(E)) return true;
      return false;
    }(t, i.origin)) return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
    const { id: o, type: a, path: c } = Object.assign({ path: [] }, i.data), _ = (i.data.argumentList || []).map(H);
    let u;
    try {
      const h = c.slice(0, -1).reduce((w, R) => w[R], n), E = c.reduce((w, R) => w[R], n);
      switch (a) {
        case "GET":
          u = E;
          break;
        case "SET":
          h[c.slice(-1)[0]] = H(i.data.value), u = true;
          break;
        case "APPLY":
          u = E.apply(h, _);
          break;
        case "CONSTRUCT":
          u = Me(new E(..._));
          break;
        case "ENDPOINT":
          {
            const { port1: w, port2: R } = new MessageChannel();
            ze(n, R), u = Be(w, [w]);
          }
          break;
        case "RELEASE":
          u = void 0;
          break;
        default:
          return;
      }
    } catch (h) {
      u = { value: h, [re]: 0 };
    }
    Promise.resolve(u).catch((h) => ({ value: h, [re]: 0 })).then((h) => {
      const [E, w] = se(h);
      e.postMessage(Object.assign(Object.assign({}, E), { id: o }), w), a === "RELEASE" && (e.removeEventListener("message", r), Oe(e), te in n && typeof n[te] == "function" && n[te]());
    }).catch((h) => {
      const [E, w] = se({ value: new TypeError("Unserializable return value"), [re]: 0 });
      e.postMessage(Object.assign(Object.assign({}, E), { id: o }), w);
    });
  }), e.start && e.start();
}
function Oe(n) {
  (function(e) {
    return e.constructor.name === "MessagePort";
  })(n) && n.close();
}
function oe(n, e) {
  return pe(n, [], e);
}
function J(n) {
  if (n) throw new Error("Proxy has been released and is not useable");
}
function Le(n) {
  return V(n, { type: "RELEASE" }).then(() => {
    Oe(n);
  });
}
const ie = /* @__PURE__ */ new WeakMap(), ee = "FinalizationRegistry" in globalThis && new FinalizationRegistry((n) => {
  const e = (ie.get(n) || 0) - 1;
  ie.set(n, e), e === 0 && Le(n);
});
function pe(n, e = [], t = function() {
}) {
  let r = false;
  const i = new Proxy(t, { get(o, a) {
    if (J(r), a === Fe) return () => {
      (function(c) {
        ee && ee.unregister(c);
      })(i), Le(n), r = true;
    };
    if (a === "then") {
      if (e.length === 0) return { then: () => i };
      const c = V(n, { type: "GET", path: e.map((_) => _.toString()) }).then(H);
      return c.then.bind(c);
    }
    return pe(n, [...e, a]);
  }, set(o, a, c) {
    J(r);
    const [_, u] = se(c);
    return V(n, { type: "SET", path: [...e, a].map((h) => h.toString()), value: _ }, u).then(H);
  }, apply(o, a, c) {
    J(r);
    const _ = e[e.length - 1];
    if (_ === Pe) return V(n, { type: "ENDPOINT" }).then(H);
    if (_ === "bind") return pe(n, e.slice(0, -1));
    const [u, h] = Ie(c);
    return V(n, { type: "APPLY", path: e.map((E) => E.toString()), argumentList: u }, h).then(H);
  }, construct(o, a) {
    J(r);
    const [c, _] = Ie(a);
    return V(n, { type: "CONSTRUCT", path: e.map((u) => u.toString()), argumentList: c }, _).then(H);
  } });
  return function(o, a) {
    const c = (ie.get(a) || 0) + 1;
    ie.set(a, c), ee && ee.register(o, a, o);
  }(i, n), i;
}
function Ie(n) {
  const e = n.map(se);
  return [e.map((r) => r[0]), (t = e.map((r) => r[1]), Array.prototype.concat.apply([], t))];
  var t;
}
const Ne = /* @__PURE__ */ new WeakMap();
function Be(n, e) {
  return Ne.set(n, e), n;
}
function Me(n) {
  return Object.assign(n, { [Ee]: true });
}
function Ke(n, e = globalThis, t = "*") {
  return { postMessage: (r, i) => n.postMessage(r, t, i), addEventListener: e.addEventListener.bind(e), removeEventListener: e.removeEventListener.bind(e) };
}
function se(n) {
  for (const [e, t] of ke) if (t.canHandle(n)) {
    const [r, i] = t.serialize(n);
    return [{ type: "HANDLER", name: e, value: r }, i];
  }
  return [{ type: "RAW", value: n }, Ne.get(n) || []];
}
function H(n) {
  switch (n.type) {
    case "HANDLER":
      return ke.get(n.name).deserialize(n.value);
    case "RAW":
      return n.value;
  }
}
function V(n, e, t) {
  return new Promise((r) => {
    const i = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    n.addEventListener("message", function o(a) {
      a.data && a.data.id && a.data.id === i && (n.removeEventListener("message", o), r(a.data));
    }), n.start && n.start(), n.postMessage(Object.assign({ id: i }, e), t);
  });
}
const Ye = Object.freeze(Object.defineProperty({ __proto__: null, createEndpoint: Pe, expose: ze, finalizer: te, proxy: Me, proxyMarker: Ee, releaseProxy: Fe, transfer: Be, transferHandlers: ke, windowEndpoint: Ke, wrap: oe }, Symbol.toStringTag, { value: "Module" }));
let s, l = 0, X = null;
function Y() {
  return (X === null || X.byteLength === 0) && (X = new Uint8Array(s.memory.buffer)), X;
}
const ne = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Ze = typeof ne.encodeInto == "function" ? function(n, e) {
  return ne.encodeInto(n, e);
} : function(n, e) {
  const t = ne.encode(n);
  return e.set(t), { read: n.length, written: t.length };
};
function U(n, e, t) {
  if (t === void 0) {
    const c = ne.encode(n), _ = e(c.length, 1) >>> 0;
    return Y().subarray(_, _ + c.length).set(c), l = c.length, _;
  }
  let r = n.length, i = e(r, 1) >>> 0;
  const o = Y();
  let a = 0;
  for (; a < r; a++) {
    const c = n.charCodeAt(a);
    if (c > 127) break;
    o[i + a] = c;
  }
  if (a !== r) {
    a !== 0 && (n = n.slice(a)), i = t(i, r, r = a + n.length * 3, 1) >>> 0;
    const c = Y().subarray(i + a, i + r), _ = Ze(n, c);
    a += _.written, i = t(i, r, a, 1) >>> 0;
  }
  return l = a, i;
}
let D = null;
function A() {
  return (D === null || D.buffer.detached === true || D.buffer.detached === void 0 && D.buffer !== s.memory.buffer) && (D = new DataView(s.memory.buffer)), D;
}
function De(n) {
  const e = s.__externref_table_alloc();
  return s.__wbindgen_export_4.set(e, n), e;
}
function Z(n, e) {
  try {
    return n.apply(this, e);
  } catch (t) {
    const r = De(t);
    s.__wbindgen_exn_store(r);
  }
}
function m(n, e) {
  return n = n >>> 0, Y().subarray(n / 1, n / 1 + e);
}
function x(n) {
  return n == null;
}
function he(n) {
  const e = typeof n;
  if (e == "number" || e == "boolean" || n == null) return `${n}`;
  if (e == "string") return `"${n}"`;
  if (e == "symbol") {
    const i = n.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (e == "function") {
    const i = n.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(n)) {
    const i = n.length;
    let o = "[";
    i > 0 && (o += he(n[0]));
    for (let a = 1; a < i; a++) o += ", " + he(n[a]);
    return o += "]", o;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let r;
  if (t && t.length > 1) r = t[1];
  else return toString.call(n);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(n) + ")";
  } catch {
    return "Object";
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : r;
}
const He = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && He.decode();
function v(n, e) {
  return n = n >>> 0, He.decode(Y().subarray(n, n + e));
}
function k(n, e) {
  if (!(n instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
function f(n, e) {
  const t = e(n.length * 1, 1) >>> 0;
  return Y().set(n, t / 1), l = n.length, t;
}
function g(n) {
  const e = s.__wbindgen_export_4.get(n);
  return s.__externref_table_dealloc(n), e;
}
function Xe(n, e) {
  const t = e(n.length * 4, 4) >>> 0;
  for (let r = 0; r < n.length; r++) {
    const i = De(n[r]);
    A().setUint32(t + 4 * r, i, true);
  }
  return l = n.length, t;
}
const ce = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_address_free(n >>> 0, 1));
class z {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(z.prototype);
    return t.__wbg_ptr = e, ce.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ce.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_address_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = s.address___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.address_new(t, r);
    if (i[2]) throw g(i[1]);
    return this.__wbg_ptr = i[0] >>> 0, ce.register(this, this.__wbg_ptr, this), this;
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.address_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return z.__wrap(i[0]);
  }
  static fromAny(e) {
    const t = s.address_fromAny(e);
    if (t[2]) throw g(t[1]);
    return z.__wrap(t[0]);
  }
  static fromString(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.address_fromString(t, r);
    if (i[2]) throw g(i[1]);
    return z.__wrap(i[0]);
  }
  static fromUserFriendlyAddress(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.address_fromUserFriendlyAddress(t, r);
    if (i[2]) throw g(i[1]);
    return z.__wrap(i[0]);
  }
  static fromPublicKeys(e, t) {
    const r = s.address_fromPublicKeys(e, t);
    if (r[2]) throw g(r[1]);
    return z.__wrap(r[0]);
  }
  toPlain() {
    let e, t;
    try {
      const r = s.address_toPlain(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  toUserFriendlyAddress() {
    let e, t;
    try {
      const r = s.address_toUserFriendlyAddress(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  toHex() {
    let e, t;
    try {
      const r = s.address_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  serialize() {
    const e = s.address_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  equals(e) {
    return k(e, z), s.address_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  compare(e) {
    return k(e, z), s.address_compare(this.__wbg_ptr, e.__wbg_ptr);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_blskeypair_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_blspublickey_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_blssecretkey_free(n >>> 0, 1));
const xe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_clientconfiguration_free(n >>> 0, 1));
class pt {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_clientconfiguration_free(e, 0);
  }
  constructor() {
    const e = s.clientconfiguration_new();
    return this.__wbg_ptr = e >>> 0, xe.register(this, this.__wbg_ptr, this), this;
  }
  network(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.clientconfiguration_network(this.__wbg_ptr, t, r);
    if (i[1]) throw g(i[0]);
  }
  seedNodes(e) {
    const t = Xe(e, s.__wbindgen_malloc), r = l;
    s.clientconfiguration_seedNodes(this.__wbg_ptr, t, r);
  }
  logLevel(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l;
    s.clientconfiguration_logLevel(this.__wbg_ptr, t, r);
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
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l;
    s.clientconfiguration_syncMode(this.__wbg_ptr, t, r);
  }
  build() {
    return s.clientconfiguration_build(this.__wbg_ptr);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_commitment_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_commitmentpair_free(n >>> 0, 1));
const $e = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_cryptoutils_free(n >>> 0, 1));
class B {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $e.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_cryptoutils_free(e, 0);
  }
  static getRandomValues(e) {
    const t = s.cryptoutils_getRandomValues(e);
    var r = m(t[0], t[1]).slice();
    return s.__wbindgen_free(t[0], t[1] * 1, 1), r;
  }
  static computeHmacSha512(e, t) {
    const r = f(e, s.__wbindgen_malloc), i = l, o = f(t, s.__wbindgen_malloc), a = l, c = s.cryptoutils_computeHmacSha512(r, i, o, a);
    var _ = m(c[0], c[1]).slice();
    return s.__wbindgen_free(c[0], c[1] * 1, 1), _;
  }
  static computePBKDF2sha512(e, t, r, i) {
    const o = f(e, s.__wbindgen_malloc), a = l, c = f(t, s.__wbindgen_malloc), _ = l, u = s.cryptoutils_computePBKDF2sha512(o, a, c, _, r, i);
    if (u[3]) throw g(u[2]);
    var h = m(u[0], u[1]).slice();
    return s.__wbindgen_free(u[0], u[1] * 1, 1), h;
  }
}
const _e = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_es256publickey_free(n >>> 0, 1));
class L {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(L.prototype);
    return t.__wbg_ptr = e, _e.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _e.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_es256publickey_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = s.es256publickey___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  verify(e, t) {
    k(e, W);
    const r = f(t, s.__wbindgen_malloc), i = l;
    return s.es256publickey_verify(this.__wbg_ptr, e.__wbg_ptr, r, i) !== 0;
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.es256publickey_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return L.__wrap(i[0]);
  }
  static fromSpki(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.es256publickey_fromSpki(t, r);
    if (i[2]) throw g(i[1]);
    return L.__wrap(i[0]);
  }
  static fromRaw(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.es256publickey_fromRaw(t, r);
    if (i[2]) throw g(i[1]);
    return L.__wrap(i[0]);
  }
  constructor(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.es256publickey_new(t, r);
    if (i[2]) throw g(i[1]);
    return this.__wbg_ptr = i[0] >>> 0, _e.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = s.es256publickey_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromHex(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.es256publickey_fromHex(t, r);
    if (i[2]) throw g(i[1]);
    return L.__wrap(i[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = s.es256publickey_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  toAddress() {
    const e = s.es256publickey_toAddress(this.__wbg_ptr);
    return z.__wrap(e);
  }
  equals(e) {
    return k(e, L), s.es256publickey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  compare(e) {
    return k(e, L), s.es256publickey_compare(this.__wbg_ptr, e.__wbg_ptr);
  }
}
const Ue = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_es256signature_free(n >>> 0, 1));
class W {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(W.prototype);
    return t.__wbg_ptr = e, Ue.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ue.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_es256signature_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = s.es256signature___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.es256signature_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return W.__wrap(i[0]);
  }
  serialize() {
    const e = s.es256signature_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromAsn1(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.es256signature_fromAsn1(t, r);
    if (i[2]) throw g(i[1]);
    return W.__wrap(i[0]);
  }
  static fromHex(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.es256signature_fromHex(t, r);
    if (i[2]) throw g(i[1]);
    return W.__wrap(i[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = s.es256signature_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
}
const Ge = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_hash_free(n >>> 0, 1));
class be {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ge.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_hash_free(e, 0);
  }
  static computeBlake2b(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.hash_computeBlake2b(t, r);
    var o = m(i[0], i[1]).slice();
    return s.__wbindgen_free(i[0], i[1] * 1, 1), o;
  }
  static computeSha256(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.hash_computeSha256(t, r);
    var o = m(i[0], i[1]).slice();
    return s.__wbindgen_free(i[0], i[1] * 1, 1), o;
  }
  static computeSha512(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.hash_computeSha512(t, r);
    var o = m(i[0], i[1]).slice();
    return s.__wbindgen_free(i[0], i[1] * 1, 1), o;
  }
  static computeNimiqArgon2d(e, t, r, i) {
    const o = f(e, s.__wbindgen_malloc), a = l, c = f(t, s.__wbindgen_malloc), _ = l, u = s.hash_computeNimiqArgon2d(o, a, c, _, r, i);
    if (u[3]) throw g(u[2]);
    var h = m(u[0], u[1]).slice();
    return s.__wbindgen_free(u[0], u[1] * 1, 1), h;
  }
  static computeNimiqArgon2id(e, t, r, i) {
    const o = f(e, s.__wbindgen_malloc), a = l, c = f(t, s.__wbindgen_malloc), _ = l, u = s.hash_computeNimiqArgon2id(o, a, c, _, r, i);
    if (u[3]) throw g(u[2]);
    var h = m(u[0], u[1]).slice();
    return s.__wbindgen_free(u[0], u[1] * 1, 1), h;
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_hashedtimelockedcontract_free(n >>> 0, 1));
const le = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_keypair_free(n >>> 0, 1));
class j {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(j.prototype);
    return t.__wbg_ptr = e, le.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, le.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_keypair_free(e, 0);
  }
  static generate() {
    const e = s.keypair_generate();
    return j.__wrap(e);
  }
  static derive(e) {
    k(e, y);
    const t = s.keypair_derive(e.__wbg_ptr);
    return j.__wrap(t);
  }
  static fromHex(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.keypair_fromHex(t, r);
    if (i[2]) throw g(i[1]);
    return j.__wrap(i[0]);
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.keypair_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return j.__wrap(i[0]);
  }
  constructor(e, t) {
    k(e, y), k(t, I);
    const r = s.keypair_new(e.__wbg_ptr, t.__wbg_ptr);
    return this.__wbg_ptr = r >>> 0, le.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = s.keypair_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  sign(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.keypair_sign(this.__wbg_ptr, t, r);
    return N.__wrap(i);
  }
  signTransaction(e) {
    k(e, q);
    const t = s.keypair_signTransaction(this.__wbg_ptr, e.__wbg_ptr);
    if (t[1]) throw g(t[0]);
  }
  get privateKey() {
    const e = s.keypair_privateKey(this.__wbg_ptr);
    return y.__wrap(e);
  }
  get publicKey() {
    const e = s.keypair_publicKey(this.__wbg_ptr);
    return I.__wrap(e);
  }
  toAddress() {
    const e = s.keypair_toAddress(this.__wbg_ptr);
    return z.__wrap(e);
  }
  toHex() {
    let e, t;
    try {
      const r = s.keypair_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_merkletree_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_partialsignature_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_policy_free(n >>> 0, 1));
const ue = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_privatekey_free(n >>> 0, 1));
class y {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(y.prototype);
    return t.__wbg_ptr = e, ue.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ue.unregister(this), e;
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
    return y.__wrap(e);
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.privatekey_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return y.__wrap(i[0]);
  }
  constructor(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.privatekey_new(t, r);
    if (i[2]) throw g(i[1]);
    return this.__wbg_ptr = i[0] >>> 0, ue.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = s.privatekey_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromHex(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.privatekey_fromHex(t, r);
    if (i[2]) throw g(i[1]);
    return y.__wrap(i[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = s.privatekey_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  equals(e) {
    return k(e, y), s.privatekey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
}
const de = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_publickey_free(n >>> 0, 1));
class I {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(I.prototype);
    return t.__wbg_ptr = e, de.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, de.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_publickey_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = s.publickey___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
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
    k(e, y);
    const t = s.publickey_derive(e.__wbg_ptr);
    return I.__wrap(t);
  }
  static fromAny(e) {
    const t = s.publickey_fromAny(e);
    if (t[2]) throw g(t[1]);
    return I.__wrap(t[0]);
  }
  verify(e, t) {
    k(e, N);
    const r = f(t, s.__wbindgen_malloc), i = l;
    return s.publickey_verify(this.__wbg_ptr, e.__wbg_ptr, r, i) !== 0;
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.publickey_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return I.__wrap(i[0]);
  }
  static fromSpki(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.publickey_fromSpki(t, r);
    if (i[2]) throw g(i[1]);
    return I.__wrap(i[0]);
  }
  static fromRaw(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.publickey_fromRaw(t, r);
    if (i[2]) throw g(i[1]);
    return I.__wrap(i[0]);
  }
  constructor(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.publickey_new(t, r);
    if (i[2]) throw g(i[1]);
    return this.__wbg_ptr = i[0] >>> 0, de.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = s.publickey_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromHex(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.publickey_fromHex(t, r);
    if (i[2]) throw g(i[1]);
    return I.__wrap(i[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = s.publickey_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  toAddress() {
    const e = s.publickey_toAddress(this.__wbg_ptr);
    return z.__wrap(e);
  }
  equals(e) {
    return k(e, I), s.publickey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  compare(e) {
    return k(e, I), s.publickey_compare(this.__wbg_ptr, e.__wbg_ptr);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_randomsecret_free(n >>> 0, 1));
const Ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_signature_free(n >>> 0, 1));
class N {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(N.prototype);
    return t.__wbg_ptr = e, Ae.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ae.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_signature_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = s.signature___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.signature_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return N.__wrap(i[0]);
  }
  serialize() {
    const e = s.signature_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static create(e, t, r) {
    k(e, y), k(t, I);
    const i = f(r, s.__wbindgen_malloc), o = l, a = s.signature_create(e.__wbg_ptr, t.__wbg_ptr, i, o);
    return N.__wrap(a);
  }
  static fromAsn1(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.signature_fromAsn1(t, r);
    if (i[2]) throw g(i[1]);
    return N.__wrap(i[0]);
  }
  static fromHex(e) {
    const t = U(e, s.__wbindgen_malloc, s.__wbindgen_realloc), r = l, i = s.signature_fromHex(t, r);
    if (i[2]) throw g(i[1]);
    return N.__wrap(i[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = s.signature_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_signatureproof_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_stakingcontract_free(n >>> 0, 1));
const ge = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => s.__wbg_transaction_free(n >>> 0, 1));
class q {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(q.prototype);
    return t.__wbg_ptr = e, ge.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ge.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    s.__wbg_transaction_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = s.transaction___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e, t, r, i, o, a, c, _, u, h, E) {
    k(e, z);
    var w = x(r) ? 0 : f(r, s.__wbindgen_malloc), R = l;
    k(i, z);
    var qe = x(a) ? 0 : f(a, s.__wbindgen_malloc), Ve = l;
    const ae = s.transaction_new(e.__wbg_ptr, x(t) ? 16777215 : t, w, R, i.__wbg_ptr, x(o) ? 16777215 : o, qe, Ve, c, _, x(u) ? 16777215 : u, h, E);
    if (ae[2]) throw g(ae[1]);
    return this.__wbg_ptr = ae[0] >>> 0, ge.register(this, this.__wbg_ptr, this), this;
  }
  sign(e) {
    k(e, j);
    const t = s.transaction_sign(this.__wbg_ptr, e.__wbg_ptr);
    if (t[1]) throw g(t[0]);
  }
  hash() {
    let e, t;
    try {
      const r = s.transaction_hash(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  verify(e) {
    const t = s.transaction_verify(this.__wbg_ptr, x(e) ? 16777215 : e);
    if (t[1]) throw g(t[0]);
  }
  isValidAt(e) {
    return s.transaction_isValidAt(this.__wbg_ptr, e) !== 0;
  }
  getContractCreationAddress() {
    const e = s.transaction_getContractCreationAddress(this.__wbg_ptr);
    return z.__wrap(e);
  }
  serializeContent() {
    const e = s.transaction_serializeContent(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  serialize() {
    const e = s.transaction_serialize(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  get format() {
    return s.transaction_format(this.__wbg_ptr);
  }
  get sender() {
    const e = s.transaction_sender(this.__wbg_ptr);
    return z.__wrap(e);
  }
  get senderType() {
    return s.transaction_senderType(this.__wbg_ptr);
  }
  get recipient() {
    const e = s.transaction_recipient(this.__wbg_ptr);
    return z.__wrap(e);
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
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  set data(e) {
    const t = f(e, s.__wbindgen_malloc), r = l;
    s.transaction_set_data(this.__wbg_ptr, t, r);
  }
  get senderData() {
    const e = s.transaction_senderData(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  get proof() {
    const e = s.transaction_proof(this.__wbg_ptr);
    var t = m(e[0], e[1]).slice();
    return s.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  set proof(e) {
    const t = f(e, s.__wbindgen_malloc), r = l;
    s.transaction_set_proof(this.__wbg_ptr, t, r);
  }
  get serializedSize() {
    return s.transaction_serializedSize(this.__wbg_ptr) >>> 0;
  }
  toHex() {
    let e, t;
    try {
      const r = s.transaction_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], v(r[0], r[1]);
    } finally {
      s.__wbindgen_free(e, t, 1);
    }
  }
  toPlain(e, t) {
    const r = s.transaction_toPlain(this.__wbg_ptr, x(e) ? 4294967297 : e >>> 0, !x(t), x(t) ? BigInt(0) : t);
    if (r[2]) throw g(r[1]);
    return g(r[0]);
  }
  static deserialize(e) {
    const t = f(e, s.__wbindgen_malloc), r = l, i = s.transaction_deserialize(t, r);
    if (i[2]) throw g(i[1]);
    return q.__wrap(i[0]);
  }
  static fromAny(e) {
    const t = s.transaction_fromAny(e);
    if (t[2]) throw g(t[1]);
    return q.__wrap(t[0]);
  }
  static fromPlain(e) {
    const t = s.transaction_fromPlain(e);
    if (t[2]) throw g(t[1]);
    return q.__wrap(t[0]);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_transactionbuilder_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => s.__wbg_vestingcontract_free(n >>> 0, 1));
async function Qe(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e);
    } catch (r) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const t = await n.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(n, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: n } : t;
  }
}
function Je() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(e, t) {
    const r = String(t), i = U(r, s.__wbindgen_malloc, s.__wbindgen_realloc), o = l;
    A().setInt32(e + 4, o, true), A().setInt32(e + 0, i, true);
  }, n.wbg.__wbg_apply_eb9e9b97497f91e4 = function() {
    return Z(function(e, t, r) {
      return Reflect.apply(e, t, r);
    }, arguments);
  }, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    return e.buffer;
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return Z(function(e, t) {
      return e.call(t);
    }, arguments);
  }, n.wbg.__wbg_done_769e5ede4b31c67b = function(e) {
    return e.done;
  }, n.wbg.__wbg_entries_3265d4158b33e5dc = function(e) {
    return Object.entries(e);
  }, n.wbg.__wbg_es256publickey_new = function(e) {
    return L.__wrap(e);
  }, n.wbg.__wbg_es256signature_new = function(e) {
    return W.__wrap(e);
  }, n.wbg.__wbg_getRandomValues_3c9c0d586e575a16 = function() {
    return Z(function(e, t) {
      globalThis.crypto.getRandomValues(m(e, t));
    }, arguments);
  }, n.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return Z(function(e, t) {
      return Reflect.get(e, t);
    }, arguments);
  }, n.wbg.__wbg_get_b9b93047fe3cf45b = function(e, t) {
    return e[t >>> 0];
  }, n.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function(e, t) {
    return e[t];
  }, n.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }, n.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function(e) {
    let t;
    try {
      t = e instanceof Map;
    } catch {
      t = false;
    }
    return t;
  }, n.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }, n.wbg.__wbg_isArray_a1eab7e0d067391b = function(e) {
    return Array.isArray(e);
  }, n.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function(e) {
    return Number.isSafeInteger(e);
  }, n.wbg.__wbg_iterator_9a24c88df860dc65 = function() {
    return Symbol.iterator;
  }, n.wbg.__wbg_length_a446193dc22c12f8 = function(e) {
    return e.length;
  }, n.wbg.__wbg_length_e2d2a49132c1b256 = function(e) {
    return e.length;
  }, n.wbg.__wbg_new_405e22f390576ce2 = function() {
    return new Object();
  }, n.wbg.__wbg_new_78feb108b6472713 = function() {
    return new Array();
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return new Uint8Array(e);
  }, n.wbg.__wbg_next_25feadfc0913fea9 = function(e) {
    return e.next;
  }, n.wbg.__wbg_next_6574e1a8a62d1055 = function() {
    return Z(function(e) {
      return e.next();
    }, arguments);
  }, n.wbg.__wbg_publickey_new = function(e) {
    return I.__wrap(e);
  }, n.wbg.__wbg_set_37837023f3d740e8 = function(e, t, r) {
    e[t >>> 0] = r;
  }, n.wbg.__wbg_set_3f1d0b984ed272ed = function(e, t, r) {
    e[t] = r;
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(e, t, r) {
    e.set(t, r >>> 0);
  }, n.wbg.__wbg_signature_new = function(e) {
    return N.__wrap(e);
  }, n.wbg.__wbg_value_cd1ffa7b1ab794f1 = function(e) {
    return e.value;
  }, n.wbg.__wbindgen_as_number = function(e) {
    return +e;
  }, n.wbg.__wbindgen_bigint_from_i64 = function(e) {
    return e;
  }, n.wbg.__wbindgen_bigint_from_u64 = function(e) {
    return BigInt.asUintN(64, e);
  }, n.wbg.__wbindgen_bigint_get_as_i64 = function(e, t) {
    const r = t, i = typeof r == "bigint" ? r : void 0;
    A().setBigInt64(e + 8, x(i) ? BigInt(0) : i, true), A().setInt32(e + 0, !x(i), true);
  }, n.wbg.__wbindgen_boolean_get = function(e) {
    const t = e;
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }, n.wbg.__wbindgen_debug_string = function(e, t) {
    const r = he(t), i = U(r, s.__wbindgen_malloc, s.__wbindgen_realloc), o = l;
    A().setInt32(e + 4, o, true), A().setInt32(e + 0, i, true);
  }, n.wbg.__wbindgen_error_new = function(e, t) {
    return new Error(v(e, t));
  }, n.wbg.__wbindgen_in = function(e, t) {
    return e in t;
  }, n.wbg.__wbindgen_init_externref_table = function() {
    const e = s.__wbindgen_export_4, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }, n.wbg.__wbindgen_is_bigint = function(e) {
    return typeof e == "bigint";
  }, n.wbg.__wbindgen_is_function = function(e) {
    return typeof e == "function";
  }, n.wbg.__wbindgen_is_object = function(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  }, n.wbg.__wbindgen_is_string = function(e) {
    return typeof e == "string";
  }, n.wbg.__wbindgen_is_undefined = function(e) {
    return e === void 0;
  }, n.wbg.__wbindgen_jsval_eq = function(e, t) {
    return e === t;
  }, n.wbg.__wbindgen_jsval_loose_eq = function(e, t) {
    return e == t;
  }, n.wbg.__wbindgen_memory = function() {
    return s.memory;
  }, n.wbg.__wbindgen_number_get = function(e, t) {
    const r = t, i = typeof r == "number" ? r : void 0;
    A().setFloat64(e + 8, x(i) ? 0 : i, true), A().setInt32(e + 0, !x(i), true);
  }, n.wbg.__wbindgen_number_new = function(e) {
    return e;
  }, n.wbg.__wbindgen_string_get = function(e, t) {
    const r = t, i = typeof r == "string" ? r : void 0;
    var o = x(i) ? 0 : U(i, s.__wbindgen_malloc, s.__wbindgen_realloc), a = l;
    A().setInt32(e + 4, a, true), A().setInt32(e + 0, o, true);
  }, n.wbg.__wbindgen_string_new = function(e, t) {
    return v(e, t);
  }, n.wbg.__wbindgen_throw = function(e, t) {
    throw new Error(v(e, t));
  }, n;
}
function et(n, e) {
  return s = n.exports, tt.__wbindgen_wasm_module = e, D = null, X = null, s.__wbindgen_start(), s;
}
async function tt(n) {
  if (s !== void 0) return s;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("" + new URL("index_bg.BTmuzfU4.wasm", import.meta.url).href, import.meta.url));
  const e = Je();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: t, module: r } = await Qe(await n, e);
  return et(t, r);
}
function rt(n, e) {
  return { async create(t) {
    const r = n();
    let i;
    const o = new Promise((u) => {
      i = u;
    }), a = (u) => {
      Ce(u) === "NIMIQ_READY" && i();
    };
    Te(r, "message", a);
    const c = setInterval(() => {
      r.postMessage("NIMIQ_CHECKREADY");
    }, 20);
    await o, nt(r, "message", a), clearInterval(c), console.debug("Client WASM worker loaded");
    const _ = e(r);
    return typeof window < "u" && (window.addEventListener("offline", () => r.postMessage("offline")), window.addEventListener("online", () => r.postMessage("online"))), typeof document < "u" && document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" && r.postMessage("visible");
    }), console.debug("Sending NIMIQ_INIT message to client worker"), r.postMessage({ type: "NIMIQ_INIT", config: t }), await new Promise((u, h) => {
      Te(r, "message", (E) => {
        const w = Ce(E);
        if (!(typeof w != "object" || !("ok" in w)) && (w.ok === true && u(), w.ok === false && "error" in w && typeof w.error == "string")) {
          const R = new Error(w.error);
          "stack" in w && typeof w.stack == "string" && (R.stack = w.stack), h(R);
        }
      });
    }), console.debug("Have client worker remote"), _;
  } };
}
function Te(n, e, t) {
  const r = "addListener" in n ? "addListener" : "addEventListener";
  n[r](e, t);
}
function nt(n, e, t) {
  const r = "removeListener" in n ? "removeListener" : "removeEventListener";
  n[r](e, t);
}
function Ce(n) {
  return typeof n == "object" && "data" in n ? n.data : n;
}
var fe;
function it(n, e) {
  const t = {};
  return ["otpKdf"].forEach((r) => {
    t[r] = async function() {
      return fe = fe || await st(n, e), fe[r](...arguments);
    };
  }), t;
}
async function st(n, e) {
  const t = n();
  return await new Promise((r) => {
    const i = (o) => {
      at(t, "message", i), ct(o) === "NIMIQ_ONLOAD" && r();
    };
    ot(t, "message", i);
  }), console.debug("Have crypto worker remote"), e(t);
}
function ot(n, e, t) {
  const r = "addListener" in n ? "addListener" : "addEventListener";
  n[r](e, t);
}
function at(n, e, t) {
  const r = "removeListener" in n ? "removeListener" : "removeEventListener";
  n[r](e, t);
}
function ct(n) {
  return typeof n == "object" && "data" in n ? n.data : n;
}
function _t(n, e) {
  n.transferHandlers.set("function", { canHandle: (r) => typeof r == "function", serialize(r) {
    return n.transferHandlers.get("proxy").serialize(r);
  } });
  function t(r) {
    return r instanceof e.Address || r instanceof e.Transaction;
  }
  n.transferHandlers.set("plain", { canHandle: (r) => t(r) || Array.isArray(r) && r.some((i) => t(i)), serialize(r) {
    return Array.isArray(r) ? [r.map((i) => t(i) ? i.serialize() : i), []] : [r.serialize(), []];
  } });
}
var lt = class {
  static subarray(n, e = 0, t = n.byteLength) {
    function r(o, a, c) {
      return o < a ? a : o > c ? c : o;
    }
    e = r(e, 0, n.byteLength), t = r(t, 0, n.byteLength);
    let i = t - e;
    return i < 0 && (i = 0), new Uint8Array(n.buffer, n.byteOffset + e, i);
  }
}, me = (_a = class {
  static isInteger(e) {
    return Number.isInteger(e);
  }
  static isUint8(e) {
    return _a.isInteger(e) && e >= 0 && e <= _a.UINT8_MAX;
  }
  static isUint16(e) {
    return _a.isInteger(e) && e >= 0 && e <= _a.UINT16_MAX;
  }
  static isUint32(e) {
    return _a.isInteger(e) && e >= 0 && e <= _a.UINT32_MAX;
  }
  static isUint64(e) {
    return _a.isInteger(e) && e >= 0 && e <= _a.UINT64_MAX;
  }
}, __publicField(_a, "UINT8_MAX", 255), __publicField(_a, "UINT16_MAX", 65535), __publicField(_a, "UINT32_MAX", 4294967295), __publicField(_a, "UINT64_MAX", Number.MAX_SAFE_INTEGER), _a), $ = class P {
  static isWellFormed(e) {
    return typeof e.isWellFormed == "function" ? e.isWellFormed() : P._isWellFormedUnicode(e);
  }
  static isHex(e) {
    return /^[0-9A-Fa-f]*$/.test(e);
  }
  static isHexBytes(e, t) {
    return !(!P.isHex(e) || e.length % 2 !== 0 || typeof t == "number" && e.length / 2 !== t);
  }
  static _isWellFormedUnicode(e) {
    for (var t = e.length, r = 0; r < t; ) {
      var i = P._codePointAt(e, r);
      if (i["[[IsUnpairedSurrogate]]"]) return false;
      r += i["[[CodeUnitCount]]"];
    }
    return true;
  }
  static _codePointAt(e, t) {
    var r = e.length;
    if (t < 0 || t >= r) throw new Error("Assertion failed: `position` must be >= 0, and < the length of `string`");
    var i = e.charCodeAt(t), o = e.charAt(t), a = P._isLeadingSurrogate(i), c = P._isTrailingSurrogate(i);
    if (!a && !c) return { "[[CodePoint]]": o, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": false };
    if (c || t + 1 === r) return { "[[CodePoint]]": o, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": true };
    var _ = e.charCodeAt(t + 1);
    return P._isTrailingSurrogate(_) ? { "[[CodePoint]]": P._utf16SurrogatePairToCodePoint(i, _), "[[CodeUnitCount]]": 2, "[[IsUnpairedSurrogate]]": false } : { "[[CodePoint]]": o, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": true };
  }
  static _isLeadingSurrogate(e) {
    return e >= 55296 && e <= 56319;
  }
  static _isTrailingSurrogate(e) {
    return e >= 56320 && e <= 57343;
  }
  static _utf16SurrogatePairToCodePoint(e, t) {
    if (!P._isLeadingSurrogate(e) || !P._isTrailingSurrogate(t)) throw new Error("Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code");
    return String.fromCharCode(e) + String.fromCharCode(t);
  }
}, C = (_b = class extends Uint8Array {
  constructor(e) {
    super(e);
    __publicField(this, "_view");
    __publicField(this, "_readPos");
    __publicField(this, "_writePos");
    this._view = new DataView(this.buffer), this._readPos = 0, this._writePos = 0;
  }
  subarray(e, t) {
    return lt.subarray(this, e, t);
  }
  get readPos() {
    return this._readPos;
  }
  set readPos(e) {
    if (e < 0 || e > this.byteLength) throw `Invalid readPos ${e}`;
    this._readPos = e;
  }
  get writePos() {
    return this._writePos;
  }
  set writePos(e) {
    if (e < 0 || e > this.byteLength) throw `Invalid writePos ${e}`;
    this._writePos = e;
  }
  reset() {
    this._readPos = 0, this._writePos = 0;
  }
  read(e) {
    const t = this.subarray(this._readPos, this._readPos + e);
    return this._readPos += e, new Uint8Array(t);
  }
  write(e) {
    this.set(e, this._writePos), this._writePos += e.byteLength;
  }
  readUint8() {
    return this._view.getUint8(this._readPos++);
  }
  writeUint8(e) {
    this._view.setUint8(this._writePos++, e);
  }
  readUint16() {
    const e = this._view.getUint16(this._readPos);
    return this._readPos += 2, e;
  }
  writeUint16(e) {
    this._view.setUint16(this._writePos, e), this._writePos += 2;
  }
  readUint32() {
    const e = this._view.getUint32(this._readPos);
    return this._readPos += 4, e;
  }
  writeUint32(e) {
    this._view.setUint32(this._writePos, e), this._writePos += 4;
  }
  readUint64() {
    const e = this._view.getUint32(this._readPos) * Math.pow(2, 32) + this._view.getUint32(this._readPos + 4);
    if (!me.isUint64(e)) throw new Error("Malformed value");
    return this._readPos += 8, e;
  }
  writeUint64(e) {
    if (!me.isUint64(e)) throw new Error("Malformed value");
    this._view.setUint32(this._writePos, Math.floor(e / Math.pow(2, 32))), this._view.setUint32(this._writePos + 4, e), this._writePos += 8;
  }
  readVarUint() {
    let e = 0, t = 0, r;
    do {
      if (t > 49) throw new RangeError("Could not decode varint");
      r = this.readUint8(), e += t < 28 ? (r & ve) << t : (r & ve) * Math.pow(2, t), t += 7;
    } while (r >= we);
    return e;
  }
  writeVarUint(e) {
    if (Number.MAX_SAFE_INTEGER && e > Number.MAX_SAFE_INTEGER) throw new RangeError("Could not encode varint");
    for (; e >= dt; ) this.writeUint8(e & 255 | we), e /= 128;
    for (; e & ut; ) this.writeUint8(e & 255 | we), e >>>= 7;
    this.writeUint8(e | 0);
  }
  static varUintSize(e) {
    return e < Math.pow(2, 7) ? 1 : e < Math.pow(2, 14) ? 2 : e < Math.pow(2, 21) ? 3 : e < Math.pow(2, 28) ? 4 : e < Math.pow(2, 35) ? 5 : e < Math.pow(2, 42) ? 6 : e < Math.pow(2, 49) ? 7 : e < Math.pow(2, 56) ? 8 : e < Math.pow(2, 93) ? 9 : 10;
  }
  readFloat64() {
    const e = this._view.getFloat64(this._readPos);
    return this._readPos += 8, e;
  }
  writeFloat64(e) {
    this._view.setFloat64(this._writePos, e), this._writePos += 8;
  }
  readString(e) {
    const t = this.read(e);
    return b.toUtf8(t);
  }
  writeString(e, t) {
    if (!$.isWellFormed(e) || e.length !== t) throw new Error("Malformed value/length");
    const r = b.fromUtf8(e);
    this.write(r);
  }
  readPaddedString(e) {
    const t = this.read(e);
    let r = 0;
    for (; r < e && t[r] !== 0; ) r++;
    const i = new Uint8Array(t.buffer, t.byteOffset, r);
    return b.toUtf8(i);
  }
  writePaddedString(e, t) {
    if (!$.isWellFormed(e) || e.length > t) throw new Error("Malformed value/length");
    const r = b.fromUtf8(e);
    this.write(r);
    const i = t - r.byteLength;
    this.write(new Uint8Array(i));
  }
  readVarLengthString() {
    const e = this.readVarUint();
    if (this._readPos + e > this.length) throw new Error("Malformed length");
    const t = this.read(e);
    return b.toUtf8(t);
  }
  writeVarLengthString(e) {
    if (!$.isWellFormed(e)) throw new Error("Malformed value");
    const t = b.fromUtf8(e);
    this.writeVarUint(t.byteLength), this.write(t);
  }
  static varLengthStringSize(e) {
    if (!$.isWellFormed(e)) throw new Error("Malformed value");
    const t = b.fromUtf8(e);
    return _b.varUintSize(t.byteLength) + t.byteLength;
  }
}, __publicField(_b, "EMPTY", new _b(0)), _b), we = 128, ve = 127, ut = ~ve, dt = Math.pow(2, 31), b = (_c = class {
  static _codePointTextDecoder(e) {
    if (typeof TextDecoder > "u") throw new Error("TextDecoder not supported");
    if (_c._ISO_8859_15_DECODER === null) throw new Error("TextDecoder does not support iso-8859-15");
    if (_c._ISO_8859_15_DECODER === void 0) try {
      _c._ISO_8859_15_DECODER = new TextDecoder("iso-8859-15");
    } catch {
      throw _c._ISO_8859_15_DECODER = null, new Error("TextDecoder does not support iso-8859-15");
    }
    const t = _c._toUint8View(e);
    return _c._ISO_8859_15_DECODER.decode(t).replace(/\u20ac/g, "\xA4").replace(/\u0160/g, "\xA6").replace(/\u0161/g, "\xA8").replace(/\u017d/g, "\xB4").replace(/\u017e/g, "\xB8").replace(/\u0152/g, "\xBC").replace(/\u0153/g, "\xBD").replace(/\u0178/g, "\xBE");
  }
  static _tripletToBase64(e) {
    return _c._BASE64_LOOKUP[e >> 18 & 63] + _c._BASE64_LOOKUP[e >> 12 & 63] + _c._BASE64_LOOKUP[e >> 6 & 63] + _c._BASE64_LOOKUP[e & 63];
  }
  static _base64encodeChunk(e, t, r) {
    let i;
    const o = [];
    for (let a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), o.push(_c._tripletToBase64(i));
    return o.join("");
  }
  static _base64fromByteArray(e) {
    let t;
    const r = e.length, i = r % 3;
    let o = "";
    const a = [], c = 16383;
    for (let _ = 0, u = r - i; _ < u; _ += c) a.push(_c._base64encodeChunk(e, _, _ + c > u ? u : _ + c));
    return i === 1 ? (t = e[r - 1], o += _c._BASE64_LOOKUP[t >> 2], o += _c._BASE64_LOOKUP[t << 4 & 63], o += "==") : i === 2 && (t = (e[r - 2] << 8) + e[r - 1], o += _c._BASE64_LOOKUP[t >> 10], o += _c._BASE64_LOOKUP[t >> 4 & 63], o += _c._BASE64_LOOKUP[t << 2 & 63], o += "="), a.push(o), a.join("");
  }
  static toBase64(e) {
    if (typeof Buffer < "u") return Buffer.from(e).toString("base64");
    if (typeof TextDecoder < "u" && _c._ISO_8859_15_DECODER !== null) try {
      return btoa(_c._codePointTextDecoder(e));
    } catch {
    }
    return _c._base64fromByteArray(_c._toUint8View(e));
  }
  static fromBase64(e, t) {
    let r;
    if (typeof Buffer < "u" ? r = Buffer.from(e, "base64") : r = new Uint8Array(atob(e).split("").map((i) => i.charCodeAt(0))), t !== void 0 && r.length !== t) throw new Error("Decoded length does not match expected length");
    return new C(r);
  }
  static toBase64Url(e) {
    return _c.toBase64(e).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
  }
  static fromBase64Url(e, t) {
    return _c.fromBase64(e.replace(/_/g, "/").replace(/-/g, "+").replace(/\./g, "="), t);
  }
  static toBase32(e, t = _c.BASE32_ALPHABET.NIMIQ) {
    let r = 3, i = 0, o, a, c, _ = "";
    for (c = 0; c < e.length; c++) o = e[c], a = i | o >> r, _ += t[a & 31], r > 5 && (r -= 5, a = o >> r, _ += t[a & 31]), r = 5 - r, i = o << r, r = 8 - r;
    for (r !== 3 && (_ += t[i & 31]); _.length % 8 !== 0 && t.length === 33; ) _ += t[32];
    return _;
  }
  static fromBase32(e, t = _c.BASE32_ALPHABET.NIMIQ) {
    const r = {};
    t.toUpperCase().split("").forEach((_, u) => {
      _ in r || (r[_] = u);
    });
    let i, o = 8, a = 0, c = [];
    return e.toUpperCase().split("").forEach((_) => {
      t.length === 33 && _ === t[32] || (i = r[_] & 255, o -= 5, o > 0 ? a |= i << o : o < 0 ? (c.push(a | i >> -o), o += 8, a = i << o & 255) : (c.push(a | i), o = 8, a = 0));
    }), o !== 8 && a !== 0 && c.push(a), new Uint8Array(c);
  }
  static toHex(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      t += _c.HEX_ALPHABET[i >>> 4], t += _c.HEX_ALPHABET[i & 15];
    }
    return t;
  }
  static fromHex(e, t) {
    if (e = e.trim(), !$.isHexBytes(e, t)) throw new Error("String is not a hex string (of matching length)");
    return new C(new Uint8Array((e.match(/.{2}/g) || []).map((r) => parseInt(r, 16))));
  }
  static _utf8TextEncoder(e) {
    if (typeof TextEncoder > "u") throw new Error("TextEncoder not supported");
    if (_c._UTF8_ENCODER === null) throw new Error("TextEncoder does not support utf8");
    if (_c._UTF8_ENCODER === void 0) try {
      _c._UTF8_ENCODER = new TextEncoder();
    } catch {
      throw _c._UTF8_ENCODER = null, new Error("TextEncoder does not support utf8");
    }
    return _c._UTF8_ENCODER.encode(e);
  }
  static fromUtf8(e) {
    return _c._utf8TextEncoder(e);
  }
  static _utf8TextDecoder(e, t) {
    if (typeof TextDecoder > "u") throw new Error("TextDecoder not supported");
    if (_c._UTF8_DECODER === null) throw new Error("TextDecoder does not support utf8");
    if (_c._UTF8_DECODER === void 0) try {
      _c._UTF8_DECODER = new TextDecoder("utf-8", t);
    } catch {
      throw _c._UTF8_DECODER = null, new Error("TextDecoder does not support utf8");
    }
    return _c._UTF8_DECODER.decode(e);
  }
  static toUtf8(e) {
    return _c._utf8TextDecoder(e);
  }
  static fromAny(e, t) {
    if (e === "") return C.EMPTY;
    if (!e) throw new Error("Invalid buffer format");
    if (e instanceof Uint8Array) return new C(e);
    try {
      return _c.fromHex(e, t);
    } catch {
    }
    try {
      return _c.fromBase64(e, t);
    } catch {
    }
    throw new Error("Invalid buffer format");
  }
  static equals(e, t) {
    const r = _c._toUint8View(e), i = _c._toUint8View(t);
    if (r.length !== i.length) return false;
    for (let o = 0; o < r.length; o++) if (r[o] !== i[o]) return false;
    return true;
  }
  static compare(e, t) {
    if (e.length < t.length) return -1;
    if (e.length > t.length) return 1;
    for (let r = 0; r < e.length; r++) {
      if (e[r] < t[r]) return -1;
      if (e[r] > t[r]) return 1;
    }
    return 0;
  }
  static xor(e, t) {
    const r = new Uint8Array(e.byteLength);
    for (let i = 0; i < e.byteLength; ++i) r[i] = e[i] ^ t[i];
    return r;
  }
  static _toUint8View(e) {
    if (e instanceof Uint8Array) return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (e.buffer instanceof ArrayBuffer) return new Uint8Array(e.buffer);
    throw new Error("TypedArray or ArrayBuffer required");
  }
}, __publicField(_c, "BASE64_ALPHABET", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), __publicField(_c, "BASE32_ALPHABET", { RFC4648: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", RFC4648_HEX: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", NIMIQ: "0123456789ABCDEFGHJKLMNPQRSTUVXY" }), __publicField(_c, "HEX_ALPHABET", "0123456789abcdef"), __publicField(_c, "_BASE64_LOOKUP", []), __publicField(_c, "_ISO_8859_15_DECODER"), __publicField(_c, "_UTF8_DECODER"), __publicField(_c, "_UTF8_ENCODER"), _c);
for (let n = 0, e = b.BASE64_ALPHABET.length; n < e; ++n) b._BASE64_LOOKUP[n] = b.BASE64_ALPHABET[n];
var je = class We {
  equals(e) {
    return e instanceof We && b.equals(this.serialize(), e.serialize());
  }
  compare(e) {
    return b.compare(this.serialize(), e.serialize());
  }
  toString() {
    return this.toHex();
  }
  toBase64() {
    return b.toBase64(this.serialize());
  }
  toHex() {
    return b.toHex(this.serialize());
  }
}, gt = (_d = class extends je {
  constructor(e, t) {
    super();
    __publicField(this, "_key");
    __publicField(this, "_chainCode");
    if (!(e instanceof y)) throw new Error("ExtendedPrivateKey: Invalid key");
    if (!(t instanceof Uint8Array)) throw new Error("ExtendedPrivateKey: Invalid chainCode");
    if (t.length !== _d.CHAIN_CODE_SIZE) throw new Error("ExtendedPrivateKey: Invalid chainCode length");
    this._key = e, this._chainCode = t;
  }
  static generateMasterKey(e) {
    const t = b.fromUtf8("ed25519 seed"), r = B.computeHmacSha512(t, e);
    return new _d(new y(r.slice(0, 32)), r.slice(32));
  }
  derive(e) {
    e < 2147483648 && (e += 2147483648);
    const t = new C(1 + y.SIZE + 4);
    t.writeUint8(0), t.write(this._key.serialize()), t.writeUint32(e);
    const r = B.computeHmacSha512(this._chainCode, t);
    return new _d(new y(r.slice(0, 32)), r.slice(32));
  }
  static isValidPath(e) {
    if (e.match(/^m(\/[0-9]+')*$/) === null) return false;
    const t = e.split("/");
    for (let r = 1; r < t.length; r++) if (!me.isUint32(parseInt(t[r]))) return false;
    return true;
  }
  derivePath(e) {
    if (!_d.isValidPath(e)) throw new Error("Invalid path");
    let t = this;
    const r = e.split("/");
    for (let i = 1; i < r.length; i++) {
      const o = parseInt(r[i]);
      t = t.derive(o);
    }
    return t;
  }
  static derivePathFromSeed(e, t) {
    return _d.generateMasterKey(t).derivePath(e);
  }
  static deserialize(e) {
    const t = y.deserialize(e), r = e.read(_d.CHAIN_CODE_SIZE);
    return new _d(t, r);
  }
  static fromHex(e) {
    return _d.deserialize(b.fromHex(e));
  }
  serialize(e) {
    return e = e || new C(this.serializedSize), e.write(this._key.serialize()), e.write(this._chainCode), e;
  }
  get serializedSize() {
    return this._key.serializedSize + _d.CHAIN_CODE_SIZE;
  }
  equals(e) {
    return e instanceof _d && super.equals(e);
  }
  get privateKey() {
    return this._key;
  }
  get chainCode() {
    return this._chainCode;
  }
  toAddress() {
    return I.derive(this._key).toAddress();
  }
}, __publicField(_d, "CHAIN_CODE_SIZE", 32), _d), ft = (_e2 = class {
  static _createTable() {
    const e = [];
    for (let t = 0; t < 256; ++t) {
      let r = t;
      for (let i = 0; i < 8; ++i) (r & 128) !== 0 ? r = (r << 1 ^ 151) % 256 : r = (r << 1) % 256;
      e[t] = r;
    }
    return e;
  }
  static compute(e) {
    _e2._table || (_e2._table = _e2._createTable());
    let t = 0;
    for (let r = 0; r < e.length; r++) t = _e2._table[(t ^ e[r]) % 256];
    return t;
  }
}, __publicField(_e2, "_table", null), _e2), M = (_f = class {
  static entropyToMnemonic(e, t) {
    t = t || _f.DEFAULT_WORDLIST;
    const r = _f._normalizeEntropy(e), i = _f._entropyToBits(r), o = _f._sha256Checksum(r), a = i + o;
    return _f._bitsToMnemonic(a, t);
  }
  static mnemonicToEntropy(e, t) {
    Array.isArray(e) || (e = e.trim().split(/\s+/g)), t = t || _f.DEFAULT_WORDLIST;
    const r = _f._mnemonicToBits(e, t);
    return new K(_f._bitsToEntropy(r, false));
  }
  static mnemonicToSeed(e, t) {
    Array.isArray(e) && (e = e.join(" "));
    const r = b.fromUtf8(e), i = b.fromUtf8(_f._salt(t));
    return new C(B.computePBKDF2sha512(r, i, 2048, 64));
  }
  static mnemonicToExtendedPrivateKey(e, t) {
    const r = _f.mnemonicToSeed(e, t);
    return gt.generateMasterKey(r);
  }
  static isCollidingChecksum(e) {
    const t = _f._normalizeEntropy(e);
    return _f._crcChecksum(t) === _f._sha256Checksum(t);
  }
  static getMnemonicType(e, t) {
    Array.isArray(e) || (e = e.trim().split(/\s+/g)), t = t || _f.DEFAULT_WORDLIST;
    const r = _f._mnemonicToBits(e, t);
    let i = true;
    try {
      _f._bitsToEntropy(r, false);
    } catch {
      i = false;
    }
    let o = true;
    try {
      _f._bitsToEntropy(r, true);
    } catch {
      o = false;
    }
    if (i && o) return _f.MnemonicType.UNKNOWN;
    if (!i && !o) throw new Error("Invalid checksum");
    return i ? _f.MnemonicType.BIP39 : _f.MnemonicType.LEGACY;
  }
  static _crcChecksum(e) {
    const r = e.length * 8 / 32, i = ft.compute(e);
    return _f._toBinary([i]).slice(0, r);
  }
  static _sha256Checksum(e) {
    const r = e.length * 8 / 32, i = be.computeSha256(e);
    return _f._toBinary(i).slice(0, r);
  }
  static _entropyToBits(e) {
    if (e.length < 16) throw new Error("Invalid key, length < 16");
    if (e.length > 32) throw new Error("Invalid key, length > 32");
    if (e.length % 4 !== 0) throw new Error("Invalid key, length % 4 != 0");
    return _f._toBinary(e);
  }
  static _normalizeEntropy(e) {
    let t;
    return typeof e == "string" ? t = b.fromHex(e) : e instanceof K ? t = e.serialize() : e instanceof ArrayBuffer ? t = new Uint8Array(e) : t = e, t;
  }
  static _bitsToMnemonic(e, t) {
    const r = e.match(/(.{11})/g);
    if (!r) throw new Error("Invalid bits, less than 11 characters");
    return r.map((o) => {
      const a = _f._fromBinary(o);
      return t[a];
    });
  }
  static _mnemonicToBits(e, t) {
    const r = e;
    if (r.length < 12) throw new Error("Invalid mnemonic, less than 12 words");
    if (r.length > 24) throw new Error("Invalid mnemonic, more than 24 words");
    if (r.length % 3 !== 0) throw new Error("Invalid mnemonic, words % 3 != 0");
    return r.map(function(o) {
      const a = t.indexOf(o.toLowerCase());
      if (a === -1) throw new Error(`Invalid mnemonic, word >${o}< is not in wordlist`);
      return a.toString(2).padStart(11, "0");
    }).join("");
  }
  static _bitsToEntropy(e, t = false) {
    const r = e.length - (e.length % 8 || 8), i = e.slice(0, r), o = e.slice(r), a = i.match(/(.{8})/g);
    if (!a) throw new Error("Invalid entropyBits, less than 8 characters");
    const c = a.map(_f._fromBinary);
    if (c.length < 16) throw new Error("Invalid generated key, length < 16");
    if (c.length > 32) throw new Error("Invalid generated key, length > 32");
    if (c.length % 4 !== 0) throw new Error("Invalid generated key, length % 4 != 0");
    const _ = new Uint8Array(c);
    if ((t ? _f._crcChecksum(_) : _f._sha256Checksum(_)) !== o) throw new Error("Invalid checksum");
    return _;
  }
  static _salt(e) {
    return `mnemonic${e || ""}`;
  }
  static _fromBinary(e) {
    return parseInt(e, 2);
  }
  static _toBinary(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      t += i.toString(2).padStart(8, "0");
    }
    return t;
  }
}, __publicField(_f, "ENGLISH_WORDLIST"), __publicField(_f, "DEFAULT_WORDLIST"), _f);
M.ENGLISH_WORDLIST = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
M.DEFAULT_WORDLIST = M.ENGLISH_WORDLIST;
((n) => {
  ((e) => {
    e[e.UNKNOWN = -1] = "UNKNOWN", e[e.LEGACY = 0] = "LEGACY", e[e.BIP39 = 1] = "BIP39";
  })(n.MnemonicType || (n.MnemonicType = {}));
})(M || (M = {}));
Object.freeze(M);
var Q = (_g = class extends je {
  constructor(e, t) {
    super();
    __publicField(this, "_type");
    __publicField(this, "_purposeId");
    this._type = e, this._purposeId = t;
  }
  static async fromEncrypted(e, t) {
    const r = e.readUint8(), i = e.readUint8();
    if (i > 32) throw new Error("Rounds out-of-bounds");
    const o = Math.pow(2, i);
    switch (r) {
      case 3:
        return _g._decryptV3(e, t, o);
      default:
        throw new Error("Unsupported version");
    }
  }
  static async exportEncrypted(e, t) {
    const r = B.getRandomValues(_g.ENCRYPTION_SALT_SIZE), i = new C(4 + _g.SIZE);
    if (e instanceof y) i.writeUint32(y.PURPOSE_ID);
    else if (e instanceof K) i.writeUint32(K.PURPOSE_ID);
    else throw new Error("Unsupported secret type");
    i.write(e.serialize());
    const o = be.computeBlake2b(i).subarray(0, _g.ENCRYPTION_CHECKSUM_SIZE_V3), a = new C(o.byteLength + i.byteLength);
    a.write(o), a.write(i);
    const c = await B.otpKdf(a, t, r, _g.ENCRYPTION_KDF_ROUNDS), _ = new C(2 + r.byteLength + c.byteLength);
    return _.writeUint8(3), _.writeUint8(Math.log2(_g.ENCRYPTION_KDF_ROUNDS)), _.write(r), _.write(c), _;
  }
  async exportEncrypted(e) {
    return _g.exportEncrypted(this, e);
  }
  get encryptedSize() {
    return 2 + _g.ENCRYPTION_SALT_SIZE + _g.ENCRYPTION_CHECKSUM_SIZE_V3 + 4 + _g.SIZE;
  }
  static async _decryptV3(e, t, r) {
    const i = e.read(_g.ENCRYPTION_SALT_SIZE), o = e.read(_g.ENCRYPTION_CHECKSUM_SIZE_V3 + 4 + _g.SIZE), a = await B.otpKdf(o, t, i, r), c = a.subarray(0, _g.ENCRYPTION_CHECKSUM_SIZE_V3), _ = a.subarray(_g.ENCRYPTION_CHECKSUM_SIZE_V3), u = be.computeBlake2b(_).subarray(0, _g.ENCRYPTION_CHECKSUM_SIZE_V3);
    if (!b.equals(c, u)) throw new Error("Invalid key");
    const h = _[0] << 24 | _[1] << 16 | _[2] << 8 | _[3], E = _.subarray(4);
    switch (h) {
      case y.PURPOSE_ID:
        return new y(E);
      case K.PURPOSE_ID:
      default:
        return new K(E);
    }
  }
}, __publicField(_g, "SIZE", 32), __publicField(_g, "ENCRYPTION_SALT_SIZE", 16), __publicField(_g, "ENCRYPTION_KDF_ROUNDS", 256), __publicField(_g, "ENCRYPTION_CHECKSUM_SIZE", 4), __publicField(_g, "ENCRYPTION_CHECKSUM_SIZE_V3", 2), _g);
((n) => {
  ((e) => {
    e[e.PRIVATE_KEY = 1] = "PRIVATE_KEY", e[e.ENTROPY = 2] = "ENTROPY";
  })(n.Type || (n.Type = {}));
})(Q || (Q = {}));
var K = (_h = class extends Q {
  constructor(e) {
    super(Q.Type.ENTROPY, _h.PURPOSE_ID);
    __publicField(this, "_obj");
    if (!(e instanceof Uint8Array)) throw new Error("Primitive: Invalid type");
    if (e.length !== _h.SIZE) throw new Error("Primitive: Invalid length");
    this._obj = e;
  }
  static generate() {
    const e = B.getRandomValues(_h.SIZE);
    return new _h(e);
  }
  toExtendedPrivateKey(e, t) {
    return M.mnemonicToExtendedPrivateKey(this.toMnemonic(t), e);
  }
  toMnemonic(e) {
    return M.entropyToMnemonic(this, e);
  }
  static deserialize(e) {
    return new _h(e.read(_h.SIZE));
  }
  static fromHex(e) {
    return _h.deserialize(b.fromHex(e));
  }
  serialize(e) {
    return e = e || new C(this.serializedSize), e.write(this._obj), e;
  }
  get serializedSize() {
    return _h.SIZE;
  }
  overwrite(e) {
    this._obj.set(e._obj);
  }
  equals(e) {
    return e instanceof _h && super.equals(e);
  }
}, __publicField(_h, "SIZE", Q.SIZE), __publicField(_h, "PURPOSE_ID", 1107296258), _h);
_t(Ye, { Address: z, Transaction: q });
const ht = rt(() => new Worker(new URL("" + new URL("worker-BQ59pWg6.js", import.meta.url).href, import.meta.url)), (n) => oe(n)), Re = it(() => new Worker(new URL("" + new URL("crypto-DiM_ROa-.js", import.meta.url).href, import.meta.url)), (n) => oe(n));
for (const n in Re) {
  const e = Re[n];
  typeof e == "function" && (B[n] = e);
}
export {
  z as Address,
  lt as ArrayUtils,
  b as BufferUtils,
  ht as Client,
  pt as ClientConfiguration,
  B as CryptoUtils,
  L as ES256PublicKey,
  W as ES256Signature,
  K as Entropy,
  gt as ExtendedPrivateKey,
  be as Hash,
  j as KeyPair,
  M as MnemonicUtils,
  me as NumberUtils,
  y as PrivateKey,
  I as PublicKey,
  Q as Secret,
  C as SerialBuffer,
  N as Signature,
  $ as StringUtils,
  q as Transaction,
  tt as default
};
