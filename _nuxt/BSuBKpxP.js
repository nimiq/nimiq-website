import { a as d, u as _ } from "./DmrZuh9Q.js";
import { d as c, c as i, o, n as v, u as e, b as f, w as g, f as y, e as s, t as x, a as b, g as l, a3 as w } from "./7tyaNgEA.js";
import "./Bz4-DFcF.js";
import "./DSYs-LpM.js";
import "./-SGvg42Q.js";
import "./8Lad1M9Y.js";
import "./qVQu3vrU.js";
const T = c({ __name: "TransactionDot", props: { nonce: {} }, setup(m) {
  return (t, a) => (o(), i("div", { "size-8": "", "rounded-full": "", class: v(("getLiveviewBgColor" in t ? t.getLiveviewBgColor : e(d))({ nonce: t.nonce })) }, null, 2));
} }), k = Object.assign(T, { __name: "AlbatrossLiveviewTransactionDot" }), B = { key: 0, flex: "~ items-center justify-center col shrink-0", relative: "", "w-72": "" }, C = { text: "11 center red", "mt-12": "", "font-semibold": "", "transition-opacity": "", "duration-400": "", "ease-in": "" }, L = { key: 1, flex: "~ items-center justify-center col shrink-0", relative: "", "w-72": "" }, j = { grid: "~ *:row-span-full *:col-span-full *:self-center *:justify-self-center" }, A = c({ __name: "TxPending", setup(m) {
  const { status: t, error: a, animationActive: p, nonce: r } = _();
  return (D, n) => {
    const u = k;
    return o(), f(w, { "enter-from-class": "op-0 translate-y-12", mode: "out-in", "enter-active-class": "transition-opacity translate-y-0 duration-400 ease-in", "leave-active-class": "transition", "leave-to-class": "op-0 translate-y-12", "leave-from-class": "op-100 translate-y-0" }, { default: g(() => {
      var _a;
      return [e(t) === "error" ? (o(), i("div", B, [n[0] || (n[0] = s("i", { "i-nimiq:cross": "", text: "12 red" }, null, -1)), s("span", C, " Error sending transaction. " + x(((_a = e(a)) == null ? void 0 : _a.statusMessage) || ""), 1)])) : e(p) || e(t) === "pending" && e(r) ? (o(), i("div", L, [s("div", j, [n[1] || (n[1] = s("i", { "i-nimiq:spinner": "", text: "20 blue" }, null, -1)), b(u, { nonce: e(r) }, null, 8, ["nonce"])]), n[2] || (n[2] = s("span", { text: "13/17 center neutral-800", "mt-12": "", "font-semibold": "", "transition-opacity": "", "duration-400": "", "ease-in": "" }, [l(" Transaction"), s("br"), l("pending ")], -1))])) : y("", true)];
    }), _: 1 });
  };
} }), O = Object.assign(A, { __name: "AlbatrossLiveviewTxPending" });
export {
  O as default
};
