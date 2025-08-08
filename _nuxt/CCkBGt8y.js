import { bc as t, bd as s, be as e, bf as n, bg as r, bh as c, bi as g } from "./C95QRNzc.js";
const i = (a) => t(a), o = (a) => e(a), f = (a) => c(a), u = (a) => s(a) || "", b = (a) => r(a) || "", x = (a) => g(a) || "", k = (a) => n(a) || "";
function m(a) {
  return !a || !i(a) ? "" : a.url;
}
function T({ dimensions: a }) {
  return a ? a.width / a.height : 0;
}
export {
  i as a,
  b,
  k as c,
  f as d,
  m as e,
  T as f,
  u as g,
  o as h,
  x as i
};
