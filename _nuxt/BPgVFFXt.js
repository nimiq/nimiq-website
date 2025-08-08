import { bn as M, ae as w, P as V, Q as E, E as L, N as O, R as W, aK as F, bo as U, ak as D, bl as z, an as G, b1 as h, bk as I, bp as q, B as K, bm as Q } from "./C95QRNzc.js";
function P(e) {
  return V() ? (E(e), true) : false;
}
const S = /* @__PURE__ */ new WeakMap(), ie = (...e) => {
  var r;
  const t = e[0], n = (r = D()) == null ? void 0 : r.proxy;
  if (n == null && !z()) throw new Error("injectLocal must be called in setup");
  return n && S.has(n) && t in S.get(n) ? S.get(n)[t] : G(...e);
};
function oe(e) {
  let r = 0, t, n;
  const i = () => {
    r -= 1, n && r <= 0 && (n.stop(), t = void 0, n = void 0);
  };
  return (...o) => (r += 1, n || (n = M(true), t = n.run(() => e(...o))), P(i), t);
}
function se(e, r) {
  if (typeof Symbol < "u") {
    const t = { ...e };
    return Object.defineProperty(t, Symbol.iterator, { enumerable: false, value() {
      let n = 0;
      return { next: () => ({ value: r[n++], done: n > r.length }) };
    } }), t;
  } else return Object.assign([...r], e);
}
const C = typeof window < "u" && typeof document < "u", ue = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, ae = (e) => e != null, $ = Object.prototype.toString, le = (e) => $.call(e) === "[object Object]", T = () => {
};
function H(...e) {
  if (e.length !== 1) return q(...e);
  const r = e[0];
  return typeof r == "function" ? I(Q(() => ({ get: r, set: T }))) : K(r);
}
function R(e, r) {
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
  const o = (a) => {
    clearTimeout(a), i(), i = T;
  };
  let u;
  return (a) => {
    const m = h(e), l = h(r.maxWait);
    return t && o(t), m <= 0 || l !== void 0 && l <= 0 ? (n && (o(n), n = void 0), Promise.resolve(a())) : new Promise((s, c) => {
      i = r.rejectOnCancel ? c : s, u = a, l && !n && (n = setTimeout(() => {
        t && o(t), n = void 0, s(u());
      }, l)), t = setTimeout(() => {
        n && o(n), n = void 0, s(a());
      }, m);
    });
  };
}
function X(...e) {
  let r = 0, t, n = true, i = T, o, u, f, a, m;
  !F(e[0]) && typeof e[0] == "object" ? { delay: u, trailing: f = true, leading: a = true, rejectOnCancel: m = false } = e[0] : [u, f = true, a = true, m = false] = e;
  const l = () => {
    t && (clearTimeout(t), t = void 0, i(), i = T);
  };
  return (c) => {
    const d = h(u), v = Date.now() - r, b = () => o = c();
    return l(), d <= 0 ? (r = Date.now(), b()) : (v > d && (a || !n) ? (r = Date.now(), b()) : f && (o = new Promise((p, y) => {
      i = m ? y : p, t = setTimeout(() => {
        r = Date.now(), n = true, p(b()), l();
      }, Math.max(0, d - v));
    })), !a && !t && (t = setTimeout(() => n = true, d)), n = false, o);
  };
}
function Y(e = B, r = {}) {
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
  return { isActive: I(n), pause: i, resume: o, eventFilter: u };
}
function N(e, r = false, t = "Timeout") {
  return new Promise((n, i) => {
    setTimeout(r ? () => i(t) : n, e);
  });
}
function ce(e) {
  return e();
}
function fe(e, r) {
  var t;
  if (typeof e == "number") return e + r;
  const n = ((t = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : t[0]) || "", i = e.slice(n.length), o = Number.parseFloat(n) + r;
  return Number.isNaN(o) ? e : o + i;
}
function me(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function de(e) {
  return Array.isArray(e) ? e : [e];
}
function Z(e) {
  const r = /* @__PURE__ */ Object.create(null);
  return (t) => r[t] || (r[t] = e(t));
}
const ee = /-(\w)/g, pe = Z((e) => e.replace(ee, (r, t) => t ? t.toUpperCase() : ""));
function te(e) {
  return D();
}
function he(e, r = 200, t = {}) {
  return R(J(r, t), e);
}
function ve(e, r = 200, t = false, n = true, i = false) {
  return R(X(r, t, n, i), e);
}
function ne(e, r, t = {}) {
  const { eventFilter: n = B, ...i } = t;
  return w(e, R(n, r), i);
}
function ye(e, r, t = {}) {
  const { eventFilter: n, initialState: i = "active", ...o } = t, { eventFilter: u, pause: f, resume: a, isActive: m } = Y(n, { initialState: i });
  return { stop: ne(e, r, { ...o, eventFilter: u }), pause: f, resume: a, isActive: m };
}
function be(e, r = true, t) {
  te() ? L(e, t) : r ? e() : O(e);
}
function k(e, r = false) {
  function t(s, { flush: c = "sync", deep: d = false, timeout: v, throwOnTimeout: b } = {}) {
    let p = null;
    const A = [new Promise((j) => {
      p = w(e, (g) => {
        s(g) !== r && (p ? p() : O(() => p == null ? void 0 : p()), j(g));
      }, { flush: c, deep: d, immediate: true });
    })];
    return v != null && A.push(N(v, b).then(() => h(e)).finally(() => p == null ? void 0 : p())), Promise.race(A);
  }
  function n(s, c) {
    if (!F(s)) return t((g) => g === s, c);
    const { flush: d = "sync", deep: v = false, timeout: b, throwOnTimeout: p } = c ?? {};
    let y = null;
    const j = [new Promise((g) => {
      y = w([e, s], ([x, _]) => {
        r !== (x === _) && (y ? y() : O(() => y == null ? void 0 : y()), g(x));
      }, { flush: d, deep: v, immediate: true });
    })];
    return b != null && j.push(N(b, p).then(() => h(e)).finally(() => (y == null ? void 0 : y(), h(e)))), Promise.race(j);
  }
  function i(s) {
    return t((c) => !!c, s);
  }
  function o(s) {
    return n(null, s);
  }
  function u(s) {
    return n(void 0, s);
  }
  function f(s) {
    return t(Number.isNaN, s);
  }
  function a(s, c) {
    return t((d) => {
      const v = Array.from(d);
      return v.includes(s) || v.includes(h(s));
    }, c);
  }
  function m(s) {
    return l(1, s);
  }
  function l(s = 1, c) {
    let d = -1;
    return t(() => (d += 1, d >= s), c);
  }
  return Array.isArray(h(e)) ? { toMatch: t, toContains: a, changed: m, changedTimes: l, get not() {
    return k(e, !r);
  } } : { toMatch: t, toBe: n, toBeTruthy: i, toBeNull: o, toBeNaN: f, toBeUndefined: u, changed: m, changedTimes: l, get not() {
    return k(e, !r);
  } };
}
function we(e) {
  return k(e);
}
function ge(e, r = 1e3, t = {}) {
  const { immediate: n = true, immediateCallback: i = false } = t;
  let o = null;
  const u = W(false);
  function f() {
    o && (clearInterval(o), o = null);
  }
  function a() {
    u.value = false, f();
  }
  function m() {
    const l = h(r);
    l <= 0 || (u.value = true, i && e(), f(), u.value && (o = setInterval(e, l)));
  }
  if (n && C && m(), F(r) || typeof r == "function") {
    const l = w(r, () => {
      u.value && C && m();
    });
    P(l);
  }
  return P(a), { isActive: U(u), pause: a, resume: m };
}
function Te(e = false, r = {}) {
  const { truthyValue: t = true, falsyValue: n = false } = r, i = F(e), o = W(e);
  function u(f) {
    if (arguments.length) return o.value = f, o.value;
    {
      const a = h(t);
      return o.value = o.value === a ? h(n) : a, o.value;
    }
  }
  return i ? u : [o, u];
}
function je(e, r, t) {
  let n = (t == null ? void 0 : t.immediate) ? [] : [...typeof e == "function" ? e() : Array.isArray(e) ? e : h(e)];
  return w(e, (i, o, u) => {
    const f = Array.from({ length: n.length }), a = [];
    for (const l of i) {
      let s = false;
      for (let c = 0; c < n.length; c++) if (!f[c] && l === n[c]) {
        f[c] = true, s = true;
        break;
      }
      s || a.push(l);
    }
    const m = n.filter((l, s) => !f[s]);
    r(i, n, a, m, u), n = [...i];
  }, t);
}
function Fe(e, r, t) {
  return w(e, r, { ...t, immediate: true });
}
function Ae(e, r, t) {
  return w(e, r, { ...t, once: true });
}
function Se(e, r, t) {
  return w(e, (i, o, u) => {
    i && r(i, o, u);
  }, { ...t, once: false });
}
export {
  ge as a,
  we as b,
  oe as c,
  T as d,
  Ae as e,
  C as f,
  pe as g,
  P as h,
  ce as i,
  Fe as j,
  be as k,
  he as l,
  se as m,
  ae as n,
  ve as o,
  me as p,
  ie as q,
  fe as r,
  ye as s,
  de as t,
  Te as u,
  le as v,
  je as w,
  H as x,
  ue as y,
  Se as z
};
