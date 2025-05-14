import { _ as D } from "./B7p6i3HK.js";
import { _ as C } from "./C7IVxsr-.js";
import { _ as I } from "./RJUcGZf_.js";
import { d as h, c as a, o as n, a as u, w as N, j as f, B as R, e as g, b as _, f as d, F as y, r as B, u as c, t as k, D as S, S as j, m as z, n as P } from "./7tyaNgEA.js";
import { g as q } from "./CpsPJSKh.js";
import { g as V } from "./C3sJ3Yu7.js";
import "./-SGvg42Q.js";
import "./8Lad1M9Y.js";
import "./BmIFlatj.js";
const W = { flex: "~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row" }, E = h({ __name: "Default", props: { content: {}, images: {} }, setup(m) {
  return (l, r) => {
    const t = D, i = C, e = I;
    return n(), a("div", W, [u(t, { wrapper: "div", "nq-prose-compact": "", text: "14 md:18 neutral-900", field: l.content }, null, 8, ["field"]), u(e, { slides: l.images, style: { "--trigger-size": "min(300px,20vw)", "--r": "12px" }, shadow: true }, { default: N(({ slide: s }) => [u(i, { src: l.$prismic.asImageSrc(s), "rounded-8": "" }, null, 8, ["src"])]), _: 1 }, 8, ["slides"])]);
  };
} }), w = Object.assign(E, { __name: "RichTextCarouselDefault" }), F = { w: "[calc(100%+64px)]", flex: "~ gap-24 xl:gap-32 xl:justify-center ", snap: "x normal", "mx--32": "", "of-x-auto": "", "pt-18": "", "nq-scrollbar-hide": "", "lg:pr-0": "" }, O = ["data-selected"], K = { key: 0, ring: "1 neutral-500", absolute: "", "left-8": "", "top--14": "", "z-1": "", "whitespace-nowrap": "", "rounded-4": "", "bg-neutral-400": "", "px-8": "", "py-4": "", "text-10": "", "font-bold": "", "nq-label": "" }, A = ["disabled", "onClick"], G = { text: "white f-xl", "font-semibold": "" }, H = h({ __name: "WithTabs", props: { items: {} }, setup(m) {
  const l = f(() => m.items.map((e) => e.key)), r = R(l.value[0]), t = f(() => {
    const e = [];
    return m.items.forEach((s) => {
      e.some((o) => o.key === s.key) ? e.find((o) => o.key === s.key).images.push(s.slide) : e.push({ images: [s.slide], ...s, key: s.key });
    }), e;
  }), i = f(() => t.value.find((e) => e.key === r.value));
  return (e, s) => {
    const o = C, v = S, T = w;
    return n(), a("div", null, [g("ul", F, [(n(true), a(y, null, B(c(t), ({ buttonLogo: x, comingSoon: b, comingSoonLabel: $, key: p }) => (n(), a("li", { key: p, "scroll-mx": "32 xl:64", relative: "", "shrink-0": "", "first:pl-32": "", "last:pr-32": "", "data-selected": c(r) === p ? "" : void 0 }, [b ? (n(), a("p", K, k($), 1)) : d("", true), g("button", { disabled: b, flex: "~ items-center gap-6", "h-full": "", "whitespace-nowrap": "", "rounded-8": "", "bg-gradient-blue": "", "f-px-sm": "", "f-py-xs": "", op: "50 selected:100 hocus:not-disabled:100", onClick: (L) => r.value = p }, [p !== "Naka" ? (n(), a(y, { key: 0 }, [u(o, { src: e.$prismic.asImageSrc(x), "h-full": "", "w-24": "" }, null, 8, ["src"]), g("span", G, k(p), 1)], 64)) : (n(), _(v, { key: 1, field: x, "h-18": "" }, null, 8, ["field"]))], 8, A)], 8, O))), 128))]), c(i) ? (n(), _(T, { key: 0, "f-mt-2xl": "", images: c(i).images, content: c(i).content }, null, 8, ["images", "content"])) : d("", true)]);
  };
} }), J = Object.assign(H, { __name: "RichTextCarouselWithTabs" }), ne = h({ __name: "index", props: q(), setup(m) {
  const r = V(m.slice.primary.bgColor);
  return (t, i) => {
    const e = w, s = J;
    return n(), a("section", { class: P([c(r), { "md:flex-row": t.slice.variation === "default" }]) }, [t.slice.variation === "default" ? (n(), _(e, { key: 0, content: t.slice.primary.content, images: t.slice.items.map((o) => o.slide) }, null, 8, ["content", "images"])) : d("", true), t.slice.variation === "withTabs" ? (n(), _(s, j(z({ key: 1 }, t.slice)), null, 16)) : d("", true)], 2);
  };
} });
export {
  ne as default
};
