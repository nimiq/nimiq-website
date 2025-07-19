import { _ as A } from "./nh4JscoW.js";
import { d as B, s as q, v as z, q as $, x as p, k as I, B as M, C as P, b as N, f as R, u as e, w as d, l as S, z as j, o as T, e as r, a, D as V, t as E, E as O, A as Z, i as H } from "./g1xKa6TI.js";
import { g as L, A as U } from "./CUsdYpwO.js";
import { _ as F, m as G } from "./B1wYQ_s1.js";
import { c as J } from "./CeHn5qUl.js";
import { u as K } from "./Bu-myvbS.js";
import { s as Q } from "./idgHlp0U.js";
import { u as W, a as X } from "./k4OXxJR1.js";
import "./DpIe18Wz.js";
import "./Co9d64pR.js";
import "./DUznQD6O.js";
import "./DRAR02aM.js";
import "./nnhf449w.js";
import "./B2NqqgPK.js";
import "./DjC4KgUf.js";
import "./Qjh2__OP.js";
const Y = { "data-section": "", "max-w": "$nq-prose-max-width", "f-pt": "96/136", px: "32 lg:64" }, tt = { "text-neutral-800": "" }, et = B({ __name: "[post]", async setup(at) {
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
    const h = A, u = V, y = U, b = O, v = Z, C = F, D = S;
    return e(t) ? (T(), N(D, { key: 0 }, { default: d(() => {
      var _a2;
      return [r("div", { ref_key: "articleRef", ref: m }, [a(h, { draft: e(w), "bottom-32": "", "right-32": "", fixed: "", "z-102": "" }, null, 8, ["draft"]), r("header", Y, [a(u, { wrapper: "h1", field: e(t).data.title, style: { "--nq-font-size-min": "32", "--nq-font-size-max": "40" }, "view-transition-post-title": "" }, null, 8, ["field"]), a(u, { wrapper: "p", "text-neutral-800": "", field: e(t).data.subline, style: { "--nq-font-size-min": "18", "--nq-font-size-max": "20" } }, null, 8, ["field"]), a(y, { mt: "18 lg:24", date: new Date(e(t).last_publication_date), authors: e(t).data.authors.map((k) => k.name).join(", "), "md:justify-center": "" }, { after: d(() => [c[0] || (c[0] = r("div", { "rounded-full": "", "bg-neutral-500": "", "size-4": "", hidden: "", "sm:block": "" }, null, -1)), r("p", tt, E(e(g)) + " min ", 1)]), _: 1 }, 8, ["date", "authors"]), a(b, { field: e(t).data.image, "mx-auto": "", "mt-104": "", "rounded-8": "", "w-full": "", "object-contain": "", "view-transition-post-img": "" }, null, 8, ["field"])])], 512), a(v, { slices: ((_a2 = e(t)) == null ? void 0 : _a2.data.body) ?? [], components: e(J) }, null, 8, ["slices", "components"]), a(C)];
    }), _: 1 })) : R("", true);
  };
} }), ht = H(et, [["__scopeId", "data-v-0adc380e"]]);
export {
  ht as default
};
