import { _ as P } from "./skKO6Fnq.js";
import { _ as C } from "./CDGVCZAD.js";
import { _ as $ } from "./DHxtx_mo.js";
import { d as x, B as a, o, g as d, f as D, a as f, r as R, C as g, e as u, x as _, H as y, I as B, h as r, E as k, a3 as z, J as I, D as N } from "./B8biU-UE.js";
import { g as j } from "./CpsPJSKh.js";
import { g as q } from "./BzRmGp1f.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
import "./Fc1-Bd8L.js";
import "./BtBkGOBG.js";
import "./DlAUqK2U.js";
const E = { flex: "~ gap-32 md:gap-40 lg:gap-48 xl:gap-64 col md:row" }, V = x({ __name: "Default", props: { content: {}, images: {} }, setup(c) {
  return (m, l) => {
    const t = P, i = C, e = $;
    return o(), a("div", E, [d(t, { wrapper: "div", "nq-prose-compact": "", text: "14 md:18 neutral-900", field: m.content }, null, 8, ["field"]), d(e, { slides: m.images, style: { "--trigger-size": "min(300px,20vw)", "--r": "12px" }, shadow: true }, { default: D(({ slide: s }) => [d(i, { field: s, "rounded-8": "" }, null, 8, ["field"])]), _: 1 }, 8, ["slides"])]);
  };
} }), w = Object.assign(V, { __name: "RichTextCarouselDefault" }), W = { w: "[calc(100%+64px)]", flex: "~ gap-24 xl:gap-32 xl:justify-center ", snap: "x normal", "mx--32": "", "pt-18": "", "of-x-auto": "", "nq-scrollbar-hide": "", "lg:pr-0": "" }, O = ["data-selected"], S = { key: 0, ring: "1 neutral-500", "text-10": "", "font-bold": "", "px-8": "", "py-4": "", "rounded-4": "", "bg-neutral-400": "", "whitespace-nowrap": "", "left-8": "", "top--14": "", absolute: "", "z-1": "", "nq-label": "" }, F = ["disabled", "onClick"], H = { text: "white f-xl", "font-semibold": "" }, J = x({ __name: "WithTabs", props: { items: {} }, setup(c) {
  const m = f(() => c.items.map((e) => e.key)), l = R(m.value[0]), t = f(() => {
    const e = [];
    return c.items.forEach((s) => {
      e.some((n) => n.key === s.key) ? e.find((n) => n.key === s.key).images.push(s.slide) : e.push({ images: [s.slide], ...s, key: s.key });
    }), e;
  }), i = f(() => t.value.find((e) => e.key === l.value));
  return (e, s) => {
    const n = C, v = w;
    return o(), a("div", null, [g("ul", W, [(o(true), a(y, null, B(r(t), ({ buttonLogo: h, comingSoon: b, comingSoonLabel: T, key: p }) => (o(), a("li", { key: p, "scroll-mx": "32 xl:64", "shrink-0": "", relative: "", "first:pl-32": "", "last:pr-32": "", "data-selected": r(l) === p ? "" : void 0 }, [b ? (o(), a("p", S, k(T), 1)) : _("", true), g("button", { disabled: b, flex: "~ items-center gap-6", "rounded-8": "", "h-full": "", "whitespace-nowrap": "", "f-px-sm": "", "f-py-xs": "", "bg-gradient-blue": "", op: "50 selected:100 hocus:not-disabled:100", onClick: (A) => l.value = p }, [p === "Naka" ? (o(), u(n, { key: 0, field: h, "h-18": "", "w-full": "" }, null, 8, ["field"])) : (o(), a(y, { key: 1 }, [d(n, { field: h, "h-full": "", "w-24": "" }, null, 8, ["field"]), g("span", H, k(p), 1)], 64))], 8, F)], 8, O))), 128))]), r(i) ? (o(), u(v, { key: 0, "f-mt-2xl": "", images: r(i).images, content: r(i).content }, null, 8, ["images", "content"])) : _("", true)]);
  };
} }), K = Object.assign(J, { __name: "RichTextCarouselWithTabs" }), oe = x({ __name: "index", props: j(), setup(c) {
  const l = q(c.slice.primary.bgColor);
  return (t, i) => {
    const e = w, s = K;
    return o(), a("section", { class: N([r(l), { "md:flex-row": t.slice.variation === "default" }]) }, [t.slice.variation === "default" ? (o(), u(e, { key: 0, content: t.slice.primary.content, images: t.slice.items.map((n) => n.slide) }, null, 8, ["content", "images"])) : _("", true), t.slice.variation === "withTabs" ? (o(), u(s, z(I({ key: 1 }, t.slice)), null, 16)) : _("", true)], 2);
  };
} });
export {
  oe as default
};
