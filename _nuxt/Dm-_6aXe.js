import { _ as C } from "./C7IVxsr-.js";
import { d as b, c as s, f as w, o as a, e as t, t as d, F as f, r as _, a as n, w as g, n as o, Y as x, u as y, i as k } from "./7tyaNgEA.js";
import { g as I } from "./CpsPJSKh.js";
import { g as N } from "./C3sJ3Yu7.js";
import { e as S } from "./CD5FwXF0.js";
const v = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, B = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, V = { flex: "~ wrap gap-x-32 gap-y-16 justify-center items-center", "m-0": "", "mb-1.5": "" }, $ = { text: "14/16.8 neutral-700", "mr-8": "", "whitespace-nowrap": "", "nq-label": "" }, j = b({ __name: "index", props: I(), setup(h) {
  const c = N(h.slice.primary.bgColor);
  function m(e) {
    switch (S(e)) {
      case "https://naka.com/":
        return "max-h-24";
      default:
        return "max-h-36";
    }
  }
  return (e, q) => {
    const p = C, u = x;
    return e.slice.variation === "default" ? (a(), s("section", { key: 0, class: o(y(c)), "py-0": "", "data-slice-type": "logos-grid" }, [t("ul", v, [t("li", null, [t("p", B, d(e.slice.primary.label), 1)]), (a(true), s(f, null, _(e.slice.items, ({ logo: i, link: r }, l) => (a(), s("li", { key: l }, [n(u, { "internal-component": "a", field: r, "transition-opacity": "" }, { default: g(() => [n(p, { src: e.$prismic.asImageSrc(i), class: o(m(r)), op: "40 hocus:80" }, null, 8, ["src", "class"])]), _: 2 }, 1032, ["field"])]))), 128))])], 2)) : e.slice.variation === "centered" ? (a(), s("section", { key: 1, class: o(y(c)), "data-slice-type": "logos-grid" }, [t("ul", V, [t("li", null, [t("p", $, d(e.slice.primary.label), 1)]), (a(true), s(f, null, _(e.slice.items, ({ logo: i, link: r }, l) => (a(), s("li", { key: l }, [n(u, { "internal-component": "a", field: r, "transition-opacity": "" }, { default: g(() => [n(p, { src: e.$prismic.asImageSrc(i), class: o(m(r)), op: "40 hocus:80" }, null, 8, ["src", "class"])]), _: 2 }, 1032, ["field"])]))), 128))])], 2)) : w("", true);
  };
} }), E = k(j, [["__scopeId", "data-v-0fa067bc"]]);
export {
  E as default
};
