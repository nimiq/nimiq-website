import { a as Fe, c as ye, u as Se, b as Ne, d as Ke, _ as We } from "./CqKwot8s.js";
import { _ as qe } from "./iXO873XU.js";
import { _ as Ue, m as ze } from "./Po1_02wN.js";
import { i as je } from "./CCkBGt8y.js";
import { aP as Ye, d as V, B as E, ae as Te, b as R, o as T, w as b, e as L, m as W, T as $, u as t, $ as fe, Z as be, i as O, a2 as se, f as te, c as N, F as me, r as Ee, V as X, E as j, N as G, ac as Xe, a as C, U as K, h as Ge, aT as Pe, aS as Ze, a1 as Je, bj as Qe, ai as Z, a6 as et, aU as tt, ad as ot, bJ as _e, a7 as nt, W as oe, X as ne, a9 as at, ab as lt, a3 as Be, aX as st, Y as it, al as rt, aG as ut, g as ae, t as Ie, av as dt, aK as ct, aI as we, b2 as xe } from "./C95QRNzc.js";
import { c as pt, u as ft } from "./DEpc-rVb.js";
import { g as mt } from "./CpsPJSKh.js";
import { a as vt } from "./CoMN0Xhs.js";
import { a as gt, b as ht, u as yt, _ as bt } from "./UtPS5osl.js";
import { _ as _t, u as J } from "./D_ZwI0Z3.js";
import { u as wt } from "./FrdfJexk.js";
import { i as Ce } from "./CHIgUVhi.js";
import { u as xt } from "./DCDih-ug.js";
import "./4PIkP2wK.js";
import "./CVc7iRBp.js";
import "./BPgVFFXt.js";
const Ct = [" ", "Enter", "ArrowUp", "ArrowDown"], St = [" ", "Enter"], A = 10;
function le(n, s, e) {
  return n === void 0 ? false : Array.isArray(n) ? n.some((f) => pe(f, s, e)) : pe(n, s, e);
}
function pe(n, s, e) {
  return n === void 0 || s === void 0 ? false : typeof n == "string" ? n === s : typeof e == "function" ? e(n, s) : typeof e == "string" ? (n == null ? void 0 : n[e]) === (s == null ? void 0 : s[e]) : Ye(n, s);
}
function Tt(n) {
  return n == null || n === "" || Array.isArray(n) && n.length === 0;
}
const Et = V({ __name: "BubbleSelect", props: { autocomplete: {}, autofocus: { type: Boolean }, disabled: { type: Boolean }, form: {}, multiple: { type: Boolean }, name: {}, required: { type: Boolean }, size: {}, value: {} }, setup(n) {
  const s = n, e = E();
  return Te(() => s.value, (f, o) => {
    const l = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(l, "value").set;
    if (f !== o && r && e.value) {
      const d = new Event("change", { bubbles: true });
      r.call(e.value, f), e.value.dispatchEvent(d);
    }
  }), (f, o) => (T(), R(t(_t), { "as-child": "" }, { default: b(() => [L("select", W({ ref_key: "selectElement", ref: e }, s), [$(f.$slots, "default")], 16)]), _: 3 }));
} }), Pt = { key: 0, value: "" }, [Y, ke] = se("SelectRoot"), Bt = V({ inheritAttrs: false, __name: "SelectRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, defaultValue: {}, modelValue: { default: void 0 }, by: {}, dir: {}, multiple: { type: Boolean }, autocomplete: {}, disabled: { type: Boolean }, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "update:open"], setup(n, { emit: s }) {
  const e = n, f = s, { required: o, disabled: l, multiple: v, dir: r } = fe(e), d = be(e, "modelValue", f, { defaultValue: e.defaultValue ?? (v.value ? [] : void 0), passive: e.modelValue === void 0, deep: true }), c = be(e, "open", f, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), m = E(), g = E(), _ = E({ x: 0, y: 0 }), h = O(() => {
    var _a;
    return v.value && Array.isArray(d.value) ? ((_a = d.value) == null ? void 0 : _a.length) === 0 : Ce(d.value);
  });
  J({ isProvider: true });
  const u = wt(r), P = Fe(m), B = E(/* @__PURE__ */ new Set()), D = O(() => Array.from(B.value).map((i) => i.value).join(";"));
  function k(i) {
    if (v.value) {
      const a = Array.isArray(d.value) ? [...d.value] : [], w = a.findIndex((p) => pe(p, i, e.by));
      w === -1 ? a.push(i) : a.splice(w, 1), d.value = [...a];
    } else d.value = i;
  }
  return ke({ triggerElement: m, onTriggerChange: (i) => {
    m.value = i;
  }, valueElement: g, onValueElementChange: (i) => {
    g.value = i;
  }, contentId: "", modelValue: d, onValueChange: k, by: e.by, open: c, multiple: v, required: o, onOpenChange: (i) => {
    c.value = i;
  }, dir: u, triggerPointerDownPosRef: _, disabled: l, isEmptyModelValue: h, optionsSet: B, onOptionAdd: (i) => B.value.add(i), onOptionRemove: (i) => B.value.delete(i) }), (i, a) => (T(), R(t(gt), null, { default: b(() => [$(i.$slots, "default", { modelValue: t(d), open: t(c) }), t(P) ? (T(), R(Et, { key: D.value, "aria-hidden": "true", tabindex: "-1", multiple: t(v), required: t(o), name: i.name, autocomplete: i.autocomplete, disabled: t(l), value: t(d) }, { default: b(() => [t(Ce)(t(d)) ? (T(), N("option", Pt)) : te("", true), (T(true), N(me, null, Ee(Array.from(B.value), (w) => (T(), N("option", W({ key: w.value ?? "", ref_for: true }, w), null, 16))), 128))]), _: 1 }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : te("", true)]), _: 3 }));
} }), [It, kt] = se("SelectItemAlignedPosition"), $t = V({ inheritAttrs: false, __name: "SelectItemAlignedPosition", props: { asChild: { type: Boolean }, as: {} }, emits: ["placed"], setup(n, { emit: s }) {
  const e = n, f = s, { getItems: o } = J(), l = Y(), v = ie(), r = E(false), d = E(true), c = E(), { forwardRef: m, currentElement: g } = X(), { viewport: _, selectedItem: h, selectedItemText: u, focusSelectedItem: P } = v;
  function B() {
    if (l.triggerElement.value && l.valueElement.value && c.value && g.value && (_ == null ? void 0 : _.value) && (h == null ? void 0 : h.value) && (u == null ? void 0 : u.value)) {
      const i = l.triggerElement.value.getBoundingClientRect(), a = g.value.getBoundingClientRect(), w = l.valueElement.value.getBoundingClientRect(), p = u.value.getBoundingClientRect();
      if (l.dir.value !== "rtl") {
        const M = p.left - a.left, F = w.left - M, U = i.left - F, z = i.width + U, ue = Math.max(z, a.width), de = window.innerWidth - A, ce = ye(F, A, Math.max(A, de - ue));
        c.value.style.minWidth = `${z}px`, c.value.style.left = `${ce}px`;
      } else {
        const M = a.right - p.right, F = window.innerWidth - w.right - M, U = window.innerWidth - i.right - F, z = i.width + U, ue = Math.max(z, a.width), de = window.innerWidth - A, ce = ye(F, A, Math.max(A, de - ue));
        c.value.style.minWidth = `${z}px`, c.value.style.right = `${ce}px`;
      }
      const y = o().map((M) => M.ref), x = window.innerHeight - A * 2, I = _.value.scrollHeight, S = window.getComputedStyle(g.value), q = Number.parseInt(S.borderTopWidth, 10), H = Number.parseInt(S.paddingTop, 10), ve = Number.parseInt(S.borderBottomWidth, 10), Re = Number.parseInt(S.paddingBottom, 10), ge = q + H + I + Re + ve, De = Math.min(h.value.offsetHeight * 5, ge), he = window.getComputedStyle(_.value), Ae = Number.parseInt(he.paddingTop, 10), Oe = Number.parseInt(he.paddingBottom, 10), Q = i.top + i.height / 2 - A, Me = x - Q, re = h.value.offsetHeight / 2, Le = h.value.offsetTop + re, ee = q + H + Le, He = ge - ee;
      if (ee <= Q) {
        const M = h.value === y[y.length - 1];
        c.value.style.bottom = "0px";
        const F = g.value.clientHeight - _.value.offsetTop - _.value.offsetHeight, U = Math.max(Me, re + (M ? Oe : 0) + F + ve), z = ee + U;
        c.value.style.height = `${z}px`;
      } else {
        const M = h.value === y[0];
        c.value.style.top = "0px";
        const U = Math.max(Q, q + _.value.offsetTop + (M ? Ae : 0) + re) + He;
        c.value.style.height = `${U}px`, _.value.scrollTop = ee - Q + _.value.offsetTop;
      }
      c.value.style.margin = `${A}px 0`, c.value.style.minHeight = `${De}px`, c.value.style.maxHeight = `${x}px`, f("placed"), requestAnimationFrame(() => r.value = true);
    }
  }
  const D = E("");
  j(async () => {
    await G(), B(), g.value && (D.value = window.getComputedStyle(g.value).zIndex);
  });
  function k(i) {
    i && d.value === true && (B(), P == null ? void 0 : P(), d.value = false);
  }
  return Xe(l.triggerElement, () => {
    B();
  }), kt({ contentWrapper: c, shouldExpandOnScrollRef: r, onScrollButtonChange: k }), (i, a) => (T(), N("div", { ref_key: "contentWrapperElement", ref: c, style: Ge({ display: "flex", flexDirection: "column", position: "fixed", zIndex: D.value }) }, [C(t(K), W({ ref: t(m), style: { boxSizing: "border-box", maxHeight: "100%" } }, { ...i.$attrs, ...e }), { default: b(() => [$(i.$slots, "default")]), _: 3 }, 16)], 4));
} }), Vt = V({ __name: "SelectPopperPosition", props: { side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: { default: A }, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const e = Pe(n);
  return (f, o) => (T(), R(t(ht), W(t(e), { style: { boxSizing: "border-box", "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-select-content-available-width": "var(--reka-popper-available-width)", "--reka-select-content-available-height": "var(--reka-popper-available-height)", "--reka-select-trigger-width": "var(--reka-popper-anchor-width)", "--reka-select-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: b(() => [$(f.$slots, "default")]), _: 3 }, 16));
} }), Rt = { onViewportChange: () => {
}, itemTextRefCallback: () => {
}, itemRefCallback: () => {
} }, [ie, $e] = se("SelectContent"), Dt = V({ __name: "SelectContentImpl", props: { position: { default: "item-aligned" }, bodyLock: { type: Boolean, default: true }, side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, f = s, o = Y();
  yt(), xt(e.bodyLock);
  const { CollectionSlot: l, getItems: v } = J(), r = E();
  Ze(r);
  const { search: d, handleTypeaheadSearch: c } = Se(), m = E(), g = E(), _ = E(), h = E(false), u = E(false), P = E(false);
  function B() {
    g.value && r.value && _e([g.value, r.value]);
  }
  Te(h, () => {
    B();
  });
  const { onOpenChange: D, triggerPointerDownPosRef: k } = o;
  Je((p) => {
    if (!r.value) return;
    let y = { x: 0, y: 0 };
    const x = (S) => {
      var _a, _b;
      y = { x: Math.abs(Math.round(S.pageX) - (((_a = k.value) == null ? void 0 : _a.x) ?? 0)), y: Math.abs(Math.round(S.pageY) - (((_b = k.value) == null ? void 0 : _b.y) ?? 0)) };
    }, I = (S) => {
      var _a;
      S.pointerType !== "touch" && (y.x <= 10 && y.y <= 10 ? S.preventDefault() : ((_a = r.value) == null ? void 0 : _a.contains(S.target)) || D(false), document.removeEventListener("pointermove", x), k.value = null);
    };
    k.value !== null && (document.addEventListener("pointermove", x), document.addEventListener("pointerup", I, { capture: true, once: true })), p(() => {
      document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", I, { capture: true });
    });
  });
  function i(p) {
    const y = p.ctrlKey || p.altKey || p.metaKey;
    if (p.key === "Tab" && p.preventDefault(), !y && p.key.length === 1 && c(p.key, v()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(p.key)) {
      let I = [...v().map((S) => S.ref)];
      if (["ArrowUp", "End"].includes(p.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p.key)) {
        const S = p.target, q = I.indexOf(S);
        I = I.slice(q + 1);
      }
      setTimeout(() => _e(I)), p.preventDefault();
    }
  }
  const a = O(() => e.position === "popper" ? e : {}), w = Pe(a.value);
  return $e({ content: r, viewport: m, onViewportChange: (p) => {
    m.value = p;
  }, itemRefCallback: (p, y, x) => {
    const I = !u.value && !x, S = le(o.modelValue.value, y, o.by);
    if (o.multiple.value) {
      if (P.value) return;
      (S || I) && (g.value = p, S && (P.value = true));
    } else (S || I) && (g.value = p);
    I && (u.value = true);
  }, selectedItem: g, selectedItemText: _, onItemLeave: () => {
    var _a;
    (_a = r.value) == null ? void 0 : _a.focus();
  }, itemTextRefCallback: (p, y, x) => {
    const I = !u.value && !x;
    (le(o.modelValue.value, y, o.by) || I) && (_.value = p);
  }, focusSelectedItem: B, position: e.position, isPositioned: h, searchRef: d }), (p, y) => (T(), R(t(l), null, { default: b(() => [C(t(Qe), { "as-child": "", onMountAutoFocus: y[6] || (y[6] = Z(() => {
  }, ["prevent"])), onUnmountAutoFocus: y[7] || (y[7] = (x) => {
    var _a;
    f("closeAutoFocus", x), !x.defaultPrevented && ((_a = t(o).triggerElement.value) == null ? void 0 : _a.focus({ preventScroll: true }), x.preventDefault());
  }) }, { default: b(() => [C(t(et), { "as-child": "", "disable-outside-pointer-events": "", onFocusOutside: y[2] || (y[2] = Z(() => {
  }, ["prevent"])), onDismiss: y[3] || (y[3] = (x) => t(o).onOpenChange(false)), onEscapeKeyDown: y[4] || (y[4] = (x) => f("escapeKeyDown", x)), onPointerDownOutside: y[5] || (y[5] = (x) => f("pointerDownOutside", x)) }, { default: b(() => [(T(), R(tt(p.position === "popper" ? Vt : $t), W({ ...p.$attrs, ...t(w) }, { id: t(o).contentId, ref: (x) => {
    r.value = t(ot)(x);
  }, role: "listbox", "data-state": t(o).open.value ? "open" : "closed", dir: t(o).dir.value, style: { display: "flex", flexDirection: "column", outline: "none" }, onContextmenu: y[0] || (y[0] = Z(() => {
  }, ["prevent"])), onPlaced: y[1] || (y[1] = (x) => h.value = true), onKeydown: i }), { default: b(() => [$(p.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "dir", "onKeydown"]))]), _: 3 })]), _: 3 })]), _: 3 }));
} }), At = V({ inheritAttrs: false, __name: "SelectProvider", props: { context: {} }, setup(n) {
  return ke(n.context), $e(Rt), (e, f) => $(e.$slots, "default");
} }), Ot = { key: 1 }, Mt = V({ inheritAttrs: false, __name: "SelectContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, o = nt(e, s), l = Y(), v = E();
  j(() => {
    v.value = new DocumentFragment();
  });
  const r = E(), d = O(() => e.forceMount || l.open.value);
  return (c, m) => {
    var _a;
    return d.value ? (T(), R(t(at), { key: 0, ref_key: "presenceRef", ref: r, present: true }, { default: b(() => [C(Dt, oe(ne({ ...t(o), ...c.$attrs })), { default: b(() => [$(c.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 512)) : !((_a = r.value) == null ? void 0 : _a.present) && v.value ? (T(), N("div", Ot, [(T(), R(lt, { to: v.value }, [C(At, { context: t(l) }, { default: b(() => [$(c.$slots, "default")]), _: 3 }, 8, ["context"])], 8, ["to"]))])) : te("", true);
  };
} }), [Ve, Lt] = se("SelectItem"), Ht = V({ __name: "SelectItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(n, { emit: s }) {
  const e = n, f = s, { disabled: o } = fe(e), l = Y(), v = ie(), { forwardRef: r, currentElement: d } = X(), { CollectionItem: c } = J(), m = O(() => {
    var _a;
    return le((_a = l.modelValue) == null ? void 0 : _a.value, e.value, l.by);
  }), g = E(false), _ = E(e.textValue ?? ""), h = Be(void 0, "reka-select-item-text"), u = "select.select";
  async function P(a) {
    if (a.defaultPrevented) return;
    const w = { originalEvent: a, value: e.value };
    st(u, B, w);
  }
  async function B(a) {
    await G(), f("select", a), !a.defaultPrevented && (o.value || (l.onValueChange(e.value), l.multiple.value || l.onOpenChange(false)));
  }
  async function D(a) {
    var _a, _b;
    await G(), !a.defaultPrevented && (o.value ? (_a = v.onItemLeave) == null ? void 0 : _a.call(v) : (_b = a.currentTarget) == null ? void 0 : _b.focus({ preventScroll: true }));
  }
  async function k(a) {
    var _a;
    await G(), !a.defaultPrevented && a.currentTarget === it() && ((_a = v.onItemLeave) == null ? void 0 : _a.call(v));
  }
  async function i(a) {
    var _a;
    await G(), !(a.defaultPrevented || ((_a = v.searchRef) == null ? void 0 : _a.value) !== "" && a.key === " ") && (St.includes(a.key) && P(a), a.key === " " && a.preventDefault());
  }
  if (e.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return j(() => {
    d.value && v.itemRefCallback(d.value, e.value, e.disabled);
  }), Lt({ value: e.value, disabled: o, textId: h, isSelected: m, onItemTextChange: (a) => {
    _.value = ((_.value || (a == null ? void 0 : a.textContent)) ?? "").trim();
  } }), (a, w) => (T(), R(t(c), { value: { textValue: _.value } }, { default: b(() => [C(t(K), { ref: t(r), role: "option", "aria-labelledby": t(h), "data-highlighted": g.value ? "" : void 0, "aria-selected": m.value, "data-state": m.value ? "checked" : "unchecked", "aria-disabled": t(o) || void 0, "data-disabled": t(o) ? "" : void 0, tabindex: t(o) ? void 0 : -1, as: a.as, "as-child": a.asChild, onFocus: w[0] || (w[0] = (p) => g.value = true), onBlur: w[1] || (w[1] = (p) => g.value = false), onPointerup: P, onPointerdown: w[2] || (w[2] = (p) => {
    p.currentTarget.focus({ preventScroll: true });
  }), onTouchend: w[3] || (w[3] = Z(() => {
  }, ["prevent", "stop"])), onPointermove: D, onPointerleave: k, onKeydown: i }, { default: b(() => [$(a.$slots, "default")]), _: 3 }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])]), _: 3 }, 8, ["value"]));
} }), Ft = V({ __name: "SelectItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = Ve();
  return (f, o) => t(e).isSelected.value ? (T(), R(t(K), W({ key: 0, "aria-hidden": "true" }, s), { default: b(() => [$(f.$slots, "default")]), _: 3 }, 16)) : te("", true);
} }), Nt = V({ inheritAttrs: false, __name: "SelectItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = Y(), f = ie(), o = Ve(), { forwardRef: l, currentElement: v } = X(), r = O(() => {
    var _a, _b;
    return { value: o.value, disabled: o.disabled.value, textContent: ((_a = v.value) == null ? void 0 : _a.textContent) ?? ((_b = o.value) == null ? void 0 : _b.toString()) ?? "" };
  });
  return j(() => {
    v.value && (o.onItemTextChange(v.value), f.itemTextRefCallback(v.value, o.value, o.disabled.value), e.onOptionAdd(r.value));
  }), rt(() => {
    e.onOptionRemove(r.value);
  }), (d, c) => (T(), R(t(K), W({ id: t(o).textId, ref: t(l) }, { ...s, ...d.$attrs }), { default: b(() => [$(d.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Kt = V({ __name: "SelectPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(n) {
  const s = n;
  return (e, f) => (T(), R(t(ut), oe(ne(s)), { default: b(() => [$(e.$slots, "default")]), _: 3 }, 16));
} }), Wt = V({ __name: "SelectTrigger", props: { disabled: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const s = n, e = Y(), { forwardRef: f, currentElement: o } = X(), l = O(() => {
    var _a;
    return ((_a = e.disabled) == null ? void 0 : _a.value) || s.disabled;
  });
  e.contentId || (e.contentId = Be(void 0, "reka-select-content")), j(() => {
    e.onTriggerChange(o.value);
  });
  const { getItems: v } = J(), { search: r, handleTypeaheadSearch: d, resetTypeahead: c } = Se();
  function m() {
    l.value || (e.onOpenChange(true), c());
  }
  function g(_) {
    m(), e.triggerPointerDownPosRef.value = { x: Math.round(_.pageX), y: Math.round(_.pageY) };
  }
  return (_, h) => (T(), R(t(bt), { "as-child": "", reference: _.reference }, { default: b(() => {
    var _a, _b, _c, _d;
    return [C(t(K), { ref: t(f), role: "combobox", type: _.as === "button" ? "button" : void 0, "aria-controls": t(e).contentId, "aria-expanded": t(e).open.value || false, "aria-required": (_a = t(e).required) == null ? void 0 : _a.value, "aria-autocomplete": "none", disabled: l.value, dir: (_b = t(e)) == null ? void 0 : _b.dir.value, "data-state": ((_c = t(e)) == null ? void 0 : _c.open.value) ? "open" : "closed", "data-disabled": l.value ? "" : void 0, "data-placeholder": t(Tt)((_d = t(e).modelValue) == null ? void 0 : _d.value) ? "" : void 0, "as-child": _.asChild, as: _.as, onClick: h[0] || (h[0] = (u) => {
      var _a2;
      (_a2 = u == null ? void 0 : u.currentTarget) == null ? void 0 : _a2.focus();
    }), onPointerdown: h[1] || (h[1] = (u) => {
      if (u.pointerType === "touch") return u.preventDefault();
      const P = u.target;
      P.hasPointerCapture(u.pointerId) && P.releasePointerCapture(u.pointerId), u.button === 0 && u.ctrlKey === false && (g(u), u.preventDefault());
    }), onPointerup: h[2] || (h[2] = Z((u) => {
      u.pointerType === "touch" && g(u);
    }, ["prevent"])), onKeydown: h[3] || (h[3] = (u) => {
      const P = t(r) !== "";
      !(u.ctrlKey || u.altKey || u.metaKey) && u.key.length === 1 && P && u.key === " " || (t(d)(u.key, t(v)()), t(Ct).includes(u.key) && (m(), u.preventDefault()));
    }) }, { default: b(() => [$(_.$slots, "default")]), _: 3 }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])];
  }), _: 3 }, 8, ["reference"]));
} }), qt = V({ __name: "SelectValue", props: { placeholder: { default: "" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, { forwardRef: e, currentElement: f } = X(), o = Y();
  j(() => {
    o.valueElement = f;
  });
  const l = O(() => {
    var _a;
    let r = [];
    const d = Array.from(o.optionsSet.value), c = (m) => d.find((g) => le(m, g.value, o.by));
    return Array.isArray(o.modelValue.value) ? r = o.modelValue.value.map((m) => {
      var _a2;
      return ((_a2 = c(m)) == null ? void 0 : _a2.textContent) ?? "";
    }) : r = [((_a = c(o.modelValue.value)) == null ? void 0 : _a.textContent) ?? ""], r.filter(Boolean);
  }), v = O(() => l.value.length ? l.value.join(", ") : s.placeholder);
  return (r, d) => (T(), R(t(K), { ref: t(e), as: r.as, "as-child": r.asChild, style: { pointerEvents: "none" }, "data-placeholder": l.value.length ? void 0 : s.placeholder }, { default: b(() => [$(r.$slots, "default", { selectedLabel: l.value, modelValue: t(o).modelValue.value }, () => [ae(Ie(v.value), 1)])]), _: 3 }, 8, ["as", "as-child", "data-placeholder"]));
} }), Ut = V({ __name: "SelectViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const s = n, { nonce: e } = fe(s), f = Ne(e), o = ie(), l = o.position === "item-aligned" ? It() : void 0, { forwardRef: v, currentElement: r } = X();
  j(() => {
    o == null ? void 0 : o.onViewportChange(r.value);
  });
  const d = E(0);
  function c(m) {
    const g = m.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: h } = l ?? {};
    if ((_ == null ? void 0 : _.value) && (h == null ? void 0 : h.value)) {
      const u = Math.abs(d.value - g.scrollTop);
      if (u > 0) {
        const P = window.innerHeight - A * 2, B = Number.parseFloat(h.value.style.minHeight), D = Number.parseFloat(h.value.style.height), k = Math.max(B, D);
        if (k < P) {
          const i = k + u, a = Math.min(P, i), w = i - a;
          h.value.style.height = `${a}px`, h.value.style.bottom === "0px" && (g.scrollTop = w > 0 ? w : 0, h.value.style.justifyContent = "flex-end");
        }
      }
    }
    d.value = g.scrollTop;
  }
  return (m, g) => (T(), N(me, null, [C(t(K), W({ ref: t(v), "data-reka-select-viewport": "", role: "presentation" }, { ...m.$attrs, ...s }, { style: { position: "relative", flex: 1, overflow: "hidden auto" }, onScroll: c }), { default: b(() => [$(m.$slots, "default")]), _: 3 }, 16), C(t(K), { as: "style", nonce: t(f) }, { default: b(() => g[0] || (g[0] = [ae(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), zt = { flex: "~ gap-x-32 gap-y-20 wrap items-baseline" }, jt = { "nq-label": "", text: "f-xs neutral-700" }, Yt = { "bg-neutral-100": "" }, fo = V({ __name: "index", props: mt(), setup(n) {
  const s = n, e = { V1: "1.0", V2: "2.0" }, f = O(() => s.slice.items[1]), o = O(() => s.slice.items[0]), l = vt("version", e.V2), { define: v, reuse: r } = pt(), d = dt("articleEl");
  return ft(d, () => {
    ze(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), (c, m) => {
    const g = qt, _ = Wt, h = Nt, u = Ft, P = Ht, B = Ut, D = Mt, k = Kt, i = Bt, a = We, w = Ke, p = qe, y = Ue;
    return T(), N("div", null, [C(t(v), null, { default: b(({ headline: x, subline: I, content: S, date: q }) => [C(w, { headline: x, subline: I, "bg-neutral-100": "" }, { bottom: b(() => [L("div", zt, [C(i, { modelValue: t(l), "onUpdate:modelValue": m[0] || (m[0] = (H) => ct(l) ? l.value = H : null) }, { default: b(() => [C(_, { flex: "~ items-center gap-12", "outline-none": "", "px-16": "", "py-10": "", "rounded-full": "", "bg-gradient-green": "", "aria-label": "Select Litepaper Version" }, { default: b(() => [C(g, { text: "f-sm white", "nq-label": "" }), m[1] || (m[1] = L("div", { "i-nimiq:triangle-down": "", text: "10 white" }, null, -1))]), _: 1, __: [1] }), C(k, null, { default: b(() => [C(D, { "side-offset": 5, "rounded-18": "", "bg-white": "", "min-w-120": "", "w-full": "", shadow: "", "z-10": "", "motion-safe:animate": "fade-in duration-100ms ease-out" }, { default: b(() => [C(B, { "p-4": "" }, { default: b(() => [(T(), N(me, null, Ee(e, (H) => C(P, { key: H, value: H, flex: "~ gap-8 items-center", "outline-none": "", "px-16": "", "py-10": "", "rounded-14": "", "cursor-pointer": "", "transition-colors": "", "hocus:bg-neutral-200": "" }, { default: b(() => [C(h, { text: "14", "nq-label": "" }, { default: b(() => [ae(" Version " + Ie(H), 1)]), _: 2 }, 1024), C(u, { "as-childr": "" }, { default: b(() => m[2] || (m[2] = [L("div", { "i-nimiq:triangle-left": "", text: "10 neutral-800" }, null, -1)])), _: 1, __: [2] })]), _: 2 }, 1032, ["value"])), 64))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"]), L("span", jt, [m[3] || (m[3] = ae(" Updated ")), C(a, { datetime: ("getDate" in c ? c.getDate : t(je))(q), month: "long", day: "numeric", year: "numeric" }, null, 8, ["datetime"])])])]), _: 2 }, 1032, ["headline", "subline"]), L("section", Yt, [C(p, { wrapper: "article", "nq-prose": "", field: S, "text-20": "" }, null, 8, ["field"])])]), _: 1 }), L("div", { ref_key: "articleEl", ref: d }, [we(L("div", null, [C(t(r), oe(ne(t(o))), null, 16)], 512), [[xe, t(l) === e.V2]]), we(L("div", null, [C(t(r), oe(ne(t(f))), null, 16)], 512), [[xe, t(l) === e.V1]])], 512), C(y, { "f-mt-xl": "" })]);
  };
} });
export {
  fo as default
};
