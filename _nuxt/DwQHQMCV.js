import { a as Ne, c as ye, u as Se, b as Ke, d as We, _ as qe } from "./DHd1PBd4.js";
import { _ as Ue } from "./B7p6i3HK.js";
import { _ as ze } from "./BFSEKnqQ.js";
import { i as je } from "./CD5FwXF0.js";
import { ai as Ye, d as R, B as E, L as Te, b as D, o as T, w as y, e as L, m as W, R as $, u as t, U as pe, j as M, f as ee, c as N, F as fe, r as Ee, E as z, a1 as X, a as C, h as Xe, V as Ge, $ as G, ak as Ze, S as te, T as oe, X as Qe, a2 as Je, g as ne, t as Pe, as as et, ac as tt, aa as we, av as be } from "./7tyaNgEA.js";
import { c as ot, u as nt } from "./-SGvg42Q.js";
import { m as at } from "./bWEtUbjf.js";
import { g as lt } from "./CpsPJSKh.js";
import { a as st } from "./BlNg8BrV.js";
import { a as it, b as Be, c as rt, d as ut, u as dt, _ as ct } from "./DptPnj5y.js";
import { a as _e, c as le, u as Y, g as pt, P as K, h as ft, f as mt, b as Ie } from "./BqwFAzj-.js";
import { _ as vt, u as Z } from "./e5EsY3M9.js";
import { u as gt } from "./Da46OeJF.js";
import { i as xe } from "./CHIgUVhi.js";
import { c as ht, b as yt, a as wt, _ as bt, h as _t, g as xt, d as Ct } from "./6j_b9UX3.js";
import { f as Ce } from "./BmXLCl62.js";
import "./CMf5N-6F.js";
import "./C3sJ3Yu7.js";
import "./8Lad1M9Y.js";
const St = [" ", "Enter", "ArrowUp", "ArrowDown"], Tt = [" ", "Enter"], O = 10;
function ae(n, s, e) {
  return n === void 0 ? false : Array.isArray(n) ? n.some((f) => ce(f, s, e)) : ce(n, s, e);
}
function ce(n, s, e) {
  return n === void 0 || s === void 0 ? false : typeof n == "string" ? n === s : typeof e == "function" ? e(n, s) : typeof e == "string" ? (n == null ? void 0 : n[e]) === (s == null ? void 0 : s[e]) : Ye(n, s);
}
function Et(n) {
  return n == null || n === "" || Array.isArray(n) && n.length === 0;
}
const Pt = R({ __name: "BubbleSelect", props: { autocomplete: {}, autofocus: { type: Boolean }, disabled: { type: Boolean }, form: {}, multiple: { type: Boolean }, name: {}, required: { type: Boolean }, size: {}, value: {} }, setup(n) {
  const s = n, e = E();
  return Te(() => s.value, (f, o) => {
    const d = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(d, "value").set;
    if (f !== o && r && e.value) {
      const c = new Event("change", { bubbles: true });
      r.call(e.value, f), e.value.dispatchEvent(c);
    }
  }), (f, o) => (T(), D(t(vt), { "as-child": "" }, { default: y(() => [L("select", W({ ref_key: "selectElement", ref: e }, s), [$(f.$slots, "default")], 16)]), _: 3 }));
} }), Bt = { key: 0, value: "" }, [j, ke] = le("SelectRoot"), It = R({ inheritAttrs: false, __name: "SelectRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, defaultValue: {}, modelValue: { default: void 0 }, by: {}, dir: {}, multiple: { type: Boolean }, autocomplete: {}, disabled: { type: Boolean }, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "update:open"], setup(n, { emit: s }) {
  const e = n, f = s, { required: o, disabled: d, multiple: m, dir: r } = pe(e), c = _e(e, "modelValue", f, { defaultValue: e.defaultValue ?? (m.value ? [] : void 0), passive: e.modelValue === void 0, deep: true }), a = _e(e, "open", f, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), b = E(), v = E(), w = E({ x: 0, y: 0 }), g = M(() => {
    var _a;
    return m.value && Array.isArray(c.value) ? ((_a = c.value) == null ? void 0 : _a.length) === 0 : xe(c.value);
  });
  Z({ isProvider: true });
  const u = gt(r), P = Ne(b), B = E(/* @__PURE__ */ new Set()), A = M(() => Array.from(B.value).map((i) => i.value).join(";"));
  function k(i) {
    if (m.value) {
      const l = Array.isArray(c.value) ? [...c.value] : [], _ = l.findIndex((p) => ce(p, i, e.by));
      _ === -1 ? l.push(i) : l.splice(_, 1), c.value = [...l];
    } else c.value = i;
  }
  return ke({ triggerElement: b, onTriggerChange: (i) => {
    b.value = i;
  }, valueElement: v, onValueElementChange: (i) => {
    v.value = i;
  }, contentId: "", modelValue: c, onValueChange: k, by: e.by, open: a, multiple: m, required: o, onOpenChange: (i) => {
    a.value = i;
  }, dir: u, triggerPointerDownPosRef: w, disabled: d, isEmptyModelValue: g, optionsSet: B, onOptionAdd: (i) => B.value.add(i), onOptionRemove: (i) => B.value.delete(i) }), (i, l) => (T(), D(t(it), null, { default: y(() => [$(i.$slots, "default", { modelValue: t(c), open: t(a) }), t(P) ? (T(), D(Pt, { key: A.value, "aria-hidden": "true", tabindex: "-1", multiple: t(m), required: t(o), name: i.name, autocomplete: i.autocomplete, disabled: t(d), value: t(c) }, { default: y(() => [t(xe)(t(c)) ? (T(), N("option", Bt)) : ee("", true), (T(true), N(fe, null, Ee(Array.from(B.value), (_) => (T(), N("option", W({ key: _.value ?? "", ref_for: true }, _), null, 16))), 128))]), _: 1 }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : ee("", true)]), _: 3 }));
} }), [kt, $t] = le("SelectItemAlignedPosition"), Rt = R({ inheritAttrs: false, __name: "SelectItemAlignedPosition", props: { asChild: { type: Boolean }, as: {} }, emits: ["placed"], setup(n, { emit: s }) {
  const e = n, f = s, { getItems: o } = Z(), d = j(), m = se(), r = E(false), c = E(true), a = E(), { forwardRef: b, currentElement: v } = Y(), { viewport: w, selectedItem: g, selectedItemText: u, focusSelectedItem: P } = m;
  function B() {
    if (d.triggerElement.value && d.valueElement.value && a.value && v.value && (w == null ? void 0 : w.value) && (g == null ? void 0 : g.value) && (u == null ? void 0 : u.value)) {
      const i = d.triggerElement.value.getBoundingClientRect(), l = v.value.getBoundingClientRect(), _ = d.valueElement.value.getBoundingClientRect(), p = u.value.getBoundingClientRect();
      if (d.dir.value !== "rtl") {
        const H = p.left - l.left, F = _.left - H, q = i.left - F, U = i.width + q, re = Math.max(U, l.width), ue = window.innerWidth - O, de = ye(F, O, Math.max(O, ue - re));
        a.value.style.minWidth = `${U}px`, a.value.style.left = `${de}px`;
      } else {
        const H = l.right - p.right, F = window.innerWidth - _.right - H, q = window.innerWidth - i.right - F, U = i.width + q, re = Math.max(U, l.width), ue = window.innerWidth - O, de = ye(F, O, Math.max(O, ue - re));
        a.value.style.minWidth = `${U}px`, a.value.style.right = `${de}px`;
      }
      const h = o().map((H) => H.ref), x = window.innerHeight - O * 2, I = w.value.scrollHeight, S = window.getComputedStyle(v.value), V = Number.parseInt(S.borderTopWidth, 10), me = Number.parseInt(S.paddingTop, 10), ve = Number.parseInt(S.borderBottomWidth, 10), Ae = Number.parseInt(S.paddingBottom, 10), ge = V + me + I + Ae + ve, Ve = Math.min(g.value.offsetHeight * 5, ge), he = window.getComputedStyle(w.value), Oe = Number.parseInt(he.paddingTop, 10), Me = Number.parseInt(he.paddingBottom, 10), Q = i.top + i.height / 2 - O, He = x - Q, ie = g.value.offsetHeight / 2, Le = g.value.offsetTop + ie, J = V + me + Le, Fe = ge - J;
      if (J <= Q) {
        const H = g.value === h[h.length - 1];
        a.value.style.bottom = "0px";
        const F = v.value.clientHeight - w.value.offsetTop - w.value.offsetHeight, q = Math.max(He, ie + (H ? Me : 0) + F + ve), U = J + q;
        a.value.style.height = `${U}px`;
      } else {
        const H = g.value === h[0];
        a.value.style.top = "0px";
        const q = Math.max(Q, V + w.value.offsetTop + (H ? Oe : 0) + ie) + Fe;
        a.value.style.height = `${q}px`, w.value.scrollTop = J - Q + w.value.offsetTop;
      }
      a.value.style.margin = `${O}px 0`, a.value.style.minHeight = `${Ve}px`, a.value.style.maxHeight = `${x}px`, f("placed"), requestAnimationFrame(() => r.value = true);
    }
  }
  const A = E("");
  z(async () => {
    await X(), B(), v.value && (A.value = window.getComputedStyle(v.value).zIndex);
  });
  function k(i) {
    i && c.value === true && (B(), P == null ? void 0 : P(), c.value = false);
  }
  return pt(d.triggerElement, () => {
    B();
  }), $t({ contentWrapper: a, shouldExpandOnScrollRef: r, onScrollButtonChange: k }), (i, l) => (T(), N("div", { ref_key: "contentWrapperElement", ref: a, style: Xe({ display: "flex", flexDirection: "column", position: "fixed", zIndex: A.value }) }, [C(t(K), W({ ref: t(b), style: { boxSizing: "border-box", maxHeight: "100%" } }, { ...i.$attrs, ...e }), { default: y(() => [$(i.$slots, "default")]), _: 3 }, 16)], 4));
} }), Dt = R({ __name: "SelectPopperPosition", props: { side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: { default: O }, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const e = Be(n);
  return (f, o) => (T(), D(t(rt), W(t(e), { style: { boxSizing: "border-box", "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-select-content-available-width": "var(--reka-popper-available-width)", "--reka-select-content-available-height": "var(--reka-popper-available-height)", "--reka-select-trigger-width": "var(--reka-popper-anchor-width)", "--reka-select-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: y(() => [$(f.$slots, "default")]), _: 3 }, 16));
} }), At = { onViewportChange: () => {
}, itemTextRefCallback: () => {
}, itemRefCallback: () => {
} }, [se, $e] = le("SelectContent"), Vt = R({ __name: "SelectContentImpl", props: { position: { default: "item-aligned" }, bodyLock: { type: Boolean, default: true }, side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, f = s, o = j();
  ut(), ht(e.bodyLock);
  const { CollectionSlot: d, getItems: m } = Z(), r = E();
  yt(r);
  const { search: c, handleTypeaheadSearch: a } = Se(), b = E(), v = E(), w = E(), g = E(false), u = E(false), P = E(false);
  function B() {
    v.value && r.value && Ce([v.value, r.value]);
  }
  Te(g, () => {
    B();
  });
  const { onOpenChange: A, triggerPointerDownPosRef: k } = o;
  Ge((p) => {
    if (!r.value) return;
    let h = { x: 0, y: 0 };
    const x = (S) => {
      var _a, _b;
      h = { x: Math.abs(Math.round(S.pageX) - (((_a = k.value) == null ? void 0 : _a.x) ?? 0)), y: Math.abs(Math.round(S.pageY) - (((_b = k.value) == null ? void 0 : _b.y) ?? 0)) };
    }, I = (S) => {
      var _a;
      S.pointerType !== "touch" && (h.x <= 10 && h.y <= 10 ? S.preventDefault() : ((_a = r.value) == null ? void 0 : _a.contains(S.target)) || A(false), document.removeEventListener("pointermove", x), k.value = null);
    };
    k.value !== null && (document.addEventListener("pointermove", x), document.addEventListener("pointerup", I, { capture: true, once: true })), p(() => {
      document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", I, { capture: true });
    });
  });
  function i(p) {
    const h = p.ctrlKey || p.altKey || p.metaKey;
    if (p.key === "Tab" && p.preventDefault(), !h && p.key.length === 1 && a(p.key, m()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(p.key)) {
      let I = [...m().map((S) => S.ref)];
      if (["ArrowUp", "End"].includes(p.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p.key)) {
        const S = p.target, V = I.indexOf(S);
        I = I.slice(V + 1);
      }
      setTimeout(() => Ce(I)), p.preventDefault();
    }
  }
  const l = M(() => e.position === "popper" ? e : {}), _ = Be(l.value);
  return $e({ content: r, viewport: b, onViewportChange: (p) => {
    b.value = p;
  }, itemRefCallback: (p, h, x) => {
    const I = !u.value && !x, S = ae(o.modelValue.value, h, o.by);
    if (o.multiple.value) {
      if (P.value) return;
      (S || I) && (v.value = p, S && (P.value = true));
    } else (S || I) && (v.value = p);
    I && (u.value = true);
  }, selectedItem: v, selectedItemText: w, onItemLeave: () => {
    var _a;
    (_a = r.value) == null ? void 0 : _a.focus();
  }, itemTextRefCallback: (p, h, x) => {
    const I = !u.value && !x;
    (ae(o.modelValue.value, h, o.by) || I) && (w.value = p);
  }, focusSelectedItem: B, position: e.position, isPositioned: g, searchRef: c }), (p, h) => (T(), D(t(d), null, { default: y(() => [C(t(wt), { "as-child": "", onMountAutoFocus: h[6] || (h[6] = G(() => {
  }, ["prevent"])), onUnmountAutoFocus: h[7] || (h[7] = (x) => {
    var _a;
    f("closeAutoFocus", x), !x.defaultPrevented && ((_a = t(o).triggerElement.value) == null ? void 0 : _a.focus({ preventScroll: true }), x.preventDefault());
  }) }, { default: y(() => [C(t(bt), { "as-child": "", "disable-outside-pointer-events": "", onFocusOutside: h[2] || (h[2] = G(() => {
  }, ["prevent"])), onDismiss: h[3] || (h[3] = (x) => t(o).onOpenChange(false)), onEscapeKeyDown: h[4] || (h[4] = (x) => f("escapeKeyDown", x)), onPointerDownOutside: h[5] || (h[5] = (x) => f("pointerDownOutside", x)) }, { default: y(() => [(T(), D(Ze(p.position === "popper" ? Dt : Rt), W({ ...p.$attrs, ...t(_) }, { id: t(o).contentId, ref: (x) => {
    r.value = t(ft)(x);
  }, role: "listbox", "data-state": t(o).open.value ? "open" : "closed", dir: t(o).dir.value, style: { display: "flex", flexDirection: "column", outline: "none" }, onContextmenu: h[0] || (h[0] = G(() => {
  }, ["prevent"])), onPlaced: h[1] || (h[1] = (x) => g.value = true), onKeydown: i }), { default: y(() => [$(p.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "dir", "onKeydown"]))]), _: 3 })]), _: 3 })]), _: 3 }));
} }), Ot = R({ inheritAttrs: false, __name: "SelectProvider", props: { context: {} }, setup(n) {
  return ke(n.context), $e(At), (e, f) => $(e.$slots, "default");
} }), Mt = { key: 1 }, Ht = R({ inheritAttrs: false, __name: "SelectContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, o = dt(e, s), d = j(), m = E();
  z(() => {
    m.value = new DocumentFragment();
  });
  const r = E(), c = M(() => e.forceMount || d.open.value);
  return (a, b) => {
    var _a;
    return c.value ? (T(), D(t(mt), { key: 0, ref_key: "presenceRef", ref: r, present: true }, { default: y(() => [C(Vt, te(oe({ ...t(o), ...a.$attrs })), { default: y(() => [$(a.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 512)) : !((_a = r.value) == null ? void 0 : _a.present) && m.value ? (T(), N("div", Mt, [(T(), D(Qe, { to: m.value }, [C(Ot, { context: t(d) }, { default: y(() => [$(a.$slots, "default")]), _: 3 }, 8, ["context"])], 8, ["to"]))])) : ee("", true);
  };
} }), [Re, Lt] = le("SelectItem"), Ft = R({ __name: "SelectItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(n, { emit: s }) {
  const e = n, f = s, { disabled: o } = pe(e), d = j(), m = se(), { forwardRef: r, currentElement: c } = Y(), { CollectionItem: a } = Z(), b = M(() => {
    var _a;
    return ae((_a = d.modelValue) == null ? void 0 : _a.value, e.value, d.by);
  }), v = E(false), w = E(e.textValue ?? ""), g = Ie(void 0, "reka-select-item-text"), u = "select.select";
  async function P(l) {
    if (l.defaultPrevented) return;
    const _ = { originalEvent: l, value: e.value };
    _t(u, B, _);
  }
  async function B(l) {
    await X(), f("select", l), !l.defaultPrevented && (o.value || (d.onValueChange(e.value), d.multiple.value || d.onOpenChange(false)));
  }
  async function A(l) {
    var _a, _b;
    await X(), !l.defaultPrevented && (o.value ? (_a = m.onItemLeave) == null ? void 0 : _a.call(m) : (_b = l.currentTarget) == null ? void 0 : _b.focus({ preventScroll: true }));
  }
  async function k(l) {
    var _a;
    await X(), !l.defaultPrevented && l.currentTarget === xt() && ((_a = m.onItemLeave) == null ? void 0 : _a.call(m));
  }
  async function i(l) {
    var _a;
    await X(), !(l.defaultPrevented || ((_a = m.searchRef) == null ? void 0 : _a.value) !== "" && l.key === " ") && (Tt.includes(l.key) && P(l), l.key === " " && l.preventDefault());
  }
  if (e.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return z(() => {
    c.value && m.itemRefCallback(c.value, e.value, e.disabled);
  }), Lt({ value: e.value, disabled: o, textId: g, isSelected: b, onItemTextChange: (l) => {
    w.value = ((w.value || (l == null ? void 0 : l.textContent)) ?? "").trim();
  } }), (l, _) => (T(), D(t(a), { value: { textValue: w.value } }, { default: y(() => [C(t(K), { ref: t(r), role: "option", "aria-labelledby": t(g), "data-highlighted": v.value ? "" : void 0, "aria-selected": b.value, "data-state": b.value ? "checked" : "unchecked", "aria-disabled": t(o) || void 0, "data-disabled": t(o) ? "" : void 0, tabindex: t(o) ? void 0 : -1, as: l.as, "as-child": l.asChild, onFocus: _[0] || (_[0] = (p) => v.value = true), onBlur: _[1] || (_[1] = (p) => v.value = false), onPointerup: P, onPointerdown: _[2] || (_[2] = (p) => {
    p.currentTarget.focus({ preventScroll: true });
  }), onTouchend: _[3] || (_[3] = G(() => {
  }, ["prevent", "stop"])), onPointermove: A, onPointerleave: k, onKeydown: i }, { default: y(() => [$(l.$slots, "default")]), _: 3 }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])]), _: 3 }, 8, ["value"]));
} }), Nt = R({ __name: "SelectItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = Re();
  return (f, o) => t(e).isSelected.value ? (T(), D(t(K), W({ key: 0, "aria-hidden": "true" }, s), { default: y(() => [$(f.$slots, "default")]), _: 3 }, 16)) : ee("", true);
} }), Kt = R({ inheritAttrs: false, __name: "SelectItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = j(), f = se(), o = Re(), { forwardRef: d, currentElement: m } = Y(), r = M(() => {
    var _a, _b;
    return { value: o.value, disabled: o.disabled.value, textContent: ((_a = m.value) == null ? void 0 : _a.textContent) ?? ((_b = o.value) == null ? void 0 : _b.toString()) ?? "" };
  });
  return z(() => {
    m.value && (o.onItemTextChange(m.value), f.itemTextRefCallback(m.value, o.value, o.disabled.value), e.onOptionAdd(r.value));
  }), Je(() => {
    e.onOptionRemove(r.value);
  }), (c, a) => (T(), D(t(K), W({ id: t(o).textId, ref: t(d) }, { ...s, ...c.$attrs }), { default: y(() => [$(c.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Wt = R({ __name: "SelectPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(n) {
  const s = n;
  return (e, f) => (T(), D(t(Ct), te(oe(s)), { default: y(() => [$(e.$slots, "default")]), _: 3 }, 16));
} }), qt = R({ __name: "SelectTrigger", props: { disabled: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const s = n, e = j(), { forwardRef: f, currentElement: o } = Y(), d = M(() => {
    var _a;
    return ((_a = e.disabled) == null ? void 0 : _a.value) || s.disabled;
  });
  e.contentId || (e.contentId = Ie(void 0, "reka-select-content")), z(() => {
    e.onTriggerChange(o.value);
  });
  const { getItems: m } = Z(), { search: r, handleTypeaheadSearch: c, resetTypeahead: a } = Se();
  function b() {
    d.value || (e.onOpenChange(true), a());
  }
  function v(w) {
    b(), e.triggerPointerDownPosRef.value = { x: Math.round(w.pageX), y: Math.round(w.pageY) };
  }
  return (w, g) => (T(), D(t(ct), { "as-child": "", reference: w.reference }, { default: y(() => {
    var _a, _b, _c, _d;
    return [C(t(K), { ref: t(f), role: "combobox", type: w.as === "button" ? "button" : void 0, "aria-controls": t(e).contentId, "aria-expanded": t(e).open.value || false, "aria-required": (_a = t(e).required) == null ? void 0 : _a.value, "aria-autocomplete": "none", disabled: d.value, dir: (_b = t(e)) == null ? void 0 : _b.dir.value, "data-state": ((_c = t(e)) == null ? void 0 : _c.open.value) ? "open" : "closed", "data-disabled": d.value ? "" : void 0, "data-placeholder": t(Et)((_d = t(e).modelValue) == null ? void 0 : _d.value) ? "" : void 0, "as-child": w.asChild, as: w.as, onClick: g[0] || (g[0] = (u) => {
      var _a2;
      (_a2 = u == null ? void 0 : u.currentTarget) == null ? void 0 : _a2.focus();
    }), onPointerdown: g[1] || (g[1] = (u) => {
      if (u.pointerType === "touch") return u.preventDefault();
      const P = u.target;
      P.hasPointerCapture(u.pointerId) && P.releasePointerCapture(u.pointerId), u.button === 0 && u.ctrlKey === false && (v(u), u.preventDefault());
    }), onPointerup: g[2] || (g[2] = G((u) => {
      u.pointerType === "touch" && v(u);
    }, ["prevent"])), onKeydown: g[3] || (g[3] = (u) => {
      const P = t(r) !== "";
      !(u.ctrlKey || u.altKey || u.metaKey) && u.key.length === 1 && P && u.key === " " || (t(c)(u.key, t(m)()), t(St).includes(u.key) && (b(), u.preventDefault()));
    }) }, { default: y(() => [$(w.$slots, "default")]), _: 3 }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])];
  }), _: 3 }, 8, ["reference"]));
} }), Ut = R({ __name: "SelectValue", props: { placeholder: { default: "" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, { forwardRef: e, currentElement: f } = Y(), o = j();
  z(() => {
    o.valueElement = f;
  });
  const d = M(() => {
    var _a;
    let r = [];
    const c = Array.from(o.optionsSet.value), a = (b) => c.find((v) => ae(b, v.value, o.by));
    return Array.isArray(o.modelValue.value) ? r = o.modelValue.value.map((b) => {
      var _a2;
      return ((_a2 = a(b)) == null ? void 0 : _a2.textContent) ?? "";
    }) : r = [((_a = a(o.modelValue.value)) == null ? void 0 : _a.textContent) ?? ""], r.filter(Boolean);
  }), m = M(() => d.value.length ? d.value.join(", ") : s.placeholder);
  return (r, c) => (T(), D(t(K), { ref: t(e), as: r.as, "as-child": r.asChild, style: { pointerEvents: "none" }, "data-placeholder": d.value.length ? void 0 : s.placeholder }, { default: y(() => [$(r.$slots, "default", { selectedLabel: d.value, modelValue: t(o).modelValue.value }, () => [ne(Pe(m.value), 1)])]), _: 3 }, 8, ["as", "as-child", "data-placeholder"]));
} }), zt = R({ __name: "SelectViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const s = n, { nonce: e } = pe(s), f = Ke(e), o = se(), d = o.position === "item-aligned" ? kt() : void 0, { forwardRef: m, currentElement: r } = Y();
  z(() => {
    o == null ? void 0 : o.onViewportChange(r.value);
  });
  const c = E(0);
  function a(b) {
    const v = b.currentTarget, { shouldExpandOnScrollRef: w, contentWrapper: g } = d ?? {};
    if ((w == null ? void 0 : w.value) && (g == null ? void 0 : g.value)) {
      const u = Math.abs(c.value - v.scrollTop);
      if (u > 0) {
        const P = window.innerHeight - O * 2, B = Number.parseFloat(g.value.style.minHeight), A = Number.parseFloat(g.value.style.height), k = Math.max(B, A);
        if (k < P) {
          const i = k + u, l = Math.min(P, i), _ = i - l;
          g.value.style.height = `${l}px`, g.value.style.bottom === "0px" && (v.scrollTop = _ > 0 ? _ : 0, g.value.style.justifyContent = "flex-end");
        }
      }
    }
    c.value = v.scrollTop;
  }
  return (b, v) => (T(), N(fe, null, [C(t(K), W({ ref: t(m), "data-reka-select-viewport": "", role: "presentation" }, { ...b.$attrs, ...s }, { style: { position: "relative", flex: 1, overflow: "hidden auto" }, onScroll: a }), { default: y(() => [$(b.$slots, "default")]), _: 3 }, 16), C(t(K), { as: "style", nonce: t(f) }, { default: y(() => v[0] || (v[0] = [ne(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), jt = { flex: "~ gap-x-32 gap-y-20 wrap items-baseline" }, Yt = { "nq-label": "", text: "f-xs neutral-700" }, Xt = { "bg-neutral-100": "" };
var De = ((n) => (n.V1 = "1.0", n.V2 = "2.0", n))(De || {});
const ho = R({ __name: "index", props: lt(), setup(n) {
  const s = n, e = M(() => s.slice.items[1]), f = M(() => s.slice.items[0]), o = st("version", "2.0"), { define: d, reuse: m } = ot(), r = et("articleEl");
  return nt(r, () => {
    at(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), (c, a) => {
    const b = Ut, v = qt, w = Kt, g = Nt, u = Ft, P = zt, B = Ht, A = Wt, k = It, i = qe, l = We, _ = Ue, p = ze;
    return T(), N("div", null, [C(t(d), null, { default: y(({ headline: h, subline: x, content: I, date: S }) => [C(l, { headline: h, subline: x, "bg-neutral-100": "" }, { bottom: y(() => [L("div", jt, [C(k, { modelValue: t(o), "onUpdate:modelValue": a[0] || (a[0] = (V) => tt(o) ? o.value = V : null) }, { default: y(() => [C(v, { flex: "~ items-center gap-12", "rounded-full": "", "px-16": "", "py-10": "", "outline-none": "", "bg-gradient-green": "" }, { default: y(() => [C(b, { text: "f-sm white", "nq-label": "" }), a[1] || (a[1] = L("div", { "i-nimiq:triangle-down": "", text: "10 white" }, null, -1))]), _: 1 }), C(A, null, { default: y(() => [C(B, { "side-offset": 5, "z-10": "", "min-w-120": "", "w-full": "", "rounded-18": "", "bg-white": "", shadow: "", "motion-safe:animate": "fade-in duration-100ms ease-out" }, { default: y(() => [C(P, { "p-4": "" }, { default: y(() => [(T(), N(fe, null, Ee(De, (V) => C(u, { key: V, value: V, flex: "~ gap-8 items-center", "cursor-pointer": "", "rounded-14": "", "px-16": "", "py-10": "", "outline-none": "", "transition-colors": "", "hocus:bg-neutral-200": "" }, { default: y(() => [C(w, { text: "14", "nq-label": "" }, { default: y(() => [ne(" Version " + Pe(V), 1)]), _: 2 }, 1024), C(g, { "as-childr": "" }, { default: y(() => a[2] || (a[2] = [L("div", { "i-nimiq:triangle-left": "", text: "10 neutral-800" }, null, -1)])), _: 1 })]), _: 2 }, 1032, ["value"])), 64))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"]), L("span", Yt, [a[3] || (a[3] = ne(" Updated ")), C(i, { datetime: ("getDate" in c ? c.getDate : t(je))(S), month: "long", day: "numeric", year: "numeric" }, null, 8, ["datetime"])])])]), _: 2 }, 1032, ["headline", "subline"]), L("section", Xt, [C(_, { wrapper: "article", "nq-prose": "", field: I, "text-20": "" }, null, 8, ["field"])])]), _: 1 }), L("div", { ref_key: "articleEl", ref: r }, [we(L("div", null, [C(t(m), te(oe(t(f))), null, 16)], 512), [[be, t(o) === "2.0"]]), we(L("div", null, [C(t(m), te(oe(t(e))), null, 16)], 512), [[be, t(o) === "1.0"]])], 512), C(p, { "f-mt-xl": "" })]);
  };
} });
export {
  ho as default
};
