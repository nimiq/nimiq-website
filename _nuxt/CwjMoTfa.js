var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { bB as R, i as z, b1 as l, aR as M, bC as U, z as C, bD as E } from "./C95QRNzc.js";
const F = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225], q = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998], x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", d = [];
class S {
  constructor() {
    __publicField(this, "_data", new B());
    __publicField(this, "_hash", new B([...F]));
    __publicField(this, "_nDataBytes", 0);
    __publicField(this, "_minBufferSize", 0);
  }
  finalize(e) {
    e && this._append(e);
    const s = this._nDataBytes * 8, t = this._data.sigBytes * 8;
    return this._data.words[t >>> 5] |= 128 << 24 - t % 32, this._data.words[(t + 64 >>> 9 << 4) + 14] = Math.floor(s / 4294967296), this._data.words[(t + 64 >>> 9 << 4) + 15] = s, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash;
  }
  _doProcessBlock(e, s) {
    const t = this._hash.words;
    let o = t[0], a = t[1], i = t[2], h = t[3], c = t[4], y = t[5], g = t[6], _ = t[7];
    for (let n = 0; n < 64; n++) {
      if (n < 16) d[n] = e[s + n] | 0;
      else {
        const f = d[n - 15], u = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3, p = d[n - 2], v = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10;
        d[n] = u + d[n - 7] + v + d[n - 16];
      }
      const D = c & y ^ ~c & g, A = o & a ^ o & i ^ a & i, O = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22), j = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25), m = _ + j + D + q[n] + d[n], b = O + A;
      _ = g, g = y, y = c, c = h + m | 0, h = i, i = a, a = o, o = m + b | 0;
    }
    t[0] = t[0] + o | 0, t[1] = t[1] + a | 0, t[2] = t[2] + i | 0, t[3] = t[3] + h | 0, t[4] = t[4] + c | 0, t[5] = t[5] + y | 0, t[6] = t[6] + g | 0, t[7] = t[7] + _ | 0;
  }
  _append(e) {
    typeof e == "string" && (e = B.fromUtf8(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
  }
  _process(e) {
    let s, t = this._data.sigBytes / 64;
    e ? t = Math.ceil(t) : t = Math.max((t | 0) - this._minBufferSize, 0);
    const o = t * 16, a = Math.min(o * 4, this._data.sigBytes);
    if (o) {
      for (let i = 0; i < o; i += 16) this._doProcessBlock(this._data.words, i);
      s = this._data.words.splice(0, o), this._data.sigBytes -= a;
    }
    return new B(s, a);
  }
}
class B {
  constructor(e, s) {
    __publicField(this, "words");
    __publicField(this, "sigBytes");
    e = this.words = e || [], this.sigBytes = s === void 0 ? e.length * 4 : s;
  }
  static fromUtf8(e) {
    const s = unescape(encodeURIComponent(e)), t = s.length, o = [];
    for (let a = 0; a < t; a++) o[a >>> 2] |= (s.charCodeAt(a) & 255) << 24 - a % 4 * 8;
    return new B(o, t);
  }
  toBase64() {
    const e = [];
    for (let s = 0; s < this.sigBytes; s += 3) {
      const t = this.words[s >>> 2] >>> 24 - s % 4 * 8 & 255, o = this.words[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255, a = this.words[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, i = t << 16 | o << 8 | a;
      for (let h = 0; h < 4 && s * 8 + h * 6 < this.sigBytes * 8; h++) e.push(x.charAt(i >>> 6 * (3 - h) & 63));
    }
    return e.join("");
  }
  concat(e) {
    if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let s = 0; s < e.sigBytes; s++) {
      const t = e.words[s >>> 2] >>> 24 - s % 4 * 8 & 255;
      this.words[this.sigBytes + s >>> 2] |= t << 24 - (this.sigBytes + s) % 4 * 8;
    }
    else for (let s = 0; s < e.sigBytes; s += 4) this.words[this.sigBytes + s >>> 2] = e.words[s >>> 2];
    this.sigBytes += e.sigBytes;
  }
}
function T(r) {
  return new S().finalize(r).toBase64();
}
function w(r) {
  return T(R(r));
}
function I(r, e, s) {
  const [t = {}, o] = typeof e == "string" ? [{}, e] : [e, s], a = z(() => l(r)), i = z(() => l(t.key) || "$f" + w([o, typeof a.value == "string" ? a.value : "", ...L(t)]));
  if (!t.baseURL && typeof a.value == "string" && a.value[0] === "/" && a.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const { server: h, lazy: c, default: y, transform: g, pick: _, watch: n, immediate: D, getCachedData: A, deep: O, dedupe: j, ...m } = t, b = M({ ...U, ...m, cache: typeof t.cache == "boolean" ? void 0 : t.cache }), f = { server: h, lazy: c, default: y, transform: g, pick: _, immediate: D, getCachedData: A, deep: O, dedupe: j, watch: n === false ? [] : [...n || [], b] };
  let u;
  return C(n === false ? i.value : i, () => {
    var _a;
    (_a = u == null ? void 0 : u.abort) == null ? void 0 : _a.call(u, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), u = typeof AbortController < "u" ? new AbortController() : {};
    const v = l(t.timeout);
    let k;
    return v && (k = setTimeout(() => u.abort(new DOMException("Request aborted due to timeout.", "AbortError")), v), u.signal.onabort = () => clearTimeout(k)), (t.$fetch || globalThis.$fetch)(a.value, { signal: u.signal, ...b }).finally(() => {
      clearTimeout(k);
    });
  }, f);
}
function L(r) {
  var _a;
  const e = [((_a = l(r.method)) == null ? void 0 : _a.toUpperCase()) || "GET", l(r.baseURL)];
  for (const s of [r.params || r.query]) {
    const t = l(s);
    if (!t) continue;
    const o = {};
    for (const [a, i] of Object.entries(t)) o[l(a)] = l(i);
    e.push(o);
  }
  if (r.body) {
    const s = l(r.body);
    if (!s) e.push(w(s));
    else if (s instanceof ArrayBuffer) e.push(w(Object.fromEntries([...new Uint8Array(s).entries()].map(([t, o]) => [t, o.toString()]))));
    else if (s instanceof FormData) {
      const t = {};
      for (const o of s.entries()) {
        const [a, i] = o;
        t[a] = i instanceof File ? i.name : i;
      }
      e.push(w(t));
    } else if (E(s)) e.push(w(M(s)));
    else try {
      e.push(w(s));
    } catch {
      console.warn("[useFetch] Failed to hash body", s);
    }
  }
  return e;
}
export {
  I as u
};
