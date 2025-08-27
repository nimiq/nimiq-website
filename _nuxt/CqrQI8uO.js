var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as Pr } from "./CuGdq-3R.js";
import { _ as Zi } from "./Cl6nVLLe.js";
import { _ as Xi } from "./vffVQ_uU.js";
import { _ as uo } from "./CiDt83jx.js";
import { d as $, a as P, x as ae, e as B, o as k, s as X, j as G, r as et, F as Ae, S as le, f as A, g as D, h as p, R as ye, Q as W, bn as zn, $ as Ge, X as ze, v as I, W as Lt, bp as Kt, l as ie, K as ke, b6 as Qi, B as re, ag as Nr, aJ as Xe, Y as Lr, a2 as ft, ae as tt, b4 as Br, b2 as Ir, C as Re, a3 as Or, b5 as Ji, T as cn, a4 as $r, a0 as co, a6 as dn, bq as Ur, br as Hr, bs as Fr, p as nt, t as de, U as ea, aF as Vr, q as _t, a9 as jt, a1 as ta, bt as Yr, Z as Zt, bu as Gr, k as w, ab as hn, n as ve, bv as Yo, D as Ln, m as zr, z as Kr, b as Wr, az as na, bw as Bn, an as wt, am as fn, ac as qr, bx as jr, ay as Zr, au as oa, aH as ia, aI as Xr, av as aa, aM as Xt, ah as Qr, aW as Vt, ak as Jr, by as es, w as ts } from "./BdODHn_3.js";
import { _ as ra } from "./DFn-vR6U.js";
import { _ as ns } from "./BixY624e.js";
import { _ as Ke } from "./DlAUqK2U.js";
import { u as os } from "./T5R3qLKT.js";
import { g as is, a as as } from "./DGIQ2ECZ.js";
import { _ as rs, a as ss } from "./CFQl3Hng.js";
import { u as ls, a as us, b as sa, c as cs, _ as ds, d as hs } from "./5k-pAZBM.js";
import { _ as fs } from "./JnJ5PXka.js";
import { _ as ps } from "./Cw8ojyOd.js";
import { m as ms, n as gs, o as Go, i as vs, c as zo, d as _s, p as ys } from "./5qd8EHar.js";
import { u as yt } from "./Bo9A3gK3.js";
import { b as bs, _ as xs, a as ws } from "./B0fHAcDH.js";
import { a as bt, _ as Ss, u as ho } from "./CNyQ-E8Y.js";
import { u as fo } from "./DPSHcICq.js";
import { u as ks } from "./DKBBbajR.js";
import { a as Ts, _ as Cs } from "./jF-tUr_L.js";
import { b as po, a as la, i as pn, c as Ms, C as Ds, d as Rs, e as As, g as Es, f as ne, h as ct, j as St, k as Ko, l as Ps, m as Ns, S as Ls, n as In, o as ua, p as Bt, q as Se, r as ca, s as Wo, t as mn, u as Qe, v as Ne, w as Ie, x as da, y as Et, z as Bs, A as Me, F as ha, T as Is, P as K, B as Os, D as $s, V as qo, E as Us, G as Hs, H as Fs, I as lt, J as jo, K as Vs, L as Ys, M as Gs, N as zs, O as Ks, Q as Ot, R as mo, U as fa, W as pa, X as Ws, Y as qs, Z as gn, _ as js } from "./B-Y4bdgU.js";
import { _ as Zs } from "./BTvrVf5C.js";
import { g as go } from "./CpsPJSKh.js";
import { p as Zo, f as Xo, a as vo, b as Qo, c as Xs } from "./CZEBxxT2.js";
import { T as Qs } from "./D0DW2WUk.js";
import { z as Js, b as el } from "./BTeZegdw.js";
import { _ as tl } from "./w5XGsmpu.js";
import { u as nl } from "./Dbkl2QtV.js";
import "./UqZ8O5YD.js";
import "./CqkleIqs.js";
import "./DaSHHW2Q.js";
function ol() {
  return { ALT: "Alt", ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp", BACKSPACE: "Backspace", CAPS_LOCK: "CapsLock", CONTROL: "Control", DELETE: "Delete", END: "End", ENTER: "Enter", ESCAPE: "Escape", F1: "F1", F10: "F10", F11: "F11", F12: "F12", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", HOME: "Home", META: "Meta", PAGE_DOWN: "PageDown", PAGE_UP: "PageUp", SHIFT: "Shift", SPACE: " ", TAB: "Tab", CTRL: "Control", ASTERISK: "*", SPACE_CODE: "Space" };
}
const il = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function al(e8, t) {
  return t !== "rtl" ? e8 : e8 === "ArrowLeft" ? "ArrowRight" : e8 === "ArrowRight" ? "ArrowLeft" : e8;
}
function rl(e8, t, n) {
  const o = al(e8.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return il[o];
}
const Jo = $({ inheritAttrs: false, __name: "VisuallyHiddenInputBubble", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, { primitiveElement: n, currentElement: o } = bt(), i = P(() => t.checked ?? t.value);
  return ae(i, (a, r) => {
    if (!o.value) return;
    const s = o.value, l = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(l, "value").set;
    if (h && a !== r) {
      const d = new Event("input", { bubbles: true }), c = new Event("change", { bubbles: true });
      h.call(s, a), s.dispatchEvent(d), s.dispatchEvent(c);
    }
  }), (a, r) => (k(), B(Ss, X({ ref_key: "primitiveElement", ref: n }, { ...t, ...a.$attrs }, { as: "input" }), null, 16));
} }), sl = $({ inheritAttrs: false, __name: "VisuallyHiddenInput", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, n = P(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = P(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((i, a) => typeof i == "object" ? Object.entries(i).map(([r, s]) => ({ name: `[${t.name}][${a}][${r}]`, value: s })) : { name: `[${t.name}][${a}]`, value: i }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([i, a]) => ({ name: `[${t.name}][${i}]`, value: a })) : []);
  return (i, a) => n.value ? (k(), B(Jo, X({ key: i.name }, { ...t, ...i.$attrs }, { name: i.name, value: i.value }), null, 16, ["name", "value"])) : (k(true), G(Ae, { key: 1 }, et(o.value, (r) => (k(), B(Jo, X({ key: r.name, ref_for: true }, { ...t, ...i.$attrs }, { name: r.name, value: r.value }), null, 16, ["name", "value"]))), 128));
} }), ll = $({ __name: "ComboboxAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { forwardRef: t } = le();
  return (n, o) => (k(), B(p(bs), { "as-child": "", reference: n.reference }, { default: A(() => [D(p(ye), X({ ref: p(t), "as-child": n.asChild, as: n.as }, n.$attrs), { default: A(() => [W(n.$slots, "default")]), _: 3 }, 16, ["as-child", "as"])]), _: 3 }, 8, ["reference"]));
} });
function ul(e8) {
  const t = P(() => p(e8)), n = P(() => new Intl.Collator("en", { usage: "search", ...t.value }));
  return { startsWith: (r, s) => s.length === 0 ? true : (r = r.normalize("NFC"), s = s.normalize("NFC"), n.value.compare(r.slice(0, s.length), s) === 0), endsWith: (r, s) => s.length === 0 ? true : (r = r.normalize("NFC"), s = s.normalize("NFC"), n.value.compare(r.slice(-s.length), s) === 0), contains: (r, s) => {
    if (s.length === 0) return true;
    r = r.normalize("NFC"), s = s.normalize("NFC");
    let l = 0;
    const u = s.length;
    for (; l + u <= r.length; l++) {
      const h = r.slice(l, l + u);
      if (n.value.compare(s, h) === 0) return true;
    }
    return false;
  } };
}
function cl(e8, t, n) {
  return e8 === void 0 ? false : Array.isArray(e8) ? e8.some((o) => Pt(o, t, n)) : Pt(e8, t, n);
}
function Pt(e8, t, n) {
  return e8 === void 0 || t === void 0 ? false : typeof e8 == "string" ? e8 === t : typeof n == "function" ? n(e8, t) : typeof n == "string" ? (e8 == null ? void 0 : e8[n]) === (t == null ? void 0 : t[n]) : zn(e8, t);
}
function dl(e8, t, n) {
  const o = e8.findIndex((s) => zn(s, t)), i = e8.findIndex((s) => zn(s, n));
  if (o === -1 || i === -1) return [];
  const [a, r] = [o, i].sort((s, l) => s - l);
  return e8.slice(a, r + 1);
}
const [vn, hl] = Ge("ListboxRoot"), fl = $({ __name: "ListboxRoot", props: { modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, orientation: { default: "vertical" }, dir: {}, disabled: { type: Boolean }, selectionBehavior: { default: "toggle" }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(e8, { expose: t, emit: n }) {
  const o = e8, i = n, { multiple: a, highlightOnHover: r, orientation: s, disabled: l, selectionBehavior: u, dir: h } = ze(o), { getItems: d } = ho({ isProvider: true }), { handleTypeaheadSearch: c } = ls(), { primitiveElement: f, currentElement: m } = bt(), g = ol(), y = fo(h), v = us(m), _ = I(), b = I(false), T = I(true), C = Lt(o, "modelValue", i, { defaultValue: o.defaultValue ?? (a.value ? [] : void 0), passive: o.modelValue === void 0, deep: true });
  function M(R) {
    if (b.value = true, o.multiple) {
      const H = Array.isArray(C.value) ? [...C.value] : [], x = H.findIndex((N) => Pt(N, R, o.by));
      o.selectionBehavior === "toggle" ? (x === -1 ? H.push(R) : H.splice(x, 1), C.value = H) : (C.value = [R], _.value = R);
    } else o.selectionBehavior === "toggle" && Pt(C.value, R, o.by) ? C.value = void 0 : C.value = R;
    setTimeout(() => {
      b.value = false;
    }, 1);
  }
  const E = I(null), j = I(null), V = I(false), J = I(false), L = Kt(), O = Kt(), z = Kt();
  function U() {
    return d().map((R) => R.ref).filter((R) => R.dataset.disabled !== "");
  }
  function Y(R, H = true) {
    if (!R) return;
    E.value = R, T.value && E.value.focus(), H && E.value.scrollIntoView({ block: "nearest" });
    const x = d().find((N) => N.ref === R);
    i("highlight", x);
  }
  function be(R) {
    if (V.value) z.trigger(R);
    else {
      const H = d().find((x) => Pt(x.value, R, o.by));
      H && (E.value = H.ref, Y(H.ref));
    }
  }
  function Te(R) {
    E.value && E.value.isConnected && (R.preventDefault(), R.stopPropagation(), J.value || E.value.click());
  }
  function Ce(R) {
    if (T.value) {
      if (b.value = true, V.value) O.trigger(R);
      else {
        const H = R.altKey || R.ctrlKey || R.metaKey;
        if (H && R.key === "a" && a.value) {
          const x = d(), N = x.map((F) => F.value);
          C.value = [...N], R.preventDefault(), Y(x[x.length - 1].ref);
        } else if (!H) {
          const x = c(R.key, d());
          x && Y(x);
        }
      }
      setTimeout(() => {
        b.value = false;
      }, 1);
    }
  }
  function ce() {
    J.value = true;
  }
  function We() {
    requestAnimationFrame(() => {
      J.value = false;
    });
  }
  function Pe() {
    ke(() => {
      const R = new KeyboardEvent("keydown", { key: "PageUp" });
      st(R);
    });
  }
  function Be(R) {
    const H = E.value;
    (H == null ? void 0 : H.isConnected) && (j.value = H), E.value = null, i("leave", R);
  }
  function xt(R) {
    var _a2, _b;
    const H = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if ((_a2 = R.currentTarget) == null ? void 0 : _a2.dispatchEvent(H), i("entryFocus", H), !H.defaultPrevented) if (j.value) Y(j.value);
    else {
      const x = (_b = U()) == null ? void 0 : _b[0];
      Y(x);
    }
  }
  function st(R) {
    const H = rl(R, s.value, y.value);
    if (!H) return;
    let x = U();
    if (E.value) {
      if (H === "last") x.reverse();
      else if (H === "prev" || H === "next") {
        H === "prev" && x.reverse();
        const N = x.indexOf(E.value);
        x = x.slice(N + 1);
      }
      fe(R, x[0]);
    }
    if (x.length) {
      const N = !E.value && H === "prev" ? x.length - 1 : 0;
      Y(x[N]);
    }
    if (V.value) return O.trigger(R);
  }
  function fe(R, H) {
    var _a2;
    if (!(V.value || o.selectionBehavior !== "replace" || !a.value || !Array.isArray(C.value) || (R.altKey || R.ctrlKey || R.metaKey) && !R.shiftKey) && R.shiftKey) {
      const N = d().filter((oe) => oe.ref.dataset.disabled !== "");
      let F = (_a2 = N.find((oe) => oe.ref === H)) == null ? void 0 : _a2.value;
      if (R.key === g.END ? F = N[N.length - 1].value : R.key === g.HOME && (F = N[0].value), !F || !_.value) return;
      const S = dl(N.map((oe) => oe.value), _.value, F);
      C.value = S;
    }
  }
  async function ge(R) {
    if (await ke(), V.value) L.trigger(R);
    else {
      const H = U(), x = H.find((N) => N.dataset.state === "checked");
      x ? Y(x) : H.length && Y(H[0]);
    }
  }
  return ae(C, () => {
    b.value || ke(() => {
      ge();
    });
  }, { immediate: true, deep: true }), t({ highlightedElement: E, highlightItem: be, highlightFirstItem: Pe, highlightSelected: ge, getItems: d }), hl({ modelValue: C, onValueChange: M, multiple: a, orientation: s, dir: y, disabled: l, highlightOnHover: r, highlightedElement: E, isVirtual: V, virtualFocusHook: L, virtualKeydownHook: O, virtualHighlightHook: z, by: o.by, firstValue: _, selectionBehavior: u, focusable: T, onLeave: Be, onEnter: xt, changeHighlight: Y, onKeydownEnter: Te, onKeydownNavigation: st, onKeydownTypeAhead: Ce, onCompositionStart: ce, onCompositionEnd: We, highlightFirstItem: Pe }), (R, H) => (k(), B(p(ye), { ref_key: "primitiveElement", ref: f, as: R.as, "as-child": R.asChild, dir: p(y), "data-disabled": p(l) ? "" : void 0, onPointerleave: Be, onFocusout: H[0] || (H[0] = async (x) => {
    const N = x.relatedTarget || x.target;
    await ke(), E.value && p(m) && !p(m).contains(N) && Be(x);
  }) }, { default: A(() => [W(R.$slots, "default", { modelValue: p(C) }), p(v) && R.name ? (k(), B(p(sl), { key: 0, name: R.name, value: p(C), disabled: p(l), required: R.required }, null, 8, ["name", "value", "disabled", "required"])) : ie("", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), [ot, pl] = Ge("ComboboxRoot"), ml = $({ __name: "ComboboxRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, resetSearchTermOnBlur: { type: Boolean, default: true }, resetSearchTermOnSelect: { type: Boolean, default: true }, ignoreFilter: { type: Boolean }, modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, dir: {}, disabled: { type: Boolean }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "update:open"], setup(e8, { expose: t, emit: n }) {
  var _a2, _b, _c2;
  const o = e8, i = n, { primitiveElement: a, currentElement: r } = bt(), { multiple: s, disabled: l, ignoreFilter: u, resetSearchTermOnSelect: h, dir: d } = ze(o), c = fo(d), f = Lt(o, "modelValue", i, { defaultValue: o.defaultValue ?? (s.value ? [] : void 0), passive: o.modelValue === void 0, deep: true }), m = Lt(o, "open", i, { defaultValue: o.defaultOpen, passive: o.open === void 0 });
  async function g(O) {
    var _a3, _b2;
    m.value = O, V.search = "", O ? (await ke(), (_a3 = a.value) == null ? void 0 : _a3.highlightSelected(), v.value = true) : v.value = false, (_b2 = b.value) == null ? void 0 : _b2.focus(), setTimeout(() => {
      !O && o.resetSearchTermOnBlur && y.trigger();
    }, 1);
  }
  const y = Kt(), v = I(false), _ = I(false), b = I(), T = I(), C = P(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.highlightedElement) ?? void 0;
  }), M = I(/* @__PURE__ */ new Map()), E = I(/* @__PURE__ */ new Map()), { contains: j } = ul({ sensitivity: "base" }), V = Qi({ search: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } });
  function J() {
    if (!V.search || o.ignoreFilter || _.value) {
      V.filtered.count = M.value.size;
      return;
    }
    V.filtered.groups = /* @__PURE__ */ new Set();
    let O = 0;
    for (const [z, U] of M.value) {
      const Y = j(U, V.search);
      V.filtered.items.set(z, Y ? 1 : 0), Y && O++;
    }
    for (const [z, U] of E.value) for (const Y of U) if (V.filtered.items.get(Y) > 0) {
      V.filtered.groups.add(z);
      break;
    }
    V.filtered.count = O;
  }
  ae([() => V.search, () => M.value.size], () => {
    J();
  }, { immediate: true }), ae(() => m.value, () => {
    ke(() => {
      m.value && J();
    });
  }, { flush: "post" });
  const L = Nr();
  return re(() => {
    var _a3, _b2, _c3;
    (L == null ? void 0 : L.exposed) && (L.exposed.highlightItem = (_a3 = a.value) == null ? void 0 : _a3.highlightItem, L.exposed.highlightFirstItem = (_b2 = a.value) == null ? void 0 : _b2.highlightFirstItem, L.exposed.highlightSelected = (_c3 = a.value) == null ? void 0 : _c3.highlightSelected);
  }), t({ filtered: P(() => V.filtered), highlightedElement: C, highlightItem: (_a2 = a.value) == null ? void 0 : _a2.highlightItem, highlightFirstItem: (_b = a.value) == null ? void 0 : _b.highlightFirstItem, highlightSelected: (_c2 = a.value) == null ? void 0 : _c2.highlightSelected }), pl({ modelValue: f, multiple: s, disabled: l, open: m, onOpenChange: g, contentId: "", isUserInputted: v, isVirtual: _, inputElement: b, highlightedElement: C, onInputElementChange: (O) => b.value = O, triggerElement: T, onTriggerElementChange: (O) => T.value = O, parentElement: r, resetSearchTermOnSelect: h, onResetSearchTerm: y.on, allItems: M, allGroups: E, filterState: V, ignoreFilter: u }), (O, z) => (k(), B(p(xs), null, { default: A(() => [D(p(fl), X({ ref_key: "primitiveElement", ref: a }, O.$attrs, { modelValue: p(f), "onUpdate:modelValue": z[0] || (z[0] = (U) => Xe(f) ? f.value = U : null), style: { pointerEvents: p(m) ? "auto" : void 0 }, as: O.as, "as-child": O.asChild, dir: p(c), multiple: p(s), name: O.name, required: O.required, disabled: p(l), "highlight-on-hover": true, by: o.by, onHighlight: z[1] || (z[1] = (U) => i("highlight", U)) }), { default: A(() => [W(O.$slots, "default", { open: p(m), modelValue: p(f) })]), _: 3 }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])]), _: 3 }));
} }), gl = $({ __name: "ListboxContent", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { CollectionSlot: t } = ho(), n = vn(), o = Lr(false, 10);
  return (i, a) => (k(), B(p(t), null, { default: A(() => [D(p(ye), { role: "listbox", as: i.as, "as-child": i.asChild, tabindex: p(n).focusable.value ? p(n).highlightedElement.value ? "-1" : "0" : void 0, "aria-orientation": p(n).orientation.value, "aria-multiselectable": !!p(n).multiple.value, "data-orientation": p(n).orientation.value, onMousedown: a[0] || (a[0] = tt((r) => o.value = true, ["left"])), onFocus: a[1] || (a[1] = (r) => {
    p(o) || p(n).onEnter(r);
  }), onKeydown: [a[2] || (a[2] = ft(tt((r) => {
    p(n).focusable.value && p(n).onKeydownNavigation(r);
  }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])), ft(p(n).onKeydownEnter, ["enter"]), p(n).onKeydownTypeAhead] }, { default: A(() => [W(i.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), [vl, _l] = Ge("ComboboxContent"), yl = $({ __name: "ComboboxContentImpl", props: { position: { default: "inline" }, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const n = e8, o = t, { position: i } = ze(n), a = ot(), { forwardRef: r, currentElement: s } = le();
  ks(n.bodyLock), Br(a.parentElement);
  const l = P(() => n.position === "popper" ? n : {}), u = Ir(l.value), h = { boxSizing: "border-box", "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-combobox-content-available-width": "var(--reka-popper-available-width)", "--reka-combobox-content-available-height": "var(--reka-popper-available-height)", "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)", "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)" };
  _l({ position: i });
  const d = I(false);
  return re(() => {
    a.inputElement.value && (d.value = s.value.contains(a.inputElement.value), d.value && a.inputElement.value.focus());
  }), Re(() => {
    var _a2;
    d.value && ((_a2 = a.triggerElement.value) == null ? void 0 : _a2.focus());
  }), (c, f) => (k(), B(p(gl), { "as-child": "" }, { default: A(() => [D(p(Or), { "as-child": "", "disable-outside-pointer-events": c.disableOutsidePointerEvents, onDismiss: f[0] || (f[0] = (m) => p(a).onOpenChange(false)), onFocusOutside: f[1] || (f[1] = (m) => {
    var _a2;
    ((_a2 = p(a).parentElement.value) == null ? void 0 : _a2.contains(m.target)) && m.preventDefault(), o("focusOutside", m);
  }), onInteractOutside: f[2] || (f[2] = (m) => o("interactOutside", m)), onEscapeKeyDown: f[3] || (f[3] = (m) => o("escapeKeyDown", m)), onPointerDownOutside: f[4] || (f[4] = (m) => {
    var _a2;
    ((_a2 = p(a).parentElement.value) == null ? void 0 : _a2.contains(m.target)) && m.preventDefault(), o("pointerDownOutside", m);
  }) }, { default: A(() => [(k(), B(Ji(p(i) === "popper" ? p(ws) : p(ye)), X({ ...c.$attrs, ...p(u) }, { id: p(a).contentId, ref: p(r), "data-state": p(a).open.value ? "open" : "closed", style: { display: "flex", flexDirection: "column", outline: "none", ...p(i) === "popper" ? h : {} } }), { default: A(() => [W(c.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "style"]))]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }));
} }), bl = $({ __name: "ComboboxArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(e8) {
  const t = e8, n = ot(), o = vl();
  return le(), (i, a) => p(n).open.value && p(o).position.value === "popper" ? (k(), B(p(Ts), cn(X({ key: 0 }, t)), { default: A(() => [W(i.$slots, "default")]), _: 3 }, 16)) : ie("", true);
} }), xl = $({ __name: "ComboboxContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const i = $r(e8, t), { forwardRef: a } = le(), r = ot();
  return r.contentId || (r.contentId = co(void 0, "reka-combobox-content")), (s, l) => (k(), B(p(dn), { present: s.forceMount || p(r).open.value }, { default: A(() => [D(yl, X({ ...p(i), ...s.$attrs }, { ref: p(a) }), { default: A(() => [W(s.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), [wl, Fp] = Ge("ComboboxGroup"), Sl = $({ __name: "ListboxFilter", props: { modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, i = Lt(n, "modelValue", t, { defaultValue: "", passive: n.modelValue === void 0 }), a = vn(), { primitiveElement: r, currentElement: s } = bt(), l = P(() => n.disabled || a.disabled.value || false), u = I();
  return Ur(() => {
    var _a2;
    return u.value = (_a2 = a.highlightedElement.value) == null ? void 0 : _a2.id;
  }), re(() => {
    a.focusable.value = false, setTimeout(() => {
      var _a2;
      n.autoFocus && ((_a2 = s.value) == null ? void 0 : _a2.focus());
    }, 1);
  }), Re(() => {
    a.focusable.value = true;
  }), (h, d) => (k(), B(p(ye), { ref_key: "primitiveElement", ref: r, as: h.as, "as-child": h.asChild, value: p(i), disabled: l.value ? "" : void 0, "data-disabled": l.value ? "" : void 0, "aria-disabled": l.value ?? void 0, "aria-activedescendant": u.value, type: "text", onKeydown: [ft(tt(p(a).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), ft(p(a).onKeydownEnter, ["enter"])], onInput: d[0] || (d[0] = (c) => {
    i.value = c.target.value, p(a).highlightFirstItem(c);
  }), onCompositionstart: p(a).onCompositionStart, onCompositionend: p(a).onCompositionEnd }, { default: A(() => [W(h.$slots, "default", { modelValue: p(i) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
} }), kl = $({ __name: "ComboboxInput", props: { displayValue: {}, modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = ot(), a = vn(), { primitiveElement: r, currentElement: s } = bt(), l = Lt(n, "modelValue", o, { passive: n.modelValue === void 0 });
  re(() => {
    s.value && i.onInputElementChange(s.value);
  });
  function u(c) {
    i.open.value || i.onOpenChange(true);
  }
  function h(c) {
    const f = c.target;
    i.open.value ? i.filterState.search = f.value : (i.onOpenChange(true), ke(() => {
      f.value && (i.filterState.search = f.value, a.highlightFirstItem(c));
    }));
  }
  function d() {
    const c = i.modelValue.value;
    n.displayValue ? l.value = n.displayValue(c) : !i.multiple.value && c && !Array.isArray(c) && typeof c != "object" ? l.value = c.toString() : l.value = "", ke(() => {
      l.value = l.value;
    });
  }
  return i.onResetSearchTerm(() => {
    d();
  }), ae(i.modelValue, async () => {
    !i.isUserInputted.value && i.resetSearchTermOnSelect.value && d();
  }, { immediate: true, deep: true }), ae(() => n.modelValue, () => {
    n.modelValue !== void 0 && (i.filterState.search = n.modelValue);
  }), (c, f) => (k(), B(p(Sl), { ref_key: "primitiveElement", ref: r, modelValue: p(l), "onUpdate:modelValue": f[0] || (f[0] = (m) => Xe(l) ? l.value = m : null), as: c.as, "as-child": c.asChild, "auto-focus": c.autoFocus, "aria-expanded": p(i).open.value, "aria-controls": p(i).contentId, "aria-autocomplete": "list", role: "combobox", autocomplete: "false", onInput: h, onKeydown: ft(tt(u, ["prevent"]), ["down", "up"]) }, { default: A(() => [W(c.$slots, "default")]), _: 3 }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
} }), Tl = "listbox.select", [Vp, Cl] = Ge("ListboxItem"), Ml = $({ __name: "ListboxItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = co(void 0, "reka-listbox-item"), { CollectionItem: a } = ho(), { forwardRef: r, currentElement: s } = le(), l = vn(), u = P(() => s.value === l.highlightedElement.value), h = P(() => cl(l.modelValue.value, n.value, l.by)), d = P(() => l.disabled.value || n.disabled);
  async function c(m) {
    o("select", m), !(m == null ? void 0 : m.defaultPrevented) && !d.value && m && (l.onValueChange(n.value), l.changeHighlight(s.value));
  }
  function f(m) {
    const g = { originalEvent: m, value: n.value };
    Fr(Tl, c, g);
  }
  return Cl({ isSelected: h }), (m, g) => (k(), B(p(a), { value: m.value }, { default: A(() => [Hr([u.value, h.value], () => D(p(ye), X({ id: p(i) }, m.$attrs, { ref: p(r), role: "option", tabindex: p(l).focusable.value ? u.value ? "0" : "-1" : -1, "aria-selected": h.value, as: m.as, "as-child": m.asChild, disabled: d.value ? "" : void 0, "data-disabled": d.value ? "" : void 0, "data-highlighted": u.value ? "" : void 0, "data-state": h.value ? "checked" : "unchecked", onClick: f, onKeydown: ft(tt(f, ["prevent"]), ["space"]), onPointermove: g[0] || (g[0] = (y) => {
    p(l).highlightedElement.value !== p(s) && (p(l).highlightOnHover.value ? p(l).changeHighlight(p(s), false) : p(l).focusable.value || p(l).changeHighlight(p(s), false));
  }) }), { default: A(() => [W(m.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), g, 1)]), _: 3 }, 8, ["value"]));
} }), Dl = $({ __name: "ComboboxItem", props: { textValue: {}, value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = co(void 0, "reka-combobox-item"), a = ot(), r = wl(null), { primitiveElement: s, currentElement: l } = bt();
  if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
  const u = P(() => {
    if (a.isVirtual.value || a.ignoreFilter.value || !a.filterState.search) return true;
    {
      const h = a.filterState.filtered.items.get(i);
      return h === void 0 ? true : h > 0;
    }
  });
  return re(() => {
    var _a2;
    a.allItems.value.set(i, n.textValue || l.value.textContent || l.value.innerText);
    const h = r == null ? void 0 : r.id;
    h && (a.allGroups.value.has(h) ? (_a2 = a.allGroups.value.get(h)) == null ? void 0 : _a2.add(i) : a.allGroups.value.set(h, /* @__PURE__ */ new Set([i])));
  }), Re(() => {
    a.allItems.value.delete(i);
  }), (h, d) => u.value ? (k(), B(p(Ml), X({ key: 0 }, n, { id: p(i), ref_key: "primitiveElement", ref: s, disabled: p(a).disabled.value || h.disabled, onSelect: d[0] || (d[0] = (c) => {
    o("select", c), !c.defaultPrevented && !p(a).multiple.value && !h.disabled && !p(a).disabled.value && (c.preventDefault(), p(a).onOpenChange(false), p(a).modelValue.value = n.value);
  }) }), { default: A(() => [W(h.$slots, "default", {}, () => [nt(de(h.value), 1)])]), _: 3 }, 16, ["id", "disabled"])) : ie("", true);
} }), Rl = $({ __name: "ComboboxPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(e8) {
  const t = e8;
  return (n, o) => (k(), B(p(Vr), cn(ea(t)), { default: A(() => [W(n.$slots, "default")]), _: 3 }, 16));
} }), Al = $({ __name: "ComboboxTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(e8) {
  const t = e8, { forwardRef: n, currentElement: o } = le(), i = ot(), a = P(() => t.disabled || i.disabled.value || false);
  return re(() => {
    o.value && i.onTriggerElementChange(o.value);
  }), (r, s) => (k(), B(p(ye), X(t, { ref: p(n), type: r.as === "button" ? "button" : void 0, tabindex: "-1", "aria-label": "Show popup", "aria-haspopup": "listbox", "aria-expanded": p(i).open.value, "aria-controls": p(i).contentId, "data-state": p(i).open.value ? "open" : "closed", disabled: a.value, "data-disabled": a.value ? "" : void 0, "aria-disabled": a.value ?? void 0, onClick: s[0] || (s[0] = (l) => p(i).onOpenChange(!p(i).open.value)) }), { default: A(() => [W(r.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
} }), El = $({ __name: "ComboboxViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, { forwardRef: n } = le(), { nonce: o } = ze(t), i = sa(o), a = ot();
  return (r, s) => (k(), G(Ae, null, [D(p(ye), X({ ...r.$attrs, ...t }, { ref: p(n), "data-reka-combobox-viewport": "", role: "presentation", style: { position: "relative", flex: p(a).isVirtual.value ? void 0 : 1, overflow: "auto" } }), { default: A(() => [W(r.$slots, "default")]), _: 3 }, 16, ["style"]), D(p(ye), { as: "style", nonce: p(i) }, { default: A(() => s[0] || (s[0] = [nt(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), [Le, Pl] = Ge("ScrollAreaRoot"), Nl = $({ __name: "ScrollAreaRoot", props: { type: { default: "hover" }, dir: {}, scrollHideDelay: { default: 600 }, asChild: { type: Boolean }, as: {} }, setup(e8, { expose: t }) {
  const n = e8, o = I(0), i = I(0), a = I(), r = I(), s = I(), l = I(), u = I(false), h = I(false), { type: d, dir: c, scrollHideDelay: f } = ze(n), m = fo(c);
  function g() {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.scrollTo({ top: 0 });
  }
  function y() {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.scrollTo({ top: 0, left: 0 });
  }
  t({ viewport: a, scrollTop: g, scrollTopLeft: y });
  const { forwardRef: v, currentElement: _ } = le();
  return Pl({ type: d, dir: m, scrollHideDelay: f, scrollArea: _, viewport: a, onViewportChange: (b) => {
    a.value = b || void 0;
  }, content: r, onContentChange: (b) => {
    r.value = b;
  }, scrollbarX: s, scrollbarXEnabled: u, scrollbarY: l, scrollbarYEnabled: h, onScrollbarXChange: (b) => {
    s.value = b || void 0;
  }, onScrollbarYChange: (b) => {
    l.value = b || void 0;
  }, onScrollbarXEnabledChange: (b) => {
    u.value = b;
  }, onScrollbarYEnabledChange: (b) => {
    h.value = b;
  }, onCornerWidthChange: (b) => {
    o.value = b;
  }, onCornerHeightChange: (b) => {
    i.value = b;
  } }), (b, T) => (k(), B(p(ye), { ref: p(v), "as-child": n.asChild, as: b.as, dir: p(m), style: _t({ position: "relative", "--reka-scroll-area-corner-width": `${o.value}px`, "--reka-scroll-area-corner-height": `${i.value}px` }) }, { default: A(() => [W(b.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "dir", "style"]));
} });
function ma(e8, t) {
  return (n) => {
    if (e8[0] === e8[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e8[1] - e8[0]);
    return t[0] + o * (n - e8[0]);
  };
}
function _n(e8) {
  const t = ga(e8.viewport, e8.content), n = e8.scrollbar.paddingStart + e8.scrollbar.paddingEnd, o = (e8.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function ga(e8, t) {
  const n = e8 / t;
  return Number.isNaN(n) ? 0 : n;
}
function Ll(e8, t = () => {
}) {
  let n = { left: e8.scrollLeft, top: e8.scrollTop }, o = 0;
  return function i() {
    const a = { left: e8.scrollLeft, top: e8.scrollTop }, r = n.left !== a.left, s = n.top !== a.top;
    (r || s) && t(), n = a, o = window.requestAnimationFrame(i);
  }(), () => window.cancelAnimationFrame(o);
}
function ei(e8, t, n = "ltr") {
  const o = _n(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, r = t.content - t.viewport, s = a - o, l = n === "ltr" ? [0, r] : [r * -1, 0], u = cs(e8, l[0], l[1]);
  return ma([0, r], [0, s])(u);
}
function Yt(e8) {
  return e8 ? Number.parseInt(e8, 10) : 0;
}
function Bl(e8, t, n, o = "ltr") {
  const i = _n(n), a = i / 2, r = t || a, s = i - r, l = n.scrollbar.paddingStart + r, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, h = n.content - n.viewport, d = o === "ltr" ? [0, h] : [h * -1, 0];
  return ma([l, u], d)(e8);
}
function ti(e8, t) {
  return e8 > 0 && e8 < t;
}
const va = $({ __name: "ScrollAreaScrollbarImpl", props: { isHorizontal: { type: Boolean } }, emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = Le(), a = yn(), r = bn(), { forwardRef: s, currentElement: l } = le(), u = I(""), h = I();
  function d(v) {
    var _a2, _b;
    if (h.value) {
      const _ = v.clientX - ((_a2 = h.value) == null ? void 0 : _a2.left), b = v.clientY - ((_b = h.value) == null ? void 0 : _b.top);
      o("onDragScroll", { x: _, y: b });
    }
  }
  function c(v) {
    v.button === 0 && (v.target.setPointerCapture(v.pointerId), h.value = l.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", i.viewport && (i.viewport.value.style.scrollBehavior = "auto"), d(v));
  }
  function f(v) {
    d(v);
  }
  function m(v) {
    const _ = v.target;
    _.hasPointerCapture(v.pointerId) && _.releasePointerCapture(v.pointerId), document.body.style.webkitUserSelect = u.value, i.viewport && (i.viewport.value.style.scrollBehavior = ""), h.value = void 0;
  }
  function g(v) {
    var _a2;
    const _ = v.target, b = (_a2 = l.value) == null ? void 0 : _a2.contains(_), T = a.sizes.value.content - a.sizes.value.viewport;
    b && a.handleWheelScroll(v, T);
  }
  re(() => {
    document.addEventListener("wheel", g, { passive: false });
  }), Re(() => {
    document.removeEventListener("wheel", g);
  });
  function y() {
    var _a2, _b, _c2, _d2, _e2;
    l.value && (n.isHorizontal ? a.handleSizeChange({ content: ((_a2 = i.viewport.value) == null ? void 0 : _a2.scrollWidth) ?? 0, viewport: ((_b = i.viewport.value) == null ? void 0 : _b.offsetWidth) ?? 0, scrollbar: { size: l.value.clientWidth ?? 0, paddingStart: Yt(getComputedStyle(l.value).paddingLeft), paddingEnd: Yt(getComputedStyle(l.value).paddingRight) } }) : a.handleSizeChange({ content: ((_c2 = i.viewport.value) == null ? void 0 : _c2.scrollHeight) ?? 0, viewport: ((_d2 = i.viewport.value) == null ? void 0 : _d2.offsetHeight) ?? 0, scrollbar: { size: ((_e2 = l.value) == null ? void 0 : _e2.clientHeight) ?? 0, paddingStart: Yt(getComputedStyle(l.value).paddingLeft), paddingEnd: Yt(getComputedStyle(l.value).paddingRight) } }));
  }
  return jt(l, y), jt(i.content, y), (v, _) => (k(), B(p(ye), { ref: p(s), style: { position: "absolute" }, "data-scrollbarimpl": "", as: p(r).as.value, "as-child": p(r).asChild.value, onPointerdown: c, onPointermove: f, onPointerup: m }, { default: A(() => [W(v.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} }), Il = $({ __name: "ScrollAreaScrollbarX", setup(e8) {
  const t = Le(), n = yn(), { forwardRef: o, currentElement: i } = le();
  re(() => {
    i.value && t.onScrollbarXChange(i.value);
  });
  const a = P(() => n.sizes.value);
  return (r, s) => (k(), B(va, { ref: p(o), "is-horizontal": true, "data-orientation": "horizontal", style: _t({ bottom: 0, left: p(t).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0, right: p(t).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0, "--reka-scroll-area-thumb-width": a.value ? `${p(_n)(a.value)}px` : void 0 }), onOnDragScroll: s[0] || (s[0] = (l) => p(n).onDragScroll(l.x)) }, { default: A(() => [W(r.$slots, "default")]), _: 3 }, 8, ["style"]));
} }), Ol = $({ __name: "ScrollAreaScrollbarY", setup(e8) {
  const t = Le(), n = yn(), { forwardRef: o, currentElement: i } = le();
  re(() => {
    i.value && t.onScrollbarYChange(i.value);
  });
  const a = P(() => n.sizes.value);
  return (r, s) => (k(), B(va, { ref: p(o), "is-horizontal": false, "data-orientation": "vertical", style: _t({ top: 0, right: p(t).dir.value === "ltr" ? 0 : void 0, left: p(t).dir.value === "rtl" ? 0 : void 0, bottom: "var(--reka-scroll-area-corner-height)", "--reka-scroll-area-thumb-height": a.value ? `${p(_n)(a.value)}px` : void 0 }), onOnDragScroll: s[0] || (s[0] = (l) => p(n).onDragScroll(l.y)) }, { default: A(() => [W(r.$slots, "default")]), _: 3 }, 8, ["style"]));
} }), [yn, $l] = Ge("ScrollAreaScrollbarVisible"), _o = $({ __name: "ScrollAreaScrollbarVisible", setup(e8) {
  const t = Le(), n = bn(), { forwardRef: o } = le(), i = I({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), a = P(() => {
    const v = ga(i.value.viewport, i.value.content);
    return v > 0 && v < 1;
  }), r = I(), s = I(0);
  function l(v, _) {
    if (f.value) {
      const b = t.viewport.value.scrollLeft + v.deltaY;
      t.viewport.value.scrollLeft = b, ti(b, _) && v.preventDefault();
    } else {
      const b = t.viewport.value.scrollTop + v.deltaY;
      t.viewport.value.scrollTop = b, ti(b, _) && v.preventDefault();
    }
  }
  function u(v, _) {
    f.value ? s.value = _.x : s.value = _.y;
  }
  function h(v) {
    s.value = 0;
  }
  function d(v) {
    i.value = v;
  }
  function c(v, _) {
    return Bl(v, s.value, i.value, _);
  }
  const f = P(() => n.isHorizontal.value);
  function m(v) {
    f.value ? t.viewport.value.scrollLeft = c(v, t.dir.value) : t.viewport.value.scrollTop = c(v);
  }
  function g() {
    if (f.value) {
      if (t.viewport.value && r.value) {
        const v = t.viewport.value.scrollLeft, _ = ei(v, i.value, t.dir.value);
        r.value.style.transform = `translate3d(${_}px, 0, 0)`;
      }
    } else if (t.viewport.value && r.value) {
      const v = t.viewport.value.scrollTop, _ = ei(v, i.value);
      r.value.style.transform = `translate3d(0, ${_}px, 0)`;
    }
  }
  function y(v) {
    r.value = v;
  }
  return $l({ sizes: i, hasThumb: a, handleWheelScroll: l, handleThumbDown: u, handleThumbUp: h, handleSizeChange: d, onThumbPositionChange: g, onThumbChange: y, onDragScroll: m }), (v, _) => f.value ? (k(), B(Il, X({ key: 0 }, v.$attrs, { ref: p(o) }), { default: A(() => [W(v.$slots, "default")]), _: 3 }, 16)) : (k(), B(Ol, X({ key: 1 }, v.$attrs, { ref: p(o) }), { default: A(() => [W(v.$slots, "default")]), _: 3 }, 16));
} }), _a = $({ __name: "ScrollAreaScrollbarAuto", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), n = bn(), { forwardRef: o } = le(), i = I(false), a = ta(() => {
    if (t.viewport.value) {
      const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, s = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
      i.value = n.isHorizontal.value ? r : s;
    }
  }, 10);
  return re(() => a()), jt(t.viewport, a), jt(t.content, a), (r, s) => (k(), B(p(dn), { present: r.forceMount || i.value }, { default: A(() => [D(_o, X(r.$attrs, { ref: p(o), "data-state": i.value ? "visible" : "hidden" }), { default: A(() => [W(r.$slots, "default")]), _: 3 }, 16, ["data-state"])]), _: 3 }, 8, ["present"]));
} }), Ul = $({ inheritAttrs: false, __name: "ScrollAreaScrollbarHover", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), { forwardRef: n } = le();
  let o;
  const i = I(false);
  function a() {
    window.clearTimeout(o), i.value = true;
  }
  function r() {
    o = window.setTimeout(() => {
      i.value = false;
    }, t.scrollHideDelay.value);
  }
  return re(() => {
    const s = t.scrollArea.value;
    s && (s.addEventListener("pointerenter", a), s.addEventListener("pointerleave", r));
  }), Re(() => {
    const s = t.scrollArea.value;
    s && (window.clearTimeout(o), s.removeEventListener("pointerenter", a), s.removeEventListener("pointerleave", r));
  }), (s, l) => (k(), B(p(dn), { present: s.forceMount || i.value }, { default: A(() => [D(_a, X(s.$attrs, { ref: p(n), "data-state": i.value ? "visible" : "hidden" }), { default: A(() => [W(s.$slots, "default")]), _: 3 }, 16, ["data-state"])]), _: 3 }, 8, ["present"]));
} }), Hl = $({ __name: "ScrollAreaScrollbarScroll", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), n = bn(), { forwardRef: o } = le(), { state: i, dispatch: a } = Yr("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  Zt((s) => {
    if (i.value === "idle") {
      const l = window.setTimeout(() => a("HIDE"), t.scrollHideDelay.value);
      s(() => {
        window.clearTimeout(l);
      });
    }
  });
  const r = ta(() => a("SCROLL_END"), 100);
  return Zt((s) => {
    const l = t.viewport.value, u = n.isHorizontal.value ? "scrollLeft" : "scrollTop";
    if (l) {
      let h = l[u];
      const d = () => {
        const c = l[u];
        h !== c && (a("SCROLL"), r()), h = c;
      };
      l.addEventListener("scroll", d), s(() => {
        l.removeEventListener("scroll", d);
      });
    }
  }), (s, l) => (k(), B(p(dn), { present: s.forceMount || p(i) !== "hidden" }, { default: A(() => [D(_o, X(s.$attrs, { ref: p(o) }), { default: A(() => [W(s.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), [bn, Fl] = Ge("ScrollAreaScrollbar"), Vl = $({ inheritAttrs: false, __name: "ScrollAreaScrollbar", props: { orientation: { default: "vertical" }, forceMount: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, setup(e8) {
  const t = e8, { forwardRef: n } = le(), o = Le(), i = P(() => t.orientation === "horizontal");
  ae(i, () => {
    i.value ? o.onScrollbarXEnabledChange(true) : o.onScrollbarYEnabledChange(true);
  }, { immediate: true }), Re(() => {
    o.onScrollbarXEnabledChange(false), o.onScrollbarYEnabledChange(false);
  });
  const { orientation: a, forceMount: r, asChild: s, as: l } = ze(t);
  return Fl({ orientation: a, forceMount: r, isHorizontal: i, as: l, asChild: s }), (u, h) => p(o).type.value === "hover" ? (k(), B(Ul, X({ key: 0 }, u.$attrs, { ref: p(n), "force-mount": p(r) }), { default: A(() => [W(u.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : p(o).type.value === "scroll" ? (k(), B(Hl, X({ key: 1 }, u.$attrs, { ref: p(n), "force-mount": p(r) }), { default: A(() => [W(u.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : p(o).type.value === "auto" ? (k(), B(_a, X({ key: 2 }, u.$attrs, { ref: p(n), "force-mount": p(r) }), { default: A(() => [W(u.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : p(o).type.value === "always" ? (k(), B(_o, X({ key: 3 }, u.$attrs, { ref: p(n), "data-state": "visible" }), { default: A(() => [W(u.$slots, "default")]), _: 3 }, 16)) : ie("", true);
} }), Yl = $({ __name: "ScrollAreaThumb", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, n = Le(), o = yn();
  function i(c) {
    const m = c.target.getBoundingClientRect(), g = c.clientX - m.left, y = c.clientY - m.top;
    o.handleThumbDown(c, { x: g, y });
  }
  function a(c) {
    o.handleThumbUp(c);
  }
  const { forwardRef: r, currentElement: s } = le(), l = I(), u = P(() => n.viewport.value);
  function h() {
    if (!l.value) {
      const c = Ll(u.value, o.onThumbPositionChange);
      l.value = c, o.onThumbPositionChange();
    }
  }
  const d = P(() => o.sizes.value);
  return Gr(d, () => {
    o.onThumbChange(s.value), u.value && (o.onThumbPositionChange(), u.value.addEventListener("scroll", h));
  }), Re(() => {
    var _a2;
    u.value.removeEventListener("scroll", h), (_a2 = n.viewport.value) == null ? void 0 : _a2.removeEventListener("scroll", h);
  }), (c, f) => (k(), B(p(ye), { ref: p(r), "data-state": p(o).hasThumb ? "visible" : "hidden", style: { width: "var(--reka-scroll-area-thumb-width)", height: "var(--reka-scroll-area-thumb-height)" }, "as-child": t.asChild, as: c.as, onPointerdown: i, onPointerup: a }, { default: A(() => [W(c.$slots, "default")]), _: 3 }, 8, ["data-state", "as-child", "as"]));
} }), Gl = $({ inheritAttrs: false, __name: "ScrollAreaViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8, { expose: t }) {
  const n = e8, { nonce: o } = ze(n), i = sa(o), a = Le(), r = I();
  re(() => {
    a.onViewportChange(r.value), a.onContentChange(l.value);
  }), t({ viewportElement: r });
  const { forwardRef: s, currentElement: l } = le();
  return (u, h) => (k(), G(Ae, null, [w("div", X({ ref_key: "viewportElement", ref: r, "data-reka-scroll-area-viewport": "", style: { overflowX: p(a).scrollbarXEnabled.value ? "scroll" : "hidden", overflowY: p(a).scrollbarYEnabled.value ? "scroll" : "hidden" } }, u.$attrs, { tabindex: 0 }), [D(p(ye), { ref: p(s), style: _t({ minWidth: p(a).scrollbarXEnabled.value ? "fit-content" : void 0 }), "as-child": n.asChild, as: u.as }, { default: A(() => [W(u.$slots, "default")]), _: 3 }, 8, ["style", "as-child", "as"])], 16), D(p(ye), { as: "style", nonce: p(i) }, { default: A(() => h[0] || (h[0] = [nt(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), zl = { "bg-blue-s3": "", relative: "" }, Kl = { key: 0, left: "50%", "max-w-full": "", "bottom-0": "", absolute: "" }, Wl = { flex: "~ col lg:row justify-between gap-x-32", "w-full": "", relative: "", "f-mt-md": "", "lg:bottom--60": "" }, ql = { flex: "~ col sm:items-center lg:items-start" }, jl = $({ __name: "TwoColumn", props: { primary: {} }, setup(e8) {
  return (t, n) => {
    const o = Zi, i = Xi, a = uo, r = hn;
    return k(), G("section", zl, [t.primary.backgroundImage ? (k(), G("div", Kl, [D(o, { field: t.primary.backgroundImage }, null, 8, ["field"])])) : ie("", true), D(i, { headline: t.primary.headline, subline: t.primary.subline, "children:text-white": "" }, null, 8, ["headline", "subline"]), w("div", Wl, [w("div", ql, [D(a, { wrapper: "div", field: t.primary.text, class: "nq-prose-compact px-0" }, null, 8, ["field"]), D(r, { field: t.primary.linkHref, "nq-arrow": "", "nq-pill-tertiary": "" }, { default: A(() => [nt(de(t.primary.linkLabel), 1)]), _: 1 }, 8, ["field"])]), D(o, { field: t.primary.image, "mx-auto": "", relative: "", "drop-shadow-xl": "", "lg:mr-0": "" }, null, 8, ["field"])])]);
  };
} }), Zl = Object.assign(jl, { __name: "HeroTwoColumn" }), Xl = { viewBox: "0 0 977 362", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Ql = { class: "marker-group" }, Jl = ["width"], eu = ["width", "x", "y"], tu = ["width", "x", "y"], nu = ["x", "y"], ou = { class: "small-marker-group" }, iu = ["width", "x", "y"], au = ["width", "x", "y"], ni = 160, kt = 120, ru = $({ __name: "Map", setup(e8) {
  const t = [{ id: "europe", x: 350, y: -175, width: ni, text: "2000" }, { id: "australia", x: 800, y: 70, width: ni, text: "250" }], n = [{ id: "1", x: -5, y: 3, width: kt }, { id: "2", x: 115, y: -94, width: kt }, { id: "3", x: 162, y: 41, width: kt }, { id: "4", x: 306, y: -43, width: kt }, { id: "5", x: 594, y: -65, width: kt }], o = I(false), i = I(true);
  return re(() => {
    setTimeout(() => {
      o.value = true, setTimeout(() => {
        i.value = false;
      }, 1e3);
    }, 100);
  }), (a, r) => {
    const s = ra;
    return k(), G("div", { class: ve([{ visible: p(o), delayed: p(i) }, "map"]) }, [D(s, { class: "base-map", src: "/assets/images/home-hero/map.svg", alt: "World map" }), (k(), G("svg", Xl, [r[0] || (r[0] = Yo('<g class="green-group europe" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-b40e86a5><path d="M432.199 67.438c.084.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.627-1.355-.084-.847 1.017-1.61 2.372-1.694 1.61-.085 2.627.508 2.627 1.355Z" data-v-b40e86a5></path><path d="M432.453 71.758c.084.848-1.017 1.61-2.372 1.695-1.356.084-2.542-.508-2.627-1.356-.084-.847 1.017-1.61 2.372-1.694 1.441 0 2.627.593 2.627 1.355Z" data-v-b40e86a5></path><path d="M439.145 67.1c.084.846-1.017 1.609-2.457 1.694-1.355.084-2.541-.509-2.626-1.44-.085-.848 1.016-1.61 2.457-1.695 1.609-.085 2.626.508 2.626 1.44Z" data-v-b40e86a5></path><path d="M425.167 67.947c.085.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.457-1.356-.085-.847 1.017-1.609 2.372-1.694 1.186-.17 2.372.424 2.457 1.356Z" data-v-b40e86a5></path><path d="M432.114 62.949c.085.847-1.017 1.61-2.457 1.694-1.355.085-2.372-.508-2.457-1.356-.084-.847 1.017-1.61 2.457-1.694 1.186-.085 2.372.508 2.457 1.356Z" data-v-b40e86a5></path></g><g class="green-group australia" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-b40e86a5><path d="M882.026 318.444c.085 1.016-.932 1.271-2.372.678-1.44-.593-2.795-1.864-2.88-2.796-.085-1.016.932-1.271 2.372-.678 1.44.593 2.711 1.779 2.88 2.796Z" data-v-b40e86a5></path><path d="M874.571 315.479c.085 1.016-.931 1.271-2.371.762-1.441-.593-2.796-1.779-2.881-2.795-.084-1.017.932-1.271 2.372-.763 1.44.593 2.626 1.779 2.88 2.796Z" data-v-b40e86a5></path><path d="M882.789 323.527c.085 1.016-.932 1.27-2.372.677s-2.711-1.863-2.88-2.795c-.085-1.017.931-1.271 2.372-.678 1.524.593 2.795 1.864 2.88 2.796Z" data-v-b40e86a5></path><path d="M889.396 321.493c.085 1.017-.932 1.271-2.287.763-1.44-.593-2.711-1.864-2.881-2.88-.084-1.017.932-1.271 2.288-.763 1.44.763 2.626 1.949 2.88 2.88Z" data-v-b40e86a5></path><path d="M881.094 313.361c.085 1.017-.932 1.271-2.287.762-1.355-.508-2.796-1.863-2.88-2.795-.085-1.017.932-1.271 2.287-.763 1.44.678 2.796 1.864 2.88 2.796Z" data-v-b40e86a5></path></g>', 2)), w("g", Ql, [(k(), G(Ae, null, et(t, (l) => w("g", { key: l.id, class: ve(`marker-${l.id}`), width: l.width }, [w("use", { href: "#marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, eu), w("use", { href: "#marker", width: l.width, x: l.x, y: l.y }, null, 8, tu), w("text", { x: l.x + l.width / 2 - 7, y: l.y + 202 - 18, fill: "#fff", "font-weight": "600", "font-size": "14px" }, de(l.text), 9, nu)], 10, Jl)), 64))]), w("g", ou, [(k(), G(Ae, null, et(n, (l) => w("g", { key: l.id, class: ve(`small-marker-${l.id}`) }, [w("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, iu), w("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y }, null, 8, au)], 2)), 64))]), r[1] || (r[1] = Yo('<symbol id="marker" viewBox="0 0 158 200" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b40e86a5><g filter="url(#a)" data-v-b40e86a5><path d="M119 110.915a8.14 8.14 0 0 1-3.253 6.51l-31.86 23.919a8.14 8.14 0 0 1-9.775 0l-31.86-23.919a8.141 8.141 0 0 1-3.252-6.51V28.801a8.14 8.14 0 0 1 8.14-8.14h63.72A8.14 8.14 0 0 1 119 28.8v82.114Z" fill="url(#b)" data-v-b40e86a5></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M68.495 67.806a50.212 50.212 0 0 1-5.639 5.595c-2.707 2.301-6.89.8-7.515-2.699-.588-3.296-.377-6.115.34-9.927 1.336-7.109 3.093-12.754 8.412-16.502 3.187-2.245 7.203-1.103 10.536.315 2.722 1.159 5.635 1.159 8.35.009 3.358-1.422 7.427-2.587 10.639-.324 5.319 3.748 7.076 9.393 8.412 16.502.717 3.812.928 6.631.339 9.927-.624 3.498-4.808 5-7.515 2.7a50.222 50.222 0 0 1-5.638-5.596c-4.188-4.884-16.745-4.637-20.721 0Zm.965-17.091c.39 0 .706.315.706.705a3.084 3.084 0 0 0 3.084 3.084.705.705 0 0 1 0 1.41 3.084 3.084 0 0 0-3.084 3.084.705.705 0 0 1-1.41 0 3.083 3.083 0 0 0-3.084-3.084.705.705 0 1 1 0-1.41 3.084 3.084 0 0 0 3.083-3.084c0-.39.316-.705.705-.705Zm20.386-.282a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm-.814 6.494a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Zm-2.475-3.203a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm5.772-.088a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Z" fill="url(#c)" data-v-b40e86a5></path><path opacity=".8" d="m67.671 98.29-3.09-5.326a1.24 1.24 0 0 0-1.073-.614h-6.182c-.44 0-.849.233-1.07.614l-3.09 5.327c-.221.38-.221.848 0 1.229l3.09 5.326c.221.381.63.615 1.07.615h6.182c.441 0 .85-.234 1.07-.615l3.091-5.326a1.22 1.22 0 0 0 .002-1.23Z" fill="#FEFEFE" data-v-b40e86a5></path><defs data-v-b40e86a5><radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-80 0 0 -122.314 119 20.66)" data-v-b40e86a5><stop stop-color="#41A38E" data-v-b40e86a5></stop><stop offset="1" stop-color="#21BCA5" data-v-b40e86a5></stop></radialGradient><radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(26.83723 23.02773 -21.7223 25.31583 60.964 47.636)" data-v-b40e86a5><stop stop-color="#fff" data-v-b40e86a5></stop><stop offset="1" stop-color="#fff" stop-opacity=".62" data-v-b40e86a5></stop></radialGradient><filter id="a" x=".334" y=".31" width="157.331" height="199.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-b40e86a5><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-b40e86a5></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-b40e86a5></feColorMatrix><feOffset dy="2.035" data-v-b40e86a5></feOffset><feGaussianBlur stdDeviation="1.272" data-v-b40e86a5></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-b40e86a5></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31894" data-v-b40e86a5></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-b40e86a5></feColorMatrix><feOffset dy="7.123" data-v-b40e86a5></feOffset><feGaussianBlur stdDeviation="4.324" data-v-b40e86a5></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-b40e86a5></feColorMatrix><feBlend in2="effect1_dropShadow_257_31894" result="effect2_dropShadow_257_31894" data-v-b40e86a5></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-b40e86a5></feColorMatrix><feOffset dy="18.315" data-v-b40e86a5></feOffset><feGaussianBlur stdDeviation="19.333" data-v-b40e86a5></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-b40e86a5></feColorMatrix><feBlend in2="effect2_dropShadow_257_31894" result="effect3_dropShadow_257_31894" data-v-b40e86a5></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31894" result="shape" data-v-b40e86a5></feBlend></filter></defs></symbol><symbol id="small-marker" viewBox="0 0 118 139" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b40e86a5><g filter="url(#a)" data-v-b40e86a5><path d="M79.507 65.79a4.109 4.109 0 0 1-1.641 3.285L61.785 81.148a4.109 4.109 0 0 1-4.934 0l-16.08-12.073a4.108 4.108 0 0 1-1.642-3.286V24.343a4.109 4.109 0 0 1 4.109-4.108h32.161c2.27 0 4.109 1.84 4.109 4.108V65.79Z" fill="#21BCA5" data-v-b40e86a5></path></g><defs data-v-b40e86a5><filter id="a" x=".717" y=".018" width="117.203" height="138.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-b40e86a5><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-b40e86a5></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-b40e86a5></feColorMatrix><feOffset dy="2.022" data-v-b40e86a5></feOffset><feGaussianBlur stdDeviation="1.264" data-v-b40e86a5></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-b40e86a5></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31717" data-v-b40e86a5></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-b40e86a5></feColorMatrix><feOffset dy="7.076" data-v-b40e86a5></feOffset><feGaussianBlur stdDeviation="4.296" data-v-b40e86a5></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-b40e86a5></feColorMatrix><feBlend in2="effect1_dropShadow_257_31717" result="effect2_dropShadow_257_31717" data-v-b40e86a5></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-b40e86a5></feColorMatrix><feOffset dy="18.195" data-v-b40e86a5></feOffset><feGaussianBlur stdDeviation="19.206" data-v-b40e86a5></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-b40e86a5></feColorMatrix><feBlend in2="effect2_dropShadow_257_31717" result="effect3_dropShadow_257_31717" data-v-b40e86a5></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31717" result="shape" data-v-b40e86a5></feBlend></filter></defs></symbol>', 2))]))], 2);
  };
} }), su = Object.assign(Ke(ru, [["__scopeId", "data-v-b40e86a5"]]), { __name: "HeroMap" }), lu = { class: "dark", "text-neutral": "", "mx-0": "", "py-0": "", "bg-darkblue": "", relative: "", "of-hidden": "", "children:max-w-none": "", "max-md:min-h-auto": "", pt: "148 md:153 lg:160", "min-h": "auto md:100vh lg:110vh", flex: "~ col justify-between" }, uu = { flex: "grow ~ col justify-center", "z-10": "", "children:md:mx-auto": "" }, cu = { "mt-120": "", "max-w-none": "", "w-full": "", flex: "~ justify-center" }, du = { class: "map-container", w: "80%", "pt-23": "", "min-w-680": "", relative: "", "z-1": "" }, hu = $({ __name: "Home", props: { headline: {}, subHeadlineTemplate: {}, link: {} }, setup(e8) {
  const t = e8, { cryptoMapLocationsCount: n } = os(), o = Ln(zr, { class: "text-blue", to: "https://map.nimiq.com", target: "_blank" }, () => [Ln(rs, { value: n.value || 0, duration: 1300 }), " locations"]), i = P(() => {
    var _a2, _b, _c2, _d2;
    const r = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), s = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return Ln("p", {}, [r, o, s]);
  }), a = P(() => {
    var _a2, _b, _c2, _d2;
    const r = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), s = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return `${r} ${n.value} ${s}`;
  });
  return ae(a, () => {
    Wr({ title: is(t.headline), meta: [{ name: "description", content: a.value }] });
  }), (r, s) => {
    const l = Kr, u = hn, h = ra, d = ns;
    return k(), G("section", lu, [w("div", uu, [D(l, { "nq-heading-lg": "", field: r.headline, wrapper: "h1" }, null, 8, ["field"]), (k(), B(Ji(p(i)), { text: "neutral-800 f-xl" })), D(u, { field: r.link, "mt-40": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, null, 8, ["field"])]), D(h, { width: "1600", height: "900", src: "/assets/images/gods-light.webp", alt: "Nimiq Gods Rays Background", loading: "eager", priority: "", "m-0": "", "size-full": "", "pointer-events-none": "", "inset-0": "", absolute: "", "blur-60": "", "brightness-80": "" }), s[3] || (s[3] = w("div", { "bg-gradient": "to-b from-darkblue/0 to-darkblue", "m-0": "", "op-80": "", "pointer-events-none": "", "inset-0": "", absolute: "" }, null, -1)), D(d, { "left-100": "", top: "77 sm:112 md:200", style: { "--scale": "1.05" } }), D(d, { "right-80": "", "top-170": "", style: { "--scale": "0.7" } }), D(d, { bottom: "302 md:430", left: "56vw md:30vw", style: { "--scale": "0.92" } }), D(d, { "bottom-460": "", "right-32": "", style: { "--scale": "1" } }), w("div", cu, [w("div", du, [s[0] || (s[0] = w("div", { class: "ellipse-shape", "bg-neutral-300": "", "z--1": "", "mix-blend-multiply": "", "blur-20": "" }, null, -1)), s[1] || (s[1] = w("div", { class: "ellipse-shape", "z--2": "", "blur-120": "", style: { background: "radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" } }, null, -1)), s[2] || (s[2] = w("div", { class: "ellipse-shape", "bg-white": "", "z--1": "" }, null, -1)), D(su)])])]);
  };
} }), fu = Object.assign(Ke(hu, [["__scopeId", "data-v-598fe227"]]), { __name: "HeroHome" }), pu = {}, mu = { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 34 41", "text-white": "", "w-30": "", "of-visible": "" };
function gu(e8, t) {
  return k(), G("svg", mu, t[0] || (t[0] = [w("g", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "3" }, [w("path", { d: "M2.3 2 17 13 31.8 2", class: "breath-arrow", style: { "--op": "1" } }), w("path", { d: "M2.3 15 17 26l14.8-11", class: "breath-arrow", style: { "--op": "0.7", "--delay": "0.6s" } }), w("path", { d: "M2.3 28 17 39l14.8-11", class: "breath-arrow", style: { "--op": "0.4", "--delay": "1.2s" } })], -1)]));
}
const vu = Object.assign(Ke(pu, [["render", gu], ["__scopeId", "data-v-fba215d4"]]), { __name: "AnimatedBreathArrow" }), _u = { "bg-neutral-0": "", relative: "", "of-x-clip": "", "f-p-5xl": "", "max-md:pb-100": "" }, yu = $({ __name: "Staking", props: { headline: {}, cta: {} }, setup(e8) {
  return (t, n) => {
    const o = fs, i = ps, a = vu;
    return k(), G("section", _u, [D(o, { left: "-100vw lg:-5vw", size: "300vw lg:110vw", "max-w-none": "", absolute: "", "z-0": "", bottom: "10 lg:-300" }), n[0] || (n[0] = w("div", { h: "400 lg:200", "bg-neutral-0": "", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), n[1] || (n[1] = w("div", { class: "bg-radial-green", "bg-gradient-fn": "to-b from-white to-", top: "50vh lg:200", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), n[2] || (n[2] = w("div", { class: "bg-linear-white-1", top: "20vh lg:200", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), n[3] || (n[3] = w("div", { class: "bg-linear-white-2", top: "20vh lg:200", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), D(i, { headline: t.headline, cta: t.cta, "show-staking-icon": "", "primary-pill": "", relative: "", "z-2": "" }, null, 8, ["headline", "cta"]), D(a, { hidden: "", "f-m-5xl": "", "md:block": "", "max-md:self-center": "" })]);
  };
} }), bu = Object.assign(Ke(yu, [["__scopeId", "data-v-9cbbe109"]]), { __name: "HeroStaking" }), pe = ["month", "day", "hour", "minute", "second"], ya = 1e3, ba = 60 * ya, xa = 60 * ba, wa = 24 * xa, oi = { second: ya, minute: ba, hour: xa, day: wa };
class Gt {
  constructor(t, n = 0) {
    __publicField(this, "_rateLimits");
    __publicField(this, "_usages");
    __publicField(this, "_periodResetTimes");
    __publicField(this, "_periodResetSafetyBuffer");
    __publicField(this, "_pausedUntil", -1);
    __publicField(this, "_timer");
    __publicField(this, "_taskQueue", []);
    this._rateLimits = t, this._periodResetSafetyBuffer = n, this._usages = { parallel: 0 }, this._periodResetTimes = {};
    const o = Date.now();
    for (const i of pe) this._usages[i] = 0, this._periodResetTimes[i] = this._calculatePeriodResetTime(i, o);
    this.setRateLimits(t);
  }
  setRateLimits(t) {
    for (let n = pe.length - 1; n >= 0; --n) {
      const o = pe[n];
      if (!t[o]) continue;
      if ((o !== "month" ? oi[o] : 28 * wa) - 2 * this._periodResetSafetyBuffer < 200) throw new Error(`Period reset safety buffer too long for ${o} rate limit.`);
      break;
    }
    this._rateLimits = { ...t }, this._startTasks();
  }
  getRateLimits() {
    return { ...this._rateLimits };
  }
  setUsages(t, n = "overwrite") {
    this._updatePeriods(), t = { ...t };
    const o = {}, i = {};
    for (let a = pe.length - 1; a >= 0; --a) {
      const r = pe[a], s = pe[a + 1] ?? pe[pe.length - 1];
      s !== r && typeof t[r] == "number" && t[r] < o[s] && delete t[r], o[r] = Math.max(t[r] ?? 0, o[s] ?? 0);
    }
    for (let a = 0; a < pe.length; ++a) {
      const r = pe[a], s = pe[a - 1] ?? pe[0];
      i[r] = Math.min(t[r] ?? Number.POSITIVE_INFINITY, i[s] ?? Number.POSITIVE_INFINITY);
    }
    for (const a of pe) {
      const r = Math.max(o[a], Math.min(i[a], t[a] ?? this._usages[a]));
      (n === "overwrite" || n === "increase-only" && r > this._usages[a] || n === "decrease-only" && r < this._usages[a]) && (this._usages[a] = r);
    }
    this._startTasks();
  }
  getUsages() {
    return { ...this._usages };
  }
  triggerRateLimit(t) {
    const n = this._rateLimits[t];
    n && this.setUsages({ [t]: n }, "increase-only");
  }
  pause(t) {
    const n = Date.now() + t;
    n <= this._pausedUntil || (this._pausedUntil = n, this._startTasks());
  }
  async schedule(t, n = "low") {
    return new Promise((o, i) => {
      const a = async () => {
        try {
          o(await t());
        } catch (r) {
          i(r);
        }
      };
      n === "low" ? this._taskQueue.push(a) : this._taskQueue.unshift(a), this._startTasks();
    });
  }
  _startTasks() {
    this._timer && clearTimeout(this._timer);
    const t = Date.now();
    for (this._updatePeriods(t); this._taskQueue.length; ) {
      if (this._usages.parallel >= (this._rateLimits.parallel || Number.POSITIVE_INFINITY)) return;
      if (t < this._pausedUntil) {
        this._timer = setTimeout(() => this._startTasks(), this._pausedUntil - t);
        return;
      }
      const n = pe.find((i) => {
        const a = this._rateLimits[i];
        if (!a) return false;
        const r = this._usages[i] >= a, s = t >= this._periodResetTimes[i] - 2 * this._periodResetSafetyBuffer;
        return r || s;
      });
      if (n) {
        this._timer = setTimeout(() => this._startTasks(), this._periodResetTimes[n] - t);
        return;
      }
      this._usages.parallel += 1;
      for (const i of pe) this._usages[i] += 1;
      this._taskQueue.shift()().finally(() => {
        this._usages.parallel = Math.max(0, this._usages.parallel - 1), this._startTasks();
      });
    }
  }
  _updatePeriods(t = Date.now()) {
    for (const n of pe) t < this._periodResetTimes[n] || (this._usages[n] = 0, this._periodResetTimes[n] = this._calculatePeriodResetTime(n, t));
  }
  _calculatePeriodResetTime(t, n = Date.now()) {
    let o;
    if (n -= this._periodResetSafetyBuffer, t === "month") {
      const i = new Date(n);
      o = Date.UTC(i.getUTCFullYear(), i.getUTCMonth() + 1);
    } else {
      const i = oi[t];
      o = (Math.floor(n / i) + 1) * i;
    }
    return o + this._periodResetSafetyBuffer;
  }
}
var yo = ((e8) => (e8.CryptoCompare = "CryptoCompare", e8.CryptoCompareLegacy = "CryptoCompareLegacy", e8.CoinGecko = "CoinGecko", e8))(yo || {}), Qt = ((e8) => (e8.NIM = "nim", e8.BTC = "btc", e8.ETH = "eth", e8.USDC = "usdc", e8.USDT = "usdt", e8))(Qt || {}), he = ((e8) => (e8.AED = "aed", e8.AFN = "afn", e8.ALL = "all", e8.AMD = "amd", e8.ANG = "ang", e8.AOA = "aoa", e8.ARS = "ars", e8.AUD = "aud", e8.AWG = "awg", e8.AZN = "azn", e8.BAM = "bam", e8.BBD = "bbd", e8.BDT = "bdt", e8.BGN = "bgn", e8.BHD = "bhd", e8.BIF = "bif", e8.BMD = "bmd", e8.BND = "bnd", e8.BOB = "bob", e8.BRL = "brl", e8.BSD = "bsd", e8.BTN = "btn", e8.BWP = "bwp", e8.BYN = "byn", e8.BZD = "bzd", e8.CAD = "cad", e8.CDF = "cdf", e8.CHF = "chf", e8.CLP = "clp", e8.CNY = "cny", e8.COP = "cop", e8.CRC = "crc", e8.CUP = "cup", e8.CZK = "czk", e8.DJF = "djf", e8.DKK = "dkk", e8.DOP = "dop", e8.DZD = "dzd", e8.EGP = "egp", e8.ERN = "ern", e8.ETB = "etb", e8.EUR = "eur", e8.FJD = "fjd", e8.FKP = "fkp", e8.GBP = "gbp", e8.GEL = "gel", e8.GHS = "ghs", e8.GIP = "gip", e8.GMD = "gmd", e8.GNF = "gnf", e8.GTQ = "gtq", e8.GYD = "gyd", e8.HKD = "hkd", e8.HNL = "hnl", e8.HTG = "htg", e8.HUF = "huf", e8.IDR = "idr", e8.ILS = "ils", e8.INR = "inr", e8.IQD = "iqd", e8.IRR = "irr", e8.ISK = "isk", e8.JMD = "jmd", e8.JOD = "jod", e8.JPY = "jpy", e8.KES = "kes", e8.KGS = "kgs", e8.KHR = "khr", e8.KMF = "kmf", e8.KPW = "kpw", e8.KRW = "krw", e8.KWD = "kwd", e8.KYD = "kyd", e8.KZT = "kzt", e8.LAK = "lak", e8.LBP = "lbp", e8.LKR = "lkr", e8.LRD = "lrd", e8.LSL = "lsl", e8.LYD = "lyd", e8.MAD = "mad", e8.MDL = "mdl", e8.MGA = "mga", e8.MKD = "mkd", e8.MMK = "mmk", e8.MNT = "mnt", e8.MOP = "mop", e8.MRU = "mru", e8.MUR = "mur", e8.MVR = "mvr", e8.MWK = "mwk", e8.MXN = "mxn", e8.MYR = "myr", e8.MZN = "mzn", e8.NAD = "nad", e8.NGN = "ngn", e8.NIO = "nio", e8.NOK = "nok", e8.NPR = "npr", e8.NZD = "nzd", e8.OMR = "omr", e8.PAB = "pab", e8.PEN = "pen", e8.PGK = "pgk", e8.PHP = "php", e8.PKR = "pkr", e8.PLN = "pln", e8.PYG = "pyg", e8.QAR = "qar", e8.RON = "ron", e8.RSD = "rsd", e8.RUB = "rub", e8.RWF = "rwf", e8.SAR = "sar", e8.SBD = "sbd", e8.SCR = "scr", e8.SDG = "sdg", e8.SEK = "sek", e8.SGD = "sgd", e8.SHP = "shp", e8.SOS = "sos", e8.SRD = "srd", e8.SSP = "ssp", e8.STN = "stn", e8.SYP = "syp", e8.SZL = "szl", e8.THB = "thb", e8.TJS = "tjs", e8.TMT = "tmt", e8.TND = "tnd", e8.TOP = "top", e8.TRY = "try", e8.TTD = "ttd", e8.TWD = "twd", e8.TZS = "tzs", e8.UAH = "uah", e8.UGX = "ugx", e8.USD = "usd", e8.UYU = "uyu", e8.UZS = "uzs", e8.VES = "ves", e8.VND = "vnd", e8.VUV = "vuv", e8.WST = "wst", e8.XAF = "xaf", e8.XCD = "xcd", e8.XOF = "xof", e8.XPF = "xpf", e8.YER = "yer", e8.ZAR = "zar", e8.ZMW = "zmw", e8.ZWL = "zwl", e8))(he || {});
const xu = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => he[e8]), wu = ["AUD", "BRL", "CAD", "CHF", "CLP", "CZK", "EUR", "GBP", "HKD", "IDR", "ILS", "JPY", "KES", "KZT", "MXN", "MYR", "NZD", "PEN", "RON", "SGD", "THB", "TRY", "USD"].map((e8) => he[e8]), Su = ["AED", "AOA", "ARS", "AUD", "BGN", "BRL", "CAD", "CHF", "COP", "CZK", "EUR", "GBP", "GEL", "HKD", "IDR", "ILS", "INR", "JPY", "KRW", "KZT", "MXN", "MYR", "NGN", "NZD", "PHP", "PLN", "RON", "RUB", "SGD", "THB", "TRY", "UAH", "USD", "ZAR"].map((e8) => he[e8]), ii = Date.parse("2024-11-01"), ku = ["AED", "ARS", "AUD", "BDT", "BHD", "BMD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "GEL", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "KWD", "LKR", "MMK", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "ZAR"].map((e8) => he[e8]), Sa = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => he[e8]), xn = ["CRC"].map((e8) => he[e8]), Tu = [...Sa, ...xn], ka = { crc: "America/Costa_Rica" }, Ta = "https://data-api.cryptocompare.com/index/cc", Ca = "https://min-api.cryptocompare.com/data";
let Ma = "https://api.coingecko.com/api/v3";
const Kn = { nim: "nimiq-2", btc: "bitcoin", eth: "ethereum", usdc: "usd-coin", usdt: "tether" }, Cu = 1e3, dt = 60 * Cu, bo = 60 * dt, Dt = 24 * bo, Mu = /* @__PURE__ */ new Map();
async function Du(e8, t, n = "CryptoCompare") {
  e8 = e8.map((u) => u.toLowerCase()), t = t.map((u) => u.toLowerCase());
  const o = [], i = [];
  for (const u of t) if (pt(u, n, "current")) o.push(u);
  else if (Da(u, n, "current")) i.push(u);
  else throw new Error(`Currency ${u} not supported for provider ${n}.`);
  let a;
  if (i.length) {
    a = Nu(i);
    const u = "usd";
    if (!pt(u, n, "current")) throw new Error(`${n} can not bridge via USD`);
    o.includes(u) || o.push(u);
  }
  let r;
  switch (n) {
    case "CryptoCompare":
      r = (async () => {
        const u = e8.flatMap((f) => t.map((m) => `${f.toUpperCase()}-${m.toUpperCase()}`)), h = 50, d = [];
        for (let f = 0; f < u.length; f += h) {
          const m = u.slice(f, Math.min(u.length, f + h));
          d.push(Ue(`${Ta}/v1/latest/tick?market=cadli&instruments=${m.join(",")}&groups=VALUE&apply_mapping=false`, n).then(({ Data: g }) => g));
        }
        const c = {};
        for (const f of await Promise.all(d)) for (const [m, { VALUE: g }] of Object.entries(f)) {
          const [y, v] = m.split("-").map((_) => _.toLowerCase());
          c[y] || (c[y] = {}), c[y][v] = g;
        }
        return c;
      })();
      break;
    case "CryptoCompareLegacy":
      r = (async () => {
        const h = [];
        for (let c = 0; c < o.length; c += 25) {
          const f = o.slice(c, Math.min(o.length, c + 25));
          h.push(Ue(`${Ca}/pricemulti?fsyms=${e8.join(",")}&tsyms=${f.join(",")}`, n));
        }
        const d = {};
        for (const c of await Promise.all(h)) for (const [f, m] of Object.entries(c)) {
          const g = f.toLowerCase();
          for (const [y, v] of Object.entries(m)) {
            const _ = y.toLowerCase();
            d[g] || (d[g] = {}), d[g][_] = v;
          }
        }
        return d;
      })();
      break;
    case "CoinGecko": {
      const u = e8.map((h) => Kn[h]);
      r = Ue(`${Ma}/simple/price?ids=${u.join(",")}&vs_currencies=${o.join(",")}`, n).then((h) => e8.reduce((d, c) => ({ ...d, [c]: h[Kn[c]] }), {}));
      break;
    }
    default:
      throw new Error(`Unsupported provider ${n}`);
  }
  const [s, l] = await Promise.all([r, a]);
  for (const [u, h] of Object.entries(l || {})) for (const d of Object.values(s)) {
    const c = d.usd;
    d[u] = h && c ? h * c : void 0;
  }
  return s;
}
async function Jt(e8, t, n, o, i = "CryptoCompare", a = {}) {
  if (i === "CryptoCompareLegacy" && e8 === "nim" && o >= ii) throw new Error(`The legacy API only supports historic rates for NIM before ${new Date(ii)}.`);
  const r = t;
  let s, l;
  if (Da(t, i, "historic") && !pt(t, i, "historic")) {
    s = t, l = Ra(s, n, o);
    const m = "usd";
    if (!pt(m, i, "historic")) throw new Error(`${i} can not bridge via USD`);
    t = m;
  }
  n = Math.floor(n / 1e3), o = Math.ceil(o / 1e3);
  let u = 0, h;
  switch (i) {
    case "CryptoCompare":
      h = (async () => {
        const m = `${e8.toUpperCase()}-${t.toUpperCase()}`, { interval: g, aggregate: y, aggregatedIntervalTime: v } = Wn(a);
        let _ = [], b = o;
        try {
          for (; b >= n; ) {
            const T = Math.min(Math.floor(2e3 / y), Math.ceil((b - n) * 1e3 / v) + 1), { Data: C } = await Ue(`${Ta}/v1/historical/${g}?market=cadli&groups=OHLC&fill=false&apply_mapping=false&instrument=${m}&to_ts=${b}&limit=${T}` + (y !== 1 ? `&aggregate=${y}` : ""), i), M = [];
            for (const { TIMESTAMP: E, OPEN: j } of C) E < n || M.push([E * 1e3, j]);
            _ = M.concat(_), b = C[0].TIMESTAMP - 1;
          }
        } catch (T) {
          const C = T instanceof Error && T.message.includes("was not trading") && je(T.cause) && "other_info" in T.cause && je(T.cause.other_info) && "first" in T.cause.other_info && typeof T.cause.other_info.first == "number" ? T.cause.other_info.first : void 0;
          if (C) u = Math.min(C - (_.length ? 1 : 0), o);
          else throw T;
        }
        return _;
      })();
      break;
    case "CryptoCompareLegacy":
      e8 === "nim" && t === "usd" && (t = "usdt"), h = (async () => {
        const { interval: m, aggregate: g, aggregatedIntervalTime: y } = Wn(a);
        let v = [], _ = o;
        for (; _ >= n; ) {
          const b = Math.min(Math.floor(2e3 / g), Math.ceil((_ - n) * 1e3 / y) + 1) - 1, { Data: { TimeFrom: T, Data: C } } = await Ue(`${Ca}/v2/histo${m.replace(/s$/, "")}?fsym=${e8}&tsym=${t}&toTs=${_}&limit=${b}` + (g !== 1 ? `&aggregate=${g}` : ""), i), M = [];
          for (const { time: E, open: j } of C) E < n || M.push([E * 1e3, j]);
          v = M.concat(v), _ = T - 1;
        }
        return v;
      })();
      break;
    case "CoinGecko": {
      const m = Kn[e8.toLowerCase()];
      h = Ue(`${Ma}/coins/${m}/market_chart/range?vs_currency=${t}&from=${n}&to=${o}`, i).then(({ prices: g }) => g);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${i}`);
  }
  const [d, c] = await Promise.all([h, l]);
  let f = d;
  return s && c && (f = d.map(([m, g]) => {
    const y = qn(m, ka[s]), v = c[y];
    return v ? [m, g * v] : null;
  }).filter((m) => m !== null)), u && Pu(r, "CryptoCompareLegacy") && (f = (await Jt(e8, r, n * 1e3, u * 1e3, "CryptoCompareLegacy", a)).concat(f)), f;
}
async function Ru(e8, t, n, o = "CryptoCompare", i = {}) {
  const a = /* @__PURE__ */ new Map();
  if (!n.length) return a;
  n.sort((c, f) => c - f);
  const r = "interval" in i || "aggregate" in i ? i : {}, { aggregatedIntervalTime: s } = Wn(r);
  let l;
  switch (o) {
    case "CryptoCompare":
    case "CryptoCompareLegacy":
      l = await Jt(e8, t, n[0] - s, n[n.length - 1] + s, o, r);
      break;
    case "CoinGecko": {
      const c = Date.now(), f = [];
      let m = n.length - 1;
      if (!("disableMinutelyData" in i ? !!i.disableMinutelyData : false) && c - n[n.length - 1] < Dt - 15 * dt) {
        const v = Dt - 15 * dt - (c - n[n.length - 1]), { chunk: _, searchEndIndex: b } = ai(n, m, v, 10 * dt);
        f.push(_), m = b;
      }
      for (; m >= 0; ) {
        const { chunk: v, searchEndIndex: _ } = ai(n, m, 90 * Dt, 1.5 * bo);
        f.push(v), m = _;
      }
      const y = f.map(({ start: v, end: _ }) => Jt(e8, t, v, _, o));
      l = (await Promise.all(y)).reduce((v, _) => [..._, ...v], []).sort((v, _) => v[0] - _[0]);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${o}`);
  }
  if (!l.length) return a;
  let u = 0, h = 0;
  const d = Math.max(2 * Dt, 2 * s);
  for (; u < n.length; ) {
    const c = n[u];
    for (; h < l.length && l[h][0] < c; ) ++h;
    if (h === 0 || h === l.length) {
      const f = l[Math.min(h, l.length - 1)];
      Math.abs(c - f[0]) < d && c <= Date.now() && a.set(c, f[1]);
    } else {
      const f = l[h - 1], m = l[h], g = m[0] - f[0];
      if (g < d) {
        const y = m[1] - f[1], v = f[1] + y * ((c - f[0]) / g);
        a.set(c, v);
      }
    }
    ++u;
  }
  return a;
}
function Wn(e8) {
  const t = e8.interval || "hours", n = e8.aggregate || 1, o = { minutes: dt, hours: bo, days: Dt }[t] * n;
  return { interval: t, aggregate: n, aggregatedIntervalTime: o };
}
function ai(e8, t, n, o) {
  n -= 2 * o;
  const i = e8[t];
  let a = i, r = t - 1;
  for (; r >= 0 && i - e8[r] < n; ) a = e8[r], --r;
  return { searchEndIndex: r, chunk: { start: a - o, end: i + o } };
}
const ri = { second: 20, minute: 300, hour: 3e3 }, Au = { parallel: 1 }, si = { CryptoCompare: new Gt(ri, 150), CryptoCompareLegacy: new Gt(ri, 150), CoinGecko: new Gt(Au), unlimited: new Gt({}) };
async function Ue(e8, t, n) {
  var _a2;
  let o;
  typeof t == "object" ? o = t : n = t;
  const i = n ? si[n] : si.unlimited;
  let a = null;
  do {
    let r;
    try {
      const d = (o == null ? void 0 : o.headers) instanceof Headers || Array.isArray(o == null ? void 0 : o.headers) ? o.headers : Object.entries((o == null ? void 0 : o.headers) || {}), c = () => fetch(e8, { ...o, headers: [...d, ...Mu] });
      r = await i.schedule(c);
    } catch (d) {
      console.info("FiatApi failed to fetch. Retrying...", d), i.pause(2e4);
      continue;
    }
    const s = r.body ? await r.json() : null;
    let l, u, h;
    if (je(s) && ("Err" in s && je(s.Err) && "type" in s.Err ? (l = s.Err, u = l.type, h = l.message) : "Response" in s && s.Response === "Error" && (l = s, u = l.Type, h = l.Message)), l && u === 99) {
      console.info(`FiatApi hit CryptoCompare rate limit: ${h}. Retrying...`);
      const d = "Cooldown" in l && l.Cooldown ? l.Cooldown : Number.parseInt(((_a2 = h == null ? void 0 : h.match(/\d+ seconds?/)) == null ? void 0 : _a2[0]) || "", 10), c = "RateLimit" in l ? l.RateLimit : "other_info" in l ? l.other_info : void 0, f = je(c) && "calls_made" in c && je(c.calls_made) && "max_calls" in c && je(c.max_calls) && ["month", "day", "hour", "minute", "second"].every((m) => typeof c.calls_made[m] == "number" && typeof c.max_calls[m] == "number") ? c : void 0;
      if (d) i.pause(d * 1e3);
      else if (f) {
        const m = f.max_calls, g = f.calls_made;
        i.setUsages(g, "increase-only"), (m.day && g.day > m.day || m.month && g.month > m.month) && (m.parallel = 1), delete m.day, delete m.month, i.setRateLimits(m);
      } else {
        console.error("FiatApi got unexpected CryptoCompare rate limit response", s);
        const m = i.getRateLimits(), g = m.minute && m.second ? dt / (m.minute / m.second) : 4e3;
        i.pause(g);
      }
      continue;
    }
    if (u) throw new Error(`FiatApi got CryptoCompare error ${u}: ${h}`, { cause: l });
    if (r.status === 429) {
      console.info(`FiatApi hit ${n || ""} rate limit. Retrying...`), i.pause(15e3);
      continue;
    }
    if (!r.ok) throw new Error(`FiatApi failed to fetch: ${r.status} - ${r.statusText}`);
    if ((n === "CryptoCompare" || n === "CryptoCompareLegacy") && i.getRateLimits().parallel) {
      const d = i.getRateLimits();
      delete d.parallel, i.setRateLimits(d);
    }
    a = s;
  } while (!a);
  return a;
}
function je(e8) {
  return !!e8 && typeof e8 == "object";
}
function pt(e8, t, n) {
  return { CryptoCompare: xu, CryptoCompareLegacy: { current: wu, historic: Su }[n], CoinGecko: ku }[t].includes(e8);
}
function Eu(e8) {
  return Tu.includes(e8);
}
function Da(e8, t, n) {
  return Eu(e8) && !pt(e8, t, n);
}
function Pu(e8, t) {
  return pt(e8, t, "historic") || xn.includes(e8);
}
async function Nu(e8) {
  const t = [], n = xn.filter((a) => e8.includes(a));
  if (n.length) for (const a of n) t.push(Ra(a, Date.now()).then((r) => ({ [a]: Object.values(r)[0] })));
  const o = Sa.filter((a) => e8.includes(a));
  return o.length && t.push(Ue("https://firestore.googleapis.com/v1/projects/checkout-service/databases/(default)/documents/exchangerates/rates").then((a) => {
    const r = Lu(a);
    return o.reduce((s, l) => ({ ...s, [l]: r[l] }), {});
  })), (await Promise.all(t)).reduce((a, r) => ({ ...a, ...r }));
}
async function Ra(e8, t, n = t) {
  if (!xn.includes(e8)) throw new Error(`Unsupported bridgeable currency for historic rates: ${e8}`);
  const o = ka[e8], i = qn(t, o), a = n === t ? i : qn(n, o);
  return Ue(`https://usd-crc-historic-rate.deno.dev/api/rates/${i}/${a}`);
}
function qn(e8, t) {
  const o = { "America/Costa_Rica": -6 }[t];
  if (o === void 0) throw new Error(`Unsupported timezone ${t}`);
  const i = new Date(e8);
  return i.setHours(i.getHours() + o), i.toISOString().split("T")[0];
}
function Lu(e8) {
  const t = Bu(e8);
  if (!("rates" in t)) throw new Error("Invalid FirebaseResponse");
  const n = {};
  for (const [o, i] of Object.entries(t.rates)) {
    if (typeof i != "number") throw new Error("Invalid FirebaseResponse");
    n[o.toLowerCase()] = i;
  }
  return n;
}
function Bu(e8) {
  const t = {};
  for (const [n, o] of Object.entries(e8.fields)) t[n] = Iu(o);
  return t;
}
function Iu(e8) {
  if ("mapValue" in e8) {
    const t = {};
    for (const [n, o] of Object.entries(e8.mapValue.fields)) t[n] = On(o);
    return t;
  }
  return "arrayValue" in e8 ? e8.arrayValue.values.map((t) => On(t)) : On(e8);
}
function On(e8) {
  if ("doubleValue" in e8) return e8.doubleValue;
  if ("integerValue" in e8) return parseInt(e8.integerValue, 10);
  if ("stringValue" in e8) return e8.stringValue;
  if ("booleanValue" in e8) return e8.booleanValue;
  if ("nullValue" in e8) return null;
  throw new Error("Invalid FirebaseRawPrimitive");
}
const _me = class _me {
  constructor(t, n, o, i) {
    __publicField(this, "code");
    __publicField(this, "symbol");
    __publicField(this, "name");
    __publicField(this, "decimals");
    __publicField(this, "locale");
    if (!_me.CURRENCY_CODE_REGEX.test(t)) throw new Error(`Invalid currency code ${t}`);
    let a, r;
    typeof n == "number" ? a = n : typeof n == "string" ? r = n : typeof n == "object" && ({ decimals: a, name: o, symbol: i, locale: r } = n), this.code = t.toUpperCase();
    const s = this.code.substring(0, 2), l = typeof globalThis.navigator < "u" && typeof globalThis.navigator.language == "string", u = [...r ? [r] : [], ...l ? [`${globalThis.navigator.language.substring(0, 2)}-${s}`] : [], ...l ? [globalThis.navigator.language] : []];
    let h = "DisplayNames" in Intl;
    [this.locale] = h ? Intl.DisplayNames.supportedLocalesOf(u) : Intl.NumberFormat.supportedLocalesOf(u), h && !this.locale && (h = false, [this.locale] = Intl.NumberFormat.supportedLocalesOf(u));
    const d = a === void 0 && o === void 0 && i === void 0, c = `${this.code} ${this.locale}`, f = _me.CACHED_AUTO_GENERATED_CURRENCY_INFOS[c];
    if (d && f) return f;
    let m;
    const g = { style: "currency", currency: t, useGrouping: false, numberingSystem: "latn" };
    if (o !== void 0) this.name = o;
    else if (f) this.name = f.name;
    else if (h) try {
      this.name = new Intl.DisplayNames(this.locale, { type: "currency" }).of(t);
    } catch {
    }
    if (this.name || (m = _me.failsafeNumberToLocaleString(0, this.locale, { currencyDisplay: "name", ...g }), this.name = m ? m.replace(_me.NUMBER_REGEX, "").trim() : this.code), i !== void 0) this.symbol = i;
    else if (f) this.symbol = f.symbol;
    else {
      const y = _me.EXTRA_SYMBOLS[this.code];
      if (typeof y == "string") this.symbol = y;
      else if (Array.isArray(y)) {
        const v = this.locale === r && _me.RIGHT_TO_LEFT_DETECTION_REGEX.test(this.name);
        this.symbol = y[v ? 1 : 0];
      } else {
        const v = [...r ? [r] : [], `en-${s}`, "en"], _ = _me.failsafeNumberToLocaleString(0, v, { currencyDisplay: "narrowSymbol", ...g }) || _me.failsafeNumberToLocaleString(0, v, { currencyDisplay: "symbol", ...g });
        _ ? (m = _, this.symbol = m.replace(_me.NUMBER_REGEX, "").trim()) : this.symbol = this.code;
      }
    }
    if (a !== void 0) this.decimals = a;
    else if (f) this.decimals = f.decimals;
    else if (_me.CUSTOM_DECIMAL_LESS_CURRENCIES.has(this.code)) this.decimals = 0;
    else if (m = m || _me.failsafeNumberToLocaleString(0, "en", { currencyDisplay: "code", ...g }), m) {
      const y = m.match(_me.NUMBER_REGEX);
      this.decimals = y ? (y[1] || "").length : 2;
    } else this.decimals = 2;
    d && (_me.CACHED_AUTO_GENERATED_CURRENCY_INFOS[c] = this);
  }
  static failsafeNumberToLocaleString(t, n, o) {
    try {
      return t.toLocaleString(n, o);
    } catch {
      return null;
    }
  }
};
__publicField(_me, "EXTRA_SYMBOLS", { AED: ["DH", "\u062F.\u0625"], AFN: ["Afs", "\u060B"], ALL: "L", ANG: "\u0192", AWG: "\u0192", BGN: "\u043B\u0432.", BHD: ["BD", ".\u062F.\u0628"], BTN: "Nu.", BYN: "Br", CDF: "Fr", CHF: "Fr.", CVE: "$", DJF: "Fr", DZD: ["DA", "\u062F.\u062C"], EGP: ["\xA3", "\u062C.\u0645"], ETB: "Br", HTG: "G", IQD: ["ID", "\u0639.\u062F"], IRR: ["RI", "\uFDFC"], JOD: ["JD", "\u062F.\u0627"], KES: "Sh", KGS: "\u20C0", KWD: ["KD", "\u062F.\u0643"], LBP: ["LL", "\u0644.\u0644"], LSL: "M", LYD: ["LD", "\u0644.\u062F"], MAD: ["DH", "\u062F\u0631\u0647\u0645"], MDL: "L", MKD: "\u0434\u0435\u043D", MMK: "Ks", MRU: "UM", MVR: ["Rf", ".\u0783"], MZN: "MT", NPR: "\u0930\u0941", OMR: ["R.O.", "\u0631.\u0639."], PAB: "B/.", PEN: "S/", QAR: ["QR", "\u0631.\u0642"], RSD: "\u0434\u0438\u043D.", SAR: ["SR", "\uFDFC"], SDG: ["\xA3SD", "\u062C.\u0633."], SLE: "Le", SOS: "Sh.", TJS: "SM", TMT: "m", TND: ["DT", "\u062F.\u062A"], UZS: "\u0441\u0443\u043C", VED: "Bs.D", VES: "Bs.S", WST: "T", XPF: "\u20A3", YER: ["RI", "\uFDFC"], ZWG: "ZiG", ZWL: "Z$" });
__publicField(_me, "CUSTOM_DECIMAL_LESS_CURRENCIES", /* @__PURE__ */ new Set(["AMD", "AOA", "ARS", "BDT", "BTN", "CDF", "COP", "CRC", "CVE", "CZK", "DOP", "DZD", "GMD", "GYD", "HUF", "IDR", "INR", "JMD", "KES", "KGS", "KHR", "KZT", "LKR", "MAD", "MKD", "MNT", "MOP", "MWK", "MXN", "NGN", "NOK", "NPR", "PHP", "PKR", "RUB", "SEK", "TWD", "TZS", "UAH", "UYU", "UZS", "VES"]));
__publicField(_me, "CACHED_AUTO_GENERATED_CURRENCY_INFOS", {});
__publicField(_me, "CURRENCY_CODE_REGEX", /[A-Z]{3}/i);
__publicField(_me, "NUMBER_REGEX", /\d+(?:\D(\d+))?/);
__publicField(_me, "RIGHT_TO_LEFT_DETECTION_REGEX", /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/);
let me = _me;
const Aa = ["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CRC", "CZK", "DKK", "EUR", "GBP", "GMD", "GTQ", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "XOF", "ZAR"], Ou = Aa.map((e8) => he[e8]);
function $u() {
  const e8 = new RegExp("^(\\w+)(?:-\\w{3,4})*(?:-(\\w{2})\\b)?"), n = yt().value.match(e8);
  if (!n) return he.USD;
  const [, o, i] = n;
  if (i) {
    const r = new RegExp(`^${i}`, "i"), s = Ou.find((u) => r.test(u));
    if (s) return s;
    if (/^(?:AT|BE|CY|EE|FI|FR|DE|GR|HR|IE|IT|LV|LT|LU|MT|NL|PT|SK|SI|ES)$/i.test(i)) return he.EUR;
  }
  return o && /^(?:de|fr|nl|el|et|fi|sv|ga|hr|it|lv|lt|lb|mt|sk|sl)$/i.test(o) ? he.EUR : he.USD;
}
function $t() {
  const e8 = ms("user-currency", $u(), void 0, { mergeDefaults: false }), t = yt(), n = P(() => new me(e8.value, t.value));
  return { currency: e8, currencyInfo: n };
}
const Uu = { "f-text": "12/16", "text-current": "", "nq-label": "" }, Hu = { flex: "~ items-center gap-8", "px-8": "", "pb-6": "", "pt-13": "", "w-full": "" }, Fu = { text: "f-sm white/95", "lh-none": "" }, Vu = $({ __name: "CurrencySelector", props: { modelValue: { default: he.USD }, modelModifiers: {} }, emits: ["update:modelValue"], setup(e8) {
  const t = na(e8, "modelValue"), { options: n } = o();
  function o() {
    const a = { AED: "i-nimiq-flags:ae-hexagon", AUD: "i-nimiq-flags:au-hexagon", ARS: "i-nimiq-flags:ar-hexagon", BRL: "i-nimiq-flags:br-hexagon", CAD: "i-nimiq-flags:ca-hexagon", CHF: "i-nimiq-flags:ch-hexagon", CLP: "i-nimiq-flags:cl-hexagon", CNY: "i-nimiq-flags:cn-hexagon", CRC: "i-nimiq-flags:cr-hexagon", CZK: "i-nimiq-flags:cz-hexagon", DKK: "i-nimiq-flags:dk-hexagon", EUR: "i-nimiq-flags:eu-hexagon", GBP: "i-nimiq-flags:gb-hexagon", GMD: "i-nimiq-flags:gm-hexagon", GTQ: "i-nimiq-flags:gt-hexagon", HKD: "i-nimiq-flags:hk-hexagon", HUF: "i-nimiq-flags:hu-hexagon", IDR: "i-nimiq-flags:id-hexagon", ILS: "i-nimiq-flags:il-hexagon", INR: "i-nimiq-flags:in-hexagon", JPY: "i-nimiq-flags:jp-hexagon", KRW: "i-nimiq-flags:kr-hexagon", MXN: "i-nimiq-flags:mx-hexagon", MYR: "i-nimiq-flags:my-hexagon", NGN: "i-nimiq-flags:ng-hexagon", NOK: "i-nimiq-flags:no-hexagon", NZD: "i-nimiq-flags:nz-hexagon", PHP: "i-nimiq-flags:ph-hexagon", PKR: "i-nimiq-flags:pk-hexagon", PLN: "i-nimiq-flags:pl-hexagon", RUB: "i-nimiq-flags:ru-hexagon", SEK: "i-nimiq-flags:se-hexagon", SGD: "i-nimiq-flags:sg-hexagon", THB: "i-nimiq-flags:th-hexagon", TRY: "i-nimiq-flags:tr-hexagon", TWD: "i-nimiq-flags:tw-hexagon", UAH: "i-nimiq-flags:ua-hexagon", USD: "i-nimiq-flags:um-hexagon", VND: "i-nimiq-flags:vn-hexagon", XOF: "i-nimiq-flags:sn-hexagon", ZAR: "i-nimiq-flags:za-hexagon" };
    return { options: Aa.map((s) => ({ value: s, label: s.toLocaleLowerCase(), icon: a[s] })) };
  }
  function i(a) {
    return t.value === a ? "" : a;
  }
  return (a, r) => {
    const s = Al, l = ll, u = kl, h = Dl, d = Gl, c = Yl, f = Vl, m = Nl, g = El, y = bl, v = xl, _ = Rl, b = ml;
    return k(), B(b, { modelValue: t.value, "onUpdate:modelValue": r[0] || (r[0] = (T) => t.value = T), relative: "", bg: "transparent hocus:neutral-200" }, { default: A(() => [D(l, { "w-max": "", "inline-flex": "~ items-center justify-between gap-5" }, { default: A(() => [D(s, { flex: "~ gap-3 items-center", "px-6": "", "py-3": "", "rounded-4": "", "bg-transparent": "", "transition-colors": "" }, { default: A(() => [W(a.$slots, "trigger", cn(ea({ selectedCurrency: t.value })), () => [w("span", Uu, de(t.value.toLocaleUpperCase()), 1), r[1] || (r[1] = w("div", { "op-60": "", "size-7": "", "i-nimiq:triangle-down": "" }, null, -1))])]), _: 3 })]), _: 3 }), D(_, null, { default: A(() => [D(v, { position: "popper", "will-change": "[opacity,transform]", "reka-top:animate-slidedownandfade": "", "reka-bottom:animate-slide-up-and-fade": "", "font-normal": "", "overscroll-none": "", "max-h-256": "", "w-168": "", "top-0": "", absolute: "", "z-10": "", "of-hidden": "" }, { default: A(() => [D(g, { outline: "1.5 ~ offset--1.5 white/10", "px-4": "", "pb-4": "", "rounded-4": "", "bg-neutral": "", flex: "~ col" }, { default: A(() => [w("label", Hu, [r[2] || (r[2] = w("div", { "text-neutral-800": "", "i-nimiq:magnifying-glass": "" }, null, -1)), D(u, { placeholder: "Search", text: "16 white", outline: "1.5! ~ blue", "lh-none": "", "px-3": "", "py-2": "", "rounded-4": "", "bg-transparent": "", "flex-1": "", "w-full": "", "display-value": i })]), D(m, { "bg-neutral": "", "flex-1": "", "h-full": "", relative: "", "of-hidden": "", "var:scrollbar-size:10px": "" }, { default: A(() => [r[3] || (r[3] = w("div", { "h-16": "", "w-full": "", "top-0": "", absolute: "", "z-2": "", "bg-gradient": "to-t from-transparent to-neutral" }, null, -1)), D(d, { "py-16": "", "h-218": "", "w-full": "" }, { default: A(() => [(k(true), G(Ae, null, et(p(n), (T) => (k(), B(h, { key: T.value, value: T.value, flex: "~ items-center gap-8", bg: "hocus:white/10 reka-active:white/10", "p-8": "", "rounded-2": "", "transition-colors": "" }, { default: A(() => [w("div", { class: ve(T.icon), "shrink-0": "", "size-20": "" }, null, 2), w("span", Fu, de(T.value.toLocaleUpperCase()), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }), D(f, { flex: "~", bg: "neutral-900", "p-2": "", "w-10": "", "select-none": "", "inset-y-0": "", "z-20": "", "touch-none": "", orientation: "vertical" }, { default: A(() => [D(c, { "rounded-5": "", "bg-neutral-700": "", "flex-1": "", "content-empty": "", relative: "", before: "absolute top--50% left--50% -translate-x--50% -translate-y--50% size-full min-h-40 min-w-40" })]), _: 1 }), r[4] || (r[4] = w("div", { "h-16": "", "w-full": "", "bottom-0": "", absolute: "", "z-2": "", "bg-gradient": "to-b from-transparent to-neutral" }, null, -1))]), _: 1, __: [3, 4] })]), _: 1 }), D(y)]), _: 1 })]), _: 1 })]), _: 3 }, 8, ["modelValue"]);
  };
} }), Ea = Object.assign(Vu, { __name: "CurrencySelector" });
function Pa(e8) {
  return e8 === null ? NaN : +e8;
}
const Yu = po(la), wn = Yu.right;
po(Pa).center;
function Gu(e8, t) {
  let n, o;
  for (const i of e8) i != null && (n === void 0 ? i >= i && (n = o = i) : (n > i && (n = i), o < i && (o = i)));
  return [n, o];
}
class li extends Map {
  constructor(t, n = Wu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [o, i] of t) this.set(o, i);
  }
  get(t) {
    return super.get(ui(this, t));
  }
  has(t) {
    return super.has(ui(this, t));
  }
  set(t, n) {
    return super.set(zu(this, t), n);
  }
  delete(t) {
    return super.delete(Ku(this, t));
  }
}
function ui({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) ? e8.get(o) : n;
}
function zu({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) ? e8.get(o) : (e8.set(o, n), n);
}
function Ku({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) && (n = e8.get(o), e8.delete(o)), n;
}
function Wu(e8) {
  return e8 !== null && typeof e8 == "object" ? e8.valueOf() : e8;
}
const qu = Math.sqrt(50), ju = Math.sqrt(10), Zu = Math.sqrt(2);
function en(e8, t, n) {
  const o = (t - e8) / Math.max(0, n), i = Math.floor(Math.log10(o)), a = o / Math.pow(10, i), r = a >= qu ? 10 : a >= ju ? 5 : a >= Zu ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / r, s = Math.round(e8 * u), l = Math.round(t * u), s / u < e8 && ++s, l / u > t && --l, u = -u) : (u = Math.pow(10, i) * r, s = Math.round(e8 / u), l = Math.round(t / u), s * u < e8 && ++s, l * u > t && --l), l < s && 0.5 <= n && n < 2 ? en(e8, t, n * 2) : [s, l, u];
}
function jn(e8, t, n) {
  if (t = +t, e8 = +e8, n = +n, !(n > 0)) return [];
  if (e8 === t) return [e8];
  const o = t < e8, [i, a, r] = o ? en(t, e8, n) : en(e8, t, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (o) if (r < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -r;
  else for (let u = 0; u < s; ++u) l[u] = (a - u) * r;
  else if (r < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -r;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * r;
  return l;
}
function Zn(e8, t, n) {
  return t = +t, e8 = +e8, n = +n, en(e8, t, n)[2];
}
function Xn(e8, t, n) {
  t = +t, e8 = +e8, n = +n;
  const o = t < e8, i = o ? Zn(t, e8, n) : Zn(e8, t, n);
  return (o ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Xu(e8, t, n = Pa) {
  if (!(!(o = e8.length) || isNaN(t = +t))) {
    if (t <= 0 || o < 2) return +n(e8[0], 0, e8);
    if (t >= 1) return +n(e8[o - 1], o - 1, e8);
    var o, i = (o - 1) * t, a = Math.floor(i), r = +n(e8[a], a, e8), s = +n(e8[a + 1], a + 1, e8);
    return r + (s - r) * (i - a);
  }
}
function* Qu(e8) {
  for (const t of e8) yield* t;
}
function Ju(e8) {
  return Array.from(Qu(e8));
}
function ec(e8, t, n) {
  e8 = +e8, t = +t, n = (i = arguments.length) < 2 ? (t = e8, e8 = 0, 1) : i < 3 ? 1 : +n;
  for (var o = -1, i = Math.max(0, Math.ceil((t - e8) / n)) | 0, a = new Array(i); ++o < i; ) a[o] = e8 + o * n;
  return a;
}
function xo(e8, t) {
  return e8 = +e8, t = +t, function(n) {
    return Math.round(e8 * (1 - n) + t * n);
  };
}
function tc(e8, t) {
  t === void 0 && (t = e8, e8 = pn);
  for (var n = 0, o = t.length - 1, i = t[0], a = new Array(o < 0 ? 0 : o); n < o; ) a[n] = e8(i, i = t[++n]);
  return function(r) {
    var s = Math.max(0, Math.min(o - 1, Math.floor(r *= o)));
    return a[s](r - s);
  };
}
const ci = (e8) => +e8;
var Z;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(Z || (Z = {}));
function Ee(e8, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e8);
      break;
    default:
      this.range(t).domain(e8);
      break;
  }
  return this;
}
function Na(e8, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e8 == "function" ? this.interpolator(e8) : this.range(e8);
      break;
    }
    default: {
      this.domain(e8), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const di = Symbol("implicit");
function wo() {
  var e8 = new li(), t = [], n = [], o = di;
  function i(a) {
    let r = e8.get(a);
    if (r === void 0) {
      if (o !== di) return o;
      e8.set(a, r = t.push(a) - 1);
    }
    return n[r % n.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e8 = new li();
    for (const r of a) e8.has(r) || e8.set(r, t.push(r) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (n = Array.from(a), i) : n.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (o = a, i) : o;
  }, i.copy = function() {
    return wo(t, n).unknown(o);
  }, Ee.apply(i, arguments), i;
}
function So() {
  var e8 = wo().unknown(void 0), t = e8.domain, n = e8.range, o = 0, i = 1, a, r, s = false, l = 0, u = 0, h = 0.5;
  delete e8.unknown;
  function d() {
    var c = t().length, f = i < o, m = f ? i : o, g = f ? o : i;
    a = (g - m) / Math.max(1, c - l + u * 2), s && (a = Math.floor(a)), m += (g - m - a * (c - l)) * h, r = a * (1 - l), s && (m = Math.round(m), r = Math.round(r));
    var y = ec(c).map(function(v) {
      return m + a * v;
    });
    return n(f ? y.reverse() : y);
  }
  return e8.domain = function(c) {
    return arguments.length ? (t(c), d()) : t();
  }, e8.range = function(c) {
    return arguments.length ? ([o, i] = c, o = +o, i = +i, d()) : [o, i];
  }, e8.rangeRound = function(c) {
    return [o, i] = c, o = +o, i = +i, s = true, d();
  }, e8.bandwidth = function() {
    return r;
  }, e8.step = function() {
    return a;
  }, e8.round = function(c) {
    return arguments.length ? (s = !!c, d()) : s;
  }, e8.padding = function(c) {
    return arguments.length ? (l = Math.min(1, u = +c), d()) : l;
  }, e8.paddingInner = function(c) {
    return arguments.length ? (l = Math.min(1, c), d()) : l;
  }, e8.paddingOuter = function(c) {
    return arguments.length ? (u = +c, d()) : u;
  }, e8.align = function(c) {
    return arguments.length ? (h = Math.max(0, Math.min(1, c)), d()) : h;
  }, e8.copy = function() {
    return So(t(), [o, i]).round(s).paddingInner(l).paddingOuter(u).align(h);
  }, Ee.apply(d(), arguments);
}
function La(e8) {
  var t = e8.copy;
  return e8.padding = e8.paddingOuter, delete e8.paddingInner, delete e8.paddingOuter, e8.copy = function() {
    return La(t());
  }, e8;
}
function nc() {
  return La(So.apply(null, arguments).paddingInner(1));
}
function oc(e8) {
  return function() {
    return e8;
  };
}
function Qn(e8) {
  return +e8;
}
var hi = [0, 1];
function _e(e8) {
  return e8;
}
function Jn(e8, t) {
  return (t -= e8 = +e8) ? function(n) {
    return (n - e8) / t;
  } : oc(isNaN(t) ? NaN : 0.5);
}
function ic(e8, t) {
  var n;
  return e8 > t && (n = e8, e8 = t, t = n), function(o) {
    return Math.max(e8, Math.min(t, o));
  };
}
function ac(e8, t, n) {
  var o = e8[0], i = e8[1], a = t[0], r = t[1];
  return i < o ? (o = Jn(i, o), a = n(r, a)) : (o = Jn(o, i), a = n(a, r)), function(s) {
    return a(o(s));
  };
}
function rc(e8, t, n) {
  var o = Math.min(e8.length, t.length) - 1, i = new Array(o), a = new Array(o), r = -1;
  for (e8[o] < e8[0] && (e8 = e8.slice().reverse(), t = t.slice().reverse()); ++r < o; ) i[r] = Jn(e8[r], e8[r + 1]), a[r] = n(t[r], t[r + 1]);
  return function(s) {
    var l = wn(e8, s, 1, o) - 1;
    return a[l](i[l](s));
  };
}
function Ut(e8, t) {
  return t.domain(e8.domain()).range(e8.range()).interpolate(e8.interpolate()).clamp(e8.clamp()).unknown(e8.unknown());
}
function Sn() {
  var e8 = hi, t = hi, n = pn, o, i, a, r = _e, s, l, u;
  function h() {
    var c = Math.min(e8.length, t.length);
    return r !== _e && (r = ic(e8[0], e8[c - 1])), s = c > 2 ? rc : ac, l = u = null, d;
  }
  function d(c) {
    return c == null || isNaN(c = +c) ? a : (l || (l = s(e8.map(o), t, n)))(o(r(c)));
  }
  return d.invert = function(c) {
    return r(i((u || (u = s(t, e8.map(o), Ms)))(c)));
  }, d.domain = function(c) {
    return arguments.length ? (e8 = Array.from(c, Qn), h()) : e8.slice();
  }, d.range = function(c) {
    return arguments.length ? (t = Array.from(c), h()) : t.slice();
  }, d.rangeRound = function(c) {
    return t = Array.from(c), n = xo, h();
  }, d.clamp = function(c) {
    return arguments.length ? (r = c ? true : _e, h()) : r !== _e;
  }, d.interpolate = function(c) {
    return arguments.length ? (n = c, h()) : n;
  }, d.unknown = function(c) {
    return arguments.length ? (a = c, d) : a;
  }, function(c, f) {
    return o = c, i = f, h();
  };
}
function Ba() {
  return Sn()(_e, _e);
}
function sc(e8) {
  return Math.abs(e8 = Math.round(e8)) >= 1e21 ? e8.toLocaleString("en").replace(/,/g, "") : e8.toString(10);
}
function tn(e8, t) {
  if ((n = (e8 = t ? e8.toExponential(t - 1) : e8.toExponential()).indexOf("e")) < 0) return null;
  var n, o = e8.slice(0, n);
  return [o.length > 1 ? o[0] + o.slice(2) : o, +e8.slice(n + 1)];
}
function mt(e8) {
  return e8 = tn(Math.abs(e8)), e8 ? e8[1] : NaN;
}
function lc(e8, t) {
  return function(n, o) {
    for (var i = n.length, a = [], r = 0, s = e8[0], l = 0; i > 0 && s > 0 && (l + s + 1 > o && (s = Math.max(1, o - l)), a.push(n.substring(i -= s, i + s)), !((l += s + 1) > o)); ) s = e8[r = (r + 1) % e8.length];
    return a.reverse().join(t);
  };
}
function uc(e8) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e8[+n];
    });
  };
}
var cc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function It(e8) {
  if (!(t = cc.exec(e8))) throw new Error("invalid format: " + e8);
  var t;
  return new ko({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
It.prototype = ko.prototype;
function ko(e8) {
  this.fill = e8.fill === void 0 ? " " : e8.fill + "", this.align = e8.align === void 0 ? ">" : e8.align + "", this.sign = e8.sign === void 0 ? "-" : e8.sign + "", this.symbol = e8.symbol === void 0 ? "" : e8.symbol + "", this.zero = !!e8.zero, this.width = e8.width === void 0 ? void 0 : +e8.width, this.comma = !!e8.comma, this.precision = e8.precision === void 0 ? void 0 : +e8.precision, this.trim = !!e8.trim, this.type = e8.type === void 0 ? "" : e8.type + "";
}
ko.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function dc(e8) {
  e: for (var t = e8.length, n = 1, o = -1, i; n < t; ++n) switch (e8[n]) {
    case ".":
      o = i = n;
      break;
    case "0":
      o === 0 && (o = n), i = n;
      break;
    default:
      if (!+e8[n]) break e;
      o > 0 && (o = 0);
      break;
  }
  return o > 0 ? e8.slice(0, o) + e8.slice(i + 1) : e8;
}
var Ia;
function hc(e8, t) {
  var n = tn(e8, t);
  if (!n) return e8 + "";
  var o = n[0], i = n[1], a = i - (Ia = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, r = o.length;
  return a === r ? o : a > r ? o + new Array(a - r + 1).join("0") : a > 0 ? o.slice(0, a) + "." + o.slice(a) : "0." + new Array(1 - a).join("0") + tn(e8, Math.max(0, t + a - 1))[0];
}
function fi(e8, t) {
  var n = tn(e8, t);
  if (!n) return e8 + "";
  var o = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + o : o.length > i + 1 ? o.slice(0, i + 1) + "." + o.slice(i + 1) : o + new Array(i - o.length + 2).join("0");
}
const pi = { "%": (e8, t) => (e8 * 100).toFixed(t), b: (e8) => Math.round(e8).toString(2), c: (e8) => e8 + "", d: sc, e: (e8, t) => e8.toExponential(t), f: (e8, t) => e8.toFixed(t), g: (e8, t) => e8.toPrecision(t), o: (e8) => Math.round(e8).toString(8), p: (e8, t) => fi(e8 * 100, t), r: fi, s: hc, X: (e8) => Math.round(e8).toString(16).toUpperCase(), x: (e8) => Math.round(e8).toString(16) };
function mi(e8) {
  return e8;
}
var gi = Array.prototype.map, vi = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function fc(e8) {
  var t = e8.grouping === void 0 || e8.thousands === void 0 ? mi : lc(gi.call(e8.grouping, Number), e8.thousands + ""), n = e8.currency === void 0 ? "" : e8.currency[0] + "", o = e8.currency === void 0 ? "" : e8.currency[1] + "", i = e8.decimal === void 0 ? "." : e8.decimal + "", a = e8.numerals === void 0 ? mi : uc(gi.call(e8.numerals, String)), r = e8.percent === void 0 ? "%" : e8.percent + "", s = e8.minus === void 0 ? "\u2212" : e8.minus + "", l = e8.nan === void 0 ? "NaN" : e8.nan + "";
  function u(d) {
    d = It(d);
    var c = d.fill, f = d.align, m = d.sign, g = d.symbol, y = d.zero, v = d.width, _ = d.comma, b = d.precision, T = d.trim, C = d.type;
    C === "n" ? (_ = true, C = "g") : pi[C] || (b === void 0 && (b = 12), T = true, C = "g"), (y || c === "0" && f === "=") && (y = true, c = "0", f = "=");
    var M = g === "$" ? n : g === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", E = g === "$" ? o : /[%p]/.test(C) ? r : "", j = pi[C], V = /[defgprs%]/.test(C);
    b = b === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function J(L) {
      var O = M, z = E, U, Y, be;
      if (C === "c") z = j(L) + z, L = "";
      else {
        L = +L;
        var Te = L < 0 || 1 / L < 0;
        if (L = isNaN(L) ? l : j(Math.abs(L), b), T && (L = dc(L)), Te && +L == 0 && m !== "+" && (Te = false), O = (Te ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + O, z = (C === "s" ? vi[8 + Ia / 3] : "") + z + (Te && m === "(" ? ")" : ""), V) {
          for (U = -1, Y = L.length; ++U < Y; ) if (be = L.charCodeAt(U), 48 > be || be > 57) {
            z = (be === 46 ? i + L.slice(U + 1) : L.slice(U)) + z, L = L.slice(0, U);
            break;
          }
        }
      }
      _ && !y && (L = t(L, 1 / 0));
      var Ce = O.length + L.length + z.length, ce = Ce < v ? new Array(v - Ce + 1).join(c) : "";
      switch (_ && y && (L = t(ce + L, ce.length ? v - z.length : 1 / 0), ce = ""), f) {
        case "<":
          L = O + L + z + ce;
          break;
        case "=":
          L = O + ce + L + z;
          break;
        case "^":
          L = ce.slice(0, Ce = ce.length >> 1) + O + L + z + ce.slice(Ce);
          break;
        default:
          L = ce + O + L + z;
          break;
      }
      return a(L);
    }
    return J.toString = function() {
      return d + "";
    }, J;
  }
  function h(d, c) {
    var f = u((d = It(d), d.type = "f", d)), m = Math.max(-8, Math.min(8, Math.floor(mt(c) / 3))) * 3, g = Math.pow(10, -m), y = vi[8 + m / 3];
    return function(v) {
      return f(g * v) + y;
    };
  }
  return { format: u, formatPrefix: h };
}
var zt, To, Oa;
pc({ thousands: ",", grouping: [3], currency: ["$", ""] });
function pc(e8) {
  return zt = fc(e8), To = zt.format, Oa = zt.formatPrefix, zt;
}
function mc(e8) {
  return Math.max(0, -mt(Math.abs(e8)));
}
function gc(e8, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(mt(t) / 3))) * 3 - mt(Math.abs(e8)));
}
function vc(e8, t) {
  return e8 = Math.abs(e8), t = Math.abs(t) - e8, Math.max(0, mt(t) - mt(e8)) + 1;
}
function _c(e8, t, n, o) {
  var i = Xn(e8, t, n), a;
  switch (o = It(o ?? ",f"), o.type) {
    case "s": {
      var r = Math.max(Math.abs(e8), Math.abs(t));
      return o.precision == null && !isNaN(a = gc(i, r)) && (o.precision = a), Oa(o, r);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(a = vc(i, Math.max(Math.abs(e8), Math.abs(t)))) && (o.precision = a - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(a = mc(i)) && (o.precision = a - (o.type === "%") * 2);
      break;
    }
  }
  return To(o);
}
function it(e8) {
  var t = e8.domain;
  return e8.ticks = function(n) {
    var o = t();
    return jn(o[0], o[o.length - 1], n ?? 10);
  }, e8.tickFormat = function(n, o) {
    var i = t();
    return _c(i[0], i[i.length - 1], n ?? 10, o);
  }, e8.nice = function(n) {
    n == null && (n = 10);
    var o = t(), i = 0, a = o.length - 1, r = o[i], s = o[a], l, u, h = 10;
    for (s < r && (u = r, r = s, s = u, u = i, i = a, a = u); h-- > 0; ) {
      if (u = Zn(r, s, n), u === l) return o[i] = r, o[a] = s, t(o);
      if (u > 0) r = Math.floor(r / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) r = Math.ceil(r * u) / u, s = Math.floor(s * u) / u;
      else break;
      l = u;
    }
    return e8;
  }, e8;
}
function $a() {
  var e8 = Ba();
  return e8.copy = function() {
    return Ut(e8, $a());
  }, Ee.apply(e8, arguments), it(e8);
}
function Ua(e8) {
  var t;
  function n(o) {
    return o == null || isNaN(o = +o) ? t : o;
  }
  return n.invert = n, n.domain = n.range = function(o) {
    return arguments.length ? (e8 = Array.from(o, Qn), n) : e8.slice();
  }, n.unknown = function(o) {
    return arguments.length ? (t = o, n) : t;
  }, n.copy = function() {
    return Ua(e8).unknown(t);
  }, e8 = arguments.length ? Array.from(e8, Qn) : [0, 1], it(n);
}
function Ha(e8, t) {
  e8 = e8.slice();
  var n = 0, o = e8.length - 1, i = e8[n], a = e8[o], r;
  return a < i && (r = n, n = o, o = r, r = i, i = a, a = r), e8[n] = t.floor(i), e8[o] = t.ceil(a), e8;
}
function _i(e8) {
  return Math.log(e8);
}
function yi(e8) {
  return Math.exp(e8);
}
function yc(e8) {
  return -Math.log(-e8);
}
function bc(e8) {
  return -Math.exp(-e8);
}
function xc(e8) {
  return isFinite(e8) ? +("1e" + e8) : e8 < 0 ? 0 : e8;
}
function wc(e8) {
  return e8 === 10 ? xc : e8 === Math.E ? Math.exp : (t) => Math.pow(e8, t);
}
function Sc(e8) {
  return e8 === Math.E ? Math.log : e8 === 10 && Math.log10 || e8 === 2 && Math.log2 || (e8 = Math.log(e8), (t) => Math.log(t) / e8);
}
function bi(e8) {
  return (t, n) => -e8(-t, n);
}
function kc(e8) {
  const t = e8(_i, yi), n = t.domain;
  let o = 10, i, a;
  function r() {
    return i = Sc(o), a = wc(o), n()[0] < 0 ? (i = bi(i), a = bi(a), e8(yc, bc)) : e8(_i, yi), t;
  }
  return t.base = function(s) {
    return arguments.length ? (o = +s, r()) : o;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), r()) : n();
  }, t.ticks = (s) => {
    const l = n();
    let u = l[0], h = l[l.length - 1];
    const d = h < u;
    d && ([u, h] = [h, u]);
    let c = i(u), f = i(h), m, g;
    const y = s == null ? 10 : +s;
    let v = [];
    if (!(o % 1) && f - c < y) {
      if (c = Math.floor(c), f = Math.ceil(f), u > 0) {
        for (; c <= f; ++c) for (m = 1; m < o; ++m) if (g = c < 0 ? m / a(-c) : m * a(c), !(g < u)) {
          if (g > h) break;
          v.push(g);
        }
      } else for (; c <= f; ++c) for (m = o - 1; m >= 1; --m) if (g = c > 0 ? m / a(-c) : m * a(c), !(g < u)) {
        if (g > h) break;
        v.push(g);
      }
      v.length * 2 < y && (v = jn(u, h, y));
    } else v = jn(c, f, Math.min(f - c, y)).map(a);
    return d ? v.reverse() : v;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = o === 10 ? "s" : ","), typeof l != "function" && (!(o % 1) && (l = It(l)).precision == null && (l.trim = true), l = To(l)), s === 1 / 0) return l;
    const u = Math.max(1, o * s / t.ticks().length);
    return (h) => {
      let d = h / a(Math.round(i(h)));
      return d * o < o - 0.5 && (d *= o), d <= u ? l(h) : "";
    };
  }, t.nice = () => n(Ha(n(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function Fa() {
  const e8 = kc(Sn()).domain([1, 10]);
  return e8.copy = () => Ut(e8, Fa()).base(e8.base()), Ee.apply(e8, arguments), e8;
}
function xi(e8) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e8));
  };
}
function wi(e8) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e8;
  };
}
function Tc(e8) {
  var t = 1, n = e8(xi(t), wi(t));
  return n.constant = function(o) {
    return arguments.length ? e8(xi(t = +o), wi(t)) : t;
  }, it(n);
}
function Va() {
  var e8 = Tc(Sn());
  return e8.copy = function() {
    return Ut(e8, Va()).constant(e8.constant());
  }, Ee.apply(e8, arguments);
}
function Si(e8) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e8) : Math.pow(t, e8);
  };
}
function Cc(e8) {
  return e8 < 0 ? -Math.sqrt(-e8) : Math.sqrt(e8);
}
function Mc(e8) {
  return e8 < 0 ? -e8 * e8 : e8 * e8;
}
function Dc(e8) {
  var t = e8(_e, _e), n = 1;
  function o() {
    return n === 1 ? e8(_e, _e) : n === 0.5 ? e8(Cc, Mc) : e8(Si(n), Si(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, o()) : n;
  }, it(t);
}
function Co() {
  var e8 = Dc(Sn());
  return e8.copy = function() {
    return Ut(e8, Co()).exponent(e8.exponent());
  }, Ee.apply(e8, arguments), e8;
}
function Rc() {
  return Co.apply(null, arguments).exponent(0.5);
}
function Ya() {
  var e8 = [], t = [], n = [], o;
  function i() {
    var r = 0, s = Math.max(1, t.length);
    for (n = new Array(s - 1); ++r < s; ) n[r - 1] = Xu(e8, r / s);
    return a;
  }
  function a(r) {
    return r == null || isNaN(r = +r) ? o : t[wn(n, r)];
  }
  return a.invertExtent = function(r) {
    var s = t.indexOf(r);
    return s < 0 ? [NaN, NaN] : [s > 0 ? n[s - 1] : e8[0], s < n.length ? n[s] : e8[e8.length - 1]];
  }, a.domain = function(r) {
    if (!arguments.length) return e8.slice();
    e8 = [];
    for (let s of r) s != null && !isNaN(s = +s) && e8.push(s);
    return e8.sort(la), i();
  }, a.range = function(r) {
    return arguments.length ? (t = Array.from(r), i()) : t.slice();
  }, a.unknown = function(r) {
    return arguments.length ? (o = r, a) : o;
  }, a.quantiles = function() {
    return n.slice();
  }, a.copy = function() {
    return Ya().domain(e8).range(t).unknown(o);
  }, Ee.apply(a, arguments);
}
function Ga() {
  var e8 = 0, t = 1, n = 1, o = [0.5], i = [0, 1], a;
  function r(l) {
    return l != null && l <= l ? i[wn(o, l, 0, n)] : a;
  }
  function s() {
    var l = -1;
    for (o = new Array(n); ++l < n; ) o[l] = ((l + 1) * t - (l - n) * e8) / (n + 1);
    return r;
  }
  return r.domain = function(l) {
    return arguments.length ? ([e8, t] = l, e8 = +e8, t = +t, s()) : [e8, t];
  }, r.range = function(l) {
    return arguments.length ? (n = (i = Array.from(l)).length - 1, s()) : i.slice();
  }, r.invertExtent = function(l) {
    var u = i.indexOf(l);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e8, o[0]] : u >= n ? [o[n - 1], t] : [o[u - 1], o[u]];
  }, r.unknown = function(l) {
    return arguments.length && (a = l), r;
  }, r.thresholds = function() {
    return o.slice();
  }, r.copy = function() {
    return Ga().domain([e8, t]).range(i).unknown(a);
  }, Ee.apply(it(r), arguments);
}
function za() {
  var e8 = [0.5], t = [0, 1], n, o = 1;
  function i(a) {
    return a != null && a <= a ? t[wn(e8, a, 0, o)] : n;
  }
  return i.domain = function(a) {
    return arguments.length ? (e8 = Array.from(a), o = Math.min(e8.length, t.length - 1), i) : e8.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), o = Math.min(e8.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var r = t.indexOf(a);
    return [e8[r - 1], e8[r]];
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return za().domain(e8).range(t).unknown(n);
  }, Ee.apply(i, arguments);
}
const $n = /* @__PURE__ */ new Date(), Un = /* @__PURE__ */ new Date();
function se(e8, t, n, o) {
  function i(a) {
    return e8(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e8(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e8(a = new Date(a - 1)), t(a, 1), e8(a), a), i.round = (a) => {
    const r = i(a), s = i.ceil(a);
    return a - r < s - a ? r : s;
  }, i.offset = (a, r) => (t(a = /* @__PURE__ */ new Date(+a), r == null ? 1 : Math.floor(r)), a), i.range = (a, r, s) => {
    const l = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < r) || !(s > 0)) return l;
    let u;
    do
      l.push(u = /* @__PURE__ */ new Date(+a)), t(a, s), e8(a);
    while (u < a && a < r);
    return l;
  }, i.filter = (a) => se((r) => {
    if (r >= r) for (; e8(r), !a(r); ) r.setTime(r - 1);
  }, (r, s) => {
    if (r >= r) if (s < 0) for (; ++s <= 0; ) for (; t(r, -1), !a(r); ) ;
    else for (; --s >= 0; ) for (; t(r, 1), !a(r); ) ;
  }), n && (i.count = (a, r) => ($n.setTime(+a), Un.setTime(+r), e8($n), e8(Un), Math.floor(n($n, Un))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(o ? (r) => o(r) % a === 0 : (r) => i.count(0, r) % a === 0) : i)), i;
}
const nn = se(() => {
}, (e8, t) => {
  e8.setTime(+e8 + t);
}, (e8, t) => t - e8);
nn.every = (e8) => (e8 = Math.floor(e8), !isFinite(e8) || !(e8 > 0) ? null : e8 > 1 ? se((t) => {
  t.setTime(Math.floor(t / e8) * e8);
}, (t, n) => {
  t.setTime(+t + n * e8);
}, (t, n) => (n - t) / e8) : nn);
nn.range;
const Oe = 1e3, De = Oe * 60, $e = De * 60, He = $e * 24, Mo = He * 7, ki = He * 30, Hn = He * 365, Ze = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds());
}, (e8, t) => {
  e8.setTime(+e8 + t * Oe);
}, (e8, t) => (t - e8) / Oe, (e8) => e8.getUTCSeconds());
Ze.range;
const Do = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * Oe);
}, (e8, t) => {
  e8.setTime(+e8 + t * De);
}, (e8, t) => (t - e8) / De, (e8) => e8.getMinutes());
Do.range;
const Ro = se((e8) => {
  e8.setUTCSeconds(0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * De);
}, (e8, t) => (t - e8) / De, (e8) => e8.getUTCMinutes());
Ro.range;
const Ao = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * Oe - e8.getMinutes() * De);
}, (e8, t) => {
  e8.setTime(+e8 + t * $e);
}, (e8, t) => (t - e8) / $e, (e8) => e8.getHours());
Ao.range;
const Eo = se((e8) => {
  e8.setUTCMinutes(0, 0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * $e);
}, (e8, t) => (t - e8) / $e, (e8) => e8.getUTCHours());
Eo.range;
const Ht = se((e8) => e8.setHours(0, 0, 0, 0), (e8, t) => e8.setDate(e8.getDate() + t), (e8, t) => (t - e8 - (t.getTimezoneOffset() - e8.getTimezoneOffset()) * De) / He, (e8) => e8.getDate() - 1);
Ht.range;
const kn = se((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / He, (e8) => e8.getUTCDate() - 1);
kn.range;
const Ka = se((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / He, (e8) => Math.floor(e8 / He));
Ka.range;
function at(e8) {
  return se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e8) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * De) / Mo);
}
const Tn = at(0), on = at(1), Ac = at(2), Ec = at(3), gt = at(4), Pc = at(5), Nc = at(6);
Tn.range;
on.range;
Ac.range;
Ec.range;
gt.range;
Pc.range;
Nc.range;
function rt(e8) {
  return se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e8) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Mo);
}
const Cn = rt(0), an = rt(1), Lc = rt(2), Bc = rt(3), vt = rt(4), Ic = rt(5), Oc = rt(6);
Cn.range;
an.range;
Lc.range;
Bc.range;
vt.range;
Ic.range;
Oc.range;
const Po = se((e8) => {
  e8.setDate(1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setMonth(e8.getMonth() + t);
}, (e8, t) => t.getMonth() - e8.getMonth() + (t.getFullYear() - e8.getFullYear()) * 12, (e8) => e8.getMonth());
Po.range;
const No = se((e8) => {
  e8.setUTCDate(1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCMonth(e8.getUTCMonth() + t);
}, (e8, t) => t.getUTCMonth() - e8.getUTCMonth() + (t.getUTCFullYear() - e8.getUTCFullYear()) * 12, (e8) => e8.getUTCMonth());
No.range;
const Fe = se((e8) => {
  e8.setMonth(0, 1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setFullYear(e8.getFullYear() + t);
}, (e8, t) => t.getFullYear() - e8.getFullYear(), (e8) => e8.getFullYear());
Fe.every = (e8) => !isFinite(e8 = Math.floor(e8)) || !(e8 > 0) ? null : se((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e8) * e8), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e8);
});
Fe.range;
const Ve = se((e8) => {
  e8.setUTCMonth(0, 1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCFullYear(e8.getUTCFullYear() + t);
}, (e8, t) => t.getUTCFullYear() - e8.getUTCFullYear(), (e8) => e8.getUTCFullYear());
Ve.every = (e8) => !isFinite(e8 = Math.floor(e8)) || !(e8 > 0) ? null : se((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e8) * e8), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e8);
});
Ve.range;
function Wa(e8, t, n, o, i, a) {
  const r = [[Ze, 1, Oe], [Ze, 5, 5 * Oe], [Ze, 15, 15 * Oe], [Ze, 30, 30 * Oe], [a, 1, De], [a, 5, 5 * De], [a, 15, 15 * De], [a, 30, 30 * De], [i, 1, $e], [i, 3, 3 * $e], [i, 6, 6 * $e], [i, 12, 12 * $e], [o, 1, He], [o, 2, 2 * He], [n, 1, Mo], [t, 1, ki], [t, 3, 3 * ki], [e8, 1, Hn]];
  function s(u, h, d) {
    const c = h < u;
    c && ([u, h] = [h, u]);
    const f = d && typeof d.range == "function" ? d : l(u, h, d), m = f ? f.range(u, +h + 1) : [];
    return c ? m.reverse() : m;
  }
  function l(u, h, d) {
    const c = Math.abs(h - u) / d, f = po(([, , y]) => y).right(r, c);
    if (f === r.length) return e8.every(Xn(u / Hn, h / Hn, d));
    if (f === 0) return nn.every(Math.max(Xn(u, h, d), 1));
    const [m, g] = r[c / r[f - 1][2] < r[f][2] / c ? f - 1 : f];
    return m.every(g);
  }
  return [s, l];
}
const [$c, Uc] = Wa(Ve, No, Cn, Ka, Eo, Ro), [Hc, Fc] = Wa(Fe, Po, Tn, Ht, Ao, Do);
function Fn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
    return t.setFullYear(e8.y), t;
  }
  return new Date(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
}
function Vn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(Date.UTC(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
    return t.setUTCFullYear(e8.y), t;
  }
  return new Date(Date.UTC(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
}
function Tt(e8, t, n) {
  return { y: e8, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Vc(e8) {
  var t = e8.dateTime, n = e8.date, o = e8.time, i = e8.periods, a = e8.days, r = e8.shortDays, s = e8.months, l = e8.shortMonths, u = Ct(i), h = Mt(i), d = Ct(a), c = Mt(a), f = Ct(r), m = Mt(r), g = Ct(s), y = Mt(s), v = Ct(l), _ = Mt(l), b = { a: Te, A: Ce, b: ce, B: We, c: null, d: Ai, e: Ai, f: dd, g: xd, G: Sd, H: ld, I: ud, j: cd, L: qa, m: hd, M: fd, p: Pe, q: Be, Q: Ni, s: Li, S: pd, u: md, U: gd, V: vd, w: _d, W: yd, x: null, X: null, y: bd, Y: wd, Z: kd, "%": Pi }, T = { a: xt, A: st, b: fe, B: ge, c: null, d: Ei, e: Ei, f: Dd, g: $d, G: Hd, H: Td, I: Cd, j: Md, L: Za, m: Rd, M: Ad, p: R, q: H, Q: Ni, s: Li, S: Ed, u: Pd, U: Nd, V: Ld, w: Bd, W: Id, x: null, X: null, y: Od, Y: Ud, Z: Fd, "%": Pi }, C = { a: J, A: L, b: O, B: z, c: U, d: Di, e: Di, f: id, g: Mi, G: Ci, H: Ri, I: Ri, j: ed, L: od, m: Jc, M: td, p: V, q: Qc, Q: rd, s: sd, S: nd, u: Wc, U: qc, V: jc, w: Kc, W: Zc, x: Y, X: be, y: Mi, Y: Ci, Z: Xc, "%": ad };
  b.x = M(n, b), b.X = M(o, b), b.c = M(t, b), T.x = M(n, T), T.X = M(o, T), T.c = M(t, T);
  function M(x, N) {
    return function(F) {
      var S = [], oe = -1, Q = 0, xe = x.length, we, qe, Vo;
      for (F instanceof Date || (F = /* @__PURE__ */ new Date(+F)); ++oe < xe; ) x.charCodeAt(oe) === 37 && (S.push(x.slice(Q, oe)), (qe = Ti[we = x.charAt(++oe)]) != null ? we = x.charAt(++oe) : qe = we === "e" ? " " : "0", (Vo = N[we]) && (we = Vo(F, qe)), S.push(we), Q = oe + 1);
      return S.push(x.slice(Q, oe)), S.join("");
    };
  }
  function E(x, N) {
    return function(F) {
      var S = Tt(1900, void 0, 1), oe = j(S, x, F += "", 0), Q, xe;
      if (oe != F.length) return null;
      if ("Q" in S) return new Date(S.Q);
      if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
      if (N && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
        if (S.V < 1 || S.V > 53) return null;
        "w" in S || (S.w = 1), "Z" in S ? (Q = Vn(Tt(S.y, 0, 1)), xe = Q.getUTCDay(), Q = xe > 4 || xe === 0 ? an.ceil(Q) : an(Q), Q = kn.offset(Q, (S.V - 1) * 7), S.y = Q.getUTCFullYear(), S.m = Q.getUTCMonth(), S.d = Q.getUTCDate() + (S.w + 6) % 7) : (Q = Fn(Tt(S.y, 0, 1)), xe = Q.getDay(), Q = xe > 4 || xe === 0 ? on.ceil(Q) : on(Q), Q = Ht.offset(Q, (S.V - 1) * 7), S.y = Q.getFullYear(), S.m = Q.getMonth(), S.d = Q.getDate() + (S.w + 6) % 7);
      } else ("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), xe = "Z" in S ? Vn(Tt(S.y, 0, 1)).getUTCDay() : Fn(Tt(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (xe + 5) % 7 : S.w + S.U * 7 - (xe + 6) % 7);
      return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, Vn(S)) : Fn(S);
    };
  }
  function j(x, N, F, S) {
    for (var oe = 0, Q = N.length, xe = F.length, we, qe; oe < Q; ) {
      if (S >= xe) return -1;
      if (we = N.charCodeAt(oe++), we === 37) {
        if (we = N.charAt(oe++), qe = C[we in Ti ? N.charAt(oe++) : we], !qe || (S = qe(x, F, S)) < 0) return -1;
      } else if (we != F.charCodeAt(S++)) return -1;
    }
    return S;
  }
  function V(x, N, F) {
    var S = u.exec(N.slice(F));
    return S ? (x.p = h.get(S[0].toLowerCase()), F + S[0].length) : -1;
  }
  function J(x, N, F) {
    var S = f.exec(N.slice(F));
    return S ? (x.w = m.get(S[0].toLowerCase()), F + S[0].length) : -1;
  }
  function L(x, N, F) {
    var S = d.exec(N.slice(F));
    return S ? (x.w = c.get(S[0].toLowerCase()), F + S[0].length) : -1;
  }
  function O(x, N, F) {
    var S = v.exec(N.slice(F));
    return S ? (x.m = _.get(S[0].toLowerCase()), F + S[0].length) : -1;
  }
  function z(x, N, F) {
    var S = g.exec(N.slice(F));
    return S ? (x.m = y.get(S[0].toLowerCase()), F + S[0].length) : -1;
  }
  function U(x, N, F) {
    return j(x, t, N, F);
  }
  function Y(x, N, F) {
    return j(x, n, N, F);
  }
  function be(x, N, F) {
    return j(x, o, N, F);
  }
  function Te(x) {
    return r[x.getDay()];
  }
  function Ce(x) {
    return a[x.getDay()];
  }
  function ce(x) {
    return l[x.getMonth()];
  }
  function We(x) {
    return s[x.getMonth()];
  }
  function Pe(x) {
    return i[+(x.getHours() >= 12)];
  }
  function Be(x) {
    return 1 + ~~(x.getMonth() / 3);
  }
  function xt(x) {
    return r[x.getUTCDay()];
  }
  function st(x) {
    return a[x.getUTCDay()];
  }
  function fe(x) {
    return l[x.getUTCMonth()];
  }
  function ge(x) {
    return s[x.getUTCMonth()];
  }
  function R(x) {
    return i[+(x.getUTCHours() >= 12)];
  }
  function H(x) {
    return 1 + ~~(x.getUTCMonth() / 3);
  }
  return { format: function(x) {
    var N = M(x += "", b);
    return N.toString = function() {
      return x;
    }, N;
  }, parse: function(x) {
    var N = E(x += "", false);
    return N.toString = function() {
      return x;
    }, N;
  }, utcFormat: function(x) {
    var N = M(x += "", T);
    return N.toString = function() {
      return x;
    }, N;
  }, utcParse: function(x) {
    var N = E(x += "", true);
    return N.toString = function() {
      return x;
    }, N;
  } };
}
var Ti = { "-": "", _: " ", 0: "0" }, ue = /^\s*\d+/, Yc = /^%/, Gc = /[\\^$*+?|[\]().{}]/g;
function q(e8, t, n) {
  var o = e8 < 0 ? "-" : "", i = (o ? -e8 : e8) + "", a = i.length;
  return o + (a < n ? new Array(n - a + 1).join(t) + i : i);
}
function zc(e8) {
  return e8.replace(Gc, "\\$&");
}
function Ct(e8) {
  return new RegExp("^(?:" + e8.map(zc).join("|") + ")", "i");
}
function Mt(e8) {
  return new Map(e8.map((t, n) => [t.toLowerCase(), n]));
}
function Kc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 1));
  return o ? (e8.w = +o[0], n + o[0].length) : -1;
}
function Wc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 1));
  return o ? (e8.u = +o[0], n + o[0].length) : -1;
}
function qc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.U = +o[0], n + o[0].length) : -1;
}
function jc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.V = +o[0], n + o[0].length) : -1;
}
function Zc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.W = +o[0], n + o[0].length) : -1;
}
function Ci(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 4));
  return o ? (e8.y = +o[0], n + o[0].length) : -1;
}
function Mi(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), n + o[0].length) : -1;
}
function Xc(e8, t, n) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return o ? (e8.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), n + o[0].length) : -1;
}
function Qc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 1));
  return o ? (e8.q = o[0] * 3 - 3, n + o[0].length) : -1;
}
function Jc(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.m = o[0] - 1, n + o[0].length) : -1;
}
function Di(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.d = +o[0], n + o[0].length) : -1;
}
function ed(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 3));
  return o ? (e8.m = 0, e8.d = +o[0], n + o[0].length) : -1;
}
function Ri(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.H = +o[0], n + o[0].length) : -1;
}
function td(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.M = +o[0], n + o[0].length) : -1;
}
function nd(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.S = +o[0], n + o[0].length) : -1;
}
function od(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 3));
  return o ? (e8.L = +o[0], n + o[0].length) : -1;
}
function id(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 6));
  return o ? (e8.L = Math.floor(o[0] / 1e3), n + o[0].length) : -1;
}
function ad(e8, t, n) {
  var o = Yc.exec(t.slice(n, n + 1));
  return o ? n + o[0].length : -1;
}
function rd(e8, t, n) {
  var o = ue.exec(t.slice(n));
  return o ? (e8.Q = +o[0], n + o[0].length) : -1;
}
function sd(e8, t, n) {
  var o = ue.exec(t.slice(n));
  return o ? (e8.s = +o[0], n + o[0].length) : -1;
}
function Ai(e8, t) {
  return q(e8.getDate(), t, 2);
}
function ld(e8, t) {
  return q(e8.getHours(), t, 2);
}
function ud(e8, t) {
  return q(e8.getHours() % 12 || 12, t, 2);
}
function cd(e8, t) {
  return q(1 + Ht.count(Fe(e8), e8), t, 3);
}
function qa(e8, t) {
  return q(e8.getMilliseconds(), t, 3);
}
function dd(e8, t) {
  return qa(e8, t) + "000";
}
function hd(e8, t) {
  return q(e8.getMonth() + 1, t, 2);
}
function fd(e8, t) {
  return q(e8.getMinutes(), t, 2);
}
function pd(e8, t) {
  return q(e8.getSeconds(), t, 2);
}
function md(e8) {
  var t = e8.getDay();
  return t === 0 ? 7 : t;
}
function gd(e8, t) {
  return q(Tn.count(Fe(e8) - 1, e8), t, 2);
}
function ja(e8) {
  var t = e8.getDay();
  return t >= 4 || t === 0 ? gt(e8) : gt.ceil(e8);
}
function vd(e8, t) {
  return e8 = ja(e8), q(gt.count(Fe(e8), e8) + (Fe(e8).getDay() === 4), t, 2);
}
function _d(e8) {
  return e8.getDay();
}
function yd(e8, t) {
  return q(on.count(Fe(e8) - 1, e8), t, 2);
}
function bd(e8, t) {
  return q(e8.getFullYear() % 100, t, 2);
}
function xd(e8, t) {
  return e8 = ja(e8), q(e8.getFullYear() % 100, t, 2);
}
function wd(e8, t) {
  return q(e8.getFullYear() % 1e4, t, 4);
}
function Sd(e8, t) {
  var n = e8.getDay();
  return e8 = n >= 4 || n === 0 ? gt(e8) : gt.ceil(e8), q(e8.getFullYear() % 1e4, t, 4);
}
function kd(e8) {
  var t = e8.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + q(t / 60 | 0, "0", 2) + q(t % 60, "0", 2);
}
function Ei(e8, t) {
  return q(e8.getUTCDate(), t, 2);
}
function Td(e8, t) {
  return q(e8.getUTCHours(), t, 2);
}
function Cd(e8, t) {
  return q(e8.getUTCHours() % 12 || 12, t, 2);
}
function Md(e8, t) {
  return q(1 + kn.count(Ve(e8), e8), t, 3);
}
function Za(e8, t) {
  return q(e8.getUTCMilliseconds(), t, 3);
}
function Dd(e8, t) {
  return Za(e8, t) + "000";
}
function Rd(e8, t) {
  return q(e8.getUTCMonth() + 1, t, 2);
}
function Ad(e8, t) {
  return q(e8.getUTCMinutes(), t, 2);
}
function Ed(e8, t) {
  return q(e8.getUTCSeconds(), t, 2);
}
function Pd(e8) {
  var t = e8.getUTCDay();
  return t === 0 ? 7 : t;
}
function Nd(e8, t) {
  return q(Cn.count(Ve(e8) - 1, e8), t, 2);
}
function Xa(e8) {
  var t = e8.getUTCDay();
  return t >= 4 || t === 0 ? vt(e8) : vt.ceil(e8);
}
function Ld(e8, t) {
  return e8 = Xa(e8), q(vt.count(Ve(e8), e8) + (Ve(e8).getUTCDay() === 4), t, 2);
}
function Bd(e8) {
  return e8.getUTCDay();
}
function Id(e8, t) {
  return q(an.count(Ve(e8) - 1, e8), t, 2);
}
function Od(e8, t) {
  return q(e8.getUTCFullYear() % 100, t, 2);
}
function $d(e8, t) {
  return e8 = Xa(e8), q(e8.getUTCFullYear() % 100, t, 2);
}
function Ud(e8, t) {
  return q(e8.getUTCFullYear() % 1e4, t, 4);
}
function Hd(e8, t) {
  var n = e8.getUTCDay();
  return e8 = n >= 4 || n === 0 ? vt(e8) : vt.ceil(e8), q(e8.getUTCFullYear() % 1e4, t, 4);
}
function Fd() {
  return "+0000";
}
function Pi() {
  return "%";
}
function Ni(e8) {
  return +e8;
}
function Li(e8) {
  return Math.floor(+e8 / 1e3);
}
var ut, Qa, Ja;
Vd({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function Vd(e8) {
  return ut = Vc(e8), Qa = ut.format, ut.parse, Ja = ut.utcFormat, ut.utcParse, ut;
}
function Yd(e8) {
  return new Date(e8);
}
function Gd(e8) {
  return e8 instanceof Date ? +e8 : +/* @__PURE__ */ new Date(+e8);
}
function Lo(e8, t, n, o, i, a, r, s, l, u) {
  var h = Ba(), d = h.invert, c = h.domain, f = u(".%L"), m = u(":%S"), g = u("%I:%M"), y = u("%I %p"), v = u("%a %d"), _ = u("%b %d"), b = u("%B"), T = u("%Y");
  function C(M) {
    return (l(M) < M ? f : s(M) < M ? m : r(M) < M ? g : a(M) < M ? y : o(M) < M ? i(M) < M ? v : _ : n(M) < M ? b : T)(M);
  }
  return h.invert = function(M) {
    return new Date(d(M));
  }, h.domain = function(M) {
    return arguments.length ? c(Array.from(M, Gd)) : c().map(Yd);
  }, h.ticks = function(M) {
    var E = c();
    return e8(E[0], E[E.length - 1], M ?? 10);
  }, h.tickFormat = function(M, E) {
    return E == null ? C : u(E);
  }, h.nice = function(M) {
    var E = c();
    return (!M || typeof M.range != "function") && (M = t(E[0], E[E.length - 1], M ?? 10)), M ? c(Ha(E, M)) : h;
  }, h.copy = function() {
    return Ut(h, Lo(e8, t, n, o, i, a, r, s, l, u));
  }, h;
}
function zd() {
  return Ee.apply(Lo(Hc, Fc, Fe, Po, Tn, Ht, Ao, Do, Ze, Qa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Kd() {
  return Ee.apply(Lo($c, Uc, Ve, No, Cn, kn, Eo, Ro, Ze, Ja).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Wd() {
  var e8 = 0, t = 1, n, o, i, a, r = _e, s = false, l;
  function u(d) {
    return d == null || isNaN(d = +d) ? l : r(i === 0 ? 0.5 : (d = (a(d) - n) * i, s ? Math.max(0, Math.min(1, d)) : d));
  }
  u.domain = function(d) {
    return arguments.length ? ([e8, t] = d, n = a(e8 = +e8), o = a(t = +t), i = n === o ? 0 : 1 / (o - n), u) : [e8, t];
  }, u.clamp = function(d) {
    return arguments.length ? (s = !!d, u) : s;
  }, u.interpolator = function(d) {
    return arguments.length ? (r = d, u) : r;
  };
  function h(d) {
    return function(c) {
      var f, m;
      return arguments.length ? ([f, m] = c, r = d(f, m), u) : [r(0), r(1)];
    };
  }
  return u.range = h(pn), u.rangeRound = h(xo), u.unknown = function(d) {
    return arguments.length ? (l = d, u) : l;
  }, function(d) {
    return a = d, n = d(e8), o = d(t), i = n === o ? 0 : 1 / (o - n), u;
  };
}
function er(e8, t) {
  return t.domain(e8.domain()).interpolator(e8.interpolator()).clamp(e8.clamp()).unknown(e8.unknown());
}
function tr() {
  var e8 = it(Wd()(_e));
  return e8.copy = function() {
    return er(e8, tr());
  }, Na.apply(e8, arguments);
}
function qd() {
  var e8 = 0, t = 0.5, n = 1, o = 1, i, a, r, s, l, u = _e, h, d = false, c;
  function f(g) {
    return isNaN(g = +g) ? c : (g = 0.5 + ((g = +h(g)) - a) * (o * g < o * a ? s : l), u(d ? Math.max(0, Math.min(1, g)) : g));
  }
  f.domain = function(g) {
    return arguments.length ? ([e8, t, n] = g, i = h(e8 = +e8), a = h(t = +t), r = h(n = +n), s = i === a ? 0 : 0.5 / (a - i), l = a === r ? 0 : 0.5 / (r - a), o = a < i ? -1 : 1, f) : [e8, t, n];
  }, f.clamp = function(g) {
    return arguments.length ? (d = !!g, f) : d;
  }, f.interpolator = function(g) {
    return arguments.length ? (u = g, f) : u;
  };
  function m(g) {
    return function(y) {
      var v, _, b;
      return arguments.length ? ([v, _, b] = y, u = tc(g, [v, _, b]), f) : [u(0), u(0.5), u(1)];
    };
  }
  return f.range = m(pn), f.rangeRound = m(xo), f.unknown = function(g) {
    return arguments.length ? (c = g, f) : c;
  }, function(g) {
    return h = g, i = g(e8), a = g(t), r = g(n), s = i === a ? 0 : 0.5 / (a - i), l = a === r ? 0 : 0.5 / (r - a), o = a < i ? -1 : 1, f;
  };
}
function nr() {
  var e8 = it(qd()(_e));
  return e8.copy = function() {
    return er(e8, nr());
  }, Na.apply(e8, arguments);
}
const Bi = { scaleLinear: $a, scalePow: Co, scaleSqrt: Rc, scaleLog: Fa, scaleSymlog: Va, scaleIdentity: Ua, scaleTime: zd, scaleUtc: Kd, scaleSequential: tr, scaleDiverging: nr, scaleQuantize: Ga, scaleQuantile: Ya, scaleThreshold: za, scaleOrdinal: wo, scaleBand: So, scalePoint: nc };
var te;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(te || (te = {}));
var Je;
(function(e8) {
  e8.West = "west", e8.East = "east", e8.North = "north", e8.South = "south";
})(Je || (Je = {}));
const jd = Object.assign(Object.assign({}, Ds), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: true, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: Je.North, preventEmptyDomain: null, scaleByDomain: false });
class Zd extends Rs {
  constructor(t, n, o) {
    var i, a;
    super(t), this._defaultConfig = jd, this.datamodel = new As(), this.config = this._defaultConfig, this._clipPathId = Es(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = true, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const r = "saturate", s = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", ne`
      --highlight-filter-id: url(${s}#${r}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", r).attr("filterUnits", "objectBoundingBox").html('<feColorMatrix type="saturate" in="SourceGraphic" values="1.35"/>'), n && this.updateContainer(n, true), o && this.setData(o, true), (this.config.xAxis || this.config.yAxis || !((i = this.components) === null || i === void 0) && i.some((l) => l.datamodel.data)) && this.render(), (a = document.fonts) === null || a === void 0 || a.ready.then(() => {
      this._firstRender || this._renderAxes(0);
    });
  }
  get components() {
    return this.config.components;
  }
  get width() {
    const t = this._getMargin();
    return ct(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    const t = this._getMargin();
    return ct(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var o, i, a, r;
    const { components: s, config: l } = this;
    t && (this.datamodel.data = t, s.forEach((u) => {
      u.setData(t);
    }), (o = l.crosshair) === null || o === void 0 || o.setData(t), (i = l.xAxis) === null || i === void 0 || i.setData(t), (a = l.yAxis) === null || a === void 0 || a.setData(t), (r = l.tooltip) === null || r === void 0 || r.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, true), t.xAxis && (this.config.xAxis.config.type = Z.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = Z.Y, this.element.appendChild(t.yAxis.element));
    for (const r of this.components) this.element.appendChild(r.element);
    const o = t.tooltip;
    o && (o.hasContainer() || o.setContainer(this._container), o.setComponents(this.components));
    const i = t.crosshair;
    i && (i.setContainer(this.svg), i.tooltip = o, this.element.appendChild(i.element));
    const a = t.annotations;
    a && this.element.appendChild(a.element), this.element.appendChild(this._clipPath.node()), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), n || this.render();
  }
  updateComponents(t, n) {
    const { config: o } = this;
    this.components.forEach((i, a) => {
      t[a] && i.setConfig(t[a]);
    }), this._updateScales(...this.components, o.xAxis, o.yAxis, o.crosshair), n || this.render();
  }
  update(t, n, o) {
    o && (this.datamodel.data = o), t && this.updateContainer(t, true), n && this.updateComponents(n, true), this.render();
  }
  _preRender() {
    const { config: t } = this;
    super._preRender(), t.autoMargin && this._setAutoMargin();
    const n = St([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]);
    for (const o of n) o.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, o, i, a, r;
    const { config: s } = this;
    super._render();
    const l = this._getMargin();
    for (const d of this.components) d.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", d.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", d.clippable ? `url(#${this._clipPathId})` : null), d.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const u = 2;
    this._clipPath.select("rect").attr("x", -u).attr("y", -u).attr("width", this.width + 2 * u).attr("height", this.height + 2 * u), (n = s.tooltip) === null || n === void 0 || n.update();
    const h = s.crosshair;
    if (h) {
      const d = this.components.filter((g) => !g.stacked).map((g) => g.config.y), c = this.components.filter((g) => g.stacked).map((g) => g.config.y), f = (o = this.components.find((g) => g.config.baseline)) === null || o === void 0 ? void 0 : o.config, m = f == null ? void 0 : f.baseline;
      h.accessors = { x: (i = this.components[0]) === null || i === void 0 ? void 0 : i.config.x, y: Ko(d), yStacked: Ko(c), baseline: m }, h.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), h.hide();
    }
    (a = s.annotations) === null || a === void 0 || a.g.attr("transform", `translate(${l.left},${l.top})`), (r = s.annotations) === null || r === void 0 || r.render(), this._firstRender = false;
  }
  _updateScales(...t) {
    const n = St(t || this.components);
    this._setScales(...n), this._updateScalesDomain(...n), this._updateScalesRange(...n);
  }
  _setScales(...t) {
    const { config: n } = this;
    t && (n.xScale && t.forEach((o) => o.setScale(te.X, n.xScale)), n.yScale && t.forEach((o) => o.setScale(te.Y, n.yScale)));
  }
  _updateScalesDomain(...t) {
    const { config: n } = this;
    if (!t) return;
    const o = t.filter((i) => !i.config.excludeFromDomainCalculation);
    Object.values(te).forEach((i) => {
      var a, r, s, l, u, h, d, c;
      const [f, m] = Gu(Ju(o.map((C) => C.getDataExtent(i, n.scaleByDomain)))), g = i === te.Y ? n.yDomain : n.xDomain, y = i === te.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, v = i === te.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, _ = (r = (a = g == null ? void 0 : g[0]) !== null && a !== void 0 ? a : f) !== null && r !== void 0 ? r : 0, b = (l = (s = g == null ? void 0 : g[1]) !== null && s !== void 0 ? s : m) !== null && l !== void 0 ? l : 1, T = [ct(_, (u = y == null ? void 0 : y[0]) !== null && u !== void 0 ? u : Number.NEGATIVE_INFINITY, (h = y == null ? void 0 : y[1]) !== null && h !== void 0 ? h : Number.POSITIVE_INFINITY), ct(b, (d = v == null ? void 0 : v[0]) !== null && d !== void 0 ? d : Number.NEGATIVE_INFINITY, (c = v == null ? void 0 : v[1]) !== null && c !== void 0 ? c : Number.POSITIVE_INFINITY)];
      if (T[0] === T[1]) {
        const C = o.some((M) => {
          var E;
          return ((E = M.datamodel.data) === null || E === void 0 ? void 0 : E.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!C || i === te.Y)) && (T[1] = T[0] + 1);
      }
      t.forEach((C) => C.setScaleDomain(i, T));
    });
  }
  _updateScalesRange(...t) {
    var n, o, i, a, r, s;
    const { config: l } = this;
    if (!t) return;
    const u = l.yDirection === Je.South, h = [(n = l.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((o = l.padding.right) !== null && o !== void 0 ? o : 0)], d = [this.height - ((i = l.padding.bottom) !== null && i !== void 0 ? i : 0), (a = l.padding.top) !== null && a !== void 0 ? a : 0];
    u && d.reverse();
    for (const f of t) f.setSize(this.width, this.height, this.containerWidth, this.containerHeight), f.setScaleRange(te.X, (r = l.xRange) !== null && r !== void 0 ? r : h), f.setScaleRange(te.Y, (s = l.yRange) !== null && s !== void 0 ? s : d);
    const c = t.map((f) => f.bleed).reduce((f, m) => {
      for (const g of Object.keys(f)) {
        const y = g;
        f[y] < m[y] && (f[y] = m[y]);
      }
      return f;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const f of t) f.setScaleRange(te.X, [h[0] + c.left, h[1] - c.right]), f.setScaleRange(te.Y, u ? [d[0] + c.top, d[1] - c.bottom] : [d[0] - c.bottom, d[1] + c.top]);
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: o } } = this, i = this._getMargin();
    St([n, o]).forEach((r) => {
      const s = r.getOffset(i);
      r.g.attr("transform", `translate(${s.left},${s.top})`), r.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, o = St([...this.components, t, n]);
    this._setScales(...o), this._updateScalesDomain(...o);
    const i = this._firstRender ? 2 : 1;
    for (let a = 0; a < i; a += 1) {
      const r = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...o), St([t, n]).forEach((l) => {
        l.preRender();
        const u = l.getRequiredMargin();
        r.top < u.top && (r.top = u.top), r.bottom < u.bottom && (r.bottom = u.bottom), r.left < u.left && (r.left = u.left), r.right < u.right && (r.right = u.right);
      }), this._axisMargin = r;
    }
  }
  _getMargin() {
    const { config: { margin: t } } = this;
    return { top: t.top + this._axisMargin.top, bottom: t.bottom + this._axisMargin.bottom, left: t.left + this._axisMargin.left, right: t.right + this._axisMargin.right };
  }
  destroy() {
    const { components: t, config: { tooltip: n, crosshair: o, annotations: i, xAxis: a, yAxis: r } } = this;
    super.destroy();
    for (const s of t) s == null ? void 0 : s.destroy();
    n == null ? void 0 : n.destroy(), o == null ? void 0 : o.destroy(), i == null ? void 0 : i.destroy(), a == null ? void 0 : a.destroy(), r == null ? void 0 : r.destroy();
  }
}
const Ft = Object.assign(Object.assign({}, Ps), { x: void 0, y: void 0, id: (e8, t) => {
  var n;
  return (n = e8.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e8) => e8.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: false });
class Mn extends Ns {
  constructor() {
    super(...arguments), this.datamodel = new Ls(), this.clippable = true, this.stacked = false, this._defaultConfig = Ft, this._xScale = Bi.scaleLinear(), this._yScale = Bi.scaleLinear();
  }
  get xScale() {
    return this.config.xScale || this._xScale;
  }
  get yScale() {
    return this.config.yScale || this._yScale;
  }
  setConfig(t) {
    var n, o;
    !((n = this.config) === null || n === void 0) && n.xScale && (t.xScale = this.config.xScale), !((o = this.config) === null || o === void 0) && o.yScale && (t.yScale = this.config.yScale), super.setConfig(t);
  }
  setScaleDomain(t, n) {
    var o, i;
    t === te.X && ((o = this._xScale) === null || o === void 0 || o.domain(n)), t === te.Y && ((i = this._yScale) === null || i === void 0 || i.domain(n));
  }
  setScaleRange(t, n) {
    var o, i;
    t === te.X && ((o = this._xScale) === null || o === void 0 || o.range(n)), t === te.Y && ((i = this._yScale) === null || i === void 0 || i.range(n));
  }
  setScale(t, n) {
    n && t === te.X && (this._xScale = n), n && t === te.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: o, datamodel: i } = this;
    switch (t) {
      case te.X:
        return this.getXDataExtent();
      case te.Y:
        return this.getYDataExtent(n);
      default:
        return In(i.data, o[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return In(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: o } = this, i = t ? ua(o.data, this.xScale.domain(), n.x) : o.data, a = Bt(n.y) ? n.y : [n.y];
    return In(i, ...a);
  }
}
function or(e8) {
  this._context = e8;
}
or.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e8, t);
      break;
  }
} };
function Bo(e8) {
  return new or(e8);
}
function ir(e8) {
  return e8[0];
}
function ar(e8) {
  return e8[1];
}
function rr() {
  var e8 = ir, t = ar, n = Se(true), o = null, i = Bo, a = null;
  function r(s) {
    var l, u = s.length, h, d = false, c;
    for (o == null && (a = i(c = ca())), l = 0; l <= u; ++l) !(l < u && n(h = s[l], l, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e8(h, l, s), +t(h, l, s));
    if (c) return a = null, c + "" || null;
  }
  return r.x = function(s) {
    return arguments.length ? (e8 = typeof s == "function" ? s : Se(+s), r) : e8;
  }, r.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Se(+s), r) : t;
  }, r.defined = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Se(!!s), r) : n;
  }, r.curve = function(s) {
    return arguments.length ? (i = s, o != null && (a = i(o)), r) : i;
  }, r.context = function(s) {
    return arguments.length ? (s == null ? o = a = null : a = i(o = s), r) : o;
  }, r;
}
function Xd() {
  var e8 = ir, t = null, n = Se(0), o = ar, i = Se(true), a = null, r = Bo, s = null;
  function l(h) {
    var d, c, f, m = h.length, g, y = false, v, _ = new Array(m), b = new Array(m);
    for (a == null && (s = r(v = ca())), d = 0; d <= m; ++d) {
      if (!(d < m && i(g = h[d], d, h)) === y) if (y = !y) c = d, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), f = d - 1; f >= c; --f) s.point(_[f], b[f]);
        s.lineEnd(), s.areaEnd();
      }
      y && (_[d] = +e8(g, d, h), b[d] = +n(g, d, h), s.point(t ? +t(g, d, h) : _[d], o ? +o(g, d, h) : b[d]));
    }
    if (v) return s = null, v + "" || null;
  }
  function u() {
    return rr().defined(i).curve(r).context(a);
  }
  return l.x = function(h) {
    return arguments.length ? (e8 = typeof h == "function" ? h : Se(+h), t = null, l) : e8;
  }, l.x0 = function(h) {
    return arguments.length ? (e8 = typeof h == "function" ? h : Se(+h), l) : e8;
  }, l.x1 = function(h) {
    return arguments.length ? (t = h == null ? null : typeof h == "function" ? h : Se(+h), l) : t;
  }, l.y = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Se(+h), o = null, l) : n;
  }, l.y0 = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Se(+h), l) : n;
  }, l.y1 = function(h) {
    return arguments.length ? (o = h == null ? null : typeof h == "function" ? h : Se(+h), l) : o;
  }, l.lineX0 = l.lineY0 = function() {
    return u().x(e8).y(n);
  }, l.lineY1 = function() {
    return u().x(e8).y(o);
  }, l.lineX1 = function() {
    return u().x(t).y(n);
  }, l.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : Se(!!h), l) : i;
  }, l.curve = function(h) {
    return arguments.length ? (r = h, a != null && (s = r(a)), l) : r;
  }, l.context = function(h) {
    return arguments.length ? (h == null ? a = s = null : s = r(a = h), l) : a;
  }, l;
}
function Ye() {
}
function rn(e8, t, n) {
  e8._context.bezierCurveTo((2 * e8._x0 + e8._x1) / 3, (2 * e8._y0 + e8._y1) / 3, (e8._x0 + 2 * e8._x1) / 3, (e8._y0 + 2 * e8._y1) / 3, (e8._x0 + 4 * e8._x1 + t) / 6, (e8._y0 + 4 * e8._y1 + n) / 6);
}
function Dn(e8) {
  this._context = e8;
}
Dn.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      rn(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      rn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function Qd(e8) {
  return new Dn(e8);
}
function sr(e8) {
  this._context = e8;
}
sr.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e8, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e8, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e8, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e8) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      rn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function Jd(e8) {
  return new sr(e8);
}
function lr(e8) {
  this._context = e8;
}
lr.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var n = (this._x0 + 4 * this._x1 + e8) / 6, o = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(n, o) : this._context.moveTo(n, o);
      break;
    case 3:
      this._point = 4;
    default:
      rn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function eh(e8) {
  return new lr(e8);
}
function ur(e8, t) {
  this._basis = new Dn(e8), this._beta = t;
}
ur.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var e8 = this._x, t = this._y, n = e8.length - 1;
  if (n > 0) for (var o = e8[0], i = t[0], a = e8[n] - o, r = t[n] - i, s = -1, l; ++s <= n; ) l = s / n, this._basis.point(this._beta * e8[s] + (1 - this._beta) * (o + l * a), this._beta * t[s] + (1 - this._beta) * (i + l * r));
  this._x = this._y = null, this._basis.lineEnd();
}, point: function(e8, t) {
  this._x.push(+e8), this._y.push(+t);
} };
const th = function e(t) {
  function n(o) {
    return t === 1 ? new Dn(o) : new ur(o, t);
  }
  return n.beta = function(o) {
    return e(+o);
  }, n;
}(0.85);
function sn(e8, t, n) {
  e8._context.bezierCurveTo(e8._x1 + e8._k * (e8._x2 - e8._x0), e8._y1 + e8._k * (e8._y2 - e8._y0), e8._x2 + e8._k * (e8._x1 - t), e8._y2 + e8._k * (e8._y1 - n), e8._x2, e8._y2);
}
function Io(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Io.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      sn(this, this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
      break;
    case 1:
      this._point = 2, this._x1 = e8, this._y1 = t;
      break;
    case 2:
      this._point = 3;
    default:
      sn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const nh = function e2(t) {
  function n(o) {
    return new Io(o, t);
  }
  return n.tension = function(o) {
    return e2(+o);
  }, n;
}(0);
function Oo(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Oo.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 2: {
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
    }
  }
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1, this._x3 = e8, this._y3 = t;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = e8, this._y4 = t);
      break;
    case 2:
      this._point = 3, this._x5 = e8, this._y5 = t;
      break;
    default:
      sn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const oh = function e3(t) {
  function n(o) {
    return new Oo(o, t);
  }
  return n.tension = function(o) {
    return e3(+o);
  }, n;
}(0);
function $o(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
$o.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      sn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const ih = function e4(t) {
  function n(o) {
    return new $o(o, t);
  }
  return n.tension = function(o) {
    return e4(+o);
  }, n;
}(0);
function Uo(e8, t, n) {
  var o = e8._x1, i = e8._y1, a = e8._x2, r = e8._y2;
  if (e8._l01_a > Wo) {
    var s = 2 * e8._l01_2a + 3 * e8._l01_a * e8._l12_a + e8._l12_2a, l = 3 * e8._l01_a * (e8._l01_a + e8._l12_a);
    o = (o * s - e8._x0 * e8._l12_2a + e8._x2 * e8._l01_2a) / l, i = (i * s - e8._y0 * e8._l12_2a + e8._y2 * e8._l01_2a) / l;
  }
  if (e8._l23_a > Wo) {
    var u = 2 * e8._l23_2a + 3 * e8._l23_a * e8._l12_a + e8._l12_2a, h = 3 * e8._l23_a * (e8._l23_a + e8._l12_a);
    a = (a * u + e8._x1 * e8._l23_2a - t * e8._l12_2a) / h, r = (r * u + e8._y1 * e8._l23_2a - n * e8._l12_2a) / h;
  }
  e8._context.bezierCurveTo(o, i, a, r, e8._x2, e8._y2);
}
function cr(e8, t) {
  this._context = e8, this._alpha = t;
}
cr.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      this.point(this._x2, this._y2);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  if (e8 = +e8, t = +t, this._point) {
    var n = this._x2 - e8, o = this._y2 - t;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + o * o, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
    default:
      Uo(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const ah = function e5(t) {
  function n(o) {
    return t ? new cr(o, t) : new Io(o, 0);
  }
  return n.alpha = function(o) {
    return e5(+o);
  }, n;
}(0.5);
function dr(e8, t) {
  this._context = e8, this._alpha = t;
}
dr.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 2: {
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
    }
  }
}, point: function(e8, t) {
  if (e8 = +e8, t = +t, this._point) {
    var n = this._x2 - e8, o = this._y2 - t;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + o * o, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._x3 = e8, this._y3 = t;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = e8, this._y4 = t);
      break;
    case 2:
      this._point = 3, this._x5 = e8, this._y5 = t;
      break;
    default:
      Uo(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const rh = function e6(t) {
  function n(o) {
    return t ? new dr(o, t) : new Oo(o, 0);
  }
  return n.alpha = function(o) {
    return e6(+o);
  }, n;
}(0.5);
function hr(e8, t) {
  this._context = e8, this._alpha = t;
}
hr.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  if (e8 = +e8, t = +t, this._point) {
    var n = this._x2 - e8, o = this._y2 - t;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + o * o, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      Uo(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const sh = function e7(t) {
  function n(o) {
    return t ? new hr(o, t) : new $o(o, 0);
  }
  return n.alpha = function(o) {
    return e7(+o);
  }, n;
}(0.5);
function fr(e8) {
  this._context = e8;
}
fr.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e8, t) {
  e8 = +e8, t = +t, this._point ? this._context.lineTo(e8, t) : (this._point = 1, this._context.moveTo(e8, t));
} };
function lh(e8) {
  return new fr(e8);
}
function Ii(e8) {
  return e8 < 0 ? -1 : 1;
}
function Oi(e8, t, n) {
  var o = e8._x1 - e8._x0, i = t - e8._x1, a = (e8._y1 - e8._y0) / (o || i < 0 && -0), r = (n - e8._y1) / (i || o < 0 && -0), s = (a * i + r * o) / (o + i);
  return (Ii(a) + Ii(r)) * Math.min(Math.abs(a), Math.abs(r), 0.5 * Math.abs(s)) || 0;
}
function $i(e8, t) {
  var n = e8._x1 - e8._x0;
  return n ? (3 * (e8._y1 - e8._y0) / n - t) / 2 : t;
}
function Yn(e8, t, n) {
  var o = e8._x0, i = e8._y0, a = e8._x1, r = e8._y1, s = (a - o) / 3;
  e8._context.bezierCurveTo(o + s, i + s * t, a - s, r - s * n, a, r);
}
function ln(e8) {
  this._context = e8;
}
ln.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      Yn(this, this._t0, $i(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  var n = NaN;
  if (e8 = +e8, t = +t, !(e8 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, Yn(this, $i(this, n = Oi(this, e8, t)), n);
        break;
      default:
        Yn(this, this._t0, n = Oi(this, e8, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t, this._t0 = n;
  }
} };
function pr(e8) {
  this._context = new mr(e8);
}
(pr.prototype = Object.create(ln.prototype)).point = function(e8, t) {
  ln.prototype.point.call(this, t, e8);
};
function mr(e8) {
  this._context = e8;
}
mr.prototype = { moveTo: function(e8, t) {
  this._context.moveTo(t, e8);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e8, t) {
  this._context.lineTo(t, e8);
}, bezierCurveTo: function(e8, t, n, o, i, a) {
  this._context.bezierCurveTo(t, e8, o, n, a, i);
} };
function uh(e8) {
  return new ln(e8);
}
function ch(e8) {
  return new pr(e8);
}
function gr(e8) {
  this._context = e8;
}
gr.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e8 = this._x, t = this._y, n = e8.length;
  if (n) if (this._line ? this._context.lineTo(e8[0], t[0]) : this._context.moveTo(e8[0], t[0]), n === 2) this._context.lineTo(e8[1], t[1]);
  else for (var o = Ui(e8), i = Ui(t), a = 0, r = 1; r < n; ++a, ++r) this._context.bezierCurveTo(o[0][a], i[0][a], o[1][a], i[1][a], e8[r], t[r]);
  (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e8, t) {
  this._x.push(+e8), this._y.push(+t);
} };
function Ui(e8) {
  var t, n = e8.length - 1, o, i = new Array(n), a = new Array(n), r = new Array(n);
  for (i[0] = 0, a[0] = 2, r[0] = e8[0] + 2 * e8[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, r[t] = 4 * e8[t] + 2 * e8[t + 1];
  for (i[n - 1] = 2, a[n - 1] = 7, r[n - 1] = 8 * e8[n - 1] + e8[n], t = 1; t < n; ++t) o = i[t] / a[t - 1], a[t] -= o, r[t] -= o * r[t - 1];
  for (i[n - 1] = r[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (r[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e8[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e8[t + 1] - i[t + 1];
  return [i, a];
}
function dh(e8) {
  return new gr(e8);
}
function Rn(e8, t) {
  this._context = e8, this._t = t;
}
Rn.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e8, t) {
  switch (e8 = +e8, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e8, t);
      else {
        var n = this._x * (1 - this._t) + e8 * this._t;
        this._context.lineTo(n, this._y), this._context.lineTo(n, t);
      }
      break;
    }
  }
  this._x = e8, this._y = t;
} };
function hh(e8) {
  return new Rn(e8, 0.5);
}
function fh(e8) {
  return new Rn(e8, 0);
}
function ph(e8) {
  return new Rn(e8, 1);
}
function Hi(e8, t) {
  var n = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e8);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e8, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function mh(e8) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hi(Object(n), true).forEach(function(o) {
      gh(e8, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n)) : Hi(Object(n)).forEach(function(o) {
      Object.defineProperty(e8, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e8;
}
function Nt(e8) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nt = function(t) {
    return typeof t;
  } : Nt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nt(e8);
}
function gh(e8, t, n) {
  return t in e8 ? Object.defineProperty(e8, t, { value: n, enumerable: true, configurable: true, writable: true }) : e8[t] = n, e8;
}
function un() {
  return un = Object.assign || function(e8) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e8[o] = n[o]);
    }
    return e8;
  }, un.apply(this, arguments);
}
function vh(e8, t) {
  if (e8) {
    if (typeof e8 == "string") return Fi(e8, t);
    var n = Object.prototype.toString.call(e8).slice(8, -1);
    if (n === "Object" && e8.constructor && (n = e8.constructor.name), n === "Map" || n === "Set") return Array.from(e8);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fi(e8, t);
  }
}
function Fi(e8, t) {
  (t == null || t > e8.length) && (t = e8.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e8[n];
  return o;
}
function vr(e8, t) {
  var n = typeof Symbol < "u" && e8[Symbol.iterator] || e8["@@iterator"];
  if (!n) {
    if (Array.isArray(e8) || (n = vh(e8)) || t) {
      n && (e8 = n);
      var o = 0, i = function() {
      };
      return { s: i, n: function() {
        return o >= e8.length ? { done: true } : { done: false, value: e8[o++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = true, r = false, s;
  return { s: function() {
    n = n.call(e8);
  }, n: function() {
    var l = n.next();
    return a = l.done, l;
  }, e: function(l) {
    r = true, s = l;
  }, f: function() {
    try {
      !a && n.return != null && n.return();
    } finally {
      if (r) throw s;
    }
  } };
}
function _h(e8, t) {
  var n = [], o = [];
  function i(a, r) {
    if (a.length === 1) n.push(a[0]), o.push(a[0]);
    else {
      for (var s = Array(a.length - 1), l = 0; l < s.length; l++) l === 0 && n.push(a[0]), l === s.length - 1 && o.push(a[l + 1]), s[l] = [(1 - r) * a[l][0] + r * a[l + 1][0], (1 - r) * a[l][1] + r * a[l + 1][1]];
      i(s, r);
    }
  }
  return e8.length && i(e8, t), { left: n, right: o.reverse() };
}
function yh(e8) {
  var t = {};
  return e8.length === 4 && (t.x2 = e8[2][0], t.y2 = e8[2][1]), e8.length >= 3 && (t.x1 = e8[1][0], t.y1 = e8[1][1]), t.x = e8[e8.length - 1][0], t.y = e8[e8.length - 1][1], e8.length === 4 ? t.type = "C" : e8.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function bh(e8, t) {
  t = t || 2;
  for (var n = [], o = e8, i = 1 / t, a = 0; a < t - 1; a++) {
    var r = i / (1 - i * a), s = _h(o, r);
    n.push(s.left), o = s.right;
  }
  return n.push(o), n;
}
function xh(e8, t, n) {
  var o = [[e8.x, e8.y]];
  return t.x1 != null && o.push([t.x1, t.y1]), t.x2 != null && o.push([t.x2, t.y2]), o.push([t.x, t.y]), bh(o, n).map(yh);
}
var wh = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, ht = { M: ["x", "y"], L: ["x", "y"], H: ["x"], V: ["y"], C: ["x1", "y1", "x2", "y2", "x", "y"], S: ["x2", "y2", "x", "y"], Q: ["x1", "y1", "x", "y"], T: ["x", "y"], A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"], Z: [] };
Object.keys(ht).forEach(function(e8) {
  ht[e8.toLowerCase()] = ht[e8];
});
function eo(e8, t) {
  for (var n = Array(e8), o = 0; o < e8; o++) n[o] = t;
  return n;
}
function Sh(e8) {
  return "".concat(e8.type).concat(ht[e8.type].map(function(t) {
    return e8[t];
  }).join(","));
}
function kh(e8, t) {
  var n = { x1: "x", y1: "y", x2: "x", y2: "y" }, o = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e8.type !== t.type && t.type.toUpperCase() !== "M") {
    var i = {};
    Object.keys(t).forEach(function(a) {
      var r = t[a], s = e8[a];
      s === void 0 && (o.includes(a) ? s = r : (s === void 0 && n[a] && (s = e8[n[a]]), s === void 0 && (s = 0))), i[a] = s;
    }), i.type = t.type, e8 = i;
  }
  return e8;
}
function Th(e8, t, n) {
  var o = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C") o = o.concat(xh(e8, t, n));
  else {
    var i = un({}, e8);
    i.type === "M" && (i.type = "L"), o = o.concat(eo(n - 1).map(function() {
      return i;
    })), o.push(t);
  }
  return o;
}
function Vi(e8, t, n) {
  var o = e8.length - 1, i = t.length - 1, a = o / i, r = eo(i).reduce(function(l, u, h) {
    var d = Math.floor(a * h);
    if (n && d < e8.length - 1 && n(e8[d], e8[d + 1])) {
      var c = a * h % 1 < 0.5;
      l[d] && (c ? d > 0 ? d -= 1 : d < e8.length - 1 && (d += 1) : d < e8.length - 1 ? d += 1 : d > 0 && (d -= 1));
    }
    return l[d] = (l[d] || 0) + 1, l;
  }, []), s = r.reduce(function(l, u, h) {
    if (h === e8.length - 1) {
      var d = eo(u, un({}, e8[e8.length - 1]));
      return d[0].type === "M" && d.forEach(function(c) {
        c.type = "L";
      }), l.concat(d);
    }
    return l.concat(Th(e8[h], e8[h + 1], u));
  }, []);
  return s.unshift(e8[0]), s;
}
function Yi(e8) {
  for (var t = (e8 || "").match(wh) || [], n = [], o, i, a = 0; a < t.length; ++a) if (o = ht[t[a]], o) {
    i = { type: t[a] };
    for (var r = 0; r < o.length; ++r) i[o[r]] = +t[a + r + 1];
    a += o.length, n.push(i);
  }
  return n;
}
function Ch(e8, t, n) {
  var o = e8 == null ? [] : e8.slice(), i = t == null ? [] : t.slice(), a = Nt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, r = a.excludeSegment, s = a.snapEndsToInput;
  if (!o.length && !i.length) return function() {
    return [];
  };
  var l = (o.length === 0 || o[o.length - 1].type === "Z") && (i.length === 0 || i[i.length - 1].type === "Z");
  o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), o.length ? i.length || i.push(o[0]) : o.push(i[0]);
  var u = Math.abs(i.length - o.length);
  u !== 0 && (i.length > o.length ? o = Vi(o, i, r) : i.length < o.length && (i = Vi(i, o, r))), o = o.map(function(d, c) {
    return kh(d, i[c]);
  });
  var h = o.map(function(d) {
    return mh({}, d);
  });
  return l && (h.push({ type: "Z" }), o.push({ type: "Z" })), function(c) {
    if (c === 1 && s) return t ?? [];
    if (c === 0) return o;
    for (var f = 0; f < h.length; ++f) {
      var m = o[f], g = i[f], y = h[f], v = vr(ht[y.type]), _;
      try {
        for (v.s(); !(_ = v.n()).done; ) {
          var b = _.value;
          y[b] = (1 - c) * m[b] + c * g[b], (b === "largeArcFlag" || b === "sweepFlag") && (y[b] = Math.round(y[b]));
        }
      } catch (T) {
        v.e(T);
      } finally {
        v.f();
      }
    }
    return h;
  };
}
function _r(e8, t, n) {
  var o = Yi(e8), i = Yi(t), a = Nt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, r = a.excludeSegment, s = a.snapEndsToInput;
  if (!o.length && !i.length) return function() {
    return "";
  };
  var l = Ch(o, i, { excludeSegment: r, snapEndsToInput: s });
  return function(h) {
    if (h === 1 && s) return t ?? "";
    var d = l(h), c = "", f = vr(d), m;
    try {
      for (f.s(); !(m = f.n()).done; ) {
        var g = m.value;
        c += Sh(g);
      }
    } catch (y) {
      f.e(y);
    } finally {
      f.f();
    }
    return c;
  };
}
var ee;
(function(e8) {
  e8.Basis = "basis", e8.BasisClosed = "basisClosed", e8.BasisOpen = "basisOpen", e8.Bundle = "bundle", e8.Cardinal = "cardinal", e8.CardinalClosed = "cardinalClosed", e8.CardinalOpen = "cardinalOpen", e8.CatmullRom = "catmullRom", e8.CatmullRomClosed = "catmullRomClosed", e8.CatmullRomOpen = "catmullRomOpen", e8.Linear = "linear", e8.LinearClosed = "linearClosed", e8.MonotoneX = "monotoneX", e8.MonotoneY = "monotoneY", e8.Natural = "natural", e8.Step = "step", e8.StepAfter = "stepAfter", e8.StepBefore = "stepBefore";
})(ee || (ee = {}));
const to = { [ee.Basis]: Qd, [ee.BasisClosed]: Jd, [ee.BasisOpen]: eh, [ee.Bundle]: th, [ee.Cardinal]: nh, [ee.CardinalClosed]: oh, [ee.CardinalOpen]: ih, [ee.CatmullRom]: ah, [ee.CatmullRomClosed]: rh, [ee.CatmullRomOpen]: sh, [ee.Linear]: Bo, [ee.LinearClosed]: lh, [ee.MonotoneX]: uh, [ee.MonotoneY]: ch, [ee.Natural]: dh, [ee.Step]: hh, [ee.StepAfter]: ph, [ee.StepBefore]: fh }, Mh = Object.assign(Object.assign({}, Ft), { curveType: ee.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: false, cursor: null, interpolateMissingData: false }), Dh = mn`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, Rh = ne`
  label: line-component;
`, Rt = ne`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, no = ne`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, oo = ne`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, io = ne`
  opacity: 0.2;
`, ao = ne`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, Ah = Object.freeze(Object.defineProperty({ __proto__: null, dim: io, globalStyles: Dh, interpolatedPath: ao, line: Rt, linePath: no, lineSelectionHelper: oo, root: Rh }, Symbol.toStringTag, { value: "Module" }));
class An extends Mn {
  constructor(t) {
    super(), this._defaultConfig = Mh, this.config = this._defaultConfig, this.curve = to[ee.MonotoneX], this.events = { [An.selectors.line]: { mouseover: this._highlight.bind(this), mouseleave: this._resetHighlight.bind(this) } }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), i = (this.yScale.range()[0] > this.yScale.range()[1] ? Je.North : Je.South) === Je.South, a = t > 3, r = t >= 10;
    return { top: !r && (!i && n[1] === 0 || i && n[0] === 0) ? 0 : t / 2, bottom: !r && (!i && n[0] === 0 || i && n[1] === 0) ? 0 : t / 2, left: a ? t / 2 : 0, right: a ? t / 2 : 0 };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: o } } = this, i = Qe(t) ? t : n.duration;
    this.curve = to[n.curveType], this.lineGen = rr().x((d) => d.x).y((d) => d.y).defined((d) => d.defined).curve(this.curve);
    const a = Bt(n.y) ? n.y : [n.y], r = o.map((d, c) => this.xScale(Ne(d, n.x, c))), s = a.map((d) => {
      const c = o.map((v, _) => {
        const b = Ne(v, d, _), T = (Qe(b) || b === null) && isFinite(b) ? b : n.fallbackValue, C = n.interpolateMissingData ? (Qe(b) || b === null) && isFinite(b) : isFinite(T);
        return { x: r[_], y: this.yScale(T ?? 0), defined: C, value: T };
      }), f = c.reduce((v, _) => _.defined || v, false);
      let m = false;
      const g = c.reduce((v, _, b) => {
        !_.defined && isFinite(n.fallbackValue) && v.push(Object.assign(Object.assign({}, _), { defined: true })), !_.defined && !m && (m = true);
        const T = b > 0 && !c[b - 1].defined || b < c.length - 1 && !c[b + 1].defined;
        return _.defined && T && (m || v.push(Object.assign(Object.assign({}, _), { defined: false })), v.push(_), m = false), v;
      }, []), y = f && c.some((v) => v.value !== null);
      return { values: c, defined: f, gaps: g, visible: y };
    }), l = this.g.selectAll(`.${Rt}`).data(s), u = l.enter().append("g").attr("class", Rt);
    u.append("path").attr("class", no).attr("stroke", (d, c) => Ie(o, n.color, c)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), u.append("path").attr("class", oo).attr("d", this._emptyPath()), u.append("path").attr("class", ao).attr("d", this._emptyPath()).style("opacity", 0);
    const h = u.merge(l);
    h.style("cursor", (d, c) => da(o, n.cursor, c)), h.each((d, c, f) => {
      var m;
      const g = Et(f[c]), y = g.select(`.${no}`), v = g.select(`.${oo}`), _ = g.select(`.${ao}`), b = d.visible, T = Bs(o, n.lineDashArray, c), C = Me(y, i).attr("stroke", Ie(o, n.color, c)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", b ? 1 : 0).style("stroke-dasharray", (m = T == null ? void 0 : T.join(" ")) !== null && m !== void 0 ? m : null), M = d.values.some((j) => !j.defined), E = this.lineGen(d.values);
      if (i && !M) {
        const j = y.attr("d") || this._emptyPath(), V = E || this._emptyPath();
        C.attrTween("d", () => _r(j, V));
      } else d.visible && C.attr("d", E);
      v.attr("d", E).attr("visibility", b ? null : "hidden"), M && n.interpolateMissingData ? Me(_, i).attr("d", this.lineGen(d.gaps)).attr("stroke", Ie(o, n.color, c)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : _.transition().duration(i).style("opacity", 0);
    }), Me(l.exit(), i).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${Rt}`).classed(io, (o) => o !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${Rt}`).classed(io, false);
  }
}
An.selectors = Ah;
function Eh(e8) {
  return e8;
}
var Wt = 1, qt = 2, ro = 3, At = 4, Gi = 1e-6;
function Ph(e8) {
  return "translate(" + e8 + ",0)";
}
function Nh(e8) {
  return "translate(0," + e8 + ")";
}
function Lh(e8) {
  return (t) => +e8(t);
}
function Bh(e8, t) {
  return t = Math.max(0, e8.bandwidth() - t * 2) / 2, e8.round() && (t = Math.round(t)), (n) => +e8(n) + t;
}
function Ih() {
  return !this.__axis;
}
function En(e8, t) {
  var n = [], o = null, i = null, a = 6, r = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = e8 === Wt || e8 === At ? -1 : 1, h = e8 === At || e8 === qt ? "x" : "y", d = e8 === Wt || e8 === ro ? Ph : Nh;
  function c(f) {
    var m = o ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), g = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Eh), y = Math.max(a, 0) + s, v = t.range(), _ = +v[0] + l, b = +v[v.length - 1] + l, T = (t.bandwidth ? Bh : Lh)(t.copy(), l), C = f.selection ? f.selection() : f, M = C.selectAll(".domain").data([null]), E = C.selectAll(".tick").data(m, t).order(), j = E.exit(), V = E.enter().append("g").attr("class", "tick"), J = E.select("line"), L = E.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(V), J = J.merge(V.append("line").attr("stroke", "currentColor").attr(h + "2", u * a)), L = L.merge(V.append("text").attr("fill", "currentColor").attr(h, u * y).attr("dy", e8 === Wt ? "0em" : e8 === ro ? "0.71em" : "0.32em")), f !== C && (M = M.transition(f), E = E.transition(f), J = J.transition(f), L = L.transition(f), j = j.transition(f).attr("opacity", Gi).attr("transform", function(O) {
      return isFinite(O = T(O)) ? d(O + l) : this.getAttribute("transform");
    }), V.attr("opacity", Gi).attr("transform", function(O) {
      var z = this.parentNode.__axis;
      return d((z && isFinite(z = z(O)) ? z : T(O)) + l);
    })), j.remove(), M.attr("d", e8 === At || e8 === qt ? r ? "M" + u * r + "," + _ + "H" + l + "V" + b + "H" + u * r : "M" + l + "," + _ + "V" + b : r ? "M" + _ + "," + u * r + "V" + l + "H" + b + "V" + u * r : "M" + _ + "," + l + "H" + b), E.attr("opacity", 1).attr("transform", function(O) {
      return d(T(O) + l);
    }), J.attr(h + "2", u * a), L.attr(h, u * y).text(g), C.filter(Ih).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e8 === qt ? "start" : e8 === At ? "end" : "middle"), C.each(function() {
      this.__axis = T;
    });
  }
  return c.scale = function(f) {
    return arguments.length ? (t = f, c) : t;
  }, c.ticks = function() {
    return n = Array.from(arguments), c;
  }, c.tickArguments = function(f) {
    return arguments.length ? (n = f == null ? [] : Array.from(f), c) : n.slice();
  }, c.tickValues = function(f) {
    return arguments.length ? (o = f == null ? null : Array.from(f), c) : o && o.slice();
  }, c.tickFormat = function(f) {
    return arguments.length ? (i = f, c) : i;
  }, c.tickSize = function(f) {
    return arguments.length ? (a = r = +f, c) : a;
  }, c.tickSizeInner = function(f) {
    return arguments.length ? (a = +f, c) : a;
  }, c.tickSizeOuter = function(f) {
    return arguments.length ? (r = +f, c) : r;
  }, c.tickPadding = function(f) {
    return arguments.length ? (s = +f, c) : s;
  }, c.offset = function(f) {
    return arguments.length ? (l = +f, c) : l;
  }, c;
}
function zi(e8) {
  return En(Wt, e8);
}
function Ki(e8) {
  return En(qt, e8);
}
function Wi(e8) {
  return En(ro, e8);
}
function qi(e8) {
  return En(At, e8);
}
const Oh = Object.assign(Object.assign({}, Ft), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: true, tickLine: true, domainLine: true, numTicks: void 0, minMaxTicksOnly: false, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: false, tickTextTrimType: Is.Middle, tickTextFitMode: ha.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: true, tickPadding: 8, tickTextHideOverlapping: void 0 }), yr = ne`
  label: axis-component;
`, $h = mn`
  :root {
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-axis-font-family: */
    --vis-axis-tick-color: #e8e9ef;
    /* --vis-axis-domain-color: // Undefined by default to allow fallback to var(--vis-axis-tick-color) */
    --vis-axis-grid-color: #e8e9ef;
    --vis-axis-label-color: #6c778c;
    --vis-axis-tick-label-color: #6c778c;
    --vis-axis-tick-label-font-size: 12px;
    --vis-axis-tick-label-cursor: default;
    --vis-axis-tick-label-text-decoration: none;
    --vis-axis-label-font-size: 14px;
    --vis-axis-tick-line-width: 1px;
    --vis-axis-tick-label-hide-transition: opacity 400ms ease-in-out;
    --vis-axis-grid-line-width: 1px;
    /* --vis-axis-domain-line-width: // Undefined by default to allow fallback to var(--vis-axis-grid-line-width) */

    --vis-dark-axis-tick-color: #6c778c;
    /* --vis-dark-axis-domain-color: // Undefined by default to allow fallback to var(--vis-dark-axis-tick-color) */
    --vis-dark-axis-tick-label-color: #e8e9ef;
    --vis-dark-axis-grid-color: #6c778c;
    --vis-dark-axis-label-color: #fefefe;
  }

  body.theme-dark ${`.${yr}`} {
    --vis-axis-tick-color: var(--vis-dark-axis-tick-color);
    --vis-axis-domain-color: var(--vis-dark-axis-domain-color);
    --vis-axis-tick-label-color: var(--vis-dark-axis-tick-label-color);
    --vis-axis-grid-color: var(--vis-dark-axis-grid-color);
    --vis-axis-label-color: var(--vis-dark-axis-label-color);
  }
`, Ho = ne`
  label: hide-tick-line;
`, Fo = ne`
  label: hide-domain;
`, br = ne`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${Ho}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Fo}`} {
    .domain {
      opacity: 0;
    }
  }
`, xr = ne`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
  }
`, wr = ne`
  label: tick;

  stroke: none;
  font-size: var(--vis-axis-tick-label-font-size);

  line {
    stroke: var(--vis-axis-tick-color);
    stroke-width: var(--vis-axis-tick-line-width);
  }

  text {
    fill: var(--vis-axis-tick-label-color);
    cursor: var(--vis-axis-tick-label-cursor);
    font-family: var(--vis-axis-font-family, var(--vis-font-family));
    text-decoration: var(--vis-axis-tick-label-text-decoration);
    stroke: none;
  }
`, so = ne`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, Sr = ne`
  label: tick-label;
`, kr = ne`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, Uh = Object.freeze(Object.defineProperty({ __proto__: null, axis: br, globalStyles: $h, grid: xr, hideDomain: Fo, hideTickLine: Ho, label: so, root: yr, tick: wr, tickLabel: Sr, tickLabelHideable: kr }, Symbol.toStringTag, { value: "Module" }));
class Tr extends Mn {
  constructor(t) {
    super(), this._defaultConfig = Oh, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", xr);
  }
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === Z.X ? K.Bottom : K.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: o } } = this;
    switch (n) {
      case Z.X: {
        const a = this._axisSizeBBox.x + this._axisSizeBBox.width, r = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, s = a - this._width > 1 ? a - this._width : 0;
        switch (o) {
          case K.Top:
            return { top: t.height, left: r, right: s };
          case K.Bottom:
          default:
            return { bottom: t.height, left: r, right: s };
        }
      }
      case Z.Y: {
        const i = t.height > this._height ? (t.height - this._height) / 2 : 0, a = i, r = i;
        switch (o) {
          case K.Right:
            return { right: t.width, top: a, bottom: r };
          case K.Left:
          default:
            return { left: t.width, top: a, bottom: r };
        }
      }
    }
  }
  getRequiredMargin() {
    return this._requiredMargin;
  }
  getOffset(t) {
    const { config: { type: n, position: o } } = this;
    switch (n) {
      case Z.X:
        switch (o) {
          case K.Top:
            return { top: t.top, left: t.left };
          case K.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case Z.Y:
        switch (o) {
          case K.Right:
            return { top: t.top, left: t.left + this._width };
          case K.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: o } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), o.gridLine) {
      const i = this._buildGrid().tickFormat(() => "");
      i.tickValues(this._getConfiguredTickValues()), this.gridGroup.selectAll("*").interrupt(), Me(this.gridGroup, t).call(i).style("opacity", 1);
    } else Me(this.gridGroup, t).style("opacity", 0);
    o.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: o } } = this, i = this._getNumTicks();
    switch (t) {
      case Z.X:
        switch (n) {
          case K.Top:
            return zi(this.xScale).ticks(i).tickPadding(o);
          case K.Bottom:
          default:
            return Wi(this.xScale).ticks(i).tickPadding(o);
        }
      case Z.Y:
        switch (n) {
          case K.Right:
            return Ki(this.yScale).ticks(i).tickPadding(o);
          case K.Left:
          default:
            return qi(this.yScale).ticks(i).tickPadding(o);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, o = this._getNumTicks();
    switch (t) {
      case Z.X:
        switch (n) {
          case K.Top:
            return zi(this.xScale).ticks(o * 2).tickSize(-this._height).tickSizeOuter(0);
          case K.Bottom:
          default:
            return Wi(this.xScale).ticks(o * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case Z.Y:
        switch (n) {
          case K.Right:
            return Ki(this.yScale).ticks(o * 2).tickSize(-this._width).tickSizeOuter(0);
          case K.Left:
          default:
            return qi(this.yScale).ticks(o * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: o } = this, i = this._buildAxis(), a = this._getConfiguredTickValues() || i.scale().ticks(this._getNumTicks());
    i.tickValues(a), t.selectAll("*").interrupt(), Me(t, n).call(i);
    const r = t.selectAll("g.tick");
    r.classed(wr, true).style("font-size", o.tickTextFontSize);
    const s = t.selectAll("g.tick > text").filter((l) => a.some((u) => Os(l, u))).classed(Sr, true).classed(kr, !!o.tickTextHideOverlapping).style("fill", o.tickTextColor);
    if (s.nodes().forEach((l) => $s(l)), s.each((l, u, h) => {
      var d, c;
      let f = (c = (d = o.tickFormat) === null || d === void 0 ? void 0 : d.call(o, l, u, a)) !== null && c !== void 0 ? c : `${l}`;
      const m = h[u], g = o.tickTextWidth || (o.type === Z.X ? this._containerWidth / (r.size() + 1) : this._containerWidth / 5), y = getComputedStyle(m), v = Number.parseFloat(y.fontSize), _ = y.fontFamily, b = { verticalAlign: o.type === Z.X ? qo.Top : qo.Middle, width: g, textRotationAngle: o.tickTextAngle, separator: o.tickTextSeparator, wordBreak: o.tickTextForceWordBreak };
      if (o.tickTextFitMode === ha.Trim) {
        const C = Et(m).text(f);
        Us(C, g, o.tickTextTrimType, true, v, 0.58), f = Et(m).text();
      }
      Hs(m, { text: f, fontFamily: _, fontSize: v }, b);
    }), t.classed(br, true).classed(Ho, !o.tickLine).classed(Fo, !o.domainLine), o.fullSize) {
      const l = this._getFullDomainPath(0);
      Me(t.select(".domain"), n).attr("d", l);
    }
  }
  _resolveTickLabelOverlap(t = this.axisGroup) {
    const { config: n } = this, o = t.selectAll("g.tick > text");
    if (!n.tickTextHideOverlapping) {
      o.style("opacity", null);
      return;
    }
    cancelAnimationFrame(this._collideTickLabelsAnimFrameId), this._collideTickLabelsAnimFrameId = requestAnimationFrame(() => {
      this._collideTickLabels(o);
    });
  }
  _collideTickLabels(t) {
    t.each((o, i, a) => {
      const r = a[i];
      r._visible = true;
    });
    const n = 3;
    for (let o = 0; o < n; o += 1) t.each((i, a, r) => {
      const s = r[a];
      if (!s._visible) return;
      const u = s.getBoundingClientRect();
      for (let h = a + 1; h < r.length; h += 1) {
        if (a === h) continue;
        const d = r[h];
        if (d._visible) {
          const f = d.getBoundingClientRect();
          if (Fs(u, f, -5)) {
            d._visible = false;
            break;
          }
        }
      }
    });
    t.each((o, i, a) => {
      const r = a[i];
      Et(r).style("opacity", r._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n) return n;
    if (t === Z.X) {
      const o = this.xScale.range(), i = o[1] - o[0];
      return Math.floor(i / 175);
    }
    if (t === Z.Y) {
      const o = this.yScale.range(), i = Math.abs(o[0] - o[1]);
      return Math.pow(i, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === Z.X ? this.xScale : this.yScale, o = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((i) => i >= o[0] && i <= o[1]) : t.minMaxTicksOnly || t.type === Z.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? o : null;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case Z.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case Z.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: o, label: i, labelMargin: a, labelFontSize: r } = this.config;
    t.selectAll(`.${so}`).remove();
    const s = this.getPosition(), { width: l, height: u } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), h = o === Z.X ? this._width / 2 : Math.pow(-1, +(s === K.Left)) * l, d = o === Z.X ? Math.pow(-1, +(s === K.Top)) * u : this._height / 2, c = o === Z.X ? 0 : Math.pow(-1, +(s === K.Left)) * a, f = o === Z.X ? Math.pow(-1, +(s === K.Top)) * a : 0, m = o === Z.Y ? -90 : 0;
    t.append("text").attr("class", so).text(i).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${h + c},${d + f}) rotate(${m})`).style("font-size", r).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case Z.X:
        switch (n) {
          case K.Top:
            return 0;
          case K.Bottom:
          default:
            return 0.75;
        }
      case Z.Y:
        switch (n) {
          case K.Right:
            return 0.75;
          case K.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: o, position: i } } = this, a = this.g.selectAll("g.tick > text"), r = this._getTickTextAnchor(n), s = t === Z.X ? 0 : this._getYTickTextTranslate(n, i), l = o ? `translate(${s},0) rotate(${o})` : `translate(${s},0)`;
    a.attr("transform", l).attr("text-anchor", r);
  }
  _getTickTextAnchor(t) {
    switch (t) {
      case lt.Left:
        return "start";
      case lt.Right:
        return "end";
      case lt.Center:
        return "middle";
      default:
        return null;
    }
  }
  _getYTickTextTranslate(t, n = K.Left) {
    const i = this._axisRawBBox.width - 9;
    switch (t) {
      case lt.Left:
        return n === K.Left ? i * -1 : 0;
      case lt.Right:
        return n === K.Left ? 0 : i;
      case lt.Center:
        return n === K.Left ? i * -0.5 : i * 0.5;
      default:
        return 0;
    }
  }
}
Tr.selectors = Uh;
const Hh = Object.assign(Object.assign({}, Ft), { yStacked: void 0, baseline: null, duration: 100, tooltip: void 0, template: (e8, t) => "", hideWhenFarFromPointer: true, hideWhenFarFromPointerDistance: 100, snapToData: true, getCircles: void 0, color: void 0, strokeColor: void 0, strokeWidth: void 0 }), Fh = mn`
  :root {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`, Vh = ne`
  label: crosshair-component;
`, Cr = ne`
  stroke: var(--vis-crosshair-line-stroke-color);
  stroke-width: var(--vis-crosshair-line-stroke-width);
  stroke-opacity: var(--vis-crosshair-line-stroke-opacity);
  pointer-events: none;
`, Mr = ne`
  stroke: var(--vis-crosshair-circle-stroke-color);
  stroke-width: var(--vis-crosshair-circle-stroke-width);
  stroke-opacity: var(--vis-crosshair-circle-stroke-opacity);
  pointer-events: none;
`, Yh = Object.freeze(Object.defineProperty({ __proto__: null, circle: Mr, globalStyles: Fh, line: Cr, root: Vh }, Symbol.toStringTag, { value: "Module" }));
class Dr extends Mn {
  constructor(t) {
    super(), this.clippable = true, this._defaultConfig = Hh, this.config = this._defaultConfig, this.x = 0, this.show = false, this._animFrameId = null, this._accessors = { x: void 0, y: void 0, yStacked: void 0, baseline: void 0 }, t && this.setConfig(t), this.g.style("opacity", this.show ? 1 : 0), this.line = this.g.append("line").attr("class", Cr);
  }
  set accessors(t) {
    this._accessors = t;
  }
  get accessors() {
    var t;
    const { config: n } = this, o = !!(n.x || n.y || n.yStacked), i = o ? n.x : this._accessors.x, a = o ? n.y : this._accessors.y, r = a ? Bt(a) ? a : [a] : void 0, s = o ? n.yStacked : this._accessors.yStacked, l = (t = n.baseline) !== null && t !== void 0 ? t : this._accessors.baseline;
    return { x: i, y: r, yStacked: s, baseline: l };
  }
  setContainer(t) {
    this.container = t, this.container.on("mousemove.crosshair", this._onMouseMove.bind(this)), this.container.on("mouseout.crosshair", this._onMouseOut.bind(this));
  }
  _render(t) {
    const { config: n } = this;
    if (n.snapToData && !this.datum) return;
    const o = Qe(t) ? t : n.duration;
    Me(this.g, o).style("opacity", this.show ? 1 : 0), this.line.attr("y1", 0).attr("y1", this._height), Me(this.line, o, ci).attr("x1", this.x).attr("x2", this.x);
    const i = this.getCircleData(), a = this.g.selectAll("circle").data(i, (s, l) => {
      var u;
      return (u = s.id) !== null && u !== void 0 ? u : l;
    }), r = a.enter().append("circle").attr("class", Mr).attr("r", 0).attr("cx", this.x).attr("cy", (s) => s.y).style("fill", (s) => s.color).style("stroke", (s) => s.strokeColor).style("stroke-width", (s) => s.strokeWidth);
    Me(r.merge(a), o, ci).attr("cx", this.x).attr("cy", (s) => s.y).attr("r", 4).style("opacity", (s) => s.opacity).style("fill", (s) => s.color).style("stroke", (s) => s.strokeColor).style("stroke-width", (s) => s.strokeWidth), a.exit().remove();
  }
  hide() {
    this._onMouseOut();
  }
  _onMouseMove(t) {
    var n, o;
    const { config: i, datamodel: a, element: r } = this;
    !this.accessors.x && (!((n = a.data) === null || n === void 0) && n.length) && console.warn("Unovis | Crosshair: X accessor function has not been configured. Please check if it's present in the configuration object");
    const [s] = jo(t, r), l = this.xScale.range();
    if (i.snapToData) {
      !this.accessors.y && !this.accessors.yStacked && (!((o = a.data) === null || o === void 0) && o.length) && console.warn("Unovis | Crosshair: Y accessors have not been configured. Please check if they're present in the configuration object");
      const u = this.xScale, h = u.invert(s);
      if (this.datum = Vs(a.data, h, this.accessors.x), this.datumIndex = a.data.indexOf(this.datum), !this.datum) return;
      this.x = ct(Math.round(u(Ne(this.datum, this.accessors.x, this.datumIndex))), 0, this._width), this.show = this.x >= 0 && this.x <= this._width && (!i.hideWhenFarFromPointer || Math.abs(this.x - s) < i.hideWhenFarFromPointerDistance);
    } else this.x = ct(s, l[0], l[1]), this.show = s >= l[0] - 2 && s <= l[1] + 2;
    window.cancelAnimationFrame(this._animFrameId), this._animFrameId = window.requestAnimationFrame(() => {
      this._render();
    }), this.show ? this._showTooltip(t) : this._hideTooltip();
  }
  _onMouseOut() {
    this.show = false, window.cancelAnimationFrame(this._animFrameId), this._animFrameId = window.requestAnimationFrame(() => {
      this._render();
    }), this._hideTooltip();
  }
  _showTooltip(t) {
    var n;
    const { config: o } = this, i = (n = o.tooltip) !== null && n !== void 0 ? n : this.tooltip;
    if (!i) return;
    const a = i.getContainer() || this.container.node(), [r, s] = i.isContainerBody() ? [t.clientX, t.clientY] : jo(t, a), l = o.template(this.datum, this.xScale.invert(this.x));
    if (i.config.followCursor = true, !i.config.horizontalPlacement || i.config.horizontalPlacement === K.Auto) {
      const u = i.isContainerBody() ? r - this.container.node().getBoundingClientRect().left : r;
      i.overrideHorizontalPlacement(u > this._containerWidth / 2 ? K.Left : K.Right);
    }
    l && i.show(l, { x: r, y: s });
  }
  _hideTooltip() {
    var t;
    const { config: n } = this, o = (t = n.tooltip) !== null && t !== void 0 ? t : this.tooltip;
    o == null ? void 0 : o.hide();
  }
  getYDataExtent() {
    return [void 0, void 0];
  }
  getCircleData() {
    var t, n;
    const { config: o, datamodel: { data: i } } = this;
    if (Ys(o.getCircles)) return o.getCircles(this.xScale.invert(this.x), i, this.yScale);
    if (o.snapToData && this.datum) {
      const a = (t = this.accessors.y) !== null && t !== void 0 ? t : [], r = (n = this.accessors.yStacked) !== null && n !== void 0 ? n : [], s = Ne(this.datum, this.accessors.baseline, this.datumIndex) || 0, l = Gs(this.datum, this.datumIndex, ...r).map((h, d, c) => ({ y: this.yScale(h + s), opacity: Qe(Ne(this.datum, r[d])) ? 1 : 0, color: Ie(this.datum, o.color, d), strokeColor: o.strokeColor ? Ie(this.datum, o.strokeColor, d) : void 0, strokeWidth: o.strokeWidth ? Ne(this.datum, o.strokeWidth, d) : void 0 })), u = a.map((h, d) => {
        const c = Ne(this.datum, h);
        return { y: this.yScale(c), opacity: Qe(c) ? 1 : 0, color: Ie(this.datum, o.color, l.length + d), strokeColor: o.strokeColor ? Ie(this.datum, o.strokeColor, d) : void 0, strokeWidth: o.strokeWidth ? Ne(this.datum, o.strokeWidth, d) : void 0 };
      });
      return l.concat(u);
    }
    return [];
  }
}
Dr.selectors = Yh;
const Gh = Object.assign(Object.assign({}, Ft), { color: void 0, curveType: ee.MonotoneX, baseline: () => 0, opacity: 1, cursor: null, minHeight1Px: false }), Rr = ne`
  label: area-component;
`, zh = mn`
  :root {
    --vis-area-cursor: default;
    --vis-area-fill-opacity: 1;
    --vis-area-stroke-color: none;
    --vis-area-stroke-width: 0px;
    --vis-area-stroke-dasharray: none;
    --vis-area-stroke-opacity: 1;
    --vis-area-hover-fill-opacity: none;
    --vis-area-hover-stroke-width: none;

    /* Dark Theme */
    --vis-dark-area-stroke-color: none;
  }

  body.theme-dark ${`.${Rr}`} {
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`, lo = ne`
  label: area;
  cursor: var(--vis-area-cursor);
  fill-opacity: var(--vis-area-fill-opacity);
  stroke-width: var(--vis-area-stroke-width);
  stroke-dasharray: var(--vis-area-stroke-dasharray);
  stroke: var(--vis-area-stroke-color);
  stroke-opacity: var(--vis-area-stroke-opacity);

  &:hover {
    fill-opacity: var(--vis-area-hover-fill-opacity);
    stroke-width: var(--vis-area-hover-stroke-width);
  }
`, Kh = Object.freeze(Object.defineProperty({ __proto__: null, area: lo, globalStyles: zh, root: Rr }, Symbol.toStringTag, { value: "Module" }));
class Pn extends Mn {
  constructor(t) {
    super(), this._defaultConfig = Gh, this.config = this._defaultConfig, this.stacked = true, this.events = { [Pn.selectors.area]: {} }, t && this.setConfig(t), this.stacked = Array.isArray(this.config.y);
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: o } } = this, i = Qe(t) ? t : n.duration, a = to[n.curveType];
    this._areaGen = Xd().x((g) => g.x).y0((g) => g.y0).y1((g) => {
      const y = Math.abs(g.y1 - g.y0) < 1;
      return g.y1 - (y && n.minHeight1Px ? 1 : 0);
    }).curve(a);
    const r = Bt(n.y) ? n.y : [n.y], s = o.map((g, y) => this.xScale(Ne(g, n.x, y))), l = zs(o, n.baseline, r, this._prevNegative);
    this._prevNegative = l.map((g) => !!g.isMostlyNegative);
    const u = l.map((g) => g.map((y, v) => ({ y0: this.yScale(y[0]), y1: this.yScale(y[1]), x: s[v] }))), h = u.length - 1, d = u.reverse(), c = this.g.selectAll(`.${lo}`).data(d), f = c.enter().append("path").attr("class", lo).attr("d", (g) => this._areaGen(g) || this._emptyPath()).style("opacity", 0).style("fill", (g, y) => Ie(o, n.color, h - y)), m = Me(f.merge(c), i).style("opacity", (g, y) => g.some((_) => _.y0 - _.y1 !== 0) ? Ne(o, n.opacity, h - y) : 0).style("fill", (g, y) => Ie(o, n.color, h - y)).style("cursor", (g, y) => da(o, n.cursor, h - y));
    i ? m.attrTween("d", (y, v, _) => {
      const b = Et(_[v]).attr("d"), T = this._areaGen(y) || this._emptyPath();
      return _r(b, T);
    }) : m.attr("d", (g) => this._areaGen(g) || this._emptyPath()), Me(c.exit(), i).style("opacity", 0).remove();
  }
  getYDataExtent(t) {
    const { config: n, datamodel: o } = this, i = Bt(n.y) ? n.y : [n.y], a = t ? ua(o.data, this.xScale.domain(), n.x) : o.data;
    return Ks(a, n.baseline, ...i);
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.domain(), o = this.yScale((n[0] + n[1]) / 2), i = o;
    return this._areaGen([{ y0: o, y1: i, x: t[0] }, { y0: o, y1: i, x: t[1] }]);
  }
}
Pn.selectors = Kh;
const Wh = $({ __name: "index", props: { components: {}, xScale: { type: [Object, Function] }, xDomain: {}, xDomainMinConstraint: {}, xDomainMaxConstraint: {}, xRange: {}, yScale: { type: [Object, Function] }, yDomain: {}, yDomainMinConstraint: {}, yDomainMaxConstraint: {}, yRange: {}, yDirection: {}, xAxis: {}, yAxis: {}, autoMargin: { type: Boolean }, tooltip: {}, crosshair: {}, preventEmptyDomain: { type: [Boolean, null] }, scaleByDomain: { type: Boolean }, annotations: {}, duration: {}, margin: {}, padding: {}, sizing: {}, width: {}, height: {}, svgDefs: {}, ariaLabel: {}, data: {} }, setup(e8, { expose: t }) {
  const n = e8, { data: o } = ze(n), i = Ot(n), a = I(), r = Qi({ components: [], annotations: void 0, crosshair: void 0, tooltip: void 0, xAxis: void 0, yAxis: void 0 }), s = I();
  return ae(o, () => {
    a.value && a.value.setData(o.value, true);
  }), Zt(() => {
    var l;
    r.components.map((u) => u.config), (l = a.value) == null || l.updateContainer({ ...Bn(i.value), ...Bn(r) });
  }), re(() => {
    s.value && (a.value = new Zd(s.value, { ...Bn(r) }, o.value));
  }), Re(() => {
    var l;
    return (l = a.value) == null ? void 0 : l.destroy();
  }), wt(mo, { data: o, update: (l) => r.components = [...r.components, l], destroy: () => {
    var l;
    return r.components = (l = r.components) == null ? void 0 : l.filter((u) => !u.isDestroyed());
  } }), wt(fa, { data: o, update: (l) => r[`${l.config.type}Axis`] = l, destroy: (l) => {
    r[`${l}Axis`] = void 0;
  } }), wt(pa, { data: o, update: (l) => r.crosshair = l, destroy: () => {
    r.crosshair = void 0;
  } }), wt(Ws, { data: o, update: (l) => r.tooltip = l, destroy: () => {
    r.tooltip = void 0;
  } }), wt(qs, { data: o, update: (l) => r.annotations = l, destroy: () => {
    r.annotations = void 0;
  } }), t({ component: a }), (l, u) => (k(), G("div", { "data-vis-xy-container": "", ref_key: "elRef", ref: s, class: "unovis-xy-container" }, [W(l.$slots, "default")], 512));
} }), qh = { "data-vis-component": "" }, jh = $({ __name: "index", props: { color: {}, curveType: {}, baseline: {}, opacity: {}, cursor: {}, minHeight1Px: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = fn(mo), o = e8, i = P(() => n.data.value ?? o.data), a = Ot(o), r = I();
  return re(() => {
    ke(() => {
      var s;
      r.value = new Pn(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Re(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ae(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (k(), G("div", qh));
} }), Zh = { "data-vis-axis": "" }, Xh = $({ __name: "index", props: { position: {}, type: {}, fullSize: { type: Boolean }, label: {}, labelFontSize: {}, labelMargin: {}, labelColor: {}, gridLine: { type: Boolean }, tickLine: { type: Boolean }, domainLine: { type: Boolean }, minMaxTicksOnly: { type: Boolean }, minMaxTicksOnlyWhenWidthIsLess: {}, tickFormat: { type: Function }, tickValues: {}, numTicks: {}, tickTextFitMode: {}, tickTextWidth: {}, tickTextSeparator: {}, tickTextForceWordBreak: { type: Boolean }, tickTextTrimType: {}, tickTextFontSize: {}, tickTextAlign: {}, tickTextColor: {}, tickTextAngle: {}, tickTextHideOverlapping: { type: Boolean }, tickPadding: {}, x: {}, y: {}, id: { type: Function }, color: {}, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = fn(fa), o = e8, i = P(() => n.data.value ?? o.data), a = Ot(o), r = I();
  return re(() => {
    ke(() => {
      var s;
      r.value = new Tr(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Re(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy(o.type);
  }), ae(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (k(), G("div", Zh));
} }), Qh = { "data-vis-crosshair": "" }, Jh = $({ __name: "index", props: { data: {} }, setup(e8, { expose: t }) {
  const n = fn(pa), o = e8, i = P(() => n.data.value ?? o.data), a = Ot(o), r = I();
  return re(() => {
    ke(() => {
      var s;
      r.value = new Dr(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Re(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ae(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (k(), G("div", Qh));
} }), ef = { "data-vis-component": "" }, tf = $({ __name: "index", props: { color: {}, curveType: {}, lineWidth: {}, lineDashArray: {}, fallbackValue: {}, highlightOnHover: { type: Boolean }, cursor: {}, interpolateMissingData: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = fn(mo), o = e8, i = P(() => n.data.value ?? o.data), a = Ot(o), r = I();
  return re(() => {
    ke(() => {
      var s;
      r.value = new An(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Re(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ae(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (k(), G("div", ef));
} }), nf = $({ __name: "Line.client", props: { data: {} }, setup(e8) {
  const t = qr(), n = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }), o = (s) => s[0], i = (s) => s[1], a = (s) => n.format(new Date(s));
  function r(s) {
    if (!t.default) return "";
    const l = { setup: () => () => {
      var _a2;
      return (_a2 = t.default) == null ? void 0 : _a2.call(t, { data: s });
    } }, u = document.createElement("div");
    return jr(l).mount(u), u.innerHTML;
  }
  return (s, l) => (k(), B(p(Wh), { data: s.data, padding: { top: 128 } }, { default: A(() => [D(p(jh), { color: "url('/assets/vertical-stripes.svg#vertical-stripes')", x: o, y: i }), D(p(tf), { x: o, y: i, color: "rgb(var(--nq-green))" }), D(p(js), { "vertical-shift": 1e3 }), D(p(Xh), { type: "x", "grid-line": false, "tick-format": a }), D(p(Jh), { "data-crosshair": "", color: "rgb(var(--nq-blue))", template: r })]), _: 1 }, 8, ["data"]));
} }), of = Object.assign(Ke(nf, [["__scopeId", "data-v-1b46eb60"]]), { __name: "ChartLine" }), af = { flex: "~ align-center", "p-2": "", "rounded-full": "", "bg-neutral-200": "", "w-max": "", relative: "" }, rf = ["id"], sf = ["value"], lf = $({ __name: "PillSelector", props: Zr({ options: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e8) {
  const t = na(e8, "modelValue"), n = gs(), o = oa("labels"), i = I();
  return ae(() => t.value, async () => {
    var _a2, _b;
    await ke();
    const a = (_a2 = o.value) == null ? void 0 : _a2.find((r) => r.id === String(t.value));
    (_b = o.value) == null ? void 0 : _b.forEach((r) => r.dataset.state = a && r.isEqualNode(a) ? "active" : void 0), a && (i.value = { left: `${a.offsetLeft}px`, width: `${a.offsetWidth}px`, transition: n ? "left 300ms, width 200ms" : "none" });
  }, { immediate: true }), (a, r) => (k(), G("div", af, [(k(true), G(Ae, null, et(a.options, (s, l) => (k(), G("label", { id: String(s), ref_for: true, ref_key: "labels", ref: o, key: l, text: "12 neutral-800 data-active:neutral hocus:neutral-900", flex: "~ items-center", "lh-none": "", "px-8": "", "py-4": "", "rounded-full": "", "h-max": "", "cursor-pointer": "", "select-none": "", "transition-colors": "", relative: "", "z-2": "", "nq-label": "" }, [ia(w("input", { "onUpdate:modelValue": r[0] || (r[0] = (u) => t.value = u), type: "radio", value: s, "sr-only": "", onMousedown: r[1] || (r[1] = tt(() => {
  }, ["prevent"])) }, null, 40, sf), [[Xr, t.value]]), nt(" " + de(s), 1)], 8, rf))), 128)), w("div", { "rounded-full": "", "bg-neutral-0": "", "h-20": "", "top-2": "", absolute: "", "z-1": "", style: _t(p(i)) }, null, 4)]));
} }), uf = Object.assign(Ke(lf, [["__scopeId", "data-v-1dff590c"]]), { __name: "PillSelector" }), cf = aa(Zs), df = { "max-w": "none md:$nq-max-width", outline: "~ 1.5 neutral-400", stack: "", "mx-auto": "", "rounded-8": "", "bg-neutral-0": "", "size-full": "", "min-h-128": "", relative: "" }, hf = { "self-start": "!", "justify-self-end": "!", "mr--32": "", "w-max": "", "top--25": "", relative: "", "z-20": "" }, ff = { style: { "background-image": "radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" }, text: "f-lg white", rounded: "6 br-0", "f-px": "16/20", "f-pr": "28/20", "lh-none": "", "ml-auto": "", "pl-20": "", "w-max": "", relative: "", "z-2": "", "f-py-xs": "" }, pf = $({ __name: "RibbonContainer", props: { label: {}, floatingStarts: { type: Boolean, default: true } }, setup(e8) {
  return (t, n) => {
    const o = cf;
    return k(), G("div", df, [W(t.$slots, "default"), w("div", hf, [n[0] || (n[0] = w("div", { "aria-hidden": "", "w-44": "", "origin-bottom-right": "", "translate-y--1": "", "rotate--45": "", "bottom-0": "", "right-0": "", absolute: "", "z-1": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), t.floatingStarts ? (k(), B(o, { key: 0, translate: "-50%", absolute: "", left: "50%", top: "30%", "z-1": "", color: "#e9b213" })) : ie("", true), w("div", ff, de(t.label), 1)])]);
  };
} }), mf = Object.assign(pf, { __name: "RibbonContainer" });
function Nn() {
  const { currency: e8 } = $t(), t = Xt({ key: P(() => ["nim-price", "now", e8.value]), query: async () => {
    var _a2;
    return (await Du([Qt.NIM], [e8.value])).nim[(_a2 = e8.value) == null ? void 0 : _a2.toLowerCase()] || 0;
  }, staleTime: 60 * 1e3 }), n = Xt({ key: P(() => ["nim-price", "1d-ago", e8.value]), query: async () => {
    const o = Date.now() - 864e5;
    return (await Ru(Qt.NIM, e8.value, [o])).get(o) || 0;
  }, staleTime: 1440 * 60 * 1e3 });
  return { price: t.data, priceState: t.state, priceLoading: t.isLoading, priceError: t.error, price1DayAgo: n.data, price1DayAgoState: n.state, price1DayAgoLoading: n.isLoading, price1DayAgoError: n.error, deltaPrice: P(() => !t.data.value || !n.data.value ? 0 : t.data.value - n.data.value) };
}
function Ar() {
  const e8 = yt(), t = Zo(Date.now()), n = Zo(Date.now() - 1440 * 60 * 1e3), o = P(() => `${Xo(t, e8.value)} NIM`), i = Qs / 1e5, a = P(() => `${Xo(i, e8.value)} NIM`);
  return { currentSupply: t, supplyYesterday: n, currentSupplyFormatted: o, maxSupply: i, maxSupplyFormatted: a };
}
function gf() {
  const { price: e8, price1DayAgo: t } = Nn(), { currencyInfo: n } = $t(), { currentSupply: o, supplyYesterday: i } = Ar(), a = yt(), r = P(() => o * (e8.value || 0)), s = P(() => vo(r.value, n.value, a.value)), l = P(() => {
    if (!e8.value || !t.value) return;
    const u = i * t.value;
    return (r.value - u) / u;
  });
  return { marketCap: r, marketCapFormatted: s, marketCapChange: l };
}
const vf = window.setInterval, _f = [he.USD, he.EUR, he.GBP];
function yf(e8) {
  return _f.includes(e8);
}
const Er = new URL("https://min-api.cryptocompare.com/data/v2/histohour");
Er.search = new URLSearchParams({ fsym: "NIM", limit: "48", aggregate: "1", e: "CCCAGG" }).toString();
function bf() {
  const { currencyInfo: e8 } = $t(), { price: t } = Nn(), n = P(() => {
    const c = e8.value.code;
    return yf(c) ? c : he.USD;
  }), o = P(() => n.value !== e8.value.code), { data: i, state: a, error: r, isLoading: s, refetch: l } = Xt({ key: P(() => ["trading_volume", n.value]), query: async () => {
    var _a2, _b;
    const c = Math.floor(Date.now() / 1e3), f = c - c % 3600, m = new URL(Er.toString());
    m.searchParams.set("to_ts", String(f)), m.searchParams.set("tsym", n.value);
    const g = await Ue(m.toString(), yo.CryptoCompare);
    if (g.Message.includes("CCCAGG market does not exist")) throw new Error(`CCCAGG market does not exist for this coin pair (${n.value}-NIM). Url: ${m.toString()}`);
    if (!g || !((_b = (_a2 = g.Data) == null ? void 0 : _a2.Data) == null ? void 0 : _b.length)) throw new Error("Failed to fetch hourly volume data");
    const v = [...g.Data.Data].reverse(), _ = v.slice(0, 24), b = v.slice(24, 48), T = _.reduce((J, L) => J + L.volumeto, 0), C = b.reduce((J, L) => J + L.volumeto, 0);
    let M = T;
    o.value && (M = T * (t.value || 0));
    const E = yt(), j = vo(M, e8.value, E.value), V = C > 0 ? (T - C) / C : 0;
    return { volumeUsd: T, volumeFormatted: j, volumeChange: V };
  }, staleTime: 600 * 1e3, gcTime: 1800 * 1e3, placeholderData: (c) => c }), u = P(() => {
    var _a2;
    return ((_a2 = i.value) == null ? void 0 : _a2.volumeUsd) || 0;
  }), h = P(() => {
    var _a2;
    return ((_a2 = i.value) == null ? void 0 : _a2.volumeFormatted) || "0";
  }), d = P(() => {
    var _a2;
    return ((_a2 = i.value) == null ? void 0 : _a2.volumeChange) || 0;
  });
  {
    const c = vf(() => {
      l();
    }, 3e5);
    Qr(() => {
      clearInterval(c);
    });
  }
  return { volumeUsd: u, volumeFormatted: h, volumeChange: d, volumeState: a, error: r, volumeIsLoading: s, refreshVolume: l };
}
const ji = 1440 * 60 * 1e3, Gn = { "1y": 7, "2y": 7, "5y": 7 }, xf = { "1y": 365, "2y": 730, "5y": 1825 };
function wf(e8) {
  const t = Go("nim_price_period", "1y"), n = P(() => "nimiq_price_history_cache"), o = Go(n.value, {}), i = P(() => `${Vt(e8)}`), a = Date.now(), r = P(() => a - xf[t.value] * ji), s = P(() => {
    const _ = o.value[i.value];
    return _ ? _[t.value] || [] : [];
  }), l = P(() => {
    var _a2, _b;
    const _ = s.value;
    if (!_ || _.length === 0) return true;
    const b = ((_a2 = _.at(-1)) == null ? void 0 : _a2[0]) || 0, T = Date.now() - ji;
    return b < T || (((_b = _.at(0)) == null ? void 0 : _b[0]) || 1 / 0) > r.value;
  }), u = P(() => {
    var _a2, _b;
    const _ = s.value;
    return !_.length || (((_a2 = _.at(0)) == null ? void 0 : _a2[0]) || 1 / 0) > r.value ? r.value : Math.max(((_b = _.at(-1)) == null ? void 0 : _b[0]) || 0, r.value);
  }), h = P(() => ["nimPriceHistory", Vt(e8), t.value, Gn[t.value], u.value, a, Date.now()]), d = I(), { data: c, refetch: f, error: m, state: g, isLoading: y } = Xt({ key: h, query: async () => {
    var _a2;
    try {
      if (d.value = Date.now(), l.value) {
        const _ = await Jt(Qt.NIM, Vt(e8), u.value, a, yo.CryptoCompare, { interval: "days", aggregate: Gn[t.value] }), b = i.value, T = t.value, C = ((_a2 = o.value[b]) == null ? void 0 : _a2[T]) || [], M = Sf(C, _);
        return o.value[b] || (o.value[b] = { "1y": [], "2y": [], "5y": [] }), o.value[b][T] = M, M;
      }
      return s.value;
    } catch (_) {
      return console.error("Error fetching price history:", _), s.value;
    }
  }, placeholderData: s.value, staleTime: 300 * 1e3 });
  re(() => {
    f();
  }), ae([() => Vt(e8), t], () => {
    f();
  });
  const v = Object.keys(Gn);
  return { data: c, error: m, state: g, refetch: f, period: t, periodOptions: v, lastUpdated: d, isLoading: y };
}
function Sf(e8, t) {
  const n = /* @__PURE__ */ new Map();
  for (const [i, a] of e8) n.set(i, a);
  for (const [i, a] of t) n.set(i, a);
  const o = Array.from(n.entries());
  return o.sort((i, a) => i[0] - a[0]), o;
}
const kf = aa(of), Tf = { "data-allow-mismatch": "" }, Cf = ["data-state"], Mf = { flex: "~ gap-8 items-center" }, Df = { text: "f-lg neutral", "font-semibold": "", "lh-none": "", "whitespace-nowrap": "" }, Rf = { "font-semibold": "", "lh-none": "", "f-text-sm": "" }, Af = { flex: "~ gap-6 items-center" }, Ef = { text: "f-xs neutral-800", "font-normal": "", "lh-none": "", "w-max": "" }, Pf = { text: "blue f-3xl", "font-semibold": "", "lh-none": "" }, Nf = { key: 1, flex: "~ items-center", text: "f-2xs neutral-700", "font-semibold": "", "lh-none": "" }, Lf = { grid: "~ cols-1 md:cols-[max-content_1fr]", "size-full": "", relative: "", "of-hidden": "" }, Bf = { key: 0, flex: "~ items-center gap-8", text: " orange f-sm", "translate-x": "100%", "py-4": "", "rounded-br-6": "", "bg-white": "", "right--1": "", "top--1": "", absolute: "", "z-30": "", "f-px-xs": "", border: "b r neutral-400", "lg:w-max": "" }, If = { "max-md": "col-span-full sticky left-0 w-[calc(100vw-80px)] w-max", flex: "~ md:col gap-col-4 gap-row-8 max-md:justify-center", text: "f-2xs neutral-800", "lh-none": "", "md:mt-auto": "" }, Of = { key: 1 }, $f = { group: "", relative: "", "f-pb-xs": "" }, Uf = { "right-32": "", "top-32": "", absolute: "", "z-20": "" }, Hf = { flex: "~ items-center justify-center gap-8", "f-mt-md": "", text: "center f-sm" }, Ff = $({ __name: "PriceChart", props: go(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { currency: t, currencyInfo: n } = $t(), o = yt(), { marketCapChange: i, marketCapFormatted: a } = gf(), { currentSupplyFormatted: r, maxSupplyFormatted: s } = Ar(), { volumeChange: l, volumeFormatted: u, error: h, volumeIsLoading: d } = bf(), { data: c, lastUpdated: f, period: m, periodOptions: g, isLoading: y } = wf(t), { deltaPrice: v, price1DayAgoLoading: _, priceLoading: b, price: T } = Nn(), C = P(() => y.value || b.value || _.value || d.value), M = I(), { width: E } = vs(M), [j, V] = zo(), [J, L] = zo(), O = I("bottom");
  Zt(() => {
    if (!c.value || c.value.length < 2) {
      O.value = "bottom";
      return;
    }
    const U = Math.max(5, Math.floor(c.value.length / 4)), Y = c.value.slice(-U).map(([, Pe]) => Pe), [be, Te] = [Math.min(...Y), Math.max(...Y) * 1.5], ce = Y.reduce((Pe, Be) => Pe + Be, 0) / Y.length || 0, We = be + (Te - be) / 2;
    O.value = ce >= We ? "bottom" : "top";
  });
  const z = P(() => !y.value && !T.value ? "Unable to load price data" : h.value ? h.value : null);
  return (U, Y) => {
    const be = uo, Te = Cs, Ce = ds, ce = kf, We = uf, Pe = Ea, Be = mf, xt = Zi, st = hn;
    return k(), G("div", Tf, [D(p(j), null, { default: A(({ metricValue: fe, metricChange: ge, label: R, tooltipInfo: H }) => [w("div", { flex: "~ col gap-8", relative: "", "data-state": fe === "0" ? "inactive" : "active", "z-1": "", "reka-inactive:animate-pulse": "" }, [Y[2] || (Y[2] = w("div", { outline: "~ 1.5 neutral-200 offset--1.5", "rounded-6": "", "bg-neutral-100": "", "h-full": "", "w-full": "", "inset--12": "", absolute: "", "z--1": "", "reka-active:hidden": "", w: "[calc(100%+24px)]" }, null, -1)), w("div", Mf, [w("span", Df, de(fe), 1), ge ? (k(), G("div", { key: 0, class: ve(ge < 0 ? "text-red" : "text-green"), flex: "~ gap-2 items-center" }, [w("div", { class: ve({ "rotate-180": ge < 0 }), "aria-hidden": "", "size-7": "", "i-nimiq:triangle-up": "" }, null, 2), w("span", Rf, de(("formatPercentage" in U ? U.formatPercentage : p(Qo))(ge, p(o))), 1)], 2)) : ie("", true)]), w("div", Af, [w("p", Ef, de(R), 1), H ? (k(), B(Te, { key: 0 }, { default: A(() => [D(be, { wrapper: "div", field: H }, null, 8, ["field"])]), _: 2 }, 1024)) : ie("", true)])], 8, Cf)]), _: 1 }), D(p(J), null, { default: A(({ data: [fe, ge], deltaPriceOneDay: R }) => [w("div", { flex: "~ col gap-8", f: "$side $side-min-20 $side-max-24", "bg-neutral-0": "", relative: "", "f-py-xs": "", class: ve({ "top-21 mx-20": !R }) }, [Y[3] || (Y[3] = w("div", { "inset-y-0": "", absolute: "", left: "[calc(var(--f-side)*-1)]", w: "$f-side", style: { "background-image": "linear-gradient(to right in oklab, transparent, rgba(var(--nq-neutral-0) / 1))" } }, null, -1)), Y[4] || (Y[4] = w("div", { right: "[calc(var(--f-side)*-1)]", w: "$f-side", style: { "background-image": "linear-gradient(to right in oklab, rgba(var(--nq-neutral-0) / 1), transparent)" }, "inset-y-0": "", absolute: "", "f-w-md": "" }, null, -1)), w("p", Pf, de(("formatFiat" in U ? U.formatFiat : p(vo))(ge, p(n), p(o))), 1), R ? (k(), G("div", Nf, [w("div", { "mr-4": "", "size-8": "", "i-nimiq:triangle-up": "", class: ve({ "rotate-180": R < 0 }) }, null, 2), w("span", null, de(("formatDecimal" in U ? U.formatDecimal : p(Xs))(Math.abs(R), p(o))) + " (" + de(("formatPercentage" in U ? U.formatPercentage : p(Qo))(R / ge, p(o))) + ")", 1)])) : (k(), B(Ce, { key: 0, datetime: fe, year: "numeric", month: "long", day: "numeric", text: "f-2xs right neutral-700", "lh-none": "", "nq-label": "" }, null, 8, ["datetime"]))], 2)]), _: 1 }), D(Be, { label: U.slice.primary.nimPriceChartLabel, shadow: "", "z-3": "", "md:min-h-480": "", "outline-color": "white/20" }, { default: A(() => {
      var _a2;
      return [w("div", Lf, [w("aside", { ref_key: "asideRef", ref: M, "md:border": "r-1 solid neutral-400", grid: "~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24", "w-full": "", relative: "", "f-p-md": "", "max-md:row-start-2": "", "max-md:of-x-auto": "" }, [D(Jr, { "enter-active-class": "transition duration-200 ease-out", "enter-from-class": "op-0", "enter-to-class": "op-100", "leave-active-class": "transition duration-200 ease-out", "leave-from-class": "op-100", "leave-to-class": "op-0" }, { default: A(() => [p(C) || p(z) ? (k(), G("div", Bf, [w("div", { "scale-90": "", class: ve(p(C) ? "i-nimiq:spinner" : "i-nimiq:alert") }, null, 2), w("p", null, de(p(C) ? "Loading..." : p(z)), 1)])) : ie("", true)]), _: 1 }), D(p(V), { "metric-value": p(a), "metric-change": p(i), label: U.slice.primary.marketCapLabel, "tooltip-info": U.slice.primary.marketCapInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), D(p(V), { "metric-value": p(u), "metric-change": p(l), label: U.slice.primary.volume24HLabel, "tooltip-info": U.slice.primary.volume24HInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), D(p(V), { "metric-value": p(r), label: U.slice.primary.totalSupplyLabel, "tooltip-info": U.slice.primary.totalSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), D(p(V), { "metric-value": p(s), label: U.slice.primary.maxSupplyLabel, "tooltip-info": U.slice.primary.maxSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), ia(w("div", If, [Y[5] || (Y[5] = w("span", null, "Last updated:", -1)), p(f) ? (k(), B(Ce, { key: 0, datetime: p(f), year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }, null, 8, ["datetime"])) : (k(), G("span", Of, "Loading..."))], 512), [[es, p(f)]])], 512), w("div", $f, [(k(), B(ce, { key: p(E), data: p(c) || [], leader: "", "rounded-8": "", "h-full": "" }, { default: A(({ data: [fe, ge] }) => [D(p(L), { data: [fe, ge] }, null, 8, ["data"])]), _: 1 }, 8, ["data"])), w("div", Uf, [D(p(L), { "transition-opacity": "", "leader-hocus:invisible": "", data: ((_a2 = p(c)) == null ? void 0 : _a2.at(-1)) || [0, 0], "delta-price-one-day": p(v) }, null, 8, ["data", "delta-price-one-day"])]), w("div", { "data-allow-mismatch": "", class: ve(p(O) === "top" ? "top-128" : "bottom-64"), flex: "~ items-center gap-8", absolute: "", "z-20": "", "f-right-md": "" }, [D(We, { modelValue: p(m), "onUpdate:modelValue": Y[0] || (Y[0] = (fe) => Xe(m) ? m.value = fe : null), options: p(g), "self-end": "", "justify-self-end": "", ring: "white 3" }, null, 8, ["modelValue", "options"]), D(Pe, { modelValue: p(t), "onUpdate:modelValue": Y[1] || (Y[1] = (fe) => Xe(t) ? t.value = fe : null), bg: "darkblue hocus:neutral-200", transition: "[background-color]", "text-14": "", "font-normal": "", "px-2": "", "rounded-full": "", "h-full": "", "nq-label": "", text: "white hocus:neutral", ring: "white 3", border: "~ 1.5 neutral-200" }, { trigger: A(({ selectedCurrency: fe }) => [nt(de(fe.toLocaleUpperCase()), 1)]), _: 1 }, 8, ["modelValue"])], 2)])])];
    }), _: 1 }, 8, ["label"]), w("p", Hf, [nt(de(U.slice.primary.poweredByLabel) + " ", 1), D(st, { field: U.slice.primary.poweredByLink }, { default: A(() => [D(xt, { op: "80 hocus:100", field: U.slice.primary.poweredByLogo, "w-full": "", "transition-opacity": "", "f-h-sm": "" }, null, 8, ["field"])]), _: 1 }, 8, ["field"])])]);
  };
} }), Vf = Object.assign(Ff, { __name: "PriceChart" }), Yf = {};
function Gf(e8, t) {
  return k(), G(Ae, null, [t[0] || (t[0] = w("div", { "max-w-none": "", "inset-0": "", absolute: "", "z-2": "", "of-hidden": "" }, [w("div", { "inset-0": "", absolute: "", class: "bg-gradient" }), w("div", { "i-custom:buy-and-sell-bg": "", "h-auto": "", w: "140vw md:110vw", "aspect-1.2620087336": "", bottom: "64 md:-256", left: "-64 md:0", absolute: "" })], -1)), w("div", X({ "z-3": "" }, e8.$attrs), [W(e8.$slots, "default", {}, void 0, true)], 16)], 64);
}
const zf = Object.assign(Ke(Yf, [["render", Gf], ["__scopeId", "data-v-dc91b41f"]]), { __name: "BgBuyAndSell" });
function Kf() {
  const { price: e8 } = Nn(), t = I(1), n = I(), o = I("loading"), i = P({ get: () => n.value, set: (l) => {
    n.value = l, o.value = "fiat", e8.value && (t.value = l / e8.value);
  } }), a = P({ get: () => t.value, set: (l) => {
    o.value = "crypto", t.value = l, n.value = l * (e8.value || 0);
  } });
  Js(async () => {
    await el(e8).toMatch((l) => l !== void 0), i.value = e8.value;
  });
  const r = P(() => o.value === "crypto" || o.value === "loading" ? i.value : "fiat"), s = P(() => o.value === "fiat" || o.value === "loading" ? a.value : "crypto");
  return { cryptoAmount: a, fiatAmount: i, lastEdited: o, fiatKey: r, cryptoKey: s };
}
const Wf = { "px-0": "", "bg-neutral-0": "", relative: "", "of-x-clip": "", "data-slice-type": "buy-and-sell-hero" }, qf = { class: "group", "w-full": "", relative: "", flex: "~ items-center gap-12" }, jf = { text: "neutral-600 group-hover:blue/50 hocus:!neutral-800 group-focus-within:blue!", "right-4": "", "top-auto": "", absolute: "", "z-40": "" }, Zf = { class: "group", "w-full": "", relative: "" }, Xf = $({ __name: "BuyAndSell", props: go(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { fiatAmount: t, cryptoAmount: n, fiatKey: o, cryptoKey: i } = Kf(), { currency: a } = $t();
  return (r, s) => {
    const l = Xi, u = ss, h = Ea, d = Vf, c = zf;
    return k(), G("section", Wf, [D(c, { "w-full": "" }, { default: A(() => [D(l, { headline: r.slice.primary.headline, subline: r.slice.primary.subline, px: "$px" }, null, 8, ["headline", "subline"]), w("form", { grid: "~ cols-1 md:cols-[1fr_max-content_1fr] items-center  gap-x-24", "max-md:px": "$px", "mx-auto": "", "mt-40": "", "h-max": "", "max-w-560": "", "w-full": "", onSubmit: s[3] || (s[3] = tt(() => {
    }, ["prevent"])) }, [w("div", qf, [(k(), B(u, { key: p(o), modelValue: p(t), "onUpdate:modelValue": s[0] || (s[0] = (f) => Xe(t) ? t.value = f : null), rounded: "b-0 md:2", required: "", "pr-64": "", "f-text-2xl": "", "max-md:translate-y--1.5": "", "group-focus-within:z-10": "" }, null, 8, ["modelValue"])), w("div", jf, [D(h, { modelValue: p(a), "onUpdate:modelValue": s[1] || (s[1] = (f) => Xe(a) ? a.value = f : null) }, null, 8, ["modelValue"])]), s[4] || (s[4] = w("div", { style: { "background-image": "linear-gradient(to right in oklch, transparent, var(--colors-neutral-0))" }, "w-32": "", "pointer-events-none": "", "inset-y-0": "", "right-64": "", absolute: "" }, null, -1))]), s[7] || (s[7] = w("p", { "text-32": "", "h-max": "", "max-md:hidden": "" }, " = ", -1)), w("div", Zf, [(k(), B(u, { key: p(i), modelValue: p(n), "onUpdate:modelValue": s[2] || (s[2] = (f) => Xe(n) ? n.value = f : null), rounded: "t-0 md:2", required: "", "pr-54": "", "f-text-2xl": "", "group-focus-within:z-10": "" }, null, 8, ["modelValue"])), s[5] || (s[5] = w("div", { style: { "background-image": "linear-gradient(to right in oklch, transparent, var(--colors-neutral-0))" }, "w-32": "", "pointer-events-none": "", "inset-y-0": "", "right-54": "", absolute: "" }, null, -1)), s[6] || (s[6] = w("div", { text: "neutral-600 group-hover:blue/50 group-focus-within:blue!", "transition-colors": "", "right-12": "", "top-17": "", absolute: "", "nq-label": "", "f-text": "12/16" }, " NIM ", -1))])], 32), D(d, X(r.$props, { px: "16 md:$px", "nq-wide": "", "mt-96": "", "max-md:w": "[calc(100%+64px)]" }), null, 16)]), _: 1 })]);
  };
} }), Qf = Object.assign(Xf, { __name: "HeroBuyAndSell" }), Jf = { "px-0": "", "pb-0": "", "bg-darkerblue": "", "of-x-clip": "", "f-pt-3xl": "" }, ep = { "bg-neutral-100": "", "max-w-none": "", "w-full": "", "z-1": "" }, tp = { key: 0, flex: "~ gap-8 items-center", "text-white": "", "f-mt-sm": "" }, np = { stack: "", "rounded-full": "", "size-40": "", ring: "1.5 white/40" }, op = { stack: "", "rounded-full": "", "size-40": "", ring: "1.5 white/40" }, ip = { key: 2, "f-mt-sm": "" }, ap = { text: "f-xs white/50", "nq-label": "" }, rp = { flex: "~ gap-8 items-center", "text-white": "", "f-mt-2xs": "" }, sp = $({ __name: "OasisWorld", props: { items: {}, label: {} }, async setup(e8) {
  let t, n;
  const { data: o } = ([t, n] = ts(() => nl()), t = await t, n(), t), i = oa("scroller"), a = P(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.querySelector("ul");
  }), { x: r } = _s(a), { width: s } = ys(a), l = P(() => {
    if (!s.value || !a.value) return 0;
    const c = a.value.scrollWidth, f = s.value - c, m = Math.min(100, Math.max(0, -r.value / f * 100));
    return Math.round(m) / 100;
  }), u = { Europe: "bg-green", "Central America": "bg-blue", World: "bg-orange" }, h = { Europe: ["i-nimiq:logos-euro-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-usd-outline-mono", "i-nimiq:logos-colones-outline-mono"], World: [] }, d = { Europe: ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x-0.5"], World: [] };
  return (c, f) => {
    const m = uo, g = hn, y = tl;
    return k(), G("section", Jf, [w("div", { class: ve(["world-container", { first: p(l) < 0.33, second: p(l) >= 0.33 && p(l) < 0.66, third: p(l) >= 0.66 }]), style: _t(`--progress: ${p(l)}`), "max-w-none": "", "w-full": "", "aspect-2": "", relative: "" }, f[0] || (f[0] = [w("div", { "left-0": "", "top-0": "", absolute: "" }, [w("div", { rounded: "100%", class: "oval", stack: "", "bg-neutral-100": "" }, [w("div", { "i-oasis-regions:europe": "" }), w("div", { "i-oasis-regions:central-america": "" }), w("div", { "i-oasis-regions:rest-of-the-world": "" })])], -1)]), 6), w("div", ep, [w("div", { ref_key: "scroller", ref: a, "mx-auto": "", "max-w-480": "", "w-full": "", relative: "" }, [D(y, { items: c.items, style: { "--px": "32px", "--pb": "64px" } }, { default: A(({ item: { content: v, kind: _, link: b } }) => [w("div", { class: ve(u[_]), "rounded-8": "", "max-w-480": "", "w-full": "", "f-p-lg": "", "md:w-416": "" }, [D(m, { wrapper: "div", field: v, class: "dark", "nq-prose-compact": "", "text-white": "" }, null, 8, ["field"]), _ !== "World" ? (k(), G("div", tp, [(k(true), G(Ae, null, et(h[_], (T, C) => (k(), G("div", { key: C, flex: "~ gap-8" }, [w("div", np, [w("div", { class: ve(T), "size-24": "" }, null, 2)])]))), 128)), f[1] || (f[1] = w("div", { "mx-12": "", "op-50": "", "f-text-2xl": "", "i-nimiq:exchange": "" }, null, -1)), (k(true), G(Ae, null, et(d[_], (T, C) => (k(), G("div", { key: C, flex: "~ gap-8" }, [w("div", op, [w("div", { class: ve(T), "size-24": "" }, null, 2)])]))), 128))])) : ie("", true), ("hasLink" in c ? c.hasLink : p(as))(b) ? (k(), B(g, { key: 1, field: b, external: "", "f-mt-md": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-white": "" }, null, 8, ["field"])) : ie("", true), _ !== "Europe" ? (k(), G("div", ip, [w("h4", ap, de(c.label), 1), w("div", rp, [D(g, { field: p(o).x.link, bg: "white/20 hocus:white/40", external: "", stack: "", "rounded-full": "", "size-40": "", "transition-colors": "" }, { default: A(() => f[2] || (f[2] = [w("div", { text: "white/80 f-xl", "transition-colors": "", "i-nimiq:logos-twitter-mono": "" }, null, -1)])), _: 2, __: [2] }, 1032, ["field"]), D(g, { field: p(o).telegram.link, bg: "white/20 hocus:white/40", external: "", stack: "", "rounded-full": "", "size-40": "", "transition-colors": "" }, { default: A(() => f[3] || (f[3] = [w("div", { text: "white/80 f-lg hocus:white", "translate-x--1": "", "translate-y-1": "", "transition-colors": "", "i-nimiq:logos-telegram-mono": "" }, null, -1)])), _: 2, __: [3] }, 1032, ["field"])])])) : ie("", true)], 2)]), _: 1 }, 8, ["items"])], 512)])]);
  };
} }), lp = Object.assign(Ke(sp, [["__scopeId", "data-v-d2b2833d"]]), { __name: "HeroOasisWorld" }), Yp = $({ __name: "index", props: go(), setup(e8) {
  return (t, n) => {
    const o = Pr, i = Zl, a = fu, r = hs, s = bu, l = Qf, u = lp;
    return k(), G(Ae, null, [t.slice.variation === "default-slice" ? (k(), B(o, X({ key: 0 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ie("", true), t.slice.variation === "twoColumn" ? (k(), B(i, X({ key: 1 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ie("", true), t.slice.variation === "home2024" ? (k(), B(a, { key: 2, headline: t.slice.primary.headline, "sub-headline-template": t.slice.primary.subheadline, link: t.slice.primary.link, "data-slice-type": t.slice.slice_type }, null, 8, ["headline", "sub-headline-template", "link", "data-slice-type"])) : ie("", true), t.slice.variation === "leftAligned" ? (k(), B(r, { key: 3, headline: t.slice.primary.headline, subline: t.slice.primary.subline }, null, 8, ["headline", "subline"])) : ie("", true), t.slice.variation === "staking" ? (k(), B(s, { key: 4, headline: t.slice.primary.headline, cta: t.slice.primary.cta }, null, 8, ["headline", "cta"])) : ie("", true), t.slice.variation === "buyAndSell" ? (k(), B(l, cn(X({ key: 5 }, t.$props)), null, 16)) : ie("", true), t.slice.variation === "oasis" ? (k(), B(u, { key: 6, items: t.slice.primary.items, label: t.slice.primary.beTheFirstToKnowLabel }, null, 8, ["items", "label"])) : ie("", true)], 64);
  };
} });
export {
  Yp as default
};
