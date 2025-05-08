var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as cs } from "./CHSTKM5u.js";
import { d as K, j as B, L as oe, b as V, o as D, m as re, c as $, r as Ke, F as Me, u as g, ag as Nn, U as Mt, B as j, w as I, R as le, f as ie, a1 as xe, ah as Bo, E as pe, a0 as us, a as R, ab as Ye, ai as hs, G as Le, W as ot, $ as We, aj as Io, g as ze, ak as ds, t as se, S as Xn, e as k, D as Oo, Y as en, n as ye, al as Ri, i as $e, H as wn, _ as fs, C as ps, x as ms, a4 as gs, a7 as Lo, T as _s, V as vs, am as kn, an as ht, ao as tn, Z as ys, ap as xs, a6 as bs, aq as ws, a9 as ks, aa as Ss, h as $o, ar as Yt, as as Lt, s as Ts, at as Ms } from "./ClGJWWej.js";
import { _ as Uo } from "./DDjqKod7.js";
import { _ as Qn } from "./D3wyXQF5.js";
import { _ as Fo } from "./DBd8fsAv.js";
import { _ as Ds } from "./DWWa9Xrr.js";
import { u as Cs } from "./D2XTqSik.js";
import { _ as Rs, a as As } from "./BnCQ2Wdo.js";
import { u as Es, a as Ns, b as Ps, _ as Bs, c as Is } from "./BWHOe9d5.js";
import { _ as Os } from "./cHrnv2Fc.js";
import { _ as Ls } from "./CfNbqjXi.js";
import { u as Ho } from "./xLWJwwMd.js";
import { n as Pn, c as Ai, e as $s, o as Us } from "./CEBR9iVI.js";
import { _ as Fs, a as Hs, b as Ys, c as Vs, u as Gs } from "./ZXfttXAr.js";
import { c as Dt, a as kt, j as $t, P as Ee, u as qe, r as Ks, b as Jn, f as Ws } from "./DvG5VWlW.js";
import { a as ct, _ as zs, u as ei } from "./Bygj8hOA.js";
import { u as Yo } from "./ZsnPzy3h.js";
import { c as qs, b as js, _ as Zs, h as Xs } from "./DsoEoSLB.js";
import { a as Qs, _ as Js } from "./BVy4Ey-L.js";
import { c as Vo } from "./CVtsTRWS.js";
import { b as ti, a as Go, i as nn, c as er, C as tr, d as nr, e as ir, g as or, f as ee, h as tt, j as dt, k as Ei, l as ar, m as sr, S as rr, n as Sn, o as Ko, p as St, q as ve, r as Wo, s as Ni, t as on, u as Ve, v as Te, w as De, x as zo, y as xt, z as lr, A as be, F as qo, T as cr, P as H, B as ur, D as hr, V as Pi, E as dr, G as fr, H as pr, I as Je, J as Bi, K as mr, L as gr, M as _r, N as vr, O as yr, Q as Ct, R as ni, U as jo, W as Zo, X as xr, Y as br, Z as an, _ as wr } from "./J3mR9qeT.js";
import { _ as kr } from "./C64D3qWn.js";
import { g as ii } from "./CpsPJSKh.js";
import { p as Ii, f as Ut, a as Oi, b as Li } from "./CKmrXjwn.js";
import { _ as Sr } from "./BUKkqoBu.js";
import { h as Tr } from "./SvaN8giD.js";
import { u as Mr } from "./CNR68Ipz.js";
import "./Dxc61GTl.js";
import "./YKo2rOHu.js";
import "./CqkleIqs.js";
import "./Bz4-DFcF.js";
import "./DaKIddv2.js";
function Dr() {
  return { ALT: "Alt", ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp", BACKSPACE: "Backspace", CAPS_LOCK: "CapsLock", CONTROL: "Control", DELETE: "Delete", END: "End", ENTER: "Enter", ESCAPE: "Escape", F1: "F1", F10: "F10", F11: "F11", F12: "F12", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", HOME: "Home", META: "Meta", PAGE_DOWN: "PageDown", PAGE_UP: "PageUp", SHIFT: "Shift", SPACE: " ", TAB: "Tab", CTRL: "Control", ASTERISK: "*", SPACE_CODE: "Space" };
}
const Cr = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function Rr(e8, t) {
  return t !== "rtl" ? e8 : e8 === "ArrowLeft" ? "ArrowRight" : e8 === "ArrowRight" ? "ArrowLeft" : e8;
}
function Ar(e8, t, n) {
  const i = Rr(e8.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))) return Cr[i];
}
const $i = K({ inheritAttrs: false, __name: "VisuallyHiddenInputBubble", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, { primitiveElement: n, currentElement: i } = ct(), o = B(() => t.checked ?? t.value);
  return oe(o, (a, s) => {
    if (!i.value) return;
    const r = i.value, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
    if (d && a !== s) {
      const u = new Event("input", { bubbles: true }), h = new Event("change", { bubbles: true });
      d.call(r, a), r.dispatchEvent(u), r.dispatchEvent(h);
    }
  }), (a, s) => (D(), V(zs, re({ ref_key: "primitiveElement", ref: n }, { ...t, ...a.$attrs }, { as: "input" }), null, 16));
} }), Er = K({ inheritAttrs: false, __name: "VisuallyHiddenInput", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, n = B(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), i = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([s, r]) => ({ name: `[${t.name}][${a}][${s}]`, value: r })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
  return (o, a) => n.value ? (D(), V($i, re({ key: o.name }, { ...t, ...o.$attrs }, { name: o.name, value: o.value }), null, 16, ["name", "value"])) : (D(true), $(Me, { key: 1 }, Ke(i.value, (s) => (D(), V($i, re({ key: s.name, ref_for: true }, { ...t, ...o.$attrs }, { name: s.name, value: s.value }), null, 16, ["name", "value"]))), 128));
} });
function Nr(e8) {
  const t = B(() => g(e8)), n = B(() => new Intl.Collator("en", { usage: "search", ...t.value }));
  return { startsWith: (s, r) => r.length === 0 ? true : (s = s.normalize("NFC"), r = r.normalize("NFC"), n.value.compare(s.slice(0, r.length), r) === 0), endsWith: (s, r) => r.length === 0 ? true : (s = s.normalize("NFC"), r = r.normalize("NFC"), n.value.compare(s.slice(-r.length), r) === 0), contains: (s, r) => {
    if (r.length === 0) return true;
    s = s.normalize("NFC"), r = r.normalize("NFC");
    let l = 0;
    const c = r.length;
    for (; l + c <= s.length; l++) {
      const d = s.slice(l, l + c);
      if (n.value.compare(r, d) === 0) return true;
    }
    return false;
  } };
}
function Pr(e8, t, n) {
  return e8 === void 0 ? false : Array.isArray(e8) ? e8.some((i) => bt(i, t, n)) : bt(e8, t, n);
}
function bt(e8, t, n) {
  return e8 === void 0 || t === void 0 ? false : typeof e8 == "string" ? e8 === t : typeof n == "function" ? n(e8, t) : typeof n == "string" ? (e8 == null ? void 0 : e8[n]) === (t == null ? void 0 : t[n]) : Nn(e8, t);
}
function Br(e8, t, n) {
  const i = e8.findIndex((r) => Nn(r, t)), o = e8.findIndex((r) => Nn(r, n));
  if (i === -1 || o === -1) return [];
  const [a, s] = [i, o].sort((r, l) => r - l);
  return e8.slice(a, s + 1);
}
const [sn, Ir] = Dt("ListboxRoot"), Or = K({ __name: "ListboxRoot", props: { modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, orientation: { default: "vertical" }, dir: {}, disabled: { type: Boolean }, selectionBehavior: { default: "toggle" }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(e8, { expose: t, emit: n }) {
  const i = e8, o = n, { multiple: a, highlightOnHover: s, orientation: r, disabled: l, selectionBehavior: c, dir: d } = Mt(i), { getItems: u } = ei({ isProvider: true }), { handleTypeaheadSearch: h } = Es(), { primitiveElement: f, currentElement: p } = ct(), m = Dr(), _ = Yo(d), v = Ns(p), x = j(), y = j(false), S = j(true), T = kt(i, "modelValue", o, { defaultValue: i.defaultValue ?? (a.value ? [] : void 0), passive: i.modelValue === void 0, deep: true });
  function M(A) {
    if (y.value = true, i.multiple) {
      const L = Array.isArray(T.value) ? [...T.value] : [], b = L.findIndex((E) => bt(E, A, i.by));
      i.selectionBehavior === "toggle" ? (b === -1 ? L.push(A) : L.splice(b, 1), T.value = L) : (T.value = [A], x.value = A);
    } else i.selectionBehavior === "toggle" && bt(T.value, A, i.by) ? T.value = void 0 : T.value = A;
    setTimeout(() => {
      y.value = false;
    }, 1);
  }
  const C = j(null), W = j(null), U = j(false), Q = j(false), N = $t(), P = $t(), F = $t();
  function Y() {
    return u().map((A) => A.ref).filter((A) => A.dataset.disabled !== "");
  }
  function z(A, L = true) {
    if (!A) return;
    C.value = A, S.value && C.value.focus(), L && C.value.scrollIntoView({ block: "nearest" });
    const b = u().find((E) => E.ref === A);
    o("highlight", b);
  }
  function ce(A) {
    if (U.value) F.trigger(A);
    else {
      const L = u().find((b) => bt(b.value, A, i.by));
      L && (C.value = L.ref, z(L.ref));
    }
  }
  function ke(A) {
    C.value && C.value.isConnected && (A.preventDefault(), A.stopPropagation(), Q.value || C.value.click());
  }
  function Ie(A) {
    if (S.value) {
      if (y.value = true, U.value) P.trigger(A);
      else {
        const L = A.altKey || A.ctrlKey || A.metaKey;
        if (L && A.key === "a" && a.value) {
          const b = u(), E = b.map((O) => O.value);
          T.value = [...E], A.preventDefault(), z(b[b.length - 1].ref);
        } else if (!L) {
          const b = h(A.key, u());
          b && z(b);
        }
      }
      setTimeout(() => {
        y.value = false;
      }, 1);
    }
  }
  function me() {
    Q.value = true;
  }
  function yn() {
    requestAnimationFrame(() => {
      Q.value = false;
    });
  }
  function Nt() {
    xe(() => {
      const A = new KeyboardEvent("keydown", { key: "PageUp" });
      Pt(A);
    });
  }
  function ut(A) {
    const L = C.value;
    (L == null ? void 0 : L.isConnected) && (W.value = L), C.value = null, o("leave", A);
  }
  function xn(A) {
    var _a2, _b;
    const L = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if ((_a2 = A.currentTarget) == null ? void 0 : _a2.dispatchEvent(L), o("entryFocus", L), !L.defaultPrevented) if (W.value) z(W.value);
    else {
      const b = (_b = Y()) == null ? void 0 : _b[0];
      z(b);
    }
  }
  function Pt(A) {
    const L = Ar(A, r.value, _.value);
    if (!L) return;
    let b = Y();
    if (C.value) {
      if (L === "last") b.reverse();
      else if (L === "prev" || L === "next") {
        L === "prev" && b.reverse();
        const E = b.indexOf(C.value);
        b = b.slice(E + 1);
      }
      bn(A, b[0]);
    }
    if (b.length) {
      const E = !C.value && L === "prev" ? b.length - 1 : 0;
      z(b[E]);
    }
    if (U.value) return P.trigger(A);
  }
  function bn(A, L) {
    var _a2;
    if (!(U.value || i.selectionBehavior !== "replace" || !a.value || !Array.isArray(T.value) || (A.altKey || A.ctrlKey || A.metaKey) && !A.shiftKey) && A.shiftKey) {
      const E = u().filter((te) => te.ref.dataset.disabled !== "");
      let O = (_a2 = E.find((te) => te.ref === L)) == null ? void 0 : _a2.value;
      if (A.key === m.END ? O = E[E.length - 1].value : A.key === m.HOME && (O = E[0].value), !O || !x.value) return;
      const w = Br(E.map((te) => te.value), x.value, O);
      T.value = w;
    }
  }
  async function Bt(A) {
    if (await xe(), U.value) N.trigger(A);
    else {
      const L = Y(), b = L.find((E) => E.dataset.state === "checked");
      b ? z(b) : L.length && z(L[0]);
    }
  }
  return oe(T, () => {
    y.value || xe(() => {
      Bt();
    });
  }, { immediate: true, deep: true }), t({ highlightedElement: C, highlightItem: ce, highlightFirstItem: Nt, highlightSelected: Bt, getItems: u }), Ir({ modelValue: T, onValueChange: M, multiple: a, orientation: r, dir: _, disabled: l, highlightOnHover: s, highlightedElement: C, isVirtual: U, virtualFocusHook: N, virtualKeydownHook: P, virtualHighlightHook: F, by: i.by, firstValue: x, selectionBehavior: c, focusable: S, onLeave: ut, onEnter: xn, changeHighlight: z, onKeydownEnter: ke, onKeydownNavigation: Pt, onKeydownTypeAhead: Ie, onCompositionStart: me, onCompositionEnd: yn, highlightFirstItem: Nt }), (A, L) => (D(), V(g(Ee), { ref_key: "primitiveElement", ref: f, as: A.as, "as-child": A.asChild, dir: g(_), "data-disabled": g(l) ? "" : void 0, onPointerleave: ut, onFocusout: L[0] || (L[0] = async (b) => {
    const E = b.relatedTarget || b.target;
    await xe(), C.value && g(p) && !g(p).contains(E) && ut(b);
  }) }, { default: I(() => [le(A.$slots, "default", { modelValue: g(T) }), g(v) && A.name ? (D(), V(g(Er), { key: 0, name: A.name, value: g(T), disabled: g(l), required: A.required }, null, 8, ["name", "value", "disabled", "required"])) : ie("", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), [je, Lr] = Dt("ComboboxRoot"), $r = K({ __name: "ComboboxRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, resetSearchTermOnBlur: { type: Boolean, default: true }, resetSearchTermOnSelect: { type: Boolean, default: true }, ignoreFilter: { type: Boolean }, modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, dir: {}, disabled: { type: Boolean }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "update:open"], setup(e8, { expose: t, emit: n }) {
  var _a2, _b, _c2;
  const i = e8, o = n, { primitiveElement: a, currentElement: s } = ct(), { multiple: r, disabled: l, ignoreFilter: c, resetSearchTermOnSelect: d, dir: u } = Mt(i), h = Yo(u), f = kt(i, "modelValue", o, { defaultValue: i.defaultValue ?? (r.value ? [] : void 0), passive: i.modelValue === void 0, deep: true }), p = kt(i, "open", o, { defaultValue: i.defaultOpen, passive: i.open === void 0 });
  async function m(P) {
    var _a3, _b2;
    p.value = P, U.search = "", P ? (await xe(), (_a3 = a.value) == null ? void 0 : _a3.highlightSelected(), v.value = true) : v.value = false, (_b2 = y.value) == null ? void 0 : _b2.focus(), setTimeout(() => {
      !P && i.resetSearchTermOnBlur && _.trigger();
    }, 1);
  }
  const _ = $t(), v = j(false), x = j(false), y = j(), S = j(), T = B(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.highlightedElement) ?? void 0;
  }), M = j(/* @__PURE__ */ new Map()), C = j(/* @__PURE__ */ new Map()), { contains: W } = Nr({ sensitivity: "base" }), U = Bo({ search: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } });
  function Q() {
    if (!U.search || i.ignoreFilter || x.value) {
      U.filtered.count = M.value.size;
      return;
    }
    U.filtered.groups = /* @__PURE__ */ new Set();
    let P = 0;
    for (const [F, Y] of M.value) {
      const z = W(Y, U.search);
      U.filtered.items.set(F, z ? 1 : 0), z && P++;
    }
    for (const [F, Y] of C.value) for (const z of Y) if (U.filtered.items.get(z) > 0) {
      U.filtered.groups.add(F);
      break;
    }
    U.filtered.count = P;
  }
  oe([() => U.search, () => M.value.size], () => {
    Q();
  }, { immediate: true }), oe(() => p.value, () => {
    xe(() => {
      p.value && Q();
    });
  }, { flush: "post" });
  const N = us();
  return pe(() => {
    var _a3, _b2, _c3;
    (N == null ? void 0 : N.exposed) && (N.exposed.highlightItem = (_a3 = a.value) == null ? void 0 : _a3.highlightItem, N.exposed.highlightFirstItem = (_b2 = a.value) == null ? void 0 : _b2.highlightFirstItem, N.exposed.highlightSelected = (_c3 = a.value) == null ? void 0 : _c3.highlightSelected);
  }), t({ filtered: B(() => U.filtered), highlightedElement: T, highlightItem: (_a2 = a.value) == null ? void 0 : _a2.highlightItem, highlightFirstItem: (_b = a.value) == null ? void 0 : _b.highlightFirstItem, highlightSelected: (_c2 = a.value) == null ? void 0 : _c2.highlightSelected }), Lr({ modelValue: f, multiple: r, disabled: l, open: p, onOpenChange: m, contentId: "", isUserInputted: v, isVirtual: x, inputElement: y, highlightedElement: T, onInputElementChange: (P) => y.value = P, triggerElement: S, onTriggerElementChange: (P) => S.value = P, parentElement: s, resetSearchTermOnSelect: d, onResetSearchTerm: _.on, allItems: M, allGroups: C, filterState: U, ignoreFilter: c }), (P, F) => (D(), V(g(Fs), null, { default: I(() => [R(g(Or), re({ ref_key: "primitiveElement", ref: a }, P.$attrs, { modelValue: g(f), "onUpdate:modelValue": F[0] || (F[0] = (Y) => Ye(f) ? f.value = Y : null), style: { pointerEvents: g(p) ? "auto" : void 0 }, as: P.as, "as-child": P.asChild, dir: g(h), multiple: g(r), name: P.name, required: P.required, disabled: g(l), "highlight-on-hover": true, by: i.by, onHighlight: F[1] || (F[1] = (Y) => o("highlight", Y)) }), { default: I(() => [le(P.$slots, "default", { open: g(p), modelValue: g(f) })]), _: 3 }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])]), _: 3 }));
} }), Ur = K({ __name: "ListboxFilter", props: { modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, o = kt(n, "modelValue", t, { defaultValue: "", passive: n.modelValue === void 0 }), a = sn(), { primitiveElement: s, currentElement: r } = ct(), l = B(() => n.disabled || a.disabled.value || false), c = j();
  return hs(() => {
    var _a2;
    return c.value = (_a2 = a.highlightedElement.value) == null ? void 0 : _a2.id;
  }), pe(() => {
    a.focusable.value = false, setTimeout(() => {
      var _a2;
      n.autoFocus && ((_a2 = r.value) == null ? void 0 : _a2.focus());
    }, 1);
  }), Le(() => {
    a.focusable.value = true;
  }), (d, u) => (D(), V(g(Ee), { ref_key: "primitiveElement", ref: s, as: d.as, "as-child": d.asChild, value: g(o), disabled: l.value ? "" : void 0, "data-disabled": l.value ? "" : void 0, "aria-disabled": l.value ?? void 0, "aria-activedescendant": c.value, type: "text", onKeydown: [ot(We(g(a).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), ot(g(a).onKeydownEnter, ["enter"])], onInput: u[0] || (u[0] = (h) => {
    o.value = h.target.value, g(a).highlightFirstItem(h);
  }), onCompositionstart: g(a).onCompositionStart, onCompositionend: g(a).onCompositionEnd }, { default: I(() => [le(d.$slots, "default", { modelValue: g(o) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
} }), Fr = K({ __name: "ComboboxInput", props: { displayValue: {}, modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, i = t, o = je(), a = sn(), { primitiveElement: s, currentElement: r } = ct(), l = kt(n, "modelValue", i, { passive: n.modelValue === void 0 });
  pe(() => {
    r.value && o.onInputElementChange(r.value);
  });
  function c(h) {
    o.open.value || o.onOpenChange(true);
  }
  function d(h) {
    const f = h.target;
    o.open.value ? o.filterState.search = f.value : (o.onOpenChange(true), xe(() => {
      f.value && (o.filterState.search = f.value, a.highlightFirstItem(h));
    }));
  }
  function u() {
    const h = o.modelValue.value;
    n.displayValue ? l.value = n.displayValue(h) : !o.multiple.value && h && !Array.isArray(h) && typeof h != "object" ? l.value = h.toString() : l.value = "", xe(() => {
      l.value = l.value;
    });
  }
  return o.onResetSearchTerm(() => {
    u();
  }), oe(o.modelValue, async () => {
    !o.isUserInputted.value && o.resetSearchTermOnSelect.value && u();
  }, { immediate: true, deep: true }), (h, f) => (D(), V(g(Ur), { ref_key: "primitiveElement", ref: s, modelValue: g(l), "onUpdate:modelValue": f[0] || (f[0] = (p) => Ye(l) ? l.value = p : null), as: h.as, "as-child": h.asChild, "auto-focus": h.autoFocus, "aria-expanded": g(o).open.value, "aria-controls": g(o).contentId, "aria-autocomplete": "list", role: "combobox", autocomplete: "false", onInput: d, onKeydown: ot(We(c, ["prevent"]), ["down", "up"]) }, { default: I(() => [le(h.$slots, "default")]), _: 3 }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
} }), Hr = K({ __name: "ComboboxAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { forwardRef: t } = qe();
  return (n, i) => (D(), V(g(Hs), { "as-child": "", reference: n.reference }, { default: I(() => [R(g(Ee), re({ ref: g(t), "as-child": n.asChild, as: n.as }, n.$attrs), { default: I(() => [le(n.$slots, "default")]), _: 3 }, 16, ["as-child", "as"])]), _: 3 }, 8, ["reference"]));
} }), Yr = K({ __name: "ComboboxTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(e8) {
  const t = e8, { forwardRef: n, currentElement: i } = qe(), o = je(), a = B(() => t.disabled || o.disabled.value || false);
  return pe(() => {
    i.value && o.onTriggerElementChange(i.value);
  }), (s, r) => (D(), V(g(Ee), re(t, { ref: g(n), type: s.as === "button" ? "button" : void 0, tabindex: "-1", "aria-label": "Show popup", "aria-haspopup": "listbox", "aria-expanded": g(o).open.value, "aria-controls": g(o).contentId, "data-state": g(o).open.value ? "open" : "closed", disabled: a.value, "data-disabled": a.value ? "" : void 0, "aria-disabled": a.value ?? void 0, onClick: r[0] || (r[0] = (l) => g(o).onOpenChange(!g(o).open.value)) }), { default: I(() => [le(s.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
} }), [Vr, qf] = Dt("ComboboxGroup"), Gr = K({ __name: "ListboxContent", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { CollectionSlot: t } = ei(), n = sn(), i = Ks(false, 10);
  return (o, a) => (D(), V(g(t), null, { default: I(() => [R(g(Ee), { role: "listbox", as: o.as, "as-child": o.asChild, tabindex: g(n).focusable.value ? g(n).highlightedElement.value ? "-1" : "0" : void 0, "aria-orientation": g(n).orientation.value, "aria-multiselectable": !!g(n).multiple.value, "data-orientation": g(n).orientation.value, onMousedown: a[0] || (a[0] = We((s) => i.value = true, ["left"])), onFocus: a[1] || (a[1] = (s) => {
    g(i) || g(n).onEnter(s);
  }), onKeydown: [a[2] || (a[2] = ot(We((s) => {
    g(n).focusable.value && g(n).onKeydownNavigation(s);
  }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])), ot(g(n).onKeydownEnter, ["enter"]), g(n).onKeydownTypeAhead] }, { default: I(() => [le(o.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), [Kr, Wr] = Dt("ComboboxContent"), zr = K({ __name: "ComboboxContentImpl", props: { position: { default: "inline" }, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const n = e8, i = t, { position: o } = Mt(n), a = je(), { forwardRef: s, currentElement: r } = qe();
  qs(n.bodyLock), js(a.parentElement);
  const l = B(() => n.position === "popper" ? n : {}), c = Ys(l.value), d = { boxSizing: "border-box", "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-combobox-content-available-width": "var(--reka-popper-available-width)", "--reka-combobox-content-available-height": "var(--reka-popper-available-height)", "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)", "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)" };
  Wr({ position: o });
  const u = j(false);
  return pe(() => {
    a.inputElement.value && (u.value = r.value.contains(a.inputElement.value), u.value && a.inputElement.value.focus());
  }), Le(() => {
    var _a2;
    u.value && ((_a2 = a.triggerElement.value) == null ? void 0 : _a2.focus());
  }), (h, f) => (D(), V(g(Gr), { "as-child": "" }, { default: I(() => [R(g(Zs), { "as-child": "", "disable-outside-pointer-events": h.disableOutsidePointerEvents, onDismiss: f[0] || (f[0] = (p) => g(a).onOpenChange(false)), onFocusOutside: f[1] || (f[1] = (p) => {
    var _a2;
    ((_a2 = g(a).parentElement.value) == null ? void 0 : _a2.contains(p.target)) && p.preventDefault(), i("focusOutside", p);
  }), onInteractOutside: f[2] || (f[2] = (p) => i("interactOutside", p)), onEscapeKeyDown: f[3] || (f[3] = (p) => i("escapeKeyDown", p)), onPointerDownOutside: f[4] || (f[4] = (p) => {
    var _a2;
    ((_a2 = g(a).parentElement.value) == null ? void 0 : _a2.contains(p.target)) && p.preventDefault(), i("pointerDownOutside", p);
  }) }, { default: I(() => [(D(), V(Io(g(o) === "popper" ? g(Vs) : g(Ee)), re({ ...h.$attrs, ...g(c) }, { id: g(a).contentId, ref: g(s), "data-state": g(a).open.value ? "open" : "closed", style: { display: "flex", flexDirection: "column", outline: "none", ...g(o) === "popper" ? d : {} } }), { default: I(() => [le(h.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "style"]))]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }));
} }), qr = K({ __name: "ComboboxContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const o = Gs(e8, t), { forwardRef: a } = qe(), s = je();
  return s.contentId || (s.contentId = Jn(void 0, "reka-combobox-content")), (r, l) => (D(), V(g(Ws), { present: r.forceMount || g(s).open.value }, { default: I(() => [R(zr, re({ ...g(o), ...r.$attrs }, { ref: g(a) }), { default: I(() => [le(r.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), jr = K({ __name: "ComboboxViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, { forwardRef: n } = qe(), { nonce: i } = Mt(t), o = Ps(i), a = je();
  return (s, r) => (D(), $(Me, null, [R(g(Ee), re({ ...s.$attrs, ...t }, { ref: g(n), "data-reka-combobox-viewport": "", role: "presentation", style: { position: "relative", flex: g(a).isVirtual.value ? void 0 : 1, overflow: "auto" } }), { default: I(() => [le(s.$slots, "default")]), _: 3 }, 16, ["style"]), R(g(Ee), { as: "style", nonce: g(o) }, { default: I(() => r[0] || (r[0] = [ze(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), Zr = "listbox.select", [jf, Xr] = Dt("ListboxItem"), Qr = K({ __name: "ListboxItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, i = t, o = Jn(void 0, "reka-listbox-item"), { CollectionItem: a } = ei(), { forwardRef: s, currentElement: r } = qe(), l = sn(), c = B(() => r.value === l.highlightedElement.value), d = B(() => Pr(l.modelValue.value, n.value, l.by)), u = B(() => l.disabled.value || n.disabled);
  async function h(p) {
    i("select", p), !(p == null ? void 0 : p.defaultPrevented) && !u.value && p && (l.onValueChange(n.value), l.changeHighlight(r.value));
  }
  function f(p) {
    const m = { originalEvent: p, value: n.value };
    Xs(Zr, h, m);
  }
  return Xr({ isSelected: d }), (p, m) => (D(), V(g(a), { value: p.value }, { default: I(() => [ds([c.value, d.value], () => R(g(Ee), re({ id: g(o) }, p.$attrs, { ref: g(s), role: "option", tabindex: g(l).focusable.value ? c.value ? "0" : "-1" : -1, "aria-selected": d.value, as: p.as, "as-child": p.asChild, disabled: u.value ? "" : void 0, "data-disabled": u.value ? "" : void 0, "data-highlighted": c.value ? "" : void 0, "data-state": d.value ? "checked" : "unchecked", onClick: f, onKeydown: ot(We(f, ["prevent"]), ["space"]), onPointermove: m[0] || (m[0] = (_) => {
    g(l).highlightedElement.value !== g(r) && (g(l).highlightOnHover.value ? g(l).changeHighlight(g(r), false) : g(l).focusable.value || g(l).changeHighlight(g(r), false));
  }) }), { default: I(() => [le(p.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), m, 1)]), _: 3 }, 8, ["value"]));
} }), Jr = K({ __name: "ComboboxItem", props: { textValue: {}, value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, i = t, o = Jn(void 0, "reka-combobox-item"), a = je(), s = Vr(null), { primitiveElement: r, currentElement: l } = ct();
  if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
  const c = B(() => {
    if (a.isVirtual.value || a.ignoreFilter.value || !a.filterState.search) return true;
    {
      const d = a.filterState.filtered.items.get(o);
      return d === void 0 ? true : d > 0;
    }
  });
  return pe(() => {
    var _a2;
    a.allItems.value.set(o, n.textValue || l.value.textContent || l.value.innerText);
    const d = s == null ? void 0 : s.id;
    d && (a.allGroups.value.has(d) ? (_a2 = a.allGroups.value.get(d)) == null ? void 0 : _a2.add(o) : a.allGroups.value.set(d, /* @__PURE__ */ new Set([o])));
  }), Le(() => {
    a.allItems.value.delete(o);
  }), (d, u) => c.value ? (D(), V(g(Qr), re({ key: 0 }, n, { id: g(o), ref_key: "primitiveElement", ref: r, onSelect: u[0] || (u[0] = (h) => {
    i("select", h), !h.defaultPrevented && (g(a).multiple.value || (h.preventDefault(), g(a).onOpenChange(false), g(a).modelValue.value = n.value));
  }) }), { default: I(() => [le(d.$slots, "default", {}, () => [ze(se(d.value), 1)])]), _: 3 }, 16, ["id"])) : ie("", true);
} }), el = K({ __name: "ComboboxArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(e8) {
  const t = e8, n = je(), i = Kr();
  return qe(), (o, a) => g(n).open.value && g(i).position.value === "popper" ? (D(), V(g(Qs), Xn(re({ key: 0 }, t)), { default: I(() => [le(o.$slots, "default")]), _: 3 }, 16)) : ie("", true);
} }), tl = { "bg-blue-s3": "", relative: "" }, nl = { key: 0, left: "50%", absolute: "", "bottom-0": "", "max-w-full": "" }, il = { flex: "~ col lg:row justify-between gap-x-32", relative: "", "w-full": "", "f-mt-md": "", "lg:bottom--60": "" }, ol = { flex: "~ col sm:items-center lg:items-start" }, al = K({ __name: "TwoColumn", props: { primary: {} }, setup(e8) {
  return (t, n) => {
    const i = Oo, o = Uo, a = Qn, s = en;
    return D(), $("section", tl, [t.primary.backgroundImage ? (D(), $("div", nl, [R(i, { field: t.primary.backgroundImage }, null, 8, ["field"])])) : ie("", true), R(o, { headline: t.primary.headline, subline: t.primary.subline, "children:text-white": "" }, null, 8, ["headline", "subline"]), k("div", il, [k("div", ol, [R(a, { wrapper: "div", field: t.primary.text, class: "nq-prose-compact px-0" }, null, 8, ["field"]), R(s, { "internal-component": "a", field: t.primary.linkHref, "nq-arrow": "", "nq-pill-tertiary": "" }, { default: I(() => [ze(se(t.primary.linkLabel), 1)]), _: 1 }, 8, ["field"])]), R(i, { field: t.primary.image, relative: "", "mx-auto": "", "drop-shadow-xl": "", "lg:mr-0": "" }, null, 8, ["field"])])]);
  };
} }), sl = Object.assign(al, { __name: "HeroTwoColumn" }), rl = { viewBox: "0 0 977 362", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, ll = { class: "marker-group" }, cl = ["width"], ul = ["width", "x", "y"], hl = ["width", "x", "y"], dl = ["x", "y"], fl = { class: "small-marker-group" }, pl = ["width", "x", "y"], ml = ["width", "x", "y"], Ui = 160, ft = 120, gl = K({ __name: "Map", setup(e8) {
  const t = [{ id: "europe", x: 350, y: -175, width: Ui, text: "2000" }, { id: "australia", x: 800, y: 70, width: Ui, text: "250" }], n = [{ id: "1", x: -5, y: 3, width: ft }, { id: "2", x: 115, y: -94, width: ft }, { id: "3", x: 162, y: 41, width: ft }, { id: "4", x: 306, y: -43, width: ft }, { id: "5", x: 594, y: -65, width: ft }], i = j(false), o = j(true);
  return pe(() => {
    setTimeout(() => {
      i.value = true, setTimeout(() => {
        o.value = false;
      }, 1e3);
    }, 100);
  }), (a, s) => {
    const r = Fo;
    return D(), $("div", { class: ye([{ visible: i.value, delayed: o.value }, "map"]) }, [R(r, { class: "base-map", src: "/assets/images/home-hero/map.svg", alt: "World map" }), (D(), $("svg", rl, [s[0] || (s[0] = Ri('<g class="green-group europe" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-9e2c78cc><path d="M432.199 67.438c.084.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.627-1.355-.084-.847 1.017-1.61 2.372-1.694 1.61-.085 2.627.508 2.627 1.355Z" data-v-9e2c78cc></path><path d="M432.453 71.758c.084.848-1.017 1.61-2.372 1.695-1.356.084-2.542-.508-2.627-1.356-.084-.847 1.017-1.61 2.372-1.694 1.441 0 2.627.593 2.627 1.355Z" data-v-9e2c78cc></path><path d="M439.145 67.1c.084.846-1.017 1.609-2.457 1.694-1.355.084-2.541-.509-2.626-1.44-.085-.848 1.016-1.61 2.457-1.695 1.609-.085 2.626.508 2.626 1.44Z" data-v-9e2c78cc></path><path d="M425.167 67.947c.085.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.457-1.356-.085-.847 1.017-1.609 2.372-1.694 1.186-.17 2.372.424 2.457 1.356Z" data-v-9e2c78cc></path><path d="M432.114 62.949c.085.847-1.017 1.61-2.457 1.694-1.355.085-2.372-.508-2.457-1.356-.084-.847 1.017-1.61 2.457-1.694 1.186-.085 2.372.508 2.457 1.356Z" data-v-9e2c78cc></path></g><g class="green-group australia" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-9e2c78cc><path d="M882.026 318.444c.085 1.016-.932 1.271-2.372.678-1.44-.593-2.795-1.864-2.88-2.796-.085-1.016.932-1.271 2.372-.678 1.44.593 2.711 1.779 2.88 2.796Z" data-v-9e2c78cc></path><path d="M874.571 315.479c.085 1.016-.931 1.271-2.371.762-1.441-.593-2.796-1.779-2.881-2.795-.084-1.017.932-1.271 2.372-.763 1.44.593 2.626 1.779 2.88 2.796Z" data-v-9e2c78cc></path><path d="M882.789 323.527c.085 1.016-.932 1.27-2.372.677s-2.711-1.863-2.88-2.795c-.085-1.017.931-1.271 2.372-.678 1.524.593 2.795 1.864 2.88 2.796Z" data-v-9e2c78cc></path><path d="M889.396 321.493c.085 1.017-.932 1.271-2.287.763-1.44-.593-2.711-1.864-2.881-2.88-.084-1.017.932-1.271 2.288-.763 1.44.763 2.626 1.949 2.88 2.88Z" data-v-9e2c78cc></path><path d="M881.094 313.361c.085 1.017-.932 1.271-2.287.762-1.355-.508-2.796-1.863-2.88-2.795-.085-1.017.932-1.271 2.287-.763 1.44.678 2.796 1.864 2.88 2.796Z" data-v-9e2c78cc></path></g>', 2)), k("g", ll, [(D(), $(Me, null, Ke(t, (l) => k("g", { key: l.id, class: ye(`marker-${l.id}`), width: l.width }, [k("use", { href: "#marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, ul), k("use", { href: "#marker", width: l.width, x: l.x, y: l.y }, null, 8, hl), k("text", { x: l.x + l.width / 2 - 7, y: l.y + 202 - 18, fill: "#fff", "font-weight": "600", "font-size": "14px" }, se(l.text), 9, dl)], 10, cl)), 64))]), k("g", fl, [(D(), $(Me, null, Ke(n, (l) => k("g", { key: l.id, class: ye(`small-marker-${l.id}`) }, [k("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, pl), k("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y }, null, 8, ml)], 2)), 64))]), s[1] || (s[1] = Ri('<symbol id="marker" viewBox="0 0 158 200" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9e2c78cc><g filter="url(#a)" data-v-9e2c78cc><path d="M119 110.915a8.14 8.14 0 0 1-3.253 6.51l-31.86 23.919a8.14 8.14 0 0 1-9.775 0l-31.86-23.919a8.141 8.141 0 0 1-3.252-6.51V28.801a8.14 8.14 0 0 1 8.14-8.14h63.72A8.14 8.14 0 0 1 119 28.8v82.114Z" fill="url(#b)" data-v-9e2c78cc></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M68.495 67.806a50.212 50.212 0 0 1-5.639 5.595c-2.707 2.301-6.89.8-7.515-2.699-.588-3.296-.377-6.115.34-9.927 1.336-7.109 3.093-12.754 8.412-16.502 3.187-2.245 7.203-1.103 10.536.315 2.722 1.159 5.635 1.159 8.35.009 3.358-1.422 7.427-2.587 10.639-.324 5.319 3.748 7.076 9.393 8.412 16.502.717 3.812.928 6.631.339 9.927-.624 3.498-4.808 5-7.515 2.7a50.222 50.222 0 0 1-5.638-5.596c-4.188-4.884-16.745-4.637-20.721 0Zm.965-17.091c.39 0 .706.315.706.705a3.084 3.084 0 0 0 3.084 3.084.705.705 0 0 1 0 1.41 3.084 3.084 0 0 0-3.084 3.084.705.705 0 0 1-1.41 0 3.083 3.083 0 0 0-3.084-3.084.705.705 0 1 1 0-1.41 3.084 3.084 0 0 0 3.083-3.084c0-.39.316-.705.705-.705Zm20.386-.282a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm-.814 6.494a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Zm-2.475-3.203a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm5.772-.088a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Z" fill="url(#c)" data-v-9e2c78cc></path><path opacity=".8" d="m67.671 98.29-3.09-5.326a1.24 1.24 0 0 0-1.073-.614h-6.182c-.44 0-.849.233-1.07.614l-3.09 5.327c-.221.38-.221.848 0 1.229l3.09 5.326c.221.381.63.615 1.07.615h6.182c.441 0 .85-.234 1.07-.615l3.091-5.326a1.22 1.22 0 0 0 .002-1.23Z" fill="#FEFEFE" data-v-9e2c78cc></path><defs data-v-9e2c78cc><radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-80 0 0 -122.314 119 20.66)" data-v-9e2c78cc><stop stop-color="#41A38E" data-v-9e2c78cc></stop><stop offset="1" stop-color="#21BCA5" data-v-9e2c78cc></stop></radialGradient><radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(26.83723 23.02773 -21.7223 25.31583 60.964 47.636)" data-v-9e2c78cc><stop stop-color="#fff" data-v-9e2c78cc></stop><stop offset="1" stop-color="#fff" stop-opacity=".62" data-v-9e2c78cc></stop></radialGradient><filter id="a" x=".334" y=".31" width="157.331" height="199.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-9e2c78cc><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-9e2c78cc></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="2.035" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="1.272" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31894" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="7.123" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="4.324" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect1_dropShadow_257_31894" result="effect2_dropShadow_257_31894" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="18.315" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="19.333" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect2_dropShadow_257_31894" result="effect3_dropShadow_257_31894" data-v-9e2c78cc></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31894" result="shape" data-v-9e2c78cc></feBlend></filter></defs></symbol><symbol id="small-marker" viewBox="0 0 118 139" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9e2c78cc><g filter="url(#a)" data-v-9e2c78cc><path d="M79.507 65.79a4.109 4.109 0 0 1-1.641 3.285L61.785 81.148a4.109 4.109 0 0 1-4.934 0l-16.08-12.073a4.108 4.108 0 0 1-1.642-3.286V24.343a4.109 4.109 0 0 1 4.109-4.108h32.161c2.27 0 4.109 1.84 4.109 4.108V65.79Z" fill="#21BCA5" data-v-9e2c78cc></path></g><defs data-v-9e2c78cc><filter id="a" x=".717" y=".018" width="117.203" height="138.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-9e2c78cc><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-9e2c78cc></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="2.022" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="1.264" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31717" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="7.076" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="4.296" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect1_dropShadow_257_31717" result="effect2_dropShadow_257_31717" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="18.195" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="19.206" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect2_dropShadow_257_31717" result="effect3_dropShadow_257_31717" data-v-9e2c78cc></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31717" result="shape" data-v-9e2c78cc></feBlend></filter></defs></symbol>', 2))]))], 2);
  };
} }), _l = Object.assign($e(gl, [["__scopeId", "data-v-9e2c78cc"]]), { __name: "HeroMap" }), vl = { class: "dark", relative: "", "mx-0": "", "of-hidden": "", "bg-darkblue": "", "py-0": "", "text-neutral": "", "children:max-w-none": "", "max-md:min-h-auto": "", pt: "148 md:153 lg:160", "min-h": "auto md:100vh lg:110vh", flex: "~ col justify-between" }, yl = { flex: "grow ~ col justify-center", "z-10": "", "children:md:mx-auto": "" }, xl = { "mt-120": "", "max-w-none": "", "w-full": "", flex: "~ justify-center" }, bl = { class: "map-container", relative: "", "z-1": "", w: "80%", "min-w-680": "", "pt-23": "" }, wl = K({ __name: "Home", props: { headline: {}, subHeadlineTemplate: {}, cta: {}, ctaLabel: {} }, setup(e8) {
  const t = e8, { cryptoMapLocationsCount: n } = Cs(), i = wn(fs, { class: "text-blue", to: "https://map.nimiq.com", target: "_blank" }, () => [wn(Rs, { value: n.value || 0, duration: 1300 }), " locations"]), o = B(() => {
    var _a2, _b, _c2, _d2;
    const s = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), r = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return wn("p", {}, [s, i, r]);
  }), a = B(() => {
    var _a2, _b, _c2, _d2;
    const s = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), r = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return `${s} ${n.value} ${r}`;
  });
  return oe(a, () => {
    ms({ title: t.headline.at(0).text, meta: [{ name: "description", content: a.value }] });
  }), (s, r) => {
    const l = ps, c = en, d = Fo, u = Ds;
    return D(), $("section", vl, [k("div", yl, [R(l, { "nq-heading-lg": "", field: s.headline, wrapper: "h1" }, null, 8, ["field"]), (D(), V(Io(g(o)), { text: "neutral-800 f-xl" })), R(c, { "internal-component": "a", field: s.cta, "mt-40": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: I(() => [ze(se(s.ctaLabel), 1)]), _: 1 }, 8, ["field"])]), R(d, { width: "1600", height: "900", src: "/assets/images/gods-light.webp", alt: "Nimiq Gods Rays Background", "pointer-events-none": "", absolute: "", "inset-0": "", "m-0": "", "size-full": "", "blur-60": "", "brightness-80": "" }), r[3] || (r[3] = k("div", { "bg-gradient": "to-b from-darkblue/0 to-darkblue", "pointer-events-none": "", absolute: "", "inset-0": "", "m-0": "", "op-80": "" }, null, -1)), R(u, { "left-100": "", top: "77 sm:112 md:200", style: { "--scale": "1.05" } }), R(u, { "right-80": "", "top-170": "", style: { "--scale": "0.7" } }), R(u, { bottom: "302 md:430", left: "56vw md:30vw", style: { "--scale": "0.92" } }), R(u, { "bottom-460": "", "right-32": "", style: { "--scale": "1" } }), k("div", xl, [k("div", bl, [r[0] || (r[0] = k("div", { class: "ellipse-shape", "z--1": "", "bg-neutral-300": "", "mix-blend-multiply": "", "blur-20": "" }, null, -1)), r[1] || (r[1] = k("div", { class: "ellipse-shape", "z--2": "", "blur-120": "", style: { background: "radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" } }, null, -1)), r[2] || (r[2] = k("div", { class: "ellipse-shape", "z--1": "", "bg-white": "" }, null, -1)), R(_l)])])]);
  };
} }), kl = Object.assign($e(wl, [["__scopeId", "data-v-1080a9ea"]]), { __name: "HeroHome" }), Sl = {}, Tl = { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 34 41", "w-30": "", "of-visible": "", "text-white": "" };
function Ml(e8, t) {
  return D(), $("svg", Tl, t[0] || (t[0] = [k("g", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "3" }, [k("path", { d: "M2.3 2 17 13 31.8 2", class: "breath-arrow", style: { "--op": "1" } }), k("path", { d: "M2.3 15 17 26l14.8-11", class: "breath-arrow", style: { "--op": "0.7", "--delay": "0.6s" } }), k("path", { d: "M2.3 28 17 39l14.8-11", class: "breath-arrow", style: { "--op": "0.4", "--delay": "1.2s" } })], -1)]));
}
const Dl = Object.assign($e(Sl, [["render", Ml], ["__scopeId", "data-v-b09d8c2c"]]), { __name: "AnimatedBreathArrow" }), Cl = { relative: "", "of-x-clip": "", "bg-neutral-0": "", "pb-0": "", "f-p-5xl": "", "max-md:pb-100": "" }, Rl = K({ __name: "Staking", props: { headline: {}, cta: {} }, setup(e8) {
  return (t, n) => {
    const i = Os, o = Ls, a = Dl;
    return D(), $("section", Cl, [R(i, { left: "-100vw lg:-5vw", size: "300vw lg:110vw", absolute: "", "z-0": "", "max-w-none": "", bottom: "10 lg:-300" }), n[0] || (n[0] = k("div", { h: "400 lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "", "bg-neutral-0": "" }, null, -1)), n[1] || (n[1] = k("div", { class: "bg-radial-green", "bg-gradient-fn": "to-b from-white to-", top: "50vh lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "" }, null, -1)), n[2] || (n[2] = k("div", { class: "bg-linear-white-1", top: "20vh lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "" }, null, -1)), n[3] || (n[3] = k("div", { class: "bg-linear-white-2", top: "20vh lg:200", "pointer-events-none": "", absolute: "", "inset-0": "", "z-1": "", "max-w-none": "" }, null, -1)), R(o, { headline: t.headline, cta: t.cta, "show-staking-icon": "", "primary-pill": "", relative: "", "z-2": "" }, null, 8, ["headline", "cta"]), R(a, { hidden: "", "f-m-5xl": "", "md:block": "", "max-md:self-center": "" })]);
  };
} }), Al = Object.assign($e(Rl, [["__scopeId", "data-v-de205f29"]]), { __name: "HeroStaking" }), ue = ["month", "day", "hour", "minute", "second"], Xo = 1e3, Qo = 60 * Xo, Jo = 60 * Qo, ea = 24 * Jo, Fi = { second: Xo, minute: Qo, hour: Jo, day: ea };
class It {
  constructor(t, n = 0) {
    __publicField(this, "_rateLimits");
    __publicField(this, "_usages");
    __publicField(this, "_periodResetTimes");
    __publicField(this, "_periodResetSafetyBuffer");
    __publicField(this, "_pausedUntil", -1);
    __publicField(this, "_timer");
    __publicField(this, "_taskQueue", []);
    this._rateLimits = t, this._periodResetSafetyBuffer = n, this._usages = { parallel: 0 }, this._periodResetTimes = {};
    const i = Date.now();
    for (const o of ue) this._usages[o] = 0, this._periodResetTimes[o] = this._calculatePeriodResetTime(o, i);
    this.setRateLimits(t);
  }
  setRateLimits(t) {
    for (let n = ue.length - 1; n >= 0; --n) {
      const i = ue[n];
      if (!t[i]) continue;
      if ((i !== "month" ? Fi[i] : 28 * ea) - 2 * this._periodResetSafetyBuffer < 200) throw new Error(`Period reset safety buffer too long for ${i} rate limit.`);
      break;
    }
    this._rateLimits = { ...t }, this._startTasks();
  }
  getRateLimits() {
    return { ...this._rateLimits };
  }
  setUsages(t, n = "overwrite") {
    this._updatePeriods(), t = { ...t };
    const i = {}, o = {};
    for (let a = ue.length - 1; a >= 0; --a) {
      const s = ue[a], r = ue[a + 1] ?? ue[ue.length - 1];
      r !== s && typeof t[s] == "number" && t[s] < i[r] && delete t[s], i[s] = Math.max(t[s] ?? 0, i[r] ?? 0);
    }
    for (let a = 0; a < ue.length; ++a) {
      const s = ue[a], r = ue[a - 1] ?? ue[0];
      o[s] = Math.min(t[s] ?? Number.POSITIVE_INFINITY, o[r] ?? Number.POSITIVE_INFINITY);
    }
    for (const a of ue) {
      const s = Math.max(i[a], Math.min(o[a], t[a] ?? this._usages[a]));
      (n === "overwrite" || n === "increase-only" && s > this._usages[a] || n === "decrease-only" && s < this._usages[a]) && (this._usages[a] = s);
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
    return new Promise((i, o) => {
      const a = async () => {
        try {
          i(await t());
        } catch (s) {
          o(s);
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
      const n = ue.find((o) => {
        const a = this._rateLimits[o];
        if (!a) return false;
        const s = this._usages[o] >= a, r = t >= this._periodResetTimes[o] - 2 * this._periodResetSafetyBuffer;
        return s || r;
      });
      if (n) {
        this._timer = setTimeout(() => this._startTasks(), this._periodResetTimes[n] - t);
        return;
      }
      this._usages.parallel += 1;
      for (const o of ue) this._usages[o] += 1;
      this._taskQueue.shift()().finally(() => {
        this._usages.parallel = Math.max(0, this._usages.parallel - 1), this._startTasks();
      });
    }
  }
  _updatePeriods(t = Date.now()) {
    for (const n of ue) t < this._periodResetTimes[n] || (this._usages[n] = 0, this._periodResetTimes[n] = this._calculatePeriodResetTime(n, t));
  }
  _calculatePeriodResetTime(t, n = Date.now()) {
    let i;
    if (n -= this._periodResetSafetyBuffer, t === "month") {
      const o = new Date(n);
      i = Date.UTC(o.getUTCFullYear(), o.getUTCMonth() + 1);
    } else {
      const o = Fi[t];
      i = (Math.floor(n / o) + 1) * o;
    }
    return i + this._periodResetSafetyBuffer;
  }
}
var oi = ((e8) => (e8.CryptoCompare = "CryptoCompare", e8.CryptoCompareLegacy = "CryptoCompareLegacy", e8.CoinGecko = "CoinGecko", e8))(oi || {}), Vt = ((e8) => (e8.NIM = "nim", e8.BTC = "btc", e8.ETH = "eth", e8.USDC = "usdc", e8.USDT = "usdt", e8))(Vt || {}), he = ((e8) => (e8.AED = "aed", e8.AFN = "afn", e8.ALL = "all", e8.AMD = "amd", e8.ANG = "ang", e8.AOA = "aoa", e8.ARS = "ars", e8.AUD = "aud", e8.AWG = "awg", e8.AZN = "azn", e8.BAM = "bam", e8.BBD = "bbd", e8.BDT = "bdt", e8.BGN = "bgn", e8.BHD = "bhd", e8.BIF = "bif", e8.BMD = "bmd", e8.BND = "bnd", e8.BOB = "bob", e8.BRL = "brl", e8.BSD = "bsd", e8.BTN = "btn", e8.BWP = "bwp", e8.BYN = "byn", e8.BZD = "bzd", e8.CAD = "cad", e8.CDF = "cdf", e8.CHF = "chf", e8.CLP = "clp", e8.CNY = "cny", e8.COP = "cop", e8.CRC = "crc", e8.CUP = "cup", e8.CZK = "czk", e8.DJF = "djf", e8.DKK = "dkk", e8.DOP = "dop", e8.DZD = "dzd", e8.EGP = "egp", e8.ERN = "ern", e8.ETB = "etb", e8.EUR = "eur", e8.FJD = "fjd", e8.FKP = "fkp", e8.GBP = "gbp", e8.GEL = "gel", e8.GHS = "ghs", e8.GIP = "gip", e8.GMD = "gmd", e8.GNF = "gnf", e8.GTQ = "gtq", e8.GYD = "gyd", e8.HKD = "hkd", e8.HNL = "hnl", e8.HTG = "htg", e8.HUF = "huf", e8.IDR = "idr", e8.ILS = "ils", e8.INR = "inr", e8.IQD = "iqd", e8.IRR = "irr", e8.ISK = "isk", e8.JMD = "jmd", e8.JOD = "jod", e8.JPY = "jpy", e8.KES = "kes", e8.KGS = "kgs", e8.KHR = "khr", e8.KMF = "kmf", e8.KPW = "kpw", e8.KRW = "krw", e8.KWD = "kwd", e8.KYD = "kyd", e8.KZT = "kzt", e8.LAK = "lak", e8.LBP = "lbp", e8.LKR = "lkr", e8.LRD = "lrd", e8.LSL = "lsl", e8.LYD = "lyd", e8.MAD = "mad", e8.MDL = "mdl", e8.MGA = "mga", e8.MKD = "mkd", e8.MMK = "mmk", e8.MNT = "mnt", e8.MOP = "mop", e8.MRU = "mru", e8.MUR = "mur", e8.MVR = "mvr", e8.MWK = "mwk", e8.MXN = "mxn", e8.MYR = "myr", e8.MZN = "mzn", e8.NAD = "nad", e8.NGN = "ngn", e8.NIO = "nio", e8.NOK = "nok", e8.NPR = "npr", e8.NZD = "nzd", e8.OMR = "omr", e8.PAB = "pab", e8.PEN = "pen", e8.PGK = "pgk", e8.PHP = "php", e8.PKR = "pkr", e8.PLN = "pln", e8.PYG = "pyg", e8.QAR = "qar", e8.RON = "ron", e8.RSD = "rsd", e8.RUB = "rub", e8.RWF = "rwf", e8.SAR = "sar", e8.SBD = "sbd", e8.SCR = "scr", e8.SDG = "sdg", e8.SEK = "sek", e8.SGD = "sgd", e8.SHP = "shp", e8.SOS = "sos", e8.SRD = "srd", e8.SSP = "ssp", e8.STN = "stn", e8.SYP = "syp", e8.SZL = "szl", e8.THB = "thb", e8.TJS = "tjs", e8.TMT = "tmt", e8.TND = "tnd", e8.TOP = "top", e8.TRY = "try", e8.TTD = "ttd", e8.TWD = "twd", e8.TZS = "tzs", e8.UAH = "uah", e8.UGX = "ugx", e8.USD = "usd", e8.UYU = "uyu", e8.UZS = "uzs", e8.VES = "ves", e8.VND = "vnd", e8.VUV = "vuv", e8.WST = "wst", e8.XAF = "xaf", e8.XCD = "xcd", e8.XOF = "xof", e8.XPF = "xpf", e8.YER = "yer", e8.ZAR = "zar", e8.ZMW = "zmw", e8.ZWL = "zwl", e8))(he || {});
const El = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => he[e8]), Nl = ["AUD", "BRL", "CAD", "CHF", "CLP", "CZK", "EUR", "GBP", "HKD", "IDR", "ILS", "JPY", "KES", "KZT", "MXN", "MYR", "NZD", "PEN", "RON", "SGD", "THB", "TRY", "USD"].map((e8) => he[e8]), Pl = ["AED", "AOA", "ARS", "AUD", "BGN", "BRL", "CAD", "CHF", "COP", "CZK", "EUR", "GBP", "GEL", "HKD", "IDR", "ILS", "INR", "JPY", "KRW", "KZT", "MXN", "MYR", "NGN", "NZD", "PHP", "PLN", "RON", "RUB", "SGD", "THB", "TRY", "UAH", "USD", "ZAR"].map((e8) => he[e8]), Hi = Date.parse("2024-11-01"), Bl = ["AED", "ARS", "AUD", "BDT", "BHD", "BMD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "GEL", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "KWD", "LKR", "MMK", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "ZAR"].map((e8) => he[e8]), ta = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => he[e8]), rn = ["CRC"].map((e8) => he[e8]), Il = [...ta, ...rn], na = { crc: "America/Costa_Rica" }, ia = "https://data-api.cryptocompare.com/index/cc", oa = "https://min-api.cryptocompare.com/data";
let aa = "https://api.coingecko.com/api/v3";
const Bn = { nim: "nimiq-2", btc: "bitcoin", eth: "ethereum", usdc: "usd-coin", usdt: "tether" }, Ol = 1e3, nt = 60 * Ol, ai = 60 * nt, _t = 24 * ai, Ll = /* @__PURE__ */ new Map();
async function $l(e8, t, n = "CryptoCompare") {
  e8 = e8.map((c) => c.toLowerCase()), t = t.map((c) => c.toLowerCase());
  const i = [], o = [];
  for (const c of t) if (at(c, n, "current")) i.push(c);
  else if (sa(c, n, "current")) o.push(c);
  else throw new Error(`Currency ${c} not supported for provider ${n}.`);
  let a;
  if (o.length) {
    a = Vl(o);
    const c = "usd";
    if (!at(c, n, "current")) throw new Error(`${n} can not bridge via USD`);
    i.includes(c) || i.push(c);
  }
  let s;
  switch (n) {
    case "CryptoCompare":
      s = (async () => {
        const c = e8.flatMap((f) => t.map((p) => `${f.toUpperCase()}-${p.toUpperCase()}`)), d = 50, u = [];
        for (let f = 0; f < c.length; f += d) {
          const p = c.slice(f, Math.min(c.length, f + d));
          u.push(Ae(`${ia}/v1/latest/tick?market=cadli&instruments=${p.join(",")}&groups=VALUE&apply_mapping=false`, n).then(({ Data: m }) => m));
        }
        const h = {};
        for (const f of await Promise.all(u)) for (const [p, { VALUE: m }] of Object.entries(f)) {
          const [_, v] = p.split("-").map((x) => x.toLowerCase());
          h[_] || (h[_] = {}), h[_][v] = m;
        }
        return h;
      })();
      break;
    case "CryptoCompareLegacy":
      s = (async () => {
        const d = [];
        for (let h = 0; h < i.length; h += 25) {
          const f = i.slice(h, Math.min(i.length, h + 25));
          d.push(Ae(`${oa}/pricemulti?fsyms=${e8.join(",")}&tsyms=${f.join(",")}`, n));
        }
        const u = {};
        for (const h of await Promise.all(d)) for (const [f, p] of Object.entries(h)) {
          const m = f.toLowerCase();
          for (const [_, v] of Object.entries(p)) {
            const x = _.toLowerCase();
            u[m] || (u[m] = {}), u[m][x] = v;
          }
        }
        return u;
      })();
      break;
    case "CoinGecko": {
      const c = e8.map((d) => Bn[d]);
      s = Ae(`${aa}/simple/price?ids=${c.join(",")}&vs_currencies=${i.join(",")}`, n).then((d) => e8.reduce((u, h) => ({ ...u, [h]: d[Bn[h]] }), {}));
      break;
    }
    default:
      throw new Error(`Unsupported provider ${n}`);
  }
  const [r, l] = await Promise.all([s, a]);
  for (const [c, d] of Object.entries(l || {})) for (const u of Object.values(r)) {
    const h = u.usd;
    u[c] = d && h ? d * h : void 0;
  }
  return r;
}
async function Gt(e8, t, n, i, o = "CryptoCompare", a = {}) {
  if (o === "CryptoCompareLegacy" && e8 === "nim" && i >= Hi) throw new Error(`The legacy API only supports historic rates for NIM before ${new Date(Hi)}.`);
  const s = t;
  let r, l;
  if (sa(t, o, "historic") && !at(t, o, "historic")) {
    r = t, l = ra(r, n, i);
    const p = "usd";
    if (!at(p, o, "historic")) throw new Error(`${o} can not bridge via USD`);
    t = p;
  }
  n = Math.floor(n / 1e3), i = Math.ceil(i / 1e3);
  let c = 0, d;
  switch (o) {
    case "CryptoCompare":
      d = (async () => {
        const p = `${e8.toUpperCase()}-${t.toUpperCase()}`, { interval: m, aggregate: _, aggregatedIntervalTime: v } = In(a);
        let x = [], y = i;
        try {
          for (; y >= n; ) {
            const S = Math.min(Math.floor(2e3 / _), Math.ceil((y - n) * 1e3 / v) + 1), { Data: T } = await Ae(`${ia}/v1/historical/${m}?market=cadli&groups=OHLC&fill=false&apply_mapping=false&instrument=${p}&to_ts=${y}&limit=${S}` + (_ !== 1 ? `&aggregate=${_}` : ""), o), M = [];
            for (const { TIMESTAMP: C, OPEN: W } of T) C < n || M.push([C * 1e3, W]);
            x = M.concat(x), y = T[0].TIMESTAMP - 1;
          }
        } catch (S) {
          const T = S instanceof Error && S.message.includes("was not trading") && Fe(S.cause) && "other_info" in S.cause && Fe(S.cause.other_info) && "first" in S.cause.other_info && typeof S.cause.other_info.first == "number" ? S.cause.other_info.first : void 0;
          if (T) c = Math.min(T - (x.length ? 1 : 0), i);
          else throw S;
        }
        return x;
      })();
      break;
    case "CryptoCompareLegacy":
      e8 === "nim" && t === "usd" && (t = "usdt"), d = (async () => {
        const { interval: p, aggregate: m, aggregatedIntervalTime: _ } = In(a);
        let v = [], x = i;
        for (; x >= n; ) {
          const y = Math.min(Math.floor(2e3 / m), Math.ceil((x - n) * 1e3 / _) + 1) - 1, { Data: { TimeFrom: S, Data: T } } = await Ae(`${oa}/v2/histo${p.replace(/s$/, "")}?fsym=${e8}&tsym=${t}&toTs=${x}&limit=${y}` + (m !== 1 ? `&aggregate=${m}` : ""), o), M = [];
          for (const { time: C, open: W } of T) C < n || M.push([C * 1e3, W]);
          v = M.concat(v), x = S - 1;
        }
        return v;
      })();
      break;
    case "CoinGecko": {
      const p = Bn[e8.toLowerCase()];
      d = Ae(`${aa}/coins/${p}/market_chart/range?vs_currency=${t}&from=${n}&to=${i}`, o).then(({ prices: m }) => m);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${o}`);
  }
  const [u, h] = await Promise.all([d, l]);
  let f = u;
  return r && h && (f = u.map(([p, m]) => {
    const _ = On(p, na[r]), v = h[_];
    return v ? [p, m * v] : null;
  }).filter((p) => p !== null)), c && Yl(s, "CryptoCompareLegacy") && (f = (await Gt(e8, s, n * 1e3, c * 1e3, "CryptoCompareLegacy", a)).concat(f)), f;
}
async function Ul(e8, t, n, i = "CryptoCompare", o = {}) {
  const a = /* @__PURE__ */ new Map();
  if (!n.length) return a;
  n.sort((h, f) => h - f);
  const s = "interval" in o || "aggregate" in o ? o : {}, { aggregatedIntervalTime: r } = In(s);
  let l;
  switch (i) {
    case "CryptoCompare":
    case "CryptoCompareLegacy":
      l = await Gt(e8, t, n[0] - r, n[n.length - 1] + r, i, s);
      break;
    case "CoinGecko": {
      const h = Date.now(), f = [];
      let p = n.length - 1;
      if (!("disableMinutelyData" in o ? !!o.disableMinutelyData : false) && h - n[n.length - 1] < _t - 15 * nt) {
        const v = _t - 15 * nt - (h - n[n.length - 1]), { chunk: x, searchEndIndex: y } = Yi(n, p, v, 10 * nt);
        f.push(x), p = y;
      }
      for (; p >= 0; ) {
        const { chunk: v, searchEndIndex: x } = Yi(n, p, 90 * _t, 1.5 * ai);
        f.push(v), p = x;
      }
      const _ = f.map(({ start: v, end: x }) => Gt(e8, t, v, x, i));
      l = (await Promise.all(_)).reduce((v, x) => [...x, ...v], []).sort((v, x) => v[0] - x[0]);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${i}`);
  }
  if (!l.length) return a;
  let c = 0, d = 0;
  const u = Math.max(2 * _t, 2 * r);
  for (; c < n.length; ) {
    const h = n[c];
    for (; d < l.length && l[d][0] < h; ) ++d;
    if (d === 0 || d === l.length) {
      const f = l[Math.min(d, l.length - 1)];
      Math.abs(h - f[0]) < u && h <= Date.now() && a.set(h, f[1]);
    } else {
      const f = l[d - 1], p = l[d], m = p[0] - f[0];
      if (m < u) {
        const _ = p[1] - f[1], v = f[1] + _ * ((h - f[0]) / m);
        a.set(h, v);
      }
    }
    ++c;
  }
  return a;
}
function In(e8) {
  const t = e8.interval || "hours", n = e8.aggregate || 1, i = { minutes: nt, hours: ai, days: _t }[t] * n;
  return { interval: t, aggregate: n, aggregatedIntervalTime: i };
}
function Yi(e8, t, n, i) {
  n -= 2 * i;
  const o = e8[t];
  let a = o, s = t - 1;
  for (; s >= 0 && o - e8[s] < n; ) a = e8[s], --s;
  return { searchEndIndex: s, chunk: { start: a - i, end: o + i } };
}
const Vi = { second: 20, minute: 300, hour: 3e3 }, Fl = { parallel: 1 }, Gi = { CryptoCompare: new It(Vi, 150), CryptoCompareLegacy: new It(Vi, 150), CoinGecko: new It(Fl), unlimited: new It({}) };
async function Ae(e8, t, n) {
  var _a2;
  let i;
  typeof t == "object" ? i = t : n = t;
  const o = n ? Gi[n] : Gi.unlimited;
  let a = null;
  do {
    let s;
    try {
      const u = (i == null ? void 0 : i.headers) instanceof Headers || Array.isArray(i == null ? void 0 : i.headers) ? i.headers : Object.entries((i == null ? void 0 : i.headers) || {}), h = () => fetch(e8, { ...i, headers: [...u, ...Ll] });
      s = await o.schedule(h);
    } catch (u) {
      console.info("FiatApi failed to fetch. Retrying...", u), o.pause(2e4);
      continue;
    }
    const r = s.body ? await s.json() : null;
    let l, c, d;
    if (Fe(r) && ("Err" in r && Fe(r.Err) && "type" in r.Err ? (l = r.Err, c = l.type, d = l.message) : "Response" in r && r.Response === "Error" && (l = r, c = l.Type, d = l.Message)), l && c === 99) {
      console.info(`FiatApi hit CryptoCompare rate limit: ${d}. Retrying...`);
      const u = "Cooldown" in l && l.Cooldown ? l.Cooldown : Number.parseInt(((_a2 = d == null ? void 0 : d.match(/\d+ seconds?/)) == null ? void 0 : _a2[0]) || "", 10), h = "RateLimit" in l ? l.RateLimit : "other_info" in l ? l.other_info : void 0, f = Fe(h) && "calls_made" in h && Fe(h.calls_made) && "max_calls" in h && Fe(h.max_calls) && ["month", "day", "hour", "minute", "second"].every((p) => typeof h.calls_made[p] == "number" && typeof h.max_calls[p] == "number") ? h : void 0;
      if (u) o.pause(u * 1e3);
      else if (f) {
        const p = f.max_calls, m = f.calls_made;
        o.setUsages(m, "increase-only"), (p.day && m.day > p.day || p.month && m.month > p.month) && (p.parallel = 1), delete p.day, delete p.month, o.setRateLimits(p);
      } else {
        console.error("FiatApi got unexpected CryptoCompare rate limit response", r);
        const p = o.getRateLimits(), m = p.minute && p.second ? nt / (p.minute / p.second) : 4e3;
        o.pause(m);
      }
      continue;
    }
    if (c) throw new Error(`FiatApi got CryptoCompare error ${c}: ${d}`, { cause: l });
    if (s.status === 429) {
      console.info(`FiatApi hit ${n || ""} rate limit. Retrying...`), o.pause(15e3);
      continue;
    }
    if (!s.ok) throw new Error(`FiatApi failed to fetch: ${s.status} - ${s.statusText}`);
    if ((n === "CryptoCompare" || n === "CryptoCompareLegacy") && o.getRateLimits().parallel) {
      const u = o.getRateLimits();
      delete u.parallel, o.setRateLimits(u);
    }
    a = r;
  } while (!a);
  return a;
}
function Fe(e8) {
  return !!e8 && typeof e8 == "object";
}
function at(e8, t, n) {
  return { CryptoCompare: El, CryptoCompareLegacy: { current: Nl, historic: Pl }[n], CoinGecko: Bl }[t].includes(e8);
}
function Hl(e8) {
  return Il.includes(e8);
}
function sa(e8, t, n) {
  return Hl(e8) && !at(e8, t, n);
}
function Yl(e8, t) {
  return at(e8, t, "historic") || rn.includes(e8);
}
async function Vl(e8) {
  const t = [], n = rn.filter((a) => e8.includes(a));
  if (n.length) for (const a of n) t.push(ra(a, Date.now()).then((s) => ({ [a]: Object.values(s)[0] })));
  const i = ta.filter((a) => e8.includes(a));
  return i.length && t.push(Ae("https://firestore.googleapis.com/v1/projects/checkout-service/databases/(default)/documents/exchangerates/rates").then((a) => {
    const s = Gl(a);
    return i.reduce((r, l) => ({ ...r, [l]: s[l] }), {});
  })), (await Promise.all(t)).reduce((a, s) => ({ ...a, ...s }));
}
async function ra(e8, t, n = t) {
  if (!rn.includes(e8)) throw new Error(`Unsupported bridgeable currency for historic rates: ${e8}`);
  const i = na[e8], o = On(t, i), a = n === t ? o : On(n, i);
  return Ae(`https://usd-crc-historic-rate.deno.dev/api/rates/${o}/${a}`);
}
function On(e8, t) {
  const i = { "America/Costa_Rica": -6 }[t];
  if (i === void 0) throw new Error(`Unsupported timezone ${t}`);
  const o = new Date(e8);
  return o.setHours(o.getHours() + i), o.toISOString().split("T")[0];
}
function Gl(e8) {
  const t = Kl(e8);
  if (!("rates" in t)) throw new Error("Invalid FirebaseResponse");
  const n = {};
  for (const [i, o] of Object.entries(t.rates)) {
    if (typeof o != "number") throw new Error("Invalid FirebaseResponse");
    n[i.toLowerCase()] = o;
  }
  return n;
}
function Kl(e8) {
  const t = {};
  for (const [n, i] of Object.entries(e8.fields)) t[n] = Wl(i);
  return t;
}
function Wl(e8) {
  if ("mapValue" in e8) {
    const t = {};
    for (const [n, i] of Object.entries(e8.mapValue.fields)) t[n] = Tn(i);
    return t;
  }
  return "arrayValue" in e8 ? e8.arrayValue.values.map((t) => Tn(t)) : Tn(e8);
}
function Tn(e8) {
  if ("doubleValue" in e8) return e8.doubleValue;
  if ("integerValue" in e8) return parseInt(e8.integerValue, 10);
  if ("stringValue" in e8) return e8.stringValue;
  if ("booleanValue" in e8) return e8.booleanValue;
  if ("nullValue" in e8) return null;
  throw new Error("Invalid FirebaseRawPrimitive");
}
const _de = class _de {
  constructor(t, n, i, o) {
    __publicField(this, "code");
    __publicField(this, "symbol");
    __publicField(this, "name");
    __publicField(this, "decimals");
    __publicField(this, "locale");
    if (!_de.CURRENCY_CODE_REGEX.test(t)) throw new Error(`Invalid currency code ${t}`);
    let a, s;
    typeof n == "number" ? a = n : typeof n == "string" ? s = n : typeof n == "object" && ({ decimals: a, name: i, symbol: o, locale: s } = n), this.code = t.toUpperCase();
    const r = this.code.substring(0, 2), l = typeof globalThis.navigator < "u", c = l ? globalThis.navigator.language : "en-US", d = [...s ? [s] : [], ...l ? [`${c.substring(0, 2)}-${r}`] : [], ...l ? [c] : [], "en-US"];
    let u = "DisplayNames" in Intl;
    [this.locale] = u ? Intl.DisplayNames.supportedLocalesOf(d) : Intl.NumberFormat.supportedLocalesOf(d), u && !this.locale && (u = false, [this.locale] = Intl.NumberFormat.supportedLocalesOf(d));
    const h = a === void 0 && i === void 0 && o === void 0, f = `${this.code} ${this.locale}`, p = _de.CACHED_AUTO_GENERATED_CURRENCY_INFOS[f];
    if (h && p) return p;
    let m;
    const _ = { style: "currency", currency: t, useGrouping: false, numberingSystem: "latn" };
    if (i !== void 0) this.name = i;
    else if (p) this.name = p.name;
    else if (u) try {
      this.name = new Intl.DisplayNames(this.locale, { type: "currency" }).of(t);
    } catch {
    }
    if (this.name || (m = _de.failsafeNumberToLocaleString(0, this.locale, { currencyDisplay: "name", ..._ }), this.name = m ? m.replace(_de.NUMBER_REGEX, "").trim() : this.code), o !== void 0) this.symbol = o;
    else if (p) this.symbol = p.symbol;
    else {
      const v = _de.EXTRA_SYMBOLS[this.code];
      if (typeof v == "string") this.symbol = v;
      else if (Array.isArray(v)) {
        const x = this.locale === s && _de.RIGHT_TO_LEFT_DETECTION_REGEX.test(this.name);
        this.symbol = v[x ? 1 : 0];
      } else {
        const x = [...s ? [s] : [], `en-${r}`, "en"], y = _de.failsafeNumberToLocaleString(0, x, { currencyDisplay: "narrowSymbol", ..._ }) || _de.failsafeNumberToLocaleString(0, x, { currencyDisplay: "symbol", ..._ });
        y ? (m = y, this.symbol = m.replace(_de.NUMBER_REGEX, "").trim()) : this.symbol = this.code;
      }
    }
    if (a !== void 0) this.decimals = a;
    else if (p) this.decimals = p.decimals;
    else if (_de.CUSTOM_DECIMAL_LESS_CURRENCIES.has(this.code)) this.decimals = 0;
    else if (m = m || _de.failsafeNumberToLocaleString(0, "en", { currencyDisplay: "code", ..._ }), m) {
      const v = m.match(_de.NUMBER_REGEX);
      this.decimals = v ? (v[1] || "").length : 2;
    } else this.decimals = 2;
    h && (_de.CACHED_AUTO_GENERATED_CURRENCY_INFOS[f] = this);
  }
  static failsafeNumberToLocaleString(t, n, i) {
    try {
      return t.toLocaleString(n, i);
    } catch {
      return null;
    }
  }
};
__publicField(_de, "EXTRA_SYMBOLS", { AED: ["DH", "\u062F.\u0625"], AFN: ["Afs", "\u060B"], ALL: "L", ANG: "\u0192", AWG: "\u0192", BGN: "\u043B\u0432.", BHD: ["BD", ".\u062F.\u0628"], BTN: "Nu.", BYN: "Br", CDF: "Fr", CHF: "Fr.", CVE: "$", DJF: "Fr", DZD: ["DA", "\u062F.\u062C"], EGP: ["\xA3", "\u062C.\u0645"], ETB: "Br", HTG: "G", IQD: ["ID", "\u0639.\u062F"], IRR: ["RI", "\uFDFC"], JOD: ["JD", "\u062F.\u0627"], KES: "Sh", KGS: "\u20C0", KWD: ["KD", "\u062F.\u0643"], LBP: ["LL", "\u0644.\u0644"], LSL: "M", LYD: ["LD", "\u0644.\u062F"], MAD: ["DH", "\u062F\u0631\u0647\u0645"], MDL: "L", MKD: "\u0434\u0435\u043D", MMK: "Ks", MRU: "UM", MVR: ["Rf", ".\u0783"], MZN: "MT", NPR: "\u0930\u0941", OMR: ["R.O.", "\u0631.\u0639."], PAB: "B/.", PEN: "S/", QAR: ["QR", "\u0631.\u0642"], RSD: "\u0434\u0438\u043D.", SAR: ["SR", "\uFDFC"], SDG: ["\xA3SD", "\u062C.\u0633."], SLE: "Le", SOS: "Sh.", TJS: "SM", TMT: "m", TND: ["DT", "\u062F.\u062A"], UZS: "\u0441\u0443\u043C", VED: "Bs.D", VES: "Bs.S", WST: "T", XPF: "\u20A3", YER: ["RI", "\uFDFC"], ZWG: "ZiG", ZWL: "Z$" });
__publicField(_de, "CUSTOM_DECIMAL_LESS_CURRENCIES", /* @__PURE__ */ new Set(["AMD", "AOA", "ARS", "BDT", "BTN", "CDF", "COP", "CRC", "CVE", "CZK", "DOP", "DZD", "GMD", "GYD", "HUF", "IDR", "INR", "JMD", "KES", "KGS", "KHR", "KZT", "LKR", "MAD", "MKD", "MNT", "MOP", "MWK", "MXN", "NGN", "NOK", "NPR", "PHP", "PKR", "RUB", "SEK", "TWD", "TZS", "UAH", "UYU", "UZS", "VES"]));
__publicField(_de, "CACHED_AUTO_GENERATED_CURRENCY_INFOS", {});
__publicField(_de, "CURRENCY_CODE_REGEX", /[A-Z]{3}/i);
__publicField(_de, "NUMBER_REGEX", /\d+(?:\D(\d+))?/);
__publicField(_de, "RIGHT_TO_LEFT_DETECTION_REGEX", /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/);
let de = _de;
function zl(e8, t) {
  const n = Pn(e8, typeof t == "function" ? t() : t), i = gs(e8, () => n.value);
  return oe(i, (o) => {
    n.value = o;
  }, { deep: true }), i;
}
const la = ["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CRC", "CZK", "DKK", "EUR", "GBP", "GMD", "GTQ", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "XOF", "ZAR"], ql = la.map((e8) => he[e8]);
function jl() {
  const e8 = new RegExp("^(\\w+)(?:-\\w{3,4})*(?:-(\\w{2})\\b)?"), n = Ho().value.match(e8);
  if (!n) return he.USD;
  const [, i, o] = n;
  if (o) {
    const s = new RegExp(`^${o}`, "i"), r = ql.find((c) => s.test(c));
    if (r) return r;
    if (/^(?:AT|BE|CY|EE|FI|FR|DE|GR|HR|IE|IT|LV|LT|LU|MT|NL|PT|SK|SI|ES)$/i.test(o)) return he.EUR;
  }
  return i && /^(?:de|fr|nl|el|et|fi|sv|ga|hr|it|lv|lt|lb|mt|sk|sl)$/i.test(i) ? he.EUR : he.USD;
}
function ca() {
  const e8 = zl("user-currency", jl), t = B(() => 1.1), n = Ho(), i = B(() => new de(e8.value, n.value));
  return { currency: e8, currencyUsdRatio: t, currencyInfo: i };
}
const Zl = { "f-text": "12/16", "nq-label": "" }, Xl = { flex: "~ items-center gap-12", "w-full": "", "px-8": "", "py-13": "" }, Ql = { text: "f-sm white/95", "lh-none": "" }, Jl = K({ __name: "CurrencySelector", props: { modelValue: { default: he.USD }, modelModifiers: {} }, emits: ["update:modelValue"], setup(e8) {
  const t = Lo(e8, "modelValue"), { options: n } = i();
  function i() {
    const a = { AED: "i-nimiq-flags:ae-hexagon", AUD: "i-nimiq-flags:au-hexagon", ARS: "i-nimiq-flags:ar-hexagon", BRL: "i-nimiq-flags:br-hexagon", CAD: "i-nimiq-flags:ca-hexagon", CHF: "i-nimiq-flags:ch-hexagon", CLP: "i-nimiq-flags:cl-hexagon", CNY: "i-nimiq-flags:cn-hexagon", CRC: "i-nimiq-flags:cr-hexagon", CZK: "i-nimiq-flags:cz-hexagon", DKK: "i-nimiq-flags:dk-hexagon", EUR: "i-nimiq-flags:eu-hexagon", GBP: "i-nimiq-flags:gb-hexagon", GMD: "i-nimiq-flags:gm-hexagon", GTQ: "i-nimiq-flags:gt-hexagon", HKD: "i-nimiq-flags:hk-hexagon", HUF: "i-nimiq-flags:hu-hexagon", IDR: "i-nimiq-flags:id-hexagon", ILS: "i-nimiq-flags:il-hexagon", INR: "i-nimiq-flags:in-hexagon", JPY: "i-nimiq-flags:jp-hexagon", KRW: "i-nimiq-flags:kr-hexagon", MXN: "i-nimiq-flags:mx-hexagon", MYR: "i-nimiq-flags:my-hexagon", NGN: "i-nimiq-flags:ng-hexagon", NOK: "i-nimiq-flags:no-hexagon", NZD: "i-nimiq-flags:nz-hexagon", PHP: "i-nimiq-flags:ph-hexagon", PKR: "i-nimiq-flags:pk-hexagon", PLN: "i-nimiq-flags:pl-hexagon", RUB: "i-nimiq-flags:ru-hexagon", SEK: "i-nimiq-flags:se-hexagon", SGD: "i-nimiq-flags:sg-hexagon", THB: "i-nimiq-flags:th-hexagon", TRY: "i-nimiq-flags:tr-hexagon", TWD: "i-nimiq-flags:tw-hexagon", UAH: "i-nimiq-flags:ua-hexagon", USD: "i-nimiq-flags:um-hexagon", VND: "i-nimiq-flags:vn-hexagon", XOF: "i-nimiq-flags:sn-hexagon", ZAR: "i-nimiq-flags:za-hexagon" };
    return { options: la.map((r) => ({ value: r, label: r.toLocaleLowerCase(), icon: a[r] })) };
  }
  function o(a) {
    return t.value === a ? "" : a;
  }
  return (a, s) => {
    const r = Yr, l = Hr, c = Fr, d = Jr, u = jr, h = el, f = qr, p = $r;
    return D(), V(p, { modelValue: t.value, "onUpdate:modelValue": s[0] || (s[0] = (m) => t.value = m), relative: "", bg: "transparent hocus:neutral-200" }, { default: I(() => [R(l, { "w-max": "", "inline-flex": "~ items-center justify-between gap-5" }, { default: I(() => [R(r, { flex: "~ gap-3 items-center", "rounded-4": "", "bg-transparent": "", "px-6": "", "py-3": "", "transition-colors": "" }, { default: I(() => [le(a.$slots, "trigger", Xn(_s({ selectedCurrency: t.value })), () => [k("span", Zl, se(t.value.toLocaleUpperCase()), 1), s[1] || (s[1] = k("div", { "size-7": "", "op-60": "", "i-nimiq:triangle-down": "" }, null, -1))])]), _: 3 })]), _: 3 }), R(f, { "will-change": "[opacity,transform]", "reka-top:animate-slidedownandfade": "", "reka-bottom:animate-slide-up-and-fade": "", absolute: "", "top-0": "", "z-10": "", "max-h-256": "", "w-168": "", "of-hidden": "", "overscroll-none": "", "font-normal": "" }, { default: I(() => [R(u, { outline: "1.5 ~ offset--1.5 white/10", "of-y-auto": "", "rounded-4": "", "px-4": "", "pb-4": "", "bg-gradient-neutral": "", flex: "~ col" }, { default: I(() => [k("label", Xl, [s[2] || (s[2] = k("div", { "text-neutral-800": "", "i-nimiq:magnifying-glass": "" }, null, -1)), R(c, { placeholder: "Search", text: "16 white", "w-full": "", "flex-1": "", "bg-transparent": "", "lh-none": "", "outline-none": "", "display-value": o })]), s[3] || (s[3] = k("hr", { "mb-6": "", "h-1.5": "", "w-full": "", "rounded-2": "", border: "white/6" }, null, -1)), (D(true), $(Me, null, Ke(g(n), (m) => (D(), V(d, { key: m.value, value: m.value, flex: "~ items-center gap-8", bg: "hocus:white/10 reka-active:white/10", "rounded-2": "", "p-8": "", "transition-colors": "" }, { default: I(() => [k("div", { class: ye(m.icon), "size-20": "", "shrink-0": "" }, null, 2), k("span", Ql, se(m.value.toLocaleUpperCase()), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }), R(h)]), _: 1 })]), _: 3 }, 8, ["modelValue"]);
  };
} }), ua = Object.assign(Jl, { __name: "CurrencySelector" });
function ha(e8) {
  return e8 === null ? NaN : +e8;
}
const ec = ti(Go), ln = ec.right;
ti(ha).center;
function tc(e8, t) {
  let n, i;
  for (const o of e8) o != null && (n === void 0 ? o >= o && (n = i = o) : (n > o && (n = o), i < o && (i = o)));
  return [n, i];
}
class Ki extends Map {
  constructor(t, n = oc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [i, o] of t) this.set(i, o);
  }
  get(t) {
    return super.get(Wi(this, t));
  }
  has(t) {
    return super.has(Wi(this, t));
  }
  set(t, n) {
    return super.set(nc(this, t), n);
  }
  delete(t) {
    return super.delete(ic(this, t));
  }
}
function Wi({ _intern: e8, _key: t }, n) {
  const i = t(n);
  return e8.has(i) ? e8.get(i) : n;
}
function nc({ _intern: e8, _key: t }, n) {
  const i = t(n);
  return e8.has(i) ? e8.get(i) : (e8.set(i, n), n);
}
function ic({ _intern: e8, _key: t }, n) {
  const i = t(n);
  return e8.has(i) && (n = e8.get(i), e8.delete(i)), n;
}
function oc(e8) {
  return e8 !== null && typeof e8 == "object" ? e8.valueOf() : e8;
}
const ac = Math.sqrt(50), sc = Math.sqrt(10), rc = Math.sqrt(2);
function Kt(e8, t, n) {
  const i = (t - e8) / Math.max(0, n), o = Math.floor(Math.log10(i)), a = i / Math.pow(10, o), s = a >= ac ? 10 : a >= sc ? 5 : a >= rc ? 2 : 1;
  let r, l, c;
  return o < 0 ? (c = Math.pow(10, -o) / s, r = Math.round(e8 * c), l = Math.round(t * c), r / c < e8 && ++r, l / c > t && --l, c = -c) : (c = Math.pow(10, o) * s, r = Math.round(e8 / c), l = Math.round(t / c), r * c < e8 && ++r, l * c > t && --l), l < r && 0.5 <= n && n < 2 ? Kt(e8, t, n * 2) : [r, l, c];
}
function Ln(e8, t, n) {
  if (t = +t, e8 = +e8, n = +n, !(n > 0)) return [];
  if (e8 === t) return [e8];
  const i = t < e8, [o, a, s] = i ? Kt(t, e8, n) : Kt(e8, t, n);
  if (!(a >= o)) return [];
  const r = a - o + 1, l = new Array(r);
  if (i) if (s < 0) for (let c = 0; c < r; ++c) l[c] = (a - c) / -s;
  else for (let c = 0; c < r; ++c) l[c] = (a - c) * s;
  else if (s < 0) for (let c = 0; c < r; ++c) l[c] = (o + c) / -s;
  else for (let c = 0; c < r; ++c) l[c] = (o + c) * s;
  return l;
}
function $n(e8, t, n) {
  return t = +t, e8 = +e8, n = +n, Kt(e8, t, n)[2];
}
function Un(e8, t, n) {
  t = +t, e8 = +e8, n = +n;
  const i = t < e8, o = i ? $n(t, e8, n) : $n(e8, t, n);
  return (i ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function lc(e8, t, n = ha) {
  if (!(!(i = e8.length) || isNaN(t = +t))) {
    if (t <= 0 || i < 2) return +n(e8[0], 0, e8);
    if (t >= 1) return +n(e8[i - 1], i - 1, e8);
    var i, o = (i - 1) * t, a = Math.floor(o), s = +n(e8[a], a, e8), r = +n(e8[a + 1], a + 1, e8);
    return s + (r - s) * (o - a);
  }
}
function* cc(e8) {
  for (const t of e8) yield* t;
}
function uc(e8) {
  return Array.from(cc(e8));
}
function hc(e8, t, n) {
  e8 = +e8, t = +t, n = (o = arguments.length) < 2 ? (t = e8, e8 = 0, 1) : o < 3 ? 1 : +n;
  for (var i = -1, o = Math.max(0, Math.ceil((t - e8) / n)) | 0, a = new Array(o); ++i < o; ) a[i] = e8 + i * n;
  return a;
}
function si(e8, t) {
  return e8 = +e8, t = +t, function(n) {
    return Math.round(e8 * (1 - n) + t * n);
  };
}
function dc(e8, t) {
  t === void 0 && (t = e8, e8 = nn);
  for (var n = 0, i = t.length - 1, o = t[0], a = new Array(i < 0 ? 0 : i); n < i; ) a[n] = e8(o, o = t[++n]);
  return function(s) {
    var r = Math.max(0, Math.min(i - 1, Math.floor(s *= i)));
    return a[r](s - r);
  };
}
const zi = (e8) => +e8;
var q;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(q || (q = {}));
function Se(e8, t) {
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
function da(e8, t) {
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
const qi = Symbol("implicit");
function ri() {
  var e8 = new Ki(), t = [], n = [], i = qi;
  function o(a) {
    let s = e8.get(a);
    if (s === void 0) {
      if (i !== qi) return i;
      e8.set(a, s = t.push(a) - 1);
    }
    return n[s % n.length];
  }
  return o.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e8 = new Ki();
    for (const s of a) e8.has(s) || e8.set(s, t.push(s) - 1);
    return o;
  }, o.range = function(a) {
    return arguments.length ? (n = Array.from(a), o) : n.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (i = a, o) : i;
  }, o.copy = function() {
    return ri(t, n).unknown(i);
  }, Se.apply(o, arguments), o;
}
function li() {
  var e8 = ri().unknown(void 0), t = e8.domain, n = e8.range, i = 0, o = 1, a, s, r = false, l = 0, c = 0, d = 0.5;
  delete e8.unknown;
  function u() {
    var h = t().length, f = o < i, p = f ? o : i, m = f ? i : o;
    a = (m - p) / Math.max(1, h - l + c * 2), r && (a = Math.floor(a)), p += (m - p - a * (h - l)) * d, s = a * (1 - l), r && (p = Math.round(p), s = Math.round(s));
    var _ = hc(h).map(function(v) {
      return p + a * v;
    });
    return n(f ? _.reverse() : _);
  }
  return e8.domain = function(h) {
    return arguments.length ? (t(h), u()) : t();
  }, e8.range = function(h) {
    return arguments.length ? ([i, o] = h, i = +i, o = +o, u()) : [i, o];
  }, e8.rangeRound = function(h) {
    return [i, o] = h, i = +i, o = +o, r = true, u();
  }, e8.bandwidth = function() {
    return s;
  }, e8.step = function() {
    return a;
  }, e8.round = function(h) {
    return arguments.length ? (r = !!h, u()) : r;
  }, e8.padding = function(h) {
    return arguments.length ? (l = Math.min(1, c = +h), u()) : l;
  }, e8.paddingInner = function(h) {
    return arguments.length ? (l = Math.min(1, h), u()) : l;
  }, e8.paddingOuter = function(h) {
    return arguments.length ? (c = +h, u()) : c;
  }, e8.align = function(h) {
    return arguments.length ? (d = Math.max(0, Math.min(1, h)), u()) : d;
  }, e8.copy = function() {
    return li(t(), [i, o]).round(r).paddingInner(l).paddingOuter(c).align(d);
  }, Se.apply(u(), arguments);
}
function fa(e8) {
  var t = e8.copy;
  return e8.padding = e8.paddingOuter, delete e8.paddingInner, delete e8.paddingOuter, e8.copy = function() {
    return fa(t());
  }, e8;
}
function fc() {
  return fa(li.apply(null, arguments).paddingInner(1));
}
function pc(e8) {
  return function() {
    return e8;
  };
}
function Fn(e8) {
  return +e8;
}
var ji = [0, 1];
function fe(e8) {
  return e8;
}
function Hn(e8, t) {
  return (t -= e8 = +e8) ? function(n) {
    return (n - e8) / t;
  } : pc(isNaN(t) ? NaN : 0.5);
}
function mc(e8, t) {
  var n;
  return e8 > t && (n = e8, e8 = t, t = n), function(i) {
    return Math.max(e8, Math.min(t, i));
  };
}
function gc(e8, t, n) {
  var i = e8[0], o = e8[1], a = t[0], s = t[1];
  return o < i ? (i = Hn(o, i), a = n(s, a)) : (i = Hn(i, o), a = n(a, s)), function(r) {
    return a(i(r));
  };
}
function _c(e8, t, n) {
  var i = Math.min(e8.length, t.length) - 1, o = new Array(i), a = new Array(i), s = -1;
  for (e8[i] < e8[0] && (e8 = e8.slice().reverse(), t = t.slice().reverse()); ++s < i; ) o[s] = Hn(e8[s], e8[s + 1]), a[s] = n(t[s], t[s + 1]);
  return function(r) {
    var l = ln(e8, r, 1, i) - 1;
    return a[l](o[l](r));
  };
}
function Rt(e8, t) {
  return t.domain(e8.domain()).range(e8.range()).interpolate(e8.interpolate()).clamp(e8.clamp()).unknown(e8.unknown());
}
function cn() {
  var e8 = ji, t = ji, n = nn, i, o, a, s = fe, r, l, c;
  function d() {
    var h = Math.min(e8.length, t.length);
    return s !== fe && (s = mc(e8[0], e8[h - 1])), r = h > 2 ? _c : gc, l = c = null, u;
  }
  function u(h) {
    return h == null || isNaN(h = +h) ? a : (l || (l = r(e8.map(i), t, n)))(i(s(h)));
  }
  return u.invert = function(h) {
    return s(o((c || (c = r(t, e8.map(i), er)))(h)));
  }, u.domain = function(h) {
    return arguments.length ? (e8 = Array.from(h, Fn), d()) : e8.slice();
  }, u.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, u.rangeRound = function(h) {
    return t = Array.from(h), n = si, d();
  }, u.clamp = function(h) {
    return arguments.length ? (s = h ? true : fe, d()) : s !== fe;
  }, u.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, u.unknown = function(h) {
    return arguments.length ? (a = h, u) : a;
  }, function(h, f) {
    return i = h, o = f, d();
  };
}
function pa() {
  return cn()(fe, fe);
}
function vc(e8) {
  return Math.abs(e8 = Math.round(e8)) >= 1e21 ? e8.toLocaleString("en").replace(/,/g, "") : e8.toString(10);
}
function Wt(e8, t) {
  if ((n = (e8 = t ? e8.toExponential(t - 1) : e8.toExponential()).indexOf("e")) < 0) return null;
  var n, i = e8.slice(0, n);
  return [i.length > 1 ? i[0] + i.slice(2) : i, +e8.slice(n + 1)];
}
function st(e8) {
  return e8 = Wt(Math.abs(e8)), e8 ? e8[1] : NaN;
}
function yc(e8, t) {
  return function(n, i) {
    for (var o = n.length, a = [], s = 0, r = e8[0], l = 0; o > 0 && r > 0 && (l + r + 1 > i && (r = Math.max(1, i - l)), a.push(n.substring(o -= r, o + r)), !((l += r + 1) > i)); ) r = e8[s = (s + 1) % e8.length];
    return a.reverse().join(t);
  };
}
function xc(e8) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e8[+n];
    });
  };
}
var bc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tt(e8) {
  if (!(t = bc.exec(e8))) throw new Error("invalid format: " + e8);
  var t;
  return new ci({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
Tt.prototype = ci.prototype;
function ci(e8) {
  this.fill = e8.fill === void 0 ? " " : e8.fill + "", this.align = e8.align === void 0 ? ">" : e8.align + "", this.sign = e8.sign === void 0 ? "-" : e8.sign + "", this.symbol = e8.symbol === void 0 ? "" : e8.symbol + "", this.zero = !!e8.zero, this.width = e8.width === void 0 ? void 0 : +e8.width, this.comma = !!e8.comma, this.precision = e8.precision === void 0 ? void 0 : +e8.precision, this.trim = !!e8.trim, this.type = e8.type === void 0 ? "" : e8.type + "";
}
ci.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function wc(e8) {
  e: for (var t = e8.length, n = 1, i = -1, o; n < t; ++n) switch (e8[n]) {
    case ".":
      i = o = n;
      break;
    case "0":
      i === 0 && (i = n), o = n;
      break;
    default:
      if (!+e8[n]) break e;
      i > 0 && (i = 0);
      break;
  }
  return i > 0 ? e8.slice(0, i) + e8.slice(o + 1) : e8;
}
var ma;
function kc(e8, t) {
  var n = Wt(e8, t);
  if (!n) return e8 + "";
  var i = n[0], o = n[1], a = o - (ma = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = i.length;
  return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Wt(e8, Math.max(0, t + a - 1))[0];
}
function Zi(e8, t) {
  var n = Wt(e8, t);
  if (!n) return e8 + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Xi = { "%": (e8, t) => (e8 * 100).toFixed(t), b: (e8) => Math.round(e8).toString(2), c: (e8) => e8 + "", d: vc, e: (e8, t) => e8.toExponential(t), f: (e8, t) => e8.toFixed(t), g: (e8, t) => e8.toPrecision(t), o: (e8) => Math.round(e8).toString(8), p: (e8, t) => Zi(e8 * 100, t), r: Zi, s: kc, X: (e8) => Math.round(e8).toString(16).toUpperCase(), x: (e8) => Math.round(e8).toString(16) };
function Qi(e8) {
  return e8;
}
var Ji = Array.prototype.map, eo = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Sc(e8) {
  var t = e8.grouping === void 0 || e8.thousands === void 0 ? Qi : yc(Ji.call(e8.grouping, Number), e8.thousands + ""), n = e8.currency === void 0 ? "" : e8.currency[0] + "", i = e8.currency === void 0 ? "" : e8.currency[1] + "", o = e8.decimal === void 0 ? "." : e8.decimal + "", a = e8.numerals === void 0 ? Qi : xc(Ji.call(e8.numerals, String)), s = e8.percent === void 0 ? "%" : e8.percent + "", r = e8.minus === void 0 ? "\u2212" : e8.minus + "", l = e8.nan === void 0 ? "NaN" : e8.nan + "";
  function c(u) {
    u = Tt(u);
    var h = u.fill, f = u.align, p = u.sign, m = u.symbol, _ = u.zero, v = u.width, x = u.comma, y = u.precision, S = u.trim, T = u.type;
    T === "n" ? (x = true, T = "g") : Xi[T] || (y === void 0 && (y = 12), S = true, T = "g"), (_ || h === "0" && f === "=") && (_ = true, h = "0", f = "=");
    var M = m === "$" ? n : m === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", C = m === "$" ? i : /[%p]/.test(T) ? s : "", W = Xi[T], U = /[defgprs%]/.test(T);
    y = y === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function Q(N) {
      var P = M, F = C, Y, z, ce;
      if (T === "c") F = W(N) + F, N = "";
      else {
        N = +N;
        var ke = N < 0 || 1 / N < 0;
        if (N = isNaN(N) ? l : W(Math.abs(N), y), S && (N = wc(N)), ke && +N == 0 && p !== "+" && (ke = false), P = (ke ? p === "(" ? p : r : p === "-" || p === "(" ? "" : p) + P, F = (T === "s" ? eo[8 + ma / 3] : "") + F + (ke && p === "(" ? ")" : ""), U) {
          for (Y = -1, z = N.length; ++Y < z; ) if (ce = N.charCodeAt(Y), 48 > ce || ce > 57) {
            F = (ce === 46 ? o + N.slice(Y + 1) : N.slice(Y)) + F, N = N.slice(0, Y);
            break;
          }
        }
      }
      x && !_ && (N = t(N, 1 / 0));
      var Ie = P.length + N.length + F.length, me = Ie < v ? new Array(v - Ie + 1).join(h) : "";
      switch (x && _ && (N = t(me + N, me.length ? v - F.length : 1 / 0), me = ""), f) {
        case "<":
          N = P + N + F + me;
          break;
        case "=":
          N = P + me + N + F;
          break;
        case "^":
          N = me.slice(0, Ie = me.length >> 1) + P + N + F + me.slice(Ie);
          break;
        default:
          N = me + P + N + F;
          break;
      }
      return a(N);
    }
    return Q.toString = function() {
      return u + "";
    }, Q;
  }
  function d(u, h) {
    var f = c((u = Tt(u), u.type = "f", u)), p = Math.max(-8, Math.min(8, Math.floor(st(h) / 3))) * 3, m = Math.pow(10, -p), _ = eo[8 + p / 3];
    return function(v) {
      return f(m * v) + _;
    };
  }
  return { format: c, formatPrefix: d };
}
var Ot, ui, ga;
Tc({ thousands: ",", grouping: [3], currency: ["$", ""] });
function Tc(e8) {
  return Ot = Sc(e8), ui = Ot.format, ga = Ot.formatPrefix, Ot;
}
function Mc(e8) {
  return Math.max(0, -st(Math.abs(e8)));
}
function Dc(e8, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(st(t) / 3))) * 3 - st(Math.abs(e8)));
}
function Cc(e8, t) {
  return e8 = Math.abs(e8), t = Math.abs(t) - e8, Math.max(0, st(t) - st(e8)) + 1;
}
function Rc(e8, t, n, i) {
  var o = Un(e8, t, n), a;
  switch (i = Tt(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(e8), Math.abs(t));
      return i.precision == null && !isNaN(a = Dc(o, s)) && (i.precision = a), ga(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(a = Cc(o, Math.max(Math.abs(e8), Math.abs(t)))) && (i.precision = a - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(a = Mc(o)) && (i.precision = a - (i.type === "%") * 2);
      break;
    }
  }
  return ui(i);
}
function Ze(e8) {
  var t = e8.domain;
  return e8.ticks = function(n) {
    var i = t();
    return Ln(i[0], i[i.length - 1], n ?? 10);
  }, e8.tickFormat = function(n, i) {
    var o = t();
    return Rc(o[0], o[o.length - 1], n ?? 10, i);
  }, e8.nice = function(n) {
    n == null && (n = 10);
    var i = t(), o = 0, a = i.length - 1, s = i[o], r = i[a], l, c, d = 10;
    for (r < s && (c = s, s = r, r = c, c = o, o = a, a = c); d-- > 0; ) {
      if (c = $n(s, r, n), c === l) return i[o] = s, i[a] = r, t(i);
      if (c > 0) s = Math.floor(s / c) * c, r = Math.ceil(r / c) * c;
      else if (c < 0) s = Math.ceil(s * c) / c, r = Math.floor(r * c) / c;
      else break;
      l = c;
    }
    return e8;
  }, e8;
}
function _a() {
  var e8 = pa();
  return e8.copy = function() {
    return Rt(e8, _a());
  }, Se.apply(e8, arguments), Ze(e8);
}
function va(e8) {
  var t;
  function n(i) {
    return i == null || isNaN(i = +i) ? t : i;
  }
  return n.invert = n, n.domain = n.range = function(i) {
    return arguments.length ? (e8 = Array.from(i, Fn), n) : e8.slice();
  }, n.unknown = function(i) {
    return arguments.length ? (t = i, n) : t;
  }, n.copy = function() {
    return va(e8).unknown(t);
  }, e8 = arguments.length ? Array.from(e8, Fn) : [0, 1], Ze(n);
}
function ya(e8, t) {
  e8 = e8.slice();
  var n = 0, i = e8.length - 1, o = e8[n], a = e8[i], s;
  return a < o && (s = n, n = i, i = s, s = o, o = a, a = s), e8[n] = t.floor(o), e8[i] = t.ceil(a), e8;
}
function to(e8) {
  return Math.log(e8);
}
function no(e8) {
  return Math.exp(e8);
}
function Ac(e8) {
  return -Math.log(-e8);
}
function Ec(e8) {
  return -Math.exp(-e8);
}
function Nc(e8) {
  return isFinite(e8) ? +("1e" + e8) : e8 < 0 ? 0 : e8;
}
function Pc(e8) {
  return e8 === 10 ? Nc : e8 === Math.E ? Math.exp : (t) => Math.pow(e8, t);
}
function Bc(e8) {
  return e8 === Math.E ? Math.log : e8 === 10 && Math.log10 || e8 === 2 && Math.log2 || (e8 = Math.log(e8), (t) => Math.log(t) / e8);
}
function io(e8) {
  return (t, n) => -e8(-t, n);
}
function Ic(e8) {
  const t = e8(to, no), n = t.domain;
  let i = 10, o, a;
  function s() {
    return o = Bc(i), a = Pc(i), n()[0] < 0 ? (o = io(o), a = io(a), e8(Ac, Ec)) : e8(to, no), t;
  }
  return t.base = function(r) {
    return arguments.length ? (i = +r, s()) : i;
  }, t.domain = function(r) {
    return arguments.length ? (n(r), s()) : n();
  }, t.ticks = (r) => {
    const l = n();
    let c = l[0], d = l[l.length - 1];
    const u = d < c;
    u && ([c, d] = [d, c]);
    let h = o(c), f = o(d), p, m;
    const _ = r == null ? 10 : +r;
    let v = [];
    if (!(i % 1) && f - h < _) {
      if (h = Math.floor(h), f = Math.ceil(f), c > 0) {
        for (; h <= f; ++h) for (p = 1; p < i; ++p) if (m = h < 0 ? p / a(-h) : p * a(h), !(m < c)) {
          if (m > d) break;
          v.push(m);
        }
      } else for (; h <= f; ++h) for (p = i - 1; p >= 1; --p) if (m = h > 0 ? p / a(-h) : p * a(h), !(m < c)) {
        if (m > d) break;
        v.push(m);
      }
      v.length * 2 < _ && (v = Ln(c, d, _));
    } else v = Ln(h, f, Math.min(f - h, _)).map(a);
    return u ? v.reverse() : v;
  }, t.tickFormat = (r, l) => {
    if (r == null && (r = 10), l == null && (l = i === 10 ? "s" : ","), typeof l != "function" && (!(i % 1) && (l = Tt(l)).precision == null && (l.trim = true), l = ui(l)), r === 1 / 0) return l;
    const c = Math.max(1, i * r / t.ticks().length);
    return (d) => {
      let u = d / a(Math.round(o(d)));
      return u * i < i - 0.5 && (u *= i), u <= c ? l(d) : "";
    };
  }, t.nice = () => n(ya(n(), { floor: (r) => a(Math.floor(o(r))), ceil: (r) => a(Math.ceil(o(r))) })), t;
}
function xa() {
  const e8 = Ic(cn()).domain([1, 10]);
  return e8.copy = () => Rt(e8, xa()).base(e8.base()), Se.apply(e8, arguments), e8;
}
function oo(e8) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e8));
  };
}
function ao(e8) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e8;
  };
}
function Oc(e8) {
  var t = 1, n = e8(oo(t), ao(t));
  return n.constant = function(i) {
    return arguments.length ? e8(oo(t = +i), ao(t)) : t;
  }, Ze(n);
}
function ba() {
  var e8 = Oc(cn());
  return e8.copy = function() {
    return Rt(e8, ba()).constant(e8.constant());
  }, Se.apply(e8, arguments);
}
function so(e8) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e8) : Math.pow(t, e8);
  };
}
function Lc(e8) {
  return e8 < 0 ? -Math.sqrt(-e8) : Math.sqrt(e8);
}
function $c(e8) {
  return e8 < 0 ? -e8 * e8 : e8 * e8;
}
function Uc(e8) {
  var t = e8(fe, fe), n = 1;
  function i() {
    return n === 1 ? e8(fe, fe) : n === 0.5 ? e8(Lc, $c) : e8(so(n), so(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, i()) : n;
  }, Ze(t);
}
function hi() {
  var e8 = Uc(cn());
  return e8.copy = function() {
    return Rt(e8, hi()).exponent(e8.exponent());
  }, Se.apply(e8, arguments), e8;
}
function Fc() {
  return hi.apply(null, arguments).exponent(0.5);
}
function wa() {
  var e8 = [], t = [], n = [], i;
  function o() {
    var s = 0, r = Math.max(1, t.length);
    for (n = new Array(r - 1); ++s < r; ) n[s - 1] = lc(e8, s / r);
    return a;
  }
  function a(s) {
    return s == null || isNaN(s = +s) ? i : t[ln(n, s)];
  }
  return a.invertExtent = function(s) {
    var r = t.indexOf(s);
    return r < 0 ? [NaN, NaN] : [r > 0 ? n[r - 1] : e8[0], r < n.length ? n[r] : e8[e8.length - 1]];
  }, a.domain = function(s) {
    if (!arguments.length) return e8.slice();
    e8 = [];
    for (let r of s) r != null && !isNaN(r = +r) && e8.push(r);
    return e8.sort(Go), o();
  }, a.range = function(s) {
    return arguments.length ? (t = Array.from(s), o()) : t.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (i = s, a) : i;
  }, a.quantiles = function() {
    return n.slice();
  }, a.copy = function() {
    return wa().domain(e8).range(t).unknown(i);
  }, Se.apply(a, arguments);
}
function ka() {
  var e8 = 0, t = 1, n = 1, i = [0.5], o = [0, 1], a;
  function s(l) {
    return l != null && l <= l ? o[ln(i, l, 0, n)] : a;
  }
  function r() {
    var l = -1;
    for (i = new Array(n); ++l < n; ) i[l] = ((l + 1) * t - (l - n) * e8) / (n + 1);
    return s;
  }
  return s.domain = function(l) {
    return arguments.length ? ([e8, t] = l, e8 = +e8, t = +t, r()) : [e8, t];
  }, s.range = function(l) {
    return arguments.length ? (n = (o = Array.from(l)).length - 1, r()) : o.slice();
  }, s.invertExtent = function(l) {
    var c = o.indexOf(l);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e8, i[0]] : c >= n ? [i[n - 1], t] : [i[c - 1], i[c]];
  }, s.unknown = function(l) {
    return arguments.length && (a = l), s;
  }, s.thresholds = function() {
    return i.slice();
  }, s.copy = function() {
    return ka().domain([e8, t]).range(o).unknown(a);
  }, Se.apply(Ze(s), arguments);
}
function Sa() {
  var e8 = [0.5], t = [0, 1], n, i = 1;
  function o(a) {
    return a != null && a <= a ? t[ln(e8, a, 0, i)] : n;
  }
  return o.domain = function(a) {
    return arguments.length ? (e8 = Array.from(a), i = Math.min(e8.length, t.length - 1), o) : e8.slice();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), i = Math.min(e8.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(a) {
    var s = t.indexOf(a);
    return [e8[s - 1], e8[s]];
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.copy = function() {
    return Sa().domain(e8).range(t).unknown(n);
  }, Se.apply(o, arguments);
}
const Mn = /* @__PURE__ */ new Date(), Dn = /* @__PURE__ */ new Date();
function ne(e8, t, n, i) {
  function o(a) {
    return e8(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return o.floor = (a) => (e8(a = /* @__PURE__ */ new Date(+a)), a), o.ceil = (a) => (e8(a = new Date(a - 1)), t(a, 1), e8(a), a), o.round = (a) => {
    const s = o(a), r = o.ceil(a);
    return a - s < r - a ? s : r;
  }, o.offset = (a, s) => (t(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a), o.range = (a, s, r) => {
    const l = [];
    if (a = o.ceil(a), r = r == null ? 1 : Math.floor(r), !(a < s) || !(r > 0)) return l;
    let c;
    do
      l.push(c = /* @__PURE__ */ new Date(+a)), t(a, r), e8(a);
    while (c < a && a < s);
    return l;
  }, o.filter = (a) => ne((s) => {
    if (s >= s) for (; e8(s), !a(s); ) s.setTime(s - 1);
  }, (s, r) => {
    if (s >= s) if (r < 0) for (; ++r <= 0; ) for (; t(s, -1), !a(s); ) ;
    else for (; --r >= 0; ) for (; t(s, 1), !a(s); ) ;
  }), n && (o.count = (a, s) => (Mn.setTime(+a), Dn.setTime(+s), e8(Mn), e8(Dn), Math.floor(n(Mn, Dn))), o.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? o.filter(i ? (s) => i(s) % a === 0 : (s) => o.count(0, s) % a === 0) : o)), o;
}
const zt = ne(() => {
}, (e8, t) => {
  e8.setTime(+e8 + t);
}, (e8, t) => t - e8);
zt.every = (e8) => (e8 = Math.floor(e8), !isFinite(e8) || !(e8 > 0) ? null : e8 > 1 ? ne((t) => {
  t.setTime(Math.floor(t / e8) * e8);
}, (t, n) => {
  t.setTime(+t + n * e8);
}, (t, n) => (n - t) / e8) : zt);
zt.range;
const Ce = 1e3, we = Ce * 60, Re = we * 60, Ne = Re * 24, di = Ne * 7, ro = Ne * 30, Cn = Ne * 365, He = ne((e8) => {
  e8.setTime(e8 - e8.getMilliseconds());
}, (e8, t) => {
  e8.setTime(+e8 + t * Ce);
}, (e8, t) => (t - e8) / Ce, (e8) => e8.getUTCSeconds());
He.range;
const fi = ne((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * Ce);
}, (e8, t) => {
  e8.setTime(+e8 + t * we);
}, (e8, t) => (t - e8) / we, (e8) => e8.getMinutes());
fi.range;
const pi = ne((e8) => {
  e8.setUTCSeconds(0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * we);
}, (e8, t) => (t - e8) / we, (e8) => e8.getUTCMinutes());
pi.range;
const mi = ne((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * Ce - e8.getMinutes() * we);
}, (e8, t) => {
  e8.setTime(+e8 + t * Re);
}, (e8, t) => (t - e8) / Re, (e8) => e8.getHours());
mi.range;
const gi = ne((e8) => {
  e8.setUTCMinutes(0, 0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * Re);
}, (e8, t) => (t - e8) / Re, (e8) => e8.getUTCHours());
gi.range;
const At = ne((e8) => e8.setHours(0, 0, 0, 0), (e8, t) => e8.setDate(e8.getDate() + t), (e8, t) => (t - e8 - (t.getTimezoneOffset() - e8.getTimezoneOffset()) * we) / Ne, (e8) => e8.getDate() - 1);
At.range;
const un = ne((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / Ne, (e8) => e8.getUTCDate() - 1);
un.range;
const Ta = ne((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / Ne, (e8) => Math.floor(e8 / Ne));
Ta.range;
function Xe(e8) {
  return ne((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e8) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * we) / di);
}
const hn = Xe(0), qt = Xe(1), Hc = Xe(2), Yc = Xe(3), rt = Xe(4), Vc = Xe(5), Gc = Xe(6);
hn.range;
qt.range;
Hc.range;
Yc.range;
rt.range;
Vc.range;
Gc.range;
function Qe(e8) {
  return ne((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e8) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / di);
}
const dn = Qe(0), jt = Qe(1), Kc = Qe(2), Wc = Qe(3), lt = Qe(4), zc = Qe(5), qc = Qe(6);
dn.range;
jt.range;
Kc.range;
Wc.range;
lt.range;
zc.range;
qc.range;
const _i = ne((e8) => {
  e8.setDate(1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setMonth(e8.getMonth() + t);
}, (e8, t) => t.getMonth() - e8.getMonth() + (t.getFullYear() - e8.getFullYear()) * 12, (e8) => e8.getMonth());
_i.range;
const vi = ne((e8) => {
  e8.setUTCDate(1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCMonth(e8.getUTCMonth() + t);
}, (e8, t) => t.getUTCMonth() - e8.getUTCMonth() + (t.getUTCFullYear() - e8.getUTCFullYear()) * 12, (e8) => e8.getUTCMonth());
vi.range;
const Pe = ne((e8) => {
  e8.setMonth(0, 1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setFullYear(e8.getFullYear() + t);
}, (e8, t) => t.getFullYear() - e8.getFullYear(), (e8) => e8.getFullYear());
Pe.every = (e8) => !isFinite(e8 = Math.floor(e8)) || !(e8 > 0) ? null : ne((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e8) * e8), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e8);
});
Pe.range;
const Be = ne((e8) => {
  e8.setUTCMonth(0, 1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCFullYear(e8.getUTCFullYear() + t);
}, (e8, t) => t.getUTCFullYear() - e8.getUTCFullYear(), (e8) => e8.getUTCFullYear());
Be.every = (e8) => !isFinite(e8 = Math.floor(e8)) || !(e8 > 0) ? null : ne((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e8) * e8), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e8);
});
Be.range;
function Ma(e8, t, n, i, o, a) {
  const s = [[He, 1, Ce], [He, 5, 5 * Ce], [He, 15, 15 * Ce], [He, 30, 30 * Ce], [a, 1, we], [a, 5, 5 * we], [a, 15, 15 * we], [a, 30, 30 * we], [o, 1, Re], [o, 3, 3 * Re], [o, 6, 6 * Re], [o, 12, 12 * Re], [i, 1, Ne], [i, 2, 2 * Ne], [n, 1, di], [t, 1, ro], [t, 3, 3 * ro], [e8, 1, Cn]];
  function r(c, d, u) {
    const h = d < c;
    h && ([c, d] = [d, c]);
    const f = u && typeof u.range == "function" ? u : l(c, d, u), p = f ? f.range(c, +d + 1) : [];
    return h ? p.reverse() : p;
  }
  function l(c, d, u) {
    const h = Math.abs(d - c) / u, f = ti(([, , _]) => _).right(s, h);
    if (f === s.length) return e8.every(Un(c / Cn, d / Cn, u));
    if (f === 0) return zt.every(Math.max(Un(c, d, u), 1));
    const [p, m] = s[h / s[f - 1][2] < s[f][2] / h ? f - 1 : f];
    return p.every(m);
  }
  return [r, l];
}
const [jc, Zc] = Ma(Be, vi, dn, Ta, gi, pi), [Xc, Qc] = Ma(Pe, _i, hn, At, mi, fi);
function Rn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
    return t.setFullYear(e8.y), t;
  }
  return new Date(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
}
function An(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(Date.UTC(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
    return t.setUTCFullYear(e8.y), t;
  }
  return new Date(Date.UTC(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
}
function pt(e8, t, n) {
  return { y: e8, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Jc(e8) {
  var t = e8.dateTime, n = e8.date, i = e8.time, o = e8.periods, a = e8.days, s = e8.shortDays, r = e8.months, l = e8.shortMonths, c = mt(o), d = gt(o), u = mt(a), h = gt(a), f = mt(s), p = gt(s), m = mt(r), _ = gt(r), v = mt(l), x = gt(l), y = { a: ke, A: Ie, b: me, B: yn, c: null, d: po, e: po, f: wu, g: Nu, G: Bu, H: yu, I: xu, j: bu, L: Da, m: ku, M: Su, p: Nt, q: ut, Q: _o, s: vo, S: Tu, u: Mu, U: Du, V: Cu, w: Ru, W: Au, x: null, X: null, y: Eu, Y: Pu, Z: Iu, "%": go }, S = { a: xn, A: Pt, b: bn, B: Bt, c: null, d: mo, e: mo, f: Uu, g: ju, G: Xu, H: Ou, I: Lu, j: $u, L: Ra, m: Fu, M: Hu, p: A, q: L, Q: _o, s: vo, S: Yu, u: Vu, U: Gu, V: Ku, w: Wu, W: zu, x: null, X: null, y: qu, Y: Zu, Z: Qu, "%": go }, T = { a: Q, A: N, b: P, B: F, c: Y, d: ho, e: ho, f: mu, g: uo, G: co, H: fo, I: fo, j: hu, L: pu, m: uu, M: du, p: U, q: cu, Q: _u, s: vu, S: fu, u: ou, U: au, V: su, w: iu, W: ru, x: z, X: ce, y: uo, Y: co, Z: lu, "%": gu };
  y.x = M(n, y), y.X = M(i, y), y.c = M(t, y), S.x = M(n, S), S.X = M(i, S), S.c = M(t, S);
  function M(b, E) {
    return function(O) {
      var w = [], te = -1, Z = 0, ge = b.length, _e, Ue, Ci;
      for (O instanceof Date || (O = /* @__PURE__ */ new Date(+O)); ++te < ge; ) b.charCodeAt(te) === 37 && (w.push(b.slice(Z, te)), (Ue = lo[_e = b.charAt(++te)]) != null ? _e = b.charAt(++te) : Ue = _e === "e" ? " " : "0", (Ci = E[_e]) && (_e = Ci(O, Ue)), w.push(_e), Z = te + 1);
      return w.push(b.slice(Z, te)), w.join("");
    };
  }
  function C(b, E) {
    return function(O) {
      var w = pt(1900, void 0, 1), te = W(w, b, O += "", 0), Z, ge;
      if (te != O.length) return null;
      if ("Q" in w) return new Date(w.Q);
      if ("s" in w) return new Date(w.s * 1e3 + ("L" in w ? w.L : 0));
      if (E && !("Z" in w) && (w.Z = 0), "p" in w && (w.H = w.H % 12 + w.p * 12), w.m === void 0 && (w.m = "q" in w ? w.q : 0), "V" in w) {
        if (w.V < 1 || w.V > 53) return null;
        "w" in w || (w.w = 1), "Z" in w ? (Z = An(pt(w.y, 0, 1)), ge = Z.getUTCDay(), Z = ge > 4 || ge === 0 ? jt.ceil(Z) : jt(Z), Z = un.offset(Z, (w.V - 1) * 7), w.y = Z.getUTCFullYear(), w.m = Z.getUTCMonth(), w.d = Z.getUTCDate() + (w.w + 6) % 7) : (Z = Rn(pt(w.y, 0, 1)), ge = Z.getDay(), Z = ge > 4 || ge === 0 ? qt.ceil(Z) : qt(Z), Z = At.offset(Z, (w.V - 1) * 7), w.y = Z.getFullYear(), w.m = Z.getMonth(), w.d = Z.getDate() + (w.w + 6) % 7);
      } else ("W" in w || "U" in w) && ("w" in w || (w.w = "u" in w ? w.u % 7 : "W" in w ? 1 : 0), ge = "Z" in w ? An(pt(w.y, 0, 1)).getUTCDay() : Rn(pt(w.y, 0, 1)).getDay(), w.m = 0, w.d = "W" in w ? (w.w + 6) % 7 + w.W * 7 - (ge + 5) % 7 : w.w + w.U * 7 - (ge + 6) % 7);
      return "Z" in w ? (w.H += w.Z / 100 | 0, w.M += w.Z % 100, An(w)) : Rn(w);
    };
  }
  function W(b, E, O, w) {
    for (var te = 0, Z = E.length, ge = O.length, _e, Ue; te < Z; ) {
      if (w >= ge) return -1;
      if (_e = E.charCodeAt(te++), _e === 37) {
        if (_e = E.charAt(te++), Ue = T[_e in lo ? E.charAt(te++) : _e], !Ue || (w = Ue(b, O, w)) < 0) return -1;
      } else if (_e != O.charCodeAt(w++)) return -1;
    }
    return w;
  }
  function U(b, E, O) {
    var w = c.exec(E.slice(O));
    return w ? (b.p = d.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function Q(b, E, O) {
    var w = f.exec(E.slice(O));
    return w ? (b.w = p.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function N(b, E, O) {
    var w = u.exec(E.slice(O));
    return w ? (b.w = h.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function P(b, E, O) {
    var w = v.exec(E.slice(O));
    return w ? (b.m = x.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function F(b, E, O) {
    var w = m.exec(E.slice(O));
    return w ? (b.m = _.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function Y(b, E, O) {
    return W(b, t, E, O);
  }
  function z(b, E, O) {
    return W(b, n, E, O);
  }
  function ce(b, E, O) {
    return W(b, i, E, O);
  }
  function ke(b) {
    return s[b.getDay()];
  }
  function Ie(b) {
    return a[b.getDay()];
  }
  function me(b) {
    return l[b.getMonth()];
  }
  function yn(b) {
    return r[b.getMonth()];
  }
  function Nt(b) {
    return o[+(b.getHours() >= 12)];
  }
  function ut(b) {
    return 1 + ~~(b.getMonth() / 3);
  }
  function xn(b) {
    return s[b.getUTCDay()];
  }
  function Pt(b) {
    return a[b.getUTCDay()];
  }
  function bn(b) {
    return l[b.getUTCMonth()];
  }
  function Bt(b) {
    return r[b.getUTCMonth()];
  }
  function A(b) {
    return o[+(b.getUTCHours() >= 12)];
  }
  function L(b) {
    return 1 + ~~(b.getUTCMonth() / 3);
  }
  return { format: function(b) {
    var E = M(b += "", y);
    return E.toString = function() {
      return b;
    }, E;
  }, parse: function(b) {
    var E = C(b += "", false);
    return E.toString = function() {
      return b;
    }, E;
  }, utcFormat: function(b) {
    var E = M(b += "", S);
    return E.toString = function() {
      return b;
    }, E;
  }, utcParse: function(b) {
    var E = C(b += "", true);
    return E.toString = function() {
      return b;
    }, E;
  } };
}
var lo = { "-": "", _: " ", 0: "0" }, ae = /^\s*\d+/, eu = /^%/, tu = /[\\^$*+?|[\]().{}]/g;
function G(e8, t, n) {
  var i = e8 < 0 ? "-" : "", o = (i ? -e8 : e8) + "", a = o.length;
  return i + (a < n ? new Array(n - a + 1).join(t) + o : o);
}
function nu(e8) {
  return e8.replace(tu, "\\$&");
}
function mt(e8) {
  return new RegExp("^(?:" + e8.map(nu).join("|") + ")", "i");
}
function gt(e8) {
  return new Map(e8.map((t, n) => [t.toLowerCase(), n]));
}
function iu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 1));
  return i ? (e8.w = +i[0], n + i[0].length) : -1;
}
function ou(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 1));
  return i ? (e8.u = +i[0], n + i[0].length) : -1;
}
function au(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.U = +i[0], n + i[0].length) : -1;
}
function su(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.V = +i[0], n + i[0].length) : -1;
}
function ru(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.W = +i[0], n + i[0].length) : -1;
}
function co(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 4));
  return i ? (e8.y = +i[0], n + i[0].length) : -1;
}
function uo(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1;
}
function lu(e8, t, n) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return i ? (e8.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1;
}
function cu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 1));
  return i ? (e8.q = i[0] * 3 - 3, n + i[0].length) : -1;
}
function uu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.m = i[0] - 1, n + i[0].length) : -1;
}
function ho(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.d = +i[0], n + i[0].length) : -1;
}
function hu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 3));
  return i ? (e8.m = 0, e8.d = +i[0], n + i[0].length) : -1;
}
function fo(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.H = +i[0], n + i[0].length) : -1;
}
function du(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.M = +i[0], n + i[0].length) : -1;
}
function fu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 2));
  return i ? (e8.S = +i[0], n + i[0].length) : -1;
}
function pu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 3));
  return i ? (e8.L = +i[0], n + i[0].length) : -1;
}
function mu(e8, t, n) {
  var i = ae.exec(t.slice(n, n + 6));
  return i ? (e8.L = Math.floor(i[0] / 1e3), n + i[0].length) : -1;
}
function gu(e8, t, n) {
  var i = eu.exec(t.slice(n, n + 1));
  return i ? n + i[0].length : -1;
}
function _u(e8, t, n) {
  var i = ae.exec(t.slice(n));
  return i ? (e8.Q = +i[0], n + i[0].length) : -1;
}
function vu(e8, t, n) {
  var i = ae.exec(t.slice(n));
  return i ? (e8.s = +i[0], n + i[0].length) : -1;
}
function po(e8, t) {
  return G(e8.getDate(), t, 2);
}
function yu(e8, t) {
  return G(e8.getHours(), t, 2);
}
function xu(e8, t) {
  return G(e8.getHours() % 12 || 12, t, 2);
}
function bu(e8, t) {
  return G(1 + At.count(Pe(e8), e8), t, 3);
}
function Da(e8, t) {
  return G(e8.getMilliseconds(), t, 3);
}
function wu(e8, t) {
  return Da(e8, t) + "000";
}
function ku(e8, t) {
  return G(e8.getMonth() + 1, t, 2);
}
function Su(e8, t) {
  return G(e8.getMinutes(), t, 2);
}
function Tu(e8, t) {
  return G(e8.getSeconds(), t, 2);
}
function Mu(e8) {
  var t = e8.getDay();
  return t === 0 ? 7 : t;
}
function Du(e8, t) {
  return G(hn.count(Pe(e8) - 1, e8), t, 2);
}
function Ca(e8) {
  var t = e8.getDay();
  return t >= 4 || t === 0 ? rt(e8) : rt.ceil(e8);
}
function Cu(e8, t) {
  return e8 = Ca(e8), G(rt.count(Pe(e8), e8) + (Pe(e8).getDay() === 4), t, 2);
}
function Ru(e8) {
  return e8.getDay();
}
function Au(e8, t) {
  return G(qt.count(Pe(e8) - 1, e8), t, 2);
}
function Eu(e8, t) {
  return G(e8.getFullYear() % 100, t, 2);
}
function Nu(e8, t) {
  return e8 = Ca(e8), G(e8.getFullYear() % 100, t, 2);
}
function Pu(e8, t) {
  return G(e8.getFullYear() % 1e4, t, 4);
}
function Bu(e8, t) {
  var n = e8.getDay();
  return e8 = n >= 4 || n === 0 ? rt(e8) : rt.ceil(e8), G(e8.getFullYear() % 1e4, t, 4);
}
function Iu(e8) {
  var t = e8.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + G(t / 60 | 0, "0", 2) + G(t % 60, "0", 2);
}
function mo(e8, t) {
  return G(e8.getUTCDate(), t, 2);
}
function Ou(e8, t) {
  return G(e8.getUTCHours(), t, 2);
}
function Lu(e8, t) {
  return G(e8.getUTCHours() % 12 || 12, t, 2);
}
function $u(e8, t) {
  return G(1 + un.count(Be(e8), e8), t, 3);
}
function Ra(e8, t) {
  return G(e8.getUTCMilliseconds(), t, 3);
}
function Uu(e8, t) {
  return Ra(e8, t) + "000";
}
function Fu(e8, t) {
  return G(e8.getUTCMonth() + 1, t, 2);
}
function Hu(e8, t) {
  return G(e8.getUTCMinutes(), t, 2);
}
function Yu(e8, t) {
  return G(e8.getUTCSeconds(), t, 2);
}
function Vu(e8) {
  var t = e8.getUTCDay();
  return t === 0 ? 7 : t;
}
function Gu(e8, t) {
  return G(dn.count(Be(e8) - 1, e8), t, 2);
}
function Aa(e8) {
  var t = e8.getUTCDay();
  return t >= 4 || t === 0 ? lt(e8) : lt.ceil(e8);
}
function Ku(e8, t) {
  return e8 = Aa(e8), G(lt.count(Be(e8), e8) + (Be(e8).getUTCDay() === 4), t, 2);
}
function Wu(e8) {
  return e8.getUTCDay();
}
function zu(e8, t) {
  return G(jt.count(Be(e8) - 1, e8), t, 2);
}
function qu(e8, t) {
  return G(e8.getUTCFullYear() % 100, t, 2);
}
function ju(e8, t) {
  return e8 = Aa(e8), G(e8.getUTCFullYear() % 100, t, 2);
}
function Zu(e8, t) {
  return G(e8.getUTCFullYear() % 1e4, t, 4);
}
function Xu(e8, t) {
  var n = e8.getUTCDay();
  return e8 = n >= 4 || n === 0 ? lt(e8) : lt.ceil(e8), G(e8.getUTCFullYear() % 1e4, t, 4);
}
function Qu() {
  return "+0000";
}
function go() {
  return "%";
}
function _o(e8) {
  return +e8;
}
function vo(e8) {
  return Math.floor(+e8 / 1e3);
}
var et, Ea, Na;
Ju({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function Ju(e8) {
  return et = Jc(e8), Ea = et.format, et.parse, Na = et.utcFormat, et.utcParse, et;
}
function eh(e8) {
  return new Date(e8);
}
function th(e8) {
  return e8 instanceof Date ? +e8 : +/* @__PURE__ */ new Date(+e8);
}
function yi(e8, t, n, i, o, a, s, r, l, c) {
  var d = pa(), u = d.invert, h = d.domain, f = c(".%L"), p = c(":%S"), m = c("%I:%M"), _ = c("%I %p"), v = c("%a %d"), x = c("%b %d"), y = c("%B"), S = c("%Y");
  function T(M) {
    return (l(M) < M ? f : r(M) < M ? p : s(M) < M ? m : a(M) < M ? _ : i(M) < M ? o(M) < M ? v : x : n(M) < M ? y : S)(M);
  }
  return d.invert = function(M) {
    return new Date(u(M));
  }, d.domain = function(M) {
    return arguments.length ? h(Array.from(M, th)) : h().map(eh);
  }, d.ticks = function(M) {
    var C = h();
    return e8(C[0], C[C.length - 1], M ?? 10);
  }, d.tickFormat = function(M, C) {
    return C == null ? T : c(C);
  }, d.nice = function(M) {
    var C = h();
    return (!M || typeof M.range != "function") && (M = t(C[0], C[C.length - 1], M ?? 10)), M ? h(ya(C, M)) : d;
  }, d.copy = function() {
    return Rt(d, yi(e8, t, n, i, o, a, s, r, l, c));
  }, d;
}
function nh() {
  return Se.apply(yi(Xc, Qc, Pe, _i, hn, At, mi, fi, He, Ea).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function ih() {
  return Se.apply(yi(jc, Zc, Be, vi, dn, un, gi, pi, He, Na).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function oh() {
  var e8 = 0, t = 1, n, i, o, a, s = fe, r = false, l;
  function c(u) {
    return u == null || isNaN(u = +u) ? l : s(o === 0 ? 0.5 : (u = (a(u) - n) * o, r ? Math.max(0, Math.min(1, u)) : u));
  }
  c.domain = function(u) {
    return arguments.length ? ([e8, t] = u, n = a(e8 = +e8), i = a(t = +t), o = n === i ? 0 : 1 / (i - n), c) : [e8, t];
  }, c.clamp = function(u) {
    return arguments.length ? (r = !!u, c) : r;
  }, c.interpolator = function(u) {
    return arguments.length ? (s = u, c) : s;
  };
  function d(u) {
    return function(h) {
      var f, p;
      return arguments.length ? ([f, p] = h, s = u(f, p), c) : [s(0), s(1)];
    };
  }
  return c.range = d(nn), c.rangeRound = d(si), c.unknown = function(u) {
    return arguments.length ? (l = u, c) : l;
  }, function(u) {
    return a = u, n = u(e8), i = u(t), o = n === i ? 0 : 1 / (i - n), c;
  };
}
function Pa(e8, t) {
  return t.domain(e8.domain()).interpolator(e8.interpolator()).clamp(e8.clamp()).unknown(e8.unknown());
}
function Ba() {
  var e8 = Ze(oh()(fe));
  return e8.copy = function() {
    return Pa(e8, Ba());
  }, da.apply(e8, arguments);
}
function ah() {
  var e8 = 0, t = 0.5, n = 1, i = 1, o, a, s, r, l, c = fe, d, u = false, h;
  function f(m) {
    return isNaN(m = +m) ? h : (m = 0.5 + ((m = +d(m)) - a) * (i * m < i * a ? r : l), c(u ? Math.max(0, Math.min(1, m)) : m));
  }
  f.domain = function(m) {
    return arguments.length ? ([e8, t, n] = m, o = d(e8 = +e8), a = d(t = +t), s = d(n = +n), r = o === a ? 0 : 0.5 / (a - o), l = a === s ? 0 : 0.5 / (s - a), i = a < o ? -1 : 1, f) : [e8, t, n];
  }, f.clamp = function(m) {
    return arguments.length ? (u = !!m, f) : u;
  }, f.interpolator = function(m) {
    return arguments.length ? (c = m, f) : c;
  };
  function p(m) {
    return function(_) {
      var v, x, y;
      return arguments.length ? ([v, x, y] = _, c = dc(m, [v, x, y]), f) : [c(0), c(0.5), c(1)];
    };
  }
  return f.range = p(nn), f.rangeRound = p(si), f.unknown = function(m) {
    return arguments.length ? (h = m, f) : h;
  }, function(m) {
    return d = m, o = m(e8), a = m(t), s = m(n), r = o === a ? 0 : 0.5 / (a - o), l = a === s ? 0 : 0.5 / (s - a), i = a < o ? -1 : 1, f;
  };
}
function Ia() {
  var e8 = Ze(ah()(fe));
  return e8.copy = function() {
    return Pa(e8, Ia());
  }, da.apply(e8, arguments);
}
const yo = { scaleLinear: _a, scalePow: hi, scaleSqrt: Fc, scaleLog: xa, scaleSymlog: ba, scaleIdentity: va, scaleTime: nh, scaleUtc: ih, scaleSequential: Ba, scaleDiverging: Ia, scaleQuantize: ka, scaleQuantile: wa, scaleThreshold: Sa, scaleOrdinal: ri, scaleBand: li, scalePoint: fc };
var J;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(J || (J = {}));
var Ge;
(function(e8) {
  e8.West = "west", e8.East = "east", e8.North = "north", e8.South = "south";
})(Ge || (Ge = {}));
const sh = Object.assign(Object.assign({}, tr), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: true, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: Ge.North, preventEmptyDomain: null, scaleByDomain: false });
class rh extends nr {
  constructor(t, n, i) {
    var o, a;
    super(t), this._defaultConfig = sh, this.datamodel = new ir(), this.config = this._defaultConfig, this._clipPathId = or(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = true, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const s = "saturate", r = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", ee`
      --highlight-filter-id: url(${r}#${s}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", s).attr("filterUnits", "objectBoundingBox").html('<feColorMatrix type="saturate" in="SourceGraphic" values="1.35"/>'), n && this.updateContainer(n, true), i && this.setData(i, true), (this.config.xAxis || this.config.yAxis || !((o = this.components) === null || o === void 0) && o.some((l) => l.datamodel.data)) && this.render(), (a = document.fonts) === null || a === void 0 || a.ready.then(() => {
      this._firstRender || this._renderAxes(0);
    });
  }
  get components() {
    return this.config.components;
  }
  get width() {
    const t = this._getMargin();
    return tt(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    const t = this._getMargin();
    return tt(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var i, o, a, s;
    const { components: r, config: l } = this;
    t && (this.datamodel.data = t, r.forEach((c) => {
      c.setData(t);
    }), (i = l.crosshair) === null || i === void 0 || i.setData(t), (o = l.xAxis) === null || o === void 0 || o.setData(t), (a = l.yAxis) === null || a === void 0 || a.setData(t), (s = l.tooltip) === null || s === void 0 || s.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, true), t.xAxis && (this.config.xAxis.config.type = q.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = q.Y, this.element.appendChild(t.yAxis.element));
    for (const s of this.components) this.element.appendChild(s.element);
    const i = t.tooltip;
    i && (i.hasContainer() || i.setContainer(this._container), i.setComponents(this.components));
    const o = t.crosshair;
    o && (o.setContainer(this.svg), o.tooltip = i, this.element.appendChild(o.element));
    const a = t.annotations;
    a && this.element.appendChild(a.element), this.element.appendChild(this._clipPath.node()), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), n || this.render();
  }
  updateComponents(t, n) {
    const { config: i } = this;
    this.components.forEach((o, a) => {
      t[a] && o.setConfig(t[a]);
    }), this._updateScales(...this.components, i.xAxis, i.yAxis, i.crosshair), n || this.render();
  }
  update(t, n, i) {
    i && (this.datamodel.data = i), t && this.updateContainer(t, true), n && this.updateComponents(n, true), this.render();
  }
  _preRender() {
    const { config: t } = this;
    super._preRender(), t.autoMargin && this._setAutoMargin();
    const n = dt([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]);
    for (const i of n) i.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, i, o, a, s;
    const { config: r } = this;
    super._render();
    const l = this._getMargin();
    for (const u of this.components) u.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", u.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", u.clippable ? `url(#${this._clipPathId})` : null), u.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const c = 2;
    this._clipPath.select("rect").attr("x", -2).attr("y", -2).attr("width", this.width + 2 * c).attr("height", this.height + 2 * c), (n = r.tooltip) === null || n === void 0 || n.update();
    const d = r.crosshair;
    if (d) {
      const u = this.components.filter((m) => !m.stacked).map((m) => m.config.y), h = this.components.filter((m) => m.stacked).map((m) => m.config.y), f = (i = this.components.find((m) => m.config.baseline)) === null || i === void 0 ? void 0 : i.config, p = f == null ? void 0 : f.baseline;
      d.accessors = { x: (o = this.components[0]) === null || o === void 0 ? void 0 : o.config.x, y: Ei(u), yStacked: Ei(h), baseline: p }, d.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), d.hide();
    }
    (a = r.annotations) === null || a === void 0 || a.g.attr("transform", `translate(${l.left},${l.top})`), (s = r.annotations) === null || s === void 0 || s.render(), this._firstRender = false;
  }
  _updateScales(...t) {
    const n = dt(t || this.components);
    this._setScales(...n), this._updateScalesDomain(...n), this._updateScalesRange(...n);
  }
  _setScales(...t) {
    const { config: n } = this;
    t && (n.xScale && t.forEach((i) => i.setScale(J.X, n.xScale)), n.yScale && t.forEach((i) => i.setScale(J.Y, n.yScale)));
  }
  _updateScalesDomain(...t) {
    const { config: n } = this;
    if (!t) return;
    const i = t.filter((o) => !o.config.excludeFromDomainCalculation);
    Object.values(J).forEach((o) => {
      var a, s, r, l, c, d, u, h;
      const [f, p] = tc(uc(i.map((T) => T.getDataExtent(o, n.scaleByDomain)))), m = o === J.Y ? n.yDomain : n.xDomain, _ = o === J.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, v = o === J.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, x = (s = (a = m == null ? void 0 : m[0]) !== null && a !== void 0 ? a : f) !== null && s !== void 0 ? s : 0, y = (l = (r = m == null ? void 0 : m[1]) !== null && r !== void 0 ? r : p) !== null && l !== void 0 ? l : 1, S = [tt(x, (c = _ == null ? void 0 : _[0]) !== null && c !== void 0 ? c : Number.NEGATIVE_INFINITY, (d = _ == null ? void 0 : _[1]) !== null && d !== void 0 ? d : Number.POSITIVE_INFINITY), tt(y, (u = v == null ? void 0 : v[0]) !== null && u !== void 0 ? u : Number.NEGATIVE_INFINITY, (h = v == null ? void 0 : v[1]) !== null && h !== void 0 ? h : Number.POSITIVE_INFINITY)];
      if (S[0] === S[1]) {
        const T = i.some((M) => {
          var C;
          return ((C = M.datamodel.data) === null || C === void 0 ? void 0 : C.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!T || o === J.Y)) && (S[1] = S[0] + 1);
      }
      t.forEach((T) => T.setScaleDomain(o, S));
    });
  }
  _updateScalesRange(...t) {
    var n, i, o, a, s, r;
    const { config: l } = this;
    if (!t) return;
    const c = l.yDirection === Ge.South, d = [(n = l.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((i = l.padding.right) !== null && i !== void 0 ? i : 0)], u = [this.height - ((o = l.padding.bottom) !== null && o !== void 0 ? o : 0), (a = l.padding.top) !== null && a !== void 0 ? a : 0];
    c && u.reverse();
    for (const f of t) f.setSize(this.width, this.height, this.containerWidth, this.containerHeight), f.setScaleRange(J.X, (s = l.xRange) !== null && s !== void 0 ? s : d), f.setScaleRange(J.Y, (r = l.yRange) !== null && r !== void 0 ? r : u);
    const h = t.map((f) => f.bleed).reduce((f, p) => {
      for (const m of Object.keys(f)) {
        const _ = m;
        f[_] < p[_] && (f[_] = p[_]);
      }
      return f;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const f of t) f.setScaleRange(J.X, [d[0] + h.left, d[1] - h.right]), f.setScaleRange(J.Y, c ? [u[0] + h.top, u[1] - h.bottom] : [u[0] - h.bottom, u[1] + h.top]);
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: i } } = this, o = this._getMargin();
    dt([n, i]).forEach((s) => {
      const r = s.getOffset(o);
      s.g.attr("transform", `translate(${r.left},${r.top})`), s.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, i = dt([...this.components, t, n]);
    this._setScales(...i), this._updateScalesDomain(...i);
    const o = this._firstRender ? 2 : 1;
    for (let a = 0; a < o; a += 1) {
      const s = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...i), dt([t, n]).forEach((l) => {
        l.preRender();
        const c = l.getRequiredMargin();
        s.top < c.top && (s.top = c.top), s.bottom < c.bottom && (s.bottom = c.bottom), s.left < c.left && (s.left = c.left), s.right < c.right && (s.right = c.right);
      }), this._axisMargin = s;
    }
  }
  _getMargin() {
    const { config: { margin: t } } = this;
    return { top: t.top + this._axisMargin.top, bottom: t.bottom + this._axisMargin.bottom, left: t.left + this._axisMargin.left, right: t.right + this._axisMargin.right };
  }
  destroy() {
    const { components: t, config: { tooltip: n, crosshair: i, annotations: o, xAxis: a, yAxis: s } } = this;
    super.destroy();
    for (const r of t) r == null ? void 0 : r.destroy();
    n == null ? void 0 : n.destroy(), i == null ? void 0 : i.destroy(), o == null ? void 0 : o.destroy(), a == null ? void 0 : a.destroy(), s == null ? void 0 : s.destroy();
  }
}
const Et = Object.assign(Object.assign({}, ar), { x: void 0, y: void 0, id: (e8, t) => {
  var n;
  return (n = e8.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e8) => e8.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: false });
class fn extends sr {
  constructor() {
    super(...arguments), this.datamodel = new rr(), this.clippable = true, this.stacked = false, this._defaultConfig = Et, this._xScale = yo.scaleLinear(), this._yScale = yo.scaleLinear();
  }
  get xScale() {
    return this.config.xScale || this._xScale;
  }
  get yScale() {
    return this.config.yScale || this._yScale;
  }
  setConfig(t) {
    var n, i;
    !((n = this.config) === null || n === void 0) && n.xScale && (t.xScale = this.config.xScale), !((i = this.config) === null || i === void 0) && i.yScale && (t.yScale = this.config.yScale), super.setConfig(t);
  }
  setScaleDomain(t, n) {
    var i, o;
    t === J.X && ((i = this._xScale) === null || i === void 0 || i.domain(n)), t === J.Y && ((o = this._yScale) === null || o === void 0 || o.domain(n));
  }
  setScaleRange(t, n) {
    var i, o;
    t === J.X && ((i = this._xScale) === null || i === void 0 || i.range(n)), t === J.Y && ((o = this._yScale) === null || o === void 0 || o.range(n));
  }
  setScale(t, n) {
    n && t === J.X && (this._xScale = n), n && t === J.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: i, datamodel: o } = this;
    switch (t) {
      case J.X:
        return this.getXDataExtent();
      case J.Y:
        return this.getYDataExtent(n);
      default:
        return Sn(o.data, i[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return Sn(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: i } = this, o = t ? Ko(i.data, this.xScale.domain(), n.x) : i.data, a = St(n.y) ? n.y : [n.y];
    return Sn(o, ...a);
  }
}
function Oa(e8) {
  this._context = e8;
}
Oa.prototype = { areaStart: function() {
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
function xi(e8) {
  return new Oa(e8);
}
function La(e8) {
  return e8[0];
}
function $a(e8) {
  return e8[1];
}
function Ua() {
  var e8 = La, t = $a, n = ve(true), i = null, o = xi, a = null;
  function s(r) {
    var l, c = r.length, d, u = false, h;
    for (i == null && (a = o(h = Wo())), l = 0; l <= c; ++l) !(l < c && n(d = r[l], l, r)) === u && ((u = !u) ? a.lineStart() : a.lineEnd()), u && a.point(+e8(d, l, r), +t(d, l, r));
    if (h) return a = null, h + "" || null;
  }
  return s.x = function(r) {
    return arguments.length ? (e8 = typeof r == "function" ? r : ve(+r), s) : e8;
  }, s.y = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : ve(+r), s) : t;
  }, s.defined = function(r) {
    return arguments.length ? (n = typeof r == "function" ? r : ve(!!r), s) : n;
  }, s.curve = function(r) {
    return arguments.length ? (o = r, i != null && (a = o(i)), s) : o;
  }, s.context = function(r) {
    return arguments.length ? (r == null ? i = a = null : a = o(i = r), s) : i;
  }, s;
}
function lh() {
  var e8 = La, t = null, n = ve(0), i = $a, o = ve(true), a = null, s = xi, r = null;
  function l(d) {
    var u, h, f, p = d.length, m, _ = false, v, x = new Array(p), y = new Array(p);
    for (a == null && (r = s(v = Wo())), u = 0; u <= p; ++u) {
      if (!(u < p && o(m = d[u], u, d)) === _) if (_ = !_) h = u, r.areaStart(), r.lineStart();
      else {
        for (r.lineEnd(), r.lineStart(), f = u - 1; f >= h; --f) r.point(x[f], y[f]);
        r.lineEnd(), r.areaEnd();
      }
      _ && (x[u] = +e8(m, u, d), y[u] = +n(m, u, d), r.point(t ? +t(m, u, d) : x[u], i ? +i(m, u, d) : y[u]));
    }
    if (v) return r = null, v + "" || null;
  }
  function c() {
    return Ua().defined(o).curve(s).context(a);
  }
  return l.x = function(d) {
    return arguments.length ? (e8 = typeof d == "function" ? d : ve(+d), t = null, l) : e8;
  }, l.x0 = function(d) {
    return arguments.length ? (e8 = typeof d == "function" ? d : ve(+d), l) : e8;
  }, l.x1 = function(d) {
    return arguments.length ? (t = d == null ? null : typeof d == "function" ? d : ve(+d), l) : t;
  }, l.y = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : ve(+d), i = null, l) : n;
  }, l.y0 = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : ve(+d), l) : n;
  }, l.y1 = function(d) {
    return arguments.length ? (i = d == null ? null : typeof d == "function" ? d : ve(+d), l) : i;
  }, l.lineX0 = l.lineY0 = function() {
    return c().x(e8).y(n);
  }, l.lineY1 = function() {
    return c().x(e8).y(i);
  }, l.lineX1 = function() {
    return c().x(t).y(n);
  }, l.defined = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : ve(!!d), l) : o;
  }, l.curve = function(d) {
    return arguments.length ? (s = d, a != null && (r = s(a)), l) : s;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = r = null : r = s(a = d), l) : a;
  }, l;
}
function Oe() {
}
function Zt(e8, t, n) {
  e8._context.bezierCurveTo((2 * e8._x0 + e8._x1) / 3, (2 * e8._y0 + e8._y1) / 3, (e8._x0 + 2 * e8._x1) / 3, (e8._y0 + 2 * e8._y1) / 3, (e8._x0 + 4 * e8._x1 + t) / 6, (e8._y0 + 4 * e8._y1 + n) / 6);
}
function pn(e8) {
  this._context = e8;
}
pn.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      Zt(this, this._x1, this._y1);
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
      Zt(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function ch(e8) {
  return new pn(e8);
}
function Fa(e8) {
  this._context = e8;
}
Fa.prototype = { areaStart: Oe, areaEnd: Oe, lineStart: function() {
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
      Zt(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function uh(e8) {
  return new Fa(e8);
}
function Ha(e8) {
  this._context = e8;
}
Ha.prototype = { areaStart: function() {
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
      var n = (this._x0 + 4 * this._x1 + e8) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
      break;
    case 3:
      this._point = 4;
    default:
      Zt(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function hh(e8) {
  return new Ha(e8);
}
function Ya(e8, t) {
  this._basis = new pn(e8), this._beta = t;
}
Ya.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var e8 = this._x, t = this._y, n = e8.length - 1;
  if (n > 0) for (var i = e8[0], o = t[0], a = e8[n] - i, s = t[n] - o, r = -1, l; ++r <= n; ) l = r / n, this._basis.point(this._beta * e8[r] + (1 - this._beta) * (i + l * a), this._beta * t[r] + (1 - this._beta) * (o + l * s));
  this._x = this._y = null, this._basis.lineEnd();
}, point: function(e8, t) {
  this._x.push(+e8), this._y.push(+t);
} };
const dh = function e(t) {
  function n(i) {
    return t === 1 ? new pn(i) : new Ya(i, t);
  }
  return n.beta = function(i) {
    return e(+i);
  }, n;
}(0.85);
function Xt(e8, t, n) {
  e8._context.bezierCurveTo(e8._x1 + e8._k * (e8._x2 - e8._x0), e8._y1 + e8._k * (e8._y2 - e8._y0), e8._x2 + e8._k * (e8._x1 - t), e8._y2 + e8._k * (e8._y1 - n), e8._x2, e8._y2);
}
function bi(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
bi.prototype = { areaStart: function() {
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
      Xt(this, this._x1, this._y1);
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
      Xt(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const fh = function e2(t) {
  function n(i) {
    return new bi(i, t);
  }
  return n.tension = function(i) {
    return e2(+i);
  }, n;
}(0);
function wi(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
wi.prototype = { areaStart: Oe, areaEnd: Oe, lineStart: function() {
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
      Xt(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const ph = function e3(t) {
  function n(i) {
    return new wi(i, t);
  }
  return n.tension = function(i) {
    return e3(+i);
  }, n;
}(0);
function ki(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
ki.prototype = { areaStart: function() {
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
      Xt(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const mh = function e4(t) {
  function n(i) {
    return new ki(i, t);
  }
  return n.tension = function(i) {
    return e4(+i);
  }, n;
}(0);
function Si(e8, t, n) {
  var i = e8._x1, o = e8._y1, a = e8._x2, s = e8._y2;
  if (e8._l01_a > Ni) {
    var r = 2 * e8._l01_2a + 3 * e8._l01_a * e8._l12_a + e8._l12_2a, l = 3 * e8._l01_a * (e8._l01_a + e8._l12_a);
    i = (i * r - e8._x0 * e8._l12_2a + e8._x2 * e8._l01_2a) / l, o = (o * r - e8._y0 * e8._l12_2a + e8._y2 * e8._l01_2a) / l;
  }
  if (e8._l23_a > Ni) {
    var c = 2 * e8._l23_2a + 3 * e8._l23_a * e8._l12_a + e8._l12_2a, d = 3 * e8._l23_a * (e8._l23_a + e8._l12_a);
    a = (a * c + e8._x1 * e8._l23_2a - t * e8._l12_2a) / d, s = (s * c + e8._y1 * e8._l23_2a - n * e8._l12_2a) / d;
  }
  e8._context.bezierCurveTo(i, o, a, s, e8._x2, e8._y2);
}
function Va(e8, t) {
  this._context = e8, this._alpha = t;
}
Va.prototype = { areaStart: function() {
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
    var n = this._x2 - e8, i = this._y2 - t;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
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
      Si(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const gh = function e5(t) {
  function n(i) {
    return t ? new Va(i, t) : new bi(i, 0);
  }
  return n.alpha = function(i) {
    return e5(+i);
  }, n;
}(0.5);
function Ga(e8, t) {
  this._context = e8, this._alpha = t;
}
Ga.prototype = { areaStart: Oe, areaEnd: Oe, lineStart: function() {
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
    var n = this._x2 - e8, i = this._y2 - t;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
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
      Si(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const _h = function e6(t) {
  function n(i) {
    return t ? new Ga(i, t) : new wi(i, 0);
  }
  return n.alpha = function(i) {
    return e6(+i);
  }, n;
}(0.5);
function Ka(e8, t) {
  this._context = e8, this._alpha = t;
}
Ka.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e8, t) {
  if (e8 = +e8, t = +t, this._point) {
    var n = this._x2 - e8, i = this._y2 - t;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
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
      Si(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const vh = function e7(t) {
  function n(i) {
    return t ? new Ka(i, t) : new ki(i, 0);
  }
  return n.alpha = function(i) {
    return e7(+i);
  }, n;
}(0.5);
function Wa(e8) {
  this._context = e8;
}
Wa.prototype = { areaStart: Oe, areaEnd: Oe, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e8, t) {
  e8 = +e8, t = +t, this._point ? this._context.lineTo(e8, t) : (this._point = 1, this._context.moveTo(e8, t));
} };
function yh(e8) {
  return new Wa(e8);
}
function xo(e8) {
  return e8 < 0 ? -1 : 1;
}
function bo(e8, t, n) {
  var i = e8._x1 - e8._x0, o = t - e8._x1, a = (e8._y1 - e8._y0) / (i || o < 0 && -0), s = (n - e8._y1) / (o || i < 0 && -0), r = (a * o + s * i) / (i + o);
  return (xo(a) + xo(s)) * Math.min(Math.abs(a), Math.abs(s), 0.5 * Math.abs(r)) || 0;
}
function wo(e8, t) {
  var n = e8._x1 - e8._x0;
  return n ? (3 * (e8._y1 - e8._y0) / n - t) / 2 : t;
}
function En(e8, t, n) {
  var i = e8._x0, o = e8._y0, a = e8._x1, s = e8._y1, r = (a - i) / 3;
  e8._context.bezierCurveTo(i + r, o + r * t, a - r, s - r * n, a, s);
}
function Qt(e8) {
  this._context = e8;
}
Qt.prototype = { areaStart: function() {
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
      En(this, this._t0, wo(this, this._t0));
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
        this._point = 3, En(this, wo(this, n = bo(this, e8, t)), n);
        break;
      default:
        En(this, this._t0, n = bo(this, e8, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t, this._t0 = n;
  }
} };
function za(e8) {
  this._context = new qa(e8);
}
(za.prototype = Object.create(Qt.prototype)).point = function(e8, t) {
  Qt.prototype.point.call(this, t, e8);
};
function qa(e8) {
  this._context = e8;
}
qa.prototype = { moveTo: function(e8, t) {
  this._context.moveTo(t, e8);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e8, t) {
  this._context.lineTo(t, e8);
}, bezierCurveTo: function(e8, t, n, i, o, a) {
  this._context.bezierCurveTo(t, e8, i, n, a, o);
} };
function xh(e8) {
  return new Qt(e8);
}
function bh(e8) {
  return new za(e8);
}
function ja(e8) {
  this._context = e8;
}
ja.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e8 = this._x, t = this._y, n = e8.length;
  if (n) if (this._line ? this._context.lineTo(e8[0], t[0]) : this._context.moveTo(e8[0], t[0]), n === 2) this._context.lineTo(e8[1], t[1]);
  else for (var i = ko(e8), o = ko(t), a = 0, s = 1; s < n; ++a, ++s) this._context.bezierCurveTo(i[0][a], o[0][a], i[1][a], o[1][a], e8[s], t[s]);
  (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e8, t) {
  this._x.push(+e8), this._y.push(+t);
} };
function ko(e8) {
  var t, n = e8.length - 1, i, o = new Array(n), a = new Array(n), s = new Array(n);
  for (o[0] = 0, a[0] = 2, s[0] = e8[0] + 2 * e8[1], t = 1; t < n - 1; ++t) o[t] = 1, a[t] = 4, s[t] = 4 * e8[t] + 2 * e8[t + 1];
  for (o[n - 1] = 2, a[n - 1] = 7, s[n - 1] = 8 * e8[n - 1] + e8[n], t = 1; t < n; ++t) i = o[t] / a[t - 1], a[t] -= i, s[t] -= i * s[t - 1];
  for (o[n - 1] = s[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) o[t] = (s[t] - o[t + 1]) / a[t];
  for (a[n - 1] = (e8[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e8[t + 1] - o[t + 1];
  return [o, a];
}
function wh(e8) {
  return new ja(e8);
}
function mn(e8, t) {
  this._context = e8, this._t = t;
}
mn.prototype = { areaStart: function() {
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
function kh(e8) {
  return new mn(e8, 0.5);
}
function Sh(e8) {
  return new mn(e8, 0);
}
function Th(e8) {
  return new mn(e8, 1);
}
function So(e8, t) {
  var n = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e8);
    t && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e8, o).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Mh(e8) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? So(Object(n), true).forEach(function(i) {
      Dh(e8, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n)) : So(Object(n)).forEach(function(i) {
      Object.defineProperty(e8, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e8;
}
function wt(e8) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wt = function(t) {
    return typeof t;
  } : wt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e8);
}
function Dh(e8, t, n) {
  return t in e8 ? Object.defineProperty(e8, t, { value: n, enumerable: true, configurable: true, writable: true }) : e8[t] = n, e8;
}
function Jt() {
  return Jt = Object.assign || function(e8) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e8[i] = n[i]);
    }
    return e8;
  }, Jt.apply(this, arguments);
}
function Ch(e8, t) {
  if (e8) {
    if (typeof e8 == "string") return To(e8, t);
    var n = Object.prototype.toString.call(e8).slice(8, -1);
    if (n === "Object" && e8.constructor && (n = e8.constructor.name), n === "Map" || n === "Set") return Array.from(e8);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return To(e8, t);
  }
}
function To(e8, t) {
  (t == null || t > e8.length) && (t = e8.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e8[n];
  return i;
}
function Za(e8, t) {
  var n = typeof Symbol < "u" && e8[Symbol.iterator] || e8["@@iterator"];
  if (!n) {
    if (Array.isArray(e8) || (n = Ch(e8)) || t) {
      n && (e8 = n);
      var i = 0, o = function() {
      };
      return { s: o, n: function() {
        return i >= e8.length ? { done: true } : { done: false, value: e8[i++] };
      }, e: function(l) {
        throw l;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = true, s = false, r;
  return { s: function() {
    n = n.call(e8);
  }, n: function() {
    var l = n.next();
    return a = l.done, l;
  }, e: function(l) {
    s = true, r = l;
  }, f: function() {
    try {
      !a && n.return != null && n.return();
    } finally {
      if (s) throw r;
    }
  } };
}
function Rh(e8, t) {
  var n = [], i = [];
  function o(a, s) {
    if (a.length === 1) n.push(a[0]), i.push(a[0]);
    else {
      for (var r = Array(a.length - 1), l = 0; l < r.length; l++) l === 0 && n.push(a[0]), l === r.length - 1 && i.push(a[l + 1]), r[l] = [(1 - s) * a[l][0] + s * a[l + 1][0], (1 - s) * a[l][1] + s * a[l + 1][1]];
      o(r, s);
    }
  }
  return e8.length && o(e8, t), { left: n, right: i.reverse() };
}
function Ah(e8) {
  var t = {};
  return e8.length === 4 && (t.x2 = e8[2][0], t.y2 = e8[2][1]), e8.length >= 3 && (t.x1 = e8[1][0], t.y1 = e8[1][1]), t.x = e8[e8.length - 1][0], t.y = e8[e8.length - 1][1], e8.length === 4 ? t.type = "C" : e8.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function Eh(e8, t) {
  t = t || 2;
  for (var n = [], i = e8, o = 1 / t, a = 0; a < t - 1; a++) {
    var s = o / (1 - o * a), r = Rh(i, s);
    n.push(r.left), i = r.right;
  }
  return n.push(i), n;
}
function Nh(e8, t, n) {
  var i = [[e8.x, e8.y]];
  return t.x1 != null && i.push([t.x1, t.y1]), t.x2 != null && i.push([t.x2, t.y2]), i.push([t.x, t.y]), Eh(i, n).map(Ah);
}
var Ph = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, it = { M: ["x", "y"], L: ["x", "y"], H: ["x"], V: ["y"], C: ["x1", "y1", "x2", "y2", "x", "y"], S: ["x2", "y2", "x", "y"], Q: ["x1", "y1", "x", "y"], T: ["x", "y"], A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"], Z: [] };
Object.keys(it).forEach(function(e8) {
  it[e8.toLowerCase()] = it[e8];
});
function Yn(e8, t) {
  for (var n = Array(e8), i = 0; i < e8; i++) n[i] = t;
  return n;
}
function Bh(e8) {
  return "".concat(e8.type).concat(it[e8.type].map(function(t) {
    return e8[t];
  }).join(","));
}
function Ih(e8, t) {
  var n = { x1: "x", y1: "y", x2: "x", y2: "y" }, i = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e8.type !== t.type && t.type.toUpperCase() !== "M") {
    var o = {};
    Object.keys(t).forEach(function(a) {
      var s = t[a], r = e8[a];
      r === void 0 && (i.includes(a) ? r = s : (r === void 0 && n[a] && (r = e8[n[a]]), r === void 0 && (r = 0))), o[a] = r;
    }), o.type = t.type, e8 = o;
  }
  return e8;
}
function Oh(e8, t, n) {
  var i = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C") i = i.concat(Nh(e8, t, n));
  else {
    var o = Jt({}, e8);
    o.type === "M" && (o.type = "L"), i = i.concat(Yn(n - 1).map(function() {
      return o;
    })), i.push(t);
  }
  return i;
}
function Mo(e8, t, n) {
  var i = e8.length - 1, o = t.length - 1, a = i / o, s = Yn(o).reduce(function(l, c, d) {
    var u = Math.floor(a * d);
    if (n && u < e8.length - 1 && n(e8[u], e8[u + 1])) {
      var h = a * d % 1 < 0.5;
      l[u] && (h ? u > 0 ? u -= 1 : u < e8.length - 1 && (u += 1) : u < e8.length - 1 ? u += 1 : u > 0 && (u -= 1));
    }
    return l[u] = (l[u] || 0) + 1, l;
  }, []), r = s.reduce(function(l, c, d) {
    if (d === e8.length - 1) {
      var u = Yn(c, Jt({}, e8[e8.length - 1]));
      return u[0].type === "M" && u.forEach(function(h) {
        h.type = "L";
      }), l.concat(u);
    }
    return l.concat(Oh(e8[d], e8[d + 1], c));
  }, []);
  return r.unshift(e8[0]), r;
}
function Do(e8) {
  for (var t = (e8 || "").match(Ph) || [], n = [], i, o, a = 0; a < t.length; ++a) if (i = it[t[a]], i) {
    o = { type: t[a] };
    for (var s = 0; s < i.length; ++s) o[i[s]] = +t[a + s + 1];
    a += i.length, n.push(o);
  }
  return n;
}
function Lh(e8, t, n) {
  var i = e8 == null ? [] : e8.slice(), o = t == null ? [] : t.slice(), a = wt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, s = a.excludeSegment, r = a.snapEndsToInput;
  if (!i.length && !o.length) return function() {
    return [];
  };
  var l = (i.length === 0 || i[i.length - 1].type === "Z") && (o.length === 0 || o[o.length - 1].type === "Z");
  i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), i.length ? o.length || o.push(i[0]) : i.push(o[0]);
  var c = Math.abs(o.length - i.length);
  c !== 0 && (o.length > i.length ? i = Mo(i, o, s) : o.length < i.length && (o = Mo(o, i, s))), i = i.map(function(u, h) {
    return Ih(u, o[h]);
  });
  var d = i.map(function(u) {
    return Mh({}, u);
  });
  return l && (d.push({ type: "Z" }), i.push({ type: "Z" })), function(h) {
    if (h === 1 && r) return t ?? [];
    if (h === 0) return i;
    for (var f = 0; f < d.length; ++f) {
      var p = i[f], m = o[f], _ = d[f], v = Za(it[_.type]), x;
      try {
        for (v.s(); !(x = v.n()).done; ) {
          var y = x.value;
          _[y] = (1 - h) * p[y] + h * m[y], (y === "largeArcFlag" || y === "sweepFlag") && (_[y] = Math.round(_[y]));
        }
      } catch (S) {
        v.e(S);
      } finally {
        v.f();
      }
    }
    return d;
  };
}
function Xa(e8, t, n) {
  var i = Do(e8), o = Do(t), a = wt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, s = a.excludeSegment, r = a.snapEndsToInput;
  if (!i.length && !o.length) return function() {
    return "";
  };
  var l = Lh(i, o, { excludeSegment: s, snapEndsToInput: r });
  return function(d) {
    if (d === 1 && r) return t ?? "";
    var u = l(d), h = "", f = Za(u), p;
    try {
      for (f.s(); !(p = f.n()).done; ) {
        var m = p.value;
        h += Bh(m);
      }
    } catch (_) {
      f.e(_);
    } finally {
      f.f();
    }
    return h;
  };
}
var X;
(function(e8) {
  e8.Basis = "basis", e8.BasisClosed = "basisClosed", e8.BasisOpen = "basisOpen", e8.Bundle = "bundle", e8.Cardinal = "cardinal", e8.CardinalClosed = "cardinalClosed", e8.CardinalOpen = "cardinalOpen", e8.CatmullRom = "catmullRom", e8.CatmullRomClosed = "catmullRomClosed", e8.CatmullRomOpen = "catmullRomOpen", e8.Linear = "linear", e8.LinearClosed = "linearClosed", e8.MonotoneX = "monotoneX", e8.MonotoneY = "monotoneY", e8.Natural = "natural", e8.Step = "step", e8.StepAfter = "stepAfter", e8.StepBefore = "stepBefore";
})(X || (X = {}));
const Vn = { [X.Basis]: ch, [X.BasisClosed]: uh, [X.BasisOpen]: hh, [X.Bundle]: dh, [X.Cardinal]: fh, [X.CardinalClosed]: ph, [X.CardinalOpen]: mh, [X.CatmullRom]: gh, [X.CatmullRomClosed]: _h, [X.CatmullRomOpen]: vh, [X.Linear]: xi, [X.LinearClosed]: yh, [X.MonotoneX]: xh, [X.MonotoneY]: bh, [X.Natural]: wh, [X.Step]: kh, [X.StepAfter]: Th, [X.StepBefore]: Sh }, $h = Object.assign(Object.assign({}, Et), { curveType: X.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: false, cursor: null, interpolateMissingData: false }), Uh = on`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, Fh = ee`
  label: line-component;
`, vt = ee`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, Gn = ee`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, Kn = ee`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, Wn = ee`
  opacity: 0.2;
`, zn = ee`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, Hh = Object.freeze(Object.defineProperty({ __proto__: null, dim: Wn, globalStyles: Uh, interpolatedPath: zn, line: vt, linePath: Gn, lineSelectionHelper: Kn, root: Fh }, Symbol.toStringTag, { value: "Module" }));
class gn extends fn {
  constructor(t) {
    super(), this._defaultConfig = $h, this.config = this._defaultConfig, this.curve = Vn[X.MonotoneX], this.events = { [gn.selectors.line]: { mouseover: this._highlight.bind(this), mouseleave: this._resetHighlight.bind(this) } }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), o = (this.yScale.range()[0] > this.yScale.range()[1] ? Ge.North : Ge.South) === Ge.South, a = t > 3, s = t >= 10;
    return { top: !s && (!o && n[1] === 0 || o && n[0] === 0) ? 0 : t / 2, bottom: !s && (!o && n[0] === 0 || o && n[1] === 0) ? 0 : t / 2, left: a ? t / 2 : 0, right: a ? t / 2 : 0 };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: i } } = this, o = Ve(t) ? t : n.duration;
    this.curve = Vn[n.curveType], this.lineGen = Ua().x((u) => u.x).y((u) => u.y).defined((u) => u.defined).curve(this.curve);
    const a = St(n.y) ? n.y : [n.y], s = i.map((u, h) => this.xScale(Te(u, n.x, h))), r = a.map((u) => {
      const h = i.map((v, x) => {
        const y = Te(v, u, x), S = (Ve(y) || y === null) && isFinite(y) ? y : n.fallbackValue, T = n.interpolateMissingData ? (Ve(y) || y === null) && isFinite(y) : isFinite(S);
        return { x: s[x], y: this.yScale(S ?? 0), defined: T, value: S };
      }), f = h.reduce((v, x) => x.defined || v, false);
      let p = false;
      const m = h.reduce((v, x, y) => {
        !x.defined && isFinite(n.fallbackValue) && v.push(Object.assign(Object.assign({}, x), { defined: true })), !x.defined && !p && (p = true);
        const S = y > 0 && !h[y - 1].defined || y < h.length - 1 && !h[y + 1].defined;
        return x.defined && S && (p || v.push(Object.assign(Object.assign({}, x), { defined: false })), v.push(x), p = false), v;
      }, []), _ = f && h.some((v) => v.value !== null);
      return { values: h, defined: f, gaps: m, visible: _ };
    }), l = this.g.selectAll(`.${vt}`).data(r), c = l.enter().append("g").attr("class", vt);
    c.append("path").attr("class", Gn).attr("stroke", (u, h) => De(i, n.color, h)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), c.append("path").attr("class", Kn).attr("d", this._emptyPath()), c.append("path").attr("class", zn).attr("d", this._emptyPath()).style("opacity", 0);
    const d = c.merge(l);
    d.style("cursor", (u, h) => zo(i, n.cursor, h)), d.each((u, h, f) => {
      var p;
      const m = xt(f[h]), _ = m.select(`.${Gn}`), v = m.select(`.${Kn}`), x = m.select(`.${zn}`), y = u.visible, S = lr(i, n.lineDashArray, h), T = be(_, o).attr("stroke", De(i, n.color, h)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", y ? 1 : 0).style("stroke-dasharray", (p = S == null ? void 0 : S.join(" ")) !== null && p !== void 0 ? p : null), M = u.values.some((W) => !W.defined), C = this.lineGen(u.values);
      if (o && !M) {
        const W = _.attr("d") || this._emptyPath(), U = C || this._emptyPath();
        T.attrTween("d", () => Xa(W, U));
      } else u.visible && T.attr("d", C);
      v.attr("d", C).attr("visibility", y ? null : "hidden"), M && n.interpolateMissingData ? be(x, o).attr("d", this.lineGen(u.gaps)).attr("stroke", De(i, n.color, h)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : x.transition().duration(o).style("opacity", 0);
    }), be(l.exit(), o).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${vt}`).classed(Wn, (i) => i !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${vt}`).classed(Wn, false);
  }
}
gn.selectors = Hh;
function Yh(e8) {
  return e8;
}
var Ft = 1, Ht = 2, qn = 3, yt = 4, Co = 1e-6;
function Vh(e8) {
  return "translate(" + e8 + ",0)";
}
function Gh(e8) {
  return "translate(0," + e8 + ")";
}
function Kh(e8) {
  return (t) => +e8(t);
}
function Wh(e8, t) {
  return t = Math.max(0, e8.bandwidth() - t * 2) / 2, e8.round() && (t = Math.round(t)), (n) => +e8(n) + t;
}
function zh() {
  return !this.__axis;
}
function _n(e8, t) {
  var n = [], i = null, o = null, a = 6, s = 6, r = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = e8 === Ft || e8 === yt ? -1 : 1, d = e8 === yt || e8 === Ht ? "x" : "y", u = e8 === Ft || e8 === qn ? Vh : Gh;
  function h(f) {
    var p = i ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = o ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Yh), _ = Math.max(a, 0) + r, v = t.range(), x = +v[0] + l, y = +v[v.length - 1] + l, S = (t.bandwidth ? Wh : Kh)(t.copy(), l), T = f.selection ? f.selection() : f, M = T.selectAll(".domain").data([null]), C = T.selectAll(".tick").data(p, t).order(), W = C.exit(), U = C.enter().append("g").attr("class", "tick"), Q = C.select("line"), N = C.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), C = C.merge(U), Q = Q.merge(U.append("line").attr("stroke", "currentColor").attr(d + "2", c * a)), N = N.merge(U.append("text").attr("fill", "currentColor").attr(d, c * _).attr("dy", e8 === Ft ? "0em" : e8 === qn ? "0.71em" : "0.32em")), f !== T && (M = M.transition(f), C = C.transition(f), Q = Q.transition(f), N = N.transition(f), W = W.transition(f).attr("opacity", Co).attr("transform", function(P) {
      return isFinite(P = S(P)) ? u(P + l) : this.getAttribute("transform");
    }), U.attr("opacity", Co).attr("transform", function(P) {
      var F = this.parentNode.__axis;
      return u((F && isFinite(F = F(P)) ? F : S(P)) + l);
    })), W.remove(), M.attr("d", e8 === yt || e8 === Ht ? s ? "M" + c * s + "," + x + "H" + l + "V" + y + "H" + c * s : "M" + l + "," + x + "V" + y : s ? "M" + x + "," + c * s + "V" + l + "H" + y + "V" + c * s : "M" + x + "," + l + "H" + y), C.attr("opacity", 1).attr("transform", function(P) {
      return u(S(P) + l);
    }), Q.attr(d + "2", c * a), N.attr(d, c * _).text(m), T.filter(zh).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e8 === Ht ? "start" : e8 === yt ? "end" : "middle"), T.each(function() {
      this.__axis = S;
    });
  }
  return h.scale = function(f) {
    return arguments.length ? (t = f, h) : t;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(f) {
    return arguments.length ? (n = f == null ? [] : Array.from(f), h) : n.slice();
  }, h.tickValues = function(f) {
    return arguments.length ? (i = f == null ? null : Array.from(f), h) : i && i.slice();
  }, h.tickFormat = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, h.tickSize = function(f) {
    return arguments.length ? (a = s = +f, h) : a;
  }, h.tickSizeInner = function(f) {
    return arguments.length ? (a = +f, h) : a;
  }, h.tickSizeOuter = function(f) {
    return arguments.length ? (s = +f, h) : s;
  }, h.tickPadding = function(f) {
    return arguments.length ? (r = +f, h) : r;
  }, h.offset = function(f) {
    return arguments.length ? (l = +f, h) : l;
  }, h;
}
function Ro(e8) {
  return _n(Ft, e8);
}
function Ao(e8) {
  return _n(Ht, e8);
}
function Eo(e8) {
  return _n(qn, e8);
}
function No(e8) {
  return _n(yt, e8);
}
const qh = Object.assign(Object.assign({}, Et), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: true, tickLine: true, domainLine: true, numTicks: void 0, minMaxTicksOnly: false, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: false, tickTextTrimType: cr.Middle, tickTextFitMode: qo.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: true, tickPadding: 8, tickTextHideOverlapping: void 0 }), Qa = ee`
  label: axis-component;
`, jh = on`
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

  body.theme-dark ${`.${Qa}`} {
    --vis-axis-tick-color: var(--vis-dark-axis-tick-color);
    --vis-axis-domain-color: var(--vis-dark-axis-domain-color);
    --vis-axis-tick-label-color: var(--vis-dark-axis-tick-label-color);
    --vis-axis-grid-color: var(--vis-dark-axis-grid-color);
    --vis-axis-label-color: var(--vis-dark-axis-label-color);
  }
`, Ti = ee`
  label: hide-tick-line;
`, Mi = ee`
  label: hide-domain;
`, Ja = ee`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${Ti}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Mi}`} {
    .domain {
      opacity: 0;
    }
  }
`, es = ee`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
  }
`, ts = ee`
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
`, jn = ee`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, ns = ee`
  label: tick-label;
`, is = ee`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, Zh = Object.freeze(Object.defineProperty({ __proto__: null, axis: Ja, globalStyles: jh, grid: es, hideDomain: Mi, hideTickLine: Ti, label: jn, root: Qa, tick: ts, tickLabel: ns, tickLabelHideable: is }, Symbol.toStringTag, { value: "Module" }));
class os extends fn {
  constructor(t) {
    super(), this._defaultConfig = qh, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", es);
  }
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === q.X ? H.Bottom : H.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: i } } = this;
    switch (n) {
      case q.X: {
        const a = this._axisSizeBBox.x + this._axisSizeBBox.width, s = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, r = a - this._width > 1 ? a - this._width : 0;
        switch (i) {
          case H.Top:
            return { top: t.height, left: s, right: r };
          case H.Bottom:
          default:
            return { bottom: t.height, left: s, right: r };
        }
      }
      case q.Y: {
        const o = t.height > this._height ? (t.height - this._height) / 2 : 0, a = o, s = o;
        switch (i) {
          case H.Right:
            return { right: t.width, top: a, bottom: s };
          case H.Left:
          default:
            return { left: t.width, top: a, bottom: s };
        }
      }
    }
  }
  getRequiredMargin() {
    return this._requiredMargin;
  }
  getOffset(t) {
    const { config: { type: n, position: i } } = this;
    switch (n) {
      case q.X:
        switch (i) {
          case H.Top:
            return { top: t.top, left: t.left };
          case H.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case q.Y:
        switch (i) {
          case H.Right:
            return { top: t.top, left: t.left + this._width };
          case H.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: i } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), i.gridLine) {
      const o = this._buildGrid().tickFormat(() => "");
      o.tickValues(this._getConfiguredTickValues()), this.gridGroup.selectAll("*").interrupt(), be(this.gridGroup, t).call(o).style("opacity", 1);
    } else be(this.gridGroup, t).style("opacity", 0);
    i.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: i } } = this, o = this._getNumTicks();
    switch (t) {
      case q.X:
        switch (n) {
          case H.Top:
            return Ro(this.xScale).ticks(o).tickPadding(i);
          case H.Bottom:
          default:
            return Eo(this.xScale).ticks(o).tickPadding(i);
        }
      case q.Y:
        switch (n) {
          case H.Right:
            return Ao(this.yScale).ticks(o).tickPadding(i);
          case H.Left:
          default:
            return No(this.yScale).ticks(o).tickPadding(i);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, i = this._getNumTicks();
    switch (t) {
      case q.X:
        switch (n) {
          case H.Top:
            return Ro(this.xScale).ticks(i * 2).tickSize(-this._height).tickSizeOuter(0);
          case H.Bottom:
          default:
            return Eo(this.xScale).ticks(i * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case q.Y:
        switch (n) {
          case H.Right:
            return Ao(this.yScale).ticks(i * 2).tickSize(-this._width).tickSizeOuter(0);
          case H.Left:
          default:
            return No(this.yScale).ticks(i * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: i } = this, o = this._buildAxis(), a = this._getConfiguredTickValues() || o.scale().ticks(this._getNumTicks());
    o.tickValues(a), t.selectAll("*").interrupt(), be(t, n).call(o);
    const s = t.selectAll("g.tick");
    s.classed(ts, true).style("font-size", i.tickTextFontSize);
    const r = t.selectAll("g.tick > text").filter((l) => a.some((c) => ur(l, c))).classed(ns, true).classed(is, !!i.tickTextHideOverlapping).style("fill", i.tickTextColor);
    if (r.nodes().forEach((l) => hr(l)), r.each((l, c, d) => {
      var u, h;
      let f = (h = (u = i.tickFormat) === null || u === void 0 ? void 0 : u.call(i, l, c, a)) !== null && h !== void 0 ? h : `${l}`;
      const p = d[c], m = i.tickTextWidth || (i.type === q.X ? this._containerWidth / (s.size() + 1) : this._containerWidth / 5), _ = getComputedStyle(p), v = Number.parseFloat(_.fontSize), x = _.fontFamily, y = { verticalAlign: i.type === q.X ? Pi.Top : Pi.Middle, width: m, textRotationAngle: i.tickTextAngle, separator: i.tickTextSeparator, wordBreak: i.tickTextForceWordBreak };
      if (i.tickTextFitMode === qo.Trim) {
        const T = xt(p).text(f);
        dr(T, m, i.tickTextTrimType, true, v, 0.58), f = xt(p).text();
      }
      fr(p, { text: f, fontFamily: x, fontSize: v }, y);
    }), t.classed(Ja, true).classed(Ti, !i.tickLine).classed(Mi, !i.domainLine), i.fullSize) {
      const l = this._getFullDomainPath(0);
      be(t.select(".domain"), n).attr("d", l);
    }
  }
  _resolveTickLabelOverlap(t = this.axisGroup) {
    const { config: n } = this, i = t.selectAll("g.tick > text");
    if (!n.tickTextHideOverlapping) {
      i.style("opacity", null);
      return;
    }
    cancelAnimationFrame(this._collideTickLabelsAnimFrameId), this._collideTickLabelsAnimFrameId = requestAnimationFrame(() => {
      this._collideTickLabels(i);
    });
  }
  _collideTickLabels(t) {
    t.each((i, o, a) => {
      const s = a[o];
      s._visible = true;
    });
    const n = 3;
    for (let i = 0; i < n; i += 1) t.each((o, a, s) => {
      const r = s[a];
      if (!r._visible) return;
      const c = r.getBoundingClientRect();
      for (let d = a + 1; d < s.length; d += 1) {
        if (a === d) continue;
        const u = s[d];
        if (u._visible) {
          const f = u.getBoundingClientRect();
          if (pr(c, f, -5)) {
            u._visible = false;
            break;
          }
        }
      }
    });
    t.each((i, o, a) => {
      const s = a[o];
      xt(s).style("opacity", s._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n) return n;
    if (t === q.X) {
      const i = this.xScale.range(), o = i[1] - i[0];
      return Math.floor(o / 175);
    }
    if (t === q.Y) {
      const i = this.yScale.range(), o = Math.abs(i[0] - i[1]);
      return Math.pow(o, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === q.X ? this.xScale : this.yScale, i = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((o) => o >= i[0] && o <= i[1]) : t.minMaxTicksOnly || t.type === q.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? i : null;
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
    const { type: i, label: o, labelMargin: a, labelFontSize: s } = this.config;
    t.selectAll(`.${jn}`).remove();
    const r = this.getPosition(), { width: l, height: c } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), d = i === q.X ? this._width / 2 : Math.pow(-1, +(r === H.Left)) * l, u = i === q.X ? Math.pow(-1, +(r === H.Top)) * c : this._height / 2, h = i === q.X ? 0 : Math.pow(-1, +(r === H.Left)) * a, f = i === q.X ? Math.pow(-1, +(r === H.Top)) * a : 0, p = i === q.Y ? -90 : 0;
    t.append("text").attr("class", jn).text(o).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${d + h},${u + f}) rotate(${p})`).style("font-size", s).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case q.X:
        switch (n) {
          case H.Top:
            return 0;
          case H.Bottom:
          default:
            return 0.75;
        }
      case q.Y:
        switch (n) {
          case H.Right:
            return 0.75;
          case H.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: i, position: o } } = this, a = this.g.selectAll("g.tick > text"), s = this._getTickTextAnchor(n), r = t === q.X ? 0 : this._getYTickTextTranslate(n, o), l = i ? `translate(${r},0) rotate(${i})` : `translate(${r},0)`;
    a.attr("transform", l).attr("text-anchor", s);
  }
  _getTickTextAnchor(t) {
    switch (t) {
      case Je.Left:
        return "start";
      case Je.Right:
        return "end";
      case Je.Center:
        return "middle";
      default:
        return null;
    }
  }
  _getYTickTextTranslate(t, n = H.Left) {
    const o = this._axisRawBBox.width - 9;
    switch (t) {
      case Je.Left:
        return n === H.Left ? o * -1 : 0;
      case Je.Right:
        return n === H.Left ? 0 : o;
      case Je.Center:
        return n === H.Left ? o * -0.5 : o * 0.5;
      default:
        return 0;
    }
  }
}
os.selectors = Zh;
const Xh = Object.assign(Object.assign({}, Et), { yStacked: void 0, baseline: null, duration: 100, tooltip: void 0, template: (e8, t) => "", hideWhenFarFromPointer: true, hideWhenFarFromPointerDistance: 100, snapToData: true, getCircles: void 0, color: void 0, strokeColor: void 0, strokeWidth: void 0 }), Qh = on`
  :root {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`, Jh = ee`
  label: crosshair-component;
`, as = ee`
  stroke: var(--vis-crosshair-line-stroke-color);
  stroke-width: var(--vis-crosshair-line-stroke-width);
  stroke-opacity: var(--vis-crosshair-line-stroke-opacity);
  pointer-events: none;
`, ss = ee`
  stroke: var(--vis-crosshair-circle-stroke-color);
  stroke-width: var(--vis-crosshair-circle-stroke-width);
  stroke-opacity: var(--vis-crosshair-circle-stroke-opacity);
  pointer-events: none;
`, ed = Object.freeze(Object.defineProperty({ __proto__: null, circle: ss, globalStyles: Qh, line: as, root: Jh }, Symbol.toStringTag, { value: "Module" }));
class rs extends fn {
  constructor(t) {
    super(), this.clippable = true, this._defaultConfig = Xh, this.config = this._defaultConfig, this.x = 0, this.show = false, this._animFrameId = null, this._accessors = { x: void 0, y: void 0, yStacked: void 0, baseline: void 0 }, t && this.setConfig(t), this.g.style("opacity", this.show ? 1 : 0), this.line = this.g.append("line").attr("class", as);
  }
  set accessors(t) {
    this._accessors = t;
  }
  get accessors() {
    var t;
    const { config: n } = this, i = !!(n.x || n.y || n.yStacked), o = i ? n.x : this._accessors.x, a = i ? n.y : this._accessors.y, s = a ? St(a) ? a : [a] : void 0, r = i ? n.yStacked : this._accessors.yStacked, l = (t = n.baseline) !== null && t !== void 0 ? t : this._accessors.baseline;
    return { x: o, y: s, yStacked: r, baseline: l };
  }
  setContainer(t) {
    this.container = t, this.container.on("mousemove.crosshair", this._onMouseMove.bind(this)), this.container.on("mouseout.crosshair", this._onMouseOut.bind(this));
  }
  _render(t) {
    const { config: n } = this;
    if (n.snapToData && !this.datum) return;
    const i = Ve(t) ? t : n.duration;
    be(this.g, i).style("opacity", this.show ? 1 : 0), this.line.attr("y1", 0).attr("y1", this._height), be(this.line, i, zi).attr("x1", this.x).attr("x2", this.x);
    const o = this.getCircleData(), a = this.g.selectAll("circle").data(o, (r, l) => {
      var c;
      return (c = r.id) !== null && c !== void 0 ? c : l;
    }), s = a.enter().append("circle").attr("class", ss).attr("r", 0).attr("cx", this.x).attr("cy", (r) => r.y).style("fill", (r) => r.color).style("stroke", (r) => r.strokeColor).style("stroke-width", (r) => r.strokeWidth);
    be(s.merge(a), i, zi).attr("cx", this.x).attr("cy", (r) => r.y).attr("r", 4).style("opacity", (r) => r.opacity).style("fill", (r) => r.color).style("stroke", (r) => r.strokeColor).style("stroke-width", (r) => r.strokeWidth), a.exit().remove();
  }
  hide() {
    this._onMouseOut();
  }
  _onMouseMove(t) {
    var n, i;
    const { config: o, datamodel: a, element: s } = this;
    !this.accessors.x && (!((n = a.data) === null || n === void 0) && n.length) && console.warn("Unovis | Crosshair: X accessor function has not been configured. Please check if it's present in the configuration object");
    const [r] = Bi(t, s), l = this.xScale.range();
    if (o.snapToData) {
      !this.accessors.y && !this.accessors.yStacked && (!((i = a.data) === null || i === void 0) && i.length) && console.warn("Unovis | Crosshair: Y accessors have not been configured. Please check if they're present in the configuration object");
      const c = this.xScale, d = c.invert(r);
      if (this.datum = mr(a.data, d, this.accessors.x), this.datumIndex = a.data.indexOf(this.datum), !this.datum) return;
      this.x = tt(Math.round(c(Te(this.datum, this.accessors.x, this.datumIndex))), 0, this._width), this.show = this.x >= 0 && this.x <= this._width && (!o.hideWhenFarFromPointer || Math.abs(this.x - r) < o.hideWhenFarFromPointerDistance);
    } else this.x = tt(r, l[0], l[1]), this.show = r >= l[0] - 2 && r <= l[1] + 2;
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
    const { config: i } = this, o = (n = i.tooltip) !== null && n !== void 0 ? n : this.tooltip;
    if (!o) return;
    const a = o.getContainer() || this.container.node(), [s, r] = o.isContainerBody() ? [t.clientX, t.clientY] : Bi(t, a), l = i.template(this.datum, this.xScale.invert(this.x));
    if (o.config.followCursor = true, !o.config.horizontalPlacement || o.config.horizontalPlacement === H.Auto) {
      const c = o.isContainerBody() ? s - this.container.node().getBoundingClientRect().left : s;
      o.overrideHorizontalPlacement(c > this._containerWidth / 2 ? H.Left : H.Right);
    }
    l && o.show(l, { x: s, y: r });
  }
  _hideTooltip() {
    var t;
    const { config: n } = this, i = (t = n.tooltip) !== null && t !== void 0 ? t : this.tooltip;
    i == null ? void 0 : i.hide();
  }
  getYDataExtent() {
    return [void 0, void 0];
  }
  getCircleData() {
    var t, n;
    const { config: i, datamodel: { data: o } } = this;
    if (gr(i.getCircles)) return i.getCircles(this.xScale.invert(this.x), o, this.yScale);
    if (i.snapToData && this.datum) {
      const a = (t = this.accessors.y) !== null && t !== void 0 ? t : [], s = (n = this.accessors.yStacked) !== null && n !== void 0 ? n : [], r = Te(this.datum, this.accessors.baseline, this.datumIndex) || 0, l = _r(this.datum, this.datumIndex, ...s).map((d, u, h) => ({ y: this.yScale(d + r), opacity: Ve(Te(this.datum, s[u])) ? 1 : 0, color: De(this.datum, i.color, u), strokeColor: i.strokeColor ? De(this.datum, i.strokeColor, u) : void 0, strokeWidth: i.strokeWidth ? Te(this.datum, i.strokeWidth, u) : void 0 })), c = a.map((d, u) => {
        const h = Te(this.datum, d);
        return { y: this.yScale(h), opacity: Ve(h) ? 1 : 0, color: De(this.datum, i.color, l.length + u), strokeColor: i.strokeColor ? De(this.datum, i.strokeColor, u) : void 0, strokeWidth: i.strokeWidth ? Te(this.datum, i.strokeWidth, u) : void 0 };
      });
      return l.concat(c);
    }
    return [];
  }
}
rs.selectors = ed;
const td = Object.assign(Object.assign({}, Et), { color: void 0, curveType: X.MonotoneX, baseline: () => 0, opacity: 1, cursor: null, minHeight1Px: false }), ls = ee`
  label: area-component;
`, nd = on`
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

  body.theme-dark ${`.${ls}`} {
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`, Zn = ee`
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
`, id = Object.freeze(Object.defineProperty({ __proto__: null, area: Zn, globalStyles: nd, root: ls }, Symbol.toStringTag, { value: "Module" }));
class vn extends fn {
  constructor(t) {
    super(), this._defaultConfig = td, this.config = this._defaultConfig, this.stacked = true, this.events = { [vn.selectors.area]: {} }, t && this.setConfig(t), this.stacked = Array.isArray(this.config.y);
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: i } } = this, o = Ve(t) ? t : n.duration, a = Vn[n.curveType];
    this._areaGen = lh().x((m) => m.x).y0((m) => m.y0).y1((m) => {
      const _ = Math.abs(m.y1 - m.y0) < 1;
      return m.y1 - (_ && n.minHeight1Px ? 1 : 0);
    }).curve(a);
    const s = St(n.y) ? n.y : [n.y], r = i.map((m, _) => this.xScale(Te(m, n.x, _))), l = vr(i, n.baseline, s, this._prevNegative);
    this._prevNegative = l.map((m) => !!m.isMostlyNegative);
    const c = l.map((m) => m.map((_, v) => ({ y0: this.yScale(_[0]), y1: this.yScale(_[1]), x: r[v] }))), d = c.length - 1, u = c.reverse(), h = this.g.selectAll(`.${Zn}`).data(u), f = h.enter().append("path").attr("class", Zn).attr("d", (m) => this._areaGen(m) || this._emptyPath()).style("opacity", 0).style("fill", (m, _) => De(i, n.color, d - _)), p = be(f.merge(h), o).style("opacity", (m, _) => m.some((x) => x.y0 - x.y1 !== 0) ? Te(i, n.opacity, d - _) : 0).style("fill", (m, _) => De(i, n.color, d - _)).style("cursor", (m, _) => zo(i, n.cursor, d - _));
    o ? p.attrTween("d", (_, v, x) => {
      const y = xt(x[v]).attr("d"), S = this._areaGen(_) || this._emptyPath();
      return Xa(y, S);
    }) : p.attr("d", (m) => this._areaGen(m) || this._emptyPath()), be(h.exit(), o).style("opacity", 0).remove();
  }
  getYDataExtent(t) {
    const { config: n, datamodel: i } = this, o = St(n.y) ? n.y : [n.y], a = t ? Ko(i.data, this.xScale.domain(), n.x) : i.data;
    return yr(a, n.baseline, ...o);
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.domain(), i = this.yScale((n[0] + n[1]) / 2), o = i;
    return this._areaGen([{ y0: i, y1: o, x: t[0] }, { y0: i, y1: o, x: t[1] }]);
  }
}
vn.selectors = id;
const od = K({ __name: "index", props: { components: {}, xScale: { type: [Object, Function] }, xDomain: {}, xDomainMinConstraint: {}, xDomainMaxConstraint: {}, xRange: {}, yScale: { type: [Object, Function] }, yDomain: {}, yDomainMinConstraint: {}, yDomainMaxConstraint: {}, yRange: {}, yDirection: {}, xAxis: {}, yAxis: {}, autoMargin: { type: Boolean }, tooltip: {}, crosshair: {}, preventEmptyDomain: { type: [Boolean, null] }, scaleByDomain: { type: Boolean }, annotations: {}, duration: {}, margin: {}, padding: {}, sizing: {}, width: {}, height: {}, svgDefs: {}, ariaLabel: {}, data: {} }, setup(e8, { expose: t }) {
  const n = e8, { data: i } = Mt(n), o = Ct(n), a = j(), s = Bo({ components: [], annotations: void 0, crosshair: void 0, tooltip: void 0, xAxis: void 0, yAxis: void 0 }), r = j();
  return oe(i, () => {
    a.value && a.value.setData(i.value, true);
  }), vs(() => {
    var l;
    s.components.map((c) => c.config), (l = a.value) == null || l.updateContainer({ ...kn(o.value), ...kn(s) });
  }), pe(() => {
    r.value && (a.value = new rh(r.value, { ...kn(s) }, i.value));
  }), Le(() => {
    var l;
    return (l = a.value) == null ? void 0 : l.destroy();
  }), ht(ni, { data: i, update: (l) => s.components = [...s.components, l], destroy: () => {
    var l;
    return s.components = (l = s.components) == null ? void 0 : l.filter((c) => !c.isDestroyed());
  } }), ht(jo, { data: i, update: (l) => s[`${l.config.type}Axis`] = l, destroy: (l) => {
    s[`${l}Axis`] = void 0;
  } }), ht(Zo, { data: i, update: (l) => s.crosshair = l, destroy: () => {
    s.crosshair = void 0;
  } }), ht(xr, { data: i, update: (l) => s.tooltip = l, destroy: () => {
    s.tooltip = void 0;
  } }), ht(br, { data: i, update: (l) => s.annotations = l, destroy: () => {
    s.annotations = void 0;
  } }), t({ component: a }), (l, c) => (D(), $("div", { "data-vis-xy-container": "", ref_key: "elRef", ref: r, class: "unovis-xy-container" }, [le(l.$slots, "default")], 512));
} }), ad = { "data-vis-component": "" }, sd = K({ __name: "index", props: { color: {}, curveType: {}, baseline: {}, opacity: {}, cursor: {}, minHeight1Px: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = tn(ni), i = e8, o = B(() => n.data.value ?? i.data), a = Ct(i), s = j();
  return pe(() => {
    xe(() => {
      var r;
      s.value = new vn(a.value), (r = s.value) == null || r.setData(o.value), n.update(s.value);
    });
  }), Le(() => {
    var r;
    (r = s.value) == null || r.destroy(), n.destroy();
  }), oe(a, (r, l) => {
    var c;
    an(r, l) || (c = s.value) == null || c.setConfig(a.value);
  }), oe(o, () => {
    var r;
    (r = s.value) == null || r.setData(o.value);
  }), t({ component: s }), (r, l) => (D(), $("div", ad));
} }), rd = { "data-vis-axis": "" }, ld = K({ __name: "index", props: { position: {}, type: {}, fullSize: { type: Boolean }, label: {}, labelFontSize: {}, labelMargin: {}, labelColor: {}, gridLine: { type: Boolean }, tickLine: { type: Boolean }, domainLine: { type: Boolean }, minMaxTicksOnly: { type: Boolean }, minMaxTicksOnlyWhenWidthIsLess: {}, tickFormat: { type: Function }, tickValues: {}, numTicks: {}, tickTextFitMode: {}, tickTextWidth: {}, tickTextSeparator: {}, tickTextForceWordBreak: { type: Boolean }, tickTextTrimType: {}, tickTextFontSize: {}, tickTextAlign: {}, tickTextColor: {}, tickTextAngle: {}, tickTextHideOverlapping: { type: Boolean }, tickPadding: {}, x: {}, y: {}, id: { type: Function }, color: {}, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = tn(jo), i = e8, o = B(() => n.data.value ?? i.data), a = Ct(i), s = j();
  return pe(() => {
    xe(() => {
      var r;
      s.value = new os(a.value), (r = s.value) == null || r.setData(o.value), n.update(s.value);
    });
  }), Le(() => {
    var r;
    (r = s.value) == null || r.destroy(), n.destroy(i.type);
  }), oe(a, (r, l) => {
    var c;
    an(r, l) || (c = s.value) == null || c.setConfig(a.value);
  }), oe(o, () => {
    var r;
    (r = s.value) == null || r.setData(o.value);
  }), t({ component: s }), (r, l) => (D(), $("div", rd));
} }), cd = { "data-vis-crosshair": "" }, ud = K({ __name: "index", props: { data: {} }, setup(e8, { expose: t }) {
  const n = tn(Zo), i = e8, o = B(() => n.data.value ?? i.data), a = Ct(i), s = j();
  return pe(() => {
    xe(() => {
      var r;
      s.value = new rs(a.value), (r = s.value) == null || r.setData(o.value), n.update(s.value);
    });
  }), Le(() => {
    var r;
    (r = s.value) == null || r.destroy(), n.destroy();
  }), oe(a, (r, l) => {
    var c;
    an(r, l) || (c = s.value) == null || c.setConfig(a.value);
  }), oe(o, () => {
    var r;
    (r = s.value) == null || r.setData(o.value);
  }), t({ component: s }), (r, l) => (D(), $("div", cd));
} }), hd = { "data-vis-component": "" }, dd = K({ __name: "index", props: { color: {}, curveType: {}, lineWidth: {}, lineDashArray: {}, fallbackValue: {}, highlightOnHover: { type: Boolean }, cursor: {}, interpolateMissingData: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = tn(ni), i = e8, o = B(() => n.data.value ?? i.data), a = Ct(i), s = j();
  return pe(() => {
    xe(() => {
      var r;
      s.value = new gn(a.value), (r = s.value) == null || r.setData(o.value), n.update(s.value);
    });
  }), Le(() => {
    var r;
    (r = s.value) == null || r.destroy(), n.destroy();
  }), oe(a, (r, l) => {
    var c;
    an(r, l) || (c = s.value) == null || c.setConfig(a.value);
  }), oe(o, () => {
    var r;
    (r = s.value) == null || r.setData(o.value);
  }), t({ component: s }), (r, l) => (D(), $("div", hd));
} }), fd = K({ __name: "Line.client", props: { data: {} }, setup(e8) {
  const t = ys(), n = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }), i = (r) => r[0], o = (r) => r[1], a = (r) => n.format(new Date(r));
  function s(r) {
    if (!t.default) return "";
    const l = { setup: () => () => {
      var _a2;
      return (_a2 = t.default) == null ? void 0 : _a2.call(t, { data: r });
    } }, c = document.createElement("div");
    return xs(l).mount(c), c.innerHTML;
  }
  return (r, l) => (D(), V(g(od), { data: r.data, padding: { top: 128 } }, { default: I(() => [R(g(sd), { color: "url('assets/vertical-stripes.svg#vertical-stripes')", x: i, y: o }), R(g(dd), { x: i, y: o, color: "rgb(var(--nq-green))" }), R(g(wr), { "vertical-shift": 1e3 }), R(g(ld), { type: "x", "tick-text-width": 50, "grid-line": false, "tick-format": a }), R(g(ud), { "data-crosshair": "", color: "rgb(var(--nq-blue))", template: s })]), _: 1 }, 8, ["data"]));
} }), pd = Object.assign($e(fd, [["__scopeId", "data-v-73ef04ca"]]), { __name: "ChartLine" }), md = { flex: "~ align-center", relative: "", "w-max": "", "rounded-full": "", "bg-neutral-200": "", "p-2": "" }, gd = ["data-state"], _d = ["id", "value"], vd = K({ __name: "PillSelector", props: bs({ options: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e8) {
  const t = Lo(e8, "modelValue"), n = j(false), i = ws();
  pe(() => {
    a(), setTimeout(() => n.value = true, 300);
  }), oe(t, a, { immediate: true });
  const o = j({ left: "0px", width: "0px" });
  function a() {
    var _a2, _b, _c2;
    const s = (_b = (_a2 = globalThis.document) == null ? void 0 : _a2.querySelector(`#${i}-${t.value}`)) == null ? void 0 : _b.parentElement;
    s && ((_c2 = globalThis.window) == null ? void 0 : _c2.requestAnimationFrame(() => {
      o.value = { left: `${s.offsetLeft}px`, width: `${s.offsetWidth}px` };
    }));
  }
  return (s, r) => (D(), $("div", md, [(D(true), $(Me, null, Ke(s.options, (l, c) => (D(), $("label", { key: c, "data-state": t.value === l ? "active" : void 0, text: "12 neutral-800 data-active:neutral hocus:neutral-900", flex: "~ items-center", relative: "", "z-2": "", "h-max": "", "cursor-pointer": "", "select-none": "", "rounded-full": "", "px-8": "", "py-4": "", "lh-none": "", "transition-colors": "", "nq-label": "" }, [ks(k("input", { id: `${g(i)}-${l}`, "onUpdate:modelValue": r[0] || (r[0] = (d) => t.value = d), type: "radio", value: l, "sr-only": "", onMousedown: r[1] || (r[1] = We(() => {
  }, ["prevent"])) }, null, 40, _d), [[Ss, t.value]]), ze(" " + se(l), 1)], 8, gd))), 128)), k("div", { absolute: "", "top-2": "", "z-1": "", "h-20": "", "rounded-full": "", "bg-neutral-0": "", style: $o({ ...o.value, transition: n.value ? "left 300ms, width 200ms" : "" }) }, null, 4)]));
} }), yd = Object.assign($e(vd, [["__scopeId", "data-v-9054fd82"]]), { __name: "PillSelector" }), xd = Vo(kr), bd = { "max-w": "$nq-max-width", outline: "~ 1.5 neutral-400", "mx-auto": "", "size-full": "", "min-h-128": "", "rounded-8": "", "bg-neutral-0": "", stack: "" }, wd = { "self-start": "!", "justify-self-end": "!", relative: "", "top--25": "", "z-10": "", "mr--32": "", "w-max": "" }, kd = { style: { "background-image": "radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" }, text: "f-lg white", rounded: "6 br-0", "f-px": "16/20", relative: "", "z-2": "", "ml-auto": "", "w-max": "", "pl-20": "", "f-pr": "28/20", "lh-none": "", "f-py-xs": "" }, Sd = K({ __name: "RibbonContainer", props: { label: {}, floatingStarts: { type: Boolean, default: true } }, setup(e8) {
  return (t, n) => {
    const i = xd;
    return D(), $("div", bd, [le(t.$slots, "default"), k("div", wd, [n[0] || (n[0] = k("div", { "aria-hidden": "", absolute: "", "bottom-0": "", "right-0": "", "z-1": "", "w-44": "", "origin-bottom-right": "", "translate-y--1": "", "rotate--45": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), t.floatingStarts ? (D(), V(i, { key: 0, translate: "-50%", absolute: "", left: "50%", top: "30%", "z-1": "", color: "#e9b213" })) : ie("", true), k("div", kd, se(t.label), 1)])]);
  };
} }), Td = Object.assign(Sd, { __name: "RibbonContainer" });
function Di() {
  const e8 = Yt({ key: ["nim-price", "now"], query: async () => (await $l([Vt.NIM], [he.USD])).nim.usd || 0, staleTime: 6e4 }), t = Yt({ key: ["nim-price", "1d-ago"], query: async () => {
    const n = Date.now() - 864e5;
    return (await Ul(Vt.NIM, he.USD, [n])).get(n) || 0;
  }, staleTime: 24 * 60 * 60 * 1e3 });
  return { price: e8.data, priceState: e8.state, priceLoading: e8.isLoading, priceError: e8.error, price1DayAgo: t.data, price1DayAgoState: t.state, price1DayAgoLoading: t.isLoading, price1DayAgoError: t.error, deltaPrice: B(() => !e8.data.value || !t.data.value ? 0 : e8.data.value - t.data.value) };
}
function Md() {
  const { currencyUsdRatio: e8, currencyInfo: t } = ca(), { price: n, price1DayAgo: i } = Di(), o = Ii(Date.now()), a = Ii(Date.now() - 24 * 60 * 60 * 1e3), s = B(() => o * (n.value || 0)), r = B(() => s.value * e8.value), l = Ut(r, t), c = B(() => {
    if (!n.value || !i.value) return;
    const x = a * i.value;
    return (s.value - x) / x;
  }), { data: d, state: u } = Yt({ key: B(() => ["trading_volume", t.value.code]), query: async () => {
    try {
      const x = new URL("https://data-api.cryptocompare.com/index/cc/v1/historical/days"), y = new URLSearchParams({ instrument: "NIM-USD", limit: "1", response_format: "JSON" });
      x.search = y.toString();
      const S = await Ae(x.toString(), oi.CryptoCompare);
      if (!S || !S.Data || !S.Data["NIM-USD"].length) throw new Error("Failed to fetch trading volume");
      const T = S.Data["NIM-USD"], { VALUE: M } = T.at(0), C = M * e8.value;
      let W = 0;
      if (T.length > 1) {
        const { VALUE: N } = T.at(1);
        W = (M - N) / N;
      }
      const U = T.map((N) => N.TIMESTAMP), Q = Ut(C, t);
      return { volumeUsd: M, volumeFormatted: Q, volumeChange: W, volumeTimestamps: U };
    } catch (x) {
      return console.error("Error fetching volume data:", x), { volume: 0, volumeFormatted: "0", volumeChange: 0, volumeTimestamps: [] };
    }
  }, staleTime: 60 * 5 * 1e3 }), h = B(() => {
    var _a2;
    return ((_a2 = d.value) == null ? void 0 : _a2.volume) || 0;
  }), f = Ut(h, t), p = B(() => {
    var _a2;
    return ((_a2 = d.value) == null ? void 0 : _a2.volumeChange) || 0;
  }), m = B(() => `${Oi(o)} NIM`), _ = 21e9, v = B(() => `${Oi(_)} NIM`);
  return { marketCapUsd: s, marketCapUserCurrency: r, marketCapUserCurrencyFormatted: l, marketCapChange: c, volume: h, volumeState: u, volumeFormatted: f, volumeChange: p, currentSupply: o, currentSupplyFormatted: m, maxSupply: _, maxSupplyFormatted: v };
}
const Dd = 24 * 60 * 60 * 1e3, Po = { "1y": 7, "2y": 14, "5y": 30 }, Cd = { "1y": 365, "2y": 730, "5y": 1825 };
function Rd(e8) {
  const t = Pn("use_nim_price_period", "1y"), n = Date.now(), i = n - Cd[t.value] * Dd, o = B(() => Po[t.value] || 7), a = B(() => `nimPriceHistory-${Lt(e8)}-${t.value}`), s = Pn(a, []), r = B(() => {
    var _a2, _b;
    return s.value.length && (((_a2 = s.value.at(0)) == null ? void 0 : _a2.at(0)) || 0) > i ? i : s.value.length && ((_b = s.value.at(0)) == null ? void 0 : _b.at(0)) || i;
  }), l = B(() => {
    var _a2, _b;
    return s.value.length && (((_a2 = s.value.at(-1)) == null ? void 0 : _a2.at(0)) || 0) < n ? n : s.value.length && ((_b = s.value.at(-1)) == null ? void 0 : _b.at(0)) || n;
  }), c = B(() => ["nimPriceHistory", Lt(e8), t.value, o.value, r.value, l.value]), { data: d, refetch: u, error: h, state: f } = Yt({ key: c, query: () => Gt(Vt.NIM, Lt(e8), r.value, l.value, oi.CryptoCompare, { interval: "days", aggregate: o.value }), placeholderData: s.value });
  oe(d, (_) => {
    _ && (s.value = Ad(s.value, _));
  }), pe(() => {
    d.value || u();
  });
  const p = Object.keys(Po), m = B(() => {
    var _a2, _b;
    return !d.value || !d.value.length || !((_a2 = d.value.at(-1)) == null ? void 0 : _a2.length) ? null : ((_b = d.value.at(-1)) == null ? void 0 : _b[0]) || 0;
  });
  return { data: d, error: h, state: f, refetch: u, period: t, periodOptions: p, lastUpdated: m };
}
function Ad(e8, t) {
  const n = /* @__PURE__ */ new Map();
  for (const [o, a] of e8) n.set(o, a);
  for (const [o, a] of t) n.set(o, a);
  const i = Array.from(n.entries());
  return i.sort((o, a) => o[0] - a[0]), i;
}
function Ed(e8, t = "bottom") {
  return B(() => {
    const i = Lt(e8);
    if (!i || i.length < 2) return t;
    let o = 1 / 0, a = -1 / 0;
    for (const [, u] of i) u < o && (o = u), u > a && (a = u);
    const s = Math.max(5, Math.floor(i.length / 4)), r = i.slice(-s);
    let l = 0;
    for (const [, u] of r) l += u;
    const c = l / r.length, d = o + (a - o) / 2;
    return c >= d ? "bottom" : "top";
  });
}
const Nd = Vo(pd), Pd = { flex: "~ col gap-8", "z-1": "" }, Bd = { flex: "~ gap-8 items-center" }, Id = { text: "f-lg neutral", "data-allow-mismatch": "", "whitespace-nowrap": "", "font-semibold": "", "lh-none": "" }, Od = { "w-6ch": "", "font-semibold": "", "lh-none": "", "f-text-sm": "" }, Ld = { flex: "~ gap-6 items-center" }, $d = { text: "f-xs neutral-800", "w-max": "", "font-normal": "", "lh-none": "" }, Ud = { text: "blue f-3xl", "font-semibold": "", "lh-none": "" }, Fd = { key: 1, flex: "~ items-center", text: "f-2xs neutral-700", "font-semibold": "", "lh-none": "" }, Hd = { grid: "~ cols-1 md:cols-[max-content_1fr]", "size-full": "", "of-hidden": "" }, Yd = { relative: "", "md:border": "r-1 solid neutral-400", "w-full": "", grid: "~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24", "of-x-auto": "", "f-p-md": "", "max-md:row-start-2": "" }, Vd = { key: 0, "max-md": "col-span-full sticky left-0 w-[calc(100vw-80px)]", flex: "~ md:col gap-col-4 gap-row-8 max-md:justify-center", text: "f-2xs neutral-800", "lh-none": "", "md:mt-auto": "" }, Gd = { group: "", relative: "", "f-pb-xs": "" }, Kd = { absolute: "", "right-32": "", "top-32": "" }, Wd = { flex: "~ items-center justify-center gap-8", "f-mt-md": "", text: "center f-sm" }, zd = K({ __name: "PriceChart", props: ii(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { currency: t, currencyInfo: n } = ca(), { marketCapChange: i, maxSupplyFormatted: o, currentSupplyFormatted: a, volumeChange: s, volumeFormatted: r, marketCapUserCurrencyFormatted: l } = Md(), { data: c, lastUpdated: d, period: u, periodOptions: h } = Rd(t), { deltaPrice: f } = Di(), p = Ed(c), [m, _] = Ai(), [v, x] = Ai();
  return (y, S) => {
    const T = Qn, M = Js, C = Bs, W = Nd, U = yd, Q = ua, N = Td, P = Oo, F = en;
    return D(), $("div", null, [R(g(m), null, { default: I(({ metricValue: Y, metricChange: z, label: ce, tooltipInfo: ke }) => [k("div", Pd, [k("div", Bd, [k("span", Id, se(Y), 1), z ? (D(), $("div", { key: 0, class: ye(z < 0 ? "text-red" : "text-green"), flex: "~ gap-2 items-center" }, [k("div", { class: ye({ "rotate-180": z < 0 }), "aria-hidden": "", "size-7": "", "i-nimiq:triangle-up": "" }, null, 2), k("span", Od, se(("formatPercentage" in y ? y.formatPercentage : g(Li))(z)), 1)], 2)) : ie("", true)]), k("div", Ld, [k("p", $d, se(ce), 1), ke ? (D(), V(M, { key: 0 }, { default: I(() => [R(T, { wrapper: "div", field: ke }, null, 8, ["field"])]), _: 2 }, 1024)) : ie("", true)])])]), _: 1 }), R(g(v), null, { default: I(({ data: [Y, z], deltaPriceOneDay: ce }) => [k("div", { flex: "~ col gap-8", relative: "", "bg-neutral-0": "", f: "$side $side-min-20 $side-max-24", "f-py-xs": "", class: ye({ "top-21 mx-20": !ce }) }, [S[2] || (S[2] = k("div", { absolute: "", "inset-y-0": "", left: "[calc(var(--f-side)*-1)]", w: "$f-side", "bg-gradient": "from-transparent to-neutral-0 to-r" }, null, -1)), S[3] || (S[3] = k("div", { absolute: "", "inset-y-0": "", right: "[calc(var(--f-side)*-1)]", w: "$f-side", "bg-gradient": "from-neutral-0 to-transparent to-r", "f-w-md": "" }, null, -1)), k("p", Ud, se(("formatFiat" in y ? y.formatFiat : g(Ut))(z, g(n), { maxDecimals: Number.POSITIVE_INFINITY })), 1), ce ? (D(), $("div", Fd, [k("div", { "mr-4": "", "size-8": "", "i-nimiq:triangle-up": "", class: ye({ "rotate-180": ce < 0 }) }, null, 2), k("span", null, se(Math.abs(ce)) + " (" + se(("formatPercentage" in y ? y.formatPercentage : g(Li))(ce / z)) + ")", 1)])) : (D(), V(C, { key: 0, datetime: Y, year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", text: "f-2xs right neutral-700", "lh-none": "", "nq-label": "" }, null, 8, ["datetime"]))], 2)]), _: 1 }), R(N, { label: y.slice.primary.nimPriceChartLabel, "z-3": "", "md:min-h-45vh": "" }, { default: I(() => {
      var _a2;
      return [k("div", Hd, [k("aside", Yd, [R(g(_), { "metric-value": g(l), "metric-change": g(i), label: y.slice.primary.marketCapLabel, "tooltip-info": y.slice.primary.marketCapInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), R(g(_), { "metric-value": g(r), "metric-change": g(s), label: y.slice.primary.volume24HLabel, "tooltip-info": y.slice.primary.volume24HInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), R(g(_), { "metric-value": g(a), label: y.slice.primary.totalSupplyLabel, "tooltip-info": y.slice.primary.totalSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), R(g(_), { "metric-value": g(o), label: y.slice.primary.maxSupplyLabel, "tooltip-info": y.slice.primary.maxSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), g(d) ? (D(), $("div", Vd, [S[4] || (S[4] = k("span", null, "Last updated:", -1)), R(C, { datetime: g(d), year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }, null, 8, ["datetime"])])) : ie("", true)]), k("div", Gd, [R(W, { data: g(c) || [], leader: "", "h-full": "", "rounded-8": "" }, { default: I(({ data: [Y, z] }) => [R(g(x), { data: [Y, z] }, null, 8, ["data"])]), _: 1 }, 8, ["data"]), k("div", Kd, [R(g(x), { "transition-opacity": "", "leader-hocus:invisible": "", data: ((_a2 = g(c)) == null ? void 0 : _a2.at(-1)) || [0, 0], "delta-price-one-day": g(f) }, null, 8, ["data", "delta-price-one-day"])]), k("div", { absolute: "", class: ye(g(p) === "top" ? "top-128" : "bottom-64"), "f-right-md": "", flex: "~ items-center gap-8" }, [R(U, { modelValue: g(u), "onUpdate:modelValue": S[0] || (S[0] = (Y) => Ye(u) ? u.value = Y : null), options: g(h), "self-end": "", "justify-self-end": "", ring: "white 3" }, null, 8, ["modelValue", "options"]), R(Q, { modelValue: g(t), "onUpdate:modelValue": S[1] || (S[1] = (Y) => Ye(t) ? t.value = Y : null), bg: "darkblue hocus:neutral-200", transition: "[background-color]", "h-full": "", "rounded-full": "", "px-2": "", "text-14": "", "font-normal": "", "nq-label": "", text: "white hocus:neutral", ring: "white 3", border: "~ 1.5 neutral-200" }, { trigger: I(({ selectedCurrency: Y }) => [ze(se(Y.toLocaleUpperCase()), 1)]), _: 1 }, 8, ["modelValue"])], 2)])])];
    }), _: 1 }, 8, ["label"]), k("p", Wd, [ze(se(y.slice.primary.poweredByLabel) + " ", 1), R(F, { field: y.slice.primary.poweredByLink }, { default: I(() => [R(P, { op: "80 hocus:100", field: y.slice.primary.poweredByLogo, "w-full": "", "transition-opacity": "", "f-h-sm": "" }, null, 8, ["field"])]), _: 1 }, 8, ["field"])])]);
  };
} }), qd = Object.assign(zd, { __name: "PriceChart" }), jd = {};
function Zd(e8, t) {
  return D(), $(Me, null, [t[0] || (t[0] = k("div", { absolute: "", "inset-0": "", "bottom-96": "", "z-2": "", "max-w-none": "", "of-hidden": "", f: "$top $top-min-80 $top-base-vh $top-max-110" }, [k("div", { absolute: "", "h-180vh": "", "w-screen": "", class: "bg-radial" }), k("div", { absolute: "", "bg-gradient-fn": "from-neutral-0 ease-in to-$orange to-b", h: "$f-top", "w-screen": "" }), k("div", { absolute: "", "bottom-30vh": "", top: "$f-top", "w-screen": "", bg: "$orange" }), k("div", { absolute: "", "bottom-0": "", "h-30vh": "", "w-screen": "", "bg-gradient-fn": "from-$orange ease-out to-neutral-0 to-b" })], -1)), k("div", re({ "z-3": "" }, e8.$attrs), [le(e8.$slots, "default", {}, void 0, true)], 16)], 64);
}
const Xd = Object.assign($e(jd, [["render", Zd], ["__scopeId", "data-v-3fbe3148"]]), { __name: "BgBuyAndSell" });
function Qd() {
  const { price: e8 } = Di(), t = j(1), n = j(t.value * (e8.value ?? 0)), i = j(he.USD), o = j("NIM"), a = B({ get() {
    return n.value;
  }, set(r) {
    n.value = r, t.value = r / (e8.value ?? 1);
  } }), s = B({ get() {
    return t.value;
  }, set(r) {
    t.value = r, n.value = r * (e8.value ?? 0);
  } });
  return { fiatAmount: a, cryptoAmount: s, fiatCurrency: i, cryptoCurrency: o };
}
const Jd = { relative: "", "of-x-clip": "", "bg-neutral-0": "" }, ef = { group: "", relative: "", "w-full": "", flex: "~ items-center gap-12" }, tf = { absolute: "", "right-4": "", "top-10": "", text: "neutral-600 group-hover:blue/50 group-focus-within:blue!" }, nf = { group: "", relative: "", "w-full": "" }, of = K({ __name: "BuyAndSell", props: ii(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { fiatAmount: t, cryptoAmount: n, fiatCurrency: i } = Qd();
  return (o, a) => {
    const s = Uo, r = As, l = ua, c = qd, d = Xd;
    return D(), $("section", Jd, [R(d, { "w-full": "" }, { default: I(() => [R(s, { headline: o.slice.primary.headline, subline: o.slice.primary.subline }, null, 8, ["headline", "subline"]), k("form", { flex: "~ md:row col items-center  gap-x-24", "mx-auto": "", "mt-40": "", "h-max": "", "w-max": "", onSubmit: a[3] || (a[3] = We(() => {
    }, ["prevent"])) }, [k("div", ef, [R(r, { modelValue: g(t), "onUpdate:modelValue": a[0] || (a[0] = (u) => Ye(t) ? t.value = u : null), required: "", "pr-64": "", "f-text-2xl": "", decimals: 8 }, null, 8, ["modelValue"]), k("div", tf, [R(l, { modelValue: g(i), "onUpdate:modelValue": a[1] || (a[1] = (u) => Ye(i) ? i.value = u : null) }, null, 8, ["modelValue"])])]), a[5] || (a[5] = k("p", { "h-max": "", "text-32": "", "max-md:hidden": "" }, " = ", -1)), k("div", nf, [R(r, { modelValue: g(n), "onUpdate:modelValue": a[2] || (a[2] = (u) => Ye(n) ? n.value = u : null), required: "", "f-text-2xl": "" }, null, 8, ["modelValue"]), a[4] || (a[4] = k("div", { absolute: "", "inset-y-12": "", "right-12": "", "font-bold": "", "transition-colors": "", text: "neutral-600 group-hover:blue/50 group-focus-within:blue!" }, " NIM ", -1))])], 32), R(c, re({ "mt-96": "" }, o.$props), null, 16)]), _: 1 })]);
  };
} }), af = Object.assign(of, { __name: "HeroBuyAndSell" }), sf = { "of-x-clip": "", "bg-darkerblue": "", "px-0": "", "pb-0": "", "f-pt-3xl": "" }, rf = { "z-1": "", "max-w-none": "", "w-full": "", "bg-neutral-100": "" }, lf = { key: 0, flex: "~ gap-8 items-center", "text-white": "", "f-mt-sm": "" }, cf = { "size-40": "", "rounded-full": "", stack: "", ring: "1.5 white/40" }, uf = { "size-40": "", "rounded-full": "", stack: "", ring: "1.5 white/40" }, hf = { key: 2, "f-mt-sm": "" }, df = { text: "f-xs white/50", "nq-label": "" }, ff = { flex: "~ gap-8 items-center", "text-white": "", "f-mt-2xs": "" }, pf = K({ __name: "OasisWorld", props: { items: {}, label: {} }, async setup(e8) {
  let t, n;
  const { data: i } = ([t, n] = Ts(() => Mr()), t = await t, n(), t), o = Ms("scroller"), a = B(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.querySelector("ul");
  }), { x: s } = $s(a), { width: r } = Us(a), l = B(() => {
    if (!r.value || !a.value) return 0;
    const h = a.value.scrollWidth, f = r.value - h, p = Math.min(100, Math.max(0, -s.value / f * 100));
    return Math.round(p) / 100;
  }), c = { Europe: "bg-green", "Central America": "bg-blue", World: "bg-orange" }, d = { Europe: ["i-nimiq:logos-euro-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-usd-outline-mono", "i-nimiq:logos-colones-outline-mono"], World: [] }, u = { Europe: ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x-0.5"], World: [] };
  return (h, f) => {
    const p = Qn, m = en, _ = Sr;
    return D(), $("section", sf, [k("div", { class: ye(["world-container", { first: g(l) < 0.33, second: g(l) >= 0.33 && g(l) < 0.66, third: g(l) >= 0.66 }]), style: $o(`--progress: ${g(l)}`), relative: "", "aspect-2": "", "max-w-none": "", "w-full": "" }, f[0] || (f[0] = [k("div", { absolute: "", "left-0": "", "top-0": "" }, [k("div", { rounded: "100%", class: "oval", "bg-neutral-100": "", stack: "" }, [k("div", { "i-oasis-regions:europe": "" }), k("div", { "i-oasis-regions:central-america": "" }), k("div", { "i-oasis-regions:rest-of-the-world": "" })])], -1)]), 6), k("div", rf, [k("div", { ref_key: "scroller", ref: a, relative: "", "mx-auto": "", "max-w-480": "", "w-full": "" }, [R(_, { items: h.items, style: { "--px": "32px", "--pb": "64px" } }, { default: I(({ item: { content: v, kind: x, link: y } }) => [k("div", { class: ye(c[x]), "max-w-480": "", "w-full": "", "rounded-8": "", "f-p-lg": "", "md:w-416": "" }, [R(p, { wrapper: "div", field: v, class: "dark", "nq-prose-compact": "", "text-white": "" }, null, 8, ["field"]), x !== "World" ? (D(), $("div", lf, [(D(true), $(Me, null, Ke(d[x], (S, T) => (D(), $("div", { key: T, flex: "~ gap-8" }, [k("div", cf, [k("div", { class: ye(S), "size-24": "" }, null, 2)])]))), 128)), f[1] || (f[1] = k("div", { "mx-12": "", "op-50": "", "i-nimiq:exchange": "", "f-text-2xl": "" }, null, -1)), (D(true), $(Me, null, Ke(u[x], (S, T) => (D(), $("div", { key: T, flex: "~ gap-8" }, [k("div", uf, [k("div", { class: ye(S), "size-24": "" }, null, 2)])]))), 128))])) : ie("", true), ("hasLink" in h ? h.hasLink : g(Tr))(y) ? (D(), V(m, { key: 1, field: y, "internal-component": "a", external: "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-white": "", "f-mt-md": "" }, null, 8, ["field"])) : ie("", true), x !== "Europe" ? (D(), $("div", hf, [k("h4", df, se(h.label), 1), k("div", ff, [R(m, { field: g(i).x.link, "internal-component": "a", bg: "white/20 hocus:white/40", external: "", "size-40": "", "rounded-full": "", "transition-colors": "", stack: "" }, { default: I(() => f[2] || (f[2] = [k("div", { text: "white/80 f-xl", "transition-colors": "", "i-nimiq:logos-twitter-mono": "" }, null, -1)])), _: 2 }, 1032, ["field"]), R(m, { field: g(i).telegram.link, "internal-component": "a", bg: "white/20 hocus:white/40", external: "", "size-40": "", "rounded-full": "", "transition-colors": "", stack: "" }, { default: I(() => f[3] || (f[3] = [k("div", { text: "white/80 f-lg hocus:white", "translate-x--1": "", "translate-y-1": "", "transition-colors": "", "i-nimiq:logos-telegram-mono": "" }, null, -1)])), _: 2 }, 1032, ["field"])])])) : ie("", true)], 2)]), _: 1 }, 8, ["items"])], 512)])]);
  };
} }), mf = Object.assign($e(pf, [["__scopeId", "data-v-85d7818b"]]), { __name: "HeroOasisWorld" }), Zf = K({ __name: "index", props: ii(), setup(e8) {
  return (t, n) => {
    const i = cs, o = sl, a = kl, s = Is, r = Al, l = af, c = mf;
    return D(), $(Me, null, [t.slice.variation === "default-slice" ? (D(), V(i, re({ key: 0 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ie("", true), t.slice.variation === "twoColumn" ? (D(), V(o, re({ key: 1 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ie("", true), t.slice.variation === "home2024" ? (D(), V(a, { key: 2, headline: t.slice.primary.headline, "sub-headline-template": t.slice.primary.subheadline, cta: t.slice.primary.cta, "cta-label": t.slice.primary.cta_label, "data-slice-type": t.slice.slice_type }, null, 8, ["headline", "sub-headline-template", "cta", "cta-label", "data-slice-type"])) : ie("", true), t.slice.variation === "leftAligned" ? (D(), V(s, { key: 3, headline: t.slice.primary.headline, subline: t.slice.primary.subline }, null, 8, ["headline", "subline"])) : ie("", true), t.slice.variation === "staking" ? (D(), V(r, { key: 4, headline: t.slice.primary.headline, cta: t.slice.primary.cta }, null, 8, ["headline", "cta"])) : ie("", true), t.slice.variation === "buyAndSell" ? (D(), V(l, Xn(re({ key: 5 }, t.$props)), null, 16)) : ie("", true), t.slice.variation === "oasis" ? (D(), V(c, { key: 6, items: t.slice.primary.items, label: t.slice.primary.beTheFirstToKnowLabel }, null, 8, ["items", "label"])) : ie("", true)], 64);
  };
} });
export {
  Zf as default
};
