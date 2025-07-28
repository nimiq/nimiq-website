import { N as M, O as V, aT as U, aR as W, C as L, aS as z, G as E, a2 as O, Y as w, a1 as D, aQ as G, a5 as q, aU as Q, P as I, am as A, aV as Y, aA as h } from "./BguRs3jF.js";
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
const x = typeof window < "u" && typeof document < "u", se = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, ue = (e) => e != null, $ = Object.prototype.toString, le = (e) => $.call(e) === "[object Object]", T = () => {
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
  const o = (u) => {
    clearTimeout(u), i(), i = T;
  };
  let s;
  return (u) => {
    const m = h(e), l = h(r.maxWait);
    return t && o(t), m <= 0 || l !== void 0 && l <= 0 ? (n && (o(n), n = void 0), Promise.resolve(u())) : new Promise((a, c) => {
      i = r.rejectOnCancel ? c : a, s = u, l && !n && (n = setTimeout(() => {
        t && o(t), n = void 0, a(s());
      }, l)), t = setTimeout(() => {
        n && o(n), n = void 0, a(u());
      }, m);
    });
  };
}
function K(...e) {
  let r = 0, t, n = true, i = T, o, s, f, u, m;
  !A(e[0]) && typeof e[0] == "object" ? { delay: s, trailing: f = true, leading: u = true, rejectOnCancel: m = false } = e[0] : [s, f = true, u = true, m = false] = e;
  const l = () => {
    t && (clearTimeout(t), t = void 0, i(), i = T);
  };
  return (c) => {
    const d = h(s), v = Date.now() - r, b = () => o = c();
    return l(), d <= 0 ? (r = Date.now(), b()) : (v > d && (u || !n) ? (r = Date.now(), b()) : f && (o = new Promise((p, y) => {
      i = m ? y : p, t = setTimeout(() => {
        r = Date.now(), n = true, p(b()), l();
      }, Math.max(0, d - v));
    })), !u && !t && (t = setTimeout(() => n = true, d)), n = false, o);
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
  const s = (...f) => {
    n.value && e(...f);
  };
  return { isActive: W(n), pause: i, resume: o, eventFilter: s };
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
  return R(K(r, t, n, i), e);
}
function ne(e, r, t = {}) {
  const { eventFilter: n = _, ...i } = t;
  return w(e, R(n, r), i);
}
function ye(e, r, t = {}) {
  const { eventFilter: n, initialState: i = "active", ...o } = t, { eventFilter: s, pause: f, resume: u, isActive: m } = X(n, { initialState: i });
  return { stop: ne(e, r, { ...o, eventFilter: s }), pause: f, resume: u, isActive: m };
}
function be(e, r = true, t) {
  te() ? E(e, t) : r ? e() : O(e);
}
function C(e, r = false) {
  function t(a, { flush: c = "sync", deep: d = false, timeout: v, throwOnTimeout: b } = {}) {
    let p = null;
    const F = [new Promise((j) => {
      p = w(e, (g) => {
        a(g) !== r && (p ? p() : O(() => p == null ? void 0 : p()), j(g));
      }, { flush: c, deep: d, immediate: true });
    })];
    return v != null && F.push(N(v, b).then(() => h(e)).finally(() => p == null ? void 0 : p())), Promise.race(F);
  }
  function n(a, c) {
    if (!A(a)) return t((g) => g === a, c);
    const { flush: d = "sync", deep: v = false, timeout: b, throwOnTimeout: p } = c ?? {};
    let y = null;
    const j = [new Promise((g) => {
      y = w([e, a], ([k, B]) => {
        r !== (k === B) && (y ? y() : O(() => y == null ? void 0 : y()), g(k));
      }, { flush: d, deep: v, immediate: true });
    })];
    return b != null && j.push(N(b, p).then(() => h(e)).finally(() => (y == null ? void 0 : y(), h(e)))), Promise.race(j);
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
      const v = Array.from(d);
      return v.includes(a) || v.includes(h(a));
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
    return C(e, !r);
  } } : { toMatch: t, toBe: n, toBeTruthy: i, toBeNull: o, toBeNaN: f, toBeUndefined: s, changed: m, changedTimes: l, get not() {
    return C(e, !r);
  } };
}
function we(e) {
  return C(e);
}
function ge(e, r = 1e3, t = {}) {
  const { immediate: n = true, immediateCallback: i = false } = t;
  let o = null;
  const s = I(false);
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
  if (n && x && m(), A(r) || typeof r == "function") {
    const l = w(r, () => {
      s.value && x && m();
    });
    P(l);
  }
  return P(u), { isActive: Y(s), pause: u, resume: m };
}
function Te(e = false, r = {}) {
  const { truthyValue: t = true, falsyValue: n = false } = r, i = A(e), o = I(e);
  function s(f) {
    if (arguments.length) return o.value = f, o.value;
    {
      const u = h(t);
      return o.value = o.value === u ? h(n) : u, o.value;
    }
  }
  return i ? s : [o, s];
}
function je(e, r, t) {
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
function Ae(e, r, t) {
  return w(e, r, { ...t, immediate: true });
}
function Fe(e, r, t) {
  return w(e, r, { ...t, once: true });
}
function Se(e, r, t) {
  return w(e, (i, o, s) => {
    i && r(i, o, s);
  }, { ...t, once: false });
}
export {
  ge as a,
  we as b,
  oe as c,
  x as d,
  H as e,
  be as f,
  ye as g,
  de as h,
  ce as i,
  Ae as j,
  ie as k,
  le as l,
  ae as m,
  T as n,
  pe as o,
  ve as p,
  Fe as q,
  me as r,
  fe as s,
  P as t,
  Te as u,
  ue as v,
  je as w,
  he as x,
  se as y,
  Se as z
};
