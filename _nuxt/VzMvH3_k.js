var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e2, _f, _g, _h;
import "./BguRs3jF.js";
import { s as Re, c as Fe } from "./DesCJePW.js";
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const pe = Symbol("Comlink.proxy"), ve = Symbol("Comlink.endpoint"), Ee = Symbol("Comlink.releaseProxy"), G = Symbol("Comlink.finalizer"), $ = Symbol("Comlink.thrown"), we = (a) => typeof a == "object" && a !== null || typeof a == "function", ge = /* @__PURE__ */ new Map([["proxy", { canHandle: (a) => we(a) && a[pe], serialize(a) {
  const { port1: e, port2: t } = new MessageChannel();
  return he(a, e), [t, [t]];
}, deserialize: (a) => (a.start(), fe(a)) }], ["throw", { canHandle: (a) => we(a) && $ in a, serialize({ value: a }) {
  let e;
  return e = a instanceof Error ? { isError: true, value: { message: a.message, name: a.name, stack: a.stack } } : { isError: false, value: a }, [e, []];
}, deserialize(a) {
  throw a.isError ? Object.assign(new Error(a.value.message), a.value) : a.value;
} }]]);
function he(a, e = globalThis, t = ["*"]) {
  e.addEventListener("message", function r(n) {
    if (!n || !n.data) return;
    if (!function(f, b) {
      for (const v of f) if (b === v || v === "*" || v instanceof RegExp && v.test(b)) return true;
      return false;
    }(t, n.origin)) return void console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
    const { id: s, type: o, path: c } = Object.assign({ path: [] }, n.data), l = (n.data.argumentList || []).map(B);
    let _;
    try {
      const f = c.slice(0, -1).reduce((v, N) => v[N], a), b = c.reduce((v, N) => v[N], a);
      switch (o) {
        case "GET":
          _ = b;
          break;
        case "SET":
          f[c.slice(-1)[0]] = B(n.data.value), _ = true;
          break;
        case "APPLY":
          _ = b.apply(f, l);
          break;
        case "CONSTRUCT":
          _ = Te(new b(...l));
          break;
        case "ENDPOINT":
          {
            const { port1: v, port2: N } = new MessageChannel();
            he(a, N), _ = Ue(v, [v]);
          }
          break;
        case "RELEASE":
          _ = void 0;
          break;
        default:
          return;
      }
    } catch (f) {
      _ = { value: f, [$]: 0 };
    }
    Promise.resolve(_).catch((f) => ({ value: f, [$]: 0 })).then((f) => {
      const [b, v] = ee(f);
      e.postMessage(Object.assign(Object.assign({}, b), { id: s }), v), o === "RELEASE" && (e.removeEventListener("message", r), ke(e), G in a && typeof a[G] == "function" && a[G]());
    }).catch((f) => {
      const [b, v] = ee({ value: new TypeError("Unserializable return value"), [$]: 0 });
      e.postMessage(Object.assign(Object.assign({}, b), { id: s }), v);
    });
  }), e.start && e.start();
}
function ke(a) {
  (function(e) {
    return e.constructor.name === "MessagePort";
  })(a) && a.close();
}
function fe(a, e) {
  return ce(a, [], e);
}
function Z(a) {
  if (a) throw new Error("Proxy has been released and is not useable");
}
function Se(a) {
  return M(a, { type: "RELEASE" }).then(() => {
    ke(a);
  });
}
const J = /* @__PURE__ */ new WeakMap(), Y = "FinalizationRegistry" in globalThis && new FinalizationRegistry((a) => {
  const e = (J.get(a) || 0) - 1;
  J.set(a, e), e === 0 && Se(a);
});
function ce(a, e = [], t = function() {
}) {
  let r = false;
  const n = new Proxy(t, { get(s, o) {
    if (Z(r), o === Ee) return () => {
      (function(c) {
        Y && Y.unregister(c);
      })(n), Se(a), r = true;
    };
    if (o === "then") {
      if (e.length === 0) return { then: () => n };
      const c = M(a, { type: "GET", path: e.map((l) => l.toString()) }).then(B);
      return c.then.bind(c);
    }
    return ce(a, [...e, o]);
  }, set(s, o, c) {
    Z(r);
    const [l, _] = ee(c);
    return M(a, { type: "SET", path: [...e, o].map((f) => f.toString()), value: l }, _).then(B);
  }, apply(s, o, c) {
    Z(r);
    const l = e[e.length - 1];
    if (l === ve) return M(a, { type: "ENDPOINT" }).then(B);
    if (l === "bind") return ce(a, e.slice(0, -1));
    const [_, f] = me(c);
    return M(a, { type: "APPLY", path: e.map((b) => b.toString()), argumentList: _ }, f).then(B);
  }, construct(s, o) {
    Z(r);
    const [c, l] = me(o);
    return M(a, { type: "CONSTRUCT", path: e.map((_) => _.toString()), argumentList: c }, l).then(B);
  } });
  return function(s, o) {
    const c = (J.get(o) || 0) + 1;
    J.set(o, c), Y && Y.register(s, o, s);
  }(n, a), n;
}
function me(a) {
  const e = a.map(ee);
  return [e.map((r) => r[0]), (t = e.map((r) => r[1]), Array.prototype.concat.apply([], t))];
  var t;
}
const ze = /* @__PURE__ */ new WeakMap();
function Ue(a, e) {
  return ze.set(a, e), a;
}
function Te(a) {
  return Object.assign(a, { [pe]: true });
}
function Oe(a, e = globalThis, t = "*") {
  return { postMessage: (r, n) => a.postMessage(r, t, n), addEventListener: e.addEventListener.bind(e), removeEventListener: e.removeEventListener.bind(e) };
}
function ee(a) {
  for (const [e, t] of ge) if (t.canHandle(a)) {
    const [r, n] = t.serialize(a);
    return [{ type: "HANDLER", name: e, value: r }, n];
  }
  return [{ type: "RAW", value: a }, ze.get(a) || []];
}
function B(a) {
  switch (a.type) {
    case "HANDLER":
      return ge.get(a.name).deserialize(a.value);
    case "RAW":
      return a.value;
  }
}
function M(a, e, t) {
  return new Promise((r) => {
    const n = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    a.addEventListener("message", function s(o) {
      o.data && o.data.id && o.data.id === n && (a.removeEventListener("message", s), r(o.data));
    }), a.start && a.start(), a.postMessage(Object.assign({ id: n }, e), t);
  });
}
const Ne = Object.freeze(Object.defineProperty({ __proto__: null, createEndpoint: ve, expose: he, finalizer: G, proxy: Te, proxyMarker: pe, releaseProxy: Ee, transfer: Ue, transferHandlers: ge, windowEndpoint: Oe, wrap: fe }, Symbol.toStringTag, { value: "Module" }));
let i, d = 0, X = null;
function j() {
  return (X === null || X.byteLength === 0) && (X = new Uint8Array(i.memory.buffer)), X;
}
const Q = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Be = typeof Q.encodeInto == "function" ? function(a, e) {
  return Q.encodeInto(a, e);
} : function(a, e) {
  const t = Q.encode(a);
  return e.set(t), { read: a.length, written: t.length };
};
function K(a, e, t) {
  if (t === void 0) {
    const c = Q.encode(a), l = e(c.length, 1) >>> 0;
    return j().subarray(l, l + c.length).set(c), d = c.length, l;
  }
  let r = a.length, n = e(r, 1) >>> 0;
  const s = j();
  let o = 0;
  for (; o < r; o++) {
    const c = a.charCodeAt(o);
    if (c > 127) break;
    s[n + o] = c;
  }
  if (o !== r) {
    o !== 0 && (a = a.slice(o)), n = t(n, r, r = o + a.length * 3, 1) >>> 0;
    const c = j().subarray(n + o, n + r), l = Be(a, c);
    o += l.written, n = t(n, r, o, 1) >>> 0;
  }
  return d = o, n;
}
function y(a, e) {
  return a = a >>> 0, j().subarray(a / 1, a / 1 + e);
}
function C(a) {
  return a == null;
}
const xe = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && xe.decode();
function U(a, e) {
  return a = a >>> 0, xe.decode(j().subarray(a, a + e));
}
function S(a, e) {
  if (!(a instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
function g(a, e) {
  const t = e(a.length * 1, 1) >>> 0;
  return j().set(a, t / 1), d = a.length, t;
}
function p(a) {
  const e = i.__wbindgen_export_4.get(a);
  return i.__externref_table_dealloc(a), e;
}
const re = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_address_free(a >>> 0, 1));
class k {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(k.prototype);
    return t.__wbg_ptr = e, re.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, re.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_address_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = i.address___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.address_new(t, r);
    if (n[2]) throw p(n[1]);
    return this.__wbg_ptr = n[0] >>> 0, re.register(this, this.__wbg_ptr, this), this;
  }
  static deserialize(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.address_deserialize(t, r);
    if (n[2]) throw p(n[1]);
    return k.__wrap(n[0]);
  }
  static fromAny(e) {
    const t = i.address_fromAny(e);
    if (t[2]) throw p(t[1]);
    return k.__wrap(t[0]);
  }
  static fromString(e) {
    const t = K(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = d, n = i.address_fromString(t, r);
    if (n[2]) throw p(n[1]);
    return k.__wrap(n[0]);
  }
  static fromUserFriendlyAddress(e) {
    const t = K(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = d, n = i.address_fromUserFriendlyAddress(t, r);
    if (n[2]) throw p(n[1]);
    return k.__wrap(n[0]);
  }
  static fromPublicKeys(e, t) {
    const r = i.address_fromPublicKeys(e, t);
    if (r[2]) throw p(r[1]);
    return k.__wrap(r[0]);
  }
  toPlain() {
    let e, t;
    try {
      const r = i.address_toPlain(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  toUserFriendlyAddress() {
    let e, t;
    try {
      const r = i.address_toUserFriendlyAddress(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  toHex() {
    let e, t;
    try {
      const r = i.address_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  serialize() {
    const e = i.address_serialize(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  equals(e) {
    return S(e, k), i.address_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  compare(e) {
    return S(e, k), i.address_compare(this.__wbg_ptr, e.__wbg_ptr);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_blskeypair_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_blspublickey_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_blssecretkey_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_clientconfiguration_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_commitment_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_commitmentpair_free(a >>> 0, 1));
const De = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_cryptoutils_free(a >>> 0, 1));
class F {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, De.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_cryptoutils_free(e, 0);
  }
  static getRandomValues(e) {
    const t = i.cryptoutils_getRandomValues(e);
    var r = y(t[0], t[1]).slice();
    return i.__wbindgen_free(t[0], t[1] * 1, 1), r;
  }
  static computeHmacSha512(e, t) {
    const r = g(e, i.__wbindgen_malloc), n = d, s = g(t, i.__wbindgen_malloc), o = d, c = i.cryptoutils_computeHmacSha512(r, n, s, o);
    var l = y(c[0], c[1]).slice();
    return i.__wbindgen_free(c[0], c[1] * 1, 1), l;
  }
  static computePBKDF2sha512(e, t, r, n) {
    const s = g(e, i.__wbindgen_malloc), o = d, c = g(t, i.__wbindgen_malloc), l = d, _ = i.cryptoutils_computePBKDF2sha512(s, o, c, l, r, n);
    if (_[3]) throw p(_[2]);
    var f = y(_[0], _[1]).slice();
    return i.__wbindgen_free(_[0], _[1] * 1, 1), f;
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_es256publickey_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_es256signature_free(a >>> 0, 1));
const Le = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_hash_free(a >>> 0, 1));
class le {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Le.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_hash_free(e, 0);
  }
  static computeBlake2b(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.hash_computeBlake2b(t, r);
    var s = y(n[0], n[1]).slice();
    return i.__wbindgen_free(n[0], n[1] * 1, 1), s;
  }
  static computeSha256(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.hash_computeSha256(t, r);
    var s = y(n[0], n[1]).slice();
    return i.__wbindgen_free(n[0], n[1] * 1, 1), s;
  }
  static computeSha512(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.hash_computeSha512(t, r);
    var s = y(n[0], n[1]).slice();
    return i.__wbindgen_free(n[0], n[1] * 1, 1), s;
  }
  static computeNimiqArgon2d(e, t, r, n) {
    const s = g(e, i.__wbindgen_malloc), o = d, c = g(t, i.__wbindgen_malloc), l = d, _ = i.hash_computeNimiqArgon2d(s, o, c, l, r, n);
    if (_[3]) throw p(_[2]);
    var f = y(_[0], _[1]).slice();
    return i.__wbindgen_free(_[0], _[1] * 1, 1), f;
  }
  static computeNimiqArgon2id(e, t, r, n) {
    const s = g(e, i.__wbindgen_malloc), o = d, c = g(t, i.__wbindgen_malloc), l = d, _ = i.hash_computeNimiqArgon2id(s, o, c, l, r, n);
    if (_[3]) throw p(_[2]);
    var f = y(_[0], _[1]).slice();
    return i.__wbindgen_free(_[0], _[1] * 1, 1), f;
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_hashedtimelockedcontract_free(a >>> 0, 1));
const ne = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_keypair_free(a >>> 0, 1));
class D {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(D.prototype);
    return t.__wbg_ptr = e, ne.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ne.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_keypair_free(e, 0);
  }
  static generate() {
    const e = i.keypair_generate();
    return D.__wrap(e);
  }
  static derive(e) {
    S(e, m);
    const t = i.keypair_derive(e.__wbg_ptr);
    return D.__wrap(t);
  }
  static fromHex(e) {
    const t = K(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = d, n = i.keypair_fromHex(t, r);
    if (n[2]) throw p(n[1]);
    return D.__wrap(n[0]);
  }
  static deserialize(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.keypair_deserialize(t, r);
    if (n[2]) throw p(n[1]);
    return D.__wrap(n[0]);
  }
  constructor(e, t) {
    S(e, m), S(t, z);
    const r = i.keypair_new(e.__wbg_ptr, t.__wbg_ptr);
    return this.__wbg_ptr = r >>> 0, ne.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = i.keypair_serialize(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  sign(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.keypair_sign(this.__wbg_ptr, t, r);
    return R.__wrap(n);
  }
  signTransaction(e) {
    S(e, L);
    const t = i.keypair_signTransaction(this.__wbg_ptr, e.__wbg_ptr);
    if (t[1]) throw p(t[0]);
  }
  get privateKey() {
    const e = i.keypair_privateKey(this.__wbg_ptr);
    return m.__wrap(e);
  }
  get publicKey() {
    const e = i.keypair_publicKey(this.__wbg_ptr);
    return z.__wrap(e);
  }
  toAddress() {
    const e = i.keypair_toAddress(this.__wbg_ptr);
    return k.__wrap(e);
  }
  toHex() {
    let e, t;
    try {
      const r = i.keypair_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_merkletree_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_partialsignature_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_policy_free(a >>> 0, 1));
const ie = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_privatekey_free(a >>> 0, 1));
class m {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(m.prototype);
    return t.__wbg_ptr = e, ie.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ie.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_privatekey_free(e, 0);
  }
  static get PURPOSE_ID() {
    return i.privatekey_purpose_id() >>> 0;
  }
  static get SIZE() {
    return i.privatekey_size() >>> 0;
  }
  get serializedSize() {
    return i.privatekey_serialized_size(this.__wbg_ptr) >>> 0;
  }
  static generate() {
    const e = i.privatekey_generate();
    return m.__wrap(e);
  }
  static deserialize(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.privatekey_deserialize(t, r);
    if (n[2]) throw p(n[1]);
    return m.__wrap(n[0]);
  }
  constructor(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.privatekey_new(t, r);
    if (n[2]) throw p(n[1]);
    return this.__wbg_ptr = n[0] >>> 0, ie.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = i.privatekey_serialize(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromHex(e) {
    const t = K(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = d, n = i.privatekey_fromHex(t, r);
    if (n[2]) throw p(n[1]);
    return m.__wrap(n[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = i.privatekey_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  equals(e) {
    return S(e, m), i.privatekey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
}
const ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_publickey_free(a >>> 0, 1));
class z {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(z.prototype);
    return t.__wbg_ptr = e, ae.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ae.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_publickey_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = i.publickey___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  static get SIZE() {
    return i.privatekey_size() >>> 0;
  }
  get serializedSize() {
    return i.publickey_serialized_size(this.__wbg_ptr) >>> 0;
  }
  static derive(e) {
    S(e, m);
    const t = i.publickey_derive(e.__wbg_ptr);
    return z.__wrap(t);
  }
  static fromAny(e) {
    const t = i.publickey_fromAny(e);
    if (t[2]) throw p(t[1]);
    return z.__wrap(t[0]);
  }
  verify(e, t) {
    S(e, R);
    const r = g(t, i.__wbindgen_malloc), n = d;
    return i.publickey_verify(this.__wbg_ptr, e.__wbg_ptr, r, n) !== 0;
  }
  static deserialize(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.publickey_deserialize(t, r);
    if (n[2]) throw p(n[1]);
    return z.__wrap(n[0]);
  }
  static fromSpki(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.publickey_fromSpki(t, r);
    if (n[2]) throw p(n[1]);
    return z.__wrap(n[0]);
  }
  static fromRaw(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.publickey_fromRaw(t, r);
    if (n[2]) throw p(n[1]);
    return z.__wrap(n[0]);
  }
  constructor(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.publickey_new(t, r);
    if (n[2]) throw p(n[1]);
    return this.__wbg_ptr = n[0] >>> 0, ae.register(this, this.__wbg_ptr, this), this;
  }
  serialize() {
    const e = i.publickey_serialize(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static fromHex(e) {
    const t = K(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = d, n = i.publickey_fromHex(t, r);
    if (n[2]) throw p(n[1]);
    return z.__wrap(n[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = i.publickey_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  toAddress() {
    const e = i.publickey_toAddress(this.__wbg_ptr);
    return k.__wrap(e);
  }
  equals(e) {
    return S(e, z), i.publickey_equals(this.__wbg_ptr, e.__wbg_ptr) !== 0;
  }
  compare(e) {
    return S(e, z), i.publickey_compare(this.__wbg_ptr, e.__wbg_ptr);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_randomsecret_free(a >>> 0, 1));
const ye = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_signature_free(a >>> 0, 1));
class R {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(R.prototype);
    return t.__wbg_ptr = e, ye.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ye.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_signature_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = i.signature___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  static deserialize(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.signature_deserialize(t, r);
    if (n[2]) throw p(n[1]);
    return R.__wrap(n[0]);
  }
  serialize() {
    const e = i.signature_serialize(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static create(e, t, r) {
    S(e, m), S(t, z);
    const n = g(r, i.__wbindgen_malloc), s = d, o = i.signature_create(e.__wbg_ptr, t.__wbg_ptr, n, s);
    return R.__wrap(o);
  }
  static fromAsn1(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.signature_fromAsn1(t, r);
    if (n[2]) throw p(n[1]);
    return R.__wrap(n[0]);
  }
  static fromHex(e) {
    const t = K(e, i.__wbindgen_malloc, i.__wbindgen_realloc), r = d, n = i.signature_fromHex(t, r);
    if (n[2]) throw p(n[1]);
    return R.__wrap(n[0]);
  }
  toHex() {
    let e, t;
    try {
      const r = i.signature_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_signatureproof_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_stakingcontract_free(a >>> 0, 1));
const se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((a) => i.__wbg_transaction_free(a >>> 0, 1));
class L {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(L.prototype);
    return t.__wbg_ptr = e, se.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, se.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_transaction_free(e, 0);
  }
  __getClassname() {
    let e, t;
    try {
      const r = i.transaction___getClassname(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e, t, r, n, s, o, c, l, _, f, b) {
    S(e, k);
    var v = C(r) ? 0 : g(r, i.__wbindgen_malloc), N = d;
    S(n, k);
    var Ce = C(o) ? 0 : g(o, i.__wbindgen_malloc), Pe = d;
    const te = i.transaction_new(e.__wbg_ptr, C(t) ? 16777215 : t, v, N, n.__wbg_ptr, C(s) ? 16777215 : s, Ce, Pe, c, l, C(_) ? 16777215 : _, f, b);
    if (te[2]) throw p(te[1]);
    return this.__wbg_ptr = te[0] >>> 0, se.register(this, this.__wbg_ptr, this), this;
  }
  sign(e) {
    S(e, D);
    const t = i.transaction_sign(this.__wbg_ptr, e.__wbg_ptr);
    if (t[1]) throw p(t[0]);
  }
  hash() {
    let e, t;
    try {
      const r = i.transaction_hash(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  verify(e) {
    const t = i.transaction_verify(this.__wbg_ptr, C(e) ? 16777215 : e);
    if (t[1]) throw p(t[0]);
  }
  isValidAt(e) {
    return i.transaction_isValidAt(this.__wbg_ptr, e) !== 0;
  }
  getContractCreationAddress() {
    const e = i.transaction_getContractCreationAddress(this.__wbg_ptr);
    return k.__wrap(e);
  }
  serializeContent() {
    const e = i.transaction_serializeContent(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  serialize() {
    const e = i.transaction_serialize(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  get format() {
    return i.transaction_format(this.__wbg_ptr);
  }
  get sender() {
    const e = i.transaction_sender(this.__wbg_ptr);
    return k.__wrap(e);
  }
  get senderType() {
    return i.transaction_senderType(this.__wbg_ptr);
  }
  get recipient() {
    const e = i.transaction_recipient(this.__wbg_ptr);
    return k.__wrap(e);
  }
  get recipientType() {
    return i.transaction_recipientType(this.__wbg_ptr);
  }
  get value() {
    const e = i.transaction_value(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  get fee() {
    const e = i.transaction_fee(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  get feePerByte() {
    return i.transaction_feePerByte(this.__wbg_ptr);
  }
  get validityStartHeight() {
    return i.transaction_validityStartHeight(this.__wbg_ptr) >>> 0;
  }
  get networkId() {
    return i.transaction_networkId(this.__wbg_ptr);
  }
  get flags() {
    return i.transaction_flags(this.__wbg_ptr);
  }
  get data() {
    const e = i.transaction_data(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  set data(e) {
    const t = g(e, i.__wbindgen_malloc), r = d;
    i.transaction_set_data(this.__wbg_ptr, t, r);
  }
  get senderData() {
    const e = i.transaction_senderData(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  get proof() {
    const e = i.transaction_proof(this.__wbg_ptr);
    var t = y(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  set proof(e) {
    const t = g(e, i.__wbindgen_malloc), r = d;
    i.transaction_set_proof(this.__wbg_ptr, t, r);
  }
  get serializedSize() {
    return i.transaction_serializedSize(this.__wbg_ptr) >>> 0;
  }
  toHex() {
    let e, t;
    try {
      const r = i.transaction_toHex(this.__wbg_ptr);
      return e = r[0], t = r[1], U(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, t, 1);
    }
  }
  toPlain(e, t) {
    const r = i.transaction_toPlain(this.__wbg_ptr, C(e) ? 4294967297 : e >>> 0, !C(t), C(t) ? BigInt(0) : t);
    if (r[2]) throw p(r[1]);
    return p(r[0]);
  }
  static deserialize(e) {
    const t = g(e, i.__wbindgen_malloc), r = d, n = i.transaction_deserialize(t, r);
    if (n[2]) throw p(n[1]);
    return L.__wrap(n[0]);
  }
  static fromAny(e) {
    const t = i.transaction_fromAny(e);
    if (t[2]) throw p(t[1]);
    return L.__wrap(t[0]);
  }
  static fromPlain(e) {
    const t = i.transaction_fromPlain(e);
    if (t[2]) throw p(t[1]);
    return L.__wrap(t[0]);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_transactionbuilder_free(a >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((a) => i.__wbg_vestingcontract_free(a >>> 0, 1));
var Me = class {
  static subarray(a, e = 0, t = a.byteLength) {
    function r(s, o, c) {
      return s < o ? o : s > c ? c : s;
    }
    e = r(e, 0, a.byteLength), t = r(t, 0, a.byteLength);
    let n = t - e;
    return n < 0 && (n = 0), new Uint8Array(a.buffer, a.byteOffset + e, n);
  }
}, _e = (_a = class {
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
}, __publicField(_a, "UINT8_MAX", 255), __publicField(_a, "UINT16_MAX", 65535), __publicField(_a, "UINT32_MAX", 4294967295), __publicField(_a, "UINT64_MAX", Number.MAX_SAFE_INTEGER), _a), q = class A {
  static isWellFormed(e) {
    return typeof e.isWellFormed == "function" ? e.isWellFormed() : A._isWellFormedUnicode(e);
  }
  static isHex(e) {
    return /^[0-9A-Fa-f]*$/.test(e);
  }
  static isHexBytes(e, t) {
    return !(!A.isHex(e) || e.length % 2 !== 0 || typeof t == "number" && e.length / 2 !== t);
  }
  static _isWellFormedUnicode(e) {
    for (var t = e.length, r = 0; r < t; ) {
      var n = A._codePointAt(e, r);
      if (n["[[IsUnpairedSurrogate]]"]) return false;
      r += n["[[CodeUnitCount]]"];
    }
    return true;
  }
  static _codePointAt(e, t) {
    var r = e.length;
    if (t < 0 || t >= r) throw new Error("Assertion failed: `position` must be >= 0, and < the length of `string`");
    var n = e.charCodeAt(t), s = e.charAt(t), o = A._isLeadingSurrogate(n), c = A._isTrailingSurrogate(n);
    if (!o && !c) return { "[[CodePoint]]": s, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": false };
    if (c || t + 1 === r) return { "[[CodePoint]]": s, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": true };
    var l = e.charCodeAt(t + 1);
    return A._isTrailingSurrogate(l) ? { "[[CodePoint]]": A._utf16SurrogatePairToCodePoint(n, l), "[[CodeUnitCount]]": 2, "[[IsUnpairedSurrogate]]": false } : { "[[CodePoint]]": s, "[[CodeUnitCount]]": 1, "[[IsUnpairedSurrogate]]": true };
  }
  static _isLeadingSurrogate(e) {
    return e >= 55296 && e <= 56319;
  }
  static _isTrailingSurrogate(e) {
    return e >= 56320 && e <= 57343;
  }
  static _utf16SurrogatePairToCodePoint(e, t) {
    if (!A._isLeadingSurrogate(e) || !A._isTrailingSurrogate(t)) throw new Error("Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code");
    return String.fromCharCode(e) + String.fromCharCode(t);
  }
}, x = (_b = class extends Uint8Array {
  constructor(e) {
    super(e);
    __publicField(this, "_view");
    __publicField(this, "_readPos");
    __publicField(this, "_writePos");
    this._view = new DataView(this.buffer), this._readPos = 0, this._writePos = 0;
  }
  subarray(e, t) {
    return Me.subarray(this, e, t);
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
    if (!_e.isUint64(e)) throw new Error("Malformed value");
    return this._readPos += 8, e;
  }
  writeUint64(e) {
    if (!_e.isUint64(e)) throw new Error("Malformed value");
    this._view.setUint32(this._writePos, Math.floor(e / Math.pow(2, 32))), this._view.setUint32(this._writePos + 4, e), this._writePos += 8;
  }
  readVarUint() {
    let e = 0, t = 0, r;
    do {
      if (t > 49) throw new RangeError("Could not decode varint");
      r = this.readUint8(), e += t < 28 ? (r & de) << t : (r & de) * Math.pow(2, t), t += 7;
    } while (r >= oe);
    return e;
  }
  writeVarUint(e) {
    if (Number.MAX_SAFE_INTEGER && e > Number.MAX_SAFE_INTEGER) throw new RangeError("Could not encode varint");
    for (; e >= je; ) this.writeUint8(e & 255 | oe), e /= 128;
    for (; e & He; ) this.writeUint8(e & 255 | oe), e >>>= 7;
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
    return w.toUtf8(t);
  }
  writeString(e, t) {
    if (!q.isWellFormed(e) || e.length !== t) throw new Error("Malformed value/length");
    const r = w.fromUtf8(e);
    this.write(r);
  }
  readPaddedString(e) {
    const t = this.read(e);
    let r = 0;
    for (; r < e && t[r] !== 0; ) r++;
    const n = new Uint8Array(t.buffer, t.byteOffset, r);
    return w.toUtf8(n);
  }
  writePaddedString(e, t) {
    if (!q.isWellFormed(e) || e.length > t) throw new Error("Malformed value/length");
    const r = w.fromUtf8(e);
    this.write(r);
    const n = t - r.byteLength;
    this.write(new Uint8Array(n));
  }
  readVarLengthString() {
    const e = this.readVarUint();
    if (this._readPos + e > this.length) throw new Error("Malformed length");
    const t = this.read(e);
    return w.toUtf8(t);
  }
  writeVarLengthString(e) {
    if (!q.isWellFormed(e)) throw new Error("Malformed value");
    const t = w.fromUtf8(e);
    this.writeVarUint(t.byteLength), this.write(t);
  }
  static varLengthStringSize(e) {
    if (!q.isWellFormed(e)) throw new Error("Malformed value");
    const t = w.fromUtf8(e);
    return _b.varUintSize(t.byteLength) + t.byteLength;
  }
}, __publicField(_b, "EMPTY", new _b(0)), _b), oe = 128, de = 127, He = ~de, je = Math.pow(2, 31), w = (_c = class {
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
    let n;
    const s = [];
    for (let o = t; o < r; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), s.push(_c._tripletToBase64(n));
    return s.join("");
  }
  static _base64fromByteArray(e) {
    let t;
    const r = e.length, n = r % 3;
    let s = "";
    const o = [], c = 16383;
    for (let l = 0, _ = r - n; l < _; l += c) o.push(_c._base64encodeChunk(e, l, l + c > _ ? _ : l + c));
    return n === 1 ? (t = e[r - 1], s += _c._BASE64_LOOKUP[t >> 2], s += _c._BASE64_LOOKUP[t << 4 & 63], s += "==") : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], s += _c._BASE64_LOOKUP[t >> 10], s += _c._BASE64_LOOKUP[t >> 4 & 63], s += _c._BASE64_LOOKUP[t << 2 & 63], s += "="), o.push(s), o.join("");
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
    if (typeof Buffer < "u" ? r = Buffer.from(e, "base64") : r = new Uint8Array(atob(e).split("").map((n) => n.charCodeAt(0))), t !== void 0 && r.length !== t) throw new Error("Decoded length does not match expected length");
    return new x(r);
  }
  static toBase64Url(e) {
    return _c.toBase64(e).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
  }
  static fromBase64Url(e, t) {
    return _c.fromBase64(e.replace(/_/g, "/").replace(/-/g, "+").replace(/\./g, "="), t);
  }
  static toBase32(e, t = _c.BASE32_ALPHABET.NIMIQ) {
    let r = 3, n = 0, s, o, c, l = "";
    for (c = 0; c < e.length; c++) s = e[c], o = n | s >> r, l += t[o & 31], r > 5 && (r -= 5, o = s >> r, l += t[o & 31]), r = 5 - r, n = s << r, r = 8 - r;
    for (r !== 3 && (l += t[n & 31]); l.length % 8 !== 0 && t.length === 33; ) l += t[32];
    return l;
  }
  static fromBase32(e, t = _c.BASE32_ALPHABET.NIMIQ) {
    const r = {};
    t.toUpperCase().split("").forEach((l, _) => {
      l in r || (r[l] = _);
    });
    let n, s = 8, o = 0, c = [];
    return e.toUpperCase().split("").forEach((l) => {
      t.length === 33 && l === t[32] || (n = r[l] & 255, s -= 5, s > 0 ? o |= n << s : s < 0 ? (c.push(o | n >> -s), s += 8, o = n << s & 255) : (c.push(o | n), s = 8, o = 0));
    }), s !== 8 && o !== 0 && c.push(o), new Uint8Array(c);
  }
  static toHex(e) {
    let t = "";
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      t += _c.HEX_ALPHABET[n >>> 4], t += _c.HEX_ALPHABET[n & 15];
    }
    return t;
  }
  static fromHex(e, t) {
    if (e = e.trim(), !q.isHexBytes(e, t)) throw new Error("String is not a hex string (of matching length)");
    return new x(new Uint8Array((e.match(/.{2}/g) || []).map((r) => parseInt(r, 16))));
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
    if (e === "") return x.EMPTY;
    if (!e) throw new Error("Invalid buffer format");
    if (e instanceof Uint8Array) return new x(e);
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
    const r = _c._toUint8View(e), n = _c._toUint8View(t);
    if (r.length !== n.length) return false;
    for (let s = 0; s < r.length; s++) if (r[s] !== n[s]) return false;
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
    for (let n = 0; n < e.byteLength; ++n) r[n] = e[n] ^ t[n];
    return r;
  }
  static _toUint8View(e) {
    if (e instanceof Uint8Array) return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (e.buffer instanceof ArrayBuffer) return new Uint8Array(e.buffer);
    throw new Error("TypedArray or ArrayBuffer required");
  }
}, __publicField(_c, "BASE64_ALPHABET", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), __publicField(_c, "BASE32_ALPHABET", { RFC4648: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", RFC4648_HEX: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", NIMIQ: "0123456789ABCDEFGHJKLMNPQRSTUVXY" }), __publicField(_c, "HEX_ALPHABET", "0123456789abcdef"), __publicField(_c, "_BASE64_LOOKUP", []), __publicField(_c, "_ISO_8859_15_DECODER"), __publicField(_c, "_UTF8_DECODER"), __publicField(_c, "_UTF8_ENCODER"), _c);
for (let a = 0, e = w.BASE64_ALPHABET.length; a < e; ++a) w._BASE64_LOOKUP[a] = w.BASE64_ALPHABET[a];
var Ae = class Ie {
  equals(e) {
    return e instanceof Ie && w.equals(this.serialize(), e.serialize());
  }
  compare(e) {
    return w.compare(this.serialize(), e.serialize());
  }
  toString() {
    return this.toHex();
  }
  toBase64() {
    return w.toBase64(this.serialize());
  }
  toHex() {
    return w.toHex(this.serialize());
  }
}, Ke = (_d = class extends Ae {
  constructor(e, t) {
    super();
    __publicField(this, "_key");
    __publicField(this, "_chainCode");
    if (!(e instanceof m)) throw new Error("ExtendedPrivateKey: Invalid key");
    if (!(t instanceof Uint8Array)) throw new Error("ExtendedPrivateKey: Invalid chainCode");
    if (t.length !== _d.CHAIN_CODE_SIZE) throw new Error("ExtendedPrivateKey: Invalid chainCode length");
    this._key = e, this._chainCode = t;
  }
  static generateMasterKey(e) {
    const t = w.fromUtf8("ed25519 seed"), r = F.computeHmacSha512(t, e);
    return new _d(new m(r.slice(0, 32)), r.slice(32));
  }
  derive(e) {
    e < 2147483648 && (e += 2147483648);
    const t = new x(1 + m.SIZE + 4);
    t.writeUint8(0), t.write(this._key.serialize()), t.writeUint32(e);
    const r = F.computeHmacSha512(this._chainCode, t);
    return new _d(new m(r.slice(0, 32)), r.slice(32));
  }
  static isValidPath(e) {
    if (e.match(/^m(\/[0-9]+')*$/) === null) return false;
    const t = e.split("/");
    for (let r = 1; r < t.length; r++) if (!_e.isUint32(parseInt(t[r]))) return false;
    return true;
  }
  derivePath(e) {
    if (!_d.isValidPath(e)) throw new Error("Invalid path");
    let t = this;
    const r = e.split("/");
    for (let n = 1; n < r.length; n++) {
      const s = parseInt(r[n]);
      t = t.derive(s);
    }
    return t;
  }
  static derivePathFromSeed(e, t) {
    return _d.generateMasterKey(t).derivePath(e);
  }
  static deserialize(e) {
    const t = m.deserialize(e), r = e.read(_d.CHAIN_CODE_SIZE);
    return new _d(t, r);
  }
  static fromHex(e) {
    return _d.deserialize(w.fromHex(e));
  }
  serialize(e) {
    return e = e || new x(this.serializedSize), e.write(this._key.serialize()), e.write(this._chainCode), e;
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
    return z.derive(this._key).toAddress();
  }
}, __publicField(_d, "CHAIN_CODE_SIZE", 32), _d), qe = (_e2 = class {
  static _createTable() {
    const e = [];
    for (let t = 0; t < 256; ++t) {
      let r = t;
      for (let n = 0; n < 8; ++n) (r & 128) !== 0 ? r = (r << 1 ^ 151) % 256 : r = (r << 1) % 256;
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
}, __publicField(_e2, "_table", null), _e2), O = (_f = class {
  static entropyToMnemonic(e, t) {
    t = t || _f.DEFAULT_WORDLIST;
    const r = _f._normalizeEntropy(e), n = _f._entropyToBits(r), s = _f._sha256Checksum(r), o = n + s;
    return _f._bitsToMnemonic(o, t);
  }
  static mnemonicToEntropy(e, t) {
    Array.isArray(e) || (e = e.trim().split(/\s+/g)), t = t || _f.DEFAULT_WORDLIST;
    const r = _f._mnemonicToBits(e, t);
    return new H(_f._bitsToEntropy(r, false));
  }
  static mnemonicToSeed(e, t) {
    Array.isArray(e) && (e = e.join(" "));
    const r = w.fromUtf8(e), n = w.fromUtf8(_f._salt(t));
    return new x(F.computePBKDF2sha512(r, n, 2048, 64));
  }
  static mnemonicToExtendedPrivateKey(e, t) {
    const r = _f.mnemonicToSeed(e, t);
    return Ke.generateMasterKey(r);
  }
  static isCollidingChecksum(e) {
    const t = _f._normalizeEntropy(e);
    return _f._crcChecksum(t) === _f._sha256Checksum(t);
  }
  static getMnemonicType(e, t) {
    Array.isArray(e) || (e = e.trim().split(/\s+/g)), t = t || _f.DEFAULT_WORDLIST;
    const r = _f._mnemonicToBits(e, t);
    let n = true;
    try {
      _f._bitsToEntropy(r, false);
    } catch {
      n = false;
    }
    let s = true;
    try {
      _f._bitsToEntropy(r, true);
    } catch {
      s = false;
    }
    if (n && s) return _f.MnemonicType.UNKNOWN;
    if (!n && !s) throw new Error("Invalid checksum");
    return n ? _f.MnemonicType.BIP39 : _f.MnemonicType.LEGACY;
  }
  static _crcChecksum(e) {
    const r = e.length * 8 / 32, n = qe.compute(e);
    return _f._toBinary([n]).slice(0, r);
  }
  static _sha256Checksum(e) {
    const r = e.length * 8 / 32, n = le.computeSha256(e);
    return _f._toBinary(n).slice(0, r);
  }
  static _entropyToBits(e) {
    if (e.length < 16) throw new Error("Invalid key, length < 16");
    if (e.length > 32) throw new Error("Invalid key, length > 32");
    if (e.length % 4 !== 0) throw new Error("Invalid key, length % 4 != 0");
    return _f._toBinary(e);
  }
  static _normalizeEntropy(e) {
    let t;
    return typeof e == "string" ? t = w.fromHex(e) : e instanceof H ? t = e.serialize() : e instanceof ArrayBuffer ? t = new Uint8Array(e) : t = e, t;
  }
  static _bitsToMnemonic(e, t) {
    const r = e.match(/(.{11})/g);
    if (!r) throw new Error("Invalid bits, less than 11 characters");
    return r.map((s) => {
      const o = _f._fromBinary(s);
      return t[o];
    });
  }
  static _mnemonicToBits(e, t) {
    const r = e;
    if (r.length < 12) throw new Error("Invalid mnemonic, less than 12 words");
    if (r.length > 24) throw new Error("Invalid mnemonic, more than 24 words");
    if (r.length % 3 !== 0) throw new Error("Invalid mnemonic, words % 3 != 0");
    return r.map(function(s) {
      const o = t.indexOf(s.toLowerCase());
      if (o === -1) throw new Error(`Invalid mnemonic, word >${s}< is not in wordlist`);
      return o.toString(2).padStart(11, "0");
    }).join("");
  }
  static _bitsToEntropy(e, t = false) {
    const r = e.length - (e.length % 8 || 8), n = e.slice(0, r), s = e.slice(r), o = n.match(/(.{8})/g);
    if (!o) throw new Error("Invalid entropyBits, less than 8 characters");
    const c = o.map(_f._fromBinary);
    if (c.length < 16) throw new Error("Invalid generated key, length < 16");
    if (c.length > 32) throw new Error("Invalid generated key, length > 32");
    if (c.length % 4 !== 0) throw new Error("Invalid generated key, length % 4 != 0");
    const l = new Uint8Array(c);
    if ((t ? _f._crcChecksum(l) : _f._sha256Checksum(l)) !== s) throw new Error("Invalid checksum");
    return l;
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
      const n = e[r];
      t += n.toString(2).padStart(8, "0");
    }
    return t;
  }
}, __publicField(_f, "ENGLISH_WORDLIST"), __publicField(_f, "DEFAULT_WORDLIST"), _f);
O.ENGLISH_WORDLIST = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
O.DEFAULT_WORDLIST = O.ENGLISH_WORDLIST;
((a) => {
  ((e) => {
    e[e.UNKNOWN = -1] = "UNKNOWN", e[e.LEGACY = 0] = "LEGACY", e[e.BIP39 = 1] = "BIP39";
  })(a.MnemonicType || (a.MnemonicType = {}));
})(O || (O = {}));
Object.freeze(O);
var W = (_g = class extends Ae {
  constructor(e, t) {
    super();
    __publicField(this, "_type");
    __publicField(this, "_purposeId");
    this._type = e, this._purposeId = t;
  }
  static async fromEncrypted(e, t) {
    const r = e.readUint8(), n = e.readUint8();
    if (n > 32) throw new Error("Rounds out-of-bounds");
    const s = Math.pow(2, n);
    switch (r) {
      case 3:
        return _g._decryptV3(e, t, s);
      default:
        throw new Error("Unsupported version");
    }
  }
  static async exportEncrypted(e, t) {
    const r = F.getRandomValues(_g.ENCRYPTION_SALT_SIZE), n = new x(4 + _g.SIZE);
    if (e instanceof m) n.writeUint32(m.PURPOSE_ID);
    else if (e instanceof H) n.writeUint32(H.PURPOSE_ID);
    else throw new Error("Unsupported secret type");
    n.write(e.serialize());
    const s = le.computeBlake2b(n).subarray(0, _g.ENCRYPTION_CHECKSUM_SIZE_V3), o = new x(s.byteLength + n.byteLength);
    o.write(s), o.write(n);
    const c = await F.otpKdf(o, t, r, _g.ENCRYPTION_KDF_ROUNDS), l = new x(2 + r.byteLength + c.byteLength);
    return l.writeUint8(3), l.writeUint8(Math.log2(_g.ENCRYPTION_KDF_ROUNDS)), l.write(r), l.write(c), l;
  }
  async exportEncrypted(e) {
    return _g.exportEncrypted(this, e);
  }
  get encryptedSize() {
    return 2 + _g.ENCRYPTION_SALT_SIZE + _g.ENCRYPTION_CHECKSUM_SIZE_V3 + 4 + _g.SIZE;
  }
  static async _decryptV3(e, t, r) {
    const n = e.read(_g.ENCRYPTION_SALT_SIZE), s = e.read(_g.ENCRYPTION_CHECKSUM_SIZE_V3 + 4 + _g.SIZE), o = await F.otpKdf(s, t, n, r), c = o.subarray(0, _g.ENCRYPTION_CHECKSUM_SIZE_V3), l = o.subarray(_g.ENCRYPTION_CHECKSUM_SIZE_V3), _ = le.computeBlake2b(l).subarray(0, _g.ENCRYPTION_CHECKSUM_SIZE_V3);
    if (!w.equals(c, _)) throw new Error("Invalid key");
    const f = l[0] << 24 | l[1] << 16 | l[2] << 8 | l[3], b = l.subarray(4);
    switch (f) {
      case m.PURPOSE_ID:
        return new m(b);
      case H.PURPOSE_ID:
      default:
        return new H(b);
    }
  }
}, __publicField(_g, "SIZE", 32), __publicField(_g, "ENCRYPTION_SALT_SIZE", 16), __publicField(_g, "ENCRYPTION_KDF_ROUNDS", 256), __publicField(_g, "ENCRYPTION_CHECKSUM_SIZE", 4), __publicField(_g, "ENCRYPTION_CHECKSUM_SIZE_V3", 2), _g);
((a) => {
  ((e) => {
    e[e.PRIVATE_KEY = 1] = "PRIVATE_KEY", e[e.ENTROPY = 2] = "ENTROPY";
  })(a.Type || (a.Type = {}));
})(W || (W = {}));
var H = (_h = class extends W {
  constructor(e) {
    super(W.Type.ENTROPY, _h.PURPOSE_ID);
    __publicField(this, "_obj");
    if (!(e instanceof Uint8Array)) throw new Error("Primitive: Invalid type");
    if (e.length !== _h.SIZE) throw new Error("Primitive: Invalid length");
    this._obj = e;
  }
  static generate() {
    const e = F.getRandomValues(_h.SIZE);
    return new _h(e);
  }
  toExtendedPrivateKey(e, t) {
    return O.mnemonicToExtendedPrivateKey(this.toMnemonic(t), e);
  }
  toMnemonic(e) {
    return O.entropyToMnemonic(this, e);
  }
  static deserialize(e) {
    return new _h(e.read(_h.SIZE));
  }
  static fromHex(e) {
    return _h.deserialize(w.fromHex(e));
  }
  serialize(e) {
    return e = e || new x(this.serializedSize), e.write(this._obj), e;
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
}, __publicField(_h, "SIZE", W.SIZE), __publicField(_h, "PURPOSE_ID", 1107296258), _h);
Re(Ne, { Address: k, Transaction: L });
const be = Fe(() => new Worker(new URL("" + new URL("crypto-DiM_ROa-.js", import.meta.url).href, import.meta.url)), (a) => fe(a));
for (const a in be) {
  const e = be[a];
  typeof e == "function" && (F[a] = e);
}
export {
  k as Address,
  Me as ArrayUtils,
  w as BufferUtils,
  F as CryptoUtils,
  H as Entropy,
  Ke as ExtendedPrivateKey,
  le as Hash,
  D as KeyPair,
  O as MnemonicUtils,
  _e as NumberUtils,
  m as PrivateKey,
  z as PublicKey,
  W as Secret,
  x as SerialBuffer,
  R as Signature,
  q as StringUtils,
  L as Transaction
};
