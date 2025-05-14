import { d as B, j as r, c as i, o as t, a as c, b as m, f as a, C as P, u as n, F as z, r as A, e as u, t as w, w as p, Y as N, n as V } from "./7tyaNgEA.js";
import { _ as $ } from "./C7IVxsr-.js";
import { a as o } from "./CD5FwXF0.js";
import { g as j } from "./C3sJ3Yu7.js";
const D = ["aria-label"], G = { key: 0, "size-6": "", "rounded-full": "", "bg-neutral-500": "" }, H = { text: "f-xl green", "font-semibold": "" }, F = { key: 2, flex: "~ wrap gap-x-32 gap-y-16 items-center", "f-mt-lg": "", style: { "--nq-font-size-min": "18", "--nq-font-size-max": "22" } }, I = { "font-semibold": "" }, E = { key: 3, "f-mt-xl": "", flex: "~ wrap gap-32 lg:gap-40" }, O = { key: 0 }, T = { key: 1 }, Y = B({ __name: "Default", props: { primary: {}, items: { default: () => [] } }, setup(e) {
  const L = r(() => o(e.primary.link)), f = r(() => o(e.primary.secondaryLink)), y = r(() => o(e.primary.video)), S = r(() => L.value || f.value || y.value), d = r(() => o(e.primary.appStore)), g = r(() => o(e.primary.playStore)), _ = r(() => d.value || g.value), C = j(e.primary.bgColor), h = r(() => e.items.map((l) => {
    var _a;
    return (_a = l.highlight) == null ? void 0 : _a.trim();
  }).filter(Boolean) || []);
  return (l, k) => {
    var _a, _b;
    const x = P, s = N, b = $;
    return t(), i("section", { class: V(n(C)), relative: "" }, [c(x, { field: e.primary.headline, wrapper: "h1" }, null, 8, ["field"]), e.primary.subline ? (t(), m(x, { key: 0, field: e.primary.subline, wrapper: "p", "font-400": "", "dark:text-neutral-900": "" }, null, 8, ["field"])) : a("", true), n(h).length > 0 ? (t(), i("ul", { key: 1, "aria-label": `Highlights of ${(_b = (_a = e.primary.headline) == null ? void 0 : _a[0]) == null ? void 0 : _b.text}`, role: "list", "f-mt-xs": "", flex: "~ md:justify-center items-center wrap gap-x-16 gap-y-4" }, [(t(true), i(z, null, A(n(h), (q, v) => (t(), i("li", { key: v, contents: "" }, [v > 0 ? (t(), i("div", G)) : a("", true), u("span", H, w(q), 1)]))), 128))], 8, D)) : a("", true), n(S) ? (t(), i("div", F, [("hasLink" in l ? l.hasLink : n(o))(l.primary.link) ? (t(), m(s, { key: 0, field: l.primary.link, "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", "dark:nq-pill-white": "" }, null, 8, ["field"])) : a("", true), n(y) ? (t(), m(s, { key: 1, "internal-component": "a", "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", field: e.primary.videoHref, flex: "~ gap-10 items-center" }, { default: p(() => [k[0] || (k[0] = u("div", { "text-16": "", "i-nimiq:triangle-right": "" }, null, -1)), u("span", I, w(e.primary.videoLabel), 1)]), _: 1 }, 8, ["field"])) : a("", true), n(f) ? (t(), m(s, { key: 2, "internal-component": "a", field: e.primary.secondaryLink, "un-text-white": "", "font-bold": "", "nq-arrow": "" }, null, 8, ["field"])) : a("", true)])) : a("", true), n(_) ? (t(), i("ul", E, [n(d) ? (t(), i("li", O, [c(s, { "internal-component": "a", field: e.primary.appStore }, { default: p(() => [n(d) ? (t(), m(b, { key: 0, provider: "ipxStatic", src: "/assets/images/apple-store-badge.png", h: "32 lg:40", alt: "Get it on Apple Store" })) : a("", true)]), _: 1 }, 8, ["field"])])) : a("", true), n(g) ? (t(), i("li", T, [c(s, { "internal-component": "a", field: e.primary.playStore }, { default: p(() => [c(b, { provider: "ipxStatic", src: "/assets/images/google-play-badge.png", h: "32 lg:40", alt: "Get it on Google Play" })]), _: 1 }, 8, ["field"])])) : a("", true)])) : a("", true)], 2);
  };
} }), R = Object.assign(Y, { __name: "HeroDefault" });
export {
  R as _
};
