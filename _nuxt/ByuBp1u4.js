import { d as w, a as c, u as A, j as t, o as l, n, l as s, g as L, e as o, t as f, z as N, h as u, F as g, f as b, k as i, r as T, ab as B } from "./Dzy_QPZd.js";
import { b as V, a as h, d as z } from "./BiHuLGzs.js";
const C = { "font-bold": "" }, F = { key: 4, flex: "~ gap-16 lg:gap-20 wrap", "f-mt-md": "" }, P = { "font-bold": "" }, $ = w({ __name: "Index", props: { iconName: {}, label: {}, headline: {}, subline: {}, cta: {}, links: { default: () => [] }, leftAlign: { type: Boolean } }, setup(m) {
  const k = c(() => {
    var _a;
    return ((_a = m.headline.filter((e) => e.type.startsWith("heading")).at(0)) == null ? void 0 : _a.type.replace("heading", "h")) || "h2";
  }), y = ["youtube.com", "vimeo.com"], q = c(() => y.some((e) => {
    var _a;
    return (_a = V(m.cta)) == null ? void 0 : _a.includes(e);
  }));
  return h(m.cta) && console.warn(`The \`cta\` prop is deprecated. Use \`links\` instead. Found in ${A().fullPath}`), (e, r) => {
    const p = N, d = B;
    return l(), t("div", { flex: "~ col", class: n({ "md:items-center": !e.leftAlign }) }, [e.iconName ? (l(), t("div", { key: 0, class: n(e.iconName), "text-54": "", "op-15": "", "f-mt-sm": "" }, null, 2)) : s("", true), e.label ? (l(), t("p", { key: 1, "mb-16": "", "w-max": "", block: "", "f-text-sm": "", "nq-label": "", class: n({ "md:mx-auto": !e.leftAlign }) }, f(e.label), 3)) : s("", true), L(p, { wrapper: u(k), field: e.headline, class: n({ "text-left": e.leftAlign }), "break-keep": "" }, null, 8, ["wrapper", "field", "class"]), ("hasText" in e ? e.hasText : u(z))(e.subline) ? (l(), o(p, { key: 2, wrapper: "p", field: e.subline, class: n({ "text-left": e.leftAlign }) }, null, 8, ["field", "class"])) : s("", true), e.links.length === 0 && e.cta && ("hasLink" in e ? e.hasLink : u(h))(e.cta) ? (l(), t(g, { key: 3 }, [u(q) ? (l(), o(d, { key: 1, field: e.cta, flex: "~ gap-12 items-center", "hocus:bg": "blue/6", "un-text-blue": "", "p-8": "", "rounded-4": "", "transition-colors": "", "f-mt-sm": "" }, { default: b(() => [r[0] || (r[0] = i("div", { ring: "1.5 blue", stack: "", "text-16": "", "rounded-full": "", "size-32": "" }, [i("div", { "i-nimiq:triangle-right": "" })], -1)), i("p", C, f(e.cta.text), 1)]), _: 1, __: [0] }, 8, ["field"])) : (l(), o(d, { key: 0, field: e.cta, "f-mt-lg": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", class: n({ "md:mx-auto": !e.leftAlign }) }, null, 8, ["field", "class"]))], 64)) : e.links.length > 0 ? (l(), t("ul", F, [(l(true), t(g, null, T(e.links, (a, v) => {
      var _a;
      return l(), t("li", { key: v }, [((_a = a.variant) == null ? void 0 : _a.startsWith("nq-pill")) ? (l(), o(d, { key: 0, field: a, "nq-arrow": "", "nq-pill-lg": "", class: n({ "md:mx-auto": !e.leftAlign, "nq-pill-blue": a.variant === "nq-pill-blue", "nq-pill-secondary": a.variant === "nq-pill-secondary", "nq-pill-tertiary": a.variant === "nq-pill-tertiary" }) }, null, 8, ["field", "class"])) : a.variant === "video" ? (l(), o(d, { key: 1, field: a, flex: "~ gap-12 items-center", "hocus:bg": "blue/6", "un-text-blue": "", "p-8": "", "rounded-4": "", "transition-colors": "" }, { default: b(() => [r[1] || (r[1] = i("div", { ring: "1.5 blue", stack: "", "text-16": "", "rounded-full": "", "size-32": "" }, [i("div", { "i-nimiq:triangle-right": "" })], -1)), i("p", P, f(a.text), 1)]), _: 2, __: [1] }, 1032, ["field"])) : s("", true)]);
    }), 128))])) : s("", true)], 2);
  };
} }), I = Object.assign($, { __name: "Headline" });
export {
  I as _
};
