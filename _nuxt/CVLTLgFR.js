import { d as A, p as v, q as L, s as V, v as j, x as l, j as g, k as O, y as C, b as R, w as z, u as n, l as E, z as G, o as J, a as K, A as W } from "./gdLxT4Lf.js";
import { c as Z } from "./Bvmk-0R2.js";
import { g as I, h as F } from "./D7zdd4-D.js";
import { u as Q } from "./YC087HFc.js";
import { s as X } from "./B56Ni7Ok.js";
const it = A({ __name: "[...uid]", async setup(Y) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let u, p;
  const h = v().params, c = typeof h.uid == "string" ? [] : (h == null ? void 0 : h.uid.filter(Boolean)) || [], b = c.length >= 2, e = c.at(-1) || "home", m = e === "home", { showDrafts: f } = L().public, D = v(), { client: P } = V(), { data: t } = ([u, p] = j(() => G(`prismic-page-${c.join("-")}`, () => P.getByUID("page", e).catch((r) => {
    throw console.error(`Page with UID "${e}" not found in Prismic:`, r), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }))), u = await u, p(), u);
  if (!t.value) throw console.error(`Page with UID "${e}" not found`), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (!f && ((_a = t.value) == null ? void 0 : _a.data.draft)) throw console.error(`Page with UID "${e}" is a draft and showDraft is set to \`${f}\``), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (t.value.uid !== e) throw console.error(`Page with UID "${e}" not found: ${JSON.stringify(t.value)}`), l({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (b) {
    const r = ((_b = t.value) == null ? void 0 : _b.data.parents.length) === c.length - 1, _ = (_c = t.value) == null ? void 0 : _c.data.parents.every((d, H) => d.uid === c[H]);
    if (!r || !_) throw l({ statusCode: 404, statusMessage: `The page with UID "${e}" has incorrect parent structure`, fatal: true });
  }
  const S = g(() => {
    var _a2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data.darkHeader) || m || e === "supersimpleswap";
  }), k = g(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = (_a2 = t.value) == null ? void 0 : _a2.data.slices.at(-1)) == null ? void 0 : _b2.primary) == null ? void 0 : _c2.bgColor;
  }), x = g(() => {
    var _a2, _b2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data) && "draft" in t.value.data && ((_b2 = t.value) == null ? void 0 : _b2.data.draft);
  }), M = m, a = t.value.data.slices.at(0), { meta_title: $, meta_description: q, meta_image: s, meta_keywords: N } = t.value.data, U = a ? I(((_d = a.primary) == null ? void 0 : _d.title) || ((_e = a.primary) == null ? void 0 : _e.headline)) : void 0, T = a ? I(((_f = a.primary) == null ? void 0 : _f.description) || ((_g = a.primary) == null ? void 0 : _g.subline)) : void 0, o = $ || U || "Nimiq";
  let i = q || T || "";
  if (m) {
    const { cryptoMapLocationsCount: r } = Q();
    i = i.replace(/\{\{\s*locations\s*\}\}/, r.value.toString());
  }
  const w = `https://nimiq.com${D.path}`, B = N || "Nimiq, cryptocurrency, blockchain, digital money, payments";
  return O({ link: [{ rel: "canonical", href: w }] }), C({ title: o, description: i, keywords: B, ogTitle: o, ogDescription: i, ogUrl: w, ogType: "website", ogSiteName: "Nimiq", ogLocale: "en_US", twitterCard: "summary_large_image", twitterTitle: o, twitterDescription: i, twitterSite: "@nimiq", twitterCreator: "@nimiq", author: "Nimiq Team", publisher: "Nimiq" }), F(s) && (C({ ogImage: s.url, ogImageAlt: o, ogImageWidth: (_h = s.dimensions) == null ? void 0 : _h.width, ogImageHeight: (_i = s.dimensions) == null ? void 0 : _i.height, twitterImage: s.url, twitterImageAlt: o }), X({ title: o, subline: i, image: s })), (r, _) => {
    const y = W, d = E;
    return J(), R(d, { "footer-bg-color": n(k), "dark-header": n(S), draft: n(x), "show-socials-hexagon-bg": n(M) }, { default: z(() => {
      var _a2;
      return [K(y, { wrapper: "main", slices: ((_a2 = n(t)) == null ? void 0 : _a2.data.slices) ?? [], components: n(Z) }, null, 8, ["slices", "components"])];
    }), _: 1 }, 8, ["footer-bg-color", "dark-header", "draft", "show-socials-hexagon-bg"]);
  };
} });
export {
  it as default
};
