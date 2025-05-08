import { _ as y } from "./DBd8fsAv.js";
import { d as C, j as c, B as k, L as V, c as B, o as l, e, n as d, u as i, b as p, f as N, w as q, a as z, D as $, _ as E } from "./ClGJWWej.js";
import { g as I } from "./CpsPJSKh.js";
import { g as L } from "./Dxc61GTl.js";
import { o as P, p as S, q as f } from "./CEBR9iVI.js";
import "./YKo2rOHu.js";
const Y = { relative: "", "max-w-screen": "", "w-full": "", "of-x-clip": "" }, j = { "w-full": "", "of-x-clip": "", "px-32": "", "max-md:max-w-none": "", style: { "--f-mb-min": "96", "--f-mb-max": "128" } }, H = C({ __name: "index", props: I(), setup(v) {
  const t = v, u = L(t.slice.primary.bgColor), m = c(() => t.slice.variation === "default" ? t.slice.primary.media.url : t.slice.variation === "withVideo" ? t.slice.primary.video.embed_url : ""), r = k(), { top: a } = P(r), { y: o } = S(), x = f("--rotate-x", r, { initialValue: "30deg" }), _ = f("--translate-y", r, { initialValue: "-100px" });
  V([a, o], () => {
    x.value = o.value < a.value ? `${(1 - o.value / a.value) * 30}deg` : "0deg", _.value = o.value < a.value ? `${o.value / a.value * 100 - 100}px` : "0";
  }, { immediate: true });
  const g = c(() => u.value.includes("bg-blue-sss") ? "text-white" : "text-neutral-800");
  return (n, s) => {
    const w = y, b = $, h = E;
    return l(), B("section", { "mx-0": "", "px-0": "", class: d([i(u), { "nq-overlaps": n.slice.variation === "default" }]) }, [e("div", Y, [e("div", { w: "320vw md:140vw", "i-custom:bg-hexagons": "", absolute: "", "inset-0": "", "h-full": "", "h-screen": "", "max-w-none": "", class: d(i(g)) }, null, 2)]), e("div", j, [e("div", { ref_key: "media", ref: r, style: { "--rotate-x": "30deg", "--translate-y": "-100px", transform: "perspective(1800px) rotateX(var(--rotate-x)) translateY(var(--translate-y))" }, origin: "[center_70%]", transition: "transform duration-350 ease-[cubic-bezier(0,0,0.25,1)]", "mx-auto": "", "h-full": "", "min-h-500": "", "children:w-full": "" }, [n.slice.variation === "default" ? (l(), p(w, { key: 0, src: i(m) }, null, 8, ["src"])) : n.slice.variation === "withVideo" ? (l(), p(h, { key: 1, to: i(m), external: "", "mx-auto": "", stack: "", "children:rounded-8": "", target: "_blank" }, { default: q(() => [z(b, { field: n.slice.primary.poster }, null, 8, ["field"]), s[0] || (s[0] = e("div", { "bg-gradient": "to-b from-neutral/30 to-neutral/60", "size-full": "" }, null, -1)), s[1] || (s[1] = e("div", { "i-nimiq:triangle-right": "", text: "56 white" }, null, -1))]), _: 1 }, 8, ["to"])) : N("", true)], 512)])], 2);
  };
} });
export {
  H as default
};
