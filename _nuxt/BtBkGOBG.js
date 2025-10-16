import { m as k } from "./DOgGst0G.js";
import { r, Q as C, n as y, q as v, a as w } from "./B8biU-UE.js";
function L(u, n, s) {
  k("keydown", (e) => {
    var _a;
    document.activeElement !== u.value || !((_a = u.value) == null ? void 0 : _a.contains(document.activeElement)) || (e.preventDefault(), e.key === "ArrowRight" ? n() : e.key === "ArrowLeft" && s());
  });
}
function b(u = {}) {
  const { initialIndex: n = 0, keyboard: s = true } = u, e = r(n), a = r(), l = r([]), f = r(false);
  let c = false;
  function d() {
    if (!a.value) return;
    const t = a.value.querySelectorAll("[data-slide]");
    l.value = Array.from(t), f.value = true, n > 0 && n < l.value.length && v(() => i(n));
  }
  function i(t) {
    var _a;
    if (t < 0 || !l.value.length || t >= l.value.length) return;
    c = true, setTimeout(() => c = false, 500);
    const o = l.value[t];
    o && a.value && (a.value.scrollTo({ top: 0, left: o.offsetLeft, behavior: "smooth" }), e.value = t, (_a = u.onStepChanged) == null ? void 0 : _a.call(u, e.value));
  }
  const h = () => {
    i(Math.min(e.value + 1, l.value.length - 1));
  }, m = () => {
    i(Math.max(e.value - 1, 0));
  };
  function x() {
    e.value = n, a.value && f.value && v(() => {
      i(n);
    });
  }
  C(() => a.value, (t) => {
    t && d();
  }, { immediate: true }), y(async () => {
    await v(), a.value && d();
  }), s && y(() => {
    L(a, h, m);
  });
  function g(t) {
    var _a;
    if (!a.value) return;
    const o = t.target, p = o.offsetWidth;
    if (p <= 0) return;
    const S = Math.round(o.scrollLeft / p);
    e.value !== S && (e.value = S, (_a = u.onStepChanged) == null ? void 0 : _a.call(u, e.value));
  }
  function A(t) {
    c || g(t);
  }
  return k(a, "scroll", A), { activeIndex: e, scroller: a, items: l, calculateStep: g, slideTo: i, slideNext: h, slidePrev: m, reset: x, canSlideNext: w(() => l.value.length > 0 && e.value < l.value.length - 1), canSlidePrev: w(() => l.value.length > 0 && e.value > 0) };
}
export {
  L as s,
  b as u
};
