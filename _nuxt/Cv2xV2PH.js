import { L as fr, M as hr, N as pr, O as Ci, P as mr, d as H, b as O, o as A, w as _, Q as ct, m as Dt, u as h, R as us, S as vr, B as V, T as cs, j as I, U as ie, a as C, V as gr, W as ds, f as j, E as oe, c as R, F as at, X as _t, H as Xe, e as k, t as F, Y as Pe, g as nt, v as $t, r as ht, n as Tt, Z as yr, h as Ye, $ as br, a0 as fs, a1 as hs, a2 as ps, G as ms, s as wr, z as xr, _ as an, i as Un, p as Tr, D as Sr, a3 as Pr, a4 as _r, a5 as Ar, a6 as Mr, a7 as Cr, a8 as kr, a9 as Er, aa as Dr, ab as Vr, ac as Lr } from "./gdLxT4Lf.js";
import { a as Rr, b as vs } from "./D7zdd4-D.js";
import { u as zn, S as B } from "./BQZN2xSV.js";
import { P as Mt, u as At, a as Or, r as gs, c as Hn, b as ys, d as $r, e as Br, f as Wn, i as ki, g as Ze, h as Fr } from "./BI3535uL.js";
import { _ as Ir, a as jr, b as Nr, c as Ur, d as zr } from "./DzxZsifD.js";
import { u as bs, _ as Hr, a as Wr, b as Kr, c as Gr } from "./BBT8-0pw.js";
import { _ as qr } from "./CGZYdvc8.js";
import { u as _e, _ as Xr } from "./CQe4QTkE.js";
import { u as Yr } from "./BgZlBkZ2.js";
import { g as te, _ as Zr } from "./ViQ2U2w0.js";
import { u as Jr } from "./De1jwUL-.js";
import { b as Qr, d as tl, e as el, f as nl } from "./eRMYwULF.js";
import { u as il } from "./Das-W0SA.js";
import { _ as ol } from "./CLg1Ps0o.js";
import { g as ws } from "./DzQE7UG-.js";
import { _ as sl } from "./DnoBqyUI.js";
import "./B8QP58w5.js";
import "./CHIgUVhi.js";
import "./DYDUvkDP.js";
import "./DMT-qPN2.js";
function al(t = {}) {
  var _a2;
  const e = Ci(""), n = Ci(t.politeness || "polite"), i = mr();
  function o(u = "", c = "polite") {
    e.value = u, n.value = c;
  }
  function a(u) {
    return o(u, "polite");
  }
  function s(u) {
    return o(u, "assertive");
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
function rl(t = {}) {
  const e = fr(), n = e._routeAnnouncer || (e._routeAnnouncer = al(t));
  return t.politeness !== n.politeness.value && (n.politeness.value = t.politeness || "polite"), hr() && (e._routeAnnouncerDeps || (e._routeAnnouncerDeps = 0), e._routeAnnouncerDeps++, pr(() => {
    e._routeAnnouncerDeps--, e._routeAnnouncerDeps === 0 && (n._cleanup(), delete e._routeAnnouncer);
  })), n;
}
const ll = H({ __name: "MenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t;
  return (n, i) => (A(), O(h(Mt), Dt(e, { role: "separator", "aria-orientation": "horizontal" }), { default: _(() => [ct(n.$slots, "default")]), _: 3 }, 16));
} }), ul = H({ __name: "DropdownMenuSeparator", props: { asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t;
  return At(), (n, i) => (A(), O(h(ll), us(vr(e)), { default: _(() => [ct(n.$slots, "default")]), _: 3 }, 16));
} });
function rn(t) {
  return t ? "open" : "closed";
}
function xs(t, e) {
  return `${t}-trigger-${e}`;
}
function Kn(t, e) {
  return `${t}-content-${e}`;
}
const cl = "navigationMenu.linkSelect", We = "navigationMenu.rootContentDismiss";
function Pn(t) {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (i) => {
    const o = i.tagName === "INPUT" && i.type === "hidden";
    return i.disabled || i.hidden || o ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) e.push(n.currentNode);
  return e;
}
function Ts(t) {
  const e = te();
  return t.some((n) => n === e ? true : (n.focus(), te() !== e));
}
function dl(t) {
  return t.forEach((e) => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
  }), () => {
    t.forEach((e) => {
      const n = e.dataset.tabindex;
      e.setAttribute("tabindex", n);
    });
  };
}
function Ss(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
const [Gt, fl] = Hn(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), hl = H({ __name: "NavigationMenuRoot", props: { modelValue: { default: void 0 }, defaultValue: {}, dir: {}, orientation: { default: "horizontal" }, delayDuration: { default: 200 }, skipDelayDuration: { default: 300 }, disableClickTrigger: { type: Boolean, default: false }, disableHoverTrigger: { type: Boolean, default: false }, disablePointerLeaveClose: { type: Boolean }, unmountOnHide: { type: Boolean, default: true }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:modelValue"], setup(t, { emit: e }) {
  const n = t, o = Or(n, "modelValue", e, { defaultValue: n.defaultValue ?? "", passive: n.modelValue === void 0 }), a = V(""), { forwardRef: s, currentElement: r } = At(), l = V(), u = V(), c = V(), { getItems: d, CollectionSlot: f } = _e({ key: "NavigationMenu", isProvider: true }), { delayDuration: p, skipDelayDuration: m, dir: v, disableClickTrigger: w, disableHoverTrigger: x, unmountOnHide: y } = cs(n), g = Yr(v), S = gs(false, m), b = I(() => o.value !== "" || S.value ? 150 : p.value), T = $r((P) => {
    typeof P == "string" && (a.value = o.value, o.value = P);
  }, b);
  return ie(() => {
    if (!o.value) return;
    const P = d().map((M) => M.ref);
    c.value = P.find((M) => M.id.includes(o.value));
  }), fl({ isRootMenu: true, modelValue: o, previousValue: a, baseId: ys(void 0, "reka-navigation-menu"), disableClickTrigger: w, disableHoverTrigger: x, dir: g, unmountOnHide: y, orientation: n.orientation, rootNavigationMenu: r, indicatorTrack: l, activeTrigger: c, onIndicatorTrackChange: (P) => {
    l.value = P;
  }, viewport: u, onViewportChange: (P) => {
    u.value = P;
  }, onTriggerEnter: (P) => {
    T(P);
  }, onTriggerLeave: () => {
    S.value = true, T("");
  }, onContentEnter: () => {
    T();
  }, onContentLeave: () => {
    n.disablePointerLeaveClose || T("");
  }, onItemSelect: (P) => {
    a.value = o.value, o.value = P;
  }, onItemDismiss: () => {
    a.value = o.value, o.value = "";
  } }), (P, M) => (A(), O(h(f), null, { default: _(() => [C(h(Mt), { ref: h(s), "aria-label": "Main", as: P.as, "as-child": P.asChild, "data-orientation": P.orientation, dir: h(g), "data-reka-navigation-menu": "" }, { default: _(() => [ct(P.$slots, "default", { modelValue: h(o) })]), _: 3 }, 8, ["as", "as-child", "data-orientation", "dir"])]), _: 3 }));
} }), [Gn, pl] = Hn("NavigationMenuItem"), ml = H({ __name: "NavigationMenuItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "li" } }, setup(t) {
  const e = t;
  At();
  const { getItems: n } = _e({ key: "NavigationMenu" }), i = Gt(), o = ys(e.value), a = V(), s = V(), r = Kn(i.baseId, o);
  let l = () => ({});
  const u = V(false);
  async function c(m = "start") {
    const v = document.getElementById(r);
    if (v) {
      l();
      const w = Pn(v);
      w.length && Ts(m === "start" ? w : w.reverse());
    }
  }
  function d() {
    const m = document.getElementById(r);
    if (m) {
      const v = Pn(m);
      v.length && (l = dl(v));
    }
  }
  pl({ value: o, contentId: r, triggerRef: a, focusProxyRef: s, wasEscapeCloseRef: u, onEntryKeyDown: c, onFocusProxyEnter: c, onContentFocusOutside: d, onRootContentClose: d });
  function f() {
    var _a2;
    i.onItemDismiss(), (_a2 = a.value) == null ? void 0 : _a2.focus();
  }
  function p(m) {
    const v = te();
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
    if (!w.includes(v)) return;
    const x = bs(m, v, void 0, { itemsArray: w, loop: false });
    x && (x == null ? void 0 : x.focus()), m.preventDefault(), m.stopPropagation();
  }
  return (m, v) => (A(), O(h(Mt), { "as-child": m.asChild, as: m.as, "data-menu-item": "", onKeydown: gr(p, ["up", "down", "left", "right", "home", "end", "space"]) }, { default: _(() => [ct(m.$slots, "default")]), _: 3 }, 8, ["as-child", "as"]));
} }), vl = H({ __name: "NavigationMenuContentImpl", props: { disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t, { emit: e }) {
  const n = t, i = e, { getItems: o } = _e({ key: "NavigationMenu" }), { forwardRef: a, currentElement: s } = At(), r = Gt(), l = Gn(), u = xs(r.baseId, l.value), c = Kn(r.baseId, l.value), d = V(null), f = I(() => {
    const y = o().map((M) => M.ref.id.split("trigger-")[1]);
    r.dir.value === "rtl" && y.reverse();
    const g = y.indexOf(r.modelValue.value), S = y.indexOf(r.previousValue.value), b = l.value === r.modelValue.value, T = S === y.indexOf(l.value);
    if (!b && !T) return d.value;
    const P = (() => {
      if (g !== S) {
        if (b && S !== -1) return g > S ? "from-end" : "from-start";
        if (T && g !== -1) return g > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return d.value = P, P;
  });
  function p(y) {
    var _a2, _b;
    if (i("focusOutside", y), i("interactOutside", y), y.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && y.preventDefault(), !y.defaultPrevented) {
      l.onContentFocusOutside();
      const S = y.target;
      ((_b = (_a2 = r.rootNavigationMenu) == null ? void 0 : _a2.value) == null ? void 0 : _b.contains(S)) && y.preventDefault();
    }
  }
  function m(y) {
    var _a2;
    if (i("pointerDownOutside", y), !y.defaultPrevented) {
      const g = y.target, S = o().some((T) => T.ref.contains(g)), b = r.isRootMenu && ((_a2 = r.viewport.value) == null ? void 0 : _a2.contains(g));
      (S || b || !r.isRootMenu) && y.preventDefault();
    }
  }
  ie((y) => {
    const g = s.value;
    if (r.isRootMenu && g) {
      const S = () => {
        var _a2;
        r.onItemDismiss(), l.onRootContentClose(), g.contains(te()) && ((_a2 = l.triggerRef.value) == null ? void 0 : _a2.focus());
      };
      g.addEventListener(We, S), y(() => g.removeEventListener(We, S));
    }
  });
  function v(y) {
    var _a2, _b;
    i("escapeKeyDown", y), y.defaultPrevented || (r.onItemDismiss(), (_b = (_a2 = l.triggerRef) == null ? void 0 : _a2.value) == null ? void 0 : _b.focus(), l.wasEscapeCloseRef.value = true);
  }
  function w(y) {
    var _a2, _b;
    if (y.target.closest("[data-reka-navigation-menu]") !== r.rootNavigationMenu.value) return;
    const g = y.altKey || y.ctrlKey || y.metaKey, S = y.key === "Tab" && !g, b = Pn(y.currentTarget);
    if (S) {
      const P = te(), M = b.findIndex((tt) => tt === P), G = y.shiftKey ? b.slice(0, M).reverse() : b.slice(M + 1, b.length);
      if (Ts(G)) y.preventDefault();
      else {
        (_a2 = l.focusProxyRef.value) == null ? void 0 : _a2.focus();
        return;
      }
    }
    (_b = bs(y, te(), void 0, { itemsArray: b, loop: false, enableIgnoredElement: true })) == null ? void 0 : _b.focus();
  }
  function x() {
    var _a2;
    const y = new Event(We, { bubbles: true, cancelable: true });
    (_a2 = s.value) == null ? void 0 : _a2.dispatchEvent(y);
  }
  return (y, g) => (A(), O(h(Zr), Dt({ id: h(c), ref: h(a), "aria-labelledby": h(u), "data-motion": f.value, "data-state": h(rn)(h(r).modelValue.value === h(l).value), "data-orientation": h(r).orientation }, n, { onKeydown: w, onEscapeKeyDown: v, onPointerDownOutside: m, onFocusOutside: p, onDismiss: x }), { default: _(() => [ct(y.$slots, "default")]), _: 3 }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
} }), gl = H({ inheritAttrs: false, __name: "NavigationMenuContent", props: { forceMount: { type: Boolean }, disableOutsidePointerEvents: { type: Boolean }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"], setup(t, { emit: e }) {
  const n = t, i = e, o = Jr(Br(n, "forceMount"), i), { forwardRef: a } = At(), s = Gt(), r = Gn(), l = I(() => r.value === s.modelValue.value), u = I(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === r.value : false);
  return (c, d) => (A(), O(ds, { to: h(ki) && h(s).viewport.value ? h(s).viewport.value : "body", disabled: h(ki) && h(s).viewport.value ? !h(s).viewport.value : true }, [C(h(Wn), { present: c.forceMount || l.value || u.value, "force-mount": !h(s).unmountOnHide.value }, { default: _(({ present: f }) => [C(vl, Dt({ ref: h(a), "data-state": h(rn)(l.value), style: { pointerEvents: !l.value && h(s).isRootMenu ? "none" : void 0 } }, { ...c.$attrs, ...h(o) }, { hidden: !f, onPointerenter: d[0] || (d[0] = (p) => h(s).onContentEnter(h(r).value)), onPointerleave: d[1] || (d[1] = (p) => h(Ss)(() => h(s).onContentLeave())(p)), onPointerDownOutside: d[2] || (d[2] = (p) => i("pointerDownOutside", p)), onFocusOutside: d[3] || (d[3] = (p) => i("focusOutside", p)), onInteractOutside: d[4] || (d[4] = (p) => i("interactOutside", p)) }), { default: _(() => [ct(c.$slots, "default")]), _: 2 }, 1040, ["data-state", "style", "hidden"])]), _: 3 }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]));
} }), yl = H({ inheritAttrs: false, __name: "NavigationMenuIndicator", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t, { forwardRef: n } = At(), i = Gt(), o = V(), a = I(() => i.orientation === "horizontal"), s = I(() => !!i.modelValue.value), { activeTrigger: r } = i;
  function l() {
    r.value && (o.value = { size: a.value ? r.value.offsetWidth : r.value.offsetHeight, position: a.value ? r.value.offsetLeft : r.value.offsetTop });
  }
  return ie(() => {
    i.modelValue.value && l();
  }), Ze(r, l), Ze(i.indicatorTrack, l), (u, c) => h(i).indicatorTrack.value ? (A(), O(ds, { key: 0, to: h(i).indicatorTrack.value }, [C(h(Wn), { present: u.forceMount || s.value }, { default: _(() => [C(h(Mt), Dt({ ref: h(n), "aria-hidden": "true", "data-state": s.value ? "visible" : "hidden", "data-orientation": h(i).orientation, "as-child": e.asChild, as: u.as, style: { ...o.value ? { "--reka-navigation-menu-indicator-size": `${o.value.size}px`, "--reka-navigation-menu-indicator-position": `${o.value.position}px` } : {} } }, u.$attrs), { default: _(() => [ct(u.$slots, "default")]), _: 3 }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])]), _: 3 }, 8, ["present"])], 8, ["to"])) : j("", true);
} }), bl = H({ __name: "NavigationMenuLink", props: { active: { type: Boolean }, asChild: { type: Boolean }, as: { default: "a" } }, emits: ["select"], setup(t, { emit: e }) {
  const n = t, i = e, { CollectionItem: o } = _e({ key: "NavigationMenu" });
  At();
  async function a(s) {
    var _a2;
    const r = new CustomEvent(cl, { bubbles: true, cancelable: true, detail: { originalEvent: s } });
    if (i("select", r), !r.defaultPrevented && !s.metaKey) {
      const l = new CustomEvent(We, { bubbles: true, cancelable: true });
      (_a2 = s.target) == null ? void 0 : _a2.dispatchEvent(l);
    }
  }
  return (s, r) => (A(), O(h(o), null, { default: _(() => [C(h(Mt), { as: s.as, "data-active": s.active ? "" : void 0, "aria-current": s.active ? "page" : void 0, "as-child": n.asChild, onClick: a }, { default: _(() => [ct(s.$slots, "default")]), _: 3 }, 8, ["as", "data-active", "aria-current", "as-child"])]), _: 3 }));
} }), wl = H({ inheritAttrs: false, __name: "NavigationMenuList", props: { asChild: { type: Boolean }, as: { default: "ul" } }, setup(t) {
  const e = t, n = Gt(), { forwardRef: i, currentElement: o } = At();
  return oe(() => {
    n.onIndicatorTrackChange(o.value);
  }), (a, s) => (A(), O(h(Mt), { ref: h(i), style: { position: "relative" } }, { default: _(() => [C(h(Mt), Dt(a.$attrs, { "as-child": e.asChild, as: a.as, "data-orientation": h(n).orientation }), { default: _(() => [ct(a.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-orientation"])]), _: 3 }, 512));
} }), xl = ["aria-owns"], Tl = H({ inheritAttrs: false, __name: "NavigationMenuTrigger", props: { disabled: { type: Boolean }, asChild: { type: Boolean }, as: { default: "button" } }, setup(t) {
  const e = t, n = Gt(), i = Gn(), { CollectionItem: o } = _e({ key: "NavigationMenu" }), { forwardRef: a, currentElement: s } = At(), r = V(""), l = V(""), u = gs(false, 300), c = V(false), d = I(() => i.value === n.modelValue.value);
  oe(() => {
    i.triggerRef = s, r.value = xs(n.baseId, i.value), l.value = Kn(n.baseId, i.value);
  });
  function f() {
    n.disableHoverTrigger.value || (c.value = false, i.wasEscapeCloseRef.value = false);
  }
  function p(g) {
    if (!n.disableHoverTrigger.value && g.pointerType === "mouse") {
      if (e.disabled || c.value || i.wasEscapeCloseRef.value || u.value) return;
      n.onTriggerEnter(i.value), u.value = true;
    }
  }
  function m(g) {
    if (!n.disableHoverTrigger.value && g.pointerType === "mouse") {
      if (e.disabled) return;
      n.onTriggerLeave(), u.value = false;
    }
  }
  function v(g) {
    g.pointerType === "mouse" && n.disableClickTrigger.value || u.value || (d.value ? n.onItemSelect("") : n.onItemSelect(i.value), c.value = d.value);
  }
  function w(g) {
    const b = { horizontal: "ArrowDown", vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[n.orientation];
    d.value && g.key === b && (i.onEntryKeyDown(), g.preventDefault(), g.stopPropagation());
  }
  function x(g) {
    i.focusProxyRef.value = Fr(g);
  }
  function y(g) {
    const S = document.getElementById(i.contentId), b = g.relatedTarget, T = b === s.value, P = S == null ? void 0 : S.contains(b);
    (T || !P) && i.onFocusProxyEnter(T ? "start" : "end");
  }
  return (g, S) => (A(), R(at, null, [C(h(o), null, { default: _(() => [C(h(Mt), Dt({ id: r.value, ref: h(a), disabled: g.disabled, "data-disabled": g.disabled ? "" : void 0, "data-state": h(rn)(d.value), "data-navigation-menu-trigger": "", "aria-expanded": d.value, "aria-controls": l.value, "as-child": e.asChild, as: g.as }, g.$attrs, { onPointerenter: f, onPointermove: p, onPointerleave: m, onClick: v, onKeydown: w }), { default: _(() => [ct(g.$slots, "default")]), _: 3 }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"])]), _: 3 }), d.value ? (A(), R(at, { key: 0 }, [C(h(Xr), { ref: x, "aria-hidden": "true", tabindex: 0, onFocus: y }), h(n).viewport ? (A(), R("span", { key: 0, "aria-owns": l.value }, null, 8, xl)) : j("", true)], 64)) : j("", true)], 64));
} }), Sl = H({ inheritAttrs: false, __name: "NavigationMenuViewport", props: { forceMount: { type: Boolean }, align: { default: "center" }, asChild: { type: Boolean }, as: {} }, setup(t) {
  var _a2;
  const e = t, { forwardRef: n, currentElement: i } = At(), o = Gt(), { activeTrigger: a, rootNavigationMenu: s, modelValue: r } = o, l = V(), u = V(), c = I(() => !!o.modelValue.value);
  _t(i, () => {
    o.onViewportChange(i.value);
  });
  const d = V();
  _t([r, c], () => {
    i.value && requestAnimationFrame(() => {
      var _a3;
      const p = (_a3 = i.value) == null ? void 0 : _a3.querySelector("[data-state=open]");
      d.value = p;
    });
  }, { immediate: true, flush: "post" });
  function f() {
    if (d.value && a.value && s.value) {
      const p = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, v = s.value.getBoundingClientRect(), w = a.value.getBoundingClientRect(), { offsetWidth: x, offsetHeight: y } = d.value, g = w.left - v.left, S = w.top - v.top;
      let b = null, T = null;
      switch (e.align) {
        case "start":
          b = g, T = S;
          break;
        case "end":
          b = g - x + w.width, T = S - y + w.height;
          break;
        default:
          b = g - x / 2 + w.width / 2, T = S - y / 2 + w.height / 2;
      }
      const P = 10;
      b + v.left < P && (b = P - v.left);
      const M = b + v.left + x;
      M > p - P && (b -= M - p + P, b < P - v.left && (b = P - v.left)), T + v.top < P && (T = P - v.top);
      const L = T + v.top + y;
      L > m - P && (T -= L - m + P, T < P - v.top && (T = P - v.top)), b = Math.round(b), T = Math.round(T), u.value = { left: b, top: T };
    }
  }
  return Ze(d, () => {
    d.value && (l.value = { width: d.value.offsetWidth, height: d.value.offsetHeight }, f());
  }), Ze([(_a2 = globalThis.document) == null ? void 0 : _a2.body, s], () => {
    f();
  }), (p, m) => (A(), O(h(Wn), { present: p.forceMount || c.value, "force-mount": !h(o).unmountOnHide.value, onAfterLeave: m[2] || (m[2] = () => {
    l.value = void 0, u.value = void 0;
  }) }, { default: _(({ present: v }) => {
    var _a3, _b, _c2, _d2;
    return [C(h(Mt), Dt(p.$attrs, { ref: h(n), as: p.as, "as-child": p.asChild, "data-state": h(rn)(c.value), "data-orientation": h(o).orientation, style: { pointerEvents: !c.value && h(o).isRootMenu ? "none" : void 0, "--reka-navigation-menu-viewport-width": l.value ? `${(_a3 = l.value) == null ? void 0 : _a3.width}px` : void 0, "--reka-navigation-menu-viewport-height": l.value ? `${(_b = l.value) == null ? void 0 : _b.height}px` : void 0, "--reka-navigation-menu-viewport-left": u.value ? `${(_c2 = u.value) == null ? void 0 : _c2.left}px` : void 0, "--reka-navigation-menu-viewport-top": u.value ? `${(_d2 = u.value) == null ? void 0 : _d2.top}px` : void 0 }, hidden: !v, onPointerenter: m[0] || (m[0] = (w) => h(o).onContentEnter(h(o).modelValue.value)), onPointerleave: m[1] || (m[1] = (w) => h(Ss)(() => h(o).onContentLeave())(w)) }), { default: _(() => [ct(p.$slots, "default")]), _: 2 }, 1040, ["as", "as-child", "data-state", "data-orientation", "style", "hidden"])];
  }), _: 3 }, 8, ["present", "force-mount"]));
} }), Pl = H({ name: "NuxtRouteAnnouncer", props: { atomic: { type: Boolean, default: false }, politeness: { type: String, default: "polite" } }, setup(t, { slots: e, expose: n }) {
  const { set: i, polite: o, assertive: a, message: s, politeness: r } = rl({ politeness: t.politeness });
  return n({ set: i, polite: o, assertive: a, message: s, politeness: r }), () => Xe("span", { class: "nuxt-route-announcer", style: { position: "absolute" } }, Xe("span", { role: "alert", "aria-live": r.value, "aria-atomic": t.atomic, style: { border: "0", clip: "rect(0 0 0 0)", "clip-path": "inset(50%)", height: "1px", width: "1px", overflow: "hidden", position: "absolute", "white-space": "nowrap", "word-wrap": "normal", margin: "-1px", padding: "0" } }, e.default ? e.default({ message: s.value }) : s.value));
} }), _l = { role: "banner", p: "x-32 t-20 b-24 md:y-20", "aria-label": "Announcement", "bg-darkblue": "", "w-full": "", relative: "", "z-2": "", "of-hidden": "", flex: "~ col md:items-center lg:row lg:justify-center gap-y-12 gap-x-16" }, Al = { text: "md white", "font-semibold": "", "z-1": "" }, Ml = H({ __name: "AnnouncementBanner", props: { announcementBannerHeadline: {}, announcementBannerCtaLink: {}, announcementBannerCtaLabel: {} }, setup(t) {
  return (e, n) => {
    const i = Pe;
    return A(), R("div", _l, [k("p", Al, F(t.announcementBannerHeadline), 1), ("hasLink" in e ? e.hasLink : h(Rr))(t.announcementBannerCtaLink) ? (A(), O(i, { key: 0, "internal-component": "a", field: t.announcementBannerCtaLink, "mx-0": "", "z-1": "", "nq-pill-secondary": "", "hocus:bg-neutral-300": "" }, { default: _(() => [nt(F(t.announcementBannerCtaLabel), 1)]), _: 1 }, 8, ["field"])) : j("", true), n[0] || (n[0] = k("div", { "mx-auto": "", "max-w-3120": "", "w-full": "", "inset-0": "", absolute: "" }, [k("div", { top: "36 lg:40", right: "-300 lg:-261", "rounded-8": "", "op-30": "", "h-159": "", "w-606": "", absolute: "", "blur-120": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } }), k("div", { top: "36 lg:40", left: "-300 lg:-261", "rounded-8": "", "op-30": "", "h-159": "", "w-606": "", absolute: "", "blur-120": "", "max-md:hidden": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } })], -1)), n[1] || (n[1] = k("div", { "op-10": "", "inset-0": "", absolute: "", style: { background: "radial-gradient(78.95% 73.1% at 12.5% 14.72%, #FFFFFF 0%, rgb(var(--nq-neutral-0) / 0.62)) 100%)" } }, null, -1)), n[2] || (n[2] = k("div", { "op-10": "", "inset-0": "", absolute: "", style: { background: "linear-gradient(180deg, rgba(4, 6, 40, 0.5) 0%, rgba(4, 6, 40, 0.25) 50%, rgba(4, 6, 40, 0.5) 100%)" } }, null, -1)), n[3] || (n[3] = k("div", { "max-w": "[calc(100%-64px)]", "rounded-8": "", "op-80": "", "w-606": "", "aspect-3.811": "", "inset-auto": "", "top-49": "", absolute: "", "blur-120": "", style: { background: "radial-gradient(141.42% 141.42% at 100% 100%, #693bc4 0%, #8f3fd5 100%)" } }, null, -1)), n[4] || (n[4] = k("div", { "max-w-1900": "", "w-full": "", "inset-y-0": "", absolute: "", "xl:mx-auto": "", "xl:inset-x-0": "" }, [k("div", { "i-announcement:sm-identicons-right": "", absolute: "", "lg:i-announcement:lg-identicons-right": "", "xl:i-announcement:xl-identicons-right": "", right: "-35 lg:-65 xl:-30", top: "-56 md:-60 lg:-80 xl:-33", h: "223 xl:136", w: "220 xl:434" }), k("div", { absolute: "", "lg:i-announcement:lg-identicons-left": "", "md:i-announcement:md-identicons-left": "", "xl:i-announcement:xl-identicons-left": "", left: "-35 lg:-65 xl:-30", top: "-56 md:-60 lg:-80 xl:-33", h: "223 xl:136", w: "220 xl:434" })], -1))]);
  };
} }), Cl = Object.assign(Ml, { __name: "NavigationAnnouncementBanner" }), kl = { key: 0, role: "list", flex: "~ items-center gap-2 wrap", "text-neutral-700": "" }, El = H({ __name: "SocialMediaLogosList", props: { items: {} }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => zn()), e = await e, n(), e), o = I(() => t.items.map((s) => i.value[s]).filter(Boolean)), a = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return (s, r) => {
    var _a2;
    const l = Pe;
    return ((_a2 = h(o)) == null ? void 0 : _a2.length) > 0 ? (A(), R("ul", kl, [(A(true), R(at, null, ht(h(o), ({ platform: u, icon: c, link: d }) => (A(), R("li", { key: u, "self-stretch": "", "justify-self-stretch": "", "aria-label": "Links to some of our social media pages" }, [C(l, { "internal-component": "a", title: a(u), field: d, focusable: "", "p-8": "", "rounded-4": "", flex: "", "h-max": "", bg: "hocus:darkblue/6", "aria-label": `Visit Nimiq on ${u}` }, { default: _(() => [k("div", { class: Tt(c) }, null, 2)]), _: 2 }, 1032, ["title", "field", "aria-label"])]))), 128))])) : j("", true);
  };
} }), qn = Object.assign(El, { __name: "SocialMediaLogosList" });
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
const Dl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Vl = (t) => typeof t < "u";
function Ll(t) {
  return JSON.parse(JSON.stringify(t));
}
function Ei(t, e, n, i = {}) {
  var o, a, s;
  const { clone: r = false, passive: l = false, eventName: u, deep: c = false, defaultValue: d, shouldEmit: f } = i, p = fs(), m = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (a = p == null ? void 0 : p.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let v = u;
  e || (e = "modelValue"), v = v || `update:${e.toString()}`;
  const w = (g) => r ? typeof r == "function" ? r(g) : Ll(g) : g, x = () => Vl(t[e]) ? w(t[e]) : d, y = (g) => {
    f ? f(g) && m(v, g) : m(v, g);
  };
  if (l) {
    const g = x(), S = V(g);
    let b = false;
    return _t(() => t[e], (T) => {
      b || (b = true, S.value = w(T), hs(() => b = false));
    }), _t(S, (T) => {
      !b && (T !== t[e] || c) && y(T);
    }, { deep: c }), S;
  } else return I({ get() {
    return x();
  }, set(g) {
    y(g);
  } });
}
const [Xn, Rl] = Hn("DrawerRoot"), Ps = /* @__PURE__ */ new WeakMap();
function it(t, e, n = false) {
  if (!t || !(t instanceof HTMLElement) || !e) return;
  const i = {};
  Object.entries(e).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      t.style.setProperty(o, a);
      return;
    }
    i[o] = t.style[o], t.style[o] = a;
  }), !n && Ps.set(t, i);
}
function Ol(t, e) {
  if (!t || !(t instanceof HTMLElement)) return;
  const n = Ps.get(t);
  n && Object.entries(n).forEach(([i, o]) => {
    t.style[i] = o;
  });
}
function Ie(t, e) {
  const n = window.getComputedStyle(t), i = n.transform || n.webkitTransform || n.mozTransform;
  let o = i.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Z(e) ? 13 : 12]) : (o = i.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Z(e) ? 5 : 4]) : null);
}
function $l(t) {
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
function Bl(...t) {
  return (...e) => {
    for (const n of t) typeof n == "function" && n(...e);
  };
}
const K = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, _s = 0.4, Fl = 0.25, Il = 100, As = 8, je = 16, Ms = 26, Di = "vaul-dragging";
function jl({ activeSnapPoint: t, snapPoints: e, drawerRef: n, overlayRef: i, fadeFromIndex: o, onSnapPointChange: a, direction: s }) {
  const r = V(typeof window < "u" ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight } : void 0);
  function l() {
    r.value = { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
  }
  oe(() => {
    typeof window < "u" && window.addEventListener("resize", l);
  }), ps(() => {
    typeof window < "u" && window.removeEventListener("resize", l);
  });
  const u = I(() => (e.value && t.value === e.value[e.value.length - 1]) ?? null), c = I(() => e.value && e.value.length > 0 && ((o == null ? void 0 : o.value) || (o == null ? void 0 : o.value) === 0) && !Number.isNaN(o == null ? void 0 : o.value) && e.value[(o == null ? void 0 : o.value) ?? -1] === t.value || !e.value), d = I(() => {
    var y;
    return ((y = e.value) == null ? void 0 : y.findIndex((g) => g === t.value)) ?? null;
  }), f = I(() => {
    var y;
    return ((y = e.value) == null ? void 0 : y.map((g) => {
      const S = typeof g == "string";
      let b = 0;
      if (S && (b = Number.parseInt(g, 10)), Z(s.value)) {
        const P = S ? b : r.value ? g * r.value.innerHeight : 0;
        return r.value ? s.value === "bottom" ? r.value.innerHeight - P : -r.value.innerHeight + P : P;
      }
      const T = S ? b : r.value ? g * r.value.innerWidth : 0;
      return r.value ? s.value === "right" ? r.value.innerWidth - T : -r.value.innerWidth + T : T;
    })) ?? [];
  }), p = I(() => {
    var y;
    return d.value !== null ? (y = f.value) == null ? void 0 : y[d.value] : null;
  }), m = (y) => {
    var g, S, b, T;
    const P = ((g = f.value) == null ? void 0 : g.findIndex((M) => M === y)) ?? null;
    hs(() => {
      var M;
      a(P, f.value), it((M = n.value) == null ? void 0 : M.$el, { transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, transform: Z(s.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)` });
    }), f.value && P !== f.value.length - 1 && P !== (o == null ? void 0 : o.value) ? it((S = i.value) == null ? void 0 : S.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, opacity: "0" }) : it((b = i.value) == null ? void 0 : b.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, opacity: "1" }), t.value = P !== null ? ((T = e.value) == null ? void 0 : T[P]) ?? null : null;
  };
  _t([t, f, e], () => {
    var y;
    if (t.value) {
      const g = ((y = e.value) == null ? void 0 : y.findIndex((S) => S === t.value)) ?? -1;
      f.value && g !== -1 && typeof f.value[g] == "number" && m(f.value[g]);
    }
  }, { immediate: true });
  function v({ draggedDistance: y, closeDrawer: g, velocity: S, dismissible: b }) {
    var T, P, M;
    if (o.value === void 0) return;
    const L = s.value === "bottom" || s.value === "right" ? (p.value ?? 0) - y : (p.value ?? 0) + y, G = d.value === o.value - 1, tt = d.value === 0, dt = y > 0;
    if (G && it((T = i.value) == null ? void 0 : T.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})` }), S > 2 && !dt) {
      b ? g() : m(f.value[0]);
      return;
    }
    if (S > 2 && dt && f && e.value) {
      m(f.value[e.value.length - 1]);
      return;
    }
    const bt = (P = f.value) == null ? void 0 : P.reduce((mt, $) => typeof mt != "number" || typeof $ != "number" ? mt : Math.abs($ - L) < Math.abs(mt - L) ? $ : mt), Ft = Z(s.value) ? window.innerHeight : window.innerWidth;
    if (S > _s && Math.abs(y) < Ft * 0.4) {
      const mt = dt ? 1 : -1;
      if (mt > 0 && u) {
        m(f.value[(((M = e.value) == null ? void 0 : M.length) ?? 0) - 1]);
        return;
      }
      if (tt && mt < 0 && b && g(), d.value === null) return;
      m(f.value[d.value + mt]);
      return;
    }
    m(bt);
  }
  function w({ draggedDistance: y }) {
    var g;
    if (p.value === null) return;
    const S = s.value === "bottom" || s.value === "right" ? p.value - y : p.value + y;
    (s.value === "bottom" || s.value === "right") && S < f.value[f.value.length - 1] || (s.value === "top" || s.value === "left") && S > f.value[f.value.length - 1] || it((g = n.value) == null ? void 0 : g.$el, { transform: Z(s.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)` });
  }
  function x(y, g) {
    if (!e.value || typeof d.value != "number" || !f.value || o.value === void 0) return null;
    const S = d.value === o.value - 1;
    if (d.value >= o.value && g) return 0;
    if (S && !g) return 1;
    if (!c.value && !S) return null;
    const b = S ? d.value + 1 : d.value - 1, T = S ? f.value[b] - f.value[b - 1] : f.value[b + 1] - f.value[b], P = y / Math.abs(T);
    return S ? 1 - P : P;
  }
  return { isLastSnapPoint: u, shouldFade: c, getPercentageDragged: x, activeSnapPointIndex: d, onRelease: v, onDrag: w, snapPointsOffset: f };
}
function Vi() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let ce = null;
function Nl(t) {
  const { isOpen: e, modal: n, nested: i, hasBeenOpened: o, preventScrollRestoration: a, noBodyStyles: s } = t, r = V(typeof window < "u" ? window.location.href : ""), l = V(0);
  function u() {
    if (Vi() && ce === null && e.value && !s.value) {
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
  function c() {
    if (Vi() && ce !== null && !s.value) {
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
    d(), window.addEventListener("scroll", d), ms(() => {
      window.removeEventListener("scroll", d);
    });
  }), _t([e, o, r], () => {
    i.value || !o.value || (e.value ? (window.matchMedia("(display-mode: standalone)").matches || u(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function Ul(t, e) {
  return t && t.value ? t : e;
}
function zl(t) {
  const { emitDrag: e, emitRelease: n, emitClose: i, emitOpenChange: o, open: a, dismissible: s, nested: r, modal: l, shouldScaleBackground: u, setBackgroundColorOnScale: c, scrollLockTimeout: d, closeThreshold: f, activeSnapPoint: p, fadeFromIndex: m, direction: v, noBodyStyles: w, handleOnly: x, preventScrollRestoration: y } = t, g = V(a.value ?? false), S = V(false), b = V(false), T = V(false), P = V(null), M = V(null), L = V(null), G = V(null), tt = V(null), dt = V(false), bt = V(null), Ft = V(0), mt = V(false);
  V(0);
  const $ = V(null);
  V(0);
  const vt = I(() => {
    var D;
    return ((D = $.value) == null ? void 0 : D.$el.getBoundingClientRect().height) || 0;
  }), W = Ul(t.snapPoints, V(void 0)), De = I(() => {
    var D;
    return W && (((D = W.value) == null ? void 0 : D.length) ?? 0) > 0;
  }), Ve = V(null), { activeSnapPointIndex: le, onRelease: Le, snapPointsOffset: Re, onDrag: Oe, shouldFade: Lt, getPercentageDragged: qt } = jl({ snapPoints: W, activeSnapPoint: p, drawerRef: $, fadeFromIndex: m, overlayRef: P, onSnapPointChange: Xt, direction: v });
  function Xt(D, X) {
    W.value && D === X.length - 1 && (M.value = /* @__PURE__ */ new Date());
  }
  Nl({ isOpen: g, modal: l, nested: r, hasBeenOpened: S, noBodyStyles: w, preventScrollRestoration: y });
  function wt() {
    return (window.innerWidth - Ms) / window.innerWidth;
  }
  function Rt(D, X) {
    var et;
    if (!D) return false;
    let U = D;
    const ot = (et = window.getSelection()) == null ? void 0 : et.toString(), rt = $.value ? Ie($.value.$el, v.value) : null, gt = /* @__PURE__ */ new Date();
    if (U.hasAttribute("data-vaul-no-drag") || U.closest("[data-vaul-no-drag]")) return false;
    if (v.value === "right" || v.value === "left") return true;
    if (M.value && gt.getTime() - M.value.getTime() < 500) return false;
    if (rt !== null && (v.value === "bottom" ? rt > 0 : rt < 0)) return true;
    if (ot && ot.length > 0) return false;
    if (tt.value && gt.getTime() - tt.value.getTime() < d.value && rt === 0 || X) return tt.value = gt, false;
    for (; U; ) {
      if (U.scrollHeight > U.clientHeight) {
        if (U.scrollTop !== 0) return tt.value = /* @__PURE__ */ new Date(), false;
        if (U.getAttribute("role") === "dialog") return true;
      }
      U = U.parentNode;
    }
    return true;
  }
  function sr(D) {
    !s.value && !W.value || $.value && !$.value.$el.contains(D.target) || (b.value = true, L.value = /* @__PURE__ */ new Date(), D.target.setPointerCapture(D.pointerId), Ft.value = Z(v.value) ? D.clientY : D.clientX);
  }
  function ar(D) {
    var X, et, U, ot, rt, gt;
    if ($.value && b.value) {
      const Yt = v.value === "bottom" || v.value === "right" ? 1 : -1, $e = (Ft.value - (Z(v.value) ? D.clientY : D.clientX)) * Yt, Be = $e > 0, Pi = W.value && !s.value && !Be;
      if (Pi && le.value === 0) return;
      const un = Math.abs($e), _i = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let It = un / vt.value;
      const Ai = qt(un, Be);
      if (Ai !== null && (It = Ai), Pi && It >= 1 || !dt.value && !Rt(D.target, Be)) return;
      if ((X = $ == null ? void 0 : $.value) == null || X.$el.classList.add(Di), dt.value = true, it((et = $.value) == null ? void 0 : et.$el, { transition: "none" }), it((U = P.value) == null ? void 0 : U.$el, { transition: "none" }), W.value && Oe({ draggedDistance: $e }), Be && !W.value) {
        const jt = $l($e), Fe = Math.min(jt * -1, 0) * Yt;
        it((ot = $.value) == null ? void 0 : ot.$el, { transform: Z(v.value) ? `translate3d(0, ${Fe}px, 0)` : `translate3d(${Fe}px, 0, 0)` });
        return;
      }
      const dr = 1 - It;
      if ((Lt.value || m.value && le.value === m.value - 1) && (e(It), it((rt = P.value) == null ? void 0 : rt.$el, { opacity: `${dr}`, transition: "none" }, true)), _i && P.value && u.value) {
        const jt = Math.min(wt() + It * (1 - wt()), 1), Fe = 8 - It * 8, Mi = Math.max(0, 14 - It * 14);
        it(_i, { borderRadius: `${Fe}px`, transform: Z(v.value) ? `scale(${jt}) translate3d(0, ${Mi}px, 0)` : `scale(${jt}) translate3d(${Mi}px, 0, 0)`, transition: "none" }, true);
      }
      if (!W.value) {
        const jt = un * Yt;
        it((gt = $.value) == null ? void 0 : gt.$el, { transform: Z(v.value) ? `translate3d(0, ${jt}px, 0)` : `translate3d(${jt}px, 0, 0)` });
      }
    }
  }
  function Si() {
    var D;
    if (!$.value) return;
    const X = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), et = Ie($.value.$el, v.value);
    it($.value.$el, { transform: "translate3d(0, 0, 0)", transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})` }), it((D = P.value) == null ? void 0 : D.$el, { transition: `opacity ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, opacity: "1" }), u.value && et && et > 0 && g.value && it(X, { borderRadius: `${As}px`, overflow: "hidden", ...Z(v.value) ? { transform: `scale(${wt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${wt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${K.DURATION}s`, transitionTimingFunction: `cubic-bezier(${K.EASE.join(",")})` }, true);
  }
  function ue(D) {
    $.value && (i(), D || (g.value = false), window.setTimeout(() => {
      W.value && (p.value = W.value[0]);
    }, K.DURATION * 1e3));
  }
  ie(() => {
    if (!g.value && u.value && Dl) {
      const D = setTimeout(() => {
        Ol(document.body);
      }, 200);
      return () => clearTimeout(D);
    }
  }), _t(a, () => {
    g.value = a.value, a.value || ue();
  });
  function rr(D) {
    if (!b.value || !$.value) return;
    $.value.$el.classList.remove(Di), dt.value = false, b.value = false, G.value = /* @__PURE__ */ new Date();
    const X = Ie($.value.$el, v.value);
    if (!Rt(D.target, false) || !X || Number.isNaN(X) || L.value === null) return;
    const et = G.value.getTime() - L.value.getTime(), U = Ft.value - (Z(v.value) ? D.clientY : D.clientX), ot = Math.abs(U) / et;
    if (ot > 0.05 && (T.value = true, window.setTimeout(() => {
      T.value = false;
    }, 200)), W.value) {
      const gt = v.value === "bottom" || v.value === "right" ? 1 : -1;
      Le({ draggedDistance: U * gt, closeDrawer: ue, velocity: ot, dismissible: s.value }), n(true);
      return;
    }
    if (v.value === "bottom" || v.value === "right" ? U > 0 : U < 0) {
      Si(), n(true);
      return;
    }
    if (ot > _s) {
      ue(), n(false);
      return;
    }
    const rt = Math.min($.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight);
    if (X >= rt * f.value) {
      ue(), n(false);
      return;
    }
    n(true), Si();
  }
  _t(g, (D) => {
    D && (M.value = /* @__PURE__ */ new Date()), o(D);
  }, { immediate: true });
  function lr(D) {
    var X, et;
    const U = D ? (window.innerWidth - je) / window.innerWidth : 1, ot = D ? -16 : 0;
    bt.value && window.clearTimeout(bt.value), it((X = $.value) == null ? void 0 : X.$el, { transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, transform: `scale(${U}) translate3d(0, ${ot}px, 0)` }), !D && (et = $.value) != null && et.$el && (bt.value = window.setTimeout(() => {
      var rt, gt;
      const Yt = Ie((rt = $.value) == null ? void 0 : rt.$el, v.value);
      it((gt = $.value) == null ? void 0 : gt.$el, { transition: "none", transform: Z(v.value) ? `translate3d(0, ${Yt}px, 0)` : `translate3d(${Yt}px, 0, 0)` });
    }, 500));
  }
  function ur(D) {
    var X;
    if (D < 0) return;
    const et = Z(v.value) ? window.innerHeight : window.innerWidth, U = (et - je) / et, ot = U + D * (1 - U), rt = -16 + D * je;
    it((X = $.value) == null ? void 0 : X.$el, { transform: Z(v.value) ? `scale(${ot}) translate3d(0, ${rt}px, 0)` : `scale(${ot}) translate3d(${rt}px, 0, 0)`, transition: "none" });
  }
  function cr(D) {
    var X;
    const et = Z(v.value) ? window.innerHeight : window.innerWidth, U = D ? (et - je) / et : 1, ot = D ? -16 : 0;
    D && it((X = $.value) == null ? void 0 : X.$el, { transition: `transform ${K.DURATION}s cubic-bezier(${K.EASE.join(",")})`, transform: Z(v.value) ? `scale(${U}) translate3d(0, ${ot}px, 0)` : `scale(${U}) translate3d(${ot}px, 0, 0)` });
  }
  return { open: a, isOpen: g, modal: l, keyboardIsOpen: mt, hasBeenOpened: S, drawerRef: $, drawerHeightRef: vt, overlayRef: P, handleRef: Ve, isDragging: b, dragStartTime: L, isAllowedToDrag: dt, snapPoints: W, activeSnapPoint: p, hasSnapPoints: De, pointerStart: Ft, dismissible: s, snapPointsOffset: Re, direction: v, shouldFade: Lt, fadeFromIndex: m, shouldScaleBackground: u, setBackgroundColorOnScale: c, onPress: sr, onDrag: ar, onRelease: rr, closeDrawer: ue, onNestedDrag: ur, onNestedRelease: cr, onNestedOpenChange: lr, emitClose: i, emitDrag: e, emitRelease: n, emitOpenChange: o, nested: r, handleOnly: x, noBodyStyles: w };
}
const Hl = H({ __name: "DrawerRoot", props: { activeSnapPoint: { default: void 0 }, closeThreshold: { default: Fl }, shouldScaleBackground: { type: Boolean, default: void 0 }, setBackgroundColorOnScale: { type: Boolean, default: true }, scrollLockTimeout: { default: Il }, fixed: { type: Boolean, default: void 0 }, dismissible: { type: Boolean, default: true }, modal: { type: Boolean, default: true }, open: { type: Boolean, default: void 0 }, defaultOpen: { type: Boolean, default: void 0 }, nested: { type: Boolean, default: false }, direction: { default: "bottom" }, noBodyStyles: { type: Boolean }, handleOnly: { type: Boolean, default: false }, preventScrollRestoration: { type: Boolean }, snapPoints: { default: void 0 }, fadeFromIndex: { default: void 0 } }, emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"], setup(t, { expose: e, emit: n }) {
  const i = t, o = n;
  yr();
  const a = I(() => i.fadeFromIndex ?? (i.snapPoints && i.snapPoints.length - 1)), s = Ei(i, "open", o, { defaultValue: i.defaultOpen, passive: i.open === void 0 }), r = Ei(i, "activeSnapPoint", o, { passive: i.activeSnapPoint === void 0 }), l = { emitDrag: (m) => o("drag", m), emitRelease: (m) => o("release", m), emitClose: () => o("close"), emitOpenChange: (m) => {
    o("update:open", m), setTimeout(() => {
      o("animationEnd", m);
    }, K.DURATION * 1e3);
  } }, { closeDrawer: u, hasBeenOpened: c, modal: d, isOpen: f } = Rl(zl({ ...l, ...cs(i), activeSnapPoint: r, fadeFromIndex: a, open: s }));
  function p(m) {
    if (s.value !== void 0) {
      l.emitOpenChange(m);
      return;
    }
    f.value = m, m ? c.value = true : u();
  }
  return e({ open: f }), (m, v) => (A(), O(h(Ir), { open: h(f), modal: h(d), "onUpdate:open": p }, { default: _(() => [ct(m.$slots, "default", { open: h(f) })]), _: 3 }, 8, ["open", "modal"]));
} }), Wl = H({ __name: "DrawerOverlay", setup(t) {
  const { overlayRef: e, hasSnapPoints: n, isOpen: i, shouldFade: o } = Xn();
  return (a, s) => (A(), O(h(jr), { ref_key: "overlayRef", ref: e, "data-vaul-overlay": "", "data-vaul-snap-points": h(i) && h(n) ? "true" : "false", "data-vaul-snap-points-overlay": h(i) && h(o) ? "true" : "false" }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
} }), Kl = () => () => {
};
function Gl() {
  const { direction: t, isOpen: e, shouldScaleBackground: n, setBackgroundColorOnScale: i, noBodyStyles: o } = Xn(), a = V(null), s = V(document.body.style.backgroundColor);
  function r() {
    return (window.innerWidth - Ms) / window.innerWidth;
  }
  ie((l) => {
    if (e.value && n.value) {
      a.value && clearTimeout(a.value);
      const u = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!u) return;
      Bl(i.value && !o.value ? cn(document.body, { background: "black" }) : Kl, cn(u, { transformOrigin: Z(t.value) ? "top" : "left", transitionProperty: "transform, border-radius", transitionDuration: `${K.DURATION}s`, transitionTimingFunction: `cubic-bezier(${K.EASE.join(",")})` }));
      const c = cn(u, { borderRadius: `${As}px`, overflow: "hidden", ...Z(t.value) ? { transform: `scale(${r()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${r()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` } });
      l(() => {
        c(), a.value = window.setTimeout(() => {
          s.value ? document.body.style.background = s.value : document.body.style.removeProperty("background");
        }, K.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const ql = H({ __name: "DrawerContent", setup(t) {
  const { open: e, isOpen: n, snapPointsOffset: i, hasSnapPoints: o, drawerRef: a, onPress: s, onDrag: r, onRelease: l, modal: u, emitOpenChange: c, dismissible: d, keyboardIsOpen: f, closeDrawer: p, direction: m, handleOnly: v } = Xn();
  Gl();
  const w = V(false), x = I(() => i.value && i.value.length > 0 ? `${i.value[0]}px` : "0");
  function y(b) {
    if (!u.value || b.defaultPrevented) {
      b.preventDefault();
      return;
    }
    f.value && (f.value = false), d.value ? c(false) : b.preventDefault();
  }
  function g(b) {
    v.value || s(b);
  }
  function S(b) {
    v.value || r(b);
  }
  return ie(() => {
    o.value && window.requestAnimationFrame(() => {
      w.value = true;
    });
  }), (b, T) => (A(), O(h(Nr), { ref_key: "drawerRef", ref: a, "data-vaul-drawer": "", "data-vaul-drawer-direction": h(m), "data-vaul-delayed-snap-points": w.value ? "true" : "false", "data-vaul-snap-points": h(n) && h(o) ? "true" : "false", style: Ye({ "--snap-point-height": x.value }), onPointerdown: g, onPointermove: S, onPointerup: h(l), onPointerDownOutside: y, onOpenAutoFocus: T[0] || (T[0] = br(() => {
  }, ["prevent"])), onEscapeKeyDown: T[1] || (T[1] = (P) => {
    h(d) || P.preventDefault();
  }) }, { default: _(() => [ct(b.$slots, "default")]), _: 3 }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
} });
function Ae() {
  const { client: t } = wr();
  return xr("$prismic_navigation", async () => {
    const e = await t.getSingle("navigation").then((a) => a.data);
    if (!e) throw new Error("Navigation data not found");
    const { hotCtaLink: n, hotCtaText: i } = Xl(e), o = Yl(e);
    return { ...e, blocks: o, copyrightNotice: `\xA9 Nimiq Foundation 2017-${(/* @__PURE__ */ new Date()).getFullYear()}`, hotCtaLink: n, hotCtaText: i };
  });
}
function Xl(t) {
  if (!t.hottext || !t.hotsince || !t.hotuntil) return { hotCtaLink: void 0, hotCtaText: void 0 };
  const e = /* @__PURE__ */ new Date();
  return new Date(t.hotsince) > e || new Date(t.hotuntil) < e ? { hotCtaLink: void 0, hotCtaText: void 0 } : { hotCtaLink: vs(t.hothref), hotCtaText: t.hottext };
}
function Yl(t) {
  return [{ areaName: "project", label: t.projectGroupName, links: [...t.projectLinks, ...t.projectAdditionalFooterLinks] }, { areaName: "tech", label: t.techGroupName, links: [...t.techLinks, ...t.techAdditionalFooterLinks] }, { areaName: "apps", label: t.appsGroupName, links: [...t.appsLinks, ...t.appsAdditionalFooterLinks] }, { areaName: "get-started", label: t.getStartedGroupName, links: [...t.getStartedLinks, ...t.getStartedAdditionalFooterLinks] }, { areaName: "community", label: t.communityGroupName, links: [...t.communityLinks, ...t.communityAdditionalFooterLinks] }, { areaName: "and-more", label: t.andMoreGroupName, links: t.andMoreLinks }];
}
const Zl = { class: "mb-16 flex gap-20" }, Jl = { "of-x-hidden": "", "of-y-auto": "" }, Ql = { class: "my-16" }, tu = { text: "f-sm neutral-700", "font-bold": "", "nq-arrow": "" }, eu = { "text-14": "", "f-mt-xs": "" }, nu = { "text-12": "", uppercase: "" }, iu = { text: "neutral-800 hocus:neutral-900", "transition-colors": "", "f-mt-md": "", flex: "~ gap-16 items-center" }, ou = { "text-neutral-600": "", "f-mt-md": "" }, su = H({ __name: "Mobile", async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Ae()), e = await e, n(), e);
  return (o, a) => {
    const s = Pe, r = ul, l = Kr, u = qr, c = Gr, d = Wr, f = Hr, p = qn, m = an;
    return A(), O(h(Hl), { "should-scale-background": "" }, { default: _(() => [C(h(Ur), { "bg-transparent": "", "aria-label": "Links menu" }, { default: _(() => [k("div", { "opacity-50": "", "hocus:opacity-60": "", class: Tt(["scale-x--100 i-nimiq:hamburger-menu", { "text-white": false }]) })]), _: 1 }), C(h(zr), null, { default: _(() => [C(h(Wl), { class: "bg-neutral/40 inset-0 fixed" }), C(h(ql), { class: "mt-24 p-24 rounded-t-10 bg-white flex flex-col h-full max-h-90dvh bottom-0 left-0 right-0 fixed z-100" }, { default: _(() => {
      var _a2, _b, _c2, _d2, _e2, _f2;
      return [a[5] || (a[5] = k("div", { class: "mx-auto mb-32 rounded-full bg-gray-300 flex-shrink-0 h-4 w-80" }, null, -1)), k("div", Zl, [((_b = (_a2 = h(i)) == null ? void 0 : _a2.getStartedLinks.at(0)) == null ? void 0 : _b.href) ? (A(), O(s, { key: 0, "internal-component": "a", field: h(i).getStartedLinks.at(0).href, "nq-pill-secondary": "" }, { default: _(() => {
        var _a3;
        return [nt(F((_a3 = h(i).getStartedLinks[0]) == null ? void 0 : _a3.label), 1)];
      }), _: 1 }, 8, ["field"])) : j("", true), ((_d2 = (_c2 = h(i)) == null ? void 0 : _c2.getStartedLinks.at(1)) == null ? void 0 : _d2.href) ? (A(), O(s, { key: 1, "internal-component": "a", field: h(i).getStartedLinks.at(1).href, "nq-arrow": "", "nq-pill-blue": "" }, { default: _(() => {
        var _a3;
        return [nt(F((_a3 = h(i).getStartedLinks[1]) == null ? void 0 : _a3.label), 1)];
      }), _: 1 }, 8, ["field"])) : j("", true)]), k("div", Jl, [k("div", Ql, [((_f2 = (_e2 = h(i)) == null ? void 0 : _e2.getStartedLinks.at(2)) == null ? void 0 : _f2.href) ? (A(), O(s, { key: 0, "internal-component": "a", field: h(i).getStartedLinks.at(2).href }, { default: _(() => {
        var _a3, _b2;
        return [k("p", tu, F((_a3 = h(i).getStartedLinks[2]) == null ? void 0 : _a3.label), 1), k("p", eu, F((_b2 = h(i).getStartedLinks[2]) == null ? void 0 : _b2.description), 1)];
      }), _: 1 }, 8, ["field"])) : j("", true)]), C(f, { class: "mt-16 opacity-60", type: "single", collapsible: true }, { default: _(() => [(A(true), R(at, null, ht(h(i).blocks, ({ links: v, label: w }) => (A(), R(at, { key: w }, [v.length ? (A(), O(r, { key: 0, "bg-neutral-300": "", "h-1": "" })) : j("", true), v.length ? (A(), O(d, { key: 1, "py-8": "", "of-hidden": "", value: w }, { default: _(() => [C(u, null, { default: _(() => [C(l, { "outline-none": "", "leading-none": "", "px-5": "", "bg-white": "", flex: "", "flex-1": "", "gap-x-8": "", "h-45": "", "cursor-default": "", "items-center": "" }, { default: _(() => [k("span", nu, F(w), 1), a[0] || (a[0] = k("div", { class: "text-10 text-neutral transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] i-nimiq:chevron-down group-data-[state=open]:rotate-180" }, null, -1))]), _: 2, __: [0] }, 1024)]), _: 2 }, 1024), C(c, { class: "content", "of-hidden": "" }, { default: _(() => [(A(true), R(at, null, ht(v, ({ label: x, href: y }, g) => (A(), O(s, { key: g, "internal-component": "a", field: y, flex: "~ items-center gap-16", "font-semibold": "", "px-16": "", "pb-10": "", "pt-14": "", "rounded-4": "", "bg-white": "", "w-full": "", "whitespace-nowrap": "" }, { default: _(() => [nt(F(x), 1)]), _: 2 }, 1032, ["field"]))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"])) : j("", true)], 64))), 128))]), _: 1 }), a[4] || (a[4] = k("hr", { "mb-32": "", "bg-neutral-300": "", "h-1": "", "w-full": "" }, null, -1)), C(p, { "text-18": "", items: [("SocialMedia" in o ? o.SocialMedia : h(B)).x, ("SocialMedia" in o ? o.SocialMedia : h(B)).telegram, ("SocialMedia" in o ? o.SocialMedia : h(B)).reddit, ("SocialMedia" in o ? o.SocialMedia : h(B)).github, ("SocialMedia" in o ? o.SocialMedia : h(B)).youtube, ("SocialMedia" in o ? o.SocialMedia : h(B)).discord, ("SocialMedia" in o ? o.SocialMedia : h(B)).nimiqForum, ("SocialMedia" in o ? o.SocialMedia : h(B)).facebook, ("SocialMedia" in o ? o.SocialMedia : h(B)).instagram] }, null, 8, ["items"]), k("div", iu, [C(m, { to: "/privacy-policy", class: "font-semibold op-60 hocus:op-90" }, { default: _(() => a[1] || (a[1] = [nt(" Privacy Policy ")])), _: 1, __: [1] }), a[3] || (a[3] = k("div", { "aria-hidden": "", "rounded-full": "", "bg-current": "", "op-40": "", "size-4": "" }, null, -1)), C(m, { to: "/cookie-policy", class: "font-semibold op-60 hocus:op-90" }, { default: _(() => a[2] || (a[2] = [nt(" Cookie Policy ")])), _: 1, __: [2] })]), k("p", ou, F(h(i).copyrightNotice), 1)])];
    }), _: 1, __: [5] })]), _: 1 })]), _: 1 });
  };
} }), au = Object.assign(Un(su, [["__scopeId", "data-v-b2b35221"]]), { __name: "NavigationMobile" }), ru = { flex: "~ gap-20", "px-20": "", "py-32": "" }, lu = ["aria-label"], uu = ["onFocus", "onMouseover"], cu = { key: 0, "px-40": "", "py-32": "", "bg-darkblue": "", "bg-op-6": "" }, du = { "text-12": "", "font-bold": "", "lh-none": "", "op-60": "", "whitespace-nowrap": "", uppercase: "" }, fu = ["aria-label"], hu = ["aria-label"], pu = { flex: "~ items-center justify-between gap-x-20", "px-32": "", "py-20": "" }, mu = { "p-16": "", grid: "", "grid-cols-1": "", "max-w-6xl": "" }, vu = ["aria-label"], gu = { "p-16": "", grid: "", "grid-cols-1": "" }, yu = ["aria-label"], bu = ["aria-label"], wu = { "font-semibold": "", "lh-none": "" }, xu = { "text-14": "" }, Tu = { flex: "~ justify-center", "min-w-full": "", "perspective-2000": "", "right-0": "", "top-full": "", absolute: "", "z-10": "" }, Su = H({ __name: "Desktop", async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => zn()), e = await e, n(), e), { data: o } = ([e, n] = $t(() => Ae()), e = await e, n(), e), a = I(() => o.value.projectLinks.filter((u) => u.href.link_type === "Document")), s = V(0), l = Tr().fullPath === "/";
  return (u, c) => {
    const d = Tl, f = Sr, p = Pe, m = bl, v = gl, w = ml, x = qn, y = yl, g = wl, S = Sl, b = hl;
    return h(o) ? (A(), O(b, { key: 0, class: "header-nav", relative: "" }, { default: _(() => [C(g, { flex: "~ items-center" }, { default: _(() => [C(w, null, { default: _(() => [C(d, { class: "trigger" }, { default: _(() => c[0] || (c[0] = [nt(" Apps "), k("div", { "i-nimiq:chevron-down": "" }, null, -1)])), _: 1, __: [0] }), C(v, { "w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: _(() => [k("div", null, [k("div", ru, [k("ul", { "aria-label": `${h(o).appsGroupName} links`, role: "link", "w-max": "", flex: "~ col" }, [(A(true), R(at, null, ht(h(o).appsLinks, ({ label: T, href: P, logo: M }, L) => (A(), R("li", { key: T, group: "", class: "link-item", onFocus: (G) => s.value = L, onMouseover: (G) => s.value = L }, [C(m, { "as-child": "" }, { default: _(() => [C(p, { "internal-component": "a", field: P, flex: "~ gap-12 items-center" }, { default: _(() => [C(f, { field: M, "h-22": "", "max-w-21": "", op: "20 group-hocus:100", "transition-opacity": "" }, null, 8, ["field"]), k("span", null, F(T), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)], 40, uu))), 128))], 8, lu), C(Pr, { mode: "out-in", "enter-active-class": "transition-[opacity,filter] duration-400", "enter-from-class": "op-0 blur-2", "enter-to-class": "op-100 blur-0", "leave-active-class": "transition-[opacity,filter] duration-150 blur-0", "leave-from-class": "op-100", "leave-to-class": "op-0 blur-2" }, { default: _(() => {
      var _a2;
      return [((_a2 = h(o).appsLinks[h(s)]) == null ? void 0 : _a2.visual) ? (A(), O(f, { key: h(s), field: h(o).appsLinks[h(s)].visual, "rounded-4": "", "h-full": "", "w-300": "", shadow: "", relative: "", "object-contain": "", "object-left-top": "" }, null, 8, ["field"])) : j("", true)];
    }), _: 1 })]), h(o).howToTitle && h(o).howToLinks.length > 0 ? (A(), R("div", cu, [k("p", du, F(h(o).howToTitle), 1), k("ul", { role: "list", "aria-label": `${h(o).howToTitle} links`, "mt-18": "", flex: "", "flex-wrap": "", "gap-x-32": "" }, [(A(true), R(at, null, ht(h(o).howToLinks, ({ href: T, label: P }, M) => (A(), R("li", { key: `how-to-link-${M}` }, [C(m, { "as-child": "" }, { default: _(() => [C(p, { "internal-component": "a", field: T, "un-text": "neutral-700 hocus:neutral-800", "transition-colors": "", "nq-arrow": "" }, { default: _(() => [nt(F(P), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, fu)])) : j("", true)])]), _: 1 })]), _: 1 }), h(o).techLinks.length > 0 ? (A(), O(w, { key: 0 }, { default: _(() => [C(d, { class: "trigger" }, { default: _(() => [nt(F(h(o).techGroupName) + " ", 1), c[1] || (c[1] = k("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1, __: [1] }), C(v, { "min-w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: _(() => [k("div", null, [k("ul", { "aria-label": `${h(o).techGroupName} links`, role: "link", grid: "~ cols-2 gap-x-8", "p-24": "" }, [(A(true), R(at, null, ht(h(o).techLinks, ({ label: T, href: P }) => (A(), R("li", { key: T, flex: "", "w-full": "", class: "link-item" }, [C(m, { "as-child": "" }, { default: _(() => [C(p, { "internal-component": "a", field: P }, { default: _(() => [nt(F(T), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, hu), c[2] || (c[2] = k("hr", { "bg-darkblue": "", "op-10": "", "h-1": "", "w-full": "" }, null, -1)), k("div", pu, [h(i).github ? (A(), O(p, { key: 0, "internal-component": "a", field: h(i).github.link, flex: "~ items-center gap-12", "un-text": "15 neutral-800", "pr-4": "", "flex-1": "", "nq-arrow": "", "after:ml--4": "", border: "r-1.5 solid darkblue/10" }, { default: _(() => [k("div", { class: Tt(h(i).github.icon), "text-20": "", "op-70": "" }, null, 2), nt(" " + F(h(o).githubLinkLabel), 1)]), _: 1 }, 8, ["field"])) : j("", true), C(x, { items: [("SocialMedia" in u ? u.SocialMedia : h(B)).reddit, ("SocialMedia" in u ? u.SocialMedia : h(B)).discord, ("SocialMedia" in u ? u.SocialMedia : h(B)).telegram], "text-18": "", "op-80": "", "flex-nowrap": "" }, null, 8, ["items"])])])]), _: 1 })]), _: 1 })) : j("", true), h(o).communityGroupName && h(o).communityLinks.length > 0 ? (A(), O(w, { key: 1 }, { default: _(() => [C(d, { class: "trigger" }, { default: _(() => [nt(F(h(o).communityGroupName) + " ", 1), c[3] || (c[3] = k("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1, __: [3] }), C(v, { "min-w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: _(() => [k("div", mu, [k("ul", { "aria-label": `${h(o).communityGroupName} links`, role: "link", flex: "~ col", "pb-24": "" }, [(A(true), R(at, null, ht(h(o).communityLinks, ({ label: T, href: P }) => (A(), R("li", { key: T, flex: "", "w-full": "", class: "link-item" }, [C(m, { "as-child": "" }, { default: _(() => [C(p, { "internal-component": "a", field: P }, { default: _(() => [nt(F(T), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, vu), c[4] || (c[4] = k("hr", { "bg-darkblue": "", "op-10": "", "h-1": "", "w-full": "" }, null, -1)), C(x, { items: [("SocialMedia" in u ? u.SocialMedia : h(B)).x, ("SocialMedia" in u ? u.SocialMedia : h(B)).reddit, ("SocialMedia" in u ? u.SocialMedia : h(B)).facebook, ("SocialMedia" in u ? u.SocialMedia : h(B)).youtube, ("SocialMedia" in u ? u.SocialMedia : h(B)).instagram, ("SocialMedia" in u ? u.SocialMedia : h(B)).discord, ("SocialMedia" in u ? u.SocialMedia : h(B)).telegram, ("SocialMedia" in u ? u.SocialMedia : h(B)).nimiqForum, ("SocialMedia" in u ? u.SocialMedia : h(B)).github], "text-18": "", "mt-16": "", "op-80": "" }, null, 8, ["items"])])]), _: 1 })]), _: 1 })) : j("", true), h(o).projectGroupName && h(a).length > 0 ? (A(), O(w, { key: 2 }, { default: _(() => [C(d, { class: "trigger" }, { default: _(() => [nt(F(h(o).projectGroupName) + " ", 1), c[5] || (c[5] = k("div", { "i-nimiq:chevron-down": "" }, null, -1))]), _: 1, __: [5] }), C(v, { "min-w-240": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: _(() => [k("div", gu, [k("ul", { "aria-label": `${h(o).projectGroupName} links`, role: "link", flex: "~ col" }, [(A(true), R(at, null, ht(h(o).projectLinks, ({ label: T, href: P }) => (A(), R("li", { key: T, flex: "", "w-full": "", class: "link-item" }, [C(m, { "as-child": "" }, { default: _(() => [C(p, { "internal-component": "a", field: P }, { default: _(() => [nt(F(T), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, yu)])]), _: 1 })]), _: 1 })) : j("", true), h(o).getStartedGroupName && h(o).getStartedLinks.length > 0 ? (A(), O(w, { key: 3 }, { default: _(() => [C(d, { "ml-16": "", "nq-pill-lg": "", class: Tt(l ? " home nq-pill-secondary" : "nq-pill-blue") }, { default: _(() => [nt(F(h(o).getStartedGroupName), 1)]), _: 1 }, 8, ["class"]), C(v, { "min-w-max": "", "left-0": "", "top-0": "", absolute: "", "motion-from-end:animate-enter-from-right": "", "motion-from-start:animate-enter-from-left": "", "motion-to-end:animate-exit-to-right": "", "motion-to-start:animate-exit-to-left": "" }, { default: _(() => [k("ul", { "aria-label": `${h(o).getStartedGroupName} links`, role: "link", "p-16": "", flex: "", divide: "x-1 solid darkblue/10 hover:transparent" }, [(A(true), R(at, null, ht(h(o).getStartedLinks, ({ label: T, href: P, description: M }) => (A(), R("li", { key: T, flex: "", "max-w-240": "", "w-full": "", "transition-border": "" }, [C(m, { "as-child": "" }, { default: _(() => [C(p, { "internal-component": "a", field: P, flex: "~ col gap-12", bg: "hocus:darkblue/6", "un-text": "darkblue/90 hocus:darkblue", "p-24": "", "rounded-4": "", "w-full": "", "transition-colors": "" }, { default: _(() => [k("p", wu, F(T), 1), k("p", xu, F(M), 1)]), _: 2 }, 1032, ["field"])]), _: 2 }, 1024)]))), 128))], 8, bu)]), _: 1 })]), _: 1 })) : j("", true), C(y, { flex: "~ items-end justify-center", "transition-transform": "", "top-full": "", "z-100": "", "of-hidden": "", "drop-shadow": "", "data-hidden:op-0": "", "data-hidden:animate-fade-out": "", "data-visible:animate-fade-in": "" }), C(y, { animate: "data-visible:fade-in data-hidden:fade-out", transition: "all transform ease duration-200", w: "$reka-navigation-menu-indicator-size", flex: "~ items-end justify-center", "translate-x": "$reka-navigation-menu-indicator-position", "duration-200": "", "top-full": "", absolute: "", "z-100": "", "z-12": "", "of-hidden": "", "data-hidden:op-0": "" }, { default: _(() => c[6] || (c[6] = [k("div", { "h-12": "", "w-24": "", relative: "", "i-nimiq:tooltip-triangle": "" }, null, -1)])), _: 1, __: [6] })]), _: 1 }), k("div", Tu, [C(S, { transition: "[width,height]", h: "$reka-navigation-menu-viewport-height", animate: "scale-in data-closed:scale-out", "min-w": "$reka-navigation-menu-viewport-width", "mt-12": "", "rounded-12": "", "bg-white": "", shadow: "", "origin-top-center": "", "duration-300": "", relative: "", "z-1": "", "of-hidden": "", "animate-scale-in": "", outline: "1.5 offset--1.5 ~ neutral-200" })])]), _: 1 })) : j("", true);
  };
} }), Pu = Object.assign(Su, { __name: "NavigationDesktop" }), Cs = (t) => (e) => typeof e == "string" && e.startsWith(t), Yn = Cs("--"), _u = Cs("var(--"), Zn = (t) => _u(t) ? Au.test(t.split("/*")[0].trim()) : false, Au = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, we = {};
function ks(t) {
  for (const e in t) we[e] = t[e], Yn(e) && (we[e].isCSSVariable = true);
}
function Me(t, e) {
  const n = typeof t == "string" ? `${t}Context` : e, i = Symbol(n);
  return [(s) => {
    const r = _r(i, s);
    if (r === void 0) throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(", ")}` : `\`${t}\``}`);
    return r;
  }, (s) => (Ar(i, s), s)];
}
const [Mu, Cu] = Me("Motion"), [ku, Em] = Me("LayoutGroup");
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
function Eu(t, e) {
  return typeof t != typeof e ? true : Array.isArray(t) && Array.isArray(e) ? !Du(t, e) : t !== e;
}
function Du(t, e) {
  const n = e.length;
  if (n !== t.length) return false;
  for (let i = 0; i < n; i++) if (e[i] !== t[i]) return false;
  return true;
}
function Ri(t) {
  return t == null ? void 0 : t.startsWith("--");
}
const Vu = (t) => t;
function Lu(t) {
  return typeof t == "number";
}
const Ru = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], Ou = new Set(Ru);
function Es(t) {
  return Ou.has(t);
}
class $u {
  constructor(e) {
    this.features = [];
    const { features: n = [], lazyMotionContext: i } = e.options, o = n.concat(i.features.value);
    this.features = o.map((s) => new s(e));
    const a = this.features;
    _t(i.features, (s) => {
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
const Jn = /* @__PURE__ */ new WeakMap(), [Bu, Dm] = Me("AnimatePresenceContext");
function Fu(t) {
  return typeof t == "string" || t === false || Array.isArray(t);
}
const ut = (t) => t, Ne = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Iu(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), o = false, a = false;
  const s = /* @__PURE__ */ new WeakSet();
  let r = { delta: 0, timestamp: 0, isProcessing: false };
  function l(c) {
    s.has(c) && (u.schedule(c), t()), c(r);
  }
  const u = { schedule: (c, d = false, f = false) => {
    const m = f && o ? n : i;
    return d && s.add(c), m.has(c) || m.add(c), c;
  }, cancel: (c) => {
    i.delete(c), s.delete(c);
  }, process: (c) => {
    if (r = c, o) {
      a = true;
      return;
    }
    o = true, [n, i] = [i, n], n.forEach(l), n.clear(), o = false, a && (a = false, u.process(c));
  } };
  return u;
}
const Ct = {}, ju = 40;
function Ds(t, e) {
  let n = false, i = true;
  const o = { delta: 0, timestamp: 0, isProcessing: false }, a = () => n = true, s = Ne.reduce((g, S) => (g[S] = Iu(a), g), {}), { setup: r, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: p, postRender: m } = s, v = () => {
    const g = Ct.useManualTiming ? o.timestamp : performance.now();
    n = false, Ct.useManualTiming || (o.delta = i ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, ju), 1)), o.timestamp = g, o.isProcessing = true, r.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), p.process(o), m.process(o), o.isProcessing = false, n && e && (i = false, t(v));
  }, w = () => {
    n = true, i = true, o.isProcessing || t(v);
  };
  return { schedule: Ne.reduce((g, S) => {
    const b = s[S];
    return g[S] = (T, P = false, M = false) => (n || w(), b.schedule(T, P, M)), g;
  }, {}), cancel: (g) => {
    for (let S = 0; S < Ne.length; S++) s[Ne[S]].cancel(g);
  }, state: o, steps: s };
}
const { schedule: N, cancel: kt, state: st, steps: dn } = Ds(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, true), Vs = /* @__PURE__ */ new WeakMap();
let Nu = 0;
const fn = /* @__PURE__ */ new Set();
class Uu {
  constructor(e, n) {
    var i;
    this.element = null, this.isSafeToRemove = false, this.isVShow = false, this.children = /* @__PURE__ */ new Set(), this.activeStates = { initial: true, animate: true }, this.currentProcess = null, this._context = null, this.animateUpdates = ut, this.id = `motion-state-${Nu++}`, this.options = e, this.parent = n, (i = n == null ? void 0 : n.children) == null || i.add(this), this.depth = (n == null ? void 0 : n.depth) + 1 || 0;
    const a = (e.initial === void 0 && e.variants ? this.context.initial : e.initial) === false ? ["initial", "animate"] : ["initial"];
    this.initTarget(a), this.featureManager = new $u(this), this.type = Es(this.options.as) ? "svg" : "html";
  }
  get context() {
    if (!this._context) {
      const e = { get: (n, i) => {
        var o;
        return Fu(this.options[i]) ? this.options[i] : (o = this.parent) == null ? void 0 : o.context[i];
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
    this.options = e, (n = this.visualElement) == null || n.update({ ...this.options, whileTap: this.options.whilePress }, { isPresent: !Jn.has(this.element) });
  }
  beforeMount() {
    this.featureManager.beforeMount();
  }
  mount(e, n, i = false) {
    var o;
    this.element = e, this.updateOptions(n), this.featureManager.mount(), !i && this.options.animate && ((o = this.startAnimation) == null || o.call(this)), this.options.layoutId && (fn.add(this.options.layoutId), N.render(() => {
      fn.clear();
    }));
  }
  clearAnimation() {
    var e, n;
    this.currentProcess && kt(this.currentProcess), this.currentProcess = null, (n = (e = this.visualElement) == null ? void 0 : e.variantChildren) == null || n.forEach((i) => {
      i.state.clearAnimation();
    });
  }
  startAnimation() {
    this.clearAnimation(), this.currentProcess = N.render(() => {
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
        e && Array.from(this.children).reverse().forEach(this.unmountChild), (s = (a = this.parent) == null ? void 0 : a.children) == null || s.delete(this), Vs.delete(this.element), this.featureManager.unmount(), (r = this.visualElement) == null || r.unmount(), this.clearAnimation();
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
function Oi(t, e, n) {
  return new CustomEvent(t, { detail: { target: e, isExit: n } });
}
const $i = { syntax: "<angle>", initialValue: "0deg", toDefaultUnit: (t) => `${t}deg` }, zu = { translate: { syntax: "<length-percentage>", initialValue: "0px", toDefaultUnit: (t) => `${t}px` }, rotate: $i, scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Vu }, skew: $i }, Hu = ["translate", "scale", "rotate", "skew"], Wu = ["", "X", "Y", "Z"], Qn = /* @__PURE__ */ new Map(), Je = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
Hu.forEach((t) => {
  Wu.forEach((e) => {
    Je.push(t + e), Qn.set(t + e, zu[t]);
  });
});
const Ku = new Set(Je), Gu = (t) => Ku.has(t), Bi = { x: "translateX", y: "translateY", z: "translateZ" };
function qu([t], [e]) {
  return Je.indexOf(t) - Je.indexOf(e);
}
function Xu(t, [e, n]) {
  return `${t} ${e}(${n})`;
}
function Yu(t) {
  return t.sort(qu).reduce(Xu, "").trim();
}
const Fi = { translate: [0, 0], rotate: 0, scale: 1, skew: 0, x: 0, y: 0, z: 0 }, Ce = (t) => ({ test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1, parse: parseFloat, transform: (e) => `${e}${t}` }), Ot = Ce("deg"), St = Ce("%"), E = Ce("px"), Zu = Ce("vh"), Ju = Ce("vw"), Ii = { ...St, parse: (t) => St.parse(t) / 100, transform: (t) => St.transform(t * 100) }, Q = (t) => !!(t && t.getVelocity), Qu = { get: (t, e) => {
  let n = Ri(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
  if (!n && n !== "0") {
    const i = Qn.get(e);
    i && (n = i.initialValue);
  }
  return n;
}, set: (t, e, n) => {
  Ri(e) ? t.style.setProperty(e, n) : t.style[e] = n;
} };
function tc(t) {
  var e;
  const n = {}, i = [];
  for (let o in t) {
    let a = t[o];
    a = Q(a) ? a.get() : a, Gu(o) && o in Bi && (o = Bi[o]);
    let s = Array.isArray(a) ? a[0] : a;
    const r = Qn.get(o);
    r ? (s = Lu(a) ? (e = r.toDefaultUnit) == null ? void 0 : e.call(r, a) : a, i.push([o, s])) : n[o] = s;
  }
  return i.length && (n.transform = Yu(i)), Object.keys(n).length === 0 ? null : n;
}
const ec = { fill: true, stroke: true, opacity: true, "stroke-width": true, "fill-opacity": true, "stroke-opacity": true, "stroke-linecap": true, "stroke-linejoin": true, "stroke-dasharray": true, "stroke-dashoffset": true, cx: true, cy: true, r: true, d: true, x1: true, y1: true, x2: true, y2: true, points: true, "path-length": true, viewBox: true, width: true, height: true, "preserve-aspect-ratio": true, "clip-path": true, filter: true, mask: true, "stop-color": true, "stop-opacity": true, "gradient-transform": true, "gradient-units": true, "spread-method": true, "marker-end": true, "marker-mid": true, "marker-start": true, "text-anchor": true, "dominant-baseline": true, "font-family": true, "font-size": true, "font-weight": true, "letter-spacing": true, "vector-effect": true };
function nc(t) {
  return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function ic(t, e, n = 1, i = 0) {
  t.pathLength = 1, delete t["path-length"], t["stroke-dashoffset"] = E.transform(-i);
  const o = E.transform(e), a = E.transform(n);
  t["stroke-dasharray"] = `${o} ${a}`;
}
function oc(t) {
  const e = {}, n = {};
  for (const i in t) {
    const o = nc(i);
    if (o in ec) {
      const a = t[i];
      e[o] = Q(a) ? a.get() : a;
    } else n[i] = t[i];
  }
  return e["path-length"] !== void 0 && ic(e, e["path-length"], e["path-spacing"], e["path-offset"]), { attrs: e, style: n };
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ji = (t) => typeof t < "u";
function sc({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function ac(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function rc(t, e) {
  return sc(ac(t.getBoundingClientRect(), e));
}
const Ni = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, _n = {};
for (const t in Ni) _n[t] = { isEnabled: (e) => Ni[t].some((n) => !!e[n]) };
const Ui = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), Zt = () => ({ x: Ui(), y: Ui() }), zi = () => ({ min: 0, max: 0 }), Y = () => ({ x: zi(), y: zi() }), lc = typeof window < "u", Qe = { current: null }, Ls = { current: false };
function uc() {
  if (Ls.current = true, !!lc) if (window.matchMedia) {
    const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Qe.current = t.matches;
    t.addEventListener("change", e), e();
  } else Qe.current = false;
}
function cc(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function dc(t) {
  return typeof t == "string" || Array.isArray(t);
}
const fc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], hc = ["initial", ...fc];
function Rs(t) {
  return cc(t.animate) || hc.some((e) => dc(t[e]));
}
function pc(t) {
  return !!(Rs(t) || t.variants);
}
let Ke;
function mc() {
  Ke = void 0;
}
const lt = { now: () => (Ke === void 0 && lt.set(st.isProcessing || Ct.useManualTiming ? st.timestamp : performance.now()), Ke), set: (t) => {
  Ke = t, queueMicrotask(mc);
} };
function ti(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ln(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class ei {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return ti(this.subscriptions, e), () => ln(this.subscriptions, e);
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
function Os(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Hi = 30, vc = (t) => !isNaN(parseFloat(t));
class gc {
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, o = true) => {
      var a, s;
      const r = lt.now();
      if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((a = this.events.change) == null || a.notify(this.current), this.dependents)) for (const l of this.dependents) l.dirty();
      o && ((s = this.events.renderRequest) == null || s.notify(this.current));
    }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = lt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = vc(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ei());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), N.read(() => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Hi) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Hi);
    return Os(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new gc(t, e);
}
function yc(t, e, n) {
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
function Wi(t) {
  const e = [{}, {}];
  return t == null ? void 0 : t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function $s(t, e, n, i) {
  if (typeof e == "function") {
    const [o, a] = Wi(i);
    e = e(n !== void 0 ? n : t.custom, o, a);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [o, a] = Wi(i);
    e = e(n !== void 0 ? n : t.custom, o, a);
  }
  return e;
}
function bc(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const Ut = (t) => t * 180 / Math.PI, An = (t) => {
  const e = Ut(Math.atan2(t[1], t[0]));
  return Mn(e);
}, wc = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2, rotate: An, rotateZ: An, skewX: (t) => Ut(Math.atan(t[1])), skewY: (t) => Ut(Math.atan(t[2])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2 }, Mn = (t) => (t = t % 360, t < 0 && (t += 360), t), Ki = An, Gi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), qi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), xc = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Gi, scaleY: qi, scale: (t) => (Gi(t) + qi(t)) / 2, rotateX: (t) => Mn(Ut(Math.atan2(t[6], t[5]))), rotateY: (t) => Mn(Ut(Math.atan2(-t[2], t[0]))), rotateZ: Ki, rotate: Ki, skewX: (t) => Ut(Math.atan(t[4])), skewY: (t) => Ut(Math.atan(t[1])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2 };
function Cn(t) {
  return t.includes("scale") ? 1 : 0;
}
function kn(t, e) {
  if (!t || t === "none") return Cn(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, o;
  if (n) i = xc, o = n;
  else {
    const r = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = wc, o = r;
  }
  if (!o) return Cn(e);
  const a = i[e], s = o[1].split(",").map(Sc);
  return typeof a == "function" ? a(s) : s[a];
}
const Tc = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return kn(n, e);
};
function Sc(t) {
  return parseFloat(t.trim());
}
const se = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], ae = new Set(se), Et = (t, e, n) => n > e ? e : n < t ? t : n, re = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t }, xe = { ...re, transform: (t) => Et(0, 1, t) }, Ue = { ...re, default: 1 }, Xi = (t) => t === re || t === E, Pc = /* @__PURE__ */ new Set(["x", "y", "z"]), _c = se.filter((t) => !Pc.has(t));
function Ac(t) {
  const e = [];
  return _c.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Ht = { width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), top: (t, { top: e }) => parseFloat(e), left: (t, { left: e }) => parseFloat(e), bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min), right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min), x: (t, { transform: e }) => kn(e, "x"), y: (t, { transform: e }) => kn(e, "y") };
Ht.translateX = Ht.x;
Ht.translateY = Ht.y;
const Wt = /* @__PURE__ */ new Set();
let En = false, Dn = false, Vn = false;
function Bs() {
  if (Dn) {
    const t = Array.from(Wt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const o = Ac(i);
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
  Dn = false, En = false, Wt.forEach((t) => t.complete(Vn)), Wt.clear();
}
function Fs() {
  Wt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Dn = true);
  });
}
function Mc() {
  Vn = true, Fs(), Bs(), Vn = false;
}
class ni {
  constructor(e, n, i, o, a, s = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = o, this.element = a, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Wt.add(this), En || (En = true, N.read(Fs), N.resolveKeyframes(Bs))) : (this.readKeyframes(), this.complete());
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
    bc(e);
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
const Is = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), js = (t) => /^0[^.\s]+$/u.test(t), me = (t) => Math.round(t * 1e5) / 1e5, ii = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cc(t) {
  return t == null;
}
const kc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, oi = (t, e) => (n) => !!(typeof n == "string" && kc.test(n) && n.startsWith(t) || e && !Cc(n) && Object.prototype.hasOwnProperty.call(n, e)), Ns = (t, e, n) => (i) => {
  if (typeof i != "string") return i;
  const [o, a, s, r] = i.match(ii);
  return { [t]: parseFloat(o), [e]: parseFloat(a), [n]: parseFloat(s), alpha: r !== void 0 ? parseFloat(r) : 1 };
}, Ec = (t) => Et(0, 255, t), hn = { ...re, transform: (t) => Math.round(Ec(t)) }, zt = { test: oi("rgb", "red"), parse: Ns("red", "green", "blue"), transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + hn.transform(t) + ", " + hn.transform(e) + ", " + hn.transform(n) + ", " + me(xe.transform(i)) + ")" };
function Dc(t) {
  let e = "", n = "", i = "", o = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, i += i, o += o), { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(i, 16), alpha: o ? parseInt(o, 16) / 255 : 1 };
}
const Ln = { test: oi("#"), parse: Dc, transform: zt.transform }, Jt = { test: oi("hsl", "hue"), parse: Ns("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + St.transform(me(e)) + ", " + St.transform(me(n)) + ", " + me(xe.transform(i)) + ")" }, J = { test: (t) => zt.test(t) || Ln.test(t) || Jt.test(t), parse: (t) => zt.test(t) ? zt.parse(t) : Jt.test(t) ? Jt.parse(t) : Ln.parse(t), transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? zt.transform(t) : Jt.transform(t), getAnimatableNone: (t) => {
  const e = J.parse(t);
  return e.alpha = 0, J.transform(e);
} }, Vc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Lc(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(ii)) == null ? void 0 : e.length) || 0) + (((n = t.match(Vc)) == null ? void 0 : n.length) || 0) > 0;
}
const Us = "number", zs = "color", Rc = "var", Oc = "var(", Yi = "${}", $c = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Te(t) {
  const e = t.toString(), n = [], i = { color: [], number: [], var: [] }, o = [];
  let a = 0;
  const r = e.replace($c, (l) => (J.test(l) ? (i.color.push(a), o.push(zs), n.push(J.parse(l))) : l.startsWith(Oc) ? (i.var.push(a), o.push(Rc), n.push(l)) : (i.number.push(a), o.push(Us), n.push(parseFloat(l))), ++a, Yi)).split(Yi);
  return { values: n, split: r, indexes: i, types: o };
}
function Hs(t) {
  return Te(t).values;
}
function Ws(t) {
  const { split: e, types: n } = Te(t), i = e.length;
  return (o) => {
    let a = "";
    for (let s = 0; s < i; s++) if (a += e[s], o[s] !== void 0) {
      const r = n[s];
      r === Us ? a += me(o[s]) : r === zs ? a += J.transform(o[s]) : a += o[s];
    }
    return a;
  };
}
const Bc = (t) => typeof t == "number" ? 0 : J.test(t) ? J.getAnimatableNone(t) : t;
function Fc(t) {
  const e = Hs(t);
  return Ws(t)(e.map(Bc));
}
const Bt = { test: Lc, parse: Hs, createTransformer: Ws, getAnimatableNone: Fc }, Ic = { test: (t) => t === "auto", parse: (t) => t }, Ks = (t) => (e) => e.test(t), Gs = [re, E, St, Ot, Ju, Zu, Ic], Zi = (t) => Gs.find(Ks(t)), jc = [...Gs, J, Bt], Nc = (t) => jc.find(Ks(t)), Uc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function zc(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [i] = n.match(ii) || [];
  if (!i) return t;
  const o = n.replace(i, "");
  let a = Uc.has(e) ? 1 : 0;
  return i !== n && (a *= 100), e + "(" + a + o + ")";
}
const Hc = /\b([a-z-]*)\(.*?\)/gu, Rn = { ...Bt, getAnimatableNone: (t) => {
  const e = t.match(Hc);
  return e ? e.map(zc).join(" ") : t;
} }, Ji = { ...re, transform: Math.round }, Wc = { rotate: Ot, rotateX: Ot, rotateY: Ot, rotateZ: Ot, scale: Ue, scaleX: Ue, scaleY: Ue, scaleZ: Ue, skew: Ot, skewX: Ot, skewY: Ot, distance: E, translateX: E, translateY: E, translateZ: E, x: E, y: E, z: E, perspective: E, transformPerspective: E, opacity: xe, originX: Ii, originY: Ii, originZ: E }, si = { borderWidth: E, borderTopWidth: E, borderRightWidth: E, borderBottomWidth: E, borderLeftWidth: E, borderRadius: E, radius: E, borderTopLeftRadius: E, borderTopRightRadius: E, borderBottomRightRadius: E, borderBottomLeftRadius: E, width: E, maxWidth: E, height: E, maxHeight: E, top: E, right: E, bottom: E, left: E, padding: E, paddingTop: E, paddingRight: E, paddingBottom: E, paddingLeft: E, margin: E, marginTop: E, marginRight: E, marginBottom: E, marginLeft: E, backgroundPositionX: E, backgroundPositionY: E, ...Wc, zIndex: Ji, fillOpacity: xe, strokeOpacity: xe, numOctaves: Ji }, Kc = { ...si, color: J, backgroundColor: J, outlineColor: J, fill: J, stroke: J, borderColor: J, borderTopColor: J, borderRightColor: J, borderBottomColor: J, borderLeftColor: J, filter: Rn, WebkitFilter: Rn }, qs = (t) => Kc[t];
function Xs(t, e) {
  let n = qs(t);
  return n !== Rn && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Qi = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Ys {
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: o, blockInitialAnimation: a, visualState: s }, r = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ni, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = lt.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, N.render(this.render, false, true));
    };
    const { latestValues: l, renderState: u } = s;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = o, this.options = r, this.blockInitialAnimation = !!a, this.isControllingVariants = Rs(n), this.isVariantNode = pc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && Q(p) && p.set(l[f], false);
    }
  }
  mount(e) {
    this.current = e, Kt.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), Ls.current || uc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Qe.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), kt(this.notifyUpdate), kt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
      this.latestValues[e] = r, this.props.onUpdate && N.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = true);
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
    for (e in _n) {
      const n = _n[e];
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
    for (let i = 0; i < Qi.length; i++) {
      const o = Qi[i];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = "on" + o, s = e[a];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = yc(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return i != null && (typeof i == "string" && (Is(i) || js(i)) ? i = parseFloat(i) : !Nc(i) && Bt.test(n) && (i = Xs(e, n)), this.setBaseTarget(e, Q(i) ? i.get() : i)), Q(i) ? i.get() : i;
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: i } = this.props;
    let o;
    if (typeof i == "string" || typeof i == "object") {
      const s = $s(this.props, i, (n = this.presenceContext) == null ? void 0 : n.custom);
      s && (o = s[e]);
    }
    if (i && o !== void 0) return o;
    const a = this.getBaseTargetFromProps(this.props, e);
    return a !== void 0 && !Q(a) ? a : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ei()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
const Zs = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...se]);
let ai = () => {
};
const Gc = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function qc(t) {
  const e = Gc.exec(t);
  if (!e) return [,];
  const [, n, i, o] = e;
  return [`--${n ?? i}`, o];
}
function Js(t, e, n = 1) {
  const [i, o] = qc(t);
  if (!i) return;
  const a = window.getComputedStyle(e).getPropertyValue(i);
  if (a) {
    const s = a.trim();
    return Is(s) ? parseFloat(s) : s;
  }
  return Zn(o) ? Js(o, e, n + 1) : o;
}
function Xc(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || js(t) : true;
}
const Yc = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Zc(t, e, n) {
  let i = 0, o;
  for (; i < t.length && !o; ) {
    const a = t[i];
    typeof a == "string" && !Yc.has(a) && Te(a).values.length && (o = t[i]), i++;
  }
  if (o && n) for (const a of e) t[a] = Xs(n, o);
}
class Jc extends ni {
  constructor(e, n, i, o, a) {
    super(e, n, i, o, a, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Zn(u))) {
        const c = Js(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Zs.has(i) || e.length !== 2) return;
    const [o, a] = e, s = Zi(o), r = Zi(a);
    if (s !== r) if (Xi(s) && Xi(r)) for (let l = 0; l < e.length; l++) {
      const u = e[l];
      typeof u == "string" && (e[l] = parseFloat(u));
    }
    else Ht[i] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let o = 0; o < e.length; o++) (e[o] === null || Xc(e[o])) && i.push(o);
    i.length && Zc(e, i, n);
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
    o[s] = Ht[i](n.measureViewportBox(), window.getComputedStyle(n.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (e = this.removedTransforms) != null && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
class Qs extends Ys {
  constructor() {
    super(...arguments), this.KeyframeResolver = Jc;
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
const ta = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Qc = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, td = se.length;
function ed(t, e, n) {
  let i = "", o = true;
  for (let a = 0; a < td; a++) {
    const s = se[a], r = t[s];
    if (r === void 0) continue;
    let l = true;
    if (typeof r == "number" ? l = r === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(r) === 0, !l || n) {
      const u = ta(r, si[s]);
      if (!l) {
        o = false;
        const c = Qc[s] || s;
        i += `${c}(${u}) `;
      }
      n && (e[s] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, o ? "" : i) : o && (i = "none"), i;
}
function ea(t, e, n) {
  const { style: i, vars: o, transformOrigin: a } = t;
  let s = false, r = false;
  for (const l in e) {
    const u = e[l];
    if (ae.has(l)) {
      s = true;
      continue;
    } else if (Yn(l)) {
      o[l] = u;
      continue;
    } else {
      const c = ta(u, si[l]);
      l.startsWith("origin") ? (r = true, a[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (s || n ? i.transform = ed(e, t.transform, n) : i.transform && (i.transform = "none")), r) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = a;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
function na(t, { style: e, vars: n }, i, o) {
  const a = t.style;
  let s;
  for (s in e) a[s] = e[s];
  o == null ? void 0 : o.applyProjectionStyles(a, i);
  for (s in n) a.setProperty(s, n[s]);
}
function nd(t, { layout: e, layoutId: n }) {
  return ae.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!we[t] || t === "opacity");
}
function ia(t, e, n) {
  var i;
  const { style: o } = t, a = {};
  for (const s in o) (Q(o[s]) || e.style && Q(e.style[s]) || nd(s, t) || ((i = n == null ? void 0 : n.getValue(s)) == null ? void 0 : i.liveStyle) !== void 0) && (a[s] = o[s]);
  return a;
}
function id(t) {
  return window.getComputedStyle(t);
}
class oa extends Qs {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = na;
  }
  readValueFromInstance(e, n) {
    var i;
    if (ae.has(n)) return (i = this.projection) != null && i.isProjecting ? Cn(n) : Tc(e, n);
    {
      const o = id(e), a = (Yn(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return rc(e, n);
  }
  build(e, n, i) {
    ea(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return ia(e, n, i);
  }
}
const ri = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), od = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, sd = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ad(t, e, n = 1, i = 0, o = true) {
  t.pathLength = 1;
  const a = o ? od : sd;
  t[a.offset] = E.transform(-i);
  const s = E.transform(e), r = E.transform(n);
  t[a.array] = `${s} ${r}`;
}
function rd(t, { attrX: e, attrY: n, attrScale: i, pathLength: o, pathSpacing: a = 1, pathOffset: s = 0, ...r }, l, u, c) {
  if (ea(t, r, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: f } = t;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete d.transformBox), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), o !== void 0 && ad(d, o, a, s, false);
}
const sa = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), ld = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ud(t, e, n, i) {
  na(t, e, void 0, i);
  for (const o in e.attrs) t.setAttribute(sa.has(o) ? o : ri(o), e.attrs[o]);
}
function cd(t, e, n) {
  const i = ia(t, e, n);
  for (const o in t) if (Q(t[o]) || Q(e[o])) {
    const a = se.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
    i[a] = t[o];
  }
  return i;
}
class aa extends Qs {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ae.has(n)) {
      const i = qs(n);
      return i && i.default || 0;
    }
    return n = sa.has(n) ? n : ri(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return cd(e, n, i);
  }
  build(e, n, i) {
    rd(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, o) {
    ud(e, n, i, o);
  }
  mount(e) {
    this.isSVGTag = ld(e.tagName), super.mount(e);
  }
}
function dd(t, e) {
  return Es(t) ? new aa(e) : new oa(e);
}
function li(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function ui(t, e, n) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let i = document;
    const o = (n == null ? void 0 : n[t]) ?? i.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
function ra(t, e, n, i) {
  return typeof t == "string" && li(e) ? ui(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function fd(t, e, n) {
  return t * (e + 1);
}
function to(t, e, n, i) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t;
}
const z = (t, e, n) => t + (e - t) * n, hd = (t, e, n) => {
  const i = e - t;
  return ((n - t) % i + i) % i + t;
}, la = (t) => Array.isArray(t) && typeof t[0] != "number";
function ua(t, e) {
  return la(t) ? t[hd(0, t.length, e)] : t;
}
function pd(t, e, n) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    o.at > e && o.at < n && (ln(t, o), i--);
  }
}
function md(t, e, n, i, o, a) {
  pd(t, o, a);
  for (let s = 0; s < e.length; s++) t.push({ value: e[s], at: z(o, a, i[s]), easing: ua(n, s) });
}
function vd(t, e) {
  for (let n = 0; n < t.length; n++) t[n] = t[n] / (e + 1);
}
function gd(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const ne = (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
};
function ca(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const o = ne(0, e, i);
    t.push(z(n, 1, o));
  }
}
function da(t) {
  const e = [0];
  return ca(e, t.length - 1), e;
}
const tn = 2e4;
function ci(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < tn; ) e += n, i = t.next(e);
  return e >= tn ? 1 / 0 : e;
}
const yt = (t) => t * 1e3, Pt = (t) => t / 1e3;
function fa(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), o = Math.min(ci(i), tn);
  return { type: "keyframes", ease: (a) => i.next(o * a).value / e, duration: Pt(o) };
}
function di(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
const yd = "easeInOut";
function bd(t, { defaultTransition: e = {}, ...n } = {}, i, o) {
  const a = e.duration || 0.3, s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = {}, u = /* @__PURE__ */ new Map();
  let c = 0, d = 0, f = 0;
  for (let p = 0; p < t.length; p++) {
    const m = t[p];
    if (typeof m == "string") {
      u.set(m, d);
      continue;
    } else if (!Array.isArray(m)) {
      u.set(m.name, to(d, m.at, c, u));
      continue;
    }
    let [v, w, x = {}] = m;
    x.at !== void 0 && (d = to(d, x.at, c, u));
    let y = 0;
    const g = (S, b, T, P = 0, M = 0) => {
      const L = wd(S), { delay: G = 0, times: tt = da(L), type: dt = "keyframes", repeat: bt, repeatType: Ft, repeatDelay: mt = 0, ...$ } = b;
      let { ease: vt = e.ease || "easeOut", duration: W } = b;
      const De = typeof G == "function" ? G(P, M) : G, Ve = L.length, le = di(dt) ? dt : o == null ? void 0 : o[dt || "keyframes"];
      if (Ve <= 2 && le) {
        let Lt = 100;
        if (Ve === 2 && Sd(L)) {
          const wt = L[1] - L[0];
          Lt = Math.abs(wt);
        }
        const qt = { ...$ };
        W !== void 0 && (qt.duration = yt(W));
        const Xt = fa(qt, Lt, le);
        vt = Xt.ease, W = Xt.duration;
      }
      W ?? (W = a);
      const Le = d + De;
      tt.length === 1 && tt[0] === 0 && (tt[1] = 1);
      const Re = tt.length - L.length;
      if (Re > 0 && ca(tt, Re), L.length === 1 && L.unshift(null), bt) {
        W = fd(W, bt);
        const Lt = [...L], qt = [...tt];
        vt = Array.isArray(vt) ? [...vt] : [vt];
        const Xt = [...vt];
        for (let wt = 0; wt < bt; wt++) {
          L.push(...Lt);
          for (let Rt = 0; Rt < Lt.length; Rt++) tt.push(qt[Rt] + (wt + 1)), vt.push(Rt === 0 ? "linear" : ua(Xt, Rt - 1));
        }
        vd(tt, bt);
      }
      const Oe = Le + W;
      md(T, L, vt, tt, Le, Oe), y = Math.max(De + W, y), f = Math.max(Oe, f);
    };
    if (Q(v)) {
      const S = eo(v, r);
      g(w, x, no("default", S));
    } else {
      const S = ra(v, w, i, l), b = S.length;
      for (let T = 0; T < b; T++) {
        w = w, x = x;
        const P = S[T], M = eo(P, r);
        for (const L in w) g(w[L], xd(x, L), no(L, M), T, b);
      }
    }
    c = d, d += y;
  }
  return r.forEach((p, m) => {
    for (const v in p) {
      const w = p[v];
      w.sort(gd);
      const x = [], y = [], g = [];
      for (let b = 0; b < w.length; b++) {
        const { at: T, value: P, easing: M } = w[b];
        x.push(P), y.push(ne(0, f, T)), g.push(M || "easeOut");
      }
      y[0] !== 0 && (y.unshift(0), x.unshift(x[0]), g.unshift(yd)), y[y.length - 1] !== 1 && (y.push(1), x.push(null)), s.has(m) || s.set(m, { keyframes: {}, transition: {} });
      const S = s.get(m);
      S.keyframes[v] = x, S.transition[v] = { ...e, duration: f, ease: g, times: y, ...n };
    }
  }), s;
}
function eo(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function no(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function wd(t) {
  return Array.isArray(t) ? t : [t];
}
function xd(t, e) {
  return t && t[e] ? { ...t, ...t[e] } : { ...t };
}
const Td = (t) => typeof t == "number", Sd = (t) => t.every(Td), Pd = (t) => Array.isArray(t);
function _d(t, e, n) {
  const i = t.getProps();
  return $s(i, e, i.custom, t);
}
function Ad(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ee(n));
}
function Md(t) {
  return Pd(t) ? t[t.length - 1] || 0 : t;
}
function Cd(t, e) {
  const n = _d(t, e);
  let { transitionEnd: i = {}, transition: o = {}, ...a } = n || {};
  a = { ...a, ...i };
  for (const s in a) {
    const r = Md(a[s]);
    Ad(t, s, r);
  }
}
function kd(t) {
  return !!(Q(t) && t.add);
}
function Ed(t, e) {
  const n = t.getValue("willChange");
  if (kd(n)) return n.add(e);
  if (!n && Ct.WillChange) {
    const i = new Ct.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
const Dd = "framerAppearId", Vd = "data-" + ri(Dd);
function ha(t) {
  return t.props[Vd];
}
const Ld = (t) => t !== null;
function Rd(t, { repeat: e, repeatType: n = "loop" }, i) {
  const o = t.filter(Ld), a = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return o[a];
}
const Od = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, $d = (t) => ({ type: "spring", stiffness: 550, damping: t === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), Bd = { type: "keyframes", duration: 0.8 }, Fd = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, Id = (t, { keyframes: e }) => e.length > 2 ? Bd : ae.has(t) ? t.startsWith("scale") ? $d(e[1]) : Od : Fd;
function jd({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: o, repeat: a, repeatType: s, repeatDelay: r, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function fi(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
function pn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Nd({ hue: t, saturation: e, lightness: n, alpha: i }) {
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
}, Ud = [Ln, zt, Jt], zd = (t) => Ud.find((e) => e.test(t));
function io(t) {
  const e = zd(t);
  if (!e) return false;
  let n = e.parse(t);
  return e === Jt && (n = Nd(n)), n;
}
const oo = (t, e) => {
  const n = io(t), i = io(e);
  if (!n || !i) return en(t, e);
  const o = { ...n };
  return (a) => (o.red = mn(n.red, i.red, a), o.green = mn(n.green, i.green, a), o.blue = mn(n.blue, i.blue, a), o.alpha = z(n.alpha, i.alpha, a), zt.transform(o));
}, On = /* @__PURE__ */ new Set(["none", "hidden"]);
function Hd(t, e) {
  return On.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
const Wd = (t, e) => (n) => e(t(n)), ke = (...t) => t.reduce(Wd);
function Kd(t, e) {
  return (n) => z(t, e, n);
}
function hi(t) {
  return typeof t == "number" ? Kd : typeof t == "string" ? Zn(t) ? en : J.test(t) ? oo : Xd : Array.isArray(t) ? pa : typeof t == "object" ? J.test(t) ? oo : Gd : en;
}
function pa(t, e) {
  const n = [...t], i = n.length, o = t.map((a, s) => hi(a)(a, e[s]));
  return (a) => {
    for (let s = 0; s < i; s++) n[s] = o[s](a);
    return n;
  };
}
function Gd(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const o in n) t[o] !== void 0 && e[o] !== void 0 && (i[o] = hi(t[o])(t[o], e[o]));
  return (o) => {
    for (const a in i) n[a] = i[a](o);
    return n;
  };
}
function qd(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const a = e.types[o], s = t.indexes[a][i[a]], r = t.values[s] ?? 0;
    n[o] = r, i[a]++;
  }
  return n;
}
const Xd = (t, e) => {
  const n = Bt.createTransformer(e), i = Te(t), o = Te(e);
  return i.indexes.var.length === o.indexes.var.length && i.indexes.color.length === o.indexes.color.length && i.indexes.number.length >= o.indexes.number.length ? On.has(t) && !o.values.length || On.has(e) && !i.values.length ? Hd(t, e) : ke(pa(qd(i, o), o.values), n) : en(t, e);
};
function ma(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? z(t, e, n) : hi(t)(t, e);
}
const Yd = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return { start: (n = true) => N.update(e, n), stop: () => kt(e), now: () => st.isProcessing ? st.timestamp : lt.now() };
}, va = (t, e, n = 10) => {
  let i = "";
  const o = Math.max(Math.round(e / n), 2);
  for (let a = 0; a < o; a++) i += Math.round(t(a / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, Zd = 5;
function ga(t, e, n) {
  const i = Math.max(e - Zd, 0);
  return Os(n - t(i), e - i);
}
const q = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, so = 1e-3;
function Jd({ duration: t = q.duration, bounce: e = q.bounce, velocity: n = q.velocity, mass: i = q.mass }) {
  let o, a, s = 1 - e;
  s = Et(q.minDamping, q.maxDamping, s), t = Et(q.minDuration, q.maxDuration, Pt(t)), s < 1 ? (o = (u) => {
    const c = u * s, d = c * t, f = c - n, p = $n(u, s), m = Math.exp(-d);
    return so - f / p * m;
  }, a = (u) => {
    const d = u * s * t, f = d * n + n, p = Math.pow(s, 2) * Math.pow(u, 2) * t, m = Math.exp(-d), v = $n(Math.pow(u, 2), s);
    return (-o(u) + so > 0 ? -1 : 1) * ((f - p) * m) / v;
  }) : (o = (u) => {
    const c = Math.exp(-u * t), d = (u - n) * t + 1;
    return -1e-3 + c * d;
  }, a = (u) => {
    const c = Math.exp(-u * t), d = (n - u) * (t * t);
    return c * d;
  });
  const r = 5 / t, l = tf(o, a, r);
  if (t = yt(t), isNaN(l)) return { stiffness: q.stiffness, damping: q.damping, duration: t };
  {
    const u = Math.pow(l, 2) * i;
    return { stiffness: u, damping: s * 2 * Math.sqrt(i * u), duration: t };
  }
}
const Qd = 12;
function tf(t, e, n) {
  let i = n;
  for (let o = 1; o < Qd; o++) i = i - t(i) / e(i);
  return i;
}
function $n(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const ef = ["duration", "bounce"], nf = ["stiffness", "damping", "mass"];
function ao(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function of(t) {
  let e = { velocity: q.velocity, stiffness: q.stiffness, damping: q.damping, mass: q.mass, isResolvedFromDuration: false, ...t };
  if (!ao(t, nf) && ao(t, ef)) if (t.visualDuration) {
    const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), o = i * i, a = 2 * Et(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
    e = { ...e, mass: q.mass, stiffness: o, damping: a };
  } else {
    const n = Jd(t);
    e = { ...e, ...n, mass: q.mass }, e.isResolvedFromDuration = true;
  }
  return e;
}
function Se(t = q.visualDuration, e = q.bounce) {
  const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: i, restDelta: o } = n;
  const a = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], r = { done: false, value: a }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: p } = of({ ...n, velocity: -Pt(n.velocity || 0) }), m = f || 0, v = u / (2 * Math.sqrt(l * c)), w = s - a, x = Pt(Math.sqrt(l / c)), y = Math.abs(w) < 5;
  i || (i = y ? q.restSpeed.granular : q.restSpeed.default), o || (o = y ? q.restDelta.granular : q.restDelta.default);
  let g;
  if (v < 1) {
    const b = $n(x, v);
    g = (T) => {
      const P = Math.exp(-v * x * T);
      return s - P * ((m + v * x * w) / b * Math.sin(b * T) + w * Math.cos(b * T));
    };
  } else if (v === 1) g = (b) => s - Math.exp(-x * b) * (w + (m + x * w) * b);
  else {
    const b = x * Math.sqrt(v * v - 1);
    g = (T) => {
      const P = Math.exp(-v * x * T), M = Math.min(b * T, 300);
      return s - P * ((m + v * x * w) * Math.sinh(M) + b * w * Math.cosh(M)) / b;
    };
  }
  const S = { calculatedDuration: p && d || null, next: (b) => {
    const T = g(b);
    if (p) r.done = b >= d;
    else {
      let P = b === 0 ? m : 0;
      v < 1 && (P = b === 0 ? yt(m) : ga(g, b, T));
      const M = Math.abs(P) <= i, L = Math.abs(s - T) <= o;
      r.done = M && L;
    }
    return r.value = r.done ? s : T, r;
  }, toString: () => {
    const b = Math.min(ci(S), tn), T = va((P) => S.next(b * P).value, b, 30);
    return b + "ms " + T;
  }, toTransition: () => {
  } };
  return S;
}
Se.applyToOptions = (t) => {
  const e = fa(t, 100, Se);
  return t.ease = e.ease, t.duration = yt(e.duration), t.type = "keyframes", t;
};
function Bn({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: s, min: r, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = t[0], f = { done: false, value: d }, p = (M) => r !== void 0 && M < r || l !== void 0 && M > l, m = (M) => r === void 0 ? l : l === void 0 || Math.abs(r - M) < Math.abs(l - M) ? r : l;
  let v = n * e;
  const w = d + v, x = s === void 0 ? w : s(w);
  x !== w && (v = x - d);
  const y = (M) => -v * Math.exp(-M / i), g = (M) => x + y(M), S = (M) => {
    const L = y(M), G = g(M);
    f.done = Math.abs(L) <= u, f.value = f.done ? x : G;
  };
  let b, T;
  const P = (M) => {
    p(f.value) && (b = M, T = Se({ keyframes: [f.value, m(f.value)], velocity: ga(g, M, f.value), damping: o, stiffness: a, restDelta: u, restSpeed: c }));
  };
  return P(0), { calculatedDuration: null, next: (M) => {
    let L = false;
    return !T && b === void 0 && (L = true, S(M), P(M)), b !== void 0 && M >= b ? T.next(M - b) : (!L && S(M), f);
  } };
}
function sf(t, e, n) {
  const i = [], o = n || Ct.mix || ma, a = t.length - 1;
  for (let s = 0; s < a; s++) {
    let r = o(t[s], t[s + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[s] || ut : e;
      r = ke(l, r);
    }
    i.push(r);
  }
  return i;
}
function af(t, e, { clamp: n = true, ease: i, mixer: o } = {}) {
  const a = t.length;
  if (ai(a === e.length), a === 1) return () => e[0];
  if (a === 2 && e[0] === e[1]) return () => e[1];
  const s = t[0] === t[1];
  t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const r = sf(e, i, o), l = r.length, u = (c) => {
    if (s && c < t[0]) return e[0];
    let d = 0;
    if (l > 1) for (; d < t.length - 2 && !(c < t[d + 1]); d++) ;
    const f = ne(t[d], t[d + 1], c);
    return r[d](f);
  };
  return n ? (c) => u(Et(t[0], t[a - 1], c)) : u;
}
function rf(t, e) {
  return t.map((n) => n * e);
}
const ya = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, lf = 1e-7, uf = 12;
function cf(t, e, n, i, o) {
  let a, s, r = 0;
  do
    s = e + (n - e) / 2, a = ya(s, i, o) - t, a > 0 ? n = s : e = s;
  while (Math.abs(a) > lf && ++r < uf);
  return s;
}
function Ee(t, e, n, i) {
  if (t === e && n === i) return ut;
  const o = (a) => cf(a, 0, 1, t, n);
  return (a) => a === 0 || a === 1 ? a : ya(o(a), e, i);
}
const df = Ee(0.42, 0, 1, 1), ff = Ee(0, 0, 0.58, 1), ba = Ee(0.42, 0, 0.58, 1), wa = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, xa = (t) => (e) => 1 - t(1 - e), Ta = Ee(0.33, 1.53, 0.69, 0.99), pi = xa(Ta), Sa = wa(pi), Pa = (t) => (t *= 2) < 1 ? 0.5 * pi(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), mi = (t) => 1 - Math.sin(Math.acos(t)), _a = xa(mi), Aa = wa(mi), Ma = (t) => Array.isArray(t) && typeof t[0] == "number", hf = { linear: ut, easeIn: df, easeInOut: ba, easeOut: ff, circIn: mi, circInOut: Aa, circOut: _a, backIn: pi, backInOut: Sa, backOut: Ta, anticipate: Pa }, pf = (t) => typeof t == "string", ro = (t) => {
  if (Ma(t)) {
    ai(t.length === 4);
    const [e, n, i, o] = t;
    return Ee(e, n, i, o);
  } else if (pf(t)) return hf[t];
  return t;
};
function mf(t, e) {
  return t.map(() => e || ba).splice(0, t.length - 1);
}
function ve({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const o = la(i) ? i.map(ro) : ro(i), a = { done: false, value: e[0] }, s = rf(n && n.length === e.length ? n : da(e), t), r = af(s, e, { ease: Array.isArray(o) ? o : mf(e, o) });
  return { calculatedDuration: t, next: (l) => (a.value = r(l), a.done = l >= t, a) };
}
const vf = (t) => t !== null;
function vi(t, { repeat: e, repeatType: n = "loop" }, i, o = 1) {
  const a = t.filter(vf), r = o < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
  return !r || i === void 0 ? a[r] : i;
}
const gf = { decay: Bn, inertia: Bn, tween: ve, keyframes: ve, spring: Se };
function Ca(t) {
  typeof t.type == "string" && (t.type = gf[t.type]);
}
class gi {
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
const yf = (t) => t / 100;
class yi extends gi {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var n, i;
      const { motionValue: o } = this.options;
      o && o.updatedAt !== lt.now() && this.tick(lt.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (i = (n = this.options).onStop) == null || i.call(n));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Ca(e);
    const { type: n = ve, repeat: i = 0, repeatDelay: o = 0, repeatType: a, velocity: s = 0 } = e;
    let { keyframes: r } = e;
    const l = n || ve;
    l !== ve && typeof r[0] != "number" && (this.mixKeyframes = ke(yf, ma(r[0], r[1])), r = [0, 100]);
    const u = l({ ...e, keyframes: r });
    a === "mirror" && (this.mirroredGenerator = l({ ...e, keyframes: [...r].reverse(), velocity: -s })), u.calculatedDuration === null && (u.calculatedDuration = ci(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + o, this.totalDuration = this.resolvedDuration * (i + 1) - o, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = false) {
    const { generator: i, totalDuration: o, mixKeyframes: a, mirroredGenerator: s, resolvedDuration: r, calculatedDuration: l } = this;
    if (this.startTime === null) return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: d, repeatType: f, repeatDelay: p, type: m, onUpdate: v, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - o / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), y = this.playbackSpeed >= 0 ? x < 0 : x > o;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let g = this.currentTime, S = i;
    if (d) {
      const M = Math.min(this.currentTime, o) / r;
      let L = Math.floor(M), G = M % 1;
      !G && M >= 1 && (G = 1), G === 1 && L--, L = Math.min(L, d + 1), !!(L % 2) && (f === "reverse" ? (G = 1 - G, p && (G -= p / r)) : f === "mirror" && (S = s)), g = Et(0, 1, G) * r;
    }
    const b = y ? { done: false, value: c[0] } : S.next(g);
    a && (b.value = a(b.value));
    let { done: T } = b;
    !y && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return P && m !== Bn && (b.value = vi(c, this.options, w, this.speed)), v && v(b.value), P && this.finish(), b;
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return Pt(this.calculatedDuration);
  }
  get time() {
    return Pt(this.currentTime);
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
    this.playbackSpeed = e, n && (this.time = Pt(this.currentTime));
  }
  play() {
    var e, n;
    if (this.isStopped) return;
    const { driver: i = Yd, startTime: o } = this.options;
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
const bf = (t) => t.startsWith("--");
function wf(t, e, n) {
  bf(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
function bi(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const xf = bi(() => window.ScrollTimeline !== void 0), Tf = {};
function Sf(t, e) {
  const n = bi(t);
  return () => Tf[e] ?? n();
}
const ka = Sf(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), fe = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, lo = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: fe([0, 0.65, 0.55, 1]), circOut: fe([0.55, 0, 1, 0.45]), backIn: fe([0.31, 0.01, 0.66, -0.59]), backOut: fe([0.33, 1.53, 0.69, 0.99]) };
function Ea(t, e) {
  if (t) return typeof t == "function" ? ka() ? va(t, e) : "ease-out" : Ma(t) ? fe(t) : Array.isArray(t) ? t.map((n) => Ea(n, e) || lo.easeOut) : lo[t];
}
function Pf(t, e, n, { delay: i = 0, duration: o = 300, repeat: a = 0, repeatType: s = "loop", ease: r = "easeOut", times: l } = {}, u = void 0) {
  const c = { [e]: n };
  l && (c.offset = l);
  const d = Ea(r, o);
  Array.isArray(d) && (c.easing = d);
  const f = { delay: i, duration: o, easing: Array.isArray(d) ? "linear" : d, fill: "both", iterations: a + 1, direction: s === "reverse" ? "alternate" : "normal" };
  return u && (f.pseudoElement = u), t.animate(c, f);
}
function _f({ type: t, ...e }) {
  return di(t) && ka() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Af extends gi {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = false, !e) return;
    const { element: n, name: i, keyframes: o, pseudoElement: a, allowFlatten: s = false, finalKeyframe: r, onComplete: l } = e;
    this.isPseudoElement = !!a, this.allowFlatten = s, this.options = e, ai(typeof e.type != "string");
    const u = _f(e);
    this.animation = Pf(n, i, o, u, a), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !a) {
        const c = vi(o, this.options, r, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : wf(n, i, c), this.animation.cancel();
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
    return Pt(Number(i));
  }
  get time() {
    return Pt(Number(this.animation.currentTime) || 0);
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
    return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && xf() ? (this.animation.timeline = e, ut) : n(this);
  }
}
const Da = { anticipate: Pa, backInOut: Sa, circInOut: Aa };
function Mf(t) {
  return t in Da;
}
function Cf(t) {
  typeof t.ease == "string" && Mf(t.ease) && (t.ease = Da[t.ease]);
}
const uo = 10;
class kf extends Af {
  constructor(e) {
    Cf(e), Ca(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: o, element: a, ...s } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const r = new yi({ ...s, autoplay: false }), l = yt(this.finishedTime ?? this.time);
    n.setWithVelocity(r.sample(l - uo).value, r.sample(l).value, uo), r.stop();
  }
}
const co = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Bt.test(t) || t === "0") && !t.startsWith("url("));
function Ef(t) {
  const e = t[0];
  if (t.length === 1) return true;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
}
function Df(t, e, n, i) {
  const o = t[0];
  if (o === null) return false;
  if (e === "display" || e === "visibility") return true;
  const a = t[t.length - 1], s = co(o, e), r = co(a, e);
  return !s || !r ? false : Ef(t) || (n === "spring" || di(n)) && i;
}
function Va(t) {
  return typeof t == "object" && t !== null;
}
function La(t) {
  return Va(t) && "offsetHeight" in t;
}
const Vf = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), Lf = bi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Rf(t) {
  var e;
  const { motionValue: n, name: i, repeatDelay: o, repeatType: a, damping: s, type: r } = t;
  if (!La((e = n == null ? void 0 : n.owner) == null ? void 0 : e.current)) return false;
  const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
  return Lf() && i && Vf.has(i) && (i !== "transform" || !u) && !l && !o && a !== "mirror" && s !== 0 && r !== "inertia";
}
const Of = 40;
class $f extends gi {
  constructor({ autoplay: e = true, delay: n = 0, type: i = "keyframes", repeat: o = 0, repeatDelay: a = 0, repeatType: s = "loop", keyframes: r, name: l, motionValue: u, element: c, ...d }) {
    var f;
    super(), this.stop = () => {
      var v, w;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (w = this.keyframeResolver) == null || w.cancel();
    }, this.createdAt = lt.now();
    const p = { autoplay: e, delay: n, type: i, repeat: o, repeatDelay: a, repeatType: s, name: l, motionValue: u, element: c, ...d }, m = (c == null ? void 0 : c.KeyframeResolver) || ni;
    this.keyframeResolver = new m(r, (v, w, x) => this.onKeyframesResolved(v, w, p, !x), l, u, c), (f = this.keyframeResolver) == null || f.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, o) {
    this.keyframeResolver = void 0;
    const { name: a, type: s, velocity: r, delay: l, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = lt.now(), Df(e, a, s, r) || ((Ct.instantAnimations || !l) && (c == null ? void 0 : c(vi(e, i, n))), e[0] = e[e.length - 1], i.duration = 0, i.repeat = 0);
    const f = { startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > Of ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: n, ...i, keyframes: e }, p = !u && Rf(f) ? new kf({ ...f, element: f.motionValue.owner.current }) : new yi(f);
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
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), Mc()), this._animation;
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
const wi = (t, e, n, i = {}, o, a) => (s) => {
  const r = fi(i, t) || {}, l = r.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - yt(l);
  const c = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: e.getVelocity(), ...r, delay: -u, onUpdate: (f) => {
    e.set(f), r.onUpdate && r.onUpdate(f);
  }, onComplete: () => {
    s(), r.onComplete && r.onComplete();
  }, name: t, motionValue: e, element: a ? void 0 : o };
  jd(r) || Object.assign(c, Id(t, c)), c.duration && (c.duration = yt(c.duration)), c.repeatDelay && (c.repeatDelay = yt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = false;
  if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = true)), (Ct.instantAnimations || Ct.skipAnimations) && (d = true, c.duration = 0, c.delay = 0), c.allowFlatten = !r.type && !r.ease, d && !a && e.get() !== void 0) {
    const f = Rd(c.keyframes, r);
    if (f !== void 0) {
      N.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return r.isSync ? new yi(c) : new $f(c);
};
function Bf({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== true;
  return e[n] = false, i;
}
function Ff(t, e, { delay: n = 0, transitionOverride: i, type: o } = {}) {
  let { transition: a = t.getDefaultTransition(), transitionEnd: s, ...r } = e;
  i && (a = i);
  const l = [], u = o && t.animationState && t.animationState.getState()[o];
  for (const c in r) {
    const d = t.getValue(c, t.latestValues[c] ?? null), f = r[c];
    if (f === void 0 || u && Bf(u, c)) continue;
    const p = { delay: n, ...fi(a || {}, c) }, m = d.get();
    if (m !== void 0 && !d.isAnimating && !Array.isArray(f) && f === m && !p.velocity) continue;
    let v = false;
    if (window.MotionHandoffAnimation) {
      const x = ha(t);
      if (x) {
        const y = window.MotionHandoffAnimation(x, c, N);
        y !== null && (p.startTime = y, v = true);
      }
    }
    Ed(t, c), d.start(wi(c, d, f, t.shouldReduceMotion && Zs.has(c) ? { type: false } : p, t, v));
    const w = d.animation;
    w && l.push(w);
  }
  return s && Promise.all(l).then(() => {
    N.update(() => {
      s && Cd(t, s);
    });
  }), l;
}
function If(t, e) {
  return t in e;
}
class jf extends Ys {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, n) {
    if (If(n, e)) {
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
function xi(t) {
  return Va(t) && "ownerSVGElement" in t;
}
function Ra(t) {
  return xi(t) && t.tagName === "svg";
}
function Nf(t) {
  const e = { presenceContext: null, props: {}, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: {} } }, n = xi(t) && !Ra(t) ? new aa(e) : new oa(e);
  n.mount(t), Kt.set(t, n);
}
function Uf(t) {
  const e = { presenceContext: null, props: {}, visualState: { renderState: { output: {} }, latestValues: {} } }, n = new jf(e);
  n.mount(t), Kt.set(t, n);
}
function Oa(t, e, n) {
  const i = Q(t) ? t : ee(t);
  return i.start(wi("", i, e, n)), i.animation;
}
function zf(t, e) {
  return Q(t) || typeof t == "number" || typeof t == "string" && !li(e);
}
function $a(t, e, n, i) {
  const o = [];
  if (zf(t, e)) o.push(Oa(t, li(e) && e.default || e, n && (n.default || n)));
  else {
    const a = ra(t, e, i), s = a.length;
    for (let r = 0; r < s; r++) {
      const l = a[r], u = l instanceof Element ? Nf : Uf;
      Kt.has(l) || u(l);
      const c = Kt.get(l), d = { ...n };
      "delay" in d && typeof d.delay == "function" && (d.delay = d.delay(r, s)), o.push(...Ff(c, { ...e, transition: d }, {}));
    }
  }
  return o;
}
function Hf(t, e, n) {
  const i = [];
  return bd(t, e, n, { spring: Se }).forEach(({ keyframes: a, transition: s }, r) => {
    i.push(...$a(r, a, s));
  }), i;
}
class Wf {
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
class Kf extends Wf {
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function Gf(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function qf(t) {
  function e(n, i, o) {
    let a = [];
    return Gf(n) ? a = Hf(n, i, t) : a = $a(n, i, o, t), new Kf(a);
  }
  return e;
}
const Xf = qf(), Yf = ["initial", "animate", "whileInView", "whileHover", "whilePress", "whileDrag", "whileFocus", "exit"];
class Zf extends Vt {
  constructor(e) {
    var n;
    super(e), this.animateUpdates = ({ controlActiveState: i, directAnimate: o, directTransition: a, controlDelay: s = 0, isFallback: r, isExit: l } = {}) => {
      const { reducedMotion: u } = this.state.options.motionConfig;
      this.state.visualElement.shouldReduceMotion = u === "always" || u === "user" && !!Qe.current;
      const c = this.state.target;
      this.state.target = { ...this.state.baseTarget };
      let d = {};
      d = this.resolveStateAnimation({ controlActiveState: i, directAnimate: o, directTransition: a });
      const f = this.createAnimationFactories(c, d, s), { getChildAnimations: p } = this.setupChildAnimations(d, this.state.activeStates, r);
      return this.executeAnimations({ factories: f, getChildAnimations: p, transition: d, controlActiveState: i, isExit: l });
    }, this.state.visualElement = dd(this.state.options.as, { presenceContext: null, parent: (n = this.state.parent) == null ? void 0 : n.visualElement, props: { ...this.state.options, whileTap: this.state.options.whilePress }, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: { ...this.state.baseTarget } }, reducedMotionConfig: this.state.options.motionConfig.reducedMotion }), this.state.animateUpdates = this.animateUpdates, this.state.isMounted() && this.state.startAnimation();
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.state.options;
    Li(e) && (this.unmountControls = e.subscribe(this.state));
  }
  executeAnimations({ factories: e, getChildAnimations: n, transition: i, controlActiveState: o, isExit: a = false }) {
    const s = () => Promise.all(e.map((d) => d()).filter(Boolean)), r = { ...this.state.target }, l = this.state.element, u = (d) => {
      var f, p;
      l.dispatchEvent(Oi("motionstart", r)), (p = (f = this.state.options).onAnimationStart) == null || p.call(f, r), d.then(() => {
        var m, v;
        l.dispatchEvent(Oi("motioncomplete", r, a)), (v = (m = this.state.options).onAnimationComplete) == null || v.call(m, r);
      }).catch(ut);
    }, c = () => {
      const d = (i == null ? void 0 : i.when) ? (i.when === "beforeChildren" ? s() : n()).then(() => i.when === "beforeChildren" ? n() : s()) : Promise.all([s(), n()]);
      return u(d), d;
    };
    return o ? c : c();
  }
  setupChildAnimations(e, n, i) {
    var o;
    const a = this.state.visualElement;
    if (!((o = a.variantChildren) != null && o.size) || !n) return { getChildAnimations: () => Promise.resolve() };
    const { staggerChildren: s = 0, staggerDirection: r = 1, delayChildren: l = 0 } = e || {}, u = a.variantChildren.size, c = (u - 1) * s, d = typeof l == "function", f = d ? (m) => l(m, u) : r === 1 ? (m = 0) => m * s : (m = 0) => c - m * s, p = Array.from(a.variantChildren).map((m, v) => m.state.animateUpdates({ controlActiveState: n, controlDelay: (d ? 0 : l) + f(v) }));
    return { getChildAnimations: () => Promise.all(p.map((m) => m())) };
  }
  createAnimationFactories(e, n, i) {
    const o = [];
    return Object.keys(this.state.target).forEach((a) => {
      var s;
      if (!Eu(e[a], this.state.target[a])) return;
      (s = this.state.baseTarget)[a] ?? (s[a] = Qu.get(this.state.element, a));
      const r = this.state.target[a] === "none" && ji(Fi[a]) ? Fi[a] : this.state.target[a];
      o.push(() => {
        var l;
        return Xf(this.state.element, { [a]: r }, { ...(n == null ? void 0 : n[a]) || n, delay: (((l = n == null ? void 0 : n[a]) == null ? void 0 : l.delay) || (n == null ? void 0 : n.delay) || 0) + i });
      });
    }), o;
  }
  resolveStateAnimation({ controlActiveState: e, directAnimate: n, directTransition: i }) {
    let o = this.state.options.transition, a = {};
    const { variants: s, custom: r, transition: l, animatePresenceContext: u } = this.state.options, c = r ?? (u == null ? void 0 : u.custom);
    return this.state.activeStates = { ...this.state.activeStates, ...e }, Yf.forEach((d) => {
      if (!this.state.activeStates[d] || Li(this.state.options[d])) return;
      const f = this.state.options[d];
      let p = ji(f) ? pe(f, s, c) : void 0;
      if (this.state.visualElement.isVariantNode) {
        const m = pe(this.state.context[d], s, c);
        p = m ? Object.assign(m || {}, p) : a;
      }
      p && (d !== "initial" && (o = p.transition || this.state.options.transition || {}), a = Object.assign(a, p));
    }), n && (a = pe(n, s, c), o = a.transition || i || l), Object.entries(a).forEach(([d, f]) => {
      d !== "transition" && (this.state.target[d] = f);
    }), o;
  }
  mount() {
    const { element: e } = this.state;
    Vs.set(e, this.state), Kt.get(e) || (this.state.visualElement.mount(e), Kt.set(e, this.state.visualElement)), this.state.visualElement.state = this.state, this.updateAnimationControlsSubscription();
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
const Jf = { y: false };
function Qf() {
  return Jf.y;
}
const Ba = (t, e) => e ? t === e ? true : Ba(t, e.parentElement) : false, th = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
function Fa(t, e) {
  const n = ui(t), i = new AbortController(), o = { passive: true, ...e, signal: i.signal };
  return [n, o, () => i.abort()];
}
const eh = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function nh(t) {
  return eh.has(t.tagName) || t.tabIndex !== -1;
}
const Ge = /* @__PURE__ */ new WeakSet();
function fo(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function vn(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: true, bubbles: true }));
}
const ih = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const i = fo(() => {
    if (Ge.has(n)) return;
    vn(n, "down");
    const o = fo(() => {
      vn(n, "up");
    }), a = () => vn(n, "cancel");
    n.addEventListener("keyup", o, e), n.addEventListener("blur", a, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ho(t) {
  return th(t) && true;
}
function oh(t, e, n = {}) {
  const [i, o, a] = Fa(t, n), s = (r) => {
    const l = r.currentTarget;
    if (!ho(r)) return;
    Ge.add(l);
    const u = e(l, r), c = (p, m) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), Ge.has(l) && Ge.delete(l), ho(p) && typeof u == "function" && u(p, { success: m });
    }, d = (p) => {
      c(p, l === window || l === document || n.useGlobalTarget || Ba(l, p.target));
    }, f = (p) => {
      c(p, false);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return i.forEach((r) => {
    (n.useGlobalTarget ? window : r).addEventListener("pointerdown", s, o), La(r) && (r.addEventListener("focus", (u) => ih(u, o)), !nh(r) && !r.hasAttribute("tabindex") && (r.tabIndex = 0));
  }), a;
}
function Ia(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
function po(t, e, n) {
  const i = t.options;
  i.whilePress && t.setActive("whilePress", n === "Start");
  const o = `onPress${n === "End" ? "" : n}`, a = i[o];
  a && N.postRender(() => a(e, Ia(e)));
}
class sh extends Vt {
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
    !e || !this.isActive() || (this.unmount(), this.unmount = oh(e, (n, i) => (po(this.state, i, "Start"), (o, { success: a }) => po(this.state, o, a ? "End" : "Cancel")), { useGlobalTarget: this.state.options.globalPressTarget }));
  }
}
function mo(t) {
  return !(t.pointerType === "touch" || Qf());
}
function ah(t, e, n = {}) {
  const [i, o, a] = Fa(t, n), s = (r) => {
    if (!mo(r)) return;
    const { target: l } = r, u = e(l, r);
    if (typeof u != "function" || !l) return;
    const c = (d) => {
      mo(d) && (u(d), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, o);
  };
  return i.forEach((r) => {
    r.addEventListener("pointerenter", s, o);
  }), a;
}
function vo(t, e, n) {
  const i = t.options;
  i.whileHover && t.setActive("whileHover", n === "Start");
  const o = `onHover${n}`, a = i[o];
  a && N.postRender(() => a(e, Ia(e)));
}
class rh extends Vt {
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
    !e || !this.isActive() || (this.unmount(), this.unmount = ah(e, (n, i) => (vo(this.state, i, "Start"), (o) => {
      vo(this.state, o, "End");
    })));
  }
}
const lh = { some: 0, all: 1 };
function uh(t, e, { root: n, margin: i, amount: o = "some" } = {}) {
  const a = ui(t), s = /* @__PURE__ */ new WeakMap(), r = (u) => {
    u.forEach((c) => {
      const d = s.get(c.target);
      if (c.isIntersecting !== !!d) if (c.isIntersecting) {
        const f = e(c.target, c);
        typeof f == "function" ? s.set(c.target, f) : l.unobserve(c.target);
      } else typeof d == "function" && (d(c), s.delete(c.target));
    });
  }, l = new IntersectionObserver(r, { root: n, rootMargin: i, threshold: typeof o == "number" ? o : lh[o] });
  return a.forEach((u) => l.observe(u)), () => l.disconnect();
}
function go(t, e, n) {
  const i = t.options;
  i.whileInView && t.setActive("whileInView", n === "Enter");
  const o = `onViewport${n}`, a = i[o];
  a && N.postRender(() => a(e));
}
class ch extends Vt {
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
    this.unmount = uh(e, (o, a) => {
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
    ["amount", "margin", "root"].some(dh(e, n)) && this.startObserver();
  }
}
function dh({ inViewOptions: t = {} }, { inViewOptions: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
function nn(t, e, n, i = { passive: true }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
class fh extends Vt {
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
    this.unmount = ke(nn(this.state.element, "focus", () => this.onFocus()), nn(this.state.element, "blur", () => this.onBlur()));
  }
}
const hh = (t, e) => t.depth - e.depth;
class ph {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(e) {
    ti(this.children, e), this.isDirty = true;
  }
  remove(e) {
    ln(this.children, e), this.isDirty = true;
  }
  forEach(e) {
    this.isDirty && this.children.sort(hh), this.isDirty = false, this.children.forEach(e);
  }
}
function mh(t, e) {
  const n = lt.now(), i = ({ timestamp: o }) => {
    const a = o - n;
    a >= e && (kt(i), t(a - e));
  };
  return N.setup(i, true), () => kt(i);
}
function gn(t) {
  return Q(t) ? t.get() : t;
}
const ja = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], vh = ja.length, yo = (t) => typeof t == "string" ? parseFloat(t) : t, bo = (t) => typeof t == "number" || E.test(t);
function gh(t, e, n, i, o, a) {
  o ? (t.opacity = z(0, n.opacity ?? 1, yh(i)), t.opacityExit = z(e.opacity ?? 1, 0, bh(i))) : a && (t.opacity = z(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let s = 0; s < vh; s++) {
    const r = `border${ja[s]}Radius`;
    let l = wo(e, r), u = wo(n, r);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || bo(l) === bo(u) ? (t[r] = Math.max(z(yo(l), yo(u), i), 0), (St.test(u) || St.test(l)) && (t[r] += "%")) : t[r] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = z(e.rotate || 0, n.rotate || 0, i));
}
function wo(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const yh = Na(0, 0.5, _a), bh = Na(0.5, 0.95, ut);
function Na(t, e, n) {
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
function yn(t) {
  return t === void 0 || t === 1;
}
function Fn({ scale: t, scaleX: e, scaleY: n }) {
  return !yn(t) || !yn(e) || !yn(n);
}
function Nt(t) {
  return Fn(t) || Ua(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Ua(t) {
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
function In(t, e = 0, n = 1, i, o) {
  t.min = Po(t.min, e, n, i, o), t.max = Po(t.max, e, n, i, o);
}
function za(t, { x: e, y: n }) {
  In(t.x, e.translate, e.scale, e.originPoint), In(t.y, n.translate, n.scale, n.originPoint);
}
const _o = 0.999999999999, Ao = 1.0000000000001;
function wh(t, e, n, i = false) {
  const o = n.length;
  if (!o) return;
  e.x = e.y = 1;
  let a, s;
  for (let r = 0; r < o; r++) {
    a = n[r], s = a.projectionDelta;
    const { visualElement: l } = a.options;
    l && l.props.style && l.props.style.display === "contents" || (i && a.options.layoutScroll && a.scroll && a !== a.root && Qt(t, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }), s && (e.x *= s.x.scale, e.y *= s.y.scale, za(t, s)), i && Nt(a.latestValues) && Qt(t, a.latestValues));
  }
  e.x < Ao && e.x > _o && (e.x = 1), e.y < Ao && e.y > _o && (e.y = 1);
}
function ze(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Mo(t, e, n, i, o = 0.5) {
  const a = z(t.min, t.max, o);
  In(t, e, n, a, i);
}
function Qt(t, e) {
  Mo(t.x, e.x, e.scaleX, e.scale, e.originX), Mo(t.y, e.y, e.scaleY, e.scale, e.originY);
}
const Ha = 1e-4, xh = 1 - Ha, Th = 1 + Ha, Wa = 0.01, Sh = 0 - Wa, Ph = 0 + Wa;
function pt(t) {
  return t.max - t.min;
}
function _h(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Co(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = z(e.min, e.max, t.origin), t.scale = pt(n) / pt(e), t.translate = z(n.min, n.max, t.origin) - t.originPoint, (t.scale >= xh && t.scale <= Th || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Sh && t.translate <= Ph || isNaN(t.translate)) && (t.translate = 0);
}
function ge(t, e, n, i) {
  Co(t.x, e.x, n.x, i ? i.originX : void 0), Co(t.y, e.y, n.y, i ? i.originY : void 0);
}
function ko(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + pt(e);
}
function Ah(t, e, n) {
  ko(t.x, e.x, n.x), ko(t.y, e.y, n.y);
}
function Eo(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + pt(e);
}
function ye(t, e, n) {
  Eo(t.x, e.x, n.x), Eo(t.y, e.y, n.y);
}
function Do(t, e, n, i, o) {
  return t -= e, t = on(t, 1 / n, i), o !== void 0 && (t = on(t, 1 / o, i)), t;
}
function Mh(t, e = 0, n = 1, i = 0.5, o, a = t, s = t) {
  if (St.test(e) && (e = parseFloat(e), e = z(s.min, s.max, e / 100) - s.min), typeof e != "number") return;
  let r = z(a.min, a.max, i);
  t === a && (r -= e), t.min = Do(t.min, e, n, r, o), t.max = Do(t.max, e, n, r, o);
}
function Vo(t, e, [n, i, o], a, s) {
  Mh(t, e[n], e[i], e[o], e.scale, a, s);
}
const Ch = ["x", "scaleX", "originX"], kh = ["y", "scaleY", "originY"];
function Lo(t, e, n, i) {
  Vo(t.x, e, Ch, n ? n.x : void 0, i ? i.x : void 0), Vo(t.y, e, kh, n ? n.y : void 0, i ? i.y : void 0);
}
function Ro(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ka(t) {
  return Ro(t.x) && Ro(t.y);
}
function Oo(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Eh(t, e) {
  return Oo(t.x, e.x) && Oo(t.y, e.y);
}
function $o(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Ga(t, e) {
  return $o(t.x, e.x) && $o(t.y, e.y);
}
function Bo(t) {
  return pt(t.x) / pt(t.y);
}
function Fo(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Dh {
  constructor() {
    this.members = [];
  }
  add(e) {
    ti(this.members, e), e.scheduleRender();
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
function Vh(t, e, n) {
  let i = "";
  const o = t.x.translate / e.x, a = t.y.translate / e.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || a || s) && (i = `translate3d(${o}px, ${a}px, ${s}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: p, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), d && (i += `rotateX(${d}deg) `), f && (i += `rotateY(${f}deg) `), p && (i += `skewX(${p}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const r = t.x.scale * e.x, l = t.y.scale * e.y;
  return (r !== 1 || l !== 1) && (i += `scale(${r}, ${l})`), i || "none";
}
function Io(t) {
  return [t("x"), t("y")];
}
const qe = { hasAnimatedSinceResize: true, hasEverUpdated: false }, { schedule: Lh } = Ds(queueMicrotask, false), bn = ["", "X", "Y", "Z"], Rh = 1e3;
let Oh = 0;
function wn(t, e, n, i) {
  const { latestValues: o } = e;
  o[t] && (n[t] = o[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function qa(t) {
  if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = ha(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: a } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", N, !(o || a));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && qa(i);
}
function Xa({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: o }) {
  return class {
    constructor(s = {}, r = e == null ? void 0 : e()) {
      this.id = Oh++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(Fh), this.nodes.forEach(Uh), this.nodes.forEach(zh), this.nodes.forEach(Ih);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
      this.root === this && (this.nodes = new ph());
    }
    addEventListener(s, r) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new ei()), this.eventHandlers.get(s).add(r);
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
      this.isSVG = xi(s) && !Ra(s), this.instance = s;
      const { layoutId: r, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || r) && (this.isLayoutDirty = true), t) {
        let c, d = 0;
        const f = () => this.root.updateBlockedByResize = false;
        N.read(() => {
          d = window.innerWidth;
        }), t(s, () => {
          const p = window.innerWidth;
          p !== d && (d = p, this.root.updateBlockedByResize = true, c && c(), c = mh(f, 250), qe.hasAnimatedSinceResize && (qe.hasAnimatedSinceResize = false, this.nodes.forEach(Uo)));
        });
      }
      r && this.root.registerSharedNode(r, this), this.options.animate !== false && u && (r || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || qh, { onLayoutAnimationStart: v, onLayoutAnimationComplete: w } = u.getProps(), x = !this.targetLayout || !Ga(this.targetLayout, p), y = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || y || d && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const g = { ...fi(m, "layout"), onPlay: v, onComplete: w };
          (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = false), this.startAnimation(g), this.setAnimationOrigin(c, y);
        } else d || Uo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), kt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Hh), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && qa(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = true, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(false);
      }
      const { layoutId: r, layout: l } = this.options;
      if (r === void 0 && !l) return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
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
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(Nh), this.nodes.forEach($h), this.nodes.forEach(Bh)) : this.nodes.forEach(No), this.clearAllSnapshots();
      const r = lt.now();
      st.delta = Et(0, 1e3 / 60, r - st.timestamp), st.timestamp = r, st.isProcessing = true, dn.update.process(st), dn.preRender.process(st), dn.render.process(st), st.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, Lh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jh), this.sharedNodes.forEach(Wh);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, N.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      N.postRender(() => {
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
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, r = this.projectionDelta && !Ka(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      s && this.instance && (r || Nt(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(s = true) {
      const r = this.measurePageBox();
      let l = this.removeElementScroll(r);
      return s && (l = this.removeTransform(l)), Xh(l), { animationId: this.root.animationId, measuredBox: r, layoutBox: l, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var s;
      const { visualElement: r } = this.options;
      if (!r) return Y();
      const l = r.measureViewportBox();
      if (!(((s = this.scroll) == null ? void 0 : s.wasRoot) || this.path.some(Yh))) {
        const { scroll: c } = this.root;
        c && (ze(l.x, c.offset.x), ze(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var r;
      const l = Y();
      if (ft(l, s), (r = this.scroll) != null && r.wasRoot) return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && ft(l, s), ze(l.x, d.offset.x), ze(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, r = false) {
      const l = Y();
      ft(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !r && c.options.layoutScroll && c.scroll && c !== c.root && Qt(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), Nt(c.latestValues) && Qt(l, c.latestValues);
      }
      return Nt(this.latestValues) && Qt(l, this.latestValues), l;
    }
    removeTransform(s) {
      const r = Y();
      ft(r, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Nt(u.latestValues)) continue;
        Fn(u.latestValues) && u.updateSnapshot();
        const c = Y(), d = u.measurePageBox();
        ft(c, d), Lo(r, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Nt(this.latestValues) && Lo(r, this.latestValues), r;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== st.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(s = false) {
      var r;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || (r = this.parent) != null && r.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = st.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), ye(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ah(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ft(this.target, this.layout.layoutBox), za(this.target, this.targetDelta)) : ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = false;
          const p = this.getClosestProjectingParent();
          p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), ye(this.relativeTargetOrigin, this.target, p.target), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fn(this.parent.latestValues) || Ua(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const r = this.getLead(), l = !!this.resumingFrom || this !== r;
      let u = true;
      if ((this.isProjectionDirty || (s = this.parent) != null && s.isProjectionDirty) && (u = false), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = false), this.resolvedRelativeTargetAt === st.timestamp && (u = false), u) return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
      ft(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      wh(this.layoutCorrected, this.treeScale, this.path, l), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = Y());
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Zt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
      const f = Y(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, v = p !== m, w = this.getStack(), x = !w || w.members.length <= 1, y = !!(v && !x && this.options.crossfade === true && !this.path.some(Gh));
      this.animationProgress = 0;
      let g;
      this.mixTargetDelta = (S) => {
        const b = S / 1e3;
        zo(d.x, s.x, b), zo(d.y, s.y, b), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ye(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Kh(this.relativeTarget, this.relativeTargetOrigin, f, b), g && Eh(this.relativeTarget, g) && (this.isProjectionDirty = false), g || (g = Y()), ft(g, this.relativeTarget)), v && (this.animationValues = c, gh(c, u, this.latestValues, b, y, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var r, l, u;
      this.notifyListeners("animationStart"), (r = this.currentAnimation) == null || r.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (kt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = N.update(() => {
        qe.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = ee(0)), this.currentAnimation = Oa(this.motionValue, [0, 1e3], { ...s, velocity: 0, isSync: true, onUpdate: (c) => {
          this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: r, target: l, layout: u, latestValues: c } = s;
      if (!(!r || !l || !u)) {
        if (this !== s && this.layout && u && Ya(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Y();
          const d = pt(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + d;
          const f = pt(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + f;
        }
        ft(r, l), Qt(r, c), ge(this.projectionDeltaWithTransform, this.layoutCorrected, r, c);
      }
    }
    registerSharedNode(s, r) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Dh()), this.sharedNodes.get(s).add(r);
      const u = r.options.initialPromotionConfig;
      r.promote({ transition: u ? u.transition : void 0, preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(r) : void 0 });
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
      const u = this.getStack();
      u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = true), r && this.setOptions({ transition: r });
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
      const u = {};
      l.z && wn("z", s, u, this.animationValues);
      for (let c = 0; c < bn.length; c++) wn(`rotate${bn[c]}`, s, u, this.animationValues), wn(`skew${bn[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
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
        this.needsReset = false, s.visibility = "", s.opacity = "", s.pointerEvents = gn(r == null ? void 0 : r.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = gn(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Nt(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = false);
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = Vh(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), s.transform = d;
      const { x: f, y: p } = this.projectionDelta;
      s.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in we) {
        if (c[m] === void 0) continue;
        const { correct: v, applyTo: w, isCSSVariable: x } = we[m], y = d === "none" ? c[m] : v(c[m], u);
        if (w) {
          const g = w.length;
          for (let S = 0; S < g; S++) s[w[S]] = y;
        } else x ? this.options.visualElement.renderState.vars[m] = y : s[m] = y;
      }
      this.options.layoutId && (s.pointerEvents = u === this ? gn(r == null ? void 0 : r.pointerEvents) || "" : "none");
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
function $h(t) {
  t.updateLayout();
}
function Bh(t) {
  var e;
  const n = ((e = t.resumeFrom) == null ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: o } = t.layout, { animationType: a } = t.options, s = n.source !== t.layout.source;
    a === "size" ? Io((d) => {
      const f = s ? n.measuredBox[d] : n.layoutBox[d], p = pt(f);
      f.min = i[d].min, f.max = f.min + p;
    }) : Ya(a, n.layoutBox, i) && Io((d) => {
      const f = s ? n.measuredBox[d] : n.layoutBox[d], p = pt(i[d]);
      f.max = f.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[d].max = t.relativeTarget[d].min + p);
    });
    const r = Zt();
    ge(r, i, n.layoutBox);
    const l = Zt();
    s ? ge(l, t.applyTransform(o, true), n.measuredBox) : ge(l, i, n.layoutBox);
    const u = !Ka(r);
    let c = false;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = Y();
          ye(m, n.layoutBox, f.layoutBox);
          const v = Y();
          ye(v, i, p.layoutBox), Ga(m, v) || (c = true), d.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = m, t.relativeParent = d);
        }
      }
    }
    t.notifyListeners("didUpdate", { layout: i, snapshot: n, delta: l, layoutDelta: r, hasLayoutChanged: u, hasRelativeLayoutChanged: c });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function Fh(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Ih(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
}
function jh(t) {
  t.clearSnapshot();
}
function jo(t) {
  t.clearMeasurements();
}
function No(t) {
  t.isLayoutDirty = false;
}
function Nh(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Uo(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
}
function Uh(t) {
  t.resolveTargetDelta();
}
function zh(t) {
  t.calcProjection();
}
function Hh(t) {
  t.resetSkewAndRotation();
}
function Wh(t) {
  t.removeLeadSnapshot();
}
function zo(t, e, n) {
  t.translate = z(e.translate, 0, n), t.scale = z(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ho(t, e, n, i) {
  t.min = z(e.min, n.min, i), t.max = z(e.max, n.max, i);
}
function Kh(t, e, n, i) {
  Ho(t.x, e.x, n.x, i), Ho(t.y, e.y, n.y, i);
}
function Gh(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const qh = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, Wo = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ko = Wo("applewebkit/") && !Wo("chrome/") ? Math.round : ut;
function Go(t) {
  t.min = Ko(t.min), t.max = Ko(t.max);
}
function Xh(t) {
  Go(t.x), Go(t.y);
}
function Ya(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !_h(Bo(e), Bo(n), 0.2);
}
function Yh(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
function Zh(t, e, n, i = { passive: true }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
const Jh = Xa({ attachResizeListener: (t, e) => Zh(t, "resize", e), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), xn = { current: void 0 }, Qh = Xa({ measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }), defaultParent: () => {
  if (!xn.current) {
    const t = new Jh({});
    t.mount(window), t.setOptions({ layoutScroll: true }), xn.current = t;
  }
  return xn.current;
}, resetTransform: (t, e) => {
  t.style.transform = e !== void 0 ? e : "none";
}, checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed" });
function Za(t) {
  if (t) return t.options.allowProjection !== false ? t.projection : Za(t.parent);
}
function qo(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const de = { correct: (t, e) => {
  if (!e.target) return t;
  if (typeof t == "string") if (E.test(t)) t = parseFloat(t);
  else return t;
  const n = qo(t, e.target.x), i = qo(t, e.target.y);
  return `${n}% ${i}%`;
} }, tp = { correct: (t, { treeScale: e, projectionDelta: n }) => {
  const i = t, o = Bt.parse(t);
  if (o.length > 5) return i;
  const a = Bt.createTransformer(t), s = typeof o[0] != "number" ? 1 : 0, r = n.x.scale * e.x, l = n.y.scale * e.y;
  o[0 + s] /= r, o[1 + s] /= l;
  const u = z(r, l, 0.5);
  return typeof o[2 + s] == "number" && (o[2 + s] /= u), typeof o[3 + s] == "number" && (o[3 + s] /= u), a(o);
} }, Ja = { borderRadius: { ...de, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: de, borderTopRightRadius: de, borderBottomLeftRadius: de, borderBottomRightRadius: de, boxShadow: tp };
function he(t) {
  return typeof t == "object" && t !== null && "nodeType" in t;
}
class ep extends Vt {
  constructor(e) {
    super(e), ks(Ja);
  }
  initProjection() {
    const e = this.state.options;
    this.state.visualElement.projection = new Qh(this.state.visualElement.latestValues, e["data-framer-portal-id"] ? void 0 : Za(this.state.visualElement.parent)), this.state.visualElement.projection.isPresent = true, this.setOptions();
  }
  beforeMount() {
    this.initProjection();
  }
  setOptions() {
    const e = this.state.options;
    this.state.visualElement.projection.setOptions({ layout: e.layout, layoutId: e.layoutId, alwaysMeasureLayout: !!e.drag || e.dragConstraints && he(e.dragConstraints), visualElement: this.state.visualElement, animationType: typeof e.layout == "string" ? e.layout : "both", layoutRoot: e.layoutRoot, layoutScroll: e.layoutScroll, crossfade: e.crossfade, onExitComplete: () => {
      var n;
      if (!((n = this.state.visualElement.projection) != null && n.isPresent)) {
        const i = Jn.get(this.state.element);
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
function Qa(t) {
  return t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
}
function Ti(t, e = "page") {
  return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
}
function np(t) {
  return (e) => Qa(e) && t(e, Ti(e));
}
function be(t, e, n, i) {
  return nn(t, e, np(n), i);
}
function tr(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : false;
  };
}
const Xo = tr("dragHorizontal"), Yo = tr("dragVertical");
function ip(t) {
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
function jn(t) {
  return t.max - t.min;
}
function op(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? z(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? z(n, t, i.max) : Math.min(t, n)), t;
}
const Nn = 0.35;
function sp(t, { top: e, left: n, bottom: i, right: o }) {
  return { x: Zo(t.x, n, o), y: Zo(t.y, e, i) };
}
function Zo(t, e, n) {
  return { min: e !== void 0 ? t.min + e : void 0, max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0 };
}
function ap(t = Nn) {
  return t === false ? t = 0 : t === true && (t = Nn), { x: Jo(t, "left", "right"), y: Jo(t, "top", "bottom") };
}
function Jo(t, e, n) {
  return { min: Qo(t, e), max: Qo(t, n) };
}
function Qo(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
function rp(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
function lp(t, e) {
  return { x: ts(t.x, e.x), y: ts(t.y, e.y) };
}
function ts(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function up(t, e) {
  let n = 0.5;
  const i = jn(t), o = jn(e);
  return o > i ? n = ne(e.min, e.max - i, t.min) : i > o && (n = ne(t.min, t.max - o, e.min)), Et(0, 1, n);
}
const es = (t, e) => Math.abs(t - e);
function cp(t, e) {
  const n = es(t.x, e.x), i = es(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class er {
  constructor(e, n, { transformPagePoint: i, contextWindow: o, dragSnapToOrigin: a = false } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const d = Sn(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, p = cp(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !p) return;
      const { point: m } = d, { timestamp: v } = st;
      this.history.push({ ...m, timestamp: v });
      const { onStart: w, onMove: x } = this.handlers;
      f || (w && w(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Tn(f, this.transformPagePoint), N.update(this.updatePoint, true);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: p, onSessionEnd: m, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const w = Sn(d.type === "pointercancel" ? this.lastMoveEventInfo : Tn(f, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, w), m && m(d, w);
    }, !Qa(e)) return;
    this.dragSnapToOrigin = a, this.handlers = n, this.transformPagePoint = i, this.contextWindow = o || window;
    const s = Ti(e), r = Tn(s, this.transformPagePoint), { point: l } = r, { timestamp: u } = st;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, Sn(r, this.history)), this.removeListeners = ke(be(this.contextWindow, "pointermove", this.handlePointerMove), be(this.contextWindow, "pointerup", this.handlePointerUp), be(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), kt(this.updatePoint);
  }
}
function Tn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ns(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Sn({ point: t }, e) {
  return { point: t, delta: ns(t, nr(e)), offset: ns(t, dp(e)), velocity: fp(e, 0.1) };
}
function dp(t) {
  return t[0];
}
function nr(t) {
  return t[t.length - 1];
}
function fp(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const o = nr(t);
  for (; n >= 0 && (i = t[n], !(o.timestamp - i.timestamp > yt(e))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const a = Pt(o.timestamp - i.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - i.x) / a, y: (o.y - i.y) / a };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const is = () => ({ min: 0, max: 0 });
function hp() {
  return { x: is(), y: is() };
}
function xt(t) {
  return [t("x"), t("y")];
}
function pp(t) {
  return !!(Q(t) && t.add);
}
function os(t, e) {
  const n = t.getValue("willChange");
  if (pp(n)) return n.add(e);
}
function ir({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function mp(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function vp({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ss(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function gp(t, e) {
  return ir(mp(t.getBoundingClientRect(), e));
}
function yp(t, e, n) {
  const i = gp(t, n), { scroll: o } = e;
  return o && (ss(i.x, o.offset.x), ss(i.y, o.offset.y)), i;
}
function as(t) {
  return !Jn.has(t.current);
}
function or({ current: t }) {
  return t ? t.ownerDocument.defaultView : null;
}
const bp = /* @__PURE__ */ new WeakMap();
class wp {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = hp(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = false } = {}) {
    if (!as(this.visualElement)) return;
    const i = (u) => {
      const { dragSnapToOrigin: c } = this.getProps();
      c ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ti(u, "page").point);
    }, o = (u, c) => {
      const { drag: d, dragPropagation: f, onDragStart: p } = this.getProps();
      if (d && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ip(d), !this.openGlobalLock)) return;
      this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), xt((v) => {
        let w = this.getAxisMotionValue(v).get() || 0;
        if (St.test(w)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const y = x.layout.layoutBox[v];
            y && (w = jn(y) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[v] = w;
      }), p && N.postRender(() => p(u, c)), os(this.visualElement, "transform"), this.visualElement.state.setActive("whileDrag", true);
    }, a = (u, c) => {
      const { dragPropagation: d, dragDirectionLock: f, onDirectionLock: p, onDrag: m } = this.getProps();
      if (!d && !this.openGlobalLock) return;
      const { offset: v } = c;
      if (f && this.currentDirection === null) {
        this.currentDirection = xp(v), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, v), this.updateAxis("y", c.point, v), this.visualElement.render(), m && m(u, c);
    }, s = (u, c) => this.stop(u, c), r = () => xt((u) => {
      var c;
      return this.getAnimationState(u) === "paused" && ((c = this.getAxisMotionValue(u).animation) == null ? void 0 : c.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new er(e, { onSessionStart: i, onStart: o, onMove: a, onSessionEnd: s, resumeAnimation: r }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: l, contextWindow: or(this.visualElement) });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && N.postRender(() => a(e, n));
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
    this.constraints && this.constraints[e] && (s = op(s, this.constraints[e], this.elastic[e])), a.set(s);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (e = this.visualElement.projection) == null ? void 0 : e.layout, a = this.constraints;
    n && he(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = sp(o.layoutBox, n) : this.constraints = false, this.elastic = ap(i), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && xt((s) => {
      this.constraints !== false && this.getAxisMotionValue(s) && (this.constraints[s] = rp(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !he(e)) return false;
    const i = e, { projection: o } = this.visualElement;
    if (!o || !o.layout) return false;
    const a = yp(i, o.root, this.visualElement.getTransformPagePoint());
    let s = lp(o.layout.layoutBox, a);
    if (n) {
      const r = n(vp(s));
      this.hasMutatedConstraints = !!r, r && (s = ir(r));
    }
    return s;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: o, dragTransition: a, dragSnapToOrigin: s, onDragTransitionEnd: r } = this.getProps(), l = this.constraints || {}, u = xt((c) => {
      if (!He(c, n, this.currentDirection)) return;
      let d = l && l[c] || {};
      s && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, m = { type: "inertia", velocity: i ? e[c] : 0, bounceStiffness: f, bounceDamping: p, timeConstant: 750, restDelta: 1, restSpeed: 10, ...a, ...d };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(r);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return os(this.visualElement, e), i.start(wi(e, i, 0, n, this.visualElement, false));
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
        o[s] = up({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), xt((s) => {
      if (!He(s, e, null)) return;
      const r = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
      r.set(z(l, u, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    bp.set(this.visualElement, this);
    const e = this.visualElement.current, n = be(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = true } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      he(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), N.read(i);
    const s = nn(window, "resize", () => this.scalePositionWithinConstraints()), r = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (xt((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), a(), r && r();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: i = false, dragPropagation: o = false, dragConstraints: a = false, dragElastic: s = Nn, dragMomentum: r = true } = e;
    return { ...e, drag: n, dragDirectionLock: i, dragPropagation: o, dragConstraints: a, dragElastic: s, dragMomentum: r };
  }
}
function He(t, e, n) {
  return (e === true || e === t) && (n === null || n === t);
}
function xp(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Tp extends Vt {
  constructor(e) {
    super(e), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new wp(e.visualElement);
  }
  mount() {
    const { dragControls: e } = this.state.options;
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
class Sp extends Vt {
  constructor(e) {
    super(e), ks(Ja);
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
    t && N.postRender(() => t(e, n));
  };
}
class Pp extends Vt {
  constructor() {
    super(...arguments), this.removePointerDownListener = ut;
  }
  onPointerDown(e) {
    this.session = new er(e, this.createPanHandlers(), { transformPagePoint: this.state.visualElement.getTransformPagePoint(), contextWindow: or(this.state.visualElement) });
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
      delete this.session, i && N.postRender(() => i(e, n));
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
const _p = [Zf, sh, rh, ch, fh, ep, Pp, Tp, Sp], Ap = { reducedMotion: "never", transition: void 0, nonce: void 0 }, [Mp, Lm] = Me("MotionConfig");
function Cp() {
  return Mp(I(() => Ap));
}
function sn(t) {
  return (t == null ? void 0 : t.nodeType) === 3 || (t == null ? void 0 : t.nodeType) === 8 ? sn(t.nextSibling) : t;
}
const [kp, Rm] = Me("LazyMotionContext");
function Ep(t) {
  const e = Mu(null), n = ku({}), i = Cp(), o = Bu({}), a = kp({ features: V([]), strict: false }), s = Mr();
  function r() {
    return n.id && t.layoutId ? `${n.id}-${t.layoutId}` : t.layoutId || void 0;
  }
  function l() {
    return { ...t, lazyMotionContext: a, layoutId: r(), transition: t.transition ?? i.value.transition, layoutGroup: n, motionConfig: i.value, inViewOptions: t.inViewOptions ?? i.value.inViewOptions, animatePresenceContext: o, initial: o.initial === false ? o.initial : t.initial === true ? void 0 : t.initial };
  }
  function u() {
    return { ...s, ...l() };
  }
  const c = new Uu(u(), e);
  Cu(c);
  function d() {
    var p;
    const m = c.type === "svg", v = { ...s };
    Object.keys(s).forEach((y) => {
      Q(s[y]) && (v[y] = s[y].get());
    });
    let w = { ...t.style, ...m ? {} : ((p = c.visualElement) == null ? void 0 : p.latestValues) || c.baseTarget };
    if (m) {
      const { attrs: y, style: g } = oc({ ...c.isMounted() ? c.target : c.baseTarget, ...w });
      (g.transform || y.transformOrigin) && (g.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), g.transform && (g.transformBox = g.transformBox ?? "fill-box", delete y.transformBox), Object.assign(v, y), w = g;
    }
    t.drag && t.dragListener !== false && Object.assign(w, { userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none", touchAction: t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}` });
    const x = tc(w);
    return x && (v.style = x), v;
  }
  const f = fs().proxy;
  return Cr(() => {
    c.beforeMount();
  }), oe(() => {
    c.mount(sn(f.$el), u(), Vp(f));
  }), ps(() => c.beforeUnmount()), ms(() => {
    const p = sn(f.$el);
    (p == null ? void 0 : p.isConnected) || c.unmount();
  }), kr(() => {
    c.beforeUpdate();
  }), Er(() => {
    c.update(u());
  }), { getProps: l, getAttrs: d, layoutGroup: n, state: c };
}
const Dp = { ignoreStrict: { type: Boolean }, forwardMotionProps: { type: Boolean, default: false }, asChild: { type: Boolean, default: false }, hover: { type: [String, Array, Object] }, press: { type: [String, Array, Object] }, inView: { type: [String, Array, Object] }, focus: { type: [String, Array, Object] }, whileDrag: { type: [String, Array, Object] }, whileHover: { type: [String, Array, Object], default: ({ hover: t }) => t }, whilePress: { type: [String, Array, Object], default: ({ press: t }) => t }, whileInView: { type: [String, Array, Object], default: ({ inView: t }) => t }, whileFocus: { type: [String, Array, Object], default: ({ focus: t }) => t }, custom: { type: [String, Number, Object, Array] }, initial: { type: [String, Array, Object, Boolean], default: void 0 }, animate: { type: [String, Array, Object], default: void 0 }, exit: { type: [String, Array, Object] }, variants: { type: Object }, inherit: { type: Boolean }, style: { type: Object }, transformTemplate: { type: Function }, transition: { type: Object }, layoutGroup: { type: Object }, motionConfig: { type: Object }, onAnimationComplete: { type: Function }, onUpdate: { type: Function }, layout: { type: [Boolean, String], default: false }, layoutId: { type: String, default: void 0 }, layoutScroll: { type: Boolean, default: false }, layoutRoot: { type: Boolean, default: false }, "data-framer-portal-id": { type: String }, crossfade: { type: Boolean, default: true }, layoutDependency: { type: [String, Number, Object, Array] }, onBeforeLayoutMeasure: { type: Function }, onLayoutMeasure: { type: Function }, onLayoutAnimationStart: { type: Function }, onLayoutAnimationComplete: { type: Function }, globalPressTarget: { type: Boolean }, onPressStart: { type: Function }, onPress: { type: Function }, onPressCancel: { type: Function }, onHoverStart: { type: Function }, onHoverEnd: { type: Function }, inViewOptions: { type: Object }, onViewportEnter: { type: Function }, onViewportLeave: { type: Function }, drag: { type: [Boolean, String] }, dragSnapToOrigin: { type: Boolean }, dragDirectionLock: { type: Boolean }, dragPropagation: { type: Boolean }, dragConstraints: { type: [Boolean, Object] }, dragElastic: { type: [Boolean, Number, Object], default: 0.5 }, dragMomentum: { type: Boolean, default: true }, dragTransition: { type: Object }, dragListener: { type: Boolean, default: true }, dragControls: { type: Object }, onDragStart: { type: Function }, onDragEnd: { type: Function }, onDrag: { type: Function }, onDirectionLock: { type: Function }, onDragTransitionEnd: { type: Function }, onMeasureDragConstraints: { type: Function }, onPanSessionStart: { type: Function }, onPanStart: { type: Function }, onPan: { type: Function }, onPanEnd: { type: Function } };
function Vp(t) {
  var e;
  const n = ((e = sn(t.$el)) == null ? void 0 : e.style.display) === "none";
  return t.$.vnode.transition && n;
}
const Lp = /* @__PURE__ */ new Map(), Rp = /* @__PURE__ */ new Map();
function Op(t) {
  if (!Array.isArray(t)) return [t];
  const e = [];
  for (const n of t) Array.isArray(n) ? e.push(...n) : e.push(n);
  return e;
}
const $p = ["area", "img", "input"];
function Bp(t, e, n) {
  var i, o;
  if (typeof t == "string" && $p.includes(t)) return Xe(t, e);
  if (t === "template") {
    if (!n.default) return null;
    const a = Op(n.default()), s = a.findIndex((c) => c.type !== Dr);
    if (s === -1) return a;
    const r = a[s];
    (i = r.props) == null || delete i.ref;
    const l = r.props ? Dt(e, r.props) : e;
    e.class && ((o = r.props) != null && o.class) && delete r.props.class;
    const u = Vr(r, l);
    for (const c in l) c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = l[c]);
    return a.length === 1 ? u : (a[s] = u, a);
  }
  return null;
}
function ls(t, e = {}) {
  var n;
  const i = typeof t == "string", o = i ? t : t.name || "", a = ((n = e.features) == null ? void 0 : n.length) > 0 ? Lp : Rp;
  if (i && (a == null ? void 0 : a.has(t))) return a.get(t);
  const s = H({ inheritAttrs: false, props: { ...Dp, features: { type: Object, default: () => e.features || [] }, as: { type: [String, Object], default: t || "div" } }, name: o ? `motion.${o}` : "Motion", setup(r, { slots: l }) {
    const { getProps: u, getAttrs: c, state: d } = Ep(r);
    function f() {
      const p = d.element;
      if ((!(typeof r.as == "object") || r.asChild) && p) {
        const { style: v } = c();
        if (v) for (const [w, x] of Object.entries(v)) p.style[w] = x;
      }
    }
    return () => {
      const p = u(), m = c(), v = r.asChild ? "template" : r.as, w = { ...e.forwardMotionProps || r.forwardMotionProps ? p : {}, ...m, onVnodeUpdated: f }, x = Bp(v, w, l);
      return x !== null ? x : Xe(v, { ...w }, l);
    };
  } });
  return i && (a == null ? void 0 : a.set(t, s)), s;
}
function Fp(t = []) {
  return new Proxy({}, { get(e, n) {
    return n === "create" ? (i, o) => ls(i, { ...o, features: t }) : ls(n, { features: t });
  } });
}
const Ip = Fp(_p), jp = Ip.create("div"), Np = { "text-neutral": "", truncate: "" }, Up = H({ __name: "Header", props: { darkHeader: { type: Boolean } }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Ae()), e = await e, n(), e), { isMobileOrTablet: o } = il(), { smaller: a } = Qr(tl), s = I(() => o || a("lg").value), { y: r } = el(window), l = I(() => r.value > 0), u = V();
  _t(r, (p, m) => {
    Math.abs(p - m) < 10 || (u.value = p < m ? "top" : "bottom");
  });
  const c = I(() => ({ opacity: l.value && u.value === "bottom" ? 0 : 1, backgroundColor: l.value && u.value === "top" ? "white" : "transparent", boxShadow: l.value && u.value === "top" ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" : "0 0 0 0 transparent" })), d = I(() => ({ "pointer-events-none": l.value && u.value === "bottom" })), f = I(() => ({ default: { type: "tween", ease: "easeInOut" }, opacity: { duration: 0.4, ease: "easeInOut" }, backgroundColor: { duration: 0.3, ease: "easeInOut", delay: u.value === "bottom" ? 0.15 : 0 }, boxShadow: { duration: 0.1, ease: "easeOut", delay: r.value === 0 && u.value === "top" ? 0.4 : 0 } }));
  return (p, m) => {
    const v = an, w = au, x = Pu;
    return A(), O(h(jp), { as: "header", flex: "~ items-center justify-between gap-x-20", "mx-16": "", "mb-32": "", "mt-16": "", "p-16": "", "rounded-8": "", "inset-x-16": "", "top-16": "", fixed: "", sticky: "", "z-100": "", class: Tt({ dark: !h(l) && p.darkHeader, ...h(d) }), animate: h(c), transition: h(f), "data-scrolled": h(l) ? "" : void 0 }, { default: _(() => [C(v, { to: "/" }, { default: _(() => m[0] || (m[0] = [k("div", { class: "dark:i-nimiq:logos-nimiq-white-horizontal", "text-24": "", "i-nimiq:logos-nimiq-horizontal": "" }, null, -1)])), _: 1, __: [0] }), h(i).hotCtaLink ? (A(), O(v, { key: 0, to: h(i).hotCtaLink, bg: "neutral/15 hocus:neutral/20", class: Tt({ "children:delay-200": h(u) === "bottom" }), external: "", "text-neutral": "", "mr-auto": "", "gap-x-9": "", truncate: "", "nq-pill": "", "children:transition-colors": "" }, { default: _(() => [m[1] || (m[1] = k("div", { "shrink-0": "", "i-nimiq:flame": "" }, null, -1)), k("span", Np, F(h(i).hottext), 1)]), _: 1, __: [1] }, 8, ["to", "class"])) : j("", true), h(s) ? (A(), O(w, { key: 1 })) : (A(), O(x, { key: 2 }))]), _: 1 }, 8, ["class", "animate", "transition", "data-scrolled"]);
  };
} }), zp = Object.assign(Up, { __name: "NavigationHeader" }), Hp = ["data-social"], Wp = { key: 0, "i-nimiq:logos-youtube-mono": "", text: "53 white" }, Kp = { key: 1, "i-nimiq:logos-twitter-mono": "", text: "64 white" }, Gp = { key: 2, "i-nimiq:logos-facebook-mono": "", text: "62 white" }, qp = H({ __name: "HexagonsBackground", props: { bgColor: {}, withSocials: { type: Boolean, default: false } }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => zn()), e = await e, n(), e), o = ws(() => t.bgColor), a = I(() => 5), { width: s } = nl(), r = V(0), l = V(12), u = I(() => l.value * 8.75);
  function c(m, v) {
    const w = m / (a.value - 1), x = v / (r.value - 1), y = Math.abs(w + x - 1), g = 0.8;
    return y > g ? 0 : 1 - y / g;
  }
  const d = { youtube: [2, 6], x: [3, 7], facebook: [1, 9] }, f = Object.keys(d), p = V([]);
  return oe(() => {
    const m = [];
    r.value = Math.floor(s.value / u.value) + 4 & -2;
    for (let v = 0; v < a.value; v++) {
      const x = v % 2 === 0 ? 0 : 1;
      for (let y = x; y < r.value; y += 2) {
        const g = c(v, y);
        let S;
        t.withSocials && (S = f.find((b) => d[b][0] === v && d[b][1] === y)), m.push({ rowIndex: v, colIndex: y, opacity: g, social: S });
      }
    }
    p.value = m;
  }), (m, v) => {
    const w = an;
    return A(), R("section", { class: Tt(h(o)), group: "", "mx-0": "", "px-0": "", "w-full": "", relative: "", "z-2": "", "of-x-hidden": "", "f-pt-2xl": "" }, [k("div", { "aria-hidden": "true", class: "grid-parent", "max-w-none": "", style: Ye(`--rows:${a.value}; --cols:${h(r)}; --gap:${h(l)}px;--hexagon-w: ${u.value}px;`) }, [(A(true), R(at, null, ht(h(p), (x) => (A(), R("div", { key: `${x.rowIndex}-${x.colIndex}`, style: Ye({ "--row": x.rowIndex, "--col": x.colIndex, opacity: x.opacity && !x.social ? x.opacity : 1, "animation-delay": `${x.rowIndex * 0.1 + x.colIndex * 0.15}s`, "animation-duration": `${(a.value - x.rowIndex) * 2 + 4}s` }), "i-nimiq:logos-nimiq-mono": "", "motion-safe:transition": "colors duration-800 hocus:duration-100", "motion-safe:animate": "pulse group-hocus:none", class: Tt({ "text-[red]": x.social === "youtube", "text-black": x.social === "x", "text-[#1877f2]": x.social === "facebook", "text-neutral-300 dark:text-neutral-500 hocus:dark:text-neutral-700 hocus:text-neutral-500": !x.social }), "data-social": x.social }, [x.social ? (A(), O(w, { key: 0, external: "", flex: "~ justify-center items-center", target: "_blank", "size-full": "", to: ("getLink" in m ? m.getLink : h(vs))(h(i)[x.social].link), class: Tt({ "!animate-none": x.social }) }, { default: _(() => [x.social === "youtube" ? (A(), R("div", Wp)) : j("", true), x.social === "x" ? (A(), R("div", Kp)) : j("", true), x.social === "facebook" ? (A(), R("div", Gp)) : j("", true)]), _: 2 }, 1032, ["to", "class"])) : j("", true)], 14, Hp))), 128))], 4)], 2);
  };
} }), Xp = Object.assign(Un(qp, [["__scopeId", "data-v-eea29d29"]]), { __name: "HexagonsBackground" }), Yp = { grid: "~ gap-40 md:gap-48 items-start xl:gap-104" }, Zp = { flex: "~ col", "f-text-sm": "", "area-contact": "" }, Jp = { key: 0 }, Qp = { key: 1, "f-mt-xs": "" }, tm = { text: "f-sm neutral-700", "self-end": "", "area-meta": "" }, em = { key: 0, "f-mt-xs": "" }, nm = { text: "neutral-800 hocus:neutral-900", "transition-colors": "", "f-mt-xs": "", flex: "~ gap-16 items-center wrap" }, im = { "text-neutral-600": "", "f-mt-md": "" }, om = { text: "f-xs neutral-700/80", "w-full": "", "nq-label": "" }, sm = ["aria-label"], am = H({ __name: "Footer", props: { bgColor: {} }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Ae()), e = await e, n(), e), o = ws(t.bgColor);
  return (a, s) => {
    var _a2, _b, _c2, _d2;
    const r = sl, l = qn, u = an, c = Pe;
    return A(), R("footer", { class: Tt(h(o)), "data-section": "", "z-10": "", "f-pt-2xl": "" }, [k("div", Yp, [k("div", Zp, [((_a2 = h(i)) == null ? void 0 : _a2.newsletterCta) ? (A(), R("p", Jp, F(h(i).newsletterCta), 1)) : j("", true), C(r, { "f-mt-xs": "", placeholder: (_b = h(i)) == null ? void 0 : _b.newsletterPlaceholder }, null, 8, ["placeholder"]), ((_c2 = h(i)) == null ? void 0 : _c2.socialMediaCta) ? (A(), R("p", Qp, F(h(i).socialMediaCta), 1)) : j("", true), C(l, { "mx--8": "", "op-60": "", "f-text-xl": "", items: [("SocialMedia" in a ? a.SocialMedia : h(B)).x, ("SocialMedia" in a ? a.SocialMedia : h(B)).telegram, ("SocialMedia" in a ? a.SocialMedia : h(B)).reddit, ("SocialMedia" in a ? a.SocialMedia : h(B)).github, ("SocialMedia" in a ? a.SocialMedia : h(B)).youtube, ("SocialMedia" in a ? a.SocialMedia : h(B)).discord, ("SocialMedia" in a ? a.SocialMedia : h(B)).nimiqForum, ("SocialMedia" in a ? a.SocialMedia : h(B)).facebook, ("SocialMedia" in a ? a.SocialMedia : h(B)).instagram] }, null, 8, ["items"])]), k("div", tm, [C(u, { to: "/", group: "", flex: "", "w-max": "" }, { default: _(() => s[0] || (s[0] = [k("div", { "h-20": "!", "w-84": "!", "op-80": "", "i-nimiq:logos-nimiq-horizontal-mono": "", "group-hocus:i-nimiq:logos-nimiq-horizontal": "" }, null, -1)])), _: 1, __: [0] }), ((_d2 = h(i)) == null ? void 0 : _d2.nimiqShortDescription) ? (A(), R("p", em, F(h(i).nimiqShortDescription), 1)) : j("", true), k("div", nm, [C(u, { to: "/privacy-policy", "font-semibold": "", "un-text": "neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: _(() => s[1] || (s[1] = [nt(" Privacy Policy ")])), _: 1, __: [1] }), s[3] || (s[3] = k("div", { "aria-hidden": "", "rounded-full": "", "bg-current": "", "op-40": "", "size-4": "" }, null, -1)), C(u, { to: "/cookie-policy", "font-semibold": "", "un-text": "neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: _(() => s[2] || (s[2] = [nt(" Cookie Policy ")])), _: 1, __: [2] })]), k("p", im, F(h(i).copyrightNotice), 1)]), (A(true), R(at, null, ht(h(i).blocks, ({ areaName: d, label: f, links: p }) => (A(), R("div", { key: d, style: Ye(`grid-area ${d}`) }, [k("p", om, F(f), 1), k("ul", { "f-mt-md": "", "aria-label": `${f} links`, role: "list" }, [(A(true), R(at, null, ht(p, ({ href: m, label: v }, w) => (A(), R("li", { key: w, "f-mt-xs": "" }, [C(c, { "internal-component": "a", field: m, "font-semibold": "", "un-text": "f-sm neutral-800 hocus:neutral-900", "transition-colors": "" }, { default: _(() => [nt(F(v), 1)]), _: 2 }, 1032, ["field"])]))), 128))], 8, sm)], 4))), 128)), s[4] || (s[4] = k("hr", { "bg-neutral-400": "", "h-1": "", "w-full": "", relative: "", "sr-only": "", "area-hr-1": "" }, null, -1)), s[5] || (s[5] = k("hr", { "bg-neutral-400": "", "h-1": "", "w-full": "", relative: "", "sr-only": "", "area-hr-2": "", "lg:hidden": "" }, null, -1)), s[6] || (s[6] = k("hr", { "bg-neutral-400": "", "h-1": "", "w-full": "", relative: "", "sr-only": "", "area-hr-3": "", "md:hidden": "" }, null, -1))])], 2);
  };
} }), rm = Object.assign(Un(am, [["__scopeId", "data-v-4675ebaa"]]), { __name: "NavigationFooter" }), lm = Lr(Pl), um = { "bottom-20": "", "right-20": "", fixed: "", "z-102": "" }, Om = H({ __name: "default", props: { darkHeader: { type: Boolean, default: false }, footerBgColor: { default: "grey" }, draft: { type: Boolean }, showSocialsHexagonBg: { type: Boolean } }, async setup(t) {
  let e, n;
  const { data: i } = ([e, n] = $t(() => Ae()), e = await e, n(), e);
  return (o, a) => {
    const s = lm, r = Cl, l = zp, u = ol, c = Xp, d = rm;
    return A(), R(at, null, [C(s), h(i).announcementBannerShow ? (A(), O(r, us(Dt({ key: 0 }, h(i))), null, 16)) : j("", true), C(l, { "dark-header": o.darkHeader }, null, 8, ["dark-header"]), ct(o.$slots, "default"), k("div", um, [C(u, { draft: o.draft, "with-env": "" }, null, 8, ["draft"])]), C(c, { "z-1": "", "bg-color": o.footerBgColor, "with-socials": o.showSocialsHexagonBg }, null, 8, ["bg-color", "with-socials"]), C(d, { "bg-color": o.footerBgColor }, null, 8, ["bg-color"])], 64);
  };
} });
export {
  Om as default
};
