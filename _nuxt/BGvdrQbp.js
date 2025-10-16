import { u as V } from "./uct_JH4F.js";
import { d, r as c, a as f, n as v, Q as g, B as h, o as p, E as x, h as w, aC as b, aD as _, L as $, O as D, J as I, M as A } from "./B8biU-UE.js";
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
const M = m, N = { "data-allow-mismatch": "", "tabular-nums": "" }, B = d({ __name: "TweenedNumber", props: { value: { default: 0 }, decimals: { default: 0 }, duration: { default: 1e3 } }, setup(a) {
  const e = V(), n = c(a.value), i = new Intl.NumberFormat(e.value, { style: "decimal", minimumFractionDigits: a.decimals, maximumFractionDigits: a.decimals }), u = f(() => i.format(n.value));
  v(() => l(0, n.value || 0)), g(() => a.value, (r) => {
    l(n.value, r);
  });
  function l(r, t) {
    const o = new M(t, r, a.duration);
    function s() {
      const E = o.progress, T = o.currentValue;
      n.value = T, E < 1 && requestAnimationFrame(s);
    }
    s();
  }
  return (r, t) => (p(), h("span", N, x(w(u)), 1));
} }), y = Object.assign(B, { __name: "AnimatedTweenedNumber" }), C = d({ __name: "AmountInput", props: b({ decimals: { default: 0 }, min: { default: 0 } }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(a) {
  const e = _(a, "modelValue"), n = c(e.value ? `${e.value}` : ""), i = c(0), u = f({ get() {
    return n.value;
  }, set(t) {
    if (n.value = t, !t) {
      n.value = "", i.value = 0, e.value = 0;
      return;
    }
    t = t.replace(/,/, ".");
    const s = new RegExp(`(\\d*)(\\.(\\d{0,${a.decimals}}))?`, "g").exec(t);
    s[1] || s[2] ? (n.value = `${s[1] ? s[1] : "0"}${s[2] ? s[2] : ""}`, e.value = +`${s[1]}${(s[2] ? s[3] : "").padEnd(a.decimals, "0")}`) : (e.value === void 0 || e.value === null) && (n.value = "", e.value = a.min), i.value !== e.value && (i.value = e.value);
  } });
  function l(t) {
    t != null && t !== e.value && (i.value = t, u.value = t > 0 ? (t / 10 ** a.decimals).toString() : "");
  }
  g(e, (t) => l(t), { immediate: true });
  function r() {
    !e.value && a.min > 0 && l(a.min);
  }
  return v(() => {
    e.value || r();
  }), (t, o) => $((p(), h("input", I({ "onUpdate:modelValue": o[0] || (o[0] = (s) => A(u) ? u.value = s : null), type: "text", style: { "field-sizing": "content" }, "focus-visible:outline": "1 solid blue", "font-semibold": "", "lh-none": "", "px-12": "", "rounded-2": "", "bg-transparent": "", "nq-input-box": "", inputmode: "decimal" }, t.$attrs, { onBlur: r }), null, 16)), [[D, w(u)]]);
} }), F = Object.assign(C, { __name: "AmountInput" });
export {
  y as _,
  F as a
};
