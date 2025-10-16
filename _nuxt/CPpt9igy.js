import { f as Q, E as de, a as ce, g as pe, w as fe, _ as he } from "./s7JdVcym.js";
import { d as M, t as H, j as X, r as B, k as ee, e as k, o as s, f as y, g as b, h as t, P as L, l as P, m as te, a as _, n as ne, p as ye, q as ve, s as Y, v as q, x as R, y as ge, z as be, A as we, B as h, C as i, D as $, E as N, F as xe, G as K, H as I, I as T, J as W, K as _e, b as ke, L as D, M as E, N as Ce, O as z, i as Se } from "./B8biU-UE.js";
import { _ as qe } from "./D-k9HlQ8.js";
import { c as $e, u as J } from "./DOgGst0G.js";
import { _ as Be } from "./DlAUqK2U.js";
import { _ as Ie } from "./RboYPiSN.js";
import { s as Te } from "./Mv-fplKT.js";
import { u as oe } from "./DIegsOBI.js";
import { u as ae } from "./DPuYpcc3.js";
import "./Fc1-Bd8L.js";
import "./DRbUa3ZN.js";
import "./BzRmGp1f.js";
import "./DBRxGtFx.js";
import "./CoPlYyca.js";
import "./B5vKjtsS.js";
import "./CpsPJSKh.js";
import "./DiY6giUn.js";
const [Me, Fe] = ee("RovingFocusGroup"), Re = M({ __name: "RovingFocusGroup", props: { orientation: { default: void 0 }, dir: {}, loop: { type: Boolean, default: false }, currentTabStopId: {}, defaultCurrentTabStopId: {}, preventScrollOnEntryFocus: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["entryFocus", "update:currentTabStopId"], setup(g, { expose: l, emit: u }) {
  const e = g, p = u, { loop: v, orientation: m, dir: o } = H(e), r = oe(o), a = X(e, "currentTabStopId", p, { defaultValue: e.defaultCurrentTabStopId, passive: e.currentTabStopId === void 0 }), n = B(false), c = B(false), d = B(0), { getItems: f, CollectionSlot: C } = ae({ isProvider: true });
  function S(w) {
    const F = !c.value;
    if (w.currentTarget && w.target === w.currentTarget && F && !n.value) {
      const V = new CustomEvent(de, ce);
      if (w.currentTarget.dispatchEvent(V), p("entryFocus", V), !V.defaultPrevented) {
        const j = f().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), x = j.find((A) => A.getAttribute("data-active") === ""), ue = j.find((A) => A.id === a.value), me = [x, ue, ...j].filter(Boolean);
        Q(me, e.preventScrollOnEntryFocus);
      }
    }
    c.value = false;
  }
  function U() {
    setTimeout(() => {
      c.value = false;
    }, 1);
  }
  return l({ getItems: f }), Fe({ loop: v, dir: r, orientation: m, currentTabStopId: a, onItemFocus: (w) => {
    a.value = w;
  }, onItemShiftTab: () => {
    n.value = true;
  }, onFocusableItemAdd: () => {
    d.value++;
  }, onFocusableItemRemove: () => {
    d.value--;
  } }), (w, F) => (s(), k(t(C), null, { default: y(() => [b(t(L), { tabindex: n.value || d.value === 0 ? -1 : 0, "data-orientation": t(m), as: w.as, "as-child": w.asChild, dir: t(r), style: { outline: "none" }, onMousedown: F[0] || (F[0] = (V) => c.value = true), onMouseup: U, onFocus: S, onBlur: F[1] || (F[1] = (V) => n.value = false) }, { default: y(() => [P(w.$slots, "default")]), _: 3 }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])]), _: 3 }));
} }), Ne = M({ __name: "RovingFocusItem", props: { tabStopId: {}, focusable: { type: Boolean, default: true }, active: { type: Boolean }, allowShiftKey: { type: Boolean }, asChild: { type: Boolean }, as: { default: "span" } }, setup(g) {
  const l = g, u = Me(), e = te(), p = _(() => l.tabStopId || e), v = _(() => u.currentTabStopId.value === p.value), { getItems: m, CollectionItem: o } = ae();
  ne(() => {
    l.focusable && u.onFocusableItemAdd();
  }), ye(() => {
    l.focusable && u.onFocusableItemRemove();
  });
  function r(a) {
    if (a.key === "Tab" && a.shiftKey) {
      u.onItemShiftTab();
      return;
    }
    if (a.target !== a.currentTarget) return;
    const n = pe(a, u.orientation.value, u.dir.value);
    if (n !== void 0) {
      if (a.metaKey || a.ctrlKey || a.altKey || !l.allowShiftKey && a.shiftKey) return;
      a.preventDefault();
      let c = [...m().map((d) => d.ref).filter((d) => d.dataset.disabled !== "")];
      if (n === "last") c.reverse();
      else if (n === "prev" || n === "next") {
        n === "prev" && c.reverse();
        const d = c.indexOf(a.currentTarget);
        c = u.loop.value ? fe(c, d + 1) : c.slice(d + 1);
      }
      ve(() => Q(c));
    }
  }
  return (a, n) => (s(), k(t(o), null, { default: y(() => [b(t(L), { tabindex: v.value ? 0 : -1, "data-orientation": t(u).orientation.value, "data-active": a.active ? "" : void 0, "data-disabled": a.focusable ? void 0 : "", as: a.as, "as-child": a.asChild, onMousedown: n[0] || (n[0] = (c) => {
    a.focusable ? t(u).onItemFocus(p.value) : c.preventDefault();
  }), onFocus: n[1] || (n[1] = (c) => t(u).onItemFocus(p.value)), onKeydown: r }, { default: y(() => [P(a.$slots, "default")]), _: 3 }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])]), _: 3 }));
} });
function ie(g, l) {
  return `${g}-trigger-${l}`;
}
function se(g, l) {
  return `${g}-content-${l}`;
}
const [G, Ve] = ee("TabsRoot"), Ae = M({ __name: "TabsRoot", props: { defaultValue: {}, orientation: { default: "horizontal" }, dir: {}, activationMode: { default: "automatic" }, modelValue: {}, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {} }, emits: ["update:modelValue"], setup(g, { emit: l }) {
  const u = g, e = l, { orientation: p, unmountOnHide: v, dir: m } = H(u), o = oe(m);
  Y();
  const r = X(u, "modelValue", e, { defaultValue: u.defaultValue, passive: u.modelValue === void 0 }), a = B();
  return Ve({ modelValue: r, changeModelValue: (n) => {
    r.value = n;
  }, orientation: p, dir: o, unmountOnHide: v, activationMode: u.activationMode, baseId: te(void 0, "reka-tabs"), tabsList: a }), (n, c) => (s(), k(t(L), { dir: t(o), "data-orientation": t(p), "as-child": n.asChild, as: n.as }, { default: y(() => [P(n.$slots, "default", { modelValue: t(r) })]), _: 3 }, 8, ["dir", "data-orientation", "as-child", "as"]));
} }), Oe = M({ __name: "TabsContent", props: { value: {}, forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(g) {
  const l = g, { forwardRef: u } = Y(), e = G(), p = _(() => ie(e.baseId, l.value)), v = _(() => se(e.baseId, l.value)), m = _(() => l.value === e.modelValue.value), o = B(m.value);
  return ne(() => {
    requestAnimationFrame(() => {
      o.value = false;
    });
  }), (r, a) => (s(), k(t(ge), { present: r.forceMount || m.value, "force-mount": "" }, { default: y(({ present: n }) => [b(t(L), { id: v.value, ref: t(u), "as-child": r.asChild, as: r.as, role: "tabpanel", "data-state": m.value ? "active" : "inactive", "data-orientation": t(e).orientation.value, "aria-labelledby": p.value, hidden: !n, tabindex: "0", style: q({ animationDuration: o.value ? "0s" : void 0 }) }, { default: y(() => [!t(e).unmountOnHide.value || n ? P(r.$slots, "default", { key: 0 }) : R("", true)]), _: 2 }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])]), _: 3 }, 8, ["present"]));
} }), Le = M({ __name: "TabsList", props: { loop: { type: Boolean, default: true }, asChild: { type: Boolean }, as: {} }, setup(g) {
  const l = g, { loop: u } = H(l), { forwardRef: e, currentElement: p } = Y(), v = G();
  return v.tabsList = p, (m, o) => (s(), k(t(Re), { "as-child": "", orientation: t(v).orientation.value, dir: t(v).dir.value, loop: t(u) }, { default: y(() => [b(t(L), { ref: t(e), role: "tablist", "as-child": m.asChild, as: m.as, "aria-orientation": t(v).orientation.value }, { default: y(() => [P(m.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "aria-orientation"])]), _: 3 }, 8, ["orientation", "dir", "loop"]));
} }), Pe = M({ __name: "TabsTrigger", props: { value: {}, disabled: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "button" } }, setup(g) {
  const l = g, { forwardRef: u } = Y(), e = G(), p = _(() => ie(e.baseId, l.value)), v = _(() => se(e.baseId, l.value)), m = _(() => l.value === e.modelValue.value);
  return (o, r) => (s(), k(t(Ne), { "as-child": "", focusable: !o.disabled, active: m.value }, { default: y(() => [b(t(L), { id: p.value, ref: t(u), role: "tab", type: o.as === "button" ? "button" : void 0, as: o.as, "as-child": o.asChild, "aria-selected": m.value ? "true" : "false", "aria-controls": v.value, "data-state": m.value ? "active" : "inactive", disabled: o.disabled, "data-disabled": o.disabled ? "" : void 0, "data-orientation": t(e).orientation.value, onMousedown: r[0] || (r[0] = we((a) => {
    !o.disabled && a.ctrlKey === false ? t(e).changeModelValue(o.value) : a.preventDefault();
  }, ["left"])), onKeydown: r[1] || (r[1] = be((a) => t(e).changeModelValue(o.value), ["enter", "space"])), onFocus: r[2] || (r[2] = () => {
    const a = t(e).activationMode !== "manual";
    !m.value && !o.disabled && a && t(e).changeModelValue(o.value);
  }) }, { default: y(() => [P(o.$slots, "default")]), _: 3 }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])]), _: 3 }, 8, ["focusable", "active"]));
} }), je = { flex: "~ gap-8 items-center" }, De = ["innerHTML"], Ee = { key: 2, "bottom-0": "", "top-12": "", absolute: "", class: "milestone", flex: "~ col" }, ze = { text: "f-xs neutral-800", "max-w-320": "" }, Je = M({ __name: "Block", props: { icon: {}, name: {}, year: {}, month: {}, withBg: { type: Boolean }, row: {}, untilYear: {}, untilMonth: {}, milestone: {}, tooltip: {} }, setup(g) {
  const [l, u] = $e();
  return (e, p) => {
    const v = xe, m = qe;
    return s(), h("div", { class: $({ "px-8 py-4 rounded-6 bg-[hsla(0,0%,100%,0.25)] mt--4 h-max mx--8": e.withBg }), "lh-none": "", "w-max": "", style: q({ "--year": e.year, "--month": e.month, "grid-row": e.row || 1, "--until-year": e.untilYear, "--until-month": e.untilMonth }) }, [b(t(l), null, { default: y(() => [i("div", je, [e.icon ? (s(), h("div", { key: 0, class: $(e.icon), "text-14": "", "op-90": "", "shrink-0": "" }, null, 2)) : R("", true), e.name ? (s(), h("span", { key: 1, "text-16": "", "whitespace-nowrap": "", class: $({ "lh-none": !e.withBg }), innerHTML: e.name }, null, 10, De)) : R("", true), e.milestone ? (s(), h("div", Ee, p[0] || (p[0] = [i("div", { "bg-white": "", "bg-op-25": "", "flex-1": "", "w-full": "" }, null, -1), i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "18", fill: "none" }, [i("path", { stroke: "white", "stroke-width": "2", d: "M1 0v.98c0 1.02.4 2 1.1 2.74l3.52 3.66c.73.76.73 1.97 0 2.74L2.1 13.78c-.7.74-1.1 1.72-1.1 2.74V18", opacity: ".25" })], -1), i("div", { "bg-white": "", "bg-op-25": "", "flex-1": "", "w-full": "" }, null, -1)]))) : R("", true)])]), _: 1 }), e.tooltip ? (s(), k(m, { key: 0 }, { trigger: y(() => [e.name === "First Blockchain in JS" ? (s(), h("div", { key: 0, flex: "~ items-center gap-8", "text-10": "", "op-80": "", "whitespace-nowrap": "", italic: "", "top-14": "", absolute: "", style: q({ "--year": e.year, "--month": e.month, "grid-row": e.row || 1, "--until-year": e.untilYear, "--until-month": e.untilMonth }) }, p[1] || (p[1] = [i("div", { "i-nimiq:info": "" }, null, -1), K(" Optional tooltip. This text will be removed. ")]), 4)) : R("", true), b(t(u))]), default: y(() => {
      var _a;
      return [i("p", ze, N(e.tooltip.label), 1), e.tooltip.cta ? (s(), k(v, { key: 0, to: (_a = e.tooltip.cta) == null ? void 0 : _a.link, target: "_blank", "un-text-blue": "", "font-semibold": "", "w-max": "", "f-mt-xs": "", "nq-arrow": "" }, { default: y(() => [K(N(e.tooltip.cta.label), 1)]), _: 1 }, 8, ["to"])) : R("", true)];
    }), _: 1 })) : (s(), k(t(u), { key: 1 }))], 6);
  };
} }), Ke = Object.assign(Be(Je, [["__scopeId", "data-v-b255c183"]]), { __name: "RoadmapBlock" }), Ye = { class: "layer milestone-lines", "w-max": "", "inset-y-0": "", absolute: "", "of-hidden": "" }, Ue = { flex: "~ items-center", "w-max": "", relative: "", "of-visible": "", ml: "$ml", pt: "$pt" }, He = { "pl-0": "", "left-0": "", absolute: "", "z-1": "", w: "$pl", flex: "~ items-center justify-center" }, Ge = { text: "center 10", "px-6": "", "bg-neutral-100": "", "whitespace-nowrap": "", "z-1": "", "nq-label": "" }, We = { flex: "~ items-center gap-6", "right--2": "", absolute: "" }, Ze = { class: "layer", pl: "$pl", "grid-rows-1": "", "items-center": "", "z-1": "", "of-visible": "", style: { "grid-template-columns": "repeat(calc(1 + var(--columns)), var(--columns-w))" } }, Qe = { text: "10/12 neutral center", flex: "~ justify-center items-center", bg: "neutral-0 dark:neutral-400", "px-16": "", "rounded-6": "", "h-full": "", "min-h-52": "", "nq-label": "" }, Xe = { text: "12 neutral-900", "whitespace-nowrap": "", "nq-label": "" }, et = { flex: "~ col gap-16", ml: "$ml", "w-max": "", "f-pt-lg": "", "f-mt-xs": "" }, tt = { "pt-12": "", relative: "" }, nt = { "font-bold": "" }, ot = M({ __name: "index", props: { milestones: {}, layers: {}, firstYear: {}, firstMonth: {} }, setup(g) {
  const l = (/* @__PURE__ */ new Date()).getFullYear(), u = (/* @__PURE__ */ new Date()).getMonth();
  function e(o) {
    if (!o) throw new Error("Block is missing");
    return Array.isArray(o) ? e(o.at(0)) : { "--first-month": o.month - 1, "--first-year": o.year };
  }
  function p(o, r) {
    var _a;
    if (!o) throw new Error("Block is missing");
    const a = o.at(r);
    if (!a) throw new Error(`Nested block at index ${r} is missing. Blocks: ${JSON.stringify(o)}`);
    const { year: n, month: c } = a.at(0), { year: d, month: f } = ((_a = o.at(r + 1)) == null ? void 0 : _a.at(0)) || { year: void 0, month: void 0 };
    return !d || !f ? { "--first-month": c, "--first-year": n, "--column-end": "span -1" } : { "--first-month": c, "--first-year": n, "--until-month": f, "--until-year": d };
  }
  function v(o) {
    return Array.isArray(o[0]);
  }
  const m = _(() => g.milestones.map((o, r) => {
    const a = g.milestones.at(r), n = g.milestones.at(r + 1), c = (a == null ? void 0 : a.untilYear) || (n == null ? void 0 : n.year) || "var(--current-year)", d = (a == null ? void 0 : a.untilMonth) || (n ? n.month : "var(--current-month)");
    return { ...o, untilYear: c, untilMonth: d };
  }));
  return (o, r) => {
    var _a, _b;
    const a = Ke;
    return s(), h("div", { class: "roadmap", "w-full": "", relative: "", "of-x-auto": "", flex: "~ col", style: q(`--first-month: ${o.firstMonth}; --first-year: ${o.firstYear}; --current-year: ${t(l)}; --current-month: ${t(u)}`) }, [i("div", Ye, [(s(true), h(I, null, T(t(m).slice(1), ({ month: n, year: c }, d) => (s(), h("div", { key: d, style: q(`--year: ${c}; --month: ${n};`), text: "neutral/5", relative: "", flex: "~ col" }, r[0] || (r[0] = [i("div", { h: "[calc(var(--pt)/2)]", w: "$vertical-lines-w", "bg-gradient": "to-b from-$bg to-current" }, null, -1), i("div", { h: "[calc(var(--pt)/2-4px)]", w: "$vertical-lines-w", "bg-current": "" }, null, -1), i("svg", { xmlns: "http://www.w3.org/2000/svg", width: "17", height: "58", fill: "none" }, [i("path", { stroke: "currentColor", "stroke-linecap": "square", "stroke-width": "2", d: "M1 57v-.88a6 6 0 0 1 .82-3.02l12.42-21.33a6 6 0 0 0 0-6.04L1.82 4.4A6 6 0 0 1 1 1.38V1" })], -1), i("div", { w: "$vertical-lines-w", "bg-current": "", "flex-1": "" }, null, -1), i("div", { h: "[calc(var(--pt)/2)]", w: "$vertical-lines-w", "bg-gradient": "to-t from-$bg to-current" }, null, -1)]), 4))), 128)), r[1] || (r[1] = i("div", { style: { "--year": "var(--current-year)", "--month": "var(--current-month)" }, "text-red": "", "h-full": "", relative: "", flex: "~ col" }, [i("div", { h: "$pt", w: "$vertical-lines-w", "bg-gradient": "to-b from-$bg to-current" }), i("div", { w: "$vertical-lines-w", "bg-current": "", "flex-1": "" }), i("div", { h: "$pt", w: "$vertical-lines-w", "bg-gradient": "to-t from-$bg to-current" })], -1))]), i("header", Ue, [i("div", He, [i("p", Ge, N(o.firstYear), 1), i("div", We, [(s(), h(I, null, T(4, (n) => i("div", { key: n, "bg-neutral-500": "", "h-1": "", "w-5": "", ring: "y-0.5 neutral-500" })), 64))])]), i("div", Ze, [(s(true), h(I, null, T(t(m), ({ label: n, month: c, year: d, untilMonth: f, untilYear: C }, S) => (s(), h("div", { key: S, style: q(`--year: ${d}; --month: ${c + (S > 0 ? 1 : 0)}; --until-year: ${C}; --until-month:${f}`), "drop-shadow": "", first: "" }, [i("div", Qe, N(n), 1)], 4))), 128)), i("div", { style: q(`--year: ${(_a = t(m).at(-1)) == null ? void 0 : _a.untilYear}; --month: ${Number((_b = t(m).at(-1)) == null ? void 0 : _b.untilMonth)}; grid-column: var(--column-start) / -1`), "h-full": "", "bg-repeat-x": "", class: "milestone-future", flex: "~ items-center justify-center" }, [i("span", Xe, N(t(l) + 1), 1)], 4)])]), i("ul", et, [(s(true), h(I, null, T(o.layers, (n, c) => (s(), h("li", { key: n.name, class: $(n.layerClasses), flex: "~ col justify-end", "p-24": "", "pr-0": "", "rounded-l-6": "", "w-max": "", "self-end": "", relative: "", pl: "$pl" }, [(s(true), h(I, null, T(n.blocks, (d) => (s(), h("div", { key: d.name, "mt-24": "", "first:mt-0": "", flex: "~ justify-end" }, [i("div", tt, [i("span", { "text-10": "", "grid-row-span-full": "", block: "", "left-0": "", "top-0": "", absolute: "", "nq-label": "", class: $(n.text) }, N(d.name), 3), v(d.items) ? (s(), h("div", { key: 0, flex: "~ gap-8", style: q(`--block-index:${c}`), class: $({ "mr--3": d.items.length > 1 }) }, [(s(true), h(I, null, T(d.items, (f, C) => (s(), h("div", { key: C, style: q(p(d.items, C)), class: $([[n.blocksClasses, d.nestedBlocksClasses], "layer force-row-height"]), "rounded-6": "", p: "$p-block", shadow: "", "last:rounded-r-0": "" }, [(s(true), h(I, null, T(f, (S) => (s(), k(a, W({ key: S.name, ref_for: true }, S), null, 16))), 128))], 6))), 128))], 6)) : (s(), h("div", { key: 1, class: $(["layer force-row-height", [n.blocksClasses, d.nestedBlocksClasses]]), style: q(e(d.items)), "p-16": "", "pr-0": "", "rounded-l-6": "", shadow: "" }, [(s(true), h(I, null, T(d.items, (f, C) => (s(), k(a, W({ key: C, ref_for: true }, f), null, 16))), 128))], 6))])]))), 128)), i("div", { class: $(n.text), "text-18": "", "bottom-24": "", "left-24": "", absolute: "", flex: "~ items-center gap-12" }, [i("div", { class: $(n.icon), "text-32": "" }, null, 2), i("span", nt, N(n.name), 1)], 2)], 2))), 128))])], 4);
  };
} }), at = Object.assign(ot, { __name: "Roadmap" }), re = 2017, le = 1, Z = [{ label: "Vision", year: 2017, month: 1 }, { label: "Crowdfunding", year: 2018, month: 2 }, { label: "Initial Launch", year: 2019, month: 2 }, { label: "Accessibility for Users & Merchants", year: 2020, month: 2 }, { label: "Proof-of-Stake Integration/Consolidation", year: 2022, month: 1 }, { label: "Adoption offensive", year: 2023, month: 6, untilMonth: 3, untilYear: 2026 }], O = [{ name: "Network Layer", layerClasses: "bg-blue/10", text: "text-blue-1100", icon: "i-nimiq:duotone-network", blocksClasses: "bg-blue text-white", blocks: [{ name: "Research", items: [{ icon: "i-roadmap:js", name: "First Blockchain in JS", year: re, month: le }, { icon: "i-nimiq:mining", name: "Browser mining", year: 2018, month: 8 }, { icon: "i-nimiq:leaf-2", name: "Albatross PoS design", year: 2019, month: 7 }, { icon: "i-nimiq:divergence", name: "Fiat-crypto HTLCs ", year: 2020, month: 11 }, { icon: "i-nimiq:eyeslash", name: "ZKP system", year: 2022, month: 1 }, { icon: "i-nimiq:locked-lock", name: "Passkeys", year: 2024, month: 2 }, { name: "Interoperability", year: 2025, month: 2 }] }, { name: "Blockchain", items: [{ icon: "i-nimiq:pacifier", name: "First prototype", withBg: true, year: 2017, month: 4 }, { icon: "i-nimiq:tools-wench-hammer", name: "Development PoW", year: 2018, month: 2 }, { icon: "i-nimiq:moon", name: "Luna Testnet", year: 2018, month: 4, row: 2 }, { name: "<b>1.0</b> Nimiq PoW", year: 2019, month: 1, milestone: "Crowdfunding" }, { icon: "i-nimiq:mining", name: "Browser mining", year: 2019, month: 9 }, { icon: "i-roadmap:rust relative scale-120", name: "Rust implementation", year: 2019, month: 11, row: 2 }, { icon: "i-nimiq:tools-wench-hammer", name: "Development PoS", year: 2020, month: 8 }, { icon: "i-roadmap:wasm", name: "WASM support", year: 2021, month: 7 }, { icon: "i-nimiq:handshake", name: "Sync protocol redesign", year: 2022, month: 2, row: 2 }, { icon: "i-nimiq:leaf-2", name: "PoS Testnet", year: 2022, month: 6 }, { name: "<b>2.0</b> Nimiq PoS", year: 2024, month: 7, withBg: true }] }, { name: "Swap Technology", items: [{ icon: "i-nimiq:logos-nimiq-mono", name: "OASIS", year: 2020, month: 12 }] }] }, { name: "App Layer", layerClasses: "bg-gold/10 pl-120", text: "text-gold-1100", icon: "i-nimiq:duotone-nim-phone", blocksClasses: "bg-gold text-white", blocks: [{ name: "Wallet", items: [{ icon: "i-nimiq:logos-nimiq-wallet-horizontal-mono w-68", name: "1.0", withBg: true, year: 2019, month: 2 }, { icon: "i-nimiq:logos-nimiq-wallet-horizontal-mono w-68", name: "2.0", withBg: true, year: 2020, month: 1, milestone: "Initial Launch" }, { icon: "i-nimiq:ledger-2", name: "Ledger integration", year: 2020, month: 9, row: 3 }, { icon: "i-nimiq:logos-btc-mono", name: "BTC Integration", year: 2021, month: 4 }, { icon: "i-nimiq:logos-usdc-mono", name: "USDC Integration", year: 2021, month: 4, row: 2 }, { icon: "i-nimiq:duotone-btc-nim-swap", name: "Crypto swaps", year: 2022, month: 6 }, { icon: "i-nimiq:duotone-usdc-nim-swap", name: "Crypto/fiat swaps", year: 2022, month: 12, row: 2 }, { icon: "i-nimiq:leaf-3", name: "Pre-Staking", year: 2024, month: 5 }, { icon: "i-nimiq:leaf-2", name: "Staking", year: 2024, month: 11 }, { icon: "i-nimiq:logos-usdt-mono", name: "Stablecoins Cashlink", year: 2025, month: 12 }] }, { name: "Merchants App", items: [[{ icon: "i-nimiq:logos-nimiq-horizontal-mono w-68 h-16", name: "Checkout", year: 2020, month: 2 }], [{ icon: "i-nimiq:logos-cpl-horizontal-mono w-130", name: "1.0", year: 2020, month: 12 }, { icon: "i-nimiq:logos-cpl-horizontal-mono  w-130", name: "2.0", year: 2022, month: 1, milestone: "Accessibility for Merchants" }]] }, { name: "Exchange Service", nestedBlocksClasses: "first:z-1 last:ml--12 last:rounded-0 last:w-[calc(100%+12px)] last:pl-32 last:shadow-none last:bg-gold-500 last:text-gold-1100 last:font-semibold", items: [[{ icon: "i-nimiq:logos-super-simple-swap-mono", name: "SuperSimpleSwap", year: 2020, month: 11 }], [{ name: "Paused for regulatory reasons", year: 2023, month: 4 }]] }, { name: "Payment App", items: [{ icon: "i-nimiq:logos-nimiq-pay-horizontal-mono w-42 text-18", year: 2024, month: 4 }, { name: "BTC-Lightning Support", year: 2024, month: 7 }, { name: "Mini-App Framework", year: 2025, month: 12 }] }, { name: "MultiSig App", items: [{ name: "NIM Support", year: 2025, month: 12 }] }, { name: "Cryptopayment.link", items: [{ name: "First Version", year: 2020, month: 2 }, { name: "Improved Version Released", year: 2022, month: 6 }, { icon: "i-nimiq:logos-usdc-mono", name: "USDC Support", year: 2023, month: 7 }, { icon: "i-nimiq:logos-usdt-mono", name: "USDT Support", year: 2025, month: 12 }] }] }, { layerClasses: "bg-orange/10 pl-146", text: "text-orange-1100", icon: "i-nimiq:duotone-group", name: "Adoption Layer", blocksClasses: "bg-orange text-white", blocks: [{ name: "Adoption campaigns", items: [{ icon: "i-nimiq:logos-cryptocity-horizontal-mono w-68 text-23", withBg: true, year: 2022, month: 6 }, { icon: "i-nimiq:landmark", name: "Criptociudad San Jose (Costa Rica)", year: 2023, month: 2 }, { icon: "i-nimiq:landmark", name: "Kryptostadt Mannheim (Germany)", year: 2023, month: 6, row: 2 }, { icon: "i-nimiq:landmark", name: "Criptocity Toronto (Canada)", year: 2024, month: 10 }, { icon: "i-nimiq:landmark", row: 2, name: "Criptocity Gambia (Africa)", year: 2024, month: 11 }, { icon: "i-nimiq:tag-cash", row: 3, name: "Cryptocity Loyalty Points", year: 2024, month: 1 }] }, { name: "Acceptance registry", items: [{ year: 2023, month: 2, icon: "i-nimiq:logos-crypto-map-horizontal-mono" }] }] }], it = { key: 0, flex: "~ items-center gap-8", ring: "1.5 blue/40", "px-12": "", "py-4": "", "rounded-full": "", "bg-neutral-300": "", "bottom-80": "", "right-32": "", fixed: "", "z-100": "", "f-text-xs": "" }, st = { key: 1 }, rt = { class: "nq-no-color", "mx-0": "", "px-0": "", "bg-neutral-100": "", block: "", "children:max-w-none": "" }, St = M({ __name: "roadmap", setup(g) {
  const l = _e().public.environment.isProduction === false, u = B(l), e = l ? J("roadmap-milestones-json", JSON.stringify(Z, null, 2)) : B(JSON.stringify(Z, null, 2)), p = l ? J("roadmap-layer-0-json", JSON.stringify(O[0], null, 2)) : B(JSON.stringify(O[0], null, 2)), v = l ? J("roadmap-layer-1-json", JSON.stringify(O[1], null, 2)) : B(JSON.stringify(O[1], null, 2)), m = l ? J("roadmap-layer-2-json", JSON.stringify(O[2], null, 2)) : B(JSON.stringify(O[2], null, 2)), o = _(() => JSON.parse(e.value)), r = _(() => [JSON.parse(p.value), JSON.parse(v.value), JSON.parse(m.value)]), a = _(() => [{ type: "heading1", text: "Roadmap", spans: [] }]), n = _(() => [{ type: "paragraph", text: "Browse the project's past and future.", spans: [], direction: "ltr" }]);
  ke({ title: "Roadmap", meta: [{ name: "description", content: "Browse the project's past and future." }, { property: "og:title", content: "Roadmap" }, { property: "og:description", content: "Browse the project's past and future." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Roadmap" }, { name: "twitter:description", content: "Browse the project's past and future." }] }), Te({ title: "Roadmap", subline: "Browse the project's past and future.", type: "page" });
  const c = { slice_type: "newsletter_subscription", slice_label: null, id: "roadmap-newsletter", version: "v1", variation: "default", items: [], primary: { backgroundColor: "white", bgColor: "white", placeholder: "Enter email address...", cta: [{ type: "heading2", text: "Stay up to date", spans: [] }] } };
  return (d, f) => {
    const C = he, S = Pe, U = Le, w = Oe, F = Ae, V = at, j = Se;
    return s(), k(j, { "footer-bg-color": "white" }, { default: y(() => [b(C, { primary: { headline: t(a), subline: t(n), bgColor: "grey" } }, null, 8, ["primary"]), l ? (s(), h("label", it, [D(i("input", { "onUpdate:modelValue": f[0] || (f[0] = (x) => E(u) ? u.value = x : null), type: "checkbox", "nq-switch": "" }, null, 512), [[Ce, t(u)]]), f[5] || (f[5] = i("span", { text: "neutral-800", "select-none": "", "nq-label": "" }, " Hide editor ", -1))])) : R("", true), t(u) ? (s(), h("section", st, [b(F, { "w-full": "", "default-value": t(r)[0].name }, { default: y(() => [b(U, { "p-2": "", "rounded-full": "", "bg-neutral-300": "", ring: "1.5 neutral/5", flex: "~ items-center gap-16" }, { default: y(() => [b(S, { value: "milestones", bg: "neutral-300 data-active:neutral", text: "neutral-900 data-active:neutral-0 f-xs", "px-12": "", "py-8": "", "rounded-full": "", "nq-label": "" }, { default: y(() => f[6] || (f[6] = [K(" Milestones ")])), _: 1, __: [6] }), (s(true), h(I, null, T(t(r), (x) => (s(), k(S, { key: x.name, value: x.name, bg: "neutral-300 data-active:neutral", text: "neutral-900 data-active:neutral-0 f-xs", "px-12": "", "py-8": "", "rounded-full": "", "nq-label": "" }, { default: y(() => [K(N(x.name), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }), b(w, { "nq-mt-12": "", value: "milestones" }, { default: y(() => [D(i("textarea", { "onUpdate:modelValue": f[1] || (f[1] = (x) => E(e) ? e.value = x : null), "font-mono": "", "bg-neutral-100": "", "min-h-90vh": "", "w-full": "", "f-text-sm": "", "nq-input-box": "" }, null, 512), [[z, t(e)]])]), _: 1 }), b(w, { "nq-mt-12": "", value: "Network Layer" }, { default: y(() => [D(i("textarea", { "onUpdate:modelValue": f[2] || (f[2] = (x) => E(p) ? p.value = x : null), "font-mono": "", "bg-neutral-100": "", "min-h-90vh": "", "w-full": "", "f-text-sm": "", "nq-input-box": "" }, null, 512), [[z, t(p)]])]), _: 1 }), b(w, { "nq-mt-12": "", value: "App Layer" }, { default: y(() => [D(i("textarea", { "onUpdate:modelValue": f[3] || (f[3] = (x) => E(v) ? v.value = x : null), "font-mono": "", "bg-neutral-100": "", "min-h-90vh": "", "w-full": "", "f-text-sm": "", "nq-input-box": "" }, null, 512), [[z, t(v)]])]), _: 1 }), b(w, { "nq-mt-12": "", value: "Adoption Layer" }, { default: y(() => [D(i("textarea", { "onUpdate:modelValue": f[4] || (f[4] = (x) => E(m) ? m.value = x : null), "font-mono": "", "bg-neutral-100": "", "min-h-90vh": "", "w-full": "", "f-text-sm": "", "nq-input-box": "" }, null, 512), [[z, t(m)]])]), _: 1 })]), _: 1 }, 8, ["default-value"])])) : R("", true), i("section", rt, [b(V, { milestones: t(o), layers: t(r), "first-year": t(re), "first-month": t(le) }, null, 8, ["milestones", "layers", "first-year", "first-month"])]), b(Ie, { slice: c, index: 0, slices: [], context: void 0 })]), _: 1 });
  };
} });
export {
  St as default
};
