import { d as B, i as r, c as n, o as t, a as d, b as m, f as i, C as P, u as a, F as z, r as A, af as N, w as f, e as c, t as w, n as T } from "./C95QRNzc.js";
import { _ as V } from "./Bp7INwPH.js";
import { a as s, g as $ } from "./CCkBGt8y.js";
import { g as D } from "./CVc7iRBp.js";
const G = ["aria-label"], H = { key: 0, "rounded-full": "", "bg-neutral-500": "", "size-6": "" }, j = { text: "f-xl green", "font-semibold": "" }, F = { key: 2, flex: "~ wrap gap-x-32 gap-y-16 items-center", "f-mt-lg": "", style: { "--nq-font-size-min": "18", "--nq-font-size-max": "22" } }, I = { "font-semibold": "" }, E = { key: 3, "f-mt-xl": "", flex: "~ wrap gap-32 lg:gap-40" }, O = { key: 0 }, J = { key: 1 }, K = B({ __name: "Default", props: { primary: {}, items: { default: () => [] } }, setup(e) {
  const L = r(() => s(e.primary.link)), g = r(() => s(e.primary.secondaryLink)), y = r(() => s(e.primary.video)), C = r(() => L.value || g.value || y.value), u = r(() => s(e.primary.appStore)), p = r(() => s(e.primary.playStore)), S = r(() => u.value || p.value), _ = D(e.primary.bgColor), h = r(() => e.items.map((l) => {
    var _a;
    return (_a = l.highlight) == null ? void 0 : _a.trim();
  }).filter(Boolean) || []);
  return (l, k) => {
    const x = P, o = N, b = V;
    return t(), n("section", { class: T(a(_)), relative: "" }, [d(x, { field: e.primary.headline, wrapper: "h1" }, null, 8, ["field"]), e.primary.subline ? (t(), m(x, { key: 0, field: e.primary.subline, wrapper: "p", "font-400": "", "dark:text-neutral-900": "" }, null, 8, ["field"])) : i("", true), a(h).length > 0 ? (t(), n("ul", { key: 1, "aria-label": `Highlights of ${("getText" in l ? l.getText : a($))(e.primary.headline)}`, role: "list", "f-mt-xs": "", flex: "~ md:justify-center items-center wrap gap-x-16 gap-y-4" }, [(t(true), n(z, null, A(a(h), (q, v) => (t(), n("li", { key: v, contents: "" }, [v > 0 ? (t(), n("div", H)) : i("", true), c("span", j, w(q), 1)]))), 128))], 8, G)) : i("", true), a(C) ? (t(), n("div", F, [("hasLink" in l ? l.hasLink : a(s))(l.primary.link) ? (t(), m(o, { key: 0, field: l.primary.link, "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", "dark:nq-pill-white": "" }, null, 8, ["field"])) : i("", true), a(y) ? (t(), m(o, { key: 1, "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", field: e.primary.videoHref, flex: "~ gap-10 items-center" }, { default: f(() => [k[0] || (k[0] = c("div", { "text-16": "", "i-nimiq:triangle-right": "" }, null, -1)), c("span", I, w(e.primary.videoLabel), 1)]), _: 1, __: [0] }, 8, ["field"])) : i("", true), a(g) ? (t(), m(o, { key: 2, field: e.primary.secondaryLink, "un-text-white": "", "font-bold": "", "nq-arrow": "" }, null, 8, ["field"])) : i("", true)])) : i("", true), a(S) ? (t(), n("ul", E, [a(u) ? (t(), n("li", O, [d(o, { field: e.primary.appStore }, { default: f(() => [a(u) ? (t(), m(b, { key: 0, src: "/assets/images/apple-store-badge.png", h: "32 lg:40", alt: "Get it on Apple Store" })) : i("", true)]), _: 1 }, 8, ["field"])])) : i("", true), a(p) ? (t(), n("li", J, [d(o, { field: e.primary.playStore }, { default: f(() => [d(b, { src: "/assets/images/google-play-badge.png", h: "32 lg:40", alt: "Get it on Google Play" })]), _: 1 }, 8, ["field"])])) : i("", true)])) : i("", true)], 2);
  };
} }), W = Object.assign(K, { __name: "HeroDefault" });
export {
  W as _
};
