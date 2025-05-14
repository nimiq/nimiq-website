import { d as I, v as B, c as i, o as s, e as a, F as m, r as d, t as p, b as C, w as N, n as k, h as v, Y as M, i as A } from "./7tyaNgEA.js";
import { g as L } from "./CpsPJSKh.js";
import { u as E } from "./em0aKPkT.js";
const U = { "bg-neutral-0": "" }, z = { grid: "~ cols-1 md:cols-3 gap-x-8 lg:gap-x-16 gap-y-24", "w-full": "" }, O = { text: "12 md:14 neutral-700", "nq-label": "" }, P = { "w-full": "", "f-mt-md": "", flex: "~ col gap-y-8 lg:gap-y-16" }, T = { capitalize: "" }, $ = I({ __name: "index", props: L(), async setup(u) {
  let o, c;
  const t = u, { data: _ } = ([o, c] = B(() => E()), o = await o, c(), o), n = (e) => Object.values(_.value).find((r) => r.id === e), f = [{ label: t.slice.primary.newsAndAnnouncementsLabel || "", items: t.slice.items.filter((e) => e.category === "NEWS & ANNOUNCEMENTS").map((e) => e.socialMediaItem.id).map(n).filter(Boolean) }, { label: t.slice.primary.discussionsAndSupportLabel || "", items: t.slice.items.filter((e) => e.category === "DISCUSSIONS & SUPPORT").map((e) => e.socialMediaItem.id).map(n).filter(Boolean) }, { label: t.slice.primary.cultureAndInsightsLabel || "", items: t.slice.items.filter((e) => e.category === "CULTURE & INSIGHTS").map((e) => e.socialMediaItem.id).map(n).filter(Boolean) }];
  return (e, r) => {
    const g = M;
    return s(), i("section", U, [a("ul", z, [(s(true), i(m, null, d(f.filter((l) => l.items), (l, y) => (s(), i("li", { key: y, flex: "~ col md:items-center" }, [a("span", O, p(l.label), 1), a("div", P, [(s(true), i(m, null, d(l.items, ({ link: b, color: x, icon: h, platform: S }, w) => (s(), C(g, { key: w, "internal-component": "a", field: b, flex: "~ row items-center gap-24", style: v([`--c:${x}`, { transition: "background 300ms ease-out,transform 200ms ease-out, box-shadow 200ms ease-out, color 200ms ease-out" }]), bg: "neutral-300 hocus:$c", group: "", "bg-none": "!", "nq-hoverable": "", "hocus:text-white": "" }, { default: N(() => [a("div", { class: k(h), size: "32 md:40", style: { "--un-scale-x": "1", "--un-scale-y": "1" } }, null, 2), a("span", T, p(S), 1)]), _: 2 }, 1032, ["field", "style"]))), 128))])]))), 128))])]);
  };
} }), R = A($, [["__scopeId", "data-v-a20c28f3"]]);
export {
  R as default
};
