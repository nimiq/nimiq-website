import { a as j } from "./DOgGst0G.js";
import { s as z, u as B } from "./BtBkGOBG.js";
import { r as p, Q as N, n as S, q as I, al as q, a as k, d as P, B as x, o as b, C as u, h as d, J as T, H as $, I as M, l as X, v as A } from "./B8biU-UE.js";
function O(c = {}) {
  const { initialIndex: i = 0, keyboard: C = true } = c, t = p([]), s = p(), l = p([]), o = p(/* @__PURE__ */ new Set()), g = p(false);
  function h() {
    if (!s.value) return;
    const a = s.value.querySelectorAll("[data-slide]");
    l.value = Array.from(a), l.value.length && (l.value.forEach((m, y) => {
      j(m, ([w]) => {
        var _a;
        w && (w.isIntersecting ? o.value.add(y) : o.value.delete(y), t.value = Array.from(o.value).sort((_, V) => _ - V), (_a = c.onStepChanged) == null ? void 0 : _a.call(c, t.value));
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
  }), q(() => {
    o.value.clear();
  });
  const v = k(() => o.value.size);
  return { activeIndexes: t, scroller: s, items: l, visibleCount: v, slideTo: f, slideNext: r, slidePrev: n, reset: e, canSlideNext: k(() => !l.value.length || !t.value.length ? false : Math.max(...t.value) < l.value.length - 1), canSlidePrev: k(() => !l.value.length || !t.value.length ? false : Math.min(...t.value) > 0) };
}
const E = { group: "", stack: "", "h-full": "", "max-w-none": "", relative: "" }, L = ["disabled"], F = ["disabled"], H = { flex: "~ gap-6 justify-center", "self-end": "", "bottom-64": "", absolute: "" }, J = ["title", "onClick"], K = P({ __name: "Carousel", props: { items: {}, multiple: { type: Boolean, default: true } }, setup(c) {
  const i = c.multiple ? O() : B(), { scroller: C, slideTo: t, slideNext: s, slidePrev: l, canSlideNext: o, canSlidePrev: g } = i, h = c.multiple ? i.activeIndexes : i.activeIndex, f = k(() => {
    if (c.multiple) {
      const r = h.value.sort((y, w) => y - w);
      if (!r.length) return { width: "0px", transform: "translateX(0px)" };
      const n = r[0], v = r[r.length - 1] - n + 1, a = v * 8 + (v - 1) * 6, m = n * 14;
      return { width: `${a}px`, transform: `translateX(${m}px)` };
    } else return { width: "8px", transform: `translateX(${h.value * 8}px)` };
  });
  return (r, n) => (b(), x("div", E, [u("button", { bg: "neutral-400 disabled:neutral-200  not-disabled:hocus:neutral-500", op: "0 group-hover:100 disabled:0", disabled: !d(g), "data-prev": "", stack: "", "ml-12": "", "p-16": "", "rounded-full": "", "w-max": "", invisible: "", shadow: "", transition: "", "justify-self-start": "", "z-5": "", "md:visible": "", "hocus:cursor-pointer": "", onClick: n[0] || (n[0] = (...e) => d(l) && d(l)(...e)) }, n[2] || (n[2] = [u("div", { "translate-x--1": "", "f-text-xl": "", "i-nimiq:chevron-left": "" }, null, -1)]), 8, L), u("ul", T({ ref_key: "scroller", ref: C, flex: "~ gap-16 md:gap-32 items-stretch", snap: "x mandatory", "scroll-px": "$px", pb: "$pb" }, r.$attrs, { "h-full": "", "w-full": "", "justify-self-start": "", "of-x-auto": "", "nq-scrollbar-hide": "" }), [(b(true), x($, null, M(r.items, (e, v) => (b(), x("li", { key: typeof e == "object" && e && "name" in e ? e.name : v, snap: "start always", p: "first:l-$px last:r-$px", "data-slide": "", "flex-1": "", "shrink-0": "", "h-full": "" }, [X(r.$slots, "default", { item: e })]))), 128))], 16), u("button", { bg: "neutral-400 disabled:neutral-200 not-disabled:hocus:neutral-500", op: "0 group-hover:100 disabled:0", disabled: !d(o), "data-next": "", stack: "", "mr-12": "", "p-16": "", "rounded-full": "", "w-max": "", invisible: "", shadow: "", transition: "", "justify-self-end": "", "z-5": "", "md:visible": "", "hocus:cursor-pointer": "", onClick: n[1] || (n[1] = (...e) => d(s) && d(s)(...e)) }, n[3] || (n[3] = [u("div", { "translate-x-1": "", "f-text-xl": "", "i-nimiq:chevron-right": "" }, null, -1)]), 8, F), u("ul", H, [(b(true), x($, null, M(r.items.length, (e) => (b(), x("li", { key: e, "data-slide": "", flex: "" }, [u("button", { title: `Slide to number ${e + 1}`, bg: "neutral-300 data-active:green hocus:neutral-400", "rounded-full": "", "size-8": "", "transition-colors": "", relative: "", onClick: (v) => d(t)(e - 1) }, null, 8, J)]))), 128)), u("div", { style: A(d(f)), "aria-hidden": "", "rounded-full": "", "bg-green": "", "h-8": "", shadow: "", "left-0": "", "top-0": "", absolute: "", transition: "[transform,width]" }, null, 4)])]));
} }), G = Object.assign(K, { __name: "Carousel" });
export {
  G as _
};
