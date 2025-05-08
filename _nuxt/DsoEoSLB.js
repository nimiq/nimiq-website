import { a0 as J, aY as Q, aS as Z, d as _, b as I, f as ee, u as g, o as M, R as N, X as te, B as w, V as C, a1 as L, j as O, ah as U, w as H, h as ne, L as $, G as se, au as oe } from "./ClGJWWej.js";
import { l as re, i as T, u as z, o as ae, P as q, m as ie, h as ue, n as le, t as ce, p as de, q as W, s as fe } from "./DvG5VWlW.js";
function Ae(e) {
  const n = J(), t = n == null ? void 0 : n.type.emits, s = {};
  return (t == null ? void 0 : t.length) || console.warn(`No emitted event found. Please check component: ${n == null ? void 0 : n.type.__name}`), t == null ? void 0 : t.forEach((i) => {
    s[Q(Z(i))] = (...l) => e(i, ...l);
  }), s;
}
const _e = _({ __name: "Teleport", props: { to: { default: "body" }, disabled: { type: Boolean }, defer: { type: Boolean }, forceMount: { type: Boolean } }, setup(e) {
  const n = re();
  return (t, s) => g(n) || t.forceMount ? (M(), I(te, { key: 0, to: t.to, disabled: t.disabled, defer: t.defer }, [N(t.$slots, "default")], 8, ["to", "disabled", "defer"])) : ee("", true);
} });
function V(e, n, t) {
  const s = t.originalEvent.target, i = new CustomEvent(e, { bubbles: false, cancelable: true, detail: t });
  n && s.addEventListener(e, n, { once: true }), s.dispatchEvent(i);
}
const ve = "dismissableLayer.pointerDownOutside", pe = "dismissableLayer.focusOutside";
function Y(e, n) {
  const t = n.closest("[data-dismissable-layer]"), s = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(t && s === t || i.indexOf(s) < i.indexOf(t));
}
function me(e, n) {
  var _a;
  const t = ((_a = n == null ? void 0 : n.value) == null ? void 0 : _a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), s = w(false), i = w(() => {
  });
  return C((l) => {
    if (!T) return;
    const c = async (d) => {
      const y = d.target;
      if (n == null ? void 0 : n.value) {
        if (Y(n.value, y)) {
          s.value = false;
          return;
        }
        if (d.target && !s.value) {
          let a = function() {
            V(ve, e, o);
          };
          const o = { originalEvent: d };
          d.pointerType === "touch" ? (t.removeEventListener("click", i.value), i.value = a, t.addEventListener("click", i.value, { once: true })) : a();
        } else t.removeEventListener("click", i.value);
        s.value = false;
      }
    }, v = window.setTimeout(() => {
      t.addEventListener("pointerdown", c);
    }, 0);
    l(() => {
      window.clearTimeout(v), t.removeEventListener("pointerdown", c), t.removeEventListener("click", i.value);
    });
  }), { onPointerDownCapture: () => s.value = true };
}
function ye(e, n) {
  var _a;
  const t = ((_a = n == null ? void 0 : n.value) == null ? void 0 : _a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), s = w(false);
  return C((i) => {
    if (!T) return;
    const l = async (c) => {
      (n == null ? void 0 : n.value) && (await L(), await L(), !(!n.value || Y(n.value, c.target)) && c.target && !s.value && V(pe, e, { originalEvent: c }));
    };
    t.addEventListener("focusin", l), i(() => t.removeEventListener("focusin", l));
  }), { onFocusCapture: () => s.value = true, onBlurCapture: () => s.value = false };
}
const h = U({ layersRoot: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), Ie = _({ __name: "DismissableLayer", props: { disableOutsidePointerEvents: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"], setup(e, { emit: n }) {
  const t = e, s = n, { forwardRef: i, currentElement: l } = z(), c = O(() => {
    var _a;
    return ((_a = l.value) == null ? void 0 : _a.ownerDocument) ?? globalThis.document;
  }), v = O(() => h.layersRoot), d = O(() => l.value ? Array.from(v.value).indexOf(l.value) : -1), y = O(() => h.layersWithOutsidePointerEventsDisabled.size > 0), a = O(() => {
    const r = Array.from(v.value), [f] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), p = r.indexOf(f);
    return d.value >= p;
  }), o = me(async (r) => {
    const f = [...h.branches].some((p) => p == null ? void 0 : p.contains(r.target));
    !a.value || f || (s("pointerDownOutside", r), s("interactOutside", r), await L(), r.defaultPrevented || s("dismiss"));
  }, l), u = ye((r) => {
    [...h.branches].some((p) => p == null ? void 0 : p.contains(r.target)) || (s("focusOutside", r), s("interactOutside", r), r.defaultPrevented || s("dismiss"));
  }, l);
  ae("Escape", (r) => {
    d.value === v.value.size - 1 && (s("escapeKeyDown", r), r.defaultPrevented || s("dismiss"));
  });
  let m;
  return C((r) => {
    l.value && (t.disableOutsidePointerEvents && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (m = c.value.body.style.pointerEvents, c.value.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(l.value)), v.value.add(l.value), r(() => {
      t.disableOutsidePointerEvents && h.layersWithOutsidePointerEventsDisabled.size === 1 && (c.value.body.style.pointerEvents = m);
    }));
  }), C((r) => {
    r(() => {
      l.value && (v.value.delete(l.value), h.layersWithOutsidePointerEventsDisabled.delete(l.value));
    });
  }), (r, f) => (M(), I(g(q), { ref: g(i), "as-child": r.asChild, as: r.as, "data-dismissable-layer": "", style: ne({ pointerEvents: y.value ? a.value ? "auto" : "none" : void 0 }), onFocusCapture: g(u).onFocusCapture, onBlurCapture: g(u).onBlurCapture, onPointerdownCapture: g(o).onPointerDownCapture }, { default: H(() => [N(r.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
} });
function S() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
const B = "focusScope.autoFocusOnMount", k = "focusScope.autoFocusOnUnmount", R = { bubbles: false, cancelable: true };
function he(e, { select: n = false } = {}) {
  const t = S();
  for (const s of e) if (E(s, { select: n }), S() !== t) return true;
}
function be(e) {
  const n = j(e), t = x(n, e), s = x(n.reverse(), e);
  return [t, s];
}
function j(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (s) => {
    const i = s.tagName === "INPUT" && s.type === "hidden";
    return s.disabled || s.hidden || i ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function x(e, n) {
  for (const t of e) if (!Ee(t, { upTo: n })) return t;
}
function Ee(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return true;
  for (; e; ) {
    if (n !== void 0 && e === n) return false;
    if (getComputedStyle(e).display === "none") return true;
    e = e.parentElement;
  }
  return false;
}
function we(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function E(e, { select: n = false } = {}) {
  if (e && e.focus) {
    const t = S();
    e.focus({ preventScroll: true }), e !== t && we(e) && n && e.select();
  }
}
const ge = ie(() => w([]));
function Oe() {
  const e = ge();
  return { add(n) {
    const t = e.value[0];
    n !== t && (t == null ? void 0 : t.pause()), e.value = K(e.value, n), e.value.unshift(n);
  }, remove(n) {
    var _a;
    e.value = K(e.value, n), (_a = e.value[0]) == null ? void 0 : _a.resume();
  } };
}
function K(e, n) {
  const t = [...e], s = t.indexOf(n);
  return s !== -1 && t.splice(s, 1), t;
}
function De(e) {
  return e.filter((n) => n.tagName !== "A");
}
const Me = _({ __name: "FocusScope", props: { loop: { type: Boolean, default: false }, trapped: { type: Boolean, default: false }, asChild: { type: Boolean }, as: {} }, emits: ["mountAutoFocus", "unmountAutoFocus"], setup(e, { emit: n }) {
  const t = e, s = n, { currentRef: i, currentElement: l } = z(), c = w(null), v = Oe(), d = U({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } });
  C((a) => {
    if (!T) return;
    const o = l.value;
    if (!t.trapped) return;
    function u(p) {
      if (d.paused || !o) return;
      const b = p.target;
      o.contains(b) ? c.value = b : E(c.value, { select: true });
    }
    function m(p) {
      if (d.paused || !o) return;
      const b = p.relatedTarget;
      b !== null && (o.contains(b) || E(c.value, { select: true }));
    }
    function r(p) {
      o.contains(c.value) || E(o);
    }
    document.addEventListener("focusin", u), document.addEventListener("focusout", m);
    const f = new MutationObserver(r);
    o && f.observe(o, { childList: true, subtree: true }), a(() => {
      document.removeEventListener("focusin", u), document.removeEventListener("focusout", m), f.disconnect();
    });
  }), C(async (a) => {
    const o = l.value;
    if (await L(), !o) return;
    v.add(d);
    const u = S();
    if (!o.contains(u)) {
      const r = new CustomEvent(B, R);
      o.addEventListener(B, (f) => s("mountAutoFocus", f)), o.dispatchEvent(r), r.defaultPrevented || (he(De(j(o)), { select: true }), S() === u && E(o));
    }
    a(() => {
      o.removeEventListener(B, (p) => s("mountAutoFocus", p));
      const r = new CustomEvent(k, R), f = (p) => {
        s("unmountAutoFocus", p);
      };
      o.addEventListener(k, f), o.dispatchEvent(r), setTimeout(() => {
        r.defaultPrevented || E(u ?? document.body, { select: true }), o.removeEventListener(k, f), v.remove(d);
      }, 0);
    });
  });
  function y(a) {
    if (!t.loop && !t.trapped || d.paused) return;
    const o = a.key === "Tab" && !a.altKey && !a.ctrlKey && !a.metaKey, u = S();
    if (o && u) {
      const m = a.currentTarget, [r, f] = be(m);
      r && f ? !a.shiftKey && u === f ? (a.preventDefault(), t.loop && E(r, { select: true })) : a.shiftKey && u === r && (a.preventDefault(), t.loop && E(f, { select: true })) : u === m && a.preventDefault();
    }
  }
  return (a, o) => (M(), I(g(q), { ref_key: "currentRef", ref: i, tabindex: "-1", "as-child": a.asChild, as: a.as, onKeydown: y }, { default: H(() => [N(a.$slots, "default")]), _: 3 }, 8, ["as-child", "as"]));
} });
var Se = function(e) {
  if (typeof document > "u") return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, D = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), F = {}, A = 0, X = function(e) {
  return e && (e.host || X(e.parentNode));
}, Ce = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t)) return t;
    var s = X(t);
    return s && e.contains(s) ? s : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, Le = function(e, n, t, s) {
  var i = Ce(n, Array.isArray(e) ? e : [e]);
  F[t] || (F[t] = /* @__PURE__ */ new WeakMap());
  var l = F[t], c = [], v = /* @__PURE__ */ new Set(), d = new Set(i), y = function(o) {
    !o || v.has(o) || (v.add(o), y(o.parentNode));
  };
  i.forEach(y);
  var a = function(o) {
    !o || d.has(o) || Array.prototype.forEach.call(o.children, function(u) {
      if (v.has(u)) a(u);
      else try {
        var m = u.getAttribute(s), r = m !== null && m !== "false", f = (D.get(u) || 0) + 1, p = (l.get(u) || 0) + 1;
        D.set(u, f), l.set(u, p), c.push(u), f === 1 && r && P.set(u, true), p === 1 && u.setAttribute(t, "true"), r || u.setAttribute(s, "true");
      } catch (b) {
        console.error("aria-hidden: cannot operate on ", u, b);
      }
    });
  };
  return a(n), v.clear(), A++, function() {
    c.forEach(function(o) {
      var u = D.get(o) - 1, m = l.get(o) - 1;
      D.set(o, u), l.set(o, m), u || (P.has(o) || o.removeAttribute(s), P.delete(o)), m || o.removeAttribute(t);
    }), A--, A || (D = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), F = {});
  };
}, Pe = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var s = Array.from(Array.isArray(e) ? e : [e]), i = Se(e);
  return i ? (s.push.apply(s, Array.from(i.querySelectorAll("[aria-live]"))), Le(s, i, t, "aria-hidden")) : function() {
    return null;
  };
};
function Ne(e) {
  let n;
  $(() => ue(e), (t) => {
    t ? n = Pe(t) : n && n();
  }), se(() => {
    n && n();
  });
}
const Fe = le(() => {
  const e = w(/* @__PURE__ */ new Map()), n = w(), t = O(() => {
    for (const c of e.value.values()) if (c) return true;
    return false;
  }), s = de({ scrollBody: w(true) });
  let i = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = n.value ?? "", W && (i == null ? void 0 : i()), n.value = void 0;
  };
  return $(t, (c, v) => {
    var _a;
    if (!T) return;
    if (!c) {
      v && l();
      return;
    }
    n.value === void 0 && (n.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, y = { padding: d, margin: 0 }, a = ((_a = s.scrollBody) == null ? void 0 : _a.value) ? typeof s.scrollBody.value == "object" ? oe({ padding: s.scrollBody.value.padding === true ? d : s.scrollBody.value.padding, margin: s.scrollBody.value.margin === true ? d : s.scrollBody.value.margin }, y) : y : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof a.padding == "number" ? `${a.padding}px` : String(a.padding), document.body.style.marginRight = typeof a.margin == "number" ? `${a.margin}px` : String(a.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), W && (i = fe(document, "touchmove", (o) => Te(o), { passive: false })), L(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: true, flush: "sync" }), e;
});
function We(e) {
  const n = Math.random().toString(36).substring(2, 7), t = Fe();
  t.value.set(n, e ?? false);
  const s = O({ get: () => t.value.get(n) ?? false, set: (i) => t.value.set(n, i) });
  return ce(() => {
    t.value.delete(n);
  }), s;
}
function G(e) {
  const n = window.getComputedStyle(e);
  if (n.overflowX === "scroll" || n.overflowY === "scroll" || n.overflowX === "auto" && e.clientWidth < e.scrollWidth || n.overflowY === "auto" && e.clientHeight < e.scrollHeight) return true;
  {
    const t = e.parentNode;
    return !(t instanceof Element) || t.tagName === "BODY" ? false : G(t);
  }
}
function Te(e) {
  const n = e || window.event, t = n.target;
  return t instanceof Element && G(t) ? false : n.touches.length > 1 ? true : (n.preventDefault && n.cancelable && n.preventDefault(), false);
}
export {
  Ie as _,
  Me as a,
  Ne as b,
  We as c,
  _e as d,
  S as g,
  V as h,
  Ae as u
};
