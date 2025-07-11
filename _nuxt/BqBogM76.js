import { _ as l } from "./BpR0sf--.js";
import { d as p, b as c, o as s, _ as i, h as _, w as d, e as t, a as m, t as o, c as u, f as h, g as f } from "./gdLxT4Lf.js";
const x = { bg: "$c", stack: "", "mb-0": "", "rounded-4": "", "h-240": "" }, g = { text: "12 white/70", "self-start": "", "right-12": "", "top-12": "", "justify-self-end": "", relative: "", "nq-label": "" }, v = { "p-26": "", "pt-0": "", "flex-1": "", flex: "~ col gap-12" }, b = { text: "neutral-800 group-hover:neutral-900", "nq-prose-compact": "", "mt-0": "", "transition-colors": "", "f-pt-2xs": "" }, k = { class: "nq-hoverable-cta", "mt-auto": "", "w-max": "" }, y = { key: 0, "text-14": "", "nq-label": "" }, w = { "text-blue": "" }, N = p({ __name: "App", props: { color: {}, link: {}, logo: {}, type: {}, name: {}, description: {}, developer: {} }, setup(q) {
  return (e, n) => {
    const a = l, r = i;
    return s(), c(r, { to: e.link, target: "_blank", w: "[min(calc(100vw-var(--px,32px)*2),350px)]", style: _(`--c: ${e.color}`), group: "", external: "", "p-6": "", "rounded-6": "", "gap-24": "", "h-full": "", "nq-hoverable": "" }, { default: d(() => [t("div", x, [m(a, { src: e.logo, "max-w": "45%", "rounded-4": "", "op-60": "", "h-auto": "", "max-h-full": "", "object-cover": "" }, null, 8, ["src"]), t("p", g, o(e.type), 1)]), t("div", v, [t("h3", null, o(e.name), 1), t("p", b, o(e.description), 1), t("div", k, [e.developer ? (s(), u("p", y, [n[0] || (n[0] = f(" By ")), t("span", w, o(e.developer), 1)])) : h("", true)])])]), _: 1 }, 8, ["to", "style"]);
  };
} }), V = Object.assign(N, { __name: "CardApp" });
export {
  V as _
};
