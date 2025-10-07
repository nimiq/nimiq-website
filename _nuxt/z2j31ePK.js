import { _ as z } from "./y2fH-3G0.js";
import { d as C, w as P, b as B, y as I, v as A, e as s, l as D, h as e, o as r, f as c, k as i, g as a, z as M, t as N, _ as R, i as S } from "./Dzy_QPZd.js";
import { g as T, A as $ } from "./Bv2a5AGW.js";
import { _ as j } from "./65QI6cPr.js";
import { _ as V } from "./9erUq_gT.js";
import { _ as O, m as Z } from "./BIuR-wUw.js";
import { c as H } from "./BfILmKDo.js";
import { u as L } from "./BrNZQfme.js";
import { a as E } from "./QYk1bjwx.js";
import { s as F } from "./D0pLpdgN.js";
import { u as G } from "./CMqLQgad.js";
import { _ as J } from "./DlAUqK2U.js";
import "./CinM0rzx.js";
import "./DqJc2qEj.js";
import "./CjRg-5kW.js";
import "./E3CMvukU.js";
import "./BiHuLGzs.js";
import "./CJG5GsA3.js";
import "./tGZIKLS1.js";
import "./CR0Fnf8w.js";
const K = { "data-section": "", "max-w": "$nq-prose-max-width", "f-pt": "96/136", px: "32 lg:64" }, Q = { "text-neutral-800": "" }, U = C({ __name: "[post]", async setup(W) {
  var _a, _b;
  let n, m;
  const d = L("post"), { data: t } = ([n, m] = P(() => E(d.value)), n = await n, m(), n), { readingTime: u, meta: o, draft: f, image: g } = T(t.value);
  B(o), I({ ...o, twitterTitle: o.title, twitterDescription: o.description, twitterCard: "summary_large_image" }), F({ title: o.title, subline: o.description, image: g, type: "blog" });
  const l = A();
  return G(l, () => {
    Z(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), ((_b = (_a = t.value) == null ? void 0 : _a.data.body.at(0)) == null ? void 0 : _b.primary) && (t.value.data.body[0].primary.bgColor = "grey"), (X, p) => {
    const x = z, _ = M, y = $, b = j, w = R, h = V, v = O, k = S;
    return e(t) ? (r(), s(k, { key: 0 }, { default: c(() => [i("div", { ref_key: "articleRef", ref: l }, [a(x, { draft: e(f), "bottom-32": "", "right-32": "", fixed: "", "z-102": "" }, null, 8, ["draft"]), i("header", K, [a(_, { wrapper: "h1", field: e(t).data.title, style: { "--nq-font-size-min": "32", "--nq-font-size-max": "40" }, "view-transition-post-title": "" }, null, 8, ["field"]), a(_, { wrapper: "p", "text-neutral-800": "", field: e(t).data.subline, style: { "--nq-font-size-min": "18", "--nq-font-size-max": "20" } }, null, 8, ["field"]), a(y, { mt: "18 lg:24", date: new Date(e(t).last_publication_date), authors: e(t).data.authors.map((q) => q.name).join(", "), "md:justify-center": "" }, { after: c(() => [p[0] || (p[0] = i("div", { "rounded-full": "", "bg-neutral-500": "", "size-4": "", hidden: "", "sm:block": "" }, null, -1)), i("p", Q, N(e(u)) + " min ", 1)]), _: 1 }, 8, ["date", "authors"]), a(b, { field: e(t).data.image, "mx-auto": "", "mt-104": "", "rounded-8": "", "w-full": "", "object-contain": "", "view-transition-post-img": "" }, null, 8, ["field"])])], 512), e(t).data.body.length > 0 ? (r(), s(w, { key: 0, slices: e(t).data.body, components: e(H) }, null, 8, ["slices", "components"])) : (r(), s(h, { key: 1, "nq-prose": "", wrapper: "article", field: e(t).data.text }, null, 8, ["field"])), a(v)]), _: 1 })) : D("", true);
  };
} }), bt = J(U, [["__scopeId", "data-v-95e405eb"]]);
export {
  bt as default
};
