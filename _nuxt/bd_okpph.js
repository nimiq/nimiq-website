import { _ as P } from "./C7IVxsr-.js";
import { d as w, c as a, o as n, F as $, r as L, n as m, a as C, w as B, f as q, e as t, t as v, Y as I, b, g as U, u as c, _ as V, v as z, j as O, aa as A, ab as k, ac as N, $ as j, h, m as S, i as H, S as T } from "./7tyaNgEA.js";
import { _ as F } from "./fTVCuCpv.js";
import { u as M } from "./Bzbe44ZN.js";
import { a as W } from "./BlNg8BrV.js";
import { g as D } from "./CpsPJSKh.js";
import "./8Lad1M9Y.js";
function E(f) {
  return new URL(window.location.href);
}
const G = { grid: "~ cols-1 lg:cols-2 gap-20 md:gap-22" }, Q = w({ __name: "Nimiq", props: { items: {} }, setup(f) {
  return (o, r) => {
    const i = P, p = I;
    return n(), a("ul", G, [(n(true), a($, null, L(o.items, ({ description: g, highlight: e, item: u, preview: x, title: l, link: d }, y) => (n(), a("li", { key: y, class: m({ "lg:col-span-full": e }) }, [C(p, { "internal-component": "a", p: "32 md:40 lg:48 b-0", field: d, "of-hidden": "", "nq-hoverable": "", bg: "neutral-300 hocus:neutral-0", style: { "--ring-color": "transparent" }, grid: "~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]", class: m({ "lg:rows-[repeat(4,auto)] lg:cols-1": !e }) }, { default: B(() => [u === "Nimiq Pay" ? (n(), a("div", { key: 0, size: "48 lg:56", "rounded-12": "", "bg-gradient-gold": "", grid: "~ place-content-center", class: m({ "lg:mx-auto": !e, "max-xl:row-span-ful": e }) }, r[0] || (r[0] = [t("div", { "i-nimiq:logos-nimiq-pay-vertical-mono": "", text: "32 [#ededee]" }, null, -1)]), 2)) : u === "CPL" ? (n(), a("div", { key: 1, size: "48 lg:56", "i-nimiq:logos-cpl-tag": "", class: m({ "lg:mx-auto": !e, "lg:ml-24": e }) }, null, 2)) : u === "Nimiq Wallet" ? (n(), a("div", { key: 2, "text-56": "", "i-nimiq:logos-nimiq": "", class: m({ "lg:mx-auto": !e, "lg:ml-24": e }) }, null, 2)) : q("", true), t("h3", { text: "22/28.6 lg:28/36.4", "mt-16": "", "font-semibold": "", class: m(e ? "text-left lg:ml-24" : "lg:text-center") }, v(l), 3), t("p", { "mt-12": "", "max-w-28ch": "", "lg:mx-auto": "", text: "16/24 md:17/25.5 lg:18/28 neutral-800", class: m({ "lg:text-center": !e, "lg:ml-24": e }) }, v(g), 3), r[1] || (r[1] = t("div", { grid: "~ place-content-center", "mb-32": "", "size-32": "", "rounded-full": "", "bg-gradient-blue": "", "max-md:mt-12": "", "md:hidden": "" }, [t("div", { "i-nimiq:chevron-right": "", text: "9 white" })], -1)), t("div", { "h-196": "", class: m({ "max-md:mr--128 md:ml-16": u === "CPL", "max-md:mr--128": u === "Nimiq Wallet", "md:max-w-245": u === "Nimiq Pay", "lg:mt-40 md:row-span-full md:col-start-2 lg:row-span-1 lg:col-start-1": !e, "md:row-span-full md:col-start-2 lg:h-490 lg:mb--68": e }), "md:mx-auto": "" }, [C(i, { src: o.$prismic.asImageSrc(x), class: m({ "max-xl:scale-155 max-xl:transform-origin-top-left": u === "Nimiq Wallet" }) }, null, 8, ["src", "class"])], 2)]), _: 2 }, 1032, ["field", "class"])], 2))), 128))]);
  };
} }), Y = Object.assign(Q, { __name: "AppsShowcaseNimiq" }), J = { flex: "~ wrap items-center gap-8", "h-full": "", "rounded-6": "", "bg-neutral-0": "", shadow: "", "f-p-xs": "" }, K = { flex: "~ col gap-12", "flex-1": "", "p-24": "" }, X = { class: "nq-raw", "mt-0": "", "text-neutral-800": "", "f-pt-2xs": "" }, Z = w({ __name: "Highlighted", props: { name: {}, description: {}, screenshot: {}, link: {} }, setup(f) {
  const o = new URL(f.link), r = o.host === E().host ? o.pathname : f.link;
  return (i, p) => {
    const g = P, e = V;
    return n(), a("div", J, [i.screenshot ? (n(), b(g, { key: 0, src: i.screenshot, "h-auto": "", "max-h-full": "", "max-w-full": "", "w-320": "", "rounded-4": "", "rounded-8": "", "object-cover": "" }, null, 8, ["src"])) : q("", true), t("div", K, [t("h3", null, v(i.name), 1), t("p", X, v(i.description), 1), C(e, { to: c(r), "mx-0": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "", "f-mt-md": "" }, { default: B(() => p[0] || (p[0] = [U(" Learn more ")])), _: 1 }, 8, ["to"])])]);
  };
} }), ee = Object.assign(Z, { __name: "CardHighlighted" }), te = { flex: "" }, le = { "f-py-xs": "", "f-pl-xs": "" }, ne = { "f-py-xs": "" }, oe = { "f-py-xs": "", "f-pr-xs": "" }, se = { key: 0, "f-mt-xl": "", grid: "~ gap-16 cols-[repeat(auto-fit,min(100%,350px))] 2xl:gap-32 xl:gap-24" }, ae = w({ __name: "All", props: { labelAll: {}, labelOfficial: {}, labelCommunity: {}, labelBy: {}, labelLearnMore: {}, labelInnovation: {}, labelTeamNimiq: {} }, async setup(f) {
  let o, r;
  const { data: i } = ([o, r] = z(() => M({ labelTeamNimiq: f.labelTeamNimiq })), o = await o, r(), o), { filteredApps: p, getSpotlightAppsPosition: g, madeBy: e } = u(i.value);
  function u({ apps: x, spotLightApps: l }) {
    const d = W("made-by", "anyone");
    function y({ name: _, isHighlighted: R }) {
      return R ? { gridRow: `${(l.indexOf(_) + 1) * 3 - 2}`, class: "spotlight-app spotlight-span-2" } : void 0;
    }
    return { filteredApps: O(() => d.value === "anyone" ? x : d.value === "official" ? x.filter((_) => _.developer === "@nimiq") : d.value === "community" ? x.filter((_) => _.developer !== "@nimiq") : []), madeBy: d, getSpotlightAppsPosition: y };
  }
  return (x, l) => {
    const d = F, y = ee;
    return n(), a($, null, [t("form", { "rounded-full": "", "bg-neutral-300": "", onSubmit: l[3] || (l[3] = j(() => {
    }, ["prevent"])) }, [t("fieldset", te, [l[7] || (l[7] = t("p", { "sr-only": "" }, " Filter by author of the app ", -1)), t("label", le, [A(t("input", { id: "anyone", "onUpdate:modelValue": l[0] || (l[0] = (s) => N(e) ? e.value = s : null), type: "radio", value: "anyone" }, null, 512), [[k, c(e)]]), l[4] || (l[4] = t("span", null, "Anyone", -1))]), t("label", ne, [A(t("input", { id: "official", "onUpdate:modelValue": l[1] || (l[1] = (s) => N(e) ? e.value = s : null), type: "radio", value: "official" }, null, 512), [[k, c(e)]]), l[5] || (l[5] = t("span", null, "Official", -1))]), t("label", oe, [A(t("input", { id: "community", "onUpdate:modelValue": l[2] || (l[2] = (s) => N(e) ? e.value = s : null), type: "radio", value: "community" }, null, 512), [[k, c(e)]]), l[6] || (l[6] = t("span", null, "Community", -1))])])], 32), c(p).length ? (n(), a("ul", se, [(n(true), a($, null, L(c(p), (s, _) => {
      var _a;
      return n(), a("li", { key: _, style: h(c(g)(s)), class: m((_a = c(g)(s)) == null ? void 0 : _a.class), "w-full": "" }, [s.isHighlighted ? (n(), b(y, S({ key: 1, ref_for: true }, s, { "w-full": "" }), null, 16)) : (n(), b(d, S({ key: 0, ref_for: true }, s, { "w-full": "" }), null, 16))], 6);
    }), 128))])) : q("", true)], 64);
  };
} }), re = Object.assign(H(ae, [["__scopeId", "data-v-811a6650"]]), { __name: "AppsShowcaseAll" }), ie = { "bg-neutral-100": "" }, xe = w({ __name: "index", props: D(), setup(f) {
  return (o, r) => {
    const i = Y, p = re;
    return n(), a("section", ie, [o.slice.variation === "nimiqsApps" ? (n(), b(i, { key: 0, items: o.slice.primary.apps }, null, 8, ["items"])) : o.slice.variation === "default" ? (n(), b(p, T(S({ key: 1 }, o.slice.primary)), null, 16)) : q("", true)]);
  };
} });
export {
  xe as default
};
