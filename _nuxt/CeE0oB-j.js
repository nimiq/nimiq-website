import { M as At, N as Ft, O as Ht, P as at, Q as qt, d as q, b as O, o as b, w as y, R as Z, m as de, u as e, S as st, T as zt, B as N, U as ut, j as F, V as he, a as x, W as jt, X as dt, f as B, E as ke, c as D, F as X, L as le, H as nt, e as $, t as I, Y as xe, g as W, v as ue, r as Q, n as ne, Z as Vt, h as _e, $ as Wt, a0 as Kt, a1 as ct, a2 as Gt, G as Ut, s as Xt, y as Yt, _ as Pe, i as Fe, p as Zt, a3 as Jt, D as Qt, a4 as ea } from "./7tyaNgEA.js";
import { a as ta, b as ft } from "./CD5FwXF0.js";
import { u as He, S as R } from "./em0aKPkT.js";
import { P as re, u as oe, a as aa, r as pt, c as qe, b as mt, d as na, e as oa, f as ze, i as ot, g as Oe, h as ia } from "./BqwFAzj-.js";
import { _ as la, a as ra, b as sa, c as ua, d as da } from "./Ce-DOn_-.js";
import { u as vt, _ as ca, a as fa, b as pa, c as ma } from "./BuApbZ3h.js";
import { _ as va } from "./D0ibNwky.js";
import { _ as ga } from "./C7IVxsr-.js";
import { u as $e, _ as ha } from "./e5EsY3M9.js";
import { u as wa } from "./Da46OeJF.js";
import { g as ge, _ as ya } from "./6j_b9UX3.js";
import { u as ba } from "./DptPnj5y.js";
import { b as _a, d as ka, e as xa, f as $a } from "./-SGvg42Q.js";
import { u as Sa } from "./CynVbIQT.js";
import { _ as Ma } from "./DeL1xAR-.js";
import { g as gt } from "./C3sJ3Yu7.js";
import { _ as Ca } from "./BBaoMBlA.js";
import "./BmXLCl62.js";
import "./CHIgUVhi.js";
import "./8Lad1M9Y.js";
import "./AcnOGanz.js";
function Ta(n = {}) {
  var _a2;
  const a = at(""), i = at(n.politeness || "polite"), o = qt();
  function t(s = "", _ = "polite") {
    a.value = s, i.value = _;
  }
  function u(s) {
    return t(s, "polite");
  }
  function l(s) {
    return t(s, "assertive");
  }
  function d() {
    var _a3;
    t((_a3 = document == null ? void 0 : document.title) == null ? void 0 : _a3.trim(), i.value);
  }
  function h() {
    var _a3;
    (_a3 = o == null ? void 0 : o.hooks) == null ? void 0 : _a3.removeHook("dom:rendered", d);
  }
  return d(), (_a2 = o == null ? void 0 : o.hooks) == null ? void 0 : _a2.hook("dom:rendered", () => {
    d();
  }), { _cleanup: h, message: a, politeness: i, set: t, polite: u, assertive: l };
}
function Na(n = {}) {
  const a = At(), i = a._routeAnnouncer || (a._routeAnnouncer = Ta(n));
  return n.politeness !== i.politeness.value && (i.politeness.value = n.politeness || "polite"), Ft() && (a._routeAnnouncerDeps || (a._routeAnnouncerDeps = 0), a._routeAnnouncerDeps++, Ht(() => {
    a._routeAnnouncerDeps--, a._routeAnnouncerDeps === 0 && (i._cleanup(), delete a._routeAnnouncer);
  })), i;
}
const Da = q({ __name: "MenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(n) {
  const a = n;
  return (i, o) => (b(), O(e(re), de(a, { role: "separator", "aria-orientation": "horizontal" }), { default: y(() => [Z(i.$slots, "default")]), _: 3 }, 16));
} }), Ea = q({ __name: "DropdownMenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(n) {
  const a = n;
  return oe(), (i, o) => (b(), O(e(Da), st(zt(a)), { default: y(() => [Z(i.$slots, "default")]), _: 3 }, 16));
} });
function Re(n) {
  return n ? "open" : "closed";
}
function ht(n, a) {
  return `${n}-trigger-${a}`;
}
function je(n, a) {
  return `${n}-content-${a}`;
}
const La = "navigationMenu.linkSelect", Le = "navigationMenu.rootContentDismiss";
function Ae(n) {
  const a = [], i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const t = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || t ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; i.nextNode(); ) a.push(i.currentNode);
  return a;
}
function wt(n) {
  const a = ge();
  return n.some((i) => i === a ? true : (i.focus(), ge() !== a));
}
function Oa(n) {
  return n.forEach((a) => {
    a.dataset.tabindex = a.getAttribute("tabindex") || "", a.setAttribute("tabindex", "-1");
  }), () => {
    n.forEach((a) => {
      const i = a.dataset.tabindex;
      a.setAttribute("tabindex", i);
    });
  };
}
function yt(n) {
  return (a) => a.pointerType === "mouse" ? n(a) : void 0;
}
const [pe, Pa] = qe(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), Ra = q({ __name: "NavigationMenuRoot", props: { modelValue: { default: void 0 }, defaultValue: {}, dir: {}, orientation: { default: "horizontal" }, delayDuration: { default: 200 }, skipDelayDuration: { default: 300 }, disableClickTrigger: { type: Boolean, default: false }, disableHoverTrigger: { type: Boolean, default: false }, disablePointerLeaveClose: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:modelValue"], setup(n, { emit: a }) {
  const i = n, t = aa(i, "modelValue", a, { defaultValue: i.defaultValue ?? "", passive: i.modelValue === void 0 }), u = N(""), { forwardRef: l, currentElement: d } = oe(), h = N(), s = N(), _ = N(), { getItems: p, CollectionSlot: g } = $e({ key: "NavigationMenu", isProvider: true }), { delayDuration: w, skipDelayDuration: m, dir: r, disableClickTrigger: M, disableHoverTrigger: L, unmountOnHide: f } = ut(i), c = wa(r), S = pt(false, m), k = F(() => t.value !== "" || S.value ? 150 : w.value), C = na((v) => {
    typeof v == "string" && (u.value = t.value, t.value = v);
  }, k);
  return he(() => {
    if (!t.value) return;
    const v = p().map((E) => E.ref);
    _.value = v.find((E) => E.id.includes(t.value));
  }), Pa({ isRootMenu: true, modelValue: t, previousValue: u, baseId: mt(void 0, "reka-navigation-menu"), disableClickTrigger: M, disableHoverTrigger: L, dir: c, unmountOnHide: f, orientation: i.orientation, rootNavigationMenu: d, indicatorTrack: h, activeTrigger: _, onIndicatorTrackChange: (v) => {
    h.value = v;
  }, viewport: s, onViewportChange: (v) => {
    s.value = v;
  }, onTriggerEnter: (v) => {
    C(v);
  }, onTriggerLeave: () => {
    S.value = true, C("");
  }, onContentEnter: () => {
    C();
  }, onContentLeave: () => {
    i.disablePointerLeaveClose || C("");
  }, onItemSelect: (v) => {
    u.value = t.value, t.value = v;
  }, onItemDismiss: () => {
    u.value = t.value, t.value = "";
  } }), (v, E) => (b(), O(e(g), null, { default: y(() => [x(e(re), { ref: e(l), "aria-label": "Main", as: v.as, "as-child": v.asChild, "data-orientation": v.orientation, dir: e(c), "data-reka-navigation-menu": "" }, { default: y(() => [Z(v.$slots, "default", { modelValue: e(t) })]), _: 3 }, 8, ["as", "as-child", "data-orientation", "dir"])]), _: 3 }));
} }), [Ve, Ia] = qe("NavigationMenuItem"), Ba = q({ __name: "NavigationMenuItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "li" } }, setup(n) {
  const a = n;
  oe();
  const { getItems: i } = $e({ key: "NavigationMenu" }), o = pe(), t = mt(a.value), u = N(), l = N(), d = je(o.baseId, t);
  let h = () => ({});
  const s = N(false);
  async function _(m = "start") {
    const r = document.getElementById(d);
    if (r) {
      h();
      const M = Ae(r);
      M.length && wt(m === "start" ? M : M.reverse());
    }
  }
  function p() {
    const m = document.getElementById(d);
    if (m) {
      const r = Ae(m);
      r.length && (h = Oa(r));
    }
  }
  Ia({ value: t, contentId: d, triggerRef: u, focusProxyRef: l, wasEscapeCloseRef: s, onEntryKeyDown: _, onFocusProxyEnter: _, onContentFocusOutside: p, onRootContentClose: p });
  function g() {
    var _a2;
    o.onItemDismiss(), (_a2 = u.value) == null ? void 0 : _a2.focus();
  }
  function w(m) {
    const r = ge();
    if (m.keyCode === 32 || m.key === "Enter") if (o.modelValue.value === t) {
      g(), m.preventDefault();
      return;
    } else {
      m.target.click(), m.preventDefault();
      return;
    }
    const M = i().filter((f) => {
      var _a2;
      return (_a2 = f.ref.parentElement) == null ? void 0 : _a2.hasAttribute("data-menu-item");
    }).map((f) => f.ref);
    if (!M.includes(r)) return;
    const L = vt(m, r, void 0, { itemsArray: M, loop: false });
    L && (L == null ? void 0 : L.focus()), m.preventDefault(), m.stopPropagation();
  }
  return (m, r) => (b(), O(e(re), { "as-child": m.asChild, as: m.as, "data-menu-item": "", onKeydown: jt(w, ["up", "down", "left", "right", "home", "end", "space"]) }, { default: y(() => [Z(m.$slots, "default")]), _: 3 }, 8, ["as-child", "as"]));
} }), Aa = q({ __name: "NavigationMenuContentImpl", props: { disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(n, { emit: a }) {
  const i = n, o = a, { getItems: t } = $e({ key: "NavigationMenu" }), { forwardRef: u, currentElement: l } = oe(), d = pe(), h = Ve(), s = ht(d.baseId, h.value), _ = je(d.baseId, h.value), p = N(null), g = F(() => {
    const f = t().map((E) => E.ref.id.split("trigger-")[1]);
    d.dir.value === "rtl" && f.reverse();
    const c = f.indexOf(d.modelValue.value), S = f.indexOf(d.previousValue.value), k = h.value === d.modelValue.value, C = S === f.indexOf(h.value);
    if (!k && !C) return p.value;
    const v = (() => {
      if (c !== S) {
        if (k && S !== -1) return c > S ? "from-end" : "from-start";
        if (C && c !== -1) return c > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return p.value = v, v;
  });
  function w(f) {
    var _a2, _b;
    if (o("focusOutside", f), o("interactOutside", f), f.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && f.preventDefault(), !f.defaultPrevented) {
      h.onContentFocusOutside();
      const S = f.target;
      ((_b = (_a2 = d.rootNavigationMenu) == null ? void 0 : _a2.value) == null ? void 0 : _b.contains(S)) && f.preventDefault();
    }
  }
  function m(f) {
    var _a2;
    if (o("pointerDownOutside", f), !f.defaultPrevented) {
      const c = f.target, S = t().some((C) => C.ref.contains(c)), k = d.isRootMenu && ((_a2 = d.viewport.value) == null ? void 0 : _a2.contains(c));
      (S || k || !d.isRootMenu) && f.preventDefault();
    }
  }
  he((f) => {
    const c = l.value;
    if (d.isRootMenu && c) {
      const S = () => {
        var _a2;
        d.onItemDismiss(), h.onRootContentClose(), c.contains(ge()) && ((_a2 = h.triggerRef.value) == null ? void 0 : _a2.focus());
      };
      c.addEventListener(Le, S), f(() => c.removeEventListener(Le, S));
    }
  });
  function r(f) {
    var _a2, _b;
    o("escapeKeyDown", f), f.defaultPrevented || (d.onItemDismiss(), (_b = (_a2 = h.triggerRef) == null ? void 0 : _a2.value) == null ? void 0 : _b.focus(), h.wasEscapeCloseRef.value = true);
  }
  function M(f) {
    var _a2, _b;
    if (f.target.closest("[data-reka-navigation-menu]") !== d.rootNavigationMenu.value) return;
    const c = f.altKey || f.ctrlKey || f.metaKey, S = f.key === "Tab" && !c, k = Ae(f.currentTarget);
    if (S) {
      const v = ge(), E = k.findIndex((te) => te === v), ie = f.shiftKey ? k.slice(0, E).reverse() : k.slice(E + 1, k.length);
      if (wt(ie)) f.preventDefault();
      else {
        (_a2 = h.focusProxyRef.value) == null ? void 0 : _a2.focus();
        return;
      }
    }
    (_b = vt(f, ge(), void 0, { itemsArray: k, loop: false, enableIgnoredElement: true })) == null ? void 0 : _b.focus();
  }
  function L() {
    var _a2;
    const f = new Event(Le, { bubbles: true, cancelable: true });
    (_a2 = l.value) == null ? void 0 : _a2.dispatchEvent(f);
  }
  return (f, c) => (b(), O(e(ya), de({ id: e(_), ref: e(u), "aria-labelledby": e(s), "data-motion": g.value, "data-state": e(Re)(e(d).modelValue.value === e(h).value), "data-orientation": e(d).orientation }, i, { onKeydown: M, onEscapeKeyDown: r, onPointerDownOutside: m, onFocusOutside: w, onDismiss: L }), { default: y(() => [Z(f.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
} }), Fa = q({ inheritAttrs: false, __name: "NavigationMenuContent", props: { forceMount: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(n, { emit: a }) {
  const i = n, o = a, t = ba(oa(i, "forceMount"), o), { forwardRef: u } = oe(), l = pe(), d = Ve(), h = F(() => d.value === l.modelValue.value), s = F(() => l.viewport.value && !l.modelValue.value && l.previousValue.value ? l.previousValue.value === d.value : false);
  return (_, p) => (b(), O(dt, { to: e(ot) && e(l).viewport.value ? e(l).viewport.value : "body", disabled: e(ot) && e(l).viewport.value ? !e(l).viewport.value : true }, [x(e(ze), { present: _.forceMount || h.value || s.value, "force-mount": !e(l).unmountOnHide.value }, { default: y(({ present: g }) => [x(Aa, de({ ref: e(u), "data-state": e(Re)(h.value), style: { pointerEvents: !h.value && e(l).isRootMenu ? "none" : void 0 } }, { ..._.$attrs, ...e(t) }, { hidden: !g, onPointerenter: p[0] || (p[0] = (w) => e(l).onContentEnter(e(d).value)), onPointerleave: p[1] || (p[1] = (w) => e(yt)(() => e(l).onContentLeave())(w)), onPointerDownOutside: p[2] || (p[2] = (w) => o("pointerDownOutside", w)), onFocusOutside: p[3] || (p[3] = (w) => o("focusOutside", w)), onInteractOutside: p[4] || (p[4] = (w) => o("interactOutside", w)) }), { default: y(() => [Z(_.$slots, "default")]), _: 2 }, 1040, ["data-state", "style", "hidden"])]), _: 3 }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
} }), Ha = q({ inheritAttrs: false, __name: "NavigationMenuIndicator", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(n) {
  const a = n, { forwardRef: i } = oe(), o = pe(), t = N(), u = F(() => o.orientation === "horizontal"), l = F(() => !!o.modelValue.value), { activeTrigger: d } = o;
  function h() {
    d.value && (t.value = { size: u.value ? d.value.offsetWidth : d.value.offsetHeight, position: u.value ? d.value.offsetLeft : d.value.offsetTop });
  }
  return he(() => {
    o.modelValue.value && h();
  }), Oe(d, h), Oe(o.indicatorTrack, h), (s, _) => e(o).indicatorTrack.value ? (b(), O(dt, { key: 0, to: e(o).indicatorTrack.value }, [x(e(ze), { present: s.forceMount || l.value }, { default: y(() => [x(e(re), de({ ref: e(i), "aria-hidden": "true", "data-state": l.value ? "visible" : "hidden", "data-orientation": e(o).orientation, "as-child": a.asChild, as: s.as, style: { ...t.value ? { "--reka-navigation-menu-indicator-size": `${t.value.size}px`, "--reka-navigation-menu-indicator-position": `${t.value.position}px` } : {} } }, s.$attrs), { default: y(() => [Z(s.$slots, "default")]), _: 3 }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])]), _: 3 }, 8, ["present"])], 8, ["to"])) : B("", true);
} }), qa = q({ __name: "NavigationMenuLink", props: { active: { type: Boolean }, asChild: { type: Boolean }, as: { default: "a" } }, emits: ["select"], setup(n, { emit: a }) {
  const i = n, o = a, { CollectionItem: t } = $e({ key: "NavigationMenu" });
  oe();
  async function u(l) {
    var _a2;
    const d = new CustomEvent(La, { bubbles: true, cancelable: true, detail: { originalEvent: l } });
    if (o("select", d), !d.defaultPrevented && !l.metaKey) {
      const h = new CustomEvent(Le, { bubbles: true, cancelable: true });
      (_a2 = l.target) == null ? void 0 : _a2.dispatchEvent(h);
    }
  }
  return (l, d) => (b(), O(e(t), null, { default: y(() => [x(e(re), { as: l.as, "data-active": l.active ? "" : void 0, "aria-current": l.active ? "page" : void 0, "as-child": i.asChild, onClick: u }, { default: y(() => [Z(l.$slots, "default")]), _: 3 }, 8, ["as", "data-active", "aria-current", "as-child"])]), _: 3 }));
} }), za = q({ inheritAttrs: false, __name: "NavigationMenuList", props: { asChild: { type: Boolean }, as: { default: "ul" } }, setup(n) {
  const a = n, i = pe(), { forwardRef: o, currentElement: t } = oe();
  return ke(() => {
    i.onIndicatorTrackChange(t.value);
  }), (u, l) => (b(), O(e(re), { ref: e(o), style: { position: "relative" } }, { default: y(() => [x(e(re), de(u.$attrs, { "as-child": a.asChild, as: u.as, "data-orientation": e(i).orientation }), { default: y(() => [Z(u.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-orientation"])]), _: 3 }, 512));
} }), ja = ["aria-owns"], Va = q({ inheritAttrs: false, __name: "NavigationMenuTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const a = n, i = pe(), o = Ve(), { CollectionItem: t } = $e({ key: "NavigationMenu" }), { forwardRef: u, currentElement: l } = oe(), d = N(""), h = N(""), s = pt(false, 300), _ = N(false), p = F(() => o.value === i.modelValue.value);
  ke(() => {
    o.triggerRef = l, d.value = ht(i.baseId, o.value), h.value = je(i.baseId, o.value);
  });
  function g() {
    i.disableHoverTrigger.value || (_.value = false, o.wasEscapeCloseRef.value = false);
  }
  function w(c) {
    if (!i.disableHoverTrigger.value && c.pointerType === "mouse") {
      if (a.disabled || _.value || o.wasEscapeCloseRef.value || s.value) return;
      i.onTriggerEnter(o.value), s.value = true;
    }
  }
  function m(c) {
    if (!i.disableHoverTrigger.value && c.pointerType === "mouse") {
      if (a.disabled) return;
      i.onTriggerLeave(), s.value = false;
    }
  }
  function r(c) {
    c.pointerType === "mouse" && i.disableClickTrigger.value || s.value || (p.value ? i.onItemSelect("") : i.onItemSelect(o.value), _.value = p.value);
  }
  function M(c) {
    const k = { horizontal: "ArrowDown", vertical: i.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
    p.value && c.key === k && (o.onEntryKeyDown(), c.preventDefault(), c.stopPropagation());
  }
  function L(c) {
    o.focusProxyRef.value = ia(c);
  }
  function f(c) {
    const S = document.getElementById(o.contentId), k = c.relatedTarget, C = k === l.value, v = S == null ? void 0 : S.contains(k);
    (C || !v) && o.onFocusProxyEnter(C ? "start" : "end");
  }
  return (c, S) => (b(), D(X, null, [x(e(t), null, { default: y(() => [x(e(re), de({ id: d.value, ref: e(u), disabled: c.disabled, "data-disabled": c.disabled ? "" : void 0, "data-state": e(Re)(p.value), "data-navigation-menu-trigger": "", "aria-expanded": p.value, "aria-controls": h.value, "as-child": a.asChild, as: c.as }, c.$attrs, { onPointerenter: g, onPointermove: w, onPointerleave: m, onClick: r, onKeydown: M }), { default: y(() => [Z(c.$slots, "default")]), _: 3 }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"])]), _: 3 }), p.value ? (b(), D(X, { key: 0 }, [x(e(ha), { ref: L, "aria-hidden": "true", tabindex: 0, onFocus: f }), e(i).viewport ? (b(), D("span", { key: 0, "aria-owns": h.value }, null, 8, ja)) : B("", true)], 64)) : B("", true)], 64));
} }), Wa = q({ inheritAttrs: false, __name: "NavigationMenuViewport", props: { forceMount: { type: Boolean }, align: { default: "center" }, asChild: { type: Boolean }, as: {} }, setup(n) {
  var _a2;
  const a = n, { forwardRef: i, currentElement: o } = oe(), t = pe(), { activeTrigger: u, rootNavigationMenu: l, modelValue: d } = t, h = N(), s = N(), _ = F(() => !!t.modelValue.value);
  le(o, () => {
    t.onViewportChange(o.value);
  });
  const p = N();
  le([d, _], () => {
    o.value && requestAnimationFrame(() => {
      var _a3;
      const w = (_a3 = o.value) == null ? void 0 : _a3.querySelector("[data-state=open]");
      p.value = w;
    });
  }, { immediate: true, flush: "post" });
  function g() {
    if (p.value && u.value && l.value) {
      const w = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, r = l.value.getBoundingClientRect(), M = u.value.getBoundingClientRect(), { offsetWidth: L, offsetHeight: f } = p.value, c = M.left - r.left, S = M.top - r.top;
      let k = null, C = null;
      switch (a.align) {
        case "start":
          k = c, C = S;
          break;
        case "end":
          k = c - L + M.width, C = S - f + M.height;
          break;
        default:
          k = c - L / 2 + M.width / 2, C = S - f / 2 + M.height / 2;
      }
      const v = 10;
      k + r.left < v && (k = v - r.left);
      const E = k + r.left + L;
      E > w - v && (k -= E - w + v, k < v - r.left && (k = v - r.left)), C + r.top < v && (C = v - r.top);
      const G = C + r.top + f;
      G > m - v && (C -= G - m + v, C < v - r.top && (C = v - r.top)), k = Math.round(k), C = Math.round(C), s.value = { left: k, top: C };
    }
  }
  return Oe(p, () => {
    p.value && (h.value = { width: p.value.offsetWidth, height: p.value.offsetHeight }, g());
  }), Oe([(_a2 = globalThis.document) == null ? void 0 : _a2.body, l], () => {
    g();
  }), (w, m) => (b(), O(e(ze), { present: w.forceMount || _.value, "force-mount": !e(t).unmountOnHide.value, onAfterLeave: m[2] || (m[2] = () => {
    h.value = void 0, s.value = void 0;
  }) }, { default: y(({ present: r }) => {
    var _a3, _b, _c, _d;
    return [x(e(re), de(w.$attrs, { ref: e(i), as: w.as, "as-child": w.asChild, "data-state": e(Re)(_.value), "data-orientation": e(t).orientation, style: { pointerEvents: !_.value && e(t).isRootMenu ? "none" : void 0, "--reka-navigation-menu-viewport-width": h.value ? `${(_a3 = h.value) == null ? void 0 : _a3.width}px` : void 0, "--reka-navigation-menu-viewport-height": h.value ? `${(_b = h.value) == null ? void 0 : _b.height}px` : void 0, "--reka-navigation-menu-viewport-left": s.value ? `${(_c = s.value) == null ? void 0 : _c.left}px` : void 0, "--reka-navigation-menu-viewport-top": s.value ? `${(_d = s.value) == null ? void 0 : _d.top}px` : void 0 }, hidden: !r, onPointerenter: m[0] || (m[0] = (M) => e(t).onContentEnter(e(t).modelValue.value)), onPointerleave: m[1] || (m[1] = (M) => e(yt)(() => e(t).onContentLeave())(M)) }), { default: y(() => [Z(w.$slots, "default")]), _: 2 }, 1040, ["as", "as-child", "data-state", "data-orientation", "style", "hidden"])];
  }), _: 3 }, 8, ["present", "force-mount"]));
} }), Ka = q({ name: "NuxtRouteAnnouncer", props: { atomic: { type: Boolean, default: false }, politeness: { type: String, default: "polite" } }, setup(n, { slots: a, expose: i }) {
  const { set: o, polite: t, assertive: u, message: l, politeness: d } = Na({ politeness: n.politeness });
  return i({ set: o, polite: t, assertive: u, message: l, politeness: d }), () => nt("span", { class: "nuxt-route-announcer", style: { position: "absolute" } }, nt("span", { role: "alert", "aria-live": d.value, "aria-atomic": n.atomic, style: { border: "0", clip: "rect(0 0 0 0)", "clip-path": "inset(50%)", height: "1px", width: "1px", overflow: "hidden", position: "absolute", "white-space": "nowrap", "word-wrap": "normal", margin: "-1px", padding: "0" } }, a.default ? a.default({ message: l.value }) : l.value));
} }), Ga = { role: "banner", p: "x-32 t-20 b-24 md:y-20", "aria-label": "Announcement", relative: "", "z-2": "", "w-full": "", "of-hidden": "", "bg-darkblue": "", flex: "~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16" }, Ua = { text: "md white", "z-1": "", "font-semibold": "" }, Xa = q({ __name: "AnnouncementBanner", props: { announcementBannerHeadline: {}, announcementBannerCtaLink: {}, announcementBannerCtaLabel: {} }, setup(n) {
  return (a, i) => {
    const o = xe;
    return b(), D("div", Ga, [$("p", Ua, I(n.announcementBannerHeadline), 1), ("hasLink" in a ? a.hasLink : e(ta))(n.announcementBannerCtaLink) ? (b(), O(o, { key: 0, "internal-component": "a", field: n.announcementBannerCtaLink, "z-1": "", "mx-0": "", "nq-pill-secondary": "", "hocus:bg-neutral-300": "" }, { default: y(() => [W(I(n.announcementBannerCtaLabel), 1)]), _: 1 }, 8, ["field"])) : B("", true), i[0] || (i[0] = $("div", { absolute: "", "inset-0": "", "mx-auto": "", "max-w-3120": "", "w-full": "" }, [$("div", { top: "36 lg:40", right: "-300 lg:-261", absolute: "", "h-159": "", "w-606": "", "rounded-8": "", "op-30": "", "blur-120": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } }), $("div", { top: "36 lg:40", left: "-300 lg:-261", absolute: "", "h-159": "", "w-606": "", "rounded-8": "", "op-30": "", "blur-120": "", "max-md:hidden": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } })], -1)), i[1] || (i[1] = $("div", { absolute: "", "inset-0": "", "op-10": "", style: { background: "radial-gradient(78.95% 73.1% at 12.5% 14.72%, #FFFFFF 0%, rgb(var(--nq-neutral-0) / 0.62)) 100%)" } }, null, -1)), i[2] || (i[2] = $("div", { absolute: "", "inset-0": "", "op-10": "", style: { background: "linear-gradient(180deg, rgba(4, 6, 40, 0.5) 0%, rgba(4, 6, 40, 0.25) 50%, rgba(4, 6, 40, 0.5) 100%)" } }, null, -1)), i[3] || (i[3] = $("div", { "max-w": "[calc(100%-64px)]", absolute: "", "inset-auto": "", "top-49": "", "aspect-3.811": "", "w-606": "", "rounded-8": "", "op-80": "", "blur-120": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } }, null, -1)), i[4] || (i[4] = $("div", { absolute: "", "inset-y-0": "", "max-w-1900": "", "w-full": "", "xl:inset-x-0": "", "xl:mx-auto": "" }, [$("div", { "i-announcement:sm-identicons-right": "", absolute: "", "lg:i-announcement:lg-identicons-right": "", "xl:i-announcement:xl-identicons-right": "", right: "-35 lg:-65 xl:-30", top: "-56 md:-60 lg:-80 xl:-33", h: "223 xl:136", w: "220 xl:434" }), $("div", { absolute: "", "lg:i-announcement:lg-identicons-left": "", "md:i-announcement:md-identicons-left": "", "xl:i-announcement:xl-identicons-left": "", left: "-35 lg:-65 xl:-30", top: "-56 md:-60 lg:-80 xl:-33", h: "223 xl:136", w: "220 xl:434" })], -1))]);
  };
} }), Ya = Object.assign(Xa, { __name: "NavigationAnnouncementBanner" }), Za = { key: 0, role: "list", flex: "~ items-center gap-2 wrap", "text-neutral-700": "" }, Ja = q({ __name: "SocialMediaLogosList", props: { items: {} }, async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => He()), a = await a, i(), a), t = F(() => n.items.map((l) => o.value[l]).filter(Boolean)), u = (l) => l.charAt(0).toUpperCase() + l.slice(1);
  return (l, d) => {
    var _a2;
    const h = xe;
    return ((_a2 = e(t)) == null ? void 0 : _a2.length) > 0 ? (b(), D("ul", Za, [(b(true), D(X, null, Q(e(t), ({ platform: s, icon: _, link: p }) => (b(), D("li", { key: s, "self-stretch": "", "justify-self-stretch": "", "aria-label": "Links to some of our social media pages" }, [x(h, { "internal-component": "a", title: u(s), field: p, focusable: "", "h-max": "", flex: "", "rounded-4": "", "p-8": "", bg: "hocus:darkblue/6", "aria-label": `Visit Nimiq on ${s}` }, { default: y(() => [$("div", { class: ne(_) }, null, 2)]), _: 2 }, 1032, ["title", "field", "aria-label"])]))), 128))])) : B("", true);
  };
} }), We = Object.assign(Ja, { __name: "SocialMediaLogosList" });
(function() {
  var n;
  try {
    if (typeof document < "u") {
      var a = document.createElement("style");
      a.nonce = (n = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : n.content, a.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(a);
    }
  } catch (i) {
    console.error("vite-plugin-css-injected-by-js", i);
  }
})();
const Qa = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const en = (n) => typeof n < "u";
function tn(n) {
  return JSON.parse(JSON.stringify(n));
}
function it(n, a, i, o = {}) {
  var t, u, l;
  const { clone: d = false, passive: h = false, eventName: s, deep: _ = false, defaultValue: p, shouldEmit: g } = o, w = Kt(), m = i || (w == null ? void 0 : w.emit) || ((t = w == null ? void 0 : w.$emit) == null ? void 0 : t.bind(w)) || ((l = (u = w == null ? void 0 : w.proxy) == null ? void 0 : u.$emit) == null ? void 0 : l.bind(w == null ? void 0 : w.proxy));
  let r = s;
  a || (a = "modelValue"), r = r || `update:${a.toString()}`;
  const M = (c) => d ? typeof d == "function" ? d(c) : tn(c) : c, L = () => en(n[a]) ? M(n[a]) : p, f = (c) => {
    g ? g(c) && m(r, c) : m(r, c);
  };
  if (h) {
    const c = L(), S = N(c);
    let k = false;
    return le(() => n[a], (C) => {
      k || (k = true, S.value = M(C), ct(() => k = false));
    }), le(S, (C) => {
      !k && (C !== n[a] || _) && f(C);
    }, { deep: _ }), S;
  } else return F({ get() {
    return L();
  }, set(c) {
    f(c);
  } });
}
const [Ke, an] = qe("DrawerRoot"), bt = /* @__PURE__ */ new WeakMap();
function K(n, a, i = false) {
  if (!n || !(n instanceof HTMLElement) || !a) return;
  const o = {};
  Object.entries(a).forEach(([t, u]) => {
    if (t.startsWith("--")) {
      n.style.setProperty(t, u);
      return;
    }
    o[t] = n.style[t], n.style[t] = u;
  }), !i && bt.set(n, o);
}
function nn(n, a) {
  if (!n || !(n instanceof HTMLElement)) return;
  const i = bt.get(n);
  i && Object.entries(i).forEach(([o, t]) => {
    n.style[o] = t;
  });
}
function De(n, a) {
  const i = window.getComputedStyle(n), o = i.transform || i.webkitTransform || i.mozTransform;
  let t = o.match(/^matrix3d\((.+)\)$/);
  return t ? Number.parseFloat(t[1].split(", ")[j(a) ? 13 : 12]) : (t = o.match(/^matrix\((.+)\)$/), t ? Number.parseFloat(t[1].split(", ")[j(a) ? 5 : 4]) : null);
}
function on(n) {
  return 8 * (Math.log(n + 1) - 2);
}
function j(n) {
  switch (n) {
    case "top":
    case "bottom":
      return true;
    case "left":
    case "right":
      return false;
    default:
      return n;
  }
}
function Be(n, a) {
  if (!n) return () => {
  };
  const i = n.style.cssText;
  return Object.assign(n.style, a), () => {
    n.style.cssText = i;
  };
}
function ln(...n) {
  return (...a) => {
    for (const i of n) typeof i == "function" && i(...a);
  };
}
const H = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, _t = 0.4, rn = 0.25, sn = 100, kt = 8, Ee = 16, xt = 26, lt = "vaul-dragging";
function un({ activeSnapPoint: n, snapPoints: a, drawerRef: i, overlayRef: o, fadeFromIndex: t, onSnapPointChange: u, direction: l }) {
  const d = N(typeof window < "u" ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight } : void 0);
  function h() {
    d.value = { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
  }
  ke(() => {
    typeof window < "u" && window.addEventListener("resize", h);
  }), Gt(() => {
    typeof window < "u" && window.removeEventListener("resize", h);
  });
  const s = F(() => (a.value && n.value === a.value[a.value.length - 1]) ?? null), _ = F(() => a.value && a.value.length > 0 && ((t == null ? void 0 : t.value) || (t == null ? void 0 : t.value) === 0) && !Number.isNaN(t == null ? void 0 : t.value) && a.value[(t == null ? void 0 : t.value) ?? -1] === n.value || !a.value), p = F(() => {
    var f;
    return ((f = a.value) == null ? void 0 : f.findIndex((c) => c === n.value)) ?? null;
  }), g = F(() => {
    var f;
    return ((f = a.value) == null ? void 0 : f.map((c) => {
      const S = typeof c == "string";
      let k = 0;
      if (S && (k = Number.parseInt(c, 10)), j(l.value)) {
        const v = S ? k : d.value ? c * d.value.innerHeight : 0;
        return d.value ? l.value === "bottom" ? d.value.innerHeight - v : -d.value.innerHeight + v : v;
      }
      const C = S ? k : d.value ? c * d.value.innerWidth : 0;
      return d.value ? l.value === "right" ? d.value.innerWidth - C : -d.value.innerWidth + C : C;
    })) ?? [];
  }), w = F(() => {
    var f;
    return p.value !== null ? (f = g.value) == null ? void 0 : f[p.value] : null;
  }), m = (f) => {
    var c, S, k, C;
    const v = ((c = g.value) == null ? void 0 : c.findIndex((E) => E === f)) ?? null;
    ct(() => {
      var E;
      u(v, g.value), K((E = i.value) == null ? void 0 : E.$el, { transition: `transform ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})`, transform: j(l.value) ? `translate3d(0, ${f}px, 0)` : `translate3d(${f}px, 0, 0)` });
    }), g.value && v !== g.value.length - 1 && v !== (t == null ? void 0 : t.value) ? K((S = o.value) == null ? void 0 : S.$el, { transition: `opacity ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})`, opacity: "0" }) : K((k = o.value) == null ? void 0 : k.$el, { transition: `opacity ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})`, opacity: "1" }), n.value = v !== null ? ((C = a.value) == null ? void 0 : C[v]) ?? null : null;
  };
  le([n, g, a], () => {
    var f;
    if (n.value) {
      const c = ((f = a.value) == null ? void 0 : f.findIndex((S) => S === n.value)) ?? -1;
      g.value && c !== -1 && typeof g.value[c] == "number" && m(g.value[c]);
    }
  }, { immediate: true });
  function r({ draggedDistance: f, closeDrawer: c, velocity: S, dismissible: k }) {
    var C, v, E;
    if (t.value === void 0) return;
    const G = l.value === "bottom" || l.value === "right" ? (w.value ?? 0) - f : (w.value ?? 0) + f, ie = p.value === t.value - 1, te = p.value === 0, se = f > 0;
    if (ie && K((C = o.value) == null ? void 0 : C.$el, { transition: `opacity ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})` }), S > 2 && !se) {
      k ? c() : m(g.value[0]);
      return;
    }
    if (S > 2 && se && g && a.value) {
      m(g.value[a.value.length - 1]);
      return;
    }
    const we = (v = g.value) == null ? void 0 : v.reduce((ae, P) => typeof ae != "number" || typeof P != "number" ? ae : Math.abs(P - G) < Math.abs(ae - G) ? P : ae), me = j(l.value) ? window.innerHeight : window.innerWidth;
    if (S > _t && Math.abs(f) < me * 0.4) {
      const ae = se ? 1 : -1;
      if (ae > 0 && s) {
        m(g.value[(((E = a.value) == null ? void 0 : E.length) ?? 0) - 1]);
        return;
      }
      if (te && ae < 0 && k && c(), p.value === null) return;
      m(g.value[p.value + ae]);
      return;
    }
    m(we);
  }
  function M({ draggedDistance: f }) {
    var c;
    if (w.value === null) return;
    const S = l.value === "bottom" || l.value === "right" ? w.value - f : w.value + f;
    (l.value === "bottom" || l.value === "right") && S < g.value[g.value.length - 1] || (l.value === "top" || l.value === "left") && S > g.value[g.value.length - 1] || K((c = i.value) == null ? void 0 : c.$el, { transform: j(l.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)` });
  }
  function L(f, c) {
    if (!a.value || typeof p.value != "number" || !g.value || t.value === void 0) return null;
    const S = p.value === t.value - 1;
    if (p.value >= t.value && c) return 0;
    if (S && !c) return 1;
    if (!_.value && !S) return null;
    const k = S ? p.value + 1 : p.value - 1, C = S ? g.value[k] - g.value[k - 1] : g.value[k + 1] - g.value[k], v = f / Math.abs(C);
    return S ? 1 - v : v;
  }
  return { isLastSnapPoint: s, shouldFade: _, getPercentageDragged: L, activeSnapPointIndex: p, onRelease: r, onDrag: M, snapPointsOffset: g };
}
function rt() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let be = null;
function dn(n) {
  const { isOpen: a, modal: i, nested: o, hasBeenOpened: t, preventScrollRestoration: u, noBodyStyles: l } = n, d = N(typeof window < "u" ? window.location.href : ""), h = N(0);
  function s() {
    if (rt() && be === null && a.value && !l.value) {
      be = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      const { scrollX: p, innerHeight: g } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, { top: `${-h.value}px`, left: `${-p}px`, right: "0px", height: "auto" }), setTimeout(() => {
        requestAnimationFrame(() => {
          const w = g - window.innerHeight;
          w && h.value >= g && (document.body.style.top = `-${h.value + w}px`);
        });
      }, 300);
    }
  }
  function _() {
    if (rt() && be !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), g = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, be), window.requestAnimationFrame(() => {
        if (u.value && d.value !== window.location.href) {
          d.value = window.location.href;
          return;
        }
        window.scrollTo(g, p);
      }), be = null;
    }
  }
  return ke(() => {
    function p() {
      h.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ut(() => {
      window.removeEventListener("scroll", p);
    });
  }), le([a, t, d], () => {
    o.value || !t.value || (a.value ? (window.matchMedia("(display-mode: standalone)").matches || s(), i.value || setTimeout(() => {
      _();
    }, 500)) : _());
  }), { restorePositionSetting: _ };
}
function cn(n, a) {
  return n && n.value ? n : a;
}
function fn(n) {
  const { emitDrag: a, emitRelease: i, emitClose: o, emitOpenChange: t, open: u, dismissible: l, nested: d, modal: h, shouldScaleBackground: s, setBackgroundColorOnScale: _, scrollLockTimeout: p, closeThreshold: g, activeSnapPoint: w, fadeFromIndex: m, direction: r, noBodyStyles: M, handleOnly: L, preventScrollRestoration: f } = n, c = N(u.value ?? false), S = N(false), k = N(false), C = N(false), v = N(null), E = N(null), G = N(null), ie = N(null), te = N(null), se = N(false), we = N(null), me = N(0), ae = N(false);
  N(0);
  const P = N(null);
  N(0);
  const Ge = F(() => {
    var T;
    return ((T = P.value) == null ? void 0 : T.$el.getBoundingClientRect().height) || 0;
  }), J = cn(n.snapPoints, N(void 0)), $t = F(() => {
    var T;
    return J && (((T = J.value) == null ? void 0 : T.length) ?? 0) > 0;
  }), St = N(null), { activeSnapPointIndex: Ue, onRelease: Mt, snapPointsOffset: Ct, onDrag: Tt, shouldFade: Xe, getPercentageDragged: Nt } = un({ snapPoints: J, activeSnapPoint: w, drawerRef: P, fadeFromIndex: m, overlayRef: v, onSnapPointChange: Dt, direction: r });
  function Dt(T, z) {
    J.value && T === z.length - 1 && (E.value = /* @__PURE__ */ new Date());
  }
  dn({ isOpen: c, modal: h, nested: d, hasBeenOpened: S, noBodyStyles: M, preventScrollRestoration: f });
  function Me() {
    return (window.innerWidth - xt) / window.innerWidth;
  }
  function Ye(T, z) {
    var V;
    if (!T) return false;
    let A = T;
    const U = (V = window.getSelection()) == null ? void 0 : V.toString(), Y = P.value ? De(P.value.$el, r.value) : null, ee = /* @__PURE__ */ new Date();
    if (A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]")) return false;
    if (r.value === "right" || r.value === "left") return true;
    if (E.value && ee.getTime() - E.value.getTime() < 500) return false;
    if (Y !== null && (r.value === "bottom" ? Y > 0 : Y < 0)) return true;
    if (U && U.length > 0) return false;
    if (te.value && ee.getTime() - te.value.getTime() < p.value && Y === 0 || z) return te.value = ee, false;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0) return te.value = /* @__PURE__ */ new Date(), false;
        if (A.getAttribute("role") === "dialog") return true;
      }
      A = A.parentNode;
    }
    return true;
  }
  function Et(T) {
    !l.value && !J.value || P.value && !P.value.$el.contains(T.target) || (k.value = true, G.value = /* @__PURE__ */ new Date(), T.target.setPointerCapture(T.pointerId), me.value = j(r.value) ? T.clientY : T.clientX);
  }
  function Lt(T) {
    var z, V, A, U, Y, ee;
    if (P.value && k.value) {
      const ve = r.value === "bottom" || r.value === "right" ? 1 : -1, Ce = (me.value - (j(r.value) ? T.clientY : T.clientX)) * ve, Te = Ce > 0, Je = J.value && !l.value && !Te;
      if (Je && Ue.value === 0) return;
      const Ie = Math.abs(Ce), Qe = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ce = Ie / Ge.value;
      const et = Nt(Ie, Te);
      if (et !== null && (ce = et), Je && ce >= 1 || !se.value && !Ye(T.target, Te)) return;
      if ((z = P == null ? void 0 : P.value) == null || z.$el.classList.add(lt), se.value = true, K((V = P.value) == null ? void 0 : V.$el, { transition: "none" }), K((A = v.value) == null ? void 0 : A.$el, { transition: "none" }), J.value && Tt({ draggedDistance: Ce }), Te && !J.value) {
        const fe = on(Ce), Ne = Math.min(fe * -1, 0) * ve;
        K((U = P.value) == null ? void 0 : U.$el, { transform: j(r.value) ? `translate3d(0, ${Ne}px, 0)` : `translate3d(${Ne}px, 0, 0)` });
        return;
      }
      const Bt = 1 - ce;
      if ((Xe.value || m.value && Ue.value === m.value - 1) && (a(ce), K((Y = v.value) == null ? void 0 : Y.$el, { opacity: `${Bt}`, transition: "none" }, true)), Qe && v.value && s.value) {
        const fe = Math.min(Me() + ce * (1 - Me()), 1), Ne = 8 - ce * 8, tt = Math.max(0, 14 - ce * 14);
        K(Qe, { borderRadius: `${Ne}px`, transform: j(r.value) ? `scale(${fe}) translate3d(0, ${tt}px, 0)` : `scale(${fe}) translate3d(${tt}px, 0, 0)`, transition: "none" }, true);
      }
      if (!J.value) {
        const fe = Ie * ve;
        K((ee = P.value) == null ? void 0 : ee.$el, { transform: j(r.value) ? `translate3d(0, ${fe}px, 0)` : `translate3d(${fe}px, 0, 0)` });
      }
    }
  }
  function Ze() {
    var T;
    if (!P.value) return;
    const z = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), V = De(P.value.$el, r.value);
    K(P.value.$el, { transform: "translate3d(0, 0, 0)", transition: `transform ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})` }), K((T = v.value) == null ? void 0 : T.$el, { transition: `opacity ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})`, opacity: "1" }), s.value && V && V > 0 && c.value && K(z, { borderRadius: `${kt}px`, overflow: "hidden", ...j(r.value) ? { transform: `scale(${Me()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${Me()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${H.DURATION}s`, transitionTimingFunction: `cubic-bezier(${H.EASE.join(",")})` }, true);
  }
  function ye(T) {
    P.value && (o(), T || (c.value = false), window.setTimeout(() => {
      J.value && (w.value = J.value[0]);
    }, H.DURATION * 1e3));
  }
  he(() => {
    if (!c.value && s.value && Qa) {
      const T = setTimeout(() => {
        nn(document.body);
      }, 200);
      return () => clearTimeout(T);
    }
  }), le(u, () => {
    c.value = u.value, u.value || ye();
  });
  function Ot(T) {
    if (!k.value || !P.value) return;
    P.value.$el.classList.remove(lt), se.value = false, k.value = false, ie.value = /* @__PURE__ */ new Date();
    const z = De(P.value.$el, r.value);
    if (!Ye(T.target, false) || !z || Number.isNaN(z) || G.value === null) return;
    const V = ie.value.getTime() - G.value.getTime(), A = me.value - (j(r.value) ? T.clientY : T.clientX), U = Math.abs(A) / V;
    if (U > 0.05 && (C.value = true, window.setTimeout(() => {
      C.value = false;
    }, 200)), J.value) {
      const ee = r.value === "bottom" || r.value === "right" ? 1 : -1;
      Mt({ draggedDistance: A * ee, closeDrawer: ye, velocity: U, dismissible: l.value }), i(true);
      return;
    }
    if (r.value === "bottom" || r.value === "right" ? A > 0 : A < 0) {
      Ze(), i(true);
      return;
    }
    if (U > _t) {
      ye(), i(false);
      return;
    }
    const Y = Math.min(P.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight);
    if (z >= Y * g.value) {
      ye(), i(false);
      return;
    }
    i(true), Ze();
  }
  le(c, (T) => {
    T && (E.value = /* @__PURE__ */ new Date()), t(T);
  }, { immediate: true });
  function Pt(T) {
    var z, V;
    const A = T ? (window.innerWidth - Ee) / window.innerWidth : 1, U = T ? -16 : 0;
    we.value && window.clearTimeout(we.value), K((z = P.value) == null ? void 0 : z.$el, { transition: `transform ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})`, transform: `scale(${A}) translate3d(0, ${U}px, 0)` }), !T && (V = P.value) != null && V.$el && (we.value = window.setTimeout(() => {
      var Y, ee;
      const ve = De((Y = P.value) == null ? void 0 : Y.$el, r.value);
      K((ee = P.value) == null ? void 0 : ee.$el, { transition: "none", transform: j(r.value) ? `translate3d(0, ${ve}px, 0)` : `translate3d(${ve}px, 0, 0)` });
    }, 500));
  }
  function Rt(T) {
    var z;
    if (T < 0) return;
    const V = j(r.value) ? window.innerHeight : window.innerWidth, A = (V - Ee) / V, U = A + T * (1 - A), Y = -16 + T * Ee;
    K((z = P.value) == null ? void 0 : z.$el, { transform: j(r.value) ? `scale(${U}) translate3d(0, ${Y}px, 0)` : `scale(${U}) translate3d(${Y}px, 0, 0)`, transition: "none" });
  }
  function It(T) {
    var z;
    const V = j(r.value) ? window.innerHeight : window.innerWidth, A = T ? (V - Ee) / V : 1, U = T ? -16 : 0;
    T && K((z = P.value) == null ? void 0 : z.$el, { transition: `transform ${H.DURATION}s cubic-bezier(${H.EASE.join(",")})`, transform: j(r.value) ? `scale(${A}) translate3d(0, ${U}px, 0)` : `scale(${A}) translate3d(${U}px, 0, 0)` });
  }
  return { open: u, isOpen: c, modal: h, keyboardIsOpen: ae, hasBeenOpened: S, drawerRef: P, drawerHeightRef: Ge, overlayRef: v, handleRef: St, isDragging: k, dragStartTime: G, isAllowedToDrag: se, snapPoints: J, activeSnapPoint: w, hasSnapPoints: $t, pointerStart: me, dismissible: l, snapPointsOffset: Ct, direction: r, shouldFade: Xe, fadeFromIndex: m, shouldScaleBackground: s, setBackgroundColorOnScale: _, onPress: Et, onDrag: Lt, onRelease: Ot, closeDrawer: ye, onNestedDrag: Rt, onNestedRelease: It, onNestedOpenChange: Pt, emitClose: o, emitDrag: a, emitRelease: i, emitOpenChange: t, nested: d, handleOnly: L, noBodyStyles: M };
}
const pn = q({ __name: "DrawerRoot", props: { activeSnapPoint: { default: void 0 }, closeThreshold: { default: rn }, shouldScaleBackground: { type: Boolean, default: void 0 }, setBackgroundColorOnScale: { type: Boolean, default: true }, scrollLockTimeout: { default: sn }, fixed: { type: Boolean, default: void 0 }, dismissible: { type: Boolean, default: true }, modal: { type: Boolean, default: true }, open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean, default: void 0 }, nested: { type: Boolean, default: false }, direction: { default: "bottom" }, noBodyStyles: { type: Boolean }, handleOnly: { type: Boolean, default: false }, preventScrollRestoration: { type: Boolean }, snapPoints: { default: void 0 }, fadeFromIndex: { default: void 0 } }, emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"], setup(n, { expose: a, emit: i }) {
  const o = n, t = i;
  Vt();
  const u = F(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = it(o, "open", t, { defaultValue: o.defaultOpen, passive: o.open === void 0 }), d = it(o, "activeSnapPoint", t, { passive: o.activeSnapPoint === void 0 }), h = { emitDrag: (m) => t("drag", m), emitRelease: (m) => t("release", m), emitClose: () => t("close"), emitOpenChange: (m) => {
    t("update:open", m), setTimeout(() => {
      t("animationEnd", m);
    }, H.DURATION * 1e3);
  } }, { closeDrawer: s, hasBeenOpened: _, modal: p, isOpen: g } = an(fn({ ...h, ...ut(o), activeSnapPoint: d, fadeFromIndex: u, open: l }));
  function w(m) {
    if (l.value !== void 0) {
      h.emitOpenChange(m);
      return;
    }
    g.value = m, m ? _.value = true : s();
  }
  return a({ open: g }), (m, r) => (b(), O(e(la), { open: e(g), modal: e(p), "onUpdate:open": w }, { default: y(() => [Z(m.$slots, "default", { open: e(g) })]), _: 3 }, 8, ["open", "modal"]));
} }), mn = q({ __name: "DrawerOverlay", setup(n) {
  const { overlayRef: a, hasSnapPoints: i, isOpen: o, shouldFade: t } = Ke();
  return (u, l) => (b(), O(e(ra), { ref_key: "overlayRef", ref: a, "data-vaul-overlay": "", "data-vaul-snap-points": e(o) && e(i) ? "true" : "false", "data-vaul-snap-points-overlay": e(o) && e(t) ? "true" : "false" }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
} }), vn = () => () => {
};
function gn() {
  const { direction: n, isOpen: a, shouldScaleBackground: i, setBackgroundColorOnScale: o, noBodyStyles: t } = Ke(), u = N(null), l = N(document.body.style.backgroundColor);
  function d() {
    return (window.innerWidth - xt) / window.innerWidth;
  }
  he((h) => {
    if (a.value && i.value) {
      u.value && clearTimeout(u.value);
      const s = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!s) return;
      ln(o.value && !t.value ? Be(document.body, { background: "black" }) : vn, Be(s, { transformOrigin: j(n.value) ? "top" : "left", transitionProperty: "transform, border-radius", transitionDuration: `${H.DURATION}s`, transitionTimingFunction: `cubic-bezier(${H.EASE.join(",")})` }));
      const _ = Be(s, { borderRadius: `${kt}px`, overflow: "hidden", ...j(n.value) ? { transform: `scale(${d()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${d()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` } });
      h(() => {
        _(), u.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, H.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const hn = q({ __name: "DrawerContent", setup(n) {
  const { open: a, isOpen: i, snapPointsOffset: o, hasSnapPoints: t, drawerRef: u, onPress: l, onDrag: d, onRelease: h, modal: s, emitOpenChange: _, dismissible: p, keyboardIsOpen: g, closeDrawer: w, direction: m, handleOnly: r } = Ke();
  gn();
  const M = N(false), L = F(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
  function f(k) {
    if (!s.value || k.defaultPrevented) {
      k.preventDefault();
      return;
    }
    g.value && (g.value = false), p.value ? _(false) : k.preventDefault();
  }
  function c(k) {
    r.value || l(k);
  }
  function S(k) {
    r.value || d(k);
  }
  return he(() => {
    t.value && window.requestAnimationFrame(() => {
      M.value = true;
    });
  }), (k, C) => (b(), O(e(sa), { ref_key: "drawerRef", ref: u, "data-vaul-drawer": "", "data-vaul-drawer-direction": e(m), "data-vaul-delayed-snap-points": M.value ? "true" : "false", "data-vaul-snap-points": e(i) && e(t) ? "true" : "false", style: _e({ "--snap-point-height": L.value }), onPointerdown: c, onPointermove: S, onPointerup: e(h), onPointerDownOutside: f, onOpenAutoFocus: C[0] || (C[0] = Wt(() => {
  }, ["prevent"])), onEscapeKeyDown: C[1] || (C[1] = (v) => {
    e(p) || v.preventDefault();
  }) }, { default: y(() => [Z(k.$slots, "default")]), _: 3 }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
} });
function Se() {
  const { client: n } = Xt();
  return Yt("$prismic_navigation", async () => {
    const a = await n.getSingle("navigation").then((u) => u.data);
    if (!a) throw new Error("Navigation data not found");
    const { hotCtaLink: i, hotCtaText: o } = wn(a), t = yn(a);
    return { ...a, blocks: t, copyrightNotice: `\xA9 Nimiq Foundation 2017-${(/* @__PURE__ */ new Date()).getFullYear()}`, hotCtaLink: i, hotCtaText: o };
  });
}
function wn(n) {
  if (!n.hottext || !n.hotsince || !n.hotuntil) return { hotCtaLink: void 0, hotCtaText: void 0 };
  const a = /* @__PURE__ */ new Date();
  return new Date(n.hotsince) > a || new Date(n.hotuntil) < a ? { hotCtaLink: void 0, hotCtaText: void 0 } : { hotCtaLink: ft(n.hothref), hotCtaText: n.hottext };
}
function yn(n) {
  return [{ areaName: "project", label: n.projectGroupName, links: [...n.projectLinks, ...n.projectAdditionalFooterLinks] }, { areaName: "tech", label: n.techGroupName, links: [...n.techLinks, ...n.techAdditionalFooterLinks] }, { areaName: "apps", label: n.appsGroupName, links: [...n.appsLinks, ...n.appsAdditionalFooterLinks] }, { areaName: "get-started", label: n.getStartedGroupName, links: [...n.getStartedLinks, ...n.getStartedAdditionalFooterLinks] }, { areaName: "community", label: n.communityGroupName, links: [...n.communityLinks, ...n.communityAdditionalFooterLinks] }, { areaName: "and-more", label: n.andMoreGroupName, links: n.andMoreLinks }];
}
const bn = { class: "mb-16 flex gap-20" }, _n = { "of-x-hidden": "", "of-y-auto": "" }, kn = { class: "my-16" }, xn = { text: "f-sm neutral-700", "font-bold": "", "nq-arrow": "" }, $n = { "text-14": "", "f-mt-xs": "" }, Sn = { "text-12": "", uppercase: "" }, Mn = { text: "neutral-800 hocus:neutral-900", "transition-colors": "", "f-mt-md": "", flex: "~ gap-16 items-center" }, Cn = { "text-neutral-600": "", "f-mt-md": "" }, Tn = q({ __name: "Mobile", async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => Se()), a = await a, i(), a);
  return (t, u) => {
    const l = xe, d = Ea, h = pa, s = va, _ = ma, p = fa, g = ca, w = We, m = Pe;
    return b(), O(e(pn), { "should-scale-background": "" }, { default: y(() => [x(e(ua), { "bg-transparent": "", "aria-label": "Links menu" }, { default: y(() => [$("div", { "opacity-50": "", "hocus:opacity-60": "", class: ne(["scale-x--100 i-nimiq:hamburger-menu", { "text-white": false }]) })]), _: 1 }), x(e(da), null, { default: y(() => [x(e(mn), { class: "fixed inset-0 bg-neutral/40" }), x(e(hn), { class: "fixed bottom-0 left-0 right-0 z-100 mt-24 h-full max-h-90dvh flex flex-col rounded-t-10 bg-white p-24" }, { default: y(() => {
      var _a2, _b, _c, _d, _e2, _f;
      return [u[5] || (u[5] = $("div", { class: "mx-auto mb-32 h-4 w-80 flex-shrink-0 rounded-full bg-gray-300" }, null, -1)), $("div", bn, [((_b = (_a2 = e(o)) == null ? void 0 : _a2.getStartedLinks.at(0)) == null ? void 0 : _b.href) ? (b(), O(l, { key: 0, "internal-component": "a", field: e(o).getStartedLinks.at(0).href, "nq-pill-secondary": "" }, { default: y(() => {
        var _a3;
        return [W(I((_a3 = e(o).getStartedLinks[0]) == null ? void 0 : _a3.label), 1)];
      }), _: 1 }, 8, ["field"])) : B("", true), ((_d = (_c = e(o)) == null ? void 0 : _c.getStartedLinks.at(1)) == null ? void 0 : _d.href) ? (b(), O(l, { key: 1, "internal-component": "a", field: e(o).getStartedLinks.at(1).href, "nq-arrow": "", "nq-pill-blue": "" }, { default: y(() => {
        var _a3;
        return [W(I((_a3 = e(o).getStartedLinks[1]) == null ? void 0 : _a3.label), 1)];
      }), _: 1 }, 8, ["field"])) : B("", true)]), $("div", _n, [$("div", kn, [((_f = (_e2 = e(o)) == null ? void 0 : _e2.getStartedLinks.at(2)) == null ? void 0 : _f.href) ? (b(), O(l, { key: 0, "internal-component": "a", field: e(o).getStartedLinks.at(2).href }, { default: y(() => {
        var _a3, _b2;
        return [$("p", xn, I((_a3 = e(o).getStartedLinks[2]) == null ? void 0 : _a3.label), 1), $("p", $n, I((_b2 = e(o).getStartedLinks[2]) == null ? void 0 : _b2.description), 1)];
      }), _: 1 }, 8, ["field"])) : B("", true)]), x(g, { class: "mt-16 opacity-60", type: "single", collapsible: true }, { default: y(() => [(b(true), D(X, null, Q(e(o).blocks, ({ links: r, label: M }) => (b(), D(X, { key: M }, [r.length ? (b(), O(d, { key: 0, "h-1": "", "bg-neutral-300": "" })) : B("", true), r.length ? (b(), O(p, { key: 1, "of-hidden": "", "py-8": "", value: M }, { default: y(() => [x(s, null, { default: y(() => [x(h, { "h-45": "", flex: "", "flex-1": "", "cursor-default": "", "items-center": "", "gap-x-8": "", "bg-white": "", "px-5": "", "leading-none": "", "outline-none": "" }, { default: y(() => [$("span", Sn, I(M), 1), u[0] || (u[0] = $("div", { class: "text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] i-nimiq:chevron-down group-data-[state=open]:rotate-180" }, null, -1))]), _: 2 }, 1024)]), _: 2 }, 1024), x(_, { class: "content", "of-hidden": "" }, { default: y(() => [(b(true), D(X, null, Q(r, ({ label: L, href: f }, c) => (b(), O(l, { key: c, "internal-component": "a", field: f, flex: "~ items-center gap-16", "w-full": "", "whitespace-nowrap": "", "rounded-4": "", "bg-white": "", "px-16": "", "pb-10": "", "pt-14": "", "font-semibold": "" }, { default: y(() => [W(I(L), 1)]), _: 2 }, 1032, ["field"]))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"])) : B("", true)], 64))), 128))]), _: 1 }), u[4] || (u[4] = $("hr", { "mb-32": "", "h-1": "", "w-full": "", "bg-neutral-300": "" }, null, -1)), x(w, { "text-18": "", items: [("SocialMedia" in t ? t.SocialMedia : e(R)).x, ("SocialMedia" in t ? t.SocialMedia : e(R)).telegram, ("SocialMedia" in t ? t.SocialMedia : e(R)).reddit, ("SocialMedia" in t ? t.SocialMedia : e(R)).github, ("SocialMedia" in t ? t.SocialMedia : e(R)).youtube, ("SocialMedia" in t ? t.SocialMedia : e(R)).discord, ("SocialMedia" in t ? t.SocialMedia : e(R)).nimiqForum, ("SocialMedia" in t ? t.SocialMedia : e(R)).facebook, ("SocialMedia" in t ? t.SocialMedia : e(R)).instagram] }, null, 8, ["items"]), $("div", Mn, [x(m, { to: "/privacy-policy", class: "font-semibold op-60 hocus:op-90" }, { default: y(() => u[1] || (u[1] = [W(" Privacy Policy ")])), _: 1 }), u[3] || (u[3] = $("div", { "aria-hidden": "", "size-4": "", "rounded-full": "", "bg-current": "", "op-40": "" }, null, -1)), x(m, { to: "/cookie-policy", class: "font-semibold op-60 hocus:op-90" }, { default: y(() => u[2] || (u[2] = [W(" Cookie Policy ")])), _: 1 })]), $("p", Cn, I(e(o).copyrightNotice), 1)])];
    }), _: 1 })]), _: 1 })]), _: 1 });
  };
} }), Nn = Object.assign(Fe(Tn, [["__scopeId", "data-v-22be5508"]]), { __name: "NavigationMobile" }), Dn = { flex: "~ gap-20", "px-20": "", "py-32": "" }, En = ["aria-label"], Ln = ["onFocus", "onMouseover"], On = { key: 0, "bg-darkblue": "", "bg-op-6": "", "px-40": "", "py-32": "" }, Pn = { "whitespace-nowrap": "", "text-12": "", "font-bold": "", "lh-none": "", uppercase: "", "op-60": "" }, Rn = ["aria-label"], In = ["aria-label"], Bn = { flex: "~ items-center justify-between gap-x-20", "px-32": "", "py-20": "" }, An = { grid: "", "grid-cols-1": "", "max-w-6xl": "", "p-16": "" }, Fn = ["aria-label"], Hn = { grid: "", "grid-cols-1": "", "p-16": "" }, qn = ["aria-label"], zn = ["aria-label"], jn = { "font-semibold": "", "lh-none": "" }, Vn = { "text-14": "" }, Wn = { flex: "~ justify-center", absolute: "", "right-0": "", "top-full": "", "z-10": "", "min-w-full": "", "perspective-2000": "" }, Kn = q({ __name: "Desktop", async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => He()), a = await a, i(), a), { data: t } = ([a, i] = ue(() => Se()), a = await a, i(), a), u = F(() => t.value.projectLinks.filter((s) => s.href.link_type === "Document")), l = N(0), h = Zt().fullPath === "/";
  return (s, _) => {
    const p = Va, g = ga, w = xe, m = qa, r = Qt, M = Fa, L = Ba, f = We, c = Ha, S = za, k = Wa, C = Ra;
    return e(t) ? (b(), O(C, { key: 0, class: "header-nav", relative: "" }, { default: y(() => [x(S, { flex: "~ items-center" }, { default: y(() => [x(L, null, { default: y(() => [x(p, { class: "trigger" }, { default: y(() => _[0] || (_[0] = [W(" Apps "), $("div", { "i-nimiq:chevron-down": "" }, null, -1)])), _: 1 }), x(M, { absolute: "", "left-0": "", "top-0": "", "w-max": "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: y(() => [$("div", null, [$("div", Dn, [$("ul", { "aria-label": `${e(t).appsGroupName} links`, role: "link", "w-max": "", flex: "~ col" }, [(b(true), D(X, null, Q(e(t).appsLinks, ({ label: v, href: E, logo: G }, ie) => (b(), D("li", { key: v, group: "", class: "link-item", onFocus: (te) => l.value = ie, onMouseover: (te) => l.value = ie }, [x(m, { "as-child": "" }, { default: y(() => [x(w, { "internal-component": "a", field: E, flex: "~ gap-12 items-center" }, { default: y(() => [x(g, { src: s.$prismic.asImageSrc(G), "h-22": "", "max-w-21": "", op: "20 group-hocus:100", "transition-opacity": "" }, null, 8, ["src"]), $("span", null, I(v), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)], 40, Ln))), 128))], 8, En), x(Jt, { mode: "out-in", "enter-active-class": "transition-[opacity,filter] duration-400", "enter-from-class": "op-0 blur-2", "enter-to-class": "op-100 blur-0", "leave-active-class": "transition-[opacity,filter] duration-150 blur-0", "leave-from-class": "op-100", "leave-to-class": "op-0 blur-2" }, { default: y(() => {
      var _a2;
      return [((_a2 = e(t).appsLinks[e(l)]) == null ? void 0 : _a2.visual) ? (b(), O(r, { key: e(l), field: e(t).appsLinks[e(l)].visual, relative: "", "h-full": "", "w-300": "", "rounded-4": "", "object-contain": "", "object-left-top": "", shadow: "" }, null, 8, ["field"])) : B("", true)];
    }), _: 1 })]), e(t).howToTitle && e(t).howToLinks.length > 0 ? (b(), D("div", On, [$("p", Pn, I(e(t).howToTitle), 1), $("ul", { role: "list", "aria-label": `${e(t).howToTitle} links`, "mt-18": "", flex: "", "flex-wrap": "", "gap-x-32": "" }, [(b(true), D(X, null, Q(e(t).howToLinks, ({ href: v, label: E }, G) => (b(), D("li", { key: `how-to-link-${G}` }, [x(m, { "as-child": "" }, { default: y(() => [x(w, { "internal-component": "a", field: v, "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", "nq-arrow": "" }, { default: y(() => [W(I(E), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, Rn)])) : B("", true)])]), _: 1 })]), _: 1 }), e(t).techLinks.length > 0 ? (b(), O(L, { key: 0 }, { default: y(() => [x(p, { class: "trigger" }, { default: y(() => [W(I(e(t).techGroupName) + " ", 1), _[1] || (_[1] = $("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1 }), x(M, { absolute: "", "left-0": "", "top-0": "", "min-w-max": "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: y(() => [$("div", null, [$("ul", { "aria-label": `${e(t).techGroupName} links`, role: "link", grid: "~ cols-2 gap-x-8", "p-24": "" }, [(b(true), D(X, null, Q(e(t).techLinks, ({ label: v, href: E }) => (b(), D("li", { key: v, "w-full": "", flex: "", class: "link-item" }, [x(m, { "as-child": "" }, { default: y(() => [x(w, { "internal-component": "a", field: E }, { default: y(() => [W(I(v), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, In), _[2] || (_[2] = $("hr", { "h-1": "", "w-full": "", "bg-darkblue": "", "op-10": "" }, null, -1)), $("div", Bn, [e(o).github ? (b(), O(w, { key: 0, "internal-component": "a", field: e(o).github.link, flex: "~ items-center gap-12", "un-text": "15 neutral-800", "flex-1": "", "pr-4": "", "nq-arrow": "", "after:ml--4": "", border: "r-1.5 solid darkblue/10" }, { default: y(() => [$("div", { class: ne(e(o).github.icon), "text-20": "", "op-70": "" }, null, 2), W(" " + I(e(t).githubLinkLabel), 1)]), _: 1 }, 8, ["field"])) : B("", true), x(f, { items: [("SocialMedia" in s ? s.SocialMedia : e(R)).reddit, ("SocialMedia" in s ? s.SocialMedia : e(R)).discord, ("SocialMedia" in s ? s.SocialMedia : e(R)).telegram], "flex-nowrap": "", "text-18": "", "op-80": "" }, null, 8, ["items"])])])]), _: 1 })]), _: 1 })) : B("", true), e(t).communityGroupName && e(t).communityLinks.length > 0 ? (b(), O(L, { key: 1 }, { default: y(() => [x(p, { class: "trigger" }, { default: y(() => [W(I(e(t).communityGroupName) + " ", 1), _[3] || (_[3] = $("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1 }), x(M, { absolute: "", "left-0": "", "top-0": "", "min-w-max": "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: y(() => [$("div", An, [$("ul", { "aria-label": `${e(t).communityGroupName} links`, role: "link", flex: "~ col", "pb-24": "" }, [(b(true), D(X, null, Q(e(t).communityLinks, ({ label: v, href: E }) => (b(), D("li", { key: v, "w-full": "", flex: "", class: "link-item" }, [x(m, { "as-child": "" }, { default: y(() => [x(w, { "internal-component": "a", field: E }, { default: y(() => [W(I(v), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, Fn), _[4] || (_[4] = $("hr", { "h-1": "", "w-full": "", "bg-darkblue": "", "op-10": "" }, null, -1)), x(f, { items: [("SocialMedia" in s ? s.SocialMedia : e(R)).x, ("SocialMedia" in s ? s.SocialMedia : e(R)).reddit, ("SocialMedia" in s ? s.SocialMedia : e(R)).facebook, ("SocialMedia" in s ? s.SocialMedia : e(R)).youtube, ("SocialMedia" in s ? s.SocialMedia : e(R)).instagram, ("SocialMedia" in s ? s.SocialMedia : e(R)).discord, ("SocialMedia" in s ? s.SocialMedia : e(R)).telegram, ("SocialMedia" in s ? s.SocialMedia : e(R)).nimiqForum, ("SocialMedia" in s ? s.SocialMedia : e(R)).github], "mt-16": "", "text-18": "", "op-80": "" }, null, 8, ["items"])])]), _: 1 })]), _: 1 })) : B("", true), e(t).projectGroupName && e(u).length > 0 ? (b(), O(L, { key: 2 }, { default: y(() => [x(p, { class: "trigger" }, { default: y(() => [W(I(e(t).projectGroupName) + " ", 1), _[5] || (_[5] = $("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1 }), x(M, { absolute: "", "top-0": "", "min-w-240": "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: y(() => [$("div", Hn, [$("ul", { "aria-label": `${e(t).projectGroupName} links`, role: "link", flex: "~ col" }, [(b(true), D(X, null, Q(e(t).projectLinks, ({ label: v, href: E }) => (b(), D("li", { key: v, "w-full": "", flex: "", class: "link-item" }, [x(m, { "as-child": "" }, { default: y(() => [x(w, { "internal-component": "a", field: E }, { default: y(() => [W(I(v), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, qn)])]), _: 1 })]), _: 1 })) : B("", true), e(t).getStartedGroupName && e(t).getStartedLinks.length > 0 ? (b(), O(L, { key: 3 }, { default: y(() => [x(p, { "ml-16": "", "nq-pill-lg": "", class: ne(h ? " home nq-pill-secondary" : "nq-pill-blue") }, { default: y(() => [W(I(e(t).getStartedGroupName), 1)]), _: 1 }, 8, ["class"]), x(M, { absolute: "", "left-0": "", "top-0": "", "min-w-max": "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: y(() => [$("ul", { "aria-label": `${e(t).getStartedGroupName} links`, role: "link", flex: "", "p-16": "", divide: "x-1 solid darkblue/10 hover:transparent" }, [(b(true), D(X, null, Q(e(t).getStartedLinks, ({ label: v, href: E, description: G }) => (b(), D("li", { key: v, "max-w-240": "", "w-full": "", flex: "", "transition-border": "" }, [x(m, { "as-child": "" }, { default: y(() => [x(w, { "internal-component": "a", field: E, flex: "~ col gap-12", bg: "hocus:darkblue/6", "un-text": "darkblue/90 hocus:darkblue", "w-full": "", "rounded-4": "", "p-24": "", "transition-colors": "" }, { default: y(() => [$("p", jn, I(v), 1), $("p", Vn, I(G), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, zn)]), _: 1 })]), _: 1 })) : B("", true), x(c, { flex: "~ items-end justify-center", "top-full": "", "z-100": "", "of-hidden": "", "drop-shadow": "", "transition-transform": "", "data-hidden:animate-fade-out": "", "data-visible:animate-fade-in": "", "data-hidden:op-0": "" }), x(c, { animate: "data-visible:fade-in data-hidden:fade-out", transition: "all transform ease duration-200", w: "$reka-navigation-menu-indicator-size", flex: "~ items-end justify-center", "translate-x": "$reka-navigation-menu-indicator-position", absolute: "", "top-full": "", "z-100": "", "z-12": "", "of-hidden": "", "duration-200": "", "data-hidden:op-0": "" }, { default: y(() => _[6] || (_[6] = [$("div", { relative: "", "h-12": "", "w-24": "", "i-nimiq:tooltip-triangle": "" }, null, -1)])), _: 1 })]), _: 1 }), $("div", Wn, [x(k, { transition: "[width,height]", h: "$reka-navigation-menu-viewport-height", animate: "scale-in data-closed:scale-out", "min-w": "$reka-navigation-menu-viewport-width", relative: "", "z-1": "", "mt-12": "", "origin-top-center": "", "animate-scale-in": "", "of-hidden": "", "rounded-12": "", "bg-white": "", shadow: "", "duration-300": "", outline: "1.5 offset--1.5 ~ neutral-200" })])]), _: 1 })) : B("", true);
  };
} }), Gn = Object.assign(Kn, { __name: "NavigationDesktop" }), Un = ["data-scrolled"], Xn = { truncate: "", "text-neutral": "" }, Yn = q({ __name: "Header", props: { darkHeader: { type: Boolean } }, async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => Se()), a = await a, i(), a), { isMobileOrTablet: t } = Sa(), { smaller: u } = _a(ka), l = F(() => t || u("lg").value), { y: d } = xa(window), h = F(() => d.value > 0), s = N();
  le(d, (p, g) => {
    Math.abs(p - g) < 10 || (s.value = p < g ? "top" : "bottom");
  });
  const _ = F(() => d.value === 0 && s.value === "top" ? "shadow 100ms ease-out 400ms, opacity 400ms var(--nq-ease), background-color 300ms var(--nq-ease)" : s.value === "bottom" ? "shadow 100ms ease-out, opacity 400ms var(--nq-ease), background-color 300ms var(--nq-ease) 150ms" : "shadow 100ms ease-out, opacity 400ms var(--nq-ease), background-color 300ms var(--nq-ease)");
  return (p, g) => {
    const w = Pe, m = Nn, r = Gn;
    return b(), D("header", { flex: "~ items-center justify-between gap-x-20", fixed: "", sticky: "", "inset-x-16": "", "top-16": "", "z-100": "", "mx-16": "", "mb-32": "", "mt-16": "", "rounded-8": "", "p-16": "", class: ne({ "bg-white shadow-xl": e(h) && e(s) === "top", "op-100": e(h) && e(s) === "top", "op-0 pointer-events-none": e(h) && e(s) === "bottom", dark: !e(h) && p.darkHeader }), style: _e({ transition: e(_) }), "data-scrolled": e(h) ? "" : void 0 }, [x(w, { to: "/" }, { default: y(() => g[0] || (g[0] = [$("div", { class: "dark:i-nimiq:logos-nimiq-white-horizontal", "text-24": "", "i-nimiq:logos-nimiq-horizontal": "" }, null, -1)])), _: 1 }), e(o).hotCtaLink ? (b(), O(w, { key: 0, to: e(o).hotCtaLink, bg: "neutral/15 hocus:neutral/20", class: ne({ "children:delay-200": e(s) === "bottom" }), external: "", "mr-auto": "", "gap-x-9": "", truncate: "", "text-neutral": "", "nq-pill": "", "children:transition-colors": "" }, { default: y(() => [g[1] || (g[1] = $("div", { "shrink-0": "", "i-nimiq:flame": "" }, null, -1)), $("span", Xn, I(e(o).hottext), 1)]), _: 1 }, 8, ["to", "class"])) : B("", true), e(l) ? (b(), O(m, { key: 1 })) : (b(), O(r, { key: 2 }))], 14, Un);
  };
} }), Zn = Object.assign(Yn, { __name: "NavigationHeader" }), Jn = ["data-social"], Qn = { key: 0, "i-nimiq:logos-youtube-mono": "", text: "53 white" }, eo = { key: 1, "i-nimiq:logos-twitter-mono": "", text: "64 white" }, to = { key: 2, "i-nimiq:logos-facebook-mono": "", text: "62 white" }, ao = q({ __name: "HexagonsBackground", props: { bgColor: {}, withSocials: { type: Boolean, default: false } }, async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => He()), a = await a, i(), a), t = gt(() => n.bgColor), u = F(() => 5), { width: l } = $a(), d = N(0);
  function h(g, w) {
    const m = g / (u.value - 1), r = w / (d.value - 1), M = Math.abs(m + r - 1), L = 0.8;
    return M > L ? 0 : 1 - M / L;
  }
  const s = { youtube: [2, 6], x: [3, 7], facebook: [1, 9] }, _ = Object.keys(s), p = N([]);
  return ke(() => {
    const g = [];
    d.value = Math.floor(l.value / 140) + 4 & -2;
    for (let w = 0; w < u.value; w++) {
      const r = w % 2 === 0 ? 0 : 1;
      for (let M = r; M < d.value; M += 2) {
        const L = h(w, M);
        let f;
        n.withSocials && (f = _.find((c) => s[c][0] === w && s[c][1] === M)), g.push({ rowIndex: w, colIndex: M, opacity: L, social: f });
      }
    }
    p.value = g;
  }), (g, w) => {
    const m = Pe;
    return b(), D("section", { class: ne(e(t)), group: "", relative: "", "z-2": "", "mx-0": "", "w-full": "", "of-x-hidden": "", "px-0": "", "f-pt-2xl": "" }, [$("div", { "aria-hidden": "true", class: "grid-parent", "max-w-none": "", style: _e(`--rows:${u.value}; --cols:${e(d)}`) }, [(b(true), D(X, null, Q(e(p), (r) => (b(), D("div", { key: `${r.rowIndex}-${r.colIndex}`, style: _e({ "--row": r.rowIndex, "--col": r.colIndex, opacity: r.opacity && !r.social ? r.opacity : 1, "animation-delay": `${r.rowIndex * 0.1 + r.colIndex * 0.15}s`, "animation-duration": `${(u.value - r.rowIndex) * 2 + 4}s` }), "i-nimiq:logos-nimiq-mono": "", "motion-safe:transition": "colors duration-800 hocus:duration-100", "motion-safe:animate": "pulse group-hocus:none", class: ne({ "text-[red]": r.social === "youtube", "text-black": r.social === "x", "text-[#1877f2]": r.social === "facebook", "text-neutral-300 dark:text-neutral-500 hocus:dark:text-neutral-700 hocus:text-neutral-500": !r.social }), "data-social": r.social }, [r.social ? (b(), O(m, { key: 0, external: "", flex: "~ justify-center items-center", target: "_blank", "size-full": "", to: ("getLink" in g ? g.getLink : e(ft))(e(o)[r.social].link), class: ne({ "!animate-none": r.social }) }, { default: y(() => [r.social === "youtube" ? (b(), D("div", Qn)) : B("", true), r.social === "x" ? (b(), D("div", eo)) : B("", true), r.social === "facebook" ? (b(), D("div", to)) : B("", true)]), _: 2 }, 1032, ["to", "class"])) : B("", true)], 14, Jn))), 128))], 4)], 2);
  };
} }), no = Object.assign(Fe(ao, [["__scopeId", "data-v-55ccc856"]]), { __name: "HexagonsBackground" }), oo = { grid: "~ gap-40 md:gap-48 items-start xl:gap-104" }, io = { flex: "~ col", "f-text-sm": "", "area-contact": "" }, lo = { key: 0 }, ro = { key: 1, "f-mt-xs": "" }, so = { text: "f-sm neutral-700", "self-end": "", "area-meta": "" }, uo = { key: 0, "f-mt-xs": "" }, co = { text: "neutral-800 hocus:neutral-900", "transition-colors": "", "f-mt-xs": "", flex: "~ gap-16 items-center wrap" }, fo = { "text-neutral-600": "", "f-mt-md": "" }, po = { text: "f-xs neutral-700/80", "w-full": "", "nq-label": "" }, mo = ["aria-label"], vo = q({ __name: "Footer", props: { bgColor: {} }, async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => Se()), a = await a, i(), a), t = gt(n.bgColor);
  return (u, l) => {
    var _a2, _b, _c, _d;
    const d = Ca, h = We, s = Pe, _ = xe;
    return b(), D("footer", { class: ne(e(t)), "data-section": "", "z-10": "", "f-pt-2xl": "" }, [$("div", oo, [$("div", io, [((_a2 = e(o)) == null ? void 0 : _a2.newsletterCta) ? (b(), D("p", lo, I(e(o).newsletterCta), 1)) : B("", true), x(d, { "f-mt-xs": "", placeholder: (_b = e(o)) == null ? void 0 : _b.newsletterPlaceholder }, null, 8, ["placeholder"]), ((_c = e(o)) == null ? void 0 : _c.socialMediaCta) ? (b(), D("p", ro, I(e(o).socialMediaCta), 1)) : B("", true), x(h, { "mx--8": "", "op-60": "", "f-text-xl": "", items: [("SocialMedia" in u ? u.SocialMedia : e(R)).x, ("SocialMedia" in u ? u.SocialMedia : e(R)).telegram, ("SocialMedia" in u ? u.SocialMedia : e(R)).reddit, ("SocialMedia" in u ? u.SocialMedia : e(R)).github, ("SocialMedia" in u ? u.SocialMedia : e(R)).youtube, ("SocialMedia" in u ? u.SocialMedia : e(R)).discord, ("SocialMedia" in u ? u.SocialMedia : e(R)).nimiqForum, ("SocialMedia" in u ? u.SocialMedia : e(R)).facebook, ("SocialMedia" in u ? u.SocialMedia : e(R)).instagram] }, null, 8, ["items"])]), $("div", so, [x(s, { to: "/", group: "", "w-max": "", flex: "" }, { default: y(() => l[0] || (l[0] = [$("div", { "h-20": "!", "w-84": "!", "op-80": "", "i-nimiq:logos-nimiq-horizontal-mono": "", "group-hocus:i-nimiq:logos-nimiq-horizontal": "" }, null, -1)])), _: 1 }), ((_d = e(o)) == null ? void 0 : _d.nimiqShortDescription) ? (b(), D("p", uo, I(e(o).nimiqShortDescription), 1)) : B("", true), $("div", co, [x(s, { to: "/privacy-policy", "font-semibold": "", "un-text": "neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: y(() => l[1] || (l[1] = [W(" Privacy Policy ")])), _: 1 }), l[3] || (l[3] = $("div", { "aria-hidden": "", "size-4": "", "rounded-full": "", "bg-current": "", "op-40": "" }, null, -1)), x(s, { to: "/cookie-policy", "font-semibold": "", "un-text": "neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: y(() => l[2] || (l[2] = [W(" Cookie Policy ")])), _: 1 })]), $("p", fo, I(e(o).copyrightNotice), 1)]), (b(true), D(X, null, Q(e(o).blocks, ({ areaName: p, label: g, links: w }) => (b(), D("div", { key: p, style: _e(`grid-area ${p}`) }, [$("p", po, I(g), 1), $("ul", { "f-mt-md": "", "aria-label": `${g} links`, role: "list" }, [(b(true), D(X, null, Q(w, ({ href: m, label: r }, M) => (b(), D("li", { key: M, "f-mt-xs": "" }, [x(_, { "internal-component": "a", field: m, "font-semibold": "", "un-text": "f-sm neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: y(() => [W(I(r), 1)]), _: 2 }, 1032, ["field"])]))), 128))], 8, mo)], 4))), 128)), l[4] || (l[4] = $("hr", { "sr-only": "", relative: "", "h-1": "", "w-full": "", "bg-neutral-400": "", "area-hr-1": "" }, null, -1)), l[5] || (l[5] = $("hr", { "sr-only": "", relative: "", "h-1": "", "w-full": "", "bg-neutral-400": "", "area-hr-2": "", "lg:hidden": "" }, null, -1)), l[6] || (l[6] = $("hr", { "sr-only": "", relative: "", "h-1": "", "w-full": "", "bg-neutral-400": "", "area-hr-3": "", "md:hidden": "" }, null, -1))])], 2);
  };
} }), go = Object.assign(Fe(vo, [["__scopeId", "data-v-8da03509"]]), { __name: "NavigationFooter" }), ho = ea(Ka), wo = { fixed: "", "bottom-20": "", "right-20": "", "z-102": "" }, Ho = q({ __name: "default", props: { darkHeader: { type: Boolean, default: false }, footerBgColor: { default: "grey" }, draft: { type: Boolean }, showSocialsHexagonBg: { type: Boolean } }, async setup(n) {
  let a, i;
  const { data: o } = ([a, i] = ue(() => Se()), a = await a, i(), a);
  return (t, u) => {
    const l = ho, d = Ya, h = Zn, s = Ma, _ = no, p = go;
    return b(), D(X, null, [x(l), e(o).announcementBannerShow ? (b(), O(d, st(de({ key: 0 }, e(o))), null, 16)) : B("", true), x(h, { "dark-header": t.darkHeader }, null, 8, ["dark-header"]), Z(t.$slots, "default"), $("div", wo, [x(s, { draft: t.draft, "with-env": "" }, null, 8, ["draft"])]), x(_, { "z-1": "", "bg-color": t.footerBgColor, "with-socials": t.showSocialsHexagonBg }, null, 8, ["bg-color", "with-socials"]), x(p, { "bg-color": t.footerBgColor }, null, 8, ["bg-color"])], 64);
  };
} });
export {
  Ho as default
};
