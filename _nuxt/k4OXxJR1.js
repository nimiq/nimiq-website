import { n as B, t as q, d as G, e as le, f as H, g as we, h as $, j as ae, k as ge, l as be, m as ye, o as Se, p as Ee, q as Oe, r as J, s as Te, v as ue, x as Ce, a as xe, y as te } from "./Qjh2__OP.js";
import { j as k, P as E, Y as P, G as _e, a1 as ce, C as X, aA as T, V as Re, aQ as Me, u as ke, d as ne, ar as oe, aR as de, aS as Ae, aa as We, a2 as De } from "./g1xKa6TI.js";
function Ye(e = {}) {
  const { inheritAttrs: t = true } = e, n = E(), c = ne({ setup(m, { slots: a }) {
    return () => {
      n.value = a.default;
    };
  } }), v = ne({ inheritAttrs: t, props: e.props, setup(m, { attrs: a, slots: r }) {
    return () => {
      var u;
      n.value;
      const i = (u = n.value) == null ? void 0 : u.call(n, { ...e.props == null ? Ie(a) : m, $slots: r });
      return t && (i == null ? void 0 : i.length) === 1 ? i[0] : i;
    };
  } });
  return ye({ define: c, reuse: v }, [c, v]);
}
function Ie(e) {
  const t = {};
  for (const n in e) t[Se(n)] = e[n];
  return t;
}
const A = G ? window : void 0, Ne = G ? window.document : void 0;
function I(e) {
  var t;
  const n = T(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function z(...e) {
  const t = [], n = () => {
    t.forEach((r) => r()), t.length = 0;
  }, c = (r, u, i, d) => (r.addEventListener(u, i, d), () => r.removeEventListener(u, i, d)), v = k(() => {
    const r = $(T(e[0])).filter((u) => u != null);
    return r.every((u) => typeof u != "string") ? r : void 0;
  }), m = ae(() => {
    var r, u;
    return [(u = (r = v.value) == null ? void 0 : r.map((i) => I(i))) != null ? u : [A].filter((i) => i != null), $(T(v.value ? e[1] : e[0])), $(ke(v.value ? e[2] : e[1])), T(v.value ? e[3] : e[2])];
  }, ([r, u, i, d]) => {
    if (n(), !(r == null ? void 0 : r.length) || !(u == null ? void 0 : u.length) || !(i == null ? void 0 : i.length)) return;
    const o = be(d) ? { ...d } : d;
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
function K(e) {
  const t = Ve();
  return k(() => (t.value, !!e()));
}
function fe(e, t, n = {}) {
  const { window: c = A, ...v } = n;
  let m;
  const a = K(() => c && "MutationObserver" in c), r = () => {
    m && (m.disconnect(), m = void 0);
  }, u = k(() => {
    const f = T(e), s = $(f).map(I).filter(ue);
    return new Set(s);
  }), i = P(() => u.value, (f) => {
    r(), a.value && f.size && (m = new MutationObserver(t), f.forEach((s) => m.observe(s, v)));
  }, { immediate: true, flush: "post" }), d = () => m == null ? void 0 : m.takeRecords(), o = () => {
    i(), r();
  };
  return q(o), { isSupported: a, stop: o, takeRecords: d };
}
function Ke(e, t = null) {
  const n = ce();
  let c = () => {
  };
  const v = Ae((m, a) => (c = a, { get() {
    var r, u;
    return m(), (u = (r = n == null ? void 0 : n.proxy) == null ? void 0 : r.$refs[e]) != null ? u : t;
  }, set() {
  } }));
  return H(c), We(c), v;
}
function Qe(e, t = {}) {
  const { immediate: n = true, fpsLimit: c = void 0, window: v = A, once: m = false } = t, a = E(false), r = k(() => c ? 1e3 / T(c) : null);
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
  const e = Me() ? ge(Le, null) : null;
  return typeof e == "number" ? e : void 0;
}
function j(e, t = {}) {
  const { window: n = A, ssrWidth: c = ve() } = t, v = K(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), m = E(typeof c == "number"), a = E(), r = E(false), u = (i) => {
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
  }), z(a, "change", u, { passive: true }), k(() => r.value);
}
const Xe = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function Ze(e, t = {}) {
  function n(s, l) {
    let w = T(e[T(s)]);
    return l != null && (w = Te(w, l)), typeof w == "number" && (w = `${w}px`), w;
  }
  const { window: c = A, strategy: v = "min-width", ssrWidth: m = ve() } = t, a = typeof m == "number", r = a ? E(false) : { value: true };
  a && H(() => r.value = !!c);
  function u(s, l) {
    return !r.value && a ? s === "min" ? m >= J(l) : m <= J(l) : c ? c.matchMedia(`(${s}-width: ${l})`).matches : false;
  }
  const i = (s) => j(() => `(min-width: ${n(s)})`, t), d = (s) => j(() => `(max-width: ${n(s)})`, t), o = Object.keys(e).reduce((s, l) => (Object.defineProperty(s, l, { get: () => v === "min-width" ? i(l) : d(l), enumerable: true, configurable: true }), s), {});
  function f() {
    const s = Object.keys(e).map((l) => [l, o[l], J(n(l))]).sort((l, w) => l[2] - w[2]);
    return k(() => s.filter(([, l]) => l.value).map(([l]) => l));
  }
  return Object.assign(o, { greaterOrEqual: i, smallerOrEqual: d, greater(s) {
    return j(() => `(min-width: ${n(s, 0.1)})`, t);
  }, smaller(s) {
    return j(() => `(max-width: ${n(s, -0.1)})`, t);
  }, between(s, l) {
    return j(() => `(min-width: ${n(s)}) and (max-width: ${n(l, -0.1)})`, t);
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
    return k(() => s.value.length === 0 ? "" : s.value.at(v === "min-width" ? -1 : 0));
  } });
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__", Pe = ze();
function ze() {
  return Y in U || (U[Y] = U[Y] || {}), U[Y];
}
function me(e, t) {
  return Pe[e] || t;
}
function Fe(e) {
  return j("(prefers-color-scheme: dark)", e);
}
function je(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const He = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, re = "vueuse-storage";
function he(e, t, n, c = {}) {
  var v;
  const { flush: m = "pre", deep: a = true, listenToStorageChanges: r = true, writeDefaults: u = true, mergeDefaults: i = false, shallow: d, window: o = A, eventFilter: f, onError: s = (h) => {
    console.error(h);
  }, initOnMounted: l } = c, w = (d ? E : X)(typeof t == "function" ? t() : t), S = k(() => T(e));
  if (!n) try {
    n = me("getDefaultStorage", () => {
      var h;
      return (h = A) == null ? void 0 : h.localStorage;
    })();
  } catch (h) {
    s(h);
  }
  if (!n) return w;
  const b = T(t), O = je(b), N = (v = c.serializer) != null ? v : He[O], { pause: _, resume: V } = we(w, () => D(w.value), { flush: m, deep: a, eventFilter: f });
  P(S, () => g(), { flush: m });
  let L = false;
  const p = (h) => {
    l && !L || g(h);
  }, R = (h) => {
    l && !L || y(h);
  };
  o && r && (n instanceof Storage ? z(o, "storage", p, { passive: true }) : z(o, re, R)), l ? H(() => {
    L = true, g();
  }) : g();
  function x(h, C) {
    if (o) {
      const M = { key: S.value, oldValue: h, newValue: C, storageArea: n };
      o.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", M) : new CustomEvent(re, { detail: M }));
    }
  }
  function D(h) {
    try {
      const C = n.getItem(S.value);
      if (h == null) x(C, null), n.removeItem(S.value);
      else {
        const M = N.write(h);
        C !== M && (n.setItem(S.value, M), x(C, M));
      }
    } catch (C) {
      s(C);
    }
  }
  function W(h) {
    const C = h ? h.newValue : n.getItem(S.value);
    if (C == null) return u && b != null && n.setItem(S.value, N.write(b)), b;
    if (!h && i) {
      const M = N.read(C);
      return typeof i == "function" ? i(M, b) : O === "object" && !Array.isArray(M) ? { ...b, ...M } : M;
    } else return typeof C != "string" ? C : N.read(C);
  }
  function g(h) {
    if (!(h && h.storageArea !== n)) {
      if (h && h.key == null) {
        w.value = b;
        return;
      }
      if (!(h && h.key !== S.value)) {
        _();
        try {
          (h == null ? void 0 : h.newValue) !== N.write(w.value) && (w.value = W(h));
        } catch (C) {
          s(C);
        } finally {
          h ? De(V) : V();
        }
      }
    }
  }
  function y(h) {
    g(h.detail);
  }
  return w;
}
const Be = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function $e(e = {}) {
  const { selector: t = "html", attribute: n = "class", initialValue: c = "auto", window: v = A, storage: m, storageKey: a = "vueuse-color-scheme", listenToStorageChanges: r = true, storageRef: u, emitAuto: i, disableTransition: d = true } = e, o = { auto: "", light: "light", dark: "dark", ...e.modes || {} }, f = Fe({ window: v }), s = k(() => f.value ? "dark" : "light"), l = u || (a == null ? le(c) : he(a, c, m, { window: v, listenToStorageChanges: r })), w = k(() => l.value === "auto" ? s.value : l.value), S = me("updateHTMLAttrs", (_, V, L) => {
    const p = typeof _ == "string" ? v == null ? void 0 : v.document.querySelector(_) : I(_);
    if (!p) return;
    const R = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set();
    let D = null;
    if (V === "class") {
      const g = L.split(/\s/g);
      Object.values(o).flatMap((y) => (y || "").split(/\s/g)).filter(Boolean).forEach((y) => {
        g.includes(y) ? R.add(y) : x.add(y);
      });
    } else D = { key: V, value: L };
    if (R.size === 0 && x.size === 0 && D === null) return;
    let W;
    d && (W = v.document.createElement("style"), W.appendChild(document.createTextNode(Be)), v.document.head.appendChild(W));
    for (const g of R) p.classList.add(g);
    for (const g of x) p.classList.remove(g);
    D && p.setAttribute(D.key, D.value), d && (v.getComputedStyle(W).opacity, document.head.removeChild(W));
  });
  function b(_) {
    var V;
    S(t, n, (V = o[_]) != null ? V : _);
  }
  function O(_) {
    e.onChanged ? e.onChanged(_, b) : b(_);
  }
  P(w, O, { flush: "post", immediate: true }), H(() => O(w.value));
  const N = k({ get() {
    return i ? l.value : w.value;
  }, set(_) {
    l.value = _;
  } });
  return Object.assign(N, { store: l, system: s, state: w });
}
function et(e, t, n = {}) {
  const { window: c = A, initialValue: v, observe: m = false } = n, a = E(v), r = k(() => {
    var i;
    return I(t) || ((i = c == null ? void 0 : c.document) == null ? void 0 : i.documentElement);
  });
  function u() {
    var i;
    const d = T(e), o = T(r);
    if (o && c && d) {
      const f = (i = c.getComputedStyle(o).getPropertyValue(d)) == null ? void 0 : i.trim();
      a.value = f || a.value || v;
    }
  }
  return m && fe(r, u, { attributeFilter: ["style", "class"], window: c }), P([r, () => T(e)], (i, d) => {
    d[0] && d[1] && d[0].style.removeProperty(d[1]), u();
  }, { immediate: true }), P([a, r], ([i, d]) => {
    const o = T(e);
    (d == null ? void 0 : d.style) && o && (i == null ? d.style.removeProperty(o) : d.style.setProperty(o, i));
  }, { immediate: true }), a;
}
function tt(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "" } = e, c = $e({ ...e, onChanged: (a, r) => {
    var u;
    e.onChanged ? (u = e.onChanged) == null || u.call(e, a === "dark", r, a) : r(a);
  }, modes: { dark: t, light: n } }), v = k(() => c.system.value);
  return k({ get() {
    return c.value === "dark";
  }, set(a) {
    const r = a ? "dark" : "light";
    v.value === r ? c.value = "auto" : c.value = r;
  } });
}
function nt(e = {}) {
  const { window: t = A } = e, n = E(1), c = j(() => `(resolution: ${n.value}dppx)`, e);
  let v = B;
  return t && (v = ae(c, () => n.value = t.devicePixelRatio)), { pixelRatio: de(n), stop: v };
}
function ot(e = {}) {
  const { document: t = Ne } = e;
  if (!t) return E("visible");
  const n = E(t.visibilityState);
  return z(t, "visibilitychange", () => {
    n.value = t.visibilityState;
  }, { passive: true }), n;
}
function pe(e, t, n = {}) {
  const { window: c = A, ...v } = n;
  let m;
  const a = K(() => c && "ResizeObserver" in c), r = () => {
    m && (m.disconnect(), m = void 0);
  }, u = k(() => {
    const o = T(e);
    return Array.isArray(o) ? o.map((f) => I(f)) : [I(o)];
  }), i = P(u, (o) => {
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
  function w() {
    const b = I(e);
    if (!b) {
      n && (r.value = 0, u.value = 0, i.value = 0, d.value = 0, o.value = 0, f.value = 0, s.value = 0, l.value = 0);
      return;
    }
    const O = b.getBoundingClientRect();
    r.value = O.height, u.value = O.bottom, i.value = O.left, d.value = O.right, o.value = O.top, f.value = O.width, s.value = O.x, l.value = O.y;
  }
  function S() {
    a === "sync" ? w() : a === "next-frame" && requestAnimationFrame(() => w());
  }
  return pe(e, S), P(() => I(e), (b) => !b && S()), fe(e, S, { attributeFilter: ["style", "class"] }), v && z("scroll", S, { capture: true, passive: true }), c && z("resize", S, { passive: true }), H(() => {
    m && S();
  }), { height: r, bottom: u, left: i, right: d, top: o, width: f, x: s, y: l, update: S };
}
function st(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: c = A, box: v = "content-box" } = n, m = k(() => {
    var o, f;
    return (f = (o = I(e)) == null ? void 0 : o.namespaceURI) == null ? void 0 : f.includes("svg");
  }), a = E(t.width), r = E(t.height), { stop: u } = pe(e, ([o]) => {
    const f = v === "border-box" ? o.borderBoxSize : v === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
    if (c && m.value) {
      const s = I(e);
      if (s) {
        const l = s.getBoundingClientRect();
        a.value = l.width, r.value = l.height;
      }
    } else if (f) {
      const s = $(f);
      a.value = s.reduce((l, { inlineSize: w }) => l + w, 0), r.value = s.reduce((l, { blockSize: w }) => l + w, 0);
    } else a.value = o.contentRect.width, r.value = o.contentRect.height;
  }, n);
  H(() => {
    const o = I(e);
    o && (a.value = "offsetWidth" in o ? o.offsetWidth : t.width, r.value = "offsetHeight" in o ? o.offsetHeight : t.height);
  });
  const i = P(() => I(e), (o) => {
    a.value = o ? t.width : 0, r.value = o ? t.height : 0;
  });
  function d() {
    u(), i();
  }
  return { width: a, height: r, stop: d };
}
function qe(e, t, n = {}) {
  const { root: c, rootMargin: v = "0px", threshold: m = 0, window: a = A, immediate: r = true } = n, u = K(() => a && "IntersectionObserver" in a), i = k(() => {
    const l = T(e);
    return $(l).map(I).filter(ue);
  });
  let d = B;
  const o = E(r), f = u.value ? P(() => [i.value, I(c), o.value], ([l, w]) => {
    if (d(), !o.value || !l.length) return;
    const S = new IntersectionObserver(t, { root: I(w), rootMargin: v, threshold: m });
    l.forEach((b) => b && S.observe(b)), d = () => {
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
  const { window: n = A, scrollTarget: c, threshold: v = 0, rootMargin: m, once: a = false } = t, r = E(false), { stop: u } = qe(e, (i) => {
    let d = r.value, o = 0;
    for (const f of i) f.time >= o && (o = f.time, d = f.isIntersecting);
    r.value = d, a && Oe(r, () => {
      u();
    });
  }, { root: c, window: n, threshold: v, rootMargin: T(m) });
  return r;
}
const se = 1;
function Ge(e, t = {}) {
  const { throttle: n = 0, idle: c = 200, onStop: v = B, onScroll: m = B, offset: a = { left: 0, right: 0, top: 0, bottom: 0 }, eventListenerOptions: r = { capture: false, passive: true }, behavior: u = "auto", window: i = A, onError: d = (p) => {
    console.error(p);
  } } = t, o = E(0), f = E(0), s = k({ get() {
    return o.value;
  }, set(p) {
    w(p, void 0);
  } }), l = k({ get() {
    return f.value;
  }, set(p) {
    w(void 0, p);
  } });
  function w(p, R) {
    var x, D, W, g;
    if (!i) return;
    const y = T(e);
    if (!y) return;
    (W = y instanceof Document ? i.document.body : y) == null || W.scrollTo({ top: (x = T(R)) != null ? x : l.value, left: (D = T(p)) != null ? D : s.value, behavior: T(u) });
    const h = ((g = y == null ? void 0 : y.document) == null ? void 0 : g.documentElement) || (y == null ? void 0 : y.documentElement) || y;
    s != null && (o.value = h.scrollLeft), l != null && (f.value = h.scrollTop);
  }
  const S = E(false), b = oe({ left: true, right: false, top: true, bottom: false }), O = oe({ left: false, right: false, top: false, bottom: false }), N = (p) => {
    S.value && (S.value = false, O.left = false, O.right = false, O.top = false, O.bottom = false, v(p));
  }, _ = Ce(N, n + c), V = (p) => {
    var R;
    if (!i) return;
    const x = ((R = p == null ? void 0 : p.document) == null ? void 0 : R.documentElement) || (p == null ? void 0 : p.documentElement) || I(p), { display: D, flexDirection: W, direction: g } = getComputedStyle(x), y = g === "rtl" ? -1 : 1, h = x.scrollLeft;
    O.left = h < o.value, O.right = h > o.value;
    const C = Math.abs(h * y) <= (a.left || 0), M = Math.abs(h * y) + x.clientWidth >= x.scrollWidth - (a.right || 0) - se;
    D === "flex" && W === "row-reverse" ? (b.left = M, b.right = C) : (b.left = C, b.right = M), o.value = h;
    let F = x.scrollTop;
    p === i.document && !F && (F = i.document.body.scrollTop), O.top = F < f.value, O.bottom = F > f.value;
    const Z = Math.abs(F) <= (a.top || 0), ee = Math.abs(F) + x.clientHeight >= x.scrollHeight - (a.bottom || 0) - se;
    D === "flex" && W === "column-reverse" ? (b.top = ee, b.bottom = Z) : (b.top = Z, b.bottom = ee), f.value = F;
  }, L = (p) => {
    var R;
    if (!i) return;
    const x = (R = p.target.documentElement) != null ? R : p.target;
    V(x), S.value = true, _(p), m(p);
  };
  return z(e, "scroll", n ? Ee(L, n, true, false) : L, r), H(() => {
    try {
      const p = T(e);
      if (!p) return;
      V(p);
    } catch (p) {
      d(p);
    }
  }), z(e, "scrollend", N, r), { x: s, y: l, isScrolling: S, arrivedState: b, directions: O, measure() {
    const p = T(e);
    i && p && V(p);
  } };
}
function lt(e, t, n = {}) {
  const { window: c = A } = n;
  return he(e, t, c == null ? void 0 : c.localStorage, n);
}
const ie = "ping";
function Q(e) {
  return e === true ? {} : e;
}
function at(e, t = {}) {
  const { onConnected: n, onDisconnected: c, onError: v, onMessage: m, immediate: a = true, autoConnect: r = true, autoClose: u = true, protocols: i = [] } = t, d = X(null), o = E("CLOSED"), f = X(), s = le(e);
  let l, w, S = false, b = 0, O = [], N, _;
  const V = () => {
    if (O.length && f.value && o.value === "OPEN") {
      for (const g of O) f.value.send(g);
      O = [];
    }
  }, L = () => {
    N != null && (clearTimeout(N), N = void 0);
  }, p = () => {
    clearTimeout(_), _ = void 0;
  }, R = (g = 1e3, y) => {
    L(), !(!G && !te || !f.value) && (S = true, p(), l == null ? void 0 : l(), f.value.close(g, y), f.value = void 0);
  }, x = (g, y = true) => !f.value || o.value !== "OPEN" ? (y && O.push(g), false) : (V(), f.value.send(g), true), D = () => {
    if (S || typeof s.value > "u") return;
    const g = new WebSocket(s.value, i);
    f.value = g, o.value = "CONNECTING", g.onopen = () => {
      o.value = "OPEN", b = 0, n == null ? void 0 : n(g), w == null ? void 0 : w(), V();
    }, g.onclose = (y) => {
      if (o.value = "CLOSED", p(), l == null ? void 0 : l(), c == null ? void 0 : c(g, y), !S && t.autoReconnect && (f.value == null || g === f.value)) {
        const { retries: h = -1, delay: C = 1e3, onFailed: M } = Q(t.autoReconnect);
        (typeof h == "function" ? h : () => typeof h == "number" && (h < 0 || b < h))(b) ? (b += 1, N = setTimeout(D, C)) : M == null ? void 0 : M();
      }
    }, g.onerror = (y) => {
      v == null ? void 0 : v(g, y);
    }, g.onmessage = (y) => {
      if (t.heartbeat) {
        p();
        const { message: h = ie, responseMessage: C = h } = Q(t.heartbeat);
        if (y.data === T(C)) return;
      }
      d.value = y.data, m == null ? void 0 : m(g, y);
    };
  };
  if (t.heartbeat) {
    const { message: g = ie, interval: y = 1e3, pongTimeout: h = 1e3 } = Q(t.heartbeat), { pause: C, resume: M } = xe(() => {
      x(T(g), false), _ == null && (_ = setTimeout(() => {
        R(), S = false;
      }, h));
    }, y, { immediate: false });
    l = C, w = M;
  }
  u && (G && z("beforeunload", () => R(), { passive: true }), q(R));
  const W = () => {
    !G && !te || (R(), S = false, b = 0, D());
  };
  return a && W(), r && P(s, W), { data: d, status: o, close: R, send: x, open: W, ws: f };
}
function ut(e = {}) {
  const { window: t = A, ...n } = e;
  return Ge(t, n);
}
function ct(e = {}) {
  const { window: t = A, initialWidth: n = Number.POSITIVE_INFINITY, initialHeight: c = Number.POSITIVE_INFINITY, listenOrientation: v = true, includeScrollbar: m = true, type: a = "inner" } = e, r = E(n), u = E(c), i = () => {
    if (t) if (a === "outer") r.value = t.outerWidth, u.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: o, height: f, scale: s } = t.visualViewport;
      r.value = Math.round(o * s), u.value = Math.round(f * s);
    } else m ? (r.value = t.innerWidth, u.value = t.innerHeight) : (r.value = t.document.documentElement.clientWidth, u.value = t.document.documentElement.clientHeight);
  };
  i(), H(i);
  const d = { passive: true };
  if (z("resize", i, d), t && a === "visual" && t.visualViewport && z(t.visualViewport, "resize", i, d), v) {
    const o = j("(orientation: portrait)");
    P(o, () => i());
  }
  return { width: r, height: u };
}
export {
  tt as a,
  Ze as b,
  Ye as c,
  Xe as d,
  Ge as e,
  ct as f,
  at as g,
  ot as h,
  Qe as i,
  it as j,
  st as k,
  nt as l,
  z as m,
  he as n,
  Ve as o,
  lt as p,
  rt as q,
  ut as r,
  et as s,
  Ke as t,
  qe as u,
  j as v
};
