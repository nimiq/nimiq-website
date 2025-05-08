import { a as Le, u as Se, b as Ke, c as We, _ as qe } from "./BWHOe9d5.js";
import { _ as Ue } from "./D3wyXQF5.js";
import { _ as ze } from "./zyrJ5Oe-.js";
import { i as je } from "./SvaN8giD.js";
import { d as R, B as I, L as Te, b as D, o as T, w as y, e as F, m as W, R as $, u as t, ag as Ye, U as pe, j as M, f as ee, c as L, F as fe, r as Ie, E as z, a as C, $ as X, S as te, T as oe, a1 as G, h as Ge, V as Xe, aj as Ze, X as Qe, a2 as Je, g as ne, t as Ee, at as et, ab as tt, a9 as ye, b8 as be } from "./ClGJWWej.js";
import { c as ot, u as nt } from "./CEBR9iVI.js";
import { m as at } from "./bWEtUbjf.js";
import { g as lt } from "./CpsPJSKh.js";
import { a as st } from "./B0V233La.js";
import { _ as it, u as Z } from "./Bygj8hOA.js";
import { _ as rt, a as ut, b as Pe, c as dt, d as ct, u as pt } from "./ZXfttXAr.js";
import { a as _e, c as ae, u as Y, b as Be, P as K, g as ft, h as mt, f as vt } from "./DvG5VWlW.js";
import { u as gt } from "./ZsnPzy3h.js";
import { i as we } from "./CHIgUVhi.js";
import { d as ht, c as yt, b as bt, a as _t, _ as wt, h as xt, g as Ct } from "./DsoEoSLB.js";
import { f as xe } from "./FVrYAlZa.js";
import "./DDjqKod7.js";
import "./Dxc61GTl.js";
import "./YKo2rOHu.js";
function Ce(n, s = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(e, Math.max(s, n));
}
const St = R({ __name: "BubbleSelect", props: { autocomplete: {}, autofocus: { type: Boolean }, disabled: { type: Boolean }, form: {}, multiple: { type: Boolean }, name: {}, required: { type: Boolean }, size: {}, value: {} }, setup(n) {
  const s = n, e = I();
  return Te(() => s.value, (f, o) => {
    const d = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(d, "value").set;
    if (f !== o && r && e.value) {
      const c = new Event("change", { bubbles: true });
      r.call(e.value, f), e.value.dispatchEvent(c);
    }
  }), (f, o) => (T(), D(t(it), { "as-child": "" }, { default: y(() => [F("select", W({ ref_key: "selectElement", ref: e }, s), [$(f.$slots, "default")], 16)]), _: 3 }));
} }), Tt = [" ", "Enter", "ArrowUp", "ArrowDown"], It = [" ", "Enter"], O = 10;
function de(n, s, e) {
  return n === void 0 ? false : Array.isArray(n) ? n.some((f) => ce(f, s, e)) : ce(n, s, e);
}
function ce(n, s, e) {
  return n === void 0 || s === void 0 ? false : typeof n == "string" ? n === s : typeof e == "function" ? e(n, s) : typeof e == "string" ? (n == null ? void 0 : n[e]) === (s == null ? void 0 : s[e]) : Ye(n, s);
}
const Et = { key: 0, value: "" }, [j, ke] = ae("SelectRoot"), Pt = R({ inheritAttrs: false, __name: "SelectRoot", props: { open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean }, defaultValue: {}, modelValue: { default: void 0 }, by: {}, dir: {}, multiple: { type: Boolean }, autocomplete: {}, disabled: { type: Boolean }, name: {}, required: { type: Boolean } }, emits: ["update:modelValue", "update:open"], setup(n, { emit: s }) {
  const e = n, f = s, { required: o, disabled: d, multiple: m, dir: r } = pe(e), c = _e(e, "modelValue", f, { defaultValue: e.defaultValue ?? (m.value ? [] : void 0), passive: e.modelValue === void 0, deep: true }), a = _e(e, "open", f, { defaultValue: e.defaultOpen, passive: e.open === void 0 }), _ = I(), v = I(), b = I({ x: 0, y: 0 }), g = M(() => {
    var _a;
    return m.value && Array.isArray(c.value) ? ((_a = c.value) == null ? void 0 : _a.length) === 0 : we(c.value);
  });
  Z({ isProvider: true });
  const u = gt(r), E = Le(_), P = I(/* @__PURE__ */ new Set()), V = M(() => Array.from(P.value).map((i) => i.value).join(";"));
  function k(i) {
    if (m.value) {
      const l = Array.isArray(c.value) ? [...c.value] : [], w = l.findIndex((p) => ce(p, i, e.by));
      w === -1 ? l.push(i) : l.splice(w, 1), c.value = [...l];
    } else c.value = i;
  }
  return ke({ triggerElement: _, onTriggerChange: (i) => {
    _.value = i;
  }, valueElement: v, onValueElementChange: (i) => {
    v.value = i;
  }, contentId: "", modelValue: c, onValueChange: k, by: e.by, open: a, multiple: m, required: o, onOpenChange: (i) => {
    a.value = i;
  }, dir: u, triggerPointerDownPosRef: b, disabled: d, isEmptyModelValue: g, optionsSet: P, onOptionAdd: (i) => P.value.add(i), onOptionRemove: (i) => P.value.delete(i) }), (i, l) => (T(), D(t(rt), null, { default: y(() => [$(i.$slots, "default", { modelValue: t(c), open: t(a) }), t(E) ? (T(), D(St, { key: V.value, "aria-hidden": "true", tabindex: "-1", multiple: t(m), required: t(o), name: i.name, autocomplete: i.autocomplete, disabled: t(d), value: t(c) }, { default: y(() => [t(we)(t(c)) ? (T(), L("option", Et)) : ee("", true), (T(true), L(fe, null, Ie(Array.from(P.value), (w) => (T(), L("option", W({ key: w.value ?? "", ref_for: true }, w), null, 16))), 128))]), _: 1 }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : ee("", true)]), _: 3 }));
} }), Bt = R({ __name: "SelectTrigger", props: { disabled: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const s = n, e = j(), { forwardRef: f, currentElement: o } = Y(), d = M(() => {
    var _a;
    return ((_a = e.disabled) == null ? void 0 : _a.value) || s.disabled;
  });
  e.contentId || (e.contentId = Be(void 0, "reka-select-content")), z(() => {
    e.onTriggerChange(o.value);
  });
  const { getItems: m } = Z(), { search: r, handleTypeaheadSearch: c, resetTypeahead: a } = Se();
  function _() {
    d.value || (e.onOpenChange(true), a());
  }
  function v(b) {
    _(), e.triggerPointerDownPosRef.value = { x: Math.round(b.pageX), y: Math.round(b.pageY) };
  }
  return (b, g) => (T(), D(t(ut), { "as-child": "", reference: b.reference }, { default: y(() => {
    var _a, _b, _c, _d;
    return [C(t(K), { ref: t(f), role: "combobox", type: b.as === "button" ? "button" : void 0, "aria-controls": t(e).contentId, "aria-expanded": t(e).open.value || false, "aria-required": (_a = t(e).required) == null ? void 0 : _a.value, "aria-autocomplete": "none", disabled: d.value, dir: (_b = t(e)) == null ? void 0 : _b.dir.value, "data-state": ((_c = t(e)) == null ? void 0 : _c.open.value) ? "open" : "closed", "data-disabled": d.value ? "" : void 0, "data-placeholder": ((_d = t(e).modelValue) == null ? void 0 : _d.value) ? void 0 : "", "as-child": b.asChild, as: b.as, onClick: g[0] || (g[0] = (u) => {
      var _a2;
      (_a2 = u == null ? void 0 : u.currentTarget) == null ? void 0 : _a2.focus();
    }), onPointerdown: g[1] || (g[1] = (u) => {
      if (u.pointerType === "touch") return u.preventDefault();
      const E = u.target;
      E.hasPointerCapture(u.pointerId) && E.releasePointerCapture(u.pointerId), u.button === 0 && u.ctrlKey === false && (v(u), u.preventDefault());
    }), onPointerup: g[2] || (g[2] = X((u) => {
      u.pointerType === "touch" && v(u);
    }, ["prevent"])), onKeydown: g[3] || (g[3] = (u) => {
      const E = t(r) !== "";
      !(u.ctrlKey || u.altKey || u.metaKey) && u.key.length === 1 && E && u.key === " " || (t(c)(u.key, t(m)()), t(Tt).includes(u.key) && (_(), u.preventDefault()));
    }) }, { default: y(() => [$(b.$slots, "default")]), _: 3 }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])];
  }), _: 3 }, 8, ["reference"]));
} }), kt = R({ __name: "SelectPortal", props: { to: {}, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(n) {
  const s = n;
  return (e, f) => (T(), D(t(ht), te(oe(s)), { default: y(() => [$(e.$slots, "default")]), _: 3 }, 16));
} }), [$t, Rt] = ae("SelectItemAlignedPosition"), Dt = R({ inheritAttrs: false, __name: "SelectItemAlignedPosition", props: { asChild: { type: Boolean }, as: {} }, emits: ["placed"], setup(n, { emit: s }) {
  const e = n, f = s, { getItems: o } = Z(), d = j(), m = le(), r = I(false), c = I(true), a = I(), { forwardRef: _, currentElement: v } = Y(), { viewport: b, selectedItem: g, selectedItemText: u, focusSelectedItem: E } = m;
  function P() {
    if (d.triggerElement.value && d.valueElement.value && a.value && v.value && (b == null ? void 0 : b.value) && (g == null ? void 0 : g.value) && (u == null ? void 0 : u.value)) {
      const i = d.triggerElement.value.getBoundingClientRect(), l = v.value.getBoundingClientRect(), w = d.valueElement.value.getBoundingClientRect(), p = u.value.getBoundingClientRect();
      if (d.dir.value !== "rtl") {
        const N = p.left - l.left, H = w.left - N, q = i.left - H, U = i.width + q, ie = Math.max(U, l.width), re = window.innerWidth - O, ue = Ce(H, O, Math.max(O, re - ie));
        a.value.style.minWidth = `${U}px`, a.value.style.left = `${ue}px`;
      } else {
        const N = l.right - p.right, H = window.innerWidth - w.right - N, q = window.innerWidth - i.right - H, U = i.width + q, ie = Math.max(U, l.width), re = window.innerWidth - O, ue = Ce(H, O, Math.max(O, re - ie));
        a.value.style.minWidth = `${U}px`, a.value.style.right = `${ue}px`;
      }
      const h = o().map((N) => N.ref), x = window.innerHeight - O * 2, B = b.value.scrollHeight, S = window.getComputedStyle(v.value), A = Number.parseInt(S.borderTopWidth, 10), me = Number.parseInt(S.paddingTop, 10), ve = Number.parseInt(S.borderBottomWidth, 10), Ve = Number.parseInt(S.paddingBottom, 10), ge = A + me + B + Ve + ve, Ae = Math.min(g.value.offsetHeight * 5, ge), he = window.getComputedStyle(b.value), Oe = Number.parseInt(he.paddingTop, 10), Me = Number.parseInt(he.paddingBottom, 10), Q = i.top + i.height / 2 - O, Ne = x - Q, se = g.value.offsetHeight / 2, Fe = g.value.offsetTop + se, J = A + me + Fe, He = ge - J;
      if (J <= Q) {
        const N = g.value === h[h.length - 1];
        a.value.style.bottom = "0px";
        const H = v.value.clientHeight - b.value.offsetTop - b.value.offsetHeight, q = Math.max(Ne, se + (N ? Me : 0) + H + ve), U = J + q;
        a.value.style.height = `${U}px`;
      } else {
        const N = g.value === h[0];
        a.value.style.top = "0px";
        const q = Math.max(Q, A + b.value.offsetTop + (N ? Oe : 0) + se) + He;
        a.value.style.height = `${q}px`, b.value.scrollTop = J - Q + b.value.offsetTop;
      }
      a.value.style.margin = `${O}px 0`, a.value.style.minHeight = `${Ae}px`, a.value.style.maxHeight = `${x}px`, f("placed"), requestAnimationFrame(() => r.value = true);
    }
  }
  const V = I("");
  z(async () => {
    await G(), P(), v.value && (V.value = window.getComputedStyle(v.value).zIndex);
  });
  function k(i) {
    i && c.value === true && (P(), E == null ? void 0 : E(), c.value = false);
  }
  return ft(d.triggerElement, () => {
    P();
  }), Rt({ contentWrapper: a, shouldExpandOnScrollRef: r, onScrollButtonChange: k }), (i, l) => (T(), L("div", { ref_key: "contentWrapperElement", ref: a, style: Ge({ display: "flex", flexDirection: "column", position: "fixed", zIndex: V.value }) }, [C(t(K), W({ ref: t(_), style: { boxSizing: "border-box", maxHeight: "100%" } }, { ...i.$attrs, ...e }), { default: y(() => [$(i.$slots, "default")]), _: 3 }, 16)], 4));
} }), Vt = R({ __name: "SelectPopperPosition", props: { side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: { default: O }, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const e = Pe(n);
  return (f, o) => (T(), D(t(dt), W(t(e), { style: { boxSizing: "border-box", "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)", "--reka-select-content-available-width": "var(--reka-popper-available-width)", "--reka-select-content-available-height": "var(--reka-popper-available-height)", "--reka-select-trigger-width": "var(--reka-popper-anchor-width)", "--reka-select-trigger-height": "var(--reka-popper-anchor-height)" } }), { default: y(() => [$(f.$slots, "default")]), _: 3 }, 16));
} }), At = { onViewportChange: () => {
}, itemTextRefCallback: () => {
}, itemRefCallback: () => {
} }, [le, $e] = ae("SelectContent"), Ot = R({ __name: "SelectContentImpl", props: { position: { default: "item-aligned" }, bodyLock: { type: Boolean, default: true }, side: {}, sideOffset: {}, align: { default: "start" }, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, f = s, o = j();
  ct(), yt(e.bodyLock);
  const { CollectionSlot: d, getItems: m } = Z(), r = I();
  bt(r);
  const { search: c, handleTypeaheadSearch: a } = Se(), _ = I(), v = I(), b = I(), g = I(false), u = I(false), E = I(false);
  function P() {
    v.value && r.value && xe([v.value, r.value]);
  }
  Te(g, () => {
    P();
  });
  const { onOpenChange: V, triggerPointerDownPosRef: k } = o;
  Xe((p) => {
    if (!r.value) return;
    let h = { x: 0, y: 0 };
    const x = (S) => {
      var _a, _b;
      h = { x: Math.abs(Math.round(S.pageX) - (((_a = k.value) == null ? void 0 : _a.x) ?? 0)), y: Math.abs(Math.round(S.pageY) - (((_b = k.value) == null ? void 0 : _b.y) ?? 0)) };
    }, B = (S) => {
      var _a;
      S.pointerType !== "touch" && (h.x <= 10 && h.y <= 10 ? S.preventDefault() : ((_a = r.value) == null ? void 0 : _a.contains(S.target)) || V(false), document.removeEventListener("pointermove", x), k.value = null);
    };
    k.value !== null && (document.addEventListener("pointermove", x), document.addEventListener("pointerup", B, { capture: true, once: true })), p(() => {
      document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", B, { capture: true });
    });
  });
  function i(p) {
    const h = p.ctrlKey || p.altKey || p.metaKey;
    if (p.key === "Tab" && p.preventDefault(), !h && p.key.length === 1 && a(p.key, m()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(p.key)) {
      let B = [...m().map((S) => S.ref)];
      if (["ArrowUp", "End"].includes(p.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p.key)) {
        const S = p.target, A = B.indexOf(S);
        B = B.slice(A + 1);
      }
      setTimeout(() => xe(B)), p.preventDefault();
    }
  }
  const l = M(() => e.position === "popper" ? e : {}), w = Pe(l.value);
  return $e({ content: r, viewport: _, onViewportChange: (p) => {
    _.value = p;
  }, itemRefCallback: (p, h, x) => {
    const B = !u.value && !x, S = de(o.modelValue.value, h, o.by);
    if (o.multiple.value) {
      if (E.value) return;
      (S || B) && (v.value = p, S && (E.value = true));
    } else (S || B) && (v.value = p);
    B && (u.value = true);
  }, selectedItem: v, selectedItemText: b, onItemLeave: () => {
    var _a;
    (_a = r.value) == null ? void 0 : _a.focus();
  }, itemTextRefCallback: (p, h, x) => {
    const B = !u.value && !x;
    (de(o.modelValue.value, h, o.by) || B) && (b.value = p);
  }, focusSelectedItem: P, position: e.position, isPositioned: g, searchRef: c }), (p, h) => (T(), D(t(d), null, { default: y(() => [C(t(_t), { "as-child": "", onMountAutoFocus: h[6] || (h[6] = X(() => {
  }, ["prevent"])), onUnmountAutoFocus: h[7] || (h[7] = (x) => {
    var _a;
    f("closeAutoFocus", x), !x.defaultPrevented && ((_a = t(o).triggerElement.value) == null ? void 0 : _a.focus({ preventScroll: true }), x.preventDefault());
  }) }, { default: y(() => [C(t(wt), { "as-child": "", "disable-outside-pointer-events": "", onFocusOutside: h[2] || (h[2] = X(() => {
  }, ["prevent"])), onDismiss: h[3] || (h[3] = (x) => t(o).onOpenChange(false)), onEscapeKeyDown: h[4] || (h[4] = (x) => f("escapeKeyDown", x)), onPointerDownOutside: h[5] || (h[5] = (x) => f("pointerDownOutside", x)) }, { default: y(() => [(T(), D(Ze(p.position === "popper" ? Vt : Dt), W({ ...p.$attrs, ...t(w) }, { id: t(o).contentId, ref: (x) => {
    r.value = t(mt)(x);
  }, role: "listbox", "data-state": t(o).open.value ? "open" : "closed", dir: t(o).dir.value, style: { display: "flex", flexDirection: "column", outline: "none" }, onContextmenu: h[0] || (h[0] = X(() => {
  }, ["prevent"])), onPlaced: h[1] || (h[1] = (x) => g.value = true), onKeydown: i }), { default: y(() => [$(p.$slots, "default")]), _: 3 }, 16, ["id", "data-state", "dir", "onKeydown"]))]), _: 3 })]), _: 3 })]), _: 3 }));
} }), Mt = R({ inheritAttrs: false, __name: "SelectProvider", props: { context: {} }, setup(n) {
  return ke(n.context), $e(At), (e, f) => $(e.$slots, "default");
} }), Nt = { key: 1 }, Ft = R({ inheritAttrs: false, __name: "SelectContent", props: { forceMount: { type: Boolean }, position: {}, bodyLock: { type: Boolean }, side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"], setup(n, { emit: s }) {
  const e = n, o = pt(e, s), d = j(), m = I();
  z(() => {
    m.value = new DocumentFragment();
  });
  const r = I(), c = M(() => e.forceMount || d.open.value);
  return (a, _) => {
    var _a;
    return c.value ? (T(), D(t(vt), { key: 0, ref_key: "presenceRef", ref: r, present: true }, { default: y(() => [C(Ot, te(oe({ ...t(o), ...a.$attrs })), { default: y(() => [$(a.$slots, "default")]), _: 3 }, 16)]), _: 3 }, 512)) : !((_a = r.value) == null ? void 0 : _a.present) && m.value ? (T(), L("div", Nt, [(T(), D(Qe, { to: m.value }, [C(Mt, { context: t(d) }, { default: y(() => [$(a.$slots, "default")]), _: 3 }, 8, ["context"])], 8, ["to"]))])) : ee("", true);
  };
} }), [Re, Ht] = ae("SelectItem"), Lt = R({ __name: "SelectItem", props: { value: {}, disabled: { type: Boolean }, textValue: {}, asChild: { type: Boolean }, as: {} }, emits: ["select"], setup(n, { emit: s }) {
  const e = n, f = s, { disabled: o } = pe(e), d = j(), m = le(), { forwardRef: r, currentElement: c } = Y(), { CollectionItem: a } = Z(), _ = M(() => {
    var _a;
    return de((_a = d.modelValue) == null ? void 0 : _a.value, e.value, d.by);
  }), v = I(false), b = I(e.textValue ?? ""), g = Be(void 0, "reka-select-item-text"), u = "select.select";
  async function E(l) {
    if (l.defaultPrevented) return;
    const w = { originalEvent: l, value: e.value };
    xt(u, P, w);
  }
  async function P(l) {
    await G(), f("select", l), !l.defaultPrevented && (o.value || (d.onValueChange(e.value), d.multiple.value || d.onOpenChange(false)));
  }
  async function V(l) {
    var _a;
    await G(), !l.defaultPrevented && (o.value ? (_a = m.onItemLeave) == null ? void 0 : _a.call(m) : l.currentTarget.focus({ preventScroll: true }));
  }
  async function k(l) {
    var _a;
    await G(), !l.defaultPrevented && l.currentTarget === Ct() && ((_a = m.onItemLeave) == null ? void 0 : _a.call(m));
  }
  async function i(l) {
    var _a;
    await G(), !(l.defaultPrevented || ((_a = m.searchRef) == null ? void 0 : _a.value) !== "" && l.key === " ") && (It.includes(l.key) && E(l), l.key === " " && l.preventDefault());
  }
  if (e.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return z(() => {
    c.value && m.itemRefCallback(c.value, e.value, e.disabled);
  }), Ht({ value: e.value, disabled: o, textId: g, isSelected: _, onItemTextChange: (l) => {
    b.value = ((b.value || (l == null ? void 0 : l.textContent)) ?? "").trim();
  } }), (l, w) => (T(), D(t(a), { value: { textValue: b.value } }, { default: y(() => [C(t(K), { ref: t(r), role: "option", "aria-labelledby": t(g), "data-highlighted": v.value ? "" : void 0, "aria-selected": _.value, "data-state": _.value ? "checked" : "unchecked", "aria-disabled": t(o) || void 0, "data-disabled": t(o) ? "" : void 0, tabindex: t(o) ? void 0 : -1, as: l.as, "as-child": l.asChild, onFocus: w[0] || (w[0] = (p) => v.value = true), onBlur: w[1] || (w[1] = (p) => v.value = false), onPointerup: E, onPointerdown: w[2] || (w[2] = (p) => {
    p.currentTarget.focus({ preventScroll: true });
  }), onTouchend: w[3] || (w[3] = X(() => {
  }, ["prevent", "stop"])), onPointermove: V, onPointerleave: k, onKeydown: i }, { default: y(() => [$(l.$slots, "default")]), _: 3 }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])]), _: 3 }, 8, ["value"]));
} }), Kt = R({ __name: "SelectItemIndicator", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = Re();
  return (f, o) => t(e).isSelected.value ? (T(), D(t(K), W({ key: 0, "aria-hidden": "true" }, s), { default: y(() => [$(f.$slots, "default")]), _: 3 }, 16)) : ee("", true);
} }), Wt = R({ inheritAttrs: false, __name: "SelectItemText", props: { asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, e = j(), f = le(), o = Re(), { forwardRef: d, currentElement: m } = Y(), r = M(() => {
    var _a, _b;
    return { value: o.value, disabled: o.disabled.value, textContent: ((_a = m.value) == null ? void 0 : _a.textContent) ?? ((_b = o.value) == null ? void 0 : _b.toString()) ?? "" };
  });
  return z(() => {
    m.value && (o.onItemTextChange(m.value), f.itemTextRefCallback(m.value, o.value, o.disabled.value), e.onOptionAdd(r.value));
  }), Je(() => {
    e.onOptionRemove(r.value);
  }), (c, a) => (T(), D(t(K), W({ id: t(o).textId, ref: t(d) }, { ...s, ...c.$attrs }), { default: y(() => [$(c.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), qt = R({ __name: "SelectViewport", props: { nonce: {}, asChild: { type: Boolean }, as: {} }, setup(n) {
  const s = n, { nonce: e } = pe(s), f = Ke(e), o = le(), d = o.position === "item-aligned" ? $t() : void 0, { forwardRef: m, currentElement: r } = Y();
  z(() => {
    o == null ? void 0 : o.onViewportChange(r.value);
  });
  const c = I(0);
  function a(_) {
    const v = _.currentTarget, { shouldExpandOnScrollRef: b, contentWrapper: g } = d ?? {};
    if ((b == null ? void 0 : b.value) && (g == null ? void 0 : g.value)) {
      const u = Math.abs(c.value - v.scrollTop);
      if (u > 0) {
        const E = window.innerHeight - O * 2, P = Number.parseFloat(g.value.style.minHeight), V = Number.parseFloat(g.value.style.height), k = Math.max(P, V);
        if (k < E) {
          const i = k + u, l = Math.min(E, i), w = i - l;
          g.value.style.height = `${l}px`, g.value.style.bottom === "0px" && (v.scrollTop = w > 0 ? w : 0, g.value.style.justifyContent = "flex-end");
        }
      }
    }
    c.value = v.scrollTop;
  }
  return (_, v) => (T(), L(fe, null, [C(t(K), W({ ref: t(m), "data-reka-select-viewport": "", role: "presentation" }, { ..._.$attrs, ...s }, { style: { position: "relative", flex: 1, overflow: "hidden auto" }, onScroll: a }), { default: y(() => [$(_.$slots, "default")]), _: 3 }, 16), C(t(K), { as: "style", nonce: t(f) }, { default: y(() => v[0] || (v[0] = [ne(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])), _: 1 }, 8, ["nonce"])], 64));
} }), Ut = R({ __name: "SelectValue", props: { placeholder: { default: "" }, asChild: { type: Boolean }, as: { default: "span" } }, setup(n) {
  const s = n, { forwardRef: e, currentElement: f } = Y(), o = j();
  z(() => {
    o.valueElement = f;
  });
  const d = M(() => {
    var _a;
    let r = [];
    const c = Array.from(o.optionsSet.value), a = (_) => c.find((v) => v.value === _);
    return Array.isArray(o.modelValue.value) ? r = o.modelValue.value.map((_) => {
      var _a2;
      return ((_a2 = a(_)) == null ? void 0 : _a2.textContent) ?? "";
    }) : r = [((_a = a(o.modelValue.value)) == null ? void 0 : _a.textContent) ?? ""], r.filter(Boolean);
  }), m = M(() => d.value.length ? d.value.join(", ") : s.placeholder);
  return (r, c) => (T(), D(t(K), { ref: t(e), as: r.as, "as-child": r.asChild, style: { pointerEvents: "none" }, "data-placeholder": d.value.length ? void 0 : s.placeholder }, { default: y(() => [$(r.$slots, "default", { selectedLabel: d.value, modelValue: t(o).modelValue.value }, () => [ne(Ee(m.value), 1)])]), _: 3 }, 8, ["as", "as-child", "data-placeholder"]));
} }), zt = { flex: "~ gap-x-32 gap-y-20 wrap items-baseline" }, jt = { "nq-label": "", text: "f-xs neutral-700" }, Yt = { "bg-neutral-100": "" };
var De = ((n) => (n.V1 = "1.0", n.V2 = "2.0", n))(De || {});
const go = R({ __name: "index", props: lt(), setup(n) {
  const s = n, e = M(() => s.slice.items[1]), f = M(() => s.slice.items[0]), o = st("version", "2.0"), { define: d, reuse: m } = ot(), r = et("articleEl");
  return nt(r, () => {
    at(":is(header,article) img", { margin: 24, background: "rgb(var(--nq-neutral-0) / 1)" });
  }), (c, a) => {
    const _ = Ut, v = Bt, b = Wt, g = Kt, u = Lt, E = qt, P = Ft, V = kt, k = Pt, i = qe, l = We, w = Ue, p = ze;
    return T(), L("div", null, [C(t(d), null, { default: y(({ headline: h, subline: x, content: B, date: S }) => [C(l, { headline: h, subline: x, "bg-neutral-100": "" }, { bottom: y(() => [F("div", zt, [C(k, { modelValue: t(o), "onUpdate:modelValue": a[0] || (a[0] = (A) => tt(o) ? o.value = A : null) }, { default: y(() => [C(v, { flex: "~ items-center gap-12", "rounded-full": "", "px-16": "", "py-10": "", "outline-none": "", "bg-gradient-green": "" }, { default: y(() => [C(_, { text: "f-sm white", "nq-label": "" }), a[1] || (a[1] = F("div", { "i-nimiq:triangle-down": "", text: "10 white" }, null, -1))]), _: 1 }), C(V, null, { default: y(() => [C(P, { "side-offset": 5, "z-10": "", "min-w-120": "", "w-full": "", "rounded-18": "", "bg-white": "", shadow: "", "motion-safe:animate": "fade-in duration-100ms ease-out" }, { default: y(() => [C(E, { "p-4": "" }, { default: y(() => [(T(), L(fe, null, Ie(De, (A) => C(u, { key: A, value: A, flex: "~ gap-8 items-center", "cursor-pointer": "", "rounded-14": "", "px-16": "", "py-10": "", "outline-none": "", "transition-colors": "", "hocus:bg-neutral-200": "" }, { default: y(() => [C(b, { text: "14", "nq-label": "" }, { default: y(() => [ne(" Version " + Ee(A), 1)]), _: 2 }, 1024), C(g, { "as-childr": "" }, { default: y(() => a[2] || (a[2] = [F("div", { "i-nimiq:triangle-left": "", text: "10 neutral-800" }, null, -1)])), _: 1 })]), _: 2 }, 1032, ["value"])), 64))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"]), F("span", jt, [a[3] || (a[3] = ne(" Updated ")), C(i, { datetime: ("getDate" in c ? c.getDate : t(je))(S), month: "long", day: "numeric", year: "numeric" }, null, 8, ["datetime"])])])]), _: 2 }, 1032, ["headline", "subline"]), F("section", Yt, [C(w, { wrapper: "article", "nq-prose": "", field: B, "text-20": "" }, null, 8, ["field"])])]), _: 1 }), F("div", { ref_key: "articleEl", ref: r }, [ye(F("div", null, [C(t(m), te(oe(t(f))), null, 16)], 512), [[be, t(o) === "2.0"]]), ye(F("div", null, [C(t(m), te(oe(t(e))), null, 16)], 512), [[be, t(o) === "1.0"]])], 512), C(p, { "f-mt-xl": "" })]);
  };
} });
export {
  go as default
};
