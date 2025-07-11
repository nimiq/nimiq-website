import { g as o } from "./ViQ2U2w0.js";
function f(t) {
  return t ? "open" : "closed";
}
function c(t) {
  const e = o();
  for (const n of t) if (n === e || (n.focus(), o() !== e)) return;
}
export {
  c as f,
  f as g
};
