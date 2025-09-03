import { t as j, n as ce, d as B, m as pe, e as we, i as G, f as be, p as J, g as fe, h as q, j as $, k as ge, l as ye, o as Se, q as Ee, s as Oe, v as xe, x as _e, a as Te, y as re } from "./CMlG4309.js";
import { a as N, aW as E, O as y, x as P, d as se, B as Re, ag as de, Z as Me, b6 as ie, b7 as ve, b8 as We, v as Z, b9 as Ce, ar as Ie, h as Ne, K as Ve } from "./BSLliBk6.js";
function Ue(e = {}) {
  const { inheritAttrs: t = true } = e, n = y(), d = se({ setup(m, { slots: c }) {
    return () => {
      n.value = c.default;
    };
  } }), v = se({ inheritAttrs: t, props: e.props, setup(m, { attrs: c, slots: s }) {
    return () => {
      var a;
      n.value;
      const i = (a = n.value) == null ? void 0 : a.call(n, { ...e.props == null ? Ae(c) : m, $slots: s });
      return t && (i == null ? void 0 : i.length) === 1 ? i[0] : i;
    };
  } });
  return pe({ define: d, reuse: v }, [d, v]);
}
function Ae(e) {
  const t = {};
  for (const n in e) t[be(n)] = e[n];
  return t;
}
const W = G ? window : void 0, De = G ? window.document : void 0;
function I(e) {
  var t;
  const n = E(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function A(...e) {
  const t = [], n = () => {
    t.forEach((s) => s()), t.length = 0;
  }, d = (s, a, i, u) => (s.addEventListener(a, i, u), () => s.removeEventListener(a, i, u)), v = N(() => {
    const s = j(E(e[0])).filter((a) => a != null);
    return s.every((a) => typeof a != "string") ? s : void 0;
  }), m = fe(() => {
    var s, a;
    return [(a = (s = v.value) == null ? void 0 : s.map((i) => I(i))) != null ? a : [W].filter((i) => i != null), j(E(v.value ? e[1] : e[0])), j(Ne(v.value ? e[2] : e[1])), E(v.value ? e[3] : e[2])];
  }, ([s, a, i, u]) => {
    if (n(), !(s == null ? void 0 : s.length) || !(a == null ? void 0 : a.length) || !(i == null ? void 0 : i.length)) return;
    const r = xe(u) ? { ...u } : u;
    t.push(...s.flatMap((f) => a.flatMap((o) => i.map((l) => d(f, o, l, r)))));
  }, { flush: "post" }), c = () => {
    m(), n();
  };
  return q(n), c;
}
function Fe() {
  const e = y(false), t = de();
  return t && Re(() => {
    e.value = true;
  }, t), e;
}
function Y(e) {
  const t = Fe();
  return N(() => (t.value, !!e()));
}
function ee(e, t, n = {}) {
  const { window: d = W, ...v } = n;
  let m;
  const c = Y(() => d && "MutationObserver" in d), s = () => {
    m && (m.disconnect(), m = void 0);
  }, a = N(() => {
    const f = E(e), o = j(f).map(I).filter(ce);
    return new Set(o);
  }), i = P(() => a.value, (f) => {
    s(), c.value && f.size && (m = new MutationObserver(t), f.forEach((o) => m.observe(o, v)));
  }, { immediate: true, flush: "post" }), u = () => m == null ? void 0 : m.takeRecords(), r = () => {
    i(), s();
  };
  return q(r), { isSupported: c, stop: r, takeRecords: u };
}
function Ke(e, t = null) {
  const n = de();
  let d = () => {
  };
  const v = Ce((m, c) => (d = c, { get() {
    var s, a;
    return m(), (a = (s = n == null ? void 0 : n.proxy) == null ? void 0 : s.$refs[e]) != null ? a : t;
  }, set() {
  } }));
  return $(d), Ie(d), v;
}
function Ye(e, t = {}) {
  const { immediate: n = true, fpsLimit: d = void 0, window: v = W, once: m = false } = t, c = y(false), s = N(() => d ? 1e3 / E(d) : null);
  let a = 0, i = null;
  function u(o) {
    if (!c.value || !v) return;
    a || (a = o);
    const l = o - a;
    if (s.value && l < s.value) {
      i = v.requestAnimationFrame(u);
      return;
    }
    if (a = o, e({ delta: l, timestamp: o }), m) {
      c.value = false, i = null;
      return;
    }
    i = v.requestAnimationFrame(u);
  }
  function r() {
    !c.value && v && (c.value = true, a = 0, i = v.requestAnimationFrame(u));
  }
  function f() {
    c.value = false, i != null && v && (v.cancelAnimationFrame(i), i = null);
  }
  return n && r(), q(f), { isActive: ve(c), pause: f, resume: r };
}
const Pe = Symbol("vueuse-ssr-width");
function me() {
  const e = We() ? ye(Pe, null) : null;
  return typeof e == "number" ? e : void 0;
}
function H(e, t = {}) {
  const { window: n = W, ssrWidth: d = me() } = t, v = Y(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), m = y(typeof d == "number"), c = y(), s = y(false), a = (i) => {
    s.value = i.matches;
  };
  return Me(() => {
    if (m.value) {
      m.value = !v.value;
      const i = E(e).split(",");
      s.value = i.some((u) => {
        const r = u.includes("not all"), f = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), o = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let l = !!(f || o);
        return f && l && (l = d >= J(f[1])), o && l && (l = d <= J(o[1])), r ? !l : l;
      });
      return;
    }
    v.value && (c.value = n.matchMedia(E(e)), s.value = c.value.matches);
  }), A(c, "change", a, { passive: true }), N(() => s.value);
}
const Qe = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function Xe(e, t = {}) {
  function n(o, l) {
    let w = E(e[E(o)]);
    return l != null && (w = Se(w, l)), typeof w == "number" && (w = `${w}px`), w;
  }
  const { window: d = W, strategy: v = "min-width", ssrWidth: m = me() } = t, c = typeof m == "number", s = c ? y(false) : { value: true };
  c && $(() => s.value = !!d);
  function a(o, l) {
    return !s.value && c ? o === "min" ? m >= J(l) : m <= J(l) : d ? d.matchMedia(`(${o}-width: ${l})`).matches : false;
  }
  const i = (o) => H(() => `(min-width: ${n(o)})`, t), u = (o) => H(() => `(max-width: ${n(o)})`, t), r = Object.keys(e).reduce((o, l) => (Object.defineProperty(o, l, { get: () => v === "min-width" ? i(l) : u(l), enumerable: true, configurable: true }), o), {});
  function f() {
    const o = Object.keys(e).map((l) => [l, r[l], J(n(l))]).sort((l, w) => l[2] - w[2]);
    return N(() => o.filter(([, l]) => l.value).map(([l]) => l));
  }
  return Object.assign(r, { greaterOrEqual: i, smallerOrEqual: u, greater(o) {
    return H(() => `(min-width: ${n(o, 0.1)})`, t);
  }, smaller(o) {
    return H(() => `(max-width: ${n(o, -0.1)})`, t);
  }, between(o, l) {
    return H(() => `(min-width: ${n(o)}) and (max-width: ${n(l, -0.1)})`, t);
  }, isGreater(o) {
    return a("min", n(o, 0.1));
  }, isGreaterOrEqual(o) {
    return a("min", n(o));
  }, isSmaller(o) {
    return a("max", n(o, -0.1));
  }, isSmallerOrEqual(o) {
    return a("max", n(o));
  }, isInBetween(o, l) {
    return a("min", n(o)) && a("max", n(l, -0.1));
  }, current: f, active() {
    const o = f();
    return N(() => o.value.length === 0 ? "" : o.value.at(v === "min-width" ? -1 : 0));
  } });
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K = "__vueuse_ssr_handlers__", Le = ke();
function ke() {
  return K in U || (U[K] = U[K] || {}), U[K];
}
function ze(e, t) {
  return Le[e] || t;
}
function He(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const $e = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, le = "vueuse-storage";
function je(e, t, n, d = {}) {
  var v;
  const { flush: m = "pre", deep: c = true, listenToStorageChanges: s = true, writeDefaults: a = true, mergeDefaults: i = false, shallow: u, window: r = W, eventFilter: f, onError: o = (h) => {
    console.error(h);
  }, initOnMounted: l } = d, w = (u ? y : Z)(typeof t == "function" ? t() : t), S = N(() => E(e));
  if (!n) try {
    n = ze("getDefaultStorage", () => {
      var h;
      return (h = W) == null ? void 0 : h.localStorage;
    })();
  } catch (h) {
    o(h);
  }
  if (!n) return w;
  const x = E(t), _ = He(x), R = (v = d.serializer) != null ? v : $e[_], { pause: C, resume: L } = Ee(w, () => V(w.value), { flush: m, deep: c, eventFilter: f });
  P(S, () => g(), { flush: m });
  let k = false;
  const D = (h) => {
    l && !k || g(h);
  }, F = (h) => {
    l && !k || T(h);
  };
  r && s && (n instanceof Storage ? A(r, "storage", D, { passive: true }) : A(r, le, F)), l ? $(() => {
    k = true, g();
  }) : g();
  function p(h, b) {
    if (r) {
      const O = { key: S.value, oldValue: h, newValue: b, storageArea: n };
      r.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", O) : new CustomEvent(le, { detail: O }));
    }
  }
  function V(h) {
    try {
      const b = n.getItem(S.value);
      if (h == null) p(b, null), n.removeItem(S.value);
      else {
        const O = R.write(h);
        b !== O && (n.setItem(S.value, O), p(b, O));
      }
    } catch (b) {
      o(b);
    }
  }
  function M(h) {
    const b = h ? h.newValue : n.getItem(S.value);
    if (b == null) return a && x != null && n.setItem(S.value, R.write(x)), x;
    if (!h && i) {
      const O = R.read(b);
      return typeof i == "function" ? i(O, x) : _ === "object" && !Array.isArray(O) ? { ...x, ...O } : O;
    } else return typeof b != "string" ? b : R.read(b);
  }
  function g(h) {
    if (!(h && h.storageArea !== n)) {
      if (h && h.key == null) {
        w.value = x;
        return;
      }
      if (!(h && h.key !== S.value)) {
        C();
        try {
          (h == null ? void 0 : h.newValue) !== R.write(w.value) && (w.value = M(h));
        } catch (b) {
          o(b);
        } finally {
          h ? Ve(L) : L();
        }
      }
    }
  }
  function T(h) {
    g(h.detail);
  }
  return w;
}
function Ze(e, t, n = {}) {
  const { window: d = W, initialValue: v, observe: m = false } = n, c = y(v), s = N(() => {
    var i;
    return I(t) || ((i = d == null ? void 0 : d.document) == null ? void 0 : i.documentElement);
  });
  function a() {
    var i;
    const u = E(e), r = E(s);
    if (r && d && u) {
      const f = (i = d.getComputedStyle(r).getPropertyValue(u)) == null ? void 0 : i.trim();
      c.value = f || c.value || v;
    }
  }
  return m && ee(s, a, { attributeFilter: ["style", "class"], window: d }), P([s, () => E(e)], (i, u) => {
    u[0] && u[1] && u[0].style.removeProperty(u[1]), a();
  }, { immediate: true }), P([c, s], ([i, u]) => {
    const r = E(e);
    (u == null ? void 0 : u.style) && r && (i == null ? u.style.removeProperty(r) : u.style.setProperty(r, i));
  }, { immediate: true }), c;
}
function et(e = {}) {
  const { window: t = W } = e, n = y(1), d = H(() => `(resolution: ${n.value}dppx)`, e);
  let v = B;
  return t && (v = fe(d, () => n.value = t.devicePixelRatio)), { pixelRatio: ve(n), stop: v };
}
function tt(e = {}) {
  const { document: t = De } = e;
  if (!t) return y("visible");
  const n = y(t.visibilityState);
  return A(t, "visibilitychange", () => {
    n.value = t.visibilityState;
  }, { passive: true }), n;
}
function he(e, t, n = {}) {
  const { window: d = W, ...v } = n;
  let m;
  const c = Y(() => d && "ResizeObserver" in d), s = () => {
    m && (m.disconnect(), m = void 0);
  }, a = N(() => {
    const r = E(e);
    return Array.isArray(r) ? r.map((f) => I(f)) : [I(r)];
  }), i = P(a, (r) => {
    if (s(), c.value && d) {
      m = new ResizeObserver(t);
      for (const f of r) f && m.observe(f, v);
    }
  }, { immediate: true, flush: "post" }), u = () => {
    s(), i();
  };
  return q(u), { isSupported: c, stop: u };
}
function nt(e, t = {}) {
  const { reset: n = true, windowResize: d = true, windowScroll: v = true, immediate: m = true, updateTiming: c = "sync" } = t, s = y(0), a = y(0), i = y(0), u = y(0), r = y(0), f = y(0), o = y(0), l = y(0);
  function w() {
    const x = I(e);
    if (!x) {
      n && (s.value = 0, a.value = 0, i.value = 0, u.value = 0, r.value = 0, f.value = 0, o.value = 0, l.value = 0);
      return;
    }
    const _ = x.getBoundingClientRect();
    s.value = _.height, a.value = _.bottom, i.value = _.left, u.value = _.right, r.value = _.top, f.value = _.width, o.value = _.x, l.value = _.y;
  }
  function S() {
    c === "sync" ? w() : c === "next-frame" && requestAnimationFrame(() => w());
  }
  return he(e, S), P(() => I(e), (x) => !x && S()), ee(e, S, { attributeFilter: ["style", "class"] }), v && A("scroll", S, { capture: true, passive: true }), d && A("resize", S, { passive: true }), $(() => {
    m && S();
  }), { height: s, bottom: a, left: i, right: u, top: r, width: f, x: o, y: l, update: S };
}
function ot(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: d = W, box: v = "content-box" } = n, m = N(() => {
    var r, f;
    return (f = (r = I(e)) == null ? void 0 : r.namespaceURI) == null ? void 0 : f.includes("svg");
  }), c = y(t.width), s = y(t.height), { stop: a } = he(e, ([r]) => {
    const f = v === "border-box" ? r.borderBoxSize : v === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    if (d && m.value) {
      const o = I(e);
      if (o) {
        const l = o.getBoundingClientRect();
        c.value = l.width, s.value = l.height;
      }
    } else if (f) {
      const o = j(f);
      c.value = o.reduce((l, { inlineSize: w }) => l + w, 0), s.value = o.reduce((l, { blockSize: w }) => l + w, 0);
    } else c.value = r.contentRect.width, s.value = r.contentRect.height;
  }, n);
  $(() => {
    const r = I(e);
    r && (c.value = "offsetWidth" in r ? r.offsetWidth : t.width, s.value = "offsetHeight" in r ? r.offsetHeight : t.height);
  });
  const i = P(() => I(e), (r) => {
    c.value = r ? t.width : 0, s.value = r ? t.height : 0;
  });
  function u() {
    a(), i();
  }
  return { width: c, height: s, stop: u };
}
function Be(e, t, n = {}) {
  const { root: d, rootMargin: v = "0px", threshold: m = 0, window: c = W, immediate: s = true } = n, a = Y(() => c && "IntersectionObserver" in c), i = N(() => {
    const l = E(e);
    return j(l).map(I).filter(ce);
  });
  let u = B;
  const r = y(s), f = a.value ? P(() => [i.value, I(d), r.value], ([l, w]) => {
    if (u(), !r.value || !l.length) return;
    const S = new IntersectionObserver(t, { root: I(w), rootMargin: v, threshold: m });
    l.forEach((x) => x && S.observe(x)), u = () => {
      S.disconnect(), u = B;
    };
  }, { immediate: s, flush: "post" }) : B, o = () => {
    u(), f(), r.value = false;
  };
  return q(o), { isSupported: a, isActive: r, pause() {
    u(), r.value = false;
  }, resume() {
    r.value = true;
  }, stop: o };
}
function rt(e, t = {}) {
  const { window: n = W, scrollTarget: d, threshold: v = 0, rootMargin: m, once: c = false } = t, s = y(false), { stop: a } = Be(e, (i) => {
    let u = s.value, r = 0;
    for (const f of i) f.time >= r && (r = f.time, u = f.isIntersecting);
    s.value = u, c && we(s, () => {
      a();
    });
  }, { root: d, window: n, threshold: v, rootMargin: E(m) });
  return s;
}
const ue = 1;
function qe(e, t = {}) {
  const { throttle: n = 0, idle: d = 200, onStop: v = B, onScroll: m = B, offset: c = { left: 0, right: 0, top: 0, bottom: 0 }, observe: s = { mutation: false }, eventListenerOptions: a = { capture: false, passive: true }, behavior: i = "auto", window: u = W, onError: r = (p) => {
    console.error(p);
  } } = t, f = typeof s == "boolean" ? { mutation: s } : s, o = y(0), l = y(0), w = N({ get() {
    return o.value;
  }, set(p) {
    x(p, void 0);
  } }), S = N({ get() {
    return l.value;
  }, set(p) {
    x(void 0, p);
  } });
  function x(p, V) {
    var M, g, T, h;
    if (!u) return;
    const b = E(e);
    if (!b) return;
    (T = b instanceof Document ? u.document.body : b) == null || T.scrollTo({ top: (M = E(V)) != null ? M : S.value, left: (g = E(p)) != null ? g : w.value, behavior: E(i) });
    const O = ((h = b == null ? void 0 : b.document) == null ? void 0 : h.documentElement) || (b == null ? void 0 : b.documentElement) || b;
    w != null && (o.value = O.scrollLeft), S != null && (l.value = O.scrollTop);
  }
  const _ = y(false), R = ie({ left: true, right: false, top: true, bottom: false }), C = ie({ left: false, right: false, top: false, bottom: false }), L = (p) => {
    _.value && (_.value = false, C.left = false, C.right = false, C.top = false, C.bottom = false, v(p));
  }, k = Oe(L, n + d), D = (p) => {
    var V;
    if (!u) return;
    const M = ((V = p == null ? void 0 : p.document) == null ? void 0 : V.documentElement) || (p == null ? void 0 : p.documentElement) || I(p), { display: g, flexDirection: T, direction: h } = getComputedStyle(M), b = h === "rtl" ? -1 : 1, O = M.scrollLeft;
    C.left = O < o.value, C.right = O > o.value;
    const Q = Math.abs(O * b) <= (c.left || 0), te = Math.abs(O * b) + M.clientWidth >= M.scrollWidth - (c.right || 0) - ue;
    g === "flex" && T === "row-reverse" ? (R.left = te, R.right = Q) : (R.left = Q, R.right = te), o.value = O;
    let z = M.scrollTop;
    p === u.document && !z && (z = u.document.body.scrollTop), C.top = z < l.value, C.bottom = z > l.value;
    const ne = Math.abs(z) <= (c.top || 0), oe = Math.abs(z) + M.clientHeight >= M.scrollHeight - (c.bottom || 0) - ue;
    g === "flex" && T === "column-reverse" ? (R.top = oe, R.bottom = ne) : (R.top = ne, R.bottom = oe), l.value = z;
  }, F = (p) => {
    var V;
    if (!u) return;
    const M = (V = p.target.documentElement) != null ? V : p.target;
    D(M), _.value = true, k(p), m(p);
  };
  return A(e, "scroll", n ? ge(F, n, true, false) : F, a), $(() => {
    try {
      const p = E(e);
      if (!p) return;
      D(p);
    } catch (p) {
      r(p);
    }
  }), (f == null ? void 0 : f.mutation) && e != null && e !== u && e !== document && ee(e, () => {
    const p = E(e);
    p && D(p);
  }, { attributes: true, childList: true, subtree: true }), A(e, "scrollend", L, a), { x: w, y: S, isScrolling: _, arrivedState: R, directions: C, measure() {
    const p = E(e);
    u && p && D(p);
  } };
}
function st(e, t, n = {}) {
  const { window: d = W } = n;
  return je(e, t, d == null ? void 0 : d.localStorage, n);
}
const ae = "ping";
function X(e) {
  return e === true ? {} : e;
}
function it(e, t = {}) {
  const { onConnected: n, onDisconnected: d, onError: v, onMessage: m, immediate: c = true, autoConnect: s = true, autoClose: a = true, protocols: i = [] } = t, u = Z(null), r = y("CLOSED"), f = Z(), o = _e(e);
  let l, w, S = false, x = 0, _ = [], R, C;
  const L = () => {
    if (_.length && f.value && r.value === "OPEN") {
      for (const g of _) f.value.send(g);
      _ = [];
    }
  }, k = () => {
    R != null && (clearTimeout(R), R = void 0);
  }, D = () => {
    clearTimeout(C), C = void 0;
  }, F = (g = 1e3, T) => {
    k(), !(!G && !re || !f.value) && (S = true, D(), l == null ? void 0 : l(), f.value.close(g, T), f.value = void 0);
  }, p = (g, T = true) => !f.value || r.value !== "OPEN" ? (T && _.push(g), false) : (L(), f.value.send(g), true), V = () => {
    if (S || typeof o.value > "u") return;
    const g = new WebSocket(o.value, i);
    f.value = g, r.value = "CONNECTING", g.onopen = () => {
      r.value = "OPEN", x = 0, n == null ? void 0 : n(g), w == null ? void 0 : w(), L();
    }, g.onclose = (T) => {
      if (r.value = "CLOSED", D(), l == null ? void 0 : l(), d == null ? void 0 : d(g, T), !S && t.autoReconnect && (f.value == null || g === f.value)) {
        const { retries: h = -1, delay: b = 1e3, onFailed: O } = X(t.autoReconnect);
        (typeof h == "function" ? h : () => typeof h == "number" && (h < 0 || x < h))(x) ? (x += 1, R = setTimeout(V, b)) : O == null ? void 0 : O();
      }
    }, g.onerror = (T) => {
      v == null ? void 0 : v(g, T);
    }, g.onmessage = (T) => {
      if (t.heartbeat) {
        D();
        const { message: h = ae, responseMessage: b = h } = X(t.heartbeat);
        if (T.data === E(b)) return;
      }
      u.value = T.data, m == null ? void 0 : m(g, T);
    };
  };
  if (t.heartbeat) {
    const { message: g = ae, interval: T = 1e3, pongTimeout: h = 1e3 } = X(t.heartbeat), { pause: b, resume: O } = Te(() => {
      p(E(g), false), C == null && (C = setTimeout(() => {
        F(), S = false;
      }, h));
    }, T, { immediate: false });
    l = b, w = O;
  }
  a && (G && A("beforeunload", () => F(), { passive: true }), q(F));
  const M = () => {
    !G && !re || (F(), S = false, x = 0, V());
  };
  return c && M(), s && P(o, M), { data: u, status: r, close: F, send: p, open: M, ws: f };
}
function lt(e = {}) {
  const { window: t = W, ...n } = e;
  return qe(t, n);
}
function ut(e = {}) {
  const { window: t = W, initialWidth: n = Number.POSITIVE_INFINITY, initialHeight: d = Number.POSITIVE_INFINITY, listenOrientation: v = true, includeScrollbar: m = true, type: c = "inner" } = e, s = y(n), a = y(d), i = () => {
    if (t) if (c === "outer") s.value = t.outerWidth, a.value = t.outerHeight;
    else if (c === "visual" && t.visualViewport) {
      const { width: r, height: f, scale: o } = t.visualViewport;
      s.value = Math.round(r * o), a.value = Math.round(f * o);
    } else m ? (s.value = t.innerWidth, a.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, a.value = t.document.documentElement.clientHeight);
  };
  i(), $(i);
  const u = { passive: true };
  if (A("resize", i, u), t && c === "visual" && t.visualViewport && A(t.visualViewport, "resize", i, u), v) {
    const r = H("(orientation: portrait)");
    P(r, () => i());
  }
  return { width: s, height: a };
}
export {
  Xe as a,
  Qe as b,
  Ue as c,
  qe as d,
  ut as e,
  it as f,
  tt as g,
  rt as h,
  ot as i,
  et as j,
  Ye as k,
  A as l,
  je as m,
  Fe as n,
  st as o,
  nt as p,
  lt as q,
  Ze as r,
  H as s,
  Ke as t,
  Be as u
};
