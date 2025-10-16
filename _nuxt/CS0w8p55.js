import { _ as C } from "./CmnqzRqC.js";
import { d as z, w as P, b as B, R as I, r as R, e as r, x as S, h as e, o as s, f as c, C as i, g as a, S as A, E as D, _ as M, i as N } from "./B8biU-UE.js";
import { g as T, A as $ } from "./QYNAWTQz.js";
import { _ as j } from "./CDGVCZAD.js";
import { _ as V } from "./skKO6Fnq.js";
import { _ as O, m as Z } from "./L9u5Uk1y.js";
import { c as E } from "./ClMfwJO2.js";
import { u as H } from "./CQkxAz7J.js";
import { a as L } from "./DWbXAw--.js";
import { s as F } from "./Mv-fplKT.js";
import { a as G } from "./DOgGst0G.js";
import { _ as J } from "./DlAUqK2U.js";
import "./D-k9HlQ8.js";
import "./DBRxGtFx.js";
import "./CoPlYyca.js";
import "./uct_JH4F.js";
import "./DRbUa3ZN.js";
import "./Fc1-Bd8L.js";
import "./BzRmGp1f.js";
import "./B5vKjtsS.js";
const K = { "data-section": "", "max-w": "$nq-prose-max-width", "f-pt": "96/136", px: "32 lg:64" }, Q = { "text-neutral-800": "" }, U = z({ __name: "[post]", async setup(W) {
  var _a, _b;
  let n, m;
  const d = H("post"), { data: t } = ([n, m] = P(() => L(d.value)), n = await n, m(), n), { readingTime: u, meta: o, draft: f, image: g } = T(t.value);
  B(o), I({ ...o, twitterTitle: o.title, twitterDescription: o.description, twitterCard: "summary_large_image" }), F({ title: o.title, subline: o.description, image: g, type: "blog" });
  const p = R();
  return G(p, () => {
    Z(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), ((_b = (_a = t.value) == null ? void 0 : _a.data.body.at(0)) == null ? void 0 : _b.primary) && (t.value.data.body[0].primary.bgColor = "grey"), (X, _) => {
    const x = C, l = A, y = $, b = j, w = M, h = V, v = O, k = N;
    return e(t) ? (s(), r(k, { key: 0 }, { default: c(() => [i("div", { ref_key: "articleRef", ref: p }, [a(x, { draft: e(f), "bottom-32": "", "right-32": "", fixed: "", "z-102": "" }, null, 8, ["draft"]), i("header", K, [a(l, { wrapper: "h1", field: e(t).data.title, style: { "--nq-font-size-min": "32", "--nq-font-size-max": "40" }, "view-transition-post-title": "" }, null, 8, ["field"]), a(l, { wrapper: "p", "text-neutral-800": "", field: e(t).data.subline, style: { "--nq-font-size-min": "18", "--nq-font-size-max": "20" } }, null, 8, ["field"]), a(y, { mt: "18 lg:24", date: new Date(e(t).last_publication_date), authors: e(t).data.authors.map((q) => q.name).join(", "), "md:justify-center": "" }, { after: c(() => [_[0] || (_[0] = i("div", { "rounded-full": "", "bg-neutral-500": "", "size-4": "", hidden: "", "sm:block": "" }, null, -1)), i("p", Q, D(e(u)) + " min ", 1)]), _: 1 }, 8, ["date", "authors"]), a(b, { field: e(t).data.image, "mx-auto": "", "mt-104": "", "rounded-8": "", "w-full": "", "object-contain": "", "view-transition-post-img": "" }, null, 8, ["field"])])], 512), e(t).data.body.length > 0 ? (s(), r(w, { key: 0, slices: e(t).data.body, components: e(E) }, null, 8, ["slices", "components"])) : (s(), r(h, { key: 1, "nq-prose": "", wrapper: "article", field: e(t).data.text }, null, 8, ["field"])), a(v)]), _: 1 })) : S("", true);
  };
} }), bt = J(U, [["__scopeId", "data-v-95e405eb"]]);
export {
  bt as default
};
