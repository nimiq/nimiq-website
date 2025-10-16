import { b0 as L, Q as b, n as U, q as O, aY as D, $ as q, a0 as z, b1 as E, r as N, a_ as G, ak as I, a1 as _, M as A, b2 as M, aZ as $, aq as Q, aW as p } from "./B8biU-UE.js";
function P(e) {
  return q() ? (z(e), true) : false;
}
const S = /* @__PURE__ */ new WeakMap(), ie = (...e) => {
  var r;
  const t = e[0], n = (r = I()) == null ? void 0 : r.proxy;
  if (n == null && !$()) throw new Error("injectLocal must be called in setup");
  return n && S.has(n) && t in S.get(n) ? S.get(n)[t] : Q(...e);
};
function se(e) {
  let r = 0, t, n;
  const o = () => {
    r -= 1, n && r <= 0 && (n.stop(), t = void 0, n = void 0);
  };
  return (...i) => (r += 1, n || (n = L(true), t = n.run(() => e(...i))), P(o), t);
}
function ue(e, r) {
  if (typeof Symbol < "u") {
    const t = { ...e };
    return Object.defineProperty(t, Symbol.iterator, { enumerable: false, value() {
      let n = 0;
      return { next: () => ({ value: r[n++], done: n > r.length }) };
    } }), t;
  } else return Object.assign([...r], e);
}
const R = typeof window < "u" && typeof document < "u", ae = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, ce = (e) => e != null, Y = Object.prototype.toString, le = (e) => Y.call(e) === "[object Object]", T = () => {
};
function Z(...e) {
  if (e.length !== 1) return E(...e);
  const r = e[0];
  return typeof r == "function" ? D(G(() => ({ get: r, set: T }))) : N(r);
}
function x(e, r) {
  function t(...n) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(o).catch(i);
    });
  }
  return t;
}
const B = (e) => e();
function H(e, r = {}) {
  let t, n, o = T;
  const i = (a) => {
    clearTimeout(a), o(), o = T;
  };
  let u;
  return (a) => {
    const m = p(e), c = p(r.maxWait);
    return t && i(t), m <= 0 || c !== void 0 && c <= 0 ? (n && (i(n), n = void 0), Promise.resolve(a())) : new Promise((s, l) => {
      o = r.rejectOnCancel ? l : s, u = a, c && !n && (n = setTimeout(() => {
        t && i(t), n = void 0, s(u());
      }, c)), t = setTimeout(() => {
        n && i(n), n = void 0, s(a());
      }, m);
    });
  };
}
function J(...e) {
  let r = 0, t, n = true, o = T, i, u, f, a, m;
  !A(e[0]) && typeof e[0] == "object" ? { delay: u, trailing: f = true, leading: a = true, rejectOnCancel: m = false } = e[0] : [u, f = true, a = true, m = false] = e;
  const c = () => {
    t && (clearTimeout(t), t = void 0, o(), o = T);
  };
  return (l) => {
    const d = p(u), v = Date.now() - r, w = () => i = l();
    return c(), d <= 0 ? (r = Date.now(), w()) : (v > d && (a || !n) ? (r = Date.now(), w()) : f && (i = new Promise((h, y) => {
      o = m ? y : h, t = setTimeout(() => {
        r = Date.now(), n = true, h(w()), c();
      }, Math.max(0, d - v));
    })), !a && !t && (t = setTimeout(() => n = true, d)), n = false, i);
  };
}
function K(e = B, r = {}) {
  const { initialState: t = "active" } = r, n = Z(t === "active");
  function o() {
    n.value = false;
  }
  function i() {
    n.value = true;
  }
  const u = (...f) => {
    n.value && e(...f);
  };
  return { isActive: D(n), pause: o, resume: i, eventFilter: u };
}
function W(e, r = false, t = "Timeout") {
  return new Promise((n, o) => {
    setTimeout(r ? () => o(t) : n, e);
  });
}
function fe(e) {
  return e();
}
function me(e, r) {
  var t;
  if (typeof e == "number") return e + r;
  const n = ((t = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : t[0]) || "", o = e.slice(n.length), i = Number.parseFloat(n) + r;
  return Number.isNaN(i) ? e : i + o;
}
function de(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function pe(e) {
  return Array.isArray(e) ? e : [e];
}
function X(e) {
  const r = /* @__PURE__ */ Object.create(null);
  return (t) => r[t] || (r[t] = e(t));
}
const ee = /-(\w)/g, he = X((e) => e.replace(ee, (r, t) => t ? t.toUpperCase() : ""));
function te(e) {
  return I();
}
function ne(e, r = 200, t = {}) {
  return x(H(r, t), e);
}
function ve(e, r = 200, t = {}) {
  const n = N(p(e)), o = ne(() => {
    n.value = e.value;
  }, r, t);
  return b(e, () => o()), M(n);
}
function ye(e, r = 200, t = false, n = true, o = false) {
  return x(J(r, t, n, o), e);
}
function re(e, r, t = {}) {
  const { eventFilter: n = B, ...o } = t;
  return b(e, x(n, r), o);
}
function be(e, r, t = {}) {
  const { eventFilter: n, initialState: o = "active", ...i } = t, { eventFilter: u, pause: f, resume: a, isActive: m } = K(n, { initialState: o });
  return { stop: re(e, r, { ...i, eventFilter: u }), pause: f, resume: a, isActive: m };
}
function we(e, r = true, t) {
  te() ? U(e, t) : r ? e() : O(e);
}
function k(e, r = false) {
  function t(s, { flush: l = "sync", deep: d = false, timeout: v, throwOnTimeout: w } = {}) {
    let h = null;
    const F = [new Promise((j) => {
      h = b(e, (g) => {
        s(g) !== r && (h ? h() : O(() => h == null ? void 0 : h()), j(g));
      }, { flush: l, deep: d, immediate: true });
    })];
    return v != null && F.push(W(v, w).then(() => p(e)).finally(() => h == null ? void 0 : h())), Promise.race(F);
  }
  function n(s, l) {
    if (!A(s)) return t((g) => g === s, l);
    const { flush: d = "sync", deep: v = false, timeout: w, throwOnTimeout: h } = l ?? {};
    let y = null;
    const j = [new Promise((g) => {
      y = b([e, s], ([C, V]) => {
        r !== (C === V) && (y ? y() : O(() => y == null ? void 0 : y()), g(C));
      }, { flush: d, deep: v, immediate: true });
    })];
    return w != null && j.push(W(w, h).then(() => p(e)).finally(() => (y == null ? void 0 : y(), p(e)))), Promise.race(j);
  }
  function o(s) {
    return t((l) => !!l, s);
  }
  function i(s) {
    return n(null, s);
  }
  function u(s) {
    return n(void 0, s);
  }
  function f(s) {
    return t(Number.isNaN, s);
  }
  function a(s, l) {
    return t((d) => {
      const v = Array.from(d);
      return v.includes(s) || v.includes(p(s));
    }, l);
  }
  function m(s) {
    return c(1, s);
  }
  function c(s = 1, l) {
    let d = -1;
    return t(() => (d += 1, d >= s), l);
  }
  return Array.isArray(p(e)) ? { toMatch: t, toContains: a, changed: m, changedTimes: c, get not() {
    return k(e, !r);
  } } : { toMatch: t, toBe: n, toBeTruthy: o, toBeNull: i, toBeNaN: f, toBeUndefined: u, changed: m, changedTimes: c, get not() {
    return k(e, !r);
  } };
}
function ge(e) {
  return k(e);
}
function Te(e, r = 1e3, t = {}) {
  const { immediate: n = true, immediateCallback: o = false } = t;
  let i = null;
  const u = _(false);
  function f() {
    i && (clearInterval(i), i = null);
  }
  function a() {
    u.value = false, f();
  }
  function m() {
    const c = p(r);
    c <= 0 || (u.value = true, o && e(), f(), u.value && (i = setInterval(e, c)));
  }
  if (n && R && m(), A(r) || typeof r == "function") {
    const c = b(r, () => {
      u.value && R && m();
    });
    P(c);
  }
  return P(a), { isActive: M(u), pause: a, resume: m };
}
function je(e = false, r = {}) {
  const { truthyValue: t = true, falsyValue: n = false } = r, o = A(e), i = _(e);
  function u(f) {
    if (arguments.length) return i.value = f, i.value;
    {
      const a = p(t);
      return i.value = i.value === a ? p(n) : a, i.value;
    }
  }
  return o ? u : [i, u];
}
function Ae(e, r, t) {
  let n = (t == null ? void 0 : t.immediate) ? [] : [...typeof e == "function" ? e() : Array.isArray(e) ? e : p(e)];
  return b(e, (o, i, u) => {
    const f = Array.from({ length: n.length }), a = [];
    for (const c of o) {
      let s = false;
      for (let l = 0; l < n.length; l++) if (!f[l] && c === n[l]) {
        f[l] = true, s = true;
        break;
      }
      s || a.push(c);
    }
    const m = n.filter((c, s) => !f[s]);
    r(o, n, a, m, u), n = [...o];
  }, t);
}
function Fe(e, r, t) {
  return b(e, r, { ...t, immediate: true });
}
function Se(e, r, t) {
  return b(e, r, { ...t, once: true });
}
function Oe(e, r, t) {
  return b(e, (o, i, u) => {
    o && r(o, i, u);
  }, { ...t, once: false });
}
export {
  Oe as A,
  Te as a,
  ge as b,
  se as c,
  T as d,
  Se as e,
  be as f,
  we as g,
  he as h,
  R as i,
  Fe as j,
  P as k,
  le as l,
  ue as m,
  ce as n,
  ye as o,
  de as p,
  ie as q,
  ve as r,
  me as s,
  pe as t,
  je as u,
  ne as v,
  Ae as w,
  Z as x,
  ae as y,
  fe as z
};
