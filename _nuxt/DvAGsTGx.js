import { _ as y } from "./Fc1-Bd8L.js";
import { _ as C } from "./CDGVCZAD.js";
import { d as k, a as c, r as V, Q as B, B as N, o as l, C as e, D as d, h as s, e as p, x as q, f as z, g as P, F as $ } from "./B8biU-UE.js";
import { g as E } from "./CpsPJSKh.js";
import { g as I } from "./BzRmGp1f.js";
import { p as S, q as Y, r as f } from "./DOgGst0G.js";
import "./B5vKjtsS.js";
const D = { "max-w-screen": "", "w-full": "", relative: "", "of-x-clip": "" }, F = { "px-32": "", "w-full": "", "of-x-clip": "", "max-md:max-w-none": "", style: { "--f-mb-min": "96", "--f-mb-max": "128" } }, H = k({ __name: "index", props: E(), setup(x) {
  const t = x, u = I(t.slice.primary.bgColor), m = c(() => t.slice.variation === "default" ? t.slice.primary.media.url : t.slice.variation === "withVideo" ? t.slice.primary.video.embed_url : ""), o = V(), { top: a } = S(o), { y: r } = Y(), v = f("--rotate-x", o, { initialValue: "30deg" }), _ = f("--translate-y", o, { initialValue: "-100px" });
  B([a, r], () => {
    v.value = r.value < a.value ? `${(1 - r.value / a.value) * 30}deg` : "0deg", _.value = r.value < a.value ? `${r.value / a.value * 100 - 100}px` : "0";
  }, { immediate: true });
  const g = c(() => u.value.includes("bg-blue-sss") ? "text-white" : "text-neutral-800");
  return (n, i) => {
    const w = y, h = C, b = $;
    return l(), N("section", { "mx-0": "", "px-0": "", class: d([s(u), { "nq-overlaps": n.slice.variation === "default" }]) }, [e("div", D, [e("div", { w: "320vw md:140vw", "i-custom:bg-hexagons": "", "h-full": "", "h-screen": "", "max-w-none": "", "inset-0": "", absolute: "", class: d(s(g)) }, null, 2)]), e("div", F, [e("div", { ref_key: "media", ref: o, style: { "--rotate-x": "30deg", "--translate-y": "-100px", transform: "perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" }, origin: "[center_70%]", transition: "transform duration-350 ease-[cubic-bezier(0,0,0.25,1)]", "mx-auto": "", "h-full": "", "min-h-500": "", "children:w-full": "" }, [n.slice.variation === "default" ? (l(), p(w, { key: 0, src: s(m) }, null, 8, ["src"])) : n.slice.variation === "withVideo" ? (l(), p(b, { key: 1, to: s(m), external: "", stack: "", "mx-auto": "", "children:rounded-8": "", target: "_blank" }, { default: z(() => [P(h, { field: n.slice.primary.poster }, null, 8, ["field"]), i[0] || (i[0] = e("div", { "bg-gradient": "to-b from-neutral/30 to-neutral/60", "size-full": "" }, null, -1)), i[1] || (i[1] = e("div", { "i-nimiq:triangle-right": "", text: "56 white" }, null, -1))]), _: 1, __: [0, 1] }, 8, ["to"])) : q("", true)], 512)])], 2);
  };
} });
export {
  H as default
};
