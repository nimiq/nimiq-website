var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { bC as G, a as M, aW as _, b6 as P, bD as H, ai as J, bE as K, d as I, ay as X, az as Z, j as b, o as y, aH as Q, k as r, bF as ee, Q as te, v as O, A as se, l as oe, h as f, F as T, ae as ne, aU as ie, aJ as A, g as $, f as E, p as S, m as ae, r as L, e as N, t as z, n as re } from "./BSLliBk6.js";
import { g as le } from "./CpsPJSKh.js";
import { a as F } from "./C_8_0gW1.js";
import { _ as ue } from "./DlAUqK2U.js";
import "./CMlG4309.js";
const de = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225], me = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998], ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", q = [];
class pe {
  constructor() {
    __publicField(this, "_data", new U());
    __publicField(this, "_hash", new U([...de]));
    __publicField(this, "_nDataBytes", 0);
    __publicField(this, "_minBufferSize", 0);
  }
  finalize(s) {
    s && this._append(s);
    const t = this._nDataBytes * 8, e = this._data.sigBytes * 8;
    return this._data.words[e >>> 5] |= 128 << 24 - e % 32, this._data.words[(e + 64 >>> 9 << 4) + 14] = Math.floor(t / 4294967296), this._data.words[(e + 64 >>> 9 << 4) + 15] = t, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash;
  }
  _doProcessBlock(s, t) {
    const e = this._hash.words;
    let o = e[0], i = e[1], l = e[2], p = e[3], c = e[4], w = e[5], v = e[6], B = e[7];
    for (let d = 0; d < 64; d++) {
      if (d < 16) q[d] = s[t + d] | 0;
      else {
        const u = q[d - 15], h = (u << 25 | u >>> 7) ^ (u << 14 | u >>> 18) ^ u >>> 3, C = q[d - 2], j = (C << 15 | C >>> 17) ^ (C << 13 | C >>> 19) ^ C >>> 10;
        q[d] = h + q[d - 7] + j + q[d - 16];
      }
      const g = c & w ^ ~c & v, D = o & i ^ o & l ^ i & l, m = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22), n = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25), k = B + n + g + me[d] + q[d], x = m + D;
      B = v, v = w, w = c, c = p + k | 0, p = l, l = i, i = o, o = k + x | 0;
    }
    e[0] = e[0] + o | 0, e[1] = e[1] + i | 0, e[2] = e[2] + l | 0, e[3] = e[3] + p | 0, e[4] = e[4] + c | 0, e[5] = e[5] + w | 0, e[6] = e[6] + v | 0, e[7] = e[7] + B | 0;
  }
  _append(s) {
    typeof s == "string" && (s = U.fromUtf8(s)), this._data.concat(s), this._nDataBytes += s.sigBytes;
  }
  _process(s) {
    let t, e = this._data.sigBytes / 64;
    s ? e = Math.ceil(e) : e = Math.max((e | 0) - this._minBufferSize, 0);
    const o = e * 16, i = Math.min(o * 4, this._data.sigBytes);
    if (o) {
      for (let l = 0; l < o; l += 16) this._doProcessBlock(this._data.words, l);
      t = this._data.words.splice(0, o), this._data.sigBytes -= i;
    }
    return new U(t, i);
  }
}
class U {
  constructor(s, t) {
    __publicField(this, "words");
    __publicField(this, "sigBytes");
    s = this.words = s || [], this.sigBytes = t === void 0 ? s.length * 4 : t;
  }
  static fromUtf8(s) {
    const t = unescape(encodeURIComponent(s)), e = t.length, o = [];
    for (let i = 0; i < e; i++) o[i >>> 2] |= (t.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    return new U(o, e);
  }
  toBase64() {
    const s = [];
    for (let t = 0; t < this.sigBytes; t += 3) {
      const e = this.words[t >>> 2] >>> 24 - t % 4 * 8 & 255, o = this.words[t + 1 >>> 2] >>> 24 - (t + 1) % 4 * 8 & 255, i = this.words[t + 2 >>> 2] >>> 24 - (t + 2) % 4 * 8 & 255, l = e << 16 | o << 8 | i;
      for (let p = 0; p < 4 && t * 8 + p * 6 < this.sigBytes * 8; p++) s.push(ce.charAt(l >>> 6 * (3 - p) & 63));
    }
    return s.join("");
  }
  concat(s) {
    if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t = 0; t < s.sigBytes; t++) {
      const e = s.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
      this.words[this.sigBytes + t >>> 2] |= e << 24 - (this.sigBytes + t) % 4 * 8;
    }
    else for (let t = 0; t < s.sigBytes; t += 4) this.words[this.sigBytes + t >>> 2] = s.words[t >>> 2];
    this.sigBytes += s.sigBytes;
  }
}
function fe(a) {
  return new pe().finalize(a).toBase64();
}
function V(a) {
  return fe(G(a));
}
function he(a, s, t) {
  const [e = {}, o] = typeof s == "string" ? [{}, s] : [s, t], i = M(() => _(a)), l = M(() => _(e.key) || "$f" + V([o, typeof i.value == "string" ? i.value : "", ...ye(e)]));
  if (!e.baseURL && typeof i.value == "string" && i.value[0] === "/" && i.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const { server: p, lazy: c, default: w, transform: v, pick: B, watch: d, immediate: g, getCachedData: D, deep: m, dedupe: n, ...k } = e, x = P({ ...H, ...k, cache: typeof e.cache == "boolean" ? void 0 : e.cache }), u = { server: p, lazy: c, default: w, transform: v, pick: B, immediate: g, getCachedData: D, deep: m, dedupe: n, watch: d === false ? [] : [...d || [], x] };
  let h;
  return J(d === false ? l.value : l, () => {
    var _a;
    (_a = h == null ? void 0 : h.abort) == null ? void 0 : _a.call(h, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), h = typeof AbortController < "u" ? new AbortController() : {};
    const j = _(e.timeout);
    let R;
    return j && (R = setTimeout(() => h.abort(new DOMException("Request aborted due to timeout.", "AbortError")), j), h.signal.onabort = () => clearTimeout(R)), (e.$fetch || globalThis.$fetch)(i.value, { signal: h.signal, ...x }).finally(() => {
      clearTimeout(R);
    });
  }, u);
}
function ye(a) {
  var _a;
  const s = [((_a = _(a.method)) == null ? void 0 : _a.toUpperCase()) || "GET", _(a.baseURL)];
  for (const t of [a.params || a.query]) {
    const e = _(t);
    if (!e) continue;
    const o = {};
    for (const [i, l] of Object.entries(e)) o[_(i)] = _(l);
    s.push(o);
  }
  if (a.body) {
    const t = _(a.body);
    if (!t) s.push(V(t));
    else if (t instanceof ArrayBuffer) s.push(V(Object.fromEntries([...new Uint8Array(t).entries()].map(([e, o]) => [e, o.toString()]))));
    else if (t instanceof FormData) {
      const e = {};
      for (const o of t.entries()) {
        const [i, l] = o;
        e[i] = l instanceof File ? l.name : l;
      }
      s.push(V(e));
    } else if (K(t)) s.push(V(P(t)));
    else try {
      s.push(V(t));
    } catch {
      console.warn("[useFetch] Failed to hash body", t);
    }
  }
  return s;
}
const ge = { flex: "~ gap-x-16 items-start", group: "", "ml--8": "", "p-8": "", "rounded-2": "", "focus-within:bg-neutral-200": "" }, be = ["name", "required"], _e = { text: "left 14 lg:16 neutral-700", "font-normal": "", "max-w-40ch": "" }, we = I({ __name: "Checkbox", props: X({ name: {}, required: { type: Boolean, default: false } }, { modelValue: { type: Boolean, required: true }, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const s = Z(a, "modelValue");
  return (t, e) => (y(), b("label", ge, [Q(r("input", { "onUpdate:modelValue": e[0] || (e[0] = (o) => s.value = o), peer: "", name: t.name, type: "checkbox", required: t.required, "sr-only": "" }, null, 8, be), [[ee, s.value]]), e[1] || (e[1] = r("div", { ring: " 1 neutral-400 offset-4 peer-checked:blue-600 group-hover:blue-600", "mt-3": "", "rounded-full": "", "shrink-0": "", "size-15": "", "transition-color": "", "peer-checked:bg-blue": "" }, null, -1)), r("p", _e, [te(t.$slots, "default")])]));
} }), ve = Object.assign(we, { __name: "Checkbox" });
var W = ((a) => (a.Education = "Education", a.Community = "Community", a.ConsumerTech = "Consumer Tech", a.BusinessTech = "Business Tech", a.BlockchainTech = "Blockchain Tech", a))(W || {}), Y = ((a) => (a.NimiqWallet = "Nimiq Wallet", a.SuperSimpleSwap = "SuperSimpleSwap", a.CryptopaymentLink = "Cryptopayment.link", a.NimiqPay = "Nimiq Pay", a))(Y || {});
const xe = { pt: "148 md:153 lg:160", "data-slice-type": "newsletter-form" }, Be = { px: "32 md:36 lg:40", "mx-auto": "", "py-60": "", "rounded-6": "", "bg-neutral-0": "", "max-w-65ch": "", shadow: "" }, qe = { flex: "~ col gap-y-20 lg:gap-y-24" }, ke = { grid: "~ cols-2 gap-y-4 gap-x-16" }, Ce = { grid: "~ cols-2 gap-y-4 gap-x-16" }, Se = { key: 0 }, Ve = { key: 1, "text-18": "", "i-nimiq:spinner": "" }, Ue = { key: 1 }, De = { "px-12": "", "py-10": "", "rounded-6": "", "f-mt-xs": "" }, Me = { key: 2, flex: "~ items-start gap-8", text: "f-lg green", "font-semibold": "", "f-mt-md": "" }, je = I({ __name: "index", props: le(), setup(a) {
  const s = F("email", ""), t = F("products", ""), e = F("topics", ""), o = O(s.value), i = O(false), l = P(Object.values(W).map((m) => ({ label: m, model: O(e.value.includes(m)) }))), p = P(Object.values(Y).map((m) => ({ label: m, model: O(t.value.includes(m)) }))), c = M(() => l.filter((m) => m.model).map((m) => m.label)), w = M(() => p.filter((m) => m.model).map((m) => m.label)), v = M(() => new URLSearchParams({ email: o.value ?? "", communicationPermission: String(i.value ?? false), topics: c.value.join(","), products: w.value.join(",") })), B = new URL("/api/newsletter/subscribe", se().public.apiDomain), { execute: d, status: g, error: D } = he(B.href, { method: "POST", body: v, watch: false, immediate: false }, "$MhBSkS8Nmy");
  return (m, n) => {
    const k = ae, x = ve;
    return y(), b("section", xe, [r("div", Be, [n[15] || (n[15] = r("h1", { style: { "--nq-font-size-min": "24", "--nq-font-size-max": "28" }, "text-left": "" }, " Nimiq newsletter signup ", -1)), f(g) === "idle" || f(g) === "pending" ? (y(), b(T, { key: 0 }, [n[11] || (n[11] = r("p", { mt: "12 lg:16" }, " You don't want to miss any news about the Nimiq ecosystem? Subscribe to our newsletter and receive regular updates on a variety of Nimiq related topics. ", -1)), r("form", { flex: "~ col gap-y-36 lg:gap-y-40", mt: "36 lg:40", onSubmit: n[2] || (n[2] = ne(() => f(d)(), ["prevent"])) }, [r("fieldset", null, [n[3] || (n[3] = r("legend", { text: "14 neutral", "ml--2": "", "nq-label": "" }, " Your email* ", -1)), Q(r("input", { "onUpdate:modelValue": n[0] || (n[0] = (u) => A(o) ? o.value = u : null), type: "email", placeholder: "Email address", mt: "12 lg:16", required: "", "rounded-full": "", "nq-input-box": "" }, null, 512), [[ie, f(o)]])]), r("fieldset", null, [n[6] || (n[6] = r("legend", { text: "14 neutral", "ml--2": "", "nq-label": "" }, " Communication permission* ", -1)), n[7] || (n[7] = r("p", { mt: "12 lg:16" }, " In order to receive the Nimiq newsletter, you must give us permission to contact you. ", -1)), $(x, { modelValue: f(i), "onUpdate:modelValue": n[1] || (n[1] = (u) => A(i) ? i.value = u : null), required: true, mt: "12 lg:16" }, { default: E(() => [n[5] || (n[5] = S(" Yes, I would like to subscribe to the free Nimiq.com newsletter and receive information tailored to my needs at the email address I have provided based on my registration data and newsletter preferences. I hereby accept the ")), $(k, { to: "/privacy-policy", "text-blue": "", target: "_blank" }, { default: E(() => n[4] || (n[4] = [S(" Privacy Policy. ")])), _: 1, __: [4] })]), _: 1, __: [5] }, 8, ["modelValue"])]), r("fieldset", qe, [n[8] || (n[8] = r("legend", { text: "14 neutral", "ml--2": "", "nq-label": "" }, " Your interests ", -1)), n[9] || (n[9] = r("p", { "mt-20": "", "lg:mt-24": "" }, " In which topics are you interested? ", -1)), r("div", ke, [(y(true), b(T, null, L(f(l), (u) => (y(), N(x, { key: u.label, modelValue: u.model, "onUpdate:modelValue": (h) => u.model = h }, { default: E(() => [S(z(u.label), 1)]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"]))), 128))]), n[10] || (n[10] = r("p", { "mt-12": "" }, " Which Nimiq products do you use? ", -1)), r("div", Ce, [(y(true), b(T, null, L(f(p), (u) => (y(), N(x, { key: u.label, modelValue: u.model, "onUpdate:modelValue": (h) => u.model = h }, { default: E(() => [S(z(u.label), 1)]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"]))), 128))])]), r("button", { class: re({ "nq-arrow": f(g) === "idle" }), "self-end": "", "nq-pill-lg": "", "nq-pill-blue": "" }, [f(g) === "idle" ? (y(), b("span", Se, " Subscribe ")) : (y(), b("div", Ve))], 2)], 32)], 64)) : f(g) === "error" ? (y(), b("div", Ue, [n[12] || (n[12] = r("div", { flex: "~ items-center gap-8", text: "f-lg red", "font-semibold": "", "f-mt-md": "" }, [r("div", { "scale-70": "", "i-nimiq:cross": "" }), S(" Error ")], -1)), n[13] || (n[13] = r("p", { "nt-mt-12": "" }, " There was an error while subscribing to the newsletter. Please try again later. ", -1)), r("pre", De, "          " + z(f(D)) + `
        `, 1)])) : f(g) === "success" ? (y(), b("div", Me, [n[14] || (n[14] = r("div", { "mt-6": "", "scale-70": "", "i-nimiq:check": "" }, null, -1)), S(" Please confirm your subscription sent to your " + z(f(o)) + ". ", 1)])) : oe("", true)])]);
  };
} }), Fe = ue(je, [["__scopeId", "data-v-88ce6287"]]);
export {
  Fe as default
};
