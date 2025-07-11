import { aD as _, aE as O, aF as S, aG as y, aH as U, aI as R, aJ as j, aK as W, aL as M, aM as F, L as A, q as T, j as h, B as G, a6 as Q, az as V, E as X, c as K, Q as Y, o as J, m as z, R as Z } from "./gdLxT4Lf.js";
async function ee(e, t) {
  return await te(t).catch((i) => (console.error("Failed to get image meta for " + t, i + ""), { width: 0, height: 0, ratio: 0 }));
}
async function te(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, r) => {
    const i = new Image();
    i.onload = () => {
      const o = { width: i.width, height: i.height, ratio: i.width / i.height };
      t(o);
    }, i.onerror = (o) => r(o), i.src = e;
  });
}
function q(e) {
  return (t) => t !== void 0 ? e[t] || t : e.missingValue;
}
function C(e = {}) {
  const t = e.formatter, r = e.keyMap && typeof e.keyMap != "function" ? q(e.keyMap) : e.keyMap, i = {};
  for (const o in e.valueMap) {
    const a = o, s = e.valueMap[a];
    i[a] = typeof s == "object" ? q(s) : s;
  }
  return (o) => {
    const a = [];
    for (const s in o) {
      const n = s;
      if (typeof o[n] > "u") continue;
      const l = typeof i[n] == "function" ? i[n](o[n]) : o[n];
      a.push([r ? r(n) : n, l]);
    }
    return t ? a.map((s) => t(...s)).join(e.joinWith ?? "&") : new URLSearchParams(a).toString();
  };
}
function re(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = /* @__PURE__ */ new Set();
  for (const r of e.split(" ")) {
    const i = Number.parseInt(r.replace("x", ""));
    i && t.add(i);
  }
  return Array.from(t);
}
function ie(e) {
  if (e.length === 0) throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
}
function w(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return Number.parseInt(e, 10);
}
function oe(e) {
  const t = {};
  if (typeof e == "string") for (const r of e.split(/[\s,]+/).filter((i) => i)) {
    const i = r.split(":");
    i.length !== 2 ? t["1px"] = i[0].trim() : t[i[0].trim()] = i[1].trim();
  }
  else Object.assign(t, e);
  return t;
}
function ae(e) {
  const t = { options: e }, r = (o, a = {}) => $(t, o, a), i = (o, a, s) => r(o, _({ modifiers: a }, s)).url;
  for (const o in e.presets) i[o] = (a, s, n) => i(a, s, { ...e.presets[o], ...n });
  return i.options = e, i.getImage = r, i.getMeta = (o, a) => ne(t, o, a), i.getSizes = (o, a) => le(t, o, a), t.$img = i, i;
}
async function ne(e, t, r) {
  const i = $(e, t, { ...r });
  return typeof i.getMeta == "function" ? await i.getMeta() : await ee(e, i.url);
}
function $(e, t, r) {
  var _a, _b;
  if (t && typeof t != "string") throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
  if (!t || t.startsWith("data:")) return { url: t };
  const { setup: i, defaults: o } = se(e, r.provider || e.options.provider), a = i(), s = de(e, r.preset);
  if (t = S(t) ? t : O(t), !a.supportsAlias) {
    for (const p in e.options.alias) if (t.startsWith(p)) {
      const g = e.options.alias[p];
      g && (t = y(g, t.slice(p.length)));
    }
  }
  if (a.validateDomains && S(t)) {
    const p = U(t).host;
    if (!e.options.domains.find((g) => g === p)) return { url: t };
  }
  const n = _(r, s, o), l = { ...n, modifiers: { ...n.modifiers, width: ((_a = n.modifiers) == null ? void 0 : _a.width) ? w(n.modifiers.width) : void 0, height: ((_b = n.modifiers) == null ? void 0 : _b.height) ? w(n.modifiers.height) : void 0 } }, u = a.getImage(t, l, e);
  return u.format || (u.format = l.modifiers.format || ""), u;
}
function se(e, t) {
  const r = e.options.providers[t];
  if (!r) throw new Error("Unknown provider: " + t);
  return r;
}
function de(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function le(e, t, r) {
  var _a, _b, _c, _d, _e;
  const i = w((_a = r.modifiers) == null ? void 0 : _a.width), o = w((_b = r.modifiers) == null ? void 0 : _b.height), a = oe(r.sizes), s = ((_c = r.densities) == null ? void 0 : _c.trim()) ? re(r.densities.trim()) : e.options.densities;
  ie(s);
  const n = i && o ? o / i : 0, l = [], u = [];
  if (Object.keys(a).length >= 1) {
    for (const c in a) {
      const f = P(c, String(a[c]), o, n, e);
      if (f !== void 0) {
        l.push({ size: f.size, screenMaxWidth: f.screenMaxWidth, media: `(max-width: ${f.screenMaxWidth}px)` });
        for (const m of s) u.push({ width: f._cWidth * m, src: I(e, t, r, f, m) });
      }
    }
    ce(l);
  } else for (const c of s) {
    const f = Object.keys(a)[0];
    let m = f ? P(f, String(a[f]), o, n, e) : void 0;
    m === void 0 && (m = { size: "", screenMaxWidth: 0, _cWidth: (_d = r.modifiers) == null ? void 0 : _d.width, _cHeight: (_e = r.modifiers) == null ? void 0 : _e.height }), u.push({ width: c, src: I(e, t, r, m, c) });
  }
  ue(u);
  const p = u[u.length - 1], g = l.length ? l.map((c) => `${c.media ? c.media + " " : ""}${c.size}`).join(", ") : void 0, v = g ? "w" : "x", x = u.map((c) => `${c.src} ${c.width}${v}`).join(", ");
  return { sizes: g, srcset: x, src: p == null ? void 0 : p.src };
}
function P(e, t, r, i, o) {
  const a = o.options.screens && o.options.screens[e] || Number.parseInt(e), s = t.endsWith("vw");
  if (!s && /^\d+$/.test(t) && (t = t + "px"), !s && !t.endsWith("px")) return;
  let n = Number.parseInt(t);
  if (!a || !n) return;
  s && (n = Math.round(n / 100 * a));
  const l = i ? Math.round(n * i) : r;
  return { size: t, screenMaxWidth: a, _cWidth: n, _cHeight: l };
}
function I(e, t, r, i, o) {
  return e.$img(t, { ...r.modifiers, width: i._cWidth ? i._cWidth * o : void 0, height: i._cHeight ? i._cHeight * o : void 0 }, r);
}
function ce(e) {
  var _a;
  e.sort((r, i) => r.screenMaxWidth - i.screenMaxWidth);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.media === t && e.splice(r, 1), t = i.media;
  }
  for (let r = 0; r < e.length; r++) e[r].media = ((_a = e[r + 1]) == null ? void 0 : _a.media) || "";
}
function ue(e) {
  e.sort((r, i) => r.width - i.width);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.width === t && e.splice(r, 1), t = i.width;
  }
}
function k(e) {
  let t;
  return () => t || (t = typeof e == "function" ? e() : e, t);
}
const N = C({ keyMap: { width: "w", height: "h", format: "fm", quality: "q", backgroundColor: "bg", rotate: "rot", mask: "mask", auto: "auto", crop: "crop", brightness: "bri", contrast: "con", exposure: "exp", gamma: "gam", highlight: "high", hueShift: "hue", invert: "invert", saturation: "sat", shadow: "shad", sharpen: "sharp", unsharpMask: "usm", unsharpMaskRadius: "usmrad", vibrance: "vib", blend: "blend", blendAlign: "blend-align", blendAlpha: "blend-alpha", blendColor: "blend-color", blendCrop: "blend-crop", blendFit: "blend-fit", blendHeight: "blend-h", blendMode: "blend-mode", blendPadding: "blend-pad", blendSize: "blend-size", blendWidth: "blend-w", blendXPosition: "blend-x", blendYPosition: "blend-y", padding: "pad", borderBottom: "border-bottom", borderLeft: "border-left", innerBorderRadius: "border-radius-inner", outerBorderRadius: "border-radius", borderRight: "border-right", borderTop: "border-top", borderSizeColor: "border", paddingBottom: "pad-bottom", paddingLeft: "pad-left", paddingRight: "pad-right", paddingTop: "pad-top", paletteColorCount: "colors", colorPaletteExtraction: "palette", cssPrefix: "prefix", expirationTimestamp: "expires", faceIndex: "faceindex", facePadding: "facepad", jsonFaceData: "faces", fillMode: "fill", fillColor: "fill-color", gridColors: "grid-colors", gridSize: "grid-size", transparency: "transparency", focalPointDebug: "fp-debug", focalPointXPosition: "fp-x", focalPointYPosition: "fp-y", focalPointZoom: "fp-z", clientHints: "ch", chromaSubsampling: "chromasub", colorQuantization: "colorquant", colorSpace: "cs", download: "dl", dotsPerInch: "dpi", losslessCompression: "lossless", maskBackgroundColor: "mask-bg", maskCornerRadius: "corner-radius", noiseReductionSharp: "nrs", noiseReductionBound: "nr", pdfPageNumber: "page", pdfAnnotation: "pdf-annotation", pixelDensity: "dpr", orientation: "orient", flipAxis: "flip", aspectRatio: "ar", maximumHeight: "max-h", maximumWidth: "max-w", minimumHeight: "min-h", minimumWidth: "min-w", sourceRectangleRegion: "rect", gaussianBlur: "blur", duotoneAlpha: "duotone-alpha", duotone: "duotone", halftone: "htn", monochrome: "monochrome", pixellate: "px", sepiaTone: "sepia", textAlign: "txt-align", textClippingMode: "txt-clip", textColor: "txt-color", textFitMode: "txt-fit", textFont: "txt-font", textLigatures: "txt-lig", textOutlineColor: "txt-line-color", textOutline: "txt-line", textPadding: "txt-pad", textShadow: "txt-shad", textFontSize: "txt-size", textWidth: "txt-width", textString: "txt", trimColor: "trim-color", trimMeanDifference: "trim-md", trimStandardDeviation: "trim-sd", trimTolerance: "trim-tol", trimImage: "trim", textLeading: "txt-lead", textTracking: "txt-track", typesettingEndpoint: "~text", watermarkAlignment: "mark-align", watermarkAlpha: "mark-alpha", watermarkBaseURL: "mark-base", watermarkFitMode: "mark-fit", watermarkHeight: "mark-h", watermarkPadding: "mark-pad", watermarkRotation: "mark-rot", watermarkScale: "mark-sclae", watermarkTile: "mark-tile", watermarkWidth: "mark-w", watermarkXPosition: "mark-x", watermarkYPosition: "mark-y", watermarkImageURL: "mark" }, valueMap: { fit: { fill: "scale", inside: "max", outside: "min", cover: "crop", contain: "fill", clamp: "clamp", clip: "clip", facearea: "facearea", fillMax: "fillmax" }, format: { gif: "gif", jp2: "jp2", jpg: "jpg", json: "json", jxr: "jxr", pjpg: "pjpg", mp4: "mp4", png: "png", png8: "png8", png32: "png32", webm: "webm", webp: "webp", blurhash: "blurhash" } } }), B = "https://images.unsplash.com/", me = k({ getImage: (e, { modifiers: t, baseURL: r = B }) => {
  const i = N(t);
  return { url: R(W(e, r), j("?" + i)) };
} }), fe = "https://images.prismic.io/", ge = k(() => {
  const { getImage: e } = me();
  return { getImage: (t, { modifiers: r, baseURL: i = fe }, o) => {
    if (t.startsWith(B)) return e(t, { modifiers: r }, o);
    const a = N(r);
    return { url: R(W(t, i), j("?" + a)) };
  } };
}), pe = C({ keyMap: { format: "f", fit: "fit", width: "w", height: "h", resize: "s", quality: "q", background: "b" }, formatter: (e, t) => M(e) + "_" + M(t.toString()) }), he = k({ validateDomains: true, supportsAlias: true, getImage(e, { modifiers: t, baseURL: r }, i) {
  t.width && t.height && (t.resize = `${t.width}x${t.height}`, delete t.width, delete t.height);
  const o = pe(t) || "_";
  return r || (r = y(i.options.nuxt.baseURL, "/_ipx")), { url: y(r, o, F(e).replace(/\/{2,}/g, "/")) };
} }), be = { screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, "2xl": 1536 }, presets: {}, provider: "ipxStatic", domains: [], alias: {}, densities: [1, 2], format: ["webp"], providers: { prismic: { setup: ge, defaults: {} }, ipxStatic: { setup: he, defaults: {} } } }, E = (e) => {
  var _a;
  const t = T(), r = A();
  return r.$img || r._img || (r._img = ae({ ...be, event: (_a = r.ssrContext) == null ? void 0 : _a.event, nuxt: { baseURL: t.app.baseURL }, runtimeConfig: t }));
};
function we(e) {
  var _a;
  (_a = performance == null ? void 0 : performance.mark) == null ? void 0 : _a.call(performance, "mark_feature_usage", { detail: { feature: e } });
}
const ve = (e) => {
  const t = E(), r = h(() => ({ provider: e.provider, preset: e.preset })), i = h(() => ({ width: w(e.width), height: w(e.height), crossorigin: e.crossorigin === true ? "anonymous" : e.crossorigin || void 0, nonce: e.nonce })), o = h(() => ({ ...e.modifiers, width: e.width, height: e.height, format: e.format, quality: e.quality || t.options.quality, background: e.background, fit: e.fit }));
  return { providerOptions: r, normalizedAttrs: i, imageModifiers: o };
}, xe = ["src"], ke = { __name: "NuxtImg", props: { custom: { type: Boolean, required: false }, placeholder: { type: [Boolean, String, Number, Array], required: false }, placeholderClass: { type: String, required: false }, src: { type: String, required: false }, format: { type: String, required: false }, quality: { type: [String, Number], required: false }, background: { type: String, required: false }, fit: { type: String, required: false }, modifiers: { type: Object, required: false }, preset: { type: String, required: false }, provider: { type: null, required: false }, sizes: { type: [String, Object], required: false }, densities: { type: String, required: false }, preload: { type: [Boolean, Object], required: false }, width: { type: [String, Number], required: false }, height: { type: [String, Number], required: false }, crossorigin: { type: [String, Boolean], required: false }, nonce: { type: String, required: false } }, emits: ["load", "error"], setup(e, { emit: t }) {
  const r = e, i = t, o = E(), { providerOptions: a, normalizedAttrs: s, imageModifiers: n } = ve(r), l = h(() => o.getSizes(r.src, { ...a.value, sizes: r.sizes, densities: r.densities, modifiers: n.value })), u = G(false), p = Q(), g = h(() => ({ ...s.value, "data-nuxt-img": "", ...!r.placeholder || u.value ? { sizes: l.value.sizes, srcset: l.value.srcset } : {}, ...p })), v = h(() => {
    if (u.value) return false;
    const d = r.placeholder === "" ? [10, 10] : r.placeholder;
    if (!d) return false;
    if (typeof d == "string") return d;
    const [b = 10, L = b, H = 50, D = 3] = Array.isArray(d) ? d : typeof d == "number" ? [d] : [];
    return o(r.src, { ...n.value, width: b, height: L, quality: H, blur: D }, a.value);
  }), x = h(() => r.sizes ? l.value.src : o(r.src, n.value, a.value)), c = h(() => v.value || x.value), f = A().isHydrating, m = V("imgEl");
  return X(() => {
    if (v.value || r.custom) {
      const d = new Image();
      x.value && (d.src = x.value), r.sizes && (d.sizes = l.value.sizes || "", d.srcset = l.value.srcset), d.onload = (b) => {
        u.value = true, i("load", b);
      }, d.onerror = (b) => {
        i("error", b);
      }, we("nuxt-image");
      return;
    }
    m.value && (m.value.complete && f && (m.value.getAttribute("data-error") ? i("error", new Event("error")) : i("load", new Event("load"))), m.value.onload = (d) => {
      i("load", d);
    }, m.value.onerror = (d) => {
      i("error", d);
    });
  }), (d, b) => e.custom ? Y(d.$slots, "default", Z(z({ key: 1 }, { imgAttrs: g.value, isLoaded: u.value, src: c.value }))) : (J(), K("img", z({ key: 0, ref_key: "imgEl", ref: m, class: v.value ? e.placeholderClass : void 0 }, g.value, { src: c.value }), null, 16, xe));
} };
export {
  ke as _
};
