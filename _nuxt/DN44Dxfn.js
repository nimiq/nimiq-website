import { _ as g } from "./Bp7INwPH.js";
import { d as h, i as y, c as i, o as a, a as o, w as b, e, u as t, aH as c, F as v, r as x, h as w, t as d, af as C, n as k } from "./C95QRNzc.js";
import { g as z } from "./CpsPJSKh.js";
import { g as S } from "./CVc7iRBp.js";
import { u as $ } from "./DkaLAbT4.js";
const q = { flex: "~ col" }, B = { "row-span-2": "", relative: "" }, L = { w: "125%", h: "145%", border: "16 solid neutral-400", "rounded-24": "", "inset-0": "", absolute: "" }, N = { grid: "~ cols-3", "rounded-8": "", "bg-white": "", "size-full": "", "f-p-sm": "", "f-gap-sm": "" }, D = { flex: "~ col" }, F = { "nq-label": "" }, P = { "text-neutral-800": "", "f-mt-xs": "" }, I = h({ __name: "index", props: z(), setup(m) {
  const p = S(m.slice.primary.bgColor || "grey"), { data: l } = $(), f = y(() => {
    var _a;
    return ((_a = l.value) == null ? void 0 : _a.apps) ? [...l.value.apps].sort(() => Math.random() - 0.5).filter((s) => s.developer !== "@nimiq").slice(0, 6) : [];
  });
  return (s, n) => {
    const u = g, _ = C;
    return a(), i("section", { class: k(t(p)) }, [o(_, { field: s.slice.primary.cta, grid: "~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128", "w-full": "", "f-p-lg": "", "nq-hoverable": "" }, { default: b(() => [e("div", q, [n[0] || (n[0] = e("div", { "i-custom:apps": "", "size-40": "" }, null, -1)), o(t(c), { field: s.slice.primary.title, "f-mt-xs": "" }, null, 8, ["field"]), o(t(c), { field: s.slice.primary.description, "text-neutral-800": "", "f-mt-2xs": "" }, null, 8, ["field"])]), e("div", B, [e("div", L, [e("ul", N, [(a(true), i(v, null, x(t(f), (r) => (a(), i("li", { key: r.name, style: w(`background: ${r.color}`), stack: "", "rounded-8": "" }, [o(u, { src: r.logo, "f-size": "136/180", "object-contain": "", "mix-blend-lighten": "" }, null, 8, ["src"])], 4))), 128))])])]), e("div", D, [e("p", F, d(s.slice.primary.categoriesLabel), 1), e("p", P, d(s.slice.primary.categoriesDescription), 1)])]), _: 1 }, 8, ["field"])], 2);
  };
} });
export {
  I as default
};
