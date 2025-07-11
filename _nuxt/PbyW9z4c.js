import { d as B, j as l, c as i, o as t, a as c, b as m, f as a, C as P, u as n, F as z, r as A, e as u, t as w, w as f, Y as N, n as V } from "./gdLxT4Lf.js";
import { _ as $ } from "./BpR0sf--.js";
import { a as s } from "./D7zdd4-D.js";
import { g as j } from "./DzQE7UG-.js";
const D = ["aria-label"], G = { key: 0, "rounded-full": "", "bg-neutral-500": "", "size-6": "" }, H = { text: "f-xl green", "font-semibold": "" }, F = { key: 2, flex: "~ wrap gap-x-32 gap-y-16 items-center", "f-mt-lg": "", style: { "--nq-font-size-min": "18", "--nq-font-size-max": "22" } }, I = { "font-semibold": "" }, E = { key: 3, "f-mt-xl": "", flex: "~ wrap gap-32 lg:gap-40" }, O = { key: 0 }, T = { key: 1 }, Y = B({ __name: "Default", props: { primary: {}, items: { default: () => [] } }, setup(e) {
  const L = l(() => s(e.primary.link)), p = l(() => s(e.primary.secondaryLink)), y = l(() => s(e.primary.video)), _ = l(() => L.value || p.value || y.value), d = l(() => s(e.primary.appStore)), g = l(() => s(e.primary.playStore)), C = l(() => d.value || g.value), S = j(e.primary.bgColor), h = l(() => e.items.map((r) => {
    var _a;
    return (_a = r.highlight) == null ? void 0 : _a.trim();
  }).filter(Boolean) || []);
  return (r, k) => {
    var _a, _b;
    const x = P, o = N, b = $;
    return t(), i("section", { class: V(n(S)), relative: "" }, [c(x, { field: e.primary.headline, wrapper: "h1" }, null, 8, ["field"]), e.primary.subline ? (t(), m(x, { key: 0, field: e.primary.subline, wrapper: "p", "font-400": "", "dark:text-neutral-900": "" }, null, 8, ["field"])) : a("", true), n(h).length > 0 ? (t(), i("ul", { key: 1, "aria-label": `Highlights of ${(_b = (_a = e.primary.headline) == null ? void 0 : _a[0]) == null ? void 0 : _b.text}`, role: "list", "f-mt-xs": "", flex: "~ md:justify-center items-center wrap gap-x-16 gap-y-4" }, [(t(true), i(z, null, A(n(h), (q, v) => (t(), i("li", { key: v, contents: "" }, [v > 0 ? (t(), i("div", G)) : a("", true), u("span", H, w(q), 1)]))), 128))], 8, D)) : a("", true), n(_) ? (t(), i("div", F, [("hasLink" in r ? r.hasLink : n(s))(r.primary.link) ? (t(), m(o, { key: 0, field: r.primary.link, "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", "dark:nq-pill-white": "" }, null, 8, ["field"])) : a("", true), n(y) ? (t(), m(o, { key: 1, "internal-component": "a", "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", field: e.primary.videoHref, flex: "~ gap-10 items-center" }, { default: f(() => [k[0] || (k[0] = u("div", { "text-16": "", "i-nimiq:triangle-right": "" }, null, -1)), u("span", I, w(e.primary.videoLabel), 1)]), _: 1, __: [0] }, 8, ["field"])) : a("", true), n(p) ? (t(), m(o, { key: 2, "internal-component": "a", field: e.primary.secondaryLink, "un-text-white": "", "font-bold": "", "nq-arrow": "" }, null, 8, ["field"])) : a("", true)])) : a("", true), n(C) ? (t(), i("ul", E, [n(d) ? (t(), i("li", O, [c(o, { "internal-component": "a", field: e.primary.appStore }, { default: f(() => [n(d) ? (t(), m(b, { key: 0, src: "/assets/images/apple-store-badge.png", h: "32 lg:40", alt: "Get it on Apple Store" })) : a("", true)]), _: 1 }, 8, ["field"])])) : a("", true), n(g) ? (t(), i("li", T, [c(o, { "internal-component": "a", field: e.primary.playStore }, { default: f(() => [c(b, { src: "/assets/images/google-play-badge.png", h: "32 lg:40", alt: "Get it on Google Play" })]), _: 1 }, 8, ["field"])])) : a("", true)])) : a("", true)], 2);
  };
} }), R = Object.assign(Y, { __name: "HeroDefault" });
export {
  R as _
};
