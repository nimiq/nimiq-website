import { a as n } from "./DOgGst0G.js";
import { d as p, r as t, B as a, o, C as l, D as i, h as r } from "./B8biU-UE.js";
import { _ } from "./DlAUqK2U.js";
const f = p({ __name: "CircleRipple", setup(m) {
  const c = t(null), e = t(false);
  return n(c, ([s]) => {
    e.value = (s == null ? void 0 : s.isIntersecting) || false;
  }, { threshold: 0.1, rootMargin: "50px" }), (s, u) => (o(), a("svg", { ref_key: "circleRippleElement", ref: c, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 1800 1800", "pointer-events-none": "" }, [l("circle", { cx: "900", cy: "900", r: "900", "fill-green": "", opacity: ".1", class: i(["ripple", [{ "ripple-active": r(e) }]]), style: { "--i": "5" } }, null, 2), l("circle", { cx: "900", cy: "900", r: "757", "fill-green": "", opacity: ".4", class: i(["ripple", [{ "ripple-active": r(e) }]]), style: { "--i": "3" } }, null, 2), l("circle", { cx: "900", cy: "900", r: "651", "fill-neutral-0": "", opacity: ".4", class: i(["ripple", [{ "ripple-active": r(e) }]]), style: { "--i": "2" } }, null, 2), l("circle", { cx: "900", cy: "900", r: "547", "fill-green": "", opacity: ".2", class: i(["ripple", [{ "ripple-active": r(e) }]]), style: { "--i": "1" } }, null, 2), l("circle", { cx: "900", cy: "900", r: "489", "fill-neutral-0": "", class: i(["ripple", [{ "ripple-active": r(e) }]]), style: { "--i": "0" } }, null, 2)], 512));
} }), g = Object.assign(_(f, [["__scopeId", "data-v-14f68466"]]), { __name: "AnimatedCircleRipple" });
export {
  g as _
};
