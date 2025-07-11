import { d as C, c as s, f as w, o as t, e as a, t as d, F as f, r as g, a as i, w as _, D as b, n, Y as k, u as y } from "./gdLxT4Lf.js";
import { g as x } from "./CpsPJSKh.js";
import { g as B } from "./DzQE7UG-.js";
import { e as N } from "./D7zdd4-D.js";
const P = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, V = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, j = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, q = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, $ = C({ __name: "index", props: x(), setup(h) {
  const c = B(h.slice.primary.bgColor);
  function m(e) {
    switch (N(e)) {
      case "https://naka.com/":
        return "max-h-24";
      default:
        return "max-h-36";
    }
  }
  return (e, v) => {
    const p = b, u = k;
    return e.slice.variation === "default" ? (t(), s("section", { key: 0, class: n(y(c)), "py-0": "", "data-slice-type": "logos-grid" }, [a("ul", P, [a("li", null, [a("p", V, d(e.slice.primary.label), 1)]), (t(true), s(f, null, g(e.slice.items, ({ logo: o, link: l }, r) => (t(), s("li", { key: r }, [i(u, { "internal-component": "a", field: l, "transition-opacity": "" }, { default: _(() => [i(p, { field: o, class: n(m(l)), op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field"])]))), 128))])], 2)) : e.slice.variation === "centered" ? (t(), s("section", { key: 1, class: n(y(c)), "data-slice-type": "logos-grid" }, [a("ul", j, [a("li", null, [a("p", q, d(e.slice.primary.label), 1)]), (t(true), s(f, null, g(e.slice.items, ({ logo: o, link: l }, r) => (t(), s("li", { key: r }, [i(u, { "internal-component": "a", field: l, "transition-opacity": "" }, { default: _(() => [i(p, { field: o, class: n(m(l)), op: "40 hocus:80" }, null, 8, ["field", "class"])]), _: 2 }, 1032, ["field"])]))), 128))])], 2)) : w("", true);
  };
} });
export {
  $ as default
};
