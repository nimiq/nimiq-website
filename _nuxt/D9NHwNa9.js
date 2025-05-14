import { u as T } from "./DSYs-LpM.js";
import { d, B as c, j as f, E as g, L as h, c as v, o as w, t as b, u as V, a7 as x, a8 as $, aa as I, b5 as A, m as D, ac as N } from "./7tyaNgEA.js";
class m {
  constructor(e = 0, n = e, i = 0, u = Date.now(), l = m.Easing.EASE_IN_OUT_CUBIC) {
    this.targetValue = e, this.startValue = n, this.tweenTime = i, this.startTime = u, this.easing = l;
  }
  get currentValue() {
    const e = this.easing(this.progress);
    return this.startValue + (this.targetValue - this.startValue) * e;
  }
  get progress() {
    return this.tweenTime === 0 ? 1 : Math.min(1, (Date.now() - this.startTime) / this.tweenTime);
  }
  get finished() {
    return this.progress === 1;
  }
  tweenTo(e, n = this.tweenTime) {
    e !== this.targetValue && (this.startValue = this.currentValue, this.targetValue = e, this.startTime = Date.now(), this.tweenTime = n);
  }
}
((a) => {
  a.Easing = { LINEAR: (e) => e, EASE_IN_OUT_CUBIC: (e) => e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1 };
})(m || (m = {}));
const B = m, M = { "data-allow-mismatch": "", "tabular-nums": "" }, C = d({ __name: "TweenedNumber", props: { value: { default: 0 }, decimals: { default: 0 }, duration: { default: 1e3 } }, setup(a) {
  const e = T(), n = c(a.value), i = new Intl.NumberFormat(e.value, { style: "decimal", minimumFractionDigits: a.decimals, maximumFractionDigits: a.decimals }), u = f(() => i.format(n.value));
  g(() => l(0, n.value || 0)), h(() => a.value, (r) => {
    l(n.value, r);
  });
  function l(r, t) {
    const o = new B(t, r, a.duration);
    function s() {
      const p = o.progress, E = o.currentValue;
      n.value = E, p < 1 && requestAnimationFrame(s);
    }
    s();
  }
  return (r, t) => (w(), v("span", M, b(V(u)), 1));
} }), F = Object.assign(C, { __name: "AnimatedTweenedNumber" }), U = d({ __name: "AmountInput", props: x({ decimals: { default: 0 }, min: { default: 0 } }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const e = $(a, "modelValue"), n = c(`${e.value}`), i = c(0), u = f({ get() {
    return n.value;
  }, set(t) {
    if (n.value = t, !t) {
      n.value = "", i.value = 0, e.value = 0;
      return;
    }
    t = t.replace(/,/, ".");
    const s = new RegExp(`(\\d*)(\\.(\\d{0,${a.decimals}}))?`, "g").exec(t);
    s[1] || s[2] ? (n.value = `${s[1] ? s[1] : "0"}${s[2] ? s[2] : ""}`, e.value = +`${s[1]}${(s[2] ? s[3] : "").padEnd(a.decimals, "0")}`) : (n.value = "", e.value = a.min), i.value !== e.value && (i.value = e.value);
  } });
  function l(t) {
    if (!t) return a.min;
    t !== e.value && (i.value = t || a.min, u.value = t ? (t / 10 ** a.decimals).toString() : "");
  }
  h(e, (t) => l(t), { immediate: true });
  function r() {
    !e.value && a.min && l(a.min);
  }
  return g(r), (t, o) => I((w(), v("input", D({ "onUpdate:modelValue": o[0] || (o[0] = (s) => N(u) ? u.value = s : null), type: "text", style: { "field-sizing": "content" }, "focus-visible:outline": "1 solid blue", "rounded-2": "", "bg-transparent": "", "px-12": "", "font-semibold": "", "lh-none": "", "nq-input-box": "", inputmode: "decimal" }, t.$attrs, { onBlur: r }), null, 16)), [[A, V(u)]]);
} }), O = Object.assign(U, { __name: "AmountInput" });
export {
  F as _,
  O as a
};
