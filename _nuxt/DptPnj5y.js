import { u as se } from "./6j_b9UX3.js";
import { j as O, B as V, P as le, L as ht, N as ce, O as ae, aT as tt, u as M, a0 as fe, aS as ue, aU as de, d as Ot, R as Ct, aV as Nt, b as me, o as jt, w as It, E as pe, aW as he, V as Yt, c as ge, a as we, m as ye, h as ve } from "./7tyaNgEA.js";
import { c as qt, u as Ut, P as Xt, h as xe, l as be, i as Ae } from "./BqwFAzj-.js";
const Oe = ["top", "right", "bottom", "left"], K = Math.min, k = Math.max, at = Math.round, ct = Math.floor, _ = (t) => ({ x: t, y: t }), Ce = { left: "right", right: "left", bottom: "top", top: "bottom" }, Pe = { start: "end", end: "start" };
function yt(t, e, n) {
  return k(t, K(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function it(t) {
  return t.split("-")[1];
}
function Pt(t) {
  return t === "x" ? "y" : "x";
}
function Rt(t) {
  return t === "y" ? "height" : "width";
}
function Y(t) {
  return ["top", "bottom"].includes(U(t)) ? "y" : "x";
}
function St(t) {
  return Pt(Y(t));
}
function Re(t, e, n) {
  n === void 0 && (n = false);
  const o = it(t), i = St(t), s = Rt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = ft(r)), [r, ft(r)];
}
function Se(t) {
  const e = ft(t);
  return [vt(t), e, vt(e)];
}
function vt(t) {
  return t.replace(/start|end/g, (e) => Pe[e]);
}
function Ee(t, e, n) {
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
function De(t, e, n, o) {
  const i = it(t);
  let s = Ee(U(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(vt)))), s;
}
function ft(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ce[e]);
}
function Le(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Gt(t) {
  return typeof t != "number" ? Le(t) : { top: t, right: t, bottom: t, left: t };
}
function ut(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function Bt(t, e, n) {
  let { reference: o, floating: i } = t;
  const s = Y(e), r = St(e), l = Rt(r), c = U(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, p = o[l] / 2 - i[l] / 2;
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
  switch (it(e)) {
    case "start":
      d[r] -= p * (n && a ? -1 : 1);
      break;
    case "end":
      d[r] += p * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const Te = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: u } = Bt(a, o, c), p = o, d = {}, m = 0;
  for (let h = 0; h < l.length; h++) {
    const { name: g, fn: w } = l[h], { x: v, y, data: x, reset: A } = await w({ x: f, y: u, initialPlacement: o, placement: p, strategy: i, middlewareData: d, rects: a, platform: r, elements: { reference: t, floating: e } });
    f = v ?? f, u = y ?? u, d = { ...d, [g]: { ...d[g], ...x } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (p = A.placement), A.rects && (a = A.rects === true ? await r.getElementRects({ reference: t, floating: e, strategy: i }) : A.rects), { x: f, y: u } = Bt(a, p, c)), h = -1);
  }
  return { x: f, y: u, placement: p, strategy: i, middlewareData: d };
};
async function rt(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: s, rects: r, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: u = "floating", altBoundary: p = false, padding: d = 0 } = q(e, t), m = Gt(d), g = l[p ? u === "floating" ? "reference" : "floating" : u], w = ut(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), v = u === "floating" ? { x: o, y: i, width: r.floating.width, height: r.floating.height } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), x = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, A = ut(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: v, offsetParent: y, strategy: c }) : v);
  return { top: (w.top - A.top + m.top) / x.y, bottom: (A.bottom - w.bottom + m.bottom) / x.y, left: (w.left - A.left + m.left) / x.x, right: (A.right - w.right + m.right) / x.x };
}
const ke = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { x: n, y: o, placement: i, rects: s, platform: r, elements: l, middlewareData: c } = e, { element: a, padding: f = 0 } = q(t, e) || {};
  if (a == null) return {};
  const u = Gt(f), p = { x: n, y: o }, d = St(i), m = Rt(d), h = await r.getDimensions(a), g = d === "y", w = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", x = s.reference[m] + s.reference[d] - p[d] - s.floating[m], A = p[d] - s.reference[d], P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
  let b = P ? P[y] : 0;
  (!b || !await (r.isElement == null ? void 0 : r.isElement(P))) && (b = l.floating[y] || s.floating[m]);
  const C = x / 2 - A / 2, S = b / 2 - h[m] / 2 - 1, E = K(u[w], S), R = K(u[v], S), D = E, z = b - h[m] - R, $ = b / 2 - h[m] / 2 + C, T = yt(D, $, z), I = !c.arrow && it(i) != null && $ !== T && s.reference[m] / 2 - ($ < D ? E : R) - h[m] / 2 < 0, L = I ? $ < D ? $ - D : $ - z : 0;
  return { [d]: p[d] + L, data: { [d]: T, centerOffset: $ - T - L, ...I && { alignmentOffset: L } }, reset: I };
} }), Be = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: u = true, fallbackPlacements: p, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: h = true, ...g } = q(t, e);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const w = U(i), v = Y(l), y = U(l) === l, x = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), A = p || (y || !h ? [ft(l)] : Se(l)), P = m !== "none";
    !p && P && A.push(...De(l, h, m, x));
    const b = [l, ...A], C = await rt(e, g), S = [];
    let E = ((o = s.flip) == null ? void 0 : o.overflows) || [];
    if (f && S.push(C[w]), u) {
      const T = Re(i, r, x);
      S.push(C[T[0]], C[T[1]]);
    }
    if (E = [...E, { placement: i, overflows: S }], !S.every((T) => T <= 0)) {
      var R, D;
      const T = (((R = s.flip) == null ? void 0 : R.index) || 0) + 1, I = b[T];
      if (I) {
        var z;
        const X = u === "alignment" ? v !== Y(I) : false, H = ((z = E[0]) == null ? void 0 : z.overflows[0]) > 0;
        if (!X || H) return { data: { index: T, overflows: E }, reset: { placement: I } };
      }
      let L = (D = E.filter((X) => X.overflows[0] <= 0).sort((X, H) => X.overflows[1] - H.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!L) switch (d) {
        case "bestFit": {
          var $;
          const X = ($ = E.filter((H) => {
            if (P) {
              const G = Y(H.placement);
              return G === v || G === "y";
            }
            return true;
          }).map((H) => [H.placement, H.overflows.filter((G) => G > 0).reduce((G, re) => G + re, 0)]).sort((H, G) => H[1] - G[1])[0]) == null ? void 0 : $[0];
          X && (L = X);
          break;
        }
        case "initialPlacement":
          L = l;
          break;
      }
      if (i !== L) return { reset: { placement: L } };
    }
    return {};
  } };
};
function $t(t, e) {
  return { top: t.top - e.height, right: t.right - e.width, bottom: t.bottom - e.height, left: t.left - e.width };
}
function Mt(t) {
  return Oe.some((e) => t[e] >= 0);
}
const $e = function(t) {
  return t === void 0 && (t = {}), { name: "hide", options: t, async fn(e) {
    const { rects: n } = e, { strategy: o = "referenceHidden", ...i } = q(t, e);
    switch (o) {
      case "referenceHidden": {
        const s = await rt(e, { ...i, elementContext: "reference" }), r = $t(s, n.reference);
        return { data: { referenceHiddenOffsets: r, referenceHidden: Mt(r) } };
      }
      case "escaped": {
        const s = await rt(e, { ...i, altBoundary: true }), r = $t(s, n.floating);
        return { data: { escapedOffsets: r, escaped: Mt(r) } };
      }
      default:
        return {};
    }
  } };
};
async function Me(t, e) {
  const { placement: n, platform: o, elements: i } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = U(n), l = it(n), c = Y(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && c ? -1 : 1, u = q(e, t);
  let { mainAxis: p, crossAxis: d, alignmentAxis: m } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return l && typeof m == "number" && (d = l === "end" ? m * -1 : m), c ? { x: d * f, y: p * a } : { x: p * a, y: d * f };
}
const Fe = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: s, placement: r, middlewareData: l } = e, c = await Me(e, t);
    return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: s + c.y, data: { ...c, placement: r } };
  } };
}, We = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i } = e, { mainAxis: s = true, crossAxis: r = false, limiter: l = { fn: (g) => {
      let { x: w, y: v } = g;
      return { x: w, y: v };
    } }, ...c } = q(t, e), a = { x: n, y: o }, f = await rt(e, c), u = Y(U(i)), p = Pt(u);
    let d = a[p], m = a[u];
    if (s) {
      const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", v = d + f[g], y = d - f[w];
      d = yt(v, d, y);
    }
    if (r) {
      const g = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", v = m + f[g], y = m - f[w];
      m = yt(v, m, y);
    }
    const h = l.fn({ ...e, [p]: d, [u]: m });
    return { ...h, data: { x: h.x - n, y: h.y - o, enabled: { [p]: s, [u]: r } } };
  } };
}, ze = function(t) {
  return t === void 0 && (t = {}), { options: t, fn(e) {
    const { x: n, y: o, placement: i, rects: s, middlewareData: r } = e, { offset: l = 0, mainAxis: c = true, crossAxis: a = true } = q(t, e), f = { x: n, y: o }, u = Y(i), p = Pt(u);
    let d = f[p], m = f[u];
    const h = q(l, e), g = typeof h == "number" ? { mainAxis: h, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h };
    if (c) {
      const y = p === "y" ? "height" : "width", x = s.reference[p] - s.floating[y] + g.mainAxis, A = s.reference[p] + s.reference[y] - g.mainAxis;
      d < x ? d = x : d > A && (d = A);
    }
    if (a) {
      var w, v;
      const y = p === "y" ? "width" : "height", x = ["top", "left"].includes(U(i)), A = s.reference[u] - s.floating[y] + (x && ((w = r.offset) == null ? void 0 : w[u]) || 0) + (x ? 0 : g.crossAxis), P = s.reference[u] + s.reference[y] + (x ? 0 : ((v = r.offset) == null ? void 0 : v[u]) || 0) - (x ? g.crossAxis : 0);
      m < A ? m = A : m > P && (m = P);
    }
    return { [p]: d, [u]: m };
  } };
}, He = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    var n, o;
    const { placement: i, rects: s, platform: r, elements: l } = e, { apply: c = () => {
    }, ...a } = q(t, e), f = await rt(e, a), u = U(i), p = it(i), d = Y(i) === "y", { width: m, height: h } = s.floating;
    let g, w;
    u === "top" || u === "bottom" ? (g = u, w = p === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = u, g = p === "end" ? "top" : "bottom");
    const v = h - f.top - f.bottom, y = m - f.left - f.right, x = K(h - f[g], v), A = K(m - f[w], y), P = !e.middlewareData.shift;
    let b = x, C = A;
    if ((n = e.middlewareData.shift) != null && n.enabled.x && (C = y), (o = e.middlewareData.shift) != null && o.enabled.y && (b = v), P && !p) {
      const E = k(f.left, 0), R = k(f.right, 0), D = k(f.top, 0), z = k(f.bottom, 0);
      d ? C = m - 2 * (E !== 0 || R !== 0 ? E + R : k(f.left, f.right)) : b = h - 2 * (D !== 0 || z !== 0 ? D + z : k(f.top, f.bottom));
    }
    await c({ ...e, availableWidth: C, availableHeight: b });
    const S = await r.getDimensions(l.floating);
    return m !== S.width || h !== S.height ? { reset: { rects: true } } : {};
  } };
};
function dt() {
  return typeof window < "u";
}
function Q(t) {
  return Et(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function B(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function j(t) {
  var e;
  return (e = (Et(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Et(t) {
  return dt() ? t instanceof Node || t instanceof B(t).Node : false;
}
function F(t) {
  return dt() ? t instanceof Element || t instanceof B(t).Element : false;
}
function N(t) {
  return dt() ? t instanceof HTMLElement || t instanceof B(t).HTMLElement : false;
}
function Ft(t) {
  return !dt() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof B(t).ShadowRoot;
}
function lt(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = W(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Ve(t) {
  return ["table", "td", "th"].includes(Q(t));
}
function mt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return false;
    }
  });
}
function Dt(t) {
  const e = Lt(), n = F(t) ? W(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function _e(t) {
  let e = Z(t);
  for (; N(e) && !ot(e); ) {
    if (Dt(e)) return e;
    if (mt(e)) return null;
    e = Z(e);
  }
  return null;
}
function Lt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function ot(t) {
  return ["html", "body", "#document"].includes(Q(t));
}
function W(t) {
  return B(t).getComputedStyle(t);
}
function pt(t) {
  return F(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function Z(t) {
  if (Q(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Ft(t) && t.host || j(t);
  return Ft(e) ? e.host : e;
}
function Kt(t) {
  const e = Z(t);
  return ot(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && lt(e) ? e : Kt(e);
}
function st(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = Kt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = B(i);
  if (s) {
    const l = xt(r);
    return e.concat(r, r.visualViewport || [], lt(i) ? i : [], l && n ? st(l) : []);
  }
  return e.concat(i, st(i, [], n));
}
function xt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Zt(t) {
  const e = W(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = N(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = at(n) !== s || at(o) !== r;
  return l && (n = s, o = r), { width: n, height: o, $: l };
}
function Tt(t) {
  return F(t) ? t : t.contextElement;
}
function nt(t) {
  const e = Tt(t);
  if (!N(e)) return _(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: s } = Zt(e);
  let r = (s ? at(n.width) : n.width) / o, l = (s ? at(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: r, y: l };
}
const Ne = _(0);
function Jt(t) {
  const e = B(t);
  return !Lt() || !e.visualViewport ? Ne : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function je(t, e, n) {
  return e === void 0 && (e = false), !n || e && n !== B(t) ? false : e;
}
function J(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), s = Tt(t);
  let r = _(1);
  e && (o ? F(o) && (r = nt(o)) : r = nt(t));
  const l = je(s, n, o) ? Jt(s) : _(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s) {
    const p = B(s), d = o && F(o) ? B(o) : o;
    let m = p, h = xt(m);
    for (; h && o && d !== m; ) {
      const g = nt(h), w = h.getBoundingClientRect(), v = W(h), y = w.left + (h.clientLeft + parseFloat(v.paddingLeft)) * g.x, x = w.top + (h.clientTop + parseFloat(v.paddingTop)) * g.y;
      c *= g.x, a *= g.y, f *= g.x, u *= g.y, c += y, a += x, m = B(h), h = xt(m);
    }
  }
  return ut({ width: f, height: u, x: c, y: a });
}
function kt(t, e) {
  const n = pt(t).scrollLeft;
  return e ? e.left + n : J(j(t)).left + n;
}
function Qt(t, e, n) {
  n === void 0 && (n = false);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : kt(t, o)), s = o.top + e.scrollTop;
  return { x: i, y: s };
}
function Ie(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const s = i === "fixed", r = j(o), l = e ? mt(e.floating) : false;
  if (o === r || l && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = _(1);
  const f = _(0), u = N(o);
  if ((u || !u && !s) && ((Q(o) !== "body" || lt(r)) && (c = pt(o)), N(o))) {
    const d = J(o);
    a = nt(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const p = r && !u && !s ? Qt(r, c, true) : _(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + p.x, y: n.y * a.y - c.scrollTop * a.y + f.y + p.y };
}
function Ye(t) {
  return Array.from(t.getClientRects());
}
function qe(t) {
  const e = j(t), n = pt(t), o = t.ownerDocument.body, i = k(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = k(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + kt(t);
  const l = -n.scrollTop;
  return W(o).direction === "rtl" && (r += k(e.clientWidth, o.clientWidth) - i), { width: i, height: s, x: r, y: l };
}
function Ue(t, e) {
  const n = B(t), o = j(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = Lt();
    (!a || a && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return { width: s, height: r, x: l, y: c };
}
function Xe(t, e) {
  const n = J(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = N(t) ? nt(t) : _(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return { width: r, height: l, x: c, y: a };
}
function Wt(t, e, n) {
  let o;
  if (e === "viewport") o = Ue(t, n);
  else if (e === "document") o = qe(j(t));
  else if (F(e)) o = Xe(e, n);
  else {
    const i = Jt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return ut(o);
}
function te(t, e) {
  const n = Z(t);
  return n === e || !F(n) || ot(n) ? false : W(n).position === "fixed" || te(n, e);
}
function Ge(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = st(t, [], false).filter((l) => F(l) && Q(l) !== "body"), i = null;
  const s = W(t).position === "fixed";
  let r = s ? Z(t) : t;
  for (; F(r) && !ot(r); ) {
    const l = W(r), c = Dt(r);
    !c && l.position === "fixed" && (i = null), (s ? !c && !i : !c && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || lt(r) && !c && te(t, r)) ? o = o.filter((f) => f !== r) : i = l, r = Z(r);
  }
  return e.set(t, o), o;
}
function Ke(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const r = [...n === "clippingAncestors" ? mt(e) ? [] : Ge(e, this._c) : [].concat(n), o], l = r[0], c = r.reduce((a, f) => {
    const u = Wt(e, f, i);
    return a.top = k(u.top, a.top), a.right = K(u.right, a.right), a.bottom = K(u.bottom, a.bottom), a.left = k(u.left, a.left), a;
  }, Wt(e, l, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Ze(t) {
  const { width: e, height: n } = Zt(t);
  return { width: e, height: n };
}
function Je(t, e, n) {
  const o = N(e), i = j(e), s = n === "fixed", r = J(t, true, s, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = _(0);
  function a() {
    c.x = kt(i);
  }
  if (o || !o && !s) if ((Q(e) !== "body" || lt(i)) && (l = pt(e)), o) {
    const d = J(e, true, s, e);
    c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
  } else i && a();
  s && !o && i && a();
  const f = i && !o && !s ? Qt(i, l) : _(0), u = r.left + l.scrollLeft - c.x - f.x, p = r.top + l.scrollTop - c.y - f.y;
  return { x: u, y: p, width: r.width, height: r.height };
}
function gt(t) {
  return W(t).position === "static";
}
function zt(t, e) {
  if (!N(t) || W(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return j(t) === n && (n = n.ownerDocument.body), n;
}
function ee(t, e) {
  const n = B(t);
  if (mt(t)) return n;
  if (!N(t)) {
    let i = Z(t);
    for (; i && !ot(i); ) {
      if (F(i) && !gt(i)) return i;
      i = Z(i);
    }
    return n;
  }
  let o = zt(t, e);
  for (; o && Ve(o) && gt(o); ) o = zt(o, e);
  return o && ot(o) && gt(o) && !Dt(o) ? n : o || _e(t) || n;
}
const Qe = async function(t) {
  const e = this.getOffsetParent || ee, n = this.getDimensions, o = await n(t.floating);
  return { reference: Je(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function tn(t) {
  return W(t).direction === "rtl";
}
const en = { convertOffsetParentRelativeRectToViewportRelativeRect: Ie, getDocumentElement: j, getClippingRect: Ke, getOffsetParent: ee, getElementRects: Qe, getClientRects: Ye, getDimensions: Ze, getScale: nt, isElement: F, isRTL: tn };
function ne(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function nn(t, e) {
  let n = null, o;
  const i = j(t);
  function s() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function r(l, c) {
    l === void 0 && (l = false), c === void 0 && (c = 1), s();
    const a = t.getBoundingClientRect(), { left: f, top: u, width: p, height: d } = a;
    if (l || e(), !p || !d) return;
    const m = ct(u), h = ct(i.clientWidth - (f + p)), g = ct(i.clientHeight - (u + d)), w = ct(f), y = { rootMargin: -m + "px " + -h + "px " + -g + "px " + -w + "px", threshold: k(0, K(1, c)) || 1 };
    let x = true;
    function A(P) {
      const b = P[0].intersectionRatio;
      if (b !== c) {
        if (!x) return r();
        b ? r(false, b) : o = setTimeout(() => {
          r(false, 1e-7);
        }, 1e3);
      }
      b === 1 && !ne(a, t.getBoundingClientRect()) && r(), x = false;
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
function on(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = Tt(t), f = i || s ? [...a ? st(a) : [], ...st(e)] : [];
  f.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: true }), s && w.addEventListener("resize", n);
  });
  const u = a && l ? nn(a, n) : null;
  let p = -1, d = null;
  r && (d = new ResizeObserver((w) => {
    let [v] = w;
    v && v.target === a && d && (d.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = d) == null || y.observe(e);
    })), n();
  }), a && !c && d.observe(a), d.observe(e));
  let m, h = c ? J(t) : null;
  c && g();
  function g() {
    const w = J(t);
    h && !ne(h, w) && n(), h = w, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    f.forEach((v) => {
      i && v.removeEventListener("scroll", n), s && v.removeEventListener("resize", n);
    }), u == null ? void 0 : u(), (w = d) == null || w.disconnect(), d = null, c && cancelAnimationFrame(m);
  };
}
const rn = Fe, sn = We, Ht = Be, ln = He, cn = $e, an = ke, fn = ze, un = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: en, ...n }, s = { ...i.platform, _c: o };
  return Te(t, e, { ...i, platform: s });
};
function dn(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function bt(t) {
  if (dn(t)) {
    const e = t.$el;
    return Et(e) && Q(e) === "#comment" ? null : e;
  }
  return t;
}
function et(t) {
  return typeof t == "function" ? t() : M(t);
}
function mn(t) {
  return { name: "arrow", options: t, fn(e) {
    const n = bt(et(t.element));
    return n == null ? {} : an({ element: n, padding: t.padding }).fn(e);
  } };
}
function oe(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vt(t, e) {
  const n = oe(t);
  return Math.round(e * n) / n;
}
function pn(t, e, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, i = O(() => {
    var b;
    return (b = et(n.open)) != null ? b : true;
  }), s = O(() => et(n.middleware)), r = O(() => {
    var b;
    return (b = et(n.placement)) != null ? b : "bottom";
  }), l = O(() => {
    var b;
    return (b = et(n.strategy)) != null ? b : "absolute";
  }), c = O(() => {
    var b;
    return (b = et(n.transform)) != null ? b : true;
  }), a = O(() => bt(t.value)), f = O(() => bt(e.value)), u = V(0), p = V(0), d = V(l.value), m = V(r.value), h = le({}), g = V(false), w = O(() => {
    const b = { position: d.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = Vt(f.value, u.value), S = Vt(f.value, p.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + S + "px)", ...oe(f.value) >= 1.5 && { willChange: "transform" } } : { position: d.value, left: C + "px", top: S + "px" };
  });
  let v;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    un(a.value, f.value, { middleware: s.value, placement: r.value, strategy: l.value }).then((C) => {
      u.value = C.x, p.value = C.y, d.value = C.strategy, m.value = C.placement, h.value = C.middlewareData, g.value = b !== false;
    });
  }
  function x() {
    typeof v == "function" && (v(), v = void 0);
  }
  function A() {
    if (x(), o === void 0) {
      y();
      return;
    }
    if (a.value != null && f.value != null) {
      v = o(a.value, f.value, y);
      return;
    }
  }
  function P() {
    i.value || (g.value = false);
  }
  return ht([s, r, l, i], y, { flush: "sync" }), ht([a, f], A, { flush: "sync" }), ht(i, P, { flush: "sync" }), ce() && ae(x), { x: tt(u), y: tt(p), strategy: tt(d), placement: tt(m), middlewareData: tt(h), isPositioned: tt(g), floatingStyles: w, update: y };
}
function hn(t) {
  const e = fe(), n = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((i, s) => {
    const r = (e == null ? void 0 : e.type.props[s]).default;
    return r !== void 0 && (i[s] = r), i;
  }, {}), o = ue(t);
  return O(() => {
    const i = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      i[de(r)] = s[r];
    }), Object.keys({ ...n, ...i }).reduce((r, l) => (o.value[l] !== void 0 && (r[l] = o.value[l]), r), {});
  });
}
function Pn(t, e) {
  const n = hn(t), o = e ? se(e) : {};
  return O(() => ({ ...n.value, ...o }));
}
const [ie, gn] = qt("PopperRoot"), Rn = Ot({ inheritAttrs: false, __name: "PopperRoot", setup(t) {
  const e = V();
  return gn({ anchor: e, onAnchorChange: (n) => e.value = n }), (n, o) => Ct(n.$slots, "default");
} }), Sn = Ot({ __name: "PopperAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t, { forwardRef: n, currentElement: o } = Ut(), i = ie();
  return Nt(() => {
    i.onAnchorChange(e.reference ?? o.value);
  }), (s, r) => (jt(), me(M(Xt), { ref: M(n), as: s.as, "as-child": s.asChild }, { default: It(() => [Ct(s.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} });
function wn(t) {
  return t !== null;
}
function yn(t) {
  return { name: "transformOrigin", options: t, fn(e) {
    var _a, _b, _c;
    const { placement: n, rects: o, middlewareData: i } = e, r = ((_a = i.arrow) == null ? void 0 : _a.centerOffset) !== 0, l = r ? 0 : t.arrowWidth, c = r ? 0 : t.arrowHeight, [a, f] = At(n), u = { start: "0%", center: "50%", end: "100%" }[f], p = (((_b = i.arrow) == null ? void 0 : _b.x) ?? 0) + l / 2, d = (((_c = i.arrow) == null ? void 0 : _c.y) ?? 0) + c / 2;
    let m = "", h = "";
    return a === "bottom" ? (m = r ? u : `${p}px`, h = `${-c}px`) : a === "top" ? (m = r ? u : `${p}px`, h = `${o.floating.height + c}px`) : a === "right" ? (m = `${-c}px`, h = r ? u : `${d}px`) : a === "left" && (m = `${o.floating.width + c}px`, h = r ? u : `${d}px`), { data: { x: m, y: h } };
  } };
}
function At(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function vn(t) {
  const e = V(), n = O(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.width) ?? 0;
  }), o = O(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.height) ?? 0;
  });
  return pe(() => {
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
const xn = { side: "bottom", sideOffset: 0, align: "center", alignOffset: 0, arrowPadding: 0, avoidCollisions: true, collisionBoundary: () => [], collisionPadding: 0, sticky: "partial", hideWhenDetached: false, positionStrategy: "fixed", updatePositionStrategy: "optimized", prioritizePosition: false }, [En, bn] = qt("PopperContent"), Dn = Ot({ inheritAttrs: false, __name: "PopperContent", props: he({ side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, { ...xn }), emits: ["placed"], setup(t, { emit: e }) {
  const n = t, o = e, i = ie(), { forwardRef: s, currentElement: r } = Ut(), l = V(), c = V(), { width: a, height: f } = vn(c), u = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), p = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), d = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = O(() => ({ padding: p.value, boundary: d.value.filter(wn), altBoundary: d.value.length > 0 })), h = be(() => [rn({ mainAxis: n.sideOffset + f.value, alignmentAxis: n.alignOffset }), n.prioritizePosition && n.avoidCollisions && Ht({ ...m.value }), n.avoidCollisions && sn({ mainAxis: true, crossAxis: !!n.prioritizePosition, limiter: n.sticky === "partial" ? fn() : void 0, ...m.value }), !n.prioritizePosition && n.avoidCollisions && Ht({ ...m.value }), ln({ ...m.value, apply: ({ elements: R, rects: D, availableWidth: z, availableHeight: $ }) => {
    const { width: T, height: I } = D.reference, L = R.floating.style;
    L.setProperty("--reka-popper-available-width", `${z}px`), L.setProperty("--reka-popper-available-height", `${$}px`), L.setProperty("--reka-popper-anchor-width", `${T}px`), L.setProperty("--reka-popper-anchor-height", `${I}px`);
  } }), c.value && mn({ element: c.value, padding: n.arrowPadding }), yn({ arrowWidth: a.value, arrowHeight: f.value }), n.hideWhenDetached && cn({ strategy: "referenceHidden", ...m.value })]), g = O(() => n.reference ?? i.anchor.value), { floatingStyles: w, placement: v, isPositioned: y, middlewareData: x } = pn(g, l, { strategy: n.positionStrategy, placement: u, whileElementsMounted: (...R) => on(...R, { layoutShift: !n.disableUpdateOnLayoutShift, animationFrame: n.updatePositionStrategy === "always" }), middleware: h }), A = O(() => At(v.value)[0]), P = O(() => At(v.value)[1]);
  Nt(() => {
    y.value && o("placed");
  });
  const b = O(() => {
    var _a;
    return ((_a = x.value.arrow) == null ? void 0 : _a.centerOffset) !== 0;
  }), C = V("");
  Yt(() => {
    r.value && (C.value = window.getComputedStyle(r.value).zIndex);
  });
  const S = O(() => {
    var _a;
    return ((_a = x.value.arrow) == null ? void 0 : _a.x) ?? 0;
  }), E = O(() => {
    var _a;
    return ((_a = x.value.arrow) == null ? void 0 : _a.y) ?? 0;
  });
  return bn({ placedSide: A, onArrowChange: (R) => c.value = R, arrowX: S, arrowY: E, shouldHideArrow: b }), (R, D) => {
    var _a, _b, _c;
    return jt(), ge("div", { ref_key: "floatingRef", ref: l, "data-reka-popper-content-wrapper": "", style: ve({ ...M(w), transform: M(y) ? M(w).transform : "translate(0, -200%)", minWidth: "max-content", zIndex: C.value, "--reka-popper-transform-origin": [(_a = M(x).transformOrigin) == null ? void 0 : _a.x, (_b = M(x).transformOrigin) == null ? void 0 : _b.y].join(" "), ...((_c = M(x).hide) == null ? void 0 : _c.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }) }, [we(M(Xt), ye({ ref: M(s) }, R.$attrs, { "as-child": n.asChild, as: R.as, "data-side": A.value, "data-align": P.value, style: { animation: M(y) ? void 0 : "none" } }), { default: It(() => [Ct(R.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-side", "data-align", "style"])], 4);
  };
} });
let wt = 0;
function Ln() {
  Yt((t) => {
    if (!Ae) return;
    const e = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", e[0] ?? _t()), document.body.insertAdjacentElement("beforeend", e[1] ?? _t()), wt++, t(() => {
      wt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), wt--;
    });
  });
}
function _t() {
  const t = document.createElement("span");
  return t.setAttribute("data-reka-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
export {
  Sn as _,
  Rn as a,
  hn as b,
  Dn as c,
  Ln as d,
  En as i,
  Pn as u
};
