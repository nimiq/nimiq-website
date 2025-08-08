import { d as N, s as k, c as a, o as t, e as i, F as m, r as d, f as B, t as p, b as L, w as M, n as u, h as v, u as A, af as E } from "./C95QRNzc.js";
import { g as U } from "./CpsPJSKh.js";
import { g as z } from "./CVc7iRBp.js";
import { u as O } from "./CEa9i5vs.js";
import { _ as P } from "./DlAUqK2U.js";
const T = { grid: "~ cols-1 md:cols-3 gap-x-8 lg:gap-x-16 gap-y-24", "w-full": "" }, $ = { key: 0, text: "12 md:14 neutral-700", "nq-label": "" }, q = { "w-full": "", "f-mt-md": "", flex: "~ col gap-y-8 lg:gap-y-16" }, D = { capitalize: "", "f-text-lg": "" }, F = N({ __name: "index", props: U(), async setup(f) {
  let o, n;
  const s = f, g = z(s.slice.primary.bgColor || "grey"), { data: _ } = ([o, n] = k(() => O()), o = await o, n(), o), r = (e) => Object.values(_.value).find((c) => c.id === e), y = [{ label: s.slice.primary.newsAndAnnouncementsLabel || "", items: s.slice.items.filter((e) => e.category === "NEWS & ANNOUNCEMENTS").map((e) => e.socialMediaItem.id).map(r).filter(Boolean) }, { label: s.slice.primary.discussionsAndSupportLabel || "", items: s.slice.items.filter((e) => e.category === "DISCUSSIONS & SUPPORT").map((e) => e.socialMediaItem.id).map(r).filter(Boolean) }, { label: s.slice.primary.cultureAndInsightsLabel || "", items: s.slice.items.filter((e) => e.category === "CULTURE & INSIGHTS").map((e) => e.socialMediaItem.id).map(r).filter(Boolean) }];
  return (e, c) => {
    const b = E;
    return t(), a("section", { class: u(A(g)) }, [i("ul", T, [(t(true), a(m, null, d(y.filter((l) => l.items), (l, x) => (t(), a("li", { key: x, flex: "~ col md:items-center" }, [e.slice.primary.showLabels ? (t(), a("span", $, p(l.label), 1)) : B("", true), i("div", q, [(t(true), a(m, null, d(l.items, ({ link: h, color: S, icon: C, platform: w }, I) => (t(), L(b, { key: I, field: h, flex: "~ row items-center gap-24", style: v([`--c:${S}`, { transition: "background 300ms ease-out,transform 200ms ease-out, box-shadow 200ms ease-out, color 200ms ease-out" }]), bg: "neutral-300 hocus:$c", group: "", "bg-none": "!", "nq-hoverable": "", "hocus:text-white": "" }, { default: M(() => [i("div", { class: u(C), size: "32 md:40", style: { "--un-scale-x": "1", "--un-scale-y": "1" } }, null, 2), i("span", D, p(w), 1)]), _: 2 }, 1032, ["field", "style"]))), 128))])]))), 128))])], 2);
  };
} }), W = P(F, [["__scopeId", "data-v-8a76b4f9"]]);
export {
  W as default
};
