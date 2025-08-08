import { d as c, c as o, o as i, a as l, w as p, e, t as s, D as _, F as f, r as u, af as g } from "./C95QRNzc.js";
import { g as h } from "./CpsPJSKh.js";
const y = { "bg-neutral-0": "", "data-slice-type": "nimiq-wallet-hoverable" }, w = { flex: "~ col" }, b = { text: "22/28.6 lg:28/36.4", "font-semibold": "", "mt-16": "", "text-left": "", "lg:ml-24": "" }, x = { "mt-12": "", "max-w-28ch": "", "lg:mx-auto": "", text: "16/24 md:17/25.5 lg:18/28 neutral-800", "lg:ml-24": "" }, v = { "row-span-2": "", relative: "" }, k = { w: "125%", h: "145%", border: "16 solid neutral-400", "rounded-24": "", "inset-0": "", absolute: "" }, q = { flex: "~ col" }, B = { "nq-label": "" }, L = { flex: "~ gap-16", "f-mt-xs": "" }, F = c({ __name: "index", props: h(), setup(C) {
  return (t, n) => {
    const r = _, a = g;
    return i(), o("section", y, [l(a, { field: t.slice.primary.link, grid: "~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128", "w-full": "", "f-p-lg": "", "nq-hoverable": "" }, { default: p(() => [e("div", w, [n[0] || (n[0] = e("div", { "text-56": "", "i-nimiq:logos-nimiq": "", "lg:ml-24": "" }, null, -1)), e("h3", b, s(t.slice.primary.title), 1), e("p", x, s(t.slice.primary.description), 1)]), e("div", v, [e("div", k, [l(r, { field: t.slice.primary.screenshot, "rounded-8": "" }, null, 8, ["field"])])]), e("div", q, [e("p", B, s(t.slice.primary.poweredByLabel), 1), e("ul", L, [(i(true), o(f, null, u(t.slice.primary.poweredByLogos, ({ logo: d }, m) => (i(), o("li", { key: m }, [l(r, { field: d, "w-full": "", "f-h": "24/32", "object-contain": "" }, null, 8, ["field"])]))), 128))])])]), _: 1 }, 8, ["field"])]);
  };
} });
export {
  F as default
};
