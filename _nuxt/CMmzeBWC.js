import { F as z, d as D, ab as J, m as q, ac as H, I, aU as G, a3 as Y, N as Z, O as Q, j as O, P as k, V as X, aR as ee, a1 as C, am as j, ar as W, u as K, Y as b, aA as y, aS as te, U, a2 as L, C as w, G as ne, a5 as re, a6 as oe, aZ as V, H as ie } from "./BguRs3jF.js";
function F(e) {
  return e ? e.flatMap((t) => t.type === z ? F(t.children) : [t]) : [];
}
const se = D({ name: "PrimitiveSlot", inheritAttrs: false, setup(e, { attrs: t, slots: r }) {
  return () => {
    var _a, _b;
    if (!r.default) return null;
    const n = F(r.default()), o = n.findIndex((u) => u.type !== J);
    if (o === -1) return n;
    const i = n[o];
    (_a = i.props) == null ? true : delete _a.ref;
    const s = i.props ? q(t, i.props) : t;
    t.class && ((_b = i.props) == null ? void 0 : _b.class) && delete i.props.class;
    const a = H(i, s);
    for (const u in s) u.startsWith("on") && (a.props || (a.props = {}), a.props[u] = s[u]);
    return n.length === 1 ? a : (n[o] = a, n);
  };
} }), ae = ["area", "img", "input"], Te = D({ name: "Primitive", inheritAttrs: false, props: { asChild: { type: Boolean, default: false }, as: { type: [String, Object], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  const n = e.asChild ? "template" : e.as;
  return typeof n == "string" && ae.includes(n) ? () => I(n, t) : n !== "template" ? () => I(e.as, t, { default: r.default }) : () => I(se, t, { default: r.default });
} });
function Me(e, t) {
  var r;
  const n = k();
  return X(() => {
    n.value = e();
  }, { ...t, flush: (r = void 0) != null ? r : "sync" }), ee(n);
}
function x(e) {
  return Z() ? (Q(e), true) : false;
}
function Ie() {
  const e = /* @__PURE__ */ new Set(), t = (i) => {
    e.delete(i);
  };
  return { on: (i) => {
    e.add(i);
    const s = () => t(i);
    return x(s), { off: s };
  }, off: t, trigger: (...i) => Promise.all(Array.from(e).map((s) => s(...i))), clear: () => {
    e.clear();
  } };
}
function $e(e) {
  let t = false, r;
  const n = G(true);
  return (...o) => (t || (r = n.run(() => e(...o)), t = true), r);
}
function je(e) {
  let t = 0, r, n;
  const o = () => {
    t -= 1, n && t <= 0 && (n.stop(), r = void 0, n = void 0);
  };
  return (...i) => (t += 1, n || (n = G(true), r = n.run(() => e(...i))), x(o), r);
}
function ue(e) {
  if (!j(e)) return W(e);
  const t = new Proxy({}, { get(r, n, o) {
    return K(Reflect.get(e.value, n, o));
  }, set(r, n, o) {
    return j(e.value[n]) && !j(o) ? e.value[n].value = o : e.value[n] = o, true;
  }, deleteProperty(r, n) {
    return Reflect.deleteProperty(e.value, n);
  }, has(r, n) {
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
  const r = t.flat(), n = r[0];
  return le(() => Object.fromEntries(typeof n == "function" ? Object.entries(U(e)).filter(([o, i]) => !n(y(i), o)) : Object.entries(U(e)).filter((o) => !r.includes(o[0]))));
}
const R = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ce = (e) => typeof e < "u", fe = Object.prototype.toString, de = (e) => fe.call(e) === "[object Object]", B = () => {
}, Ue = me();
function me() {
  var e, t;
  return R && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function pe(e, t) {
  function r(...n) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(i);
    });
  }
  return r;
}
function ve(e, t = {}) {
  let r, n, o = B;
  const i = (u) => {
    clearTimeout(u), o(), o = B;
  };
  let s;
  return (u) => {
    const c = y(e), l = y(t.maxWait);
    return r && i(r), c <= 0 || l !== void 0 && l <= 0 ? (n && (i(n), n = null), Promise.resolve(u())) : new Promise((d, p) => {
      o = t.rejectOnCancel ? p : d, s = u, l && !n && (n = setTimeout(() => {
        r && i(r), n = null, d(s());
      }, l)), r = setTimeout(() => {
        n && i(n), n = null, d(u());
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
  return te((r, n) => {
    let o = y(e), i;
    const s = () => setTimeout(() => {
      o = y(e), n();
    }, y(t));
    return x(() => {
      clearTimeout(i);
    }), { get() {
      return r(), o;
    }, set(a) {
      o = a, n(), clearTimeout(i), i = s();
    } };
  });
}
function Le(e, t = 200, r = {}) {
  return pe(ve(t, r), e);
}
const Fe = y;
function Re(e, t) {
  he() && Y(e, t);
}
function ye(e, t, r) {
  return b(e, t, { ...r, immediate: true });
}
function We(e, t, r) {
  const n = b(e, (...o) => (L(() => n()), t(...o)), r);
  return n;
}
const $ = R ? window : void 0;
function N(e) {
  var t;
  const r = y(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function ge(...e) {
  const t = [], r = () => {
    t.forEach((a) => a()), t.length = 0;
  }, n = (a, u, c, l) => (a.addEventListener(u, c, l), () => a.removeEventListener(u, c, l)), o = O(() => {
    const a = _(y(e[0])).filter((u) => u != null);
    return a.every((u) => typeof u != "string") ? a : void 0;
  }), i = ye(() => {
    var a, u;
    return [(u = (a = o.value) == null ? void 0 : a.map((c) => N(c))) != null ? u : [$].filter((c) => c != null), _(y(o.value ? e[1] : e[0])), _(K(o.value ? e[2] : e[1])), y(o.value ? e[3] : e[2])];
  }, ([a, u, c, l]) => {
    if (r(), !(a == null ? void 0 : a.length) || !(u == null ? void 0 : u.length) || !(c == null ? void 0 : c.length)) return;
    const d = de(l) ? { ...l } : l;
    t.push(...a.flatMap((p) => u.flatMap((h) => c.map((A) => n(p, h, A, d)))));
  }, { flush: "post" }), s = () => {
    i(), r();
  };
  return x(r), s;
}
function be() {
  const e = k(false), t = C();
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
function Ve(...e) {
  let t, r, n = {};
  e.length === 3 ? (t = e[0], r = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = true, r = e[0], n = e[1]) : (t = e[0], r = e[1]) : (t = true, r = e[0]);
  const { target: o = $, eventName: i = "keydown", passive: s = false, dedupe: a = false } = n, u = Oe(t);
  return ge(o, i, (l) => {
    l.repeat && y(a) || u(l) && r(l);
  }, s);
}
function Ae(e) {
  return JSON.parse(JSON.stringify(e));
}
function Be(e, t, r = {}) {
  const { window: n = $, ...o } = r;
  let i;
  const s = we(() => n && "ResizeObserver" in n), a = () => {
    i && (i.disconnect(), i = void 0);
  }, u = O(() => {
    const d = y(e);
    return Array.isArray(d) ? d.map((p) => N(p)) : [N(d)];
  }), c = b(u, (d) => {
    if (a(), s.value && n) {
      i = new ResizeObserver(t);
      for (const p of d) p && i.observe(p, o);
    }
  }, { immediate: true, flush: "post" }), l = () => {
    a(), c();
  };
  return x(l), { isSupported: s, stop: l };
}
function Ge(e, t, r, n = {}) {
  var o, i, s;
  const { clone: a = false, passive: u = false, eventName: c, deep: l = false, defaultValue: d, shouldEmit: p } = n, h = C(), A = r || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (i = h == null ? void 0 : h.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let P = c;
  t || (t = "modelValue"), P = P || `update:${t.toString()}`;
  const f = (m) => a ? typeof a == "function" ? a(m) : Ae(m) : m, v = () => ce(e[t]) ? f(e[t]) : d, S = (m) => {
    p ? p(m) && A(P, m) : A(P, m);
  };
  if (u) {
    const m = v(), g = w(m);
    let E = false;
    return b(() => e[t], (T) => {
      E || (E = true, g.value = f(T), L(() => E = false));
    }), b(g, (T) => {
      !E && (T !== e[t] || l) && S(T);
    }, { deep: l }), g;
  } else return O({ get() {
    return v();
  }, set(m) {
    S(m);
  } });
}
function Se(e, t) {
  const r = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(r);
  return [(s) => {
    const a = re(n, s);
    if (a || a === null) return a;
    throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (oe(n, s), s)];
}
const [Pe, ke] = Se("ConfigProvider");
function Ke() {
  const e = C(), t = w(), r = O(() => {
    var _a, _b;
    return ["#text", "#comment"].includes((_a = t.value) == null ? void 0 : _a.$el.nodeName) ? (_b = t.value) == null ? void 0 : _b.$el.nextElementSibling : N(t);
  }), n = Object.assign({}, e.exposed), o = {};
  for (const s in e.props) Object.defineProperty(o, s, { enumerable: true, configurable: true, get: () => e.props[s] });
  if (Object.keys(n).length > 0) for (const s in n) Object.defineProperty(o, s, { enumerable: true, configurable: true, get: () => n[s] });
  Object.defineProperty(o, "$el", { enumerable: true, configurable: true, get: () => e.vnode.el }), e.exposed = o;
  function i(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", { enumerable: true, configurable: true, get: () => s instanceof Element ? s : s.$el }), e.exposed = o);
  }
  return { forwardRef: i, currentRef: t, currentElement: r };
}
let Ee = 0;
function ze(e, t = "reka") {
  if (e) return e;
  const r = Pe({ useId: void 0 });
  return V ? `${t}-${V()}` : r.useId ? `${t}-${r.useId()}` : `${t}-${++Ee}`;
}
function Ne(e, t) {
  const r = w(e);
  function n(i) {
    return t[r.value][i] ?? r.value;
  }
  return { state: r, dispatch: (i) => {
    r.value = n(i);
  } };
}
function Ce(e, t) {
  var _a;
  const r = w({}), n = w("none"), o = w(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((_a = t.value) == null ? void 0 : _a.ownerDocument.defaultView) ?? $, { state: u, dispatch: c } = Ne(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }), l = (f) => {
    var _a2;
    if (R) {
      const v = new CustomEvent(f, { bubbles: false, cancelable: false });
      (_a2 = t.value) == null ? void 0 : _a2.dispatchEvent(v);
    }
  };
  b(e, async (f, v) => {
    var _a2;
    const S = v !== f;
    if (await L(), S) {
      const m = n.value, g = M(t.value);
      f ? (c("MOUNT"), l("enter"), g === "none" && l("after-enter")) : g === "none" || g === "undefined" || ((_a2 = r.value) == null ? void 0 : _a2.display) === "none" ? (c("UNMOUNT"), l("leave"), l("after-leave")) : v && m !== g ? (c("ANIMATION_OUT"), l("leave")) : (c("UNMOUNT"), l("after-leave"));
    }
  }, { immediate: true });
  const d = (f) => {
    const v = M(t.value), S = v.includes(f.animationName), m = u.value === "mounted" ? "enter" : "leave";
    if (f.target === t.value && S && (l(`after-${m}`), c("ANIMATION_END"), !o.value)) {
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
    f ? (r.value = getComputedStyle(f), f.addEventListener("animationstart", p), f.addEventListener("animationcancel", d), f.addEventListener("animationend", d)) : (c("ANIMATION_END"), s !== void 0 && (a == null ? void 0 : a.clearTimeout(s)), v == null ? void 0 : v.removeEventListener("animationstart", p), v == null ? void 0 : v.removeEventListener("animationcancel", d), v == null ? void 0 : v.removeEventListener("animationend", d));
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
const Je = D({ name: "Presence", props: { present: { type: Boolean, required: true }, forceMount: { type: Boolean } }, slots: {}, setup(e, { slots: t, expose: r }) {
  var _a;
  const { present: n, forceMount: o } = U(e), i = w(), { isPresent: s } = Ce(n, i);
  r({ present: s });
  let a = t.default({ present: s.value });
  a = F(a || []);
  const u = C();
  if (a && (a == null ? void 0 : a.length) > 1) {
    const c = ((_a = u == null ? void 0 : u.parent) == null ? void 0 : _a.type.name) ? `<${u.parent.type.name} />` : "component";
    throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((l) => `  - ${l}`).join(`
`)].join(`
`));
  }
  return () => o.value || n.value || s.value ? I(t.default({ present: s.value })[0], { ref: (c) => {
    const l = N(c);
    return typeof (l == null ? void 0 : l.hasAttribute) > "u" || ((l == null ? void 0 : l.hasAttribute("data-reka-popper-content-wrapper")) ? i.value = l.firstElementChild : i.value = l), l;
  } }) : null;
} });
export {
  Te as P,
  se as S,
  Ge as a,
  ze as b,
  Se as c,
  Le as d,
  _e as e,
  Je as f,
  Be as g,
  N as h,
  R as i,
  Ie as j,
  Ne as k,
  Me as l,
  $e as m,
  je as n,
  Ve as o,
  Pe as p,
  Ue as q,
  De as r,
  ge as s,
  Re as t,
  Ke as u,
  be as v,
  We as w,
  Fe as x
};
