import { n as B, t as q, d as G, e as ce, f as j, g as be, h as $, j as fe, k as ye, l as Se, m as Ee, o as Oe, p as Te, q as Ce, r as J, s as xe, v as de, x as _e, a as Re, y as re } from "./DeSMYd_K.js";
import { j as k, P as S, Y as L, G as Me, a1 as ve, C as Z, aA as O, V as ke, aQ as Ae, u as We, d as se, ar as ie, aR as me, aS as De, aa as Ie, a2 as Ne } from "./BguRs3jF.js";
function Qe(e = {}) {
  const { inheritAttrs: t = true } = e, n = S(), f = se({ setup(m, { slots: a }) {
    return () => {
      n.value = a.default;
    };
  } }), d = se({ inheritAttrs: t, props: e.props, setup(m, { attrs: a, slots: o }) {
    return () => {
      var l;
      n.value;
      const u = (l = n.value) == null ? void 0 : l.call(n, { ...e.props == null ? Ve(a) : m, $slots: o });
      return t && (u == null ? void 0 : u.length) === 1 ? u[0] : u;
    };
  } });
  return Ee({ define: f, reuse: d }, [f, d]);
}
function Ve(e) {
  const t = {};
  for (const n in e) t[Oe(n)] = e[n];
  return t;
}
const W = G ? window : void 0, Le = G ? window.document : void 0;
function D(e) {
  var t;
  const n = O(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function P(...e) {
  const t = [], n = () => {
    t.forEach((o) => o()), t.length = 0;
  }, f = (o, l, u, c) => (o.addEventListener(l, u, c), () => o.removeEventListener(l, u, c)), d = k(() => {
    const o = $(O(e[0])).filter((l) => l != null);
    return o.every((l) => typeof l != "string") ? o : void 0;
  }), m = fe(() => {
    var o, l;
    return [(l = (o = d.value) == null ? void 0 : o.map((u) => D(u))) != null ? l : [W].filter((u) => u != null), $(O(d.value ? e[1] : e[0])), $(We(d.value ? e[2] : e[1])), O(d.value ? e[3] : e[2])];
  }, ([o, l, u, c]) => {
    if (n(), !(o == null ? void 0 : o.length) || !(l == null ? void 0 : l.length) || !(u == null ? void 0 : u.length)) return;
    const s = Se(c) ? { ...c } : c;
    t.push(...o.flatMap((v) => l.flatMap((r) => u.map((i) => f(v, r, i, s)))));
  }, { flush: "post" }), a = () => {
    m(), n();
  };
  return q(n), a;
}
function Pe() {
  const e = S(false), t = ve();
  return t && Me(() => {
    e.value = true;
  }, t), e;
}
function K(e) {
  const t = Pe();
  return k(() => (t.value, !!e()));
}
function ee(e, t, n = {}) {
  const { window: f = W, ...d } = n;
  let m;
  const a = K(() => f && "MutationObserver" in f), o = () => {
    m && (m.disconnect(), m = void 0);
  }, l = k(() => {
    const v = O(e), r = $(v).map(D).filter(de);
    return new Set(r);
  }), u = L(() => l.value, (v) => {
    o(), a.value && v.size && (m = new MutationObserver(t), v.forEach((r) => m.observe(r, d)));
  }, { immediate: true, flush: "post" }), c = () => m == null ? void 0 : m.takeRecords(), s = () => {
    u(), o();
  };
  return q(s), { isSupported: a, stop: s, takeRecords: c };
}
function Xe(e, t = null) {
  const n = ve();
  let f = () => {
  };
  const d = De((m, a) => (f = a, { get() {
    var o, l;
    return m(), (l = (o = n == null ? void 0 : n.proxy) == null ? void 0 : o.$refs[e]) != null ? l : t;
  }, set() {
  } }));
  return j(f), Ie(f), d;
}
function Ze(e, t = {}) {
  const { immediate: n = true, fpsLimit: f = void 0, window: d = W, once: m = false } = t, a = S(false), o = k(() => f ? 1e3 / O(f) : null);
  let l = 0, u = null;
  function c(r) {
    if (!a.value || !d) return;
    l || (l = r);
    const i = r - l;
    if (o.value && i < o.value) {
      u = d.requestAnimationFrame(c);
      return;
    }
    if (l = r, e({ delta: i, timestamp: r }), m) {
      a.value = false, u = null;
      return;
    }
    u = d.requestAnimationFrame(c);
  }
  function s() {
    !a.value && d && (a.value = true, l = 0, u = d.requestAnimationFrame(c));
  }
  function v() {
    a.value = false, u != null && d && (d.cancelAnimationFrame(u), u = null);
  }
  return n && s(), q(v), { isActive: me(a), pause: v, resume: s };
}
const ze = Symbol("vueuse-ssr-width");
function he() {
  const e = Ae() ? ye(ze, null) : null;
  return typeof e == "number" ? e : void 0;
}
function F(e, t = {}) {
  const { window: n = W, ssrWidth: f = he() } = t, d = K(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), m = S(typeof f == "number"), a = S(), o = S(false), l = (u) => {
    o.value = u.matches;
  };
  return ke(() => {
    if (m.value) {
      m.value = !d.value;
      const u = O(e).split(",");
      o.value = u.some((c) => {
        const s = c.includes("not all"), v = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let i = !!(v || r);
        return v && i && (i = f >= J(v[1])), r && i && (i = f <= J(r[1])), s ? !i : i;
      });
      return;
    }
    d.value && (a.value = n.matchMedia(O(e)), o.value = a.value.matches);
  }), P(a, "change", l, { passive: true }), k(() => o.value);
}
const et = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function tt(e, t = {}) {
  function n(r, i) {
    let w = O(e[O(r)]);
    return i != null && (w = xe(w, i)), typeof w == "number" && (w = `${w}px`), w;
  }
  const { window: f = W, strategy: d = "min-width", ssrWidth: m = he() } = t, a = typeof m == "number", o = a ? S(false) : { value: true };
  a && j(() => o.value = !!f);
  function l(r, i) {
    return !o.value && a ? r === "min" ? m >= J(i) : m <= J(i) : f ? f.matchMedia(`(${r}-width: ${i})`).matches : false;
  }
  const u = (r) => F(() => `(min-width: ${n(r)})`, t), c = (r) => F(() => `(max-width: ${n(r)})`, t), s = Object.keys(e).reduce((r, i) => (Object.defineProperty(r, i, { get: () => d === "min-width" ? u(i) : c(i), enumerable: true, configurable: true }), r), {});
  function v() {
    const r = Object.keys(e).map((i) => [i, s[i], J(n(i))]).sort((i, w) => i[2] - w[2]);
    return k(() => r.filter(([, i]) => i.value).map(([i]) => i));
  }
  return Object.assign(s, { greaterOrEqual: u, smallerOrEqual: c, greater(r) {
    return F(() => `(min-width: ${n(r, 0.1)})`, t);
  }, smaller(r) {
    return F(() => `(max-width: ${n(r, -0.1)})`, t);
  }, between(r, i) {
    return F(() => `(min-width: ${n(r)}) and (max-width: ${n(i, -0.1)})`, t);
  }, isGreater(r) {
    return l("min", n(r, 0.1));
  }, isGreaterOrEqual(r) {
    return l("min", n(r));
  }, isSmaller(r) {
    return l("max", n(r, -0.1));
  }, isSmallerOrEqual(r) {
    return l("max", n(r));
  }, isInBetween(r, i) {
    return l("min", n(r)) && l("max", n(i, -0.1));
  }, current: v, active() {
    const r = v();
    return k(() => r.value.length === 0 ? "" : r.value.at(d === "min-width" ? -1 : 0));
  } });
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", Fe = je();
function je() {
  return Y in U || (U[Y] = U[Y] || {}), U[Y];
}
function pe(e, t) {
  return Fe[e] || t;
}
function He(e) {
  return F("(prefers-color-scheme: dark)", e);
}
function Be(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const $e = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, ae = "vueuse-storage";
function we(e, t, n, f = {}) {
  var d;
  const { flush: m = "pre", deep: a = true, listenToStorageChanges: o = true, writeDefaults: l = true, mergeDefaults: u = false, shallow: c, window: s = W, eventFilter: v, onError: r = (h) => {
    console.error(h);
  }, initOnMounted: i } = f, w = (c ? S : Z)(typeof t == "function" ? t() : t), y = k(() => O(e));
  if (!n) try {
    n = pe("getDefaultStorage", () => {
      var h;
      return (h = W) == null ? void 0 : h.localStorage;
    })();
  } catch (h) {
    r(h);
  }
  if (!n) return w;
  const T = O(t), _ = Be(T), M = (d = f.serializer) != null ? d : $e[_], { pause: E, resume: N } = be(w, () => A(w.value), { flush: m, deep: a, eventFilter: v });
  L(y, () => g(), { flush: m });
  let z = false;
  const I = (h) => {
    i && !z || g(h);
  }, V = (h) => {
    i && !z || C(h);
  };
  s && o && (n instanceof Storage ? P(s, "storage", I, { passive: true }) : P(s, ae, V)), i ? j(() => {
    z = true, g();
  }) : g();
  function p(h, b) {
    if (s) {
      const x = { key: y.value, oldValue: h, newValue: b, storageArea: n };
      s.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", x) : new CustomEvent(ae, { detail: x }));
    }
  }
  function A(h) {
    try {
      const b = n.getItem(y.value);
      if (h == null) p(b, null), n.removeItem(y.value);
      else {
        const x = M.write(h);
        b !== x && (n.setItem(y.value, x), p(b, x));
      }
    } catch (b) {
      r(b);
    }
  }
  function R(h) {
    const b = h ? h.newValue : n.getItem(y.value);
    if (b == null) return l && T != null && n.setItem(y.value, M.write(T)), T;
    if (!h && u) {
      const x = M.read(b);
      return typeof u == "function" ? u(x, T) : _ === "object" && !Array.isArray(x) ? { ...T, ...x } : x;
    } else return typeof b != "string" ? b : M.read(b);
  }
  function g(h) {
    if (!(h && h.storageArea !== n)) {
      if (h && h.key == null) {
        w.value = T;
        return;
      }
      if (!(h && h.key !== y.value)) {
        E();
        try {
          (h == null ? void 0 : h.newValue) !== M.write(w.value) && (w.value = R(h));
        } catch (b) {
          r(b);
        } finally {
          h ? Ne(N) : N();
        }
      }
    }
  }
  function C(h) {
    g(h.detail);
  }
  return w;
}
const qe = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ge(e = {}) {
  const { selector: t = "html", attribute: n = "class", initialValue: f = "auto", window: d = W, storage: m, storageKey: a = "vueuse-color-scheme", listenToStorageChanges: o = true, storageRef: l, emitAuto: u, disableTransition: c = true } = e, s = { auto: "", light: "light", dark: "dark", ...e.modes || {} }, v = He({ window: d }), r = k(() => v.value ? "dark" : "light"), i = l || (a == null ? ce(f) : we(a, f, m, { window: d, listenToStorageChanges: o })), w = k(() => i.value === "auto" ? r.value : i.value), y = pe("updateHTMLAttrs", (E, N, z) => {
    const I = typeof E == "string" ? d == null ? void 0 : d.document.querySelector(E) : D(E);
    if (!I) return;
    const V = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
    let A = null;
    if (N === "class") {
      const g = z.split(/\s/g);
      Object.values(s).flatMap((C) => (C || "").split(/\s/g)).filter(Boolean).forEach((C) => {
        g.includes(C) ? V.add(C) : p.add(C);
      });
    } else A = { key: N, value: z };
    if (V.size === 0 && p.size === 0 && A === null) return;
    let R;
    c && (R = d.document.createElement("style"), R.appendChild(document.createTextNode(qe)), d.document.head.appendChild(R));
    for (const g of V) I.classList.add(g);
    for (const g of p) I.classList.remove(g);
    A && I.setAttribute(A.key, A.value), c && (d.getComputedStyle(R).opacity, document.head.removeChild(R));
  });
  function T(E) {
    var N;
    y(t, n, (N = s[E]) != null ? N : E);
  }
  function _(E) {
    e.onChanged ? e.onChanged(E, T) : T(E);
  }
  L(w, _, { flush: "post", immediate: true }), j(() => _(w.value));
  const M = k({ get() {
    return u ? i.value : w.value;
  }, set(E) {
    i.value = E;
  } });
  return Object.assign(M, { store: i, system: r, state: w });
}
function nt(e, t, n = {}) {
  const { window: f = W, initialValue: d, observe: m = false } = n, a = S(d), o = k(() => {
    var u;
    return D(t) || ((u = f == null ? void 0 : f.document) == null ? void 0 : u.documentElement);
  });
  function l() {
    var u;
    const c = O(e), s = O(o);
    if (s && f && c) {
      const v = (u = f.getComputedStyle(s).getPropertyValue(c)) == null ? void 0 : u.trim();
      a.value = v || a.value || d;
    }
  }
  return m && ee(o, l, { attributeFilter: ["style", "class"], window: f }), L([o, () => O(e)], (u, c) => {
    c[0] && c[1] && c[0].style.removeProperty(c[1]), l();
  }, { immediate: true }), L([a, o], ([u, c]) => {
    const s = O(e);
    (c == null ? void 0 : c.style) && s && (u == null ? c.style.removeProperty(s) : c.style.setProperty(s, u));
  }, { immediate: true }), a;
}
function ot(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "" } = e, f = Ge({ ...e, onChanged: (a, o) => {
    var l;
    e.onChanged ? (l = e.onChanged) == null || l.call(e, a === "dark", o, a) : o(a);
  }, modes: { dark: t, light: n } }), d = k(() => f.system.value);
  return k({ get() {
    return f.value === "dark";
  }, set(a) {
    const o = a ? "dark" : "light";
    d.value === o ? f.value = "auto" : f.value = o;
  } });
}
function rt(e = {}) {
  const { window: t = W } = e, n = S(1), f = F(() => `(resolution: ${n.value}dppx)`, e);
  let d = B;
  return t && (d = fe(f, () => n.value = t.devicePixelRatio)), { pixelRatio: me(n), stop: d };
}
function st(e = {}) {
  const { document: t = Le } = e;
  if (!t) return S("visible");
  const n = S(t.visibilityState);
  return P(t, "visibilitychange", () => {
    n.value = t.visibilityState;
  }, { passive: true }), n;
}
function ge(e, t, n = {}) {
  const { window: f = W, ...d } = n;
  let m;
  const a = K(() => f && "ResizeObserver" in f), o = () => {
    m && (m.disconnect(), m = void 0);
  }, l = k(() => {
    const s = O(e);
    return Array.isArray(s) ? s.map((v) => D(v)) : [D(s)];
  }), u = L(l, (s) => {
    if (o(), a.value && f) {
      m = new ResizeObserver(t);
      for (const v of s) v && m.observe(v, d);
    }
  }, { immediate: true, flush: "post" }), c = () => {
    o(), u();
  };
  return q(c), { isSupported: a, stop: c };
}
function it(e, t = {}) {
  const { reset: n = true, windowResize: f = true, windowScroll: d = true, immediate: m = true, updateTiming: a = "sync" } = t, o = S(0), l = S(0), u = S(0), c = S(0), s = S(0), v = S(0), r = S(0), i = S(0);
  function w() {
    const T = D(e);
    if (!T) {
      n && (o.value = 0, l.value = 0, u.value = 0, c.value = 0, s.value = 0, v.value = 0, r.value = 0, i.value = 0);
      return;
    }
    const _ = T.getBoundingClientRect();
    o.value = _.height, l.value = _.bottom, u.value = _.left, c.value = _.right, s.value = _.top, v.value = _.width, r.value = _.x, i.value = _.y;
  }
  function y() {
    a === "sync" ? w() : a === "next-frame" && requestAnimationFrame(() => w());
  }
  return ge(e, y), L(() => D(e), (T) => !T && y()), ee(e, y, { attributeFilter: ["style", "class"] }), d && P("scroll", y, { capture: true, passive: true }), f && P("resize", y, { passive: true }), j(() => {
    m && y();
  }), { height: o, bottom: l, left: u, right: c, top: s, width: v, x: r, y: i, update: y };
}
function at(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: f = W, box: d = "content-box" } = n, m = k(() => {
    var s, v;
    return (v = (s = D(e)) == null ? void 0 : s.namespaceURI) == null ? void 0 : v.includes("svg");
  }), a = S(t.width), o = S(t.height), { stop: l } = ge(e, ([s]) => {
    const v = d === "border-box" ? s.borderBoxSize : d === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    if (f && m.value) {
      const r = D(e);
      if (r) {
        const i = r.getBoundingClientRect();
        a.value = i.width, o.value = i.height;
      }
    } else if (v) {
      const r = $(v);
      a.value = r.reduce((i, { inlineSize: w }) => i + w, 0), o.value = r.reduce((i, { blockSize: w }) => i + w, 0);
    } else a.value = s.contentRect.width, o.value = s.contentRect.height;
  }, n);
  j(() => {
    const s = D(e);
    s && (a.value = "offsetWidth" in s ? s.offsetWidth : t.width, o.value = "offsetHeight" in s ? s.offsetHeight : t.height);
  });
  const u = L(() => D(e), (s) => {
    a.value = s ? t.width : 0, o.value = s ? t.height : 0;
  });
  function c() {
    l(), u();
  }
  return { width: a, height: o, stop: c };
}
function Je(e, t, n = {}) {
  const { root: f, rootMargin: d = "0px", threshold: m = 0, window: a = W, immediate: o = true } = n, l = K(() => a && "IntersectionObserver" in a), u = k(() => {
    const i = O(e);
    return $(i).map(D).filter(de);
  });
  let c = B;
  const s = S(o), v = l.value ? L(() => [u.value, D(f), s.value], ([i, w]) => {
    if (c(), !s.value || !i.length) return;
    const y = new IntersectionObserver(t, { root: D(w), rootMargin: d, threshold: m });
    i.forEach((T) => T && y.observe(T)), c = () => {
      y.disconnect(), c = B;
    };
  }, { immediate: o, flush: "post" }) : B, r = () => {
    c(), v(), s.value = false;
  };
  return q(r), { isSupported: l, isActive: s, pause() {
    c(), s.value = false;
  }, resume() {
    s.value = true;
  }, stop: r };
}
function lt(e, t = {}) {
  const { window: n = W, scrollTarget: f, threshold: d = 0, rootMargin: m, once: a = false } = t, o = S(false), { stop: l } = Je(e, (u) => {
    let c = o.value, s = 0;
    for (const v of u) v.time >= s && (s = v.time, c = v.isIntersecting);
    o.value = c, a && Ce(o, () => {
      l();
    });
  }, { root: f, window: n, threshold: d, rootMargin: O(m) });
  return o;
}
const le = 1;
function Ue(e, t = {}) {
  const { throttle: n = 0, idle: f = 200, onStop: d = B, onScroll: m = B, offset: a = { left: 0, right: 0, top: 0, bottom: 0 }, observe: o = { mutation: false }, eventListenerOptions: l = { capture: false, passive: true }, behavior: u = "auto", window: c = W, onError: s = (p) => {
    console.error(p);
  } } = t, v = typeof o == "boolean" ? { mutation: o } : o, r = S(0), i = S(0), w = k({ get() {
    return r.value;
  }, set(p) {
    T(p, void 0);
  } }), y = k({ get() {
    return i.value;
  }, set(p) {
    T(void 0, p);
  } });
  function T(p, A) {
    var R, g, C, h;
    if (!c) return;
    const b = O(e);
    if (!b) return;
    (C = b instanceof Document ? c.document.body : b) == null || C.scrollTo({ top: (R = O(A)) != null ? R : y.value, left: (g = O(p)) != null ? g : w.value, behavior: O(u) });
    const x = ((h = b == null ? void 0 : b.document) == null ? void 0 : h.documentElement) || (b == null ? void 0 : b.documentElement) || b;
    w != null && (r.value = x.scrollLeft), y != null && (i.value = x.scrollTop);
  }
  const _ = S(false), M = ie({ left: true, right: false, top: true, bottom: false }), E = ie({ left: false, right: false, top: false, bottom: false }), N = (p) => {
    _.value && (_.value = false, E.left = false, E.right = false, E.top = false, E.bottom = false, d(p));
  }, z = _e(N, n + f), I = (p) => {
    var A;
    if (!c) return;
    const R = ((A = p == null ? void 0 : p.document) == null ? void 0 : A.documentElement) || (p == null ? void 0 : p.documentElement) || D(p), { display: g, flexDirection: C, direction: h } = getComputedStyle(R), b = h === "rtl" ? -1 : 1, x = R.scrollLeft;
    E.left = x < r.value, E.right = x > r.value;
    const Q = Math.abs(x * b) <= (a.left || 0), te = Math.abs(x * b) + R.clientWidth >= R.scrollWidth - (a.right || 0) - le;
    g === "flex" && C === "row-reverse" ? (M.left = te, M.right = Q) : (M.left = Q, M.right = te), r.value = x;
    let H = R.scrollTop;
    p === c.document && !H && (H = c.document.body.scrollTop), E.top = H < i.value, E.bottom = H > i.value;
    const ne = Math.abs(H) <= (a.top || 0), oe = Math.abs(H) + R.clientHeight >= R.scrollHeight - (a.bottom || 0) - le;
    g === "flex" && C === "column-reverse" ? (M.top = oe, M.bottom = ne) : (M.top = ne, M.bottom = oe), i.value = H;
  }, V = (p) => {
    var A;
    if (!c) return;
    const R = (A = p.target.documentElement) != null ? A : p.target;
    I(R), _.value = true, z(p), m(p);
  };
  return P(e, "scroll", n ? Te(V, n, true, false) : V, l), j(() => {
    try {
      const p = O(e);
      if (!p) return;
      I(p);
    } catch (p) {
      s(p);
    }
  }), (v == null ? void 0 : v.mutation) && e != null && e !== c && e !== document && ee(e, () => {
    const p = O(e);
    p && I(p);
  }, { attributes: true, childList: true, subtree: true }), P(e, "scrollend", N, l), { x: w, y, isScrolling: _, arrivedState: M, directions: E, measure() {
    const p = O(e);
    c && p && I(p);
  } };
}
function ut(e, t, n = {}) {
  const { window: f = W } = n;
  return we(e, t, f == null ? void 0 : f.localStorage, n);
}
const ue = "ping";
function X(e) {
  return e === true ? {} : e;
}
function ct(e, t = {}) {
  const { onConnected: n, onDisconnected: f, onError: d, onMessage: m, immediate: a = true, autoConnect: o = true, autoClose: l = true, protocols: u = [] } = t, c = Z(null), s = S("CLOSED"), v = Z(), r = ce(e);
  let i, w, y = false, T = 0, _ = [], M, E;
  const N = () => {
    if (_.length && v.value && s.value === "OPEN") {
      for (const g of _) v.value.send(g);
      _ = [];
    }
  }, z = () => {
    M != null && (clearTimeout(M), M = void 0);
  }, I = () => {
    clearTimeout(E), E = void 0;
  }, V = (g = 1e3, C) => {
    z(), !(!G && !re || !v.value) && (y = true, I(), i == null ? void 0 : i(), v.value.close(g, C), v.value = void 0);
  }, p = (g, C = true) => !v.value || s.value !== "OPEN" ? (C && _.push(g), false) : (N(), v.value.send(g), true), A = () => {
    if (y || typeof r.value > "u") return;
    const g = new WebSocket(r.value, u);
    v.value = g, s.value = "CONNECTING", g.onopen = () => {
      s.value = "OPEN", T = 0, n == null ? void 0 : n(g), w == null ? void 0 : w(), N();
    }, g.onclose = (C) => {
      if (s.value = "CLOSED", I(), i == null ? void 0 : i(), f == null ? void 0 : f(g, C), !y && t.autoReconnect && (v.value == null || g === v.value)) {
        const { retries: h = -1, delay: b = 1e3, onFailed: x } = X(t.autoReconnect);
        (typeof h == "function" ? h : () => typeof h == "number" && (h < 0 || T < h))(T) ? (T += 1, M = setTimeout(A, b)) : x == null ? void 0 : x();
      }
    }, g.onerror = (C) => {
      d == null ? void 0 : d(g, C);
    }, g.onmessage = (C) => {
      if (t.heartbeat) {
        I();
        const { message: h = ue, responseMessage: b = h } = X(t.heartbeat);
        if (C.data === O(b)) return;
      }
      c.value = C.data, m == null ? void 0 : m(g, C);
    };
  };
  if (t.heartbeat) {
    const { message: g = ue, interval: C = 1e3, pongTimeout: h = 1e3 } = X(t.heartbeat), { pause: b, resume: x } = Re(() => {
      p(O(g), false), E == null && (E = setTimeout(() => {
        V(), y = false;
      }, h));
    }, C, { immediate: false });
    i = b, w = x;
  }
  l && (G && P("beforeunload", () => V(), { passive: true }), q(V));
  const R = () => {
    !G && !re || (V(), y = false, T = 0, A());
  };
  return a && R(), o && L(r, R), { data: c, status: s, close: V, send: p, open: R, ws: v };
}
function ft(e = {}) {
  const { window: t = W, ...n } = e;
  return Ue(t, n);
}
function dt(e = {}) {
  const { window: t = W, initialWidth: n = Number.POSITIVE_INFINITY, initialHeight: f = Number.POSITIVE_INFINITY, listenOrientation: d = true, includeScrollbar: m = true, type: a = "inner" } = e, o = S(n), l = S(f), u = () => {
    if (t) if (a === "outer") o.value = t.outerWidth, l.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: s, height: v, scale: r } = t.visualViewport;
      o.value = Math.round(s * r), l.value = Math.round(v * r);
    } else m ? (o.value = t.innerWidth, l.value = t.innerHeight) : (o.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight);
  };
  u(), j(u);
  const c = { passive: true };
  if (P("resize", u, c), t && a === "visual" && t.visualViewport && P(t.visualViewport, "resize", u, c), d) {
    const s = F("(orientation: portrait)");
    L(s, () => u());
  }
  return { width: o, height: l };
}
export {
  ot as a,
  tt as b,
  Qe as c,
  et as d,
  Ue as e,
  dt as f,
  ct as g,
  st as h,
  Ze as i,
  lt as j,
  at as k,
  rt as l,
  P as m,
  we as n,
  Pe as o,
  ut as p,
  it as q,
  ft as r,
  nt as s,
  Xe as t,
  Je as u,
  F as v
};
