import { e as L, m as A } from "./-SGvg42Q.js";
import { B as r, L as C, E as y, a1 as v, j as w } from "./7tyaNgEA.js";
function E(n, u, s) {
  A("keydown", (e) => {
    var _a;
    document.activeElement !== n.value || !((_a = n.value) == null ? void 0 : _a.contains(document.activeElement)) || (e.preventDefault(), e.key === "ArrowRight" ? u() : e.key === "ArrowLeft" && s());
  });
}
function b(n = {}) {
  const { initialIndex: u = 0, keyboard: s = true } = n, e = r(u), a = r(), l = r([]), f = r(false);
  let c = false;
  function d() {
    if (!a.value) return;
    const t = a.value.querySelectorAll("[data-slide]");
    l.value = Array.from(t), f.value = true, u > 0 && u < l.value.length && v(() => o(u));
  }
  function o(t) {
    var _a;
    if (t < 0 || !l.value.length || t >= l.value.length) return;
    c = true, setTimeout(() => c = false, 500);
    const i = l.value[t];
    i && a.value && (a.value.scrollTo({ top: 0, left: i.offsetLeft, behavior: "smooth" }), e.value = t, (_a = n.onStepChanged) == null ? void 0 : _a.call(n, e.value));
  }
  const h = () => {
    o(Math.min(e.value + 1, l.value.length - 1));
  }, m = () => {
    o(Math.max(e.value - 1, 0));
  };
  function k() {
    e.value = u, a.value && f.value && v(() => {
      o(u);
    });
  }
  C(() => a.value, (t) => {
    t && d();
  }, { immediate: true }), y(async () => {
    await v(), a.value && d();
  }), s && y(() => {
    E(a, h, m);
  });
  function g(t) {
    var _a;
    if (!a.value) return;
    const i = t.target, S = i.offsetWidth;
    if (S <= 0) return;
    const p = Math.round(i.scrollLeft / S);
    e.value !== p && (e.value = p, (_a = n.onStepChanged) == null ? void 0 : _a.call(n, e.value));
  }
  function x(t) {
    c || g(t);
  }
  return L(a, { onScroll: x }), { activeIndex: e, scroller: a, items: l, calculateStep: g, slideTo: o, slideNext: h, slidePrev: m, reset: k, canSlideNext: w(() => l.value.length > 0 && e.value < l.value.length - 1), canSlidePrev: w(() => l.value.length > 0 && e.value > 0) };
}
export {
  E as s,
  b as u
};
