import { N as _, O as L, aQ as V, aN as W, B as E, aO as U, E as z, a1 as F, P as D, ab as A, L as b, aR as G, a0 as I, as as p, aM as q, ao as Q } from "./ClGJWWej.js";
function x(e) {
  return _() ? (L(e), true) : false;
}
const P = /* @__PURE__ */ new WeakMap(), re = (...e) => {
  var r;
  const t = e[0], n = (r = I()) == null ? void 0 : r.proxy;
  if (n == null && !q()) throw new Error("injectLocal must be called in setup");
  return n && P.has(n) && t in P.get(n) ? P.get(n)[t] : Q(...e);
};
function ie(e, r) {
  if (typeof Symbol < "u") {
    const t = { ...e };
    return Object.defineProperty(t, Symbol.iterator, { enumerable: false, value() {
      let n = 0;
      return { next: () => ({ value: r[n++], done: n > r.length }) };
    } }), t;
  } else return Object.assign([...r], e);
}
const k = typeof window < "u" && typeof document < "u", oe = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, ae = (e) => e != null, $ = Object.prototype.toString, ue = (e) => $.call(e) === "[object Object]", T = () => {
};
function H(...e) {
  if (e.length !== 1) return V(...e);
  const r = e[0];
  return typeof r == "function" ? W(U(() => ({ get: r, set: T }))) : E(r);
}
function N(e, r) {
  function t(...n) {
    return new Promise((i, o) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(i).catch(o);
    });
  }
  return t;
}
const B = (e) => e();
function J(e, r = {}) {
  let t, n, i = T;
  const o = (s) => {
    clearTimeout(s), i(), i = T;
  };
  let u;
  return (s) => {
    const m = p(e), l = p(r.maxWait);
    return t && o(t), m <= 0 || l !== void 0 && l <= 0 ? (n && (o(n), n = null), Promise.resolve(s())) : new Promise((a, c) => {
      i = r.rejectOnCancel ? c : a, u = s, l && !n && (n = setTimeout(() => {
        t && o(t), n = null, a(u());
      }, l)), t = setTimeout(() => {
        n && o(n), n = null, a(s());
      }, m);
    });
  };
}
function K(...e) {
  let r = 0, t, n = true, i = T, o, u, f, s, m;
  !A(e[0]) && typeof e[0] == "object" ? { delay: u, trailing: f = true, leading: s = true, rejectOnCancel: m = false } = e[0] : [u, f = true, s = true, m = false] = e;
  const l = () => {
    t && (clearTimeout(t), t = void 0, i(), i = T);
  };
  return (c) => {
    const d = p(u), y = Date.now() - r, w = () => o = c();
    return l(), d <= 0 ? (r = Date.now(), w()) : (y > d && (s || !n) ? (r = Date.now(), w()) : f && (o = new Promise((h, v) => {
      i = m ? v : h, t = setTimeout(() => {
        r = Date.now(), n = true, h(w()), l();
      }, Math.max(0, d - y));
    })), !s && !t && (t = setTimeout(() => n = true, d)), n = false, o);
  };
}
function X(e = B, r = {}) {
  const { initialState: t = "active" } = r, n = H(t === "active");
  function i() {
    n.value = false;
  }
  function o() {
    n.value = true;
  }
  const u = (...f) => {
    n.value && e(...f);
  };
  return { isActive: W(n), pause: i, resume: o, eventFilter: u };
}
function C(e, r = false, t = "Timeout") {
  return new Promise((n, i) => {
    setTimeout(r ? () => i(t) : n, e);
  });
}
function se(e, r) {
  var t;
  if (typeof e == "number") return e + r;
  const n = ((t = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : t[0]) || "", i = e.slice(n.length), o = Number.parseFloat(n) + r;
  return Number.isNaN(o) ? e : o + i;
}
function le(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function ce(e) {
  return Array.isArray(e) ? e : [e];
}
function Y(e) {
  const r = /* @__PURE__ */ Object.create(null);
  return (t) => r[t] || (r[t] = e(t));
}
const Z = /-(\w)/g, fe = Y((e) => e.replace(Z, (r, t) => t ? t.toUpperCase() : ""));
function ee(e) {
  return I();
}
function me(e, r = 200, t = {}) {
  return N(J(r, t), e);
}
function de(e, r = 200, t = false, n = true, i = false) {
  return N(K(r, t, n, i), e);
}
function te(e, r, t = {}) {
  const { eventFilter: n = B, ...i } = t;
  return b(e, N(n, r), i);
}
function he(e, r, t = {}) {
  const { eventFilter: n, initialState: i = "active", ...o } = t, { eventFilter: u, pause: f, resume: s, isActive: m } = X(n, { initialState: i });
  return { stop: te(e, r, { ...o, eventFilter: u }), pause: f, resume: s, isActive: m };
}
function pe(e, r = true, t) {
  ee() ? z(e, t) : r ? e() : F(e);
}
function S(e, r = false) {
  function t(a, { flush: c = "sync", deep: d = false, timeout: y, throwOnTimeout: w } = {}) {
    let h = null;
    const O = [new Promise((j) => {
      h = b(e, (g) => {
        a(g) !== r && (h ? h() : F(() => h == null ? void 0 : h()), j(g));
      }, { flush: c, deep: d, immediate: true });
    })];
    return y != null && O.push(C(y, w).then(() => p(e)).finally(() => h == null ? void 0 : h())), Promise.race(O);
  }
  function n(a, c) {
    if (!A(a)) return t((g) => g === a, c);
    const { flush: d = "sync", deep: y = false, timeout: w, throwOnTimeout: h } = c ?? {};
    let v = null;
    const j = [new Promise((g) => {
      v = b([e, a], ([R, M]) => {
        r !== (R === M) && (v ? v() : F(() => v == null ? void 0 : v()), g(R));
      }, { flush: d, deep: y, immediate: true });
    })];
    return w != null && j.push(C(w, h).then(() => p(e)).finally(() => (v == null ? void 0 : v(), p(e)))), Promise.race(j);
  }
  function i(a) {
    return t((c) => !!c, a);
  }
  function o(a) {
    return n(null, a);
  }
  function u(a) {
    return n(void 0, a);
  }
  function f(a) {
    return t(Number.isNaN, a);
  }
  function s(a, c) {
    return t((d) => {
      const y = Array.from(d);
      return y.includes(a) || y.includes(p(a));
    }, c);
  }
  function m(a) {
    return l(1, a);
  }
  function l(a = 1, c) {
    let d = -1;
    return t(() => (d += 1, d >= a), c);
  }
  return Array.isArray(p(e)) ? { toMatch: t, toContains: s, changed: m, changedTimes: l, get not() {
    return S(e, !r);
  } } : { toMatch: t, toBe: n, toBeTruthy: i, toBeNull: o, toBeNaN: f, toBeUndefined: u, changed: m, changedTimes: l, get not() {
    return S(e, !r);
  } };
}
function ye(e) {
  return S(e);
}
function ve(e, r = 1e3, t = {}) {
  const { immediate: n = true, immediateCallback: i = false } = t;
  let o = null;
  const u = D(false);
  function f() {
    o && (clearInterval(o), o = null);
  }
  function s() {
    u.value = false, f();
  }
  function m() {
    const l = p(r);
    l <= 0 || (u.value = true, i && e(), f(), u.value && (o = setInterval(e, l)));
  }
  if (n && k && m(), A(r) || typeof r == "function") {
    const l = b(r, () => {
      u.value && k && m();
    });
    x(l);
  }
  return x(s), { isActive: G(u), pause: s, resume: m };
}
function we(e = false, r = {}) {
  const { truthyValue: t = true, falsyValue: n = false } = r, i = A(e), o = D(e);
  function u(f) {
    if (arguments.length) return o.value = f, o.value;
    {
      const s = p(t);
      return o.value = o.value === s ? p(n) : s, o.value;
    }
  }
  return i ? u : [o, u];
}
function be(e, r, t) {
  let n = (t == null ? void 0 : t.immediate) ? [] : [...typeof e == "function" ? e() : Array.isArray(e) ? e : p(e)];
  return b(e, (i, o, u) => {
    const f = Array.from({ length: n.length }), s = [];
    for (const l of i) {
      let a = false;
      for (let c = 0; c < n.length; c++) if (!f[c] && l === n[c]) {
        f[c] = true, a = true;
        break;
      }
      a || s.push(l);
    }
    const m = n.filter((l, a) => !f[a]);
    r(i, n, s, m, u), n = [...i];
  }, t);
}
function ge(e, r, t) {
  return b(e, r, { ...t, immediate: true });
}
function Te(e, r, t) {
  const n = b(e, (...i) => (F(() => n()), r(...i)), t);
  return n;
}
function je(e, r, t) {
  return b(e, (i, o, u) => {
    i && r(i, o, u);
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
  ue as k,
  fe as l,
  ie as m,
  T as n,
  de as o,
  le as p,
  Te as q,
  se as r,
  ae as s,
  x as t,
  we as u,
  me as v,
  be as w,
  je as x
};
