import { _ as f } from "./D3wyXQF5.js";
import { d as m, c as s, o as t, e as i, f as r, b as d, t as l, F as g, r as h, a, u as q, Y as k, i as b } from "./ClGJWWej.js";
import { h as y } from "./SvaN8giD.js";
import { g as L } from "./CpsPJSKh.js";
import "./CEBR9iVI.js";
import "./YKo2rOHu.js";
const w = { flex: "~ col md:items-center" }, F = { "w-max": "", "nq-label": "", "f-text-lg": "" }, I = { grid: "~ cols-1 md:cols-2 lg:cols-3 gap-24", "f-mt-md": "" }, v = { key: 0, text: "left md:center neutral-800 f-lg", "f-mt-xl": "" }, B = m({ __name: "Faq", props: { questions: {}, title: {}, moreInsightfulLabel: {}, cta: {} }, setup(c) {
  return (e, p) => {
    const n = f, u = k;
    return t(), s("div", w, [i("h2", F, l(e.title), 1), i("ul", I, [(t(true), s(g, null, h(e.questions, (o, _) => (t(), s("li", { key: _, "rounded-6": "", "bg-neutral-300": "", "p-16": "" }, [a(n, { wrapper: "div", field: o.question, "f-mt-2xs": "" }, null, 8, ["field"]), a(n, { wrapper: "div", field: o.answer, "nq-prose-compact": "", "f-mt-xs": "" }, null, 8, ["field"])]))), 128))]), e.moreInsightfulLabel ? (t(), s("p", v, l(e.moreInsightfulLabel), 1)) : r("", true), ("hasLink" in e ? e.hasLink : q(y))(e.cta) ? (t(), d(u, { key: 1, field: e.cta, "nq-arrow": "", "nq-pill-lg": "", "nq-pill-secondary": "", "f-mt-sm": "" }, null, 8, ["field"])) : r("", true)]);
  };
} }), S = Object.assign(b(B, [["__scopeId", "data-v-c6a3a9b8"]]), { __name: "StakingFaq" }), x = { "bg-neutral-100": "", "data-slice-type": "staking-faq" }, D = m({ __name: "index", props: L(), setup(c) {
  return (e, p) => {
    const n = S;
    return t(), s("section", x, [a(n, { questions: e.slice.primary.questions, title: e.slice.primary.title, cta: e.slice.primary.cta, "more-insightful-label": e.slice.primary.moreInsightfulLabel }, null, 8, ["questions", "title", "cta", "more-insightful-label"])]);
  };
} });
export {
  D as default
};
