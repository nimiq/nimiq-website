import { _ as P } from "./9erUq_gT.js";
import { _ as C } from "./65QI6cPr.js";
import { _ as $ } from "./Cl_IQSJM.js";
import { d as h, j as a, o, g as d, f as R, a as f, v as D, k as g, e as u, l as _, F as k, r as j, h as r, t as y, T as z, s as B, n as N } from "./Dzy_QPZd.js";
import { g as q } from "./CpsPJSKh.js";
import { g as I } from "./tGZIKLS1.js";
import "./CMqLQgad.js";
import "./CR0Fnf8w.js";
import "./CJG5GsA3.js";
import "./rNWvlc5C.js";
import "./DlAUqK2U.js";
const V = { flex: "~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row" }, W = h({ __name: "Default", props: { content: {}, images: {} }, setup(c) {
  return (m, l) => {
    const t = P, i = C, e = $;
    return o(), a("div", V, [d(t, { wrapper: "div", "nq-prose-compact": "", text: "14 md:18 neutral-900", field: m.content }, null, 8, ["field"]), d(e, { slides: m.images, style: { "--trigger-size": "min(300px,20vw)", "--r": "12px" }, shadow: true }, { default: R(({ slide: s }) => [d(i, { field: s, "rounded-8": "" }, null, 8, ["field"])]), _: 1 }, 8, ["slides"])]);
  };
} }), v = Object.assign(W, { __name: "RichTextCarouselDefault" }), E = { w: "[calc(100%+64px)]", flex: "~ gap-24 xl:gap-32 xl:justify-center ", snap: "x normal", "mx--32": "", "pt-18": "", "of-x-auto": "", "nq-scrollbar-hide": "", "lg:pr-0": "" }, F = ["data-selected"], O = { key: 0, ring: "1 neutral-500", "text-10": "", "font-bold": "", "px-8": "", "py-4": "", "rounded-4": "", "bg-neutral-400": "", "whitespace-nowrap": "", "left-8": "", "top--14": "", absolute: "", "z-1": "", "nq-label": "" }, S = ["disabled", "onClick"], K = { text: "white f-xl", "font-semibold": "" }, A = h({ __name: "WithTabs", props: { items: {} }, setup(c) {
  const m = f(() => c.items.map((e) => e.key)), l = D(m.value[0]), t = f(() => {
    const e = [];
    return c.items.forEach((s) => {
      e.some((n) => n.key === s.key) ? e.find((n) => n.key === s.key).images.push(s.slide) : e.push({ images: [s.slide], ...s, key: s.key });
    }), e;
  }), i = f(() => t.value.find((e) => e.key === l.value));
  return (e, s) => {
    const n = C, w = v;
    return o(), a("div", null, [g("ul", E, [(o(true), a(k, null, j(r(t), ({ buttonLogo: x, comingSoon: b, comingSoonLabel: T, key: p }) => (o(), a("li", { key: p, "scroll-mx": "32 xl:64", "shrink-0": "", relative: "", "first:pl-32": "", "last:pr-32": "", "data-selected": r(l) === p ? "" : void 0 }, [b ? (o(), a("p", O, y(T), 1)) : _("", true), g("button", { disabled: b, flex: "~ items-center gap-6", "rounded-8": "", "h-full": "", "whitespace-nowrap": "", "f-px-sm": "", "f-py-xs": "", "bg-gradient-blue": "", op: "50 selected:100 hocus:not-disabled:100", onClick: (H) => l.value = p }, [p !== "Naka" ? (o(), a(k, { key: 0 }, [d(n, { field: x, "h-full": "", "w-24": "" }, null, 8, ["field"]), g("span", K, y(p), 1)], 64)) : (o(), u(n, { key: 1, field: x, "h-18": "" }, null, 8, ["field"]))], 8, S)], 8, F))), 128))]), r(i) ? (o(), u(w, { key: 0, "f-mt-2xl": "", images: r(i).images, content: r(i).content }, null, 8, ["images", "content"])) : _("", true)]);
  };
} }), G = Object.assign(A, { __name: "RichTextCarouselWithTabs" }), oe = h({ __name: "index", props: q(), setup(c) {
  const l = I(c.slice.primary.bgColor);
  return (t, i) => {
    const e = v, s = G;
    return o(), a("section", { class: N([r(l), { "md:flex-row": t.slice.variation === "default" }]) }, [t.slice.variation === "default" ? (o(), u(e, { key: 0, content: t.slice.primary.content, images: t.slice.items.map((n) => n.slide) }, null, 8, ["content", "images"])) : _("", true), t.slice.variation === "withTabs" ? (o(), u(s, z(B({ key: 1 }, t.slice)), null, 16)) : _("", true)], 2);
  };
} });
export {
  oe as default
};
