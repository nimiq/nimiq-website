import { _ as h } from "./sZK6JWRM.js";
import { _ as C } from "./q7GsuUrg.js";
import { g as x } from "./CpsPJSKh.js";
import { g as y } from "./BtthtQJI.js";
import { u as v } from "./-en85RUw.js";
import { d as g, a as m, w, aL as k, K as b, j as A, l, h as o, o as p, e as I, f as B, g as N, T as P, U as S, n as z } from "./BSLliBk6.js";
import "./ClrY7JMF.js";
import "./FOZmO4jG.js";
import "./CMlG4309.js";
import "./CMaMa598.js";
const U = g({ __name: "index", props: x(), async setup(e) {
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
    const t = h, r = C;
    return o(a) && o(a).length > 0 ? (p(), A("section", { key: 0, class: z(o(u)), "px-0": "", "pb-0": "" }, [n.slice.variation === "apps" ? (p(), I(r, { key: 0, items: o(a) }, { default: B(({ item: f }) => [N(t, P(S(f)), null, 16)]), _: 1 }, 8, ["items"])) : l("", true)], 2)) : l("", true);
  };
} });
export {
  U as default
};
