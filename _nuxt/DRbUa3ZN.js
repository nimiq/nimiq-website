import { aP as t, aQ as s, aR as e, aS as n, aT as r, aU as c, aV as g } from "./B8biU-UE.js";
const i = (a) => e(a), h = (a) => s(a), u = (a) => c(a), f = (a) => t(a) || "", x = (a) => r(a) || "", T = (a) => g(a) || "", k = (a) => n(a) || "";
function m(a) {
  return !a || !i(a) ? "" : a.url;
}
function l({ dimensions: a }) {
  return a ? a.width / a.height : 0;
}
export {
  i as a,
  x as b,
  k as c,
  u as d,
  m as e,
  l as f,
  f as g,
  h,
  T as i
};
