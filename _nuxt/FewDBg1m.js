import { u as V } from "./-SGvg42Q.js";
import { s as z, u as B } from "./BmIFlatj.js";
import { B as p, L as N, E as S, a1 as I, a2 as P, j as k, d as q, c as x, o as b, e as u, u as d, m as T, F as $, r as M, R as X, h as A } from "./7tyaNgEA.js";
function E(c = {}) {
  const { initialIndex: i = 0, keyboard: C = true } = c, t = p([]), s = p(), l = p([]), o = p(/* @__PURE__ */ new Set()), g = p(false);
  function h() {
    if (!s.value) return;
    const a = s.value.querySelectorAll("[data-slide]");
    l.value = Array.from(a), l.value.length && (l.value.forEach((m, y) => {
      V(m, ([w]) => {
        var _a;
        w && (w.isIntersecting ? o.value.add(y) : o.value.delete(y), t.value = Array.from(o.value).sort((_, j) => _ - j), (_a = c.onStepChanged) == null ? void 0 : _a.call(c, t.value));
      }, { root: s.value, threshold: 0.5 });
    }), g.value = true, i > 0 && i < l.value.length && I(() => f(i)));
  }
  function f(a) {
    var _a;
    if (a < 0 || !l.value.length || a >= l.value.length) return;
    const m = l.value[a];
    m && s.value && (s.value.scrollTo({ top: 0, left: m.offsetLeft, behavior: "smooth" }), (_a = c.onStepChanged) == null ? void 0 : _a.call(c, t.value));
  }
  const r = () => {
    const a = Math.max(...t.value.length ? t.value : [0]);
    f(Math.min(a + 1, l.value.length - 1));
  }, n = () => {
    const a = Math.min(...t.value.length ? t.value : [0]);
    f(Math.max(a - 1, 0));
  };
  function e() {
    t.value = [], o.value.clear(), s.value && g.value && I(() => {
      f(i);
    });
  }
  N(() => s.value, (a) => {
    a && h();
  }, { immediate: true }), S(async () => {
    await I(), s.value && h();
  }), C && S(() => {
    z(s, r, n);
  }), P(() => {
    o.value.clear();
  });
  const v = k(() => o.value.size);
  return { activeIndexes: t, scroller: s, items: l, visibleCount: v, slideTo: f, slideNext: r, slidePrev: n, reset: e, canSlideNext: k(() => !l.value.length || !t.value.length ? false : Math.max(...t.value) < l.value.length - 1), canSlidePrev: k(() => !l.value.length || !t.value.length ? false : Math.min(...t.value) > 0) };
}
const L = { group: "", "h-full": "", "max-w-none": "", stack: "" }, O = ["disabled"], F = ["disabled"], K = { flex: "~ gap-6 justify-center", relative: "", "mb-20": "", "self-end": "" }, R = ["title", "onClick"], U = q({ __name: "Carousel", props: { items: {}, multiple: { type: Boolean, default: true } }, setup(c) {
  const i = c.multiple ? E() : B(), { scroller: C, slideTo: t, slideNext: s, slidePrev: l, canSlideNext: o, canSlidePrev: g } = i, h = c.multiple ? i.activeIndexes : i.activeIndex, f = k(() => {
    if (c.multiple) {
      const r = h.value.sort((y, w) => y - w);
      if (!r.length) return { width: "0px", transform: "translateX(0px)" };
      const n = r[0], v = r[r.length - 1] - n + 1, a = v * 8 + (v - 1) * 6, m = n * 14;
      return { width: `${a}px`, transform: `translateX(${m}px)` };
    } else return { width: "8px", transform: `translateX(${h.value * 8}px)` };
  });
  return (r, n) => (b(), x("div", L, [u("button", { bg: "neutral-400 disabled:neutral-200  not-disabled:hocus:neutral-500", op: "0 group-hover:100 disabled:0", disabled: !d(g), "data-prev": "", invisible: "", "z-5": "", "ml-12": "", "w-max": "", "justify-self-start": "", "rounded-full": "", "p-16": "", shadow: "", transition: "", stack: "", "md:visible": "", "hocus:cursor-pointer": "", onClick: n[0] || (n[0] = (...e) => d(l) && d(l)(...e)) }, n[2] || (n[2] = [u("div", { "translate-x--1": "", "i-nimiq:chevron-left": "", "f-text-xl": "" }, null, -1)]), 8, O), u("ul", T({ ref_key: "scroller", ref: C, flex: "~ gap-16 md:gap-32 items-stretch", snap: "x mandatory", "scroll-px": "$px", pb: "$pb" }, r.$attrs, { "h-full": "", "w-full": "", "justify-self-start": "", "of-x-auto": "", "nq-scrollbar-hide": "" }), [(b(true), x($, null, M(r.items, (e, v) => (b(), x("li", { key: typeof e == "object" && e && "name" in e ? e.name : v, snap: "start always", p: "first:l-$px last:r-$px", "data-slide": "", "h-full": "", "flex-1": "", "shrink-0": "" }, [X(r.$slots, "default", { item: e })]))), 128))], 16), u("button", { bg: "neutral-400 disabled:neutral-200 not-disabled:hocus:neutral-500", op: "0 group-hover:100 disabled:0", disabled: !d(o), "data-next": "", invisible: "", "z-5": "", "mr-12": "", "w-max": "", "justify-self-end": "", "rounded-full": "", "p-16": "", shadow: "", transition: "", stack: "", "md:visible": "", "hocus:cursor-pointer": "", onClick: n[1] || (n[1] = (...e) => d(s) && d(s)(...e)) }, n[3] || (n[3] = [u("div", { "translate-x-1": "", "i-nimiq:chevron-right": "", "f-text-xl": "" }, null, -1)]), 8, F), u("ul", K, [(b(true), x($, null, M(r.items.length, (e) => (b(), x("li", { key: e, "data-slide": "", flex: "" }, [u("button", { title: `Slide to number ${e + 1}`, bg: "neutral-300 data-active:green hocus:neutral-400", relative: "", "size-8": "", "rounded-full": "", "transition-colors": "", onClick: (v) => d(t)(e - 1) }, null, 8, R)]))), 128)), u("div", { style: A(d(f)), "aria-hidden": "", absolute: "", "left-0": "", "top-0": "", "h-8": "", "rounded-full": "", "bg-green": "", shadow: "", transition: "[transform,width]" }, null, 4)])]));
} }), J = Object.assign(U, { __name: "Carousel" });
export {
  J as _
};
