import { _ as $ } from "./iXO873XU.js";
import { d as h, c as a, o as n, a as u, w as D, D as C, i as f, B as R, e as g, b as d, f as _, F as y, r as B, u as r, t as k, W as P, m as z, n as N } from "./C95QRNzc.js";
import { _ as W } from "./9BNErSxb.js";
import { g as j } from "./CpsPJSKh.js";
import { g as q } from "./CVc7iRBp.js";
import "./DEpc-rVb.js";
import "./BPgVFFXt.js";
import "./w2ATokNL.js";
import "./DlAUqK2U.js";
const I = { flex: "~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row" }, V = h({ __name: "Default", props: { content: {}, images: {} }, setup(c) {
  return (m, l) => {
    const t = $, i = C, e = W;
    return n(), a("div", I, [u(t, { wrapper: "div", "nq-prose-compact": "", text: "14 md:18 neutral-900", field: m.content }, null, 8, ["field"]), u(e, { slides: m.images, style: { "--trigger-size": "min(300px,20vw)", "--r": "12px" }, shadow: true }, { default: D(({ slide: s }) => [u(i, { field: s, "rounded-8": "" }, null, 8, ["field"])]), _: 1 }, 8, ["slides"])]);
  };
} }), w = Object.assign(V, { __name: "RichTextCarouselDefault" }), E = { w: "[calc(100%+64px)]", flex: "~ gap-24 xl:gap-32 xl:justify-center ", snap: "x normal", "mx--32": "", "pt-18": "", "of-x-auto": "", "nq-scrollbar-hide": "", "lg:pr-0": "" }, F = ["data-selected"], O = { key: 0, ring: "1 neutral-500", "text-10": "", "font-bold": "", "px-8": "", "py-4": "", "rounded-4": "", "bg-neutral-400": "", "whitespace-nowrap": "", "left-8": "", "top--14": "", absolute: "", "z-1": "", "nq-label": "" }, S = ["disabled", "onClick"], K = { text: "white f-xl", "font-semibold": "" }, A = h({ __name: "WithTabs", props: { items: {} }, setup(c) {
  const m = f(() => c.items.map((e) => e.key)), l = R(m.value[0]), t = f(() => {
    const e = [];
    return c.items.forEach((s) => {
      e.some((o) => o.key === s.key) ? e.find((o) => o.key === s.key).images.push(s.slide) : e.push({ images: [s.slide], ...s, key: s.key });
    }), e;
  }), i = f(() => t.value.find((e) => e.key === l.value));
  return (e, s) => {
    const o = C, v = w;
    return n(), a("div", null, [g("ul", E, [(n(true), a(y, null, B(r(t), ({ buttonLogo: x, comingSoon: b, comingSoonLabel: T, key: p }) => (n(), a("li", { key: p, "scroll-mx": "32 xl:64", "shrink-0": "", relative: "", "first:pl-32": "", "last:pr-32": "", "data-selected": r(l) === p ? "" : void 0 }, [b ? (n(), a("p", O, k(T), 1)) : _("", true), g("button", { disabled: b, flex: "~ items-center gap-6", "rounded-8": "", "h-full": "", "whitespace-nowrap": "", "f-px-sm": "", "f-py-xs": "", "bg-gradient-blue": "", op: "50 selected:100 hocus:not-disabled:100", onClick: (H) => l.value = p }, [p !== "Naka" ? (n(), a(y, { key: 0 }, [u(o, { field: x, "h-full": "", "w-24": "" }, null, 8, ["field"]), g("span", K, k(p), 1)], 64)) : (n(), d(o, { key: 1, field: x, "h-18": "" }, null, 8, ["field"]))], 8, S)], 8, F))), 128))]), r(i) ? (n(), d(v, { key: 0, "f-mt-2xl": "", images: r(i).images, content: r(i).content }, null, 8, ["images", "content"])) : _("", true)]);
  };
} }), G = Object.assign(A, { __name: "RichTextCarouselWithTabs" }), te = h({ __name: "index", props: j(), setup(c) {
  const l = q(c.slice.primary.bgColor);
  return (t, i) => {
    const e = w, s = G;
    return n(), a("section", { class: N([r(l), { "md:flex-row": t.slice.variation === "default" }]) }, [t.slice.variation === "default" ? (n(), d(e, { key: 0, content: t.slice.primary.content, images: t.slice.items.map((o) => o.slide) }, null, 8, ["content", "images"])) : _("", true), t.slice.variation === "withTabs" ? (n(), d(s, P(z({ key: 1 }, t.slice)), null, 16)) : _("", true)], 2);
  };
} });
export {
  te as default
};
