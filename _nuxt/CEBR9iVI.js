import { n as B, t as q, i as G, c as le, d as j, e as we, b as ge, p as J, f as $, g as ae, h as te, j as be, k as ye, m as Se, l as Ee, o as Oe, q as Te, r as Ce, s as ue, v as xe } from "./YKo2rOHu.js";
import { j as R, P as E, L as I, E as _e, a0 as ce, B as X, as as T, V as Re, aM as Me, u as ke, d as ne, ah as oe, aN as de, aO as We, aP as Ae, a1 as Ne } from "./ClGJWWej.js";
function Ke(e = {}) {
  const { inheritAttrs: t = true } = e, n = E(), c = ne({ setup(m, { slots: a }) {
    return () => {
      n.value = a.default;
    };
  } }), v = ne({ inheritAttrs: t, props: e.props, setup(m, { attrs: a, slots: r }) {
    return () => {
      var u;
      n.value;
      const i = (u = n.value) == null ? void 0 : u.call(n, { ...e.props == null ? De(a) : m, $slots: r });
      return t && (i == null ? void 0 : i.length) === 1 ? i[0] : i;
    };
  } });
  return Se({ define: c, reuse: v }, [c, v]);
}
function De(e) {
  const t = {};
  for (const n in e) t[Ee(n)] = e[n];
  return t;
}
const k = G ? window : void 0, Ie = G ? window.document : void 0;
function A(e) {
  var t;
  const n = T(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function V(...e) {
  const t = [], n = () => {
    t.forEach((r) => r()), t.length = 0;
  }, c = (r, u, i, d) => (r.addEventListener(u, i, d), () => r.removeEventListener(u, i, d)), v = R(() => {
    const r = $(T(e[0])).filter((u) => u != null);
    return r.every((u) => typeof u != "string") ? r : void 0;
  }), m = ae(() => {
    var r, u;
    return [(u = (r = v.value) == null ? void 0 : r.map((i) => A(i))) != null ? u : [k].filter((i) => i != null), $(T(v.value ? e[1] : e[0])), $(ke(v.value ? e[2] : e[1])), T(v.value ? e[3] : e[2])];
  }, ([r, u, i, d]) => {
    if (n(), !(r == null ? void 0 : r.length) || !(u == null ? void 0 : u.length) || !(i == null ? void 0 : i.length)) return;
    const o = ye(d) ? { ...d } : d;
    t.push(...r.flatMap((f) => u.flatMap((s) => i.map((l) => c(f, s, l, o)))));
  }, { flush: "post" }), a = () => {
    m(), n();
  };
  return q(n), a;
}
function Ve() {
  const e = E(false), t = ce();
  return t && _e(() => {
    e.value = true;
  }, t), e;
}
function Y(e) {
  const t = Ve();
  return R(() => (t.value, !!e()));
}
function fe(e, t, n = {}) {
  const { window: c = k, ...v } = n;
  let m;
  const a = Y(() => c && "MutationObserver" in c), r = () => {
    m && (m.disconnect(), m = void 0);
  }, u = R(() => {
    const f = T(e), s = $(f).map(A).filter(ue);
    return new Set(s);
  }), i = I(() => u.value, (f) => {
    r(), a.value && f.size && (m = new MutationObserver(t), f.forEach((s) => m.observe(s, v)));
  }, { immediate: true, flush: "post" }), d = () => m == null ? void 0 : m.takeRecords(), o = () => {
    i(), r();
  };
  return q(o), { isSupported: a, stop: o, takeRecords: d };
}
function Ye(e, t = null) {
  const n = ce();
  let c = () => {
  };
  const v = We((m, a) => (c = a, { get() {
    var r, u;
    return m(), (u = (r = n == null ? void 0 : n.proxy) == null ? void 0 : r.$refs[e]) != null ? u : t;
  }, set() {
  } }));
  return j(c), Ae(c), v;
}
function Qe(e, t = {}) {
  const { immediate: n = true, fpsLimit: c = void 0, window: v = k, once: m = false } = t, a = E(false), r = R(() => c ? 1e3 / T(c) : null);
  let u = 0, i = null;
  function d(s) {
    if (!a.value || !v) return;
    u || (u = s);
    const l = s - u;
    if (r.value && l < r.value) {
      i = v.requestAnimationFrame(d);
      return;
    }
    if (u = s, e({ delta: l, timestamp: s }), m) {
      a.value = false, i = null;
      return;
    }
    i = v.requestAnimationFrame(d);
  }
  function o() {
    !a.value && v && (a.value = true, u = 0, i = v.requestAnimationFrame(d));
  }
  function f() {
    a.value = false, i != null && v && (v.cancelAnimationFrame(i), i = null);
  }
  return n && o(), q(f), { isActive: de(a), pause: f, resume: o };
}
const Le = Symbol("vueuse-ssr-width");
function ve() {
  const e = Me() ? be(Le, null) : null;
  return typeof e == "number" ? e : void 0;
}
function F(e, t = {}) {
  const { window: n = k, ssrWidth: c = ve() } = t, v = Y(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), m = E(typeof c == "number"), a = E(), r = E(false), u = (i) => {
    r.value = i.matches;
  };
  return Re(() => {
    if (m.value) {
      m.value = !v.value;
      const i = T(e).split(",");
      r.value = i.some((d) => {
        const o = d.includes("not all"), f = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), s = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let l = !!(f || s);
        return f && l && (l = c >= J(f[1])), s && l && (l = c <= J(s[1])), o ? !l : l;
      });
      return;
    }
    v.value && (a.value = n.matchMedia(T(e)), r.value = a.value.matches);
  }), V(a, "change", u, { passive: true }), R(() => r.value);
}
const Xe = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function Ze(e, t = {}) {
  function n(s, l) {
    let b = T(e[T(s)]);
    return l != null && (b = Ce(b, l)), typeof b == "number" && (b = `${b}px`), b;
  }
  const { window: c = k, strategy: v = "min-width", ssrWidth: m = ve() } = t, a = typeof m == "number", r = a ? E(false) : { value: true };
  a && j(() => r.value = !!c);
  function u(s, l) {
    return !r.value && a ? s === "min" ? m >= J(l) : m <= J(l) : c ? c.matchMedia(`(${s}-width: ${l})`).matches : false;
  }
  const i = (s) => F(() => `(min-width: ${n(s)})`, t), d = (s) => F(() => `(max-width: ${n(s)})`, t), o = Object.keys(e).reduce((s, l) => (Object.defineProperty(s, l, { get: () => v === "min-width" ? i(l) : d(l), enumerable: true, configurable: true }), s), {});
  function f() {
    const s = Object.keys(e).map((l) => [l, o[l], J(n(l))]).sort((l, b) => l[2] - b[2]);
    return R(() => s.filter(([, l]) => l.value).map(([l]) => l));
  }
  return Object.assign(o, { greaterOrEqual: i, smallerOrEqual: d, greater(s) {
    return F(() => `(min-width: ${n(s, 0.1)})`, t);
  }, smaller(s) {
    return F(() => `(max-width: ${n(s, -0.1)})`, t);
  }, between(s, l) {
    return F(() => `(min-width: ${n(s)}) and (max-width: ${n(l, -0.1)})`, t);
  }, isGreater(s) {
    return u("min", n(s, 0.1));
  }, isGreaterOrEqual(s) {
    return u("min", n(s));
  }, isSmaller(s) {
    return u("max", n(s, -0.1));
  }, isSmallerOrEqual(s) {
    return u("max", n(s));
  }, isInBetween(s, l) {
    return u("min", n(s)) && u("max", n(l, -0.1));
  }, current: f, active() {
    const s = f();
    return R(() => s.value.length === 0 ? "" : s.value.at(v === "min-width" ? -1 : 0));
  } });
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K = "__vueuse_ssr_handlers__", Pe = ze();
function ze() {
  return K in U || (U[K] = U[K] || {}), U[K];
}
function me(e, t) {
  return Pe[e] || t;
}
function Fe(e) {
  return F("(prefers-color-scheme: dark)", e);
}
function je(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const He = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, re = "vueuse-storage";
function he(e, t, n, c = {}) {
  var v;
  const { flush: m = "pre", deep: a = true, listenToStorageChanges: r = true, writeDefaults: u = true, mergeDefaults: i = false, shallow: d, window: o = k, eventFilter: f, onError: s = (p) => {
    console.error(p);
  }, initOnMounted: l } = c, b = (d ? E : X)(typeof t == "function" ? t() : t), S = R(() => T(e));
  if (!n) try {
    n = me("getDefaultStorage", () => {
      var p;
      return (p = k) == null ? void 0 : p.localStorage;
    })();
  } catch (p) {
    s(p);
  }
  if (!n) return b;
  const y = T(t), O = je(y), N = (v = c.serializer) != null ? v : He[O], { pause: x, resume: D } = we(b, () => g(b.value), { flush: m, deep: a, eventFilter: f });
  I(S, () => C(), { flush: m }), o && r && j(() => {
    n instanceof Storage ? V(o, "storage", C, { passive: true }) : V(o, re, W), l && C();
  }), l || C();
  function L(p, h) {
    if (o) {
      const w = { key: S.value, oldValue: p, newValue: h, storageArea: n };
      o.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", w) : new CustomEvent(re, { detail: w }));
    }
  }
  function g(p) {
    try {
      const h = n.getItem(S.value);
      if (p == null) L(h, null), n.removeItem(S.value);
      else {
        const w = N.write(p);
        h !== w && (n.setItem(S.value, w), L(h, w));
      }
    } catch (h) {
      s(h);
    }
  }
  function _(p) {
    const h = p ? p.newValue : n.getItem(S.value);
    if (h == null) return u && y != null && n.setItem(S.value, N.write(y)), y;
    if (!p && i) {
      const w = N.read(h);
      return typeof i == "function" ? i(w, y) : O === "object" && !Array.isArray(w) ? { ...y, ...w } : w;
    } else return typeof h != "string" ? h : N.read(h);
  }
  function C(p) {
    if (!(p && p.storageArea !== n)) {
      if (p && p.key == null) {
        b.value = y;
        return;
      }
      if (!(p && p.key !== S.value)) {
        x();
        try {
          (p == null ? void 0 : p.newValue) !== N.write(b.value) && (b.value = _(p));
        } catch (h) {
          s(h);
        } finally {
          p ? Ne(D) : D();
        }
      }
    }
  }
  function W(p) {
    C(p.detail);
  }
  return b;
}
const Be = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function $e(e = {}) {
  const { selector: t = "html", attribute: n = "class", initialValue: c = "auto", window: v = k, storage: m, storageKey: a = "vueuse-color-scheme", listenToStorageChanges: r = true, storageRef: u, emitAuto: i, disableTransition: d = true } = e, o = { auto: "", light: "light", dark: "dark", ...e.modes || {} }, f = Fe({ window: v }), s = R(() => f.value ? "dark" : "light"), l = u || (a == null ? le(c) : he(a, c, m, { window: v, listenToStorageChanges: r })), b = R(() => l.value === "auto" ? s.value : l.value), S = me("updateHTMLAttrs", (x, D, L) => {
    const g = typeof x == "string" ? v == null ? void 0 : v.document.querySelector(x) : A(x);
    if (!g) return;
    const _ = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
    let W = null;
    if (D === "class") {
      const h = L.split(/\s/g);
      Object.values(o).flatMap((w) => (w || "").split(/\s/g)).filter(Boolean).forEach((w) => {
        h.includes(w) ? _.add(w) : C.add(w);
      });
    } else W = { key: D, value: L };
    if (_.size === 0 && C.size === 0 && W === null) return;
    let p;
    d && (p = v.document.createElement("style"), p.appendChild(document.createTextNode(Be)), v.document.head.appendChild(p));
    for (const h of _) g.classList.add(h);
    for (const h of C) g.classList.remove(h);
    W && g.setAttribute(W.key, W.value), d && (v.getComputedStyle(p).opacity, document.head.removeChild(p));
  });
  function y(x) {
    var D;
    S(t, n, (D = o[x]) != null ? D : x);
  }
  function O(x) {
    e.onChanged ? e.onChanged(x, y) : y(x);
  }
  I(b, O, { flush: "post", immediate: true }), j(() => O(b.value));
  const N = R({ get() {
    return i ? l.value : b.value;
  }, set(x) {
    l.value = x;
  } });
  return Object.assign(N, { store: l, system: s, state: b });
}
function et(e, t, n = {}) {
  const { window: c = k, initialValue: v, observe: m = false } = n, a = E(v), r = R(() => {
    var i;
    return A(t) || ((i = c == null ? void 0 : c.document) == null ? void 0 : i.documentElement);
  });
  function u() {
    var i;
    const d = T(e), o = T(r);
    if (o && c && d) {
      const f = (i = c.getComputedStyle(o).getPropertyValue(d)) == null ? void 0 : i.trim();
      a.value = f || a.value || v;
    }
  }
  return m && fe(r, u, { attributeFilter: ["style", "class"], window: c }), I([r, () => T(e)], (i, d) => {
    d[0] && d[1] && d[0].style.removeProperty(d[1]), u();
  }, { immediate: true }), I([a, r], ([i, d]) => {
    const o = T(e);
    (d == null ? void 0 : d.style) && o && (i == null ? d.style.removeProperty(o) : d.style.setProperty(o, i));
  }, { immediate: true }), a;
}
function tt(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "" } = e, c = $e({ ...e, onChanged: (a, r) => {
    var u;
    e.onChanged ? (u = e.onChanged) == null || u.call(e, a === "dark", r, a) : r(a);
  }, modes: { dark: t, light: n } }), v = R(() => c.system.value);
  return R({ get() {
    return c.value === "dark";
  }, set(a) {
    const r = a ? "dark" : "light";
    v.value === r ? c.value = "auto" : c.value = r;
  } });
}
function nt(e = {}) {
  const { window: t = k } = e, n = E(1), c = F(() => `(resolution: ${n.value}dppx)`, e);
  let v = B;
  return t && (v = ae(c, () => n.value = t.devicePixelRatio)), { pixelRatio: de(n), stop: v };
}
function ot(e = {}) {
  const { document: t = Ie } = e;
  if (!t) return E("visible");
  const n = E(t.visibilityState);
  return V(t, "visibilitychange", () => {
    n.value = t.visibilityState;
  }, { passive: true }), n;
}
function pe(e, t, n = {}) {
  const { window: c = k, ...v } = n;
  let m;
  const a = Y(() => c && "ResizeObserver" in c), r = () => {
    m && (m.disconnect(), m = void 0);
  }, u = R(() => {
    const o = T(e);
    return Array.isArray(o) ? o.map((f) => A(f)) : [A(o)];
  }), i = I(u, (o) => {
    if (r(), a.value && c) {
      m = new ResizeObserver(t);
      for (const f of o) f && m.observe(f, v);
    }
  }, { immediate: true, flush: "post" }), d = () => {
    r(), i();
  };
  return q(d), { isSupported: a, stop: d };
}
function rt(e, t = {}) {
  const { reset: n = true, windowResize: c = true, windowScroll: v = true, immediate: m = true, updateTiming: a = "sync" } = t, r = E(0), u = E(0), i = E(0), d = E(0), o = E(0), f = E(0), s = E(0), l = E(0);
  function b() {
    const y = A(e);
    if (!y) {
      n && (r.value = 0, u.value = 0, i.value = 0, d.value = 0, o.value = 0, f.value = 0, s.value = 0, l.value = 0);
      return;
    }
    const O = y.getBoundingClientRect();
    r.value = O.height, u.value = O.bottom, i.value = O.left, d.value = O.right, o.value = O.top, f.value = O.width, s.value = O.x, l.value = O.y;
  }
  function S() {
    a === "sync" ? b() : a === "next-frame" && requestAnimationFrame(() => b());
  }
  return pe(e, S), I(() => A(e), (y) => !y && S()), fe(e, S, { attributeFilter: ["style", "class"] }), v && V("scroll", S, { capture: true, passive: true }), c && V("resize", S, { passive: true }), j(() => {
    m && S();
  }), { height: r, bottom: u, left: i, right: d, top: o, width: f, x: s, y: l, update: S };
}
function st(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: c = k, box: v = "content-box" } = n, m = R(() => {
    var o, f;
    return (f = (o = A(e)) == null ? void 0 : o.namespaceURI) == null ? void 0 : f.includes("svg");
  }), a = E(t.width), r = E(t.height), { stop: u } = pe(e, ([o]) => {
    const f = v === "border-box" ? o.borderBoxSize : v === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
    if (c && m.value) {
      const s = A(e);
      if (s) {
        const l = s.getBoundingClientRect();
        a.value = l.width, r.value = l.height;
      }
    } else if (f) {
      const s = $(f);
      a.value = s.reduce((l, { inlineSize: b }) => l + b, 0), r.value = s.reduce((l, { blockSize: b }) => l + b, 0);
    } else a.value = o.contentRect.width, r.value = o.contentRect.height;
  }, n);
  j(() => {
    const o = A(e);
    o && (a.value = "offsetWidth" in o ? o.offsetWidth : t.width, r.value = "offsetHeight" in o ? o.offsetHeight : t.height);
  });
  const i = I(() => A(e), (o) => {
    a.value = o ? t.width : 0, r.value = o ? t.height : 0;
  });
  function d() {
    u(), i();
  }
  return { width: a, height: r, stop: d };
}
function qe(e, t, n = {}) {
  const { root: c, rootMargin: v = "0px", threshold: m = 0, window: a = k, immediate: r = true } = n, u = Y(() => a && "IntersectionObserver" in a), i = R(() => {
    const l = T(e);
    return $(l).map(A).filter(ue);
  });
  let d = B;
  const o = E(r), f = u.value ? I(() => [i.value, A(c), o.value], ([l, b]) => {
    if (d(), !o.value || !l.length) return;
    const S = new IntersectionObserver(t, { root: A(b), rootMargin: v, threshold: m });
    l.forEach((y) => y && S.observe(y)), d = () => {
      S.disconnect(), d = B;
    };
  }, { immediate: r, flush: "post" }) : B, s = () => {
    d(), f(), o.value = false;
  };
  return q(s), { isSupported: u, isActive: o, pause() {
    d(), o.value = false;
  }, resume() {
    o.value = true;
  }, stop: s };
}
function it(e, t = {}) {
  const { window: n = k, scrollTarget: c, threshold: v = 0, rootMargin: m, once: a = false } = t, r = E(false), { stop: u } = qe(e, (i) => {
    let d = r.value, o = 0;
    for (const f of i) f.time >= o && (o = f.time, d = f.isIntersecting);
    r.value = d, a && Te(r, () => {
      u();
    });
  }, { root: c, window: n, threshold: v, rootMargin: T(m) });
  return r;
}
const se = 1;
function Ge(e, t = {}) {
  const { throttle: n = 0, idle: c = 200, onStop: v = B, onScroll: m = B, offset: a = { left: 0, right: 0, top: 0, bottom: 0 }, eventListenerOptions: r = { capture: false, passive: true }, behavior: u = "auto", window: i = k, onError: d = (g) => {
    console.error(g);
  } } = t, o = E(0), f = E(0), s = R({ get() {
    return o.value;
  }, set(g) {
    b(g, void 0);
  } }), l = R({ get() {
    return f.value;
  }, set(g) {
    b(void 0, g);
  } });
  function b(g, _) {
    var C, W, p, h;
    if (!i) return;
    const w = T(e);
    if (!w) return;
    (p = w instanceof Document ? i.document.body : w) == null || p.scrollTo({ top: (C = T(_)) != null ? C : l.value, left: (W = T(g)) != null ? W : s.value, behavior: T(u) });
    const M = ((h = w == null ? void 0 : w.document) == null ? void 0 : h.documentElement) || (w == null ? void 0 : w.documentElement) || w;
    s != null && (o.value = M.scrollLeft), l != null && (f.value = M.scrollTop);
  }
  const S = E(false), y = oe({ left: true, right: false, top: true, bottom: false }), O = oe({ left: false, right: false, top: false, bottom: false }), N = (g) => {
    S.value && (S.value = false, O.left = false, O.right = false, O.top = false, O.bottom = false, v(g));
  }, x = xe(N, n + c), D = (g) => {
    var _;
    if (!i) return;
    const C = ((_ = g == null ? void 0 : g.document) == null ? void 0 : _.documentElement) || (g == null ? void 0 : g.documentElement) || A(g), { display: W, flexDirection: p, direction: h } = getComputedStyle(C), w = h === "rtl" ? -1 : 1, M = C.scrollLeft;
    O.left = M < o.value, O.right = M > o.value;
    const P = Math.abs(M * w) <= (a.left || 0), H = Math.abs(M * w) + C.clientWidth >= C.scrollWidth - (a.right || 0) - se;
    W === "flex" && p === "row-reverse" ? (y.left = H, y.right = P) : (y.left = P, y.right = H), o.value = M;
    let z = C.scrollTop;
    g === i.document && !z && (z = i.document.body.scrollTop), O.top = z < f.value, O.bottom = z > f.value;
    const Z = Math.abs(z) <= (a.top || 0), ee = Math.abs(z) + C.clientHeight >= C.scrollHeight - (a.bottom || 0) - se;
    W === "flex" && p === "column-reverse" ? (y.top = ee, y.bottom = Z) : (y.top = Z, y.bottom = ee), f.value = z;
  }, L = (g) => {
    var _;
    if (!i) return;
    const C = (_ = g.target.documentElement) != null ? _ : g.target;
    D(C), S.value = true, x(g), m(g);
  };
  return V(e, "scroll", n ? Oe(L, n, true, false) : L, r), j(() => {
    try {
      const g = T(e);
      if (!g) return;
      D(g);
    } catch (g) {
      d(g);
    }
  }), V(e, "scrollend", N, r), { x: s, y: l, isScrolling: S, arrivedState: y, directions: O, measure() {
    const g = T(e);
    i && g && D(g);
  } };
}
function lt(e, t, n = {}) {
  const { window: c = k } = n;
  return he(e, t, c == null ? void 0 : c.localStorage, n);
}
const ie = "ping";
function Q(e) {
  return e === true ? {} : e;
}
function at(e, t = {}) {
  const { onConnected: n, onDisconnected: c, onError: v, onMessage: m, immediate: a = true, autoConnect: r = true, autoClose: u = true, protocols: i = [] } = t, d = X(null), o = E("CLOSED"), f = X(), s = le(e);
  let l, b, S = false, y = 0, O = [], N, x;
  const D = () => {
    if (O.length && f.value && o.value === "OPEN") {
      for (const h of O) f.value.send(h);
      O = [];
    }
  }, L = () => {
    N != null && (clearTimeout(N), N = void 0);
  }, g = () => {
    clearTimeout(x), x = void 0;
  }, _ = (h = 1e3, w) => {
    L(), !(!G && !te || !f.value) && (S = true, g(), l == null ? void 0 : l(), f.value.close(h, w), f.value = void 0);
  }, C = (h, w = true) => !f.value || o.value !== "OPEN" ? (w && O.push(h), false) : (D(), f.value.send(h), true), W = () => {
    if (S || typeof s.value > "u") return;
    const h = new WebSocket(s.value, i);
    f.value = h, o.value = "CONNECTING", h.onopen = () => {
      o.value = "OPEN", y = 0, n == null ? void 0 : n(h), b == null ? void 0 : b(), D();
    }, h.onclose = (w) => {
      if (o.value = "CLOSED", g(), l == null ? void 0 : l(), c == null ? void 0 : c(h, w), !S && t.autoReconnect && (f.value == null || h === f.value)) {
        const { retries: M = -1, delay: P = 1e3, onFailed: H } = Q(t.autoReconnect);
        (typeof M == "function" ? M : () => typeof M == "number" && (M < 0 || y < M))(y) ? (y += 1, N = setTimeout(W, P)) : H == null ? void 0 : H();
      }
    }, h.onerror = (w) => {
      v == null ? void 0 : v(h, w);
    }, h.onmessage = (w) => {
      if (t.heartbeat) {
        g();
        const { message: M = ie, responseMessage: P = M } = Q(t.heartbeat);
        if (w.data === T(P)) return;
      }
      d.value = w.data, m == null ? void 0 : m(h, w);
    };
  };
  if (t.heartbeat) {
    const { message: h = ie, interval: w = 1e3, pongTimeout: M = 1e3 } = Q(t.heartbeat), { pause: P, resume: H } = ge(() => {
      C(T(h), false), x == null && (x = setTimeout(() => {
        _(), S = false;
      }, M));
    }, w, { immediate: false });
    l = P, b = H;
  }
  u && (G && V("beforeunload", () => _(), { passive: true }), q(_));
  const p = () => {
    !G && !te || (_(), S = false, y = 0, W());
  };
  return a && p(), r && I(s, p), { data: d, status: o, close: _, send: C, open: p, ws: f };
}
function ut(e = {}) {
  const { window: t = k, ...n } = e;
  return Ge(t, n);
}
function ct(e = {}) {
  const { window: t = k, initialWidth: n = Number.POSITIVE_INFINITY, initialHeight: c = Number.POSITIVE_INFINITY, listenOrientation: v = true, includeScrollbar: m = true, type: a = "inner" } = e, r = E(n), u = E(c), i = () => {
    if (t) if (a === "outer") r.value = t.outerWidth, u.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: o, height: f, scale: s } = t.visualViewport;
      r.value = Math.round(o * s), u.value = Math.round(f * s);
    } else m ? (r.value = t.innerWidth, u.value = t.innerHeight) : (r.value = t.document.documentElement.clientWidth, u.value = t.document.documentElement.clientHeight);
  };
  i(), j(i);
  const d = { passive: true };
  if (V("resize", i, d), t && a === "visual" && t.visualViewport && V(t.visualViewport, "resize", i, d), v) {
    const o = F("(orientation: portrait)");
    I(o, () => i());
  }
  return { width: r, height: u };
}
export {
  tt as a,
  Ze as b,
  Ke as c,
  Xe as d,
  Ge as e,
  ct as f,
  at as g,
  ot as h,
  Qe as i,
  it as j,
  st as k,
  nt as l,
  V as m,
  lt as n,
  rt as o,
  ut as p,
  et as q,
  Ye as t,
  qe as u
};
