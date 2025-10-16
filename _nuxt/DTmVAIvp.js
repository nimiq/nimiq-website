import { _ as b } from "./CDGVCZAD.js";
import { d as C, B as a, x as w, o as t, C as s, E as d, H as f, I as g, g as o, f as _, D as n, ag as x, h as y } from "./B8biU-UE.js";
import { g as k } from "./CpsPJSKh.js";
import { g as P } from "./BzRmGp1f.js";
import { e as B } from "./DRbUa3ZN.js";
import "./Fc1-Bd8L.js";
const N = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, V = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, $ = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, j = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, z = C({ __name: "index", props: k(), setup(h) {
  const c = P(h.slice.primary.bgColor);
  function m(e) {
    switch (B(e)) {
      case "https://naka.com/":
        return "max-h-24";
      default:
        return "max-h-36";
    }
  }
  return (e, q) => {
    const p = b, u = x;
    return e.slice.variation === "default" ? (t(), a("section", { key: 0, class: n(y(c)), "py-0": "", "data-slice-type": "logos-grid" }, [s("ul", N, [s("li", null, [s("p", V, d(e.slice.primary.label), 1)]), (t(true), a(f, null, g(e.slice.items, ({ logo: l, link: r }, i) => (t(), a("li", { key: i }, [o(u, { field: r, "transition-opacity": "", "aria-label": l.alt || `Partner logo ${i + 1}` }, { default: _(() => [o(p, { field: l, class: n(m(r)), "w-full": "", op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field", "aria-label"])]))), 128))])], 2)) : e.slice.variation === "centered" ? (t(), a("section", { key: 1, class: n(y(c)), "data-slice-type": "logos-grid" }, [s("ul", $, [s("li", null, [s("p", j, d(e.slice.primary.label), 1)]), (t(true), a(f, null, g(e.slice.items, ({ logo: l, link: r }, i) => (t(), a("li", { key: i }, [o(u, { field: r, "transition-opacity": "", "aria-label": l.alt || `Partner logo ${i + 1}` }, { default: _(() => [o(p, { field: l, class: n(m(r)), "w-full": "", op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field", "aria-label"])]))), 128))])], 2)) : w("", true);
  };
} });
export {
  z as default
};
