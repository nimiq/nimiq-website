import { _ as i } from "./CrnXQicC.js";
import { d as _, y as d, b as m, o as n, _ as u, h, u as f, w as b, e as t, a as g, t as o, c as x, f as v, g as k } from "./BguRs3jF.js";
const y = { bg: "$c", stack: "", "mb-0": "", "rounded-4": "", "h-240": "" }, w = { text: "12 white/70", "self-start": "", "right-12": "", "top-12": "", "justify-self-end": "", relative: "", "nq-label": "" }, N = { "p-26": "", "pt-0": "", "flex-1": "", flex: "~ col gap-12" }, q = { text: "neutral-800 group-hover:neutral-900", "nq-prose-compact": "", "mt-0": "", "transition-colors": "", "f-pt-2xs": "" }, B = { class: "nq-hoverable-cta", "mt-auto": "", "w-max": "" }, C = { key: 0, "text-14": "", "nq-label": "" }, $ = { "text-blue": "" }, V = _({ __name: "App", props: { color: {}, link: {}, logo: {}, type: {}, name: {}, description: {}, developer: {} }, setup(s) {
  const { url: l } = d(), r = s.link.replace(/\/$/, "").replace(l, "");
  return (e, a) => {
    const p = i, c = u;
    return n(), m(c, { to: f(r), target: "_blank", w: "[min(calc(100vw-var(--px,32px)*2),350px)]", style: h(`--c: ${e.color}`), group: "", external: "", "p-6": "", "rounded-6": "", "gap-24": "", "h-full": "", "nq-hoverable": "", "aria-label": `Go to ${e.name} website` }, { default: b(() => [t("div", y, [g(p, { src: e.logo, "max-w": "45%", "rounded-4": "", "op-60": "", "h-auto": "", "max-h-full": "", "object-cover": "" }, null, 8, ["src"]), t("p", w, o(e.type), 1)]), t("div", N, [t("h3", null, o(e.name), 1), t("p", q, o(e.description), 1), t("div", B, [e.developer ? (n(), x("p", C, [a[0] || (a[0] = k(" By ")), t("span", $, o(e.developer), 1)])) : v("", true)])])]), _: 1 }, 8, ["to", "style", "aria-label"]);
  };
} }), A = Object.assign(V, { __name: "CardApp" });
export {
  A as _
};
