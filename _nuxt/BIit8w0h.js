import { _ as y } from "./BpR0sf--.js";
import { d as C, j as c, B as k, X as V, c as B, o as l, e, n as d, u as i, b as p, f as N, w as $, a as q, D as z, _ as E } from "./gdLxT4Lf.js";
import { g as I } from "./CpsPJSKh.js";
import { g as P } from "./DzQE7UG-.js";
import { q as S, r as X, s as f } from "./eRMYwULF.js";
import "./DYDUvkDP.js";
const Y = { "max-w-screen": "", "w-full": "", relative: "", "of-x-clip": "" }, j = { "px-32": "", "w-full": "", "of-x-clip": "", "max-md:max-w-none": "", style: { "--f-mb-min": "96", "--f-mb-max": "128" } }, H = C({ __name: "index", props: I(), setup(v) {
  const t = v, u = P(t.slice.primary.bgColor), m = c(() => t.slice.variation === "default" ? t.slice.primary.media.url : t.slice.variation === "withVideo" ? t.slice.primary.video.embed_url : ""), o = k(), { top: a } = S(o), { y: r } = X(), x = f("--rotate-x", o, { initialValue: "30deg" }), _ = f("--translate-y", o, { initialValue: "-100px" });
  V([a, r], () => {
    x.value = r.value < a.value ? `${(1 - r.value / a.value) * 30}deg` : "0deg", _.value = r.value < a.value ? `${r.value / a.value * 100 - 100}px` : "0";
  }, { immediate: true });
  const g = c(() => u.value.includes("bg-blue-sss") ? "text-white" : "text-neutral-800");
  return (s, n) => {
    const w = y, b = z, h = E;
    return l(), B("section", { "mx-0": "", "px-0": "", class: d([i(u), { "nq-overlaps": s.slice.variation === "default" }]) }, [e("div", Y, [e("div", { w: "320vw md:140vw", "i-custom:bg-hexagons": "", "h-full": "", "h-screen": "", "max-w-none": "", "inset-0": "", absolute: "", class: d(i(g)) }, null, 2)]), e("div", j, [e("div", { ref_key: "media", ref: o, style: { "--rotate-x": "30deg", "--translate-y": "-100px", transform: "perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" }, origin: "[center_70%]", transition: "transform duration-350 ease-[cubic-bezier(0,0,0.25,1)]", "mx-auto": "", "h-full": "", "min-h-500": "", "children:w-full": "" }, [s.slice.variation === "default" ? (l(), p(w, { key: 0, src: i(m) }, null, 8, ["src"])) : s.slice.variation === "withVideo" ? (l(), p(h, { key: 1, to: i(m), external: "", stack: "", "mx-auto": "", "children:rounded-8": "", target: "_blank" }, { default: $(() => [q(b, { field: s.slice.primary.poster }, null, 8, ["field"]), n[0] || (n[0] = e("div", { "bg-gradient": "to-b from-neutral/30 to-neutral/60", "size-full": "" }, null, -1)), n[1] || (n[1] = e("div", { "i-nimiq:triangle-right": "", text: "56 white" }, null, -1))]), _: 1, __: [0, 1] }, 8, ["to"])) : N("", true)], 512)])], 2);
  };
} });
export {
  H as default
};
