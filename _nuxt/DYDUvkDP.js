import { M as _, N as V, aX as U, aV as k, B as E, aW as L, E as z, a1 as S, X as w, a0 as D, aU as G, a4 as X, aY as q, O as B, al as F, aZ as Y, aB as h } from "./gdLxT4Lf.js";
function P(e) {
  return _() ? (V(e), true) : false;
}
const O = /* @__PURE__ */ new WeakMap(), ie = (...e) => {
  var r;
  const t = e[0], n = (r = D()) == null ? void 0 : r.proxy;
  if (n == null && !G()) throw new Error("injectLocal must be called in setup");
  return n && O.has(n) && t in O.get(n) ? O.get(n)[t] : X(...e);
};
function oe(e) {
  let r = 0, t, n;
  const i = () => {
    r -= 1, n && r <= 0 && (n.stop(), t = void 0, n = void 0);
  };
  return (...o) => (r += 1, n || (n = q(true), t = n.run(() => e(...o))), P(i), t);
}
function ae(e, r) {
  if (typeof Symbol < "u") {
    const t = { ...e };
    return Object.defineProperty(t, Symbol.iterator, { enumerable: false, value() {
      let n = 0;
      return { next: () => ({ value: r[n++], done: n > r.length }) };
    } }), t;
  } else return Object.assign([...r], e);
}
const R = typeof window < "u" && typeof document < "u", se = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, ue = (e) => e != null, Z = Object.prototype.toString, le = (e) => Z.call(e) === "[object Object]", T = () => {
};
function $(...e) {
  if (e.length !== 1) return U(...e);
  const r = e[0];
  return typeof r == "function" ? k(L(() => ({ get: r, set: T }))) : E(r);
}
function C(e, r) {
  function t(...n) {
    return new Promise((i, o) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(i).catch(o);
    });
  }
  return t;
}
const I = (e) => e();
function H(e, r = {}) {
  let t, n, i = T;
  const o = (u) => {
    clearTimeout(u), i(), i = T;
  };
  let s;
  return (u) => {
    const m = h(e), l = h(r.maxWait);
    return t && o(t), m <= 0 || l !== void 0 && l <= 0 ? (n && (o(n), n = null), Promise.resolve(u())) : new Promise((a, c) => {
      i = r.rejectOnCancel ? c : a, s = u, l && !n && (n = setTimeout(() => {
        t && o(t), n = null, a(s());
      }, l)), t = setTimeout(() => {
        n && o(n), n = null, a(u());
      }, m);
    });
  };
}
function J(...e) {
  let r = 0, t, n = true, i = T, o, s, f, u, m;
  !F(e[0]) && typeof e[0] == "object" ? { delay: s, trailing: f = true, leading: u = true, rejectOnCancel: m = false } = e[0] : [s, f = true, u = true, m = false] = e;
  const l = () => {
    t && (clearTimeout(t), t = void 0, i(), i = T);
  };
  return (c) => {
    const d = h(s), y = Date.now() - r, b = () => o = c();
    return l(), d <= 0 ? (r = Date.now(), b()) : (y > d && (u || !n) ? (r = Date.now(), b()) : f && (o = new Promise((p, v) => {
      i = m ? v : p, t = setTimeout(() => {
        r = Date.now(), n = true, p(b()), l();
      }, Math.max(0, d - y));
    })), !u && !t && (t = setTimeout(() => n = true, d)), n = false, o);
  };
}
function K(e = I, r = {}) {
  const { initialState: t = "active" } = r, n = $(t === "active");
  function i() {
    n.value = false;
  }
  function o() {
    n.value = true;
  }
  const s = (...f) => {
    n.value && e(...f);
  };
  return { isActive: k(n), pause: i, resume: o, eventFilter: s };
}
function W(e, r = false, t = "Timeout") {
  return new Promise((n, i) => {
    setTimeout(r ? () => i(t) : n, e);
  });
}
function ce(e, r) {
  var t;
  if (typeof e == "number") return e + r;
  const n = ((t = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : t[0]) || "", i = e.slice(n.length), o = Number.parseFloat(n) + r;
  return Number.isNaN(o) ? e : o + i;
}
function fe(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function me(e) {
  return Array.isArray(e) ? e : [e];
}
function Q(e) {
  const r = /* @__PURE__ */ Object.create(null);
  return (t) => r[t] || (r[t] = e(t));
}
const ee = /-(\w)/g, de = Q((e) => e.replace(ee, (r, t) => t ? t.toUpperCase() : ""));
function te(e) {
  return D();
}
function pe(e, r = 200, t = {}) {
  return C(H(r, t), e);
}
function he(e, r = 200, t = false, n = true, i = false) {
  return C(J(r, t, n, i), e);
}
function ne(e, r, t = {}) {
  const { eventFilter: n = I, ...i } = t;
  return w(e, C(n, r), i);
}
function ye(e, r, t = {}) {
  const { eventFilter: n, initialState: i = "active", ...o } = t, { eventFilter: s, pause: f, resume: u, isActive: m } = K(n, { initialState: i });
  return { stop: ne(e, r, { ...o, eventFilter: s }), pause: f, resume: u, isActive: m };
}
function ve(e, r = true, t) {
  te() ? z(e, t) : r ? e() : S(e);
}
function x(e, r = false) {
  function t(a, { flush: c = "sync", deep: d = false, timeout: y, throwOnTimeout: b } = {}) {
    let p = null;
    const A = [new Promise((j) => {
      p = w(e, (g) => {
        a(g) !== r && (p ? p() : S(() => p == null ? void 0 : p()), j(g));
      }, { flush: c, deep: d, immediate: true });
    })];
    return y != null && A.push(W(y, b).then(() => h(e)).finally(() => p == null ? void 0 : p())), Promise.race(A);
  }
  function n(a, c) {
    if (!F(a)) return t((g) => g === a, c);
    const { flush: d = "sync", deep: y = false, timeout: b, throwOnTimeout: p } = c ?? {};
    let v = null;
    const j = [new Promise((g) => {
      v = w([e, a], ([N, M]) => {
        r !== (N === M) && (v ? v() : S(() => v == null ? void 0 : v()), g(N));
      }, { flush: d, deep: y, immediate: true });
    })];
    return b != null && j.push(W(b, p).then(() => h(e)).finally(() => (v == null ? void 0 : v(), h(e)))), Promise.race(j);
  }
  function i(a) {
    return t((c) => !!c, a);
  }
  function o(a) {
    return n(null, a);
  }
  function s(a) {
    return n(void 0, a);
  }
  function f(a) {
    return t(Number.isNaN, a);
  }
  function u(a, c) {
    return t((d) => {
      const y = Array.from(d);
      return y.includes(a) || y.includes(h(a));
    }, c);
  }
  function m(a) {
    return l(1, a);
  }
  function l(a = 1, c) {
    let d = -1;
    return t(() => (d += 1, d >= a), c);
  }
  return Array.isArray(h(e)) ? { toMatch: t, toContains: u, changed: m, changedTimes: l, get not() {
    return x(e, !r);
  } } : { toMatch: t, toBe: n, toBeTruthy: i, toBeNull: o, toBeNaN: f, toBeUndefined: s, changed: m, changedTimes: l, get not() {
    return x(e, !r);
  } };
}
function be(e) {
  return x(e);
}
function we(e, r = 1e3, t = {}) {
  const { immediate: n = true, immediateCallback: i = false } = t;
  let o = null;
  const s = B(false);
  function f() {
    o && (clearInterval(o), o = null);
  }
  function u() {
    s.value = false, f();
  }
  function m() {
    const l = h(r);
    l <= 0 || (s.value = true, i && e(), f(), s.value && (o = setInterval(e, l)));
  }
  if (n && R && m(), F(r) || typeof r == "function") {
    const l = w(r, () => {
      s.value && R && m();
    });
    P(l);
  }
  return P(u), { isActive: Y(s), pause: u, resume: m };
}
function ge(e = false, r = {}) {
  const { truthyValue: t = true, falsyValue: n = false } = r, i = F(e), o = B(e);
  function s(f) {
    if (arguments.length) return o.value = f, o.value;
    {
      const u = h(t);
      return o.value = o.value === u ? h(n) : u, o.value;
    }
  }
  return i ? s : [o, s];
}
function Te(e, r, t) {
  let n = (t == null ? void 0 : t.immediate) ? [] : [...typeof e == "function" ? e() : Array.isArray(e) ? e : h(e)];
  return w(e, (i, o, s) => {
    const f = Array.from({ length: n.length }), u = [];
    for (const l of i) {
      let a = false;
      for (let c = 0; c < n.length; c++) if (!f[c] && l === n[c]) {
        f[c] = true, a = true;
        break;
      }
      a || u.push(l);
    }
    const m = n.filter((l, a) => !f[a]);
    r(i, n, u, m, s), n = [...i];
  }, t);
}
function je(e, r, t) {
  return w(e, r, { ...t, immediate: true });
}
function Fe(e, r, t) {
  return w(e, r, { ...t, once: true });
}
function Ae(e, r, t) {
  return w(e, (i, o, s) => {
    i && r(i, o, s);
  }, { ...t, once: false });
}
export {
  be as a,
  we as b,
  oe as c,
  $ as d,
  ve as e,
  ye as f,
  me as g,
  je as h,
  R as i,
  ie as j,
  le as k,
  de as l,
  ae as m,
  T as n,
  he as o,
  fe as p,
  Fe as q,
  ce as r,
  ue as s,
  P as t,
  ge as u,
  pe as v,
  Te as w,
  se as x,
  Ae as y
};
