var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as Pr } from "./DSuxm-mJ.js";
import { d as I, j as B, L as ie, b as $, o as T, m as j, c as V, r as Je, F as Ee, w as A, a as R, u as p, R as z, ai as Kn, U as Ge, B as O, f as ae, a1 as ke, aj as Zi, E as re, a0 as Nr, ac as Ze, W as ht, $ as et, G as Ae, ak as Xi, S as cn, al as Lr, am as Br, g as Ve, t as ue, T as Qi, h as _t, V as jt, e as w, D as Ji, Y as dn, n as ve, an as Go, i as ze, H as Bn, _ as $r, C as Or, k as Ir, a8 as ea, ao as $n, ap as xt, aq as hn, Z as Ur, ar as Hr, a7 as Fr, as as ta, aa as na, ab as Vr, a4 as oa, at as Zt, au as Vt, a3 as Yr, av as Gr, v as zr } from "./7tyaNgEA.js";
import { _ as ia } from "./CMf5N-6F.js";
import { _ as ho } from "./B7p6i3HK.js";
import { _ as aa } from "./C7IVxsr-.js";
import { _ as Kr } from "./BijLPmCu.js";
import { u as Wr } from "./BbgBCNXr.js";
import { _ as qr, a as jr } from "./D9NHwNa9.js";
import { u as Zr, a as Xr, b as ra, c as Qr, _ as Jr, d as es } from "./DHd1PBd4.js";
import { _ as ts } from "./C8waoTgr.js";
import { _ as ns } from "./CcpJ8xk8.js";
import { n as os, o as is, p as zo, c as Ko, e as as, q as rs } from "./-SGvg42Q.js";
import { u as sa } from "./DSYs-LpM.js";
import { _ as ss, a as ls, b as us, c as cs, u as ds } from "./DptPnj5y.js";
import { u as ce, P as ye, c as Ke, a as Lt, j as Kt, r as hs, b as fo, f as fn, g as Xt, d as la, k as fs, w as ps } from "./BqwFAzj-.js";
import { a as yt, _ as ms, u as po } from "./e5EsY3M9.js";
import { u as mo } from "./Da46OeJF.js";
import { c as gs, b as vs, _ as _s, h as ys, d as bs } from "./6j_b9UX3.js";
import { a as xs, _ as ws } from "./AcnOGanz.js";
import { b as go, a as ua, i as pn, c as Ss, C as ks, d as Ts, e as Cs, g as Ms, f as ne, h as ut, j as wt, k as Wo, l as Ds, m as Rs, S as As, n as On, o as ca, p as Bt, q as Se, r as da, s as qo, t as mn, u as Xe, v as Ne, w as Be, x as ha, y as Et, z as Es, A as De, F as fa, T as Ps, P as G, B as Ns, D as Ls, V as jo, E as Bs, G as $s, H as Os, I as st, J as Zo, K as Is, L as Us, M as Hs, N as Fs, O as Vs, Q as Ot, R as vo, U as pa, W as ma, X as Ys, Y as Gs, Z as gn, _ as zs } from "./n9Zfb6Is.js";
import { _ as Ks } from "./BUqI_u8t.js";
import { g as _o } from "./CpsPJSKh.js";
import { p as Xo, f as Wn, a as vn, b as Qo, c as Ws } from "./B3mO7cbA.js";
import { T as qs } from "./Bz4-DFcF.js";
import { _ as js } from "./FewDBg1m.js";
import { a as Zs } from "./CD5FwXF0.js";
import { u as Xs } from "./em0aKPkT.js";
import "./C3sJ3Yu7.js";
import "./8Lad1M9Y.js";
import "./CqkleIqs.js";
import "./BmIFlatj.js";
function Qs() {
  return { ALT: "Alt", ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp", BACKSPACE: "Backspace", CAPS_LOCK: "CapsLock", CONTROL: "Control", DELETE: "Delete", END: "End", ENTER: "Enter", ESCAPE: "Escape", F1: "F1", F10: "F10", F11: "F11", F12: "F12", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", HOME: "Home", META: "Meta", PAGE_DOWN: "PageDown", PAGE_UP: "PageUp", SHIFT: "Shift", SPACE: " ", TAB: "Tab", CTRL: "Control", ASTERISK: "*", SPACE_CODE: "Space" };
}
const Js = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function el(e8, t) {
  return t !== "rtl" ? e8 : e8 === "ArrowLeft" ? "ArrowRight" : e8 === "ArrowRight" ? "ArrowLeft" : e8;
}
function tl(e8, t, n) {
  const o = el(e8.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return Js[o];
}
const Jo = I({ inheritAttrs: false, __name: "VisuallyHiddenInputBubble", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, { primitiveElement: n, currentElement: o } = yt(), i = B(() => t.checked ?? t.value);
  return ie(i, (a, r) => {
    if (!o.value) return;
    const s = o.value, l = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(l, "value").set;
    if (h && a !== r) {
      const c = new Event("input", { bubbles: true }), d = new Event("change", { bubbles: true });
      h.call(s, a), s.dispatchEvent(c), s.dispatchEvent(d);
    }
  }), (a, r) => (T(), $(ms, j({ ref_key: "primitiveElement", ref: n }, { ...t, ...a.$attrs }, { as: "input" }), null, 16));
} }), nl = I({ inheritAttrs: false, __name: "VisuallyHiddenInput", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, n = B(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((i, a) => typeof i == "object" ? Object.entries(i).map(([r, s]) => ({ name: `[${t.name}][${a}][${r}]`, value: s })) : { name: `[${t.name}][${a}]`, value: i }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([i, a]) => ({ name: `[${t.name}][${i}]`, value: a })) : []);
  return (i, a) => n.value ? (T(), $(Jo, j({ key: i.name }, { ...t, ...i.$attrs }, { name: i.name, value: i.value }), null, 16, ["name", "value"])) : (T(true), V(Ee, { key: 1 }, Je(o.value, (r) => (T(), $(Jo, j({ key: r.name, ref_for: true }, { ...t, ...i.$attrs }, { name: r.name, value: r.value }), null, 16, ["name", "value"]))), 128));
} }), ol = I({ __name: "ComboboxAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { forwardRef: t } = ce();
  return (n, o) => (T(), $(p(ss), { "as-child": "", reference: n.reference }, { default: A(() => [R(p(ye), j({ ref: p(t), "as-child": n.asChild, as: n.as }, n.$attrs), { default: A(() => [z(n.$slots, "default")]), _: 3 }, 16, ["as-child", "as"])]), _: 3 }, 8, ["reference"]));
} });
function il(e8) {
  const t = B(() => p(e8)), n = B(() => new Intl.Collator("en", { usage: "search", ...t.value }));
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
function al(e8, t, n) {
  return e8 === void 0 ? false : Array.isArray(e8) ? e8.some((o) => Pt(o, t, n)) : Pt(e8, t, n);
}
function Pt(e8, t, n) {
  return e8 === void 0 || t === void 0 ? false : typeof e8 == "string" ? e8 === t : typeof n == "function" ? n(e8, t) : typeof n == "string" ? (e8 == null ? void 0 : e8[n]) === (t == null ? void 0 : t[n]) : Kn(e8, t);
}
function rl(e8, t, n) {
  const o = e8.findIndex((s) => Kn(s, t)), i = e8.findIndex((s) => Kn(s, n));
  if (o === -1 || i === -1) return [];
  const [a, r] = [o, i].sort((s, l) => s - l);
  return e8.slice(a, r + 1);
}
const [_n, sl] = Ke("ListboxRoot"), ll = I({ __name: "ListboxRoot", props: { modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, orientation: { default: "vertical" }, dir: {}, disabled: { type: Boolean }, selectionBehavior: { default: "toggle" }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(e8, { expose: t, emit: n }) {
  const o = e8, i = n, { multiple: a, highlightOnHover: r, orientation: s, disabled: l, selectionBehavior: u, dir: h } = Ge(o), { getItems: c } = po({ isProvider: true }), { handleTypeaheadSearch: d } = Zr(), { primitiveElement: f, currentElement: m } = yt(), g = Qs(), b = mo(h), v = Xr(m), _ = O(), y = O(false), k = O(true), M = Lt(o, "modelValue", i, { defaultValue: o.defaultValue ?? (a.value ? [] : void 0), passive: o.modelValue === void 0, deep: true });
  function C(N) {
    if (y.value = true, o.multiple) {
      const F = Array.isArray(M.value) ? [...M.value] : [], x = F.findIndex((L) => Pt(L, N, o.by));
      o.selectionBehavior === "toggle" ? (x === -1 ? F.push(N) : F.splice(x, 1), M.value = F) : (M.value = [N], _.value = N);
    } else o.selectionBehavior === "toggle" && Pt(M.value, N, o.by) ? M.value = void 0 : M.value = N;
    setTimeout(() => {
      y.value = false;
    }, 1);
  }
  const E = O(null), K = O(null), H = O(false), ee = O(false), D = Kt(), P = Kt(), Y = Kt();
  function X() {
    return c().map((N) => N.ref).filter((N) => N.dataset.disabled !== "");
  }
  function Q(N, F = true) {
    if (!N) return;
    E.value = N, k.value && E.value.focus(), F && E.value.scrollIntoView({ block: "nearest" });
    const x = c().find((L) => L.ref === N);
    i("highlight", x);
  }
  function Te(N) {
    if (H.value) Y.trigger(N);
    else {
      const F = c().find((x) => Pt(x.value, N, o.by));
      F && (E.value = F.ref, Q(F.ref));
    }
  }
  function Ce(N) {
    E.value && E.value.isConnected && (N.preventDefault(), N.stopPropagation(), ee.value || E.value.click());
  }
  function ge(N) {
    if (k.value) {
      if (y.value = true, H.value) P.trigger(N);
      else {
        const F = N.altKey || N.ctrlKey || N.metaKey;
        if (F && N.key === "a" && a.value) {
          const x = c(), L = x.map((U) => U.value);
          M.value = [...L], N.preventDefault(), Q(x[x.length - 1].ref);
        } else if (!F) {
          const x = d(N.key, c());
          x && Q(x);
        }
      }
      setTimeout(() => {
        y.value = false;
      }, 1);
    }
  }
  function he() {
    ee.value = true;
  }
  function bt() {
    requestAnimationFrame(() => {
      ee.value = false;
    });
  }
  function at() {
    ke(() => {
      const N = new KeyboardEvent("keydown", { key: "PageUp" });
      Me(N);
    });
  }
  function le(N) {
    const F = E.value;
    (F == null ? void 0 : F.isConnected) && (K.value = F), E.value = null, i("leave", N);
  }
  function be(N) {
    var _a2, _b;
    const F = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if ((_a2 = N.currentTarget) == null ? void 0 : _a2.dispatchEvent(F), i("entryFocus", F), !F.defaultPrevented) if (K.value) Q(K.value);
    else {
      const x = (_b = X()) == null ? void 0 : _b[0];
      Q(x);
    }
  }
  function Me(N) {
    const F = tl(N, s.value, b.value);
    if (!F) return;
    let x = X();
    if (E.value) {
      if (F === "last") x.reverse();
      else if (F === "prev" || F === "next") {
        F === "prev" && x.reverse();
        const L = x.indexOf(E.value);
        x = x.slice(L + 1);
      }
      rt(N, x[0]);
    }
    if (x.length) {
      const L = !E.value && F === "prev" ? x.length - 1 : 0;
      Q(x[L]);
    }
    if (H.value) return P.trigger(N);
  }
  function rt(N, F) {
    var _a2;
    if (!(H.value || o.selectionBehavior !== "replace" || !a.value || !Array.isArray(M.value) || (N.altKey || N.ctrlKey || N.metaKey) && !N.shiftKey) && N.shiftKey) {
      const L = c().filter((oe) => oe.ref.dataset.disabled !== "");
      let U = (_a2 = L.find((oe) => oe.ref === F)) == null ? void 0 : _a2.value;
      if (N.key === g.END ? U = L[L.length - 1].value : N.key === g.HOME && (U = L[0].value), !U || !_.value) return;
      const S = rl(L.map((oe) => oe.value), _.value, U);
      M.value = S;
    }
  }
  async function Ft(N) {
    if (await ke(), H.value) D.trigger(N);
    else {
      const F = X(), x = F.find((L) => L.dataset.state === "checked");
      x ? Q(x) : F.length && Q(F[0]);
    }
  }
  return ie(M, () => {
    y.value || ke(() => {
      Ft();
    });
  }, { immediate: true, deep: true }), t({ highlightedElement: E, highlightItem: Te, highlightFirstItem: at, highlightSelected: Ft, getItems: c }), sl({ modelValue: M, onValueChange: C, multiple: a, orientation: s, dir: b, disabled: l, highlightOnHover: r, highlightedElement: E, isVirtual: H, virtualFocusHook: D, virtualKeydownHook: P, virtualHighlightHook: Y, by: o.by, firstValue: _, selectionBehavior: u, focusable: k, onLeave: le, onEnter: be, changeHighlight: Q, onKeydownEnter: Ce, onKeydownNavigation: Me, onKeydownTypeAhead: ge, onCompositionStart: he, onCompositionEnd: bt, highlightFirstItem: at }), (N, F) => (T(), $(p(ye), { ref_key: "primitiveElement", ref: f, as: N.as, "as-child": N.asChild, dir: p(b), "data-disabled": p(l) ? "" : void 0, onPointerleave: le, onFocusout: F[0] || (F[0] = async (x) => {
    const L = x.relatedTarget || x.target;
    await ke(), E.value && p(m) && !p(m).contains(L) && le(x);
  }) }, { default: A(() => [z(N.$slots, "default", { modelValue: p(M) }), p(v) && N.name ? (T(), $(p(nl), { key: 0, name: N.name, value: p(M), disabled: p(l), required: N.required }, null, 8, ["name", "value", "disabled", "required"])) : ae("", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), [tt, ul] = Ke("ComboboxRoot"), cl = I({ __name: "ComboboxRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, resetSearchTermOnBlur: { type: Boolean, default: true }, resetSearchTermOnSelect: { type: Boolean, default: true }, ignoreFilter: { type: Boolean }, modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, dir: {}, disabled: { type: Boolean }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "update:open"], setup(e8, { expose: t, emit: n }) {
  var _a2, _b, _c2;
  const o = e8, i = n, { primitiveElement: a, currentElement: r } = yt(), { multiple: s, disabled: l, ignoreFilter: u, resetSearchTermOnSelect: h, dir: c } = Ge(o), d = mo(c), f = Lt(o, "modelValue", i, { defaultValue: o.defaultValue ?? (s.value ? [] : void 0), passive: o.modelValue === void 0, deep: true }), m = Lt(o, "open", i, { defaultValue: o.defaultOpen, passive: o.open === void 0 });
  async function g(P) {
    var _a3, _b2;
    m.value = P, H.search = "", P ? (await ke(), (_a3 = a.value) == null ? void 0 : _a3.highlightSelected(), v.value = true) : v.value = false, (_b2 = y.value) == null ? void 0 : _b2.focus(), setTimeout(() => {
      !P && o.resetSearchTermOnBlur && b.trigger();
    }, 1);
  }
  const b = Kt(), v = O(false), _ = O(false), y = O(), k = O(), M = B(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.highlightedElement) ?? void 0;
  }), C = O(/* @__PURE__ */ new Map()), E = O(/* @__PURE__ */ new Map()), { contains: K } = il({ sensitivity: "base" }), H = Zi({ search: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } });
  function ee() {
    if (!H.search || o.ignoreFilter || _.value) {
      H.filtered.count = C.value.size;
      return;
    }
    H.filtered.groups = /* @__PURE__ */ new Set();
    let P = 0;
    for (const [Y, X] of C.value) {
      const Q = K(X, H.search);
      H.filtered.items.set(Y, Q ? 1 : 0), Q && P++;
    }
    for (const [Y, X] of E.value) for (const Q of X) if (H.filtered.items.get(Q) > 0) {
      H.filtered.groups.add(Y);
      break;
    }
    H.filtered.count = P;
  }
  ie([() => H.search, () => C.value.size], () => {
    ee();
  }, { immediate: true }), ie(() => m.value, () => {
    ke(() => {
      m.value && ee();
    });
  }, { flush: "post" });
  const D = Nr();
  return re(() => {
    var _a3, _b2, _c3;
    (D == null ? void 0 : D.exposed) && (D.exposed.highlightItem = (_a3 = a.value) == null ? void 0 : _a3.highlightItem, D.exposed.highlightFirstItem = (_b2 = a.value) == null ? void 0 : _b2.highlightFirstItem, D.exposed.highlightSelected = (_c3 = a.value) == null ? void 0 : _c3.highlightSelected);
  }), t({ filtered: B(() => H.filtered), highlightedElement: M, highlightItem: (_a2 = a.value) == null ? void 0 : _a2.highlightItem, highlightFirstItem: (_b = a.value) == null ? void 0 : _b.highlightFirstItem, highlightSelected: (_c2 = a.value) == null ? void 0 : _c2.highlightSelected }), ul({ modelValue: f, multiple: s, disabled: l, open: m, onOpenChange: g, contentId: "", isUserInputted: v, isVirtual: _, inputElement: y, highlightedElement: M, onInputElementChange: (P) => y.value = P, triggerElement: k, onTriggerElementChange: (P) => k.value = P, parentElement: r, resetSearchTermOnSelect: h, onResetSearchTerm: b.on, allItems: C, allGroups: E, filterState: H, ignoreFilter: u }), (P, Y) => (T(), $(p(ls), null, { default: A(() => [R(p(ll), j({ ref_key: "primitiveElement", ref: a }, P.$attrs, { modelValue: p(f), "onUpdate:modelValue": Y[0] || (Y[0] = (X) => Ze(f) ? f.value = X : null), style: { pointerEvents: p(m) ? "auto" : void 0 }, as: P.as, "as-child": P.asChild, dir: p(d), multiple: p(s), name: P.name, required: P.required, disabled: p(l), "highlight-on-hover": true, by: o.by, onHighlight: Y[1] || (Y[1] = (X) => i("highlight", X)) }), { default: A(() => [z(P.$slots, "default", { open: p(m), modelValue: p(f) })]), _: 3 }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])]), _: 3 }));
} }), dl = I({ __name: "ListboxContent", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { CollectionSlot: t } = po(), n = _n(), o = hs(false, 10);
  return (i, a) => (T(), $(p(t), null, { default: A(() => [R(p(ye), { role: "listbox", as: i.as, "as-child": i.asChild, tabindex: p(n).focusable.value ? p(n).highlightedElement.value ? "-1" : "0" : void 0, "aria-orientation": p(n).orientation.value, "aria-multiselectable": !!p(n).multiple.value, "data-orientation": p(n).orientation.value, onMousedown: a[0] || (a[0] = et((r) => o.value = true, ["left"])), onFocus: a[1] || (a[1] = (r) => {
    p(o) || p(n).onEnter(r);
  }), onKeydown: [a[2] || (a[2] = ht(et((r) => {
    p(n).focusable.value && p(n).onKeydownNavigation(r);
  }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])), ht(p(n).onKeydownEnter, ["enter"]), p(n).onKeydownTypeAhead] }, { default: A(() => [z(i.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), [hl, fl] = Ke("ComboboxContent"), pl = I({ __name: "ComboboxContentImpl", props: { position: { default: "inline" }, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const n = e8, o = t, { position: i } = Ge(n), a = tt(), { forwardRef: r, currentElement: s } = ce();
  gs(n.bodyLock), vs(a.parentElement);
  const l = B(() => n.position === "popper" ? n : {}), u = us(l.value), h = { boxSizing: "border-box", "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-combobox-content-available-width": "var(--reka-popper-available-width)", "--reka-combobox-content-available-height": "var(--reka-popper-available-height)", "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)", "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)" };
  fl({ position: i });
  const c = O(false);
  return re(() => {
    a.inputElement.value && (c.value = s.value.contains(a.inputElement.value), c.value && a.inputElement.value.focus());
  }), Ae(() => {
    var _a2;
    c.value && ((_a2 = a.triggerElement.value) == null ? void 0 : _a2.focus());
  }), (d, f) => (T(), $(p(dl), { "as-child": "" }, { default: A(() => [R(p(_s), { "as-child": "", "disable-outside-pointer-events": d.disableOutsidePointerEvents, onDismiss: f[0] || (f[0] = (m) => p(a).onOpenChange(false)), onFocusOutside: f[1] || (f[1] = (m) => {
    var _a2;
    ((_a2 = p(a).parentElement.value) == null ? void 0 : _a2.contains(m.target)) && m.preventDefault(), o("focusOutside", m);
  }), onInteractOutside: f[2] || (f[2] = (m) => o("interactOutside", m)), onEscapeKeyDown: f[3] || (f[3] = (m) => o("escapeKeyDown", m)), onPointerDownOutside: f[4] || (f[4] = (m) => {
    var _a2;
    ((_a2 = p(a).parentElement.value) == null ? void 0 : _a2.contains(m.target)) && m.preventDefault(), o("pointerDownOutside", m);
  }) }, { default: A(() => [(T(), $(Xi(p(i) === "popper" ? p(cs) : p(ye)), j({ ...d.$attrs, ...p(u) }, { id: p(a).contentId, ref: p(r), "data-state": p(a).open.value ? "open" : "closed", style: { display: "flex", flexDirection: "column", outline: "none", ...p(i) === "popper" ? h : {} } }), { default: A(() => [z(d.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "style"]))]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }));
} }), ml = I({ __name: "ComboboxArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(e8) {
  const t = e8, n = tt(), o = hl();
  return ce(), (i, a) => p(n).open.value && p(o).position.value === "popper" ? (T(), $(p(xs), cn(j({ key: 0 }, t)), { default: A(() => [z(i.$slots, "default")]), _: 3 }, 16)) : ae("", true);
} }), gl = I({ __name: "ComboboxContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const i = ds(e8, t), { forwardRef: a } = ce(), r = tt();
  return r.contentId || (r.contentId = fo(void 0, "reka-combobox-content")), (s, l) => (T(), $(p(fn), { present: s.forceMount || p(r).open.value }, { default: A(() => [R(pl, j({ ...p(i), ...s.$attrs }, { ref: p(a) }), { default: A(() => [z(s.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), [vl, Lp] = Ke("ComboboxGroup"), _l = I({ __name: "ListboxFilter", props: { modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, i = Lt(n, "modelValue", t, { defaultValue: "", passive: n.modelValue === void 0 }), a = _n(), { primitiveElement: r, currentElement: s } = yt(), l = B(() => n.disabled || a.disabled.value || false), u = O();
  return Lr(() => {
    var _a2;
    return u.value = (_a2 = a.highlightedElement.value) == null ? void 0 : _a2.id;
  }), re(() => {
    a.focusable.value = false, setTimeout(() => {
      var _a2;
      n.autoFocus && ((_a2 = s.value) == null ? void 0 : _a2.focus());
    }, 1);
  }), Ae(() => {
    a.focusable.value = true;
  }), (h, c) => (T(), $(p(ye), { ref_key: "primitiveElement", ref: r, as: h.as, "as-child": h.asChild, value: p(i), disabled: l.value ? "" : void 0, "data-disabled": l.value ? "" : void 0, "aria-disabled": l.value ?? void 0, "aria-activedescendant": u.value, type: "text", onKeydown: [ht(et(p(a).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), ht(p(a).onKeydownEnter, ["enter"])], onInput: c[0] || (c[0] = (d) => {
    i.value = d.target.value, p(a).highlightFirstItem(d);
  }), onCompositionstart: p(a).onCompositionStart, onCompositionend: p(a).onCompositionEnd }, { default: A(() => [z(h.$slots, "default", { modelValue: p(i) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
} }), yl = I({ __name: "ComboboxInput", props: { displayValue: {}, modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = tt(), a = _n(), { primitiveElement: r, currentElement: s } = yt(), l = Lt(n, "modelValue", o, { passive: n.modelValue === void 0 });
  re(() => {
    s.value && i.onInputElementChange(s.value);
  });
  function u(d) {
    i.open.value || i.onOpenChange(true);
  }
  function h(d) {
    const f = d.target;
    i.open.value ? i.filterState.search = f.value : (i.onOpenChange(true), ke(() => {
      f.value && (i.filterState.search = f.value, a.highlightFirstItem(d));
    }));
  }
  function c() {
    const d = i.modelValue.value;
    n.displayValue ? l.value = n.displayValue(d) : !i.multiple.value && d && !Array.isArray(d) && typeof d != "object" ? l.value = d.toString() : l.value = "", ke(() => {
      l.value = l.value;
    });
  }
  return i.onResetSearchTerm(() => {
    c();
  }), ie(i.modelValue, async () => {
    !i.isUserInputted.value && i.resetSearchTermOnSelect.value && c();
  }, { immediate: true, deep: true }), ie(() => n.modelValue, () => {
    n.modelValue !== void 0 && (i.filterState.search = n.modelValue);
  }), (d, f) => (T(), $(p(_l), { ref_key: "primitiveElement", ref: r, modelValue: p(l), "onUpdate:modelValue": f[0] || (f[0] = (m) => Ze(l) ? l.value = m : null), as: d.as, "as-child": d.asChild, "auto-focus": d.autoFocus, "aria-expanded": p(i).open.value, "aria-controls": p(i).contentId, "aria-autocomplete": "list", role: "combobox", autocomplete: "false", onInput: h, onKeydown: ht(et(u, ["prevent"]), ["down", "up"]) }, { default: A(() => [z(d.$slots, "default")]), _: 3 }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
} }), bl = "listbox.select", [Bp, xl] = Ke("ListboxItem"), wl = I({ __name: "ListboxItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = fo(void 0, "reka-listbox-item"), { CollectionItem: a } = po(), { forwardRef: r, currentElement: s } = ce(), l = _n(), u = B(() => s.value === l.highlightedElement.value), h = B(() => al(l.modelValue.value, n.value, l.by)), c = B(() => l.disabled.value || n.disabled);
  async function d(m) {
    o("select", m), !(m == null ? void 0 : m.defaultPrevented) && !c.value && m && (l.onValueChange(n.value), l.changeHighlight(s.value));
  }
  function f(m) {
    const g = { originalEvent: m, value: n.value };
    ys(bl, d, g);
  }
  return xl({ isSelected: h }), (m, g) => (T(), $(p(a), { value: m.value }, { default: A(() => [Br([u.value, h.value], () => R(p(ye), j({ id: p(i) }, m.$attrs, { ref: p(r), role: "option", tabindex: p(l).focusable.value ? u.value ? "0" : "-1" : -1, "aria-selected": h.value, as: m.as, "as-child": m.asChild, disabled: c.value ? "" : void 0, "data-disabled": c.value ? "" : void 0, "data-highlighted": u.value ? "" : void 0, "data-state": h.value ? "checked" : "unchecked", onClick: f, onKeydown: ht(et(f, ["prevent"]), ["space"]), onPointermove: g[0] || (g[0] = (b) => {
    p(l).highlightedElement.value !== p(s) && (p(l).highlightOnHover.value ? p(l).changeHighlight(p(s), false) : p(l).focusable.value || p(l).changeHighlight(p(s), false));
  }) }), { default: A(() => [z(m.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), g, 1)]), _: 3 }, 8, ["value"]));
} }), Sl = I({ __name: "ComboboxItem", props: { textValue: {}, value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = fo(void 0, "reka-combobox-item"), a = tt(), r = vl(null), { primitiveElement: s, currentElement: l } = yt();
  if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
  const u = B(() => {
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
  }), Ae(() => {
    a.allItems.value.delete(i);
  }), (h, c) => u.value ? (T(), $(p(wl), j({ key: 0 }, n, { id: p(i), ref_key: "primitiveElement", ref: s, disabled: p(a).disabled.value || h.disabled, onSelect: c[0] || (c[0] = (d) => {
    o("select", d), !d.defaultPrevented && !p(a).multiple.value && !h.disabled && !p(a).disabled.value && (d.preventDefault(), p(a).onOpenChange(false), p(a).modelValue.value = n.value);
  }) }), { default: A(() => [z(h.$slots, "default", {}, () => [Ve(ue(h.value), 1)])]), _: 3 }, 16, ["id", "disabled"])) : ae("", true);
} }), kl = I({ __name: "ComboboxPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(e8) {
  const t = e8;
  return (n, o) => (T(), $(p(bs), cn(Qi(t)), { default: A(() => [z(n.$slots, "default")]), _: 3 }, 16));
} }), Tl = I({ __name: "ComboboxTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(e8) {
  const t = e8, { forwardRef: n, currentElement: o } = ce(), i = tt(), a = B(() => t.disabled || i.disabled.value || false);
  return re(() => {
    o.value && i.onTriggerElementChange(o.value);
  }), (r, s) => (T(), $(p(ye), j(t, { ref: p(n), type: r.as === "button" ? "button" : void 0, tabindex: "-1", "aria-label": "Show popup", "aria-haspopup": "listbox", "aria-expanded": p(i).open.value, "aria-controls": p(i).contentId, "data-state": p(i).open.value ? "open" : "closed", disabled: a.value, "data-disabled": a.value ? "" : void 0, "aria-disabled": a.value ?? void 0, onClick: s[0] || (s[0] = (l) => p(i).onOpenChange(!p(i).open.value)) }), { default: A(() => [z(r.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
} }), Cl = I({ __name: "ComboboxViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, { forwardRef: n } = ce(), { nonce: o } = Ge(t), i = ra(o), a = tt();
  return (r, s) => (T(), V(Ee, null, [R(p(ye), j({ ...r.$attrs, ...t }, { ref: p(n), "data-reka-combobox-viewport": "", role: "presentation", style: { position: "relative", flex: p(a).isVirtual.value ? void 0 : 1, overflow: "auto" } }), { default: A(() => [z(r.$slots, "default")]), _: 3 }, 16, ["style"]), R(p(ye), { as: "style", nonce: p(i) }, { default: A(() => s[0] || (s[0] = [Ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), [Le, Ml] = Ke("ScrollAreaRoot"), Dl = I({ __name: "ScrollAreaRoot", props: { type: { default: "hover" }, dir: {}, scrollHideDelay: { default: 600 }, asChild: { type: Boolean }, as: {} }, setup(e8, { expose: t }) {
  const n = e8, o = O(0), i = O(0), a = O(), r = O(), s = O(), l = O(), u = O(false), h = O(false), { type: c, dir: d, scrollHideDelay: f } = Ge(n), m = mo(d);
  function g() {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.scrollTo({ top: 0 });
  }
  function b() {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.scrollTo({ top: 0, left: 0 });
  }
  t({ viewport: a, scrollTop: g, scrollTopLeft: b });
  const { forwardRef: v, currentElement: _ } = ce();
  return Ml({ type: c, dir: m, scrollHideDelay: f, scrollArea: _, viewport: a, onViewportChange: (y) => {
    a.value = y || void 0;
  }, content: r, onContentChange: (y) => {
    r.value = y;
  }, scrollbarX: s, scrollbarXEnabled: u, scrollbarY: l, scrollbarYEnabled: h, onScrollbarXChange: (y) => {
    s.value = y || void 0;
  }, onScrollbarYChange: (y) => {
    l.value = y || void 0;
  }, onScrollbarXEnabledChange: (y) => {
    u.value = y;
  }, onScrollbarYEnabledChange: (y) => {
    h.value = y;
  }, onCornerWidthChange: (y) => {
    o.value = y;
  }, onCornerHeightChange: (y) => {
    i.value = y;
  } }), (y, k) => (T(), $(p(ye), { ref: p(v), "as-child": n.asChild, as: y.as, dir: p(m), style: _t({ position: "relative", "--reka-scroll-area-corner-width": `${o.value}px`, "--reka-scroll-area-corner-height": `${i.value}px` }) }, { default: A(() => [z(y.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "dir", "style"]));
} });
function ga(e8, t) {
  return (n) => {
    if (e8[0] === e8[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e8[1] - e8[0]);
    return t[0] + o * (n - e8[0]);
  };
}
function yn(e8) {
  const t = va(e8.viewport, e8.content), n = e8.scrollbar.paddingStart + e8.scrollbar.paddingEnd, o = (e8.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function va(e8, t) {
  const n = e8 / t;
  return Number.isNaN(n) ? 0 : n;
}
function Rl(e8, t = () => {
}) {
  let n = { left: e8.scrollLeft, top: e8.scrollTop }, o = 0;
  return function i() {
    const a = { left: e8.scrollLeft, top: e8.scrollTop }, r = n.left !== a.left, s = n.top !== a.top;
    (r || s) && t(), n = a, o = window.requestAnimationFrame(i);
  }(), () => window.cancelAnimationFrame(o);
}
function ei(e8, t, n = "ltr") {
  const o = yn(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, r = t.content - t.viewport, s = a - o, l = n === "ltr" ? [0, r] : [r * -1, 0], u = Qr(e8, l[0], l[1]);
  return ga([0, r], [0, s])(u);
}
function Yt(e8) {
  return e8 ? Number.parseInt(e8, 10) : 0;
}
function Al(e8, t, n, o = "ltr") {
  const i = yn(n), a = i / 2, r = t || a, s = i - r, l = n.scrollbar.paddingStart + r, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, h = n.content - n.viewport, c = o === "ltr" ? [0, h] : [h * -1, 0];
  return ga([l, u], c)(e8);
}
function ti(e8, t) {
  return e8 > 0 && e8 < t;
}
const _a = I({ __name: "ScrollAreaScrollbarImpl", props: { isHorizontal: { type: Boolean } }, emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = Le(), a = bn(), r = xn(), { forwardRef: s, currentElement: l } = ce(), u = O(""), h = O();
  function c(v) {
    var _a2, _b;
    if (h.value) {
      const _ = v.clientX - ((_a2 = h.value) == null ? void 0 : _a2.left), y = v.clientY - ((_b = h.value) == null ? void 0 : _b.top);
      o("onDragScroll", { x: _, y });
    }
  }
  function d(v) {
    v.button === 0 && (v.target.setPointerCapture(v.pointerId), h.value = l.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", i.viewport && (i.viewport.value.style.scrollBehavior = "auto"), c(v));
  }
  function f(v) {
    c(v);
  }
  function m(v) {
    const _ = v.target;
    _.hasPointerCapture(v.pointerId) && _.releasePointerCapture(v.pointerId), document.body.style.webkitUserSelect = u.value, i.viewport && (i.viewport.value.style.scrollBehavior = ""), h.value = void 0;
  }
  function g(v) {
    var _a2;
    const _ = v.target, y = (_a2 = l.value) == null ? void 0 : _a2.contains(_), k = a.sizes.value.content - a.sizes.value.viewport;
    y && a.handleWheelScroll(v, k);
  }
  re(() => {
    document.addEventListener("wheel", g, { passive: false });
  }), Ae(() => {
    document.removeEventListener("wheel", g);
  });
  function b() {
    var _a2, _b, _c2, _d2, _e2;
    l.value && (n.isHorizontal ? a.handleSizeChange({ content: ((_a2 = i.viewport.value) == null ? void 0 : _a2.scrollWidth) ?? 0, viewport: ((_b = i.viewport.value) == null ? void 0 : _b.offsetWidth) ?? 0, scrollbar: { size: l.value.clientWidth ?? 0, paddingStart: Yt(getComputedStyle(l.value).paddingLeft), paddingEnd: Yt(getComputedStyle(l.value).paddingRight) } }) : a.handleSizeChange({ content: ((_c2 = i.viewport.value) == null ? void 0 : _c2.scrollHeight) ?? 0, viewport: ((_d2 = i.viewport.value) == null ? void 0 : _d2.offsetHeight) ?? 0, scrollbar: { size: ((_e2 = l.value) == null ? void 0 : _e2.clientHeight) ?? 0, paddingStart: Yt(getComputedStyle(l.value).paddingLeft), paddingEnd: Yt(getComputedStyle(l.value).paddingRight) } }));
  }
  return Xt(l, b), Xt(i.content, b), (v, _) => (T(), $(p(ye), { ref: p(s), style: { position: "absolute" }, "data-scrollbarimpl": "", as: p(r).as.value, "as-child": p(r).asChild.value, onPointerdown: d, onPointermove: f, onPointerup: m }, { default: A(() => [z(v.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} }), El = I({ __name: "ScrollAreaScrollbarX", setup(e8) {
  const t = Le(), n = bn(), { forwardRef: o, currentElement: i } = ce();
  re(() => {
    i.value && t.onScrollbarXChange(i.value);
  });
  const a = B(() => n.sizes.value);
  return (r, s) => (T(), $(_a, { ref: p(o), "is-horizontal": true, "data-orientation": "horizontal", style: _t({ bottom: 0, left: p(t).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0, right: p(t).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0, "--reka-scroll-area-thumb-width": a.value ? `${p(yn)(a.value)}px` : void 0 }), onOnDragScroll: s[0] || (s[0] = (l) => p(n).onDragScroll(l.x)) }, { default: A(() => [z(r.$slots, "default")]), _: 3 }, 8, ["style"]));
} }), Pl = I({ __name: "ScrollAreaScrollbarY", setup(e8) {
  const t = Le(), n = bn(), { forwardRef: o, currentElement: i } = ce();
  re(() => {
    i.value && t.onScrollbarYChange(i.value);
  });
  const a = B(() => n.sizes.value);
  return (r, s) => (T(), $(_a, { ref: p(o), "is-horizontal": false, "data-orientation": "vertical", style: _t({ top: 0, right: p(t).dir.value === "ltr" ? 0 : void 0, left: p(t).dir.value === "rtl" ? 0 : void 0, bottom: "var(--reka-scroll-area-corner-height)", "--reka-scroll-area-thumb-height": a.value ? `${p(yn)(a.value)}px` : void 0 }), onOnDragScroll: s[0] || (s[0] = (l) => p(n).onDragScroll(l.y)) }, { default: A(() => [z(r.$slots, "default")]), _: 3 }, 8, ["style"]));
} }), [bn, Nl] = Ke("ScrollAreaScrollbarVisible"), yo = I({ __name: "ScrollAreaScrollbarVisible", setup(e8) {
  const t = Le(), n = xn(), { forwardRef: o } = ce(), i = O({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), a = B(() => {
    const v = va(i.value.viewport, i.value.content);
    return v > 0 && v < 1;
  }), r = O(), s = O(0);
  function l(v, _) {
    if (f.value) {
      const y = t.viewport.value.scrollLeft + v.deltaY;
      t.viewport.value.scrollLeft = y, ti(y, _) && v.preventDefault();
    } else {
      const y = t.viewport.value.scrollTop + v.deltaY;
      t.viewport.value.scrollTop = y, ti(y, _) && v.preventDefault();
    }
  }
  function u(v, _) {
    f.value ? s.value = _.x : s.value = _.y;
  }
  function h(v) {
    s.value = 0;
  }
  function c(v) {
    i.value = v;
  }
  function d(v, _) {
    return Al(v, s.value, i.value, _);
  }
  const f = B(() => n.isHorizontal.value);
  function m(v) {
    f.value ? t.viewport.value.scrollLeft = d(v, t.dir.value) : t.viewport.value.scrollTop = d(v);
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
  function b(v) {
    r.value = v;
  }
  return Nl({ sizes: i, hasThumb: a, handleWheelScroll: l, handleThumbDown: u, handleThumbUp: h, handleSizeChange: c, onThumbPositionChange: g, onThumbChange: b, onDragScroll: m }), (v, _) => f.value ? (T(), $(El, j({ key: 0 }, v.$attrs, { ref: p(o) }), { default: A(() => [z(v.$slots, "default")]), _: 3 }, 16)) : (T(), $(Pl, j({ key: 1 }, v.$attrs, { ref: p(o) }), { default: A(() => [z(v.$slots, "default")]), _: 3 }, 16));
} }), ya = I({ __name: "ScrollAreaScrollbarAuto", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), n = xn(), { forwardRef: o } = ce(), i = O(false), a = la(() => {
    if (t.viewport.value) {
      const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, s = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
      i.value = n.isHorizontal.value ? r : s;
    }
  }, 10);
  return re(() => a()), Xt(t.viewport, a), Xt(t.content, a), (r, s) => (T(), $(p(fn), { present: r.forceMount || i.value }, { default: A(() => [R(yo, j(r.$attrs, { ref: p(o), "data-state": i.value ? "visible" : "hidden" }), { default: A(() => [z(r.$slots, "default")]), _: 3 }, 16, ["data-state"])]), _: 3 }, 8, ["present"]));
} }), Ll = I({ inheritAttrs: false, __name: "ScrollAreaScrollbarHover", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), { forwardRef: n } = ce();
  let o;
  const i = O(false);
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
  }), Ae(() => {
    const s = t.scrollArea.value;
    s && (window.clearTimeout(o), s.removeEventListener("pointerenter", a), s.removeEventListener("pointerleave", r));
  }), (s, l) => (T(), $(p(fn), { present: s.forceMount || i.value }, { default: A(() => [R(ya, j(s.$attrs, { ref: p(n), "data-state": i.value ? "visible" : "hidden" }), { default: A(() => [z(s.$slots, "default")]), _: 3 }, 16, ["data-state"])]), _: 3 }, 8, ["present"]));
} }), Bl = I({ __name: "ScrollAreaScrollbarScroll", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), n = xn(), { forwardRef: o } = ce(), { state: i, dispatch: a } = fs("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  jt((s) => {
    if (i.value === "idle") {
      const l = window.setTimeout(() => a("HIDE"), t.scrollHideDelay.value);
      s(() => {
        window.clearTimeout(l);
      });
    }
  });
  const r = la(() => a("SCROLL_END"), 100);
  return jt((s) => {
    const l = t.viewport.value, u = n.isHorizontal.value ? "scrollLeft" : "scrollTop";
    if (l) {
      let h = l[u];
      const c = () => {
        const d = l[u];
        h !== d && (a("SCROLL"), r()), h = d;
      };
      l.addEventListener("scroll", c), s(() => {
        l.removeEventListener("scroll", c);
      });
    }
  }), (s, l) => (T(), $(p(fn), { present: s.forceMount || p(i) !== "hidden" }, { default: A(() => [R(yo, j(s.$attrs, { ref: p(o) }), { default: A(() => [z(s.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), [xn, $l] = Ke("ScrollAreaScrollbar"), Ol = I({ inheritAttrs: false, __name: "ScrollAreaScrollbar", props: { orientation: { default: "vertical" }, forceMount: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, setup(e8) {
  const t = e8, { forwardRef: n } = ce(), o = Le(), i = B(() => t.orientation === "horizontal");
  ie(i, () => {
    i.value ? o.onScrollbarXEnabledChange(true) : o.onScrollbarYEnabledChange(true);
  }, { immediate: true }), Ae(() => {
    o.onScrollbarXEnabledChange(false), o.onScrollbarYEnabledChange(false);
  });
  const { orientation: a, forceMount: r, asChild: s, as: l } = Ge(t);
  return $l({ orientation: a, forceMount: r, isHorizontal: i, as: l, asChild: s }), (u, h) => p(o).type.value === "hover" ? (T(), $(Ll, j({ key: 0 }, u.$attrs, { ref: p(n), "force-mount": p(r) }), { default: A(() => [z(u.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : p(o).type.value === "scroll" ? (T(), $(Bl, j({ key: 1 }, u.$attrs, { ref: p(n), "force-mount": p(r) }), { default: A(() => [z(u.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : p(o).type.value === "auto" ? (T(), $(ya, j({ key: 2 }, u.$attrs, { ref: p(n), "force-mount": p(r) }), { default: A(() => [z(u.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : p(o).type.value === "always" ? (T(), $(yo, j({ key: 3 }, u.$attrs, { ref: p(n), "data-state": "visible" }), { default: A(() => [z(u.$slots, "default")]), _: 3 }, 16)) : ae("", true);
} }), Il = I({ __name: "ScrollAreaThumb", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, n = Le(), o = bn();
  function i(d) {
    const m = d.target.getBoundingClientRect(), g = d.clientX - m.left, b = d.clientY - m.top;
    o.handleThumbDown(d, { x: g, y: b });
  }
  function a(d) {
    o.handleThumbUp(d);
  }
  const { forwardRef: r, currentElement: s } = ce(), l = O(), u = B(() => n.viewport.value);
  function h() {
    if (!l.value) {
      const d = Rl(u.value, o.onThumbPositionChange);
      l.value = d, o.onThumbPositionChange();
    }
  }
  const c = B(() => o.sizes.value);
  return ps(c, () => {
    o.onThumbChange(s.value), u.value && (o.onThumbPositionChange(), u.value.addEventListener("scroll", h));
  }), Ae(() => {
    var _a2;
    u.value.removeEventListener("scroll", h), (_a2 = n.viewport.value) == null ? void 0 : _a2.removeEventListener("scroll", h);
  }), (d, f) => (T(), $(p(ye), { ref: p(r), "data-state": p(o).hasThumb ? "visible" : "hidden", style: { width: "var(--reka-scroll-area-thumb-width)", height: "var(--reka-scroll-area-thumb-height)" }, "as-child": t.asChild, as: d.as, onPointerdown: i, onPointerup: a }, { default: A(() => [z(d.$slots, "default")]), _: 3 }, 8, ["data-state", "as-child", "as"]));
} }), Ul = I({ inheritAttrs: false, __name: "ScrollAreaViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8, { expose: t }) {
  const n = e8, { nonce: o } = Ge(n), i = ra(o), a = Le(), r = O();
  re(() => {
    a.onViewportChange(r.value), a.onContentChange(l.value);
  }), t({ viewportElement: r });
  const { forwardRef: s, currentElement: l } = ce();
  return (u, h) => (T(), V(Ee, null, [w("div", j({ ref_key: "viewportElement", ref: r, "data-reka-scroll-area-viewport": "", style: { overflowX: p(a).scrollbarXEnabled.value ? "scroll" : "hidden", overflowY: p(a).scrollbarYEnabled.value ? "scroll" : "hidden" } }, u.$attrs, { tabindex: 0 }), [R(p(ye), { ref: p(s), style: _t({ minWidth: p(a).scrollbarXEnabled.value ? "fit-content" : void 0 }), "as-child": n.asChild, as: u.as }, { default: A(() => [z(u.$slots, "default")]), _: 3 }, 8, ["style", "as-child", "as"])], 16), R(p(ye), { as: "style", nonce: p(i) }, { default: A(() => h[0] || (h[0] = [Ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), Hl = { "bg-blue-s3": "", relative: "" }, Fl = { key: 0, left: "50%", absolute: "", "bottom-0": "", "max-w-full": "" }, Vl = { flex: "~ col lg:row justify-between gap-x-32", relative: "", "w-full": "", "f-mt-md": "", "lg:bottom--60": "" }, Yl = { flex: "~ col sm:items-center lg:items-start" }, Gl = I({ __name: "TwoColumn", props: { primary: {} }, setup(e8) {
  return (t, n) => {
    const o = Ji, i = ia, a = ho, r = dn;
    return T(), V("section", Hl, [t.primary.backgroundImage ? (T(), V("div", Fl, [R(o, { field: t.primary.backgroundImage }, null, 8, ["field"])])) : ae("", true), R(i, { headline: t.primary.headline, subline: t.primary.subline, "children:text-white": "" }, null, 8, ["headline", "subline"]), w("div", Vl, [w("div", Yl, [R(a, { wrapper: "div", field: t.primary.text, class: "nq-prose-compact px-0" }, null, 8, ["field"]), R(r, { "internal-component": "a", field: t.primary.linkHref, "nq-arrow": "", "nq-pill-tertiary": "" }, { default: A(() => [Ve(ue(t.primary.linkLabel), 1)]), _: 1 }, 8, ["field"])]), R(o, { field: t.primary.image, relative: "", "mx-auto": "", "drop-shadow-xl": "", "lg:mr-0": "" }, null, 8, ["field"])])]);
  };
} }), zl = Object.assign(Gl, { __name: "HeroTwoColumn" }), Kl = { viewBox: "0 0 977 362", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Wl = { class: "marker-group" }, ql = ["width"], jl = ["width", "x", "y"], Zl = ["width", "x", "y"], Xl = ["x", "y"], Ql = { class: "small-marker-group" }, Jl = ["width", "x", "y"], eu = ["width", "x", "y"], ni = 160, St = 120, tu = I({ __name: "Map", setup(e8) {
  const t = [{ id: "europe", x: 350, y: -175, width: ni, text: "2000" }, { id: "australia", x: 800, y: 70, width: ni, text: "250" }], n = [{ id: "1", x: -5, y: 3, width: St }, { id: "2", x: 115, y: -94, width: St }, { id: "3", x: 162, y: 41, width: St }, { id: "4", x: 306, y: -43, width: St }, { id: "5", x: 594, y: -65, width: St }], o = O(false), i = O(true);
  return re(() => {
    setTimeout(() => {
      o.value = true, setTimeout(() => {
        i.value = false;
      }, 1e3);
    }, 100);
  }), (a, r) => {
    const s = aa;
    return T(), V("div", { class: ve([{ visible: o.value, delayed: i.value }, "map"]) }, [R(s, { class: "base-map", provider: "ipxStatic", src: "/assets/images/home-hero/map.svg", alt: "World map" }), (T(), V("svg", Kl, [r[0] || (r[0] = Go('<g class="green-group europe" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-228d86dd><path d="M432.199 67.438c.084.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.627-1.355-.084-.847 1.017-1.61 2.372-1.694 1.61-.085 2.627.508 2.627 1.355Z" data-v-228d86dd></path><path d="M432.453 71.758c.084.848-1.017 1.61-2.372 1.695-1.356.084-2.542-.508-2.627-1.356-.084-.847 1.017-1.61 2.372-1.694 1.441 0 2.627.593 2.627 1.355Z" data-v-228d86dd></path><path d="M439.145 67.1c.084.846-1.017 1.609-2.457 1.694-1.355.084-2.541-.509-2.626-1.44-.085-.848 1.016-1.61 2.457-1.695 1.609-.085 2.626.508 2.626 1.44Z" data-v-228d86dd></path><path d="M425.167 67.947c.085.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.457-1.356-.085-.847 1.017-1.609 2.372-1.694 1.186-.17 2.372.424 2.457 1.356Z" data-v-228d86dd></path><path d="M432.114 62.949c.085.847-1.017 1.61-2.457 1.694-1.355.085-2.372-.508-2.457-1.356-.084-.847 1.017-1.61 2.457-1.694 1.186-.085 2.372.508 2.457 1.356Z" data-v-228d86dd></path></g><g class="green-group australia" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-228d86dd><path d="M882.026 318.444c.085 1.016-.932 1.271-2.372.678-1.44-.593-2.795-1.864-2.88-2.796-.085-1.016.932-1.271 2.372-.678 1.44.593 2.711 1.779 2.88 2.796Z" data-v-228d86dd></path><path d="M874.571 315.479c.085 1.016-.931 1.271-2.371.762-1.441-.593-2.796-1.779-2.881-2.795-.084-1.017.932-1.271 2.372-.763 1.44.593 2.626 1.779 2.88 2.796Z" data-v-228d86dd></path><path d="M882.789 323.527c.085 1.016-.932 1.27-2.372.677s-2.711-1.863-2.88-2.795c-.085-1.017.931-1.271 2.372-.678 1.524.593 2.795 1.864 2.88 2.796Z" data-v-228d86dd></path><path d="M889.396 321.493c.085 1.017-.932 1.271-2.287.763-1.44-.593-2.711-1.864-2.881-2.88-.084-1.017.932-1.271 2.288-.763 1.44.763 2.626 1.949 2.88 2.88Z" data-v-228d86dd></path><path d="M881.094 313.361c.085 1.017-.932 1.271-2.287.762-1.355-.508-2.796-1.863-2.88-2.795-.085-1.017.932-1.271 2.287-.763 1.44.678 2.796 1.864 2.88 2.796Z" data-v-228d86dd></path></g>', 2)), w("g", Wl, [(T(), V(Ee, null, Je(t, (l) => w("g", { key: l.id, class: ve(`marker-${l.id}`), width: l.width }, [w("use", { href: "#marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, jl), w("use", { href: "#marker", width: l.width, x: l.x, y: l.y }, null, 8, Zl), w("text", { x: l.x + l.width / 2 - 7, y: l.y + 202 - 18, fill: "#fff", "font-weight": "600", "font-size": "14px" }, ue(l.text), 9, Xl)], 10, ql)), 64))]), w("g", Ql, [(T(), V(Ee, null, Je(n, (l) => w("g", { key: l.id, class: ve(`small-marker-${l.id}`) }, [w("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, Jl), w("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y }, null, 8, eu)], 2)), 64))]), r[1] || (r[1] = Go('<symbol id="marker" viewBox="0 0 158 200" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-228d86dd><g filter="url(#a)" data-v-228d86dd><path d="M119 110.915a8.14 8.14 0 0 1-3.253 6.51l-31.86 23.919a8.14 8.14 0 0 1-9.775 0l-31.86-23.919a8.141 8.141 0 0 1-3.252-6.51V28.801a8.14 8.14 0 0 1 8.14-8.14h63.72A8.14 8.14 0 0 1 119 28.8v82.114Z" fill="url(#b)" data-v-228d86dd></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M68.495 67.806a50.212 50.212 0 0 1-5.639 5.595c-2.707 2.301-6.89.8-7.515-2.699-.588-3.296-.377-6.115.34-9.927 1.336-7.109 3.093-12.754 8.412-16.502 3.187-2.245 7.203-1.103 10.536.315 2.722 1.159 5.635 1.159 8.35.009 3.358-1.422 7.427-2.587 10.639-.324 5.319 3.748 7.076 9.393 8.412 16.502.717 3.812.928 6.631.339 9.927-.624 3.498-4.808 5-7.515 2.7a50.222 50.222 0 0 1-5.638-5.596c-4.188-4.884-16.745-4.637-20.721 0Zm.965-17.091c.39 0 .706.315.706.705a3.084 3.084 0 0 0 3.084 3.084.705.705 0 0 1 0 1.41 3.084 3.084 0 0 0-3.084 3.084.705.705 0 0 1-1.41 0 3.083 3.083 0 0 0-3.084-3.084.705.705 0 1 1 0-1.41 3.084 3.084 0 0 0 3.083-3.084c0-.39.316-.705.705-.705Zm20.386-.282a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm-.814 6.494a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Zm-2.475-3.203a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm5.772-.088a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Z" fill="url(#c)" data-v-228d86dd></path><path opacity=".8" d="m67.671 98.29-3.09-5.326a1.24 1.24 0 0 0-1.073-.614h-6.182c-.44 0-.849.233-1.07.614l-3.09 5.327c-.221.38-.221.848 0 1.229l3.09 5.326c.221.381.63.615 1.07.615h6.182c.441 0 .85-.234 1.07-.615l3.091-5.326a1.22 1.22 0 0 0 .002-1.23Z" fill="#FEFEFE" data-v-228d86dd></path><defs data-v-228d86dd><radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-80 0 0 -122.314 119 20.66)" data-v-228d86dd><stop stop-color="#41A38E" data-v-228d86dd></stop><stop offset="1" stop-color="#21BCA5" data-v-228d86dd></stop></radialGradient><radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(26.83723 23.02773 -21.7223 25.31583 60.964 47.636)" data-v-228d86dd><stop stop-color="#fff" data-v-228d86dd></stop><stop offset="1" stop-color="#fff" stop-opacity=".62" data-v-228d86dd></stop></radialGradient><filter id="a" x=".334" y=".31" width="157.331" height="199.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-228d86dd><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-228d86dd></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-228d86dd></feColorMatrix><feOffset dy="2.035" data-v-228d86dd></feOffset><feGaussianBlur stdDeviation="1.272" data-v-228d86dd></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-228d86dd></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31894" data-v-228d86dd></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-228d86dd></feColorMatrix><feOffset dy="7.123" data-v-228d86dd></feOffset><feGaussianBlur stdDeviation="4.324" data-v-228d86dd></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-228d86dd></feColorMatrix><feBlend in2="effect1_dropShadow_257_31894" result="effect2_dropShadow_257_31894" data-v-228d86dd></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-228d86dd></feColorMatrix><feOffset dy="18.315" data-v-228d86dd></feOffset><feGaussianBlur stdDeviation="19.333" data-v-228d86dd></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-228d86dd></feColorMatrix><feBlend in2="effect2_dropShadow_257_31894" result="effect3_dropShadow_257_31894" data-v-228d86dd></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31894" result="shape" data-v-228d86dd></feBlend></filter></defs></symbol><symbol id="small-marker" viewBox="0 0 118 139" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-228d86dd><g filter="url(#a)" data-v-228d86dd><path d="M79.507 65.79a4.109 4.109 0 0 1-1.641 3.285L61.785 81.148a4.109 4.109 0 0 1-4.934 0l-16.08-12.073a4.108 4.108 0 0 1-1.642-3.286V24.343a4.109 4.109 0 0 1 4.109-4.108h32.161c2.27 0 4.109 1.84 4.109 4.108V65.79Z" fill="#21BCA5" data-v-228d86dd></path></g><defs data-v-228d86dd><filter id="a" x=".717" y=".018" width="117.203" height="138.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-228d86dd><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-228d86dd></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-228d86dd></feColorMatrix><feOffset dy="2.022" data-v-228d86dd></feOffset><feGaussianBlur stdDeviation="1.264" data-v-228d86dd></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-228d86dd></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31717" data-v-228d86dd></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-228d86dd></feColorMatrix><feOffset dy="7.076" data-v-228d86dd></feOffset><feGaussianBlur stdDeviation="4.296" data-v-228d86dd></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-228d86dd></feColorMatrix><feBlend in2="effect1_dropShadow_257_31717" result="effect2_dropShadow_257_31717" data-v-228d86dd></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-228d86dd></feColorMatrix><feOffset dy="18.195" data-v-228d86dd></feOffset><feGaussianBlur stdDeviation="19.206" data-v-228d86dd></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-228d86dd></feColorMatrix><feBlend in2="effect2_dropShadow_257_31717" result="effect3_dropShadow_257_31717" data-v-228d86dd></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31717" result="shape" data-v-228d86dd></feBlend></filter></defs></symbol>', 2))]))], 2);
  };
} }), nu = Object.assign(ze(tu, [["__scopeId", "data-v-228d86dd"]]), { __name: "HeroMap" }), ou = { class: "dark", relative: "", "mx-0": "", "of-hidden": "", "bg-darkblue": "", "py-0": "", "text-neutral": "", "children:max-w-none": "", "max-md:min-h-auto": "", pt: "148 md:153 lg:160", "min-h": "auto md:100vh lg:110vh", flex: "~ col justify-between" }, iu = { flex: "grow ~ col justify-center", "z-10": "", "children:md:mx-auto": "" }, au = { "mt-120": "", "max-w-none": "", "w-full": "", flex: "~ justify-center" }, ru = { class: "map-container", relative: "", "z-1": "", w: "80%", "min-w-680": "", "pt-23": "" }, su = I({ __name: "Home", props: { headline: {}, subHeadlineTemplate: {}, cta: {}, ctaLabel: {} }, setup(e8) {
  const t = e8, { cryptoMapLocationsCount: n } = Wr(), o = Bn($r, { class: "text-blue", to: "https://map.nimiq.com", target: "_blank" }, () => [Bn(qr, { value: n.value || 0, duration: 1300 }), " locations"]), i = B(() => {
    var _a2, _b, _c2, _d2;
    const r = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), s = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return Bn("p", {}, [r, o, s]);
  }), a = B(() => {
    var _a2, _b, _c2, _d2;
    const r = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), s = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return `${r} ${n.value} ${s}`;
  });
  return ie(a, () => {
    Ir({ title: t.headline.at(0).text, meta: [{ name: "description", content: a.value }] });
  }), (r, s) => {
    const l = Or, u = dn, h = aa, c = Kr;
    return T(), V("section", ou, [w("div", iu, [R(l, { "nq-heading-lg": "", field: r.headline, wrapper: "h1" }, null, 8, ["field"]), (T(), $(Xi(p(i)), { text: "neutral-800 f-xl" })), R(u, { "internal-component": "a", field: r.cta, "mt-40": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: A(() => [Ve(ue(r.ctaLabel), 1)]), _: 1 }, 8, ["field"])]), R(h, { width: "1600", height: "900", src: "/assets/images/gods-light.webp", provider: "ipxStatic", alt: "Nimiq Gods Rays Background", "pointer-events-none": "", absolute: "", "inset-0": "", "m-0": "", "size-full": "", "blur-60": "", "brightness-80": "" }), s[3] || (s[3] = w("div", { "bg-gradient": "to-b from-darkblue/0 to-darkblue", "pointer-events-none": "", absolute: "", "inset-0": "", "m-0": "", "op-80": "" }, null, -1)), R(c, { "left-100": "", top: "77 sm:112 md:200", style: { "--scale": "1.05" } }), R(c, { "right-80": "", "top-170": "", style: { "--scale": "0.7" } }), R(c, { bottom: "302 md:430", left: "56vw md:30vw", style: { "--scale": "0.92" } }), R(c, { "bottom-460": "", "right-32": "", style: { "--scale": "1" } }), w("div", au, [w("div", ru, [s[0] || (s[0] = w("div", { class: "ellipse-shape", "z--1": "", "bg-neutral-300": "", "mix-blend-multiply": "", "blur-20": "" }, null, -1)), s[1] || (s[1] = w("div", { class: "ellipse-shape", "z--2": "", "blur-120": "", style: { background: "radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" } }, null, -1)), s[2] || (s[2] = w("div", { class: "ellipse-shape", "z--1": "", "bg-white": "" }, null, -1)), R(nu)])])]);
  };
} }), lu = Object.assign(ze(su, [["__scopeId", "data-v-29ad71a2"]]), { __name: "HeroHome" }), uu = {}, cu = { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 34 41", "w-30": "", "of-visible": "", "text-white": "" };
function du(e8, t) {
  return T(), V("svg", cu, t[0] || (t[0] = [w("g", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "3" }, [w("path", { d: "M2.3 2 17 13 31.8 2", class: "breath-arrow", style: { "--op": "1" } }), w("path", { d: "M2.3 15 17 26l14.8-11", class: "breath-arrow", style: { "--op": "0.7", "--delay": "0.6s" } }), w("path", { d: "M2.3 28 17 39l14.8-11", class: "breath-arrow", style: { "--op": "0.4", "--delay": "1.2s" } })], -1)]));
}
const hu = Object.assign(ze(uu, [["render", du], ["__scopeId", "data-v-b09d8c2c"]]), { __name: "AnimatedBreathArrow" }), fu = { relative: "", "of-x-clip": "", "bg-neutral-0": "", "pb-0": "", "f-p-5xl": "", "max-md:pb-100": "" }, pu = I({ __name: "Staking", props: { headline: {}, cta: {} }, setup(e8) {
  return (t, n) => {
    const o = ts, i = ns, a = hu;
    return T(), V("section", fu, [R(o, { left: "-100vw lg:-5vw", size: "300vw lg:110vw", absolute: "", "z-0": "", "max-w-none": "", bottom: "10 lg:-300" }), n[0] || (n[0] = w("div", { h: "400 lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "", "bg-neutral-0": "" }, null, -1)), n[1] || (n[1] = w("div", { class: "bg-radial-green", "bg-gradient-fn": "to-b from-white to-", top: "50vh lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "" }, null, -1)), n[2] || (n[2] = w("div", { class: "bg-linear-white-1", top: "20vh lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "" }, null, -1)), n[3] || (n[3] = w("div", { class: "bg-linear-white-2", top: "20vh lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "" }, null, -1)), R(i, { headline: t.headline, cta: t.cta, "show-staking-icon": "", "primary-pill": "", relative: "", "z-2": "" }, null, 8, ["headline", "cta"]), R(a, { hidden: "", "f-m-5xl": "", "md:block": "", "max-md:self-center": "" })]);
  };
} }), mu = Object.assign(ze(pu, [["__scopeId", "data-v-de205f29"]]), { __name: "HeroStaking" }), pe = ["month", "day", "hour", "minute", "second"], ba = 1e3, xa = 60 * ba, wa = 60 * xa, Sa = 24 * wa, oi = { second: ba, minute: xa, hour: wa, day: Sa };
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
      if ((o !== "month" ? oi[o] : 28 * Sa) - 2 * this._periodResetSafetyBuffer < 200) throw new Error(`Period reset safety buffer too long for ${o} rate limit.`);
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
var bo = ((e8) => (e8.CryptoCompare = "CryptoCompare", e8.CryptoCompareLegacy = "CryptoCompareLegacy", e8.CoinGecko = "CoinGecko", e8))(bo || {}), Qt = ((e8) => (e8.NIM = "nim", e8.BTC = "btc", e8.ETH = "eth", e8.USDC = "usdc", e8.USDT = "usdt", e8))(Qt || {}), fe = ((e8) => (e8.AED = "aed", e8.AFN = "afn", e8.ALL = "all", e8.AMD = "amd", e8.ANG = "ang", e8.AOA = "aoa", e8.ARS = "ars", e8.AUD = "aud", e8.AWG = "awg", e8.AZN = "azn", e8.BAM = "bam", e8.BBD = "bbd", e8.BDT = "bdt", e8.BGN = "bgn", e8.BHD = "bhd", e8.BIF = "bif", e8.BMD = "bmd", e8.BND = "bnd", e8.BOB = "bob", e8.BRL = "brl", e8.BSD = "bsd", e8.BTN = "btn", e8.BWP = "bwp", e8.BYN = "byn", e8.BZD = "bzd", e8.CAD = "cad", e8.CDF = "cdf", e8.CHF = "chf", e8.CLP = "clp", e8.CNY = "cny", e8.COP = "cop", e8.CRC = "crc", e8.CUP = "cup", e8.CZK = "czk", e8.DJF = "djf", e8.DKK = "dkk", e8.DOP = "dop", e8.DZD = "dzd", e8.EGP = "egp", e8.ERN = "ern", e8.ETB = "etb", e8.EUR = "eur", e8.FJD = "fjd", e8.FKP = "fkp", e8.GBP = "gbp", e8.GEL = "gel", e8.GHS = "ghs", e8.GIP = "gip", e8.GMD = "gmd", e8.GNF = "gnf", e8.GTQ = "gtq", e8.GYD = "gyd", e8.HKD = "hkd", e8.HNL = "hnl", e8.HTG = "htg", e8.HUF = "huf", e8.IDR = "idr", e8.ILS = "ils", e8.INR = "inr", e8.IQD = "iqd", e8.IRR = "irr", e8.ISK = "isk", e8.JMD = "jmd", e8.JOD = "jod", e8.JPY = "jpy", e8.KES = "kes", e8.KGS = "kgs", e8.KHR = "khr", e8.KMF = "kmf", e8.KPW = "kpw", e8.KRW = "krw", e8.KWD = "kwd", e8.KYD = "kyd", e8.KZT = "kzt", e8.LAK = "lak", e8.LBP = "lbp", e8.LKR = "lkr", e8.LRD = "lrd", e8.LSL = "lsl", e8.LYD = "lyd", e8.MAD = "mad", e8.MDL = "mdl", e8.MGA = "mga", e8.MKD = "mkd", e8.MMK = "mmk", e8.MNT = "mnt", e8.MOP = "mop", e8.MRU = "mru", e8.MUR = "mur", e8.MVR = "mvr", e8.MWK = "mwk", e8.MXN = "mxn", e8.MYR = "myr", e8.MZN = "mzn", e8.NAD = "nad", e8.NGN = "ngn", e8.NIO = "nio", e8.NOK = "nok", e8.NPR = "npr", e8.NZD = "nzd", e8.OMR = "omr", e8.PAB = "pab", e8.PEN = "pen", e8.PGK = "pgk", e8.PHP = "php", e8.PKR = "pkr", e8.PLN = "pln", e8.PYG = "pyg", e8.QAR = "qar", e8.RON = "ron", e8.RSD = "rsd", e8.RUB = "rub", e8.RWF = "rwf", e8.SAR = "sar", e8.SBD = "sbd", e8.SCR = "scr", e8.SDG = "sdg", e8.SEK = "sek", e8.SGD = "sgd", e8.SHP = "shp", e8.SOS = "sos", e8.SRD = "srd", e8.SSP = "ssp", e8.STN = "stn", e8.SYP = "syp", e8.SZL = "szl", e8.THB = "thb", e8.TJS = "tjs", e8.TMT = "tmt", e8.TND = "tnd", e8.TOP = "top", e8.TRY = "try", e8.TTD = "ttd", e8.TWD = "twd", e8.TZS = "tzs", e8.UAH = "uah", e8.UGX = "ugx", e8.USD = "usd", e8.UYU = "uyu", e8.UZS = "uzs", e8.VES = "ves", e8.VND = "vnd", e8.VUV = "vuv", e8.WST = "wst", e8.XAF = "xaf", e8.XCD = "xcd", e8.XOF = "xof", e8.XPF = "xpf", e8.YER = "yer", e8.ZAR = "zar", e8.ZMW = "zmw", e8.ZWL = "zwl", e8))(fe || {});
const gu = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => fe[e8]), vu = ["AUD", "BRL", "CAD", "CHF", "CLP", "CZK", "EUR", "GBP", "HKD", "IDR", "ILS", "JPY", "KES", "KZT", "MXN", "MYR", "NZD", "PEN", "RON", "SGD", "THB", "TRY", "USD"].map((e8) => fe[e8]), _u = ["AED", "AOA", "ARS", "AUD", "BGN", "BRL", "CAD", "CHF", "COP", "CZK", "EUR", "GBP", "GEL", "HKD", "IDR", "ILS", "INR", "JPY", "KRW", "KZT", "MXN", "MYR", "NGN", "NZD", "PHP", "PLN", "RON", "RUB", "SGD", "THB", "TRY", "UAH", "USD", "ZAR"].map((e8) => fe[e8]), ii = Date.parse("2024-11-01"), yu = ["AED", "ARS", "AUD", "BDT", "BHD", "BMD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "GEL", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "KWD", "LKR", "MMK", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "ZAR"].map((e8) => fe[e8]), ka = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => fe[e8]), wn = ["CRC"].map((e8) => fe[e8]), bu = [...ka, ...wn], Ta = { crc: "America/Costa_Rica" }, Ca = "https://data-api.cryptocompare.com/index/cc", Ma = "https://min-api.cryptocompare.com/data";
let Da = "https://api.coingecko.com/api/v3";
const qn = { nim: "nimiq-2", btc: "bitcoin", eth: "ethereum", usdc: "usd-coin", usdt: "tether" }, xu = 1e3, ct = 60 * xu, xo = 60 * ct, Mt = 24 * xo, wu = /* @__PURE__ */ new Map();
async function Su(e8, t, n = "CryptoCompare") {
  e8 = e8.map((u) => u.toLowerCase()), t = t.map((u) => u.toLowerCase());
  const o = [], i = [];
  for (const u of t) if (ft(u, n, "current")) o.push(u);
  else if (Ra(u, n, "current")) i.push(u);
  else throw new Error(`Currency ${u} not supported for provider ${n}.`);
  let a;
  if (i.length) {
    a = Du(i);
    const u = "usd";
    if (!ft(u, n, "current")) throw new Error(`${n} can not bridge via USD`);
    o.includes(u) || o.push(u);
  }
  let r;
  switch (n) {
    case "CryptoCompare":
      r = (async () => {
        const u = e8.flatMap((f) => t.map((m) => `${f.toUpperCase()}-${m.toUpperCase()}`)), h = 50, c = [];
        for (let f = 0; f < u.length; f += h) {
          const m = u.slice(f, Math.min(u.length, f + h));
          c.push(Ie(`${Ca}/v1/latest/tick?market=cadli&instruments=${m.join(",")}&groups=VALUE&apply_mapping=false`, n).then(({ Data: g }) => g));
        }
        const d = {};
        for (const f of await Promise.all(c)) for (const [m, { VALUE: g }] of Object.entries(f)) {
          const [b, v] = m.split("-").map((_) => _.toLowerCase());
          d[b] || (d[b] = {}), d[b][v] = g;
        }
        return d;
      })();
      break;
    case "CryptoCompareLegacy":
      r = (async () => {
        const h = [];
        for (let d = 0; d < o.length; d += 25) {
          const f = o.slice(d, Math.min(o.length, d + 25));
          h.push(Ie(`${Ma}/pricemulti?fsyms=${e8.join(",")}&tsyms=${f.join(",")}`, n));
        }
        const c = {};
        for (const d of await Promise.all(h)) for (const [f, m] of Object.entries(d)) {
          const g = f.toLowerCase();
          for (const [b, v] of Object.entries(m)) {
            const _ = b.toLowerCase();
            c[g] || (c[g] = {}), c[g][_] = v;
          }
        }
        return c;
      })();
      break;
    case "CoinGecko": {
      const u = e8.map((h) => qn[h]);
      r = Ie(`${Da}/simple/price?ids=${u.join(",")}&vs_currencies=${o.join(",")}`, n).then((h) => e8.reduce((c, d) => ({ ...c, [d]: h[qn[d]] }), {}));
      break;
    }
    default:
      throw new Error(`Unsupported provider ${n}`);
  }
  const [s, l] = await Promise.all([r, a]);
  for (const [u, h] of Object.entries(l || {})) for (const c of Object.values(s)) {
    const d = c.usd;
    c[u] = h && d ? h * d : void 0;
  }
  return s;
}
async function Jt(e8, t, n, o, i = "CryptoCompare", a = {}) {
  if (i === "CryptoCompareLegacy" && e8 === "nim" && o >= ii) throw new Error(`The legacy API only supports historic rates for NIM before ${new Date(ii)}.`);
  const r = t;
  let s, l;
  if (Ra(t, i, "historic") && !ft(t, i, "historic")) {
    s = t, l = Aa(s, n, o);
    const m = "usd";
    if (!ft(m, i, "historic")) throw new Error(`${i} can not bridge via USD`);
    t = m;
  }
  n = Math.floor(n / 1e3), o = Math.ceil(o / 1e3);
  let u = 0, h;
  switch (i) {
    case "CryptoCompare":
      h = (async () => {
        const m = `${e8.toUpperCase()}-${t.toUpperCase()}`, { interval: g, aggregate: b, aggregatedIntervalTime: v } = jn(a);
        let _ = [], y = o;
        try {
          for (; y >= n; ) {
            const k = Math.min(Math.floor(2e3 / b), Math.ceil((y - n) * 1e3 / v) + 1), { Data: M } = await Ie(`${Ca}/v1/historical/${g}?market=cadli&groups=OHLC&fill=false&apply_mapping=false&instrument=${m}&to_ts=${y}&limit=${k}` + (b !== 1 ? `&aggregate=${b}` : ""), i), C = [];
            for (const { TIMESTAMP: E, OPEN: K } of M) E < n || C.push([E * 1e3, K]);
            _ = C.concat(_), y = M[0].TIMESTAMP - 1;
          }
        } catch (k) {
          const M = k instanceof Error && k.message.includes("was not trading") && qe(k.cause) && "other_info" in k.cause && qe(k.cause.other_info) && "first" in k.cause.other_info && typeof k.cause.other_info.first == "number" ? k.cause.other_info.first : void 0;
          if (M) u = Math.min(M - (_.length ? 1 : 0), o);
          else throw k;
        }
        return _;
      })();
      break;
    case "CryptoCompareLegacy":
      e8 === "nim" && t === "usd" && (t = "usdt"), h = (async () => {
        const { interval: m, aggregate: g, aggregatedIntervalTime: b } = jn(a);
        let v = [], _ = o;
        for (; _ >= n; ) {
          const y = Math.min(Math.floor(2e3 / g), Math.ceil((_ - n) * 1e3 / b) + 1) - 1, { Data: { TimeFrom: k, Data: M } } = await Ie(`${Ma}/v2/histo${m.replace(/s$/, "")}?fsym=${e8}&tsym=${t}&toTs=${_}&limit=${y}` + (g !== 1 ? `&aggregate=${g}` : ""), i), C = [];
          for (const { time: E, open: K } of M) E < n || C.push([E * 1e3, K]);
          v = C.concat(v), _ = k - 1;
        }
        return v;
      })();
      break;
    case "CoinGecko": {
      const m = qn[e8.toLowerCase()];
      h = Ie(`${Da}/coins/${m}/market_chart/range?vs_currency=${t}&from=${n}&to=${o}`, i).then(({ prices: g }) => g);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${i}`);
  }
  const [c, d] = await Promise.all([h, l]);
  let f = c;
  return s && d && (f = c.map(([m, g]) => {
    const b = Zn(m, Ta[s]), v = d[b];
    return v ? [m, g * v] : null;
  }).filter((m) => m !== null)), u && Mu(r, "CryptoCompareLegacy") && (f = (await Jt(e8, r, n * 1e3, u * 1e3, "CryptoCompareLegacy", a)).concat(f)), f;
}
async function ku(e8, t, n, o = "CryptoCompare", i = {}) {
  const a = /* @__PURE__ */ new Map();
  if (!n.length) return a;
  n.sort((d, f) => d - f);
  const r = "interval" in i || "aggregate" in i ? i : {}, { aggregatedIntervalTime: s } = jn(r);
  let l;
  switch (o) {
    case "CryptoCompare":
    case "CryptoCompareLegacy":
      l = await Jt(e8, t, n[0] - s, n[n.length - 1] + s, o, r);
      break;
    case "CoinGecko": {
      const d = Date.now(), f = [];
      let m = n.length - 1;
      if (!("disableMinutelyData" in i ? !!i.disableMinutelyData : false) && d - n[n.length - 1] < Mt - 15 * ct) {
        const v = Mt - 15 * ct - (d - n[n.length - 1]), { chunk: _, searchEndIndex: y } = ai(n, m, v, 10 * ct);
        f.push(_), m = y;
      }
      for (; m >= 0; ) {
        const { chunk: v, searchEndIndex: _ } = ai(n, m, 90 * Mt, 1.5 * xo);
        f.push(v), m = _;
      }
      const b = f.map(({ start: v, end: _ }) => Jt(e8, t, v, _, o));
      l = (await Promise.all(b)).reduce((v, _) => [..._, ...v], []).sort((v, _) => v[0] - _[0]);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${o}`);
  }
  if (!l.length) return a;
  let u = 0, h = 0;
  const c = Math.max(2 * Mt, 2 * s);
  for (; u < n.length; ) {
    const d = n[u];
    for (; h < l.length && l[h][0] < d; ) ++h;
    if (h === 0 || h === l.length) {
      const f = l[Math.min(h, l.length - 1)];
      Math.abs(d - f[0]) < c && d <= Date.now() && a.set(d, f[1]);
    } else {
      const f = l[h - 1], m = l[h], g = m[0] - f[0];
      if (g < c) {
        const b = m[1] - f[1], v = f[1] + b * ((d - f[0]) / g);
        a.set(d, v);
      }
    }
    ++u;
  }
  return a;
}
function jn(e8) {
  const t = e8.interval || "hours", n = e8.aggregate || 1, o = { minutes: ct, hours: xo, days: Mt }[t] * n;
  return { interval: t, aggregate: n, aggregatedIntervalTime: o };
}
function ai(e8, t, n, o) {
  n -= 2 * o;
  const i = e8[t];
  let a = i, r = t - 1;
  for (; r >= 0 && i - e8[r] < n; ) a = e8[r], --r;
  return { searchEndIndex: r, chunk: { start: a - o, end: i + o } };
}
const ri = { second: 20, minute: 300, hour: 3e3 }, Tu = { parallel: 1 }, si = { CryptoCompare: new Gt(ri, 150), CryptoCompareLegacy: new Gt(ri, 150), CoinGecko: new Gt(Tu), unlimited: new Gt({}) };
async function Ie(e8, t, n) {
  var _a2;
  let o;
  typeof t == "object" ? o = t : n = t;
  const i = n ? si[n] : si.unlimited;
  let a = null;
  do {
    let r;
    try {
      const c = (o == null ? void 0 : o.headers) instanceof Headers || Array.isArray(o == null ? void 0 : o.headers) ? o.headers : Object.entries((o == null ? void 0 : o.headers) || {}), d = () => fetch(e8, { ...o, headers: [...c, ...wu] });
      r = await i.schedule(d);
    } catch (c) {
      console.info("FiatApi failed to fetch. Retrying...", c), i.pause(2e4);
      continue;
    }
    const s = r.body ? await r.json() : null;
    let l, u, h;
    if (qe(s) && ("Err" in s && qe(s.Err) && "type" in s.Err ? (l = s.Err, u = l.type, h = l.message) : "Response" in s && s.Response === "Error" && (l = s, u = l.Type, h = l.Message)), l && u === 99) {
      console.info(`FiatApi hit CryptoCompare rate limit: ${h}. Retrying...`);
      const c = "Cooldown" in l && l.Cooldown ? l.Cooldown : Number.parseInt(((_a2 = h == null ? void 0 : h.match(/\d+ seconds?/)) == null ? void 0 : _a2[0]) || "", 10), d = "RateLimit" in l ? l.RateLimit : "other_info" in l ? l.other_info : void 0, f = qe(d) && "calls_made" in d && qe(d.calls_made) && "max_calls" in d && qe(d.max_calls) && ["month", "day", "hour", "minute", "second"].every((m) => typeof d.calls_made[m] == "number" && typeof d.max_calls[m] == "number") ? d : void 0;
      if (c) i.pause(c * 1e3);
      else if (f) {
        const m = f.max_calls, g = f.calls_made;
        i.setUsages(g, "increase-only"), (m.day && g.day > m.day || m.month && g.month > m.month) && (m.parallel = 1), delete m.day, delete m.month, i.setRateLimits(m);
      } else {
        console.error("FiatApi got unexpected CryptoCompare rate limit response", s);
        const m = i.getRateLimits(), g = m.minute && m.second ? ct / (m.minute / m.second) : 4e3;
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
      const c = i.getRateLimits();
      delete c.parallel, i.setRateLimits(c);
    }
    a = s;
  } while (!a);
  return a;
}
function qe(e8) {
  return !!e8 && typeof e8 == "object";
}
function ft(e8, t, n) {
  return { CryptoCompare: gu, CryptoCompareLegacy: { current: vu, historic: _u }[n], CoinGecko: yu }[t].includes(e8);
}
function Cu(e8) {
  return bu.includes(e8);
}
function Ra(e8, t, n) {
  return Cu(e8) && !ft(e8, t, n);
}
function Mu(e8, t) {
  return ft(e8, t, "historic") || wn.includes(e8);
}
async function Du(e8) {
  const t = [], n = wn.filter((a) => e8.includes(a));
  if (n.length) for (const a of n) t.push(Aa(a, Date.now()).then((r) => ({ [a]: Object.values(r)[0] })));
  const o = ka.filter((a) => e8.includes(a));
  return o.length && t.push(Ie("https://firestore.googleapis.com/v1/projects/checkout-service/databases/(default)/documents/exchangerates/rates").then((a) => {
    const r = Ru(a);
    return o.reduce((s, l) => ({ ...s, [l]: r[l] }), {});
  })), (await Promise.all(t)).reduce((a, r) => ({ ...a, ...r }));
}
async function Aa(e8, t, n = t) {
  if (!wn.includes(e8)) throw new Error(`Unsupported bridgeable currency for historic rates: ${e8}`);
  const o = Ta[e8], i = Zn(t, o), a = n === t ? i : Zn(n, o);
  return Ie(`https://usd-crc-historic-rate.deno.dev/api/rates/${i}/${a}`);
}
function Zn(e8, t) {
  const o = { "America/Costa_Rica": -6 }[t];
  if (o === void 0) throw new Error(`Unsupported timezone ${t}`);
  const i = new Date(e8);
  return i.setHours(i.getHours() + o), i.toISOString().split("T")[0];
}
function Ru(e8) {
  const t = Au(e8);
  if (!("rates" in t)) throw new Error("Invalid FirebaseResponse");
  const n = {};
  for (const [o, i] of Object.entries(t.rates)) {
    if (typeof i != "number") throw new Error("Invalid FirebaseResponse");
    n[o.toLowerCase()] = i;
  }
  return n;
}
function Au(e8) {
  const t = {};
  for (const [n, o] of Object.entries(e8.fields)) t[n] = Eu(o);
  return t;
}
function Eu(e8) {
  if ("mapValue" in e8) {
    const t = {};
    for (const [n, o] of Object.entries(e8.mapValue.fields)) t[n] = In(o);
    return t;
  }
  return "arrayValue" in e8 ? e8.arrayValue.values.map((t) => In(t)) : In(e8);
}
function In(e8) {
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
    const s = this.code.substring(0, 2), l = typeof globalThis.navigator < "u", u = l ? globalThis.navigator.language : "en-US", h = [...r ? [r] : [], ...l ? [`${u.substring(0, 2)}-${s}`] : [], ...l ? [u] : [], "en-US"];
    let c = "DisplayNames" in Intl;
    [this.locale] = c ? Intl.DisplayNames.supportedLocalesOf(h) : Intl.NumberFormat.supportedLocalesOf(h), c && !this.locale && (c = false, [this.locale] = Intl.NumberFormat.supportedLocalesOf(h));
    const d = a === void 0 && o === void 0 && i === void 0, f = `${this.code} ${this.locale}`, m = _me.CACHED_AUTO_GENERATED_CURRENCY_INFOS[f];
    if (d && m) return m;
    let g;
    const b = { style: "currency", currency: t, useGrouping: false, numberingSystem: "latn" };
    if (o !== void 0) this.name = o;
    else if (m) this.name = m.name;
    else if (c) try {
      this.name = new Intl.DisplayNames(this.locale, { type: "currency" }).of(t);
    } catch {
    }
    if (this.name || (g = _me.failsafeNumberToLocaleString(0, this.locale, { currencyDisplay: "name", ...b }), this.name = g ? g.replace(_me.NUMBER_REGEX, "").trim() : this.code), i !== void 0) this.symbol = i;
    else if (m) this.symbol = m.symbol;
    else {
      const v = _me.EXTRA_SYMBOLS[this.code];
      if (typeof v == "string") this.symbol = v;
      else if (Array.isArray(v)) {
        const _ = this.locale === r && _me.RIGHT_TO_LEFT_DETECTION_REGEX.test(this.name);
        this.symbol = v[_ ? 1 : 0];
      } else {
        const _ = [...r ? [r] : [], `en-${s}`, "en"], y = _me.failsafeNumberToLocaleString(0, _, { currencyDisplay: "narrowSymbol", ...b }) || _me.failsafeNumberToLocaleString(0, _, { currencyDisplay: "symbol", ...b });
        y ? (g = y, this.symbol = g.replace(_me.NUMBER_REGEX, "").trim()) : this.symbol = this.code;
      }
    }
    if (a !== void 0) this.decimals = a;
    else if (m) this.decimals = m.decimals;
    else if (_me.CUSTOM_DECIMAL_LESS_CURRENCIES.has(this.code)) this.decimals = 0;
    else if (g = g || _me.failsafeNumberToLocaleString(0, "en", { currencyDisplay: "code", ...b }), g) {
      const v = g.match(_me.NUMBER_REGEX);
      this.decimals = v ? (v[1] || "").length : 2;
    } else this.decimals = 2;
    d && (_me.CACHED_AUTO_GENERATED_CURRENCY_INFOS[f] = this);
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
const Ea = ["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CRC", "CZK", "DKK", "EUR", "GBP", "GMD", "GTQ", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "XOF", "ZAR"], Pu = Ea.map((e8) => fe[e8]);
function Nu() {
  const e8 = new RegExp("^(\\w+)(?:-\\w{3,4})*(?:-(\\w{2})\\b)?"), n = sa().value.match(e8);
  if (!n) return fe.USD;
  const [, o, i] = n;
  if (i) {
    const r = new RegExp(`^${i}`, "i"), s = Pu.find((u) => r.test(u));
    if (s) return s;
    if (/^(?:AT|BE|CY|EE|FI|FR|DE|GR|HR|IE|IT|LV|LT|LU|MT|NL|PT|SK|SI|ES)$/i.test(i)) return fe.EUR;
  }
  return o && /^(?:de|fr|nl|el|et|fi|sv|ga|hr|it|lv|lt|lb|mt|sk|sl)$/i.test(o) ? fe.EUR : fe.USD;
}
function pt() {
  const e8 = os("user-currency", Nu(), void 0, { mergeDefaults: false }), t = sa(), n = B(() => new me(e8.value, t.value));
  return { currency: e8, currencyInfo: n };
}
const Lu = { "f-text": "12/16", "text-current": "", "nq-label": "" }, Bu = { flex: "~ items-center gap-12", "w-full": "", "px-8": "", "pb-6": "", "pt-13": "" }, $u = { text: "f-sm white/95", "lh-none": "" }, Ou = I({ __name: "CurrencySelector", props: { modelValue: { default: fe.USD }, modelModifiers: {} }, emits: ["update:modelValue"], setup(e8) {
  const t = ea(e8, "modelValue"), { options: n } = o();
  function o() {
    const a = { AED: "i-nimiq-flags:ae-hexagon", AUD: "i-nimiq-flags:au-hexagon", ARS: "i-nimiq-flags:ar-hexagon", BRL: "i-nimiq-flags:br-hexagon", CAD: "i-nimiq-flags:ca-hexagon", CHF: "i-nimiq-flags:ch-hexagon", CLP: "i-nimiq-flags:cl-hexagon", CNY: "i-nimiq-flags:cn-hexagon", CRC: "i-nimiq-flags:cr-hexagon", CZK: "i-nimiq-flags:cz-hexagon", DKK: "i-nimiq-flags:dk-hexagon", EUR: "i-nimiq-flags:eu-hexagon", GBP: "i-nimiq-flags:gb-hexagon", GMD: "i-nimiq-flags:gm-hexagon", GTQ: "i-nimiq-flags:gt-hexagon", HKD: "i-nimiq-flags:hk-hexagon", HUF: "i-nimiq-flags:hu-hexagon", IDR: "i-nimiq-flags:id-hexagon", ILS: "i-nimiq-flags:il-hexagon", INR: "i-nimiq-flags:in-hexagon", JPY: "i-nimiq-flags:jp-hexagon", KRW: "i-nimiq-flags:kr-hexagon", MXN: "i-nimiq-flags:mx-hexagon", MYR: "i-nimiq-flags:my-hexagon", NGN: "i-nimiq-flags:ng-hexagon", NOK: "i-nimiq-flags:no-hexagon", NZD: "i-nimiq-flags:nz-hexagon", PHP: "i-nimiq-flags:ph-hexagon", PKR: "i-nimiq-flags:pk-hexagon", PLN: "i-nimiq-flags:pl-hexagon", RUB: "i-nimiq-flags:ru-hexagon", SEK: "i-nimiq-flags:se-hexagon", SGD: "i-nimiq-flags:sg-hexagon", THB: "i-nimiq-flags:th-hexagon", TRY: "i-nimiq-flags:tr-hexagon", TWD: "i-nimiq-flags:tw-hexagon", UAH: "i-nimiq-flags:ua-hexagon", USD: "i-nimiq-flags:um-hexagon", VND: "i-nimiq-flags:vn-hexagon", XOF: "i-nimiq-flags:sn-hexagon", ZAR: "i-nimiq-flags:za-hexagon" };
    return { options: Ea.map((s) => ({ value: s, label: s.toLocaleLowerCase(), icon: a[s] })) };
  }
  function i(a) {
    return t.value === a ? "" : a;
  }
  return (a, r) => {
    const s = Tl, l = ol, u = yl, h = Sl, c = Ul, d = Il, f = Ol, m = Dl, g = Cl, b = ml, v = gl, _ = kl, y = cl;
    return T(), $(y, { modelValue: t.value, "onUpdate:modelValue": r[0] || (r[0] = (k) => t.value = k), relative: "", bg: "transparent hocus:neutral-200" }, { default: A(() => [R(l, { "w-max": "", "inline-flex": "~ items-center justify-between gap-5" }, { default: A(() => [R(s, { flex: "~ gap-3 items-center", "rounded-4": "", "bg-transparent": "", "px-6": "", "py-3": "", "transition-colors": "" }, { default: A(() => [z(a.$slots, "trigger", cn(Qi({ selectedCurrency: t.value })), () => [w("span", Lu, ue(t.value.toLocaleUpperCase()), 1), r[1] || (r[1] = w("div", { "size-7": "", "op-60": "", "i-nimiq:triangle-down": "" }, null, -1))])]), _: 3 })]), _: 3 }), R(_, null, { default: A(() => [R(v, { position: "popper", "will-change": "[opacity,transform]", "reka-top:animate-slidedownandfade": "", "reka-bottom:animate-slide-up-and-fade": "", absolute: "", "top-0": "", "z-10": "", "max-h-256": "", "w-168": "", "of-hidden": "", "overscroll-none": "", "font-normal": "" }, { default: A(() => [R(g, { outline: "1.5 ~ offset--1.5 white/10", "rounded-4": "", "bg-neutral": "", "px-4": "", "pb-4": "", flex: "~ col" }, { default: A(() => [w("label", Bu, [r[2] || (r[2] = w("div", { "text-neutral-800": "", "i-nimiq:magnifying-glass": "" }, null, -1)), R(u, { placeholder: "Search", text: "16 white", "w-full": "", "flex-1": "", "bg-transparent": "", "lh-none": "", "outline-none": "", "display-value": i })]), R(m, { relative: "", "h-full": "", "flex-1": "", "of-hidden": "", "bg-neutral": "", "var:scrollbar-size:10px": "" }, { default: A(() => [r[3] || (r[3] = w("div", { absolute: "", "top-0": "", "z-2": "", "h-16": "", "w-full": "", "bg-gradient": "to-t from-transparent to-neutral" }, null, -1)), R(c, { "h-218": "", "w-full": "", "py-16": "" }, { default: A(() => [(T(true), V(Ee, null, Je(p(n), (k) => (T(), $(h, { key: k.value, value: k.value, flex: "~ items-center gap-8", bg: "hocus:white/10 reka-active:white/10", "rounded-2": "", "p-8": "", "transition-colors": "" }, { default: A(() => [w("div", { class: ve(k.icon), "size-20": "", "shrink-0": "" }, null, 2), w("span", $u, ue(k.value.toLocaleUpperCase()), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }), R(f, { flex: "~", bg: "neutral-900", "inset-y-0": "", "z-20": "", "w-10": "", "touch-none": "", "select-none": "", "p-2": "", orientation: "vertical" }, { default: A(() => [R(d, { relative: "", "flex-1": "", "rounded-5": "", "bg-neutral-700": "", "content-empty": "", before: "absolute top--50% left--50% -translate-x--50% -translate-y--50% size-full min-h-40 min-w-40" })]), _: 1 }), r[4] || (r[4] = w("div", { absolute: "", "bottom-0": "", "z-2": "", "h-16": "", "w-full": "", "bg-gradient": "to-b from-transparent to-neutral" }, null, -1))]), _: 1 })]), _: 1 }), R(b)]), _: 1 })]), _: 1 })]), _: 3 }, 8, ["modelValue"]);
  };
} }), Pa = Object.assign(Ou, { __name: "CurrencySelector" });
function Na(e8) {
  return e8 === null ? NaN : +e8;
}
const Iu = go(ua), Sn = Iu.right;
go(Na).center;
function Uu(e8, t) {
  let n, o;
  for (const i of e8) i != null && (n === void 0 ? i >= i && (n = o = i) : (n > i && (n = i), o < i && (o = i)));
  return [n, o];
}
class li extends Map {
  constructor(t, n = Vu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [o, i] of t) this.set(o, i);
  }
  get(t) {
    return super.get(ui(this, t));
  }
  has(t) {
    return super.has(ui(this, t));
  }
  set(t, n) {
    return super.set(Hu(this, t), n);
  }
  delete(t) {
    return super.delete(Fu(this, t));
  }
}
function ui({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) ? e8.get(o) : n;
}
function Hu({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) ? e8.get(o) : (e8.set(o, n), n);
}
function Fu({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) && (n = e8.get(o), e8.delete(o)), n;
}
function Vu(e8) {
  return e8 !== null && typeof e8 == "object" ? e8.valueOf() : e8;
}
const Yu = Math.sqrt(50), Gu = Math.sqrt(10), zu = Math.sqrt(2);
function en(e8, t, n) {
  const o = (t - e8) / Math.max(0, n), i = Math.floor(Math.log10(o)), a = o / Math.pow(10, i), r = a >= Yu ? 10 : a >= Gu ? 5 : a >= zu ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / r, s = Math.round(e8 * u), l = Math.round(t * u), s / u < e8 && ++s, l / u > t && --l, u = -u) : (u = Math.pow(10, i) * r, s = Math.round(e8 / u), l = Math.round(t / u), s * u < e8 && ++s, l * u > t && --l), l < s && 0.5 <= n && n < 2 ? en(e8, t, n * 2) : [s, l, u];
}
function Xn(e8, t, n) {
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
function Qn(e8, t, n) {
  return t = +t, e8 = +e8, n = +n, en(e8, t, n)[2];
}
function Jn(e8, t, n) {
  t = +t, e8 = +e8, n = +n;
  const o = t < e8, i = o ? Qn(t, e8, n) : Qn(e8, t, n);
  return (o ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ku(e8, t, n = Na) {
  if (!(!(o = e8.length) || isNaN(t = +t))) {
    if (t <= 0 || o < 2) return +n(e8[0], 0, e8);
    if (t >= 1) return +n(e8[o - 1], o - 1, e8);
    var o, i = (o - 1) * t, a = Math.floor(i), r = +n(e8[a], a, e8), s = +n(e8[a + 1], a + 1, e8);
    return r + (s - r) * (i - a);
  }
}
function* Wu(e8) {
  for (const t of e8) yield* t;
}
function qu(e8) {
  return Array.from(Wu(e8));
}
function ju(e8, t, n) {
  e8 = +e8, t = +t, n = (i = arguments.length) < 2 ? (t = e8, e8 = 0, 1) : i < 3 ? 1 : +n;
  for (var o = -1, i = Math.max(0, Math.ceil((t - e8) / n)) | 0, a = new Array(i); ++o < i; ) a[o] = e8 + o * n;
  return a;
}
function wo(e8, t) {
  return e8 = +e8, t = +t, function(n) {
    return Math.round(e8 * (1 - n) + t * n);
  };
}
function Zu(e8, t) {
  t === void 0 && (t = e8, e8 = pn);
  for (var n = 0, o = t.length - 1, i = t[0], a = new Array(o < 0 ? 0 : o); n < o; ) a[n] = e8(i, i = t[++n]);
  return function(r) {
    var s = Math.max(0, Math.min(o - 1, Math.floor(r *= o)));
    return a[s](r - s);
  };
}
const ci = (e8) => +e8;
var q;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(q || (q = {}));
function Pe(e8, t) {
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
function La(e8, t) {
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
function So() {
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
    return So(t, n).unknown(o);
  }, Pe.apply(i, arguments), i;
}
function ko() {
  var e8 = So().unknown(void 0), t = e8.domain, n = e8.range, o = 0, i = 1, a, r, s = false, l = 0, u = 0, h = 0.5;
  delete e8.unknown;
  function c() {
    var d = t().length, f = i < o, m = f ? i : o, g = f ? o : i;
    a = (g - m) / Math.max(1, d - l + u * 2), s && (a = Math.floor(a)), m += (g - m - a * (d - l)) * h, r = a * (1 - l), s && (m = Math.round(m), r = Math.round(r));
    var b = ju(d).map(function(v) {
      return m + a * v;
    });
    return n(f ? b.reverse() : b);
  }
  return e8.domain = function(d) {
    return arguments.length ? (t(d), c()) : t();
  }, e8.range = function(d) {
    return arguments.length ? ([o, i] = d, o = +o, i = +i, c()) : [o, i];
  }, e8.rangeRound = function(d) {
    return [o, i] = d, o = +o, i = +i, s = true, c();
  }, e8.bandwidth = function() {
    return r;
  }, e8.step = function() {
    return a;
  }, e8.round = function(d) {
    return arguments.length ? (s = !!d, c()) : s;
  }, e8.padding = function(d) {
    return arguments.length ? (l = Math.min(1, u = +d), c()) : l;
  }, e8.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), c()) : l;
  }, e8.paddingOuter = function(d) {
    return arguments.length ? (u = +d, c()) : u;
  }, e8.align = function(d) {
    return arguments.length ? (h = Math.max(0, Math.min(1, d)), c()) : h;
  }, e8.copy = function() {
    return ko(t(), [o, i]).round(s).paddingInner(l).paddingOuter(u).align(h);
  }, Pe.apply(c(), arguments);
}
function Ba(e8) {
  var t = e8.copy;
  return e8.padding = e8.paddingOuter, delete e8.paddingInner, delete e8.paddingOuter, e8.copy = function() {
    return Ba(t());
  }, e8;
}
function Xu() {
  return Ba(ko.apply(null, arguments).paddingInner(1));
}
function Qu(e8) {
  return function() {
    return e8;
  };
}
function eo(e8) {
  return +e8;
}
var hi = [0, 1];
function _e(e8) {
  return e8;
}
function to(e8, t) {
  return (t -= e8 = +e8) ? function(n) {
    return (n - e8) / t;
  } : Qu(isNaN(t) ? NaN : 0.5);
}
function Ju(e8, t) {
  var n;
  return e8 > t && (n = e8, e8 = t, t = n), function(o) {
    return Math.max(e8, Math.min(t, o));
  };
}
function ec(e8, t, n) {
  var o = e8[0], i = e8[1], a = t[0], r = t[1];
  return i < o ? (o = to(i, o), a = n(r, a)) : (o = to(o, i), a = n(a, r)), function(s) {
    return a(o(s));
  };
}
function tc(e8, t, n) {
  var o = Math.min(e8.length, t.length) - 1, i = new Array(o), a = new Array(o), r = -1;
  for (e8[o] < e8[0] && (e8 = e8.slice().reverse(), t = t.slice().reverse()); ++r < o; ) i[r] = to(e8[r], e8[r + 1]), a[r] = n(t[r], t[r + 1]);
  return function(s) {
    var l = Sn(e8, s, 1, o) - 1;
    return a[l](i[l](s));
  };
}
function It(e8, t) {
  return t.domain(e8.domain()).range(e8.range()).interpolate(e8.interpolate()).clamp(e8.clamp()).unknown(e8.unknown());
}
function kn() {
  var e8 = hi, t = hi, n = pn, o, i, a, r = _e, s, l, u;
  function h() {
    var d = Math.min(e8.length, t.length);
    return r !== _e && (r = Ju(e8[0], e8[d - 1])), s = d > 2 ? tc : ec, l = u = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = s(e8.map(o), t, n)))(o(r(d)));
  }
  return c.invert = function(d) {
    return r(i((u || (u = s(t, e8.map(o), Ss)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e8 = Array.from(d, eo), h()) : e8.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), h()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = wo, h();
  }, c.clamp = function(d) {
    return arguments.length ? (r = d ? true : _e, h()) : r !== _e;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, h()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (a = d, c) : a;
  }, function(d, f) {
    return o = d, i = f, h();
  };
}
function $a() {
  return kn()(_e, _e);
}
function nc(e8) {
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
function oc(e8, t) {
  return function(n, o) {
    for (var i = n.length, a = [], r = 0, s = e8[0], l = 0; i > 0 && s > 0 && (l + s + 1 > o && (s = Math.max(1, o - l)), a.push(n.substring(i -= s, i + s)), !((l += s + 1) > o)); ) s = e8[r = (r + 1) % e8.length];
    return a.reverse().join(t);
  };
}
function ic(e8) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e8[+n];
    });
  };
}
var ac = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $t(e8) {
  if (!(t = ac.exec(e8))) throw new Error("invalid format: " + e8);
  var t;
  return new To({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
$t.prototype = To.prototype;
function To(e8) {
  this.fill = e8.fill === void 0 ? " " : e8.fill + "", this.align = e8.align === void 0 ? ">" : e8.align + "", this.sign = e8.sign === void 0 ? "-" : e8.sign + "", this.symbol = e8.symbol === void 0 ? "" : e8.symbol + "", this.zero = !!e8.zero, this.width = e8.width === void 0 ? void 0 : +e8.width, this.comma = !!e8.comma, this.precision = e8.precision === void 0 ? void 0 : +e8.precision, this.trim = !!e8.trim, this.type = e8.type === void 0 ? "" : e8.type + "";
}
To.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function rc(e8) {
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
var Oa;
function sc(e8, t) {
  var n = tn(e8, t);
  if (!n) return e8 + "";
  var o = n[0], i = n[1], a = i - (Oa = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, r = o.length;
  return a === r ? o : a > r ? o + new Array(a - r + 1).join("0") : a > 0 ? o.slice(0, a) + "." + o.slice(a) : "0." + new Array(1 - a).join("0") + tn(e8, Math.max(0, t + a - 1))[0];
}
function fi(e8, t) {
  var n = tn(e8, t);
  if (!n) return e8 + "";
  var o = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + o : o.length > i + 1 ? o.slice(0, i + 1) + "." + o.slice(i + 1) : o + new Array(i - o.length + 2).join("0");
}
const pi = { "%": (e8, t) => (e8 * 100).toFixed(t), b: (e8) => Math.round(e8).toString(2), c: (e8) => e8 + "", d: nc, e: (e8, t) => e8.toExponential(t), f: (e8, t) => e8.toFixed(t), g: (e8, t) => e8.toPrecision(t), o: (e8) => Math.round(e8).toString(8), p: (e8, t) => fi(e8 * 100, t), r: fi, s: sc, X: (e8) => Math.round(e8).toString(16).toUpperCase(), x: (e8) => Math.round(e8).toString(16) };
function mi(e8) {
  return e8;
}
var gi = Array.prototype.map, vi = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function lc(e8) {
  var t = e8.grouping === void 0 || e8.thousands === void 0 ? mi : oc(gi.call(e8.grouping, Number), e8.thousands + ""), n = e8.currency === void 0 ? "" : e8.currency[0] + "", o = e8.currency === void 0 ? "" : e8.currency[1] + "", i = e8.decimal === void 0 ? "." : e8.decimal + "", a = e8.numerals === void 0 ? mi : ic(gi.call(e8.numerals, String)), r = e8.percent === void 0 ? "%" : e8.percent + "", s = e8.minus === void 0 ? "\u2212" : e8.minus + "", l = e8.nan === void 0 ? "NaN" : e8.nan + "";
  function u(c) {
    c = $t(c);
    var d = c.fill, f = c.align, m = c.sign, g = c.symbol, b = c.zero, v = c.width, _ = c.comma, y = c.precision, k = c.trim, M = c.type;
    M === "n" ? (_ = true, M = "g") : pi[M] || (y === void 0 && (y = 12), k = true, M = "g"), (b || d === "0" && f === "=") && (b = true, d = "0", f = "=");
    var C = g === "$" ? n : g === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", E = g === "$" ? o : /[%p]/.test(M) ? r : "", K = pi[M], H = /[defgprs%]/.test(M);
    y = y === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function ee(D) {
      var P = C, Y = E, X, Q, Te;
      if (M === "c") Y = K(D) + Y, D = "";
      else {
        D = +D;
        var Ce = D < 0 || 1 / D < 0;
        if (D = isNaN(D) ? l : K(Math.abs(D), y), k && (D = rc(D)), Ce && +D == 0 && m !== "+" && (Ce = false), P = (Ce ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + P, Y = (M === "s" ? vi[8 + Oa / 3] : "") + Y + (Ce && m === "(" ? ")" : ""), H) {
          for (X = -1, Q = D.length; ++X < Q; ) if (Te = D.charCodeAt(X), 48 > Te || Te > 57) {
            Y = (Te === 46 ? i + D.slice(X + 1) : D.slice(X)) + Y, D = D.slice(0, X);
            break;
          }
        }
      }
      _ && !b && (D = t(D, 1 / 0));
      var ge = P.length + D.length + Y.length, he = ge < v ? new Array(v - ge + 1).join(d) : "";
      switch (_ && b && (D = t(he + D, he.length ? v - Y.length : 1 / 0), he = ""), f) {
        case "<":
          D = P + D + Y + he;
          break;
        case "=":
          D = P + he + D + Y;
          break;
        case "^":
          D = he.slice(0, ge = he.length >> 1) + P + D + Y + he.slice(ge);
          break;
        default:
          D = he + P + D + Y;
          break;
      }
      return a(D);
    }
    return ee.toString = function() {
      return c + "";
    }, ee;
  }
  function h(c, d) {
    var f = u((c = $t(c), c.type = "f", c)), m = Math.max(-8, Math.min(8, Math.floor(mt(d) / 3))) * 3, g = Math.pow(10, -m), b = vi[8 + m / 3];
    return function(v) {
      return f(g * v) + b;
    };
  }
  return { format: u, formatPrefix: h };
}
var zt, Co, Ia;
uc({ thousands: ",", grouping: [3], currency: ["$", ""] });
function uc(e8) {
  return zt = lc(e8), Co = zt.format, Ia = zt.formatPrefix, zt;
}
function cc(e8) {
  return Math.max(0, -mt(Math.abs(e8)));
}
function dc(e8, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(mt(t) / 3))) * 3 - mt(Math.abs(e8)));
}
function hc(e8, t) {
  return e8 = Math.abs(e8), t = Math.abs(t) - e8, Math.max(0, mt(t) - mt(e8)) + 1;
}
function fc(e8, t, n, o) {
  var i = Jn(e8, t, n), a;
  switch (o = $t(o ?? ",f"), o.type) {
    case "s": {
      var r = Math.max(Math.abs(e8), Math.abs(t));
      return o.precision == null && !isNaN(a = dc(i, r)) && (o.precision = a), Ia(o, r);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(a = hc(i, Math.max(Math.abs(e8), Math.abs(t)))) && (o.precision = a - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(a = cc(i)) && (o.precision = a - (o.type === "%") * 2);
      break;
    }
  }
  return Co(o);
}
function nt(e8) {
  var t = e8.domain;
  return e8.ticks = function(n) {
    var o = t();
    return Xn(o[0], o[o.length - 1], n ?? 10);
  }, e8.tickFormat = function(n, o) {
    var i = t();
    return fc(i[0], i[i.length - 1], n ?? 10, o);
  }, e8.nice = function(n) {
    n == null && (n = 10);
    var o = t(), i = 0, a = o.length - 1, r = o[i], s = o[a], l, u, h = 10;
    for (s < r && (u = r, r = s, s = u, u = i, i = a, a = u); h-- > 0; ) {
      if (u = Qn(r, s, n), u === l) return o[i] = r, o[a] = s, t(o);
      if (u > 0) r = Math.floor(r / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) r = Math.ceil(r * u) / u, s = Math.floor(s * u) / u;
      else break;
      l = u;
    }
    return e8;
  }, e8;
}
function Ua() {
  var e8 = $a();
  return e8.copy = function() {
    return It(e8, Ua());
  }, Pe.apply(e8, arguments), nt(e8);
}
function Ha(e8) {
  var t;
  function n(o) {
    return o == null || isNaN(o = +o) ? t : o;
  }
  return n.invert = n, n.domain = n.range = function(o) {
    return arguments.length ? (e8 = Array.from(o, eo), n) : e8.slice();
  }, n.unknown = function(o) {
    return arguments.length ? (t = o, n) : t;
  }, n.copy = function() {
    return Ha(e8).unknown(t);
  }, e8 = arguments.length ? Array.from(e8, eo) : [0, 1], nt(n);
}
function Fa(e8, t) {
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
function pc(e8) {
  return -Math.log(-e8);
}
function mc(e8) {
  return -Math.exp(-e8);
}
function gc(e8) {
  return isFinite(e8) ? +("1e" + e8) : e8 < 0 ? 0 : e8;
}
function vc(e8) {
  return e8 === 10 ? gc : e8 === Math.E ? Math.exp : (t) => Math.pow(e8, t);
}
function _c(e8) {
  return e8 === Math.E ? Math.log : e8 === 10 && Math.log10 || e8 === 2 && Math.log2 || (e8 = Math.log(e8), (t) => Math.log(t) / e8);
}
function bi(e8) {
  return (t, n) => -e8(-t, n);
}
function yc(e8) {
  const t = e8(_i, yi), n = t.domain;
  let o = 10, i, a;
  function r() {
    return i = _c(o), a = vc(o), n()[0] < 0 ? (i = bi(i), a = bi(a), e8(pc, mc)) : e8(_i, yi), t;
  }
  return t.base = function(s) {
    return arguments.length ? (o = +s, r()) : o;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), r()) : n();
  }, t.ticks = (s) => {
    const l = n();
    let u = l[0], h = l[l.length - 1];
    const c = h < u;
    c && ([u, h] = [h, u]);
    let d = i(u), f = i(h), m, g;
    const b = s == null ? 10 : +s;
    let v = [];
    if (!(o % 1) && f - d < b) {
      if (d = Math.floor(d), f = Math.ceil(f), u > 0) {
        for (; d <= f; ++d) for (m = 1; m < o; ++m) if (g = d < 0 ? m / a(-d) : m * a(d), !(g < u)) {
          if (g > h) break;
          v.push(g);
        }
      } else for (; d <= f; ++d) for (m = o - 1; m >= 1; --m) if (g = d > 0 ? m / a(-d) : m * a(d), !(g < u)) {
        if (g > h) break;
        v.push(g);
      }
      v.length * 2 < b && (v = Xn(u, h, b));
    } else v = Xn(d, f, Math.min(f - d, b)).map(a);
    return c ? v.reverse() : v;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = o === 10 ? "s" : ","), typeof l != "function" && (!(o % 1) && (l = $t(l)).precision == null && (l.trim = true), l = Co(l)), s === 1 / 0) return l;
    const u = Math.max(1, o * s / t.ticks().length);
    return (h) => {
      let c = h / a(Math.round(i(h)));
      return c * o < o - 0.5 && (c *= o), c <= u ? l(h) : "";
    };
  }, t.nice = () => n(Fa(n(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function Va() {
  const e8 = yc(kn()).domain([1, 10]);
  return e8.copy = () => It(e8, Va()).base(e8.base()), Pe.apply(e8, arguments), e8;
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
function bc(e8) {
  var t = 1, n = e8(xi(t), wi(t));
  return n.constant = function(o) {
    return arguments.length ? e8(xi(t = +o), wi(t)) : t;
  }, nt(n);
}
function Ya() {
  var e8 = bc(kn());
  return e8.copy = function() {
    return It(e8, Ya()).constant(e8.constant());
  }, Pe.apply(e8, arguments);
}
function Si(e8) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e8) : Math.pow(t, e8);
  };
}
function xc(e8) {
  return e8 < 0 ? -Math.sqrt(-e8) : Math.sqrt(e8);
}
function wc(e8) {
  return e8 < 0 ? -e8 * e8 : e8 * e8;
}
function Sc(e8) {
  var t = e8(_e, _e), n = 1;
  function o() {
    return n === 1 ? e8(_e, _e) : n === 0.5 ? e8(xc, wc) : e8(Si(n), Si(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, o()) : n;
  }, nt(t);
}
function Mo() {
  var e8 = Sc(kn());
  return e8.copy = function() {
    return It(e8, Mo()).exponent(e8.exponent());
  }, Pe.apply(e8, arguments), e8;
}
function kc() {
  return Mo.apply(null, arguments).exponent(0.5);
}
function Ga() {
  var e8 = [], t = [], n = [], o;
  function i() {
    var r = 0, s = Math.max(1, t.length);
    for (n = new Array(s - 1); ++r < s; ) n[r - 1] = Ku(e8, r / s);
    return a;
  }
  function a(r) {
    return r == null || isNaN(r = +r) ? o : t[Sn(n, r)];
  }
  return a.invertExtent = function(r) {
    var s = t.indexOf(r);
    return s < 0 ? [NaN, NaN] : [s > 0 ? n[s - 1] : e8[0], s < n.length ? n[s] : e8[e8.length - 1]];
  }, a.domain = function(r) {
    if (!arguments.length) return e8.slice();
    e8 = [];
    for (let s of r) s != null && !isNaN(s = +s) && e8.push(s);
    return e8.sort(ua), i();
  }, a.range = function(r) {
    return arguments.length ? (t = Array.from(r), i()) : t.slice();
  }, a.unknown = function(r) {
    return arguments.length ? (o = r, a) : o;
  }, a.quantiles = function() {
    return n.slice();
  }, a.copy = function() {
    return Ga().domain(e8).range(t).unknown(o);
  }, Pe.apply(a, arguments);
}
function za() {
  var e8 = 0, t = 1, n = 1, o = [0.5], i = [0, 1], a;
  function r(l) {
    return l != null && l <= l ? i[Sn(o, l, 0, n)] : a;
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
    return za().domain([e8, t]).range(i).unknown(a);
  }, Pe.apply(nt(r), arguments);
}
function Ka() {
  var e8 = [0.5], t = [0, 1], n, o = 1;
  function i(a) {
    return a != null && a <= a ? t[Sn(e8, a, 0, o)] : n;
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
    return Ka().domain(e8).range(t).unknown(n);
  }, Pe.apply(i, arguments);
}
const Un = /* @__PURE__ */ new Date(), Hn = /* @__PURE__ */ new Date();
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
  }), n && (i.count = (a, r) => (Un.setTime(+a), Hn.setTime(+r), e8(Un), e8(Hn), Math.floor(n(Un, Hn))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(o ? (r) => o(r) % a === 0 : (r) => i.count(0, r) % a === 0) : i)), i;
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
const $e = 1e3, Re = $e * 60, Oe = Re * 60, Ue = Oe * 24, Do = Ue * 7, ki = Ue * 30, Fn = Ue * 365, je = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds());
}, (e8, t) => {
  e8.setTime(+e8 + t * $e);
}, (e8, t) => (t - e8) / $e, (e8) => e8.getUTCSeconds());
je.range;
const Ro = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * $e);
}, (e8, t) => {
  e8.setTime(+e8 + t * Re);
}, (e8, t) => (t - e8) / Re, (e8) => e8.getMinutes());
Ro.range;
const Ao = se((e8) => {
  e8.setUTCSeconds(0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * Re);
}, (e8, t) => (t - e8) / Re, (e8) => e8.getUTCMinutes());
Ao.range;
const Eo = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * $e - e8.getMinutes() * Re);
}, (e8, t) => {
  e8.setTime(+e8 + t * Oe);
}, (e8, t) => (t - e8) / Oe, (e8) => e8.getHours());
Eo.range;
const Po = se((e8) => {
  e8.setUTCMinutes(0, 0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * Oe);
}, (e8, t) => (t - e8) / Oe, (e8) => e8.getUTCHours());
Po.range;
const Ut = se((e8) => e8.setHours(0, 0, 0, 0), (e8, t) => e8.setDate(e8.getDate() + t), (e8, t) => (t - e8 - (t.getTimezoneOffset() - e8.getTimezoneOffset()) * Re) / Ue, (e8) => e8.getDate() - 1);
Ut.range;
const Tn = se((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / Ue, (e8) => e8.getUTCDate() - 1);
Tn.range;
const Wa = se((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / Ue, (e8) => Math.floor(e8 / Ue));
Wa.range;
function ot(e8) {
  return se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e8) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Re) / Do);
}
const Cn = ot(0), on = ot(1), Tc = ot(2), Cc = ot(3), gt = ot(4), Mc = ot(5), Dc = ot(6);
Cn.range;
on.range;
Tc.range;
Cc.range;
gt.range;
Mc.range;
Dc.range;
function it(e8) {
  return se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e8) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Do);
}
const Mn = it(0), an = it(1), Rc = it(2), Ac = it(3), vt = it(4), Ec = it(5), Pc = it(6);
Mn.range;
an.range;
Rc.range;
Ac.range;
vt.range;
Ec.range;
Pc.range;
const No = se((e8) => {
  e8.setDate(1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setMonth(e8.getMonth() + t);
}, (e8, t) => t.getMonth() - e8.getMonth() + (t.getFullYear() - e8.getFullYear()) * 12, (e8) => e8.getMonth());
No.range;
const Lo = se((e8) => {
  e8.setUTCDate(1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCMonth(e8.getUTCMonth() + t);
}, (e8, t) => t.getUTCMonth() - e8.getUTCMonth() + (t.getUTCFullYear() - e8.getUTCFullYear()) * 12, (e8) => e8.getUTCMonth());
Lo.range;
const He = se((e8) => {
  e8.setMonth(0, 1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setFullYear(e8.getFullYear() + t);
}, (e8, t) => t.getFullYear() - e8.getFullYear(), (e8) => e8.getFullYear());
He.every = (e8) => !isFinite(e8 = Math.floor(e8)) || !(e8 > 0) ? null : se((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e8) * e8), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e8);
});
He.range;
const Fe = se((e8) => {
  e8.setUTCMonth(0, 1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCFullYear(e8.getUTCFullYear() + t);
}, (e8, t) => t.getUTCFullYear() - e8.getUTCFullYear(), (e8) => e8.getUTCFullYear());
Fe.every = (e8) => !isFinite(e8 = Math.floor(e8)) || !(e8 > 0) ? null : se((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e8) * e8), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e8);
});
Fe.range;
function qa(e8, t, n, o, i, a) {
  const r = [[je, 1, $e], [je, 5, 5 * $e], [je, 15, 15 * $e], [je, 30, 30 * $e], [a, 1, Re], [a, 5, 5 * Re], [a, 15, 15 * Re], [a, 30, 30 * Re], [i, 1, Oe], [i, 3, 3 * Oe], [i, 6, 6 * Oe], [i, 12, 12 * Oe], [o, 1, Ue], [o, 2, 2 * Ue], [n, 1, Do], [t, 1, ki], [t, 3, 3 * ki], [e8, 1, Fn]];
  function s(u, h, c) {
    const d = h < u;
    d && ([u, h] = [h, u]);
    const f = c && typeof c.range == "function" ? c : l(u, h, c), m = f ? f.range(u, +h + 1) : [];
    return d ? m.reverse() : m;
  }
  function l(u, h, c) {
    const d = Math.abs(h - u) / c, f = go(([, , b]) => b).right(r, d);
    if (f === r.length) return e8.every(Jn(u / Fn, h / Fn, c));
    if (f === 0) return nn.every(Math.max(Jn(u, h, c), 1));
    const [m, g] = r[d / r[f - 1][2] < r[f][2] / d ? f - 1 : f];
    return m.every(g);
  }
  return [s, l];
}
const [Nc, Lc] = qa(Fe, Lo, Mn, Wa, Po, Ao), [Bc, $c] = qa(He, No, Cn, Ut, Eo, Ro);
function Vn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
    return t.setFullYear(e8.y), t;
  }
  return new Date(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
}
function Yn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(Date.UTC(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
    return t.setUTCFullYear(e8.y), t;
  }
  return new Date(Date.UTC(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
}
function kt(e8, t, n) {
  return { y: e8, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Oc(e8) {
  var t = e8.dateTime, n = e8.date, o = e8.time, i = e8.periods, a = e8.days, r = e8.shortDays, s = e8.months, l = e8.shortMonths, u = Tt(i), h = Ct(i), c = Tt(a), d = Ct(a), f = Tt(r), m = Ct(r), g = Tt(s), b = Ct(s), v = Tt(l), _ = Ct(l), y = { a: Ce, A: ge, b: he, B: bt, c: null, d: Ai, e: Ai, f: rd, g: gd, G: _d, H: od, I: id, j: ad, L: ja, m: sd, M: ld, p: at, q: le, Q: Ni, s: Li, S: ud, u: cd, U: dd, V: hd, w: fd, W: pd, x: null, X: null, y: md, Y: vd, Z: yd, "%": Pi }, k = { a: be, A: Me, b: rt, B: Ft, c: null, d: Ei, e: Ei, f: Sd, g: Nd, G: Bd, H: bd, I: xd, j: wd, L: Xa, m: kd, M: Td, p: N, q: F, Q: Ni, s: Li, S: Cd, u: Md, U: Dd, V: Rd, w: Ad, W: Ed, x: null, X: null, y: Pd, Y: Ld, Z: $d, "%": Pi }, M = { a: ee, A: D, b: P, B: Y, c: X, d: Di, e: Di, f: Jc, g: Mi, G: Ci, H: Ri, I: Ri, j: jc, L: Qc, m: qc, M: Zc, p: H, q: Wc, Q: td, s: nd, S: Xc, u: Vc, U: Yc, V: Gc, w: Fc, W: zc, x: Q, X: Te, y: Mi, Y: Ci, Z: Kc, "%": ed };
  y.x = C(n, y), y.X = C(o, y), y.c = C(t, y), k.x = C(n, k), k.X = C(o, k), k.c = C(t, k);
  function C(x, L) {
    return function(U) {
      var S = [], oe = -1, Z = 0, xe = x.length, we, We, Yo;
      for (U instanceof Date || (U = /* @__PURE__ */ new Date(+U)); ++oe < xe; ) x.charCodeAt(oe) === 37 && (S.push(x.slice(Z, oe)), (We = Ti[we = x.charAt(++oe)]) != null ? we = x.charAt(++oe) : We = we === "e" ? " " : "0", (Yo = L[we]) && (we = Yo(U, We)), S.push(we), Z = oe + 1);
      return S.push(x.slice(Z, oe)), S.join("");
    };
  }
  function E(x, L) {
    return function(U) {
      var S = kt(1900, void 0, 1), oe = K(S, x, U += "", 0), Z, xe;
      if (oe != U.length) return null;
      if ("Q" in S) return new Date(S.Q);
      if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
      if (L && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
        if (S.V < 1 || S.V > 53) return null;
        "w" in S || (S.w = 1), "Z" in S ? (Z = Yn(kt(S.y, 0, 1)), xe = Z.getUTCDay(), Z = xe > 4 || xe === 0 ? an.ceil(Z) : an(Z), Z = Tn.offset(Z, (S.V - 1) * 7), S.y = Z.getUTCFullYear(), S.m = Z.getUTCMonth(), S.d = Z.getUTCDate() + (S.w + 6) % 7) : (Z = Vn(kt(S.y, 0, 1)), xe = Z.getDay(), Z = xe > 4 || xe === 0 ? on.ceil(Z) : on(Z), Z = Ut.offset(Z, (S.V - 1) * 7), S.y = Z.getFullYear(), S.m = Z.getMonth(), S.d = Z.getDate() + (S.w + 6) % 7);
      } else ("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), xe = "Z" in S ? Yn(kt(S.y, 0, 1)).getUTCDay() : Vn(kt(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (xe + 5) % 7 : S.w + S.U * 7 - (xe + 6) % 7);
      return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, Yn(S)) : Vn(S);
    };
  }
  function K(x, L, U, S) {
    for (var oe = 0, Z = L.length, xe = U.length, we, We; oe < Z; ) {
      if (S >= xe) return -1;
      if (we = L.charCodeAt(oe++), we === 37) {
        if (we = L.charAt(oe++), We = M[we in Ti ? L.charAt(oe++) : we], !We || (S = We(x, U, S)) < 0) return -1;
      } else if (we != U.charCodeAt(S++)) return -1;
    }
    return S;
  }
  function H(x, L, U) {
    var S = u.exec(L.slice(U));
    return S ? (x.p = h.get(S[0].toLowerCase()), U + S[0].length) : -1;
  }
  function ee(x, L, U) {
    var S = f.exec(L.slice(U));
    return S ? (x.w = m.get(S[0].toLowerCase()), U + S[0].length) : -1;
  }
  function D(x, L, U) {
    var S = c.exec(L.slice(U));
    return S ? (x.w = d.get(S[0].toLowerCase()), U + S[0].length) : -1;
  }
  function P(x, L, U) {
    var S = v.exec(L.slice(U));
    return S ? (x.m = _.get(S[0].toLowerCase()), U + S[0].length) : -1;
  }
  function Y(x, L, U) {
    var S = g.exec(L.slice(U));
    return S ? (x.m = b.get(S[0].toLowerCase()), U + S[0].length) : -1;
  }
  function X(x, L, U) {
    return K(x, t, L, U);
  }
  function Q(x, L, U) {
    return K(x, n, L, U);
  }
  function Te(x, L, U) {
    return K(x, o, L, U);
  }
  function Ce(x) {
    return r[x.getDay()];
  }
  function ge(x) {
    return a[x.getDay()];
  }
  function he(x) {
    return l[x.getMonth()];
  }
  function bt(x) {
    return s[x.getMonth()];
  }
  function at(x) {
    return i[+(x.getHours() >= 12)];
  }
  function le(x) {
    return 1 + ~~(x.getMonth() / 3);
  }
  function be(x) {
    return r[x.getUTCDay()];
  }
  function Me(x) {
    return a[x.getUTCDay()];
  }
  function rt(x) {
    return l[x.getUTCMonth()];
  }
  function Ft(x) {
    return s[x.getUTCMonth()];
  }
  function N(x) {
    return i[+(x.getUTCHours() >= 12)];
  }
  function F(x) {
    return 1 + ~~(x.getUTCMonth() / 3);
  }
  return { format: function(x) {
    var L = C(x += "", y);
    return L.toString = function() {
      return x;
    }, L;
  }, parse: function(x) {
    var L = E(x += "", false);
    return L.toString = function() {
      return x;
    }, L;
  }, utcFormat: function(x) {
    var L = C(x += "", k);
    return L.toString = function() {
      return x;
    }, L;
  }, utcParse: function(x) {
    var L = E(x += "", true);
    return L.toString = function() {
      return x;
    }, L;
  } };
}
var Ti = { "-": "", _: " ", 0: "0" }, de = /^\s*\d+/, Ic = /^%/, Uc = /[\\^$*+?|[\]().{}]/g;
function W(e8, t, n) {
  var o = e8 < 0 ? "-" : "", i = (o ? -e8 : e8) + "", a = i.length;
  return o + (a < n ? new Array(n - a + 1).join(t) + i : i);
}
function Hc(e8) {
  return e8.replace(Uc, "\\$&");
}
function Tt(e8) {
  return new RegExp("^(?:" + e8.map(Hc).join("|") + ")", "i");
}
function Ct(e8) {
  return new Map(e8.map((t, n) => [t.toLowerCase(), n]));
}
function Fc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 1));
  return o ? (e8.w = +o[0], n + o[0].length) : -1;
}
function Vc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 1));
  return o ? (e8.u = +o[0], n + o[0].length) : -1;
}
function Yc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.U = +o[0], n + o[0].length) : -1;
}
function Gc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.V = +o[0], n + o[0].length) : -1;
}
function zc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.W = +o[0], n + o[0].length) : -1;
}
function Ci(e8, t, n) {
  var o = de.exec(t.slice(n, n + 4));
  return o ? (e8.y = +o[0], n + o[0].length) : -1;
}
function Mi(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), n + o[0].length) : -1;
}
function Kc(e8, t, n) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return o ? (e8.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), n + o[0].length) : -1;
}
function Wc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 1));
  return o ? (e8.q = o[0] * 3 - 3, n + o[0].length) : -1;
}
function qc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.m = o[0] - 1, n + o[0].length) : -1;
}
function Di(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.d = +o[0], n + o[0].length) : -1;
}
function jc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 3));
  return o ? (e8.m = 0, e8.d = +o[0], n + o[0].length) : -1;
}
function Ri(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.H = +o[0], n + o[0].length) : -1;
}
function Zc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.M = +o[0], n + o[0].length) : -1;
}
function Xc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 2));
  return o ? (e8.S = +o[0], n + o[0].length) : -1;
}
function Qc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 3));
  return o ? (e8.L = +o[0], n + o[0].length) : -1;
}
function Jc(e8, t, n) {
  var o = de.exec(t.slice(n, n + 6));
  return o ? (e8.L = Math.floor(o[0] / 1e3), n + o[0].length) : -1;
}
function ed(e8, t, n) {
  var o = Ic.exec(t.slice(n, n + 1));
  return o ? n + o[0].length : -1;
}
function td(e8, t, n) {
  var o = de.exec(t.slice(n));
  return o ? (e8.Q = +o[0], n + o[0].length) : -1;
}
function nd(e8, t, n) {
  var o = de.exec(t.slice(n));
  return o ? (e8.s = +o[0], n + o[0].length) : -1;
}
function Ai(e8, t) {
  return W(e8.getDate(), t, 2);
}
function od(e8, t) {
  return W(e8.getHours(), t, 2);
}
function id(e8, t) {
  return W(e8.getHours() % 12 || 12, t, 2);
}
function ad(e8, t) {
  return W(1 + Ut.count(He(e8), e8), t, 3);
}
function ja(e8, t) {
  return W(e8.getMilliseconds(), t, 3);
}
function rd(e8, t) {
  return ja(e8, t) + "000";
}
function sd(e8, t) {
  return W(e8.getMonth() + 1, t, 2);
}
function ld(e8, t) {
  return W(e8.getMinutes(), t, 2);
}
function ud(e8, t) {
  return W(e8.getSeconds(), t, 2);
}
function cd(e8) {
  var t = e8.getDay();
  return t === 0 ? 7 : t;
}
function dd(e8, t) {
  return W(Cn.count(He(e8) - 1, e8), t, 2);
}
function Za(e8) {
  var t = e8.getDay();
  return t >= 4 || t === 0 ? gt(e8) : gt.ceil(e8);
}
function hd(e8, t) {
  return e8 = Za(e8), W(gt.count(He(e8), e8) + (He(e8).getDay() === 4), t, 2);
}
function fd(e8) {
  return e8.getDay();
}
function pd(e8, t) {
  return W(on.count(He(e8) - 1, e8), t, 2);
}
function md(e8, t) {
  return W(e8.getFullYear() % 100, t, 2);
}
function gd(e8, t) {
  return e8 = Za(e8), W(e8.getFullYear() % 100, t, 2);
}
function vd(e8, t) {
  return W(e8.getFullYear() % 1e4, t, 4);
}
function _d(e8, t) {
  var n = e8.getDay();
  return e8 = n >= 4 || n === 0 ? gt(e8) : gt.ceil(e8), W(e8.getFullYear() % 1e4, t, 4);
}
function yd(e8) {
  var t = e8.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + W(t / 60 | 0, "0", 2) + W(t % 60, "0", 2);
}
function Ei(e8, t) {
  return W(e8.getUTCDate(), t, 2);
}
function bd(e8, t) {
  return W(e8.getUTCHours(), t, 2);
}
function xd(e8, t) {
  return W(e8.getUTCHours() % 12 || 12, t, 2);
}
function wd(e8, t) {
  return W(1 + Tn.count(Fe(e8), e8), t, 3);
}
function Xa(e8, t) {
  return W(e8.getUTCMilliseconds(), t, 3);
}
function Sd(e8, t) {
  return Xa(e8, t) + "000";
}
function kd(e8, t) {
  return W(e8.getUTCMonth() + 1, t, 2);
}
function Td(e8, t) {
  return W(e8.getUTCMinutes(), t, 2);
}
function Cd(e8, t) {
  return W(e8.getUTCSeconds(), t, 2);
}
function Md(e8) {
  var t = e8.getUTCDay();
  return t === 0 ? 7 : t;
}
function Dd(e8, t) {
  return W(Mn.count(Fe(e8) - 1, e8), t, 2);
}
function Qa(e8) {
  var t = e8.getUTCDay();
  return t >= 4 || t === 0 ? vt(e8) : vt.ceil(e8);
}
function Rd(e8, t) {
  return e8 = Qa(e8), W(vt.count(Fe(e8), e8) + (Fe(e8).getUTCDay() === 4), t, 2);
}
function Ad(e8) {
  return e8.getUTCDay();
}
function Ed(e8, t) {
  return W(an.count(Fe(e8) - 1, e8), t, 2);
}
function Pd(e8, t) {
  return W(e8.getUTCFullYear() % 100, t, 2);
}
function Nd(e8, t) {
  return e8 = Qa(e8), W(e8.getUTCFullYear() % 100, t, 2);
}
function Ld(e8, t) {
  return W(e8.getUTCFullYear() % 1e4, t, 4);
}
function Bd(e8, t) {
  var n = e8.getUTCDay();
  return e8 = n >= 4 || n === 0 ? vt(e8) : vt.ceil(e8), W(e8.getUTCFullYear() % 1e4, t, 4);
}
function $d() {
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
var lt, Ja, er;
Od({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function Od(e8) {
  return lt = Oc(e8), Ja = lt.format, lt.parse, er = lt.utcFormat, lt.utcParse, lt;
}
function Id(e8) {
  return new Date(e8);
}
function Ud(e8) {
  return e8 instanceof Date ? +e8 : +/* @__PURE__ */ new Date(+e8);
}
function Bo(e8, t, n, o, i, a, r, s, l, u) {
  var h = $a(), c = h.invert, d = h.domain, f = u(".%L"), m = u(":%S"), g = u("%I:%M"), b = u("%I %p"), v = u("%a %d"), _ = u("%b %d"), y = u("%B"), k = u("%Y");
  function M(C) {
    return (l(C) < C ? f : s(C) < C ? m : r(C) < C ? g : a(C) < C ? b : o(C) < C ? i(C) < C ? v : _ : n(C) < C ? y : k)(C);
  }
  return h.invert = function(C) {
    return new Date(c(C));
  }, h.domain = function(C) {
    return arguments.length ? d(Array.from(C, Ud)) : d().map(Id);
  }, h.ticks = function(C) {
    var E = d();
    return e8(E[0], E[E.length - 1], C ?? 10);
  }, h.tickFormat = function(C, E) {
    return E == null ? M : u(E);
  }, h.nice = function(C) {
    var E = d();
    return (!C || typeof C.range != "function") && (C = t(E[0], E[E.length - 1], C ?? 10)), C ? d(Fa(E, C)) : h;
  }, h.copy = function() {
    return It(h, Bo(e8, t, n, o, i, a, r, s, l, u));
  }, h;
}
function Hd() {
  return Pe.apply(Bo(Bc, $c, He, No, Cn, Ut, Eo, Ro, je, Ja).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Fd() {
  return Pe.apply(Bo(Nc, Lc, Fe, Lo, Mn, Tn, Po, Ao, je, er).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Vd() {
  var e8 = 0, t = 1, n, o, i, a, r = _e, s = false, l;
  function u(c) {
    return c == null || isNaN(c = +c) ? l : r(i === 0 ? 0.5 : (c = (a(c) - n) * i, s ? Math.max(0, Math.min(1, c)) : c));
  }
  u.domain = function(c) {
    return arguments.length ? ([e8, t] = c, n = a(e8 = +e8), o = a(t = +t), i = n === o ? 0 : 1 / (o - n), u) : [e8, t];
  }, u.clamp = function(c) {
    return arguments.length ? (s = !!c, u) : s;
  }, u.interpolator = function(c) {
    return arguments.length ? (r = c, u) : r;
  };
  function h(c) {
    return function(d) {
      var f, m;
      return arguments.length ? ([f, m] = d, r = c(f, m), u) : [r(0), r(1)];
    };
  }
  return u.range = h(pn), u.rangeRound = h(wo), u.unknown = function(c) {
    return arguments.length ? (l = c, u) : l;
  }, function(c) {
    return a = c, n = c(e8), o = c(t), i = n === o ? 0 : 1 / (o - n), u;
  };
}
function tr(e8, t) {
  return t.domain(e8.domain()).interpolator(e8.interpolator()).clamp(e8.clamp()).unknown(e8.unknown());
}
function nr() {
  var e8 = nt(Vd()(_e));
  return e8.copy = function() {
    return tr(e8, nr());
  }, La.apply(e8, arguments);
}
function Yd() {
  var e8 = 0, t = 0.5, n = 1, o = 1, i, a, r, s, l, u = _e, h, c = false, d;
  function f(g) {
    return isNaN(g = +g) ? d : (g = 0.5 + ((g = +h(g)) - a) * (o * g < o * a ? s : l), u(c ? Math.max(0, Math.min(1, g)) : g));
  }
  f.domain = function(g) {
    return arguments.length ? ([e8, t, n] = g, i = h(e8 = +e8), a = h(t = +t), r = h(n = +n), s = i === a ? 0 : 0.5 / (a - i), l = a === r ? 0 : 0.5 / (r - a), o = a < i ? -1 : 1, f) : [e8, t, n];
  }, f.clamp = function(g) {
    return arguments.length ? (c = !!g, f) : c;
  }, f.interpolator = function(g) {
    return arguments.length ? (u = g, f) : u;
  };
  function m(g) {
    return function(b) {
      var v, _, y;
      return arguments.length ? ([v, _, y] = b, u = Zu(g, [v, _, y]), f) : [u(0), u(0.5), u(1)];
    };
  }
  return f.range = m(pn), f.rangeRound = m(wo), f.unknown = function(g) {
    return arguments.length ? (d = g, f) : d;
  }, function(g) {
    return h = g, i = g(e8), a = g(t), r = g(n), s = i === a ? 0 : 0.5 / (a - i), l = a === r ? 0 : 0.5 / (r - a), o = a < i ? -1 : 1, f;
  };
}
function or() {
  var e8 = nt(Yd()(_e));
  return e8.copy = function() {
    return tr(e8, or());
  }, La.apply(e8, arguments);
}
const Bi = { scaleLinear: Ua, scalePow: Mo, scaleSqrt: kc, scaleLog: Va, scaleSymlog: Ya, scaleIdentity: Ha, scaleTime: Hd, scaleUtc: Fd, scaleSequential: nr, scaleDiverging: or, scaleQuantize: za, scaleQuantile: Ga, scaleThreshold: Ka, scaleOrdinal: So, scaleBand: ko, scalePoint: Xu };
var te;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(te || (te = {}));
var Qe;
(function(e8) {
  e8.West = "west", e8.East = "east", e8.North = "north", e8.South = "south";
})(Qe || (Qe = {}));
const Gd = Object.assign(Object.assign({}, ks), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: true, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: Qe.North, preventEmptyDomain: null, scaleByDomain: false });
class zd extends Ts {
  constructor(t, n, o) {
    var i, a;
    super(t), this._defaultConfig = Gd, this.datamodel = new Cs(), this.config = this._defaultConfig, this._clipPathId = Ms(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = true, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
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
    return ut(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    const t = this._getMargin();
    return ut(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var o, i, a, r;
    const { components: s, config: l } = this;
    t && (this.datamodel.data = t, s.forEach((u) => {
      u.setData(t);
    }), (o = l.crosshair) === null || o === void 0 || o.setData(t), (i = l.xAxis) === null || i === void 0 || i.setData(t), (a = l.yAxis) === null || a === void 0 || a.setData(t), (r = l.tooltip) === null || r === void 0 || r.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, true), t.xAxis && (this.config.xAxis.config.type = q.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = q.Y, this.element.appendChild(t.yAxis.element));
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
    const n = wt([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]);
    for (const o of n) o.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, o, i, a, r;
    const { config: s } = this;
    super._render();
    const l = this._getMargin();
    for (const c of this.components) c.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", c.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", c.clippable ? `url(#${this._clipPathId})` : null), c.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const u = 2;
    this._clipPath.select("rect").attr("x", -2).attr("y", -2).attr("width", this.width + 2 * u).attr("height", this.height + 2 * u), (n = s.tooltip) === null || n === void 0 || n.update();
    const h = s.crosshair;
    if (h) {
      const c = this.components.filter((g) => !g.stacked).map((g) => g.config.y), d = this.components.filter((g) => g.stacked).map((g) => g.config.y), f = (o = this.components.find((g) => g.config.baseline)) === null || o === void 0 ? void 0 : o.config, m = f == null ? void 0 : f.baseline;
      h.accessors = { x: (i = this.components[0]) === null || i === void 0 ? void 0 : i.config.x, y: Wo(c), yStacked: Wo(d), baseline: m }, h.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), h.hide();
    }
    (a = s.annotations) === null || a === void 0 || a.g.attr("transform", `translate(${l.left},${l.top})`), (r = s.annotations) === null || r === void 0 || r.render(), this._firstRender = false;
  }
  _updateScales(...t) {
    const n = wt(t || this.components);
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
      var a, r, s, l, u, h, c, d;
      const [f, m] = Uu(qu(o.map((M) => M.getDataExtent(i, n.scaleByDomain)))), g = i === te.Y ? n.yDomain : n.xDomain, b = i === te.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, v = i === te.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, _ = (r = (a = g == null ? void 0 : g[0]) !== null && a !== void 0 ? a : f) !== null && r !== void 0 ? r : 0, y = (l = (s = g == null ? void 0 : g[1]) !== null && s !== void 0 ? s : m) !== null && l !== void 0 ? l : 1, k = [ut(_, (u = b == null ? void 0 : b[0]) !== null && u !== void 0 ? u : Number.NEGATIVE_INFINITY, (h = b == null ? void 0 : b[1]) !== null && h !== void 0 ? h : Number.POSITIVE_INFINITY), ut(y, (c = v == null ? void 0 : v[0]) !== null && c !== void 0 ? c : Number.NEGATIVE_INFINITY, (d = v == null ? void 0 : v[1]) !== null && d !== void 0 ? d : Number.POSITIVE_INFINITY)];
      if (k[0] === k[1]) {
        const M = o.some((C) => {
          var E;
          return ((E = C.datamodel.data) === null || E === void 0 ? void 0 : E.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!M || i === te.Y)) && (k[1] = k[0] + 1);
      }
      t.forEach((M) => M.setScaleDomain(i, k));
    });
  }
  _updateScalesRange(...t) {
    var n, o, i, a, r, s;
    const { config: l } = this;
    if (!t) return;
    const u = l.yDirection === Qe.South, h = [(n = l.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((o = l.padding.right) !== null && o !== void 0 ? o : 0)], c = [this.height - ((i = l.padding.bottom) !== null && i !== void 0 ? i : 0), (a = l.padding.top) !== null && a !== void 0 ? a : 0];
    u && c.reverse();
    for (const f of t) f.setSize(this.width, this.height, this.containerWidth, this.containerHeight), f.setScaleRange(te.X, (r = l.xRange) !== null && r !== void 0 ? r : h), f.setScaleRange(te.Y, (s = l.yRange) !== null && s !== void 0 ? s : c);
    const d = t.map((f) => f.bleed).reduce((f, m) => {
      for (const g of Object.keys(f)) {
        const b = g;
        f[b] < m[b] && (f[b] = m[b]);
      }
      return f;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const f of t) f.setScaleRange(te.X, [h[0] + d.left, h[1] - d.right]), f.setScaleRange(te.Y, u ? [c[0] + d.top, c[1] - d.bottom] : [c[0] - d.bottom, c[1] + d.top]);
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: o } } = this, i = this._getMargin();
    wt([n, o]).forEach((r) => {
      const s = r.getOffset(i);
      r.g.attr("transform", `translate(${s.left},${s.top})`), r.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, o = wt([...this.components, t, n]);
    this._setScales(...o), this._updateScalesDomain(...o);
    const i = this._firstRender ? 2 : 1;
    for (let a = 0; a < i; a += 1) {
      const r = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...o), wt([t, n]).forEach((l) => {
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
const Ht = Object.assign(Object.assign({}, Ds), { x: void 0, y: void 0, id: (e8, t) => {
  var n;
  return (n = e8.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e8) => e8.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: false });
class Dn extends Rs {
  constructor() {
    super(...arguments), this.datamodel = new As(), this.clippable = true, this.stacked = false, this._defaultConfig = Ht, this._xScale = Bi.scaleLinear(), this._yScale = Bi.scaleLinear();
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
        return On(i.data, o[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return On(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: o } = this, i = t ? ca(o.data, this.xScale.domain(), n.x) : o.data, a = Bt(n.y) ? n.y : [n.y];
    return On(i, ...a);
  }
}
function ir(e8) {
  this._context = e8;
}
ir.prototype = { areaStart: function() {
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
function $o(e8) {
  return new ir(e8);
}
function ar(e8) {
  return e8[0];
}
function rr(e8) {
  return e8[1];
}
function sr() {
  var e8 = ar, t = rr, n = Se(true), o = null, i = $o, a = null;
  function r(s) {
    var l, u = s.length, h, c = false, d;
    for (o == null && (a = i(d = da())), l = 0; l <= u; ++l) !(l < u && n(h = s[l], l, s)) === c && ((c = !c) ? a.lineStart() : a.lineEnd()), c && a.point(+e8(h, l, s), +t(h, l, s));
    if (d) return a = null, d + "" || null;
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
function Kd() {
  var e8 = ar, t = null, n = Se(0), o = rr, i = Se(true), a = null, r = $o, s = null;
  function l(h) {
    var c, d, f, m = h.length, g, b = false, v, _ = new Array(m), y = new Array(m);
    for (a == null && (s = r(v = da())), c = 0; c <= m; ++c) {
      if (!(c < m && i(g = h[c], c, h)) === b) if (b = !b) d = c, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), f = c - 1; f >= d; --f) s.point(_[f], y[f]);
        s.lineEnd(), s.areaEnd();
      }
      b && (_[c] = +e8(g, c, h), y[c] = +n(g, c, h), s.point(t ? +t(g, c, h) : _[c], o ? +o(g, c, h) : y[c]));
    }
    if (v) return s = null, v + "" || null;
  }
  function u() {
    return sr().defined(i).curve(r).context(a);
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
function Rn(e8) {
  this._context = e8;
}
Rn.prototype = { areaStart: function() {
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
function Wd(e8) {
  return new Rn(e8);
}
function lr(e8) {
  this._context = e8;
}
lr.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
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
function qd(e8) {
  return new lr(e8);
}
function ur(e8) {
  this._context = e8;
}
ur.prototype = { areaStart: function() {
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
function jd(e8) {
  return new ur(e8);
}
function cr(e8, t) {
  this._basis = new Rn(e8), this._beta = t;
}
cr.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var e8 = this._x, t = this._y, n = e8.length - 1;
  if (n > 0) for (var o = e8[0], i = t[0], a = e8[n] - o, r = t[n] - i, s = -1, l; ++s <= n; ) l = s / n, this._basis.point(this._beta * e8[s] + (1 - this._beta) * (o + l * a), this._beta * t[s] + (1 - this._beta) * (i + l * r));
  this._x = this._y = null, this._basis.lineEnd();
}, point: function(e8, t) {
  this._x.push(+e8), this._y.push(+t);
} };
const Zd = function e(t) {
  function n(o) {
    return t === 1 ? new Rn(o) : new cr(o, t);
  }
  return n.beta = function(o) {
    return e(+o);
  }, n;
}(0.85);
function sn(e8, t, n) {
  e8._context.bezierCurveTo(e8._x1 + e8._k * (e8._x2 - e8._x0), e8._y1 + e8._k * (e8._y2 - e8._y0), e8._x2 + e8._k * (e8._x1 - t), e8._y2 + e8._k * (e8._y1 - n), e8._x2, e8._y2);
}
function Oo(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Oo.prototype = { areaStart: function() {
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
const Xd = function e2(t) {
  function n(o) {
    return new Oo(o, t);
  }
  return n.tension = function(o) {
    return e2(+o);
  }, n;
}(0);
function Io(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Io.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
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
const Qd = function e3(t) {
  function n(o) {
    return new Io(o, t);
  }
  return n.tension = function(o) {
    return e3(+o);
  }, n;
}(0);
function Uo(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Uo.prototype = { areaStart: function() {
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
const Jd = function e4(t) {
  function n(o) {
    return new Uo(o, t);
  }
  return n.tension = function(o) {
    return e4(+o);
  }, n;
}(0);
function Ho(e8, t, n) {
  var o = e8._x1, i = e8._y1, a = e8._x2, r = e8._y2;
  if (e8._l01_a > qo) {
    var s = 2 * e8._l01_2a + 3 * e8._l01_a * e8._l12_a + e8._l12_2a, l = 3 * e8._l01_a * (e8._l01_a + e8._l12_a);
    o = (o * s - e8._x0 * e8._l12_2a + e8._x2 * e8._l01_2a) / l, i = (i * s - e8._y0 * e8._l12_2a + e8._y2 * e8._l01_2a) / l;
  }
  if (e8._l23_a > qo) {
    var u = 2 * e8._l23_2a + 3 * e8._l23_a * e8._l12_a + e8._l12_2a, h = 3 * e8._l23_a * (e8._l23_a + e8._l12_a);
    a = (a * u + e8._x1 * e8._l23_2a - t * e8._l12_2a) / h, r = (r * u + e8._y1 * e8._l23_2a - n * e8._l12_2a) / h;
  }
  e8._context.bezierCurveTo(o, i, a, r, e8._x2, e8._y2);
}
function dr(e8, t) {
  this._context = e8, this._alpha = t;
}
dr.prototype = { areaStart: function() {
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
      Ho(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const eh = function e5(t) {
  function n(o) {
    return t ? new dr(o, t) : new Oo(o, 0);
  }
  return n.alpha = function(o) {
    return e5(+o);
  }, n;
}(0.5);
function hr(e8, t) {
  this._context = e8, this._alpha = t;
}
hr.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
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
      Ho(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const th = function e6(t) {
  function n(o) {
    return t ? new hr(o, t) : new Io(o, 0);
  }
  return n.alpha = function(o) {
    return e6(+o);
  }, n;
}(0.5);
function fr(e8, t) {
  this._context = e8, this._alpha = t;
}
fr.prototype = { areaStart: function() {
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
      Ho(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const nh = function e7(t) {
  function n(o) {
    return t ? new fr(o, t) : new Uo(o, 0);
  }
  return n.alpha = function(o) {
    return e7(+o);
  }, n;
}(0.5);
function pr(e8) {
  this._context = e8;
}
pr.prototype = { areaStart: Ye, areaEnd: Ye, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e8, t) {
  e8 = +e8, t = +t, this._point ? this._context.lineTo(e8, t) : (this._point = 1, this._context.moveTo(e8, t));
} };
function oh(e8) {
  return new pr(e8);
}
function $i(e8) {
  return e8 < 0 ? -1 : 1;
}
function Oi(e8, t, n) {
  var o = e8._x1 - e8._x0, i = t - e8._x1, a = (e8._y1 - e8._y0) / (o || i < 0 && -0), r = (n - e8._y1) / (i || o < 0 && -0), s = (a * i + r * o) / (o + i);
  return ($i(a) + $i(r)) * Math.min(Math.abs(a), Math.abs(r), 0.5 * Math.abs(s)) || 0;
}
function Ii(e8, t) {
  var n = e8._x1 - e8._x0;
  return n ? (3 * (e8._y1 - e8._y0) / n - t) / 2 : t;
}
function Gn(e8, t, n) {
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
      Gn(this, this._t0, Ii(this, this._t0));
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
        this._point = 3, Gn(this, Ii(this, n = Oi(this, e8, t)), n);
        break;
      default:
        Gn(this, this._t0, n = Oi(this, e8, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t, this._t0 = n;
  }
} };
function mr(e8) {
  this._context = new gr(e8);
}
(mr.prototype = Object.create(ln.prototype)).point = function(e8, t) {
  ln.prototype.point.call(this, t, e8);
};
function gr(e8) {
  this._context = e8;
}
gr.prototype = { moveTo: function(e8, t) {
  this._context.moveTo(t, e8);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e8, t) {
  this._context.lineTo(t, e8);
}, bezierCurveTo: function(e8, t, n, o, i, a) {
  this._context.bezierCurveTo(t, e8, o, n, a, i);
} };
function ih(e8) {
  return new ln(e8);
}
function ah(e8) {
  return new mr(e8);
}
function vr(e8) {
  this._context = e8;
}
vr.prototype = { areaStart: function() {
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
function rh(e8) {
  return new vr(e8);
}
function An(e8, t) {
  this._context = e8, this._t = t;
}
An.prototype = { areaStart: function() {
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
function sh(e8) {
  return new An(e8, 0.5);
}
function lh(e8) {
  return new An(e8, 0);
}
function uh(e8) {
  return new An(e8, 1);
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
function ch(e8) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hi(Object(n), true).forEach(function(o) {
      dh(e8, o, n[o]);
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
function dh(e8, t, n) {
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
function hh(e8, t) {
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
function _r(e8, t) {
  var n = typeof Symbol < "u" && e8[Symbol.iterator] || e8["@@iterator"];
  if (!n) {
    if (Array.isArray(e8) || (n = hh(e8)) || t) {
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
function fh(e8, t) {
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
function ph(e8) {
  var t = {};
  return e8.length === 4 && (t.x2 = e8[2][0], t.y2 = e8[2][1]), e8.length >= 3 && (t.x1 = e8[1][0], t.y1 = e8[1][1]), t.x = e8[e8.length - 1][0], t.y = e8[e8.length - 1][1], e8.length === 4 ? t.type = "C" : e8.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function mh(e8, t) {
  t = t || 2;
  for (var n = [], o = e8, i = 1 / t, a = 0; a < t - 1; a++) {
    var r = i / (1 - i * a), s = fh(o, r);
    n.push(s.left), o = s.right;
  }
  return n.push(o), n;
}
function gh(e8, t, n) {
  var o = [[e8.x, e8.y]];
  return t.x1 != null && o.push([t.x1, t.y1]), t.x2 != null && o.push([t.x2, t.y2]), o.push([t.x, t.y]), mh(o, n).map(ph);
}
var vh = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, dt = { M: ["x", "y"], L: ["x", "y"], H: ["x"], V: ["y"], C: ["x1", "y1", "x2", "y2", "x", "y"], S: ["x2", "y2", "x", "y"], Q: ["x1", "y1", "x", "y"], T: ["x", "y"], A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"], Z: [] };
Object.keys(dt).forEach(function(e8) {
  dt[e8.toLowerCase()] = dt[e8];
});
function no(e8, t) {
  for (var n = Array(e8), o = 0; o < e8; o++) n[o] = t;
  return n;
}
function _h(e8) {
  return "".concat(e8.type).concat(dt[e8.type].map(function(t) {
    return e8[t];
  }).join(","));
}
function yh(e8, t) {
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
function bh(e8, t, n) {
  var o = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C") o = o.concat(gh(e8, t, n));
  else {
    var i = un({}, e8);
    i.type === "M" && (i.type = "L"), o = o.concat(no(n - 1).map(function() {
      return i;
    })), o.push(t);
  }
  return o;
}
function Vi(e8, t, n) {
  var o = e8.length - 1, i = t.length - 1, a = o / i, r = no(i).reduce(function(l, u, h) {
    var c = Math.floor(a * h);
    if (n && c < e8.length - 1 && n(e8[c], e8[c + 1])) {
      var d = a * h % 1 < 0.5;
      l[c] && (d ? c > 0 ? c -= 1 : c < e8.length - 1 && (c += 1) : c < e8.length - 1 ? c += 1 : c > 0 && (c -= 1));
    }
    return l[c] = (l[c] || 0) + 1, l;
  }, []), s = r.reduce(function(l, u, h) {
    if (h === e8.length - 1) {
      var c = no(u, un({}, e8[e8.length - 1]));
      return c[0].type === "M" && c.forEach(function(d) {
        d.type = "L";
      }), l.concat(c);
    }
    return l.concat(bh(e8[h], e8[h + 1], u));
  }, []);
  return s.unshift(e8[0]), s;
}
function Yi(e8) {
  for (var t = (e8 || "").match(vh) || [], n = [], o, i, a = 0; a < t.length; ++a) if (o = dt[t[a]], o) {
    i = { type: t[a] };
    for (var r = 0; r < o.length; ++r) i[o[r]] = +t[a + r + 1];
    a += o.length, n.push(i);
  }
  return n;
}
function xh(e8, t, n) {
  var o = e8 == null ? [] : e8.slice(), i = t == null ? [] : t.slice(), a = Nt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, r = a.excludeSegment, s = a.snapEndsToInput;
  if (!o.length && !i.length) return function() {
    return [];
  };
  var l = (o.length === 0 || o[o.length - 1].type === "Z") && (i.length === 0 || i[i.length - 1].type === "Z");
  o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), o.length ? i.length || i.push(o[0]) : o.push(i[0]);
  var u = Math.abs(i.length - o.length);
  u !== 0 && (i.length > o.length ? o = Vi(o, i, r) : i.length < o.length && (i = Vi(i, o, r))), o = o.map(function(c, d) {
    return yh(c, i[d]);
  });
  var h = o.map(function(c) {
    return ch({}, c);
  });
  return l && (h.push({ type: "Z" }), o.push({ type: "Z" })), function(d) {
    if (d === 1 && s) return t ?? [];
    if (d === 0) return o;
    for (var f = 0; f < h.length; ++f) {
      var m = o[f], g = i[f], b = h[f], v = _r(dt[b.type]), _;
      try {
        for (v.s(); !(_ = v.n()).done; ) {
          var y = _.value;
          b[y] = (1 - d) * m[y] + d * g[y], (y === "largeArcFlag" || y === "sweepFlag") && (b[y] = Math.round(b[y]));
        }
      } catch (k) {
        v.e(k);
      } finally {
        v.f();
      }
    }
    return h;
  };
}
function yr(e8, t, n) {
  var o = Yi(e8), i = Yi(t), a = Nt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, r = a.excludeSegment, s = a.snapEndsToInput;
  if (!o.length && !i.length) return function() {
    return "";
  };
  var l = xh(o, i, { excludeSegment: r, snapEndsToInput: s });
  return function(h) {
    if (h === 1 && s) return t ?? "";
    var c = l(h), d = "", f = _r(c), m;
    try {
      for (f.s(); !(m = f.n()).done; ) {
        var g = m.value;
        d += _h(g);
      }
    } catch (b) {
      f.e(b);
    } finally {
      f.f();
    }
    return d;
  };
}
var J;
(function(e8) {
  e8.Basis = "basis", e8.BasisClosed = "basisClosed", e8.BasisOpen = "basisOpen", e8.Bundle = "bundle", e8.Cardinal = "cardinal", e8.CardinalClosed = "cardinalClosed", e8.CardinalOpen = "cardinalOpen", e8.CatmullRom = "catmullRom", e8.CatmullRomClosed = "catmullRomClosed", e8.CatmullRomOpen = "catmullRomOpen", e8.Linear = "linear", e8.LinearClosed = "linearClosed", e8.MonotoneX = "monotoneX", e8.MonotoneY = "monotoneY", e8.Natural = "natural", e8.Step = "step", e8.StepAfter = "stepAfter", e8.StepBefore = "stepBefore";
})(J || (J = {}));
const oo = { [J.Basis]: Wd, [J.BasisClosed]: qd, [J.BasisOpen]: jd, [J.Bundle]: Zd, [J.Cardinal]: Xd, [J.CardinalClosed]: Qd, [J.CardinalOpen]: Jd, [J.CatmullRom]: eh, [J.CatmullRomClosed]: th, [J.CatmullRomOpen]: nh, [J.Linear]: $o, [J.LinearClosed]: oh, [J.MonotoneX]: ih, [J.MonotoneY]: ah, [J.Natural]: rh, [J.Step]: sh, [J.StepAfter]: uh, [J.StepBefore]: lh }, wh = Object.assign(Object.assign({}, Ht), { curveType: J.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: false, cursor: null, interpolateMissingData: false }), Sh = mn`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, kh = ne`
  label: line-component;
`, Dt = ne`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, io = ne`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, ao = ne`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, ro = ne`
  opacity: 0.2;
`, so = ne`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, Th = Object.freeze(Object.defineProperty({ __proto__: null, dim: ro, globalStyles: Sh, interpolatedPath: so, line: Dt, linePath: io, lineSelectionHelper: ao, root: kh }, Symbol.toStringTag, { value: "Module" }));
class En extends Dn {
  constructor(t) {
    super(), this._defaultConfig = wh, this.config = this._defaultConfig, this.curve = oo[J.MonotoneX], this.events = { [En.selectors.line]: { mouseover: this._highlight.bind(this), mouseleave: this._resetHighlight.bind(this) } }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), i = (this.yScale.range()[0] > this.yScale.range()[1] ? Qe.North : Qe.South) === Qe.South, a = t > 3, r = t >= 10;
    return { top: !r && (!i && n[1] === 0 || i && n[0] === 0) ? 0 : t / 2, bottom: !r && (!i && n[0] === 0 || i && n[1] === 0) ? 0 : t / 2, left: a ? t / 2 : 0, right: a ? t / 2 : 0 };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: o } } = this, i = Xe(t) ? t : n.duration;
    this.curve = oo[n.curveType], this.lineGen = sr().x((c) => c.x).y((c) => c.y).defined((c) => c.defined).curve(this.curve);
    const a = Bt(n.y) ? n.y : [n.y], r = o.map((c, d) => this.xScale(Ne(c, n.x, d))), s = a.map((c) => {
      const d = o.map((v, _) => {
        const y = Ne(v, c, _), k = (Xe(y) || y === null) && isFinite(y) ? y : n.fallbackValue, M = n.interpolateMissingData ? (Xe(y) || y === null) && isFinite(y) : isFinite(k);
        return { x: r[_], y: this.yScale(k ?? 0), defined: M, value: k };
      }), f = d.reduce((v, _) => _.defined || v, false);
      let m = false;
      const g = d.reduce((v, _, y) => {
        !_.defined && isFinite(n.fallbackValue) && v.push(Object.assign(Object.assign({}, _), { defined: true })), !_.defined && !m && (m = true);
        const k = y > 0 && !d[y - 1].defined || y < d.length - 1 && !d[y + 1].defined;
        return _.defined && k && (m || v.push(Object.assign(Object.assign({}, _), { defined: false })), v.push(_), m = false), v;
      }, []), b = f && d.some((v) => v.value !== null);
      return { values: d, defined: f, gaps: g, visible: b };
    }), l = this.g.selectAll(`.${Dt}`).data(s), u = l.enter().append("g").attr("class", Dt);
    u.append("path").attr("class", io).attr("stroke", (c, d) => Be(o, n.color, d)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), u.append("path").attr("class", ao).attr("d", this._emptyPath()), u.append("path").attr("class", so).attr("d", this._emptyPath()).style("opacity", 0);
    const h = u.merge(l);
    h.style("cursor", (c, d) => ha(o, n.cursor, d)), h.each((c, d, f) => {
      var m;
      const g = Et(f[d]), b = g.select(`.${io}`), v = g.select(`.${ao}`), _ = g.select(`.${so}`), y = c.visible, k = Es(o, n.lineDashArray, d), M = De(b, i).attr("stroke", Be(o, n.color, d)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", y ? 1 : 0).style("stroke-dasharray", (m = k == null ? void 0 : k.join(" ")) !== null && m !== void 0 ? m : null), C = c.values.some((K) => !K.defined), E = this.lineGen(c.values);
      if (i && !C) {
        const K = b.attr("d") || this._emptyPath(), H = E || this._emptyPath();
        M.attrTween("d", () => yr(K, H));
      } else c.visible && M.attr("d", E);
      v.attr("d", E).attr("visibility", y ? null : "hidden"), C && n.interpolateMissingData ? De(_, i).attr("d", this.lineGen(c.gaps)).attr("stroke", Be(o, n.color, d)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : _.transition().duration(i).style("opacity", 0);
    }), De(l.exit(), i).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${Dt}`).classed(ro, (o) => o !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${Dt}`).classed(ro, false);
  }
}
En.selectors = Th;
function Ch(e8) {
  return e8;
}
var Wt = 1, qt = 2, lo = 3, Rt = 4, Gi = 1e-6;
function Mh(e8) {
  return "translate(" + e8 + ",0)";
}
function Dh(e8) {
  return "translate(0," + e8 + ")";
}
function Rh(e8) {
  return (t) => +e8(t);
}
function Ah(e8, t) {
  return t = Math.max(0, e8.bandwidth() - t * 2) / 2, e8.round() && (t = Math.round(t)), (n) => +e8(n) + t;
}
function Eh() {
  return !this.__axis;
}
function Pn(e8, t) {
  var n = [], o = null, i = null, a = 6, r = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = e8 === Wt || e8 === Rt ? -1 : 1, h = e8 === Rt || e8 === qt ? "x" : "y", c = e8 === Wt || e8 === lo ? Mh : Dh;
  function d(f) {
    var m = o ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), g = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Ch), b = Math.max(a, 0) + s, v = t.range(), _ = +v[0] + l, y = +v[v.length - 1] + l, k = (t.bandwidth ? Ah : Rh)(t.copy(), l), M = f.selection ? f.selection() : f, C = M.selectAll(".domain").data([null]), E = M.selectAll(".tick").data(m, t).order(), K = E.exit(), H = E.enter().append("g").attr("class", "tick"), ee = E.select("line"), D = E.select("text");
    C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(H), ee = ee.merge(H.append("line").attr("stroke", "currentColor").attr(h + "2", u * a)), D = D.merge(H.append("text").attr("fill", "currentColor").attr(h, u * b).attr("dy", e8 === Wt ? "0em" : e8 === lo ? "0.71em" : "0.32em")), f !== M && (C = C.transition(f), E = E.transition(f), ee = ee.transition(f), D = D.transition(f), K = K.transition(f).attr("opacity", Gi).attr("transform", function(P) {
      return isFinite(P = k(P)) ? c(P + l) : this.getAttribute("transform");
    }), H.attr("opacity", Gi).attr("transform", function(P) {
      var Y = this.parentNode.__axis;
      return c((Y && isFinite(Y = Y(P)) ? Y : k(P)) + l);
    })), K.remove(), C.attr("d", e8 === Rt || e8 === qt ? r ? "M" + u * r + "," + _ + "H" + l + "V" + y + "H" + u * r : "M" + l + "," + _ + "V" + y : r ? "M" + _ + "," + u * r + "V" + l + "H" + y + "V" + u * r : "M" + _ + "," + l + "H" + y), E.attr("opacity", 1).attr("transform", function(P) {
      return c(k(P) + l);
    }), ee.attr(h + "2", u * a), D.attr(h, u * b).text(g), M.filter(Eh).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e8 === qt ? "start" : e8 === Rt ? "end" : "middle"), M.each(function() {
      this.__axis = k;
    });
  }
  return d.scale = function(f) {
    return arguments.length ? (t = f, d) : t;
  }, d.ticks = function() {
    return n = Array.from(arguments), d;
  }, d.tickArguments = function(f) {
    return arguments.length ? (n = f == null ? [] : Array.from(f), d) : n.slice();
  }, d.tickValues = function(f) {
    return arguments.length ? (o = f == null ? null : Array.from(f), d) : o && o.slice();
  }, d.tickFormat = function(f) {
    return arguments.length ? (i = f, d) : i;
  }, d.tickSize = function(f) {
    return arguments.length ? (a = r = +f, d) : a;
  }, d.tickSizeInner = function(f) {
    return arguments.length ? (a = +f, d) : a;
  }, d.tickSizeOuter = function(f) {
    return arguments.length ? (r = +f, d) : r;
  }, d.tickPadding = function(f) {
    return arguments.length ? (s = +f, d) : s;
  }, d.offset = function(f) {
    return arguments.length ? (l = +f, d) : l;
  }, d;
}
function zi(e8) {
  return Pn(Wt, e8);
}
function Ki(e8) {
  return Pn(qt, e8);
}
function Wi(e8) {
  return Pn(lo, e8);
}
function qi(e8) {
  return Pn(Rt, e8);
}
const Ph = Object.assign(Object.assign({}, Ht), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: true, tickLine: true, domainLine: true, numTicks: void 0, minMaxTicksOnly: false, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: false, tickTextTrimType: Ps.Middle, tickTextFitMode: fa.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: true, tickPadding: 8, tickTextHideOverlapping: void 0 }), br = ne`
  label: axis-component;
`, Nh = mn`
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

  body.theme-dark ${`.${br}`} {
    --vis-axis-tick-color: var(--vis-dark-axis-tick-color);
    --vis-axis-domain-color: var(--vis-dark-axis-domain-color);
    --vis-axis-tick-label-color: var(--vis-dark-axis-tick-label-color);
    --vis-axis-grid-color: var(--vis-dark-axis-grid-color);
    --vis-axis-label-color: var(--vis-dark-axis-label-color);
  }
`, Fo = ne`
  label: hide-tick-line;
`, Vo = ne`
  label: hide-domain;
`, xr = ne`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${Fo}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Vo}`} {
    .domain {
      opacity: 0;
    }
  }
`, wr = ne`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
  }
`, Sr = ne`
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
`, uo = ne`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, kr = ne`
  label: tick-label;
`, Tr = ne`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, Lh = Object.freeze(Object.defineProperty({ __proto__: null, axis: xr, globalStyles: Nh, grid: wr, hideDomain: Vo, hideTickLine: Fo, label: uo, root: br, tick: Sr, tickLabel: kr, tickLabelHideable: Tr }, Symbol.toStringTag, { value: "Module" }));
class Cr extends Dn {
  constructor(t) {
    super(), this._defaultConfig = Ph, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", wr);
  }
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === q.X ? G.Bottom : G.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: o } } = this;
    switch (n) {
      case q.X: {
        const a = this._axisSizeBBox.x + this._axisSizeBBox.width, r = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, s = a - this._width > 1 ? a - this._width : 0;
        switch (o) {
          case G.Top:
            return { top: t.height, left: r, right: s };
          case G.Bottom:
          default:
            return { bottom: t.height, left: r, right: s };
        }
      }
      case q.Y: {
        const i = t.height > this._height ? (t.height - this._height) / 2 : 0, a = i, r = i;
        switch (o) {
          case G.Right:
            return { right: t.width, top: a, bottom: r };
          case G.Left:
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
      case q.X:
        switch (o) {
          case G.Top:
            return { top: t.top, left: t.left };
          case G.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case q.Y:
        switch (o) {
          case G.Right:
            return { top: t.top, left: t.left + this._width };
          case G.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: o } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), o.gridLine) {
      const i = this._buildGrid().tickFormat(() => "");
      i.tickValues(this._getConfiguredTickValues()), this.gridGroup.selectAll("*").interrupt(), De(this.gridGroup, t).call(i).style("opacity", 1);
    } else De(this.gridGroup, t).style("opacity", 0);
    o.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: o } } = this, i = this._getNumTicks();
    switch (t) {
      case q.X:
        switch (n) {
          case G.Top:
            return zi(this.xScale).ticks(i).tickPadding(o);
          case G.Bottom:
          default:
            return Wi(this.xScale).ticks(i).tickPadding(o);
        }
      case q.Y:
        switch (n) {
          case G.Right:
            return Ki(this.yScale).ticks(i).tickPadding(o);
          case G.Left:
          default:
            return qi(this.yScale).ticks(i).tickPadding(o);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, o = this._getNumTicks();
    switch (t) {
      case q.X:
        switch (n) {
          case G.Top:
            return zi(this.xScale).ticks(o * 2).tickSize(-this._height).tickSizeOuter(0);
          case G.Bottom:
          default:
            return Wi(this.xScale).ticks(o * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case q.Y:
        switch (n) {
          case G.Right:
            return Ki(this.yScale).ticks(o * 2).tickSize(-this._width).tickSizeOuter(0);
          case G.Left:
          default:
            return qi(this.yScale).ticks(o * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: o } = this, i = this._buildAxis(), a = this._getConfiguredTickValues() || i.scale().ticks(this._getNumTicks());
    i.tickValues(a), t.selectAll("*").interrupt(), De(t, n).call(i);
    const r = t.selectAll("g.tick");
    r.classed(Sr, true).style("font-size", o.tickTextFontSize);
    const s = t.selectAll("g.tick > text").filter((l) => a.some((u) => Ns(l, u))).classed(kr, true).classed(Tr, !!o.tickTextHideOverlapping).style("fill", o.tickTextColor);
    if (s.nodes().forEach((l) => Ls(l)), s.each((l, u, h) => {
      var c, d;
      let f = (d = (c = o.tickFormat) === null || c === void 0 ? void 0 : c.call(o, l, u, a)) !== null && d !== void 0 ? d : `${l}`;
      const m = h[u], g = o.tickTextWidth || (o.type === q.X ? this._containerWidth / (r.size() + 1) : this._containerWidth / 5), b = getComputedStyle(m), v = Number.parseFloat(b.fontSize), _ = b.fontFamily, y = { verticalAlign: o.type === q.X ? jo.Top : jo.Middle, width: g, textRotationAngle: o.tickTextAngle, separator: o.tickTextSeparator, wordBreak: o.tickTextForceWordBreak };
      if (o.tickTextFitMode === fa.Trim) {
        const M = Et(m).text(f);
        Bs(M, g, o.tickTextTrimType, true, v, 0.58), f = Et(m).text();
      }
      $s(m, { text: f, fontFamily: _, fontSize: v }, y);
    }), t.classed(xr, true).classed(Fo, !o.tickLine).classed(Vo, !o.domainLine), o.fullSize) {
      const l = this._getFullDomainPath(0);
      De(t.select(".domain"), n).attr("d", l);
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
        const c = r[h];
        if (c._visible) {
          const f = c.getBoundingClientRect();
          if (Os(u, f, -5)) {
            c._visible = false;
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
    if (t === q.X) {
      const o = this.xScale.range(), i = o[1] - o[0];
      return Math.floor(i / 175);
    }
    if (t === q.Y) {
      const o = this.yScale.range(), i = Math.abs(o[0] - o[1]);
      return Math.pow(i, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === q.X ? this.xScale : this.yScale, o = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((i) => i >= o[0] && i <= o[1]) : t.minMaxTicksOnly || t.type === q.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? o : null;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case q.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case q.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: o, label: i, labelMargin: a, labelFontSize: r } = this.config;
    t.selectAll(`.${uo}`).remove();
    const s = this.getPosition(), { width: l, height: u } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), h = o === q.X ? this._width / 2 : Math.pow(-1, +(s === G.Left)) * l, c = o === q.X ? Math.pow(-1, +(s === G.Top)) * u : this._height / 2, d = o === q.X ? 0 : Math.pow(-1, +(s === G.Left)) * a, f = o === q.X ? Math.pow(-1, +(s === G.Top)) * a : 0, m = o === q.Y ? -90 : 0;
    t.append("text").attr("class", uo).text(i).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${h + d},${c + f}) rotate(${m})`).style("font-size", r).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case q.X:
        switch (n) {
          case G.Top:
            return 0;
          case G.Bottom:
          default:
            return 0.75;
        }
      case q.Y:
        switch (n) {
          case G.Right:
            return 0.75;
          case G.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: o, position: i } } = this, a = this.g.selectAll("g.tick > text"), r = this._getTickTextAnchor(n), s = t === q.X ? 0 : this._getYTickTextTranslate(n, i), l = o ? `translate(${s},0) rotate(${o})` : `translate(${s},0)`;
    a.attr("transform", l).attr("text-anchor", r);
  }
  _getTickTextAnchor(t) {
    switch (t) {
      case st.Left:
        return "start";
      case st.Right:
        return "end";
      case st.Center:
        return "middle";
      default:
        return null;
    }
  }
  _getYTickTextTranslate(t, n = G.Left) {
    const i = this._axisRawBBox.width - 9;
    switch (t) {
      case st.Left:
        return n === G.Left ? i * -1 : 0;
      case st.Right:
        return n === G.Left ? 0 : i;
      case st.Center:
        return n === G.Left ? i * -0.5 : i * 0.5;
      default:
        return 0;
    }
  }
}
Cr.selectors = Lh;
const Bh = Object.assign(Object.assign({}, Ht), { yStacked: void 0, baseline: null, duration: 100, tooltip: void 0, template: (e8, t) => "", hideWhenFarFromPointer: true, hideWhenFarFromPointerDistance: 100, snapToData: true, getCircles: void 0, color: void 0, strokeColor: void 0, strokeWidth: void 0 }), $h = mn`
  :root {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`, Oh = ne`
  label: crosshair-component;
`, Mr = ne`
  stroke: var(--vis-crosshair-line-stroke-color);
  stroke-width: var(--vis-crosshair-line-stroke-width);
  stroke-opacity: var(--vis-crosshair-line-stroke-opacity);
  pointer-events: none;
`, Dr = ne`
  stroke: var(--vis-crosshair-circle-stroke-color);
  stroke-width: var(--vis-crosshair-circle-stroke-width);
  stroke-opacity: var(--vis-crosshair-circle-stroke-opacity);
  pointer-events: none;
`, Ih = Object.freeze(Object.defineProperty({ __proto__: null, circle: Dr, globalStyles: $h, line: Mr, root: Oh }, Symbol.toStringTag, { value: "Module" }));
class Rr extends Dn {
  constructor(t) {
    super(), this.clippable = true, this._defaultConfig = Bh, this.config = this._defaultConfig, this.x = 0, this.show = false, this._animFrameId = null, this._accessors = { x: void 0, y: void 0, yStacked: void 0, baseline: void 0 }, t && this.setConfig(t), this.g.style("opacity", this.show ? 1 : 0), this.line = this.g.append("line").attr("class", Mr);
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
    const o = Xe(t) ? t : n.duration;
    De(this.g, o).style("opacity", this.show ? 1 : 0), this.line.attr("y1", 0).attr("y1", this._height), De(this.line, o, ci).attr("x1", this.x).attr("x2", this.x);
    const i = this.getCircleData(), a = this.g.selectAll("circle").data(i, (s, l) => {
      var u;
      return (u = s.id) !== null && u !== void 0 ? u : l;
    }), r = a.enter().append("circle").attr("class", Dr).attr("r", 0).attr("cx", this.x).attr("cy", (s) => s.y).style("fill", (s) => s.color).style("stroke", (s) => s.strokeColor).style("stroke-width", (s) => s.strokeWidth);
    De(r.merge(a), o, ci).attr("cx", this.x).attr("cy", (s) => s.y).attr("r", 4).style("opacity", (s) => s.opacity).style("fill", (s) => s.color).style("stroke", (s) => s.strokeColor).style("stroke-width", (s) => s.strokeWidth), a.exit().remove();
  }
  hide() {
    this._onMouseOut();
  }
  _onMouseMove(t) {
    var n, o;
    const { config: i, datamodel: a, element: r } = this;
    !this.accessors.x && (!((n = a.data) === null || n === void 0) && n.length) && console.warn("Unovis | Crosshair: X accessor function has not been configured. Please check if it's present in the configuration object");
    const [s] = Zo(t, r), l = this.xScale.range();
    if (i.snapToData) {
      !this.accessors.y && !this.accessors.yStacked && (!((o = a.data) === null || o === void 0) && o.length) && console.warn("Unovis | Crosshair: Y accessors have not been configured. Please check if they're present in the configuration object");
      const u = this.xScale, h = u.invert(s);
      if (this.datum = Is(a.data, h, this.accessors.x), this.datumIndex = a.data.indexOf(this.datum), !this.datum) return;
      this.x = ut(Math.round(u(Ne(this.datum, this.accessors.x, this.datumIndex))), 0, this._width), this.show = this.x >= 0 && this.x <= this._width && (!i.hideWhenFarFromPointer || Math.abs(this.x - s) < i.hideWhenFarFromPointerDistance);
    } else this.x = ut(s, l[0], l[1]), this.show = s >= l[0] - 2 && s <= l[1] + 2;
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
    const a = i.getContainer() || this.container.node(), [r, s] = i.isContainerBody() ? [t.clientX, t.clientY] : Zo(t, a), l = o.template(this.datum, this.xScale.invert(this.x));
    if (i.config.followCursor = true, !i.config.horizontalPlacement || i.config.horizontalPlacement === G.Auto) {
      const u = i.isContainerBody() ? r - this.container.node().getBoundingClientRect().left : r;
      i.overrideHorizontalPlacement(u > this._containerWidth / 2 ? G.Left : G.Right);
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
    if (Us(o.getCircles)) return o.getCircles(this.xScale.invert(this.x), i, this.yScale);
    if (o.snapToData && this.datum) {
      const a = (t = this.accessors.y) !== null && t !== void 0 ? t : [], r = (n = this.accessors.yStacked) !== null && n !== void 0 ? n : [], s = Ne(this.datum, this.accessors.baseline, this.datumIndex) || 0, l = Hs(this.datum, this.datumIndex, ...r).map((h, c, d) => ({ y: this.yScale(h + s), opacity: Xe(Ne(this.datum, r[c])) ? 1 : 0, color: Be(this.datum, o.color, c), strokeColor: o.strokeColor ? Be(this.datum, o.strokeColor, c) : void 0, strokeWidth: o.strokeWidth ? Ne(this.datum, o.strokeWidth, c) : void 0 })), u = a.map((h, c) => {
        const d = Ne(this.datum, h);
        return { y: this.yScale(d), opacity: Xe(d) ? 1 : 0, color: Be(this.datum, o.color, l.length + c), strokeColor: o.strokeColor ? Be(this.datum, o.strokeColor, c) : void 0, strokeWidth: o.strokeWidth ? Ne(this.datum, o.strokeWidth, c) : void 0 };
      });
      return l.concat(u);
    }
    return [];
  }
}
Rr.selectors = Ih;
const Uh = Object.assign(Object.assign({}, Ht), { color: void 0, curveType: J.MonotoneX, baseline: () => 0, opacity: 1, cursor: null, minHeight1Px: false }), Ar = ne`
  label: area-component;
`, Hh = mn`
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

  body.theme-dark ${`.${Ar}`} {
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`, co = ne`
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
`, Fh = Object.freeze(Object.defineProperty({ __proto__: null, area: co, globalStyles: Hh, root: Ar }, Symbol.toStringTag, { value: "Module" }));
class Nn extends Dn {
  constructor(t) {
    super(), this._defaultConfig = Uh, this.config = this._defaultConfig, this.stacked = true, this.events = { [Nn.selectors.area]: {} }, t && this.setConfig(t), this.stacked = Array.isArray(this.config.y);
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: o } } = this, i = Xe(t) ? t : n.duration, a = oo[n.curveType];
    this._areaGen = Kd().x((g) => g.x).y0((g) => g.y0).y1((g) => {
      const b = Math.abs(g.y1 - g.y0) < 1;
      return g.y1 - (b && n.minHeight1Px ? 1 : 0);
    }).curve(a);
    const r = Bt(n.y) ? n.y : [n.y], s = o.map((g, b) => this.xScale(Ne(g, n.x, b))), l = Fs(o, n.baseline, r, this._prevNegative);
    this._prevNegative = l.map((g) => !!g.isMostlyNegative);
    const u = l.map((g) => g.map((b, v) => ({ y0: this.yScale(b[0]), y1: this.yScale(b[1]), x: s[v] }))), h = u.length - 1, c = u.reverse(), d = this.g.selectAll(`.${co}`).data(c), f = d.enter().append("path").attr("class", co).attr("d", (g) => this._areaGen(g) || this._emptyPath()).style("opacity", 0).style("fill", (g, b) => Be(o, n.color, h - b)), m = De(f.merge(d), i).style("opacity", (g, b) => g.some((_) => _.y0 - _.y1 !== 0) ? Ne(o, n.opacity, h - b) : 0).style("fill", (g, b) => Be(o, n.color, h - b)).style("cursor", (g, b) => ha(o, n.cursor, h - b));
    i ? m.attrTween("d", (b, v, _) => {
      const y = Et(_[v]).attr("d"), k = this._areaGen(b) || this._emptyPath();
      return yr(y, k);
    }) : m.attr("d", (g) => this._areaGen(g) || this._emptyPath()), De(d.exit(), i).style("opacity", 0).remove();
  }
  getYDataExtent(t) {
    const { config: n, datamodel: o } = this, i = Bt(n.y) ? n.y : [n.y], a = t ? ca(o.data, this.xScale.domain(), n.x) : o.data;
    return Vs(a, n.baseline, ...i);
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.domain(), o = this.yScale((n[0] + n[1]) / 2), i = o;
    return this._areaGen([{ y0: o, y1: i, x: t[0] }, { y0: o, y1: i, x: t[1] }]);
  }
}
Nn.selectors = Fh;
const Vh = I({ __name: "index", props: { components: {}, xScale: { type: [Object, Function] }, xDomain: {}, xDomainMinConstraint: {}, xDomainMaxConstraint: {}, xRange: {}, yScale: { type: [Object, Function] }, yDomain: {}, yDomainMinConstraint: {}, yDomainMaxConstraint: {}, yRange: {}, yDirection: {}, xAxis: {}, yAxis: {}, autoMargin: { type: Boolean }, tooltip: {}, crosshair: {}, preventEmptyDomain: { type: [Boolean, null] }, scaleByDomain: { type: Boolean }, annotations: {}, duration: {}, margin: {}, padding: {}, sizing: {}, width: {}, height: {}, svgDefs: {}, ariaLabel: {}, data: {} }, setup(e8, { expose: t }) {
  const n = e8, { data: o } = Ge(n), i = Ot(n), a = O(), r = Zi({ components: [], annotations: void 0, crosshair: void 0, tooltip: void 0, xAxis: void 0, yAxis: void 0 }), s = O();
  return ie(o, () => {
    a.value && a.value.setData(o.value, true);
  }), jt(() => {
    var l;
    r.components.map((u) => u.config), (l = a.value) == null || l.updateContainer({ ...$n(i.value), ...$n(r) });
  }), re(() => {
    s.value && (a.value = new zd(s.value, { ...$n(r) }, o.value));
  }), Ae(() => {
    var l;
    return (l = a.value) == null ? void 0 : l.destroy();
  }), xt(vo, { data: o, update: (l) => r.components = [...r.components, l], destroy: () => {
    var l;
    return r.components = (l = r.components) == null ? void 0 : l.filter((u) => !u.isDestroyed());
  } }), xt(pa, { data: o, update: (l) => r[`${l.config.type}Axis`] = l, destroy: (l) => {
    r[`${l}Axis`] = void 0;
  } }), xt(ma, { data: o, update: (l) => r.crosshair = l, destroy: () => {
    r.crosshair = void 0;
  } }), xt(Ys, { data: o, update: (l) => r.tooltip = l, destroy: () => {
    r.tooltip = void 0;
  } }), xt(Gs, { data: o, update: (l) => r.annotations = l, destroy: () => {
    r.annotations = void 0;
  } }), t({ component: a }), (l, u) => (T(), V("div", { "data-vis-xy-container": "", ref_key: "elRef", ref: s, class: "unovis-xy-container" }, [z(l.$slots, "default")], 512));
} }), Yh = { "data-vis-component": "" }, Gh = I({ __name: "index", props: { color: {}, curveType: {}, baseline: {}, opacity: {}, cursor: {}, minHeight1Px: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = hn(vo), o = e8, i = B(() => n.data.value ?? o.data), a = Ot(o), r = O();
  return re(() => {
    ke(() => {
      var s;
      r.value = new Nn(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ie(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ie(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), V("div", Yh));
} }), zh = { "data-vis-axis": "" }, Kh = I({ __name: "index", props: { position: {}, type: {}, fullSize: { type: Boolean }, label: {}, labelFontSize: {}, labelMargin: {}, labelColor: {}, gridLine: { type: Boolean }, tickLine: { type: Boolean }, domainLine: { type: Boolean }, minMaxTicksOnly: { type: Boolean }, minMaxTicksOnlyWhenWidthIsLess: {}, tickFormat: { type: Function }, tickValues: {}, numTicks: {}, tickTextFitMode: {}, tickTextWidth: {}, tickTextSeparator: {}, tickTextForceWordBreak: { type: Boolean }, tickTextTrimType: {}, tickTextFontSize: {}, tickTextAlign: {}, tickTextColor: {}, tickTextAngle: {}, tickTextHideOverlapping: { type: Boolean }, tickPadding: {}, x: {}, y: {}, id: { type: Function }, color: {}, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = hn(pa), o = e8, i = B(() => n.data.value ?? o.data), a = Ot(o), r = O();
  return re(() => {
    ke(() => {
      var s;
      r.value = new Cr(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy(o.type);
  }), ie(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ie(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), V("div", zh));
} }), Wh = { "data-vis-crosshair": "" }, qh = I({ __name: "index", props: { data: {} }, setup(e8, { expose: t }) {
  const n = hn(ma), o = e8, i = B(() => n.data.value ?? o.data), a = Ot(o), r = O();
  return re(() => {
    ke(() => {
      var s;
      r.value = new Rr(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ie(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ie(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), V("div", Wh));
} }), jh = { "data-vis-component": "" }, Zh = I({ __name: "index", props: { color: {}, curveType: {}, lineWidth: {}, lineDashArray: {}, fallbackValue: {}, highlightOnHover: { type: Boolean }, cursor: {}, interpolateMissingData: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = hn(vo), o = e8, i = B(() => n.data.value ?? o.data), a = Ot(o), r = O();
  return re(() => {
    ke(() => {
      var s;
      r.value = new En(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ie(a, (s, l) => {
    var u;
    gn(s, l) || (u = r.value) == null || u.setConfig(a.value);
  }), ie(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), V("div", jh));
} }), Xh = I({ __name: "Line.client", props: { data: {} }, setup(e8) {
  const t = Ur(), n = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }), o = (s) => s[0], i = (s) => s[1], a = (s) => n.format(new Date(s));
  function r(s) {
    if (!t.default) return "";
    const l = { setup: () => () => {
      var _a2;
      return (_a2 = t.default) == null ? void 0 : _a2.call(t, { data: s });
    } }, u = document.createElement("div");
    return Hr(l).mount(u), u.innerHTML;
  }
  return (s, l) => (T(), $(p(Vh), { data: s.data, padding: { top: 128 } }, { default: A(() => [R(p(Gh), { color: "url('assets/vertical-stripes.svg#vertical-stripes')", x: o, y: i }), R(p(Zh), { x: o, y: i, color: "rgb(var(--nq-green))" }), R(p(zs), { "vertical-shift": 1e3 }), R(p(Kh), { type: "x", "grid-line": false, "tick-format": a }), R(p(qh), { "data-crosshair": "", color: "rgb(var(--nq-blue))", template: r })]), _: 1 }, 8, ["data"]));
} }), Qh = Object.assign(ze(Xh, [["__scopeId", "data-v-2e4f043c"]]), { __name: "ChartLine" }), Jh = { flex: "~ align-center", relative: "", "w-max": "", "rounded-full": "", "bg-neutral-200": "", "p-2": "" }, ef = ["id"], tf = ["value"], nf = I({ __name: "PillSelector", props: Fr({ options: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e8) {
  const t = ea(e8, "modelValue"), n = is(), o = ta("labels"), i = O();
  return ie(() => t.value, async () => {
    var _a2, _b;
    await ke();
    const a = (_a2 = o.value) == null ? void 0 : _a2.find((r) => r.id === String(t.value));
    (_b = o.value) == null ? void 0 : _b.forEach((r) => r.dataset.state = a && r.isEqualNode(a) ? "active" : void 0), a && (i.value = { left: `${a.offsetLeft}px`, width: `${a.offsetWidth}px`, transition: n ? "left 300ms, width 200ms" : "none" });
  }, { immediate: true }), (a, r) => (T(), V("div", Jh, [(T(true), V(Ee, null, Je(a.options, (s, l) => (T(), V("label", { id: String(s), ref_for: true, ref_key: "labels", ref: o, key: l, text: "12 neutral-800 data-active:neutral hocus:neutral-900", flex: "~ items-center", relative: "", "z-2": "", "h-max": "", "cursor-pointer": "", "select-none": "", "rounded-full": "", "px-8": "", "py-4": "", "lh-none": "", "transition-colors": "", "nq-label": "" }, [na(w("input", { "onUpdate:modelValue": r[0] || (r[0] = (u) => t.value = u), type: "radio", value: s, "sr-only": "", onMousedown: r[1] || (r[1] = et(() => {
  }, ["prevent"])) }, null, 40, tf), [[Vr, t.value]]), Ve(" " + ue(s), 1)], 8, ef))), 128)), w("div", { absolute: "", "top-2": "", "z-1": "", "h-20": "", "rounded-full": "", "bg-neutral-0": "", style: _t(i.value) }, null, 4)]));
} }), of = Object.assign(ze(nf, [["__scopeId", "data-v-14fa443a"]]), { __name: "PillSelector" }), af = oa(Ks), rf = { "max-w": "none md:$nq-max-width", outline: "~ 1.5 neutral-400", relative: "", "mx-auto": "", "size-full": "", "min-h-128": "", "rounded-8": "", "bg-neutral-0": "", stack: "" }, sf = { "self-start": "!", "justify-self-end": "!", relative: "", "top--25": "", "z-20": "", "mr--32": "", "w-max": "" }, lf = { style: { "background-image": "radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" }, text: "f-lg white", rounded: "6 br-0", "f-px": "16/20", relative: "", "z-2": "", "ml-auto": "", "w-max": "", "pl-20": "", "f-pr": "28/20", "lh-none": "", "f-py-xs": "" }, uf = I({ __name: "RibbonContainer", props: { label: {}, floatingStarts: { type: Boolean, default: true } }, setup(e8) {
  return (t, n) => {
    const o = af;
    return T(), V("div", rf, [z(t.$slots, "default"), w("div", sf, [n[0] || (n[0] = w("div", { "aria-hidden": "", absolute: "", "bottom-0": "", "right-0": "", "z-1": "", "w-44": "", "origin-bottom-right": "", "translate-y--1": "", "rotate--45": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), t.floatingStarts ? (T(), $(o, { key: 0, translate: "-50%", absolute: "", left: "50%", top: "30%", "z-1": "", color: "#e9b213" })) : ae("", true), w("div", lf, ue(t.label), 1)])]);
  };
} }), cf = Object.assign(uf, { __name: "RibbonContainer" });
function Ln() {
  const { currency: e8 } = pt(), t = Zt({ key: B(() => ["nim-price", "now", e8.value]), query: async () => (await Su([Qt.NIM], [e8.value])).nim[e8.value] || 0, staleTime: 60 * 1e3 }), n = Zt({ key: B(() => ["nim-price", "1d-ago", e8.value]), query: async () => {
    const o = Date.now() - 864e5;
    return (await ku(Qt.NIM, e8.value, [o])).get(o) || 0;
  }, staleTime: 24 * 60 * 60 * 1e3 });
  return { price: t.data, priceState: t.state, priceLoading: t.isLoading, priceError: t.error, price1DayAgo: n.data, price1DayAgoState: n.state, price1DayAgoLoading: n.isLoading, price1DayAgoError: n.error, deltaPrice: B(() => !t.data.value || !n.data.value ? 0 : t.data.value - n.data.value) };
}
function Er() {
  const e8 = Xo(Date.now()), t = Xo(Date.now() - 24 * 60 * 60 * 1e3), n = B(() => `${Wn(e8)} NIM`), o = qs / 1e5, i = B(() => `${Wn(o)} NIM`);
  return { currentSupply: e8, supplyYesterday: t, currentSupplyFormatted: n, maxSupply: o, maxSupplyFormatted: i };
}
function df() {
  const { price: e8, price1DayAgo: t } = Ln(), { currencyInfo: n } = pt(), { currentSupply: o, supplyYesterday: i } = Er(), a = B(() => o * (e8.value || 0)), r = B(() => vn(a.value, n.value)), s = B(() => {
    if (!e8.value || !t.value) return;
    const l = i * t.value;
    return (a.value - l) / l;
  });
  return { marketCap: a, marketCapFormatted: r, marketCapChange: s };
}
const hf = [fe.USD, fe.EUR, fe.GBP];
function ff(e8) {
  return hf.includes(e8);
}
const At = new URL("https://min-api.cryptocompare.com/data/v2/histohour");
At.search = new URLSearchParams({ fsym: "NIM", limit: "48", aggregate: "1", e: "CCCAGG" }).toString();
function pf() {
  const { currencyInfo: e8 } = pt(), { price: t } = Ln(), n = B(() => {
    const c = e8.value.code;
    return ff(c) ? c : fe.USD;
  }), o = B(() => n.value !== e8.value.code), { data: i, state: a, error: r, isLoading: s } = Zt({ key: B(() => ["trading_volume", n.value]), query: async () => {
    var _a2, _b;
    const c = Math.floor(Date.now() / 1e3), d = c - c % 3600;
    At.searchParams.append("to_ts", String(d)), At.searchParams.append("tsym", n.value);
    const f = await Ie(At.toString(), bo.CryptoCompare);
    if (f.Message.includes("CCCAGG market does not exist")) throw new Error(`CCCAGG market does not exist for this coin pair (${n.value}-NIM). Url: ${At.toString()}`);
    if (!f || !((_b = (_a2 = f.Data) == null ? void 0 : _a2.Data) == null ? void 0 : _b.length)) throw new Error("Failed to fetch hourly volume data");
    const g = [...f.Data.Data].reverse(), b = g.slice(0, 24), v = g.slice(24, 48), _ = b.reduce((K, H) => K + H.volumeto, 0), y = v.reduce((K, H) => K + H.volumeto, 0), k = _, M = o.value ? k * (t.value || 0) : k, C = vn(M, e8.value), E = y > 0 ? (_ - y) / y : 0;
    return { volumeUsd: _, volumeFormatted: C, volumeChange: E };
  }, staleTime: 1 * 60 * 1e3 }), l = B(() => {
    var _a2;
    return ((_a2 = i.value) == null ? void 0 : _a2.volumeUsd) || 0;
  }), u = B(() => {
    var _a2;
    return ((_a2 = i.value) == null ? void 0 : _a2.volumeFormatted) || "0";
  }), h = B(() => {
    var _a2;
    return ((_a2 = i.value) == null ? void 0 : _a2.volumeChange) || 0;
  });
  return { volumeUsd: l, volumeFormatted: u, volumeChange: h, volumeState: a, error: r, volumeIsLoading: s };
}
const ji = 24 * 60 * 60 * 1e3, zn = { "1y": 7, "2y": 7, "5y": 7 }, mf = { "1y": 365, "2y": 730, "5y": 1825 };
function gf(e8) {
  const t = zo("nim_price_period", "1y"), n = B(() => "nimiq_price_history_cache"), o = zo(n.value, {}), i = B(() => `${Vt(e8)}`), a = Date.now(), r = B(() => a - mf[t.value] * ji), s = B(() => {
    const _ = o.value[i.value];
    return _ ? _[t.value] || [] : [];
  }), l = B(() => {
    var _a2, _b;
    const _ = s.value;
    if (!_ || _.length === 0) return true;
    const y = ((_a2 = _.at(-1)) == null ? void 0 : _a2[0]) || 0, k = Date.now() - ji;
    return y < k || (((_b = _.at(0)) == null ? void 0 : _b[0]) || 1 / 0) > r.value;
  }), u = B(() => {
    var _a2, _b;
    const _ = s.value;
    return !_.length || (((_a2 = _.at(0)) == null ? void 0 : _a2[0]) || 1 / 0) > r.value ? r.value : Math.max(((_b = _.at(-1)) == null ? void 0 : _b[0]) || 0, r.value);
  }), h = B(() => ["nimPriceHistory", Vt(e8), t.value, zn[t.value], u.value, a, Date.now()]), c = O(), { data: d, refetch: f, error: m, state: g, isLoading: b } = Zt({ key: h, query: async () => {
    var _a2;
    try {
      if (c.value = Date.now(), l.value) {
        const _ = await Jt(Qt.NIM, Vt(e8), u.value, a, bo.CryptoCompare, { interval: "days", aggregate: zn[t.value] }), y = i.value, k = t.value, M = ((_a2 = o.value[y]) == null ? void 0 : _a2[k]) || [], C = vf(M, _);
        return o.value[y] || (o.value[y] = { "1y": [], "2y": [], "5y": [] }), o.value[y][k] = C, C;
      }
      return s.value;
    } catch (_) {
      return console.error("Error fetching price history:", _), s.value;
    }
  }, placeholderData: s.value, staleTime: 5 * 60 * 1e3 });
  re(() => {
    f();
  }), ie([() => Vt(e8), t], () => {
    f();
  });
  const v = Object.keys(zn);
  return { data: d, error: m, state: g, refetch: f, period: t, periodOptions: v, lastUpdated: c, isLoading: b };
}
function vf(e8, t) {
  const n = /* @__PURE__ */ new Map();
  for (const [i, a] of e8) n.set(i, a);
  for (const [i, a] of t) n.set(i, a);
  const o = Array.from(n.entries());
  return o.sort((i, a) => i[0] - a[0]), o;
}
const _f = oa(Qh), yf = { "data-allow-mismatch": "" }, bf = ["data-state"], xf = { flex: "~ gap-8 items-center" }, wf = { text: "f-lg neutral", "whitespace-nowrap": "", "font-semibold": "", "lh-none": "" }, Sf = { "font-semibold": "", "lh-none": "", "f-text-sm": "" }, kf = { flex: "~ gap-6 items-center" }, Tf = { text: "f-xs neutral-800", "w-max": "", "font-normal": "", "lh-none": "" }, Cf = { text: "blue f-3xl", "font-semibold": "", "lh-none": "" }, Mf = { key: 1, flex: "~ items-center", text: "f-2xs neutral-700", "font-semibold": "", "lh-none": "" }, Df = { grid: "~ cols-1 md:cols-[max-content_1fr]", relative: "", "size-full": "", "of-hidden": "" }, Rf = { "md:border": "r-1 solid neutral-400", grid: "~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24", relative: "", "w-full": "", "f-p-md": "", "max-md:row-start-2": "", "max-md:of-x-auto": "" }, Af = { key: 0, flex: "~ items-center gap-8", text: " gold f-sm", "translate-x": "100%", absolute: "", "right--1": "", "top--1": "", "z-30": "", "rounded-br-6": "", "bg-white": "", "py-4": "", "f-px-xs": "", border: "b r neutral-400" }, Ef = { "max-md": "col-span-full sticky left-0 w-[calc(100vw-80px)] w-max", flex: "~ md:col gap-col-4 gap-row-8 max-md:justify-center", text: "f-2xs neutral-800", "lh-none": "", "md:mt-auto": "" }, Pf = { key: 1 }, Nf = { group: "", relative: "", "f-pb-xs": "" }, Lf = { absolute: "", "right-32": "", "top-32": "", "z-20": "" }, Bf = { flex: "~ items-center justify-center gap-8", "f-mt-md": "", text: "center f-sm" }, $f = I({ __name: "PriceChart", props: _o(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { currency: t, currencyInfo: n } = pt(), { marketCapChange: o, marketCapFormatted: i } = df(), { currentSupplyFormatted: a, maxSupplyFormatted: r } = Er(), { volumeChange: s, volumeFormatted: l, error: u, volumeIsLoading: h } = pf(), { data: c, lastUpdated: d, period: f, periodOptions: m, isLoading: g } = gf(t), { deltaPrice: b, price1DayAgoLoading: v, priceLoading: _, price: y } = Ln(), k = B(() => g.value || _.value || v.value || h.value), [M, C] = Ko(), [E, K] = Ko(), H = O("bottom");
  jt(() => {
    if (!c.value || c.value.length < 2) {
      H.value = "bottom";
      return;
    }
    const D = Math.max(5, Math.floor(c.value.length / 4)), P = c.value.slice(-D).map(([, ge]) => ge), [Y, X] = [Math.min(...P), Math.max(...P) * 1.5], Te = P.reduce((ge, he) => ge + he, 0) / P.length || 0, Ce = Y + (X - Y) / 2;
    H.value = Te >= Ce ? "bottom" : "top";
  });
  const ee = B(() => !g.value && !y.value ? "Unable to load price data" : u.value ? u.value : null);
  return (D, P) => {
    const Y = ho, X = ws, Q = Jr, Te = _f, Ce = of, ge = Pa, he = cf, bt = Ji, at = dn;
    return T(), V("div", yf, [R(p(M), null, { default: A(({ metricValue: le, metricChange: be, label: Me, tooltipInfo: rt }) => [w("div", { flex: "~ col gap-8", relative: "", "data-state": le === "0" ? "inactive" : "active", "z-1": "", "reka-inactive:animate-pulse": "" }, [P[2] || (P[2] = w("div", { absolute: "", "inset--12": "", "z--1": "", outline: "~ 1.5 neutral-200 offset--1.5", "h-full": "", "w-full": "", "rounded-6": "", "bg-neutral-100": "", "reka-active:hidden": "", w: "[calc(100%+24px)]" }, null, -1)), w("div", xf, [w("span", wf, ue(le), 1), be ? (T(), V("div", { key: 0, class: ve(be < 0 ? "text-red" : "text-green"), flex: "~ gap-2 items-center" }, [w("div", { class: ve({ "rotate-180": be < 0 }), "aria-hidden": "", "size-7": "", "i-nimiq:triangle-up": "" }, null, 2), w("span", Sf, ue(("formatPercentage" in D ? D.formatPercentage : p(Qo))(be)), 1)], 2)) : ae("", true)]), w("div", kf, [w("p", Tf, ue(Me), 1), rt ? (T(), $(X, { key: 0 }, { default: A(() => [R(Y, { wrapper: "div", field: rt }, null, 8, ["field"])]), _: 2 }, 1024)) : ae("", true)])], 8, bf)]), _: 1 }), R(p(E), null, { default: A(({ data: [le, be], deltaPriceOneDay: Me }) => [w("div", { flex: "~ col gap-8", relative: "", "bg-neutral-0": "", f: "$side $side-min-20 $side-max-24", "f-py-xs": "", class: ve({ "top-21 mx-20": !Me }) }, [P[3] || (P[3] = w("div", { absolute: "", "inset-y-0": "", left: "[calc(var(--f-side)*-1)]", w: "$f-side", "bg-gradient": "from-transparent to-neutral-0 to-r" }, null, -1)), P[4] || (P[4] = w("div", { absolute: "", "inset-y-0": "", right: "[calc(var(--f-side)*-1)]", w: "$f-side", "bg-gradient": "from-neutral-0 to-transparent to-r", "f-w-md": "" }, null, -1)), w("p", Cf, ue(("formatFiat" in D ? D.formatFiat : p(vn))(be, p(n))), 1), Me ? (T(), V("div", Mf, [w("div", { "mr-4": "", "size-8": "", "i-nimiq:triangle-up": "", class: ve({ "rotate-180": Me < 0 }) }, null, 2), w("span", null, ue(("formatDecimal" in D ? D.formatDecimal : p(Ws))(Math.abs(Me))) + " (" + ue(("formatPercentage" in D ? D.formatPercentage : p(Qo))(Me / be)) + ")", 1)])) : (T(), $(Q, { key: 0, datetime: le, year: "numeric", month: "long", day: "numeric", text: "f-2xs right neutral-700", "lh-none": "", "nq-label": "" }, null, 8, ["datetime"]))], 2)]), _: 1 }), R(he, { label: D.slice.primary.nimPriceChartLabel, "z-3": "", shadow: "", "md:min-h-480": "", "outline-color": "white/20" }, { default: A(() => {
      var _a2;
      return [w("div", Df, [w("aside", Rf, [R(Yr, { "enter-active-class": "transition duration-200 ease-out", "enter-from-class": "op-0", "enter-to-class": "op-100", "leave-active-class": "transition duration-200 ease-out", "leave-from-class": "op-100", "leave-to-class": "op-0" }, { default: A(() => [p(k) || p(ee) ? (T(), V("div", Af, [w("div", { "scale-90": "", class: ve(p(k) ? "i-nimiq:spinner" : "i-nimiq:alert") }, null, 2), w("p", null, ue(p(k) ? "Loading..." : p(ee)), 1)])) : ae("", true)]), _: 1 }), R(p(C), { "metric-value": p(i), "metric-change": p(o), label: D.slice.primary.marketCapLabel, "tooltip-info": D.slice.primary.marketCapInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), R(p(C), { "metric-value": p(l), "metric-change": p(s), label: D.slice.primary.volume24HLabel, "tooltip-info": D.slice.primary.volume24HInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), R(p(C), { "metric-value": p(a), label: D.slice.primary.totalSupplyLabel, "tooltip-info": D.slice.primary.totalSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), R(p(C), { "metric-value": p(r), label: D.slice.primary.maxSupplyLabel, "tooltip-info": D.slice.primary.maxSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), na(w("div", Ef, [P[5] || (P[5] = w("span", null, "Last updated:", -1)), p(d) ? (T(), $(Q, { key: 0, datetime: p(d), year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }, null, 8, ["datetime"])) : (T(), V("span", Pf, "Loading..."))], 512), [[Gr, p(d)]])]), w("div", Nf, [R(Te, { data: p(c) || [], leader: "", "h-full": "", "rounded-8": "" }, { default: A(({ data: [le, be] }) => [R(p(K), { data: [le, be] }, null, 8, ["data"])]), _: 1 }, 8, ["data"]), w("div", Lf, [R(p(K), { "transition-opacity": "", "leader-hocus:invisible": "", data: ((_a2 = p(c)) == null ? void 0 : _a2.at(-1)) || [0, 0], "delta-price-one-day": p(b) }, null, 8, ["data", "delta-price-one-day"])]), w("div", { "data-allow-mismatch": "", class: ve(p(H) === "top" ? "top-128" : "bottom-64"), flex: "~ items-center gap-8", absolute: "", "z-20": "", "f-right-md": "" }, [R(Ce, { modelValue: p(f), "onUpdate:modelValue": P[0] || (P[0] = (le) => Ze(f) ? f.value = le : null), options: p(m), "self-end": "", "justify-self-end": "", ring: "white 3" }, null, 8, ["modelValue", "options"]), R(ge, { modelValue: p(t), "onUpdate:modelValue": P[1] || (P[1] = (le) => Ze(t) ? t.value = le : null), bg: "darkblue hocus:neutral-200", transition: "[background-color]", "h-full": "", "rounded-full": "", "px-2": "", "text-14": "", "font-normal": "", "nq-label": "", text: "white hocus:neutral", ring: "white 3", border: "~ 1.5 neutral-200" }, { trigger: A(({ selectedCurrency: le }) => [Ve(ue(le.toLocaleUpperCase()), 1)]), _: 1 }, 8, ["modelValue"])], 2)])])];
    }), _: 1 }, 8, ["label"]), w("p", Bf, [Ve(ue(D.slice.primary.poweredByLabel) + " ", 1), R(at, { field: D.slice.primary.poweredByLink }, { default: A(() => [R(bt, { op: "80 hocus:100", field: D.slice.primary.poweredByLogo, "w-full": "", "transition-opacity": "", "f-h-sm": "" }, null, 8, ["field"])]), _: 1 }, 8, ["field"])])]);
  };
} }), Of = Object.assign($f, { __name: "PriceChart" }), If = {};
function Uf(e8, t) {
  return T(), V(Ee, null, [t[0] || (t[0] = w("div", { absolute: "", "inset-0": "", "bottom-96": "", "z-2": "", "max-w-none": "", "of-hidden": "", "var:f-mt:40vh": "", "var:f-top:150vh": "", "lg:var:f-top:80vh": "" }, [w("div", { absolute: "", "h-180vh": "", "w-screen": "", class: "bg-radial" }), w("div", { absolute: "", "inset-0": "", "w-screen": "", "bg-neutral-0": "", h: "$f-mt" }), w("div", { "bg-gradient-fn": "from-neutral-0 ease-in to-$orange to-b", top: "$f-mt", h: "$f-top", absolute: "", "w-screen": "" }), w("div", { absolute: "", "bottom-0": "", h: "[calc(100%-var(--f-mt)-var(--f-top))]", "w-screen": "", "bg-gradient-fn": "from-$orange ease-out to-neutral-0 to-b" }), w("div", { "i-custom:buy-and-sell-bg": "", absolute: "", "bottom--256": "", "left-0": "", "aspect-1.2620087336": "", "h-auto": "", "w-110vw": "" })], -1)), w("div", j({ "z-3": "" }, e8.$attrs), [z(e8.$slots, "default", {}, void 0, true)], 16)], 64);
}
const Hf = Object.assign(ze(If, [["render", Uf], ["__scopeId", "data-v-862d3c58"]]), { __name: "BgBuyAndSell" }), Ff = { relative: "", "of-x-clip": "", "bg-neutral-0": "", "px-0": "" }, Vf = { class: "group", relative: "", "w-full": "", flex: "~ items-center gap-12" }, Yf = { absolute: "", "right-4": "", "top-auto": "", text: "neutral-600 group-hover:blue/50 hocus:!neutral-800 group-focus-within:blue!", "z-40": "" }, Gf = { class: "group", relative: "", "w-full": "" }, zf = I({ __name: "BuyAndSell", props: _o(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { fiatAmount: t, cryptoAmount: n, lastEdited: o } = a(), { currency: i } = pt();
  function a() {
    const { price: r } = Ln(), { currencyInfo: s } = pt(), l = O(1), u = O(r.value ? l.value * r.value : 0), h = O(), c = B({ get: () => l.value, set: (f) => {
      l.value = f, h.value = "crypto", u.value = vn(f * (r.value || 0), s.value, { returnJustNumber: true });
    } }), d = B({ get: () => u.value, set: (f) => {
      u.value = f, h.value = "fiat", l.value = Number.parseFloat(Wn(r.value ? f / r.value : 0));
    } });
    return ie(r, (f) => {
      f && (h.value === "crypto" ? u.value = l.value * f : l.value = u.value / f);
    }), setTimeout(() => {
      c.value = 1;
    }), { cryptoAmount: c, fiatAmount: d, lastEdited: h };
  }
  return (r, s) => {
    const l = ia, u = jr, h = Pa, c = Of, d = Hf;
    return T(), V("section", Ff, [R(d, { "w-full": "" }, { default: A(() => [R(l, { headline: r.slice.primary.headline, subline: r.slice.primary.subline, px: "$px" }, null, 8, ["headline", "subline"]), w("form", { grid: "~ cols-1 md:cols-[1fr_max-content_1fr] items-center  gap-x-24", "max-md:px": "$px", "mx-auto": "", "mt-40": "", "h-max": "", "max-w-560": "", "w-full": "", onSubmit: s[7] || (s[7] = et(() => {
    }, ["prevent"])) }, [w("div", Vf, [(T(), $(u, { key: p(o) === "crypto" ? p(n) : "fiat", modelValue: p(t), "onUpdate:modelValue": s[0] || (s[0] = (f) => Ze(t) ? t.value = f : null), rounded: "b-0 md:2", required: "", "pr-64": "", "f-text-2xl": "", "group-focus-within:z-10": "", "max-md:translate-y--1.5": "", onBlur: s[1] || (s[1] = (f) => o.value = void 0), onFocus: s[2] || (s[2] = (f) => o.value = "fiat") }, null, 8, ["modelValue"])), w("div", Yf, [R(h, { modelValue: p(i), "onUpdate:modelValue": s[3] || (s[3] = (f) => Ze(i) ? i.value = f : null) }, null, 8, ["modelValue"])])]), s[9] || (s[9] = w("p", { "h-max": "", "text-32": "", "max-md:hidden": "" }, " = ", -1)), w("div", Gf, [(T(), $(u, { key: p(o) === "fiat" ? p(t) : "crypto", modelValue: p(n), "onUpdate:modelValue": s[4] || (s[4] = (f) => Ze(n) ? n.value = f : null), required: "", "f-text-2xl": "", rounded: "t-0 md:2", "group-focus-within:z-10": "", onFocus: s[5] || (s[5] = (f) => o.value = "crypto"), onBlur: s[6] || (s[6] = (f) => o.value = void 0) }, null, 8, ["modelValue"])), s[8] || (s[8] = w("div", { text: "neutral-600 group-hover:blue/50 group-focus-within:blue!", absolute: "", "right-12": "", "top-17": "", "transition-colors": "", "nq-label": "", "f-text": "12/16" }, " NIM ", -1))])], 32), R(c, j(r.$props, { px: "16 md:$px", "nq-wide": "", "mt-96": "", "max-md:w": "[calc(100%+64px)]" }), null, 16)]), _: 1 })]);
  };
} }), Kf = Object.assign(zf, { __name: "HeroBuyAndSell" }), Wf = { "of-x-clip": "", "bg-darkerblue": "", "px-0": "", "pb-0": "", "f-pt-3xl": "" }, qf = { "z-1": "", "max-w-none": "", "w-full": "", "bg-neutral-100": "" }, jf = { key: 0, flex: "~ gap-8 items-center", "text-white": "", "f-mt-sm": "" }, Zf = { "size-40": "", "rounded-full": "", stack: "", ring: "1.5 white/40" }, Xf = { "size-40": "", "rounded-full": "", stack: "", ring: "1.5 white/40" }, Qf = { key: 2, "f-mt-sm": "" }, Jf = { text: "f-xs white/50", "nq-label": "" }, ep = { flex: "~ gap-8 items-center", "text-white": "", "f-mt-2xs": "" }, tp = I({ __name: "OasisWorld", props: { items: {}, label: {} }, async setup(e8) {
  let t, n;
  const { data: o } = ([t, n] = zr(() => Xs()), t = await t, n(), t), i = ta("scroller"), a = B(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.querySelector("ul");
  }), { x: r } = as(a), { width: s } = rs(a), l = B(() => {
    if (!s.value || !a.value) return 0;
    const d = a.value.scrollWidth, f = s.value - d, m = Math.min(100, Math.max(0, -r.value / f * 100));
    return Math.round(m) / 100;
  }), u = { Europe: "bg-green", "Central America": "bg-blue", World: "bg-orange" }, h = { Europe: ["i-nimiq:logos-euro-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-usd-outline-mono", "i-nimiq:logos-colones-outline-mono"], World: [] }, c = { Europe: ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x-0.5"], World: [] };
  return (d, f) => {
    const m = ho, g = dn, b = js;
    return T(), V("section", Wf, [w("div", { class: ve(["world-container", { first: p(l) < 0.33, second: p(l) >= 0.33 && p(l) < 0.66, third: p(l) >= 0.66 }]), style: _t(`--progress: ${p(l)}`), relative: "", "aspect-2": "", "max-w-none": "", "w-full": "" }, f[0] || (f[0] = [w("div", { absolute: "", "left-0": "", "top-0": "" }, [w("div", { rounded: "100%", class: "oval", "bg-neutral-100": "", stack: "" }, [w("div", { "i-oasis-regions:europe": "" }), w("div", { "i-oasis-regions:central-america": "" }), w("div", { "i-oasis-regions:rest-of-the-world": "" })])], -1)]), 6), w("div", qf, [w("div", { ref_key: "scroller", ref: a, relative: "", "mx-auto": "", "max-w-480": "", "w-full": "" }, [R(b, { items: d.items, style: { "--px": "32px", "--pb": "64px" } }, { default: A(({ item: { content: v, kind: _, link: y } }) => [w("div", { class: ve(u[_]), "max-w-480": "", "w-full": "", "rounded-8": "", "f-p-lg": "", "md:w-416": "" }, [R(m, { wrapper: "div", field: v, class: "dark", "nq-prose-compact": "", "text-white": "" }, null, 8, ["field"]), _ !== "World" ? (T(), V("div", jf, [(T(true), V(Ee, null, Je(h[_], (k, M) => (T(), V("div", { key: M, flex: "~ gap-8" }, [w("div", Zf, [w("div", { class: ve(k), "size-24": "" }, null, 2)])]))), 128)), f[1] || (f[1] = w("div", { "mx-12": "", "op-50": "", "i-nimiq:exchange": "", "f-text-2xl": "" }, null, -1)), (T(true), V(Ee, null, Je(c[_], (k, M) => (T(), V("div", { key: M, flex: "~ gap-8" }, [w("div", Xf, [w("div", { class: ve(k), "size-24": "" }, null, 2)])]))), 128))])) : ae("", true), ("hasLink" in d ? d.hasLink : p(Zs))(y) ? (T(), $(g, { key: 1, field: y, "internal-component": "a", external: "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-white": "", "f-mt-md": "" }, null, 8, ["field"])) : ae("", true), _ !== "Europe" ? (T(), V("div", Qf, [w("h4", Jf, ue(d.label), 1), w("div", ep, [R(g, { field: p(o).x.link, "internal-component": "a", bg: "white/20 hocus:white/40", external: "", "size-40": "", "rounded-full": "", "transition-colors": "", stack: "" }, { default: A(() => f[2] || (f[2] = [w("div", { text: "white/80 f-xl", "transition-colors": "", "i-nimiq:logos-twitter-mono": "" }, null, -1)])), _: 2 }, 1032, ["field"]), R(g, { field: p(o).telegram.link, "internal-component": "a", bg: "white/20 hocus:white/40", external: "", "size-40": "", "rounded-full": "", "transition-colors": "", stack: "" }, { default: A(() => f[3] || (f[3] = [w("div", { text: "white/80 f-lg hocus:white", "translate-x--1": "", "translate-y-1": "", "transition-colors": "", "i-nimiq:logos-telegram-mono": "" }, null, -1)])), _: 2 }, 1032, ["field"])])])) : ae("", true)], 2)]), _: 1 }, 8, ["items"])], 512)])]);
  };
} }), np = Object.assign(ze(tp, [["__scopeId", "data-v-85d7818b"]]), { __name: "HeroOasisWorld" }), $p = I({ __name: "index", props: _o(), setup(e8) {
  return (t, n) => {
    const o = Pr, i = zl, a = lu, r = es, s = mu, l = Kf, u = np;
    return T(), V(Ee, null, [t.slice.variation === "default-slice" ? (T(), $(o, j({ key: 0 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ae("", true), t.slice.variation === "twoColumn" ? (T(), $(i, j({ key: 1 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ae("", true), t.slice.variation === "home2024" ? (T(), $(a, { key: 2, headline: t.slice.primary.headline, "sub-headline-template": t.slice.primary.subheadline, cta: t.slice.primary.cta, "cta-label": t.slice.primary.cta_label, "data-slice-type": t.slice.slice_type }, null, 8, ["headline", "sub-headline-template", "cta", "cta-label", "data-slice-type"])) : ae("", true), t.slice.variation === "leftAligned" ? (T(), $(r, { key: 3, headline: t.slice.primary.headline, subline: t.slice.primary.subline }, null, 8, ["headline", "subline"])) : ae("", true), t.slice.variation === "staking" ? (T(), $(s, { key: 4, headline: t.slice.primary.headline, cta: t.slice.primary.cta }, null, 8, ["headline", "cta"])) : ae("", true), t.slice.variation === "buyAndSell" ? (T(), $(l, cn(j({ key: 5 }, t.$props)), null, 16)) : ae("", true), t.slice.variation === "oasis" ? (T(), $(u, { key: 6, items: t.slice.primary.items, label: t.slice.primary.beTheFirstToKnowLabel }, null, 8, ["items", "label"])) : ae("", true)], 64);
  };
} });
export {
  $p as default
};
