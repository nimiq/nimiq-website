import { d as g, c as l, o as i, e as t, F as u, r as _, a as r, D as x, t as y, h as b, n as h, u as C } from "./ClGJWWej.js";
import { g as w } from "./CpsPJSKh.js";
import { _ as k } from "./D3wyXQF5.js";
import { g as v } from "./Dxc61GTl.js";
import "./CEBR9iVI.js";
import "./YKo2rOHu.js";
const B = { grid: "~ cols-1 md:cols-2 lg:cols-3", bg: "white/10", "w-full": "", "of-clip": "", "rounded-6": "" }, $ = { "text-center": "", "f-mt-2xs": "" }, N = g({ __name: "index", props: w(), setup(a) {
  const c = v(a.slice.primary.bgColor);
  return (e, o) => {
    const s = x, n = k;
    return i(), l("section", { class: h(C(c)) }, [t("ul", B, [(i(true), l(u, null, _(e.slice.items, ({ logo: m, headline: p, description: d }, f) => (i(), l("li", { key: f, flex: "~ items-center col", "nq-prose-compact": "", "f-py-lg": "", "first:border": "b-1.5 lg:b-0 lg:r-1.5 white/20" }, [r(s, { field: m, "max-h-64": "" }, null, 8, ["field"]), t("h3", $, y(p), 1), r(n, { wrapper: "div", field: d, text: "white/80 center" }, null, 8, ["field"])]))), 128)), t("li", { style: b({ "--c": `rgb(var(--nq-${e.slice.primary.mainPieceBackgroundColor}))` }), bg: "$c", flex: "~ items-center justify-center col", "px-0": "!", relative: "", "py-24": "" }, [o[0] || (o[0] = t("div", { text: "$c", absolute: "", "w-32": "", "i-nimiq:tooltip-triangle": "", "translate-y": "-50%", "lg:left--39": "", "max-lg:top--7": "", "lg:origin-right-center": "", "lg:rotate--90": "" }, null, -1)), r(s, { field: e.slice.primary.image, "h-114": "" }, null, 8, ["field"]), r(n, { wrapper: "div", field: e.slice.primary.description, text: "darkblue center f-2xl", "f-mt-sm": "" }, null, 8, ["field"])], 4)])], 2);
  };
} });
export {
  N as default
};
