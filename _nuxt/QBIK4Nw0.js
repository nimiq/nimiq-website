import { d as P, u as p, c as u, w as S, a as c, b as m, e as $, o as H, f as I, g as T, _ as B, h as e, i as D } from "./B8biU-UE.js";
import { c as U } from "./ClMfwJO2.js";
import { u as M } from "./DWbXAw--.js";
import { g, h as O } from "./DRbUa3ZN.js";
import { s as A } from "./Mv-fplKT.js";
const E = "https://nimiq.com", G = P({ __name: "[uid]", async setup(J) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let i, l;
  const r = p().params.uid;
  if (!r) throw u({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const f = p(), { data: t } = ([i, l] = S(() => M(r)), i = await i, l(), i);
  if (((_a = t.value) == null ? void 0 : _a.uid) !== r) throw console.error(`Page with UID "${r}" not found: ${JSON.stringify(t.value)}`), u({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const _ = c(() => {
    var _a2;
    return (((_a2 = t.value) == null ? void 0 : _a2.data) && "darkHeader" in t.value.data ? t.value.data.darkHeader : false) || r === "supersimpleswap";
  }), y = c(() => {
    var _a2, _b2, _c2;
    if (((_a2 = t.value) == null ? void 0 : _a2.data) && "slices" in t.value.data) return (_c2 = (_b2 = t.value.data.slices.at(-1)) == null ? void 0 : _b2.primary) == null ? void 0 : _c2.bgColor;
  }), h = c(() => {
    var _a2, _b2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data) && "draft" in t.value.data && ((_b2 = t.value) == null ? void 0 : _b2.data.draft);
  }), a = ((_b = t.value) == null ? void 0 : _b.data) && "slices" in t.value.data ? t.value.data.slices.at(0) : void 0, { meta_title: w, meta_description: v, meta_image: o, meta_keywords: k } = t.value.data, b = a ? g(((_c = a.primary) == null ? void 0 : _c.title) || ((_d = a.primary) == null ? void 0 : _d.headline)) : void 0, q = a ? g(((_e = a.primary) == null ? void 0 : _e.description) || ((_f = a.primary) == null ? void 0 : _f.subline)) : void 0, n = w || b || "Nimiq", s = v || q || "", d = `${E}${f.path}`, N = k || "Nimiq, cryptocurrency, blockchain, digital money, payments";
  return m({ link: [{ rel: "canonical", href: d }] }), m({ title: n, meta: [{ name: "description", content: s }, { name: "keywords", content: N }, { property: "og:title", content: n }, { property: "og:description", content: s }, { property: "og:url", content: d }, { property: "og:type", content: "website" }, { property: "og:site_name", content: "Nimiq" }, { property: "og:locale", content: "en_US" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: n }, { name: "twitter:description", content: s }, { name: "twitter:site", content: "@nimiq" }, { name: "twitter:creator", content: "@nimiq" }, { name: "author", content: "Nimiq Team" }, { name: "publisher", content: "Nimiq" }] }), O(o) && m({ meta: [{ property: "og:image", content: o.url }, { property: "og:image:alt", content: n }, { property: "og:image:width", content: (_g = o.dimensions) == null ? void 0 : _g.width }, { property: "og:image:height", content: (_h = o.dimensions) == null ? void 0 : _h.height }, { name: "twitter:image", content: o.url }, { name: "twitter:image:alt", content: n }] }), A({ title: n, subline: s, image: o, type: "page" }), (L, R) => {
    const x = B, C = D;
    return H(), $(C, { "footer-bg-color": e(y), "dark-header": e(_), draft: e(h) }, { default: I(() => {
      var _a2;
      return [T(x, { wrapper: "main", slices: (((_a2 = e(t)) == null ? void 0 : _a2.data) && "slices" in e(t).data ? e(t).data.slices : []) ?? [], components: e(U) }, null, 8, ["slices", "components"])];
    }), _: 1 }, 8, ["footer-bg-color", "dark-header", "draft"]);
  };
} });
export {
  G as default
};
