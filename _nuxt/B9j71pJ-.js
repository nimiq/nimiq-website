var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a$ as R, j as A, as as d, ah as U, b0 as j, L as q, y as x } from "./ClGJWWej.js";
const C = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225], E = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998], L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", f = [];
class S {
  constructor() {
    __publicField(this, "_data", new p());
    __publicField(this, "_hash", new p([...C]));
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
    let o = t[0], a = t[1], n = t[2], c = t[3], h = t[4], y = t[5], g = t[6], _ = t[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) f[i] = e[s + i] | 0;
      else {
        const u = f[i - 15], l = (u << 25 | u >>> 7) ^ (u << 14 | u >>> 18) ^ u >>> 3, w = f[i - 2], v = (w << 15 | w >>> 17) ^ (w << 13 | w >>> 19) ^ w >>> 10;
        f[i] = l + f[i - 7] + v + f[i - 16];
      }
      const m = h & y ^ ~h & g, D = o & a ^ o & n ^ a & n, M = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22), k = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25), b = _ + k + m + E[i] + f[i], B = M + D;
      _ = g, g = y, y = h, h = c + b | 0, c = n, n = a, a = o, o = b + B | 0;
    }
    t[0] = t[0] + o | 0, t[1] = t[1] + a | 0, t[2] = t[2] + n | 0, t[3] = t[3] + c | 0, t[4] = t[4] + h | 0, t[5] = t[5] + y | 0, t[6] = t[6] + g | 0, t[7] = t[7] + _ | 0;
  }
  _append(e) {
    typeof e == "string" && (e = p.fromUtf8(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
  }
  _process(e) {
    let s, t = this._data.sigBytes / 64;
    e ? t = Math.ceil(t) : t = Math.max((t | 0) - this._minBufferSize, 0);
    const o = t * 16, a = Math.min(o * 4, this._data.sigBytes);
    if (o) {
      for (let n = 0; n < o; n += 16) this._doProcessBlock(this._data.words, n);
      s = this._data.words.splice(0, o), this._data.sigBytes -= a;
    }
    return new p(s, a);
  }
}
class p {
  constructor(e, s) {
    __publicField(this, "words");
    __publicField(this, "sigBytes");
    e = this.words = e || [], this.sigBytes = s === void 0 ? e.length * 4 : s;
  }
  static fromUtf8(e) {
    const s = unescape(encodeURIComponent(e)), t = s.length, o = [];
    for (let a = 0; a < t; a++) o[a >>> 2] |= (s.charCodeAt(a) & 255) << 24 - a % 4 * 8;
    return new p(o, t);
  }
  toBase64() {
    const e = [];
    for (let s = 0; s < this.sigBytes; s += 3) {
      const t = this.words[s >>> 2] >>> 24 - s % 4 * 8 & 255, o = this.words[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255, a = this.words[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, n = t << 16 | o << 8 | a;
      for (let c = 0; c < 4 && s * 8 + c * 6 < this.sigBytes * 8; c++) e.push(L.charAt(n >>> 6 * (3 - c) & 63));
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
function O(r) {
  return T(R(r));
}
function P(r, e, s) {
  const [t = {}, o] = typeof e == "string" ? [{}, e] : [e, s], a = A(() => d(r)), n = A(() => d(t.key) || "$f" + O([o, typeof a.value == "string" ? a.value : "", ...$(t)]));
  if (!t.baseURL && typeof a.value == "string" && a.value[0] === "/" && a.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const { server: c, lazy: h, default: y, transform: g, pick: _, watch: i, immediate: m, getCachedData: D, deep: M, dedupe: k, ...b } = t, B = U({ ...j, ...b, cache: typeof t.cache == "boolean" ? void 0 : t.cache }), u = { server: c, lazy: h, default: y, transform: g, pick: _, immediate: m, getCachedData: D, deep: M, dedupe: k, watch: i === false ? [] : [...i || [], B] };
  i !== false && !m && q([...i || [], B], () => {
    u.immediate = true;
  }, { flush: "pre", once: true });
  let l;
  return x(n, () => {
    var _a;
    (_a = l == null ? void 0 : l.abort) == null ? void 0 : _a.call(l, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), l = typeof AbortController < "u" ? new AbortController() : {};
    const v = d(t.timeout);
    let z;
    return v && (z = setTimeout(() => l.abort(new DOMException("Request aborted due to timeout.", "AbortError")), v), l.signal.onabort = () => clearTimeout(z)), (t.$fetch || globalThis.$fetch)(a.value, { signal: l.signal, ...B }).finally(() => {
      clearTimeout(z);
    });
  }, u);
}
function $(r) {
  var _a;
  const e = [((_a = d(r.method)) == null ? void 0 : _a.toUpperCase()) || "GET", d(r.baseURL)];
  for (const s of [r.params || r.query]) {
    const t = d(s);
    if (!t) continue;
    const o = {};
    for (const [a, n] of Object.entries(t)) o[d(a)] = d(n);
    e.push(o);
  }
  return r.body && e.push(O(d(r.body))), e;
}
export {
  P as u
};
