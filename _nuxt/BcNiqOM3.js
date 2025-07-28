import { d as w, j as c, p as A, c as a, o as l, n as t, f as s, a as L, b as o, t as p, D as N, u, F as g, w as b, e as i, r as T, Z as B } from "./BguRs3jF.js";
import { b as V, a as h, d as C } from "./BNXriZyS.js";
const z = { "font-bold": "" }, F = { key: 4, flex: "~ gap-16 lg:gap-20 wrap", "f-mt-md": "" }, P = { "font-bold": "" }, $ = w({ __name: "Index", props: { iconName: {}, label: {}, headline: {}, subline: {}, cta: {}, links: { default: () => [] }, leftAlign: { type: Boolean } }, setup(m) {
  const k = c(() => {
    var _a;
    return ((_a = m.headline.filter((e) => e.type.startsWith("heading")).at(0)) == null ? void 0 : _a.type.replace("heading", "h")) || "h2";
  }), y = ["youtube.com", "vimeo.com"], q = c(() => y.some((e) => {
    var _a;
    return (_a = V(m.cta)) == null ? void 0 : _a.includes(e);
  }));
  return h(m.cta) && console.warn(`The \`cta\` prop is deprecated. Use \`links\` instead. Found in ${A().fullPath}`), (e, r) => {
    const f = N, d = B;
    return l(), a("div", { flex: "~ col", class: t({ "md:items-center": !e.leftAlign }) }, [e.iconName ? (l(), a("div", { key: 0, class: t(e.iconName), "text-54": "", "op-15": "", "f-mt-sm": "" }, null, 2)) : s("", true), e.label ? (l(), a("p", { key: 1, "mb-16": "", "w-max": "", block: "", "f-text-sm": "", "nq-label": "", class: t({ "md:mx-auto": !e.leftAlign }) }, p(e.label), 3)) : s("", true), L(f, { wrapper: u(k), field: e.headline, class: t({ "text-left": e.leftAlign }), "break-keep": "" }, null, 8, ["wrapper", "field", "class"]), ("hasText" in e ? e.hasText : u(C))(e.subline) ? (l(), o(f, { key: 2, wrapper: "p", field: e.subline, class: t({ "text-left": e.leftAlign }) }, null, 8, ["field", "class"])) : s("", true), e.links.length === 0 && e.cta && ("hasLink" in e ? e.hasLink : u(h))(e.cta) ? (l(), a(g, { key: 3 }, [u(q) ? (l(), o(d, { key: 1, "internal-component": "a", field: e.cta, flex: "~ gap-12 items-center", "hocus:bg": "blue/6", "un-text-blue": "", "p-8": "", "rounded-4": "", "transition-colors": "", "f-mt-sm": "" }, { default: b(() => [r[0] || (r[0] = i("div", { ring: "1.5 blue", stack: "", "text-16": "", "rounded-full": "", "size-32": "" }, [i("div", { "i-nimiq:triangle-right": "" })], -1)), i("p", z, p(e.cta.text), 1)]), _: 1, __: [0] }, 8, ["field"])) : (l(), o(d, { key: 0, "internal-component": "a", field: e.cta, "f-mt-lg": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", class: t({ "md:mx-auto": !e.leftAlign }) }, null, 8, ["field", "class"]))], 64)) : e.links.length > 0 ? (l(), a("ul", F, [(l(true), a(g, null, T(e.links, (n, v) => {
      var _a;
      return l(), a("li", { key: v }, [((_a = n.variant) == null ? void 0 : _a.startsWith("nq-pill")) ? (l(), o(d, { key: 0, "internal-component": "a", field: n, "nq-arrow": "", "nq-pill-lg": "", class: t({ "md:mx-auto": !e.leftAlign, "nq-pill-blue": n.variant === "nq-pill-blue", "nq-pill-secondary": n.variant === "nq-pill-secondary", "nq-pill-tertiary": n.variant === "nq-pill-tertiary" }) }, null, 8, ["field", "class"])) : n.variant === "video" ? (l(), o(d, { key: 1, "internal-component": "a", field: n, flex: "~ gap-12 items-center", "hocus:bg": "blue/6", "un-text-blue": "", "p-8": "", "rounded-4": "", "transition-colors": "" }, { default: b(() => [r[1] || (r[1] = i("div", { ring: "1.5 blue", stack: "", "text-16": "", "rounded-full": "", "size-32": "" }, [i("div", { "i-nimiq:triangle-right": "" })], -1)), i("p", P, p(n.text), 1)]), _: 2, __: [1] }, 1032, ["field"])) : s("", true)]);
    }), 128))])) : s("", true)], 2);
  };
} }), D = Object.assign($, { __name: "Headline" });
export {
  D as _
};
