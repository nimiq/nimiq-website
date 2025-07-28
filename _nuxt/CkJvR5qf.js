var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as Pr } from "./DJp7Yxf2.js";
import { d as $, j as P, Y as ae, b as I, o as T, m as Z, c as Y, r as nt, F as Ee, w as R, a as D, u as m, R as K, aq as Gn, U as Ke, C as O, f as ie, a2 as Se, ar as ji, G as re, a1 as Nr, am as Je, W as ft, a0 as ot, H as Ae, as as Zi, S as cn, at as Lr, au as Br, g as Ge, t as le, T as Xi, h as _t, V as qt, e as w, E as Qi, Z as un, n as ge, av as Vo, i as We, I as Nn, _ as Ir, D as Or, k as $r, ah as Ji, aw as Ln, a6 as xt, a5 as dn, $ as Ur, ax as Hr, ag as Fr, ay as ea, ak as ta, al as Vr, ad as na, az as jt, a3 as Yr, aA as Ft, a4 as Gr, aB as zr, v as Kr } from "./BguRs3jF.js";
import { _ as oa } from "./BcNiqOM3.js";
import { _ as lo } from "./DxbAjo62.js";
import { _ as ia } from "./CrnXQicC.js";
import { _ as Wr } from "./CoyLu42C.js";
import { u as qr } from "./BHoc60Y9.js";
import { _ as jr, a as Zr } from "./-oX2BwVf.js";
import { u as Xr, a as Qr, b as aa, c as Jr, _ as es, d as ts } from "./BFMIjy9Q.js";
import { _ as ns } from "./BAG3nKkl.js";
import { _ as os } from "./DtqghrnH.js";
import { n as is, o as as, p as Yo, k as rs, c as Go, e as ss, q as ls } from "./Cn5kCPLx.js";
import { u as ra } from "./BghiwBAd.js";
import { _ as cs, a as us, b as ds, c as hs, u as fs } from "./C8aoRHDt.js";
import { u as ce, P as _e, c as qe, a as Nt, j as zt, r as ps, b as co, f as hn, g as Zt, d as sa, k as ms, w as gs } from "./CMmzeBWC.js";
import { a as yt, _ as vs, u as uo } from "./QoFfB0oT.js";
import { u as ho } from "./qA1gjzOk.js";
import { c as _s, b as ys, _ as bs, h as xs, d as ws } from "./BIPleKtX.js";
import { a as Ss, _ as ks } from "./DSbx5aGI.js";
import { b as fo, a as la, i as fn, c as Ts, C as Cs, d as Ms, e as Ds, g as Rs, f as ne, h as ut, j as wt, k as zo, l as As, m as Es, S as Ps, n as Bn, o as ca, p as Lt, q as we, r as ua, s as Ko, t as pn, u as et, v as Ne, w as Ie, x as da, y as At, z as Ns, A as De, F as ha, T as Ls, P as z, B as Bs, D as Is, V as Wo, E as Os, G as $s, H as Us, I as lt, J as qo, K as Hs, L as Fs, M as Vs, N as Ys, O as Gs, Q as It, R as po, U as fa, W as pa, X as zs, Y as Ks, Z as mn, _ as Ws } from "./CAKls8H8.js";
import { _ as qs } from "./CMAmxNdM.js";
import { g as mo } from "./CpsPJSKh.js";
import { p as jo, f as Zo, a as go, b as Xo, c as js } from "./BV8IEK2s.js";
import { T as Zs } from "./D0DW2WUk.js";
import { i as Xs, b as Qs } from "./DeSMYd_K.js";
import { _ as Js } from "./fA0VcFOF.js";
import { a as el } from "./BNXriZyS.js";
import { u as tl } from "./Dvca-oHQ.js";
import "./T2yBj71G.js";
import "./CqkleIqs.js";
import "./Dqp79TGT.js";
function nl() {
  return { ALT: "Alt", ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp", BACKSPACE: "Backspace", CAPS_LOCK: "CapsLock", CONTROL: "Control", DELETE: "Delete", END: "End", ENTER: "Enter", ESCAPE: "Escape", F1: "F1", F10: "F10", F11: "F11", F12: "F12", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", HOME: "Home", META: "Meta", PAGE_DOWN: "PageDown", PAGE_UP: "PageUp", SHIFT: "Shift", SPACE: " ", TAB: "Tab", CTRL: "Control", ASTERISK: "*", SPACE_CODE: "Space" };
}
const ol = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function il(e8, t) {
  return t !== "rtl" ? e8 : e8 === "ArrowLeft" ? "ArrowRight" : e8 === "ArrowRight" ? "ArrowLeft" : e8;
}
function al(e8, t, n) {
  const o = il(e8.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return ol[o];
}
const Qo = $({ inheritAttrs: false, __name: "VisuallyHiddenInputBubble", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, { primitiveElement: n, currentElement: o } = yt(), i = P(() => t.checked ?? t.value);
  return ae(i, (a, r) => {
    if (!o.value) return;
    const s = o.value, l = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(l, "value").set;
    if (h && a !== r) {
      const d = new Event("input", { bubbles: true }), u = new Event("change", { bubbles: true });
      h.call(s, a), s.dispatchEvent(d), s.dispatchEvent(u);
    }
  }), (a, r) => (T(), I(vs, Z({ ref_key: "primitiveElement", ref: n }, { ...t, ...a.$attrs }, { as: "input" }), null, 16));
} }), rl = $({ inheritAttrs: false, __name: "VisuallyHiddenInput", props: { name: {}, value: {}, checked: { type: Boolean, default: void 0 }, required: { type: Boolean }, disabled: { type: Boolean }, feature: { default: "fully-hidden" } }, setup(e8) {
  const t = e8, n = P(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = P(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((i, a) => typeof i == "object" ? Object.entries(i).map(([r, s]) => ({ name: `[${t.name}][${a}][${r}]`, value: s })) : { name: `[${t.name}][${a}]`, value: i }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([i, a]) => ({ name: `[${t.name}][${i}]`, value: a })) : []);
  return (i, a) => n.value ? (T(), I(Qo, Z({ key: i.name }, { ...t, ...i.$attrs }, { name: i.name, value: i.value }), null, 16, ["name", "value"])) : (T(true), Y(Ee, { key: 1 }, nt(o.value, (r) => (T(), I(Qo, Z({ key: r.name, ref_for: true }, { ...t, ...i.$attrs }, { name: r.name, value: r.value }), null, 16, ["name", "value"]))), 128));
} }), sl = $({ __name: "ComboboxAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { forwardRef: t } = ce();
  return (n, o) => (T(), I(m(cs), { "as-child": "", reference: n.reference }, { default: R(() => [D(m(_e), Z({ ref: m(t), "as-child": n.asChild, as: n.as }, n.$attrs), { default: R(() => [K(n.$slots, "default")]), _: 3 }, 16, ["as-child", "as"])]), _: 3 }, 8, ["reference"]));
} });
function ll(e8) {
  const t = P(() => m(e8)), n = P(() => new Intl.Collator("en", { usage: "search", ...t.value }));
  return { startsWith: (r, s) => s.length === 0 ? true : (r = r.normalize("NFC"), s = s.normalize("NFC"), n.value.compare(r.slice(0, s.length), s) === 0), endsWith: (r, s) => s.length === 0 ? true : (r = r.normalize("NFC"), s = s.normalize("NFC"), n.value.compare(r.slice(-s.length), s) === 0), contains: (r, s) => {
    if (s.length === 0) return true;
    r = r.normalize("NFC"), s = s.normalize("NFC");
    let l = 0;
    const c = s.length;
    for (; l + c <= r.length; l++) {
      const h = r.slice(l, l + c);
      if (n.value.compare(s, h) === 0) return true;
    }
    return false;
  } };
}
function cl(e8, t, n) {
  return e8 === void 0 ? false : Array.isArray(e8) ? e8.some((o) => Et(o, t, n)) : Et(e8, t, n);
}
function Et(e8, t, n) {
  return e8 === void 0 || t === void 0 ? false : typeof e8 == "string" ? e8 === t : typeof n == "function" ? n(e8, t) : typeof n == "string" ? (e8 == null ? void 0 : e8[n]) === (t == null ? void 0 : t[n]) : Gn(e8, t);
}
function ul(e8, t, n) {
  const o = e8.findIndex((s) => Gn(s, t)), i = e8.findIndex((s) => Gn(s, n));
  if (o === -1 || i === -1) return [];
  const [a, r] = [o, i].sort((s, l) => s - l);
  return e8.slice(a, r + 1);
}
const [gn, dl] = qe("ListboxRoot"), hl = $({ __name: "ListboxRoot", props: { modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, orientation: { default: "vertical" }, dir: {}, disabled: { type: Boolean }, selectionBehavior: { default: "toggle" }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(e8, { expose: t, emit: n }) {
  const o = e8, i = n, { multiple: a, highlightOnHover: r, orientation: s, disabled: l, selectionBehavior: c, dir: h } = Ke(o), { getItems: d } = uo({ isProvider: true }), { handleTypeaheadSearch: u } = Xr(), { primitiveElement: f, currentElement: p } = yt(), g = nl(), y = ho(h), v = Qr(p), _ = O(), b = O(false), k = O(true), C = Nt(o, "modelValue", i, { defaultValue: o.defaultValue ?? (a.value ? [] : void 0), passive: o.modelValue === void 0, deep: true });
  function M(E) {
    if (b.value = true, o.multiple) {
      const V = Array.isArray(C.value) ? [...C.value] : [], x = V.findIndex((N) => Et(N, E, o.by));
      o.selectionBehavior === "toggle" ? (x === -1 ? V.push(E) : V.splice(x, 1), C.value = V) : (C.value = [E], _.value = E);
    } else o.selectionBehavior === "toggle" && Et(C.value, E, o.by) ? C.value = void 0 : C.value = E;
    setTimeout(() => {
      b.value = false;
    }, 1);
  }
  const A = O(null), W = O(null), G = O(false), Q = O(false), B = zt(), U = zt(), L = zt();
  function F() {
    return d().map((E) => E.ref).filter((E) => E.dataset.disabled !== "");
  }
  function J(E, V = true) {
    if (!E) return;
    A.value = E, k.value && A.value.focus(), V && A.value.scrollIntoView({ block: "nearest" });
    const x = d().find((N) => N.ref === E);
    i("highlight", x);
  }
  function ke(E) {
    if (G.value) L.trigger(E);
    else {
      const V = d().find((x) => Et(x.value, E, o.by));
      V && (A.value = V.ref, J(V.ref));
    }
  }
  function Te(E) {
    A.value && A.value.isConnected && (E.preventDefault(), E.stopPropagation(), Q.value || A.value.click());
  }
  function Ce(E) {
    if (k.value) {
      if (b.value = true, G.value) U.trigger(E);
      else {
        const V = E.altKey || E.ctrlKey || E.metaKey;
        if (V && E.key === "a" && a.value) {
          const x = d(), N = x.map((H) => H.value);
          C.value = [...N], E.preventDefault(), J(x[x.length - 1].ref);
        } else if (!V) {
          const x = u(E.key, d());
          x && J(x);
        }
      }
      setTimeout(() => {
        b.value = false;
      }, 1);
    }
  }
  function de() {
    Q.value = true;
  }
  function Be() {
    requestAnimationFrame(() => {
      Q.value = false;
    });
  }
  function Ye() {
    Se(() => {
      const E = new KeyboardEvent("keydown", { key: "PageUp" });
      he(E);
    });
  }
  function je(E) {
    const V = A.value;
    (V == null ? void 0 : V.isConnected) && (W.value = V), A.value = null, i("leave", E);
  }
  function bt(E) {
    var _a2, _b;
    const V = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if ((_a2 = E.currentTarget) == null ? void 0 : _a2.dispatchEvent(V), i("entryFocus", V), !V.defaultPrevented) if (W.value) J(W.value);
    else {
      const x = (_b = F()) == null ? void 0 : _b[0];
      J(x);
    }
  }
  function he(E) {
    const V = al(E, s.value, y.value);
    if (!V) return;
    let x = F();
    if (A.value) {
      if (V === "last") x.reverse();
      else if (V === "prev" || V === "next") {
        V === "prev" && x.reverse();
        const N = x.indexOf(A.value);
        x = x.slice(N + 1);
      }
      ye(E, x[0]);
    }
    if (x.length) {
      const N = !A.value && V === "prev" ? x.length - 1 : 0;
      J(x[N]);
    }
    if (G.value) return U.trigger(E);
  }
  function ye(E, V) {
    var _a2;
    if (!(G.value || o.selectionBehavior !== "replace" || !a.value || !Array.isArray(C.value) || (E.altKey || E.ctrlKey || E.metaKey) && !E.shiftKey) && E.shiftKey) {
      const N = d().filter((oe) => oe.ref.dataset.disabled !== "");
      let H = (_a2 = N.find((oe) => oe.ref === V)) == null ? void 0 : _a2.value;
      if (E.key === g.END ? H = N[N.length - 1].value : E.key === g.HOME && (H = N[0].value), !H || !_.value) return;
      const S = ul(N.map((oe) => oe.value), _.value, H);
      C.value = S;
    }
  }
  async function Me(E) {
    if (await Se(), G.value) B.trigger(E);
    else {
      const V = F(), x = V.find((N) => N.dataset.state === "checked");
      x ? J(x) : V.length && J(V[0]);
    }
  }
  return ae(C, () => {
    b.value || Se(() => {
      Me();
    });
  }, { immediate: true, deep: true }), t({ highlightedElement: A, highlightItem: ke, highlightFirstItem: Ye, highlightSelected: Me, getItems: d }), dl({ modelValue: C, onValueChange: M, multiple: a, orientation: s, dir: y, disabled: l, highlightOnHover: r, highlightedElement: A, isVirtual: G, virtualFocusHook: B, virtualKeydownHook: U, virtualHighlightHook: L, by: o.by, firstValue: _, selectionBehavior: c, focusable: k, onLeave: je, onEnter: bt, changeHighlight: J, onKeydownEnter: Te, onKeydownNavigation: he, onKeydownTypeAhead: Ce, onCompositionStart: de, onCompositionEnd: Be, highlightFirstItem: Ye }), (E, V) => (T(), I(m(_e), { ref_key: "primitiveElement", ref: f, as: E.as, "as-child": E.asChild, dir: m(y), "data-disabled": m(l) ? "" : void 0, onPointerleave: je, onFocusout: V[0] || (V[0] = async (x) => {
    const N = x.relatedTarget || x.target;
    await Se(), A.value && m(p) && !m(p).contains(N) && je(x);
  }) }, { default: R(() => [K(E.$slots, "default", { modelValue: m(C) }), m(v) && E.name ? (T(), I(m(rl), { key: 0, name: E.name, value: m(C), disabled: m(l), required: E.required }, null, 8, ["name", "value", "disabled", "required"])) : ie("", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), [it, fl] = qe("ComboboxRoot"), pl = $({ __name: "ComboboxRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, resetSearchTermOnBlur: { type: Boolean, default: true }, resetSearchTermOnSelect: { type: Boolean, default: true }, ignoreFilter: { type: Boolean }, modelValue: {}, defaultValue: {}, multiple: { type: Boolean }, dir: {}, disabled: { type: Boolean }, highlightOnHover: { type: Boolean }, by: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "highlight", "update:open"], setup(e8, { expose: t, emit: n }) {
  var _a2, _b, _c2;
  const o = e8, i = n, { primitiveElement: a, currentElement: r } = yt(), { multiple: s, disabled: l, ignoreFilter: c, resetSearchTermOnSelect: h, dir: d } = Ke(o), u = ho(d), f = Nt(o, "modelValue", i, { defaultValue: o.defaultValue ?? (s.value ? [] : void 0), passive: o.modelValue === void 0, deep: true }), p = Nt(o, "open", i, { defaultValue: o.defaultOpen, passive: o.open === void 0 });
  async function g(U) {
    var _a3, _b2;
    p.value = U, G.search = "", U ? (await Se(), (_a3 = a.value) == null ? void 0 : _a3.highlightSelected(), v.value = true) : v.value = false, (_b2 = b.value) == null ? void 0 : _b2.focus(), setTimeout(() => {
      !U && o.resetSearchTermOnBlur && y.trigger();
    }, 1);
  }
  const y = zt(), v = O(false), _ = O(false), b = O(), k = O(), C = P(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.highlightedElement) ?? void 0;
  }), M = O(/* @__PURE__ */ new Map()), A = O(/* @__PURE__ */ new Map()), { contains: W } = ll({ sensitivity: "base" }), G = ji({ search: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } });
  function Q() {
    if (!G.search || o.ignoreFilter || _.value) {
      G.filtered.count = M.value.size;
      return;
    }
    G.filtered.groups = /* @__PURE__ */ new Set();
    let U = 0;
    for (const [L, F] of M.value) {
      const J = W(F, G.search);
      G.filtered.items.set(L, J ? 1 : 0), J && U++;
    }
    for (const [L, F] of A.value) for (const J of F) if (G.filtered.items.get(J) > 0) {
      G.filtered.groups.add(L);
      break;
    }
    G.filtered.count = U;
  }
  ae([() => G.search, () => M.value.size], () => {
    Q();
  }, { immediate: true }), ae(() => p.value, () => {
    Se(() => {
      p.value && Q();
    });
  }, { flush: "post" });
  const B = Nr();
  return re(() => {
    var _a3, _b2, _c3;
    (B == null ? void 0 : B.exposed) && (B.exposed.highlightItem = (_a3 = a.value) == null ? void 0 : _a3.highlightItem, B.exposed.highlightFirstItem = (_b2 = a.value) == null ? void 0 : _b2.highlightFirstItem, B.exposed.highlightSelected = (_c3 = a.value) == null ? void 0 : _c3.highlightSelected);
  }), t({ filtered: P(() => G.filtered), highlightedElement: C, highlightItem: (_a2 = a.value) == null ? void 0 : _a2.highlightItem, highlightFirstItem: (_b = a.value) == null ? void 0 : _b.highlightFirstItem, highlightSelected: (_c2 = a.value) == null ? void 0 : _c2.highlightSelected }), fl({ modelValue: f, multiple: s, disabled: l, open: p, onOpenChange: g, contentId: "", isUserInputted: v, isVirtual: _, inputElement: b, highlightedElement: C, onInputElementChange: (U) => b.value = U, triggerElement: k, onTriggerElementChange: (U) => k.value = U, parentElement: r, resetSearchTermOnSelect: h, onResetSearchTerm: y.on, allItems: M, allGroups: A, filterState: G, ignoreFilter: c }), (U, L) => (T(), I(m(us), null, { default: R(() => [D(m(hl), Z({ ref_key: "primitiveElement", ref: a }, U.$attrs, { modelValue: m(f), "onUpdate:modelValue": L[0] || (L[0] = (F) => Je(f) ? f.value = F : null), style: { pointerEvents: m(p) ? "auto" : void 0 }, as: U.as, "as-child": U.asChild, dir: m(u), multiple: m(s), name: U.name, required: U.required, disabled: m(l), "highlight-on-hover": true, by: o.by, onHighlight: L[1] || (L[1] = (F) => i("highlight", F)) }), { default: R(() => [K(U.$slots, "default", { open: m(p), modelValue: m(f) })]), _: 3 }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])]), _: 3 }));
} }), ml = $({ __name: "ListboxContent", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const { CollectionSlot: t } = uo(), n = gn(), o = ps(false, 10);
  return (i, a) => (T(), I(m(t), null, { default: R(() => [D(m(_e), { role: "listbox", as: i.as, "as-child": i.asChild, tabindex: m(n).focusable.value ? m(n).highlightedElement.value ? "-1" : "0" : void 0, "aria-orientation": m(n).orientation.value, "aria-multiselectable": !!m(n).multiple.value, "data-orientation": m(n).orientation.value, onMousedown: a[0] || (a[0] = ot((r) => o.value = true, ["left"])), onFocus: a[1] || (a[1] = (r) => {
    m(o) || m(n).onEnter(r);
  }), onKeydown: [a[2] || (a[2] = ft(ot((r) => {
    m(n).focusable.value && m(n).onKeydownNavigation(r);
  }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])), ft(m(n).onKeydownEnter, ["enter"]), m(n).onKeydownTypeAhead] }, { default: R(() => [K(i.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), [gl, vl] = qe("ComboboxContent"), _l = $({ __name: "ComboboxContentImpl", props: { position: { default: "inline" }, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const n = e8, o = t, { position: i } = Ke(n), a = it(), { forwardRef: r, currentElement: s } = ce();
  _s(n.bodyLock), ys(a.parentElement);
  const l = P(() => n.position === "popper" ? n : {}), c = ds(l.value), h = { boxSizing: "border-box", "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-combobox-content-available-width": "var(--reka-popper-available-width)", "--reka-combobox-content-available-height": "var(--reka-popper-available-height)", "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)", "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)" };
  vl({ position: i });
  const d = O(false);
  return re(() => {
    a.inputElement.value && (d.value = s.value.contains(a.inputElement.value), d.value && a.inputElement.value.focus());
  }), Ae(() => {
    var _a2;
    d.value && ((_a2 = a.triggerElement.value) == null ? void 0 : _a2.focus());
  }), (u, f) => (T(), I(m(ml), { "as-child": "" }, { default: R(() => [D(m(bs), { "as-child": "", "disable-outside-pointer-events": u.disableOutsidePointerEvents, onDismiss: f[0] || (f[0] = (p) => m(a).onOpenChange(false)), onFocusOutside: f[1] || (f[1] = (p) => {
    var _a2;
    ((_a2 = m(a).parentElement.value) == null ? void 0 : _a2.contains(p.target)) && p.preventDefault(), o("focusOutside", p);
  }), onInteractOutside: f[2] || (f[2] = (p) => o("interactOutside", p)), onEscapeKeyDown: f[3] || (f[3] = (p) => o("escapeKeyDown", p)), onPointerDownOutside: f[4] || (f[4] = (p) => {
    var _a2;
    ((_a2 = m(a).parentElement.value) == null ? void 0 : _a2.contains(p.target)) && p.preventDefault(), o("pointerDownOutside", p);
  }) }, { default: R(() => [(T(), I(Zi(m(i) === "popper" ? m(hs) : m(_e)), Z({ ...u.$attrs, ...m(c) }, { id: m(a).contentId, ref: m(r), "data-state": m(a).open.value ? "open" : "closed", style: { display: "flex", flexDirection: "column", outline: "none", ...m(i) === "popper" ? h : {} } }), { default: R(() => [K(u.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "style"]))]), _: 3 }, 8, ["disable-outside-pointer-events"])]), _: 3 }));
} }), yl = $({ __name: "ComboboxArrow", props: { width: { default: 10 }, height: { default: 5 }, rounded: { type: Boolean }, asChild: { type: Boolean }, as: { default: "svg" } }, setup(e8) {
  const t = e8, n = it(), o = gl();
  return ce(), (i, a) => m(n).open.value && m(o).position.value === "popper" ? (T(), I(m(Ss), cn(Z({ key: 0 }, t)), { default: R(() => [K(i.$slots, "default")]), _: 3 }, 16)) : ie("", true);
} }), bl = $({ __name: "ComboboxContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {}, disableOutsidePointerEvents: { type: Boolean } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(e8, { emit: t }) {
  const i = fs(e8, t), { forwardRef: a } = ce(), r = it();
  return r.contentId || (r.contentId = co(void 0, "reka-combobox-content")), (s, l) => (T(), I(m(hn), { present: s.forceMount || m(r).open.value }, { default: R(() => [D(_l, Z({ ...m(i), ...s.$attrs }, { ref: m(a) }), { default: R(() => [K(s.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), [xl, Up] = qe("ComboboxGroup"), wl = $({ __name: "ListboxFilter", props: { modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, i = Nt(n, "modelValue", t, { defaultValue: "", passive: n.modelValue === void 0 }), a = gn(), { primitiveElement: r, currentElement: s } = yt(), l = P(() => n.disabled || a.disabled.value || false), c = O();
  return Lr(() => {
    var _a2;
    return c.value = (_a2 = a.highlightedElement.value) == null ? void 0 : _a2.id;
  }), re(() => {
    a.focusable.value = false, setTimeout(() => {
      var _a2;
      n.autoFocus && ((_a2 = s.value) == null ? void 0 : _a2.focus());
    }, 1);
  }), Ae(() => {
    a.focusable.value = true;
  }), (h, d) => (T(), I(m(_e), { ref_key: "primitiveElement", ref: r, as: h.as, "as-child": h.asChild, value: m(i), disabled: l.value ? "" : void 0, "data-disabled": l.value ? "" : void 0, "aria-disabled": l.value ?? void 0, "aria-activedescendant": c.value, type: "text", onKeydown: [ft(ot(m(a).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), ft(m(a).onKeydownEnter, ["enter"])], onInput: d[0] || (d[0] = (u) => {
    i.value = u.target.value, m(a).highlightFirstItem(u);
  }), onCompositionstart: m(a).onCompositionStart, onCompositionend: m(a).onCompositionEnd }, { default: R(() => [K(h.$slots, "default", { modelValue: m(i) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
} }), Sl = $({ __name: "ComboboxInput", props: { displayValue: {}, modelValue: {}, autoFocus: { type: Boolean }, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "input" } }, emits: ["update:modelValue"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = it(), a = gn(), { primitiveElement: r, currentElement: s } = yt(), l = Nt(n, "modelValue", o, { passive: n.modelValue === void 0 });
  re(() => {
    s.value && i.onInputElementChange(s.value);
  });
  function c(u) {
    i.open.value || i.onOpenChange(true);
  }
  function h(u) {
    const f = u.target;
    i.open.value ? i.filterState.search = f.value : (i.onOpenChange(true), Se(() => {
      f.value && (i.filterState.search = f.value, a.highlightFirstItem(u));
    }));
  }
  function d() {
    const u = i.modelValue.value;
    n.displayValue ? l.value = n.displayValue(u) : !i.multiple.value && u && !Array.isArray(u) && typeof u != "object" ? l.value = u.toString() : l.value = "", Se(() => {
      l.value = l.value;
    });
  }
  return i.onResetSearchTerm(() => {
    d();
  }), ae(i.modelValue, async () => {
    !i.isUserInputted.value && i.resetSearchTermOnSelect.value && d();
  }, { immediate: true, deep: true }), ae(() => n.modelValue, () => {
    n.modelValue !== void 0 && (i.filterState.search = n.modelValue);
  }), (u, f) => (T(), I(m(wl), { ref_key: "primitiveElement", ref: r, modelValue: m(l), "onUpdate:modelValue": f[0] || (f[0] = (p) => Je(l) ? l.value = p : null), as: u.as, "as-child": u.asChild, "auto-focus": u.autoFocus, "aria-expanded": m(i).open.value, "aria-controls": m(i).contentId, "aria-autocomplete": "list", role: "combobox", autocomplete: "false", onInput: h, onKeydown: ft(ot(c, ["prevent"]), ["down", "up"]) }, { default: R(() => [K(u.$slots, "default")]), _: 3 }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
} }), kl = "listbox.select", [Hp, Tl] = qe("ListboxItem"), Cl = $({ __name: "ListboxItem", props: { value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = co(void 0, "reka-listbox-item"), { CollectionItem: a } = uo(), { forwardRef: r, currentElement: s } = ce(), l = gn(), c = P(() => s.value === l.highlightedElement.value), h = P(() => cl(l.modelValue.value, n.value, l.by)), d = P(() => l.disabled.value || n.disabled);
  async function u(p) {
    o("select", p), !(p == null ? void 0 : p.defaultPrevented) && !d.value && p && (l.onValueChange(n.value), l.changeHighlight(s.value));
  }
  function f(p) {
    const g = { originalEvent: p, value: n.value };
    xs(kl, u, g);
  }
  return Tl({ isSelected: h }), (p, g) => (T(), I(m(a), { value: p.value }, { default: R(() => [Br([c.value, h.value], () => D(m(_e), Z({ id: m(i) }, p.$attrs, { ref: m(r), role: "option", tabindex: m(l).focusable.value ? c.value ? "0" : "-1" : -1, "aria-selected": h.value, as: p.as, "as-child": p.asChild, disabled: d.value ? "" : void 0, "data-disabled": d.value ? "" : void 0, "data-highlighted": c.value ? "" : void 0, "data-state": h.value ? "checked" : "unchecked", onClick: f, onKeydown: ft(ot(f, ["prevent"]), ["space"]), onPointermove: g[0] || (g[0] = (y) => {
    m(l).highlightedElement.value !== m(s) && (m(l).highlightOnHover.value ? m(l).changeHighlight(m(s), false) : m(l).focusable.value || m(l).changeHighlight(m(s), false));
  }) }), { default: R(() => [K(p.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), g, 1)]), _: 3 }, 8, ["value"]));
} }), Ml = $({ __name: "ComboboxItem", props: { textValue: {}, value: {}, disabled: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = co(void 0, "reka-combobox-item"), a = it(), r = xl(null), { primitiveElement: s, currentElement: l } = yt();
  if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
  const c = P(() => {
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
  }), (h, d) => c.value ? (T(), I(m(Cl), Z({ key: 0 }, n, { id: m(i), ref_key: "primitiveElement", ref: s, disabled: m(a).disabled.value || h.disabled, onSelect: d[0] || (d[0] = (u) => {
    o("select", u), !u.defaultPrevented && !m(a).multiple.value && !h.disabled && !m(a).disabled.value && (u.preventDefault(), m(a).onOpenChange(false), m(a).modelValue.value = n.value);
  }) }), { default: R(() => [K(h.$slots, "default", {}, () => [Ge(le(h.value), 1)])]), _: 3 }, 16, ["id", "disabled"])) : ie("", true);
} }), Dl = $({ __name: "ComboboxPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(e8) {
  const t = e8;
  return (n, o) => (T(), I(m(ws), cn(Xi(t)), { default: R(() => [K(n.$slots, "default")]), _: 3 }, 16));
} }), Rl = $({ __name: "ComboboxTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(e8) {
  const t = e8, { forwardRef: n, currentElement: o } = ce(), i = it(), a = P(() => t.disabled || i.disabled.value || false);
  return re(() => {
    o.value && i.onTriggerElementChange(o.value);
  }), (r, s) => (T(), I(m(_e), Z(t, { ref: m(n), type: r.as === "button" ? "button" : void 0, tabindex: "-1", "aria-label": "Show popup", "aria-haspopup": "listbox", "aria-expanded": m(i).open.value, "aria-controls": m(i).contentId, "data-state": m(i).open.value ? "open" : "closed", disabled: a.value, "data-disabled": a.value ? "" : void 0, "aria-disabled": a.value ?? void 0, onClick: s[0] || (s[0] = (l) => m(i).onOpenChange(!m(i).open.value)) }), { default: R(() => [K(r.$slots, "default")]), _: 3 }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
} }), Al = $({ __name: "ComboboxViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, { forwardRef: n } = ce(), { nonce: o } = Ke(t), i = aa(o), a = it();
  return (r, s) => (T(), Y(Ee, null, [D(m(_e), Z({ ...r.$attrs, ...t }, { ref: m(n), "data-reka-combobox-viewport": "", role: "presentation", style: { position: "relative", flex: m(a).isVirtual.value ? void 0 : 1, overflow: "auto" } }), { default: R(() => [K(r.$slots, "default")]), _: 3 }, 16, ["style"]), D(m(_e), { as: "style", nonce: m(i) }, { default: R(() => s[0] || (s[0] = [Ge(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), [Le, El] = qe("ScrollAreaRoot"), Pl = $({ __name: "ScrollAreaRoot", props: { type: { default: "hover" }, dir: {}, scrollHideDelay: { default: 600 }, asChild: { type: Boolean }, as: {} }, setup(e8, { expose: t }) {
  const n = e8, o = O(0), i = O(0), a = O(), r = O(), s = O(), l = O(), c = O(false), h = O(false), { type: d, dir: u, scrollHideDelay: f } = Ke(n), p = ho(u);
  function g() {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.scrollTo({ top: 0 });
  }
  function y() {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.scrollTo({ top: 0, left: 0 });
  }
  t({ viewport: a, scrollTop: g, scrollTopLeft: y });
  const { forwardRef: v, currentElement: _ } = ce();
  return El({ type: d, dir: p, scrollHideDelay: f, scrollArea: _, viewport: a, onViewportChange: (b) => {
    a.value = b || void 0;
  }, content: r, onContentChange: (b) => {
    r.value = b;
  }, scrollbarX: s, scrollbarXEnabled: c, scrollbarY: l, scrollbarYEnabled: h, onScrollbarXChange: (b) => {
    s.value = b || void 0;
  }, onScrollbarYChange: (b) => {
    l.value = b || void 0;
  }, onScrollbarXEnabledChange: (b) => {
    c.value = b;
  }, onScrollbarYEnabledChange: (b) => {
    h.value = b;
  }, onCornerWidthChange: (b) => {
    o.value = b;
  }, onCornerHeightChange: (b) => {
    i.value = b;
  } }), (b, k) => (T(), I(m(_e), { ref: m(v), "as-child": n.asChild, as: b.as, dir: m(p), style: _t({ position: "relative", "--reka-scroll-area-corner-width": `${o.value}px`, "--reka-scroll-area-corner-height": `${i.value}px` }) }, { default: R(() => [K(b.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "dir", "style"]));
} });
function ma(e8, t) {
  return (n) => {
    if (e8[0] === e8[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e8[1] - e8[0]);
    return t[0] + o * (n - e8[0]);
  };
}
function vn(e8) {
  const t = ga(e8.viewport, e8.content), n = e8.scrollbar.paddingStart + e8.scrollbar.paddingEnd, o = (e8.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function ga(e8, t) {
  const n = e8 / t;
  return Number.isNaN(n) ? 0 : n;
}
function Nl(e8, t = () => {
}) {
  let n = { left: e8.scrollLeft, top: e8.scrollTop }, o = 0;
  return function i() {
    const a = { left: e8.scrollLeft, top: e8.scrollTop }, r = n.left !== a.left, s = n.top !== a.top;
    (r || s) && t(), n = a, o = window.requestAnimationFrame(i);
  }(), () => window.cancelAnimationFrame(o);
}
function Jo(e8, t, n = "ltr") {
  const o = vn(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, r = t.content - t.viewport, s = a - o, l = n === "ltr" ? [0, r] : [r * -1, 0], c = Jr(e8, l[0], l[1]);
  return ma([0, r], [0, s])(c);
}
function Vt(e8) {
  return e8 ? Number.parseInt(e8, 10) : 0;
}
function Ll(e8, t, n, o = "ltr") {
  const i = vn(n), a = i / 2, r = t || a, s = i - r, l = n.scrollbar.paddingStart + r, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, h = n.content - n.viewport, d = o === "ltr" ? [0, h] : [h * -1, 0];
  return ma([l, c], d)(e8);
}
function ei(e8, t) {
  return e8 > 0 && e8 < t;
}
const va = $({ __name: "ScrollAreaScrollbarImpl", props: { isHorizontal: { type: Boolean } }, emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"], setup(e8, { emit: t }) {
  const n = e8, o = t, i = Le(), a = _n(), r = yn(), { forwardRef: s, currentElement: l } = ce(), c = O(""), h = O();
  function d(v) {
    var _a2, _b;
    if (h.value) {
      const _ = v.clientX - ((_a2 = h.value) == null ? void 0 : _a2.left), b = v.clientY - ((_b = h.value) == null ? void 0 : _b.top);
      o("onDragScroll", { x: _, y: b });
    }
  }
  function u(v) {
    v.button === 0 && (v.target.setPointerCapture(v.pointerId), h.value = l.value.getBoundingClientRect(), c.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", i.viewport && (i.viewport.value.style.scrollBehavior = "auto"), d(v));
  }
  function f(v) {
    d(v);
  }
  function p(v) {
    const _ = v.target;
    _.hasPointerCapture(v.pointerId) && _.releasePointerCapture(v.pointerId), document.body.style.webkitUserSelect = c.value, i.viewport && (i.viewport.value.style.scrollBehavior = ""), h.value = void 0;
  }
  function g(v) {
    var _a2;
    const _ = v.target, b = (_a2 = l.value) == null ? void 0 : _a2.contains(_), k = a.sizes.value.content - a.sizes.value.viewport;
    b && a.handleWheelScroll(v, k);
  }
  re(() => {
    document.addEventListener("wheel", g, { passive: false });
  }), Ae(() => {
    document.removeEventListener("wheel", g);
  });
  function y() {
    var _a2, _b, _c2, _d2, _e2;
    l.value && (n.isHorizontal ? a.handleSizeChange({ content: ((_a2 = i.viewport.value) == null ? void 0 : _a2.scrollWidth) ?? 0, viewport: ((_b = i.viewport.value) == null ? void 0 : _b.offsetWidth) ?? 0, scrollbar: { size: l.value.clientWidth ?? 0, paddingStart: Vt(getComputedStyle(l.value).paddingLeft), paddingEnd: Vt(getComputedStyle(l.value).paddingRight) } }) : a.handleSizeChange({ content: ((_c2 = i.viewport.value) == null ? void 0 : _c2.scrollHeight) ?? 0, viewport: ((_d2 = i.viewport.value) == null ? void 0 : _d2.offsetHeight) ?? 0, scrollbar: { size: ((_e2 = l.value) == null ? void 0 : _e2.clientHeight) ?? 0, paddingStart: Vt(getComputedStyle(l.value).paddingLeft), paddingEnd: Vt(getComputedStyle(l.value).paddingRight) } }));
  }
  return Zt(l, y), Zt(i.content, y), (v, _) => (T(), I(m(_e), { ref: m(s), style: { position: "absolute" }, "data-scrollbarimpl": "", as: m(r).as.value, "as-child": m(r).asChild.value, onPointerdown: u, onPointermove: f, onPointerup: p }, { default: R(() => [K(v.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} }), Bl = $({ __name: "ScrollAreaScrollbarX", setup(e8) {
  const t = Le(), n = _n(), { forwardRef: o, currentElement: i } = ce();
  re(() => {
    i.value && t.onScrollbarXChange(i.value);
  });
  const a = P(() => n.sizes.value);
  return (r, s) => (T(), I(va, { ref: m(o), "is-horizontal": true, "data-orientation": "horizontal", style: _t({ bottom: 0, left: m(t).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0, right: m(t).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0, "--reka-scroll-area-thumb-width": a.value ? `${m(vn)(a.value)}px` : void 0 }), onOnDragScroll: s[0] || (s[0] = (l) => m(n).onDragScroll(l.x)) }, { default: R(() => [K(r.$slots, "default")]), _: 3 }, 8, ["style"]));
} }), Il = $({ __name: "ScrollAreaScrollbarY", setup(e8) {
  const t = Le(), n = _n(), { forwardRef: o, currentElement: i } = ce();
  re(() => {
    i.value && t.onScrollbarYChange(i.value);
  });
  const a = P(() => n.sizes.value);
  return (r, s) => (T(), I(va, { ref: m(o), "is-horizontal": false, "data-orientation": "vertical", style: _t({ top: 0, right: m(t).dir.value === "ltr" ? 0 : void 0, left: m(t).dir.value === "rtl" ? 0 : void 0, bottom: "var(--reka-scroll-area-corner-height)", "--reka-scroll-area-thumb-height": a.value ? `${m(vn)(a.value)}px` : void 0 }), onOnDragScroll: s[0] || (s[0] = (l) => m(n).onDragScroll(l.y)) }, { default: R(() => [K(r.$slots, "default")]), _: 3 }, 8, ["style"]));
} }), [_n, Ol] = qe("ScrollAreaScrollbarVisible"), vo = $({ __name: "ScrollAreaScrollbarVisible", setup(e8) {
  const t = Le(), n = yn(), { forwardRef: o } = ce(), i = O({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), a = P(() => {
    const v = ga(i.value.viewport, i.value.content);
    return v > 0 && v < 1;
  }), r = O(), s = O(0);
  function l(v, _) {
    if (f.value) {
      const b = t.viewport.value.scrollLeft + v.deltaY;
      t.viewport.value.scrollLeft = b, ei(b, _) && v.preventDefault();
    } else {
      const b = t.viewport.value.scrollTop + v.deltaY;
      t.viewport.value.scrollTop = b, ei(b, _) && v.preventDefault();
    }
  }
  function c(v, _) {
    f.value ? s.value = _.x : s.value = _.y;
  }
  function h(v) {
    s.value = 0;
  }
  function d(v) {
    i.value = v;
  }
  function u(v, _) {
    return Ll(v, s.value, i.value, _);
  }
  const f = P(() => n.isHorizontal.value);
  function p(v) {
    f.value ? t.viewport.value.scrollLeft = u(v, t.dir.value) : t.viewport.value.scrollTop = u(v);
  }
  function g() {
    if (f.value) {
      if (t.viewport.value && r.value) {
        const v = t.viewport.value.scrollLeft, _ = Jo(v, i.value, t.dir.value);
        r.value.style.transform = `translate3d(${_}px, 0, 0)`;
      }
    } else if (t.viewport.value && r.value) {
      const v = t.viewport.value.scrollTop, _ = Jo(v, i.value);
      r.value.style.transform = `translate3d(0, ${_}px, 0)`;
    }
  }
  function y(v) {
    r.value = v;
  }
  return Ol({ sizes: i, hasThumb: a, handleWheelScroll: l, handleThumbDown: c, handleThumbUp: h, handleSizeChange: d, onThumbPositionChange: g, onThumbChange: y, onDragScroll: p }), (v, _) => f.value ? (T(), I(Bl, Z({ key: 0 }, v.$attrs, { ref: m(o) }), { default: R(() => [K(v.$slots, "default")]), _: 3 }, 16)) : (T(), I(Il, Z({ key: 1 }, v.$attrs, { ref: m(o) }), { default: R(() => [K(v.$slots, "default")]), _: 3 }, 16));
} }), _a = $({ __name: "ScrollAreaScrollbarAuto", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), n = yn(), { forwardRef: o } = ce(), i = O(false), a = sa(() => {
    if (t.viewport.value) {
      const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, s = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
      i.value = n.isHorizontal.value ? r : s;
    }
  }, 10);
  return re(() => a()), Zt(t.viewport, a), Zt(t.content, a), (r, s) => (T(), I(m(hn), { present: r.forceMount || i.value }, { default: R(() => [D(vo, Z(r.$attrs, { ref: m(o), "data-state": i.value ? "visible" : "hidden" }), { default: R(() => [K(r.$slots, "default")]), _: 3 }, 16, ["data-state"])]), _: 3 }, 8, ["present"]));
} }), $l = $({ inheritAttrs: false, __name: "ScrollAreaScrollbarHover", props: { forceMount: { type: Boolean } }, setup(e8) {
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
  }), (s, l) => (T(), I(m(hn), { present: s.forceMount || i.value }, { default: R(() => [D(_a, Z(s.$attrs, { ref: m(n), "data-state": i.value ? "visible" : "hidden" }), { default: R(() => [K(s.$slots, "default")]), _: 3 }, 16, ["data-state"])]), _: 3 }, 8, ["present"]));
} }), Ul = $({ __name: "ScrollAreaScrollbarScroll", props: { forceMount: { type: Boolean } }, setup(e8) {
  const t = Le(), n = yn(), { forwardRef: o } = ce(), { state: i, dispatch: a } = ms("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  qt((s) => {
    if (i.value === "idle") {
      const l = window.setTimeout(() => a("HIDE"), t.scrollHideDelay.value);
      s(() => {
        window.clearTimeout(l);
      });
    }
  });
  const r = sa(() => a("SCROLL_END"), 100);
  return qt((s) => {
    const l = t.viewport.value, c = n.isHorizontal.value ? "scrollLeft" : "scrollTop";
    if (l) {
      let h = l[c];
      const d = () => {
        const u = l[c];
        h !== u && (a("SCROLL"), r()), h = u;
      };
      l.addEventListener("scroll", d), s(() => {
        l.removeEventListener("scroll", d);
      });
    }
  }), (s, l) => (T(), I(m(hn), { present: s.forceMount || m(i) !== "hidden" }, { default: R(() => [D(vo, Z(s.$attrs, { ref: m(o) }), { default: R(() => [K(s.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 8, ["present"]));
} }), [yn, Hl] = qe("ScrollAreaScrollbar"), Fl = $({ inheritAttrs: false, __name: "ScrollAreaScrollbar", props: { orientation: { default: "vertical" }, forceMount: { type: Boolean }, asChild: { type: Boolean }, as: { default: "div" } }, setup(e8) {
  const t = e8, { forwardRef: n } = ce(), o = Le(), i = P(() => t.orientation === "horizontal");
  ae(i, () => {
    i.value ? o.onScrollbarXEnabledChange(true) : o.onScrollbarYEnabledChange(true);
  }, { immediate: true }), Ae(() => {
    o.onScrollbarXEnabledChange(false), o.onScrollbarYEnabledChange(false);
  });
  const { orientation: a, forceMount: r, asChild: s, as: l } = Ke(t);
  return Hl({ orientation: a, forceMount: r, isHorizontal: i, as: l, asChild: s }), (c, h) => m(o).type.value === "hover" ? (T(), I($l, Z({ key: 0 }, c.$attrs, { ref: m(n), "force-mount": m(r) }), { default: R(() => [K(c.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : m(o).type.value === "scroll" ? (T(), I(Ul, Z({ key: 1 }, c.$attrs, { ref: m(n), "force-mount": m(r) }), { default: R(() => [K(c.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : m(o).type.value === "auto" ? (T(), I(_a, Z({ key: 2 }, c.$attrs, { ref: m(n), "force-mount": m(r) }), { default: R(() => [K(c.$slots, "default")]), _: 3 }, 16, ["force-mount"])) : m(o).type.value === "always" ? (T(), I(vo, Z({ key: 3 }, c.$attrs, { ref: m(n), "data-state": "visible" }), { default: R(() => [K(c.$slots, "default")]), _: 3 }, 16)) : ie("", true);
} }), Vl = $({ __name: "ScrollAreaThumb", props: { asChild: { type: Boolean }, as: {} }, setup(e8) {
  const t = e8, n = Le(), o = _n();
  function i(u) {
    const p = u.target.getBoundingClientRect(), g = u.clientX - p.left, y = u.clientY - p.top;
    o.handleThumbDown(u, { x: g, y });
  }
  function a(u) {
    o.handleThumbUp(u);
  }
  const { forwardRef: r, currentElement: s } = ce(), l = O(), c = P(() => n.viewport.value);
  function h() {
    if (!l.value) {
      const u = Nl(c.value, o.onThumbPositionChange);
      l.value = u, o.onThumbPositionChange();
    }
  }
  const d = P(() => o.sizes.value);
  return gs(d, () => {
    o.onThumbChange(s.value), c.value && (o.onThumbPositionChange(), c.value.addEventListener("scroll", h));
  }), Ae(() => {
    var _a2;
    c.value.removeEventListener("scroll", h), (_a2 = n.viewport.value) == null ? void 0 : _a2.removeEventListener("scroll", h);
  }), (u, f) => (T(), I(m(_e), { ref: m(r), "data-state": m(o).hasThumb ? "visible" : "hidden", style: { width: "var(--reka-scroll-area-thumb-width)", height: "var(--reka-scroll-area-thumb-height)" }, "as-child": t.asChild, as: u.as, onPointerdown: i, onPointerup: a }, { default: R(() => [K(u.$slots, "default")]), _: 3 }, 8, ["data-state", "as-child", "as"]));
} }), Yl = $({ inheritAttrs: false, __name: "ScrollAreaViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(e8, { expose: t }) {
  const n = e8, { nonce: o } = Ke(n), i = aa(o), a = Le(), r = O();
  re(() => {
    a.onViewportChange(r.value), a.onContentChange(l.value);
  }), t({ viewportElement: r });
  const { forwardRef: s, currentElement: l } = ce();
  return (c, h) => (T(), Y(Ee, null, [w("div", Z({ ref_key: "viewportElement", ref: r, "data-reka-scroll-area-viewport": "", style: { overflowX: m(a).scrollbarXEnabled.value ? "scroll" : "hidden", overflowY: m(a).scrollbarYEnabled.value ? "scroll" : "hidden" } }, c.$attrs, { tabindex: 0 }), [D(m(_e), { ref: m(s), style: _t({ minWidth: m(a).scrollbarXEnabled.value ? "fit-content" : void 0 }), "as-child": n.asChild, as: c.as }, { default: R(() => [K(c.$slots, "default")]), _: 3 }, 8, ["style", "as-child", "as"])], 16), D(m(_e), { as: "style", nonce: m(i) }, { default: R(() => h[0] || (h[0] = [Ge(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), Gl = { "bg-blue-s3": "", relative: "" }, zl = { key: 0, left: "50%", "max-w-full": "", "bottom-0": "", absolute: "" }, Kl = { flex: "~ col lg:row justify-between gap-x-32", "w-full": "", relative: "", "f-mt-md": "", "lg:bottom--60": "" }, Wl = { flex: "~ col sm:items-center lg:items-start" }, ql = $({ __name: "TwoColumn", props: { primary: {} }, setup(e8) {
  return (t, n) => {
    const o = Qi, i = oa, a = lo, r = un;
    return T(), Y("section", Gl, [t.primary.backgroundImage ? (T(), Y("div", zl, [D(o, { field: t.primary.backgroundImage }, null, 8, ["field"])])) : ie("", true), D(i, { headline: t.primary.headline, subline: t.primary.subline, "children:text-white": "" }, null, 8, ["headline", "subline"]), w("div", Kl, [w("div", Wl, [D(a, { wrapper: "div", field: t.primary.text, class: "nq-prose-compact px-0" }, null, 8, ["field"]), D(r, { "internal-component": "a", field: t.primary.linkHref, "nq-arrow": "", "nq-pill-tertiary": "" }, { default: R(() => [Ge(le(t.primary.linkLabel), 1)]), _: 1 }, 8, ["field"])]), D(o, { field: t.primary.image, "mx-auto": "", relative: "", "drop-shadow-xl": "", "lg:mr-0": "" }, null, 8, ["field"])])]);
  };
} }), jl = Object.assign(ql, { __name: "HeroTwoColumn" }), Zl = { viewBox: "0 0 977 362", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Xl = { class: "marker-group" }, Ql = ["width"], Jl = ["width", "x", "y"], ec = ["width", "x", "y"], tc = ["x", "y"], nc = { class: "small-marker-group" }, oc = ["width", "x", "y"], ic = ["width", "x", "y"], ti = 160, St = 120, ac = $({ __name: "Map", setup(e8) {
  const t = [{ id: "europe", x: 350, y: -175, width: ti, text: "2000" }, { id: "australia", x: 800, y: 70, width: ti, text: "250" }], n = [{ id: "1", x: -5, y: 3, width: St }, { id: "2", x: 115, y: -94, width: St }, { id: "3", x: 162, y: 41, width: St }, { id: "4", x: 306, y: -43, width: St }, { id: "5", x: 594, y: -65, width: St }], o = O(false), i = O(true);
  return re(() => {
    setTimeout(() => {
      o.value = true, setTimeout(() => {
        i.value = false;
      }, 1e3);
    }, 100);
  }), (a, r) => {
    const s = ia;
    return T(), Y("div", { class: ge([{ visible: o.value, delayed: i.value }, "map"]) }, [D(s, { class: "base-map", src: "/assets/images/home-hero/map.svg", alt: "World map" }), (T(), Y("svg", Zl, [r[0] || (r[0] = Vo('<g class="green-group europe" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-9e2c78cc><path d="M432.199 67.438c.084.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.627-1.355-.084-.847 1.017-1.61 2.372-1.694 1.61-.085 2.627.508 2.627 1.355Z" data-v-9e2c78cc></path><path d="M432.453 71.758c.084.848-1.017 1.61-2.372 1.695-1.356.084-2.542-.508-2.627-1.356-.084-.847 1.017-1.61 2.372-1.694 1.441 0 2.627.593 2.627 1.355Z" data-v-9e2c78cc></path><path d="M439.145 67.1c.084.846-1.017 1.609-2.457 1.694-1.355.084-2.541-.509-2.626-1.44-.085-.848 1.016-1.61 2.457-1.695 1.609-.085 2.626.508 2.626 1.44Z" data-v-9e2c78cc></path><path d="M425.167 67.947c.085.847-1.017 1.61-2.372 1.694-1.356.085-2.542-.508-2.457-1.356-.085-.847 1.017-1.609 2.372-1.694 1.186-.17 2.372.424 2.457 1.356Z" data-v-9e2c78cc></path><path d="M432.114 62.949c.085.847-1.017 1.61-2.457 1.694-1.355.085-2.372-.508-2.457-1.356-.084-.847 1.017-1.61 2.457-1.694 1.186-.085 2.372.508 2.457 1.356Z" data-v-9e2c78cc></path></g><g class="green-group australia" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#1F2348" data-v-9e2c78cc><path d="M882.026 318.444c.085 1.016-.932 1.271-2.372.678-1.44-.593-2.795-1.864-2.88-2.796-.085-1.016.932-1.271 2.372-.678 1.44.593 2.711 1.779 2.88 2.796Z" data-v-9e2c78cc></path><path d="M874.571 315.479c.085 1.016-.931 1.271-2.371.762-1.441-.593-2.796-1.779-2.881-2.795-.084-1.017.932-1.271 2.372-.763 1.44.593 2.626 1.779 2.88 2.796Z" data-v-9e2c78cc></path><path d="M882.789 323.527c.085 1.016-.932 1.27-2.372.677s-2.711-1.863-2.88-2.795c-.085-1.017.931-1.271 2.372-.678 1.524.593 2.795 1.864 2.88 2.796Z" data-v-9e2c78cc></path><path d="M889.396 321.493c.085 1.017-.932 1.271-2.287.763-1.44-.593-2.711-1.864-2.881-2.88-.084-1.017.932-1.271 2.288-.763 1.44.763 2.626 1.949 2.88 2.88Z" data-v-9e2c78cc></path><path d="M881.094 313.361c.085 1.017-.932 1.271-2.287.762-1.355-.508-2.796-1.863-2.88-2.795-.085-1.017.932-1.271 2.287-.763 1.44.678 2.796 1.864 2.88 2.796Z" data-v-9e2c78cc></path></g>', 2)), w("g", Xl, [(T(), Y(Ee, null, nt(t, (l) => w("g", { key: l.id, class: ge(`marker-${l.id}`), width: l.width }, [w("use", { href: "#marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, Jl), w("use", { href: "#marker", width: l.width, x: l.x, y: l.y }, null, 8, ec), w("text", { x: l.x + l.width / 2 - 7, y: l.y + 202 - 18, fill: "#fff", "font-weight": "600", "font-size": "14px" }, le(l.text), 9, tc)], 10, Ql)), 64))]), w("g", nc, [(T(), Y(Ee, null, nt(n, (l) => w("g", { key: l.id, class: ge(`small-marker-${l.id}`) }, [w("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y, style: { opacity: 0 } }, null, 8, oc), w("use", { href: "#small-marker", width: l.width, x: l.x, y: l.y }, null, 8, ic)], 2)), 64))]), r[1] || (r[1] = Vo('<symbol id="marker" viewBox="0 0 158 200" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9e2c78cc><g filter="url(#a)" data-v-9e2c78cc><path d="M119 110.915a8.14 8.14 0 0 1-3.253 6.51l-31.86 23.919a8.14 8.14 0 0 1-9.775 0l-31.86-23.919a8.141 8.141 0 0 1-3.252-6.51V28.801a8.14 8.14 0 0 1 8.14-8.14h63.72A8.14 8.14 0 0 1 119 28.8v82.114Z" fill="url(#b)" data-v-9e2c78cc></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M68.495 67.806a50.212 50.212 0 0 1-5.639 5.595c-2.707 2.301-6.89.8-7.515-2.699-.588-3.296-.377-6.115.34-9.927 1.336-7.109 3.093-12.754 8.412-16.502 3.187-2.245 7.203-1.103 10.536.315 2.722 1.159 5.635 1.159 8.35.009 3.358-1.422 7.427-2.587 10.639-.324 5.319 3.748 7.076 9.393 8.412 16.502.717 3.812.928 6.631.339 9.927-.624 3.498-4.808 5-7.515 2.7a50.222 50.222 0 0 1-5.638-5.596c-4.188-4.884-16.745-4.637-20.721 0Zm.965-17.091c.39 0 .706.315.706.705a3.084 3.084 0 0 0 3.084 3.084.705.705 0 0 1 0 1.41 3.084 3.084 0 0 0-3.084 3.084.705.705 0 0 1-1.41 0 3.083 3.083 0 0 0-3.084-3.084.705.705 0 1 1 0-1.41 3.084 3.084 0 0 0 3.083-3.084c0-.39.316-.705.705-.705Zm20.386-.282a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm-.814 6.494a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Zm-2.475-3.203a1.41 1.41 0 1 0-1.106 2.594 1.41 1.41 0 0 0 1.106-2.594Zm5.772-.088a1.411 1.411 0 1 1 .522 2.774 1.411 1.411 0 0 1-.522-2.774Z" fill="url(#c)" data-v-9e2c78cc></path><path opacity=".8" d="m67.671 98.29-3.09-5.326a1.24 1.24 0 0 0-1.073-.614h-6.182c-.44 0-.849.233-1.07.614l-3.09 5.327c-.221.38-.221.848 0 1.229l3.09 5.326c.221.381.63.615 1.07.615h6.182c.441 0 .85-.234 1.07-.615l3.091-5.326a1.22 1.22 0 0 0 .002-1.23Z" fill="#FEFEFE" data-v-9e2c78cc></path><defs data-v-9e2c78cc><radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-80 0 0 -122.314 119 20.66)" data-v-9e2c78cc><stop stop-color="#41A38E" data-v-9e2c78cc></stop><stop offset="1" stop-color="#21BCA5" data-v-9e2c78cc></stop></radialGradient><radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(26.83723 23.02773 -21.7223 25.31583 60.964 47.636)" data-v-9e2c78cc><stop stop-color="#fff" data-v-9e2c78cc></stop><stop offset="1" stop-color="#fff" stop-opacity=".62" data-v-9e2c78cc></stop></radialGradient><filter id="a" x=".334" y=".31" width="157.331" height="199.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-9e2c78cc><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-9e2c78cc></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="2.035" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="1.272" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31894" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="7.123" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="4.324" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect1_dropShadow_257_31894" result="effect2_dropShadow_257_31894" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="18.315" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="19.333" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect2_dropShadow_257_31894" result="effect3_dropShadow_257_31894" data-v-9e2c78cc></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31894" result="shape" data-v-9e2c78cc></feBlend></filter></defs></symbol><symbol id="small-marker" viewBox="0 0 118 139" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9e2c78cc><g filter="url(#a)" data-v-9e2c78cc><path d="M79.507 65.79a4.109 4.109 0 0 1-1.641 3.285L61.785 81.148a4.109 4.109 0 0 1-4.934 0l-16.08-12.073a4.108 4.108 0 0 1-1.642-3.286V24.343a4.109 4.109 0 0 1 4.109-4.108h32.161c2.27 0 4.109 1.84 4.109 4.108V65.79Z" fill="#21BCA5" data-v-9e2c78cc></path></g><defs data-v-9e2c78cc><filter id="a" x=".717" y=".018" width="117.203" height="138.561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-9e2c78cc><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-9e2c78cc></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="2.022" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="1.264" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.02 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_257_31717" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="7.076" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="4.296" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.04 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect1_dropShadow_257_31717" result="effect2_dropShadow_257_31717" data-v-9e2c78cc></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-9e2c78cc></feColorMatrix><feOffset dy="18.195" data-v-9e2c78cc></feOffset><feGaussianBlur stdDeviation="19.206" data-v-9e2c78cc></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122709 0 0 0 0 0.138823 0 0 0 0 0.283843 0 0 0 0.07 0" data-v-9e2c78cc></feColorMatrix><feBlend in2="effect2_dropShadow_257_31717" result="effect3_dropShadow_257_31717" data-v-9e2c78cc></feBlend><feBlend in="SourceGraphic" in2="effect3_dropShadow_257_31717" result="shape" data-v-9e2c78cc></feBlend></filter></defs></symbol>', 2))]))], 2);
  };
} }), rc = Object.assign(We(ac, [["__scopeId", "data-v-9e2c78cc"]]), { __name: "HeroMap" }), sc = { class: "dark", "text-neutral": "", "mx-0": "", "py-0": "", "bg-darkblue": "", relative: "", "of-hidden": "", "children:max-w-none": "", "max-md:min-h-auto": "", pt: "148 md:153 lg:160", "min-h": "auto md:100vh lg:110vh", flex: "~ col justify-between" }, lc = { flex: "grow ~ col justify-center", "z-10": "", "children:md:mx-auto": "" }, cc = { "mt-120": "", "max-w-none": "", "w-full": "", flex: "~ justify-center" }, uc = { class: "map-container", w: "80%", "pt-23": "", "min-w-680": "", relative: "", "z-1": "" }, dc = $({ __name: "Home", props: { headline: {}, subHeadlineTemplate: {}, cta: {}, ctaLabel: {} }, setup(e8) {
  const t = e8, { cryptoMapLocationsCount: n } = qr(), o = Nn(Ir, { class: "text-blue", to: "https://map.nimiq.com", target: "_blank" }, () => [Nn(jr, { value: n.value || 0, duration: 1300 }), " locations"]), i = P(() => {
    var _a2, _b, _c2, _d2;
    const r = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), s = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return Nn("p", {}, [r, o, s]);
  }), a = P(() => {
    var _a2, _b, _c2, _d2;
    const r = (_b = (_a2 = t.subHeadlineTemplate) == null ? void 0 : _a2.split("{{")[0]) == null ? void 0 : _b.toString(), s = (_d2 = (_c2 = t.subHeadlineTemplate) == null ? void 0 : _c2.split("}}")[1]) == null ? void 0 : _d2.toString();
    return `${r} ${n.value} ${s}`;
  });
  return ae(a, () => {
    $r({ title: t.headline.at(0).text, meta: [{ name: "description", content: a.value }] });
  }), (r, s) => {
    const l = Or, c = un, h = ia, d = Wr;
    return T(), Y("section", sc, [w("div", lc, [D(l, { "nq-heading-lg": "", field: r.headline, wrapper: "h1" }, null, 8, ["field"]), (T(), I(Zi(m(i)), { text: "neutral-800 f-xl" })), D(c, { "internal-component": "a", field: r.cta, "mt-40": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-blue": "" }, { default: R(() => [Ge(le(r.ctaLabel), 1)]), _: 1 }, 8, ["field"])]), D(h, { width: "1600", height: "900", src: "/assets/images/gods-light.webp", alt: "Nimiq Gods Rays Background", "m-0": "", "size-full": "", "pointer-events-none": "", "inset-0": "", absolute: "", "blur-60": "", "brightness-80": "" }), s[3] || (s[3] = w("div", { "bg-gradient": "to-b from-darkblue/0 to-darkblue", "m-0": "", "op-80": "", "pointer-events-none": "", "inset-0": "", absolute: "" }, null, -1)), D(d, { "left-100": "", top: "77 sm:112 md:200", style: { "--scale": "1.05" } }), D(d, { "right-80": "", "top-170": "", style: { "--scale": "0.7" } }), D(d, { bottom: "302 md:430", left: "56vw md:30vw", style: { "--scale": "0.92" } }), D(d, { "bottom-460": "", "right-32": "", style: { "--scale": "1" } }), w("div", cc, [w("div", uc, [s[0] || (s[0] = w("div", { class: "ellipse-shape", "bg-neutral-300": "", "z--1": "", "mix-blend-multiply": "", "blur-20": "" }, null, -1)), s[1] || (s[1] = w("div", { class: "ellipse-shape", "z--2": "", "blur-120": "", style: { background: "radial-gradient(100% 100% at 100% 100%, #0b7ff2 0%, #0ca6fe 100%)" } }, null, -1)), s[2] || (s[2] = w("div", { class: "ellipse-shape", "bg-white": "", "z--1": "" }, null, -1)), D(rc)])])]);
  };
} }), hc = Object.assign(We(dc, [["__scopeId", "data-v-b4aeb8c6"]]), { __name: "HeroHome" }), fc = {}, pc = { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 34 41", "text-white": "", "w-30": "", "of-visible": "" };
function mc(e8, t) {
  return T(), Y("svg", pc, t[0] || (t[0] = [w("g", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "3" }, [w("path", { d: "M2.3 2 17 13 31.8 2", class: "breath-arrow", style: { "--op": "1" } }), w("path", { d: "M2.3 15 17 26l14.8-11", class: "breath-arrow", style: { "--op": "0.7", "--delay": "0.6s" } }), w("path", { d: "M2.3 28 17 39l14.8-11", class: "breath-arrow", style: { "--op": "0.4", "--delay": "1.2s" } })], -1)]));
}
const gc = Object.assign(We(fc, [["render", mc], ["__scopeId", "data-v-fba215d4"]]), { __name: "AnimatedBreathArrow" }), vc = { "bg-neutral-0": "", relative: "", "of-x-clip": "", "f-p-5xl": "", "max-md:pb-100": "" }, _c = $({ __name: "Staking", props: { headline: {}, cta: {} }, setup(e8) {
  return (t, n) => {
    const o = ns, i = os, a = gc;
    return T(), Y("section", vc, [D(o, { left: "-100vw lg:-5vw", size: "300vw lg:110vw", "max-w-none": "", absolute: "", "z-0": "", bottom: "10 lg:-300" }), n[0] || (n[0] = w("div", { h: "400 lg:200", "bg-neutral-0": "", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), n[1] || (n[1] = w("div", { class: "bg-radial-green", "bg-gradient-fn": "to-b from-white to-", top: "50vh lg:200", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), n[2] || (n[2] = w("div", { class: "bg-linear-white-1", top: "20vh lg:200", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), n[3] || (n[3] = w("div", { class: "bg-linear-white-2", top: "20vh lg:200", "max-w-none": "", "pointer-events-none": "", "inset-0": "", absolute: "", "z-1": "" }, null, -1)), D(i, { headline: t.headline, cta: t.cta, "show-staking-icon": "", "primary-pill": "", relative: "", "z-2": "" }, null, 8, ["headline", "cta"]), D(a, { hidden: "", "f-m-5xl": "", "md:block": "", "max-md:self-center": "" })]);
  };
} }), yc = Object.assign(We(_c, [["__scopeId", "data-v-9cbbe109"]]), { __name: "HeroStaking" }), pe = ["month", "day", "hour", "minute", "second"], ya = 1e3, ba = 60 * ya, xa = 60 * ba, wa = 24 * xa, ni = { second: ya, minute: ba, hour: xa, day: wa };
class Yt {
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
      if ((o !== "month" ? ni[o] : 28 * wa) - 2 * this._periodResetSafetyBuffer < 200) throw new Error(`Period reset safety buffer too long for ${o} rate limit.`);
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
      const i = ni[t];
      o = (Math.floor(n / i) + 1) * i;
    }
    return o + this._periodResetSafetyBuffer;
  }
}
var _o = ((e8) => (e8.CryptoCompare = "CryptoCompare", e8.CryptoCompareLegacy = "CryptoCompareLegacy", e8.CoinGecko = "CoinGecko", e8))(_o || {}), Xt = ((e8) => (e8.NIM = "nim", e8.BTC = "btc", e8.ETH = "eth", e8.USDC = "usdc", e8.USDT = "usdt", e8))(Xt || {}), fe = ((e8) => (e8.AED = "aed", e8.AFN = "afn", e8.ALL = "all", e8.AMD = "amd", e8.ANG = "ang", e8.AOA = "aoa", e8.ARS = "ars", e8.AUD = "aud", e8.AWG = "awg", e8.AZN = "azn", e8.BAM = "bam", e8.BBD = "bbd", e8.BDT = "bdt", e8.BGN = "bgn", e8.BHD = "bhd", e8.BIF = "bif", e8.BMD = "bmd", e8.BND = "bnd", e8.BOB = "bob", e8.BRL = "brl", e8.BSD = "bsd", e8.BTN = "btn", e8.BWP = "bwp", e8.BYN = "byn", e8.BZD = "bzd", e8.CAD = "cad", e8.CDF = "cdf", e8.CHF = "chf", e8.CLP = "clp", e8.CNY = "cny", e8.COP = "cop", e8.CRC = "crc", e8.CUP = "cup", e8.CZK = "czk", e8.DJF = "djf", e8.DKK = "dkk", e8.DOP = "dop", e8.DZD = "dzd", e8.EGP = "egp", e8.ERN = "ern", e8.ETB = "etb", e8.EUR = "eur", e8.FJD = "fjd", e8.FKP = "fkp", e8.GBP = "gbp", e8.GEL = "gel", e8.GHS = "ghs", e8.GIP = "gip", e8.GMD = "gmd", e8.GNF = "gnf", e8.GTQ = "gtq", e8.GYD = "gyd", e8.HKD = "hkd", e8.HNL = "hnl", e8.HTG = "htg", e8.HUF = "huf", e8.IDR = "idr", e8.ILS = "ils", e8.INR = "inr", e8.IQD = "iqd", e8.IRR = "irr", e8.ISK = "isk", e8.JMD = "jmd", e8.JOD = "jod", e8.JPY = "jpy", e8.KES = "kes", e8.KGS = "kgs", e8.KHR = "khr", e8.KMF = "kmf", e8.KPW = "kpw", e8.KRW = "krw", e8.KWD = "kwd", e8.KYD = "kyd", e8.KZT = "kzt", e8.LAK = "lak", e8.LBP = "lbp", e8.LKR = "lkr", e8.LRD = "lrd", e8.LSL = "lsl", e8.LYD = "lyd", e8.MAD = "mad", e8.MDL = "mdl", e8.MGA = "mga", e8.MKD = "mkd", e8.MMK = "mmk", e8.MNT = "mnt", e8.MOP = "mop", e8.MRU = "mru", e8.MUR = "mur", e8.MVR = "mvr", e8.MWK = "mwk", e8.MXN = "mxn", e8.MYR = "myr", e8.MZN = "mzn", e8.NAD = "nad", e8.NGN = "ngn", e8.NIO = "nio", e8.NOK = "nok", e8.NPR = "npr", e8.NZD = "nzd", e8.OMR = "omr", e8.PAB = "pab", e8.PEN = "pen", e8.PGK = "pgk", e8.PHP = "php", e8.PKR = "pkr", e8.PLN = "pln", e8.PYG = "pyg", e8.QAR = "qar", e8.RON = "ron", e8.RSD = "rsd", e8.RUB = "rub", e8.RWF = "rwf", e8.SAR = "sar", e8.SBD = "sbd", e8.SCR = "scr", e8.SDG = "sdg", e8.SEK = "sek", e8.SGD = "sgd", e8.SHP = "shp", e8.SOS = "sos", e8.SRD = "srd", e8.SSP = "ssp", e8.STN = "stn", e8.SYP = "syp", e8.SZL = "szl", e8.THB = "thb", e8.TJS = "tjs", e8.TMT = "tmt", e8.TND = "tnd", e8.TOP = "top", e8.TRY = "try", e8.TTD = "ttd", e8.TWD = "twd", e8.TZS = "tzs", e8.UAH = "uah", e8.UGX = "ugx", e8.USD = "usd", e8.UYU = "uyu", e8.UZS = "uzs", e8.VES = "ves", e8.VND = "vnd", e8.VUV = "vuv", e8.WST = "wst", e8.XAF = "xaf", e8.XCD = "xcd", e8.XOF = "xof", e8.XPF = "xpf", e8.YER = "yer", e8.ZAR = "zar", e8.ZMW = "zmw", e8.ZWL = "zwl", e8))(fe || {});
const bc = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => fe[e8]), xc = ["AUD", "BRL", "CAD", "CHF", "CLP", "CZK", "EUR", "GBP", "HKD", "IDR", "ILS", "JPY", "KES", "KZT", "MXN", "MYR", "NZD", "PEN", "RON", "SGD", "THB", "TRY", "USD"].map((e8) => fe[e8]), wc = ["AED", "AOA", "ARS", "AUD", "BGN", "BRL", "CAD", "CHF", "COP", "CZK", "EUR", "GBP", "GEL", "HKD", "IDR", "ILS", "INR", "JPY", "KRW", "KZT", "MXN", "MYR", "NGN", "NZD", "PHP", "PLN", "RON", "RUB", "SGD", "THB", "TRY", "UAH", "USD", "ZAR"].map((e8) => fe[e8]), oi = Date.parse("2024-11-01"), Sc = ["AED", "ARS", "AUD", "BDT", "BHD", "BMD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "GEL", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "KWD", "LKR", "MMK", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "ZAR"].map((e8) => fe[e8]), Sa = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CUP", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"].map((e8) => fe[e8]), bn = ["CRC"].map((e8) => fe[e8]), kc = [...Sa, ...bn], ka = { crc: "America/Costa_Rica" }, Ta = "https://data-api.cryptocompare.com/index/cc", Ca = "https://min-api.cryptocompare.com/data";
let Ma = "https://api.coingecko.com/api/v3";
const zn = { nim: "nimiq-2", btc: "bitcoin", eth: "ethereum", usdc: "usd-coin", usdt: "tether" }, Tc = 1e3, dt = 60 * Tc, yo = 60 * dt, Mt = 24 * yo, Cc = /* @__PURE__ */ new Map();
async function Mc(e8, t, n = "CryptoCompare") {
  e8 = e8.map((c) => c.toLowerCase()), t = t.map((c) => c.toLowerCase());
  const o = [], i = [];
  for (const c of t) if (pt(c, n, "current")) o.push(c);
  else if (Da(c, n, "current")) i.push(c);
  else throw new Error(`Currency ${c} not supported for provider ${n}.`);
  let a;
  if (i.length) {
    a = Pc(i);
    const c = "usd";
    if (!pt(c, n, "current")) throw new Error(`${n} can not bridge via USD`);
    o.includes(c) || o.push(c);
  }
  let r;
  switch (n) {
    case "CryptoCompare":
      r = (async () => {
        const c = e8.flatMap((f) => t.map((p) => `${f.toUpperCase()}-${p.toUpperCase()}`)), h = 50, d = [];
        for (let f = 0; f < c.length; f += h) {
          const p = c.slice(f, Math.min(c.length, f + h));
          d.push(Ue(`${Ta}/v1/latest/tick?market=cadli&instruments=${p.join(",")}&groups=VALUE&apply_mapping=false`, n).then(({ Data: g }) => g));
        }
        const u = {};
        for (const f of await Promise.all(d)) for (const [p, { VALUE: g }] of Object.entries(f)) {
          const [y, v] = p.split("-").map((_) => _.toLowerCase());
          u[y] || (u[y] = {}), u[y][v] = g;
        }
        return u;
      })();
      break;
    case "CryptoCompareLegacy":
      r = (async () => {
        const h = [];
        for (let u = 0; u < o.length; u += 25) {
          const f = o.slice(u, Math.min(o.length, u + 25));
          h.push(Ue(`${Ca}/pricemulti?fsyms=${e8.join(",")}&tsyms=${f.join(",")}`, n));
        }
        const d = {};
        for (const u of await Promise.all(h)) for (const [f, p] of Object.entries(u)) {
          const g = f.toLowerCase();
          for (const [y, v] of Object.entries(p)) {
            const _ = y.toLowerCase();
            d[g] || (d[g] = {}), d[g][_] = v;
          }
        }
        return d;
      })();
      break;
    case "CoinGecko": {
      const c = e8.map((h) => zn[h]);
      r = Ue(`${Ma}/simple/price?ids=${c.join(",")}&vs_currencies=${o.join(",")}`, n).then((h) => e8.reduce((d, u) => ({ ...d, [u]: h[zn[u]] }), {}));
      break;
    }
    default:
      throw new Error(`Unsupported provider ${n}`);
  }
  const [s, l] = await Promise.all([r, a]);
  for (const [c, h] of Object.entries(l || {})) for (const d of Object.values(s)) {
    const u = d.usd;
    d[c] = h && u ? h * u : void 0;
  }
  return s;
}
async function Qt(e8, t, n, o, i = "CryptoCompare", a = {}) {
  if (i === "CryptoCompareLegacy" && e8 === "nim" && o >= oi) throw new Error(`The legacy API only supports historic rates for NIM before ${new Date(oi)}.`);
  const r = t;
  let s, l;
  if (Da(t, i, "historic") && !pt(t, i, "historic")) {
    s = t, l = Ra(s, n, o);
    const p = "usd";
    if (!pt(p, i, "historic")) throw new Error(`${i} can not bridge via USD`);
    t = p;
  }
  n = Math.floor(n / 1e3), o = Math.ceil(o / 1e3);
  let c = 0, h;
  switch (i) {
    case "CryptoCompare":
      h = (async () => {
        const p = `${e8.toUpperCase()}-${t.toUpperCase()}`, { interval: g, aggregate: y, aggregatedIntervalTime: v } = Kn(a);
        let _ = [], b = o;
        try {
          for (; b >= n; ) {
            const k = Math.min(Math.floor(2e3 / y), Math.ceil((b - n) * 1e3 / v) + 1), { Data: C } = await Ue(`${Ta}/v1/historical/${g}?market=cadli&groups=OHLC&fill=false&apply_mapping=false&instrument=${p}&to_ts=${b}&limit=${k}` + (y !== 1 ? `&aggregate=${y}` : ""), i), M = [];
            for (const { TIMESTAMP: A, OPEN: W } of C) A < n || M.push([A * 1e3, W]);
            _ = M.concat(_), b = C[0].TIMESTAMP - 1;
          }
        } catch (k) {
          const C = k instanceof Error && k.message.includes("was not trading") && Xe(k.cause) && "other_info" in k.cause && Xe(k.cause.other_info) && "first" in k.cause.other_info && typeof k.cause.other_info.first == "number" ? k.cause.other_info.first : void 0;
          if (C) c = Math.min(C - (_.length ? 1 : 0), o);
          else throw k;
        }
        return _;
      })();
      break;
    case "CryptoCompareLegacy":
      e8 === "nim" && t === "usd" && (t = "usdt"), h = (async () => {
        const { interval: p, aggregate: g, aggregatedIntervalTime: y } = Kn(a);
        let v = [], _ = o;
        for (; _ >= n; ) {
          const b = Math.min(Math.floor(2e3 / g), Math.ceil((_ - n) * 1e3 / y) + 1) - 1, { Data: { TimeFrom: k, Data: C } } = await Ue(`${Ca}/v2/histo${p.replace(/s$/, "")}?fsym=${e8}&tsym=${t}&toTs=${_}&limit=${b}` + (g !== 1 ? `&aggregate=${g}` : ""), i), M = [];
          for (const { time: A, open: W } of C) A < n || M.push([A * 1e3, W]);
          v = M.concat(v), _ = k - 1;
        }
        return v;
      })();
      break;
    case "CoinGecko": {
      const p = zn[e8.toLowerCase()];
      h = Ue(`${Ma}/coins/${p}/market_chart/range?vs_currency=${t}&from=${n}&to=${o}`, i).then(({ prices: g }) => g);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${i}`);
  }
  const [d, u] = await Promise.all([h, l]);
  let f = d;
  return s && u && (f = d.map(([p, g]) => {
    const y = Wn(p, ka[s]), v = u[y];
    return v ? [p, g * v] : null;
  }).filter((p) => p !== null)), c && Ec(r, "CryptoCompareLegacy") && (f = (await Qt(e8, r, n * 1e3, c * 1e3, "CryptoCompareLegacy", a)).concat(f)), f;
}
async function Dc(e8, t, n, o = "CryptoCompare", i = {}) {
  const a = /* @__PURE__ */ new Map();
  if (!n.length) return a;
  n.sort((u, f) => u - f);
  const r = "interval" in i || "aggregate" in i ? i : {}, { aggregatedIntervalTime: s } = Kn(r);
  let l;
  switch (o) {
    case "CryptoCompare":
    case "CryptoCompareLegacy":
      l = await Qt(e8, t, n[0] - s, n[n.length - 1] + s, o, r);
      break;
    case "CoinGecko": {
      const u = Date.now(), f = [];
      let p = n.length - 1;
      if (!("disableMinutelyData" in i ? !!i.disableMinutelyData : false) && u - n[n.length - 1] < Mt - 15 * dt) {
        const v = Mt - 15 * dt - (u - n[n.length - 1]), { chunk: _, searchEndIndex: b } = ii(n, p, v, 10 * dt);
        f.push(_), p = b;
      }
      for (; p >= 0; ) {
        const { chunk: v, searchEndIndex: _ } = ii(n, p, 90 * Mt, 1.5 * yo);
        f.push(v), p = _;
      }
      const y = f.map(({ start: v, end: _ }) => Qt(e8, t, v, _, o));
      l = (await Promise.all(y)).reduce((v, _) => [..._, ...v], []).sort((v, _) => v[0] - _[0]);
      break;
    }
    default:
      throw new Error(`Unsupported provider ${o}`);
  }
  if (!l.length) return a;
  let c = 0, h = 0;
  const d = Math.max(2 * Mt, 2 * s);
  for (; c < n.length; ) {
    const u = n[c];
    for (; h < l.length && l[h][0] < u; ) ++h;
    if (h === 0 || h === l.length) {
      const f = l[Math.min(h, l.length - 1)];
      Math.abs(u - f[0]) < d && u <= Date.now() && a.set(u, f[1]);
    } else {
      const f = l[h - 1], p = l[h], g = p[0] - f[0];
      if (g < d) {
        const y = p[1] - f[1], v = f[1] + y * ((u - f[0]) / g);
        a.set(u, v);
      }
    }
    ++c;
  }
  return a;
}
function Kn(e8) {
  const t = e8.interval || "hours", n = e8.aggregate || 1, o = { minutes: dt, hours: yo, days: Mt }[t] * n;
  return { interval: t, aggregate: n, aggregatedIntervalTime: o };
}
function ii(e8, t, n, o) {
  n -= 2 * o;
  const i = e8[t];
  let a = i, r = t - 1;
  for (; r >= 0 && i - e8[r] < n; ) a = e8[r], --r;
  return { searchEndIndex: r, chunk: { start: a - o, end: i + o } };
}
const ai = { second: 20, minute: 300, hour: 3e3 }, Rc = { parallel: 1 }, ri = { CryptoCompare: new Yt(ai, 150), CryptoCompareLegacy: new Yt(ai, 150), CoinGecko: new Yt(Rc), unlimited: new Yt({}) };
async function Ue(e8, t, n) {
  var _a2;
  let o;
  typeof t == "object" ? o = t : n = t;
  const i = n ? ri[n] : ri.unlimited;
  let a = null;
  do {
    let r;
    try {
      const d = (o == null ? void 0 : o.headers) instanceof Headers || Array.isArray(o == null ? void 0 : o.headers) ? o.headers : Object.entries((o == null ? void 0 : o.headers) || {}), u = () => fetch(e8, { ...o, headers: [...d, ...Cc] });
      r = await i.schedule(u);
    } catch (d) {
      console.info("FiatApi failed to fetch. Retrying...", d), i.pause(2e4);
      continue;
    }
    const s = r.body ? await r.json() : null;
    let l, c, h;
    if (Xe(s) && ("Err" in s && Xe(s.Err) && "type" in s.Err ? (l = s.Err, c = l.type, h = l.message) : "Response" in s && s.Response === "Error" && (l = s, c = l.Type, h = l.Message)), l && c === 99) {
      console.info(`FiatApi hit CryptoCompare rate limit: ${h}. Retrying...`);
      const d = "Cooldown" in l && l.Cooldown ? l.Cooldown : Number.parseInt(((_a2 = h == null ? void 0 : h.match(/\d+ seconds?/)) == null ? void 0 : _a2[0]) || "", 10), u = "RateLimit" in l ? l.RateLimit : "other_info" in l ? l.other_info : void 0, f = Xe(u) && "calls_made" in u && Xe(u.calls_made) && "max_calls" in u && Xe(u.max_calls) && ["month", "day", "hour", "minute", "second"].every((p) => typeof u.calls_made[p] == "number" && typeof u.max_calls[p] == "number") ? u : void 0;
      if (d) i.pause(d * 1e3);
      else if (f) {
        const p = f.max_calls, g = f.calls_made;
        i.setUsages(g, "increase-only"), (p.day && g.day > p.day || p.month && g.month > p.month) && (p.parallel = 1), delete p.day, delete p.month, i.setRateLimits(p);
      } else {
        console.error("FiatApi got unexpected CryptoCompare rate limit response", s);
        const p = i.getRateLimits(), g = p.minute && p.second ? dt / (p.minute / p.second) : 4e3;
        i.pause(g);
      }
      continue;
    }
    if (c) throw new Error(`FiatApi got CryptoCompare error ${c}: ${h}`, { cause: l });
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
function Xe(e8) {
  return !!e8 && typeof e8 == "object";
}
function pt(e8, t, n) {
  return { CryptoCompare: bc, CryptoCompareLegacy: { current: xc, historic: wc }[n], CoinGecko: Sc }[t].includes(e8);
}
function Ac(e8) {
  return kc.includes(e8);
}
function Da(e8, t, n) {
  return Ac(e8) && !pt(e8, t, n);
}
function Ec(e8, t) {
  return pt(e8, t, "historic") || bn.includes(e8);
}
async function Pc(e8) {
  const t = [], n = bn.filter((a) => e8.includes(a));
  if (n.length) for (const a of n) t.push(Ra(a, Date.now()).then((r) => ({ [a]: Object.values(r)[0] })));
  const o = Sa.filter((a) => e8.includes(a));
  return o.length && t.push(Ue("https://firestore.googleapis.com/v1/projects/checkout-service/databases/(default)/documents/exchangerates/rates").then((a) => {
    const r = Nc(a);
    return o.reduce((s, l) => ({ ...s, [l]: r[l] }), {});
  })), (await Promise.all(t)).reduce((a, r) => ({ ...a, ...r }));
}
async function Ra(e8, t, n = t) {
  if (!bn.includes(e8)) throw new Error(`Unsupported bridgeable currency for historic rates: ${e8}`);
  const o = ka[e8], i = Wn(t, o), a = n === t ? i : Wn(n, o);
  return Ue(`https://usd-crc-historic-rate.deno.dev/api/rates/${i}/${a}`);
}
function Wn(e8, t) {
  const o = { "America/Costa_Rica": -6 }[t];
  if (o === void 0) throw new Error(`Unsupported timezone ${t}`);
  const i = new Date(e8);
  return i.setHours(i.getHours() + o), i.toISOString().split("T")[0];
}
function Nc(e8) {
  const t = Lc(e8);
  if (!("rates" in t)) throw new Error("Invalid FirebaseResponse");
  const n = {};
  for (const [o, i] of Object.entries(t.rates)) {
    if (typeof i != "number") throw new Error("Invalid FirebaseResponse");
    n[o.toLowerCase()] = i;
  }
  return n;
}
function Lc(e8) {
  const t = {};
  for (const [n, o] of Object.entries(e8.fields)) t[n] = Bc(o);
  return t;
}
function Bc(e8) {
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
    const s = this.code.substring(0, 2), l = typeof globalThis.navigator < "u" && typeof globalThis.navigator.language == "string", c = [...r ? [r] : [], ...l ? [`${globalThis.navigator.language.substring(0, 2)}-${s}`] : [], ...l ? [globalThis.navigator.language] : []];
    let h = "DisplayNames" in Intl;
    [this.locale] = h ? Intl.DisplayNames.supportedLocalesOf(c) : Intl.NumberFormat.supportedLocalesOf(c), h && !this.locale && (h = false, [this.locale] = Intl.NumberFormat.supportedLocalesOf(c));
    const d = a === void 0 && o === void 0 && i === void 0, u = `${this.code} ${this.locale}`, f = _me.CACHED_AUTO_GENERATED_CURRENCY_INFOS[u];
    if (d && f) return f;
    let p;
    const g = { style: "currency", currency: t, useGrouping: false, numberingSystem: "latn" };
    if (o !== void 0) this.name = o;
    else if (f) this.name = f.name;
    else if (h) try {
      this.name = new Intl.DisplayNames(this.locale, { type: "currency" }).of(t);
    } catch {
    }
    if (this.name || (p = _me.failsafeNumberToLocaleString(0, this.locale, { currencyDisplay: "name", ...g }), this.name = p ? p.replace(_me.NUMBER_REGEX, "").trim() : this.code), i !== void 0) this.symbol = i;
    else if (f) this.symbol = f.symbol;
    else {
      const y = _me.EXTRA_SYMBOLS[this.code];
      if (typeof y == "string") this.symbol = y;
      else if (Array.isArray(y)) {
        const v = this.locale === r && _me.RIGHT_TO_LEFT_DETECTION_REGEX.test(this.name);
        this.symbol = y[v ? 1 : 0];
      } else {
        const v = [...r ? [r] : [], `en-${s}`, "en"], _ = _me.failsafeNumberToLocaleString(0, v, { currencyDisplay: "narrowSymbol", ...g }) || _me.failsafeNumberToLocaleString(0, v, { currencyDisplay: "symbol", ...g });
        _ ? (p = _, this.symbol = p.replace(_me.NUMBER_REGEX, "").trim()) : this.symbol = this.code;
      }
    }
    if (a !== void 0) this.decimals = a;
    else if (f) this.decimals = f.decimals;
    else if (_me.CUSTOM_DECIMAL_LESS_CURRENCIES.has(this.code)) this.decimals = 0;
    else if (p = p || _me.failsafeNumberToLocaleString(0, "en", { currencyDisplay: "code", ...g }), p) {
      const y = p.match(_me.NUMBER_REGEX);
      this.decimals = y ? (y[1] || "").length : 2;
    } else this.decimals = 2;
    d && (_me.CACHED_AUTO_GENERATED_CURRENCY_INFOS[u] = this);
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
const Aa = ["AED", "ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CRC", "CZK", "DKK", "EUR", "GBP", "GMD", "GTQ", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VND", "XOF", "ZAR"], Ic = Aa.map((e8) => fe[e8]);
function Oc() {
  const e8 = new RegExp("^(\\w+)(?:-\\w{3,4})*(?:-(\\w{2})\\b)?"), n = ra().value.match(e8);
  if (!n) return fe.USD;
  const [, o, i] = n;
  if (i) {
    const r = new RegExp(`^${i}`, "i"), s = Ic.find((c) => r.test(c));
    if (s) return s;
    if (/^(?:AT|BE|CY|EE|FI|FR|DE|GR|HR|IE|IT|LV|LT|LU|MT|NL|PT|SK|SI|ES)$/i.test(i)) return fe.EUR;
  }
  return o && /^(?:de|fr|nl|el|et|fi|sv|ga|hr|it|lv|lt|lb|mt|sk|sl)$/i.test(o) ? fe.EUR : fe.USD;
}
function Ot() {
  const e8 = is("user-currency", Oc(), void 0, { mergeDefaults: false }), t = ra(), n = P(() => new me(e8.value, t.value));
  return { currency: e8, currencyInfo: n };
}
const $c = { "f-text": "12/16", "text-current": "", "nq-label": "" }, Uc = { flex: "~ items-center gap-8", "px-8": "", "pb-6": "", "pt-13": "", "w-full": "" }, Hc = { text: "f-sm white/95", "lh-none": "" }, Fc = $({ __name: "CurrencySelector", props: { modelValue: { default: fe.USD }, modelModifiers: {} }, emits: ["update:modelValue"], setup(e8) {
  const t = Ji(e8, "modelValue"), { options: n } = o();
  function o() {
    const a = { AED: "i-nimiq-flags:ae-hexagon", AUD: "i-nimiq-flags:au-hexagon", ARS: "i-nimiq-flags:ar-hexagon", BRL: "i-nimiq-flags:br-hexagon", CAD: "i-nimiq-flags:ca-hexagon", CHF: "i-nimiq-flags:ch-hexagon", CLP: "i-nimiq-flags:cl-hexagon", CNY: "i-nimiq-flags:cn-hexagon", CRC: "i-nimiq-flags:cr-hexagon", CZK: "i-nimiq-flags:cz-hexagon", DKK: "i-nimiq-flags:dk-hexagon", EUR: "i-nimiq-flags:eu-hexagon", GBP: "i-nimiq-flags:gb-hexagon", GMD: "i-nimiq-flags:gm-hexagon", GTQ: "i-nimiq-flags:gt-hexagon", HKD: "i-nimiq-flags:hk-hexagon", HUF: "i-nimiq-flags:hu-hexagon", IDR: "i-nimiq-flags:id-hexagon", ILS: "i-nimiq-flags:il-hexagon", INR: "i-nimiq-flags:in-hexagon", JPY: "i-nimiq-flags:jp-hexagon", KRW: "i-nimiq-flags:kr-hexagon", MXN: "i-nimiq-flags:mx-hexagon", MYR: "i-nimiq-flags:my-hexagon", NGN: "i-nimiq-flags:ng-hexagon", NOK: "i-nimiq-flags:no-hexagon", NZD: "i-nimiq-flags:nz-hexagon", PHP: "i-nimiq-flags:ph-hexagon", PKR: "i-nimiq-flags:pk-hexagon", PLN: "i-nimiq-flags:pl-hexagon", RUB: "i-nimiq-flags:ru-hexagon", SEK: "i-nimiq-flags:se-hexagon", SGD: "i-nimiq-flags:sg-hexagon", THB: "i-nimiq-flags:th-hexagon", TRY: "i-nimiq-flags:tr-hexagon", TWD: "i-nimiq-flags:tw-hexagon", UAH: "i-nimiq-flags:ua-hexagon", USD: "i-nimiq-flags:um-hexagon", VND: "i-nimiq-flags:vn-hexagon", XOF: "i-nimiq-flags:sn-hexagon", ZAR: "i-nimiq-flags:za-hexagon" };
    return { options: Aa.map((s) => ({ value: s, label: s.toLocaleLowerCase(), icon: a[s] })) };
  }
  function i(a) {
    return t.value === a ? "" : a;
  }
  return (a, r) => {
    const s = Rl, l = sl, c = Sl, h = Ml, d = Yl, u = Vl, f = Fl, p = Pl, g = Al, y = yl, v = bl, _ = Dl, b = pl;
    return T(), I(b, { modelValue: t.value, "onUpdate:modelValue": r[0] || (r[0] = (k) => t.value = k), relative: "", bg: "transparent hocus:neutral-200" }, { default: R(() => [D(l, { "w-max": "", "inline-flex": "~ items-center justify-between gap-5" }, { default: R(() => [D(s, { flex: "~ gap-3 items-center", "px-6": "", "py-3": "", "rounded-4": "", "bg-transparent": "", "transition-colors": "" }, { default: R(() => [K(a.$slots, "trigger", cn(Xi({ selectedCurrency: t.value })), () => [w("span", $c, le(t.value.toLocaleUpperCase()), 1), r[1] || (r[1] = w("div", { "op-60": "", "size-7": "", "i-nimiq:triangle-down": "" }, null, -1))])]), _: 3 })]), _: 3 }), D(_, null, { default: R(() => [D(v, { position: "popper", "will-change": "[opacity,transform]", "reka-top:animate-slidedownandfade": "", "reka-bottom:animate-slide-up-and-fade": "", "font-normal": "", "overscroll-none": "", "max-h-256": "", "w-168": "", "top-0": "", absolute: "", "z-10": "", "of-hidden": "" }, { default: R(() => [D(g, { outline: "1.5 ~ offset--1.5 white/10", "px-4": "", "pb-4": "", "rounded-4": "", "bg-neutral": "", flex: "~ col" }, { default: R(() => [w("label", Uc, [r[2] || (r[2] = w("div", { "text-neutral-800": "", "i-nimiq:magnifying-glass": "" }, null, -1)), D(c, { placeholder: "Search", text: "16 white", outline: "1.5! ~ blue", "lh-none": "", "px-3": "", "py-2": "", "rounded-4": "", "bg-transparent": "", "flex-1": "", "w-full": "", "display-value": i })]), D(p, { "bg-neutral": "", "flex-1": "", "h-full": "", relative: "", "of-hidden": "", "var:scrollbar-size:10px": "" }, { default: R(() => [r[3] || (r[3] = w("div", { "h-16": "", "w-full": "", "top-0": "", absolute: "", "z-2": "", "bg-gradient": "to-t from-transparent to-neutral" }, null, -1)), D(d, { "py-16": "", "h-218": "", "w-full": "" }, { default: R(() => [(T(true), Y(Ee, null, nt(m(n), (k) => (T(), I(h, { key: k.value, value: k.value, flex: "~ items-center gap-8", bg: "hocus:white/10 reka-active:white/10", "p-8": "", "rounded-2": "", "transition-colors": "" }, { default: R(() => [w("div", { class: ge(k.icon), "shrink-0": "", "size-20": "" }, null, 2), w("span", Hc, le(k.value.toLocaleUpperCase()), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }), D(f, { flex: "~", bg: "neutral-900", "p-2": "", "w-10": "", "select-none": "", "inset-y-0": "", "z-20": "", "touch-none": "", orientation: "vertical" }, { default: R(() => [D(u, { "rounded-5": "", "bg-neutral-700": "", "flex-1": "", "content-empty": "", relative: "", before: "absolute top--50% left--50% -translate-x--50% -translate-y--50% size-full min-h-40 min-w-40" })]), _: 1 }), r[4] || (r[4] = w("div", { "h-16": "", "w-full": "", "bottom-0": "", absolute: "", "z-2": "", "bg-gradient": "to-b from-transparent to-neutral" }, null, -1))]), _: 1, __: [3, 4] })]), _: 1 }), D(y)]), _: 1 })]), _: 1 })]), _: 3 }, 8, ["modelValue"]);
  };
} }), Ea = Object.assign(Fc, { __name: "CurrencySelector" });
function Pa(e8) {
  return e8 === null ? NaN : +e8;
}
const Vc = fo(la), xn = Vc.right;
fo(Pa).center;
function Yc(e8, t) {
  let n, o;
  for (const i of e8) i != null && (n === void 0 ? i >= i && (n = o = i) : (n > i && (n = i), o < i && (o = i)));
  return [n, o];
}
class si extends Map {
  constructor(t, n = Kc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [o, i] of t) this.set(o, i);
  }
  get(t) {
    return super.get(li(this, t));
  }
  has(t) {
    return super.has(li(this, t));
  }
  set(t, n) {
    return super.set(Gc(this, t), n);
  }
  delete(t) {
    return super.delete(zc(this, t));
  }
}
function li({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) ? e8.get(o) : n;
}
function Gc({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) ? e8.get(o) : (e8.set(o, n), n);
}
function zc({ _intern: e8, _key: t }, n) {
  const o = t(n);
  return e8.has(o) && (n = e8.get(o), e8.delete(o)), n;
}
function Kc(e8) {
  return e8 !== null && typeof e8 == "object" ? e8.valueOf() : e8;
}
const Wc = Math.sqrt(50), qc = Math.sqrt(10), jc = Math.sqrt(2);
function Jt(e8, t, n) {
  const o = (t - e8) / Math.max(0, n), i = Math.floor(Math.log10(o)), a = o / Math.pow(10, i), r = a >= Wc ? 10 : a >= qc ? 5 : a >= jc ? 2 : 1;
  let s, l, c;
  return i < 0 ? (c = Math.pow(10, -i) / r, s = Math.round(e8 * c), l = Math.round(t * c), s / c < e8 && ++s, l / c > t && --l, c = -c) : (c = Math.pow(10, i) * r, s = Math.round(e8 / c), l = Math.round(t / c), s * c < e8 && ++s, l * c > t && --l), l < s && 0.5 <= n && n < 2 ? Jt(e8, t, n * 2) : [s, l, c];
}
function qn(e8, t, n) {
  if (t = +t, e8 = +e8, n = +n, !(n > 0)) return [];
  if (e8 === t) return [e8];
  const o = t < e8, [i, a, r] = o ? Jt(t, e8, n) : Jt(e8, t, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (o) if (r < 0) for (let c = 0; c < s; ++c) l[c] = (a - c) / -r;
  else for (let c = 0; c < s; ++c) l[c] = (a - c) * r;
  else if (r < 0) for (let c = 0; c < s; ++c) l[c] = (i + c) / -r;
  else for (let c = 0; c < s; ++c) l[c] = (i + c) * r;
  return l;
}
function jn(e8, t, n) {
  return t = +t, e8 = +e8, n = +n, Jt(e8, t, n)[2];
}
function Zn(e8, t, n) {
  t = +t, e8 = +e8, n = +n;
  const o = t < e8, i = o ? jn(t, e8, n) : jn(e8, t, n);
  return (o ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Zc(e8, t, n = Pa) {
  if (!(!(o = e8.length) || isNaN(t = +t))) {
    if (t <= 0 || o < 2) return +n(e8[0], 0, e8);
    if (t >= 1) return +n(e8[o - 1], o - 1, e8);
    var o, i = (o - 1) * t, a = Math.floor(i), r = +n(e8[a], a, e8), s = +n(e8[a + 1], a + 1, e8);
    return r + (s - r) * (i - a);
  }
}
function* Xc(e8) {
  for (const t of e8) yield* t;
}
function Qc(e8) {
  return Array.from(Xc(e8));
}
function Jc(e8, t, n) {
  e8 = +e8, t = +t, n = (i = arguments.length) < 2 ? (t = e8, e8 = 0, 1) : i < 3 ? 1 : +n;
  for (var o = -1, i = Math.max(0, Math.ceil((t - e8) / n)) | 0, a = new Array(i); ++o < i; ) a[o] = e8 + o * n;
  return a;
}
function bo(e8, t) {
  return e8 = +e8, t = +t, function(n) {
    return Math.round(e8 * (1 - n) + t * n);
  };
}
function eu(e8, t) {
  t === void 0 && (t = e8, e8 = fn);
  for (var n = 0, o = t.length - 1, i = t[0], a = new Array(o < 0 ? 0 : o); n < o; ) a[n] = e8(i, i = t[++n]);
  return function(r) {
    var s = Math.max(0, Math.min(o - 1, Math.floor(r *= o)));
    return a[s](r - s);
  };
}
const ci = (e8) => +e8;
var j;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(j || (j = {}));
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
const ui = Symbol("implicit");
function xo() {
  var e8 = new si(), t = [], n = [], o = ui;
  function i(a) {
    let r = e8.get(a);
    if (r === void 0) {
      if (o !== ui) return o;
      e8.set(a, r = t.push(a) - 1);
    }
    return n[r % n.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e8 = new si();
    for (const r of a) e8.has(r) || e8.set(r, t.push(r) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (n = Array.from(a), i) : n.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (o = a, i) : o;
  }, i.copy = function() {
    return xo(t, n).unknown(o);
  }, Pe.apply(i, arguments), i;
}
function wo() {
  var e8 = xo().unknown(void 0), t = e8.domain, n = e8.range, o = 0, i = 1, a, r, s = false, l = 0, c = 0, h = 0.5;
  delete e8.unknown;
  function d() {
    var u = t().length, f = i < o, p = f ? i : o, g = f ? o : i;
    a = (g - p) / Math.max(1, u - l + c * 2), s && (a = Math.floor(a)), p += (g - p - a * (u - l)) * h, r = a * (1 - l), s && (p = Math.round(p), r = Math.round(r));
    var y = Jc(u).map(function(v) {
      return p + a * v;
    });
    return n(f ? y.reverse() : y);
  }
  return e8.domain = function(u) {
    return arguments.length ? (t(u), d()) : t();
  }, e8.range = function(u) {
    return arguments.length ? ([o, i] = u, o = +o, i = +i, d()) : [o, i];
  }, e8.rangeRound = function(u) {
    return [o, i] = u, o = +o, i = +i, s = true, d();
  }, e8.bandwidth = function() {
    return r;
  }, e8.step = function() {
    return a;
  }, e8.round = function(u) {
    return arguments.length ? (s = !!u, d()) : s;
  }, e8.padding = function(u) {
    return arguments.length ? (l = Math.min(1, c = +u), d()) : l;
  }, e8.paddingInner = function(u) {
    return arguments.length ? (l = Math.min(1, u), d()) : l;
  }, e8.paddingOuter = function(u) {
    return arguments.length ? (c = +u, d()) : c;
  }, e8.align = function(u) {
    return arguments.length ? (h = Math.max(0, Math.min(1, u)), d()) : h;
  }, e8.copy = function() {
    return wo(t(), [o, i]).round(s).paddingInner(l).paddingOuter(c).align(h);
  }, Pe.apply(d(), arguments);
}
function La(e8) {
  var t = e8.copy;
  return e8.padding = e8.paddingOuter, delete e8.paddingInner, delete e8.paddingOuter, e8.copy = function() {
    return La(t());
  }, e8;
}
function tu() {
  return La(wo.apply(null, arguments).paddingInner(1));
}
function nu(e8) {
  return function() {
    return e8;
  };
}
function Xn(e8) {
  return +e8;
}
var di = [0, 1];
function ve(e8) {
  return e8;
}
function Qn(e8, t) {
  return (t -= e8 = +e8) ? function(n) {
    return (n - e8) / t;
  } : nu(isNaN(t) ? NaN : 0.5);
}
function ou(e8, t) {
  var n;
  return e8 > t && (n = e8, e8 = t, t = n), function(o) {
    return Math.max(e8, Math.min(t, o));
  };
}
function iu(e8, t, n) {
  var o = e8[0], i = e8[1], a = t[0], r = t[1];
  return i < o ? (o = Qn(i, o), a = n(r, a)) : (o = Qn(o, i), a = n(a, r)), function(s) {
    return a(o(s));
  };
}
function au(e8, t, n) {
  var o = Math.min(e8.length, t.length) - 1, i = new Array(o), a = new Array(o), r = -1;
  for (e8[o] < e8[0] && (e8 = e8.slice().reverse(), t = t.slice().reverse()); ++r < o; ) i[r] = Qn(e8[r], e8[r + 1]), a[r] = n(t[r], t[r + 1]);
  return function(s) {
    var l = xn(e8, s, 1, o) - 1;
    return a[l](i[l](s));
  };
}
function $t(e8, t) {
  return t.domain(e8.domain()).range(e8.range()).interpolate(e8.interpolate()).clamp(e8.clamp()).unknown(e8.unknown());
}
function wn() {
  var e8 = di, t = di, n = fn, o, i, a, r = ve, s, l, c;
  function h() {
    var u = Math.min(e8.length, t.length);
    return r !== ve && (r = ou(e8[0], e8[u - 1])), s = u > 2 ? au : iu, l = c = null, d;
  }
  function d(u) {
    return u == null || isNaN(u = +u) ? a : (l || (l = s(e8.map(o), t, n)))(o(r(u)));
  }
  return d.invert = function(u) {
    return r(i((c || (c = s(t, e8.map(o), Ts)))(u)));
  }, d.domain = function(u) {
    return arguments.length ? (e8 = Array.from(u, Xn), h()) : e8.slice();
  }, d.range = function(u) {
    return arguments.length ? (t = Array.from(u), h()) : t.slice();
  }, d.rangeRound = function(u) {
    return t = Array.from(u), n = bo, h();
  }, d.clamp = function(u) {
    return arguments.length ? (r = u ? true : ve, h()) : r !== ve;
  }, d.interpolate = function(u) {
    return arguments.length ? (n = u, h()) : n;
  }, d.unknown = function(u) {
    return arguments.length ? (a = u, d) : a;
  }, function(u, f) {
    return o = u, i = f, h();
  };
}
function Ba() {
  return wn()(ve, ve);
}
function ru(e8) {
  return Math.abs(e8 = Math.round(e8)) >= 1e21 ? e8.toLocaleString("en").replace(/,/g, "") : e8.toString(10);
}
function en(e8, t) {
  if ((n = (e8 = t ? e8.toExponential(t - 1) : e8.toExponential()).indexOf("e")) < 0) return null;
  var n, o = e8.slice(0, n);
  return [o.length > 1 ? o[0] + o.slice(2) : o, +e8.slice(n + 1)];
}
function mt(e8) {
  return e8 = en(Math.abs(e8)), e8 ? e8[1] : NaN;
}
function su(e8, t) {
  return function(n, o) {
    for (var i = n.length, a = [], r = 0, s = e8[0], l = 0; i > 0 && s > 0 && (l + s + 1 > o && (s = Math.max(1, o - l)), a.push(n.substring(i -= s, i + s)), !((l += s + 1) > o)); ) s = e8[r = (r + 1) % e8.length];
    return a.reverse().join(t);
  };
}
function lu(e8) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e8[+n];
    });
  };
}
var cu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Bt(e8) {
  if (!(t = cu.exec(e8))) throw new Error("invalid format: " + e8);
  var t;
  return new So({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
Bt.prototype = So.prototype;
function So(e8) {
  this.fill = e8.fill === void 0 ? " " : e8.fill + "", this.align = e8.align === void 0 ? ">" : e8.align + "", this.sign = e8.sign === void 0 ? "-" : e8.sign + "", this.symbol = e8.symbol === void 0 ? "" : e8.symbol + "", this.zero = !!e8.zero, this.width = e8.width === void 0 ? void 0 : +e8.width, this.comma = !!e8.comma, this.precision = e8.precision === void 0 ? void 0 : +e8.precision, this.trim = !!e8.trim, this.type = e8.type === void 0 ? "" : e8.type + "";
}
So.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function uu(e8) {
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
function du(e8, t) {
  var n = en(e8, t);
  if (!n) return e8 + "";
  var o = n[0], i = n[1], a = i - (Ia = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, r = o.length;
  return a === r ? o : a > r ? o + new Array(a - r + 1).join("0") : a > 0 ? o.slice(0, a) + "." + o.slice(a) : "0." + new Array(1 - a).join("0") + en(e8, Math.max(0, t + a - 1))[0];
}
function hi(e8, t) {
  var n = en(e8, t);
  if (!n) return e8 + "";
  var o = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + o : o.length > i + 1 ? o.slice(0, i + 1) + "." + o.slice(i + 1) : o + new Array(i - o.length + 2).join("0");
}
const fi = { "%": (e8, t) => (e8 * 100).toFixed(t), b: (e8) => Math.round(e8).toString(2), c: (e8) => e8 + "", d: ru, e: (e8, t) => e8.toExponential(t), f: (e8, t) => e8.toFixed(t), g: (e8, t) => e8.toPrecision(t), o: (e8) => Math.round(e8).toString(8), p: (e8, t) => hi(e8 * 100, t), r: hi, s: du, X: (e8) => Math.round(e8).toString(16).toUpperCase(), x: (e8) => Math.round(e8).toString(16) };
function pi(e8) {
  return e8;
}
var mi = Array.prototype.map, gi = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hu(e8) {
  var t = e8.grouping === void 0 || e8.thousands === void 0 ? pi : su(mi.call(e8.grouping, Number), e8.thousands + ""), n = e8.currency === void 0 ? "" : e8.currency[0] + "", o = e8.currency === void 0 ? "" : e8.currency[1] + "", i = e8.decimal === void 0 ? "." : e8.decimal + "", a = e8.numerals === void 0 ? pi : lu(mi.call(e8.numerals, String)), r = e8.percent === void 0 ? "%" : e8.percent + "", s = e8.minus === void 0 ? "\u2212" : e8.minus + "", l = e8.nan === void 0 ? "NaN" : e8.nan + "";
  function c(d) {
    d = Bt(d);
    var u = d.fill, f = d.align, p = d.sign, g = d.symbol, y = d.zero, v = d.width, _ = d.comma, b = d.precision, k = d.trim, C = d.type;
    C === "n" ? (_ = true, C = "g") : fi[C] || (b === void 0 && (b = 12), k = true, C = "g"), (y || u === "0" && f === "=") && (y = true, u = "0", f = "=");
    var M = g === "$" ? n : g === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", A = g === "$" ? o : /[%p]/.test(C) ? r : "", W = fi[C], G = /[defgprs%]/.test(C);
    b = b === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function Q(B) {
      var U = M, L = A, F, J, ke;
      if (C === "c") L = W(B) + L, B = "";
      else {
        B = +B;
        var Te = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? l : W(Math.abs(B), b), k && (B = uu(B)), Te && +B == 0 && p !== "+" && (Te = false), U = (Te ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + U, L = (C === "s" ? gi[8 + Ia / 3] : "") + L + (Te && p === "(" ? ")" : ""), G) {
          for (F = -1, J = B.length; ++F < J; ) if (ke = B.charCodeAt(F), 48 > ke || ke > 57) {
            L = (ke === 46 ? i + B.slice(F + 1) : B.slice(F)) + L, B = B.slice(0, F);
            break;
          }
        }
      }
      _ && !y && (B = t(B, 1 / 0));
      var Ce = U.length + B.length + L.length, de = Ce < v ? new Array(v - Ce + 1).join(u) : "";
      switch (_ && y && (B = t(de + B, de.length ? v - L.length : 1 / 0), de = ""), f) {
        case "<":
          B = U + B + L + de;
          break;
        case "=":
          B = U + de + B + L;
          break;
        case "^":
          B = de.slice(0, Ce = de.length >> 1) + U + B + L + de.slice(Ce);
          break;
        default:
          B = de + U + B + L;
          break;
      }
      return a(B);
    }
    return Q.toString = function() {
      return d + "";
    }, Q;
  }
  function h(d, u) {
    var f = c((d = Bt(d), d.type = "f", d)), p = Math.max(-8, Math.min(8, Math.floor(mt(u) / 3))) * 3, g = Math.pow(10, -p), y = gi[8 + p / 3];
    return function(v) {
      return f(g * v) + y;
    };
  }
  return { format: c, formatPrefix: h };
}
var Gt, ko, Oa;
fu({ thousands: ",", grouping: [3], currency: ["$", ""] });
function fu(e8) {
  return Gt = hu(e8), ko = Gt.format, Oa = Gt.formatPrefix, Gt;
}
function pu(e8) {
  return Math.max(0, -mt(Math.abs(e8)));
}
function mu(e8, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(mt(t) / 3))) * 3 - mt(Math.abs(e8)));
}
function gu(e8, t) {
  return e8 = Math.abs(e8), t = Math.abs(t) - e8, Math.max(0, mt(t) - mt(e8)) + 1;
}
function vu(e8, t, n, o) {
  var i = Zn(e8, t, n), a;
  switch (o = Bt(o ?? ",f"), o.type) {
    case "s": {
      var r = Math.max(Math.abs(e8), Math.abs(t));
      return o.precision == null && !isNaN(a = mu(i, r)) && (o.precision = a), Oa(o, r);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(a = gu(i, Math.max(Math.abs(e8), Math.abs(t)))) && (o.precision = a - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(a = pu(i)) && (o.precision = a - (o.type === "%") * 2);
      break;
    }
  }
  return ko(o);
}
function at(e8) {
  var t = e8.domain;
  return e8.ticks = function(n) {
    var o = t();
    return qn(o[0], o[o.length - 1], n ?? 10);
  }, e8.tickFormat = function(n, o) {
    var i = t();
    return vu(i[0], i[i.length - 1], n ?? 10, o);
  }, e8.nice = function(n) {
    n == null && (n = 10);
    var o = t(), i = 0, a = o.length - 1, r = o[i], s = o[a], l, c, h = 10;
    for (s < r && (c = r, r = s, s = c, c = i, i = a, a = c); h-- > 0; ) {
      if (c = jn(r, s, n), c === l) return o[i] = r, o[a] = s, t(o);
      if (c > 0) r = Math.floor(r / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0) r = Math.ceil(r * c) / c, s = Math.floor(s * c) / c;
      else break;
      l = c;
    }
    return e8;
  }, e8;
}
function $a() {
  var e8 = Ba();
  return e8.copy = function() {
    return $t(e8, $a());
  }, Pe.apply(e8, arguments), at(e8);
}
function Ua(e8) {
  var t;
  function n(o) {
    return o == null || isNaN(o = +o) ? t : o;
  }
  return n.invert = n, n.domain = n.range = function(o) {
    return arguments.length ? (e8 = Array.from(o, Xn), n) : e8.slice();
  }, n.unknown = function(o) {
    return arguments.length ? (t = o, n) : t;
  }, n.copy = function() {
    return Ua(e8).unknown(t);
  }, e8 = arguments.length ? Array.from(e8, Xn) : [0, 1], at(n);
}
function Ha(e8, t) {
  e8 = e8.slice();
  var n = 0, o = e8.length - 1, i = e8[n], a = e8[o], r;
  return a < i && (r = n, n = o, o = r, r = i, i = a, a = r), e8[n] = t.floor(i), e8[o] = t.ceil(a), e8;
}
function vi(e8) {
  return Math.log(e8);
}
function _i(e8) {
  return Math.exp(e8);
}
function _u(e8) {
  return -Math.log(-e8);
}
function yu(e8) {
  return -Math.exp(-e8);
}
function bu(e8) {
  return isFinite(e8) ? +("1e" + e8) : e8 < 0 ? 0 : e8;
}
function xu(e8) {
  return e8 === 10 ? bu : e8 === Math.E ? Math.exp : (t) => Math.pow(e8, t);
}
function wu(e8) {
  return e8 === Math.E ? Math.log : e8 === 10 && Math.log10 || e8 === 2 && Math.log2 || (e8 = Math.log(e8), (t) => Math.log(t) / e8);
}
function yi(e8) {
  return (t, n) => -e8(-t, n);
}
function Su(e8) {
  const t = e8(vi, _i), n = t.domain;
  let o = 10, i, a;
  function r() {
    return i = wu(o), a = xu(o), n()[0] < 0 ? (i = yi(i), a = yi(a), e8(_u, yu)) : e8(vi, _i), t;
  }
  return t.base = function(s) {
    return arguments.length ? (o = +s, r()) : o;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), r()) : n();
  }, t.ticks = (s) => {
    const l = n();
    let c = l[0], h = l[l.length - 1];
    const d = h < c;
    d && ([c, h] = [h, c]);
    let u = i(c), f = i(h), p, g;
    const y = s == null ? 10 : +s;
    let v = [];
    if (!(o % 1) && f - u < y) {
      if (u = Math.floor(u), f = Math.ceil(f), c > 0) {
        for (; u <= f; ++u) for (p = 1; p < o; ++p) if (g = u < 0 ? p / a(-u) : p * a(u), !(g < c)) {
          if (g > h) break;
          v.push(g);
        }
      } else for (; u <= f; ++u) for (p = o - 1; p >= 1; --p) if (g = u > 0 ? p / a(-u) : p * a(u), !(g < c)) {
        if (g > h) break;
        v.push(g);
      }
      v.length * 2 < y && (v = qn(c, h, y));
    } else v = qn(u, f, Math.min(f - u, y)).map(a);
    return d ? v.reverse() : v;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = o === 10 ? "s" : ","), typeof l != "function" && (!(o % 1) && (l = Bt(l)).precision == null && (l.trim = true), l = ko(l)), s === 1 / 0) return l;
    const c = Math.max(1, o * s / t.ticks().length);
    return (h) => {
      let d = h / a(Math.round(i(h)));
      return d * o < o - 0.5 && (d *= o), d <= c ? l(h) : "";
    };
  }, t.nice = () => n(Ha(n(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function Fa() {
  const e8 = Su(wn()).domain([1, 10]);
  return e8.copy = () => $t(e8, Fa()).base(e8.base()), Pe.apply(e8, arguments), e8;
}
function bi(e8) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e8));
  };
}
function xi(e8) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e8;
  };
}
function ku(e8) {
  var t = 1, n = e8(bi(t), xi(t));
  return n.constant = function(o) {
    return arguments.length ? e8(bi(t = +o), xi(t)) : t;
  }, at(n);
}
function Va() {
  var e8 = ku(wn());
  return e8.copy = function() {
    return $t(e8, Va()).constant(e8.constant());
  }, Pe.apply(e8, arguments);
}
function wi(e8) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e8) : Math.pow(t, e8);
  };
}
function Tu(e8) {
  return e8 < 0 ? -Math.sqrt(-e8) : Math.sqrt(e8);
}
function Cu(e8) {
  return e8 < 0 ? -e8 * e8 : e8 * e8;
}
function Mu(e8) {
  var t = e8(ve, ve), n = 1;
  function o() {
    return n === 1 ? e8(ve, ve) : n === 0.5 ? e8(Tu, Cu) : e8(wi(n), wi(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, o()) : n;
  }, at(t);
}
function To() {
  var e8 = Mu(wn());
  return e8.copy = function() {
    return $t(e8, To()).exponent(e8.exponent());
  }, Pe.apply(e8, arguments), e8;
}
function Du() {
  return To.apply(null, arguments).exponent(0.5);
}
function Ya() {
  var e8 = [], t = [], n = [], o;
  function i() {
    var r = 0, s = Math.max(1, t.length);
    for (n = new Array(s - 1); ++r < s; ) n[r - 1] = Zc(e8, r / s);
    return a;
  }
  function a(r) {
    return r == null || isNaN(r = +r) ? o : t[xn(n, r)];
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
  }, Pe.apply(a, arguments);
}
function Ga() {
  var e8 = 0, t = 1, n = 1, o = [0.5], i = [0, 1], a;
  function r(l) {
    return l != null && l <= l ? i[xn(o, l, 0, n)] : a;
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
    var c = i.indexOf(l);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e8, o[0]] : c >= n ? [o[n - 1], t] : [o[c - 1], o[c]];
  }, r.unknown = function(l) {
    return arguments.length && (a = l), r;
  }, r.thresholds = function() {
    return o.slice();
  }, r.copy = function() {
    return Ga().domain([e8, t]).range(i).unknown(a);
  }, Pe.apply(at(r), arguments);
}
function za() {
  var e8 = [0.5], t = [0, 1], n, o = 1;
  function i(a) {
    return a != null && a <= a ? t[xn(e8, a, 0, o)] : n;
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
  }, Pe.apply(i, arguments);
}
const On = /* @__PURE__ */ new Date(), $n = /* @__PURE__ */ new Date();
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
    let c;
    do
      l.push(c = /* @__PURE__ */ new Date(+a)), t(a, s), e8(a);
    while (c < a && a < r);
    return l;
  }, i.filter = (a) => se((r) => {
    if (r >= r) for (; e8(r), !a(r); ) r.setTime(r - 1);
  }, (r, s) => {
    if (r >= r) if (s < 0) for (; ++s <= 0; ) for (; t(r, -1), !a(r); ) ;
    else for (; --s >= 0; ) for (; t(r, 1), !a(r); ) ;
  }), n && (i.count = (a, r) => (On.setTime(+a), $n.setTime(+r), e8(On), e8($n), Math.floor(n(On, $n))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(o ? (r) => o(r) % a === 0 : (r) => i.count(0, r) % a === 0) : i)), i;
}
const tn = se(() => {
}, (e8, t) => {
  e8.setTime(+e8 + t);
}, (e8, t) => t - e8);
tn.every = (e8) => (e8 = Math.floor(e8), !isFinite(e8) || !(e8 > 0) ? null : e8 > 1 ? se((t) => {
  t.setTime(Math.floor(t / e8) * e8);
}, (t, n) => {
  t.setTime(+t + n * e8);
}, (t, n) => (n - t) / e8) : tn);
tn.range;
const Oe = 1e3, Re = Oe * 60, $e = Re * 60, He = $e * 24, Co = He * 7, Si = He * 30, Un = He * 365, Qe = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds());
}, (e8, t) => {
  e8.setTime(+e8 + t * Oe);
}, (e8, t) => (t - e8) / Oe, (e8) => e8.getUTCSeconds());
Qe.range;
const Mo = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * Oe);
}, (e8, t) => {
  e8.setTime(+e8 + t * Re);
}, (e8, t) => (t - e8) / Re, (e8) => e8.getMinutes());
Mo.range;
const Do = se((e8) => {
  e8.setUTCSeconds(0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * Re);
}, (e8, t) => (t - e8) / Re, (e8) => e8.getUTCMinutes());
Do.range;
const Ro = se((e8) => {
  e8.setTime(e8 - e8.getMilliseconds() - e8.getSeconds() * Oe - e8.getMinutes() * Re);
}, (e8, t) => {
  e8.setTime(+e8 + t * $e);
}, (e8, t) => (t - e8) / $e, (e8) => e8.getHours());
Ro.range;
const Ao = se((e8) => {
  e8.setUTCMinutes(0, 0, 0);
}, (e8, t) => {
  e8.setTime(+e8 + t * $e);
}, (e8, t) => (t - e8) / $e, (e8) => e8.getUTCHours());
Ao.range;
const Ut = se((e8) => e8.setHours(0, 0, 0, 0), (e8, t) => e8.setDate(e8.getDate() + t), (e8, t) => (t - e8 - (t.getTimezoneOffset() - e8.getTimezoneOffset()) * Re) / He, (e8) => e8.getDate() - 1);
Ut.range;
const Sn = se((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / He, (e8) => e8.getUTCDate() - 1);
Sn.range;
const Ka = se((e8) => {
  e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCDate(e8.getUTCDate() + t);
}, (e8, t) => (t - e8) / He, (e8) => Math.floor(e8 / He));
Ka.range;
function rt(e8) {
  return se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e8) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Re) / Co);
}
const kn = rt(0), nn = rt(1), Ru = rt(2), Au = rt(3), gt = rt(4), Eu = rt(5), Pu = rt(6);
kn.range;
nn.range;
Ru.range;
Au.range;
gt.range;
Eu.range;
Pu.range;
function st(e8) {
  return se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e8) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Co);
}
const Tn = st(0), on = st(1), Nu = st(2), Lu = st(3), vt = st(4), Bu = st(5), Iu = st(6);
Tn.range;
on.range;
Nu.range;
Lu.range;
vt.range;
Bu.range;
Iu.range;
const Eo = se((e8) => {
  e8.setDate(1), e8.setHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setMonth(e8.getMonth() + t);
}, (e8, t) => t.getMonth() - e8.getMonth() + (t.getFullYear() - e8.getFullYear()) * 12, (e8) => e8.getMonth());
Eo.range;
const Po = se((e8) => {
  e8.setUTCDate(1), e8.setUTCHours(0, 0, 0, 0);
}, (e8, t) => {
  e8.setUTCMonth(e8.getUTCMonth() + t);
}, (e8, t) => t.getUTCMonth() - e8.getUTCMonth() + (t.getUTCFullYear() - e8.getUTCFullYear()) * 12, (e8) => e8.getUTCMonth());
Po.range;
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
  const r = [[Qe, 1, Oe], [Qe, 5, 5 * Oe], [Qe, 15, 15 * Oe], [Qe, 30, 30 * Oe], [a, 1, Re], [a, 5, 5 * Re], [a, 15, 15 * Re], [a, 30, 30 * Re], [i, 1, $e], [i, 3, 3 * $e], [i, 6, 6 * $e], [i, 12, 12 * $e], [o, 1, He], [o, 2, 2 * He], [n, 1, Co], [t, 1, Si], [t, 3, 3 * Si], [e8, 1, Un]];
  function s(c, h, d) {
    const u = h < c;
    u && ([c, h] = [h, c]);
    const f = d && typeof d.range == "function" ? d : l(c, h, d), p = f ? f.range(c, +h + 1) : [];
    return u ? p.reverse() : p;
  }
  function l(c, h, d) {
    const u = Math.abs(h - c) / d, f = fo(([, , y]) => y).right(r, u);
    if (f === r.length) return e8.every(Zn(c / Un, h / Un, d));
    if (f === 0) return tn.every(Math.max(Zn(c, h, d), 1));
    const [p, g] = r[u / r[f - 1][2] < r[f][2] / u ? f - 1 : f];
    return p.every(g);
  }
  return [s, l];
}
const [Ou, $u] = Wa(Ve, Po, Tn, Ka, Ao, Do), [Uu, Hu] = Wa(Fe, Eo, kn, Ut, Ro, Mo);
function Hn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
    return t.setFullYear(e8.y), t;
  }
  return new Date(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L);
}
function Fn(e8) {
  if (0 <= e8.y && e8.y < 100) {
    var t = new Date(Date.UTC(-1, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
    return t.setUTCFullYear(e8.y), t;
  }
  return new Date(Date.UTC(e8.y, e8.m, e8.d, e8.H, e8.M, e8.S, e8.L));
}
function kt(e8, t, n) {
  return { y: e8, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Fu(e8) {
  var t = e8.dateTime, n = e8.date, o = e8.time, i = e8.periods, a = e8.days, r = e8.shortDays, s = e8.months, l = e8.shortMonths, c = Tt(i), h = Ct(i), d = Tt(a), u = Ct(a), f = Tt(r), p = Ct(r), g = Tt(s), y = Ct(s), v = Tt(l), _ = Ct(l), b = { a: Te, A: Ce, b: de, B: Be, c: null, d: Ri, e: Ri, f: ud, g: bd, G: wd, H: sd, I: ld, j: cd, L: qa, m: dd, M: hd, p: Ye, q: je, Q: Pi, s: Ni, S: fd, u: pd, U: md, V: gd, w: vd, W: _d, x: null, X: null, y: yd, Y: xd, Z: Sd, "%": Ei }, k = { a: bt, A: he, b: ye, B: Me, c: null, d: Ai, e: Ai, f: Md, g: Od, G: Ud, H: kd, I: Td, j: Cd, L: Za, m: Dd, M: Rd, p: E, q: V, Q: Pi, s: Ni, S: Ad, u: Ed, U: Pd, V: Nd, w: Ld, W: Bd, x: null, X: null, y: Id, Y: $d, Z: Hd, "%": Ei }, C = { a: Q, A: B, b: U, B: L, c: F, d: Mi, e: Mi, f: od, g: Ci, G: Ti, H: Di, I: Di, j: Ju, L: nd, m: Qu, M: ed, p: G, q: Xu, Q: ad, s: rd, S: td, u: Ku, U: Wu, V: qu, w: zu, W: ju, x: J, X: ke, y: Ci, Y: Ti, Z: Zu, "%": id };
  b.x = M(n, b), b.X = M(o, b), b.c = M(t, b), k.x = M(n, k), k.X = M(o, k), k.c = M(t, k);
  function M(x, N) {
    return function(H) {
      var S = [], oe = -1, X = 0, be = x.length, xe, Ze, Fo;
      for (H instanceof Date || (H = /* @__PURE__ */ new Date(+H)); ++oe < be; ) x.charCodeAt(oe) === 37 && (S.push(x.slice(X, oe)), (Ze = ki[xe = x.charAt(++oe)]) != null ? xe = x.charAt(++oe) : Ze = xe === "e" ? " " : "0", (Fo = N[xe]) && (xe = Fo(H, Ze)), S.push(xe), X = oe + 1);
      return S.push(x.slice(X, oe)), S.join("");
    };
  }
  function A(x, N) {
    return function(H) {
      var S = kt(1900, void 0, 1), oe = W(S, x, H += "", 0), X, be;
      if (oe != H.length) return null;
      if ("Q" in S) return new Date(S.Q);
      if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
      if (N && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
        if (S.V < 1 || S.V > 53) return null;
        "w" in S || (S.w = 1), "Z" in S ? (X = Fn(kt(S.y, 0, 1)), be = X.getUTCDay(), X = be > 4 || be === 0 ? on.ceil(X) : on(X), X = Sn.offset(X, (S.V - 1) * 7), S.y = X.getUTCFullYear(), S.m = X.getUTCMonth(), S.d = X.getUTCDate() + (S.w + 6) % 7) : (X = Hn(kt(S.y, 0, 1)), be = X.getDay(), X = be > 4 || be === 0 ? nn.ceil(X) : nn(X), X = Ut.offset(X, (S.V - 1) * 7), S.y = X.getFullYear(), S.m = X.getMonth(), S.d = X.getDate() + (S.w + 6) % 7);
      } else ("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), be = "Z" in S ? Fn(kt(S.y, 0, 1)).getUTCDay() : Hn(kt(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (be + 5) % 7 : S.w + S.U * 7 - (be + 6) % 7);
      return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, Fn(S)) : Hn(S);
    };
  }
  function W(x, N, H, S) {
    for (var oe = 0, X = N.length, be = H.length, xe, Ze; oe < X; ) {
      if (S >= be) return -1;
      if (xe = N.charCodeAt(oe++), xe === 37) {
        if (xe = N.charAt(oe++), Ze = C[xe in ki ? N.charAt(oe++) : xe], !Ze || (S = Ze(x, H, S)) < 0) return -1;
      } else if (xe != H.charCodeAt(S++)) return -1;
    }
    return S;
  }
  function G(x, N, H) {
    var S = c.exec(N.slice(H));
    return S ? (x.p = h.get(S[0].toLowerCase()), H + S[0].length) : -1;
  }
  function Q(x, N, H) {
    var S = f.exec(N.slice(H));
    return S ? (x.w = p.get(S[0].toLowerCase()), H + S[0].length) : -1;
  }
  function B(x, N, H) {
    var S = d.exec(N.slice(H));
    return S ? (x.w = u.get(S[0].toLowerCase()), H + S[0].length) : -1;
  }
  function U(x, N, H) {
    var S = v.exec(N.slice(H));
    return S ? (x.m = _.get(S[0].toLowerCase()), H + S[0].length) : -1;
  }
  function L(x, N, H) {
    var S = g.exec(N.slice(H));
    return S ? (x.m = y.get(S[0].toLowerCase()), H + S[0].length) : -1;
  }
  function F(x, N, H) {
    return W(x, t, N, H);
  }
  function J(x, N, H) {
    return W(x, n, N, H);
  }
  function ke(x, N, H) {
    return W(x, o, N, H);
  }
  function Te(x) {
    return r[x.getDay()];
  }
  function Ce(x) {
    return a[x.getDay()];
  }
  function de(x) {
    return l[x.getMonth()];
  }
  function Be(x) {
    return s[x.getMonth()];
  }
  function Ye(x) {
    return i[+(x.getHours() >= 12)];
  }
  function je(x) {
    return 1 + ~~(x.getMonth() / 3);
  }
  function bt(x) {
    return r[x.getUTCDay()];
  }
  function he(x) {
    return a[x.getUTCDay()];
  }
  function ye(x) {
    return l[x.getUTCMonth()];
  }
  function Me(x) {
    return s[x.getUTCMonth()];
  }
  function E(x) {
    return i[+(x.getUTCHours() >= 12)];
  }
  function V(x) {
    return 1 + ~~(x.getUTCMonth() / 3);
  }
  return { format: function(x) {
    var N = M(x += "", b);
    return N.toString = function() {
      return x;
    }, N;
  }, parse: function(x) {
    var N = A(x += "", false);
    return N.toString = function() {
      return x;
    }, N;
  }, utcFormat: function(x) {
    var N = M(x += "", k);
    return N.toString = function() {
      return x;
    }, N;
  }, utcParse: function(x) {
    var N = A(x += "", true);
    return N.toString = function() {
      return x;
    }, N;
  } };
}
var ki = { "-": "", _: " ", 0: "0" }, ue = /^\s*\d+/, Vu = /^%/, Yu = /[\\^$*+?|[\]().{}]/g;
function q(e8, t, n) {
  var o = e8 < 0 ? "-" : "", i = (o ? -e8 : e8) + "", a = i.length;
  return o + (a < n ? new Array(n - a + 1).join(t) + i : i);
}
function Gu(e8) {
  return e8.replace(Yu, "\\$&");
}
function Tt(e8) {
  return new RegExp("^(?:" + e8.map(Gu).join("|") + ")", "i");
}
function Ct(e8) {
  return new Map(e8.map((t, n) => [t.toLowerCase(), n]));
}
function zu(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 1));
  return o ? (e8.w = +o[0], n + o[0].length) : -1;
}
function Ku(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 1));
  return o ? (e8.u = +o[0], n + o[0].length) : -1;
}
function Wu(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.U = +o[0], n + o[0].length) : -1;
}
function qu(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.V = +o[0], n + o[0].length) : -1;
}
function ju(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.W = +o[0], n + o[0].length) : -1;
}
function Ti(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 4));
  return o ? (e8.y = +o[0], n + o[0].length) : -1;
}
function Ci(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3), n + o[0].length) : -1;
}
function Zu(e8, t, n) {
  var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return o ? (e8.Z = o[1] ? 0 : -(o[2] + (o[3] || "00")), n + o[0].length) : -1;
}
function Xu(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 1));
  return o ? (e8.q = o[0] * 3 - 3, n + o[0].length) : -1;
}
function Qu(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.m = o[0] - 1, n + o[0].length) : -1;
}
function Mi(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.d = +o[0], n + o[0].length) : -1;
}
function Ju(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 3));
  return o ? (e8.m = 0, e8.d = +o[0], n + o[0].length) : -1;
}
function Di(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.H = +o[0], n + o[0].length) : -1;
}
function ed(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.M = +o[0], n + o[0].length) : -1;
}
function td(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 2));
  return o ? (e8.S = +o[0], n + o[0].length) : -1;
}
function nd(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 3));
  return o ? (e8.L = +o[0], n + o[0].length) : -1;
}
function od(e8, t, n) {
  var o = ue.exec(t.slice(n, n + 6));
  return o ? (e8.L = Math.floor(o[0] / 1e3), n + o[0].length) : -1;
}
function id(e8, t, n) {
  var o = Vu.exec(t.slice(n, n + 1));
  return o ? n + o[0].length : -1;
}
function ad(e8, t, n) {
  var o = ue.exec(t.slice(n));
  return o ? (e8.Q = +o[0], n + o[0].length) : -1;
}
function rd(e8, t, n) {
  var o = ue.exec(t.slice(n));
  return o ? (e8.s = +o[0], n + o[0].length) : -1;
}
function Ri(e8, t) {
  return q(e8.getDate(), t, 2);
}
function sd(e8, t) {
  return q(e8.getHours(), t, 2);
}
function ld(e8, t) {
  return q(e8.getHours() % 12 || 12, t, 2);
}
function cd(e8, t) {
  return q(1 + Ut.count(Fe(e8), e8), t, 3);
}
function qa(e8, t) {
  return q(e8.getMilliseconds(), t, 3);
}
function ud(e8, t) {
  return qa(e8, t) + "000";
}
function dd(e8, t) {
  return q(e8.getMonth() + 1, t, 2);
}
function hd(e8, t) {
  return q(e8.getMinutes(), t, 2);
}
function fd(e8, t) {
  return q(e8.getSeconds(), t, 2);
}
function pd(e8) {
  var t = e8.getDay();
  return t === 0 ? 7 : t;
}
function md(e8, t) {
  return q(kn.count(Fe(e8) - 1, e8), t, 2);
}
function ja(e8) {
  var t = e8.getDay();
  return t >= 4 || t === 0 ? gt(e8) : gt.ceil(e8);
}
function gd(e8, t) {
  return e8 = ja(e8), q(gt.count(Fe(e8), e8) + (Fe(e8).getDay() === 4), t, 2);
}
function vd(e8) {
  return e8.getDay();
}
function _d(e8, t) {
  return q(nn.count(Fe(e8) - 1, e8), t, 2);
}
function yd(e8, t) {
  return q(e8.getFullYear() % 100, t, 2);
}
function bd(e8, t) {
  return e8 = ja(e8), q(e8.getFullYear() % 100, t, 2);
}
function xd(e8, t) {
  return q(e8.getFullYear() % 1e4, t, 4);
}
function wd(e8, t) {
  var n = e8.getDay();
  return e8 = n >= 4 || n === 0 ? gt(e8) : gt.ceil(e8), q(e8.getFullYear() % 1e4, t, 4);
}
function Sd(e8) {
  var t = e8.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + q(t / 60 | 0, "0", 2) + q(t % 60, "0", 2);
}
function Ai(e8, t) {
  return q(e8.getUTCDate(), t, 2);
}
function kd(e8, t) {
  return q(e8.getUTCHours(), t, 2);
}
function Td(e8, t) {
  return q(e8.getUTCHours() % 12 || 12, t, 2);
}
function Cd(e8, t) {
  return q(1 + Sn.count(Ve(e8), e8), t, 3);
}
function Za(e8, t) {
  return q(e8.getUTCMilliseconds(), t, 3);
}
function Md(e8, t) {
  return Za(e8, t) + "000";
}
function Dd(e8, t) {
  return q(e8.getUTCMonth() + 1, t, 2);
}
function Rd(e8, t) {
  return q(e8.getUTCMinutes(), t, 2);
}
function Ad(e8, t) {
  return q(e8.getUTCSeconds(), t, 2);
}
function Ed(e8) {
  var t = e8.getUTCDay();
  return t === 0 ? 7 : t;
}
function Pd(e8, t) {
  return q(Tn.count(Ve(e8) - 1, e8), t, 2);
}
function Xa(e8) {
  var t = e8.getUTCDay();
  return t >= 4 || t === 0 ? vt(e8) : vt.ceil(e8);
}
function Nd(e8, t) {
  return e8 = Xa(e8), q(vt.count(Ve(e8), e8) + (Ve(e8).getUTCDay() === 4), t, 2);
}
function Ld(e8) {
  return e8.getUTCDay();
}
function Bd(e8, t) {
  return q(on.count(Ve(e8) - 1, e8), t, 2);
}
function Id(e8, t) {
  return q(e8.getUTCFullYear() % 100, t, 2);
}
function Od(e8, t) {
  return e8 = Xa(e8), q(e8.getUTCFullYear() % 100, t, 2);
}
function $d(e8, t) {
  return q(e8.getUTCFullYear() % 1e4, t, 4);
}
function Ud(e8, t) {
  var n = e8.getUTCDay();
  return e8 = n >= 4 || n === 0 ? vt(e8) : vt.ceil(e8), q(e8.getUTCFullYear() % 1e4, t, 4);
}
function Hd() {
  return "+0000";
}
function Ei() {
  return "%";
}
function Pi(e8) {
  return +e8;
}
function Ni(e8) {
  return Math.floor(+e8 / 1e3);
}
var ct, Qa, Ja;
Fd({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function Fd(e8) {
  return ct = Fu(e8), Qa = ct.format, ct.parse, Ja = ct.utcFormat, ct.utcParse, ct;
}
function Vd(e8) {
  return new Date(e8);
}
function Yd(e8) {
  return e8 instanceof Date ? +e8 : +/* @__PURE__ */ new Date(+e8);
}
function No(e8, t, n, o, i, a, r, s, l, c) {
  var h = Ba(), d = h.invert, u = h.domain, f = c(".%L"), p = c(":%S"), g = c("%I:%M"), y = c("%I %p"), v = c("%a %d"), _ = c("%b %d"), b = c("%B"), k = c("%Y");
  function C(M) {
    return (l(M) < M ? f : s(M) < M ? p : r(M) < M ? g : a(M) < M ? y : o(M) < M ? i(M) < M ? v : _ : n(M) < M ? b : k)(M);
  }
  return h.invert = function(M) {
    return new Date(d(M));
  }, h.domain = function(M) {
    return arguments.length ? u(Array.from(M, Yd)) : u().map(Vd);
  }, h.ticks = function(M) {
    var A = u();
    return e8(A[0], A[A.length - 1], M ?? 10);
  }, h.tickFormat = function(M, A) {
    return A == null ? C : c(A);
  }, h.nice = function(M) {
    var A = u();
    return (!M || typeof M.range != "function") && (M = t(A[0], A[A.length - 1], M ?? 10)), M ? u(Ha(A, M)) : h;
  }, h.copy = function() {
    return $t(h, No(e8, t, n, o, i, a, r, s, l, c));
  }, h;
}
function Gd() {
  return Pe.apply(No(Uu, Hu, Fe, Eo, kn, Ut, Ro, Mo, Qe, Qa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function zd() {
  return Pe.apply(No(Ou, $u, Ve, Po, Tn, Sn, Ao, Do, Qe, Ja).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Kd() {
  var e8 = 0, t = 1, n, o, i, a, r = ve, s = false, l;
  function c(d) {
    return d == null || isNaN(d = +d) ? l : r(i === 0 ? 0.5 : (d = (a(d) - n) * i, s ? Math.max(0, Math.min(1, d)) : d));
  }
  c.domain = function(d) {
    return arguments.length ? ([e8, t] = d, n = a(e8 = +e8), o = a(t = +t), i = n === o ? 0 : 1 / (o - n), c) : [e8, t];
  }, c.clamp = function(d) {
    return arguments.length ? (s = !!d, c) : s;
  }, c.interpolator = function(d) {
    return arguments.length ? (r = d, c) : r;
  };
  function h(d) {
    return function(u) {
      var f, p;
      return arguments.length ? ([f, p] = u, r = d(f, p), c) : [r(0), r(1)];
    };
  }
  return c.range = h(fn), c.rangeRound = h(bo), c.unknown = function(d) {
    return arguments.length ? (l = d, c) : l;
  }, function(d) {
    return a = d, n = d(e8), o = d(t), i = n === o ? 0 : 1 / (o - n), c;
  };
}
function er(e8, t) {
  return t.domain(e8.domain()).interpolator(e8.interpolator()).clamp(e8.clamp()).unknown(e8.unknown());
}
function tr() {
  var e8 = at(Kd()(ve));
  return e8.copy = function() {
    return er(e8, tr());
  }, Na.apply(e8, arguments);
}
function Wd() {
  var e8 = 0, t = 0.5, n = 1, o = 1, i, a, r, s, l, c = ve, h, d = false, u;
  function f(g) {
    return isNaN(g = +g) ? u : (g = 0.5 + ((g = +h(g)) - a) * (o * g < o * a ? s : l), c(d ? Math.max(0, Math.min(1, g)) : g));
  }
  f.domain = function(g) {
    return arguments.length ? ([e8, t, n] = g, i = h(e8 = +e8), a = h(t = +t), r = h(n = +n), s = i === a ? 0 : 0.5 / (a - i), l = a === r ? 0 : 0.5 / (r - a), o = a < i ? -1 : 1, f) : [e8, t, n];
  }, f.clamp = function(g) {
    return arguments.length ? (d = !!g, f) : d;
  }, f.interpolator = function(g) {
    return arguments.length ? (c = g, f) : c;
  };
  function p(g) {
    return function(y) {
      var v, _, b;
      return arguments.length ? ([v, _, b] = y, c = eu(g, [v, _, b]), f) : [c(0), c(0.5), c(1)];
    };
  }
  return f.range = p(fn), f.rangeRound = p(bo), f.unknown = function(g) {
    return arguments.length ? (u = g, f) : u;
  }, function(g) {
    return h = g, i = g(e8), a = g(t), r = g(n), s = i === a ? 0 : 0.5 / (a - i), l = a === r ? 0 : 0.5 / (r - a), o = a < i ? -1 : 1, f;
  };
}
function nr() {
  var e8 = at(Wd()(ve));
  return e8.copy = function() {
    return er(e8, nr());
  }, Na.apply(e8, arguments);
}
const Li = { scaleLinear: $a, scalePow: To, scaleSqrt: Du, scaleLog: Fa, scaleSymlog: Va, scaleIdentity: Ua, scaleTime: Gd, scaleUtc: zd, scaleSequential: tr, scaleDiverging: nr, scaleQuantize: Ga, scaleQuantile: Ya, scaleThreshold: za, scaleOrdinal: xo, scaleBand: wo, scalePoint: tu };
var te;
(function(e8) {
  e8.X = "x", e8.Y = "y";
})(te || (te = {}));
var tt;
(function(e8) {
  e8.West = "west", e8.East = "east", e8.North = "north", e8.South = "south";
})(tt || (tt = {}));
const qd = Object.assign(Object.assign({}, Cs), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: true, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: tt.North, preventEmptyDomain: null, scaleByDomain: false });
class jd extends Ms {
  constructor(t, n, o) {
    var i, a;
    super(t), this._defaultConfig = qd, this.datamodel = new Ds(), this.config = this._defaultConfig, this._clipPathId = Rs(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = true, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
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
    t && (this.datamodel.data = t, s.forEach((c) => {
      c.setData(t);
    }), (o = l.crosshair) === null || o === void 0 || o.setData(t), (i = l.xAxis) === null || i === void 0 || i.setData(t), (a = l.yAxis) === null || a === void 0 || a.setData(t), (r = l.tooltip) === null || r === void 0 || r.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, true), t.xAxis && (this.config.xAxis.config.type = j.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = j.Y, this.element.appendChild(t.yAxis.element));
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
    for (const d of this.components) d.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", d.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", d.clippable ? `url(#${this._clipPathId})` : null), d.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const c = 2;
    this._clipPath.select("rect").attr("x", -c).attr("y", -c).attr("width", this.width + 2 * c).attr("height", this.height + 2 * c), (n = s.tooltip) === null || n === void 0 || n.update();
    const h = s.crosshair;
    if (h) {
      const d = this.components.filter((g) => !g.stacked).map((g) => g.config.y), u = this.components.filter((g) => g.stacked).map((g) => g.config.y), f = (o = this.components.find((g) => g.config.baseline)) === null || o === void 0 ? void 0 : o.config, p = f == null ? void 0 : f.baseline;
      h.accessors = { x: (i = this.components[0]) === null || i === void 0 ? void 0 : i.config.x, y: zo(d), yStacked: zo(u), baseline: p }, h.g.attr("transform", `translate(${l.left},${l.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), h.hide();
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
      var a, r, s, l, c, h, d, u;
      const [f, p] = Yc(Qc(o.map((C) => C.getDataExtent(i, n.scaleByDomain)))), g = i === te.Y ? n.yDomain : n.xDomain, y = i === te.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, v = i === te.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, _ = (r = (a = g == null ? void 0 : g[0]) !== null && a !== void 0 ? a : f) !== null && r !== void 0 ? r : 0, b = (l = (s = g == null ? void 0 : g[1]) !== null && s !== void 0 ? s : p) !== null && l !== void 0 ? l : 1, k = [ut(_, (c = y == null ? void 0 : y[0]) !== null && c !== void 0 ? c : Number.NEGATIVE_INFINITY, (h = y == null ? void 0 : y[1]) !== null && h !== void 0 ? h : Number.POSITIVE_INFINITY), ut(b, (d = v == null ? void 0 : v[0]) !== null && d !== void 0 ? d : Number.NEGATIVE_INFINITY, (u = v == null ? void 0 : v[1]) !== null && u !== void 0 ? u : Number.POSITIVE_INFINITY)];
      if (k[0] === k[1]) {
        const C = o.some((M) => {
          var A;
          return ((A = M.datamodel.data) === null || A === void 0 ? void 0 : A.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!C || i === te.Y)) && (k[1] = k[0] + 1);
      }
      t.forEach((C) => C.setScaleDomain(i, k));
    });
  }
  _updateScalesRange(...t) {
    var n, o, i, a, r, s;
    const { config: l } = this;
    if (!t) return;
    const c = l.yDirection === tt.South, h = [(n = l.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((o = l.padding.right) !== null && o !== void 0 ? o : 0)], d = [this.height - ((i = l.padding.bottom) !== null && i !== void 0 ? i : 0), (a = l.padding.top) !== null && a !== void 0 ? a : 0];
    c && d.reverse();
    for (const f of t) f.setSize(this.width, this.height, this.containerWidth, this.containerHeight), f.setScaleRange(te.X, (r = l.xRange) !== null && r !== void 0 ? r : h), f.setScaleRange(te.Y, (s = l.yRange) !== null && s !== void 0 ? s : d);
    const u = t.map((f) => f.bleed).reduce((f, p) => {
      for (const g of Object.keys(f)) {
        const y = g;
        f[y] < p[y] && (f[y] = p[y]);
      }
      return f;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const f of t) f.setScaleRange(te.X, [h[0] + u.left, h[1] - u.right]), f.setScaleRange(te.Y, c ? [d[0] + u.top, d[1] - u.bottom] : [d[0] - u.bottom, d[1] + u.top]);
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
        const c = l.getRequiredMargin();
        r.top < c.top && (r.top = c.top), r.bottom < c.bottom && (r.bottom = c.bottom), r.left < c.left && (r.left = c.left), r.right < c.right && (r.right = c.right);
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
const Ht = Object.assign(Object.assign({}, As), { x: void 0, y: void 0, id: (e8, t) => {
  var n;
  return (n = e8.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e8) => e8.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: false });
class Cn extends Es {
  constructor() {
    super(...arguments), this.datamodel = new Ps(), this.clippable = true, this.stacked = false, this._defaultConfig = Ht, this._xScale = Li.scaleLinear(), this._yScale = Li.scaleLinear();
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
        return Bn(i.data, o[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return Bn(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: o } = this, i = t ? ca(o.data, this.xScale.domain(), n.x) : o.data, a = Lt(n.y) ? n.y : [n.y];
    return Bn(i, ...a);
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
function Lo(e8) {
  return new or(e8);
}
function ir(e8) {
  return e8[0];
}
function ar(e8) {
  return e8[1];
}
function rr() {
  var e8 = ir, t = ar, n = we(true), o = null, i = Lo, a = null;
  function r(s) {
    var l, c = s.length, h, d = false, u;
    for (o == null && (a = i(u = ua())), l = 0; l <= c; ++l) !(l < c && n(h = s[l], l, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e8(h, l, s), +t(h, l, s));
    if (u) return a = null, u + "" || null;
  }
  return r.x = function(s) {
    return arguments.length ? (e8 = typeof s == "function" ? s : we(+s), r) : e8;
  }, r.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : we(+s), r) : t;
  }, r.defined = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : we(!!s), r) : n;
  }, r.curve = function(s) {
    return arguments.length ? (i = s, o != null && (a = i(o)), r) : i;
  }, r.context = function(s) {
    return arguments.length ? (s == null ? o = a = null : a = i(o = s), r) : o;
  }, r;
}
function Zd() {
  var e8 = ir, t = null, n = we(0), o = ar, i = we(true), a = null, r = Lo, s = null;
  function l(h) {
    var d, u, f, p = h.length, g, y = false, v, _ = new Array(p), b = new Array(p);
    for (a == null && (s = r(v = ua())), d = 0; d <= p; ++d) {
      if (!(d < p && i(g = h[d], d, h)) === y) if (y = !y) u = d, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), f = d - 1; f >= u; --f) s.point(_[f], b[f]);
        s.lineEnd(), s.areaEnd();
      }
      y && (_[d] = +e8(g, d, h), b[d] = +n(g, d, h), s.point(t ? +t(g, d, h) : _[d], o ? +o(g, d, h) : b[d]));
    }
    if (v) return s = null, v + "" || null;
  }
  function c() {
    return rr().defined(i).curve(r).context(a);
  }
  return l.x = function(h) {
    return arguments.length ? (e8 = typeof h == "function" ? h : we(+h), t = null, l) : e8;
  }, l.x0 = function(h) {
    return arguments.length ? (e8 = typeof h == "function" ? h : we(+h), l) : e8;
  }, l.x1 = function(h) {
    return arguments.length ? (t = h == null ? null : typeof h == "function" ? h : we(+h), l) : t;
  }, l.y = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : we(+h), o = null, l) : n;
  }, l.y0 = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : we(+h), l) : n;
  }, l.y1 = function(h) {
    return arguments.length ? (o = h == null ? null : typeof h == "function" ? h : we(+h), l) : o;
  }, l.lineX0 = l.lineY0 = function() {
    return c().x(e8).y(n);
  }, l.lineY1 = function() {
    return c().x(e8).y(o);
  }, l.lineX1 = function() {
    return c().x(t).y(n);
  }, l.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : we(!!h), l) : i;
  }, l.curve = function(h) {
    return arguments.length ? (r = h, a != null && (s = r(a)), l) : r;
  }, l.context = function(h) {
    return arguments.length ? (h == null ? a = s = null : s = r(a = h), l) : a;
  }, l;
}
function ze() {
}
function an(e8, t, n) {
  e8._context.bezierCurveTo((2 * e8._x0 + e8._x1) / 3, (2 * e8._y0 + e8._y1) / 3, (e8._x0 + 2 * e8._x1) / 3, (e8._y0 + 2 * e8._y1) / 3, (e8._x0 + 4 * e8._x1 + t) / 6, (e8._y0 + 4 * e8._y1 + n) / 6);
}
function Mn(e8) {
  this._context = e8;
}
Mn.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      an(this, this._x1, this._y1);
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
      an(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function Xd(e8) {
  return new Mn(e8);
}
function sr(e8) {
  this._context = e8;
}
sr.prototype = { areaStart: ze, areaEnd: ze, lineStart: function() {
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
      an(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function Qd(e8) {
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
      an(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
} };
function Jd(e8) {
  return new lr(e8);
}
function cr(e8, t) {
  this._basis = new Mn(e8), this._beta = t;
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
const eh = function e(t) {
  function n(o) {
    return t === 1 ? new Mn(o) : new cr(o, t);
  }
  return n.beta = function(o) {
    return e(+o);
  }, n;
}(0.85);
function rn(e8, t, n) {
  e8._context.bezierCurveTo(e8._x1 + e8._k * (e8._x2 - e8._x0), e8._y1 + e8._k * (e8._y2 - e8._y0), e8._x2 + e8._k * (e8._x1 - t), e8._y2 + e8._k * (e8._y1 - n), e8._x2, e8._y2);
}
function Bo(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Bo.prototype = { areaStart: function() {
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
      rn(this, this._x1, this._y1);
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
      rn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const th = function e2(t) {
  function n(o) {
    return new Bo(o, t);
  }
  return n.tension = function(o) {
    return e2(+o);
  }, n;
}(0);
function Io(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
Io.prototype = { areaStart: ze, areaEnd: ze, lineStart: function() {
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
      rn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const nh = function e3(t) {
  function n(o) {
    return new Io(o, t);
  }
  return n.tension = function(o) {
    return e3(+o);
  }, n;
}(0);
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
      rn(this, e8, t);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const oh = function e4(t) {
  function n(o) {
    return new Oo(o, t);
  }
  return n.tension = function(o) {
    return e4(+o);
  }, n;
}(0);
function $o(e8, t, n) {
  var o = e8._x1, i = e8._y1, a = e8._x2, r = e8._y2;
  if (e8._l01_a > Ko) {
    var s = 2 * e8._l01_2a + 3 * e8._l01_a * e8._l12_a + e8._l12_2a, l = 3 * e8._l01_a * (e8._l01_a + e8._l12_a);
    o = (o * s - e8._x0 * e8._l12_2a + e8._x2 * e8._l01_2a) / l, i = (i * s - e8._y0 * e8._l12_2a + e8._y2 * e8._l01_2a) / l;
  }
  if (e8._l23_a > Ko) {
    var c = 2 * e8._l23_2a + 3 * e8._l23_a * e8._l12_a + e8._l12_2a, h = 3 * e8._l23_a * (e8._l23_a + e8._l12_a);
    a = (a * c + e8._x1 * e8._l23_2a - t * e8._l12_2a) / h, r = (r * c + e8._y1 * e8._l23_2a - n * e8._l12_2a) / h;
  }
  e8._context.bezierCurveTo(o, i, a, r, e8._x2, e8._y2);
}
function ur(e8, t) {
  this._context = e8, this._alpha = t;
}
ur.prototype = { areaStart: function() {
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
      $o(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const ih = function e5(t) {
  function n(o) {
    return t ? new ur(o, t) : new Bo(o, 0);
  }
  return n.alpha = function(o) {
    return e5(+o);
  }, n;
}(0.5);
function dr(e8, t) {
  this._context = e8, this._alpha = t;
}
dr.prototype = { areaStart: ze, areaEnd: ze, lineStart: function() {
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
      $o(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const ah = function e6(t) {
  function n(o) {
    return t ? new dr(o, t) : new Io(o, 0);
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
      $o(this, e8, t);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
} };
const rh = function e7(t) {
  function n(o) {
    return t ? new hr(o, t) : new Oo(o, 0);
  }
  return n.alpha = function(o) {
    return e7(+o);
  }, n;
}(0.5);
function fr(e8) {
  this._context = e8;
}
fr.prototype = { areaStart: ze, areaEnd: ze, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e8, t) {
  e8 = +e8, t = +t, this._point ? this._context.lineTo(e8, t) : (this._point = 1, this._context.moveTo(e8, t));
} };
function sh(e8) {
  return new fr(e8);
}
function Bi(e8) {
  return e8 < 0 ? -1 : 1;
}
function Ii(e8, t, n) {
  var o = e8._x1 - e8._x0, i = t - e8._x1, a = (e8._y1 - e8._y0) / (o || i < 0 && -0), r = (n - e8._y1) / (i || o < 0 && -0), s = (a * i + r * o) / (o + i);
  return (Bi(a) + Bi(r)) * Math.min(Math.abs(a), Math.abs(r), 0.5 * Math.abs(s)) || 0;
}
function Oi(e8, t) {
  var n = e8._x1 - e8._x0;
  return n ? (3 * (e8._y1 - e8._y0) / n - t) / 2 : t;
}
function Vn(e8, t, n) {
  var o = e8._x0, i = e8._y0, a = e8._x1, r = e8._y1, s = (a - o) / 3;
  e8._context.bezierCurveTo(o + s, i + s * t, a - s, r - s * n, a, r);
}
function sn(e8) {
  this._context = e8;
}
sn.prototype = { areaStart: function() {
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
      Vn(this, this._t0, Oi(this, this._t0));
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
        this._point = 3, Vn(this, Oi(this, n = Ii(this, e8, t)), n);
        break;
      default:
        Vn(this, this._t0, n = Ii(this, e8, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t, this._t0 = n;
  }
} };
function pr(e8) {
  this._context = new mr(e8);
}
(pr.prototype = Object.create(sn.prototype)).point = function(e8, t) {
  sn.prototype.point.call(this, t, e8);
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
function lh(e8) {
  return new sn(e8);
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
  else for (var o = $i(e8), i = $i(t), a = 0, r = 1; r < n; ++a, ++r) this._context.bezierCurveTo(o[0][a], i[0][a], o[1][a], i[1][a], e8[r], t[r]);
  (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e8, t) {
  this._x.push(+e8), this._y.push(+t);
} };
function $i(e8) {
  var t, n = e8.length - 1, o, i = new Array(n), a = new Array(n), r = new Array(n);
  for (i[0] = 0, a[0] = 2, r[0] = e8[0] + 2 * e8[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, r[t] = 4 * e8[t] + 2 * e8[t + 1];
  for (i[n - 1] = 2, a[n - 1] = 7, r[n - 1] = 8 * e8[n - 1] + e8[n], t = 1; t < n; ++t) o = i[t] / a[t - 1], a[t] -= o, r[t] -= o * r[t - 1];
  for (i[n - 1] = r[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (r[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e8[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e8[t + 1] - i[t + 1];
  return [i, a];
}
function uh(e8) {
  return new gr(e8);
}
function Dn(e8, t) {
  this._context = e8, this._t = t;
}
Dn.prototype = { areaStart: function() {
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
function dh(e8) {
  return new Dn(e8, 0.5);
}
function hh(e8) {
  return new Dn(e8, 0);
}
function fh(e8) {
  return new Dn(e8, 1);
}
function Ui(e8, t) {
  var n = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e8);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e8, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ph(e8) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ui(Object(n), true).forEach(function(o) {
      mh(e8, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n)) : Ui(Object(n)).forEach(function(o) {
      Object.defineProperty(e8, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e8;
}
function Pt(e8) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pt = function(t) {
    return typeof t;
  } : Pt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(e8);
}
function mh(e8, t, n) {
  return t in e8 ? Object.defineProperty(e8, t, { value: n, enumerable: true, configurable: true, writable: true }) : e8[t] = n, e8;
}
function ln() {
  return ln = Object.assign || function(e8) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e8[o] = n[o]);
    }
    return e8;
  }, ln.apply(this, arguments);
}
function gh(e8, t) {
  if (e8) {
    if (typeof e8 == "string") return Hi(e8, t);
    var n = Object.prototype.toString.call(e8).slice(8, -1);
    if (n === "Object" && e8.constructor && (n = e8.constructor.name), n === "Map" || n === "Set") return Array.from(e8);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hi(e8, t);
  }
}
function Hi(e8, t) {
  (t == null || t > e8.length) && (t = e8.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e8[n];
  return o;
}
function vr(e8, t) {
  var n = typeof Symbol < "u" && e8[Symbol.iterator] || e8["@@iterator"];
  if (!n) {
    if (Array.isArray(e8) || (n = gh(e8)) || t) {
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
function vh(e8, t) {
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
function _h(e8) {
  var t = {};
  return e8.length === 4 && (t.x2 = e8[2][0], t.y2 = e8[2][1]), e8.length >= 3 && (t.x1 = e8[1][0], t.y1 = e8[1][1]), t.x = e8[e8.length - 1][0], t.y = e8[e8.length - 1][1], e8.length === 4 ? t.type = "C" : e8.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function yh(e8, t) {
  t = t || 2;
  for (var n = [], o = e8, i = 1 / t, a = 0; a < t - 1; a++) {
    var r = i / (1 - i * a), s = vh(o, r);
    n.push(s.left), o = s.right;
  }
  return n.push(o), n;
}
function bh(e8, t, n) {
  var o = [[e8.x, e8.y]];
  return t.x1 != null && o.push([t.x1, t.y1]), t.x2 != null && o.push([t.x2, t.y2]), o.push([t.x, t.y]), yh(o, n).map(_h);
}
var xh = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, ht = { M: ["x", "y"], L: ["x", "y"], H: ["x"], V: ["y"], C: ["x1", "y1", "x2", "y2", "x", "y"], S: ["x2", "y2", "x", "y"], Q: ["x1", "y1", "x", "y"], T: ["x", "y"], A: ["rx", "ry", "xAxisRotation", "largeArcFlag", "sweepFlag", "x", "y"], Z: [] };
Object.keys(ht).forEach(function(e8) {
  ht[e8.toLowerCase()] = ht[e8];
});
function Jn(e8, t) {
  for (var n = Array(e8), o = 0; o < e8; o++) n[o] = t;
  return n;
}
function wh(e8) {
  return "".concat(e8.type).concat(ht[e8.type].map(function(t) {
    return e8[t];
  }).join(","));
}
function Sh(e8, t) {
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
function kh(e8, t, n) {
  var o = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C") o = o.concat(bh(e8, t, n));
  else {
    var i = ln({}, e8);
    i.type === "M" && (i.type = "L"), o = o.concat(Jn(n - 1).map(function() {
      return i;
    })), o.push(t);
  }
  return o;
}
function Fi(e8, t, n) {
  var o = e8.length - 1, i = t.length - 1, a = o / i, r = Jn(i).reduce(function(l, c, h) {
    var d = Math.floor(a * h);
    if (n && d < e8.length - 1 && n(e8[d], e8[d + 1])) {
      var u = a * h % 1 < 0.5;
      l[d] && (u ? d > 0 ? d -= 1 : d < e8.length - 1 && (d += 1) : d < e8.length - 1 ? d += 1 : d > 0 && (d -= 1));
    }
    return l[d] = (l[d] || 0) + 1, l;
  }, []), s = r.reduce(function(l, c, h) {
    if (h === e8.length - 1) {
      var d = Jn(c, ln({}, e8[e8.length - 1]));
      return d[0].type === "M" && d.forEach(function(u) {
        u.type = "L";
      }), l.concat(d);
    }
    return l.concat(kh(e8[h], e8[h + 1], c));
  }, []);
  return s.unshift(e8[0]), s;
}
function Vi(e8) {
  for (var t = (e8 || "").match(xh) || [], n = [], o, i, a = 0; a < t.length; ++a) if (o = ht[t[a]], o) {
    i = { type: t[a] };
    for (var r = 0; r < o.length; ++r) i[o[r]] = +t[a + r + 1];
    a += o.length, n.push(i);
  }
  return n;
}
function Th(e8, t, n) {
  var o = e8 == null ? [] : e8.slice(), i = t == null ? [] : t.slice(), a = Pt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, r = a.excludeSegment, s = a.snapEndsToInput;
  if (!o.length && !i.length) return function() {
    return [];
  };
  var l = (o.length === 0 || o[o.length - 1].type === "Z") && (i.length === 0 || i[i.length - 1].type === "Z");
  o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), o.length ? i.length || i.push(o[0]) : o.push(i[0]);
  var c = Math.abs(i.length - o.length);
  c !== 0 && (i.length > o.length ? o = Fi(o, i, r) : i.length < o.length && (i = Fi(i, o, r))), o = o.map(function(d, u) {
    return Sh(d, i[u]);
  });
  var h = o.map(function(d) {
    return ph({}, d);
  });
  return l && (h.push({ type: "Z" }), o.push({ type: "Z" })), function(u) {
    if (u === 1 && s) return t ?? [];
    if (u === 0) return o;
    for (var f = 0; f < h.length; ++f) {
      var p = o[f], g = i[f], y = h[f], v = vr(ht[y.type]), _;
      try {
        for (v.s(); !(_ = v.n()).done; ) {
          var b = _.value;
          y[b] = (1 - u) * p[b] + u * g[b], (b === "largeArcFlag" || b === "sweepFlag") && (y[b] = Math.round(y[b]));
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
function _r(e8, t, n) {
  var o = Vi(e8), i = Vi(t), a = Pt(n) === "object" ? n : { excludeSegment: n, snapEndsToInput: true }, r = a.excludeSegment, s = a.snapEndsToInput;
  if (!o.length && !i.length) return function() {
    return "";
  };
  var l = Th(o, i, { excludeSegment: r, snapEndsToInput: s });
  return function(h) {
    if (h === 1 && s) return t ?? "";
    var d = l(h), u = "", f = vr(d), p;
    try {
      for (f.s(); !(p = f.n()).done; ) {
        var g = p.value;
        u += wh(g);
      }
    } catch (y) {
      f.e(y);
    } finally {
      f.f();
    }
    return u;
  };
}
var ee;
(function(e8) {
  e8.Basis = "basis", e8.BasisClosed = "basisClosed", e8.BasisOpen = "basisOpen", e8.Bundle = "bundle", e8.Cardinal = "cardinal", e8.CardinalClosed = "cardinalClosed", e8.CardinalOpen = "cardinalOpen", e8.CatmullRom = "catmullRom", e8.CatmullRomClosed = "catmullRomClosed", e8.CatmullRomOpen = "catmullRomOpen", e8.Linear = "linear", e8.LinearClosed = "linearClosed", e8.MonotoneX = "monotoneX", e8.MonotoneY = "monotoneY", e8.Natural = "natural", e8.Step = "step", e8.StepAfter = "stepAfter", e8.StepBefore = "stepBefore";
})(ee || (ee = {}));
const eo = { [ee.Basis]: Xd, [ee.BasisClosed]: Qd, [ee.BasisOpen]: Jd, [ee.Bundle]: eh, [ee.Cardinal]: th, [ee.CardinalClosed]: nh, [ee.CardinalOpen]: oh, [ee.CatmullRom]: ih, [ee.CatmullRomClosed]: ah, [ee.CatmullRomOpen]: rh, [ee.Linear]: Lo, [ee.LinearClosed]: sh, [ee.MonotoneX]: lh, [ee.MonotoneY]: ch, [ee.Natural]: uh, [ee.Step]: dh, [ee.StepAfter]: fh, [ee.StepBefore]: hh }, Ch = Object.assign(Object.assign({}, Ht), { curveType: ee.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: false, cursor: null, interpolateMissingData: false }), Mh = pn`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, Dh = ne`
  label: line-component;
`, Dt = ne`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, to = ne`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, no = ne`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, oo = ne`
  opacity: 0.2;
`, io = ne`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, Rh = Object.freeze(Object.defineProperty({ __proto__: null, dim: oo, globalStyles: Mh, interpolatedPath: io, line: Dt, linePath: to, lineSelectionHelper: no, root: Dh }, Symbol.toStringTag, { value: "Module" }));
class Rn extends Cn {
  constructor(t) {
    super(), this._defaultConfig = Ch, this.config = this._defaultConfig, this.curve = eo[ee.MonotoneX], this.events = { [Rn.selectors.line]: { mouseover: this._highlight.bind(this), mouseleave: this._resetHighlight.bind(this) } }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), i = (this.yScale.range()[0] > this.yScale.range()[1] ? tt.North : tt.South) === tt.South, a = t > 3, r = t >= 10;
    return { top: !r && (!i && n[1] === 0 || i && n[0] === 0) ? 0 : t / 2, bottom: !r && (!i && n[0] === 0 || i && n[1] === 0) ? 0 : t / 2, left: a ? t / 2 : 0, right: a ? t / 2 : 0 };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: o } } = this, i = et(t) ? t : n.duration;
    this.curve = eo[n.curveType], this.lineGen = rr().x((d) => d.x).y((d) => d.y).defined((d) => d.defined).curve(this.curve);
    const a = Lt(n.y) ? n.y : [n.y], r = o.map((d, u) => this.xScale(Ne(d, n.x, u))), s = a.map((d) => {
      const u = o.map((v, _) => {
        const b = Ne(v, d, _), k = (et(b) || b === null) && isFinite(b) ? b : n.fallbackValue, C = n.interpolateMissingData ? (et(b) || b === null) && isFinite(b) : isFinite(k);
        return { x: r[_], y: this.yScale(k ?? 0), defined: C, value: k };
      }), f = u.reduce((v, _) => _.defined || v, false);
      let p = false;
      const g = u.reduce((v, _, b) => {
        !_.defined && isFinite(n.fallbackValue) && v.push(Object.assign(Object.assign({}, _), { defined: true })), !_.defined && !p && (p = true);
        const k = b > 0 && !u[b - 1].defined || b < u.length - 1 && !u[b + 1].defined;
        return _.defined && k && (p || v.push(Object.assign(Object.assign({}, _), { defined: false })), v.push(_), p = false), v;
      }, []), y = f && u.some((v) => v.value !== null);
      return { values: u, defined: f, gaps: g, visible: y };
    }), l = this.g.selectAll(`.${Dt}`).data(s), c = l.enter().append("g").attr("class", Dt);
    c.append("path").attr("class", to).attr("stroke", (d, u) => Ie(o, n.color, u)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), c.append("path").attr("class", no).attr("d", this._emptyPath()), c.append("path").attr("class", io).attr("d", this._emptyPath()).style("opacity", 0);
    const h = c.merge(l);
    h.style("cursor", (d, u) => da(o, n.cursor, u)), h.each((d, u, f) => {
      var p;
      const g = At(f[u]), y = g.select(`.${to}`), v = g.select(`.${no}`), _ = g.select(`.${io}`), b = d.visible, k = Ns(o, n.lineDashArray, u), C = De(y, i).attr("stroke", Ie(o, n.color, u)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", b ? 1 : 0).style("stroke-dasharray", (p = k == null ? void 0 : k.join(" ")) !== null && p !== void 0 ? p : null), M = d.values.some((W) => !W.defined), A = this.lineGen(d.values);
      if (i && !M) {
        const W = y.attr("d") || this._emptyPath(), G = A || this._emptyPath();
        C.attrTween("d", () => _r(W, G));
      } else d.visible && C.attr("d", A);
      v.attr("d", A).attr("visibility", b ? null : "hidden"), M && n.interpolateMissingData ? De(_, i).attr("d", this.lineGen(d.gaps)).attr("stroke", Ie(o, n.color, u)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : _.transition().duration(i).style("opacity", 0);
    }), De(l.exit(), i).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${Dt}`).classed(oo, (o) => o !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${Dt}`).classed(oo, false);
  }
}
Rn.selectors = Rh;
function Ah(e8) {
  return e8;
}
var Kt = 1, Wt = 2, ao = 3, Rt = 4, Yi = 1e-6;
function Eh(e8) {
  return "translate(" + e8 + ",0)";
}
function Ph(e8) {
  return "translate(0," + e8 + ")";
}
function Nh(e8) {
  return (t) => +e8(t);
}
function Lh(e8, t) {
  return t = Math.max(0, e8.bandwidth() - t * 2) / 2, e8.round() && (t = Math.round(t)), (n) => +e8(n) + t;
}
function Bh() {
  return !this.__axis;
}
function An(e8, t) {
  var n = [], o = null, i = null, a = 6, r = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = e8 === Kt || e8 === Rt ? -1 : 1, h = e8 === Rt || e8 === Wt ? "x" : "y", d = e8 === Kt || e8 === ao ? Eh : Ph;
  function u(f) {
    var p = o ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), g = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Ah), y = Math.max(a, 0) + s, v = t.range(), _ = +v[0] + l, b = +v[v.length - 1] + l, k = (t.bandwidth ? Lh : Nh)(t.copy(), l), C = f.selection ? f.selection() : f, M = C.selectAll(".domain").data([null]), A = C.selectAll(".tick").data(p, t).order(), W = A.exit(), G = A.enter().append("g").attr("class", "tick"), Q = A.select("line"), B = A.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(G), Q = Q.merge(G.append("line").attr("stroke", "currentColor").attr(h + "2", c * a)), B = B.merge(G.append("text").attr("fill", "currentColor").attr(h, c * y).attr("dy", e8 === Kt ? "0em" : e8 === ao ? "0.71em" : "0.32em")), f !== C && (M = M.transition(f), A = A.transition(f), Q = Q.transition(f), B = B.transition(f), W = W.transition(f).attr("opacity", Yi).attr("transform", function(U) {
      return isFinite(U = k(U)) ? d(U + l) : this.getAttribute("transform");
    }), G.attr("opacity", Yi).attr("transform", function(U) {
      var L = this.parentNode.__axis;
      return d((L && isFinite(L = L(U)) ? L : k(U)) + l);
    })), W.remove(), M.attr("d", e8 === Rt || e8 === Wt ? r ? "M" + c * r + "," + _ + "H" + l + "V" + b + "H" + c * r : "M" + l + "," + _ + "V" + b : r ? "M" + _ + "," + c * r + "V" + l + "H" + b + "V" + c * r : "M" + _ + "," + l + "H" + b), A.attr("opacity", 1).attr("transform", function(U) {
      return d(k(U) + l);
    }), Q.attr(h + "2", c * a), B.attr(h, c * y).text(g), C.filter(Bh).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e8 === Wt ? "start" : e8 === Rt ? "end" : "middle"), C.each(function() {
      this.__axis = k;
    });
  }
  return u.scale = function(f) {
    return arguments.length ? (t = f, u) : t;
  }, u.ticks = function() {
    return n = Array.from(arguments), u;
  }, u.tickArguments = function(f) {
    return arguments.length ? (n = f == null ? [] : Array.from(f), u) : n.slice();
  }, u.tickValues = function(f) {
    return arguments.length ? (o = f == null ? null : Array.from(f), u) : o && o.slice();
  }, u.tickFormat = function(f) {
    return arguments.length ? (i = f, u) : i;
  }, u.tickSize = function(f) {
    return arguments.length ? (a = r = +f, u) : a;
  }, u.tickSizeInner = function(f) {
    return arguments.length ? (a = +f, u) : a;
  }, u.tickSizeOuter = function(f) {
    return arguments.length ? (r = +f, u) : r;
  }, u.tickPadding = function(f) {
    return arguments.length ? (s = +f, u) : s;
  }, u.offset = function(f) {
    return arguments.length ? (l = +f, u) : l;
  }, u;
}
function Gi(e8) {
  return An(Kt, e8);
}
function zi(e8) {
  return An(Wt, e8);
}
function Ki(e8) {
  return An(ao, e8);
}
function Wi(e8) {
  return An(Rt, e8);
}
const Ih = Object.assign(Object.assign({}, Ht), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: true, tickLine: true, domainLine: true, numTicks: void 0, minMaxTicksOnly: false, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: false, tickTextTrimType: Ls.Middle, tickTextFitMode: ha.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: true, tickPadding: 8, tickTextHideOverlapping: void 0 }), yr = ne`
  label: axis-component;
`, Oh = pn`
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
`, Uo = ne`
  label: hide-tick-line;
`, Ho = ne`
  label: hide-domain;
`, br = ne`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${Uo}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Ho}`} {
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
`, ro = ne`
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
`, $h = Object.freeze(Object.defineProperty({ __proto__: null, axis: br, globalStyles: Oh, grid: xr, hideDomain: Ho, hideTickLine: Uo, label: ro, root: yr, tick: wr, tickLabel: Sr, tickLabelHideable: kr }, Symbol.toStringTag, { value: "Module" }));
class Tr extends Cn {
  constructor(t) {
    super(), this._defaultConfig = Ih, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", xr);
  }
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === j.X ? z.Bottom : z.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: o } } = this;
    switch (n) {
      case j.X: {
        const a = this._axisSizeBBox.x + this._axisSizeBBox.width, r = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, s = a - this._width > 1 ? a - this._width : 0;
        switch (o) {
          case z.Top:
            return { top: t.height, left: r, right: s };
          case z.Bottom:
          default:
            return { bottom: t.height, left: r, right: s };
        }
      }
      case j.Y: {
        const i = t.height > this._height ? (t.height - this._height) / 2 : 0, a = i, r = i;
        switch (o) {
          case z.Right:
            return { right: t.width, top: a, bottom: r };
          case z.Left:
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
      case j.X:
        switch (o) {
          case z.Top:
            return { top: t.top, left: t.left };
          case z.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case j.Y:
        switch (o) {
          case z.Right:
            return { top: t.top, left: t.left + this._width };
          case z.Left:
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
      case j.X:
        switch (n) {
          case z.Top:
            return Gi(this.xScale).ticks(i).tickPadding(o);
          case z.Bottom:
          default:
            return Ki(this.xScale).ticks(i).tickPadding(o);
        }
      case j.Y:
        switch (n) {
          case z.Right:
            return zi(this.yScale).ticks(i).tickPadding(o);
          case z.Left:
          default:
            return Wi(this.yScale).ticks(i).tickPadding(o);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, o = this._getNumTicks();
    switch (t) {
      case j.X:
        switch (n) {
          case z.Top:
            return Gi(this.xScale).ticks(o * 2).tickSize(-this._height).tickSizeOuter(0);
          case z.Bottom:
          default:
            return Ki(this.xScale).ticks(o * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case j.Y:
        switch (n) {
          case z.Right:
            return zi(this.yScale).ticks(o * 2).tickSize(-this._width).tickSizeOuter(0);
          case z.Left:
          default:
            return Wi(this.yScale).ticks(o * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: o } = this, i = this._buildAxis(), a = this._getConfiguredTickValues() || i.scale().ticks(this._getNumTicks());
    i.tickValues(a), t.selectAll("*").interrupt(), De(t, n).call(i);
    const r = t.selectAll("g.tick");
    r.classed(wr, true).style("font-size", o.tickTextFontSize);
    const s = t.selectAll("g.tick > text").filter((l) => a.some((c) => Bs(l, c))).classed(Sr, true).classed(kr, !!o.tickTextHideOverlapping).style("fill", o.tickTextColor);
    if (s.nodes().forEach((l) => Is(l)), s.each((l, c, h) => {
      var d, u;
      let f = (u = (d = o.tickFormat) === null || d === void 0 ? void 0 : d.call(o, l, c, a)) !== null && u !== void 0 ? u : `${l}`;
      const p = h[c], g = o.tickTextWidth || (o.type === j.X ? this._containerWidth / (r.size() + 1) : this._containerWidth / 5), y = getComputedStyle(p), v = Number.parseFloat(y.fontSize), _ = y.fontFamily, b = { verticalAlign: o.type === j.X ? Wo.Top : Wo.Middle, width: g, textRotationAngle: o.tickTextAngle, separator: o.tickTextSeparator, wordBreak: o.tickTextForceWordBreak };
      if (o.tickTextFitMode === ha.Trim) {
        const C = At(p).text(f);
        Os(C, g, o.tickTextTrimType, true, v, 0.58), f = At(p).text();
      }
      $s(p, { text: f, fontFamily: _, fontSize: v }, b);
    }), t.classed(br, true).classed(Uo, !o.tickLine).classed(Ho, !o.domainLine), o.fullSize) {
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
      const c = s.getBoundingClientRect();
      for (let h = a + 1; h < r.length; h += 1) {
        if (a === h) continue;
        const d = r[h];
        if (d._visible) {
          const f = d.getBoundingClientRect();
          if (Us(c, f, -5)) {
            d._visible = false;
            break;
          }
        }
      }
    });
    t.each((o, i, a) => {
      const r = a[i];
      At(r).style("opacity", r._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n) return n;
    if (t === j.X) {
      const o = this.xScale.range(), i = o[1] - o[0];
      return Math.floor(i / 175);
    }
    if (t === j.Y) {
      const o = this.yScale.range(), i = Math.abs(o[0] - o[1]);
      return Math.pow(i, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === j.X ? this.xScale : this.yScale, o = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((i) => i >= o[0] && i <= o[1]) : t.minMaxTicksOnly || t.type === j.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? o : null;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case j.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case j.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: o, label: i, labelMargin: a, labelFontSize: r } = this.config;
    t.selectAll(`.${ro}`).remove();
    const s = this.getPosition(), { width: l, height: c } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), h = o === j.X ? this._width / 2 : Math.pow(-1, +(s === z.Left)) * l, d = o === j.X ? Math.pow(-1, +(s === z.Top)) * c : this._height / 2, u = o === j.X ? 0 : Math.pow(-1, +(s === z.Left)) * a, f = o === j.X ? Math.pow(-1, +(s === z.Top)) * a : 0, p = o === j.Y ? -90 : 0;
    t.append("text").attr("class", ro).text(i).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${h + u},${d + f}) rotate(${p})`).style("font-size", r).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case j.X:
        switch (n) {
          case z.Top:
            return 0;
          case z.Bottom:
          default:
            return 0.75;
        }
      case j.Y:
        switch (n) {
          case z.Right:
            return 0.75;
          case z.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: o, position: i } } = this, a = this.g.selectAll("g.tick > text"), r = this._getTickTextAnchor(n), s = t === j.X ? 0 : this._getYTickTextTranslate(n, i), l = o ? `translate(${s},0) rotate(${o})` : `translate(${s},0)`;
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
  _getYTickTextTranslate(t, n = z.Left) {
    const i = this._axisRawBBox.width - 9;
    switch (t) {
      case lt.Left:
        return n === z.Left ? i * -1 : 0;
      case lt.Right:
        return n === z.Left ? 0 : i;
      case lt.Center:
        return n === z.Left ? i * -0.5 : i * 0.5;
      default:
        return 0;
    }
  }
}
Tr.selectors = $h;
const Uh = Object.assign(Object.assign({}, Ht), { yStacked: void 0, baseline: null, duration: 100, tooltip: void 0, template: (e8, t) => "", hideWhenFarFromPointer: true, hideWhenFarFromPointerDistance: 100, snapToData: true, getCircles: void 0, color: void 0, strokeColor: void 0, strokeWidth: void 0 }), Hh = pn`
  :root {
    --vis-crosshair-line-stroke-color: #888;
    --vis-crosshair-line-stroke-width: 1px;
    --vis-crosshair-line-stroke-opacity: 1;
    --vis-crosshair-circle-stroke-color: #fff;
    --vis-crosshair-circle-stroke-width: 1px;
    --vis-crosshair-circle-stroke-opacity: 0.75;
  }
`, Fh = ne`
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
`, Vh = Object.freeze(Object.defineProperty({ __proto__: null, circle: Mr, globalStyles: Hh, line: Cr, root: Fh }, Symbol.toStringTag, { value: "Module" }));
class Dr extends Cn {
  constructor(t) {
    super(), this.clippable = true, this._defaultConfig = Uh, this.config = this._defaultConfig, this.x = 0, this.show = false, this._animFrameId = null, this._accessors = { x: void 0, y: void 0, yStacked: void 0, baseline: void 0 }, t && this.setConfig(t), this.g.style("opacity", this.show ? 1 : 0), this.line = this.g.append("line").attr("class", Cr);
  }
  set accessors(t) {
    this._accessors = t;
  }
  get accessors() {
    var t;
    const { config: n } = this, o = !!(n.x || n.y || n.yStacked), i = o ? n.x : this._accessors.x, a = o ? n.y : this._accessors.y, r = a ? Lt(a) ? a : [a] : void 0, s = o ? n.yStacked : this._accessors.yStacked, l = (t = n.baseline) !== null && t !== void 0 ? t : this._accessors.baseline;
    return { x: i, y: r, yStacked: s, baseline: l };
  }
  setContainer(t) {
    this.container = t, this.container.on("mousemove.crosshair", this._onMouseMove.bind(this)), this.container.on("mouseout.crosshair", this._onMouseOut.bind(this));
  }
  _render(t) {
    const { config: n } = this;
    if (n.snapToData && !this.datum) return;
    const o = et(t) ? t : n.duration;
    De(this.g, o).style("opacity", this.show ? 1 : 0), this.line.attr("y1", 0).attr("y1", this._height), De(this.line, o, ci).attr("x1", this.x).attr("x2", this.x);
    const i = this.getCircleData(), a = this.g.selectAll("circle").data(i, (s, l) => {
      var c;
      return (c = s.id) !== null && c !== void 0 ? c : l;
    }), r = a.enter().append("circle").attr("class", Mr).attr("r", 0).attr("cx", this.x).attr("cy", (s) => s.y).style("fill", (s) => s.color).style("stroke", (s) => s.strokeColor).style("stroke-width", (s) => s.strokeWidth);
    De(r.merge(a), o, ci).attr("cx", this.x).attr("cy", (s) => s.y).attr("r", 4).style("opacity", (s) => s.opacity).style("fill", (s) => s.color).style("stroke", (s) => s.strokeColor).style("stroke-width", (s) => s.strokeWidth), a.exit().remove();
  }
  hide() {
    this._onMouseOut();
  }
  _onMouseMove(t) {
    var n, o;
    const { config: i, datamodel: a, element: r } = this;
    !this.accessors.x && (!((n = a.data) === null || n === void 0) && n.length) && console.warn("Unovis | Crosshair: X accessor function has not been configured. Please check if it's present in the configuration object");
    const [s] = qo(t, r), l = this.xScale.range();
    if (i.snapToData) {
      !this.accessors.y && !this.accessors.yStacked && (!((o = a.data) === null || o === void 0) && o.length) && console.warn("Unovis | Crosshair: Y accessors have not been configured. Please check if they're present in the configuration object");
      const c = this.xScale, h = c.invert(s);
      if (this.datum = Hs(a.data, h, this.accessors.x), this.datumIndex = a.data.indexOf(this.datum), !this.datum) return;
      this.x = ut(Math.round(c(Ne(this.datum, this.accessors.x, this.datumIndex))), 0, this._width), this.show = this.x >= 0 && this.x <= this._width && (!i.hideWhenFarFromPointer || Math.abs(this.x - s) < i.hideWhenFarFromPointerDistance);
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
    const a = i.getContainer() || this.container.node(), [r, s] = i.isContainerBody() ? [t.clientX, t.clientY] : qo(t, a), l = o.template(this.datum, this.xScale.invert(this.x));
    if (i.config.followCursor = true, !i.config.horizontalPlacement || i.config.horizontalPlacement === z.Auto) {
      const c = i.isContainerBody() ? r - this.container.node().getBoundingClientRect().left : r;
      i.overrideHorizontalPlacement(c > this._containerWidth / 2 ? z.Left : z.Right);
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
    if (Fs(o.getCircles)) return o.getCircles(this.xScale.invert(this.x), i, this.yScale);
    if (o.snapToData && this.datum) {
      const a = (t = this.accessors.y) !== null && t !== void 0 ? t : [], r = (n = this.accessors.yStacked) !== null && n !== void 0 ? n : [], s = Ne(this.datum, this.accessors.baseline, this.datumIndex) || 0, l = Vs(this.datum, this.datumIndex, ...r).map((h, d, u) => ({ y: this.yScale(h + s), opacity: et(Ne(this.datum, r[d])) ? 1 : 0, color: Ie(this.datum, o.color, d), strokeColor: o.strokeColor ? Ie(this.datum, o.strokeColor, d) : void 0, strokeWidth: o.strokeWidth ? Ne(this.datum, o.strokeWidth, d) : void 0 })), c = a.map((h, d) => {
        const u = Ne(this.datum, h);
        return { y: this.yScale(u), opacity: et(u) ? 1 : 0, color: Ie(this.datum, o.color, l.length + d), strokeColor: o.strokeColor ? Ie(this.datum, o.strokeColor, d) : void 0, strokeWidth: o.strokeWidth ? Ne(this.datum, o.strokeWidth, d) : void 0 };
      });
      return l.concat(c);
    }
    return [];
  }
}
Dr.selectors = Vh;
const Yh = Object.assign(Object.assign({}, Ht), { color: void 0, curveType: ee.MonotoneX, baseline: () => 0, opacity: 1, cursor: null, minHeight1Px: false }), Rr = ne`
  label: area-component;
`, Gh = pn`
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

`, so = ne`
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
`, zh = Object.freeze(Object.defineProperty({ __proto__: null, area: so, globalStyles: Gh, root: Rr }, Symbol.toStringTag, { value: "Module" }));
class En extends Cn {
  constructor(t) {
    super(), this._defaultConfig = Yh, this.config = this._defaultConfig, this.stacked = true, this.events = { [En.selectors.area]: {} }, t && this.setConfig(t), this.stacked = Array.isArray(this.config.y);
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: o } } = this, i = et(t) ? t : n.duration, a = eo[n.curveType];
    this._areaGen = Zd().x((g) => g.x).y0((g) => g.y0).y1((g) => {
      const y = Math.abs(g.y1 - g.y0) < 1;
      return g.y1 - (y && n.minHeight1Px ? 1 : 0);
    }).curve(a);
    const r = Lt(n.y) ? n.y : [n.y], s = o.map((g, y) => this.xScale(Ne(g, n.x, y))), l = Ys(o, n.baseline, r, this._prevNegative);
    this._prevNegative = l.map((g) => !!g.isMostlyNegative);
    const c = l.map((g) => g.map((y, v) => ({ y0: this.yScale(y[0]), y1: this.yScale(y[1]), x: s[v] }))), h = c.length - 1, d = c.reverse(), u = this.g.selectAll(`.${so}`).data(d), f = u.enter().append("path").attr("class", so).attr("d", (g) => this._areaGen(g) || this._emptyPath()).style("opacity", 0).style("fill", (g, y) => Ie(o, n.color, h - y)), p = De(f.merge(u), i).style("opacity", (g, y) => g.some((_) => _.y0 - _.y1 !== 0) ? Ne(o, n.opacity, h - y) : 0).style("fill", (g, y) => Ie(o, n.color, h - y)).style("cursor", (g, y) => da(o, n.cursor, h - y));
    i ? p.attrTween("d", (y, v, _) => {
      const b = At(_[v]).attr("d"), k = this._areaGen(y) || this._emptyPath();
      return _r(b, k);
    }) : p.attr("d", (g) => this._areaGen(g) || this._emptyPath()), De(u.exit(), i).style("opacity", 0).remove();
  }
  getYDataExtent(t) {
    const { config: n, datamodel: o } = this, i = Lt(n.y) ? n.y : [n.y], a = t ? ca(o.data, this.xScale.domain(), n.x) : o.data;
    return Gs(a, n.baseline, ...i);
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.domain(), o = this.yScale((n[0] + n[1]) / 2), i = o;
    return this._areaGen([{ y0: o, y1: i, x: t[0] }, { y0: o, y1: i, x: t[1] }]);
  }
}
En.selectors = zh;
const Kh = $({ __name: "index", props: { components: {}, xScale: { type: [Object, Function] }, xDomain: {}, xDomainMinConstraint: {}, xDomainMaxConstraint: {}, xRange: {}, yScale: { type: [Object, Function] }, yDomain: {}, yDomainMinConstraint: {}, yDomainMaxConstraint: {}, yRange: {}, yDirection: {}, xAxis: {}, yAxis: {}, autoMargin: { type: Boolean }, tooltip: {}, crosshair: {}, preventEmptyDomain: { type: [Boolean, null] }, scaleByDomain: { type: Boolean }, annotations: {}, duration: {}, margin: {}, padding: {}, sizing: {}, width: {}, height: {}, svgDefs: {}, ariaLabel: {}, data: {} }, setup(e8, { expose: t }) {
  const n = e8, { data: o } = Ke(n), i = It(n), a = O(), r = ji({ components: [], annotations: void 0, crosshair: void 0, tooltip: void 0, xAxis: void 0, yAxis: void 0 }), s = O();
  return ae(o, () => {
    a.value && a.value.setData(o.value, true);
  }), qt(() => {
    var l;
    r.components.map((c) => c.config), (l = a.value) == null || l.updateContainer({ ...Ln(i.value), ...Ln(r) });
  }), re(() => {
    s.value && (a.value = new jd(s.value, { ...Ln(r) }, o.value));
  }), Ae(() => {
    var l;
    return (l = a.value) == null ? void 0 : l.destroy();
  }), xt(po, { data: o, update: (l) => r.components = [...r.components, l], destroy: () => {
    var l;
    return r.components = (l = r.components) == null ? void 0 : l.filter((c) => !c.isDestroyed());
  } }), xt(fa, { data: o, update: (l) => r[`${l.config.type}Axis`] = l, destroy: (l) => {
    r[`${l}Axis`] = void 0;
  } }), xt(pa, { data: o, update: (l) => r.crosshair = l, destroy: () => {
    r.crosshair = void 0;
  } }), xt(zs, { data: o, update: (l) => r.tooltip = l, destroy: () => {
    r.tooltip = void 0;
  } }), xt(Ks, { data: o, update: (l) => r.annotations = l, destroy: () => {
    r.annotations = void 0;
  } }), t({ component: a }), (l, c) => (T(), Y("div", { "data-vis-xy-container": "", ref_key: "elRef", ref: s, class: "unovis-xy-container" }, [K(l.$slots, "default")], 512));
} }), Wh = { "data-vis-component": "" }, qh = $({ __name: "index", props: { color: {}, curveType: {}, baseline: {}, opacity: {}, cursor: {}, minHeight1Px: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = dn(po), o = e8, i = P(() => n.data.value ?? o.data), a = It(o), r = O();
  return re(() => {
    Se(() => {
      var s;
      r.value = new En(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ae(a, (s, l) => {
    var c;
    mn(s, l) || (c = r.value) == null || c.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), Y("div", Wh));
} }), jh = { "data-vis-axis": "" }, Zh = $({ __name: "index", props: { position: {}, type: {}, fullSize: { type: Boolean }, label: {}, labelFontSize: {}, labelMargin: {}, labelColor: {}, gridLine: { type: Boolean }, tickLine: { type: Boolean }, domainLine: { type: Boolean }, minMaxTicksOnly: { type: Boolean }, minMaxTicksOnlyWhenWidthIsLess: {}, tickFormat: { type: Function }, tickValues: {}, numTicks: {}, tickTextFitMode: {}, tickTextWidth: {}, tickTextSeparator: {}, tickTextForceWordBreak: { type: Boolean }, tickTextTrimType: {}, tickTextFontSize: {}, tickTextAlign: {}, tickTextColor: {}, tickTextAngle: {}, tickTextHideOverlapping: { type: Boolean }, tickPadding: {}, x: {}, y: {}, id: { type: Function }, color: {}, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = dn(fa), o = e8, i = P(() => n.data.value ?? o.data), a = It(o), r = O();
  return re(() => {
    Se(() => {
      var s;
      r.value = new Tr(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy(o.type);
  }), ae(a, (s, l) => {
    var c;
    mn(s, l) || (c = r.value) == null || c.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), Y("div", jh));
} }), Xh = { "data-vis-crosshair": "" }, Qh = $({ __name: "index", props: { data: {} }, setup(e8, { expose: t }) {
  const n = dn(pa), o = e8, i = P(() => n.data.value ?? o.data), a = It(o), r = O();
  return re(() => {
    Se(() => {
      var s;
      r.value = new Dr(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ae(a, (s, l) => {
    var c;
    mn(s, l) || (c = r.value) == null || c.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), Y("div", Xh));
} }), Jh = { "data-vis-component": "" }, ef = $({ __name: "index", props: { color: {}, curveType: {}, lineWidth: {}, lineDashArray: {}, fallbackValue: {}, highlightOnHover: { type: Boolean }, cursor: {}, interpolateMissingData: { type: Boolean }, x: {}, y: {}, id: { type: Function }, xScale: { type: [Object, Function] }, yScale: { type: [Object, Function] }, excludeFromDomainCalculation: { type: Boolean }, duration: {}, events: {}, attributes: {}, data: {} }, setup(e8, { expose: t }) {
  const n = dn(po), o = e8, i = P(() => n.data.value ?? o.data), a = It(o), r = O();
  return re(() => {
    Se(() => {
      var s;
      r.value = new Rn(a.value), (s = r.value) == null || s.setData(i.value), n.update(r.value);
    });
  }), Ae(() => {
    var s;
    (s = r.value) == null || s.destroy(), n.destroy();
  }), ae(a, (s, l) => {
    var c;
    mn(s, l) || (c = r.value) == null || c.setConfig(a.value);
  }), ae(i, () => {
    var s;
    (s = r.value) == null || s.setData(i.value);
  }), t({ component: r }), (s, l) => (T(), Y("div", Jh));
} }), tf = $({ __name: "Line.client", props: { data: {} }, setup(e8) {
  const t = Ur(), n = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }), o = (s) => s[0], i = (s) => s[1], a = (s) => n.format(new Date(s));
  function r(s) {
    if (!t.default) return "";
    const l = { setup: () => () => {
      var _a2;
      return (_a2 = t.default) == null ? void 0 : _a2.call(t, { data: s });
    } }, c = document.createElement("div");
    return Hr(l).mount(c), c.innerHTML;
  }
  return (s, l) => (T(), I(m(Kh), { data: s.data, padding: { top: 128 } }, { default: R(() => [D(m(qh), { color: "url('assets/vertical-stripes.svg#vertical-stripes')", x: o, y: i }), D(m(ef), { x: o, y: i, color: "rgb(var(--nq-green))" }), D(m(Ws), { "vertical-shift": 1e3 }), D(m(Zh), { type: "x", "grid-line": false, "tick-format": a }), D(m(Qh), { "data-crosshair": "", color: "rgb(var(--nq-blue))", template: r })]), _: 1 }, 8, ["data"]));
} }), nf = Object.assign(We(tf, [["__scopeId", "data-v-2e4f043c"]]), { __name: "ChartLine" }), of = { flex: "~ align-center", "p-2": "", "rounded-full": "", "bg-neutral-200": "", "w-max": "", relative: "" }, af = ["id"], rf = ["value"], sf = $({ __name: "PillSelector", props: Fr({ options: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e8) {
  const t = Ji(e8, "modelValue"), n = as(), o = ea("labels"), i = O();
  return ae(() => t.value, async () => {
    var _a2, _b;
    await Se();
    const a = (_a2 = o.value) == null ? void 0 : _a2.find((r) => r.id === String(t.value));
    (_b = o.value) == null ? void 0 : _b.forEach((r) => r.dataset.state = a && r.isEqualNode(a) ? "active" : void 0), a && (i.value = { left: `${a.offsetLeft}px`, width: `${a.offsetWidth}px`, transition: n ? "left 300ms, width 200ms" : "none" });
  }, { immediate: true }), (a, r) => (T(), Y("div", of, [(T(true), Y(Ee, null, nt(a.options, (s, l) => (T(), Y("label", { id: String(s), ref_for: true, ref_key: "labels", ref: o, key: l, text: "12 neutral-800 data-active:neutral hocus:neutral-900", flex: "~ items-center", "lh-none": "", "px-8": "", "py-4": "", "rounded-full": "", "h-max": "", "cursor-pointer": "", "select-none": "", "transition-colors": "", relative: "", "z-2": "", "nq-label": "" }, [ta(w("input", { "onUpdate:modelValue": r[0] || (r[0] = (c) => t.value = c), type: "radio", value: s, "sr-only": "", onMousedown: r[1] || (r[1] = ot(() => {
  }, ["prevent"])) }, null, 40, rf), [[Vr, t.value]]), Ge(" " + le(s), 1)], 8, af))), 128)), w("div", { "rounded-full": "", "bg-neutral-0": "", "h-20": "", "top-2": "", absolute: "", "z-1": "", style: _t(i.value) }, null, 4)]));
} }), lf = Object.assign(We(sf, [["__scopeId", "data-v-d28e3a7f"]]), { __name: "PillSelector" }), cf = na(qs), uf = { "max-w": "none md:$nq-max-width", outline: "~ 1.5 neutral-400", stack: "", "mx-auto": "", "rounded-8": "", "bg-neutral-0": "", "size-full": "", "min-h-128": "", relative: "" }, df = { "self-start": "!", "justify-self-end": "!", "mr--32": "", "w-max": "", "top--25": "", relative: "", "z-20": "" }, hf = { style: { "background-image": "radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" }, text: "f-lg white", rounded: "6 br-0", "f-px": "16/20", "f-pr": "28/20", "lh-none": "", "ml-auto": "", "pl-20": "", "w-max": "", relative: "", "z-2": "", "f-py-xs": "" }, ff = $({ __name: "RibbonContainer", props: { label: {}, floatingStarts: { type: Boolean, default: true } }, setup(e8) {
  return (t, n) => {
    const o = cf;
    return T(), Y("div", uf, [K(t.$slots, "default"), w("div", df, [n[0] || (n[0] = w("div", { "aria-hidden": "", "w-44": "", "origin-bottom-right": "", "translate-y--1": "", "rotate--45": "", "bottom-0": "", "right-0": "", absolute: "", "z-1": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), t.floatingStarts ? (T(), I(o, { key: 0, translate: "-50%", absolute: "", left: "50%", top: "30%", "z-1": "", color: "#e9b213" })) : ie("", true), w("div", hf, le(t.label), 1)])]);
  };
} }), pf = Object.assign(ff, { __name: "RibbonContainer" });
function Pn() {
  const { currency: e8 } = Ot(), t = jt({ key: P(() => ["nim-price", "now", e8.value]), query: async () => {
    var _a2;
    return (await Mc([Xt.NIM], [e8.value])).nim[(_a2 = e8.value) == null ? void 0 : _a2.toLowerCase()] || 0;
  }, staleTime: 60 * 1e3 }), n = jt({ key: P(() => ["nim-price", "1d-ago", e8.value]), query: async () => {
    const o = Date.now() - 864e5;
    return (await Dc(Xt.NIM, e8.value, [o])).get(o) || 0;
  }, staleTime: 1440 * 60 * 1e3 });
  return { price: t.data, priceState: t.state, priceLoading: t.isLoading, priceError: t.error, price1DayAgo: n.data, price1DayAgoState: n.state, price1DayAgoLoading: n.isLoading, price1DayAgoError: n.error, deltaPrice: P(() => !t.data.value || !n.data.value ? 0 : t.data.value - n.data.value) };
}
function Ar() {
  const e8 = jo(Date.now()), t = jo(Date.now() - 1440 * 60 * 1e3), n = P(() => `${Zo(e8)} NIM`), o = Zs / 1e5, i = P(() => `${Zo(o)} NIM`);
  return { currentSupply: e8, supplyYesterday: t, currentSupplyFormatted: n, maxSupply: o, maxSupplyFormatted: i };
}
function mf() {
  const { price: e8, price1DayAgo: t } = Pn(), { currencyInfo: n } = Ot(), { currentSupply: o, supplyYesterday: i } = Ar(), a = P(() => o * (e8.value || 0)), r = P(() => go(a.value, n.value)), s = P(() => {
    if (!e8.value || !t.value) return;
    const l = i * t.value;
    return (a.value - l) / l;
  });
  return { marketCap: a, marketCapFormatted: r, marketCapChange: s };
}
const gf = window.setInterval, vf = [fe.USD, fe.EUR, fe.GBP];
function _f(e8) {
  return vf.includes(e8);
}
const Er = new URL("https://min-api.cryptocompare.com/data/v2/histohour");
Er.search = new URLSearchParams({ fsym: "NIM", limit: "48", aggregate: "1", e: "CCCAGG" }).toString();
function yf() {
  const { currencyInfo: e8 } = Ot(), { price: t } = Pn(), n = P(() => {
    const u = e8.value.code;
    return _f(u) ? u : fe.USD;
  }), o = P(() => n.value !== e8.value.code), { data: i, state: a, error: r, isLoading: s, refetch: l } = jt({ key: P(() => ["trading_volume", n.value]), query: async () => {
    var _a2, _b;
    const u = Math.floor(Date.now() / 1e3), f = u - u % 3600, p = new URL(Er.toString());
    p.searchParams.set("to_ts", String(f)), p.searchParams.set("tsym", n.value);
    const g = await Ue(p.toString(), _o.CryptoCompare);
    if (g.Message.includes("CCCAGG market does not exist")) throw new Error(`CCCAGG market does not exist for this coin pair (${n.value}-NIM). Url: ${p.toString()}`);
    if (!g || !((_b = (_a2 = g.Data) == null ? void 0 : _a2.Data) == null ? void 0 : _b.length)) throw new Error("Failed to fetch hourly volume data");
    const v = [...g.Data.Data].reverse(), _ = v.slice(0, 24), b = v.slice(24, 48), k = _.reduce((G, Q) => G + Q.volumeto, 0), C = b.reduce((G, Q) => G + Q.volumeto, 0);
    let M = k;
    o.value && (M = k * (t.value || 0));
    const A = go(M, e8.value), W = C > 0 ? (k - C) / C : 0;
    return { volumeUsd: k, volumeFormatted: A, volumeChange: W };
  }, staleTime: 600 * 1e3, gcTime: 1800 * 1e3, placeholderData: (u) => u }), c = P(() => {
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
    const u = gf(() => {
      l();
    }, 3e5);
    Yr(() => {
      clearInterval(u);
    });
  }
  return { volumeUsd: c, volumeFormatted: h, volumeChange: d, volumeState: a, error: r, volumeIsLoading: s, refreshVolume: l };
}
const qi = 1440 * 60 * 1e3, Yn = { "1y": 7, "2y": 7, "5y": 7 }, bf = { "1y": 365, "2y": 730, "5y": 1825 };
function xf(e8) {
  const t = Yo("nim_price_period", "1y"), n = P(() => "nimiq_price_history_cache"), o = Yo(n.value, {}), i = P(() => `${Ft(e8)}`), a = Date.now(), r = P(() => a - bf[t.value] * qi), s = P(() => {
    const _ = o.value[i.value];
    return _ ? _[t.value] || [] : [];
  }), l = P(() => {
    var _a2, _b;
    const _ = s.value;
    if (!_ || _.length === 0) return true;
    const b = ((_a2 = _.at(-1)) == null ? void 0 : _a2[0]) || 0, k = Date.now() - qi;
    return b < k || (((_b = _.at(0)) == null ? void 0 : _b[0]) || 1 / 0) > r.value;
  }), c = P(() => {
    var _a2, _b;
    const _ = s.value;
    return !_.length || (((_a2 = _.at(0)) == null ? void 0 : _a2[0]) || 1 / 0) > r.value ? r.value : Math.max(((_b = _.at(-1)) == null ? void 0 : _b[0]) || 0, r.value);
  }), h = P(() => ["nimPriceHistory", Ft(e8), t.value, Yn[t.value], c.value, a, Date.now()]), d = O(), { data: u, refetch: f, error: p, state: g, isLoading: y } = jt({ key: h, query: async () => {
    var _a2;
    try {
      if (d.value = Date.now(), l.value) {
        const _ = await Qt(Xt.NIM, Ft(e8), c.value, a, _o.CryptoCompare, { interval: "days", aggregate: Yn[t.value] }), b = i.value, k = t.value, C = ((_a2 = o.value[b]) == null ? void 0 : _a2[k]) || [], M = wf(C, _);
        return o.value[b] || (o.value[b] = { "1y": [], "2y": [], "5y": [] }), o.value[b][k] = M, M;
      }
      return s.value;
    } catch (_) {
      return console.error("Error fetching price history:", _), s.value;
    }
  }, placeholderData: s.value, staleTime: 300 * 1e3 });
  re(() => {
    f();
  }), ae([() => Ft(e8), t], () => {
    f();
  });
  const v = Object.keys(Yn);
  return { data: u, error: p, state: g, refetch: f, period: t, periodOptions: v, lastUpdated: d, isLoading: y };
}
function wf(e8, t) {
  const n = /* @__PURE__ */ new Map();
  for (const [i, a] of e8) n.set(i, a);
  for (const [i, a] of t) n.set(i, a);
  const o = Array.from(n.entries());
  return o.sort((i, a) => i[0] - a[0]), o;
}
const Sf = na(nf), kf = { "data-allow-mismatch": "" }, Tf = ["data-state"], Cf = { flex: "~ gap-8 items-center" }, Mf = { text: "f-lg neutral", "font-semibold": "", "lh-none": "", "whitespace-nowrap": "" }, Df = { "font-semibold": "", "lh-none": "", "f-text-sm": "" }, Rf = { flex: "~ gap-6 items-center" }, Af = { text: "f-xs neutral-800", "font-normal": "", "lh-none": "", "w-max": "" }, Ef = { text: "blue f-3xl", "font-semibold": "", "lh-none": "" }, Pf = { key: 1, flex: "~ items-center", text: "f-2xs neutral-700", "font-semibold": "", "lh-none": "" }, Nf = { grid: "~ cols-1 md:cols-[max-content_1fr]", "size-full": "", relative: "", "of-hidden": "" }, Lf = { key: 0, flex: "~ items-center gap-8", text: " orange f-sm", "translate-x": "100%", "py-4": "", "rounded-br-6": "", "bg-white": "", "right--1": "", "top--1": "", absolute: "", "z-30": "", "f-px-xs": "", border: "b r neutral-400", "lg:w-max": "" }, Bf = { "max-md": "col-span-full sticky left-0 w-[calc(100vw-80px)] w-max", flex: "~ md:col gap-col-4 gap-row-8 max-md:justify-center", text: "f-2xs neutral-800", "lh-none": "", "md:mt-auto": "" }, If = { key: 1 }, Of = { group: "", relative: "", "f-pb-xs": "" }, $f = { "right-32": "", "top-32": "", absolute: "", "z-20": "" }, Uf = { flex: "~ items-center justify-center gap-8", "f-mt-md": "", text: "center f-sm" }, Hf = $({ __name: "PriceChart", props: mo(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { currency: t, currencyInfo: n } = Ot(), { marketCapChange: o, marketCapFormatted: i } = mf(), { currentSupplyFormatted: a, maxSupplyFormatted: r } = Ar(), { volumeChange: s, volumeFormatted: l, error: c, volumeIsLoading: h } = yf(), { data: d, lastUpdated: u, period: f, periodOptions: p, isLoading: g } = xf(t), { deltaPrice: y, price1DayAgoLoading: v, priceLoading: _, price: b } = Pn(), k = P(() => g.value || _.value || v.value || h.value), C = O(), { width: M } = rs(C), [A, W] = Go(), [G, Q] = Go(), B = O("bottom");
  qt(() => {
    if (!d.value || d.value.length < 2) {
      B.value = "bottom";
      return;
    }
    const L = Math.max(5, Math.floor(d.value.length / 4)), F = d.value.slice(-L).map(([, Be]) => Be), [J, ke] = [Math.min(...F), Math.max(...F) * 1.5], Ce = F.reduce((Be, Ye) => Be + Ye, 0) / F.length || 0, de = J + (ke - J) / 2;
    B.value = Ce >= de ? "bottom" : "top";
  });
  const U = P(() => !g.value && !b.value ? "Unable to load price data" : c.value ? c.value : null);
  return (L, F) => {
    const J = lo, ke = ks, Te = es, Ce = Sf, de = lf, Be = Ea, Ye = pf, je = Qi, bt = un;
    return T(), Y("div", kf, [D(m(A), null, { default: R(({ metricValue: he, metricChange: ye, label: Me, tooltipInfo: E }) => [w("div", { flex: "~ col gap-8", relative: "", "data-state": he === "0" ? "inactive" : "active", "z-1": "", "reka-inactive:animate-pulse": "" }, [F[2] || (F[2] = w("div", { outline: "~ 1.5 neutral-200 offset--1.5", "rounded-6": "", "bg-neutral-100": "", "h-full": "", "w-full": "", "inset--12": "", absolute: "", "z--1": "", "reka-active:hidden": "", w: "[calc(100%+24px)]" }, null, -1)), w("div", Cf, [w("span", Mf, le(he), 1), ye ? (T(), Y("div", { key: 0, class: ge(ye < 0 ? "text-red" : "text-green"), flex: "~ gap-2 items-center" }, [w("div", { class: ge({ "rotate-180": ye < 0 }), "aria-hidden": "", "size-7": "", "i-nimiq:triangle-up": "" }, null, 2), w("span", Df, le(("formatPercentage" in L ? L.formatPercentage : m(Xo))(ye)), 1)], 2)) : ie("", true)]), w("div", Rf, [w("p", Af, le(Me), 1), E ? (T(), I(ke, { key: 0 }, { default: R(() => [D(J, { wrapper: "div", field: E }, null, 8, ["field"])]), _: 2 }, 1024)) : ie("", true)])], 8, Tf)]), _: 1 }), D(m(G), null, { default: R(({ data: [he, ye], deltaPriceOneDay: Me }) => [w("div", { flex: "~ col gap-8", f: "$side $side-min-20 $side-max-24", "bg-neutral-0": "", relative: "", "f-py-xs": "", class: ge({ "top-21 mx-20": !Me }) }, [F[3] || (F[3] = w("div", { "inset-y-0": "", absolute: "", left: "[calc(var(--f-side)*-1)]", w: "$f-side", style: { "background-image": "linear-gradient(to right in oklab, transparent, rgba(var(--nq-neutral-0) / 1))" } }, null, -1)), F[4] || (F[4] = w("div", { right: "[calc(var(--f-side)*-1)]", w: "$f-side", style: { "background-image": "linear-gradient(to right in oklab, rgba(var(--nq-neutral-0) / 1), transparent)" }, "inset-y-0": "", absolute: "", "f-w-md": "" }, null, -1)), w("p", Ef, le(("formatFiat" in L ? L.formatFiat : m(go))(ye, m(n))), 1), Me ? (T(), Y("div", Pf, [w("div", { "mr-4": "", "size-8": "", "i-nimiq:triangle-up": "", class: ge({ "rotate-180": Me < 0 }) }, null, 2), w("span", null, le(("formatDecimal" in L ? L.formatDecimal : m(js))(Math.abs(Me))) + " (" + le(("formatPercentage" in L ? L.formatPercentage : m(Xo))(Me / ye)) + ")", 1)])) : (T(), I(Te, { key: 0, datetime: he, year: "numeric", month: "long", day: "numeric", text: "f-2xs right neutral-700", "lh-none": "", "nq-label": "" }, null, 8, ["datetime"]))], 2)]), _: 1 }), D(Ye, { label: L.slice.primary.nimPriceChartLabel, shadow: "", "z-3": "", "md:min-h-480": "", "outline-color": "white/20" }, { default: R(() => {
      var _a2;
      return [w("div", Nf, [w("aside", { ref_key: "asideRef", ref: C, "md:border": "r-1 solid neutral-400", grid: "~ cols-[repeat(4,1fr)] md:cols-1 gap-col-20 gap-row-24", "w-full": "", relative: "", "f-p-md": "", "max-md:row-start-2": "", "max-md:of-x-auto": "" }, [D(Gr, { "enter-active-class": "transition duration-200 ease-out", "enter-from-class": "op-0", "enter-to-class": "op-100", "leave-active-class": "transition duration-200 ease-out", "leave-from-class": "op-100", "leave-to-class": "op-0" }, { default: R(() => [m(k) || m(U) ? (T(), Y("div", Lf, [w("div", { "scale-90": "", class: ge(m(k) ? "i-nimiq:spinner" : "i-nimiq:alert") }, null, 2), w("p", null, le(m(k) ? "Loading..." : m(U)), 1)])) : ie("", true)]), _: 1 }), D(m(W), { "metric-value": m(i), "metric-change": m(o), label: L.slice.primary.marketCapLabel, "tooltip-info": L.slice.primary.marketCapInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), D(m(W), { "metric-value": m(l), "metric-change": m(s), label: L.slice.primary.volume24HLabel, "tooltip-info": L.slice.primary.volume24HInfo }, null, 8, ["metric-value", "metric-change", "label", "tooltip-info"]), D(m(W), { "metric-value": m(a), label: L.slice.primary.totalSupplyLabel, "tooltip-info": L.slice.primary.totalSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), D(m(W), { "metric-value": m(r), label: L.slice.primary.maxSupplyLabel, "tooltip-info": L.slice.primary.maxSupplyInfo }, null, 8, ["metric-value", "label", "tooltip-info"]), ta(w("div", Bf, [F[5] || (F[5] = w("span", null, "Last updated:", -1)), m(u) ? (T(), I(Te, { key: 0, datetime: m(u), year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }, null, 8, ["datetime"])) : (T(), Y("span", If, "Loading..."))], 512), [[zr, m(u)]])], 512), w("div", Of, [(T(), I(Ce, { key: m(M), data: m(d) || [], leader: "", "rounded-8": "", "h-full": "" }, { default: R(({ data: [he, ye] }) => [D(m(Q), { data: [he, ye] }, null, 8, ["data"])]), _: 1 }, 8, ["data"])), w("div", $f, [D(m(Q), { "transition-opacity": "", "leader-hocus:invisible": "", data: ((_a2 = m(d)) == null ? void 0 : _a2.at(-1)) || [0, 0], "delta-price-one-day": m(y) }, null, 8, ["data", "delta-price-one-day"])]), w("div", { "data-allow-mismatch": "", class: ge(m(B) === "top" ? "top-128" : "bottom-64"), flex: "~ items-center gap-8", absolute: "", "z-20": "", "f-right-md": "" }, [D(de, { modelValue: m(f), "onUpdate:modelValue": F[0] || (F[0] = (he) => Je(f) ? f.value = he : null), options: m(p), "self-end": "", "justify-self-end": "", ring: "white 3" }, null, 8, ["modelValue", "options"]), D(Be, { modelValue: m(t), "onUpdate:modelValue": F[1] || (F[1] = (he) => Je(t) ? t.value = he : null), bg: "darkblue hocus:neutral-200", transition: "[background-color]", "text-14": "", "font-normal": "", "px-2": "", "rounded-full": "", "h-full": "", "nq-label": "", text: "white hocus:neutral", ring: "white 3", border: "~ 1.5 neutral-200" }, { trigger: R(({ selectedCurrency: he }) => [Ge(le(he.toLocaleUpperCase()), 1)]), _: 1 }, 8, ["modelValue"])], 2)])])];
    }), _: 1 }, 8, ["label"]), w("p", Uf, [Ge(le(L.slice.primary.poweredByLabel) + " ", 1), D(bt, { field: L.slice.primary.poweredByLink }, { default: R(() => [D(je, { op: "80 hocus:100", field: L.slice.primary.poweredByLogo, "w-full": "", "transition-opacity": "", "f-h-sm": "" }, null, 8, ["field"])]), _: 1 }, 8, ["field"])])]);
  };
} }), Ff = Object.assign(Hf, { __name: "PriceChart" }), Vf = {};
function Yf(e8, t) {
  return T(), Y(Ee, null, [t[0] || (t[0] = w("div", { "max-w-none": "", "inset-0": "", absolute: "", "z-2": "", "of-hidden": "" }, [w("div", { "inset-0": "", absolute: "", class: "bg-gradient" }), w("div", { "i-custom:buy-and-sell-bg": "", "h-auto": "", w: "140vw md:110vw", "aspect-1.2620087336": "", bottom: "64 md:-256", left: "-64 md:0", absolute: "" })], -1)), w("div", Z({ "z-3": "" }, e8.$attrs), [K(e8.$slots, "default", {}, void 0, true)], 16)], 64);
}
const Gf = Object.assign(We(Vf, [["render", Yf], ["__scopeId", "data-v-dc91b41f"]]), { __name: "BgBuyAndSell" });
function zf() {
  const { price: e8 } = Pn(), t = O(1), n = O(), o = O("loading"), i = P({ get: () => n.value, set: (l) => {
    n.value = l, o.value = "fiat", e8.value && (t.value = l / e8.value);
  } }), a = P({ get: () => t.value, set: (l) => {
    o.value = "crypto", t.value = l, n.value = l * (e8.value || 0);
  } });
  Xs(async () => {
    await Qs(e8).toMatch((l) => l !== void 0), i.value = e8.value;
  });
  const r = P(() => o.value === "crypto" || o.value === "loading" ? i.value : "fiat"), s = P(() => o.value === "fiat" || o.value === "loading" ? a.value : "crypto");
  return { cryptoAmount: a, fiatAmount: i, lastEdited: o, fiatKey: r, cryptoKey: s };
}
const Kf = { "px-0": "", "bg-neutral-0": "", relative: "", "of-x-clip": "", "data-slice-type": "buy-and-sell-hero" }, Wf = { class: "group", "w-full": "", relative: "", flex: "~ items-center gap-12" }, qf = { text: "neutral-600 group-hover:blue/50 hocus:!neutral-800 group-focus-within:blue!", "right-4": "", "top-auto": "", absolute: "", "z-40": "" }, jf = { class: "group", "w-full": "", relative: "" }, Zf = $({ __name: "BuyAndSell", props: mo(), setup(e8) {
  if (e8.slice.variation !== "buyAndSell") throw new Error('Invalid slice variation. Expected "buyAndSell".');
  const { fiatAmount: t, cryptoAmount: n, fiatKey: o, cryptoKey: i } = zf(), { currency: a } = Ot();
  return (r, s) => {
    const l = oa, c = Zr, h = Ea, d = Ff, u = Gf;
    return T(), Y("section", Kf, [D(u, { "w-full": "" }, { default: R(() => [D(l, { headline: r.slice.primary.headline, subline: r.slice.primary.subline, px: "$px" }, null, 8, ["headline", "subline"]), w("form", { grid: "~ cols-1 md:cols-[1fr_max-content_1fr] items-center  gap-x-24", "max-md:px": "$px", "mx-auto": "", "mt-40": "", "h-max": "", "max-w-560": "", "w-full": "", onSubmit: s[3] || (s[3] = ot(() => {
    }, ["prevent"])) }, [w("div", Wf, [(T(), I(c, { key: m(o), modelValue: m(t), "onUpdate:modelValue": s[0] || (s[0] = (f) => Je(t) ? t.value = f : null), rounded: "b-0 md:2", required: "", "pr-64": "", "f-text-2xl": "", "max-md:translate-y--1.5": "", "group-focus-within:z-10": "" }, null, 8, ["modelValue"])), w("div", qf, [D(h, { modelValue: m(a), "onUpdate:modelValue": s[1] || (s[1] = (f) => Je(a) ? a.value = f : null) }, null, 8, ["modelValue"])]), s[4] || (s[4] = w("div", { style: { "background-image": "linear-gradient(to right in oklch, transparent, var(--colors-neutral-0))" }, "w-32": "", "pointer-events-none": "", "inset-y-0": "", "right-64": "", absolute: "" }, null, -1))]), s[7] || (s[7] = w("p", { "text-32": "", "h-max": "", "max-md:hidden": "" }, " = ", -1)), w("div", jf, [(T(), I(c, { key: m(i), modelValue: m(n), "onUpdate:modelValue": s[2] || (s[2] = (f) => Je(n) ? n.value = f : null), rounded: "t-0 md:2", required: "", "pr-54": "", "f-text-2xl": "", "group-focus-within:z-10": "" }, null, 8, ["modelValue"])), s[5] || (s[5] = w("div", { style: { "background-image": "linear-gradient(to right in oklch, transparent, var(--colors-neutral-0))" }, "w-32": "", "pointer-events-none": "", "inset-y-0": "", "right-54": "", absolute: "" }, null, -1)), s[6] || (s[6] = w("div", { text: "neutral-600 group-hover:blue/50 group-focus-within:blue!", "transition-colors": "", "right-12": "", "top-17": "", absolute: "", "nq-label": "", "f-text": "12/16" }, " NIM ", -1))])], 32), D(d, Z(r.$props, { px: "16 md:$px", "nq-wide": "", "mt-96": "", "max-md:w": "[calc(100%+64px)]" }), null, 16)]), _: 1 })]);
  };
} }), Xf = Object.assign(Zf, { __name: "HeroBuyAndSell" }), Qf = { "px-0": "", "pb-0": "", "bg-darkerblue": "", "of-x-clip": "", "f-pt-3xl": "" }, Jf = { "bg-neutral-100": "", "max-w-none": "", "w-full": "", "z-1": "" }, ep = { key: 0, flex: "~ gap-8 items-center", "text-white": "", "f-mt-sm": "" }, tp = { stack: "", "rounded-full": "", "size-40": "", ring: "1.5 white/40" }, np = { stack: "", "rounded-full": "", "size-40": "", ring: "1.5 white/40" }, op = { key: 2, "f-mt-sm": "" }, ip = { text: "f-xs white/50", "nq-label": "" }, ap = { flex: "~ gap-8 items-center", "text-white": "", "f-mt-2xs": "" }, rp = $({ __name: "OasisWorld", props: { items: {}, label: {} }, async setup(e8) {
  let t, n;
  const { data: o } = ([t, n] = Kr(() => tl()), t = await t, n(), t), i = ea("scroller"), a = P(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.querySelector("ul");
  }), { x: r } = ss(a), { width: s } = ls(a), l = P(() => {
    if (!s.value || !a.value) return 0;
    const u = a.value.scrollWidth, f = s.value - u, p = Math.min(100, Math.max(0, -r.value / f * 100));
    return Math.round(p) / 100;
  }), c = { Europe: "bg-green", "Central America": "bg-blue", World: "bg-orange" }, h = { Europe: ["i-nimiq:logos-euro-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-usd-outline-mono", "i-nimiq:logos-colones-outline-mono"], World: [] }, d = { Europe: ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x--1.5"], "Central America": ["i-nimiq:logos-nimiq-hexagon-outline-mono", "i-nimiq:logos-bitcoin-outline-mono translate-x-0.5"], World: [] };
  return (u, f) => {
    const p = lo, g = un, y = Js;
    return T(), Y("section", Qf, [w("div", { class: ge(["world-container", { first: m(l) < 0.33, second: m(l) >= 0.33 && m(l) < 0.66, third: m(l) >= 0.66 }]), style: _t(`--progress: ${m(l)}`), "max-w-none": "", "w-full": "", "aspect-2": "", relative: "" }, f[0] || (f[0] = [w("div", { "left-0": "", "top-0": "", absolute: "" }, [w("div", { rounded: "100%", class: "oval", stack: "", "bg-neutral-100": "" }, [w("div", { "i-oasis-regions:europe": "" }), w("div", { "i-oasis-regions:central-america": "" }), w("div", { "i-oasis-regions:rest-of-the-world": "" })])], -1)]), 6), w("div", Jf, [w("div", { ref_key: "scroller", ref: a, "mx-auto": "", "max-w-480": "", "w-full": "", relative: "" }, [D(y, { items: u.items, style: { "--px": "32px", "--pb": "64px" } }, { default: R(({ item: { content: v, kind: _, link: b } }) => [w("div", { class: ge(c[_]), "rounded-8": "", "max-w-480": "", "w-full": "", "f-p-lg": "", "md:w-416": "" }, [D(p, { wrapper: "div", field: v, class: "dark", "nq-prose-compact": "", "text-white": "" }, null, 8, ["field"]), _ !== "World" ? (T(), Y("div", ep, [(T(true), Y(Ee, null, nt(h[_], (k, C) => (T(), Y("div", { key: C, flex: "~ gap-8" }, [w("div", tp, [w("div", { class: ge(k), "size-24": "" }, null, 2)])]))), 128)), f[1] || (f[1] = w("div", { "mx-12": "", "op-50": "", "f-text-2xl": "", "i-nimiq:exchange": "" }, null, -1)), (T(true), Y(Ee, null, nt(d[_], (k, C) => (T(), Y("div", { key: C, flex: "~ gap-8" }, [w("div", np, [w("div", { class: ge(k), "size-24": "" }, null, 2)])]))), 128))])) : ie("", true), ("hasLink" in u ? u.hasLink : m(el))(b) ? (T(), I(g, { key: 1, field: b, "internal-component": "a", external: "", "f-mt-md": "", "nq-arrow": "", "nq-pill-lg": "", "nq-pill-white": "" }, null, 8, ["field"])) : ie("", true), _ !== "Europe" ? (T(), Y("div", op, [w("h4", ip, le(u.label), 1), w("div", ap, [D(g, { field: m(o).x.link, "internal-component": "a", bg: "white/20 hocus:white/40", external: "", stack: "", "rounded-full": "", "size-40": "", "transition-colors": "" }, { default: R(() => f[2] || (f[2] = [w("div", { text: "white/80 f-xl", "transition-colors": "", "i-nimiq:logos-twitter-mono": "" }, null, -1)])), _: 2, __: [2] }, 1032, ["field"]), D(g, { field: m(o).telegram.link, "internal-component": "a", bg: "white/20 hocus:white/40", external: "", stack: "", "rounded-full": "", "size-40": "", "transition-colors": "" }, { default: R(() => f[3] || (f[3] = [w("div", { text: "white/80 f-lg hocus:white", "translate-x--1": "", "translate-y-1": "", "transition-colors": "", "i-nimiq:logos-telegram-mono": "" }, null, -1)])), _: 2, __: [3] }, 1032, ["field"])])])) : ie("", true)], 2)]), _: 1 }, 8, ["items"])], 512)])]);
  };
} }), sp = Object.assign(We(rp, [["__scopeId", "data-v-791caad3"]]), { __name: "HeroOasisWorld" }), Fp = $({ __name: "index", props: mo(), setup(e8) {
  return (t, n) => {
    const o = Pr, i = jl, a = hc, r = ts, s = yc, l = Xf, c = sp;
    return T(), Y(Ee, null, [t.slice.variation === "default-slice" ? (T(), I(o, Z({ key: 0 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ie("", true), t.slice.variation === "twoColumn" ? (T(), I(i, Z({ key: 1 }, t.slice, { "data-slice-type": t.slice.slice_type }), null, 16, ["data-slice-type"])) : ie("", true), t.slice.variation === "home2024" ? (T(), I(a, { key: 2, headline: t.slice.primary.headline, "sub-headline-template": t.slice.primary.subheadline, cta: t.slice.primary.cta, "cta-label": t.slice.primary.cta_label, "data-slice-type": t.slice.slice_type }, null, 8, ["headline", "sub-headline-template", "cta", "cta-label", "data-slice-type"])) : ie("", true), t.slice.variation === "leftAligned" ? (T(), I(r, { key: 3, headline: t.slice.primary.headline, subline: t.slice.primary.subline }, null, 8, ["headline", "subline"])) : ie("", true), t.slice.variation === "staking" ? (T(), I(s, { key: 4, headline: t.slice.primary.headline, cta: t.slice.primary.cta }, null, 8, ["headline", "cta"])) : ie("", true), t.slice.variation === "buyAndSell" ? (T(), I(l, cn(Z({ key: 5 }, t.$props)), null, 16)) : ie("", true), t.slice.variation === "oasis" ? (T(), I(c, { key: 6, items: t.slice.primary.items, label: t.slice.primary.beTheFirstToKnowLabel }, null, 8, ["items", "label"])) : ie("", true)], 64);
  };
} });
export {
  Fp as default
};
