import { _ as k } from "./D2oR6gL8.js";
import { d as A, q as B, s as q, p as z, v as p, x as M, A as $, B as I, b as P, f as N, u as e, w as d, k as R, y as S, o as j, e as n, a, C as T, t as V, D as Z, z as E, i as H } from "./ClGJWWej.js";
import { g as L, A as O } from "./aGufb5sz.js";
import { _ as U } from "./zyrJ5Oe-.js";
import { m as F } from "./bWEtUbjf.js";
import { c as G } from "./DQfM3PGm.js";
import { u as J } from "./B0V233La.js";
import { u as K, a as Q } from "./CEBR9iVI.js";
import "./BVy4Ey-L.js";
import "./ZXfttXAr.js";
import "./DsoEoSLB.js";
import "./DvG5VWlW.js";
import "./xLWJwwMd.js";
import "./SvaN8giD.js";
import "./Dxc61GTl.js";
import "./YKo2rOHu.js";
const W = { "data-section": "", "max-w": "$nq-prose-max-width", pt: "148 md:153 lg:160", px: "32 lg:64" }, X = { "text-neutral-800": "" }, Y = A({ __name: "[post]", async setup(tt) {
  var _a, _b;
  let o, i;
  const r = J("post"), { client: _ } = B(), { data: t } = ([o, i] = q(() => S("blog_page", () => _.getByUID("blog_page", r.value).catch((l) => {
    throw console.error(`Blog post with slug "${r.value}" not found:`, l), p({ statusCode: 404, statusMessage: "Article not found", fatal: true });
  }))), o = await o, i(), o), { showDrafts: f } = z().public;
  if (!t.value || !f && ((_a = t.value) == null ? void 0 : _a.data.draft)) throw console.error(`Blog post with slug "${r.value}" not found`), p({ statusCode: 404, statusMessage: "Article not found", fatal: true });
  const { readingTime: g, meta: s, draft: w } = L(t.value);
  M(s), $({ ...s, twitterTitle: s.title, twitterDescription: s.description, twitterCard: "summary_large_image" });
  const m = I();
  return K(m, () => {
    F(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), Q(), ((_b = t.value.data.body.at(0)) == null ? void 0 : _b.primary) && (t.value.data.body[0].primary.bgColor = "grey"), (l, c) => {
    const x = k, u = T, y = O, b = Z, h = E, v = U, C = R;
    return e(t) ? (j(), P(C, { key: 0 }, { default: d(() => {
      var _a2;
      return [n("div", { ref_key: "articleRef", ref: m }, [a(x, { draft: e(w), fixed: "", "bottom-32": "", "right-32": "", "z-102": "" }, null, 8, ["draft"]), n("header", W, [a(u, { wrapper: "h1", field: e(t).data.title, style: { "--nq-font-size-min": "32", "--nq-font-size-max": "40" }, "view-transition-post-title": "" }, null, 8, ["field"]), a(u, { wrapper: "p", "text-neutral-800": "", field: e(t).data.subline, style: { "--nq-font-size-min": "18", "--nq-font-size-max": "20" } }, null, 8, ["field"]), a(y, { mt: "18 lg:24", date: new Date(e(t).last_publication_date), authors: e(t).data.authors.map((D) => D.name).join(", "), "md:justify-center": "" }, { after: d(() => [c[0] || (c[0] = n("div", { hidden: "", "size-4": "", "rounded-full": "", "bg-neutral-500": "", "sm:block": "" }, null, -1)), n("p", X, V(e(g)) + " min ", 1)]), _: 1 }, 8, ["date", "authors"]), a(b, { field: e(t).data.image, "mx-auto": "", "mt-104": "", "w-full": "", "rounded-8": "", "object-contain": "", "view-transition-post-img": "" }, null, 8, ["field"])])], 512), a(h, { slices: ((_a2 = e(t)) == null ? void 0 : _a2.data.body) ?? [], components: e(G) }, null, 8, ["slices", "components"]), a(v)];
    }), _: 1 })) : N("", true);
  };
} }), wt = H(Y, [["__scopeId", "data-v-afbc996e"]]);
export {
  wt as default
};
