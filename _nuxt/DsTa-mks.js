import { _ as R } from "./CDGVCZAD.js";
import { d as b, B as a, o as n, H as C, I as L, D as m, g as $, f as S, x as q, C as t, E as w, ag as I, e as v, G as U, h as c, F as V, w as z, a as O, L as A, aL as k, M as N, A as H, v as h, J as P, a3 as j } from "./B8biU-UE.js";
import { _ as M } from "./BBcI-2Hm.js";
import { _ as T } from "./Fc1-Bd8L.js";
import { u as D } from "./CiaHVC_M.js";
import { a as F } from "./CQkxAz7J.js";
import { _ as W } from "./DlAUqK2U.js";
import { g as E } from "./CpsPJSKh.js";
import "./B5vKjtsS.js";
function G(f) {
  return new URL(window.location.href);
}
const J = { grid: "~ cols-1 lg:cols-2 gap-20 md:gap-22" }, Q = b({ __name: "Nimiq", props: { items: {} }, setup(f) {
  return (o, r) => {
    const i = R, p = I;
    return n(), a("ul", J, [(n(true), a(C, null, L(o.items, ({ description: g, highlight: e, item: u, preview: x, title: l, link: d }, y) => (n(), a("li", { key: y, class: m({ "lg:col-span-full": e }) }, [$(p, { p: "32 md:40 lg:48 b-0", field: d, "of-hidden": "", "nq-hoverable": "", bg: "neutral-300 hocus:neutral-0", style: { "--ring-color": "transparent" }, grid: "~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]", class: m({ "lg:rows-[repeat(4,auto)] lg:cols-1": !e }) }, { default: S(() => [u === "Nimiq Pay" ? (n(), a("div", { key: 0, size: "48 lg:56", "rounded-12": "", "bg-gradient-gold": "", grid: "~ place-content-center", class: m({ "lg:mx-auto": !e, "max-xl:row-span-ful": e }) }, r[0] || (r[0] = [t("div", { "i-nimiq:logos-nimiq-pay-vertical-mono": "", text: "32 [#ededee]" }, null, -1)]), 2)) : u === "CPL" ? (n(), a("div", { key: 1, size: "48 lg:56", "i-nimiq:logos-cpl-tag": "", class: m({ "lg:mx-auto": !e, "lg:ml-24": e }) }, null, 2)) : u === "Nimiq Wallet" ? (n(), a("div", { key: 2, "text-56": "", "i-nimiq:logos-nimiq": "", class: m({ "lg:mx-auto": !e, "lg:ml-24": e }) }, null, 2)) : q("", true), t("h3", { text: "22/28.6 lg:28/36.4", "font-semibold": "", "mt-16": "", class: m(e ? "text-left lg:ml-24" : "lg:text-center") }, w(l), 3), t("p", { "mt-12": "", "max-w-28ch": "", "lg:mx-auto": "", text: "16/24 md:17/25.5 lg:18/28 neutral-800", class: m({ "lg:text-center": !e, "lg:ml-24": e }) }, w(g), 3), r[1] || (r[1] = t("div", { grid: "~ place-content-center", "mb-32": "", "rounded-full": "", "size-32": "", "bg-gradient-blue": "", "max-md:mt-12": "", "md:hidden": "" }, [t("div", { "i-nimiq:chevron-right": "", text: "9 white" })], -1)), t("div", { "h-196": "", class: m({ "max-md:mr--128 md:ml-16": u === "CPL", "max-md:mr--128": u === "Nimiq Wallet", "md:max-w-245": u === "Nimiq Pay", "lg:mt-40 md:row-span-full md:col-start-2 lg:row-span-1 lg:col-start-1": !e, "md:row-span-full md:col-start-2 lg:h-490 lg:mb--68": e }), "md:mx-auto": "" }, [$(i, { field: x, class: m({ "max-xl:scale-155 max-xl:transform-origin-top-left": u === "Nimiq Wallet" }) }, null, 8, ["field", "class"])], 2)]), _: 2, __: [1] }, 1032, ["field", "class"])], 2))), 128))]);
  };
} }), K = Object.assign(Q, { __name: "AppsShowcaseNimiq" }), X = { flex: "~ wrap items-center gap-8", "rounded-6": "", "bg-neutral-0": "", "h-full": "", shadow: "", "f-p-xs": "" }, Y = { flex: "~ col gap-12", "p-24": "", "flex-1": "" }, Z = { class: "nq-raw", "text-neutral-800": "", "mt-0": "", "f-pt-2xs": "" }, ee = b({ __name: "Highlighted", props: { name: {}, description: {}, screenshot: {}, link: {} }, setup(f) {
  const o = new URL(f.link), r = o.host === G().host ? o.pathname : f.link;
  return (i, p) => {
    const g = T, e = V;
    return n(), a("div", X, [i.screenshot ? (n(), v(g, { key: 0, src: i.screenshot, "rounded-4": "", "rounded-8": "", "h-auto": "", "max-h": "445 md:full", "max-w-full": "", w: "full md:320", "object-cover": "" }, null, 8, ["src"])) : q("", true), t("div", Y, [t("h3", null, w(i.name), 1), t("p", Z, w(i.description), 1), $(e, { to: c(r), "mx-0": "", "f-mt-md": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: S(() => p[0] || (p[0] = [U(" Learn more ")])), _: 1, __: [0] }, 8, ["to"])])]);
  };
} }), te = Object.assign(ee, { __name: "CardHighlighted" }), le = { flex: "" }, ne = { "f-py-xs": "", "f-pl-xs": "" }, oe = { "f-py-xs": "" }, se = { "f-py-xs": "", "f-pr-xs": "" }, ae = { key: 0, "f-mt-xl": "", grid: "~ gap-16 cols-1 md:cols-[repeat(auto-fit,min(100%,350px))] 2xl:gap-32 xl:gap-24" }, re = b({ __name: "All", props: { labelAll: {}, labelOfficial: {}, labelCommunity: {}, labelBy: {}, labelLearnMore: {}, labelInnovation: {}, labelTeamNimiq: {} }, async setup(f) {
  let o, r;
  const { data: i } = ([o, r] = z(() => D({ labelTeamNimiq: f.labelTeamNimiq })), o = await o, r(), o), { filteredApps: p, getSpotlightAppsPosition: g, madeBy: e } = u(i.value);
  function u({ apps: x, spotLightApps: l }) {
    const d = F("made-by", "anyone");
    function y({ name: _, isHighlighted: B }) {
      return B ? { gridRow: `${(l.indexOf(_) + 1) * 3 - 2}`, class: "spotlight-app spotlight-span-2" } : void 0;
    }
    return { filteredApps: O(() => d.value === "anyone" ? x : d.value === "official" ? x.filter((_) => _.developer === "@nimiq") : d.value === "community" ? x.filter((_) => _.developer !== "@nimiq") : []), madeBy: d, getSpotlightAppsPosition: y };
  }
  return (x, l) => {
    const d = M, y = te;
    return n(), a(C, null, [t("form", { "rounded-full": "", "bg-neutral-300": "", onSubmit: l[3] || (l[3] = H(() => {
    }, ["prevent"])) }, [t("fieldset", le, [l[7] || (l[7] = t("p", { "sr-only": "" }, " Filter by author of the app ", -1)), t("label", ne, [A(t("input", { id: "anyone", "onUpdate:modelValue": l[0] || (l[0] = (s) => N(e) ? e.value = s : null), type: "radio", value: "anyone" }, null, 512), [[k, c(e)]]), l[4] || (l[4] = t("span", null, "Anyone", -1))]), t("label", oe, [A(t("input", { id: "official", "onUpdate:modelValue": l[1] || (l[1] = (s) => N(e) ? e.value = s : null), type: "radio", value: "official" }, null, 512), [[k, c(e)]]), l[5] || (l[5] = t("span", null, "Official", -1))]), t("label", se, [A(t("input", { id: "community", "onUpdate:modelValue": l[2] || (l[2] = (s) => N(e) ? e.value = s : null), type: "radio", value: "community" }, null, 512), [[k, c(e)]]), l[6] || (l[6] = t("span", null, "Community", -1))])])], 32), c(p).length ? (n(), a("ul", ae, [(n(true), a(C, null, L(c(p), (s, _) => {
      var _a;
      return n(), a("li", { key: _, style: h(c(g)(s)), class: m((_a = c(g)(s)) == null ? void 0 : _a.class), "w-full": "" }, [s.isHighlighted ? (n(), v(y, P({ key: 1, ref_for: true }, s, { "w-full": "" }), null, 16)) : (n(), v(d, P({ key: 0, ref_for: true }, s, { "w-full": "" }), null, 16))], 6);
    }), 128))])) : q("", true)], 64);
  };
} }), ie = Object.assign(W(re, [["__scopeId", "data-v-eeee24d0"]]), { __name: "AppsShowcaseAll" }), me = { "bg-neutral-0": "" }, we = b({ __name: "index", props: E(), setup(f) {
  return (o, r) => {
    const i = K, p = ie;
    return n(), a("section", me, [o.slice.variation === "nimiqsApps" ? (n(), v(i, { key: 0, items: o.slice.primary.apps }, null, 8, ["items"])) : o.slice.variation === "default" ? (n(), v(p, j(P({ key: 1 }, o.slice.primary)), null, 16)) : q("", true)]);
  };
} });
export {
  we as default
};
