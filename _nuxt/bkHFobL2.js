import { _ as b } from "./Cl6nVLLe.js";
import { d as C, j as a, l as w, o as t, k as s, t as d, F as f, r as _, g as o, f as g, n, ab as x, h as y } from "./BdODHn_3.js";
import { g as k } from "./CpsPJSKh.js";
import { g as P } from "./UqZ8O5YD.js";
import { e as j } from "./DGIQ2ECZ.js";
import "./DFn-vR6U.js";
const B = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, N = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, V = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, $ = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, E = C({ __name: "index", props: k(), setup(h) {
  const c = P(h.slice.primary.bgColor);
  function m(e) {
    switch (j(e)) {
      case "https://naka.com/":
        return "max-h-24";
      default:
        return "max-h-36";
    }
  }
  return (e, q) => {
    const p = b, u = x;
    return e.slice.variation === "default" ? (t(), a("section", { key: 0, class: n(y(c)), "py-0": "", "data-slice-type": "logos-grid" }, [s("ul", B, [s("li", null, [s("p", N, d(e.slice.primary.label), 1)]), (t(true), a(f, null, _(e.slice.items, ({ logo: l, link: r }, i) => (t(), a("li", { key: i }, [o(u, { field: r, "transition-opacity": "", "aria-label": l.alt || `Partner logo ${i + 1}` }, { default: g(() => [o(p, { field: l, class: n(m(r)), "w-full": "", op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field", "aria-label"])]))), 128))])], 2)) : e.slice.variation === "centered" ? (t(), a("section", { key: 1, class: n(y(c)), "data-slice-type": "logos-grid" }, [s("ul", V, [s("li", null, [s("p", $, d(e.slice.primary.label), 1)]), (t(true), a(f, null, _(e.slice.items, ({ logo: l, link: r }, i) => (t(), a("li", { key: i }, [o(u, { field: r, "transition-opacity": "", "aria-label": l.alt || `Partner logo ${i + 1}` }, { default: g(() => [o(p, { field: l, class: n(m(r)), op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field", "aria-label"])]))), 128))])], 2)) : w("", true);
  };
} });
export {
  E as default
};
