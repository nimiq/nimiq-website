import { _ as v } from "./ClrY7JMF.js";
import { d as b, A as m, e as x, o as I } from "./BSLliBk6.js";
const S = "assets/images/prismic";
function w(e, t) {
  if (!(t == null ? void 0 : t.includes("prismic"))) return t;
  const s = F(t.split("/").pop() || "image");
  return `${e.replace(/\/$/, "")}/${S}/${s}`;
}
function $(e, t) {
  const s = { ...t };
  t.url && (s.url = w(e, t.url));
  const i = ["Lg", "Md", "Sm", "Xs"];
  for (const n of i) {
    const r = t[n];
    (r == null ? void 0 : r.url) && (s[n] = { ...r, url: w(e, r.url) });
  }
  return s;
}
function A(e, t) {
  var _a, _b;
  const s = e.url || "", i = [];
  s && ((_a = e.dimensions) == null ? void 0 : _a.width) && i.push(`${s} ${e.dimensions.width}w`);
  const n = ["Xs", "Sm", "Md", "Lg"];
  for (const r of n) {
    const o = e[r];
    (o == null ? void 0 : o.url) && ((_b = o.dimensions) == null ? void 0 : _b.width) && i.push(`${o.url} ${o.dimensions.width}w`);
  }
  return { src: s, srcSet: i.join(", ") };
}
function F(e) {
  const t = e.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)/i);
  if (t) {
    const s = e.indexOf(t[0]);
    e = e.substring(0, s + t[0].length);
  }
  return e.replace(/%([0-9A-F]{2})/gi, (s, i) => {
    const n = String.fromCharCode(Number.parseInt(i, 16));
    return /[\w.-]/.test(n) ? n : "_";
  }).replace(/[^\w.-]/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "") || "image";
}
const P = b({ __name: "ProxiedPrismicImage", props: { field: {}, imgixParams: {}, alt: {}, fallbackAlt: {}, widths: {}, pixelDensities: {}, width: {}, height: {} }, setup(e) {
  var _a, _b;
  const t = e, { baseUrl: s } = m().public, { components: i } = m().public.prismic, { environment: n } = m().public, r = n.isInternalDynamic;
  let o, d;
  if (r) o = t.field.url || "", d = void 0;
  else {
    const f = $(s, t.field);
    t.widths === "defaults" ? i == null ? void 0 : i.imageWidthSrcSetDefaults : Array.isArray(t.widths) && t.widths;
    const h = A(f);
    o = h.src, d = h.srcSet;
  }
  const p = t.field.dimensions ? t.field.dimensions.width / t.field.dimensions.height : 1, a = typeof t.width == "string" ? Number.parseInt(t.width) : t.width ?? ((_a = t.field.dimensions) == null ? void 0 : _a.width), l = typeof t.height == "string" ? Number.parseInt(t.height) : t.height ?? ((_b = t.field.dimensions) == null ? void 0 : _b.height);
  let g = a, u = l;
  a && !l ? u = Math.round(a / p) : !a && l && (g = Math.round(l * p));
  const c = { src: o, srcset: r ? void 0 : d, alt: t.alt ?? t.field.alt ?? t.fallbackAlt ?? "", width: g, height: u };
  return (f, h) => {
    const _ = v;
    return I(), x(_, { src: c.src, srcset: c.srcset, alt: c.alt, width: c.width, height: c.height }, null, 8, ["src", "srcset", "alt", "width", "height"]);
  };
} }), D = Object.assign(P, { __name: "ProxiedPrismicImage" });
export {
  D as _
};
