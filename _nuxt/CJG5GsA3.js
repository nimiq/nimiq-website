import { aX as $, aY as E, aZ as M, a_ as b, a$ as R, b0 as q, b1 as L, L as W, A as O, a as p, v as U, ao as B, au as H, B as C, j as D, Q as V, o as T, s as _, T as F } from "./Dzy_QPZd.js";
async function G(e, t) {
  return await X(t).catch((i) => (console.error("Failed to get image meta for " + t, i + ""), { width: 0, height: 0, ratio: 0 }));
}
async function X(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, r) => {
    const i = new Image();
    i.onload = () => {
      const s = { width: i.width, height: i.height, ratio: i.width / i.height };
      t(s);
    }, i.onerror = (s) => r(s), i.src = e;
  });
}
function k(e) {
  return (t) => t !== void 0 ? e[t] || t : e.missingValue;
}
function J(e = {}) {
  const t = e.formatter, r = e.keyMap && typeof e.keyMap != "function" ? k(e.keyMap) : e.keyMap, i = {};
  for (const s in e.valueMap) {
    const n = s, a = e.valueMap[n];
    i[n] = typeof a == "object" ? k(a) : a;
  }
  return (s) => {
    const n = [];
    for (const a in s) {
      const o = a;
      if (typeof s[o] > "u") continue;
      const d = typeof i[o] == "function" ? i[o](s[o]) : s[o];
      n.push([r ? r(o) : o, d]);
    }
    return t ? n.map((a) => t(...a)).join(e.joinWith ?? "&") : new URLSearchParams(n).toString();
  };
}
function Z(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = /* @__PURE__ */ new Set();
  for (const r of e.split(" ")) {
    const i = Number.parseInt(r.replace("x", ""));
    i && t.add(i);
  }
  return Array.from(t);
}
function K(e) {
  if (e.length === 0) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
}
function y(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return Number.parseInt(e, 10);
}
function Q(e) {
  const t = {};
  if (typeof e == "string") for (const r of e.split(/[\s,]+/).filter((i) => i)) {
    const i = r.split(":");
    i.length !== 2 ? t["1px"] = i[0].trim() : t[i[0].trim()] = i[1].trim();
  }
  else Object.assign(t, e);
  return t;
}
function Y(e) {
  const t = { options: e }, r = (s, n = {}) => I(t, s, n), i = (s, n, a) => r(s, $({ modifiers: n }, a)).url;
  for (const s in e.presets) i[s] = (n, a, o) => i(n, a, { ...e.presets[s], ...o });
  return i.options = e, i.getImage = r, i.getMeta = (s, n) => ee(t, s, n), i.getSizes = (s, n) => ie(t, s, n), t.$img = i, i;
}
async function ee(e, t, r) {
  const i = I(e, t, { ...r });
  return typeof i.getMeta == "function" ? await i.getMeta() : await G(e, i.url);
}
function I(e, t, r) {
  var _a, _b;
  if (t && typeof t != "string") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
  if (!t || t.startsWith("data:")) return { url: t };
  const { setup: i, defaults: s } = te(e, r.provider || e.options.provider), n = i(), a = re(e, r.preset);
  if (t = M(t) ? t : E(t), !n.supportsAlias) {
    for (const m in e.options.alias) if (t.startsWith(m)) {
      const g = e.options.alias[m];
      g && (t = b(g, t.slice(m.length)));
    }
  }
  if (n.validateDomains && M(t)) {
    const m = R(t).host;
    if (!e.options.domains.find((g) => g === m)) return { url: t };
  }
  const o = $(r, a, s), d = { ...o, modifiers: { ...o.modifiers, width: ((_a = o.modifiers) == null ? void 0 : _a.width) ? y(o.modifiers.width) : void 0, height: ((_b = o.modifiers) == null ? void 0 : _b.height) ? y(o.modifiers.height) : void 0 } }, l = n.getImage(t, d, e);
  return l.format || (l.format = d.modifiers.format || ""), l;
}
function te(e, t) {
  const r = e.options.providers[t];
  if (!r) throw new Error("Unknown provider: " + t);
  return r;
}
function re(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function ie(e, t, r) {
  var _a, _b, _c, _d, _e;
  const i = y((_a = r.modifiers) == null ? void 0 : _a.width), s = y((_b = r.modifiers) == null ? void 0 : _b.height), n = Q(r.sizes), a = ((_c = r.densities) == null ? void 0 : _c.trim()) ? Z(r.densities.trim()) : e.options.densities;
  K(a);
  const o = i && s ? s / i : 0, d = [], l = [];
  if (Object.keys(n).length >= 1) {
    for (const u in n) {
      const h = x(u, String(n[u]), s, o, e);
      if (h !== void 0) {
        d.push({ size: h.size, screenMaxWidth: h.screenMaxWidth, media: `(max-width: ${h.screenMaxWidth}px)` });
        for (const f of a) l.push({ width: h._cWidth * f, src: z(e, t, r, h, f) });
      }
    }
    se(d);
  } else for (const u of a) {
    const h = Object.keys(n)[0];
    let f = h ? x(h, String(n[h]), s, o, e) : void 0;
    f === void 0 && (f = { size: "", screenMaxWidth: 0, _cWidth: (_d = r.modifiers) == null ? void 0 : _d.width, _cHeight: (_e = r.modifiers) == null ? void 0 : _e.height }), l.push({ width: u, src: z(e, t, r, f, u) });
  }
  ne(l);
  const m = l[l.length - 1], g = d.length ? d.map((u) => `${u.media ? u.media + " " : ""}${u.size}`).join(", ") : void 0, w = g ? "w" : "x", S = l.map((u) => `${u.src} ${u.width}${w}`).join(", ");
  return { sizes: g, srcset: S, src: m == null ? void 0 : m.src };
}
function x(e, t, r, i, s) {
  const n = s.options.screens && s.options.screens[e] || Number.parseInt(e), a = t.endsWith("vw");
  if (!a && /^\d+$/.test(t) && (t = t + "px"), !a && !t.endsWith("px")) return;
  let o = Number.parseInt(t);
  if (!n || !o) return;
  a && (o = Math.round(o / 100 * n));
  const d = i ? Math.round(o * i) : r;
  return { size: t, screenMaxWidth: n, _cWidth: o, _cHeight: d };
}
function z(e, t, r, i, s) {
  return e.$img(t, { ...r.modifiers, width: i._cWidth ? i._cWidth * s : void 0, height: i._cHeight ? i._cHeight * s : void 0 }, r);
}
function se(e) {
  var _a;
  e.sort((r, i) => r.screenMaxWidth - i.screenMaxWidth);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.media === t && e.splice(r, 1), t = i.media;
  }
  for (let r = 0; r < e.length; r++) e[r].media = ((_a = e[r + 1]) == null ? void 0 : _a.media) || "";
}
function ne(e) {
  e.sort((r, i) => r.width - i.width);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.width === t && e.splice(r, 1), t = i.width;
  }
}
function oe(e) {
  let t;
  return () => t || (t = typeof e == "function" ? e() : e, t);
}
const ae = J({ keyMap: { format: "f", fit: "fit", width: "w", height: "h", resize: "s", quality: "q", background: "b" }, formatter: (e, t) => q(e) + "_" + q(t.toString()) }), ce = oe({ validateDomains: true, supportsAlias: true, getImage(e, { modifiers: t, baseURL: r }, i) {
  t.width && t.height && (t.resize = `${t.width}x${t.height}`, delete t.width, delete t.height);
  const s = ae(t) || "_";
  return r || (r = b(i.options.nuxt.baseURL, "/_ipx")), { url: b(r, s, L(e).replace(/\/{2,}/g, "/")) };
} }), de = { screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, "2xl": 1536 }, presets: {}, provider: "ipxStatic", domains: [], alias: {}, densities: [1, 2], format: ["webp"], providers: { ipxStatic: { setup: ce, defaults: {} } } }, A = (e) => {
  var _a;
  const t = O(), r = W();
  return r.$img || r._img || (r._img = Y({ ...de, event: (_a = r.ssrContext) == null ? void 0 : _a.event, nuxt: { baseURL: t.app.baseURL }, runtimeConfig: t }));
};
function ue(e) {
  var _a;
  (_a = performance == null ? void 0 : performance.mark) == null ? void 0 : _a.call(performance, "mark_feature_usage", { detail: { feature: e } });
}
const le = (e) => {
  const t = A(), r = p(() => ({ provider: e.provider, preset: e.preset })), i = p(() => ({ width: y(e.width), height: y(e.height), crossorigin: e.crossorigin === true ? "anonymous" : e.crossorigin || void 0, nonce: e.nonce })), s = p(() => ({ ...e.modifiers, width: e.width, height: e.height, format: e.format, quality: e.quality || t.options.quality, background: e.background, fit: e.fit }));
  return { providerOptions: r, normalizedAttrs: i, imageModifiers: s };
}, fe = ["src"], ge = { __name: "NuxtImg", props: { custom: { type: Boolean, required: false }, placeholder: { type: [Boolean, String, Number, Array], required: false }, placeholderClass: { type: String, required: false }, src: { type: String, required: false }, format: { type: String, required: false }, quality: { type: [String, Number], required: false }, background: { type: String, required: false }, fit: { type: String, required: false }, modifiers: { type: Object, required: false }, preset: { type: String, required: false }, provider: { type: null, required: false }, sizes: { type: [String, Object], required: false }, densities: { type: String, required: false }, preload: { type: [Boolean, Object], required: false }, width: { type: [String, Number], required: false }, height: { type: [String, Number], required: false }, crossorigin: { type: [String, Boolean], required: false }, nonce: { type: String, required: false } }, emits: ["load", "error"], setup(e, { emit: t }) {
  const r = e, i = t, s = A(), { providerOptions: n, normalizedAttrs: a, imageModifiers: o } = le(r), d = p(() => s.getSizes(r.src, { ...n.value, sizes: r.sizes, densities: r.densities, modifiers: o.value })), l = U(false), m = B(), g = p(() => ({ ...a.value, "data-nuxt-img": "", ...!r.placeholder || l.value ? { sizes: d.value.sizes, srcset: d.value.srcset } : {}, ...m })), w = p(() => {
    if (l.value) return false;
    const c = r.placeholder === "" ? [10, 10] : r.placeholder;
    if (!c) return false;
    if (typeof c == "string") return c;
    const [v = 10, j = v, N = 50, P = 3] = Array.isArray(c) ? c : typeof c == "number" ? [c] : [];
    return s(r.src, { ...o.value, width: v, height: j, quality: N, blur: P }, n.value);
  }), S = p(() => r.sizes ? d.value.src : s(r.src, o.value, n.value)), u = p(() => w.value || S.value), h = W().isHydrating, f = H("imgEl");
  return C(() => {
    if (w.value || r.custom) {
      const c = new Image();
      S.value && (c.src = S.value), r.sizes && (c.sizes = d.value.sizes || "", c.srcset = d.value.srcset), c.onload = (v) => {
        l.value = true, i("load", v);
      }, c.onerror = (v) => {
        i("error", v);
      }, ue("nuxt-image");
      return;
    }
    f.value && (f.value.complete && h && (f.value.getAttribute("data-error") ? i("error", new Event("error")) : i("load", new Event("load"))), f.value.onload = (c) => {
      i("load", c);
    }, f.value.onerror = (c) => {
      i("error", c);
    });
  }), (c, v) => e.custom ? V(c.$slots, "default", F(_({ key: 1 }, { imgAttrs: g.value, isLoaded: l.value, src: u.value }))) : (T(), D("img", _({ key: 0, ref_key: "imgEl", ref: f, class: w.value ? e.placeholderClass : void 0 }, g.value, { src: u.value }), null, 16, fe));
} };
export {
  ge as _
};
