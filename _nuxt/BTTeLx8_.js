import { _ as C } from "./BqBogM76.js";
import { _ as h } from "./DtEbU8Zp.js";
import { g as x } from "./CpsPJSKh.js";
import { g as y } from "./DzQE7UG-.js";
import { u as v } from "./BAKQThLi.js";
import { d as g, j as m, v as w, an as k, a1 as b, c as A, f as l, u as o, o as p, b as I, w as S, a as B, R as N, S as P, n as R } from "./gdLxT4Lf.js";
import "./BpR0sf--.js";
import "./eRMYwULF.js";
import "./DYDUvkDP.js";
import "./mUzFeepZ.js";
const D = g({ __name: "index", props: x(), async setup(e) {
  let s, c;
  const u = y(e.slice.primary.bgColor), d = m(() => e.slice.variation), { data: _ } = ([s, c] = w(() => v()), s = await s, c(), s), a = m(() => {
    var _a;
    return d.value === "apps" ? (_a = _.value) == null ? void 0 : _a.communityApps.toSorted(() => Math.random() - 0.5) : [];
  });
  return k(async () => {
    var _a;
    if (await b(), e.slice.variation === "apps") return;
    const n = e.slices.findIndex((t) => t.slice_type === "cards_carousel"), i = e.slices.findIndex((t, r) => t.slice_type === "simple_headline" && r === n - 1);
    i !== -1 && ((_a = document.querySelector(`section:nth-of-type(${i + 1})`)) == null ? void 0 : _a.remove(), console.warn("We have removed the section with the simple_headline slice since the CardsCarousel slice is present but not implemented"));
  }), (n, i) => {
    const t = C, r = h;
    return o(a) && o(a).length > 0 ? (p(), A("section", { key: 0, class: R(o(u)), "px-0": "", "pb-0": "" }, [n.slice.variation === "apps" ? (p(), I(r, { key: 0, items: o(a) }, { default: S(({ item: f }) => [B(t, N(P(f)), null, 16)]), _: 1 }, 8, ["items"])) : l("", true)], 2)) : l("", true);
  };
} });
export {
  D as default
};
