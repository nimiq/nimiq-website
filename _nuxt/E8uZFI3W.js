import { _ as A } from "./BICjbqnc.js";
import { d as N, a as y, v as R, j as a, o as n, k as d, F as u, r as g, q as p, g as l, l as B, f as m, h as i, p as I, t as x, ae as S, aJ as j } from "./BSLliBk6.js";
import { g as F } from "./CpsPJSKh.js";
import { a as M, b as z, c as D, _ as E } from "./xt8gbTo6.js";
import { _ as H } from "./DMdQUukO.js";
import { _ as J } from "./DlAUqK2U.js";
import "./FOZmO4jG.js";
import "./CMlG4309.js";
import "./CHIgUVhi.js";
import "./2pNtKdkP.js";
const L = { "bg-neutral-0": "" }, O = { "text-neutral-700": "", "ml-12": "" }, P = { key: 1, border: "b-1.5 r-1.5 neutral-500 data-open:neutral-700", "ml-6": "", "mr-12": "", "rounded-br-6": "", "flex-1": "", "h-40": "", "translate-y--20": "", "transition-colors": "" }, U = ["data-state"], G = ["data-state"], K = N({ __name: "index", props: F(), setup(f) {
  const h = y(() => f.slice.primary.item.map((e) => `${e.percentage}fr`).join(" ")), r = R([]), v = y(() => f.slice.primary.item.filter((e) => r.value.includes(e.title)).map((e) => f.slice.primary.item.map((t) => t.title).indexOf(e.title)));
  return (e, t) => {
    const b = z, w = H, k = A, $ = D, C = M, V = E;
    return n(), a("section", L, [d("div", { grid: "~ gap-x-6 flow-row gap-y-20", style: p({ gridTemplateColumns: i(h), gridTemplateRows: `repeat(${e.slice.primary.item.length + 1}, auto)` }), "w-full": "" }, [(n(true), a(u, null, g(e.slice.primary.item, ({ color: s }, _) => (n(), a("div", { key: _, style: p(`background-image:var(--nq-${s}-gradient)`), "rounded-6": "", "h-81": "", shadow: "" }, null, 4))), 128)), (n(true), a(u, null, g(e.slice.primary.item, ({ title: s, description: _, color: T, percentage: q }, o) => (n(), a(u, { key: o }, [l(V, { modelValue: i(r), "onUpdate:modelValue": t[1] || (t[1] = (c) => j(r) ? r.value = c : null), "w-full": "", style: p(`grid-column: 1 / ${1 + o};`) }, { default: m(() => [l(C, { "col-span-full": "", value: s }, { default: m(() => [l(w, null, { default: m(() => [l(b, { flex: "~ items-center gap-x-8", "bg-transparent": "", "w-full": "" }, { default: m(() => [d("span", { style: p({ color: i(r).length === 0 || i(r).includes(s) ? `rgb(var(--nq-${T}))` : "rgb(var(--nq-neutral-700))" }), "font-semibold": "", "transition-colors": "", "f-text-lg": "" }, [I(x(s) + " ", 1), d("span", O, x(q) + "%", 1)], 4), t[2] || (t[2] = d("div", { text: "10 neutral-600", "transition-transform": "", "duration-300": "", "i-nimiq:chevron-right": "", "data-open:rotate-90": "" }, null, -1)), o > 0 ? (n(), a("div", { key: 0, "flex-1": "", outline: "0.75 neutral-500 data-open:neutral-700", "transition-colors": "", "right--6": "", relative: "", onClick: t[0] || (t[0] = S(() => {
    }, ["stop"])) })) : (n(), a("div", P))]), _: 2, __: [2] }, 1024)]), _: 2 }, 1024), l($, { "of-hidden": "", class: "content" }, { default: m(() => [l(k, { wrapper: "div", field: _, "max-w-52ch": "" }, null, 8, ["field"])]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"])]), _: 2 }, 1032, ["modelValue", "style"]), o > 0 ? (n(), a("div", { key: 0, relative: "", "of-hidden": "", "data-state": i(v).includes(Math.max(o - 1, 0) + 1) ? "active" : void 0 }, t[3] || (t[3] = [d("div", { w: "50%", "rounded-br-6": "", "h-12": "", "translate-x--0.75": "", "translate-y--1": "", absolute: "", ring: "1.5 neutral-500 data-active:neutral-700" }, null, -1)]), 8, U)) : B("", true), (n(true), a(u, null, g(e.slice.primary.item.length - o - 1, (c) => (n(), a("div", { key: c, h: "[calc(100%+40px)]", "data-state": i(v).includes(c + o) ? "active" : void 0, "w-1.5": "", "self-center": "", "justify-self-center": "", bg: "neutral-500 data-active:neutral-700" }, null, 8, G))), 128))], 64))), 128))], 4)]);
  };
} }), re = J(K, [["__scopeId", "data-v-778c9b78"]]);
export {
  re as default
};
