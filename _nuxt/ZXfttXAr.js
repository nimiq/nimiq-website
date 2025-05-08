import { u as re } from "./DsoEoSLB.js";
import { j as O, B as H, P as se, L as pt, N as le, O as ce, aR as J, u as $, a0 as ae, aQ as fe, aS as ue, d as At, R as Ot, aT as Vt, b as de, o as Nt, w as jt, E as me, aU as pe, V as It, c as he, a as ge, m as we, h as ye } from "./ClGJWWej.js";
import { c as Yt, u as qt, P as Ut, h as xe, k as ve, i as be } from "./DvG5VWlW.js";
const Ae = ["top", "right", "bottom", "left"], X = Math.min, T = Math.max, ct = Math.round, lt = Math.floor, _ = (t) => ({ x: t, y: t }), Oe = { left: "right", right: "left", bottom: "top", top: "bottom" }, Ce = { start: "end", end: "start" };
function wt(t, e, n) {
  return T(t, X(e, n));
}
function j(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function I(t) {
  return t.split("-")[0];
}
function ot(t) {
  return t.split("-")[1];
}
function Ct(t) {
  return t === "x" ? "y" : "x";
}
function Pt(t) {
  return t === "y" ? "height" : "width";
}
function G(t) {
  return ["top", "bottom"].includes(I(t)) ? "y" : "x";
}
function Rt(t) {
  return Ct(G(t));
}
function Pe(t, e, n) {
  n === void 0 && (n = false);
  const o = ot(t), i = Rt(t), s = Pt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = at(r)), [r, at(r)];
}
function Re(t) {
  const e = at(t);
  return [yt(t), e, yt(e)];
}
function yt(t) {
  return t.replace(/start|end/g, (e) => Ce[e]);
}
function Se(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Ee(t, e, n, o) {
  const i = ot(t);
  let s = Se(I(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(yt)))), s;
}
function at(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Oe[e]);
}
function De(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Xt(t) {
  return typeof t != "number" ? De(t) : { top: t, right: t, bottom: t, left: t };
}
function ft(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function Tt(t, e, n) {
  let { reference: o, floating: i } = t;
  const s = G(e), r = Rt(e), l = Pt(r), c = I(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, p = o[l] / 2 - i[l] / 2;
  let d;
  switch (c) {
    case "top":
      d = { x: f, y: o.y - i.height };
      break;
    case "bottom":
      d = { x: f, y: o.y + o.height };
      break;
    case "right":
      d = { x: o.x + o.width, y: u };
      break;
    case "left":
      d = { x: o.x - i.width, y: u };
      break;
    default:
      d = { x: o.x, y: o.y };
  }
  switch (ot(e)) {
    case "start":
      d[r] -= p * (n && a ? -1 : 1);
      break;
    case "end":
      d[r] += p * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const ke = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: u } = Tt(a, o, c), p = o, d = {}, m = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: g, fn: w } = l[h], { x, y, data: v, reset: A } = await w({ x: f, y: u, initialPlacement: o, placement: p, strategy: i, middlewareData: d, rects: a, platform: r, elements: { reference: t, floating: e } });
    f = x ?? f, u = y ?? u, d = { ...d, [g]: { ...d[g], ...v } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (p = A.placement), A.rects && (a = A.rects === true ? await r.getElementRects({ reference: t, floating: e, strategy: i }) : A.rects), { x: f, y: u } = Tt(a, p, c)), h = -1);
  }
  return { x: f, y: u, placement: p, strategy: i, middlewareData: d };
};
async function it(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: s, rects: r, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: u = "floating", altBoundary: p = false, padding: d = 0 } = j(e, t), m = Xt(d), g = l[p ? u === "floating" ? "reference" : "floating" : u], w = ft(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), x = u === "floating" ? { x: o, y: i, width: r.floating.width, height: r.floating.height } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), v = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, A = ft(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: x, offsetParent: y, strategy: c }) : x);
  return { top: (w.top - A.top + m.top) / v.y, bottom: (A.bottom - w.bottom + m.bottom) / v.y, left: (w.left - A.left + m.left) / v.x, right: (A.right - w.right + m.right) / v.x };
}
const Le = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { x: n, y: o, placement: i, rects: s, platform: r, elements: l, middlewareData: c } = e, { element: a, padding: f = 0 } = j(t, e) || {};
  if (a == null) return {};
  const u = Xt(f), p = { x: n, y: o }, d = Rt(i), m = Pt(d), h = await r.getDimensions(a), g = d === "y", w = g ? "top" : "left", x = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", v = s.reference[m] + s.reference[d] - p[d] - s.floating[m], A = p[d] - s.reference[d], P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
  let b = P ? P[y] : 0;
  (!b || !await (r.isElement == null ? void 0 : r.isElement(P))) && (b = l.floating[y] || s.floating[m]);
  const C = v / 2 - A / 2, E = b / 2 - h[m] / 2 - 1, L = X(u[w], E), R = X(u[x], E), k = L, W = b - h[m] - R, S = b / 2 - h[m] / 2 + C, Y = wt(k, S, W), M = !c.arrow && ot(i) != null && S !== Y && s.reference[m] / 2 - (S < k ? L : R) - h[m] / 2 < 0, D = M ? S < k ? S - k : S - W : 0;
  return { [d]: p[d] + D, data: { [d]: Y, centerOffset: S - Y - D, ...M && { alignmentOffset: D } }, reset: M };
} }), Te = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: u = true, fallbackPlacements: p, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: h = true, ...g } = j(t, e);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const w = I(i), x = G(l), y = I(l) === l, v = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), A = p || (y || !h ? [at(l)] : Re(l)), P = m !== "none";
    !p && P && A.push(...Ee(l, h, m, v));
    const b = [l, ...A], C = await it(e, g), E = [];
    let L = ((o = s.flip) == null ? void 0 : o.overflows) || [];
    if (f && E.push(C[w]), u) {
      const S = Pe(i, r, v);
      E.push(C[S[0]], C[S[1]]);
    }
    if (L = [...L, { placement: i, overflows: E }], !E.every((S) => S <= 0)) {
      var R, k;
      const S = (((R = s.flip) == null ? void 0 : R.index) || 0) + 1, Y = b[S];
      if (Y) return { data: { index: S, overflows: L }, reset: { placement: Y } };
      let M = (k = L.filter((D) => D.overflows[0] <= 0).sort((D, q) => D.overflows[1] - q.overflows[1])[0]) == null ? void 0 : k.placement;
      if (!M) switch (d) {
        case "bestFit": {
          var W;
          const D = (W = L.filter((q) => {
            if (P) {
              const U = G(q.placement);
              return U === x || U === "y";
            }
            return true;
          }).map((q) => [q.placement, q.overflows.filter((U) => U > 0).reduce((U, ie) => U + ie, 0)]).sort((q, U) => q[1] - U[1])[0]) == null ? void 0 : W[0];
          D && (M = D);
          break;
        }
        case "initialPlacement":
          M = l;
          break;
      }
      if (i !== M) return { reset: { placement: M } };
    }
    return {};
  } };
};
function Bt(t, e) {
  return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
}
function $t(t) {
  return Ae.some((e) => t[e] >= 0);
}
const Be = function(t) {
  return t === void 0 && (t = {}), { name: "hide", options: t, async fn(e) {
    const { rects: n } = e, { strategy: o = "referenceHidden", ...i } = j(t, e);
    switch (o) {
      case "referenceHidden": {
        const s = await it(e, { ...i, elementContext: "reference" }), r = Bt(s, n.reference);
        return { data: { referenceHiddenOffsets: r, referenceHidden: $t(r) } };
      }
      case "escaped": {
        const s = await it(e, { ...i, altBoundary: true }), r = Bt(s, n.floating);
        return { data: { escapedOffsets: r, escaped: $t(r) } };
      }
      default:
        return {};
    }
  } };
};
async function $e(t, e) {
  const { placement: n, platform: o, elements: i } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = I(n), l = ot(n), c = G(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && c ? -1 : 1, u = j(e, t);
  let { mainAxis: p, crossAxis: d, alignmentAxis: m } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return l && typeof m == "number" && (d = l === "end" ? m * -1 : m), c ? { x: d * f, y: p * a } : { x: p * a, y: d * f };
}
const Me = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: s, placement: r, middlewareData: l } = e, c = await $e(e, t);
    return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: s + c.y, data: { ...c, placement: r } };
  } };
}, Fe = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i } = e, { mainAxis: s = true, crossAxis: r = false, limiter: l = { fn: (g) => {
      let { x: w, y: x } = g;
      return { x: w, y: x };
    } }, ...c } = j(t, e), a = { x: n, y: o }, f = await it(e, c), u = G(I(i)), p = Ct(u);
    let d = a[p], m = a[u];
    if (s) {
      const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", x = d + f[g], y = d - f[w];
      d = wt(x, d, y);
    }
    if (r) {
      const g = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", x = m + f[g], y = m - f[w];
      m = wt(x, m, y);
    }
    const h = l.fn({ ...e, [p]: d, [u]: m });
    return { ...h, data: { x: h.x - n, y: h.y - o, enabled: { [p]: s, [u]: r } } };
  } };
}, ze = function(t) {
  return t === void 0 && (t = {}), { options: t, fn(e) {
    const { x: n, y: o, placement: i, rects: s, middlewareData: r } = e, { offset: l = 0, mainAxis: c = true, crossAxis: a = true } = j(t, e), f = { x: n, y: o }, u = G(i), p = Ct(u);
    let d = f[p], m = f[u];
    const h = j(l, e), g = typeof h == "number" ? { mainAxis: h, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h };
    if (c) {
      const y = p === "y" ? "height" : "width", v = s.reference[p] - s.floating[y] + g.mainAxis, A = s.reference[p] + s.reference[y] - g.mainAxis;
      d < v ? d = v : d > A && (d = A);
    }
    if (a) {
      var w, x;
      const y = p === "y" ? "width" : "height", v = ["top", "left"].includes(I(i)), A = s.reference[u] - s.floating[y] + (v && ((w = r.offset) == null ? void 0 : w[u]) || 0) + (v ? 0 : g.crossAxis), P = s.reference[u] + s.reference[y] + (v ? 0 : ((x = r.offset) == null ? void 0 : x[u]) || 0) - (v ? g.crossAxis : 0);
      m < A ? m = A : m > P && (m = P);
    }
    return { [p]: d, [u]: m };
  } };
}, We = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    var n, o;
    const { placement: i, rects: s, platform: r, elements: l } = e, { apply: c = () => {
    }, ...a } = j(t, e), f = await it(e, a), u = I(i), p = ot(i), d = G(i) === "y", { width: m, height: h } = s.floating;
    let g, w;
    u === "top" || u === "bottom" ? (g = u, w = p === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = u, g = p === "end" ? "top" : "bottom");
    const x = h - f.top - f.bottom, y = m - f.left - f.right, v = X(h - f[g], x), A = X(m - f[w], y), P = !e.middlewareData.shift;
    let b = v, C = A;
    if ((n = e.middlewareData.shift) != null && n.enabled.x && (C = y), (o = e.middlewareData.shift) != null && o.enabled.y && (b = x), P && !p) {
      const L = T(f.left, 0), R = T(f.right, 0), k = T(f.top, 0), W = T(f.bottom, 0);
      d ? C = m - 2 * (L !== 0 || R !== 0 ? L + R : T(f.left, f.right)) : b = h - 2 * (k !== 0 || W !== 0 ? k + W : T(f.top, f.bottom));
    }
    await c({ ...e, availableWidth: C, availableHeight: b });
    const E = await r.getDimensions(l.floating);
    return m !== E.width || h !== E.height ? { reset: { rects: true } } : {};
  } };
};
function ut() {
  return typeof window < "u";
}
function Z(t) {
  return St(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function B(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function N(t) {
  var e;
  return (e = (St(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function St(t) {
  return ut() ? t instanceof Node || t instanceof B(t).Node : false;
}
function F(t) {
  return ut() ? t instanceof Element || t instanceof B(t).Element : false;
}
function V(t) {
  return ut() ? t instanceof HTMLElement || t instanceof B(t).HTMLElement : false;
}
function Mt(t) {
  return !ut() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof B(t).ShadowRoot;
}
function st(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = z(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function He(t) {
  return ["table", "td", "th"].includes(Z(t));
}
function dt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return false;
    }
  });
}
function Et(t) {
  const e = Dt(), n = F(t) ? z(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function _e(t) {
  let e = K(t);
  for (; V(e) && !nt(e); ) {
    if (Et(e)) return e;
    if (dt(e)) return null;
    e = K(e);
  }
  return null;
}
function Dt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function nt(t) {
  return ["html", "body", "#document"].includes(Z(t));
}
function z(t) {
  return B(t).getComputedStyle(t);
}
function mt(t) {
  return F(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function K(t) {
  if (Z(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Mt(t) && t.host || N(t);
  return Mt(e) ? e.host : e;
}
function Gt(t) {
  const e = K(t);
  return nt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : V(e) && st(e) ? e : Gt(e);
}
function rt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = Gt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = B(i);
  if (s) {
    const l = xt(r);
    return e.concat(r, r.visualViewport || [], st(i) ? i : [], l && n ? rt(l) : []);
  }
  return e.concat(i, rt(i, [], n));
}
function xt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Kt(t) {
  const e = z(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = V(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = ct(n) !== s || ct(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, $: l };
}
function kt(t) {
  return F(t) ? t : t.contextElement;
}
function et(t) {
  const e = kt(t);
  if (!V(e)) return _(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: s } = Kt(e);
  let r = (s ? ct(n.width) : n.width) / o, l = (s ? ct(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: r, y: l };
}
const Ve = _(0);
function Qt(t) {
  const e = B(t);
  return !Dt() || !e.visualViewport ? Ve : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Ne(t, e, n) {
  return e === void 0 && (e = false), !n || e && n !== B(t) ? false : e;
}
function Q(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), s = kt(t);
  let r = _(1);
  e && (o ? F(o) && (r = et(o)) : r = et(t));
  const l = Ne(s, n, o) ? Qt(s) : _(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s) {
    const p = B(s), d = o && F(o) ? B(o) : o;
    let m = p, h = xt(m);
    for (; h && o && d !== m; ) {
      const g = et(h), w = h.getBoundingClientRect(), x = z(h), y = w.left + (h.clientLeft + parseFloat(x.paddingLeft)) * g.x, v = w.top + (h.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, a *= g.y, f *= g.x, u *= g.y, c += y, a += v, m = B(h), h = xt(m);
    }
  }
  return ft({ width: f, height: u, x: c, y: a });
}
function Lt(t, e) {
  const n = mt(t).scrollLeft;
  return e ? e.left + n : Q(N(t)).left + n;
}
function Zt(t, e, n) {
  n === void 0 && (n = false);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : Lt(t, o)), s = o.top + e.scrollTop;
  return { x: i, y: s };
}
function je(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const s = i === "fixed", r = N(o), l = e ? dt(e.floating) : false;
  if (o === r || l && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = _(1);
  const f = _(0), u = V(o);
  if ((u || !u && !s) && ((Z(o) !== "body" || st(r)) && (c = mt(o)), V(o))) {
    const d = Q(o);
    a = et(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const p = r && !u && !s ? Zt(r, c, true) : _(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + p.x, y: n.y * a.y - c.scrollTop * a.y + f.y + p.y };
}
function Ie(t) {
  return Array.from(t.getClientRects());
}
function Ye(t) {
  const e = N(t), n = mt(t), o = t.ownerDocument.body, i = T(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = T(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + Lt(t);
  const l = -n.scrollTop;
  return z(o).direction === "rtl" && (r += T(e.clientWidth, o.clientWidth) - i), { width: i, height: s, x: r, y: l };
}
function qe(t, e) {
  const n = B(t), o = N(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = Dt();
    (!a || a && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return { width: s, height: r, x: l, y: c };
}
function Ue(t, e) {
  const n = Q(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = V(t) ? et(t) : _(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return { width: r, height: l, x: c, y: a };
}
function Ft(t, e, n) {
  let o;
  if (e === "viewport") o = qe(t, n);
  else if (e === "document") o = Ye(N(t));
  else if (F(e)) o = Ue(e, n);
  else {
    const i = Qt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return ft(o);
}
function Jt(t, e) {
  const n = K(t);
  return n === e || !F(n) || nt(n) ? false : z(n).position === "fixed" || Jt(n, e);
}
function Xe(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = rt(t, [], false).filter((l) => F(l) && Z(l) !== "body"), i = null;
  const s = z(t).position === "fixed";
  let r = s ? K(t) : t;
  for (; F(r) && !nt(r); ) {
    const l = z(r), c = Et(r);
    !c && l.position === "fixed" && (i = null), (s ? !c && !i : !c && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || st(r) && !c && Jt(t, r)) ? o = o.filter((f) => f !== r) : i = l, r = K(r);
  }
  return e.set(t, o), o;
}
function Ge(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const r = [...n === "clippingAncestors" ? dt(e) ? [] : Xe(e, this._c) : [].concat(n), o], l = r[0], c = r.reduce((a, f) => {
    const u = Ft(e, f, i);
    return a.top = T(u.top, a.top), a.right = X(u.right, a.right), a.bottom = X(u.bottom, a.bottom), a.left = T(u.left, a.left), a;
  }, Ft(e, l, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Ke(t) {
  const { width: e, height: n } = Kt(t);
  return { width: e, height: n };
}
function Qe(t, e, n) {
  const o = V(e), i = N(e), s = n === "fixed", r = Q(t, true, s, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = _(0);
  if (o || !o && !s) if ((Z(e) !== "body" || st(i)) && (l = mt(e)), o) {
    const p = Q(e, true, s, e);
    c.x = p.x + e.clientLeft, c.y = p.y + e.clientTop;
  } else i && (c.x = Lt(i));
  const a = i && !o && !s ? Zt(i, l) : _(0), f = r.left + l.scrollLeft - c.x - a.x, u = r.top + l.scrollTop - c.y - a.y;
  return { x: f, y: u, width: r.width, height: r.height };
}
function ht(t) {
  return z(t).position === "static";
}
function zt(t, e) {
  if (!V(t) || z(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return N(t) === n && (n = n.ownerDocument.body), n;
}
function te(t, e) {
  const n = B(t);
  if (dt(t)) return n;
  if (!V(t)) {
    let i = K(t);
    for (; i && !nt(i); ) {
      if (F(i) && !ht(i)) return i;
      i = K(i);
    }
    return n;
  }
  let o = zt(t, e);
  for (; o && He(o) && ht(o); ) o = zt(o, e);
  return o && nt(o) && ht(o) && !Et(o) ? n : o || _e(t) || n;
}
const Ze = async function(t) {
  const e = this.getOffsetParent || te, n = this.getDimensions, o = await n(t.floating);
  return { reference: Qe(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Je(t) {
  return z(t).direction === "rtl";
}
const tn = { convertOffsetParentRelativeRectToViewportRelativeRect: je, getDocumentElement: N, getClippingRect: Ge, getOffsetParent: te, getElementRects: Ze, getClientRects: Ie, getDimensions: Ke, getScale: et, isElement: F, isRTL: Je };
function ee(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function en(t, e) {
  let n = null, o;
  const i = N(t);
  function s() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function r(l, c) {
    l === void 0 && (l = false), c === void 0 && (c = 1), s();
    const a = t.getBoundingClientRect(), { left: f, top: u, width: p, height: d } = a;
    if (l || e(), !p || !d) return;
    const m = lt(u), h = lt(i.clientWidth - (f + p)), g = lt(i.clientHeight - (u + d)), w = lt(f), y = { rootMargin: -m + "px " + -h + "px " + -g + "px " + -w + "px", threshold: T(0, X(1, c)) || 1 };
    let v = true;
    function A(P) {
      const b = P[0].intersectionRatio;
      if (b !== c) {
        if (!v) return r();
        b ? r(false, b) : o = setTimeout(() => {
          r(false, 1e-7);
        }, 1e3);
      }
      b === 1 && !ee(a, t.getBoundingClientRect()) && r(), v = false;
    }
    try {
      n = new IntersectionObserver(A, { ...y, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(A, y);
    }
    n.observe(t);
  }
  return r(true), s;
}
function nn(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = kt(t), f = i || s ? [...a ? rt(a) : [], ...rt(e)] : [];
  f.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: true }), s && w.addEventListener("resize", n);
  });
  const u = a && l ? en(a, n) : null;
  let p = -1, d = null;
  r && (d = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === a && d && (d.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = d) == null || y.observe(e);
    })), n();
  }), a && !c && d.observe(a), d.observe(e));
  let m, h = c ? Q(t) : null;
  c && g();
  function g() {
    const w = Q(t);
    h && !ee(h, w) && n(), h = w, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), u == null ? void 0 : u(), (w = d) == null || w.disconnect(), d = null, c && cancelAnimationFrame(m);
  };
}
const on = Me, rn = Fe, Wt = Te, sn = We, ln = Be, cn = Le, an = ze, fn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: tn, ...n }, s = { ...i.platform, _c: o };
  return ke(t, e, { ...i, platform: s });
};
function un(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function vt(t) {
  if (un(t)) {
    const e = t.$el;
    return St(e) && Z(e) === "#comment" ? null : e;
  }
  return t;
}
function tt(t) {
  return typeof t == "function" ? t() : $(t);
}
function dn(t) {
  return { name: "arrow", options: t, fn(e) {
    const n = vt(tt(t.element));
    return n == null ? {} : cn({ element: n, padding: t.padding }).fn(e);
  } };
}
function ne(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ht(t, e) {
  const n = ne(t);
  return Math.round(e * n) / n;
}
function mn(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = O(() => {
    var b;
    return (b = tt(n.open)) != null ? b : true;
  }), s = O(() => tt(n.middleware)), r = O(() => {
    var b;
    return (b = tt(n.placement)) != null ? b : "bottom";
  }), l = O(() => {
    var b;
    return (b = tt(n.strategy)) != null ? b : "absolute";
  }), c = O(() => {
    var b;
    return (b = tt(n.transform)) != null ? b : true;
  }), a = O(() => vt(t.value)), f = O(() => vt(e.value)), u = H(0), p = H(0), d = H(l.value), m = H(r.value), h = se({}), g = H(false), w = O(() => {
    const b = { position: d.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = Ht(f.value, u.value), E = Ht(f.value, p.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + E + "px)", ...ne(f.value) >= 1.5 && { willChange: "transform" } } : { position: d.value, left: C + "px", top: E + "px" };
  });
  let x;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    fn(a.value, f.value, { middleware: s.value, placement: r.value, strategy: l.value }).then((C) => {
      u.value = C.x, p.value = C.y, d.value = C.strategy, m.value = C.placement, h.value = C.middlewareData, g.value = b !== false;
    });
  }
  function v() {
    typeof x == "function" && (x(), x = void 0);
  }
  function A() {
    if (v(), o === void 0) {
      y();
      return;
    }
    if (a.value != null && f.value != null) {
      x = o(a.value, f.value, y);
      return;
    }
  }
  function P() {
    i.value || (g.value = false);
  }
  return pt([s, r, l, i], y, { flush: "sync" }), pt([a, f], A, { flush: "sync" }), pt(i, P, { flush: "sync" }), le() && ce(v), { x: J(u), y: J(p), strategy: J(d), placement: J(m), middlewareData: J(h), isPositioned: J(g), floatingStyles: w, update: y };
}
function pn(t) {
  const e = ae(), n = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((i, s) => {
    const r = (e == null ? void 0 : e.type.props[s]).default;
    return r !== void 0 && (i[s] = r), i;
  }, {}), o = fe(t);
  return O(() => {
    const i = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      i[ue(r)] = s[r];
    }), Object.keys({ ...n, ...i }).reduce((r, l) => (o.value[l] !== void 0 && (r[l] = o.value[l]), r), {});
  });
}
function Cn(t, e) {
  const n = pn(t), o = e ? re(e) : {};
  return O(() => ({ ...n.value, ...o }));
}
const [oe, hn] = Yt("PopperRoot"), Pn = At({ inheritAttrs: false, __name: "PopperRoot", setup(t) {
  const e = H();
  return hn({ anchor: e, onAnchorChange: (n) => e.value = n }), (n, o) => Ot(n.$slots, "default");
} }), Rn = At({ __name: "PopperAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t, { forwardRef: n, currentElement: o } = qt(), i = oe();
  return Vt(() => {
    i.onAnchorChange(e.reference ?? o.value);
  }), (s, r) => (Nt(), de($(Ut), { ref: $(n), as: s.as, "as-child": s.asChild }, { default: jt(() => [Ot(s.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} });
function gn(t) {
  return t !== null;
}
function wn(t) {
  return { name: "transformOrigin", options: t, fn(e) {
    var _a, _b, _c;
    const { placement: n, rects: o, middlewareData: i } = e, r = ((_a = i.arrow) == null ? void 0 : _a.centerOffset) !== 0, l = r ? 0 : t.arrowWidth, c = r ? 0 : t.arrowHeight, [a, f] = bt(n), u = { start: "0%", center: "50%", end: "100%" }[f], p = (((_b = i.arrow) == null ? void 0 : _b.x) ?? 0) + l / 2, d = (((_c = i.arrow) == null ? void 0 : _c.y) ?? 0) + c / 2;
    let m = "", h = "";
    return a === "bottom" ? (m = r ? u : `${p}px`, h = `${-c}px`) : a === "top" ? (m = r ? u : `${p}px`, h = `${o.floating.height + c}px`) : a === "right" ? (m = `${-c}px`, h = r ? u : `${d}px`) : a === "left" && (m = `${o.floating.width + c}px`, h = r ? u : `${d}px`), { data: { x: m, y: h } };
  } };
}
function bt(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function yn(t) {
  const e = H(), n = O(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.width) ?? 0;
  }), o = O(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.height) ?? 0;
  });
  return me(() => {
    const i = xe(t);
    if (i) {
      e.value = { width: i.offsetWidth, height: i.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length) return;
        const l = r[0];
        let c, a;
        if ("borderBoxSize" in l) {
          const f = l.borderBoxSize, u = Array.isArray(f) ? f[0] : f;
          c = u.inlineSize, a = u.blockSize;
        } else c = i.offsetWidth, a = i.offsetHeight;
        e.value = { width: c, height: a };
      });
      return s.observe(i, { box: "border-box" }), () => s.unobserve(i);
    } else e.value = void 0;
  }), { width: n, height: o };
}
const xn = { side: "bottom", sideOffset: 0, align: "center", alignOffset: 0, arrowPadding: 0, avoidCollisions: true, collisionBoundary: () => [], collisionPadding: 0, sticky: "partial", hideWhenDetached: false, positionStrategy: "fixed", updatePositionStrategy: "optimized", prioritizePosition: false }, [Sn, vn] = Yt("PopperContent"), En = At({ inheritAttrs: false, __name: "PopperContent", props: pe({ side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, { ...xn }), emits: ["placed"], setup(t, { emit: e }) {
  const n = t, o = e, i = oe(), { forwardRef: s, currentElement: r } = qt(), l = H(), c = H(), { width: a, height: f } = yn(c), u = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), p = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), d = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = O(() => ({ padding: p.value, boundary: d.value.filter(gn), altBoundary: d.value.length > 0 })), h = ve(() => [on({ mainAxis: n.sideOffset + f.value, alignmentAxis: n.alignOffset }), n.prioritizePosition && n.avoidCollisions && Wt({ ...m.value }), n.avoidCollisions && rn({ mainAxis: true, crossAxis: !!n.prioritizePosition, limiter: n.sticky === "partial" ? an() : void 0, ...m.value }), !n.prioritizePosition && n.avoidCollisions && Wt({ ...m.value }), sn({ ...m.value, apply: ({ elements: R, rects: k, availableWidth: W, availableHeight: S }) => {
    const { width: Y, height: M } = k.reference, D = R.floating.style;
    D.setProperty("--reka-popper-available-width", `${W}px`), D.setProperty("--reka-popper-available-height", `${S}px`), D.setProperty("--reka-popper-anchor-width", `${Y}px`), D.setProperty("--reka-popper-anchor-height", `${M}px`);
  } }), c.value && dn({ element: c.value, padding: n.arrowPadding }), wn({ arrowWidth: a.value, arrowHeight: f.value }), n.hideWhenDetached && ln({ strategy: "referenceHidden", ...m.value })]), g = O(() => n.reference ?? i.anchor.value), { floatingStyles: w, placement: x, isPositioned: y, middlewareData: v } = mn(g, l, { strategy: n.positionStrategy, placement: u, whileElementsMounted: (...R) => nn(...R, { layoutShift: !n.disableUpdateOnLayoutShift, animationFrame: n.updatePositionStrategy === "always" }), middleware: h }), A = O(() => bt(x.value)[0]), P = O(() => bt(x.value)[1]);
  Vt(() => {
    y.value && o("placed");
  });
  const b = O(() => {
    var _a;
    return ((_a = v.value.arrow) == null ? void 0 : _a.centerOffset) !== 0;
  }), C = H("");
  It(() => {
    r.value && (C.value = window.getComputedStyle(r.value).zIndex);
  });
  const E = O(() => {
    var _a;
    return ((_a = v.value.arrow) == null ? void 0 : _a.x) ?? 0;
  }), L = O(() => {
    var _a;
    return ((_a = v.value.arrow) == null ? void 0 : _a.y) ?? 0;
  });
  return vn({ placedSide: A, onArrowChange: (R) => c.value = R, arrowX: E, arrowY: L, shouldHideArrow: b }), (R, k) => {
    var _a, _b, _c;
    return Nt(), he("div", { ref_key: "floatingRef", ref: l, "data-reka-popper-content-wrapper": "", style: ye({ ...$(w), transform: $(y) ? $(w).transform : "translate(0, -200%)", minWidth: "max-content", zIndex: C.value, "--reka-popper-transform-origin": [(_a = $(v).transformOrigin) == null ? void 0 : _a.x, (_b = $(v).transformOrigin) == null ? void 0 : _b.y].join(" "), ...((_c = $(v).hide) == null ? void 0 : _c.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }) }, [ge($(Ut), we({ ref: $(s) }, R.$attrs, { "as-child": n.asChild, as: R.as, "data-side": A.value, "data-align": P.value, style: { animation: $(y) ? void 0 : "none" } }), { default: jt(() => [Ot(R.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-side", "data-align", "style"])], 4);
  };
} });
let gt = 0;
function Dn() {
  It((t) => {
    if (!be) return;
    const e = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", e[0] ?? _t()), document.body.insertAdjacentElement("beforeend", e[1] ?? _t()), gt++, t(() => {
      gt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), gt--;
    });
  });
}
function _t() {
  const t = document.createElement("span");
  return t.setAttribute("data-reka-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
export {
  Pn as _,
  Rn as a,
  pn as b,
  En as c,
  Dn as d,
  Sn as i,
  Cn as u
};
