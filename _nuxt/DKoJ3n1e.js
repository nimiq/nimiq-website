import { _ as c } from "./DFn-vR6U.js";
import { d as i, e as m, o as a, m as d, q as _, h as u, f as h, k as t, g as f, t as o, j as x, l as b, p as g } from "./BdODHn_3.js";
const v = { bg: "$c", stack: "", "mb-0": "", "rounded-4": "", "h-240": "" }, k = { text: "12 white/70", "self-start": "", "right-12": "", "top-12": "", "justify-self-end": "", relative: "", "nq-label": "" }, y = { "p-26": "", "pt-0": "", "flex-1": "", flex: "~ col gap-12" }, q = { text: "neutral-800 group-hover:neutral-900", "nq-prose-compact": "", "mt-0": "", "transition-colors": "", "f-pt-2xs": "" }, w = { class: "nq-hoverable-cta", "mt-auto": "", "w-max": "" }, N = { key: 0, "text-14": "", "nq-label": "" }, B = { "text-blue": "" }, $ = "https://nimiq.com", j = i({ __name: "App", props: { color: {}, link: {}, logo: {}, type: {}, name: {}, description: {}, developer: {} }, setup(s) {
  const l = s.link.replace(/\/$/, "").replace($, "");
  return (e, n) => {
    const r = c, p = d;
    return a(), m(p, { to: u(l), target: "_blank", w: "[min(calc(100vw-var(--px,32px)*2),350px)]", style: _(`--c: ${e.color}`), group: "", external: "", "p-6": "", "rounded-6": "", "gap-24": "", "h-full": "", "nq-hoverable": "", "aria-label": `Go to ${e.name} website` }, { default: h(() => [t("div", v, [f(r, { src: e.logo, "max-w": "45%", "rounded-4": "", "op-60": "", "h-auto": "", "max-h-full": "", "object-cover": "" }, null, 8, ["src"]), t("p", k, o(e.type), 1)]), t("div", y, [t("h3", null, o(e.name), 1), t("p", q, o(e.description), 1), t("div", w, [e.developer ? (a(), x("p", N, [n[0] || (n[0] = g(" By ")), t("span", B, o(e.developer), 1)])) : b("", true)])])]), _: 1 }, 8, ["to", "style", "aria-label"]);
  };
} }), A = Object.assign(j, { __name: "CardApp" });
export {
  A as _
};
