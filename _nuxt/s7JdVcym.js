import { a5 as b, d as T, a as f, B as o, o as t, g as d, e as m, x as a, S as N, h as r, H as P, I as D, ag as q, f as p, C as y, E as L, D as F } from "./B8biU-UE.js";
import { _ as O } from "./Fc1-Bd8L.js";
import { a as u, g as I } from "./DRbUa3ZN.js";
import { g as U } from "./BzRmGp1f.js";
const Z = "rovingFocusGroup.onEntryFocus", ee = { bubbles: false, cancelable: true }, B = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function R(e, i) {
  return i !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function te(e, i, s) {
  const n = R(e.key, s);
  if (!(i === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(i === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n))) return B[n];
}
function re(e, i = false) {
  const s = b();
  for (const n of e) if (n === s || (n.focus({ preventScroll: i }), b() !== s)) return;
}
function ne(e, i) {
  return e.map((s, n) => e[(i + n) % e.length]);
}
const V = ["aria-label"], z = { key: 0, "rounded-full": "", "bg-neutral-500": "", "size-6": "" }, H = { text: "f-xl green", "font-semibold": "" }, G = { key: 2, flex: "~ wrap gap-x-32 gap-y-16 items-center", "f-mt-lg": "", style: { "--nq-font-size-min": "18", "--nq-font-size-max": "22" } }, $ = { "font-semibold": "" }, Y = { key: 3, "f-mt-xl": "", flex: "~ wrap gap-32 lg:gap-40" }, j = { key: 0 }, K = { key: 1 }, M = T({ __name: "Default", props: { primary: {}, items: { default: () => [] } }, setup(e) {
  const i = f(() => u(e.primary.link)), s = f(() => u(e.primary.secondaryLink)), n = f(() => u(e.primary.video)), _ = f(() => i.value || s.value || n.value), g = f(() => u(e.primary.appStore)), h = f(() => u(e.primary.playStore)), E = f(() => g.value || h.value), S = U(e.primary.bgColor), k = f(() => e.items.map((l) => {
    var _a;
    return (_a = l.highlight) == null ? void 0 : _a.trim();
  }).filter(Boolean) || []);
  return (l, w) => {
    const x = N, c = q, v = O;
    return t(), o("section", { class: F(r(S)), relative: "" }, [d(x, { field: e.primary.headline, wrapper: "h1" }, null, 8, ["field"]), e.primary.subline ? (t(), m(x, { key: 0, field: e.primary.subline, wrapper: "p", "font-400": "", "dark:text-neutral-900": "" }, null, 8, ["field"])) : a("", true), r(k).length > 0 ? (t(), o("ul", { key: 1, "aria-label": `Highlights of ${("getText" in l ? l.getText : r(I))(e.primary.headline)}`, role: "list", "f-mt-xs": "", flex: "~ md:justify-center items-center wrap gap-x-16 gap-y-4" }, [(t(true), o(P, null, D(r(k), (C, A) => (t(), o("li", { key: A, contents: "" }, [A > 0 ? (t(), o("div", z)) : a("", true), y("span", H, L(C), 1)]))), 128))], 8, V)) : a("", true), r(_) ? (t(), o("div", G, [("hasLink" in l ? l.hasLink : r(u))(l.primary.link) ? (t(), m(c, { key: 0, field: l.primary.link, "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", "dark:nq-pill-white": "" }, null, 8, ["field"])) : a("", true), r(n) ? (t(), m(c, { key: 1, "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", field: e.primary.videoHref, flex: "~ gap-10 items-center" }, { default: p(() => [w[0] || (w[0] = y("div", { "text-16": "", "i-nimiq:triangle-right": "" }, null, -1)), y("span", $, L(e.primary.videoLabel), 1)]), _: 1, __: [0] }, 8, ["field"])) : a("", true), r(s) ? (t(), m(c, { key: 2, field: e.primary.secondaryLink, "un-text-white": "", "font-bold": "", "nq-arrow": "" }, null, 8, ["field"])) : a("", true)])) : a("", true), r(E) ? (t(), o("ul", Y, [r(g) ? (t(), o("li", j, [d(c, { field: e.primary.appStore }, { default: p(() => [r(g) ? (t(), m(v, { key: 0, src: "/assets/images/apple-store-badge.png", "f-h": "36/52", alt: "Get it on Apple Store" })) : a("", true)]), _: 1 }, 8, ["field"])])) : a("", true), r(h) ? (t(), o("li", K, [d(c, { field: e.primary.playStore }, { default: p(() => [d(v, { src: "/assets/images/google-play-badge.svg", "f-h": "36/52", alt: "Get it on Google Play" })]), _: 1 }, 8, ["field"])])) : a("", true)])) : a("", true)], 2);
  };
} }), ae = Object.assign(M, { __name: "HeroDefault" });
export {
  Z as E,
  ae as _,
  ee as a,
  re as f,
  te as g,
  ne as w
};
