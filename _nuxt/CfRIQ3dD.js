import { d as a, e as d, o as i, f as s, l as t, h as o, P as r } from "./B8biU-UE.js";
const h = a({ __name: "VisuallyHidden", props: { feature: { default: "focusable" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  return (e, l) => (i(), d(o(r), { as: e.as, "as-child": e.asChild, "aria-hidden": e.feature === "focusable" ? "true" : void 0, "data-hidden": e.feature === "fully-hidden" ? "" : void 0, tabindex: e.feature === "fully-hidden" ? "-1" : void 0, style: { position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", whiteSpace: "nowrap", wordWrap: "normal" } }, { default: s(() => [t(e.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
} });
export {
  h as _
};
