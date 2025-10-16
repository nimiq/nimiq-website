import { _ as c } from "./Fc1-Bd8L.js";
import { d as i, e as m, o as a, F as d, v as _, h as u, f as h, C as t, g as f, E as o, B as x, x as v, G as b } from "./B8biU-UE.js";
const g = { bg: "$c", stack: "", "mb-0": "", "rounded-4": "", "h-240": "" }, k = { text: "12 white/70", "self-start": "", "right-12": "", "top-12": "", "justify-self-end": "", relative: "", "nq-label": "" }, y = { "p-26": "", "pt-0": "", "flex-1": "", flex: "~ col gap-12" }, w = { text: "neutral-800 group-hover:neutral-900", "nq-prose-compact": "", "mt-0": "", "transition-colors": "", "f-pt-2xs": "" }, q = { class: "nq-hoverable-cta", "mt-auto": "", "w-max": "" }, B = { key: 0, "text-14": "", "nq-label": "" }, N = { "text-blue": "" }, C = "https://nimiq.com", $ = i({ __name: "App", props: { color: {}, link: {}, logo: {}, type: {}, name: {}, description: {}, developer: {} }, setup(s) {
  const l = s.link.replace(/\/$/, "").replace(C, "");
  return (e, n) => {
    const r = c, p = d;
    return a(), m(p, { to: u(l), target: "_blank", w: "[min(calc(100vw-var(--px,32px)*2),350px)]", style: _(`--c: ${e.color}`), external: "", group: "", "p-6": "", "rounded-6": "", "gap-24": "", "h-full": "", "nq-hoverable": "", "aria-label": `Go to ${e.name} website` }, { default: h(() => [t("div", g, [f(r, { src: e.logo, "max-w": "45%", "rounded-4": "", "op-60": "", "h-auto": "", "max-h-full": "", "object-cover": "" }, null, 8, ["src"]), t("p", k, o(e.type), 1)]), t("div", y, [t("h3", null, o(e.name), 1), t("p", w, o(e.description), 1), t("div", q, [e.developer ? (a(), x("p", B, [n[0] || (n[0] = b(" By ")), t("span", N, o(e.developer), 1)])) : v("", true)])])]), _: 1 }, 8, ["to", "style", "aria-label"]);
  };
} }), A = Object.assign($, { __name: "CardApp" });
export {
  A as _
};
