import { _ as g } from "./CsdQH-VP.js";
import { d as h, j as y, c as i, o as a, a as o, w as b, e, u as t, aj as c, F as v, r as x, h as w, t as d, Z as C, n as k } from "./g1xKa6TI.js";
import { g as z } from "./CpsPJSKh.js";
import { g as S } from "./DjC4KgUf.js";
import { u as $ } from "./CRIJdMYv.js";
const j = { flex: "~ col" }, q = { "row-span-2": "", relative: "" }, B = { w: "125%", h: "145%", border: "16 solid neutral-400", "rounded-24": "", "inset-0": "", absolute: "" }, L = { grid: "~ cols-3", "rounded-8": "", "bg-white": "", "size-full": "", "f-p-sm": "", "f-gap-sm": "" }, N = { flex: "~ col" }, D = { "nq-label": "" }, F = { "text-neutral-800": "", "f-mt-xs": "" }, M = h({ __name: "index", props: z(), setup(m) {
  const p = S(m.slice.primary.bgColor || "grey"), { data: l } = $(), f = y(() => {
    var _a;
    return ((_a = l.value) == null ? void 0 : _a.apps) ? [...l.value.apps].sort(() => Math.random() - 0.5).filter((s) => s.developer !== "@nimiq").slice(0, 6) : [];
  });
  return (s, n) => {
    const u = g, _ = C;
    return a(), i("section", { class: k(t(p)) }, [o(_, { "internal-component": "a", field: s.slice.primary.cta, grid: "~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128", "w-full": "", "f-p-lg": "", "nq-hoverable": "" }, { default: b(() => [e("div", j, [n[0] || (n[0] = e("div", { "i-custom:apps": "", "size-40": "" }, null, -1)), o(t(c), { field: s.slice.primary.title, "f-mt-xs": "" }, null, 8, ["field"]), o(t(c), { field: s.slice.primary.description, "text-neutral-800": "", "f-mt-2xs": "" }, null, 8, ["field"])]), e("div", q, [e("div", B, [e("ul", L, [(a(true), i(v, null, x(t(f), (r) => (a(), i("li", { key: r.name, style: w(`background: ${r.color}`), stack: "", "rounded-8": "" }, [o(u, { src: r.logo, "f-size": "136/180", "object-contain": "", "mix-blend-lighten": "" }, null, 8, ["src"])], 4))), 128))])])]), e("div", N, [e("p", D, d(s.slice.primary.categoriesLabel), 1), e("p", F, d(s.slice.primary.categoriesDescription), 1)])]), _: 1 }, 8, ["field"])], 2);
  };
} });
export {
  M as default
};
