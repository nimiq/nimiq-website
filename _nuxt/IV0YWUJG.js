import { d as g, a as h, B as i, o as r, g as o, f as y, C as e, aK as b, H as v, I as x, h as c, v as C, E as m, ag as w, D as k } from "./B8biU-UE.js";
import { g as z } from "./CpsPJSKh.js";
import { _ as B } from "./Fc1-Bd8L.js";
import { g as S } from "./BzRmGp1f.js";
import { u as $ } from "./CiaHVC_M.js";
const q = { flex: "~ col" }, D = { "row-span-2": "", relative: "" }, L = { w: "125%", h: "145%", border: "16 solid neutral-400", "rounded-24": "", "inset-0": "", absolute: "" }, N = { grid: "~ cols-3", "rounded-8": "", "bg-white": "", "size-full": "", "f-p-sm": "", "f-gap-sm": "" }, P = { flex: "~ col" }, E = { "nq-label": "" }, I = { "text-neutral-800": "", "f-mt-xs": "" }, H = g({ __name: "index", props: z(), setup(d) {
  const p = S(d.slice.primary.bgColor || "grey"), { data: a } = $(), f = h(() => {
    var _a;
    return ((_a = a.value) == null ? void 0 : _a.apps) ? [...a.value.apps].sort(() => Math.random() - 0.5).filter((s) => s.developer !== "@nimiq").slice(0, 6) : [];
  });
  return (s, l) => {
    const n = b, u = B, _ = w;
    return r(), i("section", { class: k(c(p)) }, [o(_, { field: s.slice.primary.cta, grid: "~ cols-1 md:cols-[1fr_3fr] rows-[1fr_auto] gap-x-96 gap-y-32 md:gap-y-128", "w-full": "", "f-p-lg": "", "nq-hoverable": "" }, { default: y(() => [e("div", q, [l[0] || (l[0] = e("div", { "i-custom:apps": "", "size-40": "" }, null, -1)), o(n, { field: s.slice.primary.title, "f-mt-xs": "" }, null, 8, ["field"]), o(n, { field: s.slice.primary.description, "text-neutral-800": "", "f-mt-2xs": "" }, null, 8, ["field"])]), e("div", D, [e("div", L, [e("ul", N, [(r(true), i(v, null, x(c(f), (t) => (r(), i("li", { key: t.name, style: C(`background: ${t.color}`), stack: "", "rounded-8": "" }, [o(u, { src: t.logo, "f-size": "136/180", "object-contain": "", "mix-blend-lighten": "" }, null, 8, ["src"])], 4))), 128))])])]), e("div", P, [e("p", E, m(s.slice.primary.categoriesLabel), 1), e("p", I, m(s.slice.primary.categoriesDescription), 1)])]), _: 1 }, 8, ["field"])], 2);
  };
} });
export {
  H as default
};
