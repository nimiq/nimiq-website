import { d as w, c as a, o as n, F as $, r as S, n as m, a as C, w as L, f as q, e as l, t as b, E as R, Z as U, b as v, g as V, u as c, _ as z, v as I, j as O, ak as A, al as k, am as N, a0 as j, h, m as P, i as H, S as T } from "./BguRs3jF.js";
import { _ as F } from "./DVQW7ZtA.js";
import { _ as M } from "./CrnXQicC.js";
import { u as W } from "./DX3MUyZM.js";
import { a as D } from "./CwbeRH5k.js";
import { g as E } from "./CpsPJSKh.js";
import "./DeSMYd_K.js";
function G(f) {
  return new URL(window.location.href);
}
const Q = { grid: "~ cols-1 lg:cols-2 gap-20 md:gap-22" }, Z = w({ __name: "Nimiq", props: { items: {} }, setup(f) {
  return (o, i) => {
    const r = R, u = U;
    return n(), a("ul", Q, [(n(true), a($, null, S(o.items, ({ description: g, highlight: e, item: p, preview: x, title: t, link: d }, y) => (n(), a("li", { key: y, class: m({ "lg:col-span-full": e }) }, [C(u, { "internal-component": "a", p: "32 md:40 lg:48 b-0", field: d, "of-hidden": "", "nq-hoverable": "", bg: "neutral-300 hocus:neutral-0", style: { "--ring-color": "transparent" }, grid: "~ gap-x-48 lg:gap-x-80 md:rows-[auto_auto_1fr] md:cols-[221px_1fr]", class: m({ "lg:rows-[repeat(4,auto)] lg:cols-1": !e }) }, { default: L(() => [p === "Nimiq Pay" ? (n(), a("div", { key: 0, size: "48 lg:56", "rounded-12": "", "bg-gradient-gold": "", grid: "~ place-content-center", class: m({ "lg:mx-auto": !e, "max-xl:row-span-ful": e }) }, i[0] || (i[0] = [l("div", { "i-nimiq:logos-nimiq-pay-vertical-mono": "", text: "32 [#ededee]" }, null, -1)]), 2)) : p === "CPL" ? (n(), a("div", { key: 1, size: "48 lg:56", "i-nimiq:logos-cpl-tag": "", class: m({ "lg:mx-auto": !e, "lg:ml-24": e }) }, null, 2)) : p === "Nimiq Wallet" ? (n(), a("div", { key: 2, "text-56": "", "i-nimiq:logos-nimiq": "", class: m({ "lg:mx-auto": !e, "lg:ml-24": e }) }, null, 2)) : q("", true), l("h3", { text: "22/28.6 lg:28/36.4", "font-semibold": "", "mt-16": "", class: m(e ? "text-left lg:ml-24" : "lg:text-center") }, b(t), 3), l("p", { "mt-12": "", "max-w-28ch": "", "lg:mx-auto": "", text: "16/24 md:17/25.5 lg:18/28 neutral-800", class: m({ "lg:text-center": !e, "lg:ml-24": e }) }, b(g), 3), i[1] || (i[1] = l("div", { grid: "~ place-content-center", "mb-32": "", "rounded-full": "", "size-32": "", "bg-gradient-blue": "", "max-md:mt-12": "", "md:hidden": "" }, [l("div", { "i-nimiq:chevron-right": "", text: "9 white" })], -1)), l("div", { "h-196": "", class: m({ "max-md:mr--128 md:ml-16": p === "CPL", "max-md:mr--128": p === "Nimiq Wallet", "md:max-w-245": p === "Nimiq Pay", "lg:mt-40 md:row-span-full md:col-start-2 lg:row-span-1 lg:col-start-1": !e, "md:row-span-full md:col-start-2 lg:h-490 lg:mb--68": e }), "md:mx-auto": "" }, [C(r, { field: x, class: m({ "max-xl:scale-155 max-xl:transform-origin-top-left": p === "Nimiq Wallet" }) }, null, 8, ["field", "class"])], 2)]), _: 2, __: [1] }, 1032, ["field", "class"])], 2))), 128))]);
  };
} }), J = Object.assign(Z, { __name: "AppsShowcaseNimiq" }), K = { flex: "~ wrap items-center gap-8", "rounded-6": "", "bg-neutral-0": "", "h-full": "", shadow: "", "f-p-xs": "" }, X = { flex: "~ col gap-12", "p-24": "", "flex-1": "" }, Y = { class: "nq-raw", "text-neutral-800": "", "mt-0": "", "f-pt-2xs": "" }, ee = w({ __name: "Highlighted", props: { name: {}, description: {}, screenshot: {}, link: {} }, setup(f) {
  const o = new URL(f.link), i = o.host === G().host ? o.pathname : f.link;
  return (r, u) => {
    const g = M, e = z;
    return n(), a("div", K, [r.screenshot ? (n(), v(g, { key: 0, src: r.screenshot, "rounded-4": "", "rounded-8": "", "h-auto": "", "max-h": "445 md:full", "max-w-full": "", w: "full md:320", "object-cover": "" }, null, 8, ["src"])) : q("", true), l("div", X, [l("h3", null, b(r.name), 1), l("p", Y, b(r.description), 1), C(e, { to: c(i), "mx-0": "", "f-mt-md": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: L(() => u[0] || (u[0] = [V(" Learn more ")])), _: 1, __: [0] }, 8, ["to"])])]);
  };
} }), le = Object.assign(ee, { __name: "CardHighlighted" }), te = { flex: "" }, ne = { "f-py-xs": "", "f-pl-xs": "" }, oe = { "f-py-xs": "" }, se = { "f-py-xs": "", "f-pr-xs": "" }, ae = { key: 0, "f-mt-xl": "", grid: "~ gap-16 cols-1 md:cols-[repeat(auto-fit,min(100%,350px))] 2xl:gap-32 xl:gap-24" }, ie = w({ __name: "All", props: { labelAll: {}, labelOfficial: {}, labelCommunity: {}, labelBy: {}, labelLearnMore: {}, labelInnovation: {}, labelTeamNimiq: {} }, async setup(f) {
  let o, i;
  const { data: r } = ([o, i] = I(() => W({ labelTeamNimiq: f.labelTeamNimiq })), o = await o, i(), o), { filteredApps: u, getSpotlightAppsPosition: g, madeBy: e } = p(r.value);
  function p({ apps: x, spotLightApps: t }) {
    const d = D("made-by", "anyone");
    function y({ name: _, isHighlighted: B }) {
      return B ? { gridRow: `${(t.indexOf(_) + 1) * 3 - 2}`, class: "spotlight-app spotlight-span-2" } : void 0;
    }
    return { filteredApps: O(() => d.value === "anyone" ? x : d.value === "official" ? x.filter((_) => _.developer === "@nimiq") : d.value === "community" ? x.filter((_) => _.developer !== "@nimiq") : []), madeBy: d, getSpotlightAppsPosition: y };
  }
  return (x, t) => {
    const d = F, y = le;
    return n(), a($, null, [l("form", { "rounded-full": "", "bg-neutral-300": "", onSubmit: t[3] || (t[3] = j(() => {
    }, ["prevent"])) }, [l("fieldset", te, [t[7] || (t[7] = l("p", { "sr-only": "" }, " Filter by author of the app ", -1)), l("label", ne, [A(l("input", { id: "anyone", "onUpdate:modelValue": t[0] || (t[0] = (s) => N(e) ? e.value = s : null), type: "radio", value: "anyone" }, null, 512), [[k, c(e)]]), t[4] || (t[4] = l("span", null, "Anyone", -1))]), l("label", oe, [A(l("input", { id: "official", "onUpdate:modelValue": t[1] || (t[1] = (s) => N(e) ? e.value = s : null), type: "radio", value: "official" }, null, 512), [[k, c(e)]]), t[5] || (t[5] = l("span", null, "Official", -1))]), l("label", se, [A(l("input", { id: "community", "onUpdate:modelValue": t[2] || (t[2] = (s) => N(e) ? e.value = s : null), type: "radio", value: "community" }, null, 512), [[k, c(e)]]), t[6] || (t[6] = l("span", null, "Community", -1))])])], 32), c(u).length ? (n(), a("ul", ae, [(n(true), a($, null, S(c(u), (s, _) => {
      var _a;
      return n(), a("li", { key: _, style: h(c(g)(s)), class: m((_a = c(g)(s)) == null ? void 0 : _a.class), "w-full": "" }, [s.isHighlighted ? (n(), v(y, P({ key: 1, ref_for: true }, s, { "w-full": "" }), null, 16)) : (n(), v(d, P({ key: 0, ref_for: true }, s, { "w-full": "" }), null, 16))], 6);
    }), 128))])) : q("", true)], 64);
  };
} }), re = Object.assign(H(ie, [["__scopeId", "data-v-eeee24d0"]]), { __name: "AppsShowcaseAll" }), me = { "bg-neutral-0": "" }, ye = w({ __name: "index", props: E(), setup(f) {
  return (o, i) => {
    const r = J, u = re;
    return n(), a("section", me, [o.slice.variation === "nimiqsApps" ? (n(), v(r, { key: 0, items: o.slice.primary.apps }, null, 8, ["items"])) : o.slice.variation === "default" ? (n(), v(u, T(P({ key: 1 }, o.slice.primary)), null, 16)) : q("", true)]);
  };
} });
export {
  ye as default
};
