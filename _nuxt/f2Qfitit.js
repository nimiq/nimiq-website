import { d as L, p as b, q as V, s as j, v as O, x as l, j as d, y as R, k as g, b as z, w as E, u as i, l as G, z as J, o as K, a as Z, A as F } from "./g1xKa6TI.js";
import { c as Q } from "./CeHn5qUl.js";
import { g as k, h as W } from "./B2NqqgPK.js";
import { u as X } from "./QmSsucTN.js";
import { s as Y } from "./idgHlp0U.js";
const rt = L({ __name: "[...uid]", async setup(tt) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let m, f;
  const h = b().params, c = typeof h.uid == "string" ? [] : (h == null ? void 0 : h.uid.filter(Boolean)) || [], P = c.length >= 2, e = c.at(-1) || "home", p = e === "home", { showDrafts: y } = V().public, x = b(), { client: D } = j(), { data: t } = ([m, f] = O(() => J(`prismic-page-${c.join("-")}`, () => D.getByUID("page", e).catch((r) => {
    throw console.error(`Page with UID "${e}" not found in Prismic:`, r), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }))), m = await m, f(), m);
  if (!t.value) throw console.error(`Page with UID "${e}" not found`), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (!y && ((_a = t.value) == null ? void 0 : _a.data.draft)) throw console.error(`Page with UID "${e}" is a draft and showDraft is set to \`${y}\``), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (t.value.uid !== e) throw console.error(`Page with UID "${e}" not found: ${JSON.stringify(t.value)}`), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (P) {
    const r = ((_b = t.value) == null ? void 0 : _b.data.parents.length) === c.length - 1, v = (_c = t.value) == null ? void 0 : _c.data.parents.every((u, A) => u.uid === c[A]);
    if (!r || !v) throw l({ statusCode: 404, statusMessage: `The page with UID "${e}" has incorrect parent structure`, fatal: true });
  }
  const $ = d(() => {
    var _a2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data.darkHeader) || p || e === "supersimpleswap";
  }), S = d(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = (_a2 = t.value) == null ? void 0 : _a2.data.slices.at(-1)) == null ? void 0 : _b2.primary) == null ? void 0 : _c2.bgColor;
  }), I = d(() => {
    var _a2, _b2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data) && "draft" in t.value.data && ((_b2 = t.value) == null ? void 0 : _b2.data.draft);
  }), M = p, a = t.value.data.slices.at(0), { meta_title: U, meta_description: q, meta_image: o, meta_keywords: N } = t.value.data, B = a ? k(((_d = a.primary) == null ? void 0 : _d.title) || ((_e = a.primary) == null ? void 0 : _e.headline)) : void 0, H = a ? k(((_f = a.primary) == null ? void 0 : _f.description) || ((_g = a.primary) == null ? void 0 : _g.subline)) : void 0, n = U || B || "Nimiq";
  let s = q || H || "";
  if (p) {
    const { cryptoMapLocationsCount: r } = X();
    s = s.replace(/\{\{\s*locations\s*\}\}/, r.value.toString());
  }
  const w = R(), _ = `${w.url}${x.path}`, T = N || "Nimiq, cryptocurrency, blockchain, digital money, payments";
  return g({ link: [{ rel: "canonical", href: _ }] }), g({ title: n, meta: [{ name: "description", content: s }, { name: "keywords", content: T }, { property: "og:title", content: n }, { property: "og:description", content: s }, { property: "og:url", content: _ }, { property: "og:type", content: "website" }, { property: "og:site_name", content: w.name }, { property: "og:locale", content: "en_US" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: n }, { name: "twitter:description", content: s }, { name: "twitter:site", content: "@nimiq" }, { name: "twitter:creator", content: "@nimiq" }, { name: "author", content: "Nimiq Team" }, { name: "publisher", content: "Nimiq" }] }), W(o) && (g({ meta: [{ property: "og:image", content: o.url }, { property: "og:image:alt", content: n }, { property: "og:image:width", content: (_h = o.dimensions) == null ? void 0 : _h.width }, { property: "og:image:height", content: (_i = o.dimensions) == null ? void 0 : _i.height }, { name: "twitter:image", content: o.url }, { name: "twitter:image:alt", content: n }] }), Y({ title: n, subline: s, image: o })), (r, v) => {
    const C = F, u = G;
    return K(), z(u, { "footer-bg-color": i(S), "dark-header": i($), draft: i(I), "show-socials-hexagon-bg": i(M) }, { default: E(() => {
      var _a2;
      return [Z(C, { wrapper: "main", slices: ((_a2 = i(t)) == null ? void 0 : _a2.data.slices) ?? [], components: i(Q) }, null, 8, ["slices", "components"])];
    }), _: 1 }, 8, ["footer-bg-color", "dark-header", "draft", "show-socials-hexagon-bg"]);
  };
} });
export {
  rt as default
};
