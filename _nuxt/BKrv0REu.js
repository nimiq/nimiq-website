import { _ as C } from "./B1Y_IULx.js";
import { _ as h } from "./pR2Ra_Cz.js";
import { g as x } from "./CpsPJSKh.js";
import { g as y } from "./DjC4KgUf.js";
import { u as v } from "./CRIJdMYv.js";
import { d as g, j as m, v as w, ao as k, a2 as b, c as A, f as l, u as o, o as p, b as I, w as S, a as B, S as N, T as P, n as z } from "./g1xKa6TI.js";
import "./CsdQH-VP.js";
import "./k4OXxJR1.js";
import "./Qjh2__OP.js";
import "./Dq5jw32s.js";
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
    return o(a) && o(a).length > 0 ? (p(), A("section", { key: 0, class: z(o(u)), "px-0": "", "pb-0": "" }, [n.slice.variation === "apps" ? (p(), I(r, { key: 0, items: o(a) }, { default: S(({ item: f }) => [B(t, N(P(f)), null, 16)]), _: 1 }, 8, ["items"])) : l("", true)], 2)) : l("", true);
  };
} });
export {
  D as default
};
