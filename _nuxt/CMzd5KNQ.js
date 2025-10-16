import { _ as k } from "./RJkaeARB.js";
import { _ as h } from "./JI-uoHH4.js";
import { d as f, an as b, w as C, am as v, B as S, o as l, e as d, h as r, D as w } from "./B8biU-UE.js";
import { g as B } from "./CpsPJSKh.js";
import { g as q } from "./BzRmGp1f.js";
import { g as x } from "./DRbUa3ZN.js";
import "./DlAUqK2U.js";
import "./niYDnyAi.js";
import "./D0DW2WUk.js";
import "./uct_JH4F.js";
const z = ["nq-section-gap"], I = f({ __name: "index", props: B(), async setup(i) {
  let n, o;
  const p = q(i.slice.primary.bgColor), a = i.slices.indexOf(i.slice) === i.slices.length - 1, { client: g } = b(), { data: c } = ([n, o] = C(() => v("staking_values", () => g.getSingle("stakingValues").then((e) => e.data))), n = await n, o(), n);
  if (!c.value) throw new Error("No staking values found");
  const s = x(i.slice.primary.headline).includes(c.value.template);
  function u() {
    var _a, _b;
    if (!s || a) return;
    const e = i.slices.indexOf(i.slice), m = (_a = i.slices.at(e + 1)) == null ? void 0 : _a.primary.bgColor, t = (_b = i.slices.at(e - 1)) == null ? void 0 : _b.primary.bgColor;
    return m === t ? "gradient-transparent-green-transparent" : "gradient-transparent-green";
  }
  return (e, m) => {
    const t = k, y = h;
    return l(), S("section", { "nq-section-gap": r(s) ? void 0 : "", class: w([r(p), u()]), relative: "", "data-slice-type": "simple-headline" }, [r(s) ? (l(), d(y, { key: 1, headline: e.slice.primary.headline, subline: e.slice.primary.subline, "show-staking-icon": !a, "data-inverted": a ? void 0 : "", links: e.slice.primary.links, "primary-pill": a }, null, 8, ["headline", "subline", "show-staking-icon", "data-inverted", "links"])) : (l(), d(t, { key: 0, headline: e.slice.primary.headline, subline: e.slice.primary.subline, cta: e.slice.primary.cta, links: e.slice.primary.links, label: e.slice.primary.label, "icon-name": e.slice.primary.iconName, "z-1": "" }, null, 8, ["headline", "subline", "cta", "links", "label", "icon-name"]))], 10, z);
  };
} });
export {
  I as default
};
