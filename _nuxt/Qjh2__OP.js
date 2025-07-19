import { N as M, O as V, aT as U, aR as W, C as L, aS as z, G as E, a2 as O, Y as w, a1 as D, aQ as G, a5 as q, aU as Q, P as I, am as A, aV as Y, aA as h } from "./g1xKa6TI.js";
function P(e) {
  return M() ? (V(e), true) : false;
}
const S = /* @__PURE__ */ new WeakMap(), ie = (...e) => {
  var r;
  const t = e[0], n = (r = D()) == null ? void 0 : r.proxy;
  if (n == null && !G()) throw new Error("injectLocal must be called in setup");
  return n && S.has(n) && t in S.get(n) ? S.get(n)[t] : q(...e);
};
function oe(e) {
  let r = 0, t, n;
  const i = () => {
    r -= 1, n && r <= 0 && (n.stop(), t = void 0, n = void 0);
  };
  return (...o) => (r += 1, n || (n = Q(true), t = n.run(() => e(...o))), P(i), t);
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
const x = typeof window < "u" && typeof document < "u", ue = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, se = (e) => e != null, $ = Object.prototype.toString, le = (e) => $.call(e) === "[object Object]", T = () => {
};
function H(...e) {
  if (e.length !== 1) return U(...e);
  const r = e[0];
  return typeof r == "function" ? W(z(() => ({ get: r, set: T }))) : L(r);
}
function R(e, r) {
  function t(...n) {
    return new Promise((i, o) => {
      Promise.resolve(e(() => r.apply(this, n), { fn: r, thisArg: this, args: n })).then(i).catch(o);
    });
  }
  return t;
}
const _ = (e) => e();
function J(e, r = {}) {
  let t, n, i = T;
  const o = (s) => {
    clearTimeout(s), i(), i = T;
  };
  let u;
  return (s) => {
    const m = h(e), l = h(r.maxWait);
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
    const d = h(u), y = Date.now() - r, b = () => o = c();
    return l(), d <= 0 ? (r = Date.now(), b()) : (y > d && (s || !n) ? (r = Date.now(), b()) : f && (o = new Promise((p, v) => {
      i = m ? v : p, t = setTimeout(() => {
        r = Date.now(), n = true, p(b()), l();
      }, Math.max(0, d - y));
    })), !s && !t && (t = setTimeout(() => n = true, d)), n = false, o);
  };
}
function X(e = _, r = {}) {
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
function ye(e, r = 200, t = false, n = true, i = false) {
  return R(K(r, t, n, i), e);
}
function ne(e, r, t = {}) {
  const { eventFilter: n = _, ...i } = t;
  return w(e, R(n, r), i);
}
function ve(e, r, t = {}) {
  const { eventFilter: n, initialState: i = "active", ...o } = t, { eventFilter: u, pause: f, resume: s, isActive: m } = X(n, { initialState: i });
  return { stop: ne(e, r, { ...o, eventFilter: u }), pause: f, resume: s, isActive: m };
}
function be(e, r = true, t) {
  te() ? E(e, t) : r ? e() : O(e);
}
function C(e, r = false) {
  function t(a, { flush: c = "sync", deep: d = false, timeout: y, throwOnTimeout: b } = {}) {
    let p = null;
    const F = [new Promise((j) => {
      p = w(e, (g) => {
        a(g) !== r && (p ? p() : O(() => p == null ? void 0 : p()), j(g));
      }, { flush: c, deep: d, immediate: true });
    })];
    return y != null && F.push(N(y, b).then(() => h(e)).finally(() => p == null ? void 0 : p())), Promise.race(F);
  }
  function n(a, c) {
    if (!A(a)) return t((g) => g === a, c);
    const { flush: d = "sync", deep: y = false, timeout: b, throwOnTimeout: p } = c ?? {};
    let v = null;
    const j = [new Promise((g) => {
      v = w([e, a], ([k, B]) => {
        r !== (k === B) && (v ? v() : O(() => v == null ? void 0 : v()), g(k));
      }, { flush: d, deep: y, immediate: true });
    })];
    return b != null && j.push(N(b, p).then(() => h(e)).finally(() => (v == null ? void 0 : v(), h(e)))), Promise.race(j);
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
  return Array.isArray(h(e)) ? { toMatch: t, toContains: s, changed: m, changedTimes: l, get not() {
    return C(e, !r);
  } } : { toMatch: t, toBe: n, toBeTruthy: i, toBeNull: o, toBeNaN: f, toBeUndefined: u, changed: m, changedTimes: l, get not() {
    return C(e, !r);
  } };
}
function we(e) {
  return C(e);
}
function ge(e, r = 1e3, t = {}) {
  const { immediate: n = true, immediateCallback: i = false } = t;
  let o = null;
  const u = I(false);
  function f() {
    o && (clearInterval(o), o = null);
  }
  function s() {
    u.value = false, f();
  }
  function m() {
    const l = h(r);
    l <= 0 || (u.value = true, i && e(), f(), u.value && (o = setInterval(e, l)));
  }
  if (n && x && m(), A(r) || typeof r == "function") {
    const l = w(r, () => {
      u.value && x && m();
    });
    P(l);
  }
  return P(s), { isActive: Y(u), pause: s, resume: m };
}
function Te(e = false, r = {}) {
  const { truthyValue: t = true, falsyValue: n = false } = r, i = A(e), o = I(e);
  function u(f) {
    if (arguments.length) return o.value = f, o.value;
    {
      const s = h(t);
      return o.value = o.value === s ? h(n) : s, o.value;
    }
  }
  return i ? u : [o, u];
}
function je(e, r, t) {
  let n = (t == null ? void 0 : t.immediate) ? [] : [...typeof e == "function" ? e() : Array.isArray(e) ? e : h(e)];
  return w(e, (i, o, u) => {
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
function Ae(e, r, t) {
  return w(e, r, { ...t, immediate: true });
}
function Fe(e, r, t) {
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
  x as d,
  H as e,
  be as f,
  ve as g,
  de as h,
  ce as i,
  Ae as j,
  ie as k,
  le as l,
  ae as m,
  T as n,
  pe as o,
  ye as p,
  Fe as q,
  me as r,
  fe as s,
  P as t,
  Te as u,
  se as v,
  je as w,
  he as x,
  ue as y,
  Se as z
};
