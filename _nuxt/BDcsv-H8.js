import { _ as D } from "./CDi0xZhw.js";
import { d as k, q, s as z, p as $, v as p, j as I, A as M, B as P, b as j, f as N, u as e, o as R, w as d, e as r, a, C as S, t as T, D as V, y as O, k as Z, z as E } from "./C95QRNzc.js";
import { g as H, A as L } from "./Dlnh2lNC.js";
import { _ as U, m as F } from "./Po1_02wN.js";
import { c as G } from "./D3tACF25.js";
import { u as J } from "./CoMN0Xhs.js";
import { s as K } from "./PoXG0q01.js";
import { u as Q } from "./DEpc-rVb.js";
import { _ as W } from "./DlAUqK2U.js";
import "./B6YpvMVi.js";
import "./UtPS5osl.js";
import "./DCDih-ug.js";
import "./BhpWC2zv.js";
import "./CCkBGt8y.js";
import "./CVc7iRBp.js";
import "./BPgVFFXt.js";
const X = { "data-section": "", "max-w": "$nq-prose-max-width", "f-pt": "96/136", px: "32 lg:64" }, Y = { "text-neutral-800": "" }, tt = k({ __name: "[post]", async setup(et) {
  var _a, _b;
  let s, i;
  const n = J("post"), { client: _ } = q(), { data: t } = ([s, i] = z(() => E(`prismic-post-${n.value}`, () => _.getByUID("blog_page", n.value).catch((l) => {
    throw console.error(`Blog post with slug "${n.value}" not found:`, l), p({ statusCode: 404, statusMessage: "Article not found", fatal: true });
  }))), s = await s, i(), s), { showDrafts: f } = $().public;
  if (!t.value || !f && ((_a = t.value) == null ? void 0 : _a.data.draft)) throw console.error(`Blog post with slug "${n.value}" not found`), p({ statusCode: 404, statusMessage: "Article not found", fatal: true });
  const { readingTime: g, meta: o, draft: w, image: x } = H(t.value);
  I(o), M({ ...o, twitterTitle: o.title, twitterDescription: o.description, twitterCard: "summary_large_image" }), K({ title: o.title, subline: o.description, image: x });
  const m = P();
  return Q(m, () => {
    F(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), ((_b = t.value.data.body.at(0)) == null ? void 0 : _b.primary) && (t.value.data.body[0].primary.bgColor = "grey"), (l, c) => {
    const y = D, u = S, b = L, h = V, v = O, C = U, A = Z;
    return e(t) ? (R(), j(A, { key: 0 }, { default: d(() => {
      var _a2;
      return [r("div", { ref_key: "articleRef", ref: m }, [a(y, { draft: e(w), "bottom-32": "", "right-32": "", fixed: "", "z-102": "" }, null, 8, ["draft"]), r("header", X, [a(u, { wrapper: "h1", field: e(t).data.title, style: { "--nq-font-size-min": "32", "--nq-font-size-max": "40" }, "view-transition-post-title": "" }, null, 8, ["field"]), a(u, { wrapper: "p", "text-neutral-800": "", field: e(t).data.subline, style: { "--nq-font-size-min": "18", "--nq-font-size-max": "20" } }, null, 8, ["field"]), a(b, { mt: "18 lg:24", date: new Date(e(t).last_publication_date), authors: e(t).data.authors.map((B) => B.name).join(", "), "md:justify-center": "" }, { after: d(() => [c[0] || (c[0] = r("div", { "rounded-full": "", "bg-neutral-500": "", "size-4": "", hidden: "", "sm:block": "" }, null, -1)), r("p", Y, T(e(g)) + " min ", 1)]), _: 1 }, 8, ["date", "authors"]), a(h, { field: e(t).data.image, "mx-auto": "", "mt-104": "", "rounded-8": "", "w-full": "", "object-contain": "", "view-transition-post-img": "" }, null, 8, ["field"])])], 512), a(v, { slices: ((_a2 = e(t)) == null ? void 0 : _a2.data.body) ?? [], components: e(G) }, null, 8, ["slices", "components"]), a(C)];
    }), _: 1 })) : N("", true);
  };
} }), xt = W(tt, [["__scopeId", "data-v-1b2ece8d"]]);
export {
  xt as default
};
