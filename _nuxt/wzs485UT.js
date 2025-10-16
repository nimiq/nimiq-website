import { _ as j } from "./CDGVCZAD.js";
import { d as D, w as R, B as n, o as l, x as g, H as b, I as _, v as k, C as i, e as q, f as F, D as s, g as u, E as N, h as M, ag as G } from "./B8biU-UE.js";
import { g as J } from "./CpsPJSKh.js";
import { _ as O } from "./skKO6Fnq.js";
import { _ as W } from "./BSmYPTen.js";
import { a as X } from "./DRbUa3ZN.js";
import { u as Y } from "./C01oBEpG.js";
import { u as K } from "./CiaHVC_M.js";
import { _ as Q } from "./DlAUqK2U.js";
import "./Fc1-Bd8L.js";
import "./DOgGst0G.js";
import "./B5vKjtsS.js";
const U = ["data-inverted"], Z = { key: 0, class: "curtain", "pointer-events-none": "", "inset-0": "", absolute: "" }, ee = { key: 1, "rounded-6": "", "pointer-events-none": "", "inset-1.5": "", absolute: "", "bg-gradient-green": "" }, te = { key: 2, text: "200 md:300 lg:400", "pointer-events-none": "", absolute: "", bottom: "-10 lg:-0.2775em", right: "-0.2em lg:-0.25em" }, le = { "max-w-60ch": "" }, ie = { key: 1, "w-full": "" }, ne = { "size-full": "", "inset-0": "", absolute: "", "of-hidden": "" }, se = { grid: "~ cols-1 lg:cols-[1fr_max-content] gap-x-32 lg:flow-col", ring: "1.5 neutral-300", p: "y-64 x-32 md:x-64 lg:72", "rounded-8": "", "bg-neutral-0": "", "gap-x-24": "", shadow: "", relative: "" }, ae = { flex: "~ col gap-12 md:gap-16 lg:gap-24", "mt-40": "", "lg:mt-0": "", "lg:row-span-2": "" }, re = { stack: "", "rounded-full": "", "bg-green": "", "size-32": "" }, oe = { key: 2, grid: "~ cols-1 lg:cols-[1fr_max-content] gap-x-32 lg:flow-col", ring: "1.5 neutral-300", p: "y-64 x-32 md:x-64 lg:72", "rounded-8": "", "bg-neutral-0": "", "gap-x-24": "", "w-full": "", shadow: "", relative: "" }, de = { flex: "~ col gap-12 md:gap-16 lg:gap-24", "mt-40": "", "lg:mt-0": "", "lg:row-span-2": "" }, me = { stack: "", "rounded-full": "", "bg-gold": "", "size-32": "" }, ue = D({ __name: "index", props: J(), async setup(P) {
  let x, z;
  const $ = P, o = ["bottom--40 right--30 md:right-88 md:bottom--44 xl:right-180", "invisible md:visible md:right--18 md:bottom-50 lg:bottom-100 lg:right--32 xl:right-70 xl:bottom-60", "invisible md:visible md:left-88 md:bottom--52 xl:left-180", "invisible md:visible md:left--36 md:bottom-42 lg:bottom-92 xl:left-70 xl:bottom-60", "invisible xl:visible xl:bottom--40 xl:left--30", "invisible xl:visible xl:bottom--40 xl:right--30"];
  async function B(t) {
    switch (t) {
      case "Social Media": {
        const { data: e } = await Y();
        return e.value ? [{ ...e.value.youtube, name: "Nimiq's YouTube", classes: `text-48 ${o[0]}` }, { ...e.value.github, name: "Nimiq 's GitHub", classes: `text-60 ${o[1]}` }, { ...e.value.x, name: "Nimiq's X", classes: `text-54 ${o[2]}` }, { ...e.value.telegram, name: "Nimiq's Telegram", classes: `text-40 children:translate-y-3 children:translate-x--4 ${o[3]}` }, { ...e.value.instagram, name: "Nimiq's Instagram", classes: `text-60 ${o[4]}` }, { ...e.value.facebook, name: "Nimiq's Instagram", classes: `text-60 ${o[5]}` }] : [];
      }
      case "Nimiq Apps": {
        const { data: e } = K();
        return e.value.communityApps.sort(() => Math.random() - 0.5).slice(0, 6).map(({ color: c, logo: p, link: h, name: d }, a) => {
          const m = { link_type: "Web", url: h, target: "_blank" };
          return { color: c, icon: p, classes: o[a], name: d, link: m };
        });
      }
      default:
        return [];
    }
  }
  const C = ([x, z] = R(async () => Promise.all($.slice.items.map(async (t) => {
    const e = (await B(t.backgroundPattern)).filter((v) => v.link);
    if (!t.link) throw new Error(`Link is required in BannerSlice. Context: ${JSON.stringify($.context)}`);
    return { bgItems: e, hasBgItems: e.length > 0, ...t };
  }))), x = await x, z(), x);
  return (t, e) => {
    const v = j, c = G, p = O, h = W;
    return l(), n("section", { "nq-overlaps": "", "bg-neutral-0": "", relative: "", "z-10": "", class: s({ "pb-0": t.slice.variation !== "default" }), "data-slice-type": "banner" }, [t.slice.variation === "default" ? (l(true), n(b, { key: 0 }, _(M(C), ({ headline: d, subline: a, bgItems: m, bgColor: r, backgroundPattern: w, label: A, link: S, hasBgItems: f }, E) => (l(), n("div", { key: E, outline: "1.5 offset--1.5 white/20", style: k(`background: var(--nq-${r || "neutral"})`), "data-inverted": r === "green" ? "" : void 0, py: "24 lg:72", "mx-auto": "", "px-32": "", "rounded-8": "", "w-full": "", shadow: "", relative: "", "of-hidden": "" }, [(l(true), n(b, null, _(m, ({ classes: H, color: L, icon: y, link: I, name: T }, V) => (l(), q(c, { key: V, "aria-label": T, flex: "~ items-center justify-center", field: I, tabindex: "-1", style: k({ backgroundColor: L }), class: s([H]), "pointer-cursor": "", "text-white": "", "rounded-full": "", "size-104": "", absolute: "" }, { default: F(() => [typeof y == "string" ? (l(), n("div", { key: 0, class: s(y), "pointer-events-none": "" }, null, 2)) : (l(), q(v, { key: 1, field: y, "pointer-events-none": "", "scale-125": "" }, null, 8, ["field"])), i("div", { style: k({ borderColor: L }), top: "50%", left: "50%", border: "2 solid", "translate-x": "-50%", "translate-y": "-50%", "rounded-full": "", "op-0": "", "size-full": "", "pointer-events-none": "", "scale-100": "", absolute: "" }, null, 4)]), _: 2 }, 1032, ["aria-label", "field", "style", "class"]))), 128)), r === "white" ? (l(), n("div", Z)) : r === "green" ? (l(), n("div", ee)) : g("", true), w === "Nimiq Hexagon" ? (l(), n("div", te, e[0] || (e[0] = [i("div", { "text-transparent": "", "i-nimiq:logos-nimiq-mono": "" }, [i("div", { "size-full": "", "bg-gradient": "to-bl from-transparent via-transparent to-neutral/20" })], -1)]))) : g("", true), i("div", { "max-w-full": "", relative: "", "z-10": "", class: s({ "lg:max-w-60ch md:items-center flex-col md:mx-auto w-max": f, "items-end w-full": !f }), flex: "~ wrap justify-between" }, [i("div", le, [A ? (l(), n("p", { key: 0, class: s({ "f-mt-md": r !== "green", "f-mt-xs": r === "green" }), "text-12": "", "nq-label": "" }, N(A), 3)) : g("", true), u(p, { wrapper: "div", field: d, class: s({ "md:text-center": w === "Nimiq Apps" || w === "Social Media", "children:!text-white": r === "green" }) }, null, 8, ["field", "class"]), u(p, { wrapper: "div", field: a, class: s({ "md:text-center f-mt-xs": f, "f-mt-md": !f && r !== "green", "children:text-white/70 f-mt-sm": r === "green" }) }, null, 8, ["field", "class"])]), ("hasLink" in t ? t.hasLink : M(X))(S) ? (l(), q(c, { key: 0, field: S, mt: "32 md:24", "nq-arrow": "", "nq-pill-lg": "", class: s({ "md:mx-auto nq-pill-blue": f, "lg:mr-128 nq-pill-tertiary text-blue": !f }) }, null, 8, ["field", "class"])) : g("", true)], 2)], 12, U))), 128)) : t.slice.variation === "staking" ? (l(), n("div", ie, [i("div", ne, [u(h, { "size-110vw": "", "max-w-none": "", "bottom--300": "", "left--5vw": "", absolute: "" }), e[1] || (e[1] = i("div", { "h-200": "", "inset-x-0": "", "top-0": "", absolute: "", "bg-gradient": "to-b from-neutral-0 to-transparent" }, null, -1)), e[2] || (e[2] = i("div", { "h-200": "", "inset-x-0": "", "bottom-0": "", absolute: "", "bg-gradient": "to-b from-transparent to-green" }, null, -1))]), i("div", se, [u(p, { wrapper: "div", field: t.slice.primary.headline, text: "f-4xl neutral", "nq-raw": "", "font-bold": "", "max-w-24ch": "" }, null, 8, ["field"]), u(c, { field: t.slice.primary.cta, "f-mt-md": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, null, 8, ["field"]), i("ul", ae, [(l(true), n(b, null, _(t.slice.primary.requirements, ({ description: d, icon: a }, m) => (l(), n("li", { key: m, flex: "~ gap-12 items-center" }, [i("div", re, [i("div", { class: s([a, { "bottom--2 right-1 translate-x-1": a === "i-nimiq:document-filled" }]), text: "18 white", relative: "" }, null, 2)]), i("p", null, N(d), 1)]))), 128))])])])) : t.slice.variation === "buyAndSell" ? (l(), n("div", oe, [u(p, { wrapper: "div", field: t.slice.primary.headline, text: "44 neutral", "nq-raw": "", "font-bold": "", "max-w-24ch": "" }, null, 8, ["field"]), u(c, { field: t.slice.primary.cta, "f-mt-md": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, null, 8, ["field"]), i("ul", de, [(l(true), n(b, null, _(t.slice.primary.features, ({ description: d, icon: a }, m) => (l(), n("li", { key: m, flex: "~ gap-12 items-center" }, [i("div", me, [i("div", { class: s([a, { "bottom--2 right-1 translate-x-1": a === "i-nimiq:document-filled" }]), text: "18 white", relative: "" }, null, 2)]), i("p", null, N(d), 1)]))), 128))])])) : g("", true)], 2);
  };
} }), qe = Q(ue, [["__scopeId", "data-v-6a552326"]]);
export {
  qe as default
};
