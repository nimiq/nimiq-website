import { a as m, h as l, b as p } from "./DEpc-rVb.js";
import { g as u } from "./CpsPJSKh.js";
import { d, B as f, i as o, c as x, o as g, e as h, h as b, u as a } from "./C95QRNzc.js";
import "./BPgVFFXt.js";
const _ = { "mx-0": "", "px-0": "", "bg-neutral-0": "", "max-w-full": "", "of-x-hidden": "", "children:max-w-none": "" }, $ = d({ __name: "index", props: u(), setup(n) {
  const t = n, e = f(0), { smaller: r } = m(p), i = o(() => r("md")), c = o(() => i.value ? 3 : 5);
  l(() => e.value = e.value + c.value / 60, { immediate: true });
  const s = o(() => t.slice.primary.flags);
  return (k, w) => (g(), x("section", _, [h("div", { "max-w-screen": "", h: "64 md:80", bg: "repeat-x", style: b({ backgroundImage: `url(${a(s).url})`, backgroundPosition: `${a(e)}% center`, backgroundSize: "auto 100%", width: `${a(s).dimensions.width}px` }) }, null, 4)]));
} });
export {
  $ as default
};
