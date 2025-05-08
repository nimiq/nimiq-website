import { _ as m } from "./DBd8fsAv.js";
import { b as t, d as i } from "./CEBR9iVI.js";
import { g as c } from "./CpsPJSKh.js";
import { d as p, j as l, c as u, o as _, a as d, u as f } from "./ClGJWWej.js";
import "./YKo2rOHu.js";
const g = { "mx-0": "", "bg-neutral-100": "", "px-0": "", "children:max-w-none": "" }, w = p({ __name: "index", props: c(), setup(s) {
  const e = s, { smallerOrEqual: r } = t(i), o = l(() => r("sm") ? e.slice.primary.image.small : r("md") ? e.slice.primary.image.medium : e.slice.primary.image.large);
  return (a, x) => {
    const n = m;
    return _(), u("section", g, [d(n, { src: a.$prismic.asImageSrc(f(o)), "size-full": "" }, null, 8, ["src"])]);
  };
} });
export {
  w as default
};
