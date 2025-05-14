import { _ as A } from "./DeL1xAR-.js";
import { d as B, s as q, v as z, q as $, x as p, k as I, A as M, B as P, b as N, f as R, u as e, w as d, l as S, y as j, o as T, e as r, a, C as V, t as O, D as Z, z as E, i as H } from "./7tyaNgEA.js";
import { g as L, A as U } from "./BcIl7GhH.js";
import { _ as F } from "./BFSEKnqQ.js";
import { m as G } from "./bWEtUbjf.js";
import { c as J } from "./CpH_97JW.js";
import { u as K } from "./BlNg8BrV.js";
import { s as Q } from "./DTqfM-cU.js";
import { u as W, a as X } from "./-SGvg42Q.js";
import "./AcnOGanz.js";
import "./DptPnj5y.js";
import "./6j_b9UX3.js";
import "./BqwFAzj-.js";
import "./DSYs-LpM.js";
import "./CD5FwXF0.js";
import "./C3sJ3Yu7.js";
import "./8Lad1M9Y.js";
const Y = { "data-section": "", "max-w": "$nq-prose-max-width", pt: "148 md:153 lg:160", px: "32 lg:64" }, tt = { "text-neutral-800": "" }, et = B({ __name: "[post]", async setup(at) {
  var _a, _b;
  let s, i;
  const n = K("post"), { client: _ } = q(), { data: t } = ([s, i] = z(() => j(`prismic-post-${n.value}`, () => _.getByUID("blog_page", n.value).catch((l) => {
    throw console.error(`Blog post with slug "${n.value}" not found:`, l), p({ statusCode: 404, statusMessage: "Article not found", fatal: true });
  }))), s = await s, i(), s), { showDrafts: f } = $().public;
  if (!t.value || !f && ((_a = t.value) == null ? void 0 : _a.data.draft)) throw console.error(`Blog post with slug "${n.value}" not found`), p({ statusCode: 404, statusMessage: "Article not found", fatal: true });
  const { readingTime: g, meta: o, draft: w, image: x } = L(t.value);
  I(o), M({ ...o, twitterTitle: o.title, twitterDescription: o.description, twitterCard: "summary_large_image" }), Q({ title: o.title, subline: o.description, image: x });
  const m = P();
  return W(m, () => {
    G(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), X(), ((_b = t.value.data.body.at(0)) == null ? void 0 : _b.primary) && (t.value.data.body[0].primary.bgColor = "grey"), (l, c) => {
    const y = A, u = V, h = U, b = Z, v = E, C = F, D = S;
    return e(t) ? (T(), N(D, { key: 0 }, { default: d(() => {
      var _a2;
      return [r("div", { ref_key: "articleRef", ref: m }, [a(y, { draft: e(w), fixed: "", "bottom-32": "", "right-32": "", "z-102": "" }, null, 8, ["draft"]), r("header", Y, [a(u, { wrapper: "h1", field: e(t).data.title, style: { "--nq-font-size-min": "32", "--nq-font-size-max": "40" }, "view-transition-post-title": "" }, null, 8, ["field"]), a(u, { wrapper: "p", "text-neutral-800": "", field: e(t).data.subline, style: { "--nq-font-size-min": "18", "--nq-font-size-max": "20" } }, null, 8, ["field"]), a(h, { mt: "18 lg:24", date: new Date(e(t).last_publication_date), authors: e(t).data.authors.map((k) => k.name).join(", "), "md:justify-center": "" }, { after: d(() => [c[0] || (c[0] = r("div", { hidden: "", "size-4": "", "rounded-full": "", "bg-neutral-500": "", "sm:block": "" }, null, -1)), r("p", tt, O(e(g)) + " min ", 1)]), _: 1 }, 8, ["date", "authors"]), a(b, { field: e(t).data.image, "mx-auto": "", "mt-104": "", "w-full": "", "rounded-8": "", "object-contain": "", "view-transition-post-img": "" }, null, 8, ["field"])])], 512), a(v, { slices: ((_a2 = e(t)) == null ? void 0 : _a2.data.body) ?? [], components: e(J) }, null, 8, ["slices", "components"]), a(C)];
    }), _: 1 })) : R("", true);
  };
} }), ht = H(et, [["__scopeId", "data-v-203d055c"]]);
export {
  ht as default
};
