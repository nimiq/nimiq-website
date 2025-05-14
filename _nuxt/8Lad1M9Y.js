import { N as M, O as L, aS as V, aP as W, B as E, aQ as U, E as q, a1 as P, P as D, ac as F, L as b, aT as z, a0 as I, au as p, aO as G, aq as Q } from "./7tyaNgEA.js";
function R(e) {
  return M() ? (L(e), true) : false;
}
const O = /* @__PURE__ */ new WeakMap(), re = (...e) => {
  var n;
  const t = e[0], r = (n = I()) == null ? void 0 : n.proxy;
  if (r == null && !G()) throw new Error("injectLocal must be called in setup");
  return r && O.has(r) && t in O.get(r) ? O.get(r)[t] : Q(...e);
};
function ie(e, n) {
  if (typeof Symbol < "u") {
    const t = { ...e };
    return Object.defineProperty(t, Symbol.iterator, { enumerable: false, value() {
      let r = 0;
      return { next: () => ({ value: n[r++], done: r > n.length }) };
    } }), t;
  } else return Object.assign([...n], e);
}
const k = typeof window < "u" && typeof document < "u", oe = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, ue = (e) => e != null, $ = Object.prototype.toString, ae = (e) => $.call(e) === "[object Object]", T = () => {
};
function H(...e) {
  if (e.length !== 1) return V(...e);
  const n = e[0];
  return typeof n == "function" ? W(U(() => ({ get: n, set: T }))) : E(n);
}
function x(e, n) {
  function t(...r) {
    return new Promise((i, o) => {
      Promise.resolve(e(() => n.apply(this, r), { fn: n, thisArg: this, args: r })).then(i).catch(o);
    });
  }
  return t;
}
const B = (e) => e();
function J(e, n = {}) {
  let t, r, i = T;
  const o = (s) => {
    clearTimeout(s), i(), i = T;
  };
  let a;
  return (s) => {
    const m = p(e), l = p(n.maxWait);
    return t && o(t), m <= 0 || l !== void 0 && l <= 0 ? (r && (o(r), r = null), Promise.resolve(s())) : new Promise((u, c) => {
      i = n.rejectOnCancel ? c : u, a = s, l && !r && (r = setTimeout(() => {
        t && o(t), r = null, u(a());
      }, l)), t = setTimeout(() => {
        r && o(r), r = null, u(s());
      }, m);
    });
  };
}
function K(...e) {
  let n = 0, t, r = true, i = T, o, a, f, s, m;
  !F(e[0]) && typeof e[0] == "object" ? { delay: a, trailing: f = true, leading: s = true, rejectOnCancel: m = false } = e[0] : [a, f = true, s = true, m = false] = e;
  const l = () => {
    t && (clearTimeout(t), t = void 0, i(), i = T);
  };
  return (c) => {
    const d = p(a), y = Date.now() - n, w = () => o = c();
    return l(), d <= 0 ? (n = Date.now(), w()) : (y > d && (s || !r) ? (n = Date.now(), w()) : f && (o = new Promise((h, v) => {
      i = m ? v : h, t = setTimeout(() => {
        n = Date.now(), r = true, h(w()), l();
      }, Math.max(0, d - y));
    })), !s && !t && (t = setTimeout(() => r = true, d)), r = false, o);
  };
}
function X(e = B, n = {}) {
  const { initialState: t = "active" } = n, r = H(t === "active");
  function i() {
    r.value = false;
  }
  function o() {
    r.value = true;
  }
  const a = (...f) => {
    r.value && e(...f);
  };
  return { isActive: W(r), pause: i, resume: o, eventFilter: a };
}
function C(e, n = false, t = "Timeout") {
  return new Promise((r, i) => {
    setTimeout(n ? () => i(t) : r, e);
  });
}
function se(e, n) {
  var t;
  if (typeof e == "number") return e + n;
  const r = ((t = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : t[0]) || "", i = e.slice(r.length), o = Number.parseFloat(r) + n;
  return Number.isNaN(o) ? e : o + i;
}
function le(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function ce(e) {
  return Array.isArray(e) ? e : [e];
}
function Y(e) {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
}
const Z = /-(\w)/g, fe = Y((e) => e.replace(Z, (n, t) => t ? t.toUpperCase() : ""));
function ee(e) {
  return I();
}
function me(e, n = 200, t = {}) {
  return x(J(n, t), e);
}
function de(e, n = 200, t = false, r = true, i = false) {
  return x(K(n, t, r, i), e);
}
function te(e, n, t = {}) {
  const { eventFilter: r = B, ...i } = t;
  return b(e, x(r, n), i);
}
function he(e, n, t = {}) {
  const { eventFilter: r, initialState: i = "active", ...o } = t, { eventFilter: a, pause: f, resume: s, isActive: m } = X(r, { initialState: i });
  return { stop: te(e, n, { ...o, eventFilter: a }), pause: f, resume: s, isActive: m };
}
function pe(e, n = true, t) {
  ee() ? q(e, t) : n ? e() : P(e);
}
function S(e, n = false) {
  function t(u, { flush: c = "sync", deep: d = false, timeout: y, throwOnTimeout: w } = {}) {
    let h = null;
    const A = [new Promise((j) => {
      h = b(e, (g) => {
        u(g) !== n && (h ? h() : P(() => h == null ? void 0 : h()), j(g));
      }, { flush: c, deep: d, immediate: true });
    })];
    return y != null && A.push(C(y, w).then(() => p(e)).finally(() => h == null ? void 0 : h())), Promise.race(A);
  }
  function r(u, c) {
    if (!F(u)) return t((g) => g === u, c);
    const { flush: d = "sync", deep: y = false, timeout: w, throwOnTimeout: h } = c ?? {};
    let v = null;
    const j = [new Promise((g) => {
      v = b([e, u], ([N, _]) => {
        n !== (N === _) && (v ? v() : P(() => v == null ? void 0 : v()), g(N));
      }, { flush: d, deep: y, immediate: true });
    })];
    return w != null && j.push(C(w, h).then(() => p(e)).finally(() => (v == null ? void 0 : v(), p(e)))), Promise.race(j);
  }
  function i(u) {
    return t((c) => !!c, u);
  }
  function o(u) {
    return r(null, u);
  }
  function a(u) {
    return r(void 0, u);
  }
  function f(u) {
    return t(Number.isNaN, u);
  }
  function s(u, c) {
    return t((d) => {
      const y = Array.from(d);
      return y.includes(u) || y.includes(p(u));
    }, c);
  }
  function m(u) {
    return l(1, u);
  }
  function l(u = 1, c) {
    let d = -1;
    return t(() => (d += 1, d >= u), c);
  }
  return Array.isArray(p(e)) ? { toMatch: t, toContains: s, changed: m, changedTimes: l, get not() {
    return S(e, !n);
  } } : { toMatch: t, toBe: r, toBeTruthy: i, toBeNull: o, toBeNaN: f, toBeUndefined: a, changed: m, changedTimes: l, get not() {
    return S(e, !n);
  } };
}
function ye(e) {
  return S(e);
}
function ve(e, n = 1e3, t = {}) {
  const { immediate: r = true, immediateCallback: i = false } = t;
  let o = null;
  const a = D(false);
  function f() {
    o && (clearInterval(o), o = null);
  }
  function s() {
    a.value = false, f();
  }
  function m() {
    const l = p(n);
    l <= 0 || (a.value = true, i && e(), f(), a.value && (o = setInterval(e, l)));
  }
  if (r && k && m(), F(n) || typeof n == "function") {
    const l = b(n, () => {
      a.value && k && m();
    });
    R(l);
  }
  return R(s), { isActive: z(a), pause: s, resume: m };
}
function we(e = false, n = {}) {
  const { truthyValue: t = true, falsyValue: r = false } = n, i = F(e), o = D(e);
  function a(f) {
    if (arguments.length) return o.value = f, o.value;
    {
      const s = p(t);
      return o.value = o.value === s ? p(r) : s, o.value;
    }
  }
  return i ? a : [o, a];
}
function be(e, n, t) {
  let r = (t == null ? void 0 : t.immediate) ? [] : [...typeof e == "function" ? e() : Array.isArray(e) ? e : p(e)];
  return b(e, (i, o, a) => {
    const f = Array.from({ length: r.length }), s = [];
    for (const l of i) {
      let u = false;
      for (let c = 0; c < r.length; c++) if (!f[c] && l === r[c]) {
        f[c] = true, u = true;
        break;
      }
      u || s.push(l);
    }
    const m = r.filter((l, u) => !f[u]);
    n(i, r, s, m, a), r = [...i];
  }, t);
}
function ge(e, n, t) {
  return b(e, n, { ...t, immediate: true });
}
function Te(e, n, t) {
  return b(e, n, { ...t, once: true });
}
function je(e, n, t) {
  return b(e, (i, o, a) => {
    i && n(i, o, a);
  }, { ...t, once: false });
}
export {
  ye as a,
  ve as b,
  H as c,
  pe as d,
  he as e,
  ce as f,
  ge as g,
  oe as h,
  k as i,
  re as j,
  ae as k,
  fe as l,
  ie as m,
  T as n,
  de as o,
  le as p,
  Te as q,
  se as r,
  ue as s,
  R as t,
  we as u,
  me as v,
  be as w,
  je as x
};
