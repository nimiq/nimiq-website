import { F as z, d as D, aV as q, m as J, aW as H, H as I, aX as B, a2 as X, N as Y, O as Q, j as O, P as G, V as Z, aN as ee, a0 as C, ab as j, ah as W, u as k, L as b, as as y, aO as te, U, B as w, E as ne, a1 as K, ao as oe, an as re, aq as R, G as ie } from "./ClGJWWej.js";
function L(e) {
  return e ? e.flatMap((t) => t.type === z ? L(t.children) : [t]) : [];
}
const se = D({ name: "PrimitiveSlot", inheritAttrs: false, setup(e, { attrs: t, slots: o }) {
  return () => {
    var _a, _b;
    if (!o.default) return null;
    const n = L(o.default()), i = n.findIndex((u) => u.type !== q);
    if (i === -1) return n;
    const r = n[i];
    (_a = r.props) == null ? true : delete _a.ref;
    const s = r.props ? J(t, r.props) : t;
    t.class && ((_b = r.props) == null ? void 0 : _b.class) && delete r.props.class;
    const a = H(r, s);
    for (const u in s) u.startsWith("on") && (a.props || (a.props = {}), a.props[u] = s[u]);
    return n.length === 1 ? a : (n[i] = a, n);
  };
} }), ae = ["area", "img", "input"], xe = D({ name: "Primitive", inheritAttrs: false, props: { asChild: { type: Boolean, default: false }, as: { type: [String, Object], default: "div" } }, setup(e, { attrs: t, slots: o }) {
  const n = e.asChild ? "template" : e.as;
  return typeof n == "string" && ae.includes(n) ? () => I(n, t) : n !== "template" ? () => I(e.as, t, { default: o.default }) : () => I(se, t, { default: o.default });
} });
function Me(e, t) {
  var o;
  const n = G();
  return Z(() => {
    n.value = e();
  }, { ...t, flush: (o = void 0) != null ? o : "sync" }), ee(n);
}
function T(e) {
  return Y() ? (Q(e), true) : false;
}
function Ie() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return { on: (r) => {
    e.add(r);
    const s = () => t(r);
    return T(s), { off: s };
  }, off: t, trigger: (...r) => Promise.all(Array.from(e).map((s) => s(...r))), clear: () => {
    e.clear();
  } };
}
function $e(e) {
  let t = false, o;
  const n = B(true);
  return (...i) => (t || (o = n.run(() => e(...i)), t = true), o);
}
function je(e) {
  let t = 0, o, n;
  const i = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...r) => (t += 1, n || (n = B(true), o = n.run(() => e(...r))), T(i), o);
}
function ue(e) {
  if (!j(e)) return W(e);
  const t = new Proxy({}, { get(o, n, i) {
    return k(Reflect.get(e.value, n, i));
  }, set(o, n, i) {
    return j(e.value[n]) && !j(i) ? e.value[n].value = i : e.value[n] = i, true;
  }, deleteProperty(o, n) {
    return Reflect.deleteProperty(e.value, n);
  }, has(o, n) {
    return Reflect.has(e.value, n);
  }, ownKeys() {
    return Object.keys(e.value);
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  } });
  return W(t);
}
function le(e) {
  return ue(O(e));
}
function _e(e, ...t) {
  const o = t.flat(), n = o[0];
  return le(() => Object.fromEntries(typeof n == "function" ? Object.entries(U(e)).filter(([i, r]) => !n(y(r), i)) : Object.entries(U(e)).filter((i) => !o.includes(i[0]))));
}
const F = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ce = (e) => typeof e < "u", fe = Object.prototype.toString, de = (e) => fe.call(e) === "[object Object]", V = () => {
}, Ue = me();
function me() {
  var e, t;
  return F && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function pe(e, t) {
  function o(...n) {
    return new Promise((i, r) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(i).catch(r);
    });
  }
  return o;
}
function ve(e, t = {}) {
  let o, n, i = V;
  const r = (u) => {
    clearTimeout(u), i(), i = V;
  };
  let s;
  return (u) => {
    const c = y(e), l = y(t.maxWait);
    return o && r(o), c <= 0 || l !== void 0 && l <= 0 ? (n && (r(n), n = null), Promise.resolve(u())) : new Promise((d, p) => {
      i = t.rejectOnCancel ? p : d, s = u, l && !n && (n = setTimeout(() => {
        o && r(o), n = null, d(s());
      }, l)), o = setTimeout(() => {
        n && r(n), n = null, d(u());
      }, c);
    });
  };
}
function he(e) {
  return C();
}
function _(e) {
  return Array.isArray(e) ? e : [e];
}
function De(e, t = 1e4) {
  return te((o, n) => {
    let i = y(e), r;
    const s = () => setTimeout(() => {
      i = y(e), n();
    }, y(t));
    return T(() => {
      clearTimeout(r);
    }), { get() {
      return o(), i;
    }, set(a) {
      i = a, n(), clearTimeout(r), r = s();
    } };
  });
}
function Le(e, t = 200, o = {}) {
  return pe(ve(t, o), e);
}
const Fe = y;
function We(e, t) {
  he() && X(e, t);
}
function ye(e, t, o) {
  return b(e, t, { ...o, immediate: true });
}
const $ = F ? window : void 0;
function P(e) {
  var t;
  const o = y(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function ge(...e) {
  const t = [], o = () => {
    t.forEach((a) => a()), t.length = 0;
  }, n = (a, u, c, l) => (a.addEventListener(u, c, l), () => a.removeEventListener(u, c, l)), i = O(() => {
    const a = _(y(e[0])).filter((u) => u != null);
    return a.every((u) => typeof u != "string") ? a : void 0;
  }), r = ye(() => {
    var a, u;
    return [(u = (a = i.value) == null ? void 0 : a.map((c) => P(c))) != null ? u : [$].filter((c) => c != null), _(y(i.value ? e[1] : e[0])), _(k(i.value ? e[2] : e[1])), y(i.value ? e[3] : e[2])];
  }, ([a, u, c, l]) => {
    if (o(), !(a == null ? void 0 : a.length) || !(u == null ? void 0 : u.length) || !(c == null ? void 0 : c.length)) return;
    const d = de(l) ? { ...l } : l;
    t.push(...a.flatMap((p) => u.flatMap((h) => c.map((A) => n(p, h, A, d)))));
  }, { flush: "post" }), s = () => {
    r(), o();
  };
  return T(o), s;
}
function be() {
  const e = G(false), t = C();
  return t && ne(() => {
    e.value = true;
  }, t), e;
}
function we(e) {
  const t = be();
  return O(() => (t.value, !!e()));
}
function Oe(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => true;
}
function Re(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = true, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = true, o = e[0]);
  const { target: i = $, eventName: r = "keydown", passive: s = false, dedupe: a = false } = n, u = Oe(t);
  return ge(i, r, (l) => {
    l.repeat && y(a) || u(l) && o(l);
  }, s);
}
function Ae(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ve(e, t, o = {}) {
  const { window: n = $, ...i } = o;
  let r;
  const s = we(() => n && "ResizeObserver" in n), a = () => {
    r && (r.disconnect(), r = void 0);
  }, u = O(() => {
    const d = y(e);
    return Array.isArray(d) ? d.map((p) => P(p)) : [P(d)];
  }), c = b(u, (d) => {
    if (a(), s.value && n) {
      r = new ResizeObserver(t);
      for (const p of d) p && r.observe(p, i);
    }
  }, { immediate: true, flush: "post" }), l = () => {
    a(), c();
  };
  return T(l), { isSupported: s, stop: l };
}
function Be(e, t, o, n = {}) {
  var i, r, s;
  const { clone: a = false, passive: u = false, eventName: c, deep: l = false, defaultValue: d, shouldEmit: p } = n, h = C(), A = o || (h == null ? void 0 : h.emit) || ((i = h == null ? void 0 : h.$emit) == null ? void 0 : i.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let E = c;
  t || (t = "modelValue"), E = E || `update:${t.toString()}`;
  const f = (m) => a ? typeof a == "function" ? a(m) : Ae(m) : m, v = () => ce(e[t]) ? f(e[t]) : d, S = (m) => {
    p ? p(m) && A(E, m) : A(E, m);
  };
  if (u) {
    const m = v(), g = w(m);
    let N = false;
    return b(() => e[t], (x) => {
      N || (N = true, g.value = f(x), K(() => N = false));
    }), b(g, (x) => {
      !N && (x !== e[t] || l) && S(x);
    }, { deep: l }), g;
  } else return O({ get() {
    return v();
  }, set(m) {
    S(m);
  } });
}
function Se(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(s) => {
    const a = oe(n, s);
    if (a || a === null) return a;
    throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (re(n, s), s)];
}
const [Ee, Ge] = Se("ConfigProvider");
function ke() {
  const e = C(), t = w(), o = O(() => {
    var _a, _b;
    return ["#text", "#comment"].includes((_a = t.value) == null ? void 0 : _a.$el.nodeName) ? (_b = t.value) == null ? void 0 : _b.$el.nextElementSibling : P(t);
  }), n = Object.assign({}, e.exposed), i = {};
  for (const s in e.props) Object.defineProperty(i, s, { enumerable: true, configurable: true, get: () => e.props[s] });
  if (Object.keys(n).length > 0) for (const s in n) Object.defineProperty(i, s, { enumerable: true, configurable: true, get: () => n[s] });
  Object.defineProperty(i, "$el", { enumerable: true, configurable: true, get: () => e.vnode.el }), e.exposed = i;
  function r(s) {
    t.value = s, s && (Object.defineProperty(i, "$el", { enumerable: true, configurable: true, get: () => s instanceof Element ? s : s.$el }), e.exposed = i);
  }
  return { forwardRef: r, currentRef: t, currentElement: o };
}
let Ne = 0;
function Ke(e, t = "reka") {
  if (e) return e;
  const o = Ee({ useId: void 0 });
  return R ? `${t}-${R()}` : o.useId ? `${t}-${o.useId()}` : `${t}-${++Ne}`;
}
function Pe(e, t) {
  const o = w(e);
  function n(r) {
    return t[o.value][r] ?? o.value;
  }
  return { state: o, dispatch: (r) => {
    o.value = n(r);
  } };
}
function Ce(e, t) {
  var _a;
  const o = w({}), n = w("none"), i = w(e), r = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((_a = t.value) == null ? void 0 : _a.ownerDocument.defaultView) ?? $, { state: u, dispatch: c } = Pe(r, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }), l = (f) => {
    var _a2;
    if (F) {
      const v = new CustomEvent(f, { bubbles: false, cancelable: false });
      (_a2 = t.value) == null ? void 0 : _a2.dispatchEvent(v);
    }
  };
  b(e, async (f, v) => {
    var _a2;
    const S = v !== f;
    if (await K(), S) {
      const m = n.value, g = M(t.value);
      f ? (c("MOUNT"), l("enter"), g === "none" && l("after-enter")) : g === "none" || g === "undefined" || ((_a2 = o.value) == null ? void 0 : _a2.display) === "none" ? (c("UNMOUNT"), l("leave"), l("after-leave")) : v && m !== g ? (c("ANIMATION_OUT"), l("leave")) : (c("UNMOUNT"), l("after-leave"));
    }
  }, { immediate: true });
  const d = (f) => {
    const v = M(t.value), S = v.includes(f.animationName), m = u.value === "mounted" ? "enter" : "leave";
    if (f.target === t.value && S && (l(`after-${m}`), c("ANIMATION_END"), !i.value)) {
      const g = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var _a2;
        ((_a2 = t.value) == null ? void 0 : _a2.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = g);
      });
    }
    f.target === t.value && v === "none" && c("ANIMATION_END");
  }, p = (f) => {
    f.target === t.value && (n.value = M(t.value));
  }, h = b(t, (f, v) => {
    f ? (o.value = getComputedStyle(f), f.addEventListener("animationstart", p), f.addEventListener("animationcancel", d), f.addEventListener("animationend", d)) : (c("ANIMATION_END"), s !== void 0 && (a == null ? void 0 : a.clearTimeout(s)), v == null ? void 0 : v.removeEventListener("animationstart", p), v == null ? void 0 : v.removeEventListener("animationcancel", d), v == null ? void 0 : v.removeEventListener("animationend", d));
  }, { immediate: true }), A = b(u, () => {
    const f = M(t.value);
    n.value = u.value === "mounted" ? f : "none";
  });
  return ie(() => {
    h(), A();
  }), { isPresent: O(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function M(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const ze = D({ name: "Presence", props: { present: { type: Boolean, required: true }, forceMount: { type: Boolean } }, slots: {}, setup(e, { slots: t, expose: o }) {
  var _a;
  const { present: n, forceMount: i } = U(e), r = w(), { isPresent: s } = Ce(n, r);
  o({ present: s });
  let a = t.default({ present: s.value });
  a = L(a || []);
  const u = C();
  if (a && (a == null ? void 0 : a.length) > 1) {
    const c = ((_a = u == null ? void 0 : u.parent) == null ? void 0 : _a.type.name) ? `<${u.parent.type.name} />` : "component";
    throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((l) => `  - ${l}`).join(`
`)].join(`
`));
  }
  return () => i.value || n.value || s.value ? I(t.default({ present: s.value })[0], { ref: (c) => {
    const l = P(c);
    return typeof (l == null ? void 0 : l.hasAttribute) > "u" || ((l == null ? void 0 : l.hasAttribute("data-reka-popper-content-wrapper")) ? r.value = l.firstElementChild : r.value = l), l;
  } }) : null;
} });
export {
  xe as P,
  se as S,
  Be as a,
  Ke as b,
  Se as c,
  Le as d,
  _e as e,
  ze as f,
  Ve as g,
  P as h,
  F as i,
  Ie as j,
  Me as k,
  be as l,
  $e as m,
  je as n,
  Re as o,
  Ee as p,
  Ue as q,
  De as r,
  ge as s,
  We as t,
  ke as u,
  Fe as v
};
