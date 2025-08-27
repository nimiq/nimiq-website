import { a as c, k as l, b as p } from "./5qd8EHar.js";
import { g as d } from "./CpsPJSKh.js";
import { d as u, v as f, a, j as x, o as g, k, q as b, h as o } from "./BdODHn_3.js";
import "./BTeZegdw.js";
const h = { "mx-0": "", "px-0": "", "bg-neutral-0": "", "max-w-full": "", "of-x-hidden": "", "children:max-w-none": "" }, $ = u({ __name: "index", props: d(), setup(n) {
  const t = n, e = f(0), { smaller: r } = c(p), i = a(() => r("md")), m = a(() => i.value ? 3 : 5);
  l(() => e.value = e.value + m.value / 60, { immediate: true });
  const s = a(() => t.slice.primary.flags);
  return (_, v) => (g(), x("section", h, [k("div", { "max-w-screen": "", h: "64 md:80", bg: "repeat-x", style: b({ backgroundImage: `url(${o(s).url})`, backgroundPosition: `${o(e)}% center`, backgroundSize: "auto 100%", width: `${o(s).dimensions.width}px` }) }, null, 4)]));
} });
export {
  $ as default
};
