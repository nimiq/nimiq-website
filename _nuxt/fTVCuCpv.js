import { _ as l } from "./C7IVxsr-.js";
import { d as p, b as c, o as s, _, h as i, w as d, e as t, a as m, t as o, c as u, f as h, g as x } from "./7tyaNgEA.js";
const f = { bg: "$c", "mb-0": "", "h-240": "", "rounded-4": "", stack: "" }, g = { text: "12 white/70", relative: "", "right-12": "", "top-12": "", "self-start": "", "justify-self-end": "", "nq-label": "" }, v = { "flex-1": "", "p-26": "", "pt-0": "", flex: "~ col gap-12" }, b = { text: "neutral-800 group-hover:neutral-900", "nq-prose-compact": "", "mt-0": "", "transition-colors": "", "f-pt-2xs": "" }, k = { class: "nq-hoverable-cta", "mt-auto": "", "w-max": "" }, y = { key: 0, "text-14": "", "nq-label": "" }, w = { "text-blue": "" }, N = p({ __name: "App", props: { color: {}, link: {}, logo: {}, type: {}, name: {}, description: {}, developer: {} }, setup(q) {
  return (e, n) => {
    const a = l, r = _;
    return s(), c(r, { to: e.link, target: "_blank", w: "[min(calc(100vw-var(--px,32px)*2),350px)]", style: i(`--c: ${e.color}`), group: "", external: "", "h-full": "", "gap-24": "", "rounded-6": "", "p-6": "", "nq-hoverable": "" }, { default: d(() => [t("div", f, [m(a, { src: e.logo, "h-auto": "", "max-h-full": "", "max-w": "45%", "rounded-4": "", "object-cover": "", "op-60": "" }, null, 8, ["src"]), t("p", g, o(e.type), 1)]), t("div", v, [t("h3", null, o(e.name), 1), t("p", b, o(e.description), 1), t("div", k, [e.developer ? (s(), u("p", y, [n[0] || (n[0] = x(" By ")), t("span", w, o(e.developer), 1)])) : h("", true)])])]), _: 1 }, 8, ["to", "style"]);
  };
} }), V = Object.assign(N, { __name: "CardApp" });
export {
  V as _
};
