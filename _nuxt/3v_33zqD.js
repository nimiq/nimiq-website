import { d as g, a as h, j as r, o as i, g as o, f as y, k as e, aG as b, F as v, r as x, h as c, q as C, t as m, ab as k, n as w } from "./BSLliBk6.js";
import { g as z } from "./CpsPJSKh.js";
import { _ as q } from "./ClrY7JMF.js";
import { g as S } from "./BtthtQJI.js";
import { u as $ } from "./-en85RUw.js";
const B = { flex: "~ col" }, L = { "row-span-2": "", relative: "" }, N = { w: "125%", h: "145%", border: "16 solid neutral-400", "rounded-24": "", "inset-0": "", absolute: "" }, P = { grid: "~ cols-3", "rounded-8": "", "bg-white": "", "size-full": "", "f-p-sm": "", "f-gap-sm": "" }, j = { flex: "~ col" }, D = { "nq-label": "" }, F = { "text-neutral-800": "", "f-mt-xs": "" }, I = g({ __name: "index", props: z(), setup(d) {
  const p = S(d.slice.primary.bgColor || "grey"), { data: a } = $(), f = h(() => {
    var _a;
    return ((_a = a.value) == null ? void 0 : _a.apps) ? [...a.value.apps].sort(() => Math.random() - 0.5).filter((s) => s.developer !== "@nimiq").slice(0, 6) : [];
  });
  return (s, l) => {
    const n = b, u = q, _ = k;
    return i(), r("section", { class: w(c(p)) }, [o(_, { field: s.slice.primary.cta, grid: "~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128", "w-full": "", "f-p-lg": "", "nq-hoverable": "" }, { default: y(() => [e("div", B, [l[0] || (l[0] = e("div", { "i-custom:apps": "", "size-40": "" }, null, -1)), o(n, { field: s.slice.primary.title, "f-mt-xs": "" }, null, 8, ["field"]), o(n, { field: s.slice.primary.description, "text-neutral-800": "", "f-mt-2xs": "" }, null, 8, ["field"])]), e("div", L, [e("div", N, [e("ul", P, [(i(true), r(v, null, x(c(f), (t) => (i(), r("li", { key: t.name, style: C(`background: ${t.color}`), stack: "", "rounded-8": "" }, [o(u, { src: t.logo, "f-size": "136/180", "object-contain": "", "mix-blend-lighten": "" }, null, 8, ["src"])], 4))), 128))])])]), e("div", j, [e("p", D, m(s.slice.primary.categoriesLabel), 1), e("p", F, m(s.slice.primary.categoriesDescription), 1)])]), _: 1 }, 8, ["field"])], 2);
  };
} });
export {
  I as default
};
