import { au as $, av as F, aw as k, ax as S, ay as T, az as I, aA as A, aB as W, aC as H, aD as _, M as C, p as U, j as b, d as G, aE as V, B as q, E as X, c as Y, R as Q, o as J, m as z, u as v, S as Z } from "./ClGJWWej.js";
async function K(e, t) {
  return await ee(t).catch((i) => (console.error("Failed to get image meta for " + t, i + ""), { width: 0, height: 0, ratio: 0 }));
}
async function ee(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, r) => {
    const i = new Image();
    i.onload = () => {
      const o = { width: i.width, height: i.height, ratio: i.width / i.height };
      t(o);
    }, i.onerror = (o) => r(o), i.src = e;
  });
}
function P(e) {
  return (t) => t ? e[t] || t : e.missingValue;
}
function R({ formatter: e, keyMap: t, joinWith: r = "/", valueMap: i } = {}) {
  e || (e = (n, a) => `${n}=${a}`), t && typeof t != "function" && (t = P(t));
  const o = i || {};
  return Object.keys(o).forEach((n) => {
    typeof o[n] != "function" && (o[n] = P(o[n]));
  }), (n = {}) => Object.entries(n).filter(([s, c]) => typeof c < "u").map(([s, c]) => {
    const l = o[s];
    return typeof l == "function" && (c = l(n[s])), s = typeof t == "function" ? t(s) : s, e(s, c);
  }).join(r);
}
function g(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return Number.parseInt(e, 10);
}
function te(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = /* @__PURE__ */ new Set();
  for (const r of e.split(" ")) {
    const i = Number.parseInt(r.replace("x", ""));
    i && t.add(i);
  }
  return Array.from(t);
}
function re(e) {
  if (e.length === 0) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
}
function ie(e) {
  const t = {};
  if (typeof e == "string") for (const r of e.split(/[\s,]+/).filter((i) => i)) {
    const i = r.split(":");
    i.length !== 2 ? t["1px"] = i[0].trim() : t[i[0].trim()] = i[1].trim();
  }
  else Object.assign(t, e);
  return t;
}
function oe(e) {
  const t = { options: e }, r = (o, n = {}) => B(t, o, n), i = (o, n = {}, a = {}) => r(o, { ...a, modifiers: $(n, a.modifiers || {}) }).url;
  for (const o in e.presets) i[o] = (n, a, s) => i(n, a, { ...e.presets[o], ...s });
  return i.options = e, i.getImage = r, i.getMeta = (o, n) => ne(t, o, n), i.getSizes = (o, n) => de(t, o, n), t.$img = i, i;
}
async function ne(e, t, r) {
  const i = B(e, t, { ...r });
  return typeof i.getMeta == "function" ? await i.getMeta() : await K(e, i.url);
}
function B(e, t, r) {
  var _a, _b;
  if (t && typeof t != "string") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
  if (!t || t.startsWith("data:")) return { url: t };
  const { provider: i, defaults: o } = ae(e, r.provider || e.options.provider), n = se(e, r.preset);
  if (t = k(t) ? t : F(t), !i.supportsAlias) {
    for (const l in e.options.alias) if (t.startsWith(l)) {
      const m = e.options.alias[l];
      m && (t = S(m, t.slice(l.length)));
    }
  }
  if (i.validateDomains && k(t)) {
    const l = T(t).host;
    if (!e.options.domains.find((m) => m === l)) return { url: t };
  }
  const a = $(r, n, o);
  a.modifiers = { ...a.modifiers };
  const s = a.modifiers.format;
  ((_a = a.modifiers) == null ? void 0 : _a.width) && (a.modifiers.width = g(a.modifiers.width)), ((_b = a.modifiers) == null ? void 0 : _b.height) && (a.modifiers.height = g(a.modifiers.height));
  const c = i.getImage(t, a, e);
  return c.format = c.format || s || "", c;
}
function ae(e, t) {
  const r = e.options.providers[t];
  if (!r) throw new Error("Unknown provider: " + t);
  return r;
}
function se(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function de(e, t, r) {
  var _a, _b, _c, _d, _e2;
  const i = g((_a = r.modifiers) == null ? void 0 : _a.width), o = g((_b = r.modifiers) == null ? void 0 : _b.height), n = ie(r.sizes), a = ((_c = r.densities) == null ? void 0 : _c.trim()) ? te(r.densities.trim()) : e.options.densities;
  re(a);
  const s = i && o ? o / i : 0, c = [], l = [];
  if (Object.keys(n).length >= 1) {
    for (const u in n) {
      const f = j(u, String(n[u]), o, s, e);
      if (f !== void 0) {
        c.push({ size: f.size, screenMaxWidth: f.screenMaxWidth, media: `(max-width: ${f.screenMaxWidth}px)` });
        for (const h of a) l.push({ width: f._cWidth * h, src: M(e, t, r, f, h) });
      }
    }
    le(c);
  } else for (const u of a) {
    const f = Object.keys(n)[0];
    let h = f ? j(f, String(n[f]), o, s, e) : void 0;
    h === void 0 && (h = { size: "", screenMaxWidth: 0, _cWidth: (_d = r.modifiers) == null ? void 0 : _d.width, _cHeight: (_e2 = r.modifiers) == null ? void 0 : _e2.height }), l.push({ width: u, src: M(e, t, r, h, u) });
  }
  ce(l);
  const m = l[l.length - 1], x = c.length ? c.map((u) => `${u.media ? u.media + " " : ""}${u.size}`).join(", ") : void 0, w = x ? "w" : "x", y = l.map((u) => `${u.src} ${u.width}${w}`).join(", ");
  return { sizes: x, srcset: y, src: m == null ? void 0 : m.src };
}
function j(e, t, r, i, o) {
  const n = o.options.screens && o.options.screens[e] || Number.parseInt(e), a = t.endsWith("vw");
  if (!a && /^\d+$/.test(t) && (t = t + "px"), !a && !t.endsWith("px")) return;
  let s = Number.parseInt(t);
  if (!n || !s) return;
  a && (s = Math.round(s / 100 * n));
  const c = i ? Math.round(s * i) : r;
  return { size: t, screenMaxWidth: n, _cWidth: s, _cHeight: c };
}
function M(e, t, r, i, o) {
  return e.$img(t, { ...r.modifiers, width: i._cWidth ? i._cWidth * o : void 0, height: i._cHeight ? i._cHeight * o : void 0 }, r);
}
function le(e) {
  var _a;
  e.sort((r, i) => r.screenMaxWidth - i.screenMaxWidth);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.media === t && e.splice(r, 1), t = i.media;
  }
  for (let r = 0; r < e.length; r++) e[r].media = ((_a = e[r + 1]) == null ? void 0 : _a.media) || "";
}
function ce(e) {
  e.sort((r, i) => r.width - i.width);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.width === t && e.splice(r, 1), t = i.width;
  }
}
const N = R({ keyMap: { width: "w", height: "h", format: "fm", quality: "q", backgroundColor: "bg", rotate: "rot", mask: "mask", auto: "auto", crop: "crop", brightness: "bri", contrast: "con", exposure: "exp", gamma: "gam", highlight: "high", hueShift: "hue", invert: "invert", saturation: "sat", shadow: "shad", sharpen: "sharp", unsharpMask: "usm", unsharpMaskRadius: "usmrad", vibrance: "vib", blend: "blend", blendAlign: "blend-align", blendAlpha: "blend-alpha", blendColor: "blend-color", blendCrop: "blend-crop", blendFit: "blend-fit", blendHeight: "blend-h", blendMode: "blend-mode", blendPadding: "blend-pad", blendSize: "blend-size", blendWidth: "blend-w", blendXPosition: "blend-x", blendYPosition: "blend-y", padding: "pad", borderBottom: "border-bottom", borderLeft: "border-left", innerBorderRadius: "border-radius-inner", outerBorderRadius: "border-radius", borderRight: "border-right", borderTop: "border-top", borderSizeColor: "border", paddingBottom: "pad-bottom", paddingLeft: "pad-left", paddingRight: "pad-right", paddingTop: "pad-top", paletteColorCount: "colors", colorPaletteExtraction: "palette", cssPrefix: "prefix", expirationTimestamp: "expires", faceIndex: "faceindex", facePadding: "facepad", jsonFaceData: "faces", fillMode: "fill", fillColor: "fill-color", gridColors: "grid-colors", gridSize: "grid-size", transparency: "transparency", focalPointDebug: "fp-debug", focalPointXPosition: "fp-x", focalPointYPosition: "fp-y", focalPointZoom: "fp-z", clientHints: "ch", chromaSubsampling: "chromasub", colorQuantization: "colorquant", colorSpace: "cs", download: "dl", dotsPerInch: "dpi", losslessCompression: "lossless", maskBackgroundColor: "mask-bg", maskCornerRadius: "corner-radius", noiseReductionSharp: "nrs", noiseReductionBound: "nr", pdfPageNumber: "page", pdfAnnotation: "pdf-annotation", pixelDensity: "dpr", orientation: "orient", flipAxis: "flip", aspectRatio: "ar", maximumHeight: "max-h", maximumWidth: "max-w", minimumHeight: "min-h", minimumWidth: "min-w", sourceRectangleRegion: "rect", gaussianBlur: "blur", duotoneAlpha: "duotone-alpha", duotone: "duotone", halftone: "htn", monochrome: "monochrome", pixellate: "px", sepiaTone: "sepia", textAlign: "txt-align", textClippingMode: "txt-clip", textColor: "txt-color", textFitMode: "txt-fit", textFont: "txt-font", textLigatures: "txt-lig", textOutlineColor: "txt-line-color", textOutline: "txt-line", textPadding: "txt-pad", textShadow: "txt-shad", textFontSize: "txt-size", textWidth: "txt-width", textString: "txt", trimColor: "trim-color", trimMeanDifference: "trim-md", trimStandardDeviation: "trim-sd", trimTolerance: "trim-tol", trimImage: "trim", textLeading: "txt-lead", textTracking: "txt-track", typesettingEndpoint: "~text", watermarkAlignment: "mark-align", watermarkAlpha: "mark-alpha", watermarkBaseURL: "mark-base", watermarkFitMode: "mark-fit", watermarkHeight: "mark-h", watermarkPadding: "mark-pad", watermarkRotation: "mark-rot", watermarkScale: "mark-sclae", watermarkTile: "mark-tile", watermarkWidth: "mark-w", watermarkXPosition: "mark-x", watermarkYPosition: "mark-y", watermarkImageURL: "mark" }, valueMap: { fit: { fill: "scale", inside: "max", outside: "min", cover: "crop", contain: "fill", clamp: "clamp", clip: "clip", facearea: "facearea", fillMax: "fillmax" }, format: { gif: "gif", jp2: "jp2", jpg: "jpg", json: "json", jxr: "jxr", pjpg: "pjpg", mp4: "mp4", png: "png", png8: "png8", png32: "png32", webm: "webm", webp: "webp", blurhash: "blurhash" } }, joinWith: "&", formatter: (e, t) => `${e}=${t}` }), O = "https://images.unsplash.com/", ue = (e, { modifiers: t = {}, baseURL: r = O } = {}) => {
  const i = N(t);
  return { url: I(W(e, r), A("?" + i)) };
}, E = "https://images.prismic.io/", me = (e, { modifiers: t = {}, baseURL: r = E } = {}, i) => {
  if (e.startsWith(O)) return ue(e, { modifiers: t });
  const o = N(t);
  return { url: I(W(e, r), A("?" + o)) };
}, fe = Object.freeze(Object.defineProperty({ __proto__: null, getImage: me, prismicCDN: E }, Symbol.toStringTag, { value: "Module" })), ge = R({ keyMap: { format: "f", fit: "fit", width: "w", height: "h", resize: "s", quality: "q", background: "b" }, joinWith: "&", formatter: (e, t) => _(e) + "_" + _(t) }), pe = (e, { modifiers: t = {}, baseURL: r } = {}, i) => {
  t.width && t.height && (t.resize = `${t.width}x${t.height}`, delete t.width, delete t.height);
  const o = ge(t) || "_";
  return r || (r = S(i.options.nuxt.baseURL, "/_ipx")), { url: S(r, o, H(e)) };
}, he = true, be = true, we = Object.freeze(Object.defineProperty({ __proto__: null, getImage: pe, supportsAlias: be, validateDomains: he }, Symbol.toStringTag, { value: "Module" })), L = { screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, "2xl": 1536 }, presets: {}, provider: "ipxStatic", domains: [], alias: {}, densities: [1, 2], format: ["webp"] };
L.providers = { prismic: { provider: fe, defaults: {} }, ipxStatic: { provider: we, defaults: {} } };
const D = () => {
  const e = U(), t = C();
  return t.$img || t._img || (t._img = oe({ ...L, nuxt: { baseURL: e.app.baseURL }, runtimeConfig: e }));
};
function xe(e) {
  var _a;
  (_a = performance == null ? void 0 : performance.mark) == null ? void 0 : _a.call(performance, "mark_feature_usage", { detail: { feature: e } });
}
const ye = { src: { type: String, required: false }, format: { type: String, required: false }, quality: { type: [Number, String], required: false }, background: { type: String, required: false }, fit: { type: String, required: false }, modifiers: { type: Object, required: false }, preset: { type: String, required: false }, provider: { type: String, required: false }, sizes: { type: [Object, String], required: false }, densities: { type: String, required: false }, preload: { type: [Boolean, Object], required: false }, width: { type: [String, Number], required: false }, height: { type: [String, Number], required: false }, alt: { type: String, required: false }, referrerpolicy: { type: String, required: false }, usemap: { type: String, required: false }, longdesc: { type: String, required: false }, ismap: { type: Boolean, required: false }, loading: { type: String, required: false, validator: (e) => ["lazy", "eager"].includes(e) }, crossorigin: { type: [Boolean, String], required: false, validator: (e) => ["anonymous", "use-credentials", "", true, false].includes(e) }, decoding: { type: String, required: false, validator: (e) => ["async", "auto", "sync"].includes(e) }, nonce: { type: [String], required: false } }, ve = (e) => {
  const t = b(() => ({ provider: e.provider, preset: e.preset })), r = b(() => ({ width: g(e.width), height: g(e.height), alt: e.alt, referrerpolicy: e.referrerpolicy, usemap: e.usemap, longdesc: e.longdesc, ismap: e.ismap, crossorigin: e.crossorigin === true ? "anonymous" : e.crossorigin || void 0, loading: e.loading, decoding: e.decoding, nonce: e.nonce })), i = D(), o = b(() => ({ ...e.modifiers, width: g(e.width), height: g(e.height), format: e.format, quality: e.quality || i.options.quality, background: e.background, fit: e.fit }));
  return { options: t, attrs: r, modifiers: o };
}, Se = { ...ye, placeholder: { type: [Boolean, String, Number, Array], required: false }, placeholderClass: { type: String, required: false }, custom: { type: Boolean, required: false } }, ke = ["src"], _e = G({ __name: "NuxtImg", props: Se, emits: ["load", "error"], setup(e, { emit: t }) {
  const r = e, i = V(), o = t, n = false, a = D(), s = ve(r), c = q(false), l = q(), m = b(() => a.getSizes(r.src, { ...s.options.value, sizes: r.sizes, densities: r.densities, modifiers: { ...s.modifiers.value, width: g(r.width), height: g(r.height) } })), x = b(() => {
    const d = { ...s.attrs.value, "data-nuxt-img": "" };
    return (!r.placeholder || c.value) && (d.sizes = m.value.sizes, d.srcset = m.value.srcset), d;
  }), w = b(() => {
    let d = r.placeholder;
    if (d === "" && (d = true), !d || c.value) return false;
    if (typeof d == "string") return d;
    const p = Array.isArray(d) ? d : typeof d == "number" ? [d, d] : [10, 10];
    return a(r.src, { ...s.modifiers.value, width: p[0], height: p[1], quality: p[2] || 50, blur: p[3] || 3 }, s.options.value);
  }), y = b(() => r.sizes ? m.value.src : a(r.src, s.modifiers.value, s.options.value)), u = b(() => w.value ? w.value : y.value), h = C().isHydrating;
  return X(() => {
    if (w.value || r.custom) {
      const d = new Image();
      y.value && (d.src = y.value), r.sizes && (d.sizes = m.value.sizes || "", d.srcset = m.value.srcset), d.onload = (p) => {
        c.value = true, o("load", p);
      }, d.onerror = (p) => {
        o("error", p);
      }, xe("nuxt-image");
      return;
    }
    l.value && (l.value.complete && h && (l.value.getAttribute("data-error") ? o("error", new Event("error")) : o("load", new Event("load"))), l.value.onload = (d) => {
      o("load", d);
    }, l.value.onerror = (d) => {
      o("error", d);
    });
  }), (d, p) => d.custom ? Q(d.$slots, "default", Z(z({ key: 1 }, { ...v(n) ? { onerror: "this.setAttribute('data-error', 1)" } : {}, imgAttrs: { ...x.value, ...v(i) }, isLoaded: c.value, src: u.value }))) : (J(), Y("img", z({ key: 0, ref_key: "imgEl", ref: l, class: w.value && !c.value ? d.placeholderClass : void 0 }, { ...v(n) ? { onerror: "this.setAttribute('data-error', 1)" } : {}, ...x.value, ...v(i) }, { src: u.value }), null, 16, ke));
} }), ze = Object.assign(_e, { __name: "NuxtImg" });
export {
  ze as _
};
