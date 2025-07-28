import { d as N, v as k, c as a, o as t, e as i, F as m, r as d, f as B, t as p, b as v, w as L, n as u, h as M, u as A, Z as E, i as U } from "./BguRs3jF.js";
import { g as z } from "./CpsPJSKh.js";
import { g as O } from "./T2yBj71G.js";
import { u as P } from "./Dvca-oHQ.js";
const T = { grid: "~ cols-1 md:cols-3 gap-x-8 lg:gap-x-16 gap-y-24", "w-full": "" }, $ = { key: 0, text: "12 md:14 neutral-700", "nq-label": "" }, q = { "w-full": "", "f-mt-md": "", flex: "~ col gap-y-8 lg:gap-y-16" }, D = { capitalize: "", "f-text-lg": "" }, F = N({ __name: "index", props: z(), async setup(f) {
  let o, r;
  const s = f, g = O(s.slice.primary.bgColor || "grey"), { data: _ } = ([o, r] = k(() => P()), o = await o, r(), o), n = (e) => Object.values(_.value).find((c) => c.id === e), y = [{ label: s.slice.primary.newsAndAnnouncementsLabel || "", items: s.slice.items.filter((e) => e.category === "NEWS & ANNOUNCEMENTS").map((e) => e.socialMediaItem.id).map(n).filter(Boolean) }, { label: s.slice.primary.discussionsAndSupportLabel || "", items: s.slice.items.filter((e) => e.category === "DISCUSSIONS & SUPPORT").map((e) => e.socialMediaItem.id).map(n).filter(Boolean) }, { label: s.slice.primary.cultureAndInsightsLabel || "", items: s.slice.items.filter((e) => e.category === "CULTURE & INSIGHTS").map((e) => e.socialMediaItem.id).map(n).filter(Boolean) }];
  return (e, c) => {
    const b = E;
    return t(), a("section", { class: u(A(g)) }, [i("ul", T, [(t(true), a(m, null, d(y.filter((l) => l.items), (l, x) => (t(), a("li", { key: x, flex: "~ col md:items-center" }, [e.slice.primary.showLabels ? (t(), a("span", $, p(l.label), 1)) : B("", true), i("div", q, [(t(true), a(m, null, d(l.items, ({ link: h, color: S, icon: C, platform: w }, I) => (t(), v(b, { key: I, "internal-component": "a", field: h, flex: "~ row items-center gap-24", style: M([`--c:${S}`, { transition: "background 300ms ease-out,transform 200ms ease-out, box-shadow 200ms ease-out, color 200ms ease-out" }]), bg: "neutral-300 hocus:$c", group: "", "bg-none": "!", "nq-hoverable": "", "hocus:text-white": "" }, { default: L(() => [i("div", { class: u(C), size: "32 md:40", style: { "--un-scale-x": "1", "--un-scale-y": "1" } }, null, 2), i("span", D, p(w), 1)]), _: 2 }, 1032, ["field", "style"]))), 128))])]))), 128))])], 2);
  };
} }), H = U(F, [["__scopeId", "data-v-28c12a90"]]);
export {
  H as default
};
