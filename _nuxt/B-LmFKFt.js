import { d as b, c as a, f as C, o as t, e as s, t as d, F as f, r as g, a as n, w as _, E as w, n as o, Z as k, u as y } from "./BguRs3jF.js";
import { g as x } from "./CpsPJSKh.js";
import { g as P } from "./T2yBj71G.js";
import { e as $ } from "./BNXriZyS.js";
const B = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, N = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, V = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, j = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, S = b({ __name: "index", props: x(), setup(h) {
  const c = P(h.slice.primary.bgColor);
  function m(e) {
    switch ($(e)) {
      case "https://naka.com/":
        return "max-h-24";
      default:
        return "max-h-36";
    }
  }
  return (e, q) => {
    const p = w, u = k;
    return e.slice.variation === "default" ? (t(), a("section", { key: 0, class: o(y(c)), "py-0": "", "data-slice-type": "logos-grid" }, [s("ul", B, [s("li", null, [s("p", N, d(e.slice.primary.label), 1)]), (t(true), a(f, null, g(e.slice.items, ({ logo: l, link: r }, i) => (t(), a("li", { key: i }, [n(u, { "internal-component": "a", field: r, "transition-opacity": "", "aria-label": l.alt || `Partner logo ${i + 1}` }, { default: _(() => [n(p, { field: l, class: o(m(r)), op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field", "aria-label"])]))), 128))])], 2)) : e.slice.variation === "centered" ? (t(), a("section", { key: 1, class: o(y(c)), "data-slice-type": "logos-grid" }, [s("ul", V, [s("li", null, [s("p", j, d(e.slice.primary.label), 1)]), (t(true), a(f, null, g(e.slice.items, ({ logo: l, link: r }, i) => (t(), a("li", { key: i }, [n(u, { "internal-component": "a", field: r, "transition-opacity": "", "aria-label": l.alt || `Partner logo ${i + 1}` }, { default: _(() => [n(p, { field: l, class: o(m(r)), op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field", "aria-label"])]))), 128))])], 2)) : C("", true);
  };
} });
export {
  S as default
};
