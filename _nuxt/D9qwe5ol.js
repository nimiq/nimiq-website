import { _ as $ } from "./DxbAjo62.js";
import { d as h, c as a, o as n, a as u, w as R, E as C, j as f, C as D, e as g, b as d, f as _, F as y, r as P, u as r, t as k, S as j, m as z, n as B } from "./BguRs3jF.js";
import { _ as N } from "./CgNsHDTI.js";
import { g as q } from "./CpsPJSKh.js";
import { g as E } from "./T2yBj71G.js";
import "./Cn5kCPLx.js";
import "./DeSMYd_K.js";
import "./Dqp79TGT.js";
const I = { flex: "~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row" }, S = h({ __name: "Default", props: { content: {}, images: {} }, setup(c) {
  return (m, l) => {
    const t = $, i = C, e = N;
    return n(), a("div", I, [u(t, { wrapper: "div", "nq-prose-compact": "", text: "14 md:18 neutral-900", field: m.content }, null, 8, ["field"]), u(e, { slides: m.images, style: { "--trigger-size": "min(300px,20vw)", "--r": "12px" }, shadow: true }, { default: R(({ slide: s }) => [u(i, { field: s, "rounded-8": "" }, null, 8, ["field"])]), _: 1 }, 8, ["slides"])]);
  };
} }), w = Object.assign(S, { __name: "RichTextCarouselDefault" }), V = { w: "[calc(100%+64px)]", flex: "~ gap-24 xl:gap-32 xl:justify-center ", snap: "x normal", "mx--32": "", "pt-18": "", "of-x-auto": "", "nq-scrollbar-hide": "", "lg:pr-0": "" }, W = ["data-selected"], F = { key: 0, ring: "1 neutral-500", "text-10": "", "font-bold": "", "px-8": "", "py-4": "", "rounded-4": "", "bg-neutral-400": "", "whitespace-nowrap": "", "left-8": "", "top--14": "", absolute: "", "z-1": "", "nq-label": "" }, O = ["disabled", "onClick"], K = { text: "white f-xl", "font-semibold": "" }, A = h({ __name: "WithTabs", props: { items: {} }, setup(c) {
  const m = f(() => c.items.map((e) => e.key)), l = D(m.value[0]), t = f(() => {
    const e = [];
    return c.items.forEach((s) => {
      e.some((o) => o.key === s.key) ? e.find((o) => o.key === s.key).images.push(s.slide) : e.push({ images: [s.slide], ...s, key: s.key });
    }), e;
  }), i = f(() => t.value.find((e) => e.key === l.value));
  return (e, s) => {
    const o = C, v = w;
    return n(), a("div", null, [g("ul", V, [(n(true), a(y, null, P(r(t), ({ buttonLogo: x, comingSoon: b, comingSoonLabel: T, key: p }) => (n(), a("li", { key: p, "scroll-mx": "32 xl:64", "shrink-0": "", relative: "", "first:pl-32": "", "last:pr-32": "", "data-selected": r(l) === p ? "" : void 0 }, [b ? (n(), a("p", F, k(T), 1)) : _("", true), g("button", { disabled: b, flex: "~ items-center gap-6", "rounded-8": "", "h-full": "", "whitespace-nowrap": "", "f-px-sm": "", "f-py-xs": "", "bg-gradient-blue": "", op: "50 selected:100 hocus:not-disabled:100", onClick: (H) => l.value = p }, [p !== "Naka" ? (n(), a(y, { key: 0 }, [u(o, { field: x, "h-full": "", "w-24": "" }, null, 8, ["field"]), g("span", K, k(p), 1)], 64)) : (n(), d(o, { key: 1, field: x, "h-18": "" }, null, 8, ["field"]))], 8, O)], 8, W))), 128))]), r(i) ? (n(), d(v, { key: 0, "f-mt-2xl": "", images: r(i).images, content: r(i).content }, null, 8, ["images", "content"])) : _("", true)]);
  };
} }), G = Object.assign(A, { __name: "RichTextCarouselWithTabs" }), ee = h({ __name: "index", props: q(), setup(c) {
  const l = E(c.slice.primary.bgColor);
  return (t, i) => {
    const e = w, s = G;
    return n(), a("section", { class: B([r(l), { "md:flex-row": t.slice.variation === "default" }]) }, [t.slice.variation === "default" ? (n(), d(e, { key: 0, content: t.slice.primary.content, images: t.slice.items.map((o) => o.slide) }, null, 8, ["content", "images"])) : _("", true), t.slice.variation === "withTabs" ? (n(), d(s, j(z({ key: 1 }, t.slice)), null, 16)) : _("", true)], 2);
  };
} });
export {
  ee as default
};
