import { m as k } from "./Cn5kCPLx.js";
import { C as r, Y as A, G as y, a2 as v, j as w } from "./BguRs3jF.js";
function L(n, u, s) {
  k("keydown", (e) => {
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
    l.value = Array.from(t), f.value = true, u > 0 && u < l.value.length && v(() => i(u));
  }
  function i(t) {
    var _a;
    if (t < 0 || !l.value.length || t >= l.value.length) return;
    c = true, setTimeout(() => c = false, 500);
    const o = l.value[t];
    o && a.value && (a.value.scrollTo({ top: 0, left: o.offsetLeft, behavior: "smooth" }), e.value = t, (_a = n.onStepChanged) == null ? void 0 : _a.call(n, e.value));
  }
  const h = () => {
    i(Math.min(e.value + 1, l.value.length - 1));
  }, m = () => {
    i(Math.max(e.value - 1, 0));
  };
  function x() {
    e.value = u, a.value && f.value && v(() => {
      i(u);
    });
  }
  A(() => a.value, (t) => {
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
    e.value !== S && (e.value = S, (_a = n.onStepChanged) == null ? void 0 : _a.call(n, e.value));
  }
  function C(t) {
    c || g(t);
  }
  return k(a, "scroll", C), { activeIndex: e, scroller: a, items: l, calculateStep: g, slideTo: i, slideNext: h, slidePrev: m, reset: x, canSlideNext: w(() => l.value.length > 0 && e.value < l.value.length - 1), canSlidePrev: w(() => l.value.length > 0 && e.value > 0) };
}
export {
  L as s,
  b as u
};
