import { _ as q } from "./B7p6i3HK.js";
import { d as B, j as y, B as M, c as e, o as t, e as c, F as m, r as p, h as v, a as s, f as N, w as u, u as o, g as R, t as h, $ as I, ac as S, i as j } from "./7tyaNgEA.js";
import { g as F } from "./CpsPJSKh.js";
import { a as z, b as D, c as E, _ as H } from "./BuApbZ3h.js";
import { _ as L } from "./D0ibNwky.js";
import "./-SGvg42Q.js";
import "./8Lad1M9Y.js";
import "./BqwFAzj-.js";
import "./CHIgUVhi.js";
import "./Da46OeJF.js";
const O = { "bg-neutral-0": "" }, P = { "ml-12": "", "text-neutral-700": "" }, U = { key: 1, border: "b-1.5 r-1.5 neutral-500 data-open:neutral-700", "ml-6": "", "mr-12": "", "h-40": "", "flex-1": "", "translate-y--20": "", "rounded-br-6": "", "transition-colors": "" }, G = ["data-state"], J = ["data-state"], K = ["data-state"], Q = B({ __name: "index", props: F(), setup(f) {
  const x = y(() => f.slice.primary.item.map((a) => `${a.percentage}fr`).join(" ")), l = M([]), _ = y(() => f.slice.primary.item.filter((a) => l.value.includes(a.title)).map((a) => f.slice.primary.item.map((n) => n.title).indexOf(a.title)));
  return (a, n) => {
    const b = D, w = L, k = q, $ = E, C = z, V = H;
    return t(), e("section", O, [c("div", { grid: "~ gap-x-6 flow-row gap-y-20", style: v({ gridTemplateColumns: o(x), gridTemplateRows: `repeat(${a.slice.primary.item.length + 1}, auto)` }), "w-full": "" }, [(t(true), e(m, null, p(a.slice.primary.item, ({ color: d }, g) => (t(), e("div", { key: g, style: v(`background-image:var(--nq-${d}-gradient)`), "h-81": "", "rounded-6": "", shadow: "" }, null, 4))), 128)), (t(true), e(m, null, p(a.slice.primary.item, ({ title: d, description: g, color: T, percentage: A }, r) => (t(), e(m, { key: r }, [s(V, { modelValue: o(l), "onUpdate:modelValue": n[1] || (n[1] = (i) => S(l) ? l.value = i : null), "w-full": "" }, { default: u(() => [s(C, { "col-span-full": "", value: d }, { default: u(() => [s(w, null, { default: u(() => [s(b, { flex: "~ items-center gap-x-8", "w-full": "", "bg-transparent": "" }, { default: u(() => [c("span", { style: v({ color: o(l).length === 0 || o(l).includes(d) ? `rgb(var(--nq-${T}))` : "rgb(var(--nq-neutral-700))" }), "font-semibold": "", "transition-colors": "", "f-text-lg": "" }, [R(h(d) + " ", 1), c("span", P, h(A) + "%", 1)], 4), n[2] || (n[2] = c("div", { text: "10 neutral-600", "transition-transform": "", "duration-300": "", "i-nimiq:chevron-right": "", "data-open:rotate-90": "" }, null, -1)), r > 0 ? (t(), e("div", { key: 0, relative: "", "right--6": "", "h-1.5": "", "flex-1": "", "transition-colors": "", bg: "neutral-500 data-open:neutral-700", onClick: n[0] || (n[0] = I(() => {
    }, ["stop"])) })) : (t(), e("div", U))]), _: 2 }, 1024)]), _: 2 }, 1024), s($, { "of-hidden": "", class: "content" }, { default: u(() => [s(k, { wrapper: "div", field: g, "max-w-52ch": "" }, null, 8, ["field"])]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["modelValue"]), (t(true), e(m, null, p(Math.max(r - 1, 0), (i) => (t(), e("div", { key: i, w: "[calc(100%+6px)]", "data-state": o(_).includes(Math.max(r - 1, 0) + 1) ? "active" : void 0, relative: "", "top-12.75": "", "h-1.5": "", "transition-colors": "", bg: "neutral-500 data-active:neutral-700" }, null, 8, G))), 128)), r > 0 ? (t(), e("div", { key: 0, relative: "", "of-hidden": "", "data-state": o(_).includes(Math.max(r - 1, 0) + 1) ? "active" : void 0 }, n[3] || (n[3] = [c("div", { w: "50%", absolute: "", "h-14.5": "", "translate-x--0.75": "", "translate-y--1.5": "", "rounded-br-6": "", ring: "1.5 neutral-500 data-active:neutral-700" }, null, -1)]), 8, J)) : N("", true), (t(true), e(m, null, p(a.slice.primary.item.length - r - 1, (i) => (t(), e("div", { key: i, h: "[calc(100%+40px)]", "data-state": o(_).includes(i + r) ? "active" : void 0, "w-1.5": "", "self-center": "", "justify-self-center": "", bg: "neutral-500 data-active:neutral-700" }, null, 8, K))), 128))], 64))), 128))], 4)]);
  };
} }), le = j(Q, [["__scopeId", "data-v-16886981"]]);
export {
  le as default
};
