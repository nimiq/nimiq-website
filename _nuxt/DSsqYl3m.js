import { _ as f } from "./BICjbqnc.js";
import { d as m, j as s, o as t, k as i, l as r, e as d, t as l, F as g, r as h, g as o, h as k, ab as q } from "./BSLliBk6.js";
import { a as b } from "./CUbCgsVV.js";
import { _ as y } from "./DlAUqK2U.js";
import { g as L } from "./CpsPJSKh.js";
import "./FOZmO4jG.js";
import "./CMlG4309.js";
const w = { flex: "~ col md:items-center" }, F = { "w-max": "", "f-text-lg": "", "nq-label": "" }, I = { grid: "~ cols-1 md:cols-2 lg:cols-3 gap-24", "f-mt-md": "" }, v = { key: 0, text: "left md:center neutral-800 f-lg", "f-mt-xl": "" }, B = m({ __name: "Faq", props: { questions: {}, title: {}, moreInsightfulLabel: {}, cta: {} }, setup(c) {
  return (e, p) => {
    const n = f, _ = q;
    return t(), s("div", w, [i("h2", F, l(e.title), 1), i("ul", I, [(t(true), s(g, null, h(e.questions, (a, u) => (t(), s("li", { key: u, "p-16": "", "rounded-6": "", "bg-neutral-300": "" }, [o(n, { wrapper: "div", field: a.question, "f-mt-2xs": "" }, null, 8, ["field"]), o(n, { wrapper: "div", field: a.answer, "nq-prose-compact": "", "f-mt-xs": "" }, null, 8, ["field"])]))), 128))]), e.moreInsightfulLabel ? (t(), s("p", v, l(e.moreInsightfulLabel), 1)) : r("", true), ("hasLink" in e ? e.hasLink : k(b))(e.cta) ? (t(), d(_, { key: 1, field: e.cta, "f-mt-sm": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-secondary": "" }, null, 8, ["field"])) : r("", true)]);
  };
} }), S = Object.assign(y(B, [["__scopeId", "data-v-46a8f206"]]), { __name: "StakingFaq" }), x = { "bg-neutral-100": "", "data-slice-type": "staking-faq" }, E = m({ __name: "index", props: L(), setup(c) {
  return (e, p) => {
    const n = S;
    return t(), s("section", x, [o(n, { questions: e.slice.primary.questions, title: e.slice.primary.title, cta: e.slice.primary.cta, "more-insightful-label": e.slice.primary.moreInsightfulLabel }, null, 8, ["questions", "title", "cta", "more-insightful-label"])]);
  };
} });
export {
  E as default
};
