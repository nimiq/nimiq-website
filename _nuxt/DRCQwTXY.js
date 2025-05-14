import { _ as k } from "./CMf5N-6F.js";
import { _ as f } from "./CcpJ8xk8.js";
import { d as h, s as b, v as C, y as v, c as S, o as l, b as d, u as r, n as w } from "./7tyaNgEA.js";
import { g as B } from "./CpsPJSKh.js";
import { g as q } from "./C3sJ3Yu7.js";
import { g as x } from "./CD5FwXF0.js";
import "./B3mO7cbA.js";
import "./Bz4-DFcF.js";
import "./DSYs-LpM.js";
const z = ["nq-section-gap"], G = h({ __name: "index", props: B(), async setup(i) {
  let n, o;
  const g = q(i.slice.primary.bgColor), a = i.slices.indexOf(i.slice) === i.slices.length - 1, { client: p } = b(), { data: c } = ([n, o] = C(() => v("staking_values", () => p.getSingle("stakingValues").then((e) => e.data))), n = await n, o(), n);
  if (!c.value) throw new Error("No staking values found");
  const s = x(i.slice.primary.headline).includes(c.value.template);
  function u() {
    var _a, _b;
    if (!s || a) return;
    const e = i.slices.indexOf(i.slice), m = (_a = i.slices.at(e + 1)) == null ? void 0 : _a.primary.bgColor, t = (_b = i.slices.at(e - 1)) == null ? void 0 : _b.primary.bgColor;
    return m === t ? "gradient-transparent-green-transparent" : "gradient-transparent-green";
  }
  return (e, m) => {
    const t = k, y = f;
    return l(), S("section", { "nq-section-gap": r(s) ? void 0 : "", class: w([r(g), u()]), relative: "", "data-slice-type": "simple-headline" }, [r(s) ? (l(), d(y, { key: 1, headline: e.slice.primary.headline, subline: e.slice.primary.subline, "show-staking-icon": !a, "data-inverted": a ? void 0 : "", links: e.slice.primary.links, "primary-pill": a }, null, 8, ["headline", "subline", "show-staking-icon", "data-inverted", "links"])) : (l(), d(t, { key: 0, headline: e.slice.primary.headline, subline: e.slice.primary.subline, cta: e.slice.primary.cta, links: e.slice.primary.links, label: e.slice.primary.label, "icon-name": e.slice.primary.iconName, "z-1": "" }, null, 8, ["headline", "subline", "cta", "links", "label", "icon-name"]))], 10, z);
  };
} });
export {
  G as default
};
