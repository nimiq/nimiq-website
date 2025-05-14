import { b as m, i as l, d } from "./-SGvg42Q.js";
import { g as p } from "./CpsPJSKh.js";
import { d as u, B as f, j as o, c as x, o as g, e as b, h, u as a } from "./7tyaNgEA.js";
import "./8Lad1M9Y.js";
const _ = { "mx-0": "", "max-w-full": "", "of-x-hidden": "", "bg-neutral-0": "", "px-0": "", "children:max-w-none": "" }, $ = u({ __name: "index", props: p(), setup(n) {
  const t = n, e = f(0), { smaller: r } = m(d), i = o(() => r("md")), c = o(() => i.value ? 3 : 5);
  l(() => e.value = e.value + c.value / 60, { immediate: true });
  const s = o(() => t.slice.primary.flags);
  return (k, w) => (g(), x("section", _, [b("div", { "max-w-screen": "", h: "64 md:80", bg: "repeat-x", style: h({ backgroundImage: `url(${a(s).url})`, backgroundPosition: `${a(e)}% center`, backgroundSize: "auto 100%", width: `${a(s).dimensions.width}px` }) }, null, 4)]));
} });
export {
  $ as default
};
