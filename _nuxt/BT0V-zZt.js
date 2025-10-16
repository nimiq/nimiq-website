import { d as k, u as q, w as N, c as S, a as l, b as s, e as T, o as $, f as B, g as I, _ as M, h as i, i as P } from "./B8biU-UE.js";
import { c as D } from "./ClMfwJO2.js";
import { u as H } from "./DWbXAw--.js";
import { g as p, h as L } from "./DRbUa3ZN.js";
import { u as O } from "./Dci1pJeU.js";
import { s as U } from "./Mv-fplKT.js";
const A = "https://nimiq.com", G = k({ __name: "index", async setup(E) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let r, c;
  const d = q(), { data: t } = ([r, c] = N(() => H("home")), r = await r, c(), r);
  if (((_a = t.value) == null ? void 0 : _a.uid) !== "home") throw console.error(`Home page not found: ${JSON.stringify(t.value)}`), S({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const u = l(() => {
    var _a2, _b2, _c2;
    if (((_a2 = t.value) == null ? void 0 : _a2.data) && "slices" in t.value.data) return (_c2 = (_b2 = t.value.data.slices.at(-1)) == null ? void 0 : _b2.primary) == null ? void 0 : _c2.bgColor;
  }), g = l(() => {
    var _a2, _b2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data) && "draft" in t.value.data && ((_b2 = t.value) == null ? void 0 : _b2.data.draft);
  }), e = ((_b = t.value) == null ? void 0 : _b.data) && "slices" in t.value.data ? t.value.data.slices.at(0) : void 0, { meta_title: y, meta_description: _, meta_image: o, meta_keywords: f } = t.value.data, h = e ? p(((_c = e.primary) == null ? void 0 : _c.title) || ((_d = e.primary) == null ? void 0 : _d.headline)) : void 0, w = e ? p(((_e = e.primary) == null ? void 0 : _e.description) || ((_f = e.primary) == null ? void 0 : _f.subline)) : void 0, a = y || h || "Nimiq";
  let n = _ || w || "";
  const { cryptoMapLocationsCount: v } = O();
  n = n.replace(/\{\{\s*locations\s*\}\}/, v.value.toString());
  const m = `${A}${d.path}`, b = f || "Nimiq, cryptocurrency, blockchain, digital money, payments";
  return s({ link: [{ rel: "canonical", href: m }] }), s({ title: a, meta: [{ name: "description", content: n }, { name: "keywords", content: b }, { property: "og:title", content: a }, { property: "og:description", content: n }, { property: "og:url", content: m }, { property: "og:type", content: "website" }, { property: "og:site_name", content: "Nimiq" }, { property: "og:locale", content: "en_US" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: a }, { name: "twitter:description", content: n }, { name: "twitter:site", content: "@nimiq" }, { name: "twitter:creator", content: "@nimiq" }, { name: "author", content: "Nimiq Team" }, { name: "publisher", content: "Nimiq" }] }), L(o) && s({ meta: [{ property: "og:image", content: o.url }, { property: "og:image:alt", content: a }, { property: "og:image:width", content: (_g = o.dimensions) == null ? void 0 : _g.width }, { property: "og:image:height", content: (_h = o.dimensions) == null ? void 0 : _h.height }, { name: "twitter:image", content: o.url }, { name: "twitter:image:alt", content: a }] }), U({ title: a, subline: n, image: o, type: "home" }), (J, K) => {
    const x = M, C = P;
    return $(), T(C, { "footer-bg-color": i(u), draft: i(g), "show-socials-hexagon-bg": "", "dark-header": "" }, { default: B(() => {
      var _a2;
      return [I(x, { wrapper: "main", slices: (((_a2 = i(t)) == null ? void 0 : _a2.data) && "slices" in i(t).data ? i(t).data.slices : []) ?? [], components: i(D) }, null, 8, ["slices", "components"])];
    }), _: 1 }, 8, ["footer-bg-color", "draft"]);
  };
} });
export {
  G as default
};
