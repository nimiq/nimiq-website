import { O as hr, P as pr, Q as mr, R as An, S as vr, d as H, b as O, o as _, w as A, T as ct, m as Dt, u as h, U as _t, V as At, W as us, X as gr, Y as te, Z as yr, B as V, $ as cs, a0 as ds, i as F, a1 as ie, a2 as Hn, a3 as fs, a4 as br, a as C, a5 as wr, a6 as xr, a7 as Tr, a8 as Sr, a9 as Wn, aa as ki, ab as hs, ac as Xe, f as I, E as oe, c as L, F as st, ad as Pr, ae as Pt, H as Ye, e as E, t as U, af as Pe, g as rt, s as $t, r as ht, n as Mt, ag as Ar, ah as _r, ai as Mr, h as Ze, aj as Cr, ak as ps, N as ms, al as vs, G as gs, q as Er, z as kr, _ as an, l as Dr, D as Vr, am as Rr, an as Lr, ao as Or, ap as $r, aq as Br, ar as Fr, as as Ir, at as jr, au as Nr, av as Ur, aw as zr } from "./C95QRNzc.js";
import { a as ys, b as bs } from "./CCkBGt8y.js";
import { u as Kn, S as B } from "./CEa9i5vs.js";
import { _ as Hr, a as Wr, b as Kr } from "./CRCf2bs3.js";
import { u as ws, _ as Gr, a as qr, b as Xr, c as Yr } from "./5p8HELpg.js";
import { _ as Zr } from "./WaquPWJ1.js";
import { _ as Gn } from "./DlAUqK2U.js";
import { u as Ae, _ as Jr } from "./D_ZwI0Z3.js";
import { u as Qr } from "./FrdfJexk.js";
import { a as tl, b as el, d as nl, e as il, u as ol } from "./DEpc-rVb.js";
import { u as sl } from "./53IlvnBa.js";
import { _ as al } from "./CDi0xZhw.js";
import { g as xs } from "./CVc7iRBp.js";
import { _ as rl } from "./Cwwsn_3p.js";
import "./DCDih-ug.js";
import "./CHIgUVhi.js";
import "./BPgVFFXt.js";
import "./B6YpvMVi.js";
import "./UtPS5osl.js";
function ll(t = {}) {
  var _a2;
  const e = An(""), n = An(t.politeness || "polite"), i = vr();
  function o(c = "", u = "polite") {
    e.value = c, n.value = u;
  }
  function a(c) {
    return o(c, "polite");
  }
  function s(c) {
    return o(c, "assertive");
  }
  function r() {
    var _a3;
    o((_a3 = document == null ? void 0 : document.title) == null ? void 0 : _a3.trim(), n.value);
  }
  function l() {
    var _a3;
    (_a3 = i == null ? void 0 : i.hooks) == null ? void 0 : _a3.removeHook("dom:rendered", r);
  }
  return r(), (_a2 = i == null ? void 0 : i.hooks) == null ? void 0 : _a2.hook("dom:rendered", () => {
    r();
  }), { _cleanup: l, message: e, politeness: n, set: o, polite: a, assertive: s };
}
function ul(t = {}) {
  const e = hr(), n = e._routeAnnouncer || (e._routeAnnouncer = ll(t));
  return t.politeness !== n.politeness.value && (n.politeness.value = t.politeness || "polite"), pr() && (e._routeAnnouncerDeps || (e._routeAnnouncerDeps = 0), e._routeAnnouncerDeps++, mr(() => {
    e._routeAnnouncerDeps--, e._routeAnnouncerDeps === 0 && (n._cleanup(), delete e._routeAnnouncer);
  })), n;
}
const cl = H({ __name: "MenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t;
  return (n, i) => (_(), O(h(_t), Dt(e, { role: "separator", "aria-orientation": "horizontal" }), { default: A(() => [ct(n.$slots, "default")]), _: 3 }, 16));
} }), dl = H({ __name: "DropdownMenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t;
  return At(), (n, i) => (_(), O(h(cl), us(gr(e)), { default: A(() => [ct(n.$slots, "default")]), _: 3 }, 16));
} });
function rn(t) {
  return t ? "open" : "closed";
}
function Ts(t, e) {
  return `${t}-trigger-${e}`;
}
function qn(t, e) {
  return `${t}-content-${e}`;
}
const fl = "navigationMenu.linkSelect", We = "navigationMenu.rootContentDismiss";
function _n(t) {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (i) => {
    const o = i.tagName === "INPUT" && i.type === "hidden";
    return i.disabled || i.hidden || o ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) e.push(n.currentNode);
  return e;
}
function Ss(t) {
  const e = te();
  return t.some((n) => n === e ? true : (n.focus(), te() !== e));
}
function hl(t) {
  return t.forEach((e) => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
  }), () => {
    t.forEach((e) => {
      const n = e.dataset.tabindex;
      e.setAttribute("tabindex", n);
    });
  };
}
function Ps(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
const [Gt, pl] = Hn(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), ml = H({ __name: "NavigationMenuRoot", props: { modelValue: { default: void 0 }, defaultValue: {}, dir: {}, orientation: { default: "horizontal" }, delayDuration: { default: 200 }, skipDelayDuration: { default: 300 }, disableClickTrigger: { type: Boolean, default: false }, disableHoverTrigger: { type: Boolean, default: false }, disablePointerLeaveClose: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:modelValue"], setup(t, { emit: e }) {
  const n = t, o = yr(n, "modelValue", e, { defaultValue: n.defaultValue ?? "", passive: n.modelValue === void 0 }), a = V(""), { forwardRef: s, currentElement: r } = At(), l = V(), c = V(), u = V(), { getItems: d, CollectionSlot: f } = Ae({ key: "NavigationMenu", isProvider: true }), { delayDuration: p, skipDelayDuration: m, dir: g, disableClickTrigger: w, disableHoverTrigger: P, unmountOnHide: y } = cs(n), v = Qr(g), x = ds(false, m), b = F(() => o.value !== "" || x.value ? 150 : p.value), S = br((T) => {
    typeof T == "string" && (a.value = o.value, o.value = T);
  }, b);
  return ie(() => {
    if (!o.value) return;
    const T = d().map((M) => M.ref);
    u.value = T.find((M) => M.id.includes(o.value));
  }), pl({ isRootMenu: true, modelValue: o, previousValue: a, baseId: fs(void 0, "reka-navigation-menu"), disableClickTrigger: w, disableHoverTrigger: P, dir: v, unmountOnHide: y, orientation: n.orientation, rootNavigationMenu: r, indicatorTrack: l, activeTrigger: u, onIndicatorTrackChange: (T) => {
    l.value = T;
  }, viewport: c, onViewportChange: (T) => {
    c.value = T;
  }, onTriggerEnter: (T) => {
    S(T);
  }, onTriggerLeave: () => {
    x.value = true, S("");
  }, onContentEnter: () => {
    S();
  }, onContentLeave: () => {
    n.disablePointerLeaveClose || S("");
  }, onItemSelect: (T) => {
    a.value = o.value, o.value = T;
  }, onItemDismiss: () => {
    a.value = o.value, o.value = "";
  } }), (T, M) => (_(), O(h(f), null, { default: A(() => [C(h(_t), { ref: h(s), "aria-label": "Main", as: T.as, "as-child": T.asChild, "data-orientation": T.orientation, dir: h(v), "data-reka-navigation-menu": "" }, { default: A(() => [ct(T.$slots, "default", { modelValue: h(o) })]), _: 3 }, 8, ["as", "as-child", "data-orientation", "dir"])]), _: 3 }));
} }), [Xn, vl] = Hn("NavigationMenuItem"), gl = H({ __name: "NavigationMenuItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "li" } }, setup(t) {
  const e = t;
  At();
  const { getItems: n } = Ae({ key: "NavigationMenu" }), i = Gt(), o = fs(e.value), a = V(), s = V(), r = qn(i.baseId, o);
  let l = () => ({});
  const c = V(false);
  async function u(m = "start") {
    const g = document.getElementById(r);
    if (g) {
      l();
      const w = _n(g);
      w.length && Ss(m === "start" ? w : w.reverse());
    }
  }
  function d() {
    const m = document.getElementById(r);
    if (m) {
      const g = _n(m);
      g.length && (l = hl(g));
    }
  }
  vl({ value: o, contentId: r, triggerRef: a, focusProxyRef: s, wasEscapeCloseRef: c, onEntryKeyDown: u, onFocusProxyEnter: u, onContentFocusOutside: d, onRootContentClose: d });
  function f() {
    var _a2;
    i.onItemDismiss(), (_a2 = a.value) == null ? void 0 : _a2.focus();
  }
  function p(m) {
    const g = te();
    if (m.keyCode === 32 || m.key === "Enter") if (i.modelValue.value === o) {
      f(), m.preventDefault();
      return;
    } else {
      m.target.click(), m.preventDefault();
      return;
    }
    const w = n().filter((y) => {
      var _a2;
      return (_a2 = y.ref.parentElement) == null ? void 0 : _a2.hasAttribute("data-menu-item");
    }).map((y) => y.ref);
    if (!w.includes(g)) return;
    const P = ws(m, g, void 0, { itemsArray: w, loop: false });
    P && (P == null ? void 0 : P.focus()), m.preventDefault(), m.stopPropagation();
  }
  return (m, g) => (_(), O(h(_t), { "as-child": m.asChild, as: m.as, "data-menu-item": "", onKeydown: wr(p, ["up", "down", "left", "right", "home", "end", "space"]) }, { default: A(() => [ct(m.$slots, "default")]), _: 3 }, 8, ["as-child", "as"]));
} }), yl = H({ __name: "NavigationMenuContentImpl", props: { disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t, { emit: e }) {
  const n = t, i = e, { getItems: o } = Ae({ key: "NavigationMenu" }), { forwardRef: a, currentElement: s } = At(), r = Gt(), l = Xn(), c = Ts(r.baseId, l.value), u = qn(r.baseId, l.value), d = V(null), f = F(() => {
    const y = o().map((M) => M.ref.id.split("trigger-")[1]);
    r.dir.value === "rtl" && y.reverse();
    const v = y.indexOf(r.modelValue.value), x = y.indexOf(r.previousValue.value), b = l.value === r.modelValue.value, S = x === y.indexOf(l.value);
    if (!b && !S) return d.value;
    const T = (() => {
      if (v !== x) {
        if (b && x !== -1) return v > x ? "from-end" : "from-start";
        if (S && v !== -1) return v > x ? "to-start" : "to-end";
      }
      return null;
    })();
    return d.value = T, T;
  });
  function p(y) {
    var _a2, _b;
    if (i("focusOutside", y), i("interactOutside", y), y.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && y.preventDefault(), !y.defaultPrevented) {
      l.onContentFocusOutside();
      const x = y.target;
      ((_b = (_a2 = r.rootNavigationMenu) == null ? void 0 : _a2.value) == null ? void 0 : _b.contains(x)) && y.preventDefault();
    }
  }
  function m(y) {
    var _a2;
    if (i("pointerDownOutside", y), !y.defaultPrevented) {
      const v = y.target, x = o().some((S) => S.ref.contains(v)), b = r.isRootMenu && ((_a2 = r.viewport.value) == null ? void 0 : _a2.contains(v));
      (x || b || !r.isRootMenu) && y.preventDefault();
    }
  }
  ie((y) => {
    const v = s.value;
    if (r.isRootMenu && v) {
      const x = () => {
        var _a2;
        r.onItemDismiss(), l.onRootContentClose(), v.contains(te()) && ((_a2 = l.triggerRef.value) == null ? void 0 : _a2.focus());
      };
      v.addEventListener(We, x), y(() => v.removeEventListener(We, x));
    }
  });
  function g(y) {
    var _a2, _b;
    i("escapeKeyDown", y), y.defaultPrevented || (r.onItemDismiss(), (_b = (_a2 = l.triggerRef) == null ? void 0 : _a2.value) == null ? void 0 : _b.focus(), l.wasEscapeCloseRef.value = true);
  }
  function w(y) {
    var _a2, _b;
    if (y.target.closest("[data-reka-navigation-menu]") !== r.rootNavigationMenu.value) return;
    const v = y.altKey || y.ctrlKey || y.metaKey, x = y.key === "Tab" && !v, b = _n(y.currentTarget);
    if (x) {
      const T = te(), M = b.findIndex((tt) => tt === T), G = y.shiftKey ? b.slice(0, M).reverse() : b.slice(M + 1, b.length);
      if (Ss(G)) y.preventDefault();
      else {
        (_a2 = l.focusProxyRef.value) == null ? void 0 : _a2.focus();
        return;
      }
    }
    (_b = ws(y, te(), void 0, { itemsArray: b, loop: false, enableIgnoredElement: true })) == null ? void 0 : _b.focus();
  }
  function P() {
    var _a2;
    const y = new Event(We, { bubbles: true, cancelable: true });
    (_a2 = s.value) == null ? void 0 : _a2.dispatchEvent(y);
  }
  return (y, v) => (_(), O(h(xr), Dt({ id: h(u), ref: h(a), "aria-labelledby": h(c), "data-motion": f.value, "data-state": h(rn)(h(r).modelValue.value === h(l).value), "data-orientation": h(r).orientation }, n, { onKeydown: w, onEscapeKeyDown: g, onPointerDownOutside: m, onFocusOutside: p, onDismiss: P }), { default: A(() => [ct(y.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
} }), bl = H({ inheritAttrs: false, __name: "NavigationMenuContent", props: { forceMount: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t, { emit: e }) {
  const n = t, i = e, o = Tr(Sr(n, "forceMount"), i), { forwardRef: a } = At(), s = Gt(), r = Xn(), l = F(() => r.value === s.modelValue.value), c = F(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === r.value : false);
  return (u, d) => (_(), O(hs, { to: h(ki) && h(s).viewport.value ? h(s).viewport.value : "body", disabled: h(ki) && h(s).viewport.value ? !h(s).viewport.value : true }, [C(h(Wn), { present: u.forceMount || l.value || c.value, "force-mount": !h(s).unmountOnHide.value }, { default: A(({ present: f }) => [C(yl, Dt({ ref: h(a), "data-state": h(rn)(l.value), style: { pointerEvents: !l.value && h(s).isRootMenu ? "none" : void 0 } }, { ...u.$attrs, ...h(o) }, { hidden: !f, onPointerenter: d[0] || (d[0] = (p) => h(s).onContentEnter(h(r).value)), onPointerleave: d[1] || (d[1] = (p) => h(Ps)(() => h(s).onContentLeave())(p)), onPointerDownOutside: d[2] || (d[2] = (p) => i("pointerDownOutside", p)), onFocusOutside: d[3] || (d[3] = (p) => i("focusOutside", p)), onInteractOutside: d[4] || (d[4] = (p) => i("interactOutside", p)) }), { default: A(() => [ct(u.$slots, "default")]), _: 2 }, 1040, ["data-state", "style", "hidden"])]), _: 3 }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
} }), wl = H({ inheritAttrs: false, __name: "NavigationMenuIndicator", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t, { forwardRef: n } = At(), i = Gt(), o = V(), a = F(() => i.orientation === "horizontal"), s = F(() => !!i.modelValue.value), { activeTrigger: r } = i;
  function l() {
    r.value && (o.value = { size: a.value ? r.value.offsetWidth : r.value.offsetHeight, position: a.value ? r.value.offsetLeft : r.value.offsetTop });
  }
  return ie(() => {
    i.modelValue.value && l();
  }), Xe(r, l), Xe(i.indicatorTrack, l), (c, u) => h(i).indicatorTrack.value ? (_(), O(hs, { key: 0, to: h(i).indicatorTrack.value }, [C(h(Wn), { present: c.forceMount || s.value }, { default: A(() => [C(h(_t), Dt({ ref: h(n), "aria-hidden": "true", "data-state": s.value ? "visible" : "hidden", "data-orientation": h(i).orientation, "as-child": e.asChild, as: c.as, style: { ...o.value ? { "--reka-navigation-menu-indicator-size": `${o.value.size}px`, "--reka-navigation-menu-indicator-position": `${o.value.position}px` } : {} } }, c.$attrs), { default: A(() => [ct(c.$slots, "default")]), _: 3 }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])]), _: 3 }, 8, ["present"])], 8, ["to"])) : I("", true);
} }), xl = H({ __name: "NavigationMenuLink", props: { active: { type: Boolean }, asChild: { type: Boolean }, as: { default: "a" } }, emits: ["select"], setup(t, { emit: e }) {
  const n = t, i = e, { CollectionItem: o } = Ae({ key: "NavigationMenu" });
  At();
  async function a(s) {
    var _a2;
    const r = new CustomEvent(fl, { bubbles: true, cancelable: true, detail: { originalEvent: s } });
    if (i("select", r), !r.defaultPrevented && !s.metaKey) {
      const l = new CustomEvent(We, { bubbles: true, cancelable: true });
      (_a2 = s.target) == null ? void 0 : _a2.dispatchEvent(l);
    }
  }
  return (s, r) => (_(), O(h(o), null, { default: A(() => [C(h(_t), { as: s.as, "data-active": s.active ? "" : void 0, "aria-current": s.active ? "page" : void 0, "as-child": n.asChild, onClick: a }, { default: A(() => [ct(s.$slots, "default")]), _: 3 }, 8, ["as", "data-active", "aria-current", "as-child"])]), _: 3 }));
} }), Tl = H({ inheritAttrs: false, __name: "NavigationMenuList", props: { asChild: { type: Boolean }, as: { default: "ul" } }, setup(t) {
  const e = t, n = Gt(), { forwardRef: i, currentElement: o } = At();
  return oe(() => {
    n.onIndicatorTrackChange(o.value);
  }), (a, s) => (_(), O(h(_t), { ref: h(i), style: { position: "relative" } }, { default: A(() => [C(h(_t), Dt(a.$attrs, { "as-child": e.asChild, as: a.as, "data-orientation": h(n).orientation }), { default: A(() => [ct(a.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-orientation"])]), _: 3 }, 512));
} }), Sl = ["aria-owns"], Pl = H({ inheritAttrs: false, __name: "NavigationMenuTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(t) {
  const e = t, n = Gt(), i = Xn(), { CollectionItem: o } = Ae({ key: "NavigationMenu" }), { forwardRef: a, currentElement: s } = At(), r = V(""), l = V(""), c = ds(false, 300), u = V(false), d = F(() => i.value === n.modelValue.value);
  oe(() => {
    i.triggerRef = s, r.value = Ts(n.baseId, i.value), l.value = qn(n.baseId, i.value);
  });
  function f() {
    n.disableHoverTrigger.value || (u.value = false, i.wasEscapeCloseRef.value = false);
  }
  function p(v) {
    if (!n.disableHoverTrigger.value && v.pointerType === "mouse") {
      if (e.disabled || u.value || i.wasEscapeCloseRef.value || c.value) return;
      n.onTriggerEnter(i.value), c.value = true;
    }
  }
  function m(v) {
    if (!n.disableHoverTrigger.value && v.pointerType === "mouse") {
      if (e.disabled) return;
      n.onTriggerLeave(), c.value = false;
    }
  }
  function g(v) {
    v.pointerType === "mouse" && n.disableClickTrigger.value || c.value || (d.value ? n.onItemSelect("") : n.onItemSelect(i.value), u.value = d.value);
  }
  function w(v) {
    const b = { horizontal: "ArrowDown", vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[n.orientation];
    d.value && v.key === b && (i.onEntryKeyDown(), v.preventDefault(), v.stopPropagation());
  }
  function P(v) {
    i.focusProxyRef.value = Pr(v);
  }
  function y(v) {
    const x = document.getElementById(i.contentId), b = v.relatedTarget, S = b === s.value, T = x == null ? void 0 : x.contains(b);
    (S || !T) && i.onFocusProxyEnter(S ? "start" : "end");
  }
  return (v, x) => (_(), L(st, null, [C(h(o), null, { default: A(() => [C(h(_t), Dt({ id: r.value, ref: h(a), disabled: v.disabled, "data-disabled": v.disabled ? "" : void 0, "data-state": h(rn)(d.value), "data-navigation-menu-trigger": "", "aria-expanded": d.value, "aria-controls": l.value, "as-child": e.asChild, as: v.as }, v.$attrs, { onPointerenter: f, onPointermove: p, onPointerleave: m, onClick: g, onKeydown: w }), { default: A(() => [ct(v.$slots, "default")]), _: 3 }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"])]), _: 3 }), d.value ? (_(), L(st, { key: 0 }, [C(h(Jr), { ref: P, "aria-hidden": "true", tabindex: 0, onFocus: y }), h(n).viewport ? (_(), L("span", { key: 0, "aria-owns": l.value }, null, 8, Sl)) : I("", true)], 64)) : I("", true)], 64));
} }), Al = H({ inheritAttrs: false, __name: "NavigationMenuViewport", props: { forceMount: { type: Boolean }, align: { default: "center" }, asChild: { type: Boolean }, as: {} }, setup(t) {
  var _a2;
  const e = t, { forwardRef: n, currentElement: i } = At(), o = Gt(), { activeTrigger: a, rootNavigationMenu: s, modelValue: r } = o, l = V(), c = V(), u = F(() => !!o.modelValue.value);
  Pt(i, () => {
    o.onViewportChange(i.value);
  });
  const d = V();
  Pt([r, u], () => {
    i.value && requestAnimationFrame(() => {
      var _a3;
      const p = (_a3 = i.value) == null ? void 0 : _a3.querySelector("[data-state=open]");
      d.value = p;
    });
  }, { immediate: true, flush: "post" });
  function f() {
    if (d.value && a.value && s.value) {
      const p = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, g = s.value.getBoundingClientRect(), w = a.value.getBoundingClientRect(), { offsetWidth: P, offsetHeight: y } = d.value, v = w.left - g.left, x = w.top - g.top;
      let b = null, S = null;
      switch (e.align) {
        case "start":
          b = v, S = x;
          break;
        case "end":
          b = v - P + w.width, S = x - y + w.height;
          break;
        default:
          b = v - P / 2 + w.width / 2, S = x - y / 2 + w.height / 2;
      }
      const T = 10;
      b + g.left < T && (b = T - g.left);
      const M = b + g.left + P;
      M > p - T && (b -= M - p + T, b < T - g.left && (b = T - g.left)), S + g.top < T && (S = T - g.top);
      const R = S + g.top + y;
      R > m - T && (S -= R - m + T, S < T - g.top && (S = T - g.top)), b = Math.round(b), S = Math.round(S), c.value = { left: b, top: S };
    }
  }
  return Xe(d, () => {
    d.value && (l.value = { width: d.value.offsetWidth, height: d.value.offsetHeight }, f());
  }), Xe([(_a2 = globalThis.document) == null ? void 0 : _a2.body, s], () => {
    f();
  }), (p, m) => (_(), O(h(Wn), { present: p.forceMount || u.value, "force-mount": !h(o).unmountOnHide.value, onAfterLeave: m[2] || (m[2] = () => {
    l.value = void 0, c.value = void 0;
  }) }, { default: A(({ present: g }) => {
    var _a3, _b, _c2, _d2;
    return [C(h(_t), Dt(p.$attrs, { ref: h(n), as: p.as, "as-child": p.asChild, "data-state": h(rn)(u.value), "data-orientation": h(o).orientation, style: { pointerEvents: !u.value && h(o).isRootMenu ? "none" : void 0, "--reka-navigation-menu-viewport-width": l.value ? `${(_a3 = l.value) == null ? void 0 : _a3.width}px` : void 0, "--reka-navigation-menu-viewport-height": l.value ? `${(_b = l.value) == null ? void 0 : _b.height}px` : void 0, "--reka-navigation-menu-viewport-left": c.value ? `${(_c2 = c.value) == null ? void 0 : _c2.left}px` : void 0, "--reka-navigation-menu-viewport-top": c.value ? `${(_d2 = c.value) == null ? void 0 : _d2.top}px` : void 0 }, hidden: !g, onPointerenter: m[0] || (m[0] = (w) => h(o).onContentEnter(h(o).modelValue.value)), onPointerleave: m[1] || (m[1] = (w) => h(Ps)(() => h(o).onContentLeave())(w)) }), { default: A(() => [ct(p.$slots, "default")]), _: 2 }, 1040, ["as", "as-child", "data-state", "data-orientation", "style", "hidden"])];
  }), _: 3 }, 8, ["present", "force-mount"]));
} }), _l = H({ name: "NuxtRouteAnnouncer", props: { atomic: { type: Boolean, default: false }, politeness: { type: String, default: "polite" } }, setup(t, { slots: e, expose: n }) {
  const { set: i, polite: o, assertive: a, message: s, politeness: r } = ul({ politeness: t.politeness });
  return n({ set: i, polite: o, assertive: a, message: s, politeness: r }), () => Ye("span", { class: "nuxt-route-announcer", style: { position: "absolute" } }, Ye("span", { role: "alert", "aria-live": r.value, "aria-atomic": t.atomic, style: { border: "0", clip: "rect(0 0 0 0)", "clip-path": "inset(50%)", height: "1px", width: "1px", overflow: "hidden", position: "absolute", "white-space": "nowrap", "word-wrap": "normal", margin: "-1px", padding: "0" } }, e.default ? e.default({ message: s.value }) : s.value));
} }), Ml = { role: "banner", p: "x-32 t-20 b-24 md:y-20", "aria-label": "Announcement", "bg-darkblue": "", "w-full": "", relative: "", "z-2": "", "of-hidden": "", flex: "~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16" }, Cl = { text: "md white", "font-semibold": "", "z-1": "" }, El = H({ __name: "AnnouncementBanner", props: { announcementBannerHeadline: {}, announcementBannerCtaLink: {}, announcementBannerCtaLabel: {} }, setup(t) {
  return (e, n) => {
    const i = Pe;
    return _(), L("div", Ml, [E("p", Cl, U(t.announcementBannerHeadline), 1), ("hasLink" in e ? e.hasLink : h(ys))(t.announcementBannerCtaLink) ? (_(), O(i, { key: 0, field: t.announcementBannerCtaLink, "mx-0": "", "z-1": "", "nq-pill-secondary": "", "hocus:bg-neutral-300": "" }, { default: A(() => [rt(U(t.announcementBannerCtaLabel), 1)]), _: 1 }, 8, ["field"])) : I("", true), n[0] || (n[0] = E("div", { "mx-auto": "", "max-w-3120": "", "w-full": "", "inset-0": "", absolute: "" }, [E("div", { top: "36 lg:40", right: "-300 lg:-261", "rounded-8": "", "op-30": "", "h-159": "", "w-606": "", absolute: "", "blur-120": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } }), E("div", { top: "36 lg:40", left: "-300 lg:-261", "rounded-8": "", "op-30": "", "h-159": "", "w-606": "", absolute: "", "blur-120": "", "max-md:hidden": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } })], -1)), n[1] || (n[1] = E("div", { "op-10": "", "inset-0": "", absolute: "", style: { background: "radial-gradient(78.95% 73.1% at 12.5% 14.72%, #FFFFFF 0%, rgb(var(--nq-neutral-0) / 0.62)) 100%)" } }, null, -1)), n[2] || (n[2] = E("div", { "op-10": "", "inset-0": "", absolute: "", style: { background: "linear-gradient(180deg, rgba(4, 6, 40, 0.5) 0%, rgba(4, 6, 40, 0.25) 50%, rgba(4, 6, 40, 0.5) 100%)" } }, null, -1)), n[3] || (n[3] = E("div", { "max-w": "[calc(100%-64px)]", "rounded-8": "", "op-80": "", "w-606": "", "aspect-3.811": "", "inset-auto": "", "top-49": "", absolute: "", "blur-120": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } }, null, -1)), n[4] || (n[4] = E("div", { "max-w-1900": "", "w-full": "", "inset-y-0": "", absolute: "", "xl:mx-auto": "", "xl:inset-x-0": "" }, [E("div", { "i-announcement:sm-identicons-right": "", absolute: "", "lg:i-announcement:lg-identicons-right": "", "xl:i-announcement:xl-identicons-right": "", right: "-35 lg:-65 xl:-30", top: "-56 md:-60 lg:-80 xl:-33", h: "223 xl:136", w: "220 xl:434" }), E("div", { absolute: "", "lg:i-announcement:lg-identicons-left": "", "md:i-announcement:md-identicons-left": "", "xl:i-announcement:xl-identicons-left": "", left: "-35 lg:-65 xl:-30", top: "-56 md:-60 lg:-80 xl:-33", h: "223 xl:136", w: "220 xl:434" })], -1))]);
  };
} }), kl = Object.assign(El, { __name: "NavigationAnnouncementBanner" }), Dl = { key: 0, role: "list", flex: "~ items-center gap-2 wrap", "text-neutral-700": "" }, Vl = H({ __name: "SocialMediaLogosList", props: { items: {} }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Kn()), e = await e, n(), e), o = F(() => t.items.map((s) => i.value[s]).filter(Boolean)), a = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return (s, r) => {
    var _a2;
    const l = Pe;
    return ((_a2 = h(o)) == null ? void 0 : _a2.length) > 0 ? (_(), L("ul", Dl, [(_(true), L(st, null, ht(h(o), ({ platform: c, icon: u, link: d }) => (_(), L("li", { key: c, "self-stretch": "", "justify-self-stretch": "", "aria-label": "Links to some of our social media pages" }, [C(l, { title: a(c), field: d, focusable: "", "p-8": "", "rounded-4": "", flex: "", "h-max": "", bg: "hocus:darkblue/6", "aria-label": `Visit Nimiq on ${c}` }, { default: A(() => [E("div", { class: Mt(u) }, null, 2)]), _: 2 }, 1032, ["title", "field", "aria-label"])]))), 128))])) : I("", true);
  };
} }), Yn = Object.assign(Vl, { __name: "SocialMediaLogosList" });
(function() {
  var t;
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.nonce = (t = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : t.content, e.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(e);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
const Rl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ll = (t) => typeof t < "u";
function Ol(t) {
  return JSON.parse(JSON.stringify(t));
}
function Di(t, e, n, i = {}) {
  var o, a, s;
  const { clone: r = false, passive: l = false, eventName: c, deep: u = false, defaultValue: d, shouldEmit: f } = i, p = ps(), m = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (a = p == null ? void 0 : p.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let g = c;
  e || (e = "modelValue"), g = g || `update:${e.toString()}`;
  const w = (v) => r ? typeof r == "function" ? r(v) : Ol(v) : v, P = () => Ll(t[e]) ? w(t[e]) : d, y = (v) => {
    f ? f(v) && m(g, v) : m(g, v);
  };
  if (l) {
    const v = P(), x = V(v);
    let b = false;
    return Pt(() => t[e], (S) => {
      b || (b = true, x.value = w(S), ms(() => b = false));
    }), Pt(x, (S) => {
      !b && (S !== t[e] || u) && y(S);
    }, { deep: u }), x;
  } else return F({ get() {
    return P();
  }, set(v) {
    y(v);
  } });
}
const [Zn, $l] = Hn("DrawerRoot"), As = /* @__PURE__ */ new WeakMap();
function nt(t, e, n = false) {
  if (!t || !(t instanceof HTMLElement) || !e) return;
  const i = {};
  Object.entries(e).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      t.style.setProperty(o, a);
      return;
    }
    i[o] = t.style[o], t.style[o] = a;
  }), !n && As.set(t, i);
}
function Bl(t, e) {
  if (!t || !(t instanceof HTMLElement)) return;
  const n = As.get(t);
  n && Object.entries(n).forEach(([i, o]) => {
    t.style[i] = o;
  });
}
function Ie(t, e) {
  const n = window.getComputedStyle(t), i = n.transform || n.webkitTransform || n.mozTransform;
  let o = i.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Z(e) ? 13 : 12]) : (o = i.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Z(e) ? 5 : 4]) : null);
}
function Fl(t) {
  return 8 * (Math.log(t + 1) - 2);
}
function Z(t) {
  switch (t) {
    case "top":
    case "bottom":
      return true;
    case "left":
    case "right":
      return false;
    default:
      return t;
  }
}
function cn(t, e) {
  if (!t) return () => {
  };
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function Il(...t) {
  return (...e) => {
    for (const n of t) typeof n == "function" && n(...e);
  };
}
const K = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, _s = 0.4, jl = 0.25, Nl = 100, Ms = 8, je = 16, Cs = 26, Vi = "vaul-dragging";
function Ul({ activeSnapPoint: t, snapPoints: e, drawerRef: n, overlayRef: i, fadeFromIndex: o, onSnapPointChange: a, direction: s }) {
  const r = V(typeof window < "u" ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight } : void 0);
  function l() {
    r.value = { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
  }
  oe(() => {
    typeof window < "u" && window.addEventListener("resize", l);
  }), vs(() => {
    typeof window < "u" && window.removeEventListener("resize", l);
  });
  const c = F(() => (e.value && t.value === e.value[e.value.length - 1]) ?? null), u = F(() => e.value && e.value.length > 0 && ((o == null ? void 0 : o.value) || (o == null ? void 0 : o.value) === 0) && !Number.isNaN(o == null ? void 0 : o.value) && e.value[(o == null ? void 0 : o.value) ?? -1] === t.value || !e.value), d = F(() => {
    var y;
    return ((y = e.value) == null ? void 0 : y.findIndex((v) => v === t.value)) ?? null;
  }), f = F(() => {
    var y;
    return ((y = e.value) == null ? void 0 : y.map((v) => {
      const x = typeof v == "string";
      let b = 0;
      if (x && (b = Number.parseInt(v, 10)), Z(s.value)) {
        const T = x ? b : r.value ? v * r.value.innerHeight : 0;
        return r.value ? s.value === "bottom" ? r.value.innerHeight - T : -r.value.innerHeight + T : T;
      }
      const S = x ? b : r.value ? v * r.value.innerWidth : 0;
      return r.value ? s.value === "right" ? r.value.innerWidth - S : -r.value.innerWidth + S : S;
    })) ?? [];
  }), p = F(() => {
    var y;
    return d.value !== null ? (y = f.value) == null ? void 0 : y[d.value] : null;
  }), m = (y) => {
    var v, x, b, S;
    const T = ((v = f.value) == null ? void 0 : v.findIndex((M) => M === y)) ?? null;
    ms(() => {
      var M;
      a(T, f.value), nt((M = n.value) == null ? void 0 : M.$el, { transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, transform: Z(s.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)` });
    }), f.value && T !== f.value.length - 1 && T !== (o == null ? void 0 : o.value) ? nt((x = i.value) == null ? void 0 : x.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, opacity: "0" }) : nt((b = i.value) == null ? void 0 : b.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, opacity: "1" }), t.value = T !== null ? ((S = e.value) == null ? void 0 : S[T]) ?? null : null;
  };
  Pt([t, f, e], () => {
    var y;
    if (t.value) {
      const v = ((y = e.value) == null ? void 0 : y.findIndex((x) => x === t.value)) ?? -1;
      f.value && v !== -1 && typeof f.value[v] == "number" && m(f.value[v]);
    }
  }, { immediate: true });
  function g({ draggedDistance: y, closeDrawer: v, velocity: x, dismissible: b }) {
    var S, T, M;
    if (o.value === void 0) return;
    const R = s.value === "bottom" || s.value === "right" ? (p.value ?? 0) - y : (p.value ?? 0) + y, G = d.value === o.value - 1, tt = d.value === 0, dt = y > 0;
    if (G && nt((S = i.value) == null ? void 0 : S.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})` }), x > 2 && !dt) {
      b ? v() : m(f.value[0]);
      return;
    }
    if (x > 2 && dt && f && e.value) {
      m(f.value[e.value.length - 1]);
      return;
    }
    const bt = (T = f.value) == null ? void 0 : T.reduce((mt, $) => typeof mt != "number" || typeof $ != "number" ? mt : Math.abs($ - R) < Math.abs(mt - R) ? $ : mt), Ft = Z(s.value) ? window.innerHeight : window.innerWidth;
    if (x > _s && Math.abs(y) < Ft * 0.4) {
      const mt = dt ? 1 : -1;
      if (mt > 0 && c) {
        m(f.value[(((M = e.value) == null ? void 0 : M.length) ?? 0) - 1]);
        return;
      }
      if (tt && mt < 0 && b && v(), d.value === null) return;
      m(f.value[d.value + mt]);
      return;
    }
    m(bt);
  }
  function w({ draggedDistance: y }) {
    var v;
    if (p.value === null) return;
    const x = s.value === "bottom" || s.value === "right" ? p.value - y : p.value + y;
    (s.value === "bottom" || s.value === "right") && x < f.value[f.value.length - 1] || (s.value === "top" || s.value === "left") && x > f.value[f.value.length - 1] || nt((v = n.value) == null ? void 0 : v.$el, { transform: Z(s.value) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)` });
  }
  function P(y, v) {
    if (!e.value || typeof d.value != "number" || !f.value || o.value === void 0) return null;
    const x = d.value === o.value - 1;
    if (d.value >= o.value && v) return 0;
    if (x && !v) return 1;
    if (!u.value && !x) return null;
    const b = x ? d.value + 1 : d.value - 1, S = x ? f.value[b] - f.value[b - 1] : f.value[b + 1] - f.value[b], T = y / Math.abs(S);
    return x ? 1 - T : T;
  }
  return { isLastSnapPoint: c, shouldFade: u, getPercentageDragged: P, activeSnapPointIndex: d, onRelease: g, onDrag: w, snapPointsOffset: f };
}
function Ri() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let ce = null;
function zl(t) {
  const { isOpen: e, modal: n, nested: i, hasBeenOpened: o, preventScrollRestoration: a, noBodyStyles: s } = t, r = V(typeof window < "u" ? window.location.href : ""), l = V(0);
  function c() {
    if (Ri() && ce === null && e.value && !s.value) {
      ce = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      const { scrollX: d, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, { top: `${-l.value}px`, left: `${-d}px`, right: "0px", height: "auto" }), setTimeout(() => {
        requestAnimationFrame(() => {
          const p = f - window.innerHeight;
          p && l.value >= f && (document.body.style.top = `-${l.value + p}px`);
        });
      }, 300);
    }
  }
  function u() {
    if (Ri() && ce !== null && !s.value) {
      const d = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ce), window.requestAnimationFrame(() => {
        if (a.value && r.value !== window.location.href) {
          r.value = window.location.href;
          return;
        }
        window.scrollTo(f, d);
      }), ce = null;
    }
  }
  return oe(() => {
    function d() {
      l.value = window.scrollY;
    }
    d(), window.addEventListener("scroll", d), gs(() => {
      window.removeEventListener("scroll", d);
    });
  }), Pt([e, o, r], () => {
    i.value || !o.value || (e.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), n.value || setTimeout(() => {
      u();
    }, 500)) : u());
  }), { restorePositionSetting: u };
}
function Hl(t, e) {
  return t && t.value ? t : e;
}
function Wl(t) {
  const { emitDrag: e, emitRelease: n, emitClose: i, emitOpenChange: o, open: a, dismissible: s, nested: r, modal: l, shouldScaleBackground: c, setBackgroundColorOnScale: u, scrollLockTimeout: d, closeThreshold: f, activeSnapPoint: p, fadeFromIndex: m, direction: g, noBodyStyles: w, handleOnly: P, preventScrollRestoration: y } = t, v = V(a.value ?? false), x = V(false), b = V(false), S = V(false), T = V(null), M = V(null), R = V(null), G = V(null), tt = V(null), dt = V(false), bt = V(null), Ft = V(0), mt = V(false);
  V(0);
  const $ = V(null);
  V(0);
  const vt = F(() => {
    var D;
    return ((D = $.value) == null ? void 0 : D.$el.getBoundingClientRect().height) || 0;
  }), W = Hl(t.snapPoints, V(void 0)), De = F(() => {
    var D;
    return W && (((D = W.value) == null ? void 0 : D.length) ?? 0) > 0;
  }), Ve = V(null), { activeSnapPointIndex: le, onRelease: Re, snapPointsOffset: Le, onDrag: Oe, shouldFade: Rt, getPercentageDragged: qt } = Ul({ snapPoints: W, activeSnapPoint: p, drawerRef: $, fadeFromIndex: m, overlayRef: T, onSnapPointChange: Xt, direction: g });
  function Xt(D, X) {
    W.value && D === X.length - 1 && (M.value = /* @__PURE__ */ new Date());
  }
  zl({ isOpen: v, modal: l, nested: r, hasBeenOpened: x, noBodyStyles: w, preventScrollRestoration: y });
  function wt() {
    return (window.innerWidth - Cs) / window.innerWidth;
  }
  function Lt(D, X) {
    var et;
    if (!D) return false;
    let N = D;
    const it = (et = window.getSelection()) == null ? void 0 : et.toString(), at = $.value ? Ie($.value.$el, g.value) : null, gt = /* @__PURE__ */ new Date();
    if (N.hasAttribute("data-vaul-no-drag") || N.closest("[data-vaul-no-drag]")) return false;
    if (g.value === "right" || g.value === "left") return true;
    if (M.value && gt.getTime() - M.value.getTime() < 500) return false;
    if (at !== null && (g.value === "bottom" ? at > 0 : at < 0)) return true;
    if (it && it.length > 0) return false;
    if (tt.value && gt.getTime() - tt.value.getTime() < d.value && at === 0 || X) return tt.value = gt, false;
    for (; N; ) {
      if (N.scrollHeight > N.clientHeight) {
        if (N.scrollTop !== 0) return tt.value = /* @__PURE__ */ new Date(), false;
        if (N.getAttribute("role") === "dialog") return true;
      }
      N = N.parentNode;
    }
    return true;
  }
  function ar(D) {
    !s.value && !W.value || $.value && !$.value.$el.contains(D.target) || (b.value = true, R.value = /* @__PURE__ */ new Date(), D.target.setPointerCapture(D.pointerId), Ft.value = Z(g.value) ? D.clientY : D.clientX);
  }
  function rr(D) {
    var X, et, N, it, at, gt;
    if ($.value && b.value) {
      const Yt = g.value === "bottom" || g.value === "right" ? 1 : -1, $e = (Ft.value - (Z(g.value) ? D.clientY : D.clientX)) * Yt, Be = $e > 0, _i = W.value && !s.value && !Be;
      if (_i && le.value === 0) return;
      const un = Math.abs($e), Mi = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let It = un / vt.value;
      const Ci = qt(un, Be);
      if (Ci !== null && (It = Ci), _i && It >= 1 || !dt.value && !Lt(D.target, Be)) return;
      if ((X = $ == null ? void 0 : $.value) == null || X.$el.classList.add(Vi), dt.value = true, nt((et = $.value) == null ? void 0 : et.$el, { transition: "none" }), nt((N = T.value) == null ? void 0 : N.$el, { transition: "none" }), W.value && Oe({ draggedDistance: $e }), Be && !W.value) {
        const jt = Fl($e), Fe = Math.min(jt * -1, 0) * Yt;
        nt((it = $.value) == null ? void 0 : it.$el, { transform: Z(g.value) ? `translate3d(0, ${Fe}px, 0)` : `translate3d(${Fe}px, 0, 0)` });
        return;
      }
      const fr = 1 - It;
      if ((Rt.value || m.value && le.value === m.value - 1) && (e(It), nt((at = T.value) == null ? void 0 : at.$el, { opacity: `${fr}`, transition: "none" }, true)), Mi && T.value && c.value) {
        const jt = Math.min(wt() + It * (1 - wt()), 1), Fe = 8 - It * 8, Ei = Math.max(0, 14 - It * 14);
        nt(Mi, { borderRadius: `${Fe}px`, transform: Z(g.value) ? `scale(${jt}) translate3d(0, ${Ei}px, 0)` : `scale(${jt}) translate3d(${Ei}px, 0, 0)`, transition: "none" }, true);
      }
      if (!W.value) {
        const jt = un * Yt;
        nt((gt = $.value) == null ? void 0 : gt.$el, { transform: Z(g.value) ? `translate3d(0, ${jt}px, 0)` : `translate3d(${jt}px, 0, 0)` });
      }
    }
  }
  function Ai() {
    var D;
    if (!$.value) return;
    const X = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), et = Ie($.value.$el, g.value);
    nt($.value.$el, { transform: "translate3d(0, 0, 0)", transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})` }), nt((D = T.value) == null ? void 0 : D.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, opacity: "1" }), c.value && et && et > 0 && v.value && nt(X, { borderRadius: `${Ms}px`, overflow: "hidden", ...Z(g.value) ? { transform: `scale(${wt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${wt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${K.DURATION}s`, transitionTimingFunction: `cubic-bezier(${K.EASE.join(",")})` }, true);
  }
  function ue(D) {
    $.value && (i(), D || (v.value = false), window.setTimeout(() => {
      W.value && (p.value = W.value[0]);
    }, K.DURATION * 1e3));
  }
  ie(() => {
    if (!v.value && c.value && Rl) {
      const D = setTimeout(() => {
        Bl(document.body);
      }, 200);
      return () => clearTimeout(D);
    }
  }), Pt(a, () => {
    v.value = a.value, a.value || ue();
  });
  function lr(D) {
    if (!b.value || !$.value) return;
    $.value.$el.classList.remove(Vi), dt.value = false, b.value = false, G.value = /* @__PURE__ */ new Date();
    const X = Ie($.value.$el, g.value);
    if (!Lt(D.target, false) || !X || Number.isNaN(X) || R.value === null) return;
    const et = G.value.getTime() - R.value.getTime(), N = Ft.value - (Z(g.value) ? D.clientY : D.clientX), it = Math.abs(N) / et;
    if (it > 0.05 && (S.value = true, window.setTimeout(() => {
      S.value = false;
    }, 200)), W.value) {
      const gt = g.value === "bottom" || g.value === "right" ? 1 : -1;
      Re({ draggedDistance: N * gt, closeDrawer: ue, velocity: it, dismissible: s.value }), n(true);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? N > 0 : N < 0) {
      Ai(), n(true);
      return;
    }
    if (it > _s) {
      ue(), n(false);
      return;
    }
    const at = Math.min($.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight);
    if (X >= at * f.value) {
      ue(), n(false);
      return;
    }
    n(true), Ai();
  }
  Pt(v, (D) => {
    D && (M.value = /* @__PURE__ */ new Date()), o(D);
  }, { immediate: true });
  function ur(D) {
    var X, et;
    const N = D ? (window.innerWidth - je) / window.innerWidth : 1, it = D ? -16 : 0;
    bt.value && window.clearTimeout(bt.value), nt((X = $.value) == null ? void 0 : X.$el, { transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, transform: `scale(${N}) translate3d(0, ${it}px, 0)` }), !D && (et = $.value) != null && et.$el && (bt.value = window.setTimeout(() => {
      var at, gt;
      const Yt = Ie((at = $.value) == null ? void 0 : at.$el, g.value);
      nt((gt = $.value) == null ? void 0 : gt.$el, { transition: "none", transform: Z(g.value) ? `translate3d(0, ${Yt}px, 0)` : `translate3d(${Yt}px, 0, 0)` });
    }, 500));
  }
  function cr(D) {
    var X;
    if (D < 0) return;
    const et = Z(g.value) ? window.innerHeight : window.innerWidth, N = (et - je) / et, it = N + D * (1 - N), at = -16 + D * je;
    nt((X = $.value) == null ? void 0 : X.$el, { transform: Z(g.value) ? `scale(${it}) translate3d(0, ${at}px, 0)` : `scale(${it}) translate3d(${at}px, 0, 0)`, transition: "none" });
  }
  function dr(D) {
    var X;
    const et = Z(g.value) ? window.innerHeight : window.innerWidth, N = D ? (et - je) / et : 1, it = D ? -16 : 0;
    D && nt((X = $.value) == null ? void 0 : X.$el, { transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, transform: Z(g.value) ? `scale(${N}) translate3d(0, ${it}px, 0)` : `scale(${N}) translate3d(${it}px, 0, 0)` });
  }
  return { open: a, isOpen: v, modal: l, keyboardIsOpen: mt, hasBeenOpened: x, drawerRef: $, drawerHeightRef: vt, overlayRef: T, handleRef: Ve, isDragging: b, dragStartTime: R, isAllowedToDrag: dt, snapPoints: W, activeSnapPoint: p, hasSnapPoints: De, pointerStart: Ft, dismissible: s, snapPointsOffset: Le, direction: g, shouldFade: Rt, fadeFromIndex: m, shouldScaleBackground: c, setBackgroundColorOnScale: u, onPress: ar, onDrag: rr, onRelease: lr, closeDrawer: ue, onNestedDrag: cr, onNestedRelease: dr, onNestedOpenChange: ur, emitClose: i, emitDrag: e, emitRelease: n, emitOpenChange: o, nested: r, handleOnly: P, noBodyStyles: w };
}
const Kl = H({ __name: "DrawerRoot", props: { activeSnapPoint: { default: void 0 }, closeThreshold: { default: jl }, shouldScaleBackground: { type: Boolean, default: void 0 }, setBackgroundColorOnScale: { type: Boolean, default: true }, scrollLockTimeout: { default: Nl }, fixed: { type: Boolean, default: void 0 }, dismissible: { type: Boolean, default: true }, modal: { type: Boolean, default: true }, open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean, default: void 0 }, nested: { type: Boolean, default: false }, direction: { default: "bottom" }, noBodyStyles: { type: Boolean }, handleOnly: { type: Boolean, default: false }, preventScrollRestoration: { type: Boolean }, snapPoints: { default: void 0 }, fadeFromIndex: { default: void 0 } }, emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"], setup(t, { expose: e, emit: n }) {
  const i = t, o = n;
  Ar();
  const a = F(() => i.fadeFromIndex ?? (i.snapPoints && i.snapPoints.length - 1)), s = Di(i, "open", o, { defaultValue: i.defaultOpen, passive: i.open === void 0 }), r = Di(i, "activeSnapPoint", o, { passive: i.activeSnapPoint === void 0 }), l = { emitDrag: (m) => o("drag", m), emitRelease: (m) => o("release", m), emitClose: () => o("close"), emitOpenChange: (m) => {
    o("update:open", m), setTimeout(() => {
      o("animationEnd", m);
    }, K.DURATION * 1e3);
  } }, { closeDrawer: c, hasBeenOpened: u, modal: d, isOpen: f } = $l(Wl({ ...l, ...cs(i), activeSnapPoint: r, fadeFromIndex: a, open: s }));
  function p(m) {
    if (s.value !== void 0) {
      l.emitOpenChange(m);
      return;
    }
    f.value = m, m ? u.value = true : c();
  }
  return e({ open: f }), (m, g) => (_(), O(h(_r), { open: h(f), modal: h(d), "onUpdate:open": p }, { default: A(() => [ct(m.$slots, "default", { open: h(f) })]), _: 3 }, 8, ["open", "modal"]));
} }), Gl = H({ __name: "DrawerOverlay", setup(t) {
  const { overlayRef: e, hasSnapPoints: n, isOpen: i, shouldFade: o } = Zn();
  return (a, s) => (_(), O(h(Hr), { ref_key: "overlayRef", ref: e, "data-vaul-overlay": "", "data-vaul-snap-points": h(i) && h(n) ? "true" : "false", "data-vaul-snap-points-overlay": h(i) && h(o) ? "true" : "false" }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
} }), ql = () => () => {
};
function Xl() {
  const { direction: t, isOpen: e, shouldScaleBackground: n, setBackgroundColorOnScale: i, noBodyStyles: o } = Zn(), a = V(null), s = V(document.body.style.backgroundColor);
  function r() {
    return (window.innerWidth - Cs) / window.innerWidth;
  }
  ie((l) => {
    if (e.value && n.value) {
      a.value && clearTimeout(a.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c) return;
      Il(i.value && !o.value ? cn(document.body, { background: "black" }) : ql, cn(c, { transformOrigin: Z(t.value) ? "top" : "left", transitionProperty: "transform, border-radius", transitionDuration: `${K.DURATION}s`, transitionTimingFunction: `cubic-bezier(${K.EASE.join(",")})` }));
      const u = cn(c, { borderRadius: `${Ms}px`, overflow: "hidden", ...Z(t.value) ? { transform: `scale(${r()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${r()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` } });
      l(() => {
        u(), a.value = window.setTimeout(() => {
          s.value ? document.body.style.background = s.value : document.body.style.removeProperty("background");
        }, K.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Yl = H({ __name: "DrawerContent", setup(t) {
  const { open: e, isOpen: n, snapPointsOffset: i, hasSnapPoints: o, drawerRef: a, onPress: s, onDrag: r, onRelease: l, modal: c, emitOpenChange: u, dismissible: d, keyboardIsOpen: f, closeDrawer: p, direction: m, handleOnly: g } = Zn();
  Xl();
  const w = V(false), P = F(() => i.value && i.value.length > 0 ? `${i.value[0]}px` : "0");
  function y(b) {
    if (!c.value || b.defaultPrevented) {
      b.preventDefault();
      return;
    }
    f.value && (f.value = false), d.value ? u(false) : b.preventDefault();
  }
  function v(b) {
    g.value || s(b);
  }
  function x(b) {
    g.value || r(b);
  }
  return ie(() => {
    o.value && window.requestAnimationFrame(() => {
      w.value = true;
    });
  }), (b, S) => (_(), O(h(Cr), { ref_key: "drawerRef", ref: a, "data-vaul-drawer": "", "data-vaul-drawer-direction": h(m), "data-vaul-delayed-snap-points": w.value ? "true" : "false", "data-vaul-snap-points": h(n) && h(o) ? "true" : "false", style: Ze({ "--snap-point-height": P.value }), onPointerdown: v, onPointermove: x, onPointerup: h(l), onPointerDownOutside: y, onOpenAutoFocus: S[0] || (S[0] = Mr(() => {
  }, ["prevent"])), onEscapeKeyDown: S[1] || (S[1] = (T) => {
    h(d) || T.preventDefault();
  }) }, { default: A(() => [ct(b.$slots, "default")]), _: 3 }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
} });
function _e() {
  const { client: t } = Er();
  return kr("$prismic_navigation", async () => {
    const e = await t.getSingle("navigation").then((a) => a.data);
    if (!e) throw new Error("Navigation data not found");
    const { hotCtaLink: n, hotCtaText: i } = Zl(e), o = Jl(e);
    return { ...e, blocks: o, copyrightNotice: `\xA9 Nimiq Foundation 2017-${(/* @__PURE__ */ new Date()).getFullYear()}`, hotCtaLink: n, hotCtaText: i };
  });
}
function Zl(t) {
  if (!t.hottext || !t.hotsince || !t.hotuntil) return { hotCtaLink: void 0, hotCtaText: void 0 };
  const e = /* @__PURE__ */ new Date();
  return new Date(t.hotsince) > e || new Date(t.hotuntil) < e ? { hotCtaLink: void 0, hotCtaText: void 0 } : { hotCtaLink: bs(t.hothref), hotCtaText: t.hottext };
}
function Jl(t) {
  return [{ areaName: "project", label: t.projectGroupName, links: [...t.projectLinks, ...t.projectAdditionalFooterLinks] }, { areaName: "tech", label: t.techGroupName, links: [...t.techLinks, ...t.techAdditionalFooterLinks] }, { areaName: "apps", label: t.appsGroupName, links: [...t.appsLinks, ...t.appsAdditionalFooterLinks] }, { areaName: "get-started", label: t.getStartedGroupName, links: [...t.getStartedLinks, ...t.getStartedAdditionalFooterLinks] }, { areaName: "community", label: t.communityGroupName, links: [...t.communityLinks, ...t.communityAdditionalFooterLinks] }, { areaName: "and-more", label: t.andMoreGroupName, links: t.andMoreLinks }];
}
const Ql = { class: "mb-16 flex gap-20" }, tu = { "of-x-hidden": "", "of-y-auto": "" }, eu = { class: "my-16" }, nu = { text: "f-sm neutral-700", "font-bold": "", "nq-arrow": "" }, iu = { "text-14": "", "f-mt-xs": "" }, ou = { "text-12": "", uppercase: "" }, su = { text: "neutral-800 hocus:neutral-900", "transition-colors": "", "f-mt-md": "", flex: "~ gap-16 items-center" }, au = { "text-neutral-600": "", "f-mt-md": "" }, ru = H({ __name: "Mobile", async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => _e()), e = await e, n(), e);
  return (o, a) => {
    const s = Pe, r = dl, l = Xr, c = Zr, u = Yr, d = qr, f = Gr, p = Yn, m = an;
    return _(), O(h(Kl), { "should-scale-background": "" }, { default: A(() => [C(h(Wr), { "bg-transparent": "", "aria-label": "Links menu" }, { default: A(() => [E("div", { "opacity-50": "", "hocus:opacity-60": "", class: Mt(["scale-x--100 i-nimiq:hamburger-menu", { "text-white": false }]) })]), _: 1 }), C(h(Kr), null, { default: A(() => [C(h(Gl), { class: "bg-neutral/40 inset-0 fixed" }), C(h(Yl), { class: "mt-24 p-24 rounded-t-10 bg-white flex flex-col h-full max-h-90dvh bottom-0 left-0 right-0 fixed z-100" }, { default: A(() => {
      var _a2, _b, _c2, _d2, _e2, _f2;
      return [a[5] || (a[5] = E("div", { class: "mx-auto mb-32 rounded-full bg-gray-300 flex-shrink-0 h-4 w-80" }, null, -1)), E("div", Ql, [((_b = (_a2 = h(i)) == null ? void 0 : _a2.getStartedLinks.at(0)) == null ? void 0 : _b.href) ? (_(), O(s, { key: 0, field: h(i).getStartedLinks.at(0).href, "nq-pill-secondary": "" }, { default: A(() => {
        var _a3;
        return [rt(U((_a3 = h(i).getStartedLinks[0]) == null ? void 0 : _a3.label), 1)];
      }), _: 1 }, 8, ["field"])) : I("", true), ((_d2 = (_c2 = h(i)) == null ? void 0 : _c2.getStartedLinks.at(1)) == null ? void 0 : _d2.href) ? (_(), O(s, { key: 1, field: h(i).getStartedLinks.at(1).href, "nq-arrow": "", "nq-pill-blue": "" }, { default: A(() => {
        var _a3;
        return [rt(U((_a3 = h(i).getStartedLinks[1]) == null ? void 0 : _a3.label), 1)];
      }), _: 1 }, 8, ["field"])) : I("", true)]), E("div", tu, [E("div", eu, [((_f2 = (_e2 = h(i)) == null ? void 0 : _e2.getStartedLinks.at(2)) == null ? void 0 : _f2.href) ? (_(), O(s, { key: 0, field: h(i).getStartedLinks.at(2).href }, { default: A(() => {
        var _a3, _b2;
        return [E("p", nu, U((_a3 = h(i).getStartedLinks[2]) == null ? void 0 : _a3.label), 1), E("p", iu, U((_b2 = h(i).getStartedLinks[2]) == null ? void 0 : _b2.description), 1)];
      }), _: 1 }, 8, ["field"])) : I("", true)]), C(f, { class: "mt-16 opacity-60", type: "single", collapsible: true }, { default: A(() => [(_(true), L(st, null, ht(h(i).blocks, ({ links: g, label: w }) => (_(), L(st, { key: w }, [g.length ? (_(), O(r, { key: 0, "bg-neutral-300": "", "h-1": "" })) : I("", true), g.length ? (_(), O(d, { key: 1, "py-8": "", "of-hidden": "", value: w }, { default: A(() => [C(c, null, { default: A(() => [C(l, { "outline-none": "", "leading-none": "", "px-5": "", "bg-white": "", flex: "", "flex-1": "", "gap-x-8": "", "h-45": "", "cursor-default": "", "items-center": "" }, { default: A(() => [E("span", ou, U(w), 1), a[0] || (a[0] = E("div", { class: "text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] i-nimiq:chevron-down group-data-[state=open]:rotate-180" }, null, -1))]), _: 2, __: [0] }, 1024)]), _: 2 }, 1024), C(u, { class: "content", "of-hidden": "" }, { default: A(() => [(_(true), L(st, null, ht(g, ({ label: P, href: y }, v) => (_(), O(s, { key: v, field: y, flex: "~ items-center gap-16", "font-semibold": "", "px-16": "", "pb-10": "", "pt-14": "", "rounded-4": "", "bg-white": "", "w-full": "", "whitespace-nowrap": "" }, { default: A(() => [rt(U(P), 1)]), _: 2 }, 1032, ["field"]))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"])) : I("", true)], 64))), 128))]), _: 1 }), a[4] || (a[4] = E("hr", { "mb-32": "", "bg-neutral-300": "", "h-1": "", "w-full": "" }, null, -1)), C(p, { "text-18": "", items: [("SocialMedia" in o ? o.SocialMedia : h(B)).x, ("SocialMedia" in o ? o.SocialMedia : h(B)).telegram, ("SocialMedia" in o ? o.SocialMedia : h(B)).reddit, ("SocialMedia" in o ? o.SocialMedia : h(B)).github, ("SocialMedia" in o ? o.SocialMedia : h(B)).youtube, ("SocialMedia" in o ? o.SocialMedia : h(B)).discord, ("SocialMedia" in o ? o.SocialMedia : h(B)).nimiqForum, ("SocialMedia" in o ? o.SocialMedia : h(B)).facebook, ("SocialMedia" in o ? o.SocialMedia : h(B)).instagram] }, null, 8, ["items"]), E("div", su, [C(m, { to: "/privacy-policy", class: "font-semibold op-60 hocus:op-90" }, { default: A(() => a[1] || (a[1] = [rt(" Privacy Policy ")])), _: 1, __: [1] }), a[3] || (a[3] = E("div", { "aria-hidden": "", "rounded-full": "", "bg-current": "", "op-40": "", "size-4": "" }, null, -1)), C(m, { to: "/cookie-policy", class: "font-semibold op-60 hocus:op-90" }, { default: A(() => a[2] || (a[2] = [rt(" Cookie Policy ")])), _: 1, __: [2] })]), E("p", au, U(h(i).copyrightNotice), 1)])];
    }), _: 1, __: [5] })]), _: 1 })]), _: 1 });
  };
} }), lu = Object.assign(Gn(ru, [["__scopeId", "data-v-d6f0e265"]]), { __name: "NavigationMobile" }), uu = { flex: "~ gap-20", "px-20": "", "py-32": "" }, cu = ["aria-label"], du = ["onFocus", "onMouseover"], fu = { key: 0, "px-40": "", "py-32": "", "bg-darkblue": "", "bg-op-6": "" }, hu = { "text-12": "", "font-bold": "", "lh-none": "", "op-60": "", "whitespace-nowrap": "", uppercase: "" }, pu = ["aria-label"], mu = ["aria-label"], vu = { flex: "~ items-center justify-between gap-x-20", "px-32": "", "py-20": "" }, gu = { "p-16": "", grid: "", "grid-cols-1": "", "max-w-6xl": "" }, yu = ["aria-label"], bu = { "p-16": "", grid: "", "grid-cols-1": "" }, wu = ["aria-label"], xu = ["aria-label"], Tu = { "font-semibold": "", "lh-none": "" }, Su = { "text-14": "" }, Pu = { flex: "~ justify-center", "min-w-full": "", "perspective-2000": "", "right-0": "", "top-full": "", absolute: "", "z-10": "" }, Au = H({ __name: "Desktop", async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Kn()), e = await e, n(), e), { data: o } = ([e, n] = $t(() => _e()), e = await e, n(), e), a = F(() => o.value.projectItems.filter(ys)), s = V(0), l = Dr().fullPath === "/";
  return (c, u) => {
    const d = Pl, f = Vr, p = Pe, m = xl, g = bl, w = gl, P = Yn, y = wl, v = Tl, x = Al, b = ml;
    return h(o) ? (_(), O(b, { key: 0, class: "header-nav", relative: "" }, { default: A(() => [C(v, { flex: "~ items-center" }, { default: A(() => [C(w, null, { default: A(() => [C(d, { class: "trigger" }, { default: A(() => u[0] || (u[0] = [rt(" Apps "), E("div", { "i-nimiq:chevron-down": "" }, null, -1)])), _: 1, __: [0] }), C(g, { "w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: A(() => [E("div", null, [E("div", uu, [E("ul", { "aria-label": `${h(o).appsGroupName} links`, role: "link", "w-max": "", flex: "~ col" }, [(_(true), L(st, null, ht(h(o).appsLinks, ({ label: S, href: T, logo: M }, R) => (_(), L("li", { key: S, group: "", class: "link-item", onFocus: (G) => s.value = R, onMouseover: (G) => s.value = R }, [C(m, { "as-child": "" }, { default: A(() => [C(p, { field: T, flex: "~ gap-12 items-center" }, { default: A(() => [C(f, { field: M, "h-22": "", "max-w-21": "", op: "20 group-hocus:100", "transition-opacity": "" }, null, 8, ["field"]), E("span", null, U(S), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)], 40, du))), 128))], 8, cu), C(Rr, { mode: "out-in", "enter-active-class": "transition-[opacity,filter] duration-400", "enter-from-class": "op-0 blur-2", "enter-to-class": "op-100 blur-0", "leave-active-class": "transition-[opacity,filter] duration-150 blur-0", "leave-from-class": "op-100", "leave-to-class": "op-0 blur-2" }, { default: A(() => {
      var _a2;
      return [((_a2 = h(o).appsLinks[h(s)]) == null ? void 0 : _a2.visual) ? (_(), O(f, { key: h(s), field: h(o).appsLinks[h(s)].visual, "rounded-4": "", "h-full": "", "w-300": "", shadow: "", relative: "", "object-contain": "", "object-left-top": "" }, null, 8, ["field"])) : I("", true)];
    }), _: 1 })]), h(o).howToTitle && h(o).howToLinks.length > 0 ? (_(), L("div", fu, [E("p", hu, U(h(o).howToTitle), 1), E("ul", { role: "list", "aria-label": `${h(o).howToTitle} links`, "mt-18": "", flex: "", "flex-wrap": "", "gap-x-32": "" }, [(_(true), L(st, null, ht(h(o).howToLinks, (S, T) => (_(), L("li", { key: `how-to-link-${T}` }, [C(m, { "as-child": "" }, { default: A(() => [C(p, { field: S, "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", "nq-arrow": "" }, null, 8, ["field"])]), _: 2 }, 1024)]))), 128))], 8, pu)])) : I("", true)])]), _: 1 })]), _: 1 }), h(o).techItems.length > 0 ? (_(), O(w, { key: 0 }, { default: A(() => [C(d, { class: "trigger" }, { default: A(() => [rt(U(h(o).techGroupName) + " ", 1), u[1] || (u[1] = E("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1, __: [1] }), C(g, { "min-w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: A(() => [E("div", null, [E("ul", { "aria-label": `${h(o).techGroupName} links`, role: "link", grid: "~ cols-2 gap-x-8", "p-24": "" }, [(_(true), L(st, null, ht(h(o).techItems, (S, T) => (_(), L("li", { key: `tech-item-${T}`, flex: "", "w-full": "", class: "link-item" }, [C(m, { "as-child": "" }, { default: A(() => [C(p, { field: S }, null, 8, ["field"])]), _: 2 }, 1024)]))), 128))], 8, mu), u[2] || (u[2] = E("hr", { "bg-darkblue": "", "op-10": "", "h-1": "", "w-full": "" }, null, -1)), E("div", vu, [h(i).github ? (_(), O(p, { key: 0, field: h(i).github.link, flex: "~ items-center gap-12", "un-text": "15 neutral-800", "pr-4": "", "flex-1": "", "nq-arrow": "", "after:ml--4": "", border: "r-1.5 solid darkblue/10" }, { default: A(() => [E("div", { class: Mt(h(i).github.icon), "text-20": "", "op-70": "" }, null, 2), rt(" " + U(h(o).githubLinkLabel), 1)]), _: 1 }, 8, ["field"])) : I("", true), C(P, { items: [("SocialMedia" in c ? c.SocialMedia : h(B)).reddit, ("SocialMedia" in c ? c.SocialMedia : h(B)).discord, ("SocialMedia" in c ? c.SocialMedia : h(B)).telegram], "text-18": "", "op-80": "", "flex-nowrap": "" }, null, 8, ["items"])])])]), _: 1 })]), _: 1 })) : I("", true), h(o).communityGroupName && h(o).communityItems.length > 0 ? (_(), O(w, { key: 1 }, { default: A(() => [C(d, { class: "trigger" }, { default: A(() => [rt(U(h(o).communityGroupName) + " ", 1), u[3] || (u[3] = E("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1, __: [3] }), C(g, { "min-w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: A(() => [E("div", gu, [E("ul", { "aria-label": `${h(o).communityGroupName} links`, role: "link", flex: "~ col", "pb-24": "" }, [(_(true), L(st, null, ht(h(o).communityItems, (S, T) => (_(), L("li", { key: `community-item-${T}`, flex: "", "w-full": "", class: "link-item" }, [C(m, { "as-child": "" }, { default: A(() => [C(p, { field: S }, null, 8, ["field"])]), _: 2 }, 1024)]))), 128))], 8, yu), u[4] || (u[4] = E("hr", { "bg-darkblue": "", "op-10": "", "h-1": "", "w-full": "" }, null, -1)), C(P, { items: [("SocialMedia" in c ? c.SocialMedia : h(B)).x, ("SocialMedia" in c ? c.SocialMedia : h(B)).reddit, ("SocialMedia" in c ? c.SocialMedia : h(B)).facebook, ("SocialMedia" in c ? c.SocialMedia : h(B)).youtube, ("SocialMedia" in c ? c.SocialMedia : h(B)).instagram, ("SocialMedia" in c ? c.SocialMedia : h(B)).discord, ("SocialMedia" in c ? c.SocialMedia : h(B)).telegram, ("SocialMedia" in c ? c.SocialMedia : h(B)).nimiqForum, ("SocialMedia" in c ? c.SocialMedia : h(B)).github], "text-18": "", "mt-16": "", "op-80": "" }, null, 8, ["items"])])]), _: 1 })]), _: 1 })) : I("", true), h(o).projectGroupName && h(a).length > 0 ? (_(), O(w, { key: 2 }, { default: A(() => [C(d, { class: "trigger" }, { default: A(() => [rt(U(h(o).projectGroupName) + " ", 1), u[5] || (u[5] = E("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1, __: [5] }), C(g, { "min-w-240": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: A(() => [E("div", bu, [E("ul", { "aria-label": `${h(o).projectGroupName} links`, role: "link", flex: "~ col" }, [(_(true), L(st, null, ht(h(o).projectItems, (S, T) => (_(), L("li", { key: `project-item-${T}`, flex: "", "w-full": "", class: "link-item" }, [C(m, { "as-child": "" }, { default: A(() => [C(p, { field: S }, null, 8, ["field"])]), _: 2 }, 1024)]))), 128))], 8, wu)])]), _: 1 })]), _: 1 })) : I("", true), h(o).getStartedGroupName && h(o).getStartedLinks.length > 0 ? (_(), O(w, { key: 3 }, { default: A(() => [C(d, { "ml-16": "", "nq-pill-lg": "", class: Mt(l ? " home nq-pill-secondary" : "nq-pill-blue") }, { default: A(() => [rt(U(h(o).getStartedGroupName), 1)]), _: 1 }, 8, ["class"]), C(g, { "min-w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: A(() => [E("ul", { "aria-label": `${h(o).getStartedGroupName} links`, role: "link", "p-16": "", flex: "", divide: "x-1 solid darkblue/10 hover:transparent" }, [(_(true), L(st, null, ht(h(o).getStartedLinks, ({ label: S, href: T, description: M }) => (_(), L("li", { key: S, flex: "", "max-w-240": "", "w-full": "", "transition-border": "" }, [C(m, { "as-child": "" }, { default: A(() => [C(p, { field: T, flex: "~ col gap-12", bg: "hocus:darkblue/6", "un-text": "darkblue/90 hocus:darkblue", "p-24": "", "rounded-4": "", "w-full": "", "transition-colors": "" }, { default: A(() => [E("p", Tu, U(S), 1), E("p", Su, U(M), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, xu)]), _: 1 })]), _: 1 })) : I("", true), C(y, { flex: "~ items-end justify-center", "transition-transform": "", "top-full": "", "z-100": "", "of-hidden": "", "drop-shadow": "", "data-hidden:op-0": "", "data-hidden:animate-fade-out": "", "data-visible:animate-fade-in": "" }), C(y, { animate: "data-visible:fade-in data-hidden:fade-out", transition: "all transform ease duration-200", w: "$reka-navigation-menu-indicator-size", flex: "~ items-end justify-center", "translate-x": "$reka-navigation-menu-indicator-position", "duration-200": "", "top-full": "", absolute: "", "z-100": "", "z-12": "", "of-hidden": "", "data-hidden:op-0": "" }, { default: A(() => u[6] || (u[6] = [E("div", { "h-12": "", "w-24": "", "translate-y-1": "", relative: "", "i-nimiq:tooltip-triangle": "" }, null, -1)])), _: 1, __: [6] })]), _: 1 }), E("div", Pu, [C(x, { transition: "[width,height]", h: "$reka-navigation-menu-viewport-height", animate: "scale-in data-closed:scale-out", "min-w": "$reka-navigation-menu-viewport-width", "mt-12": "", "rounded-12": "", "bg-white": "", shadow: "", "origin-top-center": "", "duration-300": "", relative: "", "z-1": "", "of-hidden": "", "animate-scale-in": "", outline: "1.5 offset--1.5 ~ neutral-200" })])]), _: 1 })) : I("", true);
  };
} }), _u = Object.assign(Au, { __name: "NavigationDesktop" }), Es = (t) => (e) => typeof e == "string" && e.startsWith(t), Jn = Es("--"), Mu = Es("var(--"), Qn = (t) => Mu(t) ? Cu.test(t.split("/*")[0].trim()) : false, Cu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, we = {};
function ks(t) {
  for (const e in t) we[e] = t[e], Jn(e) && (we[e].isCSSVariable = true);
}
function Me(t, e) {
  const n = typeof t == "string" && !e ? `${t}Context` : e, i = Symbol(n);
  return [(s) => {
    const r = Lr(i, s);
    if (r === void 0) throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(", ")}` : `\`${t}\``}`);
    return r;
  }, (s) => (Or(i, s), s)];
}
const [Eu, ku] = Me("Motion"), [Du, Dm] = Me("LayoutGroup");
function Li(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
class Vt {
  constructor(e) {
    this.state = e;
  }
  beforeMount() {
  }
  mount() {
  }
  unmount() {
  }
  update() {
  }
  beforeUpdate() {
  }
  beforeUnmount() {
  }
}
function pe(t, e, n) {
  if (Array.isArray(t)) return t.reduce((i, o) => {
    const a = pe(o, e, n);
    return a ? { ...i, ...a } : i;
  }, {});
  if (typeof t == "object") return t;
  if (t && e) {
    const i = e[t];
    return typeof i == "function" ? i(n) : i;
  }
}
function Vu(t, e) {
  return typeof t != typeof e ? true : Array.isArray(t) && Array.isArray(e) ? !Ru(t, e) : t !== e;
}
function Ru(t, e) {
  const n = e.length;
  if (n !== t.length) return false;
  for (let i = 0; i < n; i++) if (e[i] !== t[i]) return false;
  return true;
}
function Oi(t) {
  return t == null ? void 0 : t.startsWith("--");
}
const Lu = (t) => t;
function Ou(t) {
  return typeof t == "number";
}
const $u = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], Bu = new Set($u);
function Ds(t) {
  return Bu.has(t);
}
class Fu {
  constructor(e) {
    this.features = [];
    const { features: n = [], lazyMotionContext: i } = e.options, o = n.concat(i.features.value);
    this.features = o.map((s) => new s(e));
    const a = this.features;
    Pt(i.features, (s) => {
      s.forEach((r) => {
        if (!o.includes(r)) {
          o.push(r);
          const l = new r(e);
          a.push(l), e.isMounted() && (l.beforeMount(), l.mount());
        }
      });
    }, { flush: "pre" });
  }
  mount() {
    this.features.forEach((e) => e.mount());
  }
  beforeMount() {
    this.features.forEach((e) => {
      var n;
      return (n = e.beforeMount) == null ? void 0 : n.call(e);
    });
  }
  unmount() {
    this.features.forEach((e) => e.unmount());
  }
  update() {
    this.features.forEach((e) => {
      var n;
      return (n = e.update) == null ? void 0 : n.call(e);
    });
  }
  beforeUpdate() {
    this.features.forEach((e) => e.beforeUpdate());
  }
  beforeUnmount() {
    this.features.forEach((e) => e.beforeUnmount());
  }
}
const ti = /* @__PURE__ */ new WeakMap(), [Iu, Vm] = Me("AnimatePresenceContext");
function ju(t) {
  return typeof t == "string" || t === false || Array.isArray(t);
}
const ut = (t) => t, Ne = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Nu(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), o = false, a = false;
  const s = /* @__PURE__ */ new WeakSet();
  let r = { delta: 0, timestamp: 0, isProcessing: false };
  function l(u) {
    s.has(u) && (c.schedule(u), t()), u(r);
  }
  const c = { schedule: (u, d = false, f = false) => {
    const m = f && o ? n : i;
    return d && s.add(u), m.has(u) || m.add(u), u;
  }, cancel: (u) => {
    i.delete(u), s.delete(u);
  }, process: (u) => {
    if (r = u, o) {
      a = true;
      return;
    }
    o = true, [n, i] = [i, n], n.forEach(l), n.clear(), o = false, a && (a = false, c.process(u));
  } };
  return c;
}
const Ct = {}, Uu = 40;
function Vs(t, e) {
  let n = false, i = true;
  const o = { delta: 0, timestamp: 0, isProcessing: false }, a = () => n = true, s = Ne.reduce((v, x) => (v[x] = Nu(a), v), {}), { setup: r, read: l, resolveKeyframes: c, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = s, g = () => {
    const v = Ct.useManualTiming ? o.timestamp : performance.now();
    n = false, Ct.useManualTiming || (o.delta = i ? 1e3 / 60 : Math.max(Math.min(v - o.timestamp, Uu), 1)), o.timestamp = v, o.isProcessing = true, r.process(o), l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), p.process(o), m.process(o), o.isProcessing = false, n && e && (i = false, t(g));
  }, w = () => {
    n = true, i = true, o.isProcessing || t(g);
  };
  return { schedule: Ne.reduce((v, x) => {
    const b = s[x];
    return v[x] = (S, T = false, M = false) => (n || w(), b.schedule(S, T, M)), v;
  }, {}), cancel: (v) => {
    for (let x = 0; x < Ne.length; x++) s[Ne[x]].cancel(v);
  }, state: o, steps: s };
}
const { schedule: j, cancel: Et, state: ot, steps: dn } = Vs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, true), Rs = /* @__PURE__ */ new WeakMap();
let zu = 0;
const fn = /* @__PURE__ */ new Set();
class Hu {
  constructor(e, n) {
    var i;
    this.element = null, this.isSafeToRemove = false, this.isVShow = false, this.children = /* @__PURE__ */ new Set(), this.activeStates = { initial: true, animate: true }, this.currentProcess = null, this._context = null, this.animateUpdates = ut, this.id = `motion-state-${zu++}`, this.options = e, this.parent = n, (i = n == null ? void 0 : n.children) == null || i.add(this), this.depth = (n == null ? void 0 : n.depth) + 1 || 0;
    const a = (e.initial === void 0 && e.variants ? this.context.initial : e.initial) === false ? ["initial", "animate"] : ["initial"];
    this.initTarget(a), this.featureManager = new Fu(this), this.type = Ds(this.options.as) ? "svg" : "html";
  }
  get context() {
    if (!this._context) {
      const e = { get: (n, i) => {
        var o;
        return ju(this.options[i]) ? this.options[i] : (o = this.parent) == null ? void 0 : o.context[i];
      } };
      this._context = new Proxy({}, e);
    }
    return this._context;
  }
  initTarget(e) {
    var n;
    const i = this.options.custom ?? ((n = this.options.animatePresenceContext) == null ? void 0 : n.custom);
    this.baseTarget = e.reduce((o, a) => ({ ...o, ...pe(this.options[a] || this.context[a], this.options.variants, i) }), {}), this.target = {};
  }
  updateOptions(e) {
    var n;
    this.options = e, (n = this.visualElement) == null || n.update({ ...this.options, whileTap: this.options.whilePress }, { isPresent: !ti.has(this.element) });
  }
  beforeMount() {
    this.featureManager.beforeMount();
  }
  mount(e, n, i = false) {
    var o;
    this.element = e, this.updateOptions(n), this.featureManager.mount(), !i && this.options.animate && ((o = this.startAnimation) == null || o.call(this)), this.options.layoutId && (fn.add(this.options.layoutId), j.render(() => {
      fn.clear();
    }));
  }
  clearAnimation() {
    var e, n;
    this.currentProcess && Et(this.currentProcess), this.currentProcess = null, (n = (e = this.visualElement) == null ? void 0 : e.variantChildren) == null || n.forEach((i) => {
      i.state.clearAnimation();
    });
  }
  startAnimation() {
    this.clearAnimation(), this.currentProcess = j.render(() => {
      this.currentProcess = null, this.animateUpdates();
    });
  }
  beforeUnmount() {
    this.featureManager.beforeUnmount();
  }
  unmount(e = false) {
    const n = this.options.layoutId && !fn.has(this.options.layoutId);
    (() => {
      const o = () => {
        var a, s, r;
        e && Array.from(this.children).reverse().forEach(this.unmountChild), (s = (a = this.parent) == null ? void 0 : a.children) == null || s.delete(this), Rs.delete(this.element), this.featureManager.unmount(), (r = this.visualElement) == null || r.unmount(), this.clearAnimation();
      };
      n ? Promise.resolve().then(o) : o();
    })();
  }
  unmountChild(e) {
    e.unmount(true);
  }
  beforeUpdate() {
    this.featureManager.beforeUpdate();
  }
  update(e) {
    this.updateOptions(e), this.featureManager.update(), this.startAnimation();
  }
  setActive(e, n, i = true) {
    var o;
    !this.element || this.activeStates[e] === n || (this.activeStates[e] = n, (o = this.visualElement.variantChildren) == null || o.forEach((a) => {
      a.state.setActive(e, n, false);
    }), i && this.animateUpdates({ isFallback: !n && e !== "exit" && this.visualElement.isControllingVariants, isExit: e === "exit" && this.activeStates.exit }));
  }
  isMounted() {
    return !!this.element;
  }
  willUpdate(e) {
    var n;
    (this.options.layout || this.options.layoutId) && ((n = this.visualElement.projection) == null || n.willUpdate());
  }
}
const Kt = /* @__PURE__ */ new WeakMap();
function $i(t, e, n) {
  return new CustomEvent(t, { detail: { target: e, isExit: n } });
}
const Bi = { syntax: "<angle>", initialValue: "0deg", toDefaultUnit: (t) => `${t}deg` }, Wu = { translate: { syntax: "<length-percentage>", initialValue: "0px", toDefaultUnit: (t) => `${t}px` }, rotate: Bi, scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Lu }, skew: Bi }, Ku = ["translate", "scale", "rotate", "skew"], Gu = ["", "X", "Y", "Z"], ei = /* @__PURE__ */ new Map(), Je = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
Ku.forEach((t) => {
  Gu.forEach((e) => {
    Je.push(t + e), ei.set(t + e, Wu[t]);
  });
});
const qu = new Set(Je), Xu = (t) => qu.has(t), Fi = { x: "translateX", y: "translateY", z: "translateZ" };
function Yu([t], [e]) {
  return Je.indexOf(t) - Je.indexOf(e);
}
function Zu(t, [e, n]) {
  return `${t} ${e}(${n})`;
}
function Ju(t) {
  return t.sort(Yu).reduce(Zu, "").trim();
}
const Ii = { translate: [0, 0], rotate: 0, scale: 1, skew: 0, x: 0, y: 0, z: 0 }, Ce = (t) => ({ test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1, parse: parseFloat, transform: (e) => `${e}${t}` }), Ot = Ce("deg"), Tt = Ce("%"), k = Ce("px"), Qu = Ce("vh"), tc = Ce("vw"), ji = { ...Tt, parse: (t) => Tt.parse(t) / 100, transform: (t) => Tt.transform(t * 100) }, Q = (t) => !!(t && t.getVelocity), ec = { get: (t, e) => {
  let n = Oi(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
  if (!n && n !== "0") {
    const i = ei.get(e);
    i && (n = i.initialValue);
  }
  return n;
}, set: (t, e, n) => {
  Oi(e) ? t.style.setProperty(e, n) : t.style[e] = n;
} };
function nc(t) {
  var e;
  const n = {}, i = [];
  for (let o in t) {
    let a = t[o];
    a = Q(a) ? a.get() : a, Xu(o) && o in Fi && (o = Fi[o]);
    let s = Array.isArray(a) ? a[0] : a;
    const r = ei.get(o);
    r ? (s = Ou(a) ? (e = r.toDefaultUnit) == null ? void 0 : e.call(r, a) : a, i.push([o, s])) : n[o] = s;
  }
  return i.length && (n.transform = Ju(i)), Object.keys(n).length === 0 ? null : n;
}
const ic = { fill: true, stroke: true, opacity: true, "stroke-width": true, "fill-opacity": true, "stroke-opacity": true, "stroke-linecap": true, "stroke-linejoin": true, "stroke-dasharray": true, "stroke-dashoffset": true, cx: true, cy: true, r: true, d: true, x1: true, y1: true, x2: true, y2: true, points: true, "path-length": true, viewBox: true, width: true, height: true, "preserve-aspect-ratio": true, "clip-path": true, filter: true, mask: true, "stop-color": true, "stop-opacity": true, "gradient-transform": true, "gradient-units": true, "spread-method": true, "marker-end": true, "marker-mid": true, "marker-start": true, "text-anchor": true, "dominant-baseline": true, "font-family": true, "font-size": true, "font-weight": true, "letter-spacing": true, "vector-effect": true };
function oc(t) {
  return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function sc(t, e, n = 1, i = 0) {
  t.pathLength = 1, delete t["path-length"], t["stroke-dashoffset"] = k.transform(-i);
  const o = k.transform(e), a = k.transform(n);
  t["stroke-dasharray"] = `${o} ${a}`;
}
function ac(t) {
  const e = {}, n = {};
  for (const i in t) {
    const o = oc(i);
    if (o in ic) {
      const a = t[i];
      e[o] = Q(a) ? a.get() : a;
    } else n[i] = t[i];
  }
  return e["path-length"] !== void 0 && sc(e, e["path-length"], e["path-spacing"], e["path-offset"]), { attrs: e, style: n };
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ni = (t) => typeof t < "u";
function rc({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function lc(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function uc(t, e) {
  return rc(lc(t.getBoundingClientRect(), e));
}
const Ui = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, Mn = {};
for (const t in Ui) Mn[t] = { isEnabled: (e) => Ui[t].some((n) => !!e[n]) };
const zi = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), Zt = () => ({ x: zi(), y: zi() }), Hi = () => ({ min: 0, max: 0 }), Y = () => ({ x: Hi(), y: Hi() }), cc = typeof window < "u", Qe = { current: null }, Ls = { current: false };
function dc() {
  if (Ls.current = true, !!cc) if (window.matchMedia) {
    const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Qe.current = t.matches;
    t.addEventListener("change", e), e();
  } else Qe.current = false;
}
function fc(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function hc(t) {
  return typeof t == "string" || Array.isArray(t);
}
const pc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], mc = ["initial", ...pc];
function Os(t) {
  return fc(t.animate) || mc.some((e) => hc(t[e]));
}
function vc(t) {
  return !!(Os(t) || t.variants);
}
let Ke;
function gc() {
  Ke = void 0;
}
const lt = { now: () => (Ke === void 0 && lt.set(ot.isProcessing || Ct.useManualTiming ? ot.timestamp : performance.now()), Ke), set: (t) => {
  Ke = t, queueMicrotask(gc);
} };
function ni(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ln(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class ii {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return ni(this.subscriptions, e), () => ln(this.subscriptions, e);
  }
  notify(e, n, i) {
    const o = this.subscriptions.length;
    if (o) if (o === 1) this.subscriptions[0](e, n, i);
    else for (let a = 0; a < o; a++) {
      const s = this.subscriptions[a];
      s && s(e, n, i);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function $s(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Wi = 30, yc = (t) => !isNaN(parseFloat(t));
class bc {
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, o = true) => {
      var a, s;
      const r = lt.now();
      if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((a = this.events.change) == null || a.notify(this.current), this.dependents)) for (const l of this.dependents) l.dirty();
      o && ((s = this.events.renderRequest) == null || s.notify(this.current));
    }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = lt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = yc(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ii());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), j.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  set(e, n = true) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  jump(e, n = true) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = lt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Wi) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Wi);
    return $s(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = true, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var e, n;
    (e = this.dependents) == null || e.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ee(t, e) {
  return new bc(t, e);
}
function wc(t, e, n) {
  for (const i in e) {
    const o = e[i], a = n[i];
    if (Q(o)) t.addValue(i, o);
    else if (Q(a)) t.addValue(i, ee(o, { owner: t }));
    else if (a !== o) if (t.hasValue(i)) {
      const s = t.getValue(i);
      s.liveStyle === true ? s.jump(o) : s.hasAnimated || s.set(o);
    } else {
      const s = t.getStaticValue(i);
      t.addValue(i, ee(s !== void 0 ? s : o, { owner: t }));
    }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
function Ki(t) {
  const e = [{}, {}];
  return t == null ? void 0 : t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Bs(t, e, n, i) {
  if (typeof e == "function") {
    const [o, a] = Ki(i);
    e = e(n !== void 0 ? n : t.custom, o, a);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [o, a] = Ki(i);
    e = e(n !== void 0 ? n : t.custom, o, a);
  }
  return e;
}
function xc(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const Ut = (t) => t * 180 / Math.PI, Cn = (t) => {
  const e = Ut(Math.atan2(t[1], t[0]));
  return En(e);
}, Tc = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2, rotate: Cn, rotateZ: Cn, skewX: (t) => Ut(Math.atan(t[1])), skewY: (t) => Ut(Math.atan(t[2])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2 }, En = (t) => (t = t % 360, t < 0 && (t += 360), t), Gi = Cn, qi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Xi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Sc = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: qi, scaleY: Xi, scale: (t) => (qi(t) + Xi(t)) / 2, rotateX: (t) => En(Ut(Math.atan2(t[6], t[5]))), rotateY: (t) => En(Ut(Math.atan2(-t[2], t[0]))), rotateZ: Gi, rotate: Gi, skewX: (t) => Ut(Math.atan(t[4])), skewY: (t) => Ut(Math.atan(t[1])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2 };
function kn(t) {
  return t.includes("scale") ? 1 : 0;
}
function Dn(t, e) {
  if (!t || t === "none") return kn(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, o;
  if (n) i = Sc, o = n;
  else {
    const r = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Tc, o = r;
  }
  if (!o) return kn(e);
  const a = i[e], s = o[1].split(",").map(Ac);
  return typeof a == "function" ? a(s) : s[a];
}
const Pc = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Dn(n, e);
};
function Ac(t) {
  return parseFloat(t.trim());
}
const se = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], ae = new Set(se), kt = (t, e, n) => n > e ? e : n < t ? t : n, re = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t }, xe = { ...re, transform: (t) => kt(0, 1, t) }, Ue = { ...re, default: 1 }, Yi = (t) => t === re || t === k, _c = /* @__PURE__ */ new Set(["x", "y", "z"]), Mc = se.filter((t) => !_c.has(t));
function Cc(t) {
  const e = [];
  return Mc.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Ht = { width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), top: (t, { top: e }) => parseFloat(e), left: (t, { left: e }) => parseFloat(e), bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min), right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min), x: (t, { transform: e }) => Dn(e, "x"), y: (t, { transform: e }) => Dn(e, "y") };
Ht.translateX = Ht.x;
Ht.translateY = Ht.y;
const Wt = /* @__PURE__ */ new Set();
let Vn = false, Rn = false, Ln = false;
function Fs() {
  if (Rn) {
    const t = Array.from(Wt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const o = Cc(i);
      o.length && (n.set(i, o), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const o = n.get(i);
      o && o.forEach(([a, s]) => {
        var r;
        (r = i.getValue(a)) == null || r.set(s);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  Rn = false, Vn = false, Wt.forEach((t) => t.complete(Ln)), Wt.clear();
}
function Is() {
  Wt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Rn = true);
  });
}
function Ec() {
  Ln = true, Is(), Fs(), Ln = false;
}
class oi {
  constructor(e, n, i, o, a, s = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = o, this.element = a, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Wt.add(this), Vn || (Vn = true, j.read(Is), j.resolveKeyframes(Fs))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: o } = this;
    if (e[0] === null) {
      const a = o == null ? void 0 : o.get(), s = e[e.length - 1];
      if (a !== void 0) e[0] = a;
      else if (i && n) {
        const r = i.readValue(n, s);
        r != null && (e[0] = r);
      }
      e[0] === void 0 && (e[0] = s), o && a === void 0 && o.set(e[0]);
    }
    xc(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Wt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Wt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const js = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Ns = (t) => /^0[^.\s]+$/u.test(t), me = (t) => Math.round(t * 1e5) / 1e5, si = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kc(t) {
  return t == null;
}
const Dc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ai = (t, e) => (n) => !!(typeof n == "string" && Dc.test(n) && n.startsWith(t) || e && !kc(n) && Object.prototype.hasOwnProperty.call(n, e)), Us = (t, e, n) => (i) => {
  if (typeof i != "string") return i;
  const [o, a, s, r] = i.match(si);
  return { [t]: parseFloat(o), [e]: parseFloat(a), [n]: parseFloat(s), alpha: r !== void 0 ? parseFloat(r) : 1 };
}, Vc = (t) => kt(0, 255, t), hn = { ...re, transform: (t) => Math.round(Vc(t)) }, zt = { test: ai("rgb", "red"), parse: Us("red", "green", "blue"), transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + hn.transform(t) + ", " + hn.transform(e) + ", " + hn.transform(n) + ", " + me(xe.transform(i)) + ")" };
function Rc(t) {
  let e = "", n = "", i = "", o = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, i += i, o += o), { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(i, 16), alpha: o ? parseInt(o, 16) / 255 : 1 };
}
const On = { test: ai("#"), parse: Rc, transform: zt.transform }, Jt = { test: ai("hsl", "hue"), parse: Us("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + Tt.transform(me(e)) + ", " + Tt.transform(me(n)) + ", " + me(xe.transform(i)) + ")" }, J = { test: (t) => zt.test(t) || On.test(t) || Jt.test(t), parse: (t) => zt.test(t) ? zt.parse(t) : Jt.test(t) ? Jt.parse(t) : On.parse(t), transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? zt.transform(t) : Jt.transform(t), getAnimatableNone: (t) => {
  const e = J.parse(t);
  return e.alpha = 0, J.transform(e);
} }, Lc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Oc(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(si)) == null ? void 0 : e.length) || 0) + (((n = t.match(Lc)) == null ? void 0 : n.length) || 0) > 0;
}
const zs = "number", Hs = "color", $c = "var", Bc = "var(", Zi = "${}", Fc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Te(t) {
  const e = t.toString(), n = [], i = { color: [], number: [], var: [] }, o = [];
  let a = 0;
  const r = e.replace(Fc, (l) => (J.test(l) ? (i.color.push(a), o.push(Hs), n.push(J.parse(l))) : l.startsWith(Bc) ? (i.var.push(a), o.push($c), n.push(l)) : (i.number.push(a), o.push(zs), n.push(parseFloat(l))), ++a, Zi)).split(Zi);
  return { values: n, split: r, indexes: i, types: o };
}
function Ws(t) {
  return Te(t).values;
}
function Ks(t) {
  const { split: e, types: n } = Te(t), i = e.length;
  return (o) => {
    let a = "";
    for (let s = 0; s < i; s++) if (a += e[s], o[s] !== void 0) {
      const r = n[s];
      r === zs ? a += me(o[s]) : r === Hs ? a += J.transform(o[s]) : a += o[s];
    }
    return a;
  };
}
const Ic = (t) => typeof t == "number" ? 0 : J.test(t) ? J.getAnimatableNone(t) : t;
function jc(t) {
  const e = Ws(t);
  return Ks(t)(e.map(Ic));
}
const Bt = { test: Oc, parse: Ws, createTransformer: Ks, getAnimatableNone: jc }, Nc = { test: (t) => t === "auto", parse: (t) => t }, Gs = (t) => (e) => e.test(t), qs = [re, k, Tt, Ot, tc, Qu, Nc], Ji = (t) => qs.find(Gs(t)), Uc = [...qs, J, Bt], zc = (t) => Uc.find(Gs(t)), Hc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wc(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [i] = n.match(si) || [];
  if (!i) return t;
  const o = n.replace(i, "");
  let a = Hc.has(e) ? 1 : 0;
  return i !== n && (a *= 100), e + "(" + a + o + ")";
}
const Kc = /\b([a-z-]*)\(.*?\)/gu, $n = { ...Bt, getAnimatableNone: (t) => {
  const e = t.match(Kc);
  return e ? e.map(Wc).join(" ") : t;
} }, Qi = { ...re, transform: Math.round }, Gc = { rotate: Ot, rotateX: Ot, rotateY: Ot, rotateZ: Ot, scale: Ue, scaleX: Ue, scaleY: Ue, scaleZ: Ue, skew: Ot, skewX: Ot, skewY: Ot, distance: k, translateX: k, translateY: k, translateZ: k, x: k, y: k, z: k, perspective: k, transformPerspective: k, opacity: xe, originX: ji, originY: ji, originZ: k }, ri = { borderWidth: k, borderTopWidth: k, borderRightWidth: k, borderBottomWidth: k, borderLeftWidth: k, borderRadius: k, radius: k, borderTopLeftRadius: k, borderTopRightRadius: k, borderBottomRightRadius: k, borderBottomLeftRadius: k, width: k, maxWidth: k, height: k, maxHeight: k, top: k, right: k, bottom: k, left: k, padding: k, paddingTop: k, paddingRight: k, paddingBottom: k, paddingLeft: k, margin: k, marginTop: k, marginRight: k, marginBottom: k, marginLeft: k, backgroundPositionX: k, backgroundPositionY: k, ...Gc, zIndex: Qi, fillOpacity: xe, strokeOpacity: xe, numOctaves: Qi }, qc = { ...ri, color: J, backgroundColor: J, outlineColor: J, fill: J, stroke: J, borderColor: J, borderTopColor: J, borderRightColor: J, borderBottomColor: J, borderLeftColor: J, filter: $n, WebkitFilter: $n }, Xs = (t) => qc[t];
function Ys(t, e) {
  let n = Xs(t);
  return n !== $n && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const to = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Zs {
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: o, blockInitialAnimation: a, visualState: s }, r = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = oi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = lt.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, j.render(this.render, false, true));
    };
    const { latestValues: l, renderState: c } = s;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = o, this.options = r, this.blockInitialAnimation = !!a, this.isControllingVariants = Os(n), this.isVariantNode = vc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && Q(p) && p.set(l[f], false);
    }
  }
  mount(e) {
    this.current = e, Kt.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), Ls.current || dc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Qe.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Et(this.notifyUpdate), Et(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = false);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = ae.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && j.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = true);
    }), a = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      o(), a(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Mn) {
      const n = Mn[e];
      if (!n) continue;
      const { isEnabled: i, Feature: o } = n;
      if (!this.features[e] && o && i(this.props) && (this.features[e] = new o(this)), this.features[e]) {
        const a = this.features[e];
        a.isMounted ? a.update() : (a.mount(), a.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < to.length; i++) {
      const o = to[i];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = "on" + o, s = e[a];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = wc(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = ee(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (js(i) || Ns(i)) ? i = parseFloat(i) : !zc(i) && Bt.test(n) && (i = Ys(e, n)), this.setBaseTarget(e, Q(i) ? i.get() : i)), Q(i) ? i.get() : i;
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: i } = this.props;
    let o;
    if (typeof i == "string" || typeof i == "object") {
      const s = Bs(this.props, i, (n = this.presenceContext) == null ? void 0 : n.custom);
      s && (o = s[e]);
    }
    if (i && o !== void 0) return o;
    const a = this.getBaseTargetFromProps(this.props, e);
    return a !== void 0 && !Q(a) ? a : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ii()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
const Js = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...se]);
let li = () => {
};
const Xc = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Yc(t) {
  const e = Xc.exec(t);
  if (!e) return [,];
  const [, n, i, o] = e;
  return [`--${n ?? i}`, o];
}
function Qs(t, e, n = 1) {
  const [i, o] = Yc(t);
  if (!i) return;
  const a = window.getComputedStyle(e).getPropertyValue(i);
  if (a) {
    const s = a.trim();
    return js(s) ? parseFloat(s) : s;
  }
  return Qn(o) ? Qs(o, e, n + 1) : o;
}
function Zc(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Ns(t) : true;
}
const Jc = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Qc(t, e, n) {
  let i = 0, o;
  for (; i < t.length && !o; ) {
    const a = t[i];
    typeof a == "string" && !Jc.has(a) && Te(a).values.length && (o = t[i]), i++;
  }
  if (o && n) for (const a of e) t[a] = Ys(n, o);
}
class td extends oi {
  constructor(e, n, i, o, a) {
    super(e, n, i, o, a, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && (c = c.trim(), Qn(c))) {
        const u = Qs(c, n.current);
        u !== void 0 && (e[l] = u), l === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Js.has(i) || e.length !== 2) return;
    const [o, a] = e, s = Ji(o), r = Ji(a);
    if (s !== r) if (Yi(s) && Yi(r)) for (let l = 0; l < e.length; l++) {
      const c = e[l];
      typeof c == "string" && (e[l] = parseFloat(c));
    }
    else Ht[i] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let o = 0; o < e.length; o++) (e[o] === null || Zc(e[o])) && i.push(o);
    i.length && Qc(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current) return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ht[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && e.getValue(i, o).jump(o, false);
  }
  measureEndState() {
    var e;
    const { element: n, name: i, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const a = n.getValue(i);
    a && a.jump(this.measuredOrigin, false);
    const s = o.length - 1, r = o[s];
    o[s] = Ht[i](n.measureViewportBox(), window.getComputedStyle(n.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (e = this.removedTransforms) != null && e.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
class ta extends Zs {
  constructor() {
    super(...arguments), this.KeyframeResolver = td;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    Q(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
const ea = (t, e) => e && typeof t == "number" ? e.transform(t) : t, ed = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, nd = se.length;
function id(t, e, n) {
  let i = "", o = true;
  for (let a = 0; a < nd; a++) {
    const s = se[a], r = t[s];
    if (r === void 0) continue;
    let l = true;
    if (typeof r == "number" ? l = r === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(r) === 0, !l || n) {
      const c = ea(r, ri[s]);
      if (!l) {
        o = false;
        const u = ed[s] || s;
        i += `${u}(${c}) `;
      }
      n && (e[s] = c);
    }
  }
  return i = i.trim(), n ? i = n(e, o ? "" : i) : o && (i = "none"), i;
}
function na(t, e, n) {
  const { style: i, vars: o, transformOrigin: a } = t;
  let s = false, r = false;
  for (const l in e) {
    const c = e[l];
    if (ae.has(l)) {
      s = true;
      continue;
    } else if (Jn(l)) {
      o[l] = c;
      continue;
    } else {
      const u = ea(c, ri[l]);
      l.startsWith("origin") ? (r = true, a[l] = u) : i[l] = u;
    }
  }
  if (e.transform || (s || n ? i.transform = id(e, t.transform, n) : i.transform && (i.transform = "none")), r) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = a;
    i.transformOrigin = `${l} ${c} ${u}`;
  }
}
function ia(t, { style: e, vars: n }, i, o) {
  const a = t.style;
  let s;
  for (s in e) a[s] = e[s];
  o == null ? void 0 : o.applyProjectionStyles(a, i);
  for (s in n) a.setProperty(s, n[s]);
}
function od(t, { layout: e, layoutId: n }) {
  return ae.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!we[t] || t === "opacity");
}
function oa(t, e, n) {
  var i;
  const { style: o } = t, a = {};
  for (const s in o) (Q(o[s]) || e.style && Q(e.style[s]) || od(s, t) || ((i = n == null ? void 0 : n.getValue(s)) == null ? void 0 : i.liveStyle) !== void 0) && (a[s] = o[s]);
  return a;
}
function sd(t) {
  return window.getComputedStyle(t);
}
class sa extends ta {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ia;
  }
  readValueFromInstance(e, n) {
    var i;
    if (ae.has(n)) return (i = this.projection) != null && i.isProjecting ? kn(n) : Pc(e, n);
    {
      const o = sd(e), a = (Jn(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return uc(e, n);
  }
  build(e, n, i) {
    na(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return oa(e, n, i);
  }
}
const ui = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), ad = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, rd = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ld(t, e, n = 1, i = 0, o = true) {
  t.pathLength = 1;
  const a = o ? ad : rd;
  t[a.offset] = k.transform(-i);
  const s = k.transform(e), r = k.transform(n);
  t[a.array] = `${s} ${r}`;
}
function ud(t, { attrX: e, attrY: n, attrScale: i, pathLength: o, pathSpacing: a = 1, pathOffset: s = 0, ...r }, l, c, u) {
  if (na(t, r, c), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: f } = t;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete d.transformBox), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), o !== void 0 && ld(d, o, a, s, false);
}
const aa = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), cd = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function dd(t, e, n, i) {
  ia(t, e, void 0, i);
  for (const o in e.attrs) t.setAttribute(aa.has(o) ? o : ui(o), e.attrs[o]);
}
function fd(t, e, n) {
  const i = oa(t, e, n);
  for (const o in t) if (Q(t[o]) || Q(e[o])) {
    const a = se.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
    i[a] = t[o];
  }
  return i;
}
class ra extends ta {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ae.has(n)) {
      const i = Xs(n);
      return i && i.default || 0;
    }
    return n = aa.has(n) ? n : ui(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return fd(e, n, i);
  }
  build(e, n, i) {
    ud(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, o) {
    dd(e, n, i, o);
  }
  mount(e) {
    this.isSVGTag = cd(e.tagName), super.mount(e);
  }
}
function hd(t, e) {
  return Ds(t) ? new ra(e) : new sa(e);
}
function ci(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function di(t, e, n) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let i = document;
    const o = (n == null ? void 0 : n[t]) ?? i.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
function la(t, e, n, i) {
  return typeof t == "string" && ci(e) ? di(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function pd(t, e, n) {
  return t * (e + 1);
}
function eo(t, e, n, i) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t;
}
const z = (t, e, n) => t + (e - t) * n, md = (t, e, n) => {
  const i = e - t;
  return ((n - t) % i + i) % i + t;
}, ua = (t) => Array.isArray(t) && typeof t[0] != "number";
function ca(t, e) {
  return ua(t) ? t[md(0, t.length, e)] : t;
}
function vd(t, e, n) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    o.at > e && o.at < n && (ln(t, o), i--);
  }
}
function gd(t, e, n, i, o, a) {
  vd(t, o, a);
  for (let s = 0; s < e.length; s++) t.push({ value: e[s], at: z(o, a, i[s]), easing: ca(n, s) });
}
function yd(t, e) {
  for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1);
}
function bd(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const ne = (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
function da(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const o = ne(0, e, i);
    t.push(z(n, 1, o));
  }
}
function fa(t) {
  const e = [0];
  return da(e, t.length - 1), e;
}
const tn = 2e4;
function fi(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < tn; ) e += n, i = t.next(e);
  return e >= tn ? 1 / 0 : e;
}
const yt = (t) => t * 1e3, St = (t) => t / 1e3;
function ha(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), o = Math.min(fi(i), tn);
  return { type: "keyframes", ease: (a) => i.next(o * a).value / e, duration: St(o) };
}
function hi(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
const wd = "easeInOut";
function xd(t, { defaultTransition: e = {}, ...n } = {}, i, o) {
  const a = e.duration || 0.3, s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = {}, c = /* @__PURE__ */ new Map();
  let u = 0, d = 0, f = 0;
  for (let p = 0; p < t.length; p++) {
    const m = t[p];
    if (typeof m == "string") {
      c.set(m, d);
      continue;
    } else if (!Array.isArray(m)) {
      c.set(m.name, eo(d, m.at, u, c));
      continue;
    }
    let [g, w, P = {}] = m;
    P.at !== void 0 && (d = eo(d, P.at, u, c));
    let y = 0;
    const v = (x, b, S, T = 0, M = 0) => {
      const R = Td(x), { delay: G = 0, times: tt = fa(R), type: dt = "keyframes", repeat: bt, repeatType: Ft, repeatDelay: mt = 0, ...$ } = b;
      let { ease: vt = e.ease || "easeOut", duration: W } = b;
      const De = typeof G == "function" ? G(T, M) : G, Ve = R.length, le = hi(dt) ? dt : o == null ? void 0 : o[dt || "keyframes"];
      if (Ve <= 2 && le) {
        let Rt = 100;
        if (Ve === 2 && Ad(R)) {
          const wt = R[1] - R[0];
          Rt = Math.abs(wt);
        }
        const qt = { ...$ };
        W !== void 0 && (qt.duration = yt(W));
        const Xt = ha(qt, Rt, le);
        vt = Xt.ease, W = Xt.duration;
      }
      W ?? (W = a);
      const Re = d + De;
      tt.length === 1 && tt[0] === 0 && (tt[1] = 1);
      const Le = tt.length - R.length;
      if (Le > 0 && da(tt, Le), R.length === 1 && R.unshift(null), bt) {
        W = pd(W, bt);
        const Rt = [...R], qt = [...tt];
        vt = Array.isArray(vt) ? [...vt] : [vt];
        const Xt = [...vt];
        for (let wt = 0; wt < bt; wt++) {
          R.push(...Rt);
          for (let Lt = 0; Lt < Rt.length; Lt++) tt.push(qt[Lt] + (wt + 1)), vt.push(Lt === 0 ? "linear" : ca(Xt, Lt - 1));
        }
        yd(tt, bt);
      }
      const Oe = Re + W;
      gd(S, R, vt, tt, Re, Oe), y = Math.max(De + W, y), f = Math.max(Oe, f);
    };
    if (Q(g)) {
      const x = no(g, r);
      v(w, P, io("default", x));
    } else {
      const x = la(g, w, i, l), b = x.length;
      for (let S = 0; S < b; S++) {
        w = w, P = P;
        const T = x[S], M = no(T, r);
        for (const R in w) v(w[R], Sd(P, R), io(R, M), S, b);
      }
    }
    u = d, d += y;
  }
  return r.forEach((p, m) => {
    for (const g in p) {
      const w = p[g];
      w.sort(bd);
      const P = [], y = [], v = [];
      for (let b = 0; b < w.length; b++) {
        const { at: S, value: T, easing: M } = w[b];
        P.push(T), y.push(ne(0, f, S)), v.push(M || "easeOut");
      }
      y[0] !== 0 && (y.unshift(0), P.unshift(P[0]), v.unshift(wd)), y[y.length - 1] !== 1 && (y.push(1), P.push(null)), s.has(m) || s.set(m, { keyframes: {}, transition: {} });
      const x = s.get(m);
      x.keyframes[g] = P, x.transition[g] = { ...e, duration: f, ease: v, times: y, ...n };
    }
  }), s;
}
function no(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function io(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Td(t) {
  return Array.isArray(t) ? t : [t];
}
function Sd(t, e) {
  return t && t[e] ? { ...t, ...t[e] } : { ...t };
}
const Pd = (t) => typeof t == "number", Ad = (t) => t.every(Pd), _d = (t) => Array.isArray(t);
function Md(t, e, n) {
  const i = t.getProps();
  return Bs(i, e, i.custom, t);
}
function Cd(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ee(n));
}
function Ed(t) {
  return _d(t) ? t[t.length - 1] || 0 : t;
}
function kd(t, e) {
  const n = Md(t, e);
  let { transitionEnd: i = {}, transition: o = {}, ...a } = n || {};
  a = { ...a, ...i };
  for (const s in a) {
    const r = Ed(a[s]);
    Cd(t, s, r);
  }
}
function Dd(t) {
  return !!(Q(t) && t.add);
}
function Vd(t, e) {
  const n = t.getValue("willChange");
  if (Dd(n)) return n.add(e);
  if (!n && Ct.WillChange) {
    const i = new Ct.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
const Rd = "framerAppearId", Ld = "data-" + ui(Rd);
function pa(t) {
  return t.props[Ld];
}
const Od = (t) => t !== null;
function $d(t, { repeat: e, repeatType: n = "loop" }, i) {
  const o = t.filter(Od), a = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return o[a];
}
const Bd = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, Fd = (t) => ({ type: "spring", stiffness: 550, damping: t === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), Id = { type: "keyframes", duration: 0.8 }, jd = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, Nd = (t, { keyframes: e }) => e.length > 2 ? Id : ae.has(t) ? t.startsWith("scale") ? Fd(e[1]) : Bd : jd;
function Ud({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: a, repeatType: s, repeatDelay: r, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function pi(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
function pn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function zd({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let o = 0, a = 0, s = 0;
  if (!e) o = a = s = n;
  else {
    const r = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - r;
    o = pn(l, r, t + 1 / 3), a = pn(l, r, t), s = pn(l, r, t - 1 / 3);
  }
  return { red: Math.round(o * 255), green: Math.round(a * 255), blue: Math.round(s * 255), alpha: i };
}
function en(t, e) {
  return (n) => n > 0 ? e : t;
}
const mn = (t, e, n) => {
  const i = t * t, o = n * (e * e - i) + i;
  return o < 0 ? 0 : Math.sqrt(o);
}, Hd = [On, zt, Jt], Wd = (t) => Hd.find((e) => e.test(t));
function oo(t) {
  const e = Wd(t);
  if (!e) return false;
  let n = e.parse(t);
  return e === Jt && (n = zd(n)), n;
}
const so = (t, e) => {
  const n = oo(t), i = oo(e);
  if (!n || !i) return en(t, e);
  const o = { ...n };
  return (a) => (o.red = mn(n.red, i.red, a), o.green = mn(n.green, i.green, a), o.blue = mn(n.blue, i.blue, a), o.alpha = z(n.alpha, i.alpha, a), zt.transform(o));
}, Bn = /* @__PURE__ */ new Set(["none", "hidden"]);
function Kd(t, e) {
  return Bn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
const Gd = (t, e) => (n) => e(t(n)), Ee = (...t) => t.reduce(Gd);
function qd(t, e) {
  return (n) => z(t, e, n);
}
function mi(t) {
  return typeof t == "number" ? qd : typeof t == "string" ? Qn(t) ? en : J.test(t) ? so : Zd : Array.isArray(t) ? ma : typeof t == "object" ? J.test(t) ? so : Xd : en;
}
function ma(t, e) {
  const n = [...t], i = n.length, o = t.map((a, s) => mi(a)(a, e[s]));
  return (a) => {
    for (let s = 0; s < i; s++) n[s] = o[s](a);
    return n;
  };
}
function Xd(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const o in n) t[o] !== void 0 && e[o] !== void 0 && (i[o] = mi(t[o])(t[o], e[o]));
  return (o) => {
    for (const a in i) n[a] = i[a](o);
    return n;
  };
}
function Yd(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const a = e.types[o], s = t.indexes[a][i[a]], r = t.values[s] ?? 0;
    n[o] = r, i[a]++;
  }
  return n;
}
const Zd = (t, e) => {
  const n = Bt.createTransformer(e), i = Te(t), o = Te(e);
  return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? Bn.has(t) && !o.values.length || Bn.has(e) && !i.values.length ? Kd(t, e) : Ee(ma(Yd(i, o), o.values), n) : en(t, e);
};
function va(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? z(t, e, n) : mi(t)(t, e);
}
const Jd = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return { start: (n = true) => j.update(e, n), stop: () => Et(e), now: () => ot.isProcessing ? ot.timestamp : lt.now() };
}, ga = (t, e, n = 10) => {
  let i = "";
  const o = Math.max(Math.round(e / n), 2);
  for (let a = 0; a < o; a++) i += Math.round(t(a / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, Qd = 5;
function ya(t, e, n) {
  const i = Math.max(e - Qd, 0);
  return $s(n - t(i), e - i);
}
const q = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, vn = 1e-3;
function tf({ duration: t = q.duration, bounce: e = q.bounce, velocity: n = q.velocity, mass: i = q.mass }) {
  let o, a, s = 1 - e;
  s = kt(q.minDamping, q.maxDamping, s), t = kt(q.minDuration, q.maxDuration, St(t)), s < 1 ? (o = (c) => {
    const u = c * s, d = u * t, f = u - n, p = Fn(c, s), m = Math.exp(-d);
    return vn - f / p * m;
  }, a = (c) => {
    const d = c * s * t, f = d * n + n, p = Math.pow(s, 2) * Math.pow(c, 2) * t, m = Math.exp(-d), g = Fn(Math.pow(c, 2), s);
    return (-o(c) + vn > 0 ? -1 : 1) * ((f - p) * m) / g;
  }) : (o = (c) => {
    const u = Math.exp(-c * t), d = (c - n) * t + 1;
    return -vn + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * t), d = (n - c) * (t * t);
    return u * d;
  });
  const r = 5 / t, l = nf(o, a, r);
  if (t = yt(t), isNaN(l)) return { stiffness: q.stiffness, damping: q.damping, duration: t };
  {
    const c = Math.pow(l, 2) * i;
    return { stiffness: c, damping: s * 2 * Math.sqrt(i * c), duration: t };
  }
}
const ef = 12;
function nf(t, e, n) {
  let i = n;
  for (let o = 1; o < ef; o++) i = i - t(i) / e(i);
  return i;
}
function Fn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const of = ["duration", "bounce"], sf = ["stiffness", "damping", "mass"];
function ao(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function af(t) {
  let e = { velocity: q.velocity, stiffness: q.stiffness, damping: q.damping, mass: q.mass, isResolvedFromDuration: false, ...t };
  if (!ao(t, sf) && ao(t, of)) if (t.visualDuration) {
    const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), o = i * i, a = 2 * kt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
    e = { ...e, mass: q.mass, stiffness: o, damping: a };
  } else {
    const n = tf(t);
    e = { ...e, ...n, mass: q.mass }, e.isResolvedFromDuration = true;
  }
  return e;
}
function Se(t = q.visualDuration, e = q.bounce) {
  const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: i, restDelta: o } = n;
  const a = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], r = { done: false, value: a }, { stiffness: l, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = af({ ...n, velocity: -St(n.velocity || 0) }), m = f || 0, g = c / (2 * Math.sqrt(l * u)), w = s - a, P = St(Math.sqrt(l / u)), y = Math.abs(w) < 5;
  i || (i = y ? q.restSpeed.granular : q.restSpeed.default), o || (o = y ? q.restDelta.granular : q.restDelta.default);
  let v;
  if (g < 1) {
    const b = Fn(P, g);
    v = (S) => {
      const T = Math.exp(-g * P * S);
      return s - T * ((m + g * P * w) / b * Math.sin(b * S) + w * Math.cos(b * S));
    };
  } else if (g === 1) v = (b) => s - Math.exp(-P * b) * (w + (m + P * w) * b);
  else {
    const b = P * Math.sqrt(g * g - 1);
    v = (S) => {
      const T = Math.exp(-g * P * S), M = Math.min(b * S, 300);
      return s - T * ((m + g * P * w) * Math.sinh(M) + b * w * Math.cosh(M)) / b;
    };
  }
  const x = { calculatedDuration: p && d || null, next: (b) => {
    const S = v(b);
    if (p) r.done = b >= d;
    else {
      let T = b === 0 ? m : 0;
      g < 1 && (T = b === 0 ? yt(m) : ya(v, b, S));
      const M = Math.abs(T) <= i, R = Math.abs(s - S) <= o;
      r.done = M && R;
    }
    return r.value = r.done ? s : S, r;
  }, toString: () => {
    const b = Math.min(fi(x), tn), S = ga((T) => x.next(b * T).value, b, 30);
    return b + "ms " + S;
  }, toTransition: () => {
  } };
  return x;
}
Se.applyToOptions = (t) => {
  const e = ha(t, 100, Se);
  return t.ease = e.ease, t.duration = yt(e.duration), t.type = "keyframes", t;
};
function In({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: s, min: r, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = t[0], f = { done: false, value: d }, p = (M) => r !== void 0 && M < r || l !== void 0 && M > l, m = (M) => r === void 0 ? l : l === void 0 || Math.abs(r - M) < Math.abs(l - M) ? r : l;
  let g = n * e;
  const w = d + g, P = s === void 0 ? w : s(w);
  P !== w && (g = P - d);
  const y = (M) => -g * Math.exp(-M / i), v = (M) => P + y(M), x = (M) => {
    const R = y(M), G = v(M);
    f.done = Math.abs(R) <= c, f.value = f.done ? P : G;
  };
  let b, S;
  const T = (M) => {
    p(f.value) && (b = M, S = Se({ keyframes: [f.value, m(f.value)], velocity: ya(v, M, f.value), damping: o, stiffness: a, restDelta: c, restSpeed: u }));
  };
  return T(0), { calculatedDuration: null, next: (M) => {
    let R = false;
    return !S && b === void 0 && (R = true, x(M), T(M)), b !== void 0 && M >= b ? S.next(M - b) : (!R && x(M), f);
  } };
}
function rf(t, e, n) {
  const i = [], o = n || Ct.mix || va, a = t.length - 1;
  for (let s = 0; s < a; s++) {
    let r = o(t[s], t[s + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[s] || ut : e;
      r = Ee(l, r);
    }
    i.push(r);
  }
  return i;
}
function lf(t, e, { clamp: n = true, ease: i, mixer: o } = {}) {
  const a = t.length;
  if (li(a === e.length), a === 1) return () => e[0];
  if (a === 2 && e[0] === e[1]) return () => e[1];
  const s = t[0] === t[1];
  t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const r = rf(e, i, o), l = r.length, c = (u) => {
    if (s && u < t[0]) return e[0];
    let d = 0;
    if (l > 1) for (; d < t.length - 2 && !(u < t[d + 1]); d++) ;
    const f = ne(t[d], t[d + 1], u);
    return r[d](f);
  };
  return n ? (u) => c(kt(t[0], t[a - 1], u)) : c;
}
function uf(t, e) {
  return t.map((n) => n * e);
}
const ba = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, cf = 1e-7, df = 12;
function ff(t, e, n, i, o) {
  let a, s, r = 0;
  do
    s = e + (n - e) / 2, a = ba(s, i, o) - t, a > 0 ? n = s : e = s;
  while (Math.abs(a) > cf && ++r < df);
  return s;
}
function ke(t, e, n, i) {
  if (t === e && n === i) return ut;
  const o = (a) => ff(a, 0, 1, t, n);
  return (a) => a === 0 || a === 1 ? a : ba(o(a), e, i);
}
const hf = ke(0.42, 0, 1, 1), pf = ke(0, 0, 0.58, 1), wa = ke(0.42, 0, 0.58, 1), xa = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ta = (t) => (e) => 1 - t(1 - e), Sa = ke(0.33, 1.53, 0.69, 0.99), vi = Ta(Sa), Pa = xa(vi), Aa = (t) => (t *= 2) < 1 ? 0.5 * vi(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), gi = (t) => 1 - Math.sin(Math.acos(t)), _a = Ta(gi), Ma = xa(gi), Ca = (t) => Array.isArray(t) && typeof t[0] == "number", mf = { linear: ut, easeIn: hf, easeInOut: wa, easeOut: pf, circIn: gi, circInOut: Ma, circOut: _a, backIn: vi, backInOut: Pa, backOut: Sa, anticipate: Aa }, vf = (t) => typeof t == "string", ro = (t) => {
  if (Ca(t)) {
    li(t.length === 4);
    const [e, n, i, o] = t;
    return ke(e, n, i, o);
  } else if (vf(t)) return mf[t];
  return t;
};
function gf(t, e) {
  return t.map(() => e || wa).splice(0, t.length - 1);
}
function ve({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const o = ua(i) ? i.map(ro) : ro(i), a = { done: false, value: e[0] }, s = uf(n && n.length === e.length ? n : fa(e), t), r = lf(s, e, { ease: Array.isArray(o) ? o : gf(e, o) });
  return { calculatedDuration: t, next: (l) => (a.value = r(l), a.done = l >= t, a) };
}
const yf = (t) => t !== null;
function yi(t, { repeat: e, repeatType: n = "loop" }, i, o = 1) {
  const a = t.filter(yf), r = o < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
  return !r || i === void 0 ? a[r] : i;
}
const bf = { decay: In, inertia: In, tween: ve, keyframes: ve, spring: Se };
function Ea(t) {
  typeof t.type == "string" && (t.type = bf[t.type]);
}
class bi {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const wf = (t) => t / 100;
class wi extends bi {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var n, i;
      const { motionValue: o } = this.options;
      o && o.updatedAt !== lt.now() && this.tick(lt.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (i = (n = this.options).onStop) == null || i.call(n));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Ea(e);
    const { type: n = ve, repeat: i = 0, repeatDelay: o = 0, repeatType: a, velocity: s = 0 } = e;
    let { keyframes: r } = e;
    const l = n || ve;
    l !== ve && typeof r[0] != "number" && (this.mixKeyframes = Ee(wf, va(r[0], r[1])), r = [0, 100]);
    const c = l({ ...e, keyframes: r });
    a === "mirror" && (this.mirroredGenerator = l({ ...e, keyframes: [...r].reverse(), velocity: -s })), c.calculatedDuration === null && (c.calculatedDuration = fi(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + o, this.totalDuration = this.resolvedDuration * (i + 1) - o, this.generator = c;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = false) {
    const { generator: i, totalDuration: o, mixKeyframes: a, mirroredGenerator: s, resolvedDuration: r, calculatedDuration: l } = this;
    if (this.startTime === null) return i.next(0);
    const { delay: c = 0, keyframes: u, repeat: d, repeatType: f, repeatDelay: p, type: m, onUpdate: g, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - o / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const P = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), y = this.playbackSpeed >= 0 ? P < 0 : P > o;
    this.currentTime = Math.max(P, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let v = this.currentTime, x = i;
    if (d) {
      const M = Math.min(this.currentTime, o) / r;
      let R = Math.floor(M), G = M % 1;
      !G && M >= 1 && (G = 1), G === 1 && R--, R = Math.min(R, d + 1), !!(R % 2) && (f === "reverse" ? (G = 1 - G, p && (G -= p / r)) : f === "mirror" && (x = s)), v = kt(0, 1, G) * r;
    }
    const b = y ? { done: false, value: u[0] } : x.next(v);
    a && (b.value = a(b.value));
    let { done: S } = b;
    !y && l !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return T && m !== In && (b.value = yi(u, this.options, w, this.speed)), g && g(b.value), T && this.finish(), b;
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return St(this.calculatedDuration);
  }
  get time() {
    return St(this.currentTime);
  }
  set time(e) {
    var n;
    e = yt(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (n = this.driver) == null || n.start(false);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(lt.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = St(this.currentTime));
  }
  play() {
    var e, n;
    if (this.isStopped) return;
    const { driver: i = Jd, startTime: o } = this.options;
    this.driver || (this.driver = i((s) => this.tick(s))), (n = (e = this.options).onPlay) == null || n.call(e);
    const a = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = a) : this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime || (this.startTime = o ?? a), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(lt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (e = this.options).onComplete) == null || n.call(e);
  }
  cancel() {
    var e, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (e = this.options).onCancel) == null || n.call(e);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, true);
  }
  attachTimeline(e) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), e.observe(this);
  }
}
const xf = (t) => t.startsWith("--");
function Tf(t, e, n) {
  xf(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
function xi(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Sf = xi(() => window.ScrollTimeline !== void 0), Pf = {};
function Af(t, e) {
  const n = xi(t);
  return () => Pf[e] ?? n();
}
const ka = Af(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), fe = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, lo = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: fe([0, 0.65, 0.55, 1]), circOut: fe([0.55, 0, 1, 0.45]), backIn: fe([0.31, 0.01, 0.66, -0.59]), backOut: fe([0.33, 1.53, 0.69, 0.99]) };
function Da(t, e) {
  if (t) return typeof t == "function" ? ka() ? ga(t, e) : "ease-out" : Ca(t) ? fe(t) : Array.isArray(t) ? t.map((n) => Da(n, e) || lo.easeOut) : lo[t];
}
function _f(t, e, n, { delay: i = 0, duration: o = 300, repeat: a = 0, repeatType: s = "loop", ease: r = "easeOut", times: l } = {}, c = void 0) {
  const u = { [e]: n };
  l && (u.offset = l);
  const d = Da(r, o);
  Array.isArray(d) && (u.easing = d);
  const f = { delay: i, duration: o, easing: Array.isArray(d) ? "linear" : d, fill: "both", iterations: a + 1, direction: s === "reverse" ? "alternate" : "normal" };
  return c && (f.pseudoElement = c), t.animate(u, f);
}
function Mf({ type: t, ...e }) {
  return hi(t) && ka() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Cf extends bi {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = false, !e) return;
    const { element: n, name: i, keyframes: o, pseudoElement: a, allowFlatten: s = false, finalKeyframe: r, onComplete: l } = e;
    this.isPseudoElement = !!a, this.allowFlatten = s, this.options = e, li(typeof e.type != "string");
    const c = Mf(e);
    this.animation = _f(n, i, o, c, a), c.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !a) {
        const u = yi(o, this.options, r, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : Tf(n, i, u), this.animation.cancel();
      }
      l == null ? void 0 : l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var e, n;
    this.isPseudoElement || (n = (e = this.animation).commitStyles) == null || n.call(e);
  }
  get duration() {
    var e, n;
    const i = ((n = (e = this.animation.effect) == null ? void 0 : e.getComputedTiming) == null ? void 0 : n.call(e).duration) || 0;
    return St(Number(i));
  }
  get time() {
    return St(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = yt(e);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, observe: n }) {
    var i;
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && Sf() ? (this.animation.timeline = e, ut) : n(this);
  }
}
const Va = { anticipate: Aa, backInOut: Pa, circInOut: Ma };
function Ef(t) {
  return t in Va;
}
function kf(t) {
  typeof t.ease == "string" && Ef(t.ease) && (t.ease = Va[t.ease]);
}
const uo = 10;
class Df extends Cf {
  constructor(e) {
    kf(e), Ea(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: o, element: a, ...s } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const r = new wi({ ...s, autoplay: false }), l = yt(this.finishedTime ?? this.time);
    n.setWithVelocity(r.sample(l - uo).value, r.sample(l).value, uo), r.stop();
  }
}
const co = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Bt.test(t) || t === "0") && !t.startsWith("url("));
function Vf(t) {
  const e = t[0];
  if (t.length === 1) return true;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
}
function Rf(t, e, n, i) {
  const o = t[0];
  if (o === null) return false;
  if (e === "display" || e === "visibility") return true;
  const a = t[t.length - 1], s = co(o, e), r = co(a, e);
  return !s || !r ? false : Vf(t) || (n === "spring" || hi(n)) && i;
}
function Ra(t) {
  return typeof t == "object" && t !== null;
}
function La(t) {
  return Ra(t) && "offsetHeight" in t;
}
const Lf = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), Of = xi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function $f(t) {
  var e;
  const { motionValue: n, name: i, repeatDelay: o, repeatType: a, damping: s, type: r } = t;
  if (!La((e = n == null ? void 0 : n.owner) == null ? void 0 : e.current)) return false;
  const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
  return Of() && i && Lf.has(i) && (i !== "transform" || !c) && !l && !o && a !== "mirror" && s !== 0 && r !== "inertia";
}
const Bf = 40;
class Ff extends bi {
  constructor({ autoplay: e = true, delay: n = 0, type: i = "keyframes", repeat: o = 0, repeatDelay: a = 0, repeatType: s = "loop", keyframes: r, name: l, motionValue: c, element: u, ...d }) {
    var f;
    super(), this.stop = () => {
      var g, w;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (w = this.keyframeResolver) == null || w.cancel();
    }, this.createdAt = lt.now();
    const p = { autoplay: e, delay: n, type: i, repeat: o, repeatDelay: a, repeatType: s, name: l, motionValue: c, element: u, ...d }, m = (u == null ? void 0 : u.KeyframeResolver) || oi;
    this.keyframeResolver = new m(r, (g, w, P) => this.onKeyframesResolved(g, w, p, !P), l, c, u), (f = this.keyframeResolver) == null || f.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, o) {
    this.keyframeResolver = void 0;
    const { name: a, type: s, velocity: r, delay: l, isHandoff: c, onUpdate: u } = i;
    this.resolvedAt = lt.now(), Rf(e, a, s, r) || ((Ct.instantAnimations || !l) && (u == null ? void 0 : u(yi(e, i, n))), e[0] = e[e.length - 1], i.duration = 0, i.repeat = 0);
    const f = { startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > Bf ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: n, ...i, keyframes: e }, p = !c && $f(f) ? new Df({ ...f, element: f.motionValue.owner.current }) : new wi(f);
    p.finished.then(() => this.notifyFinished()).catch(ut), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), Ec()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(), (e = this.keyframeResolver) == null || e.cancel();
  }
}
const Ti = (t, e, n, i = {}, o, a) => (s) => {
  const r = pi(i, t) || {}, l = r.delay || i.delay || 0;
  let { elapsed: c = 0 } = i;
  c = c - yt(l);
  const u = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: e.getVelocity(), ...r, delay: -c, onUpdate: (f) => {
    e.set(f), r.onUpdate && r.onUpdate(f);
  }, onComplete: () => {
    s(), r.onComplete && r.onComplete();
  }, name: t, motionValue: e, element: a ? void 0 : o };
  Ud(r) || Object.assign(u, Nd(t, u)), u.duration && (u.duration = yt(u.duration)), u.repeatDelay && (u.repeatDelay = yt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = false;
  if ((u.type === false || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = true)), (Ct.instantAnimations || Ct.skipAnimations) && (d = true, u.duration = 0, u.delay = 0), u.allowFlatten = !r.type && !r.ease, d && !a && e.get() !== void 0) {
    const f = $d(u.keyframes, r);
    if (f !== void 0) {
      j.update(() => {
        u.onUpdate(f), u.onComplete();
      });
      return;
    }
  }
  return r.isSync ? new wi(u) : new Ff(u);
};
function If({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== true;
  return e[n] = false, i;
}
function jf(t, e, { delay: n = 0, transitionOverride: i, type: o } = {}) {
  let { transition: a = t.getDefaultTransition(), transitionEnd: s, ...r } = e;
  i && (a = i);
  const l = [], c = o && t.animationState && t.animationState.getState()[o];
  for (const u in r) {
    const d = t.getValue(u, t.latestValues[u] ?? null), f = r[u];
    if (f === void 0 || c && If(c, u)) continue;
    const p = { delay: n, ...pi(a || {}, u) }, m = d.get();
    if (m !== void 0 && !d.isAnimating && !Array.isArray(f) && f === m && !p.velocity) continue;
    let g = false;
    if (window.MotionHandoffAnimation) {
      const P = pa(t);
      if (P) {
        const y = window.MotionHandoffAnimation(P, u, j);
        y !== null && (p.startTime = y, g = true);
      }
    }
    Vd(t, u), d.start(Ti(u, d, f, t.shouldReduceMotion && Js.has(u) ? { type: false } : p, t, g));
    const w = d.animation;
    w && l.push(w);
  }
  return s && Promise.all(l).then(() => {
    j.update(() => {
      s && kd(t, s);
    });
  }), l;
}
function Nf(t, e) {
  return t in e;
}
class Uf extends Zs {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, n) {
    if (Nf(n, e)) {
      const i = e[n];
      if (typeof i == "string" || typeof i == "number") return i;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return Y();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function Si(t) {
  return Ra(t) && "ownerSVGElement" in t;
}
function Oa(t) {
  return Si(t) && t.tagName === "svg";
}
function zf(t) {
  const e = { presenceContext: null, props: {}, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: {} } }, n = Si(t) && !Oa(t) ? new ra(e) : new sa(e);
  n.mount(t), Kt.set(t, n);
}
function Hf(t) {
  const e = { presenceContext: null, props: {}, visualState: { renderState: { output: {} }, latestValues: {} } }, n = new Uf(e);
  n.mount(t), Kt.set(t, n);
}
function $a(t, e, n) {
  const i = Q(t) ? t : ee(t);
  return i.start(Ti("", i, e, n)), i.animation;
}
function Wf(t, e) {
  return Q(t) || typeof t == "number" || typeof t == "string" && !ci(e);
}
function Ba(t, e, n, i) {
  const o = [];
  if (Wf(t, e)) o.push($a(t, ci(e) && e.default || e, n && (n.default || n)));
  else {
    const a = la(t, e, i), s = a.length;
    for (let r = 0; r < s; r++) {
      const l = a[r], c = l instanceof Element ? zf : Hf;
      Kt.has(l) || c(l);
      const u = Kt.get(l), d = { ...n };
      "delay" in d && typeof d.delay == "function" && (d.delay = d.delay(r, s)), o.push(...jf(u, { ...e, transition: d }, {}));
    }
  }
  return o;
}
function Kf(t, e, n) {
  const i = [];
  return xd(t, e, n, { spring: Se }).forEach(({ keyframes: a, transition: s }, r) => {
    i.push(...Ba(r, a, s));
  }), i;
}
class Gf {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((i) => i.attachTimeline(e));
    return () => {
      n.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class qf extends Gf {
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Xf(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Yf(t) {
  function e(n, i, o) {
    let a = [];
    return Xf(n) ? a = Kf(n, i, t) : a = Ba(n, i, o, t), new qf(a);
  }
  return e;
}
const Zf = Yf(), Jf = ["initial", "animate", "whileInView", "whileHover", "whilePress", "whileDrag", "whileFocus", "exit"];
class Qf extends Vt {
  constructor(e) {
    var n;
    super(e), this.animateUpdates = ({ controlActiveState: i, directAnimate: o, directTransition: a, controlDelay: s = 0, isFallback: r, isExit: l } = {}) => {
      const { reducedMotion: c } = this.state.options.motionConfig;
      this.state.visualElement.shouldReduceMotion = c === "always" || c === "user" && !!Qe.current;
      const u = this.state.target;
      this.state.target = { ...this.state.baseTarget };
      let d = {};
      d = this.resolveStateAnimation({ controlActiveState: i, directAnimate: o, directTransition: a });
      const f = this.createAnimationFactories(u, d, s), { getChildAnimations: p } = this.setupChildAnimations(d, this.state.activeStates, r);
      return this.executeAnimations({ factories: f, getChildAnimations: p, transition: d, controlActiveState: i, isExit: l });
    }, this.state.visualElement = hd(this.state.options.as, { presenceContext: null, parent: (n = this.state.parent) == null ? void 0 : n.visualElement, props: { ...this.state.options, whileTap: this.state.options.whilePress }, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: { ...this.state.baseTarget } }, reducedMotionConfig: this.state.options.motionConfig.reducedMotion }), this.state.animateUpdates = this.animateUpdates, this.state.isMounted() && this.state.startAnimation();
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.state.options;
    Li(e) && (this.unmountControls = e.subscribe(this.state));
  }
  executeAnimations({ factories: e, getChildAnimations: n, transition: i, controlActiveState: o, isExit: a = false }) {
    const s = () => Promise.all(e.map((d) => d()).filter(Boolean)), r = { ...this.state.target }, l = this.state.element, c = (d) => {
      var f, p;
      l.dispatchEvent($i("motionstart", r)), (p = (f = this.state.options).onAnimationStart) == null || p.call(f, r), d.then(() => {
        var m, g;
        l.dispatchEvent($i("motioncomplete", r, a)), (g = (m = this.state.options).onAnimationComplete) == null || g.call(m, r);
      }).catch(ut);
    }, u = () => {
      const d = (i == null ? void 0 : i.when) ? (i.when === "beforeChildren" ? s() : n()).then(() => i.when === "beforeChildren" ? n() : s()) : Promise.all([s(), n()]);
      return c(d), d;
    };
    return o ? u : u();
  }
  setupChildAnimations(e, n, i) {
    var o;
    const a = this.state.visualElement;
    if (!((o = a.variantChildren) != null && o.size) || !n) return { getChildAnimations: () => Promise.resolve() };
    const { staggerChildren: s = 0, staggerDirection: r = 1, delayChildren: l = 0 } = e || {}, c = a.variantChildren.size, u = (c - 1) * s, d = typeof l == "function", f = d ? (m) => l(m, c) : r === 1 ? (m = 0) => m * s : (m = 0) => u - m * s, p = Array.from(a.variantChildren).map((m, g) => m.state.animateUpdates({ controlActiveState: n, controlDelay: (d ? 0 : l) + f(g) }));
    return { getChildAnimations: () => Promise.all(p.map((m) => m())) };
  }
  createAnimationFactories(e, n, i) {
    const o = [];
    return Object.keys(this.state.target).forEach((a) => {
      var s;
      if (!Vu(e[a], this.state.target[a])) return;
      (s = this.state.baseTarget)[a] ?? (s[a] = ec.get(this.state.element, a));
      const r = this.state.target[a] === "none" && Ni(Ii[a]) ? Ii[a] : this.state.target[a];
      o.push(() => {
        var l;
        return Zf(this.state.element, { [a]: r }, { ...(n == null ? void 0 : n[a]) || n, delay: (((l = n == null ? void 0 : n[a]) == null ? void 0 : l.delay) || (n == null ? void 0 : n.delay) || 0) + i });
      });
    }), o;
  }
  resolveStateAnimation({ controlActiveState: e, directAnimate: n, directTransition: i }) {
    let o = this.state.options.transition, a = {};
    const { variants: s, custom: r, transition: l, animatePresenceContext: c } = this.state.options, u = r ?? (c == null ? void 0 : c.custom);
    return this.state.activeStates = { ...this.state.activeStates, ...e }, Jf.forEach((d) => {
      if (!this.state.activeStates[d] || Li(this.state.options[d])) return;
      const f = this.state.options[d];
      let p = Ni(f) ? pe(f, s, u) : void 0;
      if (this.state.visualElement.isVariantNode) {
        const m = pe(this.state.context[d], s, u);
        p = m ? Object.assign(m || {}, p) : a;
      }
      p && (d !== "initial" && (o = p.transition || this.state.options.transition || {}), a = Object.assign(a, p));
    }), n && (a = pe(n, s, u), o = a.transition || i || l), Object.entries(a).forEach(([d, f]) => {
      d !== "transition" && (this.state.target[d] = f);
    }), o;
  }
  mount() {
    const { element: e } = this.state;
    Rs.set(e, this.state), Kt.get(e) || (this.state.visualElement.mount(e), Kt.set(e, this.state.visualElement)), this.state.visualElement.state = this.state, this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.state.options, { animate: n } = this.state.visualElement.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    (e = this.unmountControls) == null || e.call(this);
  }
}
const th = { y: false };
function eh() {
  return th.y;
}
const Fa = (t, e) => e ? t === e ? true : Fa(t, e.parentElement) : false, nh = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
function Ia(t, e) {
  const n = di(t), i = new AbortController(), o = { passive: true, ...e, signal: i.signal };
  return [n, o, () => i.abort()];
}
const ih = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function oh(t) {
  return ih.has(t.tagName) || t.tabIndex !== -1;
}
const Ge = /* @__PURE__ */ new WeakSet();
function fo(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function gn(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: true, bubbles: true }));
}
const sh = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const i = fo(() => {
    if (Ge.has(n)) return;
    gn(n, "down");
    const o = fo(() => {
      gn(n, "up");
    }), a = () => gn(n, "cancel");
    n.addEventListener("keyup", o, e), n.addEventListener("blur", a, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ho(t) {
  return nh(t) && true;
}
function ah(t, e, n = {}) {
  const [i, o, a] = Ia(t, n), s = (r) => {
    const l = r.currentTarget;
    if (!ho(r)) return;
    Ge.add(l);
    const c = e(l, r), u = (p, m) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), Ge.has(l) && Ge.delete(l), ho(p) && typeof c == "function" && c(p, { success: m });
    }, d = (p) => {
      u(p, l === window || l === document || n.useGlobalTarget || Fa(l, p.target));
    }, f = (p) => {
      u(p, false);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return i.forEach((r) => {
    (n.useGlobalTarget ? window : r).addEventListener("pointerdown", s, o), La(r) && (r.addEventListener("focus", (c) => sh(c, o)), !oh(r) && !r.hasAttribute("tabindex") && (r.tabIndex = 0));
  }), a;
}
function ja(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
function po(t, e, n) {
  const i = t.options;
  i.whilePress && t.setActive("whilePress", n === "Start");
  const o = `onPress${n === "End" ? "" : n}`, a = i[o];
  a && j.postRender(() => a(e, ja(e)));
}
class rh extends Vt {
  isActive() {
    const { whilePress: e, onPress: n, onPressCancel: i, onPressStart: o } = this.state.options;
    return !!(e || n || i || o);
  }
  constructor(e) {
    super(e);
  }
  mount() {
    this.register();
  }
  update() {
    const { whilePress: e, onPress: n, onPressCancel: i, onPressStart: o } = this.state.options;
    e || n || i || o || this.register();
  }
  register() {
    const e = this.state.element;
    !e || !this.isActive() || (this.unmount(), this.unmount = ah(e, (n, i) => (po(this.state, i, "Start"), (o, { success: a }) => po(this.state, o, a ? "End" : "Cancel")), { useGlobalTarget: this.state.options.globalPressTarget }));
  }
}
function mo(t) {
  return !(t.pointerType === "touch" || eh());
}
function lh(t, e, n = {}) {
  const [i, o, a] = Ia(t, n), s = (r) => {
    if (!mo(r)) return;
    const { target: l } = r, c = e(l, r);
    if (typeof c != "function" || !l) return;
    const u = (d) => {
      mo(d) && (c(d), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, o);
  };
  return i.forEach((r) => {
    r.addEventListener("pointerenter", s, o);
  }), a;
}
function vo(t, e, n) {
  const i = t.options;
  i.whileHover && t.setActive("whileHover", n === "Start");
  const o = `onHover${n}`, a = i[o];
  a && j.postRender(() => a(e, ja(e)));
}
class uh extends Vt {
  isActive() {
    const { whileHover: e, onHoverStart: n, onHoverEnd: i } = this.state.options;
    return !!(e || n || i);
  }
  constructor(e) {
    super(e);
  }
  mount() {
    this.register();
  }
  update() {
    const { whileHover: e, onHoverStart: n, onHoverEnd: i } = this.state.visualElement.prevProps;
    e || n || i || this.register();
  }
  register() {
    const e = this.state.element;
    !e || !this.isActive() || (this.unmount(), this.unmount = lh(e, (n, i) => (vo(this.state, i, "Start"), (o) => {
      vo(this.state, o, "End");
    })));
  }
}
const ch = { some: 0, all: 1 };
function dh(t, e, { root: n, margin: i, amount: o = "some" } = {}) {
  const a = di(t), s = /* @__PURE__ */ new WeakMap(), r = (c) => {
    c.forEach((u) => {
      const d = s.get(u.target);
      if (u.isIntersecting !== !!d) if (u.isIntersecting) {
        const f = e(u.target, u);
        typeof f == "function" ? s.set(u.target, f) : l.unobserve(u.target);
      } else typeof d == "function" && (d(u), s.delete(u.target));
    });
  }, l = new IntersectionObserver(r, { root: n, rootMargin: i, threshold: typeof o == "number" ? o : ch[o] });
  return a.forEach((c) => l.observe(c)), () => l.disconnect();
}
function go(t, e, n) {
  const i = t.options;
  i.whileInView && t.setActive("whileInView", n === "Enter");
  const o = `onViewport${n}`, a = i[o];
  a && j.postRender(() => a(e));
}
class fh extends Vt {
  isActive() {
    const { whileInView: e, onViewportEnter: n, onViewportLeave: i } = this.state.options;
    return !!(e || n || i);
  }
  constructor(e) {
    super(e);
  }
  startObserver() {
    const e = this.state.element;
    if (!e || !this.isActive()) return;
    this.unmount();
    const { once: n, ...i } = this.state.options.inViewOptions || {};
    this.unmount = dh(e, (o, a) => {
      if (go(this.state, a, "Enter"), !n) return (s) => {
        go(this.state, a, "Leave");
      };
    }, i);
  }
  mount() {
    this.startObserver();
  }
  update() {
    const { props: e, prevProps: n } = this.state.visualElement;
    ["amount", "margin", "root"].some(hh(e, n)) && this.startObserver();
  }
}
function hh({ inViewOptions: t = {} }, { inViewOptions: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
function nn(t, e, n, i = { passive: true }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
class ph extends Vt {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let e = false;
    try {
      e = this.state.element.matches(":focus-visible");
    } catch {
      e = true;
    }
    e && (this.state.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    this.isActive && (this.state.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = Ee(nn(this.state.element, "focus", () => this.onFocus()), nn(this.state.element, "blur", () => this.onBlur()));
  }
}
const mh = (t, e) => t.depth - e.depth;
class vh {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(e) {
    ni(this.children, e), this.isDirty = true;
  }
  remove(e) {
    ln(this.children, e), this.isDirty = true;
  }
  forEach(e) {
    this.isDirty && this.children.sort(mh), this.isDirty = false, this.children.forEach(e);
  }
}
function gh(t, e) {
  const n = lt.now(), i = ({ timestamp: o }) => {
    const a = o - n;
    a >= e && (Et(i), t(a - e));
  };
  return j.setup(i, true), () => Et(i);
}
function yn(t) {
  return Q(t) ? t.get() : t;
}
const Na = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], yh = Na.length, yo = (t) => typeof t == "string" ? parseFloat(t) : t, bo = (t) => typeof t == "number" || k.test(t);
function bh(t, e, n, i, o, a) {
  o ? (t.opacity = z(0, n.opacity ?? 1, wh(i)), t.opacityExit = z(e.opacity ?? 1, 0, xh(i))) : a && (t.opacity = z(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let s = 0; s < yh; s++) {
    const r = `border${Na[s]}Radius`;
    let l = wo(e, r), c = wo(n, r);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || bo(l) === bo(c) ? (t[r] = Math.max(z(yo(l), yo(c), i), 0), (Tt.test(c) || Tt.test(l)) && (t[r] += "%")) : t[r] = c;
  }
  (e.rotate || n.rotate) && (t.rotate = z(e.rotate || 0, n.rotate || 0, i));
}
function wo(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const wh = Ua(0, 0.5, _a), xh = Ua(0.5, 0.95, ut);
function Ua(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(ne(t, e, i));
}
function xo(t, e) {
  t.min = e.min, t.max = e.max;
}
function ft(t, e) {
  xo(t.x, e.x), xo(t.y, e.y);
}
function To(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function bn(t) {
  return t === void 0 || t === 1;
}
function jn({ scale: t, scaleX: e, scaleY: n }) {
  return !bn(t) || !bn(e) || !bn(n);
}
function Nt(t) {
  return jn(t) || za(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function za(t) {
  return So(t.x) || So(t.y);
}
function So(t) {
  return t && t !== "0%";
}
function on(t, e, n) {
  const i = t - n, o = e * i;
  return n + o;
}
function Po(t, e, n, i, o) {
  return o !== void 0 && (t = on(t, o, i)), on(t, n, i) + e;
}
function Nn(t, e = 0, n = 1, i, o) {
  t.min = Po(t.min, e, n, i, o), t.max = Po(t.max, e, n, i, o);
}
function Ha(t, { x: e, y: n }) {
  Nn(t.x, e.translate, e.scale, e.originPoint), Nn(t.y, n.translate, n.scale, n.originPoint);
}
const Ao = 0.999999999999, _o = 1.0000000000001;
function Th(t, e, n, i = false) {
  const o = n.length;
  if (!o) return;
  e.x = e.y = 1;
  let a, s;
  for (let r = 0; r < o; r++) {
    a = n[r], s = a.projectionDelta;
    const { visualElement: l } = a.options;
    l && l.props.style && l.props.style.display === "contents" || (i && a.options.layoutScroll && a.scroll && a !== a.root && Qt(t, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }), s && (e.x *= s.x.scale, e.y *= s.y.scale, Ha(t, s)), i && Nt(a.latestValues) && Qt(t, a.latestValues));
  }
  e.x < _o && e.x > Ao && (e.x = 1), e.y < _o && e.y > Ao && (e.y = 1);
}
function ze(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Mo(t, e, n, i, o = 0.5) {
  const a = z(t.min, t.max, o);
  Nn(t, e, n, a, i);
}
function Qt(t, e) {
  Mo(t.x, e.x, e.scaleX, e.scale, e.originX), Mo(t.y, e.y, e.scaleY, e.scale, e.originY);
}
const Wa = 1e-4, Sh = 1 - Wa, Ph = 1 + Wa, Ka = 0.01, Ah = 0 - Ka, _h = 0 + Ka;
function pt(t) {
  return t.max - t.min;
}
function Mh(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Co(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = z(e.min, e.max, t.origin), t.scale = pt(n) / pt(e), t.translate = z(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Sh && t.scale <= Ph || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Ah && t.translate <= _h || isNaN(t.translate)) && (t.translate = 0);
}
function ge(t, e, n, i) {
  Co(t.x, e.x, n.x, i ? i.originX : void 0), Co(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Eo(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + pt(e);
}
function Ch(t, e, n) {
  Eo(t.x, e.x, n.x), Eo(t.y, e.y, n.y);
}
function ko(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + pt(e);
}
function ye(t, e, n) {
  ko(t.x, e.x, n.x), ko(t.y, e.y, n.y);
}
function Do(t, e, n, i, o) {
  return t -= e, t = on(t, 1 / n, i), o !== void 0 && (t = on(t, 1 / o, i)), t;
}
function Eh(t, e = 0, n = 1, i = 0.5, o, a = t, s = t) {
  if (Tt.test(e) && (e = parseFloat(e), e = z(s.min, s.max, e / 100) - s.min), typeof e != "number") return;
  let r = z(a.min, a.max, i);
  t === a && (r -= e), t.min = Do(t.min, e, n, r, o), t.max = Do(t.max, e, n, r, o);
}
function Vo(t, e, [n, i, o], a, s) {
  Eh(t, e[n], e[i], e[o], e.scale, a, s);
}
const kh = ["x", "scaleX", "originX"], Dh = ["y", "scaleY", "originY"];
function Ro(t, e, n, i) {
  Vo(t.x, e, kh, n ? n.x : void 0, i ? i.x : void 0), Vo(t.y, e, Dh, n ? n.y : void 0, i ? i.y : void 0);
}
function Lo(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ga(t) {
  return Lo(t.x) && Lo(t.y);
}
function Oo(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Vh(t, e) {
  return Oo(t.x, e.x) && Oo(t.y, e.y);
}
function $o(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function qa(t, e) {
  return $o(t.x, e.x) && $o(t.y, e.y);
}
function Bo(t) {
  return pt(t.x) / pt(t.y);
}
function Fo(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Rh {
  constructor() {
    this.members = [];
  }
  add(e) {
    ni(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (ln(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((o) => e === o);
    if (n === 0) return false;
    let i;
    for (let o = n; o >= 0; o--) {
      const a = this.members[o];
      if (a.isPresent !== false) {
        i = a;
        break;
      }
    }
    return i ? (this.promote(i), true) : false;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = true), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = true);
      const { crossfade: o } = e.options;
      o === false && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Lh(t, e, n) {
  let i = "";
  const o = t.x.translate / e.x, a = t.y.translate / e.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || a || s) && (i = `translate3d(${o}px, ${a}px, ${s}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: f, skewX: p, skewY: m } = n;
    c && (i = `perspective(${c}px) ${i}`), u && (i += `rotate(${u}deg) `), d && (i += `rotateX(${d}deg) `), f && (i += `rotateY(${f}deg) `), p && (i += `skewX(${p}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const r = t.x.scale * e.x, l = t.y.scale * e.y;
  return (r !== 1 || l !== 1) && (i += `scale(${r}, ${l})`), i || "none";
}
function Io(t) {
  return [t("x"), t("y")];
}
const qe = { hasAnimatedSinceResize: true, hasEverUpdated: false }, { schedule: Oh } = Vs(queueMicrotask, false), wn = ["", "X", "Y", "Z"], $h = 1e3;
let Bh = 0;
function xn(t, e, n, i) {
  const { latestValues: o } = e;
  o[t] && (n[t] = o[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Xa(t) {
  if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = pa(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: a } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", j, !(o || a));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Xa(i);
}
function Ya({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: o }) {
  return class {
    constructor(s = {}, r = e == null ? void 0 : e()) {
      this.id = Bh++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(jh), this.nodes.forEach(Hh), this.nodes.forEach(Wh), this.nodes.forEach(Nh);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
      this.root === this && (this.nodes = new vh());
    }
    addEventListener(s, r) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new ii()), this.eventHandlers.get(s).add(r);
    }
    notifyListeners(s, ...r) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...r);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      this.isSVG = Si(s) && !Oa(s), this.instance = s;
      const { layoutId: r, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || r) && (this.isLayoutDirty = true), t) {
        let u, d = 0;
        const f = () => this.root.updateBlockedByResize = false;
        j.read(() => {
          d = window.innerWidth;
        }), t(s, () => {
          const p = window.innerWidth;
          p !== d && (d = p, this.root.updateBlockedByResize = true, u && u(), u = gh(f, 250), qe.hasAnimatedSinceResize && (qe.hasAnimatedSinceResize = false, this.nodes.forEach(Uo)));
        });
      }
      r && this.root.registerSharedNode(r, this), this.options.animate !== false && c && (r || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || c.getDefaultTransition() || Yh, { onLayoutAnimationStart: g, onLayoutAnimationComplete: w } = c.getProps(), P = !this.targetLayout || !qa(this.targetLayout, p), y = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || y || d && (P || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = { ...pi(m, "layout"), onPlay: g, onComplete: w };
          (c.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = false), this.startAnimation(v), this.setAnimationOrigin(u, y);
        } else d || Uo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Et(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Kh), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Xa(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = true, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(false);
      }
      const { layoutId: r, layout: l } = this.options;
      if (r === void 0 && !l) return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jo);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(No);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(zh), this.nodes.forEach(Fh), this.nodes.forEach(Ih)) : this.nodes.forEach(No), this.clearAllSnapshots();
      const r = lt.now();
      ot.delta = kt(0, 1e3 / 60, r - ot.timestamp), ot.timestamp = r, ot.isProcessing = true, dn.update.process(ot), dn.preRender.process(ot), dn.render.process(ot), ot.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, Oh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Uh), this.sharedNodes.forEach(Gh);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, j.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      j.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !pt(this.snapshot.measuredBox.x) && !pt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(false), this.layoutCorrected = Y(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: r } = this.options;
      r && r.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let r = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (r = false), r && this.instance) {
        const l = i(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: s, isRoot: l, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : l };
      }
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, r = this.projectionDelta && !Ga(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      s && this.instance && (r || Nt(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(s = true) {
      const r = this.measurePageBox();
      let l = this.removeElementScroll(r);
      return s && (l = this.removeTransform(l)), Zh(l), { animationId: this.root.animationId, measuredBox: r, layoutBox: l, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var s;
      const { visualElement: r } = this.options;
      if (!r) return Y();
      const l = r.measureViewportBox();
      if (!(((s = this.scroll) == null ? void 0 : s.wasRoot) || this.path.some(Jh))) {
        const { scroll: u } = this.root;
        u && (ze(l.x, u.offset.x), ze(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var r;
      const l = Y();
      if (ft(l, s), (r = this.scroll) != null && r.wasRoot) return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: d, options: f } = u;
        u !== this.root && d && f.layoutScroll && (d.wasRoot && ft(l, s), ze(l.x, d.offset.x), ze(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, r = false) {
      const l = Y();
      ft(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !r && u.options.layoutScroll && u.scroll && u !== u.root && Qt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }), Nt(u.latestValues) && Qt(l, u.latestValues);
      }
      return Nt(this.latestValues) && Qt(l, this.latestValues), l;
    }
    removeTransform(s) {
      const r = Y();
      ft(r, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Nt(c.latestValues)) continue;
        jn(c.latestValues) && c.updateSnapshot();
        const u = Y(), d = c.measurePageBox();
        ft(u, d), Ro(r, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Nt(this.latestValues) && Ro(r, this.latestValues), r;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(s) {
      this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : true };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ot.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(s = false) {
      var r;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || (r = this.parent) != null && r.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = ot.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), ye(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ch(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ft(this.target, this.layout.layoutBox), Ha(this.target, this.targetDelta)) : ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = false;
          const p = this.getClosestProjectingParent();
          p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), ye(this.relativeTargetOrigin, this.target, p.target), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || jn(this.parent.latestValues) || za(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const r = this.getLead(), l = !!this.resumingFrom || this !== r;
      let c = true;
      if ((this.isProjectionDirty || (s = this.parent) != null && s.isProjectionDirty) && (c = false), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = false), this.resolvedRelativeTargetAt === ot.timestamp && (c = false), c) return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d)) return;
      ft(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      Th(this.layoutCorrected, this.treeScale, this.path, l), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = Y());
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (To(this.prevProjectionDelta.x, this.projectionDelta.x), To(this.prevProjectionDelta.y, this.projectionDelta.y)), ge(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== p || !Fo(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fo(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(s = true) {
      var r;
      if ((r = this.options.visualElement) == null || r.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Zt(), this.projectionDelta = Zt(), this.projectionDeltaWithTransform = Zt();
    }
    setAnimationOrigin(s, r = false) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Zt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
      const f = Y(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, g = p !== m, w = this.getStack(), P = !w || w.members.length <= 1, y = !!(g && !P && this.options.crossfade === true && !this.path.some(Xh));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (x) => {
        const b = x / 1e3;
        zo(d.x, s.x, b), zo(d.y, s.y, b), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ye(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), qh(this.relativeTarget, this.relativeTargetOrigin, f, b), v && Vh(this.relativeTarget, v) && (this.isProjectionDirty = false), v || (v = Y()), ft(v, this.relativeTarget)), g && (this.animationValues = u, bh(u, c, this.latestValues, b, y, P)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var r, l, c;
      this.notifyListeners("animationStart"), (r = this.currentAnimation) == null || r.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (Et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = j.update(() => {
        qe.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = ee(0)), this.currentAnimation = $a(this.motionValue, [0, 1e3], { ...s, velocity: 0, isSync: true, onUpdate: (u) => {
          this.mixTargetDelta(u), s.onUpdate && s.onUpdate(u);
        }, onStop: () => {
        }, onComplete: () => {
          s.onComplete && s.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta($h), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: r, target: l, layout: c, latestValues: u } = s;
      if (!(!r || !l || !c)) {
        if (this !== s && this.layout && c && Za(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Y();
          const d = pt(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + d;
          const f = pt(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + f;
        }
        ft(r, l), Qt(r, u), ge(this.projectionDeltaWithTransform, this.layoutCorrected, r, u);
      }
    }
    registerSharedNode(s, r) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Rh()), this.sharedNodes.get(s).add(r);
      const c = r.options.initialPromotionConfig;
      r.promote({ transition: c ? c.transition : void 0, preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(r) : void 0 });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : true;
    }
    getLead() {
      var s;
      const { layoutId: r } = this.options;
      return r ? ((s = this.getStack()) == null ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: r } = this.options;
      return r ? (s = this.getStack()) == null ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: r, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = true), r && this.setOptions({ transition: r });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : false;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let r = false;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (r = true), !r) return;
      const c = {};
      l.z && xn("z", s, c, this.animationValues);
      for (let u = 0; u < wn.length; u++) xn(`rotate${wn[u]}`, s, c, this.animationValues), xn(`skew${wn[u]}`, s, c, this.animationValues);
      s.render();
      for (const u in c) s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, r) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, s.visibility = "", s.opacity = "", s.pointerEvents = yn(r == null ? void 0 : r.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = yn(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Nt(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = false);
        return;
      }
      s.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let d = Lh(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (d = l(u, d)), s.transform = d;
      const { x: f, y: p } = this.projectionDelta;
      s.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, c.animationValues ? s.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : s.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const m in we) {
        if (u[m] === void 0) continue;
        const { correct: g, applyTo: w, isCSSVariable: P } = we[m], y = d === "none" ? u[m] : g(u[m], c);
        if (w) {
          const v = w.length;
          for (let x = 0; x < v; x++) s[w[x]] = y;
        } else P ? this.options.visualElement.renderState.vars[m] = y : s[m] = y;
      }
      this.options.layoutId && (s.pointerEvents = c === this ? yn(r == null ? void 0 : r.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var r;
        return (r = s.currentAnimation) == null ? void 0 : r.stop();
      }), this.root.nodes.forEach(jo), this.root.sharedNodes.clear();
    }
  };
}
function Fh(t) {
  t.updateLayout();
}
function Ih(t) {
  var e;
  const n = ((e = t.resumeFrom) == null ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: o } = t.layout, { animationType: a } = t.options, s = n.source !== t.layout.source;
    a === "size" ? Io((d) => {
      const f = s ? n.measuredBox[d] : n.layoutBox[d], p = pt(f);
      f.min = i[d].min, f.max = f.min + p;
    }) : Za(a, n.layoutBox, i) && Io((d) => {
      const f = s ? n.measuredBox[d] : n.layoutBox[d], p = pt(i[d]);
      f.max = f.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[d].max = t.relativeTarget[d].min + p);
    });
    const r = Zt();
    ge(r, i, n.layoutBox);
    const l = Zt();
    s ? ge(l, t.applyTransform(o, true), n.measuredBox) : ge(l, i, n.layoutBox);
    const c = !Ga(r);
    let u = false;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = Y();
          ye(m, n.layoutBox, f.layoutBox);
          const g = Y();
          ye(g, i, p.layoutBox), qa(m, g) || (u = true), d.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = m, t.relativeParent = d);
        }
      }
    }
    t.notifyListeners("didUpdate", { layout: i, snapshot: n, delta: l, layoutDelta: r, hasLayoutChanged: c, hasRelativeLayoutChanged: u });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function jh(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Nh(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
}
function Uh(t) {
  t.clearSnapshot();
}
function jo(t) {
  t.clearMeasurements();
}
function No(t) {
  t.isLayoutDirty = false;
}
function zh(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Uo(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
}
function Hh(t) {
  t.resolveTargetDelta();
}
function Wh(t) {
  t.calcProjection();
}
function Kh(t) {
  t.resetSkewAndRotation();
}
function Gh(t) {
  t.removeLeadSnapshot();
}
function zo(t, e, n) {
  t.translate = z(e.translate, 0, n), t.scale = z(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ho(t, e, n, i) {
  t.min = z(e.min, n.min, i), t.max = z(e.max, n.max, i);
}
function qh(t, e, n, i) {
  Ho(t.x, e.x, n.x, i), Ho(t.y, e.y, n.y, i);
}
function Xh(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Yh = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, Wo = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ko = Wo("applewebkit/") && !Wo("chrome/") ? Math.round : ut;
function Go(t) {
  t.min = Ko(t.min), t.max = Ko(t.max);
}
function Zh(t) {
  Go(t.x), Go(t.y);
}
function Za(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Mh(Bo(e), Bo(n), 0.2);
}
function Jh(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
function Qh(t, e, n, i = { passive: true }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
const tp = Ya({ attachResizeListener: (t, e) => Qh(t, "resize", e), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), Tn = { current: void 0 }, ep = Ya({ measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }), defaultParent: () => {
  if (!Tn.current) {
    const t = new tp({});
    t.mount(window), t.setOptions({ layoutScroll: true }), Tn.current = t;
  }
  return Tn.current;
}, resetTransform: (t, e) => {
  t.style.transform = e !== void 0 ? e : "none";
}, checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed" });
function Ja(t) {
  if (t) return t.options.allowProjection !== false ? t.projection : Ja(t.parent);
}
function qo(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const de = { correct: (t, e) => {
  if (!e.target) return t;
  if (typeof t == "string") if (k.test(t)) t = parseFloat(t);
  else return t;
  const n = qo(t, e.target.x), i = qo(t, e.target.y);
  return `${n}% ${i}%`;
} }, np = { correct: (t, { treeScale: e, projectionDelta: n }) => {
  const i = t, o = Bt.parse(t);
  if (o.length > 5) return i;
  const a = Bt.createTransformer(t), s = typeof o[0] != "number" ? 1 : 0, r = n.x.scale * e.x, l = n.y.scale * e.y;
  o[0 + s] /= r, o[1 + s] /= l;
  const c = z(r, l, 0.5);
  return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), a(o);
} }, Qa = { borderRadius: { ...de, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: de, borderTopRightRadius: de, borderBottomLeftRadius: de, borderBottomRightRadius: de, boxShadow: np };
function he(t) {
  return typeof t == "object" && t !== null && "nodeType" in t;
}
class ip extends Vt {
  constructor(e) {
    super(e), ks(Qa);
  }
  initProjection() {
    const e = this.state.options;
    this.state.visualElement.projection = new ep(this.state.visualElement.latestValues, e["data-framer-portal-id"] ? void 0 : Ja(this.state.visualElement.parent)), this.state.visualElement.projection.isPresent = true, this.setOptions();
  }
  beforeMount() {
    this.initProjection();
  }
  setOptions() {
    const e = this.state.options;
    this.state.visualElement.projection.setOptions({ layout: e.layout, layoutId: e.layoutId, alwaysMeasureLayout: !!e.drag || e.dragConstraints && he(e.dragConstraints), visualElement: this.state.visualElement, animationType: typeof e.layout == "string" ? e.layout : "both", layoutRoot: e.layoutRoot, layoutScroll: e.layoutScroll, crossfade: e.crossfade, onExitComplete: () => {
      var n;
      if (!((n = this.state.visualElement.projection) != null && n.isPresent)) {
        const i = ti.get(this.state.element);
        this.state.isSafeToRemove = true, i && i({ detail: { isExit: true } }, true);
      }
    } });
  }
  update() {
    this.setOptions();
  }
  mount() {
    var e;
    (e = this.state.visualElement.projection) == null || e.mount(this.state.element);
  }
}
function tr(t) {
  return t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
}
function Pi(t, e = "page") {
  return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
}
function op(t) {
  return (e) => tr(e) && t(e, Pi(e));
}
function be(t, e, n, i) {
  return nn(t, e, op(n), i);
}
function er(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : false;
  };
}
const Xo = er("dragHorizontal"), Yo = er("dragVertical");
function sp(t) {
  let e = false;
  if (t === "y") e = Yo();
  else if (t === "x") e = Xo();
  else {
    const n = Xo(), i = Yo();
    n && i ? e = () => {
      n(), i();
    } : (n && n(), i && i());
  }
  return e;
}
function Un(t) {
  return t.max - t.min;
}
function ap(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? z(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? z(n, t, i.max) : Math.min(t, n)), t;
}
const zn = 0.35;
function rp(t, { top: e, left: n, bottom: i, right: o }) {
  return { x: Zo(t.x, n, o), y: Zo(t.y, e, i) };
}
function Zo(t, e, n) {
  return { min: e !== void 0 ? t.min + e : void 0, max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0 };
}
function lp(t = zn) {
  return t === false ? t = 0 : t === true && (t = zn), { x: Jo(t, "left", "right"), y: Jo(t, "top", "bottom") };
}
function Jo(t, e, n) {
  return { min: Qo(t, e), max: Qo(t, n) };
}
function Qo(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
function up(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
function cp(t, e) {
  return { x: ts(t.x, e.x), y: ts(t.y, e.y) };
}
function ts(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function dp(t, e) {
  let n = 0.5;
  const i = Un(t), o = Un(e);
  return o > i ? n = ne(e.min, e.max - i, t.min) : i > o && (n = ne(t.min, t.max - o, e.min)), kt(0, 1, n);
}
const es = (t, e) => Math.abs(t - e);
function fp(t, e) {
  const n = es(t.x, e.x), i = es(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class nr {
  constructor(e, n, { transformPagePoint: i, contextWindow: o, dragSnapToOrigin: a = false } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const d = Pn(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, p = fp(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !p) return;
      const { point: m } = d, { timestamp: g } = ot;
      this.history.push({ ...m, timestamp: g });
      const { onStart: w, onMove: P } = this.handlers;
      f || (w && w(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), P && P(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Sn(f, this.transformPagePoint), j.update(this.updatePoint, true);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: p, onSessionEnd: m, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const w = Pn(d.type === "pointercancel" ? this.lastMoveEventInfo : Sn(f, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, w), m && m(d, w);
    }, !tr(e)) return;
    this.dragSnapToOrigin = a, this.handlers = n, this.transformPagePoint = i, this.contextWindow = o || window;
    const s = Pi(e), r = Sn(s, this.transformPagePoint), { point: l } = r, { timestamp: c } = ot;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(e, Pn(r, this.history)), this.removeListeners = Ee(be(this.contextWindow, "pointermove", this.handlePointerMove), be(this.contextWindow, "pointerup", this.handlePointerUp), be(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Et(this.updatePoint);
  }
}
function Sn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ns(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Pn({ point: t }, e) {
  return { point: t, delta: ns(t, ir(e)), offset: ns(t, hp(e)), velocity: pp(e, 0.1) };
}
function hp(t) {
  return t[0];
}
function ir(t) {
  return t[t.length - 1];
}
function pp(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const o = ir(t);
  for (; n >= 0 && (i = t[n], !(o.timestamp - i.timestamp > yt(e))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const a = St(o.timestamp - i.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - i.x) / a, y: (o.y - i.y) / a };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const is = () => ({ min: 0, max: 0 });
function mp() {
  return { x: is(), y: is() };
}
function xt(t) {
  return [t("x"), t("y")];
}
function vp(t) {
  return !!(Q(t) && t.add);
}
function os(t, e) {
  const n = t.getValue("willChange");
  if (vp(n)) return n.add(e);
}
function or({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function gp(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function yp({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ss(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function bp(t, e) {
  return or(gp(t.getBoundingClientRect(), e));
}
function wp(t, e, n) {
  const i = bp(t, n), { scroll: o } = e;
  return o && (ss(i.x, o.offset.x), ss(i.y, o.offset.y)), i;
}
function as(t) {
  return !ti.has(t.current);
}
function sr({ current: t }) {
  return t ? t.ownerDocument.defaultView : null;
}
const xp = /* @__PURE__ */ new WeakMap();
class Tp {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = mp(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = false } = {}) {
    if (!as(this.visualElement)) return;
    const i = (c) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Pi(c, "page").point);
    }, o = (c, u) => {
      const { drag: d, dragPropagation: f, onDragStart: p } = this.getProps();
      if (d && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = sp(d), !this.openGlobalLock)) return;
      this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), xt((g) => {
        let w = this.getAxisMotionValue(g).get() || 0;
        if (Tt.test(w)) {
          const { projection: P } = this.visualElement;
          if (P && P.layout) {
            const y = P.layout.layoutBox[g];
            y && (w = Un(y) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[g] = w;
      }), p && j.postRender(() => p(c, u)), os(this.visualElement, "transform"), this.visualElement.state.setActive("whileDrag", true);
    }, a = (c, u) => {
      const { dragPropagation: d, dragDirectionLock: f, onDirectionLock: p, onDrag: m } = this.getProps();
      if (!d && !this.openGlobalLock) return;
      const { offset: g } = u;
      if (f && this.currentDirection === null) {
        this.currentDirection = Sp(g), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), m && m(c, u);
    }, s = (c, u) => this.stop(c, u), r = () => xt((c) => {
      var u;
      return this.getAnimationState(c) === "paused" && ((u = this.getAxisMotionValue(c).animation) == null ? void 0 : u.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new nr(e, { onSessionStart: i, onStart: o, onMove: a, onSessionEnd: s, resumeAnimation: r }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: l, contextWindow: sr(this.visualElement) });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && j.postRender(() => a(e, n));
  }
  cancel() {
    this.isDragging = false;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), this.visualElement.state.setActive("whileDrag", false);
  }
  updateAxis(e, n, i) {
    const { drag: o } = this.getProps();
    if (!i || !He(e, o, this.currentDirection)) return;
    const a = this.getAxisMotionValue(e);
    let s = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (s = ap(s, this.constraints[e], this.elastic[e])), a.set(s);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (e = this.visualElement.projection) == null ? void 0 : e.layout, a = this.constraints;
    n && he(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = rp(o.layoutBox, n) : this.constraints = false, this.elastic = lp(i), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && xt((s) => {
      this.constraints !== false && this.getAxisMotionValue(s) && (this.constraints[s] = up(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !he(e)) return false;
    const i = e, { projection: o } = this.visualElement;
    if (!o || !o.layout) return false;
    const a = wp(i, o.root, this.visualElement.getTransformPagePoint());
    let s = cp(o.layout.layoutBox, a);
    if (n) {
      const r = n(yp(s));
      this.hasMutatedConstraints = !!r, r && (s = or(r));
    }
    return s;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: o, dragTransition: a, dragSnapToOrigin: s, onDragTransitionEnd: r } = this.getProps(), l = this.constraints || {}, c = xt((u) => {
      if (!He(u, n, this.currentDirection)) return;
      let d = l && l[u] || {};
      s && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, m = { type: "inertia", velocity: i ? e[u] : 0, bounceStiffness: f, bounceDamping: p, timeConstant: 750, restDelta: 1, restSpeed: 10, ...a, ...d };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(r);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return os(this.visualElement, e), i.start(Ti(e, i, 0, n, this.visualElement, false));
  }
  stopAnimation() {
    as(this.visualElement) && xt((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    xt((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps();
    return i[n] || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    xt((n) => {
      const { drag: i } = this.getProps();
      if (!He(n, i, this.currentDirection)) return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: r } = o.layout.layoutBox[n];
        a.set(e[n] - z(s, r, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!he(n) || !i || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    xt((s) => {
      const r = this.getAxisMotionValue(s);
      if (r && this.constraints !== false) {
        const l = r.get();
        o[s] = dp({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), xt((s) => {
      if (!He(s, e, null)) return;
      const r = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      r.set(z(l, c, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    xp.set(this.visualElement, this);
    const e = this.visualElement.current, n = be(e, "pointerdown", (l) => {
      const { drag: c, dragListener: u = true } = this.getProps();
      c && u && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      he(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), j.read(i);
    const s = nn(window, "resize", () => this.scalePositionWithinConstraints()), r = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (xt((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), a(), r && r();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: i = false, dragPropagation: o = false, dragConstraints: a = false, dragElastic: s = zn, dragMomentum: r = true } = e;
    return { ...e, drag: n, dragDirectionLock: i, dragPropagation: o, dragConstraints: a, dragElastic: s, dragMomentum: r };
  }
}
function He(t, e, n) {
  return (e === true || e === t) && (n === null || n === t);
}
function Sp(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Pp extends Vt {
  constructor(e) {
    super(e), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new Tp(e.visualElement);
  }
  mount() {
    const { dragControls: e } = this.state.options;
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
class Ap extends Vt {
  constructor(e) {
    super(e), ks(Qa);
  }
  beforeUpdate() {
    this.state.willUpdate("beforeUpdate");
  }
  update() {
    this.didUpdate();
  }
  didUpdate() {
    var e, n;
    (this.state.options.layout || this.state.options.layoutId || this.state.options.drag) && ((n = (e = this.state.visualElement.projection) == null ? void 0 : e.root) == null || n.didUpdate());
  }
  mount() {
    var e;
    const n = this.state.options, i = this.state.options.layoutGroup;
    if (n.layout || n.layoutId) {
      const o = this.state.visualElement.projection;
      o && (o.promote(), (e = i == null ? void 0 : i.group) == null || e.add(o)), qe.hasEverUpdated = true;
    }
    this.didUpdate();
  }
  beforeUnmount() {
    const e = this.state.visualElement.projection;
    e && (this.state.willUpdate("beforeUnmount"), this.state.options.layoutId ? (e.isPresent = false, e.relegate()) : this.state.options.layout && (this.state.isSafeToRemove = true));
  }
  unmount() {
    const e = this.state.options.layoutGroup, n = this.state.visualElement.projection;
    n && ((e == null ? void 0 : e.group) && (this.state.options.layout || this.state.options.layoutId) && e.group.remove(n), this.didUpdate());
  }
}
function rs(t) {
  return (e, n) => {
    t && j.postRender(() => t(e, n));
  };
}
class _p extends Vt {
  constructor() {
    super(...arguments), this.removePointerDownListener = ut;
  }
  onPointerDown(e) {
    this.session = new nr(e, this.createPanHandlers(), { transformPagePoint: this.state.visualElement.getTransformPagePoint(), contextWindow: sr(this.state.visualElement) });
  }
  createPanHandlers() {
    return { onSessionStart: rs((e, n) => {
      const { onPanSessionStart: i } = this.state.options;
      i && i(e, n);
    }), onStart: rs((e, n) => {
      const { onPanStart: i } = this.state.options;
      i && i(e, n);
    }), onMove: (e, n) => {
      const { onPan: i } = this.state.options;
      i && i(e, n);
    }, onEnd: (e, n) => {
      const { onPanEnd: i } = this.state.options;
      delete this.session, i && j.postRender(() => i(e, n));
    } };
  }
  mount() {
    this.removePointerDownListener = be(this.state.element, "pointerdown", this.onPointerDown.bind(this));
  }
  update() {
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Mp = [Qf, rh, uh, fh, ph, ip, _p, Pp, Ap], Cp = { reducedMotion: "never", transition: void 0, nonce: void 0 }, [Ep, Lm] = Me("MotionConfig");
function kp() {
  return Ep(F(() => Cp));
}
function sn(t) {
  return (t == null ? void 0 : t.nodeType) === 3 || (t == null ? void 0 : t.nodeType) === 8 ? sn(t.nextSibling) : t;
}
const [Dp, Om] = Me("LazyMotionContext");
function Vp(t) {
  const e = Eu(null), n = Du({}), i = kp(), o = Iu({}), a = Dp({ features: V([]), strict: false }), s = $r();
  function r() {
    return n.id && t.layoutId ? `${n.id}-${t.layoutId}` : t.layoutId || void 0;
  }
  function l() {
    return { ...t, lazyMotionContext: a, layoutId: r(), transition: t.transition ?? i.value.transition, layoutGroup: n, motionConfig: i.value, inViewOptions: t.inViewOptions ?? i.value.inViewOptions, animatePresenceContext: o, initial: o.initial === false ? o.initial : t.initial === true ? void 0 : t.initial };
  }
  function c() {
    return { ...s, ...l() };
  }
  const u = new Hu(c(), e);
  ku(u);
  function d() {
    var p;
    const m = u.type === "svg", g = { ...s };
    Object.keys(s).forEach((y) => {
      Q(s[y]) && (g[y] = s[y].get());
    });
    let w = { ...t.style, ...m ? {} : ((p = u.visualElement) == null ? void 0 : p.latestValues) || u.baseTarget };
    if (m) {
      const { attrs: y, style: v } = ac({ ...u.isMounted() ? u.target : u.baseTarget, ...w });
      (v.transform || y.transformOrigin) && (v.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), v.transform && (v.transformBox = v.transformBox ?? "fill-box", delete y.transformBox), Object.assign(g, y), w = v;
    }
    t.drag && t.dragListener !== false && Object.assign(w, { userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none", touchAction: t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}` });
    const P = nc(w);
    return P && (g.style = P), g;
  }
  const f = ps().proxy;
  return Br(() => {
    u.beforeMount();
  }), oe(() => {
    u.mount(sn(f.$el), c(), Lp(f));
  }), vs(() => u.beforeUnmount()), gs(() => {
    const p = sn(f.$el);
    (p == null ? void 0 : p.isConnected) || u.unmount();
  }), Fr(() => {
    u.beforeUpdate();
  }), Ir(() => {
    u.update(c());
  }), { getProps: l, getAttrs: d, layoutGroup: n, state: u };
}
const Rp = { ignoreStrict: { type: Boolean }, forwardMotionProps: { type: Boolean, default: false }, asChild: { type: Boolean, default: false }, hover: { type: [String, Array, Object] }, press: { type: [String, Array, Object] }, inView: { type: [String, Array, Object] }, focus: { type: [String, Array, Object] }, whileDrag: { type: [String, Array, Object] }, whileHover: { type: [String, Array, Object], default: ({ hover: t }) => t }, whilePress: { type: [String, Array, Object], default: ({ press: t }) => t }, whileInView: { type: [String, Array, Object], default: ({ inView: t }) => t }, whileFocus: { type: [String, Array, Object], default: ({ focus: t }) => t }, custom: { type: [String, Number, Object, Array] }, initial: { type: [String, Array, Object, Boolean], default: void 0 }, animate: { type: [String, Array, Object], default: void 0 }, exit: { type: [String, Array, Object] }, variants: { type: Object }, inherit: { type: Boolean }, style: { type: Object }, transformTemplate: { type: Function }, transition: { type: Object }, layoutGroup: { type: Object }, motionConfig: { type: Object }, onAnimationComplete: { type: Function }, onUpdate: { type: Function }, layout: { type: [Boolean, String], default: false }, layoutId: { type: String, default: void 0 }, layoutScroll: { type: Boolean, default: false }, layoutRoot: { type: Boolean, default: false }, "data-framer-portal-id": { type: String }, crossfade: { type: Boolean, default: true }, layoutDependency: { type: [String, Number, Object, Array] }, onBeforeLayoutMeasure: { type: Function }, onLayoutMeasure: { type: Function }, onLayoutAnimationStart: { type: Function }, onLayoutAnimationComplete: { type: Function }, globalPressTarget: { type: Boolean }, onPressStart: { type: Function }, onPress: { type: Function }, onPressCancel: { type: Function }, onHoverStart: { type: Function }, onHoverEnd: { type: Function }, inViewOptions: { type: Object }, onViewportEnter: { type: Function }, onViewportLeave: { type: Function }, drag: { type: [Boolean, String] }, dragSnapToOrigin: { type: Boolean }, dragDirectionLock: { type: Boolean }, dragPropagation: { type: Boolean }, dragConstraints: { type: [Boolean, Object] }, dragElastic: { type: [Boolean, Number, Object], default: 0.5 }, dragMomentum: { type: Boolean, default: true }, dragTransition: { type: Object }, dragListener: { type: Boolean, default: true }, dragControls: { type: Object }, onDragStart: { type: Function }, onDragEnd: { type: Function }, onDrag: { type: Function }, onDirectionLock: { type: Function }, onDragTransitionEnd: { type: Function }, onMeasureDragConstraints: { type: Function }, onPanSessionStart: { type: Function }, onPanStart: { type: Function }, onPan: { type: Function }, onPanEnd: { type: Function } };
function Lp(t) {
  var e;
  const n = ((e = sn(t.$el)) == null ? void 0 : e.style.display) === "none";
  return t.$.vnode.transition && n;
}
const Op = /* @__PURE__ */ new Map(), $p = /* @__PURE__ */ new Map();
function Bp(t) {
  if (!Array.isArray(t)) return [t];
  const e = [];
  for (const n of t) Array.isArray(n) ? e.push(...n) : e.push(n);
  return e;
}
const Fp = ["area", "img", "input"];
function Ip(t, e, n) {
  var i, o;
  if (typeof t == "string" && Fp.includes(t)) return Ye(t, e);
  if (t === "template") {
    if (!n.default) return null;
    const a = Bp(n.default()), s = a.findIndex((u) => u.type !== jr);
    if (s === -1) return a;
    const r = a[s];
    (i = r.props) == null || delete i.ref;
    const l = r.props ? Dt(e, r.props) : e;
    e.class && ((o = r.props) != null && o.class) && delete r.props.class;
    const c = Nr(r, l);
    for (const u in l) u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = l[u]);
    return a.length === 1 ? c : (a[s] = c, a);
  }
  return null;
}
function ls(t, e = {}) {
  var n;
  const i = typeof t == "string", o = i ? t : t.name || "", a = ((n = e.features) == null ? void 0 : n.length) > 0 ? Op : $p;
  if (i && (a == null ? void 0 : a.has(t))) return a.get(t);
  const s = H({ inheritAttrs: false, props: { ...Rp, features: { type: Object, default: () => e.features || [] }, as: { type: [String, Object], default: t || "div" } }, name: o ? `motion.${o}` : "Motion", setup(r, { slots: l }) {
    const { getProps: c, getAttrs: u, state: d } = Vp(r);
    function f() {
      const p = d.element;
      if ((!(typeof r.as == "object") || r.asChild) && p) {
        const { style: g } = u();
        if (g) for (const [w, P] of Object.entries(g)) p.style[w] = P;
      }
    }
    return () => {
      const p = c(), m = u(), g = r.asChild ? "template" : r.as, w = { ...e.forwardMotionProps || r.forwardMotionProps ? p : {}, ...m, onVnodeUpdated: f }, P = Ip(g, w, l);
      return P !== null ? P : Ye(g, { ...w }, l);
    };
  } });
  return i && (a == null ? void 0 : a.set(t, s)), s;
}
function jp(t = []) {
  return new Proxy({}, { get(e, n) {
    return n === "create" ? (i, o) => ls(i, { ...o, features: t }) : ls(n, { features: t });
  } });
}
const Np = jp(Mp), Up = Np.create("div"), zp = { "text-neutral": "", truncate: "" }, Hp = H({ __name: "Header", props: { darkHeader: { type: Boolean } }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => _e()), e = await e, n(), e), { isMobileOrTablet: o } = sl(), { smaller: a } = tl(el), s = F(() => o || a("lg").value), { y: r } = nl(window), l = F(() => r.value > 0), c = V();
  Pt(r, (p, m) => {
    Math.abs(p - m) < 10 || (c.value = p < m ? "top" : "bottom");
  });
  const u = F(() => ({ opacity: l.value && c.value === "bottom" ? 0 : 1, backgroundColor: l.value && c.value === "top" ? "white" : "transparent", boxShadow: l.value && c.value === "top" ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "0 0 0 0 transparent" })), d = F(() => ({ "pointer-events-none": l.value && c.value === "bottom" })), f = F(() => ({ default: { type: "tween", ease: "easeInOut" }, opacity: { duration: 0.4, ease: "easeInOut" }, backgroundColor: { duration: 0.3, ease: "easeInOut", delay: c.value === "bottom" ? 0.15 : 0 }, boxShadow: { duration: 0.1, ease: "easeOut", delay: r.value === 0 && c.value === "top" ? 0.4 : 0 } }));
  return (p, m) => {
    const g = an, w = lu, P = _u;
    return _(), O(h(Up), { as: "header", flex: "~ items-center justify-between gap-x-20", "mx-16": "", "mb-32": "", "mt-16": "", "p-16": "", "rounded-8": "", "inset-x-16": "", "top-16": "", fixed: "", sticky: "", "z-100": "", class: Mt({ dark: !h(l) && p.darkHeader, ...h(d) }), animate: h(u), transition: h(f), "data-scrolled": h(l) ? "true" : "false" }, { default: A(() => [C(g, { to: "/", "aria-label": "Nimiq homepage" }, { default: A(() => m[0] || (m[0] = [E("div", { class: "dark:i-nimiq:logos-nimiq-white-horizontal", "text-24": "", "i-nimiq:logos-nimiq-horizontal": "" }, null, -1)])), _: 1, __: [0] }), h(i).hotCtaLink ? (_(), O(g, { key: 0, to: h(i).hotCtaLink, bg: "neutral/15 hocus:neutral/20", class: Mt({ "children:delay-200": h(c) === "bottom" }), external: "", "text-neutral": "", "mr-auto": "", "gap-x-9": "", truncate: "", "nq-pill": "", "children:transition-colors": "" }, { default: A(() => [m[1] || (m[1] = E("div", { "shrink-0": "", "i-nimiq:flame": "" }, null, -1)), E("span", zp, U(h(i).hottext), 1)]), _: 1, __: [1] }, 8, ["to", "class"])) : I("", true), h(s) ? (_(), O(w, { key: 1 })) : (_(), O(P, { key: 2 }))]), _: 1 }, 8, ["class", "animate", "transition", "data-scrolled"]);
  };
} }), Wp = Object.assign(Hp, { __name: "NavigationHeader" }), Kp = ["data-social"], Gp = { key: 0, "i-nimiq:logos-youtube-mono": "", text: "53 white" }, qp = { key: 1, "i-nimiq:logos-twitter-mono": "", text: "64 white" }, Xp = { key: 2, "i-nimiq:logos-facebook-mono": "", text: "62 white" }, Yp = H({ __name: "HexagonsBackground", props: { bgColor: {}, withSocials: { type: Boolean, default: false } }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Kn()), e = await e, n(), e), o = xs(() => t.bgColor), a = F(() => 5), { width: s } = il(), r = V(0), l = V(12), c = F(() => l.value * 8.75), u = An(false), d = Ur("section");
  ol(d, ([w]) => {
    u.value = (w == null ? void 0 : w.isIntersecting) || false;
  }, { threshold: 0.2, rootMargin: "100px" });
  function f(w, P) {
    const y = w / (a.value - 1), v = P / (r.value - 1), x = Math.abs(y + v - 1), b = 0.8;
    return x > b ? 0 : 1 - x / b;
  }
  const p = { youtube: [2, 6], x: [3, 7], facebook: [1, 9] }, m = Object.keys(p), g = V([]);
  return oe(() => {
    const w = [];
    r.value = Math.floor(s.value / c.value) + 4 & -2;
    for (let P = 0; P < a.value; P++) {
      const v = P % 2 === 0 ? 0 : 1;
      for (let x = v; x < r.value; x += 2) {
        const b = f(P, x);
        let S;
        t.withSocials && (S = m.find((T) => p[T][0] === P && p[T][1] === x)), w.push({ rowIndex: P, colIndex: x, opacity: b, social: S });
      }
    }
    g.value = w;
  }), (w, P) => {
    const y = an;
    return _(), L("section", { ref: "section", class: Mt(h(o)), group: "", "mx-0": "", "px-0": "", "w-full": "", relative: "", "z-2": "", "of-x-hidden": "", "f-pt-2xl": "" }, [E("div", { "aria-hidden": "true", class: "grid-parent", "max-w-none": "", style: Ze(`--rows:${h(a)}; --cols:${h(r)}; --gap:${h(l)}px;--hexagon-w: ${h(c)}px;`) }, [(_(true), L(st, null, ht(h(g), (v) => (_(), L("div", { key: `${v.rowIndex}-${v.colIndex}`, style: Ze({ "--row": v.rowIndex, "--col": v.colIndex, opacity: v.opacity && !v.social ? v.opacity : 1 }), "i-nimiq:logos-nimiq-mono": "", transition: "opacity duration-300 ease-out", class: Mt({ "text-[red]": v.social === "youtube" && h(u), "text-black": v.social === "x" && h(u), "text-[#1877f2]": v.social === "facebook" && h(u), "text-neutral-300 dark:text-neutral-500 hocus:dark:text-neutral-700 hocus:text-neutral-500": !v.social, "opacity-0": v.social && !h(u), "opacity-100": v.social && h(u) }), "data-social": v.social }, [v.social && h(u) ? (_(), O(y, { key: 0, external: "", flex: "~ justify-center items-center", target: "_blank", "size-full": "", to: ("getLink" in w ? w.getLink : h(bs))(h(i)[v.social].link), transition: "opacity duration-300 ease-out", "aria-label": `Visit Nimiq on ${v.social === "x" ? "Twitter" : v.social}` }, { default: A(() => [v.social === "youtube" ? (_(), L("div", Gp)) : I("", true), v.social === "x" ? (_(), L("div", qp)) : I("", true), v.social === "facebook" ? (_(), L("div", Xp)) : I("", true)]), _: 2 }, 1032, ["to", "aria-label"])) : I("", true)], 14, Kp))), 128))], 4)], 2);
  };
} }), Zp = Object.assign(Gn(Yp, [["__scopeId", "data-v-8cbf4473"]]), { __name: "HexagonsBackground" }), Jp = { grid: "~ gap-40 md:gap-48 items-start xl:gap-104" }, Qp = { flex: "~ col", "f-text-sm": "", "area-contact": "" }, tm = { key: 0 }, em = { key: 1, "f-mt-xs": "" }, nm = { text: "f-sm neutral-700", "self-end": "", "area-meta": "" }, im = { key: 0, "f-mt-xs": "" }, om = { text: "neutral-800 hocus:neutral-900", "transition-colors": "", "f-mt-xs": "", flex: "~ gap-16 items-center wrap" }, sm = { "text-neutral-600": "", "f-mt-md": "" }, am = { text: "f-xs neutral-700/80", "w-full": "", "nq-label": "" }, rm = ["aria-label"], lm = H({ __name: "Footer", props: { bgColor: {} }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => _e()), e = await e, n(), e), o = xs(t.bgColor);
  return (a, s) => {
    var _a2, _b, _c2, _d2;
    const r = rl, l = Yn, c = an, u = Pe;
    return _(), L("footer", { class: Mt(h(o)), "data-section": "", "z-10": "", "f-pt-2xl": "" }, [E("div", Jp, [E("div", Qp, [((_a2 = h(i)) == null ? void 0 : _a2.newsletterCta) ? (_(), L("p", tm, U(h(i).newsletterCta), 1)) : I("", true), C(r, { "f-mt-xs": "", placeholder: (_b = h(i)) == null ? void 0 : _b.newsletterPlaceholder }, null, 8, ["placeholder"]), ((_c2 = h(i)) == null ? void 0 : _c2.socialMediaCta) ? (_(), L("p", em, U(h(i).socialMediaCta), 1)) : I("", true), C(l, { "mx--8": "", "op-60": "", "f-text-xl": "", items: [("SocialMedia" in a ? a.SocialMedia : h(B)).x, ("SocialMedia" in a ? a.SocialMedia : h(B)).telegram, ("SocialMedia" in a ? a.SocialMedia : h(B)).reddit, ("SocialMedia" in a ? a.SocialMedia : h(B)).github, ("SocialMedia" in a ? a.SocialMedia : h(B)).youtube, ("SocialMedia" in a ? a.SocialMedia : h(B)).discord, ("SocialMedia" in a ? a.SocialMedia : h(B)).nimiqForum, ("SocialMedia" in a ? a.SocialMedia : h(B)).facebook, ("SocialMedia" in a ? a.SocialMedia : h(B)).instagram] }, null, 8, ["items"])]), E("div", nm, [C(c, { to: "/", group: "", flex: "", "w-max": "", "aria-label": "Go to Homepage" }, { default: A(() => s[0] || (s[0] = [E("div", { "h-20": "!", "w-84": "!", "op-80": "", "i-nimiq:logos-nimiq-horizontal-mono": "", "group-hocus:i-nimiq:logos-nimiq-horizontal": "" }, null, -1)])), _: 1, __: [0] }), ((_d2 = h(i)) == null ? void 0 : _d2.nimiqShortDescription) ? (_(), L("p", im, U(h(i).nimiqShortDescription), 1)) : I("", true), E("div", om, [C(c, { to: "/privacy-policy", "font-semibold": "", "un-text": "neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: A(() => s[1] || (s[1] = [rt(" Privacy Policy ")])), _: 1, __: [1] }), s[3] || (s[3] = E("div", { "aria-hidden": "", "rounded-full": "", "bg-current": "", "op-40": "", "size-4": "" }, null, -1)), C(c, { to: "/cookie-policy", "font-semibold": "", "un-text": "neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: A(() => s[2] || (s[2] = [rt(" Cookie Policy ")])), _: 1, __: [2] })]), E("p", sm, U(h(i).copyrightNotice), 1)]), (_(true), L(st, null, ht(h(i).blocks, ({ areaName: d, label: f, links: p }) => (_(), L("div", { key: d, style: Ze(`grid-area ${d}`) }, [E("p", am, U(f), 1), E("ul", { "f-mt-md": "", "aria-label": `${f} links`, role: "list" }, [(_(true), L(st, null, ht(p, ({ href: m, label: g }, w) => (_(), L("li", { key: w, "f-mt-xs": "" }, [C(u, { field: m, "font-semibold": "", "un-text": "f-sm neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: A(() => [rt(U(g), 1)]), _: 2 }, 1032, ["field"])]))), 128))], 8, rm)], 4))), 128)), s[4] || (s[4] = E("hr", { "bg-neutral-400": "", "h-1": "", "w-full": "", relative: "", "sr-only": "", "area-hr-1": "" }, null, -1)), s[5] || (s[5] = E("hr", { "bg-neutral-400": "", "h-1": "", "w-full": "", relative: "", "sr-only": "", "area-hr-2": "", "lg:hidden": "" }, null, -1)), s[6] || (s[6] = E("hr", { "bg-neutral-400": "", "h-1": "", "w-full": "", relative: "", "sr-only": "", "area-hr-3": "", "md:hidden": "" }, null, -1))])], 2);
  };
} }), um = Object.assign(Gn(lm, [["__scopeId", "data-v-d99337dd"]]), { __name: "NavigationFooter" }), cm = zr(_l), dm = { "bottom-20": "", "right-20": "", fixed: "", "z-102": "" }, $m = H({ __name: "default", props: { darkHeader: { type: Boolean, default: false }, footerBgColor: { default: "grey" }, draft: { type: Boolean }, showSocialsHexagonBg: { type: Boolean } }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => _e()), e = await e, n(), e);
  return (o, a) => {
    const s = cm, r = kl, l = Wp, c = al, u = Zp, d = um;
    return _(), L(st, null, [C(s), h(i).announcementBannerShow ? (_(), O(r, us(Dt({ key: 0 }, h(i))), null, 16)) : I("", true), C(l, { "dark-header": o.darkHeader }, null, 8, ["dark-header"]), ct(o.$slots, "default"), E("div", dm, [C(c, { draft: o.draft, "with-env": "" }, null, 8, ["draft"])]), C(u, { "z-1": "", "bg-color": o.footerBgColor, "with-socials": o.showSocialsHexagonBg }, null, 8, ["bg-color", "with-socials"]), C(d, { "bg-color": o.footerBgColor }, null, 8, ["bg-color"])], 64);
  };
} });
export {
  $m as default
};
