import { a as Fe, c as ye, u as Se, b as Ke, d as Ne, _ as We } from "./5k-pAZBM.js";
import { _ as qe } from "./CiDt83jx.js";
import { _ as Ue, m as ze } from "./BMU6p9dT.js";
import { i as je } from "./DGIQ2ECZ.js";
import { bn as Ye, d as V, v as E, x as Te, e as R, o as T, f as b, k as H, s as W, Q as $, h as t, X as fe, W as be, a as O, $ as se, l as te, j as K, F as me, r as Ee, S as X, B as j, K as Z, a9 as Xe, g as C, R as N, q as Ze, b2 as Be, b4 as Ge, Z as Qe, b3 as Je, ae as G, a3 as et, b5 as tt, aa as ot, bH as _e, a4 as nt, T as oe, U as ne, a6 as at, a8 as lt, a0 as Pe, bs as st, V as it, ah as rt, aF as ut, p as ae, t as Ie, au as dt, aJ as ct, aH as we, by as xe } from "./BdODHn_3.js";
import { c as pt, u as ft } from "./5qd8EHar.js";
import { g as mt } from "./CpsPJSKh.js";
import { a as vt } from "./BPn2u3Ki.js";
import { _ as ht, a as gt, u as yt, b as bt } from "./B0fHAcDH.js";
import { _ as _t, u as Q } from "./CNyQ-E8Y.js";
import { u as wt } from "./DPSHcICq.js";
import { i as Ce } from "./CHIgUVhi.js";
import { u as xt } from "./DKBBbajR.js";
import "./vffVQ_uU.js";
import "./UqZ8O5YD.js";
import "./BTeZegdw.js";
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
  }), (f, o) => (T(), R(t(_t), { "as-child": "" }, { default: b(() => [H("select", W({ ref_key: "selectElement", ref: e }, s), [$(f.$slots, "default")], 16)]), _: 3 }));
} }), Bt = { key: 0, value: "" }, [Y, ke] = se("SelectRoot"), Pt = V({ inheritAttrs: false, __name: "SelectRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, defaultValue: {}, modelValue: { default: void 0 }, by: {}, dir: {}, multiple: { type: Boolean }, autocomplete: {}, disabled: { type: Boolean }, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "update:open"], setup(n, { emit: s }) {
  const e = n, f = s, { required: o, disabled: l, multiple: v, dir: r } = fe(e), d = be(e, "modelValue", f, { defaultValue: e.defaultValue ?? (v.value ? [] : void 0), passive: e.modelValue === void 0, deep: true }), c = be(e, "open", f, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), m = E(), h = E(), _ = E({ x: 0, y: 0 }), g = O(() => {
    var _a;
    return v.value && Array.isArray(d.value) ? ((_a = d.value) == null ? void 0 : _a.length) === 0 : Ce(d.value);
  });
  Q({ isProvider: true });
  const u = wt(r), B = Fe(m), P = E(/* @__PURE__ */ new Set()), D = O(() => Array.from(P.value).map((i) => i.value).join(";"));
  function k(i) {
    if (v.value) {
      const a = Array.isArray(d.value) ? [...d.value] : [], w = a.findIndex((p) => pe(p, i, e.by));
      w === -1 ? a.push(i) : a.splice(w, 1), d.value = [...a];
    } else d.value = i;
  }
  return ke({ triggerElement: m, onTriggerChange: (i) => {
    m.value = i;
  }, valueElement: h, onValueElementChange: (i) => {
    h.value = i;
  }, contentId: "", modelValue: d, onValueChange: k, by: e.by, open: c, multiple: v, required: o, onOpenChange: (i) => {
    c.value = i;
  }, dir: u, triggerPointerDownPosRef: _, disabled: l, isEmptyModelValue: g, optionsSet: P, onOptionAdd: (i) => P.value.add(i), onOptionRemove: (i) => P.value.delete(i) }), (i, a) => (T(), R(t(ht), null, { default: b(() => [$(i.$slots, "default", { modelValue: t(d), open: t(c) }), t(B) ? (T(), R(Et, { key: D.value, "aria-hidden": "true", tabindex: "-1", multiple: t(v), required: t(o), name: i.name, autocomplete: i.autocomplete, disabled: t(l), value: t(d) }, { default: b(() => [t(Ce)(t(d)) ? (T(), K("option", Bt)) : te("", true), (T(true), K(me, null, Ee(Array.from(P.value), (w) => (T(), K("option", W({ key: w.value ?? "", ref_for: true }, w), null, 16))), 128))]), _: 1 }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : te("", true)]), _: 3 }));
} }), [It, kt] = se("SelectItemAlignedPosition"), $t = V({ inheritAttrs: false, __name: "SelectItemAlignedPosition", props: { asChild: { type: Boolean }, as: {} }, emits: ["placed"], setup(n, { emit: s }) {
  const e = n, f = s, { getItems: o } = Q(), l = Y(), v = ie(), r = E(false), d = E(true), c = E(), { forwardRef: m, currentElement: h } = X(), { viewport: _, selectedItem: g, selectedItemText: u, focusSelectedItem: B } = v;
  function P() {
    if (l.triggerElement.value && l.valueElement.value && c.value && h.value && (_ == null ? void 0 : _.value) && (g == null ? void 0 : g.value) && (u == null ? void 0 : u.value)) {
      const i = l.triggerElement.value.getBoundingClientRect(), a = h.value.getBoundingClientRect(), w = l.valueElement.value.getBoundingClientRect(), p = u.value.getBoundingClientRect();
      if (l.dir.value !== "rtl") {
        const M = p.left - a.left, F = w.left - M, U = i.left - F, z = i.width + U, ue = Math.max(z, a.width), de = window.innerWidth - A, ce = ye(F, A, Math.max(A, de - ue));
        c.value.style.minWidth = `${z}px`, c.value.style.left = `${ce}px`;
      } else {
        const M = a.right - p.right, F = window.innerWidth - w.right - M, U = window.innerWidth - i.right - F, z = i.width + U, ue = Math.max(z, a.width), de = window.innerWidth - A, ce = ye(F, A, Math.max(A, de - ue));
        c.value.style.minWidth = `${z}px`, c.value.style.right = `${ce}px`;
      }
      const y = o().map((M) => M.ref), x = window.innerHeight - A * 2, I = _.value.scrollHeight, S = window.getComputedStyle(h.value), q = Number.parseInt(S.borderTopWidth, 10), L = Number.parseInt(S.paddingTop, 10), ve = Number.parseInt(S.borderBottomWidth, 10), Re = Number.parseInt(S.paddingBottom, 10), he = q + L + I + Re + ve, De = Math.min(g.value.offsetHeight * 5, he), ge = window.getComputedStyle(_.value), Ae = Number.parseInt(ge.paddingTop, 10), Oe = Number.parseInt(ge.paddingBottom, 10), J = i.top + i.height / 2 - A, Me = x - J, re = g.value.offsetHeight / 2, He = g.value.offsetTop + re, ee = q + L + He, Le = he - ee;
      if (ee <= J) {
        const M = g.value === y[y.length - 1];
        c.value.style.bottom = "0px";
        const F = h.value.clientHeight - _.value.offsetTop - _.value.offsetHeight, U = Math.max(Me, re + (M ? Oe : 0) + F + ve), z = ee + U;
        c.value.style.height = `${z}px`;
      } else {
        const M = g.value === y[0];
        c.value.style.top = "0px";
        const U = Math.max(J, q + _.value.offsetTop + (M ? Ae : 0) + re) + Le;
        c.value.style.height = `${U}px`, _.value.scrollTop = ee - J + _.value.offsetTop;
      }
      c.value.style.margin = `${A}px 0`, c.value.style.minHeight = `${De}px`, c.value.style.maxHeight = `${x}px`, f("placed"), requestAnimationFrame(() => r.value = true);
    }
  }
  const D = E("");
  j(async () => {
    await Z(), P(), h.value && (D.value = window.getComputedStyle(h.value).zIndex);
  });
  function k(i) {
    i && d.value === true && (P(), B == null ? void 0 : B(), d.value = false);
  }
  return Xe(l.triggerElement, () => {
    P();
  }), kt({ contentWrapper: c, shouldExpandOnScrollRef: r, onScrollButtonChange: k }), (i, a) => (T(), K("div", { ref_key: "contentWrapperElement", ref: c, style: Ze({ display: "flex", flexDirection: "column", position: "fixed", zIndex: D.value }) }, [C(t(N), W({ ref: t(m), style: { boxSizing: "border-box", maxHeight: "100%" } }, { ...i.$attrs, ...e }), { default: b(() => [$(i.$slots, "default")]), _: 3 }, 16)], 4));
} }), Vt = V({ __name: "SelectPopperPosition", props: { side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: { default: A }, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const e = Be(n);
  return (f, o) => (T(), R(t(gt), W(t(e), { style: { boxSizing: "border-box", "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-select-content-available-width": "var(--reka-popper-available-width)", "--reka-select-content-available-height": "var(--reka-popper-available-height)", "--reka-select-trigger-width": "var(--reka-popper-anchor-width)", "--reka-select-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: b(() => [$(f.$slots, "default")]), _: 3 }, 16));
} }), Rt = { onViewportChange: () => {
}, itemTextRefCallback: () => {
}, itemRefCallback: () => {
} }, [ie, $e] = se("SelectContent"), Dt = V({ __name: "SelectContentImpl", props: { position: { default: "item-aligned" }, bodyLock: { type: Boolean, default: true }, side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, f = s, o = Y();
  yt(), xt(e.bodyLock);
  const { CollectionSlot: l, getItems: v } = Q(), r = E();
  Ge(r);
  const { search: d, handleTypeaheadSearch: c } = Se(), m = E(), h = E(), _ = E(), g = E(false), u = E(false), B = E(false);
  function P() {
    h.value && r.value && _e([h.value, r.value]);
  }
  Te(g, () => {
    P();
  });
  const { onOpenChange: D, triggerPointerDownPosRef: k } = o;
  Qe((p) => {
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
  const a = O(() => e.position === "popper" ? e : {}), w = Be(a.value);
  return $e({ content: r, viewport: m, onViewportChange: (p) => {
    m.value = p;
  }, itemRefCallback: (p, y, x) => {
    const I = !u.value && !x, S = le(o.modelValue.value, y, o.by);
    if (o.multiple.value) {
      if (B.value) return;
      (S || I) && (h.value = p, S && (B.value = true));
    } else (S || I) && (h.value = p);
    I && (u.value = true);
  }, selectedItem: h, selectedItemText: _, onItemLeave: () => {
    var _a;
    (_a = r.value) == null ? void 0 : _a.focus();
  }, itemTextRefCallback: (p, y, x) => {
    const I = !u.value && !x;
    (le(o.modelValue.value, y, o.by) || I) && (_.value = p);
  }, focusSelectedItem: P, position: e.position, isPositioned: g, searchRef: d }), (p, y) => (T(), R(t(l), null, { default: b(() => [C(t(Je), { "as-child": "", onMountAutoFocus: y[6] || (y[6] = G(() => {
  }, ["prevent"])), onUnmountAutoFocus: y[7] || (y[7] = (x) => {
    var _a;
    f("closeAutoFocus", x), !x.defaultPrevented && ((_a = t(o).triggerElement.value) == null ? void 0 : _a.focus({ preventScroll: true }), x.preventDefault());
  }) }, { default: b(() => [C(t(et), { "as-child": "", "disable-outside-pointer-events": "", onFocusOutside: y[2] || (y[2] = G(() => {
  }, ["prevent"])), onDismiss: y[3] || (y[3] = (x) => t(o).onOpenChange(false)), onEscapeKeyDown: y[4] || (y[4] = (x) => f("escapeKeyDown", x)), onPointerDownOutside: y[5] || (y[5] = (x) => f("pointerDownOutside", x)) }, { default: b(() => [(T(), R(tt(p.position === "popper" ? Vt : $t), W({ ...p.$attrs, ...t(w) }, { id: t(o).contentId, ref: (x) => {
    r.value = t(ot)(x);
  }, role: "listbox", "data-state": t(o).open.value ? "open" : "closed", dir: t(o).dir.value, style: { display: "flex", flexDirection: "column", outline: "none" }, onContextmenu: y[0] || (y[0] = G(() => {
  }, ["prevent"])), onPlaced: y[1] || (y[1] = (x) => g.value = true), onKeydown: i }), { default: b(() => [$(p.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "dir", "onKeydown"]))]), _: 3 })]), _: 3 })]), _: 3 }));
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
    return d.value ? (T(), R(t(at), { key: 0, ref_key: "presenceRef", ref: r, present: true }, { default: b(() => [C(Dt, oe(ne({ ...t(o), ...c.$attrs })), { default: b(() => [$(c.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 512)) : !((_a = r.value) == null ? void 0 : _a.present) && v.value ? (T(), K("div", Ot, [(T(), R(lt, { to: v.value }, [C(At, { context: t(l) }, { default: b(() => [$(c.$slots, "default")]), _: 3 }, 8, ["context"])], 8, ["to"]))])) : te("", true);
  };
} }), [Ve, Ht] = se("SelectItem"), Lt = V({ __name: "SelectItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(n, { emit: s }) {
  const e = n, f = s, { disabled: o } = fe(e), l = Y(), v = ie(), { forwardRef: r, currentElement: d } = X(), { CollectionItem: c } = Q(), m = O(() => {
    var _a;
    return le((_a = l.modelValue) == null ? void 0 : _a.value, e.value, l.by);
  }), h = E(false), _ = E(e.textValue ?? ""), g = Pe(void 0, "reka-select-item-text"), u = "select.select";
  async function B(a) {
    if (a.defaultPrevented) return;
    const w = { originalEvent: a, value: e.value };
    st(u, P, w);
  }
  async function P(a) {
    await Z(), f("select", a), !a.defaultPrevented && (o.value || (l.onValueChange(e.value), l.multiple.value || l.onOpenChange(false)));
  }
  async function D(a) {
    var _a, _b;
    await Z(), !a.defaultPrevented && (o.value ? (_a = v.onItemLeave) == null ? void 0 : _a.call(v) : (_b = a.currentTarget) == null ? void 0 : _b.focus({ preventScroll: true }));
  }
  async function k(a) {
    var _a;
    await Z(), !a.defaultPrevented && a.currentTarget === it() && ((_a = v.onItemLeave) == null ? void 0 : _a.call(v));
  }
  async function i(a) {
    var _a;
    await Z(), !(a.defaultPrevented || ((_a = v.searchRef) == null ? void 0 : _a.value) !== "" && a.key === " ") && (St.includes(a.key) && B(a), a.key === " " && a.preventDefault());
  }
  if (e.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return j(() => {
    d.value && v.itemRefCallback(d.value, e.value, e.disabled);
  }), Ht({ value: e.value, disabled: o, textId: g, isSelected: m, onItemTextChange: (a) => {
    _.value = ((_.value || (a == null ? void 0 : a.textContent)) ?? "").trim();
  } }), (a, w) => (T(), R(t(c), { value: { textValue: _.value } }, { default: b(() => [C(t(N), { ref: t(r), role: "option", "aria-labelledby": t(g), "data-highlighted": h.value ? "" : void 0, "aria-selected": m.value, "data-state": m.value ? "checked" : "unchecked", "aria-disabled": t(o) || void 0, "data-disabled": t(o) ? "" : void 0, tabindex: t(o) ? void 0 : -1, as: a.as, "as-child": a.asChild, onFocus: w[0] || (w[0] = (p) => h.value = true), onBlur: w[1] || (w[1] = (p) => h.value = false), onPointerup: B, onPointerdown: w[2] || (w[2] = (p) => {
    p.currentTarget.focus({ preventScroll: true });
  }), onTouchend: w[3] || (w[3] = G(() => {
  }, ["prevent", "stop"])), onPointermove: D, onPointerleave: k, onKeydown: i }, { default: b(() => [$(a.$slots, "default")]), _: 3 }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])]), _: 3 }, 8, ["value"]));
} }), Ft = V({ __name: "SelectItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = Ve();
  return (f, o) => t(e).isSelected.value ? (T(), R(t(N), W({ key: 0, "aria-hidden": "true" }, s), { default: b(() => [$(f.$slots, "default")]), _: 3 }, 16)) : te("", true);
} }), Kt = V({ inheritAttrs: false, __name: "SelectItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = Y(), f = ie(), o = Ve(), { forwardRef: l, currentElement: v } = X(), r = O(() => {
    var _a, _b;
    return { value: o.value, disabled: o.disabled.value, textContent: ((_a = v.value) == null ? void 0 : _a.textContent) ?? ((_b = o.value) == null ? void 0 : _b.toString()) ?? "" };
  });
  return j(() => {
    v.value && (o.onItemTextChange(v.value), f.itemTextRefCallback(v.value, o.value, o.disabled.value), e.onOptionAdd(r.value));
  }), rt(() => {
    e.onOptionRemove(r.value);
  }), (d, c) => (T(), R(t(N), W({ id: t(o).textId, ref: t(l) }, { ...s, ...d.$attrs }), { default: b(() => [$(d.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Nt = V({ __name: "SelectPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(n) {
  const s = n;
  return (e, f) => (T(), R(t(ut), oe(ne(s)), { default: b(() => [$(e.$slots, "default")]), _: 3 }, 16));
} }), Wt = V({ __name: "SelectTrigger", props: { disabled: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const s = n, e = Y(), { forwardRef: f, currentElement: o } = X(), l = O(() => {
    var _a;
    return ((_a = e.disabled) == null ? void 0 : _a.value) || s.disabled;
  });
  e.contentId || (e.contentId = Pe(void 0, "reka-select-content")), j(() => {
    e.onTriggerChange(o.value);
  });
  const { getItems: v } = Q(), { search: r, handleTypeaheadSearch: d, resetTypeahead: c } = Se();
  function m() {
    l.value || (e.onOpenChange(true), c());
  }
  function h(_) {
    m(), e.triggerPointerDownPosRef.value = { x: Math.round(_.pageX), y: Math.round(_.pageY) };
  }
  return (_, g) => (T(), R(t(bt), { "as-child": "", reference: _.reference }, { default: b(() => {
    var _a, _b, _c, _d;
    return [C(t(N), { ref: t(f), role: "combobox", type: _.as === "button" ? "button" : void 0, "aria-controls": t(e).contentId, "aria-expanded": t(e).open.value || false, "aria-required": (_a = t(e).required) == null ? void 0 : _a.value, "aria-autocomplete": "none", disabled: l.value, dir: (_b = t(e)) == null ? void 0 : _b.dir.value, "data-state": ((_c = t(e)) == null ? void 0 : _c.open.value) ? "open" : "closed", "data-disabled": l.value ? "" : void 0, "data-placeholder": t(Tt)((_d = t(e).modelValue) == null ? void 0 : _d.value) ? "" : void 0, "as-child": _.asChild, as: _.as, onClick: g[0] || (g[0] = (u) => {
      var _a2;
      (_a2 = u == null ? void 0 : u.currentTarget) == null ? void 0 : _a2.focus();
    }), onPointerdown: g[1] || (g[1] = (u) => {
      if (u.pointerType === "touch") return u.preventDefault();
      const B = u.target;
      B.hasPointerCapture(u.pointerId) && B.releasePointerCapture(u.pointerId), u.button === 0 && u.ctrlKey === false && (h(u), u.preventDefault());
    }), onPointerup: g[2] || (g[2] = G((u) => {
      u.pointerType === "touch" && h(u);
    }, ["prevent"])), onKeydown: g[3] || (g[3] = (u) => {
      const B = t(r) !== "";
      !(u.ctrlKey || u.altKey || u.metaKey) && u.key.length === 1 && B && u.key === " " || (t(d)(u.key, t(v)()), t(Ct).includes(u.key) && (m(), u.preventDefault()));
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
    const d = Array.from(o.optionsSet.value), c = (m) => d.find((h) => le(m, h.value, o.by));
    return Array.isArray(o.modelValue.value) ? r = o.modelValue.value.map((m) => {
      var _a2;
      return ((_a2 = c(m)) == null ? void 0 : _a2.textContent) ?? "";
    }) : r = [((_a = c(o.modelValue.value)) == null ? void 0 : _a.textContent) ?? ""], r.filter(Boolean);
  }), v = O(() => l.value.length ? l.value.join(", ") : s.placeholder);
  return (r, d) => (T(), R(t(N), { ref: t(e), as: r.as, "as-child": r.asChild, style: { pointerEvents: "none" }, "data-placeholder": l.value.length ? void 0 : s.placeholder }, { default: b(() => [$(r.$slots, "default", { selectedLabel: l.value, modelValue: t(o).modelValue.value }, () => [ae(Ie(v.value), 1)])]), _: 3 }, 8, ["as", "as-child", "data-placeholder"]));
} }), Ut = V({ __name: "SelectViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const s = n, { nonce: e } = fe(s), f = Ke(e), o = ie(), l = o.position === "item-aligned" ? It() : void 0, { forwardRef: v, currentElement: r } = X();
  j(() => {
    o == null ? void 0 : o.onViewportChange(r.value);
  });
  const d = E(0);
  function c(m) {
    const h = m.currentTarget, { shouldExpandOnScrollRef: _, contentWrapper: g } = l ?? {};
    if ((_ == null ? void 0 : _.value) && (g == null ? void 0 : g.value)) {
      const u = Math.abs(d.value - h.scrollTop);
      if (u > 0) {
        const B = window.innerHeight - A * 2, P = Number.parseFloat(g.value.style.minHeight), D = Number.parseFloat(g.value.style.height), k = Math.max(P, D);
        if (k < B) {
          const i = k + u, a = Math.min(B, i), w = i - a;
          g.value.style.height = `${a}px`, g.value.style.bottom === "0px" && (h.scrollTop = w > 0 ? w : 0, g.value.style.justifyContent = "flex-end");
        }
      }
    }
    d.value = h.scrollTop;
  }
  return (m, h) => (T(), K(me, null, [C(t(N), W({ ref: t(v), "data-reka-select-viewport": "", role: "presentation" }, { ...m.$attrs, ...s }, { style: { position: "relative", flex: 1, overflow: "hidden auto" }, onScroll: c }), { default: b(() => [$(m.$slots, "default")]), _: 3 }, 16), C(t(N), { as: "style", nonce: t(f) }, { default: b(() => h[0] || (h[0] = [ae(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), zt = { flex: "~ gap-x-32 gap-y-20 wrap items-baseline" }, jt = { "nq-label": "", text: "f-xs neutral-700" }, Yt = { "bg-neutral-100": "" }, fo = V({ __name: "index", props: mt(), setup(n) {
  const s = n, e = { V1: "1.0", V2: "2.0" }, f = O(() => s.slice.items[1]), o = O(() => s.slice.items[0]), l = vt("version", e.V2), { define: v, reuse: r } = pt(), d = dt("articleEl");
  return ft(d, () => {
    ze(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), (c, m) => {
    const h = qt, _ = Wt, g = Kt, u = Ft, B = Lt, P = Ut, D = Mt, k = Nt, i = Pt, a = We, w = Ne, p = qe, y = Ue;
    return T(), K("div", null, [C(t(v), null, { default: b(({ headline: x, subline: I, content: S, date: q }) => [C(w, { headline: x, subline: I, "bg-neutral-100": "" }, { bottom: b(() => [H("div", zt, [C(i, { modelValue: t(l), "onUpdate:modelValue": m[0] || (m[0] = (L) => ct(l) ? l.value = L : null) }, { default: b(() => [C(_, { flex: "~ items-center gap-12", "outline-none": "", "px-16": "", "py-10": "", "rounded-full": "", "bg-gradient-green": "", "aria-label": "Select Litepaper Version" }, { default: b(() => [C(h, { text: "f-sm white", "nq-label": "" }), m[1] || (m[1] = H("div", { "i-nimiq:triangle-down": "", text: "10 white" }, null, -1))]), _: 1, __: [1] }), C(k, null, { default: b(() => [C(D, { "side-offset": 5, "rounded-18": "", "bg-white": "", "min-w-120": "", "w-full": "", shadow: "", "z-10": "", "motion-safe:animate": "fade-in duration-100ms ease-out" }, { default: b(() => [C(P, { "p-4": "" }, { default: b(() => [(T(), K(me, null, Ee(e, (L) => C(B, { key: L, value: L, flex: "~ gap-8 items-center", "outline-none": "", "px-16": "", "py-10": "", "rounded-14": "", "cursor-pointer": "", "transition-colors": "", "hocus:bg-neutral-200": "" }, { default: b(() => [C(g, { text: "14", "nq-label": "" }, { default: b(() => [ae(" Version " + Ie(L), 1)]), _: 2 }, 1024), C(u, { "as-childr": "" }, { default: b(() => m[2] || (m[2] = [H("div", { "i-nimiq:triangle-left": "", text: "10 neutral-800" }, null, -1)])), _: 1, __: [2] })]), _: 2 }, 1032, ["value"])), 64))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"]), H("span", jt, [m[3] || (m[3] = ae(" Updated ")), C(a, { datetime: ("getDate" in c ? c.getDate : t(je))(q), month: "long", day: "numeric", year: "numeric" }, null, 8, ["datetime"])])])]), _: 2 }, 1032, ["headline", "subline"]), H("section", Yt, [C(p, { wrapper: "article", "nq-prose": "", field: S, "text-20": "" }, null, 8, ["field"])])]), _: 1 }), H("div", { ref_key: "articleEl", ref: d }, [we(H("div", null, [C(t(r), oe(ne(t(o))), null, 16)], 512), [[xe, t(l) === e.V2]]), we(H("div", null, [C(t(r), oe(ne(t(f))), null, 16)], 512), [[xe, t(l) === e.V1]])], 512), C(y, { "f-mt-xl": "" })]);
  };
} });
export {
  fo as default
};
