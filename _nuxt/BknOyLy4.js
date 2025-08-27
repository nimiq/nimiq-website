import { d as k, w as N, j as a, o as t, k as i, F as d, r as p, l as v, t as u, e as B, f as L, n as f, q as M, h as A, ab as E } from "./BdODHn_3.js";
import { g as U } from "./CpsPJSKh.js";
import { g as z } from "./UqZ8O5YD.js";
import { u as O } from "./Dbkl2QtV.js";
import { _ as P } from "./DlAUqK2U.js";
const T = { grid: "~ cols-1 md:cols-3 gap-x-8 lg:gap-x-16 gap-y-24", "w-full": "" }, q = { key: 0, text: "12 md:14 neutral-700", "nq-label": "" }, $ = { "w-full": "", "f-mt-md": "", flex: "~ col gap-y-8 lg:gap-y-16" }, j = { capitalize: "", "f-text-lg": "" }, D = k({ __name: "index", props: U(), async setup(g) {
  let o, n;
  const s = g, _ = z(s.slice.primary.bgColor || "grey"), { data: c } = ([o, n] = N(() => O()), o = await o, n(), o), r = (e) => c.value ? Object.values(c.value).find((m) => m.id === e) : void 0, y = [{ label: s.slice.primary.newsAndAnnouncementsLabel || "", items: s.slice.items.filter((e) => e.category === "NEWS & ANNOUNCEMENTS").map((e) => e.socialMediaItem.id).map(r).filter(Boolean) }, { label: s.slice.primary.discussionsAndSupportLabel || "", items: s.slice.items.filter((e) => e.category === "DISCUSSIONS & SUPPORT").map((e) => e.socialMediaItem.id).map(r).filter(Boolean) }, { label: s.slice.primary.cultureAndInsightsLabel || "", items: s.slice.items.filter((e) => e.category === "CULTURE & INSIGHTS").map((e) => e.socialMediaItem.id).map(r).filter(Boolean) }];
  return (e, m) => {
    const b = E;
    return t(), a("section", { class: f(A(_)) }, [i("ul", T, [(t(true), a(d, null, p(y.filter((l) => l.items), (l, x) => (t(), a("li", { key: x, flex: "~ col md:items-center" }, [e.slice.primary.showLabels ? (t(), a("span", q, u(l.label), 1)) : v("", true), i("div", $, [(t(true), a(d, null, p(l.items, ({ link: h, color: S, icon: C, platform: w }, I) => (t(), B(b, { key: I, field: h, flex: "~ row items-center gap-24", style: M([`--c:${S}`, { transition: "background 300ms ease-out,transform 200ms ease-out, box-shadow 200ms ease-out, color 200ms ease-out" }]), bg: "neutral-300 hocus:$c", group: "", "bg-none": "!", "nq-hoverable": "", "hocus:text-white": "" }, { default: L(() => [i("div", { class: f(C), size: "32 md:40", style: { "--un-scale-x": "1", "--un-scale-y": "1" } }, null, 2), i("span", j, u(w), 1)]), _: 2 }, 1032, ["field", "style"]))), 128))])]))), 128))])], 2);
  };
} }), W = P(D, [["__scopeId", "data-v-ff9b5dee"]]);
export {
  W as default
};
