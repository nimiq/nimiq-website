import { g as l } from "./CpsPJSKh.js";
import { g as c } from "./BzRmGp1f.js";
import { d as p, B as m, o as d, C as e, v as g, h as s, D as t, E as h } from "./B8biU-UE.js";
const u = { flex: "~ items-center gap-10", "mr-8": "", "py-6": "", "pl-8": "", "pr-20": "", "rounded-full": "" }, f = { text: "18 neutral-700", "nq-label": "" }, T = p({ __name: "index", props: l(), setup(o) {
  const r = c(o.slice.primary.bgColor), n = { "The Tech": "green", "The Apps": "blue", "The Map": "orange" }, i = { "The Tech": "i-nimiq:bolt", "The Apps": "i-nimiq:arrows-to-sides", "The Map": "i-nimiq:crypto-map" }, a = o.slice.primary.item;
  return (b, C) => (d(), m("section", { class: t([s(r), "nq-section-gap"]), "data-slice-type": "pill-link", "mx-0": "", "pb-2": "", relative: "", "children:max-w-none": "", "max-md:items-start": "" }, [e("div", u, [e("div", { style: g([`--c: var(--nq-${n[s(a)]})`, { color: "rgb(var(--c))", "background-color": "rgb(var(--c) / 0.2)" }]), "aria-hidden": "", size: "28 lg:40", "rounded-full": "", grid: "~ place-content-center" }, [e("div", { class: t([i[s(a)], "gradient"]), h: "18 lg:30", w: "16 lg:26" }, null, 2)], 4), e("span", f, h(s(a)), 1)])], 2));
} });
export {
  T as default
};
