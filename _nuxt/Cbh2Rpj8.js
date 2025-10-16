import { _ as h } from "./BBcI-2Hm.js";
import { _ as x } from "./CxtCG09u.js";
import { g as C } from "./CpsPJSKh.js";
import { g as y } from "./BzRmGp1f.js";
import { u as v } from "./CiaHVC_M.js";
import { d as g, a as m, w, aN as k, q as b, B as A, x as l, h as a, o as p, e as B, f as I, g as N, a3 as P, a4 as S, D as q } from "./B8biU-UE.js";
import "./Fc1-Bd8L.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
import "./BtBkGOBG.js";
const j = g({ __name: "index", props: C(), async setup(e) {
  let s, c;
  const u = y(e.slice.primary.bgColor), d = m(() => e.slice.variation), { data: _ } = ([s, c] = w(() => v()), s = await s, c(), s), o = m(() => {
    var _a;
    return d.value === "apps" ? (_a = _.value) == null ? void 0 : _a.communityApps.toSorted(() => Math.random() - 0.5) : [];
  });
  return k(async () => {
    var _a;
    if (await b(), e.slice.variation === "apps") return;
    const n = e.slices.findIndex((t) => t.slice_type === "cards_carousel"), i = e.slices.findIndex((t, r) => t.slice_type === "simple_headline" && r === n - 1);
    i !== -1 && ((_a = document.querySelector(`section:nth-of-type(${i + 1})`)) == null ? void 0 : _a.remove(), console.warn("We have removed the section with the simple_headline slice since the CardsCarousel slice is present but not implemented"));
  }), (n, i) => {
    const t = h, r = x;
    return a(o) && a(o).length > 0 ? (p(), A("section", { key: 0, class: q(a(u)), "px-0": "", "pb-0": "" }, [n.slice.variation === "apps" ? (p(), B(r, { key: 0, items: a(o) }, { default: I(({ item: f }) => [N(t, P(S(f)), null, 16)]), _: 1 }, 8, ["items"])) : l("", true)], 2)) : l("", true);
  };
} });
export {
  j as default
};
