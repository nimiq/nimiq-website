import { d as u, v as f, c as t, o as n, e as o, F as x, r as d, a as s, w as g, D as h, t as b, _ as w, u as k } from "./7tyaNgEA.js";
import { g as y } from "./CpsPJSKh.js";
import { u as C } from "./qVQu3vrU.js";
const B = { "bg-neutral-0": "" }, F = { grid: "~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center" }, N = { "font-semibold": "", "f-text-xl": "" }, V = u({ __name: "index", props: y(), async setup(j) {
  let e, a;
  const { data: r } = ([e, a] = f(() => C("/api/exchanges", "$a5sid5Z38b")), e = await e, a(), e);
  return (v, D) => {
    const c = h, i = w;
    return n(), t("section", B, [o("ul", F, [(n(true), t(x, null, d(k(r), ({ link: _, logo: l, name: m }, p) => (n(), t("li", { key: p }, [s(i, { external: "", to: _, flex: "~ row items-center gap-x-16", "nq-hoverable": "", target: "_blank" }, { default: g(() => [s(c, { field: l, "h-full": "", "w-40": "", "object-contain": "", flex: "~ items-center" }, null, 8, ["field"]), o("h3", N, b(m), 1)]), _: 2 }, 1032, ["to"])]))), 128))])]);
  };
} });
export {
  V as default
};
