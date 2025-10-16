import { _ as f } from "./skKO6Fnq.js";
import { d as m, B as s, o as t, C as i, x as r, e as d, E as l, H as g, I as h, g as o, h as q, ag as k } from "./B8biU-UE.js";
import { a as b } from "./DRbUa3ZN.js";
import { _ as y } from "./DlAUqK2U.js";
import { g as L } from "./CpsPJSKh.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
const I = { flex: "~ col md:items-center" }, w = { "w-max": "", "f-text-lg": "", "nq-label": "" }, B = { grid: "~ cols-1 md:cols-2 lg:cols-3 gap-24", "f-mt-md": "" }, v = { key: 0, text: "left md:center neutral-800 f-lg", "f-mt-xl": "" }, x = m({ __name: "Faq", props: { questions: {}, title: {}, moreInsightfulLabel: {}, cta: {} }, setup(c) {
  return (e, p) => {
    const n = f, _ = k;
    return t(), s("div", I, [i("h2", w, l(e.title), 1), i("ul", B, [(t(true), s(g, null, h(e.questions, (a, u) => (t(), s("li", { key: u, "p-16": "", "rounded-6": "", "bg-neutral-300": "" }, [o(n, { wrapper: "div", field: a.question, "f-mt-2xs": "" }, null, 8, ["field"]), o(n, { wrapper: "div", field: a.answer, "nq-prose-compact": "", "f-mt-xs": "" }, null, 8, ["field"])]))), 128))]), e.moreInsightfulLabel ? (t(), s("p", v, l(e.moreInsightfulLabel), 1)) : r("", true), ("hasLink" in e ? e.hasLink : q(b))(e.cta) ? (t(), d(_, { key: 1, field: e.cta, "f-mt-sm": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-secondary": "" }, null, 8, ["field"])) : r("", true)]);
  };
} }), C = Object.assign(y(x, [["__scopeId", "data-v-46a8f206"]]), { __name: "StakingFaq" }), F = { "bg-neutral-100": "", "data-slice-type": "staking-faq" }, D = m({ __name: "index", props: L(), setup(c) {
  return (e, p) => {
    const n = C;
    return t(), s("section", F, [o(n, { questions: e.slice.primary.questions, title: e.slice.primary.title, cta: e.slice.primary.cta, "more-insightful-label": e.slice.primary.moreInsightfulLabel }, null, 8, ["questions", "title", "cta", "more-insightful-label"])]);
  };
} });
export {
  D as default
};
